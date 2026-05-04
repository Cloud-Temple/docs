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
- __Maximum predictability__: You control virtualization rates, IOPS pressure on storage, and benefit from clear, consumption-based monthly billing.

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
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99 %, medida mensualmente, incluyendo las ventanas de mantenimiento.                                        |
| Resiliencia         | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                               |
| Automatización      | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                        |
| Por demanda         | Recursos disponibles bajo demanda.                                                                                                          |

## Regions and Availability Zones

The OpenIaaS product is deployed within an availability zone.  
An availability zone is part of a region.

This deployment model allows you to choose the location of clusters and distribute them across different availability zones (AZ).  
This provides better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in the event of an incident.

## Clases de servidores de cálculo

Las máquinas de cálculo disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para satisfacer diversas necesidades:

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          |
|------------------------|--------------|--------------------------------------------|----------------------------|-----------------------|----------------------|
| __ECO__               | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)   | 20 / 40 hilos              | 2 x 10 Gbit/s         | -                    |
| __STANDARD__          | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)   | 32 / 64 hilos              | 2 x 25 Gbit/s         | -                    |
| __ADVANCE__           | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)     | 48 / 96 hilos              | 2 x 25 Gbit/s         | -                    |
| __PERFORMANCE 1__     | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente)  | 16 / 32 hilos              | 2 x 25 Gbit/s         | -                    |
| __PERFORMANCE 2__     | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)     | 36 / 72 hilos              | 2 x 25 Gbit/s         | -                    |
| __PERFORMANCE 3__     | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)     | 56 / 112 hilos             | 2 x 25 Gbit/s         | -                    |
| __PERFORMANCE 4__     | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)   | 32 / 64 hilos              | 2 x 25 Gbit/s         | 2 x NVIDIA L40S 48GB |

### Notes

- __(1)__ The amount of memory is the physically available memory on the blades and cannot be modified.
- __(2)__ The frequencies indicated correspond to the minimum base frequency and the turbo frequency.
- __(3)__ Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- __(4)__ Available GPUs evolve according to the latest technologies. As of May 1, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.
- __(5)__ High availability on a cluster is available only with 2 or more nodes.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be reported via an incident ticket.

## Clases de almacenamiento en modo bloque

El almacenamiento en bloque distribuido, basado en __IBM Spectrum Virtualize__, ofrece una gama de rendimientos adecuada para diversos casos de uso:

| Referencia | IOPS/To | Techo máximo IOPS / LUN | Ancho de banda máx / LUN | Uso principal |
|-----------------------------------|-------------------------|-----------------------------------------|
| __FLASH - Esencial__              | 500                     | Cargas de trabajo ligeras               |
| __FLASH - Estándar__              | 1500                    | Cargas de trabajo estándar              |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | 30 000 IOPS               | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | 30 000 IOPS               | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | 30 000 IOPS               | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:ultra:v1      |
| __MASS STORAGE - Archivo__        | No aplicable            | Almacenamiento económico para el archivo|

### Características

- __Tecnología__: Flash NVMe con __RAID distribuido 6__ para una mayor resiliencia.
- __Disponibilidad__: 99,99 %, medida mensualmente.
- __Restricciones__: Sin limitaciones en lecturas ni escrituras. Sin compresión ni deduplicación automáticas, garantizando el uso total de los volúmenes reservados.

### Seguridad y cifrado del almacenamiento en bloques

Para garantizar la confidencialidad de sus datos en reposo, toda nuestra infraestructura de almacenamiento en bloques integra un cifrado hardware robusto.

- __Tipo de cifrado__: Los datos se cifran directamente en los discos (`Data At Rest`) utilizando el algoritmo __XTS-AES 256__.
- __Cumplimiento__: Este método de cifrado cumple con la norma __FIPS 140-2__, asegurando un alto nivel de seguridad validado.
- __Funcionamiento__: El cifrado se aplica en el momento de escritura de los datos en el soporte de almacenamiento físico.

:::warning[Punto de atención sobre la replicación]
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

## Copia de seguridad de máquinas virtuales

