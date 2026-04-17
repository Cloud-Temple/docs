#!/usr/bin/env python3
"""
Extrait les nouvelles fonctionnalités / évolutions depuis maj.js
- Textes FR uniquement
- Corrections / bugfix exclues
- Sortie : markdown
"""

import re
import sys
from pathlib import Path

INPUT = Path(__file__).parent.parent / "maj.js"
OUTPUT = Path(__file__).parent.parent / "docs" / "changelog.md"

# Mots clés qui signalent un bug fix → exclusion
BUG_PREFIXES = (
    "Correction",
    "correction",
    "Bugfix",
    "bugfix",
    "Fix",
    "fix",
)


def is_bugfix(text: str) -> bool:
    return any(text.strip().startswith(p) for p in BUG_PREFIXES)


def extract_fr_text(ternary: str) -> str | None:
    """
    Extrait le texte FR depuis :
      lang === 'fr' ? 'Texte FR' : 'EN text'
    Gère : single-quoted (avec \\'), double-quoted, backtick (template literals).
    """
    # Backtick : ` ... ` (les apostrophes internes ne sont pas échappées)
    m = re.search(
        r"lang\s*===\s*['\"]fr['\"]\s*\?\s*`([^`]*)`",
        ternary,
    )
    if m:
        return m.group(1)

    # Single-quoted : ' ... ' (apostrophes internes échappées en \')
    m = re.search(
        r"lang\s*===\s*['\"]fr['\"]\s*\?\s*'((?:[^'\\]|\\.)*)'",
        ternary,
    )
    if m:
        return m.group(1).replace("\\'", "'")

    # Double-quoted : " ... "
    m = re.search(
        r'lang\s*===\s*[\'"]fr[\'"]\s*\?\s*"((?:[^"\\]|\\.)*)"',
        ternary,
    )
    if m:
        return m.group(1).replace('\\"', '"')

    return None


def parse_maj_js(content: str) -> list[dict]:
    """
    Retourne une liste de dicts :
      { version, date, entries: [ { tag, text } ] }
    """
    results = []

    # Découpe le contenu en blocs par version
    # Pattern : début d'un bloc de version (ex:  1.0: { ou '1.1.1': {)
    version_pattern = re.compile(
        r"""
        ^\s*                          # indentation
        (?P<ver>                      # clé de version
            ['"]?[\d]+\.[\d]+(?:\.[\d]+)?['"]?
        )
        \s*:\s*\{                     # : {
        """,
        re.MULTILINE | re.VERBOSE,
    )

    matches = list(version_pattern.finditer(content))

    for i, m in enumerate(matches):
        version = m.group("ver").strip("'\"")
        block_start = m.start()
        block_end = matches[i + 1].start() if i + 1 < len(matches) else len(content)
        block = content[block_start:block_end]

        # Date
        date_m = re.search(r"new Date\(['\"]([^'\"]+)['\"]\)", block)
        date_str = date_m.group(1)[:10] if date_m else "?"

        # Entrées data[]
        entries = []
        # Chaque objet { text: ..., tag: '...' }
        entry_pattern = re.compile(
            r"\{\s*text\s*:\s*(?P<ternary>lang\s*===.*?),\s*tag\s*:\s*['\"](?P<tag>[A-Z_]+)['\"]",
            re.DOTALL,
        )
        for em in entry_pattern.finditer(block):
            text = extract_fr_text(em.group("ternary"))
            tag = em.group("tag")
            if text and not is_bugfix(text):
                entries.append({"tag": tag, "text": text})

        if entries:  # on n'inclut que les versions avec au moins 1 feature
            results.append({"version": version, "date": date_str, "entries": entries})

    return results


TAG_LABELS = {
    "GEN": "Général",
    "CMP": "Compute / Machines virtuelles",
    "BACK": "Sauvegarde",
    "IAM": "Identité & Accès",
    "ACT": "Activités",
    "NET": "Réseau",
    "STG": "Stockage",
    "K8S": "Kubernetes",
    "SEC": "Sécurité",
    "BILL": "Facturation",
    "OBJ": "Object Storage",
    "LLM": "LLMaaS",
    "CM": "Gestionnaire des coûts",
    "ORDER": "Commandes",
    "VPC": "VPC",
    "SUPPORT": "Support",
    "AI": "Intelligence Artificielle",
    "MET": "Métriques",
    "SNAP": "Snapshots",
    "OKD": "OpenShift",
    "KUB": "Kubernetes",
    "VMAAS": "VM Instances",
    "VM": "Machines virtuelles",
    "S3": "Object Storage S3",
    "PG": "PostgreSQL Managé",
    "MDB": "MariaDB Managé",
    "BM": "Bare Metal",
    "BAST": "Bastion",
    "OSS": "Object Storage",
    # Tags supplémentaires
    "BACKUP": "Sauvegarde",
    "BST": "Bastion",
    "DOC": "Documentation",
    "HOUSING": "Hébergement physique",
    "INF": "Infrastructure",
    "INV": "Inventaire",
    "MNT": "Maintenance & Opérations",
    "MP": "Marketplace",
    "NETWORK": "Réseau",
    "NOTIF": "Notifications",
    "OPENSHIFT": "OpenShift",
    "OS": "Object Storage",
    "STORAGE": "Stockage",
    "TAG": "Étiquettes",
    "TICKET": "Tickets de support",
}


def render_markdown(versions: list[dict]) -> str:
    lines = [
        "---",
        "title: Changelog — Nouvelles fonctionnalités",
        "sidebar_position: 999",
        "---",
        "",
        "# Changelog — Nouvelles fonctionnalités & évolutions",
        "",
        "> Ce changelog liste uniquement les nouvelles fonctionnalités et évolutions significatives.",
        "> Les corrections de bugs sont volontairement exclues.",
        "",
    ]

    for v in reversed(versions):  # plus récent en premier
        lines.append(f"## v{v['version']} — {v['date']}")
        lines.append("")

        # Regroupe par tag
        by_tag: dict[str, list[str]] = {}
        for e in v["entries"]:
            by_tag.setdefault(e["tag"], []).append(e["text"])

        for tag, texts in by_tag.items():
            label = TAG_LABELS.get(tag, tag)
            lines.append(f"### {label}")
            for t in texts:
                lines.append(f"- {t}")
            lines.append("")

    return "\n".join(lines)


def main():
    if not INPUT.exists():
        print(f"Fichier introuvable : {INPUT}", file=sys.stderr)
        sys.exit(1)

    print(f"Lecture de {INPUT} …")
    content = INPUT.read_text(encoding="utf-8")

    print("Extraction des versions …")
    versions = parse_maj_js(content)
    print(f"  {len(versions)} versions avec des fonctionnalités trouvées")

    md = render_markdown(versions)
    OUTPUT.write_text(md, encoding="utf-8")
    print(f"Écrit dans {OUTPUT}")


if __name__ == "__main__":
    main()
