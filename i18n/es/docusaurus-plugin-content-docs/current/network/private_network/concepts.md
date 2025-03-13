---
title: Conceptos
---

### La tecnología VPLS

La red global de Cloud Temple utiliza la tecnología __[VPLS](https://es.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ es una VPN de capa 2 punto a multipunto basada en Ethernet. Permite conectar sitios geográficamente
dispersos entre sí a través de una red MPLS. Para los clientes, todos los sitios parecen estar en la misma
LAN Ethernet, aunque el tráfico se transporta a través de la red de Cloud Temple.

__VPLS__, en su implementación y configuración, tiene mucho en común con una VPN de capa 2. En VPLS, un paquete que proviene
de una red cliente se envía primero a un dispositivo de borde del cliente (CE) (por ejemplo, un router o un conmutador Ethernet).
Luego se envía a un router de borde del proveedor (PE) dentro de la red del proveedor de servicios.
El paquete atraviesa la red del proveedor de servicios en una ruta conmutada por etiquetas MPLS (LSP).
Llega al router PE de salida, que luego reenvía el tráfico al dispositivo CE en el sitio cliente de destino.
La diferencia radica en que, para __VPLS__, los paquetes pueden atravesar la red del proveedor de
servicios de manera punto a multipunto, lo que significa que un paquete proveniente de un dispositivo CE puede ser
difundido a todos los routers PE que participan en una instancia de enrutamiento __VPLS__.

El circuito __VPLS__ de un cliente puede __extenderse a través de todas las zonas de disponibilidad de una región__.

El protocolo __VPLS__ es __totalmente transparente__ para los clientes que solo ven las diferentes VLANs en sus zonas de disponibilidad.

### La red en la oferta de virtualización VMware

Las redes virtuales (vlan) en la oferta de virtualización VMware son redes de tipo __'DVPortgroup'__. Un __'dvPortGroup'__,
o __'Distributed Virtual Port Group'__, es un concepto específico de VMware. Un dvPortGroup es una entidad que
agrupa varios puertos virtuales (vPorts) en un entorno de red virtual distribuida para facilitar su uso.

Ubicadas dentro de un __[Tenant](../../../console/iam/concepts/#tenant)__, pueden extenderse entre zonas de disponibilidad,
permitiéndole construir arquitecturas "activo / activo" con quórum.

El ancho de banda máximo utilizable depende principalmente del modelo de blade utilizado (10Gbps convergidos o 25 Gbps convergidos) y de las capacidades de las máquinas virtuales.

Es posible alcanzar un ancho de banda de 10Gbps.

Las configuraciones disponibles en la consola Cloud Temple como parte de la oferta de virtualización VMware son las siguientes:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Nota__* :

- *La elección del direccionamiento IP dentro de estas redes es __libre.__*
- *__SRV-IO__ no está disponible en la oferta de red asociada a la virtualización VMware.*
- *__QinQ__ es compatible con la arquitectura Cloud Temple. QinQ, también conocido como "VLAN stacking" o 802.1ad, es
un protocolo de red que permite la encapsulación de múltiples etiquetas VLAN (Virtual Local Area Network) en una sola trama Ethernet.*

## Redes privadas regionales

El pedido de redes privadas dentro de una región se realiza directamente en la consola Cloud Temple.

__*Nota:*__ *No es posible elegir el ID de vlan 802.1q.*

| Referencia                                 | Unidad | SKU                          |
|-------------------------------------------|--------|------------------------------|
| RED - Región FR1 - VLAN privada inter AZ | 1 vlan | csp:(region):network:vlan:v1 |

## Compartir red entre tenants

Por defecto, __las redes solo están disponibles dentro de un tenant__. Puede elegir __compartir una red entre varios tenants__ por razones técnicas o de conectividad.
Así, es posible compartir una red entre sus __[Tenants](../../../console/iam/concepts/#tenant)__ dentro de una misma organización.

## Conectividad privada externa

La oferta de red de Cloud Temple permite a los clientes conectar sus propias infraestructuras IPSEC, MPLS o Fibra a sus tenants.

Para este fin, Cloud Temple ofrece:

- La posibilidad de alojar un equipo de red en una zona común (no calificada como Secnumcloud),
- Puertos de conectividad de 1Gbps o 10Gbps.

La creación de una conectividad externa se realiza mediante una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    La zona de disponibilidad o, en su defecto, el sitio físico deseado para esta conectividad
    El número y para cada uno, el tipo de puerto de conectividad esperado (fibra, cobre, 1Gbps, 10Gbps, ...)
    La red de su tenant que debe acoger esta conectividad
    El número de 'U' de alojamiento deseado, si es necesario

## Circuitos dedicados

Cloud Temple ofrece la posibilidad de beneficiarse de una fibra dedicada entre dos infraestructuras de alojamiento dedicado (racks).

Este servicio se utiliza típicamente cuando desea alojar 2 infraestructuras no-cloud (por ejemplo, dos IBM AS/400), en dos racks distintos en dos centros de datos físicos distintos.
Puede desear conectar directamente estos dos racks de forma privada sin pasar por la infraestructura backbone de Cloud Temple y utilizar solo el backbone de transmisión óptica.

En este contexto, podemos proporcionar conectividad de fibra óptica entre sus dos racks. La entrega se realiza sistemáticamente por dos caminos ópticos diversificados.

Aquí están los diferentes tipos de entrega posibles:

- Ethernet fibra 1Gbps
- Ethernet fibra 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

La creación de una conectividad dedicada se realiza mediante una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    Los identificadores de los dos racks dedicados
    El ancho de banda deseado
    La red de su tenant que debe acoger esta conectividad

Será contactado por el soporte para refinar su solicitud.

| Referencia                                                                                | Unidad   | SKU                              | Compromiso |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| RED - Enlace dedicado inter AZ 1G ethernet (dos enlaces vía dos caminos diversificados)       | 1 paquete | csp:(region):network:epl:1g:v1   | 36 meses   |
| RED - Enlace dedicado inter AZ 10G ethernet (dos enlaces vía dos caminos diversificados)      | 1 paquete | csp:(region):network:epl:10g:v1  | 36 meses   |
| RED - Enlace dedicado inter AZ 8G fiber-channel (dos enlaces vía dos caminos diversificados)  | 1 paquete | csp:(region):network:fcpl:8g:v1  | 36 meses   |
| RED - Enlace dedicado inter AZ 16G fiber-channel (dos enlaces vía dos caminos diversificados) | 1 paquete | csp:(region):network:fcpl:16g:v1 | 36 meses   |
