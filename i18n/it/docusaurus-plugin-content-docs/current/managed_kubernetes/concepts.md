---
title: Concetti
---

import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Le nostre offerte Managed Kubernetes

Cloud Temple propone due offerte distinte per soddisfare le vostre esigenze di orchestrazione dei container:

- **Managed Core Kubernetes** : Un prodotto minimalista che fornisce una base Kubernetes solida e sicura, basata su componenti open-source all'avanguardia. È ideale per team esperti che desiderano costruire la propria piattaforma su misura.
- **Managed Kubernetes** : Una soluzione completa e pronta all'uso che include una suite completa di strumenti per la rete, la sicurezza, lo storage, il deployment continuo, l'osservabilità, il backup e la gestione dei costi.

### Tabella comparativa delle offerte

| Componente | Managed Core Kubernetes | Managed Kubernetes |
|---|---|---|
| **OS** | Talos | Talos |
| **CNI** | Cilium | Cilium |
| **Osservabilità CNI** | ❌ | Hubble |
| **Load Balancer** | MetalLB | MetalLB |
| **Ingress** | ❌ | Ingress Nginx |
| **Archiviazione** | Rook-Ceph | Rook-Ceph |
| **Distribuzione Continua (GitOps)** | ❌ | ArgoCD |
| **Osservabilità** | ❌ | Prometheus, Grafana, Loki |
| **Backup e Migrazione** | ❌ | Veeam Kasten |
| **Gestione dei Costi (FinOps)** | ❌ | OpenCost |
| **Governance e Sicurezza**| ❌ | Kyverno, Capsule |
| **Registro Container**| ❌ | Harbor |
| **Gestione dei certificati**| ❌ | Cert-Manager |
| **Autenticazione SSO**| ❌ | Integrazione OIDC |

## Presentazione del prodotto Managed Kubernetes (complète)

L'offerta **Managed Kubernetes** (nota anche come "Kub Managé" o "KM") è una soluzione di containerizzazione Kubernetes gestita da Cloud-Temple, distribuita sotto forma di Macchine Virtuali che operano sulle infrastrutture IaaS Cloud-Temple OpenIaaS.

**Managed Kubernetes** si basa su Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicato a Kubernetes che è leggero e sicuro. È immutabile, senza alcun shell né accesso ssh, e configurato esclusivamente in modo dichiarativo tramite API gRPC.

L'installazione standardizzata include un insieme di componenti, per lo più OpenSource e validati dal CNCF:

- **CNI Cillium**, con interfaccia di osservabilità (**Hubble**): Cillium è una soluzione di networking per i container Kubernetes (*Container Network Interface*). Gestisce la sicurezza, il load balancing, il service mesh, l'osservabilità, la crittografia,  ecc... È un componente di rete fondamentale che si ritrova nella maggior parte delle distribuzioni di Kubernetes (OpenShift, AKS, GKE, EKS,...). Abbiamo incluso l'interfaccia grafica **Hubble** per la visualizzazione dei flussi Cillium.

    <img src={cillium} />

- **MetalLB** e **nginx**: Per l'esposizione delle applicazioni Web, sono integrate di base 3 *ingress-class* **nginx**:
  - *nginx-external-secured*: esposizione su un'IP pubblica, filtrata sul firewall per autorizzare solo IP noti (utilisé pour les interfaces graphiques des différents produits, et l'API Kubernetes)
  - *nginx-external*: esposizione su una seconda IP pubblica non filtrata (ou filtrage spécifique au client)
  - *nginx-internal*: esposizione su un'IP interna esclusivamente

    Per i servizi "non web", un load-balancer **metalLB** consente di esporre servizi internamente o su IP pubblici. (ce qui permet de déployer des autres ingresses, comme par exemple un WAF)

- **Storage distribuito Rook-Ceph**: per lo storage dei volumi persistenti (PV), è integrata nella piattaforma una soluzione di storage distribuito **Ceph** OpenSource. Consente di utilizzare le *storage-classes* *ceph-block*, *ceph-bucket* e *ceph-filesystem*. Viene utilizzato uno storage con **7500 IOPS**, che garantisce elevate prestazioni. Nei deployment di produzione (sur 3 AZ), i nodi di storage sono dedicati (1 noeud par AZ); nei deployment fuori produzione (1 AZ), lo storage è condiviso con i nodi worker.

