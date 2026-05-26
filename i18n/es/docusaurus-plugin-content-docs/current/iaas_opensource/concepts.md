---
title: Conceptos
---

La oferta __IaaS (Infrastructure As A Service)__ de Cloud Temple está diseñada para satisfacer las necesidades críticas de continuidad y recuperación de la actividad, con un énfasis especial en sectores exigentes como la industria, la banca y los seguros. Basada en tecnologías de vanguardia, esta infraestructura garantiza una disponibilidad máxima y un rendimiento óptimo para sus cargas de trabajo críticas.

## Una plataforma tecnológica de confianza

La plataforma IaaS de Cloud Temple se basa en socios tecnológicos de renombre internacional :

- Cómputo : __CISCO UCS__.
- Almacenamiento : __IBM Spectrum Virtualize__, __IBM FlashSystem__ para el almacenamiento en bloque, y __DELL ECS__ para el almacenamiento de objetos.
- Red : __JUNIPER__.
- Virtualización : __Stack Opensource__, que ofrece una base fiable y probada para gestionar sus entornos cloud.

Esta arquitectura se basa en el modelo __VersaStack__, una alianza entre Cisco e IBM, que garantiza una amplia compatibilidad con los principales editores de software.

## Una infraestructura dedicada y automatizada

Aunque está completamente automatizada gracias a APIs y un proveedor de Terraform, el producto IaaS de Cloud Temple ofrece una infraestructura única:

- __Recursos dedicados__ : Los servidores blade, los volúmenes de almacenamiento y las pilas de software (virtualización, copia de seguridad, cortafuegos, etc.) nunca se comparten entre clientes.
- __Previsibilidad máxima__ : Controla las tasas de virtualización, la carga de IOPS en el almacenamiento y cuenta con una facturación clara, basada en el consumo mensual.

La plataforma está certificada como __SecNumCloud__ por la [ANSSI](https://www.ssi.gouv.fr/), garantizando un alto nivel de automatización y seguridad.

## Principales características

- Recursos de computación (CPU, RAM) dedicados y bajo demanda.
- Almacenamiento bajo demanda (plusieurs classes disponibles).
- Recursos de red (Internet, redes privadas).
- Copias de seguridad cruzadas con retención configurable.
- Replicación asíncrona para el almacenamiento o las máquinas virtuales.
- Gestión a través de la [Console](../console/console.md) o en modo Infraestructura como Código gracias a las APIs y al proveedor de Terraform.

## Ventajas

| Ventaja            | Descripción                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza digital  | Alojamiento de datos en Francia y cumplimiento del RGPD.                                                                                          |
| Seguridad          | Plataforma altamente segura, certificada __SecNumCloud__, __HDS__ (Alojamiento de Datos de Salud), __ISO 27001__ y __ISAE 3402 tipo II__. |
| Alta disponibilidad| Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluidas las ventanas de mantenimiento.                                        |
| Resiliencia        | Implementación de planes de continuidad o recuperación de actividad según las necesidades.                                                               |
| Automatización     | Plataforma completamente automatizada diseñada para integrarse en un programa de transformación digital.                                        |
| Bajo demanda       | Recursos disponibles bajo demanda.                                                                                                          |

## Regiones y zonas de disponibilidad

El producto OpenIaaS se despliega en una zona de disponibilidad.
Una zona de disponibilidad forma parte de una región.

Este tipo de despliegue permite elegir la ubicación de los clústeres y distribuirlos en diferentes zonas de disponibilidad (AZ).
Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante desastres (DRP) en caso de incidente.

---

## Clases de blades de cálculo

Las blades de cálculo disponibles para la oferta Bare Metal ofrecen una gama de rendimiento para satisfacer diversas necesidades:

| Referencia             | RAM  __(1)__ | Frecuencia __(2)__                         | Número de núcleos / hilos | Conectividad __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 hilos           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 hilos           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 hilos           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 hilos           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 hilos           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 hilos          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y ou équivalent)  | 32 / 64 hilos           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48 GB |

### Notas

- __(1)__ La cantidad de memoria es la físicamente disponible en los servidores blade y no puede ser modificada.
- __(2)__ Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- __(3)__ La conectividad física está compartida para el acceso a la red y el acceso a almacenamiento en bloque, gracias a una arquitectura convergente Cisco UCS.
- __(4)__ Los GPU disponibles evolucionan en función de las últimas tecnologías. Al 1 de mayo de 2024, el producto incluye GPU NVIDIA LOVELACE L40S.
- __(5)__ La alta disponibilidad en un clúster está disponible únicamente a partir de 2 nodos.

