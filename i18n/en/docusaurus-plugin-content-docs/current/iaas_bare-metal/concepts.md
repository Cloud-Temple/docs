---
title: Concepts
---

<a id="une-infrastructure-matérielle-et-flexible"></a>

## Introduction

The **Bare Metal** offering provides dedicated physical servers, with no resource sharing, associated with distributed block storage. It offers full customization to customers who wish to manage their own software environment, whether to install a Linux or Windows system or a hypervisor.

### Audiences and use cases

- **Public sector and administrations**: sensitive applications compliant with the "cloud au centre" doctrine.
- **Sovereign sectors**: environments requiring physical isolation.
- **Healthcare**: processing of health data on HDS-certified infrastructure.
- **Artificial intelligence**: dedicated GPUs for model training and inference.
- **Private cloud**: full customization of the software stack, for example for a hypervisor farm.
- **Software licenses**: precise control of resources to optimize hardware-bound licenses.

## Benefits

| Benefit                      | Description                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| Full control                 | You freely install the software environment (OS, hypervisor) and access the servers directly.      |
| Physical isolation           | Each server is dedicated to you, with no resource sharing.                                          |
| Flexible architecture        | Compute and storage are separate: each is sized independently.                                      |
| Multi-zone deployment        | Servers can be distributed across several availability zones.                                       |
| High-performance hardware    | Eight blade classes, two of which are equipped with NVIDIA GPUs.                                    |

## Features

| Feature                 | Description                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Dedicated servers       | Eight blade classes, from ECO to PERFORMANCE 5, starting from one server and with no limit.     |
| NVIDIA GPUs             | NVIDIA L40S 48 GB (PERFORMANCE 4) and NVIDIA H100 80 GB (PERFORMANCE 5).                        |
| Distributed block storage | Six storage classes, with Distributed RAID 6.                                                 |
| Network configuration   | Simple mode (automatic redundancy) or advanced mode (four virtual network cards).               |
| KVM console             | Direct access to the servers from the Cloud Temple Console.                                     |
| Multi-zone              | Deployment across different availability zones.                                                |
| VLAN and aggregation    | Layer 2 VLANs and network interface aggregation.                                                |

<a id="accès-console-bare-metal"></a>

### Bare Metal Console access

Bare Metal servers are accessed directly from the **Cloud Temple Console**. This feature provides full control over the server lifecycle, including:

- **KVM access**: a direct interface to manage the servers, as if you were physically on site.
- **Routine operations management**: power management, resets or **ISO mapping** for operating system installation.
- **Volume management**: mapping and configuration of storage volumes from the interface.

The service can also be driven through a REST API, compatible with OpenAPI.

## Architecture

### Main components

- **Cisco UCS servers**: these compute blades form the foundation of the offering.
- **IBM Spectrum Virtualize storage**: distributed block storage, providing resilience and high performance.

### Architecture

The distributed storage model separates compute (Bare Metal servers) from storage (distributed block), which makes it possible to:

- map storage volumes to several Bare Metal servers as needed;
- customize compute and storage configurations;
- increase resilience thanks to **Distributed RAID 6**.

## Regions and availability zones

The Bare Metal product is deployed in the FR1 region, in one availability zone.
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

You choose the location of the Bare Metal servers and can distribute them across different availability zones (AZ). This provides better load distribution, maximizes redundancy and facilitates the implementation of a disaster recovery plan in the event of an incident.

## Technical specifications

### Compute blade classes

The compute blades available for the Bare Metal offering provide a range of performance levels to meet various needs:

| Reference             | RAM  **(1)** | Frequency **(2)**                         | Number of cores / threads | Connectivity **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Gold 5315Y or equivalent)   | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |
| **PERFORMANCE 5**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA H100 80GB |

#### Notes

- **(1)** The amount of memory is the memory physically available on the blades and cannot be modified.
- **(2)** The indicated frequencies correspond to the minimum base frequency and the turbo frequency.
- **(3)** Physical connectivity is shared between network access and block storage access, thanks to a converged Cisco UCS architecture.
- **(4)** Available GPUs evolve with the latest technologies. The product offers NVIDIA L40S and NVIDIA H100 GPUs.

### Block storage classes

Distributed block storage offers a range of performance levels suited to various use cases:

