"""Tests sans réseau de la publication des données de roadmap."""
import hashlib
import json
from pathlib import Path
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).parent))
import roadmap_publish as rp  # noqa: E402
from test_s3_publish import FakeS3  # noqa: E402


class NotFound(Exception):
    response = {'Error': {'Code': '404'}}


class FakeS3WithHead(FakeS3):
    def head_object(self, Bucket, Key):
        if Key not in self.objects:
            raise NotFound(Key)
        return {}


def write_export(root: Path, payload: str) -> str:
    """Crée un export cohérent ; la release dépend du contenu, comme export.mjs."""
    release = hashlib.sha256(payload.encode()).hexdigest()
    locales = {}
    for locale in ('fr', 'en'):
        data = json.dumps({'locale': locale, 'payload': payload}).encode()
        path = root / 'releases' / release / f'{locale}.json'
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
        locales[locale] = {'file': f'releases/{release}/{locale}.json', 'count': 1,
                           'sha256': hashlib.sha256(data).hexdigest()}
    product = (root / 'releases' / release / 'iaas.yaml')
    product.write_text(f'product: IaaS\n# {payload}\n')
    manifest = {'schemaVersion': 1, 'release': release, 'locales': locales,
                'products': [{'file': f'releases/{release}/iaas.yaml',
                              'sha256': hashlib.sha256(product.read_bytes()).hexdigest()}]}
    (root / 'manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
    return release


class RoadmapPublishTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.export = Path(self.tmp.name)
        self.release = write_export(self.export, 'v1')
        self.client = FakeS3WithHead()

    def tearDown(self):
        self.tmp.cleanup()

    def test_first_publication_writes_release_then_manifest(self):
        report = rp.publish(self.client, 'docs-test', self.export)
        self.assertEqual(report['uploads'], 3)
        self.assertEqual(self.client.writes[-1], 'roadmap-data/manifest.json')
        self.assertEqual(len(self.client.writes), 4)
        fr = self.client.objects[f'roadmap-data/releases/{self.release}/fr.json']
        self.assertEqual(fr['CacheControl'], rp.CACHE_RELEASE)
        self.assertEqual(self.client.objects[f'roadmap-data/releases/{self.release}/iaas.yaml']['ContentType'], 'application/yaml')
        self.assertEqual(self.client.objects['roadmap-data/manifest.json']['CacheControl'], rp.CACHE_MANIFEST)

    def test_unchanged_export_writes_nothing(self):
        rp.publish(self.client, 'docs-test', self.export)
        self.client.writes.clear()
        report = rp.publish(self.client, 'docs-test', self.export)
        self.assertEqual((report['uploads'], report['manifest_changed']), (0, False))
        self.assertEqual(self.client.writes, [])

    def test_new_release_keeps_the_previous_one_readable(self):
        rp.publish(self.client, 'docs-test', self.export)
        with tempfile.TemporaryDirectory() as other:
            new = write_export(Path(other), 'v2')
            self.client.writes.clear()
            rp.publish(self.client, 'docs-test', Path(other))
        self.assertEqual(self.client.writes[-1], 'roadmap-data/manifest.json')
        self.assertTrue(all(new in key for key in self.client.writes[:-1]))
        self.assertIn(f'roadmap-data/releases/{self.release}/fr.json', self.client.objects)
        self.assertEqual(self.client.deleted, [])

    def test_corrupted_export_is_refused_before_any_write(self):
        (self.export / 'releases' / self.release / 'fr.json').write_text('{"altéré": true}')
        with self.assertRaises(SystemExit):
            rp.publish(self.client, 'docs-test', self.export)
        self.assertEqual(self.client.writes, [])

    def test_paths_outside_the_release_are_refused(self):
        manifest = json.loads((self.export / 'manifest.json').read_text())
        manifest['products'][0]['file'] = f'releases/{self.release}/../../escape.yaml'
        (self.export / 'manifest.json').write_text(json.dumps(manifest))
        with self.assertRaises(SystemExit):
            rp.publish(self.client, 'docs-test', self.export)

    def test_failed_release_upload_does_not_switch_the_manifest(self):
        rp.publish(self.client, 'docs-test', self.export)
        previous = self.client.objects['roadmap-data/manifest.json']['Body']
        with tempfile.TemporaryDirectory() as other:
            new = write_export(Path(other), 'v2')
            failing = FakeS3WithHead(fail_on={f'roadmap-data/releases/{new}/en.json'})
            failing.objects = self.client.objects
            with self.assertRaises(ConnectionError):
                rp.publish(failing, 'docs-test', Path(other))
        self.assertEqual(self.client.objects['roadmap-data/manifest.json']['Body'], previous)

    def test_dry_run_writes_nothing(self):
        report = rp.publish(self.client, 'docs-test', self.export, dry_run=True)
        self.assertEqual(report['uploads'], 3)
        self.assertEqual(self.client.writes, [])


if __name__ == '__main__':
    unittest.main()
