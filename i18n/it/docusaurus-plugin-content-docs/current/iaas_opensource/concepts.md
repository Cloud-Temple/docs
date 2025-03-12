---
title: Concepts
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per rispondere alle necessità critiche di continuità e ripristino delle attività, con un'attenzione particolare ai settori esigenti come l'industria, la banca e le assicurazioni. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce massima disponibilità e prestazioni ottimali per i tuoi carichi di lavoro critici.

## Una piattaforma tecnologica di fiducia

La piattaforma IaaS di Cloud Temple si appoggia su partner tecnologici di fama internazionale:

- Calcolo: **CISCO UCS**.
- Archiviazione: **IBM Spectrum Virtualize**, **IBM FlashSystem** per l'archiviazione a blocchi, e **DELL ECS** per l'archiviazione a oggetti.
- Rete: **JUNIPER**.
- Virtualizzazione: **Stack Opensource**, offrendo una base affidabile e collaudata per gestire i tuoi ambienti cloud.

Questa architettura si basa sul modello **VersaStack**, un'alleanza tra Cisco e IBM, garantendo un'ampia compatibilità con i principali fornitori di software.

## Un'infrastruttura dedicata e automatizzata

Sebbene interamente automatizzata grazie alle API e a un provider Terraform, l'offerta IaaS di Cloud Temple propone un'infrastruttura unica:

- **Risorse dedicate**: Le lame di calcolo, i volumi di archiviazione, e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- **Massima prevedibilità**: Hai il controllo sui tassi di virtualizzazione, la pressione in IOPS sull'archiviazione e benefici di una fatturazione chiara, basata sul consumo mensile.

