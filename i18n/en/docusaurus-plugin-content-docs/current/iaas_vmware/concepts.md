---
title: Concepts
---

Cloud Temple's __IaaS (Infrastructure As A Service)__ offering is designed to meet critical business continuity and recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure guarantees maximum availability and optimal performance for your critical workloads.

## A trusted technology platform

Cloud Temple's IaaS platform relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage.
- Network: __JUNIPER__.
- Virtualization: __VMware__, providing a reliable and proven foundation for managing your cloud environments.
- Backup: __IBM Spectrum Protect Plus__, for backup orchestration and storage.

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

The VMware IaaS product is deployed in an availability zone.
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This type of deployment allows you to choose the location of clusters and distribute them across different availability zones (AZ).
This offers better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---

## Compute

The blades provided by Cloud Temple are __CISCO UCS B200__ or __CISCO UCS X210c__ type. They are fully managed by Cloud Temple (firmware, OS version, etc.) through the Cloud Temple console.

Several categories of compute blades are available in the catalog to support your workloads (Virtualization, Containerization, etc.).
These have different characteristics and performance to best meet your needs. The compute blade catalog evolves regularly.

When used with a virtualization offering, a hypervisor cluster is only composed of compute blades of the same type (it is not possible to mix blades of different types in the same cluster).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          | SKU for VMware offering         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| ECO v3 Blade          | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD v3 Blade     | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE v3 Blade      | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 v3 Blade| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 v3 Blade| 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 v3 Blade| 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 v3 Blade| 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Notes__:

- __(1)__ The amount of memory delivered is what is physically available on the blades. It is not possible to change the physical amount of memory on a blade.

- __(2)__ The minimum base frequency / turbo frequency, expressed in GHz. By default, processors are configured for maximum performance at the BIOS level.

- __(3)__ Physical connectivity is shared for network access and block storage access, as the CISCO platform is converged.

- __(4)__ The actual GPU offering evolves continuously. As of May 1, 2024, the offering is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade comes with 2 L40S cards with 48 GB of RAM. Contact support for more details if needed.

The availability of the compute offering is 99.99%, calculated monthly, including maintenance windows. Eligibility in case of non-compliance with the SLA is subject to
the creation of an incident ticket. You must also have at least two hosts per cluster and activate the __High Availability__ (HA) feature.
This feature allows your architecture to automatically restart your virtual machines on the second hypervisor.
In the event that an availability zone contains only one hypervisor, automatic restart is not possible.

## Network

The network service on Cloud Temple's IaaS platform is based on a network infrastructure using VPLS technology, offering flexible and high-performance segmentation to meet client needs for connectivity and network isolation.

### Level 2 VLANs

The VLANs provided in the IaaS offering are __level 2__ type, offering complete network isolation and adaptable configuration according to needs.

#### Key concepts

- __Sharing between clusters and availability zones (AZ)__:
  - VLANs can be shared between different AZs and different clusters belonging to the same tenant.
- __Inter-tenant propagation__:
  - VLANs can be propagated between multiple tenants belonging to the same organization, facilitating internal communications.

---

### Network performance

The network infrastructure guarantees low latency for optimal performance:

- __Intra-AZ latency__: Less than __3 ms__.
- __Inter-AZ latency__: Less than __5 ms__.

---

### Key points

1. __Flexibility__: VLANs can be configured to adapt to multi-cluster and multi-tenant environments.
2. __High performance__: Minimal latency ensures fast and efficient communication between availability zones.
3. __Isolation and security__: Level 2 VLANs offer strict network segmentation to protect data and flows.

---

## Block storage

Cloud Temple offers several storage classes based on [IBM FlashSystem](https://www.ibm.com/flashsystem/)
and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technology.

__IBM SVC__ technology allows delivering the level of performance required for our clients' environments thanks to the large
amount of cache memory embedded in the controllers and the ability to distribute all IOPS
from a server across multiple SANs.

It is also used to enable replication of your block storage LUNs between
availability zones or to facilitate interventions on storage arrays.

Storage is primarily FLASH NVME storage dedicated to professional workloads.
Disks are used by storage arrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) configuration.

