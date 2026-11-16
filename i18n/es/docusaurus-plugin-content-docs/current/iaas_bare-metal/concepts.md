---
title: Conceptos
---

<a id="une-infrastructure-matérielle-et-flexible"></a>

## Presentación

La oferta **Bare Metal** proporciona servidores físicos dedicados, sin mutualización de recursos, asociados a un almacenamiento de tipo bloque distribuido. Ofrece una personalización total a los clientes que desean gestionar su propio entorno de software, ya sea para instalar un sistema Linux, Windows o un hipervisor.

### Públicos y casos de uso

- **Sector público y administraciones** : aplicaciones sensibles conformes a la doctrina « cloud au centre ».
- **Sectores regalianos** : entornos que requieren un aislamiento físico.
- **Salud** : tratamiento de datos de salud sobre una infraestructura certificada HDS.
- **Inteligencia artificial** : GPU dedicados para el entrenamiento y la inferencia de modelos.
- **Cloud privado** : personalización completa de la pila de software, por ejemplo para una granja de hipervisores.
- **Licencias de software** : control preciso de los recursos para optimizar las licencias vinculadas al hardware.

## Ventajas

| Ventaja                     | Descripción                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| Control total               | Usted instala libremente el entorno de software (SO, hipervisor) y accede directamente a los servidores. |
| Aislamiento físico           | Cada servidor está dedicado a usted, sin mutualización de recursos.                                    |
| Arquitectura flexible        | El cómputo y el almacenamiento están separados: cada uno se dimensiona de forma independiente.                       |
| Despliegue multi-zonas      | Los servidores pueden distribuirse en varias zonas de disponibilidad.                            |
| Hardware de alto rendimiento   | Ocho clases de blades, dos de las cuales equipadas con GPU NVIDIA.                                            |

## Funcionalidades

| Funcionalidad          | Descripción                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Servidores dedicados         | Ocho clases de blades, de ECO a PERFORMANCE 5, a partir de un servidor y sin límite.            |
| GPU NVIDIA              | NVIDIA L40S 48 Go (PERFORMANCE 4) y NVIDIA H100 80 Go (PERFORMANCE 5).                         |
| Almacenamiento de bloque distribuido | Seis clases de almacenamiento, con Distributed RAID 6.                                               |
| Configuración de red    | Modo simple (redundancia automática) o avanzado (cuatro tarjetas de red virtuales).               |
| Consola KVM             | Acceso directo a los servidores desde la Consola Cloud Temple.                                       |
| Multi-zonas             | Despliegue en diferentes zonas de disponibilidad.                                             |
| VLAN y agregación      | VLAN de nivel 2 y agregación de interfaces de red.                                           |

<a id="accès-console-bare-metal"></a>

### Acceso Consola Bare Metal

El acceso a los servidores Bare Metal se realiza directamente desde la **Consola Cloud Temple**. Esta funcionalidad ofrece un control total sobre el ciclo de vida de los servidores, incluyendo :

- **Acceso KVM** : una interfaz directa para gestionar los servidores, como si estuviera físicamente en el sitio.
- **Gestión de operaciones corrientes** : gestión de alimentaciones, reinicios o **mapeo de ISO** para la instalación de un sistema operativo.
- **Gestión de volúmenes** : mapeo y configuración de volúmenes de almacenamiento desde la interfaz.

El servicio también es gestionable mediante una API REST, compatible con OpenAPI.

## Arquitectura

### Componentes principales

- **Servidores Cisco UCS** : estas blades de cómputo constituyen la base de la oferta.
- **Almacenamiento IBM Spectrum Virtualize** : un almacenamiento de tipo bloque distribuido, que ofrece resiliencia y alto rendimiento.

### Arquitectura

El modelo de almacenamiento distribuido separa el cómputo (servidores Bare Metal) del almacenamiento (bloque distribuido), lo que permite :

- mapear los volúmenes de almacenamiento en varios servidores Bare Metal según las necesidades ;
- personalizar las configuraciones de cómputo y almacenamiento ;
- aumentar la resiliencia gracias al **Distributed RAID 6**.

## Regiones y zonas de disponibilidad

