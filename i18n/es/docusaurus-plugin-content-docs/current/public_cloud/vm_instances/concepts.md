---
title: Conceptos
---

## Presentación

El servicio **VM Instances** es un producto de computación compartida que permite desplegar máquinas virtuales bajo demanda, sin gestionar la infraestructura subyacente. Ofrece varias clases de servicio, desde el desarrollo con coste controlado hasta la producción crítica, y se integra de forma nativa con las redes de Cloud Temple. Puedes empezar con una sola VM y hacer evolucionar tu uso sin mínimo.

### Destinatarios y casos de uso

- **Equipos de desarrollo**: entornos de prueba y de aceptación con coste controlado.
- **Producción web y de aplicaciones**: alojamiento de aplicaciones de negocio y de sitios web.
- **Aplicaciones con uso intensivo de datos**: bases de datos, procesamiento de datos.
- **Empresas y sector público**: alojamiento de datos en un entorno soberano.

## Ventajas

| Ventaja                | Descripción                                                                                         |
|------------------------|-----------------------------------------------------------------------------------------------------|
| Flexibilidad y elección | Varias clases de servicio y flavors para adaptar el coste a cada uso.                              |
| Simplicidad de gestión | La infraestructura está totalmente gestionada; las VM se despliegan desde el Marketplace en pocos minutos. |
| Soberanía              | Datos alojados en Francia, en un servicio cualificado SecNumCloud.                                  |
| Integración completa   | Compatible con el VPC y el Private Backbone, gestionable mediante API y Terraform.                  |
| Escalabilidad          | Sin mínimo: empiezas con una sola VM.                                                               |

## Funcionalidades

| Funcionalidad              | Descripción                                                                                       |
|----------------------------|---------------------------------------------------------------------------------------------------|
| Clases de servicio         | Development, General Purpose y Performance (vCPU dedicados).                                      |
| Flavors predefinidos y personalizados | Flavors listos para usar, o número de vCPU y cantidad de RAM elegidos libremente.      |
| Despliegue desde el Marketplace | Creación de VM desde las imágenes oficiales del Marketplace de Cloud Temple.                 |
| Cloud-init                 | Preconfiguración automática de las instancias al arranque.                                        |
| Elección de la zona        | Selección de la zona de disponibilidad en el despliegue.                                          |
| Snapshots                  | Creación y gestión de snapshots desde la consola.                                                 |
| Almacenamiento persistente | Disco del sistema y volúmenes adicionales Flash, en clase Standard o Enterprise.                  |
| Red                        | Hasta 7 tarjetas de red, VPC con IP flotante, Private Backbone.                                   |
| Copia de seguridad (opcional) | Política `Backup 30 snapshots` con un snapshot diario.                                         |

### Despliegue e imágenes

