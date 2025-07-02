---
title: Conceptos
---

La oferta __IaaS (Infraestructura como Servicio)__ de Cloud Temple está diseñada para responder a las necesidades críticas de continuidad y recuperación de actividad, con un enfoque particular en sectores exigentes como la industria, el banco y la seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional :

- Cálculo : __CISCO UCS__.
- Almacenamiento : __IBM Spectrum Virtualize__, __IBM FlashSystem__ para almacenamiento en bloques.
- Red : __JUNIPER__.
- Virtualización : __VMware__, ofreciendo una base fiable y probada para gestionar sus entornos en la nube.
- Copia de seguridad: __IBM Spectrum Protect Plus__, para la orquestación y almacenamiento de copias de seguridad.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco y IBM, garantizando una compatibilidad amplia con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque completamente automatizada mediante APIs y un proveedor Terraform, la oferta IaaS de Cloud Temple ofrece una infraestructura única :

- __Recursos dedicados__ : Las láminas de cálculo, volúmenes de almacenamiento y stacks de software (virtualización, copia de seguridad, firewalling, etc.) nunca se comparten entre los clientes.
- __Máxima previsibilidad__ : Usted controla los índices de virtualización, la presión en IOPS en el almacenamiento y se beneficia de una facturación clara, por consumo mensual.

La plataforma está calificada __SecNumCloud__ por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Funcionalidades principales

- Recursos de cálculo (CPU, RAM) dedicados y a demanda.
- Almacenamiento a demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infraestructura como Código gracias a las APIs y al proveedor Terraform.

## Ventajas

| Ventaja             | Descripción                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Almacenamiento de datos en Francia y cumplimiento del RGPD.                                                                                          |
| Seguridad           | Plataforma altamente segura, calificada __SecNumCloud__, __HDS__ (Almacenamiento de Datos de Salud), __ISO 27001__ y __ISAE 3402 tipo II__. |  
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo las horas de mantenimiento.                                        |
| Resiliencia         | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                               |
| Automatización      | Plataforma completamente automatizada pensada para integrarse en un programa de transformación digital.                                        |
| A demanda           | Recursos disponibles a demanda.                                                                                                          |

## Regiones y zonas de disponibilidad

El producto IaaS VMware se despliega en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) forma parte de una [región](../additional_content/concepts_regional.md).

Este tipo de despliegue permite elegir la ubicación de los clústeres y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación de actividad (DRP) en caso de incidente.

---

## Cálculo

Las láminas proporcionadas por Cloud Temple son del tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Están completamente gestionadas por Cloud Temple (firmware, versión del sistema operativo, ...) a través de la consola Cloud Temple.

Varias categorías de láminas de cálculo están disponibles en el catálogo para soportar sus cargas de trabajo (Virtualización, Contenedorización, ...).
Estas presentan características y rendimientos diferentes para responder mejor a sus necesidades. El catálogo de láminas de cálculo evoluciona regularmente.

En el marco del uso con una oferta de virtualización, un clúster de hipervisores está compuesto únicamente por láminas de cálculo del mismo tipo (no es posible mezclar láminas de diferentes tipos en un mismo clúster).

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          | SKU para la oferta Vmware         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Lámina ECO v3         | 384 GB       | 2,20/3,0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos              | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Lámina STANDARD v3    | 384 GB       | 2,40/3,4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Lámina ADVANCE v3     | 768 GB       | 2,80/3,5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Lámina PERFORMANCE 1 v3 | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Lámina PERFORMANCE 2 v3 | 768 GB       | 3,00/3,6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Lámina PERFORMANCE 3 v3 | 1536 GB      | 2,60/3,5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Lámina PERFORMANCE 4 v3 | 512 GB       | 2,50/4,1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos              | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48go | csp:fr1:iaas:vmware:perf4:v3    |

__Notas__ :

