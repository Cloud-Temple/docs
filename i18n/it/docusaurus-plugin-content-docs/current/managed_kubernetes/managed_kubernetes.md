---
title: Panoramica
---

# Kubernetes gestito

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Scopri le basi e i principi essenziali per padroneggiare la nostra infrastruttura.</p>
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

Kubernetes gestito da Cloud Temple è una soluzione di orchestrazione di container basata su prodotti open source e progettata per offrire un elevato livello di sicurezza, resilienza e automazione sulle piattaforme SecNumcloud di Cloud Temple. Ogni cluster viene distribuito in un ambiente IaaS Cloud-Temple interamente dedicato al cliente.

Questo prodotto è progettato per team con una buona conoscenza di Kubernetes e per gli appassionati di open source che cercano una soluzione nativa, portabile, senza layer proprietario, su un OS minimalista e immutabile progettato per automazione e sicurezza.

### Benefici Chiave

- **Sovranità e Reversibilità** : La soluzione si basa su standard open source (Kubernetes CNCF) per evitare qualsiasi dipendenza tecnologica e garantire la portabilità delle vostre applicazioni. Lo strumento di backup Veeam Kasten, incluso nel prodotto, è appositamente progettato per facilitare le migrazioni da un cloud all'altro.
- **Sicurezza "Zero-Trust" e Governance** : L'architettura si basa su Talos OS, un sistema operativo immutabile senza accesso diretto (né shell, né SSH), il che riduce drasticamente la superficie di attacco. Questo approccio è affiancato da strumenti di governance come Kyverno per la gestione delle policy e Capsule per la gestione fine dei permessi, costituendo una base solida per una strategia di sicurezza "Zero-Trust".
- **Controllo dei Costi e Integrazione** : La soluzione integra nativamente strumenti di FinOps come OpenCost per un monitoraggio preciso dei consumi. Il modello economico è trasparente, basato sulle risorse IaaS consumate, e l'utilizzo di componenti open source riconosciuti (Cilium, Ceph, ArgoCD) facilita l'integrazione nei vostri ecosistemi esistenti.

### Una piattaforma completa e pronta all'uso

La soluzione include nativamente uno stack completo e coerente di strumenti open source all'avanguardia per coprire tutte le esigenze del ciclo di vita delle applicazioni:

- **Rete e Sicurezza** : Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Archiviazione** : Rook-Ceph
- **Deployment Continuo (GitOps)** : ArgoCD
- **Osservabilità** : Prometheus, Grafana, Loki
- **Backup e Migrazione** : Veeam Kasten
- **Gestione dei Costi (FinOps)** : OpenCost

---

## Architetture di Deploy

Proponiamo due architetture distinte per soddisfare le vostre esigenze, sia per ambienti di sviluppo che di produzione critici.

### Architettura "Dev/Test"

Ideale per gli ambienti POC, questa architettura compatta distribuisce tutte le risorse all'interno di una singola zona di disponibilità (AZ).

- **Caso d'uso** : Sviluppo, test, proof-of-concept (POC).
- **Punti chiave** :
  - 1 nodo Control Plane.
  - 3 nodi Workers (ou plus).
  - Lo storage distribuito (Ceph) è co-localizzato sui nodi workers.
  - Non beneficia di un SLA di alta disponibilità.
  - Nessuna restrizione di sicurezza

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Architecture Mono-AZ" />

### Architettura di Produzione (Multi-AZ)

Progettata per la produzione e le applicazioni critiche, questa architettura distribuisce le risorse su tre zone di disponibilità (AZ) per garantire un'alta disponibilità e una resilienza massima, in conformità ai requisiti SecNumCloud.

- **Caso d'uso** : Applicazioni di produzione, servizi critici, piattaforme che richiedono un SLA.
- **Punti chiave** :
  - **Alta Disponibilità** : 3 nodi Control Plane distribuiti su 3 AZ.
  - **Archiviazione Dedicata** : 3 nodi di archiviazione dedicati e distribuiti per prestazioni e resilienza.
  - **Nodi Worker Distribuiti** : Almeno 3 nodi worker, uno per AZ.
  - **Nodi Bare Metal (Opzionale)** : Possibilità di integrare nodi worker di tipo **"Bare Metal"** per esigenze di prestazioni specifiche, in particolare il **supporto delle GPU**.
  - **SLA del 99,90%**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Architecture Multi-AZ" />

---

### Componenti tecnici dettagliati

L'offerta include in dettaglio i seguenti componenti:

- CNI Cilium, con interfaccia di osservabilità (Hubble)
- Ingress interni ed esterni MetalLB e nginx
- Storage distribuito Rook-Ceph
- Cert-Manager
- ArgoCD
- Stack Prometheus (Prometheus, Grafana, Loki)
- Registro container Harbor
- Gestione dei costi con OpenCost
- Strategie di sicurezza avanzate con Kyverno e Capsule
- Veeam Kasten (backup, automazioni tra ambienti e reversibilità)
- Autenticazione SSO con un Identity Provider esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)