

---
title: Conceptos
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para responder a las necesidades críticas de continuidad y recuperación de actividad, con un enfoque particular en sectores exigentes como la industria, el banco y la aseguradora. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.



## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cálculo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para el almacenamiento en bloques.
- Red: __JUNIPER__.
- Virtualización: __VMware__, ofreciendo una base fiable y probada para gestionar sus entornos en la nube.
- Copia de seguridad: __IBM Spectrum Protect Plus__, para la orquestación y almacenamiento de copias de seguridad.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, garantizando una compatibilidad amplia con los principales editores de software.



## Una infraestructura dedicada y automatizada

Aunque completamente automatizada gracias a APIs y un proveedor Terraform, la oferta IaaS de Cloud Temple propone una infraestructura única:

- __Recursos dedicados__: Las láminas de cálculo, volúmenes de almacenamiento y stacks de software (virtualización, copias de seguridad, firewalling, etc.) nunca se comparten entre los clientes.
- __Predicibilidad máxima__: Usted controla las tasas de virtualización, la presión en IOPS en el almacenamiento y disfruta de una facturación clara, por consumo mensual.

La plataforma está calificada __SecNumCloud__ por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.



## Funcionalidades principales

- Recursos de cálculo (CPU, RAM) dedicados y por demanda.
- Almacenamiento por demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para el almacenamiento o las máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infrastructure as Code gracias a las APIs y al proveedor Terraform.



## Ventajas

| Ventaja             | Descripción                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Almacenamiento de datos en Francia y cumplimiento RGPD.                                                                                          |
| Seguridad           | Plataforma altamente segura, calificada __SecNumCloud__, __HDS__ (Almacenamiento de Datos de Salud), __ISO 27001__ y __ISAE 3402 tipo II__. |  
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, ventanas de mantenimiento incluidas.                                        |
| Resiliencia         | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                               |
| Automatización      | Plataforma completamente automatizada pensada para integrarse en un programa de transformación digital.                                        |
| Bajo demanda        | Recursos disponibles bajo demanda.                                                                                                          |



## Regiones y zonas de disponibilidad

El producto IaaS de VMware se implementa en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) forma parte de una [región](../additional_content/concepts_regional.md).

Este tipo de despliegue permite elegir la ubicación de los clústeres y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante incidentes (DRP) en caso de incidente.

---



## Cálculo

Las láminas proporcionadas por Cloud Temple son del tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Están completamente gestionadas por Cloud Temple (firmware, versión del sistema operativo, ...) a través de la consola Cloud Temple.

Varias categorías de láminas de cálculo están disponibles en el catálogo para soportar sus cargas de trabajo (virtualización, contenerización, ...). Estas presentan características y rendimientos diferentes para responder mejor a sus necesidades. El catálogo de láminas de cálculo se actualiza regularmente.

En el marco del uso con una oferta de virtualización, un clúster de hipervisores está compuesto únicamente por láminas de cálculo del mismo tipo (no es posible mezclar láminas de diferentes tipos en un mismo clúster).

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          | SKU para la oferta Vmware         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Lámina ECO v3         | 384 GB       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos              | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Lámina STANDARD v3    | 384 GB       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Lámina ADVANCE v3     | 768 GB       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Lámina PERFORMANCE 1 v3 | 384 GB     | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Lámina PERFORMANCE 2 v3 | 768 GB     | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Lámina PERFORMANCE 3 v3 | 1536 GB    | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Lámina PERFORMANCE 4 v3 | 512 GB     | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos              | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48 GB | csp:fr1:iaas:vmware:perf4:v3    |

__Notas__ :

- __(1)__ La cantidad de memoria proporcionada es la disponible físicamente en las láminas. No es posible cambiar la cantidad física de memoria de una lámina.

- __(2)__ La frecuencia mínima base / frecuencia turbo, expresada en GHz. Por defecto, los procesadores están configurados para un rendimiento máximo en el BIOS.

- __(3)__ La conectividad física está compartida para el acceso de red y el acceso a almacenamiento en bloque, la plataforma CISCO siendo convergente.

