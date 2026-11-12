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

:::info[Servizio gestito, fuori dalla Console]

Managed Kubernetes viene sottoscritto presso i team Cloud Temple. Non è ordinabile dalla Console Cloud Temple, che non offre per questo servizio né vista né API.

:::

<a id="nos-offres-managed-kubernetes"></a>

## Presentazione

Managed Kubernetes è una piattaforma di orchestrazione di container completamente gestita, basata su standard open source validati dalla CNCF. Ogni cluster viene deployato in un ambiente dedicato al cliente, su una singola zona di disponibilità o su tre. La piattaforma viene consegnata pronta all'uso, con uno stack completo per la rete, la sicurezza, lo storage, il deployment continuo, l'osservabilità, il backup e la gestione dei costi.

Per i team che preferiscono costruire la propria piattaforma su una base minima, l'offerta [Managed Core Kubernetes](../managed_core_kubernetes/concepts.md) fornisce solo i componenti di base.

### Tabella comparativa delle offerte

| Componente                        | Managed Core Kubernetes | Managed Kubernetes          |
| -------------------------------- | ----------------------- | --------------------------- |
| **OS**                           | ✅Talos                 | ✅Talos                     |
| **CNI**                          | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                | ✅MetalLB               | ✅MetalLB                   |
| **Storage distribuito**           | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Storage locale**               | 🔵TopoLVM               | 🔵TopoLVM                   |
| **Osservabilità CNI**            | ❌                      | ✅Hubble                    |
| **Ingress**                      | ❌                      | ✅Ingress Nginx             |
| **Osservabilità**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Backup e Migrazione**          | ❌                      | ✅Veeam Kasten              |
| **Governance e Sicurezza**       | ❌                      | ✅Kyverno, Capsule          |
| **Gestione dei certificati**     | ❌                      | ✅Cert-Manager              |
| **Deployment Continuo (GitOps)** | ❌                      | ✅ArgoCD (disattivabile)    |
| **Container Registry**           | ❌                      | ✅Harbor (disattivabile)    |
| **Autenticazione SSO**           | ❌                      | ✅Integrazione OIDC (disattivabile) |
| **Autoscaling dei pod**          | ❌                      | 🔵Keda                      |
| **Gestione dei Costi (FinOps)**  | ❌                      | ✅OpenCost (disattivabile)  |
| **Osservabilità (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : incluso
🔵 : opzionale
❌ : non incluso

I componenti contrassegnati con ✅ sono inclusi nell'offerta. Quelli indicati come « disattivabile » (ArgoCD, Harbor, OpenCost e l'autenticazione SSO) possono essere disattivati.

### Target e casi d'uso

Managed Kubernetes si rivolge ai team DevOps, agli sviluppatori di applicazioni cloud-native, agli architetti che migrano verso architetture containerizzate, e alle organizzazioni pubbliche o regolamentate. Casi d'uso tipici:

<<<<<<< HEAD
- **CNI Cilium**, con interfaccia di osservabilità (**Hubble**): Cilium è una soluzione di networking per i container Kubernetes (*Container Network Interface*). Gestisce la sicurezza, il load balancing, il service mesh, l'osservabilità, la crittografia, ecc... È un componente di rete fondamentale che si trova nella maggior parte delle varianti di Kubernetes (OpenShift, AKS, GKE, EKS,...). In **Managed Kubernetes**, abbiamo incluso l'interfaccia grafica **Hubble** per la visualizzazione dei flussi Cilium.
  - **Gateway API**: i CRD Gateway API (≥ v1.6.1) vengono installati prima di Cilium e sono richiesti da Cilium ≥ 1.20 per l'API Gateway.

  <img src={cillium} />

  Lo schema seguente illustra la distinzione tra la rete gestita dal CNI (traffico pod ↔ pod) e la rete dei nodi, nonché il modo in cui Cilium incapsula il traffico tra i nodi:

  <img src={cni_vs_node} alt="Rete CNI vs rete dei nodi" />
- **MetalLB** e **nginx**: per l'esposizione delle applicazioni Web, 3 *ingress-class* **nginx** sono integrate di base:
=======
- **Applicazioni cloud-native**: architetture microservizi.
- **Migrazione verso i container**: modernizzazione progressiva di applicazioni esistenti.
- **CI/CD avanzato**: pipeline di deployment automatizzate in GitOps.
- **Ambienti multipli**: separazione sviluppo, test e produzione.
- **Applicazioni critiche**: alta disponibilità su tre zone di disponibilità.
- **Conformità normativa**: deployment soggetti a requisiti di sovranità.