- **Cert-Manager**: il gestore di certificati OpenSource **Cert-Manager** è integrato nativamente nella piattaforma.

- **ArgoCD** è a vostra disposizione per i vostri deployment automatizzati tramite una catena di **CI/CD**.

- Stack **Prometheus** (Prometheus, Grafana, Loki): i cluster Managed Kubernetes sono forniti in standard con una stack OpenSource completa **Prometheus** per l'osservabilità, includente:
  - **Prometheus**
  - **Grafana**, con numerosi dashboard
  - **Loki**: i log della piattaforma sono esportati verso lo storage S3 Cloud-Temple (et intégrés dans Grafana).

    <img src={grafana} />

- **Harbor** è una **Container registry** che consente di memorizzare le immagini dei vostri container o i vostri chart helm direttamente nel cluster. Esegue **scan di vulnerabilità** sulle vostre immagini e può firmarle digitalmente. **Harbor** consente inoltre sincronizzazioni con altri registries. ([https://goharbor.io/](https://goharbor.io/))

- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) è uno strumento di gestione dei costi (Finops) per Kubernetes. Consente di monitorare finemente il consumo delle risorse Kubernetes e di effettuare una sotto-fatturazione per progetto/namespace.

- Strategie di sicurezza avanzate con **Kyverno** e **Capsule**:
  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) è un controller di ammissione per Kubernetes che consente di applicare policy. È uno strumento essenziale per la governance e la sicurezza in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) è uno strumento di gestione delle permessi che facilita la gestione dei diritti in Kubernetes. Introduce il concetto di *tenant* che consente di centralizzare e delegare le permessi su più namespace. Tramite **Capsule**, gli utenti della piattaforma Kubernetes Managé dispongono quindi di diritti limitati ai propri namespace.

- **Veeam Kasten** (aka 'k10') è una soluzione per il **backup** dei workload Kubernetes.

    Consente di eseguire il backup di un deployment completo: manifest, volumi, ecc... verso lo storage oggetto S3 Cloud-Temple. **Kasten** utilizza **Kanister** per consentire backup applicativi coerenti, ad esempio per i database ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

    **Kasten** è uno strumento cross-platform che può funzionare con altri cluster Kubernetes (OpenShift, Hyperscaler,...). Può quindi essere utilizzato per scenari di reversibilità o migrazione (K10 gère les adaptations éventuelles via des *transformations*, par exemple un changement d'ingress-class), ma anche per il "refresh" (exemple : restauration planifiée d'un environnement de production en pré-production).

- **Autenticazione SSO** con un Identity Provider Esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)

## SLA & Informazioni sul supporto

- **Disponibilità garantita (produzione 3 AZ)** : 99.90 %
- **Supporto** : N1/N2/N3 inclusi per l'ambito di base (infrastruttura e operatori standard).
- **Impegno sui tempi di ripristino (ETR)** : secondo il contratto quadro Cloud Temple.
- **Manutenzione (MCO)** : patching regolare di Talos / Kubernetes / operatori standard da parte del MSP, senza interruzione del servizio (rolling upgrade).

I tempi di presa in carico e di ripristino dipendono dalla gravità dell’incidente, conformemente alla griglia di supporto (P1-P4).

## Politica delle versioni e ciclo di vita

