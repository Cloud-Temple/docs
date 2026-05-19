---
title: Desplegar recursos
---
import shivaOrdersList from '@site/docs/console/images/shiva_orders_list.png'
import shivaOrderNotif_001 from '@site/docs/console/images/shiva_order_notif_001.png'
import shivaOrderStatus from '@site/docs/console/images/shiva_order_status.png'
import shivaOrderAz_01 from '@site/docs/console/images/shiva_order_az_01.png'
import shivaOrderAz_02 from '@site/docs/console/images/shiva_order_az_02.png'
import shivaOrderAz_03 from '@site/docs/console/images/shiva_order_az_03.png'
import shivaOrderAz_04 from '@site/docs/console/images/shiva_order_az_04.png'
import shivaOrderAz_05 from '@site/docs/console/images/shiva_order_az_05.png'
import shivaOrderAz_06 from '@site/docs/console/images/shiva_order_az_06.png'
import shivaOrderAz_07 from '@site/docs/console/images/shiva_order_az_07.png'
import shivaOrderAz_08 from '@site/docs/console/images/shiva_order_az_08.png'
import shivaOrderClucalc_01 from '@site/docs/console/images/shiva_order_clucalc_01.png'
import shivaOrderClucalc_02 from '@site/docs/console/images/shiva_order_clucalc_02.png'
import shivaOrderClucalc_03 from '@site/docs/console/images/shiva_order_clucalc_03.png'
import shivaOrderClucalc_04 from '@site/docs/console/images/shiva_order_clucalc_04.png'
import shivaOrderClucalc_05 from '@site/docs/console/images/shiva_order_clucalc_05.png'
import shivaOrderClusto_01 from '@site/docs/console/images/shiva_order_clusto_01.png'
import shivaOrderClusto_02 from '@site/docs/console/images/shiva_order_clusto_02.png'
import shivaOrderClusto_03 from '@site/docs/console/images/shiva_order_clusto_03.png'
import shivaOrderClusto_04 from '@site/docs/console/images/shiva_order_clusto_04.png'
import shivaOrdersIaasSpoolDs from '@site/docs/console/images/shiva_orders_iaas_spool_ds.png'
import shivaOrdersNet_002 from '@site/docs/console/images/shiva_orders_net_002.png'
import shivaOrdersNet_003 from '@site/docs/console/images/shiva_orders_net_003.png'
import shivaOrdersNet_004 from '@site/docs/console/images/shiva_orders_net_004.png'
import shivaOrdersIaasCpoolEsx from '@site/docs/console/images/shiva_orders_iaas_cpool_esx.png'
import shivaOrdersIaasCpoolMemory from '@site/docs/console/images/shiva_orders_iaas_cpool_memory.png'

## Concepto

El seguimiento del despliegue de nuevos recursos se realiza en el menú __'Pedidos'__ accesible en la barra verde a la izquierda de la pantalla.

