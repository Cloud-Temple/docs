---
title: Backbone Privado
slug: /network/private_backbone
---

# Backbone Privado — Conectividad Avanzada

> **Toma el control total de tu red con conectividad de nivel 2 extendida, diseñada para arquitecturas híbridas y configuraciones a medida.**

El **Backbone Privado** de Cloud Temple es nuestro producto de conectividad histórico, diseñado para expertos. Basado en una infraestructura de red de nivel 2 (VPLS), permite crear redes privadas extendidas entre las zonas de disponibilidad de una región. Es la solución ideal para empresas que desean construir arquitecturas cloud híbridas complejas y mantener un control total sobre su topología de red.

<div class="card-grid">
  <div class="card">
    <h3>Conceptos</h3>
    <p>Arquitectura VPLS, redes privadas regionales, acceso a Internet, direccionamiento público IPv4/IPv6.</p>
    <a href="./private_backbone/concepts" class="card-link">Explorar conceptos →</a>
  </div>
  <div class="card">
    <h3>Guía de inicio rápido</h3>
    <p>Crea tu primera red privada y configura tu acceso a Internet en unos pocos pasos.</p>
    <a href="./private_backbone/quickstart" class="card-link">Comenzar →</a>
  </div>
  <div class="card">
    <h3>Tutoriales</h3>
    <p>Configura un FortiGate o pfSense con BGP para gestionar tu conectividad externa.</p>
    <a href="./private_backbone/tutorials" class="card-link">Ver tutoriales →</a>
  </div>
</div>

---

## Descripción del producto

El **Private Backbone** proporciona un conjunto completo de servicios de bajo nivel para interconectar y exponer tus infraestructuras en una nube soberana. Se compone de dos pilares:

- **Redes Privadas (VPLS)**: Creación de redes de nivel 2 extendidas y aisladas entre zonas de disponibilidad, ideal para arquitecturas híbridas complejas.
- **Acceso a Internet**: Conectividad a Internet de alto rendimiento con asignación de direcciones IP públicas (IPv4/IPv6) y protección Anti-DDoS nativa.

:::tip[Para una experiencia de red cloud-native]
Para una gestión de red más automatizada, nuestro producto **[VPC (Virtual Private Cloud)](/network/vpc)** es la solución recomendada.
:::

---

## Métricas clave

| Beneficio | Valor |
|----------|--------|
| Rendimiento entre servicios | Hasta **100 Gbps** |
| Conectividad externa | Ethernet **1G / 10G** |
| Direccionamiento público | **IPv4 e IPv6** disponibles |
| Extensión de red | Nivel 2 transparente mediante **VPLS** |
| Aislamiento | Segmentación **VLAN** completa |
| SLA de disponibilidad de red | **99,99 %** |

---

## Funcionalidades

| Funcionalidad | Descripción |
|----------------|-------------|
| VLANs privadas regionales | Redes virtuales extendidas inter-AZ |
| Conectividad externa | Puertos 1G/10G para IPSEC, MPLS, Fibra |
| Circuitos dedicados | Ethernet 1G/10G con caminos diversificados |
| Etiquetado VLAN | Soporte 802.1q y QinQ (802.1ad) |
| Compartición entre inquilinos | Redes compartidas dentro de una misma organización |
| Modo Trunk | Agregación de VLANs en un solo enlace |
| IPs públicas IPv4/IPv6 | Asignación por unidad, gestión de DNS inverso (PTR) |
| Protección Anti-DDoS | Nativa en el acceso a Internet |

---

## Arquitectura

La infraestructura se basa en una red **MPLS** con conectividad entre servicios de hasta 100 Gbps:

- Extensión L2 punto-a-multipunto transparente (VPLS)
- Puertos de conexión externa (1G/10G) para equipos en housing o operadores terceros
- Caminos diversificados automáticos para los circuitos dedicados

### Integraciones con Cloud Temple

Los siguientes servicios se basan en el Private Backbone:

| Servicio | Tipo |
|---------|------|
| IaaS OpenSource | Compute |
| IaaS VMware | Compute |
| PaaS OpenShift | Contenedores |
| Housing | Datacenter |
| VPC | Networking |

---

## Seguridad y Cumplimiento

**Certificaciones:** SecNumCloud 3.2 · HDS V1 · ISO 27001:2022 · ISAE 3402 · C5:2020

- Cifrado físico de los enlaces entre Zonas de Disponibilidad
- Aislamiento de red y separación del tráfico
- Residencia de datos en Francia (FR1)

---

## Precios

| Servicio | SKU |
|---------|-----|
| VLAN privada inter-AZ | `csp:(region):network:vlan:v1` |
| Circuito dedicado Ethernet 1G | `csp:(region):network:epl:1g:v1` |
| Circuito dedicado Ethernet 10G | `csp:(region):network:epl:10g:v1` |
| IP pública IPv4 | `csp:(region):network:ipv4:v1` |
| IP pública IPv6 | `csp:(region):network:ipv6:v1` |

Los circuitos dedicados se entregan sobre **dos caminos ópticos diversificados** con un compromiso mínimo de **36 meses**.

→ **[Precios públicos en el sitio Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/)**
