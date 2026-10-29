---
title: Concepts
---

<a id="concepts-vpc"></a>
<a id="définition-et-positionnement"></a>

## Introduction

The **VPC (Virtual Private Cloud)** is a managed networking service for creating isolated, secure private networks that can be managed from the Cloud Temple Console. It offers a cloud-native experience: network and security configuration is automated, with no network equipment to install or manage.

The VPC private networks interconnect the **IaaS OpenSource**, **IaaS VMware** and **VM Instances** services.

### VPC vs Private Backbone

Two network consumption modes are offered:

* **Private Backbone (legacy offering)**:
  * ideal for experts seeking maximum autonomy and specific network configurations (extended L2);
  * requires manual installation and management of security equipment (firewalls, routers);
  * manual management of the addressing plan.

* **VPC**:
  * designed for a cloud-native, automated experience;
  * built-in security (gateway, filtering, NAT) with no third-party equipment to manage;
  * managed, highly available service;
  * ideal for modern projects, DevOps and web application hosting.

<a id="cas-dusage"></a>

### Audiences and use cases

* **Critical application hosting** requiring strong isolation.
* **Multi-project segmentation** (production, pre-production, development).
* **Test environments** that are ephemeral and isolated.
* **Sovereign network foundations** for sensitive data.

## Benefits

| Benefit                     | Description                                                                                 |
|-----------------------------|---------------------------------------------------------------------------------------------|
| High availability           | The data plane is designed for 99.99% availability.                                         |
| Multi-zone without reconfiguration | A single addressing plan spans several availability zones, with no IP reconfiguration. |
| Built-in security           | Gateway, filtering and NAT are included, with no network equipment to manage.               |
| Unified management          | Management from the Console or via API.                                                     |
| Sovereignty                 | SecNumCloud-qualified service.                                                              |

<a id="fonctionnalités-principales"></a>

## Features

| Feature                       | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| **Regional private networks** | Multi-AZ deployment and transparent L2 propagation.                         |
| **Private Networks**          | Segmented networks, interconnectable across Cloud Temple offerings.         |
| **Native routing**            | Automatic communication between the private networks of the same VPC.       |
| **IPAM & DHCP**               | IP address reservation, pool management and dynamic assignment.             |
| **Internet access**           | Configurable via the gateway (NAT, DNAT, controlled egress).                |
| **Floating IPs**              | Flexible exposure of services on the Internet.                              |
| **Flow policies**             | Built-in security filtering for north-south and east-west flows.            |
| **Observability**             | Network logs and performance metrics.                                       |
| **Inter-VPC peering**         | Interconnection of VPCs (paid option).                                      |

### Deployment modes

* **VPC in dedicated mode**: prerequisite, a subscription to the IaaS OpenSource offering. The VPC instances (routers, gateways) are deployed directly on your dedicated infrastructure: the compute resources that host your network services are physically isolated.
* **VPC in shared mode**: this mode relies on the VM Instances offering. It provides the VPC without prior dedicated infrastructure, for occasional needs or cloud-native environments.

## Architecture

The VPC relies on a redundant, highly available architecture built on Cloud Temple's low-latency inter-AZ backbone.

### Key components

* **VPC Router**: at the core of each VPC, it handles dynamic routing between the various Private Networks (east-west traffic).
* **Private Networks (VLANs)**: layer 2 network segments that connect your resources (VMs, servers). They natively span several availability zones without IP reconfiguration.
* **External Gateway**: optional entry and exit point for Internet traffic (north-south). It includes NAT and flow management features.

### Integrations

* **Metrics**: the VPC performance and consumption metrics (traffic, gateway status, etc.) can be exported in Prometheus format via the Console API.

## Regions and availability zones

The VPC is available in the FR1 region. Its private networks span several availability zones, with a single addressing plan.

## Technical specifications

| Parameter                 | Value                           |
|---------------------------|---------------------------------|
| VPCs per tenant           | 8                               |
| Private networks per VPC  | 16                              |
| IP addressing             | RFC 1918 / RFC 4193             |
| Inter-VPC peering         | Supported (paid option)         |
| Inter-AZ traffic          | Included                        |
| Inbound traffic           | Included                        |

### Limits

* 8 VPCs per tenant and 16 private networks per VPC.

## Security and compliance

The VPC is certified HDS and ISO 27001, and SecNumCloud-qualified.

<a id="isolation-et-sécurité"></a>

### Isolation and security

The VPC guarantees strict isolation:

* each VPC is an independent network entity, logically isolated from other tenants;
* in dedicated mode, deployment takes place on dedicated resources: no network resource is shared between customers;
* all configuration operations are traceable via the Console.

## Service availability

| Component                                                    | Availability target, measured over one month  |
|--------------------------------------------------------------|-----------------------------------------------|
| Data plane (inter-network routing, NAT, DNAT)                | 99.99%                                        |
| Control plane (API, Console)                                 | 99.9%                                         |

## Responsibilities

The allocation of responsibilities between the customer and Cloud Temple is detailed in the [VPC responsibility matrix (RACI)](../../contractual/network/raci_vpc.md).

## Reversibility

The VPC configuration can be exported to S3 storage for 30 days after the end of the service.

## Pricing

VPC pricing is published on the product page on the Cloud Temple website:
[VPC — pricing](https://www.cloud-temple.com/produits/virtual-private-cloud-souverain/).
