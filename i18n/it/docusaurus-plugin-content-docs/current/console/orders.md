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

Il monitoraggio della distribuzione di nuove risorse viene effettuato nel menu __'Ordini'__ accessibile dal banner verde sul lato sinistro dello schermo.

Permette di visualizzare le risorse Cloud ordinate, quelle in fase di distribuzione e gli eventuali errori all'interno di un [Tenant](iam/concepts.md#tenant) della vostra [Organizzazione](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Nota: Al momento, non è ancora possibile avere una vista globale a livello di organizzazione di tutte le risorse distribuite nei diversi tenant.__ Questo argomento sarà affrontato nel 2026 con l'implementazione di un portale dedicato allo sponsor (firmatario) e alla gestione della sua organizzazione.*

La distribuzione delle risorse o la loro eliminazione viene effettuata in ciascun prodotto tramite i menu __'IaaS'__ e __'Rete'__ sul lato sinistro dello schermo nel banner verde.

È anche possibile vedere le consegne direttamente a livello delle notifiche della console Cloud Temple:

<img src={shivaOrderNotif_001} />

Dalla pagina degli ordini, è possibile vedere l'avanzamento di una consegna e interagire eventualmente con il team aggiungendo commenti o chiarimenti:

<img src={shivaOrderStatus} />

__Nota__: __Non è possibile avviare più ordini dello stesso tipo di risorsa contemporaneamente. Sarà necessario attendere che l'ordine corrente sia elaborato e finalizzato prima di poterne effettuare uno nuovo. Ciò garantisce una gestione efficiente e ordinata delle risorse all'interno del vostro ambiente.__

## Ordinare una nuova zona di disponibilità

È possibile aggiungere una nuova zona di disponibilità accedendo al menu "__Ordine__". Questa opzione consente di espandere le risorse e migliorare la disponibilità e la resilienza delle applicazioni con pochi clic:

<img src={shivaOrderAz_01} />

Iniziare selezionando la posizione desiderata, scegliendo prima la regione geografica, poi la corrispondente zona di disponibilità (AZ) tra quelle disponibili. Questo passaggio consente di adattare la distribuzione delle risorse in base alla posizione e ai requisiti dell'infrastruttura:

<img src={shivaOrderAz_02} />

Successivamente, procedere con la selezione del tipo di cluster di hypervisor desiderato, scegliendo quello che meglio soddisfa le esigenze di prestazioni e gestione della vostra infrastruttura cloud:

<img src={shivaOrderAz_03} />

Quindi selezionare il numero di hypervisor e la quantità di memoria desiderata per adattare le risorse al carico di lavoro e ai requisiti specifici del vostro ambiente cloud:

<img src={shivaOrderAz_04} />

Successivamente, selezionare il numero di datastore da fornire nel cluster e i loro tipi. È importante notare che il numero massimo di datastore consentiti è 10, con un minimo di 2 datastore richiesti. Ogni tipo di datastore diverso comporterà la creazione di un datastoreCluster aggiuntivo. Ad esempio, se si scelgono 2 datastore di tipo "live" e 1 datastore di tipo "mass", questo porterà alla formazione di 2 datastoreCluster distinti:

<img src={shivaOrderAz_05} />

Definire la dimensione di archiviazione necessaria per il backup, assicurandosi di prevedere una capacità equivalente a quella dello storage di produzione. Considerare un tasso di compressione medio di 2 per ottimizzare lo spazio di backup e garantire una protezione efficace dei dati:

<img src={shivaOrderAz_06} />

Selezionare le reti da propagare in base alle proprie esigenze. È inoltre possibile attivare l'opzione "Accesso Internet" se necessario, definendo il numero di indirizzi IP desiderati, con una scelta compresa tra 1 e un massimo di 8:

<img src={shivaOrderAz_07} />

Si otterrà quindi un riepilogo delle opzioni selezionate prima di convalidare l'ordine.

<img src={shivaOrderAz_08} />

## Ordinare risorse di archiviazione aggiuntive

