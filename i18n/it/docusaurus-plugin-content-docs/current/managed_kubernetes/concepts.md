---
title: Concetti
---

import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Le Nostre Offerte Managed Kubernetes

Cloud Temple propone due offerte distinte per soddisfare le vostre esigenze di orchestrazione dei container:

- **Managed Core Kubernetes**: Un'offerta minimalista che vi fornisce una base Kubernetes robusta e sicura, basata su componenti open-source all'avanguardia. È ideale per i team esperti che desiderano costruire la propria piattaforma su misura.
- **Managed Kubernetes**: Una soluzione completa e pronta all'uso che include uno stack completo di strumenti per la rete, la sicurezza, lo storage, il deployment continuo, l'osservabilità, il backup e la gestione dei costi.

### Tabella Comparativa delle Offerte

| Componente | Managed Core Kubernetes | Managed Kubernetes |
|---|---|---|
| **OS** | Talos | Talos |
| **CNI** | Cilium | Cilium |
| **Osservabilità CNI** | ❌ | Hubble |
| **Load Balancer** | MetalLB | MetalLB |
| **Ingress** | ❌ | Ingress Nginx |
| **Storage** | Rook-Ceph | Rook-Ceph |
| **Deployment Continuo (GitOps)** | ❌ | ArgoCD |
| **Osservabilità** | ❌ | Prometheus, Grafana, Loki |
| **Backup e Migrazione** | ❌ | Veeam Kasten |
| **Gestione dei Costi (FinOps)** | ❌ | OpenCost |
| **Governance e Sicurezza**| ❌ | Kyverno, Capsule |
| **Container Registry**| ❌ | Harbor |
| **Gestione dei Certificati**| ❌ | Cert-Manager |
| **Autenticazione SSO**| ❌ | Integrazione OIDC |

## Presentazione dell'Offerta Managed Kubernetes (completa)

L'offerta **Managed Kubernetes** (chiamata anche "Kube Gestito" o "KM") è una soluzione di containerizzazione Kubernetes gestita da Cloud-Temple, distribuita sotto forma di Macchine Virtuali che operano sulle infrastrutture IaaS Cloud-Temple OpenIaaS.

**Managed Kubernetes** è basato su Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicato a Kubernetes che è leggero e sicuro. È immutabile, senza alcuna shell né accesso SSH, e configurato esclusivamente in modo dichiarativo tramite API gRPC.

L'installazione standardizzata include un insieme di componenti, prevalentemente OpenSource e validati dalla CNCF:

- **CNI Cilium**, con interfaccia di osservabilità (**Hubble**): Cilium è una soluzione di rete per i container Kubernetes (*Container Network Interface*). Gestisce la sicurezza, il load balancing, il service mesh, l'osservabilità, la crittografia, ecc. È un componente di rete fondamentale presente nella maggior parte delle varianti di Kubernetes (OpenShift, AKS, GKE, EKS,...). Abbiamo incluso l'interfaccia grafica **Hubble** per la visualizzazione dei flussi Cilium.

    <img src={cillium} />

