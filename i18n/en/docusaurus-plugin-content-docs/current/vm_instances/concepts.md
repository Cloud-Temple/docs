---
title: Concepts
---

The **VM Instances** service from Cloud Temple is a shared compute offering that enables virtual machines to be deployed on demand, without managing the underlying infrastructure. This page presents the fundamental concepts of the service.

## Regions and Availability Zones

The VM Instances service is deployed in the **FR1** region. When creating a virtual machine, you can choose the **availability zone (AZ)** in which it will be hosted.

For more information on availability zones and Cloud Temple regions, see:

- [Availability Zone Concepts](../additional_content/concepts_az.md)
- [Regional Concepts](../additional_content/concepts_regional.md)

## Service Classes

The service offers three service classes adapted to different types of workloads:

| Class | Description | Resources |
|-------|-------------|-----------|
| **Development** | Cost-optimised, for test, integration and staging environments. Suited to non-critical workloads with variable usage. | Shared |
| **General Purpose** | Optimal vCPU/RAM balance for standard workloads (web applications, micro-services, moderate-sized databases). | Shared |
| **Performance** | Designed for intensive workloads requiring high CPU performance. **vCPUs are dedicated** to guarantee consistent performance. | Dedicated vCPUs |

## Flavors

Predefined flavors are offered for each service class. It is also possible to create **custom flavors** by freely choosing the number of vCPUs and the amount of RAM.

### Development

Optimised for test, integration and staging environments with controlled costs.

| Flavor | vCPU | RAM | Typical usage |
|--------|------|-----|---------------|
| dev.small | 1 | 2 GB | Unit testing, lightweight CI |
| dev.medium | 2 | 4 GB | Integration, internal tools |
| dev.large | 4 | 8 GB | Staging environment |

### General Purpose

Suited to web applications, micro-services and moderate-sized databases.

| Flavor | vCPU | RAM | Typical usage |
|--------|------|-----|---------------|
| gp.small | 1 | 4 GB | Micro-service, functional testing |
| gp.medium | 2 | 8 GB | Web server, lightweight application |
| gp.large | 4 | 16 GB | Standard application |
| gp.xlarge | 8 | 32 GB | Medium database |
| gp.2xlarge | 16 | 64 GB | Critical application |

### Performance

**vCPUs are dedicated** to guarantee consistent performance, even under heavy load.

| Flavor | vCPU | RAM | Typical usage |
|--------|------|-----|---------------|
| perf.medium | 2 | 4 GB | Light compute, CI/CD |
| perf.large | 4 | 8 GB | Batch processing, encoding |
| perf.xlarge | 8 | 16 GB | Intensive compute |
| perf.2xlarge | 16 | 32 GB | Simulation, analytics |

### Custom Flavors

It is possible to create a custom flavor by freely selecting:

- The number of vCPUs
- The amount of RAM

This flexibility allows you to precisely adapt the sizing to your application requirements while optimising costs.

:::note
Flavor specifications may evolve. Check the Cloud Temple console for the up-to-date list.
:::

## Storage

All volumes in the VM Instances service are **persistent Flash volumes mounted over the network** (*network-attached*). There is no ephemeral local storage: your data is preserved independently of the virtual machine's state.

### System Disk

Each virtual machine has a **Flash system disk included by default**, the size of which depends on the chosen operating system:

- Size: between **15 and 100 GB** depending on the selected OS.

### Additional Volumes

It is possible to add additional storage volumes to each virtual machine:

- **Maximum size**: 2 TB per volume
- **Maximum number**: 16 volumes per VM
- **Granularity**: GB allocation
- **Billing**: per allocated GB, with choice of storage class

## Network

### Network Interface

Each VM instance has **a single network interface**.

### Network Compatibility

This interface can be connected to two types of Cloud Temple networks:

- **Private backbone network**: shared private network with strict logical isolation between tenants. Ideal for interconnecting your Cloud Temple resources in a controlled environment. [Learn more](../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: fully managed private network enabling advanced segmentation and fine-grained network configuration of your environments. [Learn more](../network/vpc/vpc.md)

### Floating IP

On a **VPC** network, it is possible to associate a **floating IP** with a VM instance. A floating IP is a public IP address that you can freely attach to or detach from an instance, independently of its lifecycle.

## Deployment and Images

VM Instances are deployed from **official Cloud Temple Marketplace images**. This curated image catalogue guarantees tested, maintained, and ready-to-use environments for each supported operating system.

The service supports **Cloud-init** for automatic pre-configuration of instances at startup (SSH key injection, network configuration, initialisation scripts, etc.).

## Data Protection

### Backup (Optional)

A backup option is available with configurable retention. This option is **billed separately**.

:::info
VM replication is not included by default. Its study is planned for the second half of 2026.
:::

## SLA and Availability

| Commitment | Value |
|------------|-------|
| Infrastructure availability | 99.9% (measured monthly) |
| Resource guarantee | According to the chosen service class |

## Automation

The service is fully manageable via:

- **Cloud Temple Console**: graphical interface for daily management
- **Cloud Temple REST API**: programmatic control of the VM lifecycle
- **Cloud Temple Terraform Provider**: Infrastructure as Code
