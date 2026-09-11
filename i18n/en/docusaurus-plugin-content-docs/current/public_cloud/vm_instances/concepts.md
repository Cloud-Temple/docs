---
title: Concepts
---

The **VM Instances** service by Cloud Temple is a **SecNumCloud**-certified shared compute product, enabling on-demand deployment of virtual machines without managing the underlying infrastructure. This page presents the fundamental concepts of the service.

## Regions and Availability Zones

The VM Instances service is deployed in the **FR1** region. When creating a virtual machine, you can choose the **availability zone (AZ)** in which it will be hosted.

For more information on availability zones and Cloud Temple regions, see:

- [Availability Zone Concepts](../../additional_content/concepts_az.md)
- [Region Concepts](../../additional_content/concepts_regional.md)

## Service Classes

The service offers three service classes tailored to different types of workloads:

| Class | Description | Resources |
|--------|-------------|------------|
| **Development** | Cost-optimized, for testing, integration, and staging environments. Suitable for non-critical workloads with variable usage. | Shared |
| **General Purpose** | Optimal vCPU/RAM balance for standard workloads (web applications, microservices, medium-sized databases). | Shared |
| **Performance** | Designed for intensive workloads requiring high CPU performance. **vCPUs are dedicated** to ensure consistent performance. | Dedicated vCPUs |

## Flavors

Predefined flavors are available for each service class. It is also possible to create **custom flavors** by freely choosing the number of vCPUs and the amount of RAM.

### Development

Optimized for testing, integration, and staging environments with controlled costs.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| dev.small | 1 | 2 GB | Unit testing, lightweight CI |
| dev.medium | 2 | 4 GB | Integration, internal tools |
| dev.large | 4 | 8 GB | Staging environment |

### General Purpose

Suitable for web applications, microservices, and medium-sized databases.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Microservice, functional testing |
| gp.medium | 2 | 8 GB | Web server, lightweight application |
| gp.large | 4 | 16 GB | Standard application |
| gp.xlarge | 8 | 32 GB | Medium-sized database |
| gp.2xlarge | 16 | 64 GB | Mission-critical application |

### Performance

**vCPUs are dedicated** to ensure consistent performance, even under heavy load.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Light computing, CI/CD |
| perf.large | 4 | 8 GB | Batch processing, encoding |
| perf.xlarge | 8 | 16 GB | Compute-intensive |
| perf.2xlarge | 16 | 32 GB | Simulation, analytics |

### Custom templates

You can create a custom template by selecting:

- The number of vCPUs
- The amount of RAM

This flexibility allows you to precisely tailor the sizing to application requirements while optimizing costs.

:::note
Template specifications may change. Consult the Cloud Temple console for the up-to-date list.
:::

## Storage

All volumes in the VM Instances service are **persistent network-attached Flash volumes** (*network-attached*). There is no ephemeral local storage: your data is retained independently of the virtual machine's state.

### System Disk

Each virtual machine comes with a **Flash system disk included by default**, the size of which depends on the selected operating system:

- Size: between **15 and 100 GB** depending on the selected OS.

### Additional Volumes

You can add additional storage volumes to each virtual machine:

- **Maximum size** : 2 TB per volume
- **Maximum number** : 16 volumes per VM
- **Granularity** : allocation in GB
- **Billing** : per allocated GB, with storage class selection

## Network

### Network Interface

Each VM instance can have **1 to 7 network interfaces**. Each network interface is associated with **a single network**.

### Network Compatibility

This interface can be connected to two types of Cloud Temple networks:

- **Private backbone network**: shared private network with strict logical isolation between tenants. Ideal for interconnecting your Cloud Temple resources in a controlled environment. [Learn more](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: fully managed private network enabling advanced segmentation and fine-grained network configuration for your environments. [Learn more](../../network/vpc/vpc.md)

### Floating IP (Floating IP)

In a **VPC** network, it is possible to associate a **floating IP** with a VM instance. A floating IP is a public IP address that you can freely attach to or detach from an instance, regardless of its lifecycle.

## Deployment and Images

VM instances are deployed from the **official Cloud Temple Marketplace images**. The available templates are those from the [Marketplace filtrée pour OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). This curated image catalog guarantees tested, maintained, and ready-to-use environments for each supported operating system.

The service supports **Cloud-init** for automatic instance pre-configuration at boot (SSH key injection, network configuration, initialization scripts, etc.).

## Data Protection

### Backup (optional)

Two backup policies are available: **`No Backup`** and **`Backup 30 snapshots`**. With `Backup 30 snapshots`, a snapshot is automatically created every evening between **8 PM and 10 PM**. If the client triggers an additional backup during the day, two snapshots are created on the same day: the active retention then covers **29 days** instead of 30. This option is **subject to additional charges**.

:::info
VM replication is not included by default. Its evaluation is planned for the second half of 2026.
:::

## SLA and Availability

| Commitment | Value |
|------------|--------|
| Infrastructure Availability | 99.95% (measured monthly) |
| Resource Guarantee | Based on the selected service class |

## Automation

The service is fully manageable via :

- **Cloud Temple Console** : graphical interface for daily management
- **Cloud Temple REST API** : programmatic control of the VM lifecycle
- **Cloud Temple Terraform Provider** : Infrastructure as Code