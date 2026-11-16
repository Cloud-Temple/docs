import React, {type ReactElement, useEffect, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {commitUrl, parseVersion, type SiteVersionInfo, versionFileUrl, versionLabel} from './version';

// Ligne de version du footer. Lue au chargement depuis /version.json plutôt
// qu'écrite dans le HTML : un déploiement sans changement de contenu ne modifie
// alors qu'un seul fichier sur S3. Sans fichier valide (dev local), rien n'est affiché.
export default function SiteVersion(): ReactElement | null {
  const {siteConfig, i18n} = useDocusaurusContext();
  const url = versionFileUrl(siteConfig.baseUrl, i18n.currentLocale, i18n.defaultLocale,
    i18n.localeConfigs[i18n.currentLocale]?.path);
  const [info, setInfo] = useState<SiteVersionInfo | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch(url, {cache: 'no-cache', credentials: 'omit', signal: controller.signal})
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => setInfo(parseVersion(data)))
      .catch(() => setInfo(null));
    return () => controller.abort();
  }, [url]);
  if (!info) return null;
  return (
    <div className="footer__copyright" style={{fontSize: '0.8em', opacity: 0.8, marginTop: '0.25rem'}}>
      Cloud Temple Docs — <a href={commitUrl(info)} target="_blank" rel="noopener noreferrer">{versionLabel(info)}</a>
    </div>
  );
}
