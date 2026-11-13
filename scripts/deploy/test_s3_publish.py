"""Tests sans réseau de la publication différentielle (python3 -m unittest)."""
import base64
from datetime import datetime, timedelta, timezone
import hashlib
import io
import json
from pathlib import Path
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).parent))
import s3_publish as sp  # noqa: E402

NOW = datetime(2026, 11, 13, 12, 0, tzinfo=timezone.utc)
GRACE = timedelta(days=7)


class NoSuchKey(Exception):
    pass


class FakeS3:
    """S3 en mémoire : vérifie Content-MD5 comme le serveur et trace l'ordre des écritures."""

    class exceptions:
        NoSuchKey = NoSuchKey

    def __init__(self, fail_on=None):
        self.objects, self.writes, self.deleted, self.fail_on = {}, [], [], fail_on or set()

    def get_object(self, Bucket, Key):
        if Key not in self.objects:
            raise NoSuchKey(Key)
        return {'Body': io.BytesIO(self.objects[Key]['Body'])}

    def put_object(self, Bucket, Key, Body, ContentType, CacheControl, ContentMD5):
        if Key in self.fail_on:
            raise ConnectionError(f'panne simulée sur {Key}')
        if base64.b64encode(hashlib.md5(Body).digest()).decode() != ContentMD5:
            raise ValueError('BadDigest')
        self.objects[Key] = {'Body': Body, 'ContentType': ContentType, 'CacheControl': CacheControl}
        self.writes.append(Key)

    def delete_objects(self, Bucket, Delete):
        for item in Delete['Objects']:
            self.objects.pop(item['Key'], None)
            self.deleted.append(item['Key'])
        return {}


def write_build(root: Path, files: dict[str, bytes]) -> Path:
    base = {'index.html': b'<html>root</html>', 'home.html': b'<html>home</html>', '404.html': b'<html>404</html>'}
    for name, data in {**base, **files}.items():
        path = root / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
    return root


def run(client, build, now=NOW, **kwargs):
    return sp.publish(client, 'docs-test', build, now=now, grace=GRACE, commit='abc', **kwargs)


class InventoryTests(unittest.TestCase):
    def test_clean_path_aliases_follow_docusaurus_routes(self):
        self.assertIsNone(sp.clean_path_key('index.html'))
        self.assertEqual(sp.clean_path_key('home.html'), 'home')
        self.assertEqual(sp.clean_path_key('console/api.html'), 'console/api')
        self.assertEqual(sp.clean_path_key('en/index.html'), 'en')
        self.assertIsNone(sp.clean_path_key('assets/js/main.1234.js'))

    def test_types_and_cache_policies(self):
        with tempfile.TemporaryDirectory() as tmp:
            objects = sp.inventory(write_build(Path(tmp), {
                'assets/js/main.1a2b.js': b'js', 'img/logo.png': b'png', 'sitemap.xml': b'<x/>',
                '.DS_Store': b'junk'}))
        self.assertEqual(objects['home'].content_type, 'text/html; charset=utf-8')
        self.assertEqual(objects['home'].cache_control, sp.CACHE_HTML)
        self.assertEqual(objects['assets/js/main.1a2b.js'].cache_control, sp.CACHE_IMMUTABLE)
        self.assertEqual(objects['img/logo.png'].cache_control, sp.CACHE_DEFAULT)
        self.assertEqual(objects['img/logo.png'].content_type, 'image/png')
        self.assertNotIn('.DS_Store', objects)

    def test_refuses_an_incomplete_build_directory(self):
        with tempfile.TemporaryDirectory() as tmp:
            (Path(tmp) / 'home.html').write_text('x')
            with self.assertRaises(SystemExit):
                sp.inventory(Path(tmp))

    def test_refuses_files_in_the_reserved_manifest_prefix(self):
        with tempfile.TemporaryDirectory() as tmp:
            with self.assertRaises(SystemExit):
                sp.inventory(write_build(Path(tmp), {'_deploy/site-manifest.json': b'{}'}))


class PublishTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.build = write_build(Path(self.tmp.name), {
            'assets/js/main.aaaa.js': b'console.log(1)', 'console/api.html': b'<script src="main.aaaa.js">',
            'img/logo.png': b'\x89PNG'})
        self.client = FakeS3()

    def tearDown(self):
        self.tmp.cleanup()

    def manifest(self):
        return json.loads(self.client.objects[sp.MANIFEST_KEY]['Body'])

    def test_first_publication_uploads_everything_and_writes_manifest_last(self):
        report = run(self.client, self.build)
        self.assertTrue(report['first_publication'])
        self.assertEqual(report['uploads'], report['objects'])
        self.assertEqual(self.client.writes[-1], sp.MANIFEST_KEY)
        self.assertIn('console/api', self.client.objects)
        self.assertEqual(self.client.objects['console/api']['ContentType'], 'text/html; charset=utf-8')

    def test_html_is_written_only_after_every_other_file(self):
        run(self.client, self.build)
        kinds = [key.endswith('.html') or '.' not in key.rsplit('/', 1)[-1] for key in self.client.writes[:-1]]
        self.assertEqual(kinds, sorted(kinds), 'une page HTML a été écrite avant un JS/CSS/image')

    def test_second_run_without_change_writes_only_the_manifest(self):
        run(self.client, self.build)
        self.client.writes.clear()
        report = run(self.client, self.build)
        self.assertEqual(report['uploads'], 0)
        self.assertEqual(self.client.writes, [sp.MANIFEST_KEY])

    def test_same_size_but_different_content_is_uploaded(self):
        # Cas réel : seule l'empreinte du JS change dans la page, la taille est identique.
        run(self.client, self.build)
        page = self.build / 'console/api.html'
        before = page.stat().st_size
        page.write_bytes(b'<script src="main.bbbb.js">')
        self.assertEqual(page.stat().st_size, before)
        self.client.writes.clear()
        report = run(self.client, self.build)
        self.assertEqual(sorted(self.client.writes[:-1]), ['console/api', 'console/api.html'])
        self.assertEqual(report['uploads'], 2)

    def test_metadata_change_alone_triggers_upload(self):
        run(self.client, self.build)
        manifest = self.manifest()
        manifest['objects']['img/logo.png']['cache_control'] = 'no-store'
        self.client.objects[sp.MANIFEST_KEY]['Body'] = json.dumps(manifest).encode()
        self.client.writes.clear()
        run(self.client, self.build)
        self.assertEqual(self.client.writes, ['img/logo.png', sp.MANIFEST_KEY])

    def test_removed_object_waits_for_grace_period_then_is_deleted(self):
        run(self.client, self.build)
        (self.build / 'img/logo.png').unlink()
        report = run(self.client, self.build, now=NOW + timedelta(days=1))
        self.assertEqual(report['deletions'], 0)
        self.assertIn('img/logo.png', self.client.objects)
        self.assertEqual(self.manifest()['pending_deletion']['img/logo.png']['since'], (NOW + timedelta(days=1)).isoformat())
        run(self.client, self.build, now=NOW + timedelta(days=5))  # le délai ne repart pas à zéro
        self.assertIn('img/logo.png', self.client.objects)
        report = run(self.client, self.build, now=NOW + timedelta(days=8, hours=1))
        self.assertEqual(report['deleted'], 1)
        self.assertNotIn('img/logo.png', self.client.objects)
        self.assertNotIn('img/logo.png', self.manifest()['pending_deletion'])

    def test_reappearing_object_leaves_pending_deletion(self):
        run(self.client, self.build)
        logo = (self.build / 'img/logo.png').read_bytes()
        (self.build / 'img/logo.png').unlink()
        run(self.client, self.build, now=NOW + timedelta(days=1))
        (self.build / 'img/logo.png').write_bytes(logo)
        run(self.client, self.build, now=NOW + timedelta(days=10))
        self.assertIn('img/logo.png', self.client.objects)
        self.assertNotIn('img/logo.png', self.manifest()['pending_deletion'])

    def test_objects_not_published_by_the_script_are_never_deleted(self):
        self.client.objects['roadmap-data/manifest.json'] = {'Body': b'{}'}
        run(self.client, self.build)
        run(self.client, self.build, now=NOW + timedelta(days=30))
        self.assertIn('roadmap-data/manifest.json', self.client.objects)
        self.assertEqual(self.client.deleted, [])

    def test_failed_upload_leaves_previous_manifest_and_next_run_retries(self):
        run(self.client, self.build)
        previous = self.client.objects[sp.MANIFEST_KEY]['Body']
        (self.build / 'assets/js/main.aaaa.js').write_bytes(b'console.log(2)')
        (self.build / 'console/api.html').write_bytes(b'<script src="main.bbbb.js">!')
        failing = FakeS3(fail_on={'assets/js/main.aaaa.js'})
        failing.objects = self.client.objects
        with self.assertRaises(ConnectionError):
            run(failing, self.build)
        self.assertEqual(self.client.objects[sp.MANIFEST_KEY]['Body'], previous)
        self.assertNotIn('console/api.html', failing.writes, 'une page a été écrite alors que son JS a échoué')
        retry = FakeS3()
        retry.objects = self.client.objects
        report = run(retry, self.build)
        self.assertEqual(report['uploads'], 3)  # JS + page + copie sans extension

    def test_mass_deletion_is_refused(self):
        run(self.client, self.build)
        for name in ['assets/js/main.aaaa.js', 'console/api.html', 'img/logo.png']:
            (self.build / name).unlink()
        self.client.writes.clear()
        # Refus dès la disparition, avant toute mise en attente : sinon les objets
        # seraient effacés silencieusement à l'échéance du délai de grâce.
        with self.assertRaises(SystemExit):
            run(self.client, self.build, now=NOW + timedelta(days=1))
        self.assertEqual(self.client.writes, [])
        self.assertEqual(self.manifest()['pending_deletion'], {})
        self.assertEqual(self.client.deleted, [])

    def test_prefix_isolates_every_write_and_keeps_cache_rules(self):
        self.client.objects['home'] = {'Body': b'site existant'}
        run(self.client, self.build, prefix='_ci-test/run-1/')
        self.assertTrue(all(key.startswith('_ci-test/run-1/') for key in self.client.writes))
        self.assertEqual(self.client.writes[-1], '_ci-test/run-1/' + sp.MANIFEST_KEY)
        self.assertEqual(self.client.objects['home']['Body'], b'site existant')
        self.assertEqual(self.client.objects['_ci-test/run-1/assets/js/main.aaaa.js']['CacheControl'], sp.CACHE_IMMUTABLE)
        for bad in ['/abs/', 'no-slash', '../up/']:
            with self.assertRaises(SystemExit):
                run(self.client, self.build, prefix=bad)

    def test_dry_run_writes_nothing(self):
        report = run(self.client, self.build, dry_run=True)
        self.assertEqual(self.client.writes, [])
        self.assertGreater(report['uploads'], 0)

    def test_unknown_manifest_version_stops_publication(self):
        self.client.objects[sp.MANIFEST_KEY] = {'Body': b'{"version": 99, "objects": {}}'}
        with self.assertRaises(SystemExit):
            run(self.client, self.build)
        self.assertEqual(self.client.writes, [])


if __name__ == '__main__':
    unittest.main()