La piattaforma è certificata **SecNumCloud** dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Principali funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Archiviazione su richiesta (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Backup incrociati con retention configurabile.
- Replica asincrona per l'archiviazione o le macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio           | Descrizione                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale    | Hosting dei dati in Francia e conformità GDPR.                                                                                                 |
| Sicurezza           | Piattaforma altamente sicura, certificata **SecNumCloud**, **HDS** (Hosting dei dati sanitari), **ISO 27001** e **ISAE 3402 tipo II**.         |
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, inclusi i periodi di manutenzione.                                  |
| Resilienza          | Implementazione di piani di continuità o di ripristino delle attività secondo le esigenze.                                                     |
| Automazione         | Piattaforma completamente automatizzata pensata per integrarsi in un programma di trasformazione digitale.                                     |
| On demand           | Risorse disponibili su richiesta.                                                                                                             |

## Regioni e zone di disponibilità

Il prodotto OpenIaaS è distribuito in una zona di disponibilità. 
Una zona di disponibilità fa parte di una regione.

Questo tipo di distribuzione consente di scegliere la localizzazione dei cluster e di poterli distribuire su diverse zone di disponibilità (AZ).
Ciò offre una migliore distribuzione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di ripristino delle attività (DRP) in caso di incidente.

---

## Classi di lame di calcolo

Le lame di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per rispondere a vari bisogni:

| Riferimento           | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|-------------------------|----------------------|----------------------|
| **ECO**               | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread          | 2 X 10 Gbit/s        | -                    |
| **STANDARD**          | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread          | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**           | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**     | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**     | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**     | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread         | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**     | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread          | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Note:
- __(1)__ La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- __(2)__ Le frequenze indicate corrispondono alla frequenza di base minima e alla frequenza turbo.
- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e l'accesso all'archiviazione a blocchi, grazie a un'architettura convergente Cisco UCS.
- __(4)__ Le GPU disponibili evolvono in base alle ultime tecnologie. Al 1 maggio 2024, l'offerta include GPU NVIDIA LOVELACE L40S.
- __(5)__ L'HA su un cluster è disponibile solo a partire da 3 nodi.

La disponibilità dell'infrastruttura è garantita al 99.9%, misurata mensilmente, includendo i periodi di manutenzione. Qualsiasi richiesta relativa al SLA deve essere dichiarata tramite un ticket di incidente.

---

## Classi di archiviazione in modalità a blocchi

L'archiviazione a blocchi distribuita, basata su **IBM Spectrum Virtualize**, offre una gamma di prestazioni adatte a diversi casi d'uso:

| Riferimento                       | IOPS/To                | Utilizzo principale                      |
|-----------------------------------|------------------------|------------------------------------------|
| **FLASH - Essenziale**            | 500                    | Carichi di lavoro leggeri                |
| **FLASH - Standard**              | 1500                   | Carichi di lavoro standard               |
| **FLASH - Premium**               | 3000                   | Carichi intensivi                        |
| **FLASH - Enterprise**            | 7500                   | Carichi critici                          |
| **FLASH - Ultra**                 | 15000                  | Carichi ultra-intensivi                  |
| **MASS STORAGE - Archivio**       | Non applicabile        | Archiviazione economica per l'archivio   |

### Caratteristiche:
- **Tecnologia**: Flash NVMe con **Distributed RAID 6** per una maggiore resilienza.
- **Disponibilità**: 99.99%, misurata mensilmente.
- **Limitazioni**: Nessuna limitazione sulle letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo integrale dei volumi riservati.

---

## Le reti
Il prodotto OpenIaaS è compatibile con [le reti private](../network/private_network) e [l'accesso internet](../network/internet).

Due tipi di reti sono disponibili dalla configurazione di una macchina virtuale.

### Le reti di tipo VLAN 
Le reti di tipo VLAN sono da propagare a ragione di una VLAN per scheda di rete. Se desideri utilizzare più reti, basta creare più schede di rete.

C'è una limitazione sul numero massimo di schede che si possono creare su una VM, che è 7.

### Il VLAN TRUNK
Nel caso in cui sia necessario propagare più di 7 VLAN, devi utilizzare il VLAN Trunk.
Il VLAN Trunk lascia passare tutte le tue VLAN su una sola scheda. La configurazione degli ID di VLAN deve essere effettuata tramite interfacce virtuali di tipo VLAN dal sistema operativo della VM. Gli ID di VLAN sono gli stessi presenti e visibili dalla console.


## Backup delle macchine virtuali

Cloud Temple offre **un'architettura di backup distribuita nativa e non disattivabile**, elemento obbligatorio nell'ambito della certificazione SecNumCloud francese.

I backup sono archiviati sulla soluzione [Object Storage certificata SecNumCloud](../storage/oss), garantendo una protezione ottimale in caso di grave guasto del data center di produzione. Questo approccio consente di ripristinare i tuoi dati su un data center secondario, anche in caso di incidente critico come un incendio.

Questa soluzione completa include:
- Il backup off-site a caldo di tutti i dischi
- Una flessibilità di ripristino che consente di scegliere il punto di recupero e la localizzazione

L'infrastruttura di backup si basa su una tecnologia open source a architettura senza agenti, che combina semplicità d'uso e automazione dei processi. Questa soluzione ottimizza l'uso dello spazio di archiviazione mantenendo elevate prestazioni.

Le velocità di backup e ripristino dipendono dal tasso di cambiamento sugli ambienti. La politica di backup è completamente configurabile dalla [Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

**Nota importante:**


*Alcune macchine virtuali non sono compatibili con questa tecnologia di backup* che utilizza i meccanismi di snapshot dell'hypervisor. Si tratta tipicamente delle macchine le cui operazioni di scrittura su disco sono costanti. In questi casi, l'hypervisor non riesce a completare lo snapshot, il che richiede il congelamento della macchina virtuale per terminare l'operazione. Questo congelamento può durare diverse ore e non è interrompibile.

La soluzione raccomandata consiste quindi nell'escludere il disco interessato dalle scritture permanenti e nel salvare i dati con un metodo alternativo.

| Riferimento                                  | Unità | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Accesso al servizio                 | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creazione di una politica di backup

Per aggiungere una nuova politica di backup, è necessario inviare una richiesta al supporto, accessibile tramite l'icona della boa situata in alto a destra dell'interfaccia.

La creazione di una nuova politica di backup viene effettuata tramite **una richiesta di servizio** specificando:
- Il nome della tua Organizzazione
- I dati di contatto (email e telefono) per completare la configurazione
- Il nome del tenant
- Il nome della politica di backup
- Le caratteristiche desiderate (x giorni, y settimane, z mesi, ...)


## Le macchine virtuali

### Gestione delle risorse vCPU
Le modifiche alle risorse vCPU vengono effettuate a freddo (macchina spenta). La piattaforma supporta fino a 254 vCPU per macchina virtuale (limite teorico), con test conclusi su VM Linux equipaggiate con 128 vCPU.

È importante notare che il supporto del sistema operativo ospite è un fattore determinante durante l'allocazione delle risorse. Un'allocazione che supera i limiti supportati dal sistema operativo può causare gravi problemi di prestazioni.

### Gestione delle risorse di memoria
Anche le modifiche della memoria vengono effettuate a freddo. I limiti sono i seguenti:
- 1,5 TiB con supporto degli snapshot di memoria
- 8 TiB senza supporto degli snapshot di memoria
- 16 TiB (limite teorico senza supporto di sicurezza, meno la RAM assegnata a Xen e al dominio di controllo)

La memoria realmente utilizzabile potrebbe essere limitata dal sistema operativo ospite. Superare i limiti supportati dall'SO ospite può portare a cali delle prestazioni.

### Gestione dei dischi
- La dimensione massima di un disco è di 2 TB
- I dischi utilizzano il formato VHD standard
- Il numero massimo di dischi virtuali per macchina virtuale, inclusi i lettori CD-ROM, è di 24

Non è possibile ridimensionare i dischi una volta creati. Per estendere la capacità di archiviazione, è necessario creare un nuovo disco.


## Cataloghi

Il catalogo consente di gestire tre tipi di elementi essenziali:
- Le immagini disco (ISO)
- I template di configurazione
- I template preinstallati di macchine virtuali

Nella vista dettagliata di un template di macchina virtuale, è possibile consultare informazioni cruciali come la localizzazione, il numero di dischi o il numero di adattatori di rete.

Quando il numero di dischi virtuali è indicato come 0, significa che si tratta di un template di configurazione senza sistema operativo preinstallato, che consente di distribuire il proprio ambiente personalizzato.