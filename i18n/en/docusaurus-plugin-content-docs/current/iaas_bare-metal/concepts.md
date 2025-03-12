---
title: Concepts
---


Cloud Temple's **Bare Metal** offering provides dedicated physical servers associated with distributed block storage.
This solution offers complete customization for clients wishing to manage their own software environments, whether to install a Linux, Windows system, or a hypervisor.

---

## A flexible hardware infrastructure

The Bare Metal offering is based on an architecture designed to meet the needs of critical workloads.

### Main components:
- **Cisco UCS Servers**: Performance-oriented and reliable, these compute blades form the core of the offering.
- **IBM Spectrum Virtualize Storage**: A type of distributed block storage, offering resilience and high performance.

### Architecture

The distributed storage model provides separation between compute (Bare Metal servers) and storage (distributed block), allowing:
- Flexibility to map storage volumes across multiple Bare Metal servers based on needs.
- Optimal customization of compute and storage configurations.
- Enhanced resilience through the use of **Distributed RAID 6**.

---

## Regions and availability zones

The Bare Metal product is deployed in an availability zone.
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This type of deployment allows choosing the location of Bare Metal servers and the ability to distribute them across different availability zones (AZ).
This provides better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---

## Compute blade classes

The compute blades available for the Bare Metal offering provide a range of performance to meet various needs:

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          | 
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notes :
- __(1)__ The amount of memory is physically available on the blades and cannot be modified.
- __(2)__ The indicated frequencies correspond to the minimum base frequency and the turbo frequency.
- __(3)__ Physical connectivity is shared for both network access and block storage access, thanks to a converged Cisco UCS architecture.
- __(4)__ Available GPUs evolve according to the latest technologies. As of May 1, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.

The infrastructure's availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any request related to the SLA must be declared via an incident ticket.

---

## Block mode storage classes

The distributed block storage, based on **IBM Spectrum Virtualize**, offers a range of performance suited to various use cases:

| Reference                         | IOPS/TB                | Main usage                              | 
|-----------------------------------|------------------------|-----------------------------------------|
| **FLASH - Essential**             | 500                    | Light workloads                         |
| **FLASH - Standard**              | 1500                   | Standard workloads                      |
| **FLASH - Premium**               | 3000                   | Intensive workloads                     |
| **FLASH - Enterprise**            | 7500                   | Critical workloads                      |
| **FLASH - Ultra**                 | 15000                  | Ultra-intensive workloads               |
| **MASS STORAGE - Archiving**      | Not applicable         | Cost-effective storage for archiving    |

### Features:
- **Technology**: NVMe Flash with **Distributed RAID 6** for enhanced resilience.
- **Availability**: 99.99%, measured monthly.
- **Restrictions**: No limitations on reads or writes. No automatic compression or deduplication, ensuring full usage of reserved volumes.

---

## Bare Metal Console Access

Access to Bare Metal servers is directly provided via the **Cloud Temple console**. This functionality offers full control over the servers' lifecycle, including:
- **KVM Access**: A direct interface to manage the servers as if you were physically on-site.
- **Management of routine operations**: Possibility to perform actions such as power management, resets, or **ISO mapping** for operating system installation.

This level of access ensures maximum flexibility while adhering to security constraints.

---

## Network connectivity of Bare Metal servers

Bare Metal servers have advanced network features.

### Layer 2 VLAN
It is possible to configure **Layer 2 VLANs** on Bare Metal server network interfaces.
Users can:
- **Enable VLAN tagging** to associate one or more VLANs to the same interface.
- **Propagate VLANs** directly on the servers’ network interfaces.

### Network interface aggregation
Each server is equipped with **two network interfaces**. These interfaces can be used independently or combined for better performance and redundancy:

### Network performance
The performance of network interfaces is directly related to the chosen blade class. Example:
- **ECO** blades offer connectivity of 2 x 10 Gbit/s.
- **STANDARD** and higher blades have connectivity of 2 x 25 Gbit/s.

These network options ensure reliable, flexible connectivity suited to a variety of professional workloads.

---