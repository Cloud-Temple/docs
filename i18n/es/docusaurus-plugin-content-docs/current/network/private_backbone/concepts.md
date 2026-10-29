---
title: Conceptos
---

<a id="concepts--private-backbone"></a>

## Presentación

El **Private Backbone** es la oferta de conectividad histórica de Cloud Temple, diseñada para expertos en redes. Basada en una infraestructura de nivel 2 (VPLS), permite crear redes privadas extendidas entre las zonas de disponibilidad de una región y exponer sus servicios en Internet. Es adecuada para arquitecturas de nube híbrida complejas, cuando desea mantener un control total sobre su topología de red y gestionar usted mismo sus equipos de seguridad.

El Private Backbone se basa en dos pilares, cada uno detallado en su propia página:

- las **[redes privadas](../private_network/concepts.md)** regionales (tecnología VPLS);
- el **[acceso a Internet](../internet/concepts.md)** (direccionamiento público, BGP, Anti-DDoS).

<a id="3-comparaison-private-backbone-vs-vpc"></a>

### Comparación Private Backbone vs VPC

| Criterio           | Private Backbone                  | VPC                        |
|--------------------|-----------------------------------|----------------------------|
| Nivel de red       | L2 (VPLS)                         | L3 (enrutamiento)          |
| Gestión            | Manual (experto)                  | Automatizada (cloud-native) |
| Control de la topología | Total                        | Guiado                     |
| Casos de uso       | Arquitecturas híbridas complejas  | Aplicaciones cloud-native  |
| Flexibilidad       | Máxima                            | Estándar cloud             |

:::tip[VPC para una experiencia cloud-native]
Para una experiencia de red simplificada y automatizada, opte por el producto **[VPC](/network/vpc)**.
El Private Backbone se recomienda si tiene necesidades de extensión L2 o de control preciso de la topología de red.
:::

### Destinatarios y casos de uso

- **Arquitectos de red**: arquitecturas de nube híbrida con extensión L2 y L3.
- **Organizaciones multisede**: extensión de una red corporativa entre zonas de disponibilidad.
- **Datos sensibles**: comunicación privada, sin exposición en Internet.
- **Exposición de servicios**: servicios web, API o aplicativos publicados en Internet detrás de su propio cortafuegos.
- **Housing**: conexión a Internet y red privada para equipos alojados.

## Ventajas

| Ventaja                      | Descripción                                                                                |
|------------------------------|--------------------------------------------------------------------------------------------|
| Extensión L2 transparente    | El VPLS extiende una red de nivel 2 entre las zonas de disponibilidad, como una única LAN. |
| Aislamiento                  | Cada VLAN privada está aislada; usted controla totalmente los accesos.                     |
| Conectividad externa         | Puertos de 1 Gbps / 10 Gbps conectan sus sedes, operadores o equipos alojados.            |
| Circuitos dedicados          | Enlaces con caudal garantizado, entregados por dos caminos ópticos diversificados.        |
| Uso compartido entre tenants | Una red privada puede compartirse entre los tenants de una misma organización.            |

## Funcionalidades

| Funcionalidad               | Descripción                                                                              |
|-----------------------------|------------------------------------------------------------------------------------------|
| VLAN privadas regionales    | Redes virtuales extendidas entre las zonas de disponibilidad.                            |
| VLAN tagging y modo Trunk   | Soporte de 802.1q y QinQ (802.1ad), agregación de VLANs en un único enlace.              |
| Uso compartido entre tenants | Redes compartidas dentro de una misma organización.                                     |
| Conectividad externa        | Puertos de 1 Gbps / 10 Gbps para IPSEC, MPLS o fibra.                                    |
| Circuitos dedicados         | Ethernet 1G / 10G y Fiber Channel 8G / 16G.                                              |
| IP públicas                 | Direcciones IPv4 e IPv6 públicas para exponer sus servicios.                             |
| DNS inverso (PTR)           | Registro PTR personalizable para cada dirección IP pública.                              |
| Anti-DDoS nativo            | Protección incluida en el acceso a Internet contra ataques volumétricos.                 |
| Peering eBGP                | Anuncio de sus propios prefijos IPv4 e IPv6.                                             |

<a id="1-réseaux-privés-vpls"></a>

## Arquitectura

### Arquitectura L2 extendida

Las redes privadas se basan en la tecnología **VPLS (Virtual Private LAN Service)**. Esta crea una red de nivel 2 (capa Ethernet) transparente y extendida entre todas las **zonas de disponibilidad** de una región.

La red MPLS subyacente garantiza:

- una conectividad entre servicios de hasta **100 Gbps**;
- una extensión L2 punto a multipunto **transparente** para los clientes;
- **caminos diversificados** para la alta disponibilidad.

### VLAN privadas regionales

Cada red virtual es una **VLAN privada** aislada, propagada entre los clústeres de la región:

