---
title: Concepts
---

The **VM Instances** service from Cloud Temple is a **SecNumCloud** qualified shared compute product, allowing the deployment of on-demand virtual machines without managing the underlying infrastructure. This page presents the fundamental concepts of the service.

## Regions and Availability Zones

The VM Instances service is deployed in the **FR1** region. When creating a virtual machine, you can choose the **Availability Zone (AZ)** in which it will be hosted.

To learn more about availability zones and Cloud Temple regions, see:

- [Availability Zone Concepts](../../additional_content/concepts_az.md)
- [Region Concepts](../../additional_content/concepts_regional.md)

## Service Classes

The service offers three service classes tailored to different types of workloads:

| Class | Description | Resources |
|--------|-------------|------------|
| **Development** | Cost-optimized, for test, integration, and staging environments. Suitable for non-critical workloads with variable usage. | Shared |
| **General Purpose** | Optimal vCPU/RAM balance for standard workloads (web applications, micro-services, medium-sized databases). | Shared |
| **Performance** | Designed for intensive workloads requiring high CPU performance. **vCPUs are dedicated** to ensure consistent performance. | Dedicated vCPUs |

## Flavors

Predefined flavors are offered for each service class. It is also possible to create **custom flavors** by freely choosing the number of vCPUs and the amount of RAM.

### Development

Optimized for test, integration, and staging environments with controlled costs.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| dev.small | 1 | 2 GB | Unit testing, lightweight CI |
| dev.medium | 2 | 4 GB | Integration, internal tools |
| dev.large | 4 | 8 GB | Staging environment |

### General Purpose

Suitable for web applications, micro-services, and medium-sized databases.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Micro-service, functional testing |
| gp.medium | 2 | 8 GB | Web server, lightweight application |
| gp.large | 4 | 16 GB | Standard application |
| gp.xlarge | 8 | 32 GB | Medium database |
| gp.2xlarge | 16 | 64 GB | Critical application |

### Performance

**vCPUs are dedicated** to ensure consistent performance, even under heavy load.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Lightweight computing, CI/CD |
| perf.large | 4 | 8 GB | Batch processing, encoding |
| perf.xlarge | 8 | 16 GB | Intensive computing |
| perf.2xlarge | 16 | 32 GB | Simulation, analytics |

### Custom Flavors

It is possible to create a custom flavor by freely selecting:

- The number of vCPUs
- The amount of RAM

This flexibility allows precise sizing to match application needs while optimizing costs.

:::note
Flavor specifications may change. Consult the Cloud Temple console for the updated list.
:::

## Storage

All volumes in the VM Instances service are **persistent Flash volumes mounted over the network** (*network-attached*). There is no ephemeral local storage: your data is retained independently of the virtual machine's state.

### System Disk

Each virtual machine automatically has a **Flash system disk** to host the operating system. This disk is a storage resource of the service and is not free; its size depends on the chosen operating system:

- Size: between **15 and 100 GB** depending on the selected OS.

The system disk is billed per **GB** according to the [Cloud Temple official pricing catalog](https://www.cloud-temple.com/en/our-public-rates/). Its automatic creation with the VM means it is necessary for OS deployment, not that it is included for free.

### Additional Volumes

Additional storage volumes can be added to each virtual machine:

- **Size**: from **1 to 2,048 GB** per volume
- **Maximum number**: 16 volumes per VM
- **Limit per family**: **2 TB per VM** in Development and General Purpose; **16 TB per VM** in Enterprise
- **Granularity**: allocation per GB
- **Billing**: per allocated GB, with choice of storage class

### Storage Classes

Two block storage classes are available for additional volumes:

| Class | Usage | Performance | Minimum size | Maximum size |
| --- | --- | --- | --- | --- |
| **Enterprise** | High-performance block storage for latency-sensitive workloads. | **7,500 IOPS/TB** | **1 GB** | **2,048 GB** |
| **Standard** | Standard block storage suitable for most workloads. | **1,500 IOPS/TB** | **1 GB** | **2,048 GB** |

## Network

### Network Interface

Each VM instance can have **1 to 7 network cards**. Each network card is associated with **a single network**.

### Network Compatibility

This interface can be connected to two types of Cloud Temple networks:

- **Backbone private network**: a shared private network with strict logical isolation between tenants. Ideal for interconnecting your Cloud Temple resources in a controlled environment. [Learn more](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: a fully managed private network allowing advanced segmentation and fine network configuration of your environments. [Learn more](../../network/vpc/vpc.md)

### Floating IP

On a **VPC** network, it is possible to associate a **floating IP** with a VM instance. A floating IP is a public IP address that you can attach or detach freely from an instance, independent of its lifecycle.

### Virtual Appliances

**Stormshield** and **FortiVM** virtual appliances are compatible with the **Enterprise family**, subject to meeting technical prerequisites and the applicable support scope.

## Deployment and Images

VM Instances are deployed from the **official images of the Cloud Temple Marketplace**. The available templates are those from the [Marketplace filtered for OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). This curated catalog of images guarantees tested, maintained, and ready-to-use environments for each supported operating system.

The service supports **Cloud-init** for automatic pre-configuration of instances at boot (SSH key injection, network configuration, initialization scripts, etc.).

### Migrating an OS outside the Marketplace

An operating system not available in the Marketplace can be migrated via **Veeam restoration in Bare Metal Recovery mode**, subject to technical validation. Cloud Temple then guarantees the functioning of the VM infrastructure, but does not guarantee the proper functioning of the guest OS, its applications, or necessary agents when they are not installed or configured correctly. Support for the guest OS is then limited.

A second method is planned with the import of **VHD/VMDK** disks, to create a VM from an existing image. This feature is under development and targeted for the **fourth quarter of 2026**; it is not available in the current service.

## Data Protection

### Backup (optional)

Two backup policies are available: **`No Backup`** and **`Backup 30 snapshots`**. With `Backup 30 snapshots`, a snapshot is created automatically every night between **8 PM and 10 PM**. If the customer triggers an additional backup during the day, two snapshots are created on the same day: the active retention then covers **29 days** instead of 30. This option is **billed additionally**.

:::info
VM replication is not included by default. Its study is planned for the second half of 2026.
:::

## SLA and Availability

| Commitment | Value |
|------------|--------|
| Infrastructure Availability | 99.95% (measured monthly) |
| Resource Guarantee | According to the chosen service class |

## Automation

The service is fully manageable via:

- **Cloud Temple Console**: graphical interface for daily management
- **Cloud Temple REST API**: programmatic control of the VM lifecycle
- **Cloud Temple Terraform Provider**: Infrastructure as Code
