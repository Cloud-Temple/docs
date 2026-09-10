import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface ContractCardProps {
  href: string;
  title: string;
  desc: string;
  cta?: string;
}

export function ContractCard({ href, title, desc, cta = 'Consulter le document →' }: ContractCardProps) {
  const url = useBaseUrl(href);
  return (
    <a className="book-card" href={url} target="_blank" rel="noopener noreferrer">
      <div className="book-card-spine"></div>
      <div className="book-card-body">
        <div className="book-card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            <line x1="8" x2="16" y1="13" y2="13"/>
            <line x1="8" x2="14" y1="17" y2="17"/>
          </svg>
        </div>
        <div className="book-card-title">{title}</div>
        <div className="book-card-desc">{desc}</div>
        <div className="book-card-cta">{cta}</div>
      </div>
    </a>
  );
}