- denominación personalizable, direccionamiento IP libre (usted elige su plan de direccionamiento);
- soporte de **802.1q** (VLAN tagging) y **QinQ / 802.1ad** (doble etiquetado);
- posibilidad de **modo Trunk**: agregar varias VLANs en un único enlace físico;
- propagación selectiva: elección de los clústeres de destino (límite de 20 redes por acción).

### Uso compartido entre tenants

Una red privada puede **compartirse entre varios tenants** de una misma organización:

- activación mediante la consola Cloud Temple;
- lista de tenants filtrada según la organización y los permisos;
- visualización gráfica de la propagación en los clústeres e hipervisores.

### Conectividad externa

Puertos físicos de **1 Gbps / 10 Gbps** (fibra o cobre) permiten conectar:

- equipos de red alojados en zona común (cortafuegos, routers);
- enlaces IPSEC, MPLS o de fibra hacia sedes on-premise;
- operadores terceros.

Estos puertos requieren una **solicitud de servicio** y se entregan previo presupuesto.

<a id="2-accès-internet--adressage-public"></a>

### Acceso a Internet

#### Bloques de direcciones IP públicas

Se ponen a disposición bloques de **direcciones IP públicas** declaradas en el RIPE:

- **IPv4**: bloques a partir de 1 dirección;
- **IPv6**: bloques a partir de /64.

Estas direcciones permiten exponer sus servicios en Internet desde las infraestructuras de Cloud Temple.

#### Gestión del DNS inverso (PTR)

Para cada dirección IP pública, puede configurar un **registro PTR** personalizado mediante la consola, para la resolución DNS inversa de sus servicios.

#### Anti-DDoS nativo

La protección **Anti-DDoS** está incluida de forma nativa en el acceso a Internet. Protege sus servicios expuestos contra los ataques volumétricos, sin configuración adicional.

#### BGP y enrutamiento avanzado

Para un control preciso del enrutamiento:

- peering **eBGP** para anunciar sus propios prefijos IP;
- configuración de **route servers** y de vecinos BGP;
- soporte de prefijos IPv4 e IPv6;
- compatible con los cortafuegos de su elección (FortiGate, pfSense, etc.).

#### Casos de uso de Internet

- Exposición de servicios web, API o aplicativos en Internet.
- Conexión a Internet para equipos en housing.
- Arquitecturas con cortafuegos dedicado que gestiona los flujos entrantes y salientes.
- Peering BGP para las organizaciones que disponen de su propio AS.

### Integración con los servicios de Cloud Temple

El Private Backbone es la base de red de los servicios de Cloud Temple. IaaS OpenSource, IaaS VMware, PaaS OpenShift, Housing y VPC pueden consumir direcciones IP públicas e integrarse en las redes privadas.

## Regiones y zonas de disponibilidad

El Private Backbone está disponible en la región FR1. Sus redes privadas se extienden entre todas las zonas de disponibilidad de la región.

## Especificaciones técnicas

| Parámetro                  | Valor                                         |
|----------------------------|-----------------------------------------------|
| Rendimiento de red de una VM | 10 Gbps como máximo                         |
| Conectividad entre servicios | Hasta 100 Gbps                              |
| Conectividad externa       | Puertos de 1 / 10 Gbps                        |
| Direccionamiento público   | IPv4 a partir de una dirección, IPv6 a partir de /64 |

### Circuitos dedicados

Para las necesidades de gran ancho de banda con garantía de caudal:

| Tipo              | Caudal  | Compromiso |
|-------------------|---------|------------|
| Ethernet 1G       | 1 Gbps  | 36 meses   |
| Ethernet 10G      | 10 Gbps | 36 meses   |
| Fiber Channel 8G  | 8 Gbps  | 36 meses   |
| Fiber Channel 16G | 16 Gbps | 36 meses   |

Todos los circuitos dedicados se entregan por **dos caminos ópticos diversificados**.

### Límites

- La propagación de una red privada se realiza sobre 20 redes como máximo por acción.
- El rendimiento de red de una VM está limitado a 10 Gbps.

## Seguridad y cumplimiento

El Private Backbone está certificado HDS e ISO 27001.

- **Aislamiento**: cada VLAN privada está aislada, y el uso compartido entre tenants se limita a una misma organización.
- **Protección**: el acceso a Internet integra una protección Anti-DDoS contra los ataques volumétricos.

## Disponibilidad del servicio

El objetivo de disponibilidad de la red es del 99,99 %, medido sobre un mes.

## Responsabilidades

El reparto de responsabilidades entre el cliente y Cloud Temple se detalla en la [matriz de responsabilidades (RACI) de red](../../contractual/network/raci.md).

## Reversibilidad

No aplicable: el Private Backbone transporta sus flujos de red y no conserva datos del cliente. Su plan de direccionamiento y la configuración de sus equipos permanecen bajo su control.

## Precios

Los precios del Private Backbone se publican en la página del producto en el sitio web de Cloud Temple:
[Private Backbone — precios](https://www.cloud-temple.com/produits/private-backbone/).