## Vantaggi

| Vantaggio                      | Descrizione                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Completamente gestito            | Configurazione, deployment e ciclo di vita del cluster sono gestiti.                                         |
| Alta disponibilità           | In produzione, il cluster è distribuito su tre zone di disponibilità.                                            |
| Sicurezza by design            | OS minimalista e immutabile, gestito esclusivamente tramite API, senza shell né accesso SSH.                                      |
| Piattaforma pronta all'uso   | Rete, osservabilità, backup, governance e certificati sono integrati fin dalla consegna.                      |
| Compatibile CNCF               | Gli standard open source evitano la dipendenza tecnologica e garantiscono la portabilità delle vostre applicazioni. |

<a id="présentation-des-produits-managed-core-kubernetes"></a>

## Funzionalità

I cluster si basano su Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicato a Kubernetes, leggero e sicuro. È immutabile, senza shell né accesso SSH, e configurato esclusivamente in modo dichiarativo tramite un'API gRPC. L'installazione standardizzata include un insieme di componenti, prevalentemente open source e validati dalla CNCF.

### Rete ed esposizione dei servizi

- **CNI Cilium**, con l'interfaccia di osservabilità **Hubble**: Cilium gestisce il networking dei container (*Container Network Interface*): sicurezza, load balancing, service mesh, osservabilità, crittografia. L'interfaccia grafica **Hubble** consente di visualizzare i flussi Cilium.

  <img src={cillium} />
>>>>>>> origin/dev

