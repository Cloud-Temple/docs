---
Guida di Partenza
---

```
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
```

### Reti Privati Regionali

L'esecuzione delle richieste di reti private all'interno di una regione avviene direttamente nella console Cloud Temple.

### Within a Tenant

The creation of a virtual network takes place in the *Réseaux* menu on the top left bar of the screen.

<img src={shivaNetwork_001} />

Clicking on the button *Nouveau réseau*

You need to specify the name of your network, which will be displayed. By default, all of your clusters will access your new network.

It is now possible to create several networks simultaneously. Simply click on *ajouter un réseau*.

<img src={shivaNetwork_002} />

In the following steps, you can specify more precisely the scope of propagation within the tenant between your different IaaS VMware clusters or Open IaaS clusters.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Gestione delle comandi di rete

Dopo aver completato tutte le fasi, i tuoi reti saranno create e una comando verrà generata per la loro propagazione. Puoi monitorare le tue comandi:

- Nell'angolo __*Comandi*__ del menu principale

<img src={shivaNetwork_order_001} />

- Cliccando sui pulsanti informativi che indirizzano versi i comandi correlati

> **Importante**: Non è possibile generare più comandi dello stesso tipo di risorsa contemporaneamente. Dovrai aspettare che la comando corrente venga elaborata prima di creare una nuova.

Tutte le azioni possibili sui tuoi reti sono disponibili nel menu __*Azioni*__ di ciascuno:

- Attivazione del condivisione di un network tra tenute dell'organizzazione stessa.
- Disattivazione del condivisione di un network tra tenute dell'organizzazione stessa.
- Aggiunta di un nuovo condivisione di network tra tenute dell'organizzazione stessa.
- Rimozione di un condivisione di network tra tenute dell'organizzazione stessa.
- Visualizzazione grafica della propagazione di un network sui tuoi cluster e i tuoi hypervisor all'interno di una tenuta.
- Rimozione di una propagazione all'interno di una tenuta.
- Modifica di una propagazione all'interno di una tenuta.

> La rimozione di un network non è ancora disponibile.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Visualizzazione della propagazione dei tuoi reti

Puoi facilmente visualizzare nella sezione __*Azioni*__ la propagazione di un tuo network verso i diversi cluster all'interno dello stesso tenant.

Seleziona l'opzione *"Visualizza la propagazione"* :

<img src={shivaNetwork_007} />

#### Modificazione della propagazione

La modifica di una propagazione all'interno di un tenant viene eseguita tramite l'opzione __*Propaga*. Scegli quindi il prodotto (IaaS VMware, Open IaaS, Bare metal) per cui desideri propagare i tuoi reti e poi integra i cluster in questa propagazione.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Nota:*__ *La modifica della propagazione è limitata a 20 reti per azione.*

#### Suppression della propagazione all'interno di un ambiente è eseguita tramite l'opzione *Eliminare una propagazione*:

Seleziona quindi la propagazione che desideri eliminare:

<img src={shivaNetworkDeletePropagation} />

Viene successivamente creata una comanda, proprio come durante la creazione iniziale con propagazione.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Difficoltà di propagazione dei reti

È possibile separare la creazione e la propagazione dei reti in due fasi distinte:

1. **Propagare un rete esistente**: Fai clic sull'azione "Propagare" su un rete già creata
2. **Selezionare la destinazione della propagazione**: Verrà poi generata una comanda, proprio come durante la creazione iniziale con la propagazione.

### Attivazione e disattivazione dei reti

Una rete può essere temporaneamente disattivata senza essere rimossa e poi riattivata.

![shivaNetwork_010](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='480'height='270'%3E%3Ccircle%20cx='240'%20cy='135'%20r='135'%20fill='lightblue'%20/%3E%3C/svg%3E)

### Condivisione di rete tra tenenti

Per default, i **reti sono disponibili solo all'interno di un tenente**. È possibile scegliere di **condividere un rete tra più tenenti** per ragioni tecniche o di connettività. Pertanto, è possibile condividere un rete tra i vostri **tenenti all'interno della stessa organizzazione**.

Per farlo, basta attivare la condivisione come indicato di seguito.

<img src={shivaNetworkVnShareEnabled} />

Dopo l'attivazione della condivisione, è necessario aggiungere un **condivisione** come indicato di seguito.

<img src={shivaNetworkVnShared} />

Successivamente, seleziona il tenente di destinazione. Attenzione: la lista dei tenenti è dinamica e dipende dall'organizzazione e dagli eventuali diritti dell'utente.

<img src={shivaNetworkVnSharedTenant} />

Una volta condiviso il rete, sarà visibile nell'angolo "Reti condivise" dal secondo tenente.

<img src={shivaNetworkVnSharedWithMe} />

### Visualizzazione dei reti condivise

Dopo aver propagati i network, l'angolo "Reti condivise" consente di visualizzare i network che altri tenitori della tua organizzazione condividono con te:

```
<img src={shivaNetwork_007} />
```