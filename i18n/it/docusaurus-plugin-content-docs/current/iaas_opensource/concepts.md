---
title: Concetti
---

L'offerta __IaaS (Infrastructure come servizio)__ di Cloud Temple è progettata per soddisfare i bisogni critici di continuità operativa e ripresa d'attività, con un'enfasi particolare sui settori esigenti come l'industria, la banca e l'assicurazione. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce un'alta disponibilità e un'ottimizzazione delle prestazioni per i tuoi carichi di lavoro critici.

## Una piattaforma tecnologica di fiducia

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: __CISCO UCS__.
- Archiviazione: __IBM Spectrum Virtualize__, __IBM FlashSystem__ per l'archiviazione a blocchi, e __DELL ECS__ per l'archiviazione oggetti.
- Rete: __JUNIPER__.
- Virtualizzazione: __Stack Opensource__, che offre una base affidabile ed esauriente per gestire i vostri ambienti cloud.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, che garantisce un'ampia compatibilità con i principali produttori di software.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared among clients.
- __Maximum predictability__: You control virtualization rates, storage IOPS load, and benefit from clear, consumption-based monthly billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), guaranteeing a high level of automation and security.

## Principali funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Archiviazione su richiesta (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Backup incrociati con conservazione configurabile.
- Replica asincrona per l'archiviazione o le macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio           | Descrizione                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Sicurezza digitale  | Memorizzazione dei dati in Francia e conformità al RGPD.                                                                                          |
| Sicurezza           | Piattaforma altamente sicura, certificata __SecNumCloud__, __HDS__ (Ospitalità dei Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__. |
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, incluse le finestre di manutenzione.                                        |
| Resilienza          | Implementazione di piani di continuità o ripresa dell'attività in base alle esigenze.                                                               |
| Automazione         | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                        |
| Su richiesta        | Risorse disponibili su richiesta.                                                                                                          |

## Regioni e zone di disponibilità

Il prodotto OpenIaaS è distribuito in una zona di disponibilità.  
Una zona di disponibilità fa parte di una regione.

Questo tipo di distribuzione consente di scegliere la localizzazione dei cluster e di distribuirli su diverse zone di disponibilità (AZ).  
Fornisce una migliore distribuzione del carico, massimizza la ridondanza e semplifica la messa in atto di un piano di ripresa d'attività (DRP) in caso di incidente.

## Classi di schede di calcolo

Le schede di calcolo disponibili per l'offerta Bare Metal offrono una gamma di prestazioni per soddisfare diversi requisiti:

| Riferimento            | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread   | Connettività __(3)__ | GPU __(4)__          |
|------------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__               | 384 GB       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread            | 2 x 10 Gbit/s        | -                    |
| __STANDARD__          | 384 GB       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread            | 2 x 25 Gbit/s        | -                    |
| __ADVANCE__           | 768 GB       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread            | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 1__     | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread            | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 2__     | 768 GB       | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread            | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 3__     | 1536 GB      | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread           | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 4__     | 512 GB       | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread            | 2 x 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Note

- __(1)__ La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- __(2)__ Le frequenze indicate corrispondono alla frequenza base minima e alla frequenza turbo.
- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e l'accesso allo storage a blocchi, grazie a un'architettura convergente Cisco UCS.
- __(4)__ I GPU disponibili evolvono in base alle ultime tecnologie. Al 1° maggio 2024, l'offerta include GPU NVIDIA LOVELACE L40S.
- __(5)__ L'alta disponibilità su un cluster è disponibile esclusivamente a partire da 2 nodi.

La disponibilità dell'infrastruttura è garantita al 99,9%, misurata mensilmente, incluse le finestre di manutenzione. Ogni richiesta relativa allo SLA deve essere segnalata tramite un ticket incidente.

## Classi di archiviazione in modalità blocco

L'archiviazione in blocco distribuita, basata su __IBM Spectrum Virtualize__, offre una gamma di prestazioni adatta a diversi scenari di utilizzo:

| Riferimento                       | IOPS/To                 | Utilizzo principale                    |
|-----------------------------------|-------------------------|----------------------------------------|
| __FLASH - Essenziale__            | 500                     | Carichi di lavoro leggeri              |
| __FLASH - Standard__              | 1500                    | Carichi di lavoro standard             |
| __FLASH - Premium__               | 3000                    | Carichi intensivi                      |
| __FLASH - Enterprise__            | 7500                    | Carichi critici                        |
| __FLASH - Ultra__                 | 15000                   | Carichi ultra-intensivi                |
| __MASS STORAGE - Archiviazione__  | Non applicabile         | Archiviazione economica                |

### Caratteristiche

- __Tecnologia__: Flash NVMe con __RAID distribuito 6__ per una maggiore resilienza.
- __Disponibilità__: 99,99%, misurata mensilmente.
- __Restrizioni__: Nessuna limitazione sulle letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo un'utilizzo completo dei volumi riservati.

### Sicurezza e Crittografia del Storage a Blocchi

Per garantire la riservatezza dei tuoi dati inattivi, l'intera infrastruttura di storage a blocchi è dotata di un robusto crittografia hardware.

-   **Tipo di Crittografia**: I dati vengono crittografati direttamente sui dischi (`Data At Rest`) utilizzando l'algoritmo **XTS-AES 256**.
-   **Conformità**: Questo metodo di crittografia è conforme allo standard **FIPS 140-2**, garantendo un elevato livello di sicurezza certificato.
-   **Funzionamento**: La crittografia viene applicata al momento della scrittura dei dati sul supporto di archiviazione fisico.

:::warning Osservazione sulla replica
È importante sottolineare che questa crittografia protegge i dati archiviati sui dischi. Non è attiva "on-the-fly", il che significa che i dati non vengono crittografati durante le operazioni di replica dello storage tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita tramite canali di comunicazione dedicati e protetti.
:::

## Reti

Il prodotto OpenIaaS è compatibile con [reti private](../network/private_network) e [accesso a Internet](../network/internet).

Da configurazione di una macchina virtuale sono disponibili due tipi di rete.

### VLAN networks

VLAN-type networks are deployed at a rate of one VLAN per network interface card. If you want to use multiple networks, simply create multiple network interface cards.

A limitation exists regarding the maximum number of network cards that can be created on a VM, which is 7.

### VLAN Trunk

When you need to propagate more than 7 VLANs, you must use VLAN Trunking.  
VLAN Trunk allows all your VLANs to pass through a single network interface. VLAN ID configuration must be performed via virtual VLAN interfaces from the VM's operating system. The VLAN IDs are the same as those present and visible from the console.

## Backup delle macchine virtuali

Cloud Temple offre un'__architettura nativa e non rimovibile per il backup distribuito__, elemento obbligatorio per il raggiungimento della qualifica SecNumCloud francese.

I backup vengono archiviati sulla soluzione [Storage oggetto qualificato SecNumCloud](../storage/oss), garantendo una protezione ottimale in caso di guasto grave del datacenter di produzione. Questo approccio permette il ripristino dei dati su un datacenter secondario, anche in caso di incidente critico come un incendio.

Questa soluzione completa include:

- Backup remoto in tempo reale di tutti i dischi
- Flessibilità nel ripristino, con possibilità di scegliere il punto di recupero e la localizzazione

L'infrastruttura di backup si basa su una tecnologia open source con architettura senza agente, che combina semplicità d'uso e automazione dei processi. Questa soluzione ottimizza l'utilizzo dello spazio di archiviazione mantenendo prestazioni elevate.

Le velocità di backup e ripristino dipendono dal tasso di modifica negli ambienti. La politica di backup è completamente configurabile tramite [la Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

__Importante:__

*Alcune macchine virtuali non sono compatibili con questa tecnologia di backup*, che utilizza i meccanismi di snapshot istantanei dell'ipervisore. Si tratta tipicamente di macchine con carichi di scrittura costanti sul disco. In questi casi, l'ipervisore non riesce a completare lo snapshot istantaneo, il che richiede il congelamento della macchina virtuale per terminare l'operazione. Questo congelamento può durare diverse ore e non è interrompibile.

La soluzione raccomandata consiste quindi nell'escludere il disco interessato da scritture continue e nel salvare i dati tramite un metodo alternativo.

| Riferimento                                    | Unità | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| SAUVEGARDE - Accesso al servizio                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creazione di una politica di backup

Per aggiungere una nuova politica di backup, è necessario inviare una richiesta al supporto, accessibile tramite l'icona del salvagente situata in alto a destra dell'interfaccia.

La creazione di una nuova politica di backup avviene tramite __una richiesta di servizio__ che specifica:

- Il nome della tua Organizzazione
- I dati di contatto di un referente (email e telefono) per completare la configurazione
- Il nome del tenant
- Il nome della politica di backup
- Le caratteristiche desiderate (x giorni, y settimane, z mesi, ...)

## Macchine virtuali

### Gestione delle risorse vCPU

Le modifiche alle risorse vCPU vengono effettuate a freddo (macchina spenta). La piattaforma supporta fino a 254 vCPU per macchina virtuale (limite teorico), con test conclusivi effettuati su VM Linux dotate di 128 vCPU.

È importante notare che il supporto del sistema operativo ospite rappresenta un fattore determinante nell'allocazione delle risorse. Un'allocazione superiore ai limiti supportati dal sistema operativo può causare problemi significativi di prestazioni.

### Gestione delle risorse di memoria

Le modifiche alla memoria vengono effettuate anche a freddo. I limiti sono i seguenti:

- 1,5 TiB con supporto per i snapshot della memoria
- 8 TiB senza supporto per i snapshot della memoria
- 16 TiB (limite teorico senza supporto di sicurezza, meno la RAM allocata a Xen e al dominio di controllo)

La memoria effettivamente utilizzabile può essere limitata dal sistema operativo ospite. Superare i limiti supportati dall'OS ospite può causare una riduzione delle prestazioni.

### Gestione dei dischi

- La dimensione massima di un disco è di 2 TB
- I dischi utilizzano il formato VHD standard
- Il numero massimo di dischi virtuali per macchina virtuale, inclusi i lettori CD-ROM, è di 24

Non è possibile ridimensionare i dischi una volta creati. Per aumentare la capacità di archiviazione, è necessario creare un nuovo disco.

### Strumenti per le macchine virtuali
Questi strumenti sono utilizzati per garantire un funzionamento ottimale delle macchine virtuali. Quando si desidera eseguire un'azione e uno di questi strumenti è necessario, un messaggio verrà visualizzato sulla console Cloud Temple.  
Per installare questi strumenti, è possibile consultare i siti ufficiali di Xen Server per ottenere una procedura precisa in base al proprio sistema operativo.

#### Management Agent
The Management Agent is a component installed on each virtual machine. It enables the hypervisor to better manage the machine by providing access to more information and allows certain actions to be performed more cleanly.

#### PV Drivers (Drivers di paravirtualizzazione)
I driver PV sono driver installati nella macchina virtuale per migliorarne le prestazioni.  
Senza questi driver, la macchina funziona, ma in modo più lento. Inoltre, consentono alcune operazioni avanzate.  
I driver PV sono installati nativamente nella maggior parte dei kernel Linux attuali.

#### Tools
Gli strumenti sono un insieme di componenti software che migliorano l'integrazione della macchina virtuale con l'infrastruttura di virtualizzazione.

## Catalogs

The catalog allows you to manage three essential types of items:

- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can check crucial information such as location, number of disks, or number of network adapters.

When the number of virtual disks is shown as 0, this indicates a configuration template without a preinstalled operating system, allowing you to deploy your own customized environment.

## Replica di macchine virtuali

La funzionalità di __replica di macchine virtuali__ di Cloud Temple garantisce la protezione e la continuità dei tuoi dati critici grazie a una copia automatica dei tuoi ambienti in una zona di disponibilità diversa. Questa funzionalità, integrata nativamente nell'offerta IaaS Open Source, soddisfa i requisiti più rigorosi in termini di continuità operativa e ripresa da incidenti.

### Protezione automatizzata e sicura

La replica Cloud Temple si basa su un'infrastruttura __qualificata SecNumCloud__, garantendo:

- __Replica asincrona__: Copia continua delle tue macchine virtuali senza impatto sulle prestazioni di produzione  
- __Separazione geografica__: Archiviazione dei replica in un'area di disponibilità diversa da quella di origine  
- __Automazione completa__: Processo completamente automatizzato tramite la [Console Cloud Temple](../console/console.md)  
- __Conformità normativa__: Rispetto dei requisiti di backup e continuità operativa

### Vantaggi della replica

| Vantaggio               | Descrizione                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuità operativa    | Protezione dei servizi critici in caso di incidente grave sul sito principale.                                                                 |
| Protezione geografica   | Replica in un'area di disponibilità diversa, protetta da eventi localizzati.                                                                   |
| Flessibilità temporale  | Scelta dell'intervallo di replica in base alle proprie esigenze: da 1 minuto a 24 ore.                                                        |
| Semplificazione della gestione | Configurazione e monitoraggio completamente integrati nella Console Cloud Temple.                                                              |
| Conformità SecNumCloud  | Infrastruttura qualificata che garantisce il massimo livello di sicurezza per i tuoi dati sensibili.                                           |

### Configurazione della replica

#### Politiche di replica

La creazione di una politica di replica definisce i parametri di protezione delle tue macchine virtuali:

- __Destinazione__: selezione dell'archiviazione di destinazione nella zona di disponibilità di replica
- __Frequenza__: intervallo di replica adatto ai tuoi requisiti di ripristino (RPO)
- __Ritenzione__: numero di punti di ripristino conservati

#### Intervalli disponibili

| Intervallo              | Utilizzo consigliato                           | RPO (perdita massima di dati) |
|-------------------------|--------------------------------------------|-----------------------------|
| __da 1 a 59 minuti__      | Applicazioni critiche in tempo reale         | < 1 ora                   |
| __da 1 a 24 ore__       | Applicazioni aziendali e ambienti standard | < 24 ore               |

#### Associazione delle macchine virtuali

Dopo aver creato la politica, puoi associare le tue macchine virtuali da proteggere:

- __Selezione semplice__: scelta delle VM dall'interfaccia della Console
- __Convalida automatica__: verifica della compatibilità e dei prerequisiti
- __Attivazione immediata__: avvio automatico della replica dopo la configurazione

### Gestione dei replica

#### Visualizzazione delle politiche

La Console Cloud Temple offre una visualizzazione centralizzata delle tue politiche di replica con:

- Nome e frequenza di ogni politica
- Zona di disponibilità di destinazione
- Pool e archiviazione associati
- Azioni di gestione disponibili

#### View of replicas

The replicas table allows you to visualize:

- Names of replicated virtual machines  
- Source and target locations  
- Associated replication policy  
- Export of data in CSV format

### Best practices

#### Raccomandazioni per tipo di carico

- __Applicazioni critiche__: replica ogni 1-30 minuti per minimizzare la perdita di dati  
- __Applicazioni aziendali__: replica oraria o bi-oraria in base alle esigenze  
- __Ambienti di sviluppo__: replica giornaliera generalmente sufficiente

#### Pianificazione delle politiche

- Creare politiche distinte in base alla criticità delle applicazioni
- Assegnare nomi chiari alle politiche per facilitare la gestione
- Verificare regolarmente lo stato dei replica dalla console
- Documentare la strategia di replica per i team

__Nota importante:__

*La replica non sostituisce una strategia di backup completo. Rappresenta un complemento essenziale per garantire la continuità operativa in caso di incidente grave sul sito principale.*

## Alta disponibilità

L'alta disponibilità consente di garantire la continuità del servizio delle macchine virtuali (VM) in caso di guasto di un host fisico all'interno di un pool OpenIaaS.  
Con l'alta disponibilità (HA), ogni host nel pool invia regolarmente segnali di stato ai suoi peer tramite lo storage condiviso (Block Storage Heartbeat). In caso di assenza prolungata di risposta, l'host viene considerato guasto.

Un Block Storage designato come heartbeat significa che verrà utilizzato come base per autenticare gli host che non risponderanno più.

Per configurare correttamente l'alta disponibilità in un pool OpenIaaS, è indispensabile disporre di **almeno due host** connessi.

Ogni VM deve essere configurata con un livello di priorità di riavvio in caso di alta disponibilità:

#### Disabled  
High availability is not configured. In the event of host failure, the virtual machine will not be restarted.

#### Restart
In case of host failure, the virtual machine will be automatically restarted as soon as resources become available in the pool. Virtual machines configured in "restart" mode are prioritized over those configured in "best-effort" mode.

#### Best-effort  
In caso di guasto dell'host, la macchina virtuale verrà riavviata automaticamente solo se delle risorse rimangono disponibili dopo il trattamento di tutte le macchine virtuali configurate in modalità "restart". La modalità "Best-effort" effettua un solo tentativo, quindi, se le risorse sono insufficienti, la macchina virtuale non verrà riavviata.