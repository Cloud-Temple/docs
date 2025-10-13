---
title: Implementar recursos
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

El seguimiento del despliegue de nuevos recursos se realiza en el menú __'Pedidos'__, accesible desde el banner verde en el lado izquierdo de la pantalla.

Permite visualizar los recursos Cloud pedidos, los que están en proceso de despliegue y los posibles errores dentro de un [Tenant](iam/concepts.md#tenant) de su [Organización](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Nota: En este momento, aún no es posible tener una vista global a nivel de organización de todos los recursos desplegados en los diferentes tenants.__ Este tema se abordará en 2026 con la implementación de un portal dedicado al patrocinador (firmante) y a la gestión de su organización.*

El despliegue de recursos o su eliminación se realiza en cada producto a través de los menús __'IaaS'__ y __'Red'__ en el lado izquierdo de la pantalla en el banner verde.

También es posible ver las entregas directamente en el nivel de notificaciones de la consola Cloud Temple:

<img src={shivaOrderNotif_001} />

Desde la página de pedidos, puede ver el progreso de una entrega y posiblemente interactuar con el equipo añadiendo comentarios o aclaraciones:

<img src={shivaOrderStatus} />

__Nota__: __No es posible lanzar varios pedidos del mismo tipo de recurso simultáneamente. Deberá esperar a que el pedido actual sea procesado y finalizado antes de poder realizar uno nuevo. Esto garantiza una gestión eficiente y ordenada de los recursos dentro de su entorno.__

## Pedir una nueva zona de disponibilidad

Es posible añadir una nueva zona de disponibilidad accediendo al menú "__Pedido__". Esta opción le permite ampliar sus recursos y mejorar la disponibilidad y resistencia de sus aplicaciones en solo unos clics:

<img src={shivaOrderAz_01} />

Comience seleccionando la ubicación deseada, eligiendo primero la región geográfica y luego la zona de disponibilidad (AZ) correspondiente entre las disponibles. Este paso le permite adaptar el despliegue de sus recursos según la ubicación y los requisitos de su infraestructura:

<img src={shivaOrderAz_02} />

A continuación, proceda a seleccionar el tipo de clúster de hipervisor deseado, eligiendo el que mejor satisfaga las necesidades de rendimiento y gestión de su infraestructura en la nube:

<img src={shivaOrderAz_03} />

Luego seleccione el número de hipervisores y la cantidad de memoria deseada para adaptar los recursos a la carga de trabajo y los requisitos específicos de su entorno en la nube:

<img src={shivaOrderAz_04} />

A continuación, seleccione el número de datastores a aprovisionar en el clúster, así como sus tipos. Es importante tener en cuenta que el número máximo de datastores permitidos es de 10, con un mínimo de 2 datastores requeridos. Cada tipo de datastore diferente resultará en la creación de un datastoreCluster adicional. Por ejemplo, si elige 2 datastores de tipo "live" y 1 datastore de tipo "mass", esto resultará en la formación de 2 datastoreClusters distintos:

<img src={shivaOrderAz_05} />

Defina el tamaño de almacenamiento necesario para la copia de seguridad, asegurándose de planificar una capacidad equivalente a la de su almacenamiento de producción. Tenga en cuenta una tasa de compresión promedio de 2 para optimizar el espacio de copia de seguridad y garantizar una protección efectiva de sus datos:

<img src={shivaOrderAz_06} />

Seleccione las redes a propagar según sus necesidades. También tiene la opción de activar "Acceso a Internet" si es necesario, definiendo el número de direcciones IP deseadas, con una elección entre 1 y un máximo de 8:

<img src={shivaOrderAz_07} />

Luego obtendrá un resumen de las opciones seleccionadas antes de validar su pedido.

<img src={shivaOrderAz_08} />

## Pedir recursos de almacenamiento adicionales

La lógica de asignación de almacenamiento en modo de bloque en los clústeres de cómputo se basa en la tecnología __IBM SVC (San Volume Controller)__ e __IBM FlashSystem__. El almacenamiento está organizado en __LUNs de 500 GiB mínimo__, presentadas según la tecnología utilizada:
- Para __VMware__: como __datastores__ agrupados en __clústeres SDRS (Storage Distributed Resource Scheduler)__
- Para __Bare Metal__: como __volúmenes__
- Para __IaaS Open Source__: como __Storage Repository (SR)__

Cada datastore hereda una __clase de rendimiento__ definida en IOPS/TB (de 500 a 15,000 IOPS/TB para FLASH, o sin garantía para MASS STORAGE). La limitación de IOPS se aplica __a nivel del datastore__ (no por VM), lo que significa que todas las máquinas virtuales que comparten el mismo datastore comparten la cuota de IOPS asignada.

__Puntos clave a recordar__:

- __Tamaño mínimo__: 500 GiB por LUN
- __Rendimiento__: Proporcional al volumen asignado (por ejemplo, 2 TB en clase Standard = 3,000 IOPS máx.)
- __Organización__: Los datastores del mismo tipo se agrupan automáticamente en clústeres de datastores
- __Disponibilidad__: 99.99% medido mensualmente, incluidas las ventanas de mantenimiento
- __Espacio necesario__: Siempre planifique un 10% de espacio libre para instantáneas de copia de seguridad y el equivalente de la suma de las RAMs de las VMs para archivos .VSWP

### Implementar un nuevo clúster de cómputo

Solicite un clúster de hipervisor seleccionando opciones adaptadas a sus necesidades de virtualización. Defina características clave como el número de hipervisores, el tipo de clúster, la cantidad de memoria y los recursos de cómputo requeridos:

<img src={shivaOrderClucalc_01} />

Seleccione la zona de disponibilidad:

<img src={shivaOrderClucalc_02} />

Elija el tipo de blade de cómputo:

<img src={shivaOrderClucalc_03} />

Luego tiene la opción de seleccionar redes existentes y propagarlas, o crear nuevas directamente en este paso, según las necesidades de su infraestructura. Tenga en cuenta que el número total de redes configurables está limitado a un máximo de 20:

<img src={shivaOrderClucalc_04} />

Luego obtendrá un resumen de las opciones seleccionadas antes de validar su pedido y podrá ver su pedido en curso:

<img src={shivaOrderClucalc_05} />

### Implementar un nuevo clúster de almacenamiento

En el menú "__pedido__", solicite un __nuevo clúster de almacenamiento__ para su entorno seleccionando opciones que coincidan con sus necesidades en términos de capacidad, rendimiento y redundancia. Seleccione la ubicación:

<img src={shivaOrderClusto_01} />

Defina el número de datastores a aprovisionar en el clúster y su tipo, respetando los siguientes límites: se pueden configurar un mínimo de 2 datastores y un máximo de 10. Elija los tipos de datastores que mejor satisfagan sus necesidades en términos de rendimiento, capacidad y uso para optimizar el almacenamiento en su entorno:

<img src={shivaOrderClusto_02} />

Seleccione el tipo de almacenamiento deseado entre las diversas opciones disponibles:

<img src={shivaOrderClusto_03} />

Luego accederá a un resumen completo de las opciones que ha seleccionado, lo que le permitirá verificar todos los parámetros antes de finalizar su pedido:

<img src={shivaOrderClusto_04} />

### Implementar un nuevo datastore dentro de un clúster SDRS de VMware

En este ejemplo, agregaremos almacenamiento en bloque para una infraestructura VMware.
Para agregar un datastore adicional a su clúster de almacenamiento SDRS, vaya al submenú __'Infraestructura'__ y luego a __'VMware'__.
Luego elija el stack de VMware y la zona de disponibilidad. Luego vaya al submenú __'Almacenamiento'__.

Elija el clúster SDRS que corresponda a las características de rendimiento que desea y haga clic en el botón __'Agregar un datastore'__ que se encuentra en la tabla con la lista de datastores.

<img src={shivaOrdersIaasSpoolDs} />

__nota__:

- *El tamaño mínimo de LUN que se puede activar en un clúster es de __500 GiB__.*
- *El rendimiento de un datastore varía de 500 iops/TiB en promedio a 15,000 iops/TiB en promedio. __Esta es una limitación de software realizada a nivel de los controladores de almacenamiento__.*
- *La contabilidad del volumen de disco consumido por su organización es la suma de todas las LUNs en todas las AZs utilizadas*.
- *Los derechos __'order'__ así como __'compute'__ son necesarios para que la cuenta realice esta acción.*

### Pedir nuevas redes

La tecnología de red utilizada en la infraestructura Cloud Temple se basa en [VPLS](https://es.wikipedia.org/wiki/Virtual_Private_LAN_Service). Le permite beneficiarse de __redes de nivel 2 en continuidad entre sus zonas de disponibilidad dentro de una región__.
También es posible compartir redes entre sus tenants y terminarlas en la zona de hosting.
Básicamente, puede imaginar una red Cloud Temple como una VLAN 802.1q disponible en cualquier lugar de su tenant.

Las redes en la plataforma Cloud Temple son __Nivel 2 (VLANs)__ basadas en la tecnología __VPLS (Virtual Private LAN Service)__. Esta tecnología le permite beneficiarse de __continuidad de red entre sus zonas de disponibilidad__ dentro de una región, con rendimiento garantizado:

- __Latencia intra-AZ__: < 3 ms
- __Latencia inter-AZ__: < 5 ms

__Flexibilidad de red__:

- Una red puede ser __compartida entre varios clústeres__ dentro de la misma zona de disponibilidad
- Una red puede ser __propagada entre varias zonas de disponibilidad__ dentro de la misma región
- Una red puede ser __compartida entre diferentes tenants__ de su organización
- Una red puede ser __terminada en la zona de hosting__ para su equipo físico
- __Límite__: Máximo de 20 redes por pedido. Puede realizar varios pedidos sucesivos para ampliar este número según sus necesidades

El pedido de una nueva red y las decisiones de compartir entre sus tenants se realizan en el menú __'Red'__ en el banner verde en el lado izquierdo de la pantalla. Las redes se crearán primero, luego se generará un pedido separado para propagarlas. Puede rastrear el progreso de los pedidos en curso accediendo a la pestaña "Pedido" en el menú, o haciendo clic en las etiquetas de información que lo redirigen a pedidos activos o en proceso.

<img src={shivaOrdersNet_002} />

También es posible propagar redes ya existentes o separar los dos pasos, comenzando con la creación de la red y luego procediendo a la propagación posteriormente según sus necesidades. La opción de propagación se encuentra en las opciones de la red seleccionada:

<img src={shivaOrdersNet_003} />

Haga clic en la opción "Propagar" para una red ya existente, luego seleccione el destino de propagación deseado. Este paso le permite definir la ubicación o los recursos donde se debe propagar la red:

<img src={shivaOrdersNet_004} />

### Desactivación de una red

Una red también puede ser desactivada si es necesario. Esta opción le permite pausar temporalmente el acceso o el uso de la red sin eliminarla permanentemente, proporcionando flexibilidad en la gestión de su infraestructura según sus necesidades.

La opción de desactivación se encuentra en las opciones de la red seleccionada.

## Agregar hipervisores adicionales a un clúster de cómputo

Un __clúster de cómputo__ es una agrupación de hipervisores que deben seguir estas reglas:

### Para clústeres VMware ESXi

__Reglas de homogeneidad__:

- Todos los hosts en un clúster deben ser del __mismo tipo de blade__ (ECO, STANDARD, ADVANCE, PERFORMANCE, etc.)
- Todos los hosts pertenecen __al mismo tenant y a la misma zona de disponibilidad__
- __Límite__: Máximo de 32 hipervisores por clúster

__Asignación de memoria__:

- Cada blade se entrega con __toda la memoria física activada__ desde el inicio
- __Ejemplo__: Un clúster de 3 blades STANDARD v3 (384 GB físicos cada una) = 3 × 384 GB = 1,152 GB disponibles
- __Recomendación__: No exceda el 85% de consumo de memoria por blade para evitar el mecanismo de compresión de VMware y el ballooning

__Alta disponibilidad__:

- __Mínimo recomendado__: 2 hipervisores por clúster para beneficiarse del SLA del 99.99%
- Active la función __VMware HA__ (High Availability) para el reinicio automático de VMs en caso de falla de un host

La adición de hipervisores a un clúster de cómputo se realiza en el menú __'IaaS'__ en el banner verde en el lado izquierdo de la pantalla.
En el siguiente ejemplo, agregaremos cómputo a un clúster de hipervisor que utiliza tecnología VMware.

Vaya al submenú __'Infraestructura'__ y luego a __'VMware'__. Luego elija el stack de VMware, la zona de disponibilidad y el clúster de cómputo.
En este ejemplo, es __'clu001-ucs12'__. Haga clic en el botón __'Agregar un host'__ que se encuentra en la tabla con la lista de hosts, en la parte superior derecha.

__nota__:

- *__La configuración de un clúster debe ser homogénea__. Por lo tanto, no está permitido mezclar tipos de hipervisor dentro de un clúster. Todas las blades deben ser del mismo tipo.*
- *Los derechos __'order'__ así como __'compute'__ son necesarios para que la cuenta realice esta acción.*

<img src={shivaOrdersIaasCpoolEsx} />

### Para clústeres IaaS Open Source

Los clústeres IaaS Open Source siguen reglas similares en términos de homogeneidad y alta disponibilidad. La gestión de recursos de cómputo también se realiza a través del menú __'IaaS'__ con los mismos requisitos previos en términos de derechos de acceso.

## Agregar recursos de memoria adicionales a un clúster de cómputo

La asignación de memoria en los clústeres de cómputo funciona de la siguiente manera:

__Principio de asignación de memoria__:

- Todas las blades de cómputo se entregan con el __máximo de memoria física__ instalada
- Se aplica una __limitación de software__ a nivel del clúster VMware para corresponder a la RAM facturada
- Cada blade tiene __toda la memoria física activada__ dentro del clúster

__Dimensionamiento del clúster__:

- __Mínimo__: número de hosts × 128 GB de memoria
- __Máximo__: número de hosts × cantidad de memoria física de la blade

__Ejemplo__: Para un clúster de tres hosts de tipo `STANDARD v3` (384 GB físicos por blade)

- Memoria total disponible: 3 × 384 GB = 1,152 GB

__Recomendaciones importantes__:

- No exceda el __85% de consumo promedio de memoria por blade__ para evitar el ballooning y la compresión de VMware
- Planifique espacio en disco para archivos de intercambio (.VSWP) creados al iniciar cada VM (tamaño = memoria de la VM)

Para agregar RAM a un clúster, simplemente vaya a la configuración del clúster (como para agregar un host de cómputo como se vio anteriormente) y haga clic en __'Modificar memoria'__.

<img src={shivaOrdersIaasCpoolMemory} />

__nota__:

- *__Las máquinas se entregan con toda la memoria física__. La liberación del recurso de memoria es solo una activación de software a nivel del clúster.*
- *No es posible modificar la cantidad de memoria física de un tipo de blade. Tenga en cuenta la capacidad máxima de una blade al crear un clúster.*
- *Los derechos __'order'__ así como __'compute'__ son necesarios para que la cuenta realice esta acción.*