El producto Bare Metal está desplegado en la región FR1, en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_regional.md#zonas-de-disponibilidad) forma parte de una [región](../additional_content/concepts_regional.md).

Usted elige la localización de los servidores Bare Metal y puede distribuirlos en diferentes zonas de disponibilidad (AZ). Esto ofrece una mejor distribución de la carga, maximiza la redundancia y facilita la implementación de un plan de recuperación ante incidentes.

## Características técnicas

### Clases de blades de cómputo

Las blades de cómputo disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para responder a diversas necesidades :

| Referencia             | RAM  **(1)** | Frecuencia **(2)**                         | Número de núcleos / hilos | Conectividad **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Gold 5315Y o equivalente) | 16 / 32 hilos           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |
| **PERFORMANCE 5**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos           | 2 X 25 Gbit/s        | 2 x NVIDIA H100 80Go |

#### Notas

- **(1)** La cantidad de memoria es la físicamente disponible en las blades y no puede modificarse.
- **(2)** Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- **(3)** La conectividad física es mutualizada para el acceso de red y el acceso de almacenamiento de bloque, gracias a una arquitectura convergente Cisco UCS.
- **(4)** Los GPU disponibles evolucionan en función de las últimas tecnologías. El producto propone GPU NVIDIA L40S y NVIDIA H100.

### GPU

Dos clases de blades incorporan cada una dos tarjetas NVIDIA dedicadas a su uso : PERFORMANCE 4 (2 × NVIDIA L40S 48 Go) y PERFORMANCE 5 (2 × NVIDIA H100 80 Go). Sirven para el entrenamiento y la inferencia de modelos de IA, la visión por ordenador, la simulación y el cálculo científico. CUDA, cuDNN y los principales frameworks de IA (TensorFlow, PyTorch, etc.) se utilizan sin adaptación.

| Parámetro               | NVIDIA L40S  | NVIDIA H100  |
|-------------------------|--------------|--------------|
| Memoria GPU             | 48 Go        | 80 Go        |
| FP32                    | 91,6 TFlops  | 51 TFlops    |
| TF32 (Tensor Core) *    | 366 TFlops   | 756 TFlops   |
| FP16 (Tensor Core) *    | 733 TFlops   | 1 513 TFlops |
| FP8 (Tensor Core) *     | 1 466 TFlops | 3 026 TFlops |
| Consumo máximo   | 350 W        | 350 W        |

\* Valores del fabricante NVIDIA con parcimonía estructurada (sparsity). Sin parcimonía, estos valores se dividen por dos.

La tecnología Multi-Instance GPU (MIG) particiona una tarjeta H100 en 7 instancias como máximo. Cada instancia dispone de su propia memoria y de sus propias unidades de cálculo, aisladas de las demás instancias. Varias cargas de trabajo comparten así una misma tarjeta sin interferir entre sí. Las tarjetas L40S no admiten el Multi-Instance GPU.

- El número y el modelo de las tarjetas están fijados por la clase de blade : la configuración GPU de una blade no se modifica.
- Las blades Bare Metal equipadas con GPU pueden servir como nodos workers en Managed Kubernetes : ver [Utilizar un GPU en Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md).

### Clases de almacenamiento en modo bloque

<a id="caractéristiques"></a>

El almacenamiento de bloque distribuido propone cinco clases Flash, de 500 a 15 000 IOPS/To, y la clase Mass Storage para el archivado. Las clases, sus límites de rendimiento y sus características están descritas en la página [Almacenamiento de bloque](../storage/block/block_storage.md).

<a id="connectivité-réseau-des-serveurs-bare-metal"></a>

### Conectividad de red

Cada servidor Bare Metal dispone de **dos interfaces de red físicas**. Su número es fijo : no es posible añadir tarjetas de red físicas adicionales.

#### Modos de configuración

Usted elige el modo de configuración de red durante el pedido del recurso en la Consola Cloud Temple :

- **Configuración simple** : la redundancia y la alta disponibilidad se gestionan automáticamente por la infraestructura, sin configuración manual en su sistema operativo.
- **Configuración avanzada** : para necesidades como el despliegue de hipervisores, las dos interfaces físicas se declinan en **cuatro tarjetas de red virtuales**. La gestión del teaming y de la alta disponibilidad se delega entonces a su sistema operativo, en modo activo/pasivo.

