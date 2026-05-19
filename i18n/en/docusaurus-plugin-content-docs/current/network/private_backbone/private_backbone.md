---
title: Private Backbone
slug: /network/private_backbone
---

# Private Backbone — Advanced Connectivity

> **Take full control of your network with extended Layer 2 connectivity, designed for hybrid architectures and custom configurations.**

Cloud Temple's **Private Backbone** is our legacy connectivity offering, built for experts. Based on a Layer 2 network infrastructure (VPLS), it enables the creation of extended private networks between availability zones within a region. It is the ideal solution for organizations seeking to build complex hybrid cloud architectures while retaining full control over their network topology.

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>VPLS architecture, regional private networks, Internet access, public IPv4/IPv6 addressing.</p>
    <a href="./private_backbone/concepts" class="card-link">Explore concepts →</a>
  </div>
  <div class="card">
    <h3>Getting Started</h3>
    <p>Create your first private network and configure your Internet access in a few steps.</p>
    <a href="./private_backbone/quickstart" class="card-link">Get started →</a>
  </div>
  <div class="card">
    <h3>Tutorials</h3>
    <p>Configure FortiGate or pfSense with BGP to manage your external connectivity.</p>
    <a href="./private_backbone/tutorials" class="card-link">View tutorials →</a>
  </div>
</div>

---

## Service Overview

The **Private Backbone** provides a complete set of low-level services to interconnect and expose your infrastructure within a sovereign cloud. It is built on two pillars:

- **Private Networks (VPLS)**: Creation of extended, isolated Layer 2 networks between availability zones — ideal for complex hybrid architectures.
- **Internet Access**: High-performance Internet connectivity with public IP address allocation (IPv4/IPv6) and native Anti-DDoS protection.

:::tip[For a cloud-native network experience]
For more automated network management, our **[VPC (Virtual Private Cloud)](/network/vpc)** offering is the recommended solution.
:::

---

## Key Metrics

| Benefit | Value |
|---------|-------|
| Inter-service performance | Up to **100 Gbps** |
| External connectivity | **1G / 10G** Ethernet |
| Public addressing | **IPv4 & IPv6** available |
| Network extension | Transparent Layer 2 via **VPLS** |
| Isolation | Full **VLAN** segmentation |
| Network availability SLA | **99.99%** |

---

## Features

| Feature | Description |
|---------|-------------|
| Regional private VLANs | Extended inter-AZ virtual networks |
| External connectivity | 1G/10G ports for IPSEC, MPLS, Fibre |
| Dedicated circuits | Ethernet 1G/10G with diversified paths |
| VLAN Tagging | 802.1q and QinQ (802.1ad) support |
| Inter-tenant sharing | Shared networks within the same organization |
| Trunk mode | VLAN aggregation over a single link |
| Public IPv4/IPv6 IPs | Unit allocation, reverse DNS (PTR) management |
| Anti-DDoS protection | Native on Internet access |

---

## Architecture

The infrastructure is built on an **MPLS** network with inter-service connectivity up to 100 Gbps:

- Transparent point-to-multipoint L2 extension (VPLS)
- External connection ports (1G/10G) for housed equipment or third-party operators
- Automatic diversified paths for dedicated circuits

### Cloud Temple Integrations

The following services rely on the Private Backbone:

| Service | Type |
|---------|------|
| IaaS OpenSource | Compute |
| IaaS VMware | Compute |
| PaaS OpenShift | Containers |
| Housing | Datacenter |
| VPC | Networking |

---

## Security & Compliance

**Certifications:** SecNumCloud 3.2 · HDS V1 · ISO 27001:2022 · ISAE 3402 · C5:2020

- Physical encryption of links between Availability Zones
- Network isolation and traffic separation
- Data residency in France (FR1)

---

## Pricing

| Service | SKU |
|---------|-----|
| Private inter-AZ VLAN | `csp:(region):network:vlan:v1` |
| Dedicated Ethernet 1G circuit | `csp:(region):network:epl:1g:v1` |
| Dedicated Ethernet 10G circuit | `csp:(region):network:epl:10g:v1` |
| Public IPv4 address | `csp:(region):network:ipv4:v1` |
| Public IPv6 address | `csp:(region):network:ipv6:v1` |

Dedicated circuits are delivered on **two diversified optical paths** with a minimum commitment of **36 months**.

→ **[Official pricing at cloud-temple.com](https://www.cloud-temple.com/produits/)**
