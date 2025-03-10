---
title: Guida di Avvio
---
import shivaNetwork_001 from './images/shiva_network_001.jpg'
import shivaNetwork_002 from './images/shiva_network_002.jpg'
import shivaNetwork_003 from './images/shiva_network_003.jpg'
import shivaNetwork_004 from './images/shiva_network_004.jpg'
import shivaNetwork_005 from './images/shiva_network_005.jpg'
import shivaNetwork_006 from './images/shiva_network_006.jpg'
import shivaNetworkVnShareEnabled from './images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from './images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from './images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from './images/shiva_network_vn_shared_with_me.png'


## Reti private regionali

L'ordine delle reti private all'interno di una regione avviene direttamente nella console Cloud Temple.

### All'interno di un tenant

La creazione di una rete virtuale avviene nel menu __*Network*__ sulla barra verde a sinistra dello schermo.

<img src={shivaNetwork_001} />

Fare quindi clic sul pulsante __*Nuova rete*__

È necessario specificare il nome della rete che verrà visualizzata. Per impostazione predefinita, tutti i cluster accederanno alla nuova rete.
Tuttavia, nel sottomenu __*Opzioni avanzate*__, è possibile specificare più dettagliatamente l'estensione della propagazione all'interno del tenant tra i vari cluster.

<img src={shivaNetwork_002} />

Tutte le azioni possibili sulle reti si trovano nel menu __*Azioni*__ di ciascuna di esse:

- L'attivazione della condivisione di una rete tra tenant della stessa organizzazione.
- La disattivazione della condivisione di una rete tra tenant della stessa organizzazione.
- L'aggiunta di una condivisione di una rete tra tenant della stessa organizzazione.
- La rimozione di una condivisione di una rete tra tenant della stessa organizzazione.
- La visualizzazione grafica della propagazione di una rete su tutti i cluster e gli hypervisor all'interno di un tenant.
- La rimozione di una propagazione all'interno di un tenant.
- La modifica di una propagazione all'interno di un tenant.
- L'eliminazione di una rete.

<img src={shivaNetwork_003} />

#### Visualizzazione della propagazione delle reti

Nel menu __*Azioni*__ è possibile visualizzare facilmente la propagazione di una rete sui vari cluster all'interno di uno stesso tenant.
Scegliere l'opzione *"Visualizza propagazione"*:

<img src={shivaNetwork_004} />

#### Modifica della propagazione

La modifica di una propagazione all'interno di un tenant viene effettuata attraverso l'opzione *"Propaga"*:
quindi selezionare i cluster che devono essere integrati in questa propagazione.

<img src={shivaNetwork_005} />

__*Nota:*__ *La modifica della propagazione è limitata a 20 reti per azione.*

#### Eliminazione di una rete

L'eliminazione di una rete all'interno di un tenant viene effettuata tramite l'opzione *"Elimina rete"*:

<img src={shivaNetwork_006} />

### Condivisione di rete tra tenant

Per impostazione predefinita, __le reti sono disponibili solo all'interno di un tenant__. È possibile scegliere di __condividere una rete tra più tenant__ per motivi tecnici o di connettività.
È infatti possibile condividere una rete tra i propri __[Tenant](../../../console/iam/concepts/#tenant)__ all'interno della stessa organizzazione.

Basta attivare la condivisione come sotto indicato.

<img src={shivaNetworkVnShareEnabled} />

Una volta attivata la condivisione, è sufficiente aggiungere una condivisione come sotto indicato.

<img src={shivaNetworkVnShared} />

Poi, selezionare il tenant di destinazione. Attenzione, l'elenco di tenant è dinamico.
Dipende dalla tua organizzazione e dai tuoi diritti.

<img src={shivaNetworkVnSharedTenant} />

Una volta condivisa la rete, sarà visibile nella scheda 'Reti condivise' dal secondo tenant.

<img src={shivaNetworkVnSharedWithMe} />