- __(4)__ La oferta de GPU disponible en realidad cambia constantemente. El 1 de mayo de 2024, la oferta se basa en las GPUs NVIDIA LOVELACE L40S. Por defecto, la lámina PERF4 se entrega con 2 tarjetas L40S de 48 GB de RAM. Póngase en contacto con el soporte para más precisión si es necesario.

La disponibilidad de la oferta de cálculo es del 99,99%, calculada mensualmente, incluida la ventana de mantenimiento. La elegibilidad en caso de incumplimiento del SLA está sujeta a la creación de un ticket de incidente. También debe poseer al menos dos hosts por clúster y activar la funcionalidad __Alta Disponibilidad__ (HA). Esta funcionalidad permite que su arquitectura reinicie automáticamente sus máquinas virtuales en el segundo hipervisor. En el caso de que una zona de disponibilidad contenga solo un hipervisor, el reinicio automático no es posible.



## Red

El servicio de red en la plataforma IaaS de Cloud Temple se basa en una infraestructura de red basada en la tecnología VPLS, ofreciendo una segmentación flexible y eficiente para satisfacer las necesidades de los clientes en cuanto a conectividad e isolación de red.



### VLANs de nivel 2

Las VLANs disponibles en la oferta IaaS son de tipo __nivel 2__, ofreciendo un aislamiento de red completo y una configuración adaptable según las necesidades.



#### Conceptos principales

- __Compartir entre clusters y zonas de disponibilidad (AZ)__ :
  - Las VLANs pueden ser compartidas entre las diferentes AZ y los diferentes clusters que pertenecen al mismo inquilino.
- __Propagación entre inquilinos__ :
  - Las VLANs pueden ser propagadas entre varios inquilinos que pertenecen a una misma organización, facilitando las comunicaciones internas.



### Rendimiento de red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo:

- __Latencia intra-AZ__ : Inferior a __3 ms__.
- __Latencia inter-AZ__ : Inferior a __5 ms__.



### Puntos clave

1. __Flexibilidad__ : Las VLANs pueden configurarse para adaptarse a entornos multi-clusters y multiinquilinos.
2. __Alta performance__ : Una latencia mínima garantiza una comunicación rápida y eficiente entre las zonas de disponibilidad.
3. __Aislamiento y seguridad__ : Las VLANs de nivel 2 ofrecen una segmentación de red estricta para proteger los datos y los flujos.



## Almacenamiento en bloque

