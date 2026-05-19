---
title: Distribuire le risorse
---
import shivaOrdersList from '@site/docs/console/images/shiva_orders_list.png'
import shivaOrderNotif_001 from '@site/docs/console/images/shiva_order_notif_001.png'
import shivaOrderStatus from '@site/docs/console/images/shiva_order_status.png'
import shivaOrderAz_01 from '@site/docs/console/images/shiva_order_az_01.png'
import shivaOrderAz_02 from '@site/docs/console/images/shiva_order_az_02.png'
import shivaOrderAz_03 from '@site/docs/console/images/shiva_order_az_03.png'
import shivaOrderAz_04 from '@site/docs/console/images/shiva_order_az_04.png'
import shivaOrderAz_05 from '@site/docs/console/images/shiva_order_az_05.png'
import shivaOrderAz_06 from '@site/docs/console/images/shiva_order_az_06.png'
import shivaOrderAz_07 from '@site/docs/console/images/shiva_order_az_07.png'
import shivaOrderAz_08 from '@site/docs/console/images/shiva_order_az_08.png'
import shivaOrderClucalc_01 from '@site/docs/console/images/shiva_order_clucalc_01.png'
import shivaOrderClucalc_02 from '@site/docs/console/images/shiva_order_clucalc_02.png'
import shivaOrderClucalc_03 from '@site/docs/console/images/shiva_order_clucalc_03.png'
import shivaOrderClucalc_04 from '@site/docs/console/images/shiva_order_clucalc_04.png'
import shivaOrderClucalc_05 from '@site/docs/console/images/shiva_order_clucalc_05.png'
import shivaOrderClusto_01 from '@site/docs/console/images/shiva_order_clusto_01.png'
import shivaOrderClusto_02 from '@site/docs/console/images/shiva_order_clusto_02.png'
import shivaOrderClusto_03 from '@site/docs/console/images/shiva_order_clusto_03.png'
import shivaOrderClusto_04 from '@site/docs/console/images/shiva_order_clusto_04.png'
import shivaOrdersIaasSpoolDs from '@site/docs/console/images/shiva_orders_iaas_spool_ds.png'
import shivaOrdersNet_002 from '@site/docs/console/images/shiva_orders_net_002.png'
import shivaOrdersNet_003 from '@site/docs/console/images/shiva_orders_net_003.png'
import shivaOrdersNet_004 from '@site/docs/console/images/shiva_orders_net_004.png'
import shivaOrdersIaasCpoolEsx from '@site/docs/console/images/shiva_orders_iaas_cpool_esx.png'
import shivaOrdersIaasCpoolMemory from '@site/docs/console/images/shiva_orders_iaas_cpool_memory.png'

## Concetto

Il monitoraggio del deployment di nuove risorse avviene nel menu __'Comandi'__ accessibile nella barra verde a sinistra dello schermo.

Consente di visualizzare le risorse Cloud ordinate, in fase di deployment e gli eventuali errori all'interno di un [Tenant](iam/concepts.md#tenant) della tua [Organisation](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Nota : al momento, non è ancora possibile visualizzare globalmente, a livello di organizzazione, l'insieme delle risorse deployate nei diversi tenant.__ Questo argomento verrà trattato in seguito con l'implementazione di un portale dedicato al committente (nel senso di firmatario) e alla gestione della propria organizzazione.*

Il deployment delle risorse o la loro rimozione avvengono in ciascun prodotto nei menu __'IaaS'__ e __'Rete'__ a sinistra dello schermo nella barra verde.

È inoltre possibile visualizzare direttamente le consegne a livello di notifiche della console Cloud Temple :

<img src={shivaOrderNotif_001} />

Dalla pagina dei comandi, è possibile visualizzare lo stato di avanzamento di una consegna e, eventualmente, interagire con il team fornendo commenti o precisazioni :

<img src={shivaOrderStatus} />

__Nota__ : __non è possibile avviare più comandi dello stesso tipo di risorsa simultaneamente. Dovrai quindi attendere che il comando in corso venga elaborato e completato prima di poterne eseguire uno nuovo. Ciò garantisce una gestione efficiente e ordinata delle risorse all'interno del tuo ambiente.__

## Ordinare una nuova zona di disponibilità

È possibile aggiungere una nuova zona di disponibilità accedendo al menu "__Ordine__". Questa opzione consente di estendere le proprie risorse e migliorare la disponibilità e la resilienza delle applicazioni con pochi semplici clic:

<img src={shivaOrderAz_01} />

Si inizia selezionando la posizione desiderata, scegliendo prima la regione geografica e poi la zona di disponibilità (AZ) corrispondente tra quelle disponibili. Questa fase consente di adattare il deployment delle risorse in base alla posizione e ai requisiti della propria infrastruttura:

<img src={shivaOrderAz_02} />

