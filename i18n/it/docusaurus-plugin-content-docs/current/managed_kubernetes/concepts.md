---
title: Concetti
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Le nostre offerte Managed Kubernetes

Cloud Temple propone due offerte distinte per soddisfare le vostre esigenze di orchestrazione dei container:

- **Managed Core Kubernetes** : Un prodotto minimalista che fornisce una piattaforma Kubernetes robusta e sicura, basata su componenti open-source all'avanguardia. È ideale per i team esperti che desiderano costruire la propria piattaforma su misura.
- **Managed Kubernetes** : Una soluzione completa e pronta all'uso che include uno stack completo di strumenti per la rete, la sicurezza, lo storage, il deployment continuo, l'osservabilità, il backup e la gestione dei costi.

### Tabella comparativa delle offerte

| Componente                               | Managed Core Kubernetes | Managed Kubernetes          |
| --------------------------------------- | ----------------------- | --------------------------- |
| **OS**                            | ✅Talos                 | ✅Talos                     |
| **CNI**                           | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                 | ✅MetalLB               | ✅MetalLB                   |
| **Archiviazione distribuita**           | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Archiviazione locale**                | 🔵TopoLVM               | 🔵TopoLVM                   |
| **Osservabilità CNI**            | ❌                      | ✅Hubble                    |
| **Ingress**                       | ❌                      | ✅Ingress Nginx             |
| **Osservabilità**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Backup e Migrazione**       | ❌                      | ✅Veeam Kasten              |
| **Governance e Sicurezza**     | ❌                      | ✅Kyverno, Capsule          |
| **Gestione dei certificati**       | ❌                      | ✅Cert-Manager              |
| **Deployment Continuo (GitOps)** | ❌                      | 🔵ArgoCD                    |
| **Container Registry**            | ❌                      | 🔵Harbor                    |
| **Autenticazione SSO**          | ❌                      | 🔵Integrazione OIDC         |
| **Autoscaling dei pod**           | ❌                      | 🔵Keda                      |
| **Gestione dei Costi (FinOps)**   | ❌                      | 🔵OpenCost                  |
| **Osservabilità (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : incluso
🔵 : opzionale/disattivabile
❌ : non incluso

## Presentazione dei prodotti Managed (Core) Kubernetes

**Managed Core Kubernetes** si basa su Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicato a Kubernetes che è leggero e sicuro. È immutabile, senza alcun shell né accesso ssh, e configurato esclusivamente in modo dichiarativo tramite API gRPC.

L'installazione standardizzata include un insieme di componenti, prevalentemente OpenSource e validati dal CNCF:

- **CNI Cillium**, con interfaccia di osservabilità (**Hubble**): Cillium è una soluzione di networking per i container Kubernetes (*Container Network Interface*). Gestisce la sicurezza, il load balancing, il service mesh, l'osservabilità, la crittografia, ecc... È un componente di rete fondamentale che si ritrova nella maggior parte delle varianti di Kubernetes (OpenShift, AKS, GKE, EKS,...). In **Managed Kubernetes**, abbiamo incluso l'interfaccia grafica **Hubble** per la visualizzazione dei flussi Cillium.

  <img src={cillium} />
- **MetalLB** e **nginx**: Per l'esposizione delle applicazioni Web, 3 *ingress-class* **nginx** sono integrate di base:

  - *nginx-external-secured*: esposizione su un IP pubblico, filtrato sul firewall per autorizzare solo IP noti (utilizzato per le interfacce grafiche dei vari prodotti e per l'API Kubernetes)
  - *nginx-external*: esposizione su un secondo IP pubblico non filtrato (o filtraggio specifico per il cliente)
  - *nginx-internal*: esposizione su un IP interno esclusivamente

    Per i servizi "non web", un load-balancer **metalLB** consente di esporre servizi in interno o su IP pubblici. (ciò permette di deployare altri ingress, come ad esempio un WAF)

> Nota: utilizziamo nginx nella versione openSource *mantenuta da F5 Networks*. (non la versione originale, open source, che è deprecata)

- **Storage distribuito Rook-Ceph**: per lo storage dei volumi persistenti (PV), uno storage distribuito **Ceph** OpenSource è integrato nella piattaforma. Consente di utilizzare le *storage-classes* *ceph-block* (Block, replicato multi-zona), *ceph-block-norepl* (Block, non replicato) e *ceph-filesystem* (File, replicato multi-zona). Viene utilizzato uno storage a **7500 IOPS**, che garantisce elevate prestazioni. Nei deployment di produzione (su 3 AZ), i nodi di storage sono dedicati (1 nodo per AZ); nei deployment non di produzione (1 AZ), lo storage è condiviso con i worker nodes.
- **Storage locale TopoLVM**: per lo storage dei volumi persistenti (PV), uno storage locale **TopoLVM** OpenSource può essere aggiunto (opzionale) alla piattaforma. Consente di utilizzare la *storage-class* *topolvm-ssd* per memorizzare localmente, *sui Worker nodes*, i dati. Questa opzione è utile per i deployment che utilizzano una replicazione applicativa integrata (Kafka, MongoDB, PostgreSQL, ...) e beneficiano di uno storage ultra-veloce, con latenza ridotta. Questa opzione è generalmente utilizzata per dedicare dei *Worker nodes* a un workload specifico.
- **Cert-Manager**: il gestore di certificati OpenSource **Cert-Manager** è integrato nativamente nella piattaforma.
- **ArgoCD** è a vostra disposizione per i vostri deployment automatizzati tramite una pipeline di **CI/CD**. (opzionale)
- Stack **Prometheus** (Prometheus, Grafana, Loki): i cluster Managed Kubernetes sono forniti di serie con una stack OpenSource completa **Prometheus** per l'osservabilità, che include:

  - **Prometheus**, per la raccolta delle metriche
  - **Grafana**, con numerosi dashboard
  - **Loki**: i log della piattaforma vengono esportati nello storage S3 Cloud-Temple (e integrati in Grafana).
  - **Pyroscope**: (opzionale) piattaforma di profiling continuo, interrogabile tramite LLM.

    <img src={grafana} />
- **Harbor** è un **Container registry** che vi permette di memorizzare le immagini dei vostri container o i vostri chart helm direttamente nel cluster. Esegue **scansioni di vulnerabilità** sulle vostre immagini. **Harbor** consente anche sincronizzazioni con altri registri. ([https://goharbor.io/](https://goharbor.io/)) (opzionale)
- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) è uno strumento di gestione dei costi (FinOps) per Kubernetes. Vi permette di monitorare nel dettaglio il consumo delle risorse Kubernetes e di effettuare il sub-billing per progetto/namespace. (opzionale)
- Strategie di sicurezza avanzate con **Kyverno** e **Capsule**:

  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) è un controller di ammissione per Kubernetes che consente di applicare policy. È uno strumento essenziale per la governance e la sicurezza in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) è uno strumento di gestione delle autorizzazioni che facilita la gestione dei diritti in Kubernetes. Introduce il concetto di *tenant* che permette di centralizzare e delegare le autorizzazioni su più namespace. Tramite **Capsule**, gli utenti della piattaforma Kubernetes Managé dispongono quindi di diritti limitati ai soli namespace loro assegnati.
- **Veeam Kasten** (aka 'k10') è una soluzione per il **backup** dei workload Kubernetes.

  Consente di eseguire il backup di un deployment completo: manifest, volumi, ecc... verso lo storage oggetto S3 Cloud-Temple. **Kasten** utilizza **Kanister** per permettere backup applicativi coerenti, ad esempio per i database ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

  **Kasten** è uno strumento cross-platform che può funzionare con altri cluster Kubernetes (OpenShift, Hyperscaler,...). Può quindi essere utilizzato per scenari di reversibilità o di migrazione (K10 gestisce eventuali adattamenti tramite *transformations*, ad esempio un cambiamento di ingress-class), ma anche di "refresh" (esempio: ripristino pianificato di un ambiente di produzione in pre-produzione).
- **Autenticazione SSO** con un Identity Provider Esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...) (opzionale)
- **Keda** consente l'autoscaling dei pod tramite metriche avanzate, come ad esempio il numero di connessioni http. (opzionale)