Cloud Temple ofrece varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/) y [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite entregar el nivel de rendimiento requerido para los entornos de nuestros clientes gracias a la gran cantidad de memoria caché integrada en los controladores y a la posibilidad de distribuir todo el IOPS de un servidor en varios SAN.

También se utiliza para permitir la replicación de sus LUNs de almacenamiento en modo bloque entre las zonas de disponibilidad o facilitar las intervenciones en las cajas de almacenamiento.

El almacenamiento es principalmente de tipo FLASH NVME dedicado a cargas de trabajo profesionales. Los discos se utilizan en las cajas de almacenamiento en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para necesidades de archivado en un contexto de eficiencia económica. Varios niveles de rendimiento están disponibles:

| Referencia                         | Unidad | SKU                                          |
|-----------------------------------|--------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio  | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio  | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio  | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio  | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio  | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivage          | 1 Tio  | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *El rendimiento efectivo para una clase de almacenamiento está relacionado con el volumen realmente pedido, según la noción "IOPS/To", entendiendo "límite de IOPS por tera asignado",*

> *Así, un volumen de 0,5To en la clase de rendimiento 'Standard' tendrá un límite de IOPS limitado a 750 IOPS,*
> *De la misma manera, un volumen de 10To en la clase de rendimiento 'Ultra' tendrá un límite de IOPS de 150000 IOPS,*

- *El límite de IOPS se aplica al volumen, por lo tanto, a la noción de Datastore para un entorno VMware,*
- *La disponibilidad del almacenamiento es del 99,99% medido mensualmente, incluida la ventana de mantenimiento,*
- *No hay restricción o cuota en lectura o escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Mass Storage'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500Gio,*
- *Al usar un mecanismo de replicación de almacenamiento, los rendimientos deben ser idénticos en ambas zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" de tipo compresión o deduplicación: cuando reserva 10Tio de almacenamiento, tiene físicamente 10Tio útiles de almacenamiento implementados en las máquinas IBM.*
- *Las LUNs de almacenamiento están dedicadas al entorno del cliente.*



### Uso dentro del marco de la oferta de cálculo VMware

En el marco del uso del almacenamiento en modo de bloque en forma de datastore en la oferta de cálculo VMware de Cloud Temple, __debe tener en cuenta varias consideraciones importantes__:

1. __Archivo de intercambio (.VSWP) al iniciar las máquinas virtuales__: Cuando una máquina virtual se inicia, crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder iniciar sus máquinas virtuales, siempre debe disponer en su datastore de un espacio libre equivalente a la suma de las capacidades de memoria de sus máquinas virtuales. Por ejemplo, si su datastore dispone de 1 TB de almacenamiento en bloque y desea iniciar 10 máquinas virtuales de 64 GiB de memoria cada una, se necesitarán 640 GiB de espacio en disco. Sin este espacio, el inicio de las máquinas virtuales estará limitado por la capacidad disponible para crear los archivos de intercambio.

2. __Espacio libre para los snapshots de copia de seguridad__: El servicio de copia de seguridad utiliza instantáneas (snapshots). Por lo tanto, siempre debe tener suficiente espacio libre para permitir la creación de una instantánea durante la copia de seguridad de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar la copia de seguridad. En general, se recomienda mantener al menos el 10% de espacio libre para esta operación.

3. __Gestión de discos dinámicos__: Sea cauteloso con el uso de discos dinámicos. Si no controla su crecimiento, la falta de espacio físico puede provocar una congelación (freeze) de la máquina virtual en el mejor de los casos, o un colapso con corrupción en el peor de los casos. Es crucial supervisar cuidadosamente el espacio disponible en sus datastores cuando utilice este tipo de discos.

Una gestión proactiva del espacio en disco es esencial para garantizar el buen funcionamiento de sus máquinas virtuales y la fiabilidad de las copias de seguridad. Asegúrese siempre de disponer del espacio necesario para los archivos de intercambio, los snapshots y el crecimiento de los discos dinámicos.



## Almacenamiento en modo de copia de seguridad

El almacenamiento dedicado a la copia de seguridad de sus máquinas virtuales se aprovisiona automáticamente por la plataforma dentro del límite del cupo contratado.

| Referencia                | Unidad | SKU                                      |
|--------------------------|--------|------------------------------------------|
| MASS STORAGE - Archivage | 1 TiB  | csp:(region):iaas:storage:bloc:backup:v1 |



### Replicación del almacenamiento en modo de bloque



#### Principios

Para permitir la implementación de sus planes de recuperación ante desastres, cuando no es posible estar en situación de continuidad de actividad con mecanismos aplicativos y la replicación de máquinas virtuales no es adecuada, Cloud Temple propone __mecanismos de replicación de almacenamiento en bloque entre las zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican en los LUNs de almacenamiento de sus entornos, complementando las copias de seguridad. La elección de utilizar un mecanismo de replicación en un entorno __depende de muchos factores, como su criticidad, la pérdida de datos tolerable o el rendimiento deseado__ para la aplicación.

Cloud Temple propone dos tipos de mecanismos desplegados en una configuración activo/pasivo:

- La replicación __asincrónica__ (o __'Global Mirror'__): *La función __'Global Mirror'__ proporciona un proceso de copia asincrónica. Cuando un host escribe en el volumen primario, la confirmación de finalización de la E/S se recibe antes de que la operación de escritura termine para la copia en el volumen secundario. Si se inicia una operación de conmutación por fallo, la aplicación debe recuperar y aplicar todas las actualizaciones que no se hayan confirmado en el volumen secundario. Si las operaciones de E/S en el volumen primario se pausan durante un breve período, el volumen secundario puede convertirse en una copia exacta del volumen primario. Esta función es comparable a un proceso de backup continuo en el que siempre faltan las últimas actualizaciones. Al utilizar Global Mirror con fines de recuperación ante desastres, debe reflexionar sobre la forma en que desea gestionar estas actualizaciones faltantes.*

- La replicación __sincrónica__ (o __'Metro Mirror'__): *La función __'Metro Mirror'__ es un tipo de copia remota que crea una copia sincrónica de los datos de un volumen primario en un volumen secundario. Con copias sincrónicas, las aplicaciones hospedadas escriben en el volumen primario, pero no reciben confirmación de que la operación de escritura está terminada hasta que los datos se hayan escrito en el volumen secundario. Esto garantiza que ambos volúmenes contengan datos idénticos cuando finalice la operación de copia. Después de que finalice la operación de copia inicial, la función Metro Mirror mantiene permanentemente una copia completamente sincronizada de los datos de origen en el sitio objetivo. __Desde el 1 de enero de 2024, la función 'Metro Mirror' ya no se comercializa.__*

Se define entonces un sitio denominado "activo" o "principal" y un sitio "pasivo" o "standby". El plan de recuperación ante desastres se activa en caso de desastre o durante una solicitud de prueba del PRA. A continuación, el sitio pasivo toma el relevo del sitio activo.



#### Replicación asíncrona

Cuando sus cargas de trabajo requieren tiempos de recuperación de actividad cortos y no es aceptable o adecuado utilizar mecanismos de replicación aplicativa / replicación de máquinas virtuales, es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad de la misma región.

Esta oferta permite obtener un __RPO de 15 minutos__ y un __RTO inferior a 4 horas__. Permite reiniciar mucho más rápidamente que la implementación de una restauración de copia de seguridad.

En un volumen de almacenamiento en replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de las dos zonas de disponibilidad trabajan en conjunto para realizar las operaciones de escritura en los dos sitios. El sitio principal no espera la confirmación de escritura del sitio secundario.

Los pasos de una operación de escritura son los siguientes:

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__: envía su solicitud al controlador SAN de su zona de disponibilidad,
2. El controlador SAN local solicita al controlador SAN de la zona remota que realice la operación de escritura,
3. el controlador SAN local no espera la confirmación del SAN remoto y realiza entonces la escritura localmente,
4. da __confirmación__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio remoto no acceden directamente a la LUN Global Mirror__: es necesario realizar una solicitud de servicio.

| Nivel de Servicio | Descripción                                                                                                                                       |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 minutos    | En caso de incidente en el centro de datos principal, la cantidad máxima de datos perdidos corresponde como máximo a los 15 últimos minutos de escritura |
| RTO < 4 horas     | En caso de incidente en el centro de datos principal, la recuperación de actividad está garantizada en menos de 4 horas según la complejidad de los entornos.          |

En caso de activación del PRA, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. La implementación de esta solución requiere tener reservada en el sitio 'standby' la capacidad de cálculo y la RAM para recuperar la actividad en caso de incidente.

El uso de esta tecnología requiere también la duplicación del espacio en disco: es necesario tener exactamente el mismo espacio en el sitio remoto que en el sitio local.

El uso de este mecanismo puede afectar el rendimiento de la aplicación en un 10 %. __Solo las clases de almacenamiento 500 IOPS/TiB, 1500 IOPS/TiB y 3000 IOPS/TiB son compatibles.__

| Referencia                          | Unidad  | SKU                                               |  
|------------------------------------|---------|---------------------------------------------------|
| ALMACENAMIENTO - Replicación SAN   | 1 TiB   | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *La oferta siendo asíncrona, es posible en caso de incidente que algunas operaciones de disco no hayan sido escritas en el sitio remoto. Por lo tanto, puede haber un riesgo en la coherencia de los datos, mitigado en el análisis de riesgo del plan de recuperación de actividad.*
- *La replicación del almacenamiento en modo bloque se realiza de forma oculta para las máquinas virtuales y las aplicaciones,*
- *En este sentido, es importante priorizar los escenarios de replicación aplicativa o posiblemente la replicación de máquinas virtuales,*
- *El cálculo y la memoria, en el sitio de recuperación, pueden reducirse para optimizar los costos si una situación degradada es aceptable para el negocio durante la ejecución del plan de recuperación de actividad.*



## Virtualización VMware

La oferta de virtualización VMware Cloud Temple calificada SecNumCloud se basa en la tecnología __VMware Vsphere__.

La plataforma es gestionada por Cloud Temple de forma automática (mantenimiento de condiciones de seguridad, mantenimiento en condiciones operativas, ...). Es controlable a través de la interfaz gráfica de la consola Shiva o mediante las APIs asociadas.

*__Nota__* : *Debido a razones de seguridad relacionadas con la calificación SecNumCloud, __no es posible para el cliente acceder directamente a la plataforma de virtualización VMware__ (ningún acceso directo al vCenter, por ejemplo). En efecto, la calificación SecNumCloud impone __una total segregación__ entre las interfaces de control de los activos técnicos y la interfaz del cliente (la consola Shiva).*

- Los productos implementados son VMware ESXi, VMware Vcenter y VMware Replication.
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que es controlada materialmente mediante la tecnología Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMWare vSan, sino únicamente SANs IBM en canal de fibra 32G.*
- *No se implementa ninguna forma de optimización oculta (compresión, deduplicación, ...).*



### Definición de un cluster de nodo de cálculo ('Cpool')

El __'Cpool'__ es un grupo de hipervisores VMware ESXi, también conocido como *'cluster ESX'*.

Los hosts presentes en un __'Cpool'__ pertenecen todos al mismo inquilino y a la misma zona de disponibilidad (AZ). Deben necesariamente tener la misma clase: __no es posible mezclar modelos diferentes de nodo de cálculo dentro de un mismo cluster__.

Todos los nodos de cálculo se entregan con la máxima memoria física, por lo que se aplica una limitación de uso de RAM a nivel de cluster para asegurarse de que corresponda a la RAM facturada.

Por defecto, cada nodo tiene 128 GB de memoria activada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener como máximo 32 hipervisores. Más allá de este límite, será necesario crear un segundo cluster.

El almacenamiento puede ser compartido entre los __'Cpool'__.



### Asignación de memoria para un 'Cpool'

La reserva de RAM es configurable por cluster. Puede reducir o aumentar la cantidad de RAM para que se ajuste a sus necesidades a escala del cluster.

__Atención a no exceder un promedio del 85% de consumo de memoria por nodo de cálculo__.
De hecho, la tecnología VMware utilizará un método de optimización de tipo compresión que puede afectar significativamente el rendimiento de sus cargas de trabajo y complicar el diagnóstico.
Del mismo modo, una presión excesiva de memoria en sus nodos de cálculo obligará al hipervisor a descargar parte de su memoria en disco para satisfacer las necesidades de las máquinas virtuales.

Este caso, llamado __'Ballooning'__ afecta muy significativamente el rendimiento de todas las máquinas virtuales ubicadas en el almacenamiento (datastore) correspondiente.
__El diagnóstico es complicado en este contexto__, ya que su métrica notará impactos a nivel de CPU y no de memoria o almacenamiento.
También tenga en cuenta que lo primero que hace el hipervisor al iniciar una máquina virtual es crear __un archivo de intercambio de memoria__ (.vswap) en el disco, del tamaño de la memoria de la máquina virtual correspondiente. Debe __tener en cuenta esto en el dimensionamiento de su almacenamiento__.

Cada nodo de cálculo viene con 128 GB de memoria activada softwaremente a nivel del __'Cpool'__, pero dispone físicamente de toda la memoria asignable.

Por ejemplo, para un cluster de tres hosts del tipo ```vmware:standard:v2```, la reserva de RAM al activar el _*'Cpool'*_ será de 3 x 128 GB = 384 GB de RAM.
Podrá extenderlo hasta un máximo de 3 x 384 GB = 1152 GB de memoria.

    Mínimo de memoria de un 'Cpool' = número de hosts X 128 GB de memoria
    Máximo de memoria de un 'Cpool' = número de hosts X cantidad de memoria física del nodo de cálculo



### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple pone a su disposición un catálogo de `Templates` regularmente actualizado y ampliado por nuestro equipo.
Incluye actualmente varias decenas de `Templates` e imágenes para montar en sus máquinas virtuales.



### Actualización de los Hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores para garantizar la aplicación de parches de seguridad.  
Sin embargo, la actualización de los hipervisores queda bajo su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones empresariales.  

El proceso de actualización está completamente automatizado. Para garantizar la continuidad del servicio, se requiere un mínimo de dos hipervisores por clúster durante la actualización. Asegúrese de contar con los permisos necesarios para realizar estas acciones.



### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.  
Pueden utilizarse para gestionar el uso de los recursos de su __'Cpool'__.  
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo que consumen muchos recursos.  
En un __'Cpool'__ de VMware, estas reglas suelen utilizarse para gestionar el comportamiento de las máquinas virtuales con vMotion.  
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar mediante la gestión de reglas:

- __Reglas de Afinidad__: Estas reglas garantizan que ciertas máquinas virtuales se ejecuten en el mismo host físico.  
  Se utilizan para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican con frecuencia juntas en el mismo servidor para reducir la latencia de red. Las reglas de afinidad son útiles en escenarios donde el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre servidores.

- __Reglas de Anti-afinidad__: Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten en el mismo host físico.  
  Son importantes para la disponibilidad y la resiliencia, por ejemplo, para evitar que las máquinas críticas se vean afectadas todas al mismo tiempo en caso de fallo de un servidor único. Las reglas de anti-afinidad son cruciales para las aplicaciones que requieren alta disponibilidad, como en entornos de producción donde la tolerancia a fallos es una prioridad.  
  Por ejemplo, no desea que sus dos Directorios Activo estén en el mismo hipervisor.

Al crear una regla, define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla, su estado de activación (__'Estado'__) y las máquinas afectadas de su cluster de hipervisores.

*Nota: las reglas de afinidad/anti-afinidad proporcionadas en la consola son reglas que afectan a las máquinas virtuales entre sí (no reglas entre hipervisores y máquinas virtuales).*



### Replicación asíncrona de sus máquinas virtuales en entorno VMware

La replicación asíncrona de sus máquinas virtuales es un mecanismo que consiste en enviar al hipervisor de origen las operaciones de escritura al sitio de respaldo en intervalos de tiempo regulares.

Después de una copia inicial en caliente de todo el almacenamiento activo al sitio de respaldo, solo se envían las escrituras en intervalos regulares al sitio en modo inactivo. Este intervalo depende del volumen de escritura (de cada hora a cada 24 horas).

La replicación de las máquinas virtuales se basa en el mecanismo de instantáneas del hipervisor. En este sentido, esta solución tiene los mismos inconvenientes, en particular la sensibilidad al volumen de escritura de la máquina virtual, el proceso de instantánea siendo un mecanismo recursivo para el cierre de la instantánea.

El ejemplo típico de máquina que no soporta el mecanismo de replicación de máquinas virtuales es un servidor FTP que recibe flujos en tiempo real de cámaras de seguridad. __La máquina pasa su tiempo escribiendo y no podrá cerrar una instantánea sin pausar el sistema operativo durante un período significativo (varias decenas de minutos)___. Si el hipervisor no puede cerrar la instantánea, exactamente eso hará, sin posibilidad de intervenir excepto corromper la máquina virtual.

| SLA             | Descripción                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H a 24H | En caso de siniestro en el centro de datos principal, la cantidad máxima de datos perdidos es la de la última transmisión de escritura al sitio de respaldo. |
| RTO  < 15mn     | Operación de inicio de la máquina virtual detenida en el sitio remoto                                                                                |

En caso de necesidad, o en caso de fallo en una máquina del sitio principal, la máquina espejo en el sitio de respaldo se activa. La recuperación de actividad requiere haber reservado cálculo y RAM en el sitio de respaldo. Es necesario tener el mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.

| Referencia                         | Unidad | SKU                                             |  
|-----------------------------------|--------|-------------------------------------------------|
| PRA - Replicación VMware inter-AZ | 1 VM   | csp:(region):iaas:vmware:licencia:replicacion:v1 |

*__Nota__ : El cálculo del RPO mínimo debe definirse en función de la tasa de cambio en la máquina virtual.*



## Copia de seguridad de máquinas virtuales

Cloud Temple ofrece __una arquitectura de copia de seguridad cruzada nativa y no desmontable__ (es obligatoria en la calificación secnumcloud francesa).

Las copias de seguridad se almacenan en una zona de disponibilidad y en un centro de datos físico diferente al que aloja la máquina virtual. Se cifran mediante un algoritmo de claves simétricas AES de 256 bits (modo de cifrado `xts-plain64`) para garantizar la confidencialidad de los datos.

Esto permite protegerse contra fallos graves en el centro de datos de producción y restaurar en un centro de datos secundario (incendio, por ejemplo).

Esta solución incluye:

- La copia de seguridad remota en caliente de todos los discos,
- La presentación y el arranque instantáneo de una máquina virtual desde la infraestructura de almacenamiento masivo y la recarga en caliente en los SAN de producción,
- La restauración parcial de archivos desde la copia de seguridad,
- Una retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de copia de seguridad se basa en la solución *IBM Spectrum Protect Plus*, una solución con arquitectura sin agente, fácil de usar y que permite la automatización de los procesos de copia de seguridad además de una optimización del espacio de almacenamiento masivo.

Las velocidades de copia de seguridad y restauración dependen del ritmo de cambio en los entornos. La política de copia de seguridad es configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota:__*

*__Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad__ que utiliza los mecanismos de instantáneas del hipervisor. Son típicamente las máquinas cuyas cargas de escritura en disco son constantes. No es posible que el hipervisor cierre la instantánea, lo que obliga a congelar la máquina virtual para poder finalizar la operación de cierre. Esta congelación puede durar varias horas y no es interrumpible.*

*La solución es entonces excluir el disco que es objetivo de escrituras permanentes y guardar los datos mediante otro método.*

| Referencia                                               | Unidad | SKU                            |
| -------------------------------------------------------- | ------ | ------------------------------ |
| COPIA DE SEGURIDAD - Acceso al servicio IBM Spectrum Protect Plus | 1 VM   | csp:(region):iaas:backup:vm:v1 |



#### Crear una política de copia de seguridad

Para agregar una nueva política de copia de seguridad, es necesario presentar una solicitud al soporte. El soporte está disponible desde el icono de balsa en la parte superior derecha de la ventana.

La creación de una nueva política de copia de seguridad se realiza mediante __una solicitud de servicio__ que incluye:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de copia de seguridad
    Las características (x días, y semanas, z meses, ...)



## Protección avanzada de datos (HSM/KMS)

Cloud Temple ofrece una solución de __cifrado avanzado de máquinas virtuales__ basada en módulos de seguridad hardware (HSM) y un servicio de gestión de claves (KMS). Esta funcionalidad permite reforzar la protección de los datos sensibles gracias a una gestión centralizada y segura de las claves de cifrado, directamente integrada en el entorno SecNumCloud.



### Arquitectura técnica

La solución se basa en una infraestructura de seguridad robusta compuesta por:

- __HSM (Hardware Security Module)__ : Módulos __Thales Luna S790__ certificados __FIPS 140-3 nivel 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ para la gestión centralizada de claves
- __Integración de VMware__ : Comunicación mediante el protocolo __KMIP__ (Key Management Interoperability Protocol)



#### Despliegue de alta disponibilidad

La infraestructura HSM se despliega en __tres zonas de disponibilidad__ de la región FR1:

- PAR7S
- TH3S  
- AZ07

Esta distribución garantiza una __alta disponibilidad__ y una __resiliencia__ máxima del servicio de cifrado.



### Funcionamiento y jerarquía de claves

El sistema utiliza una __jerarquía de claves criptográficas__ para garantizar la seguridad de los datos:

| Nivel | Tipo de clave | Descripción | Ubicación |
|--------|-------------|-------------|--------------|
| 1 | __Raíz de Confianza (RoT)__ | Clave maestra por KMS | HSM Luna |
| 2 | __Clave de Dominio (DK)__ | Clave de dominio por cliente (aislamiento multiinquilino) | HSM Luna |
| 3 | __Clave de Cifrado (KEK)__ | Clave de cifrado por VM | CipherTrust Manager |
| 4 | __Clave de Datos (DEK)__ | Clave de datos por VM | VMware ESXi |



#### Proceso de cifrado

1. __Generación__: VMware ESXi genera una DEK única para cada máquina virtual
2. __Protección__: La DEK se cifra con la KEK almacenada en CipherTrust Manager
3. __Seguridad__: La KEK se protege ella misma mediante la jerarquía de claves HSM
4. __Almacenamiento__: La DEK cifrada se almacena junto con los archivos de configuración de la VM



### Seguridad y cumplimiento



#### Certificaciones

- __FIPS 140-3 nivel 3__: Certificación del nivel más alto para HSM
- __Common Criteria EAL4+__: Evaluación de seguridad avanzada
- __SecNumCloud__: Calificación ANSSI integrada en el entorno Cloud Temple



#### Isolamiento multiinquilino

- __Separación criptográfica__: Cada cliente dispone de un dominio KMS aislado
- __Claves dedicadas__: Una Clave de Dominio específica por cliente
- __Auditoría y trazabilidad__: Registro completo de las acciones por dominio



### Activación y uso

El cifrado de las máquinas virtuales se activa __en un solo clic__ desde la [Console Shiva](../console/console.md).

Para un procedimiento detallado con capturas de pantalla, consulte el [tutorial de cifrado de máquinas virtuales](tutorials/vm_encryption.md).



#### Requisitos previos

- __Proveedor de clave configurado__: Debe estar activado un proveedor HSM/KMS en la vStack
- __Máquina virtual apagada__: La VM debe estar detenida antes del cifrado
- __Ninguna replicación activa__: La VM no debe estar replicada (incompatible con Global Mirror)
- __Sin instantáneas__: No debe haber ninguna instantánea presente
- __Suscripción al servicio__: Debe estar suscrito al servicio de protección avanzada

*__Nota__: Para más detalles sobre los requisitos previos y el procedimiento completo, consulte la [guía de cifrado de máquinas virtuales](tutorials/vm_encryption.md).*



### Limitaciones y consideraciones



#### Compatibilidad

- __Global Mirror__ : Las máquinas virtuales cifradas no son __no compatibles__ con la replicación Global Mirror
- __Restauración__ : Las copias de seguridad de VMs cifradas conservan su protección criptográfica
- __Exportación__ : La exportación de VMs cifradas requiere procedimientos específicos



#### Rendimiento

- __Impacto mínimo__ : El cifrado hardware garantiza un rendimiento óptimo
- __Transparencia__ : Sin impacto en el funcionamiento de las aplicaciones



### Casos de uso recomendados

Esta solución de protección avanzada es especialmente adecuada para:

- __Datos sensibles__: Información personal, datos financieros, secretos industriales
- __Conformidad reguladora__: Requisitos RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Sectores críticos__: Banca, seguros, salud, defensa
- __Soberanía digital__: Protección contra accesos no autorizados, incluso en caso de compromiso

| Referencia | Unidad | SKU |
|-----------|-------|-----|
| PROTECCIÓN AVANZADA - Cifrado de VM mediante HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Nota__ :*

- *El servicio requiere una suscripción específica y no está incluido en la oferta IaaS estándar*
- *La gestión de claves permanece completamente bajo control de Cloud Temple en el entorno SecNumCloud*
- *Las claves de cifrado nunca abandonan la infraestructura francesa y soberana*