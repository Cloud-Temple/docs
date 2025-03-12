---
title: Concetti
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per rispondere alle esigenze critiche di continuità e ripresa delle attività, con particolare attenzione ai settori esigenti come l'industria, le banche e le assicurazioni. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce la massima disponibilità e prestazioni ottimali per i vostri carichi di lavoro critici.

## Una piattaforma tecnologica affidabile

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ per lo storage a blocchi.
- Rete: __JUNIPER__.
- Virtualizzazione: __VMware__, che fornisce una base affidabile e collaudata per gestire i vostri ambienti cloud.
- Backup: __IBM Spectrum Protect Plus__, per l'orchestrazione e lo storage dei backup.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, garantendo un'ampia compatibilità con i principali fornitori di software.

## Un'infrastruttura dedicata e automatizzata

Sebbene completamente automatizzata tramite API e un provider Terraform, l'offerta IaaS di Cloud Temple fornisce un'infrastruttura unica:

- __Risorse dedicate__: Le lame di calcolo, i volumi di storage e gli stack software (virtualizzazione, backup, firewall, ecc.) non sono mai condivisi tra i clienti.
- __Massima prevedibilità__: Controllate i tassi di virtualizzazione, la pressione IOPS sullo storage e beneficiate di una fatturazione chiara, basata sul consumo mensile.

La piattaforma è qualificata __SecNumCloud__ dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Caratteristiche principali

- Risorse di calcolo dedicate e on-demand (CPU, RAM).
- Storage on-demand (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Backup incrociati con conservazione configurabile.
- Replica asincrona per storage o macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) o in modalità Infrastructure as Code utilizzando API e il provider Terraform.

## Vantaggi

