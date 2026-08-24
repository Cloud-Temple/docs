#!/usr/bin/env python3
"""
Réaligne les ancres des fichiers traduits sur les titres de leur propre langue.

Le problème. Une ancre Markdown pointe un titre par son *slug*, dérivé du texte
du titre. Quand translate.py traduit un titre, son slug change — mais pas les
liens qui le visaient, recopiés depuis la source française. Le lien pointe alors
dans le vide, dans cette langue uniquement. Docusaurus le signale au build sous
« Broken anchor », un simple avertissement : le défaut passe donc inaperçu.

La solution durable serait d'épingler des identifiants explicites
(## Titre {#slug}), qui rendent l'ancre indépendante de la langue. Elle est
INUTILISABLE ici : le projet active future.v4, les .md sont analysés en MDX
strict, et « { » y ouvre une expression JSX — la compilation échoue.

Ce script rejoue donc la correction après chaque traduction. À lancer dans cet
ordre : translate.py, puis ce script, puis yarn build.

    python3 scripts/fix_i18n_anchors.py            # corrige
    python3 scripts/fix_i18n_anchors.py --check    # ne corrige pas, sort 1 si écart

Méthode. Pour chaque lien d'ancre d'un fichier traduit dont le slug est absent
du fichier cible, on retrouve le titre correspondant par sa POSITION dans le
fichier français, à condition que les deux fichiers aient la même ossature de
titres. Sans cette condition, on ne devine pas : le cas est signalé et laissé
en place, car une traduction incomplète ne se répare pas par un lien.
"""

import argparse
import re
import sys
import urllib.parse
from pathlib import Path

RACINE = Path(__file__).parent.parent
DOCS = RACINE / "docs"
I18N = RACINE / "i18n"
LANGUES = ("en", "de", "es", "it")

TITRE = re.compile(r"^(#{1,6})\s+(.*\S)\s*$")
# [texte](chemin#ancre) et href="chemin#ancre"
LIEN = re.compile(r"(?:\]\(|href=[\"']?)([^)\"'\s>]*?)#([^)\"'\s>]+)")


def slug(texte: str) -> str:
    """Slug d'un titre, tel que github-slugger le produit pour Docusaurus."""
    s = re.sub(r"[^\w\s-]", "", texte.strip().lower(), flags=re.UNICODE)
    return re.sub(r"\s+", "-", s)


def titres(chemin: Path) -> list[tuple[int, str]]:
    if not chemin.exists():
        return []
    return [
        (len(m.group(1)), m.group(2))
        for ligne in chemin.read_text(encoding="utf-8").splitlines()
        if (m := TITRE.match(ligne))
    ]


def racine_langue(lang: str) -> Path:
    return DOCS if lang == "fr" else I18N / lang / "docusaurus-plugin-content-docs" / "current"


