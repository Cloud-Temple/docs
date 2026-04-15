---
title: Panoramica di Managed Kubernetes
---

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Scoprite le basi e i principi essenziali per padroneggiare la nostra infrastruttura.</p>
    <a href="managed_kubernetes/concepts" class="card-link">Esplorare i concetti &rarr;</a>
  </div>
  <div class="card">
    <h3>Guida introduttiva</h3>
    <p>Iniziate rapidamente seguendo istruzioni chiare e semplici.</p>
    <a href="managed_kubernetes/quickstart" class="card-link">Avviare il Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorial</h3>
    <p>Imparate passo dopo passo a configurare e utilizzare i nostri servizi con guide dettagliate.</p>
    <a href="managed_kubernetes/tutorials" class="card-link">Scoprire i tutorial &rarr;</a>
  </div>
</div>

Managed Kubernetes by Cloud Temple è una soluzione di orchestrazione di container basata su prodotti Open Source, progettata per offrire un alto livello di sicurezza, resilienza e automazione sulle piattaforme SecNumCloud di Cloud Temple. Ogni cluster viene distribuito in un ambiente IaaS di Cloud Temple interamente dedicato al cliente.

Questa offerta è progettata per team con una buona conoscenza di Kubernetes e gli appassionati dell'open source che cercano una soluzione nativa, portabile, senza sovrastrutture del fornitore, su un OS minimalista e immutabile progettato per l'automazione e la sicurezza.

### Benefici Chiave

- **Sovranità e Reversibilità**: La soluzione si basa su standard open source (Kubernetes CNCF) per evitare qualsiasi dipendenza tecnologica e garantire la portabilità delle applicazioni. Lo strumento di backup Veeam Kasten, incluso nell'offerta, è specificamente progettato per facilitare le migrazioni da un cloud all'altro.
- **Sicurezza "Zero-Trust" e Governance**: L'architettura si basa su Talos OS, un sistema operativo immutabile senza accesso diretto (né shell, né SSH), il che riduce drasticamente la superficie di attacco. Questo approccio è abbinato a strumenti di governance come Kyverno per la gestione delle policy e Capsule per la gestione granulare dei diritti, costituendo una base solida per una strategia di sicurezza "Zero-Trust".
- **Controllo dei Costi e Integrazione**: La soluzione integra nativamente strumenti FinOps come OpenCost per un monitoraggio preciso dei consumi. Il modello economico è trasparente, basato sulle risorse IaaS consumate, e l'utilizzo di componenti open source riconosciuti (Cilium, Ceph, ArgoCD) facilita l'integrazione nei vostri ecosistemi esistenti.

### Una piattaforma completa e pronta all'uso

La soluzione include nativamente uno stack completo e coerente di strumenti open source all'avanguardia per coprire tutte le esigenze del ciclo di vita delle applicazioni:

- **Rete e Sicurezza**: Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Archiviazione**: Rook-Ceph
- **Continuous Deployment (GitOps)**: ArgoCD
- **Observability**: Prometheus, Grafana, Loki
- **Backup e Migrazione**: Veeam Kasten
- **Gestione dei Costi (FinOps)**: OpenCost

---

## Architetture di Distribuzione

Offriamo due architetture distinte per soddisfare le vostre esigenze, sia per ambienti di sviluppo che per produzioni critiche.

### Architettura "Dev/Test"

Ideale per ambienti POC, questa architettura compatta distribuisce tutte le risorse all'interno di una singola zona di disponibilità (AZ).

- **Casi d'uso**: Sviluppo, test, proof-of-concept (POC).
- **Punti chiave**:
  - 1 nodo Control Plane.
  - 3 nodi Worker (o più).
  - Lo storage distribuito (Ceph) è co-localizzato sui nodi worker.
  - Nessun SLA di alta disponibilità.
  - Nessuna restrizione di sicurezza.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Architettura Mono-AZ" />

### Architettura di Produzione (Multi-AZ)

Progettata per la produzione e le applicazioni critiche, questa architettura distribuisce le risorse su tre zone di disponibilità (AZ) per garantire alta disponibilità e massima resilienza, in conformità con i requisiti SecNumCloud.

- **Casi d'uso**: Applicazioni di produzione, servizi critici, piattaforme che richiedono un SLA.
- **Punti chiave**:
  - **Alta Disponibilità**: 3 nodi Control Plane distribuiti su 3 AZ.
  - **Storage Dedicato**: 3 nodi di storage dedicati e distribuiti per prestazioni e resilienza.
  - **Worker Distribuiti**: Almeno 3 nodi worker, uno per AZ.
  - **Nodi Bare Metal (Opzionale)**: Possibile integrazione di nodi worker di tipo **"Bare Metal"** per esigenze di prestazioni specifiche, in particolare il **supporto GPU**.
  - **SLA del 99,90%**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Architettura Multi-AZ" />

---

### Componenti tecnici dettagliati

L'offerta include in dettaglio i seguenti componenti:

- CNI Cilium, con interfaccia di observability (Hubble)
- Ingress interni ed esterni MetalLB e nginx
- Storage distribuito Rook-Ceph
- Cert-Manager
- ArgoCD
- Stack Prometheus (Prometheus, Grafana, Loki)
- Container registry Harbor
- Gestione dei costi con OpenCost
- Policy di sicurezza avanzate con Kyverno e Capsule
- Veeam Kasten (backup, automazioni tra ambienti e reversibilità)
- Autenticazione SSO con un Identity Provider esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)
