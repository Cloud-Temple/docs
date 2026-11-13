import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
import yaml from 'js-yaml';
import {parseRoadmap} from './markdown.mjs';

const heading = '# Roadmap produit\n\nLes échéances sont prévisionnelles. Les identifiants de cet aperçu sont provisoires.';

export function serializeRoadmap(items) {
  const sections = items.map(({id, title, description, points = [], ...metadata}) =>
    `## ${id}\n\n\`\`\`json\n${JSON.stringify(metadata, null, 2)}\n\`\`\`\n\n### ${title}\n\n${description}` +
    (points.length ? '\n\n' + points.map(point => `- ${point}`).join('\n') : ''));
  return [heading, ...sections].join('\n\n') + '\n';
}

export async function loadProducts(siteDir) {
  const directory = path.join(siteDir, 'roadmap');
  const files = (await readdir(directory)).filter(file => file.endsWith('.yaml')).sort();
  if (!files.length) throw new Error('roadmap/: no product YAML files');
  const products = new Set();
  const ids = new Set();
  const entries = [];
  for (const file of files) {
    const source = path.join(directory, file);
    const document = yaml.load(await readFile(source, 'utf8'), {schema: yaml.JSON_SCHEMA});
    if (!document || typeof document !== 'object' || Array.isArray(document) ||
      Object.keys(document).some(key => !['product', 'features'].includes(key)) ||
      typeof document.product !== 'string' || !document.product.trim() ||
      !Array.isArray(document.features) || document.features.length === 0) {
      throw new Error(`${source}: expected product and a nonempty features list`);
    }
    if (products.has(document.product)) throw new Error(`${source}: duplicate product ${document.product}`);
    products.add(document.product);
    for (const feature of document.features) {
      if (!feature || typeof feature !== 'object' || Array.isArray(feature)) throw new Error(`${source}: invalid feature`);
      const {id, title, description, points = [], ...metadata} = feature;
      if (typeof id !== 'string' || !/^RM-\d+$/.test(id) || ids.has(id)) throw new Error(`${source}: invalid or duplicate Internal ID ${id}`);
      if (typeof title !== 'string' || !title.trim() || /[\r\n]/.test(title) ||
        typeof description !== 'string' || !description.trim() ||
        !Array.isArray(points) || !points.every(point => typeof point === 'string' && point.trim() && !/[\r\n]/.test(point)) ||
        'product' in metadata) throw new Error(`${source}: invalid text fields for ${id}`);
      ids.add(id);
      entries.push({product: document.product, ...metadata, id, title, description: description.trim(), points});
    }
  }
  entries.sort((a, b) => a.id.localeCompare(b.id, 'en', {numeric: true}));
  // Reuse the same metadata contract as the official translation intermediate.
  return parseRoadmap(serializeRoadmap(entries), directory);
}
