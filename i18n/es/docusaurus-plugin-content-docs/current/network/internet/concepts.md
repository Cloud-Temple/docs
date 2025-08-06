---
title: Conceptos
---

## Asignación de direcciones de Internet públicas Provider Aggregated (PA)

En este contexto, utiliza direcciones IP públicas asignadas a Cloud Temple, que se le alquilan para su uso.

La creación de conectividad a Internet y la asignación de direcciones IP públicas asociadas se realiza mediante __una solicitud de servicio__ que indica:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El tamaño de subred deseado (mínimo /29 en IPv4 y /64 en IPv6)
    Si aún no se han proporcionado, el soporte solicitará la información RIPE (especialmente el contacto administrativo)

La entrega del acceso a Internet se realiza a través del protocolo BGP4 en respuesta a la solicitud de soporte, que proporcionará la siguiente información:

- *prefijo público*
- *prefijo de interconexión*
- *gateway any-cast*
- *Subred IP*
- *AS local*
- *AS de Cloud Temple*
- *temporizadores keepalive y temporizador hold-time*
- *las direcciones de los servidores de rutas asociados con su tenant*.

El uso del protocolo BGP4 garantiza un enrutamiento eficiente de sus flujos de Internet hacia la puerta de enlace activa de su arquitectura, particularmente en escenarios de implementación de múltiples zonas de disponibilidad, como es el caso de los clústeres de firewalls distribuidos entre dos zonas de disponibilidad.

## Bloques IPv4

### Oferta de direcciones IPv4 versión 1

__*Esta oferta ya no se comercializa desde el 2 de mayo de 2024*__

La entrega de IPv4 se realiza __sujeta a disponibilidad de stock__ para nuestros clientes, con un bloque mínimo de 8 IPv4 (/29 o 255.255.255.248).

Puede visualizar los bloques de direcciones que se le asignan en el menú __*'IPs públicas'*__ del menú Redes en la banda verde a la izquierda.

| Referencia                                    | Unidad | SKU                          |
| --------------------------------------------- | ------ | ---------------------------- |
| Red - Rango de IPv4 públicas dedicadas       | 8 IPv4 | csp:(region):network:ipv4:v1 |

### Oferta de direcciones IPv4 versión 2

La entrega de una IPv4 se realiza __sujeta a disponibilidad de stock__ para nuestros clientes, por dirección IP.

Puede visualizar los bloques de direcciones que se le asignan en el menú __*'IPs públicas'*__ del menú Redes en la banda verde a la izquierda.

| Referencia                      | Unidad | SKU                          |
| ------------------------------- | ------ | ---------------------------- |
| Red - IPv4 pública dedicada     | 1 IPv4 | csp:(region):network:ipv4:v2 |

## Bloques IPv6

El pedido de bloques IPv6 se realiza a través del menú __*Internet*__ en la pestaña __*Redes*__.

Puede visualizar los prefijos que se le asignan en el menú __*'IPs públicas'*__ del menú Redes en la banda verde a la izquierda.

| Referencia                                    | Unidad  | SKU                          |
| --------------------------------------------- | ------- | ---------------------------- |
| Red - Rango de IPv6 públicas dedicadas       | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Direcciones IP públicas Provider Independent (PI)

Si dispone de su propio direccionamiento Provider Independent, tiene la posibilidad de anunciarlo dentro del Sistema Autónomo de Cloud Temple. Esto le permite continuar usando sus propias direcciones IP dentro de la infraestructura de Cloud Temple y facilita sus migraciones.

Para ello, realice __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El bloque de direcciones IP PI que posee y que desea anunciar
    Si aún no se han proporcionado, el soporte solicitará la información RIPE asociada

No hay facturación específica para clientes que utilizan direcciones Provider Independent.

### Reserva de ancho de banda de Internet

El ancho de banda de Internet se puede reservar en incrementos de 100 Mbps. La capacidad máxima disponible para una puerta de enlace es de 10 Gbps, potencialmente limitada por las características técnicas de su puerta de enlace.

La facturación se realiza en el percentil 95 durante el período de facturación, generalmente un mes. Por lo tanto, ocasionalmente puede beneficiarse de un burst más allá de su capacidad reservada.

| Referencia                                      | Unidad   | SKU                                     |
| ----------------------------------------------- | -------- | --------------------------------------- |
| Red - Ancho de banda de Internet reservado     | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Nota:*__
*No hay __facturación volumétrica__ tipo __'egress fees'. Solo paga por la reserva de ancho de banda.__*

## Anti-DDoS

Un ataque de denegación de servicio distribuido (DDoS) tiene como objetivo degradar o dejar fuera de línea un servicio sobrecargándolo con tráfico ilegítimo.

La protección Anti-DDoS de Cloud Temple lo protege contra actores maliciosos y __está activa sin costo adicional contra ataques volumétricos__: el filtrado lo realizan nuestros socios de telecomunicaciones aguas arriba.
