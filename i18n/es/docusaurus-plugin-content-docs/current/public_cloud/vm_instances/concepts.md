---
title: Concepts
---

El servicio **VM Instances** de Cloud Temple es un producto de cómputo compartido calificado **SecNumCloud**, que permite desplegar máquinas virtuales bajo demanda, sin gestión de la infraestructura subyacente. Esta página presenta los conceptos fundamentales del servicio.

## Regiones y zonas de disponibilidad

El servicio VM Instances está desplegado en la región **FR1**. Al crear una máquina virtual, puede elegir la **zona de disponibilidad (AZ)** en la que será alojada.

Para obtener más información sobre las zonas de disponibilidad y las regiones de Cloud Temple, consulte:

- [Concepts des zones de disponibilité](../../additional_content/concepts_az.md)
- [Concepts des régions](../../additional_content/concepts_regional.md)

## Clases de servicio

El servicio ofrece tres clases de servicio adaptadas a diferentes tipos de cargas de trabajo:

| Clase | Descripción | Recursos |
|--------|-------------|------------|
| **Development** | Coste optimizado, para entornos de prueba, integración y aceptación. Adecuado para cargas no críticas con uso variable. | Compartidas |
| **General Purpose** | Equilibrio óptimo vCPU/RAM para cargas de trabajo estándar (aplicaciones web, microservicios, bases de datos de tamaño moderado). | Compartidas |
| **Performance** | Diseñado para cargas de trabajo intensivas que requieren un alto rendimiento de CPU. **Los vCPU son dedicados** para garantizar un rendimiento constante. | vCPU dedicados |

## Sabores (Flavors)

Se proponen sabores predefinidos para cada clase de servicio. También es posible crear **sabores personalizados** eligiendo libremente el número de vCPU y la cantidad de RAM.

### Desarrollo

Optimizado para entornos de prueba, integración y aceptación con un coste controlado.

| Flavor | vCPU | RAM | Tipo de uso |
|--------|------|-----|-------------|
| dev.small | 1 | 2 GB | Prueba unitaria, CI ligera |
| dev.medium | 2 | 4 GB | Integración, herramientas internas |
| dev.large | 4 | 8 GB | Entorno de aceptación |

### General Purpose

Adaptado a aplicaciones web, microservicios y bases de datos de tamaño moderado.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Microservicio, prueba funcional |
| gp.medium | 2 | 8 GB | Servidor web, aplicación ligera |
| gp.large | 4 | 16 GB | Aplicación estándar |
| gp.xlarge | 8 | 32 GB | Base de datos de tamaño medio |
| gp.2xlarge | 16 | 64 GB | Aplicación crítica |

### Rendimiento

Los **vCPU son dedicados** para garantizar un rendimiento constante, incluso bajo carga elevada.

| Flavor | vCPU | RAM | Tipo de uso |
|--------|------|-----|------------|
| perf.medium | 2 | 4 Go | Cálculo ligero, CI/CD |
| perf.large | 4 | 8 Go | Procesamiento por lotes, codificación |
| perf.xlarge | 8 | 16 Go | Cálculo intensivo |
| perf.2xlarge | 16 | 32 Go | Simulación, analítica |

### Plantillas personalizadas

Es posible crear una plantilla personalizada seleccionando libremente:

- El número de vCPU
- La cantidad de RAM

Esta flexibilidad permite adaptar precisamente el dimensionamiento a las necesidades de la aplicación optimizando al mismo tiempo los costos.

:::note
Las especificaciones de las plantillas pueden evolucionar. Consulte la consola de Cloud Temple para la lista actualizada.
:::

## Almacenamiento

Todos los volúmenes del servicio VM Instances son **volúmenes Flash persistentes montados en red** (*network-attached*). No existe almacenamiento local efímero: sus datos se conservan independientemente del estado de la máquina virtual.

### Disco de sistema

Cada máquina virtual dispone automáticamente de un **disco de sistema Flash** para alojar el sistema operativo. Este disco es un recurso de almacenamiento del servicio y no es gratuito; su tamaño depende del sistema operativo elegido:

- Tamaño: entre **15 y 100 GB** según el SO seleccionado.

El disco de sistema se factura por **GB** según el catálogo tarifario de VM Instances. Su creación automática con la VM significa que es necesario para el despliegue del SO, y no que está incluido gratuitamente.

### Volúmenes adicionales

Es posible agregar volúmenes de almacenamiento adicionales a cada máquina virtual:

