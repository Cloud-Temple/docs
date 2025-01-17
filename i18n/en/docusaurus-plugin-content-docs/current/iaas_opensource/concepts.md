---
title: Concepts
---

Cloud Temple's __IaaS (Infrastructure As A Service)__ offering is designed to meet critical continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technological platform

Cloud Temple's IaaS platform relies on internationally renowned technology partners:

- Compute: **CISCO UCS**.
- Storage: **IBM Spectrum Virtualize**, **IBM FlashSystem** for block storage, and **DELL ECS** for object storage.
- Network: **JUNIPER**.
- Virtualization: **Open-source Stack**, providing a reliable and proven base for managing your cloud environments.

This architecture is based on the **VersaStack** model, an alliance between Cisco and IBM, ensuring extensive compatibility with leading software vendors.

## A dedicated and automated infrastructure

Although fully automated thanks to APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- **Dedicated resources**: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- **Maximum predictability**: You control virtualization rates, IOPS pressure on storage, and benefit from clear, monthly consumption billing.

The platform is **SecNumCloud** qualified by [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Key features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (various classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Shiva Console](../console/console.md) or Infrastructure as Code mode through APIs and the Terraform provider.

## Advantages

| Advantage            | Description                                                                                                                                    |   
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital trust       | Data hosting in France and GDPR compliance.                                                                                                    |   
| Security            | Highly secure platform, **SecNumCloud**, **HDS** (Health Data Hosting), **ISO 27001**, and **ISAE 3402 type II** certified.                      |  
| High availability   | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                                          |   
| Resilience          | Implementation of continuity or disaster recovery plans as needed.                                                                             |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                           |
| On demand           | Resources available on demand.                                                                                                                  |


## Compute blade classes

The compute blades available for the Bare Metal offering provide a range of performances to meet various needs:

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          | 
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notes:
- __(1)__ The amount of memory is physically available on the blades and cannot be modified.
- __(2)__ The frequencies indicated correspond to the minimum base frequency and turbo frequency.
- __(3)__ Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- __(4)__ Available GPUs evolve with the latest technologies. As of May 1, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.

Infrastructure availability is guaranteed at 99.9%, measured monthly, maintenance windows included. Any SLA-related request must be declared through an incident ticket.

---

## Block storage classes

Distributed block storage, based on **IBM Spectrum Virtualize**, offers a range of performances suitable for various use cases:

| Reference                         | IOPS/TB                | Main usage                              | 
|-----------------------------------|------------------------|-----------------------------------------|
| **FLASH - Essential**             | 500                    | Light workloads                         |
| **FLASH - Standard**              | 1500                   | Standard workloads                     |
| **FLASH - Premium**               | 3000                   | Intensive workloads                     |
| **FLASH - Enterprise**            | 7500                   | Critical workloads                      |
| **FLASH - Ultra**                 | 15000                  | Ultra-intensive workloads               |
| **MASS STORAGE - Archiving**      | Not applicable         | Cost-effective storage for archiving    |

### Features:
- **Technology**: NVMe Flash with **Distributed RAID 6** for increased resilience.
- **Availability**: 99.99%, measured monthly.
- **Restrictions**: No limitations on reads or writes. No automatic compression or deduplication, ensuring the full use of reserved volumes.

---