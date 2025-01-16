---
title: Concepts
---

L'offerta __IaaS (Infrastructure As A Service)__ di Cloud Temple è progettata per rispondere alle esigenze critiche di continuità e ripristino delle attività, con un particolare accento sui settori esigenti come l'industria, la banca e l'assicurazione. Basata su tecnologie all'avanguardia, questa infrastruttura garantisce una disponibilità massima e una performance ottimale per i carichi di lavoro critici.

## Una piattaforma tecnologica di fiducia

La piattaforma IaaS di Cloud Temple si basa su partner tecnologici di fama internazionale :

- Calcolo : **CISCO UCS**.
- Memoria : **IBM Spectrum Virtualize**, **IBM FlashSystem** per l'archiviazione a blocchi.
- Rete : **JUNIPER**.
- Virtualizzazione : **VMware**, offrendo una base affidabile e comprovata per gestire i tuoi ambienti cloud.
- Backup: **IBM Spectrum Protect Plus**, per l'orchestrazione e l'archiviazione dei backup.

Questa architettura si basa sul modello **VersaStack**, un'alleanza tra Cisco e IBM, garantendo una compatibilità estesa con i principali editori software.

## Un'infrastruttura dedicata e automatizzata

Sebbene completamente automatizzata grazie a API e un provider Terraform, l'offerta IaaS di Cloud Temple propone un'infrastruttura unica :

- **Risorse dedicate** : Le lame di calcolo, i volumi di archiviazione e gli stack software (virtualizzazione, backup, firewalling, ecc.) non sono mai condivisi tra i clienti.
- **Massima prevedibilità** : Puoi controllare i tassi di virtualizzazione, la pressione in IOPS sull'archiviazione e beneficiare di una fatturazione chiara, a consumo mensile.

La piattaforma è qualificata **SecNumCloud** dall'[ANSSI](https://www.ssi.gouv.fr/), garantendo un alto livello di automazione e sicurezza.

## Funzionalità principali

- Risorse di calcolo (CPU, RAM) dedicate e on-demand.
- Archiviazione on-demand (diverse classi disponibili).
- Risorse di rete (Internet, reti private).
- Backup incrociati con retention configurabile.
- Replicazione asincrona per l'archiviazione o le macchine virtuali.
- Gestione tramite la [Console Shiva](../console/console.md) o in modalità Infrastructure as Code grazie alle API e al provider Terraform.

## Vantaggi

| Vantaggio            | Descrizione                                                                                                                                    |   
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Fiducia digitale    | Ospitalità dei dati in Francia e conformità RGPD.                                                                                          |   
| Sicurezza            | Piattaforma altamente sicura, qualificata **SecNumCloud**, **HDS** (Hébergement des Données de Santé), **ISO 27001** e **ISAE 3402 type II**. |  
| Alta disponibilità  | Tasso di disponibilità della piattaforma del 99,99%, misurato mensilmente, incluse le finestre di manutenzione.                                        |   
| Resilienza          | Implementazione di piani di continuità o di ripristino dell'attività secondo le esigenze.                                                               |
| Automazione         | Piattaforma completamente automatizzata progettata per integrarsi in un programma di trasformazione digitale.                                        |
| On demand           | Risorse disponibili su richiesta.                                                                                                          |













## Calcolo

le lame fornite da Cloud Temple sono di tipo __CISCO UCS B200__ o __CISCO UCS X210c__ . Sono gestite interamente da Cloud Temple (firmware, versione OS, ...) tramite la console Cloud Temple.

Sono disponibili diverse categorie di lame di calcolo nel catalogo per supportare i tuoi carichi di lavoro (Virtualizzazione, Containerizzazione, ...).
Queste presentano caratteristiche e prestazioni diverse per rispondere al meglio alle tue esigenze. Il catalogo delle lame di calcolo evolve regolarmente.

Nel caso di utilizzo con un'offerta di virtualizzazione, un cluster di hypervisor è composto esclusivamente da lame di calcolo dello stesso tipo (non è possibile miscelare lame di diversi tipi nello stesso cluster).

