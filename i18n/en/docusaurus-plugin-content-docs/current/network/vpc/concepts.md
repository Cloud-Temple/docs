---
title: Concepts
---

# VPC Concepts

## Definition and Positioning

The **VPC (Virtual Private Cloud)** is a managed networking service that enables the creation of isolated, secure, and manageable private networks via the Cloud Temple console. It is designed to provide a cloud-native experience, automating network and security configuration.

As of today (Janvier 2026), VPC private networks enable the interconnection of **Open Source IaaS** and **VMware IaaS** services. Interconnection with **Bare Metal** servers will be available in a future update.

### VPC vs Private Backbone

Cloud Temple offers two network consumption modes:

* **Private Backbone (Legacy Offer)** :
  * Ideal for experts seeking maximum autonomy and specific network configurations (extended L2).
  * Requires manual installation and management of security equipment (firewalls, routers).
  * Manual management of the addressing scheme.

* **VPC (New Product)** :
  * Designed for a cloud-native and automated experience.
  * Integrated security (Gateway, Firewalling, NAT) without managing third-party equipment.
  * Managed service with high availability guaranteed by Cloud Temple.
  * Ideal for modern projects, DevOps, and web application hosting.

## Architecture

The VPC relies on a redundant and highly available architecture, leveraging Cloud Temple's low-latency inter-AZ backbone.

### Key Components

* **VPC Router** : At the core of each VPC, it manages dynamic routing between different Private Networks (trafic est-ouest).
* **Private Networks (VLANs)** : Layer 2 network segments connecting your resources (VMs, serveurs). They natively span across multiple availability zones (AZ) without IP reconfiguration.
* **External Gateway (External Gateway)** : Optional entry and exit point for Internet traffic (nord-sud). It integrates NAT and traffic flow management features.

### Isolation and Security

The VPC ensures strict isolation:

* Each VPC is an independent network entity.
* Deployment occurs on dedicated resources (for Open Source IaaS clients), ensuring that no network resources are shared.
* The service is **SecNumCloud** certified.

## Core Features

| Feature | Description | Availability |
|----------------|-------------|---------------|
| **Regional Private Networks** | Multi-AZ deployment and transparent L2 propagation. | Available |
| **Native Routing** | Automatic communication between private networks within the same VPC. | Available |
| **IPAM & DHCP** | Automatic address pool management and dynamic assignment. | Available |
| **Internet Access** | Configurable via the Gateway (NAT, DNAT, controlled egress). | Available |
| **Floating IPs** | Flexible exposure of services to the Internet. | Available |
| **Micro-segmentation** | Network policy groups for advanced security. | S1 2026 |
| **Observability** | Network performance logs and metrics. | S1 2026 |
| **DNS Service** | Internal and external name resolution. | S2 2026 |
| **VPN & Cloud Connect** | Secure connectivity to on-premises and public clouds. | S2 2026 |

## Use Cases

* **Critical application hosting** requiring strong isolation.
* **Multi-project segmentation** (Prod, Pre-prod, Dev).
* **Test environments** that are ephemeral and isolated.
* **Sovereign network infrastructure** for sensitive data.