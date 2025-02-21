---
title: Concepts
---

## Asignación de una dirección de internet pública Provider Aggregated (PA)

En este contexto, usted utiliza direcciones IP públicas asignadas a Cloud Temple, que se le alquilan para sus usos.

La creación de una conectividad a internet y la asignación de las direcciones IP públicas asociadas se realiza mediante __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y n.º de teléfono para finalizar la configuración
    El nombre del inquilino
    El tamaño del subred deseado (mínimo /29 en IPv4 y /64 en IPv6)
    Si aún no han sido proporcionadas, se solicitará al soporte la información RIPE (particularmente el contacto administrativo)

La entrega del acceso a internet se realiza a través del protocolo BGP4 en respuesta a la solicitud de soporte, que proporcionará la siguiente información:

- *prefijo público*
- *prefijo de interconexión*
- *gateway any-cast*
- *Subnet IP*
- *local AS*
- *AS de Cloud Temple*
- *temporalizadores keepalive y hold-time*
- *las direcciones de los route servers asociados a su inquilino*.

El uso del protocolo BGP4 garantiza un enrutamiento eficiente de sus flujos de internet hacia la puerta de enlace activa de su arquitectura, particularmente en escenarios de despliegue multi-zonas de disponibilidad, como es el caso de clusters de firewalls distribuidos entre dos zonas de disponibilidad.

## Bloques IPv4

### Oferta de dirección IPv4 en versión 1

__*Esta oferta ya no está disponible comercialmente desde el 2 de mayo de 2024*__

La entrega de las IPv4 se realiza __en el límite de las existencias disponibles__ para nuestros clientes, con un bloque mínimo de 8 IPV4 (/29 o 255.255.255.248).

Es posible visualizar los bloques de direcciones que se le han asignado en el menú __*'IPs públicas'*__ del menú Redes en el panel verde a la izquierda.

| Referencia                             | Unidad | SKU                          |
| ------------------------------------- | ------ | ---------------------------- |
| Red - Rango de IPv4 Públicas dedicadas | 8 IPv4 | csp:(region):network:ipv4:v1 |

### Oferta de dirección IPv4 en versión 2

La entrega de una IPv4 se realiza __en el límite de las existencias disponibles__ para nuestros clientes, por dirección IP.

Es posible visualizar los bloques de direcciones que se le han asignado en el menú __*'IPs públicas'*__ del menú Redes en el panel verde a la izquierda.


| Referencia                     | Unidad | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Red - IPv4 Pública dedicada    | 1 IPv4 | csp:(region):network:ipv4:v2 |


## Bloques IPv6

__Al 1 de mayo de 2024, la oferta de direcciones IP Públicas IPv6 aún no está disponible para la comercialización.__

El objetivo de comercialización está previsto para el segundo semestre de 2024.

| Referencia                                | Unidad  | SKU                          |
| ----------------------------------------- | ------- | ---------------------------- |
| Red - Rango de IPv6 Públicas dedicadas    | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Direcciones IP Públicas Provider Independent (PI)

Si dispone de su propia dirección Provider Independent, tienen la posibilidad de anunciarla dentro del Sistema Autónomo de Cloud Temple. Esto le permite seguir utilizando sus propias direcciones IP dentro de la infraestructura de Cloud Temple y facilitar sus migraciones.

Para hacerlo, realice __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y n.º de teléfono para finalizar la configuración
    El nombre del inquilino
    El bloque de dirección IP PI que posee y desea anunciar
    Si aún no han sido proporcionadas, se solicitará al soporte la información RIPE asociada 

No hay una facturación específica para los clientes que usan direcciones Provider Independent.

### Reserva de ancho de banda de internet

El ancho de banda de internet es reservable en escalas de 100 Mbps. La capacidad máxima disponible para una puerta de enlace es de 10 Gbps, potencialmente limitada por las características técnicas de su puerta de enlace.

La facturación se efectúa al percentil 95° sobre el periodo de facturación, habitualmente un mes. Por lo tanto, puede ocasionalmente beneficiarse de un burst más allá de su capacidad reservada.

| Referencia                                | Unidad  | SKU                                     |
| ----------------------------------------- | ------- | --------------------------------------- |
| Red - Ancho de banda de internet reservado| 100 Mbps| csp:(region):network:trafic:internet:v1 |

__*Nota :*__
*No hay __facturación volumétrica__ del tipo __'egress fees'. Sólo paga por la reserva de ancho de banda.__*


## Anti-DDoS

Un ataque de denegación de servicio distribuido (DDoS) tiene como objetivo degradar o dejar fuera de línea un servicio sobrecargándolo con tráfico ilegítimo.

La protección Anti-DDoS de Cloud Temple lo protege contra los actores maliciosos y __está activa sin costo adicional contra ataques volumétricos__: el filtrado se realiza de antemano por nuestros socios de telecomunicaciones.