| Riferimento             | RAM  __(1)__ | Frequenza __(2)__                         | Numero di core / thread | Connettività __(3)__ | GPU **(4)**          | SKU per l'offerta Vmware         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Lama ECO v3           | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Lama STANDARD v3      | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Lama ADVANCE v3       | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Lama PERFORMANCE 1 v3 | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Lama PERFORMANCE 2 v3 | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Lama PERFORMANCE 3 v3 | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Lama PERFORMANCE 4 v3 | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48go | csp:fr1:iaas:vmware:perf4:v3    |

__Note__ :

- __(1)__ La quantità di memoria fornita è quella fisicamente disponibile sulle lame. Non è possibile modificare la quantità di memoria fisica di una lama.

- __(2)__ La frequenza di base minima / frequenza turbo, espressa in GHz. Per impostazione predefinita, i processori sono configurati per una performance massima a livello di BIOS.

- __(3)__ La connettività fisica è condivisa per l'accesso alla rete e all'archiviazione a blocchi, la piattaforma CISCO è convergente.

- __(4)__ L'offerta di GPU disponibile evolve costantemente. Al 1° Maggio 2024, l'offerta è basata sulle GPU NVIDIA LOVELACE L40S. Per impostazione predefinita, la lama PERF4 è fornita con 2 schede L40S da 48 Go di RAM. Contatta il supporto per più dettagli se necessario.

La disponibilità dell'offerta di calcolo è del 99.99%, calcolata mensilmente, inclusa la finestra di manutenzione. L'eligibilità in caso di mancato rispetto del SLA è soggetta
alla creazione di un ticket incidente. Devi inoltre possedere almeno due host per cluster e attivare la funzionalità __High Availability__ (HA).
Questa funzionalità permette alla tua architettura di riavviare automaticamente le tue macchine virtuali sul secondo hypervisor.
Nell'ipotesi in cui una zona di disponibilità contenga un solo hypervisor, il riavvio automatico non è possibile.













## Rete
Il servizio rete sulla piattaforma IaaS di Cloud Temple si basa su un'infrastruttura di rete basata sulla tecnologia VPLS, offrendo una segmentazione flessibile e performante per rispondere alle esigenze dei clienti in termini di connettività e isolamento della rete.

### VLANs di livello 2

Le VLANs messe a disposizione nell'offerta IaaS sono di tipo **livello 2**, offrendo un isolamento di rete completo e una configurazione adattabile secondo le esigenze.

#### Principali concetti :
- **Condivisione tra cluster e zone di disponibilità (AZ)** : 
  - Le VLANs possono essere condivise tra le diverse AZ e i diversi cluster appartenenti allo stesso tenant.
- **Propagazione inter-tenant**: 
  - Le VLANs possono essere propagate tra più tenant appartenenti alla stessa organizzazione, facilitando le comunicazioni interne.

---

### Performance di rete

L'infrastruttura di rete garantisce una bassa latenza per prestazioni ottimali:
- **Latenza intra-AZ**: Inferiore a **3 ms**.
- **Latenza inter-AZ**: Inferiore a **5 ms**.

---

### Punti chiave

1. **Flessibilità**: Le VLANs possono essere configurate per adattarsi agli ambienti multi-cluster e multi-tenant.
2. **Alta performance**: Una latenza minima assicura una comunicazione rapida ed efficace tra le zone di disponibilità.
3. **Isolamento e sicurezza**: Le VLANs di livello 2 offrono una segmentazione della rete rigorosa per proteggere i dati e i flussi.

---













## Archiviazione a blocchi

Cloud Temple propone diverse classi di archiviazione basate sulla tecnologia [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnologia __IBM SVC__ permette di fornire il livello di performance richiesto per gli ambienti dei nostri clienti grazie alla grande
quantità di cache memoria integrata nei controller e alla possibilità di distribuire l'intero IOPS
di un server su diversi SAN.

Essa è anche utilizzata per permettere la replicazione dei tuoi LUN di archiviazione in modalità blocchi tra
le zone di disponibilità o facilitare le operazioni sulle unità di archiviazione.

L'archiviazione è principalmente di tipo FLASH NVME dedicata ai carichi di lavoro professionali.
I dischi sono utilizzati dalle unità di memorizzazione in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).
Le classe de stockage __'Mass Storage'__ propose des dischi meccanici per le esigenze di archiviazione in un contesto di efficienza economica. Sono disponibili diversi livelli di prestazioni:

| Référence                         | Unité | SKU                                          | 
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivage          | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *La disponibilité du stockage est de 99.99% mesuré mensuellement, plage de maintenance incluse,*
- *Il n'y a pas de restriction ou de quota sur la lecture ou l'écriture,*
- *Il n'y a pas de facturation à l'IOPS,*
- *Il n'y a pas d'engagement de performance sur la classe __'Mass Storage'__,*
- *La taille minimale d'une LUN de stockage est de 500Gio,*
- *Lors de l'usage d'un mécanisme de réplication de stockage, les performances doivent être identiques sur les deux zones de disponibilità,*
- *Aucun mécanisme d'optimisation "intelligent" de type compression o deduplicazione n'est mis en œuvre : quand vous réservez 10Tio de stockage, vous avez physiquement 10Tio utile de stockage mis en œuvre sur les machines IBM.*
- *Les LUNs de stockage sont dédiés à l'environnement client.*

### Utilizzazione nell'ambito dell'offerta di calcolo vmware

Nell'ambito dell'uso dello storage in modalità blocco sotto forma di datastore nell'offerta di calcolo VMware di Cloud Temple, **dovete tenere conto di diverse considerazioni importanti** :

1. **File di swap (.VSWP) all'avvio delle macchine virtuali** : Quando una macchina virtuale si avvia, crea un file .VSWP delle dimensioni della sua memoria sul disco. Pertanto, per poter avviare le vostre macchine virtuali, dovete avere sempre nel vostro datastore uno spazio libero equivalente alla somma delle dimensioni delle memorie delle vostre macchine virtuali. Ad esempio, se il vostro datastore dispone di 1 Tio di storage a blocchi e desiderate avviare 10 macchine virtuali di 64 Gio di memoria ciascuna, saranno necessari 640 Gio di spazio su disco. Senza questo spazio, l'avvio delle macchine sarà limitato dalla capacità disponibile per creare i file di swap.

2. **Spazio libero per i snapshot di backup** : Il servizio di backup utilizza snapshot. Pertanto, dovete sempre avere abbastanza spazio libero per consentire la creazione di uno snapshot durante il backup di una macchina virtuale. La dimensione dello snapshot dipende dal volume di scrittura della macchina virtuale e dal tempo necessario per completare il backup. In generale, è consigliato mantenere almeno il 10% di spazio libero per questa operazione.

3. **Gestione dei dischi dinamici** : Fate attenzione all'uso dei dischi dinamici. Se non ne controllate la crescita, una mancanza di spazio fisico può causare un blocco della macchina virtuale nel migliore dei casi, o un crash con corruzione nel peggiore dei casi. È cruciale monitorare attentamente lo spazio disponibile sui vostri datastores quando usate questo tipo di disco.

Una gestione proattiva dello spazio su disco è essenziale per assicurare il corretto funzionamento delle vostre macchine virtuali e la affidabilità dei backup. Assicuratevi di avere sempre lo spazio necessario per i file di swap, gli snapshot e la crescita dei dischi dinamici.

## Storage in modalità backup

Lo storage dedicato al backup delle vostre macchine virtuali è auto-provisionato dalla piattaforma [IBM Spectrum Protect Plus](backup.md) entro il limite della quota ordinata.

| Référence                | Unité | SKU                                      | 
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivage | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |


### Replicazione dello storage a blocchi

#### Principes

Per consentire l'implementazione dei vostri piani di ripresa dell'attività, quando non è possibile continuare l'attività con meccanismi applicativi e la replicazione delle macchine virtuali non è adatta, Cloud Temple propone __meccanismi di replicazione dello storage a blocchi tra le zone di disponibilità di una regione__.

Questi meccanismi di replicazione sono applicati sui LUNs di storage dei vostri ambienti, in complemento ai backup. La scelta di usare un meccanismo di replicazione su un environment __dipende da molti fattori come la sua criticità, la perdita di dati tollerata o le prestazioni desiderate__ per l'applicazione.

Cloud Temple propone due tipi di meccanismi implementati in una configurazione attiva/passiva:

- La replica __asincrona__ (o __'Global Mirror'__) : *La funzione __'Global Mirror'__ fornisce un processo di copia asincrono. Quando un host scrive sul volume primario, la conferma del completamento dell’I/O è ricevuta prima che l'operazione di scrittura termini per la copia sul volume secondario. Se viene avviata un'operazione di failover, l'applicazione deve recuperare e applicare tutti gli aggiornamenti che non sono stati confermati sul volume secondario. Se le operazioni di I/O sul volume primario sono sospese per un breve periodo, il volume secondario può diventare una corrispondenza esatta del volume primario. Questa funzione è paragonabile a un processo di backup continuo in cui sono sempre mancanti gli ultimi aggiornamenti. Quando si utilizza Global Mirror a fini di ripristino di emergenza, occorre pensare a come gestire questi aggiornamenti mancanti.*

- La replica __sincrona__ (o __'Metro Mirror'__) : *La funzione __'Metro Mirror'__ è un tipo di copia remota che crea una copia sincrona delle dati di un volume primario in un volume secondario. Con copie sincrone, le applicazioni host scrivono sul volume primario, ma non ricevono conferma che l’operazione di scrittura è completata finché i dati non sono stati scritti sul volume secondario. Questo garantisce che entrambi i volumi contengano dati identici al termine dell'operazione di copia. Dopo che l'operazione di copia iniziale è completata, la funzione Metro Mirror mantiene continuamente una copia completamente sincronizzata dei dati di origine sul sito di destinazione. __Dal 1° gennaio 2024, la funzione 'Metro Mirror' non è più commercializzata.__*

Si definisce quindi un sito "attivo" o "principale" e un sito "passivo" o "standby". Il piano di ripresa dell'attività è attivato in caso di disastro o in caso di richiesta di test del PRA. Il sito passivo poi subentra al sito attivo.

#### Replica asincrona

Quando i vostri carichi di lavoro necessitano di tempi di ripresa dell'attività brevi e non è accettabile o adatto l’uso di meccanismi come la replica applicativa / replica delle macchine virtuali, è possibile replicare un LUN di storage SAN tra due zone di disponibilità della stessa regione.

Questa offerta consente di ottenere un __RPO di 15Mn__ e un __RTO inferiore a 4H__. Permette di ripartire molto più rapidamente rispetto all'implementazione di un ripristino di backup.

In un volume di storage in replicazione asincrona (__Global Mirror__), i controller di virtualizzazione SAN delle due zone di disponibilità lavorano insieme per eseguire le operazioni di scrittura sui due siti. Il sito maestro non attende l'acquittamento della scrittura del sito schiavo.

I passaggi di un'operazione di scrittura sono i seguenti:

1. Un hypervisor desidera effettuare __un'operazione di scrittura su un volume Global-Mirror__: invia la sua richiesta al controller SAN nella sua zona di disponibilità,
2. Il controller SAN locale richiede al controller SAN della zona remota di effettuare l’operazione di scrittura,
3. il controller SAN locale non attende l’acquittamento del SAN remoto e quindi esegue la scrittura localmente,
4. Dà __acquittamento__ all’hypervisor che ha inviato la richiesta,
5. __Gli hypervisors del sito remoto non accedono direttamente al LUN Global Mirror__: è necessaria una richiesta di servizio.

| SLA       | Description                                                                                                                                       |   
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In caso di disastro nel datacenter principale, la quantità massima di dati persi corrisponde al massimo agli ultimi 15 minuti di scrittura         |
| RTO < 4H  | In caso di disastro nel datacenter principale, la ripresa dell'attività è garantita entro 4 ore a seconda della complessità degli ambienti          |

In caso di attivazione del PRA, il team di Cloud Temple effettua un'operazione di presentazione del LUN __'Global Mirror'__ agli hypervisors remoti per consentire loro di accedere ai dati. L’implementazione di questa soluzione richiede quindi di aver riservato risorse di calcolo e RAM sul sito 'standby' per riprendere l’attività in caso di disastro.

L'utilizzo di questa tecnologia richiede anche il raddoppio dello spazio su disco: è necessario avere esattamente lo stesso spazio sul sito remoto che sul sito locale.
L'uso di questo meccanismo può impattare le performance dell'applicazione fino al 10%. __Solo le classi di archiviazione 500 Iops/To, 1500 Iops/To e 3000 Iops/TO sono compatibili.__


