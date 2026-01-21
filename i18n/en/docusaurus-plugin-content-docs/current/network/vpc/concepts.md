---
title: Concepts
---

# VPC Concepts

## Definition and Positioning

The **VPC (Virtual Private Cloud)** is a managed networking service that enables the creation of isolated, secure, and controllable private networks via the Cloud Temple console. Designed for a cloud-native experience, it automates network and security configuration.

As of today (January 2026), VPC private networks allow connectivity between **Open Source IaaS** and **VMware IaaS** services. Connectivity with **Bare Metal** servers will be available in a future update.

### VPC vs Private Backbone

Cloud Temple offers two network consumption modes:

*   **Private Backbone (Legacy Offering)**:
    *   Ideal for experts seeking maximum autonomy and specific network configurations (extended L2).
    *   Requires manual installation and management of security equipment (firewalls, routers).
    *   Manual management of IP addressing.

*   **VPC (New Offering)**:
    *   Designed for a cloud-native and automated experience.
    *   Built-in security (Gateway, Firewalling, NAT) without the need to manage third-party equipment.
    *   Fully managed service with high availability guaranteed by Cloud Temple.
    *   Ideal for modern projects, DevOps workflows, and hosting web applications.

## Architecture

The VPC is built on a redundant and highly available architecture, leveraging Cloud Temple's low-latency inter-AZ backbone.

### Key Components

*   **VPC Router**: At the heart of each VPC, it manages dynamic routing between different Private Networks (east-west traffic).
*   **Private Networks (VLANs)**: Layer 2 network segments connecting your resources (VMs, servers). They natively span multiple Availability Zones (AZs) without requiring IP reconfiguration.
*   **External Gateway**: Optional entry and exit point for Internet traffic (north-south). It includes NAT capabilities and traffic flow management.

### Isolation and Security

The VPC ensures strict isolation:
*   Each VPC is an independent network entity.
*   Deployment occurs on dedicated resources (for Open Source IaaS clients), ensuring no network resources are shared.
*   The service is currently undergoing **SecNumCloud** qualification.

## Key Features

| Feature | Description | Availability |
|--------|-------------|--------------|
| **Regional Private Networks** | Multi-AZ deployment and transparent L2 propagation. | Available |
| **Native Routing** | Automatic communication between private networks within the same VPC. | Available |
| **IPAM & DHCP** | Automatic management of address pools and dynamic assignment. | Available |
| **Internet Access** | Configurable via Gateway (NAT, DNAT, egress control). | Available |
| **Floating IPs** | Flexible exposure of services to the Internet. | Available |
| **Micro-segmentation** | Network policy groups for advanced security. | Q1 2026 |
| **Observability** | Network performance logs and metrics. | Q1 2026 |
| **Service DNS** | Internal and external name resolution. | Q2 2026 |
| **VPN & Cloud Connect** | Secure connectivity to on-premise environments and public clouds. | Q2 2026 |

## Use Cases

*   Critical application hosting requiring strong isolation.
*   Multi-project segmentation (Prod, Pre-prod, Dev).
*   Ephemeral and isolated test environments.
*   Sovereign networking foundations for sensitive data.