Successivamente, procedere alla selezione del tipo di cluster di hypervisor desiderato, scegliendo quello che soddisfa al meglio le esigenze di prestazioni e gestione della propria infrastruttura cloud:

<img src={shivaOrderAz_03} />

Selezionare quindi il numero di hypervisor e la quantità di memoria desiderata, al fine di adattare le risorse al carico di lavoro e ai requisiti specifici dell'ambiente cloud:

<img src={shivaOrderAz_04} />

Selezionare quindi il numero di datastore da provisionare nel cluster e i relativi tipi. È importante notare che il numero massimo di datastore autorizzato è 10, con un minimo di 2 datastore richiesti. Ogni tipo di datastore diverso comporterà la creazione di un datastoreCluster aggiuntivo. Ad esempio, se si scelgono 2 datastore di tipo "live" e 1 datastore di tipo "mass", ciò comporterà la formazione di 2 datastoreClusters distinti:

<img src={shivaOrderAz_05} />

Definire la dimensione di storage necessaria per il backup, assicurandosi di prevedere una capacità equivalente a quella dello storage di produzione. Tenere conto di un tasso di compressione medio di 2 per ottimizzare lo spazio di backup e garantire una protezione efficace dei dati:

<img src={shivaOrderAz_06} />

Selezionare le reti da propagare in base alle proprie esigenze. È inoltre possibile attivare l'opzione "Accesso internet" se necessario, definendo il numero di indirizzi IP desiderati, con una scelta compresa tra 1 e un massimo di 8:

<img src={shivaOrderAz_07} />

Si ottiene quindi un riepilogo delle opzioni selezionate prima di confermare l'ordine.

<img src={shivaOrderAz_08} />

## Richiesta di risorse di archiviazione aggiuntive

La logica di allocazione dello storage in modalità a blocchi sui cluster di calcolo si basa sulla tecnologia __IBM SVC (San Volume Controller)__ e __IBM FlashSystem__. Lo storage è organizzato in __LUN da almeno 500 GiB__, presentate a seconda della tecnologia utilizzata :

- Per __VMware__ : sotto forma di __datastore__ raggruppati in __cluster SDRS (Storage Distributed Resource Scheduler)__
- Per __Bare Metal__ : sotto forma di __volumi__
- Per __Open IaaS__ : sotto forma di __Storage Repository (SR)__

Ogni datastore eredita una __classe di prestazioni__ definita in IOPS/TiB (da 500 a 15000 IOPS/TiB per il FLASH, o senza garanzia per il MASS STORAGE). La limitazione degli IOPS viene applicata __a livello di datastore__ (e non per VM), il che significa che tutte le macchine virtuali che condividono lo stesso datastore condividono la quota di IOPS assegnata.

__Punti chiave da ricordare__ :

- __Dimensione minima__ : 500 GiB per LUN
- __Prestazioni__ : Proporzionali al volume assegnato, __entro il limite di un tetto fisico assoluto per LUN__ (es: 2 TiB in classe Standard = 3000 IOPS, ma una LUN da 10 TiB avrà un massimo di 30 000 IOPS). Questo tetto varia in base alla classe (10 000 IOPS / 512 MB/s per la classe Essenziale, e 30 000 IOPS / 1024 MB/s per le classi superiori).
- __Organizzazione__ : I datastore dello stesso tipo vengono automaticamente raggruppati in cluster di datastore
- __Disponibilità__ : 99,99% misurato mensilmente, finestre di manutenzione incluse
- __Spazio necessario__ : Prevedere sempre il 10% di spazio libero per gli snapshot di backup e l'equivalente della somma delle RAM delle VM per i file .VSWP

### Distribuire un nuovo cluster di calcolo

Procedi all'ordine di un cluster di hypervisor selezionando le opzioni adatte alle tue esigenze di virtualizzazione. Definisci le caratteristiche chiave come il numero di hypervisor, il tipo di cluster, la quantità di memoria, nonché le risorse di calcolo richieste:

<img src={shivaOrderClucalc_01} />

Seleziona la zona di disponibilità:

<img src={shivaOrderClucalc_02} />

Scegli il tipo di blade di calcolo:

<img src={shivaOrderClucalc_03} />

Hai successivamente la possibilità di selezionare reti già esistenti e di propagarle, oppure di crearne di nuove direttamente in questa fase, in base alle esigenze della tua infrastruttura. Tieni presente che il numero totale di reti configurabili è limitato a un massimo di 20:

<img src={shivaOrderClucalc_04} />

Otterrai successivamente un riepilogo delle opzioni selezionate prima di confermare il tuo ordine e potrai successivamente visualizzare il tuo ordine in corso:

<img src={shivaOrderClucalc_05} />

### Distribuire un nuovo cluster di storage

