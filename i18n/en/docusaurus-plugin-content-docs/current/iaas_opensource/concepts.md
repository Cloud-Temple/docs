---
title: Concepts
---

Cloud Temple's __IaaS (Infrastructure as a Service)__ offering is designed to meet the critical needs of business continuity and disaster recovery, with a particular focus on demanding sectors such as industry, banking, and insurance. Built on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A Trusted Technology Platform

Cloud Temple's IaaS platform is built on internationally recognized technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage, and __DELL ECS__ for object storage.
- Networking: __JUNIPER__.
- Virtualization: __Open Source Stack__, providing a reliable and proven foundation for managing your cloud environments.

This architecture is based on the __VersaStack__ model, a collaboration between Cisco and IBM, ensuring broad compatibility with leading software vendors.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared among clients.
- __Maximum predictability__: You control virtualization rates, IOPS pressure on storage, and benefit from clear, consumption-based monthly billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Key Features

- Dedicated and on-demand computing resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Networking resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Shiva Console](../console/console.md) or in Infrastructure as Code mode using APIs and the Terraform provider.

## Benefits

| Benefit             | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital Trust       | Data hosting in France and GDPR compliance.                                                                                                    |
| Security            | Highly secure platform, certified __SecNumCloud__, __HDS__ (Health Data Hosting), __ISO 27001__, and __ISAE 3402 Type II__.                 |
| High Availability   | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                                          |
| Resilience          | Business continuity and disaster recovery plans implemented as needed.                                                                         |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                          |
| On Demand           | Resources available on demand.                                                                                                                 |

## Regions and Availability Zones

The OpenIaaS product is deployed within an availability zone.  
An availability zone is part of a region.

This deployment model allows you to choose the location of clusters and distribute them across different availability zones (AZ).  
This provides better load distribution, maximizes redundancy, and simplifies the implementation of a disaster recovery plan (DRP) in case of an incident.

## Compute Blade Classes

The available compute blades for the Bare Metal offering provide a range of performance levels to meet diverse requirements:

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of Cores / Threads | Connectivity __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 × 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 × 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 × 25 Gbit/s        | 2 × NVIDIA L40S 48GB |

### Notes

- __(1)__ The amount of memory is the physically available memory on the blades and cannot be modified.
- __(2)__ The frequencies listed correspond to the minimum base frequency and the turbo frequency.
- __(3)__ Physical connectivity is shared for both network access and block storage access, thanks to a converged Cisco UCS architecture.
- __(4)__ Available GPUs evolve with the latest technologies. As of May 1, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.
- __(5)__ High availability on a cluster is available only with a minimum of 2 nodes.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be reported via an incident ticket.

## Block Storage Classes

Distributed block storage, based on __IBM Spectrum Virtualize__, offers a range of performance tiers suited to various use cases:

| Reference                         | IOPS/To                 | Primary Usage                          |
|-----------------------------------|-------------------------|----------------------------------------|
| __FLASH - Essential__             | 500                     | Light workloads                        |
| __FLASH - Standard__              | 1500                    | Standard workloads                     |
| __FLASH - Premium__               | 3000                    | Intensive workloads                    |
| __FLASH - Enterprise__            | 7500                    | Critical workloads                     |
| __FLASH - Ultra__                 | 15000                   | Ultra-intensive workloads              |
| __MASS STORAGE - Archival__       | Not applicable          | Cost-effective storage for archival    |

### Features

- __Technology__: Flash NVMe with __Distributed RAID 6__ for enhanced resilience.
- __Availability__: 99.99%, measured monthly.
- __Restrictions__: No limits on reads or writes. No automatic compression or deduplication, ensuring full utilization of allocated volumes.

### Storage Block Security and Encryption

To ensure the confidentiality of your data at rest, our entire block storage infrastructure integrates a robust hardware-based encryption.

-   **Encryption Type**: Data is encrypted directly on the disks (`Data At Rest`) using the **XTS-AES 256** algorithm.
-   **Compliance**: This encryption method complies with the **FIPS 140-2** standard, ensuring a high level of validated security.
-   **Operation**: Encryption is applied at the time data is written to the physical storage medium.

:::warning Attention point regarding replication
It is important to note that this encryption protects data stored on disks. It is not active "on-the-fly," meaning data is not encrypted during storage replication operations between availability zones. Security of transfers is ensured through dedicated, secure communication channels.
:::

---

