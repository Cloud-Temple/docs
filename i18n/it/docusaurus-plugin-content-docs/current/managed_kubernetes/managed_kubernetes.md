---
title: Panoramica
---

import archiOverview1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import archiOverview from '@site/docs/managed_kubernetes/images/archi_overview.png'

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Scoprite le basi e i principi essenziali per padroneggiare la nostra infrastruttura.</p>
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

**Managed Kubernetes** di Cloud Temple è una soluzione di orchestrazione dei container basata su standard open source (CNCF). È progettata per offrire un alto livello di sicurezza, resilienza e automazione sulle piattaforme SecNumcloud di Cloud Temple. Ogni cluster viene distribuito in un ambiente IaaS Cloud-Temple interamente dedicato al cliente.

Per rispondere al meglio alle esigenze dei vostri team, proponiamo due varianti di questo prodotto: **Managed Core Kubernetes** (una base minimalista) e **Managed Kubernetes** (una piattaforma completa "pronta all'uso").

---

## Due approcci per i vostri cluster

### 1. Managed Core Kubernetes (La base minimalista)
Questa offerta è progettata per i team con un'**ottima padronanza di Kubernetes** e degli strumenti Cloud Native, che desiderano costruire la propria piattaforma su fondamenta minimaliste e robuste. Si rivolge ai sostenitori dell'open source che cercano una soluzione snella, portabile, priva di strati aggiuntivi del fornitore, su un OS minimalista e immutabile progettato per l'automazione e la sicurezza.

- **OS e Rete inclusi** : Talos OS, Rook-Ceph (archiviazione), Cilium (CNI), MetalLB (Load Balancer).
- **Filosofia** : A partire da questa base performante e standardizzata, siete liberi di integrare i vostri strumenti di distribuzione continua, osservabilità, backup o sicurezza.

### 2. Managed Kubernetes (La piattaforma completa)
Questa offerta chiavi in mano è progettata per i team che desiderano una soluzione **nativa, pronta all'uso e all-in-one**, che integra i migliori standard open source per coprire tutte le esigenze del ciclo di vita applicativo senza dover assemblare e mantenere i componenti autonomamente.

Oltre alla base "Core" (Talos, Ceph, Cilium, MetalLB), integra nativamente :
- **Rete e Sicurezza** : Hubble, Ingress Nginx, Kyverno, Capsule, Cert-Manager.
- **Deployment Continuo (GitOps)** : ArgoCD, Container registry Harbor, Keda
- **Osservabilità** : Stack completa (Prometheus, Grafana, Loki, Pyroscope).
- **Gestione dei Costi (FinOps)** : OpenCost.
- **Backup e Reversibilità** : Veeam Kasten.
- **Identità** : Autenticazione SSO con un Identity Provider Esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...).

---

## Benefici Chiave Comuni

Indipendentemente dall'offerta scelta, i nostri cluster Kubernetes condividono questi benefici fondamentali:

- **Sovranità e Reversibilità** : La soluzione si basa su standard open source per evitare qualsiasi dipendenza tecnologica (*vendor lock-in*) e garantire la piena portabilità delle vostre applicazioni. (Con Veeam Kasten incluso nella versione completa per facilitare le migrazioni inter-cloud).
- **Sicurezza "Zero-Trust" by design** : L'architettura si basa su **Talos OS**, un sistema operativo Linux immutabile ed effimero progettato specificamente per Kubernetes. Non dispone di alcun accesso diretto (né shell, né SSH), riducendo drasticamente la superficie di attacco.
- **Controllo dei Costi** : Il modello economico è trasparente, basato esclusivamente sulle risorse IaaS sottostanti consumate, senza costi di licenza aggiuntivi per l'orchestratore.

---

## Architetture di Deployment

Proponiamo due architetture distinte per soddisfare le vostre esigenze, sia per ambienti di sviluppo che per ambienti di produzione critici. Queste architetture si applicano a entrambe le offerte (Core et Full).

### Architettura "Dev/Test"

Ideale per gli ambienti di POC, questa architettura compatta distribuisce tutte le risorse all'interno di una singola zona di disponibilità (AZ).

- **Casi d'uso** : Sviluppo, test, proof-of-concept (POC).
- **Punti chiave** :
  - 1 nodo Control Plane.
  - 3 nodi Workers (o più).
  - Lo storage distribuito (Ceph) è co-localizzato sui nodi workers.
  - Non beneficia di un SLA di alta disponibilità.
  - Nessuna restrizione di sicurezza specifica per l'architettura.

<img src={archiOverview1az} alt="Architecture Mono-AZ" />

### Architettura di Produzione (Multi-AZ)

Progettata per la produzione e le applicazioni critiche, questa architettura distribuisce le risorse su tre zone di disponibilità (AZ) per garantire alta disponibilità e massima resilienza, in conformità con i requisiti SecNumCloud.

- **Casi d'uso** : Applicazioni di produzione, servizi critici, piattaforme che richiedono un SLA.
- **Punti chiave** :
  - **Alta Disponibilità** : 3 nodi Control Plane distribuiti su 3 AZ.
  - **Archiviazione Dedicata** : 3 nodi di archiviazione dedicati e distribuiti per prestazioni e resilienza.
  - **Worker Distribuiti** : Almeno 3 nodi worker, uno per AZ.
  - **Nodi Bare Metal (Optionnel)** : Possibile integrazione di nodi worker di tipo **"Bare Metal"** per esigenze di prestazioni specifiche, in particolare il **supporto delle GPU**.
  - **SLA del 99.95%**, misurato mensilmente.

<img src={archiOverview} alt="Architettura Multi-AZ" />