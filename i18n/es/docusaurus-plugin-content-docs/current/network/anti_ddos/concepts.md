---
title: Conceptos
---

## Presentación

El Anti-DDoS protege las aplicaciones y servicios publicados en Internet contra los ataques volumétricos de denegación de servicio distribuida (DDoS), que buscan saturar los enlaces de red. El tráfico entrante se supervisa de forma permanente: en caso de ataque, el tráfico ilegítimo se filtra aguas arriba y solo las solicitudes legítimas llegan a sus servicios.

La protección está incluida en el [acceso a Internet](../internet/concepts.md) del Private Backbone. Está activa por defecto y no requiere ninguna configuración por su parte.

### Destinatarios y casos de uso

- **Sitios web con mucho tráfico**: mantenimiento de la disponibilidad del sitio durante un ataque.
- **Aplicaciones críticas**: continuidad de las aplicaciones web expuestas en Internet.
- **Editores de soluciones SaaS**: protección de las plataformas a las que acceden sus clientes.

## Ventajas

| Ventaja                    | Descripción                                                                                          |
|----------------------------|------------------------------------------------------------------------------------------------------|
| Continuidad del servicio   | Sus servicios siguen accesibles durante un ataque volumétrico.                                       |
| Filtrado aguas arriba      | El tráfico ilegítimo se filtra antes de que alcance la red de Cloud Temple y sus infraestructuras.   |
| Supervisión permanente     | El tráfico entrante se analiza de forma continua, para una reacción inmediata.                       |
| Sin configuración          | La protección se aplica automáticamente a las direcciones IP públicas, sin ajustes ni intervención.  |

## Funcionalidades

| Funcionalidad           | Descripción                                                                                       |
|-------------------------|---------------------------------------------------------------------------------------------------|
| Protección volumétrica  | Limpieza del tráfico aguas arriba para bloquear los ataques volumétricos antes de que alcancen sus servicios. |
| Análisis de tráfico     | Detección y análisis de los patrones de tráfico malicioso.                                        |
| Supervisión continua    | Supervisión permanente del tráfico entrante.                                                      |
| Informes de ataque      | En caso de ataque significativo, se puede proporcionar un informe de incidente previa solicitud al soporte. |

## Arquitectura

### Funcionamiento de la protección

Los ataques volumétricos se detectan y mitigan en el borde de la red, aguas arriba de la red de Cloud Temple. Cuando se detecta un ataque, el tráfico ilegítimo se desvía y filtra automáticamente («se limpia»), sin perturbar el tráfico legítimo, que sigue encaminándose hacia sus servicios.

La protección opera a nivel de red (capas 3 y 4): no descifra los flujos ni inspecciona su contenido.

### Integración con los demás productos

El Anti-DDoS es un componente del acceso a Internet. Cubre todos los servicios expuestos en una dirección IP pública proporcionada por Cloud Temple, en particular:

- **Housing**: alojamiento compartido o dedicado;
- **Compute**: Bare Metal, IaaS VMware, IaaS OpenSource;
- **Containers**: PaaS OpenShift, Managed Kubernetes.

Los prefijos IP que migre a la infraestructura de Cloud Temple también se benefician de la protección, sin configuración adicional (consulte los [conceptos del acceso a Internet](../internet/concepts.md)).

## Regiones y zonas de disponibilidad

La protección está disponible en la región FR1.

## Especificaciones técnicas

| Parámetro               | Valor                                                         |
|-------------------------|---------------------------------------------------------------|
| Tipo de ataques tratados | Ataques volumétricos                                         |
| Nivel de protección     | Red (capas 3 y 4)                                             |
| Capacidad de mitigación | 1 Tb/s                                                        |
| Detección               | Permanente                                                    |
| Perímetro               | Direcciones IP públicas proporcionadas por Cloud Temple y prefijos migrados |
| Configuración           | Ninguna, protección activa por defecto                        |

### Límites

- La protección se dirige a los ataques volumétricos a nivel de red: no inspecciona el contenido aplicativo de los flujos.
- No se proporciona ninguna consola ni API: la protección está totalmente gestionada por los equipos de Cloud Temple y no se puede configurar.
- Los informes de ataque se proporcionan previa solicitud, a través del soporte.

## Seguridad y cumplimiento

El Anti-DDoS está certificado HDS e ISO 27001.

- **Cifrado**: la protección no realiza ningún descifrado de los flujos.
- **Inspección**: el contenido de los flujos no se inspecciona.

## Disponibilidad del servicio

El objetivo de disponibilidad del servicio Anti-DDoS es del 99,99 %, medido mensualmente.

## Reversibilidad

Al estar el Anti-DDoS incluido en el acceso a Internet, su reversibilidad sigue la de la oferta de red: la protección se retira con la rescisión del servicio de Internet. Puede recuperar los siguientes elementos, sin coste:

| Elemento exportado   | Entregable                            | Plazo de puesta a disposición |
|----------------------|---------------------------------------|-----------------------------|
| Informes de incidentes | Informes de ataque, previa solicitud | 30 días                     |

## Precios

El Anti-DDoS está incluido en la oferta de acceso a Internet, sin coste adicional. Los precios se publican en la página del producto en el sitio web de Cloud Temple:
[Anti-DDoS — precios](https://www.cloud-temple.com/produits/anti-ddos/).
