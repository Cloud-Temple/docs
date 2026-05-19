---
title: Concepts
---

Cloud Temple's __IaaS (Infrastructure As A Service)__ offering is designed to meet critical business continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Built on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technological platform

Cloud Temple's IaaS platform relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage.
- Network: __JUNIPER__.
- Virtualization: __VMware__, providing a reliable and proven foundation for managing your cloud environments.
- Backup: __IBM Spectrum Protect Plus__, for backup orchestration and storage.

This architecture is based on the __VersaStack__ model, a partnership between Cisco and IBM, ensuring extensive compatibility with major software vendors.

## Dedicated and automated infrastructure

Although fully automated via APIs and a Terraform provider, Cloud Temple's IaaS product offers a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared among customers.
- __Maximum predictability__: You control virtualization ratios, IOPS load on storage, and benefit from clear, monthly consumption-based billing.

The platform is certified __SecNumCloud__ by [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Key features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Console](../console/console.md) or in Infrastructure as Code mode using APIs and the Terraform provider.

## Advantages

| Advantage           | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital Trust       | Data hosting in France and GDPR compliance.                                                                                                  |
| Security            | Highly secure platform, certified __SecNumCloud__, __HDS__ (Health Data Hosting), __ISO 27001__ and __ISAE 3402 type II__.                   |  
| High Availability   | Platform availability rate of 99.99%, measured monthly, maintenance windows included.                                                        |
| Resilience          | Implementation of business continuity or disaster recovery plans as needed.                                                                  |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                        |
| On Demand           | Resources available on demand.                                                                                                               |

## Regions and Availability Zones

The VMware IaaS product is deployed in an availability zone.
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This deployment type allows you to choose the location of the clusters and distribute them across different availability zones (AZ).
This provides better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in the event of an incident.

---

## Compute

The blades provided by Cloud Temple are of the __CISCO UCS B200__ or __CISCO UCS X210c__ type. They are fully managed by Cloud Temple (firmware, OS version, ...) via the Cloud Temple console.

Several categories of compute blades are available in the catalog to support your workloads (Virtualization, Containerization, ...).
These offer different specifications and performance levels to best meet your needs. The compute blade catalog is regularly updated.

When used with a virtualization offering, a hypervisor cluster consists solely of compute blades of the same type (it is not possible to mix blades of different types within the same cluster).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          | SKU for the VMware offering         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ----------------------------------- |
| ECO v3 Blade          | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 x 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3          |
| STANDARD v3 Blade     | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 x 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3     |
| ADVANCE v3 Blade      | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 x 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3      |
| PERFORMANCE 1 v3 Blade| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads            | 2 x 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3        |
| PERFORMANCE 2 v3 Blade| 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 x 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3        |
| PERFORMANCE 3 v3 Blade| 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 x 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3        |
| PERFORMANCE 4 v3 Blade| 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 x 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3        |

__Notes__ :

- __(1)__ The delivered memory quantity is the physical memory available on the blades. It is not possible to change the physical memory quantity of a blade.

- __(2)__ Base frequency / turbo frequency, expressed in GHz. By default, processors are configured for maximum performance at the BIOS level.

- __(3)__ Physical connectivity is shared for network and block storage access, as the CISCO platform is converged.

- __(4)__ The available GPU offerings are constantly evolving. As of May 1, 2024, the offering is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade is delivered with 2 L40S cards with 48 GB of RAM. Contact support for further details if necessary.

The compute offering availability is 99.99%, calculated monthly, including maintenance windows. Eligibility for SLA non-compliance is subject to
creating an incident ticket. You must also have at least two hosts per cluster and enable the __High Availability__ (HA) feature.
This feature allows your architecture to automatically restart your virtual machines on the second hypervisor.
In the event that an availability zone contains only one hypervisor, automatic restart is not possible.

## Network

The network service on the Cloud Temple IaaS platform relies on a network infrastructure based on VPLS technology, offering flexible and high-performance segmentation to meet customers' needs for connectivity and network isolation.

### Level 2 VLANs

The VLANs provided in the IaaS product are of the __level 2__ type, offering complete network isolation and adaptable configuration according to requirements.

#### Key concepts

- __Sharing between clusters and Availability Zones (AZ)__:
  - VLANs can be shared across different AZs and different clusters belonging to the same tenant.
- __Inter-tenant propagation__:
  - VLANs can be propagated across multiple tenants belonging to the same organization, facilitating internal communications.

