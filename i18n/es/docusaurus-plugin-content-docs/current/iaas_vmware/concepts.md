---
title: Concepts
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para satisfacer las necesidades críticas de continuidad y recuperación de actividad, con un enfoque particular en sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de punta, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cálculo: **CISCO UCS**.
- Almacenamiento: **IBM Spectrum Virtualize**, **IBM FlashSystem** para el almacenamiento en bloque.
- Red: **JUNIPER**.
- Virtualización: **VMware**, ofreciendo una base confiable y probada para gestionar sus entornos cloud.
- Respaldo: **IBM Spectrum Protect Plus**, para la orquestación y almacenamiento de respaldos.

Esta arquitectura se basa en el modelo **VersaStack**, una alianza entre Cisco e IBM, garantizando una compatibilidad extendida con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque completamente automatizada gracias a APIs y un proveedor Terraform, la oferta IaaS de Cloud Temple ofrece una infraestructura única:

- **Recursos dedicados**: Las láminas de cálculo, volúmenes de almacenamiento y pilas de software (virtualización, copias de seguridad, firewalling, etc.) nunca se comparten entre clientes.
- **Máxima predictibilidad**: Usted controla las tasas de virtualización, la presión en IOPS sobre el almacenamiento y se beneficia de una facturación clara, por consumo mensual.

La plataforma está calificada **SecNumCloud** por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Principales funcionalidades

- Recursos de cálculo (CPU, RAM) dedicados y a demanda.
- Almacenamiento a demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para el almacenamiento o las máquinas virtuales.
- Control a través de la [Consola Shiva](../console/console.md) o en modo Infrastructure as Code gracias a las APIs y el proveedor Terraform.

## Ventajas

| Ventaja             | Descripción                                                                                                                                    |   
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Alojamiento de datos en Francia y conformidad RGPD.                                                                                            |   
| Seguridad           | Plataforma altamente securizada, calificada **SecNumCloud**, **HDS** (Alojamiento de Datos de Salud), **ISO 27001** y **ISAE 3402 tipo II**.   |  
| Alta disponibilidad | Tasa de disponibilidad de la plataforma de 99,99%, medida mensualmente, periodos de mantenimiento incluidos.                                    |   
| Resiliencia         | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                     |
| Automatización      | Plataforma completamente automatizada pensada para integrarse en un programa de transformación digital.                                         |
| On demand           | Recursos disponibles a demanda.                                                                                                                |













## Cálculo

las láminas proporcionadas por Cloud Temple son de tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Están completamente gestionadas por Cloud Temple (firmware, versión del SO, ...) a través de la consola Cloud Temple.

Varias categorías de láminas de cálculo están disponibles en el catálogo para soportar sus cargas de trabajo (Virtualización, Contenerización, ...).
Éstas presentan características y rendimientos diferentes para responder de la mejor manera a sus necesidades. El catálogo de láminas de cálculo evoluciona regularmente.

En el uso con una oferta de virtualización, un clúster de hipervisores está compuesto únicamente por láminas de cálculo del mismo tipo (no es posible mezclar láminas de diferentes tipos en un mismo clúster).

| Referencia            | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU **(4)**          | SKU para la oferta Vmware         |
|-----------------------|--------------|--------------------------------------------|---------------------------|----------------------|----------------------|-----------------------------------|
| Lámina ECO v3         | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)   | 20 / 40 hilos             | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3        |
| Lámina STANDARD v3    | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)   | 32 / 64 hilos             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3   |
| Lámina ADVANCE v3     | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)     | 48 / 96 hilos             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3    |
| Lámina PERFORMANCE 1 v3 | 384 Go     | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)  | 16 / 32 hilos             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3      |
| Lámina PERFORMANCE 2 v3 | 768 Go     | 3.00/3.6 GHz (Gold 6354 o equivalente)     | 36 / 72 hilos             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3      |
| Lámina PERFORMANCE 3 v3 | 1536 Go    | 2.60/3.5 GHz (Gold 6348 o equivalente)     | 56 / 112 hilos            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3      |
| Lámina PERFORMANCE 4 v3 | 512 Go     | 2.50/4.1 GHz (Intel 6426Y o equivalente)   | 32 / 64 hilos             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48go | csp:fr1:iaas:vmware:perf4:v3      |

