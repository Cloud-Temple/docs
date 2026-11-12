---
title: Concetti
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import arch_hld from '@site/docs/managed_kubernetes/images/archmk-prod.png'
import arch_lld from '@site/docs/managed_kubernetes/images/archmck-prod-LLD-FR.png'
import cni_vs_node from '@site/docs/managed_kubernetes/tutorials/images/cni-vs-node.png'

## Le nostre offerte Managed Kubernetes

Cloud Temple propone due offerte distinte per rispondere alle vostre esigenze in materia di orchestrazione di container:

- **Managed Core Kubernetes**: un prodotto minimalista che vi fornisce una base Kubernetes robusta e sicura, basata su componenti open-source all'avanguardia. È ideale per i team esperti che desiderano costruire la propria piattaforma su misura.
- **Managed Kubernetes**: una soluzione completa e pronta all'uso che include uno stack completo di strumenti per la rete, la sicurezza, lo storage, il deployment continuo, l'osservabilità, il backup e la gestione dei costi.

### Tabella comparativa delle offerte

| Componente                               | Managed Core Kubernetes | Managed Kubernetes          |
| --------------------------------------- | ----------------------- | --------------------------- |
| **OS**                            | ✅Talos                 | ✅Talos                     |
| **CNI**                           | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                 | ✅MetalLB               | ✅MetalLB                   |
| **Storage distribuito**           | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Storage locale**                | 🔵TopoLVM               | 🔵TopoLVM                   |
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

**Managed Core Kubernetes** è basato su Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicato a Kubernetes che è leggero e sicuro. È immutabile, senza alcun shell né accesso ssh, e configurato esclusivamente in modo dichiarativo tramite API gRPC.

L'installazione standardizzata include un insieme di componenti, per lo più OpenSource e validati dal CNCF:

- **CNI Cilium**, con interfaccia di osservabilità (**Hubble**): Cilium è una soluzione di networking per i container Kubernetes (*Container Network Interface*). Gestisce la sicurezza, il load balancing, il service mesh, l'osservabilità, la crittografia, ecc... È un componente di rete fondamentale che si trova nella maggior parte delle varianti di Kubernetes (OpenShift, AKS, GKE, EKS,...). In **Managed Kubernetes**, abbiamo incluso l'interfaccia grafica **Hubble** per la visualizzazione dei flussi Cilium.
  - **Gateway API**: i CRD Gateway API (≥ v1.6.1) vengono installati prima di Cilium e sono richiesti da Cilium ≥ 1.20 per la Gateway API.

  <img src={cillium} />

  Lo schema seguente illustra la distinzione tra la rete gestita dal CNI (traffico pod ↔ pod) e la rete dei nodi, nonché il modo in cui Cilium incapsula il traffico tra i nodi:

  <img src={cni_vs_node} alt="Réseau CNI vs réseau des nœuds" />
