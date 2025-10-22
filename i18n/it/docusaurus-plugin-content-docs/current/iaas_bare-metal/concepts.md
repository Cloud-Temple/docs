---
title: Concetti
---

L'offerta **Bare Metal** di Cloud Temple propone server fisici dedicati associati a un archivio di tipo blocco distribuito.  
Questa soluzione offre una personalizzazione totale per i clienti che desiderano gestire autonomamente i propri ambienti software, sia per installare un sistema Linux, Windows o un hypervisor.

## Un'infrastruttura hardware flessibile

L'offerta Bare Metal si basa su un'architettura progettata per soddisfare i requisiti delle carichi di lavoro critici.

### Componenti principali

- **Server Cisco UCS** : Performanti e affidabili, queste unità di calcolo costituiscono la base dell'offerta.
- **Archiviazione IBM Spectrum Virtualize** : Un archivio a blocchi distribuito, che offre resilienza e prestazioni elevate.

### Architettura

Il modello di archiviazione distribuita offre una separazione tra calcolo (server Bare Metal) e archiviazione (blocco distribuito), consentendo:

- Flessibilità nel mappare i volumi di archiviazione su diversi server Bare Metal in base alle esigenze.
- Personalizzazione ottimale delle configurazioni di calcolo e archiviazione.
- Maggiore resilienza grazie all'utilizzo di **Distributed RAID 6**.

## Regioni e zone di disponibilità

