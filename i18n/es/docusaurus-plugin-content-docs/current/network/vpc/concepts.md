---
title: Conceptos
---

# Conceptos de VPC

## Definición y posicionamiento

El **VPC (Virtual Private Cloud)** es un servicio de red gestionado que permite crear redes privadas aisladas, seguras y gestionables a través de la consola Cloud Temple. Está diseñado para ofrecer una experiencia nativa en la nube, automatizando la configuración de la red y la seguridad.

Hasta la fecha (enero de 2026), las redes privadas del VPC permiten interconectar servicios **IaaS de código abierto** y **IaaS VMware**. La interconexión con servidores **Bare Metal** estará disponible en una actualización futura.

### VPC vs Private Backbone

Cloud Temple offers two network consumption modes:

*   **Private Backbone (Legacy offering)**:
    *   Ideal for experts seeking maximum autonomy and specific network configurations (extended L2).
    *   Requires manual installation and management of security equipment (firewalls, routers).
    *   Manual management of IP addressing.

*   **VPC (New offering)**:
    *   Designed for a cloud-native and automated experience.
    *   Built-in security (Gateway, Firewalling, NAT) without the need to manage third-party equipment.
    *   Fully managed service with high availability guaranteed by Cloud Temple.
    *   Ideal for modern projects, DevOps, and hosting web applications.

## Arquitectura

El VPC se basa en una arquitectura redundante y altamente disponible, aprovechando el backbone inter-AZ de baja latencia de Cloud Temple.

### Componentes Clave

*   **Router de VPC**: En el centro de cada VPC, gestiona el enrutamiento dinámico entre los diferentes Private Networks (tráfico este-oeste).
*   **Private Networks (VLANs)**: Segmentos de red de nivel 2 que conectan sus recursos (VMs, servidores). Se extienden nativamente a través de múltiples zonas de disponibilidad (AZ) sin necesidad de reconfiguración IP.
*   **Pasarela Externa (External Gateway)**: Punto de entrada y salida opcional para el tráfico de Internet (norte-sur). Incorpora funciones de NAT y gestión de flujos.

### Aislamiento y Seguridad

El VPC garantiza un aislamiento estricto:
*   Cada VPC es una entidad de red independiente.
*   El despliegue se realiza sobre recursos dedicados (para clientes IaaS de código abierto), asegurando que ninguna recurso de red se comparta.
*   El servicio se encuentra en proceso de acreditación **SecNumCloud**.

## Funcionalidades Principales

| Funcionalidad | Descripción | Disponibilidad |
|----------------|-------------|----------------|
| **Redes privadas regionales** | Despliegue multi-AZ y propagación L2 transparente. | Disponible |
| **Enrutamiento nativo** | Comunicación automática entre redes privadas de la misma VPC. | Disponible |
| **IPAM & DHCP** | Gestión automática de pools de direcciones y asignación dinámica. | Disponible |
| **Acceso a Internet** | Configurable mediante Gateway (NAT, DNAT, egress controlado). | Disponible |
| **IP flotantes** | Exposición flexible de servicios en Internet. | Disponible |
| **Microsegmentación** | Grupos de políticas de red para una seguridad avanzada. | 1T 2026 |
| **Observabilidad** | Registros y métricas de rendimiento de red. | 1T 2026 |
| **Servicio DNS** | Resolución de nombres internos y externos. | 2T 2026 |
| **VPN & Cloud Connect** | Conectividad segura hacia entornos locales y nubes públicas. | 2T 2026 |

## Cas de Uso

*   **Hosting de aplicaciones críticas** que requieren una aislamiento fuerte.
*   **Segmentación multi-proyectos** (Prod, Pre-prod, Dev).
*   **Entornos de prueba** efímeros e aislados.
*   **Infraestructuras de red soberanas** para datos sensibles.