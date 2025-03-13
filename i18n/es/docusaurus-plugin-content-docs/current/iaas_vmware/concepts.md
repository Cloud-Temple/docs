---
title: Conceptos
---

La oferta de __IaaS (Infraestructura como Servicio)__ de Cloud Temple está diseñada para satisfacer las necesidades críticas de continuidad y recuperación de negocio, con un enfoque particular en sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cómputo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para almacenamiento en bloques.
- Red: __JUNIPER__.
- Virtualización: __VMware__, que proporciona una base fiable y probada para gestionar sus entornos cloud.
- Respaldo: __IBM Spectrum Protect Plus__, para la orquestación y almacenamiento de copias de seguridad.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, garantizando una amplia compatibilidad con los principales proveedores de software.

## Una infraestructura dedicada y automatizada

Aunque está completamente automatizada a través de APIs y un proveedor Terraform, la oferta IaaS de Cloud Temple proporciona una infraestructura única:

- __Recursos dedicados__: Las cuchillas de cómputo, volúmenes de almacenamiento y pilas de software (virtualización, respaldo, cortafuegos, etc.) nunca se comparten entre clientes.
- __Máxima previsibilidad__: Usted controla las tasas de virtualización, la presión de IOPS en el almacenamiento y se beneficia de una facturación clara, basada en el consumo mensual.

La plataforma está calificada como __SecNumCloud__ por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Características principales

- Recursos de cómputo dedicados y bajo demanda (CPU, RAM).
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infraestructura como Código mediante APIs y el proveedor Terraform.

## Ventajas

| Ventaja              | Descripción                                                                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital    | Alojamiento de datos en Francia y conformidad con el RGPD.                                                                                   |
| Seguridad            | Plataforma altamente segura, calificada __SecNumCloud__, __HDS__ (Alojamiento de Datos de Salud), __ISO 27001__ e __ISAE 3402 tipo II__.     |
| Alta disponibilidad  | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo ventanas de mantenimiento.                               |
| Resiliencia          | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                    |
| Automatización       | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                      |
| Bajo demanda         | Recursos disponibles según necesidad.                                                                                                        |

## Regiones y zonas de disponibilidad

El producto IaaS VMware se despliega en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) forma parte de una [región](../additional_content/concepts_regional.md).

Este tipo de despliegue permite elegir la ubicación de los clústeres y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de incidente.

---

## Cómputo

Las cuchillas proporcionadas por Cloud Temple son de tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Son completamente gestionadas por Cloud Temple (firmware, versión de sistema operativo, etc.) a través de la consola Cloud Temple.

Varias categorías de cuchillas de cómputo están disponibles en el catálogo para soportar sus cargas de trabajo (Virtualización, Contenedorización, etc.).
Estas presentan características y rendimientos diferentes para responder mejor a sus necesidades. El catálogo de cuchillas de cómputo evoluciona regularmente.

En el marco del uso con una oferta de virtualización, un clúster de hipervisores está únicamente compuesto por cuchillas de cómputo del mismo tipo (no es posible mezclar cuchillas de diferentes tipos en un mismo clúster).

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          | SKU para la oferta VMware      |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Cuchilla ECO v3       | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos              | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Cuchilla STANDARD v3  | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Cuchilla ADVANCE v3   | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Cuchilla PERFORMANCE 1 v3 | 384 GB   | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Cuchilla PERFORMANCE 2 v3 | 768 GB   | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos              | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Cuchilla PERFORMANCE 3 v3 | 1536 GB  | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos             | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Cuchilla PERFORMANCE 4 v3 | 512 GB   | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos              | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Observaciones__:

- __(1)__ La cantidad de memoria entregada es la que está físicamente disponible en las cuchillas. No es posible cambiar la cantidad física de memoria de una cuchilla.

- __(2)__ La frecuencia base mínima / frecuencia turbo, expresada en GHz. Por defecto, los procesadores están configurados para un rendimiento máximo a nivel de BIOS.

- __(3)__ La conectividad física se comparte para el acceso a la red y el acceso al almacenamiento en bloques, ya que la plataforma CISCO es convergente.

- __(4)__ La oferta de GPU disponible evoluciona continuamente. A partir del 1 de mayo de 2024, la oferta se basa en las GPU NVIDIA LOVELACE L40S. Por defecto, la cuchilla PERF4 se entrega con 2 tarjetas L40S de 48 GB de RAM. Contacte con el soporte para más detalles si es necesario.

