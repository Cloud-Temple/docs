---
title: Concepts
---

The __IaaS (Infrastructure As A Service)__ offer from Cloud Temple is designed to meet the critical needs of business continuity and disaster recovery, with a particular emphasis on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technological platform

The IaaS platform of Cloud Temple relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage, and __DELL ECS__ for object storage.
- Network: __JUNIPER__.
- Virtualization: __Open Source Stack__, providing a reliable and proven base to manage your cloud environments.

This architecture is based on the __VersaStack__ model, an alliance between Cisco and IBM, ensuring broad compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- __Maximum predictability__: You control virtualization rates, IOPS pressure on storage, and benefit from clear, monthly consumption billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Key Features

- Dedicated and on-demand computing resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Control via the [Shiva Console](../console/console.md) or in Infrastructure as Code mode through APIs and the Terraform provider.

## Advantages

| Advantage           | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital Trust       | Data hosting in France and GDPR compliance.                                                                                                    |
| Security            | Highly secure platform, qualified __SecNumCloud__, __HDS__ (Health Data Hosting), __ISO 27001__ and __ISAE 3402 type II__.                   |
| High Availability   | Platform availability rate of 99.99%, measured monthly, maintenance windows included.                                                         |
| Resilience          | Continuity or recovery plans implemented according to needs.                                                                                   |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                           |
| On demand           | Resources available on demand.                                                                                                                 |

## Regions and Availability Zones

The OpenIaaS product is deployed in an availability zone.
An availability zone is part of a region.

This type of deployment allows you to choose the location of the clusters and distribute them across different availability zones (AZ).
This offers better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---

## Compute Blade Classes

The available compute blades for the Bare Metal offer provide a range of performance to meet various needs:

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of Cores / Threads | Connectivity __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 x 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 x 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 x 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notes

- __(1)__ The amount of memory is the physically available on the blades and cannot be modified.
- __(2)__ The indicated frequencies correspond to the minimum base frequency and the turbo frequency.
- __(3)__ Physical connectivity is mutualized for network access and block storage access, thanks to a converged Cisco UCS architecture.
- __(4)__ Available GPUs evolve based on the latest technologies. As of May 1, 2024, the offer includes NVIDIA LOVELACE L40S GPUs.
- __(5)__ High availability on a cluster is available only from 2 nodes.

The infrastructure availability is guaranteed at 99.9%, measured monthly, maintenance windows included. Any request related to the SLA must be reported via an incident ticket.

## Block Storage Classes

Distributed block storage, based on __IBM Spectrum Virtualize__, offers a range of performance options suitable for various use cases:

| Reference                         | IOPS/To                 | Primary Use                        |
|-----------------------------------|-------------------------|------------------------------------|
| __FLASH - Essential__             | 500                     | Light workloads                    |
| __FLASH - Standard__              | 1500                    | Standard workloads                 |
| __FLASH - Premium__               | 3000                    | Intensive workloads                |
| __FLASH - Enterprise__            | 7500                    | Critical workloads                 |
| __FLASH - Ultra__                 | 15000                   | Ultra-intensive workloads          |
| __MASS STORAGE - Archiving__      | Not applicable          | Economical storage for archiving   |

### Features

- __Technology__ : Flash NVMe with __Distributed RAID 6__ for increased resilience.
- __Availability__ : 99.99%, measured monthly.
- __Restrictions__ : No limitations on reads or writes. No automatic compression or deduplication, ensuring full utilization of reserved volumes.

## Networks

The OpenIaaS product is compatible with [private networks](../network/private_network) and [internet access](../network/internet).

Two types of networks are available from the configuration of a virtual machine.

### VLAN Networks

VLAN networks should be deployed at one VLAN per network card. If you want to use multiple networks, simply create multiple network cards.

A limitation exists on the maximum number of cards that can be created on a VM, which is 7.

### VLAN Trunk

In the case where you need to propagate more than 7 VLANs, you must use the VLAN Trunk.  
The VLAN Trunk allows all your VLANs to pass through a single network interface card. The configuration of VLAN IDs must be done via VLAN-type virtual interfaces from the VM's OS. The VLAN IDs are the same as those present and visible from the console.

## Virtual Machine Backup

Cloud Temple offers a __native, non-disconnectable distributed backup architecture__, a mandatory element for the French SecNumCloud qualification.

Backups are stored on the [SecNumCloud Qualified Object Storage](../storage/oss) solution, ensuring optimal protection in case of major datacenter failure. This approach allows you to restore your data on a secondary datacenter, even in case of critical incidents such as a fire.

This comprehensive solution includes:

- Hot off-site backup of all disks
- Restoration flexibility allowing you to choose the recovery point and location

The backup infrastructure is based on an agentless open-source technology, combining ease of use and process automation. This solution optimizes storage space usage while maintaining high performance.

Backup and restoration speeds depend on the change rate in the environments. The backup policy is fully configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

__Important note:__

*Some virtual machines are not compatible with this backup technology* which uses the hypervisor's snapshot mechanisms. This typically applies to machines with constant disk write loads. In these cases, the hypervisor cannot finalize the snapshot, requiring the virtual machine to be frozen to complete the operation. This freeze can last several hours and is not interruptible.

The recommended solution is then to exclude the disk targeted by permanent writes and to back up the data using an alternative method.

| Reference                                    | Unit | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| SAUVEGARDE - Accès au service                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creating a backup policy

To add a new backup policy, a request must be submitted to support, accessible via the buoy icon located in the top right corner of the interface.

Creating a new backup policy is done via __a service request__ specifying:

