---
title: Concetti
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per rispondere alle esigenze critiche di continuità e ripresa dell'attività, con un'attenzione particolare ai settori esigenti come l'industria, il settore bancario e quello assicurativo. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce una disponibilità massima e prestazioni ottimali per i vostri carichi di lavoro critici.

## Una piattaforma tecnologica di fiducia

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale :

- Calcolo : __CISCO UCS__.
- Archiviazione : __IBM Spectrum Virtualize__, __IBM FlashSystem__ per l'archiviazione a blocchi.
- Rete : __JUNIPER__.
- Virtualizzazione : __VMware__, che offre una base affidabile e collaudata per gestire i tuoi ambienti cloud.
- Backup: __IBM Spectrum Protect Plus__, per l'orchestrazione e l'archiviazione dei backup.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, che garantisce una compatibilità estesa con i principali fornitori di software.

## Un'infrastruttura dedicata e automatizzata

Sebbene completamente automatizzata grazie a API e un provider Terraform, il prodotto IaaS di Cloud Temple offre un'infrastruttura unica :

- __Risorse dedicate__ : I blade di calcolo, i volumi di archiviazione e gli stack software (virtualisation, sauvegarde, firewalling, etc.) non sono mai condivisi tra i clienti.
- __Massima prevedibilité__ : Controlli i tassi di virtualizzazione, il carico di IOPS sull'archiviazione e benefici di una fatturazione chiara, basata sul consumo mensile.

