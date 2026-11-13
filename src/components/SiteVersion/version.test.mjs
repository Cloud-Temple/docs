import test from 'node:test';
import assert from 'node:assert/strict';
import {commitUrl, parseVersion, versionFileUrl, versionLabel} from './version.ts';

test('version.json est lu à la racine du site quelle que soit la langue', () => {
  assert.equal(versionFileUrl('/', 'fr', 'fr'), '/version.json');
  for (const locale of ['en', 'de', 'es', 'it']) assert.equal(versionFileUrl(`/${locale}/`, locale, 'fr'), '/version.json');
  // Site publié sous un sous-chemin (ancien GitHub Pages : /docs/).
  assert.equal(versionFileUrl('/docs/en/', 'en', 'fr'), '/docs/version.json');
  assert.equal(versionFileUrl('/docs/', 'fr', 'fr'), '/docs/version.json');
  // Chemin de langue personnalisé dans la configuration i18n.
  assert.equal(versionFileUrl('/english/', 'en', 'fr', 'english'), '/version.json');
});

const sha = 'bd943aa4' + '0'.repeat(32);
const valid = {schemaVersion: 1, version: '2026.11.13', commit: sha, shortCommit: 'bd943aa',
  commitDate: '2026-11-13T10:00:00+01:00', environment: 'production', ref: 'production'};

test('une version valide est affichée avec un lien vers son commit', () => {
  const info = parseVersion(valid);
  assert.equal(versionLabel(info), '2026.11.13 · bd943aa');
  assert.equal(commitUrl(info), `https://github.com/Cloud-Temple/docs/commit/${sha}`);
});

test('la recette est toujours signalée comme telle', () => {
  assert.equal(versionLabel(parseVersion({...valid, environment: 'staging'})), '2026.11.13 · bd943aa · staging');
});

test('un contenu inattendu est rejeté plutôt qu\'affiché', () => {
  for (const changed of [
    {schemaVersion: 2},
    {version: '<img src=x onerror=alert(1)>'},
    {version: '2026-11-13'},
    {commit: 'BD943AA4' + '0'.repeat(32)},
    {commit: sha + '"><script>'},
    {shortCommit: 'abc1234'},
    {shortCommit: 'bd94'},
    {environment: 'dev'},
  ]) assert.equal(parseVersion({...valid, ...changed}), null, JSON.stringify(changed));
  for (const data of [null, 'texte', 42, []]) assert.equal(parseVersion(data), null);
});
