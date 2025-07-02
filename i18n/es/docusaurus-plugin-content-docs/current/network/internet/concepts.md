---
title: Conceptos
---

## Asignación de dirección IP pública Provider Aggregated (PA)

En este contexto, utiliza direcciones IP públicas asignadas a Cloud Temple, que le son alquiladas para sus usos.

La creación de una conectividad a Internet y la asignación de las direcciones IP públicas asociadas se realiza mediante una __solicitud de servicio__ que indica:

    El nombre de su organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El tamaño de la subred deseada (mínimo /29 en IPv4 y /64 en IPv6)
    Si aún no se han proporcionado, se solicitarán las informaciones RIPE (por ejemplo, el contacto administrativo) al soporte

La entrega del acceso a Internet se realiza mediante el protocolo BGP4 tras la solicitud de soporte, que proporcionará la siguiente información:

- *prefijo público*
- *prefijo de interconexión*
- *gateway any-cast*
- *Subnet IP*
- *AS local*
- *AS de Cloud Temple*
- *keepalive timers y hold-time timer*
- *las direcciones de los servers de rutas asociados a su tenant*.

El uso del protocolo BGP4 garantiza un enrutamiento eficiente de sus flujos de Internet hacia la pasarela activa de su arquitectura, especialmente en escenarios de despliegue multi-zonas de disponibilidad, como es el caso de clusters de firewalls distribuidos entre dos zonas de disponibilidad.

## Bloques IPv4

### Oferta de dirección IPv4 en versión 1

__*Esta oferta ya no se comercializa desde el 2 de mayo de 2024*__

La entrega de las IPv4 se realiza __dentro de las existencias disponibles__ para nuestros clientes, con un bloque mínimo de 8 IPv4 (/29 o 255.255.255.248).

Es posible visualizar los bloques de direcciones asignados en el menú __*'IPs públicas'*__ del menú Redes en la barra verde de la izquierda.

| Referencia                             | Unidad  | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Red - Rango IPv4 Públicas dedicadas   | 8 IPv4  | csp:(region):network:ipv4:v1 |

### Oferta de dirección IPv4 en versión 2

La entrega de una IPv4 se realiza __dentro de las existencias disponibles__ para nuestros clientes, por dirección IP.

Es posible visualizar los bloques de direcciones asignados en el menú __*'IPs públicas'*__ del menú Redes en la barra verde de la izquierda.


| Referencia                     | Unidad  | SKU                          |
| ----------------------------- | ------- | ---------------------------- |
| Red - IP Pública dedicada     | 1 IPv4  | csp:(region):network:ipv4:v2 |


## Bloques IPv6

__Al 1 de mayo de 2024, la oferta de direcciones IP públicas IPv6 aún no está disponible para la comercialización.__

La fecha de comercialización está prevista para el segundo semestre de 2024.

| Referencia                             | Unidad   | SKU                          |
| ------------------------------------- | -------- | ---------------------------- |
| Red - Rango IPv6 Públicas dedicadas   | 64 IPv6  | csp:(region):network:ipv6:v1 |

## Direcciones IP públicas Provider Independent (PI)

Si dispone de su propio direccionamiento Provider Independent, tiene la posibilidad de anunciarlo dentro del Autonomous System de Cloud Temple. Esto le permite continuar utilizando sus propias direcciones IP dentro de la infraestructura Cloud Temple y facilitar sus migraciones.

Para ello, realice una __solicitud de servicio__ indicando:

    El nombre de su organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El bloque de dirección IP PI que posee y desea anunciar
    Si aún no se han proporcionado, se solicitarán las informaciones RIPE asociadas al soporte

No hay facturación específica para los clientes que utilizan direcciones Provider Independent.

### Reserva de ancho de banda de Internet

El ancho de banda de Internet se puede reservar en incrementos de 100 Mbps. La capacidad máxima disponible para una pasarela es de 10 Gbps, potencialmente limitada por las características técnicas de su pasarela.

La facturación se realiza en el percentil 95 durante el período de facturación, normalmente un mes. Por lo tanto, puede aprovechar ocasionalmente un burst por encima de su capacidad reservada.

| Referencia                                 | Unidad    | SKU                                     |
| ----------------------------------------- | --------- | --------------------------------------- |
| Red - Ancho de banda de Internet reservado | 100 Mbps  | csp:(region):network:trafic:internet:v1 |

__*Nota:*__
*No hay __facturación por volumen__ de tipo __'egress fees'. Solo paga la reserva de ancho de banda.__*


## Anti-DDoS

Un ataque de denegación de servicio distribuido (DDoS) busca degradar o desconectar un servicio sobrecargándolo con tráfico ilegítimo.

La protección Anti-DDoS de Cloud Temple lo protege contra actores malintencionados y __está activa sin coste adicional contra ataques volumétricos__: el filtrado se realiza a tiempo mediante nuestros socios de telecomunicaciones.