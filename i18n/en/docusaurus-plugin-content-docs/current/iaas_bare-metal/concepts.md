---
title: Concepts
---


The **Bare Metal** offering from Cloud Temple provides dedicated physical servers associated with distributed block storage.
This solution offers complete customization for clients wishing to manage their own software environments, whether to install a Linux system, Windows, or a hypervisor.

---

## A Flexible and Hardware Infrastructure

The Bare Metal offering is based on an architecture designed to meet the needs of critical workloads.

### Key Components:
- **Cisco UCS Servers**: High-performance and reliable, these compute blades form the foundation of the offering.
- **IBM Spectrum Virtualize Storage**: A distributed block storage, offering high resilience and performance.

### Architecture

The distributed storage model provides separation between compute (Bare Metal servers) and storage (distributed block), allowing:
- Flexibility to map storage volumes across multiple Bare Metal servers based on needs.
- Optimal customization of compute and storage configurations.
- Enhanced resilience through the use of **Distributed RAID 6**.

---

## Classes of Compute Blades

The compute blades available for the Bare Metal offering provide a range of performance to meet various needs:

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          | 
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notes:
- __(1)__ The amount of memory is physically available on the blades and cannot be modified.
- __(2)__ The indicated frequencies correspond to the minimum base frequency and turbo frequency.
- __(3)__ Physical connectivity is pooled for network access and block storage access, thanks to Cisco UCS converged architecture.
- __(4)__ The available GPUs evolve based on the latest technologies. As of May 1, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be declared through an incident ticket.

---

## Classes of Block Storage

Distributed block storage, based on **IBM Spectrum Virtualize**, offers a range of performance suited to various use cases:

| Reference                         | IOPS/TB                  | Main usage                            | 
|-----------------------------------|--------------------------|---------------------------------------|
| **FLASH - Essential**             | 500                      | Light workloads                       |
| **FLASH - Standard**              | 1500                     | Standard workloads                    |
| **FLASH - Premium**               | 3000                     | Intensive workloads                   |
| **FLASH - Enterprise**            | 7500                     | Critical workloads                    |
| **FLASH - Ultra**                 | 15000                    | Ultra-intensive workloads             |
| **MASS STORAGE - Archiving**      | Not applicable           | Cost-effective storage for archiving  |

### Features:
- **Technology**: Flash NVMe with **Distributed RAID 6** for enhanced resilience.
- **Availability**: 99.99%, measured monthly.
- **Restrictions**: No limitations on reads or writes. No automatic compression or deduplication, ensuring the full use of reserved volumes.

---

## Bare Metal Console Access

Access to Bare Metal servers is done directly from the **Cloud Temple console**. This functionality offers total control over the server lifecycle, including:
- **KVM Access**: A direct interface to manage the servers as if you were physically on-site.
- **Management of routine operations**: Ability to perform actions such as power management, resets, or **ISO mapping** for operating system installation.

This level of access ensures maximum flexibility while adhering to security constraints.

---

## Network Connectivity of Bare Metal Servers

Bare Metal servers feature advanced network functionalities.

### Layer 2 VLAN
It is possible to configure **Layer 2 type VLANs** on the network interfaces of Bare Metal servers.
Users can:
- **Enable VLAN tagging** to associate one or more VLANs with the same interface.
- **Propagate VLANs** directly on the network interfaces of the servers.

### Network Interface Aggregation
Each server is equipped with **two network interfaces**. These interfaces can be used independently or combined for better performance and redundancy:

### Network Performance
The network interface performance is directly related to the chosen blade class. For example:
- **ECO** blades offer connectivity of 2 x 10 Gbit/s.
- **STANDARD** and higher blades have connectivity of 2 x 25 Gbit/s.

These network options guarantee reliable, flexible connectivity suited to a variety of professional workloads.

---