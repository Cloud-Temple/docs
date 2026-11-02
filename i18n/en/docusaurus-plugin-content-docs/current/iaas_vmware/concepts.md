---
title: Concepts
---

<a id="une-infrastructure-dédiée-et-automatisée"></a>

## Introduction

The __IaaS VMware__ offering is a dedicated VMware virtualization infrastructure, designed to meet critical business continuity and disaster recovery needs, particularly in demanding sectors such as industry, banking and insurance. It ensures high availability and predictable performance for your critical workloads.

Although fully automated through APIs and a Terraform provider, the offering provides a dedicated infrastructure:

- __Dedicated resources__: Compute blades, storage volumes and software stacks (virtualization, backup, firewalling, etc.) are never shared between customers.
- __Maximum predictability__: You control virtualization ratios and IOPS pressure on storage, and benefit from clear, monthly consumption-based billing.

## Benefits

| Benefit             | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital trust       | Data hosting in France and GDPR compliance.                                                                                                    |
| Security            | Highly secure platform, __SecNumCloud__-qualified, certified __HDS__ (Health Data Hosting), __ISO 27001__ and __ISAE 3402 type II__.                   |  
| High availability   | Platform availability rate of 99.99%, measured monthly, maintenance windows included.                                                          |
| Resilience          | Implementation of business continuity or disaster recovery plans as needed.                                                                    |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                          |
| On demand           | Resources available on demand.                                                                                                                 |

<a id="principales-fonctionnalités"></a>

## Features

- Dedicated, on-demand compute resources (CPU, RAM).
- On-demand storage (several classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Console](../console/console.md) or in Infrastructure as Code mode using the APIs and the Terraform provider.

### Cloud Temple virtual machine catalogs

Cloud Temple provides you with a catalog of `Templates` that is regularly enriched and updated by our teams.
It currently includes several dozen `Templates` and images to mount on your virtual machines.

### Managing the affinity of your virtual machines

__Affinity and anti-affinity rules__ allow you to control the placement of virtual machines on your hypervisors.
They can be used to manage resource usage within your __'Cpool'__.
For example, they can help balance the workload across servers or isolate resource-intensive workloads.
In a VMware __'Cpool'__, these rules are often used to manage the behavior of virtual machines with vMotion.
vMotion allows virtual machines to be moved from one host to another without service interruption.

Through rule management, you can configure:

- __Affinity rules__: These rules ensure that certain virtual machines run on the same physical host.
They are used to improve performance by keeping virtual machines that communicate frequently
together on the same server to reduce network latency. Affinity rules are useful in scenarios
where performance is critical, such as databases or applications that require fast communication between servers.

- __Anti-affinity rules__: Conversely, these rules ensure that certain virtual machines do not run
on the same physical host. They are important for availability and resilience, for example
to prevent critical machines from all being affected by the failure of a single server.
Anti-affinity rules are crucial for applications requiring high availability,
such as production environments where fault tolerance is a priority.
For example, you do not want your two Active Directory servers to be on the same hypervisor.

When creating a rule, you define the rule type (affinity / anti-affinity), the rule name,
its activation state (__'Status'__) and the machines concerned in your hypervisor cluster.

*Note: the affinity/anti-affinity rules offered in the console are rules between virtual machines (no rules between hypervisors and virtual machines).*

## Architecture

### A trusted technology platform

Cloud Temple's IaaS platform relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage.
- Network: __JUNIPER__.
- Virtualization: __VMware__, providing a reliable and proven foundation for managing your cloud environments.
- Backup: __IBM Spectrum Protect Plus__, for backup orchestration and storage.

This architecture is based on the __VersaStack__ model, an alliance between Cisco and IBM, ensuring extensive compatibility with the main software vendors.

### VMware virtualization

Cloud Temple's SecNumCloud-qualified VMware virtualization offering is based on __VMware Vsphere__ technology.

The platform is managed automatically by Cloud Temple (security maintenance, operational maintenance, ...).
It can be controlled via the Console's graphical interface or via the associated APIs.

