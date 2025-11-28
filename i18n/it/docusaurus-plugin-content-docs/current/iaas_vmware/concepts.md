---
title: Concetti
---

L'offerta __IaaS (Infrastructure come servizio)__ di Cloud Temple è progettata per soddisfare i bisogni critici di continuità operativa e ripresa d'attività, con un'enfasi particolare sui settori esigenti come l'industria, la banca e l'assicurazione. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce un'alta disponibilità e un'ottimizzazione delle prestazioni per i tuoi carichi di lavoro critici.

## Una piattaforma tecnologica di fiducia

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: __CISCO UCS__.
- Archiviazione: __IBM Spectrum Virtualize__, __IBM FlashSystem__ per l'archiviazione a blocchi.
- Rete: __JUNIPER__.
- Virtualizzazione: __VMware__, che offre una base affidabile ed esauriente per gestire i vostri ambienti cloud.
- Backup: __IBM Spectrum Protect Plus__, per l'orchestrazione e l'archiviazione dei backup.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, che garantisce un'ampia compatibilità con i principali produttori software.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- __Maximum predictability__: You have full control over virtualization rates, IOPS pressure on storage, and benefit from clear, consumption-based monthly billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Principali funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Archiviazione su richiesta (disponibili diverse classi).
- Risorse di rete (Internet, reti private).
- Backup incrociati con conservazione configurabile.
- Replica asincrona per l'archiviazione o le macchine virtuali.
- Gestione tramite la [Console](../console/console.md) oppure in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio           | Descrizione                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Sicurezza digitale  | Archiviazione dei dati in Francia e conformità al GDPR.                                                                                          |
| Sicurezza           | Piattaforma altamente sicura, certificata __SecNumCloud__, __HDS__ (Archiviazione dei Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__. |  
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, incluse le finestre di manutenzione.                                        |
| Resilienza          | Implementazione di piani di continuità o ripresa dell'attività in base alle esigenze.                                                               |
| Automazione         | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                        |
| Su richiesta        | Risorse disponibili su richiesta.                                                                                                          |

## Regioni e zone di disponibilità

Il prodotto IaaS VMware viene distribuito in una zona di disponibilità.  
Una [zona di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Questo tipo di distribuzione consente di scegliere la posizione dei cluster e di distribuirli su diverse zone di disponibilità (AZ).  
Offre una migliore distribuzione del carico, massimizza la ridondanza e semplifica la messa in atto di un piano di ripresa d'attività (DRP) in caso di incidente.

## Calcolo

Le lame fornite da Cloud Temple sono di tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Sono completamente gestite da Cloud Temple (firmware, versione del sistema operativo, ecc.) tramite la console Cloud Temple.

Sono disponibili diverse categorie di lame di calcolo nel catalogo per supportare i tuoi carichi di lavoro (virtualizzazione, containerizzazione, ecc.). Queste presentano caratteristiche e prestazioni differenti per rispondere al meglio alle tue esigenze. Il catalogo delle lame di calcolo viene aggiornato regolarmente.

Nel contesto di utilizzo con un'offerta di virtualizzazione, un cluster di hypervisor è composto esclusivamente da lame di calcolo dello stesso tipo (non è possibile combinare lame di tipi diversi all'interno dello stesso cluster).

| Riferimento             | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          | SKU per l'offerta VMware         |
| ----------------------- | ------------ | ----------------------------------------- | ----------------------- | -------------------- | -------------------- | ------------------------------- |
| Lame ECO v3             | 384 GB       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread          | 2 x 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Lame STANDARD v3        | 384 GB       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread          | 2 x 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Lame ADVANCE v3         | 768 GB       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread          | 2 x 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Lame PERFORMANCE 1 v3   | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread          | 2 x 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Lame PERFORMANCE 2 v3   | 768 GB       | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread          | 2 x 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Lame PERFORMANCE 3 v3   | 1536 GB      | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread         | 2 x 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Lame PERFORMANCE 4 v3   | 512 GB       | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread          | 2 x 25 Gbit/s        | 2 x NVIDIA L40S 48 GB | csp:fr1:iaas:vmware:perf4:v3    |

__Note__:

- __(1)__ La quantità di memoria fornita è quella fisicamente disponibile sulle lame. Non è possibile modificare la quantità fisica di memoria di una lama.

- __(2)__ Frequenza base minima / frequenza turbo, espressa in GHz. Per impostazione predefinita, i processori sono configurati per prestazioni massime a livello di BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e all'archiviazione a blocchi, poiché la piattaforma Cisco è convergente.

- __(4)__ L'offerta di GPU disponibile evolve costantemente. Al 1° maggio 2024, l'offerta si basa sui GPU NVIDIA LOVELACE L40S. Per impostazione predefinita, la lama PERF4 viene fornita con 2 schede L40S da 48 GB di RAM. Contatta il supporto per ulteriori dettagli se necessario.

La disponibilità dell'offerta di calcolo è del 99,99%, calcolata mensilmente, inclusa la finestra di manutenzione. L'eligibilità in caso di mancato rispetto del SLA è soggetta alla creazione di un ticket incidente. È inoltre necessario disporre di almeno due host per cluster e attivare la funzionalità __High Availability__ (HA).  
Questa funzionalità permette al tuo ambiente di riavviare automaticamente le macchine virtuali sul secondo hypervisor. Nel caso in cui una zona di disponibilità contenga un solo hypervisor, il riavvio automatico non è possibile.

## Rete

Il servizio di rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete basata sulla tecnologia VPLS, offrendo una segmentazione flessibile e performante per soddisfare i bisogni dei clienti in termini di connettività e isolamento di rete.

### VLANs di livello 2

I VLAN messi a disposizione nell'offerta IaaS sono di tipo __livello 2__, offrendo un'isolamento di rete completo e una configurazione adattabile in base alle esigenze.

#### Concetti principali

- __Condivisione tra cluster e zone di disponibilità (AZ)__ :
  - I VLAN possono essere condivisi tra diverse AZ e diversi cluster appartenenti allo stesso tenant.
- __Propagazione tra tenant__ :
  - I VLAN possono essere propagati tra più tenant appartenenti alla stessa organizzazione, facilitando le comunicazioni interne.

### Prestazioni di rete

L'infrastruttura di rete garantisce una latenza ridotta per prestazioni ottimali:

- __Latenza intra-AZ__ : Inferiore a __3 ms__.
- __Latenza inter-AZ__ : Inferiore a __5 ms__.

### Punti chiave

1. __Flessibilità__ : I VLAN possono essere configurati per adattarsi a ambienti multi-cluster e multi-tenant.
2. __Alta prestazione__ : Una latenza minima garantisce una comunicazione rapida ed efficiente tra le zone di disponibilità.
3. __Isolamento e sicurezza__ : I VLAN a livello 2 offrono una segmentazione di rete rigorosa per proteggere dati e flussi.

## Bloccaggio

Cloud Temple offre diverse classi di archiviazione basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/)  
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ consente di fornire il livello di prestazioni richiesto per gli ambienti dei nostri clienti grazie alla grande quantità di cache in memoria integrata nei controller e alla possibilità di distribuire l'intero carico di IOPS di un server su diversi SAN.

