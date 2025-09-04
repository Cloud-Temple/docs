---
Título: Conceptos
---

La oferta __IaaS (Infrastructure as a Service)__ del Cloud Temple está diseñada para satisfacer necesidades críticas de continuidad y recuperación ante desastres, con un enfoque especial en sectores exigentes como la industria, el banco y la seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y una optimización de rendimiento para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se basa en socios tecnológicos de renombre internacional:

- Cálculo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para el almacenamiento bloqueado, y __DELL ECS__ para el almacenamiento objetivo.
- Red: __JUNIPER__.
- Virtualización: __Stack Opensource__, ofreciendo una base confiable y probada para gestionar sus entornos de nube.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, asegurando una amplia compatibilidad con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque completamente automatizada a través de APIs y el proveedor Terraform, la oferta IaaS de Cloud Temple ofrece una infraestructura única:

- __Recursos dedicados__ : Las núcleos de cálculo, volúmenes de almacenamiento, y pilas lógicas (virtualización, backup, firewalling, etc.) nunca se comparten entre los clientes.
- __Previsibilidad máxima__ : Usted controla las tasas de virtualización, la presión en IOPS sobre el almacenamiento y disfruta de una facturación clara, a la mensualidad de consumo.

La plataforma está calificada como __SecNumCloud__ por [ANSSI](https://www.ssi.gouv.fr/), lo que garantiza un alto nivel de automatización y seguridad.

## Principales funcionalidades

- Recursos de cálculo (CPU, RAM) dedicados y a demanda.
- Almacenamiento a demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad con retención configurable.
- Replicación asíncrona para almacenamiento o máquinas virtuales.
- Gestión a través de la [Consola Shiva](../console/console.md) o en modo Infraestructura como código mediante APIs y proveedor Terraform.

## Benefits

| Advantage            | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digitala  | Almacenamiento de datos en Francia y cumplimiento con el RGPD.                                                                                          |
| Seguridad            | Plataforma altamente segura, calificada SecNumCloud, HDS (Almacenamiento de Datos de Salud), ISO 27001 e ISAE 3402 tipo II.                  |
| Alta disponibilidad  | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo períodos de mantenimiento.                                        |
| Resiliencia         | Implementación de planes de continuidad y recuperación ante desastres según sea necesario.                                                               |
| Automatización      | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                        |
| Disponible al demanda | Recursos disponibles a demanda.                                                                                                          |

## Zonas de disponibilidad y regiones

El producto OpenIaaS se despliega en una zona de disponibilidad.
Una zona de disponibilidad pertenece a una región.

Este tipo de despliegue permite seleccionar la ubicación de los clusters y distribuirlos sobre diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución del carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de incidente.

---

## Clases de láminas de cálculo

Las láminas de cálculo disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para satisfacer diversos necesidades:

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Números de núcleo / hilos | Conectividad __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos               | 2 x 10 Gbit/s        | -                    |
| __STANDARD__         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos               | 2 x 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos               | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y o equivalente) | 16 / 32 hilos               | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos               | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos              | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos               | 2 x 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

