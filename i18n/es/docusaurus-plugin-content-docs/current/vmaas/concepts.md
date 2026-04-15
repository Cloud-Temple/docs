---
title: Conceptos
---

El servicio **VMaaS** de Cloud Temple es una oferta de cómputo compartido que permite desplegar máquinas virtuales bajo demanda, sin gestionar la infraestructura subyacente. Esta página presenta los conceptos fundamentales del servicio.

## Arquitectura técnica

El servicio se basa en una infraestructura compartida compuesta por:

- **Hipervisor**: Infraestructura completamente gestionada por Cloud Temple (sin elección de hipervisor por parte del cliente).
- **Hardware de cómputo**: Blades Cisco UCS.
- **Almacenamiento**: Almacenamiento en bloque compartido de alto rendimiento.

La infraestructura está alojada en Francia.

## Regiones y zonas de disponibilidad

El servicio VMaaS se despliega en la región **FR1**. Al crear una máquina virtual, puede elegir la **zona de disponibilidad (AZ)** en la que se alojará.

Para más información sobre las zonas de disponibilidad y las regiones de Cloud Temple, consulte:

- [Conceptos de zonas de disponibilidad](../additional_content/concepts_az.md)
- [Conceptos regionales](../additional_content/concepts_regional.md)

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

Cada máquina virtual está equipada con **una tarjeta de red**.

El servicio es nativamente compatible con el servicio **VPC (Virtual Private Cloud)** de Cloud Temple, permitiendo el aislamiento de red y la segmentación de sus entornos.

## Despliegue e imágenes

Las máquinas virtuales se despliegan **exclusivamente desde las plantillas oficiales del Marketplace de Cloud Temple**. No es posible utilizar imágenes personalizadas de terceros.

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
| Disponibilidad de la infraestructura | 99,9% (medida mensualmente) |
| Garantía de recursos | Según la clase de servicio elegida |

## Seguridad y cumplimiento

| Certificación |
|---------------|
| ISO 27001:2022 |
| ISAE 3402 |

:::info Cualificación SecNumCloud
Este servicio está en proceso de cualificación SecNumCloud por parte de la ANSSI.
:::

Los datos están alojados en **Francia**, en un entorno compartido con **aislamiento lógico estricto** entre los clientes.

## Automatización

El servicio es completamente gestionable mediante:

- **Consola Cloud Temple**: interfaz gráfica para la gestión diaria
- **API REST Cloud Temple**: control programático del ciclo de vida de las VM
- **Proveedor Terraform Cloud Temple**: Infrastructure as Code

## Requisitos previos

Para utilizar el servicio VMaaS, debe disponer de:

- Un **Tenant Cloud Temple** activo
- Una suscripción mínima al **Soporte Estándar** ([ver documentación de soporte](https://docs.cloud-temple.com))
