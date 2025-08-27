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
La diferencia radica en que, para __VPLS__, los paquetes pueden atravesar la red del proveedor de
servicios de manera punto a multipunto, lo que significa que un paquete proveniente de un dispositivo CE puede ser
difundido a todos los routers PE participantes en una instancia de enrutamiento __VPLS__.

El circuito __VPLS__ de un cliente puede ser __extendido entre todas las zonas de disponibilidad de una región__.

El protocolo __VPLS__ es __totalmente transparente__ para los clientes que solo ven los diferentes VLANs en sus zonas de disponibilidad.

### La red en la oferta de virtualización VMware

Las redes virtuales (VLAN) de la oferta de virtualización VMware son redes de tipos __'DVPortgroup'__. Un __'dvPortGroup'__,
o __'Distributed Virtual Port Group'__, es un concepto específico de VMware. Un dvPortGroup es una entidad que
agrupa varios puertos virtuales (vPorts) en un entorno de red virtual distribuida para facilitar su uso.

Localizada dentro de un __[Tenant](../../console/iam/concepts.md#tenant)__, pueden extenderse entre las zonas de disponibilidad
permitiéndole así construir arquitecturas "activo/activo" con cuórum.

La banda ancha máxima utilizable depende principalmente del modelo de rack utilizado (10Gbps convergidos o 25 Gbps convergidos) y de las capacidades de las máquinas virtuales.

Es posible esperar una banda ancha de 10Gbps.

Las configuraciones disponibles en la consola Cloud Temple dentro del marco de la oferta de virtualización VMware son las siguientes:

- __VLAN tagging__
- __Troncal__
- __espejo de puerto__

*__Nota__* :

- *La elección de la dirección IP dentro de estas redes es __libre__.*
- *__SRV-IO__ no está disponible en la oferta de red asociada a la virtualización VMware.*
- *__QinQ__ está soportado en la arquitectura Cloud Temple. QinQ, también conocido como "VLAN stacking" o 802.1ad, es
un protocolo de red que permite la encapsulación de varias etiquetas VLAN (Red de Área Local Virtual) en una sola trama Ethernet.*

## Redes privadas regionales

La gestión de las redes privadas dentro de una región se realiza directamente en la consola Cloud Temple.

__*Nota :*__ *No es posible elegir el ID de vlan 802.1q.*

| Referencia                                 | Unidad  | SKU                          |
|-------------------------------------------|---------|------------------------------|
| RESEAU - Région FR1 - VLAN privado inter AZ | 1 vlan | csp:(region):network:vlan:v1 |

## Compartir red entre inquilinos

Por defecto, __las redes están disponibles únicamente dentro de un inquilino__. Puede elegir __compartir una red entre varios inquilinos__ por razones técnicas o de conectividad.  
Es así posible compartir una red entre sus __[Inquilino](../../console/iam/concepts.md#tenant)__ dentro de una misma organización.

## Conectividad privada externa

La oferta de red de Cloud Temple permite a los clientes conectar sus propias infraestructuras IPSEC, MPLS o Fibra a sus inquilinos.

Cloud Temple ofrece para ello:

- La posibilidad de alojar un equipo de red en una zona común (no calificada Secnumcloud),
- Puertos de conectividad de 1Gbps o 10Gbps.

La creación de una conectividad externa se realiza mediante una solicitud de servicio indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del inquilino
    La zona de disponibilidad o, en su defecto, el sitio físico deseado para esta conectividad
    El número y, para cada uno, el tipo de puerto de conectividad esperado (fibra, cobre, 1Gbps, 10Gbps, ...)
    La red de su inquilino que debe alojar esta conectividad
    El número de 'U' de alojamiento eventual deseado

## Circuitos dedicados

Cloud Temple ofrece la posibilidad de beneficiarse de una fibra dedicada entre dos infraestructuras de alojamiento dedicado (rack).

Este servicio se utiliza típicamente cuando desea alojar dos infraestructuras no en la nube (por ejemplo, dos IBM AS/400), en dos racks distintos en dos centros de datos físicos distintos.  
Es posible que desee conectar directamente estos dos racks de forma privada sin pasar por la infraestructura backbone de Cloud Temple y utilizar únicamente el backbone de transmisión óptica.

En este contexto, podemos entregar una conectividad de fibra óptica entre sus dos racks. La entrega se realiza siempre mediante dos caminos ópticos diversificados.

Estos son los diferentes tipos de entrega posibles:

- Ethernet fibra 1Gbps  
- Ethernet fibra 10Gbps  
- Fiber Channel 8Gbps  
- Fiber Channel 16Gbps  

La creación de una conectividad dedicada se realiza mediante una solicitud de servicio que indica:

    El nombre de su Organización  
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración  
    El nombre del inquilino  
    Los identificadores de los dos racks dedicados  
    El ancho de banda deseado  
    La red de su inquilino que debe alojar esta conectividad  

Será contactado por el soporte para afinar su solicitud.

| Referencia                                                                                | Unidad     | SKU                              | Compromiso |
|------------------------------------------------------------------------------------------|------------|----------------------------------|------------|
| RESEAU - Lien dédié inter AZ 1G ethernet (deux liens via deux chemins diversifiés)       | 1 forfait  | csp:(region):network:epl:1g:v1   | 36 meses   |
| RESEAU - Lien dédié inter AZ 10G ethernet (deux liens via deux chemins diversifiés)      | 1 forfait  | csp:(region):network:epl:10g:v1  | 36 meses   |
| RESEAU - Lien dédié inter AZ 8G fiber-channel (deux liens via deux chemins diversifiés)  | 1 forfait  | csp:(region):network:fcpl:8g:v1  | 36 meses   |
| RESEAU - Lien dédié inter AZ 16G fiber-channel (deux liens via deux chemins diversifiés) | 1 forfait  | csp:(region):network:fcpl:16g:v1 | 36 meses   |