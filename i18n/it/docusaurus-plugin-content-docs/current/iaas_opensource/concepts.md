---
title: Concetti
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per rispondere alle esigenze critiche di continuità e ripresa delle attività, con un'attenzione particolare ai settori esigenti come l'industria, le banche e le assicurazioni. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce massima disponibilità e prestazioni ottimali per i vostri carichi di lavoro critici.

## Una piattaforma tecnologica affidabile

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ per lo storage a blocchi e __DELL ECS__ per lo storage a oggetti.
- Rete: __JUNIPER__.
- Virtualizzazione: __Stack Opensource__, che fornisce una base affidabile e collaudata per gestire i vostri ambienti cloud.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, garantendo un'ampia compatibilità con i principali fornitori di software.

## Un'infrastruttura dedicata e automatizzata

Sebbene completamente automatizzata tramite API e un provider Terraform, l'offerta IaaS di Cloud Temple fornisce un'infrastruttura unica:

- __Risorse dedicate__: Le lame di calcolo, i volumi di storage e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- __Massima prevedibilità__: Controllate i tassi di virtualizzazione, la pressione in IOPS sullo storage e beneficiate di una fatturazione chiara, basata sul consumo mensile.

La piattaforma è qualificata __SecNumCloud__ dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Caratteristiche principali

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Storage su richiesta (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Backup incrociati con conservazione configurabile.
- Replica asincrona per storage o macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) o in modalità Infrastructure as Code tramite API e il provider Terraform.

## Vantaggi