| Reference                         | IOPS/TB        | Max IOPS cap / Volume     | Max bandwidth / Volume      | Primary use                            |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essentiel**             | 500            | 10,000 IOPS               | 512 MB/s                    | Light workloads                        |
| **FLASH - Standard**              | 1500           | 30,000 IOPS               | 1024 MB/s                   | Standard workloads                     |
| **FLASH - Premium**               | 3000           | 30,000 IOPS               | 1024 MB/s                   | Intensive workloads                    |
| **FLASH - Enterprise**            | 7500           | 30,000 IOPS               | 1024 MB/s                   | Critical workloads                     |
| **FLASH - Ultra**                 | 15000          | 30,000 IOPS               | 1024 MB/s                   | Ultra-intensive workloads              |
| **MASS STORAGE - Archivage**      | Not applicable | Not guaranteed            | Not guaranteed              | Cost-effective storage for archiving   |

#### Characteristics

- **Performance**: effective performance grows linearly with the allocated capacity (according to the IOPS/TB ratio), **within the absolute hardware cap defined above**. For example, a 10 TB volume in the Ultra class is physically limited to 30,000 IOPS and 1024 MB/s.
- **Technology**: NVMe Flash with **Distributed RAID 6** for increased resilience.
- **Restrictions**: no limitation on reads or writes. No automatic compression or deduplication, which guarantees full use of the reserved volumes.

<a id="connectivité-réseau-des-serveurs-bare-metal"></a>

### Network connectivity

Bare Metal servers have advanced networking capabilities.

#### Configuration modes

- **Simple configuration (default)**: each server is equipped with **two physical network interfaces**. Redundancy and high availability are managed automatically by the infrastructure, with no manual configuration.
- **Advanced configuration**: for needs such as hypervisor deployment, the two physical interfaces can be split into **four virtual network cards**. Load balancing, teaming and high availability are then delegated to your operating system, for example to separate management, data, storage and replication traffic.

#### Layer 2 VLAN

**Layer 2 VLANs** can be configured on the network interfaces of Bare Metal servers. You can:

- **enable VLAN tagging** to associate one or more VLANs with a single interface;
- **propagate VLANs** directly to the servers' network interfaces.

#### Network interface aggregation

Network interfaces can be used independently or combined (bonding, teaming) for better performance and better redundancy.

#### Network performance

The performance of the network interfaces depends on the chosen blade class:

- **ECO** blades offer 2 x 10 Gbit/s connectivity;
- **STANDARD** blades and above have 2 x 25 Gbit/s connectivity.

### Limits

- The amount of memory of a blade cannot be modified.
- A storage volume is capped at 30,000 IOPS and 1024 MB/s (10,000 IOPS and 512 MB/s in the Essentiel class), regardless of its size.

## Security and compliance

Bare Metal is certified HDS and ISO 27001, Gaia-X Label Level 3, CISPE-compliant and C5-compliant, and SecNumCloud-qualified.

### Block storage security and encryption

To guarantee the confidentiality of your data at rest, the entire block storage infrastructure integrates hardware encryption.

- **Encryption type**: data is encrypted directly on the disks (`Data At Rest`) with the **XTS-AES 256** algorithm.
- **Compliance**: this encryption method complies with the **FIPS 140-2** standard.
- **Operation**: encryption is applied when data is written to the physical storage medium.

:::warning[Note on replication]
This encryption protects the data stored on the disks. It is not active "on-the-fly": data is not encrypted during storage replication operations between availability zones. Transfer security is ensured by dedicated, secure communication channels.
:::

## Service availability

| Item            | Availability target, measured monthly         |
|-----------------|-----------------------------------------------|
| Infrastructure  | 99.9%, maintenance windows included           |
| Block storage   | 99.99%                                        |

Any availability-related request must be reported via an incident ticket.

## Reversibility

| Operation                 | Deliverable                  | Timeframe   | Cost       |
|---------------------------|------------------------------|-------------|------------|
| Data export               | Data, in standard formats    | 30 days     | Free of charge |
| Migration assistance      | Technical support            | On request  | On quotation |
| Secure purge              | Certificate of destruction   | 7 days      | Included   |

## Pricing

The service is billed monthly, per physical server. The minimum commitment is one month for most configurations; some blades, depending on their hardware configuration, require a longer commitment. Prices and commitment durations are published on the product page on the Cloud Temple website:
[Bare Metal — pricing](https://www.cloud-temple.com/produits/bare-metal/).