- **MetalLB** e **nginx**: per l'esposizione delle applicazioni web, tre *ingress-class* **nginx** sono integrate:
  - *nginx-external-secured*: esposizione su un IP pubblico, filtrato sul firewall per autorizzare solo IP noti (usata per le interfacce grafiche dei diversi prodotti e per l'API Kubernetes);
  - *nginx-external*: esposizione su un secondo IP pubblico non filtrato (o con un filtraggio specifico del cliente);
  - *nginx-internal*: esposizione su un IP interno esclusivamente.

  Per i servizi « non web », il load-balancer **MetalLB** espone dei servizi in interno o su IP pubblici, il che consente di deployare altri ingress, ad esempio un WAF.

> Nota: la versione open source di nginx utilizzata è quella *mantenuta da F5 Networks*, e non la versione originale, deprecata.

### Storage

<<<<<<< HEAD
  - **Prometheus**, per la raccolta delle metriche
  - **Grafana**, con numerosi dashboard
  - **Alloy**: agente di raccolta di log e metriche (sostituisce Promtail).
  - **Loki**: i log della piattaforma vengono esportati verso lo storage S3 Cloud-Temple (e integrati in Grafana).
  - **Pyroscope**: (opzionale) piattaforma di profiling continuo, interrogabile tramite LLM.
=======
- **Storage distribuito Rook-Ceph**: storage **Ceph** open source per i volumi persistenti (PV). Fornisce le *storage-classes* *ceph-block* (blocco, replicato multi-zona), *ceph-block-norepl* (blocco, non replicato) e *ceph-filesystem* (file, replicato multi-zona). Lo storage utilizzato offre **7 500 IOPS**.
- **Storage locale TopoLVM** (opzionale): la *storage-class* *topolvm-ssd* memorizza localmente i dati *sui Worker nodes*. Questa opzione è utile per le applicazioni che replicano autonomamente i propri dati (Kafka, MongoDB, PostgreSQL…) e beneficiano di uno storage ultra-rapido, a bassa latenza. Serve generalmente a dedicare dei *Worker nodes* a un carico di lavoro specifico.
>>>>>>> origin/dev

### Osservabilità

Lo stack open source **Prometheus** viene fornito in standard:

- **Prometheus**, per la raccolta delle metriche;
- **Grafana**, con numerosi dashboard;
- **Loki**: i log della piattaforma vengono esportati verso lo Storage Oggetto Cloud Temple e integrati in Grafana;
- **Pyroscope** (opzionale): piattaforma di profiling continuo, interrogabile tramite un LLM.

<img src={grafana} />

<<<<<<< HEAD
## Versioni di riferimento (al 11/2026)

- **Kubernetes**: v1.36.6
- **Talos**: v1.13.12

Queste versioni sono **una base**, quella del riferimento di riferimento a questa data: evolvono a ogni release del riferimento (correzioni di sicurezza, aggiornamenti di versione). Le versioni esatte deployate su un cluster dato figurano nel DAT di tale cluster. La politica di supporto delle versioni è descritta più in basso (« Politica di versioni & ciclo di vita »).

## Pacchetti Helm gestiti (al 11/2026)

Il riferimento seguente viene deployato su ogni cluster Managed Kubernetes. Le versioni sono una base, quella del template di riferimento a questa data; un cluster in servizio può essere su una versione precedente tra due finestre di manutenzione.

### Riferimento della piattaforma (sempre deployato)

| **Componente** | **Versione** | **Repository** | **Ruolo Principale** |
| --- | --- | --- | --- |
| **Cilium** | 1.20.4 | https://helm.cilium.io/ | CNI avanzata, policy di rete e osservabilità (Hubble), API Gateway |
| **Gateway API** | v1.6.1 | https://gateway-api.sigs.k8s.io/ | CRD Gateway API, installati prima di Cilium (Cilium ≥ 1.20 richiede ≥ v1.6.1) |
| **MetalLB** | 0.16.1 | https://metallb.github.io/metallb | LoadBalancer BGP (BFD) che espone due range, interno ed esterno, in TCP/UDP |
| **Rook-Ceph** | 1.20.1 | https://charts.rook.io/release | Storage distribuito ad alta disponibilità (blocco RBD + CephFS) |
| **TopoLVM** | 17.3.0 | https://github.com/topolvm/topolvm | Storage LVM locale al nodo per carichi di lavoro a bassa latenza |
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
| **Prometheus Stack** | 87.21.0 | https://prometheus-community.github.io/helm-charts | Monitoraggio & alerting |
| **Alloy** | 1.11.0 | https://grafana.github.io/helm-charts | Agente di raccolta log/metriche (sostituisce Promtail) |
| **Loki** | 18.7.0 | https://grafana.github.io/helm-charts | Centralizzazione dei log (log memorizzati su S3 Cloud Temple) |
| **Pyroscope** | 2.1.0 | https://grafana.github.io/helm-charts | Profiling continuo & analisi delle performance (flamegraphs in Grafana) |
| **Harbor** | 1.19.4 | https://helm.goharbor.io | Registro di immagini (immagini memorizzate su S3 Cloud Temple) |
| **Kasten K10** | 9.0.9 | https://charts.kasten.io/ | Backup & ripristino (backup esportati su S3 Cloud Temple) |
| **OpenCost** | 2.5.28 | https://opencost.github.io/opencost-helm-chart/ | Osservabilità e monitoraggio dei costi |
| **KEDA** | 2.21.0 | https://kedacore.github.io/charts | Autoscaling event-driven (Beta) |

**Impronta dello stack sul cluster Ceph: circa 180 Gi**, identica in produzione e in pre-produzione.

Tre `StorageClass` sono fornite:

| StorageClass | Backend | Modalità di accesso | Uso tipico |
| --- | --- | --- | --- |
| `ceph-block` | Ceph RBD (blocco distribuito) | ReadWriteOnce | Database, carichi mono-pod |
| `ceph-filesystem` | CephFS (sistema di file distribuito) | ReadWriteMany | Volumi condivisi tra pod |
| `topolvm-ssd` | TopoLVM (LVM locale al nodo) | ReadWriteOnce | Storage locale a bassa latenza, non replicato, backup tramite Kasten **in modalità blueprint** esclusivamente (vedi Backup) |

**Quota** — valori standard di un cluster consegnato, **regolabili per cluster** all'ordine come in corso di vita:

| Ambito | RBD (blocco) | CephFS |
| --- | --- | --- |
| Limite del pool, tutti i tenant inclusi | 300 Gi | 125 Gi |
| Limite del tenant predefinito, applicato da Capsule | 115 Gi | 100 Gi |

La capacità Ceph stessa dipende dal dimensionamento scelto: con il template predefinito (3 nodi Ceph da 500 Go), un cluster dispone di 1500 Go lordi, ovvero 500 Go utili dopo replicazione ×3.

## SLA & Informazioni sul supporto

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
=======
### Governance e sicurezza

- **Kyverno** ([https://kyverno.io/](https://kyverno.io/)): controller di ammissione che applica strategie di sicurezza e governance.
- **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)): gestione dei permessi con il concetto di *tenant*, che centralizza e delega diritti su più namespace. Gli utenti della piattaforma dispongono così di diritti limitati ai propri soli namespace.
- **Cert-Manager**: gestore di certificati open source integrato nativamente.
- **Autenticazione SSO** (inclusa, disattivabile): integrazione con un provider di identità esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce…).

