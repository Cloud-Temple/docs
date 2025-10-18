---
title: Distribuire risorse
---
import shivaOrdersList from './images/shiva_orders_list.png'
import shivaOrderNotif_001 from './images/shiva_order_notif_001.png'
import shivaOrderStatus from './images/shiva_order_status.png'
import shivaOrderAz_01 from './images/shiva_order_az_01.png'
import shivaOrderAz_02 from './images/shiva_order_az_02.png'
import shivaOrderAz_03 from './images/shiva_order_az_03.png'
import shivaOrderAz_04 from './images/shiva_order_az_04.png'
import shivaOrderAz_05 from './images/shiva_order_az_05.png'
import shivaOrderAz_06 from './images/shiva_order_az_06.png'
import shivaOrderAz_07 from './images/shiva_order_az_07.png'
import shivaOrderAz_08 from './images/shiva_order_az_08.png'
import shivaOrderClucalc_01 from './images/shiva_order_clucalc_01.png'
import shivaOrderClucalc_02 from './images/shiva_order_clucalc_02.png'
import shivaOrderClucalc_03 from './images/shiva_order_clucalc_03.png'
import shivaOrderClucalc_04 from './images/shiva_order_clucalc_04.png'
import shivaOrderClucalc_05 from './images/shiva_order_clucalc_05.png'
import shivaOrderClusto_01 from './images/shiva_order_clusto_01.png'
import shivaOrderClusto_02 from './images/shiva_order_clusto_02.png'
import shivaOrderClusto_03 from './images/shiva_order_clusto_03.png'
import shivaOrderClusto_04 from './images/shiva_order_clusto_04.png'
import shivaOrdersIaasSpoolDs from './images/shiva_orders_iaas_spool_ds.png'
import shivaOrdersNet_002 from './images/shiva_orders_net_002.png'
import shivaOrdersNet_003 from './images/shiva_orders_net_003.png'
import shivaOrdersNet_004 from './images/shiva_orders_net_004.png'
import shivaOrdersIaasCpoolEsx from './images/shiva_orders_iaas_cpool_esx.png'
import shivaOrdersIaasCpoolMemory from './images/shiva_orders_iaas_cpool_memory.png'

## Concetto

Il monitoraggio del deployment delle nuove risorse è gestito nel menu __'Ordini'__ accessibile nella barra verde a sinistra dello schermo.

Consente di visualizzare le risorse Cloud ordinate, in fase di deployment e eventuali errori all'interno di un [Tenant](iam/concepts.md#tenant) della propria [Organizzazione](iam/concepts.md#organizzazioni).

<img src={shivaOrdersList} />

*__Nota: Al momento, non è ancora possibile visualizzare un quadro generale a livello di organizzazione di tutte le risorse distribuite nei diversi tenant.__ Questo aspetto sarà affrontato in futuro con l'implementazione di un portale dedicato al committente (nel senso di firmatario) e al controllo della propria organizzazione.*

Il deployment delle risorse o la loro rimozione avviene all'interno di ciascun prodotto nei menu __'IaaS'__ e __'Rete'__ a sinistra nello schermo nella barra verde.

È inoltre possibile visualizzare direttamente le consegne nelle notifiche della console Cloud Temple:

<img src={shivaOrderNotif_001} />

Dalla pagina degli ordini, è possibile visualizzare lo stato di avanzamento di una consegna e, eventualmente, interagire con l'équipe fornendo commenti o ulteriori informazioni:

<img src={shivaOrderStatus} />

__Nota__: __Non è possibile avviare più ordini contemporaneamente per lo stesso tipo di risorsa. È quindi necessario attendere il completamento dell'ordine in corso prima di poterne avviare un altro.__ Ciò garantisce una gestione efficiente e ordinata delle risorse all'interno del proprio ambiente.

## Richiedere una nuova zona di disponibilità

È possibile aggiungere una nuova zona di disponibilità accedendo al menu "__Ordine__". Questa opzione ti permette di espandere le tue risorse e di migliorare la disponibilità e la resilienza delle tue applicazioni in pochi clic soltanto:

<img src={shivaOrderAz_01} />

Inizia selezionando la posizione desiderata, scegliendo prima la regione geografica, quindi la zona di disponibilità (AZ) corrispondente tra quelle disponibili. Questa fase permette di adattare il deployment delle tue risorse in base alla localizzazione e ai requisiti della tua infrastruttura:

<img src={shivaOrderAz_02} />

