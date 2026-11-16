---
title: Concetti
---

<a id="une-infrastructure-matérielle-et-flexible"></a>

## Presentazione

L'offerta **Bare Metal** fornisce server fisici dedicati, senza condivisione delle risorse, associati a uno storage di tipo blocco distribuito. Offre una personalizzazione totale ai clienti che desiderano gestire il proprio ambiente software, che si tratti di installare un sistema Linux, Windows o un hypervisor.

### Target e casi d'uso

- **Settore pubblico e amministrazioni** : applicazioni sensibili conformi alla dottrina « cloud al centro ».
- **Settori regali** : ambienti che richiedono un'isolamento fisico.
- **Sanità** : elaborazione di dati sanitari su un'infrastruttura certificata HDS.
- **Intelligenza artificiale** : GPU dedicati per l'addestramento e l'inferenza di modelli.
- **Cloud privato** : personalizzazione completa dello stack software, ad esempio per un cluster di hypervisor.
- **Licenze software** : controllo preciso delle risorse per ottimizzare le licenze legate all'hardware.

## Vantaggi

| Vantaggio                     | Descrizione                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| Controllo totale               | Installate liberamente l'ambiente software (OS, hypervisor) e accedete direttamente ai server. |
| Isolamento fisico           | Ogni server è dedicato a voi, senza condivisione delle risorse.                                    |
| Architettura flessibile        | Il calcolo e lo storage sono separati: ciascuno si dimensiona indipendentemente.                       |
| Deployment multi-zona      | I server possono essere distribuiti su più zone di disponibilità.                            |
| Hardware ad alte prestazioni   | Otto classi di blade, di cui due dotate di GPU NVIDIA.                                            |

## Funzionalità

| Funzionalità          | Descrizione                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Server dedicati         | Otto classi di blade, da ECO a PERFORMANCE 5, a partire da un server e senza limite.            |
| GPU NVIDIA              | NVIDIA L40S 48 Go (PERFORMANCE 4) e NVIDIA H100 80 Go (PERFORMANCE 5).                         |
| Storage a blocchi distribuito | Sei classi di storage, con Distributed RAID 6.                                               |
| Configurazione di rete    | Modalità semplice (ridondanza automatica) o avanzata (quattro schede di rete virtuali).               |
| Console KVM             | Accesso diretto ai server dalla Console Cloud Temple.                                       |
| Multi-zona             | Deployment su diverse zone di disponibilità.                                             |
| VLAN e aggregazione      | VLAN di livello 2 e aggregazione delle interfacce di rete.                                           |

<a id="accès-console-bare-metal"></a>

### Accesso Console Bare Metal

L'accesso ai server Bare Metal avviene direttamente dalla **Console Cloud Temple**. Questa funzionalità offre un controllo totale sul ciclo di vita dei server, includendo :

- **Accesso KVM** : un'interfaccia diretta per gestire i server, come se foste fisicamente in loco.
- **Gestione delle operazioni correnti** : gestione degli alimentatori, reset o **mapping di ISO** per l'installazione di un sistema operativo.
- **Gestione dei volumi** : mapping e configurazione dei volumi di storage dall'interfaccia.

Il servizio è inoltre gestibile tramite un'API REST, compatibile con OpenAPI.

## Architettura

### Principali componenti

- **Server Cisco UCS** : queste blade di calcolo costituiscono la base dell'offerta.
- **Storage IBM Spectrum Virtualize** : uno storage di tipo blocco distribuito, che offre resilienza e prestazioni elevate.

### Architettura

Il modello di storage distribuito separa il calcolo (server Bare Metal) dallo storage (blocco distribuito), il che consente :

- di mappare i volumi di storage su più server Bare Metal in base alle esigenze ;
- di personalizzare le configurazioni di calcolo e storage ;
- di aumentare la resilienza grazie al **Distributed RAID 6**.

## Regioni e zone di disponibilità

