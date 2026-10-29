---
title: Conceptos
---

<a id="une-infrastructure-dédiée-et-automatisée"></a>

## Presentación

La oferta __IaaS OpenSource__ es una infraestructura de virtualización dedicada, diseñada para satisfacer las necesidades críticas de continuidad y de recuperación ante desastres, en particular en sectores exigentes como la industria, la banca y los seguros. Se basa en un stack de virtualización open source y garantiza una alta disponibilidad y un rendimiento predecible para sus cargas de trabajo críticas.

Aunque está completamente automatizada gracias a APIs y un provider de Terraform, la oferta propone una infraestructura dedicada:

- __Recursos dedicados__ : Las láminas de cálculo, volúmenes de almacenamiento y stacks de software (virtualización, respaldo, firewalling, etc.) nunca se comparten entre los clientes.
- __Previsibilidad máxima__ : Ustedes dominan las tasas de virtualización, la presión en IOPS sobre el almacenamiento y se benefician de una facturación clara, por consumo mensual.

## Ventajas

| Ventaja             | Descripción                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital   | Alojamiento de datos en Francia y cumplimiento del RGPD.                                                                                       |
| Seguridad           | Plataforma altamente segura, cualificada __SecNumCloud__, certificada __HDS__ (Alojamiento de Datos de Salud) e __ISO 27001__.                  |
| Alta disponibilidad | Tasa de disponibilidad de la plataforma del 99,99 %, medida mensualmente, incluyendo ventanas de mantenimiento.                                |
| Resiliencia         | Implementación de planes de continuidad o de recuperación ante desastres según las necesidades.                                                 |
| Automatización      | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                       |
| Bajo demanda        | Recursos disponibles bajo demanda.                                                                                                             |

<a id="principales-fonctionnalités"></a>

## Funcionalidades

