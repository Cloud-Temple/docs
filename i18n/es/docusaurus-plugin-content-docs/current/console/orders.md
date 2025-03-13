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

## Concepto

El seguimiento del despliegue de nuevos recursos se realiza en el menú __'Pedidos'__ accesible en la barra verde a la izquierda de la pantalla.

Permite visualizar los recursos Cloud solicitados, en curso de despliegue y los posibles errores dentro de un [Tenant](iam/concepts.md#tenant) de su [Organización](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Nota: En este momento, la vista global a nivel de una organización de todos los recursos desplegados en los diferentes tenants aún no es posible.__ Este tema será tratado en 2024 mediante la implementación de un portal dedicado al solicitante (en el sentido de firmante) y a la gestión de su organización.*

El despliegue de los recursos o su eliminación se realizan en cada uno de los productos en los menús __'IaaS'__ y __'Red'__ a la izquierda de la pantalla en la barra verde.

También es posible ver directamente las entregas a nivel de las notificaciones de la consola Cloud Temple:

<img src={shivaOrderNotif_001} />

Desde la página de pedidos, puede ver el estado de avance de una entrega y eventualmente dialogar con el equipo aportando comentarios o precisiones:

<img src={shivaOrderStatus} />

__Nota__: __No es posible lanzar varios pedidos del mismo tipo de recurso simultáneamente. Deberá esperar a que el pedido en curso sea procesado y finalizado antes de poder realizar uno nuevo. Esto garantiza una gestión eficiente y ordenada de los recursos en su entorno.__

## Solicitar una nueva zona de disponibilidad

Es posible añadir una nueva zona de disponibilidad accediendo al menú "__Pedido__". Esta opción le permite extender sus recursos y mejorar la disponibilidad y la resiliencia de sus aplicaciones con solo unos clics:

<img src={shivaOrderAz_01} />

Se comienza por seleccionar la ubicación deseada, eligiendo primero la región geográfica, luego la zona de disponibilidad (AZ) correspondiente entre las disponibles. Este paso permite adaptar el despliegue de sus recursos en función de la localización y los requisitos de su infraestructura:

<img src={shivaOrderAz_02} />

A continuación, proceda a seleccionar el tipo de clúster de hipervisor deseado, eligiendo el que mejor responda a las necesidades de rendimiento y gestión de su infraestructura cloud:

<img src={shivaOrderAz_03} />

Seleccione luego el número de hipervisores así como la cantidad de memoria deseada, para adaptar los recursos a la carga de trabajo y a los requisitos específicos de su entorno cloud:

<img src={shivaOrderAz_04} />

Seleccione el número de datastores a aprovisionar en el clúster así como sus tipos. Es importante tener en cuenta que el número máximo de datastores autorizados es de 10, con un mínimo de 2 datastores requeridos. Cada tipo de datastore diferente conllevará la creación de un datastoreCluster adicional. Por ejemplo, si elige 2 datastores de tipo "live" y 1 datastore de tipo "mass", esto resultará en la formación de 2 datastoreClusters distintos:

<img src={shivaOrderAz_05} />

Defina el tamaño de almacenamiento necesario para la copia de seguridad asegurándose de prever una capacidad equivalente a la de su almacenamiento de producción. Tenga en cuenta una tasa de compresión media de 2 para optimizar el espacio de copia de seguridad y asegurar una protección eficaz de sus datos:

<img src={shivaOrderAz_06} />

Seleccione las redes a propagar en función de sus necesidades. También tiene la posibilidad de activar la opción "Acceso a internet" si es necesario, definiendo el número de direcciones IP deseadas, con una elección comprendida entre 1 y un máximo de 8:

<img src={shivaOrderAz_07} />

Obtendrá luego un resumen de las opciones seleccionadas antes de validar su pedido.

<img src={shivaOrderAz_08} />

## Solicitar recursos de almacenamiento adicionales

La lógica de asignación del almacenamiento en modo bloque en los clústeres de cálculo es TODO

### Desplegar un nuevo clúster de cálculo

Proceda a solicitar un clúster de hipervisor seleccionando las opciones adaptadas a sus necesidades en materia de virtualización. Defina las características clave como el número de hipervisores, el tipo de clúster, la cantidad de memoria, así como los recursos de cálculo requeridos:

<img src={shivaOrderClucalc_01} />

Seleccione la zona de disponibilidad:

<img src={shivaOrderClucalc_02} />

Elija el tipo de hoja de cálculo:

<img src={shivaOrderClucalc_03} />

Tiene luego la posibilidad de seleccionar redes ya existentes y propagarlas, o bien crear nuevas directamente en esta etapa, según las necesidades de su infraestructura. Tenga en cuenta que el número total de redes configurables está limitado a un máximo de 20:

<img src={shivaOrderClucalc_04} />

Obtendrá luego un resumen de las opciones seleccionadas antes de validar su pedido y podrá visualizar su pedido en curso:

<img src={shivaOrderClucalc_05} />

### Desplegar un nuevo clúster de almacenamiento

En el menú "__pedido__", proceda a solicitar un __nuevo clúster de almacenamiento__ para su entorno seleccionando las opciones que correspondan a sus necesidades en términos de capacidad, rendimiento y redundancia. Seleccione la ubicación:

<img src={shivaOrderClusto_01} />

Defina el número de datastores a aprovisionar en el clúster así como su tipo, respetando los siguientes límites: un mínimo de 2 datastores y un máximo de 10 pueden ser configurados. Elija los tipos de datastores que mejor respondan a sus necesidades en términos de rendimiento, capacidad y uso, para optimizar el almacenamiento de su entorno:

<img src={shivaOrderClusto_02} />

Seleccione el tipo de almacenamiento deseado entre las diferentes opciones disponibles:

<img src={shivaOrderClusto_03} />

Accede luego a un resumen completo de las opciones que ha seleccionado, permitiéndole verificar todos los parámetros antes de validar definitivamente su pedido:

<img src={shivaOrderClusto_04} />

### Desplegar un nuevo datastore dentro de un clúster SDRS VMware

En este ejemplo, vamos a añadir almacenamiento en modo bloque para una infraestructura VMware.
Para añadir un datastore adicional en su clúster de almacenamiento SDRS, vaya al submenú __'Infraestructura'__ y luego __'VMWare'__.
Elija entonces la stack vmware y la zona de disponibilidad. Vaya luego al submenú __'Almacenamiento'__.

Elija el clúster SDRS correspondiente a las características de rendimiento que desea y haga clic en el botón __'Añadir un datastore'__ que se encuentra en la tabla con la lista de datastores.

<img src={shivaOrdersIaasSpoolDs} />

__Nota__:

- *El tamaño de la LUN más pequeña activable en un clúster es de __500 GiB__.*
- *El rendimiento de un datastore va desde 500 iops/TiB de media hasta 15000 iops/TiB de media. __Es una limitación de software realizada a nivel de los controladores de almacenamiento__.*
- *La contabilidad del volumen de disco consumido por su organización es la suma de todas las LUNs en el conjunto de las AZs utilizadas*.
- *Los derechos __'order'__ así como __'compute'__ son necesarios para la cuenta para llevar a cabo esta acción.*

### Solicitar nuevas redes

La tecnología de red utilizada en la infraestructura Cloud Temple está basada en [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). Le permite beneficiarse de __redes de nivel 2 en continuidad entre sus zonas de disponibilidad dentro de una región__.
También es posible compartir redes entre sus tenants y terminarlas en zona de hosting.
Básicamente, puede imaginar una red Cloud Temple como un vlan 802.1q disponible en cualquier punto de su tenant.

TODO

El pedido de una nueva red y las decisiones de compartir entre sus tenants, se realizan en el menú __'Red'__ de la barra verde a la izquierda de la pantalla. Las redes serán primero creadas, luego se generará un pedido distinto para propagarlas. Puede seguir el avance de los pedidos en curso accediendo a la pestaña "Pedido" en el menú, o haciendo clic en las etiquetas de información que le redirigen a los pedidos activos o en curso de tratamiento.

<img src={shivaOrdersNet_002} />

También es posible propagar redes ya existentes o separar las dos etapas, comenzando por la creación de la red, luego procediendo a la propagación posteriormente según sus necesidades. La opción de propagación se encuentra en las opciones de la red seleccionada:

<img src={shivaOrdersNet_003} />

Haga clic en la opción "Propagar" para una red ya existente, luego seleccione el objetivo de propagación deseado. Esta etapa le permite definir la ubicación o los recursos sobre los cuales la red debe ser propagada:

<img src={shivaOrdersNet_004} />

### Desactivación de una red

Una red también puede ser desactivada si es necesario. Esta opción le permite pausar temporalmente el acceso o la utilización de la red sin eliminarla definitivamente, ofreciendo así una flexibilidad en la gestión de su infraestructura en función de sus necesidades.

La opción de desactivación se encuentra en las opciones de la red seleccionada.

## Añadir hipervisores adicionales a un clúster de cálculo

La lógica de funcionamiento de los clústeres de cálculo es TODO

La adición de hipervisores a un clúster de cálculo se hace en el menú __'IaaS'__ en la barra verde a la izquierda de la pantalla.
En el siguiente ejemplo, vamos a añadir cálculo en un clúster de hipervisor utilizando la tecnología VMware.

Vaya al submenú __'Infraestructura'__ y luego __'VMWare'__. Elija entonces la stack vmware y la zona de disponibilidad y el clúster de cálculo.
En este ejemplo, se trata del __'clu001-ucs12'__. Haga clic en el botón __'Añadir un host'__ que se encuentra en la tabla con la lista de hosts, en la parte superior derecha.

__Nota__:

- *__La configuración de un clúster debe ser homogénea__. Así, no está permitido mezclar los tipos de hipervisor dentro de un clúster. Todas las hojas deben ser del mismo tipo.*
- *Los derechos __'order'__ así como __'compute'__ son necesarios para la cuenta para llevar a cabo esta acción.*

<img src={shivaOrdersIaasCpoolEsx} />

## Añadir recursos de memoria adicionales a un clúster de cálculo

La lógica de asignación de la memoria en los clústeres de cálculo es TODO

Para añadir memoria viva en un clúster, basta con ir a la configuración del clúster (como para la adición de un host de cálculo tal como se vio anteriormente) y hacer clic en __'Modificar la memoria'__.

<img src={shivaOrdersIaasCpoolMemory} />

__Nota__:

- *__Las máquinas se entregan con la totalidad de la memoria física__. El desbloqueo del recurso de memoria es solo una activación de software a nivel de un clúster.*
- *No es posible modificar la cantidad de memoria física de un tipo de hoja. Tener en cuenta la capacidad máxima de una hoja durante la creación de un clúster.*
- *Los derechos __'order'__ así como __'compute'__ son necesarios para la cuenta para llevar a cabo esta acción.*
