---
title: Concetti
sidebar_label: Concetti (Core)
---
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Presentazione

Managed Core Kubernetes è una base di orchestrazione dei container gestita, basata su standard open source validati dalla CNCF. Ogni cluster viene distribuito in un ambiente dedicato al cliente, su una sola zona di disponibilità o su tre. La base fornisce le fondamenta di Kubernetes (OS, rete, load balancer, storage distribuito) e vi lascia liberi di costruire la vostra piattaforma con i vostri strumenti di distribuzione continua, osservabilità, backup o sicurezza.

Per una piattaforma fornita pronta all'uso, con questi strumenti già integrati, consultate l'offerta [Managed Kubernetes](../managed_kubernetes/concepts.md), che confronta anche le due offerte componente per componente.

### Destinatari e casi d'uso

Managed Core Kubernetes è rivolto ai team che padroneggiano Kubernetes e l'ecosistema cloud-native: team di piattaforma, architetti cloud, organizzazioni dotate di uno stack tecnico proprio e aziende regolamentate. Casi d'uso tipici:

- **Piattaforme interne (IDP)**: costruzione di una piattaforma su misura per gli sviluppatori.
- **Applicazioni cloud-native**: architetture a microservizi con uno stack personalizzato.
- **Ambienti multipli**: separazione tra sviluppo, test e produzione.
- **Conformità normativa**: distribuzioni su una base sovrana e controllata.

## Vantaggi

| Vantaggio              | Descrizione                                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------------------------|
| Fondamenta gestite     | L'infrastruttura, l'OS e i componenti della base sono gestiti per voi.                                             |
| Libertà di costruzione | Installate e configurate il vostro stack (osservabilità, CI/CD, sicurezza…).                                       |
| Alta disponibilità     | In produzione, il cluster è ripartito su tre zone di disponibilità.                                                |
| Sicurezza by design    | OS minimalista e immutabile, gestito esclusivamente tramite API, senza shell né accesso SSH.                       |
| Compatibile CNCF       | Gli standard open source evitano la dipendenza tecnologica e garantiscono la portabilità delle vostre applicazioni. |

## Funzionalità

I cluster si basano su Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un sistema operativo dedicato a Kubernetes, leggero e sicuro. È immutabile, senza shell né accesso SSH, e configurato esclusivamente in modo dichiarativo tramite un'API gRPC.

| Componente                  | Descrizione                                                                                                   |
|-----------------------------|---------------------------------------------------------------------------------------------------------------|
| CNI Cilium                  | Rete dei container e policy di rete.                                                                          |
| MetalLB                     | Load balancer per esporre servizi internamente o su IP pubblici.                                              |
| Storage distribuito Rook-Ceph | Volumi persistenti con le *storage-classes* *ceph-block*, *ceph-bucket* e *ceph-filesystem*, 7.500 IOPS.    |
| Storage locale TopoLVM (opzionale) | Storage veloce sui Worker Node, per le applicazioni che replicano autonomamente i propri dati.       |

I componenti applicativi (ingress, osservabilità, backup, gestione dei certificati, governance) non sono inclusi: siete voi a sceglierli e a gestirli.

## Architettura

### Produzione (multizona)

<img src={archi_overview} />

Il cluster di produzione è ripartito su tre zone di disponibilità:

- **Control Plane**: tre nodi, uno per zona;
- **nodi di storage**: tre nodi Rook-Ceph dedicati, uno per zona, con dati replicati sulle tre zone;
- **nodi Worker**: almeno tre, uno per zona, regolabili in base alle vostre esigenze;
- **nodi Worker Bare Metal** (opzionale): per esigenze di prestazioni specifiche, in particolare le GPU;
- **Git Runner**: un nodo per le pipeline CI/CD;
- **firewall gestito**: due macchine virtuali, che filtrano gli IP pubblici dell'API Kubernetes.

### Dev/test (una o due zone)

<img src={archi_overview_1az} />

Il cluster di sviluppo e test viene distribuito su una sola zona di disponibilità, con un Control Plane, almeno tre nodi Worker e un Git Runner. Lo storage Ceph è condiviso sui nodi Worker.

### Integrazioni

- **Provider di identità**: integrazione opzionale tramite OIDC.
- **IaaS Cloud Temple**: interconnessione dei cluster con risorse virtualizzate, come database o componenti middleware.

## Regioni e zone di disponibilità

Managed Core Kubernetes è disponibile nella regione FR1. Un cluster di produzione è ripartito su tre zone di disponibilità; un cluster di sviluppo e test viene distribuito su una sola. I dati sono ospitati in Francia.

