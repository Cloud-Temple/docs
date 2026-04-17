---
title: Private Backbone
slug: /network/private_backbone
---

# Private Backbone — Conectividad Avanzada

> **Tome el control total de su red con conectividad de nivel 2 extendida, diseñada para arquitecturas híbridas y configuraciones personalizadas.**

El **Private Backbone** de Cloud Temple es nuestra oferta de conectividad histórica, diseñada para expertos. Basada en una infraestructura de red de nivel 2 (VPLS), permite crear redes privadas extendidas entre las zonas de disponibilidad de una región. Es la solución ideal para las organizaciones que desean construir arquitecturas cloud híbridas complejas y mantener un control total sobre su topología de red.

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Arquitectura VPLS, redes privadas regionales, acceso a Internet, direccionamiento público IPv4/IPv6.</p>
    <a href="./concepts" class="card-link">Explorar los conceptos →</a>
  </div>
  <div class="card">
    <h3>Guía de inicio</h3>
    <p>Cree su primera red privada y configure su acceso a Internet en pocos pasos.</p>
    <a href="./quickstart" class="card-link">Empezar →</a>
  </div>
  <div class="card">
    <h3>Tutoriales</h3>
    <p>Configure FortiGate o pfSense con BGP para gestionar su conectividad externa.</p>
    <a href="./tutorials" class="card-link">Ver tutoriales →</a>
  </div>
</div>

---

## Presentación del servicio

El **Private Backbone** proporciona un conjunto completo de servicios de bajo nivel para interconectar y exponer sus infraestructuras en una nube soberana. Se compone de dos pilares:

- **Redes Privadas (VPLS)**: Creación de redes de nivel 2 extendidas y aisladas entre las zonas de disponibilidad, ideal para arquitecturas híbridas complejas.
- **Acceso a Internet**: Conectividad a Internet de alto rendimiento con asignación de direcciones IP públicas (IPv4/IPv6) y protección Anti-DDoS nativa.

:::tip[Para una experiencia de red cloud-native]
Para una gestión de red más automatizada, nuestra oferta **[VPC (Virtual Private Cloud)](/network/vpc)** es la solución recomendada.
:::

---

## Métricas clave

| Beneficio | Valor |
|-----------|-------|
| Rendimiento entre servicios | Hasta **100 Gbps** |
| Conectividad externa | Ethernet **1G / 10G** |
| Direccionamiento público | **IPv4 e IPv6** disponibles |
| Extensión de red | Nivel 2 transparente vía **VPLS** |
| Aislamiento | Segmentación **VLAN** completa |
| SLA de disponibilidad de red | **99,99 %** |

---

## Funcionalidades

| Funcionalidad | Descripción |
|---------------|-------------|
| VLANs privadas regionales | Redes virtuales extendidas inter-AZ |
| Conectividad externa | Puertos 1G/10G para IPSEC, MPLS, Fibra |
| Circuitos dedicados | Ethernet 1G/10G con rutas diversificadas |
| VLAN Tagging | Soporte 802.1q y QinQ (802.1ad) |
| Compartición inter-tenant | Redes compartidas dentro de la misma organización |
| Modo Trunk | Agregación de VLANs en un único enlace |
| IPs públicas IPv4/IPv6 | Asignación unitaria, gestión DNS inverso (PTR) |
| Protección Anti-DDoS | Nativa en el acceso a Internet |

---

## Arquitectura

La infraestructura se basa en una red **MPLS** con conectividad entre servicios de hasta 100 Gbps:

- Extensión L2 punto a multipunto transparente (VPLS)
- Puertos de conexión externa (1G/10G) para equipos en housing u operadores terceros
- Rutas diversificadas automáticas para circuitos dedicados

### Integraciones Cloud Temple

Los siguientes servicios se apoyan en el Private Backbone:

| Servicio | Tipo |
|----------|------|
| IaaS OpenSource | Compute |
| IaaS VMware | Compute |
| PaaS OpenShift | Contenedores |
| Housing | Centro de datos |
| VPC | Redes |

---

## Seguridad y Cumplimiento

**Certificaciones:** SecNumCloud 3.2 · HDS V1 · ISO 27001:2022 · ISAE 3402 · C5:2020

- Cifrado físico de los enlaces entre Zonas de Disponibilidad
- Aislamiento de red y separación del tráfico
- Residencia de datos en Francia (FR1)

---

## Precios

| Servicio | SKU |
|----------|-----|
| VLAN privada inter-AZ | `csp:(region):network:vlan:v1` |
| Circuito Ethernet 1G dedicado | `csp:(region):network:epl:1g:v1` |
| Circuito Ethernet 10G dedicado | `csp:(region):network:epl:10g:v1` |
| Dirección IPv4 pública | `csp:(region):network:ipv4:v1` |
| Dirección IPv6 pública | `csp:(region):network:ipv6:v1` |

Los circuitos dedicados se entregan en **dos rutas ópticas diversificadas** con un compromiso mínimo de **36 meses**.

→ **[Precios oficiales en cloud-temple.com](https://www.cloud-temple.com/produits/)**
