

---
title: Conceptos
---



## Infraestructura Internet CloudTemple

CloudTemple opera como **Proveedor de Servicios en la Nube (CSP)** con una infraestructura de Internet autónoma, altamente resiliente y segura. Nuestra conectividad de tipo operador se basa en un número AS propio que nos otorga un control total del enrutamiento y garantiza una alta disponibilidad para todos nuestros servicios.

Esta infraestructura autónoma nos permite ofrecer una conectividad de Internet con funciones avanzadas, adaptadas a todos los tipos de ofertas de CloudTemple, desde el alojamiento dedicado hasta las soluciones IaaS pasando por los servicios PaaS.



## Arquitectura de red y redundancia

Nuestra red cuenta con una arquitectura redundante diseñada para optimizar el rendimiento y garantizar la continuidad del servicio. CloudTemple dispone de un sistema autónomo independiente con un conjunto de prefijos IP públicos asignados, asegurando una conectividad mundial directa.

Esta conectividad se basa en **dos rutas distintas** para maximizar la resiliencia:

**Conectividad de tránsito:** Dos operadores principales de tránsito garantizan la redundancia a nivel mundial, permitiendo un enrutamiento óptimo del tráfico de Internet hacia nuestras infraestructuras.

**Puntos de intercambio:** Nuestra presencia en dos puntos de intercambio (IXP) en París nos permite reducir significativamente la latencia para los usuarios europeos, mejorando el rendimiento de los servicios regionales. Este enfoque garantiza también una redundancia natural frente a fallos del proveedor.

El uso del protocolo BGP4 garantiza un enrutamiento eficiente de sus flujos de Internet hacia la puerta de enlace activa de su arquitectura, especialmente en escenarios de despliegue multi-zonas de disponibilidad, como es el caso de clusters de firewalls distribuidos entre dos zonas de disponibilidad.



## Protección anti-DDoS integrada

Todo el tráfico entrante hacia la infraestructura CloudTemple cuenta con una protección anti-DDoS avanzada, asumida por **F5**, un líder mundial en seguridad de red. Esta protección funciona de forma transparente y automática.

Los ataques volumétricos se detectan y atenúan directamente en el borde de la red F5, antes incluso de llegar a la red CloudTemple. Este filtrado en la capa superior garantiza que ninguna saturación pueda afectar nuestras conexiones de Internet, y solo las solicitudes legítimas llegan a nuestras infraestructuras.

**Todos los servicios CloudTemple** disfrutan de esta protección sin costo adicional, incluyendo los prefijos de clientes que pueden migrarse a nuestra infraestructura. Este enfoque integrado transforma una restricción de seguridad en una ventaja operativa para nuestros clientes.



## Asignación de direcciones IP públicas

CloudTemple ofrece un sistema flexible de asignación de direcciones IP públicas Provider Aggregated (PA), que permite a los clientes reservar direcciones IP públicas **por unidad** según sus necesidades específicas.



### Proceso de reserva

La reserva de direcciones IP públicas se realiza directamente a través de la consola CloudTemple, ofreciendo una gestión autónoma e inmediata:

**A través de la API de la consola:** Integración posible en sus flujos de automatización y provisión.

**A través de la consola web:** Interfaz intuitiva accesible desde la sección *Internet* de su espacio cliente.

El proceso de reserva sigue estos pasos sencillos: conexión a la consola, navegación hacia *Internet* > *Gestionar direcciones IP*, selección de *Reservar una nueva dirección*, elección entre IPv4 o IPv6, y validación del pedido.



### Facturación

La facturación de las direcciones IP públicas se realiza por unidad de obra (UO) y comienza desde la reserva de la dirección, garantizando una transparencia total de los costos.

| Referencia | Unidad | SKU |
|-----------|-------|-----|
| Red - IPv4 Pública dedicada | 1 IPv4 | RSIP-IP4-UNIT |
| Red - IPv6 Pública dedicada | 1 IPv6 | RSIP-IP6-UNIT |



## Bloques IPv4

La entrega de una IPv4 se realiza __dentro de las existencias disponibles__ para nuestros clientes, por dirección IP.

El pedido de direcciones IPv4 se realiza desde el menú __*'IPs públicas'*__ del menú Redes en la barra verde de la izquierda, mediante el botón __*"Comprar direcciones IPv4 o prefijos IPv6"*__.

Es posible visualizar los bloques de direcciones asignados en el mismo menú.

| Referencia                     | Unidad  | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Red - IPv4 Pública dedicada | IPv4/32 | csp:(region):network:ipv4:v2 |



## Bloques IPv6

El pedido de prefijos IPv6 se realiza desde el menú __*'IPs públicas'*__ del menú Redes en la barra verde de la izquierda, mediante el botón __*"Solicitar direcciones IPv4 o prefijos IPv6"*__.

Es posible ver los prefijos asignados en el mismo menú.

| Referencia                             | Unidad   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Red - Rango de IPv6 públicas dedicadas | IPv6/48 | csp:(region):network:ipv6:v1 |



## Migración de prefijos IP de clientes

CloudTemple asiste a los clientes que desean migrar sus propios prefijos IP a nuestra infraestructura, facilitando así los proyectos de migración manteniendo así la identidad de red existente.



### Ventajas de la migración

Esta aproximación permite conservar su identidad IP durante la migración a CloudTemple, garantizando una continuidad perfecta para sus aplicaciones y clientes. Mantiene el control completo del uso de sus direcciones IP mientras que también beneficia de la infraestructura de CloudTemple.



### Proceso de integración

Su prefijo IP (por ejemplo `203.0.113.0/24`) se integra en la red backbone de CloudTemple y se anuncia desde nuestro AS. Una vez integrado, el prefijo puede asociarse libremente a sus máquinas virtuales, balanceadores de carga u otros servicios.

**Todas las direcciones del prefijo migrado disfrutan automáticamente de la protección anti-DDoS de F5**, sin configuración adicional ni costo adicional.



### Requisitos necesarios

La migración de prefijos IP requiere que el prefijo esté registrado en un registro de Internet reconocido (ARIN, RIPE, APNIC, etc.) y que usted sea su propietario legítimo. La gestión BGP puede ser realizada por sus equipos o contar con el soporte técnico de CloudTemple según sus preferencias.



## Reserva de ancho de banda de internet

El ancho de banda de Internet se puede reservar en incrementos de 100 Mbps. La capacidad máxima disponible para una puerta de enlace es de 10 Gbps, posiblemente limitada por las características técnicas de su puerta de enlace.

La facturación se realiza al 95º percentil durante el período de facturación, generalmente un mes. Por lo tanto, puede que ocasionalmente pueda aprovechar un pico por encima de su capacidad reservada.

| Referencia                                 | Unidad    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Red - Ancho de banda de internet reservado | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Nota:*__
*No hay facturación volumétrica de tipo __'egress fees'__. Solo paga la reserva de ancho de banda.*



## Disponibilidad por oferta

Todo este conjunto de funcionalidades de conectividad a Internet está disponible en todas las ofertas de CloudTemple, garantizando una experiencia homogénea independientemente del tipo de servicio utilizado.

| Oferta | Conectividad Internet | Protección DDoS | Gestión RSIP | Migración de prefijos |
|--------|-----------------------|------------------|---------------|----------------------|
| Hospedaje dedicado | ✓ | ✓ | ✓ | ✓ |
| Hospedaje compartido | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Este enfoque unificado garantiza que todos nuestros clientes disfruten de un acceso a Internet de calidad operador, con seguridad integrada y funcionalidades avanzadas, independientemente de su elección tecnológica.
