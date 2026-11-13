import {readFile, writeFile, mkdir} from 'node:fs/promises';
import path from 'node:path';
import {loadProducts, serializeRoadmap} from './products.mjs';

const args = process.argv.slice(2);
if (args.some(arg => arg !== '--check')) throw new Error('Usage: node plugins/roadmap/generate.mjs [--check]');
const siteDir = process.cwd();
const output = path.join(siteDir, 'docs/roadmap/roadmap.md');
const items = await loadProducts(siteDir);
const content = serializeRoadmap(items);
if (args.includes('--check')) {
  if (await readFile(output, 'utf8') !== content) throw new Error('Generated roadmap is stale. Run yarn generate:roadmap.');
  process.stdout.write(`Roadmap is current: ${items.length} features.\n`);
} else {
  await mkdir(path.dirname(output), {recursive: true});
  await writeFile(output, content);
  process.stdout.write(`Generated ${items.length} features from product YAML files.\n`);
}
