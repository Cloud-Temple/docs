---
title: Documenti Contrattuali
slug: /contracts
hide_table_of_contents: true
---

import { ContractCard } from '@site/src/components/ContractCard';

## Gerarchia dei documenti contrattuali

|           | Riferimenti                 |
| --------- | -------------------------- |
| Riferimento | CT.AM.JUR.HDC 20250502_3.0 |
| Data      | 17 aprile 2026.             |

La gerarchia dei documenti contrattuali è stabilita secondo un ordine di priorità definito:

1. [Condizioni Generali di Vendita e Utilizzo (CGVU)](/contractual/files/CT.AM.JUR.CGVU_Conditions%20Generales%20de%20Vente%20et%20d'Utilisation_v1.pdf)
2. [Accordo di Servizio SecNumCloud](/contractual/files/CT.AM.JUR.ANX%20-Annexe_Convention%20de%20Services_SNC_v2.pdf)
3. Accordo specifico particolare ¹
4. Piano di Assicurazione della Sicurezza (PAS) ²
5. Condizioni Particolari di Utilizzo (CPU)
6. [Accordo sulla Protezione dei Dati](/contractual/files/CT.AM.JANX%20-%20Annexe_DPA_v1.pdf)

:::info[Precisazioni contrattuali]

**¹** Accordo specifico, concepito per allinearsi alle particolarità del progetto.

**²** Documento non pubblico.

:::

_Nota: Le versioni tradotte in inglese, italiano, tedesco e spagnolo sono fornite esclusivamente per facilitare la comprensione dell'offerta._

---

# Documenti Contrattuali

Consultate qui tutti i documenti contrattuali Cloud Temple : condizioni generali, accordo sul trattamento dei dati (DPA), convenzioni di servizio SecNumCloud e accordi sul livello di servizio.

---

## Condizioni generali

<div class="book-grid">
  <ContractCard
    href="./contractual/files/CT.AM.JUR.CGVU_Conditions%20Generales%20de%20Vente%20et%20d'Utilisation_v1.pdf"
    title="Condizioni Generali di Vendita e Utilizzo (CGVU)"
    desc="Condizioni generali che regolano tutti i servizi Cloud Temple."
  />
  <ContractCard
    href="./contractual/files/CT.AM.JANX%20-%20Annexe_DPA_v1.pdf"
    title="Accordo sul trattamento dei dati (DPA)"
    desc="Accordo che regola il trattamento dei dati personali conformemente al GDPR."
  />
</div>

---

## Convenzioni di servizio SecNumCloud

Le convenzioni di servizio definiscono il quadro contrattuale per la fornitura dei servizi qualificati SecNumCloud: perimetro, impegni operativi, responsabilità e condizioni di servizio.

<div class="book-grid">
  <ContractCard
    href="./contractual/files/CT.AM.JUR.ANX%20-Annexe_Convention%20de%20Services_SNC_v2.pdf"
    title="Convenzione di servizi SecNumCloud"
    desc="Quadro contrattuale per la fornitura dei servizi qualificati SecNumCloud: perimetro, impegni operativi, responsabilità e condizioni di servizio."
  />
</div>

---

## Accordi sul Livello di Servizio (SLA)

Gli SLA definiscono gli impegni di disponibilità, i metodi di misurazione, le esclusioni e i crediti di servizio applicabili in caso di mancato rispetto.

<div class="book-grid">
  <a class="book-card" href="./vm-instances/sla">
    <div class="book-card-spine"></div>
    <div class="book-card-body">
      <div class="book-card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><line x1="8" x2="16" y1="13" y2="13"/><line x1="8" x2="14" y1="17" y2="17"/></svg></div>
      <div class="book-card-title">SLA Istanze VM</div>
      <div class="book-card-desc">Disponibilità garantita al 99,95 % — crediti di servizio ed esclusioni.</div>
      <div class="book-card-cta">Consulta il documento →</div>
    </div>
  </a>
  <a class="book-card" href="./network/sla-vpc">
    <div class="book-card-spine"></div>
    <div class="book-card-body">
      <div class="book-card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><line x1="8" x2="16" y1="13" y2="13"/><line x1="8" x2="14" y1="17" y2="17"/></svg></div>
      <div class="book-card-title">SLA VPC</div>
      <div class="book-card-desc">Piano dati 99,99 % — piano di controllo 99,9 % — crediti di servizio ed esclusioni.</div>
      <div class="book-card-cta">Consulta il documento →</div>
    </div>
  </a>
</div>