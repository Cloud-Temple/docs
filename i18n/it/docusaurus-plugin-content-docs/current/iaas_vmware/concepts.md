---
title: Concepts
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per rispondere alle esigenze critiche di continuità e ripristino dell'attività, con un'attenzione particolare ai settori esigenti come l'industria, la banca e l'assicurazione. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce una disponibilità massima e una performance ottimale per i tuoi carichi di lavoro critici.

## Una piattaforma tecnologica di fiducia

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale:

- Calcolo: **CISCO UCS**.
- Archiviazione: **IBM Spectrum Virtualize**, **IBM FlashSystem** per l'archiviazione a blocchi.
- Rete: **JUNIPER**.
- Virtualizzazione: **VMware**, offrendo una base affidabile e collaudata per gestire i tuoi ambienti cloud.
- Backup: **IBM Spectrum Protect Plus**, per l'orchestrazione e l'archiviazione dei backup.

Questa architettura si basa sul modello **VersaStack**, un'alleanza tra Cisco e IBM, garantendo una compatibilità estesa con i principali produttori di software.

## Un'infrastruttura dedicata e automatizzata

Sebbene interamente automatizzata grazie ad API e un provider Terraform, l'offerta IaaS di Cloud Temple propone un'infrastruttura unica:

- **Risorse dedicate**: Le lame di calcolo, i volumi di archiviazione, e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- **Massima predittibilità**: Gestisci i tassi di virtualizzazione, la pressione in IOPS sull'archiviazione e benefici di una fatturazione chiara, a consumo mensile.

La piattaforma è qualificata **SecNumCloud** dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Funzionalità principali

- Risorse di calcolo (CPU, RAM) dedicate e su richiesta.
- Archiviazione su richiesta (disponibili diverse classi).
- Risorse di rete (Internet, reti private).
- Backup incrociati con retentività configurabile.
- Replicazione asincrona per l'archiviazione o le macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) o in modalità Infrastructure as Code grazie ad API e provider Terraform.

## Vantaggi

| Vantaggio            | Descrizione                                                                                                                                  |   
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale     | Hosting dei dati in Francia e conformità GDPR.                                                                                                |   
| Sicurezza            | Piattaforma altamente sicura, qualificata **SecNumCloud**, **HDS** (Hosting dei Dati Sanitari), **ISO 27001** e **ISAE 3402 tipo II**.       |  
| Alta disponibilità   | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, periodi di manutenzione inclusi.                                    |   
| Resilienza           | Implementazione di piani di continuità o ripristino dell'attività secondo le esigenze.                                                        |
| Automazione          | Piattaforma completamente automatizzata pensata per integrarsi in un programma di trasformazione digitale.                                     |
| Su richiesta         | Risorse disponibili su richiesta.                                                                                                            |












## Calcolo

Le lame fornite da Cloud Temple sono di tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Sono completamente gestite da Cloud Temple (firmware, versione del sistema operativo, ...) tramite la console Cloud Temple.

Sono disponibili diverse categorie di lame di calcolo nel catalogo per supportare i tuoi carichi di lavoro (Virtualizzazione, Containerizzazione, ...).
Queste presentano caratteristiche e prestazioni diverse per rispondere al meglio alle tue esigenze. Il catalogo delle lame di calcolo evolve regolarmente.

Nel contesto dell'uso con un'offerta di virtualizzazione, un cluster di hypervisor è composto unicamente da lame di calcolo dello stesso tipo (non è possibile mescolare lame di diversi tipi nello stesso cluster).