- __(1)__ La cantidad de memoria proporcionada es la físicamente disponible en las láminas. No es posible cambiar la cantidad física de memoria de una lámina.

- __(2)__ La frecuencia mínima base / frecuencia turbo, expresada en GHz. Por defecto, los procesadores están configurados para un rendimiento máximo en el BIOS.

- __(3)__ La conectividad física está compartida para el acceso de red y el acceso de almacenamiento en bloques, la plataforma CISCO siendo convergente.

- __(4)__ La oferta de GPU disponible en realidad evoluciona constantemente. El 1 de mayo de 2024, la oferta se basa en las GPU NVIDIA LOVELACE L40S. Por defecto, la lámina PERF4 se entrega con 2 tarjetas L40S de 48 GB de RAM. Póngase en contacto con el soporte para más precisión si es necesario.

La disponibilidad de la oferta de cálculo es del 99,99%, calculada mensualmente, incluyendo la ventana de mantenimiento. La elegibilidad en caso de incumplimiento del SLA está sujeta a la creación de un ticket de incidente. También debe tener al menos dos hosts por clúster y activar la funcionalidad __Alta Disponibilidad__ (HA).
Esta funcionalidad permite que su arquitectura reinicie automáticamente sus máquinas virtuales en el segundo hipervisor.
En el caso de que una zona de disponibilidad contenga solo un hipervisor, el reinicio automático no es posible.

## Red

El servicio de red en la plataforma IaaS de Cloud Temple se basa en una infraestructura de red basada en la tecnología VPLS, ofreciendo una segmentación flexible y eficiente para satisfacer las necesidades de los clientes en cuanto a conectividad e aislamiento de red.

### VLANs de nivel 2

Las VLANs proporcionadas en la oferta IaaS son de tipo __nivel 2__, ofreciendo un aislamiento de red completo y una configuración adaptable según las necesidades.

#### Conceptos principales

- __Compartido entre clústeres y zonas de disponibilidad (AZ)__ :
  - Las VLANs pueden ser compartidas entre las diferentes AZ y los diferentes clústeres que pertenecen al mismo tenant.
- __Propagación entre tenants__ :
  - Las VLANs pueden ser propagadas entre varios tenants que pertenecen a una misma organización, facilitando las comunicaciones internas.

---

### Rendimiento de red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo:

- __Latencia intra-AZ__ : Inferior a __3 ms__.
- __Latencia inter-AZ__ : Inferior a __5 ms__.

---

### Puntos clave

1. __Flexibilidad__ : Las VLANs pueden ser configuradas para adaptarse a entornos multi-clúster y multi-tenant.
2. __Alto rendimiento__ : Una latencia mínima asegura una comunicación rápida y eficiente entre las zonas de disponibilidad.
3. __Aislamiento y seguridad__ : Las VLANs de nivel 2 ofrecen una segmentación de red estricta para proteger los datos y los flujos.

---

## Almacenamiento en bloques

