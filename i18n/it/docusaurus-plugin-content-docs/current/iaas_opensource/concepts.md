---
title: Concepts
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per soddisfare le esigenze critiche di continuità e ripristino delle attività, con un'attenzione particolare ai settori esigenti come l'industria, la banca e le assicurazioni. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce la massima disponibilità e prestazioni ottimali per i vostri carichi di lavoro critici.

## Una piattaforma tecnologica di fiducia

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: **CISCO UCS**.
- Storage: **IBM Spectrum Virtualize**, **IBM FlashSystem** per lo storage a blocchi, e **DELL ECS** per lo storage a oggetti.
- Rete: **JUNIPER**.
- Virtualizzazione: **Stack Opensource**, offrendo una base affidabile e comprovata per gestire i vostri ambienti cloud.

Questa architettura si basa sul modello **VersaStack**, un'alleanza tra Cisco e IBM, garantendo una compatibilità estesa con i principali fornitori di software.

## Un'infrastruttura dedicata e automatizzata

Pur essendo completamente automatizzata grazie ad API e a un provider Terraform, l'offerta IaaS di Cloud Temple propone un'infrastruttura unica:

- **Risorse dedicate**: Le lame di calcolo, i volumi di storage e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- **Massima prevedibilità**: Controllate i tassi di virtualizzazione, la pressione in IOPS sullo storage e beneficiate di una fatturazione chiara, basata sul consumo mensile.

La piattaforma è certificata **SecNumCloud** dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Principali funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Storage su richiesta (diverse classi disponibili).
- Risorse di rete (Internet, reti privati).
- Backup incrociati con retenzione configurabile.
- Replica asincrona per lo storage o le macchine virtuali.
- Gestione tramite [Console Shiva](../console/console.md) o in modalità Infrastructure as Code tramite API e provider Terraform.

## Vantaggi

| Vantaggio            | Descrizione                                                                                                                                     |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale     | Hosting dei dati in Francia e conformità RGPD.                                                                                                  |
| Sicurezza            | Piattaforma altamente sicura, certificata **SecNumCloud**, **HDS** (Hosting dei Dati Sanitari), **ISO 27001** e **ISAE 3402 tipo II**.          |
| Alta disponibilità   | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, includendo le finestre di manutenzione.                              |
| Resilienza           | Implementazione di piani di continuità o di ripristino secondo le necessità.                                                                    |
| Automazione          | Piattaforma completamente automatizzata pensata per integrarsi in un programma di trasformazione digitale.                                      |
| On demand            | Risorse disponibili su richiesta.                                                                                                               |

## Classi di lame di calcolo

Le lame di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per soddisfare diverse esigenze:

| Riferimento           | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|-------------------------|----------------------|----------------------|
| **ECO**               | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread          | 2 X 10 Gbit/s        | -                    |
| **STANDARD**          | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread          | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**           | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**     | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**     | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**     | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread         | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**     | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread          | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Note :
- __(1)__ La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- __(2)__ Le frequenze indicate corrispondono alla frequenza base minima e alla frequenza turbo.
- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e l'accesso allo storage a blocchi, grazie a un'architettura convergente Cisco UCS.
- __(4)__ I GPU disponibili evolvono in base alle ultime tecnologie. Al 1° maggio 2024, l'offerta include GPU NVIDIA LOVELACE L40S.

La disponibilità dell'infrastruttura è garantita al 99.9%, misurata mensilmente, inclusi i periodi di manutenzione. Qualsiasi richiesta relativa al SLA deve essere dichiarata tramite un ticket incidente.

---

## Classi di storage in modalità blocchi

Lo storage a blocchi distribuito, basato su **IBM Spectrum Virtualize**, offre una gamma di prestazioni adatte a vari casi d'uso:

| Riferimento                    | IOPS/TB                  | Utilizzo principale                      |
|-------------------------------|--------------------------|------------------------------------------|
| **FLASH - Essenziale**         | 500                      | Carichi di lavoro leggeri                |
| **FLASH - Standard**           | 1500                     | Carichi di lavoro standard               |
| **FLASH - Premium**            | 3000                     | Carichi intensivi                        |
| **FLASH - Enterprise**         | 7500                     | Carichi critici                          |
| **FLASH - Ultra**              | 15000                    | Carichi ultra-intensivi                  |
| **MASS STORAGE - Archiviazione** | Non applicabile         | Storage economico per l'archiviazione    |

### Caratteristiche :
- **Tecnologia**: Flash NVMe con **Distributed RAID 6** per una resilienza aumentata.
- **Disponibilità**: 99.99%, misurata mensilmente.
- **Restrizioni**: Nessuna limitazione su letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'uso integrale dei volumi riservati.

---