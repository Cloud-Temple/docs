import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {loadRemoteRoadmap, validateRemoteData} from '../../src/components/Roadmap/remote.ts';

const payload = {items: [{id: 'RM-001', title: 'Feature', description: 'Description', product: 'IaaS VMware',
  category: 'Compute', status: 'prioritized', points: [], assignees: []}], labels: {'page.title': 'Roadmap', 'category.Compute': 'Calcul'}};
const baseUrl = 'https://example.com/roadmap-data/';
const release = 'a'.repeat(64);
const signal = new AbortController().signal;
function fixture(content = JSON.stringify(payload)) {
  return {schemaVersion: 1, release, locales: {fr: {file: `releases/${release}/fr.json`, count: 1,
    sha256: createHash('sha256').update(content).digest('hex')}}};
}

test('remote loading uses anonymous uncached requests and verifies the published locale', async () => {
  const calls = [];
  const request = async (url, options) => {
    calls.push({url, options});
    return Response.json(calls.length === 1 ? fixture() : payload);
  };
  assert.deepEqual(await loadRemoteRoadmap(baseUrl, 'fr', ['page.title'], signal, request), payload);
  assert.equal(calls[1].url, `${baseUrl}releases/${release}/fr.json`);
  for (const {options} of calls) {
    assert.equal(options.credentials, 'omit');
    assert.equal(options.cache, 'no-store');
    assert.equal(options.signal, signal);
  }
});

test('a relative data URL resolves against the page origin and keeps the HTTPS requirement', async () => {
  const calls = [];
  const request = async (url) => {
    calls.push(url);
    return Response.json(calls.length === 1 ? fixture() : payload);
  };
  const page = 'https://docs-ng.example.com/en/roadmap';
  assert.deepEqual(await loadRemoteRoadmap('/roadmap-data/', 'fr', ['page.title'], signal, request, page), payload);
  assert.deepEqual(calls, ['https://docs-ng.example.com/roadmap-data/manifest.json',
    `https://docs-ng.example.com/roadmap-data/releases/${release}/fr.json`]);
  await assert.rejects(loadRemoteRoadmap('/roadmap-data/', 'fr', [], signal, request, 'http://docs-ng.example.com/roadmap'), /HTTPS/);
  await assert.rejects(loadRemoteRoadmap('/roadmap-data/', 'fr', [], signal, request, undefined), TypeError);
});

test('remote loading rejects corrupted data and does not fall back to bundled cards', async () => {
  let calls = 0;
  const request = async () => Response.json(++calls === 1 ? fixture() : {...payload, items: []});
  await assert.rejects(loadRemoteRoadmap(baseUrl, 'fr', [], signal, request), /integrity/);
});

test('missing locales, changed paths and HTTP failures stop remote loading', async () => {
  await assert.rejects(loadRemoteRoadmap(baseUrl, 'de', [], signal, async () => Response.json(fixture())), /locale/);
  const manifest = fixture(); manifest.locales.fr.file = 'https://other.example/fr.json';
  await assert.rejects(loadRemoteRoadmap(baseUrl, 'fr', [], signal, async () => Response.json(manifest)), /locale/);
  await assert.rejects(loadRemoteRoadmap(baseUrl, 'fr', [], signal, async () => new Response('', {status: 403})), /HTTP 403/);
});

test('remote validation rejects duplicates, missing category labels and invalid feature metadata', () => {
  assert.throws(() => validateRemoteData({...payload, items: [...payload.items, ...payload.items]}, 2, []), /Duplicate/);
  assert.throws(() => validateRemoteData({...payload, labels: {'page.title': 'Roadmap'}}, 1, []), /labels/);
  assert.throws(() => validateRemoteData({...payload, items: [{...payload.items[0], status: 'unknown'}]}, 1, []), /payload/);
  assert.throws(() => validateRemoteData({...payload, items: [{...payload.items[0], votes: -1}]}, 1, []), /payload/);
});