*__Note__*: *For security reasons related to the SecNumCloud qualification,
__the customer cannot directly access the VMware virtualization platform__ (in particular, no direct access to vCenter).
Indeed, the SecNumCloud qualification requires __total segregation__ between the management interfaces of the technical assets and the customer's interface (the Console).*

- The products implemented are VMware ESXi, VMware Vcenter and VMware Replication.
- *The network of the virtualization offering does not use VMware NSX technology, but is managed at the hardware level by Juniper technology and the VPLS protocol.*
- *The storage does not use VMware vSan technology, but only IBM SANs over 32G fiber channel.*
- *No form of hidden optimization is implemented (compression, deduplication, ...).*

#### Definition of a compute blade cluster ('Cpool')

The __'Cpool'__ is a grouping of VMware ESXi hypervisors, also known as an *'ESX cluster'*.

The hosts in a __'Cpool'__ all belong __to the same tenant and the same availability zone__ (AZ). They must necessarily have the same class:
__it is not possible to mix different compute blade models within the same cluster__.

Since all compute blades are delivered with the physical maximum of memory, a software limit on RAM usage is applied at the cluster level to ensure that it matches the billed RAM.

By default, each blade has 128 GB of memory enabled within the __'Cpool'__.

A __'Cpool'__ can contain a maximum of 32 hypervisors. Beyond this limit, a second cluster must be created.

Storage can be shared between __'Cpools'__.

#### Memory allocation for a 'Cpool'

RAM reservation is configurable per cluster. You can reduce or increase the amount of RAM to match your needs at the cluster level.

__Be careful not to exceed an average memory consumption of 85% per compute blade__.
Indeed, VMware technology will use a compression-type optimization method that can severely impact the performance of your workloads and make troubleshooting more complex.
Likewise, excessive memory pressure on your compute blades will force the hypervisor to offload part of its memory to disk to meet the needs of the virtual machines.

This situation, called __'Ballooning'__, very severely impacts the overall performance of the virtual machines located on the storage (datastore) concerned.
__Troubleshooting is complicated in this context__, as your monitoring will show impacts at the CPU level rather than at the memory or storage level.
Also keep in mind that the first thing the hypervisor does when starting a virtual machine is to create __a memory swap file__ (.vswap) on
disk, the size of the memory of the virtual machine concerned. You must __take this into account when sizing your storage__.

Each compute blade is delivered with 128GB of memory enabled by software at the __'Cpool'__ level, but physically has all of the allocatable memory.

For example, for a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation when activating the _*'Cpool'* will be 3 x 128GB = 384 GB of RAM.
You can extend it to a maximum of 3 x 384GB = 1152GB of memory.

    Minimum memory of a 'Cpool' = number of hosts X 128GB of memory
    Maximum memory of a 'Cpool' = number of hosts X the amount of physical memory of the compute blade

#### Hypervisor updates

Cloud Temple regularly provides builds for the hypervisors to ensure that security patches are applied.
However, updating the hypervisors remains your responsibility, as we have no visibility into your business constraints.

The update process is fully automated. To ensure service continuity, a minimum of two hypervisors per cluster is required during the update. Make sure you have the necessary permissions to perform these actions.

## Regions and availability zones

The IaaS VMware product is deployed in an availability zone.
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This type of deployment allows you to choose the location of the clusters and to distribute them across different availability zones (AZ).
This provides better load distribution, maximizes redundancy and facilitates the implementation of a disaster recovery plan (DRP) in the event of an incident.


## Technical specifications

### Compute

The blades provided by Cloud Temple are of type __CISCO UCS B200__ or __CISCO UCS X210c__. They are fully managed by Cloud Temple (firmware, OS version, ...) through the Cloud Temple Console.

Several categories of compute blades are available in the catalog to support your workloads (Virtualization, Containerization, ...).
They have different characteristics and performance levels to best meet your needs. The compute blade catalog evolves regularly.

When used with a virtualization offering, a hypervisor cluster consists only of compute blades of the same type (it is not possible to mix blades of different types within the same cluster).

