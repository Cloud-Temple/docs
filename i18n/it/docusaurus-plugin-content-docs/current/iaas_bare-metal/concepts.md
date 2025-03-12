---
title: Concetti
---


L'offerta **Bare Metal** di Cloud Temple fornisce server fisici dedicati associati a uno storage a blocchi distribuito.
Questa soluzione offre una personalizzazione completa per i clienti che desiderano gestire i propri ambienti software, che si tratti di installare un sistema Linux, Windows o un hypervisor.

---

## Un'infrastruttura hardware e flessibile

L'offerta Bare Metal si basa su un'architettura progettata per rispondere alle esigenze dei carichi di lavoro critici.

### Componenti principali

- **Server Cisco UCS**: Potenti e affidabili, queste lame di calcolo costituiscono la base dell'offerta.
- **Storage IBM Spectrum Virtualize**: Uno storage a blocchi distribuito, che offre resilienza e alte prestazioni.

### Architettura

Il modello di storage distribuito offre una separazione tra calcolo (server Bare Metal) e storage (blocco distribuito), permettendo:

- Flessibilità per mappare i volumi di storage su più server Bare Metal in base alle esigenze.
- Personalizzazione ottimale delle configurazioni di calcolo e storage.
- Maggiore resilienza grazie all'utilizzo di **Distributed RAID 6**.

---

## Regioni e zone di disponibilità

Il prodotto Bare Metal viene distribuito in una zona di disponibilità.
Una [zona di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Questo tipo di distribuzione permette di scegliere la posizione dei server Bare Metal e di distribuirli su diverse zone di disponibilità (AZ).
Ciò offre una migliore distribuzione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di ripristino di emergenza (DRP) in caso di incidente.

---

## Classi di lame di calcolo

Le lame di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per rispondere a diverse esigenze:

| Riferimento             | RAM  **(1)** | Frequenza **(2)**                         | Numero di core / thread | Connettività **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Note

- **(1)** La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- **(2)** Le frequenze indicate corrispondono alla frequenza base minima e alla frequenza turbo.
- **(3)** La connettività fisica è condivisa per l'accesso alla rete e l'accesso allo storage a blocchi, grazie a un'architettura convergente Cisco UCS.
- **(4)** Le GPU disponibili evolvono in base alle ultime tecnologie. Al 1° maggio 2024, l'offerta include GPU NVIDIA LOVELACE L40S.

La disponibilità dell'infrastruttura è garantita al 99,9%, misurata mensilmente, finestre di manutenzione incluse. Qualsiasi richiesta relativa allo SLA deve essere dichiarata tramite un ticket di incidente.

---

## Classi di storage a blocchi

Lo storage a blocchi distribuito, basato su **IBM Spectrum Virtualize**, offre una gamma di prestazioni adattate a vari casi d'uso:

| Riferimento                         | IOPS/TB                 | Uso principale                         |
|-----------------------------------|-------------------------|----------------------------------------|
| **FLASH - Essenziale**             | 500                     | Carichi di lavoro leggeri              |
| **FLASH - Standard**              | 1500                    | Carichi di lavoro standard             |
| **FLASH - Premium**               | 3000                    | Carichi intensivi                      |
| **FLASH - Enterprise**            | 7500                    | Carichi critici                        |
| **FLASH - Ultra**                 | 15000                   | Carichi ultra-intensivi                |
| **MASS STORAGE - Archiviazione**  | Non applicabile         | Storage economico per l'archiviazione  |

### Caratteristiche

- **Tecnologia**: Flash NVMe con **Distributed RAID 6** per una maggiore resilienza.
- **Disponibilità**: 99,99%, misurata mensilmente.
- **Restrizioni**: Nessuna limitazione su letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo completo dei volumi riservati.

---

## Accesso alla Console Bare Metal

L'accesso ai server Bare Metal avviene direttamente dalla **console Cloud Temple**. Questa funzionalità offre un controllo totale sul ciclo di vita dei server, inclusi:

- **Accesso KVM**: Un'interfaccia diretta per gestire i server, come se foste fisicamente in loco.
- **Gestione delle operazioni di routine**: Possibilità di eseguire azioni come la gestione dell'alimentazione, reset o **mappatura ISO** per l'installazione di un sistema operativo.

Questo livello di accesso garantisce la massima flessibilità rispettando i vincoli di sicurezza.

---

## Connettività di rete dei server Bare Metal

I server Bare Metal dispongono di funzionalità di rete avanzate.

### VLAN di livello 2

È possibile configurare **VLAN di tipo livello 2** sulle interfacce di rete dei server Bare Metal.
Gli utenti possono:

- **Attivare il tagging VLAN** per associare una o più VLAN alla stessa interfaccia.
- **Propagare le VLAN** direttamente sulle interfacce di rete dei server.

### Aggregazione delle interfacce di rete

Ogni server è dotato di **due interfacce di rete**. Queste interfacce possono essere utilizzate in modo indipendente o combinate per una migliore prestazione e ridondanza:

### Prestazioni di rete

Le prestazioni delle interfacce di rete sono direttamente legate alla classe di lama scelta. Esempio:

- Le lame **ECO** offrono una connettività di 2 x 10 Gbit/s.
- Le lame **STANDARD** e superiori dispongono di una connettività di 2 x 25 Gbit/s.

Queste opzioni di rete garantiscono una connettività affidabile, flessibile e adattata a una varietà di carichi di lavoro professionali.

---
