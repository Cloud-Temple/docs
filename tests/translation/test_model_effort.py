"""Configuration et requête HTTP du moteur de traduction, sans accès réseau."""
import sys
import unittest
from pathlib import Path
from unittest.mock import AsyncMock, MagicMock, patch

from click.testing import CliRunner

sys.path.insert(0, str(Path(__file__).resolve().parents[2] / 'scripts' / 'translate_py'))
import config
import translate
from translator import CloudTempleTranslator


class ConfigurationTests(unittest.TestCase):
    def test_defaults_and_environment_then_cli_precedence(self):
        with patch.dict('os.environ', {}, clear=True), patch.object(config, 'load_dotenv'):
            defaults = config.load_config()
            self.assertEqual((defaults.model, defaults.reasoning_effort), ('qwen3.8:27b', 'low'))
        with patch.dict('os.environ', {'TRANSLATION_MODEL': 'model-env',
                                     'TRANSLATION_REASONING_EFFORT': 'medium'}, clear=True), \
                patch.object(config, 'load_dotenv'):
            env = config.load_config()
            self.assertEqual((env.model, env.reasoning_effort), ('model-env', 'medium'))
            cli = config.load_config(model='model-cli', reasoning_effort='low')
            self.assertEqual((cli.model, cli.reasoning_effort), ('model-cli', 'low'))

    def test_cli_forwards_effort(self):
        with patch.object(translate, '_async_main', new_callable=AsyncMock) as run:
            result = CliRunner().invoke(translate.main, ['--model', 'qwen3.8:27b',
                                                        '--reasoning-effort', 'low', '--test-api'])
            self.assertEqual(result.exit_code, 0, result.output)
            self.assertEqual(run.call_args.kwargs['reasoning_effort'], 'low')
            self.assertEqual(run.call_args.kwargs['model_name'], 'qwen3.8:27b')


class RequestTests(unittest.IsolatedAsyncioTestCase):
    async def test_request_includes_model_and_effort(self):
        for effort in ['low', 'medium']:
            with self.subTest(effort=effort):
                client = CloudTempleTranslator(config.TranslationConfig(
                    api_key='synthetic-key', reasoning_effort=effort))
                response = MagicMock()
                response.status = 200
                response.json = AsyncMock(return_value={
                    'model': 'qwen3.8:27b',
                    'choices': [{'message': {'content': 'Translated text'}}],
                    'usage': {'prompt_tokens': 20, 'completion_tokens': 5, 'total_tokens': 25},
                })
                session = MagicMock()
                session.post.return_value.__aenter__ = AsyncMock(return_value=response)
                session.post.return_value.__aexit__ = AsyncMock(return_value=False)
                client._session = session
                result = await client._call_api('Texte', 'English')
                self.assertTrue(result.success)
                payload = session.post.call_args.kwargs['json']
                self.assertEqual(payload['model'], 'qwen3.8:27b')
                self.assertEqual(payload['reasoning_effort'], effort)
                self.assertEqual(session.post.call_args.args[0], client.config.api_url)
                self.assertEqual(result.content, 'Translated text')


if __name__ == '__main__':
    unittest.main()
