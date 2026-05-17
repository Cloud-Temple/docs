---
title: Conceptos
---

## Infraestructura Internet CloudTemple

CloudTemple opera como **Proveedor de Servicios de Nube (CSP)** con una infraestructura de Internet autónoma, altamente resiliente y segura. Nuestra conectividad de tipo operador se basa en un número de AS (Autonomous System Number) propio que nos otorga un control total del enrutamiento y garantiza una alta disponibilidad para todos nuestros servicios.

Esta infraestructura autónoma nos permite ofrecer conectividad de Internet con funcionalidades avanzadas, adaptadas a todos los tipos de ofertas de CloudTemple, desde el alojamiento dedicado hasta las soluciones IaaS, pasando por los servicios PaaS.

## Arquitectura de red y redundancia

Nuestra red cuenta con una arquitectura redundante diseñada para optimizar el rendimiento y garantizar la continuidad del servicio. CloudTemple dispone de un sistema autónomo independiente con un conjunto de prefijos IP públicos asignados, lo que garantiza una conectividad mundial directa.

Esta conectividad se basa en **dos rutas distintas** para maximizar la resiliencia:

**Conectividad de tránsito:** Dos operadores de tránsito principales garantizan la redundancia a nivel mundial, permitiendo un enrutamiento óptimo del tráfico de Internet hacia nuestras infraestructuras.

**Puntos de intercambio:** Nuestra presencia en dos puntos de intercambio (IXP) en París nos permite reducir significativamente la latencia para los usuarios europeos, al tiempo que mejora el rendimiento de los servicios regionales. Este enfoque también garantiza una redundancia natural frente a fallos del proveedor.

El uso del protocolo BGP4 garantiza un enrutamiento eficiente del tráfico de Internet hacia la puerta de enlace activa de su arquitectura, especialmente en escenarios de despliegue multi-zona de disponibilidad, como ocurre con los clústeres de firewalls distribuidos entre dos zonas de disponibilidad.

## Protección anti-DDoS integrada

Todo el tráfico entrante hacia la infraestructura CloudTemple cuenta con una protección anti-DDoS avanzada, garantizada por **F5**, un líder mundial en seguridad de redes. Esta protección funciona de manera transparente y automática.

Los ataques volumétricos se detectan y mitigan directamente en el borde de la red F5, incluso antes de llegar a la red CloudTemple. Este filtrado en origen garantiza que ninguna saturación pueda afectar nuestras conexiones a Internet, y solo las solicitudes legítimas llegan a nuestras infraestructuras.

**Todos los servicios de CloudTemple** cuentan con esta protección sin costo adicional, incluidos los prefijos de los clientes que pueden migrarse a nuestra infraestructura. Este enfoque integrado transforma una exigencia de seguridad en una ventaja operativa para nuestros clientes.

## Asignación de direcciones IP públicas

CloudTemple ofrece un sistema flexible de asignación de direcciones IP públicas Provider Aggregated (PA), que permite a los clientes reservar direcciones IP públicas **por unidad** según sus necesidades específicas.

### Proceso de reserva

La reserva de direcciones IP públicas se realiza directamente a través de la consola CloudTemple, lo que ofrece una gestión autónoma e inmediata:

**A través de la API de la consola :** Posibilidad de integración en sus flujos de trabajo de automatización y aprovisionamiento.

**A través de la consola web :** Interfaz intuitiva accesible desde la sección *Internet* de su espacio de cliente.

El proceso de reserva sigue estos sencillos pasos: conexión a la consola, navegación hacia *Internet* > *Gestionar las direcciones IP*, selección de *Reservar una nueva dirección*, elección entre IPv4 o IPv6 y, a continuación, validación del pedido.

### Facturación

La facturación de las direcciones IP públicas se realiza por unidad de obra (UO) y comienza desde la reserva de la dirección, garantizando una transparencia total de los costos.

