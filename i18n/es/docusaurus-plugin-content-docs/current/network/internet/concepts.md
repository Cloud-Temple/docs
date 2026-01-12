---
title: Conceptos
---

## Internet Infrastructure CloudTemple

CloudTemple operates as a **Cloud Service Provider (CSP)** with an independent, highly resilient, and secure Internet infrastructure. Our operator-grade connectivity is based on our own Autonomous System Number (ASN), giving us full control over routing and ensuring high availability for all our services.

This autonomous infrastructure enables us to offer advanced Internet connectivity, tailored to all CloudTemple service offerings—from dedicated hosting to IaaS solutions and PaaS services.

## Arquitectura de red y redundancia

Nuestra red cuenta con una arquitectura redundante diseñada para optimizar el rendimiento y garantizar la continuidad del servicio. CloudTemple dispone de un sistema autónomo independiente con un conjunto de prefijos IP públicos asignados, asegurando una conectividad directa mundial.

Esta conectividad se basa en **dos vías distintas** para maximizar la resiliencia:

**Conectividad de tránsito:** Dos operadores principales de tránsito garantizan la redundancia a nivel mundial, permitiendo un enrutamiento óptimo del tráfico de Internet hacia nuestras infraestructuras.

**Puntos de intercambio:** Nuestra presencia en dos puntos de intercambio (IXP) en París nos permite reducir significativamente la latencia para los usuarios europeos, al tiempo que mejora el rendimiento de los servicios regionales. Este enfoque también garantiza una redundancia natural frente a fallos del proveedor.

El uso del protocolo BGP4 asegura un enrutamiento eficiente de sus flujos de Internet hacia la pasarela activa de su arquitectura, especialmente en escenarios de despliegue multi-zonas de disponibilidad, como ocurre con clusters de firewalls distribuidos entre dos zonas de disponibilidad.

## Protección anti-DDoS integrada

Todo el tráfico entrante hacia la infraestructura de CloudTemple cuenta con una protección anti-DDoS avanzada proporcionada por **F5**, un líder mundial en seguridad de redes. Esta protección funciona de forma transparente y automática.

Las amenazas de volumen se detectan y mitigan directamente en el borde de la red F5, antes incluso de alcanzar la red de CloudTemple. Este filtrado en la etapa inicial garantiza que ninguna saturación pueda afectar nuestras conexiones a Internet, y únicamente las solicitudes legítimas llegan hasta nuestras infraestructuras.

**Todos los servicios de CloudTemple** disfrutan de esta protección sin coste adicional, incluidos los prefijos de clientes que pueden migrarse hacia nuestra infraestructura. Este enfoque integrado transforma una exigencia de seguridad en una ventaja operativa para nuestros clientes.

## Assignment of Public IP Addresses

CloudTemple offers a flexible system for assigning Provider Aggregated (PA) public IP addresses, allowing clients to reserve public IP addresses **individually** according to their specific needs.

### Proceso de reserva

La reserva de direcciones IP públicas se realiza directamente a través de la consola CloudTemple, ofreciendo una gestión autónoma e inmediata:

**A través de la API de la consola:** Integración posible en sus flujos de automatización y aprovisionamiento.

**A través de la consola web:** Interfaz intuitiva accesible desde la sección *Internet* de su espacio cliente.

El proceso de reserva sigue estos sencillos pasos: conexión a la consola, navegación hasta *Internet* > *Gestionar direcciones IP*, selección de *Reservar una nueva dirección*, elección entre IPv4 o IPv6, y finalmente validación del pedido.

### Facturación

La facturación de las direcciones IP públicas se realiza por unidad de obra (UO) y comienza desde la reserva de la dirección, garantizando una transparencia total de los costos.

| Referencia | Unidad | SKU |
|------------|--------|-----|
| Red - IPv4 pública dedicada | 1 IPv4 | RSIP-IP4-UNIT |
| Red - IPv6 pública dedicada | 1 IPv6 | RSIP-IP6-UNIT |

## IPv4 Blocks

The delivery of IPv4 addresses is subject to __available stock__ for our customers, per IP address.

To order IPv4 addresses, go to the __*'Public IPs'*__ menu under Networks in the green bar on the left, and click the __*"Order IPv4 addresses or IPv6 prefixes"*__ button.

You can also view the address blocks assigned to you within the same menu.

| Reference                     | Unit   | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Public IPv4 Dedicated Network | IPv4/32 | csp:(region):network:ipv4:v2 |

## Bloques IPv6

La ordenación de prefijos IPv6 se realiza desde el menú __*'IPs públicas'*__ del menú Redes en la barra verde de la izquierda, mediante el botón __*"Solicitar direcciones IPv4 o prefijos IPv6"*__.

Es posible visualizar los prefijos asignados a su cuenta en el mismo menú.

| Referencia                             | Unidad   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Red - Rango de direcciones IPv6 públicas dedicadas | IPv6/48 | csp:(region):network:ipv6:v1 |

## IP prefix migration

CloudTemple supports clients wishing to migrate their own IP prefixes to our infrastructure, facilitating migration projects while preserving their existing network identity.

### Benefits of the migration

This approach allows you to retain your IP identity when migrating to CloudTemple, ensuring seamless continuity for your applications and clients. You maintain full control over the use of your IP addresses while benefiting from CloudTemple's infrastructure.

### Integration Process

Your IP prefix (for example, `203.0.113.0/24`) is integrated into the CloudTemple backbone network and advertised from our AS. Once integrated, the prefix can be freely assigned to your virtual machines, load balancers, or other services.

**All addresses within the migrated prefix automatically benefit from F5 anti-DDoS protection**, with no additional configuration or extra cost.

### Requis

La migración de prefijos IP requiere que el prefijo esté registrado en un registro de Internet reconocido (ARIN, RIPE, APNIC, etc.) y que usted sea su propietario legítimo. La gestión BGP puede ser gestionada por su equipo o contar con el soporte técnico de CloudTemple según sus preferencias.

## Reserved Internet Bandwidth

Internet bandwidth is reservable in increments of 100 Mbps. The maximum available capacity for a gateway is 10 Gbps, potentially limited by the technical specifications of your gateway.

Billing is based on the 95th percentile over the billing period, typically one month. You may therefore occasionally benefit from bursts exceeding your reserved capacity.

| Reference                                 | Unit     | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Network - Reserved Internet Bandwidth     | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Note:*__
*There is no __volume-based billing__ of the type __'egress fees'__. You only pay for the reserved bandwidth.*

## Disponibilidad por oferta

Todo este conjunto de funcionalidades de conectividad a Internet está disponible en todas las ofertas de CloudTemple, garantizando una experiencia homogénea independientemente del tipo de servicio utilizado.

| Oferta | Conectividad a Internet | Protección DDoS | Gestión RSIP | Migración de prefijos |
|--------|-------------------------|------------------|---------------|------------------------|
| Alojamiento dedicado | ✓ | ✓ | ✓ | ✓ |
| Alojamiento compartido | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Este enfoque unificado garantiza que todos nuestros clientes disfruten de un acceso a Internet de calidad operador, con seguridad integrada y funcionalidades avanzadas, independientemente de su elección tecnológica.