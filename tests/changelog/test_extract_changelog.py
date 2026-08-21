#!/usr/bin/env python3
"""
Tests de non-régression du générateur de changelog produits.

Chaque test cible un défaut qui a réellement provoqué la publication de contenu
faux sur la documentation publique. Ils n'utilisent que la bibliothèque standard.

    python3 -m unittest discover -s tests/changelog -v
"""

import importlib.util
import json
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

_spec = importlib.util.spec_from_file_location(
    "extract_changelog", ROOT / "scripts" / "extract_changelog.py"
)
ec = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(ec)


def maj(*version_blocks: str) -> str:
    return "const maj = {\n" + "\n".join(version_blocks) + "\n}\n"


def version_block(version: str, date: str, *entries: str) -> str:
    return (f"  '{version}': {{\n"
            f"    options: {{ date: new Date('{date}') }},\n"
            f"    data: [\n" + ",\n".join(entries) + "\n    ]\n  }},")


def entry(fr: str, en: str, tag: str) -> str:
    return ("      {\n"
            "        text: lang === 'fr'\n"
            f"          ? \"{fr}\"\n"
            f"          : \"{en}\",\n"
            f"        tag: '{tag}'\n"
            "      }")


class ParsingTest(unittest.TestCase):
    """La regex d'entrée n'acceptait que des tags [A-Z_]+."""

    def test_tag_en_casse_mixte_est_reconnu(self):
        src = maj(version_block(
            "4.5.0", "2025-01-17",
            entry("Ajout de l'upload ISO sur les catalogues", "Add ISO upload", "OpenIaasCMP"),
        ))
        versions = ec.parse_maj_js(src)
        self.assertEqual(len(versions), 1)
        self.assertEqual([e["tag"] for e in versions[0]["entries"]], ["OpenIaasCMP"])

    def test_une_entree_n_absorbe_pas_la_suivante(self):
        """
        Régression du défaut principal : le tag 'OpenIaasCMP' ne matchant pas,
        son texte était republié sous le tag de l'entrée suivante ('ORDER') et
        le texte de cette dernière disparaissait du changelog publié.
        """
        src = maj(version_block(
            "4.5.0", "2025-01-17",
            entry("Ajout de l'upload ISO sur les catalogues", "Add ISO upload", "OpenIaasCMP"),
            entry("Ajout d'une commande pour le Bare Metal", "Add a Bare Metal order", "ORDER"),
        ))
        entries = ec.parse_maj_js(src)[0]["entries"]
        self.assertEqual(len(entries), 2, "une entrée a été absorbée par la suivante")
        self.assertEqual(
            {(e["tag"], e["texts"]["fr"]) for e in entries},
            {
                ("OpenIaasCMP", "Ajout de l'upload ISO sur les catalogues"),
                ("ORDER", "Ajout d'une commande pour le Bare Metal"),
            },
        )

    def test_apostrophe_echappee_est_restituee(self):
        src = ("const maj = {\n  '4.1.0': {\n"
               "    options: { date: new Date('2024-11-13') },\n"
               "    data: [\n      {\n"
               "        text: lang === 'fr' ? 'Ajout d\\'une page' : 'Add a page',\n"
               "        tag: 'GEN'\n      }\n    ]\n  },\n}\n")
        entries = ec.parse_maj_js(src)[0]["entries"]
        self.assertEqual(entries[0]["texts"]["fr"], "Ajout d'une page")

    def test_version_sans_entree_publiable_est_omise(self):
        src = maj(version_block(
            "4.47.1", "2026-07-31",
            entry("Correction du déploiement d'une VM", "Fix to the VM deployment", "MP"),
        ))
        self.assertEqual(ec.parse_maj_js(src), [])