Cloud Temple ofrece varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/)
y [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite entregar el nivel de rendimiento requerido para los entornos de nuestros clientes gracias a la gran cantidad de caché de memoria integrada en los controladores y a la posibilidad de distribuir todas las IOPS de un servidor en varios SAN.
Se utiliza también para permitir la replicación de sus LUNs de almacenamiento en modo de bloque entre las zonas de disponibilidad o facilitar las intervenciones en los arrays de almacenamiento.

El almacenamiento es principalmente de tipo FLASH NVME dedicado a cargas de trabajo profesionales.
Los discos se utilizan por los arrays de almacenamiento en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para necesidades de archivado en un contexto de eficiencia económica. Varios niveles de rendimiento están disponibles:

| Referencia                         | Unidad | SKU                                          |
|-----------------------------------|--------|----------------------------------------------|
| FLASH - Esencial - 500 IOPS/To   | 1 GiB  | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Estándar - 1500 IOPS/To   | 1 GiB  | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 GiB  | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 GiB  | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 GiB  | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivo            | 1 TiB  | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *El rendimiento efectivo para una clase de almacenamiento está relacionado con el volumen realmente solicitado, según la noción "IOPS/To", entendiendo "límite de IOPS por Tera asignado",*

> *Así, un volumen de 0,5To en la clase de rendimiento 'Standard' tendrá un límite de IOPS limitado a 750 IOPS,*
> *De igual manera, un volumen de 10To en la clase de rendimiento 'Ultra' tendrá un límite de IOPS de 150000 IOPS,*

- *El límite de IOPS se aplica al volumen, por lo tanto, a la noción de Datastore para un entorno VMware,*
- *La disponibilidad del almacenamiento es del 99,99% medido mensualmente, incluida la ventana de mantenimiento,*
- *No hay restricción o cuota en lectura o escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Mass Storage'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500 GiB,*
- *Al usar un mecanismo de replicación de almacenamiento, los rendimientos deben ser idénticos en las dos zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" como compresión o deduplicación: cuando reserva 10 TiB de almacenamiento, tiene físicamente 10 TiB de almacenamiento útil implementados en las máquinas IBM.*
- *Las LUNs de almacenamiento están dedicadas al entorno del cliente.*

### Uso dentro de la oferta de cálculo vmware

Dentro del uso del almacenamiento en modo de bloque en forma de datastore en la oferta de cálculo VMware de Cloud Temple, __debe tener en cuenta varias consideraciones importantes__ :

1. __Archivo de intercambio (.VSWP) al iniciar las máquinas virtuales__ : Cuando una máquina virtual se inicia, crea un archivo .VSWP del tamaño de su memoria. Por lo tanto, para poder iniciar sus máquinas virtuales, siempre debe disponer en su datastore de un espacio libre equivalente a la suma de los tamaños de memoria de sus máquinas virtuales. Por ejemplo, si su datastore dispone de 1 TiB de almacenamiento en bloque y desea iniciar 10 máquinas virtuales de 64 GiB de memoria cada una, se necesitarán 640 GiB de espacio en disco. Sin este espacio, el inicio de las máquinas se verá limitado por la capacidad disponible para crear los archivos de intercambio.

2. __Espacio libre para los instantáneos de copia de seguridad__ : El servicio de copia de seguridad utiliza instantáneos (snapshots). Por lo tanto, siempre debe tener suficiente espacio libre para permitir la creación de un instantáneo durante la copia de seguridad de una máquina virtual. El tamaño del instantáneo depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar la copia de seguridad. En general, se recomienda mantener al menos un 10 % de espacio libre para esta operación.

3. __Gestión de discos dinámicos__ : Sea prudente con el uso de discos dinámicos. Si no controla su crecimiento, la falta de espacio físico puede provocar un congelamiento (freeze) de la máquina virtual en el mejor de los casos, o un fallo con corrupción en el peor de los casos. Es crucial supervisar cuidadosamente el espacio disponible en sus datastores cuando utilice este tipo de disco.

Una gestión proactiva del espacio en disco es esencial para garantizar el buen funcionamiento de sus máquinas virtuales y la fiabilidad de las copias de seguridad. Asegúrese siempre de disponer del espacio necesario para los archivos de intercambio, los instantáneos y el crecimiento de los discos dinámicos.

## Almacenamiento en modo backup

El almacenamiento dedicado a la copia de seguridad de sus máquinas virtuales se provisiona automáticamente por la plataforma dentro del límite del cupo solicitado.

| Referencia                | Unidad | SKU                                      |
|--------------------------|--------|------------------------------------------|
| MASS STORAGE - Archivo   | 1 TiB  | csp:(region):iaas:storage:bloc:backup:v1 |

### Replicación del almacenamiento en modo bloque

#### Principios

Para permitir la implementación de sus planes de recuperación ante desastres, cuando no es posible estar en situación de continuidad de actividad con mecanismos aplicativos y la replicación de máquinas virtuales no es adecuada, Cloud Temple propone __mecanismos de replicación del almacenamiento en modo bloque entre las zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican en las LUNs de almacenamiento de sus entornos, complementando las copias de seguridad.
La elección de utilizar un mecanismo de replicación en un entorno __depende de muchos factores, como su criticidad, la pérdida de datos tolerable o el rendimiento deseado__ para la aplicación.

Cloud Temple ofrece dos tipos de mecanismos desplegados en una configuración activo/pasivo :

- La replicación __asíncrona__ (o __'Global Mirror'__) : *La función __'Global Mirror'__ proporciona un proceso de copia asíncrona.
Cuando un host escribe en el volumen primario, la confirmación del final de la E/S se recibe antes de que la operación de escritura termine para la copia en el volumen secundario. Si se inicia una operación de conmutación por fallo, la aplicación debe recuperar y aplicar todas las actualizaciones que no se hayan confirmado en el volumen secundario.
Si las operaciones de E/S en el volumen primario se pausan durante un breve período,
el volumen secundario puede convertirse en una copia exacta del volumen primario. Esta función es comparable a un proceso de copia de seguridad continua en el que siempre faltan las últimas actualizaciones.
Cuando utilice Global Mirror con fines de recuperación ante desastres, debe reflexionar sobre la manera en que desea gestionar estas actualizaciones faltantes.*

- La replicación __síncrona__ (o __'Metro Mirror'__) : *La función __'Metro Mirror'__ es un tipo de copia a distancia que crea una copia síncrona
de los datos de un volumen primario a un volumen secundario. Con copias sincrónicas, las aplicaciones anfitrionas escriben en el volumen primario, pero no reciben la confirmación
de que la operación de escritura ha terminado hasta que los datos se hayan escrito en el volumen secundario. Esto garantiza que ambos volúmenes contengan datos idénticos cuando
la operación de copia haya terminado. Después de que la operación de copia inicial haya terminado, la función Metro Mirror
mantiene permanentemente una copia completamente sincronizada de los datos de origen en el sitio objetivo. __Desde el 1 de enero de 2024, la función 'Metro Mirror' ya no se comercializa.__*

Se define entonces un sitio denominado "activo" o "principal" y un sitio "pasivo" o "standby".
El plan de recuperación ante desastres se activa en caso de desastre o dentro del marco de una solicitud de prueba del PRA.
El sitio pasivo toma entonces el relevo del sitio activo.

#### Replicación asíncrona

Cuando sus cargas de trabajo requieren tiempos de recuperación de actividad cortos y no es aceptable o adecuado utilizar mecanismos de tipo replicación aplicativa / replicación de máquinas virtuales,
es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad de una misma región.

Esta oferta permite obtener un __RPO de 15 minutos__ y un __RTO inferior a 4 horas__. Permite reanudar mucho más rápidamente que
la implementación de una restauración de copia de seguridad.

En un volumen de almacenamiento en replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de
las dos zonas de disponibilidad trabajan en conjunto para realizar las operaciones de escritura en ambos sitios.
El sitio principal no espera la confirmación de escritura del sitio secundario.

Los pasos de una operación de escritura son los siguientes :

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__ : envía su solicitud al controlador SAN de su zona de disponibilidad,
2. El controlador SAN local solicita al controlador SAN de la zona remota que realice la operación de escritura,
3. el controlador SAN local no espera la confirmación del SAN remoto y realiza entonces la escritura localmente,
4. da __confirmación__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio remoto no acceden directamente a la LUN Global Mirror__ : se requiere una solicitud de servicio.

| SLA       | Descripción                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 minutos | En caso de incidente en el datacenter principal, la cantidad máxima de datos perdidos corresponde al máximo a las 15 últimas minutos de escritura |
| RTO < 4 horas | En caso de incidente en el datacenter principal, la recuperación de actividad está garantizada en menos de 4 horas según la complejidad de los entornos.          |

En caso de activación del PRA, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. La implementación de esta solución requiere tener reservada en el sitio 'standby' la capacidad de cálculo y la RAM para recuperar la actividad en caso de incidente.

El uso de esta tecnología también requiere la duplicación del espacio en disco: es necesario tener exactamente el mismo espacio en el sitio remoto que en el sitio local.

El uso de este mecanismo puede afectar el rendimiento de la aplicación en un 10 %. __Solo las clases de almacenamiento 500 IOPS/To, 1500 IOPS/To y 3000 IOPS/TO son compatibles.__

| Referencia                          | Unidad  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| ALMACENAMIENTO - Replicación Global SAN  | 1 TiB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *La oferta siendo asincrónica, es posible en caso de incidente que algunas operaciones de disco no hayan sido escritas en el sitio remoto. Por lo tanto, puede haber un riesgo en la coherencia de los datos, mitigado en el análisis de riesgo del plan de recuperación de actividad.*
- *La replicación del almacenamiento en modo bloque se realiza de forma oculta para las máquinas virtuales y las aplicaciones,*
- *En este sentido, es importante priorizar los escenarios de replicación aplicativa o posiblemente la replicación de máquina virtual,*
- *El cálculo y la memoria, en el sitio de recuperación, pueden reducirse para optimizar los costos si una situación degradada es aceptable para el negocio durante la ejecución del plan de recuperación de actividad.*

## Virtualización VMware

La oferta de virtualización VMware Cloud Temple calificada SecNumCloud se basa en la tecnología __VMware Vsphere__.

La plataforma es gestionada por Cloud Temple de forma automática (mantenimiento de condiciones de seguridad, mantenimiento en condiciones operativas, ...).
Es controlable a través de la interfaz gráfica de la consola Shiva o a través de las APIs asociadas.

*__Nota__* : *Por razones de seguridad vinculadas a la calificación SecNumCloud, __no es posible para el cliente acceder directamente a la plataforma de virtualización VMware__ (ningún acceso directo al vCenter, por ejemplo).
En efecto, la calificación SecNumCloud impone __una total segregación__ entre las interfaces de control de los activos técnicos y la interfaz del cliente (la consola Shiva).*

- Los productos implementados son VMware ESXi, VMware Vcenter y VMware Replication.
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que es controlada materialmente por la tecnología Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMWare vSan, sino únicamente SANs IBM en fibra channel 32G.*
- *No se implementa ninguna forma de optimización oculta (compresión, deduplicación, ...).*

### Definición de un cluster de host de cálculo ('Cpool')

El __'Cpool'__ es un agrupamiento de hipervisores VMware ESXi, también conocido como *'cluster ESX'*.

Los hosts presentes en un __'Cpool'__ pertenecen todos __al mismo tenant y a la misma zona de disponibilidad__ (AZ). Necesariamente deben tener la misma clase:
__no es posible mezclar modelos diferentes de host de cálculo dentro de un mismo cluster__.

Todos los hosts de cálculo se entregan con la máxima cantidad física de memoria, una limitación de uso de la RAM se aplica software a nivel del cluster para asegurar que corresponda a la RAM facturada.

Por defecto, cada host dispone de 128 GB de memoria activada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener como máximo 32 hipervisores. Más allá de este límite, será necesario crear un segundo cluster.

El almacenamiento puede ser compartido entre los __'Cpool'__.

### Asignación de Memoria para un 'Cpool'

La reserva de RAM es configurable por cluster. Puede reducir o aumentar la cantidad de RAM para que corresponda a sus necesidades a nivel del cluster.

__Atención a no superar un promedio del 85 % de consumo de memoria por host de cálculo__.
De hecho, la tecnología VMware utilizará un método de optimización de tipo compresión que puede afectar significativamente el rendimiento de sus cargas de trabajo y complicar el diagnóstico.
Del mismo modo, una presión muy alta de memoria en sus hosts forzará al hipervisor a descargar parte de su memoria en disco para responder a las necesidades de las máquinas virtuales.

Este caso, llamado __'Ballooning'__ afecta muy significativamente el rendimiento de todas las máquinas virtuales situadas en el almacenamiento (datastore) concernido.
__El diagnóstico es complicado en este contexto__, ya que su metrología notará impactos a nivel de CPU y no de memoria o almacenamiento.
Tenga en cuenta también que la primera cosa que hace el hipervisor al iniciar una máquina virtual es crear __un archivo de intercambio de memoria__ (.vswap) en el disco, del tamaño de la memoria de la máquina virtual concernida. Debe __tener esto en cuenta en el dimensionamiento de su almacenamiento__.

Cada host de cálculo se entrega con 128 GB de memoria activada software a nivel del __'Cpool'__ pero dispone físicamente de toda la memoria asignable.

Por ejemplo, para un cluster de tres hosts de tipo ```vmware:standard:v2```, la reserva de RAM al activar el _*'Cpool'*_ será de 3 x 128 GB = 384 GB de RAM.
Podrá extenderlo hasta un máximo de 3 x 384 GB = 1152 GB de memoria.

    Mínimo de memoria de un 'Cpool' = número de hosts X 128 GB de memoria
    Máximo de memoria de un 'Cpool' = número de hosts X cantidad de memoria física del host de cálculo

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple le proporciona un catálogo de `Plantillas` regularmente enriquecido y actualizado por nuestros equipos.
Actualmente incluye varias docenas de `Plantillas` e imágenes para montar en sus máquinas virtuales.

### Actualización de los hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores para garantizar la aplicación de parches de seguridad.
Sin embargo, la actualización de los hipervisores sigue siendo su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones comerciales.

El proceso de actualización es completamente automatizado. Para garantizar la continuidad del servicio, se requiere un mínimo de dos hipervisores por cluster durante la actualización. Asegúrese de disponer de los permisos necesarios para realizar estas acciones.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Pueden usarse para gestionar el uso de recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo que consumen muchos recursos.
En un __'Cpool'__ VMware, estas reglas suelen usarse para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar mediante la gestión de reglas:

- __Reglas de Afinidad__ : Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo host físico.
Se usan para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican frecuentemente juntas en el mismo servidor para reducir la latencia de red. Las reglas de afinidad son útiles en escenarios donde el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren comunicación rápida entre servidores.

- __Reglas de Anti-afinidad__ : Por el contrario, estas reglas aseguran que ciertas máquinas virtuales no se ejecuten en el mismo host físico. Son importantes para la disponibilidad y resiliencia, por ejemplo, para evitar que máquinas críticas se vean afectadas todas en caso de fallo de un solo servidor.
Las reglas de anti-afinidad son cruciales para aplicaciones que requieren alta disponibilidad, como en entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no desea que sus dos Directorios Activo estén en el mismo hipervisor.

Al crear una regla, define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla, su estado de activación (__'Estado'__) y las máquinas concernidas de su cluster de hosts.

*Nota: las reglas de afinidad/anti-afinidad propuestas en la consola son reglas que concernen a las máquinas virtuales entre sí (no hay reglas entre hipervisores y máquinas virtuales).*

### Replicación asincrónica de sus máquinas virtuales en entorno VMware

La replicación asincrónica de sus máquinas virtuales es un mecanismo que consiste en enviar al hipervisor de origen las operaciones de escritura al sitio standby a intervalos de tiempo regulares.

Después de una copia inicial en caliente de todo el almacenamiento activo al sitio standby, solo se envían las escrituras a intervalos regulares al sitio en espera.
Este intervalo depende del volumen de escritura (de cada hora a cada 24 horas).
La replicación de máquinas virtuales se basa en el mecanismo de instantáneas del hipervisor. En este sentido, esta solución tiene los mismos inconvenientes, en particular la sensibilidad al volumen de escrituras de la máquina virtual, ya que el proceso de instantánea es un mecanismo recursivo para cerrar la instantánea.

El ejemplo típico de máquina que no soporta el mecanismo de replicación de máquinas virtuales es un servidor FTP que recibe flujos en tiempo real de cámaras de seguridad. __La máquina pasa su tiempo escribiendo y no podrá cerrar una instantánea sin pausar el sistema operativo durante un período significativo (varias decenas de minutos)__. Si el hipervisor no puede cerrar la instantánea, exactamente eso hará, sin posibilidad de intervenir excepto corromper la máquina virtual.

| SLA             | Descripción                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H a 24H | En caso de incidente en el centro de datos principal, la cantidad máxima de datos perdidos es la de la última carga de escritura en el sitio de respaldo. |
| RTO < 15mn      | Operación de inicio de la máquina virtual detenida en el sitio remoto                                                                                |

En caso de necesidad, o en caso de fallo en una máquina del sitio principal, la máquina espejo en el sitio de respaldo se activa. La recuperación de actividad requiere haber reservado en el sitio de respaldo cálculo y RAM en modo de espera. Es necesario tener el mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.

| Referencia                         | Unidad | SKU                                             |  
|-----------------------------------|--------|-------------------------------------------------|
| PRA - Replicación VMware inter-AZ | 1 vm   | csp:(region):iaas:vmware:licencia:replicacion:v1 |

*__Nota__ : El cálculo del RPO mínimo debe definirse en función del ritmo de cambio en la máquina virtual.*

## Copia de seguridad de máquinas virtuales

Cloud Temple propone __una arquitectura de copia de seguridad cruzada nativa y no intercambiable__ (es obligatoria en la calificación secnumcloud francesa).

Las copias de seguridad se almacenan en una zona de disponibilidad y en un centro de datos físico diferente al que aloja la máquina virtual.

Esto permite protegerse en caso de fallo grave en el centro de datos de producción y restaurar en un centro de datos secundario (incendio, por ejemplo).

Esta solución incluye:

- La copia de seguridad en caliente de todos los discos,
- La presentación y el inicio instantáneo de una máquina virtual desde la infraestructura de almacenamiento masivo y la recarga en caliente en los SAN de producción,
- La restauración parcial de archivos desde la copia de seguridad,
- Una retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de copia de seguridad se basa en la solución *IBM Spectrum Protect Plus*, una solución de arquitectura sin agente, sencilla de usar y que permite la automatización de los procesos de copia de seguridad además de una optimización del espacio de almacenamiento masivo.

Las velocidades de copia de seguridad y restauración dependen del ritmo de cambio en los entornos. La política de copia de seguridad es configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota :__*

*__Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad__ que utiliza los mecanismos de instantáneas del hipervisor. Son típicamente las máquinas cuyas cargas de escritura en disco son constantes. No es posible que el hipervisor cierre la instantánea, lo que obliga a congelar la máquina virtual para poder finalizar la operación de cierre. Esta congelación puede durar varias horas y no es interrumpible.*

*La solución es excluir el disco que es objetivo de escrituras permanentes y realizar la copia de seguridad de los datos mediante otro método.*

| Referencia                                               | Unidad | SKU                            |
| -------------------------------------------------------- | ------ | ------------------------------ |
| SAUVEGARDE - Acceso al servicio IBM Spectrum Protect Plus | 1 VM   | csp:(region):iaas:backup:vm:v1 |

#### Crear una política de copia de seguridad

Para agregar una nueva política de copia de seguridad, es necesario realizar una solicitud al soporte. El soporte está disponible desde el icono de balsa en la parte superior derecha de la ventana.

La creación de una nueva política de copia de seguridad se realiza mediante __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de copia de seguridad
    Las características (x días, y semanas, z meses, ...)