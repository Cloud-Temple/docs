---
title: Concepts
---

The **Bare Metal** offering from Cloud Temple provides dedicated physical servers coupled with distributed block storage.  
This solution offers full customization for clients who wish to manage their own software environments, whether installing a Linux or Windows system, or a hypervisor.

## A robust and flexible infrastructure

The Bare Metal offering is based on an architecture designed to meet the requirements of critical workloads.

### Main Components

- **Cisco UCS Servers**: High-performance and reliable compute blades forming the foundation of the offering.
- **IBM Spectrum Virtualize Storage**: A distributed block storage solution providing resilience and high performance.

### Architecture

The distributed storage model provides a separation between computing (Bare Metal servers) and storage (distributed block), enabling:

- Flexibility to map storage volumes across multiple Bare Metal servers according to requirements.
- Optimal customization of computing and storage configurations.
- Enhanced resilience through the use of **Distributed RAID 6**.

## Regions and Availability Zones

The Bare Metal product is deployed within an availability zone.  
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This deployment model allows you to select the location of your Bare Metal servers and distribute them across different availability zones (AZs).  
This provides better load distribution, maximizes redundancy, and simplifies the implementation of a disaster recovery plan (DRP) in the event of an incident.

## Compute Blade Classes

The available compute blades for the Bare Metal offering provide a range of performance options to meet diverse requirements:

| Reference             | RAM  **(1)** | Frequency **(2)**                         | Number of Cores / Threads | Connectivity **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 × 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 × 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 × 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 × 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 × 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 × 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 × 25 Gbit/s        | 2 × NVIDIA L40S 48GB |

### Notes

- **(1)** The amount of memory is the physically available memory on the blades and cannot be modified.
- **(2)** The frequencies listed correspond to the minimum base frequency and the turbo frequency.
- **(3)** Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- **(4)** Available GPUs evolve with the latest technologies. As of May 1, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be reported via an incident ticket.

## Block Storage Classes

Distributed block storage, based on **IBM Spectrum Virtualize**, offers a range of performance tiers suited to various use cases:

| Reference                         | IOPS/To                 | Primary Use Case                       |
|-----------------------------------|-------------------------|----------------------------------------|
| **FLASH - Essential**             | 500                     | Light workloads                        |
| **FLASH - Standard**              | 1500                    | Standard workloads                     |
| **FLASH - Premium**               | 3000                    | Intensive workloads                    |
| **FLASH - Enterprise**            | 7500                    | Critical workloads                     |
| **FLASH - Ultra**                 | 15000                   | Ultra-intensive workloads              |
| **MASS STORAGE - Archival**       | Not applicable          | Cost-effective storage for archival    |

### Features

- **Technology**: Flash NVMe with **Distributed RAID 6** for enhanced resilience.
- **Availability**: 99.99%, measured monthly.
- **Restrictions**: No limits on reads or writes. No automatic compression or deduplication, ensuring full utilization of allocated volumes.

### Storage Block Security and Encryption

To ensure the confidentiality of your data at rest, our entire block storage infrastructure integrates a robust hardware-based encryption solution.

-   **Encryption Type**: Data is encrypted directly on the disks (`Data At Rest`) using the **XTS-AES 256** algorithm.
-   **Compliance**: This encryption method complies with the **FIPS 140-2** standard, ensuring a high level of validated security.
-   **Operation**: Encryption is applied at the time data is written to the physical storage medium.

:::warning Attention Point on Replication
It is important to note that this encryption protects data stored on disks. It is not active "on-the-fly," meaning data is not encrypted during storage replication operations between availability zones. The security of data transfers is ensured through dedicated and secure communication channels.
:::

## Bare Metal Console Access

Access to Bare Metal servers is provided directly from the **Cloud Temple console**. This feature offers full control over the server lifecycle, including:

- **KVM Access**: A direct interface to manage servers as if you were physically on-site.
- **Management of common operations**: Ability to perform actions such as power management, reboots, and **ISO mapping** for operating system installation.

This level of access ensures maximum flexibility while maintaining strict security compliance.

## Bare Metal Server Network Connectivity

Bare Metal servers come with advanced networking features.

### Layer 2 VLANs

It is possible to configure **Layer 2 VLANs** on the network interfaces of Bare Metal servers. Users can:

- **Enable VLAN tagging** to associate one or more VLANs with a single interface.
- **Propagate VLANs directly** onto the network interfaces of servers.

### Network Interface Aggregation

Each server is equipped with **two network interfaces**. These interfaces can be used independently or combined to improve performance and provide redundancy:

### Network Performance

The performance of network interfaces is directly tied to the chosen blade class. For example:

- **ECO** blades provide 2 x 10 Gbit/s connectivity.
- **STANDARD** and higher-tier blades offer 2 x 25 Gbit/s connectivity.

These network options ensure reliable, flexible, and workload-adapted connectivity suitable for a wide range of professional workloads.