---
title: Concepts
---

The __IaaS (Infrastructure As A Service)__ offer from Cloud Temple is designed to meet critical continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technological platform

The Cloud Temple IaaS platform relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage, and __DELL ECS__ for object storage.
- Network: __JUNIPER__.
- Virtualization: __Open source Stack__, providing a reliable and proven base for managing your cloud environments.

This architecture is based on the __VersaStack__ model, a partnership between Cisco and IBM, ensuring extended compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, the Cloud Temple IaaS offer provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between customers.
- __Maximum predictability__: You control virtualization rates, IOPS pressure on storage, and benefit from clear, monthly consumption-based billing.

The platform is qualified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Key features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backup with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Console Shiva](../console/console.md) or in Infrastructure as Code mode through APIs and the Terraform provider.

## Advantages

| Advantage           | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital Trust       | Data hosting in France and GDPR compliance.                                                                                          |
| Security            | Highly secure platform, qualified __SecNumCloud__, __HDS__ (Health Data Hosting), __ISO 27001__ and __ISAE 3402 type II__. |
| High availability   | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                        |
| Resilience          | Implementation of continuity or disaster recovery plans according to needs.                                                               |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                        |
| On demand           | Resources available on demand.                                                                                                          |

## Regions and availability zones

The OpenIaaS product is deployed in an availability zone.
An availability zone is part of a region.

This deployment type allows you to choose the location of clusters and distribute them across different availability zones (AZ).
This offers better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---

## Blade server classes

The blade servers available for the Bare Metal offer provide a range of performance levels to meet diverse needs:

| Reference           | RAM  __(1)__ | Frequency __(2)__                         | Number of cores/threads | Connectivity __(3)__ | GPU __(4)__          |
|---------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__            | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__       | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__        | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__  | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__  | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__  | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__  | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notes

- __(1)__ The memory amount is the physically available on the blades and cannot be modified.
- __(2)__ The frequencies indicated correspond to the minimum base frequency and turbo frequency.
- __(3)__ Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- __(4)__ The available GPUs evolve according to the latest technologies. As of May 1, 2024, the offer includes NVIDIA LOVELACE L40S GPUs.
- __(5)__ HA on a cluster is available only from 3 nodes.

The infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be reported via an incident ticket.

---

## Block storage classes

The distributed block storage, based on __IBM Spectrum Virtualize__, offers a range of performance levels suitable for various use cases:

| Reference                         | IOPS/To                 | Primary usage                        |
|-----------------------------------|-------------------------|----------------------------------------|
| __FLASH - Essentiel__             | 500                     | Light workloads             |
| __FLASH - Standard__              | 1500                    | Standard workloads            |
| __FLASH - Premium__               | 3000                    | Intensive workloads                     |
| __FLASH - Enterprise__            | 7500                    | Critical workloads                      |
| __FLASH - Ultra__                 | 15000                   | Ultra-intensive workloads               |
| __MASS STORAGE - Archivage__      | Not applicable          | Cost-effective storage for archiving   |

### Characteristics

- __Technology__: Flash NVMe with __Distributed RAID 6__ for increased resilience.
- __Availability__: 99.99%, measured monthly.
- __Restrictions__: No limitations on reads or writes. No automatic compression or deduplication, ensuring full utilization of reserved volumes.

---

## Networks

The OpenIaaS product is compatible with [private networks](../network/private_network) and [internet access](../network/internet).

Two types of networks are available from the virtual machine configuration.

### VLAN-type networks

VLAN-type networks are deployed with one VLAN per network card. If you want to use multiple networks, simply create multiple network cards.

A limitation exists on the maximum number of network cards that can be created on a VM, which is 7.

### VLAN TRUNK

In cases where you need to deploy more than 7 VLANs, you must use the VLAN Trunk.
The VLAN Trunk allows all your VLANs to pass through a single card. VLAN ID configuration must be done via VLAN-type virtual interfaces from the VM's OS. The VLAN IDs are the same as those present and visible from the console.

## Virtual machine backups

Cloud Temple offers a __native, non-disconnectable distributed backup architecture__, a mandatory element for the French SecNumCloud qualification.

Backups are stored on the [SecNumCloud-qualified Object Storage](../storage/oss) solution, ensuring optimal protection in case of major datacenter failure. This approach allows data restoration on a secondary datacenter, even in critical incidents such as a fire.

This comprehensive solution includes:

- Hot off-site backup of all disks
- Flexibility in restoration allowing selection of the recovery point and location

The backup infrastructure is based on an open-source agentless technology, combining ease of use and process automation. This solution optimizes storage space usage while maintaining high performance.

Backup and restoration speeds depend on the change rate in environments. The backup policy is fully configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

__Important note:__
*Some virtual machines are not compatible with this backup technology* which uses the snapshot mechanisms of the hypervisor. This typically applies to machines with constant disk write loads. In such cases, the hypervisor cannot finalize the snapshot, requiring the virtual machine to be frozen to complete the operation. This freeze can last several hours and is not interruptible.

The recommended solution is to exclude the disk targeted by permanent writes and to back up the data using an alternative method.

| Reference                                    | Unit  | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Service Access                      | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creating a backup policy

To add a new backup policy, a request must be submitted to support, accessible via the buoy icon located in the top right corner of the interface.

Creating a new backup policy is done via a __service request__ specifying:

- Your Organization's name
- Contact details (email and phone number) to finalize the configuration
- The tenant name
- The backup policy name
- Desired characteristics (x days, y weeks, z months, ...)

## Virtual Machines

### vCPU Resource Management

vCPU resource modifications are performed when the machine is off. The platform supports up to 254 vCPUs per virtual machine (theoretical limit), with successful tests conducted on Linux VMs equipped with 128 vCPUs.

It is important to note that guest operating system support is a determining factor when allocating resources. Allocating resources exceeding the limits supported by the guest operating system can lead to significant performance issues.

### Memory Resource Management

Memory modifications are also performed when the machine is off. The limits are as follows:

- 1.5 TiB with memory snapshot support
- 8 TiB without memory snapshot support
- 16 TiB (theoretical limit without security support, minus the RAM allocated to Xen and the control domain)

The actual usable memory may be limited by the guest operating system. Exceeding the limits supported by the guest OS can result in performance degradation.

### Disk Management

- Maximum disk size is 2 TB
- Disks use the standard VHD format
- Maximum number of virtual disks per virtual machine, including CD-ROM drives, is 24

It is not possible to resize disks once created. To increase storage capacity, a new disk must be created.

## Catalogs

The catalog allows managing three essential types of elements:

- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can view crucial information such as location, number of disks, or number of network adapters.

When the number of virtual disks is listed as 0, it indicates a configuration template without a pre-installed operating system, allowing you to deploy your own custom environment.