Permite visualizar los recursos Cloud pedidos, en proceso de despliegue y los posibles errores dentro de un [Tenant](iam/concepts.md#tenant) de su [Organización](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Nota : En este momento, aún no es posible la vista global a nivel de una organización de todos los recursos desplegados en los distintos tenants.__ Este tema se tratará posteriormente con la implementación de un portal dedicado al solicitante (en el sentido de firmante) y a la gestión de su organización.*

El despliegue de los recursos o su eliminación se realizan en cada uno de los productos en los menús __'IaaS'__ y __'Red'__ a la izquierda de la pantalla en la barra verde.

También es posible ver directamente las entregas a nivel de las notificaciones de la consola Cloud Temple :

<img src={shivaOrderNotif_001} />

Desde la página de pedidos, puede ver el estado de avance de una entrega y, eventualmente, dialogar con el equipo aportando comentarios o precisiones :

<img src={shivaOrderStatus} />

__Nota__ : __No es posible iniciar varios pedidos del mismo tipo de recurso simultáneamente. Por lo tanto, deberá esperar a que el pedido en curso sea procesado y finalizado antes de poder realizar uno nuevo. Esto garantiza una gestión eficiente y ordenada de los recursos dentro de su entorno.__

## Solicitar una nueva zona de disponibilidad

Es posible agregar una nueva zona de disponibilidad accediendo al menú "__Pedido__". Esta opción le permite ampliar sus recursos y mejorar la disponibilidad y la resiliencia de sus aplicaciones con solo unos pocos clics:

<img src={shivaOrderAz_01} />

Comience por seleccionar la ubicación deseada, eligiendo primero la región geográfica y luego la zona de disponibilidad (AZ) correspondiente entre las disponibles. Este paso permite adaptar el despliegue de sus recursos según la ubicación y los requisitos de su infraestructura:

<img src={shivaOrderAz_02} />

A continuación, proceda a seleccionar el tipo de clúster de hipervisores deseado, eligiendo el que mejor se adapte a las necesidades de rendimiento y gestión de su infraestructura en la nube:

<img src={shivaOrderAz_03} />

Seleccione a continuación el número de hipervisores, así como la cantidad de memoria deseada, para adaptar los recursos a la carga de trabajo y a los requisitos específicos de su entorno en la nube:

<img src={shivaOrderAz_04} />

Seleccione a continuación el número de datastores a aprovisionar en el clúster, así como sus tipos. Es importante tener en cuenta que el número máximo de datastores permitido es de 10, con un mínimo de 2 datastores requeridos. Cada tipo de datastore diferente dará lugar a la creación de un datastoreCluster adicional. Por ejemplo, si elige 2 datastores de tipo "live" y 1 datastore de tipo "mass", esto dará lugar a la formación de 2 datastoreClusters distintos:

<img src={shivaOrderAz_05} />

Defina el tamaño de almacenamiento necesario para la copia de seguridad, asegurándose de prever una capacidad equivalente a la de su almacenamiento de producción. Tenga en cuenta una tasa de compresión media de 2 para optimizar el espacio de copia de seguridad y garantizar una protección eficaz de sus datos:

<img src={shivaOrderAz_06} />

Seleccione las redes a propagar según sus necesidades. También tiene la posibilidad de activar la opción "Acceso a internet" si es necesario, definiendo el número de direcciones IP deseadas, con una opción comprendida entre 1 y un máximo de 8:

<img src={shivaOrderAz_07} />

A continuación, obtendrá un resumen de las opciones seleccionadas antes de validar su pedido.

<img src={shivaOrderAz_08} />

## Solicitar recurso de almacenamiento adicional

La lógica de asignación de almacenamiento en modo bloque en los clústeres de cálculo se basa en la tecnología __IBM SVC (San Volume Controller)__ y __IBM FlashSystem__. El almacenamiento se organiza en __LUN de 500 GiB como mínimo__, presentadas según la tecnología utilizada :

- Para __VMware__ : en forma de __datastores__ agrupados en __clústeres SDRS (Storage Distributed Resource Scheduler)__
- Para __Bare Metal__ : en forma de __volúmenes__
- Para __Open IaaS__ : en forma de __Storage Repository (SR)__

Cada datastore hereda una __clase de rendimiento__ definida en IOPS/TiB (de 500 a 15000 IOPS/TiB pour le FLASH, ou sans garantie pour le MASS STORAGE). La limitación de IOPS se aplica __a nivel del datastore__ (y no por VM), lo que significa que todas las máquinas virtuales que comparten el mismo datastore comparten la cuota de IOPS asignada.

__Puntos clave a tener en cuenta__ :

- __Tamaño mínimo__ : 500 GiB por LUN
- __Rendimiento__ : Proporcional al volumen asignado, __dentro del límite de un techo físico absoluto por LUN__ (ex: 2 To en classe Standard = 3000 IOPS, mais une LUN de 10 To plafonnera à 30 000 IOPS maximum). Este techo varía según la clase (10 000 IOPS / 512 Mo/s pour la classe Essentiel, et 30 000 IOPS / 1024 Mo/s pour les classes supérieures).
- __Organización__ : Los datastores del mismo tipo se agrupan automáticamente en clústeres de datastores
- __Disponibilidad__ : 99,99 % medido mensualmente, incluidos los períodos de mantenimiento
- __Espacio necesario__ : Prever siempre un 10 % de espacio libre para las instantáneas de copia de seguridad y el equivalente a la suma de la RAM de las VM para los archivos .VSWP

### Desplegar un nuevo clúster de cálculo

Proceda al pedido de un clúster de hipervisores seleccionando las opciones adecuadas a sus necesidades de virtualización. Defina las características clave como el número de hipervisores, el tipo de clúster, la cantidad de memoria, así como los recursos de cálculo necesarios:

<img src={shivaOrderClucalc_01} />

Seleccione la zona de disponibilidad:

<img src={shivaOrderClucalc_02} />

Elija el tipo de lámina de cálculo:

<img src={shivaOrderClucalc_03} />

A continuación, tiene la opción de seleccionar redes ya existentes y propagarlas, o bien crear nuevas directamente en esta etapa, según las necesidades de su infraestructura. Tenga en cuenta que el número total de redes configurables está limitado a un máximo de 20:

<img src={shivaOrderClucalc_04} />

A continuación, obtendrá un resumen de las opciones seleccionadas antes de validar su pedido, y podrá visualizar su pedido en curso:

<img src={shivaOrderClucalc_05} />

### Desplegar un nuevo clúster de almacenamiento

En el menú "__pedido__", proceda a solicitar un __nuevo clúster de almacenamiento__ para su entorno seleccionando las opciones que se ajusten a sus necesidades de capacidad, rendimiento y redundancia. Seleccione la ubicación:

<img src={shivaOrderClusto_01} />

Defina la cantidad de datastores que se aprovisionarán en el clúster, así como su tipo, respetando los siguientes límites: se pueden configurar un mínimo de 2 datastores y un máximo de 10. Elija los tipos de datastore que mejor se adapten a sus necesidades de rendimiento, capacidad y uso, con el fin de optimizar el almacenamiento de su entorno:

<img src={shivaOrderClusto_02} />

Seleccione el tipo de almacenamiento deseado entre las diferentes opciones disponibles:

<img src={shivaOrderClusto_03} />

A continuación, accederá a un resumen completo de las opciones seleccionadas, lo que le permitirá verificar todos los parámetros antes de validar definitivamente su pedido:

<img src={shivaOrderClusto_04} />

### Desplegar un nuevo datastore en un clúster SDRS VMware

En este ejemplo, añadiremos almacenamiento en modo bloque para una infraestructura VMware.
Para añadir un datastore adicional en su clúster de almacenamiento SDRS, vaya al submenú __'Infraestructura'__ y luego a __'VMWare'__.
Seleccione entonces la stack vmware y la zona de disponibilidad. A continuación, vaya al submenú __'Almacenamiento'__.

Seleccione el clúster SDRS que corresponda a las características de rendimiento deseadas y haga clic en el botón __'Añadir datastore'__ que se encuentra en la tabla
con la lista de datastores.

<img src={shivaOrdersIaasSpoolDs} />

__nota__ :

- *El tamaño de la LUN más pequeña activable en un clúster es de __500 GiB__.*
- *El rendimiento de un datastore oscila entre 500 IOPS/TiB de media hasta 15000 IOPS/TiB de media. __Esto es un limitador de software implementado a nivel de los controladores de almacenamiento__, sujeto a un límite de hardware absoluto de 30 000 IOPS y 1024 MB/s máximo por LUN.*
- *La contabilidad del volumen de disco consumido por su organización es la suma de todas las LUNs en todas las AZs utilizadas*.*
- *Se requieren los permisos __'order'__ y __'compute'__ en la cuenta para realizar esta acción.*

### Solicitar nuevas redes

La tecnología de red utilizada en la infraestructura Cloud Temple se basa en [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). Le permite disponer de __redes de nivel 2 con continuidad entre sus zonas de disponibilidad dentro de una región__.
También es posible compartir redes entre sus tenants y terminarlas en una zona de hosting.
Básicamente, puede imaginar una red Cloud Temple como un VLAN 802.1q disponible en cualquier punto de su tenant.

Las redes en la plataforma Cloud Temple son de __nivel 2 (VLANs)__ basadas en la tecnología __VPLS (Virtual Private LAN Service)__. Esta tecnología le permite disponer de una __continuidad de red entre sus zonas de disponibilidad__ dentro de una región, con un rendimiento garantizado:

- __Latencia intra-AZ__ : < 3 ms
- __Latencia inter-AZ__ : < 5 ms

__Flexibilidad de las redes__ :

- Una red puede ser __compartida entre varios clusters__ de una misma zona de disponibilidad
- Una red puede ser __propagada entre varias zonas de disponibilidad__ de una misma región
- Una red puede ser __compartida entre diferentes tenants__ de su organización
- Una red puede ser __terminada en una zona de hosting__ para sus equipos físicos
- __Límite__ : Máximo de 20 redes por solicitud. Puede realizar varias solicitudes consecutivas para ampliar este número según sus necesidades

La solicitud de una nueva red y las decisiones de compartición entre sus tenants se realizan en el menú __'Red'__ de la barra verde a la izquierda de la pantalla. Las redes se crearán primero, y luego se generará una solicitud separada para propagarlas. Puede seguir el progreso de las solicitudes en curso accediendo a la pestaña "Solicitud" en el menú, o haciendo clic en las etiquetas de información que lo redirigen a las solicitudes activas o en proceso.

<img src={shivaOrdersNet_002} />

También es posible propagar redes ya existentes o separar ambas etapas, comenzando con la creación de la red y procediendo a la propagación posteriormente según sus necesidades. La opción de propagación se encuentra en las opciones de la red seleccionada :

<img src={shivaOrdersNet_003} />

Haga clic en la opción "Propagar" para una red ya existente y, a continuación, seleccione el destino de propagación deseado. Esta etapa le permite definir la ubicación o los recursos en los que se debe propagar la red :

<img src={shivaOrdersNet_004} />

### Desactivación de una red

Una red también puede desactivarse si es necesario. Esta opción le permite pausar temporalmente el acceso o el uso de la red sin eliminarlo definitivamente, ofreciendo así flexibilidad en la gestión de su infraestructura según sus necesidades.

La opción de desactivación se encuentra en las opciones de la red seleccionada. '

## Agregar hipervisores adicionales a un clúster de cómputo

Un __clúster de cómputo__ es un conjunto de hipervisores que deben cumplir con las siguientes reglas:

### Para los clústeres de VMware ESXi

__Reglas de homogeneidad__ :

- Todos los hosts de un clúster deben ser del __mismo tipo de blade__ (ECO, STANDARD, ADVANCE, PERFORMANCE, etc.)
- Todos los hosts pertenecen __al mismo tenant y a la misma zona de disponibilidad__
- __Límite__ : Máximo de 32 hipervisores por clúster

__Asignación de memoria__ :

- Cada blade se entrega con __toda la memoria física activada__ desde el inicio
- __Ejemplo__ : Un clúster de 3 blades STANDARD v3 (384 Go físicos cada una) = 3 × 384 Go = 1152 Go disponibles
- __Recomendación__ : No superar el 85% de consumo de memoria por blade para evitar el mecanismo de compresión de VMware y el ballooning

__Alta disponibilidad__ :

- __Mínimo recomendado__ : 2 hipervisores por clúster para beneficiarse del SLA del 99,99%
- Activar la función __VMware HA__ (High Availability) para el reinicio automático de las VMs en caso de fallo de un host

La adición de hipervisores a un clúster de cálculo se realiza en el menú __'IaaS'__ en la barra verde a la izquierda de la pantalla.
En el siguiente ejemplo, añadiremos capacidad de cálculo a un clúster de hipervisores que utiliza la tecnología VMware.

Vaya al submenú __'Infrastructure'__ y luego a __'VMWare'__. Seleccione entonces la stack vmware, la zona de disponibilidad y el clúster de cálculo.
En este ejemplo, se trata del __'clu001-ucs12'__. Haga clic en el botón __'Ajouter un host'__ que se encuentra en la tabla con la lista de hosts, en la parte superior derecha.

__nota__ :

- *__La configuración de un clúster debe ser homogénea__. Por lo tanto, no está permitido mezclar tipos de hipervisor dentro de un clúster. Todas las blades deben ser del mismo tipo.*
- *Los permisos __'order'__ y __'compute'__ son necesarios para la cuenta que realice esta acción.*

<img src={shivaOrdersIaasCpoolEsx} />

### Para los clústeres Open IaaS

Los clústeres Open IaaS siguen reglas similares en términos de homogeneidad y alta disponibilidad. La gestión de los recursos de cálculo también se realiza a través del menú __'OpenIaaS'__ con los mismos requisitos en términos de derechos de acceso.

## Añadir recursos de memoria adicionales a un clúster de cómputo

La asignación de memoria en los clústeres de cómputo funciona de la siguiente manera :

__Principio de la asignación de memoria__ :

- Todos los nodos de cómputo se entregan con el __máximo físico de memoria__ instalado
- Se aplica una __limitación de software__ a nivel del clúster VMware para ajustarse a la RAM facturada
- Cada nodo cuenta con __toda la memoria física activada__ dentro del clúster

__Dimensionamiento por clúster__ :

- __Mínimo__ : número de hosts × 128 Go de memoria
- __Máximo__ : número de hosts × cantidad de memoria física del nodo

__Ejemplo__ : Para un clúster de tres hosts de tipo `STANDARD v3` (384 Go físicos por nodo)

- Memoria total disponible : 3 × 384 Go = 1152 Go

__Recomendaciones importantes__ :

- No superar el __85% de consumo de memoria promedio por nodo__ para evitar el ballooning y la compresión de VMware
- Prever espacio en disco para los archivos de swap (.VSWP) creados al iniciar cada VM (tamaño = memoria de la VM)

Para agregar memoria RAM a un clúster, simplemente acceda a la configuración del clúster (al igual que para la adición de un host de cómputo como se vio anteriormente) y haga clic en __'Modificar la memoria'__.

<img src={shivaOrdersIaasCpoolMemory} />

__nota__ :

- *__Las máquinas se entregan con toda la memoria física__. El desbloqueo del recurso de memoria es solo una activación de software a nivel de un clúster.*
- *No es posible modificar la cantidad de memoria física de un tipo de nodo. Tenga en cuenta la capacidad máxima de un nodo al crear un clúster.*
- *Se requieren los permisos __'order'__ y __'compute'__ en la cuenta para realizar esta acción.*