Il prodotto Bare Metal è deployato nella regione FR1, in una zona di disponibilità.
Una [zona di disponibilità](../additional_content/concepts_regional.md#zone-di-disponibilità) fa parte di una [regione](../additional_content/concepts_regional.md).

Scegliete la localizzazione dei server Bare Metal e potete distribuirli su diverse zone di disponibilità (AZ). Questo offre una migliore distribuzione del carico, massimizza la ridondanza e facilita la messa in atto di un piano di continuità operativa in caso di incidente.

## Caratteristiche tecniche

### Classi di blade di calcolo

Le blade di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per rispondere a diverse esigenze :

| Riferimento             | RAM  **(1)** | Frequenza **(2)**                         | Numero di core / thread | Connettività **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Gold 5315Y o equivalente) | 16 / 32 thread           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |
| **PERFORMANCE 5**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread           | 2 X 25 Gbit/s        | 2 x NVIDIA H100 80Go |

#### Note

- **(1)** La quantità di memoria è quella fisicamente disponibile sulle blade e non può essere modificata.
- **(2)** Le frequenze indicate corrispondono alla frequenza di base minima e alla frequenza turbo.
- **(3)** La connettività fisica è condivisa per l'accesso di rete e l'accesso allo storage a blocchi, grazie a un'architettura convergente Cisco UCS.
- **(4)** Le GPU disponibili evolvono in base alle ultime tecnologie. Il prodotto propone GPU NVIDIA L40S e NVIDIA H100.

### GPU

Due classi di blade incorporano ciascuna due schede NVIDIA dedicate al vostro utilizzo : PERFORMANCE 4 (2 × NVIDIA L40S 48 Go) e PERFORMANCE 5 (2 × NVIDIA H100 80 Go). Servono per l'addestramento e l'inferenza di modelli di IA, per la computer vision, per la simulazione e per il calcolo scientifico. CUDA, cuDNN e i principali framework di IA (TensorFlow, PyTorch, ecc.) si utilizzano senza adattamento.

| Parametro               | NVIDIA L40S  | NVIDIA H100  |
|-------------------------|--------------|--------------|
| Memoria GPU             | 48 Go        | 80 Go        |
| FP32                    | 91,6 TFlops  | 51 TFlops    |
| TF32 (Tensor Core) *    | 366 TFlops   | 756 TFlops   |
| FP16 (Tensor Core) *    | 733 TFlops   | 1 513 TFlops |
| FP8 (Tensor Core) *     | 1 466 TFlops | 3 026 TFlops |
| Consumo massimo   | 350 W        | 350 W        |

\* Valori del produttore NVIDIA con sparsity strutturata. Senza sparsity, questi valori sono divisi per due.

La tecnologia Multi-Instance GPU (MIG) partiziona una scheda H100 in al massimo 7 istanze. Ogni istanza dispone della propria memoria e delle proprie unità di calcolo, isolate dalle altre istanze. Diversi carichi di lavoro condividono così la stessa scheda senza interferire tra loro. Le schede L40S non supportano il Multi-Instance GPU.

- Il numero e il modello delle schede sono fissati dalla classe di blade : la configurazione GPU di una blade non si modifica.
- Le blade Bare Metal dotate di GPU possono fungere da nodi worker per Managed Kubernetes : vedere [Utilizzare un GPU su Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md).

### Classi di storage in modalità blocco

<a id="caractéristiques"></a>

Lo storage a blocchi distribuito propone cinque classi Flash, da 500 a 15 000 IOPS/To, e la classe Mass Storage per l'archiviazione. Le classi, i loro limiti di prestazione e le loro caratteristiche sono descritti nella pagina [Storage a blocchi](../storage/block/block_storage.md).

<a id="connectivité-réseau-des-serveurs-bare-metal"></a>

### Connettività di rete

Ogni server Bare Metal dispone di **due interfacce di rete fisiche**. Il loro numero è fisso : non è possibile aggiungere schede di rete fisiche aggiuntive.

#### Modalità di configurazione

Scegliete la modalità di configurazione di rete al momento dell'ordine della risorsa nella Console Cloud Temple :

- **Configurazione semplice** : la ridondanza e l'alta disponibilità sono gestite automaticamente dall'infrastruttura, senza configurazione manuale nel vostro sistema operativo.
- **Configurazione avanzata** : per esigenze come il deployment di hypervisor, le due interfacce fisiche sono declinate in **quattro schede di rete virtuali**. La gestione del teaming e dell'alta disponibilità è allora delegata al vostro sistema operativo, in modalità attivo/passivo.