La logica di allocazione dello storage in modalità block sui cluster di elaborazione si basa sulla tecnologia __IBM SVC (San Volume Controller)__ e __IBM FlashSystem__. Lo storage è organizzato in __LUN di almeno 500 GiB__, presentate secondo la tecnologia utilizzata:
- Per __VMware__: come __datastore__ raggruppati in __cluster SDRS (Storage Distributed Resource Scheduler)__
- Per __Bare Metal__: come __volumi__
- Per __IaaS Open Source__: come __Storage Repository (SR)__

Ogni datastore eredita una __classe di prestazioni__ definita in IOPS/TB (da 500 a 15.000 IOPS/TB per FLASH, o senza garanzia per MASS STORAGE). La limitazione IOPS viene applicata __a livello di datastore__ (non per VM), il che significa che tutte le macchine virtuali che condividono lo stesso datastore condividono la quota di IOPS assegnata.

__Punti chiave da ricordare__:

- __Dimensione minima__: 500 GiB per LUN
- __Prestazioni__: Proporzionali al volume allocato (es. 2 TB in classe Standard = 3.000 IOPS max)
- __Organizzazione__: I datastore dello stesso tipo vengono automaticamente raggruppati in cluster di datastore
- __Disponibilità__: 99,99% misurato mensilmente, incluse le finestre di manutenzione
- __Spazio necessario__: Prevedere sempre il 10% di spazio libero per gli snapshot di backup e l'equivalente della somma delle RAM delle VM per i file .VSWP

### Distribuire un nuovo cluster di elaborazione

Ordinare un cluster di hypervisor selezionando opzioni adatte alle esigenze di virtualizzazione. Definire caratteristiche chiave come il numero di hypervisor, il tipo di cluster, la quantità di memoria e le risorse di elaborazione richieste:

<img src={shivaOrderClucalc_01} />

Selezionare la zona di disponibilità:

<img src={shivaOrderClucalc_02} />

Scegliere il tipo di blade di elaborazione:

<img src={shivaOrderClucalc_03} />

Si ha quindi la possibilità di selezionare reti esistenti e propagarle, oppure crearne di nuove direttamente in questo passaggio, in base alle esigenze dell'infrastruttura. Notare che il numero totale di reti configurabili è limitato a un massimo di 20:

<img src={shivaOrderClucalc_04} />

Si otterrà quindi un riepilogo delle opzioni selezionate prima di convalidare l'ordine e sarà possibile visualizzare l'ordine in corso:

<img src={shivaOrderClucalc_05} />

### Distribuire un nuovo cluster di archiviazione

Nel menu "__ordine__", ordinare un __nuovo cluster di archiviazione__ per il proprio ambiente selezionando opzioni che corrispondono alle esigenze in termini di capacità, prestazioni e ridondanza. Selezionare la posizione:

<img src={shivaOrderClusto_01} />

Definire il numero di datastore da fornire nel cluster e il loro tipo, rispettando i seguenti limiti: è possibile configurare un minimo di 2 datastore e un massimo di 10. Scegliere i tipi di datastore che meglio soddisfano le esigenze in termini di prestazioni, capacità e utilizzo per ottimizzare lo storage nel proprio ambiente:

<img src={shivaOrderClusto_02} />

Selezionare il tipo di archiviazione desiderato tra le varie opzioni disponibili:

<img src={shivaOrderClusto_03} />

Si accederà quindi a un riepilogo completo delle opzioni selezionate, consentendo di verificare tutti i parametri prima di finalizzare l'ordine:

<img src={shivaOrderClusto_04} />

### Distribuire un nuovo datastore all'interno di un cluster SDRS VMware

In questo esempio, aggiungeremo storage in blocco per un'infrastruttura VMware.
Per aggiungere un datastore aggiuntivo al cluster di storage SDRS, andare al sottomenu __'Infrastruttura'__ e poi a __'VMware'__.
Quindi scegliere lo stack VMware e la zona di disponibilità. Quindi andare al sottomenu __'Archiviazione'__.