| Riferimento                       | Unità  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *Essendo l'offerta asincrona, in caso di sinistro è possibile che alcune operazioni disco non siano state scritte sul sito remoto. Ci può quindi essere un rischio sulla coerenza dei dati, da mitigare nell'analisi del rischio del piano di ripristino dell'attività.*
- *La replicazione dello storage in modalità blocco avviene in modo trasparente per le macchine virtuali e le applicazioni,*
- *A tal proposito, è importante privilegiare gli scenari di replicazione applicativa o eventualmente di replicazione di macchine virtuali,*
- *Il calcolo e la memoria, sul sito di ripristino, possono essere ridotti per ottimizzare i costi se una situazione degradata è accettabile per il business durante l'azione del piano di ripristino dell'attività.*

## Virtualizzazione VMware

L'offerta di virtualizzazione VMware Cloud Temple qualificata SecNumCloud è basata sulla tecnologia __VMware Vsphere__.

La piattaforma è gestita da Cloud Temple in modo automatico (mantenimento delle condizioni di sicurezza, mantenimento delle condizioni operative, ...).
È controllabile tramite l'interfaccia grafica della console Shiva o tramite le relative API.

*__Nota__*: *Per motivi di sicurezza legati alla qualificazione SecNumCloud,
__non è possibile per il committente accedere direttamente alla piattaforma di virtualizzazione VMware__ (nessun accesso diretto al vCenter in particolare).
Infatti, la qualificazione SecNumCloud impone __una totale segregazione__ tra le interfacce di gestione degli asset tecnici e l'interfaccia del committente (la console Shiva).*

- I prodotti implementati sono VMware ESXi, VMware Vcenter e VMware Replication.
- *La rete dell'offerta di virtualizzazione non utilizza la tecnologia VMware NSX, ma è gestita materialmente dalla tecnologia Juniper e dal protocollo VPLS.*
- *Lo storage non utilizza la tecnologia VMware vSan, ma solo SAN IBM in fibra ottica 32G.*
- *Non viene implementata alcuna forma di ottimizzazione nascosta (compressione, deduplicazione, ...).*

### Definizione di un cluster di lame di calcolo ('Cpool')

Il __'Cpool'__ è un raggruppamento di hypervisor VMware ESXi, noto anche come *'cluster ESX'*.

Gli host presenti in un __'Cpool'__ appartengono tutti __allo stesso tenant e alla stessa zona di disponibilità__ (AZ). Devono necessariamente avere la stessa classe:
__non è possibile mescolare modelli diversi di lame di calcolo all'interno dello stesso cluster__.

Tutte le lame di calcolo essendo consegnate con la massima quantità di memoria fisica, una limitazione di utilizzo della RAM viene applicata a livello del cluster per assicurarsi che corrisponda alla RAM fatturata.

Di default, ogni lama dispone di 128Go di memoria attivata all'interno del __'Cpool'__.

Un __'Cpool'__ può contenere al massimo 32 hypervisor. Oltre questo limite, sarà necessario creare un secondo cluster.

Lo storage può essere condiviso tra i __'Cpool'__.

### Allocazione Memoria per un 'Cpool'

La prenotazione della RAM è configurabile per cluster. Puoi ridurre o aumentare la quantità di RAM per farla corrispondere alle tue esigenze a livello di cluster.

__Attenzione a non superare una media dell'85% di consumo di memoria per lama di calcolo__.
Infatti, la tecnologia VMware utilizzerà un metodo di ottimizzazione del tipo compressione che può impattare fortemente le performance dei tuoi carichi di lavoro e complicare la diagnosi.
Allo stesso modo, una pressione di memoria troppo forte sulle tue lame di calcolo costringerà l'hypervisor a scaricare parte della sua memoria su disco per rispondere alle esigenze delle macchine virtuali.

Questo caso, chiamato __'Ballooning'__ impatta fortemente tutte le performance delle macchine virtuali situate sullo storage (datastore) coinvolto.
__La diagnosi è complicata in questo contesto__, poiché la tua metrologia riscontrerà impatti a livello di CPU e non di memoria o di storage.
Tieni anche presente che la prima cosa che fa l'hypervisor all'avvio di una macchina virtuale è creare __un file di swap memoria__ (.vswap) sul
disco, delle dimensioni della memoria della macchina virtuale coinvolta. Devi __tenerne conto nel dimensionamento del tuo storage__.

