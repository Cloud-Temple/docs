#!/usr/bin/env python3
"""
Non-régression de la syntaxe des admonitions (Docusaurus 3 / MDX v3).

Défaut réel visé : sous MDX v3, `:::info Titre` (titre séparé par une espace,
héritage Docusaurus 2) n'est plus reconnu et TOUT le bloc s'affiche en texte
brut — sans erreur de build. Ce défaut a été publié en production (pied de page
du changelog produits + section llmaas). Le contrôle interdit sa réapparition.

    python3 -m unittest discover -s tests/admonitions -v
"""

import importlib.util
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

_spec = importlib.util.spec_from_file_location(
    "check_admonitions", ROOT / "scripts" / "check_admonitions.py"
)
ca = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(ca)


class TestAdmonitionsInvariant(unittest.TestCase):
    """Le contenu publié ne doit contenir AUCUNE admonition en syntaxe espace."""

    def test_aucune_syntaxe_espace_dans_le_contenu(self):
        violations = ca.find_violations(ROOT)
        detail = "\n".join(f"  - {p}:{n}  {l.strip()}" for p, n, l in sorted(violations))
        self.assertEqual(
            violations, [],
            f"\n{len(violations)} admonition(s) en syntaxe espace (cassées en MDX v3) :\n{detail}"
            "\nCorrigez avec des crochets : `:::info Titre` -> `:::info[Titre]`",
        )


class TestDetecteurFiable(unittest.TestCase):
    """Le détecteur doit réellement discriminer — sinon le garde-fou est vide."""

    def test_detecte_la_syntaxe_espace(self):
        self.assertTrue(ca.scan_text(":::info Titre cassé\ntexte\n:::"))

    def test_detecte_meme_indentee(self):
        # Admonition imbriquée dans une liste (indentation de contenu de liste).
        self.assertTrue(ca.scan_text("    :::tip Astuce\n    texte\n    :::"))

    def test_ignore_la_syntaxe_crochet_correcte(self):
        self.assertEqual(ca.scan_text(":::info[Titre correct]\ntexte\n:::"), [])

    def test_ignore_les_exemples_dans_un_bloc_de_code(self):
        self.assertEqual(ca.scan_text("```md\n:::info Exemple\n:::\n```"), [])

    def test_ignore_une_ouverture_sans_titre(self):
        # `:::info` sans titre est valide et n'a rien à corriger.
        self.assertEqual(ca.scan_text(":::info\ntexte\n:::"), [])


if __name__ == "__main__":
    unittest.main()