La disponibilidad de la oferta de cómputo es del 99,99%, calculada mensualmente, incluyendo ventanas de mantenimiento. La elegibilidad en caso de incumplimiento del SLA está sujeta a
la creación de un ticket de incidente. También debe tener al menos dos hosts por clúster y activar la función __High Availability__ (HA).
Esta función permite a su arquitectura reiniciar automáticamente sus máquinas virtuales en el segundo hipervisor.
En el caso de que una zona de disponibilidad contenga un solo hipervisor, el reinicio automático no es posible.

## Red

El servicio de red en la plataforma IaaS de Cloud Temple se basa en una infraestructura de red basada en la tecnología VPLS, ofreciendo una segmentación flexible y de alto rendimiento para satisfacer las necesidades de los clientes en términos de conectividad y aislamiento de red.

### VLANs de nivel 2

Las VLANs proporcionadas en la oferta IaaS son de tipo __nivel 2__, ofreciendo un aislamiento de red completo y una configuración adaptable según las necesidades.

#### Conceptos principales

- __Compartición entre clústeres y zonas de disponibilidad (AZ)__:
  - Las VLANs pueden compartirse entre diferentes AZ y diferentes clústeres pertenecientes al mismo tenant.
- __Propagación entre tenants__:
  - Las VLANs pueden propagarse entre varios tenants pertenecientes a una misma organización, facilitando las comunicaciones internas.

---

### Rendimiento de red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo:

- __Latencia intra-AZ__: Inferior a __3 ms__.
- __Latencia inter-AZ__: Inferior a __5 ms__.

---

### Puntos clave

1. __Flexibilidad__: Las VLANs pueden configurarse para adaptarse a entornos multi-clúster y multi-tenant.
2. __Alto rendimiento__: Una latencia mínima asegura una comunicación rápida y eficiente entre las zonas de disponibilidad.
3. __Aislamiento y seguridad__: Las VLANs de nivel 2 ofrecen una segmentación de red estricta para proteger los datos y los flujos.

---

## Almacenamiento en bloques