| Riferimento             | RAM  __(1)__ | Frequenza __(2)__                          | Numero di core / thread    | Connettività __(3)__    | GPU **(4)**          | SKU per l'offerta Vmware         |
| ----------------------- | ------------ | ------------------------------------------ | -------------------------- | ----------------------- | -------------------- | ------------------------------- |
| Lame ECO v3             | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)   | 20 / 40 thread             | 2 X 10 Gbit/s           |                      | csp:fr1:iaas:vmware:eco:v3      |
| Lame STANDARD v3        | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)   | 32 / 64 thread             | 2 X 25 Gbit/s           |                      | csp:fr1:iaas:vmware:standard:v3 |
| Lame ADVANCE v3         | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)     | 48 / 96 thread             | 2 X 25 Gbit/s           |                      | csp:fr1:iaas:vmware:advance:v3  |
| Lame PERFORMANCE 1 v3   | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)  | 16 / 32 thread             | 2 X 25 Gbit/s           |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Lame PERFORMANCE 2 v3   | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)     | 36 / 72 thread             | 2 X 25 Gbit/s           |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Lame PERFORMANCE 3 v3   | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)     | 56 / 112 thread            | 2 X 25 Gbit/s           |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Lame PERFORMANCE 4 v3   | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)   | 32 / 64 thread             | 2 X 25 Gbit/s           | 2 x NVIDIA L40S 48go | csp:fr1:iaas:vmware:perf4:v3    |

__Note__:

- __(1)__ La quantità di memoria fornita è quella fisicamente disponibile sulle lame. Non è possibile modificare la quantità fisica di memoria di una lama.

- __(2)__ La frequenza base minima / frequenza turbo, espressa in GHz. Di default, i processori sono configurati per una performance massima a livello del BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e all'archiviazione a blocchi, la piattaforma CISCO essendo convergente.

- __(4)__ L'offerta di GPU disponibile realmente evolve continuamente. Al 1° maggio 2024, l'offerta si basa sulle GPU NVIDIA LOVELACE L40S. Di default, la lama PERF4 è fornita con 2 schede L40S da 48 Go di RAM. Contatta il supporto per maggiori dettagli se necessario.

La disponibilità dell'offerta di calcolo è del 99.99%, calcolata mensilmente, periodi di manutenzione inclusi. L'idoneità in caso di mancato rispetto del SLA è soggetta alla creazione di un ticket incidente. Devi anche possedere almeno due host per cluster e attivare la funzionalità __High Availability__ (HA). Questa funzionalità permette alla tua architettura di riavviare automaticamente le tue macchine virtuali sul secondo hypervisor.
Nell'ipotesi in cui una zona di disponibilità contenga un solo hypervisor, il riavvio automatico non è possibile.













## Rete
Il servizio di rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete basata sulla tecnologia VPLS, offrendo una segmentazione flessibile e performante per rispondere alle esigenze dei clienti in termini di connettività e isolamento della rete.

### VLAN di livello 2

Le VLAN messe a disposizione nell'offerta IaaS sono di tipo **livello 2**, offrendo un isolamento di rete completo e una configurazione adattabile secondo le esigenze.

#### Concetti principali:
- **Condivisione tra cluster e zone di disponibilità (AZ)**:
  - Le VLAN possono essere condivise tra le diverse AZ e i diversi cluster appartenenti allo stesso tenant.
- **Propagazione inter-tenant**:
  - Le VLAN possono essere propagate tra più tenant appartenenti alla stessa organizzazione, facilitando le comunicazioni interne.

---

### Prestazioni di rete

L'infrastruttura di rete garantisce una bassa latenza per prestazioni ottimali:
- **Latenza intra-AZ**: Inferiore a **3 ms**.
- **Latenza inter-AZ**: Inferiore a **5 ms**.

---

### Punti chiave

1. **Flessibilità**: Le VLAN possono essere configurate per adattarsi ad ambienti multi-cluster e multi-tenant.
2. **Prestazioni elevate**: Una latenza minima assicura una comunicazione rapida ed efficace tra le zone di disponibilità.
3. **Isolamento e sicurezza**: Le VLAN di livello 2 offrono una segmentazione di rete rigorosa per proteggere i dati e i flussi.

---













## Archiviazione a blocchi

Cloud Temple offre diverse classi di archiviazione basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ permette di fornire il livello di prestazioni richiesto per gli ambienti dei nostri clienti grazie alla grande
quantità di memoria cache integrata nei controller e alla possibilità di distribuire l'intero IOPS
di un server su più SAN.

Viene anche utilizzata per consentire la replica delle tue LUN di archiviazione a blocchi tra le
zone di disponibilità o per facilitare gli interventi sulle baie di archiviazione.

L'archiviazione è principalmente di tipo FLASH NVME dedicata ai carichi di lavoro professionali.
I dischi vengono utilizzati dalle baie di archiviazione in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).
Le classe di archiviazione __'Mass Storage'__ offre dischi meccanici per le esigenze di archiviazione in un contesto di efficienza economica. Sono disponibili diversi livelli di prestazioni:

| Riferimento                      | Unità  | SKU                                          | 
|----------------------------------|--------|----------------------------------------------|
| FLASH - Essenziale - 500 IOPS/To | 1 Gio  | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To  | 1 Gio  | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To   | 1 Gio  | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To| 1 Gio  | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To    | 1 Gio  | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archiviazione     | 1 Tio  | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *La disponibilità dello storage è del 99.99% misurata mensilmente, comprendendo la finestra di manutenzione,*
- *Non ci sono restrizioni o quote su lettura o scrittura,*
- *Non vi è fatturazione per gli IOPS,*
- *Non vi è un impegno sulle prestazioni per la classe __'Mass Storage'__,*
- *La dimensione minima di una LUN di storage è di 500Gio,*
- *Quando si utilizza un meccanismo di replica dello storage, le prestazioni devono essere identiche in entrambe le zone di disponibilità,*
- *Non viene implementato alcun meccanismo "intelligente" di ottimizzazione come la compressione o la deduplicazione: quando si riservano 10Tio di archiviazione, si dispone fisicamente di 10Tio utili di archiviazione sui server IBM.*
- *Le LUN di storage sono dedicate all'ambiente del cliente.*

### Utilizzo nell'ambito dell'offerta di calcolo VMware

Nell'ambito dell'utilizzo dello storage in modalità blocco come datastore nell'offerta di calcolo VMware di Cloud Temple, **è necessario considerare diversi fattori importanti**:

1. **File di swap (.VSWP) durante l'avvio delle macchine virtuali**: Quando una macchina virtuale si avvia, crea un file .VSWP della dimensione della sua memoria su disco. Pertanto, per poter avviare le vostre macchine virtuali, dovete sempre disporre nel vostro datastore di uno spazio libero equivalente alla somma delle dimensioni delle memorie delle vostre macchine virtuali. Ad esempio, se il vostro datastore dispone di 1 Tio di archiviazione a blocchi e desiderate avviare 10 macchine virtuali con 64 Gio di memoria ciascuna, saranno necessari 640 Gio di spazio su disco. Senza questo spazio, l'avvio delle macchine sarà limitato dalla capacità disponibile per creare i file di swap.

2. **Spazio libero per i snapshot di backup**: Il servizio di backup utilizza snapshot. Pertanto, è necessario avere sempre spazio libero sufficiente per consentire la creazione di uno snapshot durante il backup di una macchina virtuale. La dimensione dello snapshot dipende dal volume di scrittura della macchina virtuale e dal tempo necessario per completare il backup. In generale, si consiglia di mantenere almeno il 10% di spazio libero per questa operazione.

3. **Gestione dei dischi dinamici**: Prestate attenzione all'uso dei dischi dinamici. Se non ne controllate la crescita, una mancanza di spazio fisico può causare un freeze della macchina virtuale nel migliore dei casi, o un crash con corruzione nel peggiore. È cruciale monitorare attentamente lo spazio disponibile sui vostri datastores quando utilizzate questo tipo di disco.

Una gestione proattiva dello spazio su disco è essenziale per assicurare il corretto funzionamento delle vostre macchine virtuali e l'affidabilità dei backup. Assicuratevi di disporre sempre dello spazio necessario per i file di swap, gli snapshot e la crescita dei dischi dinamici.

## Archiviazione in modalità backup

Lo storage dedicato al backup delle vostre macchine virtuali è auto-provisionato dalla piattaforma entro il limite del quota ordinato. 

| Riferimento                | Unità | SKU                                      | 
|----------------------------|-------|------------------------------------------|
| MASS STORAGE - Archiviazione| 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |

### Replica dello storage in modalità blocco

#### Principi

Per permettere l'implementazione dei vostri piani di ripristino dell'attività, quando non è possibile garantire la continuità operativa con meccanismi applicativi e quando la replica delle macchine virtuali non è adatta, Cloud Temple propone dei __meccanismi di replica dello storage in modalità blocco tra le zone di disponibilità di una regione__.

