"""Tests de write_version.py (python3 -m unittest)."""
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).parent))
import write_version as wv  # noqa: E402

SHA = 'bd943aa4' + '0' * 32


class VersionInfoTests(unittest.TestCase):
    def test_version_uses_the_paris_calendar_day_of_the_commit(self):
        # 23 h 30 UTC le 13 = 0 h 30 à Paris le 14 : la version suit le jour à Paris.
        info = wv.version_info(SHA, '2026-11-13T23:30:00+00:00', 'staging', 'staging')
        self.assertEqual(info['version'], '2026.11.14')
        self.assertEqual(info['shortCommit'], 'bd943aa')
        self.assertEqual(info['commitDate'], '2026-11-14T00:30:00+01:00')

    def test_same_commit_always_gives_the_same_file(self):
        first = wv.version_info(SHA, '2026-11-13T10:00:00+01:00', 'production', 'production')
        second = wv.version_info(SHA, '2026-11-13T09:00:00+00:00', 'production', 'production')
        self.assertEqual(first, second)

    def test_invalid_inputs_are_refused(self):
        for commit, date, env in [('bd943aa', '2026-11-13T10:00:00+01:00', 'staging'),
                                  ('<script>' + '0' * 32, '2026-11-13T10:00:00+01:00', 'staging'),
                                  (SHA, '2026-11-13T10:00:00', 'staging'),
                                  (SHA, '2026-11-13T10:00:00+01:00', 'dev')]:
            with self.assertRaises(ValueError):
                wv.version_info(commit, date, env, 'x')

    def test_cli_writes_version_of_the_repository_head(self):
        with tempfile.TemporaryDirectory() as tmp:
            repo = Path(tmp)
            env = {'GIT_AUTHOR_DATE': '2026-11-13T10:00:00+01:00', 'GIT_COMMITTER_DATE': '2026-11-13T10:00:00+01:00',
                   'GIT_AUTHOR_NAME': 't', 'GIT_AUTHOR_EMAIL': 't@t', 'GIT_COMMITTER_NAME': 't',
                   'GIT_COMMITTER_EMAIL': 't@t', 'PATH': '/usr/bin:/bin:/usr/local/bin:/opt/homebrew/bin'}
            subprocess.run(['git', 'init', '-q', str(repo)], check=True, env=env)
            subprocess.run(['git', '-C', str(repo), 'commit', '-q', '--allow-empty', '-m', 'x'], check=True, env=env)
            sha = subprocess.check_output(['git', '-C', str(repo), 'rev-parse', 'HEAD'], text=True).strip()
            (repo / 'build').mkdir()
            wv.main(['--environment', 'staging', '--ref', 'staging', '--output', str(repo / 'build/version.json'),
                     '--repo', str(repo)])
            info = json.loads((repo / 'build/version.json').read_text())
        self.assertEqual((info['commit'], info['version'], info['environment']), (sha, '2026.11.13', 'staging'))

    def test_cli_refuses_a_missing_build_directory(self):
        with self.assertRaises(SystemExit):
            wv.main(['--environment', 'staging', '--ref', 'x', '--output', '/nonexistent/build/version.json'])


if __name__ == '__main__':
    unittest.main()