Cloud Temple ofrece varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/)
e [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite entregar el nivel de rendimiento requerido para los entornos de nuestros clientes gracias a la gran
cantidad de memoria caché incorporada en los controladores y a la posibilidad de distribuir todas las IOPS
de un servidor en múltiples SANs.

También se utiliza para permitir la replicación de sus LUNs de almacenamiento en modo bloque entre
zonas de disponibilidad o facilitar las intervenciones en las matrices de almacenamiento.

El almacenamiento es principalmente de tipo FLASH NVME dedicado a cargas de trabajo profesionales.
Los discos son utilizados por las matrices de almacenamiento en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para necesidades de archivo
en un contexto de eficiencia económica. Varios niveles de rendimiento están disponibles:

| Referencia                         | Unidad | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Esencial - 500 IOPS/TB    | 1 GB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Estándar - 1500 IOPS/TB   | 1 GB | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GB | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivo            | 1 TB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *El rendimiento efectivo para una clase de almacenamiento está vinculado al volumen efectivamente pedido, según la noción "IOPS/TB", entendida como "límite de IOPS por Tera asignado",*

> *Así, un volumen de 0,5TB en la clase de rendimiento 'Estándar' tendrá una limitación de IOPS con un tope de 750 IOPS,*
> *Del mismo modo, un volumen de 10TB en la clase de rendimiento 'Ultra' tendrá una limitación de IOPS de hasta 150.000 IOPS,*

- *La limitación de IOPS se aplica al volumen, por lo tanto a la noción de Datastore para un entorno VMware,*
- *La disponibilidad del almacenamiento es del 99,99% medida mensualmente, incluyendo ventanas de mantenimiento,*
- *No hay restricciones o cuotas en la lectura o escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Mass Storage'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500GB,*
- *Al utilizar un mecanismo de replicación de almacenamiento, los rendimientos deben ser idénticos en las dos zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" como compresión o deduplicación: cuando reserva 10TB de almacenamiento, tiene físicamente 10TB útiles de almacenamiento implementados en las máquinas IBM.*
- *Las LUNs de almacenamiento están dedicadas al entorno del cliente.*

### Uso en el marco de la oferta de cómputo VMware

En el marco de la utilización del almacenamiento en modo bloque en forma de datastore en la oferta de cómputo VMware de Cloud Temple, __debe tener en cuenta varias consideraciones importantes__:

1. __Archivo de intercambio (.VSWP) al iniciar las máquinas virtuales__: Cuando una máquina virtual arranca, crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder iniciar sus máquinas virtuales, siempre debe disponer en su datastore de un espacio libre equivalente a la suma de los tamaños de memoria de sus máquinas virtuales. Por ejemplo, si su datastore dispone de 1 TB de almacenamiento en bloques y desea iniciar 10 máquinas virtuales de 64 GB de memoria cada una, serán necesarios 640 GB de espacio en disco. Sin este espacio, el arranque de las máquinas estará limitado por la capacidad disponible para crear los archivos de intercambio.

2. __Espacio libre para las instantáneas de respaldo__: El servicio de respaldo utiliza instantáneas (snapshots). Por lo tanto, siempre debe tener suficiente espacio libre para permitir la creación de una instantánea durante la copia de seguridad de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar la copia de seguridad. Como regla general, se recomienda mantener al menos un 10% de espacio libre para esta operación.

3. __Gestión de discos dinámicos__: Tenga cuidado con el uso de discos dinámicos. Si no controla su crecimiento, una falta de espacio físico puede provocar una congelación (freeze) de la máquina virtual en el mejor de los casos, o un bloqueo con corrupción en el peor de los casos. Es crucial vigilar atentamente el espacio disponible en sus datastores cuando utiliza este tipo de disco.

Una gestión proactiva del espacio en disco es esencial para garantizar el buen funcionamiento de sus máquinas virtuales y la fiabilidad de las copias de seguridad. Asegúrese de disponer siempre del espacio necesario para los archivos de intercambio, las instantáneas y el crecimiento de los discos dinámicos.

## Almacenamiento en modo respaldo

El almacenamiento dedicado a la copia de seguridad de sus máquinas virtuales es auto-aprovisionado por la plataforma dentro del límite de la cuota pedida.

| Referencia                | Unidad | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivo   | 1 TB | csp:(region):iaas:storage:bloc:backup:v1 |

### Replicación del almacenamiento en modo bloque

#### Principios

Para permitir la implementación de sus planes de recuperación ante desastres, cuando no es posible estar en
situación de continuidad de actividad con mecanismos aplicativos y que la replicación de máquinas virtuales
no es adecuada, Cloud Temple ofrece __mecanismos de replicación del almacenamiento en modo bloque entre las zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican a las LUNs de almacenamiento de sus entornos, como complemento a las copias de seguridad.
La elección de utilizar un mecanismo de replicación en un entorno __depende de numerosos factores como su criticidad, la pérdida de datos tolerada o el rendimiento objetivo__ para la aplicación.

Cloud Temple ofrece dos tipos de mecanismos desplegados en una configuración activo/pasivo:

- La replicación __asíncrona__ (o __'Global Mirror'__): *La función __'Global Mirror'__ proporciona un proceso de copia asíncrono.
Cuando un host escribe en el volumen primario, la confirmación de la finalización de la E/S se recibe antes de que la operación
de escritura se complete para la copia en el volumen secundario. Si se inicia una operación de conmutación, la aplicación
debe recuperar y aplicar todas las actualizaciones que no han sido confirmadas en el volumen secundario.
Si las operaciones de E/S en el volumen primario se pausan durante un breve período,
el volumen secundario puede convertirse en una correspondencia exacta del volumen primario. Esta función es comparable a un proceso
de copia de seguridad continua en el que siempre faltan las últimas actualizaciones.
Cuando utiliza Global Mirror para fines de recuperación ante desastres, debe reflexionar sobre cómo desea gestionar estas actualizaciones faltantes.*

- La replicación __síncrona__ (o __'Metro Mirror'__): *La función __'Metro Mirror'__ es un tipo de copia remota que crea una copia síncrona
de los datos de un volumen primario a un volumen secundario. Con copias síncronas, las aplicaciones host escriben en el volumen primario, pero no reciben confirmación
de que la operación de escritura ha finalizado hasta que los datos se escriben en el volumen secundario. Esto garantiza que ambos volúmenes contengan datos idénticos cuando
la operación de copia se completa. Después de que la operación de copia inicial se completa, la función Metro Mirror
mantiene permanentemente una copia totalmente sincronizada de los datos de origen en el sitio de destino. __Desde el 1 de enero de 2024, la función 'Metro Mirror' ya no se comercializa.__*

Se define entonces un sitio denominado "activo" o "principal" y un sitio "pasivo" o "standby".
El plan de recuperación ante desastres se activa en caso de siniestro o en el marco de una solicitud de prueba del PRA.
El sitio pasivo toma entonces el relevo del sitio activo.

#### Replicación asíncrona

Cuando sus cargas de trabajo requieren tiempos de recuperación de actividad cortos y no es aceptable
o adecuado utilizar mecanismos de tipo replicaciones aplicativas / replicación de máquinas virtuales,
es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad de una misma región.

Esta oferta permite obtener un __RPO de 15 minutos__ y un __RTO inferior a 4 horas__. Permite reiniciar mucho más rápidamente que
la implementación de una restauración de copia de seguridad.

En un volumen de almacenamiento en replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de
las dos zonas de disponibilidad trabajan conjuntamente para realizar las operaciones de escritura en ambos sitios.
El sitio maestro no espera la confirmación de escritura del sitio esclavo.

Las etapas de una operación de escritura son las siguientes:

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__: envía su solicitud al controlador SAN de su zona de disponibilidad,
2. El controlador SAN local solicita al controlador SAN de la zona remota que realice la operación de escritura,
3. El controlador SAN local no espera la confirmación del SAN remoto y realiza entonces la escritura localmente,
4. Da __confirmación__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio remoto no acceden directamente a la LUN Global Mirror__: Es necesaria una solicitud de servicio.

| SLA       | Descripción                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15min | En caso de siniestro en el datacenter principal, la cantidad máxima de datos perdidos corresponde como máximo a los últimos 15 minutos de escritura |
| RTO < 4H  | En caso de siniestro en el datacenter principal, la recuperación de actividad se garantiza en menos de 4 horas según la complejidad de los entornos |

En caso de activación del PRA, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. La implementación de esta solución requiere, por tanto, haber reservado en el sitio 'standby' recursos de cómputo y RAM para reanudar la actividad en caso de siniestro.

El uso de esta tecnología también requiere duplicar el espacio en disco: es necesario tener exactamente el mismo espacio en el sitio remoto que en el sitio local.

El uso de este mecanismo puede impactar el rendimiento de la aplicación hasta en un 10%. __Solo las clases de almacenamiento 500 Iops/TB, 1500 Iops/TB y 3000 Iops/TB son compatibles.__

| Referencia                          | Unidad  | SKU                                               |
|------------------------------------|--------|---------------------------------------------------|
| ALMACENAMIENTO - Replicación Global SAN | 1 TB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *Al ser la oferta asíncrona, es posible que durante un siniestro algunas operaciones de disco no hayan sido escritas en el sitio remoto. Puede haber, por tanto, un riesgo para la coherencia de los datos, a mitigar en el análisis de riesgos del plan de recuperación ante desastres.*
- *La replicación del almacenamiento en modo bloque se hace de forma oculta para las máquinas virtuales y las aplicaciones,*
- *En este sentido, es importante privilegiar los escenarios de replicación aplicativa o eventualmente de replicación de máquina virtual,*
- *El cómputo y la memoria, en el sitio de recuperación, pueden reducirse para optimizar los costes si una situación degradada es aceptable para el negocio durante la acción del plan de recuperación ante desastres.*

## Virtualización VMware

La oferta de virtualización VMware de Cloud Temple calificada SecNumCloud se basa en la tecnología __VMware Vsphere__.

La plataforma es gestionada por Cloud Temple de forma automática (mantenimiento de condiciones de seguridad, mantenimiento en condiciones operativas, etc.).
Se puede controlar a través de la interfaz gráfica de la consola Shiva o a través de las APIs asociadas.

*__Observación__* : *Por razones de seguridad relacionadas con la calificación SecNumCloud,
__no es posible para el cliente acceder directamente a la plataforma de virtualización VMware__ (ningún acceso directo al vCenter en particular).
En efecto, la calificación SecNumCloud impone __una total segregación__ entre las interfaces de control de los activos técnicos y la interfaz del cliente (la consola Shiva).*

- Los productos implementados son VMware ESXi, VMware Vcenter y VMware Replication.
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que está controlada materialmente por la tecnología Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMWare vSan, sino únicamente SANs IBM en fiber channel 32G.*
- *No se implementa ninguna forma de optimización oculta (compresión, deduplicación, ...).*

### Definición de un clúster de cuchillas de cómputo ('Cpool')

El __'Cpool'__ es una agrupación de hipervisores VMware ESXi, también conocido como *'clúster ESX'*.

Los hosts presentes en un __'Cpool'__ pertenecen todos __al mismo tenant y a la misma zona de disponibilidad__ (AZ). Deben necesariamente tener la misma clase:
__no es posible mezclar diferentes modelos de cuchillas de cómputo dentro de un mismo clúster__.

Como todas las cuchillas de cómputo se entregan con el máximo físico de memoria, se aplica una limitación de uso de la RAM lógicamente a nivel del clúster para asegurarse de que corresponde a la RAM facturada.

Por defecto, cada cuchilla dispone de 128 GB de memoria activada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener un máximo de 32 hipervisores. Más allá de este límite, será necesario crear un segundo clúster.

El almacenamiento puede compartirse entre los __'Cpool'__.

### Asignación de memoria para un 'Cpool'

La reserva de RAM es configurable por clúster. Puede reducir o aumentar la cantidad de RAM para que corresponda a sus necesidades a escala del clúster.

__Atención a no superar una media del 85% de consumo de memoria por cuchilla de cómputo__.
En efecto, la tecnología VMware utilizará un método de optimización de tipo compresión que puede impactar fuertemente el rendimiento de sus cargas de trabajo y complicar el diagnóstico.
Del mismo modo, una presión de memoria demasiado fuerte en sus cuchillas de cómputo forzará al hipervisor a descargar una parte de su memoria en disco para responder a las necesidades de las máquinas virtuales.

Este caso, llamado __'Ballooning'__, impacta muy fuertemente el conjunto de rendimientos de las máquinas virtuales situadas en el almacenamiento (datastore) concernido.
__El diagnóstico es complicado en este contexto__, ya que su metrología constatará impactos a nivel de CPU y no de la memoria o del almacenamiento.
Tenga también en cuenta que lo primero que hace el hipervisor al iniciar una máquina virtual es crear __un archivo de intercambio de memoria__ (.vswap) en
el disco, del tamaño de la memoria de la máquina virtual concernida. Debe __tenerlo en cuenta en el dimensionamiento de su almacenamiento__.

Cada cuchilla de cómputo se entrega con 128GB de memoria activada lógicamente a nivel del __'Cpool'__ pero dispone físicamente de la totalidad de la memoria asignable.

Por ejemplo, para un clúster de tres hosts de tipo ```vmware:standard:v2```, la reserva de RAM en la activación del _*'Cpool'* será de 3 x 128GB = 384 GB de RAM.
Podrá extenderla hasta un máximo de 3 x 384GB = 1152GB de memoria.

    Mínimo de memoria de un 'Cpool' = número de hosts X 128GB de memoria
    Máximo de memoria de un 'Cpool' = número de hosts X la cantidad de memoria física de la cuchilla de cómputo

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple pone a su disposición un catálogo de `Templates` regularmente enriquecido y actualizado por nuestros equipos.
Incluye a día de hoy varias decenas de `Templates` e imágenes para montar en sus máquinas virtuales.

### Actualización de los hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores con el fin de asegurar la aplicación de los parches de seguridad.
Sin embargo, la actualización de los hipervisores sigue siendo su responsabilidad, ya que no tenemos visibilidad sobre sus restricciones de negocio.

El proceso de actualización está completamente automatizado. Para garantizar una continuidad de servicio, se requiere un mínimo de dos hipervisores por clúster durante la actualización. Asegúrese de disponer de los permisos necesarios para efectuar estas acciones.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Pueden utilizarse para gestionar el uso de los recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o a aislar las cargas de trabajo que consumen muchos recursos.
En un __'Cpool'__ VMware, estas reglas se utilizan a menudo para gestionar el
