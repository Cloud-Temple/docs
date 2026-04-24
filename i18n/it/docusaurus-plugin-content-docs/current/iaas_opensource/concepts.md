---
title: Concetti
---

L'offerta __IaaS (Infrastructure as a Service)__ di Cloud Temple è progettata per soddisfare i bisogni critici di continuità operativa e ripresa d'attività, con un'enfasi particolare sui settori esigenti come l'industria, la banca e l'assicurazione. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce un'alta disponibilità e un'ottimizzazione delle prestazioni per i tuoi carichi di lavoro critici.

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

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Funzionalità principali

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Archiviazione su richiesta (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Backup incrociati con conservazione configurabile.
- Replica asincrona per l'archiviazione o le macchine virtuali.
- Gestione tramite la [Console](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio           | Descrizione                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Sicurezza digitale  | Memorizzazione dei dati in Francia e conformità al GDPR.                                                                                          |
| Sicurezza           | Piattaforma altamente sicura, certificata __SecNumCloud__, __HDS__ (Ospitalità dei Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__. |
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, incluse le finestre di manutenzione.                                        |
| Resilienza          | Implementazione di piani di continuità o ripresa dell'attività secondo le esigenze.                                                               |
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
| __ECO__               | 384 GB       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread            | 2 × 10 Gbit/s        | -                    |
| __STANDARD__          | 384 GB       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread            | 2 × 25 Gbit/s        | -                    |
| __ADVANCE__           | 768 GB       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread            | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 1__     | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread            | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 2__     | 768 GB       | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread            | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 3__     | 1536 GB      | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread           | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 4__     | 512 GB       | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread            | 2 × 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Note

- __(1)__ La quantità di memoria è quella fisicamente disponibile sulle lame e non può essere modificata.
- __(2)__ Le frequenze indicate corrispondono alla frequenza base minima e alla frequenza turbo.
- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e l'accesso allo storage a blocchi, grazie a un'architettura convergente Cisco UCS.
- __(4)__ I GPU disponibili evolvono in base alle ultime tecnologie. Al 1° maggio 2024, l'offerta include GPU NVIDIA LOVELACE L40S.
- __(5)__ L'alta disponibilità su un cluster è disponibile esclusivamente a partire da 2 nodi.

La disponibilità dell'infrastruttura è garantita al 99,9%, misurata mensilmente, incluse le finestre di manutenzione. Ogni richiesta relativa allo SLA deve essere segnalata tramite un ticket incidente.

## Classi di archiviazione in modalità blocco

L'archiviazione in blocco distribuita, basata su __IBM Spectrum Virtualize__, offre una gamma di prestazioni adatta a diversi scenari di utilizzo:

| Riferimento                       | IOPS/To                 | Uso principale                         |
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
- __Restrizioni__: Nessuna limitazione sulle letture o scritture. Nessuna compressione o deduplicazione automatica, garantendo l'utilizzo integrale dei volumi riservati.

### Sicurezza e Crittografia del Storage a Blocchi

Per garantire la riservatezza dei tuoi dati in stato di riposo, l'intera infrastruttura di storage a blocchi è dotata di un robusto crittografia hardware.

- __Tipo di Crittografia__: I dati vengono crittografati direttamente sui dischi (`Data At Rest`) utilizzando l'algoritmo __XTS-AES 256__.
- __Conformità__: Questo metodo di crittografia è conforme allo standard __FIPS 140-2__, garantendo un elevato livello di sicurezza certificato.
- __Funzionamento__: La crittografia viene applicata al momento della scrittura dei dati sul supporto di archiviazione fisico.

:::warning[Osservazione sulla replica]
È importante sottolineare che questa crittografia protegge i dati memorizzati sui dischi. Non è attiva "on-the-fly", il che significa che i dati non vengono crittografati durante le operazioni di replica dello storage tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita tramite canali di comunicazione dedicati e protetti.
:::

## Reti

Il prodotto OpenIaaS è compatibile con [reti private](../network/private_network) e [accesso a Internet](../network/internet).

Da configurazione di una macchina virtuale sono disponibili due tipi di rete.

### VLAN networks

VLAN-type networks must be deployed at a rate of one VLAN per network interface card. If you wish to use multiple networks, simply create multiple network interface cards.

A limitation exists regarding the maximum number of network interfaces that can be created on a VM, which is 7.

### VLAN Trunk

Nel caso in cui sia necessario propagare più di 7 VLAN, è necessario utilizzare il VLAN Trunk.  
Il VLAN Trunk consente il passaggio di tutti i propri VLAN su un'unica scheda. La configurazione degli ID dei VLAN deve essere effettuata tramite interfacce virtuali di tipo VLAN dall'OS della VM. Gli ID dei VLAN sono gli stessi presenti e visibili dalla console.

## Backup delle macchine virtuali

L'offerta OpenIaaS include un'__architettura nativa e non disattivabile per il backup distribuito__, elemento obbligatorio nell'ambito della qualifica SecNumCloud francese.

I backup vengono archiviati sul [Storage Oggetti qualificato SecNumCloud](../storage/oss), garantendo una protezione ottimale in caso di guasto grave del datacenter di produzione. Questo approccio permette il ripristino dei dati su un datacenter secondario, anche in caso di incidenti critici come incendi.

### Servizi di protezione dei dati disponibili

| Servizio | Descrizione |
|---|---|
| **Backup incrementale (Agentless)** | Backup senza agente tramite i meccanismi nativi dell'ipervisore, verso un repository S3 remoto. |
| **Backup dei metadati** | Protezione delle configurazioni del pool di virtualizzazione e dell'orchestratore di backup — indispensabile per il Disaster Recovery. |
| **Ripristino granulare** | Ripristino a livello di VM completa, disco virtuale individuale o singolo file. |
| **Offloading S3 Multi-AZ** | Esternalizzazione verso lo storage a oggetti S3 di Cloud Temple replicato tra zone di disponibilità. |

Le velocità di backup e ripristino dipendono dal tasso di modifica negli ambienti. La politica di backup è completamente configurabile tramite [la Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

| Riferimento | Unità | SKU |
|---|---|---|
| BACKUP - Accesso al servizio | 1 VM | csp:(region):openiaas:backup:vm:v1 |

---

### Architettura tecnica del backup

#### Panoramica

L'architettura si basa su una separazione rigorosa tra il **piano di controllo** (orchestratore di backup) e il **piano dei dati** (storage S3 remoto): l'orchestratore è ospitato nel cluster di gestione di Cloud Temple (separato e inaccessibile al cliente), mentre i dati di backup sono archiviati in un repository S3 remoto, fisicamente separato dall'infrastruttura di produzione. I dati transitano cifrati tra i due componenti tramite HTTPS/TLS 1.3.

#### Orchestratore di backup

L'orchestratore è distribuito nel cluster di gestione di Cloud Temple, **direttamente inaccessibile al cliente**. Coordina tutti i job di backup e gestisce la cifratura.

- **Politiche standard**: le politiche di backup vengono applicate per impostazione predefinita a ogni tenant.
- **Politiche personalizzate**: il cliente può richiedere frequenze o periodi di conservazione specifici tramite un ticket di supporto nella console di Cloud Temple.

#### Storage S3 remoto

I backup vengono inviati allo [Storage Oggetti qualificato SecNumCloud](../storage/oss) di Cloud Temple, con replica Multi-AZ per garantire la resilienza in caso di perdita di un intero sito fisico.

---

### Meccanismo di backup: Backup Incrementale

Il servizio utilizza una modalità di backup **incrementale**. Questa modalità punta a un **Backup Repository** (lo storage S3 remoto) e non esporta mai un backup completo dopo il primo: vengono trasferiti solo i **blocchi di dati modificati** a ogni ciclo.

:::info[Backup incrementale vs Replica]
Il **backup incrementale** punta a un repository S3 remoto ed è ottimizzato per la **protezione a lungo termine**. Non deve essere confuso con la **replica** (Disaster Recovery a caldo) che punta a un Storage Repository locale — questa modalità è coperta dalla funzionalità di [replica delle macchine virtuali](#replica-delle-macchine-virtuali).
:::

#### Ciclo di vita tecnico di un backup incrementale

**1. Creazione dello snapshot locale (Sorgente)**

All'avvio del job, l'orchestratore richiede all'ipervisore di creare uno snapshot della VM. Questo snapshot serve come punto di confronto per calcolare il delta rispetto allo snapshot di riferimento precedente.

**2. Esportazione differenziale tramite Changed Block Tracking (CBT)**

L'orchestratore confronta il nuovo snapshot con lo snapshot di riferimento precedente usando i metadati CBT. Vengono estratti solo i blocchi di dati cambiati dall'ultimo backup.

**3. Cifratura e trasferimento verso S3**

I blocchi modificati vengono **cifrati al volo dall'orchestratore** e poi inviati tramite HTTPS/TLS 1.3 al bucket S3 remoto.

**4. Rotazione degli snapshot (Coalesce)**

Una volta validato il trasferimento, il vecchio snapshot di riferimento viene eliminato e il nuovo snapshot diventa il riferimento per il ciclo successivo. L'ipervisore avvia quindi un processo di **coalesce** (fusione).

:::warning[Impatto I/O del Coalesce]
L'operazione di coalesce è **intensiva in I/O** sullo storage di produzione. Viene attivata automaticamente dopo ogni backup riuscito. Si raccomanda di pianificare le finestre di backup durante i periodi di basso carico applicativo.
:::

**5. Gestione della conservazione su S3 (Merge) e Key Backup Interval**

Sullo storage S3, l'orchestratore gestisce la rotazione dei backup fondendo i vecchi delta. Un backup completo viene **forzato periodicamente** (tipicamente ogni 20 incrementi — *Key Backup Interval*).

---

### Impatto sul dimensionamento dello storage di produzione

:::warning[Punto di attenzione critico — Storage a blocchi (Thick provisioning)]
L'offerta OpenIaaS si basa su storage a blocchi ad alte prestazioni (Fibre Channel / LVM). Gli snapshot vengono provisionati in modalità **Thick**: ogni snapshot consuma sul Storage Repository (SR) la **dimensione nominale completa del disco della VM**, non solo il delta reale.

**Esempio di consumo per una VM con un disco da 50 GB:**

| Elemento | Consumo sul SR |
|---|---|
| Disco VM attivo | 50 GB |
| Snapshot di riferimento permanente | 50 GB |
| Snapshot temporaneo durante l'esportazione | 50 GB |
| **Totale richiesto durante la finestra di backup** | **fino a 150 GB** |

**Regola di dimensionamento raccomandata**: prevedere **almeno il 50% di spazio libero** sullo storage di produzione.
:::

---

### Sicurezza e cifratura dei backup

#### Cifratura in transito

Tutte le comunicazioni tra l'orchestratore di backup e lo storage S3 sono cifrate tramite **HTTPS / TLS 1.3**.

#### Cifratura a riposo e gestione delle chiavi

| Parametro | Valore |
|---|---|
| **Algoritmo** | AES-256 o ChaCha20-Poly1305 |
| **Generazione della chiave** | Automatica al momento del deployment dell'orchestratore di backup |
| **Archiviazione della chiave** | Vault centralizzato di Cloud Temple (mai esposto nell'interfaccia cliente) |
| **Resilienza** | In caso di perdita dell'orchestratore, la chiave viene reiniettata dal Vault |

#### Isolamento di rete (architettura SecNumCloud)

- **Separazione fisica**: le reti *Cliente*, *Amministrazione* e *Backup* si basano su backbone fisici distinti e contesti di routing (VRF) separati.
- **Impossibilità di infezione laterale**: una VM compromessa non può raggiungere lo storage S3 né l'orchestratore di backup.

#### Amministrazione sicura

| Controllo | Misura |
|---|---|
| **Bastion di accesso** | Passaggio obbligatorio attraverso un bastion di amministrazione interno protetto (Ubuntu Hardened) |
| **Postazione di lavoro** | Accesso solo da laptop di amministrazione dedicati e protetti |
| **Autenticazione** | MFA obbligatorio tramite una directory LDAP di amministrazione dedicata |

---

### Monitoraggio e audit

- **Log di backup**: visibili dal cliente direttamente nella Console Cloud Temple — stato (successo/errore), volumetria, timestamp.
- **Log di accesso degli amministratori**: gli accessi all'infrastruttura di backup vengono registrati e **verificati mensilmente**.
- **Test di intrusione (PASSI)**: pentest regolari da fornitori qualificati PASSI.
- **Sicurezza fisica**: tutti i dispositivi ospitati nelle zone SecNumCloud (gabbie fisiche dedicate con controllo accessi biometrico).

---

### Compatibilità e casi particolari

:::warning[VM con scritture su disco continue]
Alcune macchine virtuali non sono compatibili con questa tecnologia di backup quando i loro **carichi di scrittura su disco sono costanti** (database attivi, log transazionali, ecc.). L'ipervisore non riesce a finalizzare lo snapshot senza congelare la VM, il che può durare diverse ore.

Per questi carichi di lavoro, si raccomanda di **completare o sostituire il backup dell'ipervisore con un backup applicativo**: dump del database (pg_dump, mysqldump…), backup tramite agente o esportazione nativa dell'applicazione.
:::

---

### Creazione di una politica di backup

La creazione di una politica di backup è un'operazione di amministrazione eseguita **esclusivamente tramite una richiesta di supporto**, accessibile tramite l'icona del salvagente in alto a destra nell'interfaccia.

La richiesta deve specificare:

- Il nome della propria Organizzazione
- I dati di contatto (email e telefono) per completare la configurazione
- Il nome del tenant
- Il nome della politica di backup
- Caratteristiche desiderate: frequenza, conservazione (x giorni, y settimane, z mesi…)

#### Vincoli di pianificazione

| Vincolo | Valore |
|---|---|
| **Intervallo minimo tra due esecuzioni** | 24 ore |
| **Conservazione massima** | 24 mesi |
| **Esecuzioni simultanee per politica** | 1 alla volta |

:::warning[Una politica può essere eseguita solo una volta alla volta]
Ogni politica di backup è a **istanza singola**: può essere attiva una sola esecuzione alla volta.

**Conseguenza pratica**: se si aggiungono molte macchine virtuali a una politica esistente e il backup del giorno precedente non è ancora terminato quando scatta il trigger pianificato successivo, **il nuovo ciclo non partirà** — verrà saltato fino alla prossima occorrenza.

Per evitarlo: controllare i tempi di esecuzione nei log della Console, regolare la frequenza o la dimensione della politica, oppure distribuire le VM su più politiche con orari sfalsati.
:::

:::info[Conservazione a lungo termine — disponibilità futura]
**La conservazione massima è attualmente di 24 mesi.** Una conservazione a lungo termine (fino a 10 anni) sarà integrata con il lancio del nostro prodotto **Glacier**, previsto per il **primo trimestre 2027**, come sottoscrizione complementare.

Per durate di conservazione così lunghe, raccomandiamo di salvare **esclusivamente file piatti** e **dump di database**. Il ripristino di un server completo dopo 10 anni comporta rischi significativi di obsolescenza.

**Alternativa disponibile ora**: il servizio di **backup tramite agente**, disponibile come sottoscrizione complementare. Contattate il supporto per ulteriori informazioni.
:::

## Macchine virtuali

### Gestione delle risorse vCPU

Le modifiche alle risorse vCPU vengono effettuate a freddo (macchina spenta). La piattaforma supporta fino a 254 vCPU per macchina virtuale (limite teorico), con test conclusivi effettuati su VM Linux dotate di 128 vCPU.

È importante notare che il supporto del sistema operativo ospite rappresenta un fattore determinante nell'allocazione delle risorse. Un'allocazione che supera i limiti supportati dal sistema operativo può causare problemi significativi di prestazioni.

### Gestione delle risorse di memoria

Le modifiche alla memoria vengono effettuate anche a freddo. I limiti sono i seguenti:

- 1,5 TiB con supporto per i snapshot della memoria
- 8 TiB senza supporto per i snapshot della memoria
- 16 TiB (limite teorico senza supporto di sicurezza, meno la RAM allocata a Xen e al dominio di controllo)

La memoria effettivamente utilizzabile può essere limitata dal sistema operativo ospite. Superare i limiti supportati dall'OS ospite può causare una riduzione delle prestazioni.

### Gestione dei dischi

- La dimensione massima di un disco è di 2 To
- I dischi utilizzano il formato VHD standard
- Il numero massimo di dischi virtuali per macchina virtuale, inclusi i lettori CD-ROM, è di 24

Non è possibile ridimensionare i dischi una volta creati. Per aumentare la capacità di archiviazione, è necessario creare un nuovo disco.

### Strumenti per le macchine virtuali

Questi strumenti sono utilizzati per garantire un funzionamento ottimale delle macchine virtuali. Quando si desidera eseguire un'azione e uno di questi strumenti è necessario, un messaggio verrà visualizzato sulla console Cloud Temple.

Per installare questi strumenti, è possibile consultare i siti ufficiali di Xen Server per ottenere una procedura precisa in base al proprio sistema operativo.

#### Management Agent

Il Management Agent è un componente installato in ogni macchina virtuale. Permet all'ipervisore di gestire meglio la macchina grazie all'accesso a maggiori informazioni e consente di eseguire alcune azioni in modo più pulito.

#### PV Drivers (Drivers di paravirtualizzazione)

I driver PV sono driver installati nella macchina virtuale per migliorarne le prestazioni.  
Senza questi driver, la macchina funziona, ma in modo più lento. Inoltre, consentono alcune operazioni avanzate.  
I driver PV sono installati nativamente nella maggior parte dei kernel Linux attuali.

#### Tools  

I Tools sono un insieme di componenti software che migliorano l'integrazione della macchina virtuale con l'infrastruttura di virtualizzazione.

## Catalogs

The catalog allows you to manage three essential types of items:

- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can review crucial information such as location, number of disks, and number of network adapters.

When the number of virtual disks is shown as 0, this indicates a configuration template without a preinstalled operating system, allowing you to deploy your own customized environment.

## Replicazione delle macchine virtuali

La __replicazione delle macchine virtuali__ di Cloud Temple garantisce la protezione e la continuità dei tuoi dati critici grazie a una copia automatica dei tuoi ambienti verso un'area di disponibilità diversa. Questa funzionalità, integrata nativamente nell'offerta IaaS Open Source, soddisfa i requisiti più rigorosi in termini di continuità operativa e ripresa da disastro.

### Protezione automatizzata e sicura

La replica Cloud Temple si basa su un'infrastruttura __qualificata SecNumCloud__, garantendo:

- __Replica asincrona__: Copia continua delle tue macchine virtuali senza impatto sulle prestazioni di produzione  
- __Separazione geografica__: Archiviazione dei replica in un'area di disponibilità diversa da quella di origine  
- __Automazione completa__: Processo completamente automatizzato tramite la [Console Cloud Temple](../console/console.md)  
- __Conformità normativa__: Rispetto dei requisiti di backup e continuità operativa

### Vantaggi della replica

| Vantaggio               | Descrizione                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuità operativa    | Protezione dei tuoi servizi critici in caso di incidente grave sul sito principale.                                                          |
| Protezione geografica   | Replica verso un'area di disponibilità diversa, protetta da eventi localizzati.                                                             |
| Flessibilità temporale  | Scelta dell'intervallo di replica in base alle tue esigenze: da 1 minuto a 24 ore.                                                            |
| Semplificazione della gestione | Configurazione e monitoraggio completamente integrati nella Console Cloud Temple.                                                                |
| Conformità SecNumCloud  | Infrastruttura qualificata che garantisce il massimo livello di sicurezza per i tuoi dati sensibili.                                             |

### Configurazione della replica

#### Politiche di replica

La creazione di una politica di replica definisce i parametri di protezione delle tue macchine virtuali:

- __Destinazione__: selezione dell'archiviazione di destinazione nella zona di disponibilità di replica
- __Frequenza__: intervallo di replica adatto ai tuoi requisiti di recupero (RPO)
- __Ritenzione__: numero di punti di recupero conservati

#### Intervalli disponibili

| Intervallo              | Utilizzo consigliato                           | RPO (massima perdita di dati) |
|-------------------------|--------------------------------------------|-----------------------------|
| __1 a 59 minuti__      | Applicazioni critiche in tempo reale         | < 1 ora                   |
| __1 a 24 ore__       | Applicazioni aziendali e ambienti standard | < 24 ore               |

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

#### Replica View

The replica table allows you to visualize:

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
- Assegnare nomi chiari alle politiche per facilitarne la gestione
- Verificare regolarmente lo stato dei replica dalla console
- Documentare la strategia di replica per i team

__Importante nota:__

*La replica non sostituisce una strategia completa di backup. Rappresenta un elemento essenziale per garantire la continuità operativa in caso di incidente grave sul sito principale.*

## Alta disponibilità

L'alta disponibilità consente di garantire la continuità del servizio delle macchine virtuali (VM) in caso di guasto di un host fisico all'interno di un pool OpenIaaS.  
Con l'alta disponibilità (HA), ogni host del pool invia regolarmente segnali di stato ai suoi peer tramite lo storage condiviso (Block Storage Heartbeat). In caso di assenza prolungata di risposta, l'host viene considerato guasto.

Un Block Storage designato come heartbeat significa che verrà utilizzato come base per autenticare gli host che non risponderanno più.

Per configurare correttamente l'alta disponibilità in un pool OpenIaaS, è indispensabile disporre di __almeno due host__ connessi.

Ogni VM deve essere configurata con un livello di priorità di riavvio in caso di alta disponibilità:

#### Disabled

 High availability is not configured. In the event of host failure, the virtual machine will not be restarted.

#### Restart  

In case of host failure, the virtual machine will be automatically restarted as soon as resources become available in the pool. Virtual machines configured in "restart" mode are prioritized over those configured in "best-effort" mode.

#### Best-effort  

In caso di guasto dell'host, la macchina virtuale verrà riavviata automaticamente solo se delle risorse rimangono disponibili dopo il trattamento di tutte le macchine virtuali configurate in modalità "restart". La modalità "Best-effort" effettua un solo tentativo, quindi, se le risorse sono insufficienti, la macchina virtuale non verrà riavviata.
