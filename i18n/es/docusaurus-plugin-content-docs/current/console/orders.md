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

El seguimiento del despliegue de nuevas recursos se realiza en el menú __'Órdenes'__, accesible desde la barra verde a la izquierda de la pantalla.

Permite visualizar los recursos Cloud ordenados, en proceso de despliegue y posibles errores dentro de un [Tenant](iam/concepts.md#tenant) de su [Organización](iam/concepts.md#organizaciones).

<img src={shivaOrdersList} />

*__Nota: En este momento, no es posible visualizar de forma global, a nivel de organización, todos los recursos desplegados en los distintos tenants.__ Este tema se abordará posteriormente mediante la implementación de un portal dedicado al comitente (en el sentido de firmante) y al control de su organización.*

El despliegue de recursos o su eliminación se realiza en cada uno de los productos, en los menús __'IaaS'__ y __'Red'__, situados a la izquierda de la pantalla en la barra verde.

También es posible ver directamente las entregas a través de las notificaciones de la consola Cloud Temple:

<img src={shivaOrderNotif_001} />

Desde la página de órdenes, puede ver el estado de avance de una entrega y, si es necesario, comunicarse con el equipo aportando comentarios o aclaraciones:

<img src={shivaOrderStatus} />

__Nota__: __No es posible iniciar varias órdenes del mismo tipo de recurso simultáneamente. Deberá esperar a que la orden actual se procese y finalice antes de poder realizar una nueva. Esto garantiza una gestión eficaz y ordenada de los recursos dentro de su entorno.__

## Solicitar una nueva zona de disponibilidad

Es posible agregar una nueva zona de disponibilidad accediendo al menú "__Solicitud__". Esta opción le permite ampliar sus recursos y mejorar la disponibilidad y resiliencia de sus aplicaciones en tan solo unos clics:

<img src={shivaOrderAz_01} />

Comience seleccionando el ubicación deseada, eligiendo primero la región geográfica y luego la zona de disponibilidad (AZ) correspondiente entre las disponibles. Esta etapa permite adaptar el despliegue de sus recursos según la ubicación y los requisitos de su infraestructura:

<img src={shivaOrderAz_02} />

A continuación, proceda a seleccionar el tipo de clúster de hipervisor deseado, eligiendo aquel que mejor se ajuste a las necesidades de rendimiento y gestión de su infraestructura en la nube:

<img src={shivaOrderAz_03} />

A continuación, seleccione el número de hipervisores, así como la cantidad de memoria deseada, para adaptar los recursos a la carga de trabajo y a los requisitos específicos de su entorno en la nube:

<img src={shivaOrderAz_04} />

A continuación, seleccione el número de datastores que desea aprovisionar en el clúster, así como sus tipos. Es importante tener en cuenta que el número máximo de datastores permitido es de 10, con un mínimo de 2 datastores requeridos. Cada tipo de datastore diferente generará un datastoreCluster adicional. Por ejemplo, si elige 2 datastores del tipo "live" y 1 datastore del tipo "mass", se crearán 2 datastoreClusters distintos:

<img src={shivaOrderAz_05} />

Defina el tamaño de almacenamiento necesario para la copia de seguridad, asegurándose de prever una capacidad equivalente a la de su almacenamiento de producción. Tenga en cuenta una tasa de compresión promedio de 2 para optimizar el espacio de copia de seguridad y garantizar una protección eficaz de sus datos:

<img src={shivaOrderAz_06} />

Seleccione los redes que desea propagar según sus necesidades. También tiene la posibilidad de activar la opción "Acceso a internet" si es necesario, definiendo el número de direcciones IP deseadas, con una opción comprendida entre 1 y un máximo de 8:

<img src={shivaOrderAz_07} />

A continuación, obtendrá un resumen de las opciones seleccionadas antes de validar su solicitud.

<img src={shivaOrderAz_08} />

## Solicitar recursos adicionales de almacenamiento

La lógica de asignación de almacenamiento en modo de bloque en los clústeres de cálculo se basa en la tecnología __IBM SVC (San Volume Controller)__ y __IBM FlashSystem__. El almacenamiento se organiza en __LUNs de al menos 500 GiB__, presentadas según la tecnología utilizada:
- Para __VMware__: en forma de __datastores__ agrupados en __clústeres SDRS (Storage Distributed Resource Scheduler)__
- Para __Bare Metal__: en forma de __volúmenes__
- Para __Open IaaS__: en forma de __Storage Repository (SR)__

Cada datastore hereda una __clase de rendimiento__ definida en IOPS/To (de 500 a 15000 IOPS/To para FLASH, o sin garantía para MASS STORAGE). La limitación de IOPS se aplica __a nivel de datastore__ (y no por VM), lo que significa que todas las máquinas virtuales que comparten el mismo datastore comparten el cuota de IOPS asignada.

__Puntos clave que recordar__:

- __Tamaño mínimo__: 500 GiB por LUN
- __Rendimiento__: Proporcional al volumen asignado (por ejemplo: 2 TiB en clase Standard = 3000 IOPS máximos)
- __Organización__: Los datastores del mismo tipo se agrupan automáticamente en clústeres de datastores
- __Disponibilidad__: 99,99% medido mensualmente, incluyendo periodos de mantenimiento
- __Espacio necesario__: Siempre reservar un 10% de espacio libre para instantáneas de copia de seguridad y un espacio equivalente a la suma de la RAM de las VMs para los archivos .VSWP

### Deploy a new compute cluster

Proceed with ordering a hypervisor cluster by selecting the options that best suit your virtualization requirements. Define key characteristics such as the number of hypervisors, cluster type, amount of memory, and required computing resources:

<img src={shivaOrderClucalc_01} />

Select the availability zone:

<img src={shivaOrderClucalc_02} />

Choose the compute blade type:

<img src={shivaOrderClucalc_03} />

You can then choose to select existing networks and propagate them, or create new networks directly at this stage, depending on your infrastructure needs. Note that the total number of configurable networks is limited to a maximum of 20:

<img src={shivaOrderClucalc_04} />

You will then receive a summary of the selected options before validating your order, and can subsequently view your ongoing order:

<img src={shivaOrderClucalc_05} />

### Desplegar un nuevo clúster de almacenamiento

En el menú "__comando__", realice el pedido de un __nuevo clúster de almacenamiento__ para su entorno seleccionando las opciones que se ajusten a sus necesidades en cuanto a capacidad, rendimiento y redundancia. Seleccione la ubicación:

<img src={shivaOrderClusto_01} />

Defina el número de datastores que desea aprovisionar en el clúster, así como su tipo, respetando los siguientes límites: un mínimo de 2 datastores y un máximo de 10 pueden configurarse. Elija los tipos de datastores que mejor respondan a sus necesidades en términos de rendimiento, capacidad y uso, con el fin de optimizar el almacenamiento de su entorno:

<img src={shivaOrderClusto_02} />

Seleccione el tipo de almacenamiento deseado entre las diferentes opciones disponibles:

<img src={shivaOrderClusto_03} />

A continuación, acceda a un resumen completo de las opciones que ha seleccionado, lo que le permitirá revisar todos los parámetros antes de validar definitivamente su pedido:

<img src={shivaOrderClusto_04} />

### Deploy a new datastore within a VMware SDRS cluster

In this example, we will add block storage for a VMware infrastructure.  
To add an additional datastore to your SDRS cluster, go to the __'Infrastructure'__ submenu, then __'VMware'__.  
Select the appropriate VMware stack and availability zone, then navigate to the __'Storage'__ submenu.

Choose the SDRS cluster that matches the performance characteristics you require, and click the __'Add a datastore'__ button located in the table displaying the list of datastores.

<img src={shivaOrdersIaasSpoolDs} />

__Note__:

- *The smallest activatable LUN size on a cluster is __500 GiB__.*
- *Datastore performance ranges from an average of 500 IOPS/TiB up to 15,000 IOPS/TiB on average. __This is a software-based limitation enforced at the storage controller level__.*
- *The disk volume consumption billing for your organization is the sum of all LUNs across all used availability zones.*
- *The __'order'__ and __'compute'__ permissions are required on the account to perform this action.*

### Solicitar nuevos redes

La tecnología de red utilizada en la infraestructura Cloud Temple se basa en [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). Esta le permite disfrutar de __redes de nivel 2 continuas entre sus zonas de disponibilidad dentro de una región__.

También es posible compartir redes entre sus inquilinos y terminarlas en zonas de hosting. Básicamente, puede imaginar una red Cloud Temple como un VLAN 802.1q disponible en cualquier punto de su inquilino.

Las redes en la plataforma Cloud Temple son de __nivel 2 (VLANs)__ basadas en la tecnología __VPLS (Virtual Private LAN Service)__ . Esta tecnología le permite disfrutar de una __continuidad de red entre sus zonas de disponibilidad__ dentro de una región, con rendimiento garantizado:

- __Latencia intra-AZ__: < 3 ms  
- __Latencia inter-AZ__: < 5 ms  

__Flexibilidad de redes__:

- Una red puede ser __compartida entre varios clústeres__ de la misma zona de disponibilidad  
- Una red puede ser __propagada entre varias zonas de disponibilidad__ de la misma región  
- Una red puede ser __compartida entre diferentes inquilinos__ de su organización  
- Una red puede ser __terminada en zona de hosting__ para sus equipos físicos  
- __Límite__: Máximo de 20 redes por solicitud. Puede realizar varias solicitudes sucesivas para ampliar este número según sus necesidades  

La solicitud de una nueva red y las decisiones sobre el compartimiento entre sus inquilinos se realizan en el menú __'Red'__ de la barra verde situada a la izquierda de la pantalla. Las redes se crearán primero, y luego se generará una solicitud independiente para propagarlas. Puede seguir el progreso de las solicitudes en curso accediendo al panel "Solicitud" en el menú, o haciendo clic en las etiquetas de información que le redirigirán a las solicitudes activas o en proceso de tratamiento.

<img src={shivaOrdersNet_002} />

También es posible propagar redes ya existentes o separar ambas etapas, comenzando con la creación de la red y luego procediendo a la propagación posteriormente según sus necesidades. La opción de propagación se encuentra en las opciones de la red seleccionada:

<img src={shivaOrdersNet_003} />

Haga clic en la opción "Propagar" para una red ya existente, y luego seleccione la ubicación de propagación deseada. Esta etapa le permite definir el lugar o los recursos sobre los que debe propagarse la red:

<img src={shivaOrdersNet_004} />

### Desactivación de una red

Una red también puede desactivarse si es necesario. Esta opción le permite pausar temporalmente el acceso o el uso de la red sin eliminarla definitivamente, ofreciendo así flexibilidad en la gestión de su infraestructura según sus necesidades.

La opción de desactivación se encuentra en las opciones de la red seleccionada.

## Add additional hypervisors to a compute cluster

A __compute cluster__ is a grouping of hypervisors that must comply with the following rules:

### Para los clusters VMware ESXi

__Reglas de homogeneidad__:

- Todos los hosts de un cluster deben ser del __mismo tipo de host__ (ECO, STANDARD, ADVANCE, PERFORMANCE, etc.)
- Todos los hosts pertenecen al __mismo tenant y a la misma zona de disponibilidad__
- __Límite__: Máximo de 32 hipervisores por cluster

__Asignación de memoria__:

- Cada host viene con __toda la memoria física activada desde el inicio__
- __Ejemplo__: Un cluster de 3 hosts STANDARD v3 (384 GB físicos cada uno) = 3 × 384 GB = 1152 GB disponibles
- __Recomendación__: No superar el 85 % de consumo de memoria por host para evitar el mecanismo de compresión de VMware y el ballooning

__Alta disponibilidad__:

- __Mínimo recomendado__: 2 hipervisores por cluster para obtener el SLA del 99,99 %
- Activar la funcionalidad __VMware HA__ (Alta Disponibilidad) para el reinicio automático de las máquinas virtuales en caso de fallo de un host

La adición de hipervisores a un cluster de cálculo se realiza en el menú __'IaaS'__ en la barra verde situada a la izquierda de la pantalla.  
En el siguiente ejemplo, añadiremos capacidad de cálculo a un cluster de hipervisor que utiliza la tecnología VMware.

Diríjase al submenú __'Infraestructura'__ y luego a __'VMWare'__. A continuación, seleccione la pila VMware, la zona de disponibilidad y el cluster de cálculo.  
En este ejemplo, se trata del __'clu001-ucs12'__. Haga clic en el botón __'Añadir un host'__ situado en la parte superior derecha de la tabla con la lista de hosts.

__nota__:

- *__La configuración de un cluster debe ser homogénea__. Por lo tanto, no está permitido mezclar tipos de hipervisor dentro de un cluster. Todos los hosts deben ser del mismo tipo.*
- *Los permisos __'order'__ y __'compute'__ son necesarios en la cuenta para realizar esta acción.*

<img src={shivaOrdersIaasCpoolEsx} />

### Para los clusters Open IaaS

Los clusters Open IaaS siguen reglas similares en cuanto a homogeneidad y alta disponibilidad. La gestión de los recursos de cómputo se realiza también a través del menú __'OpenIaaS'__ con los mismos requisitos previos en términos de permisos de acceso.

## Añadir memoria adicional a un clúster de cálculo

La asignación de memoria en los clústeres de cálculo funciona de la siguiente manera:

__Principio de asignación de memoria__:

- Todas las láminas de cálculo se entregan con la __memoria física máxima instalada__
- Se aplica una __limitación lógica__ a nivel del clúster VMware para coincidir con la RAM facturada
- Cada lámina dispone de __toda la memoria física activada__ dentro del clúster

__Dimensionamiento por clúster__:

- __Mínimo__: número de hosts × 128 GB de memoria
- __Máximo__: número de hosts × cantidad de memoria física por lámina

__Ejemplo__: Para un clúster de tres hosts del tipo `STANDARD v3` (384 GB físicos por lámina)

- Memoria total disponible: 3 × 384 GB = 1152 GB

__Recomendaciones importantes__:

- No superar el __85% de consumo medio de memoria por lámina__ para evitar el ballooning y la compresión de VMware
- Prever espacio en disco para los archivos de swap (.VSWP) creados al arranque de cada VM (tamaño = memoria de la VM)

Para añadir memoria RAM a un clúster, basta con acceder a la configuración del clúster (como se hizo anteriormente para añadir un host de cálculo) y hacer clic en __'Modificar la memoria'__.

<img src={shivaOrdersIaasCpoolMemory} />

__nota__:

- *__Las máquinas se entregan con toda la memoria física disponible__. El desbloqueo de la memoria es únicamente una activación lógica a nivel de clúster.*
- *No es posible modificar la cantidad de memoria física de un tipo de lámina. Tener en cuenta siempre la capacidad máxima de una lámina al crear un clúster.*
- *Se requieren los permisos __'order'__ y __'compute'__ en la cuenta para realizar esta acción.*