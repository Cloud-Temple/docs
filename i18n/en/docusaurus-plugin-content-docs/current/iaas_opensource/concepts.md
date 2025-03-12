---
title: Concepts
---

Cloud Temple's __IaaS (Infrastructure As A Service)__ offering is designed to meet critical business continuity and recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure guarantees maximum availability and optimal performance for your critical workloads.

## A trusted technology platform

Cloud Temple's IaaS platform relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage, and __DELL ECS__ for object storage.
- Network: __JUNIPER__.
- Virtualization: __Opensource Stack__, providing a reliable and proven foundation for managing your cloud environments.

This architecture is based on the __VersaStack__ model, an alliance between Cisco and IBM, ensuring extensive compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- __Maximum predictability__: You control virtualization rates, IOPS pressure on storage, and benefit from clear billing on a monthly consumption basis.

The platform is __SecNumCloud__ qualified by the [ANSSI](https://www.ssi.gouv.fr/), guaranteeing a high level of automation and security.

## Key features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (several classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Shiva Console](../console/console.md) or in Infrastructure as Code mode using APIs and the Terraform provider.

## Benefits

| Benefit             | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital trust       | Data hosting in France and GDPR compliance.                                                                                                    |
| Security            | Highly secure platform, qualified __SecNumCloud__, __HDS__ (Health Data Hosting), __ISO 27001__, and __ISAE 3402 type II__.                    |
| High availability   | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                                         |
| Resilience          | Implementation of business continuity or disaster recovery plans according to needs.                                                           |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                          |
| On demand           | Resources available on demand.                                                                                                                 |

## Regions and availability zones

The OpenIaaS product is deployed in an availability zone.
An availability zone is part of a region.

This type of deployment allows you to choose the location of clusters and distribute them across different availability zones (AZ).
This offers better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---

## Compute blade classes

The compute blades available for the Bare Metal offering provide a range of performance to meet various needs:

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notes

- __(1)__ The amount of memory is what is physically available on the blades and cannot be modified.
- __(2)__ The frequencies indicated correspond to the minimum base frequency and the turbo frequency.
- __(3)__ Physical connectivity is shared for network access and block storage access, thanks to a Cisco UCS converged architecture.
- __(4)__ Available GPUs evolve according to the latest technologies. As of May 1, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.
- __(5)__ HA on a cluster is available only from 3 nodes.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any request related to the SLA must be declared via an incident ticket.

---

## Block storage classes

Distributed block storage, based on __IBM Spectrum Virtualize__, offers a range of performance adapted to various use cases:

| Reference                         | IOPS/TB                 | Main usage                            |
|-----------------------------------|-------------------------|---------------------------------------|
| __FLASH - Essential__             | 500                     | Light workloads                       |
| __FLASH - Standard__              | 1500                    | Standard workloads                    |
| __FLASH - Premium__               | 3000                    | Intensive workloads                   |
| __FLASH - Enterprise__            | 7500                    | Critical workloads                    |
| __FLASH - Ultra__                 | 15000                   | Ultra-intensive workloads             |
| __MASS STORAGE - Archiving__      | Not applicable          | Economical storage for archiving      |

### Characteristics

- __Technology__: NVMe Flash with __Distributed RAID 6__ for increased resilience.
- __Availability__: 99.99%, measured monthly.
- __Restrictions__: No limitation on reads or writes. No automatic compression or deduplication, ensuring full use of reserved volumes.

---

## Networks

The OpenIaaS product is compatible with [private networks](../network/private_network) and [internet access](../network/internet).

Two types of networks are available from the configuration of a virtual machine.

### VLAN type networks

VLAN type networks are to be propagated at a rate of one VLAN per network card. If you want to use multiple networks, simply create multiple network cards.

There is a limitation on the maximum number of cards that can be created on a VM, which is 7.

### VLAN TRUNK

In case you need to propagate more than 7 VLANs, you must use the VLAN Trunk.
The VLAN Trunk allows all your VLANs to pass through a single card. The configuration of VLAN IDs is to be done via virtual interfaces of VLAN type from the VM's OS. The VLAN IDs are the same as those present and visible from the console.

## Virtual machine backup

Cloud Temple offers __a native and non-disengageable distributed backup architecture__, a mandatory element within the framework of the French SecNumCloud qualification.

Backups are stored on the [SecNumCloud qualified Object Storage solution](../storage/oss), ensuring optimal protection in case of a major failure of the production datacenter. This approach allows you to restore your data to a secondary datacenter, even in case of a critical incident such as a fire.

This comprehensive solution includes:

- Hot off-site backup of all disks
- Restoration flexibility allowing you to choose the recovery point and location

The backup infrastructure is based on an agentless architecture opensource technology, combining ease of use and process automation. This solution optimizes the use of storage space while maintaining high performance.

Backup and restoration speeds depend on the rate of change in the environments. The backup policy is fully configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

__Important note:__

*Some virtual machines are not compatible with this backup technology* which uses the hypervisor's snapshot mechanisms. These are typically machines whose disk write loads are constant. In these cases, the hypervisor cannot finalize the snapshot, which requires freezing the virtual machine to complete the operation. This freeze can last several hours and is not interruptible.

The recommended solution is to exclude the disk targeted by permanent writes and back up the data by an alternative method.

| Reference                                    | Unit | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Service access                      | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creating a backup policy

To add a new backup policy, a request must be submitted to support, accessible via the lifebuoy icon located at the top right of the interface.

The creation of a new backup policy is done through __a service request__ specifying:

- The name of your Organization
- Contact details (email and phone) to finalize the configuration
- The tenant name
- The backup policy name
- The desired characteristics (x days, y weeks, z months, ...)

## Virtual machines

### vCPU resource management

vCPU resource modifications are performed cold (machine turned off). The platform supports up to 254 vCPUs per virtual machine (theoretical limit), with conclusive tests performed on Linux VMs equipped with 128 vCPUs.

It is important to note that the support of the guest operating system is a determining factor when allocating resources. An allocation exceeding the limits supported by the operating system can lead to significant performance issues.

### Memory resource management

Memory modifications are also performed cold. The limits are as follows:

- 1.5 TiB with memory snapshot support
- 8 TiB without memory snapshot support
- 16 TiB (theoretical limit without security support, less the RAM allocated to Xen and the control domain)

The actually usable memory may be limited by the guest operating system. Exceeding the limits supported by the guest OS can lead to performance degradation.

### Disk management

- The maximum size of a disk is 2 TB
- Disks use the standard VHD format
- The maximum number of virtual disks per virtual machine, including CD-ROM drives, is 24

It is not possible to resize disks once created. To extend storage capacity, it is necessary to create a new disk.

## Catalogs

The catalog allows you to manage three types of essential elements:

- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can consult crucial information such as location, number of disks, or number of network adapters.

When the number of virtual disks is indicated as 0, it means that it is a configuration template without a pre-installed operating system, allowing you to deploy your own customized environment.
