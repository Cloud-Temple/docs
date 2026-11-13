import {createHash} from 'node:crypto';
import {mkdir, readFile, readdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import roadmapPlugin from './index.mjs';

const siteDir = fileURLToPath(new URL('../../', import.meta.url));
const locales = ['fr', 'en', 'es', 'it', 'de'];
const digest = content => createHash('sha256').update(content).digest('hex');

// Export only the validated public projection, never the repository or its config.
export async function exportRoadmap(outputDir) {
  const artifacts = new Map();
  const localeEntries = {};
  for (const locale of locales) {
    const plugin = roadmapPlugin({siteDir, i18n: {currentLocale: locale, defaultLocale: 'fr'}});
    const content = await plugin.loadContent();
    const file = `${locale}.json`;
    artifacts.set(file, JSON.stringify(content) + '\n');
    localeEntries[locale] = {file, count: content.items.length};
  }
  const productFiles = (await readdir(path.join(siteDir, 'roadmap')))
    .filter(file => file.endsWith('.yaml')).sort();
  for (const file of productFiles) {
    artifacts.set(`products/${file}`, await readFile(path.join(siteDir, 'roadmap', file), 'utf8'));
  }
  const files = [...artifacts].map(([file, content]) => ({file, sha256: digest(content), bytes: Buffer.byteLength(content)}));
  const release = digest(JSON.stringify(files));
  const prefix = `releases/${release}`;
  for (const [file, content] of artifacts) {
    const target = path.join(outputDir, prefix, file);
    await mkdir(path.dirname(target), {recursive: true});
    await writeFile(target, content);
  }
  const manifest = {
    schemaVersion: 1, release,
    locales: Object.fromEntries(Object.entries(localeEntries).map(([locale, entry]) =>
      [locale, {...entry, file: `${prefix}/${entry.file}`, sha256: files.find(file => file.file === entry.file).sha256}])),
    products: files.filter(file => file.file.startsWith('products/')).map(file => ({...file, file: `${prefix}/${file.file}`})),
  };
  // Upload this pointer last, after every immutable release object has been verified.
  await writeFile(path.join(outputDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  return manifest;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const outputDir = process.argv[2];
  if (!outputDir || !path.isAbsolute(outputDir)) throw new Error('Usage: node plugins/roadmap/export.mjs /absolute/output/directory');
  const manifest = await exportRoadmap(outputDir);
  console.log(`Prepared ${manifest.products.length} product YAML files and ${Object.keys(manifest.locales).length} validated locales (${manifest.locales.fr.count} features). Release: ${manifest.release}`);
}
