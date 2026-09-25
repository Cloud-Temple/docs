#!/usr/bin/env python3
"""Garde-fou de fuite de secrets pour un dépôt PUBLIC.

Ce dépôt est publié sur https://github.com/Cloud-Temple/docs : tout ce qui est
suivi par Git est lisible par n'importe qui, et le reste dans l'historique même
après suppression. Ce contrôle existe parce que le cas s'est déjà produit —
une clé d'API LLMaaS réelle est restée exposée ~15 mois dans `tests/llmaas/.env`.

Le correctif d'alors (commit 43e454e8) avait ajouté les règles `.env` au
`.gitignore` en croyant clore l'incident. Sans effet : **`.gitignore` n'agit que
sur les fichiers NON suivis**. Un fichier déjà indexé le reste jusqu'à un
`git rm --cached` explicite. C'est précisément ce trou que le contrôle n°1
ci-dessous ferme, et aucun lint de contenu ne l'aurait détecté.

Trois contrôles, du plus décisif au plus heuristique :

  1. FICHIERS D'ENVIRONNEMENT SUIVIS — tout `.env` suivi par Git, hormis les
     `.env.example`. Déterministe, zéro faux positif : c'est le contrôle qui
     compte.
  2. MARQUEURS DE CONFLIT — `<<<<<<<` / `=======` / `>>>>>>>` commités. Un merge
     raté par-dessus un correctif de sécurité peut le réintroduire en silence
     (c'est arrivé ici sur `test_rag_simple.py`, laissé invalide en Python).
  3. MOTIFS DE SECRETS — formats de jetons à forte signature uniquement.
  4. VALEUR À FORTE ENTROPIE affectée à une variable au nom sensible. La même
     clé LLMaaS avait aussi été codée en DUR dans `test_rag_simple.py` et
     `test_rag_pipeline_detailed.py` (commit 523325b0), en valeur de repli de
     `os.getenv(...)`. Ce jeton n'a aucun préfixe reconnaissable : le contrôle
     n°3 le laisse passer. Sans ce quatrième contrôle, la moitié des formes
     prises par l'incident échapperait au garde-fou.

Les contrôles n°3 et n°4 sont volontairement CONSERVATEURS. Ce dépôt est de la
documentation : il regorge d'exemples `curl` et de jetons factices. Un garde-fou
qui crie au loup serait désactivé en une semaine. On n'y met donc que des
formats non ambigus, et toute valeur ressemblant à un gabarit
(`your-api-key`, `<TOKEN>`, `xxx`…) est ignorée. Il rattrape la clé copiée
depuis un terminal réel, pas l'exemple pédagogique.

Limites assumées : ce script ne lit que le contenu TEXTE des fichiers SUIVIS au
HEAD. Il ne voit ni l'historique, ni les captures d'écran, ni les secrets d'un
format inconnu. Le contrôle n°4 ignore les chaînes purement hexadécimales (SHA
Git, sommes de contrôle), très majoritairement du bruit ici : une clé en hexa
pur passerait donc au travers. Il empêche une NOUVELLE fuite d'entrer ; il ne
dit rien de celles déjà présentes dans l'historique.

Usage :
    python3 scripts/check_secrets.py           # scanne les fichiers suivis
    python3 scripts/check_secrets.py --quiet   # n'affiche que l'échec
"""

import base64
import binascii
import json
import math
import re
import subprocess
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).parent.parent
SELF = "scripts/check_secrets.py"

# --- Contrôle 1 : fichiers d'environnement suivis ---------------------------

ENV_TRACKED = re.compile(r"(^|/)\.env(\.|$)")
ENV_ALLOWED = re.compile(r"(^|/)\.env\.example$")

# --- Contrôle 2 : marqueurs de conflit --------------------------------------

CONFLICT = re.compile(r"^(<{7}|={7}|>{7})(\s|$)")

# --- Contrôle 3 : motifs de secrets -----------------------------------------