| Referencia | Unidad | SKU |
|-----------|-------|-----|
| Red - IPv4 Pública dedicada | 1 IPv4 | RSIP-IP4-UNIT |
| Red - IPv6 Pública dedicada | 1 IPv6 | RSIP-IP6-UNIT |

## Bloques IPv4

La entrega de una IPv4 se realiza **según la disponibilidad de stock** para nuestros clientes, por dirección IP.

La solicitud de direcciones IPv4 se realiza desde el menú ***'IPs públicas'*** del menú Redes en la barra verde de la izquierda, a través del botón ***"Solicitar direcciones IPv4 o prefijos IPv6"***.

Es posible visualizar los bloques de direcciones asignados a usted en este mismo menú.

| Referencia                     | Unidad  | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Red - IPv4 Pública dedicada | IPv4/32 | csp:(region):network:ipv4:v2 |

## Bloques IPv6

La solicitud de prefijos IPv6 se realiza desde el menú ***'IPs públicas'*** del menú Redes en la barra verde de la izquierda, mediante el botón ***"Solicitar direcciones IPv4 o prefijos IPv6"***.

Es posible visualizar los prefijos que le han sido asignados en este mismo menú.

| Referencia                             | Unidad   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Red - Rango IPv6 Público dedicado     | IPv6/48 | csp:(region):network:ipv6:v1 |

## Migración de prefijos IP de clientes

CloudTemple acompaña a los clientes que desean migrar sus propios prefijos IP a nuestra infraestructura, facilitando así los proyectos de migración mientras se mantiene la identidad de red existente.

### Ventajas de la migración

Este enfoque permite conservar su identidad IP durante la migración a CloudTemple, garantizando una continuidad perfecta para sus aplicaciones y clientes. Conserva el control total del uso de sus direcciones IP mientras se beneficia de la infraestructura de CloudTemple.

### Proceso de integración

Su prefijo IP (por ejemplo `203.0.113.0/24`) se integra en la red backbone de CloudTemple y se anuncia desde nuestro AS. Una vez integrado, el prefijo puede asociarse libremente a sus máquinas virtuales, balanceadores de carga u otros servicios.

**Todas las direcciones del prefijo migrado se benefician automáticamente de la protección anti-DDoS F5**, sin configuración adicional ni costo adicional.

### Requisitos

La migración de prefijos IP requiere que el prefijo esté registrado en un registro de Internet reconocido (ARIN, RIPE, APNIC, etc.) y que usted sea su propietario legítimo. La gestión BGP puede ser realizada por sus equipos o contar con el soporte técnico de CloudTemple, según sus preferencias.

## Reserva de ancho de banda de Internet

El ancho de banda de Internet se puede reservar por bloques de 100 Mbps. La capacidad máxima disponible para una pasarela es de 10 Gbps, potencialmente limitada por las características técnicas de su pasarela.

La facturación se realiza en el percentil 95 durante el período de facturación, habitualmente un mes. Por lo tanto, puede aprovechar ocasionalmente un pico de tráfico (burst) por encima de su capacidad reservada.

| Referencia                                 | Unidad    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Red - Ancho de banda de Internet reservado | 100 Mbps | csp:(region):network:trafic:internet:v1 |

***Nota :***
*No existe **facturación volumétrica** de tipo **'egress fees'. Solo paga la reserva de ancho de banda.***

## Disponibilidad por producto

El conjunto de estas funcionalidades de conectividad a Internet está disponible en todas las ofertas de CloudTemple, garantizando una experiencia homogénea independientemente del tipo de servicio utilizado.

| Oferta | Conectividad a Internet | Protección DDoS | Gestión RSIP | Migración de prefijos |
|-------|----------------------|------------------|---------------|-------------------|
| Alojamiento dedicado | ✓ | ✓ | ✓ | ✓ |
| Alojamiento compartido | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Este enfoque unificado garantiza que todos nuestros clientes disfruten de un acceso a Internet de calidad de operador, con seguridad integrada y funcionalidades avanzadas, independientemente de su elección tecnológica.