---

### Network Performance

The network infrastructure ensures low latency for optimal performance:

- __Intra-AZ Latency__ : Less than __3 ms__.
- __Inter-AZ Latency__ : Less than __5 ms__.

---

### Key Points

1. __Flexibility__: VLANs can be configured to adapt to multi-cluster and multi-tenant environments.
2. __High Performance__: Minimal latency ensures fast and efficient communication between availability zones.
3. __Isolation and Security__: Level 2 VLANs provide strict network segmentation to protect data and traffic.

---

## Block Storage

Cloud Temple offers several storage classes based on [IBM FlashSystem](https://www.ibm.com/flashsystem/) technology
and [IBM SVC](https://www.ibm.com/products/san-volume-controller).

The __IBM SVC__ technology enables delivering the performance level required for our clients' environments thanks to the large
amount of embedded memory cache in the controllers and the ability to distribute all IOPS
from a server across multiple SANs.

It is also used to enable the replication of your block storage LUNs between
availability zones or facilitate maintenance on storage arrays.

The storage is primarily NVME FLASH storage dedicated to enterprise workloads.
The disks are used by the storage arrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

### Block Storage Security and Encryption

To ensure the confidentiality of your data at rest, our entire block storage infrastructure integrates robust hardware encryption.

- __Encryption Type__: Data is encrypted directly on the disks (`Data At Rest`) using the __XTS-AES 256__ algorithm.
- __Compliance__: This encryption method complies with the __FIPS 140-2__ standard, ensuring a validated high level of security.
- __Operation__: Encryption is applied when data is written to the physical storage medium.

:::warning[Note on Replication]
It is important to note that this encryption protects data stored on disks. It is not active "on-the-fly", which means data is not encrypted during storage replication operations between availability zones. Transfer security is ensured by dedicated and secure communication channels.
:::

The __'Mass Storage'__ storage class offers mechanical disks for archival needs in an economically efficient context. Several performance levels are available:

| Reference                         | Unit | Max IOPS Ceiling / LUN | Max Bandwidth / LUN | SKU                                          |
|-----------------------------------|------|------------------------|---------------------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/To   | 1 Gio| 10 000 IOPS            | 512 Mo/s            | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio| 30 000 IOPS            | 1024 Mo/s           | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio| 30 000 IOPS            | 1024 Mo/s           | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio| 30 000 IOPS            | 1024 Mo/s           | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio| 30 000 IOPS            | 1024 Mo/s           | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archival           | 1 Tio| Not guaranteed         | Not guaranteed      | csp:(region):iaas:storage:bloc:mass:v1       |

*__Note__ :*

- *The actual performance of a LUN (Datastore) increases linearly based on the allocated capacity (according to its IOPS/To ratio), __up to the absolute hardware ceiling defined above__.*

> *For example, a 0.5 To volume in the 'Standard' class will benefit from 750 IOPS.*
> *Conversely, a 10 To volume in the 'Ultra' class (theoretically 150 000 IOPS) will be capped by the absolute physical limit and will plateau at 30 000 IOPS and 1024 Mo/s.*

- *These limitations (IOPS and bandwidth) apply at the storage volume level, i.e., at the Datastore level for a VMware environment,*
- *Storage availability is 99.99% measured monthly, including maintenance windows,*
- *There are no restrictions or quotas on read or write operations,*
- *There is no IOPS-based billing,*
- *There is no performance commitment for the __'Mass Storage'__ class,*
- *The minimum size for a storage LUN is 500 Gio,*
- *When using a storage replication mechanism, performance must be identical across both availability zones,*
- *No "intelligent" optimization mechanisms such as compression or deduplication are implemented: when you reserve 10 Tio of storage, you physically have 10 Tio of usable storage deployed on the IBM machines.*
- *Storage LUNs are dedicated to the client environment.*

### Usage within the VMware compute offering

When using block storage as a datastore in Cloud Temple's VMware compute offering, __you must consider several important factors__ :

1. __Swap file (.VSWP) during virtual machine startup__ : When a virtual machine starts, it creates a .VSWP file on disk equal to its memory size. Therefore, to be able to start your virtual machines, you must always have free space in your datastore equivalent to the sum of the memory sizes of your virtual machines. For example, if your datastore has 1 TiB of block storage and you want to start 10 virtual machines with 64 GiB of memory each, 640 GiB of disk space will be required. Without this space, machine startup will be limited by the available capacity to create swap files.

2. __Free space for backup snapshots__ : The backup service uses snapshots (snapshots). Therefore, you must always have sufficient free space to allow the creation of a snapshot when backing up a virtual machine. The size of the snapshot depends on the virtual machine's write volume and the time required to perform the backup. As a general rule, it is recommended to maintain at least 10% free space for this operation.

3. __Dynamic disk management__ : Be cautious when using dynamic disks. If you do not control their growth, a lack of physical space can cause the virtual machine to freeze (freeze) in the best-case scenario, or crash with corruption in the worst-case scenario. It is crucial to closely monitor the available space on your datastores when using this type of disk.

Proactive disk space management is essential to ensure the proper functioning of your virtual machines and the reliability of backups. Always ensure you have the necessary space for swap files, snapshots, and the growth of dynamic disks.

## Backup Storage

The storage dedicated to backing up your virtual machines is auto-provisioned by the platform within the limits of the ordered quota.

| Reference                | Unit | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archiving | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |

### Block-level storage replication

#### Principles

To enable the implementation of your disaster recovery plans, when it is not possible to maintain business continuity using application-level mechanisms and virtual machine replication is not suitable, Cloud Temple offers __block-level storage replication mechanisms between availability zones within a region__.

These replication mechanisms are applied to the storage LUNs of your environments, in addition to backups.
The decision to use a replication mechanism for an environment __depends on numerous factors, including its criticality, the acceptable data loss, or the target performance__ for the application.

Cloud Temple offers two types of mechanisms deployed in an active/passive configuration:

- __Asynchronous__ replication (or __'Global Mirror'__): *The __'Global Mirror'__ function provides an asynchronous copy process.
When a host writes to the primary volume, the I/O completion acknowledgment is received before the write operation
completes for the copy to the secondary volume. If a failover operation is initiated, the application
must recover and apply all updates that have not been confirmed on the secondary volume.
If I/O operations on the primary volume are paused for a short period,
the secondary volume can become an exact match of the primary volume. This function is comparable to a continuous
backup process in which the latest updates are always missing.
When using Global Mirror for disaster recovery purposes, you must consider how you want to handle these missing updates.*

- __Synchronous__ replication (or __'Metro Mirror'__): *The __'Metro Mirror'__ function is a type of remote copy that creates a synchronous copy
of data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume but do not receive confirmation
that the write operation is complete until the data is written to the secondary volume. This ensures that both volumes contain identical data when
the copy operation is complete. After the initial copy operation is complete, the Metro Mirror function
continuously maintains a fully synchronized copy of the source data on the target site. __As of January 1, 2024, the 'Metro Mirror' function is no longer offered for sale.__*

An "active" or "primary" site and a "passive" or "standby" site are then defined.
The disaster recovery plan is activated in the event of a disaster or as part of a DR test request.
The passive site then takes over from the active site.

#### Asynchronous Replication

When your workloads require short recovery time objectives and it is not acceptable
or suitable to use application replication / virtual machine replication mechanisms,
it is possible to replicate a SAN storage LUN between two availability zones within the same region.

This product enables achieving an __RPO of 15min__ and an __RTO of less than 4H__. It allows for much faster recovery than
implementing a backup restoration.

In an asynchronous replication storage volume (__Global Mirror__), the SAN virtualization controllers of
both availability zones work together to perform write operations on both sites.
The master site does not wait for the write acknowledgment from the slave site.

The steps of a write operation are as follows:

1. A hypervisor wishes to perform __a write operation on a Global-Mirror volume__: it sends its request to the SAN controller of its availability zone,
2. The local SAN controller requests the remote zone's SAN controller to perform the write operation,
3. the local SAN controller does not wait for the remote SAN's acknowledgment and performs the write locally,
4. It sends __acknowledgment__ to the hypervisor that issued the request,
5. __Hypervisors at the remote site do not directly access the Global Mirror LUN__: A service request is required.

| SLA       | Description                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15min | In the event of a disaster at the primary datacenter, the maximum amount of lost data corresponds to at most the last 15 minutes of writes         |
| RTO < 4H  | In the event of a disaster at the primary datacenter, business continuity recovery is guaranteed within 4 hours depending on environment complexity.|

In the event of DR plan activation, the Cloud Temple team performs a LUN presentation operation for the __'Global Mirror' LUN__ to the remote hypervisors so they can access the data. Implementing this solution therefore requires having reserved compute and RAM resources at the 'standby' site to resume operations in case of a disaster.

Using this technology also requires doubling the disk space: it is necessary to have exactly the same amount of space on the remote site as on the local site.

Using this mechanism may impact application performance by up to 10%. __Only storage classes 500 Iops/To, 1500 Iops/To, and 3000 Iops/TO are compatible.__

| Reference                          | Unit   | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN   | 1 TiB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Note__*:

- *Since the offering is asynchronous, it is possible during a disaster that some disk operations have not been written to the remote site. There may therefore be a risk to data consistency, which is mitigated in the risk analysis of the disaster recovery plan.*
- *Block storage replication is transparent to virtual machines and applications,*
- *In this regard, it is important to prioritize application replication scenarios or, alternatively, virtual machine replication,*
- *Compute and memory at the recovery site can be reduced to optimize costs if a degraded state is acceptable to the business during disaster recovery plan execution.*

## VMware Virtualization

The VMware Cloud Temple virtualization offer, qualified under SecNumCloud, is based on __VMware vSphere__ technology.

The platform is managed automatically by Cloud Temple (security condition maintenance, operational readiness maintenance, ...).
It can be controlled via the Console's graphical interface or through the associated APIs.

*__Note__*: *For security reasons related to the SecNumCloud qualification,
__the client is not allowed direct access to the VMware virtualization platform__ (no direct access to vCenter, in particular).
Indeed, the SecNumCloud qualification requires __total segregation__ between the technical asset management interfaces and the client interface (the Console).*

- The products implemented are VMware ESXi, VMware vCenter, and VMware Replication.
- *The virtualization offer's network does not use VMware NSX technology, but is managed at the hardware level by Juniper technology and the VPLS protocol.*
- *The storage does not use VMware vSAN technology, but relies exclusively on IBM SANs using 32G fiber channel.*
- *No form of hidden optimization is implemented (compression, deduplication, ...).*

### Definition of a compute blade cluster ('Cpool')

The __'Cpool'__ is a grouping of VMware ESXi hypervisors, also known as the *'ESX cluster'*.

All hosts present in a __'Cpool'__ belong to the same __tenant and availability zone__ (AZ). They must necessarily have the same class:
__it is not possible to mix different compute blade models within the same cluster__.

Since all compute blades are delivered with maximum physical memory, a software-enforced RAM usage limit is applied at the cluster level to ensure it matches the billed RAM.

By default, each blade has 128 GB of enabled memory within the __'Cpool'__.

A __'Cpool'__ can contain a maximum of 32 hypervisors. Beyond this limit, a second cluster will need to be created.

Storage can be shared between __'Cpools'__.

### Memory Allocation for a 'Cpool'

RAM reservation is configurable per cluster. You can reduce or increase the amount of RAM to match your cluster-wide needs.

__Do not exceed an average memory consumption of 85% per compute blade.__
Indeed, VMware technology will use a compression-based optimization method that can significantly impact your workload performance and complicate troubleshooting.
Similarly, excessive memory pressure on your compute blades will force the hypervisor to offload part of its memory to disk to meet virtual machine requirements.

This scenario, known as __'Ballooning'__, severely impacts the overall performance of virtual machines located on the affected datastore.
__Troubleshooting is complicated in this context__, as your monitoring will show impacts at the CPU level rather than memory or storage.
Also keep in mind that the first thing the hypervisor does when starting a virtual machine is to create __a memory swap file__ (.vswap) on
disk, sized to the memory of the affected virtual machine. You must __account for this when sizing your storage__.

Each compute blade comes with 128GB of software-enabled memory at the __'Cpool'__ level, but physically has access to all allocatable memory.

For example, for a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation upon activating _*'Cpool'* will be 3 x 128GB = 384 GB of RAM.
You can extend it to a maximum of 3 x 384GB = 1152GB of memory.

    Minimum memory for a 'Cpool' = number of hosts X 128GB of memory
    Maximum memory for a 'Cpool' = number of hosts X the physical memory quantity of the compute blade

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` regularly enriched and updated by our teams.
It currently includes dozens of `Templates` and images to mount on your virtual machines.

### Hypervisor Updates

Cloud Temple regularly provides builds for hypervisors to ensure the application of security patches.
However, hypervisor updates remain your responsibility, as we have no visibility into your business constraints.

The update process is fully automated. To ensure service continuity, a minimum of two hypervisors per cluster is required during the update. Ensure you have the necessary permissions to perform these actions.

### Managing affinity for your virtual machines

__Affinity and anti-affinity rules__ allow you to control the placement of virtual machines on your hypervisors.
They can be used to manage resource utilization in your __'Cpool'__.
For example, they can help balance workload across servers or isolate resource-intensive workloads.
In a VMware __'Cpool'__, these rules are often used to manage virtual machine behavior with vMotion.
vMotion allows virtual machines to be moved from one host to another without service interruption.

You can configure the following through rule management:

- __Affinity Rules__: These rules ensure that certain virtual machines run on the same physical host.
They are used to improve performance by keeping frequently communicating virtual machines
together on the same server to reduce network latency. Affinity rules are useful in scenarios
where performance is critical, such as with databases or applications that require fast inter-server communication.

- __Anti-Affinity Rules__: Conversely, these rules ensure that certain virtual machines do not run
on the same physical host. They are important for availability and resilience, for example,
to prevent critical machines from being affected simultaneously in the event of a single server failure.
Anti-affinity rules are crucial for applications requiring high availability,
such as in production environments where fault tolerance is a priority.
For example, you do not want your two Active Directories to be on the same hypervisor.

When creating a rule, you define the rule type (affinity / anti-affinity), the rule name,
its activation state (__'Status'__), and the affected machines in your hypervisor cluster.

*Note: The affinity/anti-affinity rules offered in the console are rules regarding virtual machines with respect to each other (no rules between hypervisors and virtual machines).*

### Asynchronous replication of your virtual machines in a VMware environment

Asynchronous replication of your virtual machines is a mechanism that pushes write operations to the standby site at the source hypervisor level at regular time intervals.

After an initial hot copy of all active storage to the standby site, only writes are pushed at regular intervals to the standby site.
This interval depends on the write volume (from every hour to every 24 hours).

Virtual machine replication relies on the hypervisor's snapshot mechanism. As such,
this solution has the same drawbacks, particularly sensitivity to the virtual machine's write volume,
as the snapshot process is a recursive mechanism for snapshot consolidation.

The typical example of a machine that does not support the virtual machine replication mechanism is an
FTP server that receives real-time streams from surveillance cameras. __The machine spends its time writing and will not be
able to consolidate a snapshot without pausing the operating system for a significant period of time
(several tens of minutes)__. If the hypervisor cannot consolidate the snapshot, it will do exactly that,
with no possibility of intervention except by corrupting the virtual machine.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO of 1H to 24H | In the event of a disaster at the primary datacenter, the maximum amount of data lost is that from the last push of writes to the standby site. |
| RTO  < 15mn     | Startup operation of the stopped virtual machine at the remote site                                                                                |

If required, or in the event of a failure on a machine at the primary site, the mirrored machine at the standby site is activated.
Failover requires having reserved compute and RAM in standby at the standby site. It
is necessary to have the same storage capacity at the passive site as at the active site.

| Reference                         | Unit | SKU                                             |  
|-----------------------------------|------|-------------------------------------------------|
| DR - VMware Inter-AZ Replication | 1 vm | csp:(region):iaas:vmware:licence:replication:v1 |

*__Note__: The calculation of the minimum RPO must be defined based on the change rate on the virtual machine.*

## Virtual Machine Backup

Cloud Temple offers __a native, non-bypassable cross-backup architecture__ (it is mandatory in the French SecNumCloud qualification).

Backups are stored in an availability zone and on a physical datacenter different from the one hosting the virtual machine. They are encrypted using a 256-bit AES symmetric key algorithm (cipher mode `xts-plain64`) to ensure data confidentiality.

This protects against major failures in the production datacenter and allows restoration to a secondary datacenter (e.g., in case of fire).

This solution includes:

- Hot off-site backup of all disks,
- Instant presentation and boot of a virtual machine from the mass storage infrastructure, followed by hot reloading onto production SANs,
- Partial file restoration from backups,
- Retention limited only by the allocated mass storage space.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution, an agentless architecture solution,
easy to use, and enables backup process automation in addition to mass storage space optimization.

Backup and restore speeds depend on the change rate within the environments.
The backup policy is configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note:__*

*__Some virtual machines are not compatible with this backup technology__ which uses hypervisor snapshot mechanisms.
These are typically machines with constant disk write loads. The hypervisor cannot close the snapshot, which
requires freezing the virtual machine to complete the close operation. This freeze can last several hours and cannot be stopped.*

*The solution is then to exclude the disk that is the target of permanent writes and back up the data using another method.*

| Reference                                               | Unit | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service    | 1 VM  | csp:(region):iaas:backup:vm:v1 |

#### Create a backup policy

To add a new backup policy, you must submit a request to support. Support is accessible via the lifebuoy icon in the top right corner of the window.

Creating a new backup policy is done by submitting a __service request__ specifying:

    Your Organization's name
    A contact's name along with their email and phone number to finalize the configuration
    The tenant name
    The backup policy name
    Retention settings (x days, y weeks, z months, ...)

## Advanced Data Protection (HSM/KMS)

Cloud Temple offers an __advanced encryption solution for virtual machines__ based on hardware security modules (HSM) and a key management service (KMS). This feature enhances the protection of sensitive data through centralized and secure management of encryption keys, directly integrated into the SecNumCloud environment.

### Technical Architecture

The solution relies on a robust security infrastructure composed of:

- __HSM (Hardware Security Module)__ : Modules __Thales Luna S790__ certified to __FIPS 140-3 Level 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ for centralized key management
- __VMware Integration__ : Communication via the __KMIP__ (Key Management Interoperability Protocol) protocol

#### High Availability Deployment

The HSM infrastructure is deployed across __three availability zones__ in the FR1 region:

- PAR7S
- TH3S  
- AZ07

This distribution ensures maximum __high availability__ and __resilience__ for the encryption service.

### Operation and key hierarchy

The system uses a __cryptographic key hierarchy__ to ensure data security:

| Level | Key Type | Description | Location |
|--------|-------------|-------------|--------------|
| 1 | __Root of Trust (RoT)__ | Master key per KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Domain key per client (multi-tenant isolation) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Encryption key per VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Data encryption key per VM | VMware ESXi |

#### Encryption Process

1. __Generation__: VMware ESXi generates a unique DEK for each virtual machine
2. __Protection__: The DEK is encrypted by the KEK stored in CipherTrust Manager
3. __Securing__: The KEK is itself protected by the HSM key hierarchy
4. __Storage__: The encrypted DEK is stored with the VM configuration files

### Security and compliance

#### Certifications

- __FIPS 140-3 Level 3__ : Highest-level certification for HSMs
- __Common Criteria EAL4+__ : Advanced security evaluation
- __SecNumCloud__ : ANSSI qualification integrated into the Cloud Temple environment

#### Multi-tenant isolation

- __Cryptographic separation__ : Each client has an isolated KMS domain
- __Dedicated keys__ : A specific Domain Key per client
- __Audit and traceability__ : Complete logging of actions per domain

### Activation and usage

Virtual machine encryption is enabled __with a single click__ from the [Console](../console/console.md).

For a detailed procedure with screenshots, see the [virtual machine encryption tutorial](tutorials/vm_encryption.md).

#### Prerequisites

- __Configured key provider__ : An HSM/KMS provider must be enabled on the vStack
- __Virtual machine powered off__ : The VM must be stopped before encryption
- __No active replication__ : The VM must not be replicated (incompatible with Global Mirror)
- __No snapshots__ : No snapshots must be present
- __Service subscription__ : The advanced protection service must be subscribed to

*__Note__ : For more details on the prerequisites and the complete procedure, refer to the [VM encryption guide](tutorials/vm_encryption.md).*

### Limitations and considerations

#### Compatibility

- __Global Mirror__ : Encrypted virtual machines are __not compatible__ with Global Mirror replication
- __Recovery__ : Encrypted VM backups retain their cryptographic protection
- __Export__ : Exporting encrypted VMs requires specific procedures

#### Performance

- __Minimal impact__ : Hardware encryption ensures optimal performance
- __Transparency__ : No impact on application operation

### Recommended Use Cases

This advanced protection solution is particularly well-suited for:

- __Sensitive Data__ : Personal information, financial data, industrial secrets
- __Regulatory Compliance__ : GDPR, HIPAA, PCI-DSS, ISO 27001, PDIS requirements
- __Critical Sectors__ : Banking, insurance, healthcare, defense
- __Digital Sovereignty__ : Protection against unauthorized access, even in the event of a compromise

| Reference | Unit | SKU |
|-----------|-------|-----|
| ADVANCED PROTECTION - VM Encryption via HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Note__ :*

- *The service requires a specific subscription and is not included in the standard IaaS product*
- *Key management remains entirely under Cloud Temple's control within the SecNumCloud environment*
- *Encryption keys never leave the French and sovereign infrastructure*