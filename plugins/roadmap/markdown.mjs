const statusIds = new Set(['acknowledged', 'prioritized', 'in_progress', 'partial', 'done']);

// The authoring contract deliberately uses JSON fences: the official translator
// preserves them byte for byte, while translating headings, prose and tables.
export function parseRoadmap(markdown, source = 'roadmap.md') {
  const ids = new Set();
  const items = markdown.split(/^## (RM-\d+)\s*$/m).slice(1);
  if (!items.length || items.length % 2 !== 0) throw new Error(`${source}: no roadmap entries`);
  const result = [];
  for (let index = 0; index < items.length; index += 2) {
    const id = items[index];
    const section = items[index + 1];
    const match = section.match(/^\s*```json\s*\n([\s\S]*?)\n```\s*\n### ([^\n]+)\n([\s\S]*)$/);
    if (!match || ids.has(id)) throw new Error(`${source}: invalid or duplicate entry ${id}`);
    ids.add(id);
    const metadata = JSON.parse(match[1]);
    if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) throw new Error(`${source}: invalid metadata for ${id}`);
    const allowed = new Set(['product', 'category', 'status', 'quarter', 'tags', 'assignees', 'createdAt', 'updatedAt', 'priority', 'type', 'startDate', 'releaseDate', 'changelog', 'votes']);
    for (const key of Object.keys(metadata)) if (!allowed.has(key)) throw new Error(`${source}: unknown field ${key} in ${id}`);
    for (const key of ['product', 'category']) if (typeof metadata[key] !== 'string' || !metadata[key].trim()) throw new Error(`${source}: missing ${key} in ${id}`);
    if (!statusIds.has(metadata.status)) throw new Error(`${source}: invalid status in ${id}`);
    for (const key of ['tags', 'assignees']) {
      if (metadata[key] !== undefined && (!Array.isArray(metadata[key]) || !metadata[key].every(value => typeof value === 'string'))) throw new Error(`${source}: invalid ${key} in ${id}`);
    }
    for (const key of ['quarter', 'priority', 'type', 'changelog']) if (metadata[key] !== undefined && typeof metadata[key] !== 'string') throw new Error(`${source}: invalid ${key} in ${id}`);
    if (metadata.quarter && !/^\d{4} - Q[1-4]$/.test(metadata.quarter)) throw new Error(`${source}: invalid quarter in ${id}`);
    for (const key of ['createdAt', 'updatedAt', 'startDate', 'releaseDate']) if (metadata[key] !== undefined && (typeof metadata[key] !== 'string' || !Number.isFinite(Date.parse(metadata[key])))) throw new Error(`${source}: invalid date ${key} in ${id}`);
    if (metadata.votes !== undefined && (!Number.isInteger(metadata.votes) || metadata.votes < 0)) throw new Error(`${source}: invalid votes in ${id}`);
    const body = match[3].trim();
    if (!body) throw new Error(`${source}: missing description in ${id}`);
    // Brief plain Markdown descriptions: paragraphs and optional bullet points.
    const paragraphs = body.split(/\n\s*\n/).filter(block => !block.startsWith('- '));
    const points = body.split('\n').filter(line => line.startsWith('- ')).map(line => line.slice(2));
    result.push({...metadata, assignees: metadata.assignees ?? [], id, title: match[2].trim(), description: paragraphs.join('\n\n'), points});
  }
  return result;
}

export function parseLabels(markdown, source = 'interface.md') {
  const labels = {};
  for (const line of markdown.split('\n')) {
    const match = line.match(/^\|\s*`([^`]+)`\s*\|\s*(.*?)\s*\|\s*$/);
    if (!match) continue;
    if (labels[match[1]] !== undefined || !match[2]) throw new Error(`${source}: invalid label ${match[1]}`);
    labels[match[1]] = match[2];
  }
  if (!Object.keys(labels).length) throw new Error(`${source}: no labels found`);
  return labels;
}