The __'Mass Storage'__ class offers mechanical disks for archiving needs
in a context of economic efficiency. Several performance levels are available:

| Reference                         | Unit | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/TB   | 1 GB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/TB   | 1 GB | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GB | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archiving          | 1 TB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Note__ :*

- *The effective performance for a storage class is linked to the volume actually ordered, according to the notion "IOPS/TB", meaning "IOPS limit per allocated Tera",*

> *Thus, a 0.5TB volume in the 'Standard' performance class will have an IOPS limitation capped at 750 IOPS,*
> *Similarly, a 10TB volume in the 'Ultra' performance class will have an IOPS limitation of up to 150,000 IOPS,*

- *The IOPS limitation is applied to the volume, therefore to the Datastore notion for a VMware environment,*
- *Storage availability is 99.99% measured monthly, including maintenance windows,*
- *There are no restrictions or quotas on reading or writing,*
- *There is no billing per IOPS,*
- *There is no performance commitment on the __'Mass Storage'__ class,*
- *The minimum size of a storage LUN is 500GB,*
- *When using a storage replication mechanism, performances must be identical on both availability zones,*
- *No "intelligent" optimization mechanism such as compression or deduplication is implemented: when you reserve 10TB of storage, you physically have 10TB of useful storage implemented on IBM machines.*
- *Storage LUNs are dedicated to the client environment.*

### Use in the context of the VMware compute offering

When using block storage as a datastore in Cloud Temple's VMware compute offering, __you must take into account several important considerations__:

1. __Swap file (.VSWP) when starting virtual machines__: When a virtual machine starts, it creates a .VSWP file the size of its memory on the disk. Therefore, to be able to start your virtual machines, you must always have free space in your datastore equivalent to the sum of the memory sizes of your virtual machines. For example, if your datastore has 1 TB of block storage and you want to start 10 virtual machines with 64 GB of memory each, 640 GB of disk space will be needed. Without this space, machine startup will be limited by the available capacity to create swap files.

2. __Free space for backup snapshots__: The backup service uses snapshots. You must therefore always have enough free space to allow the creation of a snapshot during the backup of a virtual machine. The size of the snapshot depends on the write volume of the virtual machine and the time needed to perform the backup. As a general rule, it is recommended to maintain at least 10% free space for this operation.

3. __Dynamic disk management__: Be careful with the use of dynamic disks. If you do not control their growth, a lack of physical space can cause the virtual machine to freeze in the best case, or crash with corruption in the worst case. It is crucial to carefully monitor the available space on your datastores when using this type of disk.

Proactive disk space management is essential to ensure the proper functioning of your virtual machines and the reliability of backups. Make sure you always have the necessary space for swap files, snapshots, and the growth of dynamic disks.

## Backup mode storage

Storage dedicated to backing up your virtual machines is auto-provisioned by the platform within the limit of the ordered quota.

| Reference                | Unit | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archiving | 1 TB | csp:(region):iaas:storage:bloc:backup:v1 |

### Block storage replication

#### Principles

To enable the implementation of your disaster recovery plans, when it is not possible to be in
a business continuity situation with application mechanisms and when virtual machine replication
is not suitable, Cloud Temple offers __block storage replication mechanisms between availability zones of a region__.

These replication mechanisms are applied to the storage LUNs of your environments, in addition to backups.
The choice to use a replication mechanism on an environment __depends on many factors including its criticality, the tolerated data loss, or the targeted performance__ for the application.

Cloud Temple offers two types of mechanisms deployed in an active/passive configuration:

- __Asynchronous__ replication (or __'Global Mirror'__): *The __'Global Mirror'__ function provides an asynchronous copy process.
When a host writes to the primary volume, confirmation of the completion of the I/O is received before the write
operation is completed for the copy on the secondary volume. If a failover operation is initiated, the application
must recover and apply all updates that have not been confirmed on the secondary volume.
If I/O operations on the primary volume are paused for a short period,
the secondary volume can become an exact match of the primary volume. This function is comparable to a continuous
backup process where the latest updates are always missing.
When using Global Mirror for disaster recovery purposes, you need to think about how you want to handle these missing updates.*

- __Synchronous__ replication (or __'Metro Mirror'__): *The __'Metro Mirror'__ function is a type of remote copy that creates a synchronous copy
of data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume, but do not receive confirmation
that the write operation is complete until the data is written to the secondary volume. This ensures that both volumes contain identical data when
the copy operation is complete. After the initial copy operation is complete, the Metro Mirror function
permanently maintains a fully synchronized copy of the source data on the target site. __As of January 1, 2024, the 'Metro Mirror' function is no longer marketed.__*

An "active" or "primary" site and a "passive" or "standby" site are then defined.
The disaster recovery plan is activated in case of a disaster or as part of a DRP test request.
The passive site then takes over from the active site.

#### Asynchronous replication

When your workloads require short business recovery times and it is not acceptable
or suitable to use mechanisms such as application replications / virtual machine replication,
it is possible to replicate a SAN storage LUN between two availability zones of the same region.

This offering allows for a __RPO of 15 minutes__ and an __RTO of less than 4 hours__. It allows for a much faster restart than
implementing a backup restoration.

In a storage volume with asynchronous replication (__Global Mirror__), the SAN virtualization controllers of
both availability zones work together to perform write operations on both sites.
The master site does not wait for the write acknowledgment from the slave site.

The steps of a write operation are as follows:

1. A hypervisor wants to perform __a write operation on a Global-Mirror volume__: it sends its request to the SAN controller of its availability zone,
2. The local SAN controller asks the SAN controller of the remote zone to perform the write operation,
3. The local SAN controller does not wait for the acknowledgment from the remote SAN and then performs the write locally,
4. It gives __acknowledgment__ to the hypervisor that issued the request,
5. __Hypervisors on the remote site do not directly access the Global Mirror LUN__: A service request is necessary.

| SLA       | Description                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15min | In case of a disaster on the primary datacenter, the maximum amount of data lost corresponds to at most the last 15 minutes of writing            |
| RTO < 4H  | In case of a disaster on the primary datacenter, business recovery is guaranteed within 4 hours depending on the complexity of the environments   |

In case of DRP activation, the Cloud Temple team performs an operation to present the __'Global Mirror'__ LUN to the remote hypervisors so they can access the data. The implementation of this solution therefore requires having reserved compute resources and RAM on the 'standby' site to resume activity in case of a disaster.

The use of this technology also requires doubling the disk space: it is necessary to have exactly the same space on the remote site as on the local site.

The use of this mechanism can impact the performance of the application by up to 10%. __Only the 500 Iops/TB, 1500 Iops/TB, and 3000 Iops/TB storage classes are compatible.__

| Reference                          | Unit  | SKU                                               |
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN   | 1 TB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Note__* :

- *Since the offering is asynchronous, it is possible during a disaster that some disk operations have not been written to the remote site. There may therefore be a risk to data consistency, to be mitigated in the risk analysis of the disaster recovery plan.*
- *Block storage replication is done in a way that is hidden from virtual machines and applications,*
- *As such, it is important to prioritize application replication scenarios or possibly virtual machine replication,*
- *Compute and memory on the recovery site can be reduced to optimize costs if a degraded situation is acceptable for the business during the disaster recovery plan action.*

## VMware Virtualization

Cloud Temple's SecNumCloud qualified VMware virtualization offering is based on __VMware Vsphere__ technology.

The platform is managed by Cloud Temple automatically (maintaining security conditions, operational conditions, etc.).
It can be controlled via the graphical interface of the Shiva console or via the associated APIs.

