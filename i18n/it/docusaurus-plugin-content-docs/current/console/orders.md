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

Il monitoraggio della distribuzione di nuove risorse si effettua nel menu __'Ordini'__ accessibile nella barra verde a sinistra dello schermo.

Permette di visualizzare le risorse Cloud ordinate, in corso di distribuzione e gli eventuali errori all'interno di un [Tenant](iam/concepts.md#tenant) della vostra [Organizzazione](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Nota: In questo momento, la vista globale a livello di un'organizzazione di tutte le risorse distribuite nei diversi tenant non è ancora possibile.__ Questo argomento sarà trattato nel 2024 attraverso l'implementazione di un portale dedicato al committente (nel senso di firmatario) e alla gestione della sua organizzazione.*

La distribuzione delle risorse o la loro rimozione si effettuano in ciascuno dei prodotti nei menu __'IaaS'__ e __'Rete'__ a sinistra dello schermo nella barra verde.

È anche possibile vedere direttamente le consegne a livello delle notifiche della console Cloud Temple:

<img src={shivaOrderNotif_001} />

Dalla pagina degli ordini, potete vedere lo stato di avanzamento di una consegna ed eventualmente dialogare con il team fornendo commenti o precisazioni:

<img src={shivaOrderStatus} />

__Nota__: __Non è possibile avviare più ordini dello stesso tipo di risorsa simultaneamente. Dovrete quindi attendere che l'ordine in corso sia elaborato e finalizzato prima di poterne effettuare uno nuovo. Questo garantisce una gestione efficiente e ordinata delle risorse nel vostro ambiente.__

## Ordinare una nuova zona di disponibilità

È possibile aggiungere una nuova zona di disponibilità accedendo al menu "__Ordine__". Questa opzione vi permette di estendere le vostre risorse e migliorare la disponibilità e la resilienza delle vostre applicazioni con pochi clic:

<img src={shivaOrderAz_01} />

Si inizia selezionando la posizione desiderata, scegliendo prima la regione geografica, poi la zona di disponibilità (AZ) corrispondente tra quelle disponibili. Questa fase permette di adattare la distribuzione delle vostre risorse in funzione della localizzazione e dei requisiti della vostra infrastruttura:

<img src={shivaOrderAz_02} />

Procedete poi alla selezione del tipo di cluster di hypervisor desiderato, scegliendo quello che risponde meglio alle vostre esigenze di prestazioni e gestione della vostra infrastruttura cloud:

<img src={shivaOrderAz_03} />

Selezionate poi il numero di hypervisor e la quantità di memoria desiderata, per adattare le risorse al carico di lavoro e ai requisiti specifici del vostro ambiente cloud:

<img src={shivaOrderAz_04} />

Selezionate il numero di datastore da approvvigionare nel cluster e i loro tipi. È importante notare che il numero massimo di datastore autorizzati è 10, con un minimo di 2 datastore richiesti. Ogni tipo di datastore diverso comporterà la creazione di un datastoreCluster aggiuntivo. Per esempio, se scegliete 2 datastore di tipo "live" e 1 datastore di tipo "mass", questo porterà alla formazione di 2 datastoreCluster distinti:

<img src={shivaOrderAz_05} />

Definite la dimensione di archiviazione necessaria per il backup assicurandovi di prevedere una capacità equivalente a quella della vostra archiviazione di produzione. Tenete conto di un tasso di compressione medio di 2 per ottimizzare lo spazio di backup e garantire una protezione efficace dei vostri dati:

<img src={shivaOrderAz_06} />

Selezionate le reti da propagare in funzione delle vostre esigenze. Avete anche la possibilità di attivare l'opzione "Accesso internet" se necessario, definendo il numero di indirizzi IP desiderati, con una scelta compresa tra 1 e un massimo di 8:

<img src={shivaOrderAz_07} />

Otterrete poi un riepilogo delle opzioni selezionate prima di convalidare il vostro ordine.

<img src={shivaOrderAz_08} />

## Ordinare risorse di archiviazione aggiuntive

La logica di allocazione dell'archiviazione in modalità blocco sui cluster di calcolo è TODO

### Distribuire un nuovo cluster di calcolo

Procedete all'ordine di un cluster di hypervisor selezionando le opzioni adatte alle vostre esigenze in materia di virtualizzazione. Definite le caratteristiche chiave come il numero di hypervisor, il tipo di cluster, la quantità di memoria, così come le risorse di calcolo richieste:

<img src={shivaOrderClucalc_01} />

Selezionate la zona di disponibilità:

<img src={shivaOrderClucalc_02} />

Scegliete il tipo di blade di calcolo:

<img src={shivaOrderClucalc_03} />

Avete poi la possibilità di selezionare reti già esistenti e propagarle, oppure crearne di nuove direttamente in questa fase, secondo le esigenze della vostra infrastruttura. Notate che il numero totale di reti configurabili è limitato a un massimo di 20:

<img src={shivaOrderClucalc_04} />

Otterrete poi un riepilogo delle opzioni selezionate prima di convalidare il vostro ordine e potrete visualizzare il vostro ordine in corso:

<img src={shivaOrderClucalc_05} />

### Distribuire un nuovo cluster di archiviazione

Nel menu "__ordine__", procedete all'ordine di un __nuovo cluster di archiviazione__ per il vostro ambiente selezionando le opzioni che corrispondono alle vostre esigenze in termini di capacità, prestazioni e ridondanza. Selezionate la posizione:

<img src={shivaOrderClusto_01} />

Definite il numero di datastore da approvvigionare nel cluster e il loro tipo, rispettando i seguenti limiti: un minimo di 2 datastore e un massimo di 10 possono essere configurati. Scegliete i tipi di datastore che rispondono meglio alle vostre esigenze in termini di prestazioni, capacità e utilizzo, per ottimizzare l'archiviazione del vostro ambiente:

<img src={shivaOrderClusto_02} />

Selezionate il tipo di archiviazione desiderato tra le diverse opzioni disponibili:

<img src={shivaOrderClusto_03} />

Accedete poi a un riepilogo completo delle opzioni che avete selezionato, permettendovi di verificare tutti i parametri prima di convalidare definitivamente il vostro ordine:

<img src={shivaOrderClusto_04} />

### Distribuire un nuovo datastore all'interno di un cluster SDRS VMware

In questo esempio, aggiungeremo archiviazione in modalità blocco per un'infrastruttura VMware.
Per aggiungere un datastore aggiuntivo nel vostro cluster di archiviazione SDRS, andate nel sottomenu __'Infrastruttura'__ poi __'VMWare'__.
Scegliete quindi lo stack vmware e la zona di disponibilità. Andate poi nel sottomenu __'Archiviazione'__.

Scegliete il cluster SDRS corrispondente alle caratteristiche di prestazioni che desiderate e cliccate sul pulsante __'Aggiungi un datastore'__ che si trova nella tabella con la lista dei datastore.

<img src={shivaOrdersIaasSpoolDs} />

__Nota__:

- *La dimensione della LUN più piccola attivabile su un cluster è di __500 GiB__.*
- *Le prestazioni di un datastore vanno da 500 iops/TiB in media fino a 15000 iops/TiB in media. __Questo è un limite software realizzato a livello dei controller di archiviazione__.*
- *La contabilità del volume di disco consumato dalla vostra organizzazione è la somma di tutte le LUN su tutte le AZ utilizzate*.
- *I diritti __'order'__ così come __'compute'__ sono necessari all'account per effettuare questa azione.*

### Ordinare nuove reti

La tecnologia di rete utilizzata sull'infrastruttura Cloud Temple è basata su [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). Vi permette di beneficiare di __reti di livello 2 in continuità tra le vostre zone di disponibilità all'interno di una regione__.
È anche possibile condividere reti tra i vostri tenant e terminarle in zona di hosting.
Fondamentalmente, potete immaginare una rete Cloud Temple come un vlan 802.1q disponibile in ogni punto del vostro tenant.

TODO

L'ordine di una nuova rete e le decisioni di condivisione tra i vostri tenant, sono realizzati nel menu __'Rete'__ della barra verde a sinistra dello schermo. Le reti saranno prima create, poi un ordine distinto sarà generato per propagarle. Potete seguire l'avanzamento degli ordini in corso accedendo alla scheda "Ordine" nel menu, o cliccando sulle etichette di informazione che vi reindirizzano verso gli ordini attivi o in corso di elaborazione.

<img src={shivaOrdersNet_002} />

È anche possibile propagare reti già esistenti o separare le due fasi, iniziando con la creazione della rete, poi procedendo alla propagazione successivamente secondo le vostre esigenze. L'opzione di propagazione si trova nelle opzioni della rete selezionata:

<img src={shivaOrdersNet_003} />

Cliccate sull'opzione "Propaga" per una rete già esistente, poi selezionate l'obiettivo di propagazione desiderato. Questa fase vi permette di definire la posizione o le risorse sulle quali la rete deve essere propagata:

<img src={shivaOrdersNet_004} />

### Disattivazione di una rete

Una rete può anche essere disattivata se necessario. Questa opzione vi permette di mettere in pausa temporaneamente l'accesso o l'utilizzo della rete senza eliminarla definitivamente, offrendo così una flessibilità nella gestione della vostra infrastruttura in funzione delle vostre esigenze.

L'opzione di disattivazione si trova nelle opzioni della rete selezionata.

## Aggiungere hypervisor aggiuntivi a un cluster di calcolo

La logica di funzionamento dei cluster di calcolo è TODO

L'aggiunta di hypervisor a un cluster di calcolo si fa nel menu __'IaaS'__ nella barra verde a sinistra dello schermo.
Nell'esempio seguente, aggiungeremo calcolo su un cluster di hypervisor utilizzando la tecnologia VMware.

Andate nel sottomenu __'Infrastruttura'__ poi __'VMware'__. Scegliete quindi lo stack vmware e la zona di disponibilità e il cluster di calcolo.
In questo esempio, si tratta del __'clu001-ucs12'__. Cliccate sul pulsante __'Aggiungi un host'__ che si trova nella tabella con la lista degli host, in alto a destra.

__Nota__:

- *__La configurazione di un cluster deve essere omogenea__. Così, non è permesso mescolare i tipi di hypervisor all'interno di un cluster. Tutte le blade devono essere dello stesso tipo.*
- *I diritti __'order'__ così come __'compute'__ sono necessari all'account per effettuare questa azione.*

<img src={shivaOrdersIaasCpoolEsx} />

## Aggiungere risorse di memoria aggiuntive a un cluster di calcolo

La logica di allocazione della memoria sui cluster di calcolo è TODO

Per aggiungere memoria RAM su un cluster, è sufficiente andare sulla configurazione del cluster (come per l'aggiunta di un host di calcolo come visto in precedenza) e cliccare su __'Modifica la memoria'__.

<img src={shivaOrdersIaasCpoolMemory} />

__Nota__:

- *__Le macchine sono consegnate con la totalità della memoria fisica__. Lo sblocco della risorsa memoria è solo un'attivazione software a livello di un cluster.*
- *Non è possibile modificare la quantità di memoria fisica di un tipo di blade. Tenere conto della capacità massima di una blade durante la creazione di un cluster.*
- *I diritti __'order'__ così come __'compute'__ sono necessari all'account per effettuare questa azione.*