Questi meccanismi di replica sono applicati alle LUN di storage dei vostri ambienti, in aggiunta ai backup. La scelta dell'utilizzo di un meccanismo di replica su un ambiente __dipende da numerosi fattori, tra cui la sua criticità, la perdita di dati tollerata e le prestazioni mirate__ per l'applicazione.

Cloud Temple propone due tipi di meccanismi implementati in una configurazione attivo/passivo:

- La replica __asincrona__ (o __'Global Mirror'__): *La funzione __'Global Mirror'__ fornisce un processo di copia asincrono. Quando un host scrive sul volume primario, la conferma del completamento dell'I/O viene ricevuta prima che l'operazione di scrittura sia completata per la copia sul volume secondario. Se viene avviata un'operazione di failover, l'applicazione deve recuperare e applicare tutti gli aggiornamenti che non sono stati confermati sul volume secondario. Se le operazioni di I/O sul volume primario vengono messe in pausa per un breve periodo, il volume secondario può diventare una replica esatta del volume primario. Questa funzione è paragonabile a un processo di backup continuo in cui gli aggiornamenti più recenti sono sempre mancanti. Quando si utilizza Global Mirror a scopo di ripristino di emergenza, è necessario considerare come gestire questi aggiornamenti mancanti.*

- La replica __sincrona__ (o __'Metro Mirror'__): *La funzione __'Metro Mirror'__ è un tipo di copia remota che crea una copia sincrona dei dati da un volume primario a un volume secondario. Con le copie sincrone, le applicazioni host scrivono sul volume primario, ma non ricevono conferma che l'operazione di scrittura è completata finché i dati non sono scritti sul volume secondario. Questo garantisce che i due volumi contengano dati identici quando l'operazione di copia è completata. Dopo che l'operazione di copia iniziale è completata, la funzione Metro Mirror mantiene costantemente una copia completamente sincronizzata dei dati di origine sul sito di destinazione. __Dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più commercializzata.__*

Si definisce quindi un sito detto "attivo" o "principale" e un sito "passivo" o "standby". Il piano di ripristino dell'attività viene attivato in caso di disastro o nel contesto di una richiesta di test del PRA. Il sito passivo assume quindi il controllo del sito attivo.

#### Replica asincrona

Quando i vostri carichi di lavoro richiedono tempi di ripristino dell'attività brevi e non è accettabile o adeguato utilizzare meccanismi di tipo applicativo/replica di macchine virtuali, è possibile replicare una LUN di storage SAN tra due zone di disponibilità della stessa regione.

Questa offerta consente di ottenere un __RPO di 15Mn__ e un __RTO inferiore a 4H__. Permette di riprendere l'attività molto più rapidamente rispetto all'implementazione di un ripristino da backup.

In un volume di storage in replica asincrona (__Global Mirror__), i controller di virtualizzazione SAN delle due zone di disponibilità lavorano insieme per eseguire le operazioni di scrittura su entrambi i siti. Il sito principale non attende l'acknowledgment di scrittura del sito secondario.

Le fasi di un'operazione di scrittura sono le seguenti:

1. Un hypervisor desidera eseguire __un'operazione di scrittura su un volume Global-Mirror__: invia la sua richiesta al controller SAN della sua zona di disponibilità,
2. Il controller SAN locale chiede al controller SAN della zona remota di eseguire l'operazione di scrittura,
3. Il controller SAN locale non attende l'acknowledgment del SAN remoto e esegue quindi la scrittura localmente,
4. Fornisce __acknowledgment__ all'hypervisor che ha emesso la richiesta,
5. __Gli hypervisor del sito remoto non accedono direttamente alla LUN Global Mirror__: è necessaria una richiesta di servizio.

| SLA       | Descrizione                                                                                                                                       |   
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In caso di disastro sul datacenter principale, la quantità massima di dati persi corrisponde al massimo agli ultimi 15 minuti di scrittura         |
| RTO < 4H  | In caso di disastro sul datacenter principale, il ripristino dell'attività è garantito entro 4 ore a seconda della complessità degli ambienti.    |

In caso di attivazione del PRA, il team di Cloud Temple esegue un'operazione di presentazione della LUN __'Global Mirror'__ agli hypervisor remoti affinché possano accedere ai dati. L'implementazione di questa soluzione richiede quindi di aver riservato nel sito 'standby' risorse di calcolo e RAM per il ripristino dell'attività in caso di disastro.