La disponibilidad de la infraestructura está garantizada al 99.9%, medida mensualmente, incluidas las ventanas de mantenimiento. Cualquier solicitud relacionada con el SLA debe declararse a través de un ticket de incidente.

---

## Clases de almacenamiento en modo bloque

El almacenamiento distribuido en bloque, basado en __IBM Spectrum Virtualize__, ofrece un rango de rendimiento adaptado a diversos casos de uso:

| Referencia                         | IOPS/TB        | Límite máximo de IOPS / Volumen | Ancho de banda máximo / Volumen | Uso principal                        |
|-----------------------------------|----------------|---------------------------------|---------------------------------|--------------------------------------|
| **FLASH - Esencial**             | 500            | 10 000 IOPS               | 512 MB/s                    | Cargas de trabajo ligeras             |
| **FLASH - Estándar**              | 1500           | 30 000 IOPS               | 1024 MB/s                   | Cargas de trabajo estándar            |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                   | Cargas intensivas                     |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                   | Cargas críticas                      |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                   | Cargas ultra intensivas               |
| **MASS STORAGE - Archivado**      | No aplicable | No garantizado               | No garantizado                 | Almacenamiento económico para archivado   |

### Características

- **Rendimiento** : El rendimiento efectivo aumenta de forma lineal en función de la capacidad asignada (según la relación IOPS/TB), **dentro del límite del techo de hardware absoluto definido anteriormente**. (Por ejemplo, un volumen de 10 TB en clase Ultra estará físicamente limitado a 30 000 IOPS y 1024 MB/s).
- __Tecnología__ : Flash NVMe con __Distributed RAID 6__ para una mayor resiliencia.
- __Disponibilidad__ : 99.99%, medida mensualmente.
- __Restricciones__ : Sin limitaciones en las lecturas o escrituras. Sin compresión o deduplicación automática, garantizando el uso integral de los volúmenes reservados.

### Seguridad y Cifrado del Almacenamiento en Bloque

Para garantizar la confidencialidad de sus datos en reposo, toda nuestra infraestructura de almacenamiento en bloque integra un cifrado por hardware robusto.

- __Tipo de Cifrado__ : Los datos se cifran directamente en los discos (`Data At Rest`) utilizando el algoritmo __XTS-AES 256__.
- __Cumplimiento__ : Este método de cifrado cumple con la norma __FIPS 1-40-2__, garantizando un alto nivel de seguridad validado.
- __Funcionamiento__ : El cifrado se aplica en el momento de la escritura de los datos en el medio de almacenamiento físico.

