import React from 'react';
import OriginalDocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import Link from '@docusaurus/Link';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useLocation } from '@docusaurus/router';
import type DocBreadcrumbsType from '@theme/DocBreadcrumbs';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof DocBreadcrumbsType>;

// Composant interne : appelé uniquement sur les vraies pages docs contractuelles
// (qui ont bien un DocProvider dans leur arbre)
function ContractualBreadcrumb(): React.ReactElement {
  const { metadata } = useDoc();
  return (
    <nav className="theme-doc-breadcrumbs" aria-label="Breadcrumbs">
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" href="/" title="Accueil">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ width: '1em', height: '1em', verticalAlign: '-0.125em' }}
            >
              <path
                d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" href="/contracts">
            Contractuel
          </Link>
        </li>
        <li className="breadcrumbs__item breadcrumbs__item--active">
          <span className="breadcrumbs__link">{metadata.title}</span>
        </li>
      </ul>
    </nav>
  );
}

// Wrapper principal : utilise uniquement useLocation() (disponible partout)
// useDoc() n'est jamais appelé ici → pas de crash sur les category pages
export default function DocBreadcrumbsWrapper(props: Props): React.ReactElement {
  const { pathname } = useLocation();

  // Pages contractuelles (sous /contractual/) SAUF la hub page /contracts
  if (pathname.includes('/contractual/') && !pathname.endsWith('/contracts')) {
    return <ContractualBreadcrumb />;
  }

  return <OriginalDocBreadcrumbs {...props} />;
}