*__Note__* : *For security reasons related to the SecNumCloud qualification,
__it is not possible for the client to directly access the VMware virtualization platform__ (no direct access to vCenter in particular).
Indeed, the SecNumCloud qualification requires __total segregation__ between the technical asset control interfaces and the client interface (the Shiva console).*

- The products implemented are VMware ESXi, VMware Vcenter, and VMware Replication.
- *The virtualization offering's network does not use VMware NSX technology, but is controlled materially by Juniper technology and the VPLS protocol.*
- *Storage does not use VMWare vSan technology, but only IBM SANs in 32G fiber channel.*
- *No form of hidden optimization is implemented (compression, deduplication, ...).*

### Definition of a compute blade cluster ('Cpool')

The __'Cpool'__ is a grouping of VMware ESXi hypervisors, also known as *'ESX cluster'*.

The hosts present in a __'Cpool'__ all belong __to the same tenant and the same availability zone__ (AZ). They must necessarily have the same class:
__it is not possible to mix different models of compute blades within the same cluster__.

Since all compute blades are delivered with the maximum physical memory, a limitation on memory usage is applied logically at the cluster level to ensure it corresponds to the billed RAM.

By default, each blade has 128 GB of memory activated within the __'Cpool'__.

A __'Cpool'__ can contain a maximum of 32 hypervisors. Beyond this limit, it will be necessary to create a second cluster.

Storage can be shared between __'Cpools'__.

### Memory Allocation for a 'Cpool'

RAM reservation is configurable by cluster. You can reduce or increase the amount of RAM to match your needs at the cluster level.

__Be careful not to exceed an average of 85% memory consumption per compute blade__.
Indeed, the VMware technology will use an optimization method such as compression which can strongly impact the performance of your workloads and complicate diagnosis.
Similarly, too much memory pressure on your compute blades will force the hypervisor to offload part of its memory to disk to meet the needs of virtual machines.

This case, called __'Ballooning'__, very strongly impacts the overall performance of virtual machines located on the concerned storage (datastore).
__Diagnosis is complicated in this context__, as your monitoring will observe impacts at the CPU level and not at the memory or storage level.
Also keep in mind that the first thing the hypervisor does when starting a virtual machine is to create __a memory swap file__ (.vswap) on
the disk, the size of the memory of the concerned virtual machine. You need to __take this into account when sizing your storage__.

Each compute blade is delivered with 128GB of memory logically activated at the __'Cpool'__ level but physically has all the allocatable memory.

