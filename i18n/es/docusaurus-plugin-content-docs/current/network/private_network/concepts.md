---
title: Concepts
---

### La technologie VPLS
El Red global de Cloud Temple utiliza la tecnología __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ es una VPN de capa 2 punto a multipunto basada en Ethernet. Permite conectar sitios geográficamente dispersos entre sí a través de una red MPLS. Para los clientes, todos los sitios parecen estar en el mismo LAN Ethernet, incluso si el tráfico es transportado por la red de Cloud Temple.

__VPLS__, en su implementación y configuración, tiene mucho en común con una VPN de capa 2. En VPLS, un paquete que proviene de una red de clientes es primero enviado a un dispositivo del cliente (CE) (por ejemplo, un enrutador o un conmutador Ethernet).
Luego es enviado a un enrutador de borde de proveedor (PE) dentro de la red del proveedor de servicios. 
El paquete atraviesa la red del proveedor de servicios a través de un camino conmutado por etiquetas MPLS (LSP). 
Llega al enrutador PE de salida, que luego transfiere el tráfico al dispositivo CE en el sitio del cliente de destino.
La diferencia radica en el hecho de que, para __VPLS__, los paquetes pueden atravesar la red del proveedor de servicios de manera punto a multipunto, lo que significa que un paquete proveniente de un dispositivo CE puede ser difundido a todos los enrutadores PE que participen en una instancia de enrutamiento __VPLS__. 

El circuito __VPLS__ de un cliente puede __extenderse entre todas las zonas de disponibilidad de una región__.

El protocolo __VPLS__ es __totalmente transparente__ para los clientes que solo ven los diferentes VLANs en sus zonas de disponibilidad.

### La red en la oferta de virtualización VMware

Las redes virtuales (vlan) de la oferta de virtualización VMware son redes del tipo __'DVPortgroup'__. Un __'dvPortGroup'__, o __'Distributed Virtual Port Group'__, es un concepto específico de VMware. Un dvPortGroup es una entidad que agrupa varios puertos virtuales (vPorts) en un entorno de red virtual distribuido para facilitar su uso.

Localizado dentro de un __[Tenant](../../../console/iam/concepts/#tenant)__, pueden extenderse entre las zonas de disponibilidad 
permitiéndole construir arquitecturas "activo/activo" con quórum.

El ancho de banda máximo utilizable depende principalmente del modelo de cuchilla utilizado (10Gbps convergidos o 25 Gbps convergidos) y de las capacidades de las máquinas virtuales.

Es posible alcanzar un ancho de banda de 10Gbps.

Las configuraciones disponibles en la consola Cloud Temple en el marco de la oferta de virtualización VMware son las siguientes:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Nota__* : 

- *La elección del direccionamiento IP dentro de estas redes es __libre.__*
- *__SRV-IO__ no está disponible en la oferta de red asociada a la virtualización VMware.*
- *__QinQ__ es compatible con la arquitectura Cloud Temple. QinQ, también conocido como "VLAN stacking" o 802.1ad, es un protocolo de red que permite la encapsulación de múltiples etiquetas VLAN (Red de Área Local Virtual) en una sola trama Ethernet.*


## Redes privadas regionales

La petición de redes privadas dentro de una región se realiza directamente en la consola Cloud Temple.

__*Nota:*__ *No es posible elegir el ID de vlan 802.1q.*

| Referencia                               | Unidad | SKU                          | 
|------------------------------------------|--------|------------------------------|
| RESEAU - Région FR1 - VLAN privé inter AZ| 1 vlan | csp:(region):network:vlan:v1 |

## Compartición de red entre tenants

Por defecto, __las redes están disponibles solo dentro de un tenant__. Puede optar por __compartir una red entre varios tenants__ por razones técnicas o de conectividad.
Es posible compartir una red entre sus __[Tenant](../../../console/iam/concepts/#tenant)__ dentro de una misma organización.

## Conectividad privada externa

La oferta de red de Cloud Temple permite a los clientes conectar sus propias infraestructuras IPSEC, MPLS o Fibra a sus tenants.

Cloud Temple ofrece para este propósito:

- La posibilidad de alojar un equipo de red en una zona común (no calificada Secnumcloud),
- Puertos de conectividad de 1Gbps o 10Gbps.

La creación de una conectividad externa se realiza mediante una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo y n° de teléfono para finalizar la configuración
    El nombre del tenant
    La zona de disponibilidad o en su defecto el sitio físico deseado para esta conectividad
    El número y para cada uno, el tipo de puerto de conectividad esperado (fibra, cobre, 1Gbps, 10Gbps, ...)
    La red de su tenant que debe albergar esta conectividad
    El número de 'U' de alojamiento deseado, si corresponde

## Circuitos dedicados

Cloud Temple ofrece la posibilidad de beneficiarse de una fibra dedicada entre dos infraestructuras de alojamiento dedicado (rack).

Este servicio se utiliza típicamente cuando desea alojar 2 infraestructuras no-cloud (por ejemplo, dos IBM AS/400), en dos racks distintos en dos centros de datos físicos distintos.
Puede desear conectar directamente estos dos racks en privado sin pasar por la infraestructura backbone de Cloud Temple y utilizar solo el backbone de transmisión óptica.

En este contexto, podemos proporcionar una conectividad de fibra óptica entre sus dos racks. La entrega es siempre en dos caminos ópticos diversificados.

Aquí están los diferentes tipos de entrega posibles:

- Ethernet fibra 1Gbps
- Ethernet fibra 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

La creación de una conectividad dedicada se realiza mediante una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo y n° de teléfono para finalizar la configuración
    El nombre de los tenants
    Los identificadores de los dos racks dedicados
    El ancho de banda deseado
    La red de su tenant que debe albergar esta conectividad

Será contactado por el soporte para afinar su solicitud.

| Referencia                                                                               | Unidad    | SKU                              | Compromiso |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| RESEAU - Lien dédié inter AZ 1G ethernet (deux liens via deux chemins diversifiés)       | 1 forfait | csp:(region):network:epl:1g:v1   | 36 mois    |
| RESEAU - Lien dédié inter AZ 10G ethernet (deux liens via deux chemins diversifiés)      | 1 forfait | csp:(region):network:epl:10g:v1  | 36 mois    |
| RESEAU - Lien dédié inter AZ 8G fiber-channel (deux liens via deux chemins diversifiés)  | 1 forfait | csp:(region):network:fcpl:8g:v1  | 36 mois    |
| RESEAU - Lien dédié inter AZ 16G fiber-channel (deux liens via deux chemins diversifiés) | 1 forfait | csp:(region):network:fcpl:16g:v1 | 36 mois    |