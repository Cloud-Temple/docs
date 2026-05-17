#!/usr/bin/env python3
"""
Extrait les nouvelles fonctionnalités / évolutions depuis maj.js
- Textes FR uniquement
- Corrections / bugfix exclues
- Sortie : markdown
"""

import hashlib
import json
import re
import sys
from datetime import datetime
from pathlib import Path

ROOT    = Path(__file__).parent.parent
INPUT   = ROOT / "maj.js"
I18N    = ROOT / "i18n"
DOCS    = ROOT / "docs"
META    = ROOT / "scripts" / "translate_py" / "translation-meta.json"

# Langues cibles (hors FR qui est la source)
TARGET_LANGUAGES = ["en", "de", "es", "it"]

# (lang, output_path, title_fr, title_h1, intro)
OUTPUTS = [
    (
        "fr",
        DOCS / "changelog_produits.md",
        "Nouveautés produits",
        "Nouveautés produits & évolutions",
        "Ce changelog liste uniquement les nouvelles fonctionnalités et évolutions significatives de la plateforme Cloud Temple.\nLes corrections de bugs sont volontairement exclues.",
    ),
    (
        "en",
        I18N / "en/docusaurus-plugin-content-docs/current/changelog_produits.md",
        "Product Updates",
        "Product Updates & Evolutions",
        "This changelog lists only new features and significant evolutions of the Cloud Temple platform.\nBug fixes are intentionally excluded.",
    ),
    (
        "de",
        I18N / "de/docusaurus-plugin-content-docs/current/changelog_produits.md",
        "Produktneuheiten",
        "Produktneuheiten & Weiterentwicklungen",
        "Dieses Changelog enthält ausschließlich neue Funktionen und wesentliche Weiterentwicklungen der Cloud Temple Plattform.\nFehlerbeseitigungen sind bewusst ausgeschlossen.",
    ),
    (
        "es",
        I18N / "es/docusaurus-plugin-content-docs/current/changelog_produits.md",
        "Novedades del producto",
        "Novedades del producto & Evoluciones",
        "Este changelog lista únicamente las nuevas funcionalidades y evoluciones significativas de la plataforma Cloud Temple.\nLas correcciones de errores están excluidas intencionalmente.",
    ),
    (
        "it",
        I18N / "it/docusaurus-plugin-content-docs/current/changelog_produits.md",
        "Novità del prodotto",
        "Novità del prodotto & Evoluzioni",
        "Questo changelog elenca solo le nuove funzionalità e le evoluzioni significative della piattaforma Cloud Temple.\nLe correzioni di bug sono intenzionalmente escluse.",
    ),
]

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


def _extract_quoted(ternary: str, side: str) -> str | None:
    """
    Extrait un côté ('fr' = then, 'en' = else) d'une ternaire JS.
    Gère backtick, single-quoted, double-quoted.
    side : 'fr' → groupe capturant avant ':', 'en' → groupe capturant après ':'
    """
    # Patterns communs des deux côtés de la ternaire
    # Format : lang === 'fr' ? <FR> : <EN>
    for q_fr, q_en in [
        (r"`([^`]*)`",            r"`([^`]*)`"),              # backtick / backtick
        (r"'((?:[^'\\]|\\.)*)'", r"'((?:[^'\\]|\\.)*)'"),    # single / single
        (r'"((?:[^"\\]|\\.)*)"', r'"((?:[^"\\]|\\.)*)"'),    # double / double
    ]:
        pat = rf"lang\s*===\s*['\"]fr['\"]\s*\?\s*{q_fr}\s*:\s*{q_en}"
        m = re.search(pat, ternary, re.DOTALL)
        if m:
            grp = m.group(1) if side == "fr" else m.group(2)
            return grp.replace("\\'", "'").replace('\\"', '"')
    return None


def extract_text(ternary: str, lang: str) -> str | None:
    """Extrait le texte pour la langue donnée ('fr' ou 'en')."""
    if lang == "fr":
        return _extract_quoted(ternary, "fr")
    # EN est la branche 'else' ; si absent on retombe sur FR
    en = _extract_quoted(ternary, "en")
    if en:
        return en
    return _extract_quoted(ternary, "fr")  # fallback FR