## Networks

The OpenIaaS product is compatible with [private networks](../network/private_network) and [internet access](../network/internet).

Two types of networks are available from the virtual machine configuration.

### VLAN-type networks

VLAN-type networks must be deployed at a rate of one VLAN per network interface card. If you wish to use multiple networks, simply create multiple network interface cards.

A limitation exists regarding the maximum number of network cards that can be created on a VM, which is 7.

### VLAN Trunk

When you need to propagate more than 7 VLANs, you must use a VLAN Trunk.  
The VLAN Trunk allows all your VLANs to pass through a single network interface. VLAN ID configuration must be performed via virtual VLAN interfaces from the VM's operating system. The VLAN IDs are the same as those present and visible from the console.

## Virtual Machine Backup

Cloud Temple offers a __native, non-disruptive distributed backup architecture__, a mandatory requirement for French SecNumCloud certification.

Backups are stored on the [SecNumCloud-certified Object Storage solution](../storage/oss), ensuring optimal protection in the event of a major datacenter failure. This approach enables data restoration on a secondary datacenter, even in critical incidents such as fires.

This comprehensive solution includes:

- Hot off-site backup of all virtual disks
- Flexible restoration options allowing selection of both recovery point and location

The backup infrastructure is built on an open-source, agentless architecture, combining ease of use with automated processes. This solution optimizes storage space utilization while maintaining high performance.

Backup and restore speeds depend on the rate of change within the environments. Backup policies are fully configurable per virtual machine via the [Cloud Temple Console](../console/console.md).

__Important note:__

*Some virtual machines are incompatible with this backup technology*, which relies on the hypervisor's snapshot mechanisms. This typically applies to machines with continuous disk write workloads. In such cases, the hypervisor cannot complete the snapshot, requiring the virtual machine to be frozen to finalize the operation. This freeze can last several hours and cannot be interrupted.

The recommended solution is then to exclude the disk subject to constant writes and back up the data using an alternative method.

| Reference                                     | Unit  | SKU                            |
| ----------------------------------------------| ----- | ------------------------------ |
| BACKUP - Service access                       | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Creating a Backup Policy

To create a new backup policy, a request must be submitted to support, accessible via the buoy icon located in the top-right corner of the interface.

Creating a new backup policy is done through a __service request__ specifying:

- Your Organization's name  
- Contact details (email and phone number) to finalize the configuration  
- The tenant name  
- The backup policy name  
- Desired characteristics (x days, y weeks, z months, ...)

## Virtual Machines

### vCPU Resource Management

vCPU resource modifications must be performed while the machine is powered off (cold). The platform supports up to 254 vCPUs per virtual machine (theoretical limit), with successful testing conducted on Linux VMs equipped with 128 vCPUs.

It is important to note that guest operating system support is a determining factor when allocating resources. Allocating more resources than supported by the guest operating system may result in significant performance issues.

### Memory Resource Management

Memory modifications are also performed cold. The limits are as follows:

- 1.5 TiB with memory snapshot support
- 8 TiB without memory snapshot support
- 16 TiB (theoretical maximum, without security support, minus RAM allocated to Xen and the control domain)

The actual usable memory may be limited by the guest operating system. Exceeding the limits supported by the guest OS can result in performance degradation.

### Disk Management

- The maximum size of a disk is 2 TB
- Disks use the standard VHD format
- The maximum number of virtual disks per virtual machine, including CD-ROM drives, is 24

It is not possible to resize disks after they are created. To increase storage capacity, a new disk must be created.

### Virtual Machine Tools
These tools are used to ensure optimal performance of virtual machines. When you need to perform an action requiring one of these tools, a message will appear on the Cloud Temple console.

To install these tools, refer to the official Xen Server websites for detailed instructions specific to your operating system.

#### Management Agent

The Management Agent is a component installed on each virtual machine. It enables the hypervisor to better manage the machine by providing access to more information and allows certain actions to be performed more cleanly.

#### PV Drivers (Paravirtualization Drivers)
PV Drivers are drivers installed within the virtual machine to enhance its performance.  
Without these drivers, the machine still functions, but at a slower speed. Additionally, they enable certain advanced operations.  
PV Drivers are natively included in most current Linux kernels.

#### Tools
Tools are a set of software components that enhance the integration of the virtual machine with the virtualization infrastructure.

## Catalogs

The catalog allows you to manage three essential types of items:

- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can access crucial information such as location, number of disks, and number of network adapters.

When the number of virtual disks is shown as 0, this indicates a configuration template without a preinstalled operating system, allowing you to deploy your own customized environment.

## Virtual Machine Replication

The __Virtual Machine Replication__ feature of Cloud Temple ensures the protection and continuity of your critical data by automatically creating copies of your environments in a separate availability zone. This capability, natively integrated into the Open Source IaaS offering, meets the most stringent requirements for business continuity and disaster recovery.

### Automated and Secure Protection

Cloud Temple replication relies on a __SecNumCloud-certified__ infrastructure, ensuring:

- __Asynchronous replication__: Continuous copying of your virtual machines without impacting production performance  
- __Geographic separation__: Replicas stored in a different availability zone than the source  
- __Full automation__: Fully automated process via the [Cloud Temple Console](../console/console.md)  
- __Regulatory compliance__: Adherence to backup and business continuity requirements

### Benefits of Replication

| Benefit                 | Description                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Business Continuity     | Protection of your critical services in case of a major incident at the primary site.                                                          |
| Geographic Protection   | Replication to a distinct availability zone, safeguarding against localized disasters.                                                         |
| Temporal Flexibility    | Choice of replication interval according to your needs: from 1 minute to 24 hours.                                                            |
| Ease of Management      | Configuration and monitoring fully integrated into the Cloud Temple Console.                                                                  |
| SecNumCloud Compliance  | Qualified infrastructure ensuring the highest level of security for your sensitive data.                                                      |

### Replication Configuration

#### Replication Policies

Creating a replication policy defines the protection settings for your virtual machines:

- __Destination__: Select the target storage within the replication availability zone
- __Frequency__: Replication interval tailored to your recovery needs (RPO)
- __Retention__: Number of recovery points to retain

#### Available intervals

| Interval              | Recommended usage                           | RPO (Maximum data loss) |
|-----------------------|---------------------------------------------|--------------------------|
| __1 to 59 minutes__   | Real-time critical applications             | < 1 hour                 |
| __1 to 24 hours__     | Business applications and standard environments | < 24 hours            |

#### Virtual Machine Association

After creating the policy, you can associate your virtual machines to protect:

- __Single selection__: Select VMs from the Console interface  
- __Automatic validation__: Compatibility and prerequisites verification  
- __Immediate activation__: Automatic replication start after configuration

### Replica Management

#### Policy View

The Cloud Temple Console provides a centralized view of your replication policies, including:

- Name and frequency of each policy  
- Destination availability zone  
- Associated pool and storage  
- Available management actions

#### Replica View

The replica table allows you to visualize:

- Names of replicated virtual machines  
- Source and target locations  
- Associated replication policy  
- Export of data in CSV format

### Best practices

#### Recommendations by workload type

- __Critical applications__: Replication every 1–30 minutes to minimize data loss  
- __Business applications__: Hourly or bi-hourly replication depending on requirements  
- __Development environments__: Daily replication typically sufficient

#### Policy Planning

- Create distinct policies according to the criticality of your applications
- Clearly name your policies to facilitate management
- Regularly check the status of your replicas from the console
- Document your replication strategy for your teams

__Important Note:__

*Replication does not replace a full backup strategy. It serves as an essential complement to ensure business continuity in the event of a major incident at your primary site.*

## High Availability

High availability ensures the continuity of virtual machine (VM) services in the event of a physical host failure within an OpenIaaS pool.  
With high availability (HA), each host in the pool regularly sends heartbeat signals to its peers via shared storage (Block Storage Heartbeat). If a host fails to respond for an extended period, it is considered failed.

A designated Block Storage used as a heartbeat means it will serve as the basis for authenticating hosts that no longer respond.

To properly configure high availability within an OpenIaaS pool, it is mandatory to have **at least two hosts** connected.

Each VM must be configured with a high availability restart priority level:

#### Disabled
 High availability is not configured. In the event of host failure, the virtual machine will not be restarted.

#### Restart
In the event of host failure, the virtual machine will be automatically restarted as soon as resources become available in the pool. Virtual machines configured in "restart" mode are prioritized over those configured in "best-effort" mode.

#### Best-effort  
In the event of host failure, the virtual machine will be automatically restarted only if resources remain available after processing all virtual machines configured in "restart" mode. The "best-effort" mode performs only one attempt; therefore, if resources are insufficient, the virtual machine will not be restarted.