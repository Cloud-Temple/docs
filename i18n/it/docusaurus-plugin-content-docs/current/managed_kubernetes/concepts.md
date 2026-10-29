---
title: Concetti
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

<a id="nos-offres-managed-kubernetes"></a>

## Presentazione

Managed Kubernetes è una piattaforma di orchestrazione di container completamente gestita, basata su standard open source validati dalla CNCF. Ogni cluster viene distribuito in un ambiente dedicato al cliente, su una singola zona di disponibilità o su tre. La piattaforma viene consegnata pronta all'uso, con uno stack completo per la rete, la sicurezza, lo storage, il deployment continuo, l'osservabilità, il backup e la gestione dei costi.

Per i team che preferiscono costruire la propria piattaforma su una base minima, l'offerta [Managed Core Kubernetes](../managed_core_kubernetes/concepts.md) fornisce unicamente i componenti di base.

### Tabella comparativa delle offerte

| Componente                       | Managed Core Kubernetes | Managed Kubernetes          |
| -------------------------------- | ----------------------- | --------------------------- |
| **OS**                           | ✅Talos                 | ✅Talos                     |
| **CNI**                          | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                | ✅MetalLB               | ✅MetalLB                   |
| **Storage distribuito**          | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Storage locale**               | 🔵TopoLVM               | 🔵TopoLVM                   |
| **Osservabilità CNI**            | ❌                      | ✅Hubble                    |
| **Ingress**                      | ❌                      | ✅Ingress Nginx             |
| **Osservabilità**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Backup e migrazione**          | ❌                      | ✅Veeam Kasten              |
| **Governance e sicurezza**       | ❌                      | ✅Kyverno, Capsule          |
| **Gestione dei certificati**     | ❌                      | ✅Cert-Manager              |
| **Deployment continuo (GitOps)** | ❌                      | 🔵ArgoCD                    |
| **Container Registry**           | ❌                      | 🔵Harbor                    |
| **Autenticazione SSO**           | ❌                      | 🔵Integrazione OIDC         |
| **Autoscaling dei pod**          | ❌                      | 🔵Keda                      |
| **Gestione dei costi (FinOps)**  | ❌                      | 🔵OpenCost                  |
| **Osservabilità (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : incluso
🔵 : opzionale/disattivabile
❌ : non incluso

### Destinatari e casi d'uso

Managed Kubernetes si rivolge ai team DevOps, agli sviluppatori di applicazioni cloud-native, agli architetti che migrano verso architetture containerizzate e alle organizzazioni pubbliche o regolamentate. Casi d'uso tipici:

- **Applicazioni cloud-native**: architetture a microservizi.
- **Migrazione verso i container**: modernizzazione progressiva di applicazioni esistenti.
- **CI/CD avanzato**: pipeline di deployment automatizzate in GitOps.
- **Ambienti multipli**: separazione tra sviluppo, test e produzione.
- **Applicazioni critiche**: alta disponibilità su tre zone di disponibilità.
- **Conformità normativa**: deployment soggetti a requisiti di sovranità.

## Vantaggi

| Vantaggio                     | Descrizione                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Completamente gestito         | La configurazione, il deployment e il ciclo di vita del cluster sono presi in carico.                              |
| Alta disponibilità            | In produzione, il cluster è distribuito su tre zone di disponibilità.                                              |
| Sicurezza by design           | OS minimalista e immutabile, gestito unicamente tramite API, senza shell né accesso SSH.                           |
| Piattaforma pronta all'uso    | Rete, osservabilità, backup, governance e certificati sono integrati fin dalla consegna.                            |
| Compatibile CNCF              | Gli standard open source evitano la dipendenza tecnologica e garantiscono la portabilità delle vostre applicazioni. |

<a id="présentation-des-produits-managed-core-kubernetes"></a>

## Funzionalità

I cluster si basano su Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicato a Kubernetes, leggero e sicuro. È immutabile, senza shell né accesso SSH, e configurato unicamente in modo dichiarativo tramite un'API gRPC. L'installazione standardizzata include un insieme di componenti, in maggioranza open source e validati dalla CNCF.

### Rete ed esposizione dei servizi

- **CNI Cilium**, con l'interfaccia di osservabilità **Hubble**: Cilium gestisce il networking dei container (*Container Network Interface*): sicurezza, load balancing, service mesh, osservabilità, crittografia. L'interfaccia grafica **Hubble** consente di visualizzare i flussi Cilium.

  <img src={cillium} />

- **MetalLB** e **nginx**: per l'esposizione delle applicazioni web sono integrate tre *ingress-class* **nginx**:
  - *nginx-external-secured*: esposizione su un IP pubblico, filtrato sul firewall per autorizzare solo IP noti (utilizzata per le interfacce grafiche dei diversi prodotti e per l'API Kubernetes);
  - *nginx-external*: esposizione su un secondo IP pubblico non filtrato (o con un filtraggio proprio del cliente);
  - *nginx-internal*: esposizione unicamente su un IP interno.

  Per i servizi «non web», il load balancer **MetalLB** espone servizi internamente o su IP pubblici, il che consente di distribuire altri ingress, ad esempio un WAF.

> Nota: la versione open source di nginx utilizzata è quella *mantenuta da F5 Networks*, e non la versione originale, deprecata.

### Storage

- **Storage distribuito Rook-Ceph**: storage **Ceph** open source per i volumi persistenti (PV). Fornisce le *storage-classes* *ceph-block* (blocco, replicato multi-zona), *ceph-block-norepl* (blocco, non replicato) e *ceph-filesystem* (file, replicato multi-zona). Lo storage utilizzato offre **7 500 IOPS**.
- **Storage locale TopoLVM** (opzionale): la *storage-class* *topolvm-ssd* memorizza i dati localmente *sui Worker nodes*. Questa opzione è utile per le applicazioni che replicano autonomamente i propri dati (Kafka, MongoDB, PostgreSQL…) e beneficiano di uno storage ultra-veloce, a bassa latenza. Serve generalmente a dedicare dei *Worker nodes* a un carico di lavoro specifico.

### Osservabilità

Lo stack open source **Prometheus** è fornito di serie:

- **Prometheus**, per la raccolta delle metriche;
- **Grafana**, con numerose dashboard;
- **Loki**: i log della piattaforma sono esportati verso lo Storage a Oggetti Cloud Temple e integrati in Grafana;
- **Pyroscope** (opzionale): piattaforma di profiling continuo, interrogabile tramite un LLM.

<img src={grafana} />

### Governance e sicurezza

- **Kyverno** ([https://kyverno.io/](https://kyverno.io/)): controller di ammissione che applica policy di sicurezza e di governance.
- **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)): gestione dei permessi con la nozione di *tenant*, che centralizza e delega i diritti su più namespace. Gli utenti della piattaforma dispongono così di diritti limitati ai soli propri namespace.
- **Cert-Manager**: gestore di certificati open source integrato nativamente.
- **Autenticazione SSO** (opzionale): integrazione con un provider di identità esterno OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce…).

### Deployment e automazione

- **ArgoCD** (opzionale): deployment automatizzati in GitOps, all'interno di una catena **CI/CD**.
- **Harbor** (opzionale): **registro di container** che memorizza le immagini dei vostri container e i vostri chart Helm direttamente nel cluster. Esegue **scansioni delle vulnerabilità** sulle vostre immagini e si sincronizza con altri registri ([https://goharbor.io/](https://goharbor.io/)).
- **Keda** (opzionale): autoscaling dei pod a partire da metriche avanzate, ad esempio un numero di connessioni HTTP.
- **OpenCost** (opzionale, [https://github.com/opencost/opencost](https://github.com/opencost/opencost)): monitoraggio FinOps del consumo delle risorse Kubernetes e riaddebito per progetto o namespace.

### Backup

**Veeam Kasten** (chiamato anche K10) esegue il backup di un deployment completo (manifest, volumi…) verso lo Storage a Oggetti Cloud Temple. Si appoggia su **Kanister** per backup applicativi coerenti, ad esempio per i database ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

## Architettura

### Produzione (multi-zona)

<img src={archi_overview} />

Il cluster di produzione è distribuito su tre zone di disponibilità:

- **Control Plane**: tre nodi, uno per zona;
- **nodi di storage**: tre nodi Rook-Ceph dedicati, uno per zona;
- **nodi Worker**: almeno tre, uno per zona, adattabili in base alle vostre esigenze;
- **nodi Worker Bare Metal** (opzionale): per esigenze di prestazioni specifiche, in particolare le GPU;
- **Git Runner**: un nodo per le pipeline CI/CD;
- **firewall gestito**: due macchine virtuali, che filtrano gli IP pubblici dell'API Kubernetes e degli ingress protetti.

### Dev/test (mono o dual zona)

<img src={archi_overview_1az} />

Il cluster di sviluppo e test è distribuito su una sola zona di disponibilità, con un Control Plane, almeno tre nodi Worker e un Git Runner. Lo storage Ceph è condiviso sui nodi Worker.

### Integrazioni

- **Storage a Oggetti Cloud Temple**: log (Loki) e backup (Kasten).
- **Provider di identità**: integrazione opzionale tramite OIDC.
- **IaaS Cloud Temple**: interconnessione dei cluster con risorse virtualizzate, come database o componenti middleware.

## Regioni e zone di disponibilità

Managed Kubernetes è disponibile nella regione FR1. Un cluster di produzione è distribuito su tre zone di disponibilità; un cluster di sviluppo e test è distribuito su una sola. I dati sono ospitati in Francia.

<a id="noeuds-kubernetes"></a>

## Specifiche tecniche

### Nodi di un cluster di produzione

| **AZ** | **Macchina**        | **vCores** | **RAM** | **Storage locale**                    |
| ------ | ------------------- | ---------- | ------- | ------------------------------------- |
| AZ07   | Git Runner          | 4          | 8 GB    | OS: 256 GB                            |
| AZ05   | Control Plane 1     | 8          | 12 GB   | OS: 64 GB                             |
| AZ06   | Control Plane 2     | 8          | 12 GB   | OS: 64 GB                             |
| AZ07   | Control Plane 3     | 8          | 12 GB   | OS: 64 GB                             |
| AZ05   | Storage Node 1 (**) | 12         | 24 GB   | OS: 64 GB + Ceph 500 GB minimo (***)  |
| AZ06   | Storage Node 2 (**) | 12         | 24 GB   | OS: 64 GB + Ceph 500 GB minimo (***)  |
| AZ07   | Storage Node 3 (**) | 12         | 24 GB   | OS: 64 GB + Ceph 500 GB minimo (***)  |
| AZ05   | Worker Node 1 (*)   | 12         | 24 GB   | OS: 64 GB                             |
| AZ06   | Worker Node 2 (*)   | 12         | 24 GB   | OS: 64 GB                             |
| AZ07   | Worker Node 3 (*)   | 12         | 24 GB   | OS: 64 GB                             |

(*) : la dimensione e il numero dei Worker Nodes si adattano alle vostre esigenze di capacità di calcolo. Si raccomanda di aumentarne il numero a lotti di 3 per mantenere una distribuzione multi-zona coerente, e di avere Worker Nodes di dimensione identica, come consigliato dalla CNCF.

(**) : la dimensione degli Storage Nodes può essere aumentata in funzione della dimensione dello storage Ceph associato (ad esempio 24 core e 128 GB di RAM per 10 TB di Ceph).

(***) : ogni nodo di storage viene consegnato con almeno 500 GB di spazio su disco, per uno storage utile Ceph distribuito di 500 GB (i dati sono replicati su ogni zona, quindi tre volte). Lo spazio libero disponibile per il cliente è di circa 350 GB. Questa dimensione iniziale può essere aumentata in fase di costruzione o successivamente. Su Ceph sono applicate delle quote, con una ripartizione blocco / file.

### Nodi di un cluster di sviluppo e test

| **AZ** | **Macchina**      | **vCores** | **RAM** | **Storage locale**                   |
| ------ | ----------------- | ---------- | ------- | ------------------------------------ |
| AZ0n   | Git Runner        | 4          | 8 GB    | OS: 256 GB                           |
| AZ0n   | Control Plane     | 8          | 12 GB   | OS: 64 GB                            |
| AZ0n   | Worker Node 1 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimo (**)  |
| AZ0n   | Worker Node 2 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimo (**)  |
| AZ0n   | Worker Node 3 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimo (**)  |

(*) : la dimensione e il numero dei Worker Nodes si adattano alle vostre esigenze. Il minimo di tre Worker Nodes è imposto dalla replica dello storage.

(**) : tre Worker Nodes fungono da nodi di storage e vengono consegnati con almeno 300 GB di spazio su disco, per uno storage utile distribuito di 300 GB (i dati sono replicati tre volte). Lo spazio libero disponibile per il cliente è di circa 150 GB. Questa dimensione iniziale può essere aumentata in fase di costruzione o successivamente.

### Limiti

| Parametro                          | Produzione                         | Sviluppo e test                    |
|------------------------------------|------------------------------------|------------------------------------|
| Numero di Worker Nodes             | 3 minimo (1 per zona), 100 massimo | 3 minimo, 250 massimo              |
| Dimensione minima di un Worker Node | 12 core, 24 GB di RAM             | 12 core, 24 GB di RAM              |
| Dimensione massima di un Worker Node | Dimensione dell'hypervisor, fino a 112 core e 1 536 GB di RAM (blade Performance 3) | Idem |
| Pod per Worker Node                | 110                                | 110                                |

## Sicurezza e conformità

Managed Kubernetes è certificato HDS e ISO 27001, e disponibile su servizi qualificati SecNumCloud e conformi C5.

- **OS immutabile**: senza shell né accesso SSH, gestito unicamente tramite API.
- **Crittografia**: dati crittografati a riposo e in transito, crittografia fisica dei collegamenti tra zone di disponibilità.
- **Governance**: policy Kyverno, permessi per tenant con Capsule, registro di audit completo.
- **Residenza dei dati**: Francia (FR1), in formati Kubernetes standard.

## Backup e continuità

- **Backup dei workload**: Veeam Kasten esegue il backup dei vostri deployment (manifest e volumi) verso lo Storage a Oggetti Cloud Temple, con backup applicativi coerenti.
- **Replica dello storage**: in produzione, i volumi Ceph replicati sono copiati sulle tre zone di disponibilità.
- **Alta disponibilità**: in produzione, il Control Plane e i nodi di storage sono distribuiti su tre zone.

<a id="politique-de-versions--cycle-de-vie"></a>

## Versioni e ciclo di vita

- **Kubernetes supportato:** N-2 (tre release maggiori all'anno, circa ogni quattro mesi). Ogni release è supportata ufficialmente per 12 mesi, ovvero una finestra di supporto di circa 16 mesi al massimo per versione.
- **Talos OS:** allineato alle versioni stabili di Kubernetes.
  - Ogni branch è mantenuto per circa 12 mesi, patch di sicurezza incluse.
  - Frequenza di upgrade raccomandata: tre volte all'anno, in coerenza con gli upgrade di Kubernetes.
  - Le patch critiche (CVE, kernel) sono applicate in rolling upgrade, senza interruzione del servizio.
- **Aggiornamenti:**
  - **maggiori** (Kubernetes N+1, Talos X+1): pianificati tre volte all'anno, in rolling update;
  - **minori**: applicati automaticamente entro 30-60 giorni.
- **Deprecazione:** la versione N-3 raggiunge la fine del supporto 90 giorni dopo il rilascio della versione N.

<a id="sla--information-sur-le-support"></a>

## Disponibilità del servizio

| Elemento                    | Obiettivo di disponibilità, misurato su un mese |
|-----------------------------|-----------------------------------------------|
| Cluster di produzione (API Kubernetes) | 99,95 %                            |
| Storage di produzione (volumi Ceph)    | 99,90 %                            |

I cluster di sviluppo e test non hanno un obiettivo di disponibilità.

<a id="raci"></a>

## Responsabilità

La ripartizione delle responsabilità tra il cliente e Cloud Temple è dettagliata nella [matrice delle responsabilità (RACI) Managed Kubernetes](../contractual/kubernetes/raci.md). In sintesi:

- **Cloud Temple** è responsabile della base Kubernetes e dei servizi gestiti: sicurezza, backup del cluster, supervisione, aggiornamenti e operatori inclusi.
- **Il cliente** è responsabile dei propri progetti applicativi, dei propri operatori di business, delle proprie pipeline CI/CD e dei backup delle proprie applicazioni.
- **Supporto**: livelli 1, 2 e 3 inclusi per la base (infrastruttura e operatori standard). I tempi di presa in carico dipendono dalla gravità dell'incidente (da P1 a P4).
- **Manutenzione**: patching regolare di Talos, di Kubernetes e degli operatori standard, in rolling upgrade, senza interruzione del servizio.

## Reversibilità

I cluster si basano su standard open source e su formati Kubernetes standard, il che garantisce la portabilità delle vostre applicazioni.

| Operazione               | Deliverable                 | Tempistica  | Costo      |
|--------------------------|-----------------------------|-------------|------------|
| Esportazione delle applicazioni | Manifest YAML Kubernetes | 15 giorni | Senza costi |
| Backup dei volumi        | Backup Veeam Kasten         | In continuo | Incluso    |
| Assistenza alla migrazione | Supporto tecnico          | Su richiesta | Su preventivo |

**Veeam Kasten** funziona anche con altri cluster Kubernetes (OpenShift, hyperscaler…). Può quindi servire per scenari di reversibilità o di migrazione, gestendo gli adattamenti necessari tramite *trasformazioni* (ad esempio un cambio di ingress-class), ma anche di «refresh», come il ripristino pianificato di un ambiente di produzione in preproduzione.

## Prezzi

Il servizio gestito è fatturato mensilmente, per cluster; l'infrastruttura IaaS sottostante (compute, storage, rete) è fatturata in aggiunta, in base al dimensionamento. I prezzi sono pubblicati sulla pagina del prodotto sul sito Cloud Temple:
[Managed Kubernetes — prezzi](https://www.cloud-temple.com/produits/managed-kubernetes/).
