import {useState, type ReactElement, type CSSProperties} from 'react';
import Link from '@docusaurus/Link';
import {useRoadmap} from './data';
import styles from '../../pages/roadmap.module.css';
import {RoadmapDetails} from './RoadmapDetails';
import type {RoadmapItem} from './data';

const allQuarters = 'all';
const noQuarter = 'none';

export default function Roadmap(): ReactElement {
  const {items, statuses, label, labels} = useRoadmap();
  const products = [...new Set(items.map(item => item.product))].sort();
  const categories = [...new Set(items.map(item => item.category))];
  const quarters = [...new Set(items.flatMap(item => item.quarter ? [item.quarter] : []))].sort().reverse();
  const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null);
  const [query, setQuery] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [quarter, setQuarter] = useState(allQuarters);
  const [collapsed, setCollapsed] = useState<string[]>([]);
  const filtered = items.filter(item =>
    (selectedProducts.length === 0 || selectedProducts.includes(item.product)) &&
    (quarter === allQuarters || (quarter === noQuarter ? !item.quarter : item.quarter === quarter)) &&
    [item.title, item.product, item.category, ...(item.tags ?? []), item.id, item.description].join(' ').toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())
  );
  function reset(): void {setQuery(''); setSelectedProducts([]); setQuarter(allQuarters);}
  function toggleProduct(product: string): void {
    setSelectedProducts(current => current.includes(product) ? current.filter(value => value !== product) : [...current, product]);
  }
  return (
      <div className={styles.page}>
        <header className={styles.hero}>
          <div><div className={styles.eyebrow}>{label('page.eyebrow')}</div><h1>{label('page.heading')}</h1><p>{label('page.description')}</p></div>
          <Link className={styles.sourceLink} to="/home">← Documentation Cloud Temple</Link>
        </header>
        <div className={styles.notice}>{items.length} {label('board.many')} · {label('preview.notice')}</div>
        <div className={styles.workspace}>
          <aside className={styles.sidebar} aria-label={label('filters.aria')}>
            <div className={styles.filterHeading}><h2>{label('filters.title')}</h2><button onClick={reset}>{label('filters.reset')}</button></div>
            <h3>{label('filters.quarter')}</h3>
            <div className={styles.quarters}>
              {[{value: allQuarters, label: label('filters.allQuarters')}, ...quarters.map(value => ({value, label: value})), {value: noQuarter, label: label('filters.noQuarter')}].map(option => <button key={option.value} aria-pressed={quarter === option.value} className={quarter === option.value ? styles.activeQuarter : ''} onClick={() => setQuarter(option.value)}><span>{option.label}</span><span className={styles.count}>{items.filter(item => option.value === allQuarters || (option.value === noQuarter ? !item.quarter : item.quarter === option.value)).length}</span></button>)}
            </div>
            <h3>{label('filters.products')}<span className={styles.count}>{selectedProducts.length || label('filters.all')}</span></h3>
            <p className={styles.hint}>{label('filters.hint')}</p>
            <div className={styles.products}>{products.map(product => <label key={product}><input type="checkbox" checked={selectedProducts.includes(product)} onChange={() => toggleProduct(product)}/><span>{product}</span></label>)}</div>
          </aside>
          <section className={styles.content} aria-label={label('board.aria')}>
            <div className={styles.toolbar}><label className={styles.search}><span aria-hidden="true">⌕</span><input aria-label={label('board.search')} type="search" placeholder={label('board.placeholder')} value={query} onChange={event => setQuery(event.target.value)}/></label><span className={styles.results} role="status">{filtered.length} {label(filtered.length === 1 ? 'board.one' : 'board.many')}</span></div>
            {selectedProducts.length > 0 && <div className={styles.selected}>{selectedProducts.map(product => <button key={product} onClick={() => toggleProduct(product)} aria-label={`${label('filters.remove')} ${product}`}>{product} <span aria-hidden="true">×</span></button>)}</div>}
            <div className={styles.boardScroll} tabIndex={0} aria-label={label('board.scroll')}>
              <div className={styles.board}>
                <div className={styles.columns}>{statuses.map(status => <div key={status.id} className={styles.columnHeader} style={{'--status-color': status.color} as CSSProperties}><div><span className={styles.dot}/><h2>{status.title}</h2><span className={styles.count}>{filtered.filter(item => item.status === status.id).length}</span></div><p>{status.description}</p></div>)}</div>
                {categories.map(category => {
                  const categoryItems = filtered.filter(item => item.category === category);
                  if (categoryItems.length === 0) return null;
                  const isCollapsed = collapsed.includes(category);
                  return <section key={category} className={styles.category}><button className={styles.categoryToggle} aria-expanded={!isCollapsed} aria-controls={`category-${category.replace(/\W/g, '')}`} onClick={() => setCollapsed(current => isCollapsed ? current.filter(value => value !== category) : [...current, category])}><span aria-hidden="true">{isCollapsed ? '›' : '⌄'}</span><span>{labels[`category.${category}`] ?? category}</span><span className={styles.count}>{categoryItems.length}</span><span className={styles.categoryAction}>{label(isCollapsed ? 'board.expand' : 'board.collapse')}</span></button>
                    <div id={`category-${category.replace(/\W/g, '')}`} hidden={isCollapsed}><div className={styles.columns}>{statuses.map(status => <div key={status.id} className={styles.lane}>{categoryItems.filter(item => item.status === status.id).map(item => <article className={styles.card} key={item.id}><button className={styles.cardButton} onClick={() => setSelectedItem(item)} aria-label={`${label('board.open')} : ${item.title}`} aria-haspopup="dialog"><span className={styles.cardMeta}><span>{label('detail.id')} · {item.id}</span><span aria-hidden="true">→</span></span><span className={styles.cardTitle}>{item.title}</span><span className={styles.tags}><span>{item.product}</span>{item.tags?.map(tag => <span className={tag === 'SNC' ? styles.snc : styles.upgrade} key={tag}>{tag}</span>)}</span><span className={styles.cardFooter}><span>{item.quarter ?? label('filters.noQuarter')}</span><span className={styles.cardStatus} style={{color: status.color}}>●</span></span></button></article>)}</div>)}</div></div>
                  </section>;
                })}
              </div>
            </div>
            {filtered.length === 0 && <div className={styles.empty}><h2>{label('board.emptyTitle')}</h2><p>{label('board.emptyDescription')}</p><button onClick={reset}>{label('filters.reset')}</button></div>}
            <p className={styles.footnote}>{label('board.footnote')}</p>
          </section>
        </div>
        {selectedItem && <RoadmapDetails item={selectedItem} onClose={() => setSelectedItem(null)} />}
      </div>
  );
}