- The name of your Organization
- Contact details (email and phone) to finalize the configuration
- The tenant name
- The backup policy name
- Desired characteristics (x days, y weeks, z months, ...)

## Virtual Machines

### vCPU Resource Management

vCPU resource changes are performed when the machine is powered off. The platform supports up to 254 vCPUs per virtual machine (theoretical limit), with successful tests conducted on Linux VMs equipped with 128 vCPUs.

It is important to note that guest OS support is a determining factor when allocating resources. Allocating resources beyond the limits supported by the guest OS can lead to significant performance issues.

### Memory Resource Management

Memory modifications are also performed cold. The limits are as follows:

- 1.5 TiB with memory snapshot support
- 8 TiB without memory snapshot support
- 16 TiB (theoretical limit without security support, minus the RAM allocated to Xen and the control domain)

The actually usable memory may be limited by the guest operating system. Exceeding the limits supported by the guest OS can lead to performance degradation.

### Disk Management

- The maximum size of a disk is 2 TB
- Disks use the standard VHD format
- The maximum number of virtual disks per virtual machine, including CD-ROM drives, is 24

It is not possible to resize disks once created. To expand storage capacity, it is necessary to create a new disk.

### Tools for virtual machines
These tools are used to ensure optimal operation of virtual machines. When you want to perform an action and one of these tools is required, a message will appear on the Cloud Temple console.
To install these tools, you can consult the official Xen Server sites to obtain a precise procedure according to your OS.

#### Management Agent
The Management Agent is a component installed in each virtual machine. It allows the hypervisor to better manage the machine by having access to more information and enables certain actions to be performed more cleanly.

#### PV Drivers (Paravirtualization Drivers)
PV Drivers are drivers installed in the virtual machine to improve its performance.
Without these drivers, the machine works, but more slowly. Additionally, they enable certain advanced actions.
PV Drivers are installed natively on the majority of current Linux kernels.

#### Tools
Tools are a set of software components that improve the integration of the virtual machine with the virtualization infrastructure.

## Catalogs

The catalog allows managing three essential types of elements:

- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can view crucial information such as the location, the number of disks, or the number of network adapters.

When the number of virtual disks is indicated as 0, it means it is a configuration template without a pre-installed operating system, allowing you to deploy your own custom environment.

## High Availability

High Availability ensures the continuity of service for virtual machines (VMs) in case of failure of a physical host within an OpenIaaS pool.  
With High Availability (HA), each host in the pool regularly sends heartbeat signals to its peers via shared storage (Block Storage Heartbeat). If a host fails to respond for an extended period, it is considered failed.

A Block Storage designated as a heartbeat means it will serve as the basis for authenticating hosts that no longer respond.

To properly configure High Availability in an OpenIaaS pool, it is essential to have **at least two hosts** connected.

Each VM must be configured with a High Availability restart priority level:

#### Disabled
High availability is not configured. In case of host failure, the virtual machine will not be restarted.

#### Restart
In case of host failure, the virtual machine will be automatically restarted as soon as resources become available in the pool. Virtual machines configured in "restart" mode are prioritized, before those configured in "best-effort" mode.

#### Best-Effort  
In the event of a host failure, the virtual machine will not be automatically restarted unless resources remain available after processing all virtual machines configured in "restart" mode. The "Best-effort" mode makes only one attempt, so if resources are insufficient, the virtual machine will not be restarted.

## Virtual Machine Replication

Virtual machine replication is an essential feature for ensuring business continuity and implementing disaster recovery plans. This service allows you to create and maintain synchronized copies of your virtual machines across different availability zones.

### Key Features

| Feature | Description |
|---------|-------------|
| **Flexible Intervals** | Configure replication from 1 to 59 minutes or 1 to 24 hours according to your needs |
| **Cross-Zone Replication** | Replicate your VMs between different availability zones for maximum resilience |
| **Automated Management** | Automatic scheduling and execution of replications via the console |
| **Centralized Monitoring** | Track the status and history of all your replications from a single interface |

### Advantages

- **Business Continuity**: Ensure service continuity in case of incidents
- **Disaster Recovery**: Implement robust recovery plans with geographically distributed replicas
- **Flexibility**: Adapt replication frequency to the criticality of your applications
- **Simplicity**: Intuitive management via the Cloud Temple console
- **Security**: Replications are performed within the SecNumCloud qualified infrastructure

### Configuration

Replication configuration is done in two main steps:

#### 1. Creating a Replication Policy

A replication policy defines:
- **Target storage**: The storage repository where replicas will be stored
- **Replication interval**: From 1 to 59 minutes or 1 to 24 hours
- **Target availability zone**: The zone where replicas will be created

#### 2. Associating VMs with the Policy

Once the policy is created, you can:
- Associate one or more virtual machines with this policy
- Monitor replication status for each VM
- Modify associations according to your needs

### Supported Intervals

| Interval Type | Available Values |
|---------------|------------------|
| **Minutes** | 1 to 59 minutes |
| **Hours** | 1 to 24 hours |

### Prerequisites

- Virtual machines must be located in a different availability zone than the target zone
- Target storage must be of type `lvmohba`
- Sufficient storage space in the target zone

### Monitoring and Management

The Cloud Temple console provides:
- **Real-time status** of all replications
- **Execution history** with timestamps and results
- **Performance metrics** for each replication policy
- **Centralized management** of all replication configurations

This replication solution integrates perfectly with Cloud Temple's SecNumCloud qualified infrastructure, ensuring maximum security and compliance for your critical data.
