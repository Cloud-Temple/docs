---
title: Concepts
---


The **Bare Metal** offer from Cloud Temple provides dedicated physical servers associated with distributed block storage.
This solution offers full customization for customers who want to manage their own software environments, whether installing a Linux, Windows, or hypervisor system.

---

## A hardware and flexible infrastructure

The Bare Metal offer is based on an architecture designed to meet the needs of critical workloads.

### Key components

- **Cisco UCS servers**: Powerful and reliable, these compute blades form the basis of the offer.
- **IBM Spectrum Virtualize storage**: A distributed block storage solution, offering resilience and high performance.

### Architecture

The distributed storage model separates compute (Bare Metal servers) and storage (distributed block), enabling:

- Flexibility to map storage volumes across multiple Bare Metal servers based on needs.
- Optimal customization of compute and storage configurations.
- Enhanced resilience through the use of **Distributed RAID 6**.

---

## Regions and availability zones

The Bare Metal product is deployed in an availability zone.
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This deployment type allows choosing the location of Bare Metal servers and distributing them across different availability zones (AZ).
This offers better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---

## Compute blade classes

The available compute blades for the Bare Metal offer provide a range of performance levels to meet diverse needs:

| Reference             | RAM  **(1)** | Frequency **(2)**                         | Number of cores / threads | Connectivity **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notes

- **(1)** The memory amount is the physically available on the blades and cannot be modified.
- **(2)** The indicated frequencies correspond to the minimum base frequency and turbo frequency.
- **(3)** Physical connectivity is shared for network and block storage access, thanks to a converged Cisco UCS architecture.
- **(4)** Available GPUs evolve according to the latest technologies. As of May 1, 2024, the offer includes NVIDIA LOVELACE L40S GPUs.

The infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be reported via an incident ticket.

---

## Block storage classes

The distributed block storage, based on **IBM Spectrum Virtualize**, offers performance levels adapted to various use cases:

| Reference                         | IOPS/To                 | Primary use                        |
|-----------------------------------|-------------------------|------------------------------------|
| **FLASH - Essentiel**             | 500                     | Light workloads                    |
| **FLASH - Standard**              | 1500                    | Standard workloads                 |
| **FLASH - Premium**               | 3000                    | Intensive workloads                |
| **FLASH - Enterprise**            | 7500                    | Critical workloads                 |
| **FLASH - Ultra**                 | 15000                   | Ultra-intensive workloads          |
| **MASS STORAGE - Archivage**      | Not applicable          | Cost-effective storage for archiving |

### Features

- **Technology**: NVMe flash with **Distributed RAID 6** for increased resilience.
- **Availability**: 99.99%, measured monthly.
- **Restrictions**: No limitations on reads or writes. No automatic compression or deduplication, ensuring full utilization of allocated volumes.

---

## Bare Metal Console Access

Access to Bare Metal servers is done directly from the **Cloud Temple console**. This feature offers full control over the server lifecycle, including:

- **KVM access**: A direct interface to manage servers as if you were on-site.
- **Management of routine operations**: Ability to perform actions such as power management, resets, or **ISO mapping** for operating system installation.

This level of access ensures maximum flexibility while respecting security constraints.

---

## Bare Metal Server Network Connectivity

Bare Metal servers feature advanced network capabilities.

### Layer 2 VLANs

It is possible to configure **Layer 2 VLANs** on the network interfaces of Bare Metal servers.
Users can:

- **Enable VLAN tagging** to associate one or more VLANs with a single interface.
- **Propagate VLANs** directly on the network interfaces of the servers.

### Network interface aggregation

Each server is equipped with **two network interfaces**. These interfaces can be used independently or combined for better performance and redundancy:

### Network performance

The performance of network interfaces is directly related to the chosen blade class. Example:

- **ECO** blades offer connectivity of 2 x 10 Gbit/s.
- **STANDARD** and higher blades have connectivity of 2 x 25 Gbit/s.

These network options ensure reliable, flexible, and adaptable connectivity for a variety of professional workloads.