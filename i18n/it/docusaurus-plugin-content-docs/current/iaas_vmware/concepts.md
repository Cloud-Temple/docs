---
title: Concetti
---

<a id="une-infrastructure-dédiée-et-automatisée"></a>

## Presentazione

L'offerta __IaaS VMware__ è un'infrastruttura di virtualizzazione VMware dedicata, progettata per rispondere alle esigenze critiche di continuità e di ripresa dell'attività, in particolare nei settori esigenti come l'industria, il settore bancario e quello assicurativo. Garantisce un'elevata disponibilità e prestazioni prevedibili per i vostri carichi di lavoro critici.

Pur essendo interamente automatizzata grazie ad API e a un provider Terraform, l'offerta propone un'infrastruttura dedicata:

- __Risorse dedicate__ : Le lame di calcolo, i volumi di storage e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- __Massima prevedibilità__ : Controllate i tassi di virtualizzazione e la pressione in IOPS sullo storage e beneficiate di una fatturazione chiara, a consumo mensile.

## Vantaggi

| Vantaggio           | Descrizione                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale    | Hosting dei dati in Francia e conformità al RGPD.                                                                                              |
| Sicurezza           | Piattaforma altamente sicura, qualificata __SecNumCloud__, certificata __HDS__ (Hosting di Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__.          |
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, finestre di manutenzione incluse.                                   |
| Resilienza          | Implementazione di piani di continuità o di ripresa dell'attività in base alle esigenze.                                                       |
| Automazione         | Piattaforma interamente automatizzata, pensata per integrarsi in un programma di trasformazione digitale.                                      |
| On demand           | Risorse disponibili on demand.                                                                                                                 |

<a id="principales-fonctionnalités"></a>

## Funzionalità

- Risorse di calcolo (CPU, RAM) dedicate e on demand.
- Storage on demand (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Backup incrociati con retention configurabile.
- Replicazione asincrona per lo storage o le macchine virtuali.
- Gestione tramite la [console](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

### Cataloghi di macchine virtuali Cloud Temple

Cloud Temple mette a vostra disposizione un catalogo di `Templates` regolarmente arricchito e aggiornato dai nostri team.
Ad oggi comprende diverse decine di `Templates` e immagini da montare sulle vostre macchine virtuali.

### Gestione dell'affinità delle vostre macchine virtuali

Le __regole di affinità e di anti-affinità__ consentono di controllare il posizionamento delle macchine virtuali sui vostri hypervisor.
Possono essere utilizzate per gestire l'utilizzo delle risorse del vostro __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico di lavoro tra i server o a isolare i carichi di lavoro che richiedono molte risorse.
In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion consente di spostare macchine virtuali da un host all'altro senza interruzione del servizio.

Grazie alla gestione delle regole, potete configurare:

- __Regole di affinità__ : Queste regole assicurano che determinate macchine virtuali vengano eseguite sullo stesso host fisico.
Sono utilizzate per migliorare le prestazioni mantenendo le macchine virtuali che comunicano frequentemente
tra loro sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili negli scenari
in cui le prestazioni sono critiche, come nel caso di database o di applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di anti-affinità__ : Al contrario, queste regole garantiscono che determinate macchine virtuali non vengano eseguite
sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, ad esempio,
per evitare che le macchine critiche vengano tutte colpite in caso di guasto di un singolo server.
Le regole di anti-affinità sono cruciali per le applicazioni che richiedono un'alta disponibilità,
come negli ambienti di produzione in cui la tolleranza ai guasti è una priorità.
Ad esempio, non vorrete che i vostri due Active Directory si trovino sullo stesso hypervisor.

Durante la creazione di una regola, definite il tipo di regola (affinità / anti-affinità), il nome della regola,
il suo stato di attivazione (__'Stato'__) e le macchine interessate del vostro cluster di hypervisor.

*Osservazione: le regole di affinità/anti-affinità proposte nella console sono regole che riguardano le macchine virtuali tra loro (nessuna regola tra hypervisor e macchine virtuali).*

## Architettura

### Una piattaforma tecnologica di fiducia

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ per lo storage a blocchi.
- Rete: __JUNIPER__.
- Virtualizzazione: __VMware__, che offre una base affidabile e collaudata per gestire i vostri ambienti cloud.
- Backup: __IBM Spectrum Protect Plus__, per l'orchestrazione e l'archiviazione dei backup.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, che garantisce un'ampia compatibilità con i principali editori di software.

### Virtualizzazione VMware

L'offerta di virtualizzazione VMware di Cloud Temple qualificata SecNumCloud si basa sulla tecnologia __VMware Vsphere__.

La piattaforma è gestita da Cloud Temple in modo automatico (mantenimento delle condizioni di sicurezza, mantenimento in condizioni operative, ...).
È gestibile tramite l'interfaccia grafica della console o tramite le API associate.

*__Osservazione__* : *Per motivi di sicurezza legati alla qualifica SecNumCloud,
__non è possibile per il committente accedere direttamente alla piattaforma di virtualizzazione VMware__ (in particolare, nessun accesso diretto al vCenter).
Infatti, la qualifica SecNumCloud impone __una totale segregazione__ tra le interfacce di gestione degli asset tecnici e l'interfaccia del committente (la console).*

- I prodotti utilizzati sono VMware ESXi, VMware Vcenter e VMware Replication.
- *La rete dell'offerta di virtualizzazione non utilizza la tecnologia VMware NSX, ma è gestita a livello hardware dalla tecnologia Juniper e dal protocollo VPLS.*
- *Lo storage non utilizza la tecnologia VMware vSan, ma esclusivamente SAN IBM in fiber channel 32G.*
- *Non viene applicata alcuna forma di ottimizzazione nascosta (compressione, deduplicazione, ...).*

#### Definizione di un cluster di lame di calcolo ('Cpool')

Il __'Cpool'__ è un raggruppamento di hypervisor VMware ESXi, noto anche come *'cluster ESX'*.

Gli host presenti in un __'Cpool'__ appartengono tutti __allo stesso tenant e alla stessa zona di disponibilità__ (AZ). Devono necessariamente avere la stessa classe:
__non è possibile combinare modelli diversi di lama di calcolo all'interno di uno stesso cluster__.

Poiché tutte le lame di calcolo sono fornite con il massimo fisico di memoria, a livello del cluster viene applicata via software una limitazione dell'utilizzo della RAM per garantire che corrisponda alla RAM fatturata.

Per impostazione predefinita, ogni lama dispone di 128 GB di memoria attivata all'interno del __'Cpool'__.

Un __'Cpool'__ può contenere al massimo 32 hypervisor. Oltre questo limite, sarà necessario creare un secondo cluster.

Lo storage può essere condiviso tra i __'Cpool'__.

#### Allocazione della memoria per un 'Cpool'

La prenotazione della RAM è configurabile per cluster. Potete ridurre o aumentare la quantità di RAM affinché corrisponda alle vostre esigenze a livello del cluster.

__Fate attenzione a non superare una media dell'85 % di consumo di memoria per lama di calcolo__.
Infatti, la tecnologia VMware utilizzerà un metodo di ottimizzazione di tipo compressione che può avere un forte impatto sulle prestazioni dei vostri carichi di lavoro e complicare la diagnosi.
Allo stesso modo, una pressione di memoria eccessiva sulle vostre lame di calcolo costringerà l'hypervisor a scaricare una parte della propria memoria su disco per rispondere alle esigenze delle macchine virtuali.

Questo caso, chiamato __'Ballooning'__, ha un impatto molto forte sulle prestazioni dell'insieme delle macchine virtuali situate sullo storage (datastore) interessato.
__La diagnosi è complicata in questo contesto__, poiché la vostra metrologia rileverà impatti a livello di CPU e non della memoria o dello storage.
Tenete inoltre presente che la prima cosa che fa l'hypervisor all'avvio di una macchina virtuale è creare __un file di swap della memoria__ (.vswap) sul
disco, della dimensione della memoria della macchina virtuale interessata. Dovete __tenerne conto nel dimensionamento del vostro storage__.

Ogni lama di calcolo viene fornita con 128GB di memoria attivata via software a livello del __'Cpool'__, ma dispone fisicamente della totalità della memoria allocabile.

Ad esempio, per un cluster di tre host di tipo ```vmware:standard:v2```, la prenotazione della RAM all'attivazione del _*'Cpool'* sarà di 3 x 128GB = 384 GB di RAM.
Potrete estenderla al massimo a 3 x 384GB = 1152GB di memoria.

    Memoria minima di un 'Cpool' = numero di host X 128GB di memoria
    Memoria massima di un 'Cpool' = numero di host X la quantità di memoria fisica della lama di calcolo

#### Aggiornamento degli hypervisor

Cloud Temple fornisce regolarmente build per gli hypervisor al fine di garantire l'applicazione delle patch di sicurezza.
Tuttavia, l'aggiornamento degli hypervisor resta sotto la vostra responsabilità, poiché non abbiamo visibilità sui vostri vincoli di business.

Il processo di aggiornamento è interamente automatizzato. Per garantire la continuità del servizio, durante l'aggiornamento è richiesto un minimo di due hypervisor per cluster. Assicuratevi di disporre delle autorizzazioni necessarie per eseguire queste azioni.

## Regioni e zone di disponibilità

Il prodotto IaaS VMware è distribuito in una zona di disponibilità.
Una [zona di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Questo tipo di distribuzione consente di scegliere la localizzazione dei cluster e di ripartirli su diverse zone di disponibilità (AZ).
Ciò offre una migliore ripartizione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di disaster recovery (DRP) in caso di incidente.


## Specifiche tecniche

### Calcolo

Le lame fornite da Cloud Temple sono di tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Sono interamente gestite da Cloud Temple (firmware, versione del sistema operativo, ...) tramite la console Cloud Temple.

Diverse categorie di lame di calcolo sono disponibili a catalogo per supportare i vostri carichi di lavoro (virtualizzazione, containerizzazione, ...).
Queste presentano caratteristiche e prestazioni diverse per rispondere al meglio alle vostre esigenze. Il catalogo delle lame di calcolo evolve regolarmente.

Nell'ambito dell'utilizzo con un'offerta di virtualizzazione, un cluster di hypervisor è composto esclusivamente da lame di calcolo dello stesso tipo (non è possibile combinare lame di tipi diversi in uno stesso cluster).

| Riferimento           | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread    | Connettività __(3)__ | GPU __(4)__          |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- |
| Lama ECO v3           | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread             | 2 X 10 Gbit/s        | |
| Lama STANDARD v3      | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread             | 2 X 25 Gbit/s        | |
| Lama ADVANCE v3       | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread             | 2 X 25 Gbit/s        | |
| Lama PERFORMANCE 1 v3 | 384 GB       | 3.20/3.6 GHz (Gold 5315Y o equivalente)   | 16 / 32 thread             | 2 X 25 Gbit/s        | |
| Lama PERFORMANCE 2 v3 | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread             | 2 X 25 Gbit/s        | |
| Lama PERFORMANCE 3 v3 | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread            | 2 X 25 Gbit/s        | |
| Lama PERFORMANCE 4 v3 | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

__Osservazioni__ :

- __(1)__ La quantità di memoria fornita è quella fisicamente disponibile sulle lame. Non è possibile modificare la quantità fisica di memoria di una lama.

- __(2)__ La frequenza di base minima / frequenza turbo, espressa in GHz. Per impostazione predefinita, i processori sono configurati per le massime prestazioni a livello del BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e l'accesso allo storage a blocchi, essendo la piattaforma CISCO convergente.

- __(4)__ L'offerta GPU disponibile è in continua evoluzione. Si basa sulle GPU NVIDIA L40S. Per impostazione predefinita, la lama PERF4 viene fornita con 2 schede L40S da 48 GB di RAM. Contattate il supporto per maggiori dettagli, se necessario.

### Rete

Il servizio di rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete fondata sulla tecnologia VPLS, che offre una segmentazione flessibile e performante per rispondere alle esigenze dei clienti in materia di connettività e di isolamento di rete.

#### VLAN di livello 2

Le VLAN messe a disposizione nel prodotto IaaS sono di tipo __livello 2__, e offrono un isolamento di rete completo e una configurazione adattabile in base alle esigenze.

##### Concetti principali

- __Condivisione tra cluster e zone di disponibilità (AZ)__ :
  - Le VLAN possono essere condivise tra le diverse AZ e i diversi cluster appartenenti allo stesso tenant.
- __Propagazione tra tenant__ :
  - Le VLAN possono essere propagate tra più tenant appartenenti a una stessa organizzazione, facilitando le comunicazioni interne.

---

#### Prestazioni di rete

L'infrastruttura di rete garantisce una bassa latenza per prestazioni ottimali:

- __Latenza intra-AZ__ : Inferiore a __3 ms__.
- __Latenza inter-AZ__ : Inferiore a __5 ms__.

---

#### Punti chiave

1. __Flessibilità__ : Le VLAN possono essere configurate per adattarsi ad ambienti multi-cluster e multi-tenant.
2. __Prestazioni elevate__ : Una latenza minima assicura una comunicazione rapida ed efficiente tra le zone di disponibilità.
3. __Isolamento e sicurezza__ : Le VLAN di livello 2 offrono una segmentazione di rete rigorosa per proteggere i dati e i flussi.

---

### Storage a blocchi

Cloud Temple propone diverse classi di storage basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/)
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ consente di fornire il livello di prestazioni richiesto per gli ambienti dei nostri clienti grazie alla grande
quantità di memoria cache integrata nei controller e alla possibilità di ripartire l'insieme degli IOPS
di un server su più SAN.

È inoltre utilizzata per consentire la replicazione delle vostre LUN di storage in modalità a blocchi tra
le zone di disponibilità o per facilitare gli interventi sugli array di storage.

Lo storage è principalmente di tipo FLASH NVME, dedicato ai carichi di lavoro professionali.
I dischi sono utilizzati dagli array di storage in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).


La classe di storage __'Mass Storage'__ propone dischi meccanici per le esigenze di archiviazione
in un contesto di efficienza economica. Sono disponibili diversi livelli di prestazioni:

| Riferimento                       | Unità | Limite IOPS max / LUN  | Larghezza di banda max / LUN |
|-----------------------------------|-------|------------------------|------------------------------|
| FLASH - Essenziale - 500 IOPS/TB  | 1 GiB | 10 000 IOPS            | 512 MB/s |
| FLASH - Standard - 1500 IOPS/TB   | 1 GiB | 30 000 IOPS            | 1024 MB/s |
| FLASH - Premium - 3000 IOPS/TB    | 1 GiB | 30 000 IOPS            | 1024 MB/s |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GiB | 30 000 IOPS            | 1024 MB/s |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GiB | 30 000 IOPS            | 1024 MB/s |
| MASS STORAGE - Archiviazione      | 1 TiB | Non garantito          | Non garantito |

*__Nota__ :*

- *Le prestazioni effettive di una LUN (Datastore) crescono in modo lineare in funzione del volume allocato (secondo il suo rapporto IOPS/TB), __entro il limite del tetto hardware assoluto definito sopra__.*

> *Ad esempio, un volume di 0,5 TB in classe 'Standard' beneficerà di 750 IOPS.*
> *Per contro, un volume di 10 TB in classe 'Ultra' (teoricamente 150 000 IOPS) sarà limitato dal limite fisico assoluto e si fermerà a 30 000 IOPS e 1024 MB/s.*

- *Queste limitazioni (IOPS e larghezza di banda) si applicano a livello del volume di storage, ossia a livello del Datastore per un ambiente VMware,*
- *Non vi sono restrizioni né quote sulla lettura o sulla scrittura,*
- *Non vi è fatturazione a IOPS,*
- *Non vi è alcun impegno sulle prestazioni per la classe __'Mass Storage'__,*
- *La dimensione minima di una LUN di storage è di 500GiB,*
- *Quando si utilizza un meccanismo di replicazione dello storage, le prestazioni devono essere identiche sulle due zone di disponibilità,*
- *Non viene applicato alcun meccanismo di ottimizzazione "intelligente" di tipo compressione o deduplicazione: quando prenotate 10TiB di storage, disponete fisicamente di 10TiB utili di storage implementati sulle macchine IBM.*
- *Le LUN di storage sono dedicate all'ambiente del cliente.*

#### Utilizzo nell'ambito dell'offerta di calcolo VMware

Nell'ambito dell'utilizzo dello storage in modalità a blocchi sotto forma di datastore nell'offerta di calcolo VMware di Cloud Temple, __dovete tenere conto di diverse considerazioni importanti__:

1. __File di swap (.VSWP) all'avvio delle macchine virtuali__ : Quando una macchina virtuale si avvia, crea sul disco un file .VSWP della dimensione della propria memoria. Di conseguenza, per poter avviare le vostre macchine virtuali, dovete sempre disporre nel vostro datastore di uno spazio libero equivalente alla somma delle dimensioni di memoria delle vostre macchine virtuali. Ad esempio, se il vostro datastore dispone di 1 TiB di storage a blocchi e desiderate avviare 10 macchine virtuali da 64 GiB di memoria ciascuna, saranno necessari 640 GiB di spazio su disco. Senza questo spazio, l'avvio delle macchine sarà limitato dalla capacità disponibile per creare i file di swap.

2. __Spazio libero per gli snapshot di backup__ : Il servizio di backup utilizza istantanee (snapshot). Dovete quindi avere sempre spazio libero sufficiente per consentire la creazione di un'istantanea durante il backup di una macchina virtuale. La dimensione dell'istantanea dipende dal volume di scrittura della macchina virtuale e dal tempo necessario per eseguire il backup. In linea generale, si raccomanda di mantenere almeno il 10 % di spazio libero per questa operazione.

3. __Gestione dei dischi dinamici__ : Prestate attenzione all'utilizzo dei dischi dinamici. Se non ne controllate la crescita, una mancanza di spazio fisico può comportare, nel migliore dei casi, un congelamento (freeze) della macchina virtuale o, nel peggiore dei casi, un crash con corruzione. È fondamentale monitorare attentamente lo spazio disponibile sui vostri datastore quando utilizzate questo tipo di disco.

Una gestione proattiva dello spazio su disco è essenziale per garantire il corretto funzionamento delle vostre macchine virtuali e l'affidabilità dei backup. Assicuratevi di disporre sempre dello spazio necessario per i file di swap, le istantanee e la crescita dei dischi dinamici.

### Limiti

- Un cluster di hypervisor ('Cpool') contiene al massimo 32 hypervisor, tutti della stessa classe di lama.
- La dimensione minima di una LUN di storage è di 500 GiB.
- Un volume di storage è limitato a 30 000 IOPS e 1024 MB/s (10 000 IOPS e 512 MB/s in classe Essenziale).
- La quantità fisica di memoria di una lama non può essere modificata.
- Il riavvio automatico delle macchine virtuali richiede almeno due hypervisor per cluster, con la High Availability attivata.

## Sicurezza e conformità

La piattaforma è qualificata __SecNumCloud__ dall'[ANSSI](https://www.ssi.gouv.fr/), il che garantisce un elevato livello di automazione e di sicurezza.

### Sicurezza e crittografia dello storage a blocchi

Per garantire la riservatezza dei vostri dati a riposo, l'intera nostra infrastruttura di storage a blocchi integra una robusta crittografia hardware.

- __Tipo di crittografia__ : I dati sono crittografati direttamente sui dischi (`Data At Rest`) utilizzando l'algoritmo __XTS-AES 256__.
- __Conformità__ : Questo metodo di crittografia è conforme alla norma __FIPS 140-2__, assicurando un elevato livello di sicurezza convalidato.
- __Funzionamento__ : La crittografia viene applicata al momento della scrittura dei dati sul supporto di storage fisico.

:::warning[Punto di attenzione sulla replicazione]
È importante notare che questa crittografia protegge i dati memorizzati sui dischi. Non è attiva "on-the-fly", il che significa che i dati non vengono crittografati durante le operazioni di replicazione dello storage tra le zone di disponibilità. La sicurezza dei trasferimenti è garantita da canali di comunicazione dedicati e sicuri.
:::

### Protezione avanzata dei dati (HSM/KMS)

Cloud Temple propone una soluzione di __crittografia avanzata delle macchine virtuali__ basata su moduli di sicurezza hardware (HSM) e su un servizio di gestione delle chiavi (KMS). Questa funzionalità consente di rafforzare la protezione dei dati sensibili grazie a una gestione centralizzata e sicura delle chiavi di crittografia, integrata direttamente nell'ambiente SecNumCloud.

#### Architettura tecnica

La soluzione si basa su una robusta infrastruttura di sicurezza composta da:

- __HSM (Hardware Security Module)__ : Moduli __Thales Luna S790__ certificati __FIPS 140-3 livello 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ per la gestione centralizzata delle chiavi
- __Integrazione VMware__ : Comunicazione tramite il protocollo __KMIP__ (Key Management Interoperability Protocol)

##### Distribuzione ad alta disponibilità

L'infrastruttura HSM è distribuita su __tre zone di disponibilità__ della regione FR1:

- PAR7S
- TH3S
- AZ07

Questa ripartizione garantisce un'__alta disponibilità__ e una __resilienza__ massima del servizio di crittografia.

#### Funzionamento e gerarchia delle chiavi

Il sistema utilizza una __gerarchia di chiavi crittografiche__ per garantire la sicurezza dei dati:

| Livello | Tipo di chiave | Descrizione | Ubicazione |
|--------|-------------|-------------|--------------|
| 1 | __Root of Trust (RoT)__ | Chiave master per KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Chiave di dominio per cliente (isolamento multi-tenant) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Chiave di crittografia per VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Chiave dei dati per VM | VMware ESXi |

##### Processo di crittografia

1. __Generazione__ : VMware ESXi genera una DEK unica per ogni macchina virtuale
2. __Protezione__ : La DEK è crittografata dalla KEK memorizzata in CipherTrust Manager
3. __Messa in sicurezza__ : La KEK è a sua volta protetta dalla gerarchia di chiavi HSM
4. __Archiviazione__ : La DEK crittografata è memorizzata con i file di configurazione della VM

#### Sicurezza e conformità

##### Certificazioni

- __FIPS 140-3 livello 3__ : Certificazione del più alto livello per gli HSM
- __Common Criteria EAL4+__ : Valutazione di sicurezza avanzata
- __SecNumCloud__ : Qualifica ANSSI integrata nell'ambiente Cloud Temple

##### Isolamento multi-tenant

- __Separazione crittografica__ : Ogni cliente dispone di un dominio KMS isolato
- __Chiavi dedicate__ : Una Domain Key specifica per cliente
- __Audit e tracciabilità__ : Registrazione completa delle azioni per dominio

#### Attivazione e utilizzo

La crittografia delle macchine virtuali si attiva __con un solo clic__ dalla [console](../console/console.md).

Per una procedura dettagliata con screenshot, consultate il [tutorial sulla crittografia delle macchine virtuali](tutorials/vm_encryption.md).

##### Prerequisiti

- __Provider di chiavi configurato__ : Un provider HSM/KMS deve essere attivato sulla vStack
- __Macchina virtuale spenta__ : La VM deve essere arrestata prima della crittografia
- __Nessuna replicazione attiva__ : La VM non deve essere replicata (incompatibile con Global Mirror)
- __Nessuno snapshot__ : Non deve essere presente alcuna istantanea
- __Sottoscrizione al servizio__ : Il servizio di protezione avanzata deve essere sottoscritto

*__Osservazione__ : Per maggiori dettagli sui prerequisiti e sulla procedura completa, fate riferimento alla [guida alla crittografia delle VM](tutorials/vm_encryption.md).*

#### Limitazioni e considerazioni

##### Compatibilità

- __Global Mirror__ : Le macchine virtuali crittografate __non sono compatibili__ con la replicazione Global Mirror
- __Ripristino__ : I backup delle VM crittografate conservano la loro protezione crittografica
- __Esportazione__ : L'esportazione delle VM crittografate richiede procedure specifiche

##### Prestazioni

- __Impatto minimo__ : La crittografia hardware assicura prestazioni ottimali
- __Trasparenza__ : Nessun impatto sul funzionamento delle applicazioni

#### Casi d'uso raccomandati

Questa soluzione di protezione avanzata è particolarmente adatta per:

- __Dati sensibili__ : Informazioni personali, dati finanziari, segreti industriali
- __Conformità normativa__ : Requisiti di protezione dei dati (RGPD) e di sicurezza delle informazioni (ISO 27001)
- __Settori critici__ : Banca, assicurazioni, sanità, difesa
- __Sovranità digitale__ : Protezione contro gli accessi non autorizzati, anche in caso di compromissione


*__Nota__ :*

- *Il servizio richiede una sottoscrizione specifica e non è incluso nel prodotto IaaS standard*
- *La gestione delle chiavi resta interamente sotto il controllo di Cloud Temple nell'ambiente SecNumCloud*
- *Le chiavi di crittografia non lasciano mai l'infrastruttura francese e sovrana*

## Backup e continuità

### Backup delle macchine virtuali

Cloud Temple propone __un'architettura di backup incrociato nativa e non disattivabile__ (è obbligatoria nella qualifica SecNumCloud francese).

I backup sono memorizzati in una zona di disponibilità e in un datacenter fisico diversi da quelli che ospitano la macchina virtuale. Sono crittografati tramite un algoritmo a chiavi simmetriche AES a 256 bit (cipher mode `xts-plain64`) per garantire la riservatezza dei dati.

Ciò consente di proteggersi in caso di guasto grave del datacenter di produzione e di ripristinare su un datacenter secondario (ad esempio in caso di incendio).

Questa soluzione comprende:

- Il backup off-site a caldo dell'insieme dei dischi,
- La presentazione e l'avvio istantaneo di una macchina virtuale dall'infrastruttura di mass storage e il ricaricamento a caldo sulle SAN di produzione,
- Il ripristino parziale di file dal backup,
- Una retention limitata unicamente dall'allocazione di spazio di mass storage.

Questa infrastruttura di backup si basa sulla soluzione *IBM Spectrum Protect Plus*, una soluzione con architettura senza agente,
semplice da utilizzare e che consente l'automazione dei processi di backup oltre a un'ottimizzazione dello spazio di mass storage.

Le velocità di backup e di ripristino dipendono dal tasso di modifica degli ambienti.
La politica di backup è configurabile dalla [console Cloud Temple](../console/console.md) per ogni macchina virtuale.

*__Nota:__*

*__Alcune macchine virtuali non sono compatibili con questa tecnologia di backup__, che utilizza i meccanismi di istantanea dell'hypervisor.
Si tratta tipicamente delle macchine i cui carichi di scrittura su disco sono costanti. L'hypervisor non riesce a chiudere l'istantanea, il che
impone il congelamento della macchina virtuale per poter terminare l'operazione di chiusura. Questo congelamento può durare diverse ore e non può essere interrotto.*

*La soluzione consiste quindi nell'escludere il disco oggetto di scritture permanenti e nell'eseguire il backup dei dati con un altro metodo.*


#### Creare una politica di backup

Per aggiungere una nuova politica di backup, occorre inoltrare una richiesta al supporto. Il supporto è accessibile dall'icona del salvagente in alto a destra della finestra.

La creazione di una nuova politica di backup avviene tramite __una richiesta di servizio__ che indichi:

    Il nome della vostra Organizzazione
    Il nome di un contatto con il suo indirizzo e-mail e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)

### Storage in modalità backup

Lo storage dedicato al backup delle vostre macchine virtuali viene provisionato automaticamente dalla piattaforma entro il limite della quota ordinata.


### Replicazione dello storage in modalità a blocchi

#### Principi

Per consentire l'attuazione dei vostri piani di disaster recovery, quando non è possibile trovarsi in
una situazione di continuità operativa con meccanismi applicativi e la replicazione delle macchine virtuali
non è adeguata, Cloud Temple propone __meccanismi di replicazione dello storage in modalità a blocchi tra le zone di disponibilità di una regione__.

Questi meccanismi di replicazione sono applicati alle LUN di storage dei vostri ambienti, a complemento dei backup.
La scelta di utilizzare un meccanismo di replicazione su un ambiente __dipende da numerosi fattori, tra cui la sua criticità, la perdita di dati tollerata o le prestazioni attese__ per l'applicazione.

Cloud Temple propone due tipi di meccanismi distribuiti in una configurazione attivo/passivo:

- La replicazione __asincrona__ (o __'Global Mirror'__): *La funzione __'Global Mirror'__ fornisce un processo di copia asincrona.
Quando un host scrive sul volume primario, la conferma del completamento dell'I/O viene ricevuta prima che l'operazione
di scrittura termini per la copia sul volume secondario. Se viene avviata un'operazione di failover, l'applicazione
deve recuperare e applicare tutti gli aggiornamenti che non sono stati confermati sul volume secondario.
Se le operazioni di I/O sul volume primario vengono messe in pausa per un breve periodo,
il volume secondario può diventare una corrispondenza esatta del volume primario. Questa funzione è paragonabile a un processo
di backup continuo in cui mancano sempre gli ultimi aggiornamenti.
Quando utilizzate Global Mirror a fini di disaster recovery, dovete riflettere sul modo in cui desiderate gestire questi aggiornamenti mancanti.*

- La replicazione __sincrona__ (o __'Metro Mirror'__): *La funzione __'Metro Mirror'__ è un tipo di copia remota che crea una copia sincrona
dei dati da un volume primario a un volume secondario. Con le copie sincrone, le applicazioni host scrivono sul volume primario, ma non ricevono la conferma
che l'operazione di scrittura è terminata finché i dati non sono stati scritti sul volume secondario. Ciò garantisce che i due volumi contengano dati identici quando
l'operazione di copia è terminata. Dopo il completamento dell'operazione di copia iniziale, la funzione Metro Mirror
mantiene permanentemente una copia interamente sincronizzata dei dati di origine sul sito di destinazione. __Dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più commercializzata.__*

Si definisce quindi un sito detto "attivo" o "principale" e un sito "passivo" o "standby".
Il piano di disaster recovery viene attivato in caso di sinistro o nell'ambito di una richiesta di test del piano di disaster recovery.
Il sito passivo subentra quindi al sito attivo.

#### Replicazione asincrona

Quando i vostri carichi di lavoro richiedono tempi di ripresa dell'attività brevi e non è accettabile
o adeguato utilizzare meccanismi di tipo replicazione applicativa / replicazione di macchine virtuali,
è possibile replicare una LUN di storage SAN tra due zone di disponibilità di una stessa regione.

Questo prodotto consente di ottenere un __RPO di 15Mn__ e un __RTO inferiore a 4H__. Consente di ripartire molto più rapidamente rispetto
all'esecuzione di un ripristino da backup.

In un volume di storage in replicazione asincrona (__Global Mirror__), i controller di virtualizzazione SAN delle
due zone di disponibilità lavorano di concerto per eseguire le operazioni di scrittura sui due siti.
Il sito master non attende la conferma di scrittura del sito slave.

Le fasi di un'operazione di scrittura sono le seguenti:

1. Un hypervisor desidera eseguire __un'operazione di scrittura su un volume Global-Mirror__: invia la sua richiesta al controller SAN della propria zona di disponibilità,
2. Il controller SAN locale chiede al controller SAN della zona remota di eseguire l'operazione di scrittura,
3. il controller SAN locale non attende la conferma della SAN remota ed esegue quindi la scrittura in locale,
4. Invia la __conferma__ all'hypervisor che ha emesso la richiesta,
5. __Gli hypervisor del sito remoto non accedono direttamente alla LUN Global Mirror__: è necessaria una richiesta di servizio.

| Obiettivo | Descrizione                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In caso di sinistro sul datacenter principale, la quantità massima di dati persi corrisponde al massimo agli ultimi 15 minuti di scrittura        |
| RTO < 4H  | In caso di sinistro sul datacenter principale, la ripresa dell'attività è garantita entro 4 ore in base alla complessità degli ambienti.           |

In caso di attivazione del piano di disaster recovery, il team di Cloud Temple esegue un'operazione di presentazione della LUN __'Global Mirror'__ agli hypervisor remoti affinché possano accedere ai dati. L'implementazione di questa soluzione richiede quindi di aver riservato sul sito 'standby' risorse di calcolo e RAM per riprendere l'attività in caso di sinistro.

L'utilizzo di questa tecnologia richiede inoltre il raddoppio dello spazio su disco: è necessario disporre esattamente dello stesso spazio sul sito remoto e sul sito locale.

L'utilizzo di questo meccanismo può incidere sulle prestazioni dell'applicazione fino al 10 %. __Sono compatibili solo le classi di storage 500 Iops/TB, 1500 Iops/TB e 3000 Iops/TB.__


*__Nota__* :

- *Essendo l'offerta asincrona, durante un sinistro è possibile che alcune operazioni su disco non siano state scritte sul sito remoto. Può quindi esistere un rischio per la coerenza dei dati, da mitigare nell'analisi dei rischi del piano di disaster recovery.*
- *La replicazione dello storage in modalità a blocchi avviene in modo trasparente per le macchine virtuali e le applicazioni,*
- *Per questo motivo, è importante privilegiare gli scenari di replicazione applicativa o eventualmente di replicazione di macchine virtuali,*
- *Il calcolo e la memoria sul sito di ripresa possono essere ridotti per ottimizzare i costi se una situazione degradata è accettabile per il business durante l'esecuzione del piano di disaster recovery.*

### Replicazione asincrona delle vostre macchine virtuali in ambiente VMware

La replicazione asincrona delle vostre macchine virtuali è un meccanismo che consiste nell'inviare, a livello dell'hypervisor di origine, le operazioni di scrittura al sito standby a intervalli di tempo regolari.

Dopo una copia iniziale a caldo dell'intero storage attivo sul sito standby, solo le scritture vengono inviate a intervalli regolari al sito dormiente.
Questo intervallo dipende dal volume di scrittura (da ogni ora a ogni 24 ore).

La replicazione delle macchine virtuali si basa sul meccanismo di istantanea dell'hypervisor. Per questo motivo,
questa soluzione presenta gli stessi inconvenienti, in particolare la sensibilità al volume di scritture della macchina virtuale,
essendo il processo di istantanea un meccanismo ricorsivo per la chiusura dell'istantanea.

L'esempio tipico di macchina che non supporta il meccanismo di replicazione delle macchine virtuali è un
server FTP che riceve i flussi in tempo reale di telecamere di sorveglianza. __La macchina passa il tempo a scrivere e non sarà
in grado di chiudere un'istantanea senza mettere in pausa il sistema operativo per un periodo di tempo significativo
(diverse decine di minuti)__. Se l'hypervisor non riesce a chiudere l'istantanea, è esattamente ciò che farà,
senza possibilità di intervenire se non corrompendo la macchina virtuale.

| Obiettivo       | Descrizione                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO da 1H a 24H | In caso di sinistro sul datacenter principale, la quantità massima di dati persi è quella dell'ultimo invio delle scritture sul sito standby.              |
| RTO  < 15mn     | Operazione di avvio della macchina virtuale arrestata sul sito remoto                                                                                     |

In caso di necessità, o in caso di guasto di una macchina del sito principale, viene attivata la macchina mirror sul sito standby.
La ripresa dell'attività richiede di aver riservato sul sito standby calcolo e RAM in standby. È
necessario disporre dello stesso spazio di storage sul sito passivo e sul sito attivo.


*__Nota__ : Il calcolo del RPO minimo deve essere definito in funzione del tasso di modifica della macchina virtuale.*

## Disponibilità del servizio

| Elemento             | Obiettivo di disponibilità, misurato su un mese |
|----------------------|-------------------------------------------------|
| Calcolo              | 99,99 %, finestre di manutenzione incluse       |
| Storage a blocchi    | 99,99 %, finestre di manutenzione incluse       |

L'obiettivo di disponibilità del calcolo presuppone almeno due hypervisor per cluster, con la funzionalità __High Availability__ (HA) attivata: essa riavvia automaticamente le vostre macchine virtuali su un altro hypervisor. In una zona di disponibilità che contiene un solo hypervisor, il riavvio automatico non è possibile. Qualsiasi richiesta relativa alla disponibilità deve essere dichiarata tramite un ticket di incidente.

## Responsabilità

La ripartizione delle responsabilità tra il cliente e Cloud Temple è dettagliata nella [matrice delle responsabilità (RACI) IaaS](../contractual/iaas/raci.md).

## Reversibilità

| Operazione                  | Deliverable                    | Tempistica    | Costo           |
|-----------------------------|--------------------------------|---------------|-----------------|
| Esportazione delle VM       | Formati VMware (OVF/VMDK)      | 30 giorni     | Senza costi     |
| Assistenza alla migrazione  | Supporto tecnico               | Su richiesta  | Su preventivo   |
| Cancellazione sicura        | Certificato di distruzione     | 7 giorni      | Incluso         |

## Prezzi

I prezzi dell'offerta IaaS VMware non sono pubblicati. Per conoscere le modalità di tariffazione, contattate il servizio commerciale di Cloud Temple:
[contattateci](https://www.cloud-temple.com/contactez-nous/).
