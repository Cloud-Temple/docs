---
title: Panoramica
---

# Kubernetes gestito

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Scopri le basi e i principi fondamentali per padroneggiare la nostra infrastruttura.</p>
    <a href="managed_kubernetes/concepts" class="card-link">Esplora i concetti &rarr;</a>
  </div>
  <div class="card">
    <h3>Guida introduttiva</h3>
    <p>Inizia rapidamente seguendo istruzioni chiare e semplici.</p>
    <a href="managed_kubernetes/quickstart" class="card-link">Avvia l'intro &rarr;</a>
  </div>
  <div class="card">
    <h3>Tutorial</h3>
    <p>Impara passo dopo passo a configurare e utilizzare i nostri servizi con guide dettagliate.</p>
    <a href="managed_kubernetes/tutorials" class="card-link">Scopri i tutorial &rarr;</a>
  </div>
</div>

Kubernetes gestito da Cloud Temple è una soluzione di orchestrazione dei contenitori basata su software open source, progettata per offrire un elevato livello di sicurezza, resilienza e automazione sulle piattaforme SecNumcloud di Cloud Temple. Ogni cluster viene distribuito in un ambiente IaaS Cloud-Temple OpenIaaS completamente dedicato al cliente.

Questo servizio è pensato per gli esperti Kubernetes e gli appassionati di open source che cercano una soluzione nativa, portabile, priva di componenti aggiuntivi del costruttore, su un sistema operativo minimalista e immutabile, progettato per l'automazione e la sicurezza.

### Principali Benefici
- **Sovranità e Reversibilità**: La soluzione si basa su standard open source (Kubernetes CNCF) per evitare qualsiasi dipendenza tecnologica e garantire la portabilità delle applicazioni. Lo strumento di backup Veeam Kasten, incluso nell'offerta, è specificamente progettato per semplificare le migrazioni tra diversi cloud.
- **Sicurezza "Zero-Trust" e Governance**: L'architettura si basa su Talos OS, un sistema operativo immutabile senza accesso diretto (né shell, né SSH), che riduce drasticamente la superficie di attacco. Questa approccio è integrato con strumenti di governance come Kyverno per la gestione delle policy e Capsule per una gestione fine dei diritti, costituendo una base solida per una strategia di sicurezza "Zero-Trust".
- **Controllo dei Costi e Integrazione**: La soluzione integra nativamente strumenti FinOps come KubeCost per un monitoraggio preciso dei consumi. Il modello economico è trasparente, basato sulle risorse IaaS consumate, e l'utilizzo di componenti open source riconosciuti (Cilium, Ceph, ArgoCD) facilita l'integrazione nei vostri ecosistemi esistenti.

### A complete and ready-to-use platform  
The solution natively includes a full, consistent stack of cutting-edge open-source tools to cover all needs throughout the application lifecycle:

- **Networking and Security**: Cilium, Hubble, Kyverno, Capsule  
- **Storage**: Rook-Ceph  
- **Continuous Deployment (GitOps)**: ArgoCD  
- **Observability**: Prometheus, Grafana, Loki  
- **Backup and Migration**: Veeam Kasten  
- **Cost Management (FinOps)**: KubeCost

## Architetture di Distribuzione

Proponiamo due architetture distinte per rispondere alle vostre esigenze, sia in ambienti di sviluppo che in ambienti di produzione critici.

### Architecture "Dev/Test"

Ideal for non-production environments, this compact architecture deploys all resources within a single availability zone (AZ). It is designed for agility and cost control.

- **Use cases**: Development, testing, proof-of-concept (POC).
- **Key features**:
    - 1 Control Plane node.
    - 3 Worker nodes (or more).
    - Distributed storage (Ceph) is co-located on the Worker nodes.
    - No high availability SLA.
    - No security restrictions.

<img src={require('./images/archi_overview_1az.png').default} alt="Architecture Mono-AZ" />

### Architettura Produzione (Multi-AZ)

Progettata per l'ambiente di produzione e per applicazioni critiche, questa architettura distribuisce le risorse su tre zone di disponibilità (AZ) per garantire un'alta disponibilità e una resilienza massima, in conformità con i requisiti SecNumCloud.

- **Casi d'uso**: Applicazioni di produzione, servizi critici, piattaforme che richiedono un SLA.
- **Punti chiave**:
    - **Alta disponibilità**: 3 nodi Control Plane distribuiti su 3 AZ.
    - **Archiviazione dedicata**: 3 nodi di archiviazione dedicati e distribuiti per prestazioni e resilienza.
    - **Workers distribuiti**: Almeno 3 nodi worker, uno per AZ.
    - **SLA del 99,90%**.

<img src={require('./images/archi_overview.png').default} alt="Architettura Multi-AZ" />

### Componenti tecnici dettagliati  
L'offerta include in dettaglio i seguenti componenti:

- CNI Cillium, con interfaccia di osservabilità (Hubble)  
- Ingress interni ed esterni con MetalLB e nginx  
- Archiviazione distribuita Rook-Ceph  
- Cert-Manager  
- ArgoCD  
- Stack Prometheus (Prometheus, Grafana, Promtail, Loki)  
- Registry container Harbor  
- Gestione dei costi con KubeCost  
- Politiche di sicurezza avanzate con Kyverno e Capsule  
- Veeam Kasten (backup, automazioni tra ambienti e reversibilità)  
- (opzionale): Autenticazione SSO con un Identity Provider esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)