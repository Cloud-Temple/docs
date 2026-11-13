import {useEffect, useRef, type ReactElement} from 'react';
import {useRoadmap, type RoadmapItem} from './data';
import styles from '../../pages/roadmap.module.css';

interface Props {
  readonly item: RoadmapItem;
  readonly onClose: () => void;
}

function formatDate(value: string | undefined, locale: string, unknown: string): string {
  return value
    ? new Intl.DateTimeFormat(locale, {dateStyle: 'medium', timeZone: 'Europe/Paris'}).format(new Date(value))
    : unknown;
}

export function RoadmapDetails({item, onClose}: Props): ReactElement {
  const {statuses, label, labels, locale} = useRoadmap();
  const date = (value?: string): string => formatDate(value, locale, label('detail.unknown'));
  const dialogRef = useRef<HTMLDialogElement>(null);
  const status = statuses.find(value => value.id === item.status);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => { dialog?.close(); };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={styles.drawer}
      aria-labelledby="roadmap-detail-title"
      onClose={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className={styles.drawerBody}>
        <header className={styles.drawerHeader}>
          <span className={styles.eyebrow}>{label('detail.heading')}</span>
          <button autoFocus className={styles.closeDrawer} aria-label={label('detail.close')} onClick={() => dialogRef.current?.close()}>×</button>
        </header>
        <div className={styles.detailBadges}>
          <span className={styles.internalId}>{label('detail.id')} · {item.id}</span>
          <span style={{color: status?.color}}>● {status?.title}</span>
        </div>
        <h2 id="roadmap-detail-title" className={styles.detailTitle}>{item.title}</h2>
        <p className={styles.detailDescription}>{item.description}</p>

        {item.points.length > 0 && <ul className={styles.detailDescription}>{item.points.map(point => <li key={point}>{point}</li>)}</ul>}
        <section className={styles.detailSection} aria-label={label('detail.productSection')}>
          <h3>{label('detail.productSection')}</h3>
          <dl className={styles.detailFields}>
            <div><dt>{label('detail.id')}</dt><dd>{item.id}</dd></div>
            <div><dt>{label('detail.status')}</dt><dd style={{color: status?.color}}>{status?.title}</dd></div>
            <div><dt>{label('detail.category')}</dt><dd>{labels[`category.${item.category}`] ?? item.category}</dd></div>
            <div><dt>{label('detail.product')}</dt><dd>{item.product}</dd></div>
            <div><dt>{label('detail.quarter')}</dt><dd>{item.quarter ?? label('filters.noQuarter')}</dd></div>
            <div><dt>{label('detail.priority')}</dt><dd>{item.priority ?? label('detail.unknown')}</dd></div>
            <div><dt>{label('detail.type')}</dt><dd>{item.type ?? label('detail.unknown')}</dd></div>
            <div><dt>{label('detail.tags')}</dt><dd className={styles.tags}>{item.tags?.length ? item.tags.map(tag => <span key={tag} className={tag === 'SNC' ? styles.snc : styles.upgrade}>{tag}</span>) : label('detail.none')}</dd></div>
          </dl>
        </section>
        <section className={styles.detailSection} aria-label={label('detail.schedule')}>
          <h3>{label('detail.schedule')}</h3>
          <dl className={styles.detailFields}>
            <div><dt>{label('detail.startDate')}</dt><dd>{date(item.startDate)}</dd></div>
            <div><dt>{label('detail.releaseDate')}</dt><dd>{date(item.releaseDate)}</dd></div>
            <div><dt>{label('detail.changelog')}</dt><dd>{item.changelog ?? label('detail.unknown')}</dd></div>
            <div><dt>{label('detail.votes')}</dt><dd>{item.votes ?? label('detail.unknown')}</dd></div>
            <div><dt>{label('detail.created')}</dt><dd>{date(item.createdAt)}</dd></div>
            <div><dt>{label('detail.updated')}</dt><dd>{date(item.updatedAt)}</dd></div>
          </dl>
        </section>
        <p className={styles.footnote}>{label('detail.footnote')}</p>
      </div>
    </dialog>
  );
}
