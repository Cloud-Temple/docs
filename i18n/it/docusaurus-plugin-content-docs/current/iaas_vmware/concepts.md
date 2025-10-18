

---
title: Concetti
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per rispondere alle esigenze critiche di continuità e ripresa dell'attività, con un particolare focus sui settori esigenti come l'industria, la banca e l'assicurazione. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce una disponibilità massima e una prestazione ottimale per i tuoi carichi di lavoro critici.



## Una piattaforma tecnologica di fiducia

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale :

- Calcolo : __CISCO UCS__.
- Archiviazione : __IBM Spectrum Virtualize__, __IBM FlashSystem__ per l'archiviazione a blocchi.
- Rete : __JUNIPER__.
- Virtualizzazione : __VMware__, offrendo una base affidabile e collaudata per gestire i vostri ambienti cloud.
- Backup: __IBM Spectrum Protect Plus__, per l'orchestrazione e l'archiviazione delle copie di backup.

Questa architettura si basa sul modello __VersaStack__, un'alleanza tra Cisco e IBM, garantendo una compatibilità estesa con i principali editori software.



## Un'infrastruttura dedicata e automatizzata

Sebbene completamente automatizzata grazie a API e un provider Terraform, l'offerta IaaS di Cloud Temple propone un'infrastruttura unica:

- __Risorse dedicate__ : Le blade di calcolo, i volumi di storage e gli stack software (virtualizzazione, backup, firewalling, ecc.) non vengono mai condivisi tra i clienti.
- __Massima previsione__ : Gestisci i tassi di virtualizzazione, la pressione in IOPS sullo storage e benefici di una fatturazione chiara, al consumo mensile.

La piattaforma è certificata __SecNumCloud__ dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.



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
| Fiducia digitale    | Archiviazione dei dati in Francia e conformità al RGPD.                                                                                          |
| Sicurezza           | Piattaforma altamente sicura, certificata __SecNumCloud__, __HDS__ (Ospitalità dei Dati Sanitari), __ISO 27001__ e __ISAE 3402 tipo II__. |  
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, inclusi i periodi di manutenzione.                                        |
| Resilienza          | Implementazione di piani di continuità o di ripresa dell'attività secondo le esigenze.                                                               |
| Automazione         | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                        |
| Su richiesta        | Risorse disponibili su richiesta.                                                                                                          |



## Regioni e zone di disponibilità

Il prodotto IaaS VMware è distribuito in una zona di disponibilità.
Una [zona di disponibilità](../additional_content/concepts_az.md) fa parte di una [regione](../additional_content/concepts_regional.md).

Questo tipo di distribuzione consente di scegliere la posizione dei cluster e di distribuirli su diverse zone di disponibilità (AZ).
Questo offre una migliore distribuzione del carico, massimizza la ridondanza e facilita l'implementazione di un piano di ripristino (DRP) in caso di incidente.



## Calcolo

Le lame fornite da Cloud Temple sono di tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Sono completamente gestite da Cloud Temple (firmware, versione del sistema operativo, ...) tramite la console Cloud Temple.

Sono disponibili diverse categorie di lame di calcolo nel catalogo per supportare i propri carichi di lavoro (virtualizzazione, containerizzazione, ...). Queste presentano caratteristiche e prestazioni diverse per rispondere al meglio alle proprie esigenze. Il catalogo delle lame di calcolo si aggiorna regolarmente.

Nel contesto dell'utilizzo con un'offerta di virtualizzazione, un cluster di hypervisor è composto esclusivamente da lame di calcolo dello stesso tipo (non è possibile mescolare lame di diversi tipi nello stesso cluster).

| Riferimento             | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connessione __(3)__ | GPU __(4)__          | SKU per l'offerta Vmware         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Lame ECO v3           | 384 GB       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 thread            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Lame STANDARD v3      | 384 GB       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Lame ADVANCE v3       | 768 GB       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Lame PERFORMANCE 1 v3 | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Lame PERFORMANCE 2 v3 | 768 GB       | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 thread            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Lame PERFORMANCE 3 v3 | 1536 GB      | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 thread           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Lame PERFORMANCE 4 v3 | 512 GB       | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 thread            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48 GB | csp:fr1:iaas:vmware:perf4:v3    |

__Note__ :

