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

El seguimiento del despliegue de nuevas recursos se realiza en el menú __'Pedidos'__ accesible en la barra verde a la izquierda de la pantalla.

Permite visualizar los recursos Cloud ordenados, en proceso de despliegue y posibles errores dentro de un [Tenant](iam/concepts.md#tenant) de su [Organización](iam/concepts.md#organizaciones).

<img src={shivaOrdersList} />

*__Nota: En este momento, la vista global a nivel de organización del conjunto de recursos desplegados en diferentes tenants no es posible aún.__ Este tema se abordará en 2024 con la implementación de un portal dedicado al comitente (en el sentido de signatario) y al control de su organización.*

El despliegue de recursos o su eliminación se realiza en cada uno de los productos en los menús __'IaaS'__ y __'Red'__ a la izquierda de la pantalla en la barra verde.

También es posible ver directamente las entregas en las notificaciones de la consola Cloud Temple:

<img src={shivaOrderNotif_001} />

Desde la página de pedidos, puede ver el estado de avance de una entrega y, en caso necesario, dialogar con el equipo aportando comentarios o precisiones:

<img src={shivaOrderStatus} />

__Nota__: __No es posible lanzar varios pedidos del mismo tipo de recurso simultáneamente. Deberá esperar a que el pedido en curso sea procesado y finalizado antes de poder realizar uno nuevo. Esto garantiza una gestión eficiente y ordenada de los recursos dentro de su entorno.__

## Ordenar una nueva zona de disponibilidad

Es posible agregar una nueva zona de disponibilidad accediendo al menú "__Pedido__". Esta opción le permite extender sus recursos y mejorar la disponibilidad y resiliencia de sus aplicaciones en unos pocos clics:

<img src={shivaOrderAz_01} />

Comienza seleccionando la ubicación deseada, eligiendo primero la región geográfica y luego la zona de disponibilidad (AZ) correspondiente entre las disponibles. Esta etapa permite adaptar el despliegue de sus recursos según la ubicación y los requisitos de su infraestructura:

<img src={shivaOrderAz_02} />

A continuación, proceda a seleccionar el tipo de clúster de hipervisor deseado, eligiendo aquel que mejor responda a las necesidades de rendimiento y gestión de su infraestructura en la nube:

<img src={shivaOrderAz_03} />

Seleccione luego la cantidad de hipervisores y la cantidad de memoria deseada, para adaptar los recursos a la carga de trabajo y los requisitos específicos de su entorno en la nube:

<img src={shivaOrderAz_04} />

Seleccione luego la cantidad de datastores a provisionar en el clúster y sus tipos. Es importante tener en cuenta que el número máximo de datastores permitido es de 10, con un mínimo de 2 datastores requeridos. Cada tipo de datastore diferente generará la creación de un datastoreCluster adicional. Por ejemplo, si elige 2 datastores de tipo "live" y 1 datastore de tipo "mass", esto dará lugar a la formación de 2 datastoreClusters distintos:

<img src={shivaOrderAz_05} />

Defina el tamaño de almacenamiento necesario para la copia de seguridad, teniendo en cuenta que debe prever una capacidad equivalente a la de su almacenamiento de producción. Tenga en cuenta una tasa de compresión promedio de 2 para optimizar el espacio de copia de seguridad y garantizar una protección eficaz de sus datos:

<img src={shivaOrderAz_06} />

Seleccione las redes a propagar según sus necesidades. También tiene la posibilidad de activar la opción "Acceso a Internet" si es necesario, definiendo la cantidad de direcciones IP deseadas, con una elección comprendida entre 1 y un máximo de 8:

<img src={shivaOrderAz_07} />

Obtendrá entonces un resumen de las opciones seleccionadas antes de validar su pedido.

<img src={shivaOrderAz_08} />

## Ordenar recursos de almacenamiento adicionales

La lógica de asignación del almacenamiento en modo bloque en los clústeres de cálculo está TODO

### Desplegar un nuevo clúster de cálculo

Proceda a ordenar un clúster de hipervisor seleccionando las opciones adecuadas a sus necesidades en materia de virtualización. Defina las características clave como la cantidad de hipervisores, el tipo de clúster, la cantidad de memoria, así como los recursos de cálculo requeridos:

<img src={shivaOrderClucalc_01} />

Seleccione la zona de disponibilidad:

<img src={shivaOrderClucalc_02} />

Elija el tipo de unidad de cálculo:

<img src={shivaOrderClucalc_03} />

Tiene la posibilidad de seleccionar redes ya existentes y propagarlas, o crear nuevas directamente en esta etapa, según las necesidades de su infraestructura. Tenga en cuenta que el número total de redes configurables está limitado a un máximo de 20:

<img src={shivaOrderClucalc_04} />

Obtendrá entonces un resumen de las opciones seleccionadas antes de validar su pedido y podrá visualizar su pedido en curso:

<img src={shivaOrderClucalc_05} />

### Desplegar un nuevo clúster de almacenamiento

En el menú "__pedido__", proceda a ordenar un __nuevo clúster de almacenamiento__ para su entorno seleccionando las opciones que correspondan a sus necesidades en términos de capacidad, rendimiento y redundancia. Seleccione la ubicación:

<img src={shivaOrderClusto_01} />

Defina el número de datastores a provisionar en el clúster así como su tipo, respetando los siguientes límites: un mínimo de 2 datastores y un máximo de 10 pueden configurarse. Elija los tipos de datastores que mejor respondan a sus necesidades en términos de rendimiento, capacidad y uso, para optimizar el almacenamiento de su entorno:

<img src={shivaOrderClusto_02} />

Seleccione el tipo de almacenamiento deseado entre las diferentes opciones disponibles:

<img src={shivaOrderClusto_03} />

Luego accede a un resumen completo de las opciones que ha seleccionado, permitiéndole verificar todos los parámetros antes de validar definitivamente su pedido:

<img src={shivaOrderClusto_04} />

### Desplegar un nuevo datastore dentro de un clúster SDRS VMware

En este ejemplo, agregaremos almacenamiento en modo bloque para una infraestructura VMware.
Para agregar un datastore adicional en su clúster de almacenamiento SDRS, vaya al submenú __'Infraestructura'__ y luego __'VMWare'__.
Elija entonces la pila vmware y la zona de disponibilidad. Luego vaya al submenú __'Almacenamiento'__.

Elija el clúster SDRS correspondiente a las características de rendimiento que desea y haga clic en el botón __'Agregar un datastore'__ que se encuentra en la tabla con la lista de datastores.

<img src={shivaOrdersIaasSpoolDs} />

__nota__ :

- *El tamaño de la LUN más pequeña activable en un clúster es de __500 GiB__.*
- *El rendimiento de un datastore va de 500 iops/Tio en promedio hasta 15000 iops/Tio en promedio. __Este es un límite de software realizado a nivel de controladores de almacenamiento__.*
- *La contabilidad del volumen de disco consumido por su organización es la suma de todas las LUNs en todos los AZs utilizados.*
- *Los permisos __'order'__ y __'compute'__ son necesarios para la cuenta para realizar esta acción.*

### Ordenar nuevos redes

La tecnología de red utilizada en la infraestructura Cloud Temple se basa en [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). Le permite beneficiarse de __redes de nivel 2 continuas entre sus zonas de disponibilidad dentro de una región__.
También es posible compartir redes entre sus tenants y terminarlas en zona de hosting.
Básicamente, puede imaginar una red Cloud Temple como un vlan 802.1q disponible en cualquier punto de su tenant.

TODO
La ordenación de una nueva red y las decisiones de compartición entre sus inquilinos se realizan en el menú __'Red'__ de la barra verde a la izquierda de la pantalla. Las redes se crearán primero, y luego se generará una orden separada para propagarlas. Puede seguir el avance de las órdenes en curso accediendo a la pestaña "Orden" en el menú, o haciendo clic en las etiquetas de información que le redirigirán a las órdenes activas o en proceso de tratamiento.

<img src={shivaOrdersNet_002} />

También es posible propagar redes ya existentes o separar los dos pasos, comenzando con la creación de la red y luego procediendo a la propagación posteriormente según sus necesidades. La opción de propagación se encuentra en las opciones de la red seleccionada:

<img src={shivaOrdersNet_003} />

Haga clic en la opción "Propagar" para una red ya existente, y luego seleccione la ubicación de propagación deseada. Esta etapa le permite definir la ubicación o los recursos en los que la red debe ser propagada:

<img src={shivaOrdersNet_004} />

### Desactivación de una red

Una red también puede ser desactivada si es necesario. Esta opción le permite pausar temporalmente el acceso o el uso de la red sin eliminarla definitivamente, ofreciendo así flexibilidad en la gestión de su infraestructura según sus necesidades.

La opción de desactivación se encuentra en las opciones de la red seleccionada. '

## Agregar hipervisores adicionales a un clúster de cálculo

La lógica de funcionamiento de los clústeres de cálculo es TODO

La adición de hipervisores a un clúster de cálculo se realiza en el menú __'IaaS'__ en la barra verde a la izquierda de la pantalla.
En el siguiente ejemplo, agregaremos cálculo a un clúster de hipervisor utilizando la tecnología VMware.

Vaya al submenú __'Infraestructura'__ y luego __'VMWare'__. A continuación, seleccione la pila vmware y la zona de disponibilidad y el clúster de cálculo.
En este ejemplo, se trata del __'clu001-ucs12'__. Haga clic en el botón __'Agregar un host'__ que se encuentra en la tabla con la lista de hosts, en la parte superior derecha.

__nota__ :

- *__La configuración de un clúster debe ser homogénea__. Por lo tanto, no se permite mezclar los tipos de hipervisor dentro de un clúster. Todas las láminas deben ser del mismo tipo.*
- *Los permisos __'order'__ y __'compute'__ son necesarios para la cuenta para realizar esta acción.*

<img src={shivaOrdersIaasCpoolEsx} />

## Agregar recursos de memoria adicionales a un clúster de cálculo

La lógica de asignación de memoria en los clústeres de cálculo es TODO

Para agregar memoria RAM a un clúster, basta con acceder a la configuración del clúster (como para agregar un host de cálculo, tal como se vio anteriormente) y hacer clic en __'Modificar la memoria'__.

<img src={shivaOrdersIaasCpoolMemory} />

__nota__ :

- *__Las máquinas se entregan con toda la memoria física__. La activación de los recursos de memoria es solo una activación software a nivel de clúster.*
- *No es posible modificar la cantidad de memoria física de un tipo de lámina. Es importante tener en cuenta la capacidad máxima de una lámina al crear un clúster.*
- *Los permisos __'order'__ y __'compute'__ son necesarios para la cuenta para realizar esta acción.*