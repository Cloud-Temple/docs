---
title: Concepts
---

The **VM Instances** service of Cloud Temple is a shared compute product certified **SecNumCloud**, allowing on-demand deployment of virtual machines without managing the underlying infrastructure. This page presents the fundamental concepts of the service.

## Regions and Availability Zones

The VM Instances service is deployed in the **FR1** region. When creating a virtual machine, you can choose the **availability zone (AZ)** in which it will be hosted.

For more information about availability zones and Cloud Temple regions, see:

- [Concepts des zones de disponibilité](../../additional_content/concepts_az.md)
- [Concepts des régions](../../additional_content/concepts_regional.md)

## Service Classes

The service offers three service classes tailored to different types of workloads:

| Class | Description | Resources |
|--------|-------------|------------|
| **Development** | Cost-optimized, for test, integration, and acceptance environments. Suited for non-critical workloads with variable usage. | Shared |
| **General Purpose** | Optimal vCPU/RAM balance for standard workloads (web applications, micro-services, moderate-sized databases). | Shared |
| **Performance** | Designed for intensive workloads requiring high CPU performance. **vCPUs are dedicated** to guarantee consistent performance. | Dedicated vCPUs |

## Flavors

Predefined flavors are offered for each service class. It is also possible to create **custom flavors** by freely choosing the number of vCPU and the amount of RAM.

### Development

Optimized for testing, integration, and acceptance environments with a controlled cost.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| dev.small | 1 | 2 GB | Unit testing, lightweight CI |
| dev.medium | 2 | 4 GB | Integration, internal tools |
| dev.large | 4 | 8 GB | Acceptance environment |

### General Purpose

Suited for web applications, micro-services and medium-sized databases.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Micro-service, functional testing |
| gp.medium | 2 | 8 GB | Web server, lightweight application |
| gp.large | 4 | 16 GB | Standard application |
| gp.xlarge | 8 | 32 GB | Medium database |
| gp.2xlarge | 16 | 64 GB | Critical application |

### Performance

The **vCPUs are dedicated** to guarantee consistent performance, even under heavy load.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Lightweight computing, CI/CD |
| perf.large | 4 | 8 GB | Batch processing, encoding |
| perf.xlarge | 8 | 16 GB | Intensive computing |
| perf.2xlarge | 16 | 32 GB | Simulation, analytics |

### Custom templates

It is possible to create a custom template by freely selecting:

- The number of vCPUs
- The amount of RAM

This flexibility allows for precise sizing tailored to application needs while optimizing costs.

:::note
Template specifications may change. Refer to the Cloud Temple console for the up-to-date list.
:::

## Storage

All volumes of the VM Instances service are **persistent network-attached Flash volumes** (*network-attached*). There is no ephemeral local storage: your data is retained independently of the virtual machine's state.

### System disk

Each virtual machine automatically has a **Flash system disk** to host the operating system. This disk is a storage resource of the service and is not free; its size depends on the chosen operating system:

- Size: between **15 and 100 GB** depending on the selected OS.

The system disk is billed per **GB** according to the VM Instances pricing catalog. Its automatic creation with the VM means it is required for OS deployment, and not that it is included for free.

### Additional volumes

It is possible to add additional storage volumes to each virtual machine:

- **Size**: from **1 to 2,048 GB** per volume
- **Maximum number**: 16 volumes per VM
- **Per-family cap**: **2 TB per VM** in Development and General Purpose; **16 TB per VM** in Enterprise
- **Granularity**: allocation in GB increments
- **Billing**: per allocated GB, with choice of storage class

### Storage Classes

Two block storage classes are available for additional volumes:

| Class | Usage | Performance | Minimum size | Maximum size |
| --- | --- | --- | --- | --- |
| **Enterprise** | High-performance block storage for latency-sensitive workloads. | **7 500 IOPS/TiB** | **1 GiB** | **2 048 GiB** |
| **Standard** | Standard block storage suitable for most workloads. | **1 500 IOPS/TiB** | **1 GiB** | **2 048 GiB** |

## Network

### Network Interface

Each VM instance can have **1 to 7 network cards**. Each network card is associated with **a single network**.

### Network Compatibility

This interface can be connected to two types of Cloud Temple networks:

- **Private backbone network**: shared private network with strict logical isolation between tenants. Ideal for interconnecting your Cloud Temple resources in a controlled environment. [Learn more](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: fully managed private network enabling advanced segmentation and fine-grained network configuration of your environments. [Learn more](../../network/vpc/vpc.md)

### Floating IP

On a **VPC** network, it is possible to associate a **Floating IP** with a VM instance. A Floating IP is a public IP address that you can freely attach or detach from an instance, independently of its lifecycle.

### Virtual Appliances

The **Stormshield** and **FortiVM** virtual appliances are compatible with the **Enterprise family**, subject to compliance with the applicable technical prerequisites and support scope.

## Deployment and images

VM Instances are deployed from the **official images of the Cloud Temple Marketplace**. The available templates are those from the [Marketplace filtrée pour OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). This catalog of selected images guarantees tested, maintained, and ready-to-use environments for each supported operating system.

The service supports **Cloud-init** for automatic pre-configuration of instances at startup (injection de clés SSH, configuration réseau, scripts d'initialisation, etc.).

### OS Migration Outside the Marketplace

An operating system that is not available in the Marketplace can be migrated through **Veeam Bare Metal Recovery**, subject to technical validation. Cloud Temple then guarantees the operation of the VM infrastructure, but does not guarantee the proper functioning of the guest OS, its applications, or the required agents when they are not installed or configured correctly. Guest OS support is then limited.

A second method is planned using **VHD/VMDK** disk import, in order to create a VM from an existing image. This feature is under development and targeted for **Q4 2026**; it is not available in the current service.

## Data Protection

### Backup (optional)

Two backup policies are available: **`No Backup`** and **`Backup 30 snapshots`**. With `Backup 30 snapshots`, a snapshot is automatically created every evening between **8 PM and 10 PM**. If the client triggers an additional backup during the day, two snapshots are created on the same day: the active retention then covers **29 days** instead of 30. This option is **billed as an add-on**.

:::info
VM replication is not included by default. Its assessment is planned for the second half of 2026.
:::

## SLA and Availability

| Commitment | Value |
|------------|--------|
| Infrastructure availability | 99.95% (measured monthly) |
| Resource guarantee | According to the chosen service class |

## Automation

The service is fully manageable via:

- **Console Cloud Temple** : graphical interface for daily management
- **API REST Cloud Temple** : programmatic control of the VM lifecycle
- **Provider Terraform Cloud Temple** : Infrastructure as Code