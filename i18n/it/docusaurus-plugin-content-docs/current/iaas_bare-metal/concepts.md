---
title: Concetti
---

<a id="une-infrastructure-matérielle-et-flexible"></a>

## Presentazione

L'offerta **Bare Metal** fornisce server fisici dedicati, senza condivisione delle risorse, associati a uno storage di tipo blocco distribuito. Offre una personalizzazione totale ai clienti che desiderano gestire il proprio ambiente software, che si tratti di installare un sistema Linux, Windows o un hypervisor.

### Destinatari e casi d'uso

- **Settore pubblico e amministrazioni**: applicazioni sensibili conformi alla dottrina «cloud au centre».
- **Settori sovrani**: ambienti che richiedono un isolamento fisico.
- **Sanità**: trattamento di dati sanitari su un'infrastruttura certificata HDS.
- **Intelligenza artificiale**: GPU dedicate per l'addestramento e l'inferenza di modelli.
- **Cloud privato**: personalizzazione completa dello stack software, ad esempio per una farm di hypervisor.
- **Licenze software**: controllo preciso delle risorse per ottimizzare le licenze legate all'hardware.

## Vantaggi

| Vantaggio                    | Descrizione                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| Controllo totale             | Installate liberamente l'ambiente software (OS, hypervisor) e accedete direttamente ai server.      |
| Isolamento fisico            | Ogni server vi è dedicato, senza condivisione delle risorse.                                        |
| Architettura flessibile      | Calcolo e storage sono separati: ciascuno si dimensiona in modo indipendente.                       |
| Distribuzione multi-zona     | I server possono essere distribuiti su più zone di disponibilità.                                   |
| Hardware ad alte prestazioni | Otto classi di lame, di cui due dotate di GPU NVIDIA.                                               |

## Funzionalità

| Funzionalità            | Descrizione                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Server dedicati         | Otto classi di lame, da ECO a PERFORMANCE 5, a partire da un server e senza limiti.             |
| GPU NVIDIA              | NVIDIA L40S 48 GB (PERFORMANCE 4) e NVIDIA H100 80 GB (PERFORMANCE 5).                          |
| Storage a blocchi distribuito | Sei classi di storage, con Distributed RAID 6.                                            |
| Configurazione di rete  | Modalità semplice (ridondanza automatica) o avanzata (quattro schede di rete virtuali).         |
| Console KVM             | Accesso diretto ai server dalla console Cloud Temple.                                           |
| Multi-zona              | Distribuzione su diverse zone di disponibilità.                                                 |
| VLAN e aggregazione     | VLAN di livello 2 e aggregazione delle interfacce di rete.                                      |

<a id="accès-console-bare-metal"></a>

### Accesso alla console Bare Metal

L'accesso ai server Bare Metal avviene direttamente dalla **console Cloud Temple**. Questa funzionalità offre un controllo totale sul ciclo di vita dei server, tra cui:

- **Accesso KVM**: un'interfaccia diretta per gestire i server, come se foste fisicamente in loco.
- **Gestione delle operazioni correnti**: gestione dell'alimentazione, reset o **mapping di ISO** per l'installazione di un sistema operativo.
- **Gestione dei volumi**: mapping e configurazione dei volumi di storage dall'interfaccia.

Il servizio è inoltre gestibile tramite un'API REST, compatibile con OpenAPI.

## Architettura

### Componenti principali

- **Server Cisco UCS**: queste lame di calcolo costituiscono la base dell'offerta.
- **Storage IBM Spectrum Virtualize**: uno storage di tipo blocco distribuito, che offre resilienza e prestazioni elevate.

### Architettura

Il modello di storage distribuito separa il calcolo (server Bare Metal) dallo storage (blocco distribuito), il che consente:

- di mappare i volumi di storage su più server Bare Metal in base alle esigenze;
- di personalizzare le configurazioni di calcolo e di storage;
- di aumentare la resilienza grazie al **Distributed RAID 6**.

## Regioni e zone di disponibilità

Il prodotto Bare Metal è distribuito nella regione FR1, in una zona di disponibilità.
Una [zona di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Scegliete l'ubicazione dei server Bare Metal e potete distribuirli su diverse zone di disponibilità (AZ). Ciò offre una migliore ripartizione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di disaster recovery in caso di incidente.

## Specifiche tecniche

### Classi di lame di calcolo

Le lame di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per rispondere a diverse esigenze:

| Riferimento           | RAM  **(1)** | Frequenza **(2)**                         | Numero di core / thread   | Connettività **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread            | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread            | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Gold 5315Y o equivalente)   | 16 / 32 thread            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |
| **PERFORMANCE 5**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread            | 2 X 25 Gbit/s        | 2 x NVIDIA H100 80GB |

#### Note

- **(1)** La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- **(2)** Le frequenze indicate corrispondono alla frequenza di base minima e alla frequenza turbo.
- **(3)** La connettività fisica è condivisa tra l'accesso alla rete e l'accesso allo storage a blocchi, grazie a un'architettura convergente Cisco UCS.
- **(4)** Le GPU disponibili evolvono in funzione delle ultime tecnologie. Il prodotto offre GPU NVIDIA L40S e NVIDIA H100.

### Classi di storage in modalità blocco

Lo storage a blocchi distribuito offre una gamma di prestazioni adatte a diversi casi d'uso:

| Riferimento                       | IOPS/TB        | Limite IOPS max / Volume  | Banda passante max / Volume | Utilizzo principale                    |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essentiel**             | 500            | 10 000 IOPS               | 512 MB/s                    | Carichi di lavoro leggeri              |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 MB/s                   | Carichi di lavoro standard             |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                   | Carichi intensivi                      |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                   | Carichi critici                        |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                   | Carichi ultra-intensivi                |
| **MASS STORAGE - Archivage**      | Non applicabile | Non garantito            | Non garantito               | Storage economico per l'archiviazione  |

#### Caratteristiche

- **Prestazioni**: le prestazioni effettive crescono in modo lineare in funzione della capacità allocata (secondo il rapporto IOPS/TB), **entro il limite hardware assoluto definito sopra**. Ad esempio, un volume da 10 TB in classe Ultra è fisicamente limitato a 30 000 IOPS e 1024 MB/s.
- **Tecnologia**: Flash NVMe con **Distributed RAID 6** per una maggiore resilienza.
- **Restrizioni**: nessuna limitazione sulle letture o sulle scritture. Nessuna compressione né deduplicazione automatica, il che garantisce l'utilizzo integrale dei volumi riservati.

<a id="connectivité-réseau-des-serveurs-bare-metal"></a>

### Connettività di rete

I server Bare Metal dispongono di funzionalità di rete avanzate.

#### Modalità di configurazione

- **Configurazione semplice (predefinita)**: ogni server è dotato di **due interfacce di rete fisiche**. La ridondanza e l'alta disponibilità sono gestite automaticamente dall'infrastruttura, senza configurazione manuale.
- **Configurazione avanzata**: per esigenze come la distribuzione di hypervisor, le due interfacce fisiche possono essere declinate in **quattro schede di rete virtuali**. La gestione del load balancing, del teaming e dell'alta disponibilità è allora delegata al vostro sistema operativo, ad esempio per separare i traffici di management, di dati, di storage e di replica.

#### VLAN di livello 2

È possibile configurare **VLAN di livello 2** sulle interfacce di rete dei server Bare Metal. Potete:

- **attivare il tagging VLAN** per associare una o più VLAN a una stessa interfaccia;
- **propagare le VLAN** direttamente sulle interfacce di rete dei server.

#### Aggregazione delle interfacce di rete

Le interfacce di rete possono essere utilizzate in modo indipendente o combinate (bonding, teaming) per prestazioni migliori e una migliore ridondanza.

#### Prestazioni di rete

Le prestazioni delle interfacce di rete dipendono dalla classe di lama scelta:

- le lame **ECO** offrono una connettività di 2 x 10 Gbit/s;
- le lame **STANDARD** e superiori dispongono di una connettività di 2 x 25 Gbit/s.

### Limiti

- La quantità di memoria di una lama non può essere modificata.
- Un volume di storage è limitato a 30 000 IOPS e 1024 MB/s (10 000 IOPS e 512 MB/s in classe Essentiel), indipendentemente dalla sua dimensione.

## Sicurezza e conformità

Bare Metal è certificato HDS e ISO 27001, con etichetta Gaia-X livello 3, conforme CISPE e C5, e qualificato SecNumCloud.

### Sicurezza e crittografia dello storage a blocchi

Per garantire la riservatezza dei vostri dati inattivi, l'intera infrastruttura di storage a blocchi integra una crittografia hardware.

- **Tipo di crittografia**: i dati sono crittografati direttamente sui dischi (`Data At Rest`) con l'algoritmo **XTS-AES 256**.
- **Conformità**: questo metodo di crittografia è conforme alla norma **FIPS 140-2**.
- **Funzionamento**: la crittografia viene applicata al momento della scrittura dei dati sul supporto di storage fisico.

:::warning[Punto di attenzione sulla replica]
Questa crittografia protegge i dati memorizzati sui dischi. Non è attiva «on-the-fly»: i dati non sono crittografati durante le operazioni di replica dello storage tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita da canali di comunicazione dedicati e sicuri.
:::

## Disponibilità del servizio

| Elemento        | Obiettivo di disponibilità, misurato su un mese |
|-----------------|-----------------------------------------------|
| Infrastruttura  | 99,9 %, finestre di manutenzione incluse      |
| Storage a blocchi | 99,99 %                                     |

Qualsiasi richiesta relativa alla disponibilità deve essere dichiarata tramite un ticket di incidente.

## Reversibilità

| Operazione                | Deliverable                  | Tempistica  | Costo      |
|---------------------------|------------------------------|-------------|------------|
| Esportazione dei dati     | Dati, in formati standard    | 30 giorni   | Senza costi |
| Assistenza alla migrazione | Supporto tecnico            | Su richiesta | Su preventivo |
| Cancellazione sicura      | Certificato di distruzione   | 7 giorni    | Incluso    |

## Prezzi

Il servizio è fatturato mensilmente, per server fisico. L'impegno minimo è di un mese per la maggior parte delle configurazioni; alcune lame, in base alla loro configurazione hardware, richiedono un impegno più lungo. I prezzi e le durate di impegno sono pubblicati sulla pagina del prodotto sul sito Cloud Temple:
[Bare Metal — prezzi](https://www.cloud-temple.com/produits/bare-metal/).