| Reference              | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads  | Connectivity __(3)__ | GPU __(4)__          |
| ---------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- |
| ECO v3 blade           | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 X 10 Gbit/s        | |
| STANDARD v3 blade      | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        | |
| ADVANCE v3 blade       | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 X 25 Gbit/s        | |
| PERFORMANCE 1 v3 blade | 384 GB       | 3.20/3.6 GHz (Gold 5315Y or equivalent)   | 16 / 32 threads            | 2 X 25 Gbit/s        | |
| PERFORMANCE 2 v3 blade | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 X 25 Gbit/s        | |
| PERFORMANCE 3 v3 blade | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 X 25 Gbit/s        | |
| PERFORMANCE 4 v3 blade | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

__Notes__:

- __(1)__ The amount of memory delivered is the memory physically available on the blades. It is not possible to change the physical amount of memory of a blade.

- __(2)__ Minimum base frequency / turbo frequency, expressed in GHz. By default, processors are configured for maximum performance at the BIOS level.

- __(3)__ Physical connectivity is shared for network access and block storage access, as the CISCO platform is converged.

- __(4)__ The available GPU offering is constantly evolving. It is based on NVIDIA L40S GPUs. By default, the PERF4 blade is delivered with 2 L40S cards with 48 GB of RAM. Contact support for further details if necessary.

### Network

The network service on Cloud Temple's IaaS platform relies on a network infrastructure based on VPLS technology, offering flexible, high-performance segmentation to meet customers' needs for connectivity and network isolation.

#### Layer 2 VLANs

The VLANs provided in the IaaS product are __layer 2__ VLANs, offering complete network isolation and a configuration adaptable to your needs.

##### Main concepts

- __Sharing between clusters and availability zones (AZ)__:
  - VLANs can be shared between the different AZs and the different clusters belonging to the same tenant.
- __Inter-tenant propagation__:
  - VLANs can be propagated between several tenants belonging to the same organization, facilitating internal communications.

---

#### Network performance

The network infrastructure guarantees low latency for optimal performance:

- __Intra-AZ latency__: Less than __3 ms__.
- __Inter-AZ latency__: Less than __5 ms__.

---

#### Key points

1. __Flexibility__: VLANs can be configured to adapt to multi-cluster and multi-tenant environments.
2. __High performance__: Minimal latency ensures fast and efficient communication between availability zones.
3. __Isolation and security__: Layer 2 VLANs provide strict network segmentation to protect data and traffic.

---

### Block storage

Cloud Temple offers several storage classes based on [IBM FlashSystem](https://www.ibm.com/flashsystem/)
and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technology.

__IBM SVC__ technology makes it possible to deliver the level of performance required for our customers' environments thanks to the large
amount of memory cache embedded in the controllers and the ability to distribute all the IOPS
of a server across several SANs.

It is also used to enable the replication of your block storage LUNs between
availability zones or to facilitate interventions on the storage arrays.

The storage is mainly NVME FLASH storage dedicated to professional workloads.
The disks are used by the storage arrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).


The __'Mass Storage'__ storage class offers mechanical disks for archiving needs
in a cost-efficiency context. Several performance levels are available:

| Reference                         | Unit  | Max IOPS ceiling / LUN | Max bandwidth / LUN      |
|-----------------------------------|-------|------------------------|--------------------------|
| FLASH - Essential - 500 IOPS/TB   | 1 GiB | 10 000 IOPS            | 512 MB/s |
| FLASH - Standard - 1500 IOPS/TB   | 1 GiB | 30 000 IOPS            | 1024 MB/s |
| FLASH - Premium - 3000 IOPS/TB    | 1 GiB | 30 000 IOPS            | 1024 MB/s |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GiB | 30 000 IOPS            | 1024 MB/s |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GiB | 30 000 IOPS            | 1024 MB/s |
| MASS STORAGE - Archiving          | 1 TiB | Not guaranteed         | Not guaranteed |

*__Note__:*

