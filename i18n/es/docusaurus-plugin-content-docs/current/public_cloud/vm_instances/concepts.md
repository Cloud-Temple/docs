---
title: Conceptos
---

El servicio **VM Instances** de Cloud Temple es un producto de computación compartida certificado **SecNumCloud**, que permite desplegar máquinas virtuales bajo demanda, sin gestión de la infraestructura subyacente. Esta página presenta los conceptos fundamentales del servicio.

## Regiones y zonas de disponibilidad

El servicio VM Instances está desplegado en la región **FR1**. Al crear una máquina virtual, puedes elegir la **zona de disponibilidad (AZ)** en la que se alojará.

Para más información sobre las zonas de disponibilidad y las regiones de Cloud Temple, consulta:

- [Conceptos de zonas de disponibilidad](../../additional_content/concepts_az.md)
- [Conceptos de regiones](../../additional_content/concepts_regional.md)

## Clases de servicio

El servicio ofrece tres clases de servicio adaptadas a diferentes tipos de cargas de trabajo:

| Clase | Descripción | Recursos |
|--------|-------------|------------|
| **Development** | Coste optimizado, para entornos de prueba, integración y aceptación. Adecuado para cargas no críticas con uso variable. | Compartidos |
| **General Purpose** | Equilibrio óptimo vCPU/RAM para cargas de trabajo estándar (aplicaciones web, microservicios, bases de datos de tamaño moderado). | Compartidos |
| **Performance** | Diseñado para cargas de trabajo intensivas que requieren alto rendimiento de CPU. **Los vCPU son dedicados** para garantizar un rendimiento constante. | vCPU dedicados |

## Flavors (Gabaritos)

Se ofrecen flavors predefinidos para cada clase de servicio. También es posible crear **flavors personalizados** eligiendo libremente el número de vCPU y la cantidad de RAM.

### Development

Optimizado para entornos de prueba, integración y aceptación con un coste controlado.

| Flavor | vCPU | RAM | Tipo de uso |
|--------|------|-----|------------|
| dev.small | 1 | 2 Go | Prueba unitaria, CI ligera |
| dev.medium | 2 | 4 Go | Integración, herramientas internas |
| dev.large | 4 | 8 Go | Entorno de aceptación |

### General Purpose

Adecuado para aplicaciones web, microservicios y bases de datos de tamaño moderado.

| Flavor | vCPU | RAM | Tipo de uso |
|--------|------|-----|------------|
| gp.small | 1 | 4 Go | Microservicio, prueba funcional |
| gp.medium | 2 | 8 Go | Servidor web, aplicación ligera |
| gp.large | 4 | 16 Go | Aplicación estándar |
| gp.xlarge | 8 | 32 Go | Base de datos media |
| gp.2xlarge | 16 | 64 Go | Aplicación crítica |

### Performance

Los **vCPU son dedicados** para garantizar un rendimiento constante, incluso bajo alta carga.

| Flavor | vCPU | RAM | Tipo de uso |
|--------|------|-----|------------|
| perf.medium | 2 | 4 Go | Cálculo ligero, CI/CD |
| perf.large | 4 | 8 Go | Procesamiento por lotes, codificación |
| perf.xlarge | 8 | 16 Go | Cálculo intensivo |
| perf.2xlarge | 16 | 32 Go | Simulación, análisis |

### Flavors personalizados

Es posible crear un flavor personalizado seleccionando libremente:

- El número de vCPU
- La cantidad de RAM

Esta flexibilidad permite ajustar con precisión el dimensionamiento a las necesidades de la aplicación, optimizando al mismo tiempo los costes.

:::note
Las especificaciones de los flavors pueden evolucionar. Consulta la consola de Cloud Temple para obtener la lista actualizada.
:::

## Almacenamiento

Todos los volúmenes del servicio VM Instances son **volúmenes Flash persistentes montados en red** (*network-attached*). No existe almacenamiento local efímero: tus datos se conservan independientemente del estado de la máquina virtual.

### Disco del sistema

Cada máquina virtual dispone automáticamente de un **disco del sistema Flash** para alojar el sistema operativo. Este disco es un recurso de almacenamiento del servicio y no es gratuito; su tamaño depende del sistema operativo elegido:

- Tamaño: entre **15 y 100 Go** según el SO seleccionado.

El disco del sistema se factura al **Go** según el [catálogo tarifario oficial de Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). Su creación automática junto con la VM significa que es necesario para el despliegue del SO, y no que esté incluido gratuitamente.

### Volúmenes adicionales