Successivamente, procedi alla selezione del tipo di cluster di hypervisor desiderato, scegliendo quello che meglio risponde alle esigenze di prestazioni e gestione della tua infrastruttura cloud:

<img src={shivaOrderAz_03} />

Seleziona quindi il numero di hypervisor nonché la quantità di memoria desiderata, in modo da adattare le risorse al carico di lavoro e alle esigenze specifiche del tuo ambiente cloud:

<img src={shivaOrderAz_04} />

Seleziona quindi il numero di datastore da provisioning nel cluster e i loro tipi. È importante notare che il numero massimo di datastore consentito è 10, con un minimo di 2 datastore richiesti. Ogni tipo di datastore diverso comporterà la creazione di un datastoreCluster aggiuntivo. Ad esempio, se scegli 2 datastore di tipo "live" e 1 datastore di tipo "mass", si formeranno 2 datastoreClusters distinti:

<img src={shivaOrderAz_05} />

Definisci la dimensione di archiviazione necessaria per il backup, assicurandoti di prevedere una capacità equivalente a quella del tuo archiviazione di produzione. Tieni conto di un tasso di compressione medio di 2 per ottimizzare lo spazio di backup e garantire una protezione efficace dei tuoi dati:

<img src={shivaOrderAz_06} />

Seleziona i network da propagare in base alle tue esigenze. Hai inoltre la possibilità di abilitare l'opzione "Accesso Internet" se necessario, definendo il numero di indirizzi IP desiderati, con una scelta compresa tra 1 e un massimo di 8:

<img src={shivaOrderAz_07} />

Otterrai quindi un riepilogo delle opzioni selezionate prima di confermare il tuo ordine.

<img src={shivaOrderAz_08} />

## Richiedere risorse di archiviazione aggiuntive

La logica di allocazione dello storage in modalità blocco sui cluster di calcolo si basa sulla tecnologia __IBM SVC (San Volume Controller)__ e __IBM FlashSystem__. Lo storage è organizzato in __LUN da almeno 500 GiB__, presentate secondo la tecnologia utilizzata:
- Per __VMware__: in forma di __datastore__ raggruppati in __cluster SDRS (Storage Distributed Resource Scheduler)__
- Per __Bare Metal__: in forma di __volumi__
- Per __Open IaaS__: in forma di __Storage Repository (SR)__

Ogni datastore eredita una __classe di prestazioni__ definita in IOPS/To (da 500 a 15000 IOPS/To per il FLASH, senza garanzia per il MASS STORAGE). Il limite di IOPS viene applicato __a livello di datastore__ (e non per VM), il che significa che tutte le macchine virtuali condividendo lo stesso datastore condividono il quota di IOPS assegnata.

__Punti chiave da ricordare__:

- __Dimensione minima__: 500 GiB per LUN
- __Prestazioni__: proporzionali al volume allocato (es: 2 TiB nella classe Standard = 3000 IOPS massimi)
- __Organizzazione__: i datastore dello stesso tipo vengono automaticamente raggruppati in cluster di datastore
- __Disponibilità__: 99,99% misurata mensilmente, incluse le finestre di manutenzione
- __Spazio necessario__: prevedere sempre lo 10% di spazio libero per i snapshot di backup e l'equivalente della somma della RAM delle VM per i file .VSWP

### Deploy a new compute cluster

Place a request for a hypervisor cluster by selecting the options that best suit your virtualization requirements. Define key characteristics such as the number of hypervisors, cluster type, amount of memory, and required computing resources:

<img src={shivaOrderClucalc_01} />

Select the availability zone:

<img src={shivaOrderClucalc_02} />

Choose the compute blade type:

<img src={shivaOrderClucalc_03} />

You can then select existing networks to propagate, or create new ones directly at this stage, depending on your infrastructure needs. Note that the total number of configurable networks is limited to a maximum of 20:

<img src={shivaOrderClucalc_04} />

You will then receive a summary of the selected options before validating your order, after which you can view your ongoing order:

<img src={shivaOrderClucalc_05} />

### Distribuire un nuovo cluster di archiviazione

Nel menu "__comando__", effettua l'ordine di un __nuovo cluster di archiviazione__ per il tuo ambiente selezionando le opzioni che corrispondono ai tuoi requisiti in termini di capacità, prestazioni e ridondanza. Seleziona la posizione:

<img src={shivaOrderClusto_01} />