__Notas__ :

- __(1)__ La cantidad de memoria entregada es la disponible físicamente en las láminas. No es posible cambiar la cantidad física de memoria de una lámina.

- __(2)__ La frecuencia base mínima / frecuencia turbo, expresada en GHz. Por defecto, los procesadores están configurados para un rendimiento máximo en la BIOS.

- __(3)__ La conectividad física está compartida para el acceso de red y el acceso al almacenamiento en bloque, ya que la plataforma CISCO es convergente.

- __(4)__ La oferta de GPU disponible realmente evoluciona continuamente. Al 1° de Mayo de 2024, la oferta está basada en los GPU NVIDIA LOVELACE L40S. Por defecto, la lámina PERF4 se entrega con 2 tarjetas L40S de 48 Go de RAM. Contacte al soporte para más detalle si es necesario.

La disponibilidad de la oferta de cálculo es del 99,99%, calculada mensualmente, periodo de mantenimiento incluido. La elegibilidad en caso de incumplimiento del SLA está sujeta a la creación de un ticket de incidente. También se debe poseer al menos dos hosts por clúster y activar la funcionalidad __High Availability__ (HA).
Esta funcionalidad permite que su arquitectura reinicie automáticamente sus máquinas virtuales en el segundo hipervisor.
En el supuesto caso de que una zona de disponibilidad contenga un solo hipervisor, el reinicio automático no es posible.














## Red
El servicio de red en la plataforma IaaS de Cloud Temple se basa en una infraestructura de red basada en la tecnología VPLS, ofreciendo una segmentación flexible y eficiente para satisfacer las necesidades de los clientes en términos de conectividad y aislamiento de red.

### VLANs de nivel 2

Los VLANs disponibles en la oferta IaaS son del tipo **nivel 2**, ofreciendo un aislamiento de red completo y una configuración adaptable según las necesidades.

#### Conceptos principales:
- **Compartición entre clústeres y zonas de disponibilidad (AZ)**: 
  - Los VLANs pueden ser compartidos entre diferentes AZ y diferentes clústeres pertenecientes al mismo tenant.
- **Propagación entre tenants**: 
  - Los VLANs pueden ser propagados entre varios tenants pertenecientes a una misma organización, facilitando las comunicaciones internas.

---

### Rendimiento de la red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo:
- **Latencia intra-AZ**: Inferior a **3 ms**.
- **Latencia inter-AZ**: Inferior a **5 ms**.

---

### Puntos clave

1. **Flexibilidad**: Los VLANs pueden ser configurados para adaptarse a los entornos multi-clúster y multi-tenant.
2. **Alto rendimiento**: Una latencia mínima asegura una comunicación rápida y eficiente entre las zonas de disponibilidad.
3. **Aislamiento y seguridad**: Los VLANs de nivel 2 ofrecen una segmentación de red estricta para proteger los datos y los flujos.

---













## Almacenamiento en bloque

Cloud Temple propone varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
y [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite entregar el nivel de rendimiento requerido para los entornos de nuestros clientes gracias a la gran cantidad de caché de memoria incorporada en los controladores y la capacidad de distribuir todas las IOPS de un servidor en varios SAN.

También se utiliza para permitir la replicación de sus LUNs de almacenamiento en modo bloque entre las zonas de disponibilidad o facilitar las intervenciones en las cabinas de almacenamiento.

El almacenamiento es principalmente del tipo FLASH NVME dedicado a cargas de trabajo profesionales.
Los discos son utilizados por las cabinas de almacenamiento en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).
Le clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para las necesidades de archivo en un contexto de eficiencia económica. Varios niveles de rendimiento están disponibles:

| Referencia                         | Unidad | SKU                                          | 
|------------------------------------|--------|----------------------------------------------|
| FLASH - Esencial - 500 IOPS/To     | 1 Gio  | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Estándar - 1500 IOPS/To    | 1 Gio  | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To     | 1 Gio  | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To  | 1 Gio  | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To      | 1 Gio  | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivage           | 1 Tio  | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *La disponibilidad del almacenamiento es del 99.99% medido mensualmente, intervalo de mantenimiento incluido,*
- *No hay restricciones ni cuotas en la lectura o escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Mass Storage'__,*
- *El tamaño mínimo de un LUN de almacenamiento es de 500Gio,*
- *Cuando se utiliza un mecanismo de replicación de almacenamiento, el rendimiento debe ser idéntico en ambas zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" como compresión o deduplicación: cuando reserva 10Tio de almacenamiento, tiene físicamente 10Tio útiles de almacenamiento implementados en las máquinas IBM.*
- *Los LUNs de almacenamiento están dedicados al entorno del cliente.*

### Utilización en el contexto de la oferta de cálculo vmware

En el contexto del uso del almacenamiento en modo bloque en forma de datastore en la oferta de cálculo VMware de Cloud Temple, **debe tener en cuenta varias consideraciones importantes**:

1. **Archivo de swap (.VSWP) al iniciar las máquinas virtuales**: Cuando una máquina virtual se inicia, crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder iniciar sus máquinas virtuales, siempre debe disponer en su datastore de un espacio libre equivalente a la suma de los tamaños de memoria de sus máquinas virtuales. Por ejemplo, si su datastore dispone de 1 Tio de almacenamiento en bloque y desea iniciar 10 máquinas virtuales de 64 Gio de memoria cada una, se necesitarán 640 Gio de espacio en disco. Sin este espacio, el inicio de las máquinas estará limitado por la capacidad disponible para crear los archivos de intercambio.

2. **Espacio libre para los snapshots de respaldo**: El servicio de respaldo utiliza instantáneas (snapshots). Por lo tanto, siempre debe tener suficiente espacio libre para permitir la creación de una instantánea durante el respaldo de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar el respaldo. En general, se recomienda mantener al menos un 10 % de espacio libre para esta operación.

3. **Gestión de discos dinámicos**: Sea prudente con el uso de discos dinámicos. Si no controla su crecimiento, la falta de espacio físico puede causar una congelación (freeze) de la máquina virtual en el mejor de los casos, o un fallo con corrupción en el peor. Es crucial monitorear atentamente el espacio disponible en sus datastores cuando utiliza este tipo de disco.

Una gestión proactiva del espacio en disco es esencial para asegurar el buen funcionamiento de sus máquinas virtuales y la fiabilidad de los respaldos. Asegúrese de tener siempre el espacio necesario para los archivos de swap, las instantáneas y el crecimiento de los discos dinámicos.

## Almacenamiento en modo backup

El almacenamiento dedicado al respaldo de sus máquinas virtuales es auto-provisionado por la plataforma [IBM Spectrum Protect Plus](backup.md) dentro del límite de la cuota solicitada. 

| Referencia                | Unidad | SKU                                      | 
|---------------------------|--------|------------------------------------------|
| MASS STORAGE - Archivage  | 1 Tio  | csp:(region):iaas:storage:bloc:backup:v1 |


### Replicación del almacenamiento en modo bloque

#### Principios

Para permitir la implementación de sus planes de recuperación de desastres, cuando no es posible estar en una situación de continuidad de actividad con mecanismos aplicativos y la replicación de máquinas virtuales no es adecuada, Cloud Temple ofrece __mecanismos de replicación del almacenamiento en modo bloque entre zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican a los LUNs de almacenamiento de sus entornos, en complemento de los respaldos. La elección de utilizar un mecanismo de replicación en un entorno __depende de muchos factores, incluyendo su criticidad, la pérdida de datos tolerada o el rendimiento deseado__ para la aplicación. 