Nel menu "__ordine__", procedere all'ordine di un __nuovo cluster di storage__ per il proprio ambiente selezionando le opzioni che corrispondono alle proprie esigenze in termini di capacità, prestazioni e ridondanza. Selezionare la posizione:

<img src={shivaOrderClusto_01} />

Definire il numero di datastore da provisionare nel cluster e il relativo tipo, rispettando i seguenti limiti: è possibile configurare un minimo di 2 datastore e un massimo di 10. Scegliere i tipi di datastore che soddisfano meglio le proprie esigenze in termini di prestazioni, capacità e utilizzo, al fine di ottimizzare lo storage dell'ambiente:

<img src={shivaOrderClusto_02} />

Selezionare il tipo di storage desiderato tra le diverse opzioni disponibili:

<img src={shivaOrderClusto_03} />

Si accede quindi a un riepilogo completo delle opzioni selezionate, che consente di verificare tutti i parametri prima di confermare definitivamente l'ordine:

<img src={shivaOrderClusto_04} />

### Distribuire un nuovo datastore all'interno di un cluster SDRS VMware

In questo esempio, aggiungeremo storage a blocchi per un'infrastruttura VMware.
Per aggiungere un datastore aggiuntivo nel tuo cluster di storage SDRS, vai nel sottomenu __'Infrastruttura'__ e poi __'VMWare'__.
Seleziona quindi lo stack vmware e la zona di disponibilità. Vai quindi nel sottomenu __'Storage'__.

Seleziona il cluster SDRS corrispondente alle caratteristiche di prestazioni desiderate e fai clic sul pulsante __'Aggiungi datastore'__ che si trova nella tabella
con l'elenco dei datastore.

<img src={shivaOrdersIaasSpoolDs} />

__nota__ :

- *La dimensione della più piccola LUN attivabile su un cluster è di __500 GiB__.*
- *Le prestazioni di un datastore vanno da 500 IOPS/TiB in media fino a 15000 IOPS/TiB in media. __Si tratta di una limitazione software realizzata a livello dei controller di storage__, soggetta a un limite hardware assoluto di 30 000 IOPS e 1024 MB/s massimo per LUN.*
- *Il calcolo del volume di disco consumato dalla tua organizzazione è la somma di tutte le LUN su tutte le AZ utilizzate*.*
- *I permessi __'order'__ e __'compute'__ sono necessari all'account per eseguire questa azione.*

### Ordinare nuove reti

La tecnologia di rete utilizzata sull'infrastruttura Cloud Temple si basa su [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). Consente di disporre di __reti di livello 2 in continuità tra le proprie zone di disponibilità all'interno di una regione__.
È inoltre possibile condividere le reti tra i propri tenant e terminarle in una zona di hosting.
In linea di massima, è possibile immaginare una rete Cloud Temple come un vlan 802.1q disponibile in ogni punto del proprio tenant.

Le reti sulla piattaforma Cloud Temple sono di __livello 2 (VLAN)__ basate sulla tecnologia __VPLS (Virtual Private LAN Service)__. Questa tecnologia consente di disporre di una __continuità di rete tra le proprie zone di disponibilità__ all'interno di una regione, con prestazioni garantite:

- __Latenza intra-AZ__ : < 3 ms
- __Latenza inter-AZ__ : < 5 ms

__Flessibilità delle reti__ :

- Una rete può essere __condivisa tra più cluster__ della stessa zona di disponibilità
- Una rete può essere __propagata tra più zone di disponibilità__ della stessa regione
- Una rete può essere __condivisa tra diversi tenant__ della propria organizzazione
- Una rete può essere __terminata in una zona di hosting__ per le proprie apparecchiature fisiche
- __Limite__ : Massimo 20 reti per ordine. È possibile effettuare più ordini consecutivi per estendere questo numero in base alle proprie esigenze

L'ordine di una nuova rete e le decisioni di condivisione tra i propri tenant vengono eseguite nel menu __'Rete'__ della barra verde a sinistra dello schermo. Le reti verranno prima create, quindi verrà generato un ordine separato per propagarle. È possibile monitorare l'avanzamento degli ordini in corso accedendo alla scheda "Ordine" nel menu, oppure facendo clic sulle etichette informative che reindirizzano agli ordini attivi o in fase di elaborazione.

<img src={shivaOrdersNet_002} />

È inoltre possibile propagare reti già esistenti o separare le due fasi, iniziando con la creazione della rete e procedendo alla propagazione in un secondo momento in base alle proprie esigenze. L'opzione di propagazione si trova nelle opzioni della rete selezionata :

<img src={shivaOrdersNet_003} />

Fare clic sull'opzione "Propaga" per una rete già esistente, quindi selezionare la destinazione di propagazione desiderata. Questa fase consente di definire la posizione o le risorse su cui propagare la rete :