| Vantaggio           | Descrizione                                                                                                                                  |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale    | Hosting dei dati in Francia e conformità GDPR.                                                                                               |
| Sicurezza           | Piattaforma altamente sicura, qualificata __SecNumCloud__, __HDS__ (Hosting di Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__.        |
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, finestre di manutenzione incluse.                                 |
| Resilienza          | Implementazione di piani di continuità o ripresa delle attività in base alle esigenze.                                                        |
| Automazione         | Piattaforma completamente automatizzata pensata per integrarsi in un programma di trasformazione digitale.                                    |
| On demand           | Risorse disponibili su richiesta.                                                                                                            |

## Regioni e zone di disponibilità

Il prodotto IaaS VMware viene distribuito in una zona di disponibilità.
Una [zona di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Questo tipo di distribuzione consente di scegliere la posizione dei cluster e di distribuirli su diverse zone di disponibilità (AZ).
Ciò offre una migliore distribuzione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di ripristino di emergenza (DRP) in caso di incidente.

---

## Calcolo

Le lame fornite da Cloud Temple sono di tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Sono completamente gestite da Cloud Temple (firmware, versione del sistema operativo, ecc.) attraverso la console Cloud Temple.

Diverse categorie di lame di calcolo sono disponibili nel catalogo per supportare i vostri carichi di lavoro (Virtualizzazione, Containerizzazione, ecc.).
Queste presentano caratteristiche e prestazioni diverse per rispondere al meglio alle vostre esigenze. Il catalogo delle lame di calcolo si evolve regolarmente.

Nel contesto dell'uso con un'offerta di virtualizzazione, un cluster di hypervisor è composto unicamente da lame di calcolo dello stesso tipo (non è possibile mescolare lame di diversi tipi nello stesso cluster).

| Riferimento           | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU __(4)__          | SKU per l'offerta VMware      |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Lama ECO v3           | 384 GB       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Lama STANDARD v3      | 384 GB       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Lama ADVANCE v3       | 768 GB       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Lama PERFORMANCE 1 v3 | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Lama PERFORMANCE 2 v3 | 768 GB       | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Lama PERFORMANCE 3 v3 | 1536 GB      | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Lama PERFORMANCE 4 v3 | 512 GB       | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Note__:

- __(1)__ La quantità di memoria fornita è quella fisicamente disponibile sulle lame. Non è possibile modificare la quantità fisica di memoria di una lama.

- __(2)__ La frequenza base minima / frequenza turbo, espressa in GHz. Per impostazione predefinita, i processori sono configurati per le massime prestazioni a livello BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e l'accesso allo storage a blocchi, poiché la piattaforma CISCO è convergente.

- __(4)__ L'offerta GPU disponibile evolve continuamente. Dal 1° maggio 2024, l'offerta si basa sulle GPU NVIDIA LOVELACE L40S. Per impostazione predefinita, la lama PERF4 viene fornita con 2 schede L40S da 48 GB di RAM. Contattate il supporto per maggiori dettagli se necessario.

La disponibilità dell'offerta di calcolo è del 99,99%, calcolata mensilmente, finestre di manutenzione incluse. L'idoneità in caso di mancato rispetto dell'SLA è soggetta
alla creazione di un ticket di incidente. È inoltre necessario avere almeno due host per cluster e attivare la funzione __High Availability__ (HA).
Questa funzione consente alla vostra architettura di riavviare automaticamente le vostre macchine virtuali sul secondo hypervisor.
Nel caso in cui una zona di disponibilità contenga un solo hypervisor, il riavvio automatico non è possibile.

## Rete

Il servizio di rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete basata sulla tecnologia VPLS, offrendo una segmentazione flessibile e performante per rispondere alle esigenze dei clienti in termini di connettività e isolamento di rete.

### VLAN di livello 2

Le VLAN fornite nell'offerta IaaS sono di tipo __livello 2__, offrendo un isolamento di rete completo e una configurazione adattabile in base alle esigenze.

#### Concetti principali

- __Condivisione tra cluster e zone di disponibilità (AZ)__:
  - Le VLAN possono essere condivise tra diverse AZ e diversi cluster appartenenti allo stesso tenant.
- __Propagazione inter-tenant__:
  - Le VLAN possono essere propagate tra più tenant appartenenti alla stessa organizzazione, facilitando le comunicazioni interne.

---

### Prestazioni di rete

L'infrastruttura di rete garantisce una bassa latenza per prestazioni ottimali:

- __Latenza intra-AZ__: Inferiore a __3 ms__.
- __Latenza inter-AZ__: Inferiore a __5 ms__.

---

### Punti chiave

1. __Flessibilità__: Le VLAN possono essere configurate per adattarsi ad ambienti multi-cluster e multi-tenant.
2. __Alte prestazioni__: Una latenza minima assicura una comunicazione rapida ed efficiente tra le zone di disponibilità.
3. __Isolamento e sicurezza__: Le VLAN di livello 2 offrono una segmentazione di rete rigorosa per proteggere i dati e i flussi.

---

## Storage a blocchi

Cloud Temple offre diverse classi di storage basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/)
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ permette di fornire il livello di prestazioni richiesto per gli ambienti dei nostri clienti grazie alla grande
quantità di memoria cache incorporata nei controller e alla possibilità di distribuire tutti gli IOPS
di un server su più SAN.

Viene anche utilizzata per consentire la replica delle vostre LUN di storage a blocchi tra
zone di disponibilità o facilitare gli interventi sugli array di storage.

Lo storage è principalmente di tipo FLASH NVME dedicato ai carichi di lavoro professionali.
I dischi sono utilizzati dagli array di storage in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La classe di storage __'Mass Storage'__ offre dischi meccanici per le esigenze di archiviazione
in un contesto di efficienza economica. Sono disponibili diversi livelli di prestazioni:

| Riferimento                       | Unità | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/TB   | 1 GB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/TB   | 1 GB | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GB | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archiviazione      | 1 TB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *Le prestazioni effettive per una classe di storage sono legate al volume effettivamente ordinato, secondo la nozione "IOPS/TB", intesa come "limite di IOPS per Tera allocato",*

> *Così, un volume di 0,5TB nella classe di prestazioni 'Standard' avrà una limitazione di IOPS con un tetto di 750 IOPS,*
> *Allo stesso modo, un volume di 10TB nella classe di prestazioni 'Ultra' avrà una limitazione di IOPS fino a 150.000 IOPS,*

- *La limitazione di IOPS è applicata al volume, quindi alla nozione di Datastore per un ambiente VMware,*
- *La disponibilità dello storage è del 99,99% misurata mensilmente, finestre di manutenzione incluse,*
- *Non ci sono restrizioni o quote sulla lettura o scrittura,*
- *Non c'è fatturazione per IOPS,*
- *Non c'è impegno di prestazioni sulla classe __'Mass Storage'__,*
- *La dimensione minima di una LUN di storage è di 500GB,*
- *Quando si utilizza un meccanismo di replica dello storage, le prestazioni devono essere identiche su entrambe le zone di disponibilità,*
- *Non viene implementato alcun meccanismo di ottimizzazione "intelligente" come compressione o deduplicazione: quando si riservano 10TB di storage, si hanno fisicamente 10TB utili di storage implementati sulle macchine IBM.*
- *Le LUN di storage sono dedicate all'ambiente del cliente.*

### Utilizzo nel contesto dell'offerta di calcolo VMware

Nel contesto dell'utilizzo dello storage a blocchi sotto forma di datastore nell'offerta di calcolo VMware di Cloud Temple, __dovete tenere conto di diverse considerazioni importanti__:

1. __File di swap (.VSWP) all'avvio delle macchine virtuali__: Quando una macchina virtuale si avvia, crea un file .VSWP delle dimensioni della sua memoria sul disco. Pertanto, per poter avviare le vostre macchine virtuali, dovete sempre disporre nel vostro datastore di uno spazio libero equivalente alla somma delle dimensioni di memoria delle vostre macchine virtuali. Ad esempio, se il vostro datastore dispone di 1 TB di storage a blocchi e desiderate avviare 10 macchine virtuali da 64 GB di memoria ciascuna, saranno necessari 640 GB di spazio su disco. Senza questo spazio, l'avvio delle macchine sarà limitato dalla capacità disponibile per creare i file di swap.

2. __Spazio libero per gli snapshot di backup__: Il servizio di backup utilizza snapshot istantanei. Dovete quindi sempre avere abbastanza spazio libero per consentire la creazione di uno snapshot durante il backup di una macchina virtuale. La dimensione dello snapshot dipende dal volume di scrittura della macchina virtuale e dal tempo necessario per effettuare il backup. Come regola generale, si raccomanda di mantenere almeno il 10% di spazio libero per questa operazione.

3. __Gestione dei dischi dinamici__: Fate attenzione con l'uso dei dischi dinamici. Se non controllate la loro crescita, una mancanza di spazio fisico può causare un congelamento (freeze) della macchina virtuale nel migliore dei casi, o un crash con corruzione nel peggiore dei casi. È cruciale monitorare attentamente lo spazio disponibile sui vostri datastore quando utilizzate questo tipo di disco.

Una gestione proattiva dello spazio su disco è essenziale per garantire il buon funzionamento delle vostre macchine virtuali e l'affidabilità dei backup. Assicuratevi di disporre sempre dello spazio necessario per i file di swap, gli snapshot e la crescita dei dischi dinamici.

## Storage in modalità backup

Lo storage dedicato al backup delle vostre macchine virtuali è auto-approvvigionato dalla piattaforma entro il limite della quota ordinata.

| Riferimento                | Unità | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archiviazione | 1 TB | csp:(region):iaas:storage:bloc:backup:v1 |

### Replica dello storage a blocchi

#### Principi

Per consentire l'implementazione dei vostri piani di ripristino di emergenza, quando non è possibile essere in
una situazione di continuità operativa con meccanismi applicativi e quando la replica delle macchine virtuali
non è adatta, Cloud Temple offre __meccanismi di replica dello storage a blocchi tra le zone di disponibilità di una regione__.

Questi meccanismi di replica sono applicati alle LUN di storage dei vostri ambienti, in aggiunta ai backup.
La scelta di utilizzare un meccanismo di replica su un ambiente __dipende da numerosi fattori tra cui la sua criticità, la perdita di dati tollerata o le prestazioni mirate__ per l'applicazione.

Cloud Temple offre due tipi di meccanismi distribuiti in una configurazione attivo/passivo:

- La replica __asincrona__ (o __'Global Mirror'__): *La funzione __'Global Mirror'__ fornisce un processo di copia asincrono.
Quando un host scrive sul volume primario, la conferma del completamento dell'I/O viene ricevuta prima che l'operazione
di scrittura sia completata per la copia sul volume secondario. Se viene avviata un'operazione di failover, l'applicazione
deve recuperare e applicare tutti gli aggiornamenti che non sono stati confermati sul volume secondario.
Se le operazioni di I/O sul volume primario vengono messe in pausa per un breve periodo,
il volume secondario può diventare una corrispondenza esatta del volume primario. Questa funzione è paragonabile a un processo
di backup continuo in cui gli ultimi aggiornamenti sono sempre mancanti.
Quando si utilizza Global Mirror per scopi di ripristino di emergenza, è necessario riflettere su come si desidera gestire questi aggiornamenti mancanti.*

- La replica __sincrona__ (o __'Metro Mirror'__): *La funzione __'Metro Mirror'__ è un tipo di copia remota che crea una copia sincrona
dei dati da un volume primario a un volume secondario. Con copie sincrone, le applicazioni host scrivono sul volume primario, ma non ricevono conferma
che l'operazione di scrittura è completata finché i dati non sono scritti sul volume secondario. Questo garantisce che entrambi i volumi contengano dati identici quando
l'operazione di copia è completata. Dopo che l'operazione di copia iniziale è completata, la funzione Metro Mirror
mantiene permanentemente una copia completamente sincronizzata dei dati di origine sul sito di destinazione. __Dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più commercializzata.__*

Si definisce quindi un sito detto "attivo" o "principale" e un sito "passivo" o "standby".
Il piano di ripristino di emergenza viene attivato in caso di sinistro o nell'ambito di una richiesta di test del PRA.
Il sito passivo prende quindi il posto del sito attivo.

#### Replica asincrona

Quando i vostri carichi di lavoro richiedono tempi di ripresa delle attività brevi e non è accettabile
o adatto utilizzare meccanismi di tipo replicazioni applicative / replica di macchine virtuali,
è possibile replicare una LUN di storage SAN tra due zone di disponibilità della stessa regione.

Questa offerta permette di ottenere un __RPO di 15 minuti__ e un __RTO inferiore a 4 ore__. Permette di ripartire molto più rapidamente rispetto
all'implementazione di un ripristino da backup.

In un volume di storage in replica asincrona (__Global Mirror__), i controller di virtualizzazione SAN delle
due zone di disponibilità lavorano insieme per realizzare le operazioni di scrittura su entrambi i siti.
Il sito master non attende la conferma di scrittura dal sito slave.

Le fasi di un'operazione di scrittura sono le seguenti:

1. Un hypervisor desidera realizzare __un'operazione di scrittura su un volume Global-Mirror__: invia la sua richiesta al controller SAN della sua zona di disponibilità,
2. Il controller SAN locale chiede al controller SAN della zona remota di realizzare l'operazione di scrittura,
3. Il controller SAN locale non attende la conferma dal SAN remoto e realizza quindi la scrittura localmente,
4. Dà __conferma__ all'hypervisor che ha emesso la richiesta,
5. __Gli hypervisor del sito remoto non accedono direttamente alla LUN Global Mirror__: È necessaria una richiesta di servizio.

| SLA       | Descrizione                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15min | In caso di sinistro sul datacenter principale, la quantità massima di dati persi corrisponde al massimo agli ultimi 15 minuti di scrittura        |
| RTO < 4H  | In caso di sinistro sul datacenter principale, la ripresa delle attività è garantita entro 4 ore a seconda della complessità degli ambienti        |

In caso di attivazione del PRA, il team di Cloud Temple realizza un'operazione di presentazione della LUN __'Global Mirror'__ agli hypervisor remoti affinché possano accedere ai dati. L'implementazione di questa soluzione richiede quindi di aver riservato sul sito 'standby' risorse di calcolo e RAM per riprendere l'attività in caso di sinistro.

L'uso di questa tecnologia richiede anche il raddoppio dello spazio su disco: è necessario avere esattamente lo stesso spazio sul sito remoto come sul sito locale.

L'uso di questo meccanismo può impattare le prestazioni dell'applicazione fino al 10%. __Solo le classi di storage 500 Iops/TB, 1500 Iops/TB e 3000 Iops/TB sono compatibili.__

| Riferimento                          | Unità  | SKU                                               |
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Replica Globale SAN      | 1 TB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *Essendo l'offerta asincrona, è possibile che durante un sinistro alcune operazioni su disco non siano state scritte sul sito remoto. Può quindi esserci un rischio per la coerenza dei dati, da mitigare nell'analisi dei rischi del piano di ripristino di emergenza.*
- *La replica dello storage a blocchi avviene in modo nascosto per le macchine virtuali e le applicazioni,*
- *A tal proposito, è importante privilegiare gli scenari di replica applicativa o eventualmente di replica di macchina virtuale,*
- *Il calcolo e la memoria, sul sito di ripristino, possono essere ridotti per ottimizzare i costi se una situazione degradata è accettabile per il business durante l'azione del piano di ripristino di emergenza.*

## Virtualizzazione VMware

L'offerta di virtualizzazione VMware di Cloud Temple qualificata SecNumCloud si basa sulla tecnologia __VMware Vsphere__.

La piattaforma è gestita da Cloud Temple in modo automatico (mantenimento delle condizioni di sicurezza, mantenimento in condizioni operative, ecc.).
È controllabile tramite l'interfaccia grafica della console Shiva o tramite le API associate.

*__Nota__* : *Per ragioni di sicurezza legate alla qualificazione SecNumCloud,
__non è possibile per il cliente accedere direttamente alla piattaforma di virtualizzazione VMware__ (nessun accesso diretto al vCenter in particolare).
Infatti, la qualificazione SecNumCloud impone __una totale segregazione__ tra le interfacce di controllo degli asset tecnici e l'interfaccia del cliente (la console Shiva).*

- I prodotti implementati sono VMware ESXi, VMware Vcenter e VMware Replication.
- *La rete dell'offerta di virtualizzazione non utilizza la tecnologia VMware NSX, ma è controllata materialmente dalla tecnologia Juniper e dal protocollo VPLS.*
- *Lo storage non utilizza la tecnologia VMWare vSan, ma unicamente SAN IBM in fiber channel 32G.*
- *Non viene implementata alcuna forma di ottimizzazione nascosta (compressione, deduplicazione, ...).*

### Definizione di un cluster di lame di calcolo ('Cpool')

Il __'Cpool'__ è un raggruppamento di hypervisor VMware ESXi, noto anche come *'cluster ESX'*.

Gli host presenti in un __'Cpool'__ appartengono tutti __allo stesso tenant e alla stessa zona di disponibilità__ (AZ). Devono necessariamente avere la stessa classe:
__non è possibile mescolare diversi modelli di lame di calcolo all'interno dello stesso cluster__.

Poiché tutte le lame di calcolo vengono consegnate con il massimo fisico di memoria, viene applicata una limitazione dell'uso della RAM logicamente a livello del cluster per assicurarsi che corrisponda alla RAM fatturata.

Per impostazione predefinita, ogni lama dispone di 128 GB di memoria attivata all'interno del __'Cpool'__.

Un __'Cpool'__ può contenere un massimo di 32 hypervisor. Oltre questo limite, sarà necessario creare un secondo cluster.

Lo storage può essere condiviso tra i __'Cpool'__.

### Allocazione della memoria per un 'Cpool'

La prenotazione della RAM è configurabile per cluster. È possibile ridurre o aumentare la quantità di RAM per farla corrispondere alle vostre esigenze a livello di cluster.

__Attenzione a non superare una media dell'85% di consumo di memoria per lama di calcolo__.
Infatti, la tecnologia VMware utilizzerà un metodo di ottimizzazione di tipo compressione che può impattare fortemente le prestazioni dei vostri carichi di lavoro e complicare la diagnosi.
Allo stesso modo, una pressione di memoria troppo forte sulle vostre lame di calcolo costringerà l'hypervisor a scaricare una parte della sua memoria su disco per rispondere alle esigenze delle macchine virtuali.

Questo caso, chiamato __'Ballooning'__, impatta molto fortemente l'insieme delle prestazioni delle macchine virtuali situate sullo storage (datastore) interessato.
__La diagnosi è complicata in questo contesto__, poiché la vostra metrologia constaterà impatti a livello CPU e non della memoria o dello storage.
Tenete anche presente che la prima cosa che fa l'hypervisor all'avvio di una macchina virtuale è creare __un file di swap di memoria__ (.vswap) su
disco, delle dimensioni della memoria della macchina virtuale interessata. Dovete __tenerne conto nel dimensionamento del vostro storage__.

Ogni lama di calcolo viene consegnata con 128GB di memoria attivata logicamente a livello del __'Cpool'__ ma dispone fisicamente della totalità della memoria allocabile.

Ad esempio, per un cluster di tre host di tipo ```vmware:standard:v2```, la prenotazione della RAM all'attivazione del _*'Cpool'* sarà di 3 x 128GB = 384 GB di RAM.
Potrete estenderla fino a un massimo di 3 x 384GB = 1152GB di memoria.

    Minimo di memoria di un 'Cpool' = numero di host X 128GB di memoria
    Massimo di memoria di un 'Cpool' = numero di host X la quantità di memoria fisica della lama di calcolo

### Cataloghi di macchine virtuali Cloud Temple

Cloud Temple mette a vostra disposizione un catalogo di `Templates` regolarmente arricchito e aggiornato dai nostri team.
Comprende ad oggi diverse decine di `Templates` e immagini da montare sulle vostre macchine virtuali.

### Aggiornamento degli Hypervisor

Cloud Temple fornisce regolarmente build per gli hypervisor al fine di garantire l'applicazione delle patch di sicurezza.
Tuttavia, l'aggiornamento degli hypervisor rimane sotto la vostra responsabilità, poiché non abbiamo visibilità sulle vostre limitazioni di business.

Il processo di aggiornamento è completamente automatizzato. Per garantire una continuità di servizio, è richiesto un minimo di due hypervisor per cluster durante l'aggiornamento. Assicuratevi di disporre delle autorizzazioni necessarie per effettuare queste azioni.

### Gestione dell'affinità delle vostre macchine virtuali

Le __regole di affinità e anti-affinità__ permettono di controllare il posizionamento delle macchine virtuali sui vostri hypervisor.
Possono essere utilizzate per gestire l'utilizzo delle risorse del vostro __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico di lavoro tra i server o a isolare i carichi di lavoro che consumano molte risorse.
In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion permette di spostare le macchine virtuali da un host all'altro senza interruzione del servizio.

Potete configurare grazie alla gestione delle regole:

- __Regole di Affinità__: Queste regole assicurano che certe macchine virtuali siano eseguite sullo stesso host fisico.
Sono utilizzate per migliorare le prestazioni mantenendo le macchine virtuali che comunicano frequentemente
insieme sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili in scenari
dove le prestazioni
