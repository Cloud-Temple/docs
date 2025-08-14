---
title: Concetti
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per rispondere alle esigenze critiche di continuità e ripresa d'attività, con un particolare focus sui settori esigenti come l'industria, la banca e l'assicurazione. Basata su tecnologie di punta, questa infrastruttura garantisce una disponibilità massima e una prestazione ottimale per i vostri carichi di lavoro critici.

## Una piattaforma tecnologica di fiducia

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: __CISCO UCS__.
- Archiviazione: __IBM Spectrum Virtualize__, __IBM FlashSystem__ per l'archiviazione a blocchi, e __DELL ECS__ per l'archiviazione oggetti.
- Rete: __JUNIPER__.
- Virtualizzazione: __Stack Open Source__, che offre una base affidabile ed esperienzata per gestire i vostri ambienti cloud.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, garantendo una compatibilità estesa con i principali sviluppatori software.

## Un'infrastruttura dedicata e automatizzata

Sebbene completamente automatizzata grazie a API e un provider Terraform, l'offerta IaaS di Cloud Temple propone un'infrastruttura unica:

- __Risorse dedicate__: Le unità di calcolo, i volumi di storage e le stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivise tra i clienti.
- __Predicibilità massima__: Si controllano i tassi di virtualizzazione, la pressione in IOPS sullo storage e si beneficia di una fatturazione chiara, al consumo mensile.

