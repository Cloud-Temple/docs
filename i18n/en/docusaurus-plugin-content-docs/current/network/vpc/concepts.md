---
title: Concepts
---

# VPC Concepts

## Definition and Positioning

The **VPC (Virtual Private Cloud)** is a managed network service allowing the creation of isolated, secure, and controllable private networks via the Cloud Temple console. It is designed to offer a cloud-native experience, automating network configuration and security.

As of January 2026, VPC private networks allow interconnection between **IaaS Open Source** and **IaaS VMware** services. Interconnection with **Bare Metal** servers will be available in a future update.

### VPC vs Private Backbone

Cloud Temple offers two network consumption modes:

*   **Private Backbone (Legacy Offering)**:
    *   Ideal for experts seeking maximum autonomy and specific network configurations (Extended L2).
    *   Requires manual installation and management of security equipment (firewalls, routers).
    *   Manual management of the addressing plan.

*   **VPC (New Offering)**:
    *   Designed for a cloud-native and automated experience.
    *   Integrated security (Gateway, Firewalling, NAT) without third-party equipment management.
    *   Managed service with high availability guaranteed by Cloud Temple.
    *   Ideal for modern projects, DevOps, and web application hosting.

## Architecture

The VPC relies on redundant and highly available architecture, leveraging Cloud Temple's low-latency inter-AZ backbone.

### Key Components

*   **VPC Router**: At the heart of each VPC, it manages dynamic routing between different Private Networks (east-west traffic).
*   **Private Networks (VLANs)**: Layer 2 network segments connecting your resources (VMs, servers). They natively extend across multiple Availability Zones (AZ) without IP reconfiguration.
*   **External Gateway**: Optional entry and exit point for Internet traffic (north-south). It integrates NAT and flow management capabilities.

### Isolation and Security

The VPC guarantees strict isolation:
*   Each VPC is an independent network entity.
*   Deployment is done on dedicated resources (for IaaS Open Source clients), ensuring no network resources are shared.
*   The service is currently undergoing **SecNumCloud** qualification.

## Main Features

| Feature | Description | Availability |
|---------|-------------|--------------|
| **Regional Private Networks** | Multi-AZ deployment and transparent L2 propagation. | Available |
| **Native Routing** | Automatic communication between private networks of the same VPC. | Available |
| **IPAM & DHCP** | Automatic IP pool management and dynamic assignment. | Available |
| **Internet Access** | Configurable via Gateway (NAT, DNAT, Controlled Egress). | Available |
| **Floating IPs** | Flexible exposure of services on the Internet. | Available |
| **Micro-segmentation** | Network policy groups for advanced security. | H1 2026 |
| **Observability** | Network performance logs and metrics. | H1 2026 |
| **DNS Service** | Internal and external name resolution. | H2 2026 |
| **VPN & Cloud Connect** | Secure connectivity to on-premise and public clouds. | H2 2026 |

## Use Cases

*   **Critical application hosting** requiring strong isolation.
*   **Multi-project segmentation** (Prod, Pre-prod, Dev).
*   **Test environments** ephemeral and isolated.
*   **Sovereign network foundations** for sensitive data.
