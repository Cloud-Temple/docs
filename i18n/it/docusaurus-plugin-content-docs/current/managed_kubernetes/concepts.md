---
title: Concetti
---

import cillium from './images/cillium.png'
import grafana from './images/grafana.png'
import archi_overview from './images/archi_overview.png'
import archi_overview_1az from './images/archi_overview_1az.png'

## Presentazione di Managed Kubernetes

L'offerta **Managed Kubernetes** (nota anche come "Kub Managé" o "KM") è una soluzione di containerizzazione Kubernetes gestita da Cloud-Temple, distribuita sotto forma di Macchine Virtuali che operano sull'infrastruttura IaaS Cloud-Temple OpenIaaS.

**Managed Kubernetes** si basa su Talos Linux (https://www.talos.dev/), un sistema operativo dedicato a Kubernetes, leggero e sicuro. È immutabile, privo di shell e accesso SSH, e configurato esclusivamente in modo dichiarativo tramite API gRPC.

L'installazione standard include un insieme di componenti, principalmente Open Source e validati dal CNCF:

- **CNI Cillium**, con interfaccia di osservabilità (**Hubble**): Cillium è una soluzione di rete per container Kubernetes (*Container Network Interface*). Gestisce sicurezza, load balancing, service mesh, osservabilità, crittografia, ecc. È un componente di rete fondamentale presente nella maggior parte delle varianti di Kubernetes (OpenShift, AKS, GKE, EKS, ...). Abbiamo integrato l'interfaccia grafica **Hubble** per una visualizzazione dei flussi Cillium.

    <img src={cillium} />

- **MetalLB** e **nginx**: per l'esposizione delle applicazioni Web, sono integrate di default tre *ingress-class* **nginx**:
    - *nginx-external-secured*: esposizione su un'IP pubblica, filtrata dal firewall per consentire solo IP noti (utilizzato per le interfacce grafiche dei diversi prodotti e per l'API Kubernetes)
    - *nginx-external*: esposizione su una seconda IP pubblica non filtrata (o con filtraggio specifico per il cliente)
    - *nginx-internal*: esposizione su un'IP interna esclusivamente

    Per i servizi "non web", un load-balancer **MetalLB** permette di esporre servizi internamente o su IP pubbliche (consentendo così il deployment di altri ingress, ad esempio un WAF)

- **Archiviazione distribuita Rook-Ceph**: per l'archiviazione dei volumi persistenti (PV), è integrata nella piattaforma un'archiviazione distribuita **Ceph** Open Source. Permette l'uso delle *storage-classes* *ceph-block*, *ceph-bucket* e *ceph-filesystem*. Viene utilizzata un'archiviazione con **7500 IOPS**, garantendo prestazioni elevate. Nei deployment di produzione (su 3 AZ), i nodi di archiviazione sono dedicati (1 nodo per AZ); nei deployment non di produzione (1 AZ), l'archiviazione è condivisa con i nodi worker.

- **Cert-Manager**: il gestore di certificati Open Source **Cert-Manager** è integrato nativamente nella piattaforma.

- **ArgoCD** è a vostra disposizione per i deployment automatizzati tramite una pipeline di **CI/CD**.

- Stack **Prometheus** (Prometheus, Grafana, Loki): i cluster Managed Kubernetes vengono forniti di default con uno stack Open Source completo **Prometheus** per l'osservabilità, che include:
    - **Prometheus**
    - **Grafana**, con numerosi dashboard
    - **Loki**: i log della piattaforma vengono esportati nel storage S3 di Cloud-Temple (e integrati in Grafana).

    <img src={grafana} />

