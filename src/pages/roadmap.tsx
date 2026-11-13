import {useEffect, useState, type ReactElement} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import {PageMetadata, SkipToContentFallbackId} from '@docusaurus/theme-common';
import LayoutProvider from '@theme/Layout/Provider';
import SkipToContent from '@theme/SkipToContent';
import Footer from '@theme/Footer';
import Roadmap from '../components/Roadmap';
import {RoadmapDataContext, useRoadmap, type RoadmapData} from '../components/Roadmap/data';
import {loadRemoteRoadmap} from '../components/Roadmap/remote';
import styles from './roadmap.module.css';

const requestTimeoutMs = 15_000;
type LoadState = {status: 'loading' | 'error'} | {status: 'ready'; data: RoadmapData};

function RemoteRoadmap(): ReactElement {
  const {locale, labels, label} = useRoadmap();
  const {siteConfig: {customFields}} = useDocusaurusContext();
  const baseUrl = customFields?.roadmapDataUrl;
  const [state, setState] = useState<LoadState>({status: 'loading'});
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), requestTimeoutMs);
    setState({status: 'loading'});
    async function load(): Promise<void> {
      try {
        if (typeof baseUrl !== 'string') throw new Error('Missing roadmap data URL');
        const data = await loadRemoteRoadmap(baseUrl, locale, Object.keys(labels), controller.signal);
        if (active) setState({status: 'ready', data});
      } catch {
        if (active) setState({status: 'error'});
      } finally {clearTimeout(timer);}
    }
    void load();
    return () => {active = false; clearTimeout(timer); controller.abort();};
  }, [baseUrl, locale, labels, attempt]);
  if (state.status === 'ready') return <RoadmapDataContext.Provider value={state.data}><Roadmap /></RoadmapDataContext.Provider>;
  return <div className={styles.page}>
    <p role={state.status === 'error' ? 'alert' : 'status'}>{label(state.status === 'error' ? 'remote.error' : 'remote.loading')}</p>
    {state.status === 'error' && <button onClick={() => setAttempt(value => value + 1)}>{label('remote.retry')}</button>}
    <p><a href="./home">← Documentation Cloud Temple</a></p>
  </div>;
}

export default function RoadmapPage(): ReactElement {
  const {label, locale} = useRoadmap();
  return (
    <LayoutProvider>
      <PageMetadata title={label('page.title')} description={label('page.description')} />
      <Head><meta name="robots" content="noindex, nofollow" /></Head>
      <SkipToContent />
      <main id={SkipToContentFallbackId} className={styles.standalone}>
        <RemoteRoadmap key={locale} />
      </main>
      <Footer />
    </LayoutProvider>
  );
}
