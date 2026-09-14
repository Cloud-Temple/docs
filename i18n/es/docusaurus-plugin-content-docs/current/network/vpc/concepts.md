---
title: Conceptos
---

# Conceptos VPC

## Definición y Posicionamiento

El **VPC (Virtual Private Cloud)** es un servicio de red gestionado que permite la creación de redes privadas aisladas, seguras y gestionables a través de la consola Cloud Temple. Está diseñado para ofrecer una experiencia cloud-native, automatizando la configuración de la red y la seguridad.

A la fecha (Janvier 2026), las redes privadas del VPC permiten interconectar los servicios **IaaS Open Source** y **IaaS VMware**. La interconexión con los servidores **Bare Metal** estará disponible en una próxima actualización.

### VPC vs Backbone Privado

Cloud Temple ofrece dos modos de consumo de red:

* **Backbone Privado (Oferta histórica)** :
  * Ideal para expertos que buscan una autonomía máxima y configuraciones de red específicas (L2 extendido).
  * Requiere la instalación y gestión manual de equipos de seguridad (firewalls, routers).
  * Gestión manual del plan de direccionamiento.

* **VPC (Nuevo producto)** :
  * Diseñado para una experiencia cloud-native y automatizada.
  * Seguridad integrada (Gateway, Firewalling, NAT) sin gestión de equipos de terceros.
  * Servicio gestionado con alta disponibilidad garantizada por Cloud Temple.
  * Ideal para proyectos modernos, DevOps y alojamiento de aplicaciones web.

## Architecture

El VPC se basa en una arquitectura redundante y de alta disponibilidad, aprovechando el backbone inter-AZ de baja latencia de Cloud Temple.

### Componentes Clave

* **Enrutador VPC** : En el centro de cada VPC, gestiona el enrutamiento dinámico entre las diferentes Private Networks (tráfico este-oeste).
* **Private Networks (VLANs)** : Segmentos de red de nivel 2 que conectan sus recursos (VMs, servidores). Se extienden de forma nativa a varias zonas de disponibilidad (AZ) sin necesidad de reconfiguración IP.
* **Pasarela Externa (External Gateway)** : Punto de entrada y salida opcional para el tráfico de Internet (norte-sur). Integra funcionalidades de NAT y gestión de flujos.

### Aislamiento y Seguridad

El VPC garantiza un aislamiento estricto:

* Cada VPC es una entidad de red independiente.
* El despliegue se realiza en recursos dedicados (para clientes IaaS Open Source), garantizando que ningún recurso de red se comparta.
* El servicio está certificado **SecNumCloud**.

## Funcionalidades Principales

| Funcionalidad | Descripción | Disponibilidad |
|----------------|-------------|---------------|
| **Redes privadas regionales** | Despliegue multi-AZ y propagación L2 transparente. | Disponible |
| **Enrutamiento nativo** | Comunicación automática entre las redes privadas de un mismo VPC. | Disponible |
| **IPAM y DHCP** | Gestión automática de los pools de direcciones y asignación dinámica. | Disponible |
| **Acceso a Internet** | Configurable a través de la Gateway (NAT, DNAT, Egress controlado). | Disponible |
| **IP Flotantes** | Exposición flexible de servicios en Internet. | Disponible |
| **Microsegmentación** | Grupos de políticas de red para una seguridad avanzada. | S1 2026 |
| **Observabilidad** | Registros y métricas de rendimiento de la red. | S1 2026 |
| **Servicio DNS** | Resolución de nombres interna y externa. | S2 2026 |
| **VPN y Cloud Connect** | Conectividad segura hacia on-premise y clouds públicos. | S2 2026 |

## Casos de Uso

* **Alojamiento de aplicaciones críticas** que requiere un aislamiento estricto.
* **Segmentación multi-proyectos** (Prod, Pre-prod, Dev).
* **Entornos de prueba** efímeros y aislados.
* **Infraestructuras de red soberanas** para datos sensibles.