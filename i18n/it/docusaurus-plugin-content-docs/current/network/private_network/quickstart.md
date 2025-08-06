---
title: Guida rapida
---
import shivaNetwork_001 from './images/shiva_network_001.png'
import shivaNetwork_002 from './images/shiva_network_002.png'
import shivaNetwork_003 from './images/shiva_network_003.png'
import shivaNetwork_004 from './images/shiva_network_004.png'
import shivaNetwork_005 from './images/shiva_network_005.png'
import shivaNetwork_006 from './images/shiva_network_006.png'
import shivaNetworkVnShareEnabled from './images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from './images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from './images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from './images/shiva_network_vn_shared_with_me.png'

## Reti private regionali

Le reti private all'interno di una regione possono essere ordinate direttamente dalla console Cloud Temple.

### All'interno di un tenant

La creazione di una rete virtuale si effettua nel menu __*Network*__ sulla barra verde a sinistra dello schermo.

<img src={shivaNetwork_001} />

Fare poi clic sul pulsante __*Nuova rete*__.

È necessario specificare il nome della rete che verrà visualizzato. Per impostazione predefinita, tutti i cluster avranno accesso alla nuova rete.
Tuttavia, nel sottomenu __*Opzioni avanzate*__, è possibile specificare più precisamente l'ambito di propagazione all'interno del tenant tra i diversi cluster.

<img src={shivaNetwork_002} />

Tutte le azioni possibili sulle reti si trovano nel menu __*Azioni*__ di ciascuna di esse:

- Attivazione della condivisione di rete tra tenant della stessa organizzazione.
- Disattivazione della condivisione di rete tra tenant della stessa organizzazione.
- Aggiunta di una condivisione di rete tra tenant della stessa organizzazione.
- Rimozione di una condivisione di rete tra tenant della stessa organizzazione.
- Visualizzazione grafica della propagazione di una rete su tutti i cluster e gli hypervisor all'interno di un tenant.
- Rimozione di una propagazione all'interno di un tenant.
- Modifica di una propagazione all'interno di un tenant.
- Eliminazione di una rete.

<img src={shivaNetwork_003} />

#### Visualizzazione della propagazione delle reti

È possibile visualizzare facilmente nel menu __*Azioni*__ la propagazione di una rete verso i diversi cluster all'interno dello stesso tenant.
Scegliere l'opzione *"Visualizza propagazione"*:

<img src={shivaNetwork_004} />

#### Modifica della propagazione

La modifica di una propagazione all'interno di un tenant viene effettuata tramite l'opzione *"Propaga"*:
scegliere poi i cluster che devono essere inclusi in questa propagazione.

<img src={shivaNetwork_005} />

__*Nota:*__ *La modifica della propagazione è limitata a 20 reti per azione.*

#### Eliminazione di una rete

L'eliminazione di una rete all'interno di un tenant viene effettuata tramite l'opzione *"Elimina rete"*:

<img src={shivaNetwork_006} />

### Condivisione di rete tra tenant

Per impostazione predefinita, __le reti sono disponibili solo all'interno di un tenant__. È possibile scegliere di __condividere una rete tra più tenant__ per ragioni tecniche o di connettività.
È quindi possibile condividere una rete tra i propri __[Tenant](../../../console/iam/concepts/#tenant)__ all'interno della stessa organizzazione.

Per fare ciò, è sufficiente attivare la condivisione come mostrato di seguito.

<img src={shivaNetworkVnShareEnabled} />

Una volta attivata la condivisione, è sufficiente aggiungere una condivisione come mostrato di seguito.

<img src={shivaNetworkVnShared} />

Quindi, selezionare il tenant di destinazione. Si noti che l'elenco dei tenant è dinamico.
Dipende dalla propria organizzazione e dai propri diritti.

<img src={shivaNetworkVnSharedTenant} />

Una volta condivisa la rete, sarà visibile nella scheda 'Reti condivise' dal secondo tenant.

<img src={shivaNetworkVnSharedWithMe} />