Es posible añadir volúmenes de almacenamiento adicionales a cada máquina virtual:

- **Tamaño**: de **1 a 2 048 Go** por volumen
- **Número máximo**: 16 volúmenes por VM
- **Límite por familia**: **2 To por VM** en Development y General Purpose; **16 To por VM** en Enterprise
- **Granularidad**: asignación al Go
- **Facturación**: al Go asignado, con elección de la clase de almacenamiento

### Clases de almacenamiento

Están disponibles dos clases de almacenamiento en bloque para los volúmenes adicionales:

| Clase | Uso | Rendimiento | Tamaño mínimo | Tamaño máximo |
| --- | --- | --- | --- | --- |
| **Enterprise** | Almacenamiento en bloque de alto rendimiento para cargas de trabajo sensibles a la latencia. | **7 500 IOPS/To** | **1 Go** | **2 048 Go** |
| **Standard** | Almacenamiento en bloque estándar adecuado para la mayoría de las cargas de trabajo. | **1 500 IOPS/To** | **1 Go** | **2 048 Go** |

## Red

### Interfaz de red

Cada instancia VM puede disponer de **1 a 7 tarjetas de red**. Cada tarjeta de red está asociada a **una sola red**.

### Compatibilidad de red

Esta interfaz puede conectarse a dos tipos de redes de Cloud Temple:

- **Red privada de backbone**: red privada compartida con aislamiento lógico estricto entre inquilinos. Ideal para interconectar tus recursos de Cloud Temple en un entorno controlado. [Más información](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: red privada totalmente gestionada que permite una segmentación avanzada y una configuración de red fina de tus entornos. [Más información](../../network/vpc/vpc.md)

### IP flotante (Floating IP)

En una red **VPC**, es posible asociar una **IP flotante** a una instancia VM. Una IP flotante es una dirección IP pública que puedes adjuntar o desadjuntar libremente de una instancia, independientemente de su ciclo de vida.

### Appliances virtuales

Las appliances virtuales **Stormshield** y **FortiVM** son compatibles con la **familia Enterprise**, sujeto al cumplimiento de los requisitos técnicos y del ámbito de soporte aplicable.

## Despliegue e imágenes

Las VM Instances se despliegan desde las **imágenes oficiales del Marketplace de Cloud Temple**. Las plantillas disponibles son las de la [Marketplace filtrada para OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Este catálogo de imágenes seleccionadas garantiza entornos probados, mantenidos y listos para usar para cada sistema operativo soportado.

El servicio soporta **Cloud-init** para la preconfiguración automática de las instancias al arranque (inyección de claves SSH, configuración de red, scripts de inicialización, etc.).

### Migración de un SO fuera del Marketplace

Un sistema operativo que no esté disponible en el Marketplace puede ser objeto de una migración mediante restauración **Veeam en modo Bare Metal Recovery**, sujeto a validación técnica. Cloud Temple garantiza entonces el funcionamiento de la infraestructura VM, pero no garantiza el correcto funcionamiento del SO invitado, de sus aplicaciones o de los agentes necesarios cuando estos no están instalados o configurados correctamente. El soporte del SO invitado se limita entonces.

Se prevé un segundo método con la importación de discos **VHD/VMDK**, para crear una VM a partir de una imagen existente. Esta funcionalidad está en desarrollo y está prevista para el **cuarto trimestre de 2026**; no está disponible en el servicio actual.

## Protección de datos

### Copia de seguridad (opcional)

Están disponibles dos políticas de copia de seguridad: **`No Backup`** y **`Backup 30 snapshots`**. Con `Backup 30 snapshots`, se crea un snapshot automáticamente cada noche entre las **20 h y las 22 h**. Si el cliente activa una copia de seguridad adicional durante el día, se crean dos snapshots el mismo día: la retención activa cubre entonces **29 días** en lugar de 30. Esta opción se **factura como suplemento**.

:::info
La replicación de VM no está incluida por defecto. Su estudio está previsto para el segundo semestre de 2026.
:::

## SLA y disponibilidad

| Compromiso | Valor |
|------------|--------|
| Disponibilidad de la infraestructura | 99,95% (medido mensualmente) |
| Garantía de recursos | Según la clase de servicio elegida |

## Automatización

El servicio es completamente gestionable mediante:

- **Consola Cloud Temple**: interfaz gráfica para la gestión diaria
- **API REST Cloud Temple**: control programático del ciclo de vida de las VMs
- **Provider Terraform Cloud Temple**: Infraestructura como Código
