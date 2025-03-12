---
title: Concepts
---

The __IaaS (Infrastructure As A Service)__ offering from Cloud Temple is designed to meet critical needs in continuity and disaster recovery, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trustworthy technological platform

Cloud Temple's IaaS platform relies on internationally renowned technology partners:

- Compute: **CISCO UCS**.
- Storage: **IBM Spectrum Virtualize**, **IBM FlashSystem** for block storage, and **DELL ECS** for object storage.
- Network: **JUNIPER**.
- Virtualization: **Open-source Stack**, offering a reliable and proven base for managing your cloud environments.

This architecture is built on the **VersaStack** model, an alliance between Cisco and IBM, ensuring extensive compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- **Dedicated resources**: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- **Maximum predictability**: You control virtualization rates, IOPS pressure on storage, and benefit from clear, monthly consumption-based billing.

The platform is **SecNumCloud** certified by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Main Features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (several classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Shiva Console](../console/console.md) or in Infrastructure as Code mode through APIs and the Terraform provider.

## Benefits

| Benefit             | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital trust       | Data hosting in France and GDPR compliance.                                                                                                    |
| Security            | Highly secure platform, certified **SecNumCloud**, **HDS** (Health Data Hosting), **ISO 27001**, and **ISAE 3402 type II**.                     |
| High Availability   | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                                         |
| Resilience          | Implementation of continuity or disaster recovery plans, as needed.                                                                            |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                          |
| On demand           | Resources available on demand.                                                                                                                 |

## Regions and Availability Zones

The OpenIaaS product is deployed in an availability zone. 
An availability zone is part of a region.

This type of deployment allows for the choice of cluster location and the ability to distribute them across different availability zones (AZ).
It offers better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---

## Compute Blade Classes

The compute blades available for the Bare Metal offer provide a range of performances to meet various needs:

| Reference            | RAM  __(1)__ | Frequency __(2)__                         | Number of Cores / Threads | Connectivity __(3)__ | GPU __(4)__          |
|----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notes :
- __(1)__ The amount of memory is physically available on the blades and cannot be modified.
- __(2)__ The indicated frequencies correspond to the minimum base frequency and turbo frequency.
- __(3)__ Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- __(4)__ The available GPUs evolve with the latest technologies. As of May 1, 2024, the offer includes NVIDIA LOVELACE L40S GPUs.
- __(5)__ HA on a cluster is available only from 3 nodes.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any request related to the SLA must be reported via an incident ticket.

---

## Block Storage Classes

Distributed block storage, based on **IBM Spectrum Virtualize**, offers a range of performances suitable for various use cases:

| Reference                        | IOPS/TB                  | Main Usage                            |
|----------------------------------|-------------------------|---------------------------------------|
| **FLASH - Essential**            | 500                     | Light workloads                       |
| **FLASH - Standard**             | 1500                    | Standard workloads                    |
| **FLASH - Premium**              | 3000                    | Intensive workloads                   |
| **FLASH - Enterprise**           | 7500                    | Critical workloads                    |
| **FLASH - Ultra**                | 15000                   | Ultra-intensive workloads             |
| **MASS STORAGE - Archiving**     | Not applicable          | Economic storage for archiving        |

### Features :
- **Technology** : Flash NVMe with **Distributed RAID 6** for increased resilience.
- **Availability** : 99.99%, measured monthly.
- **Restrictions** : No limitations on reads or writes. No automatic compression or deduplication, ensuring full utilization of reserved volumes.

---

## Networks

The OpenIaaS product is compatible with [private networks](../network/private_network) and [internet access](../network/internet).

Two types of networks are available from the configuration of a virtual machine.

### VLAN Networks
VLAN networks are to be propagated at the rate of one VLAN per network card. If you wish to use multiple networks, simply create multiple network cards.

There is a limitation on the maximum number of cards that can be created on a VM, which is 7.

### VLAN TRUNK
If you need to propagate more than 7 VLANs, you must use VLAN Trunk.
The VLAN Trunk passes all your VLANs through a single card. The configuration of VLAN IDs is done through VLAN-type virtual interfaces from the VM's OS. The VLAN IDs are the same as those present and visible from the console.

## Backup of Virtual Machines

Cloud Temple offers **a native and non-bypassable distributed backup architecture**, a mandatory element for French SecNumCloud qualification.

Backups are stored on the [SecNumCloud qualified Object Storage](../storage/oss) solution, ensuring optimal protection in case of a major production data center failure. This approach allows for restoring your data to a secondary data center, even in the event of a critical incident such as a fire.

This comprehensive solution includes:
- Hot off-site backup of all disks
- Flexible restoration allowing for choice of recovery point and location

The backup infrastructure relies on open-source technology with an agentless architecture, combining ease of use and process automation. This solution optimizes storage space usage while maintaining high performance.

Backup and restore speeds depend on the rate of change in the environments. The backup policy is fully configurable from the [Cloud Temple Console](../console/console.md) for each virtual machine.

**Important Remark:**


*Certain virtual machines are not compatible with this backup technology* which uses the hypervisor's snapshot mechanisms. These typically involve machines with constant disk write loads. In such cases, the hypervisor cannot finalize the snapshot, requiring a freeze of the virtual machine to complete the operation. This freeze can last several hours and is not interruptible.

The recommended solution is to exclude the disk targeted by permanent writes and to back up the data using an alternative method.

| Reference                                    | Unit  | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Service Access                      | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creating a Backup Policy

To add a new backup policy, a request must be submitted to support, accessible via the lifebuoy icon located at the top right of the interface.

The creation of a new backup policy is done by **a service request** specifying:
- The name of your Organization
- The contact details (email and phone) for finalizing the configuration
- The tenant name
- The name of the backup policy
- The desired characteristics (x days, y weeks, z months, ...)


## Virtual Machines

### Managing vCPU Resources
vCPU resource modifications are done cold (machine off). The platform supports up to 254 vCPUs per virtual machine (theoretical limit), with successful tests conducted on Linux VMs equipped with 128 vCPUs.

It is important to note that guest operating system support is a determining factor when allocating resources. Allocations exceeding the supported limits of the operating system can lead to significant performance issues.

### Managing Memory Resources
Memory modifications are also done cold. The limits are as follows:
- 1.5 TiB with memory snapshots support
- 8 TiB without memory snapshots support
- 16 TiB (theoretical limit without security support, minus the RAM allocated to Xen and the control domain)

The actually usable memory may be limited by the guest operating system. Exceeding the supported limits by the guest OS can lead to performance degradation.

### Managing Disks
- The maximum size of a disk is 2 TB
- Disks use the standard VHD format
- The maximum number of virtual disks per virtual machine, including CD-ROM drives, is 24

Disks cannot be resized once created. To extend storage capacity, it is necessary to create a new disk.


## Catalogs

The catalog allows you to manage three types of essential elements:
- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can consult crucial information such as the location, the number of disks, or the number of network adapters.

When the number of virtual disks is indicated as 0, this means it is a configuration template without a pre-installed operating system, allowing you to deploy your own customized environment.