- **Harbor** è un **Container registry** che vi permette di archiviare immagini dei vostri container o i vostri chart Helm direttamente nel cluster. Esegue **scan di vulnerabilità** sulle vostre immagini e può firmarle digitalmente. **Harbor** permette anche sincronizzazioni con altri registri. (https://goharbor.io/)

- **OpenCost** (https://github.com/opencost/opencost) è uno strumento per la gestione dei costi (Finops) per Kubernetes. Vi permette di monitorare in modo dettagliato il consumo delle risorse Kubernetes e di effettuare la sottofatturazione per progetto/namespace.

- Strategie di sicurezza avanzate con **Kyverno** e **Capsule**:
    - **Kyverno** (https://kyverno.io/) è un controller di ammissione per Kubernetes che permette di applicare strategie. È uno strumento essenziale per la governance e la sicurezza in Kubernetes.
    - **Capsule** (https://projectcapsule.dev/) è uno strumento per la gestione dei permessi che semplifica la gestione dei diritti in Kubernetes. Introduce il concetto di *tenant*, che permette di centralizzare e delegare i permessi su più namespace. Attraverso **Capsule**, gli utenti della piattaforma Kubernetes gestita dispongono quindi di diritti limitati ai propri namespace.

- **Veeam Kasten** (noto anche come 'k10') è una soluzione per la **protezione** dei carichi di lavoro Kubernetes.

    Permette di eseguire backup completi: manifesti, volumi, ecc. verso il storage oggetto S3 di Cloud-Temple. **Kasten** utilizza **Kanister** per consentire backup coerenti a livello applicativo, ad esempio per database (https://docs.kasten.io/latest/usage/blueprints/).

    **Kasten** è uno strumento cross-platform che può funzionare con altri cluster Kubernetes (OpenShift, Hyperscaler, ...). Può quindi essere utilizzato per scenari di reversibilità o migrazione (K10 gestisce le eventuali adattamenti tramite *trasformazioni*, ad esempio un cambiamento di ingress-class), ma anche per "refresh" (esempio: ripristino pianificato di un ambiente di produzione in pre-produzione).

- (opzionale): **Autenticazione SSO** con un Identity Provider esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)

## SLA e informazioni sul supporto
- **Disponibilità garantita (produzione 3 AZ)**: 99,90 %
- **Supporto**: N1/N2/N3 incluso per il perimetro base (infrastruttura e operatori standard).
- **Impegno sul tempo di ripristino (ETR)**: secondo il contratto quadro Cloud Temple.
- **Manutenzione (MCO)**: aggiornamenti regolari di Talos / Kubernetes / operatori standard da parte del MSP, senza interruzioni del servizio (aggiornamento rolling).

I tempi di intervento e ripristino dipendono dalla gravità dell'incidente, conformemente alla griglia di supporto (P1 a P4).

## Version policy & lifecycle

- **Supported Kubernetes:** N-2 (3 major releases per year, approximately every 4 months). Each release is officially supported for 12 months, ensuring a maximum Cloud Temple support window of ~16 months per version.
- **Talos OS:** aligned with stable Kubernetes releases.
  - Each branch is maintained for approximately 12 months (including security patches).
  - Recommended upgrade frequency: 3 times per year, in alignment with Kubernetes upgrades.
  - Critical patches (CVE, kernel) are applied via rolling upgrade, without service interruption.
- **Standard operators:** updated within 90 days following stable release.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): scheduled 3 times per year, via rolling update.
  - **Minor:** applied automatically within 30 to 60 days.
- **Deprecation:** version N-3 → end of support within 90 days after the release of N.

## Nodi Kubernetes

### Produzione (multi-zonale)
<img src={archi_overview} />

Per un deployment "di produzione" (multi-zonale), vengono utilizzate le seguenti macchine:

| **AZ**  | **Macchina**         | **vCores** | **RAM**  | **Archiviazione locale**         |
|---------|----------------------|------------|----------|----------------------------------|
| AZ07  | Git Runner           | 4          | 8 GB     | OS: 30 GB                        |
| AZ05  | Control Plane 1      | 8          | 12 GB    | OS: 64 GB                        |
| AZ06  | Control Plane 2      | 8          | 12 GB    | OS: 64 GB                        |
| AZ07  | Control Plane 3      | 8          | 12 GB    | OS: 64 GB                        |
| AZ05  | Storage Node 1       | 12         | 24 GB    | OS: 64 GB + Ceph 500 GB minimo (*) |
| AZ06  | Storage Node 2       | 12         | 24 GB    | OS: 64 GB + Ceph 500 GB minimo (*) |
| AZ07  | Storage Node 3       | 12         | 24 GB    | OS: 64 GB + Ceph 500 GB minimo (*) |
| AZ05  | Worker Node 1 (**)   | 12         | 24 GB    | OS: 64 GB                        |
| AZ06  | Worker Node 2 (**)   | 12         | 24 GB    | OS: 64 GB                        |
| AZ07  | Worker Node 3 (**)   | 12         | 24 GB    | OS: 64 GB                        |

(*) : Ogni nodo di archiviazione viene fornito con un minimo di 500 GB di spazio disco, per un utilizzo effettivo di archiviazione Ceph distribuita di 500 GB (i dati sono replicati in ogni AZ, quindi ×3). Lo spazio disponibile per il cliente è di circa 350 GB. Questa dimensione iniziale può essere aumentata al momento della costruzione o in un secondo momento, in base alle esigenze.

(**) : La dimensione e il numero di Worker Nodes possono essere adattati in base alle esigenze di capacità di calcolo del cliente. Il numero minimo di Worker Nodes è di 3 (1 per AZ), e si consiglia di aumentarne il numero in lotti di 3 per mantenere una distribuzione coerente multi-zonale. La dimensione dei Worker Nodes può essere personalizzata, con un minimo di 12 core e 24 GB di RAM; il limite superiore per ogni Worker Node è determinato dalla dimensione degli hypervisor utilizzati (potenzialmente fino a 112 core/1536 GB di RAM con le lame Performance 3). Il numero massimo di Worker Nodes è limitato a 100. Il CNCF raccomanda di utilizzare Worker Nodes della stessa dimensione. Il limite massimo di pod per Worker Node è di 110.

### Dev/Test
<img src={archi_overview_1az} />

Per una versione "dev/test", vengono distribuite le seguenti macchine:

| **AZ**  | **Macchina**   | **vCores** | **RAM** | **Archiviazione locale**  |
|---------|----------------|------------|---------|--------------------------|
| AZ0n  | Git Runner     | 4          | 8 GB    | OS: 30 GB                |
| AZ0n  | Control Plane  | 8          | 12 GB   | OS: 64 GB                |
| AZ0n  | Worker Node 1 (**) | 12       | 24 GB   | OS: 64 GB + Ceph min. 300 GB (*) |
| AZ0n  | Worker Node 2 (**) | 12       | 24 GB   | OS: 64 GB + Ceph min. 300 GB (*) |
| AZ0n  | Worker Node 3 (**) | 12       | 24 GB   | OS: 64 GB + Ceph min. 300 GB (*) |

(*) : 3 nodi Worker vengono utilizzati come nodi di archiviazione e sono forniti con almeno 300 GB di spazio disco, per un archiviazione utile distribuita di 300 GB (i dati sono replicati tre volte). Lo spazio disponibile per il cliente è di circa 150 GB. Questa dimensione iniziale può essere aumentata al momento della costruzione o in un secondo momento, in base alle esigenze.

(**) : La dimensione e il numero dei nodi Worker possono essere adattati in base alle esigenze di capacità di calcolo del cliente. Il numero minimo di nodi Worker è 3 (a causa della replica del dato). La dimensione dei nodi Worker può essere personalizzata, con un minimo di 12 core e 24 GB di RAM; il limite superiore per nodo Worker è determinato dalla dimensione degli hypervisor utilizzati (potenzialmente fino a 112 core/1536 GB di RAM con blade Performance 3). Il numero massimo di nodi Worker è 250. Il CNCF raccomanda di utilizzare nodi Worker della stessa dimensione. Il limite massimo di pod per nodo Worker è 110.

## RACI

### Architecture & Infrastructure

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|------------------------------------------------------------------------------|------------|------------------------|
| Define the overall architecture of the Kubernetes service                   | C          | RA                     |
| Size the Kubernetes service (number of nodes, resources)                    | C          | RA                     |
| Install the Kubernetes service with default configuration                   | I          | RA                     |
| Configure the Kubernetes service                                            | C          | RA                     |
| Set up the base network for the Kubernetes service                          | I          | RA                     |
| Deploy initial configuration for identities and access                      | C          | RA                     |
| Define scaling and high availability strategy                               | C          | RA                     |

### Gestione dei progetti e delle applicazioni aziendali

| **Attività**                                          | **Cliente** | **Cloud Temple** |
|-------------------------------------------------------|-------------|------------------------|
| Creare e gestire i progetti Kubernetes                | RA          | I*                     |
| Distribuire e gestire le applicazioni in Kubernetes   | RA          | I*                     |
| Configurare i pipeline CI/CD                          | RA          | I*                     |
| Gestire le immagini dei contenitori e i registri      | RA          | I*                     |

*può passare a "C" in base al contratto di infrastruttura gestita

### Monitoraggio e prestazioni

| **Attività**                                            | **Cliente** | **Cloud Temple** |
|---------------------------------------------------------|-------------|------------------------|
| Monitorare le prestazioni del servizio Kubernetes       | I           | RA*                    |
| Monitorare le prestazioni delle applicazioni            | RA          |                        |
| Gestire le allerte relative al servizio Kubernetes       | I           | RA*                    |
| Gestire le allerte relative alle applicazioni           | RA          |                        |

(*) : *Solo cluster di produzione. In ambiente di sviluppo/test il cliente è completamente autonomo e responsabile.*

### Manutenzione e aggiornamenti Infrastrutture

| **Attività**                                             | **Cliente** | **Cloud Temple** |
|----------------------------------------------------------|-------------|------------------------|
| Aggiornare il servizio Kubernetes/OS                    | C           | RA                     |
| Applicare i patch di sicurezza a Kubernetes              | C           | RA                     |
| Aggiornare le applicazioni distribuite (operatori*)      | C           | RA                     |

*Pacchetto operatore incluso nel Managed Kube - vedere capitoli: Pacchetti Helm gestiti

### Security

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Manage security for the Kubernetes service                                | RA         | RA*                    |
| Configure and manage pod security policies                                | RA         | I                      |
| Manage SSL/TLS certificates for the Kubernetes service                    | C          | RA*                    |
| Manage SSL/TLS certificates for applications                              | RA         | I                      |
| Implement and manage Role-Based Access Control (RBAC)                     | C          | R*                     |
| Implement and manage Client-Based Role-Based Access Control (RBAC)        | RA         | I                      |

(*) : *Production cluster only. In Dev/Test, the client has full autonomy and responsibility.*

### Backup and Disaster Recovery

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|------------------------------------------------------------------------------|------------|------------------------|
| Define the backup strategy for the Kubernetes service                        | I         | RA                    |
| Implement and manage backups for the Kubernetes service                      | I         | RA                    |
| Define the backup strategy for applications                                  | RA*         | I*                   |
| Implement and manage backups for applications                                | RA*         | I*                   |
| Test disaster recovery procedures for the Kubernetes service                | CI         | RA                   |
| Test disaster recovery procedures for applications                           | RA*         | CI*                   |

*May change to "CI | RA" depending on the managed services contract

### Support and troubleshooting

| **Activity**                                              | **Client** | **Cloud Temple** |
|-----------------------------------------------------------|------------|------------------------|
| Provide level 1 support for infrastructure                | I          | RA                     |
| Provide level 2 and 3 support for infrastructure          | I          | RA                     |
| Resolve issues related to the Kubernetes service          | C          | RA                     |
| Resolve issues related to applications                    | RA         | I                      |

### Gestione delle capacità e evoluzione

*Cluster di Produzione soltanto. In Dev/Test il cliente è completamente autonomo e responsabile.*

| **Attività**                                              | **Cliente** | **Cloud Temple** |
|-----------------------------------------------------------|-------------|------------------------|
| Monitorare l'utilizzo delle risorse Kubernetes           | C           | RA                     |
| Pianificare l'evoluzione delle capacità del servizio     | RA          | C                      |
| Implementare i cambiamenti delle capacità                 | I           | RA                     |
| Gestire l'evoluzione delle applicazioni e delle loro risorse | RA       | I                      |

### Documentazione e conformità

| **Attività**                                                  | **Cliente** | **Cloud Temple** |
|---------------------------------------------------------------|-------------|------------------------|
| Mantenere la documentazione del servizio Kubernetes           | I           | RA                     |
| Mantenere la documentazione delle applicazioni                | RA          | I                      |
| Garantire la conformità del servizio Kubernetes                | I           | RA                     |
| Garantire la conformità delle applicazioni                    | RA          | I                      |
| Eseguire audit del servizio Kubernetes                        | I           | RA                     |
| Eseguire audit delle applicazioni                             | RA          | I                      |

### Operator/CRD Kubernetes Management (included in the offer)

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Provisioning of default Operators catalog                                   | CI         | RA                     |
| Updating Operators                                                         | CI         | RA                     |
| Monitoring Operators status                                                | CI         | RA                     |
| Troubleshooting Operator-related issues                                    | CI         | RA                     |
| Managing Operator permissions                                              | CI         | RA                     |
| Managing Operator resources (addition/removal)                             | CI         | RA                     |
| Backup of Operator resources data                                          | CI         | RA                     |
| Monitoring Operator resources                                              | CI         | RA                     |
| Restoration of Operator resources data                                     | CI         | RA                     |
| Security audit of Operators                                                | CI         | RA                     |
| Operator support                                                           | CI         | RA                     |
| License management for operators                                           | CI         | RA                     |
| Management of specific support plans for operators                         | CI         | RA                     |

*Operator package included in Managed Kube – see chapters: Managed Helm Packages

### Gestione delle applicazioni/operatori/CRD Kubernetes (dal cliente)

*Cluster di Produzione soltanto. In Dev/Test il cliente è completamente autonomo e responsabile.*

| **Attività**                                                              | **Cliente** | **Cloud Temple** |
|---------------------------------------------------------------------------|-------------|------------------------|
| Deploy dei CRD                                                            | I*          | RA*                    |
| Aggiornamento degli Operatori                                              | RA          | I                      |
| Monitoraggio dello stato degli Operatori                                   | RA          | I                      |
| Risoluzione dei problemi legati agli Operatori                            | RA          | I                      |
| Gestione delle autorizzazioni degli Operatori                             | RA          | I                      |
| Gestione delle risorse degli Operatori (aggiunta/rimozione)               | RA          | I                      |
| Backup dei dati delle risorse degli Operatori                             | RA          | I                      |
| Supervisione delle risorse degli Operatori                                | RA          | I                      |
| Ripristino dei dati delle risorse degli Operatori                         | RA          | I                      |
| Audit di sicurezza degli Operatori                                         | RA          | I                      |
| Supporto agli Operatori                                                    | RA          | I                      |
| Gestione delle licenze sugli operatori                                     | RA          | I                      |
| Gestione dei piani di supporto specifici sugli operatori                  | RA          | I                      |

Alcuni servizi operatori possono essere gestiti in base al contratto di infrastruttura gestita.

*può passare a "A | RC" in base al contratto di infrastruttura gestita

### Support applicativo

| **Attività**                                | **Cliente** | **Cloud Temple** |
|---------------------------------------------|-------------|------------------------|
| Supporto applicativo (prestazione esterna) | RA          | I                      |

Un support applicativo può essere fornito tramite una prestazione complementare.

### RACI (sintetico)

- Cloud Temple: responsabile e attore (RA) per la base Kubernetes, sicurezza del cluster, backup infrastruttura, monitoraggio, CRD.
- Cliente: responsabile e attore (RA) per i progetti applicativi, operatori aziendali, pipeline CI/CD, backup applicativi.
- Zona "grigia": adattamenti ed estensioni (IAM, operatori specifici, rafforzamento della conformità/sicurezza del cluster) - fatturati in modalità progetto.