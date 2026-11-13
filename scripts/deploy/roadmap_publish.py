"""Publication des données de roadmap (export de plugins/roadmap/export.mjs) vers S3.

Les fichiers de release sont immuables : leur chemin contient l'empreinte de la
release (`releases/<sha256>/fr.json`). Un fichier déjà présent n'est donc pas
renvoyé. `manifest.json` est le pointeur vers la release courante : il est écrit
en dernier, après tous les fichiers qu'il référence, et seulement s'il a changé.
Aucune ancienne release n'est supprimée : un navigateur qui a chargé l'ancien
manifeste peut encore lire ses fichiers.

Identifiants : variables standard AWS_ACCESS_KEY_ID et AWS_SECRET_ACCESS_KEY.
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import json
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).parent))
from s3_publish import s3_client  # noqa: E402

PREFIX = 'roadmap-data/'
CACHE_RELEASE = 'public, max-age=31536000, immutable'
CACHE_MANIFEST = 'no-store'


def entries(export: Path) -> tuple[dict, list[dict]]:
    """Valide l'export : chemins sous releases/<release>/ et empreintes exactes."""
    manifest = json.loads((export / 'manifest.json').read_text())
    release = manifest.get('release')
    if manifest.get('schemaVersion') != 1 or not isinstance(release, str) or len(release) != 64:
        raise SystemExit('manifest.json de roadmap invalide')
    files = list(manifest['locales'].values()) + list(manifest.get('products', []))
    for entry in files:
        name = entry['file']
        if not name.startswith(f'releases/{release}/') or '..' in name.split('/'):
            raise SystemExit(f'Chemin refusé dans l\'export : {name}')
        if hashlib.sha256((export / name).read_bytes()).hexdigest() != entry['sha256']:
            raise SystemExit(f'Empreinte incorrecte pour {name}')
    return manifest, files


def exists(client, bucket: str, key: str) -> bool:
    try:
        client.head_object(Bucket=bucket, Key=key)
        return True
    except Exception as error:  # botocore.ClientError ; code 404 si absent.
        if getattr(error, 'response', {}).get('Error', {}).get('Code') in ('404', 'NoSuchKey', 'NotFound'):
            return False
        raise


def current_manifest(client, bucket: str) -> bytes | None:
    try:
        return client.get_object(Bucket=bucket, Key=PREFIX + 'manifest.json')['Body'].read()
    except client.exceptions.NoSuchKey:
        return None


def put(client, bucket: str, key: str, data: bytes, content_type: str, cache: str) -> None:
    client.put_object(Bucket=bucket, Key=key, Body=data, ContentType=content_type, CacheControl=cache,
                      ContentMD5=base64.b64encode(hashlib.md5(data).digest()).decode())


def publish(client, bucket: str, export: Path, dry_run: bool = False) -> dict:
    manifest, files = entries(export)
    missing = [entry['file'] for entry in files if not exists(client, bucket, PREFIX + entry['file'])]
    manifest_bytes = (export / 'manifest.json').read_bytes()
    changed = current_manifest(client, bucket) != manifest_bytes
    report = {'bucket': bucket, 'release': manifest['release'], 'files': len(files),
              'uploads': len(missing), 'manifest_changed': changed, 'dry_run': dry_run}
    if dry_run:
        return report
    for name in missing:
        mime = 'application/yaml' if name.endswith('.yaml') else 'application/json'
        put(client, bucket, PREFIX + name, (export / name).read_bytes(), mime, CACHE_RELEASE)
    if changed:
        put(client, bucket, PREFIX + 'manifest.json', manifest_bytes, 'application/json', CACHE_MANIFEST)
    return report


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    parser.add_argument('export', type=Path, help='Dossier produit par plugins/roadmap/export.mjs')
    parser.add_argument('--bucket', required=True)
    parser.add_argument('--endpoint', default='https://eegng2ef02.s3.fr1.cloud-temple.com')
    parser.add_argument('--dry-run', action='store_true')
    options = parser.parse_args(argv)
    print(json.dumps(publish(s3_client(options.endpoint), options.bucket, options.export, options.dry_run), indent=2))
    return 0


if __name__ == '__main__':
    sys.exit(main())