El modo de configuración de red no puede modificarse en un servicio existente. Para utilizar otro modo, debe pedir un nuevo servidor con el modo deseado, y luego migrar sus cargas de trabajo. Esta migración se realiza por su cuenta ; un acompañamiento por los Professional Services puede estudiarse.

#### VLAN de nivel 2

Es posible configurar **VLAN de nivel 2** en las interfaces de red de los servidores Bare Metal. Puede :

- **activar el tagging VLAN** para asociar uno o varios VLAN a una misma interfaz ;
- **propagar los VLAN** directamente en las interfaces de red de los servidores.

#### Agregación de interfaces de red

Las interfaces de red pueden utilizarse de forma independiente o combinadas (bonding, teaming). Solo el modo **activo/pasivo** está soportado : asegura la redundancia sin aumentar el ancho de banda disponible. El **LACP (802.3ad) no está soportado**.

#### Rendimiento de red

El rendimiento de las interfaces de red depende de la clase de blade elegida :

- las blades **ECO** ofrecen una conectividad de 2 x 10 Gbit/s ;
- las blades **STANDARD** y superiores disponen de una conectividad de 2 x 25 Gbit/s.

Las blades GPU **PERFORMANCE 4 (L40S)** y **PERFORMANCE 5 (H100)** disponen así de dos interfaces físicas de 25 Gbit/s cada una. Esta conectividad física se comparte entre los accesos de red y el almacenamiento de bloque.

### Límites

- La cantidad de memoria de una blade no puede modificarse.
- Un volumen de almacenamiento está limitado a 30 000 IOPS y 1024 Mo/s (10 000 IOPS y 512 Mo/s en clase Essentiel), independientemente de su tamaño.

## Seguridad y conformidad

Bare Metal está certificado HDS e ISO 27001, etiquetado Gaia-X nivel 3, conforme CISPE y C5, y cualificado SecNumCloud.

### Seguridad y cifrado del almacenamiento de bloque

Para garantizar la confidencialidad de sus datos en reposo, toda la infraestructura de almacenamiento de bloque integra un cifrado por hardware.

- **Tipo de cifrado** : los datos se cifran directamente en los discos (`Data At Rest`) con el algoritmo **XTS-AES 256**.
- **Conformidad** : este método de cifrado es conforme a la norma **FIPS 140-2**.
- **Funcionamiento** : el cifrado se aplica en el momento de la escritura de los datos en el soporte de almacenamiento físico.

:::warning[Punto de atención sobre la replicación]
Este cifrado protege los datos almacenados en los discos. No está activo « on-the-fly » : los datos no se cifran durante las operaciones de replicación de almacenamiento entre las zonas de disponibilidad. La seguridad de las transferencias se asegura mediante canales de comunicación dedicados y seguros.
:::

## Disponibilidad del servicio

| Elemento         | Objetivo de disponibilidad, medido en un mes |
|-----------------|-----------------------------------------------|
| Infraestructura  | 99,9 %, franjas de mantenimiento incluidas        |
| Almacenamiento de bloque   | 99,99 %                                       |

Toda solicitud relacionada con la disponibilidad debe declararse mediante un ticket de incidente.

## Reversibilidad

| Operación                 | Entregable                     | Plazo       | Coste       |
|---------------------------|------------------------------|-------------|------------|
| Exportación de datos        | Datos, en formatos estándar | 30 días   | Sin cargo |
| Asistencia a la migración | Soporte técnico            | Bajo demanda | Bajo presupuesto  |
| Purga segura           | Certificado de destrucción    | 7 días     | Incluido     |

## Tarificación

El servicio se factura mensualmente, por servidor físico. El compromiso mínimo es de un mes para la mayoría de las configuraciones ; ciertas blades, según su configuración de hardware, requieren un compromiso más largo. Los precios y los plazos de compromiso están publicados en la página de producto del sitio Cloud Temple :
[Bare Metal — tarifas](https://www.cloud-temple.com/produits/bare-metal/).
