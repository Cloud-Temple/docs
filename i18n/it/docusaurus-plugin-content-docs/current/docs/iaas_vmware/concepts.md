---
title: Concetti
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per soddisfare le esigenze critiche di continuità operativa e ripristino di emergenza, con un'attenzione particolare ai settori esigenti come l'industria, le banche e le assicurazioni. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce la massima disponibilità e prestazioni ottimali per i vostri carichi di lavoro critici.

## Una piattaforma tecnologica affidabile

La piattaforma IaaS di Cloud Temple si affida a partner tecnologici di fama internazionale:

- Calcolo: __CISCO UCS__.
- Archiviazione: __IBM Spectrum Virtualize__, __IBM FlashSystem__ per l'archiviazione a blocchi.
- Rete: __JUNIPER__.
- Virtualizzazione: __VMware__, che fornisce una base affidabile e collaudata per la gestione dei vostri ambienti cloud.
- Backup: __IBM Spectrum Protect Plus__, per l'orchestrazione e l'archiviazione dei backup.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, che garantisce un'ampia compatibilità con i principali fornitori di software.

## Un'infrastruttura dedicata e automatizzata

Sebbene completamente automatizzata tramite API e un provider Terraform, l'offerta IaaS di Cloud Temple offre un'infrastruttura unica:

- __Risorse dedicate__: Le lame di calcolo, i volumi di archiviazione e gli stack software (virtualizzazione, backup, firewall, ecc.) non vengono mai condivisi tra i clienti.
- __Massima prevedibilità__: Controllate i tassi di virtualizzazione, la pressione IOPS sull'archiviazione e beneficiate di una fatturazione chiara e basata sul consumo mensile.