- Recursos de cómputo (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (varias clases disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para el almacenamiento o las máquinas virtuales.
- Metrología: APIs Prometheus para visualizar todas las métricas del producto.
- Gestión a través de la [Consola](../console/console.md) o en modo Infrastructure as Code gracias a las APIs y al provider Terraform.

### Catálogos

El catálogo permite gestionar tres tipos de elementos esenciales:

- Las imágenes de disco (ISO)
- Las plantillas de configuración
- Las plantillas preinstaladas de máquinas virtuales

En la vista detallada de una plantilla de máquina virtual, puede consultar información crucial como la ubicación, el número de discos o incluso el número de adaptadores de red.

Cuando el número de discos virtuales se indica como 0, significa que se trata de una plantilla de configuración sin sistema operativo preinstalado, lo que le permite desplegar su propio entorno personalizado.

## Arquitectura

### Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se apoya en partners tecnológicos de renombre internacional:

- Cómputo: __CISCO UCS__.
- Almacenamiento: __IBM Spectrum Virtualize__, __IBM FlashSystem__ para almacenamiento en bloques, y __DELL ECS__ para almacenamiento de objetos.
- Red: __JUNIPER__.
- Virtualización: __Stack Opensource__, ofreciendo una base fiable y probada para gestionar sus entornos cloud.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, que garantiza una amplia compatibilidad con los principales editores de software.

La arquitectura separa el cómputo (láminas dedicadas) del almacenamiento (en bloques distribuido). Las redes, la copia de seguridad y la replicación se basan en infraestructuras distintas, descritas en las secciones siguientes.

## Regiones y zonas de disponibilidad

El producto OpenIaaS se despliega en una zona de disponibilidad.
Una zona de disponibilidad forma parte de una región.

Este tipo de despliegue permite elegir la ubicación de los clusters y poder distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de incidente.

## Especificaciones técnicas

### Clases de láminas de cómputo

Las láminas de cómputo disponibles para la oferta IaaS OpenSource ofrecen un rango de rendimiento para satisfacer diversas necesidades:

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos             | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Gold 5315Y o equivalente)   | 16 / 32 hilos             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos             | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos            | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

#### Notas

- __(1)__ La cantidad de memoria es la físicamente disponible en las blades y no puede ser modificada.
- __(2)__ Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- __(3)__ La conectividad física es compartida para el acceso de red y el acceso a almacenamiento en bloques, gracias a una arquitectura convergente Cisco UCS.
- __(4)__ Los GPU disponibles evolucionan en función de las últimas tecnologías. El producto ofrece GPU NVIDIA L40S.
- __(5)__ La alta disponibilidad en un clúster está disponible únicamente a partir de 2 nodos.


### Clases de almacenamiento en modo bloque

El almacenamiento distribuido en bloques, basado en __IBM Spectrum Virtualize__, ofrece un rango de rendimiento adaptado a diversos casos de uso:

| Referencia                        | IOPS/To        | Límite máximo de IOPS / Volumen | Ancho de banda máximo / Volumen | Uso principal                          |
|-----------------------------------|----------------|---------------------------------|---------------------------------|----------------------------------------|
| **FLASH - Esencial**              | 500            | 10 000 IOPS                     | 512 MB/s                        | Cargas de trabajo ligeras              |
| **FLASH - Estándar**              | 1500           | 30 000 IOPS                     | 1024 MB/s                       | Cargas de trabajo estándar             |
| **FLASH - Premium**               | 3000           | 30 000 IOPS                     | 1024 MB/s                       | Cargas intensivas                      |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS                     | 1024 MB/s                       | Cargas críticas                        |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS                     | 1024 MB/s                       | Cargas ultra-intensivas                |
| **MASS STORAGE - Archivo**        | No aplicable   | No garantizado                  | No garantizado                  | Almacenamiento económico para archivo  |

#### Características

- **Rendimiento** : El rendimiento efectivo crece de manera lineal en función del volumen asignado (según la ratio IOPS/To), **dentro del límite del tope absoluto de hardware definido anteriormente**. (Por ejemplo, un volumen de 10 TB en clase Ultra estará físicamente limitado a 30 000 IOPS y 1024 MB/s).
- __Tecnología__ : Flash NVMe con __Distributed RAID 6__ para una resiliencia mejorada.
- __Restricciones__ : Sin limitación en las lecturas o escrituras. Sin compresión ni deduplicación automática, garantizando el uso íntegro de los volúmenes reservados.

### Las redes

El producto OpenIaaS es compatible con [las redes privadas](../network/private_network) y [el acceso a internet](../network/internet).

Dos tipos de redes están disponibles desde la configuración de una máquina virtual.

#### Las redes de tipo VLAN

Las redes de tipo VLAN deben propagarse a razón de un VLAN por tarjeta de red. Si desea utilizar varias redes, basta con crear varias tarjetas de red.

Existe una limitación en el número máximo de tarjetas que se pueden crear en una VM, que es de 7.

#### El VLAN TRUNK

En el caso de que deba propagar más de 7 VLANs, debe utilizar el VLAN Trunk.
El VLAN Trunk permite pasar todos sus VLANs a través de una sola tarjeta. La configuración de los IDs de VLANs debe realizarse a través de interfaces virtuales de tipo VLAN desde el SO de la VM. Los IDs de VLANs son los mismos que los presentes y visibles desde la consola.

### Las máquinas virtuales

#### Gestión de recursos vCPU

Las modificaciones de recursos vCPU se realizan en frío (máquina apagada). La plataforma soporta hasta 254 vCPUs por máquina virtual (límite teórico), con pruebas concluyentes realizadas en VMs Linux equipadas con 128 vCPUs.

Es importante destacar que el soporte del sistema operativo invitado constituye un factor determinante durante la asignación de recursos. Una asignación que supere los límites soportados por el sistema operativo puede provocar problemas de rendimiento significativos.

#### Gestión de recursos de memoria

Las modificaciones de memoria también se realizan en frío. Los límites son los siguientes:

- 1,5 TiB con soporte para instantáneas de memoria
- 8 TiB sin soporte para instantáneas de memoria
- 16 TiB (límite teórico sin soporte de seguridad, menos la RAM asignada a Xen y al dominio de control)

La memoria realmente utilizable puede estar limitada por el sistema operativo invitado. Superar los límites admitidos por el SO invitado puede provocar una disminución del rendimiento.

#### Gestión de discos

- El tamaño máximo de un disco es de 2 TB
- Los discos utilizan el formato VHD estándar
- El número máximo de discos virtuales por máquina virtual, incluidos los lectores CD-ROM, es de 24

No es posible redimensionar los discos una vez creados. Para extender la capacidad de almacenamiento, es necesario crear un nuevo disco.

#### Herramientas para las máquinas virtuales

Estas herramientas se utilizan para lograr un funcionamiento óptimo de las máquinas virtuales. Cuando desee realizar una acción y una de estas herramientas sea necesaria, se mostrará un mensaje en la consola Cloud Temple.
Para instalar estas herramientas, puede consultar los sitios oficiales de Xen Server para obtener un procedimiento preciso según su sistema operativo.

##### Management Agent

El Management Agent es un componente instalado en cada máquina virtual. Permite al hipervisor gestionar mejor la máquina al tener acceso a más información y permite realizar ciertas acciones de manera más limpia.

##### PV Drivers (Paravirtualization Drivers)

Los PV Drivers son controladores instalados en la máquina virtual para mejorar su rendimiento.
Sin estos controladores, la máquina funciona, pero más lentamente. Además, permiten ciertas acciones avanzadas.
Los PV Drivers se instalan de forma nativa en la mayoría de los núcleos Linux actuales.

##### Tools

Los Tools son un conjunto de componentes de software que mejoran la integración de la máquina virtual con la infraestructura de virtualización.

### Límites

- Una máquina virtual dispone como máximo de 7 tarjetas de red; más allá de 7 VLANs, utilice el VLAN Trunk.
- Un disco virtual tiene un tamaño máximo de 2 TB y no puede redimensionarse; 24 discos virtuales como máximo por máquina virtual.
- Las modificaciones de vCPU y de memoria se realizan en frío.
- La alta disponibilidad de un clúster requiere al menos dos nodos.
- Un volumen de almacenamiento está limitado a 30 000 IOPS y 1024 MB/s (10 000 IOPS y 512 MB/s en clase Esencial).

## Seguridad y cumplimiento

IaaS OpenSource está certificado HDS e ISO 27001, con etiqueta Gaia-X nivel 3, conforme con CISPE y C5, y cualificado SecNumCloud por la [ANSSI](https://www.ssi.gouv.fr/).

### Seguridad y Cifrado del Almacenamiento en Bloques

Para garantizar la confidencialidad de sus datos en reposo, toda nuestra infraestructura de almacenamiento en bloques integra un cifrado por hardware robusto.

- __Tipo de Cifrado__ : Los datos se cifran directamente en los discos (`Data At Rest`) utilizando el algoritmo __XTS-AES 256__.
- __Conformidad__ : Este método de cifrado es conforme a la norma __FIPS 140-2__, asegurando un alto nivel de seguridad validado.
- __Funcionamiento__ : El cifrado se aplica en el momento de la escritura de los datos en el medio de almacenamiento físico.

:::warning[Punto de atención sobre la replicación]
Es importante señalar que este cifrado protege los datos almacenados en los discos. No está activo "on-the-fly", lo que significa que los datos no se cifran durante las operaciones de replicación de almacenamiento entre las zonas de disponibilidad. La seguridad de las transferencias está asegurada por canales de comunicación dedicados y seguros.
:::

## Copia de seguridad y continuidad

### Copia de seguridad de máquinas virtuales

La oferta OpenIaaS integra __una arquitectura de copia de seguridad distribuida nativa y no desactivable__, elemento obligatorio en el marco de la cualificación SecNumCloud francesa.

Las copias de seguridad se almacenan en el [Almacenamiento de Objetos cualificado SecNumCloud](../storage/oss), garantizando una protección óptima en caso de fallo mayor del datacenter de producción. Este enfoque permite restaurar sus datos en un datacenter secundario, incluso en caso de un incidente crítico como un incendio.

#### Servicios de protección de datos disponibles

| Servicio | Descripción |
|---|---|
| **Copia de seguridad incremental (Agentless)** | Copia de seguridad sin agente a través de los mecanismos nativos del hipervisor, hacia un repositorio S3 remoto. |
| **Copia de seguridad de metadatos** | Protección de las configuraciones del pool de virtualización y del orquestador de copia de seguridad — indispensable para el Disaster Recovery. |
| **Restauración granular** | Restauración posible a nivel de VM completa, disco virtual individual, o archivo unitario. |
| **Offloading S3 Multi-AZ** | Externalización hacia el almacenamiento de objetos S3 Cloud Temple replicado entre zonas de disponibilidad. |

Las velocidades de copia de seguridad y restauración dependen de la tasa de cambio en los entornos. La política de copia de seguridad es completamente configurable desde [la consola Cloud Temple](../console/console.md) para cada máquina virtual.


---

#### Arquitectura técnica de la copia de seguridad

##### Vista general

La arquitectura se basa en una separación estricta entre el **plan de control** y el **plan de datos**: el orquestador de copia de seguridad se aloja en el clúster de gestión de Cloud Temple (distinto e inaccesible para el cliente), mientras que los datos de copia de seguridad se almacenan en un repositorio S3 remoto, físicamente separado de la infraestructura de producción. Los datos transitan cifrados entre los dos componentes.

##### Orquestador de copia de seguridad

El orquestador se despliega en el clúster de gestión de Cloud Temple, **inaccesible directamente para el cliente**. Orquesta todos los jobs de copia de seguridad y gestiona el cifrado.

- **Políticas estándar** : se aplican políticas de copia de seguridad por defecto a cada tenant.
- **Políticas personalizadas** : el cliente puede solicitar frecuencias o retenciones específicas a través de un ticket de soporte en la consola Cloud Temple.

##### Almacenamiento remoto S3

Las copias de seguridad se envían al [Almacenamiento de Objetos cualificado SecNumCloud](../storage/oss) de Cloud Temple, con replicación Multi-AZ para garantizar la resiliencia ante la pérdida de un sitio físico completo.

---

#### Mecanismo de copia de seguridad: Incremental Backup

El servicio utiliza un modo de copia de seguridad **incremental**. Este modo apunta a un **Backup Repository** (el almacenamiento S3 remoto) y nunca exporta una copia de seguridad completa después de la primera: solo los **bloques de datos modificados** se transfieren en cada ciclo.

:::info[Copia de seguridad incremental vs Replicación]
La **copia de seguridad incremental** apunta a un repositorio S3 remoto y está optimizada para la **protección a largo plazo**. No debe confundirse con la **replicación** (Disaster Recovery en caliente) que apunta a un Storage Repository local — este modo está cubierto por la funcionalidad de [replicación de máquinas virtuales](#replicación-de-máquinas-virtuales).
:::

##### Ciclo de vida técnico de una copia de seguridad incremental

A continuación se detallan las etapas sucesivas que se activan en cada ejecución de un job de copia de seguridad:

**1. Creación del snapshot local (Origen)**

Al iniciar el job, el orquestador solicita al hipervisor que cree un snapshot de la VM. Este snapshot sirve como punto de comparación para calcular el delta respecto al snapshot de referencia anterior.

**2. Exportación diferencial mediante Changed Block Tracking (CBT)**

El orquestador compara el nuevo snapshot con el snapshot de referencia anterior mediante los metadatos CBT. Solo se extraen los bloques de datos que han cambiado desde la última copia de seguridad — no la totalidad del disco.

**3. Cifrado y transferencia hacia S3**

Los bloques modificados son **cifrados al vuelo por el orquestador** y luego enviados mediante HTTPS/TLS 1.3 hacia el bucket S3 remoto.

**4. Rotación de los snapshots (Coalesce)**

Una vez validada la transferencia, el antiguo snapshot de referencia se elimina y el nuevo snapshot se convierte en la referencia para el siguiente ciclo. El hipervisor desencadena entonces un proceso de **coalesce** (fusión) para reintegrar los datos del antiguo delta en la cadena de discos virtuales.

:::warning[Impacto I/O del Coalesce]
La operación de coalesce es **intensiva en I/O** sobre el almacenamiento de producción. Se desencadena automáticamente después de cada copia de seguridad exitosa. Se recomienda planificar las ventanas de copia de seguridad durante los períodos de baja carga de la aplicación.
:::

**5. Gestión de la retención en S3 (Merge) y Key Backup Interval**

En el almacenamiento S3, el orquestador gestiona la rotación de las copias de seguridad mediante **fusión** (*merge*) de los antiguos deltas en la copia de seguridad completa más antigua conservada según la política de retención.

Para garantizar la integridad de la cadena de copias de seguridad, una copia de seguridad completa se **fuerza periódicamente** (típicamente cada 20 incrementales — *Key Backup Interval*). Esto crea un nuevo punto de partida limpio y limita el impacto de una posible corrupción de un eslabón de la cadena.

---

#### Impacto en el dimensionamiento del almacenamiento de producción

:::warning[Punto de atención crítico — Almacenamiento en Bloques (Thick provisioning)]
La oferta OpenIaaS se basa en almacenamiento en Bloques de alto rendimiento (Fibre Channel / LVM). Las instantáneas utilizadas por la copia de seguridad incremental se provisionan en modo **Thick**: cada instantánea consume en el Storage Repository (SR) el **tamaño nominal completo del disco de la VM**, y no únicamente el delta real.

**Ejemplo de consumo para una VM con un disco de 50 GB:**

| Elemento | Consumo en el SR |
|---|---|
| Disco VM activo | 50 GB |
| Instantánea de referencia permanente (para el cálculo del delta) | 50 GB |
| Instantánea temporal creada durante la exportación | 50 GB |
| **Total requerido durante la ventana de copia de seguridad** | **hasta 150 GB** |

**Regla de dimensionamiento recomendada**: para dimensionar prudentemente el almacenamiento de producción durante copias de seguridad o instantáneas manuales, prever **2,5 veces el tamaño de la VM**. Este margen tiene en cuenta el consumo nominal de las instantáneas; no constituye un coeficiente general de facturación o de capacidad. El pico de la ventana de copia de seguridad descrito en el ejemplo anterior puede alcanzar **3 veces el tamaño del disco**: debe ser cubierto por la capacidad disponible, incluso cuando el dimensionamiento nominal retenido es de 2,5 veces.
:::

---

#### Seguridad y cifrado de las copias de seguridad

##### Cifrado en tránsito

Todas las comunicaciones entre el orquestador de copia de seguridad y el almacenamiento S3 están cifradas mediante **HTTPS / TLS 1.3**.

##### Cifrado en reposo (At Rest) y gestión de claves

El cifrado se aplica por el orquestador de copia de seguridad, **antes** del envío de los datos hacia S3.

| Parámetro | Valor |
|---|---|
| **Algoritmo** | AES-256 o ChaCha20-Poly1305 |
| **Generación de la clave** | Automática en el despliegue del orquestador de copia de seguridad |
| **Almacenamiento de la clave** | Almacén de secretos centralizado (nunca expuesto en la interfaz del cliente) |
| **Resiliencia** | En caso de pérdida del orquestador, la clave se reinyecta desde el almacén de secretos para restaurar el servicio |

##### Aislamiento de red (arquitectura SecNumCloud)

La infraestructura de copia de seguridad está diseñada para ser **estrictamente estanca** con respecto a los entornos de clientes:

- **Separación física** : las redes *Client*, *Administration* y *Backup* se basan en backbones físicos distintos y en contextos de enrutamiento (VRF) separados.
- **Imposibilidad de infección lateral** : una VM comprometida no puede alcanzar el almacenamiento S3 ni el orquestador de copia de seguridad — no existe ninguna ruta de red entre ellos. El S3 nunca se « monta » en la VM.

##### Administración segura

La administración de la plataforma de copia de seguridad está **reservada a los equipos Backup de Cloud Temple** y sujeta a los requisitos SecNumCloud:

| Control | Medida |
|---|---|
| **Bastión de acceso** | Paso obligatorio a través de un bastión de administración interno endurecido |
| **Estación de trabajo** | Acceso únicamente desde laptops de administración dedicados y seguros |
| **Autenticación** | MFA obligatorio a través de un directorio de administración dedicado, distinto del directorio de ofimática |

---

#### Monitoreo y auditoría

- **Registros de copia de seguridad** : visibles por el cliente directamente en la consola Cloud Temple — estado (éxito/fallo), volumetría, marca de tiempo.
- **Registros de acceso de administrador** : los accesos a las infraestructuras de copia de seguridad (orquestador, S3) se registran y **se auditan mensualmente** para detectar cualquier anomalía.
- **Pruebas de intrusión (Pentests PASSI)** : la infraestructura es objeto de pentests regulares por parte de proveedores cualificados PASSI en el marco del mantenimiento de la cualificación SecNumCloud.
- **Seguridad física** : la totalidad de los equipos está alojada en las zonas SecNumCloud (jaulas físicas dedicadas con control de acceso biométrico) de los datacenters Cloud Temple.

---

#### Compatibilidad y casos particulares

:::warning[VMs con escrituras de disco continuas]
Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad cuando sus **cargas de escritura en disco son constantes** (bases de datos activas, registros transaccionales, etc.). El hipervisor no puede entonces finalizar la instantánea sin congelar la VM, lo cual puede durar varias horas.

Para estas cargas de trabajo, recomendamos **completar o reemplazar la copia de seguridad del hipervisor por una copia de seguridad a nivel de aplicación**: volcado de base de datos (pg_dump, mysqldump…), copia de seguridad por agente, o exportación nativa de la aplicación.
:::

---

#### Creación de una política de copia de seguridad

La creación de una política de copia de seguridad es una operación de administración realizada **exclusivamente a través de una solicitud de soporte**, accesible mediante el icono de boya en la parte superior derecha de la interfaz.

La solicitud debe especificar:

- El nombre de su Organización
- Los datos de contacto de una persona (correo electrónico y teléfono) para finalizar la configuración
- El nombre del tenant
- El nombre de la política de copia de seguridad
- Las características deseadas: frecuencia, retención (x días, y semanas, z meses…)

##### Restricciones de planificación

| Restricción | Valor |
|---|---|
| **Intervalo mínimo entre dos ejecuciones** | 24 horas |
| **Retención máxima** | 24 meses |
| **Ejecuciones simultáneas por política** | 1 a la vez |

:::warning[Una política solo puede ejecutarse una vez a la vez]
Cada política de copia de seguridad es **mono-instancia**: una sola ejecución puede estar activa simultáneamente.

**Consecuencia práctica** : si añade numerosas máquinas virtuales a una política existente y la copia de seguridad del día anterior no ha terminado aún en el momento del disparo programado, **el nuevo ciclo no se iniciará** — se ignorará hasta la siguiente ocurrencia.

Para evitar este caso:
- verifique las **duraciones de ejecución** de sus jobs desde los registros de la consola Cloud Temple,
- ajuste la **frecuencia** o el **tamaño de la política** si las copias de seguridad se desbordan regularmente sobre la siguiente ventana,
- considere **distribuir las VMs en varias políticas** con horarios escalonados para los grandes perímetros.
:::

:::info[Retención a largo plazo]
**La retención máxima es de 24 meses.** Para una necesidad de retención más larga, el servicio de **copia de seguridad por agente** está disponible en suscripción complementaria. Contacte al soporte para más información.
:::

<a id="réplication-de-machines-virtuelles"></a>
<a id="virtual-machine-replication"></a>
<a id="replikation-virtueller-maschinen"></a>
<a id="réplication-de-máquinas-virtuales"></a>
<a id="replicazione-di-macchine-virtuali"></a>

<a id="vm-replication"></a>

### Replicación de máquinas virtuales

La __replicación de máquinas virtuales__ de Cloud Temple garantiza la protección y la continuidad de sus datos críticos mediante una copia automatizada de sus entornos hacia una zona de disponibilidad distinta. Esta funcionalidad, integrada de forma nativa en el producto IaaS Open Source, responde a los requisitos más estrictos de continuidad de negocio y recuperación ante desastres.

#### Una protección automatizada y segura

La replicación de Cloud Temple se basa en una infraestructura __cualificada SecNumCloud__, garantizando:

- __Replicación asíncrona__ : Copia continua de sus máquinas virtuales sin impacto en el rendimiento de producción
- __Separación geográfica__ : Almacenamiento de las réplicas en una zona de disponibilidad diferente a la de origen
- __Automatización completa__ : Proceso completamente automatizado a través de la [consola Cloud Temple](../console/console.md)
- __Conformidad regulatoria__ : Cumplimiento de los requisitos de copia de seguridad y continuidad de actividad

#### Ventajas de la replicación

| Ventaja                 | Descripción                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuidad de actividad | Protección de sus servicios críticos en caso de incidente mayor en el sitio principal.                                                         |
| Protección geográfica   | Replicación hacia una zona de disponibilidad distinta, protegiendo contra desastres localizados.                                             |
| Flexibilidad temporal   | Elección del intervalo de replicación según sus necesidades: de 15 minutos a 24 horas.                                                          |
| Simplicidad de gestión  | Configuración y supervisión totalmente integradas en la consola Cloud Temple.                                                                |
| Conformidad SecNumCloud | Infraestructura cualificada que garantiza el más alto nivel de seguridad para sus datos sensibles.                                             |

#### Configuración de la replicación

##### Políticas de replicación

La creación de una política de replicación define los parámetros de protección de sus máquinas virtuales:

- __Destino__ : Selección del almacenamiento objetivo en la zona de disponibilidad de replicación
- __Frecuencia__ : Intervalo de replicación adaptado a sus necesidades de recuperación (RPO)
- __Retención__ : Número de puntos de recuperación conservados

##### Intervalos disponibles

| Intervalo              | Uso recomendado                           | RPO (Pérdida máxima de datos) |
|-------------------------|--------------------------------------------|-----------------------------|
| __15 a 59 minutos__     | Aplicaciones críticas en tiempo real         | < 1 hora                   |
| __1 a 24 horas__       | Aplicaciones de negocio y entornos estándar | < 24 horas               |

:::warning[RPO: objetivo no garantizado contractualmente]
El intervalo de replicación configurado (por ejemplo, 15 minutos) constituye un **objetivo de RPO (Recovery Point Objective)**, y no un compromiso contractual.

El RPO efectivamente alcanzado depende directamente de la **tasa de cambio (change rate)** de los datos en las máquinas virtuales replicadas. Si el volumen de datos modificados entre dos ciclos de replicación es demasiado importante, la transferencia puede no completarse dentro del intervalo configurado. En ese caso, el ciclo siguiente no comenzará hasta que el anterior esté completado, lo que alarga de facto el RPO real.

**En resumen:**
- El RPO mínimo configurable es de **15 minutos**.
- Este RPO es alcanzable únicamente si la tasa de cambio de los datos permanece compatible con el ancho de banda de replicación disponible.
- **No se asocia ningún SLA al RPO**: se trata de un objetivo « best effort » cuyo cumplimiento depende de las características de la carga de trabajo.
- Para cargas con alta tasa de escritura (bases de datos, registros transaccionales, etc.), se recomienda prever un intervalo de replicación más amplio y complementarlo con una estrategia de copia de seguridad a nivel de aplicación.
:::

##### Asociación de las máquinas virtuales

Una vez creada la política, puede asociar las máquinas virtuales a proteger:

- __Selección simple__ : Selección de las VM desde la interfaz de la Consola
- __Validación automática__ : Verificación de la compatibilidad y los requisitos previos
- __Activación inmediata__ : Inicio automático de la replicación tras la configuración

#### Gestión de réplicas

##### Vista de las políticas

La consola Cloud Temple ofrece una vista centralizada de sus políticas de replicación con:

- Nombre y frecuencia de cada política
- Zona de disponibilidad de destino
- Pool y almacenamiento asociados
- Acciones de gestión disponibles

##### Vista de réplicas

La tabla de réplicas le permite visualizar:

- Nombre de las máquinas virtuales replicadas
- Ubicación de origen y destino
- Política de replicación asociada
- Exportación de datos en formato CSV

#### Buenas prácticas

##### Recomendaciones por tipo de carga

- __Aplicaciones críticas__ : Replicación cada 15-30 minutos para minimizar la pérdida de datos
- __Aplicaciones de negocio__ : Replicación horaria o cada dos horas según las necesidades
- __Entornos de desarrollo__ : Replicación diaria generalmente suficiente

##### Planificación de las políticas

- Cree políticas distintas según las criticidades de sus aplicaciones
- Nombre claramente sus políticas para facilitar la gestión
- Verifique periódicamente el estado de sus réplicas desde la consola
- Documente su estrategia de replicación para sus equipos

__Nota importante:__

*La replicación no sustituye una estrategia de copia de seguridad completa. Constituye un complemento esencial para garantizar la continuidad del negocio en caso de un incidente mayor en su sitio principal.*

<a id="hochverfügbarkeit"></a>

### Alta disponibilidad

La alta disponibilidad permite garantizar la continuidad del servicio de las máquinas virtuales (VM) en caso de fallo de un host físico dentro de un pool OpenIaaS.
Con la alta disponibilidad (HA), cada host en el pool envía regularmente señales de vida a sus pares a través del almacenamiento compartido (Block Storage Heartbeat). En caso de ausencia prolongada de respuesta, el host se considera fallido.

Un Block Storage designado como heartbeat significa que servirá de base para autenticar los hosts que no respondieran.

Para que la alta disponibilidad esté correctamente configurada en un pool OpenIaaS, es indispensable disponer de __al menos dos hosts__ conectados.

Cada VM debe estar configurada con un nivel de prioridad de reinicio en alta disponibilidad:

##### Disabled

  La alta disponibilidad no está configurada. En caso de fallo del host, la máquina virtual no se reiniciará.

##### Restart

  En caso de fallo del host, la máquina virtual se reiniciará automáticamente en cuanto haya recursos disponibles en el pool. Las máquinas virtuales configuradas en modo "restart" se tratan con prioridad, antes que las configuradas en modo "best-effort".

##### Best-Effort

  En caso de fallo del host, la máquina virtual solo se reiniciará automáticamente si quedan recursos disponibles después del procesamiento de todas las máquinas virtuales configuradas en modo "restart". El modo "Best-effort" solo realiza un único intento, por lo que si los recursos son insuficientes, la máquina virtual no se reiniciará.

## Disponibilidad del servicio

| Elemento                 | Objetivo de disponibilidad, medido sobre un mes |
|--------------------------|-------------------------------------------------|
| Plataforma               | 99,99 %, ventanas de mantenimiento incluidas    |
| Almacenamiento en bloques | 99,99 %                                        |

Toda solicitud relacionada con la disponibilidad debe declararse a través de un ticket de incidente.

## Reversibilidad

| Operación                              | Entregable                                                                     | Plazo          | Coste            |
|----------------------------------------|--------------------------------------------------------------------------------|----------------|------------------|
| Exportación de las VM                  | Discos en formato VHD estándar, exportación/importación en formato nativo XVA  | 30 días        | Sin coste        |
| Exportación de la configuración        | Plantillas Terraform                                                           | 15 días        | Sin coste        |
| Exportación de las copias de seguridad | Recuperación de las copias de seguridad desde el almacenamiento S3             | 30 días        | Sin coste        |
| Asistencia a la migración              | Soporte técnico                                                                | Bajo petición  | Bajo presupuesto |

## Precios

El servicio se factura por consumo mensual. Las tarifas se publican en la página del producto en el sitio web de Cloud Temple:
[IaaS OpenSource — precios](https://www.cloud-temple.com/produits/iaas-opensource/).