La piattaforma è qualificata __SecNumCloud__ dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Funzionalità principali

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Archiviazione su richiesta (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Backup incrociati con conservazione configurabile.
- Replica asincrona per l'archiviazione o le macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio           | Descrizione                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale    | Ospitalità dei dati in Francia e conformità RGPD.                                                                                          |
| Sicurezza           | Piattaforma estremamente sicura, qualificata __SecNumCloud__, __HDS__ (Ospitalità dei Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__. |
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, periodi di manutenzione inclusi.                                        |
| Resilienza          | Implementazione di piani di continuità o di ripresa d'attività secondo le esigenze.                                                               |
| Automazione         | Piattaforma completamente automatizzata pensata per integrarsi in un programma di trasformazione digitale.                                        |
| Su richiesta        | Risorse disponibili su richiesta.                                                                                                          |

## Regioni e zone di disponibilità

Il prodotto OpenIaaS è distribuito in una zona di disponibilità.
Una zona di disponibilità fa parte di una regione.

Questo tipo di distribuzione consente di scegliere la posizione dei cluster e di distribuirli su diverse zone di disponibilità (AZ).
Questo offre una migliore distribuzione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di ripristino dell'attività (DRP) in caso di incidente.

## Classi di lame di calcolo

Le lame di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per soddisfare diversi bisogni:

| Riferimento            | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          |
|------------------------|--------------|-------------------------------------------|--------------------------|-----------------------|-----------------------|
| __ECO__               | 384 Go       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread           | 2 x 10 Gbit/s         | -                     |
| __STANDARD__          | 384 Go       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread           | 2 x 25 Gbit/s         | -                     |
| __ADVANCE__           | 768 Go       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread           | 2 x 25 Gbit/s         | -                     |
| __PERFORMANCE 1__     | 384 Go       | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread           | 2 x 25 Gbit/s         | -                     |
| __PERFORMANCE 2__     | 768 Go       | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread           | 2 x 25 Gbit/s         | -                     |
| __PERFORMANCE 3__     | 1536 Go      | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread          | 2 x 25 Gbit/s         | -                     |
| __PERFORMANCE 4__     | 512 Go       | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread           | 2 x 25 Gbit/s         | 2 x NVIDIA L40S 48Go |

### Note

- __(1)__ La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- __(2)__ Le frequenze indicate corrispondono alla frequenza base minima e alla frequenza turbo.
- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e l'accesso all'archiviazione a blocchi, grazie a un'architettura convergente Cisco UCS.
- __(4)__ I GPU disponibili evolvono in base alle ultime tecnologie. Al 1° maggio 2024, l'offerta include GPU NVIDIA LOVELACE L40S.
- __(5)__ L'alta disponibilità su un cluster è disponibile esclusivamente a partire da 2 nodi.

La disponibilità dell'infrastruttura è garantita al 99,9%, misurata mensilmente, periodi di manutenzione inclusi. Ogni richiesta relativa al SLA deve essere dichiarata tramite un ticket incidente.

---

## Classi di archiviazione in modalità blocco

L'archiviazione a blocchi distribuita, basata su __IBM Spectrum Virtualize__, offre una gamma di prestazioni adatta a diversi casi d'uso:

| Riferimento                        | IOPS/To                 | Uso principale                        |
|-----------------------------------|-------------------------|----------------------------------------|
| __FLASH - Essenziale__            | 500                     | Carichi di lavoro leggeri             |
| __FLASH - Standard__              | 1500                    | Carichi di lavoro standard            |
| __FLASH - Premium__               | 3000                    | Carichi intensi                       |
| __FLASH - Enterprise__            | 7500                    | Carichi critici                       |
| __FLASH - Ultra__                 | 15000                   | Carichi ultra-intensi                 |
| __ARCHIVIO - Archiviazione__      | Non applicabile         | Archiviazione economica per l'archiviazione |

### Caratteristiche

- __Tecnologia__ : Flash NVMe con __Distributed RAID 6__ per una maggiore resilienza.
- __Disponibilità__ : 99,99%, misurata mensilmente.
- __Limitazioni__ : Nessuna limitazione sulle letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo integrale dei volumi riservati.

---

## Reti

Il prodotto OpenIaaS è compatibile con [reti private](../network/private_network) e [accesso a internet](../network/internet).

Due tipi di reti sono disponibili dalla configurazione di una macchina virtuale.

### Reti di tipo VLAN

Le reti di tipo VLAN devono essere distribuite con un VLAN per scheda di rete. Se desideri utilizzare più reti, è sufficiente creare più schede di rete.

Una limitazione è presente sul numero massimo di schede che è possibile creare su una VM, che è 7.

### Il VLAN TRUNK

Nel caso in cui devi propagare più di 7 VLAN, devi utilizzare il VLAN Trunk.
Il VLAN Trunk permette di far passare tutte le tue VLAN su una sola scheda. La configurazione degli ID delle VLAN deve essere effettuata tramite interfacce virtuali di tipo VLAN dal sistema operativo della VM. Gli ID delle VLAN sono gli stessi di quelli presenti e visibili dalla console.

## Backup di macchine virtuali

Cloud Temple offre __un'architettura di backup distribuita nativa e non rimovibile__, elemento obbligatorio per la certificazione SecNumCloud francese.

I backup vengono salvati sulla soluzione [Storage oggetto qualificato SecNumCloud](../storage/oss), garantendo una protezione ottimale in caso di guasto grave del datacenter di produzione. Questo approccio permette di ripristinare i propri dati su un datacenter secondario, anche in caso di incidente critico come un incendio.

Questa soluzione completa include:

- Il backup remoto in caldo di tutti i dischi
- Una flessibilità di ripristino che permette di scegliere il punto di recupero e la localizzazione

L'infrastruttura di backup si basa su una tecnologia open source con architettura senza agente, che unisce semplicità d'uso e automazione dei processi. Questa soluzione ottimizza l'utilizzo dello spazio di archiviazione mantenendo prestazioni elevate.

Le velocità di backup e ripristino dipendono dal tasso di modifica negli ambienti. La politica di backup è completamente configurabile dalla [Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

__Nota importante:__

*Alcune macchine virtuali non sono compatibili con questa tecnologia di backup* che utilizza i meccanismi di istantanee dell'ipervisore. Si tratta tipicamente di macchine con carichi di scrittura costanti sul disco. In questi casi, l'ipervisore non può completare l'istantanea, il che richiede il congelamento della macchina virtuale per terminare l'operazione. Questo congelamento può durare diverse ore e non è interrompibile.

La soluzione consigliata prevede quindi di escludere il disco interessato da scritture permanenti e di effettuare il backup dei dati con un metodo alternativo.

| Riferimento                                    | Unità | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Accesso al servizio                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creazione di una politica di backup

Per aggiungere una nuova politica di backup, deve essere presentata una richiesta al supporto, accessibile tramite l'icona di supporto situata in alto a destra dell'interfaccia.

La creazione di una nuova politica di backup avviene tramite __una richiesta di servizio__ che specifica:

- Il nome della vostra Organizzazione
- I dati di contatto (email e telefono) per completare la configurazione
- Il nome del tenant
- Il nome della politica di backup
- Le caratteristiche desiderate (x giorni, y settimane, z mesi, ...)

## Le macchine virtuali

### Gestione delle risorse vCPU

Le modifiche alle risorse vCPU vengono effettuate a freddo (macchina spenta). La piattaforma supporta fino a 254 vCPU per macchina virtuale (limite teorico), con test conclusivi effettuati su VM Linux dotate di 128 vCPU.

È importante notare che il supporto del sistema operativo ospite costituisce un fattore determinante durante l'allocazione delle risorse. Un'allocazione che supera i limiti supportati dal sistema operativo può causare problemi di prestazioni significativi.

### Gestione delle risorse di memoria

Le modifiche alla memoria vengono eseguite anche a freddo. I limiti sono i seguenti:

- 1,5 TiB con supporto per i snapshot di memoria
- 8 TiB senza supporto per i snapshot di memoria
- 16 TiB (limite teorico senza supporto di sicurezza, meno la RAM allocata a Xen e al dominio di controllo)

La memoria effettivamente utilizzabile può essere limitata dal sistema operativo ospite. Superare i limiti supportati dall'OS ospite può causare riduzioni delle prestazioni.

### Gestione dei dischi

- La dimensione massima di un disco è di 2 TB
- I dischi utilizzano il formato VHD standard
- Il numero massimo di dischi virtuali per macchina virtuale, inclusi i lettori CD-ROM, è di 24

Non è possibile ridimensionare i dischi una volta creati. Per espandere la capacità di archiviazione, è necessario creare un nuovo disco.

## Cataloghi

Il catalogo consente di gestire tre tipi di elementi essenziali:

- Le immagini disco (ISO)
- I modelli di configurazione
- I modelli preinstallati di macchine virtuali

Nella vista dettagliata di un modello di macchina virtuale, è possibile consultare informazioni cruciali come la posizione, il numero di dischi o il numero di schede di rete.

Quando il numero di dischi virtuali è indicato come 0, ciò significa che si tratta di un modello di configurazione senza sistema operativo preinstallato, consentendoti così di distribuire il tuo ambiente personalizzato.

## Alta disponibilità

L'alta disponibilità consente di garantire la continuità del servizio delle macchine virtuali (VM) in caso di guasto di un host fisico all'interno di un pool OpenIaaS.  
Con l'alta disponibilità (HA), ogni host nel pool invia regolarmente segnali di vita ai propri peer tramite l'archiviazione condivisa (Block Storage Heartbeat). In caso di assenza prolungata di risposta, l'host viene considerato guasto.

Un Block Storage definito come heartbeat indica che verrà utilizzato come base per autenticare gli host che non risponderanno più.

Per configurare correttamente l'alta disponibilità in un pool OpenIaaS, è indispensabile disporre di **almeno due host** connessi.

Ogni VM deve essere configurata con un livello di priorità di riavvio in alta disponibilità:

#### Disabilitato
  L'alta disponibilità non è configurata. In caso di guasto dell'host, la macchina virtuale non verrà riavviata.

#### Restart
In caso di guasto dell'host, la macchina virtuale verrà riavviata automaticamente non appena le risorse saranno disponibili nel pool. Le macchine virtuali configurate in modalità "restart" vengono trattate in priorità, rispetto a quelle configurate in modalità "best-effort".

#### Best-Effort  
  In caso di guasto dell'host, la macchina virtuale non verrà riavviata automaticamente se non ci sono risorse disponibili dopo il trattamento di tutte le macchine virtuali configurate in modalità "restart". La modalità "Best-effort" effettua un solo tentativo, quindi se le risorse sono insufficienti, la macchina virtuale non verrà riavviata.