Ogni lama di calcolo viene consegnata con 128Go di memoria attivata a livello software nel __'Cpool'__ ma dispone fisicamente della totalità della memoria allocabile.

Ad esempio, per un cluster di tre host di tipo ```vmware:standard:v2```, la prenotazione della RAM all'attivazione del __'Cpool'_ sarà di 3 x 128Go = 384 Go di RAM.
Potrai estenderla al massimo a 3 x 384Go = 1152Go di memoria.

    Minimo di memoria di un 'Cpool' = numero di host X 128Go di memoria
    Massimo di memoria di un 'Cpool' = numero di host X la quantità di memoria fisica della lama di calcolo

### Cataloghi di macchine virtuali Cloud Temple

Cloud Temple mette a tua disposizione un catalogo di `Template` regolarmente arricchito e aggiornato dai nostri team.
Comprende a oggi diverse decine di `Template` e immagini da montare sulle tue macchine virtuali.

### Aggiornamento degli Hypervisor
Cloud Temple fornisce regolarmente build per gli hypervisor al fine di garantire l'applicazione delle patch di sicurezza. 
Tuttavia, l'aggiornamento degli hypervisor rimane sotto la tua responsabilità, poiché non abbiamo visibilità sulle tue esigenze aziendali.

Il processo di aggiornamento è interamente automatizzato. Per garantire una continuità di servizio, è richiesto un minimo di due hypervisor per cluster durante l'aggiornamento. Assicurati di disporre dei permessi necessari per effettuare queste azioni.


### Gestione dell'affinità delle tue macchine virtuali

Le __regole di affinità e anti-affinità__ permettono di controllare la posizione delle macchine virtuali sui tuoi hypervisor.
Possono essere utilizzate per gestire l'uso delle risorse del tuo __'Cpool'__.
Ad esempio, possono aiutare a bilanciare il carico di lavoro tra i server o a isolare carichi di lavoro che consumano molte risorse.
In un __'Cpool'__ VMware, queste regole sono spesso utilizzate per gestire il comportamento delle macchine virtuali con vMotion.
vMotion permette di spostare macchine virtuali da un host a un altro senza interruzione del servizio.

È possibile configurare grazie alla gestione delle regole:

- __Regole di Affinità__ : Queste regole assicurano che alcune macchine virtuali vengano eseguite sullo stesso host fisico.
Vengono utilizzate per migliorare le performance mantenendo le macchine virtuali che comunicano frequentemente
insieme sullo stesso server per ridurre la latenza di rete. Le regole di affinità sono utili in scenari
dove la performance è critica, come nel caso di database o applicazioni che richiedono una comunicazione rapida tra i server.

- __Regole di Anti-affinità__ : Al contrario, queste regole garantiscono che alcune macchine virtuali non siano eseguite
sullo stesso host fisico. Sono importanti per la disponibilità e la resilienza, ad esempio,
per evitare che macchine critiche siano tutte colpite in caso di guasto di un singolo server.
Le regole di anti-affinità sono cruciali per le applicazioni che richiedono alta disponibilità,
come negli ambienti di produzione dove la tolleranza ai guasti è una priorità.
Ad esempio, non si desidera che i due Active Directory siano sullo stesso hypervisor.

Durante la creazione di una regola, si definisce il tipo di regola (affinità / anti-affinità), il nome della regola,
il suo stato di attivazione (__'Stato'__) e le macchine interessate dal tuo cluster di hypervisor.

*Nota: le regole di affinità/anti-affinità proposte nella console sono regole riguardanti le macchine virtuali tra di loro (non ci sono regole tra hypervisor e macchine virtuali).*

### Replicazione asincrona delle tue macchine virtuali in ambiente VMware

La replicazione asincrona delle tue macchine virtuali è un meccanismo che consiste nel spingere a livello dell'hypervisor sorgente le operazioni di scrittura sul sito standby a intervalli di tempo regolari.

Dopo una copia iniziale a caldo di tutto lo storage attivo sul sito standby, vengono spinte solo le scritture a intervalli regolari sul sito in standby.
Questo intervallo dipende dal volume di scrittura (da ogni ora a ogni 24 ore).

