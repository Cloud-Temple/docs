---
title: Conceptos
---

## Infraestructura de Internet CloudTemple

CloudTemple opera como un **Proveedor de Servicios en la Nube (CSP)** con una infraestructura de Internet autónoma, altamente resiliente y segura. Nuestra conectividad de grado operador se basa en nuestro propio AS (Número de Sistema Autónomo) que nos otorga control completo sobre el enrutamiento y garantiza alta disponibilidad para todos nuestros servicios.

Esta infraestructura autónoma nos permite ofrecer conectividad a Internet con características avanzadas, adaptadas a todos los tipos de ofertas CloudTemple, desde hosting dedicado hasta soluciones IaaS y servicios PaaS.

## Arquitectura de red y redundancia

Nuestra red se beneficia de una arquitectura redundante diseñada para optimizar el rendimiento y garantizar la continuidad del servicio. CloudTemple dispone de un sistema autónomo independiente con un conjunto de prefijos IP públicos asignados, asegurando conectividad global directa.

Esta conectividad se basa en **dos rutas distintas** para maximizar la resistencia:

**Conectividad de tránsito:** Dos operadores de tránsito principales aseguran redundancia a nivel global, permitiendo un enrutamiento óptimo del tráfico de Internet hacia nuestras infraestructuras.

**Puntos de intercambio:** Nuestra presencia en dos puntos de intercambio (IXP) en París nos permite reducir significativamente la latencia para los usuarios europeos mientras mejoramos el rendimiento de los servicios regionales. Este enfoque también garantiza redundancia natural contra fallos de proveedores.

El uso del protocolo BGP4 garantiza un enrutamiento eficiente de sus flujos de Internet hacia la puerta de enlace activa de su arquitectura, particularmente en escenarios de despliegue multi-zona de disponibilidad, como es el caso de clusters de firewalls distribuidos entre dos zonas de disponibilidad.

## Protección anti-DDoS integrada

Todo el tráfico entrante a la infraestructura CloudTemple se beneficia de protección anti-DDoS avanzada, proporcionada por **F5**, un líder mundial en seguridad de red. Esta protección funciona de manera transparente y automática.

Los ataques volumétricos son detectados y mitigados directamente en el borde de la red F5, antes incluso de alcanzar la red CloudTemple. Este filtrado upstream garantiza que ninguna saturación pueda afectar nuestras conexiones de Internet, y solo las solicitudes legítimas llegan a nuestras infraestructuras.

**Todos los servicios CloudTemple** se benefician de esta protección sin costo adicional, incluyendo los prefijos de clientes que pueden ser migrados a nuestra infraestructura. Este enfoque integrado transforma una restricción de seguridad en una ventaja operacional para nuestros clientes.

## Asignación de direcciones IP públicas

CloudTemple ofrece un sistema flexible de asignación de direcciones IP públicas Provider Aggregated (PA), permitiendo a los clientes reservar direcciones IP públicas **individualmente** según sus necesidades específicas.

### Proceso de reserva

La reserva de direcciones IP públicas se realiza directamente a través de la consola CloudTemple, ofreciendo gestión autónoma e inmediata:

**A través de la API de la consola:** Posible integración en sus flujos de trabajo de automatización y aprovisionamiento.

**A través de la consola web:** Interfaz intuitiva accesible desde la sección *Internet* de su área de cliente.

El proceso de reserva sigue estos pasos simples: conexión a la consola, navegación a *Internet* > *Gestionar direcciones IP*, selección de *Reservar una nueva dirección*, elección entre IPv4 o IPv6, luego validación del pedido.

### Facturación

La facturación de direcciones IP públicas se realiza por unidad de obra (UO) y comienza tan pronto como se reserva la dirección, garantizando transparencia total de costos.

| Referencia | Unidad | SKU |
|------------|--------|-----|
| Red - IPv4 Pública Dedicada | 1 IPv4 | RSIP-IP4-UNIT |
| Red - IPv6 Pública Dedicada | 1 IPv6 | RSIP-IP6-UNIT |