class BugfixFilterTest(unittest.TestCase):
    """Le filtre ne testait que des préfixes français : les correctifs
    passaient donc dans les fichiers traduits."""

    def test_correctif_exclu_dans_toutes_les_langues(self):
        src = maj(version_block(
            "4.36.0", "2026-03-27",
            entry("Correction de l'affichage des disques", "Disk display bug fixed", "CMP"),
            entry("Ajout de filtres sur la liste", "Add filters to the list", "ORDER"),
        ))
        versions = ec.parse_maj_js(src)
        textes_fr = [e["texts"]["fr"] for e in versions[0]["entries"]]
        textes_en = [e["texts"]["en"] for e in versions[0]["entries"]]
        self.assertEqual(len(versions[0]["entries"]), 1)
        self.assertNotIn("Correction de l'affichage des disques", textes_fr)
        self.assertNotIn("Disk display bug fixed", textes_en)

    def test_fr_et_en_portent_exactement_les_memes_entrees(self):
        src = maj(
            version_block("4.10.0", "2025-03-04",
                          entry("Correction d'un bug", "Something was improved", "GEN"),
                          entry("Ajout d'une page", "Add a page", "GEN")),
            version_block("4.11.0", "2025-03-10",
                          entry("Corriger la redirection", "Redirection changed", "ORDER")),
        )
        versions = ec.parse_maj_js(src)
        self.assertEqual([v["version"] for v in versions], ["4.10.0"])
        for v in versions:
            for e in v["entries"]:
                self.assertIn("fr", e["texts"])
                self.assertIn("en", e["texts"])


class TagMapTest(unittest.TestCase):
    def test_tag_inconnu_fait_echouer_la_generation(self):
        """Publier « ### ZZZ » au client est pire que ne rien publier."""
        sections = [{"kind": "version", "version": "4.1.0", "date": "2024-11-13",
                     "entries": [{"tag": "ZZZ", "texts": {"fr": "x", "en": "x"}}]}]
        with self.assertRaises(SystemExit) as ctx:
            ec.validate_tags(sections)
        self.assertEqual(ctx.exception.code, 1)

    def test_alias_resolu_vers_le_tag_canonique(self):
        """« Order », « METRIC », « VMAAS »… sont des coquilles de maj.js, pas
        des produits distincts : elles ne doivent pas créer de section en double."""
        self.assertEqual(ec.canonical_tag("Order"), "ORDER")
        self.assertEqual(ec.canonical_tag("METRIC"), "MET")
        self.assertEqual(ec.canonical_tag("VMAAS"), "VMI")
        self.assertEqual(ec.tag_label("Order", "fr"), ec.tag_label("ORDER", "fr"))
        ec.validate_tags([{"kind": "version", "version": "4.11.0", "date": "2025-03-10",
                           "entries": [{"tag": "Order", "texts": {"fr": "x", "en": "x"}}]}])

    def test_libelle_localise_dans_les_cinq_langues(self):
        """Le fichier anglais portait 164 titres de section en français."""
        for lang, attendu in [("fr", "Commandes"), ("en", "Orders"),
                              ("de", "Bestellungen"), ("es", "Pedidos"),
                              ("it", "Ordini")]:
            self.assertEqual(ec.tag_label("ORDER", lang), f"[{attendu}](/console/orders)")

    def test_toutes_les_langues_sont_couvertes_pour_chaque_produit(self):
        langues = {"fr"} | set(ec.TARGET_LANGUAGES)
        for tag, (labels, _url) in ec.TAG_MAP.items():
            manquantes = sorted(langues - set(labels))
            self.assertEqual(manquantes, [], f"{tag} : langues manquantes {manquantes}")
            for lang, label in labels.items():
                self.assertTrue(label.strip(), f"{tag}/{lang} : libellé vide")

    def test_produit_sans_page_de_doc_reste_sans_lien(self):
        self.assertEqual(ec.tag_label("INV", "fr"), "Inventaire")

    def test_tous_les_tags_de_maj_js_ont_un_libelle(self):
        """
        Garde-fou principal : c'est ce test qui aurait évité la publication de
        162 entrées perdues ou mal attribuées. Ignoré si maj.js est absent.
        """
        source = ROOT / "maj.js"
        if not source.exists():
            self.skipTest("maj.js absent (copier ihm/src/config/maj.js à la racine)")
        import re
        contenu = source.read_text(encoding="utf-8")
        tags = set(re.findall(r"tag:\s*['\"]([A-Za-z_]+)['\"]", contenu))
        manquants = sorted(t for t in tags if ec.canonical_tag(t) not in ec.TAG_MAP)
        self.assertEqual(manquants, [], f"tags sans libellé : {manquants}")

    def test_le_referentiel_de_tags_de_maj_js_est_couvert(self):
        """maj.js déclare son propre référentiel (const tags) : tout slug qui y
        apparaît doit avoir un libellé, même s'il n'est pas encore utilisé."""
        source = ROOT / "maj.js"
        if not source.exists():
            self.skipTest("maj.js absent")
        import re
        contenu = source.read_text(encoding="utf-8")
        debut = contenu.index("const tags")
        bloc = contenu[debut:contenu.index("]", debut)]
        slugs = set(re.findall(r"slug:\s*'([A-Za-z_]+)'", bloc))
        manquants = sorted(s for s in slugs if ec.canonical_tag(s) not in ec.TAG_MAP)
        self.assertEqual(manquants, [], f"slugs déclarés sans libellé : {manquants}")