def parse_maj_js(content: str, lang: str = "fr") -> list[dict]:
    """
    Retourne une liste de dicts :
      { version, date, entries: [ { tag, text } ] }
    lang : 'fr' ou 'en' (et autres langues → fallback EN)
    """
    results = []

    version_pattern = re.compile(
        r"""
        ^\s*
        (?P<ver>['"]?[\d]+\.[\d]+(?:\.[\d]+)?['"]?)
        \s*:\s*\{
        """,
        re.MULTILINE | re.VERBOSE,
    )

    matches = list(version_pattern.finditer(content))

    for i, m in enumerate(matches):
        version = m.group("ver").strip("'\"")
        block_start = m.start()
        block_end = matches[i + 1].start() if i + 1 < len(matches) else len(content)
        block = content[block_start:block_end]

        date_m = re.search(r"new Date\(['\"]([^'\"]+)['\"]\)", block)
        date_str = date_m.group(1)[:10] if date_m else "?"

        entries = []
        entry_pattern = re.compile(
            r"\{\s*text\s*:\s*(?P<ternary>lang\s*===.*?),\s*tag\s*:\s*['\"](?P<tag>[A-Z_]+)['\"]",
            re.DOTALL,
        )
        for em in entry_pattern.finditer(block):
            text = extract_text(em.group("ternary"), lang)
            tag = em.group("tag")
            if text and not is_bugfix(text):
                entries.append({"tag": tag, "text": text})

        if entries:
            results.append({"version": version, "date": date_str, "entries": entries})

    return results


# Mapping tag → (label affiché, URL doc relative)
# URL = None si pas de page dédiée dans /docs
TAG_MAP: dict[str, tuple[str, str | None]] = {
    # ── Console ──────────────────────────────────────────────────────────────
    "GEN":      ("Console",                         "/console/console"),
    "ACT":      ("Console — Activités",             "/console/console"),
    "NOTIF":    ("Console — Notifications",          "/console/console"),
    "IAM":      ("Identité & Accès (IAM)",          "/console/iam/iam"),
    "SEC":      ("Sécurité",                        "/console/security/security_recommendations"),
    "MET":      ("Métriques",                       "/console/metrics/concepts"),
    "BILL":     ("Facturation",                     "/console/billing/concepts"),
    "CM":       ("Gestionnaire des coûts",          "/console/billing/concepts"),
    "ORDER":    ("Commandes",                       "/console/orders"),
    "SUPPORT":  ("Support",                         "/console/console"),
    "TICKET":   ("Tickets de support",              "/console/console"),
    "DOC":      ("Documentation",                   None),
    "TAG":      ("Étiquettes",                      None),
    "INV":      ("Inventaire",                      None),
    "MNT":      ("Maintenance & Opérations",        None),
    # ── IaaS Compute ─────────────────────────────────────────────────────────
    "CMP":      ("IaaS — Machines virtuelles",      "/iaas_vmware/iaas_vmware"),
    "VM":       ("IaaS — Machines virtuelles",      "/iaas_vmware/iaas_vmware"),
    "SNAP":     ("IaaS — Snapshots",                "/iaas_vmware/iaas_vmware"),
    "BACK":     ("Sauvegarde",                      "/iaas_vmware/iaas_vmware"),
    "BACKUP":   ("Sauvegarde",                      "/iaas_vmware/iaas_vmware"),
    "INF":      ("Infrastructure IaaS",             "/iaas_vmware/iaas_vmware"),
    # ── VM Instances (OpenIaaS / public cloud) ────────────────────────────────
    "VMAAS":    ("VM Instances",                    "/public_cloud/vm_instances/vm_instances"),
    # ── Bare Metal ───────────────────────────────────────────────────────────
    "BM":       ("Bare Metal",                      "/iaas_bare-metal/iaas_bare-metal"),
    # ── Kubernetes ───────────────────────────────────────────────────────────
    "K8S":      ("Managed Kubernetes",              "/managed_kubernetes/managed_kubernetes"),
    "KUB":      ("Managed Kubernetes",              "/managed_kubernetes/managed_kubernetes"),
    # ── Bases de données managées ─────────────────────────────────────────────
    "PG":       ("PostgreSQL Managé",               "/managed_postgresql/managed_postgresql"),
    "MDB":      ("MariaDB Managé",                  "/managed_mariadb/managed_mariadb"),
    # ── LLMaaS ───────────────────────────────────────────────────────────────
    "LLM":      ("LLMaaS",                          "/llmaas/llmaas"),
    "AI":       ("LLMaaS",                          "/llmaas/llmaas"),
    # ── PaaS OpenShift ────────────────────────────────────────────────────────
    "OKD":      ("PaaS OpenShift",                  "/paas_openshift/paas_openshift"),
    "OPENSHIFT":("PaaS OpenShift",                  "/paas_openshift/paas_openshift"),
    # ── Bastion ───────────────────────────────────────────────────────────────
    "BAST":     ("Bastion",                         "/bastion/bastion"),
    "BST":      ("Bastion",                         "/bastion/bastion"),
    # ── Object Storage S3 ────────────────────────────────────────────────────
    "OBJ":      ("Object Storage S3",               "/storage/oss/oss"),
    "OSS":      ("Object Storage S3",               "/storage/oss/oss"),
    "OS":       ("Object Storage S3",               "/storage/oss/oss"),
    "S3":       ("Object Storage S3",               "/storage/oss/oss"),
    "STORAGE":  ("Stockage",                        "/storage/oss/oss"),
    "STG":      ("Stockage",                        "/storage/oss/oss"),
    # ── Réseau ────────────────────────────────────────────────────────────────
    "NET":      ("Réseau",                          "/network/network_overview"),
    "NETWORK":  ("Réseau",                          "/network/network_overview"),
    "VPC":      ("VPC",                             "/network/vpc/vpc"),
    # ── Marketplace ───────────────────────────────────────────────────────────
    "MP":       ("Marketplace",                     "/marketplace/marketplace"),
    # ── Housing ───────────────────────────────────────────────────────────────
    "HOUSING":  ("Hébergement physique (Housing)",  "/housing/housing"),
}