La piattaforma è certificata __SecNumCloud__ da [ANSSI](https://www.ssi.gouv.fr/), garantendo un elevato livello di automazione e sicurezza.

## Principali funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Storage su richiesta (plusieurs classes disponibles).
- Risorse di rete (Internet, réseaux privés).
- Backup incrociati con retention configurabile.
- Replicazione asincrona per lo storage o le macchine virtuali.
- Gestione tramite la [Console](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio            | Descrizione                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale | Hosting dei dati in Francia e conformità al GDPR.                                                                                          |
| Sicurezza            | Piattaforma altamente sicura, certificata __SecNumCloud__, __HDS__ (Hosting dei Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__. |  
| Alta disponibilità | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, finestre di manutenzione incluse.                                        |
| Resilienza          | Implementazione di piani di continuità operativa o di ripristino di attività in base alle esigenze.                                                               |
| Automazione         | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                        |
| On demand           | Risorse disponibili su richiesta.                                                                                                          |

## Regioni e zone di disponibilità

Il prodotto IaaS VMware è distribuito in una zona di disponibilità.
Una [zona di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Questo tipo di distribuzione consente di scegliere la posizione dei cluster e di distribuirli su diverse zone di disponibilità (AZ).
Ciò offre una migliore distribuzione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di disaster recovery (DRP) in caso di incidente.

---

## Calcolo

Le lame fornite da Cloud Temple sono di tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Sono interamente gestite da Cloud Temple (firmware, versione del SO, ...) tramite la console Cloud Temple.

Diverse categorie di lame di calcolo sono disponibili nel catalogo per supportare i vostri carichi di lavoro (Virtualizzazione, Containerizzazione, ...). Queste presentano caratteristiche e prestazioni diverse per rispondere al meglio alle vostre esigenze. Il catalogo delle lame di calcolo viene aggiornato regolarmente.

Nel contesto dell'utilizzo con un'offerta di virtualizzazione, un cluster di iper-visor è composto esclusivamente da lame di calcolo dello stesso tipo (non è possibile miscelare lame di tipi diversi nello stesso cluster).

| Riferimento             | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          | SKU per l'offerta VMware         |
| ----------------------- | ------------ | ----------------------------------------- | ----------------------- | -------------------- | -------------------- | -------------------------------- |
| Lame ECO v3             | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread          | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3       |
| Lame STANDARD v3        | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread          | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3  |
| Lame ADVANCE v3         | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread          | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3   |
| Lame PERFORMANCE 1 v3   | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread          | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3     |
| Lame PERFORMANCE 2 v3   | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread          | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3     |
| Lame PERFORMANCE 3 v3   | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread         | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3     |
| Lame PERFORMANCE 4 v3   | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread          | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48 Go| csp:fr1:iaas:vmware:perf4:v3     |

__Note__ :

- __(1)__ La quantità di memoria fornita è quella fisicamente disponibile sulle lame. Non è possibile modificare la quantità fisica di memoria di una lama.

- __(2)__ Frequenza base minima / frequenza turbo, espressa in GHz. Per impostazione predefinita, i processori sono configurati per le prestazioni massime a livello di BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso di rete e l'accesso allo storage a blocchi, poiché la piattaforma CISCO è convergente.

- __(4)__ L'offerta GPU effettivamente disponibile è in continua evoluzione. Al 1° maggio 2024, l'offerta si basa sui GPU NVIDIA LOVELACE L40S. Per impostazione predefinita, la lama PERF4 viene fornita con 2 schede L40S da 48 Go di RAM. Contattare il supporto per maggiori dettagli se necessario.

La disponibilità dell'offerta di calcolo è del 99,99%, calcolata mensilmente, finestra di manutenzione inclusa. L'idoneità in caso di mancato rispetto del SLA è soggetta alla creazione di un ticket di incidente. È inoltre necessario disporre di almeno due host per cluster e attivare la funzionalità __High Availability__ (HA). Questa funzionalità consente alla propria architettura di riavviare automaticamente le macchine virtuali sul secondo iper-visor. Nel caso in cui una zona di disponibilità contenga un solo iper-visor, il riavvio automatico non è possibile.

## Rete

Il servizio di rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete basata sulla tecnologia VPLS, che offre una segmentazione flessibile e ad alte prestazioni per soddisfare le esigenze dei clienti in termini di connettività e isolamento di rete.

### VLAN di livello 2

I VLAN disponibili nel prodotto IaaS sono di tipo __livello 2__, offrendo un isolamento di rete completo e una configurazione adattabile in base alle esigenze.

#### Concetti principali

- __Condivisione tra cluster e zone di disponibilità (AZ)__ :
  - I VLAN possono essere condivisi tra le diverse AZ e i diversi cluster appartenenti allo stesso tenant.
- __Propagazione inter-tenant__ :
  - I VLAN possono essere propagati tra diversi tenant appartenenti alla stessa organizzazione, facilitando le comunicazioni interne.

---

### Prestazioni di rete

L'infrastruttura di rete garantisce una latenza ridotta per prestazioni ottimali:

- __Latenza intra-AZ__ : Inferiore a __3 ms__.
- __Latenza inter-AZ__ : Inferiore a __5 ms__.

---

### Punti chiave

1. __Flessibilità__: I VLAN possono essere configurati per adattarsi ad ambienti multi-cluster e multi-tenant.
2. __Prestazioni elevate__: Una latenza minima garantisce una comunicazione rapida ed efficiente tra le zone di disponibilità.
3. __Isolamento e sicurezza__: I VLAN di livello 2 offrono una segmentazione di rete rigorosa per proteggere i dati e i flussi.

---

## Storage a blocchi

Cloud Temple offre diverse classi di storage basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/)
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ consente di erogare il livello di prestazioni richiesto per gli ambienti dei nostri clienti grazie all'ampia
quantità di cache di memoria integrata nei controller e alla possibilità di distribuire tutti gli IOPS
di un server su più SAN.

Viene inoltre utilizzata per consentire la replicazione dei vostri LUN di storage in modalità blocco tra
le zone di disponibilità o facilitare le operazioni sulle baie di storage.

Lo storage è principalmente di tipo FLASH NVME dedicato a carichi di lavoro professionali.
I dischi sono utilizzati dalle baie di storage in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

### Sicurezza e Cifratura dell'Archiviazione a Blocchi

Per garantire la riservatezza dei vostri dati a riposo, l'intera infrastruttura di archiviazione a blocchi integra una robusta cifratura hardware.

- __Tipo di Cifratura__ : I dati sono cifrati direttamente sui dischi (`Data At Rest`) utilizzando l'algoritmo __XTS-AES 256__.
- __Conformità__ : Questo metodo di cifratura è conforme allo standard __FIPS 140-2__, garantendo un elevato livello di sicurezza validato.
- __Funzionamento__ : La cifratura viene applicata al momento della scrittura dei dati sul supporto di archiviazione fisico.

:::warning[Attenzione sulla replicazione]
È importante notare che questa cifratura protegge i dati memorizzati sui dischi. Non è attiva "on-the-fly", il che significa che i dati non vengono cifrati durante le operazioni di replicazione dell'archiviazione tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita da canali di comunicazione dedicati e sicuri.
:::

La classe di archiviazione __'Mass Storage'__ propone dischi meccanici per le esigenze di archiviazione in un contesto di efficienza economica. Sono disponibili diversi livelli di prestazioni:

| Riferimento                         | Unità | Limite IOPS max / LUN | Banda passante max / LUN | SKU                                          |
|-----------------------------------|-------|------------------------|--------------------------|----------------------------------------------|
| FLASH - Essenziale - 500 IOPS/To   | 1 Gio | 10 000 IOPS            | 512 Mo/s                 | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | 30 000 IOPS            | 1024 Mo/s                | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | 30 000 IOPS            | 1024 Mo/s                | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | 30 000 IOPS            | 1024 Mo/s                | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | 30 000 IOPS            | 1024 Mo/s                | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivio           | 1 Tio | Non garantito          | Non garantito            | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *Le prestazioni effettive di una LUN (Datastore) crescono in modo lineare in funzione del volume allocato (secondo il suo rapporto IOPS/To), __entro il limite hardware assoluto definito sopra__.*

> *Ad esempio, un volume di 0,5 To nella classe 'Standard' beneficerà di 750 IOPS.*
> *D'altra parte, un volume di 10 To nella classe 'Ultra' (teoricamente 150 000 IOPS) sarà limitato dal limite fisico assoluto e si stabilizzerà a 30 000 IOPS e 1024 Mo/s.*

- *Queste limitazioni (IOPS e banda passante) si applicano a livello di volume di archiviazione, ovvero a livello di Datastore per un ambiente VMware,*
- *La disponibilità dell'archiviazione è del 99,99% misurato mensilmente, manutenzione inclusa,*
- *Non ci sono restrizioni o quote sulla lettura o scrittura,*
- *Non c'è fatturazione basata sugli IOPS,*
- *Non c'è impegno di prestazioni per la classe __'Mass Storage'__,*
- *La dimensione minima di una LUN di archiviazione è di 500 Gio,*
- *Durante l'uso di un meccanismo di replicazione dell'archiviazione, le prestazioni devono essere identiche su entrambe le zone di disponibilità,*
- *Nessun meccanismo di ottimizzazione "intelligente" di tipo compressione o deduplicazione è implementato: quando riservi 10 Tio di archiviazione, hai fisicamente 10 Tio di archiviazione utile implementata sulle macchine IBM.*
- *Le LUN di archiviazione sono dedicate all'ambiente cliente.*

### Utilizzo nell'ambito dell'offerta di calcolo VMware

Nell'ambito dell'utilizzo dello storage in modalità block come datastore nell'offerta di calcolo VMware di Cloud Temple, __è necessario considerare diversi aspetti importanti__ :

1. __File di swap (.VSWP) durante l'avvio delle macchine virtuali__ : Quando una macchina virtuale viene avviata, crea un file .VSWP di dimensioni pari alla sua memoria sul disco. Di conseguenza, per poter avviare le tue macchine virtuali, devi sempre avere a disposizione nel tuo datastore uno spazio libero equivalente alla somma delle dimensioni di memoria delle tue macchine virtuali. Ad esempio, se il tuo datastore dispone di 1 Tio di storage block e desideri avviare 10 macchine virtuali da 64 Gio di memoria ciascuna, saranno necessari 640 Gio di spazio su disco. Senza questo spazio, l'avvio delle macchine sarà limitato dalla capacità disponibile per creare i file di swap.

2. __Spazio libero per gli snapshot di backup__ : Il servizio di backup utilizza gli istantanei (snapshots). Di conseguenza, devi sempre avere a disposizione spazio libero sufficiente per consentire la creazione di un istantaneo durante il backup di una macchina virtuale. La dimensione dell'istantaneo dipende dal volume di scrittura della macchina virtuale e dal tempo necessario per eseguire il backup. In linea di massima, si consiglia di mantenere almeno il 10 % di spazio libero per questa operazione.

3. __Gestione dei dischi dinamici__ : Fai attenzione all'utilizzo dei dischi dinamici. Se non ne controlli la crescita, una mancanza di spazio fisico può causare un congelamento (freeze) della macchina virtuale nel caso migliore, o un arresto anomalo con corruzione nel caso peggiore. È fondamentale monitorare attentamente lo spazio disponibile sui tuoi datastore quando utilizzi questo tipo di disco.

Una gestione proattiva dello spazio su disco è essenziale per garantire il corretto funzionamento delle tue macchine virtuali e l'affidabilità dei backup. Assicurati di avere sempre a disposizione lo spazio necessario per i file di swap, gli snapshot e la crescita dei dischi dinamici.

## Archiviazione in modalità backup

L'archiviazione dedicata al backup delle tue macchine virtuali viene provisionata automaticamente dalla piattaforma entro i limiti della quota ordinata.

| Riferimento                | Unità | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivio | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |

### Replicazione dello storage a blocchi

#### Principi

Per consentire l'attuazione dei vostri piani di ripresa dell'attività, quando non è possibile garantire la
continuità operativa mediante meccanismi applicativi e la replicazione delle macchine virtuali
non risulta adatta, Cloud Temple propone __meccanismi di replicazione dello storage in modalità block tra le zone di disponibilità di una regione__.

Questi meccanismi di replicazione vengono applicati ai LUN di storage dei vostri ambienti, in aggiunta ai backup.
La scelta di utilizzare un meccanismo di replicazione su un ambiente __dipende da numerosi fattori, tra cui la sua criticità, la perdita di dati tollerata o ancora le prestazioni richieste__ per l'applicazione.

Cloud Temple propone due tipi di meccanismi implementati in una configurazione attivo/passivo:

- La replicazione __asincrona__ (o __'Global Mirror'__) : *La funzione __'Global Mirror'__ fornisce un processo di copia asincrona.
Quando un host scrive sul volume primario, la conferma del completamento dell'I/O viene ricevuta prima che l'operazione
di scrittura venga completata per la copia sul volume secondario. Se viene avviata un'operazione di failover, l'applicazione
deve recuperare e applicare tutti gli aggiornamenti che non sono stati confermati sul volume secondario.
Se le operazioni di I/O sul volume primario vengono sospese per un breve periodo,
il volume secondario può diventare una copia esatta del volume primario. Questa funzione è paragonabile a un processo
di backup continuo in cui gli ultimi aggiornamenti sono sempre mancanti.
Quando si utilizza Global Mirror per la ripresa dopo disastro, è necessario valutare come gestire tali aggiornamenti mancanti.*

- La replicazione __sincrona__ (o __'Metro Mirror'__) : *La funzione __'Metro Mirror'__ è un tipo di copia remota che crea una copia sincrona
dei dati da un volume primario a un volume secondario. Con le copie sincrone, le applicazioni host scrivono sul volume primario, ma non ricevono conferma
che l'operazione di scrittura sia completata finché i dati non sono stati scritti sul volume secondario. Ciò garantisce che entrambi i volumi contengano dati identici al termine
dell'operazione di copia. Dopo il completamento dell'operazione di copia iniziale, la funzione Metro Mirror
mantiene costantemente una copia completamente sincronizzata dei dati sorgente sul sito di destinazione. __Dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più commercializzata.__*

Si definisce quindi un sito definito "attivo" o "primario" e un sito "passivo" o "standby".
Il piano di ripresa dell'attività viene attivato in caso di disastro o nell'ambito di una richiesta di test del PRA.
Il sito passivo assume quindi il controllo del sito attivo.

#### Replicazione asincrona

Quando i vostri carichi di lavoro richiedono tempi di ripristino delle attività brevi e non è accettabile o appropriato utilizzare meccanismi di tipo replicazione applicativa / replicazione di macchine virtuali, è possibile replicare una LUN di storage SAN tra due zone di disponibilità della stessa regione.

Questo prodotto consente di ottenere un __RPO di 15 min__ e un __RTO inferiore a 4 ore__. Consente di ripartire molto più rapidamente rispetto all'implementazione di un ripristino del backup.

In un volume di storage in replicazione asincrona (__Global Mirror__), i controller di virtualizzazione SAN delle due zone di disponibilità lavorano congiuntamente per eseguire le operazioni di scrittura su entrambi i siti. Il sito principale non attende la conferma di scrittura del sito secondario.

Le fasi di un'operazione di scrittura sono le seguenti :

1. Un hypervisor desidera eseguire __un'operazione di scrittura su un volume Global-Mirror__ : invia la propria richiesta al controller SAN della propria zona di disponibilità,
2. Il controller SAN locale richiede al controller SAN della zona remota di eseguire l'operazione di scrittura,
3. il controller SAN locale non attende la conferma dal SAN remoto ed esegue quindi la scrittura localmente,
4. Invia la __conferma__ all'hypervisor che ha emesso la richiesta,
5. __Gli hypervisor del sito remoto non accedono direttamente alla LUN Global Mirror__ : È necessaria una richiesta di servizio.

| SLA       | Descrizione                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In caso di disastro nel datacenter principale, la quantità massima di dati perduti corrisponde al massimo agli ultimi 15 minuti di scrittura      |
| RTO < 4H  | In caso di disastro nel datacenter principale, il ripristino delle attività è garantito entro 4 ore in base alla complessità degli ambienti.       |

In caso di attivazione del PRA, il team di Cloud Temple esegue un'operazione di presentazione della LUN __'Global Mirror'__ agli hypervisor remoti affinché possano accedere ai dati. L'implementazione di questa soluzione richiede quindi di aver riservato sul sito 'standby' risorse di calcolo e RAM per riprendere l'attività in caso di disastro.

L'utilizzo di questa tecnologia richiede inoltre il raddoppio dello spazio su disco : è necessario disporre esattamente dello stesso spazio sul sito remoto rispetto a quello locale.

L'utilizzo di questo meccanismo può impattare le prestazioni dell'applicazione fino al 10 %. __Solo le classi di storage 500 Iops/To, 1500 Iops/To e 3000 Iops/TO sono compatibili.__

| Riferimento                          | Unità  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *Poiché l'offerta è asincrona, in caso di disastro è possibile che alcune operazioni su disco non siano state scritte sul sito remoto. Può quindi esistere un rischio per la coerenza dei dati, mitigato nell'analisi dei rischi del piano di ripristino delle attività.*
- *La replicazione dello storage in modalità block avviene in modo trasparente per le macchine virtuali e le applicazioni,*
- *A tal fine, è importante privilegiare gli scenari di replicazione applicativa o eventualmente di replicazione di macchine virtuali,*
- *Il calcolo e la memoria, sul sito di ripristino, possono essere ridotti per ottimizzare i costi se una situazione degradata è accettabile per il business durante l'attivazione del piano di ripristino delle attività.*

## Virtualizzazione VMware

L'offerta di virtualizzazione VMware Cloud Temple qualificata SecNumCloud si basa sulla tecnologia __VMware vSphere__.

La piattaforma è gestita automaticamente da Cloud Temple (mantenimento delle condizioni di sicurezza, mantenimento in condizione operativa, ...).
È gestibile tramite l'interfaccia grafica della Console o tramite le API associate.

*__Nota__* : *Per motivi di sicurezza legati alla qualifica SecNumCloud,
__non è possibile per il committente accedere direttamente alla piattaforma di virtualizzazione VMware__ (nessun accesso diretto a vCenter in particolare).
Infatti, la qualifica SecNumCloud impone __una totale segregazione__ tra le interfacce di gestione degli asset tecnici e l'interfaccia del committente (la Console).*

- I prodotti implementati sono VMware ESXi, VMware vCenter e VMware Replication.
- *La rete dell'offerta di virtualizzazione non utilizza la tecnologia VMware NSX, ma è gestita a livello hardware dalla tecnologia Juniper e dal protocollo VPLS.*
- *L'archiviazione non utilizza la tecnologia VMware vSAN, ma esclusivamente SAN IBM in fibra channel a 32G.*
- *Nessuna forma di ottimizzazione nascosta è implementata (compressione, deduplicazione, ...).*

### Definizione di un cluster di lame di calcolo ('Cpool')

Il __'Cpool'__ è un raggruppamento di hypervisor VMware ESXi, noto anche come *'cluster ESX'*.

Gli host presenti in un __'Cpool'__ appartengono tutti __allo stesso tenant e alla stessa zona di disponibilità__ (AZ). Devono necessariamente avere la stessa classe:
__non è possibile combinare modelli diversi di lame di calcolo all'interno dello stesso cluster__.

Poiché tutte le lame di calcolo vengono fornite con la memoria fisica massima, viene applicata a livello di cluster una limitazione software dell'utilizzo della RAM per garantire che corrisponda alla RAM fatturata.

Per impostazione predefinita, ogni lama dispone di 128 Go di memoria abilitata all'interno del __'Cpool'__.

Un __'Cpool'__ può contenere al massimo 32 hypervisor. Oltre questo limite, sarà necessario creare un secondo cluster.

Lo storage può essere condiviso tra i __'Cpool'__.

### Allocazione di Memoria per un 'Cpool'

La riserva di RAM è configurabile per cluster. È possibile ridurre o aumentare la quantità di RAM per adattarla alle proprie esigenze a livello di cluster.

__Attenzione a non superare una media del 85 % di consumo di memoria per blade di calcolo__.
In effetti, la tecnologia VMware utilizzerà un metodo di ottimizzazione basato sulla compressione che può impattare fortemente le prestazioni dei carichi di lavoro e complicare la diagnostica.
Allo stesso modo, una pressione di memoria eccessiva sui blade di calcolo costringerà l'hypervisor a scaricare parte della propria memoria su disco per soddisfare le esigenze delle macchine virtuali.

Questo caso, definito __'Ballooning'__, impatta fortemente tutte le prestazioni delle macchine virtuali situate sullo storage (datastore) interessato.
__La diagnostica risulta complicata in questo contesto__, poiché il monitoraggio registrerà impatti a livello di CPU e non di memoria o storage.
Si tenga inoltre presente che la prima operazione eseguita dall'hypervisor all'avvio di una macchina virtuale è la creazione di __un file di swap di memoria__ (.vswap) su
disco, delle dimensioni della memoria della macchina virtuale interessata. È necessario __tenerne conto nel dimensionamento del proprio storage__.

Ogni blade di calcolo viene fornito con 128Go di memoria attivata via software a livello di __'Cpool'__, ma dispone fisicamente di tutta la memoria allocabile.

Ad esempio, per un cluster di tre host di tipo ```vmware:standard:v2```, la riserva di RAM all'attivazione del _*'Cpool'* sarà di 3 x 128Go = 384 Go di RAM.
È possibile estenderla al massimo a 3 x 384Go = 1152Go di memoria.

    Memoria minima di un 'Cpool' = numero di host X 128Go di memoria
    Memoria massima di un 'Cpool' = numero di host X la quantità di memoria fisica del blade di calcolo

### Cataloghi di macchine virtuali Cloud Temple

Cloud Temple mette a disposizione un catalogo di `Templates` regolarmente arricchito e aggiornato dai nostri team.
Comprende attualmente diverse decine di `Templates` e immagini da montare sulle vostre macchine virtuali.

### Aggiornamento degli Hypervisor

Cloud Temple fornisce regolarmente build per gli hypervisor al fine di garantire l'applicazione delle patch di sicurezza.
Tuttavia, l'aggiornamento degli hypervisor rimane sotto la vostra responsabilità, poiché non abbiamo visibilità sui vostri vincoli aziendali.

Il processo di aggiornamento è completamente automatizzato. Per garantire la continuità del servizio, è richiesto un minimo di due hypervisor per cluster durante l'aggiornamento. Assicuratevi di disporre delle autorizzazioni necessarie per eseguire queste operazioni.

### Gestione dell'affinità delle tue macchine virtuali

Le __regole di affinità e anti-affinità__ consentono di controllare la posizione delle macchine virtuali sui tuoi ipervisors.
Possono essere utilizzate per gestire l'utilizzo delle risorse del tuo __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico di lavoro tra i server o a isolare i carichi di lavoro ad alto consumo di risorse.
In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion consente di spostare le macchine virtuali da un host all'altro senza interruzione del servizio.

Puoi configurare tramite la gestione delle regole :

- __Regole di affinità__: Queste regole assicurano che determinate macchine virtuali vengano eseguite sullo stesso host fisico.
Vengono utilizzate per migliorare le prestazioni mantenendo le macchine virtuali che comunicano frequentemente
tra loro sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili in scenari
in cui le prestazioni sono critiche, come nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di anti-affinità__: Al contrario, queste regole garantiscono che determinate macchine virtuali non vengano eseguite
sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, ad esempio,
per evitare che macchine critiche vengano tutte interessate in caso di guasto di un singolo server.
Le regole di anti-affinità sono cruciali per le applicazioni che richiedono un'alta disponibilità,
come negli ambienti di produzione dove la tolleranza ai guasti è una priorità.
Ad esempio, non desideri che i tuoi due Active Directory si trovino sullo stesso ipervisor.

Durante la creazione di una regola, definisci il tipo di regola (affinità / anti-affinità), il nome della regola,
il suo stato di attivazione (__'Stato'__) e le macchine interessate del tuo cluster di ipervisors.

*Nota: le regole di affinità/anti-affinità proposte nella console sono regole relative alle macchine virtuali tra loro (nessuna regola tra ipervisors e macchine virtuali).*

### Replica asincrona delle tue macchine virtuali in ambiente VMware

La replica asincrona delle tue macchine virtuali è un meccanismo che consiste nell'inviare a livello dell'iperviseur di origine le operazioni di scrittura sul sito standby a intervalli di tempo regolari.

Dopo una copia iniziale a caldo dell'intero storage attivo sul sito standby, solo le scritture vengono inviate a intervalli regolari sul sito in standby.
Questo intervallo dipende dal volume di scrittura (da ogni ora a ogni 24 ore).

La replica delle macchine virtuali si basa sul meccanismo di snapshot dell'iperviseur. A questo titolo,
questa soluzione presenta gli stessi inconvenienti, in particolare la sensibilità al volume di scritture della macchina virtuale,
il processo di snapshot essendo un meccanismo ricorsivo per la finalizzazione dello snapshot.

L'esempio tipico di macchina che non supporta il meccanismo di replica delle macchine virtuali è un
server FTP che riceve i flussi in tempo reale delle telecamere di sorveglianza. __La macchina passa il suo tempo a scrivere e non sarà
in grado di finalizzare uno snapshot senza mettere in pausa il sistema operativo per un periodo di tempo significativo
(decine di minuti)__. Se l'iperviseur non riesce a finalizzare lo snapshot, farà esattamente questo,
senza possibilità di intervenire se non corrompendo la macchina virtuale.

| SLA             | Descrizione                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO da 1H a 24H | In caso di disastro nel datacenter principale, la quantità massima di dati persa è quella dell'ultimo invio delle scritture sul sito standby. |
| RTO  < 15mn     | Operazione di avvio della macchina virtuale arrestata sul sito remoto                                                                                |

In caso di necessità, o in caso di guasto su una macchina del sito principale, la macchina mirror sul sito standby viene attivata.
Il ripristino dell'attività richiede di aver riservato sul sito standby risorse di calcolo e RAM in standby. È
necessario disporre dello stesso spazio di storage sul sito passivo che sul sito attivo.

| Riferimento                         | Unità | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replica VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : Il calcolo del RPO minimo deve essere definito in base al tasso di cambiamento sulla macchina virtuale.*

## Backup di macchine virtuali

Cloud Temple propone __un'architettura di backup incrociato nativa e non disattivabile__ (è obbligatoria nella qualifica secnumcloud francese).

I backup sono archiviati in una zona di disponibilità e su un datacenter fisico diverso da quello che ospita la macchina virtuale. Sono crittografati tramite un algoritmo a chiave simmetrica AES a 256 bit (cipher mode `xts-plain64`) per garantire la riservatezza dei dati.

Ciò consente di proteggersi in caso di guasto grave nel datacenter di produzione e di ripristinare su un datacenter secondario (incendio per esempio).

Questa soluzione comprende :

- Il backup fuori sede in hot backup di tutti i dischi,
- La presentazione e l'avvio istantaneo di una macchina virtuale dall'infrastruttura di mass storage e il caricamento in hot backup sui SAN di produzione,
- Il ripristino parziale di file dal backup,
- Una retention limitata esclusivamente dall'allocazione dello spazio di storage di massa.

Questa infrastruttura di backup si basa sulla soluzione *IBM Spectrum Protect Plus*, una soluzione ad architettura senza agente,
semplice da usare e che consente l'automazione dei processi di backup oltre a un'ottimizzazione dello spazio di mass storage.

Le velocità di backup e ripristino dipendono dal tasso di cambiamento negli ambienti.
La politica di backup è configurabile tramite [la Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

*__Nota:__*

*__Alcune macchine virtuali non sono compatibili con questa tecnologia di backup__ che utilizza i meccanismi di snapshot dell'ipervisors.
Si tratta tipicamente di macchine i cui carichi di scrittura su disco sono costanti. Non è possibile per l'ipervisors chiudere lo snapshot, il che
obbliga a mettere in freeze la macchina virtuale per poter completare l'operazione di chiusura. Questo freeze può durare diverse ore e non può essere interrotto.*

*La soluzione consiste quindi nell'escludere il disco che è soggetto a scritture permanenti e nel backup dei dati tramite un altro metodo.*

| Riferimento                                               | Unità | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Accesso al servizio IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1 |

#### Creare una politica di backup

Per aggiungere una nuova politica di backup, è necessario inviare una richiesta al supporto. Il supporto è accessibile tramite l'icona del salvagente in alto a destra della finestra.

La creazione di una nuova politica di backup viene effettuata tramite __una richiesta di servizio__ che indica:

    Il nome della Vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)

## Protezione avanzata dei dati (HSM/KMS)

Cloud Temple propone una soluzione di __crittografia avanzata delle macchine virtuali__ basata su moduli di sicurezza hardware (HSM) e un servizio di gestione delle chiavi (KMS). Questa funzionalità consente di rafforzare la protezione dei dati sensibili grazie a una gestione centralizzata e sicura delle chiavi di crittografia, direttamente integrata nell'ambiente SecNumCloud.

### Architettura tecnica

La soluzione si basa su un'infrastruttura di sicurezza robusta composta da :

- __HSM (Hardware Security Module)__ : Moduli __Thales Luna S790__ certificati __FIPS 140-3 livello 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ per la gestione centralizzata delle chiavi
- __Integrazione VMware__ : Comunicazione tramite il protocollo __KMIP__ (Key Management Interoperability Protocol)

#### Distribuzione ad alta disponibilità

L'infrastruttura HSM è distribuita su __tre zone di disponibilità__ della regione FR1 :

- PAR7S
- TH3S  
- AZ07

Questa distribuzione garantisce una __alta disponibilità__ e una __resilienza__ massima del servizio di crittografia.

### Funzionamento e gerarchia delle chiavi

Il sistema utilizza una __gerarchia di chiavi crittografiche__ per garantire la sicurezza dei dati:

| Livello | Tipo di chiave | Descrizione | Posizione |
|--------|-------------|-------------|--------------|
| 1 | __Radice della fiducia (RoT)__ | Chiave principale per KMS | HSM Luna |
| 2 | __Chiave di dominio (DK)__ | Chiave di dominio per cliente (isolamento multi-tenant) | HSM Luna |
| 3 | __Chiave di crittografia delle chiavi (KEK)__ | Chiave di cifratura per VM | CipherTrust Manager |
| 4 | __Chiave di crittografia dei dati (DEK)__ | Chiave di dati per VM | VMware ESXi |

#### Processo di crittografia

1. __Generazione__ : VMware ESXi genera una DEK univoca per ogni macchina virtuale
2. __Protezione__ : La DEK viene crittografata dalla KEK archiviata in CipherTrust Manager
3. __Sicurezza__ : La KEK è a sua volta protetta dalla gerarchia di chiavi HSM
4. __Archiviazione__ : La DEK crittografata viene archiviata insieme ai file di configurazione della VM

### Sicurezza e conformità

#### Certificazioni

- __FIPS 140-3 livello 3__ : Certificazione di più alto livello per HSM
- __Criteri Comuni EAL4+__ : Valutazione della sicurezza avanzata
- __SecNumCloud__ : Qualifica ANSSI integrata nell'ambiente Cloud Temple

#### Isolamento multi-tenant

- __Separazione crittografica__ : Ogni client dispone di un dominio KMS isolato
- __Chiavi dedicate__ : Una Domain Key specifica per client
- __Audit e tracciabilità__ : Registrazione completa delle azioni per dominio

### Attivazione e utilizzo

La crittografia delle macchine virtuali si attiva __con un solo clic__ dalla [Console](../console/console.md).

Per una procedura dettagliata con screenshot, consulta il [tutorial sulla crittografia delle macchine virtuali](tutorials/vm_encryption.md).

#### Prerequisiti

- __Fornitore di chiavi configurato__ : Un fornitore HSM/KMS deve essere attivato sulla vStack
- __Macchina virtuale spenta__ : La VM deve essere arrestata prima della crittografia
- __Nessuna replica attiva__ : La VM non deve essere replicata (incompatibile con Global Mirror)
- __Nessuno snapshot__ : Non devono essere presenti snapshot
- __Sottoscrizione al servizio__ : Il servizio di protezione avanzata deve essere sottoscritto

*__Nota__ : Per ulteriori dettagli sui prerequisiti e sulla procedura completa, fare riferimento alla [guida alla crittografia delle VM](tutorials/vm_encryption.md).*

### Limitazioni e considerazioni

#### Compatibilità

- __Global Mirror__ : Le macchine virtuali crittografate non sono __compatibili__ con la replica Global Mirror
- __Ripristino__ : I backup di VM crittografate mantengono la protezione crittografica
- __Esportazione__ : L'esportazione di VM crittografate richiede procedure specifiche

#### Prestazioni

- __Impatto minimo__ : La crittografia hardware garantisce prestazioni ottimali
- __Trasparenza__ : Nessun impatto sul funzionamento delle applicazioni

### Casi d'uso consigliati

Questa soluzione di protezione avanzata è particolarmente adatta per:

- __Dati sensibili__ : Informazioni personali, dati finanziari, segreti industriali
- __Conformità normativa__ : Requisiti GDPR, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Settori critici__ : Banca, assicurazione, sanità, difesa
- __Sovranità digitale__ : Protezione contro accessi non autorizzati, anche in caso di compromissione

| Riferimento | Unità | SKU |
|-----------|-------|-----|
| PROTEZIONE AVANZATA - Crittografia VM tramite HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Nota__ :*

- *Il servizio richiede una sottoscrizione specifica e non è incluso nel prodotto IaaS standard*
- *La gestione delle chiavi rimane interamente sotto il controllo di Cloud Temple nell'ambiente SecNumCloud*
- *Le chiavi di crittografia non lasciano mai l'infrastruttura francese e sovrana*