Viene inoltre utilizzata per abilitare la replica dei LUN di archiviazione in modalità blocco tra le zone di disponibilità o semplificare gli interventi sulle baie di archiviazione.

L'archiviazione è principalmente basata su unità FLASH NVMe dedicate a carichi di lavoro professionali.  
I dischi vengono utilizzati dalle baie di archiviazione in modalità [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

### Sicurezza e Crittografia del Storage a Blocchi

Per garantire la riservatezza dei tuoi dati in stato di riposo, l'intera infrastruttura di storage a blocchi è dotata di un robusto crittografia hardware.

-   **Tipo di Crittografia**: I dati vengono crittografati direttamente sui dischi (`Data At Rest`) utilizzando l'algoritmo **XTS-AES 256**.
-   **Conformità**: Questo metodo di crittografia è conforme allo standard **FIPS 140-2**, garantendo un elevato livello di sicurezza certificato.
-   **Funzionamento**: La crittografia viene applicata al momento della scrittura dei dati sul supporto di archiviazione fisico.

:::warning Osservazione sulla replica
È importante sottolineare che questa crittografia protegge i dati memorizzati sui dischi. Non è attiva "on-the-fly", il che significa che i dati non vengono crittografati durante le operazioni di replica dello storage tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita tramite canali di comunicazione dedicati e protetti.
:::

La classe di storage __'Mass Storage'__ offre dischi meccanici per esigenze di archiviazione in un contesto di efficienza economica. Sono disponibili diversi livelli di prestazioni:

| Riferimento                         | Unità | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essenziale - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archiviazione      | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *Le prestazioni effettive per una classe di storage sono legate al volume effettivamente ordinato, secondo la metrica "IOPS/To", intesa come "limite di IOPS per Tera allocato",*

> *Così, un volume da 0,5 To nella classe di prestazioni 'Standard' avrà un limite di IOPS fissato a 750 IOPS,*
> *Allo stesso modo, un volume da 10 To nella classe di prestazioni 'Ultra' avrà un limite di IOPS pari a 150.000 IOPS,*

- *Il limite di IOPS è applicato al volume, quindi alla nozione di Datastore in un ambiente VMware,*
- *La disponibilità dello storage è del 99,99% misurata mensilmente, inclusa la finestra di manutenzione,*
- *Non ci sono restrizioni o limiti su lettura o scrittura,*
- *Non c'è alcuna fatturazione basata sugli IOPS,*
- *Non c'è alcun impegno di prestazioni per la classe __'Mass Storage'__,*
- *La dimensione minima di una LUN di storage è di 500 Gio,*
- *Nel caso di utilizzo di un meccanismo di replica dello storage, le prestazioni devono essere identiche nelle due zone di disponibilità,*
- *Non viene implementato alcun meccanismo di ottimizzazione "intelligente" come compressione o deduplicazione: quando prenoti 10 Tio di storage, hai fisicamente 10 Tio di storage utilizzabile implementati sulle macchine IBM.*
- *Le LUN di storage sono dedicate all'ambiente cliente.*

### Utilizzo nell'ambito dell'offerta di calcolo VMware

Nel contesto dell'utilizzo dello storage in modalità blocco sotto forma di datastore nell'offerta di calcolo VMware di Cloud Temple, __è necessario tenere presente diverse considerazioni importanti__:

1. __File di swap (.VSWP) durante l'avvio delle macchine virtuali__: Quando una macchina virtuale viene avviata, crea un file .VSWP della dimensione della sua memoria sul disco. Di conseguenza, per poter avviare le tue macchine virtuali, devi sempre disporre in ogni datastore di uno spazio libero equivalente alla somma delle dimensioni della memoria delle tue macchine virtuali. Ad esempio, se il tuo datastore dispone di 1 Tio di storage blocco e desideri avviare 10 macchine virtuali da 64 GiB di memoria ciascuna, saranno necessari 640 GiB di spazio su disco. Senza tale spazio disponibile, l'avvio delle macchine virtuali sarà limitato dalla capacità disponibile per la creazione dei file di swap.

2. __Spazio libero per i snapshot di backup__: Il servizio di backup utilizza snapshot istantanei. Devi quindi sempre disporre di spazio libero sufficiente per consentire la creazione di uno snapshot durante il backup di una macchina virtuale. La dimensione dello snapshot dipende dall'entità delle scritture effettuate dalla macchina virtuale e dal tempo necessario per eseguire il backup. In generale, si raccomanda di mantenere almeno il 10% di spazio libero per questa operazione.

3. __Gestione dei dischi dinamici__: Fai attenzione all'utilizzo dei dischi dinamici. Se non controlli correttamente la loro crescita, la mancanza di spazio fisico può causare, nel migliore dei casi, un blocco (freeze) della macchina virtuale, o nel peggiore un arresto anomalo con corruzione dei dati. È fondamentale monitorare attentamente lo spazio disponibile sui tuoi datastores quando utilizzi questo tipo di disco.

Una gestione proattiva dello spazio su disco è essenziale per garantire il corretto funzionamento delle tue macchine virtuali e la affidabilità dei backup. Assicurati sempre di disporre dello spazio necessario per i file di swap, i snapshot e la crescita dei dischi dinamici.

## Backup Storage

Il storage dedicato al backup delle macchine virtuali viene automaticamente provisioning dalla piattaforma entro i limiti del quota ordinata.

| Riferimento              | Unità | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivio  | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |

### Replication dello storage in modalità blocco

#### Principi

Per consentire l'implementazione dei vostri piani di ripresa dell'attività, quando non è possibile mantenere la continuità operativa tramite meccanismi applicativi e la replica delle macchine virtuali non è adatta, Cloud Temple propone __meccanismi di replica del storage in modalità blocco tra le zone di disponibilità di una regione__.

Questi meccanismi di replica vengono applicati ai LUN di storage dei vostri ambienti, in aggiunta alle operazioni di backup. La scelta dell'utilizzo di un meccanismo di replica su un ambiente __dipende da numerosi fattori, tra cui la criticità, la quantità massima di dati accettabile da perdere o le prestazioni richieste dall'applicazione__.

Cloud Temple offre due tipi di meccanismi, implementati in una configurazione attivo/passivo:

- La replica __asincrona__ (o __'Global Mirror'__): *La funzione __'Global Mirror'__ fornisce un processo di copia asincrona. Quando un host scrive sul volume primario, la conferma del completamento dell'operazione di I/O viene ricevuta prima che l'operazione di scrittura sia completata sulla copia sul volume secondario. In caso di failover, l'applicazione deve recuperare e applicare tutte le aggiornamenti non confermati sul volume secondario. Se le operazioni di I/O sul volume primario vengono sospese per un breve periodo, il volume secondario può diventare una copia esatta del volume primario. Questa funzione è comparabile a un processo di backup continuo in cui gli ultimi aggiornamenti sono sempre in ritardo. Quando si utilizza Global Mirror per la ripresa da disastro, è necessario riflettere sul modo in cui gestire questi aggiornamenti mancanti.*

- La replica __sincrona__ (o __'Metro Mirror'__): *La funzione __'Metro Mirror'__ è un tipo di copia remota che crea una copia sincrona dei dati da un volume primario a un volume secondario. Con copie sincrone, gli host applicativi scrivono sul volume primario, ma non ricevono la conferma del completamento dell'operazione di scrittura finché i dati non sono stati scritti anche sul volume secondario. Ciò garantisce che entrambi i volumi contengano dati identici al termine dell'operazione di copia. Dopo il completamento dell'operazione di copia iniziale, la funzione Metro Mirror mantiene costantemente una copia completamente sincronizzata dei dati sorgente sul sito di destinazione. __A partire dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più in commercio.__*

Si definisce quindi un sito detto "attivo" o "principale" e un sito "passivo" o "standby".  
Il piano di ripresa dell'attività viene attivato in caso di disastro o nell'ambito di un test del piano.  
Il sito passivo assume quindi il controllo al posto del sito attivo.

#### Replica asincrona

Quando i carichi di lavoro richiedono tempi di ripresa operativa brevi e non è accettabile o appropriato utilizzare meccanismi di replica applicativa o di macchine virtuali, è possibile replicare una LUN di storage SAN tra due zone di disponibilità all'interno della stessa regione.

Questo servizio consente di ottenere un __RPO di 15 minuti__ e un __RTO inferiore a 4 ore__. Permette una ripresa molto più rapida rispetto all'implementazione di un ripristino da backup.

In un volume di storage in replica asincrona (__Global Mirror__), i controller di virtualizzazione SAN delle due zone di disponibilità collaborano per eseguire le operazioni di scrittura sui due siti. Il sito principale non attende l'acknowledgement di scrittura dal sito secondario.

Le fasi di un'operazione di scrittura sono le seguenti:

1. Un hypervisor desidera eseguire __un'operazione di scrittura su un volume Global-Mirror__: invia la richiesta al controller SAN della propria zona di disponibilità,
2. Il controller SAN locale richiede al controller SAN della zona remota di eseguire l'operazione di scrittura,
3. Il controller SAN locale non attende l'acknowledgement del SAN remoto e procede quindi con la scrittura localmente,
4. Invia l'__acknowledgement__ all'hypervisor che ha emesso la richiesta,
5. __Gli hypervisor del sito remoto non accedono direttamente alla LUN Global Mirror__: è necessaria una richiesta di servizio.

| SLA       | Descrizione                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 min | In caso di incidente nel datacenter principale, la quantità massima di dati persi corrisponde al massimo alle ultime 15 minuti di scrittura |
| RTO < 4 h  | In caso di incidente nel datacenter principale, la ripresa operativa è garantita entro 4 ore, in base alla complessità degli ambienti.          |

In caso di attivazione del PRA, l'équipe di Cloud Temple esegue un'operazione di presentazione della LUN __'Global Mirror'__ agli hypervisor remoti, in modo che possano accedere ai dati. La messa in opera di questa soluzione richiede quindi di aver riservato sul sito 'standby' le risorse di calcolo e di RAM necessarie per riprendere l'attività in caso di incidente.

L'uso di questa tecnologia richiede inoltre il raddoppio dello spazio disco: è necessario disporre esattamente dello stesso spazio sul sito remoto rispetto al sito locale.

L'uso di questo meccanismo può influire sulle prestazioni dell'applicazione fino al 10%. __Sono compatibili solo le classi di storage 500 IOPS/To, 1500 IOPS/To e 3000 IOPS/To.__

| Riferimento                          | Unità  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Replica Globale SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *Essendo un servizio asincrono, in caso di incidente è possibile che alcune operazioni di scrittura non siano state scritte sul sito remoto. Potrebbe quindi esserci un rischio di coerenza dei dati, mitigato nell'analisi dei rischi del piano di ripresa d'attività.*
- *La replica del storage in modalità blocco avviene in modo trasparente per le macchine virtuali e le applicazioni,*
- *Per questo motivo è importante privilegiare scenari di replica applicativa o, in alternativa, la replica di macchine virtuali,*
- *Il calcolo e la memoria sul sito di ripresa possono essere ridotti per ottimizzare i costi, se una situazione degradata è accettabile per l'attività aziendale durante l'attivazione del piano di ripresa d'attività.*

## Virtualizzazione VMware

L'offerta di virtualizzazione VMware Cloud Temple qualificata SecNumCloud si basa sulla tecnologia __VMware Vsphere__.

La piattaforma è gestita automaticamente da Cloud Temple (mantenimento delle condizioni di sicurezza, mantenimento in condizioni operative, ...).  
È pilotabile tramite l'interfaccia grafica della Console oppure tramite le API associate.

*__Nota__*: *Per ragioni di sicurezza legate alla qualifica SecNumCloud,  
__non è possibile per il committente accedere direttamente alla piattaforma di virtualizzazione VMware__ (nessun accesso diretto al vCenter, ad esempio).  
Infatti, la qualifica SecNumCloud impone __una totale segregazione__ tra le interfacce di pilotaggio degli asset tecnici e l'interfaccia del committente (la Console).*

- I prodotti implementati sono VMware ESXi, VMware Vcenter e VMware Replication.  
- *La rete dell'offerta di virtualizzazione non utilizza la tecnologia VMware NSX, ma è pilotata in modo hardware tramite la tecnologia Juniper e il protocollo VPLS.*  
- *Il storage non utilizza la tecnologia VMware vSan, ma esclusivamente SAN IBM in fiber channel 32G.*  
- *Non viene implementata alcuna forma di ottimizzazione nascosta (compressione, deduplicazione, ...).*

### Definizione di un cluster di blade di calcolo ('Cpool')

Il __'Cpool'__ è un raggruppamento di hypervisor VMware ESXi, noto anche come *'cluster ESX'*.

Gli host presenti in un __'Cpool'* appartengono tutti allo stesso tenant e alla stessa zona di disponibilità (AZ). Devono necessariamente avere la stessa classe:  
__non è possibile combinare modelli diversi di blade di calcolo all'interno dello stesso cluster__.

Poiché tutte le blade di calcolo vengono fornite con la quantità massima fisica di memoria, viene applicata un'limitazione software a livello del cluster per garantire che l'uso della RAM corrisponda alla RAM fatturata.

Per impostazione predefinita, ogni blade dispone di 128 GB di memoria abilitata all'interno del __'Cpool'*.

Un __'Cpool'* può contenere al massimo 32 hypervisor. Oltre tale limite, sarà necessario creare un secondo cluster.

Il storage può essere condiviso tra i __'Cpool'__.

### Memory Allocation for a 'Cpool'

Memory reservation is configurable per cluster. You can reduce or increase the amount of RAM to match your cluster-wide requirements.

__Be careful not to exceed an average memory usage of 85% per compute node__.
Indeed, VMware's technology uses a compression-based optimization method that can significantly impact the performance of your workloads and complicate diagnostics.
Similarly, excessive memory pressure on your compute nodes will force the hypervisor to offload part of its memory to disk to meet the needs of virtual machines.

This situation, known as __'Ballooning'__, severely impacts the performance of all virtual machines located on the affected datastore.
__Diagnosis becomes complex in this context__, as your monitoring tools will detect issues at the CPU level rather than at the memory or storage level.
Also keep in mind that the first action the hypervisor performs when starting a virtual machine is to create a __memory swap file (.vswap)__ on disk, with a size equal to the virtual machine's memory allocation. You must __account for this when sizing your storage__.

Each compute node comes with 128 GB of memory enabled at the __'Cpool'__ level, but physically has access to the full amount of allocatable memory.

For example, in a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation at activation of the _*'Cpool'*_ will be 3 x 128 GB = 384 GB of RAM.
You can extend it up to a maximum of 3 x 384 GB = 1152 GB of memory.

    Minimum memory for a 'Cpool' = number of hosts × 128 GB of memory  
    Maximum memory for a 'Cpool' = number of hosts × physical memory capacity of each compute node

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` regularly enriched and updated by our teams.  
To date, it includes dozens of `Templates` and images ready to be deployed on your virtual machines.

### Aggiornamento degli Hypervisor

Cloud Temple rilascia regolarmente nuovi aggiornamenti per gli hypervisor al fine di applicare i patch di sicurezza.  
Tuttavia, l'aggiornamento degli hypervisor rimane di tua responsabilità, poiché non abbiamo visibilità sulle tue esigenze aziendali.

Il processo di aggiornamento è completamente automatizzato. Per garantire la continuità del servizio, è richiesto un minimo di due hypervisor per cluster durante l'aggiornamento. Assicurati di disporre delle autorizzazioni necessarie per eseguire queste operazioni.

### Gestione dell'affinità delle macchine virtuali

Le __regole di affinità e anti-affinità__ consentono di controllare la posizione delle macchine virtuali sugli iperhost.
Possono essere utilizzate per gestire l'utilizzo delle risorse del tuo __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico tra i server oppure a isolare carichi di lavoro intensivi in termini di risorse.
In un __'Cpool'__ VMware, queste regole vengono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion permette di spostare macchine virtuali da un host all'altro senza interruzioni del servizio.

Puoi configurare tramite la gestione delle regole:

- __Regole di affinità__: queste regole garantiscono che alcune macchine virtuali vengano eseguite sullo stesso host fisico.
  Vengono utilizzate per migliorare le prestazioni mantenendo insieme le macchine virtuali che comunicano frequentemente,
  riducendo così la latenza di rete. Le regole di affinità sono utili in scenari in cui le prestazioni sono critiche,
  come nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di anti-affinità__: al contrario, queste regole garantiscono che alcune macchine virtuali non vengano eseguite
  sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, ad esempio,
  per evitare che tutte le macchine critiche vengano colpite in caso di guasto di un singolo server.
  Le regole di anti-affinità sono fondamentali per le applicazioni che richiedono un'alta disponibilità,
  come negli ambienti di produzione dove la tolleranza ai guasti è una priorità.
  Ad esempio, non desideri che i tuoi due server Active Directory si trovino sullo stesso iperhost.

Durante la creazione di una regola, definisci il tipo di regola (affinità / anti-affinità), il nome della regola,
lo stato di attivazione (__'Statut'__) e le macchine virtuali coinvolte nel cluster di iperhost.

*Nota: le regole di affinità/anti-affinità proposte nella console sono regole che riguardano le macchine virtuali tra loro (non regole tra iperhost e macchine virtuali).*

### Replicazione asincrona delle macchine virtuali nell'ambiente VMware

La replicazione asincrona delle macchine virtuali è un meccanismo che consiste nel trasferire, a intervalli regolari, le operazioni di scrittura dallo hypervisor sorgente al sito di standby.

Dopo una copia iniziale calda di tutto il storage attivo sul sito di standby, vengono trasferite solo le scritture a intervalli regolari sul sito in standby.  
L'intervallo dipende dal volume di scrittura (da ogni ora a ogni 24 ore).

La replicazione delle macchine virtuali si basa sul meccanismo di snapshot istantanei dello hypervisor. A questo titolo,  
questa soluzione presenta gli stessi inconvenienti, in particolare la sensibilità al volume di scrittura della macchina virtuale,  
dato che il processo di creazione dello snapshot è un meccanismo ricorsivo per la chiusura dello snapshot.

Un esempio tipico di macchina che non supporta il meccanismo di replicazione delle macchine virtuali è un  
server FTP che riceve flussi in tempo reale da telecamere di sorveglianza. __La macchina è costantemente in scrittura e non sarà  
in grado di chiudere uno snapshot senza sospendere il sistema operativo per un periodo significativo  
(alcune decine di minuti)__. Se lo hypervisor non riesce a chiudere lo snapshot, eseguirà esattamente questo comportamento,  
senza possibilità di intervento, a meno di corrompere la macchina virtuale.

| SLA             | Descrizione                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO da 1H a 24H | In caso di incidente nel datacenter principale, la quantità massima di dati persi corrisponde a quelli dell'ultimo trasferimento delle scritture sul sito di standby. |
| RTO < 15 min    | Operazione di avvio della macchina virtuale arrestata sul sito remoto                                                                                |

In caso di necessità, oppure in caso di guasto su una macchina del sito principale, la macchina specchio sul sito di standby viene attivata.  
Il ripristino dell'attività richiede che sul sito di standby sia stato riservato calcolo e RAM in standby. È  
necessario disporre dello stesso spazio di storage sul sito passivo rispetto al sito attivo.

| Riferimento                         | Unità | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : Il calcolo del RPO minimo deve essere definito in base al tasso di modifica sulla macchina virtuale.*

## Backup delle macchine virtuali

Cloud Temple offre un'__architettura nativa e non rimovibile per il backup incrociato__ (obbligatoria per la certificazione secnumcloud francese).

I backup vengono archiviati in un'area di disponibilità diversa e in un datacenter fisico diverso da quello che ospita la macchina virtuale. Essi sono crittografati tramite un algoritmo a chiave simmetrica AES a 256 bit (modalità cipher `xts-plain64`) per garantire la riservatezza dei dati.

Questo permette di proteggersi in caso di guasto grave nel datacenter di produzione e di ripristinare su un datacenter secondario (ad esempio, in caso di incendio).

Questa soluzione include:

- Backup remoto in tempo reale di tutti i dischi,
- Presentazione e avvio istantaneo di una macchina virtuale dall'infrastruttura di storage di massa e ricarico in tempo reale sui SAN di produzione,
- Ripristino parziale di file dal backup,
- Una retention limitata esclusivamente dall'allocazione di spazio di storage di massa.

L'infrastruttura di backup si basa sulla soluzione *IBM Spectrum Protect Plus*, una soluzione senza agente, facile da usare, che permette l'automazione dei processi di backup oltre a un'ottimizzazione dello spazio di storage di massa.

Le velocità di backup e ripristino dipendono dal tasso di cambiamento negli ambienti. La politica di backup è configurabile tramite [la Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

*__Nota:__*

*__Alcune macchine virtuali non sono compatibili con questa tecnologia di backup__, che utilizza i meccanismi di snapshot istantanei dell'ipervisore. Si tratta tipicamente di macchine con carichi di scrittura su disco costanti. Non è possibile per l'ipervisore chiudere lo snapshot istantaneo, il che obbliga a congelare la macchina virtuale per poter completare l'operazione di chiusura. Questo congelamento può durare diverse ore e non è interrompibile.*

*La soluzione consiste quindi nell'escludere il disco soggetto a scritture continue e nel salvare i dati tramite un'altra metodologia.*

| Riferimento                                               | Unità | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| SAUVEGARDE - Accesso al servizio IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1 |

#### Create a backup policy

To create a new backup policy, you must submit a request to support. Support is accessible via the buoy icon in the top-right corner of the window.

Creating a new backup policy is done through a __service request__ specifying:

    Your Organization's name
    A contact name, email address, and phone number to finalize the configuration
    The tenant name
    The backup policy name
    The retention characteristics (x days, y weeks, z months, ...)

## Advanced Data Protection (HSM/KMS)

Cloud Temple offers a __virtual machine advanced encryption solution__ based on Hardware Security Modules (HSM) and a Key Management Service (KMS). This feature enhances the protection of sensitive data through centralized and secure key management, seamlessly integrated into the SecNumCloud environment.

### Architettura tecnica

La soluzione si basa su un'infrastruttura di sicurezza robusta composta da:

- __HSM (Hardware Security Module)__ : moduli __Thales Luna S790__ certificati __FIPS 140-3 livello 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ per la gestione centralizzata delle chiavi
- __Integrazione VMware__ : comunicazione tramite il protocollo __KMIP__ (Key Management Interoperability Protocol)

#### High Availability Deployment

The HSM infrastructure is deployed across __three availability zones__ in the FR1 region:

- PAR7S
- TH3S
- AZ07

This distribution ensures maximum __high availability__ and __resilience__ of the encryption service.

### Funzionamento e gerarchia delle chiavi

Il sistema utilizza una __gerarchia di chiavi crittografiche__ per garantire la sicurezza dei dati:

| Livello | Tipo di chiave | Descrizione | Posizione |
|--------|----------------|-------------|-----------|
| 1 | __Root of Trust (RoT)__ | Chiave principale gestita da KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Chiave di dominio per cliente (isolamento multi-tenant) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Chiave di cifratura per VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Chiave di dati per VM | VMware ESXi |

#### Processo di crittografia

1. __Generazione__: VMware ESXi genera una DEK unica per ogni macchina virtuale  
2. __Protezione__: La DEK viene crittografata dalla KEK archiviata in CipherTrust Manager  
3. __Sicurezza__: La KEK è a sua volta protetta dalla gerarchia delle chiavi HSM  
4. __Archiviazione__: La DEK crittografata viene archiviata insieme ai file di configurazione della VM

### Sicurezza e conformità

#### Certificazioni

- __FIPS 140-3 livello 3__ : Certificazione di livello più elevato per i HSM
- __Common Criteria EAL4+__ : Valutazione di sicurezza avanzata
- __SecNumCloud__ : Qualifica ANSSI integrata nell'ambiente Cloud Temple

#### Multi-tenant isolation

- __Cryptographic separation__: Each client has an isolated KMS domain
- __Dedicated keys__: A specific Domain Key per client
- __Audit and traceability__: Full logging of actions per domain

### Attivazione e utilizzo

Il cifratura delle macchine virtuali può essere attivata __con un solo clic__ dalla [Console](../console/console.md).

Per una procedura dettagliata con schermate, consulta il [tutorial sul cifratura delle macchine virtuali](tutorials/vm_encryption.md).

#### Prerequisiti

- __Fornitore di chiave configurato__: un fornitore HSM/KMS deve essere abilitato sulla vStack
- __Macchina virtuale spenta__: la VM deve essere arrestata prima del cifratura
- __Nessuna replica attiva__: la VM non deve essere in replica (incompatibile con Global Mirror)
- __Nessun snapshot__: non deve esserci alcun snapshot presente
- __Sottoscrizione al servizio__: è necessaria la sottoscrizione al servizio di protezione avanzata

*__Nota__: Per ulteriori dettagli sui prerequisiti e sulla procedura completa, fare riferimento alla [guida al cifratura delle VM](tutorials/vm_encryption.md).*

### Limitazioni e considerazioni

#### Compatibilità

- __Global Mirror__ : Le macchine virtuali crittografate non sono __compatibili__ con la replica Global Mirror
- __Ripristino__ : I backup delle VM crittografate mantengono la loro protezione crittografica
- __Esportazione__ : L'esportazione delle VM crittografate richiede procedure specifiche

#### Prestazioni

- __Impatto minimo__: Il crittografia hardware garantisce prestazioni ottimali
- __Trasparenza__: Nessun impatto sul funzionamento delle applicazioni

### Use cases consigliati

Questa soluzione di protezione avanzata è particolarmente adatta per:

- __Dati sensibili__: informazioni personali, dati finanziari, segreti industriali  
- __Conformità normativa__: requisiti RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS  
- __Settori critici__: banche, assicurazioni, sanità, difesa  
- __Sovranità digitale__: protezione contro accessi non autorizzati, anche in caso di compromissione  

| Riferimento | Unità | SKU |
|-------------|-------|-----|
| PROTEZIONE AVANZATA - Crittografia VM tramite HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Nota__ :*

- *Il servizio richiede un abbonamento specifico e non è incluso nell'offerta IaaS standard*  
- *La gestione delle chiavi rimane interamente sotto il controllo di Cloud Temple nell'ambiente SecNumCloud*  
- *Le chiavi di crittografia non lasciano mai l'infrastruttura francese e sovrana*