def tag_label(tag: str) -> str:
    """Retourne le libellé d'un tag (avec lien vers la doc)."""
    entry = TAG_MAP.get(tag)
    if entry:
        label, url = entry
        return f"[{label}]({url})" if url else label
    return tag


def render_markdown(
    versions: list[dict],
    title: str,
    title_h1: str,
    intro: str,
) -> str:
    intro_lines = "\n".join(f"> {line}" for line in intro.splitlines())
    lines = [
        "---",
        f"title: {title}",
        "sidebar_position: 999",
        "---",
        "",
        f"# {title_h1}",
        "",
        intro_lines,
        "",
    ]

    for v in reversed(versions):  # plus récent en premier
        lines.append(f"## v{v['version']} — {v['date']}")
        lines.append("")

        by_tag: dict[str, list[str]] = {}
        for e in v["entries"]:
            by_tag.setdefault(e["tag"], []).append(e["text"])

        for tag, texts in by_tag.items():
            label = tag_label(tag)
            lines.append(f"### {label}")
            for t in texts:
                lines.append(f"- {t}")
            lines.append("")

    return "\n".join(lines)


def _compute_file_hash(file_path: Path) -> str:
    """Calcule le hash SHA-256 d'un fichier."""
    sha256 = hashlib.sha256()
    with open(file_path, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            sha256.update(chunk)
    return sha256.hexdigest()


def _update_translation_meta(source_path: Path) -> None:
    """
    Met à jour translation-meta.json avec le hash actuel du fichier source FR.

    Pour chaque langue cible dont le fichier traduit existe dans i18n/,
    enregistre le hash du fichier source. Cela évite que translate.py
    ne considère ces fichiers comme « désynchronisés ».
    """
    if not META.exists():
        print("  ⚠️  translation-meta.json introuvable, hash non mis à jour")
        return

    with open(META, "r", encoding="utf-8") as f:
        meta = json.load(f)

    files = meta.setdefault("files", {})
    rel_path = str(source_path.relative_to(DOCS))
    source_hash = _compute_file_hash(source_path)

    entry = files.setdefault(rel_path, {})
    updated_langs = []

    for lang in TARGET_LANGUAGES:
        target = (
            I18N / lang / "docusaurus-plugin-content-docs" / "current" / rel_path
        )
        if target.exists():
            entry[lang] = source_hash
            updated_langs.append(lang)

    if updated_langs:
        meta["last_update"] = datetime.now().isoformat()
        with open(META, "w", encoding="utf-8") as f:
            json.dump(meta, f, indent=2, ensure_ascii=False)
            f.write("\n")
        print(f"  ✅ Hash mis à jour dans translation-meta.json "
              f"[{', '.join(updated_langs)}]")
    else:
        print(f"  ⚠️  Aucun fichier traduit trouvé pour {rel_path}, "
              f"hash non enregistré")


def main():
    if not INPUT.exists():
        print(f"Fichier introuvable : {INPUT}", file=sys.stderr)
        sys.exit(1)

    print(f"Lecture de {INPUT} …")
    content = INPUT.read_text(encoding="utf-8")

    source_path = None  # chemin du fichier FR (source)

    for lang, output_path, title, title_h1, intro in OUTPUTS:
        # DE/ES/IT → fallback sur EN (maj.js n'a que FR+EN)
        extract_lang = lang if lang in ("fr", "en") else "en"
        print(f"  [{lang}] extraction …")
        versions = parse_maj_js(content, extract_lang)
        md = render_markdown(versions, title, title_h1, intro)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(md, encoding="utf-8")
        print(f"  [{lang}] {len(versions)} versions → {output_path.relative_to(ROOT)}")

        # Mémoriser le chemin du fichier source FR
        if lang == "fr":
            source_path = output_path

    # Mise à jour du hash dans translation-meta.json
    if source_path and source_path.exists():
        print("\nMise à jour des hash de traduction …")
        _update_translation_meta(source_path)


if __name__ == "__main__":
    main()