Cloud Temple ofrece dos tipos de mecanismos desplegados en una configuración activo/pasivo: 

- La replicación __asíncrona__ (o __'Global Mirror'__) : *La función __'Global Mirror'__ proporciona un proceso de copia asíncrono. 
Cuando un host escribe en el volumen primario, la confirmación de la finalización de la E/S se recibe antes de que la operación de escritura se complete para la copia en el volumen secundario. Si se inicia una operación de conmutación por error, la aplicación debe recuperar y aplicar todas las actualizaciones que no se confirmaron en el volumen secundario. Si las operaciones de E/S en el volumen primario se pausan por un corto período, el volumen secundario puede convertirse en una copia exacta del volumen primario. Esta función es comparable a un proceso de respaldo continuo en el que siempre faltan las últimas actualizaciones. Cuando usa Global Mirror con fines de recuperación tras desastres, debe pensar en cómo desea gestionar estas actualizaciones faltantes.*

- La replicación __síncrona__ (o __'Metro Mirror'__) : *La función __'Metro Mirror'__ es un tipo de copia remota que crea una copia síncrona de los datos de un volumen primario a un volumen secundario. Con copias síncronas, las aplicaciones host escriben en el volumen primario pero no reciben confirmación de que la operación de escritura se ha completado hasta que los datos se escriben en el volumen secundario. Esto garantiza que ambos volúmenes contienen datos idénticos cuando la operación de copia se completa. Después de que la operación de copia inicial se completa, la función Metro Mirror mantiene permanentemente una copia completamente sincronizada de los datos de origen en el sitio de destino. __Desde el 1° de enero de 2024, la función 'Metro Mirror' no se comercializa más.__*

Se define un sitio como "activo" o "principal" y un sitio "pasivo" o "standby".
El plan de recuperación de desastres se activa en caso de siniestro o en el marco de una solicitud de prueba del PRA. 
El sitio pasivo toma entonces el relevo del sitio activo.

#### Replicación asíncrona

Cuando sus cargas de trabajo requieren tiempos de recuperación cortos y no es aceptable o adecuado usar mecanismos de tipo replicación aplicativa / replicación de máquinas virtuales, es posible replicar un LUN de almacenamiento SAN entre dos zonas de disponibilidad de la misma región.

Esta oferta permite obtener un __RPO de 15Mn__ y un __RTO inferior a 4H__. Permite recuperarse mucho más rápido que la implementación de una restauración de respaldo.

En un volumen de almacenamiento en replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de las dos zonas de disponibilidad trabajan en conjunto para realizar las operaciones de escritura en los dos sitios. El sitio principal no espera la confirmación de escritura del sitio secundario.

Las etapas de una operación de escritura son las siguientes:

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global Mirror__: envía su solicitud al controlador SAN de su zona de disponibilidad,
2. El controlador SAN local solicita al controlador SAN de la zona distante realizar la operación de escritura,
3. El controlador SAN local no espera la confirmación del SAN distante y realiza entonces la escritura localmente,
4. Da __la confirmación__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio distante no acceden directamente al LUN Global Mirror__: se necesita una solicitud de servicio.

| SLA       | Descripción                                                                                                                                         |   
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | En caso de desastre en el centro de datos principal, la cantidad máxima de datos perdidos corresponde a un máximo de los últimos 15 minutos de escritura. |
| RTO < 4H  | En caso de desastre en el centro de datos principal, la recuperación de actividad está garantizada en menos de 4 horas según la complejidad de los entornos. |

En caso de activación del PRA, el equipo de Cloud Temple realiza una operación de presentación del LUN __'Global Mirror'__ a los hipervisores distantes para que puedan acceder a los datos. La implementación de esta solución requiere entonces haber reservado en el sitio 'standby' los recursos de cálculo y RAM para recuperar la actividad en caso de desastre.