<img src={shivaOrdersNet_004} />

### Disattivazione di una rete

Una rete può essere disattivata anche se necessario. Questa opzione consente di mettere temporaneamente in pausa l'accesso o l'utilizzo della rete senza eliminarla definitivamente, offrendo così flessibilità nella gestione della tua infrastruttura in base alle tue esigenze.

L'opzione di disattivazione si trova nelle opzioni della rete selezionata. '

## Aggiungere ulteriori hypervisor a un cluster di calcolo

Un __cluster di calcolo__ è un gruppo di hypervisor che devono rispettare le seguenti regole:

### Per i cluster VMware ESXi

__Regole di omogeneità__ :

- Tutti gli host di un cluster devono essere dello __stesso tipo di blade__ (ECO, STANDARD, ADVANCE, PERFORMANCE, ecc.)
- Tutti gli host appartengono allo __stesso tenant e alla stessa zona di disponibilità__
- __Limite__ : Massimo 32 hypervisor per cluster

__Allocazione memoria__ :

- Ogni blade viene fornita con __tutta la memoria fisica attivata__ fin dall'inizio
- __Esempio__ : Un cluster di 3 blade STANDARD v3 (384 Go fisiche ciascuna) = 3 × 384 Go = 1152 Go disponibili
- __Raccomandazione__ : Non superare l'85% di consumo di memoria per blade per evitare il meccanismo di compressione VMware e il ballooning

__Alta disponibilità__ :

- __Minimo consigliato__ : 2 hypervisor per cluster per usufruire del SLA al 99,99%
- Abilitare la funzionalità __VMware HA__ (High Availability) per il riavvio automatico delle VM in caso di guasto di un host

L'aggiunta di hypervisor a un cluster di calcolo avviene nel menu __'IaaS'__ nella barra verde a sinistra dello schermo.
Nell'esempio seguente, aggiungeremo capacità di calcolo a un cluster di hypervisor che utilizza la tecnologia VMware.

Vai nel sottomenu __'Infrastructure'__ quindi __'VMWare'__. Scegli quindi lo stack vmware, la zona di disponibilità e il cluster di calcolo.
In questo esempio, si tratta del __'clu001-ucs12'__. Clicca sul pulsante __'Aggiungi host'__ che si trova nella tabella con l'elenco degli host, in alto a destra.

__nota__ :

- *__La configurazione di un cluster deve essere omogenea__. Pertanto, non è consentito mescolare i tipi di hypervisor all'interno di un cluster. Tutte le blade devono essere dello stesso tipo.*
- *I permessi __'order'__ e __'compute'__ sono necessari all'account per eseguire questa azione.*

<img src={shivaOrdersIaasCpoolEsx} />

### Per i cluster Open IaaS

I cluster Open IaaS seguono regole simili in termini di omogeneità e alta disponibilità. La gestione delle risorse di calcolo avviene inoltre tramite il menu __'OpenIaaS'__ con gli stessi prerequisiti in termini di diritti di accesso.

## Aggiunta di risorse di memoria aggiuntive a un cluster di calcolo

L'allocazione della memoria sui cluster di calcolo funziona come segue :

__Principio di allocazione della memoria__ :

- Tutte le lame di calcolo vengono fornite con il __massimo fisico di memoria__ installato
- Un __limite software__ viene applicato a livello del cluster VMware per corrispondere alla RAM fatturata
- Ogni lame dispone di __tutta la memoria fisica attivata__ all'interno del cluster

__Dimensionamento per cluster__ :

- __Minimo__ : numero di host × 128 Go di memoria
- __Massimo__ : numero di host × quantità di memoria fisica della lame

__Esempio__ : Per un cluster di tre host di tipo `STANDARD v3` (384 Go fisici per lame)

- Memoria totale disponibile : 3 × 384 Go = 1152 Go

__Raccomandazioni importanti__ :

- Non superare __l'85% di consumo medio di memoria per lame__ per evitare il ballooning e la compressione VMware
- Prevedere spazio su disco per i file di swap (.VSWP) creati all'avvio di ogni VM (dimensione = memoria della VM)

Per aggiungere memoria RAM a un cluster, è sufficiente accedere alla configurazione del cluster (come per l'aggiunta di un host di calcolo come visto in precedenza) e fare clic su __'Modifica memoria'__.

<img src={shivaOrdersIaasCpoolMemory} />

__nota__ :

- *__Le macchine vengono fornite con tutta la memoria fisica__. Il sblocco della risorsa di memoria è solo un'attivazione software a livello di un cluster.*
- *Non è possibile modificare la quantità di memoria fisica di un tipo di lame. Tenere bene in considerazione la capacità massima di una lame durante la creazione di un cluster.*
- *I permessi __'order'__ e __'compute'__ sono necessari per l'account per eseguire questa azione.*