## Bloques IPv4

La entrega de IPv4 está sujeta a __límites de stock disponible__ para nuestros clientes, por dirección IP.

El pedido de direcciones IPv4 se realiza desde el menú __*'IPs públicas'*__ del menú Redes en el banner verde de la izquierda, a través del botón __*"Pedir direcciones IPv4 o prefijos IPv6"*__.

Puede visualizar los bloques de direcciones que le han sido asignados en este mismo menú.

| Referencia                        | Unidad | SKU                          |
| --------------------------------- | ------ | ---------------------------- |
| Red - IPv4 Pública Dedicada      | 1 IPv4 | csp:(region):network:ipv4:v2 |

## Bloques IPv6

El pedido de prefijos IPv6 se realiza desde el menú __*'IPs públicas'*__ del menú Redes en el banner verde de la izquierda, a través del botón __*"Pedir direcciones IPv4 o prefijos IPv6"*__.

Puede visualizar los prefijos que le han sido asignados en este mismo menú.

| Referencia                              | Unidad  | SKU                          |
| --------------------------------------- | ------- | ---------------------------- |
| Red - Rangos IPv6 Públicos Dedicados   | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Migración de prefijos IP de clientes

CloudTemple apoya a los clientes que desean migrar sus propios prefijos IP a nuestra infraestructura, facilitando así los proyectos de migración mientras mantienen la identidad de red existente.

### Ventajas de la migración

Este enfoque le permite mantener su identidad IP al migrar a CloudTemple, asegurando continuidad perfecta para sus aplicaciones y clientes. Conserva el control completo sobre el uso de sus direcciones IP mientras se beneficia de la infraestructura CloudTemple.

### Proceso de integración

Su prefijo IP (por ejemplo `203.0.113.0/24`) se integra en la red backbone CloudTemple y se anuncia desde nuestro AS. Una vez integrado, el prefijo puede asociarse libremente con sus máquinas virtuales, balanceadores de carga u otros servicios.

**Todas las direcciones del prefijo migrado se benefician automáticamente de la protección anti-DDoS F5**, sin configuración adicional ni costo extra.

### Condiciones requeridas

La migración de prefijos IP requiere que el prefijo esté registrado en un registro de Internet reconocido (ARIN, RIPE, APNIC, etc.) y que usted sea el propietario legítimo. La gestión BGP puede ser manejada por sus equipos o beneficiarse del soporte técnico CloudTemple según sus preferencias.

## Reserva de ancho de banda de Internet

El ancho de banda de Internet puede reservarse en incrementos de 100 Mbps. La capacidad máxima disponible para una puerta de enlace es de 10 Gbps, potencialmente limitada por las características técnicas de su puerta de enlace.

La facturación se realiza en el percentil 95 durante el período de facturación, generalmente un mes. Por lo tanto, puede beneficiarse ocasionalmente de un burst más allá de su capacidad reservada.

| Referencia                                  | Unidad   | SKU                                     |
| ------------------------------------------- | -------- | --------------------------------------- |
| Red - Ancho de banda de Internet reservado | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Nota:*__
*No hay __facturación volumétrica__ del tipo __'egress fees'. Solo paga por la reserva de ancho de banda.__*

## Disponibilidad por oferta

Todas estas características de conectividad a Internet están disponibles en todas las ofertas CloudTemple, garantizando una experiencia consistente independientemente del tipo de servicio utilizado.

| Oferta | Conectividad Internet | Protección DDoS | Gestión RSIP | Migración de Prefijos |
|--------|----------------------|------------------|--------------|----------------------|
| Hosting Dedicado | ✓ | ✓ | ✓ | ✓ |
| Hosting Compartido | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Este enfoque unificado garantiza que todos nuestros clientes se beneficien de acceso a Internet de grado operador, con seguridad integrada y características avanzadas, independientemente de su elección tecnológica.