class OrdreDesSectionsTest(unittest.TestCase):
    def test_ordre_stable_et_independant_de_maj_js(self):
        """L'ordre des sections suivait l'ordre de saisie dans maj.js et variait
        donc d'une version à l'autre."""
        entrees = [{"tag": t, "texts": {"fr": t, "en": t}}
                   for t in ["OS", "GEN", "VPC", "CMP", "IAM"]]
        md = ec.render_markdown(
            [{"kind": "version", "version": "4.1.0", "date": "2024-11-13",
              "entries": entrees}], "fr", "t", "T", "i", "")
        positions = [md.index(ec.tag_label(t, "fr")) for t in ["GEN", "IAM", "CMP", "VPC", "OS"]]
        self.assertEqual(positions, sorted(positions))

    def test_meme_produit_sous_deux_alias_donne_une_seule_section(self):
        entrees = [{"tag": "ORDER", "texts": {"fr": "a", "en": "a"}},
                   {"tag": "Order", "texts": {"fr": "b", "en": "b"}}]
        md = ec.render_markdown(
            [{"kind": "version", "version": "4.11.0", "date": "2025-03-10",
              "entries": entrees}], "fr", "t", "T", "i", "")
        self.assertEqual(md.count("### [Commandes]"), 1)


class MdxTest(unittest.TestCase):
    def test_caractere_mdx_fait_echouer(self):
        """« < » ou « { » non échappés cassent le build des 5 locales."""
        for texte in ["taille < 10 Gio", "valeur {x}"]:
            with self.assertRaises(SystemExit):
                ec.validate_mdx([{"kind": "version", "version": "4.1.0",
                                  "date": "2024-11-13",
                                  "entries": [{"tag": "GEN",
                                               "texts": {"fr": texte, "en": texte}}]}])

    def test_texte_sain_passe(self):
        ec.validate_mdx([{"kind": "version", "version": "4.1.0", "date": "2024-11-13",
                          "entries": [{"tag": "GEN",
                                       "texts": {"fr": "Réseaux & VPC", "en": "Networks & VPC"}}]}])


class CorrectionDeDateTest(unittest.TestCase):
    def _versions(self, date="2024-01-13"):
        src = maj(version_block("4.4.0", date,
                                entry("Modifications techniques", "Technical changes", "GEN")))
        return ec.parse_maj_js(src)

    def test_date_corrigee_appliquee(self):
        out = ec.apply_editorial(self._versions(), {"dates": {
            "4.4.0": {"attendue": "2024-01-13", "corrigee": "2025-01-13"}}})
        self.assertEqual(out[0]["date"], "2025-01-13")

    def test_correction_perimee_fait_echouer(self):
        """Si la coquille est corrigée en amont dans maj.js, la correction locale
        doit être signalée et retirée, pas appliquée en silence."""
        with self.assertRaises(SystemExit) as ctx:
            ec.apply_editorial(self._versions("2025-01-13"), {"dates": {
                "4.4.0": {"attendue": "2024-01-13", "corrigee": "2025-01-13"}}})
        self.assertEqual(ctx.exception.code, 1)


