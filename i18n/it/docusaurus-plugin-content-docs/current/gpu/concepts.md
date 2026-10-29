---
title: Concetti
---

## Presentazione

GPU fornisce schede grafiche NVIDIA H100 e L40S per i calcoli di intelligenza artificiale, apprendimento automatico e calcolo ad alte prestazioni. Le GPU non si ordinano singolarmente: sono integrate nei blade di calcolo e nei worker node delle offerte IaaS e PaaS. Le utilizzate da macchine virtuali, server Bare Metal, container o cluster Kubernetes, con gli strumenti standard dell'ecosistema NVIDIA.

### Destinatari e casi d'uso

GPU si rivolge a data scientist, ricercatori, ingegneri, aziende che distribuiscono servizi di IA e al settore pubblico. Casi d'uso tipici:

- **Addestramento di modelli**: addestramento di reti neurali e apprendimento profondo (deep learning).
- **Inferenza**: distribuzione di servizi di IA in produzione.
- **Visione artificiale**: elaborazione di immagini e video.
- **Ingegneria e simulazione**: strumenti di modellazione e di simulazione.
- **Ricerca scientifica**: calcolo scientifico, modellazione di scenari complessi e analisi di grandi volumi di dati.

## Vantaggi

| Vantaggio                  | Descrizione                                                                                                       |
|----------------------------|-------------------------------------------------------------------------------------------------------------------|
| Accelerazione dei calcoli  | Le GPU accelerano l'addestramento e l'inferenza dei modelli di IA rispetto a un'elaborazione su CPU.              |
| Diverse modalità d'uso     | Le GPU si utilizzano da macchine virtuali, server Bare Metal, container e Kubernetes.                             |
| Risorse dedicate           | Le schede sono installate in blade di calcolo dedicati al vostro utilizzo.                                        |
| Partizionamento            | Una scheda H100 può essere condivisa tra più carichi di lavoro isolati grazie a Multi-Instance GPU (MIG).         |
| Ecosistema standard        | CUDA, cuDNN e i principali framework di IA si utilizzano senza adattamenti.                                       |
| Hosting in Francia         | Le risorse GPU e i dati elaborati sono ospitati in Francia.                                                       |

## Funzionalità

| Funzionalità             | Descrizione                                                                                          |
|--------------------------|------------------------------------------------------------------------------------------------------|
| NVIDIA H100              | Scheda con 80 GB di memoria GPU.                                                                     |
| NVIDIA L40S              | Scheda con 48 GB di memoria GPU.                                                                     |
| Multi-Instance GPU       | Partizionamento di una scheda H100 in un massimo di 7 istanze, ciascuna con la propria memoria dedicata. |
| Server Bare Metal        | Blade di calcolo dotati di GPU, a vostro uso esclusivo.                                              |
| Macchine virtuali        | GPU accessibili dalle macchine virtuali delle offerte IaaS.                                          |
| Container e Kubernetes   | Worker node GPU su PaaS OpenShift e nodi Bare Metal con GPU su Managed Kubernetes.                   |
| Librerie NVIDIA          | Compatibilità con CUDA, cuDNN e i framework di IA (TensorFlow, PyTorch, ecc.).                       |
| Gestione centralizzata   | Gestione delle risorse dalla console Cloud Temple.                                                   |

## Architettura

### Offerte che integrano GPU

Ogni blade di calcolo o worker node GPU è dotato di due schede NVIDIA. La configurazione GPU dipende dall'offerta utilizzata:

| Offerta            | Configurazione GPU                                                                                        | Documentazione                                                   |
|--------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Bare Metal         | Blade PERFORMANCE 4: 2 x NVIDIA L40S 48 GB. Blade PERFORMANCE 5: 2 x NVIDIA H100 80 GB.                   | [Concetti Bare Metal](../iaas_bare-metal/concepts.md)            |
| IaaS VMware        | Blade PERFORMANCE 4: 2 x NVIDIA L40S 48 GB.                                                               | [Concetti IaaS VMware](../iaas_vmware/concepts.md)               |
| IaaS OpenSource    | Blade PERFORMANCE 4: 2 x NVIDIA L40S 48 GB.                                                               | [Concetti IaaS OpenSource](../iaas_opensource/concepts.md)       |
| PaaS OpenShift     | Worker node GPU: 2 x NVIDIA L40S 48 GB per worker, in gruppi di 3 worker, 1 per zona di disponibilità.    | [Concetti PaaS OpenShift](../paas_openshift/concepts.md)         |
| Managed Kubernetes | Nodi worker di tipo Bare Metal dotati di GPU.                                                             | [Utilizzare una GPU su Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md) |

### Integrazioni

