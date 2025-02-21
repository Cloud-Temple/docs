---
title: Concepts
---

### La technologie VPLS
El red global de Cloud Temple utiliza la tecnología __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ es una VPN de capa 2 punto a multipunto basada en Ethernet. Permite conectar sitios geográficamente
dispersos entre sí a través de una red MPLS. Para los clientes, todos los sitios parecen estar en la misma
LAN Ethernet, incluso si el tráfico es transportado por la red de Cloud Temple.

__VPLS__, en su implementación y configuración, tiene mucho en común con una VPN de capa 2. En VPLS, un paquete que proviene
de una red cliente es primero enviado a un dispositivo cliente (CE) (como un router o un conmutador Ethernet).
Luego es enviado a un router de borde del proveedor (PE) dentro de la red del proveedor de servicios.
El paquete atraviesa la red del proveedor de servicios sobre un camino de conmutación de etiquetas MPLS (LSP).
Llega al router PE de salida, que luego transfiere el tráfico al dispositivo CE en el sitio cliente de destino.
La diferencia reside en que, para __VPLS__, los paquetes pueden atravesar la red del proveedor de
servicios de manera punto a multipunto, lo que significa que un paquete proveniente de un dispositivo CE puede ser
difundido a todos los routers PE que participan en una instancia de enrutamiento __VPLS__.

El circuito __VPLS__ de un cliente puede ser __extendido entre todas las zonas de disponibilidad de una región__.

El protocolo __VPLS__ es __totalmente transparente__ para los clientes que solo ven las diferentes VLANs en sus zonas de disponibilidad.

### La red en la oferta de virtualización VMware

Las redes virtuales (vlan) de la oferta de virtualización de VMware son redes del tipo __'DVPortgroup'__. Un __'dvPortGroup'__,
o __'Distributed Virtual Port Group'__, es un concepto específico de VMware. Un dvPortGroup es una entidad que
agrupa varios puertos virtuales (vPorts) en un entorno de red virtual distribuida para facilitar su uso.

Localizadas dentro de un __[Tenant](../../../console/iam/concepts/#tenant)__, pueden extenderse entre zonas de disponibilidad
permitiéndole así construir arquitecturas "activo / activo" con quórum.

El ancho de banda máximo usable depende principalmente del modelo de blade usado (10Gbps convergente o 25 Gbps convergente) y de las capacidades de las máquinas virtuales.

Es posible alcanzar un ancho de banda de 10Gbps.

Las configuraciones disponibles en la consola de Cloud Temple en el contexto de la oferta de virtualización de VMware son las siguientes:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Nota__* :

- *La elección del direccionamiento IP dentro de estas redes es __libre.__*
- *__SRV-IO__ no está disponible en la oferta de red asociada a la virtualización de VMware.*
- *__QinQ__ es soportado en la arquitectura de Cloud Temple. QinQ, también conocido como "VLAN stacking" o 802.1ad, es
un protocolo de red que permite la encapsulación de múltiples etiquetas VLAN (Virtual Local Area Network) en una sola trama Ethernet.*


## Redes privadas regionales

La orden para las redes privadas dentro de una región se realiza directamente en la consola de Cloud Temple.

__*Nota :*__ *No es posible elegir el ID de vlan 802.1q.*

| Referencia                                 | Unidad  | SKU                          |
|--------------------------------------------|--------|------------------------------|
| RESEAU - Región FR1 - VLAN privado inter AZ | 1 vlan | csp:(region):network:vlan:v1 |


## Compartición de red entre tenants

Por defecto, __las redes están disponibles solo dentro de un tenant__. Usted puede elegir __compartir una red entre varios tenants__ por razones técnicas o de conectividad.
Es así posible compartir una red entre sus __[Tenant](../../../console/iam/concepts/#tenant)__ dentro de una misma organización.

## Conectividad privada externa

La oferta de red de Cloud Temple permite a los clientes conectar sus propias infraestructuras IPSEC, MPLS o Fibra a sus tenants.

Cloud Temple ofrece a tal efecto:

- La posibilidad de alojar un equipo de red en zona común (no cualificada Secnumcloud),
- Puertos de conectividad de 1Gbps o 10Gbps.

La creación de una conectividad externa se realiza por medio de una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo y n° de teléfono para finalizar la configuración
    El nombre del tenant
    La zona de disponibilidad o, en su defecto, el sitio físico deseado para esta conectividad
    El número y tipo de puerto de conectividad esperado (fibra, cobre, 1Gbps, 10Gbps, ...)
    La red de su tenant que debe recibir esta conectividad
    El número de 'U' de alojamiento deseado

## Circuitos dedicados

Cloud Temple ofrece la posibilidad de contar con una fibra dedicada entre dos infraestructuras de alojamiento dedicado (rack).

Este servicio es típicamente utilizado cuando desea alojar 2 infraestructuras no-cloud (por ejemplo, dos IBM AS/400), en dos racks distintos en dos centros de datos físicos distintos.
Puede desear conectar directamente estos dos racks de manera privada sin pasar por la infraestructura backbone de Cloud Temple y usar solo el backbone de transmisión óptica.

En este contexto, podemos entregar una conectividad de fibra óptica entre sus dos racks. La entrega es siempre en dos caminos ópticos diversificados.

Estos son los diferentes tipos de entrega posibles:

- Ethernet fibra 1Gbps
- Ethernet fibra 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

La creación de una conectividad dedicada se realiza por medio de una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo y n° de teléfono para finalizar la configuración
    El nombre de los tenants
    Los identificadores de los dos racks dedicados
    El ancho de banda deseado
    La red de su tenant que debe recibir esta conectividad

Será contactado por el soporte para afinar su solicitud.

| Referencia                                                                                | Unidad     | SKU                              | Compromiso |
|-------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| RESEAU - Enlace dedicado inter AZ 1G ethernet (dos enlaces vía dos caminos diversificados)       | 1 forfait | csp:(region):network:epl:1g:v1   | 36 meses    |
| RESEAU - Enlace dedicado inter AZ 10G ethernet (dos enlaces vía dos caminos diversificados)      | 1 forfait | csp:(region):network:epl:10g:v1  | 36 meses    |
| RESEAU - Enlace dedicado inter AZ 8G fiber-channel (dos enlaces vía dos caminos diversificados)  | 1 forfait | csp:(region):network:fcpl:8g:v1  | 36 meses    |
| RESEAU - Enlace dedicado inter AZ 16G fiber-channel (dos enlaces vía dos caminos diversificados) | 1 forfait | csp:(region):network:fcpl:16g:v1 | 36 meses    |