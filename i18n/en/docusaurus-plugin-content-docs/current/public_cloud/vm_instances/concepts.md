---
title: Concepts
---

## Introduction

The **VM Instances** service is a shared compute product that lets you deploy virtual machines on demand, without managing the underlying infrastructure. It offers several service classes, from cost-controlled development to critical production, and integrates natively with Cloud Temple networks. You can start with a single VM and scale your usage with no minimum.

### Audiences and use cases

- **Development teams**: cost-controlled test and staging environments.
- **Web and application production**: hosting of business applications and websites.
- **Data-intensive applications**: databases, data processing.
- **Enterprises and public sector**: data hosting in a sovereign environment.

## Benefits

| Benefit                | Description                                                                                         |
|------------------------|-----------------------------------------------------------------------------------------------------|
| Flexibility and choice | Several service classes and flavors to match cost to each use.                                      |
| Ease of management     | The infrastructure is fully managed; VMs are deployed from the Marketplace in a few minutes.        |
| Sovereignty            | Data hosted in France, on a SecNumCloud-qualified service.                                          |
| Full integration       | Compatible with VPC and Private Backbone, manageable via API and Terraform.                         |
| Scalability            | No minimum: you start with a single VM.                                                             |

## Features

| Feature                    | Description                                                                                       |
|----------------------------|---------------------------------------------------------------------------------------------------|
| Service classes            | Development, General Purpose and Performance (dedicated vCPUs).                                   |
| Predefined and custom flavors | Ready-to-use flavors, or freely chosen number of vCPUs and amount of RAM.                      |
| Marketplace deployment     | VM creation from the official images of the Cloud Temple Marketplace.                             |
| Cloud-init                 | Automatic pre-configuration of instances at boot.                                                 |
| Zone selection             | Selection of the availability zone at deployment.                                                 |
| Snapshots                  | Creation and management of snapshots from the Console.                                            |
| Persistent storage         | Flash system disk and additional volumes, in Standard or Enterprise class.                        |
| Network                    | Up to 7 network cards, VPC with floating IP, Private Backbone.                                    |
| Backup (optional)          | `Backup 30 snapshots` policy with a daily snapshot.                                               |

### Deployment and images

VM Instances are deployed from the **official images of the Cloud Temple Marketplace**. The available templates are those from the [Marketplace filtered for OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). This curated catalog of images guarantees tested, maintained, and ready-to-use environments for each supported operating system.

The service supports **Cloud-init** for automatic pre-configuration of instances at boot (SSH key injection, network configuration, initialization scripts, etc.).

### Migrating an OS outside the Marketplace

An operating system not available in the Marketplace can be migrated via **Veeam restoration in Bare Metal Recovery mode**, subject to technical validation. The functioning of the VM infrastructure is then guaranteed, but not that of the guest OS, its applications, or the necessary agents when they are not installed or configured correctly. Support for the guest OS is then limited.

### Automation

The service is fully manageable via:

- **Cloud Temple Console**: graphical interface for daily management and visualization of metrics (CPU, RAM, disk);
- **Cloud Temple REST API**: programmatic control of the VM lifecycle;
- **Cloud Temple Terraform Provider**: Infrastructure as Code.

## Architecture

VM Instances run on a shared infrastructure, with strict logical isolation between customers. All volumes are **persistent Flash volumes mounted over the network** (*network-attached*): there is no ephemeral local storage, and your data is retained independently of the virtual machine's state.

Each VM connects to the **VPC** or the **Private Backbone** through its network cards, and can be deployed from the Marketplace in the availability zone of your choice.

## Regions and availability zones

The VM Instances service is deployed in the **FR1** region. When creating a virtual machine, you can choose the **availability zone (AZ)** in which it will be hosted. This choice does not require activating availability zones in the IaaS offering.

To learn more about availability zones and Cloud Temple regions, see:

- [Availability Zone Concepts](../../additional_content/concepts_az.md)
- [Region Concepts](../../additional_content/concepts_regional.md)

## Technical specifications

### Service classes

The service offers three service classes tailored to different types of workloads:

| Class | Description | Resources |
|--------|-------------|------------|
| **Development** | Cost-optimized, for test, integration, and staging environments. Suitable for non-critical workloads with variable usage. | Shared |
| **General Purpose** | Optimal vCPU/RAM balance for standard workloads (web applications, micro-services, medium-sized databases). | Shared |
| **Performance** | Designed for intensive workloads requiring high CPU performance. **vCPUs are dedicated** to ensure consistent performance. | Dedicated vCPUs |

### Flavors

Predefined flavors are offered for each service class. It is also possible to create **custom flavors** by freely choosing the number of vCPUs and the amount of RAM.

#### Development

Optimized for test, integration, and staging environments with controlled costs.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| dev.small | 1 | 2 GB | Unit testing, lightweight CI |
| dev.medium | 2 | 4 GB | Integration, internal tools |
| dev.large | 4 | 8 GB | Staging environment |

#### General Purpose

Suitable for web applications, micro-services, and medium-sized databases.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Micro-service, functional testing |
| gp.medium | 2 | 8 GB | Web server, lightweight application |
| gp.large | 4 | 16 GB | Standard application |
| gp.xlarge | 8 | 32 GB | Medium database |
| gp.2xlarge | 16 | 64 GB | Critical application |

#### Performance