class EditorialTest(unittest.TestCase):
    def _versions(self):
        src = maj(version_block(
            "4.47.0", "2026-07-30",
            entry("Ajout du swagger du module Commandes", "Add the Orders module swagger", "GEN"),
        ))
        return ec.parse_maj_js(src)

    def test_reecriture_remplace_le_texte_source(self):
        versions = self._versions()
        eid = versions[0]["entries"][0]["id"]
        out = ec.apply_editorial(versions, {"overrides": {eid: {
            "fr": "La référence d'API du module Commandes est désormais publiée",
            "en": "The Orders module API reference is now published",
        }}})
        self.assertEqual(out[0]["entries"][0]["texts"]["fr"],
                         "La référence d'API du module Commandes est désormais publiée")
        self.assertEqual(out[0]["entries"][0]["texts"]["en"],
                         "The Orders module API reference is now published")

    def test_exclusion_retire_l_entree(self):
        versions = self._versions()
        eid = versions[0]["entries"][0]["id"]
        out = ec.apply_editorial(versions, {"overrides": {eid: {"exclude": True}}})
        self.assertEqual(out, [], "la version vidée de ses entrées doit disparaître")

    def test_reecriture_perimee_fait_echouer(self):
        """Si maj.js change le texte source, mieux vaut échouer que publier
        une formulation qui ne correspond plus à la livraison."""
        with self.assertRaises(SystemExit) as ctx:
            ec.apply_editorial(self._versions(), {
                "overrides": {"4.47.0|GEN|000000000000": {"fr": "obsolète"}}
            })
        self.assertEqual(ctx.exception.code, 1)

    def test_addition_sur_version_inexistante_fait_echouer(self):
        with self.assertRaises(SystemExit) as ctx:
            ec.apply_editorial(self._versions(), {
                "additions": {"9.9.9": [{"tag": "IAM", "fr": "x", "en": "x"}]}
            })
        self.assertEqual(ctx.exception.code, 1)

    def test_addition_est_rattachee_a_la_version(self):
        out = ec.apply_editorial(self._versions(), {
            "additions": {"4.47.0": [{"tag": "IAM", "fr": "Nouvelles permissions",
                                      "en": "New permissions"}]}
        })
        self.assertEqual(
            [(e["tag"], e["texts"]["fr"]) for e in out[0]["entries"]][-1],
            ("IAM", "Nouvelles permissions"),
        )


class ExtraSectionTest(unittest.TestCase):
    """Les produits sans version Console (bases managées, Observability, MCP)."""

    def _extra(self):
        return {"sections": [{
            "date": "2026-04-15",
            "title": {"fr": "Bases de données managées", "en": "Managed databases"},
            "items": [{"tag": "MDB", "fr": "Disponibilité", "en": "Availability"}],
        }]}

    def test_date_invalide_fait_echouer(self):
        with self.assertRaises(SystemExit):
            ec.build_extra_sections({"sections": [{"date": "15/04/2026", "title": {},
                                                   "items": []}]})

    def test_champ_manquant_fait_echouer(self):
        with self.assertRaises(SystemExit):
            ec.build_extra_sections({"sections": [{"date": "2026-04-15", "items": []}]})

    def test_insertion_chronologique_entre_deux_versions(self):
        versions = [
            {"version": "4.38.0", "date": "2026-04-17", "entries": [
                {"tag": "VMI", "texts": {"fr": "a", "en": "a"}}]},
            {"version": "4.37.0", "date": "2026-04-02", "entries": [
                {"tag": "CM", "texts": {"fr": "b", "en": "b"}}]},
        ]
        merged = ec.merge_sections(versions, ec.build_extra_sections(self._extra()))
        self.assertEqual(
            [s.get("version") or s["date"] for s in merged],
            ["4.38.0", "2026-04-15", "4.37.0"],
        )

    def test_titre_localise_dans_le_rendu(self):
        merged = ec.merge_sections([], ec.build_extra_sections(self._extra()))
        md_fr = ec.render_markdown(merged, "fr", "t", "T", "i", "")
        md_en = ec.render_markdown(merged, "en", "t", "T", "i", "")
        self.assertIn("## 2026-04-15 — Bases de données managées", md_fr)
        self.assertIn("## 2026-04-15 — Managed databases", md_en)
        # DE n'a pas de titre traduit → repli sur l'anglais, jamais d'absence
        md_de = ec.render_markdown(merged, "de", "t", "T", "i", "")
        self.assertIn("## 2026-04-15 — Managed databases", md_de)


