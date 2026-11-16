import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {createContext, useContext} from 'react';

const statusDefinitions = [
  {id: 'acknowledged', color: '#4385f5'},
  {id: 'prioritized', color: '#d6a326'},
  {id: 'in_progress', color: '#ef655f'},
  {id: 'partial', color: '#a77aee'},
  {id: 'done', color: '#39a875'},
] as const;
export type Status = typeof statusDefinitions[number]['id'];
// Équipes responsables : noms propres, identiques dans toutes les langues.
export const ownerLabels = {
  csp: 'Cloud Service Provider (CSP)',
  msp: 'Managed Service Provider (MSP)',
  mssp: 'Managed Security Service Provider (MSSP)',
} as const;
export type Owner = keyof typeof ownerLabels;
export interface RoadmapItem {
  readonly id: string;
  readonly description: string;
  readonly points: readonly string[];
  readonly owner?: Owner;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly priority?: string;
  readonly type?: string;
  readonly startDate?: string;
  readonly releaseDate?: string;
  readonly changelog?: string;
  readonly votes?: number;
  readonly title: string;
  readonly product: string;
  readonly category: string;
  readonly status: Status;
  readonly quarter?: string;
  readonly tags?: readonly string[];
}

export interface RoadmapData {
  readonly items: readonly RoadmapItem[];
  readonly labels: Readonly<Record<string, string>>;
}

export const RoadmapDataContext = createContext<RoadmapData | null>(null);

// Libellés que les données publiées doivent fournir : clés utilisées par le composant,
// plus le titre et la description de chaque statut. Contrôlé avant affichage (remote.ts).
export const requiredLabels: readonly string[] = [
  'board.aria',
  'board.emptyDescription',
  'board.emptyTitle',
  'board.footnote',
  'board.many',
  'board.open',
  'board.placeholder',
  'board.scroll',
  'board.search',
  'detail.category',
  'detail.changelog',
  'detail.close',
  'detail.created',
  'detail.footnote',
  'detail.heading',
  'detail.id',
  'detail.none',
  'detail.owner',
  'detail.priority',
  'detail.product',
  'detail.productSection',
  'detail.quarter',
  'detail.releaseDate',
  'detail.schedule',
  'detail.startDate',
  'detail.status',
  'detail.tags',
  'detail.type',
  'detail.unknown',
  'detail.updated',
  'detail.votes',
  'filters.all',
  'filters.allQuarters',
  'filters.aria',
  'filters.hint',
  'filters.noQuarter',
  'filters.products',
  'filters.quarter',
  'filters.remove',
  'filters.reset',
  'filters.title',
  'page.description',
  'page.eyebrow',
  'page.heading',
  'page.title',
  'preview.notice',
  ...statusDefinitions.flatMap(status => [`status.${status.id}.title`, `status.${status.id}.description`]),
];

export function useRoadmap() {
  const data = useContext(RoadmapDataContext);
  if (!data) throw new Error('Roadmap data is not loaded');
  const {i18n: {currentLocale}} = useDocusaurusContext();
  const label = (key: string): string => {
    const value = data.labels[key];
    if (value === undefined) throw new Error(`Missing roadmap label: ${key}`);
    return value;
  };
  const statuses = statusDefinitions.map(status => ({
    ...status,
    title: label(`status.${status.id}.title`),
    description: label(`status.${status.id}.description`),
  }));
  return {...data, statuses, label, locale: currentLocale};
}