- __(1)__ La quantità di memoria fornita è quella fisicamente disponibile sulle lame. Non è possibile modificare la quantità fisica di memoria di una lama.

- __(2)__ La frequenza base minima / frequenza turbo, espressa in GHz. Per default, i processori sono configurati per una performance massima a livello del BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso di rete e l'accesso storage bloc, la piattaforma CISCO essendo convergente.

- __(4)__ L'offerta di GPU disponibile effettivamente si aggiorna costantemente. Al 1° maggio 2024, l'offerta si basa sui GPU NVIDIA LOVELACE L40S. Per default, la lama PERF4 è fornita con 2 schede L40S da 48 GB. Contattare il supporto per ulteriori informazioni se necessario.

La disponibilità dell'offerta di calcolo è del 99,99%, calcolata mensilmente, inclusa la finestra di manutenzione. L'idoneità in caso di mancato rispetto del SLA è soggetta alla creazione di un ticket incidente. È inoltre necessario disporre di almeno due host per cluster e attivare la funzionalità __High Availability__ (HA). Questa funzionalità permette alla propria architettura di riavviare automaticamente le macchine virtuali sull'altro hypervisor. Nel caso in cui una zona di disponibilità contenga un solo hypervisor, il riavvio automatico non è possibile.



## Rete

Il servizio di rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete basata sulla tecnologia VPLS, offrendo una segmentazione flessibile e performante per rispondere alle esigenze dei clienti in termini di connettività e isolamento di rete.



### VLAN di livello 2

Le VLAN disponibili nell'offerta IaaS sono di tipo __livello 2__, offrendo un'isolamento di rete completo e una configurazione adattabile in base alle esigenze.



#### Principali concetti

- __Condivisione tra cluster e zone di disponibilità (AZ)__ :
  - Le VLAN possono essere condivise tra le diverse AZ e i diversi cluster appartenenti allo stesso tenant.
- __Propagazione tra tenant__ :
  - Le VLAN possono essere propagate tra diversi tenant appartenenti a un'unica organizzazione, facilitando le comunicazioni interne.



### Prestazioni di rete

L'infrastruttura di rete garantisce una bassa latenza per prestazioni ottimali :

- __Latenza intra-AZ__ : Inferiore a __3 ms__.
- __Latenza inter-AZ__ : Inferiore a __5 ms__.



### Punti chiave

1. __Flexibilità__ : Le VLAN possono essere configurate per adattarsi agli ambienti multi-cluster e multi-tenant.
2. __Performance elevata__ : Una latenza minima garantisce una comunicazione rapida ed efficiente tra le zone di disponibilità.
3. __Isolamento e sicurezza__ : Le VLAN di livello 2 offrono una segmentazione di rete rigorosa per proteggere i dati e i flussi.

---



## Storage a blocchi

Cloud Temple offre diverse classi di storage basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/) e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ permette di erogare il livello di prestazioni richiesto per gli ambienti dei nostri clienti grazie alla grande quantità di cache di memoria integrata nei controller e alla possibilità di distribuire l'intero numero di IOPS di un server su diversi SAN.

Viene anche utilizzata per permettere la replica delle tue LUN di storage in modalità blocchi tra le zone di disponibilità o per facilitare gli interventi sulle baie di storage.

Lo storage è principalmente di tipo FLASH NVME dedicato a carichi di lavoro professionali. I dischi vengono utilizzati dalle baie di storage in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La classe di storage __'Mass Storage'__ offre dischi meccanici per i bisogni di archiviazione in un contesto di efficienza economica. Sono disponibili diversi livelli di prestazioni:

| Riferimento                        | Unità | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essenziale - 500 IOPS/To  | 1 GiB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 GiB | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 GiB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 GiB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 GiB | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archiviazione      | 1 TiB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *Le prestazioni effettive per una classe di storage sono legate al volume effettivamente ordinato, in base alla nozione "IOPS/TB", intendendo "limite di IOPS per Terabyte allocato",*

> *Così, un volume di 0,5TB nella classe di prestazioni 'Standard' avrà un limite IOPS massimo di 750 IOPS,*
> *Allo stesso modo, un volume di 10TB nella classe di prestazioni 'Ultra' avrà un limite IOPS di 150000 IOPS,*