- **MetalLB** e **nginx**: per l'esposizione delle applicazioni Web, 3 *ingress-class* **nginx** sono integrate di base:

  - *nginx-external-secured*: esposizione su un IP pubblico, filtrato sul firewall per autorizzare solo IP noti (utilizzato per le interfacce grafiche dei diversi prodotti e per l'API Kubernetes)
  - *nginx-external*: esposizione su un secondo IP pubblico non filtrato (o filtraggio specifico per cliente)
  - *nginx-internal*: esposizione su un IP interno esclusivamente

    Per i servizi "non web", un load-balancer **metalLB** consente di esporre servizi in interno o su IP pubblici. (ciò permette di deployare altre ingress, come ad esempio un WAF)

> Nota: utilizziamo nginx in versione openSource *mantenuta da F5 Networks*. (non la versione originale, opensource, che è deprecata)

- **Storage distribuito Rook-Ceph**: per lo storage dei volumi persistenti (PV), uno storage distribuito **Ceph** OpenSource è integrato nella piattaforma. Consente di utilizzare le *storage-classes* *ceph-block* (Block, replicato multi-zona), *ceph-block-norepl* (Block, non replicato) e *ceph-filesystem* (File, replicato multi-zona). Viene utilizzato uno storage a **7500 IOPS**, che consente prestazioni elevate. Nei deployment di produzione (su 3 AZ), i nodi di storage sono dedicati (1 nodo per AZ); nei deployment non di produzione (1 AZ), lo storage è condiviso con i worker nodes.
- **Storage locale TopoLVM**: per lo storage dei volumi persistenti (PV), uno storage locale **TopoLVM** OpenSource può essere aggiunto (in opzione) alla piattaforma. Consente di utilizzare la *storage-class* *topolvm-ssd* per memorizzare localmente, *sui Worker nodes*, dei dati. Questa opzione è utile per i deployment che utilizzano una replicazione applicativa integrata (Kafka, MongoDB, PostgreSQL, ...) e beneficiano di uno storage ultra-rapido, con latenza ridotta. Questa opzione è generalmente utilizzata per dedicare dei *Worker nodes* a un workload specifico.
- **Cert-Manager**: il gestore di certificati OpenSource **Cert-Manager** è integrato nativamente nella piattaforma.
- **ArgoCD** è a vostra disposizione per i vostri deployment automatizzati tramite una catena di **CI/CD**. (opzionale)
- Stack **Prometheus** (Prometheus, Grafana, Loki): i cluster Managed Kubernetes sono forniti in standard con uno stack OpenSource completo **Prometheus** per l'osservabilità, che include:

  - **Prometheus**, per la raccolta delle metriche
  - **Grafana**, con numerosi dashboard
  - **Alloy**: agente di raccolta di log e metriche (sostituisce Promtail).
  - **Loki**: i log della piattaforma vengono esportati verso lo storage S3 Cloud-Temple (e integrati in Grafana).
  - **Pyroscope**: (opzionale) piattaforma di profiling continuo, interrogabile tramite LLM.

    <img src={grafana} />
- **Harbor** è un **Container registry** che vi consente di memorizzare le immagini dei vostri container o i vostri chart helm direttamente nel cluster. Esegue **scansioni di vulnerabilità** sulle vostre immagini. **Harbor** consente anche sincronizzazioni con altri registri. ([https://goharbor.io/](https://goharbor.io/)) (opzionale)
- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) è uno strumento di gestione dei costi (FinOps) per Kubernetes. Vi consente di monitorare finemente il consumo delle risorse Kubernetes e di effettuare la sotto-fatturazione per progetto/namespace. (opzionale)
- Strategie di sicurezza avanzate con **Kyverno** e **Capsule**:

  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) è un controller di ammissione per Kubernetes che consente di applicare delle policy. È uno strumento essenziale per la governance e la sicurezza in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) è uno strumento di gestione dei permessi che facilita la gestione dei diritti in Kubernetes. Introduce il concetto di *tenant* che consente di centralizzare e delegare permessi su più namespace. Tramite **Capsule**, gli utenti della piattaforma Kubernetes Managed dispongono quindi di diritti limitati ai soli loro namespace.
- **Veeam Kasten** (aka 'k10') è una soluzione per il **backup** dei workload Kubernetes.

  Consente di eseguire il backup di un deployment completo: manifesti, volumi, ecc... verso lo storage oggetto S3 Cloud-Temple. **Kasten** utilizza **Kanister** per consentire backup applicativi coerenti, ad esempio per i database ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

  **Kasten** è uno strumento cross-platform che può funzionare con altri cluster Kubernetes (OpenShift, Hyperscaler,...). Può quindi essere utilizzato per scenari di reversibilità o di migrazione (K10 gestisce le eventuali adattazioni tramite *transformations*, ad esempio un cambio di ingress-class), ma anche di "refresh" (esempio: ripristino pianificato di un ambiente di produzione in pre-produzione).