Definisci il numero di datastores da provisioning all'interno del cluster, nonché il loro tipo, rispettando i seguenti limiti: un minimo di 2 datastores e un massimo di 10 possono essere configurati. Scegli i tipi di datastore che meglio rispondono ai tuoi bisogni in termini di prestazioni, capacità e utilizzo, al fine di ottimizzare l'archiviazione del tuo ambiente:

<img src={shivaOrderClusto_02} />

Seleziona il tipo di archiviazione desiderato tra le diverse opzioni disponibili:

<img src={shivaOrderClusto_03} />

Successivamente, accederai a un riepilogo completo delle opzioni selezionate, che ti permetterà di verificare tutti i parametri prima di confermare definitivamente il tuo ordine:

<img src={shivaOrderClusto_04} />

### Deploy a new datastore within a VMware SDRS cluster

In this example, we will add block storage for a VMware infrastructure.  
To add an additional datastore to your SDRS cluster, go to the __'Infrastructure'__ submenu, then __'VMware'__.  
Select the desired VMware stack and availability zone, then navigate to the __'Storage'__ submenu.

Choose the SDRS cluster that matches the performance characteristics you require, and click the __'Add a datastore'__ button located in the table listing the datastores.

<img src={shivaOrdersIaasSpoolDs} />

__Note__:

- *The minimum size of an activatable LUN on a cluster is __500 GiB__.*
- *Datastore performance ranges from an average of 500 iops/TiB to 15,000 iops/TiB on average. __This is a software-based limit enforced at the storage controller level__.*
- *The disk volume billing for your organization is the sum of all LUNs across the availability zones used.*
- *The __'order'__ and __'compute'__ permissions are required on the account to perform this action.*

### Richiedere nuovi reti

La tecnologia di rete utilizzata sull'infrastruttura Cloud Temple si basa su [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). Ti permet di beneficiare di __reti di livello 2 con continuità tra le tue zone di disponibilità all'interno di una regione__.

È inoltre possibile condividere reti tra i tuoi tenant e terminarle in una zona di hosting.  
In termini basilari, puoi immaginare una rete Cloud Temple come un VLAN 802.1q disponibile in ogni punto del tuo tenant.

Le reti sulla piattaforma Cloud Temple sono di __livello 2 (VLAN)__ basate sulla tecnologia __VPLS (Virtual Private LAN Service)__ . Questa tecnologia ti consente di godere di una __continuità di rete tra le tue zone di disponibilità__ all'interno di una regione, con prestazioni garantite:

- __Latenza intra-AZ__ : < 3 ms  
- __Latenza inter-AZ__ : < 5 ms  

__Flessibilità delle reti__:

- Una rete può essere __condivisa tra diversi cluster__ della stessa zona di disponibilità  
- Una rete può essere __propagata tra diverse zone di disponibilità__ della stessa regione  
- Una rete può essere __condivisa tra diversi tenant__ della tua organizzazione  
- Una rete può essere __terminata in una zona di hosting__ per i tuoi dispositivi fisici  
- __Limite__ : massimo 20 reti per richiesta. Puoi effettuare più richieste consecutive per superare questo limite in base alle tue esigenze  

La richiesta di una nuova rete e le decisioni relative alla condivisione tra i tuoi tenant vengono effettuate nel menu __'Rete'__ della barra verde a sinistra dello schermo. Le reti verranno prima create, quindi verrà generata una richiesta separata per la propagazione. Puoi monitorare lo stato delle richieste in corso accedendo all'opzione "Richiesta" nel menu, oppure facendo clic sui label informativi che ti reindirizzano alle richieste attive o in elaborazione.

<img src={shivaOrdersNet_002} />

È inoltre possibile propagare reti già esistenti o separare le due fasi, iniziando con la creazione della rete e procedendo successivamente con la propagazione in base alle tue esigenze. L'opzione di propagazione si trova nelle opzioni della rete selezionata:

<img src={shivaOrdersNet_003} />

Fai clic sull'opzione "Propagare" per una rete già esistente, quindi seleziona la destinazione di propagazione desiderata. Questa fase ti permette di definire l'ubicazione o le risorse su cui la rete deve essere propagata:

<img src={shivaOrdersNet_004} />

### Disattivazione di una rete

Una rete può essere disattivata se necessario. Questa opzione consente di sospendere temporaneamente l'accesso o l'utilizzo della rete senza eliminarla definitivamente, offrendo così flessibilità nella gestione dell'infrastruttura in base alle proprie esigenze.

