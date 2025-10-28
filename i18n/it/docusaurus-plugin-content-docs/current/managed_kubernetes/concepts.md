---
title: Concetti
---

import cillium from './images/cillium.png'
import grafana from './images/grafana.png'
import archi_overview from './images/archi_overview.png'
import archi_overview_1az from './images/archi_overview_1az.png'

## Presentazione di Managed Kubernetes

L'offerta **Managed Kubernetes** (noto anche come "Kub Managé" o "KM") è una soluzione di containerizzazione Kubernetes gestita da Cloud-Temple, distribuita sotto forma di Macchine Virtuali che operano sull'infrastruttura IaaS Cloud-Temple (OpenIaaS o VMware).

**Managed Kubernetes** si basa su Talos Linux (https://www.talos.dev/), un sistema operativo dedicato a Kubernetes, leggero e sicuro. È immutabile, privo di shell e accesso SSH, e configurato esclusivamente in modo dichiarativo tramite API gRPC.

L'installazione standard include un insieme di componenti, principalmente Open Source e validati dal CNCF:

- **CNI Cillium**, con interfaccia di osservabilità (**Hubble**): Cillium è una soluzione di rete per container Kubernetes (*Container Network Interface*). Gestisce sicurezza, load balancing, service mesh, osservabilità, crittografia, ecc. È un componente di rete fondamentale presente in molte varianti di Kubernetes (OpenShift, AKS, GKE, EKS, ...). Abbiamo integrato l'interfaccia grafica **Hubble** per una visualizzazione dei flussi Cillium.

    <img src={cillium} />

- **MetalLB** e **nginx**: per l'esposizione delle applicazioni Web, sono integrate di default tre *ingress-class* **nginx**:
    - *nginx-external-secured*: esposizione su un'IP pubblica, filtrata dal firewall per consentire solo IP noti (utilizzato per le interfacce grafiche dei diversi prodotti e per l'API Kubernetes)
    - *nginx-external*: esposizione su una seconda IP pubblica non filtrata (o con filtraggio specifico per il cliente)
    - *nginx-internal*: esposizione su un'IP interna esclusivamente
    
    Per i servizi "non web", un load-balancer **MetalLB** permette di esporre servizi internamente o su IP pubbliche (consentendo così il deployment di altri ingress, ad esempio un WAF)

- **Archiviazione distribuita Rook-Ceph**: per l'archiviazione dei volumi persistenti (PV), è integrata un'archiviazione distribuita **Ceph** Open Source. Permette l'utilizzo delle *storage-classes* *ceph-block*, *ceph-bucket* e *ceph-filesystem*. Viene utilizzata un'archiviazione con **7500 IOPS/To**, garantendo prestazioni elevate. Nei deployment di produzione (su 3 AZ), i nodi di archiviazione sono dedicati (1 nodo per AZ); nei deployment non di produzione (1 AZ), l'archiviazione è condivisa con i nodi worker.

- **Cert-Manager**: il gestore di certificati Open Source **Cert-Manager** è integrato nativamente nella piattaforma.

- **ArgoCD**: utilizziamo **ArgoCD** per i deployment automatizzati dei diversi componenti tramite una catena di **CI/CD**.

- Stack **Prometheus** (Prometheus, Grafana, Promtail, Loki): i cluster Managed Kubernetes vengono forniti di default con uno stack Open Source completo **Prometheus** per l'osservabilità, che include:
    - **Prometheus**
    - **Grafana**, con numerosi dashboard
    - **Loki** e **PromTail**: i log della piattaforma vengono esportati verso lo storage S3 Cloud-Temple (e integrati in Grafana).

    <img src={grafana} />

