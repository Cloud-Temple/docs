#!/usr/bin/env python3
"""
Génère le changelog produits public à partir des notes de version de la Console.

Entrée   : maj.js (copie de ihm/src/config/maj.js, non versionnée)
Sorties  : docs/changelog_produits.md + i18n/<lang>/…/changelog_produits.md

Trois sources sont fusionnées :
  1. maj.js                        → les versions de la Console (shiva)
  2. scripts/changelog_editorial.json → réécritures client-facing, exclusions,
                                        et entrées rattachées à une version
  3. scripts/changelog_extra.json  → jalons des produits qui n'ont pas de version
                                     Console (bases managées, Observability, MCP…)

Principes :
  - Les correctifs sont exclus. Le statut « correctif » est déterminé sur le
    texte FR (source canonique) pour TOUTES les langues, afin que les fichiers
    traduits portent exactement les mêmes entrées que le français.
  - Le script échoue bruyamment plutôt que de publier une donnée douteuse :
    tag inconnu, réécriture périmée, version inexistante.
"""

import argparse
import hashlib
import json
import re
import sys
from datetime import datetime
from pathlib import Path

ROOT      = Path(__file__).parent.parent
INPUT     = ROOT / "maj.js"
I18N      = ROOT / "i18n"
DOCS      = ROOT / "docs"
META      = ROOT / "scripts" / "translate_py" / "translation-meta.json"
EDITORIAL = ROOT / "scripts" / "changelog_editorial.json"
EXTRA     = ROOT / "scripts" / "changelog_extra.json"

# Plancher : les versions antérieures restent dans l'historique Git (cf. pied de page).
MIN_VERSION = "4.0.0"

# Plafond : dernière version RÉELLEMENT déployée en production. À relever à chaque
# mise en production, sinon la documentation annoncerait des fonctionnalités
# que le client ne voit pas encore. None = aucune limite.
MAX_VERSION = "4.47.1"

# Langues cibles (hors FR qui est la source)
TARGET_LANGUAGES = ["en", "de", "es", "it"]

# Seul l'anglais est réellement rédigé (branche EN de maj.js). DE/ES/IT sont
# produits en repli sur l'anglais et doivent être traduits par translate.py :
# on ne tamponne donc PAS leur hash dans translation-meta.json, sans quoi ils
# seraient considérés à tort comme déjà traduits.
AUTHORED_LANGUAGES = ["en"]

MONTHS = {
    "fr": ("janvier", "février", "mars", "avril", "mai", "juin", "juillet",
           "août", "septembre", "octobre", "novembre", "décembre"),
    "en": ("January", "February", "March", "April", "May", "June", "July",
           "August", "September", "October", "November", "December"),
    "de": ("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli",
           "August", "September", "Oktober", "November", "Dezember"),
    "es": ("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
           "agosto", "septiembre", "octubre", "noviembre", "diciembre"),
    "it": ("gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
           "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"),
}

GIT_URL = "https://github.com/Cloud-Temple/docs"

# (lang, output_path, title, title_h1, intro, footer_template)
OUTPUTS = [
    (
        "fr",
        DOCS / "changelog_produits.md",
        "Nouveautés produits",
        "Nouveautés produits & évolutions",
        "Ce changelog liste uniquement les nouvelles fonctionnalités et évolutions significatives de la plateforme Cloud Temple.\nLes corrections de bugs sont volontairement exclues.",
        ":::info Historique antérieur\n"
        "L'historique complet des versions antérieures à v{floor} (v{first} à v{last}, "
        "de {first_month} {first_year} à {last_month} {last_year}) est disponible dans "
        "l'[historique Git]({git_url}) du projet.\n:::",
    ),
    (
        "en",
        I18N / "en/docusaurus-plugin-content-docs/current/changelog_produits.md",
        "Product Updates",
        "Product Updates & Evolutions",
        "This changelog lists only new features and significant evolutions of the Cloud Temple platform.\nBug fixes are intentionally excluded.",
        ":::info Earlier history\n"
        "The full history of versions prior to v{floor} (v{first} to v{last}, "
        "from {first_month} {first_year} to {last_month} {last_year}) is available in the "
        "project's [Git history]({git_url}).\n:::",
    ),
    (
        "de",
        I18N / "de/docusaurus-plugin-content-docs/current/changelog_produits.md",
        "Produktneuheiten",
        "Produktneuheiten & Weiterentwicklungen",
        "Dieses Changelog enthält ausschließlich neue Funktionen und wesentliche Weiterentwicklungen der Cloud Temple Plattform.\nFehlerbeseitigungen sind bewusst ausgeschlossen.",
        ":::info Frühere Historie\n"
        "Die vollständige Historie der Versionen vor v{floor} (v{first} bis v{last}, "
        "von {first_month} {first_year} bis {last_month} {last_year}) ist in der "
        "[Git-Historie]({git_url}) des Projekts verfügbar.\n:::",
    ),
    (
        "es",
        I18N / "es/docusaurus-plugin-content-docs/current/changelog_produits.md",
        "Novedades del producto",
        "Novedades del producto & Evoluciones",
        "Este changelog lista únicamente las nuevas funcionalidades y evoluciones significativas de la plataforma Cloud Temple.\nLas correcciones de errores están excluidas intencionalmente.",
        ":::info Historial anterior\n"
        "El historial completo de las versiones anteriores a v{floor} (v{first} a v{last}, "
        "de {first_month} de {first_year} a {last_month} de {last_year}) está disponible en el "
        "[historial Git]({git_url}) del proyecto.\n:::",
    ),
    (
        "it",
        I18N / "it/docusaurus-plugin-content-docs/current/changelog_produits.md",
        "Novità del prodotto",
        "Novità del prodotto & Evoluzioni",
        "Questo changelog elenca solo le nuove funzionalità e le evoluzioni significative della piattaforma Cloud Temple.\nLe correzioni di bug sono intenzionalmente escluse.",
        ":::info Cronologia precedente\n"
        "La cronologia completa delle versioni precedenti alla v{floor} (da v{first} a v{last}, "
        "da {first_month} {first_year} a {last_month} {last_year}) è disponibile nella "
        "[cronologia Git]({git_url}) del progetto.\n:::",
    ),
]