La piattaforma è certificata __SecNumCloud__ da [ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Caratteristiche principali

- Risorse di calcolo dedicate e su richiesta (CPU, RAM).
- Archiviazione su richiesta (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Backup incrociati con conservazione configurabile.
- Replica asincrona per l'archiviazione o le macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) o in modalità Infrastructure as Code utilizzando API e il provider Terraform.

## Vantaggi

| Vantaggio           | Descrizione                                                                                                                                  |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale    | Hosting dei dati in Francia e conformità al GDPR.                                                                                            |
| Sicurezza           | Piattaforma altamente sicura, certificata __SecNumCloud__, __HDS__ (Hosting di dati sanitari), __ISO 27001__ e __ISAE 3402 tipo II__.         |
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, comprese le finestre di manutenzione.                               |
| Resilienza          | Implementazione di piani di continuità operativa o di ripristino di emergenza secondo necessità.                                             |
| Automazione         | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                  |
| Su richiesta        | Risorse disponibili su richiesta.                                                                                                            |

## Regioni e zone di disponibilità

Il prodotto IaaS VMware è distribuito in una zona di disponibilità.
Una [zona di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Questo tipo di distribuzione consente di scegliere la posizione dei cluster e di distribuirli in diverse zone di disponibilità (AZ).
Ciò garantisce un migliore bilanciamento del carico, massimizza la ridondanza e facilita l'implementazione di un piano di ripristino di emergenza (DRP) in caso di incidente.

---

## Calcolo

Le lame fornite da Cloud Temple sono di tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Sono completamente gestite da Cloud Temple (firmware, versione del sistema operativo, ecc.) tramite la console di Cloud Temple.

Nel catalogo sono disponibili diverse categorie di lame di calcolo per supportare i vostri carichi di lavoro (Virtualizzazione, Containerizzazione, ...).
Queste hanno caratteristiche e prestazioni diverse per soddisfare al meglio le vostre esigenze. Il catalogo delle lame di calcolo viene aggiornato regolarmente.

Quando utilizzato con un'offerta di virtualizzazione, un cluster di hypervisor è composto esclusivamente da lame di calcolo dello stesso tipo (non è possibile mescolare diversi tipi di lame nello stesso cluster).

| Riferimento           | RAM  __(1)__ | Frequenza __(2)__                         | Core / Thread | Connettività __(3)__ | GPU __(4)__          | SKU per l'offerta VMware    |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Lama ECO v3           | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)   | 20 / 40 thread             | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Lama STANDARD v3      | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)   | 32 / 64 thread             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Lama ADVANCE v3       | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)     | 48 / 96 thread             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Lama PERFORMANCE 1 v3 | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)  | 16 / 32 thread             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Lama PERFORMANCE 2 v3 | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)     | 36 / 72 thread             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Lama PERFORMANCE 3 v3 | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)     | 56 / 112 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Lama PERFORMANCE 4 v3 | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)   | 32 / 64 thread             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Note__:

- __(1)__ La quantità di memoria fornita è quella fisicamente disponibile sulle lame. Non è possibile modificare la quantità fisica di memoria di una lama.

- __(2)__ La frequenza di base minima / frequenza turbo, espressa in GHz. Per impostazione predefinita, i processori sono configurati per le massime prestazioni a livello di BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e l'accesso all'archiviazione a blocchi, poiché la piattaforma CISCO è convergente.

- __(4)__ L'offerta di GPU effettivamente disponibile è in continua evoluzione. A partire dal 1° maggio 2024, l'offerta si basa sulle GPU NVIDIA LOVELACE L40S. Per impostazione predefinita, la lama PERF4 viene fornita con 2 schede L40S da 48 GB di RAM. Contattare il supporto per maggiori dettagli se necessario.

La disponibilità dell'offerta di calcolo è del 99,99%, calcolata mensilmente, comprese le finestre di manutenzione. L'idoneità in caso di non conformità allo SLA è soggetta
alla creazione di un ticket di incidente. È inoltre necessario disporre di almeno due host per cluster e abilitare la funzione di __Alta Disponibilità__ (HA).
Questa funzione consente alla vostra architettura di riavviare automaticamente le vostre macchine virtuali sul secondo hypervisor.
Se una zona di disponibilità contiene un solo hypervisor, il riavvio automatico non è possibile.

## Rete

Il servizio di rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete che utilizza la tecnologia VPLS, offrendo una segmentazione flessibile e ad alte prestazioni per soddisfare le esigenze dei clienti in termini di connettività e isolamento della rete.

### VLAN di livello 2

Le VLAN fornite nell'offerta IaaS sono di __Livello 2__, offrendo un isolamento di rete completo e una configurazione adattabile in base alle esigenze.

#### Concetti chiave

- __Condivisione tra cluster e zone di disponibilità (AZ)__:
  - Le VLAN possono essere condivise tra diverse AZ e diversi cluster appartenenti allo stesso tenant.
- __Propagazione tra tenant__:
  - Le VLAN possono essere propagate tra più tenant appartenenti alla stessa organizzazione, facilitando le comunicazioni interne.

---

### Prestazioni di rete

L'infrastruttura di rete garantisce una bassa latenza per prestazioni ottimali:

- __Latenza intra-AZ__: Inferiore a __3 ms__.
- __Latenza inter-AZ__: Inferiore a __5 ms__.

---

### Punti chiave

1. __Flessibilità__: Le VLAN possono essere configurate per adattarsi ad ambienti multi-cluster e multi-tenant.
2. __Alte prestazioni__: La latenza minima garantisce una comunicazione rapida ed efficiente tra le zone di disponibilità.
3. __Isolamento e sicurezza__: Le VLAN di livello 2 offrono una segmentazione di rete rigorosa per proteggere dati e traffico.

---

## Archiviazione a blocchi

Cloud Temple offre diverse classi di archiviazione basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/)
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ offre il livello di prestazioni richiesto per gli ambienti dei nostri clienti grazie alla grande
quantità di memoria cache integrata nei controller e alla capacità di distribuire tutti gli IOPS
di un server su più SAN.

Viene anche utilizzata per consentire la replica dei vostri LUN di archiviazione a blocchi tra
le zone di disponibilità o per facilitare gli interventi sugli array di archiviazione.

L'archiviazione è principalmente di tipo FLASH NVME dedicata ai carichi di lavoro professionali.
I dischi sono utilizzati dagli array di archiviazione in [__'RAID 6 distribuito'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La classe di archiviazione __'Mass Storage'__ offre dischi meccanici per esigenze di archiviazione
in un contesto di efficienza economica. Sono disponibili diversi livelli di prestazioni:

| Riferimento                         | Unità | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essenziale - 500 IOPS/TB  | 1 GiB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/TB   | 1 GiB | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GiB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GiB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GiB | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archiviazione      | 1 TiB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__:*

- *Le prestazioni effettive per una classe di archiviazione sono legate al volume effettivamente ordinato, secondo la nozione di "IOPS/TB", che significa "limite di IOPS per Tera allocato",*

> *Pertanto, un volume di 0,5 TB nella classe di prestazioni 'Standard' avrà un limite di IOPS di 750 IOPS,*
> *Allo stesso modo, un volume di 10 TB nella classe di prestazioni 'Ultra' avrà un limite di IOPS di 150.000 IOPS,*

- *Il limite di IOPS viene applicato al volume, quindi al concetto di Datastore per un ambiente VMware,*
- *La disponibilità dell'archiviazione è del 99,99% misurata mensilmente, comprese le finestre di manutenzione,*
- *Non ci sono restrizioni o quote di lettura o scrittura,*
- *Non c'è fatturazione per IOPS,*
- *Non c'è alcun impegno di prestazioni sulla classe __'Mass Storage'__,*
- *La dimensione minima di un LUN di archiviazione è di 500 GiB,*
- *Quando si utilizza un meccanismo di replica dell'archiviazione, le prestazioni devono essere identiche in entrambe le zone di disponibilità,*
- *Non viene implementato alcun meccanismo di ottimizzazione "intelligente" come la compressione o la deduplicazione: quando si riservano 10 TiB di archiviazione, si hanno fisicamente 10 TiB di archiviazione utilizzabile implementata sulle macchine IBM.*
- *I LUN di archiviazione sono dedicati all'ambiente del cliente.*

### Utilizzo nell'ambito dell'offerta di calcolo VMware

Quando si utilizza l'archiviazione a blocchi come datastore nell'offerta di calcolo VMware di Cloud Temple, __è necessario tenere conto di diverse considerazioni importanti__:

1. __File di swap (.VSWP) all'avvio delle macchine virtuali__: Quando una macchina virtuale si avvia, crea un file .VSWP delle dimensioni della sua memoria sul disco. Pertanto, per poter avviare le vostre macchine virtuali, dovete sempre disporre di spazio libero nel vostro datastore equivalente alla somma delle dimensioni della memoria delle vostre macchine virtuali. Ad esempio, se il vostro datastore ha 1 TiB di archiviazione a blocchi e volete avviare 10 macchine virtuali con 64 GiB di memoria ciascuna, saranno necessari 640 GiB di spazio su disco. Senza questo spazio, l'avvio delle macchine sarà limitato dalla capacità disponibile per creare i file di swap.

2. __Spazio libero per le istantanee di backup__: Il servizio di backup utilizza le istantanee. Dovete quindi avere sempre abbastanza spazio libero per consentire la creazione di un'istantanea durante il backup di una macchina virtuale. La dimensione dell'istantanea dipende dal volume di scrittura della macchina virtuale e dal tempo necessario per eseguire il backup. Come regola generale, si consiglia di mantenere almeno il 10% di spazio libero per questa operazione.

3. __Gestione dei dischi dinamici__: Fate attenzione all'uso dei dischi dinamici. Se non controllate la loro crescita, una mancanza di spazio fisico può portare a un blocco della macchina virtuale nel migliore dei casi, o a un arresto anomalo con corruzione nel peggiore dei casi. È fondamentale monitorare attentamente lo spazio disponibile sui vostri datastore quando si utilizza questo tipo di disco.

Una gestione proattiva dello spazio su disco è essenziale per garantire il corretto funzionamento delle vostre macchine virtuali e l'affidabilità dei backup. Assicuratevi di avere sempre lo spazio necessario per i file di swap, le istantanee e la crescita dei dischi dinamici.

## Modalità di archiviazione di backup

L'archiviazione dedicata al backup delle vostre macchine virtuali viene fornita automaticamente dalla piattaforma fino alla quota ordinata.

| Riferimento                | Unità | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archiviazione | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |

### Replica dell'archiviazione a blocchi

#### Principi

Per consentire l'implementazione dei vostri piani di ripristino di emergenza, quando non è possibile trovarsi in
una situazione di continuità operativa con meccanismi applicativi e quando la replica delle macchine virtuali
non è adatta, Cloud Temple offre __meccanismi di replica dell'archiviazione a blocchi tra le zone di disponibilità di una regione__.

Questi meccanismi di replica vengono applicati ai LUN di archiviazione dei vostri ambienti, in aggiunta ai backup.
La scelta di utilizzare un meccanismo di replica in un ambiente __dipende da molti fattori, tra cui la sua criticità, la perdita di dati tollerata o le prestazioni mirate__ per l'applicazione.

Cloud Temple offre due tipi di meccanismi distribuiti in una configurazione attivo/passivo:

- Replica __asincrona__ (o __'Global Mirror'__): *La funzione __'Global Mirror'__ fornisce un processo di copia asincrona.
Quando un host scrive sul volume primario, la conferma del completamento dell'I/O viene ricevuta prima che l'operazione
di scrittura venga completata per la copia sul volume secondario. Se viene avviata un'operazione di failover, l'applicazione
deve recuperare e applicare tutti gli aggiornamenti che non sono stati confermati sul volume secondario.
Se le operazioni di I/O sul volume primario vengono messe in pausa per un breve periodo,
il volume secondario può diventare una corrispondenza esatta del volume primario. Questa funzione è paragonabile a un processo
di backup continuo in cui mancano sempre gli ultimi aggiornamenti.
Quando si utilizza Global Mirror per scopi di ripristino di emergenza, è necessario considerare come si desidera gestire questi aggiornamenti mancanti.*

- Replica __sincrona__ (o __'Metro Mirror'__): *La funzione __'Metro Mirror'__ è un tipo di copia remota che crea una copia sincrona
dei dati da un volume primario a un volume secondario. Con le copie sincrone, le applicazioni host scrivono sul volume primario, ma non ricevono la conferma
che l'operazione di scrittura è completata finché i dati non vengono scritti sul volume secondario. Ciò garantisce che entrambi i volumi contengano dati identici quando
l'operazione di copia è completata. Una volta completata l'operazione di copia iniziale, la funzione Metro Mirror
mantiene costantemente una copia completamente sincronizzata dei dati di origine nel sito di destinazione. __Dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più commercializzata.__*

Definiamo quindi un sito "attivo" o "primario" e un sito "passivo" o "standby".
Il piano di ripristino di emergenza viene attivato in caso di disastro o come parte di una richiesta di test del DRP.
Il sito passivo prende quindi il posto del sito attivo.

#### Replica asincrona

Quando i vostri carichi di lavoro richiedono tempi di ripristino brevi e non è accettabile
o appropriato utilizzare meccanismi come la replica di applicazioni / la replica di macchine virtuali,
è possibile replicare un LUN di archiviazione SAN tra due zone di disponibilità della stessa regione.

Questa offerta fornisce un __RPO di 15 minuti__ e un __RTO inferiore a 4 ore__. Consente un ripristino molto più rapido rispetto
all'implementazione di un ripristino da backup.

In un volume di archiviazione con replica asincrona (__Global Mirror__), i controller di virtualizzazione SAN delle
due zone di disponibilità lavorano insieme per eseguire le operazioni di scrittura su entrambi i siti.
Il sito master non attende la conferma di scrittura dal sito slave.

I passaggi di un'operazione di scrittura sono i seguenti:

1. Un hypervisor desidera eseguire __un'operazione di scrittura su un volume Global-Mirror__: invia la sua richiesta al controller SAN della sua zona di disponibilità,
2. Il controller SAN locale richiede al controller SAN della zona remota di eseguire l'operazione di scrittura,
3. Il controller SAN locale non attende la conferma dal SAN remoto e quindi esegue la scrittura localmente,
4. Dà __conferma__ all'hypervisor che ha emesso la richiesta,
5. __Gli hypervisor del sito remoto non accedono direttamente al LUN di Global Mirror__: È necessaria una richiesta di servizio.

| SLA          | Descrizione                                                                                                                                       |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15min    | In caso di disastro presso il datacenter principale, la quantità massima di dati persi corrisponde al massimo agli ultimi 15 minuti di scrittura.    |
| RTO < 4H     | In caso di disastro presso il datacenter principale, il ripristino dell'attività è garantito entro 4 ore a seconda della complessità degli ambienti. |

In caso di attivazione del DRP, il team di Cloud Temple esegue un'operazione per presentare il LUN __'Global Mirror'__ agli hypervisor remoti in modo che possano accedere ai dati. L'implementazione di questa soluzione richiede quindi di aver riservato risorse di calcolo e RAM sul sito 'standby' per riprendere l'attività in caso di disastro.

L'uso di questa tecnologia richiede anche il raddoppio dello spazio su disco: è necessario avere esattamente lo stesso spazio sul sito remoto come sul sito locale.

L'uso di questo meccanismo può influire sulle prestazioni dell'applicazione fino al 10%. __Solo le classi di archiviazione da 500 IOPS/TB, 1500 IOPS/TB e 3000 IOPS/TB sono compatibili.__

| Riferimento                         | Unità | SKU                                               |  
|-----------------------------------|-------|---------------------------------------------------|
| ARCHIVIAZIONE - Replica SAN globale | 1 TiB | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__*:

- *Poiché l'offerta è asincrona, è possibile che durante un disastro alcune operazioni su disco non siano state scritte sul sito remoto. Potrebbe quindi esserci un rischio per la coerenza dei dati, da mitigare nell'analisi dei rischi del piano di ripristino di emergenza.*
- *La replica dell'archiviazione a blocchi viene eseguita in modo trasparente per le macchine virtuali e le applicazioni,*
- *Pertanto, è importante favorire gli scenari di replica delle applicazioni o, eventualmente, la replica delle macchine virtuali,*
- *Il calcolo e la memoria sul sito di ripristino possono essere ridotti per ottimizzare i costi se una situazione degradata è accettabile per l'azienda quando viene attivato il piano di ripristino di emergenza.*

## Virtualizzazione VMware

L'offerta di virtualizzazione VMware di Cloud Temple, certificata SecNumCloud, si basa sulla tecnologia __VMware vSphere__.

La piattaforma è gestita automaticamente da Cloud Temple (mantenimento delle condizioni di sicurezza, manutenzione operativa, ...).
Può essere controllata tramite l'interfaccia grafica della console Shiva o tramite le API associate.

*__Nota__*: *Per motivi di sicurezza legati alla certificazione SecNumCloud,
__non è possibile per il cliente accedere direttamente alla piattaforma di virtualizzazione VMware__ (in particolare, nessun accesso diretto a vCenter).
Infatti, la certificazione SecNumCloud impone una __segregazione totale__ tra le interfacce di gestione degli asset tecnici e l'interfaccia del cliente (la console Shiva).*

- I prodotti implementati sono VMware ESXi, VMware vCenter e VMware Replication.
- *La rete dell'offerta di virtualizzazione non utilizza la tecnologia VMware NSX, ma è guidata dall'hardware dalla tecnologia Juniper e dal protocollo VPLS.*
- *L'archiviazione non utilizza la tecnologia VMware vSAN, ma solo SAN IBM con canale in fibra da 32G.*
- *Non viene implementata alcuna ottimizzazione nascosta (compressione, deduplicazione, ...).*

### Definizione di un cluster di lame di calcolo ('Cpool')

Un __'Cpool'__ è un gruppo di hypervisor VMware ESXi, noto anche come *'cluster ESX'*.

Gli host in un __'Cpool'__ appartengono tutti allo __stesso tenant e alla stessa zona di disponibilità__ (AZ). Devono necessariamente avere la stessa classe:
__non è possibile mescolare diversi modelli di lame di calcolo all'interno dello stesso cluster__.

Poiché tutte le lame di calcolo vengono fornite con la massima memoria fisica, viene applicata una limitazione dell'utilizzo della RAM a livello di software del cluster per garantire che corrisponda alla RAM fatturata.

Per impostazione predefinita, ogni lama ha 128 GB di memoria abilitata all'interno del __'Cpool'__.

Un __'Cpool'__ può contenere un massimo di 32 hypervisor. Oltre questo limite, sarà necessario creare un secondo cluster.

L'archiviazione può essere condivisa tra i __'Cpool'__.

### Allocazione di memoria per un 'Cpool'

La prenotazione della RAM è configurabile per cluster. È possibile ridurre o aumentare la quantità di RAM per soddisfare le proprie esigenze a livello di cluster.

__Fare attenzione a non superare un consumo medio di memoria dell'85% per lama di calcolo__.
Infatti, la tecnologia VMware utilizzerà un metodo di ottimizzazione di tipo compressione che può influire notevolmente sulle prestazioni dei vostri carichi di lavoro e complicare la diagnosi.
Allo stesso modo, una pressione di memoria troppo elevata sulle vostre lame di calcolo costringerà l'hypervisor a scaricare parte della sua memoria su disco per soddisfare le esigenze delle macchine virtuali.

Questo caso, chiamato __'Ballooning'__, influisce molto fortemente sulle prestazioni complessive delle macchine virtuali situate sull'archiviazione (datastore) interessata.
__La diagnosi è complicata in questo contesto__, poiché le vostre metriche mostreranno impatti a livello di CPU e non sulla memoria o sull'archiviazione.
Tenete inoltre presente che la prima cosa che fa l'hypervisor all'avvio di una macchina virtuale è creare __un file di swap di memoria__ (.vswap) sul
disco, delle dimensioni della memoria della macchina virtuale interessata. Dovete __tenerne conto nel dimensionamento della vostra archiviazione__.

Ogni lama di calcolo viene fornita con 128 GB di memoria abilitata a livello di software del __'Cpool'__, ma fisicamente ha la memoria totale allocabile.

Ad esempio, per un cluster di tre host di tipo ```vmware:standard:v2```, la prenotazione della RAM all'attivazione del *'Cpool'* sarà di 3 x 128 GB = 384 GB di RAM.
È possibile estenderla a un massimo di 3 x 384 GB = 1152 GB di memoria.

    Memoria minima di un 'Cpool' = numero di host X 128 GB di memoria
    Memoria massima di un 'Cpool' = numero di host X la quantità di memoria fisica della lama di calcolo

### Cataloghi di macchine virtuali di Cloud Temple

Cloud Temple vi fornisce un catalogo di `Modelli` che viene regolarmente arricchito e aggiornato dai nostri team.
Attualmente include diverse decine di `Modelli` e immagini da montare sulle vostre macchine virtuali.

### Aggiornamenti dell'hypervisor

Cloud Temple fornisce regolarmente build per gli hypervisor per garantire l'applicazione delle patch di sicurezza.
Tuttavia, l'aggiornamento degli hypervisor rimane una vostra responsabilità, poiché non abbiamo visibilità sui vostri vincoli aziendali.

Il processo di aggiornamento è completamente automatizzato. Per garantire la continuità del servizio, è necessario un minimo di due hypervisor per cluster durante l'aggiornamento. Assicuratevi di disporre delle autorizzazioni necessarie per eseguire queste azioni.

### Gestione dell'affinità della vostra macchina virtuale

Le __regole di affinità e anti-affinità__ consentono di controllare il posizionamento delle macchine virtuali sui vostri hypervisor.
Possono essere utilizzate per gestire l'utilizzo delle risorse del vostro __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico di lavoro tra i server o a isolare i carichi di lavoro ad alta intensità di risorse.
In un __'Cpool'__ VMware, queste regole vengono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion consente di spostare le macchine virtuali da un host all'altro senza interruzione del servizio.

È possibile configurare tramite la gestione delle regole:

- __Regole di affinità__: Queste regole garantiscono che determinate macchine virtuali vengano eseguite sullo stesso host fisico.
Vengono utilizzate per migliorare le prestazioni mantenendo le macchine virtuali che comunicano frequentemente
insieme sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili in scenari
in cui le prestazioni sono critiche, come nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di anti-affinità__: Al contrario, queste regole garantiscono che determinate macchine virtuali non vengano eseguite
sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, ad esempio,
per evitare che tutte le macchine critiche vengano colpite in caso di guasto di un singolo server.
Le regole di anti-affinità sono fondamentali per le applicazioni che richiedono un'elevata disponibilità,
come negli ambienti di produzione in cui la tolleranza ai guasti è una priorità.
Ad esempio, non si desidera che i due server di Active Directory si trovino sullo stesso hypervisor.

Quando si crea una regola, si definisce il tipo di regola (affinità / anti-affinità), il nome della regola,
il suo stato di attivazione (__'Stato'__) e le macchine interessate nel vostro cluster di hypervisor.

*Nota: le regole di affinità/anti-affinità offerte nella console sono regole che riguardano le macchine virtuali tra loro (non regole tra hypervisor e macchine virtuali).*

### Replica asincrona delle vostre macchine virtuali in un ambiente VMware

La replica asincrona delle vostre macchine virtuali è un meccanismo che consiste nell'inviare le operazioni di scrittura dall'hypervisor di origine al sito di standby a intervalli di tempo regolari.

Dopo una copia iniziale a caldo di tutta l'archiviazione attiva sul sito di standby, solo le scritture vengono inviate a intervalli regolari al sito inattivo.
Questo intervallo dipende dal volume di scritture (da ogni ora a ogni 24 ore).

La replica delle macchine virtuali si basa sul meccanismo di istantanee dell'hypervisor. Pertanto,
questa soluzione presenta gli stessi svantaggi, in particolare la sensibilità al volume di scritture della macchina virtuale,
poiché il processo di istantanea è un meccanismo ricorsivo per la chiusura dell'istantanea.

L'esempio tipico di una macchina che non supporta il meccanismo di replica delle macchine virtuali è un
server FTP che riceve flussi in tempo reale da telecamere di sorveglianza. __La macchina passa il suo tempo a scrivere e non sarà
in grado di chiudere un'istantanea senza mettere in pausa il sistema operativo per un periodo di tempo significativo
(diverse decine di minuti)__. Se l'hypervisor non riesce a chiudere l'istantanea, questo è esattamente ciò che farà,
senza possibilità di intervento se non corrompendo la macchina virtuale.

| SLA             | Descrizione                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO da 1H a 24H | In caso di disastro presso il datacenter principale, la quantità massima di dati persi è quella dell'ultimo invio di scritture al sito di standby.         |
| RTO < 15min     | Operazione per avviare la macchina virtuale arrestata sul sito remoto.                                                                                     |

Se necessario, o in caso di guasto su una macchina del sito primario, viene attivata la macchina speculare sul sito di standby.
Il ripristino dell'attività richiede di aver riservato calcolo e RAM in standby sul sito di standby. È
necessario avere lo stesso spazio di archiviazione sul sito passivo come sul sito attivo.

| Riferimento                         | Unità | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| DRP - Replica inter-AZ VMware     | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__: Il calcolo dell'RPO minimo deve essere definito in base al tasso di modifica sulla macchina virtuale.*

## Backup di macchine virtuali

Cloud Temple offre __un'architettura di backup incrociato nativa e non disattivabile__ (è obbligatoria nella qualifica francese SecNumCloud).

I backup vengono archiviati in una zona di disponibilità e in un datacenter fisico diversi da quello che ospita la macchina virtuale. Vengono crittografati utilizzando un algoritmo a chiave simmetrica AES a 256 bit (modalità di cifratura `xts-plain64`) per garantire la riservatezza dei dati.

Ciò consente la protezione in caso di un guasto grave presso il datacenter di produzione e il ripristino in un datacenter secondario (ad esempio, in caso di incendio).

Questa soluzione include:

- Backup a caldo fuori sede di tutti i dischi,
- Presentazione e avvio istantaneo di una macchina virtuale dall'infrastruttura di archiviazione di massa e ricaricamento a caldo sulle SAN di produzione,
- Ripristino parziale di file dal backup,
- Conservazione limitata solo dall'allocazione di spazio di archiviazione di massa.

Questa infrastruttura di backup si basa sulla soluzione *IBM Spectrum Protect Plus*, una soluzione con architettura senza agenti,
facile da usare e che consente l'automazione dei processi di backup oltre a ottimizzare lo spazio di archiviazione di massa.

Le velocità di backup e ripristino dipendono dal tasso di modifica negli ambienti.
La politica di backup è configurabile dalla [Console di Cloud Temple](../console/console.md) per ogni macchina virtuale.

*__Nota:__*

*__Alcune macchine virtuali non sono compatibili con questa tecnologia di backup__ che utilizza i meccanismi di istantanee dell'hypervisor.
Si tratta in genere di macchine i cui carichi di scrittura su disco sono costanti. Non è possibile per l'hypervisor chiudere l'istantanea, il che
costringe a bloccare la macchina virtuale per poter completare l'operazione di chiusura. Questo blocco può durare diverse ore e non può essere interrotto.*

*La soluzione è quindi quella di escludere il disco che è oggetto di scritture permanenti e di eseguire il backup dei dati con un altro metodo.*

| Riferimento                                               | Unità | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Accesso al servizio IBM Spectrum Protect Plus  | 1 VM  | csp:(region):iaas:backup:vm:v1 |

#### Creare una politica di backup

Per aggiungere una nuova politica di backup, è necessario effettuare una richiesta al supporto. Il supporto è accessibile dall'icona del salvagente in alto a destra della finestra.

La creazione di una nuova politica di backup viene effettuata tramite __una richiesta di servizio__ che indica:

    Il nome della vostra organizzazione
    Il nome di un contatto con la sua email e il numero di telefono per finalizzare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)

## Protezione avanzata dei dati (HSM/KMS)

Cloud Temple offre una soluzione di __crittografia avanzata delle macchine virtuali__ basata su moduli di sicurezza hardware (HSM) e un servizio di gestione delle chiavi (KMS). Questa funzione migliora la protezione dei dati sensibili attraverso la gestione centralizzata e sicura delle chiavi di crittografia, direttamente integrata nell'ambiente SecNumCloud.

### Architettura tecnica

La soluzione si basa su una solida infrastruttura di sicurezza composta da:

- __HSM (Hardware Security Module)__: Moduli __Thales Luna S790__ certificati __FIPS 140-3 Livello 3__
- __KMS (Key Management System)__: __Thales CipherTrust Manager__ per la gestione centralizzata delle chiavi
- __Integrazione VMware__: Comunicazione tramite il protocollo __KMIP__ (Key Management Interoperability Protocol)

#### Distribuzione ad alta disponibilità

L'infrastruttura HSM è distribuita su __tre zone di disponibilità__ nella regione FR1:

- PAR7S
- TH3S  
- AZ07

Questa distribuzione garantisce __alta disponibilità__ e __massima resilienza__ del servizio di crittografia.

### Funzionamento e gerarchia delle chiavi

Il sistema utilizza una __gerarchia di chiavi crittografiche__ per garantire la sicurezza dei dati:

| Livello | Tipo di chiave | Descrizione | Posizione |
|---------|----------------|-------------|-----------|
| 1 | __Root of Trust (RoT)__ | Chiave master per KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Chiave di dominio per cliente (isolamento multi-tenant) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Chiave di crittografia per VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Chiave dati per VM | VMware ESXi |

#### Processo di crittografia

1. __Generazione__: VMware ESXi genera una DEK unica for ogni macchina virtuale
2. __Protezione__: La DEK viene crittografata dalla KEK archiviata in CipherTrust Manager
3. __Messa in sicurezza__: La KEK è a sua volta protetta dalla gerarchia di chiavi HSM
4. __Archiviazione__: La DEK crittografata viene archiviata con i file di configurazione della VM

### Sicurezza e conformità

#### Certificazioni

- __FIPS 140-3 Livello 3__: Certificazione di livello più alto per gli HSM
- __Common Criteria EAL4+__: Valutazione di sicurezza avanzata
- __SecNumCloud__: Qualifica ANSSI integrata nell'ambiente Cloud Temple

#### Isolamento multi-tenant

- __Separazione crittografica__: Ogni cliente ha un dominio KMS isolato
- __Chiavi dedicate__: Una chiave di dominio specifica per cliente
- __Audit e tracciabilità__: Registrazione completa delle azioni per dominio

### Attivazione e utilizzo

La crittografia delle macchine virtuali si attiva __con un solo clic__ dalla [Console Shiva](../console/console.md).

Per una procedura dettagliata con screenshot, consultare il [tutorial sulla crittografia delle macchine virtuali](tutorials/vm_encryption.md).

#### Prerequisiti

- __Provider di chiavi configurato__: Un provider HSM/KMS deve essere abilitato sul vStack
- __Macchina virtuale spenta__: La VM deve essere arrestata prima della crittografia
- __Nessuna replica attiva__: La VM non deve essere replicata (incompatibile con Global Mirror)
- __Nessuna istantanea__: Non deve essere presente alcuna istantanea
- __Sottoscrizione al servizio__: Il servizio di protezione avanzata deve essere sottoscritto

*__Nota__: Per maggiori dettagli sui prerequisiti e sulla procedura completa, fare riferimento alla [guida alla crittografia delle VM](tutorials/vm_encryption.md).*

### Limitazioni e considerazioni

#### Compatibilità

- __Global Mirror__: Le macchine virtuali crittografate __non sono compatibili__ con la replica Global Mirror
- __Ripristino__: I backup delle VM crittografate mantengono la loro protezione crittografica
- __Esportazione__: L'esportazione di VM crittografate richiede procedure specifiche

#### Prestazioni

- __Impatto minimo__: La crittografia hardware garantisce prestazioni ottimali
- __Trasparenza__: Nessun impatto sul funzionamento delle applicazioni

### Casi d'uso consigliati

Questa soluzione di protezione avanzata è particolarmente adatta per:

- __Dati sensibili__: Informazioni personali, dati finanziari, segreti industriali
- __Conformità normativa__: Requisiti GDPR, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Settori critici__: Banche, assicurazioni, sanità, difesa
- __Sovranità digitale__: Protezione contro accessi non autorizzati, anche in caso di compromissione

| Riferimento | Unità | SKU |
|-----------|-------|-----|
| PROTEZIONE AVANZATA - Crittografia VM tramite HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Nota__:*

- *Il servizio richiede una sottoscrizione specifica e non è incluso nell'offerta IaaS standard*
- *La gestione delle chiavi rimane interamente sotto il controllo di Cloud Temple nell'ambiente SecNumCloud*
- *Le chiavi di crittografia non lasciano mai l'infrastruttura francese e sovrana*
