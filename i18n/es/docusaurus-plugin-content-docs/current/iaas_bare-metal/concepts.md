---
title: Conceptos
---

<a id="une-infrastructure-matérielle-et-flexible"></a>

## Presentación

La oferta **Bare Metal** proporciona servidores físicos dedicados, sin compartición de recursos, asociados a un almacenamiento de tipo bloque distribuido. Ofrece una personalización total a los clientes que desean gestionar su propio entorno de software, ya sea para instalar un sistema Linux, Windows o un hipervisor.

### Destinatarios y casos de uso

- **Sector público y administraciones**: aplicaciones sensibles conformes con la doctrina «cloud au centre».
- **Sectores de soberanía**: entornos que requieren un aislamiento físico.
- **Salud**: tratamiento de datos de salud en una infraestructura certificada HDS.
- **Inteligencia artificial**: GPU dedicadas para el entrenamiento y la inferencia de modelos.
- **Nube privada**: personalización completa de la pila de software, por ejemplo para una granja de hipervisores.
- **Licencias de software**: control preciso de los recursos para optimizar las licencias vinculadas al hardware.

## Ventajas

| Ventaja                      | Descripción                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| Control total                | Usted instala libremente el entorno de software (SO, hipervisor) y accede directamente a los servidores. |
| Aislamiento físico           | Cada servidor está dedicado a usted, sin compartición de recursos.                                  |
| Arquitectura flexible        | El cálculo y el almacenamiento están separados: cada uno se dimensiona de forma independiente.      |
| Despliegue multizona         | Los servidores pueden distribuirse en varias zonas de disponibilidad.                               |
| Hardware de alto rendimiento | Ocho clases de blades, dos de ellas equipadas con GPU NVIDIA.                                       |

## Funcionalidades

| Funcionalidad           | Descripción                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Servidores dedicados    | Ocho clases de blades, de ECO a PERFORMANCE 5, a partir de un servidor y sin límite.            |
| GPU NVIDIA              | NVIDIA L40S 48 GB (PERFORMANCE 4) y NVIDIA H100 80 GB (PERFORMANCE 5).                          |
| Almacenamiento en bloque distribuido | Seis clases de almacenamiento, con Distributed RAID 6.                             |
| Configuración de red    | Modo simple (redundancia automática) o avanzado (cuatro tarjetas de red virtuales).             |
| Consola KVM             | Acceso directo a los servidores desde la consola Cloud Temple.                                  |
| Multizona               | Despliegue en diferentes zonas de disponibilidad.                                               |
| VLAN y agregación       | VLAN de nivel 2 y agregación de las interfaces de red.                                          |

<a id="accès-console-bare-metal"></a>

### Acceso a la consola Bare Metal

El acceso a los servidores Bare Metal se realiza directamente desde la **consola Cloud Temple**. Esta funcionalidad ofrece un control total sobre el ciclo de vida de los servidores, incluyendo:

- **Acceso KVM**: una interfaz directa para gestionar los servidores, como si estuviera físicamente in situ.
- **Gestión de las operaciones habituales**: gestión de la alimentación, reinicios o **mapeo de ISO** para la instalación de un sistema operativo.
- **Gestión de los volúmenes**: mapeo y configuración de los volúmenes de almacenamiento desde la interfaz.

El servicio también puede gestionarse mediante una API REST, compatible con OpenAPI.

## Arquitectura

### Componentes principales

- **Servidores Cisco UCS**: estos blades de cálculo constituyen la base de la oferta.
- **Almacenamiento IBM Spectrum Virtualize**: un almacenamiento de tipo bloque distribuido, que ofrece resiliencia y un alto rendimiento.

### Arquitectura

El modelo de almacenamiento distribuido separa el cálculo (servidores Bare Metal) del almacenamiento (bloque distribuido), lo que permite:

- mapear los volúmenes de almacenamiento en varios servidores Bare Metal según las necesidades;
- personalizar las configuraciones de cálculo y de almacenamiento;
- aumentar la resiliencia gracias al **Distributed RAID 6**.

## Regiones y zonas de disponibilidad

El producto Bare Metal está desplegado en la región FR1, en una zona de disponibilidad.
Una [zona de disponibilidad](../additional_content/concepts_az.md) forma parte de una [región](../additional_content/concepts_regional.md).

Usted elige la ubicación de los servidores Bare Metal y puede distribuirlos en diferentes zonas de disponibilidad (AZ). Esto ofrece un mejor reparto de la carga, maximiza la redundancia y facilita la implantación de un plan de recuperación ante desastres en caso de incidente.

## Especificaciones técnicas

### Clases de blades de cálculo

Los blades de cálculo disponibles para la oferta Bare Metal ofrecen una gama de rendimientos para responder a diversas necesidades:

| Referencia            | RAM  **(1)** | Frecuencia **(2)**                        | Número de núcleos / hilos | Conectividad **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 o equivalente)  | 20 / 40 hilos             | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 o equivalente)    | 48 / 96 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Gold 5315Y o equivalente)   | 16 / 32 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 o equivalente)    | 36 / 72 hilos             | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 o equivalente)    | 56 / 112 hilos            | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |
| **PERFORMANCE 5**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y o equivalente)  | 32 / 64 hilos             | 2 X 25 Gbit/s        | 2 x NVIDIA H100 80GB |

#### Notas

- **(1)** La cantidad de memoria es la disponible físicamente en los blades y no puede modificarse.
- **(2)** Las frecuencias indicadas corresponden a la frecuencia base mínima y a la frecuencia turbo.
- **(3)** La conectividad física se comparte entre el acceso a la red y el acceso al almacenamiento en bloque, gracias a una arquitectura convergente Cisco UCS.
- **(4)** Las GPU disponibles evolucionan en función de las últimas tecnologías. El producto ofrece GPU NVIDIA L40S y NVIDIA H100.