:::warning[Point d'attention sur la réplication]
Es importante tener en cuenta que este cifrado protege los datos almacenados en los discos. No está activo "on-the-fly", lo que significa que los datos no se cifran durante las operaciones de replicación de almacenamiento entre las zonas de disponibilidad. La seguridad de las transferencias está garantizada mediante canales de comunicación dedicados y seguros.
:::

---

## Las redes

El producto OpenIaaS es compatible con [las redes privadas](../network/private_network) y [el acceso a internet](../network/internet).

Dos tipos de redes están disponibles desde la configuración de una máquina virtual.

### Las redes de tipo VLAN

Las redes de tipo VLAN se propagan a razón de un VLAN por tarjeta de red. Si desea utilizar varias redes, basta con crear varias tarjetas de red.

Existe una limitación en el número máximo de tarjetas que se pueden crear en una VM, que es de 7.

### El VLAN TRUNK

En caso de que deba propagar más de 7 VLANs, debe utilizar el VLAN Trunk.
El VLAN Trunk permite el paso de todos sus VLANs a través de una única tarjeta. La configuración de los IDs de VLAN debe realizarse mediante interfaces virtuales de tipo VLAN desde el sistema operativo de la VM. Los IDs de VLAN son los mismos que los presentes y visibles desde la consola.

## Copia de seguridad de máquinas virtuales

La oferta OpenIaaS integra __una arquitectura de copia de seguridad distribuida nativa y no desactivable__, elemento obligatorio en el marco de la certificación SecNumCloud francesa.

Las copias de seguridad se almacenan en el [Almacenamiento de Objetos certificado SecNumCloud](../storage/oss), garantizando una protección óptima en caso de fallo mayor del centro de datos de producción. Este enfoque permite restaurar sus datos en un centro de datos secundario, incluso en caso de un incidente crítico como un incendio.

### Servicios de protección de datos disponibles

| Servicio | Descripción |
|---|---|
| **Copia de seguridad incremental (Agentless)** | Copia de seguridad sin agente mediante los mecanismos nativos del hipervisor, hacia un repositorio S3 remoto. |
| **Copia de seguridad de metadatos** | Protección de las configuraciones del pool de virtualización y del orquestador de copias de seguridad — indispensable para la Recuperación ante Desastres. |
| **Restauración granular** | Restauración posible a nivel de VM completa, disco virtual individual o archivo único. |
| **Offloading S3 Multi-AZ** | Externalización hacia el almacenamiento de objetos S3 Cloud Temple replicado entre zonas de disponibilidad. |

Las velocidades de copia de seguridad y restauración dependen de la tasa de cambios en los entornos. La política de copia de seguridad es completamente configurable desde [la Console Cloud Temple](../console/console.md) para cada máquina virtual.

| Referencia                                    | Unidad | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| COPIA DE SEGURIDAD - Acceso al servicio                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

---

### Arquitectura técnica de la copia de seguridad

#### Vista general

La arquitectura se basa en una separación estricta entre el **plan de control** y el **plan de datos** : el orquestador de copias de seguridad está alojado en el clúster de gestión de Cloud Temple (distinto e inaccesible para el cliente), mientras que los datos de copia de seguridad se almacenan en un repositorio S3 remoto, físicamente separado de la infraestructura de producción. Los datos transitan cifrados entre ambos componentes.

#### Orquestador de copias de seguridad

El orquestador se despliega en el clúster de gestión de Cloud Temple, **inaccesible directamente para el cliente**. Orquesta todos los trabajos de copia de seguridad y gestiona el cifrado.

- **Políticas estándar**: se aplican políticas de copia de seguridad por defecto a cada tenant.
- **Políticas personalizadas**: el cliente puede solicitar frecuencias o periodos de retención específicos mediante un ticket de soporte en la consola de Cloud Temple.

#### Almacenamiento remoto S3

Las copias de seguridad se envían al [Almacenamiento de Objetos calificado SecNumCloud](../storage/oss) de Cloud Temple, con replicación Multi-AZ para garantizar la resiliencia ante la pérdida de un sitio físico completo.

---

### Mecanismo de copia de seguridad: Incremental Backup

El servicio utiliza un modo de copia de seguridad **incremental**. Este modo apunta a un **Backup Repository** (el almacenamiento S3 remoto) y nunca exporta una copia de seguridad completa después de la primera: solo se transfieren los **bloques de datos modificados** en cada ciclo.

:::info[Copia de seguridad incremental vs Replicación]
La **copia de seguridad incremental** apunta a un depósito S3 remoto y está optimizada para la **protección a largo plazo**. No debe confundirse con la **replicación** (Disaster Recovery en caliente) que apunta a un Storage Repository local — este modo está cubierto por la funcionalidad de [replicación de máquinas virtuales](#réplication-de-machines-virtuelles).
:::

#### Ciclo de vida técnico de una copia de seguridad incremental

A continuación se presentan las etapas sucesivas que se desencadenan en cada ejecución de un trabajo de copia de seguridad:

**1. Creación de la instantánea local (Source)**

Al iniciar el trabajo, el orquestador solicita al hipervisor que cree una instantánea de la VM. Esta instantánea sirve como punto de comparación para calcular el delta en relación con la instantánea de referencia anterior.

**2. Exportación diferencial mediante Changed Block Tracking (CBT)**

El orquestador compara la nueva instantánea con la instantánea de referencia anterior mediante los metadatos CBT. Solo se extraen los bloques de datos que han cambiado desde la última copia de seguridad, no la totalidad del disco.

**3. Cifrado y transferencia a S3**

Los bloques modificados se **cifran en tiempo real por el orquestador** y luego se envían mediante HTTPS/TLS 1.3 al bucket S3 remoto.

**4. Rotación de instantáneas (Coalesce)**

Una vez validada la transferencia, la antigua instantánea de referencia se elimina y la nueva instantánea se convierte en la referencia para el siguiente ciclo. El hipervisor entonces desencadena un proceso de **coalesce** (fusion) para reintegrar los datos del delta anterior en la cadena de discos virtuales.

:::warning[Impacto de I/O del Coalesce]
La operación de coalesce es **intensiva en I/O** en el almacenamiento de producción. Se desencadena automáticamente después de cada copia de seguridad exitosa. Se recomienda programar las ventanas de copia de seguridad durante períodos de baja carga de la aplicación.
:::

**5. Gestión de la retención en S3 (Merge) y Key Backup Interval**

En el almacenamiento S3, el orquestador gestiona la rotación de las copias de seguridad mediante la **fusión** (*merge*) de los deltas antiguos en la copia de seguridad completa más antigua conservada según la política de retención.

Para garantizar la integridad de la cadena de copias de seguridad, se **fuerza periódicamente** una copia de seguridad completa (típicamente cada 20 incrementos — *Key Backup Interval*). Esto crea un nuevo punto de partida limpio y limita el impacto de una posible corrupción de un eslabón de la cadena.

---

### Impacto en el dimensionamiento del almacenamiento de producción

:::warning[Punto de atención crítico — Almacenamiento en Bloque (Thick provisioning)]
La oferta OpenIaaS se basa en almacenamiento en bloque de alto rendimiento (Fibre Channel / LVM). Los snapshots utilizados por la copia de seguridad incremental se provisionan en modo **Thick**: cada snapshot consume en el Storage Repository (SR) el **tamaño nominal completo del disco de la VM**, y no solo el delta real.

**Ejemplo de consumo para una VM con un disco de 50 GB:**

| Elemento | Consumo en el SR |
|---|---|
| Disco VM activo | 50 GB |
| Snapshot de referencia permanente (para el cálculo del delta) | 50 GB |
| Snapshot temporal creado durante la exportación | 50 GB |
| **Total requerido durante la ventana de copia de seguridad** | **hasta 150 GB** |

**Regla de dimensionamiento recomendada**: prever **al menos un 50% de espacio libre** en el almacenamiento de producción en relación con el volumen total de las VMs respaldadas, para soportar esta sobrecarga inherente al almacenamiento en bloque de alto rendimiento.
:::

---

### Seguridad y cifrado de las copias de seguridad

#### Cifrado en tránsito

Todas las comunicaciones entre el orquestador de copia de seguridad y el almacenamiento S3 están cifradas mediante **HTTPS / TLS 1.3**.

#### Cifrado en reposo (At Rest) y gestión de claves

El cifrado es aplicado por el orquestador de copias de seguridad, **antes** del envío de los datos a S3.

| Parámetro | Valor |
|---|---|
| **Algoritmo** | AES-256 o ChaCha20-Poly1305 |
| **Generación de la clave** | Automática al desplegar el orquestador de copias de seguridad |
| **Almacenamiento de la clave** | Vault centralizado Cloud Temple (nunca expuesto en la interfaz de cliente) |
| **Resiliencia** | En caso de pérdida del orquestador, la clave se reinyecta desde el Vault para restaurar el servicio |

#### Aislamiento de red (arquitectura SecNumCloud)

La infraestructura de copia de seguridad está diseñada para ser **estrictamente aislada** respecto a los entornos de los clientes:

- **Separación física**: las redes *Cliente*, *Administración* y *Backup* se basan en backbones físicos distintos y contextos de enrutamiento (VRF) separados.
- **Imposibilidad de infección lateral**: una VM comprometida no puede alcanzar el almacenamiento S3 ni el orquestador de copias de seguridad — no existe ninguna ruta de red entre ellos. El S3 nunca se « monta » en la VM.

#### Administración segura

La administración de la plataforma de copia de seguridad está **reservada a los equipos de Backup de Cloud Temple** y sujeta a los requisitos de SecNumCloud:

| Control | Medida |
|---|---|
| **Bastión de acceso** | Paso obligatorio a través de un bastión de administración interno endurecido (Ubuntu Hardened) |
| **Estación de trabajo** | Acceso únicamente desde laptops de administración dedicados y seguros |
| **Autenticación** | MFA obligatorio a través de un directorio LDAP de administración dedicado (distinto del LDAP corporativo) |

---

### Monitoreo y auditoría

- **Registros de copia de seguridad** : visibles por el cliente directamente en la Consola Cloud Temple — estado (éxito/fallo), volumen, marca de tiempo.
- **Registros de acceso de administrador** : los accesos a las infraestructuras de copia de seguridad (orquestador, S3) se registran y **se auditan mensualmente** para detectar cualquier anomalía.
- **Pruebas de intrusión (Pentests PASSI)** : la infraestructura está sujeta a pruebas de intrusión regulares por parte de proveedores cualificados PASSI en el marco del mantenimiento de la calificación SecNumCloud.
- **Seguridad física** : todo el equipo está alojado en las zonas SecNumCloud (jaulas físicas dedicadas con control de acceso biométrico) de los centros de datos Cloud Temple.

---

### Compatibilidad y casos particulares

:::warning[VMs à écritures disque continues]
Algunas máquinas virtuales no son compatibles con esta tecnología de copia de seguridad cuando sus **cargas de escritura de disco son constantes** (bases de données actives, journaux transactionnels, etc.). El hipervisor no puede entonces finalizar la instantánea sin congelar la VM, lo cual puede durar varias horas.

Para estas cargas de trabajo, recomendamos **completar o reemplazar la copia de seguridad del hipervisor con una copia de seguridad a nivel de aplicación** : volcado de base de datos (pg_dump, mysqldump…), copia de seguridad mediante agente, o exportación nativa de la aplicación.
:::

---

### Creación de una política de copia de seguridad

La creación de una política de copia de seguridad es una operación de administración realizada **exclusivamente a través de una solicitud de soporte**, accesible mediante el icono de ayuda en la parte superior derecha de la interfaz.

La solicitud debe especificar:

- El nombre de su Organización
- Los datos de contacto de un responsable (correo electrónico y teléfono) para finalizar la configuración
- El nombre del tenant
- El nombre de la política de copia de seguridad
- Las características deseadas: frecuencia, retención (x días, y semanas, z meses…)

#### Restricciones de programación

| Restricción | Valor |
|---|---|
| **Intervalo mínimo entre dos ejecuciones** | 24 horas |
| **Retención máxima** | 24 meses |
| **Ejecuciones simultáneas por política** | 1 sola a la vez |

:::warning[Una política solo puede ejecutarse una vez a la vez]
Cada política de copia de seguridad es **mono-instancia**: solo una ejecución puede estar activa simultáneamente.

**Consecuencia práctica**: si agrega muchas máquinas virtuales a una política existente y la copia de seguridad del día anterior aún no ha finalizado en el momento del disparo programado, **el nuevo ciclo no comenzará** — se ignorará hasta la siguiente ocurrencia.

Para evitar esta situación:
- verifique las **duraciones de ejecución** de sus trabajos desde los registros de la Consola Cloud Temple,
- ajuste la **frecuencia** o el **tamaño de la política** si las copias de seguridad se desbordan regularmente en la siguiente ventana,
- considere **distribuir las VM en varias políticas** con horarios escalonados para perímetros grandes.
:::

:::info[Retención a largo plazo — disponibilidad futura]
**La retención máxima es actualmente de 24 meses.** Una retención a largo plazo (hasta 10 años) se integrará con el lanzamiento de nuestro producto **Glacier**, previsto para el **primer trimestre de 2027**, en forma de suscripción complementaria.

Para períodos de retención tan largos, recomendamos respaldar **exclusivamente archivos planos** (archivos crudos, documentos estáticos) así como **volcados de bases de datos**. La restauración de un servidor completo después de 10 años conlleva importantes riesgos: muchos servicios o dependencias pueden haberse vuelto obsoletos o incompatibles con el entorno actual.

**Alternativa disponible ahora mismo**: el servicio de **copia de seguridad mediante agente**, disponible como suscripción complementaria. Contacte al soporte para obtener más información.
:::

## Las máquinas virtuales

### Gestión de los recursos vCPU

Las modificaciones de recursos vCPU se realizan en frío (máquina apagada). La plataforma soporta hasta 254 vCPUs por máquina virtual (límite teórico), con pruebas exitosas realizadas en VMs Linux equipadas con 128 vCPUs.

Es importante tener en cuenta que el soporte del sistema operativo invitado constituye un factor determinante durante la asignación de recursos. Una asignación que supere los límites soportados por el sistema operativo puede provocar problemas de rendimiento significativos.

### Gestión de los recursos de memoria

Las modificaciones de memoria también se realizan en frío. Los límites son los siguientes:

- 1,5 TiB con soporte para instantáneas de memoria
- 8 TiB sin soporte para instantáneas de memoria
- 16 TiB (límite teórico sin soporte de seguridad, menos la RAM asignada a Xen y al dominio de control)

La memoria realmente utilizable puede estar limitada por el sistema operativo invitado. Superar los límites admitidos por el SO invitado puede provocar una disminución del rendimiento.

### Gestión de discos

- El tamaño máximo de un disco es de 2 To
- Los discos utilizan el formato VHD estándar
- El número máximo de discos virtuales por máquina virtual, incluidas las unidades de CD-ROM, es de 24

No es posible redimensionar los discos una vez creados. Para ampliar la capacidad de almacenamiento, es necesario crear un nuevo disco.

### Herramientas para las máquinas virtuales

Estas herramientas se utilizan para garantizar un funcionamiento óptimo de las máquinas virtuales. Cuando desee realizar una acción y alguna de estas herramientas sea necesaria, se mostrará un mensaje en la consola de Cloud Temple.
Para instalar estas herramientas, puede consultar los sitios oficiales de Xen Server para obtener un procedimiento específico según su sistema operativo.

#### Agente de Gestión

El Agente de Gestión es un componente instalado en cada máquina virtual. Permite al hipervisor gestionar mejor la máquina al tener acceso a más información y permite realizar ciertas acciones de manera más limpia.

#### Controladores PV (Paravirtualization Drivers)

Los controladores PV son controladores instalados en la máquina virtual para mejorar su rendimiento.
Sin estos controladores, la máquina funciona, pero más lentamente. Además, permiten realizar ciertas acciones avanzadas.
Los controladores PV se instalan de forma nativa en la mayoría de los kernels Linux actuales.

#### Herramientas

Las herramientas son un conjunto de componentes de software que mejoran la integración de la máquina virtual con la infraestructura de virtualización.

## Catálogos

El catálogo permite gestionar tres tipos de elementos esenciales:

- Las imágenes de disco (ISO)
- Las plantillas de configuración
- Las plantillas preinstaladas de máquinas virtuales

En la vista detallada de una plantilla de máquina virtual, puede consultar información crucial como la ubicación, el número de discos o incluso el número de adaptadores de red.

Cuando el número de discos virtuales se indica como 0, significa que se trata de una plantilla de configuración sin sistema operativo preinstalado, lo que le permite desplegar su propio entorno personalizado.

## Réplication de máquinas virtuales

La __réplication de máquinas virtuales__ de Cloud Temple garantiza la protección y la continuidad de sus datos críticos mediante una copia automatizada de sus entornos hacia una zona de disponibilidad distinta. Esta funcionalidad, integrada nativamente en el producto IaaS de código abierto, cumple con los requisitos más estrictos de continuidad del negocio y recuperación ante desastres.

### Una protección automatizada y segura

La replicación de Cloud Temple se basa en una infraestructura __cualificada SecNumCloud__, garantizando :

- __Replicación asíncrona__ : Copia continua de sus máquinas virtuales sin impacto en el rendimiento de producción
- __Separación geográfica__ : Almacenamiento de los réplicas en una zona de disponibilidad diferente a la de origen
- __Automatización completa__ : Proceso completamente automatizado a través de la [Console Cloud Temple](../console/console.md)
- __Cumplimiento normativo__ : Cumplimiento de los requisitos de copia de seguridad y continuidad del negocio

### Ventajas de la replicación

| Ventaja                | Descripción                                                                                                                                    |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuidad del negocio | Protección de sus servicios críticos en caso de un incidente mayor en el sitio principal.                                                          |
| Protección geográfica  | Replicación hacia una zona de disponibilidad distinta, protegiendo contra desastres localizados.                                             |
| Flexibilidad temporal  | Elección del intervalo de replicación según sus necesidades: de 15 minutos a 24 horas.                                                          |
| Simplicidad de gestión | Configuración y supervisión completamente integradas en la Consola Cloud Temple.                                                                |
| Cumplimiento SecNumCloud  | Infraestructura certificada que garantiza el más alto nivel de seguridad para sus datos sensibles.                                             |

### Configuración de la replicación

#### Políticas de replicación

La creación de una política de replicación define los parámetros de protección de sus máquinas virtuales:

- __Destino__ : Selección del almacenamiento objetivo en la zona de disponibilidad de replicación
- __Frecuencia__ : Intervalo de replicación adaptado a sus necesidades de recuperación (RPO)
- __Retención__ : Número de puntos de recuperación conservados

#### Intervalos disponibles

| Intervalo               | Uso recomendado                            | RPO (Pérdida máxima de datos) |
|-------------------------|--------------------------------------------|-----------------------------|
| __15 a 59 minutos__     | Aplicaciones críticas en tiempo real      | < 1 hora                    |
| __1 a 24 horas__        | Aplicaciones empresariales y entornos estándar | < 24 horas                |

:::warning[RPO : objectif non garanti contractuellement]
El intervalo de replicación configurado (par exemple 15 minutes) constituye un **objetivo de RPO (Recovery Point Objective)**, y no un compromiso contractual.

El RPO efectivamente alcanzado depende directamente de la **tasa de cambio (change rate)** de los datos en las máquinas virtuales replicadas. Si el volumen de datos modificados entre dos ciclos de replicación es demasiado grande, la transferencia puede no finalizar dentro del intervalo configurado. En este caso, el siguiente ciclo no comenzará hasta que se complete el anterior, lo que alarga de facto el RPO real.

**En resumen:**
- El RPO mínimo configurable es de **15 minutos**.
- Este RPO es alcanzable únicamente si la tasa de cambio de los datos permanece compatible con el ancho de banda de replicación disponible.
- **Ningún SLA está asociado al RPO** : se trata de un objetivo de « mejor esfuerzo » cuyo cumplimiento depende de las características de la carga de trabajo.
- Para cargas con alta tasa de escritura (bases de données, journaux transactionnels, etc.), se recomienda prever un intervalo de replicación más amplio y complementarlo con una estrategia de respaldo a nivel de aplicación.
:::

#### Asociación de máquinas virtuales

Una vez creada la política, puede asociar las máquinas virtuales que desea proteger:

- __Selección simple__ : Selección de las VM desde la interfaz de la Consola
- __Validación automática__ : Verificación de la compatibilidad y los requisitos previos
- __Activación inmediata__ : Inicio automático de la replicación después de la configuración

### Gestión de réplicas

#### Vista de políticas

La consola Cloud Temple ofrece una vista centralizada de sus políticas de replicación con:

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

- __Aplicaciones críticas__ : Replicación cada 15-30 minutos para minimizar la pérdida de datos
- __Aplicaciones empresariales__ : Replicación horaria o cada dos horas según las necesidades
- __Entornos de desarrollo__ : Replicación diaria generalmente suficiente

#### Planificación de políticas

- Cree políticas distintas según la criticidad de sus aplicaciones
- Nombre claramente sus políticas para facilitar la gestión
- Verifique periódicamente el estado de sus réplicas desde la consola
- Documente su estrategia de replicación para sus equipos

__Nota importante :__

*La replicación no reemplaza una estrategia de copia de seguridad completa. Constituye un complemento esencial para garantizar la continuidad del negocio en caso de un incidente mayor en su sitio principal.*

## Alta disponibilidad

La alta disponibilidad permite garantizar la continuidad del servicio de las máquinas virtuales (VM) en caso de fallo de un host físico dentro de un pool OpenIaaS.
Con la alta disponibilidad (HA), cada host en el pool envía regularmente señales de vida a sus pares a través del almacenamiento compartido (Block Storage Heartbeat). En caso de ausencia prolongada de respuesta, el host se considera fallido.

Un Block Storage designado como heartbeat significa que servirá como base para autenticar los hosts que no respondan.

Para que la alta disponibilidad esté correctamente configurada en un pool OpenIaaS, es indispensable contar con __al menos dos hosts__ conectados.

Cada VM debe configurarse con un nivel de prioridad de reinicio en alta disponibilidad :

#### Disabled

  La alta disponibilidad no está configurada. En caso de fallo del host, la máquina virtual no se reiniciará.

#### Restart

  En caso de fallo del host, la máquina virtual se reiniciará automáticamente en cuanto haya recursos disponibles en el pool. Las máquinas virtuales configuradas en modo "restart" se procesarán con prioridad, antes que aquellas configuradas en modo "best-effort".

#### Best-Effort  

  En caso de fallo del host, la máquina virtual solo se reiniciará automáticamente si quedan recursos disponibles después de procesar todas las máquinas virtuales configuradas en modo "restart". El modo "Best-effort" solo realiza un intento, por lo que si los recursos son insuficientes, la máquina virtual no se reiniciará.