- *Il limite IOPS è applicato al volume, quindi alla nozione di Datastore per un ambiente VMware,*
- *La disponibilità dello storage è del 99,99% misurato mensilmente, incluso il periodo di manutenzione,*
- *Non ci sono restrizioni o quote su lettura o scrittura,*
- *Non c'è alcuna fatturazione per IOPS,*
- *Non c'è alcun impegno di prestazioni per la classe __'Mass Storage'__,*
- *La dimensione minima di una LUN di storage è di 500 GiB,*
- *Durante l'uso di un meccanismo di replica dello storage, le prestazioni devono essere identiche sulle due zone di disponibilità,*
- *Non viene implementato alcun meccanismo di ottimizzazione "intelligente" di tipo compressione o deduplicazione: quando riservi 10 TiB di storage, hai fisicamente 10 TiB di storage utili implementati sulle macchine IBM.*
- *Le LUN di storage sono dedicate all'ambiente client.*



### Utilizzo nell'ambito dell'offerta di calcolo VMware

Nel contesto dell'utilizzo del storage in modalità blocco sotto forma di datastore nell'offerta di calcolo VMware di Cloud Temple, __è necessario considerare diversi aspetti importanti__:

1. __File di swap (.VSWP) durante l'avvio delle macchine virtuali__: Quando una macchina virtuale viene avviata, crea un file .VSWP della dimensione della sua memoria sul disco. Pertanto, per poter avviare le proprie macchine virtuali, è sempre necessario disporre nello storage di uno spazio libero equivalente alla somma delle dimensioni della memoria delle proprie macchine virtuali. Ad esempio, se lo storage dispone di 1 TB di storage blocco e si desidera avviare 10 macchine virtuali da 64 GB di memoria ciascuna, saranno necessari 640 GB di spazio su disco. Senza questo spazio, l'avvio delle macchine virtuali sarà limitato dalla capacità disponibile per la creazione dei file di swap.

2. __Spazio libero per i snapshots di backup__: Il servizio di backup utilizza snapshot istantanei. È quindi necessario sempre disporre di spazio sufficiente per permettere la creazione di uno snapshot durante il backup di una macchina virtuale. La dimensione dello snapshot dipende dal volume di scrittura della macchina virtuale e dal tempo necessario per eseguire il backup. In generale, si consiglia di mantenere almeno il 10% di spazio libero per questa operazione.

3. __Gestione dei dischi dinamici__: Fate attenzione all'utilizzo dei dischi dinamici. Se non controllate la loro crescita, un mancato spazio fisico può causare un congelamento (freeze) della macchina virtuale nel migliore dei casi, o un crash con corruzione nel peggiore dei casi. È fondamentale monitorare attentamente lo spazio disponibile sui propri datastores quando si utilizzano questo tipo di dischi.

Una gestione proattiva dello spazio su disco è essenziale per garantire il corretto funzionamento delle proprie macchine virtuali e la affidabilità dei backup. Assicuratevi sempre di disporre dello spazio necessario per i file di swap, gli snapshot e la crescita dei dischi dinamici.



## Archiviazione in modalità di backup

Lo storage dedicato alla protezione delle tue macchine virtuali viene provisioning automaticamente dalla piattaforma entro il limite del quota ordinata.

| Riferimento              | Unità | SKU                                      |
|--------------------------|-------|------------------------------------------|
| STOCCAGGIO MASSIVO - Archiviazione | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |



### Replica del storage in modalità blocco



#### Principi

Per consentire l'implementazione dei vostri piani di ripresa dell'attività, quando non è possibile essere in situazione di continuità d'attività con meccanismi applicativi e la replica delle macchine virtuali non è adatta, Cloud Temple propone __meccanismi di replica del storage in modalità blocco tra le zone di disponibilità di una regione__.

Questi meccanismi di replica vengono applicati sui LUN dei vostri ambienti, in complemento alle backup. La scelta dell'utilizzo di un meccanismo di replica su un ambiente __dipende da molti fattori tra cui la sua criticità, la perdita di dati tollerabile o le prestazioni previste__ per l'applicazione.

Cloud Temple propone due tipi di meccanismi implementati in una configurazione attivo/passivo:

- La replica __asincrona__ (o __'Global Mirror'__): *La funzione __'Global Mirror'__ fornisce un processo di copia asincrona. Quando un host scrive sul volume primario, la conferma del completamento dell'I/O viene ricevuta prima che l'operazione di scrittura termini per la copia sul volume secondario. Se viene avviata un'operazione di failover, l'applicazione deve recuperare e applicare tutte le modifiche non confermate sul volume secondario. Se le operazioni I/O sul volume primario vengono sospese per un breve periodo, il volume secondario può diventare una copia esatta del volume primario. Questa funzione è comparabile a un processo di backup continuo in cui le ultime modifiche sono sempre mancanti. Quando si utilizza Global Mirror per scopi di ripresa dopo un disastro, è necessario riflettere sul modo in cui si desidera gestire queste modifiche mancanti.*

- La replica __sincrona__ (o __'Metro Mirror'__): *La funzione __'Metro Mirror'__ è un tipo di copia a distanza che crea una copia sincrona dei dati di un volume primario su un volume secondario. Con copie sincrone, gli host applicativi scrivono sul volume primario, ma non ricevono la conferma che l'operazione di scrittura è terminata finché i dati non sono scritti sul volume secondario. Questo garantisce che i due volumi contengano dati identici quando l'operazione di copia è terminata. Dopo che l'operazione di copia iniziale è terminata, la funzione Metro Mirror mantiene costantemente una copia completamente sincronizzata dei dati sorgente sul sito di destinazione. __Dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più commercializzata.__*

Viene definito un sito detto "attivo" o "principale" e un sito "passivo" o "standby". Il piano di ripresa dell'attività viene attivato in caso di disastro o durante una richiesta di test del PRA. Il sito passivo prende quindi il posto del sito attivo.



#### Replicazione asincrona

Quando i tuoi carichi di lavoro richiedono tempi di ripristino dell'attività brevi e non è accettabile o adatto utilizzare meccanismi di tipo replicazione applicativa / replicazione di macchine virtuali, è possibile replicare una LUN di storage SAN tra due zone di disponibilità della stessa regione.

Questo servizio permette di ottenere un __RPO di 15 min__ e un __RTO inferiore a 4 ore__. Permette di ripartire molto più rapidamente rispetto all'implementazione di un ripristino di backup.

In un volume di storage in replicazione asincrona (__Global Mirror__), i controller di virtualizzazione SAN delle due zone di disponibilità lavorano insieme per eseguire le operazioni di scrittura sui due siti. Il sito principale non attende la conferma di scrittura del sito di replica.

I passaggi di un'operazione di scrittura sono i seguenti:

1. Un hypervisor desidera eseguire __un'operazione di scrittura su un volume Global-Mirror__: invia la richiesta al controller SAN della propria zona di disponibilità,
2. Il controller SAN locale richiede al controller SAN della zona remota di eseguire l'operazione di scrittura,
3. il controller SAN locale non attende la conferma del SAN remoto e esegue quindi la scrittura localmente,
4. fornisce __conferma__ all'hypervisor che ha emesso la richiesta,
5. __Gli hypervisor del sito remoto non accedono direttamente alla LUN Global Mirror__: è necessaria una richiesta di servizio.

| SLA       | Descrizione                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 min  | In caso di incidente nel datacenter principale, la quantità massima di dati persi corrisponde al massimo alle ultime 15 minuti di scrittura |
| RTO < 4 ore  | In caso di incidente nel datacenter principale, il ripristino dell'attività è garantito entro 4 ore in base alla complessità degli ambienti.          |

In caso di attivazione del PRA, l'équipe di Cloud Temple esegue un'operazione di presentazione della LUN __'Global Mirror'__ agli hypervisor remoti per permettere loro di accedere ai dati. La messa in opera di questa soluzione richiede quindi di aver riservato sul sito 'standby' le risorse di calcolo e RAM per riprendere l'attività in caso di incidente.

L'uso di questa tecnologia richiede inoltre la duplicazione dello spazio su disco: è necessario disporre esattamente dello stesso spazio sul sito remoto rispetto al sito locale.

L'uso di questo meccanismo può influenzare le prestazioni dell'applicazione fino al 10%. __Solo le classi di storage 500 Iops/To, 1500 Iops/To e 3000 Iops/TO sono compatibili.__