# Uniquement des formats à signature forte : un faux positif ici coûte plus cher
# que le faux négatif qu'il évite.
PATTERNS = {
    "clé privée": re.compile(r"-{5}BEGIN (?:RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY-{5}"),
    "clé AWS": re.compile(r"\b(?:AKIA|ASIA)[0-9A-Z]{16}\b"),
    "jeton GitHub": re.compile(r"\b(?:ghp|gho|ghs|ghu)_[A-Za-z0-9]{36}\b|\bgithub_pat_[A-Za-z0-9_]{22,}"),
    "jeton GitLab": re.compile(r"\bglpat-[A-Za-z0-9_-]{20}\b"),
    "clé Anthropic": re.compile(r"\bsk-ant-(?:api|admin)[A-Za-z0-9_-]{20,}"),
    "clé OpenAI": re.compile(r"\bsk-(?:proj-)?[A-Za-z0-9]{40,}\b"),
    "jeton Slack": re.compile(r"\bxox[baprs]-[A-Za-z0-9-]{10,}"),
    "clé Google": re.compile(r"\bAIza[0-9A-Za-z_-]{35}\b"),
    "jeton HuggingFace": re.compile(r"\bhf_[A-Za-z0-9]{34}\b"),
    "jeton DockerHub": re.compile(r"\bdckr_pat_[A-Za-z0-9_-]{20,}"),
    "jeton npm": re.compile(r"\bnpm_[A-Za-z0-9]{36}\b"),
    "identifiants dans une URL": re.compile(r"://[A-Za-z0-9._%-]+:[^\s/@'\"]{6,}@[A-Za-z0-9.-]+"),
}

JWT = re.compile(r"\beyJ[A-Za-z0-9_-]{8,}\.([A-Za-z0-9_-]{8,})\.[A-Za-z0-9_-]{8,}\b")

# --- Contrôle 4 : valeur à forte entropie en contexte sensible ---------------

# Contexte : la ligne doit parler de secret. Sans cette contrainte, le contrôle
# se déclencherait sur chaque identifiant de build ou chaîne base64 de la doc.
SENSITIVE_CONTEXT = re.compile(
    r"(?i)(api[_-]?key|secret|token|password|passwd|credential|bearer|auth[_-]?key)"
)
# Valeur entre guillemets, assez longue pour porter un secret réel.
QUOTED_VALUE = re.compile(r"[\"']([A-Za-z0-9+/=_-]{24,})[\"']")
# Un jeton aléatoire dépasse 4 bits/caractère ; une phrase ou un slug restent
# en dessous. L'hexadécimal pur plafonne à 4.0 : on l'exclut plutôt que de
# risquer de signaler chaque SHA Git.
ENTROPY_THRESHOLD = 4.0
HEX_ONLY = re.compile(r"^[0-9a-fA-F]+$")

# Une valeur contenant l'un de ces fragments est un gabarit de documentation.
PLACEHOLDER_HINTS = (
    "your-", "your_", "votre-", "votre_", "example", "exemple", "changeme",
    "placeholder", "<", "...", "xxxx", "todo", "replace", "dummy", "sample",
    "test-token-for-docs", "abcdef", "123456", "johndoe", "john_doe",
)

# Fichiers dont le contenu est structurellement bruyant pour le contrôle n°3.
CONTENT_SKIP = ("yarn.lock", "package-lock.json", SELF)
BINARY_SUFFIXES = {
    ".png", ".jpg", ".jpeg", ".gif", ".ico", ".pdf", ".woff", ".woff2",
    ".ttf", ".eot", ".zip", ".gz", ".mp4", ".webm", ".webp", ".pyc",
}


def tracked_files():
    """Liste les chemins suivis par Git au HEAD, relatifs à la racine du dépôt."""
    out = subprocess.run(
        ["git", "ls-files", "-z"],
        cwd=ROOT, capture_output=True, text=True, check=True,
    ).stdout
    return [p for p in out.split("\0") if p]


def is_placeholder(value: str) -> bool:
    """Vrai si la valeur est manifestement un gabarit et non un secret réel."""
    low = value.lower()
    if any(hint in low for hint in PLACEHOLDER_HINTS):
        return True
    # Une valeur d'un seul caractère répété (xxxxxx, 000000) n'est pas un secret.
    stripped = re.sub(r"[^A-Za-z0-9]", "", value)
    return len(set(stripped)) <= 2