| Vantaggio           | Descrizione                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale    | Hosting dei dati in Francia e conformità GDPR.                                                                                                 |
| Sicurezza           | Piattaforma altamente sicura, qualificata __SecNumCloud__, __HDS__ (Hosting di Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__.          |
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, incluse le finestre di manutenzione.                                |
| Resilienza          | Implementazione di piani di continuità o ripresa delle attività in base alle esigenze.                                                          |
| Automazione         | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                   |
| On demand           | Risorse disponibili su richiesta.                                                                                                              |

## Regioni e zone di disponibilità

Il prodotto OpenIaaS viene distribuito in una zona di disponibilità.
Una zona di disponibilità fa parte di una regione.

Questo tipo di distribuzione consente di scegliere la posizione dei cluster e di distribuirli su diverse zone di disponibilità (AZ).
Ciò offre una migliore distribuzione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di ripristino di emergenza (DRP) in caso di incidente.

---

## Classi di lame di calcolo

Le lame di calcolo disponibili per l'offerta Bare Metal forniscono una gamma di prestazioni per soddisfare diverse esigenze:

| Riferimento             | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread             | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread             | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread            | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Note

- __(1)__ La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- __(2)__ Le frequenze indicate corrispondono alla frequenza base minima e alla frequenza turbo.
- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e l'accesso allo storage a blocchi, grazie a un'architettura convergente Cisco UCS.
- __(4)__ Le GPU disponibili evolvono in base alle ultime tecnologie. Dal 1° maggio 2024, l'offerta include GPU NVIDIA LOVELACE L40S.
- __(5)__ L'alta disponibilità su un cluster è disponibile solo a partire da 2 nodi.

La disponibilità dell'infrastruttura è garantita al 99,9%, misurata mensilmente, incluse le finestre di manutenzione. Qualsiasi richiesta relativa all'SLA deve essere dichiarata tramite un ticket di incidente.

---

## Classi di storage in modalità blocco

Lo storage a blocchi distribuito, basato su __IBM Spectrum Virtualize__, offre una gamma di prestazioni adattate a diversi casi d'uso:

| Riferimento                         | IOPS/TB                 | Uso principale                        |
|-----------------------------------|-------------------------|---------------------------------------|
| __FLASH - Essenziale__            | 500                     | Carichi di lavoro leggeri             |
| __FLASH - Standard__              | 1500                    | Carichi di lavoro standard            |
| __FLASH - Premium__               | 3000                    | Carichi intensivi                     |
| __FLASH - Enterprise__            | 7500                    | Carichi critici                       |
| __FLASH - Ultra__                 | 15000                   | Carichi ultra-intensivi               |
| __MASS STORAGE - Archiviazione__  | Non applicabile         | Storage economico per l'archiviazione |

### Caratteristiche

- __Tecnologia__: Flash NVMe con __Distributed RAID 6__ per una maggiore resilienza.
- __Disponibilità__: 99,99%, misurata mensilmente.
- __Restrizioni__: Nessuna limitazione su letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo completo dei volumi riservati.

---

## Reti

Il prodotto OpenIaaS è compatibile con [reti private](../network/private_network) e [accesso a internet](../network/internet).

Due tipi di reti sono disponibili dalla configurazione di una macchina virtuale.

### Reti di tipo VLAN

Le reti di tipo VLAN devono essere propagate a ragione di una VLAN per scheda di rete. Se desiderate utilizzare più reti, è sufficiente creare più schede di rete.

Esiste una limitazione sul numero massimo di schede che si possono creare su una VM, che è di 7.

### VLAN TRUNK

Nel caso in cui dobbiate propagare più di 7 VLAN, dovete utilizzare la VLAN Trunk.
La VLAN Trunk permette a tutte le vostre VLAN di passare attraverso una sola scheda. La configurazione degli ID VLAN deve essere fatta tramite interfacce virtuali di tipo VLAN dal sistema operativo della VM. Gli ID VLAN sono gli stessi di quelli presenti e visibili dalla console.

## Backup di macchine virtuali

Cloud Temple offre __un'architettura di backup distribuita nativa e non disattivabile__, un elemento obbligatorio nel quadro della qualifica SecNumCloud francese.

I backup sono memorizzati sulla [soluzione di Storage a Oggetti qualificata SecNumCloud](../storage/oss), garantendo una protezione ottimale in caso di guasto importante del datacenter di produzione. Questo approccio vi permette di ripristinare i vostri dati su un datacenter secondario, anche in caso di incidente critico come un incendio.

Questa soluzione completa include:

- Backup off-site a caldo di tutti i dischi
- Flessibilità di ripristino che vi permette di scegliere il punto di recupero e la posizione

L'infrastruttura di backup si basa su una tecnologia opensource ad architettura senza agente, combinando facilità d'uso e automazione dei processi. Questa soluzione ottimizza l'utilizzo dello spazio di storage mantenendo prestazioni elevate.

Le velocità di backup e ripristino dipendono dal tasso di cambiamento negli ambienti. La politica di backup è completamente configurabile dalla [Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

__Nota importante:__

*Alcune macchine virtuali non sono compatibili con questa tecnologia di backup* che utilizza i meccanismi di snapshot dell'hypervisor. Si tratta tipicamente di macchine i cui carichi di scrittura su disco sono costanti. In questi casi, l'hypervisor non può finalizzare lo snapshot, il che richiede il congelamento della macchina virtuale per completare l'operazione. Questo congelamento può durare diverse ore e non è interrompibile.

La soluzione raccomandata consiste nell'escludere il disco oggetto di scritture permanenti e fare il backup dei dati con un metodo alternativo.

| Riferimento                                    | Unità | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Accesso al servizio                 | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creazione di una politica di backup

Per aggiungere una nuova politica di backup, deve essere inviata una richiesta al supporto, accessibile tramite l'icona del salvagente situata in alto a destra dell'interfaccia.

La creazione di una nuova politica di backup si effettua tramite __una richiesta di servizio__ specificando:

- Il nome della vostra Organizzazione
- I dati di contatto (email e telefono) per finalizzare la configurazione
- Il nome del tenant
- Il nome della politica di backup
- Le caratteristiche desiderate (x giorni, y settimane, z mesi, ...)

## Macchine virtuali

### Gestione delle risorse vCPU

Le modifiche delle risorse vCPU si effettuano a freddo (macchina spenta). La piattaforma supporta fino a 254 vCPU per macchina virtuale (limite teorico), con test conclusivi realizzati su VM Linux equipaggiate con 128 vCPU.

È importante notare che il supporto del sistema operativo ospite costituisce un fattore determinante nell'allocazione delle risorse. Un'allocazione che supera i limiti supportati dal sistema operativo può causare problemi di prestazioni significativi.

### Gestione delle risorse di memoria

Le modifiche della memoria si effettuano anch'esse a freddo. I limiti sono i seguenti:

- 1,5 TiB con supporto per snapshot di memoria
- 8 TiB senza supporto per snapshot di memoria
- 16 TiB (limite teorico senza supporto di sicurezza, meno la RAM allocata a Xen e al dominio di controllo)

La memoria realmente utilizzabile può essere limitata dal sistema operativo ospite. Superare i limiti supportati dal sistema operativo ospite può causare un degrado delle prestazioni.

### Gestione dei dischi

- La dimensione massima di un disco è di 2 TB
- I dischi utilizzano il formato VHD standard
- Il numero massimo di dischi virtuali per macchina virtuale, incluse le unità CD-ROM, è di 24

Non è possibile ridimensionare i dischi una volta creati. Per estendere la capacità di storage, è necessario creare un nuovo disco.

## Cataloghi

Il catalogo permette di gestire tre tipi di elementi essenziali:

- Immagini disco (ISO)
- Template di configurazione
- Template preinstallati di macchine virtuali

Nella vista dettagliata di un template di macchina virtuale, potete consultare informazioni cruciali come la posizione, il numero di dischi o il numero di adattatori di rete.

Quando il numero di dischi virtuali è indicato come 0, significa che si tratta di un template di configurazione senza sistema operativo preinstallato, permettendovi così di distribuire il vostro ambiente personalizzato.

## Alta Disponibilità

L'alta disponibilità permette di assicurare la continuità del servizio delle macchine virtuali (VM) in caso di guasto di un host fisico all'interno di un pool OpenIaaS.
Con l'alta disponibilità (HA), ogni host nel pool invia regolarmente segnali di vita ai suoi peer tramite lo storage condiviso (Block Storage Heartbeat). In caso di assenza prolungata di risposta, l'host è considerato guasto.

Un Block Storage designato come heartbeat significa che servirà da base per autenticare gli host che non rispondono più.

Perché l'alta disponibilità sia correttamente configurata in un pool OpenIaaS, è indispensabile disporre di **almeno due host** connessi.

Ogni VM deve essere configurata con un livello di priorità di riavvio in alta disponibilità:

#### Disabled
  Se una VM non protetta o il suo host viene fermato, l'alta disponibilità **non tenterà di riavviare la VM**.

#### Restart
  Se una VM protetta non può essere riavviata immediatamente dopo un guasto del server, l'alta disponibilità **tenterà di riavviarla successivamente** quando sarà disponibile capacità aggiuntiva nel pool. Tuttavia, **non c'è garanzia che questo tentativo abbia successo**.

#### Best-Effort  
  Per le VM configurate in modalità *best-effort*, l'alta disponibilità **tenterà di riavviarle su un altro host** se il loro host originale si guasta.  
  Questo tentativo **avviene solo dopo il riavvio riuscito di tutte le VM configurate in modalità "restart"**.  
  L'alta disponibilità **farà solo un tentativo di riavvio** per una VM in *best-effort*; se fallisce, **non verrà fatto nessun altro tentativo**.
