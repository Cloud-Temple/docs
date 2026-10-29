---
title: Conceptos
---

<a id="concepts-vpc"></a>
<a id="définition-et-positionnement"></a>

## Presentación

El **VPC (Virtual Private Cloud)** es un servicio de red gestionado que permite crear redes privadas aisladas, seguras y administrables desde la consola Cloud Temple. Ofrece una experiencia cloud-native: la configuración de la red y de la seguridad está automatizada, sin equipos de red que instalar ni gestionar.

Las redes privadas del VPC interconectan los servicios **IaaS OpenSource**, **IaaS VMware** y **VM Instances**.

### VPC vs Private Backbone

Se proponen dos modos de consumo de red:

* **Private Backbone (oferta histórica)**:
  * ideal para expertos que buscan la máxima autonomía y configuraciones de red específicas (L2 extendido);
  * requiere la instalación y la gestión manual de equipos de seguridad (cortafuegos, routers);
  * gestión manual del plan de direccionamiento.

* **VPC**:
  * diseñado para una experiencia cloud-native y automatizada;
  * seguridad integrada (pasarela, filtrado, NAT) sin gestión de equipos de terceros;
  * servicio gestionado, en alta disponibilidad;
  * ideal para proyectos modernos, DevOps y el alojamiento de aplicaciones web.

<a id="cas-dusage"></a>

### Destinatarios y casos de uso

* **Alojamiento de aplicaciones críticas** que requieren un aislamiento fuerte.
* **Segmentación multiproyecto** (producción, preproducción, desarrollo).
* **Entornos de prueba** efímeros y aislados.
* **Bases de red soberanas** para datos sensibles.

## Ventajas

| Ventaja                     | Descripción                                                                                 |
|-----------------------------|---------------------------------------------------------------------------------------------|
| Alta disponibilidad         | El plano de datos está diseñado para una disponibilidad del 99,99 %.                        |
| Multizona sin reconfiguración | Un mismo plan de direccionamiento se extiende sobre varias zonas de disponibilidad, sin reconfiguración IP. |
| Seguridad integrada         | Pasarela, filtrado y NAT incluidos, sin equipos de red que gestionar.                       |
| Gestión unificada           | Gestión desde la consola o mediante API.                                                    |
| Soberanía                   | Servicio cualificado SecNumCloud.                                                           |

<a id="fonctionnalités-principales"></a>

## Funcionalidades

| Funcionalidad                 | Descripción                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| **Redes privadas regionales** | Despliegue multi-AZ y propagación L2 transparente.                          |
| **Private Networks**          | Redes segmentadas, interconectables entre ofertas de Cloud Temple.          |
| **Enrutamiento nativo**       | Comunicación automática entre las redes privadas de un mismo VPC.           |
| **IPAM & DHCP**               | Reserva de direcciones IP, gestión de los pools y asignación dinámica.      |
| **Acceso a Internet**         | Configurable mediante la pasarela (NAT, DNAT, egress controlado).           |
| **IP flotantes**              | Exposición flexible de servicios en Internet.                               |
| **Políticas de flujos**       | Filtrado de seguridad integrado para los flujos norte-sur y este-oeste.     |
| **Observabilidad**            | Logs y métricas de rendimiento de la red.                                   |
| **Peering entre VPC**         | Interconexión de VPC (opción de pago).                                      |

### Modos de despliegue

* **VPC en modo dedicado**: requisito previo, una suscripción a la oferta IaaS OpenSource. Las instancias VPC (routers, pasarelas) se despliegan directamente en su infraestructura dedicada: los recursos de cómputo que soportan sus servicios de red están físicamente aislados.
* **VPC en modo compartido**: este modo se apoya en la oferta VM Instances. Aporta el VPC sin infraestructura dedicada previa, para necesidades puntuales o entornos cloud-native.

## Arquitectura

El VPC se basa en una arquitectura redundante y de alta disponibilidad, que se apoya en el backbone inter-AZ de baja latencia de Cloud Temple.

### Componentes clave

* **Router VPC**: en el núcleo de cada VPC, gestiona el enrutamiento dinámico entre los distintos Private Networks (tráfico este-oeste).
* **Private Networks (VLANs)**: segmentos de red de nivel 2 que conectan sus recursos (VM, servidores). Se extienden de forma nativa sobre varias zonas de disponibilidad sin reconfiguración IP.
* **Pasarela externa (External Gateway)**: punto de entrada y salida opcional para el tráfico de Internet (norte-sur). Integra funcionalidades de NAT y de gestión de flujos.

### Integraciones

* **Métricas**: las métricas de rendimiento y de consumo del VPC (tráfico, estado de las pasarelas, etc.) se pueden exportar en formato Prometheus mediante la API de la consola.

## Regiones y zonas de disponibilidad

El VPC está disponible en la región FR1. Sus redes privadas se extienden sobre varias zonas de disponibilidad, con un plan de direccionamiento único.

## Especificaciones técnicas

| Parámetro                 | Valor                           |
|---------------------------|---------------------------------|
| VPC por tenant            | 8                               |
| Redes privadas por VPC    | 16                              |
| Direccionamiento IP       | RFC 1918 / RFC 4193             |
| Peering entre VPC         | Soportado (opción de pago)      |
| Tráfico inter-AZ          | Incluido                        |
| Tráfico entrante          | Incluido                        |

### Límites

* 8 VPC por tenant y 16 redes privadas por VPC.

## Seguridad y cumplimiento

El VPC está certificado HDS e ISO 27001, y cualificado SecNumCloud.

<a id="isolation-et-sécurité"></a>

### Aislamiento y seguridad

El VPC garantiza un aislamiento estricto:

* cada VPC es una entidad de red independiente, aislada lógicamente de los demás tenants;
* en modo dedicado, el despliegue se realiza sobre recursos dedicados: ningún recurso de red se comparte entre clientes;
* todas las operaciones de configuración son trazables mediante la consola.

## Disponibilidad del servicio

| Elemento                                                     | Objetivo de disponibilidad, medido sobre un mes |
|--------------------------------------------------------------|-----------------------------------------------|
| Plano de datos (enrutamiento entre redes, NAT, DNAT)         | 99,99 %                                       |
| Plano de control (API, consola)                              | 99,9 %                                        |

## Responsabilidades

El reparto de responsabilidades entre el cliente y Cloud Temple se detalla en la [matriz de responsabilidades (RACI) VPC](../../contractual/network/raci_vpc.md).

## Reversibilidad

La configuración del VPC puede exportarse a un almacenamiento S3 durante 30 días tras la finalización del servicio.

## Precios

Los precios del VPC se publican en la página del producto en el sitio web de Cloud Temple:
[VPC — precios](https://www.cloud-temple.com/produits/virtual-private-cloud-souverain/).
