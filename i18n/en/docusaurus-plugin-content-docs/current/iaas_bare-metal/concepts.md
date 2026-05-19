---
title: Concepts
---


Cloud Temple's **Bare Metal** offering provides dedicated physical servers associated with distributed block storage.
This solution offers full customization for customers who wish to manage their own software environments, whether for installing a Linux, Windows, or hypervisor system.

---

## A flexible hardware infrastructure

The Bare Metal offering is built on an architecture designed to meet the needs of critical workloads.

### Main components

- **Cisco UCS Servers** : High-performance and reliable, these compute blades form the foundation of the offering.
- **IBM Spectrum Virtualize Storage** : A distributed block storage solution, providing resilience and high performance.

### Architecture

The distributed storage model provides a separation between compute (Bare Metal servers) and storage (distributed block), enabling:

- Flexibility to map storage volumes across multiple Bare Metal servers based on requirements.
- Optimal customization of compute and storage configurations.
- Enhanced resilience through the use of **Distributed RAID 6**.

---

## Regions and Availability Zones

The Bare Metal product is deployed in an availability zone.
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This deployment type allows you to choose the location of Bare Metal servers and distribute them across different availability zones (AZ).
This provides better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in the event of an incident.

---

## Compute Blade Classes

The compute blades available for the Bare Metal offering provide a range of performance levels to meet various needs:

| Reference             | RAM  **(1)** | Frequency **(2)**                         | Number of cores / threads | Connectivity **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48 GB |

### Notes
- **(1)** The amount of memory is the physical memory available on the blades and cannot be modified.
- **(2)** The indicated frequencies correspond to the minimum base frequency and the turbo frequency.
- **(3)** Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- **(4)** Available GPUs evolve based on the latest technologies. As of May 1, 2024, the product includes NVIDIA LOVELACE L40S GPUs.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be reported via an incident ticket.

---

## Block Storage Classes

Distributed block storage, based on **IBM Spectrum Virtualize**, offers a range of performance tiers tailored to various use cases:

| Reference                         | IOPS/To        | Max IOPS / Volume         | Max Bandwidth / Volume      | Primary Use Case                       |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essential**             | 500            | 10,000 IOPS               | 512 MB/s                    | Light workloads                        |
| **FLASH - Standard**              | 1500           | 30,000 IOPS               | 1024 MB/s                   | Standard workloads                     |
| **FLASH - Premium**               | 3000           | 30,000 IOPS               | 1024 MB/s                   | Intensive workloads                    |
| **FLASH - Enterprise**            | 7500           | 30,000 IOPS               | 1024 MB/s                   | Critical workloads                     |
| **FLASH - Ultra**                 | 15000          | 30,000 IOPS               | 1024 MB/s                   | Ultra-intensive workloads              |
| **MASS STORAGE - Archiving**      | Not applicable | Not guaranteed            | Not guaranteed              | Cost-effective storage for archiving   |

### Characteristics

- **Performance** : Effective performance scales linearly with allocated capacity (based on the IOPS/TB ratio), **up to the absolute hardware limit defined above**. (For example, a 10 TB Ultra tier volume will be physically limited to 30,000 IOPS and 1024 MB/s).
- **Technology** : NVMe Flash with **Distributed RAID 6** for enhanced resilience.
- **Availability** : 99.99%, measured monthly.
- **Restrictions** : No limits on reads or writes. No automatic compression or deduplication, ensuring full utilization of reserved volumes.

### Block Storage Security and Encryption

To ensure the confidentiality of your data at rest, our entire block storage infrastructure integrates robust hardware encryption.

- **Encryption Type** : Data is encrypted directly on the disks (`Data At Rest`) using the **XTS-AES 256** algorithm.
- **Compliance** : This encryption method complies with the **FIPS 140-2** standard, ensuring a validated high level of security.
- **Operation** : Encryption is applied at the time of writing data to the physical storage medium.

:::warning[Replication Consideration]
It is important to note that this encryption protects data stored on disks. It is not active "on-the-fly", meaning data is not encrypted during storage replication operations between availability zones. Transfer security is ensured by dedicated and secure communication channels.
:::

---

## Bare Metal Console Access

Access to Bare Metal servers is provided directly through the **Cloud Temple console**. This feature offers full control over the server lifecycle, including:

- **KVM Access** : A direct interface for managing servers, as if you were physically on-site.
- **Routine Operations Management** : Ability to perform actions such as power management, reboots, or **ISO mapping** for operating system installation.

This level of access ensures maximum flexibility while adhering to security constraints.

---

## Bare Metal server network connectivity

Bare Metal servers are equipped with advanced networking capabilities.

### Layer 2 VLAN

It is possible to configure **Layer 2 VLANs** on the network interfaces of Bare Metal servers.
Users can:

- **Enable VLAN tagging** to associate one or more VLANs with a single interface.
- **Propagate VLANs** directly to the network interfaces of the servers.

### Network Interface Aggregation

Each server is equipped with **two network interfaces**. These interfaces can be used independently or combined for improved performance and redundancy:

### Network Performance

The performance of network interfaces is directly related to the chosen blade class. Example:

- **ECO** blades offer 2 x 10 Gbit/s connectivity.
- **STANDARD** blades and above feature 2 x 25 Gbit/s connectivity.

These network options ensure reliable, flexible connectivity tailored to a variety of professional workloads.

---