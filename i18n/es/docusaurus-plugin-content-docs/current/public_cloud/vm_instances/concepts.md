---
title: Conceptos
---

El servicio **VM Instances** de Cloud Temple es un producto de computación compartida certificado **SecNumCloud**, que permite desplegar máquinas virtuales bajo demanda, sin necesidad de gestionar la infraestructura subyacente. Esta página presenta los conceptos fundamentales del servicio.

## Regiones y zonas de disponibilidad

El servicio VM Instances está desplegado en la región **FR1**. Al crear una máquina virtual, puede elegir la **zona de disponibilidad (AZ)** en la que se alojará.

Para obtener más información sobre las zonas de disponibilidad y las regiones de Cloud Temple, consulte:

- [Conceptos de zonas de disponibilidad](../../additional_content/concepts_az.md)
- [Conceptos de regiones](../../additional_content/concepts_regional.md)

## Clases de servicio

El servicio ofrece tres clases de servicio adaptadas a diferentes tipos de cargas de trabajo:

| Clase | Descripción | Recursos |
|--------|-------------|------------|
| **Development** | Coste optimizado, para entornos de prueba, integración y aceptación. Adecuado para cargas no críticas con uso variable. | Compartidos |
| **General Purpose** | Equilibrio óptimo vCPU/RAM para cargas de trabajo estándar (aplicaciones web, microservicios, bases de datos de tamaño moderado). | Compartidos |
| **Performance** | Diseñado para cargas de trabajo intensivas que requieren alto rendimiento de CPU. **Los vCPU son dedicados** para garantizar un rendimiento constante. | vCPU dedicados |

## Sabores (Flavors)

Se ofrecen sabores predefinidos para cada clase de servicio. También es posible crear **sabores personalizados** eligiendo libremente el número de vCPU y la cantidad de RAM.

### Desarrollo

Optimizado para entornos de prueba, integración y preproducción con un costo controlado.

| Sabor | vCPU | RAM | Tipo de uso |
|--------|------|-----|------------|
| dev.small | 1 | 2 GB | Pruebas unitarias, CI ligera |
| dev.medium | 2 | 4 GB | Integración, herramientas internas |
| dev.large | 4 | 8 GB | Entorno de preproducción |

### Propósito General

Adecuado para aplicaciones web, microservicios y bases de datos de tamaño moderado.

| Sabor | vCPU | RAM | Tipo de uso |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Microservicio, prueba funcional |
| gp.medium | 2 | 8 GB | Servidor web, aplicación ligera |
| gp.large | 4 | 16 GB | Aplicación estándar |
| gp.xlarge | 8 | 32 GB | Base de datos de tamaño medio |
| gp.2xlarge | 16 | 64 GB | Aplicación crítica |

### Rendimiento

Los **vCPU están dedicados** para garantizar un rendimiento constante, incluso bajo carga elevada.

| Flavor | vCPU | RAM | Tipo de uso |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Cálculo ligero, CI/CD |
| perf.large | 4 | 8 GB | Procesamiento por lotes, codificación |
| perf.xlarge | 8 | 16 GB | Cálculo intensivo |
| perf.2xlarge | 16 | 32 GB | Simulación, análisis |

### Plantillas personalizadas

Es posible crear una plantilla personalizada seleccionando libremente:

- El número de vCPU
- La cantidad de RAM

Esta flexibilidad permite adaptar con precisión el dimensionamiento a las necesidades de la aplicación, optimizando al mismo tiempo los costos.

:::note
Las especificaciones de las plantillas pueden cambiar. Consulte la consola de Cloud Temple para obtener la lista actualizada.
:::

## Almacenamiento

Todos los volúmenes del servicio Instancias de VM son **volúmenes Flash persistentes montados en red** (*network-attached*). No existe almacenamiento local efímero: sus datos se conservan independientemente del estado de la máquina virtual.

### Disco de sistema

Cada máquina virtual cuenta con un **disco de sistema Flash incluido por defecto**, cuyo tamaño depende del sistema operativo elegido:

- Tamaño: entre **15 y 100 Go** según el SO seleccionado.

### Volúmenes adicionales

Es posible agregar volúmenes de almacenamiento adicionales a cada máquina virtual:

- **Tamaño máximo** : 2 To por volumen
- **Número máximo** : 16 volúmenes por VM
- **Granularidad** : asignación por Go
- **Facturación** : por Go asignado, con elección de la clase de almacenamiento

## Red

### Interfaz de red

Cada instancia de VM puede tener de **1 a 7 tarjetas de red**. Cada tarjeta de red está asociada a **una sola red**.

### Compatibilidad de red

Esta interfaz puede conectarse a dos tipos de redes de Cloud Temple:

- **Red troncal privada**: red privada compartida con aislamiento lógico estricto entre tenants. Ideal para interconectar sus recursos de Cloud Temple en un entorno controlado. [En savoir plus](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: red privada completamente gestionada que permite una segmentación avanzada y una configuración de red granular de sus entornos. [En savoir plus](../../network/vpc/vpc.md)

### IP flotante (Floating IP)

En una red **VPC**, es posible asociar una **IP flotante** a una instancia de VM. Una IP flotante es una dirección IP pública que puede asociar o disociar libremente de una instancia, independientemente de su ciclo de vida.

## Despliegue e imágenes

Las instancias de VM se despliegan desde las **imágenes oficiales de la Marketplace de Cloud Temple**. Las plantillas disponibles son las de la [Marketplace filtrada para OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Este catálogo de imágenes seleccionadas garantiza entornos probados, mantenidos y listos para usar para cada sistema operativo compatible.

El servicio es compatible con **Cloud-init** para la preconfiguración automática de las instancias en el arranque (inyección de claves SSH, configuración de red, scripts de inicialización, etc.).

## Protección de datos

### Copia de seguridad (opcional)

Están disponibles dos políticas de copia de seguridad: **`No Backup`** y **`Backup 30 snapshots`**. Con `Backup 30 snapshots`, se crea automáticamente un snapshot cada noche entre las **20 h y las 22 h**. Si el cliente inicia un backup adicional durante el día, se crean dos snapshots el mismo día: la retención activa cubre entonces **29 días** en lugar de 30. Esta opción se **factura adicionalmente**.

:::info
La replicación de VM no está incluida de forma predeterminada. Su evaluación está prevista para el segundo semestre de 2026.
:::

## SLA y disponibilidad

| Compromiso | Valor |
|------------|--------|
| Disponibilidad de la infraestructura | 99,95% (medida mensualmente) |
| Garantía de recursos | Según la clase de servicio elegida |

## Automatización

El servicio es completamente administrable mediante :

- **Console Cloud Temple** : interfaz gráfica para la gestión diaria
- **API REST Cloud Temple** : control programático del ciclo de vida de las VMs
- **Provider Terraform Cloud Temple** : Infraestructura como Código