| Riferimento                          | Unità  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN  | 1 TiB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *L'offerta essendo asincrona, in caso di incidente potrebbe accadere che alcune operazioni su disco non siano state scritte sul sito remoto. Potrebbe quindi esserci un rischio sulla coerenza dei dati, mitigato nell'analisi dei rischi del piano di ripristino dell'attività.*
- *La replicazione del storage in modalità blocco avviene in modo nascosto per le macchine virtuali e le applicazioni,*
- *Per questo motivo è importante privilegiare gli scenari di replicazione applicativa o eventualmente la replicazione di macchina virtuale,*
- *Il calcolo e la memoria, sul sito di ripristino, possono essere ridotti per ottimizzare i costi se una situazione degradata è accettabile per l'azienda durante l'applicazione del piano di ripristino dell'attività.*



## Virtualizzazione VMware

L'offerta di virtualizzazione VMware Cloud Temple qualificata SecNumCloud è basata sulla tecnologia __VMware Vsphere__.

La piattaforma è gestita automaticamente da Cloud Temple (mantenimento delle condizioni di sicurezza, mantenimento in condizioni operative, ...). Essa è gestibile tramite l'interfaccia grafica della console Shiva o tramite le API associate.

*__Nota__* : *Per motivi di sicurezza legati alla qualifica SecNumCloud, __non è possibile per il committente accedere direttamente alla piattaforma di virtualizzazione VMware__ (nessun accesso diretto al vCenter in particolare). Infatti, la qualifica SecNumCloud impone __una totale separazione__ tra le interfacce di gestione degli asset tecnici e l'interfaccia del committente (la console Shiva).*

- I prodotti utilizzati sono VMware ESXi, VMware Vcenter e VMware Replication.
- *La rete dell'offerta di virtualizzazione non utilizza la tecnologia VMware NSX, ma è gestita materialmente tramite la tecnologia Juniper e il protocollo VPLS.*
- *Il storage non utilizza la tecnologia VMWare vSan, ma solo SAN IBM in canale in fibra 32G.*
- *Non viene implementata alcuna forma di ottimizzazione nascosta (compressione, deduplicazione, ...).*



### Definizione di un cluster di unità di calcolo ('Cpool')

Il __'Cpool'__ è un raggruppamento di hypervisor VMware ESXi, noto anche come *'cluster ESX'*.

Gli host presenti in un __'Cpool'__ appartengono tutti __allo stesso tenant e alla stessa zona di disponibilità__ (AZ). Devono necessariamente avere la stessa classe: __non è possibile mescolare modelli diversi di unità di calcolo all'interno di uno stesso cluster__.

Tutte le unità di calcolo vengono fornite con la quantità massima di memoria fisica, una limitazione di utilizzo della RAM viene applicata a livello di cluster per garantire che corrisponda alla RAM fatturata.

Per default, ogni unità dispone di 128 GB di memoria attiva all'interno del __'Cpool'__.

Un __'Cpool'__ può contenere al massimo 32 hypervisor. Oltre a questa soglia, sarà necessario creare un secondo cluster.

Il storage può essere condiviso tra i __'Cpool'__.



### Allocazione della memoria per un 'Cpool'

La prenotazione della RAM è configurabile per cluster. È possibile ridurre o aumentare la quantità di RAM in modo che corrisponda ai propri bisogni a livello di cluster.

__Attenzione a non superare una media del 85% di consumo della memoria per nodo di calcolo__.
In effetti, la tecnologia VMware utilizzerà un metodo di ottimizzazione del tipo compressione che può impattare significativamente le prestazioni dei propri carichi di lavoro e complicare la diagnostica.
Inoltre, una pressione eccessiva sulla memoria dei nodi di calcolo obbligherà l'ipervisore a scaricare parte della sua memoria su disco per soddisfare i bisogni delle macchine virtuali.

Questo caso, chiamato __'Ballooning'__, impatta molto fortemente l'insieme delle prestazioni delle macchine virtuali situate sullo storage (datastore) interessato.
__La diagnostica è complicata in questo contesto__, poiché la vostra metrica rileverà impatti a livello CPU e non della memoria o dello storage.
Tenete presente che la prima cosa che fa l'ipervisore all'avvio di una macchina virtuale è creare __un file di swap della memoria__ (.vswap) sul disco, della dimensione della memoria della macchina virtuale interessata. È necessario __tenerne conto nella progettazione dello storage__.

Ogni nodo di calcolo è fornito con 128 GB di memoria attivata a livello software al livello del __'Cpool'__, ma dispone fisicamente di tutta la memoria allocabile.