### Deploy e automazione
>>>>>>> origin/dev

- **ArgoCD** (incluso, disattivabile) : deploy automatizzati in GitOps, all'interno di una pipeline **CI/CD**.
- **Harbor** (incluso, disattivabile) : **registro di container** che archivia le immagini dei vostri container e i vostri chart Helm direttamente nel cluster. Effettua **scansioni delle vulnerabilità** sulle vostre immagini e si sincronizza con altri registri ([https://goharbor.io/](https://goharbor.io/)).
- **Keda** (opzionale) : autoscaling dei pod a partire da metriche avanzate, ad esempio un numero di connessioni HTTP.
- **OpenCost** (incluso, disattivabile, [https://github.com/opencost/opencost](https://github.com/opencost/opencost)) : monitoraggio FinOps del consumo delle risorse Kubernetes e refatturazione per progetto o namespace.

### Backup

**Veeam Kasten** (noto anche come K10) effettua il backup di un deployment completo (manifesti, volumi…) verso l'Object Storage Cloud Temple. Si basa su **Kanister** per backup applicativi coerenti, ad esempio per i database ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

## Architettura

### Produzione (multi-zona)

<img src={archi_overview} />

<<<<<<< HEAD
#### Schemi di architettura

- **Vista HLD (High Level Design)** :

<img src={arch_hld} alt="Schéma d'architecture HLD" />

- **Vista LLD (Low Level Design)** :

<img src={arch_lld} alt="Schéma d'architecture LLD" />

Per un deployment "di produzione" (multi-zona), vengono utilizzate le seguenti macchine:

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

(*) : La dimensione e il numero dei Worker Node possono essere adattati in base al fabbisogno di capacità di calcolo del cliente. Il numero minimo di Worker Node è 3 (1 per AZ) e si consiglia di aumentarne il numero a gruppi di 3 per mantenere una distribuzione multi-zona coerente. La dimensione dei Worker Node può essere adattata, con un minimo di 12 core e 24 Go di RAM ; il limite superiore per Worker Node è determinato dalla dimensione degli hypervisor utilizzati (quindi potenzialmente 112 core/1536 Go di RAM con blade Performance 3). Il numero di Worker Node è limitato a 100. Il CNCF consiglia di avere Worker Node di dimensioni identiche. Il limite del numero di pod per Worker Node è 110.

(**) : la dimensione dei Storage Node può essere rivista al rialzo in base alla dimensione dello storage Ceph associato. (ad esempio : 24c/128Go per 10 To di Ceph)

(***) : Ogni nodo di storage è fornito con un minimo di 500 Go di spazio su disco, per uno storage utile Ceph distribuito di 500 Go (i dati sono replicati su ogni AZ, quindi x3). Lo spazio libero disponibile per il cliente è di circa 350 Go. Questa dimensione iniziale può essere aumentata al momento della costruzione, o in seguito, in base alle esigenze. Vengono applicati dei quota su Ceph, con una ripartizione Block/File.
=======
Il cluster di produzione è distribuito su tre zone di disponibilità :

- **Control Plane** : tre nodi, uno per zona ;
- **nodi di storage** : tre nodi Rook-Ceph dedicati, uno per zona ;
- **nodi Worker** : almeno tre, uno per zona, regolabili in base alle vostre esigenze ;
- **nodi Worker Bare Metal** (opzionale) : per esigenze di performance specifiche, in particolare i GPU ;
- **Git Runner** : un nodo per le pipeline CI/CD ;
- **firewall gestito** : due macchine virtuali, che filtrano gli IP pubblici dell'API Kubernetes e degli ingress sicuri.
>>>>>>> origin/dev

### Dev/test (mono zona)

<img src={archi_overview_1az} />

Il cluster di sviluppo e test è deployato su una singola zona di disponibilità, con un Control Plane, tre nodi Worker al minimo e un Git Runner. Lo storage Ceph è condiviso sui nodi Worker.

<<<<<<< HEAD
| **AZ** | **Macchina** | **vCores** | **RAM** | **Archiviazione locale**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 Go          | OS: 256 Go                           |
| AZ0n         | Control Plane     | 8                | 12 Go         | OS: 128 Go                           |
| AZ0n         | Worker Node 1 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimo (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimo (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimo (**) |

(*) : La dimensione e il numero dei Worker Node possono essere adattati in base al fabbisogno di capacità di calcolo del cliente. Il numero minimo di Worker Node è 3 (a causa della replicazione dello storage). La dimensione dei Worker Node può essere adattata, con un minimo di 12 core e 24 Go di RAM ; il limite superiore per Worker Node è determinato dalla dimensione degli hypervisor utilizzati (quindi potenzialmente 112 core/1536 Go di RAM con blade Performance 3). Il numero di Worker Node è limitato a 100. Il CNCF consiglia di avere Worker Node di dimensioni identiche. Il limite del numero di pod per Worker Node è 110.
=======
### Integrazioni

- **Object Storage Cloud Temple** : log (Loki) e backup (Kasten).
- **Provider di identità** : integrazione via OIDC, inclusa e disattivabile.
- **IaaS Cloud Temple** : interconnessione dei cluster con risorse virtualizzate, come database o componenti middleware.
>>>>>>> origin/dev

## Regioni e zone di disponibilità

Managed Kubernetes è disponibile nella regione FR1. Un cluster di produzione è distribuito su tre zone di disponibilità ; un cluster di sviluppo e test è deployato su una sola. I dati sono ospitati in Francia.

<a id="noeuds-kubernetes"></a>

## Caratteristiche tecniche

### Nodi di un cluster di produzione

| **AZ** | **Macchina**         | **vCores** | **RAM** | **Archiviazione locale**                    |
| ------ | ------------------- | ---------- | ------- | ------------------------------------- |
| AZ07   | Git Runner          | 4          | 8 Go    | OS: 256 Go                            |
| AZ05   | Control Plane 1     | 8          | 12 Go   | OS: 64 Go                             |
| AZ06   | Control Plane 2     | 8          | 12 Go   | OS: 64 Go                             |
| AZ07   | Control Plane 3     | 8          | 12 Go   | OS: 64 Go                             |
| AZ05   | Storage Node 1 (**) | 12         | 24 Go   | OS: 64 Go + Ceph 500 Go minimo (***) |
| AZ06   | Storage Node 2 (**) | 12         | 24 Go   | OS: 64 Go + Ceph 500 Go minimo (***) |
| AZ07   | Storage Node 3 (**) | 12         | 24 Go   | OS: 64 Go + Ceph 500 Go minimo (***) |
| AZ05   | Worker Node 1 (*)   | 12         | 24 Go   | OS: 64 Go                             |
| AZ06   | Worker Node 2 (*)   | 12         | 24 Go   | OS: 64 Go                             |
| AZ07   | Worker Node 3 (*)   | 12         | 24 Go   | OS: 64 Go                             |

(*) : la dimensione e il numero dei Worker Node si adattano al vostro fabbisogno di capacità di calcolo. Si consiglia di aumentarne il numero a gruppi di 3 per mantenere una distribuzione multi-zona coerente, e di avere Worker Node di dimensioni identiche, come consiglia la CNCF.

(**) : la dimensione dei Storage Node può essere aumentata in base alla dimensione dello storage Ceph associato (ad esempio 24 core e 128 Go di RAM per 10 To di Ceph).

(***) : ogni nodo di storage è fornito con almeno 500 Go di spazio su disco, per uno storage utile Ceph distribuito di 500 Go (i dati sono replicati su ogni zona, quindi tre volte). Lo spazio libero disponibile per il cliente è di circa 350 Go. Questa dimensione iniziale può essere aumentata alla costruzione o in seguito. Vengono applicati dei quota su Ceph, con una ripartizione blocco / file.

### Nodi di un cluster di sviluppo e test

| **AZ** | **Macchina**       | **vCores** | **RAM** | **Archiviazione locale**                   |
| ------ | ----------------- | ---------- | ------- | ------------------------------------ |
| AZ0n   | Git Runner        | 4          | 8 Go    | OS: 256 Go                           |
| AZ0n   | Control Plane     | 8          | 12 Go   | OS: 64 Go                            |
| AZ0n   | Worker Node 1 (*) | 12         | 24 Go   | OS: 64 Go + Ceph 300 Go minimo (**) |
| AZ0n   | Worker Node 2 (*) | 12         | 24 Go   | OS: 64 Go + Ceph 300 Go minimo (**) |
| AZ0n   | Worker Node 3 (*) | 12         | 24 Go   | OS: 64 Go + Ceph 300 Go minimo (**) |

(*) : la dimensione e il numero dei Worker Node si adattano al vostro fabbisogno. Il minimo di tre Worker Node è imposto dalla replicazione dello storage.

(**) : tre Worker Node fungono da nodi di storage e sono forniti con almeno 300 Go di spazio su disco, per uno storage utile distribuito di 300 Go (i dati sono replicati tre volte). Lo spazio libero disponibile per il cliente è di circa 150 Go. Questa dimensione iniziale può essere aumentata alla costruzione o in seguito.

### Limiti

| Parametro                          | Produzione                         | Sviluppo e test              |
|------------------------------------|------------------------------------|------------------------------------|
| Numero di Worker Nodes             | 3 minimo (1 per zona), 100 massimo | 3 minimo, 250 massimo            |
| Dimensione minima di un Worker Node   | 12 core, 24 Go di RAM             | 12 core, 24 Go di RAM             |
| Dimensione massima di un Worker Node   | Dimensione dell'hypervisor, fino a 112 core e 1 536 Go di RAM (blade Performance 3) | Idem |
| Pod per Worker Node               | 110                                | 110                                |

## Sicurezza e conformità

Managed Kubernetes è certificato HDS e ISO 27001, e disponibile su servizi qualificati SecNumCloud e conformi C5.

- **OS immutabile** : senza shell né accesso SSH, gestito esclusivamente via API.
- **Crittografia** : dati cifrati a riposo e in transito, crittografia fisica dei link tra zone di disponibilità.
- **Governance** : policy Kyverno, permessi per tenant con Capsule, log di audit completo.
- **Residenza dei dati** : Francia (FR1), in formati Kubernetes standard.

## Backup e continuità

<<<<<<< HEAD
#### Backup dell'infrastruttura (perimetro gestito)

- **Backup del cluster tramite Kasten K10** (parte Disaster Recovery e Infrastruttura), con test di disaster recovery.
- **Perimetro base** : namespace e PVC (Ceph RBD), oggetti CRD critici infrastruttura, osservabilità, operatori standard.
- **etcd (stato del cluster)** : snapshot giornaliero eseguito da Cloud Temple al di fuori di Kasten, con la configurazione dei nodi Talos ; serve a ricostruire il piano di controllo. Gli snapshot sono conservati per 2 giorni sulla VM di management, essa stessa backup al livello IaaS con una policy giornaliera e 35 giorni di retention.
- **Frequenza** : giornaliera (retention 7 g) e settimanale (retention 4 sett).
- **Impegni** : RPO ≤ 24 h, RTO ≤ 4 h (ricostruzione automatizzata del cluster e ripristino dei componenti tramite Kasten).
- **Destinazione** : S3 Cloud Temple (FR), crittografia lato server.

#### Backup dei workload del cliente (basato sui label)

Il servizio fornisce un meccanismo flessibile per effettuare il backup dei workload del cliente utilizzando dei label.

- **Meccanismo** : iscrivere delle risorse (namespace, PVC, ecc.) in una policy di backup tramite label specifici.
- **Policy disponibili** : 24 policy orarie, che coprono ogni ora della giornata (00 a 23 UTC).
- **Formato del label** : `kasten-dailyHH-r7d: "true"` (dove `HH` è l'ora in formato 24 h, ad es. `00`, `14`, `23`).
- **Frequenza** : giornaliera all'ora specificata (UTC). **Retention** : 7 giorni su S3.
- **Esempio** : per effettuare il backup di un namespace ogni giorno alle 14:00 UTC, aggiungere il label `kasten-daily14-r7d: "true"` al namespace.
- **Volumi TopoLVM** : `topolvm-ssd` non gestisce gli snapshot ; senza precauzioni, un namespace backup che contiene un volume TopoLVM vede **tutto** il suo backup fallire, volumi Ceph compresi. Questi volumi si backup con Kasten **in modalità blueprint** (Kanister) : Kasten esegue un backup applicativo (dump del database, export dei dati) inviato su S3, e il ripristino riproduce l'operazione inversa. Il blueprint è specifico per ogni applicazione e viene messo in atto **su studio**, a richiesta del cliente.
- **Perimetro applicativo** : RPO e RTO definiti dal cliente.

### Supporto e risoluzione dei problemi
=======
- **Backup dei workload** : Veeam Kasten effettua il backup dei vostri deployment (manifesti e volumi) verso l'Object Storage Cloud Temple, con backup applicativi coerenti.
- **Replicazione dello storage** : in produzione, i volumi Ceph replicati vengono copiati sulle tre zone di disponibilità.
- **Alta disponibilità** : in produzione, il Control Plane e i nodi di storage sono distribuiti su tre zone.
>>>>>>> origin/dev

<a id="politique-de-versions--cycle-de-vie"></a>

## Versioni e ciclo di vita

- **Kubernetes supportato :** N-2 (tre release maggiori all'anno, circa ogni quattro mesi). Ogni release è supportata ufficialmente per 12 mesi, per una finestra di supporto di circa 16 mesi massimo per versione.
- **Talos OS :** allineato alle versioni stabili di Kubernetes.
  - Ogni branch è mantenuto per circa 12 mesi, patch di sicurezza incluse.
  - Ritmo di upgrade consigliato : tre volte all'anno, in coerenza con gli upgrade Kubernetes.
  - Le patch critiche (CVE, kernel) vengono applicate in rolling upgrade, senza interruzione del servizio.
- **Aggiornamenti :**
  - **maggiori** (Kubernetes N+1, Talos X+1) : pianificati tre volte all'anno, in rolling update ;
  - **minori** : applicati automaticamente entro un termine di 30 a 60 giorni.
- **Deprecazione :** la versione N-3 raggiunge la fine del supporto 90 giorni dopo il rilascio della versione N.

<a id="sla--information-sur-le-support"></a>

## Disponibilità del servizio

| Elemento                     | Obiettivo di disponibilità, misurato su un mese |
|-----------------------------|-----------------------------------------------|
| Cluster di produzione (API Kubernetes) | 99,95 %                            |
| Storage di produzione (volumi Ceph)  | 99,90 %                            |

I cluster di sviluppo e test non hanno un obiettivo di disponibilità.

<a id="raci"></a>

## Responsabilità

La ripartizione delle responsabilità tra il cliente e Cloud Temple è dettagliata nella [matrice delle responsabilità (RACI) Managed Kubernetes](../contractual/kubernetes/raci.md). In sintesi:

- **Cloud Temple** è responsabile della piattaforma Kubernetes e dei servizi gestiti: sicurezza, backup del cluster, supervisione, aggiornamenti e operatori inclusi.
- **Il cliente** è responsabile dei propri progetti applicativi, dei propri operatori di business, dei propri pipeline CI/CD e dei backup delle proprie applicazioni.
- **Support**: livelli 1, 2 e 3 inclusi per la piattaforma (infrastruttura e operatori standard). I tempi di presa in carico dipendono dalla gravità dell'incidente (P1 a P4).
- **Manutenzione**: patching regolare di Talos, di Kubernetes e degli operatori standard, in rolling upgrade, senza interruzione del servizio.

## Reversibilità

I cluster si basano su standard open source e formati Kubernetes standard, garantendo la portabilità delle vostre applicazioni.

| Operazione                | Consegna                    | Termine       | Costo       |
|--------------------------|-----------------------------|-------------|------------|
| Esportazione delle applicazioni  | Manifesti YAML Kubernetes  | 15 giorni    | Senza costi |
| Backup dei volumi   | Backup Veeam Kasten    | In continuo  | Incluso     |
| Assistenza alla migrazione | Supporto tecnico          | Su richiesta | Su preventivo  |

**Veeam Kasten** funziona anche con altri cluster Kubernetes (OpenShift, hyperscaler…). Può quindi essere utilizzato per scenari di reversibilità o di migrazione, gestendo gli adattamenti necessari tramite *transformations* (ad esempio un cambio di ingress-class), ma anche per operazioni di « refresh », come il ripristino pianificato di un ambiente di produzione in pre-produzione.

## Tariffe

Il servizio gestito è fatturato mensilmente, per cluster; l'infrastruttura IaaS sottostante (compute, storage, rete) è fatturata in aggiunta, in base al dimensionamento. Le tariffe sono pubblicate sulla pagina prodotto del sito Cloud Temple:
[Managed Kubernetes — tariffe](https://www.cloud-temple.com/produits/managed-kubernetes/).
