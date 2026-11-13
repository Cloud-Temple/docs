// Lecture et validation de /version.json, écrit par scripts/deploy/write_version.py.
// Le fichier vient du bucket public : tout champ inattendu est rejeté, et rien
// n'est jamais interprété comme du HTML.

export type SiteEnvironment = 'staging' | 'production';

export interface SiteVersionInfo {
  version: string;
  commit: string;
  shortCommit: string;
  environment: SiteEnvironment;
}

const environments: readonly SiteEnvironment[] = ['staging', 'production'];
export const repositoryUrl = 'https://github.com/Cloud-Temple/docs';

export function parseVersion(data: unknown): SiteVersionInfo | null {
  if (typeof data !== 'object' || data === null) return null;
  const {schemaVersion, version, commit, shortCommit, environment} = data as Record<string, unknown>;
  if (schemaVersion !== 1) return null;
  if (typeof version !== 'string' || !/^\d{4}\.\d{2}\.\d{2}$/.test(version)) return null;
  if (typeof commit !== 'string' || !/^[0-9a-f]{40}$/.test(commit)) return null;
  if (typeof shortCommit !== 'string' || !commit.startsWith(shortCommit) || shortCommit.length < 7) return null;
  if (!environments.includes(environment as SiteEnvironment)) return null;
  return {version, commit, shortCommit, environment: environment as SiteEnvironment};
}

// « 2026.11.13 · bd943aa », suivi de « · staging » hors production pour ne
// jamais confondre la recette avec le site public.
export function versionLabel(info: SiteVersionInfo): string {
  return [info.version, info.shortCommit, ...(info.environment === 'production' ? [] : [info.environment])].join(' · ');
}

// Docusaurus préfixe la base de chaque langue non par défaut (`/en/`, `/de/`…),
// alors que version.json n'est publié qu'une fois, à la racine du site.
export function versionFileUrl(baseUrl: string, currentLocale: string, defaultLocale: string, localePath?: string): string {
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const suffix = currentLocale === defaultLocale ? '' : `${localePath ?? currentLocale}/`;
  const root = suffix && base.endsWith(`/${suffix}`) ? base.slice(0, -suffix.length) : base;
  return `${root}version.json`;
}

export function commitUrl(info: SiteVersionInfo): string {
  return `${repositoryUrl}/commit/${info.commit}`;
}
