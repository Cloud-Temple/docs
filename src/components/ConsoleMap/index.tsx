import React, { JSX } from 'react';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

// Schéma « où se situe la Console » : le pilotage passe par la Console ou son API,
// le trafic des applications passe par les offres Réseau, jamais par la Console.
// Les libellés sont traduits via code.json ; les couleurs suivent le thème du site.

const t = (id: string, message: string) => translate({ id: `consoleMap.${id}`, message });

type BoxProps = { x: number; y: number; w: number; title: string; sub: string; tone: string };

function Box({ x, y, w, title, sub, tone }: BoxProps): JSX.Element {
  return (
    <g className={tone}>
      <rect x={x} y={y} width={w} height={56} rx={8} />
      <text className={styles.title} x={x + w / 2} y={y + 20} textAnchor="middle" dominantBaseline="central">{title}</text>
      <text className={styles.sub} x={x + w / 2} y={y + 39} textAnchor="middle" dominantBaseline="central">{sub}</text>
    </g>
  );
}

export function ConsoleMap(): JSX.Element {
  const title = t('title', 'Où se situe la Console');
  const desc = t(
    'desc',
    "Vos équipes pilotent leurs tenants depuis la Console, dont l'accès est filtré par adresse IP et protégé par le double facteur, ou depuis l'API avec une clé d'API. Les utilisateurs de vos applications atteignent vos ressources par les offres Réseau, sans passer par la Console.",
  );
  return (
    <figure className={styles.figure}>
      <svg className={styles.svg} viewBox="0 0 680 404" role="img" aria-labelledby="console-map-title console-map-desc">
        <title id="console-map-title">{title}</title>
        <desc id="console-map-desc">{desc}</desc>
        <defs>
          <marker id="console-map-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        <text className={styles.lane} x={30} y={56}>{t('lane.pilot', "Pilotage de l'infrastructure")}</text>
        <Box x={30} y={70} w={160} tone={styles.neutral} title={t('browser', 'Navigateur')} sub={t('browser.sub', 'Vos équipes')} />
        <Box x={30} y={170} w={160} tone={styles.neutral} title={t('scripts', 'Scripts, Terraform')} sub={t('scripts.sub', 'Automatisation')} />
        <Box x={240} y={70} w={175} tone={styles.pilot} title={t('console', 'Console')} sub={t('console.sub', 'IP autorisées + MFA')} />
        <Box x={240} y={170} w={175} tone={styles.pilot} title={t('api', 'API Console')} sub={t('api.sub', "Clé d'API (PAT)")} />

        <g className={styles.neutral}>
          <rect x={465} y={70} width={185} height={156} rx={12} />
          <text className={styles.title} x={557} y={96} textAnchor="middle" dominantBaseline="central">{t('tenants', 'Vos tenants')}</text>
          <text className={styles.sub} x={557} y={128} textAnchor="middle" dominantBaseline="central">{t('tenants.regions', 'Régions')}</text>
          <text className={styles.sub} x={557} y={152} textAnchor="middle" dominantBaseline="central">{t('tenants.zones', 'Zones de disponibilité')}</text>
          <text className={styles.sub} x={557} y={176} textAnchor="middle" dominantBaseline="central">{t('tenants.resources', 'VM, stockage, réseau…')}</text>
        </g>

        <g className={styles.arrows} markerEnd="url(#console-map-arrow)">
          <line x1={192} y1={98} x2={236} y2={98} />
          <line x1={192} y1={198} x2={236} y2={198} />
          <line x1={417} y1={98} x2={461} y2={98} />
          <line x1={417} y1={198} x2={461} y2={198} />
        </g>

        <text className={styles.lane} x={30} y={288}>{t('lane.usage', 'Usage de vos applications')}</text>
        <Box x={30} y={300} w={160} tone={styles.usage} title={t('users', 'Utilisateurs')} sub={t('users.sub', 'De vos applications')} />
        <Box x={230} y={300} w={195} tone={styles.usage} title={t('network', 'Offres Réseau')} sub={t('network.sub', 'Internet, Private Network…')} />
        <g className={styles.arrows} markerEnd="url(#console-map-arrow)">
          <line x1={192} y1={328} x2={226} y2={328} />
          <path d="M427 328 L557 328 L557 230" fill="none" />
        </g>

        <text className={styles.note} x={340} y={388} textAnchor="middle">
          {t('note', 'Le trafic de vos applications ne passe pas par la Console')}
        </text>
      </svg>
    </figure>
  );
}
