"""Rates links are localized by the official pipeline, without API requests."""
import sys
import unittest
from pathlib import Path
from unittest.mock import AsyncMock

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / 'scripts' / 'translate_py'))
from translator import CloudTempleTranslator, localize_public_rates_links
from config import TranslationConfig
from models import BlockTranslationResult
from file_manager import FileManager
from tempfile import TemporaryDirectory

FR = 'https://www.cloud-temple.com/nos-tarifs-publics/'
EN = 'https://www.cloud-temple.com/en/our-public-rates/'


class PublicRatesTests(unittest.IsolatedAsyncioTestCase):
    async def test_generated_file_uses_en_link_and_keeps_code_indentation(self):
        client = CloudTempleTranslator(TranslationConfig(api_key='synthetic-key'))
        client._translate_block = AsyncMock(return_value=BlockTranslationResult(
            original_text='source', translated_text=f'[Rates]({FR}) \n\n```python\n    value = 1 \n```', success=True))
        translated = await client.translate_content(
            f'[Tarifs]({FR})\n\n```python\n    value = 1\n```', 'en')
        with TemporaryDirectory() as folder:
            manager = FileManager(TranslationConfig(api_key='synthetic-key', doc_base_path=Path(folder)))
            output = Path(folder) / 'i18n/en/example.md'
            await manager.write_file_content(output, translated.translated_text)
            self.assertIn('[Rates]('+EN+')', output.read_text())
            self.assertIn('    value = 1\n', output.read_text())
            self.assertFalse(any(line.endswith((' ', '\t')) for line in output.read_text().splitlines()))

    async def test_single_and_multiple_blocks_are_localized_by_pipeline(self):
        for blocks in ([f'[Tarifs]({FR})'], [f'[Tarifs]({FR})', f'[Tarifs]({FR})']):
            client = CloudTempleTranslator(TranslationConfig(api_key='synthetic-key'))
            client.content_splitter.split_content = lambda _: blocks
            client._translate_block = AsyncMock(side_effect=[
                BlockTranslationResult(original_text=b, translated_text=f'[Rates]({FR})', success=True)
                for b in blocks
            ])
            result = await client.translate_content('\n\n'.join(blocks), 'en')
            self.assertTrue(result.success)
            self.assertNotIn(FR, result.translated_text)
            self.assertEqual(result.translated_text.count(EN), len(blocks))

    def test_other_locales_and_unrelated_urls_are_preserved(self):
        text = f'[Tarifs]({FR}) https://www.cloud-temple.com/produits/ {FR}annexe'
        for lang in ('fr', 'de', 'es', 'it'):
            self.assertEqual(localize_public_rates_links(text, lang), text)
        localized = localize_public_rates_links(text, 'en')
        self.assertIn('[Tarifs]('+EN+')', localized)
        self.assertIn('https://www.cloud-temple.com/produits/', localized)
        self.assertIn(FR+'annexe', localized)


class SectionPackingTests(unittest.TestCase):
    def test_adjacent_sections_are_packed_without_changing_source(self):
        from translator import ContentSplitter
        source = "# Title\n\n## One\n\nText one.\n\n## Two\n\nText two.\n"
        blocks = ContentSplitter(max_tokens=100).split_content(source)
        self.assertEqual(blocks, [source])

    def test_packing_obeys_limit_and_keeps_fenced_code_complete(self):
        from translator import ContentSplitter
        source = ("# Title\n\n" + "## Section\n\n" + "text " * 35 + "\n\n"
                  + "## Code\n\n```python\n# keep this heading inside code\nprint(1)\n```\n"
                  + "## End\n\n" + "last " * 30 + "\n")
        splitter = ContentSplitter(max_tokens=60)
        blocks = splitter.split_content(source)
        self.assertEqual("".join(blocks), source)
        self.assertGreater(len(blocks), 1)
        for block in blocks:
            self.assertLessEqual(splitter._count_tokens(block), 60)
            self.assertEqual(block.count("```") % 2, 0)


class CodePreservationTests(unittest.TestCase):
    def test_examples_and_delimiters_are_restored_without_changing_prose(self):
        from translator import preserve_fenced_code
        original = "Texte\n```python\nprint('bonjour')\n```\n~~~json\n{}\n~~~"
        translated = "Text\n```python\nprint('hello')\n```\n~~~json\n{\"wrong\": true}\n~~~"
        expected = original.replace("Texte", "Text", 1)
        self.assertEqual(preserve_fenced_code(original, translated), expected)

    def test_missing_code_block_is_rejected(self):
        from translator import preserve_fenced_code
        with self.assertRaises(ValueError):
            preserve_fenced_code("```python\nprint(1)\n```", "No code")


class FrontmatterTests(unittest.IsolatedAsyncioTestCase):
    async def test_leading_blank_lines_do_not_hide_frontmatter(self):
        with TemporaryDirectory() as folder:
            manager = FileManager(TranslationConfig(api_key='synthetic-key', doc_base_path=Path(folder)))
            output = Path(folder) / 'translated.md'
            await manager.write_file_content(output, "\n\n---\ntitle: Example\n---\n\nText")
            self.assertTrue(output.read_text().startswith("---\n"))


class MarkdownStructureTests(unittest.TestCase):
    def test_translated_labels_keep_original_heading_levels_and_destinations(self):
        from translator import preserve_markdown_structure
        original = "#### Souveraineté\n[guide](./api#utilisation)"
        translated = "### Sovereignty\n[guide](./api#wrong)"
        self.assertEqual(preserve_markdown_structure(original, translated),
                         "#### Sovereignty\n[guide](./api#utilisation)")

    def test_missing_headings_or_links_are_rejected(self):
        from translator import preserve_markdown_structure
        for original, translated in [("## Title", "Title"), ("[guide](./api)", "guide")]:
            with self.assertRaises(ValueError):
                preserve_markdown_structure(original, translated)


if __name__ == '__main__':
    unittest.main()