**vCPUs are dedicated** to ensure consistent performance, even under heavy load.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Lightweight computing, CI/CD |
| perf.large | 4 | 8 GB | Batch processing, encoding |
| perf.xlarge | 8 | 16 GB | Intensive computing |
| perf.2xlarge | 16 | 32 GB | Simulation, analytics |

#### Custom flavors

It is possible to create a custom flavor by freely selecting:

- The number of vCPUs
- The amount of RAM

This flexibility allows precise sizing to match application needs while optimizing costs.

:::note
Flavor specifications may change. Consult the Cloud Temple Console for the updated list.
:::

### Storage

All volumes in the VM Instances service are **persistent Flash volumes mounted over the network** (*network-attached*). There is no ephemeral local storage: your data is retained independently of the virtual machine's state.

#### System disk

Each virtual machine automatically has a **Flash system disk** to host the operating system. This disk is a storage resource of the service and is not free; its size depends on the chosen operating system:

- Size: between **15 and 100 GB** depending on the selected OS.

The system disk is billed per **GB**. Its automatic creation with the VM means it is necessary for OS deployment, not that it is included for free.

#### Additional volumes

Additional storage volumes can be added to each virtual machine:

- **Size**: from **1 to 2,048 GB** per volume
- **Maximum number**: 16 volumes per VM
- **Limit per family**: **2 TB per VM** in Development and General Purpose; **16 TB per VM** in Enterprise
- **Granularity**: allocation per GB
- **Billing**: per allocated GB, with choice of storage class

#### Storage classes

Two block storage classes are available for additional volumes:

| Class | Usage | Performance | Minimum size | Maximum size |
| --- | --- | --- | --- | --- |
| **Enterprise** | High-performance block storage for latency-sensitive workloads. | **7,500 IOPS/TB** | **1 GB** | **2,048 GB** |
| **Standard** | Standard block storage suitable for most workloads. | **1,500 IOPS/TB** | **1 GB** | **2,048 GB** |

### Network

#### Network interface

Each VM instance can have **1 to 7 network cards**. Each network card is associated with **a single network**.

#### Network compatibility

This interface can be connected to two types of Cloud Temple networks:

- **Backbone private network**: a shared private network with strict logical isolation between tenants. Ideal for interconnecting your Cloud Temple resources in a controlled environment. [Learn more](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: a fully managed private network allowing advanced segmentation and fine network configuration of your environments. [Learn more](../../network/vpc/vpc.md)

#### Floating IP

On a **VPC** network, it is possible to associate a **floating IP** with a VM instance. A floating IP is a public IP address that you can attach or detach freely from an instance, independent of its lifecycle.

#### Virtual appliances

**Stormshield** and **FortiVM** virtual appliances are compatible with the **Enterprise family**, subject to meeting technical prerequisites and the applicable support scope.

### Limits

- **Volumes**: 16 additional volumes per VM, from 1 to 2,048 GB each.
- **Network cards**: 7 per VM, with a single network per card.
- **Unreserved capacity**: creating and restarting a VM are subject to available capacity. Only a reserved instance guarantees capacity, within the scope of its reservation.

## Security and compliance

VM Instances is certified HDS and ISO 27001, and SecNumCloud-qualified.

- **Isolation**: shared environment with strict logical isolation between customers.
- **Encryption**: encryption at rest of the underlying storage infrastructure is provided by the service. Application-level data encryption (file system, database) remains your responsibility.
- **Data residency**: data hosted in France.

<a id="protection-des-données"></a>

## Backup and continuity

### Backup (optional)

Two backup policies are available: **`No Backup`** and **`Backup 30 snapshots`**. With `Backup 30 snapshots`, a snapshot is created automatically every night between **8 PM and 10 PM**. If the customer triggers an additional backup during the day, two snapshots are created on the same day: the active retention then covers **29 days** instead of 30. This option is **billed additionally**.

:::info
VM replication is not included.
:::

<a id="sla-et-disponibilité"></a>

## Service availability

The availability target is **99.95% per VM Instance**, measured over a month. It covers compute resources (CPU, RAM); network connectivity and persistent storage have their own commitments. The resource guarantee depends on the chosen service class.

The VM tools, pre-installed on Marketplace images, are required to measure availability: it is recommended not to disable or remove them.

## Responsibilities

The allocation of responsibilities between the customer and Cloud Temple is detailed in the [VM Instances responsibility matrix (RACI)](../../contractual/vm-instances/raci.md).

Access to the service for a **direct customer** requires at least **Standard Support**, even if the customer administers the OS and applications themselves. **Basic Support** is intended for customers supported by a trained partner.

## Reversibility

| Operation                 | Deliverable                           | Timeframe   | Cost       |
|---------------------------|---------------------------------------|-------------|------------|
| Data export               | Disk images, in standard formats      | 30 days     | Free of charge |
| Migration assistance      | Technical support                     | On request  | On quotation |
| Secure purge              | Certificate of destruction            | 7 days      | Included   |

## Pricing

Compute is billed hourly, with no monthly commitment; any hour started is due. Stopping a VM suspends billing for vCPUs and RAM, but not for storage. The billing rules and quotas are described in detail in the [VM Instances FAQ](./faq.md). Prices are published on the product page on the Cloud Temple website:
[VM Instances — pricing](https://www.cloud-temple.com/produits/vm-instances/).
