---
title: Guía de inicio
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

## Redes privadas regionales

El pedido de redes privadas dentro de una región se realiza directamente en la consola Cloud Temple.

### Dentro de un inquilino

La creación de una red virtual se realiza en el menú __*Redes*__ en la banda verde a la izquierda de la pantalla.

<img src={shivaNetwork_001} />

Luego haga clic en el botón __*Nueva red*__

Debe especificar el nombre de su red que se mostrará. Por defecto, todos sus clústeres accederán a su nueva red.

Ahora es posible crear varias redes simultáneamente. Simplemente haga clic en __*agregar una red*__.

<img src={shivaNetwork_002} />

En los siguientes pasos, podrá especificar más precisamente el alcance de la propagación dentro del tenant entre sus diferentes clústeres IaaS VMware o Open IaaS.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Gestión de pedidos de red

Después de completar todos los pasos, se crean sus redes y luego se genera un pedido para propagarlas. Puede realizar un seguimiento de sus pedidos:

- A través de la pestaña __*Pedidos*__ en el menú principal

<img src={shivaNetwork_order_001} />

- Haciendo clic en las etiquetas de información que redirigen a los pedidos relacionados

> __Importante:__ No es posible generar varios pedidos del mismo tipo de recurso simultáneamente. Debe esperar a que se procese el pedido actual antes de crear uno nuevo.

Todas las acciones posibles en sus redes se encuentran en el menú __*Acciones*__ de cada una:

- La activación del uso compartido de red entre tenants de la misma organización.
- La desactivación del uso compartido de red entre tenants de la misma organización.
- La adición de uso compartido de red entre tenants de la misma organización.
- La eliminación de uso compartido de red entre tenants de la misma organización.
- La visualización gráfica de la propagación de una red en todos sus clústeres e hipervisores dentro de un tenant.
- La eliminación de una propagación dentro de un tenant.
- La modificación de una propagación dentro de un tenant.

> La eliminación de redes aún no está disponible.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Visualización de la propagación de sus redes

Puede visualizar fácilmente en el menú __*Acciones*__ la propagación de una red hacia sus diferentes clústeres dentro del mismo tenant.

Elija la opción *"Visualizar propagación"*:

<img src={shivaNetwork_007} />

#### Modificación de la propagación

La modificación de una propagación dentro de un tenant se realiza mediante la opción __*Propagar*__:

Luego elija hacia qué producto (IaaS VMware, Open IaaS, Bare metal) desea propagar sus redes, y luego los clústeres que deben integrarse en esta propagación.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Nota :*__ *La modificación de propagación está limitada a 20 redes por acción.*

#### Eliminación de la propagación

La eliminación de una propagación dentro de un tenant se realiza mediante la opción __*Eliminar propagación*__:

Luego elija qué propagación desea eliminar:

<img src={shivaNetworkDeletePropagation} />

Luego se crea un pedido, como durante la creación inicial con propagación.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Propagación diferida de redes

Es posible separar la creación y propagación de redes en dos pasos distintos:

1. __Propagar una red existente__: Haga clic en la acción __*Propagar*__ en una red ya creada
2. __Seleccionar el destino de propagación__: Luego se crea un pedido, como durante la creación inicial con propagación.

#### Activación y desactivación de redes

Una red puede desactivarse temporalmente sin ser eliminada y luego reactivarse.

<img src={shivaNetwork_010} />

### Compartir red entre tenants

Por defecto, __las redes solo están disponibles dentro de un tenant__. Puede elegir __compartir una red entre varios tenants__ por razones técnicas o de conectividad.
Por lo tanto, es posible compartir una red entre sus __[Tenants](../../../console/iam/concepts/#tenant)__ dentro de la misma organización.

Simplemente active el uso compartido como se muestra a continuación.

<img src={shivaNetworkVnShareEnabled} />

Una vez activado el uso compartido, simplemente agregue un recurso compartido como se muestra a continuación.

<img src={shivaNetworkVnShared} />

Luego, seleccione el tenant de destino. Tenga en cuenta que la lista de tenants es dinámica.
Depende de su organización y sus derechos.

<img src={shivaNetworkVnSharedTenant} />

Una vez que la red se haya compartido, será visible en la pestaña "Redes compartidas" desde su segundo tenant.

<img src={shivaNetworkVnSharedWithMe} />

### Visualización de redes compartidas

Una vez propagadas las redes, la pestaña "Redes compartidas" le permite visualizar las redes que otros tenants de su organización comparten con usted:

<img src={shivaNetwork_007} />