- *The effective performance of a LUN (Datastore) increases linearly with the allocated capacity (according to its IOPS/TB ratio), __up to the absolute hardware ceiling defined above__.*

> *For example, a 0.5 TB volume in the 'Standard' class will benefit from 750 IOPS.*
> *However, a 10 TB volume in the 'Ultra' class (theoretically 150 000 IOPS) will be capped by the absolute physical limit and will plateau at 30 000 IOPS and 1024 MB/s.*

- *These limitations (IOPS and bandwidth) apply at the storage volume level, i.e. at the Datastore level for a VMware environment,*
- *There is no restriction or quota on reads or writes,*
- *There is no IOPS-based billing,*
- *There is no performance commitment on the __'Mass Storage'__ class,*
- *The minimum size of a storage LUN is 500GiB,*
- *When using a storage replication mechanism, performance must be identical in both availability zones,*
- *No "intelligent" optimization mechanism such as compression or deduplication is implemented: when you reserve 10TiB of storage, you physically have 10TiB of usable storage implemented on the IBM machines.*
- *Storage LUNs are dedicated to the customer environment.*

#### Use within the VMware compute offering

When using block storage as a datastore in Cloud Temple's VMware compute offering, __you must take several important considerations into account__:

1. __Swap file (.VSWP) when starting virtual machines__: When a virtual machine starts, it creates a .VSWP file on disk the size of its memory. Consequently, to be able to start your virtual machines, you must always have free space in your datastore equivalent to the sum of the memory sizes of your virtual machines. For example, if your datastore has 1 TiB of block storage and you want to start 10 virtual machines with 64 GiB of memory each, 640 GiB of disk space will be required. Without this space, starting the machines will be limited by the capacity available to create the swap files.

2. __Free space for backup snapshots__: The backup service uses snapshots. You must therefore always have enough free space to allow a snapshot to be created when backing up a virtual machine. The size of the snapshot depends on the write volume of the virtual machine and the time needed to perform the backup. As a general rule, it is recommended to keep at least 10% free space for this operation.

3. __Management of dynamic disks__: Be careful when using dynamic disks. If you do not control their growth, a lack of physical space can lead to a freeze of the virtual machine in the best case, or a crash with corruption in the worst case. It is crucial to closely monitor the space available on your datastores when you use this type of disk.

Proactive disk space management is essential to ensure that your virtual machines run properly and that backups are reliable. Always make sure you have the space needed for swap files, snapshots and the growth of dynamic disks.

### Limits

- A hypervisor cluster ('Cpool') contains a maximum of 32 hypervisors, all of the same blade class.
- The minimum size of a storage LUN is 500 GiB.
- A storage volume is capped at 30 000 IOPS and 1024 MB/s (10 000 IOPS and 512 MB/s in the Essential class).
- The physical amount of memory of a blade cannot be changed.
- Automatic restart of virtual machines requires at least two hypervisors per cluster, with High Availability enabled.

## Security and compliance

