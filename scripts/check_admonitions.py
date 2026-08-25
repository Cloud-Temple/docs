#!/usr/bin/env python3
"""Garde-fou de syntaxe des admonitions Docusaurus 3 / MDX v3.

Depuis Docusaurus 3 (MDX v3), le titre d'une admonition DOIT être entre crochets :

    :::info[Titre]
    contenu
    :::

L'ancienne syntaxe Docusaurus 2 (titre séparé par une espace) n'est plus
reconnue : le délimiteur n'est plus interprété et TOUT le bloc est affiché en
texte brut, sans aucune erreur de build. `yarn build` ne détecte donc pas la
régression — d'où ce contrôle dédié.

    :::info Titre        <-- CASSÉ en MDX v3, à bannir

Le script échoue (code 1) si au moins une admonition en syntaxe espace subsiste
dans docs/ ou i18n/. Il est volontairement « fence-aware » : les lignes situées
à l'intérieur d'un bloc de code (``` ou ~~~) sont ignorées, pour ne pas signaler
un exemple de syntaxe légitimement montré dans la documentation.

Usage :
    python3 scripts/check_admonitions.py          # scanne docs/ et i18n/
    python3 scripts/check_admonitions.py --quiet   # n'affiche que l'échec
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
SCAN_ROOTS = ["docs", "i18n"]
EXTENSIONS = ("*.md", "*.mdx")
EXCLUDE_PARTS = ("node_modules", "build")

TYPES = "info|note|tip|warning|caution|danger|important|success"
# Ouverture d'admonition avec titre séparé par une espace (et NON par un crochet).
# Le `(?!\[)` garantit qu'on ne matche pas la forme correcte `:::type[Titre]`.
SPACE_SYNTAX = re.compile(rf"^(\s*):{{3,}}({TYPES})[ \t]+(?!\[)(\S.*?)\s*$")
FENCE = re.compile(r"^\s*(```|~~~)")


def scan_text(text: str):
    """Retourne les violations d'un document : liste de (num_ligne, contenu).

    `num_ligne` est 1-indexé. Les lignes dans un bloc de code sont ignorées.
    """
    violations = []
    in_fence = False
    for i, line in enumerate(text.split("\n")):
        if FENCE.match(line):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        if SPACE_SYNTAX.match(line):
            violations.append((i + 1, line))
    return violations


def find_violations(root: Path = ROOT):
    """Scanne les fichiers Markdown de docs/ et i18n/ sous `root`.

    Retourne une liste de (chemin_relatif, num_ligne, contenu).
    """
    results = []
    for scan_root in SCAN_ROOTS:
        base = root / scan_root
        if not base.exists():
            continue
        for pattern in EXTENSIONS:
            for f in base.rglob(pattern):
                if any(part in EXCLUDE_PARTS for part in f.parts):
                    continue
                for lineno, line in scan_text(f.read_text(encoding="utf-8")):
                    results.append((f.relative_to(root), lineno, line))
    return results


def main() -> int:
    quiet = "--quiet" in sys.argv
    violations = find_violations()
    if not violations:
        if not quiet:
            print("✅ Admonitions : aucune syntaxe espace détectée (syntaxe MDX v3 conforme).")
        return 0

    print(f"❌ ÉCHEC : {len(violations)} admonition(s) en syntaxe espace (Docusaurus 2), "
          "non reconnues en MDX v3 :", file=sys.stderr)
    for path, lineno, line in sorted(violations):
        print(f"  - {path}:{lineno}  {line.strip()}", file=sys.stderr)
    print("\nCorrigez le titre avec des crochets, par exemple :", file=sys.stderr)
    print("  :::info Titre     ->     :::info[Titre]", file=sys.stderr)
    return 1


if __name__ == "__main__":
    sys.exit(main())