L'opzione di disattivazione si trova nelle opzioni della rete selezionata.

## Aggiungere ulteriori hypervisor a un cluster di calcolo

Un __cluster di calcolo__ è un raggruppamento di hypervisor che devono rispettare le seguenti regole:

### Per i cluster VMware ESXi

__Regole di omogeneità__:

- Tutti gli host di un cluster devono essere dello __stesso tipo di lamina__ (ECO, STANDARD, ADVANCE, PERFORMANCE, ecc.)
- Tutti gli host appartengono allo __stesso tenant e alla stessa zona di disponibilità__
- __Limite__: massimo 32 hypervisor per cluster

__Assegnazione della memoria__:

- Ogni lamina viene consegnata con __tutta la memoria fisica attivata fin dall'inizio__
- __Esempio__: un cluster di 3 lamine STANDARD v3 (384 GB fisici ciascuna) = 3 × 384 GB = 1152 GB disponibili
- __Raccomandazione__: non superare l'85% di utilizzo della memoria per lamina per evitare l'attivazione del meccanismo di compressione VMware e del ballooning

__Alta disponibilità__:

- __Minimo raccomandato__: 2 hypervisor per cluster per beneficiare del SLA del 99,99%
- Attivare la funzionalità __VMware HA__ (High Availability) per il riavvio automatico delle VM in caso di guasto di un host

L'aggiunta di hypervisor a un cluster di calcolo avviene nel menu __'IaaS'__ nella barra verde a sinistra dello schermo.  
Nell'esempio seguente, aggiungeremo capacità di calcolo a un cluster di hypervisor basato sulla tecnologia VMware.

Vai al sottomenu __'Infrastruttura'__ poi __'VMWare'__. Seleziona quindi la stack VMware, la zona di disponibilità e il cluster di calcolo.  
In questo esempio si tratta del __'clu001-ucs12'__. Clicca sul pulsante __'Aggiungi un host'__ situato nell'angolo in alto a destra della tabella con l'elenco degli host.

__nota__:

- *__La configurazione di un cluster deve essere omogenea*. Non è consentito combinare tipi diversi di hypervisor all'interno di un cluster. Tutte le lamine devono essere dello stesso tipo.*
- *I permessi __'order'__ e __'compute'__ sono necessari per il conto per eseguire questa azione.*

<img src={shivaOrdersIaasCpoolEsx} />

### Per i cluster Open IaaS

I cluster Open IaaS seguono regole simili in termini di omogeneità e alta disponibilità. La gestione delle risorse di calcolo avviene inoltre tramite il menu __'OpenIaaS'__ con gli stessi prerequisiti in termini di autorizzazioni di accesso.

## Aggiungere risorse di memoria aggiuntive a un cluster di calcolo

L'allocazione della memoria nei cluster di calcolo funziona nel modo seguente:

__Principio di allocazione della memoria__:

- Tutte le lame di calcolo vengono consegnate con la __memoria fisica massima installata__
- Una __limitazione software__ viene applicata a livello del cluster VMware per corrispondere alla RAM fatturata
- Ogni lama dispone della __totalità della memoria fisica abilitata__ all'interno del cluster

__Dimensionamento per cluster__:

- __Minimo__: numero di host × 128 GB di memoria
- __Massimo__: numero di host × quantità di memoria fisica per lama

__Esempio__: per un cluster di tre host del tipo `STANDARD v3` (384 GB fisici per lama)

- Memoria totale disponibile: 3 × 384 GB = 1152 GB

__Raccomandazioni importanti__:

- Non superare il __85% di utilizzo medio della memoria per lama__ per evitare ballooning e compressione VMware
- Prevedere spazio su disco per i file di swap (.VSWP) creati all'avvio di ogni VM (dimensione = memoria della VM)

Per aggiungere memoria RAM a un cluster, è sufficiente accedere alla configurazione del cluster (come per l'aggiunta di un host di calcolo, come precedentemente illustrato) e fare clic su __'Modifica memoria'__.

<img src={shivaOrdersIaasCpoolMemory} />

__nota__:

- *__Le macchine vengono consegnate con tutta la memoria fisica disponibile__. L'attivazione della risorsa memoria è solo un'abilitazione software a livello di cluster.*
- *Non è possibile modificare la quantità di memoria fisica di un tipo di lama. Tenere sempre presente la capacità massima di una lama durante la creazione di un cluster.*
- *Sono necessari i permessi __'order'__ e __'compute'__ sul conto per eseguire questa operazione.*