El uso de esta tecnología requiere también el duplicado del espacio en disco: es necesario tener exactamente el mismo espacio en el sitio distante que en el sitio local. 
L'usage de ce mécanisme peut impacter la performance de l'application à hauteur de 10 %. __Seules les clases de almacenamiento 500 Iops/To, 1500 Iops/To y 3000 Iops/TO son compatibles.__


| Référence                          | Unidad | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| ALMACENAMIENTO - Replicación Global SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* : 

- *La oferta siendo asíncrona, es posible que en caso de desastre algunas operaciones de disco no se hayan escrito en el sitio remoto. Por lo tanto, puede haber un riesgo respecto a la coherencia de los datos, a mitigar en el análisis de riesgos del plan de recuperación de actividad.*
- *La replicación del almacenamiento en modo bloque se realiza de manera transparente para las máquinas virtuales y las aplicaciones.*
- *En este sentido, es importante priorizar los escenarios de replicación de aplicaciones o, eventualmente, de replicación de máquinas virtuales.*
- *El cálculo y la memoria en el sitio de recuperación pueden reducirse para optimizar los costos si una situación degradada es aceptable para el negocio durante la ejecución del plan de recuperación de actividad.*














## Virtualización VMware

La oferta de virtualización VMware Cloud Temple calificada SecNumCloud está basada en la tecnología __VMware Vsphere__.

La plataforma está gestionada por Cloud Temple de manera automática (mantenimiento de condiciones de seguridad, mantenimiento en condición operativa, ...).
Es controlable a través de la interfaz gráfica de la consola Shiva o a través de las APIs asociadas.

*__Observación__* : *Por razones de seguridad relacionadas con la calificación SecNumCloud,
__no es posible para el cliente acceder directamente a la plataforma de virtualización VMware__ (sin acceso directo al vCenter en particular).
De hecho, la calificación SecNumCloud impone __una total segregación__ entre las interfaces de control de los activos técnicos y la interfaz del cliente (la consola Shiva).*

- Los productos implementados son VMware ESXi, VMware Vcenter y VMware Replication.
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que es controlada materialmente por la tecnología Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMWare vSan, sino únicamente SANs IBM en canal de fibra 32G.*
- *No se implementa ninguna forma de optimización oculta (compresión, deduplicación, ...).*

### Definición de un clúster de blades de cálculo ('Cpool')

El __'Cpool'__ es un agrupamiento de hipervisores VMware ESXi, también conocido como *'clúster ESX'*.

Los hosts presentes en un __'Cpool'__ pertenecen todos __al mismo tenant y a la misma zona de disponibilidad__ (AZ). Deben necesariamente tener la misma clase:
__no es posible mezclar modelos diferentes de blades de cálculo dentro del mismo clúster__.

Todos los blades de cálculo se entregan con el máximo físico de memoria, aplicándose una limitación de uso de la RAM a nivel del software del clúster para asegurarse de que corresponde a la RAM facturada.

Por defecto, cada blade dispone de 128 GB de memoria activada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener un máximo de 32 hipervisores. Más allá de este límite, será necesario crear un segundo clúster.

El almacenamiento puede ser compartido entre los __'Cpool'__.

### Asignación de Memoria para un 'Cpool'

La reserva de la RAM es configurable por clúster. Puede reducir o aumentar la cantidad de RAM para que se ajuste a sus necesidades a escala del clúster.

__Atención a no sobrepasar un promedio de 85 % de consumo de memoria por blade de cálculo__.
De hecho, la tecnología VMware utilizará un método de optimización de tipo compresión que puede impactar fuertemente el rendimiento de sus cargas de trabajo y complicar el diagnóstico.
Asimismo, una presión de memoria excesiva en sus blades de cálculo forzará al hipervisor a descargar una parte de su memoria en disco para satisfacer las necesidades de las máquinas virtuales.