L'uso di questa tecnologia richiede anche il raddoppiamento dello spazio su disco: è necessario avere esattamente lo stesso spazio sul sito remoto come sul sito locale. 
L'usage de ce mécanisme peut impacter la performance de l'application à hauteur de 10 %. __Solo le classi di storage 500 Iops/To, 1500 Iops/To e 3000 Iops/TO sono compatibili.__


| Référence                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STOCKAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* : 

- *L'offerta essendo asincrona, è possibile che in caso di un disastro alcune operazioni sui dischi non siano state scritte sul sito remoto. Potrebbe quindi esserci un rischio sulla coerenza dei dati, da mitigare nell'analisi del rischio del piano di ripresa dell'attività.*
- *La replica dello storage in modalità blocco avviene in modo trasparente per le macchine virtuali e le applicazioni,*
- *A tal proposito, è importante privilegiare gli scenari di replica applicativa o eventualmente di replica della macchina virtuale,*
- *Il calcolo e la memoria, sul sito di ripresa, possono essere ridotti per ottimizzare i costi se una situazione degradata è accettabile per il business durante l'esecuzione del piano di ripresa dell'attività.*


## Virtualisation VMware

L'offre de virtualisation VMware Cloud Temple qualifiée SecNumCloud est basée sur la technologie __VMware Vsphere__.

La plateforme est managées par Cloud Temple de façon automatique (maintien de condition de sécurité, maintien en condition opérationnelle, ...).
Elle est pilotable via l'interface graphique de la console Shiva ou via les APIs associées.

*__Remarque__* : *Per motivi di sicurezza legati alla qualificazione SecNumCloud,
__non è possibile per il committente accedere direttamente alla piattaforma di virtualizzazione VMware__ (nessun accesso diretto al vCenter in particolare).
Infatti, la qualificazione SecNumCloud impone __una totale segregazione__ tra le interfacce di gestione degli asset tecnici e l'interfaccia del committente (la console Shiva).*

- I prodotti implementati sono VMware ESXi, VMware Vcenter e VMware Replication.
- *La rete dell'offerta di virtualizzazione non utilizza la tecnologia VMware NSX, ma è gestita materialmente dalla tecnologia Juniper e dal protocollo VPLS.*
- *Lo storage non utilizza la tecnologia VMWare vSan, ma solo SAN IBM in fiber channel 32G.*
- *Non viene implementata alcuna forma di ottimizzazione nascosta (compressione, deduplicazione, ...).*

### Définition d'un cluster de lame de calcul ('Cpool')

Il __'Cpool'__ è un raggruppamento di hypervisor VMware ESXi, noto anche come *'cluster ESX'*.

Gli host presenti in un __'Cpool'__ appartengono tutti __allo stesso tenant e alla stessa area di disponibilità__ (AZ). Devono necessariamente avere la stessa classe:
__non è possibile mescolare modelli diversi di blade di calcolo all'interno dello stesso cluster__.

Tutti i blade di calcolo vengono consegnati con la massima quantità di memoria fisica, ma una limitazione di utilizzo della RAM viene applicata a livello software sul cluster per garantire che corrisponda alla RAM fatturata.

Di default, ciascun blade dispone di 128 Go di memoria attivata all'interno del __'Cpool'__.

Un __'Cpool'__ può contenere al massimo 32 hypervisor. Oltre questo limite, sarà necessario creare un secondo cluster.

Lo storage può essere condiviso tra i vari __'Cpool'__.

### Allocation Mémoire pour un 'Cpool'

La riserva di RAM è configurabile per cluster. È possibile ridurre o aumentare la quantità di RAM per farla corrispondere alle vostre esigenze a livello di cluster.

__Attenzione a non superare una media del 85 % di consumo di memoria per blade di calcolo__.
Infatti, la tecnologia VMware utilizzerà un metodo di ottimizzazione del tipo compressione che può impattare fortemente le prestazioni dei vostri carichi di lavoro e complicare la diagnosi.
Allo stesso modo, una pressione eccessiva della memoria sui vostri blade di calcolo costringerà l'hypervisor a scaricare una parte della sua memoria su disco per rispondere alle esigenze delle macchine virtuali.