- **Autenticazione SSO** con un Identity Provider Esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...) (opzionale)
- **Keda** consente l'autoscaling dei pod tramite metriche avanzate, come ad esempio un numero di connessioni http. (opzionale)

## Versioni di riferimento (al 11/2026)

- **Kubernetes**: v1.36.6
- **Talos**: v1.13.12

Queste versioni sono **una base**, quella del riferimento di riferimento a questa data: evolvono a ogni release del riferimento (correzioni di sicurezza, aggiornamenti di versione). Le versioni esatte deployate su un cluster dato figurano nel DAT di tale cluster. La politica di supporto delle versioni è descritta più in basso (« Politica di versioni e ciclo di vita »).

## Pacchetti Helm gestiti (al 11/2026)

Il riferimento seguente viene deployato su ogni cluster Managed Kubernetes. Le versioni sono una base, quella del template di riferimento a questa data; un cluster in servizio può essere su una versione precedente tra due finestre di manutenzione.

### Riferimento della piattaforma (sempre deployato)

| **Componente** | **Versione** | **Repository** | **Ruolo Principale** |
| --- | --- | --- | --- |
| **Cilium** | 1.20.4 | https://helm.cilium.io/ | CNI avanzata, policy di rete e osservabilità (Hubble), Gateway API |
| **Gateway API** | v1.6.1 | https://gateway-api.sigs.k8s.io/ | CRD Gateway API, installati prima di Cilium (Cilium ≥ 1.20 richiede ≥ v1.6.1) |
| **MetalLB** | 0.16.1 | https://metallb.github.io/metallb | LoadBalancer BGP (BFD) che espone due range, interno ed esterno, in TCP/UDP |
| **Rook-Ceph** | 1.20.1 | https://charts.rook.io/release | Storage distribuito ad alta disponibilità (blocco RBD + CephFS) |
| **TopoLVM** | 17.3.0 | https://github.com/topolvm/topolvm | Storage LVM locale al nodo per workload a bassa latenza |
| **Metrics Server** | 3.13.1 | https://github.com/kubernetes-sigs/metrics-server | API di metriche risorse (`kubectl top`, HPA) |
| **kubelet-cert-approver** | v0.12.0 | https://github.com/alex1989hu/kubelet-serving-cert-approver | Approvazione automatica dei certificati kubelet |

### Servizi della piattaforma gestita

| **Componente** | **Versione** | **Repository** | **Ruolo Principale** |
| --- | --- | --- | --- |
| **Cert-Manager** | v1.21.3 | https://charts.jetstack.io | Gestione automatizzata dei certificati TLS (ZeroSSL integrato) |
| **NGINX Ingress** | 2.8.0 | https://helm.nginx.com/stable | Controller Ingress: interno, esterno ed esterno-sicuro (con filtraggio IP) |
| **Kyverno** | 3.9.2 | https://kyverno.github.io/kyverno/ | Applicazione delle policy di sicurezza |
| **Capsule** | 0.13.11 | https://projectcapsule.github.io/charts/ | Multi-tenancy e isolamento dei namespace con policy di sicurezza |
| **ArgoCD** | 10.11.6 | https://argoproj.github.io/argo-helm | GitOps / deployment continuo |
| **Prometheus Stack** | 87.21.0 | https://prometheus-community.github.io/helm-charts | Monitoraggio e alerting |
| **Alloy** | 1.11.0 | https://grafana.github.io/helm-charts | Agente di raccolta log/metriche (sostituisce Promtail) |
| **Loki** | 18.7.0 | https://grafana.github.io/helm-charts | Centralizzazione dei log (log memorizzati su S3 Cloud Temple) |
| **Pyroscope** | 2.1.0 | https://grafana.github.io/helm-charts | Profiling continuo e analisi delle performance (flamegraph in Grafana) |
| **Harbor** | 1.19.4 | https://helm.goharbor.io | Registro di immagini (immagini memorizzate su S3 Cloud Temple) |
| **Kasten K10** | 9.0.9 | https://charts.kasten.io/ | Backup e ripristino (backup esportati su S3 Cloud Temple) |
| **OpenCost** | 2.5.28 | https://opencost.github.io/opencost-helm-chart/ | Osservabilità e monitoraggio dei costi |
| **KEDA** | 2.21.0 | https://kedacore.github.io/charts | Autoscaling event-driven (Beta) |

