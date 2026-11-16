---
title: Concepts
---

<a id="une-infrastructure-matérielle-et-flexible"></a>

## Overview

The **Bare Metal** offering provides dedicated physical servers, with no resource sharing, paired with distributed block storage. It offers full customization for clients who wish to manage their own software environment, whether installing a Linux, Windows system, or a hypervisor.

### Target audiences and use cases

- **Public sector and government agencies**: sensitive applications compliant with the "cloud at the center" doctrine.
- **Sovereign sectors**: environments requiring physical isolation.
- **Healthcare**: processing of health data on an HDS-certified infrastructure.
- **Artificial intelligence**: dedicated GPUs for model training and inference.
- **Private cloud**: full customization of the software stack, for example for a hypervisor farm.
- **Software licenses**: precise resource control to optimize hardware-bound licenses.

## Benefits

| Benefit                     | Description                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| Full control               | You freely install the software environment (OS, hypervisor) and access the servers directly. |
| Physical isolation           | Each server is dedicated to you, with no resource sharing.                                    |
| Flexible architecture        | Compute and storage are separated: each is sized independently.                       |
| Multi-zone deployment      | Servers can be distributed across multiple availability zones.                            |
| High-performance hardware   | Eight blade classes, two of which are equipped with NVIDIA GPUs.                                            |

## Features

| Feature          | Description                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Dedicated servers         | Eight blade classes, from ECO to PERFORMANCE 5, starting from one server with no limit.            |
| NVIDIA GPU              | NVIDIA L40S 48 GB (PERFORMANCE 4) and NVIDIA H100 80 GB (PERFORMANCE 5).                         |
| Distributed block storage | Six storage classes, with Distributed RAID 6.                                               |
| Network configuration    | Simple mode (automatic redundancy) or advanced mode (four virtual network cards).               |
| KVM console             | Direct access to servers from the Cloud Temple Console.                                       |
| Multi-zone             | Deployment across different availability zones.                                             |
| VLAN and aggregation      | Layer 2 VLANs and network interface aggregation.                                           |

<a id="accès-console-bare-metal"></a>

### Bare Metal Console Access

Access to Bare Metal servers is done directly from the **Cloud Temple Console**. This feature provides full control over the server lifecycle, including:

- **KVM access**: a direct interface to manage servers, as if you were physically on site.
- **Routine operations management**: power management, resets, or **ISO mapping** for operating system installation.
- **Volume management**: mapping and configuration of storage volumes from the interface.

The service can also be managed via a REST API, compatible with OpenAPI.

## Architecture

### Main components

- **Cisco UCS servers**: these compute blades form the foundation of the offering.
- **IBM Spectrum Virtualize storage**: a distributed block storage, offering resilience and high performance.

### Architecture

The distributed storage model separates compute (Bare Metal servers) from storage (distributed block), which allows:

- mapping storage volumes across multiple Bare Metal servers as needed;
- customizing compute and storage configurations;
- increasing resilience through **Distributed RAID 6**.

## Regions and availability zones

