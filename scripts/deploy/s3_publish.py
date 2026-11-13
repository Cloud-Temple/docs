"""Publication différentielle d'un build Docusaurus vers un bucket S3 Cloud Temple.

Principe : le bucket contient un manifeste (`_deploy/site-manifest.json`) qui décrit
chaque objet publié par ce script (SHA-256, type MIME, politique de cache). À chaque
exécution, le build est inventorié puis comparé à ce manifeste : seuls les objets
nouveaux ou modifiés sont envoyés. La comparaison porte sur le contenu, jamais sur la
taille ou la date : une page dont seule l'empreinte d'un JS change garde la même taille.

Ordre d'écriture : fichiers non HTML (JS, CSS, images) → pages HTML et copies sans
extension → suppressions arrivées à échéance → manifeste en dernier. Si un envoi
échoue, le manifeste n'est pas écrit : l'exécution suivante renvoie ce qui manque.

Le script ne supprime que des objets qu'il a lui-même publiés (présents dans le
manifeste précédent), après un délai de grâce : `roadmap-data/` et tout objet déposé
par un autre moyen ne sont jamais touchés. Il ne modifie jamais la politique d'accès
du bucket : la clé de CI n'a besoin que de GetObject, PutObject et DeleteObject.

Identifiants : variables standard AWS_ACCESS_KEY_ID et AWS_SECRET_ACCESS_KEY.
"""
from __future__ import annotations

import argparse
import base64
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass, field, replace
from datetime import datetime, timedelta, timezone
import hashlib
import json
import mimetypes
import os
from pathlib import Path
import sys

MANIFEST_KEY = '_deploy/site-manifest.json'
MANIFEST_VERSION = 1
IGNORED_NAMES = {'.DS_Store', '.nojekyll'}
REQUIRED_FILES = ('index.html', 'home.html', '404.html')

CACHE_IMMUTABLE = 'public, max-age=31536000, immutable'
CACHE_HTML = 'no-cache'
CACHE_DEFAULT = 'public, max-age=300'

CONTENT_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.mjs': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json',
    '.xml': 'application/xml',
    '.txt': 'text/plain; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.pdf': 'application/pdf',
    '.webmanifest': 'application/manifest+json',
}


@dataclass(frozen=True)
class SiteObject:
    key: str
    source: Path
    sha256: str
    md5: str
    size: int
    content_type: str
    cache_control: str

    def entry(self) -> dict:
        return {'sha256': self.sha256, 'size': self.size,
                'content_type': self.content_type, 'cache_control': self.cache_control}

    @property
    def is_html(self) -> bool:
        return self.content_type.startswith('text/html')


@dataclass
class Plan:
    uploads: list[SiteObject] = field(default_factory=list)
    unchanged: int = 0
    deletions: list[str] = field(default_factory=list)
    pending: dict[str, dict] = field(default_factory=dict)
    newly_removed: list[str] = field(default_factory=list)


def content_type(path: Path) -> str:
    suffix = path.suffix.lower()
    return CONTENT_TYPES.get(suffix) or mimetypes.guess_type(path.name)[0] or 'application/octet-stream'


def cache_control(key: str, ctype: str) -> str:
    # version.json est lu par le footer : il doit refléter le dernier déploiement.
    if ctype.startswith('text/html') or key.rsplit('/', 1)[-1] == 'version.json':
        return CACHE_HTML
    # Docusaurus place sous assets/ uniquement des fichiers dont le nom contient
    # une empreinte de contenu : ils peuvent être mis en cache indéfiniment.
    if key.startswith('assets/'):
        return CACHE_IMMUTABLE
    return CACHE_DEFAULT


def clean_path_key(key: str) -> str | None:
    """Clé sans extension servant une page HTML, ou None si aucune copie n'est utile.

    L'API objet S3 ne sert pas `index.html` ni `page.html` pour `/page` : chaque page
    est donc aussi publiée sous son chemin propre (`console/api`, `en/roadmap`).
    """
    if not key.endswith('.html') or key == 'index.html':
        return None
    if key.endswith('/index.html'):
        return key[:-len('/index.html')]
    return key[:-len('.html')]


def inventory(build: Path) -> dict[str, SiteObject]:
    """Décrit tous les objets à publier, copies sans extension comprises."""
    build = build.resolve()
    missing = [name for name in REQUIRED_FILES if not (build / name).is_file()]
    if missing:
        raise SystemExit(f'Build incomplet ou mauvais dossier ({build}) : manque {", ".join(missing)}')
    objects: dict[str, SiteObject] = {}
    for path in sorted(build.rglob('*')):
        if not path.is_file() or path.name in IGNORED_NAMES:
            continue
        if path.is_symlink() or not path.resolve().is_relative_to(build):
            raise SystemExit(f'Fichier hors du build refusé : {path}')
        key = path.relative_to(build).as_posix()
        if key == MANIFEST_KEY or key.startswith('_deploy/'):
            raise SystemExit(f'Le préfixe _deploy/ est réservé au manifeste : {key}')
        data = path.read_bytes()
        ctype = content_type(path)
        digest = {'sha256': hashlib.sha256(data).hexdigest(), 'md5': hashlib.md5(data).hexdigest()}
        keys = [key] + ([alias] if (alias := clean_path_key(key)) else [])
        for target in keys:
            objects[target] = SiteObject(target, path, digest['sha256'], digest['md5'], len(data),
                                         ctype, cache_control(target, ctype))
    return objects