- **Tamaño** : de **1 a 2 048 Go** por volumen
- **Número máximo** : 16 volúmenes por VM
- **Límite por familia** : **2 To por VM** en Development y General Purpose ; **16 To por VM** en Enterprise
- **Granularidad** : asignación en Go
- **Facturación** : por Go asignado, con elección de la clase de almacenamiento

### Clases de almacenamiento

Dos clases de almacenamiento de bloque están disponibles para los volúmenes adicionales:

| Clase | Uso | Rendimiento | Tamaño mínimo | Tamaño máximo |
| --- | --- | --- | --- | --- |
| **Enterprise** | Almacenamiento de bloque de alto rendimiento para cargas de trabajo sensibles a la latencia. | **7 500 IOPS/TB** | **1 GB** | **2 048 GB** |
| **Standard** | Almacenamiento de bloque estándar adecuado para la mayoría de las cargas de trabajo. | **1 500 IOPS/TB** | **1 GB** | **2 048 GB** |

## Red

### Interfaz de red

Cada instancia de VM puede disponer de **1 a 7 tarjetas de red**. Cada tarjeta de red está asociada a **una sola red**.

### Compatibilidad de red

Esta interfaz puede conectarse a dos tipos de redes Cloud Temple :

- **Red privada de backbone** : red privada compartida con aislamiento lógico estricto entre los tenants. Ideal para interconectar sus recursos de Cloud Temple en un entorno controlado. [En savoir plus](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)** : red privada totalmente gestionada que permite una segmentación avanzada y una configuración de red detallada de sus entornos. [En savoir plus](../../network/vpc/vpc.md)

### IP flotante (Floating IP)

En una red **VPC**, es posible asociar una **IP flotante** a una instancia de VM. Una IP flotante es una dirección IP pública que puede adjuntar o desadjuntar libremente de una instancia, independientemente de su ciclo de vida.

### Apliance virtuales

Las apliance virtuales **Stormshield** y **FortiVM** son compatibles con la **familia Enterprise**, sujeto al cumplimiento de los prerrequisitos técnicos y del alcance de soporte aplicable.

## Despliegue e imágenes

Las instancias VM se despliegan desde las **imágenes oficiales de la Marketplace Cloud Temple**. Las plantillas disponibles son las de la [Marketplace filtrada para OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Este catálogo de imágenes seleccionadas garantiza entornos probados, mantenidos y listos para usar para cada sistema operativo soportado.

El servicio soporta **Cloud-init** para la preconfiguración automática de las instancias al inicio (inyección de claves SSH, configuración de red, scripts de inicialización, etc.).

### Migración de un SO fuera de Marketplace

Un sistema operativo que no está disponible en la Marketplace puede ser objeto de una migración mediante restauración **Veeam en modo Bare Metal Recovery**, sujeto a validación técnica. Cloud Temple garantiza entonces el funcionamiento de la infraestructura VM, pero no garantiza el correcto funcionamiento del SO invitado, de sus aplicaciones ni de los agentes necesarios cuando estos no están instalados o configurados correctamente. El soporte del SO invitado es entonces limitado.

Se prevé un segundo método mediante la importación de discos **VHD/VMDK**, para crear una VM a partir de una imagen existente. Esta funcionalidad está en desarrollo y está prevista para el **cuarto trimestre de 2026**; no está disponible en el servicio actual.

## Protección de datos

### Respaldo (opcional)

Están disponibles dos políticas de respaldo : **`No Backup`** et **`Backup 30 snapshots`**. Con `Backup 30 snapshots`, se crea automáticamente un snapshot cada noche entre las **20 h y las 22 h**. Si el cliente desencadena un respaldo adicional durante el día, se crean dos snapshots el mismo día : la retención activa cubre entonces **29 días** en lugar de 30. Esta opción se **factura adicionalmente**.

:::info
La replicación de VM no está incluida por defecto. Su estudio está previsto para el segundo semestre de 2026.
:::

## SLA y disponibilidad

| Compromiso | Valor |
|------------|--------|
| Disponibilidad de la infraestructura | 99,95% (medida mensualmente) |
| Garantía de recursos | Según la clase de servicio elegida |

## Automatización

El servicio es completamente gestionable a través de :

- **Consola Cloud Temple** : interfaz gráfica para la gestión diaria
- **API REST Cloud Temple** : control programático del ciclo de vida de las VMs
- **Provider Terraform Cloud Temple** : Infrastructure as Code