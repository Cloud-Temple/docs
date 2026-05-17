---
title: Panoramica
---
import archiOverview1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import archiOverview from '@site/docs/managed_kubernetes/images/archi_overview.png'

# Kubernetes Core Gestito

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Scopri i fondamenti e i principi essenziali per padroneggiare la nostra infrastruttura.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Esplora i concetti &rarr;</a>
  </div>
  <div class="card">
    <h3>Guida introduttiva</h3>
    <p>Inizia rapidamente seguendo istruzioni chiare e semplici.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Avvia il Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorial</h3>
    <p>Impara passo dopo passo a configurare e utilizzare i nostri servizi con guide dettagliate.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Scopri i tutorial &rarr;</a>
  </div>
</div>

Managed **Core** Kubernetes di Cloud Temple è una soluzione di orchestrazione di container basata su una selezione di prodotti Open Source, progettata per offrire una piattaforma di base sicura, resiliente e automatizzata sulle piattaforme SecNumCloud di Cloud Temple. Ogni cluster viene distribuito in un ambiente IaaS Cloud-Temple interamente dedicato al cliente.

Questo prodotto è progettato per team che padroneggiano eccellentemente Kubernetes e gli strumenti Cloud Native, che desiderano costruire la propria piattaforma su fondamenta minimaliste e robuste. Si rivolge agli appassionati di open source che cercano una soluzione pulita, portabile, senza layer costruttore, su un OS minimalista e immutabile progettato per l'automazione e la sicurezza.

### Benefici Chiave

- **Sovranità e Reversibilità** : La soluzione si basa esclusivamente su standard open source (Kubernetes CNCF) per evitare qualsiasi dipendenza tecnologica e garantire la portabilità delle vostre applicazioni.
- **Sicurezza "Zero-Trust" by design** : L'architettura si basa su Talos OS, un sistema operativo immutabile senza accesso diretto (né shell, né SSH), il che riduce drasticamente la superficie di attacco e costituisce una base solida per una strategia di sicurezza "Zero-Trust".
- **Fondamenta di rete moderne** : L'integrazione di Cilium per il CNI e MetalLB per l'esposizione dei servizi fornisce una base di rete performante e standard, pronta ad accogliere i vostri componenti di sicurezza e filtraggio.

### Una piattaforma di base pronta per essere estesa

L'offerta "Managed Core" include nativamente uno stack minimo e coerente di strumenti open source all'avanguardia per fornirti le fondamenta di un cluster Kubernetes :

- **OS e Rete** : Talos, Cilium, MetalLB

A partire da questa base, sei libero di integrare i tuoi strumenti per il deployment continuo, l'osservabilità, il backup e la gestione dei costi.

---

## Architetture di Deploy

Proponiamo due architetture distinte per soddisfare le vostre esigenze, sia per ambienti di sviluppo che di produzione critici.

### Architettura "Dev/Test"

Ideale per gli ambienti POC, questa architettura compatta distribuisce tutte le risorse all'interno di una singola zona di disponibilità (AZ).

- **Caso d'uso** : Sviluppo, test, proof-of-concept (POC).
- **Punti chiave** :
  - 1 nodo Control Plane.
  - 3 nodi Workers (o più).
  - Non beneficia di SLA di alta disponibilità.
  - nessuna restrizione di sicurezza

<img src={archiOverview1az} alt="Architecture Mono-AZ" />

### Architettura di Produzione (Multi-AZ)

Progettata per la produzione e le applicazioni critiche, questa architettura distribuisce le risorse su tre zone di disponibilità (AZ) per garantire un'alta disponibilità e una resilienza massima, in conformità con i requisiti SecNumCloud.

- **Caso d'uso** : Applicazioni di produzione, servizi critici, piattaforme che richiedono un SLA.
- **Punti chiave** :
  - **Alta Disponibilità** : 3 nodi Control Plane distribuiti su 3 AZ.
  - **Worker Distribuiti** : Almeno 3 nodi worker, uno per AZ.
  - **Nodi Bare Metal (Optionnel)** : Possibilità di integrare nodi worker di tipo **"Bare Metal"** per esigenze di prestazioni specifiche, in particolare il **supporto GPU**.
  - **SLA del 99.90%**, misurato mensilmente.

<img src={archiOverview} alt="Architecture Multi-AZ" />

---

### Componenti tecnici inclusi

L'offerta "Managed Core" include i seguenti componenti:

- **Sistema operativo** : Talos OS
- **Archiviazione** : Rook-Ceph
- **CNI (Container Network Interface)** : Cilium
- **Bilanciamento del carico** : MetalLB