def cible_du_lien(source_rel: str, chemin_lien: str, lang: str) -> str | None:
    """
    Chemin relatif (à la racine de la langue) du fichier visé par un lien.
    None si le lien est externe, ou une ancre de la page courante.

    Gère trois formes rencontrées dans le dépôt : relative, absolue préfixée
    par la locale (/en/...), et suffixée d'une chaîne de requête
    (...quickstart?_highlight=*facteur#ancre) qu'il faut retirer avant de
    résoudre, sans quoi le fichier n'est jamais trouvé et le cas passe
    silencieusement à la trappe.
    """
    if chemin_lien.startswith(("http://", "https://", "mailto:", "pathname://")):
        return None
    chemin_lien = chemin_lien.split("?")[0]
    if not chemin_lien:
        return source_rel                      # ancre de la page courante
    if chemin_lien.startswith("/"):
        nu = chemin_lien.lstrip("/")
        prefixe = f"{lang}/"
        cible = nu[len(prefixe):] if nu.startswith(prefixe) else nu
        return cible if cible.endswith(".md") else cible + ".md"
    base = Path(source_rel).parent
    cible = (base / chemin_lien).as_posix()
    cible = re.sub(r"/\./", "/", cible)
    while "/../" in cible:
        cible = re.sub(r"[^/]+/\.\./", "", cible, count=1)
    if not cible.endswith(".md"):
        cible += ".md"
    return cible


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true",
                    help="ne rien écrire ; sortir en erreur s'il reste des ancres à réaligner")
    args = ap.parse_args()

    corrections, sans_solution, orphelins, inconnues = [], [], set(), []

    for lang in LANGUES:
        racine = racine_langue(lang)
        if not racine.exists():
            continue
        for fichier in sorted(racine.rglob("*.md")):
            rel = fichier.relative_to(racine).as_posix()
            # Traduction orpheline : aucune source française, donc Docusaurus ne
            # rend pas la page. Ses ancres n'ont aucun effet sur le site servi ;
            # la signaler suffit, et l'inclure rendrait --check rouge à jamais.
            if not (DOCS / rel).exists():
                orphelins.add(f"{lang}/{rel}")
                continue
            texte = fichier.read_text(encoding="utf-8")
            nouveau = texte

            for m in LIEN.finditer(texte):
                chemin_lien, ancre_brute = m.group(1), m.group(2)
                ancre = urllib.parse.unquote(ancre_brute)
                cible_rel = cible_du_lien(rel, chemin_lien, lang)
                if cible_rel is None:
                    continue

                t_lang = titres(racine / cible_rel)
                if not t_lang or ancre in {slug(x) for _, x in t_lang}:
                    continue                    # cible absente du périmètre, ou ancre déjà bonne

                t_fr = titres(DOCS / cible_rel)
                idx = next((k for k, (_, x) in enumerate(t_fr) if slug(x) == ancre), None)
                if idx is None:
                    # Ni un slug de la langue, ni un slug français : typiquement un
                    # slug traduit devenu périmé après une retraduction du titre.
                    # Irrécupérable sans historique — on le signale.
                    inconnues.append((lang, rel, cible_rel, ancre))
                    continue
                if [n for n, _ in t_fr] != [n for n, _ in t_lang]:
                    sans_solution.append((lang, rel, cible_rel, ancre, "ossature de titres différente"))
                    continue

                bon = slug(t_lang[idx][1])
                for variante in {ancre_brute, ancre, urllib.parse.quote(ancre, safe="-")}:
                    nouveau = re.sub(r"#" + re.escape(variante) + r"(?![\w%-])", "#" + bon, nouveau)
                corrections.append((lang, rel, ancre, bon))

            if nouveau != texte and not args.check:
                fichier.write_text(nouveau, encoding="utf-8")

    vus = set()
    uniques = [c for c in corrections if not (c in vus or vus.add(c))]
    verbe = "à réaligner" if args.check else "réalignées"
    print(f"{len(uniques)} ancre(s) {verbe}")
    for lang, rel, avant, apres in uniques:
        print(f"  {lang}  {rel}")
        print(f"       #{avant}  ->  #{apres}")

    if sans_solution:
        print(f"\n{len(sans_solution)} ancre(s) sans solution automatique :")
        for lang, rel, cible, ancre, motif in sans_solution:
            print(f"  {lang}  {rel}  ->  {cible}#{ancre}")
            print(f"       {motif} : la traduction de la cible est incomplète, "
                  f"la reprendre avant de corriger le lien")

    if inconnues:
        print(f"\n{len(inconnues)} ancre(s) inconnue(s) — ni slug de la langue, ni slug "
              f"français :")
        for lang, rel, cible, ancre in inconnues:
            print(f"  {lang}  {rel}  ->  {cible}#{ancre}")
        print("  (probablement un slug traduit périmé : à corriger à la main)")

    if orphelins:
        print(f"\n{len(orphelins)} traduction(s) orpheline(s) ignorée(s) — "
              f"aucune source française, donc page non rendue :")
        for o in sorted(orphelins):
            print(f"  {o}")
        print("  (à supprimer, ou à doter d'une source française)")

    if args.check and (uniques or sans_solution or inconnues):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
