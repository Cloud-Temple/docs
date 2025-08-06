---
title: Guía de inicio rápido
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

## Redes privadas regionales

Las redes privadas dentro de una región se pueden solicitar directamente desde la consola de Cloud Temple.

### Dentro de un tenant

La creación de una red virtual se realiza en el menú __*Network*__ en la barra verde a la izquierda de la pantalla.

<img src={shivaNetwork_001} />

Luego haga clic en el botón __*Nueva red*__.

Debe especificar el nombre de su red que se mostrará. Por defecto, todos sus clústeres tendrán acceso a su nueva red.
Sin embargo, en el submenú __*Opciones avanzadas*__, puede especificar con más precisión el alcance de propagación dentro del tenant entre sus diferentes clústeres.

<img src={shivaNetwork_002} />

Todas las acciones posibles en sus redes se encuentran en el menú __*Acciones*__ de cada una de ellas:

- Activación del uso compartido de red entre tenants de la misma organización.
- Desactivación del uso compartido de red entre tenants de la misma organización.
- Adición de un uso compartido de red entre tenants de la misma organización.
- Eliminación de un uso compartido de red entre tenants de la misma organización.
- Visualización gráfica de la propagación de una red en todos sus clústeres e hipervisores dentro de un tenant.
- Eliminación de una propagación dentro de un tenant.
- Modificación de una propagación dentro de un tenant.
- Eliminación de una red.

<img src={shivaNetwork_003} />

#### Visualización de la propagación de sus redes

Puede visualizar fácilmente en el menú __*Acciones*__ la propagación de una red hacia sus diferentes clústeres dentro de un mismo tenant.
Elija la opción *"Ver propagación"*:

<img src={shivaNetwork_004} />

#### Modificación de la propagación

La modificación de una propagación dentro de un tenant se realiza mediante la opción *"Propagar"*:
luego elija los clústeres que deben incluirse en esta propagación.

<img src={shivaNetwork_005} />

__*Nota:*__ *La modificación de propagación está limitada a 20 redes por acción.*

#### Eliminación de una red

La eliminación de una red dentro de un tenant se realiza mediante la opción *"Eliminar red"*:

<img src={shivaNetwork_006} />

### Compartir red entre tenants

Por defecto, __las redes solo están disponibles dentro de un tenant__. Puede elegir __compartir una red entre varios tenants__ por razones técnicas o de conectividad.
Así, es posible compartir una red entre sus __[Tenants](../../../console/iam/concepts/#tenant)__ dentro de una misma organización.

Para ello, simplemente active el uso compartido como se muestra a continuación.

<img src={shivaNetworkVnShareEnabled} />

Una vez activado el uso compartido, solo necesita añadir un uso compartido como se muestra a continuación.

<img src={shivaNetworkVnShared} />

Luego, seleccione el tenant de destino. Tenga en cuenta que la lista de tenants es dinámica.
Depende de su organización y sus permisos.

<img src={shivaNetworkVnSharedTenant} />

Una vez compartida la red, será visible en la pestaña 'Redes compartidas' desde su segundo tenant.

<img src={shivaNetworkVnSharedWithMe} />