### Clases de almacenamiento en modo bloque

El almacenamiento en bloque distribuido ofrece una gama de rendimientos adaptados a diversos casos de uso:

| Referencia                        | IOPS/TB        | Límite máximo de IOPS / Volumen | Ancho de banda máximo / Volumen | Uso principal                    |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essentiel**             | 500            | 10 000 IOPS               | 512 MB/s                    | Cargas de trabajo ligeras              |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 MB/s                   | Cargas de trabajo estándar             |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                   | Cargas intensivas                      |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                   | Cargas críticas                        |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                   | Cargas ultraintensivas                 |
| **MASS STORAGE - Archivage**      | No aplicable   | No garantizado            | No garantizado              | Almacenamiento económico para el archivado |

#### Características

- **Rendimiento**: el rendimiento efectivo crece de forma lineal en función de la capacidad asignada (según la relación IOPS/TB), **dentro del límite de hardware absoluto definido anteriormente**. Por ejemplo, un volumen de 10 TB en la clase Ultra está limitado físicamente a 30 000 IOPS y 1024 MB/s.
- **Tecnología**: Flash NVMe con **Distributed RAID 6** para una mayor resiliencia.
- **Restricciones**: sin limitación en las lecturas o escrituras. Sin compresión ni deduplicación automática, lo que garantiza la utilización íntegra de los volúmenes reservados.

<a id="connectivité-réseau-des-serveurs-bare-metal"></a>

### Conectividad de red

Los servidores Bare Metal disponen de funcionalidades de red avanzadas.

#### Modos de configuración

- **Configuración simple (por defecto)**: cada servidor está equipado con **dos interfaces de red físicas**. La redundancia y la alta disponibilidad son gestionadas automáticamente por la infraestructura, sin configuración manual.
- **Configuración avanzada**: para necesidades como el despliegue de hipervisores, las dos interfaces físicas pueden desdoblarse en **cuatro tarjetas de red virtuales**. La gestión del load balancing, del teaming y de la alta disponibilidad se delega entonces a su sistema operativo, por ejemplo para separar los tráficos de gestión, de datos, de almacenamiento y de replicación.

#### VLAN de nivel 2

Es posible configurar **VLAN de nivel 2** en las interfaces de red de los servidores Bare Metal. Usted puede:

- **activar el etiquetado VLAN** para asociar una o varias VLAN a una misma interfaz;
- **propagar las VLAN** directamente a las interfaces de red de los servidores.

#### Agregación de las interfaces de red

Las interfaces de red pueden utilizarse de forma independiente o combinadas (bonding, teaming) para obtener un mejor rendimiento y una mejor redundancia.

#### Rendimiento de red

El rendimiento de las interfaces de red depende de la clase de blade elegida:

- los blades **ECO** ofrecen una conectividad de 2 x 10 Gbit/s;
- los blades **STANDARD** y superiores disponen de una conectividad de 2 x 25 Gbit/s.

### Límites

- La cantidad de memoria de un blade no puede modificarse.
- Un volumen de almacenamiento está limitado a 30 000 IOPS y 1024 MB/s (10 000 IOPS y 512 MB/s en la clase Essentiel), sea cual sea su tamaño.

## Seguridad y cumplimiento

Bare Metal está certificado HDS e ISO 27001, cuenta con la etiqueta Gaia-X nivel 3, es conforme con CISPE y C5, y está cualificado SecNumCloud.

### Seguridad y cifrado del almacenamiento en bloque

Para garantizar la confidencialidad de sus datos en reposo, toda la infraestructura de almacenamiento en bloque integra un cifrado por hardware.

- **Tipo de cifrado**: los datos se cifran directamente en los discos (`Data At Rest`) con el algoritmo **XTS-AES 256**.
- **Conformidad**: este método de cifrado es conforme con la norma **FIPS 140-2**.
- **Funcionamiento**: el cifrado se aplica en el momento de la escritura de los datos en el soporte de almacenamiento físico.

:::warning[Punto de atención sobre la replicación]
Este cifrado protege los datos almacenados en los discos. No está activo «on-the-fly»: los datos no se cifran durante las operaciones de replicación de almacenamiento entre las zonas de disponibilidad. La seguridad de las transferencias está garantizada por canales de comunicación dedicados y seguros.
:::

## Disponibilidad del servicio

| Elemento        | Objetivo de disponibilidad, medido en un mes  |
|-----------------|-----------------------------------------------|
| Infraestructura | 99,9 %, ventanas de mantenimiento incluidas   |
| Almacenamiento en bloque | 99,99 %                              |

Cualquier solicitud relacionada con la disponibilidad debe declararse mediante un ticket de incidente.

## Reversibilidad

| Operación                 | Entregable                   | Plazo       | Coste      |
|---------------------------|------------------------------|-------------|------------|
| Exportación de los datos  | Datos, en formatos estándar  | 30 días     | Sin coste  |
| Asistencia a la migración | Soporte técnico              | Bajo petición | Según presupuesto |
| Purga segura              | Certificado de destrucción   | 7 días      | Incluido   |

## Precios

El servicio se factura mensualmente, por servidor físico. El compromiso mínimo es de un mes para la mayoría de las configuraciones; algunos blades, según su configuración de hardware, requieren un compromiso más largo. Los precios y las duraciones de compromiso se publican en la página del producto en el sitio web de Cloud Temple:
[Bare Metal — precios](https://www.cloud-temple.com/produits/bare-metal/).