La modalità di configurazione di rete non può essere modificata su un servizio esistente. Per utilizzare un'altra modalità, è necessario ordinare un nuovo server con la modalità desiderata, poi migrarvi i propri carichi di lavoro. Questa migrazione è eseguita a vostro carico ; un supporto da parte dei Professional Services può essere valutato.

#### VLAN di livello 2

È possibile configurare dei **VLAN di livello 2** sulle interfacce di rete dei server Bare Metal. È possibile :

- **attivare il tagging VLAN** per associare uno o più VLAN a una stessa interfaccia ;
- **propagare i VLAN** direttamente sulle interfacce di rete dei server.

#### Aggregazione delle interfacce di rete

Le interfacce di rete possono essere utilizzate in modo indipendente o combinate (bonding, teaming). Solo la modalità **attivo/passivo** è supportata : essa garantisce la ridondanza senza aumentare la banda passante disponibile. Il **LACP (802.3ad) non è supportato**.

#### Prestazioni di rete

La prestazione delle interfacce di rete dipende dalla classe di blade scelta :

- le blade **ECO** offrono una connettività di 2 x 10 Gbit/s ;
- le blade **STANDARD** e superiori dispongono di una connettività di 2 x 25 Gbit/s.

Le blade GPU **PERFORMANCE 4 (L40S)** e **PERFORMANCE 5 (H100)** dispongono così di due interfacce fisiche da 25 Gbit/s ciascuna. Questa connettività fisica è condivisa tra gli accessi di rete e lo storage a blocchi.

### Limiti

- La quantità di memoria di una blade non può essere modificata.
- Un volume di storage è limitato a 30 000 IOPS e 1024 Mo/s (10 000 IOPS e 512 Mo/s in classe Essentiel), indipendentemente dalla sua dimensione.

## Sicurezza e conformità

Bare Metal è certificato HDS e ISO 27001, etichettato Gaia-X livello 3, conforme CISPE e C5, e qualificato SecNumCloud.

### Sicurezza e cifratura dello storage a blocchi

Per garantire la riservatezza dei vostri dati a riposo, l'intera infrastruttura di storage a blocchi integra una cifratura hardware.

- **Tipo di cifratura** : i dati sono cifrati direttamente sui dischi (`Data At Rest`) con l'algoritmo **XTS-AES 256**.
- **Conformità** : questo metodo di cifratura è conforme alla norma **FIPS 140-2**.
- **Funzionamento** : la cifratura è applicata al momento della scrittura dei dati sul supporto di storage fisico.

:::warning[Punto di attenzione sulla replicazione]
Questa cifratura protegge i dati memorizzati sui dischi. Non è attiva « on-the-fly » : i dati non sono cifrati durante le operazioni di replicazione dello storage tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita da canali di comunicazione dedicati e sicuri.
:::

## Disponibilità del servizio

| Elemento         | Obiettivo di disponibilità, misurato su un mese |
|-----------------|-----------------------------------------------|
| Infrastruttura  | 99,9 %, finestre di manutenzione incluse        |
| Storage a blocchi   | 99,99 %                                       |

Ogni richiesta relativa alla disponibilità deve essere dichiarata tramite un ticket incidente.

## Reversibilità

| Operazione                 | Consegna                     | Termine       | Costo       |
|---------------------------|------------------------------|-------------|------------|
| Esportazione dei dati        | Dati, in formati standard | 30 giorni   | Senza costi |
| Assistenza alla migrazione | Supporto tecnico            | Su richiesta | Su preventivo  |
| Cancellazione sicura           | Certificato di distruzione    | 7 giorni     | Incluso     |

## Tariffazione

Il servizio è fatturato mensilmente, per server fisico. L'impegno minimo è di un mese per la maggior parte delle configurazioni ; alcune blade, a seconda della loro configurazione hardware, richiedono un impegno più lungo. I prezzi e le durate di impegno sono pubblicati sulla pagina prodotto del sito Cloud Temple :
[Bare Metal — tariffe](https://www.cloud-temple.com/produits/bare-metal/).
