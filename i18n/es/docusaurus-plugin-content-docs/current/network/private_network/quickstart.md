---
title: guía de inicio
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

### Redes Privados Regionales

La configuración de redes privadas dentro de una región se realiza directamente en la consola de Cloud Temple.

### En el interior de un entorno

La creación de un red virtual se realiza en el menú __*Redes*__ del barra lateral superior a la izquierda del escritorio.

<img src={shivaNetwork_001} />

Haz clic luego en el botón __*Nueva red*__.

Debes especificar el nombre de tu red, que se mostrará. Por defecto, todos tus clusters accederán a tu nueva red.

Ahora es posible crear múltiples redes simultáneamente. Simplemente haz clic en __*Agregar red*__.

<img src={shivaNetwork_002} />

En las próximas etapas, podrás especificar más detalladamente la propagación dentro del entorno entre tus diferentes clusters IaaS VMware o Open IaaS.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Gestión de comandos de red

Des que todas las etapas se hayan completado, tus redes se crearán y luego se generará una orden para propagarlas. Puedes seguir tus comandos:

- A través del menú __Comandos*__ en el menú principal.

<img src={shivaNetwork_order_001} />

- Al hacer clic en los etiquetas de información que redirigen a las comandos relacionadas.

> **Importante:** No es posible generar múltiples comandos del mismo tipo de recurso al mismo tiempo. Deberás esperar a que se confirme la orden en curso antes de crear una nueva.

Todas las acciones posibles sobre tus redes se encuentran en el menú __Acciones*__ de cada uno:

- La activación del intercambio de una red entre tenientes de la misma organización.
- La desactivación del intercambio de una red entre tenientes de la misma organización.
- El agregado de un intercambio de una red entre tenientes de la misma organización.
- La eliminación de un intercambio de una red entre tenientes de la misma organización.
- La visualización gráfica de la propagación de una red en todos tus clusters y hyperviseurs dentro de un teniente.
- La eliminación de la propagación en un teniente.
- La modificación de la propagación en un teniente.

> **La eliminación de una red aún no está disponible.**

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Visualización de la propagación de sus redes

Puedes visualizar fácilmente en el menú __*Acciones*__ la propagación de un red hacia tus diferentes clusters dentro del mismo teniente.

Selecciona la opción *"Visualizar la propagación"* :

<img src={shivaNetwork_007} />

#### Modificación de la propagación

La modificación de una propagación dentro de un tenente se realiza mediante la opción __*Propagar*. Por favor, seleccione a qué producto (IaaS VMware, IaaS abierto, Metal) deseas propagar tus redes, y luego los clusters deben estar integrados en esta propagación.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Nota:*__ *La modificación de la propagación está limitada a 20 redes por acción.*

#### Eliminación de la propagación

La eliminación de una propagación dentro de un entorno se realiza mediante la opción __Eliminar una propagación__:

Selección luego de qué propagación deseas eliminar:

<img src={shivaNetworkDeletePropagation} />

Se genera una comanda, al igual que en la creación inicial con propagación.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

### Propagación diferida de redes

Es posible separar la creación y propagación de redes en dos pasos distintos:

1. **Propagar un red existente**: Haga clic en la acción __*Propagar*__ sobre una red ya creada
2. **Seleccionar el destino de propagación**: Se generará entonces una orden, similar a cuando se creó inicialmente con propagación.

### Activación y desactivación de redes

Una red puede estar temporalmente desactivada sin ser eliminada y luego reactivarse.

![shivaNetwork_010](https://user-images.githubusercontent.com/25836947/151612401-d1e0c8b6-a8f1-4e0b-9c7f-1a9e1d6e6e6d.png)

### Compartir red de redes entre tenantes

De forma predeterminada, los redes están disponibles únicamente dentro de un teniente. Puedes optar por compartir una red entre múltiples tenientes para razones técnicas o necesidades de conectividad. De esta manera, es posible compartir una red entre tus [Tenentes](../../console/iam/concepts.md#hosting) dentro de la misma organización.

Para ello, solo es necesario activar la compartición a continuación:

<img src={shivaNetworkVnShareEnabled} />

Una vez activada la compartición, simplemente agrega un compartición como sigue:

<img src={shivaNetworkVnShared} />

Luego, selecciona el teniente objetivo. Ten en cuenta que la lista de tenientes es dinámica y depende de tu organización y tus permisos.

<img src={shivaNetworkVnSharedTenant} />

Una vez compartida la red, será visible en el panel 'Redes compartidas' desde tu segundo teniente.

<img src={shivaNetworkVnSharedWithMe} />

### Visualización de redes compartidas

Después de propagar los redes, el panel "Redes compartidas" permite visualizar las redes que otros tenedores de tu organización comparten contigo:

<img src={shivaNetwork_007} />