Las VM Instances se despliegan desde las **imágenes oficiales del Marketplace de Cloud Temple**. Las plantillas disponibles son las de la [Marketplace filtrada para OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Este catálogo de imágenes seleccionadas garantiza entornos probados, mantenidos y listos para usar para cada sistema operativo soportado.

El servicio soporta **Cloud-init** para la preconfiguración automática de las instancias al arranque (inyección de claves SSH, configuración de red, scripts de inicialización, etc.).

### Migración de un SO fuera del Marketplace

Un sistema operativo que no esté disponible en el Marketplace puede ser objeto de una migración mediante restauración **Veeam en modo Bare Metal Recovery**, sujeto a validación técnica. En ese caso se garantiza el funcionamiento de la infraestructura VM, pero no el del SO invitado, de sus aplicaciones o de los agentes necesarios cuando estos no están instalados o configurados correctamente. El soporte del SO invitado queda entonces limitado.

### Automatización

El servicio es completamente gestionable mediante:

- **Consola Cloud Temple**: interfaz gráfica para la gestión diaria y la visualización de las métricas (CPU, RAM, disco);
- **API REST Cloud Temple**: control programático del ciclo de vida de las VM;
- **Provider Terraform Cloud Temple**: Infraestructura como Código.

## Arquitectura

Las VM Instances se ejecutan en una infraestructura compartida, con un aislamiento lógico estricto entre los clientes. Todos los volúmenes son **volúmenes Flash persistentes montados en red** (*network-attached*): no existe almacenamiento local efímero, y tus datos se conservan independientemente del estado de la máquina virtual.

Cada VM se conecta al **VPC** o al **Private Backbone** a través de sus tarjetas de red, y puede desplegarse desde el Marketplace en la zona de disponibilidad que elijas.

## Regiones y zonas de disponibilidad

El servicio VM Instances está desplegado en la región **FR1**. Al crear una máquina virtual, puedes elegir la **zona de disponibilidad (AZ)** en la que se alojará. Esta elección no requiere la activación de zonas de disponibilidad de la oferta IaaS.

Para más información sobre las zonas de disponibilidad y las regiones de Cloud Temple, consulta:

- [Conceptos de zonas de disponibilidad](../../additional_content/concepts_az.md)
- [Conceptos de regiones](../../additional_content/concepts_regional.md)

## Especificaciones técnicas

### Clases de servicio

El servicio ofrece tres clases de servicio adaptadas a diferentes tipos de cargas de trabajo:

| Clase | Descripción | Recursos |
|--------|-------------|------------|
| **Development** | Coste optimizado, para entornos de prueba, integración y aceptación. Adecuado para cargas no críticas con uso variable. | Compartidos |
| **General Purpose** | Equilibrio óptimo vCPU/RAM para cargas de trabajo estándar (aplicaciones web, microservicios, bases de datos de tamaño moderado). | Compartidos |
| **Performance** | Diseñado para cargas de trabajo intensivas que requieren alto rendimiento de CPU. **Los vCPU son dedicados** para garantizar un rendimiento constante. | vCPU dedicados |

### Flavors (Gabaritos)

Se ofrecen flavors predefinidos para cada clase de servicio. También es posible crear **flavors personalizados** eligiendo libremente el número de vCPU y la cantidad de RAM.

#### Development

Optimizado para entornos de prueba, integración y aceptación con un coste controlado.

| Flavor | vCPU | RAM | Tipo de uso |
|--------|------|-----|------------|
| dev.small | 1 | 2 GB | Prueba unitaria, CI ligera |
| dev.medium | 2 | 4 GB | Integración, herramientas internas |
| dev.large | 4 | 8 GB | Entorno de aceptación |

#### General Purpose

Adecuado para aplicaciones web, microservicios y bases de datos de tamaño moderado.

| Flavor | vCPU | RAM | Tipo de uso |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Microservicio, prueba funcional |
| gp.medium | 2 | 8 GB | Servidor web, aplicación ligera |
| gp.large | 4 | 16 GB | Aplicación estándar |
| gp.xlarge | 8 | 32 GB | Base de datos media |
| gp.2xlarge | 16 | 64 GB | Aplicación crítica |

#### Performance

Los **vCPU son dedicados** para garantizar un rendimiento constante, incluso bajo alta carga.

| Flavor | vCPU | RAM | Tipo de uso |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Cálculo ligero, CI/CD |
| perf.large | 4 | 8 GB | Procesamiento por lotes, codificación |
| perf.xlarge | 8 | 16 GB | Cálculo intensivo |
| perf.2xlarge | 16 | 32 GB | Simulación, análisis |

#### Flavors personalizados

Es posible crear un flavor personalizado seleccionando libremente:

- El número de vCPU
- La cantidad de RAM

Esta flexibilidad permite ajustar con precisión el dimensionamiento a las necesidades de la aplicación, optimizando al mismo tiempo los costes.

:::note
Las especificaciones de los flavors pueden evolucionar. Consulta la consola Cloud Temple para obtener la lista actualizada.
:::

### Almacenamiento

Todos los volúmenes del servicio VM Instances son **volúmenes Flash persistentes montados en red** (*network-attached*). No existe almacenamiento local efímero: tus datos se conservan independientemente del estado de la máquina virtual.

#### Disco del sistema

Cada máquina virtual dispone automáticamente de un **disco del sistema Flash** para alojar el sistema operativo. Este disco es un recurso de almacenamiento del servicio y no es gratuito; su tamaño depende del sistema operativo elegido:

- Tamaño: entre **15 y 100 GB** según el SO seleccionado.

El disco del sistema se factura por **Go**. Su creación automática junto con la VM significa que es necesario para el despliegue del SO, y no que esté incluido gratuitamente.

#### Volúmenes adicionales

Es posible añadir volúmenes de almacenamiento adicionales a cada máquina virtual:

- **Tamaño**: de **1 a 2 048 GB** por volumen
- **Número máximo**: 16 volúmenes por VM
- **Límite por familia**: **2 TB por VM** en Development y General Purpose; **16 TB por VM** en Enterprise
- **Granularidad**: asignación por Go
- **Facturación**: por Go asignado, con elección de la clase de almacenamiento

#### Clases de almacenamiento

Están disponibles dos clases de almacenamiento en bloque para los volúmenes adicionales:

| Clase | Uso | Rendimiento | Tamaño mínimo | Tamaño máximo |
| --- | --- | --- | --- | --- |
| **Enterprise** | Almacenamiento en bloque de alto rendimiento para cargas de trabajo sensibles a la latencia. | **7 500 IOPS/To** | **1 GB** | **2 048 GB** |
| **Standard** | Almacenamiento en bloque estándar adecuado para la mayoría de las cargas de trabajo. | **1 500 IOPS/To** | **1 GB** | **2 048 GB** |

### Red

#### Interfaz de red

Cada instancia VM puede disponer de **1 a 7 tarjetas de red**. Cada tarjeta de red está asociada a **una sola red**.

#### Compatibilidad de red

Esta interfaz puede conectarse a dos tipos de redes de Cloud Temple:

- **Red privada de backbone**: red privada compartida con aislamiento lógico estricto entre inquilinos. Ideal para interconectar tus recursos de Cloud Temple en un entorno controlado. [Más información](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: red privada totalmente gestionada que permite una segmentación avanzada y una configuración de red fina de tus entornos. [Más información](../../network/vpc/vpc.md)

#### IP flotante (Floating IP)

En una red **VPC**, es posible asociar una **IP flotante** a una instancia VM. Una IP flotante es una dirección IP pública que puedes asociar o desasociar libremente de una instancia, independientemente de su ciclo de vida.

#### Appliances virtuales

Las appliances virtuales **Stormshield** y **FortiVM** son compatibles con la **familia Enterprise**, sujeto al cumplimiento de los requisitos técnicos y del ámbito de soporte aplicable.

### Límites

- **Volúmenes**: 16 volúmenes adicionales por VM, de 1 a 2 048 GB cada uno.
- **Tarjetas de red**: 7 por VM, con una sola red por tarjeta.
- **Capacidad no reservada**: la creación y el reinicio de una VM están sujetos a la capacidad disponible. Solo una instancia reservada garantiza la capacidad, dentro del ámbito de su reserva.

## Seguridad y cumplimiento

VM Instances está certificado HDS e ISO 27001, y cualificado SecNumCloud.

- **Aislamiento**: entorno compartido con aislamiento lógico estricto entre los clientes.
- **Cifrado**: el cifrado en reposo de la infraestructura de almacenamiento subyacente lo garantiza el servicio. El cifrado de los datos a nivel de aplicación (sistema de archivos, base de datos) queda a tu cargo.
- **Residencia de los datos**: datos alojados en Francia.

<a id="protection-des-données"></a>

## Copia de seguridad y continuidad

### Copia de seguridad (opcional)

Están disponibles dos políticas de copia de seguridad: **`No Backup`** y **`Backup 30 snapshots`**. Con `Backup 30 snapshots`, se crea un snapshot automáticamente cada noche entre las **20 h y las 22 h**. Si el cliente activa una copia de seguridad adicional durante el día, se crean dos snapshots el mismo día: la retención activa cubre entonces **29 días** en lugar de 30. Esta opción se **factura como suplemento**.

:::info
La replicación de VM no está incluida.
:::

<a id="sla-et-disponibilité"></a>

## Disponibilidad del servicio

El objetivo de disponibilidad es del **99,95 % por VM Instance**, medido sobre un mes. Cubre los recursos de cálculo (CPU, RAM); la conectividad de red y el almacenamiento persistente tienen sus propios compromisos. La garantía de recursos depende de la clase de servicio elegida.

Las VM tools, preinstaladas en las imágenes del Marketplace, son necesarias para la medición de la disponibilidad: se recomienda no desactivarlas ni eliminarlas.

## Responsabilidades

El reparto de responsabilidades entre el cliente y Cloud Temple se detalla en la [matriz de responsabilidades (RACI) de VM Instances](../../contractual/vm-instances/raci.md).

El acceso al servicio para un **cliente directo** requiere como mínimo el **Soporte Standard**, incluso si el propio cliente administra el SO y las aplicaciones. El **Soporte Basic** está destinado a los clientes acompañados por un partner formado.

## Reversibilidad

| Operación                 | Entregable                            | Plazo       | Coste      |
|---------------------------|---------------------------------------|-------------|------------|
| Exportación de los datos  | Imágenes de disco, en formatos estándar | 30 días   | Sin coste  |
| Asistencia a la migración | Soporte técnico                       | Bajo demanda | Según presupuesto |
| Purga segura              | Certificado de destrucción            | 7 días      | Incluido   |

## Precios

El compute se factura por horas, sin compromiso mensual; toda hora iniciada se factura. La detención de una VM suspende la facturación de los vCPU y de la RAM, pero no la del almacenamiento. El detalle de las reglas de facturación y de las cuotas se describe en las [FAQ de VM Instances](./faq.md). Los precios se publican en la página del producto en el sitio web de Cloud Temple:
[VM Instances — precios](https://www.cloud-temple.com/produits/vm-instances/).