The platform is __SecNumCloud__-qualified by [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

### Block storage security and encryption

To guarantee the confidentiality of your data at rest, our entire block storage infrastructure includes robust hardware encryption.

- __Encryption type__: Data is encrypted directly on the disks (`Data At Rest`) using the __XTS-AES 256__ algorithm.
- __Compliance__: This encryption method complies with the __FIPS 140-2__ standard, ensuring a validated high level of security.
- __Operation__: Encryption is applied when data is written to the physical storage medium.

:::warning[Note on replication]
It is important to note that this encryption protects the data stored on the disks. It is not active "on-the-fly", which means that data is not encrypted during storage replication operations between availability zones. The security of transfers is ensured by dedicated, secure communication channels.
:::

### Advanced data protection (HSM/KMS)

Cloud Temple offers an __advanced virtual machine encryption__ solution based on hardware security modules (HSM) and a key management service (KMS). This feature strengthens the protection of sensitive data through centralized, secure management of encryption keys, directly integrated into the SecNumCloud environment.

#### Technical architecture

The solution relies on a robust security infrastructure composed of:

- __HSM (Hardware Security Module)__: __Thales Luna S790__ modules certified __FIPS 140-3 Level 3__
- __KMS (Key Management System)__: __Thales CipherTrust Manager__ for centralized key management
- __VMware integration__: Communication via the __KMIP__ (Key Management Interoperability Protocol) protocol

##### High availability deployment

The HSM infrastructure is deployed across __three availability zones__ of the FR1 region:

- PAR7S
- TH3S  
- AZ07

This distribution ensures maximum __high availability__ and __resilience__ of the encryption service.

#### Operation and key hierarchy

The system uses a __cryptographic key hierarchy__ to ensure data security:

| Level | Key type | Description | Location |
|--------|-------------|-------------|--------------|
| 1 | __Root of Trust (RoT)__ | Master key per KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Domain key per customer (multi-tenant isolation) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Encryption key per VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Data key per VM | VMware ESXi |

##### Encryption process

1. __Generation__: VMware ESXi generates a unique DEK for each virtual machine
2. __Protection__: The DEK is encrypted by the KEK stored in CipherTrust Manager
3. __Securing__: The KEK is itself protected by the HSM key hierarchy
4. __Storage__: The encrypted DEK is stored with the VM configuration files

#### Security and compliance

##### Certifications

- __FIPS 140-3 Level 3__: Highest-level certification for HSMs
- __Common Criteria EAL4+__: Advanced security evaluation
- __SecNumCloud__: ANSSI qualification integrated into the Cloud Temple environment

##### Multi-tenant isolation

- __Cryptographic separation__: Each customer has an isolated KMS domain
- __Dedicated keys__: A specific Domain Key per customer
- __Audit and traceability__: Complete logging of actions per domain

#### Activation and usage

Virtual machine encryption is enabled __in a single click__ from the [Console](../console/console.md).

For a detailed procedure with screenshots, see the [virtual machine encryption tutorial](tutorials/vm_encryption.md).

##### Prerequisites

- __Key provider configured__: An HSM/KMS provider must be enabled on the vStack
- __Virtual machine powered off__: The VM must be stopped before encryption
- __No active replication__: The VM must not be replicated (incompatible with Global Mirror)
- __No snapshot__: No snapshot must be present
- __Service subscription__: The advanced protection service must be subscribed

*__Note__: For more details on the prerequisites and the complete procedure, refer to the [VM encryption guide](tutorials/vm_encryption.md).*

#### Limitations and considerations

##### Compatibility

- __Global Mirror__: Encrypted virtual machines are __not compatible__ with Global Mirror replication
- __Restoration__: Backups of encrypted VMs retain their cryptographic protection
- __Export__: Exporting encrypted VMs requires specific procedures

##### Performance

- __Minimal impact__: Hardware encryption ensures optimal performance
- __Transparency__: No impact on the operation of applications

#### Recommended use cases

This advanced protection solution is particularly suited for:

- __Sensitive data__: Personal information, financial data, industrial secrets
- __Regulatory compliance__: Data protection (GDPR) and information security (ISO 27001) requirements
- __Critical sectors__: Banking, insurance, healthcare, defense
- __Digital sovereignty__: Protection against unauthorized access, even in the event of a compromise


*__Note__:*

- *The service requires a specific subscription and is not included in the standard IaaS product*
- *Key management remains entirely under Cloud Temple's control within the SecNumCloud environment*
- *Encryption keys never leave the French, sovereign infrastructure*

## Backup and continuity

### Virtual machine backup

Cloud Temple offers __a native cross-backup architecture that cannot be disabled__ (it is mandatory under the French SecNumCloud qualification).

Backups are stored in an availability zone and in a physical datacenter different from the one hosting the virtual machine. They are encrypted using a 256-bit AES symmetric-key algorithm (cipher mode `xts-plain64`) to guarantee data confidentiality.

This provides protection in the event of a major failure of the production datacenter and allows restoration to a secondary datacenter (in the event of a fire, for example).

This solution includes:

- Hot off-site backup of all disks,
- Instant presentation and startup of a virtual machine from the mass storage infrastructure and hot reloading onto the production SANs,
- Partial restoration of files from the backup,
- Retention limited only by the allocation of mass storage space.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution, an agentless architecture solution,
easy to use and enabling the automation of backup processes as well as optimization of mass storage space.

Backup and restore speeds depend on the rate of change in the environments.
The backup policy can be configured from [the Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note:__*

*__Some virtual machines are not compatible with this backup technology__, which uses the hypervisor's snapshot mechanisms.
These are typically machines with constant disk write loads. The hypervisor cannot close the snapshot, which
forces the virtual machine to be frozen in order to complete the closing operation. This freeze can last several hours and cannot be stopped.*

*The solution is then to exclude the disk that is the target of permanent writes and to back up the data using another method.*


#### Create a backup policy

To add a new backup policy, you must submit a request to support. Support is accessible from the lifebuoy icon at the top right of the window.

A new backup policy is created through __a service request__ specifying:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The name of the backup policy
    The characteristics (x days, y weeks, z months, ...)

### Backup storage

The storage dedicated to backing up your virtual machines is auto-provisioned by the platform within the limit of the ordered quota.


### Block storage replication

#### Principles

To enable the implementation of your disaster recovery plans, when it is not possible to achieve
business continuity with application mechanisms and virtual machine replication
is not suitable, Cloud Temple offers __block storage replication mechanisms between the availability zones of a region__.

These replication mechanisms are applied to the storage LUNs of your environments, in addition to backups.
The choice to use a replication mechanism for an environment __depends on many factors, including its criticality, the tolerated data loss and the target performance__ for the application.

Cloud Temple offers two types of mechanisms deployed in an active/passive configuration:

- __Asynchronous__ replication (or __'Global Mirror'__): *The __'Global Mirror'__ function provides an asynchronous copy process.
When a host writes to the primary volume, confirmation that the I/O has completed is received before the write operation
completes for the copy on the secondary volume. If a failover operation is initiated, the application
must recover and apply all updates that have not been committed on the secondary volume.
If I/O operations on the primary volume are paused for a short period,
the secondary volume can become an exact match of the primary volume. This function is comparable to a continuous
backup process in which the latest updates are always missing.
When you use Global Mirror for disaster recovery purposes, you must consider how you want to handle these missing updates.*

- __Synchronous__ replication (or __'Metro Mirror'__): *The __'Metro Mirror'__ function is a type of remote copy that creates a synchronous copy
of data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume but do not receive confirmation
that the write operation is complete until the data is written to the secondary volume. This ensures that both volumes contain identical data when
the copy operation is complete. After the initial copy operation is complete, the Metro Mirror function
continuously maintains a fully synchronized copy of the source data at the target site. __Since January 1, 2024, the 'Metro Mirror' function is no longer sold.__*

An "active" or "primary" site and a "passive" or "standby" site are then defined.
The disaster recovery plan is activated in the event of a disaster or as part of a DRP test request.
The passive site then takes over from the active site.

#### Asynchronous replication

When your workloads require short recovery times and it is not acceptable
or suitable to use mechanisms such as application replication / virtual machine replication,
it is possible to replicate a SAN storage LUN between two availability zones of the same region.

This product makes it possible to achieve an __RPO of 15 min__ and an __RTO of less than 4H__. It allows recovery much faster than
performing a backup restoration.

In a storage volume with asynchronous replication (__Global Mirror__), the SAN virtualization controllers of
both availability zones work together to perform write operations on both sites.
The master site does not wait for the write acknowledgment from the slave site.

The steps of a write operation are as follows:

1. A hypervisor wants to perform __a write operation on a Global-Mirror volume__: it sends its request to the SAN controller of its availability zone,
2. The local SAN controller asks the SAN controller of the remote zone to perform the write operation,
3. the local SAN controller does not wait for the acknowledgment from the remote SAN and then performs the write locally,
4. It sends the __acknowledgment__ to the hypervisor that issued the request,
5. __The hypervisors of the remote site do not directly access the Global Mirror LUN__: A service request is required.

| Objective  | Description                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 min  | In the event of a disaster at the primary datacenter, the maximum amount of data lost corresponds at most to the last 15 minutes of writes |
| RTO < 4H  | In the event of a disaster at the primary datacenter, recovery is guaranteed within 4 hours depending on the complexity of the environments.          |

If the DRP is activated, the Cloud Temple team presents the __'Global Mirror'__ LUN to the remote hypervisors so that they can access the data. Implementing this solution therefore requires having reserved compute and RAM resources at the 'standby' site to resume activity in the event of a disaster.

Using this technology also requires doubling the disk space: you must have exactly the same space at the remote site as at the local site.

Using this mechanism can impact application performance by up to 10%. __Only the 500 Iops/TB, 1500 Iops/TB and 3000 Iops/TB storage classes are compatible.__


*__Note__*:

- *As the offering is asynchronous, it is possible during a disaster that some disk operations have not been written to the remote site. There may therefore be a risk to data consistency, to be mitigated in the risk analysis of the disaster recovery plan.*
- *Block storage replication is transparent to virtual machines and applications,*
- *For this reason, it is important to favor application replication scenarios or, where appropriate, virtual machine replication,*
- *Compute and memory at the recovery site can be reduced to optimize costs if a degraded situation is acceptable to the business while the disaster recovery plan is in action.*

### Asynchronous replication of your virtual machines in a VMware environment

Asynchronous replication of your virtual machines is a mechanism that consists of pushing write operations from the source hypervisor to the standby site at regular time intervals.

After an initial hot copy of all active storage to the standby site, only writes are pushed at regular intervals to the dormant site.
This interval depends on the write volume (from every hour to every 24 hours).

Virtual machine replication relies on the hypervisor's snapshot mechanism. As such,
this solution has the same drawbacks, in particular sensitivity to the write volume of the virtual machine,
since the snapshot process is a recursive mechanism for closing the snapshot.

The typical example of a machine that does not support the virtual machine replication mechanism is an
FTP server that receives real-time streams from surveillance cameras. __The machine spends its time writing and will not
be able to close a snapshot without pausing the operating system for a significant period of time
(several tens of minutes)__. If the hypervisor cannot close the snapshot, that is exactly what it will do,
with no possibility of intervening except by corrupting the virtual machine.

| Objective        | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO from 1H to 24H | In the event of a disaster at the primary datacenter, the maximum amount of data lost is that of the last push of writes to the standby site. |
| RTO  < 15 min     | Startup of the stopped virtual machine at the remote site                                                                                |

If needed, or in the event of a failure of a machine at the primary site, the mirror machine at the standby site is activated.
Recovery requires having reserved standby compute and RAM at the standby site. You
must have the same storage space at the passive site as at the active site.


*__Note__: The minimum RPO must be calculated according to the rate of change on the virtual machine.*

## Service availability

| Item           | Availability target, measured over one month  |
|----------------|-----------------------------------------------|
| Compute        | 99.99%, maintenance windows included          |
| Block storage  | 99.99%, maintenance windows included          |

The compute availability target assumes at least two hypervisors per cluster, with the __High Availability__ (HA) feature enabled: it automatically restarts your virtual machines on another hypervisor. In an availability zone that contains only one hypervisor, automatic restart is not possible. Any availability-related request must be reported via an incident ticket.

## Responsibilities

The distribution of responsibilities between the customer and Cloud Temple is detailed in the [IaaS responsibility matrix (RACI)](../contractual/iaas/raci.md).

## Reversibility

| Operation                 | Deliverable                  | Timeframe   | Cost           |
|---------------------------|------------------------------|-------------|----------------|
| VM export                 | VMware formats (OVF/VMDK)    | 30 days     | Free of charge |
| Migration assistance      | Technical support            | On request  | On quotation   |
| Secure purge              | Certificate of destruction   | 7 days      | Included       |

## Pricing

Pricing for the IaaS VMware offering is not published. To find out about pricing terms, contact Cloud Temple's sales department:
[contact us](https://www.cloud-temple.com/contactez-nous/).
