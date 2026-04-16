---
title: Conceptos
---

El servicio **VM Instances** de Cloud Temple es una oferta de cómputo compartido que permite desplegar máquinas virtuales bajo demanda, sin gestionar la infraestructura subyacente. Esta página presenta los conceptos fundamentales del servicio.

## Regiones y zonas de disponibilidad

El servicio VM Instances se despliega en la región **FR1**. Al crear una máquina virtual, puede elegir la **zona de disponibilidad (AZ)** en la que se alojará.

Para más información sobre las zonas de disponibilidad y las regiones de Cloud Temple, consulte:

- [Conceptos de zonas de disponibilidad](../../additional_content/concepts_az.md)
- [Conceptos regionales](../../additional_content/concepts_regional.md)

## Clases de servicio

El servicio ofrece tres clases de servicio adaptadas a diferentes tipos de cargas de trabajo:

| Clase | Descripción | Recursos |
|-------|-------------|----------|
| **Development** | Costo optimizado, para entornos de prueba, integración y staging. Adecuado para cargas no críticas con uso variable. | Compartidos |
| **General Purpose** | Equilibrio óptimo vCPU/RAM para cargas de trabajo estándar (aplicaciones web, micro-servicios, bases de datos de tamaño moderado). | Compartidos |
| **Performance** | Diseñado para cargas de trabajo intensivas que requieren alto rendimiento de CPU. **Las vCPU son dedicadas** para garantizar un rendimiento constante. | vCPU dedicadas |

## Flavors

Se ofrecen flavors predefinidos para cada clase de servicio. También es posible crear **flavors personalizados** eligiendo libremente el número de vCPU y la cantidad de RAM.

### Development

Optimizado para entornos de prueba, integración y staging con costos controlados.

| Flavor | vCPU | RAM | Uso típico |
|--------|------|-----|------------|
| dev.small | 1 | 2 GB | Pruebas unitarias, CI ligera |
| dev.medium | 2 | 4 GB | Integración, herramientas internas |
| dev.large | 4 | 8 GB | Entorno de staging |

### General Purpose

Adecuado para aplicaciones web, micro-servicios y bases de datos de tamaño moderado.

| Flavor | vCPU | RAM | Uso típico |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Micro-servicio, pruebas funcionales |
| gp.medium | 2 | 8 GB | Servidor web, aplicación ligera |
| gp.large | 4 | 16 GB | Aplicación estándar |
| gp.xlarge | 8 | 32 GB | Base de datos mediana |
| gp.2xlarge | 16 | 64 GB | Aplicación crítica |

### Performance

Las **vCPU son dedicadas** para garantizar un rendimiento constante, incluso bajo alta carga.

| Flavor | vCPU | RAM | Uso típico |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Cómputo ligero, CI/CD |
| perf.large | 4 | 8 GB | Procesamiento batch, codificación |
| perf.xlarge | 8 | 16 GB | Cómputo intensivo |
| perf.2xlarge | 16 | 32 GB | Simulación, analytics |

### Flavors personalizados

Es posible crear un flavor personalizado seleccionando libremente:

- El número de vCPU
- La cantidad de RAM

Esta flexibilidad permite adaptar con precisión el dimensionamiento a los requisitos de la aplicación mientras se optimizan los costos.

:::note
Las especificaciones de los flavors pueden evolucionar. Consulte la consola de Cloud Temple para obtener la lista actualizada.
:::

## Almacenamiento

Todos los volúmenes del servicio VM Instances son **volúmenes Flash persistentes montados en red** (*network-attached*). No existe almacenamiento local efímero: sus datos se conservan independientemente del estado de la máquina virtual.

### Disco del sistema

Cada máquina virtual dispone de un **disco del sistema Flash incluido por defecto**, cuyo tamaño depende del sistema operativo elegido:

- Tamaño: entre **15 y 100 GB** según el SO seleccionado.

### Volúmenes adicionales

Es posible añadir volúmenes de almacenamiento adicionales a cada máquina virtual:

- **Tamaño máximo**: 2 TB por volumen
- **Número máximo**: 16 volúmenes por VM
- **Granularidad**: asignación en GB
- **Facturación**: por GB asignado, con elección de clase de almacenamiento

## Red

### Interfaz de red

Cada VM instance dispone de **una única interfaz de red**.

### Compatibilidad de red

Esta interfaz puede conectarse a dos tipos de redes Cloud Temple:

- **Red privada de backbone**: red privada compartida con aislamiento lógico estricto entre tenants. Ideal para interconectar sus recursos Cloud Temple en un entorno controlado. [Más información](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: red privada completamente gestionada que permite una segmentación avanzada y una configuración de red detallada de sus entornos. [Más información](../../network/vpc/vpc.md)

### IP flotante (Floating IP)

En una red **VPC**, es posible asociar una **IP flotante** a una VM instance. Una IP flotante es una dirección IP pública que puede adjuntar o separar libremente de una instancia, independientemente de su ciclo de vida.

## Despliegue e imágenes

Las VM Instances se despliegan desde las **imágenes oficiales del Marketplace de Cloud Temple**. Este catálogo de imágenes seleccionadas garantiza entornos probados, mantenidos y listos para usar para cada sistema operativo compatible.

El servicio soporta **Cloud-init** para la preconfiguración automática de instancias en el arranque (inyección de claves SSH, configuración de red, scripts de inicialización, etc.).

## Protección de datos

### Copia de seguridad (opcional)

Hay disponible una opción de copia de seguridad con retención configurable. Esta opción se **factura por separado**.

:::info
La replicación de VM no está incluida por defecto. Su estudio está previsto para el segundo semestre de 2026.
:::

## SLA y disponibilidad

| Compromiso | Valor |
|------------|-------|
| Disponibilidad de la infraestructura | 99,95% (medida mensualmente) |
| Garantía de recursos | Según la clase de servicio elegida |

## Automatización

El servicio es completamente gestionable mediante:

- **Consola Cloud Temple**: interfaz gráfica para la gestión diaria
- **API REST Cloud Temple**: control programático del ciclo de vida de las VM
- **Proveedor Terraform Cloud Temple**: Infrastructure as Code