def is_demo_jwt(payload_b64: str) -> bool:
    """Vrai pour le JWT de démonstration public de jwt.io, omniprésent en doc."""
    try:
        pad = payload_b64 + "=" * (-len(payload_b64) % 4)
        claims = json.loads(base64.urlsafe_b64decode(pad))
    except (ValueError, binascii.Error, UnicodeDecodeError):
        # Payload illisible : on ne peut rien affirmer, on signale par prudence.
        return False
    return claims.get("sub") == "1234567890" or claims.get("name") == "John Doe"


def shannon_entropy(value: str) -> float:
    """Entropie de Shannon en bits par caractère (0 si chaîne vide)."""
    if not value:
        return 0.0
    counts = Counter(value)
    n = len(value)
    return -sum((c / n) * math.log2(c / n) for c in counts.values())


def scan_env(paths):
    """Contrôle 1 : un `.env` réel ne doit jamais être suivi par Git."""
    return [
        (p, 0, "fichier d'environnement suivi par Git", p)
        for p in paths
        if ENV_TRACKED.search(p) and not ENV_ALLOWED.search(p)
    ]


def scan_content(paths):
    """Contrôles 2 et 3 sur le contenu texte des fichiers suivis."""
    violations = []
    for p in paths:
        if p in CONTENT_SKIP or Path(p).suffix.lower() in BINARY_SUFFIXES:
            continue
        try:
            text = (ROOT / p).read_text(encoding="utf-8")
        except (UnicodeDecodeError, FileNotFoundError, IsADirectoryError):
            continue

        for i, line in enumerate(text.split("\n"), start=1):
            if CONFLICT.match(line):
                violations.append((p, i, "marqueur de conflit Git commité", line.strip()))
                continue

            for label, pattern in PATTERNS.items():
                m = pattern.search(line)
                if m and not is_placeholder(m.group(0)):
                    violations.append((p, i, label, m.group(0)))

            m = JWT.search(line)
            if m and not is_demo_jwt(m.group(1)) and not is_placeholder(m.group(0)):
                violations.append((p, i, "JWT", m.group(0)))

            if SENSITIVE_CONTEXT.search(line):
                for value in QUOTED_VALUE.findall(line):
                    if HEX_ONLY.match(value) or is_placeholder(value):
                        continue
                    if shannon_entropy(value) >= ENTROPY_THRESHOLD:
                        violations.append((p, i, "valeur à forte entropie", value))
    return violations


def redact(value: str) -> str:
    """Tronque une valeur sensible : assez pour l'identifier, pas pour l'utiliser."""
    return value if len(value) <= 12 else f"{value[:6]}…({len(value)} car.)"


def main() -> int:
    quiet = "--quiet" in sys.argv
    paths = tracked_files()
    violations = scan_env(paths) + scan_content(paths)

    if not violations:
        if not quiet:
            print(f"✅ Secrets : aucune fuite détectée sur {len(paths)} fichiers suivis.")
        return 0

    print(f"❌ ÉCHEC : {len(violations)} fuite(s) potentielle(s) dans des fichiers "
          "suivis par Git — ce dépôt est PUBLIC :", file=sys.stderr)
    for path, lineno, label, value in sorted(violations):
        where = f"{path}:{lineno}" if lineno else path
        print(f"  - [{label}] {where}  {redact(value)}", file=sys.stderr)

    print("\nSi c'est un vrai secret : RÉVOQUEZ-LE d'abord (l'historique Git le garde\n"
          "exposé même après suppression), puis retirez-le du suivi :\n"
          "  git rm --cached <fichier>\n"
          "Si c'est un exemple de documentation, rendez-le explicitement factice\n"
          "(`your-api-key-here`, `<TOKEN>`) pour lever l'alerte.", file=sys.stderr)
    return 1


if __name__ == "__main__":
    sys.exit(main())