- **Console Cloud Temple**: gestione dei blade, delle macchine virtuali e dei cluster che ospitano le GPU.
- **API Kubernetes**: esposizione delle GPU ai pod su PaaS OpenShift e Managed Kubernetes.
- **CUDA e librerie NVIDIA**: CUDA toolkit, cuDNN e framework di IA (TensorFlow, PyTorch, ecc.).

## Regioni e zone di disponibilità

Le GPU sono disponibili nella regione FR1. I dati elaborati restano ospitati in Francia. Su PaaS OpenShift, i worker node GPU di uno stesso gruppo sono distribuiti su tre zone di disponibilità, in ragione di un worker per zona.

## Specifiche tecniche

### Specifiche delle schede

| Parametro               | NVIDIA L40S  | NVIDIA H100  |
|-------------------------|--------------|--------------|
| Memoria GPU             | 48 GB        | 80 GB        |
| FP32                    | 91,6 TFlops  | 51 TFlops    |
| TF32 (Tensor Core) *    | 366 TFlops   | 756 TFlops   |
| FP16 (Tensor Core) *    | 733 TFlops   | 1 513 TFlops |
| FP8 (Tensor Core) *     | 1 466 TFlops | 3 026 TFlops |
| Consumo massimo         | 350 W        | 350 W        |

\* Valori del costruttore NVIDIA con sparsità strutturata (sparsity). Senza sparsità, questi valori si dimezzano.

### Multi-Instance GPU

La tecnologia Multi-Instance GPU (MIG) partiziona una scheda H100 in un massimo di 7 istanze. Ogni istanza dispone di una propria memoria e di proprie unità di calcolo, isolate dalle altre istanze. Più carichi di lavoro condividono così una stessa scheda senza interferire tra loro.

### Limiti

- Multi-Instance GPU è disponibile solo sulle schede H100. Le schede L40S non lo supportano.
- Il numero e il modello delle schede sono fissati dalla classe di blade o dal tipo di worker node: non è possibile modificare la configurazione GPU di un blade.
- Su PaaS OpenShift, i worker node GPU si ordinano in gruppi di 3 worker.
- Su IaaS VMware, un cluster di hypervisor è composto da blade dello stesso tipo: i blade GPU formano un cluster distinto.

## Sicurezza e conformità

GPU è certificato HDS e ISO 27001, e disponibile su servizi qualificati SecNumCloud e conformi C5.

- **Risorse dedicate**: le schede sono installate in blade di calcolo dedicati al vostro utilizzo.
- **Isolamento**: su H100, ogni istanza MIG dispone di una memoria dedicata, isolata dalle altre istanze.
- **Residenza dei dati**: i dati elaborati sono ospitati in Francia, nella regione FR1.

## Disponibilità del servizio

Sull'offerta Bare Metal, l'obiettivo di disponibilità delle GPU è del 99,9%, misurato su base mensile. Sulle altre offerte, l'obiettivo di disponibilità è quello dell'offerta che ospita la GPU.

## Reversibilità

Al termine del servizio, potete recuperare i seguenti elementi:

| Elemento esportato     | Deliverable                          | Tempi di messa a disposizione | Costo      |
|------------------------|--------------------------------------|-----------------------------|------------|
| Modelli                | Formati standard (ONNX, ecc.)        | 15 giorni                   | Senza costi |
| Dati                   | Formati aperti                       | 30 giorni                   | Senza costi |
| Assistenza alla migrazione | Supporto tecnico                 | Su richiesta                | Su preventivo |

## Prezzi

Le GPU sono fatturate insieme al blade di calcolo o al worker node che le ospita. Le modalità di impegno dipendono dall'offerta: su PaaS OpenShift, i worker node GPU sono disponibili con pagamento a consumo mensile o con prenotazione di 12 mesi. I prezzi di GPU sono pubblicati sulla pagina del prodotto sul sito Cloud Temple:
[GPU — prezzi](https://www.cloud-temple.com/produits/gpu/).

## Buone pratiche

- **Dimensionate in base alla memoria necessaria**: scegliete la scheda H100 (80 GB) o L40S (48 GB) in base alla dimensione dei modelli e dei dati da elaborare.
- **Condividete una scheda H100** tra più carichi di lavoro di piccole dimensioni con Multi-Instance GPU, invece di dedicare una scheda intera a ciascuno.
- **Macchine virtuali**: per utilizzare una GPU da una macchina virtuale IaaS VMware, attivate i parametri avanzati `pciPassthru.use64bitMMIO` e `pciPassthru.64bitMMIOSizeGB` (vedere la [guida introduttiva IaaS VMware](../iaas_vmware/quickstart.md)).
- **Kubernetes**: su Managed Kubernetes, dichiarate `runtimeClassName: nvidia` nei vostri pod affinché accedano alla GPU (vedere il tutorial [Utilizzare una GPU su Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md)).