- **Kubernetes supportato :** N-2 (3 release principali all'anno, circa ogni 4 mesi). Ogni release è supportata ufficialmente per 12 mesi, garantendo una finestra di supporto Cloud Temple di ~16 mesi massimo per versione.
- **Talos OS :** allineato alle versioni stabili di Kubernetes.
  - Ogni branch è mantenuta per circa 12 mesi (patch di sicurezza inclusi).
  - Frequenza di upgrade consigliata : 3 volte all'anno, in coerenza con gli upgrade di Kubernetes.
  - I patch critici (CVE, kernel) vengono applicati in rolling upgrade, senza interruzione del servizio.
- **Operatori standard :** aggiornati entro 90 giorni dal rilascio della versione stabile.
- **Aggiornamenti :**
  - **Principali** (Kubernetes N+1, Talos X+1) : pianificate 3 volte/anno, in rolling update.
  - **Minori** : applicate automaticamente entro 30-60 giorni.
- **Deprecazione :** versione N-3 → fine del supporto entro 90 giorni dal rilascio di N.

## Nodi Kubernetes

### Produzione (multi-zonale)

<img src={archi_overview} />

Per un deployment "di produzione" (multi-zonale), vengono utilizzate le seguenti macchine:

| **AZ**  | **Macchina**   | **vCores** | **RAM** | **Storage locale**  |
|---|---|---|---|---|
| AZ07  | Git Runner   | 4  | 8 Go | OS: 64 Go  |
| AZ05  | Control Plane 1   | 8  | 12 Go | OS: 64 Go  |
| AZ06  | Control Plane 2   | 8  | 12 Go | OS: 64 Go  |
| AZ07  | Control Plane 3   | 8  | 12 Go | OS: 64 Go  |
| AZ05  | Storage Node 1    | 12 | 24 Go | OS: 64 Go + Ceph 500 Go minimum (*) |
| AZ06  | Storage Node 2    | 12 | 24 Go | OS: 64 Go + Ceph 500 Go minimum (*)|
| AZ07  | Storage Node 3    | 12 | 24 Go | OS: 64 Go + Ceph 500 Go minimum (*)|
| AZ05  | Worker Node 1 (**)   | 12 | 24 Go | OS: 64 Go |
| AZ06  | Worker Node 2 (**)   | 12 | 24 Go | OS: 64 Go |
| AZ07  | Worker Node 3 (**)   | 12 | 24 Go | OS: 64 Go |

(*) : Ogni nodo di storage è fornito con un minimo di 500 Go di spazio disco, per uno spazio utile Ceph distribuito di 500 Go (i dati sono replicati su ogni AZ, quindi x3). Lo spazio libero disponibile per il cliente è di circa 350 Go. Questa dimensione iniziale può essere aumentata al momento della costruzione o in seguito, in base alle esigenze. Vengono applicati dei quota su Ceph, con una ripartizione Block/File.

(**) : La dimensione e il numero dei Worker Nodes possono essere adattati in base alle esigenze di capacità di calcolo del cliente. Il numero minimo di Worker Nodes è di 3 (1 per AZ), e consigliamo di aumentarne il numero a gruppi di 3 per mantenere una distribuzione multi-zonale coerente. La dimensione dei Worker Nodes può essere adattata, con un minimo di 12 core e 24 Go di RAM; il limite superiore per ogni Worker Node è determinato dalla dimensione degli hypervisor utilizzati (quindi potenzialmente 112 core/1536 Go di RAM con le lame Performance 3). Il numero di Worker Nodes è limitato a 100. Il CNCF consiglia di avere worker nodes di dimensioni identiche. Il limite del numero di pod per Worker Node è di 110.

### Dev/Test

<img src={archi_overview_1az} />

Per una versione "dev/test", vengono distribuite le seguenti macchine:

| **AZ**  | **Macchina**   | **vCores** | **RAM** | **Archiviazione locale**  |
|---|---|---|---|---|
| AZ0n  | Git Runner   | 4  | 8 Go | OS: 30 Go  |
| AZ0n  | Control Plane    | 8  | 12 Go | OS: 64 Go  |
| AZ0n  | Worker Node 1 (**)   | 12 | 24 Go | OS: 64 Go + Ceph 300 Go minimo (*) |
| AZ0n  | Worker Node 2 (**)   | 12 | 24 Go | OS: 64 Go + Ceph 300 Go minimo (*) |
| AZ0n  | Worker Node 3 (**)   | 12 | 24 Go | OS: 64 Go + Ceph 300 Go minimo (*) |

(*) : 3 Worker node vengono utilizzati come Storage node e sono forniti con un minimo di 300 Go di spazio su disco, per un'archiviazione utile distribuita di 300 Go (i dati sono replicati tre volte). Lo spazio libero disponibile per il cliente è di circa 150 Go. Questa dimensione iniziale può essere aumentata al momento della configurazione o in seguito, in base alle esigenze.

(**) : La dimensione e il numero dei Worker Node possono essere adattati in base alle esigenze di capacità di calcolo del cliente. Il numero minimo di Worker node è 3 (a causa della replicazione dell'archiviazione). La dimensione dei Worker Node può essere adattata, con un minimo di 12 core e 24 Go di RAM; il limite superiore per Worker node è determinato dalla dimensione degli hypervisor utilizzati (quindi potenzialmente 112 core/1536 Go di RAM con le lame Performance 3). La quantità di Worker Node è limitata a 250. Il CNCF consiglia di utilizzare worker node di dimensioni identiche. Il limite del numero di pod per Worker Node è 110.

## RACI

### Architettura & Infrastruttura

| **Attività**                                                                 | **Cliente** | **Cloud Temple** |
|---|---|---|
| Definire l'architettura globale del servizio Kubernetes                         | C          | RA                     |
| Dimensionare il servizio Kubernetes (numero di nodi, risorse)            | C          | RA                     |
| Installare il servizio Kubernetes con una configurazione predefinita            | I          | RA                     |
| Configurazione del servizio Kubernetes                                          | C          | RA                     |
| Configurare la rete di base del servizio Kubernetes                           | I          | RA                     |
| Distribuzione della configurazione iniziale di identità e accessi          | C          | RA                     |
| Definire la strategia di scalabilità e alta disponibilità           | C          | RA                     |

### Gestione dei progetti e delle applicazioni di business

| **Attività**                                          | **Cliente** | **Cloud Temple** |
|---|---|---|
| Creare e gestire i progetti Kubernetes                 | RA         | I*                     |
| Distribuire e gestire le applicazioni su Kubernetes    | RA         | I*                     |
| Configurare le pipeline CI/CD                        | RA         | I*                     |
| Gestire le immagini dei container e i registri       | RA         | I*                     |

*può passare a "C" in base al contratto di gestione

### Monitoraggio e prestazioni

| **Attività**                                            | **Cliente** | **Cloud Temple** |
|---|---|---|
| Monitorare le prestazioni del servizio Kubernetes       | I          | RA*                    |
| Monitorare le prestazioni delle applicazioni            | RA         |                        |
| Gestire gli alert relativi al servizio Kubernetes       | I          | RA*                    |
| Gestire gli alert relativi alle applicazioni            | RA         |                        |

(*) : *Solo cluster di produzione. In Dev/Test il cliente è completamente autonomo e responsabile.*

### Manutenzione e aggiornamenti delle infrastrutture

| **Attività**                                             | **Cliente** | **Cloud Temple** |
|---|---|---|
| Aggiornare il servizio Kubernetes/OS                   | C          | RA                     |
| Applicare le patch di sicurezza a Kubernetes        | C          | RA                     |
| Aggiornare le applicazioni distribuite (operatori*)   | C          | RA                     |

*Pacchetto operatore incluso su Managed Kube - vedere capitoli: Pacchetti Helm gestiti

### Sicurezza

| **Attività**                                                              | **Client** | **Cloud Temple** |
|---|---|---|
| Gestire la sicurezza del servizio Kubernetes                                   | RA         | RA*                    |
| Configurare e gestire le politiche di sicurezza dei pod                   | RA         | I                      |
| Gestire i certificati SSL/TLS per il servizio Kubernetes                  | C          | RA*                    |
| Gestire i certificati SSL/TLS per le applicazioni                       | RA         | I                      |
| Implementare e gestire il controllo degli accessi basato sui ruoli di base (RBAC)| C          | R*                     |
| Implementare e gestire il controllo degli accessi basato sui ruoli client (RBAC) | RA         | I                      |

(*) : *Solo cluster di produzione. In Dev/Test il cliente è completamente autonomo e responsabile.*

### Backup e ripristino di emergenza

| **Attività**                                                                 | **Cliente** | **Cloud Temple** |
|---|---|---|
| Definire la strategia di backup per il servizio Kubernetes | I | RA |
| Implementare e gestire i backup del servizio Kubernetes | I | RA |
| Definire la strategia di backup per le applicazioni | RA* | I* |
| Implementare e gestire i backup delle applicazioni | RA* | I* |
| Testare le procedure di ripristino di emergenza per il servizio Kubernetes | CI | RA |
| Testare le procedure di ripristino di emergenza per le applicazioni | RA* | CI* |

*può passare a "CI | RA" in base al contratto di gestione

### Supporto e risoluzione dei problemi

| **Attività**                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Fornire supporto di livello 1 per l'infrastruttura      | I          | RA                     |
| Fornire supporto di livello 2 e 3 per l'infrastruttura | I          | RA                     |
| Risolvere i problemi relativi al servizio Kubernetes         | C          | RA                     |
| Risolvere i problemi relativi alle applicazioni              | RA         | I                      |

### Gestione delle capacità e dell'evoluzione

*Solo per il cluster di produzione. In Dev/Test il cliente è completamente autonomo e responsabile.*

| **Attività**                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Monitorare l'utilizzo delle risorse Kubernetes         | C         | RA                     |
| Pianificare l'evoluzione delle capacità del servizio            | RA         | C                      |
| Implementare le modifiche alle capacità                   | I          | RA                     |
| Gestire l'evoluzione delle applicazioni e delle relative risorse    | RA         | I                      |

### Documentazione e conformità

| **Attività**                                                  | **Cliente** | **Cloud Temple** |
|---|---|---|
| Mantenere la documentazione del prodotto Kubernetes           | I          | RA                     |
| Mantenere la documentazione delle applicazioni                | RA         | I                      |
| Garantire la conformità del servizio Kubernetes               | I          | RA                     |
| Garantire la conformità delle applicazioni                    | RA         | I                      |
| Effettuare audit del servizio Kubernetes                      | I          | RA                     |
| Effettuare audit delle applicazioni                           | RA         | I                      |

### Gestione degli operatori/CRD Kubernetes (inclusi nel prodotto)

| **Attività**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Fornitura del catalogo predefinito degli operatori                        | CI         | RA                     |
| Aggiornamento degli operatori                                             | CI         | RA                     |
| Monitoraggio dello stato degli operatori                                  | CI         | RA                     |
| Risoluzione dei problemi relativi agli operatori                          | CI         | RA                     |
| Gestione delle autorizzazioni degli operatori                             | CI         | RA                     |
| Gestione delle risorse degli operatori (aggiunta/rimozione)               | CI         | RA                     |
| Backup dei dati delle risorse degli operatori                             | CI         | RA                     |
| Supervisione delle risorse degli operatori                                | CI         | RA                     |
| Ripristino dei dati delle risorse degli operatori                         | CI         | RA                     |
| Audit di sicurezza degli operatori                                        | CI         | RA                     |
| Supporto degli operatori                                                  | CI         | RA                     |
| Gestione delle licenze per gli operatori                                  | CI         | RA                     |
| Gestione dei piani di supporto specifici per gli operatori                | CI         | RA                     |

*Pacchetto operatore incluso su Managed Kube - vedere capitoli: Pacchetti Helm gestiti

### Gestione delle applicazioni/operatori/CRD Kubernetes (del cliente)

*Solo cluster di produzione. In ambiente Dev/Test il cliente è completamente autonomo e responsabile.*

| **Attività**                                                              | **Cliente** | **Cloud Temple** |
|---|---|---|
| Distribuzione delle CRDs                                                  | I*         | RA*                    |
| Aggiornamento degli Operatori                                             | RA         | I                     |
| Monitoraggio dello stato degli Operatori                                  | RA         | I                     |
| Risoluzione dei problemi legati agli Operatori                            | RA         | I                     |
| Gestione delle autorizzazioni degli Operatori                             | RA         | I                     |
| Gestione delle risorse degli Operatori (aggiunta/rimozione)               | RA         | I                     |
| Backup dei dati delle risorse degli Operatori                             | RA         | I                     |
| Supervisione delle risorse degli Operatori                                | RA         | I                     |
| Ripristino dei dati delle risorse degli Operatori                         | RA         | I                     |
| Audit di sicurezza degli Operatori                                        | RA         | I                     |
| Supporto degli Operatori                                                  | RA         | I                     |
| Gestione delle licenze per gli operatori                                  | RA         | I                     |
| Gestione dei piani di supporto specifici per gli operatori               | RA         | I                     |

Alcuni servizi relativi agli operatori possono essere assunti in base al contratto di gestione.

*può passare a "A | RC" in base al contratto di gestione

### Assistenza applicativa

| **Attività**                                | **Cliente** | **Cloud Temple** |
|---|---|---|
| Assistenza applicativa (prestazione esterna) | RA         | I                      |

Un supporto applicativo può essere fornito tramite una prestazione aggiuntiva.

### RACI (sintetica)

- Cloud Temple : responsabile ed esecutore (RA) dell'infrastruttura Kubernetes, sicurezza del cluster, backup infrastrutturale, monitoraggio, CRD.
- Cliente : responsabile ed esecutore (RA) dei progetti applicativi, operatori di business, pipeline CI/CD, backup applicativi.
- Zona "grigia" : adattamenti ed estensioni (IAM, operatori specifici, hardening della conformità/sicurezza del cluster) - fatturate a progetto.