---
title: Conceptos
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para satisfacer las necesidades críticas de continuidad y recuperación de la actividad, con un enfoque particular en los sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se basa en socios tecnológicos de renombre internacional :

- Cálculo : __CISCO UCS__.
- Almacenamiento : __IBM Spectrum Virtualize__, __IBM FlashSystem__ para almacenamiento en bloque.
- Red : __JUNIPER__.
- Virtualización : __VMware__, ofreciendo una base fiable y probada para gestionar sus entornos cloud.
- Copia de seguridad: __IBM Spectrum Protect Plus__, para la orquestación y el almacenamiento de copias de seguridad.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, garantizando una compatibilidad ampliada con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque esté completamente automatizada gracias a las APIs y un proveedor de Terraform, el producto IaaS de Cloud Temple ofrece una infraestructura única:

- __Recursos dedicados__ : Las láminas de cálculo, volúmenes de almacenamiento y stacks de software (virtualización, copias de seguridad, cortafuegos, etc.) nunca se comparten entre los clientes.
- __Predictibilidad máxima__ : Usted controla las tasas de virtualización, la carga de IOPS en el almacenamiento y disfruta de una facturación clara, basada en el consumo mensual.

La plataforma está certificada __SecNumCloud__ por la [ANSSI](https://www.ssi.gouv.fr/), lo que garantiza un alto nivel de automatización y seguridad.

## Principales funcionalidades

- Recursos de cálculo (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión mediante la [Consola](../console/console.md) o en modo Infraestructura como Código gracias a las APIs y al proveedor de Terraform.

## Ventajas

| Ventaja           | Descripción                                                                                                                                    |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital | Alojamiento de datos en Francia y cumplimiento del RGPD.                                                                                       |
| Seguridad         | Plataforma altamente segura, certificada __SecNumCloud__, __HDS__ (Alojamiento de Datos de Salud), __ISO 27001__ y __ISAE 3402 tipo II__. |  
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluidos los periodos de mantenimiento.                                |
| Resiliencia         | Implementación de planes de continuidad o de recuperación ante desastres según las necesidades.                                                |
| Automatización      | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                         |
| Bajo demanda        | Recursos disponibles bajo demanda.                                                                                                             |

## Regiones y zonas de disponibilidad

El producto IaaS de VMware se implementa en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) forma parte de una [región](../additional_content/concepts_regional.md).

Este tipo de implementación permite elegir la ubicación de los clústeres y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de incidente.

---

## Cálculo

Las lamas proporcionadas por Cloud Temple son de tipo __CISCO UCS B200__ o __CISCO UCS X210c__. Están completamente gestionadas por Cloud Temple (firmware, versión del SO, ...) a través de la consola Cloud Temple.

Varias categorías de lamas de cálculo están disponibles en el catálogo para soportar sus cargas de trabajo (Virtualización, Contenerización, ...).
Estas presentan características y rendimientos diferentes para adaptarse mejor a sus necesidades. El catálogo de lamas de cálculo se actualiza regularmente.

En el contexto de uso con una oferta de virtualización, un clúster de hipervisores está compuesto únicamente por lamas de cálculo del mismo tipo (no es posible mezclar lamas de diferentes tipos en un mismo clúster).

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          | SKU para la oferta VMware         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Lama ECO v3           | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Lama STANDARD v3      | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Lama ADVANCE v3       | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Lama PERFORMANCE 1 v3 | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Lama PERFORMANCE 2 v3 | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Lama PERFORMANCE 3 v3 | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Lama PERFORMANCE 4 v3 | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48 Go | csp:fr1:iaas:vmware:perf4:v3    |

__Notas__ :

- __(1)__ La cantidad de memoria entregada es la físicamente disponible en las lamas. No es posible cambiar la cantidad física de memoria de una lama.

- __(2)__ Frecuencia base mínima / frecuencia turbo, expresada en GHz. Por defecto, los procesadores están configurados para un rendimiento máximo a nivel de BIOS.

- __(3)__ La conectividad física se comparte para el acceso a la red y al almacenamiento en bloque, ya que la plataforma CISCO es convergente.

- __(4)__ La oferta de GPU disponible realmente evoluciona constantemente. Al 1 de mayo de 2024, la oferta se basa en los GPU NVIDIA LOVELACE L40S. Por defecto, la lama PERF4 se entrega con 2 tarjetas L40S de 48 Go de RAM. Contacte con el soporte para más detalles si es necesario.

La disponibilidad de la oferta de cálculo es del 99.99%, calculada mensualmente, incluyendo el periodo de mantenimiento. La elegibilidad en caso de incumplimiento del SLA está sujeta a la creación de un ticket de incidencia. También debe contar con al menos dos hosts por clúster y activar la función __High Availability__ (HA).
Esta función permite que su arquitectura reinicie automáticamente sus máquinas virtuales en el segundo hipervisor.
En el caso de que una zona de disponibilidad contenga solo un hipervisor, el reinicio automático no es posible.

## Red

El servicio de red en la plataforma IaaS de Cloud Temple se basa en una infraestructura de red basada en la tecnología VPLS, ofreciendo una segmentación flexible y de alto rendimiento para satisfacer las necesidades de los clientes en materia de conectividad y aislamiento de red.

### VLANs de nivel 2

Los VLANs disponibles en el producto IaaS son de tipo __nivel 2__, ofreciendo un aislamiento de red completo y una configuración adaptable según las necesidades.

#### Principales conceptos
- __Compartición entre clusters y zonas de disponibilidad (AZ)__ :
  - Los VLAN pueden compartirse entre las distintas AZ y los distintos clusters que pertenecen al mismo tenant.
- __Propagación inter-tenant__ :
  - Los VLAN pueden propagarse entre varios tenants que pertenecen a una misma organización, facilitando las comunicaciones internas.

---

### Rendimiento de la red

La infraestructura de red garantiza una baja latencia para un rendimiento óptimo:

- __Latencia intra-AZ__: inferior a __3 ms__.
- __Latencia inter-AZ__: inferior a __5 ms__.

---

### Puntos clave

1. __Flexibilidad__ : Los VLAN pueden configurarse para adaptarse a entornos multi-cluster y multiinquilino.
2. __Alto rendimiento__ : Una latencia mínima garantiza una comunicación rápida y eficiente entre las zonas de disponibilidad.
3. __Aislamiento y seguridad__ : Los VLAN de nivel 2 ofrecen una segmentación de red estricta para proteger los datos y el tráfico.

---

## Almacenamiento en bloque

Cloud Temple ofrece varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/)
y [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite ofrecer el nivel de rendimiento requerido para los entornos de nuestros clientes gracias a la gran
cantidad de memoria caché integrada en los controladores y a la posibilidad de distribuir todos los IOPS
de un servidor en varios SAN.

También se utiliza para permitir la replicación de sus LUNs de almacenamiento en modo bloque entre
las zonas de disponibilidad o facilitar las intervenciones en las matrices de almacenamiento.

El almacenamiento es principalmente almacenamiento de tipo FLASH NVME dedicado a cargas de trabajo profesionales.
Los discos son utilizados por las matrices de almacenamiento en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

### Seguridad y Cifrado del Almacenamiento en Bloques

Para garantizar la confidencialidad de sus datos en reposo, toda nuestra infraestructura de almacenamiento en bloques integra un cifrado hardware robusto.

- __Tipo de Cifrado__ : Los datos se cifran directamente en los discos (`Data At Rest`) utilizando el algoritmo __XTS-AES 256__.
- __Conformidad__ : Este método de cifrado cumple con la norma __FIPS 140-2__, garantizando un alto nivel de seguridad validado.
- __Funcionamiento__ : El cifrado se aplica en el momento de la escritura de los datos en el soporte de almacenamiento físico.

:::warning[Punto de atención sobre la replicación]
Es importante tener en cuenta que este cifrado protege los datos almacenados en los discos. No está activo "on-the-fly", lo que significa que los datos no se cifran durante las operaciones de replicación de almacenamiento entre las zonas de disponibilidad. La seguridad de las transferencias está garantizada por canales de comunicación dedicados y seguros.
:::

La clase de almacenamiento __'Mass Storage'__ ofrece discos mecánicos para necesidades de archivado en un contexto de eficiencia económica. Se disponen de varios niveles de rendimiento:

| Referencia                        | Unidad | Límite máximo de IOPS / LUN | Ancho de banda máximo / LUN | SKU                                          |
|-----------------------------------|--------|-----------------------------|-----------------------------|----------------------------------------------|
| FLASH - Esencial - 500 IOPS/To    | 1 Gio  | 10 000 IOPS                 | 512 Mo/s                    | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Estándar - 1500 IOPS/To   | 1 Gio  | 30 000 IOPS                 | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio  | 30 000 IOPS                 | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio  | 30 000 IOPS                 | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio  | 30 000 IOPS                 | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivado          | 1 Tio  | No garantizado              | No garantizado              | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *El rendimiento efectivo de una LUN (Datastore) crece de manera lineal en función del volumen asignado (selon son ratio d'IOPS/To), __dentro del límite de hardware absoluto definido anteriormente__.*

> *Por ejemplo, un volumen de 0,5 To en clase 'Standard' contará con 750 IOPS.*
> *Por el contrario, un volumen de 10 To en clase 'Ultra' (théoriquement 150 000 IOPS) estará limitado por el límite físico absoluto y se estabilizará en 30 000 IOPS y 1024 Mo/s.*

- *Estas limitaciones (IOPS y ancho de banda) se aplican a nivel del volumen de almacenamiento, es decir, a nivel del Datastore para un entorno VMware,*
- *La disponibilidad del almacenamiento es del 99.99% medido mensualmente, incluyendo el rango de mantenimiento,*
- *No hay restricción ni cuota sobre la lectura o escritura,*
- *No hay facturación por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Mass Storage'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500 Gio,*
- *Al utilizar un mecanismo de replicación de almacenamiento, el rendimiento debe ser idéntico en ambas zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" de tipo compresión o deduplicación: cuando reserva 10 Tio de almacenamiento, tiene físicamente 10 Tio de almacenamiento útil implementado en las máquinas IBM.*
- *Las LUN de almacenamiento están dedicadas al entorno del cliente.*

### Uso en el marco de la oferta de computación VMware

En el marco del uso del almacenamiento en modo bloque como datastore en la oferta de computación VMware de Cloud Temple, __debe tener en cuenta varias consideraciones importantes__ :

1. __Archivo de intercambio (.VSWP) durante el arranque de las máquinas virtuales__ : Cuando una máquina virtual arranca, crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder arrancar sus máquinas virtuales, siempre debe disponer en su datastore de un espacio libre equivalente a la suma de los tamaños de memoria de sus máquinas virtuales. Por ejemplo, si su datastore dispone de 1 TiB de almacenamiento por bloques y desea arrancar 10 máquinas virtuales de 64 GiB de memoria cada una, se necesitarán 640 GiB de espacio en disco. Sin este espacio, el arranque de las máquinas se verá limitado por la capacidad disponible para crear los archivos de intercambio.

2. __Espacio libre para las instantáneas de copia de seguridad__ : El servicio de copia de seguridad utiliza instantáneas (snapshots). Por lo tanto, siempre debe disponer de suficiente espacio libre para permitir la creación de una instantánea durante la copia de seguridad de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y del tiempo necesario para realizar la copia de seguridad. Por regla general, se recomienda mantener al menos un 10 % de espacio libre para esta operación.

3. __Gestión de discos dinámicos__ : Tenga cuidado con el uso de discos dinámicos. Si no controla su crecimiento, una falta de espacio físico puede provocar una congelación (freeze) de la máquina virtual en el mejor de los casos, o un fallo con corrupción en el peor de los casos. Es crucial supervisar atentamente el espacio disponible en sus datastores cuando utilice este tipo de discos.

Una gestión proactiva del espacio en disco es esencial para garantizar el correcto funcionamiento de sus máquinas virtuales y la fiabilidad de las copias de seguridad. Asegúrese de disponer siempre del espacio necesario para los archivos de intercambio, las instantáneas y el crecimiento de los discos dinámicos.

## Almacenamiento en modo de copia de seguridad

El almacenamiento dedicado a la copia de seguridad de sus máquinas virtuales se aprovisiona automáticamente por la plataforma dentro del límite de la cuota solicitada.

| Referencia               | Unidad | SKU                                      |
|--------------------------|--------|------------------------------------------|
| ALMACENAMIENTO MASIVO - Archivo | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |

### Replicación del almacenamiento en bloque

#### Principios

Para permitir la implementación de sus planes de recuperación ante desastres, cuando no es posible garantizar la
continuidad operativa mediante mecanismos a nivel de aplicación y la réplica de máquinas virtuales
no resulta adecuada, Cloud Temple ofrece __mecanismos de réplica de almacenamiento en modo bloque entre las zonas de disponibilidad de una región__.

Estos mecanismos de réplica se aplican a los LUN de almacenamiento de sus entornos, como complemento de las copias de seguridad.
La elección de utilizar un mecanismo de réplica en un entorno __depende de numerosos factores, como su criticidad, la pérdida de datos tolerable o el rendimiento objetivo__ para la aplicación.

Cloud Temple ofrece dos tipos de mecanismos implementados en una configuración activo/pasivo:

- La réplica __asíncrona__ (o __'Global Mirror'__): *La función __'Global Mirror'__ proporciona un proceso de copia asíncrona.
Cuando un host escribe en el volumen primario, la confirmación de finalización de la E/S se recibe antes de que la operación
de escritura se complete para la copia en el volumen secundario. Si se inicia una operación de conmutación por error, la aplicación
debe recuperar y aplicar todas las actualizaciones que no hayan sido confirmadas en el volumen secundario.
Si las operaciones de E/S en el volumen primario se pausan durante un breve período,
el volumen secundario puede convertirse en una réplica exacta del volumen primario. Esta función es comparable a un proceso
de copia de seguridad continua en el que las últimas actualizaciones siempre están pendientes.
Cuando utilice Global Mirror con fines de recuperación ante desastres, debe considerar cómo desea gestionar estas actualizaciones pendientes.*

- La réplica __síncrona__ (o __'Metro Mirror'__): *La función __'Metro Mirror'__ es un tipo de copia remota que crea una copia síncrona
de los datos de un volumen primario a un volumen secundario. Con las copias síncronas, las aplicaciones host escriben en el volumen primario, pero no reciben confirmación
de que la operación de escritura ha finalizado hasta que los datos se han escrito en el volumen secundario. Esto garantiza que ambos volúmenes contengan datos idénticos cuando
la operación de copia inicial haya finalizado, la función Metro Mirror
mantiene de forma permanente una copia completamente sincronizada de los datos de origen en el sitio de destino. __Desde el 1 de enero de 2024, la función 'Metro Mirror' ya no se comercializa.__*

Se define entonces un sitio denominado "activo" o "principal" y un sitio "pasivo" o "standby".
El plan de recuperación ante desastres se activa en caso de incidente o como parte de una solicitud de prueba del PRA.
El sitio pasivo toma entonces el relevo del sitio activo.

#### Replicación asíncrona

Cuando sus cargas de trabajo requieren tiempos de recuperación cortos y no es aceptable o adecuado utilizar mecanismos de tipo replicación a nivel de aplicación / replicación de máquinas virtuales,
es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad de una misma región.

Este producto permite obtener un __RPO de 15 min__ y un __RTO inferior a 4 h__. Permite reanudar la actividad mucho más rápidamente que
la implementación de una restauración de copia de seguridad.

En un volumen de almacenamiento en replicación asíncrona (__Global Mirror__), los controladores de virtualización SAN de las
dos zonas de disponibilidad trabajan conjuntamente para realizar las operaciones de escritura en ambos sitios.
El sitio principal no espera el acuse de recibo de escritura del sitio secundario.

Las etapas de una operación de escritura son las siguientes :

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__ : envía su solicitud al controlador SAN de su zona de disponibilidad,
2. El controlador SAN local solicita al controlador SAN de la zona remota que realice la operación de escritura,
3. el controlador SAN local no espera la confirmación del SAN remoto y realiza entonces la escritura localmente,
4. Envía el __acuse de recibo__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio remoto no acceden directamente a la LUN Global Mirror__ : Es necesario realizar una solicitud de servicio.

| SLA       | Descripción                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 min| En caso de desastre en el centro de datos principal, la cantidad máxima de datos perdidos corresponde como máximo a los últimos 15 minutos de escritura |
| RTO < 4 h | En caso de desastre en el centro de datos principal, la reanudación de la actividad está garantizada en 4 horas según la complejidad de los entornos.          |

En caso de activación del PRA, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores remotos para que puedan acceder a los datos. La implementación de esta solución requiere, por tanto, haber reservado en el sitio 'standby' recursos de cálculo y RAM para reanudar la actividad en caso de desastre.

El uso de esta tecnología también requiere el duplicado del espacio en disco : es necesario disponer exactamente del mismo espacio en el sitio remoto que en el sitio local.

El uso de este mecanismo puede afectar al rendimiento de la aplicación en un 10 %. __Solo son compatibles las clases de almacenamiento 500 Iops/To, 1500 Iops/To y 3000 Iops/TO.__

| Referencia                         | Unidad | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|  
| ALMACENAMIENTO - Replicación Global SAN | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* :

- *Al ser la oferta asíncrona, es posible que en caso de desastre ciertas operaciones de disco no se hayan escrito en el sitio remoto. Por lo tanto, puede existir un riesgo para la coherencia de los datos, mitigado en el análisis de riesgos del plan de recuperación de actividad.*
- *La replicación del almacenamiento en modo bloque se realiza de forma transparente para las máquinas virtuales y las aplicaciones,*
- *A este respecto, es importante priorizar los escenarios de replicación a nivel de aplicación o, en su defecto, de replicación de máquinas virtuales,*
- *El cálculo y la memoria en el sitio de recuperación pueden reducirse para optimizar los costos si una situación degradada es aceptable para el área de negocio durante la ejecución del plan de recuperación de actividad.*

## Virtualización VMware

La oferta de virtualización VMware Cloud Temple cualificada SecNumCloud se basa en la tecnología __VMware vSphere__.

La plataforma es gestionada por Cloud Temple de forma automática (maintien de condition de sécurité, maintien en condition opérationnelle, ...).
Es gestionable a través de la interfaz gráfica de la Consola o mediante las APIs asociadas.

*__Nota__*: *Por razones de seguridad relacionadas con la cualificación SecNumCloud,
__no es posible para el cliente acceder directamente a la plataforma de virtualización VMware__ (aucun accès direct au vCenter notamment).
De hecho, la cualificación SecNumCloud impone __una segregación total__ entre las interfaces de gestión de los activos técnicos y la interfaz del cliente (la Console).*

- Los productos implementados son VMware ESXi, VMware vCenter y VMware Replication.
- *La red de la oferta de virtualización no utiliza la tecnología VMware NSX, sino que es gestionada a nivel de hardware por la tecnología Juniper y el protocolo VPLS.*
- *El almacenamiento no utiliza la tecnología VMware vSAN, sino únicamente SAN de IBM en fibra channel de 32 G.*
- *No se implementa ningún tipo de optimización oculta (compression, deduplication, ...).*

### Definición de un clúster de lâmina de cálculo ('Cpool')

El __'Cpool'__ es un agrupamiento de hipervisores VMware ESXi, también conocido como *'clúster ESX'*.

Los hosts presentes en un __'Cpool'__ pertenecen todos __al mismo tenant y a la misma zona de disponibilidad__ (AZ). Deben tener necesariamente la misma clase:
__no es posible mezclar diferentes modelos de lâmina de cálculo dentro de un mismo clúster__.

Dado que todas las lâminas de cálculo se entregan con la memoria física máxima, se aplica una limitación de uso de RAM a nivel de software en el clúster para garantizar que corresponda a la RAM facturada.

Por defecto, cada lâmina dispone de 128 GB de memoria activada dentro del __'Cpool'__.

Un __'Cpool'__ puede contener un máximo de 32 hipervisores. Más allá de este límite, será necesario crear un segundo clúster.

El almacenamiento puede ser compartido entre los __'Cpool'__.

### Asignación de memoria para un 'Cpool'

La reserva de RAM es configurable por clúster. Puede reducir o aumentar la cantidad de RAM para que se ajuste a sus necesidades a escala de clúster.

__Tenga cuidado de no superar una media del 85 % de consumo de memoria por nodo de cálculo__.
De hecho, la tecnología VMware utilizará un método de optimización por compresión que puede afectar significativamente el rendimiento de sus cargas de trabajo y complicar el diagnóstico.
Del mismo modo, una presión de memoria excesiva en sus nodos de cálculo obligará al hipervisor a descargar parte de su memoria en disco para satisfacer las necesidades de las máquinas virtuales.

Este caso, denominado __'Ballooning'__, afecta muy significativamente al conjunto del rendimiento de las máquinas virtuales situadas en el almacenamiento (datastore) correspondiente.
__El diagnóstico se complica en este contexto__, ya que sus métricas de monitorización registrarán impactos a nivel de CPU y no de memoria o almacenamiento.
Tenga también en cuenta que lo primero que hace el hipervisor al iniciar una máquina virtual es crear __un archivo de intercambio de memoria__ (.vswap) en
el disco, del tamaño de la memoria de la máquina virtual correspondiente. Debe __tenerlo en cuenta al dimensionar su almacenamiento__.

Cada nodo de cálculo se entrega con 128Go de memoria activada por software a nivel del __'Cpool'__, pero dispone físicamente de toda la memoria asignable.

Por ejemplo, para un clúster de tres hosts de tipo ```vmware:standard:v2```, la reserva de RAM al activar el _*'Cpool'* será de 3 x 128Go = 384 Go de RAM.
Podrá ampliarla como máximo a 3 x 384Go = 1152Go de memoria.

    Memoria mínima de un 'Cpool' = número de hosts X 128Go de memoria
    Memoria máxima de un 'Cpool' = número de hosts X la cantidad de memoria física del nodo de cálculo

### Catálogos de máquinas virtuales Cloud Temple

Cloud Temple pone a su disposición un catálogo de `Templates` enriquecido y actualizado regularmente por nuestro equipo.
Actualmente, incluye decenas de `Templates` e imágenes para montar en sus máquinas virtuales.

### Actualización de los hipervisores

Cloud Temple proporciona regularmente builds para los hipervisores con el fin de garantizar la aplicación de parches de seguridad.
Sin embargo, la actualización de los hipervisores sigue siendo responsabilidad suya, ya que no tenemos visibilidad sobre sus restricciones empresariales.

El proceso de actualización es completamente automatizado. Para garantizar la continuidad del servicio, se requiere un mínimo de dos hipervisores por clúster durante la actualización. Asegúrese de disponer de los permisos necesarios para realizar estas acciones.

### Gestión de la afinidad de sus máquinas virtuales

Las __reglas de afinidad y anti-afinidad__ permiten controlar la ubicación de las máquinas virtuales en sus hipervisores.
Pueden utilizarse para gestionar el uso de recursos de su __'Cpool'__.
Por ejemplo, pueden ayudar a equilibrar la carga de trabajo entre los servidores o aislar las cargas de trabajo intensivas en recursos.
En un __'Cpool'__ VMware, estas reglas suelen utilizarse para gestionar el comportamiento de las máquinas virtuales con vMotion.
vMotion permite mover máquinas virtuales de un host a otro sin interrupción del servicio.

Puede configurar mediante la gestión de reglas:

- __Reglas de Afinidad__: Estas reglas aseguran que ciertas máquinas virtuales se ejecuten en el mismo host físico.
Se utilizan para mejorar el rendimiento manteniendo las máquinas virtuales que se comunican frecuentemente
entre sí en el mismo servidor para reducir la latencia de red. Las reglas de afinidad son útiles en escenarios
donde el rendimiento es crítico, como en el caso de bases de datos o aplicaciones que requieren una comunicación rápida entre servidores.

- __Reglas de Anti-afinidad__: Por el contrario, estas reglas garantizan que ciertas máquinas virtuales no se ejecuten
en el mismo host físico. Son importantes para la disponibilidad y la resiliencia, por ejemplo,
para evitar que todas las máquinas críticas se vean afectadas en caso de fallo de un único servidor.
Las reglas de anti-afinidad son cruciales para aplicaciones que requieren alta disponibilidad,
como en entornos de producción donde la tolerancia a fallos es una prioridad.
Por ejemplo, no desea que sus dos Active Directory estén en el mismo hipervisor.

Al crear una regla, define el tipo de regla (afinidad / anti-afinidad), el nombre de la regla,
su estado de activación (__'Estado'__) y las máquinas afectadas de su cluster de hipervisores.

*Nota: las reglas de afinidad/anti-afinidad ofrecidas en la consola son reglas relativas a las máquinas virtuales entre sí (no hay reglas entre hipervisores y máquinas virtuales).*

### Réplicación asíncrona de sus máquinas virtuales en entorno VMware

La replicación asíncrona de sus máquinas virtuales es un mecanismo que consiste en enviar desde el hipervisor de origen las operaciones de escritura al sitio standby a intervalos de tiempo regulares.

Tras una copia inicial en caliente de todo el almacenamiento activo en el sitio standby, solo se envían las escrituras a intervalos regulares al sitio en espera.
Este intervalo depende del volumen de escritura (de cada hora a cada 24 horas).

La replicación de las máquinas virtuales se basa en el mecanismo de instantáneas del hipervisor. En este sentido,
esta solución tiene las mismas desventajas, en particular la sensibilidad al volumen de escrituras de la máquina virtual,
siendo el proceso de instantánea un mecanismo recursivo para el cierre de la instantánea.

El ejemplo típico de máquina que no soporta el mecanismo de replicación de máquinas virtuales es un
servidor FTP que recibe los flujos en tiempo real de cámaras de vigilancia. __La máquina pasa su tiempo escribiendo y no será
capaz de cerrar una instantánea sin pausar el sistema operativo durante un período de tiempo significativo
(varias decenas de minutos)__. Si el hipervisor no puede cerrar la instantánea, hará exactamente eso,
sin posibilidad de intervenir salvo que se corrompa la máquina virtual.

| SLA             | Descripción                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H a 24H | En caso de desastre en el datacenter principal, la cantidad máxima de datos perdidos es la de la última sincronización de escrituras en el sitio standby. |
| RTO  < 15 min   | Operación de inicio de la máquina virtual detenida en el sitio remoto                                                                               |

En caso de necesidad, o en caso de fallo en una máquina del sitio principal, se activa la máquina espejo en el sitio standby.
La recuperación de la actividad requiere haber reservado en el sitio standby capacidad de cómputo y RAM en espera. Es
necesario disponer del mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.

| Referencia                        | Unidad | SKU                                             |  
|-----------------------------------|--------|-------------------------------------------------|
| PRD - Replicación VMware inter-AZ | 1 vm   | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : El cálculo del RPO mínimo debe definirse en función de la tasa de cambio en la máquina virtual.*

## Copia de seguridad de máquinas virtuales

Cloud Temple ofrece __una arquitectura de copia de seguridad cruzada nativa y no desactivable__ (es obligatoria en la certificación secnumcloud francesa).

Las copias de seguridad se almacenan en una zona de disponibilidad y en un centro de datos físico diferente al que aloja la máquina virtual. Están cifradas mediante un algoritmo de claves simétricas AES de 256 bits (modo de cifrado `xts-plain64`) para garantizar la confidencialidad de los datos.

Esto permite protegerse ante un fallo grave en el centro de datos de producción y restaurar en un centro de datos secundario (por ejemplo, en caso de incendio).

Esta solución incluye:

- La copia de seguridad en caliente fuera del sitio de todos los discos,
- La presentación y el arranque instantáneo de una máquina virtual desde la infraestructura de almacenamiento masivo y la recarga en caliente en los SAN de producción,
- La restauración parcial de archivos desde la copia de seguridad,
- Una retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de copia de seguridad se basa en la solución *IBM Spectrum Protect Plus*, una solución de arquitectura sin agente, fácil de usar y que permite la automatización de los procesos de copia de seguridad, además de una optimización del espacio de almacenamiento masivo.

Las velocidades de copia de seguridad y restauración dependen de la tasa de cambio en los entornos. La política de copia de seguridad es configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota:__*

*__Ciertas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad__ que utiliza los mecanismos de instantáneas del hipervisor.
Se trata típicamente de máquinas cuyas cargas de escritura en disco son constantes. No es posible para el hipervisor cerrar la instantánea, lo que
obliga a congelar la máquina virtual para poder completar la operación de cierre. Esta congelación puede durar varias horas y no se puede detener.*

*La solución es entonces excluir el disco que es objetivo de escrituras permanentes y respaldar los datos mediante otro método.*

| Referencia                                              | Unidad | SKU                            |
| ------------------------------------------------------- | ------ | ------------------------------ |
| COPIA DE SEGURIDAD - Acceso al servicio IBM Spectrum Protect Plus | 1 VM   | csp:(region):iaas:backup:vm:v1 |

#### Crear una política de copia de seguridad

Para agregar una nueva política de copia de seguridad, debe realizar una solicitud al soporte. El soporte es accesible desde el icono de salvavidas en la esquina superior derecha de la ventana.

La creación de una nueva política de copia de seguridad se realiza mediante __una solicitud de servicio__ que indique:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y n.º de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de copia de seguridad
    Las características (x días, y semanas, z meses, ...)

## Protección avanzada de datos (HSM/KMS)

Cloud Temple ofrece una solución de __cifrado avanzado de máquinas virtuales__ basada en módulos de seguridad de hardware (HSM) y un servicio de gestión de claves (KMS). Esta funcionalidad permite reforzar la protección de datos sensibles gracias a una gestión centralizada y segura de las claves de cifrado, directamente integrada en el entorno SecNumCloud.

### Arquitectura técnica

La solución se basa en una infraestructura de seguridad robusta compuesta por:

- __HSM (Hardware Security Module)__ : Módulos __Thales Luna S790__ certificados __FIPS 140-3 nivel 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ para la gestión centralizada de claves
- __Integración VMware__ : Comunicación mediante el protocolo __KMIP__ (Key Management Interoperability Protocol)

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
| 1 | __Root of Trust (RoT)__ | Clave maestra por KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Clave de dominio por cliente (aislamiento multiinquilino) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Clave de cifrado por VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Clave de datos por VM | VMware ESXi |

#### Proceso de cifrado

1. __Generación__ : VMware ESXi genera una DEK única para cada máquina virtual
2. __Protección__ : La DEK se cifra con la KEK almacenada en CipherTrust Manager
3. __Protección__ : La KEK está protegida a su vez por la jerarquía de claves HSM
4. __Almacenamiento__ : La DEK cifrada se almacena junto con los archivos de configuración de la VM

### Seguridad y cumplimiento

#### Certificaciones

- __FIPS 140-3 niveau 3__ : Certificación de nivel más alto para HSM
- __Common Criteria EAL4+__ : Evaluación de seguridad avanzada
- __SecNumCloud__ : Cualificación ANSSI integrada en el entorno Cloud Temple

#### Aislamiento multiinquilino

- __Separación criptográfica__ : Cada cliente dispone de un dominio KMS aislado
- __Claves dedicadas__ : Una Domain Key específica por cliente
- __Auditoría y trazabilidad__ : Registro completo de las acciones por dominio

### Activación y uso

El cifrado de las máquinas virtuales se activa __con un solo clic__ desde la [Consola](../console/console.md).

Para un procedimiento detallado con capturas de pantalla, consulte el [tutorial de cifrado de máquinas virtuales](tutorials/vm_encryption.md).

#### Requisitos previos

- __Proveedor de claves configurado__ : Debe estar habilitado un proveedor HSM/KMS en la vStack
- __Máquina virtual apagada__ : La VM debe estar detenida antes del cifrado
- __Sin replicación activa__ : La VM no debe estar replicada (incompatible con Global Mirror)
- __Sin instantáneas__ : No debe haber instantáneas presentes
- __Suscripción al servicio__ : Debe suscribirse al servicio de protección avanzada

*__Nota__ : Para más detalles sobre los requisitos previos y el procedimiento completo, consulte la [guía de cifrado de VMs](tutorials/vm_encryption.md).*

### Limitaciones y consideraciones

#### Compatibilidad

- __Global Mirror__ : Las máquinas virtuales cifradas no son __compatibles__ con la replicación Global Mirror
- __Restauración__ : Las copias de seguridad de VMs cifradas conservan su protección criptográfica
- __Exportación__ : La exportación de VMs cifradas requiere procedimientos específicos

#### Rendimiento

- __Impacto mínimo__ : El cifrado por hardware garantiza un rendimiento óptimo
- __Transparencia__ : Sin impacto en el funcionamiento de las aplicaciones

### Casos de uso recomendados

Esta solución de protección avanzada es particularmente adecuada para:

- __Datos sensibles__ : Información personal, datos financieros, secretos industriales
- __Cumplimiento normativo__ : Requisitos RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Sectores críticos__ : Banca, seguros, salud, defensa
- __Soberanía digital__ : Protección contra accesos no autorizados, incluso en caso de compromiso

| Referencia | Unidad | SKU |
|-----------|-------|-----|
| PROTECCIÓN AVANZADA - Cifrado de VM mediante HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Nota__ :*

- *El servicio requiere una suscripción específica y no está incluido en el producto IaaS estándar*
- *La gestión de claves permanece completamente bajo el control de Cloud Temple en el entorno SecNumCloud*
- *Las claves de cifrado nunca salen de la infraestructura francesa y soberana*