def plan(desired: dict[str, SiteObject], previous: dict | None, now: datetime, grace: timedelta) -> Plan:
    """Calcule les envois et suppressions ; fonction pure, sans accès réseau."""
    result = Plan()
    previous_objects = (previous or {}).get('objects', {})
    previous_pending = (previous or {}).get('pending_deletion', {})
    for key, obj in desired.items():
        if previous_objects.get(key) == obj.entry():
            result.unchanged += 1
        else:
            result.uploads.append(obj)
    # Les pages HTML référencent les JS/CSS : elles sont envoyées en dernier pour
    # qu'aucune page ne pointe vers un fichier pas encore publié.
    result.uploads.sort(key=lambda obj: (obj.is_html, obj.key))

    removed = {key: {'since': now.isoformat(), 'sha256': entry.get('sha256')}
               for key, entry in previous_objects.items() if key not in desired}
    result.newly_removed = sorted(removed)
    for key, entry in {**previous_pending, **removed}.items():
        if key in desired:
            continue  # objet réapparu : il redevient un objet publié normal.
        since = datetime.fromisoformat(previous_pending.get(key, entry)['since'])
        if now - since >= grace:
            result.deletions.append(key)
        else:
            result.pending[key] = previous_pending.get(key, entry)
    result.deletions.sort()
    return result


def manifest(desired: dict[str, SiteObject], pending: dict[str, dict], now: datetime, commit: str | None) -> dict:
    return {'version': MANIFEST_VERSION, 'generated_at': now.isoformat(), 'commit': commit,
            'objects': {key: obj.entry() for key, obj in sorted(desired.items())},
            'pending_deletion': dict(sorted(pending.items()))}


def read_manifest(client, bucket: str, key: str = MANIFEST_KEY) -> dict | None:
    try:
        body = client.get_object(Bucket=bucket, Key=key)['Body'].read()
    except client.exceptions.NoSuchKey:
        return None
    data = json.loads(body)
    if data.get('version') != MANIFEST_VERSION or not isinstance(data.get('objects'), dict):
        raise SystemExit(f'Manifeste {key} illisible ou de version inconnue : arrêt.')
    return data


def upload(client, bucket: str, obj: SiteObject) -> None:
    data = obj.source.read_bytes()
    if hashlib.sha256(data).hexdigest() != obj.sha256:
        raise RuntimeError(f'{obj.source} a changé pendant la publication')
    # Content-MD5 : le serveur refuse l'objet si le contenu reçu diffère.
    client.put_object(Bucket=bucket, Key=obj.key, Body=data, ContentType=obj.content_type,
                      CacheControl=obj.cache_control,
                      ContentMD5=base64.b64encode(bytes.fromhex(obj.md5)).decode())


def delete(client, bucket: str, keys: list[str]) -> list[str]:
    """Supprime par lots de 1000 ; renvoie les clés effectivement supprimées."""
    done: list[str] = []
    for start in range(0, len(keys), 1000):
        batch = keys[start:start + 1000]
        response = client.delete_objects(Bucket=bucket, Delete={'Objects': [{'Key': k} for k in batch], 'Quiet': True})
        failed = {error['Key'] for error in response.get('Errors', [])}
        done.extend(key for key in batch if key not in failed)
    return done