Este caso, llamado __'Ballooning'__ impacta muy fuertemente el rendimiento general de las máquinas virtuales ubicadas en el almacenamiento (datastore) afectado.
__El diagnóstico es complicado en este contexto__, porque su metrología observará impactos a nivel de la CPU y no de la memoria o del almacenamiento.
Tenga también en cuenta que la primera cosa que hace el hipervisor cuando arranca una máquina virtual es crear __un archivo de swap de memoria__ (.vswap) en
el disco, del tamaño de la memoria de la máquina virtual en cuestión. Debe __tener esto en cuenta en la dimensionación de su almacenamiento__.

Cada blade de cálculo se entrega con 128GB de memoria activada a nivel de software en el __'Cpool'__, pero dispone físicamente de la totalidad de la memoria asignable.

Por ejemplo, para un clúster de tres hosts de tipo ```vmware:standard:v2```, la reserva de la RAM al activar el __'Cpool'_ será de 3 x 128GB = 384 GB de RAM.
Podrá extenderla al máximo a 3 x 384GB = 1152GB de memoria.

    Mínimo de memoria de un 'Cpool' = número de hosts X 128GB de memoria
    Máximo de memoria de un 'Cpool' = número de hosts X la cantidad de memoria física del blade de cálculo

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple pone a su disposición un catálogo de `Templates` regularmente enriquecido y actualizado por nuestros equipos.
Incluye hoy en día varias docenas de `Templates` e imágenes para montar en sus máquinas virtuales.

### Actualización de los Hipervisores
Cloud Temple proporciona regularmente builds para los hipervisores para asegurar la aplicación de parches de seguridad. 
Sin embargo, la actualización de los hipervisores sigue siendo su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones de negocio.

El proceso de actualización está completamente automatizado. Para garantizar la continuidad del servicio, se requiere un mínimo de dos hipervisores 
por cluster durante la actualización. Asegúrese de disponer de los permisos necesarios para realizar estas acciones.


### Gestión de la Afinidad de sus Máquinas Virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Pueden ser utilizadas para gestionar el uso de los recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo que consumen muchos recursos.
En un __'Cpool'__ VMware, estas reglas son frecuentemente utilizadas para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar gracias a la gestión de reglas:

- __Reglas de Afinidad__ : Estas reglas aseguran que ciertas máquinas virtuales sean ejecutadas en el mismo host físico.
Son utilizadas para mejorar el rendimiento al mantener las máquinas virtuales que comunican frecuentemente
juntas en el mismo servidor para reducir la latencia de red. Las reglas de afinidad son útiles en escenarios
donde el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre los servidores.

- __Reglas de Anti-afinidad__ : Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no sean ejecutadas 
en el mismo host físico. Son importantes para la disponibilidad y la resiliencia, por ejemplo,
para evitar que las máquinas críticas se vean todas afectadas en caso de falla de un único servidor.
Las reglas de anti-afinidad son cruciales para aplicaciones que requieren alta disponibilidad,
como en entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no se desea que sus dos Active Directorys estén en el mismo hipervisor.

Al crear una regla, define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla,
su estado de activación (__'Status'__) y las máquinas involucradas en su clúster de hipervisores.

*Observación: las reglas de afinidad / anti-afinidad propuestas en la consola son reglas relativas a las máquinas virtuales entre ellas (sin reglas entre hipervisores y máquinas virtuales).*


### Replicación asíncrona de sus máquinas virtuales en entorno VMware

La replicación asíncrona de sus máquinas virtuales es un mecanismo que consiste en empujar a nivel del hipervisor de origen las operaciones de escritura al sitio standby en intervalos de tiempo regulares. 

Después de una copia inicial en caliente de todo el almacenamiento activo en el sitio standby, solo se empujan las escrituras a intervalos regulares al sitio en standby. 
Este intervalo depende del volumen de escritura (desde cada hora hasta cada 24 horas).

