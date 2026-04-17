---
title: Concepts
---

# Concepts — Private Backbone

The Private Backbone is built on two complementary pillars: **regional private networks** (VPLS technology) and **Internet connectivity** (public addressing, BGP, Anti-DDoS).

---

## 1. Private Networks (VPLS)

### Extended L2 Architecture

Cloud Temple offers private networks based on **VPLS (Virtual Private LAN Service)** technology. This technology creates a transparent, extended Layer 2 (Ethernet) network between all **availability zones** in a region.

The underlying MPLS network provides:
- Inter-service connectivity up to **100 Gbps**
- **Transparent** point-to-multipoint L2 extension for clients
- **Diversified paths** for high availability

### Regional Private VLANs

Each virtual network is an isolated **private VLAN**, propagated across clusters in the region:

- Customizable naming, free IP addressing (client chooses their addressing plan)
- **802.1q** (VLAN tagging) and **QinQ / 802.1ad** (double tagging) support
- **Trunk mode** option: aggregate multiple VLANs over a single physical link
- Selective propagation: choose target clusters (limit of 20 networks per action)

### Inter-Tenant Sharing

A private network can be **shared between multiple tenants** within the same organization:
- Activation via the Cloud Temple console
- Tenant list filtered by organization and permissions
- Graphical view of propagation across clusters and hypervisors

### External Connectivity

Physical **1 Gbps / 10 Gbps** ports (fibre or copper) allow connection of:
- Network equipment housed in the common zone (firewalls, routers)
- IPSEC, MPLS or fibre links to on-premise sites
- Third-party operators

These ports are subject to a **service request** and are delivered on quote.

### Dedicated Circuits

For high-bandwidth requirements with guaranteed throughput:

| Type | Throughput | Commitment |
|------|-----------|------------|
| Ethernet 1G | 1 Gbps | 36 months |
| Ethernet 10G | 10 Gbps | 36 months |
| Fiber Channel 8G | 8 Gbps | 36 months |
| Fiber Channel 16G | 16 Gbps | 36 months |

All dedicated circuits are automatically delivered on **two diversified optical paths**.

---

## 2. Internet Access & Public Addressing

### Public IP Address Blocks

Cloud Temple provides blocks of **public IP addresses** registered with RIPE:
- **IPv4**: blocks from 1 address
- **IPv6**: blocks from /64 (64 addresses)

These addresses allow you to expose your services on the Internet from Cloud Temple's infrastructure.

### Reverse DNS Management (PTR)

For each public IP address, you can configure a custom **PTR record** via the Cloud Temple console, enabling reverse DNS resolution for your services.

### Native Anti-DDoS

**Anti-DDoS** protection is natively included on Cloud Temple Internet access. It protects your exposed services against volumetric attacks without any additional configuration.

### BGP & Advanced Routing

For organizations requiring fine-grained routing control:
- **eBGP** peering available to announce your own IP prefixes
- Configuration of **route servers** and BGP neighbors
- IPv4 and IPv6 prefix support
- Compatible with your firewall of choice (FortiGate, pfSense, etc.)

### Internet Use Cases

- Exposing web, API, or application services on the Internet
- Internet access for housed equipment
- Architectures with a dedicated firewall managing inbound/outbound flows
- BGP peering for organizations with their own AS

---

## 3. Private Backbone vs VPC Comparison

| Criterion | Private Backbone | VPC |
|-----------|-----------------|-----|
| Network level | L2 (VPLS) | L3 (routing) |
| Management | Manual (expert) | Automated (cloud-native) |
| Topology control | Total | Guided |
| Use case | Complex hybrid architectures | Cloud-native applications |
| Flexibility | Maximum | Cloud standard |

:::tip[VPC for a cloud-native experience]
For a simplified and automated network experience, choose the **[VPC](/network/vpc)** offering.  
Private Backbone is recommended if you need L2 extension or fine-grained network topology control.
:::