Questo caso, chiamato __'Ballooning'__, impatta molto fortemente le prestazioni complessive delle macchine virtuali situate sullo storage (datastore) interessato.
__La diagnosi è complicata in questo contesto__, perché la vostra metrologia riscontrerà degli impatti a livello di CPU e non di memoria o di storage.
Tenete anche a mente che la prima cosa che fa l'hypervisor al momento dell'avvio di una macchina virtuale è creare __un file di swap memoria__ (.vswap) sul
disco, della dimensione della memoria della macchina virtuale interessata. Occorre __tenerne conto nel dimensionamento del vostro storage__.

Ogni blade di calcolo viene consegnato con 128Go di memoria attivata a livello software nel __'Cpool'__, ma dispone fisicamente di tutta la memoria allocabile.

Per esempio, per un cluster di tre host di tipo ```vmware:standard:v2```, la riserva di RAM all'attivazione del __'Cpool'_ sarà di 3 x 128Go = 384 Go di RAM.
Potrete estenderla al massimo a 3 x 384Go = 1152Go di memoria.

    Memoria minima di un 'Cpool' = numero di host X 128Go di memoria
    Memoria massima di un 'Cpool' = numero di host X la quantità di memoria fisica del blade di calcolo

### Catalogues de machines virtuelles Cloud Temple

Cloud Temple mette a vostra disposizione un catalogo di `Templates` regolarmente arricchito e aggiornato dai nostri team.
Comprende attualmente diverse decine di `Templates` e immagini da montare sulle vostre macchine virtuali.

### Mise a jour des Hyperviseurs
Cloud Temple fornisce regolarmente build per gli hypervisor al fine di garantire l'applicazione delle patch di sicurezza. 
Tuttavia, l'aggiornamento degli hypervisor rimane sotto la vostra responsabilità, poiché non abbiamo visibilità sui vostri vincoli aziendali.

Il processo di aggiornamento è completamente automatizzato. Per garantire una continuità del servizio, è richiesto un minimo di due hypervisor per cluster durante l'aggiornamento. Assicuratevi di disporre delle autorizzazioni necessarie per eseguire queste azioni.


### Gestion de l'affinité de vos machines virtuelles

Le __regole di affinità e anti-affinità__ permettono di controllare la collocazione delle macchine virtuali sui vostri hypervisor.
Possono essere utilizzate per gestire l'utilizzo delle risorse del vostro __'Cpool'__.
Per esempio, possono aiutare a bilanciare il carico di lavoro tra i server o isolare i carichi di lavoro che richiedono molte risorse.
In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion consente di spostare macchine virtuali da un host all'altro senza interruzione del servizio.

Potete configurare grazie alla gestione delle regole:

- __Regole di Affinità__ : Queste regole garantiscono che determinate macchine virtuali vengano eseguite sullo stesso host fisico.
Sono utilizzate per migliorare le prestazioni mantenendo le macchine virtuali che comunicano frequentemente
insieme sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili in scenari
dove la performance è critica, come nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di Anti-affinità__ : Al contrario, queste regole garantiscono che determinate macchine virtuali non vengano eseguite
sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, per esempio,
per evitare che macchine critiche vengano tutte colpite in caso di guasto di un unico server.
Le regole di anti-affinità sono cruciali per applicazioni che richiedono un'alta disponibilità,
come negli ambienti di produzione dove la tolleranza ai guasti è una priorità.
Per esempio, non desiderate che i vostri due Active Directory siano sullo stesso hypervisor.

Durante la creazione di una regola, definirete il tipo di regola (affinità / anti-affinità), il nome della regola,
il suo stato di attivazione (__'Statut'__) e le macchine interessate del vostro cluster di hypervisor.

*Remarque : le regole di affinità/anti-affinità proposte nella console sono regole riguardanti le macchine virtuali tra di loro (non regole tra hypervisor e macchine virtuali).*


### Réplication asynchrone de vos machines virtuelles en environnement VMware

La replica asincrona delle vostre macchine virtuali è un meccanismo che consiste nel trasferire a livello dell'hypervisor sorgente le operazioni di scrittura sul sito standby a intervalli di tempo regolari. 

