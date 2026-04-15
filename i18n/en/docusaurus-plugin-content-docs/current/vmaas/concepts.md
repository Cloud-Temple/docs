---
title: Concepts
---

The **VMaaS** service from Cloud Temple is a shared compute offering that enables virtual machines to be deployed on demand, without managing the underlying infrastructure. This page presents the fundamental concepts of the service.

## Technical Architecture

The service is based on a shared infrastructure consisting of:

- **Hypervisor**: Infrastructure fully managed by Cloud Temple (no hypervisor choice by the client).
- **Compute hardware**: Cisco UCS blades.
- **Storage**: High-performance shared block storage.

The infrastructure is hosted in France.

## Regions and Availability Zones

The VMaaS service is deployed in the **FR1** region. When creating a virtual machine, you can choose the **availability zone (AZ)** in which it will be hosted.

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

Each virtual machine is equipped with **one network card**.

The service is natively compatible with Cloud Temple's **VPC (Virtual Private Cloud)** service, enabling network isolation and segmentation of your environments.

## Deployment and Images

Virtual machines are deployed **exclusively from official Cloud Temple Marketplace templates**. It is not possible to use custom third-party images.

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

## Security and Compliance

| Certification |
|---------------|
| ISO 27001:2022 |
| ISAE 3402 |

:::info SecNumCloud Qualification
This service is undergoing SecNumCloud qualification by ANSSI.
:::

Data is hosted in **France**, in a shared environment with **strict logical isolation** between clients.

## Automation

The service is fully manageable via:

- **Cloud Temple Console**: graphical interface for daily management
- **Cloud Temple REST API**: programmatic control of the VM lifecycle
- **Cloud Temple Terraform Provider**: Infrastructure as Code

## Prerequisites

To use the VMaaS service, you must have:

- An active **Cloud Temple Tenant**
- A minimum **Standard Support** subscription ([see support documentation](https://docs.cloud-temple.com))