# Mots clés qui signalent un bug fix → exclusion
# Le statut est évalué sur le texte FR, qui est la source canonique. Liste établie
# empiriquement sur l'intégralité de maj.js : toute entrée dont le texte FR commence
# par l'un de ces préfixes est un correctif, donc hors périmètre de ce changelog.
BUG_PREFIXES = (
    "Correction",
    "correction",
    "Corriger",
    "corriger",
    "Corrige",
    "corrige",
    "Bugfix",
    "bugfix",
    "Bug",
    "bug",
    "Résolution",
    "résolution",
    "Fix",
    "fix",
)


def is_bugfix(text: str) -> bool:
    return any(text.strip().startswith(p) for p in BUG_PREFIXES)


def version_key(version: str) -> tuple[int, int, int]:
    parts = (version.split(".") + ["0", "0"])[:3]
    return tuple(int(p) for p in parts)


def _extract_quoted(ternary: str, side: str) -> str | None:
    """
    Extrait un côté ('fr' = then, 'en' = else) d'une ternaire JS.
    Gère backtick, single-quoted, double-quoted.
    side : 'fr' → groupe capturant avant ':', 'en' → groupe capturant après ':'
    """
    for q_fr, q_en in [
        (r"`([^`]*)`",           r"`([^`]*)`"),            # backtick / backtick
        (r"'((?:[^'\\]|\\.)*)'", r"'((?:[^'\\]|\\.)*)'"),  # single / single
        (r'"((?:[^"\\]|\\.)*)"', r'"((?:[^"\\]|\\.)*)"'),  # double / double
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
    en = _extract_quoted(ternary, "en")
    if en:
        return en
    return _extract_quoted(ternary, "fr")  # repli FR


VERSION_RE = re.compile(
    r"""
    ^\s*
    (?P<ver>['"]?[\d]+\.[\d]+(?:\.[\d]+)?['"]?)
    \s*:\s*\{
    """,
    re.MULTILINE | re.VERBOSE,
)

# Le tag est ancré sur l'accolade FERMANTE de l'objet et accepte la casse mixte
# (« OpenIaasCMP », « Order »…). Sans cet ancrage, une entrée dont le tag ne
# matchait pas était absorbée par la suivante : son texte était republié sous le
# mauvais produit et le texte de la suivante disparaissait.
ENTRY_RE = re.compile(
    r"\{\s*text\s*:\s*(?P<ternary>lang\s*===.*?)\s*,\s*"
    r"tag\s*:\s*['\"](?P<tag>[A-Za-z_]+)['\"]\s*,?\s*\}",
    re.DOTALL,
)


def entry_id(version: str, tag: str, text_fr: str) -> str:
    """Identifiant stable d'une entrée source, utilisé par le calque éditorial."""
    digest = hashlib.sha1(text_fr.encode("utf-8")).hexdigest()[:12]
    return f"{version}|{tag}|{digest}"


def parse_maj_js(content: str) -> list[dict]:
    """
    Retourne [{version, date, entries: [{tag, id, texts: {fr, en}}]}].

    Le filtrage des correctifs se fait sur le texte FR, pour toutes les langues.
    """
    results = []
    matches = list(VERSION_RE.finditer(content))

    for i, m in enumerate(matches):
        version = m.group("ver").strip("'\"")
        block_end = matches[i + 1].start() if i + 1 < len(matches) else len(content)
        block = content[m.start():block_end]

        date_m = re.search(r"new Date\(['\"]([^'\"]+)['\"]\)", block)
        date_str = date_m.group(1)[:10] if date_m else "?"

        entries = []
        for em in ENTRY_RE.finditer(block):
            ternary, tag = em.group("ternary"), em.group("tag")
            text_fr = extract_text(ternary, "fr")
            if not text_fr or is_bugfix(text_fr):
                continue
            entries.append({
                "tag": tag,
                "id": entry_id(version, tag, text_fr),
                "texts": {"fr": text_fr, "en": extract_text(ternary, "en") or text_fr},
            })

        if entries:
            results.append({"version": version, "date": date_str, "entries": entries})

    return results


# Correspondance tag → (libellés par langue, URL de la page de documentation).
#
# Les libellés sont ceux que le client voit dans la navigation du site
# (sidebars.ts), et non les slugs techniques du référentiel `tags` de maj.js.
# L'ordre de déclaration fixe l'ordre des sections dans chaque version publiée :
# Console d'abord, puis calcul, puis réseau, stockage et services managés.
#
# URL = None si le produit n'a pas de page dédiée dans /docs.
#
# Un tag présent dans maj.js et absent d'ici fait ÉCHOUER la génération
# (cf. validate_tags) : mieux vaut ne rien publier qu'afficher un code technique.
TAG_MAP: dict[str, tuple[dict[str, str], str | None]] = {
    # ── Console ──────────────────────────────────────────────────────────────
    "GEN":      ({"fr": "Console", "en": "Console", "de": "Console",
                  "es": "Console", "it": "Console"}, "/console"),
    "ORG":      ({"fr": "Console — Organisation", "en": "Console — Organization",
                  "de": "Console — Organisation", "es": "Console — Organización",
                  "it": "Console — Organizzazione"}, "/console/iam/concepts"),
    "ACT":      ({"fr": "Console — Activités", "en": "Console — Activity",
                  "de": "Console — Aktivitäten", "es": "Console — Actividades",
                  "it": "Console — Attività"}, "/console"),
    "NOTIF":    ({"fr": "Console — Notifications", "en": "Console — Notifications",
                  "de": "Console — Benachrichtigungen", "es": "Console — Notificaciones",
                  "it": "Console — Notifiche"}, "/console"),
    "DOC":      ({"fr": "Documentation", "en": "Documentation", "de": "Dokumentation",
                  "es": "Documentación", "it": "Documentazione"}, None),
    "TAG":      ({"fr": "Étiquettes", "en": "Tags", "de": "Tags",
                  "es": "Etiquetas", "it": "Etichette"}, None),
    "INV":      ({"fr": "Inventaire", "en": "Inventory", "de": "Inventar",
                  "es": "Inventario", "it": "Inventario"}, None),
    # ── Identité, sécurité, facturation ───────────────────────────────────────
    "IAM":      ({"fr": "Identité & Accès (IAM)", "en": "Identity & Access (IAM)",
                  "de": "Identität & Zugriff (IAM)", "es": "Identidad y acceso (IAM)",
                  "it": "Identità e accessi (IAM)"}, "/console/iam"),
    "SEC":      ({"fr": "Sécurité", "en": "Security", "de": "Sicherheit",
                  "es": "Seguridad", "it": "Sicurezza"},
                 "/console/security/security_recommendations"),
    "BILL":     ({"fr": "Facturation", "en": "Billing", "de": "Abrechnung",
                  "es": "Facturación", "it": "Fatturazione"}, "/console/billing/concepts"),
    "CM":       ({"fr": "Gestionnaire des coûts", "en": "Cost manager",
                  "de": "Kostenmanager", "es": "Gestor de costes",
                  "it": "Gestione dei costi"}, "/console/billing/concepts"),
    "ORDER":    ({"fr": "Commandes", "en": "Orders", "de": "Bestellungen",
                  "es": "Pedidos", "it": "Ordini"}, "/console/orders"),
    "SUPPORT":  ({"fr": "Support", "en": "Support", "de": "Support",
                  "es": "Soporte", "it": "Supporto"}, "/console"),
    "TICKET":   ({"fr": "Tickets de support", "en": "Support tickets",
                  "de": "Support-Tickets", "es": "Tickets de soporte",
                  "it": "Ticket di supporto"}, "/console"),
    # ── Observabilité ─────────────────────────────────────────────────────────
    "MET":      ({"fr": "Métriques", "en": "Metrics", "de": "Metriken",
                  "es": "Métricas", "it": "Metriche"}, "/console/metrics/concepts"),
    "MNT":      ({"fr": "Supervision", "en": "Monitoring", "de": "Überwachung",
                  "es": "Supervisión", "it": "Monitoraggio"}, "/console/metrics/concepts"),
    # ── IaaS VMware ──────────────────────────────────────────────────────────
    "CMP":      ({"fr": "IaaS VMware — Machines virtuelles",
                  "en": "IaaS VMware — Virtual machines",
                  "de": "IaaS VMware — Virtuelle Maschinen",
                  "es": "IaaS VMware — Máquinas virtuales",
                  "it": "IaaS VMware — Macchine virtuali"}, "/iaas_vmware"),
    "SNAP":     ({"fr": "IaaS VMware — Snapshots", "en": "IaaS VMware — Snapshots",
                  "de": "IaaS VMware — Snapshots", "es": "IaaS VMware — Snapshots",
                  "it": "IaaS VMware — Snapshot"}, "/iaas_vmware"),
    "INF":      ({"fr": "IaaS VMware — Infrastructure",
                  "en": "IaaS VMware — Infrastructure",
                  "de": "IaaS VMware — Infrastruktur",
                  "es": "IaaS VMware — Infraestructura",
                  "it": "IaaS VMware — Infrastruttura"}, "/iaas_vmware"),
    "BACK":     ({"fr": "IaaS VMware — Sauvegarde", "en": "IaaS VMware — Backup",
                  "de": "IaaS VMware — Backup",
                  "es": "IaaS VMware — Copia de seguridad",
                  "it": "IaaS VMware — Backup"}, "/iaas_vmware"),
    # ── IaaS OpenSource ───────────────────────────────────────────────────────
    "OpenIaasCMP":  ({"fr": "IaaS OpenSource — Machines virtuelles",
                      "en": "IaaS OpenSource — Virtual machines",
                      "de": "IaaS OpenSource — Virtuelle Maschinen",
                      "es": "IaaS OpenSource — Máquinas virtuales",
                      "it": "IaaS OpenSource — Macchine virtuali"},
                     "/iaas_opensource"),
    "OpenIaasINF":  ({"fr": "IaaS OpenSource — Infrastructure",
                      "en": "IaaS OpenSource — Infrastructure",
                      "de": "IaaS OpenSource — Infrastruktur",
                      "es": "IaaS OpenSource — Infraestructura",
                      "it": "IaaS OpenSource — Infrastruttura"},
                     "/iaas_opensource"),
    "OpenIaasBACK": ({"fr": "IaaS OpenSource — Sauvegarde",
                      "en": "IaaS OpenSource — Backup",
                      "de": "IaaS OpenSource — Backup",
                      "es": "IaaS OpenSource — Copia de seguridad",
                      "it": "IaaS OpenSource — Backup"},
                     "/iaas_opensource"),
    # ── Public Cloud & Bare Metal ─────────────────────────────────────────────
    "VMI":      ({"fr": "VM Instances", "en": "VM Instances", "de": "VM Instances",
                  "es": "VM Instances", "it": "VM Instances"},
                 "/public_cloud/vm_instances"),
    "BM":       ({"fr": "Bare Metal", "en": "Bare Metal", "de": "Bare Metal",
                  "es": "Bare Metal", "it": "Bare Metal"},
                 "/iaas_bare-metal"),
    # ── Réseau ────────────────────────────────────────────────────────────────
    "NET":      ({"fr": "Réseau", "en": "Network", "de": "Netzwerk",
                  "es": "Red", "it": "Rete"}, "/network/network_overview"),
    "VPC":      ({"fr": "VPC", "en": "VPC", "de": "VPC", "es": "VPC", "it": "VPC"},
                 "/network/vpc"),
    # ── Stockage ──────────────────────────────────────────────────────────────
    "OS":       ({"fr": "Object Storage", "en": "Object Storage",
                  "de": "Object Storage", "es": "Object Storage",
                  "it": "Object Storage"}, "/storage/oss"),
    "STORAGE":  ({"fr": "Stockage", "en": "Storage", "de": "Speicher",
                  "es": "Almacenamiento", "it": "Archiviazione"}, "/storage/oss"),
    # ── Services managés & plateformes ────────────────────────────────────────
    "K8S":      ({"fr": "Managed Kubernetes", "en": "Managed Kubernetes",
                  "de": "Managed Kubernetes", "es": "Managed Kubernetes",
                  "it": "Managed Kubernetes"},
                 "/managed_kubernetes"),
    "MDB":      ({"fr": "MariaDB Managé", "en": "Managed MariaDB",
                  "de": "Managed MariaDB", "es": "MariaDB gestionado",
                  "it": "MariaDB gestito"}, "/managed_mariadb"),
    "PG":       ({"fr": "PostgreSQL Managé", "en": "Managed PostgreSQL",
                  "de": "Managed PostgreSQL", "es": "PostgreSQL gestionado",
                  "it": "PostgreSQL gestito"}, "/managed_postgresql"),
    "OPENSHIFT":({"fr": "PaaS OpenShift", "en": "PaaS OpenShift",
                  "de": "PaaS OpenShift", "es": "PaaS OpenShift",
                  "it": "PaaS OpenShift"}, "/paas_openshift"),
    "AI":       ({"fr": "LLMaaS", "en": "LLMaaS", "de": "LLMaaS", "es": "LLMaaS",
                  "it": "LLMaaS"}, "/llmaas"),
    "BST":      ({"fr": "Bastion", "en": "Bastion", "de": "Bastion",
                  "es": "Bastion", "it": "Bastion"}, "/bastion"),
    "MP":       ({"fr": "Marketplace", "en": "Marketplace", "de": "Marketplace",
                  "es": "Marketplace", "it": "Marketplace"}, "/marketplace"),
    "HOUSING":  ({"fr": "Housing (Colocation)", "en": "Housing (Colocation)",
                  "de": "Housing (Colocation)", "es": "Housing (Colocation)",
                  "it": "Housing (Colocation)"}, "/housing"),
    "TERRAFORM":({"fr": "Terraform Provider", "en": "Terraform Provider",
                  "de": "Terraform Provider", "es": "Terraform Provider",
                  "it": "Terraform Provider"}, "/terraform"),
    "MCP":      ({"fr": "Serveur MCP de la Console", "en": "Console MCP server",
                  "de": "MCP-Server der Console", "es": "Servidor MCP de la Console",
                  "it": "Server MCP della Console"}, None),
}

# Coquilles de casse ou de nommage relevées dans maj.js : ce sont des alias, pas
# des catégories nouvelles. Traités ici pour ne pas dupliquer les libellés.
TAG_ALIASES = {
    "Order":     "ORDER",
    "METRIC":    "MET",
    "BACKUP":    "BACK",
    "NETWORK":   "NET",
    "VM":        "CMP",
    "VMAAS":     "VMI",
    "KUB":       "K8S",
    "OKD":       "OPENSHIFT",
    "LLM":       "AI",
    "BAST":      "BST",
    "OBJ":       "OS",
    "OSS":       "OS",
    "S3":        "OS",
    "STG":       "STORAGE",
}

# Ordre d'affichage des sections dans une version : ordre de déclaration ci-dessus.
TAG_ORDER = {tag: i for i, tag in enumerate(TAG_MAP)}


def canonical_tag(tag: str) -> str:
    return TAG_ALIASES.get(tag, tag)


def tag_label(tag: str, lang: str = "fr") -> str:
    """Libellé d'un produit dans la langue demandée, avec lien vers sa page."""
    labels, url = TAG_MAP[canonical_tag(tag)]
    label = labels.get(lang) or labels["en"]
    return f"[{label}]({url})" if url else label


def tag_sort_key(tag: str) -> int:
    return TAG_ORDER.get(canonical_tag(tag), len(TAG_ORDER))


def resolve_doc(url: str) -> Path | None:
    """
    Résout une URL de documentation vers son fichier source, selon la convention
    d'index de dossier de Docusaurus : docs/console/console.md est servi à
    « /console » et NON « /console/console ».
    """
    rel = url.strip("/")
    if not rel:
        return None
    direct = DOCS / f"{rel}.md"
    nom = rel.rsplit("/", 1)[-1]
    candidats = [
        DOCS / rel / f"{nom}.md",   # index de dossier
        DOCS / rel / "index.md",
        DOCS / rel / "README.md",
    ]
    # Un fichier d'index de dossier ne doit JAMAIS être adressé par le chemin
    # redondant : dans ce cas la route existe, mais pas celle qu'on écrit.
    if direct.exists() and not (DOCS / rel / f"{nom}.md").exists():
        return direct
    for c in candidats:
        if c.exists():
            return c
    return direct if direct.exists() else None


def validate_links(tag_map: dict | None = None) -> None:
    """Un lien produit en 404 sur la page « Nouveautés produits » est visible de
    tous les clients. La CI ne le voit pas : onBrokenLinks est réglé sur « log »."""
    casses = []
    for tag, (_labels, url) in (tag_map or TAG_MAP).items():
        if url is None:
            continue
        if resolve_doc(url) is None:
            casses.append((tag, url))
        # Le chemin redondant /x/x correspond à un index de dossier servi à /x.
        segments = url.strip("/").split("/")
        if len(segments) >= 2 and segments[-1] == segments[-2]:
            casses.append((tag, f"{url} → utiliser /{'/'.join(segments[:-1])}"))
    if casses:
        print("ERREUR : liens de documentation invalides dans TAG_MAP :",
              file=sys.stderr)
        for tag, url in casses:
            print(f"  - {tag} : {url}", file=sys.stderr)
        sys.exit(1)


def load_json(path: Path, default: dict) -> dict:
    if not path.exists():
        return default
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def apply_editorial(versions: list[dict], editorial: dict) -> list[dict]:
    """
    Applique le calque éditorial :
      - overrides  : réécriture client-facing d'une entrée source, ou exclusion
      - additions  : entrées rattachées à une version mais absentes de maj.js

    Les clés d'override sont « version|tag|sha1(texte FR source)[:12] ». Si le
    texte source change dans maj.js, la clé ne matche plus : on échoue au lieu
    de republier silencieusement une formulation périmée.
    """
    overrides = editorial.get("overrides", {})
    additions = editorial.get("additions", {})
    dates = editorial.get("dates", {})

    known_ids = {e["id"] for v in versions for e in v["entries"]}
    stale = sorted(set(overrides) - known_ids)
    if stale:
        print("ERREUR : réécritures éditoriales périmées (texte source modifié "
              "dans maj.js, ou entrée disparue) :", file=sys.stderr)
        for key in stale:
            print(f"  - {key}", file=sys.stderr)
        print("  → revoir scripts/changelog_editorial.json avant publication.",
              file=sys.stderr)
        sys.exit(1)

    by_version = {v["version"]: v for v in versions}
    unknown = sorted((set(additions) | set(dates)) - set(by_version))
    if unknown:
        print(f"ERREUR : calque rattaché à des versions inconnues : "
              f"{', '.join(unknown)}", file=sys.stderr)
        sys.exit(1)

    # Correction d'une date manifestement fausse dans maj.js. « attendue » est la
    # valeur actuellement présente en amont : si elle change, c'est que la coquille
    # a été corrigée à la source et la correction locale doit être retirée.
    for version, fix in dates.items():
        actuelle = by_version[version]["date"]
        if actuelle != fix["attendue"]:
            print(f"ERREUR : la date de v{version} vaut « {actuelle} » dans maj.js "
                  f"et non « {fix['attendue']} » : la correction locale est "
                  f"périmée.\n  → retirer l'entrée « {version} » de la section "
                  f"« dates » de changelog_editorial.json.", file=sys.stderr)
            sys.exit(1)
        by_version[version]["date"] = fix["corrigee"]

    for v in versions:
        kept = []
        for e in v["entries"]:
            ov = overrides.get(e["id"])
            if ov is None:
                kept.append(e)
                continue
            if ov.get("exclude"):
                continue
            texts = dict(e["texts"])
            for lang in ("fr", "en"):
                if ov.get(lang):
                    texts[lang] = ov[lang]
            kept.append({**e, "texts": texts})

        for add in additions.get(v["version"], []):
            kept.append({
                "tag": add["tag"],
                "id": f"{v['version']}|{add['tag']}|addition",
                "texts": {"fr": add["fr"], "en": add.get("en", add["fr"])},
            })

        v["entries"] = kept

    return [v for v in versions if v["entries"]]


def validate_tags(sections: list[dict]) -> None:
    """Échoue si un tag n'a pas de libellé : mieux vaut refuser de publier
    qu'afficher un code technique brut au client."""
    unknown = sorted({
        e["tag"] for s in sections for e in s["entries"]
        if canonical_tag(e["tag"]) not in TAG_MAP
    })
    if unknown:
        print(f"ERREUR : tags sans libellé dans TAG_MAP : {', '.join(unknown)}",
              file=sys.stderr)
        print("  → compléter TAG_MAP dans scripts/extract_changelog.py.",
              file=sys.stderr)
        sys.exit(1)


def validate_mdx(sections: list[dict]) -> None:
    """Docusaurus interprète les pages en MDX : « < » et « { » non échappés
    cassent le build des 5 locales d'un coup."""
    risky = [
        (s.get("version") or s["date"], e["tag"], txt)
        for s in sections for e in s["entries"] for txt in e["texts"].values()
        if "<" in txt or "{" in txt
    ]
    if risky:
        print("ERREUR : caractères interprétés par MDX dans le texte publié :",
              file=sys.stderr)
        for ver, tag, txt in risky:
            print(f"  - {ver} [{tag}] {txt}", file=sys.stderr)
        sys.exit(1)


def build_extra_sections(extra: dict) -> list[dict]:
    """
    Jalons des produits qui n'ont pas de version Console (bases de données
    managées, Observability, serveur MCP…). Rendus en sections datées,
    intercalées chronologiquement parmi les versions.
    """
    sections = []
    for s in extra.get("sections", []):
        for field in ("date", "title", "items"):
            if field not in s:
                print(f"ERREUR : section hors-Console incomplète (champ « {field} » "
                      f"manquant) : {s}", file=sys.stderr)
                sys.exit(1)
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", s["date"]):
            print(f"ERREUR : date invalide dans changelog_extra.json : {s['date']}",
                  file=sys.stderr)
            sys.exit(1)
        sections.append({
            "kind": "extra",
            "date": s["date"],
            "title": s["title"],
            "entries": [
                {"tag": it["tag"], "texts": {"fr": it["fr"], "en": it.get("en", it["fr"])}}
                for it in s["items"]
            ],
        })
    return sections


def merge_sections(versions: list[dict], extras: list[dict]) -> list[dict]:
    """
    Versions triées par numéro décroissant (maj.js est ordonné en semver, et une
    version reste l'ordre de référence d'un changelog de plateforme). Chaque
    jalon hors-Console est inséré juste avant la première version dont la date
    est antérieure ou égale à la sienne.
    """
    ordered = [
        {"kind": "version", **v}
        for v in sorted(versions, key=lambda v: version_key(v["version"]), reverse=True)
    ]
    # Insertion du plus récent au plus ancien : deux jalons partageant le même
    # point d'insertion se retrouvent sinon dans l'ordre croissant, à contresens
    # du reste de la page.
    for extra in sorted(extras, key=lambda s: s["date"], reverse=True):
        pos = next(
            (i for i, s in enumerate(ordered)
             if s["kind"] == "version" and s["date"] <= extra["date"]),
            len(ordered),
        )
        ordered.insert(pos, extra)
    return ordered


def localized(value, lang: str) -> str:
    """Un champ de configuration peut être une chaîne ou un dict par langue."""
    if isinstance(value, dict):
        return value.get(lang) or value.get("en") or value.get("fr")
    return value


def render_markdown(sections, lang, title, title_h1, intro, footer) -> str:
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

    for s in sections:
        if s["kind"] == "version":
            lines.append(f"## v{s['version']} — {s['date']}")
        else:
            lines.append(f"## {s['date']} — {localized(s['title'], lang)}")
        lines.append("")

        # Regroupement par produit (alias résolus) et ordre de sections stable :
        # sans cela l'ordre suivait l'ordre de saisie dans maj.js et variait
        # d'une version à l'autre.
        by_tag: dict[str, list[str]] = {}
        for e in s["entries"]:
            by_tag.setdefault(canonical_tag(e["tag"]), []).append(
                e["texts"].get(lang) or e["texts"]["en"]
            )

        # Une section datée ne portant qu'un seul produit, dont le nom est déjà
        # son titre, n'a pas besoin d'un sous-titre qui le répète.
        tags = sorted(by_tag, key=tag_sort_key)
        redondant = (
            s["kind"] == "extra"
            and len(tags) == 1
            and TAG_MAP[tags[0]][0].get(lang) == localized(s["title"], lang)
        )

        for tag in tags:
            if not redondant:
                lines.append(f"### {tag_label(tag, lang)}")
            lines += [f"- {t}" for t in by_tag[tag]]
            lines.append("")

    if footer:
        lines += ["---", "", footer, ""]

    return "\n".join(lines)


def build_footer(template: str, lang: str, dropped: list[dict], floor: str) -> str:
    """Pied de page « historique antérieur », calculé sur les versions réellement
    écartées par le plancher — pour qu'il ne puisse pas devenir faux."""
    if not template or not dropped:
        return ""
    first, last = dropped[0], dropped[-1]
    fy, fm, _ = first["date"].split("-")
    ly, lm, _ = last["date"].split("-")
    months = MONTHS[lang]
    return template.format(
        floor=".".join(floor.split(".")[:2]),
        first=first["version"], last=last["version"],
        first_month=months[int(fm) - 1], first_year=fy,
        last_month=months[int(lm) - 1], last_year=ly,
        git_url=GIT_URL,
    )


def _compute_file_hash(file_path: Path) -> str:
    """Calcule le hash SHA-256 d'un fichier."""
    sha256 = hashlib.sha256()
    with open(file_path, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            sha256.update(chunk)
    return sha256.hexdigest()


def _update_translation_meta(source_path: Path) -> None:
    """
    Enregistre le hash du fichier FR pour les langues RÉELLEMENT rédigées
    (AUTHORED_LANGUAGES). Les autres restent volontairement non tamponnées :
    elles contiennent de l'anglais de repli et doivent passer par translate.py.
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
    updated, pending = [], []

    for lang in TARGET_LANGUAGES:
        target = I18N / lang / "docusaurus-plugin-content-docs" / "current" / rel_path
        if not target.exists():
            continue
        if lang in AUTHORED_LANGUAGES:
            entry[lang] = source_hash
            updated.append(lang)
        else:
            entry.pop(lang, None)
            pending.append(lang)

    meta["last_update"] = datetime.now().isoformat()
    with open(META, "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=2, ensure_ascii=False)
        f.write("\n")

    if updated:
        print(f"  ✅ Hash mis à jour dans translation-meta.json [{', '.join(updated)}]")
    if pending:
        print(f"  ⏳ Traduction à produire via translate.py [{', '.join(pending)}]")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, default=INPUT,
                        help="chemin de maj.js (défaut : racine du dépôt)")
    parser.add_argument("--min", default=MIN_VERSION,
                        help=f"version plancher incluse (défaut : {MIN_VERSION})")
    parser.add_argument("--max", default=MAX_VERSION,
                        help="version plafond incluse : dernière version en "
                             f"production (défaut : {MAX_VERSION})")
    parser.add_argument("--check", action="store_true",
                        help="ne rien écrire ; échoue si les fichiers publiés "
                             "diffèrent de la génération (utile en CI)")
    args = parser.parse_args()

    if not args.input.exists():
        print(f"Fichier introuvable : {args.input}", file=sys.stderr)
        print("  → copier ihm/src/config/maj.js à la racine du dépôt.", file=sys.stderr)
        sys.exit(1)

    validate_links()

    print(f"Lecture de {args.input} …")
    content = args.input.read_text(encoding="utf-8")

    parsed = parse_maj_js(content)
    parsed = apply_editorial(parsed, load_json(EDITORIAL, {}))

    floor, ceil = version_key(args.min), version_key(args.max) if args.max else None
    dropped = sorted(
        (v for v in parsed if version_key(v["version"]) < floor),
        key=lambda v: version_key(v["version"]),
    )
    held = [v for v in parsed if ceil and version_key(v["version"]) > ceil]
    kept = [
        v for v in parsed
        if version_key(v["version"]) >= floor
        and (ceil is None or version_key(v["version"]) <= ceil)
    ]

    print(f"  {len(kept)} versions retenues (>= v{args.min}"
          + (f", <= v{args.max}" if args.max else "") + ")")
    if dropped:
        print(f"  {len(dropped)} versions sous le plancher → historique Git "
              f"(v{dropped[0]['version']} … v{dropped[-1]['version']})")
    if held:
        print(f"  ⏸  {len(held)} versions retenues en attente de mise en production : "
              + ", ".join(f"v{v['version']}" for v in held))

    extras = build_extra_sections(load_json(EXTRA, {}))
    sections = merge_sections(kept, extras)
    validate_tags(sections)
    validate_mdx(sections)
    if extras:
        print(f"  {len(extras)} jalon(s) hors version Console intercalé(s)")

    source_path, drift = None, []
    for lang, output_path, title, title_h1, intro, footer_tpl in OUTPUTS:
        md = render_markdown(
            sections, lang, title, title_h1, intro,
            build_footer(footer_tpl, lang, dropped, args.min),
        )
        if args.check:
            current = output_path.read_text(encoding="utf-8") if output_path.exists() else ""
            state = "OK" if current == md else "DIFFÈRE"
            if current != md:
                drift.append(str(output_path.relative_to(ROOT)))
            print(f"  [{lang}] {state}")
        else:
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_text(md, encoding="utf-8")
            print(f"  [{lang}] {len(sections)} sections → "
                  f"{output_path.relative_to(ROOT)}")
        if lang == "fr":
            source_path = output_path

    if args.check:
        if drift:
            print("\nÉCHEC : fichiers désynchronisés de la génération :", file=sys.stderr)
            for d in drift:
                print(f"  - {d}", file=sys.stderr)
            sys.exit(1)
        print("\nTous les fichiers publiés sont conformes à la génération.")
        return

    if source_path and source_path.exists():
        print("\nMise à jour des hash de traduction …")
        _update_translation_meta(source_path)


if __name__ == "__main__":
    main()