La replicación de las máquinas virtuales se basa en el mecanismo de instantáneas del hipervisor. En este sentido, 
esta solución tiene los mismos inconvenientes, particularmente la sensibilidad al volumen de escrituras de la máquina virtual,
siendo el proceso de instantánea un mecanismo recursivo para el cierre de la instantánea.

El ejemplo típico de una máquina que no soporta el mecanismo de replicación de máquinas virtuales es un 
servidor FTP que recibe flujos en tiempo real de cámaras de vigilancia. __La máquina pasa su tiempo escribiendo y no será
capaz de cerrar una instantánea sin poner en pausa el sistema operativo durante un período de tiempo significativo
(varios decenas de minutos)__. Si el hipervisor no logra cerrar la instantánea, es exactamente lo que hará,
sin posibilidad de intervenir salvo que se corrompa la máquina virtual.
| SLA             | Descripción                                                                                                                                                |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H a 24H | En caso de desastre en el datacenter principal, la cantidad máxima de datos perdidos es la de la última escritura empujada en el sitio de respaldo.        |
| RTO  < 15mn     | Operación de arranque de la máquina virtual detenida en el sitio remoto                                                                                   |


En caso de necesidad o defecto en una máquina del sitio principal, la máquina espejo en el sitio de respaldo se activa. 
La recuperación de actividad requiere haber reservado en el sitio de respaldo la capacidad de cálculo y RAM en espera. 
Es necesario tener el mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.


| Referencia                        | Unidad | SKU                                             |  
|-----------------------------------|--------|-------------------------------------------------|
| PRA - Replicación VMware inter-AZ | 1 vm   | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : El cálculo del RPO mínimo debe definirse según la tasa de cambio en la máquina virtual.*













## Copia de seguridad de máquinas virtuales
Cloud Temple propone __una arquitectura de copia de seguridad cruzada nativa y no deshabilitable__ (es obligatoria en la certificación secnumcloud francesa).

Las copias de seguridad se almacenan en una zona de disponibilidad y en un datacenter físico diferente al que alberga la máquina virtual.

Esto permite protegerse en caso de un fallo mayor en el datacenter de producción y restaurar en un datacenter secundario (por ejemplo, un incendio).

Esta solución incluye:

- La copia de seguridad fuera del sitio en caliente de todos los discos,
- La presentación y el arranque instantáneo de una máquina virtual desde la infraestructura de almacenamiento masivo y la recarga en caliente en los SAN de producción,
- La restauración parcial de archivos desde la copia de seguridad,
- Una retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de copia de seguridad se basa en la solución *IBM Spectrum Protect Plus*, una solución con arquitectura sin agente, 
sencilla de usar y que permite la automatización de los procesos de copia de seguridad además de una optimización del espacio de almacenamiento masivo.

Las velocidades de copias de seguridad y de restauraciones dependen de la tasa de cambio en los entornos.
La política de copia de seguridad es configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota :__*

*__Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad__ que utiliza los mecanismos de instantáneas del hipervisor.
Son típicamente las máquinas cuyas cargas de escritura en disco son constantes. No es posible para el hipervisor cerrar la instantánea lo que 
obliga a congelar la máquina virtual para finalizar la operación de cierre. Este congelamiento puede durar varias horas y no es detenible.*

*La solución es entonces excluir el disco que es objeto de escrituras permanentes y recoger los datos con otro método.*

| Referencia                                              | Unidad | SKU                            |
| --------------------------------------------------------|------- | ------------------------------ |
| COPIA DE SEGURIDAD - Acceso al servicio IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Crear una política de copia de seguridad
Para añadir una nueva política de copia de seguridad, se debe hacer una solicitud al soporte. El soporte es accesible desde el icono de boya en la parte superior derecha de la ventana.

La creación de una nueva política de copia de seguridad se realiza por __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y n° de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de copia de seguridad
    Las características (x días, y semanas, z meses, ...)