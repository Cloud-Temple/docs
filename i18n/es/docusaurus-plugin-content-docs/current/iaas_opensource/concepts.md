---
title: Concepts
---

The __IaaS (Infrastructure as a Service)__ offering from Cloud Temple is designed to meet the critical needs of business continuity and disaster recovery, with a particular focus on demanding sectors such as industry, banking, and insurance. Built on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en socios tecnológicos de renombre internacional:

- Cálculo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para almacenamiento en bloques, y __DELL ECS__ para almacenamiento objeto.
- Red: __JUNIPER__.
- Virtualización: __Pila de código abierto__, ofreciendo una base fiable y probada para gestionar sus entornos en la nube.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, garantizando una compatibilidad amplia con los principales editores de software.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared among clients.
- __Maximum predictability__: You control virtualization rates, storage IOPS load, and benefit from clear, consumption-based monthly billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Principales funcionalidades

- Recursos de cálculo (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión mediante la [Consola](../console/console.md) o en modo Infraestructura como Código gracias a las APIs y al provider de Terraform.

## Ventajas

| Ventaja             | Descripción                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Almacenamiento de datos en Francia y cumplimiento del RGPD.                                                                                          |
| Seguridad           | Plataforma altamente segura, certificada __SecNumCloud__, __HDS__ (Almacenamiento de Datos de Salud), __ISO 27001__ e __ISAE 3402 tipo II__. |
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99 %, medida mensualmente, incluyendo los periodos de mantenimiento.                                        |
| Resiliencia         | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                               |
| Automatización      | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                        |
| A petición          | Recursos disponibles bajo demanda.                                                                                                          |

## Regions and Availability Zones

The OpenIaaS product is deployed within an availability zone.  
An availability zone is part of a region.

This deployment model allows you to choose the location of clusters and distribute them across different availability zones (AZ).  
This provides better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

## Clases de servidores de cálculo

Las máquinas de cálculo disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para satisfacer diversas necesidades:

| Referencia            | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos             | 2 x 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos             | 2 x 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos             | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos             | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos             | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos            | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 x 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notes

- __(1)__ The amount of memory is the physically available on the blades and cannot be modified.
- __(2)__ The indicated frequencies correspond to the minimum base frequency and the turbo frequency.
- __(3)__ Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- __(4)__ Available GPUs evolve according to the latest technologies. As of May 1, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.
- __(5)__ High availability on a cluster is available only starting from 2 nodes.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be reported via an incident ticket.

## Clases de almacenamiento en modo bloque

El almacenamiento en bloque distribuido, basado en __IBM Spectrum Virtualize__, ofrece una gama de rendimientos adecuada para diversos casos de uso:

| Referencia                        | IOPS/To                 | Uso principal                           |
|-----------------------------------|-------------------------|-----------------------------------------|
| __FLASH - Esencial__              | 500                     | Cargas de trabajo ligeras               |
| __FLASH - Estándar__              | 1500                    | Cargas de trabajo estándar              |
| __FLASH - Premium__               | 3000                    | Cargas intensivas                       |
| __FLASH - Enterprise__            | 7500                    | Cargas críticas                         |
| __FLASH - Ultra__                 | 15000                   | Cargas ultraintensivas                  |
| __MASS STORAGE - Archivo__        | No aplicable            | Almacenamiento económico para el archivo|

### Características

- __Tecnología__: Flash NVMe con __RAID distribuido 6__ para una mayor resiliencia.
- __Disponibilidad__: 99,99 %, medida mensualmente.
- __Restricciones__: Sin limitaciones en lecturas ni escrituras. Sin compresión ni deduplicación automáticas, garantizando el uso total de los volúmenes reservados.

### Seguridad y cifrado del almacenamiento en bloques

Para garantizar la confidencialidad de sus datos en reposo, toda nuestra infraestructura de almacenamiento en bloques integra un cifrado hardware robusto.

-   **Tipo de cifrado**: Los datos se cifran directamente en los discos (`Data At Rest`) utilizando el algoritmo **XTS-AES 256**.
-   **Cumplimiento**: Este método de cifrado cumple con la norma **FIPS 140-2**, asegurando un alto nivel de seguridad validado.
-   **Funcionamiento**: El cifrado se aplica en el momento de escritura de los datos en el soporte de almacenamiento físico.

:::warning Punto de atención sobre la replicación
Es importante destacar que este cifrado protege los datos almacenados en los discos. No está activo "en tiempo real" (on-the-fly), lo que significa que los datos no se cifran durante las operaciones de replicación de almacenamiento entre las zonas de disponibilidad. La seguridad de los transferencias se garantiza mediante canales de comunicación dedicados y seguros.
:::

---

## Redes

El producto OpenIaaS es compatible con [redes privadas](../network/private_network) y [acceso a Internet](../network/internet).

Desde la configuración de una máquina virtual, están disponibles dos tipos de redes.

### VLAN-type networks

VLAN-type networks must be deployed at a rate of one VLAN per network interface card. If you want to use multiple networks, simply create multiple network interface cards.

A limitation exists regarding the maximum number of network cards that can be created on a VM, which is 7.

### VLAN Trunk

En caso de que debas propagar más de 7 VLANs, debes utilizar el VLAN Trunk.  
El VLAN Trunk permite pasar todos tus VLANs a través de una sola tarjeta. La configuración de los ID de VLAN se realiza mediante interfaces virtuales del tipo VLAN desde el sistema operativo de la VM. Los ID de VLAN son los mismos que los que aparecen y se pueden ver desde la consola.

## Backup de máquinas virtuales

Cloud Temple ofrece una __arquitectura nativa y no interrumpible de backup distribuido__, elemento obligatorio para la certificación SecNumCloud francesa.

Los backups se almacenan en la solución [Almacenamiento Objetos certificado SecNumCloud](../storage/oss), garantizando una protección óptima en caso de fallo grave en el centro de datos de producción. Este enfoque permite restaurar sus datos en un centro de datos secundario, incluso en caso de incidente crítico como un incendio.

Esta solución completa incluye:

- Backup en caliente fuera del sitio de todos los discos
- Flexibilidad en la restauración, permitiendo elegir el punto de recuperación y la ubicación

La infraestructura de backup se basa en una tecnología de código abierto con arquitectura sin agente, que combina facilidad de uso y automatización de procesos. Esta solución optimiza el uso del espacio de almacenamiento manteniendo altos niveles de rendimiento.

Las velocidades de backup y restauración dependen de la tasa de cambio en los entornos. La política de backup es completamente configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

__Nota importante:__

*Algunas máquinas virtuales no son compatibles con esta tecnología de backup*, que utiliza los mecanismos de instantáneas del hipervisor. Esto suele ocurrir con máquinas cuyas cargas de escritura en disco son constantes. En estos casos, el hipervisor no puede finalizar la instantánea, lo que requiere congelar la máquina virtual para completar la operación. Este congelamiento puede durar varias horas y no es interrumpible.

La solución recomendada consiste entonces en excluir el disco afectado por escrituras continuas y realizar el backup de los datos mediante un método alternativo.

| Referencia                                    | Unidad | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| SAUVEGARDE - Accès au service                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creación de una política de copia de seguridad

Para agregar una nueva política de copia de seguridad, se debe presentar una solicitud al soporte, accesible a través del ícono de balsa ubicado en la parte superior derecha de la interfaz.

La creación de una nueva política de copia de seguridad se realiza mediante __una solicitud de servicio__ que incluya:

- El nombre de su Organización
- Los datos de contacto (correo electrónico y teléfono) para finalizar la configuración
- El nombre del inquilino
- El nombre de la política de copia de seguridad
- Las características deseadas (x días, y semanas, z meses, ...)

## Máquinas virtuales

### Gestión de recursos vCPU

Los cambios en los recursos vCPU se realizan en frío (máquina apagada). La plataforma admite hasta 254 vCPUs por máquina virtual (límite teórico), con pruebas concluyentes realizadas en máquinas virtuales Linux con 128 vCPUs.

Es importante destacar que el soporte del sistema operativo invitado constituye un factor determinante al asignar recursos. Una asignación que exceda los límites soportados por el sistema operativo puede provocar problemas significativos de rendimiento.

### Gestión de memoria

Los cambios en memoria también se realizan en frío. Los límites son los siguientes:

- 1,5 TiB con soporte para instantáneas de memoria
- 8 TiB sin soporte para instantáneas de memoria
- 16 TiB (límite teórico sin soporte de seguridad, menos la RAM asignada a Xen y al dominio de control)

La memoria realmente utilizable puede verse limitada por el sistema operativo invitado. Exceder los límites admitidos por el sistema operativo invitado puede provocar una disminución del rendimiento.

### Gestión de discos

- El tamaño máximo de un disco es de 2 TB
- Los discos utilizan el formato VHD estándar
- El número máximo de discos virtuales por máquina virtual, incluidos los lectores CD-ROM, es de 24

No es posible redimensionar los discos una vez creados. Para ampliar la capacidad de almacenamiento, es necesario crear un nuevo disco.

### Tools for virtual machines
These tools are used to ensure optimal operation of virtual machines. When you wish to perform an action requiring one of these tools, a message will appear on the Cloud Temple console.

To install these tools, you can consult the official Xen Server websites to obtain a precise procedure according to your OS.

#### Management Agent
The Management Agent is a component installed on each virtual machine. It enables the hypervisor to better manage the machine by providing access to more information and allows certain actions to be performed more cleanly.

#### PV Drivers (Drivers de paravirtualisation)
Los drivers PV son controladores instalados en la máquina virtual para mejorar su rendimiento.  
Sin estos controladores, la máquina funciona, pero más lentamente. Además, permiten realizar ciertas acciones avanzadas.  
Los drivers PV se instalan de forma nativa en la mayoría de los kernels Linux actuales.

#### Tools
Las herramientas son un conjunto de componentes de software que mejoran la integración de la máquina virtual con la infraestructura de virtualización.

## Catalogs

The catalog allows you to manage three essential types of elements:

- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can review critical information such as location, number of disks, and number of network adapters.

When the number of virtual disks is shown as 0, this indicates a configuration template without a preinstalled operating system, allowing you to deploy your own customized environment.

## Replicación de máquinas virtuales

La __replicación de máquinas virtuales__ de Cloud Temple garantiza la protección y continuidad de sus datos críticos mediante una copia automatizada de sus entornos hacia una zona de disponibilidad distinta. Esta funcionalidad, integrada nativamente en la oferta IaaS de código abierto, responde a los requisitos más exigentes de continuidad operativa y recuperación ante desastres.

### Protección automatizada y segura

La replicación de Cloud Temple se basa en una infraestructura __certificada SecNumCloud__, garantizando:

- __Replicación asíncrona__: Copia continua de sus máquinas virtuales sin impacto en el rendimiento de producción
- __Separación geográfica__: Almacenamiento de los réplicas en una zona de disponibilidad diferente de la fuente
- __Automatización completa__: Proceso completamente automatizado a través de la [Consola Cloud Temple](../console/console.md)
- __Cumplimiento normativo__: Respeto de los requisitos de copia de seguridad y continuidad de actividad

### Beneficios de la replicación

| Beneficio               | Descripción                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuidad de actividad | Protección de sus servicios críticos en caso de incidente importante en el sitio principal.                                                          |
| Protección geográfica   | Replicación hacia una zona de disponibilidad distinta, protegiendo contra desastres locales.                                             |
| Flexibilidad temporal   | Elección del intervalo de replicación según sus necesidades: de 1 minuto a 24 horas.                                                            |
| Simplicidad de gestión   | Configuración y supervisión completamente integradas en la Consola Cloud Temple.                                                                |
| Cumplimiento SecNumCloud  | Infraestructura certificada que garantiza el más alto nivel de seguridad para sus datos sensibles.                                             |

### Configuración de la replicación

#### Políticas de replicación

La creación de una política de replicación define los parámetros de protección de sus máquinas virtuales:

- __Destino__: Selección del almacenamiento objetivo en la zona de disponibilidad de replicación
- __Frecuencia__: Intervalo de replicación adaptado a sus necesidades de recuperación (RPO)
- __Retención__: Número de puntos de recuperación conservados

#### Intervalos disponibles

| Intervalo               | Uso recomendado                            | RPO (pérdida máxima de datos) |
|-------------------------|--------------------------------------------|-------------------------------|
| __1 a 59 minutos__      | Aplicaciones críticas en tiempo real      | < 1 hora                      |
| __1 a 24 horas__        | Aplicaciones empresariales y entornos estándar | < 24 horas                 |

#### Association of virtual machines

Once the policy is created, you can associate your virtual machines to protect:

- __Single selection__: Select VMs from the Console interface  
- __Automatic validation__: Compatibility and prerequisites verification  
- __Immediate activation__: Automatic start of replication after configuration

### Gestión de réplicas

#### Vista de las políticas

La Consola Cloud Temple ofrece una vista centralizada de sus políticas de replicación con:

- Nombre y frecuencia de cada política
- Zona de disponibilidad de destino
- Pool y almacenamiento asociados
- Acciones de gestión disponibles

#### Vista de réplicas

La tabla de réplicas le permite visualizar:

- Nombre de las máquinas virtuales replicadas  
- Ubicación de origen y destino  
- Política de replicación asociada  
- Exportación de datos en formato CSV

### Buenas prácticas

#### Recomendaciones por tipo de carga

- __Aplicaciones críticas__: Replicación cada 1-30 minutos para minimizar la pérdida de datos  
- __Aplicaciones empresariales__: Replicación horaria o bienhoraria según las necesidades  
- __Entornos de desarrollo__: Replicación diaria generalmente suficiente

#### Planificación de políticas

- Cree políticas distintas según la criticidad de sus aplicaciones
- Nombre claramente sus políticas para facilitar la gestión
- Verifique periódicamente el estado de sus réplicas desde la consola
- Documente su estrategia de replicación para sus equipos

__Nota importante:__

*La replicación no reemplaza una estrategia de copia de seguridad completa. Constituye un complemento esencial para garantizar la continuidad operativa en caso de incidente grave en su sitio principal.*

## Alta disponibilidad

La alta disponibilidad permite garantizar la continuidad del servicio de las máquinas virtuales (VM) en caso de fallo de un host físico dentro de un pool OpenIaaS.  
Con la alta disponibilidad (HA), cada host del pool envía periódicamente señales de vida a sus pares a través del almacenamiento compartido (Heartbeat de Block Storage). En caso de ausencia prolongada de respuesta, el host se considera fallido.

Un almacenamiento en bloque designado como heartbeat significa que servirá como base para autenticar a los hosts que ya no respondan.

Para que la alta disponibilidad se configure correctamente en un pool OpenIaaS, es imprescindible contar con **al menos dos hosts** conectados.

Cada VM debe configurarse con un nivel de prioridad de reinicio en alta disponibilidad:

#### Disabled
 High availability is not configured. In the event of host failure, the virtual machine will not be restarted.

#### Restart
In case of host failure, the virtual machine will be automatically restarted as soon as resources become available in the pool. Virtual machines configured in "restart" mode are prioritized over those configured in "best-effort" mode.

#### Best-effort  
In the event of host failure, the virtual machine will be automatically restarted only if resources remain available after processing all virtual machines configured in "restart" mode. The "Best-effort" mode performs only one attempt, so if resources are insufficient, the virtual machine will not be restarted.