Scegliere il cluster SDRS corrispondente alle caratteristiche di prestazione desiderate e fare clic sul pulsante __'Aggiungi un datastore'__ che si trova nella tabella con l'elenco dei datastore.

<img src={shivaOrdersIaasSpoolDs} />

__nota__:

- *La dimensione minima di LUN che può essere attivata su un cluster è di __500 GiB__.*
- *Le prestazioni di un datastore variano da 500 iops/TiB in media a 15.000 iops/TiB in media. __Questa è una limitazione software eseguita a livello dei controller di archiviazione__.*
- *La contabilizzazione del volume di disco consumato dalla vostra organizzazione è la somma di tutte le LUN su tutte le AZ utilizzate*.
- *I diritti __'order'__ così come __'compute'__ sono necessari per l'account per eseguire questa azione.*

### Ordinare nuove reti

La tecnologia di rete utilizzata sull'infrastruttura Cloud Temple è basata su [VPLS](https://it.wikipedia.org/wiki/Virtual_Private_LAN_Service). Consente di beneficiare di __reti di livello 2 in continuità tra le zone di disponibilità all'interno di una regione__.
È anche possibile condividere reti tra i propri tenant e terminarle nella zona di hosting.
Fondamentalmente, è possibile immaginare una rete Cloud Temple come una VLAN 802.1q disponibile ovunque nel proprio tenant.

Le reti sulla piattaforma Cloud Temple sono __Livello 2 (VLAN)__ basate sulla tecnologia __VPLS (Virtual Private LAN Service)__. Questa tecnologia consente di beneficiare di __continuità di rete tra le zone di disponibilità__ all'interno di una regione, con prestazioni garantite:

- __Latenza intra-AZ__: < 3 ms
- __Latenza inter-AZ__: < 5 ms

__Flessibilità della rete__:

- Una rete può essere __condivisa tra più cluster__ all'interno della stessa zona di disponibilità
- Una rete può essere __propagata tra più zone di disponibilità__ all'interno della stessa regione
- Una rete può essere __condivisa tra diversi tenant__ della vostra organizzazione
- Una rete può essere __terminata nella zona di hosting__ per le vostre apparecchiature fisiche
- __Limite__: Massimo 20 reti per ordine. È possibile effettuare più ordini successivi per estendere questo numero secondo le proprie esigenze

L'ordine di una nuova rete e le decisioni di condivisione tra i propri tenant vengono effettuate nel menu __'Rete'__ nel banner verde sul lato sinistro dello schermo. Le reti verranno prima create, quindi verrà generato un ordine separato per propagarle. È possibile monitorare l'avanzamento degli ordini in corso accedendo alla scheda "Ordine" nel menu, o facendo clic sulle etichette informative che reindirizzano agli ordini attivi o in elaborazione.

<img src={shivaOrdersNet_002} />

È anche possibile propagare reti già esistenti o separare i due passaggi, iniziando con la creazione della rete, quindi procedendo con la propagazione successivamente secondo le proprie esigenze. L'opzione di propagazione si trova nelle opzioni della rete selezionata:

<img src={shivaOrdersNet_003} />

Fare clic sull'opzione "Propaga" per una rete già esistente, quindi selezionare la destinazione di propagazione desiderata. Questo passaggio consente di definire la posizione o le risorse su cui la rete deve essere propagata:

<img src={shivaOrdersNet_004} />

### Disattivazione di una rete

Una rete può anche essere disattivata se necessario. Questa opzione consente di mettere temporaneamente in pausa l'accesso o l'utilizzo della rete senza eliminarla definitivamente, fornendo flessibilità nella gestione dell'infrastruttura secondo le proprie esigenze.

L'opzione di disattivazione si trova nelle opzioni della rete selezionata.

## Aggiungere hypervisor aggiuntivi a un cluster di elaborazione

Un __cluster di elaborazione__ è un raggruppamento di hypervisor che devono seguire queste regole:

### Per cluster VMware ESXi

__Regole di omogeneità__:

- Tutti gli host in un cluster devono essere dello __stesso tipo di blade__ (ECO, STANDARD, ADVANCE, PERFORMANCE, ecc.)
- Tutti gli host appartengono __allo stesso tenant e alla stessa zona di disponibilità__
- __Limite__: Massimo 32 hypervisor per cluster

__Allocazione della memoria__:

- Ogni blade viene fornita con __tutta la memoria fisica attivata__ fin dall'inizio
- __Esempio__: Un cluster di 3 blade STANDARD v3 (384 GB fisici ciascuna) = 3 × 384 GB = 1.152 GB disponibili
- __Raccomandazione__: Non superare l'85% di consumo di memoria per blade per evitare il meccanismo di compressione VMware e il ballooning

__Alta disponibilità__:

- __Minimo consigliato__: 2 hypervisor per cluster per beneficiare dello SLA del 99,99%
- Attivare la funzione __VMware HA__ (High Availability) per il riavvio automatico delle VM in caso di guasto di un host

L'aggiunta di hypervisor a un cluster di elaborazione viene effettuata nel menu __'IaaS'__ nel banner verde sul lato sinistro dello schermo.
Nell'esempio seguente, aggiungeremo elaborazione a un cluster di hypervisor che utilizza la tecnologia VMware.

Andare al sottomenu __'Infrastruttura'__ e poi a __'VMware'__. Quindi scegliere lo stack VMware, la zona di disponibilità e il cluster di elaborazione.
In questo esempio, è __'clu001-ucs12'__. Fare clic sul pulsante __'Aggiungi un host'__ che si trova nella tabella con l'elenco degli host, in alto a destra.

__nota__:

- *__La configurazione di un cluster deve essere omogenea__. Pertanto, non è consentito mescolare i tipi di hypervisor all'interno di un cluster. Tutte le blade devono essere dello stesso tipo.*
- *I diritti __'order'__ così come __'compute'__ sono necessari per l'account per eseguire questa azione.*

<img src={shivaOrdersIaasCpoolEsx} />

### Per cluster IaaS Open Source

I cluster IaaS Open Source seguono regole simili in termini di omogeneità e alta disponibilità. La gestione delle risorse di elaborazione viene effettuata anche tramite il menu __'IaaS'__ con gli stessi prerequisiti in termini di diritti di accesso.

## Aggiungere risorse di memoria aggiuntive a un cluster di elaborazione

L'allocazione della memoria sui cluster di elaborazione funziona come segue:

__Principio di allocazione della memoria__:

- Tutte le blade di elaborazione vengono fornite con la __massima memoria fisica__ installata
- Viene applicata una __limitazione software__ a livello di cluster VMware per corrispondere alla RAM fatturata
- Ogni blade ha __tutta la memoria fisica attivata__ all'interno del cluster

__Dimensionamento del cluster__:

- __Minimo__: numero di host × 128 GB di memoria
- __Massimo__: numero di host × quantità di memoria fisica della blade

__Esempio__: Per un cluster di tre host di tipo `STANDARD v3` (384 GB fisici per blade)

- Memoria totale disponibile: 3 × 384 GB = 1.152 GB

__Raccomandazioni importanti__:

- Non superare l'__85% di consumo medio di memoria per blade__ per evitare il ballooning e la compressione VMware
- Prevedere spazio su disco per i file di swap (.VSWP) creati all'avvio di ogni VM (dimensione = memoria della VM)

Per aggiungere RAM a un cluster, basta andare alla configurazione del cluster (come per l'aggiunta di un host di elaborazione come visto in precedenza) e fare clic su __'Modifica memoria'__.

<img src={shivaOrdersIaasCpoolMemory} />

__nota__:

- *__Le macchine vengono fornite con tutta la memoria fisica__. Lo sblocco della risorsa di memoria è solo un'attivazione software a livello di cluster.*
- *Non è possibile modificare la quantità di memoria fisica di un tipo di blade. Tenere conto della capacità massima di una blade quando si crea un cluster.*
- *I diritti __'order'__ così come __'compute'__ sono necessari per l'account per eseguire questa azione.*