## SLA & Informazioni sul supporto

- **Disponibilità garantita (produzione 3 AZ)** : 99.95 %
- **Supporto** : N1/N2/N3 inclusi per il perimetro base (infrastruttura e operatori standard).
- **Impegno sul tempo di ripristino (ETR)** : secondo contratto quadro Cloud Temple.
- **Manutenzione (MCO)** : patching regolare Talos / Kubernetes / operatori standard da parte di MSP, senza interruzione del servizio (rolling upgrade).

I tempi di presa in carico e di ripristino dipendono dalla gravità dell'incidente, conformemente alla matrice di supporto (da P1 a P4).

## Politica delle versioni & ciclo di vita

- **Kubernetes supportato:** N-2 (3 release maggiori all'anno, circa ogni 4 mesi). Ogni release è supportata ufficialmente per 12 mesi, garantendo una finestra di supporto Cloud Temple di ~16 mesi massimo per versione.
- **Talos OS:** allineato alle versioni stabili di Kubernetes.
  - Ogni branch è mantenuto per circa 12 mesi (inclusi i patch di sicurezza).
  - Ritmo di upgrade consigliato: 3 volte all'anno, in coerenza con gli upgrade di Kubernetes.
  - I patch critici (CVE, kernel) vengono applicati tramite rolling upgrade, senza interruzione del servizio.
- **Aggiornamenti:**
  - **Maggiori** (Kubernetes N+1, Talos X+1): pianificati 3 volte/anno, tramite rolling update.
  - **Minori**: applicati automaticamente entro un termine di 30 a 60 giorni.
- **Deprecazione:** versione N-3 → fine del supporto entro 90 giorni dalla release di N.

## Nodi Kubernetes

### Produzione (multi-zonal)

<img src={archi_overview} />

Per un deployment "di produzione" (multi-zonal), vengono utilizzate le seguenti macchine:

| **AZ** | **Macchina**   | **vCores** | **RAM** | **Archiviazione locale**              |
| ------------ | ------------------- | ---------------- | ------------- | ------------------------------------- |
| AZ07         | Git Runner          | 4                | 8 Go          | OS: 256 Go                            |
| AZ05         | Control Plane 1     | 8                | 12 Go         | OS: 64 Go                             |
| AZ06         | Control Plane 2     | 8                | 12 Go         | OS: 64 Go                             |
| AZ07         | Control Plane 3     | 8                | 12 Go         | OS: 64 Go                             |
| AZ05         | Storage Node 1 (**) | 12               | 24 Go         | OS: 64 Go + Ceph 500 Go minimum (***) |
| AZ06         | Storage Node 2 (**) | 12               | 24 Go         | OS: 64 Go + Ceph 500 Go minimum (***) |
| AZ07         | Storage Node 3 (**) | 12               | 24 Go         | OS: 64 Go + Ceph 500 Go minimum (***) |
| AZ05         | Worker Node 1 (*)   | 12               | 24 Go         | OS: 64 Go                             |
| AZ06         | Worker Node 2 (*)   | 12               | 24 Go         | OS: 64 Go                             |
| AZ07         | Worker Node 3 (*)   | 12               | 24 Go         | OS: 64 Go                             |

(*) : Le dimensioni e il numero dei Worker Node possono essere adattati in base alle esigenze di capacità di calcolo del cliente. Il numero minimo di Worker Node è 3 (1 par AZ) e consigliamo di aumentarne il numero a gruppi di 3 per mantenere una distribuzione multi-zona coerente. Le dimensioni dei Worker Node possono essere adattate, con un minimo di 12 core e 24 Go di RAM; il limite superiore per Worker Node è determinato dalle dimensioni degli hypervisor utilizzati (donc potentiellement 112 cores/1536 Go de RAM avec des lames Performance 3). Il numero di Worker Node è limitato a 100. Il CNCF consiglia di utilizzare worker node di dimensioni identiche. Il limite del numero di pod per Worker Node è di 110.

(**) : le dimensioni dei Storage Node possono essere aumentate in base alle dimensioni dello storage Ceph associato. (par exemple : 24c/128Go pour 10 To de Ceph)

(***) : Ogni nodo di storage viene fornito con un minimo di 500 Go di spazio su disco, per uno spazio di archiviazione Ceph distribuito utile di 500 Go (les données sont répliquées sur chaque AZ, donc x3). Lo spazio libero disponibile per il cliente è di circa 350 Go. Questa dimensione iniziale può essere aumentata al momento del provisioning, o in un secondo momento, in base alle esigenze. Vengono applicate delle quote su Ceph, con una ripartizione Block/File.

### Dev/test (zona singola o doppia)

<img src={archi_overview_1az} />

Per una versione "dev/test", vengono distribuite le seguenti macchine:

| **AZ** | **Macchina** | **vCores** | **RAM** | **Archiviazione locale**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 GB          | OS: 256 GB                           |
| AZ0n         | Control Plane     | 8                | 12 GB         | OS: 64 GB                            |
| AZ0n         | Worker Node 1 (*) | 12               | 24 GB         | OS: 64 GB + Ceph 300 GB minimo (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 GB         | OS: 64 GB + Ceph 300 GB minimo (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 GB         | OS: 64 GB + Ceph 300 GB minimo (**) |

(*) : Le dimensioni e il numero dei Worker Node possono essere adattati in base alle esigenze di capacità di calcolo del cliente. Il numero minimo di Worker Node è 3 (a causa della replicazione dello storage). Le dimensioni dei Worker Node possono essere adattate, con un minimo di 12 core e 24 GB di RAM; il limite superiore per Worker Node è determinato dalle dimensioni degli hypervisor utilizzati (quindi potenzialmente 112 core/1536 GB di RAM con blade Performance 3). La quantità di Worker Node è limitata a 250. Il CNCF consiglia di avere worker node di dimensioni identiche. Il limite del numero di pod per Worker Node è di 110.

(**) : 3 Worker Node sono utilizzati come Storage Node e vengono forniti con un minimo di 300 GB di spazio su disco, per uno storage distribuito utile di 300 GB (i dati vengono replicati tre volte). Lo spazio libero disponibile per il cliente è di circa 150 GB. Questa dimensione iniziale può essere aumentata al momento della configurazione, o in un secondo momento, in base alle esigenze.

## RACI

### Architettura e Infrastruttura

| **Attività**                                                      | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------------------ | ---------------- | ---------------------- |
| Definire l'architettura globale del servizio Kubernetes                    | C                | RA                     |
| Dimensionare il servizio Kubernetes (numero di nodi, risorse)        | C                | RA                     |
| Installare il servizio Kubernetes con una configurazione predefinita       | I                | RA                     |
| Configurazione del servizio Kubernetes                                      | C                | RA                     |
| Configurare la rete di base del servizio Kubernetes                      | I                | RA                     |
| Distribuzione della configurazione iniziale delle identità e degli accessi   | C                | RA                     |
| Definire la strategia di scaling e alta disponibilità | C                | RA                     |

### Gestione dei progetti e delle applicazioni aziendali

| **Attività**                                  | **Cliente** | **Cloud Temple** |
| ---------------------------------------------------- | ---------------- | ---------------------- |
| Creare e gestire i progetti Kubernetes              | RA               | I*                     |
| Distribuire e gestire le applicazioni in Kubernetes | RA               | I*                     |
| Configurare le pipeline CI/CD                       | RA               | I*                     |
| Gestire le immagini dei container e i registri     | RA               | I*                     |

*può passare a "C" in base al contratto di outsourcing IT

### Monitoraggio e prestazioni

| **Attività**                             | **Cliente** | **Cloud Temple** |
| ----------------------------------------------- | ---------------- | ---------------------- |
| Monitorare le prestazioni del servizio Kubernetes | I                | RA*                    |
| Monitorare le prestazioni delle applicazioni      | RA               |                        |
| Gestire le alerte relative al servizio Kubernetes | I                | RA*                    |
| Gestire le alerte relative alle applicazioni      | RA               |                        |

(*) : *Solo per il Cluster di Produzione Managed Kubernetes. In Dev/Test e nella versione Core il cliente è completamente autonomo e responsabile.*

### Manutenzione e aggiornamenti Infrastrutture

| **Attività**                                        | **Cliente** | **Cloud Temple** |
| ---------------------------------------------------------- | ---------------- | ---------------------- |
| Aggiornare il servizio Kubernetes/OS                    | C                | RA                     |
| Applicare le patch di sicurezza a Kubernetes       | C                | RA                     |
| Aggiornare le applicazioni distribuite (operatori*) | C                | RA                     |

*Package operatore incluso su Managed Kube - vedere capitoli: Pacchetti Helm gestiti

### Sicurezza

| **Attività**                                                              | **Cliente** | **Cloud Temple** |
| -------------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Gestire la sicurezza del servizio Kubernetes                                       | RA               | RA*                    |
| Configurare e gestire le politiche di sicurezza dei pod                       | RA               | I                      |
| Gestire i certificati SSL/TLS per il servizio Kubernetes                        | C                | RA*                    |
| Gestire i certificati SSL/TLS per le applicazioni                             | RA               | I                      |
| Implementare e gestire il controllo degli accessi basato sui ruoli di base (RBAC) | C                | R*                     |
| Implementare e gestire il controllo degli accessi basato sui ruoli del cliente (RBAC)  | RA               | I                      |

(*) : *Solo per Cluster di Produzione Managed Kubernetes. In Dev/Test e nella versione Core il cliente è completamente autonomo e responsabile.*

### Backup e disaster recovery

| **Attività**                                                          | **Cliente** | **Cloud Temple** |
| ---------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Definire la strategia di backup per il servizio Kubernetes              | I                | RA                     |
| Implementare e gestire i backup del servizio Kubernetes             | I                | RA                     |
| Definire la strategia di backup per le applicazioni                   | RA*              | I*                     |
| Implementare e gestire i backup delle applicazioni                  | RA*              | I*                     |
| Testare le procedure di disaster recovery per il servizio Kubernetes | CI               | RA                     |
| Testare le procedure di disaster recovery per le applicazioni      | RA*              | CI*                    |

*può passare a "CI | RA" in base al contratto di outsourcing IT

### Supporto e risoluzione dei problemi

| **Attività**                                       | **Cliente** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Fornire supporto di livello 1 per l'infrastruttura      | I                | RA                     |
| Fornire supporto di livello 2 e 3 per l'infrastruttura | I                | RA                     |
| Risolvere i problemi relativi al servizio Kubernetes      | C                | RA                     |
| Risolvere i problemi relativi alle applicazioni           | RA               | I                      |

### Gestione delle capacità e evoluzione

*Solo per il Cluster di Produzione Managed Kubernetes. In Dev/Test e nella versione Core il cliente è completamente autonomo e responsabile.*

| **Attività**                                       | **Cliente** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Monitorare l'utilizzo delle risorse Kubernetes        | C                | RA                     |
| Pianificare l'evoluzione delle capacità del servizio         | RA               | C                      |
| Implementare le modifiche di capacità                 | I                | RA                     |
| Gestire l'evoluzione delle applicazioni e delle relative risorse | RA               | I                      |

### Documentazione e conformità

| **Attività**                              | **Cliente** | **Cloud Temple** |
| ------------------------------------------------ | ---------------- | ---------------------- |
| Mantenere la documentazione del prodotto Kubernetes | I                | RA                     |
| Mantenere la documentazione delle applicazioni      | RA               | I                      |
| Garantire la conformità del servizio Kubernetes     | I                | RA                     |
| Garantire la conformità delle applicazioni          | RA               | I                      |
| Eseguire audit del servizio Kubernetes       | I                | RA                     |
| Eseguire audit delle applicazioni            | RA               | I                      |

### Gestione degli operatori/CRD Kubernetes (incluso nel prodotto)

| **Attività**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Messa a disposizione del catalogo Operatori predefinito    | CI               | RA                     |
| Aggiornamento degli Operatori                                  | CI               | RA                     |
| Monitoraggio dello stato degli Operatori                      | CI               | RA                     |
| Risoluzione dei problemi relativi agli Operatori              | CI               | RA                     |
| Gestione delle autorizzazioni degli Operatori                     | CI               | RA                     |
| Gestione delle risorse degli Operatori (aggiunta/rimozione)    | CI               | RA                     |
| Backup dei dati delle risorse degli Operatori        | CI               | RA                     |
| Supervisione delle risorse Operatori                        | CI               | RA                     |
| Ripristino dei dati delle risorse degli Operatori      | CI               | RA                     |
| Audit di sicurezza degli Operatori                           | CI               | RA                     |
| Supporto degli Operatori                                       | CI               | RA                     |
| Gestione delle licenze per gli operatori                      | CI               | RA                     |
| Gestione dei piani di supporto specifici per gli operatori | CI               | RA                     |

*Pacchetto operatore incluso su Managed Kube - vedere capitoli: Pacchetti Helm gestiti*

### Gestione delle applicazioni/operatori/CRD Kubernetes (du client)

*Solo cluster di produzione Managed Kubernetes. In Dev/Test e nella versione Core il cliente è completamente autonomo e responsabile.*

| **Attività**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Deployment dei CRD                                         | I*               | RA*                    |
| Aggiornamento degli Operatori                                  | RA               | I                      |
| Monitoraggio dello stato degli Operatori                      | RA               | I                      |
| Risoluzione dei problemi relativi agli Operatori              | RA               | I                      |
| Gestione delle autorizzazioni degli Operatori                     | RA               | I                      |
| Gestione delle risorse degli Operatori (ajout/suppression)    | RA               | I                      |
| Backup dei dati delle risorse degli Operatori        | RA               | I                      |
| Supervisione delle risorse degli Operatori                        | RA               | I                      |
| Ripristino dei dati delle risorse degli Operatori      | RA               | I                      |
| Audit di sicurezza degli Operatori                           | RA               | I                      |
| Supporto degli Operatori                                       | RA               | I                      |
| Gestione delle licenze per gli operatori                      | RA               | I                      |
| Gestione dei piani di supporto specifici per gli operatori | RA               | I                      |

Alcuni servizi degli operatori possono essere gestiti in base al contratto di managed services.

*può passare a "A | RC" in base al contratto di managed services

### Assistenza applicativa

| **Attività**                         | **Cliente** | **Cloud Temple** |
| ------------------------------------------- | ---------------- | ---------------------- |
| Assistenza applicativa (servizio esterno) | RA               | I                      |

Un supporto applicativo può essere fornito tramite un servizio aggiuntivo.

### RACI (synthétique)

- Cloud Temple : responsabile e attore (RA) della base *Core Kubernetes* e dei servizi aggiuntivi *Managed Kubernetes* (sécurité, sauvegarde, supervision)
- Cliente : responsabile e attore (RA) dei progetti applicativi, operatori di business, pipeline CI/CD, backup applicativi.
- Zona "grigia" : adattamenti ed estensioni (IAM, opérateurs spécifiques, durcissement de conformité/sécurité du cluster) - fatturate a progetto.