Ad esempio, per un cluster di tre host di tipo ```vmware:standard:v2```, la prenotazione della RAM all'attivazione del _*'Cpool'* sarà di 3 x 128 GB = 384 GB di RAM.
È possibile estenderla al massimo fino a 3 x 384 GB = 1152 GB di memoria.

    Minimo di memoria di un 'Cpool' = numero di host X 128 GB di memoria
    Massimo di memoria di un 'Cpool' = numero di host X la quantità di memoria fisica del nodo di calcolo



### Cataloghi delle macchine virtuali Cloud Temple

Cloud Temple mette a disposizione un catalogo di `Templates` regolarmente arricchito e aggiornato dalle nostre squadre.  
Comprende attualmente diverse decine di `Templates` e immagini da montare sulle vostre macchine virtuali.



### Aggiornamento degli Hypervisor

Cloud Temple fornisce regolarmente build per gli hypervisor per garantire l'applicazione dei patch di sicurezza.  
Tuttavia, l'aggiornamento degli hypervisor rimane a tuo carico, poiché non abbiamo visibilità sulle tue esigenze aziendali.  

Il processo di aggiornamento è completamente automatizzato. Per garantire la continuità del servizio, è richiesto un minimo di due hypervisor per cluster durante l'aggiornamento. Assicurati di disporre delle autorizzazioni necessarie per eseguire queste azioni.



### Gestione dell'affinità delle tue macchine virtuali

Le __regole di affinità e anti-affinità__ permettono di controllare la posizione delle macchine virtuali sui tuoi iperfattori. Possono essere utilizzate per gestire l'utilizzo delle risorse del tuo __'Cpool'__. Ad esempio, possono aiutare a bilanciare il carico di lavoro tra i server o a isolare i carichi di lavoro intensivi in risorse. In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion. vMotion permette di spostare macchine virtuali da un host a un altro senza interruzioni del servizio.

Puoi configurare tramite la gestione delle regole:

- __Regole di Affinità__: Queste regole garantiscono che certe macchine virtuali vengano eseguite sullo stesso host fisico. Sono utilizzate per migliorare le prestazioni mantenendo le macchine virtuali che comunicano frequentemente insieme sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili in scenari dove le prestazioni sono critiche, ad esempio nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di Anti-affinità__: Al contrario, queste regole garantiscono che certe macchine virtuali non vengano eseguite sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, ad esempio per evitare che macchine critiche siano tutte colpite in caso di guasto di un singolo server. Le regole di anti-affinità sono cruciali per le applicazioni che necessitano di alta disponibilità, come negli ambienti di produzione dove la tolleranza ai guasti è una priorità. Ad esempio, non desideri che i tuoi due Active Directory siano sullo stesso iperfattore.

Durante la creazione di una regola, definisci il tipo di regola (affinità / anti-affinità), il nome della regola, il suo stato di attivazione (__'Statut'__) e le macchine interessate del tuo cluster di iperfattori.

*Nota: le regole di affinità/anti-affinità proposte nella console sono regole che riguardano le macchine virtuali tra loro (non regole tra iperfattori e macchine virtuali).*



### Replica asincrona delle tue macchine virtuali nell'ambiente VMware

La replica asincrona delle tue macchine virtuali è un meccanismo che consiste nel trasmettere, a livello dell'ipervisore sorgente, le operazioni di scrittura sul sito di standby a intervalli di tempo regolari.

Dopo una copia iniziale calda di tutto il storage attivo sul sito di standby, vengono trasmesse solo le scritture a intervalli regolari sul sito in standby. Questo intervallo dipende dal volume di scrittura (dalle ore a ogni 24 ore).

La replica delle macchine virtuali si basa sul meccanismo di istantanee dell'ipervisore. In questo senso, questa soluzione presenta gli stessi svantaggi, in particolare la sensibilità al volume di scrittura della macchina virtuale, il processo di istantanea essendo un meccanismo ricorsivo per la chiusura dell'istantanea.

L'esempio tipico di macchina che non supporta il meccanismo di replica delle macchine virtuali è un server FTP che riceve i flussi in tempo reale delle telecamere di sorveglianza. __La macchina passa il tempo a scrivere e non sarà in grado di chiudere un'istantanea senza sospendere il sistema operativo per un periodo significativo (decine di minuti)__. Se l'ipervisore non riesce a chiudere l'istantanea, esattamente questo farà, senza possibilità di intervento, tranne che corrompere la macchina virtuale.