def publish(client, bucket: str, build: Path, *, now: datetime, grace: timedelta, commit: str | None,
            dry_run: bool = False, workers: int = 16, max_delete_ratio: float = 0.2, prefix: str = '') -> dict:
    if prefix and (prefix.startswith('/') or not prefix.endswith('/') or '..' in prefix.split('/')):
        raise SystemExit('--prefix doit être relatif et se terminer par / (ex. _ci-test/run-1/)')
    # Le préfixe s'applique après le calcul des politiques de cache, qui dépendent du chemin dans le site.
    desired = {prefix + key: replace(obj, key=prefix + key) for key, obj in inventory(build).items()}
    manifest_key = prefix + MANIFEST_KEY
    previous = read_manifest(client, bucket, manifest_key)
    result = plan(desired, previous, now, grace)
    published_before = len((previous or {}).get('objects', {}))
    # Contrôle au moment où les objets disparaissent du build, pas à l'échéance de
    # suppression : un build partiel serait sinon effacé silencieusement après le délai.
    if published_before and len(result.newly_removed) > max_delete_ratio * published_before:
        raise SystemExit(f'{len(result.newly_removed)} objets disparus sur {published_before} publiés : '
                         f'au-delà du seuil de {max_delete_ratio:.0%}. Vérifiez le dossier de build.')
    report = {'bucket': bucket, 'prefix': prefix, 'commit': commit, 'dry_run': dry_run, 'first_publication': previous is None,
              'objects': len(desired), 'unchanged': result.unchanged, 'uploads': len(result.uploads),
              'upload_bytes': sum(obj.size for obj in result.uploads), 'newly_removed': len(result.newly_removed),
              'deletions': len(result.deletions),
              'pending_deletion': len(result.pending)}
    if dry_run:
        report['sample_uploads'] = [obj.key for obj in result.uploads[:20]]
        report['sample_deletions'] = result.deletions[:20]
        return report

    # Deux vagues : tous les non-HTML doivent réussir avant d'envoyer une seule page.
    for wave in ([o for o in result.uploads if not o.is_html], [o for o in result.uploads if o.is_html]):
        with ThreadPoolExecutor(max_workers=workers) as pool:
            futures = {pool.submit(upload, client, bucket, obj): obj.key for obj in wave}
            for future in as_completed(futures):
                future.result()  # Une erreur arrête tout : le manifeste n'est pas écrit.

    deleted = delete(client, bucket, result.deletions) if result.deletions else []
    pending = dict(result.pending)
    for key in set(result.deletions) - set(deleted):
        pending[key] = {'since': now.isoformat(), 'sha256': None, 'delete_failed': True}
    body = json.dumps(manifest(desired, pending, now, commit), indent=1).encode()
    client.put_object(Bucket=bucket, Key=manifest_key, Body=body, ContentType='application/json',
                      CacheControl='no-store',
                      ContentMD5=base64.b64encode(hashlib.md5(body).digest()).decode())
    report['deleted'] = len(deleted)
    report['delete_failed'] = len(result.deletions) - len(deleted)
    return report


def s3_client(endpoint: str):
    import boto3  # Import tardif : la logique et les tests n'en dépendent pas.
    from botocore.config import Config
    if not (os.environ.get('AWS_ACCESS_KEY_ID') and os.environ.get('AWS_SECRET_ACCESS_KEY')):
        raise SystemExit('AWS_ACCESS_KEY_ID et AWS_SECRET_ACCESS_KEY doivent être fournis par l\'environnement.')
    # L'endpoint Dell ECS refuse les checksums CRC32C ajoutés par défaut par les SDK
    # récents : on ne les envoie que lorsque l'opération les exige.
    config = Config(signature_version='s3v4', s3={'addressing_style': 'path'},
                    request_checksum_calculation='when_required',
                    response_checksum_validation='when_required',
                    retries={'max_attempts': 5, 'mode': 'standard'}, max_pool_connections=32)
    return boto3.client('s3', endpoint_url=endpoint, config=config, region_name='us-east-1')


def write_summary(report: dict) -> None:
    path = os.environ.get('GITHUB_STEP_SUMMARY')
    if not path:
        return
    lines = [f"### Publication S3 — `{report['bucket']}`" + (' (simulation)' if report['dry_run'] else ''), '',
             '| Mesure | Valeur |', '| --- | --- |']
    lines += [f'| {key} | {value} |' for key, value in report.items() if not key.startswith('sample_')]
    with open(path, 'a', encoding='utf-8') as file:
        file.write('\n'.join(lines) + '\n')


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    parser.add_argument('build', type=Path, help='Dossier produit par docusaurus build')
    parser.add_argument('--bucket', required=True)
    parser.add_argument('--endpoint', default='https://eegng2ef02.s3.fr1.cloud-temple.com')
    parser.add_argument('--commit', default=os.environ.get('GITHUB_SHA'))
    parser.add_argument('--grace-days', type=float, default=7, help='Délai avant suppression des objets retirés')
    parser.add_argument('--max-delete-ratio', type=float, default=0.2)
    parser.add_argument('--workers', type=int, default=16)
    parser.add_argument('--prefix', default='', help='Publie sous ce préfixe (tests, aperçus)')
    parser.add_argument('--dry-run', action='store_true', help='Calcule le plan sans rien écrire')
    parser.add_argument('--report', type=Path, help='Écrit le rapport JSON dans ce fichier')
    options = parser.parse_args(argv)
    report = publish(s3_client(options.endpoint), options.bucket, options.build,
                     now=datetime.now(timezone.utc), grace=timedelta(days=options.grace_days),
                     commit=options.commit, dry_run=options.dry_run, workers=options.workers,
                     max_delete_ratio=options.max_delete_ratio, prefix=options.prefix)
    text = json.dumps(report, indent=2, ensure_ascii=False)
    print(text)
    if options.report:
        options.report.write_text(text + '\n')
    write_summary(report)
    return 0


if __name__ == '__main__':
    sys.exit(main())