class FooterTest(unittest.TestCase):
    def test_bornes_calculees_et_non_codees_en_dur(self):
        """Le pied de page publié annonçait « v1.0 à v3.37.5 » alors que la
        dernière version antérieure à v4.0 est v3.38.1."""
        dropped = [
            {"version": "1.0", "date": "2019-02-07", "entries": []},
            {"version": "3.38.1", "date": "2024-10-07", "entries": []},
        ]
        tpl = next(o[5] for o in ec.OUTPUTS if o[0] == "fr")
        footer = ec.build_footer(tpl, "fr", dropped, "4.0.0")
        self.assertIn("v1.0 à v3.38.1", footer)
        self.assertIn("de février 2019 à octobre 2024", footer)
        self.assertNotIn("3.37.5", footer)

    def test_pas_de_pied_de_page_sans_version_ecartee(self):
        tpl = next(o[5] for o in ec.OUTPUTS if o[0] == "fr")
        self.assertEqual(ec.build_footer(tpl, "fr", [], "4.0.0"), "")


class VersionBoundsTest(unittest.TestCase):
    def test_tri_semver_et_non_lexicographique(self):
        self.assertLess(ec.version_key("4.9.0"), ec.version_key("4.10.0"))
        self.assertLess(ec.version_key("4.38.0"), ec.version_key("4.38.1"))

    def test_plafond_retient_les_versions_non_deployees(self):
        """MAX_VERSION protège contre l'annonce d'une fonctionnalité que le
        client ne voit pas encore en production."""
        self.assertIsNotNone(ec.MAX_VERSION)
        self.assertGreater(ec.version_key(ec.MAX_VERSION), ec.version_key(ec.MIN_VERSION))


class SousTitreRedondantTest(unittest.TestCase):
    """Une section datée « ## 2026-05-23 — Serveur MCP de la Console » suivie de
    « ### Serveur MCP de la Console » répétait le même nom deux fois."""

    def _rendu(self, titre, tag, lang="fr"):
        extra = {"sections": [{
            "date": "2026-05-23",
            "title": {"fr": titre, "en": titre},
            "items": [{"tag": tag, "fr": "x", "en": "x"}],
        }]}
        merged = ec.merge_sections([], ec.build_extra_sections(extra))
        return ec.render_markdown(merged, lang, "t", "T", "i", "")

    def test_sous_titre_omis_si_identique_au_titre(self):
        md = self._rendu("Serveur MCP de la Console", "MCP")
        self.assertIn("## 2026-05-23 — Serveur MCP de la Console", md)
        self.assertNotIn("### Serveur MCP de la Console", md)

    def test_sous_titre_conserve_si_different(self):
        """Le sous-titre porte le lien vers la page produit : on ne le retire
        que s'il est strictement redondant."""
        md = self._rendu("Bases de données managées (Preview)", "MDB")
        self.assertIn("### [MariaDB Managé](/managed_mariadb)", md)

    def test_sous_titre_conserve_dans_une_section_de_version(self):
        md = ec.render_markdown(
            [{"kind": "version", "version": "4.47.0", "date": "2026-07-30",
              "entries": [{"tag": "GEN", "texts": {"fr": "x", "en": "x"}}]}],
            "fr", "t", "T", "i", "")
        self.assertIn("### [Console](/console)", md)


