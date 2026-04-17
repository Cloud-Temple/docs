---
title: Conceptos
---

# Conceptos — Private Backbone

El Private Backbone se basa en dos pilares complementarios: las **redes privadas regionales** (tecnología VPLS) y la **conectividad a Internet** (direccionamiento público, BGP, Anti-DDoS).

---

## 1. Redes Privadas (VPLS)

### Arquitectura L2 extendida

Cloud Temple ofrece redes privadas basadas en la tecnología **VPLS (Virtual Private LAN Service)**. Esta tecnología crea una red de nivel 2 (capa Ethernet) transparente y extendida entre todas las **zonas de disponibilidad** de una región.

La red MPLS subyacente garantiza:
- Conectividad entre servicios hasta **100 Gbps**
- Extensión L2 punto a multipunto **transparente** para los clientes
- **Rutas diversificadas** para alta disponibilidad

### VLANs privadas regionales

Cada red virtual es una **VLAN privada** aislada, propagada entre los clústeres de la región:

- Nomenclatura personalizable, direccionamiento IP libre (el cliente elige su plan de direccionamiento)
- Soporte **802.1q** (etiquetado VLAN) y **QinQ / 802.1ad** (doble etiquetado)
- Posibilidad de **modo Trunk**: agregar múltiples VLANs en un único enlace físico
- Propagación selectiva: elección de clústeres objetivo (límite de 20 redes por acción)

### Compartición inter-tenant

Una red privada puede **compartirse entre múltiples tenants** de la misma organización:
- Activación a través de la consola Cloud Temple
- Lista de tenants filtrada por organización y permisos
- Visualización gráfica de la propagación en los clústeres e hipervisores

### Conectividad externa

Los puertos físicos de **1 Gbps / 10 Gbps** (fibra o cobre) permiten conectar:
- Equipos de red alojados en la zona común (firewalls, routers)
- Conexiones IPSEC, MPLS o fibra a sitios on-premise
- Operadores terceros

Estos puertos requieren una **solicitud de servicio** y se entregan bajo presupuesto.

### Circuitos dedicados

Para necesidades de alto ancho de banda con garantía de rendimiento:

| Tipo | Ancho de banda | Compromiso |
|------|---------------|------------|
| Ethernet 1G | 1 Gbps | 36 meses |
| Ethernet 10G | 10 Gbps | 36 meses |
| Fiber Channel 8G | 8 Gbps | 36 meses |
| Fiber Channel 16G | 16 Gbps | 36 meses |

Todos los circuitos dedicados se entregan automáticamente en **dos rutas ópticas diversificadas**.

---

## 2. Acceso a Internet y Direccionamiento Público

### Bloques de direcciones IP públicas

Cloud Temple pone a disposición bloques de **direcciones IP públicas** registradas en el RIPE:
- **IPv4**: bloques desde 1 dirección
- **IPv6**: bloques desde /64 (64 direcciones)

Estas direcciones permiten exponer sus servicios en Internet desde las infraestructuras de Cloud Temple.

### Gestión DNS inverso (PTR)

Para cada dirección IP pública, puede configurar un **registro PTR** personalizado a través de la consola Cloud Temple, permitiendo la resolución DNS inversa de sus servicios.

### Anti-DDoS nativo

La protección **Anti-DDoS** está incluida nativamente en el acceso a Internet de Cloud Temple. Protege sus servicios expuestos contra ataques volumétricos sin configuración adicional.

### BGP y Enrutamiento avanzado

Para organizaciones que requieren un control preciso del enrutamiento:
- Peering **eBGP** disponible para anunciar sus propios prefijos IP
- Configuración de **servidores de ruta** y vecinos BGP
- Soporte de prefijos IPv4 e IPv6
- Compatible con el firewall de su elección (FortiGate, pfSense, etc.)

### Casos de uso Internet

- Exposición de servicios web, API o aplicaciones en Internet
- Acceso a Internet para equipos en housing
- Arquitecturas con firewall dedicado gestionando los flujos entrantes/salientes
- Peering BGP para organizaciones con su propio AS

---

## 3. Comparación Private Backbone vs VPC

| Criterio | Private Backbone | VPC |
|----------|-----------------|-----|
| Nivel de red | L2 (VPLS) | L3 (enrutamiento) |
| Gestión | Manual (experto) | Automatizada (cloud-native) |
| Control de topología | Total | Guiado |
| Caso de uso | Arquitecturas híbridas complejas | Aplicaciones cloud-native |
| Flexibilidad | Máxima | Estándar cloud |

:::tip[VPC para una experiencia cloud-native]
Para una experiencia de red simplificada y automatizada, elija la oferta **[VPC](/network/vpc)**.  
El Private Backbone es recomendado si necesita extensión L2 o control detallado de la topología de red.
:::
