---
title: Concepts
---

The __IaaS (Infrastructure As A Service)__ offer from Cloud Temple is designed to meet critical continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technological platform

The Cloud Temple IaaS platform relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage.
- Network: __JUNIPER__.
- Virtualization: __VMware__, providing a reliable and proven foundation for managing your cloud environments.
- Backup: __IBM Spectrum Protect Plus__, for orchestration and storage of backups.

This architecture is based on the __VersaStack__ model, a partnership between Cisco and IBM, ensuring extended compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, the Cloud Temple IaaS offer provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- __Maximum predictability__: You control virtualization rates, IOPS pressure on storage, and benefit from clear, monthly consumption-based billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Key features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backup with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Console Shiva](../console/console.md) or in Infrastructure as Code mode through APIs and the Terraform provider.

## Advantages

| Advantage            | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital Trust       | Data hosting in France and GDPR compliance.                                                                                          |
| Security            | Highly secure platform, certified __SecNumCloud__, __HDS__ (Health Data Hosting), __ISO 27001__ and __ISAE 3402 type II__. |  
| High Availability   | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                        |
| Resilience          | Implementation of continuity or disaster recovery plans according to needs.                                                               |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                        |
| On demand           | Resources available on demand.                                                                                                          |

## Regions and Availability Zones

The VMware IaaS product is deployed in an Availability Zone.
An [Availability Zone](../additional_content/concepts_az.md) is part of a [Region](../additional_content/concepts_regional.md).

This type of deployment allows you to choose the location of clusters and distribute them across different Availability Zones (AZ).
This offers better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---

## Compute

The blades provided by Cloud Temple are of type __CISCO UCS B200__ or __CISCO UCS X210c__. They are fully managed by Cloud Temple (firmware, OS version, etc.) through the Cloud Temple console.

Several categories of compute blades are available in the catalog to support your workloads (Virtualization, Containerization, ...).
These blades have different characteristics and performance levels to best meet your needs. The compute blade catalog is regularly updated.

In the context of using a virtualization offering, a hypervisor cluster is composed exclusively of blades of the same type (it is not possible to mix blades of different types in a single cluster).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          | SKU for the VMware offering         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ----------------------------------- |
| Blade ECO v3          | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3          |
| Blade STANDARD v3     | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3     |
| Blade ADVANCE v3      | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3      |
| Blade PERFORMANCE 1 v3| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3        |
| Blade PERFORMANCE 2 v3| 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3        |
| Blade PERFORMANCE 3 v3| 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3        |
| Blade PERFORMANCE 4 v3| 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3        |

__Notes__ :

- __(1)__ The amount of memory provided is the physically available on the blades. It is not possible to change the physical memory of a blade.

- __(2)__ The minimum base frequency / turbo frequency, expressed in GHz. By default, processors are configured for maximum performance at the BIOS level.

- __(3)__ The physical connectivity is shared for network and block storage access, with the Cisco platform being converged.

- __(4)__ The actual GPU offering is constantly evolving. As of May 1, 2024, the offering is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade is delivered with 2 L40S cards with 48 GB of RAM. Contact support for more details if necessary.

The availability of the compute offering is 99.99%, calculated monthly, including maintenance windows. Eligibility in case of SLA non-compliance is subject to creating an incident ticket. You must also have at least two hosts per cluster and activate the __High Availability__ (HA) feature.
This feature allows your architecture to automatically restart your virtual machines on the second hypervisor.
In the case where an Availability Zone contains only one hypervisor, automatic restart is not possible.

## Network

The network service on the Cloud Temple IaaS platform is based on a VPLS technology infrastructure, offering flexible and high-performance segmentation to meet client needs for connectivity and network isolation.

### Layer 2 VLANs

The VLANs available in the IaaS offering are of __Layer 2__ type, providing complete network isolation and adaptable configuration according to needs.

#### Key concepts

- __Sharing between clusters and Availability Zones (AZ)__ :
  - VLANs can be shared between different AZs and clusters belonging to the same tenant.
- __Inter-tenant propagation__ :
  - VLANs can be propagated between multiple tenants belonging to the same organization, facilitating internal communications.

---

### Network performance

The network infrastructure guarantees low latency for optimal performance:

- __Intra-AZ latency__: Less than __3 ms__.
- __Inter-AZ latency__: Less than __5 ms__.

---

### Key points

1. __Flexibility__: VLANs can be configured to adapt to multi-cluster and multi-tenant environments.
2. __High performance__: Minimal latency ensures fast and efficient communication between Availability Zones.
3. __Isolation and security__: Layer 2 VLANs provide strict network segmentation to protect data and traffic.

---

## Block Storage

Cloud Temple offers several storage classes based on the [IBM FlashSystem](https://www.ibm.com/flashsystem/) and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technologies.

The __IBM SVC__ technology enables delivering the required performance level for our clients' environments through the large amount of embedded memory cache in the controllers and the ability to distribute the IOPS of a server across multiple SANs.
It is also used to enable the replication of your block storage LUNs between availability zones or to facilitate maintenance on storage arrays.

Storage is primarily flash NVME storage dedicated to professional workloads.
The disks are used by storage arrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

The __'Mass Storage'__ storage class offers mechanical disks for archiving needs
in an economic efficiency context. Several performance levels are available:

| Reference                         | Unit | SKU                                          |
|-----------------------------------|------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/To   | 1 GiB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 GiB | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 GiB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 GiB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 GiB | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archiving          | 1 TiB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Note__ :*

- *The effective performance for a storage class is related to the actual volume ordered, according to the "IOPS/To" concept, meaning "IOPS limit per allocated Terabyte",*

> *Thus, a 0.5To volume in the 'Standard' performance class will have an IOPS limit capped at 750 IOPS,*
> *Similarly, a 10To volume in the 'Ultra' performance class will have an IOPS limit of 150000 IOPS,*

- *The IOPS limit applies to the volume, therefore to the Datastore concept for a VMware environment,*
- *Storage availability is 99.99% measured monthly, including maintenance window,*
- *There are no restrictions or quotas on read or write operations,*
- *There is no billing based on IOPS,*
- *There is no performance commitment for the __'Mass Storage'__ class,*
- *The minimum size of a storage LUN is 500GiB,*
- *When using a storage replication mechanism, performances must be identical in both availability zones,*
- *No "intelligent" optimization mechanisms such as compression or deduplication are implemented: when you reserve 10TiB of storage, you physically have 10TiB of usable storage implemented on IBM machines.*
- *Storage LUNs are dedicated to the client environment.*

### Usage within the VMware compute offer

Within the context of using block storage in the form of a datastore in Cloud Temple's VMware compute offer, __you must take into account several important considerations__ :

1. __Swap file (.VSWP) when starting virtual machines__ : When a virtual machine starts, it creates a .VSWP file of the size of its memory on the disk. Therefore, to be able to start your virtual machines, you must always have free space in your datastore equivalent to the sum of the memory sizes of your virtual machines. For example, if your datastore has 1 TiB of block storage and you want to start 10 virtual machines each with 64 GiB of memory, 640 GiB of disk space will be required. Without this space, the startup of the machines will be limited by the available capacity to create the swap files.

2. __Free space for backup snapshots__ : The backup service uses instant snapshots (snapshots). You must therefore always have sufficient free space to allow the creation of a snapshot during the backup of a virtual machine. The size of the snapshot depends on the write volume of the virtual machine and the time required to perform the backup. Generally, it is recommended to maintain at least 10% free space for this operation.

3. __Management of dynamic disks__ : Be cautious with the use of dynamic disks. If you do not control their growth, a lack of physical space can lead to a freeze (freeze) of the virtual machine in the best case, or a crash with corruption in the worst case. It is crucial to carefully monitor the available space on your datastores when using this type of disk.

Proactive disk space management is essential to ensure the proper functioning of your virtual machines and the reliability of backups. Make sure you always have the necessary space for swap files, snapshots, and dynamic disk growth.

## Backup storage

The storage dedicated to backing up your virtual machines is auto-provisioned by the platform within the ordered quota.

| Reference                | Unit | SKU                                      |
|--------------------------|------|------------------------------------------|
| MASS STORAGE - Archiving | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |

### Block storage replication

#### Principles

To implement your business continuity plans, when it is not possible to be in an active state with application mechanisms and when virtual machine replication is not appropriate, Cloud Temple offers __block storage replication mechanisms between availability zones of a region__.

These replication mechanisms are applied on the storage LUNs of your environments, in addition to backups.
The choice to use a replication mechanism on an environment __depends on many factors including its criticality, the acceptable data loss or the performance target__ for the application.

Cloud Temple offers two types of mechanisms deployed in an active/passive configuration:

- Asynchronous replication (or __'Global Mirror'__) : *The __'Global Mirror'__ function provides an asynchronous copy process.
When a host writes to the primary volume, the confirmation of the completion of the I/O is received before the write operation completes for the copy on the secondary volume. If a failover operation is initiated, the application must recover and apply all updates that were not confirmed on the secondary volume.
If I/O operations on the primary volume are paused for a short period,
the secondary volume can become an exact match of the primary volume. This function is comparable to a continuous backup process in which the latest updates are always missing.
When using Global Mirror for disaster recovery, you must consider how you want to manage these missing updates.*

- Synchronous replication (or __'Metro Mirror'__) : *The __'Metro Mirror'__ function is a remote copy that creates a synchronous copy
of the data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume, but do not receive confirmation
that the write operation is complete until the data is written to the secondary volume. This ensures that both volumes contain identical data when
the copy operation is complete. After the initial copy operation is complete, the Metro Mirror function
maintains a fully synchronized copy of the source data on the target site permanently. __Since January 1, 2024, the 'Metro Mirror' function is no longer marketed.__*

A site is then defined as "active" or "primary" and a "passive" or "standby" site.
The business continuity plan is activated in case of disaster or during a PRA test request.
The passive site then takes over from the active site.

#### Asynchronous replication

When your workloads require short recovery time objectives and it is not acceptable
or appropriate to use application-based replication mechanisms / virtual machine replication,
it is possible to replicate a SAN storage LUN between two availability zones of the same region.

This offer allows to achieve a __RPO of 15 minutes__ and a __RTO of less than 4 hours__. It allows to restart much faster than
implementing a backup restoration.

In an asynchronous replicated storage volume (__Global Mirror__), the SAN virtualization controllers of
the two availability zones work together to perform write operations on both sites.
The primary site does not wait for the write acknowledgment from the secondary site.

The steps of a write operation are as follows:

1. A hypervisor wants to perform __a write operation on a Global-Mirror volume__: it sends its request to the SAN controller of its availability zone,
2. The local SAN controller requests the SAN controller of the remote zone to perform the write operation,
3. the local SAN controller does not wait for the acknowledgment from the remote SAN and performs the write locally,
4. it gives __acknowledgment__ to the hypervisor that issued the request,
5. __The hypervisors of the remote site do not directly access the Global Mirror LUN__: a service request is necessary.

| SLA       | Description                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In case of a disaster in the main datacenter, the maximum amount of data lost corresponds to the maximum of the last 15 minutes of writes |
| RTO < 4H  | In case of a disaster in the main datacenter, business recovery is guaranteed within 4 hours according to the complexity of the environments.          |

In case of activation of the PRA, the Cloud Temple team performs a presentation operation of the LUN __'Global Mirror'__ to the remote hypervisors so that they can access the data. The implementation of this solution therefore requires reserving computing resources and RAM on the 'standby' site to resume operations in case of a disaster.

The use of this technology also requires doubling the disk space: it is necessary to have exactly the same space on the remote site as on the local site.

The use of this mechanism can impact application performance by up to 10%. __Only the 500 Iops/To, 1500 Iops/To and 3000 Iops/TO storage classes are compatible.__

| Reference                          | Unit  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN  | 1 TiB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Note__* :

- *Since the offer is asynchronous, it is possible during a disaster that some disk operations have not been written to the remote site. There may therefore be a risk of data inconsistency, mitigated in the risk analysis of the business recovery plan.*
- *Block storage replication is done in a transparent way for virtual machines and applications,*
- *In this regard, it is important to prioritize application replication scenarios or potentially virtual machine replication,*
- *The computing and memory resources on the recovery site can be reduced to optimize costs if a degraded situation is acceptable for the business during the business recovery plan action.*

## VMware Virtualization

The VMware Cloud Temple virtualization offer qualified SecNumCloud is based on the __VMware Vsphere__ technology.

The platform is managed by Cloud Temple in an automated way (security condition maintenance, operational condition maintenance, ...).
It is manageable via the graphical interface of the Shiva console or via the associated APIs.

*__Note__* : *For security reasons related to the SecNumCloud qualification, __it is not possible for the client to directly access the VMware virtualization platform__ (no direct access to vCenter for example).
Indeed, the SecNumCloud qualification imposes __a complete segregation__ between the management interfaces of technical assets and the client's interface (the Shiva console).*

- The products deployed are VMware ESXi, VMware Vcenter and VMware Replication.
- *The virtualization offer network does not use the VMware NSX technology, but is managed via the Juniper technology and the VPLS protocol.*
- *The storage does not use the VMware vSan technology, but only IBM SANs in 32G fiber channel.*
- *No form of hidden optimization is implemented (compression, deduplication, ...).*

### Definition of a Compute Blade Cluster ('Cpool')

The __'Cpool'__ is a grouping of VMware ESXi hypervisors, also known as a *'cluster ESX'*.

The hosts present in a __'Cpool'__ all belong to __the same tenant and the same availability zone__ (AZ). They must necessarily have the same class:
__it is not possible to mix different models of compute blades within a single cluster__.

All compute blades are delivered with the maximum physical memory, a software-based RAM usage limitation is applied at the cluster level to ensure it corresponds to the billed RAM.

By default, each blade has 128 GB of memory enabled within the __'Cpool'__.

A __'Cpool'__ can contain a maximum of 32 hypervisors. Beyond this limit, it will be necessary to create a second cluster.

Storage can be shared between the __'Cpool'__.

### Memory Allocation for a 'Cpool'

RAM reservation is configurable per cluster. You can reduce or increase the amount of RAM to match your needs at the cluster level.

__Be careful not to exceed an average of 85% memory consumption per compute blade__.
Indeed, the VMware technology will use a compression-based optimization method that can significantly impact the performance of your workloads and complicate diagnostics.
Similarly, excessive memory pressure on your compute blades will force the hypervisor to offload part of its memory to disk to meet the needs of the virtual machines.

This case, called __'Ballooning'__ significantly impacts the performance of all virtual machines located on the affected storage (datastore).
__Diagnosis is complicated in this context__, as your metering will detect impacts at the CPU level and not at the memory or storage level.
Keep in mind that the first thing the hypervisor does when starting a virtual machine is to create a memory swap file (.vswap) on the disk, of the size of the memory of the concerned virtual machine. You must __take this into account in your storage sizing__.

Each compute blade is delivered with 128 GB of memory enabled at the __'Cpool'__ level but has the full physical memory available.

For example, for a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation at activation of the _*'Cpool'*_ will be 3 x 128 GB = 384 GB of RAM.
You can extend it up to a maximum of 3 x 384 GB = 1152 GB of memory.

    Minimum memory of a 'Cpool' = number of hosts X 128 GB of memory
    Maximum memory of a 'Cpool' = number of hosts X the physical memory quantity of the compute blade

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` regularly enriched and updated by our teams.
It currently includes several dozen `Templates` and images to mount on your virtual machines.

### Hypervisor Updates

Cloud Temple regularly provides builds for hypervisors to ensure the application of security patches.
However, the update of hypervisors remains your responsibility, as we do not have visibility on your business constraints.

The update process is fully automated. To ensure service continuity, a minimum of two hypervisors is required per cluster during the update. Make sure you have the necessary permissions to perform these actions.

### Management of Your Virtual Machine Affinity

The __affinity and anti-affinity rules__ allow you to control the location of virtual machines on your hypervisors.
They can be used to manage the use of resources in your __'Cpool'__.
For example, they can help balance the workload between servers or isolate resource-intensive workloads.
In a __'Cpool'__ VMware, these rules are often used to manage the behavior of virtual machines with vMotion.
vMotion allows moving virtual machines from one host to another without service interruption.

You can configure through rule management:

- __Affinity Rules__: These rules ensure that certain virtual machines are executed on the same physical host.
They are used to improve performance by keeping virtual machines that communicate frequently together on the same server to reduce network latency. Affinity rules are useful in scenarios where performance is critical, such as in the case of databases or applications that require fast communication between servers.

- __Anti-Affinity Rules__: Conversely, these rules ensure that certain virtual machines are not executed on the same physical host. They are important for availability and resilience, for example, to avoid all critical machines being affected in case of a single server failure.
Anti-affinity rules are crucial for applications requiring high availability, such as in production environments where fault tolerance is a priority.
For example, you do not want your two Active Directories to be on the same hypervisor.

When creating a rule, you define the type of rule (affinity / anti-affinity), the name of the rule, its activation status (__'Status'__), and the virtual machines concerned in your hypervisor cluster.

*Note: the affinity/anti-affinity rules proposed in the console are rules concerning virtual machines between them (not rules between hypervisors and virtual machines).*

### Asynchronous Replication of Your Virtual Machines in VMware Environment

Asynchronous replication of your virtual machines is a mechanism that consists of pushing write operations from the source hypervisor to the standby site at regular intervals.

After an initial hot copy of the entire active storage to the standby site, only writes are pushed at regular intervals to the sleeping site.
This interval depends on the volume of writes (from every hour to every 24 hours).
VM replication relies on the hypervisor's snapshot mechanism. In this regard, this solution has the same disadvantages, particularly the sensitivity to the volume of writes from the virtual machine, as the snapshot process is a recursive mechanism for closing the snapshot.

The typical example of a machine that does not support the VM replication mechanism is an FTP server receiving real-time streams from surveillance cameras. __The machine is constantly writing and will not be able to close a snapshot without pausing the operating system for a significant period of time (several tens of minutes).__ If the hypervisor is unable to close the snapshot, this is exactly what it will do, without the possibility of intervening except by corrupting the virtual machine.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO of 1H to 24H | In case of a disaster at the primary datacenter, the maximum amount of data lost is that of the last write push on the standby site. |
| RTO  < 15mn     | Operation of starting the stopped virtual machine on the remote site                                                                                |

In case of need, or in case of failure on a machine at the primary site, the mirror machine at the standby site is activated. Business recovery requires having reserved computing and RAM capacity at the standby site. It is necessary to have the same storage space on the passive site as on the active site.

| Reference                         | Unit | SKU                                             |  
|-----------------------------------|------|-------------------------------------------------|
| PRA - VMware inter-AZ Replication | 1 vm | csp:(region):iaas:vmware:licence:replication:v1 |

*__Note__ : The calculation of the minimum RPO must be defined according to the rate of change on the virtual machine.*

## Virtual Machine Backup

Cloud Temple offers __a native and non-detachable cross-backup architecture__ (it is mandatory in the French secnumcloud qualification).

Backups are stored in a availability zone and on a physical datacenter different from the one hosting the virtual machine.

This allows protection in case of major failure at the production datacenter and restoration on a secondary datacenter (fire, for example).

This solution includes:

- Hot offsite backup of all disks,
- Presentation and instant start of a virtual machine from the mass storage infrastructure and hot reloading on the production SAN,
- Partial file restoration from the backup,
- Retention limited only by the allocation of mass storage space.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution, a no-agent architecture, easy to use, and which allows automation of backup processes in addition to mass storage space optimization.

Backup and restore speeds depend on the change rate in the environments. The backup policy is configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note :__*

*__Some virtual machines are not compatible with this backup technology__ which uses the hypervisor's snapshot mechanisms. These are typically machines with constant disk write loads. It is not possible for the hypervisor to close the snapshot, which forces the virtual machine to be frozen to complete the closure operation. This freeze can last several hours and is not stoppable.*

*The solution is then to exclude the disk that is the target of permanent writes and to back up the data by another method.*

| Reference                                               | Unit | SKU                            |
| ------------------------------------------------------- | ---- | ------------------------------ |
| SAUVEGARDE - Access to IBM Spectrum Protect Plus service | 1 VM | csp:(region):iaas:backup:vm:v1 |

#### Create a backup policy

To add a new backup policy, you need to submit a request to support. Support is accessible via the buoy icon in the top right corner of the window.

The creation of a new backup policy is carried out by __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The name of the backup policy
    The characteristics (x days, y weeks, z months, ...)