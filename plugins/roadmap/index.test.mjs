import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, mkdtemp, mkdir, writeFile, rm} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {createHash} from 'node:crypto';
import roadmapPlugin, {parseRoadmap, parseLabels} from './index.mjs';
import {loadProducts, serializeRoadmap} from './products.mjs';
import {exportRoadmap} from './export.mjs';

test('public export preserves YAML and publishes the same 79 IDs in five verified locales', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'roadmap-export-'));
  try {
    const manifest = await exportRoadmap(directory);
    assert.equal(manifest.products.length, 27);
    assert.deepEqual(Object.keys(manifest.locales).sort(), ['de', 'en', 'es', 'fr', 'it']);
    let expectedIds;
    for (const entry of Object.values(manifest.locales)) {
      const content = await readFile(path.join(directory, entry.file), 'utf8');
      assert.equal(createHash('sha256').update(content).digest('hex'), entry.sha256);
      const {items, labels} = JSON.parse(content);
      assert.equal(items.length, 79);
      assert.ok(labels['page.title']);
      const ids = items.map(item => item.id).sort();
      if (expectedIds) assert.deepEqual(ids, expectedIds);
      expectedIds = ids;
    }
    for (const entry of manifest.products) {
      const exported = await readFile(path.join(directory, entry.file));
      const original = await readFile(new URL(`../../roadmap/${path.basename(entry.file)}`, import.meta.url));
      assert.deepEqual(exported, original);
      assert.equal(createHash('sha256').update(exported).digest('hex'), entry.sha256);
    }
  } finally {
    await rm(directory, {recursive: true, force: true});
  }
});

const productYaml = `product: IaaS VMware
features:
  - id: RM-001
    category: Compute
    status: prioritized
    title: Sauvegardes
    description: Une description courte.
    points:
      - Premier point
      - Second point
`;

const example = `# Roadmap

## RM-001

\`\`\`json
{"status":"planned","product":"IaaS VMware","category":"Compute"}
\`\`\`

### Sauvegardes

Une description courte.

- Premier point
- Second point
`.replace('"planned"', '"prioritized"');

test('Markdown paragraphs and bullet points populate the card details', () => {
  const [item] = parseRoadmap(example);
  assert.equal(item.id, 'RM-001');
  assert.equal(item.description, 'Une description courte.');
  assert.deepEqual(item.points, ['Premier point', 'Second point']);
});

test('duplicate identifiers, unknown statuses and invalid dates fail the build', () => {
  assert.throws(() => parseRoadmap(example + example), /duplicate/);
  assert.throws(() => parseRoadmap(example.replace('prioritized', 'invented')), /invalid status/);
  assert.throws(() => parseRoadmap(example.replace('"status":', '"startDate":"yesterday","status":')), /invalid date/);
});

test('interface keys must be unique and nonempty', () => {
  assert.deepEqual(parseLabels('| `filters.title` | Filtres |'), {'filters.title': 'Filtres'});
  assert.throws(() => parseLabels('| `filters.title` | Filtres |\n| `filters.title` | Autre |'), /invalid label/);
});

test('translated metadata or missing interface labels fail the locale build', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'roadmap-test-'));
  try {
    const source = path.join(root, 'docs/roadmap');
    const target = path.join(root, 'i18n/en/docusaurus-plugin-content-docs/current/roadmap');
    await mkdir(source, {recursive: true});
    await mkdir(target, {recursive: true});
    await mkdir(path.join(root, 'roadmap'));
    await writeFile(path.join(root, 'roadmap/iaas-vmware.yaml'), productYaml);
    const canonical = serializeRoadmap(await loadProducts(root));
    for (const directory of [source, target]) {
      await writeFile(path.join(directory, 'roadmap.md'), canonical);
      await writeFile(path.join(directory, 'interface.md'), '| `filters.title` | Filtres |');
    }
    const plugin = roadmapPlugin({siteDir: root, i18n: {currentLocale: 'en', defaultLocale: 'fr'}});
    await writeFile(path.join(target, 'roadmap.md'), canonical.replace('prioritized', 'done'));
    await assert.rejects(plugin.loadContent(), /metadata differ/);
    await writeFile(path.join(target, 'roadmap.md'), canonical);
    await writeFile(path.join(target, 'interface.md'), '| `other.key` | Other |');
    await assert.rejects(plugin.loadContent(), /interface keys/);
    // A text-only source edit must not reuse an outdated translated title.
    const labels = '| `filters.title` | Filtres |';
    await writeFile(path.join(target, 'interface.md'), labels);
    await mkdir(path.join(root, 'scripts/translate_py'), {recursive: true});
    const hash = value => createHash('sha256').update(value).digest('hex');
    await writeFile(path.join(root, 'scripts/translate_py/translation-meta.json'), JSON.stringify({files: {
      'roadmap/roadmap.md': {en: hash(canonical)},
      'roadmap/interface.md': {en: hash(labels)},
    }}));
    await plugin.loadContent();
    await writeFile(path.join(root, 'roadmap/iaas-vmware.yaml'), productYaml.replace('title: Sauvegardes', 'title: Nouveau titre'));
    await assert.rejects(plugin.loadContent(), /YAML changed/);
    await writeFile(path.join(source, 'roadmap.md'), serializeRoadmap(await loadProducts(root)));
    await assert.rejects(plugin.loadContent(), /stale translation/);
  } finally {
    await rm(root, {recursive: true, force: true});
  }
});

test('product YAML is read and duplicate IDs across products are rejected', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'roadmap-yaml-test-'));
  try {
    await mkdir(path.join(root, 'roadmap'));
    await writeFile(path.join(root, 'roadmap/iaas-vmware.yaml'), productYaml);
    const [item] = await loadProducts(root);
    assert.equal(item.product, 'IaaS VMware');
    assert.equal(item.id, 'RM-001');
    assert.deepEqual(item.points, ['Premier point', 'Second point']);
    await writeFile(path.join(root, 'roadmap/other.yaml'), productYaml.replace('IaaS VMware', 'SIEM'));
    await assert.rejects(loadProducts(root), /duplicate Internal ID/);
    await rm(path.join(root, 'roadmap/other.yaml'));
    await writeFile(path.join(root, 'roadmap/iaas-vmware.yaml'), productYaml.replace('prioritized', 'invented'));
    await assert.rejects(loadProducts(root), /invalid status/);
  } finally {
    await rm(root, {recursive: true, force: true});
  }
});

test('the YAML migration preserves the translation intermediate byte for byte', async () => {
  const source = await readFile('docs/roadmap/roadmap.md', 'utf8');
  assert.equal(serializeRoadmap(await loadProducts(process.cwd())), source);
});

test('all five real locales have the same complete set of stable identifiers', async () => {
  const source = parseRoadmap(await readFile('docs/roadmap/roadmap.md', 'utf8'));
  assert.equal(source.length, 79);
  for (const currentLocale of ['fr', 'en', 'de', 'es', 'it']) {
    const plugin = roadmapPlugin({siteDir: process.cwd(), i18n: {currentLocale, defaultLocale: 'fr'}});
    const data = await plugin.loadContent();
    assert.deepEqual(data.items.map(item => item.id), source.map(item => item.id));
    assert.ok(data.labels['page.heading']);
  }
});
