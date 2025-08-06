---
title: Guida rapida
---
import shivaNetwork_001 from './images/shiva_network_001.png'
import shivaNetwork_002 from './images/shiva_network_002.png'
import shivaNetwork_003 from './images/shiva_network_003.png'
import shivaNetwork_004 from './images/shiva_network_004.png'
import shivaNetwork_005 from './images/shiva_network_005.png'
import shivaNetwork_006 from './images/shiva_network_006.png'
import shivaNetwork_007 from './images/shiva_network_007.png'
import shivaNetwork_008 from './images/shiva_network_008.png'
import shivaNetwork_009 from './images/shiva_network_009.png'
import shivaNetwork_010 from './images/shiva_network_010.png'
import shivaNetworkVnShareEnabled from './images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from './images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from './images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from './images/shiva_network_vn_shared_with_me.png'
import shivaNetwork_order_001 from './images/shiva_order_network_001.png'
import shivaNetworkDeletePropagation from './images/shiva_network_delete_propagation.png'
import shivaNetworkDeletePropagationOrder from './images/shiva_network_delete_propagation_order.png'
import shivaNetworkDeletePropagationOrderValidate from './images/shiva_network_delete_propagation_order_validate.png'

## Reti private regionali

L'ordine delle reti private all'interno di una regione viene effettuato direttamente nella console Cloud Temple.

### All'interno di un tenant

La creazione di una rete virtuale avviene nel menu __*Reti*__ sulla banda verde a sinistra dello schermo.

<img src={shivaNetwork_001} />

Fare quindi clic sul pulsante __*Nuova rete*__

È necessario specificare il nome della rete che verrà visualizzato. Per impostazione predefinita, tutti i cluster accederanno alla nuova rete.

È ora possibile creare più reti contemporaneamente. Basta fare clic su __*aggiungi una rete*__.

<img src={shivaNetwork_002} />

Nei passaggi successivi, sarà possibile specificare più precisamente l'ambito della propagazione all'interno del tenant tra i diversi cluster IaaS VMware o Open IaaS.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Gestione degli ordini di rete

Dopo aver completato tutti i passaggi, le reti vengono create e viene generato un ordine per propagarle. È possibile monitorare gli ordini:

- Tramite la scheda __*Ordini*__ nel menu principale

<img src={shivaNetwork_order_001} />

- Facendo clic sulle etichette informative che reindirizzano agli ordini correlati

> __Importante:__ Non è possibile generare più ordini dello stesso tipo di risorsa contemporaneamente. È necessario attendere che l'ordine corrente venga preso in carico prima di crearne uno nuovo.

Tutte le azioni possibili sulle reti si trovano nel menu __*Azioni*__ di ciascuna:

- L'attivazione della condivisione di una rete tra tenant della stessa organizzazione.
- La disattivazione della condivisione di una rete tra tenant della stessa organizzazione.
- L'aggiunta di una condivisione di una rete tra tenant della stessa organizzazione.
- La rimozione di una condivisione di una rete tra tenant della stessa organizzazione.
- La visualizzazione grafica della propagazione di una rete su tutti i cluster e gli hypervisor all'interno di un tenant.
- L'eliminazione di una propagazione all'interno di un tenant.
- La modifica di una propagazione all'interno di un tenant.

> L'eliminazione di una rete non è ancora disponibile.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Visualizzazione della propagazione delle reti

È possibile visualizzare facilmente nel menu __*Azioni*__ la propagazione di una rete verso i diversi cluster all'interno dello stesso tenant.

Scegliere l'opzione *"Visualizza propagazione"*:

<img src={shivaNetwork_007} />

#### Modifica della propagazione

La modifica di una propagazione all'interno di un tenant viene effettuata tramite l'opzione __*Propaga*__:

Scegliere quindi verso quale prodotto (IaaS VMware, Open IaaS, Bare metal) si desidera propagare le reti, quindi i cluster che devono essere integrati in questa propagazione.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Nota:*__ *La modifica della propagazione è limitata a 20 reti per azione.*

#### Eliminazione della propagazione

L'eliminazione di una propagazione all'interno di un tenant viene effettuata tramite l'opzione __*Elimina propagazione*__:

Scegliere quindi quale propagazione si desidera eliminare:

<img src={shivaNetworkDeletePropagation} />

Viene quindi creato un ordine, come durante la creazione iniziale con propagazione.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Propagazione differita delle reti

È possibile separare la creazione e la propagazione delle reti in due fasi distinte:

1. __Propagare una rete esistente__: Fare clic sull'azione __*Propaga*__ su una rete già creata
2. __Selezionare la destinazione di propagazione__: Viene quindi creato un ordine, come durante la creazione iniziale con propagazione.

#### Attivazione e disattivazione delle reti

Una rete può essere temporaneamente disattivata senza essere eliminata e poi riattivata.

<img src={shivaNetwork_010} />

### Condivisione di rete tra tenant

Per impostazione predefinita, __le reti sono disponibili solo all'interno di un tenant__. È possibile scegliere di __condividere una rete tra più tenant__ per motivi tecnici o di connettività.
È quindi possibile condividere una rete tra i propri __[Tenant](../../../console/iam/concepts/#tenant)__ all'interno della stessa organizzazione.

È sufficiente attivare la condivisione come mostrato di seguito.

<img src={shivaNetworkVnShareEnabled} />

Una volta attivata la condivisione, è sufficiente aggiungere una condivisione come mostrato di seguito.

<img src={shivaNetworkVnShared} />

Quindi, selezionare il tenant di destinazione. Attenzione, l'elenco dei tenant è dinamico.
Dipende dalla propria organizzazione e dai propri diritti.

<img src={shivaNetworkVnSharedTenant} />

Una volta condivisa la rete, sarà visibile nella scheda 'Reti condivise' dal secondo tenant.

<img src={shivaNetworkVnSharedWithMe} />

### Visualizzazione delle reti condivise

Una volta propagate le reti, la scheda "Reti condivise" consente di visualizzare le reti che altri tenant della propria organizzazione condividono con voi:

<img src={shivaNetwork_007} />
