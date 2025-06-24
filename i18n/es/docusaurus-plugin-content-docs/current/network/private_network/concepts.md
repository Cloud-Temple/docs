---
title: Conceptos
---

### La tecnología VPLS

La red global Cloud Temple utiliza la tecnología __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ es un VPN de capa 2 punto a multipunto basado en Ethernet. Permite conectar sitios geográficamente
dispersos entre sí a través de una red MPLS. Para los clientes, todos los sitios parecen estar en el mismo
LAN Ethernet, incluso si el tráfico se transporta a través de la red Cloud Temple.

__VPLS__, en su implementación y configuración, tiene mucho en común con un VPN de capa 2. En VPLS, un paquete que proviene
de una red cliente se envía primero a un dispositivo cliente (CE) (por ejemplo, un router o un conmutador Ethernet).
Luego se envía a un router de borde del proveedor (PE) dentro de la red del proveedor de servicios.
El paquete atraviesa la red del proveedor de servicios por un camino de conmutación de etiquetas MPLS (LSP).
Llega al router PE de salida, que luego transfiere el tráfico al dispositivo CE en el sitio cliente de destino.
La diferencia radica en el hecho de que, para __VPLS__, los paquetes pueden atravesar la red del proveedor de
servicios de manera punto a multipunto, lo que significa que un paquete proveniente de un dispositivo CE puede ser
difundido a todos los routers PE participantes en una instancia de enrutamiento __VPLS__.

El circuito __VPLS__ de un cliente puede ser __extendido entre todas las zonas de disponibilidad de una región__.

El protocolo __VPLS__ es __totalmente transparente__ para los clientes que solo ven los diferentes VLANs en sus zonas de disponibilidad.

### La red en la oferta de virtualización VMware

Las redes virtuales (VLAN) de la oferta de virtualización VMware son redes de tipo __'DVPortgroup'__. Un __'dvPortGroup'__,
o __'Distributed Virtual Port Group'__, es un concepto específico de VMware. Un dvPortGroup es una entidad que
agrupa varios puertos virtuales (vPorts) en un entorno de red virtual distribuida para facilitar su uso.

Localizada dentro de un __[Tenant](../../../console/iam/concepts/#tenant)__, pueden extenderse entre las zonas de disponibilidad
permitiéndole así construir arquitecturas "activo/activo" con cuórum.

El ancho de banda máximo utilizable depende principalmente del modelo de rack utilizado (10Gbps convergidos o 25 Gbps convergidos) y de las capacidades de las máquinas virtuales.

Es posible esperar un ancho de banda de 10Gbps.

Las configuraciones disponibles en la consola Cloud Temple dentro del marco de la oferta de virtualización VMware son las siguientes:

- __Etiquetado de VLAN__
- __Trunk__
- __Espejo de puerto__

*__Nota__* :

- *La elección de la dirección IP dentro de estas redes es __libre.__*
- *__SRV-IO__ no está disponible en la red asociada a la virtualización VMware.*
- *__QinQ__ es compatible con la arquitectura Cloud Temple. QinQ, también conocido como "VLAN stacking" o 802.1ad, es
un protocolo de red que permite la encapsulación de varias etiquetas VLAN (Virtual Local Area Network) en un solo trama Ethernet.*

## Redes privadas regionales

El comando de las redes privadas dentro de una región se realiza directamente en la consola Cloud Temple.

__*Nota:*__ *No es posible elegir el ID de VLAN 802.1q.*

| Referencia                                 | Unidad  | SKU                          |
|-------------------------------------------|--------|------------------------------|
| RESEAU - Región FR1 - VLAN privado inter AZ | 1 VLAN | csp:(region):network:vlan:v1 |

## Compartir red entre tenants

Por defecto, __las redes están disponibles únicamente dentro de un tenant__. Puede elegir __compartir una red entre varios tenants__ por razones técnicas o de conectividad.
Es posible así compartir una red entre sus __[Tenant](../../../console/iam/concepts/#tenant)__ dentro de una misma organización.

## Conectividad privada externa

La oferta de red Cloud Temple permite a los clientes conectar sus propias infraestructuras IPSEC, MPLS o Fibra a sus tenants.

Cloud Temple ofrece a este efecto:

- La posibilidad de alojar un equipo de red en zona común (no calificada Secnumcloud),
- Puertos de conectividad de 1Gbps o 10Gbps.

La creación de una conectividad externa se realiza mediante una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    La zona de disponibilidad o, en su defecto, el sitio físico deseado para esta conectividad
    El número y, para cada uno, el tipo de puerto de conectividad esperado (fibra, cobre, 1Gbps, 10Gbps, ...)
    La red de su tenant que debe alojar esta conectividad
    El número de 'U' eventual de alojamiento deseado

## Circuitos dedicados

Cloud Temple ofrece la posibilidad de beneficiarse de una fibra dedicada entre dos infraestructuras de alojamiento dedicado (rack).

Este servicio se utiliza típicamente cuando desea alojar 2 infraestructuras no cloud (por ejemplo, dos IBM AS/400), en dos racks distintos en dos centros de datos físicos distintos.
Es posible que desee conectar directamente estos dos racks en privado sin pasar por la infraestructura backbone Cloud Temple y utilizar solo el backbone de transmisión óptica.

En este contexto, podemos entregar una conectividad de fibra óptica entre sus dos racks. La entrega se realiza siempre en dos caminos ópticos diversificados.

Estos son los diferentes tipos de entrega posibles:

- Ethernet de fibra 1Gbps
- Ethernet de fibra 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

La creación de una conectividad dedicada se realiza mediante una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    Los identificadores de los dos racks dedicados
    El ancho de banda deseado
    La red de su tenant que debe alojar esta conectividad

Usted será contactado por el soporte para afinar su solicitud.

| Referencia                                                                                | Unidad     | SKU                              | Compromiso |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| RESEAU - Enlace dedicado inter AZ 1G ethernet (dos enlaces a través de dos caminos diversificados)       | 1 paquete | csp:(region):network:epl:1g:v1   | 36 meses    |
| RESEAU - Enlace dedicado inter AZ 10G ethernet (dos enlaces a través de dos caminos diversificados)      | 1 paquete | csp:(region):network:epl:10g:v1  | 36 meses    |
| RESEAU - Enlace dedicado inter AZ 8G fiber-channel (dos enlaces a través de dos caminos diversificados)  | 1 paquete | csp:(region):network:fcpl:8g:v1  | 36 meses    |
| RESEAU - Enlace dedicado inter AZ 16G fiber-channel (dos enlaces a través de dos caminos diversificados) | 1 paquete | csp:(region):network:fcpl:16g:v1 | 36 meses    |