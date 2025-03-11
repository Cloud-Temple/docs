---
title: Guía de inicio
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


## Redes privadas regionales

La creación de redes privadas dentro de una región se realiza directamente en la consola Cloud Temple.

### Dentro de un tenant

La creación de una red virtual se realiza en el menú __*Network*__ en la banda verde a la izquierda de la pantalla.

<img src={shivaNetwork_001} />

Luego haga clic en el botón __*Nouveau réseau*__

Debe especificar el nombre de su red que se mostrará. Por defecto, todos sus clústeres accederán a su nueva red.
Sin embargo, en el submenú __*Options Avancées*__, puede especificar más detalladamente el alcance de la propagación dentro del tenant entre sus diferentes clústeres.

<img src={shivaNetwork_002} />

Todas las acciones posibles sobre sus redes se encuentran en el menú __*Actions*__ de cada una de ellas:

- La activación del compartir una red entre tenants de una misma organización.
- La desactivación del compartir una red entre tenants de una misma organización.
- La adición de un compartir una red entre tenants de una misma organización.
- La eliminación de un compartir una red entre tenants de una misma organización.
- La visualización gráfica de la propagación de una red en todos sus clústeres e hipervisores dentro de un tenant.
- La eliminación de una propagación dentro de un tenant.
- La modificación de una propagación dentro de un tenant.
- La eliminación de una red.

<img src={shivaNetwork_003} />

#### Visualización de la propagación de sus redes

Puede fácilmente en el menú __*Actions*__ visualizar para una red su propagación hacia sus diferentes clústeres dentro de un mismo tenant.
Elija la opción *"Visualiser la propagation"* :

<img src={shivaNetwork_004} />

#### Modificación de la propagación

La modificación de una propagación dentro de un tenant se realiza mediante la opción *"Propager"* :
luego elija los clústeres que deben integrarse en esta propagación.

<img src={shivaNetwork_005} />

__*Nota :*__ *La modificación de la propagación está limitada a 20 redes por acción.*

#### Eliminación de una red

La eliminación de una red dentro de un tenant se realiza mediante la opción *"Supprimer le réseau"* :

<img src={shivaNetwork_006} />

### Compartir una red entre tenants

Por defecto, __las redes están disponibles solo dentro de un tenant__. Puede elegir __compartir una red entre varios tenants__ por razones técnicas o de conectividad.
Es posible compartir una red entre sus __[Tenant](../../../console/iam/concepts/#tenant)__ dentro de una misma organización.

Solo necesita activar el compartir como se muestra a continuación.

<img src={shivaNetworkVnShareEnabled} />

Una vez activado el compartir, solo necesita agregar un compartir como se muestra a continuación.

<img src={shivaNetworkVnShared} />

Luego, seleccione el tenant objetivo. Tenga en cuenta que la lista de tenants es dinámica.
Depende de su organización y de sus derechos.

<img src={shivaNetworkVnSharedTenant} />

Una vez compartida la red, será visible en la pestaña 'Réseaux partagés' desde su segundo tenant.

<img src={shivaNetworkVnSharedWithMe} />