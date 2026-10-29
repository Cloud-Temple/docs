---
title: Guida di avvio
---
import shivaNetwork_001 from '@site/docs/network/private_network/images/shiva_network_001.png'
import shivaNetwork_002 from '@site/docs/network/private_network/images/shiva_network_002.png'
import shivaNetwork_003 from '@site/docs/network/private_network/images/shiva_network_003.png'
import shivaNetwork_004 from '@site/docs/network/private_network/images/shiva_network_004.png'
import shivaNetwork_005 from '@site/docs/network/private_network/images/shiva_network_005.png'
import shivaNetwork_006 from '@site/docs/network/private_network/images/shiva_network_006.png'
import shivaNetwork_007 from '@site/docs/network/private_network/images/shiva_network_007.png'
import shivaNetwork_008 from '@site/docs/network/private_network/images/shiva_network_008.png'
import shivaNetwork_009 from '@site/docs/network/private_network/images/shiva_network_009.png'
import shivaNetwork_010 from '@site/docs/network/private_network/images/shiva_network_010.png'
import shivaNetworkVnShareEnabled from '@site/docs/network/private_network/images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from '@site/docs/network/private_network/images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from '@site/docs/network/private_network/images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from '@site/docs/network/private_network/images/shiva_network_vn_shared_with_me.png'
import shivaNetwork_order_001 from '@site/docs/network/private_network/images/shiva_order_network_001.png'
import shivaNetworkDeletePropagation from '@site/docs/network/private_network/images/shiva_network_delete_propagation.png'
import shivaNetworkDeletePropagationOrder from '@site/docs/network/private_network/images/shiva_network_delete_propagation_order.png'
import shivaNetworkDeletePropagationOrderValidate from '@site/docs/network/private_network/images/shiva_network_delete_propagation_order_validate.png'

## Reti private regionali

L'ordinazione delle reti private all'interno di una regione viene eseguita direttamente nella console Cloud Temple.

### All'interno di un tenant

La creazione di una rete virtuale viene effettuata nel menu __*Rete*__ > __*Backbone privato*__ sulla barra verde a sinistra dello schermo.

<img src={shivaNetwork_001} />

Fare quindi clic sul pulsante __*Nuova rete*__

È necessario specificare il nome della rete che verrà visualizzato. Per impostazione predefinita, tutti i cluster avranno accesso alla nuova rete.

È ora possibile creare più reti simultaneamente. Fare semplicemente clic su __*aggiungere una rete*__.

<img src={shivaNetwork_002} />

Nelle prossime fasi, sarà possibile specificare più precisamente l'ambito della propagazione all'interno del tenant tra i diversi cluster IaaS VMware o Open IaaS.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Gestione degli ordini di rete

Dopo aver completato tutte le fasi, le reti vengono create e viene generato un ordine per propagarle. È possibile seguire i propri ordini:

- Attraverso il menu __*Marketplace*__ > __*Ordini*__

<img src={shivaNetwork_order_001} />

- Facendo clic sulle etichette informative che reindirizzano agli ordini correlati

> __Importante:__ non è possibile generare più ordini dello stesso tipo di risorsa simultaneamente. È necessario attendere che l'ordine in corso venga elaborato prima di crearne uno nuovo.

Tutte le azioni possibili sulle reti si trovano nel menu __*Azioni*__ di ciascuna di esse:

- L'attivazione della condivisione di una rete tra tenant della stessa organizzazione.
- La disattivazione della condivisione di una rete tra tenant della stessa organizzazione.
- L'aggiunta di una condivisione di una rete tra tenant della stessa organizzazione.
- La rimozione di una condivisione di una rete tra tenant della stessa organizzazione.
- La visualizzazione grafica della propagazione di una rete su tutti i cluster e gli hypervisor all'interno di un tenant.
- La rimozione di una propagazione all'interno di un tenant.
- La modifica di una propagazione all'interno di un tenant.

> La rimozione di una rete non è ancora disponibile.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Visualizzazione della propagazione delle reti

È possibile visualizzare facilmente nel menu __*Azioni*__ la propagazione di una rete verso i diversi cluster all'interno dello stesso tenant.

Scegliere l'opzione *"Visualizza la propagazione"*:

<img src={shivaNetwork_007} />

#### Modifica della propagazione

La modifica di una propagazione all'interno di un tenant viene effettuata tramite l'opzione __*Propaga*__:

Scegliere quindi verso quale prodotto (IaaS VMware, Open IaaS, Bare metal) si desidera propagare le reti, quindi i cluster da integrare in questa propagazione.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Nota:*__ *La modifica della propagazione è limitata a 20 reti per azione.*

#### Rimozione della propagazione

La rimozione di una propagazione all'interno di un tenant viene effettuata tramite l'opzione __*Rimuovi una propagazione*__:

Scegliere quindi quale propagazione si desidera rimuovere:

<img src={shivaNetworkDeletePropagation} />

Viene quindi creato un ordine, come durante la creazione iniziale con propagazione.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Propagazione differita delle reti

È possibile separare la creazione e la propagazione delle reti in due fasi distinte:

1. __Propagare una rete esistente__: fare clic sull'azione __*Propaga*__ su una rete già creata
2. __Selezionare la destinazione della propagazione__: viene quindi creato un ordine, come durante la creazione iniziale con propagazione.

#### Attivazione e disattivazione delle reti

Una rete può essere temporaneamente disattivata senza essere rimossa e poi riattivata.

<img src={shivaNetwork_010} />

### Condivisione di rete tra tenant

Per impostazione predefinita, __le reti sono disponibili solo all'interno di un tenant__. È possibile scegliere di __condividere una rete tra più tenant__ per motivi tecnici o di connettività.
È così possibile condividere una rete tra i propri __[Tenant](../../console/iam/concepts.md#tenant)__ all'interno della stessa organizzazione.

Basta attivare la condivisione come di seguito.

<img src={shivaNetworkVnShareEnabled} />

Una volta attivata la condivisione, basta aggiungere una condivisione come di seguito.

<img src={shivaNetworkVnShared} />

Quindi, selezionare il tenant di destinazione. Attenzione, l'elenco dei tenant è dinamico.
Dipende dalla propria organizzazione e dai propri diritti.

<img src={shivaNetworkVnSharedTenant} />

Una volta condivisa la rete, sarà visibile nella scheda 'Reti condivise' dal secondo tenant.

<img src={shivaNetworkVnSharedWithMe} />

### Visualizzazione delle reti condivise

Una volta propagate le reti, la scheda "Reti condivise" consente di visualizzare le reti che altri tenant della propria organizzazione condividono con l'utente:

<img src={shivaNetwork_007} />