La oferta OpenIaaS incluye una __arquitectura nativa y no desactivable de copia de seguridad distribuida__, requisito obligatorio en el marco de la cualificación francesa SecNumCloud.

Las copias de seguridad se almacenan en el [Almacenamiento Objeto cualificado SecNumCloud](../storage/oss), garantizando una protección óptima en caso de fallo grave en el centro de datos de producción. Este enfoque permite restaurar los datos en un centro de datos secundario, incluso en incidentes críticos como incendios.

### Servicios de protección de datos disponibles

| Servicio | Descripción |
|---|---|
| **Copia de seguridad incremental (Agentless)** | Copia de seguridad sin agente mediante los mecanismos nativos del hipervisor, hacia un repositorio S3 remoto. |
| **Copia de seguridad de metadatos** | Protección de las configuraciones del pool de virtualización y del orquestador de copias de seguridad — indispensable para la recuperación ante desastres. |
| **Restauración granular** | Restauración a nivel de VM completa, disco virtual individual o archivo unitario. |
| **Descarga S3 Multi-AZ** | Externalización hacia el almacenamiento de objetos S3 de Cloud Temple replicado entre zonas de disponibilidad. |

Las velocidades de copia de seguridad y restauración dependen de la tasa de cambio en los entornos. La política de copia de seguridad es completamente configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

| Referencia | Unidad | Techo máximo IOPS / LUN | Ancho de banda máx / LUN | SKU |
|---|---|---|
| BACKUP - Acceso al servicio | 1 VM | csp:(region):openiaas:backup:vm:v1 |

---

### Arquitectura técnica de la copia de seguridad

#### Visión general

La arquitectura se basa en una separación estricta entre el **plano de control** (orquestador de copias de seguridad) y el **plano de datos** (almacenamiento S3 remoto): el orquestador está alojado en el clúster de gestión de Cloud Temple (separado e inaccesible para el cliente), mientras que los datos de copia de seguridad se almacenan en un repositorio S3 remoto, físicamente separado de la infraestructura de producción. Los datos se transmiten cifrados entre ambos componentes mediante HTTPS/TLS 1.3.

#### Orquestador de copias de seguridad

El orquestador se despliega en el clúster de gestión de Cloud Temple, **inaccesible directamente para el cliente**. Coordina todos los trabajos de copia de seguridad y gestiona el cifrado.

- **Políticas estándar**: se aplican políticas de copia de seguridad por defecto a cada tenant.
- **Políticas personalizadas**: el cliente puede solicitar frecuencias o retenciones específicas mediante un ticket de soporte en la consola de Cloud Temple.

#### Almacenamiento S3 remoto

Las copias de seguridad se envían al [Almacenamiento Objeto cualificado SecNumCloud](../storage/oss) de Cloud Temple, con replicación Multi-AZ para garantizar la resiliencia ante la pérdida de un sitio físico completo.

---

### Mecanismo de copia de seguridad: Backup Incremental

El servicio utiliza un modo de copia de seguridad **incremental**. Este modo apunta a un **Backup Repository** (el almacenamiento S3 remoto) y nunca exporta una copia de seguridad completa después de la primera: solo se transfieren los **bloques de datos modificados** en cada ciclo.