- **MetalLB** e **nginx**: Per l'esposizione delle applicazioni web, sono integrate di default 3 *ingress-class* **nginx**:
  - *nginx-external-secured*: esposizione su un IP pubblico, filtrato sul firewall per consentire solo IP noti (utilizzato per le interfacce grafiche dei vari prodotti e l'API Kubernetes)
  - *nginx-external*: esposizione su un secondo IP pubblico non filtrato (o filtro specifico del cliente)
  - *nginx-internal*: esposizione solo su un IP interno

    Per i servizi "non web", un load-balancer **MetalLB** permette di esporre servizi internamente o su IP pubblici. (il che consente di distribuire altri ingress, come ad esempio un WAF)

- **Storage Distribuito Rook-Ceph**: per l'archiviazione dei volumi persistenti (PV), uno storage distribuito OpenSource **Ceph** è integrato nella piattaforma. Permette di utilizzare le *storage-class* *ceph-block*, *ceph-bucket* e *ceph-filesystem*. Viene utilizzato uno storage con **7500 IOPS**, che garantisce alte prestazioni. Nei deployment di produzione (su 3 AZ), i nodi di storage sono dedicati (1 nodo per AZ); nei deployment fuori produzione (1 AZ), lo storage è condiviso con i worker node.

- **Cert-Manager**: il gestore di certificati OpenSource **Cert-Manager** è integrato nativamente nella piattaforma.

- **ArgoCD** è a vostra disposizione per i deployment automatizzati tramite una catena di **CI/CD**.

- Stack **Prometheus** (Prometheus, Grafana, Loki): i cluster Managed Kubernetes vengono consegnati in standard con uno stack OpenSource completo **Prometheus** per l'osservabilità, che include:
  - **Prometheus**
  - **Grafana**, con numerosi dashboard
  - **Loki**: i log della piattaforma vengono esportati nello storage S3 di Cloud-Temple (e integrati in Grafana).

    <img src={grafana} />

- **Harbor** è una **Container Registry** che vi permette di archiviare le immagini dei vostri container o i vostri chart Helm direttamente nel cluster. Esegue **scansioni delle vulnerabilità** sulle immagini e può firmarle digitalmente. **Harbor** consente anche sincronizzazioni con altri registry. ([https://goharbor.io/](https://goharbor.io/))

- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) è uno strumento di gestione dei costi (FinOps) per Kubernetes. Vi permette di monitorare in dettaglio il consumo delle risorse Kubernetes e di effettuare chargeback per progetto/namespace.

- Politiche di sicurezza avanzate con **Kyverno** e **Capsule**:
  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) è un admission controller per Kubernetes che permette di applicare politiche. È uno strumento essenziale per la governance e la sicurezza in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) è uno strumento di gestione delle autorizzazioni che facilita la gestione dei diritti in Kubernetes. Introduce la nozione di *tenant* che permette di centralizzare e delegare autorizzazioni su più namespace. Tramite **Capsule**, gli utenti della piattaforma Kubernetes Gestito dispongono di diritti limitati ai soli propri namespace.

- **Veeam Kasten** (noto anche come 'k10') è una soluzione per il **backup** dei workload Kubernetes.

    Permette di salvare un deployment completo: manifest, volumi, ecc., nello storage a oggetti S3 di Cloud-Temple. **Kasten** utilizza **Kanister** per consentire backup applicativi coerenti, ad esempio per i database ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

    **Kasten** è uno strumento cross-platform che può funzionare con altri cluster Kubernetes (OpenShift, Hyperscaler,...). Può quindi essere utilizzato per scenari di reversibilità o migrazione (K10 gestisce gli adattamenti necessari tramite *trasformazioni*, ad esempio un cambio di ingress-class), ma anche di "refresh" (esempio: ripristino pianificato di un ambiente di produzione in pre-produzione).

- **Autenticazione SSO** con un Identity Provider Esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)

## SLA e Informazioni sul Supporto

- **Disponibilità garantita (produzione 3 AZ)**: 99,90%
- **Supporto**: N1/N2/N3 incluso per il perimetro base (infrastruttura e operatori standard).
- **Impegno di Tempo di Ripristino (ITR)**: secondo il contratto quadro di Cloud Temple.
- **Manutenzione (MCO)**: patching regolare di Talos / Kubernetes / operatori standard da parte dell'MSP, senza interruzione del servizio (rolling upgrade).

I tempi di presa in carico e di ripristino dipendono dalla gravità dell'incidente, in conformità con la griglia di supporto (da P1 a P4).

## Politica delle Versioni e Ciclo di Vita

