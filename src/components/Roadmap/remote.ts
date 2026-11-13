import type {RoadmapData, RoadmapItem} from './data';

const statuses = new Set(['acknowledged', 'prioritized', 'in_progress', 'partial', 'done']);
const maxResponseLength = 2_000_000;
type JsonObject = Record<string, unknown>;
function object(value: unknown): value is JsonObject {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function text(value: unknown): value is string {return typeof value === 'string' && value.trim().length > 0;}
function strings(value: unknown): value is string[] {return Array.isArray(value) && value.every(text);}
function item(value: unknown): value is RoadmapItem {
  if (!object(value) || !text(value.id) || !/^RM-\d+$/.test(value.id) ||
      !['title', 'description', 'category', 'product'].every(key => text(value[key])) ||
      typeof value.status !== 'string' || !statuses.has(value.status) ||
      !strings(value.points) || !strings(value.assignees)) return false;
  if (value.tags !== undefined && !strings(value.tags)) return false;
  if (value.quarter !== undefined && (typeof value.quarter !== 'string' || !/^\d{4} - Q[1-4]$/.test(value.quarter))) return false;
  for (const key of ['priority', 'type', 'changelog']) if (value[key] !== undefined && typeof value[key] !== 'string') return false;
  for (const key of ['createdAt', 'updatedAt', 'startDate', 'releaseDate']) {
    if (value[key] !== undefined && (typeof value[key] !== 'string' || !Number.isFinite(Date.parse(value[key])))) return false;
  }
  return value.votes === undefined || (typeof value.votes === 'number' && Number.isInteger(value.votes) && value.votes >= 0);
}

export function validateRemoteData(value: unknown, count: number, requiredLabels: readonly string[]): RoadmapData {
  if (!object(value) || !Array.isArray(value.items) || value.items.length !== count || !value.items.every(item) ||
      !object(value.labels) || !Object.values(value.labels).every(text)) throw new Error('Invalid roadmap payload');
  const items = value.items;
  const labels = value.labels;
  if (new Set(items.map(entry => entry.id)).size !== items.length ||
      ![...requiredLabels, ...items.map(entry => `category.${entry.category}`)].every(key => text(labels[key]))) {
    throw new Error('Duplicate roadmap IDs or missing labels');
  }
  // Values have been checked above at the external-data boundary.
  return {items, labels: labels as Record<string, string>};
}

async function responseText(url: string, signal: AbortSignal, request: typeof fetch): Promise<string> {
  const response = await request(url, {signal, credentials: 'omit', cache: 'no-store'});
  if (!response.ok) throw new Error(`Roadmap HTTP ${response.status}`);
  const content = await response.text();
  if (content.length > maxResponseLength) throw new Error('Roadmap response too large');
  return content;
}

export async function loadRemoteRoadmap(baseUrl: string, locale: string, requiredLabels: readonly string[], signal: AbortSignal, request: typeof fetch = fetch,
  pageUrl: string | undefined = globalThis.location?.href): Promise<RoadmapData> {
  // A relative data URL (e.g. /roadmap-data/) follows whichever origin serves the page.
  const base = new URL(baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`, pageUrl);
  if (base.protocol !== 'https:') throw new Error('Roadmap requires HTTPS');
  const manifest: unknown = JSON.parse(await responseText(new URL('manifest.json', base).href, signal, request));
  if (!object(manifest) || manifest.schemaVersion !== 1 || !text(manifest.release) ||
      !/^[a-f0-9]{64}$/.test(manifest.release) || !object(manifest.locales)) throw new Error('Invalid roadmap manifest');
  const entry = manifest.locales[locale];
  if (!object(entry) || entry.file !== `releases/${manifest.release}/${locale}.json` ||
      !text(entry.sha256) || !/^[a-f0-9]{64}$/.test(entry.sha256) ||
      typeof entry.count !== 'number' || !Number.isInteger(entry.count) || entry.count < 0) throw new Error('Invalid roadmap locale');
  const content = await responseText(new URL(entry.file, base).href, signal, request);
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(content));
  const hash = Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, '0')).join('');
  if (hash !== entry.sha256) throw new Error('Roadmap integrity check failed');
  return validateRemoteData(JSON.parse(content), entry.count, requiredLabels);
}