:::info[Copia de seguridad incremental vs Replicación]
La **copia de seguridad incremental** apunta a un repositorio S3 remoto y está optimizada para la **protección a largo plazo**. No debe confundirse con la **replicación** (Disaster Recovery en caliente) que apunta a un Storage Repository local — este modo está cubierto por la funcionalidad de [replicación de máquinas virtuales](#replicación-de-máquinas-virtuales).
:::

#### Ciclo de vida técnico de una copia de seguridad incremental

**1. Creación del snapshot local (Fuente)**

Al inicio del trabajo, el orquestador solicita al hipervisor que cree un snapshot de la VM. Este snapshot sirve como punto de comparación para calcular el delta respecto al snapshot de referencia anterior.

**2. Exportación diferencial mediante Changed Block Tracking (CBT)**

El orquestador compara el nuevo snapshot con el snapshot de referencia anterior usando metadatos CBT. Solo se extraen los bloques de datos que han cambiado desde la última copia de seguridad.

**3. Cifrado y transferencia a S3**

Los bloques modificados se **cifran al vuelo por el orquestador** y luego se envían mediante HTTPS/TLS 1.3 al bucket S3 remoto.

**4. Rotación de snapshots (Coalesce)**

Una vez validada la transferencia, el antiguo snapshot de referencia se elimina y el nuevo snapshot se convierte en la referencia para el próximo ciclo. El hipervisor desencadena entonces un proceso de **coalesce** (fusión).

:::warning[Impacto en I/O del Coalesce]
La operación de coalesce es **intensiva en I/O** sobre el almacenamiento de producción. Se desencadena automáticamente tras cada copia de seguridad exitosa. Se recomienda planificar las ventanas de copia de seguridad durante períodos de baja carga aplicativa.
:::

**5. Gestión de la retención en S3 (Merge) y Key Backup Interval**

En el almacenamiento S3, el orquestador gestiona la rotación de copias de seguridad fusionando los deltas antiguos. Una copia de seguridad completa se **fuerza periódicamente** (típicamente cada 20 incrementos — *Key Backup Interval*).

---

### Impacto en el dimensionamiento del almacenamiento de producción

:::warning[Punto de atención crítico — Almacenamiento en bloque (Thick provisioning)]
La oferta OpenIaaS se basa en almacenamiento en bloque de alto rendimiento (Fibre Channel / LVM). Los snapshots se aprovisionan en modo **Thick**: cada snapshot consume en el Storage Repository (SR) el **tamaño nominal completo del disco de la VM**, no solo el delta real.

**Ejemplo de consumo para una VM con un disco de 50 GB:**

| Elemento | Consumo en SR |
|---|---|
| Disco VM activo | 50 GB |
| Snapshot de referencia permanente | 50 GB |
| Snapshot temporal durante la exportación | 50 GB |
| **Total requerido durante la ventana de copia de seguridad** | **hasta 150 GB** |

**Regla de dimensionamiento recomendada**: prever **al menos el 50% de espacio libre** en el almacenamiento de producción.
:::

---

### Seguridad y cifrado de las copias de seguridad

#### Cifrado en tránsito

Todas las comunicaciones entre el orquestador de copias de seguridad y el almacenamiento S3 se cifran mediante **HTTPS / TLS 1.3**.

#### Cifrado en reposo y gestión de claves

| Parámetro | Valor |
|---|---|
| **Algoritmo** | AES-256 o ChaCha20-Poly1305 |
| **Generación de clave** | Automática al desplegar el orquestador de copias de seguridad |
| **Almacenamiento de clave** | Vault centralizado de Cloud Temple (nunca expuesto en la interfaz del cliente) |
| **Resiliencia** | En caso de pérdida del orquestador, la clave se reinyecta desde el Vault |

#### Aislamiento de red (arquitectura SecNumCloud)

- **Separación física**: las redes *Cliente*, *Administración* y *Backup* se basan en backbones físicos distintos y contextos de enrutamiento (VRF) separados.
- **Imposibilidad de infección lateral**: una VM comprometida no puede alcanzar el almacenamiento S3 ni el orquestador de copias de seguridad.

#### Administración segura

| Control | Medida |
|---|---|
| **Bastión de acceso** | Paso obligatorio por un bastión de administración interno reforzado (Ubuntu Hardened) |
| **Puesto de trabajo** | Acceso solo desde laptops de administración dedicados y asegurados |
| **Autenticación** | MFA obligatorio mediante un directorio LDAP de administración dedicado |

---

### Monitorización y auditoría

- **Registros de copia de seguridad**: visibles por el cliente directamente en la Consola Cloud Temple — estado (éxito/fallo), volumetría, marca de tiempo.
- **Registros de acceso de administrador**: los accesos a la infraestructura de backup se registran y **se auditan mensualmente**.
- **Pruebas de intrusión (PASSI)**: pruebas de penetración regulares por proveedores cualificados PASSI.
- **Seguridad física**: todos los equipos alojados en zonas SecNumCloud (jaulas físicas dedicadas con control de acceso biométrico).

---

### Compatibilidad y casos especiales

:::warning[VMs con escrituras en disco continuas]
Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad cuando sus **cargas de escritura en disco son constantes** (bases de datos activas, registros de transacciones, etc.). El hipervisor no puede entonces finalizar el snapshot sin congelar la VM, lo que puede durar varias horas.

Para estas cargas de trabajo, se recomienda **complementar o sustituir la copia de seguridad del hipervisor por una copia de seguridad aplicativa**: volcado de base de datos (pg_dump, mysqldump…), copia de seguridad por agente o exportación nativa de la aplicación.
:::

---

### Creación de una política de copia de seguridad

La creación de una política de copia de seguridad es una operación de administración realizada **exclusivamente mediante una solicitud de soporte**, accesible a través del icono de salvavidas en la parte superior derecha de la interfaz.

La solicitud debe especificar:

- El nombre de su Organización
- Datos de contacto (correo electrónico y teléfono) para finalizar la configuración
- El nombre del tenant
- El nombre de la política de copia de seguridad
- Características deseadas: frecuencia, retención (x días, y semanas, z meses…)

#### Restricciones de planificación

| Restricción | Valor |
|---|---|
| **Intervalo mínimo entre dos ejecuciones** | 24 horas |
| **Retención máxima** | 24 meses |
| **Ejecuciones simultáneas por política** | 1 a la vez |

:::warning[Una política solo puede ejecutarse una vez a la vez]
Cada política de copia de seguridad es de **instancia única**: solo puede haber una ejecución activa simultáneamente.

**Consecuencia práctica**: si agrega muchas máquinas virtuales a una política existente y la copia de seguridad del día anterior no ha terminado cuando se dispara la siguiente ejecución programada, **el nuevo ciclo no se iniciará** — se omitirá hasta la próxima ocurrencia.

Para evitarlo: compruebe los tiempos de ejecución en los registros de la Consola, ajuste la frecuencia o el tamaño de la política, o distribuya las VMs en varias políticas con horarios escalonados.
:::

:::info[Retención a largo plazo — disponibilidad futura]
**La retención máxima es actualmente de 24 meses.** Una retención a largo plazo (hasta 10 años) se integrará con el lanzamiento de nuestro producto **Glacier**, previsto para el **primer trimestre de 2027**, como suscripción complementaria.

Para períodos de retención tan largos, recomendamos guardar **exclusivamente archivos planos** y **volcados de bases de datos**. La restauración de un servidor completo tras 10 años conlleva riesgos importantes de obsolescencia.

**Alternativa disponible ahora**: el servicio de **copia de seguridad por agente**, disponible como suscripción complementaria. Contacte con el soporte para más información.
:::

## Máquinas virtuales

### Gestión de recursos vCPU

Los cambios en los recursos vCPU se realizan en frío (máquina apagada). La plataforma admite hasta 254 vCPUs por máquina virtual (límite teórico), con pruebas concluyentes realizadas en máquinas virtuales Linux con 128 vCPUs.

Es importante destacar que el soporte del sistema operativo invitado constituye un factor determinante al asignar recursos. Una asignación que exceda los límites soportados por el sistema operativo puede provocar problemas significativos de rendimiento.

### Memory resource management

Memory modifications are also performed cold. The limits are as follows:

- 1.5 TiB with memory snapshot support
- 8 TiB without memory snapshot support
- 16 TiB (theoretical maximum, without security support, minus RAM allocated to Xen and the control domain)

The actual usable memory may be limited by the guest operating system. Exceeding the limits supported by the guest OS may result in performance degradation.

### Gestión de discos

- El tamaño máximo de un disco es de 2 TB
- Los discos utilizan el formato VHD estándar
- El número máximo de discos virtuales por máquina virtual, incluidos los lectores CD-ROM, es de 24

No es posible redimensionar los discos una vez creados. Para ampliar la capacidad de almacenamiento, es necesario crear un nuevo disco.

### Tools for virtual machines

These tools are used to achieve optimal performance of virtual machines. When you want to perform an action that requires one of these tools, a message will appear on the Cloud Temple console.

To install these tools, you can consult the official Xen Server websites to obtain a precise procedure according to your OS.

#### Management Agent

The Management Agent is a component installed in each virtual machine. It enables the hypervisor to better manage the machine by providing access to more information and allows certain actions to be performed more cleanly.

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

In the detailed view of a virtual machine template, you can review crucial information such as location, number of disks, and number of network adapters.

When the number of virtual disks is shown as 0, it indicates that this is a configuration template without a preinstalled operating system, allowing you to deploy your own customized environment.

## Replicación de máquinas virtuales

La __replicación de máquinas virtuales__ de Cloud Temple garantiza la protección y continuidad de sus datos críticos mediante una copia automática de sus entornos hacia una zona de disponibilidad distinta. Esta funcionalidad, integrada nativamente en la oferta IaaS de código abierto, cumple con los requisitos más estrictos de continuidad operativa y recuperación ante desastres.

### Protección automatizada y segura

La replicación Cloud Temple se basa en una infraestructura __certificada SecNumCloud__, garantizando:

- __Replicación asíncrona__: Copia continua de sus máquinas virtuales sin impacto en el rendimiento de producción
- __Separación geográfica__: Almacenamiento de los réplicas en una zona de disponibilidad diferente de la fuente
- __Automatización completa__: Proceso completamente automatizado a través de la [Consola Cloud Temple](../console/console.md)
- __Cumplimiento normativo__: Respeto de los requisitos de copia de seguridad y continuidad de actividad

### Benefits of replication

| Benefit                 | Description                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Business continuity     | Protection of your critical services in case of a major incident at the primary site.                                                          |
| Geographic protection   | Replication to a distinct availability zone, protecting against localized disasters.                                                             |
| Temporal flexibility    | Choice of replication interval according to your needs: from 1 minute to 24 hours.                                                            |
| Ease of management      | Configuration and monitoring fully integrated into the Cloud Temple Console.                                                                |
| SecNumCloud compliance  | Qualified infrastructure ensuring the highest level of security for your sensitive data.                                             |

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
- Nombre claramente sus políticas para facilitar su gestión
- Verifique periódicamente el estado de sus réplicas desde la consola
- Documente su estrategia de replicación para sus equipos

__Nota importante:__

*La replicación no reemplaza una estrategia de copia de seguridad completa. Constituye un complemento esencial para garantizar la continuidad operativa en caso de incidente grave en su sitio principal.*

## Alta disponibilidad

La alta disponibilidad permite garantizar la continuidad del servicio de las máquinas virtuales (VM) en caso de fallo de un host físico dentro de un pool OpenIaaS.  
Con la alta disponibilidad (HA), cada host del pool envía periódicamente señales de vida a sus pares a través del almacenamiento compartido (Block Storage Heartbeat). En caso de ausencia prolongada de respuesta, el host se considera fallido.

Un almacenamiento en bloque designado como heartbeat significa que servirá como base para autenticar a los hosts que ya no respondan.

Para que la alta disponibilidad se configure correctamente en un pool OpenIaaS, es imprescindible contar con __al menos dos hosts__ conectados.

Cada VM debe configurarse con un nivel de prioridad de reinicio en alta disponibilidad:

#### Disabled

 High availability is not configured. In the event of host failure, the virtual machine will not be restarted.

#### Restart

In case of host failure, the virtual machine will be automatically restarted as soon as resources become available in the pool. Virtual machines configured in "restart" mode are prioritized over those configured in "best-effort" mode.

#### Best-effort  

In the event of host failure, the virtual machine will be automatically restarted only if resources remain available after processing all virtual machines configured in "restart" mode. The "Best-effort" mode performs only one attempt; therefore, if resources are insufficient, the virtual machine will not be restarted.