- **Kubernetes supportato:** N-2 (3 release maggiori all'anno, circa ogni 4 mesi). Ogni release è supportata ufficialmente per 12 mesi, il che garantisce una finestra di supporto Cloud Temple di ~16 mesi massimi per versione.
- **Talos OS:** allineato alle versioni stabili di Kubernetes.
  - Ogni branch viene mantenuto per circa 12 mesi (incluse le patch di sicurezza).
  - Cadenza di upgrade consigliata: 3 volte l'anno, in coerenza con gli upgrade di Kubernetes.
  - Le patch critiche (CVE, kernel) vengono applicate tramite rolling upgrade, senza interruzione del servizio.
- **Operatori standard:** aggiornati entro 90 giorni dalla release stabile.
- **Aggiornamenti:**
  - **Maggiori** (Kubernetes N+1, Talos X+1): pianificati 3 volte/anno, come rolling update.
  - **Minori**: applicati automaticamente entro 30-60 giorni.
- **Deprecazione:** versione N-3 → fine del supporto entro 90 giorni dalla pubblicazione di N.

## Nodi Kubernetes

### Produzione (multi-zonale)

<img src={archi_overview} />

Per un deployment "di produzione" (multi-zonale), vengono utilizzate le seguenti macchine:

| **AZ**  | **Macchina**   | **vCores** | **RAM** | **Storage Locale**  |
|---|---|---|---|---|
| AZ07  | Git Runner   | 4  | 8 GB | OS: 64 GB  |
| AZ05  | Control Plane 1   | 8  | 12 GB | OS: 64 GB  |
| AZ06  | Control Plane 2   | 8  | 12 GB | OS: 64 GB  |
| AZ07  | Control Plane 3   | 8  | 12 GB | OS: 64 GB  |
| AZ05  | Storage Node 1    | 12 | 24 GB | OS: 64 GB + Ceph minimo 500 GB (*) |
| AZ06  | Storage Node 2    | 12 | 24 GB | OS: 64 GB + Ceph minimo 500 GB (*)|
| AZ07  | Storage Node 3    | 12 | 24 GB | OS: 64 GB + Ceph minimo 500 GB (*)|
| AZ05  | Worker Node 1 (**)   | 12 | 24 GB | OS: 64 GB |
| AZ06  | Worker Node 2 (**)   | 12 | 24 GB | OS: 64 GB |
| AZ07  | Worker Node 3 (**)   | 12 | 24 GB | OS: 64 GB |

(*): Ogni nodo di storage viene consegnato con un minimo di 500 GB di spazio disco, per uno storage utile Ceph distribuito di 500 GB (i dati vengono replicati su ogni AZ, quindi x3). Lo spazio libero disponibile per il cliente è di circa 350 GB. Questa dimensione iniziale può essere aumentata al momento della costruzione, o in seguito, in base alle esigenze. Vengono applicati dei quota su Ceph, con una distribuzione Block/File.

(**): La dimensione e il numero dei Worker Node possono essere adattati in base alle esigenze di capacità di calcolo del cliente. Il numero minimo di Worker Node è 3 (1 per AZ), e si consiglia di aumentarne il numero per gruppi di 3 per mantenere una distribuzione multi-zonale coerente. La dimensione del Worker Node può essere adattata, con un minimo di 12 core e 24 GB di RAM; il limite superiore per Worker Node è determinato dalla dimensione degli hypervisor utilizzati (quindi potenzialmente 112 core/1536 GB di RAM con blade Performance 3). Il numero di Worker Node è limitato a 100. La CNCF consiglia di avere Worker Node di dimensioni identiche. Il limite di pod per Worker Node è di 110.

### Dev/Test

<img src={archi_overview_1az} />

Per una versione "dev/test", vengono distribuiti le seguenti macchine:

| **AZ**  | **Macchina**   | **vCores** | **RAM** | **Storage Locale**  |
|---|---|---|---|---|
| AZ0n  | Git Runner   | 4  | 8 GB | OS: 30 GB  |
| AZ0n  | Control Plane    | 8  | 12 GB | OS: 64 GB  |
| AZ0n  | Worker Node 1 (**)   | 12 | 24 GB | OS: 64 GB + Ceph minimo 300 GB (*) |
| AZ0n  | Worker Node 2 (**)   | 12 | 24 GB | OS: 64 GB + Ceph minimo 300 GB (*) |
| AZ0n  | Worker Node 3 (**)   | 12 | 24 GB | OS: 64 GB + Ceph minimo 300 GB (*) |

(*): 3 Worker Node vengono utilizzati come Storage Node e vengono consegnati con un minimo di 300 GB di spazio disco, per uno storage utile distribuito di 300 GB (i dati vengono replicati tre volte). Lo spazio libero disponibile per il cliente è di circa 150 GB. Questa dimensione iniziale può essere aumentata al momento della costruzione, o in seguito, in base alle esigenze.

(**): La dimensione e il numero dei Worker Node possono essere adattati in base alle esigenze di capacità di calcolo del cliente. Il numero minimo di Worker Node è 3 (a causa della replicazione dello storage). La dimensione del Worker Node può essere adattata, con un minimo di 12 core e 24 GB di RAM; il limite superiore per Worker Node è determinato dalla dimensione degli hypervisor utilizzati (quindi potenzialmente 112 core/1536 GB di RAM con blade Performance 3). Il numero di Worker Node è limitato a 250. La CNCF consiglia di avere Worker Node di dimensioni identiche. Il limite di pod per Worker Node è di 110.

## RACI

### Architettura e Infrastruttura

| **Attività**                                                                 | **Cliente** | **Cloud Temple** |
|---|---|---|
| Definire l'architettura globale del servizio Kubernetes                      | C          | RA                     |
| Dimensionare il servizio Kubernetes (numero di nodi, risorse)                | C          | RA                     |
| Installare il servizio Kubernetes con una configurazione predefinita          | I          | RA                     |
| Configurare il servizio Kubernetes                                            | C          | RA                     |
| Configurare la rete di base del servizio Kubernetes                           | I          | RA                     |
| Distribuire la configurazione iniziale delle identità e degli accessi         | C          | RA                     |
| Definire la strategia di scaling e alta disponibilità                         | C          | RA                     |

### Gestione dei Progetti e delle Applicazioni Aziendali

| **Attività**                                          | **Cliente** | **Cloud Temple** |
|---|---|---|
| Creare e gestire i progetti Kubernetes                | RA         | I*                     |
| Distribuire e gestire le applicazioni in Kubernetes   | RA         | I*                     |
| Configurare le pipeline CI/CD                         | RA         | I*                     |
| Gestire le immagini dei container e i registry        | RA         | I*                     |

*può passare a "C" in base al contratto di servizi gestiti

### Monitoraggio e Prestazioni

| **Attività**                                            | **Cliente** | **Cloud Temple** |
|---|---|---|
| Monitorare le prestazioni del servizio Kubernetes       | I          | RA*                    |
| Monitorare le prestazioni delle applicazioni            | RA         |                        |
| Gestire gli alert relativi al servizio Kubernetes       | I          | RA*                    |
| Gestire gli alert relativi alle applicazioni            | RA         |                        |

(*): *Solo Cluster di Produzione. In Dev/Test il cliente è completamente autonomo e responsabile.*

### Manutenzione e Aggiornamenti delle Infrastrutture

| **Attività**                                             | **Cliente** | **Cloud Temple** |
|---|---|---|
| Aggiornare il servizio Kubernetes/OS                     | C          | RA                     |
| Applicare le patch di sicurezza a Kubernetes             | C          | RA                     |
| Aggiornare le applicazioni distribuite (operatori*)      | C          | RA                     |

*Pacchetto operatori incluso su Managed Kube - vedere capitoli: Pacchetti Helm Gestiti

### Sicurezza

| **Attività**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Gestire la sicurezza del servizio Kubernetes                              | RA         | RA*                    |
| Configurare e gestire le politiche di sicurezza dei pod                   | RA         | I                      |
| Gestire i certificati SSL/TLS per il servizio Kubernetes                  | C          | RA*                    |
| Gestire i certificati SSL/TLS per le applicazioni                         | RA         | I                      |
| Implementare e gestire il controllo degli accessi basato sui ruoli base (RBAC) | C     | R*                     |
| Implementare e gestire il controllo degli accessi basato sui ruoli del cliente (RBAC) | RA | I                 |

(*): *Solo Cluster di Produzione. In Dev/Test il cliente è completamente autonomo e responsabile.*

### Backup e Ripristino di Emergenza

| **Attività**                                                                 | **Cliente** | **Cloud Temple** |
|---|---|---|
| Definire la strategia di backup per il servizio Kubernetes                   | I         | RA                    |
| Implementare e gestire i backup del servizio Kubernetes                      | I         | RA                    |
| Definire la strategia di backup per le applicazioni                          | RA*         | I*                   |
| Implementare e gestire i backup delle applicazioni                           | RA*         | I*                   |
| Testare le procedure di ripristino di emergenza per il servizio Kubernetes   | CI         | RA                   |
| Testare le procedure di ripristino di emergenza per le applicazioni          | RA*         | CI*                   |

*può passare a "CI | RA" in base al contratto di servizi gestiti

### Supporto e Risoluzione dei Problemi

| **Attività**                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Fornire supporto di livello 1 per l'infrastruttura        | I          | RA                     |
| Fornire supporto di livello 2 e 3 per l'infrastruttura    | I          | RA                     |
| Risolvere i problemi relativi al servizio Kubernetes      | C          | RA                     |
| Risolvere i problemi relativi alle applicazioni           | RA         | I                      |

### Gestione della Capacità ed Evoluzione

*Solo Cluster di Produzione. In Dev/Test il cliente è completamente autonomo e responsabile.*

| **Attività**                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Monitorare l'utilizzo delle risorse Kubernetes            | C         | RA                     |
| Pianificare l'evoluzione della capacità del servizio      | RA         | C                      |
| Implementare i cambiamenti di capacità                    | I          | RA                     |
| Gestire l'evoluzione delle applicazioni e delle loro risorse | RA      | I                      |

### Documentazione e Conformità

| **Attività**                                                  | **Cliente** | **Cloud Temple** |
|---|---|---|
| Mantenere la documentazione del servizio Kubernetes           | I          | RA                     |
| Mantenere la documentazione delle applicazioni                | RA         | I                      |
| Garantire la conformità del servizio Kubernetes               | I          | RA                     |
| Garantire la conformità delle applicazioni                    | RA         | I                      |
| Effettuare audit del servizio Kubernetes                      | I          | RA                     |
| Effettuare audit delle applicazioni                           | RA         | I                      |

### Gestione degli Operatori/CRD Kubernetes (incluso nell'offerta)

| **Attività**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Messa a disposizione del catalogo di Operatori predefinito                | CI         | RA                     |
| Aggiornamento degli Operatori                                             | CI         | RA                     |
| Monitoraggio dello stato degli Operatori                                  | CI         | RA                     |
| Risoluzione dei problemi relativi agli Operatori                          | CI         | RA                     |
| Gestione delle autorizzazioni degli Operatori                             | CI         | RA                     |
| Gestione delle risorse degli Operatori (aggiunta/rimozione)               | CI         | RA                     |
| Backup dei dati delle risorse degli Operatori                             | CI         | RA                     |
| Supervisione delle risorse degli Operatori                                | CI         | RA                     |
| Ripristino dei dati delle risorse degli Operatori                         | CI         | RA                     |
| Audit di sicurezza degli Operatori                                        | CI         | RA                     |
| Supporto degli Operatori                                                  | CI         | RA                     |
| Gestione delle licenze degli operatori                                    | CI         | RA                     |
| Gestione dei piani di supporto specifici per gli operatori                | CI         | RA                     |

*Pacchetto operatori incluso su Managed Kube - vedere capitoli: Pacchetti Helm Gestiti

### Gestione delle Applicazioni/Operatori/CRD Kubernetes del Cliente

*Solo Cluster di Produzione. In Dev/Test il cliente è completamente autonomo e responsabile.*

| **Attività**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Distribuzione delle CRD                                                   | I*         | RA*                    |
| Aggiornamento degli Operatori                                             | RA         | I                     |
| Monitoraggio dello stato degli Operatori                                  | RA         | I                     |
| Risoluzione dei problemi relativi agli Operatori                          | RA         | I                     |
| Gestione delle autorizzazioni degli Operatori                             | RA         | I                     |
| Gestione delle risorse degli Operatori (aggiunta/rimozione)               | RA         | I                     |
| Backup dei dati delle risorse degli Operatori                             | RA         | I                     |
| Supervisione delle risorse degli Operatori                                | RA         | I                     |
| Ripristino dei dati delle risorse degli Operatori                         | RA         | I                     |
| Audit di sicurezza degli Operatori                                        | RA         | I                     |
| Supporto degli Operatori                                                  | RA         | I                     |
| Gestione delle licenze degli operatori                                    | RA         | I                     |
| Gestione dei piani di supporto specifici per gli operatori                | RA         | I                     |

Alcuni servizi degli operatori possono essere coperti in base al contratto di servizi gestiti.

*può passare a "A | RC" in base al contratto di servizi gestiti

### Assistenza Applicativa

| **Attività**                                | **Cliente** | **Cloud Temple** |
|---|---|---|
| Assistenza applicativa (servizio esterno)   | RA         | I                      |

Il supporto applicativo può essere fornito tramite un servizio aggiuntivo.

### RACI (sintesi)

- Cloud Temple: responsabile e attore (RA) della base Kubernetes, sicurezza del cluster, backup infrastruttura, supervisione, CRD.
- Cliente: responsabile e attore (RA) dei progetti applicativi, operatori aziendali, pipeline CI/CD, backup applicativi.
- Zona "grigia": adattamenti ed estensioni (IAM, operatori specifici, irrigidimento della conformità/sicurezza del cluster) - fatturati in modalità progetto.