| SLA             | Descrizione                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO di 1H a 24H | In caso di incidente nel datacenter principale, la quantità massima di dati persi è quella dell'ultima trasmissione delle scritture sul sito di standby. |
| RTO  < 15mn     | Operazione di avvio della macchina virtuale arrestata sul sito remoto                                                                                |

In caso di necessità, o in caso di guasto su una macchina del sito principale, la macchina speculare sul sito di standby viene attivata. Il ripristino dell'attività richiede di aver riservato calcolo e RAM sul sito di standby. È necessario avere lo stesso spazio di storage sul sito passivo rispetto al sito attivo.

| Riferimento                         | Unità | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replica VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licenza:replica:v1 |

*__Nota__ : Il calcolo del RPO minimo deve essere definito in base al tasso di modifica sulla macchina virtuale.*



## Backup delle macchine virtuali

Cloud Temple propone __un'architettura di backup nativa e non rimovibile__ (obbligatoria nella qualifica secnumcloud francese).

I backup vengono salvati in un'area di disponibilità e in un datacenter fisico diverso da quello che ospita la macchina virtuale. Vengono crittografati tramite un algoritmo a chiavi simmetriche AES 256 bit (mode di crittografia `xts-plain64`) per garantire la riservatezza dei dati.

Questo permette di proteggersi da malfunzionamenti gravi nel datacenter di produzione e di ripristinare su un datacenter secondario (ad esempio, un incendio).

Questa soluzione include:

- Il backup remoto in tempo reale di tutti i dischi,
- La presentazione e l'avvio istantaneo di una macchina virtuale dall'infrastruttura di archiviazione di massa e il ricaricamento in tempo reale sui SAN di produzione,
- Il ripristino parziale dei file dal backup,
- Una conservazione limitata esclusivamente dall'allocazione dello spazio di archiviazione di massa.

Questa infrastruttura di backup si basa sulla soluzione *IBM Spectrum Protect Plus*, una soluzione con architettura senza agente, facile da utilizzare e che permette l'automazione dei processi di backup oltre a un'ottimizzazione dello spazio di archiviazione di massa.

Le velocità di backup e ripristino dipendono dal tasso di modifica negli ambienti. La politica di backup è configurabile dalla [Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

*__Nota:__*

*__Alcune macchine virtuali non sono compatibili con questa tecnologia di backup__ che utilizza i meccanismi di istantanee dell'ipervisore. Sono tipicamente quelle con carichi di scrittura costanti sul disco. Non è possibile per l'ipervisore chiudere l'istantanea, il che obbliga a congelare la macchina virtuale per completare l'operazione di chiusura. Questo congelamento può durare diverse ore e non è interrompibile.*

*La soluzione è escludere il disco destinato alle scritture permanenti e eseguire il backup dei dati con un'altro metodo.*

| Riferimento                                               | Unità | SKU                            |
| --------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Accesso al servizio IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1 |



#### Creare una politica di backup

Per aggiungere una nuova politica di backup, è necessario inviare una richiesta al supporto. Il supporto è accessibile dall'icona del salvagente in alto a destra della finestra.

La creazione di una nuova politica di backup viene effettuata tramite __una richiesta di servizio__ che indica:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per completare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)



## Protezione avanzata dei dati (HSM/KMS)

Cloud Temple propone una soluzione di __crittografia avanzata delle macchine virtuali__ basata su moduli di sicurezza hardware (HSM) e un servizio di gestione delle chiavi (KMS). Questa funzionalità consente di rafforzare la protezione dei dati sensibili grazie a una gestione centralizzata e sicura delle chiavi di crittografia, direttamente integrata nell'ambiente SecNumCloud.



### Architettura tecnica

La soluzione si basa su un'infrastruttura di sicurezza robusta composta da:

- __HSM (Modulo di Sicurezza Hardware)__ : Moduli __Thales Luna S790__ certificati __FIPS 140-3 livello 3__
- __KMS (Sistema di Gestione delle Chiavi)__ : __Thales CipherTrust Manager__ per la gestione centralizzata delle chiavi
- __Integrazione VMware__ : Comunicazione tramite il protocollo __KMIP__ (Key Management Interoperability Protocol)