class LiensDocumentationTest(unittest.TestCase):
    """
    Tous les liens produits de la page publiée étaient en 404 depuis sa création :
    Docusaurus sert docs/console/console.md à « /console » et non
    « /console/console » (convention d'index de dossier). La CI ne le voyait pas,
    onBrokenLinks étant réglé sur « log ».
    """

    def test_index_de_dossier_resolu_par_le_chemin_court(self):
        cible = ec.resolve_doc("/console")
        self.assertIsNotNone(cible)
        self.assertEqual(cible.name, "console.md")

    def test_page_simple_resolue(self):
        cible = ec.resolve_doc("/console/orders")
        self.assertIsNotNone(cible)
        self.assertEqual(cible.name, "orders.md")

    def test_url_inexistante_non_resolue(self):
        self.assertIsNone(ec.resolve_doc("/produit/inexistant"))

    def test_chemin_redondant_fait_echouer(self):
        faux = {"GEN": ({"fr": "Console"}, "/console/console")}
        with self.assertRaises(SystemExit) as ctx:
            ec.validate_links(faux)
        self.assertEqual(ctx.exception.code, 1)

    def test_url_inexistante_fait_echouer(self):
        faux = {"X": ({"fr": "X"}, "/nexiste/pas")}
        with self.assertRaises(SystemExit):
            ec.validate_links(faux)

    def test_tous_les_liens_de_tag_map_sont_valides(self):
        ec.validate_links()


class OrdreChronologiqueTest(unittest.TestCase):
    def _versions(self):
        return [
            {"version": "4.41.0", "date": "2026-06-08", "entries": [
                {"tag": "GEN", "texts": {"fr": "a", "en": "a"}}]},
            {"version": "4.40.2", "date": "2026-06-04", "entries": [
                {"tag": "GEN", "texts": {"fr": "b", "en": "b"}}]},
            {"version": "4.39.2", "date": "2026-05-22", "entries": [
                {"tag": "GEN", "texts": {"fr": "c", "en": "c"}}]},
        ]

    def _extras(self, *dates):
        return ec.build_extra_sections({"sections": [
            {"date": d, "title": {"fr": f"J{i}", "en": f"M{i}"},
             "items": [{"tag": "MCP", "fr": "x", "en": "x"}]}
            for i, d in enumerate(dates)
        ]})

    def test_jalons_au_meme_point_d_insertion_restent_decroissants(self):
        """Deux jalons entre les deux mêmes versions sortaient en ordre croissant."""
        merged = ec.merge_sections(self._versions(), self._extras("2026-06-05", "2026-06-06"))
        self.assertEqual(
            [s.get("version") or s["date"] for s in merged],
            ["4.41.0", "2026-06-06", "2026-06-05", "4.40.2", "4.39.2"],
        )

    def test_page_entierement_decroissante(self):
        merged = ec.merge_sections(
            self._versions(),
            self._extras("2026-06-06", "2026-06-05", "2026-05-25", "2026-05-23"),
        )
        dates = [s["date"] for s in merged]
        self.assertEqual(dates, sorted(dates, reverse=True))

    def test_jalon_plus_recent_que_toute_version_passe_en_tete(self):
        merged = ec.merge_sections(self._versions(), self._extras("2026-08-01"))
        self.assertEqual(merged[0]["date"], "2026-08-01")

    def test_jalon_plus_ancien_que_toute_version_passe_en_queue(self):
        merged = ec.merge_sections(self._versions(), self._extras("2025-01-01"))
        self.assertEqual(merged[-1]["date"], "2025-01-01")


if __name__ == "__main__":
    unittest.main(verbosity=2)
