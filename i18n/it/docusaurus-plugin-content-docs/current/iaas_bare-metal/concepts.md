---
title: Concepts
---


L'offerta **Bare Metal** di Cloud Temple propone server fisici dedicati associati a uno storage di tipo blocco distribuito.
Questa soluzione offre una personalizzazione totale per i clienti che desiderano gestire i propri ambienti software, sia per installare un sistema Linux, Windows o un hypervisore.

---

## Una infrastruttura hardware e flessibile

L'offerta Bare Metal si basa su un'architettura progettata per rispondere alle esigenze dei carichi di lavoro critici.

### Componenti principali:
- **Server Cisco UCS**: Performanti e affidabili, queste lame di calcolo costituiscono la base dell'offerta.
- **Storage IBM Spectrum Virtualize**: Uno storage di tipo blocco distribuito, che offre resilienza e prestazioni elevate.

### Architettura

Il modello di storage distribuito offre una separazione tra il calcolo (server Bare Metal) e lo storage (blocco distribuito), permettendo:
- Una flessibilità per mappare i volumi di storage su diversi server Bare Metal in base alle esigenze.
- Una personalizzazione ottimale delle configurazioni di calcolo e storage.
- Una resilienza aumentata grazie all'uso del **Distributed RAID 6**.

---

## Classi di lame di calcolo

Le lame di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per rispondere a diverse esigenze:

| Riferimento           | RAM  __(1)__ | Frequenza __(2)__                          | Numero di core / thread  | Connettività __(3)__ | GPU __(4)__          | 
|-----------------------|--------------|--------------------------------------------|--------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)   | 20 / 40 thread           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)   | 32 / 64 thread           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)     | 48 / 96 thread           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)  | 16 / 32 thread           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)     | 36 / 72 thread           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)     | 56 / 112 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)   | 32 / 64 thread           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Note:
- __(1)__ La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- __(2)__ Le frequenze indicate corrispondono alla frequenza di base minima e alla frequenza turbo.
- __(3)__ La connettività fisica è condivisa per l'accesso di rete e l'accesso storage blocco, grazie a un'architettura convergente Cisco UCS.
- __(4)__ Le GPU disponibili evolvono in base alle ultime tecnologie. Al primo maggio 2024, l'offerta include GPU NVIDIA LOVELACE L40S.

La disponibilità dell'infrastruttura è garantita al 99.9%, misurata mensilmente, periodi di manutenzione inclusi. Qualsiasi richiesta relativa al SLA deve essere dichiarata tramite un ticket incident.

---

## Classi di storage in modalità blocco

Lo storage blocco distribuito, basato su **IBM Spectrum Virtualize**, offre una gamma di prestazioni adatte a diversi casi d'uso:

| Riferimento                       | IOPS/TB                 | Uso principale                           | 
|-----------------------------------|-------------------------|-----------------------------------------|
| **FLASH - Essenziale**            | 500                     | Carichi di lavoro leggeri               |
| **FLASH - Standard**              | 1500                    | Carichi di lavoro standard              |
| **FLASH - Premium**               | 3000                    | Carichi intensivi                       |
| **FLASH - Enterprise**            | 7500                    | Carichi critici                         |
| **FLASH - Ultra**                 | 15000                   | Carichi ultra-intensivi                 |
| **MASS STORAGE - Archivio**       | Non applicabile         | Storage economico per l'archiviazione   |

### Caratteristiche:
- **Tecnologia**: Flash NVMe con **Distributed RAID 6** per una resilienza aumentata.
- **Disponibilità**: 99.99%, misurata mensilmente.
- **Restrizioni**: Nessuna limitazione sulle letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo integrale dei volumi riservati.

---

## Accesso Console Bare Metal

L'accesso ai server Bare Metal avviene direttamente dalla **console Cloud Temple**. Questa funzionalità offre un controllo totale sul ciclo di vita dei server, includendo:
- **Accesso KVM**: Un'interfaccia diretta per gestire i server, come se si fosse fisicamente sul posto.
- **Gestione delle operazioni correnti**: Possibilità di effettuare azioni come la gestione delle alimentazioni, dei reset o ancora il **mapping di ISO** per l'installazione di un sistema operativo.

Questo livello di accesso assicura una flessibilità massima rispettando al contempo i vincoli di sicurezza.

---

## Connettività di rete dei server Bare Metal

I server Bare Metal dispongono di funzionalità di rete avanzate.

### VLAN di livello 2
È possibile configurare **VLAN di tipo livello 2** sulle interfacce di rete dei server Bare Metal.
Gli utenti possono:
- **Abilitare il tagging VLAN** per associare una o più VLAN ad una stessa interfaccia.
- **Propagare le VLAN** direttamente sulle interfacce di rete dei server.

### Aggregazione delle interfacce di rete
Ogni server è dotato di **due interfacce di rete**. Queste interfacce possono essere utilizzate in modo indipendente o combinate per una maggiore performance e ridondanza:

### Prestazioni di rete
La performance delle interfacce di rete è direttamente legata alla classe di lama scelta. Esempio:
- Le lame **ECO** offrono una connettività di 2 x 10 Gbit/s.
- Le lame **STANDARD** e superiori dispongono di una connettività di 2 x 25 Gbit/s.

Queste opzioni di rete garantiscono una connettività affidabile, flessibile e adatta a una varietà di carichi di lavoro professionali.

---