#### Distribuzione a alta disponibilità

L'infrastruttura HSM è distribuita su __tre zone di disponibilità__ della regione FR1 :

- PAR7S
- TH3S  
- AZ07

Questa distribuzione garantisce un'__alta disponibilità__ e una __resilienza__ massima del servizio di crittografia.



### Funzionamento e gerarchia delle chiavi

Il sistema utilizza una __gerarchia di chiavi crittografiche__ per garantire la sicurezza dei dati:

| Livello | Tipo di chiave | Descrizione | Posizione |
|--------|-------------|-------------|--------------|
| 1 | __Root of Trust (RoT)__ | Chiave principale gestita dal KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Chiave di dominio per cliente (isolamento multi-tenant) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Chiave di crittografia per VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Chiave di dati per VM | VMware ESXi |



#### Processo di crittografia

1. __Generazione__ : VMware ESXi genera una DEK unica per ogni macchina virtuale
2. __Protezione__ : La DEK viene crittografata dalla KEK archiviata in CipherTrust Manager
3. __Sicurezza__ : La KEK viene protetta a sua volta dalla gerarchia delle chiavi HSM
4. __Archiviazione__ : La DEK crittografata viene archiviata con i file di configurazione della VM



### Sicurezza e conformità



#### Certificazioni

- __FIPS 140-3 livello 3__ : Certificazione di livello più alto per i HSM
- __Common Criteria EAL4+__ : Valutazione di sicurezza avanzata
- __SecNumCloud__ : Qualifica ANSSI integrata nell'ambiente Cloud Temple



#### Isolamento multi-tenant

- __Separazione crittografica__: Ogni cliente dispone di un dominio KMS isolato
- __Chiavi dedicate__: Una Domain Key specifica per cliente
- __Audit e tracciabilità__: Registrazione completa delle azioni per dominio



### Attivazione e utilizzo

La crittografia delle macchine virtuali si attiva __con un clic solo__ dalla [Console Shiva](../console/console.md).

Per una procedura dettagliata con screenshot, consulta il [tutoriale di crittografia delle macchine virtuali](tutorials/vm_encryption.md).



#### Requisiti

- __Fornitore di chiavi configurato__ : Un fornitore HSM/KMS deve essere abilitato su vStack
- __Macchina virtuale spenta__ : La VM deve essere spenta prima del crittografia
- __Nessuna replica attiva__ : La VM non deve essere replicata (incompatibile con Global Mirror)
- __Nessun snapshot__ : Non deve esserci alcun istantaneo
- __Abbonamento al servizio__ : Il servizio di protezione avanzata deve essere sottoscritto

*__Nota__ : Per ulteriori dettagli sui requisiti e sulla procedura completa, fare riferimento alla [guida alla crittografia delle VM](tutorials/vm_encryption.md).*



### Limitazioni e considerazioni



#### Compatibilità

- __Global Mirror__ : Le macchine virtuali crittografate non sono __compatibili__ con la replica Global Mirror
- __Restauration__ : Le backup delle VM crittografate mantengono la loro protezione crittografica
- __Export__ : L'esportazione delle VM crittografate richiede procedure specifiche



#### Prestazioni

- __Impatto minimo__: Il crittografia hardware garantisce prestazioni ottimali
- __Trasparenza__: Nessun impatto sul funzionamento delle applicazioni



### Casi d'uso consigliati

Questa soluzione di protezione avanzata è particolarmente adatta per:

- __Dati sensibili__ : Informazioni personali, dati finanziari, segreti industriali
- __Conformità normativa__ : Requisiti GDPR, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Settori critici__ : Bancario, assicurativo, sanitario, difesa
- __Sovranità digitale__ : Protezione contro accessi non autorizzati, anche in caso di compromissione

| Riferimento | Unità | SKU |
|-----------|-------|-----|
| PROTEZIONE AVANZATA - Crittografia VM tramite HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Nota__ :*

- *Il servizio richiede una sottoscrizione specifica e non è incluso nell'offerta standard IaaS*
- *La gestione delle chiavi rimane interamente sotto il controllo di Cloud Temple nell'ambiente SecNumCloud*
- *Le chiavi di crittografia non lasciano mai l'infrastruttura francese e sovrana*