For example, for a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation at the activation of the _*'Cpool'* will be 3 x 128GB = 384 GB of RAM.
You can extend it to a maximum of 3 x 384GB = 1152GB of memory.

    Minimum memory of a 'Cpool' = number of hosts X 128GB of memory
    Maximum memory of a 'Cpool' = number of hosts X the physical memory quantity of the compute blade

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` that is regularly enriched and updated by our teams.
It currently includes several dozen `Templates` and images to mount on your virtual machines.

### Hypervisor Updates

Cloud Temple regularly provides builds for hypervisors to ensure the application of security patches.
However, updating hypervisors remains your responsibility, as we have no visibility into your business constraints.

The update process is fully automated. To ensure service continuity, a minimum of two hypervisors is required per cluster during the update. Make sure you have the necessary permissions to perform these actions.

### Managing Affinity of Your Virtual Machines

__Affinity and anti-affinity rules__ allow you to control the placement of virtual machines on your hypervisors.
They can be used to manage the resource usage of your __'Cpool'__.
For example, they can help balance the workload between servers or isolate resource-intensive workloads.
In a VMware __'Cpool'__, these rules are often used to manage the behavior of virtual machines with vMotion.
vMotion allows moving virtual machines from one host to another without service interruption.

You can configure through rule management:

- __Affinity Rules__: These rules ensure that certain virtual machines are run on the same physical host.
They are used to improve performance by keeping virtual machines that frequently communicate
together on the same server to reduce network latency. Affinity rules are useful in scenarios
where performance is critical, such as in the case of databases or applications that require fast communication between servers.

- __Anti-affinity Rules__: Conversely, these rules ensure that certain virtual machines are not run
on the same physical host. They are important for availability and resilience, for example,
to prevent critical machines from all being affected in case of a single server failure.
Anti-affinity rules are crucial for applications requiring high availability,
such as in production environments where fault tolerance is a priority.
For example, you don't want your two Active Directory servers to be on the same hypervisor.

When creating a rule, you define the rule type (affinity / anti-affinity), the rule name,
its activation state (__'Status'__), and the concerned machines of your hypervisor cluster.

*Note: the affinity/anti-affinity rules offered in the console are rules concerning virtual machines among themselves (no rules between hypervisors and virtual machines).*

### Asynchronous replication of your virtual machines in a VMware environment

Asynchronous replication of your virtual machines is a mechanism that consists of pushing write operations from the source hypervisor to the standby site at regular time intervals.

After an initial hot copy of all active storage to the standby site, only writes are pushed at regular intervals to the dormant site.
This interval depends on the write volume (from every hour to every 24 hours).

Virtual machine replication relies on the hypervisor's snapshot mechanism. As such,
this solution has the same disadvantages, particularly sensitivity to the virtual machine's write volume,
the snapshot process being a recursive mechanism for closing the snapshot.

The typical example of a machine that does not support the virtual machine replication mechanism is an
FTP server that receives real-time streams from surveillance cameras. __The machine spends its time writing and will not
be able to close a snapshot without pausing the operating system for a significant period of time
(several tens of minutes)__. If the hypervisor cannot close the snapshot, that's exactly what it will do,
without the possibility of intervention except to corrupt the virtual machine.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO of 1H to 24H | In case of a disaster on the primary datacenter, the maximum amount of data lost is that of the last push of writes to the standby site.                  |
| RTO  < 15min    | Operation of starting the stopped virtual machine on the remote site                                                                                      |

If needed, or in case of a fault on a machine of the primary site, the mirror machine on the standby site is activated.
Business recovery requires having reserved compute and RAM in standby on the standby site. It
is necessary to have the same storage space on the passive site as on the active site.

| Reference                         | Unit | SKU                                             |
|-----------------------------------|-------|-------------------------------------------------|
| DRP - VMware Replication inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Note__: The calculation of the minimum RPO must be defined according to the rate of change on the virtual machine.*

## Virtual machine backup

Cloud Temple offers __a native and non-disengageable cross-backup architecture__ (it is mandatory in the French SecNumCloud qualification).

Backups are stored in an availability zone and on a physical datacenter different from the one hosting the virtual machine.

This allows protection in case of a major fault on the production datacenter and restoration to a secondary datacenter (fire for example).

This solution includes:

- Hot off-site backup of all disks,
- Presentation and instant startup of a virtual machine from the mass storage infrastructure and hot reloading on production SANs,
- Partial restoration of files from the backup,
- Retention limited only by the allocation of mass storage space.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution, an agentless architecture solution,
easy to use and allowing the automation of backup processes in addition to optimizing mass storage space.

Backup and restoration speeds depend on the rate of change in the environments.
The backup policy is configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note:__*

*__Some virtual machines are not compatible with this backup technology__ which uses the hypervisor's snapshot mechanisms.
These are typically machines whose disk write loads are constant. It is not possible for the hypervisor to close the snapshot, which
forces the freezing of the virtual machine to complete the closing operation. This freeze can last several hours and cannot be stopped.*

*The solution is then to exclude the disk that is the target of permanent writes and to back up the data by another method.*

| Reference                                               | Unit | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service    | 1 VM  | csp:(region):iaas:backup:vm:v1 |

#### Creating a backup policy

To add a new backup policy, you need to make a request to support. Support is accessible from the lifebuoy icon at the top right of the window.

The creation of a new backup policy is done through __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The tenant name
    The backup policy name
    The characteristics (x days, y weeks, z months, ...)
