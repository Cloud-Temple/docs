import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';

import {parseRoadmap, parseLabels} from './markdown.mjs';
import {loadProducts, serializeRoadmap} from './products.mjs';
export {parseRoadmap, parseLabels} from './markdown.mjs';

export default function roadmapPlugin(context) {
  const {siteDir, i18n} = context;
  const sourceDir = path.join(siteDir, 'docs/roadmap');
  const localeDir = i18n.currentLocale === i18n.defaultLocale ? sourceDir
    : path.join(siteDir, 'i18n', i18n.currentLocale, 'docusaurus-plugin-content-docs/current/roadmap');
  return {
    name: 'roadmap',
    getPathsToWatch: () => [path.join(sourceDir, '*.md'), path.join(localeDir, '*.md'), path.join(siteDir, 'roadmap/*.yaml')],
    async loadContent() {
      const read = (directory, file) => readFile(path.join(directory, file), 'utf8');
      const [sourceItems, sourceLabels, localizedItems, localizedLabels] = await Promise.all([
        read(sourceDir, 'roadmap.md'), read(sourceDir, 'interface.md'),
        read(localeDir, 'roadmap.md'), read(localeDir, 'interface.md'),
      ]);
      const items = parseRoadmap(localizedItems, localeDir);
      const labels = parseLabels(localizedLabels, localeDir);
      const originalItems = await loadProducts(siteDir);
      if (serializeRoadmap(originalItems) !== sourceItems) throw new Error('Roadmap YAML changed: run yarn generate:roadmap, then the official translation script');
      const originalLabels = parseLabels(sourceLabels, sourceDir);
      const metadata = item => Object.fromEntries(Object.entries(item).filter(([key]) => !['title', 'description', 'points'].includes(key)).sort(([a], [b]) => a.localeCompare(b)));
      if (JSON.stringify(originalItems.map(metadata)) !== JSON.stringify(items.map(metadata))) throw new Error(`Roadmap ${i18n.currentLocale}: translated IDs or metadata differ from French source`);
      if (Object.keys(originalLabels).sort().join('|') !== Object.keys(labels).sort().join('|')) throw new Error(`Roadmap ${i18n.currentLocale}: missing or changed interface keys`);
      if (i18n.currentLocale !== i18n.defaultLocale) {
        const tracking = JSON.parse(await readFile(path.join(siteDir, 'scripts/translate_py/translation-meta.json'), 'utf8'));
        for (const [file, content] of [['roadmap/roadmap.md', sourceItems], ['roadmap/interface.md', sourceLabels]]) {
          const hash = createHash('sha256').update(content).digest('hex');
          if (tracking.files?.[file]?.[i18n.currentLocale] !== hash) throw new Error(`Roadmap ${i18n.currentLocale}: stale translation for ${file}; run the official translation script`);
        }
      }
      return {items: i18n.currentLocale === i18n.defaultLocale ? originalItems : items, labels};
    },
    async contentLoaded({content, actions}) { actions.setGlobalData(content); },
  };
}
