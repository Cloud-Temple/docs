---
title: Desplegar recursos
---
import shivaOrdersList from './images/shiva_orders_list.png'
import shivaOrderNotif_001 from './images/shiva_order_notif_001.png'
import shivaOrderStatus from './images/shiva_order_status.png'
import shivaOrderAz_01 from './images/shiva_order_az_01.png'
import shivaOrderAz_02 from './images/shiva_order_az_02.png'
import shivaOrderAz_03 from './images/shiva_order_az_03.png'
import shivaOrderAz_04 from './images/shiva_order_az_04.png'
import shivaOrderAz_05 from './images/shiva_order_az_05.png'
import shivaOrderAz_06 from './images/shiva_order_az_06.png'
import shivaOrderAz_07 from './images/shiva_order_az_07.png'
import shivaOrderAz_08 from './images/shiva_order_az_08.png'
import shivaOrderClucalc_01 from './images/shiva_order_clucalc_01.png'
import shivaOrderClucalc_02 from './images/shiva_order_clucalc_02.png'
import shivaOrderClucalc_03 from './images/shiva_order_clucalc_03.png'
import shivaOrderClucalc_04 from './images/shiva_order_clucalc_04.png'
import shivaOrderClucalc_05 from './images/shiva_order_clucalc_05.png'
import shivaOrderClusto_01 from './images/shiva_order_clusto_01.png'
import shivaOrderClusto_02 from './images/shiva_order_clusto_02.png'
import shivaOrderClusto_03 from './images/shiva_order_clusto_03.png'
import shivaOrderClusto_04 from './images/shiva_order_clusto_04.png'
import shivaOrdersIaasSpoolDs from './images/shiva_orders_iaas_spool_ds.png'
import shivaOrdersNet_002 from './images/shiva_orders_net_002.png'
import shivaOrdersNet_003 from './images/shiva_orders_net_003.png'
import shivaOrdersNet_004 from './images/shiva_orders_net_004.png'
import shivaOrdersIaasCpoolEsx from './images/shiva_orders_iaas_cpool_esx.png'
import shivaOrdersIaasCpoolMemory from './images/shiva_orders_iaas_cpool_memory.png'


## Concept

El seguimiento del despliegue de nuevos recursos se realiza en el menú __'Pedidos'__ accesible en la banda verde a la izquierda de la pantalla.

