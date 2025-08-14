---
title: Guida di avvio
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

La gestione delle reti private all'interno di una regione si effettua direttamente nella console Cloud Temple.

### All'interno di un tenant

La creazione di una rete virtuale avviene nel menu __*Network*__ sulla barra verde a sinistra dello schermo.

<img src={shivaNetwork_001} />

Fare clic sul pulsante __*Nuova rete*__.

Dovete specificare il nome della vostra rete che verrà visualizzato. Per impostazione predefinita, l'insieme dei vostri cluster accederà alla vostra nuova rete.
Tuttavia, nel sottomenu __*Opzioni Avanzate*__, è possibile specificare in modo più preciso l'ambito di propagazione all'interno del tenant tra i vostri diversi cluster.

<img src={shivaNetwork_002} />

L'insieme delle azioni possibili sui vostri reti si trova nel menu __*Azioni*__ di ciascuna di esse :

- L'attivazione del condivisione di una rete tra tenant di una stessa organizzazione.
- La disattivazione del condivisione di una rete tra tenant di una stessa organizzazione.
- L'aggiunta di una condivisione di una rete tra tenant di una stessa organizzazione.
- La cancellazione di una condivisione di una rete tra tenant di una stessa organizzazione.
- La visualizzazione grafica della propagazione di una rete sull'insieme dei vostri cluster e dei vostri hyperviseur all'interno di un tenant.
- La cancellazione di una propagazione all'interno di un tenant.
- La modifica di una propagazione all'interno di un tenant.
- La cancellazione di una rete.

<img src={shivaNetwork_003} />

#### Visualizzazione della diffusione della tua rete

Puoi facilmente nel menu __*Actions*__ visualizzare la diffusione di una rete verso i tuoi diversi cluster all'interno dello stesso tenant.  
Seleziona l'opzione *"Visualizza la diffusione"*:

<img src={shivaNetwork_004} />

#### Modifica della propagazione

La modifica di una propagazione all'interno di un tenant viene eseguita con l'opzione *"Propagare"*:
selezionate quindi i cluster da integrare in questa propagazione.

<img src={shivaNetwork_005} />

__*Nota:*__ *La modifica della propagazione è limitata a 20 reti per azione.*

#### Eliminazione di una rete

L'eliminazione di una rete all'interno di un tenant viene eseguita dall'opzione *"Elimina la rete"* :

<img src={shivaNetwork_006} />

### Condivisione di rete tra tenant

Di default, __i reti sono disponibili solo all'interno di un tenant__. È possibile scegliere di __condividere una rete tra più tenant__ per motivi tecnici o di connettività.  
È quindi possibile condividere una rete tra i propri __[Tenant](../../console/iam/concepts.md#tenant)__ all'interno della stessa organizzazione.

Per farlo, è sufficiente attivare la condivisione come mostrato di seguito.

<img src={shivaNetworkVnShareEnabled} />

Una volta attivata la condivisione, è sufficiente aggiungere una condivisione come mostrato di seguito.

<img src={shivaNetworkVnShared} />

Selezionare quindi il tenant di destinazione. Attenzione, la lista dei tenant è dinamica.  
Dipende dalla tua organizzazione e dai tuoi diritti.

<img src={shivaNetworkVnSharedTenant} />

Una volta condivisa la rete, sarà visibile nella scheda 'Reti condivise' dal tuo secondo tenant.

<img src={shivaNetworkVnSharedWithMe} />