Dopo una copia iniziale a caldo di tutto lo storage attivo sul sito standby, solo le scritture vengono trasferite a intervalli regolari sul sito in standby. 
Questo intervallo dipende dal volume di scrittura (da ogni ora a ogni 24 ore).

La replica delle macchine virtuali si basa sul meccanismo degli snapshot dell'hypervisor. A tal proposito, 
questa soluzione ha gli stessi inconvenienti, in particolare la sensibilità al volume di scritture della macchina virtuale, 
il processo di snapshot essendo un meccanismo ricorsivo per la chiusura dello snapshot.

L'esempio tipico di macchina che non supporta il meccanismo di replica delle macchine virtuali è un 
server FTP che riceve flussi in tempo reale da telecamere di sorveglianza. __La macchina passa il suo tempo a scrivere e non sarà 
in grado di chiudere uno snapshot senza mettere in pausa il sistema operativo per un periodo di tempo significativo
(diverse decine di minuti)__. Se l'hypervisor non riesce a chiudere lo snapshot, è esattamente ciò che farà,
senza possibilità di intervenire se non a corrompere la macchina virtuale.
| SLA             | Descrizione                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO da 1H a 24H | In caso di disastro sul datacenter principale, la quantità massima di dati persa è quella dell'ultimo push delle scritture sul sito standby. |
| RTO  < 15mn     | Operazione di avvio della macchina virtuale fermata sul sito remoto                                                                                |


In caso di necessità, o in caso di guasto su una macchina del sito principale, la macchina specchio sul sito standby viene attivata.
Il ripristino delle attività richiede di aver riservato sul sito standby capacità di calcolo e RAM in attesa. È necessario avere lo stesso spazio di archiviazione sul sito passivo come sul sito attivo.

| Referenza                         | Unità | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : Il calcolo del RPO minimo deve essere definito in funzione del tasso di cambiamento sulla macchina virtuale.*













## Backup delle macchine virtuali
Cloud Temple propone __un'architettura di backup incrociato nativa e non disattivabile__ (è obbligatoria nella qualificazione secnumcloud francese).

I backup sono archiviati in una zona di disponibilità e in un datacenter fisico diverso da quello che ospita la macchina virtuale.

Ciò consente di proteggersi in caso di guasto grave nel datacenter di produzione e di ripristinare su un datacenter secondario (ad esempio in caso di incendio).

Questa soluzione comprende:

- Il backup fuori sede a caldo di tutti i dischi,
- La presentazione e l'avvio istantaneo di una macchina virtuale dall'infrastruttura di mass storage e il caricamento a caldo sui SAN di produzione,
- Il ripristino parziale di file dal backup,
- Una ritenzione limitata solo dall'allocazione dello spazio di archiviazione di massa.

Questa infrastruttura di backup si basa sulla soluzione *IBM Spectrum Protect Plus*, una soluzione con architettura agentless,
semplice da usare e che permette l'automazione dei processi di backup oltre a un'ottimizzazione dello spazio di mass storage.

Le velocità di backup e ripristino dipendono dal tasso di cambiamento degli ambienti.
La politica di backup è configurabile dalla [Console Cloud Temple](../console/console.md) per ciascuna macchina virtuale.

*__Nota :__*

*__Alcune macchine virtuali non sono compatibili con questa tecnologia di backup__ che utilizza i meccanismi di snapshot dell'hypervisor.
Questi sono tipicamente macchine con un carico di scrittura su disco costante. Non è possibile per l'hypervisor chiudere lo snapshot il che
obbliga a congelare la macchina virtuale per poter terminare l'operazione di chiusura. Questo congelamento può durare diverse ore e non è arrestabile.*

*La soluzione è quindi di escludere il disco che è il bersaglio di scritture permanenti e di effettuare il backup dei dati con un altro metodo.*

| Referenza                                               | Unità | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Accesso al servizio IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Creare una politica di backup
Per aggiungere una nuova politica di backup, è necessario fare una richiesta al supporto. Il supporto è accessibile tramite l'icona di salvataggio in alto a destra della finestra.

La creazione di una nuova politica di backup avviene tramite __una richiesta di servizio__ indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua mail e n° di telefono per finalizzare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)