**Nota:** Los nombres de las variables, funciones y clases en el código Python no se traducen. De igual manera, los comentarios independientes (comenzando con #) se traducen, pero no los contenidos dentro de las cadenas de texto.

### Notas

- **(1) La cantidad de memoria es la disponible físicamente en las láminas y no puede ser modificada.**
- **(2) Las frecuencias indicadas corresponden a la frecuencia mínima básica y a la frecuencia turbo.**
- **(3) La conectividad física está mutualizada para el acceso a red e almacenamiento bloque, gracias a una arquitectura convergente Cisco UCS.**
- **(4) Los GPUs disponibles evolucionan en función de las últimas tecnologías. A partir del 1 de mayo de 2024, la oferta incluye GPUs NVIDIA LOVELACE L40S.**
- **(5) La alta disponibilidad en un cluster está disponible solo a partir de 2 nodos.**

La disponibilidad de la infraestructura se garantiza al 99.9% mensualmente, incluyendo las plazas de mantenimiento. Cualquier solicitud relacionada con el SLA debe declararse mediante un ticket de incidente.

## Clases de almacenamiento en modo bloque

El almacenamiento distribuido basado en __IBM Spectrum Virtualize__ ofrece una gama de rendimientos adaptados a diversos casos de uso:

| Referencia                         | IOPS/TB                 | Uso principal                        |
|-----------------------------------|-------------------------|----------------------------------------|
| __ALMACENAMIENTO FLASH - Esencial__ | 500                     | Cargas de trabajo ligeras                |
| __ALMACENAMIENTO FLASH - Estándar__ | 1500                    | Cargas de trabajo estándar              |
| __ALMACENAMIENTO FLASH - Premium__ | 3000                    | Cargas intensivas                     |
| __ALMACENAMIENTO FLASH - Empresarial__ | 7500                    | Cargas críticas                      |
| __ALMACENAMIENTO FLASH - Ultra__    | 15000                   | Cargas ultra-intensivas               |
| __ALMACENAMIENTO MASS - Archivo__   | No aplicable            | Almacenamiento económico para el archivado   |

### Características

- **Tecnología**: NVMe Flash con Distributed RAID 6 para mayor resiliencia.
- **Disponibilidad**: 99,99%, medida mensualmente.
- **Restricciones**: No limitaciones en lecturas ni escrituras. No compresión ni deduplicación automática, asegurando el uso total de los volúmenes reservados.

## Los redes

El producto OpenIaaS es compatible con los redes privadas (↓) y el acceso a Internet (↓).

Dos tipos de redes están disponibles desde la configuración de una máquina virtual:

### Redes VLAN

Los redes VLAN se propagan por un VLAN por interfaz de red. Si deseas utilizar varios redes, simplemente crea varias interfaces de red.

Una limitación es que solo puedes crear hasta 7 interfaces virtuales en una VM.

### El Encabezado de VLAN Trunk

En el caso de que sea necesario propagar más de 7 VLANs, es necesario utilizar un Encabezado de VLAN Trunk.
El Encabezado de VLAN Trunk permite que pasen todos los VLANs a través de una sola interfaz. La configuración de los IDs de VLAN se realiza a través de interfaces virtuales de tipo VLAN desde el sistema operativo de la VM. Los IDs de VLAN son los mismos que los que se encuentran y son visibles desde la consola.

## Virtual Machine Backups

Cloud Temple offers a **distributed, non-stop backup architecture**, an essential component for SecNumCloud French qualification.

Backups are stored on the [Qualified Object Storage (SecNumCloud)](../storage/oss), ensuring optimal protection in case of major production datacenter failure. This approach allows restoring data onto a secondary datacenter even during critical incidents such as fires.

This comprehensive solution includes:

- **Hot, on-site backup of the entire disk**
- **Flexibility in restoration**, enabling selection of recovery point and location

The backup infrastructure leverages an open-source technology with agentless architecture, combining ease of use with automated processes. This solution optimizes storage space usage while maintaining high performance.

Backup speeds and restore times depend on the data change rate in environments. The backup policy can be fully configured via [Cloud Temple Console](../console/console.md) for each virtual machine.

**Important Note:**

*Some virtual machines may not be compatible with this backup technology*, which relies on hypervisor instantaneous snapshot mechanisms. This typically applies to VMs with constant disk write operations. In such cases, the hypervisor cannot finalize the snapshot, necessitating VM freeze for completing the operation—a process that can last several hours and is non-interruptible.

The recommended solution involves excluding the targeted disk from persistent writes and employing an alternative backup method.

| Reference                                   | Unité | SKU                               |
| -------------------------------------------- | ----- | ---------------------------------- |
| BACKUP - Access to service                  | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creación de una política de respuesta ante desastres

Para crear una nueva política de respuesta ante desastres, es necesario presentar una solicitud al soporte, accesible a través del icono de baliza ubicado en la parte superior derecha de la interfaz.

La creación de una nueva política de respuesta ante desastres se realiza mediante:

- Nombre de tu Organización
- Coordenadas de un contacto (correo electrónico y número de teléfono) para finalizar la configuración
- Nombre del propietario
- Nombre de la política de respuesta ante desastres
- Características deseadas (x días, y semanas, z meses, etc.)

### Las máquinas virtuales

### Gestión de recursos vCPU

Las modificaciones de recursos vCPU se realizan frías (la máquina apagada). La plataforma soporta hasta 254 vCPUs por máquina virtual (límite teórico), con pruebas exitosas realizadas sobre VMs Linux equipadas con 128 vCPUs.

Es importante destacar que el soporte del sistema operativo invitado es un factor determinante para la asignación de recursos. Una asignación que supera las límites soportados por el sistema operativo puede resultar en problemas de rendimiento significativos.

### Gestión de recursos de memoria

Las modificaciones de memoria también se realizan a temperatura fría. Las limitaciones son las siguientes:

- 1,5 TiB con soporte para snapshots de memoria
- 8 TiB sin soporte para snapshots de memoria
- 16 TiB (límite teórico sin soporte de seguridad, menos la RAM asignada a Xen y el dominio de control)

La memoria realmente utilizable puede verse limitada por el sistema operativo invitado. Superar las límites soportados por el OS invitado puede resultar en una disminución de las prestaciones.

### Gestión de Discos

- El tamaño máximo de un disco es de 2 TB
- Los discos utilizan el formato VHD estándar
- El número máximo de discos virtuales por máquina virtual, incluyendo los lectores CD-ROM, es de 24

No se puede redimensionar una vez creados los discos. Para ampliar la capacidad de almacenamiento, es necesario crear un nuevo disco.

### Herramientas para máquinas virtuales
Estos herramientas se utilizan para garantizar un funcionamiento óptimo de las máquinas virtuales. Cuando desees realizar una acción y uno de estos herramientas sea necesario, se mostrará un mensaje en la consola Cloud Temple.

Para instalar estos herramientas, puedes consultar los sitios oficiales de Xen Server para obtener instrucciones específicas según tu sistema operativo.

#### Agente de Gestión
El Agente de Gestión se instala en cada máquina virtual. Permite al hypervisor gestionar mejor la máquina al tener acceso a más información y permite realizar ciertas acciones de manera más eficiente.

#### Controladores de Vídeo Papel (Controladores de Video PV)
Los controladores de video PV son pilotos instalados en la máquina virtual para mejorar sus rendimientos.
Sin estos pilotos, la máquina funciona, pero a un ritmo más lento. Además, permiten ciertas acciones avanzadas.
Los controladores de video PV se instalan de forma nativa en la mayoría de los sistemas operativos Linux actuales.

### Herramientas
Las Herramientas son un conjunto de componentes software que mejoran la integración de la máquina virtual con la infraestructura de virtualización.

## Catálogos

El catálogo permite gestionar tres tipos esenciales de elementos:

- Imágenes discos (ISO)
- Plantillas de configuración
- Plantillas virtuales preconfiguradas

En la vista detallada de una plantilla virtual, se pueden consultar información crucial como la ubicación, el número de discos o el número de adaptadores de red.

Cuando el número de discos virtuales se indica como cero, significa que se trata de una plantilla de configuración sin sistema operativo preinstalado, permitiéndonos desplegar nuestro entorno personalizado propio.

## Replicación de máquinas virtuales

La __replicación de máquinas virtuales__ de Cloud Temple asegura la protección y continuidad de sus datos críticos mediante una copia automática de sus entornos hacia una zona de disponibilidad distinta. Esta función, integrada de forma nativa en el servicio IaaS de código abierto, cumple con las exigencias más estrictas de continuidad de negocio y recuperación ante desastres.

### Automated and Secure Protection

The Cloud Temple replication leverages a qualified SecNumCloud infrastructure, ensuring:

- **Asynchronous Replication**: Continuous copying of your virtual machines without impacting production performance
- **Geographical Separation**: Storage of replicas in a different availability zone compared to the source
- **Complete Automation**: Fully automated process via [Cloud Temple Console](../console/console.md)
- **Regulatory Compliance**: Adherence to backup and continuity of operations requirements

### Ventajas de la Replicación

| Avantage                | Descripción                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuidad del servicio | Protección de servicios críticos en caso de un incidente mayor en el sitio principal.                                                          |
| Protección geográfica  | Replicación hacia una zona de disponibilidad distinta, protegiendo contra desastres locales.                                             |
| Flexibilidad temporal   | Elección del intervalo de replicación según sus necesidades: desde 1 minuto hasta 24 horas.                                                            |
| Gestión sencilla       | Configuración y monitoreo completamente integrados en la Consola Cloud Temple.                                                                |
| Conformidad SecNumCloud| Infraestructura calificada que garantiza el nivel más alto de seguridad para sus datos sensibles.                                             |

## Configuración de la replicación

Este archivo contiene las configuraciones para la replicación del sistema. A continuación, se detallan los elementos clave:

1. **Nodos de Replicación**:
   - `nodos_replicación`: Lista de nodos que participarán en el proceso de replicación.
     ```markdown
     nodos_replicación:
       - nodo1
       - nodo2
       - nodo3
     ```

2. **Algoritmo de Replicación**:
   - `algoritmo_replicación`: Especifica el algoritmo utilizado para la replicación.
     ```markdown
     algoritmo_replicación: "Synchronous"
     ```

3. **Frecuencia de Replicación**:
   - `frecuencia_replicación`: Define la frecuencia con la que se realiza la replicación.
     ```markdown
     frecuencia_replicación: "Daily"
     ```

4. **Tolerancia a Fallos**:
   - `tolerancia_fallos`: Indica el nivel de tolerancia al fallo en los nodos de replicación.
     ```markdown
     tolerancia_fallos: "High"
     ```

5. **Mecanismo de Consistencia**:
   - `mecanismo_consistencia`: Descripción del mecanismo utilizado para garantizar la consistencia entre los datos replicados.
     ```markdown
     mecanismo_consistencia: "Two-Phase Commit"
     ```

6. **Gestión de Conflictos**:
   - `gestión_conflictos`: Estrategia implementada para manejar conflictos en los datos replicados.
     ```markdown
     gestión_conflictos: "Last Write Wins"
     ```

7. **Monitoreo y Alertas**:
   - `monitoreo_alertas`: Configuración de alertas para monitorear el proceso de replicación.
     ```markdown
     monitoreo_alertas:
       - tipo: "Email"
       - destino: "admin@example.com"
       - mensaje: "Alerta sobre fallos en la replicación."
       - intervalo: "Every 5 minutes"
     ```

8. **Optimización de Replicación**:
   - `optimización_replicación`: Estrategias implementadas para optimizar el proceso de replicación.
     ```markdown
     optimización_replicación:
       - compresión_datos: True
       - caché_intermediaria: "Redis"
       - paralelismo: "Multi-threaded"
     ```

Estas configuraciones son esenciales para garantizar un sistema de replicación eficiente y confiable. Cada parámetro debe ser ajustado según las necesidades específicas del entorno IT en el que se implemente la solución.

#### Políticas de replicación

La creación de una política de replicación define los parámetros de protección de tus máquinas virtuales:

- **Destino**: Selección del almacenamiento objetivo en la zona de disponibilidad de replicación
- **Frecuencia**: Intervalo de replicación adaptado a tus necesidades de recuperación (RPO)
- **Retención**: Número de puntos de recuperación conservados

#### Intervalos disponibles

| Intervalo              | Uso recomendado                           | RPO (Pérdida de datos máxima) |
|-------------------------|--------------------------------------------|-----------------------------|
| __1 a 59 minutos__      | Aplicaciones críticas en tiempo real         | < 1 hora                   |
| __1 a 24 horas__       | Aplicaciones de negocio y entornos estándar | < 24 horas               |

#### Asociación de máquinas virtuales

Una vez que se haya creado la política, puede asociar sus máquinas virtuales para proteger:

- __Selección simple__ : Selección de las VMs desde la interfaz de la Consola
- __Validación automática__ : Verificación de la compatibilidad y los requisitos
- __Activación inmediata__ : Arranque automático de la replicación después de la configuración

## Gestión de Replicas

La gestión de replicas en el ámbito del cloud computing y la ingeniería de sistemas implica la planificación, implementación y supervisión de múltiples copias o replicas de datos, aplicaciones o servicios para mejorar la disponibilidad, tolerancia a fallos, rendimiento y escalabilidad. A continuación se detallan algunos aspectos clave:

### 1. Replicas en Arquitecturas Distribuidas

En arquitecturas distribuidas como microservicios o sistemas orientados a servicios (SOA), las replicas son una parte integral para lograr alta disponibilidad y escalabilidad. Cada servicio puede tener múltiples instancias replicadas en diferentes servidores, regiones geográficas o clústeres de computación.

### 2. Tolerancia a Fallos

Una de las principales razones para implementar replicas es la tolerancia a fallos. Al tener múltiples copias de los mismos datos, si un servidor o cluster falla, las replicas pueden asumir el trabajo sin interrupción del servicio. Estrategias como la replicación síncrona y asincrónica se utilizan para equilibrar entre consistencia y rendimiento.

### 3. Consistencia de Datos

La consistencia de los datos en múltiples replicas es un desafío crítico. Las estrategias comunes incluyen:
- **Consistencia Síncro (Strong Consistency)**: Todas las replicas tienen el mismo estado a cualquier momento, lo que puede ser costoso en términos de rendimiento y complejidad.
- **Consistencia Eventual (Eventual Consistency)**: Las replicas pueden estar desactualizadas temporalmente, pero al final convergerán hacia un estado consistente. Esta es una estrategia más eficiente en términos de rendimiento y complejidad.
- **Replicación Asincrónica (Asynchronous Replication)**: Las actualizaciones se envían a las replicas después de que se han confirmado en la fuente principal, lo que puede mejorar el rendimiento pero aumenta el riesgo de desincronía.
- **Replicación Síncrona (Synchronous Replication)**: Las actualizaciones se envían al mismo tiempo y garantizan consistencia inmediata entre todas las replicas, pero puede ralentizar el sistema.

### 4. Estrategias de Replicas

- **Replicación Local**: Copias de datos en el mismo servidor o cluster.
- **Replicación Distribuida**: Copias distribuidas geográficamente para tolerar desastres locales.
- **Replicación Multi-Maestro**: Múltiples maestros que manejan las solicitudes y replican los cambios a los esclavos.
- **Replicación Master-Slave**: Un solo maestro que recibe todas las solicitudes y múltiples esclavos que almacenan copias de los datos.

### 5. Herramientas y Servicios de Gestión de Replicas

Muchas plataformas cloud ofrecen herramientas integradas o servicios para la gestión de replicas:
- **Amazon RDS**: Proporciona replicación automática con Amazon Aurora.
- **Google Cloud SQL**: Ofrece replicación geográfica y replicación síncrona/asincrónica.
- **Azure Database for MySQL, PostgreSQL, etc.**: Utiliza la replicación de alta disponibilidad para manejar copias de seguridad y recuperaciones ante desastres.
- **Cloud Storage Services (Google Cloud Storage, Amazon S3, Azure Blob Storage)**: Proporcionan replicación automática de datos en diferentes regiones.

### 6. Consideraciones de Seguridad y Privacidad

La gestión de replicas también implica considerar la seguridad y privacidad de los datos:
- **Cifrado**: Los datos en reposo y en tránsito deben estar cifrados para protegerlos contra accesos no autorizados.
- **Control de Acceso**: Implementación de políticas de control de acceso estrictas para limitar el acceso a las replicas.
- **Auditoría**: Monitoreo continuo y registro de acciones sobre las replicas para detectar actividades sospechosas.

### 7. Optimización y Gestión de Costos

La optimización de la gestión de replicas incluye:
- **Selección de Clusters Adecuados**: Elegir el tipo de cluster (on-premises, cloud) que mejor se adapte a las necesidades de rendimiento y costo.
- **Gestión de Carga**: Monitorear la carga de trabajo para asegurar que las replicas no se sobrecarguen ni quedan inservibles.
- **Automatización**: Utilizar herramientas de automatización para gestionar tareas repetitivas como el balanceo de carga, reemplazo de replicas y monitoreo del rendimiento.

En resumen, la gestión de replicas es un aspecto crucial en la ingeniería de sistemas modernos, especialmente en entornos cloud, donde la disponibilidad, tolerancia a fallos, rendimiento y escalabilidad son factores determinantes para el éxito. La elección de las estrategias de replicación debe adaptarse a las necesidades específicas del sistema, equilibrando los requisitos de consistencia con el rendimiento y los costos operativos.

#### Visión de políticas

La Consola Cloud Temple proporciona una visión centralizada de sus políticas de replicación, incluyendo:

- Nombre y frecuencia de cada política
- Zona de disponibilidad de destino
- Pools y almacenamiento asociados
- Acciones de gestión disponibles

#### Visión de replicaciones

El cuadro de replicaciones le permite visualizar:

- Nombre de máquinas virtuales replicadas
- Ubicación fuente y destino
- Política de repliquación asociada
- Exportación de datos en formato CSV

## Buenas prácticas

---

#### Recomendaciones según tipo de carga

- **Aplicaciones críticas**: Replicación de 1 a 30 minutos para minimizar la pérdida de datos
- **Aplicaciones empresariales**: Replicación horaria o bihoraria según las necesidades
- **Entornos de desarrollo**: Replicación diaria generalmente suficiente

#### Policy Planning

- Develop distinct policies based on application criticality
- Name your policies clearly for easy management
- Regularly check the status of replicas from the console
- Document your replication strategy for your team

**Important Note:**

*Replication does not replace a comprehensive backup strategy. It serves as an essential complement to ensure business continuity in case of a major incident on your primary site.*

## Alta disponibilidad

La alta disponibilidad permite garantizar la continuidad del servicio de máquinas virtuales (VM) en caso de fallo de un host físico dentro de un piscina OpenIaaS.

Con la alta disponibilidad (HA), cada host del pool envía regularmente señales de vida a sus pares a través del almacenamiento compartido (Almacenamiento de Bloque Heartbeat). En caso de ausencia prolongada de respuesta, el host se considera defectuoso.

Un Almacenamiento de Bloque designado como heartbeat actuará como base para autenticar los hosts que ya no responderán.

Para que la alta disponibilidad esté correctamente configurada en un piscina OpenIaaS, es indispensable contar con **al menos dos hosts** conectados.

Cada VM debe estar configurada con un nivel de prioridad de reinicio en alta disponibilidad:

#### Habilitado sin
La alta disponibilidad no está configurada. En caso de fallo del host, la máquina virtual no se reanudará.

#### Reinicio
En caso de fallo del host, la máquina virtual será reiniciada automáticamente una vez que estén disponibles recursos en el pool. Las máquinas virtuales configuradas en modo "reinicio" son tratadas con prioridad, antes de aquellas configuradas en modo "mejor esfuerzo".

#### Mejor esfuerzo  
  En caso de fallo del host, la máquina virtual se reiniciará automáticamente solo si hay recursos disponibles después de procesar todas las máquinas virtuales configuradas en modo "reiniciar". El modo "Mejor esfuerzo" realiza una sola intento, por lo que si los recursos son insuficientes, la máquina virtual no se reiniciará.