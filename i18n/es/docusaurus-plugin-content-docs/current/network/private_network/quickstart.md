---
title: Guía de inicio
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

## Redes privadas regionales

El pedido de redes privadas dentro de una región se realiza directamente en la consola Cloud Temple.

### Dentro de un tenant

La creación de una red virtual se realiza en el menú __*Red*__ > __*Backbone privado*__ en la barra verde a la izquierda de la pantalla.

<img src={shivaNetwork_001} />

Haga clic a continuación en el botón __*Nueva red*__

Debe especificar el nombre de su red que se mostrará. De forma predeterminada, todos sus clusters tendrán acceso a su nueva red.

Ahora es posible crear varias redes simultáneamente. Simplemente haga clic en __*agregar una red*__.

<img src={shivaNetwork_002} />

En los próximos pasos, podrá especificar con mayor precisión el alcance de la propagación dentro del tenant entre sus diferentes clusters IaaS VMware o Open IaaS.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Gestión de pedidos de red

Después de completar todos los pasos, sus redes se crean y luego se genera un pedido para propagarlas. Puede hacer seguimiento de sus pedidos:

- A través de la pestaña __*Pedidos*__ en el menú principal

<img src={shivaNetwork_order_001} />

- Haciendo clic en las etiquetas de información que redirigen a los pedidos relacionados

> __Importante:__ No es posible generar varios pedidos del mismo tipo de recurso simultáneamente. Debe esperar a que el pedido en curso sea procesado antes de crear uno nuevo.

Todas las acciones posibles sobre sus redes se encuentran en el menú __*Acciones*__ de cada una de ellas:

- La activación del compartir de una red entre tenants de la misma organización.
- La desactivación del compartir de una red entre tenants de la misma organización.
- La adición de un compartir de una red entre tenants de la misma organización.
- La eliminación de un compartir de una red entre tenants de la misma organización.
- La visualización gráfica de la propagación de una red en todos sus clusters e hipervisores dentro de un tenant.
- La eliminación de una propagación dentro de un tenant.
- La modificación de una propagación dentro de un tenant.

> La eliminación de una red aún no está disponible.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Visualización de la propagación de sus redes

Puede fácilmente en el menú __*Acciones*__ visualizar para una red su propagación hacia sus diferentes clusters dentro de un mismo tenant.

Elija la opción *"Visualizar la propagación"*:

<img src={shivaNetwork_007} />

#### Modificación de la propagación

La modificación de una propagación dentro de un tenant se realiza mediante la opción __*Propagar*__:

A continuación, elija hacia qué producto (IaaS VMware, Open IaaS, Bare metal) desea propagar sus redes y luego los clusters que deben ser integrados en esta propagación.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Nota:*__ *La modificación de propagación está limitada a 20 redes por acción.*

#### Eliminación de la propagación

La eliminación de una propagación dentro de un tenant se realiza mediante la opción __*Eliminar una propagación*__:

A continuación, elija qué propagación desea eliminar:

<img src={shivaNetworkDeletePropagation} />

A continuación se crea un pedido, como durante la creación inicial con propagación.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Propagación diferida de las redes

Es posible separar la creación y la propagación de las redes en dos pasos distintos:

1. __Propagar una red existente__: Haga clic en la acción __*Propagar*__ en una red ya creada
2. __Seleccionar el destino de propagación__: A continuación se crea un pedido, como durante la creación inicial con propagación.

#### Activación y desactivación de las redes

Una red puede desactivarse temporalmente sin ser eliminada y luego reactivarse.

<img src={shivaNetwork_010} />

### Compartir de red entre tenants

De forma predeterminada, __las redes solo están disponibles dentro de un tenant__. Puede elegir __compartir una red entre varios tenants__ por razones técnicas o de conectividad.
De esta forma, es posible compartir una red entre sus __[Tenant](../../console/iam/concepts.md#tenant)__ dentro de la misma organización.

Para ello, simplemente active el compartir como se muestra a continuación.

<img src={shivaNetworkVnShareEnabled} />

Una vez activado el compartir, simplemente agregue un compartir como se muestra a continuación.

<img src={shivaNetworkVnShared} />

A continuación, seleccione el tenant de destino. Atención, la lista de tenants es dinámica.
Depende de su organización y de sus permisos.

<img src={shivaNetworkVnSharedTenant} />

Una vez compartida la red, será visible en la pestaña 'Redes compartidas' desde su segundo tenant.

<img src={shivaNetworkVnSharedWithMe} />

### Visualización de las redes compartidas

Una vez propagadas las redes, la pestaña "Redes compartidas" permite visualizar las redes que otros tenants de su organización comparten con usted:

<img src={shivaNetwork_007} />