Permite visualizar los recursos en la nube pedidos, en curso de despliegue y los eventuales errores dentro de un [Tenant](iam/concepts.md#tenant) de su [Organización](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*Nótese: En este momento, la vista global a nivel de una organización de todos los recursos desplegados en los diferentes tenants aún no es posible.* Este tema se tratará en 2024 mediante la implementación de un portal dedicado al solicitante (en el sentido de firmante) y al control de su organización.*

El despliegue de recursos o su eliminación se realiza en cada uno de los productos en los menús __'IaaS'__ y __'Red'__ a la izquierda de la pantalla en la banda verde.

También es posible ver directamente las entregas en las notificaciones de la consola Cloud Temple:

<img src={shivaOrderNotif_001} />

Desde la página de pedidos, puede ver el estado de avance de una entrega y eventualmente dialogar con el equipo aportando comentarios o precisiones:

<img src={shivaOrderStatus} />

**Nota**: **No es posible lanzar varios pedidos del mismo tipo de recurso simultáneamente. Deberá esperar a que el pedido en curso sea tratado y finalizado antes de poder realizar uno nuevo. Esto garantiza una gestión eficaz y ordenada de los recursos dentro de su entorno.**

## Pedir una nueva zona de disponibilidad

Es posible añadir una nueva zona de disponibilidad accediendo al menú "**Pedido**". Esta opción le permite extender sus recursos y mejorar la disponibilidad y resiliencia de sus aplicaciones con solo unos clics:

<img src={shivaOrderAz_01} />

Se comienza por seleccionar la ubicación deseada, eligiendo primero la región geográfica, luego la zona de disponibilidad (AZ) correspondiente entre las disponibles. Este paso permite adaptar el despliegue de sus recursos en función de la localización y los requisitos de su infraestructura:

<img src={shivaOrderAz_02} />

Luego, proceda a seleccionar el tipo de clúster de hipervisor deseado, eligiendo el que mejor responda a las necesidades de rendimiento y gestión de su infraestructura en la nube:

<img src={shivaOrderAz_03} />

A continuación, seleccione el número de hipervisores así como la cantidad de memoria deseada, para adaptar los recursos a la carga de trabajo y a las exigencias específicas de su entorno en la nube:

<img src={shivaOrderAz_04} />

Después, seleccione el número de datastores a provisionar en el clúster así como sus tipos. Es importante tener en cuenta que el número máximo de datastores permitidos es de 10, con un mínimo de 2 datastores requeridos. Cada tipo diferente de datastore resultará en la creación de un datastoreCluster adicional. Por ejemplo, si elige 2 datastores tipo "live" y 1 datastore tipo "mass", resultará en la formación de 2 datastoreClusters distintos:

<img src={shivaOrderAz_05} />

Defina el tamaño de almacenamiento necesario para la copia de seguridad, asegurándose de provisionar una capacidad equivalente a la de su almacenamiento de producción. Tenga en cuenta una tasa de compresión media de 2 para optimizar el espacio de copia de seguridad y garantizar una protección eficaz de sus datos:

<img src={shivaOrderAz_06} />

Seleccione las redes a propagar en función de sus necesidades. También tiene la opción de activar la opción "Acceso a internet" si es necesario, definiendo el número de direcciones IP deseadas, con una elección comprendida entre 1 y un máximo de 8:

<img src={shivaOrderAz_07} />

Luego obtendrá un resumen de las opciones seleccionadas antes de confirmar su pedido.

<img src={shivaOrderAz_08} />

## Pedir recursos de almacenamiento adicional

La lógica de asignación de almacenamiento en modo bloque en los clústeres de cálculo es TODO

### Desplegar un nuevo clúster de cálculo

Proceda a pedir un clúster de hipervisor seleccionando las opciones adecuadas a sus necesidades de virtualización. Defina las características clave tales como el número de hipervisores, el tipo de clúster, la cantidad de memoria, así como los recursos de cálculo requeridos:

<img src={shivaOrderClucalc_01} />

Seleccione la zona de disponibilidad:

<img src={shivaOrderClucalc_02} />

Seleccione el tipo de blade de cálculo:

<img src={shivaOrderClucalc_03} />

Luego tiene la posibilidad de seleccionar redes ya existentes y propagarlas, o bien crear nuevas directamente en este paso, según las necesidades de su infraestructura. Cabe notar que el número total de redes configurables está limitado a un máximo de 20:

<img src={shivaOrderClucalc_04} />

Luego obtiene un resumen de las opciones seleccionadas antes de confirmar su pedido y puede visualizar su pedido en curso:

<img src={shivaOrderClucalc_05} />

### Desplegar un nuevo clúster de almacenamiento

En el menú "**pedido**", proceda a pedir un **nuevo clúster de almacenamiento** para su entorno seleccionando las opciones que corresponden a sus necesidades en términos de capacidad, rendimiento y redundancia. Seleccione la ubicación:

<img src={shivaOrderClusto_01} />

Defina el número de datastores a provisionar en el clúster así como su tipo, respetando los límites siguientes: un mínimo de 2 datastores y un máximo de 10 pueden ser configurados. Elija los tipos de datastores que mejor respondan a sus necesidades en términos de rendimiento, capacidad y uso, para optimizar el almacenamiento de su entorno:

<img src={shivaOrderClusto_02} />

Seleccione el tipo de almacenamiento deseado entre las diferentes opciones disponibles:

<img src={shivaOrderClusto_03} />

Luego accederá a un resumen completo de las opciones que ha seleccionado, permitiéndole verificar todos los parámetros antes de confirmar definitivamente su pedido:

<img src={shivaOrderClusto_04} />

### Desplegar un nuevo datastore dentro de un clúster SDRS VMware

En este ejemplo, vamos a añadir almacenamiento en modo bloque para una infraestructura VMware.
Para añadir un datastore adicional en su clúster de almacenamiento SDRS, vaya al submenú __'Infraestructura'__ luego __'VMWare'__.
Luego elija la pila de VMware y la zona de disponibilidad. Luego vaya al submenú __'Almacenamiento'__.

Elija el clúster SDRS correspondiente a las características de rendimiento que desea y haga clic en el botón __'Añadir un datastore'__ que se encuentra en la tabla con la lista de datastores.

<img src={shivaOrdersIaasSpoolDs} />

__nota__ :
- *El tamaño de la LUN más pequeña activable en un clúster es de __500 Gio__.*
- *El rendimiento de un datastore varía de 500 iops/Tio en promedio hasta 15000 iops/Tio en promedio. __Es una limitación de software realizada a nivel de los controladores de almacenamiento__.*
- *La contabilidad del volumen de disco consumido por su organización es la suma de todos los LUNs en todas las AZs utilizadas*.
- *Se requieren los derechos __'order'__ así como __'compute'__ en la cuenta para realizar esta acción.*

### Pedir nuevas redes

La tecnología de red utilizada en la infraestructura Cloud Temple está basada en [VPLS](https://es.wikipedia.org/wiki/Virtual_Private_LAN_Service). Le permite beneficiarse de __redes de nivel 2 en continuidad entre sus zonas de disponibilidad dentro de una región__.
También es posible compartir redes entre sus tenants y terminarlas en la zona de hosting.
Básicamente, puede imaginar una red de Cloud Temple como una vlan 802.1q disponible en cualquier punto de su tenant.

TODO


El pedido de una nueva red y las decisiones de compartición entre sus tenants, se realizan en el menú __'Red'__ del panel verde a la izquierda de la pantalla. Las redes se crearán primero y luego se generará un pedido separado para propagarlas. Puede seguir el progreso de los pedidos en curso accediendo a la pestaña "Pedido" en el menú, o haciendo clic en las etiquetas informativas que lo redirigen a los pedidos activos o en proceso.

<img src={shivaOrdersNet_002} />

También es posible propagar redes ya existentes o separar los dos pasos, comenzando con la creación de la red y luego procediendo a la propagación más tarde según sus necesidades. La opción de propagación se encuentra en las opciones de la red seleccionada:

<img src={shivaOrdersNet_003} />

Haga clic en la opción "Propagar" para una red ya existente, luego seleccione el destino de propagación deseado. Este paso le permite definir la ubicación o los recursos en los que se debe propagar la red:

<img src={shivaOrdersNet_004} />

### Desactivación de una red

Una red también puede ser desactivada si es necesario. Esta opción le permite pausar temporalmente el acceso o uso de la red sin eliminarla permanentemente, ofreciendo así flexibilidad en la gestión de su infraestructura según sus necesidades.

La opción de desactivación se encuentra en las opciones de la red seleccionada.

## Agregar hipervisores adicionales a un clúster de cómputo

La lógica de funcionamiento de los clústeres de cómputo es TODO

Agregar hipervisores a un clúster de cómputo se realiza en el menú __'IaaS'__ en el panel verde a la izquierda de la pantalla. En el siguiente ejemplo, vamos a agregar cómputo en un clúster de hipervisores utilizando la tecnología VMware.

Vaya al submenú __'Infraestructura'__ y luego __'VMWare'__. Elija entonces la stack vmware y la zona de disponibilidad y el clúster de cómputo. En este ejemplo, se trata del __'clu001-ucs12'__. Haga clic en el botón __'Agregar un host'__ que se encuentra en la tabla con la lista de hosts, en la parte superior derecha.

__nota__:

- *__La configuración de un clúster debe ser homogénea__. Por lo tanto, no está permitido mezclar tipos de hipervisores dentro de un clúster. Todas las blades deben ser del mismo tipo.*
- *Los derechos __'order'__ así como __'compute'__ son necesarios para la cuenta para realizar esta acción.*

<img src={shivaOrdersIaasCpoolEsx} />

## Agregar memoria adicional a un clúster de cómputo

La lógica de asignación de memoria en los clústeres de cómputo es TODO

Para agregar memoria RAM a un clúster, simplemente vaya a la configuración del clúster (como para agregar un host de cómputo, tal como se vio anteriormente) y haga clic en __'Modificar la memoria'__.

<img src={shivaOrdersIaasCpoolMemory} />

__nota__:
- *__Las máquinas vienen con la totalidad de la memoria física__. La activación de la memoria es solo una activación de software a nivel de clúster.*
- *No es posible modificar la cantidad de memoria física de un tipo de blade. Tenga en cuenta la capacidad máxima de una blade al crear un clúster.*
- *Los derechos __'order'__ así como __'compute'__ son necesarios para la cuenta para realizar esta acción.*
