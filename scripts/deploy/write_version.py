"""Écrit version.json dans le build : version affichée dans le footer du site.

La version est dérivée du commit, jamais de l'heure du build : relancer le build
d'un même commit produit exactement le même fichier, donc aucun envoi S3 inutile.
Format : date du commit à l'heure de Paris (AAAA.MM.JJ) + SHA court.
"""
from __future__ import annotations

import argparse
from datetime import datetime
import json
from pathlib import Path
import re
import subprocess
import sys
from zoneinfo import ZoneInfo

ENVIRONMENTS = ('staging', 'production')
PARIS = ZoneInfo('Europe/Paris')


def version_info(commit: str, commit_date: str, environment: str, ref: str) -> dict:
    if not re.fullmatch(r'[0-9a-f]{40}', commit):
        raise ValueError(f'SHA de commit invalide : {commit!r}')
    if environment not in ENVIRONMENTS:
        raise ValueError(f'Environnement inconnu : {environment!r}')
    date = datetime.fromisoformat(commit_date)
    if date.tzinfo is None:
        raise ValueError('La date du commit doit porter son fuseau horaire')
    local = date.astimezone(PARIS)
    return {'schemaVersion': 1, 'version': local.strftime('%Y.%m.%d'), 'commit': commit,
            'shortCommit': commit[:7], 'commitDate': local.isoformat(), 'environment': environment, 'ref': ref}


def head_commit(repo: Path) -> tuple[str, str]:
    output = subprocess.check_output(['git', '-C', str(repo), 'log', '-1', '--format=%H%n%cI'], text=True)
    commit, date = output.split()
    return commit, date


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    parser.add_argument('--environment', required=True, choices=ENVIRONMENTS)
    parser.add_argument('--ref', required=True, help='Branche ou tag construit')
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--repo', type=Path, default=Path('.'))
    options = parser.parse_args(argv)
    if not options.output.parent.is_dir():
        raise SystemExit(f'Dossier de build absent : {options.output.parent}')
    info = version_info(*head_commit(options.repo), options.environment, options.ref)
    options.output.write_text(json.dumps(info, indent=2) + '\n')
    print(json.dumps(info))
    return 0


if __name__ == '__main__':
    sys.exit(main())
