---
title: Documentos Contractuales
slug: /contracts
hide_table_of_contents: true
---

import { ContractCard } from '@site/src/components/ContractCard';

## Jerarquía de los documentos contractuales

|           | Referencias                |
| --------- | -------------------------- |
| Referencia | CT.AM.JUR.HDC 20250502_3.0 |
| Fecha     | 17 de abril de 2026.             |

La jerarquía de los documentos contractuales se establece según un orden de prioridad definido:

1. [Conditions Générales de Vente et Utilisation (CGVU)](/contractual/files/CT.AM.JUR.CGVU_Conditions%20Generales%20de%20Vente%20et%20d'Utilisation_v1.pdf)
2. [Convention de Service SecNumCloud](/contractual/files/CT.AM.JUR.ANX%20-Annexe_Convention%20de%20Services_SNC_v2.pdf)
3. Convención específica particular ¹
4. Plan de Aseguramiento de la Seguridad (PAS) ²
5. Condiciones Particulares de Uso (CPU)
6. [Data Protection Agreement](/contractual/files/CT.AM.JANX%20-%20Annexe_DPA_v1.pdf)

:::info[Aclaraciones contractuales]

**¹** Convención específica, diseñada para alinearse con las particularidades del proyecto.

**²** Documento no público.

:::

_Nota: Las versiones traducidas al inglés, italiano, alemán y español se proporcionan únicamente para facilitar la comprensión de la oferta._

---

# Documentos Contractuales

Consulte aquí todos los documentos contractuales de Cloud Temple: condiciones generales, acuerdo de tratamiento de datos (DPA), convenios de servicio SecNumCloud y acuerdos de nivel de servicio.

---

## Condiciones generales

<div class="book-grid">
  <ContractCard
    href="./contractual/files/CT.AM.JUR.CGVU_Conditions%20Generales%20de%20Vente%20et%20d'Utilisation_v1.pdf"
    title="Condiciones Generales de Venta y Utilización (CGVU)"
    desc="Condiciones generales que regulan todos los servicios de Cloud Temple."
  />
  <ContractCard
    href="./contractual/files/CT.AM.JANX%20-%20Annexe_DPA_v1.pdf"
    title="Data Processing Agreement (DPA)"
    desc="Acuerdo que regula el tratamiento de datos personales conforme al RGPD."
  />
</div>

---

## Convenciones de servicio SecNumCloud

Las convenciones de servicio definen el marco contractual para la prestación de servicios cualificados SecNumCloud: alcance, compromisos operativos, responsabilidades y condiciones de servicio.

<div class="book-grid">
  <ContractCard
    href="./contractual/files/CT.AM.JUR.ANX%20-Annexe_Convention%20de%20Services_SNC_v2.pdf"
    title="Convención de servicios SecNumCloud"
    desc="Marco contractual para la prestación de servicios cualificados SecNumCloud: alcance, compromisos operativos, responsabilidades y condiciones de servicio."
  />
</div>

---

## Acuerdos de Nivel de Servicio (SLA)

Los SLA definen los compromisos de disponibilidad, los métodos de medición, las exclusiones y los créditos de servicio aplicables en caso de incumplimiento.

<div class="book-grid">
  <a class="book-card" href="./contractual/vm-instances/sla">
    <div class="book-card-spine"></div>
    <div class="book-card-body">
      <div class="book-card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><line x1="8" x2="16" y1="13" y2="13"/><line x1="8" x2="14" y1="17" y2="17"/></svg></div>
      <div class="book-card-title">SLA de Instancias de VM</div>
      <div class="book-card-desc">Disponibilidad garantizada del 99,95 % — créditos de servicio y exclusiones.</div>
      <div class="book-card-cta">Consultar el documento →</div>
    </div>
  </a>
  <a class="book-card" href="./contractual/network/sla-vpc">
    <div class="book-card-spine"></div>
    <div class="book-card-body">
      <div class="book-card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><line x1="8" x2="16" y1="13" y2="13"/><line x1="8" x2="14" y1="17" y2="17"/></svg></div>
      <div class="book-card-title">SLA de VPC</div>
      <div class="book-card-desc">Plano de datos 99,99 % — plano de control 99,9 % — créditos de servicio y exclusiones.</div>
      <div class="book-card-cta">Consultar el documento →</div>
    </div>
  </a>
</div>