**Impronta dello stack sul cluster Ceph: circa 180 Gi**, identica in produzione e in recette.

Tre `StorageClass` sono fornite:

| StorageClass | Backend | Modalità di accesso | Uso tipico |
| --- | --- | --- | --- |
| `ceph-block` | Ceph RBD (blocco distribuito) | ReadWriteOnce | Database, workload mono-pod |
| `ceph-filesystem` | CephFS (sistema di file distribuito) | ReadWriteMany | Volumi condivisi tra pod |
| `topolvm-ssd` | TopoLVM (LVM locale al nodo) | ReadWriteOnce | Storage locale a bassa latenza, non replicato, backup tramite Kasten **in modalità blueprint** esclusivamente (vedi Backup) |

**Quota** — valori standard di un cluster fornito, **regolabili per cluster** all'ordine come in corso di vita:

| Ambito | RBD (blocco) | CephFS |
| --- | --- | --- |
| Limite del pool, tutti i tenant inclusi | 300 Gi | 125 Gi |
| Limite del tenant predefinito, applicato da Capsule | 115 Gi | 100 Gi |

La capacità Ceph stessa dipende dal dimensionamento scelto: con il template predefinito (3 nodi Ceph a 500 Go), un cluster dispone di 1500 Go lordi, ovvero 500 Go utili dopo replicazione ×3.

## SLA e Informazioni sul supporto

- **Disponibilità garantita (produzione 3 AZ)**: 99.95 %
- **Supporto**: N1/N2/N3 inclusi per il perimetro riferimento (infrastruttura e operatori standard).
- **Griglia di supporto**: i tempi di presa in carico e di ripristino dipendono dalla gravità dell'incidente, conformemente alla griglia P1 a P4 di seguito.
- **Impegno RPO / RTO**: su un cluster 3 AZ, RPO ≤ 24 h e RTO ≤ 4 h. In mono-AZ, i backup esistono ma non sono coperti da un impegno RTO.
- **Manutenzione (MCO)**: patching regolare Talos / Kubernetes / operatori standard da parte dell'MSP, senza interruzione del servizio (rolling upgrade).

| Livello | Definizione | Presa in carico | Ripristino target |
| --- | --- | --- | --- |
| **P1** | Produzione non disponibile | Immediata (7/24) | ≤ 4 h |
| **P2** | Degrado maggiore | ≤ 1 h (7/24) | ≤ 8 h |
| **P3** | Degrado minore | ≤ 4 h (ore lavorative) | ≤ 2 gg lavorativi |
| **P4** | Domanda / miglioramento | ≤ 1 gg lavorativo | Da pianificare |

## Politica di versioni e ciclo di vita

