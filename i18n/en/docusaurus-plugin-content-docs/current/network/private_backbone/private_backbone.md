---
title: Private Backbone
slug: /network/private_backbone
---

# Private Backbone — Advanced Connectivity

> **Take full control of your network with extended level 2 connectivity, designed for hybrid architectures and custom configurations.**

Cloud Temple's **Private Backbone** is our legacy connectivity product, designed for experts. Based on a level 2 (VPLS) network infrastructure, it allows you to create extended private networks between availability zones within a region. It is the ideal solution for companies looking to build complex hybrid cloud architectures and maintain total control over their network topology.

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>VPLS architecture, regional private networks, Internet access, IPv4/IPv6 public addressing.</p>
    <a href="./private_backbone/concepts" class="card-link">Explore concepts →</a>
  </div>
  <div class="card">
    <h3>Getting Started</h3>
    <p>Create your first private network and configure your Internet access in a few steps.</p>
    <a href="./private_backbone/quickstart" class="card-link">Get Started →</a>
  </div>
  <div class="card">
    <h3>Tutorials</h3>
    <p>Configure a FortiGate or pfSense with BGP to manage your external connectivity.</p>
    <a href="./private_backbone/tutorials" class="card-link">View tutorials →</a>
  </div>
</div>

---

## Product Overview

The **Private Backbone** provides a comprehensive set of low-level services to interconnect and expose your infrastructures in a sovereign cloud. It consists of two pillars:

- **Private Networks (VPLS)**: Creation of extended and isolated level 2 networks between availability zones, ideal for complex hybrid architectures.
- **Internet Access**: High-performance Internet connectivity with public IP address allocation (IPv4/IPv6) and native Anti-DDoS protection.

:::tip[For a cloud-native networking experience]
For more automated network management, our **[VPC (Virtual Private Cloud)](/network/vpc)** product is the recommended solution.
:::

---

## Key Metrics

| Benefit | Value |
|----------|--------|
| Inter-service performance | Up to **100 Gbps** |
| External connectivity | **1G / 10G** Ethernet |
| Public addressing | **IPv4 & IPv6** available |
| Network extension | Transparent level 2 via **VPLS** |
| Isolation | Full **VLAN** segmentation |
| Network availability SLA | **99.99 %** |

---

## Features

| Feature | Description |
|----------------|-------------|
| Regional private VLANs | Extended inter-AZ virtual networks |
| External connectivity | 1G/10G ports for IPSEC, MPLS, Fiber |
| Dedicated circuits | 1G/10G Ethernet with diverse paths |
| VLAN Tagging | 802.1q and QinQ (802.1ad) support |
| Inter-tenant sharing | Shared networks within the same organization |
| Trunk mode | VLAN aggregation on a single link |
| IPv4/IPv6 public IPs | Unit allocation, reverse DNS (PTR) management |
| Anti-DDoS protection | Native on Internet access |

---

## Architecture

The infrastructure is based on an **MPLS** network with inter-service connectivity up to 100 Gbps:

- Transparent L2 point-to-multipoint extension (VPLS)
- External connection ports (1G/10G) for housing equipment or third-party operators
- Automatic diverse paths for dedicated circuits

### Cloud Temple Integrations

The following services rely on the Private Backbone:

| Service | Type |
|---------|------|
| OpenSource IaaS | Compute |
| VMware IaaS | Compute |
| OpenShift PaaS | Containers |
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
| Inter-AZ private VLAN | `csp:(region):network:vlan:v1` |
| 1G Ethernet dedicated circuit | `csp:(region):network:epl:1g:v1` |
| 10G Ethernet dedicated circuit | `csp:(region):network:epl:10g:v1` |
| IPv4 public IP | `csp:(region):network:ipv4:v1` |
| IPv6 public IP | `csp:(region):network:ipv6:v1` |

Dedicated circuits are delivered on **two diverse optical paths** with a minimum commitment of **36 months**.

→ **[Public pricing on the Cloud Temple website](https://www.cloud-temple.com/en/our-public-rates/)**