## Specifiche tecniche

### Nodi di un cluster di produzione

| **Macchina**        | **Numero**  | **vCores** | **RAM** | **Storage locale**                                 |
| ------------------- | ----------- | ---------- | ------- | -------------------------------------------------- |
| Git Runner          | 1           | 4          | 8 GB    | OS: 256 GB                                         |
| Control Plane       | 3 (1 per AZ) | 8         | 12 GB   | OS: 64 GB                                          |
| Storage Node        | 3 (1 per AZ) | 12        | 24 GB   | OS: 64 GB + Ceph 500 GB minimo (~350 GB utili)     |
| Worker Node         | 3 o più (almeno 1 per AZ) | 12 o più | 24 GB o più | OS: 64 GB                             |

### Nodi di un cluster di sviluppo e test

| **Macchina**  | **Numero** | **vCores** | **RAM** | **Storage locale**                               |
| ------------- | ---------- | ---------- | ------- | ------------------------------------------------ |
| Git Runner    | 1          | 4          | 8 GB    | OS: 256 GB                                       |
| Control Plane | 1          | 8          | 12 GB   | OS: 64 GB                                        |
| Worker Node   | 3 o più    | 12 o più   | 24 GB o più | OS: 64 GB + Ceph 300 GB minimo (~150 GB utili) |

In sviluppo e test, tre Worker Node fungono anche da nodi di storage: questo minimo è imposto dalla replica dello storage.

### Limiti

| Parametro                        | Produzione                          | Sviluppo e test       |
|----------------------------------|-------------------------------------|-----------------------|
| Numero di Worker Node            | 3 minimo (1 per zona), 100 massimo  | 3 minimo, 250 massimo |
| Dimensione minima di un Worker Node | 12 core, 24 GB di RAM            | 12 core, 24 GB di RAM |
| Pod per Worker Node              | 110                                 | 110                   |

## Sicurezza e conformità

Managed Core Kubernetes è certificato HDS e ISO 27001, e disponibile su servizi qualificati SecNumCloud e conformi C5.

- **OS immutabile**: senza shell né accesso SSH, gestito esclusivamente tramite API.
- **Crittografia**: dati crittografati a riposo e in transito, crittografia fisica dei collegamenti tra zone di disponibilità.
- **Tracciabilità**: registro di audit completo.
- **Residenza dei dati**: Francia (FR1), in formati Kubernetes standard.

## Versioni e ciclo di vita

- **Kubernetes supportato:** N-2, con una nuova release supportata circa ogni quattro mesi.
- **Aggiornamenti:**
  - **maggiori** (Kubernetes, Talos OS): pianificati tre volte all'anno, in rolling update, senza interruzione;
  - **minori e patch di sicurezza**: applicati automaticamente entro 30-60 giorni.
- **Deprecazione:** la versione N-3 viene deprecata 90 giorni dopo il rilascio della versione N.

## Disponibilità del servizio

L'obiettivo di disponibilità di un cluster di produzione (API Kubernetes) è del 99,95%, misurato su un mese. I cluster di sviluppo e test non hanno un obiettivo di disponibilità.

## Responsabilità

La ripartizione delle responsabilità è dettagliata nella [matrice delle responsabilità (RACI) Managed Kubernetes](../contractual/kubernetes/raci.md). Per l'offerta Core:

- **Cloud Temple** è responsabile della base: infrastruttura, OS, componenti della base e relativi aggiornamenti. Il supporto di livello 1, 2 e 3 è incluso per questo perimetro; i tempi di presa in carico dipendono dalla gravità dell'incidente (da P1 a P4).
- **Il cliente** è completamente autonomo e responsabile di ciò che distribuisce sulla base: applicazioni, operatori, strumenti di supervisione, backup e sicurezza.

## Reversibilità

I cluster si basano su standard open source e formati Kubernetes standard, il che garantisce la portabilità delle vostre applicazioni.

| Operazione                | Deliverable                | Tempistica  | Costo      |
|---------------------------|----------------------------|-------------|------------|
| Esportazione delle applicazioni | Manifest YAML Kubernetes | 15 giorni | Gratuito  |
| Assistenza alla migrazione | Supporto tecnico          | Su richiesta | Su preventivo |

## Prezzi

Il servizio gestito viene fatturato mensilmente, per cluster; l'infrastruttura IaaS sottostante (compute, storage, rete) viene fatturata in aggiunta, in base al dimensionamento. Le tariffe sono pubblicate sulla pagina del prodotto sul sito Cloud Temple:
[Managed Kubernetes — prezzi](https://www.cloud-temple.com/produits/managed-kubernetes/).