- **Kubernetes supportato:** N-2 (3 release maggiori all'anno, circa ogni 4 mesi). Ogni release è supportata ufficialmente per 12 mesi, il che garantisce una finestra di supporto Cloud Temple di ~16 mesi massimo per versione.
- **Talos OS:** allineato alle versioni stabili di Kubernetes.
  - Ogni branch è mantenuto per circa 12 mesi (patch di sicurezza inclusi).
  - Ritmo di upgrade consigliato: 3 volte all'anno, in coerenza con gli upgrade Kubernetes.
  - Le patch critiche (CVE, kernel) vengono applicate in rolling upgrade, senza interruzione del servizio.
- **Aggiornamenti:**
  - **Maggiori** (Kubernetes N+1, Talos X+1): pianificati 3 volte/anno, in rolling update.
  - **Minori**: applicati automaticamente entro un termine di 30 a 60 giorni.
- **Deprecazione:** versione N-3 → fine del supporto entro 90 giorni dalla release di N.

## Nodi Kubernetes

### Produzione (multi-zonale)

<img src={archi_overview} />

#### Schemi di architettura

- **Vista HLD (High Level Design)** :

<img src={arch_hld} alt="Schéma d'architecture HLD" />

- **Vista LLD (Low Level Design)** :

<img src={arch_lld} alt="Schéma d'architecture LLD" />

Per un deployment "di produzione" (multi-zonale), vengono utilizzate le seguenti macchine:

| **AZ** | **Macchina**   | **vCores** | **RAM** | **Archiviazione locale**              |
| ------------ | ------------------- | ---------------- | ------------- | ------------------------------------- |
| AZ07         | Git Runner          | 4                | 8 Go          | OS: 256 Go                            |
| AZ05         | Control Plane 1     | 8                | 12 Go         | OS: 128 Go                            |
| AZ06         | Control Plane 2     | 8                | 12 Go         | OS: 128 Go                            |
| AZ07         | Control Plane 3     | 8                | 12 Go         | OS: 128 Go                            |
| AZ05         | Storage Node 1 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go minimo (***) |
| AZ06         | Storage Node 2 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go minimo (***) |
| AZ07         | Storage Node 3 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go minimo (***) |
| AZ05         | Worker Node 1 (*)   | 12               | 24 Go         | OS: 128 Go                            |
| AZ06         | Worker Node 2 (*)   | 12               | 24 Go         | OS: 128 Go                            |
| AZ07         | Worker Node 3 (*)   | 12               | 24 Go         | OS: 128 Go                            |

(*) : La dimensione e il numero dei Worker Node possono essere adattati in base al fabbisogno di capacità di calcolo del cliente. Il numero minimo di Worker Node è 3 (1 per AZ) e si consiglia di aumentarne il numero a gruppi di 3 per mantenere una distribuzione multi-zonale coerente. La dimensione dei Worker Node può essere adattata, con un minimo di 12 core e 24 Go di RAM; il limite superiore per Worker Node è determinato dalla dimensione degli hypervisor utilizzati (quindi potenzialmente 112 core/1536 Go di RAM con blade Performance 3). La quantità di Worker Node è limitata a 100. Il CNCF consiglia di avere worker node di dimensione identica. Il limite del numero di pod per Worker Node è 110.

(**) : la dimensione degli Storage Node può essere rivista al rialzo in base alla dimensione dello storage Ceph associato. (ad esempio: 24c/128Go per 10 To di Ceph)

(***) : Ogni nodo di storage viene fornito con un minimo di 500 Go di spazio su disco, per uno storage utile Ceph distribuito di 500 Go (i dati sono replicati su ogni AZ, quindi x3). Lo spazio libero disponibile per il cliente è di circa 350 Go. Questa dimensione iniziale può essere aumentata al momento della costruzione, o in seguito, in base alle esigenze. Vengono applicati dei quota su Ceph, con una ripartizione Block/File.

### Dev/test (mono zona)

<img src={archi_overview_1az} />

Per una versione "dev/test", vengono deployate le seguenti macchine:

| **AZ** | **Macchina** | **vCores** | **RAM** | **Archiviazione locale**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 Go          | OS: 256 Go                           |
| AZ0n         | Control Plane     | 8                | 12 Go         | OS: 128 Go                           |
| AZ0n         | Worker Node 1 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimo (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimo (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimo (**) |

(*) : La dimensione e il numero dei Worker Node possono essere adattati in base al fabbisogno di capacità di calcolo del cliente. Il numero minimo di Worker Node è 3 (a causa della replicazione dello storage). La dimensione dei Worker Node può essere adattata, con un minimo di 12 core e 24 Go di RAM; il limite superiore per Worker Node è determinato dalla dimensione degli hypervisor utilizzati (quindi potenzialmente 112 core/1536 Go di RAM con blade Performance 3). La quantità di Worker Node è limitata a 100. Il CNCF consiglia di avere worker node di dimensione identica. Il limite del numero di pod per Worker Node è 110.

(**) : 3 Worker Node vengono utilizzati come Storage Node e vengono forniti con un minimo di 300 Go di spazio su disco, per uno storage utile distribuito di 300 Go (i dati sono replicati tre volte). Lo spazio libero disponibile per il cliente è di circa 150 Go. Questa dimensione iniziale può essere aumentata al momento della costruzione, o in seguito, in base alle esigenze.

## RACI

### Architettura e Infrastruttura

| **Attività**                                                      | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------------------ | ---------------- | ---------------------- |
| Definire l'architettura globale del servizio Kubernetes                    | C                | RA                     |
| Dimensionare il servizio Kubernetes (numero di nodi, risorse)        | C                | RA                     |
| Installare il servizio Kubernetes con una configurazione predefinita       | I                | RA                     |
| Configurazione del servizio Kubernetes                                      | C                | RA                     |
| Configurare la rete di base del servizio Kubernetes                      | I                | RA                     |
| Deployment della configurazione iniziale delle identità e degli accessi   | C                | RA                     |
| Definire la strategia di scaling e di alta disponibilità | C                | RA                     |

### Gestione dei progetti e delle applicazioni di business

| **Attività**                                  | **Cliente** | **Cloud Temple** |
| ---------------------------------------------------- | ---------------- | ---------------------- |
| Creare e gestire i progetti Kubernetes              | RA               | I*                     |
| Deployare e gestire le applicazioni in Kubernetes | RA               | I*                     |
| Configurare i pipeline CI/CD                       | RA               | I*                     |
| Gestire le immagini dei container e i registri     | RA               | I*                     |

*può passare a "C" in base al contratto di managed service

### Monitoraggio e prestazioni

| **Attività**                             | **Cliente** | **Cloud Temple** |
| ----------------------------------------------- | ---------------- | ---------------------- |
| Monitorare le prestazioni del servizio Kubernetes | I                | RA*                    |
| Monitorare le prestazioni delle applicazioni      | RA               |                        |
| Gestire gli alert relativi al servizio Kubernetes | I                | RA*                    |
| Gestire gli alert relativi alle applicazioni      | RA               |                        |

(*) : *Solo cluster di Production Managed Kubernetes. In Dev/Test e in versione Core il cliente è interamente in autonomia e in responsabilità.*

### Manutenzione e aggiornamenti Infrastrutture

| **Attività**                                        | **Cliente** | **Cloud Temple** |
| ---------------------------------------------------------- | ---------------- | ---------------------- |
| Aggiornare il servizio Kubernetes/OS                    | C                | RA                     |
| Applicare le patch di sicurezza a Kubernetes       | C                | RA                     |
| Aggiornare le applicazioni deployate (operatori*) | C                | RA                     |

*Package operatore incluso su Managed Kube - vedere capitoli: Packages Helm gestiti

### Sicurezza

| **Attività**                                                              | **Cliente** | **Cloud Temple** |
| -------------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Gestire la sicurezza del servizio Kubernetes                                       | RA               | RA*                    |
| Configurare e gestire le policy di sicurezza dei pod                       | RA               | I                      |
| Gestire i certificati SSL/TLS per il servizio Kubernetes                        | C                | RA*                    |
| Gestire i certificati SSL/TLS per le applicazioni                             | RA               | I                      |
| Implementare e gestire il controllo degli accessi basato sui ruoli di base (RBAC) | C                | R*                     |
| Implementare e gestire il controllo degli accessi basato sui ruoli cliente (RBAC)  | RA               | I                      |

(*) : *Solo cluster di Production Managed Kubernetes. In Dev/Test e in versione Core il cliente è interamente in autonomia e in responsabilità.*

### Backup e disaster recovery

| **Attività**                                                          | **Cliente** | **Cloud Temple** |
| ---------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Definire la strategia di backup per il servizio Kubernetes              | I                | RA                     |
| Implementare e gestire i backup del servizio Kubernetes             | I                | RA                     |
| Definire la strategia di backup per le applicazioni                   | RA*              | I*                     |
| Implementare e gestire i backup delle applicazioni                  | RA*              | I*                     |
| Testare le procedure di disaster recovery per il servizio Kubernetes | CI               | RA                     |
| Testare le procedure di disaster recovery per le applicazioni      | RA*              | CI*                    |

*può passare a "CI | RA" in base al contratto di managed service

#### Backup dell'infrastruttura (perimetro gestito)

- **Backup del cluster tramite Kasten K10** (parte Disaster Recovery e Infrastruttura), con test di disaster recovery.
- **Perimetro base**: namespaces e PVC (Ceph RBD), oggetti CRD critici infrastruttura, osservabilità, operatori standard.
- **etcd (stato del cluster)**: snapshot giornaliero eseguito da Cloud Temple al di fuori di Kasten, con la configurazione dei nodi Talos; serve a ricostruire il piano di controllo. Gli snapshot sono conservati per 2 giorni sulla VM di management, essa stessa backup al livello IaaS con una policy giornaliera e 35 giorni di retention.
- **Frequenza**: giornaliera (retention 7 g) e settimanale (retention 4 sett).
- **Impegni**: RPO ≤ 24 h, RTO ≤ 4 h (ricostruzione automatizzata del cluster e ripristino dei componenti tramite Kasten).
- **Destinazione**: S3 Cloud Temple (FR), cifratura lato server.

#### Backup dei workload del cliente (basato sui label)

Il servizio fornisce un meccanismo flessibile per backuppare i workload del cliente utilizzando dei label.

- **Meccanismo**: iscrivere delle risorse (namespaces, PVC, ecc.) in una policy di backup tramite label specifici.
- **Policy disponibili**: 24 policy orarie, che coprono ogni ora della giornata (00 a 23 UTC).
- **Formato del label**: `kasten-dailyHH-r7d: "true"` (dove `HH` è l'ora in formato 24 h, ad es. `00`, `14`, `23`).
- **Frequenza**: giornaliera all'ora specificata (UTC). **Retention**: 7 giorni su S3.
- **Esempio**: per backuppare un namespace ogni giorno alle 14:00 UTC, aggiungere il label `kasten-daily14-r7d: "true"` al namespace.
- **Volumi TopoLVM**: `topolvm-ssd` non gestisce gli snapshot; senza precauzioni, un namespace backupato contenente un volume TopoLVM vede **tutto** il suo backup fallire, volumi Ceph compresi. Questi volumi si backuppano con Kasten **in modalità blueprint** (Kanister): Kasten esegue un backup applicativo (dump del database, export dei dati) inviato su S3, e il ripristino riproduce l'operazione inversa. Il blueprint è specifico per ogni applicazione e viene implementato **su studio**, su richiesta del cliente.
- **Perimetro applicativo**: RPO e RTO definiti dal cliente.

### Support e risoluzione dei problemi

| **Attività**                                       | **Cliente** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Fornire un supporto di livello 1 per l'infrastruttura      | I                | RA                     |
| Fornire un supporto di livello 2 e 3 per l'infrastruttura | I                | RA                     |
| Risolvere i problemi relativi al servizio Kubernetes      | C                | RA                     |
| Risolvere i problemi relativi alle applicazioni           | RA               | I                      |

### Gestione delle capacità e evoluzione

*Solo cluster di Production Managed Kubernetes. In Dev/Test e in versione Core il cliente è interamente in autonomia e in responsabilità.*

| **Attività**                                       | **Cliente** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Monitorare l'utilizzo delle risorse Kubernetes        | C                | RA                     |
| Pianificare l'evoluzione delle capacità del servizio         | RA               | C                      |
| Implementare i cambiamenti di capacità                 | I                | RA                     |
| Gestire l'evoluzione delle applicazioni e le loro risorse | RA               | I                      |

### Documentazione e conformità

| **Attività**                              | **Cliente** | **Cloud Temple** |
| ------------------------------------------------ | ---------------- | ---------------------- |
| Mantenere la documentazione del prodotto Kubernetes | I                | RA                     |
| Mantenere la documentazione delle applicazioni      | RA               | I                      |
| Garantire la conformità del servizio Kubernetes     | I                | RA                     |
| Garantire la conformità delle applicazioni          | RA               | I                      |
| Eseguire audit del servizio Kubernetes       | I                | RA                     |
| Eseguire audit delle applicazioni            | RA               | I                      |

### Gestione degli operatori/CRD Kubernetes (inclusi nel prodotto)

| **Attività**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Messa a disposizione del catalogo Operatori predefinito    | CI               | RA                     |
| Aggiornamento degli Operatori                                  | CI               | RA                     |
| Monitoraggio dello stato degli Operatori                      | CI               | RA                     |
| Risoluzione dei problemi legati agli Operatori              | CI               | RA                     |
| Gestione delle autorizzazioni degli Operatori                     | CI               | RA                     |
| Gestione delle risorse degli Operatori (aggiunta/rimozione)    | CI               | RA                     |
| Backup dei dati delle risorse degli Operatori        | CI               | RA                     |
| Supervisione delle risorse Operatori                        | CI               | RA                     |
| Ripristino dei dati delle risorse degli Operatori      | CI               | RA                     |
| Audit di sicurezza degli Operatori                           | CI               | RA                     |
| Supporto degli Operatori                                       | CI               | RA                     |
| Gestione delle licenze sugli operatori                      | CI               | RA                     |
| Gestione dei piani di supporto specifici sugli operatori | CI               | RA                     |

*Pacchetto operatore incluso su Managed Kube - vedere capitoli: Pacchetti Helm gestiti

### Gestione delle applicazioni/operatori/CRD Kubernetes (del cliente)

*Solo cluster di Produzione Managed Kubernetes. In Dev/Test e in versione Core il cliente è interamente in autonomia e in responsabilità.*

| **Attività**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Deploy dei CRDs                                         | I*               | RA*                    |
| Aggiornamento degli Operatori                                  | RA               | I                      |
| Monitoraggio dello stato degli Operatori                      | RA               | I                      |
| Risoluzione dei problemi legati agli Operatori              | RA               | I                      |
| Gestione delle autorizzazioni degli Operatori                     | RA               | I                      |
| Gestione delle risorse degli Operatori (aggiunta/rimozione)    | RA               | I                      |
| Backup dei dati delle risorse degli Operatori        | RA               | I                      |
| Supervisione delle risorse Operatori                        | RA               | I                      |
| Ripristino dei dati delle risorse degli Operatori      | RA               | I                      |
| Audit di sicurezza degli Operatori                           | RA               | I                      |
| Supporto degli Operatori                                       | RA               | I                      |
| Gestione delle licenze sugli operatori                      | RA               | I                      |
| Gestione dei piani di supporto specifici sugli operatori | RA               | I                      |

Alcuni servizi operatori possono essere supportati in base al contratto di managed service.

*può passare a "A | RC" in base al contratto di managed service

### Assistenza applicativa

| **Attività**                         | **Cliente** | **Cloud Temple** |
| ------------------------------------------- | ---------------- | ---------------------- |
| Assistenza applicativa (prestazione esterna) | RA               | I                      |

Un supporto applicativo può essere fornito tramite una prestazione complementare.

### RACI (sintetico)

- Cloud Temple: responsabile e attore (RA) della base *Core Kubernetes* e dei servizi aggiuntivi *Managed Kubernetes* (sicurezza, backup, supervisione)
- Cliente: responsabile e attore (RA) dei progetti applicativi, operatori di business, pipeline CI/CD, backup applicativi.
- Zona "grigia": adattamenti ed estensioni (IAM, operatori specifici, hardening di conformità/sicurezza del cluster) - fatturate in modalità progetto.
