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

El comando de las redes privadas dentro de una región se realiza directamente en la consola Cloud Temple.

### Dentro de un inquilino

La creación de una red virtual se realiza en el menú __*Network*__ en la barra verde a la izquierda de la pantalla.

<img src={shivaNetwork_001} />

Haga clic a continuación en el botón __*Nuevo red*__.

Debe especificar el nombre de su red que se mostrará. Por defecto, todos sus clusters accederán a su nueva red. Sin embargo, en el submenú __*Opciones Avanzadas*__, puede especificar con más precisión el alcance de la propagación dentro del inquilino entre sus diferentes clusters.

<img src={shivaNetwork_002} />

El conjunto de acciones posibles sobre sus redes se encuentra en el menú __*Acciones*__ de cada una de ellas:

- La activación del compartir una red entre inquilinos de una misma organización.
- La desactivación del compartir una red entre inquilinos de una misma organización.
- La adición de un compartir una red entre inquilinos de una misma organización.
- La supresión de un compartir una red entre inquilinos de una misma organización.
- La visualización gráfica de la propagación de una red en todos sus clusters y hipervisores dentro de un inquilino.
- La supresión de una propagación dentro de un inquilino.
- La modificación de una propagación dentro de un inquilino.
- La supresión de una red.

<img src={shivaNetwork_003} />

#### Visualización de la propagación de sus redes

Puede visualizar fácilmente, en el menú __*Actions*__, la propagación de una red hacia sus diferentes clusters dentro del mismo inquilino.
Elija la opción *"Visualizar la propagación"* :

<img src={shivaNetwork_004} />

#### Modificación de la propagación

La modificación de una propagación dentro de un tenant se realiza mediante la opción *Propagar*: seleccione luego los clusters que deben integrarse en esta propagación.

<img src={shivaNetwork_005} />

__*Nota :*__ *La modificación de propagación está limitada a 20 redes por acción.*

#### Eliminación de una red

La eliminación de una red dentro de un tenant se realiza mediante la opción *"Eliminar la red"* :

<img src={shivaNetwork_006} />

### Compartir red entre tenants

Por defecto, __las redes están disponibles únicamente dentro de un tenant__. Puede elegir __compartir una red entre varios tenants__ por razones técnicas o de conectividad.  
Es posible compartir una red entre sus __[Tenant](../../console/iam/concepts.md#tenant)__ dentro de una misma organización.

Para ello, basta con activar el compartir como se muestra a continuación.

<img src={shivaNetworkVnShareEnabled} />

Una vez que se ha activado el compartir, simplemente debe agregar un compartir como se muestra a continuación.

<img src={shivaNetworkVnShared} />

Luego, seleccione el tenant objetivo. Atención, la lista de tenants es dinámica.  
Depende de su organización y de sus permisos.

<img src={shivaNetworkVnSharedTenant} />

Una vez que la red se haya compartido, será visible en la pestaña "Redes compartidas" desde su segundo tenant.

<img src={shivaNetworkVnSharedWithMe} />