La replicazione delle macchine virtuali si basa sul meccanismo degli snapshot dell'hypervisor. A tal proposito,
questa soluzione ha gli stessi inconvenienti, in particolare la sensibilità al volume di scritture della macchina virtuale,
poiché il processo di snapshot è un meccanismo ricorsivo per la chiusura dello snapshot.

L'esempio tipico di macchina che non supporta il meccanismo di replicazione delle macchine virtuali è un
server FTP che riceve flussi in tempo reale da telecamere di sorveglianza. __La macchina passa il suo tempo a scrivere e non sarà
in grado di chiudere uno snapshot senza mettere in pausa il sistema operativo per un periodo di tempo significativo
(diverse decine di minuti)__. Se l'hypervisor non riesce a chiudere lo snapshot, farà esattamente questo,
senza possibilità di intervenire se non per corrompere la macchina virtuale.
| SLA             | Descrizione                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H à 24H | In caso di disastro sul datacenter principale, la quantità massima di dati persi è quella dell'ultima spinta delle scritture sul sito standby.             |
| RTO  < 15mn     | Operazione di avvio della macchina virtuale arrestata sul sito remoto                                                                                     |


In caso di necessità, o in caso di guasto su una macchina del sito principale, viene attivata la macchina specchio sul sito standby. 
Il ripristino dell'attività richiede di aver riservato sul sito standby della capacità di calcolo e della RAM in standby. È 
necessario avere lo stesso spazio di archiviazione sul sito passivo come sul sito attivo.


| Riferimento                         | Unità | SKU                                             |  
|-------------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ   | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : Il calcolo del RPO minimo deve essere definito in funzione del tasso di cambiamento sulla macchina virtuale.*













## Backup di macchine virtuali
Cloud Temple propone __un'architettura di backup incrociata nativa e non disattivabile__ (è obbligatoria nella qualifica secnumcloud francese).

I backup sono memorizzati in una zona di disponibilità e in un datacenter fisico diverso da quello che ospita la macchina virtuale.

Ciò consente di proteggersi in caso di guasto grave al datacenter di produzione e di ripristinare su un datacenter secondario (incendio ad esempio).

Questa soluzione comprende:

- Il backup offsite a caldo dell'intero set di dischi,
- La presentazione e l'avvio immediato di una macchina virtuale dall'infrastruttura di mass storage e il caricamento a caldo sui SAN di produzione,
- Il ripristino parziale dei file dal backup,
- Una ritenzione limitata solo dall'allocazione dello spazio di archiviazione di massa.

Questa infrastruttura di backup è basata sulla soluzione *IBM Spectrum Protect Plus*, una soluzione a architettura senza agent,
semplice da usare e che consente l'automazione dei processi di backup oltre a un'ottimizzazione dello spazio di mass storage.

Le velocità di backup e di ripristino dipendono dal tasso di cambiamento sugli ambienti.
La politica di backup è configurabile tramite [la Console Cloud Temple](../console/console.md) per ogni macchina virtuale.

*__Nota :__*

*__Alcune macchine virtuali non sono compatibili con questa tecnologia di backup__ che utilizza i meccanismi di snapshot dell'hypervisor.
Queste sono tipicamente le macchine il cui carico di scrittura su disco è costante. Non è possibile per l'hypervisor chiudere lo snapshot, il che
obbliga a congelare la macchina virtuale per completare l'operazione di chiusura. Questo congelamento può durare diverse ore e non è annullabile.*

*La soluzione è quindi escludere il disco che è il bersaglio di scritture permanenti e eseguire il backup dei dati con un altro metodo.*

| Riferimento                                               | Unità | SKU                            |
|-----------------------------------------------------------|-------|--------------------------------|
| BACKUP - Accesso al servizio IBM Spectrum Protect Plus     | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Creare una politica di backup
Per aggiungere una nuova politica di backup, bisogna fare una richiesta al supporto. Il supporto è accessibile dall'icona del salvagente in alto a destra della finestra.

La creazione di una nuova politica di backup è realizzata tramite __una richiesta di servizio__ che indica:

    Il nome della tua Organizzazione
    Il nome di un contatto con la sua email e n° di telefono per completare la configurazione
    Il nome del tenant
    Il nome della politica di backup
    Le caratteristiche (x giorni, y settimane, z mesi, ...)