- **Harbor** è un **Container registry** che ti permette di archiviare le immagini dei tuoi container o i chart Helm direttamente nel cluster. Esegue **scan di vulnerabilità** sulle tue immagini e può firmarle digitalmente. **Harbor** permette anche sincronizzazioni con altri registri. (https://goharbor.io/)

- **KubeCost** (https://github.com/kubecost) è uno strumento per la gestione dei costi (Finops) in Kubernetes. Ti permette di monitorare in modo dettagliato il consumo delle risorse Kubernetes e di effettuare la sottofatturazione per progetto/namespace.

- Strategie di sicurezza avanzate con **Kyverno** e **Capsule**:
    - **Kyverno** (https://kyverno.io/) è un controller di ammissione per Kubernetes che permette di applicare strategie. È uno strumento essenziale per la governance e la sicurezza in Kubernetes.
    - **Capsule** (https://projectcapsule.dev/) è uno strumento per la gestione dei permessi che semplifica la gestione dei diritti in Kubernetes. Introduce il concetto di *tenant*, che permette di centralizzare e delegare i permessi su più namespace. Attraverso **Capsule**, gli utenti della piattaforma Kubernetes Gestito dispongono quindi di diritti limitati ai propri namespace.

- **Veeam Kasten** (noto anche come 'k10') è una soluzione per la **protezione** dei carichi di lavoro Kubernetes.

    Permette di eseguire backup completi: manifesti, volumi, ecc. verso lo storage oggetto S3 Cloud-Temple. **Kasten** utilizza **Kanister** per garantire backup coerenti a livello applicativo, ad esempio per database (https://docs.kasten.io/latest/usage/blueprints/). 
    
    **Kasten** è uno strumento cross-platform che può funzionare con altri cluster Kubernetes (OpenShift, Hyperscaler, ...). Può quindi essere utilizzato per scenari di reversibilità o migrazione (K10 gestisce le eventuali adattamenti tramite *trasformazioni*, ad esempio un cambiamento di ingress-class), ma anche per "refresh" (esempio: ripristino pianificato di un ambiente di produzione in pre-produzione).

    **Veeam Kasten** richiede licenze, fatturate per nodo worker.

- (opzionale): Autenticazione **Entra con SSO**: per gli utenti che desiderano autenticarsi direttamente a Kubernetes Gestito con il proprio account EntraID (Microsoft 365), è possibile configurare (opzionalmente) un SSO tramite **KeyCloak**. (*Integrazione con altri IdP esterni su richiesta*)

## SLA e informazioni sul supporto
- **Disponibilità garantita (produzione 3 AZ)**: 99,95 %
- **Supporto**: N1/N2/N3 incluso per il perimetro base (infrastruttura e operatori standard).
- **Impegno sul tempo di ripristino (ETR)**: secondo il contratto quadro Cloud Temple.
- **Manutenzione (MCO)**: aggiornamenti regolari di Talos / Kubernetes / operatori standard da parte del MSP, senza interruzioni del servizio (aggiornamento rolling).

I tempi di intervento e ripristino dipendono dalla gravità dell'incidente, secondo la griglia di supporto (P1 a P4).

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

| **AZ** | **Macchina**         | **vCores** | **RAM**  | **Archiviazione locale**                     |
|--------|----------------------|------------|----------|----------------------------------------------|
| AZ07   | Git Runner           | 4          | 8 GB     | OS: 20 GB                                    |
| AZ05   | Control Plane 1      | 8          | 12 GB    | OS: 20 GB                                    |
| AZ06   | Control Plane 2      | 8          | 12 GB    | OS: 20 GB                                    |
| AZ07   | Control Plane 3      | 8          | 12 GB    | OS: 20 GB                                    |
| AZ05   | Storage Node 1       | 12         | 24 GB    | OS: 20 GB + Ceph 500 GB minimo (*)          |
| AZ06   | Storage Node 2       | 12         | 24 GB    | OS: 20 GB + Ceph 500 GB minimo (*)          |
| AZ07   | Storage Node 3       | 12         | 24 GB    | OS: 20 GB + Ceph 500 GB minimo (*)          |
| AZ05   | Worker Node 1 (**)   | 12         | 24 GB    | OS: 20 GB                                    |
| AZ06   | Worker Node 2 (**)   | 12         | 24 GB    | OS: 20 GB                                    |
| AZ07   | Worker Node 3 (**)   | 12         | 24 GB    | OS: 20 GB                                    |

(*) : Ogni nodo di archiviazione viene fornito con un minimo di 500 GB di spazio disco, per un utilizzo effettivo di archiviazione Ceph distribuita di 500 GB (i dati sono replicati in ogni AZ, quindi ×3). Lo spazio disponibile per il cliente è di circa 350 GB. Questa dimensione iniziale può essere aumentata al momento della costruzione o successivamente, in base alle esigenze.

(**) : La dimensione e il numero di Worker Nodes possono essere adattati in base alle esigenze di capacità di calcolo del cliente. Il numero minimo di Worker Nodes è 3 (1 per AZ), e si consiglia di aumentarne il numero in lotti di 3 per mantenere una distribuzione coerente multi-zonale. La dimensione dei Worker Nodes può essere personalizzata, con un minimo di 12 core e 24 GB di RAM; il limite superiore per ogni Worker Node è determinato dalla dimensione degli hypervisor utilizzati (potenzialmente fino a 112 core/1536 GB di RAM con le lame Performance 3). Il numero massimo di Worker Nodes è 250. Il CNCF raccomanda di utilizzare Worker Nodes della stessa dimensione. Il limite massimo di pod per Worker Node è 110.

### dev/test (mono-zonale)
<img src={archi_overview_1az} />

Per una versione "dev/test" (mono-zonale), le seguenti macchine vengono distribuite:

| **AZ** | **Macchina**       | **vCores** | **RAM** | **Archiviazione locale**               |
| ------ | ------------------ | ---------- | ------- | -------------------------------------- |
| AZ0n   | Git Runner         | 4          | 8 GB    | OS: 20 GB                              |
| AZ0n   | Control Plane      | 8          | 12 GB   | OS: 20 GB                              |
| AZ0n   | Worker Node 1 (**) | 12         | 24 GB   | OS: 20 GB + Ceph minimo 300 GB (*)    |
| AZ0n   | Worker Node 2 (**) | 12         | 24 GB   | OS: 20 GB + Ceph minimo 300 GB (*)    |
| AZ0n   | Worker Node 3 (**) | 12         | 24 GB   | OS: 20 GB + Ceph minimo 300 GB (*)    |

(*) : 3 nodi Worker vengono utilizzati come nodi di archiviazione e sono forniti con almeno 300 GB di spazio disco, per un archiviazione utile distribuita di 300 GB (i dati sono replicati tre volte). Lo spazio disponibile per il cliente è di circa 150 GB. Questa dimensione iniziale può essere aumentata al momento della costruzione o in un secondo momento, in base alle esigenze.

(**) : La dimensione e il numero dei nodi Worker possono essere adattati in base alle esigenze di capacità di calcolo del cliente. Il numero minimo di nodi Worker è 3 (a causa della replica del storage). La dimensione dei nodi Worker può essere modificata, con un minimo di 12 core e 24 GB di RAM; il limite superiore per nodo Worker è determinato dalla dimensione degli hypervisor utilizzati (potenzialmente fino a 112 core/1536 GB di RAM con le lame Performance 3). Il numero massimo di nodi Worker è 250. Il CNCF raccomanda di utilizzare nodi Worker della stessa dimensione. Il limite massimo di pod per nodo Worker è 110.

## Prerequis IaaS

Devi disporre di un'infrastruttura IaaS con i requisiti minimi per il deployment di Kubernetes Gestito:

### Produzione (multi-zona)

- 1 tenant Cloud-Temple
- 3 AZ
- 2 IP pubbliche disponibili
- 1 VLAN multi-zona con un range privato IPv4 **/22**
- 1 cluster di firewall: preferibilmente Fortigate, per avere load-balancing con BGP e automazione completa (ma gli altri cluster di firewall sono accettati)
- ~2 TB di archiviazione S3 (fatturata al consumo)
- In ogni AZ:
    - 1 host hypervisor (OpenIaaS o VMware) per AZ con 40 core e 72 GB di RAM dedicati a Kubernetes Gestito (host ECO o superiore)
    - 600 GB disponibili in un datastore con **7500 IOPS effettivi** (ad esempio un datastore da 2,5 TB a 3000 IOPS)

### Dev/test (mono-zonale)

- 1 tenant Cloud-Temple  
- 1 AZ  
- 2 IP pubbliche disponibili  
- 1 VLAN con un range privato IPv4 **/22**  
- 1 cluster di firewall: preferibilmente Fortigate, per avere load-balancing con BGP e automazione completa (ma gli altri cluster di firewall sono accettati)  
- una capacità di calcolo disponibile di 48 core e 92 GB di RAM (è accettabile che i core siano soggetti a un coefficiente di virtualizzazione di 1,5)  
- 1,2 TB disponibili in un datastore con **7500 IOPS effettivi**  
- ~1 TB di storage S3 (fatturato al consumo)