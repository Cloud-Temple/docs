---
title: Concepts
---

<a id="concepts--private-backbone"></a>

## Introduction

The **Private Backbone** is Cloud Temple's historical connectivity offering, designed for network experts. Built on a Layer 2 (VPLS) infrastructure, it lets you create extended private networks between the availability zones of a region and expose your services on the Internet. It is suited to complex hybrid cloud architectures, when you want to keep full control over your network topology and manage your own security appliances.

The Private Backbone rests on two pillars, each detailed on its own page:

- regional **[private networks](../private_network/concepts.md)** (VPLS technology);
- **[Internet access](../internet/concepts.md)** (public addressing, BGP, Anti-DDoS).

<a id="3-comparaison-private-backbone-vs-vpc"></a>

### Private Backbone vs VPC comparison

| Criterion          | Private Backbone                  | VPC                        |
|--------------------|-----------------------------------|----------------------------|
| Network layer      | L2 (VPLS)                         | L3 (routing)               |
| Management         | Manual (expert)                   | Automated (cloud-native)   |
| Topology control   | Full                              | Guided                     |
| Use cases          | Complex hybrid architectures      | Cloud-native applications  |
| Flexibility        | Maximum                           | Cloud standard             |

:::tip[VPC for a cloud-native experience]
For a simplified and automated networking experience, choose the **[VPC](/network/vpc)** product.
The Private Backbone is recommended if you need L2 extension or fine-grained control over the network topology.
:::

### Audiences and use cases

- **Network architects**: hybrid cloud architectures with L2 and L3 extension.
- **Multi-site organizations**: extending a corporate network across availability zones.
- **Sensitive data**: private communication, with no exposure on the Internet.
- **Service exposure**: web, API or application services published on the Internet behind your own firewall.
- **Housing**: Internet connection and private network for hosted equipment.

## Benefits

| Benefit                      | Description                                                                                |
|------------------------------|--------------------------------------------------------------------------------------------|
| Transparent L2 extension     | VPLS extends a Layer 2 network across availability zones, like a single LAN.               |
| Isolation                    | Each private VLAN is isolated; you have full control over access.                          |
| External connectivity        | 1 Gbps / 10 Gbps ports connect your sites, carriers or hosted equipment.                   |
| Dedicated circuits           | Links with guaranteed throughput, delivered over two diverse optical paths.                |
| Inter-tenant sharing         | A private network can be shared between the tenants of the same organization.             |

## Features

| Feature                     | Description                                                                              |
|-----------------------------|------------------------------------------------------------------------------------------|
| Regional private VLANs      | Virtual networks extended across availability zones.                                     |
| VLAN tagging and Trunk mode | 802.1q and QinQ (802.1ad) support, aggregation of VLANs over a single link.              |
| Inter-tenant sharing        | Networks shared within the same organization.                                            |
| External connectivity       | 1 Gbps / 10 Gbps ports for IPSEC, MPLS or fibre.                                         |
| Dedicated circuits          | Ethernet 1G / 10G and Fiber Channel 8G / 16G.                                            |
| Public IPs                  | Public IPv4 and IPv6 addresses to expose your services.                                  |
| Reverse DNS (PTR)           | Customizable PTR record for each public IP address.                                      |
| Native Anti-DDoS            | Protection included on Internet access against volumetric attacks.                       |
| eBGP peering                | Announcement of your own IPv4 and IPv6 prefixes.                                         |

<a id="1-réseaux-privés-vpls"></a>

## Architecture

### Extended L2 architecture

Private networks are based on **VPLS (Virtual Private LAN Service)** technology. It creates a transparent, extended Layer 2 (Ethernet layer) network across all the **availability zones** of a region.

The underlying MPLS network provides:

- inter-service connectivity up to **100 Gbps**;
- **transparent** point-to-multipoint L2 extension for customers;
- **diverse paths** for high availability.

### Regional private VLANs

Each virtual network is an isolated **private VLAN**, propagated across the clusters of the region:

- customizable naming, free IP addressing (you choose your addressing plan);
- **802.1q** (VLAN tagging) and **QinQ / 802.1ad** (double tagging) support;
- **Trunk mode** option: aggregate several VLANs over a single physical link;
- selective propagation: choice of target clusters (limit of 20 networks per action).

### Inter-tenant sharing

A private network can be **shared between several tenants** of the same organization:

- activation via the Cloud Temple Console;
- tenant list filtered by organization and permissions;
- graphical view of propagation across clusters and hypervisors.

### External connectivity

Physical **1 Gbps / 10 Gbps** ports (fibre or copper) make it possible to connect:

- network equipment hosted in the common area (firewalls, routers);
- IPSEC, MPLS or fibre links to on-premise sites;
- third-party carriers.

These ports are subject to a **service request** and are delivered on quotation.

<a id="2-accès-internet--adressage-public"></a>

### Internet access

#### Public IP address blocks

Blocks of **public IP addresses** registered with RIPE are made available:

- **IPv4**: blocks starting from 1 address;
- **IPv6**: blocks starting from /64.

These addresses let you expose your services on the Internet from Cloud Temple infrastructures.

#### Reverse DNS (PTR) management

For each public IP address, you can configure a custom **PTR record** via the Console, for reverse DNS resolution of your services.

#### Native Anti-DDoS

**Anti-DDoS** protection is natively included on Internet access. It protects your exposed services against volumetric attacks, with no additional configuration.

#### BGP & advanced routing

For fine-grained routing control:

- **eBGP** peering to announce your own IP prefixes;
- configuration of **route servers** and BGP neighbors;
- support for IPv4 and IPv6 prefixes;
- compatible with the firewalls of your choice (FortiGate, pfSense, etc.).

#### Internet use cases

- Exposure of web, API or application services on the Internet.
- Internet connection for housed equipment.
- Architectures with a dedicated firewall handling inbound and outbound traffic.
- BGP peering for organizations with their own AS.

### Integration with Cloud Temple services

The Private Backbone is the network foundation of Cloud Temple services. IaaS OpenSource, IaaS VMware, PaaS OpenShift, Housing and VPC can consume public IP addresses and integrate with private networks.

## Regions and availability zones

The Private Backbone is available in the FR1 region. Its private networks extend across all the availability zones of the region.

## Technical specifications

| Parameter                  | Value                                         |
|----------------------------|-----------------------------------------------|
| VM network performance     | 10 Gbps maximum                               |
| Inter-service connectivity | Up to 100 Gbps                                |
| External connectivity      | 1 / 10 Gbps ports                             |
| Public addressing          | IPv4 from one address, IPv6 from /64          |

### Dedicated circuits

For high-bandwidth needs with guaranteed throughput:

| Type              | Throughput | Commitment |
|-------------------|---------|------------|
| Ethernet 1G       | 1 Gbps     | 36 months  |
| Ethernet 10G      | 10 Gbps    | 36 months  |
| Fiber Channel 8G  | 8 Gbps     | 36 months  |
| Fiber Channel 16G | 16 Gbps    | 36 months  |

All dedicated circuits are delivered over **two diverse optical paths**.

### Limits

- Propagation of a private network is limited to a maximum of 20 networks per action.
- The network performance of a VM is limited to 10 Gbps.

## Security and compliance

The Private Backbone is certified HDS and ISO 27001.

- **Isolation**: each private VLAN is isolated, and sharing between tenants is limited to the same organization.
- **Protection**: Internet access includes Anti-DDoS protection against volumetric attacks.

## Service availability

The network availability target is 99.99%, measured over one month.

## Responsibilities

The split of responsibilities between the customer and Cloud Temple is detailed in the [network responsibility matrix (RACI)](../../contractual/network/raci.md).

## Reversibility

Not applicable: the Private Backbone carries your network traffic and does not retain any customer data. Your addressing plan and the configuration of your equipment remain under your control.

## Pricing

Private Backbone pricing is published on the product page on the Cloud Temple website:
[Private Backbone — pricing](https://www.cloud-temple.com/produits/private-backbone/).