The Bare Metal product is deployed in the FR1 region, in one availability zone.
An [availability zone](../additional_content/concepts_regional.md#availability-zones) is part of a [region](../additional_content/concepts_regional.md).

You choose the location of Bare Metal servers and can distribute them across different availability zones (AZ). This provides better load distribution, maximizes redundancy, and facilitates the implementation of a business continuity plan in case of an incident.

## Technical specifications

### Compute blade classes

The compute blades available for the Bare Metal offering provide a range of performance levels to meet various needs:

| Reference             | RAM  **(1)** | Frequency **(2)**                         | Number of cores / threads | Connectivity **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Gold 5315Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |
| **PERFORMANCE 5**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA H100 80GB |

#### Notes

- **(1)** The amount of memory is the physically available memory on the blades and cannot be modified.
- **(2)** The frequencies indicated correspond to the minimum base frequency and the turbo frequency.
- **(3)** Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- **(4)** Available GPUs evolve with the latest technologies. The product offers NVIDIA L40S and NVIDIA H100 GPUs.

### GPU

Two blade classes each embed two dedicated NVIDIA cards for your use: PERFORMANCE 4 (2 × NVIDIA L40S 48 GB) and PERFORMANCE 5 (2 × NVIDIA H100 80 GB). They are used for AI model training and inference, computer vision, simulation, and scientific computing. CUDA, cuDNN, and major AI frameworks (TensorFlow, PyTorch, etc.) work without adaptation.

| Parameter               | NVIDIA L40S  | NVIDIA H100  |
|-------------------------|--------------|--------------|
| GPU memory             | 48 GB        | 80 GB        |
| FP32                    | 91.6 TFlops  | 51 TFlops    |
| TF32 (Tensor Core) *    | 366 TFlops   | 756 TFlops   |
| FP16 (Tensor Core) *    | 733 TFlops   | 1,513 TFlops |
| FP8 (Tensor Core) *     | 1,466 TFlops | 3,026 TFlops |
| Maximum power consumption   | 350 W        | 350 W        |

\* NVIDIA manufacturer values with structured sparsity. Without sparsity, these values are halved.

The Multi-Instance GPU (MIG) technology partitions an H100 card into up to 7 instances. Each instance has its own memory and its own compute units, isolated from other instances. Multiple workloads can thus share the same card without interfering with each other. L40S cards do not support Multi-Instance GPU.

- The number and model of cards are fixed by the blade class: the GPU configuration of a blade cannot be modified.
- Bare Metal blades equipped with GPUs can serve as worker nodes for Managed Kubernetes: see [Using a GPU on Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md).

### Block storage classes

<a id="caractéristiques"></a>

Distributed block storage offers five Flash classes, from 500 to 15,000 IOPS/TB, and the Mass Storage class for archiving. The classes, their performance ceilings, and their characteristics are described on the [Block Storage](../storage/block/block_storage.md) page.

<a id="connectivité-réseau-des-serveurs-bare-metal"></a>

### Network connectivity

Each Bare Metal server has **two physical network interfaces**. Their number is fixed: it is not possible to add additional physical network cards.

#### Configuration modes

You choose the network configuration mode when ordering the resource in the Cloud Temple Console:

- **Simple configuration**: redundancy and high availability are managed automatically by the infrastructure, without manual configuration in your operating system.
- **Advanced configuration**: for needs such as hypervisor deployment, the two physical interfaces are split into **four virtual network cards**. Teaming and high availability management is then delegated to your operating system, in active/passive mode.

The network configuration mode cannot be modified on an existing service. To use another mode, you must order a new server with the desired mode, then migrate your workloads to it. This migration is performed by you; support from Professional Services can be considered.

#### Layer 2 VLANs

It is possible to configure **Layer 2 VLANs** on the network interfaces of Bare Metal servers. You can:

- **enable VLAN tagging** to associate one or more VLANs to the same interface;
- **propagate VLANs** directly on the network interfaces of the servers.

#### Network interface aggregation

Network interfaces can be used independently or combined (bonding, teaming). Only the **active/passive** mode is supported: it ensures redundancy without increasing the available bandwidth. **LACP (802.3ad) is not supported**.

#### Network performance

Network interface performance depends on the chosen blade class:

- **ECO** blades offer 2 x 10 Gbit/s connectivity;
- **STANDARD** and above blades have 2 x 25 Gbit/s connectivity.

GPU blades **PERFORMANCE 4 (L40S)** and **PERFORMANCE 5 (H100)** thus have two physical interfaces of 25 Gbit/s each. This physical connectivity is shared between network access and block storage.

### Limits

- The amount of memory on a blade cannot be modified.
- A storage volume is capped at 30,000 IOPS and 1024 MB/s (10,000 IOPS and 512 MB/s in the Essential class), regardless of its size.

## Security and compliance

Bare Metal is HDS and ISO 27001 certified, Gaia-X level 3 labeled, CISPE and C5 compliant, and SecNumCloud qualified.

### Block storage security and encryption

To ensure the confidentiality of your data at rest, the entire block storage infrastructure integrates hardware encryption.

- **Encryption type**: data is encrypted directly on the disks (`Data At Rest`) using the **XTS-AES 256** algorithm.
- **Compliance**: this encryption method is compliant with the **FIPS 140-2** standard.
- **Operation**: encryption is applied at the time data is written to the physical storage medium.

:::warning[Note on replication]
This encryption protects data stored on the disks. It is not active "on-the-fly": data is not encrypted during storage replication operations between availability zones. Transfer security is ensured through dedicated and secure communication channels.
:::

## Service availability

| Element         | Availability target, measured over one month |
|-----------------|-----------------------------------------------|
| Infrastructure  | 99.9%, including maintenance windows        |
| Block storage   | 99.99%                                       |

Any request related to availability must be declared via an incident ticket.

## Reversibility

| Operation                 | Deliverable                     | Deadline       | Cost       |
|---------------------------|------------------------------|-------------|------------|
| Data export        | Data, in standard formats | 30 days   | Free |
| Migration assistance | Technical support            | On request | On quote  |
| Secure purge           | Certificate of destruction    | 7 days     | Included     |

## Pricing

The service is billed monthly, per physical server. The minimum commitment is one month for most configurations; certain blades, depending on their hardware configuration, require a longer commitment. Pricing and commitment durations are published on the Cloud Temple website product page:
[Bare Metal — pricing](https://www.cloud-temple.com/produits/bare-metal/).
