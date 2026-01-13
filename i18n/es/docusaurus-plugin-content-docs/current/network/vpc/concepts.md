---
title: Conceptos
---

# Conceptos VPC

## Definición y Posicionamiento

El **VPC (Virtual Private Cloud)** es un servicio de red gestionado que permite la creación de redes privadas aisladas, seguras y controlables a través de la consola de Cloud Temple. Está diseñado para ofrecer una experiencia nativa de la nube, automatizando la configuración de la red y la seguridad.

A fecha de enero de 2026, las redes privadas del VPC permiten interconectar los servicios **IaaS Open Source** e **IaaS VMware**. La interconexión con servidores **Bare Metal** estará disponible próximamente.

### VPC vs Backbone Privado

Cloud Temple ofrece dos modos de consumo de red:

*   **Backbone Privado (Oferta histórica)**:
    *   Ideal para expertos que buscan la máxima autonomía y configuraciones de red específicas (L2 extendido).
    *   Requiere instalación y gestión manual de equipos de seguridad (firewalls, routers).
    *   Gestión manual del plan de direccionamiento.

*   **VPC (Nueva oferta)**:
    *   Diseñado para una experiencia nativa de la nube y automatizada.
    *   Seguridad integrada (Gateway, Firewalling, NAT) sin gestión de equipos de terceros.
    *   Servicio gestionado con alta disponibilidad garantizada por Cloud Temple.
    *   Ideal para proyectos modernos, DevOps y alojamiento de aplicaciones web.

## Arquitectura

El VPC se basa en una arquitectura redundante y de alta disponibilidad, aprovechando el backbone inter-AZ de baja latencia de Cloud Temple.

### Componentes Clave

*   **Router VPC**: En el corazón de cada VPC, gestiona el enrutamiento dinámico entre las diferentes Redes Privadas (tráfico este-oeste).
*   **Redes Privadas (VLANs)**: Segmentos de red de capa 2 que conectan sus recursos (VMs, servidores). Se extienden de forma nativa a través de múltiples Zonas de Disponibilidad (AZ) sin reconfiguración de IP.
*   **Gateway Externo**: Punto de entrada y salida opcional para el tráfico de Internet (norte-sur). Integra funcionalidades de NAT y gestión de flujos.

### Aislamiento y Seguridad

El VPC garantiza un aislamiento estricto:
*   Cada VPC es una entidad de red independiente.
*   El despliegue se realiza en recursos dedicados (para clientes IaaS Open Source), asegurando que no se compartan recursos de red.
*   El servicio está actualmente en proceso de cualificación **SecNumCloud**.

## Funcionalidades Principales

| Funcionalidad | Descripción | Disponibilidad |
|---------------|-------------|----------------|
| **Redes privadas regionales** | Despliegue multi-AZ y propagación L2 transparente. | Disponible |
| **Enrutamiento nativo** | Comunicación automática entre las redes privadas de un mismo VPC. | Disponible |
| **IPAM & DHCP** | Gestión automática de pools de direcciones y asignación dinámica. | Disponible |
| **Acceso a Internet** | Configurable a través del Gateway (NAT, DNAT, Egress controlado). | Disponible |
| **IP Flotantes** | Exposición flexible de servicios en Internet. | Disponible |
| **Micro-segmentación** | Grupos de políticas de red para una seguridad avanzada. | S1 2026 |
| **Observabilidad** | Logs y métricas de rendimiento de la red. | S1 2026 |
| **Servicio DNS** | Resolución de nombres interna y externa. | S2 2026 |
| **VPN & Cloud Connect** | Conectividad segura hacia on-premise y nubes públicas. | S2 2026 |

## Casos de Uso

*   **Alojamiento de aplicaciones críticas** que requieren un fuerte aislamiento.
*   **Segmentación multi-proyecto** (Prod, Pre-prod, Dev).
*   **Entornos de prueba** efímeros y aislados.
*   **Bases de red soberanas** para datos sensibles.