Il prodotto Bare Metal viene distribuito in una zona di disponibilità.  
Una [zona di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Questo tipo di distribuzione consente di scegliere la posizione dei server Bare Metal e di distribuirli su diverse zone di disponibilità (AZ).  
Ciò offre una migliore distribuzione del carico, massimizza la ridondanza e semplifica la messa in atto di un piano di ripresa d'attività (DRP) in caso di incidente.

## Classi di schede di calcolo

Le schede di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per soddisfare diversi requisiti:

| Riferimento            | RAM **(1)** | Frequenza **(2)**                         | Numero di core / thread   | Connettività **(3)** | GPU **(4)**          |
|------------------------|-------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**               | 384 GB      | 2,20/3,0 GHz (Silver 4114 o equivalente) | 20 / 40 thread            | 2 x 10 Gbit/s        | -                    |
| **STANDARD**          | 384 GB      | 2,40/3,4 GHz (Silver 4314 o equivalente) | 32 / 64 thread            | 2 x 25 Gbit/s        | -                    |
| **ADVANCE**           | 768 GB      | 2,80/3,5 GHz (Gold 6342 o equivalente)   | 48 / 96 thread            | 2 x 25 Gbit/s        | -                    |
| **PERFORMANCE 1**     | 384 GB      | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread            | 2 x 25 Gbit/s        | -                    |
| **PERFORMANCE 2**     | 768 GB      | 3,00/3,6 GHz (Gold 6354 o equivalente)   | 36 / 72 thread            | 2 x 25 Gbit/s        | -                    |
| **PERFORMANCE 3**     | 1536 GB     | 2,60/3,5 GHz (Gold 6348 o equivalente)   | 56 / 112 thread           | 2 x 25 Gbit/s        | -                    |
| **PERFORMANCE 4**     | 512 GB      | 2,50/4,1 GHz (Intel 6426Y o equivalente) | 32 / 64 thread            | 2 x 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notes

- **(1)** La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- **(2)** Le frequenze indicate corrispondono alla frequenza base minima e alla frequenza turbo.
- **(3)** La connettività fisica è condivisa per l'accesso alla rete e l'accesso allo storage a blocchi, grazie all'architettura convergente Cisco UCS.
- **(4)** I GPU disponibili evolvono in base alle ultime tecnologie. Al 1° maggio 2024, l'offerta include GPU NVIDIA LOVELACE L40S.

La disponibilità dell'infrastruttura è garantita al 99,9%, misurata mensilmente, incluse le finestre di manutenzione. Ogni richiesta relativa allo SLA deve essere segnalata tramite un ticket incidente.

## Classi di archiviazione in modalità blocco

L'archiviazione in blocco distribuita, basata su **IBM Spectrum Virtualize**, offre una gamma di prestazioni adatta a diversi scenari di utilizzo:

| Riferimento                       | IOPS/To                 | Utilizzo principale                    |
|-----------------------------------|-------------------------|----------------------------------------|
| **FLASH - Essenziale**            | 500                     | Carichi di lavoro leggeri              |
| **FLASH - Standard**              | 1500                    | Carichi di lavoro standard             |
| **FLASH - Premium**               | 3000                    | Carichi intensivi                      |
| **FLASH - Enterprise**            | 7500                    | Carichi critici                        |
| **FLASH - Ultra**                 | 15000                   | Carichi ultra-intensivi                |
| **MASS STORAGE - Archiviazione**  | Non applicabile         | Archiviazione economica                |

### Caratteristiche

- **Tecnologia**: Flash NVMe con **RAID distribuito 6** per una maggiore resilienza.
- **Disponibilità**: 99,99%, misurata mensilmente.
- **Restrizioni**: Nessuna limitazione sulle letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo integrale dei volumi riservati.

### Sicurezza e Crittografia del Storage a Blocchi

Per garantire la riservatezza dei tuoi dati in stato di riposo, l'intera infrastruttura di storage a blocchi è dotata di un robusto crittografia hardware.

-   **Tipo di Crittografia**: I dati vengono crittografati direttamente sui dischi (`Data At Rest`) utilizzando l'algoritmo **XTS-AES 256**.
-   **Conformità**: Questo metodo di crittografia è conforme allo standard **FIPS 140-2**, garantendo un elevato livello di sicurezza certificato.
-   **Funzionamento**: La crittografia viene applicata al momento della scrittura dei dati sul supporto di archiviazione fisico.

:::warning Osservazione sulla replica
È importante sottolineare che questa crittografia protegge i dati archiviati sui dischi. Non è attiva "on-the-fly", il che significa che i dati non vengono crittografati durante le operazioni di replica dello storage tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita tramite canali di comunicazione dedicati e protetti.
:::

## Accesso alla console Bare Metal

L'accesso ai server Bare Metal avviene direttamente dalla **console Cloud Temple**. Questa funzionalità offre un controllo totale sul ciclo di vita dei server, inclusi:

- **Accesso KVM**: un'interfaccia diretta per gestire i server, come se foste fisicamente sul posto.
- **Gestione delle operazioni quotidiane**: possibilità di eseguire azioni come la gestione dell'alimentazione, il riavvio o il **mapping di ISO** per l'installazione di un sistema operativo.

Questo livello di accesso garantisce una massima flessibilità rispettando al contempo i vincoli di sicurezza.

## Networking connectivity of Bare Metal servers

Bare Metal servers feature advanced networking capabilities.

### VLAN di livello 2

È possibile configurare dei **VLAN di tipo livello 2** sulle interfacce di rete dei server Bare Metal. Gli utenti possono:

- **Abilitare il tagging VLAN** per associare uno o più VLAN a una stessa interfaccia.
- **Propagare i VLAN** direttamente sulle interfacce di rete dei server.

### Aggregazione delle interfacce di rete

Ogni server è dotato di **due interfacce di rete**. Queste interfacce possono essere utilizzate in modo indipendente o combinate per ottenere prestazioni migliori e ridondanza:

### Prestazioni di rete

Le prestazioni delle interfacce di rete sono direttamente correlate alla classe di blade scelta. Esempio:

- Le blade **ECO** offrono una connettività di 2 x 10 Gbit/s.
- Le blade **STANDARD** e successive dispongono di una connettività di 2 x 25 Gbit/s.

Queste opzioni di rete garantiscono una connettività affidabile, flessibile e adatta a una varietà di carichi di lavoro professionali.