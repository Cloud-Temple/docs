

---
title: Concepts
---

The __IaaS (Infrastructure As A Service)__ offer from Cloud Temple is designed to meet critical continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.



## A trusted technological platform

The Cloud Temple IaaS platform is based on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage.
- Network: __JUNIPER__.
- Virtualization: __VMware__, offering a reliable and proven foundation for managing your cloud environments.
- Backup: __IBM Spectrum Protect Plus__, for orchestration and storage of backups.

This architecture is based on the __VersaStack__ model, an alliance between Cisco and IBM, ensuring broad compatibility with major software vendors.



## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- __Maximum predictability__: You control virtualization rates, storage IOPS pressure, and benefit from clear billing based on monthly consumption.

The platform is qualified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), guaranteeing a high level of automation and security.



## Key Features

- Dedicated and on-demand computing resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Managed via the [Shiva Console](../console/console.md) or in Infrastructure as Code mode through APIs and the Terraform provider.



## Advantages

| Advantage           | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital Trust       | Data hosting in France and GDPR compliance.                                                                                                    |
| Security            | Highly secure platform, qualified __SecNumCloud__, __HDS__ (Health Data Hosting), __ISO 27001__ and __ISAE 3402 type II__.                  |  
| High Availability   | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                                         |
| Resilience          | Implementation of continuity or business recovery plans according to needs.                                                                     |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                           |
| On demand           | Resources available on demand.                                                                                                                 |



## Regions and Availability Zones

The VMware IaaS product is deployed in an availability zone.
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This type of deployment allows you to choose the location of the clusters and distribute them across different availability zones (AZ).
This offers better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---



## Compute blades

The blades provided by Cloud Temple are of type __CISCO UCS B200__ or __CISCO UCS X210c__. They are fully managed by Cloud Temple (firmware, OS version, ...) through the Cloud Temple console.

Several categories of compute blades are available in the catalog to support your workloads (Virtualization, Containerization, ...). These blades have different characteristics and performance levels to best meet your needs. The compute blade catalog is regularly updated.

In the context of using a virtualization offer, a hypervisor cluster is composed exclusively of blades of the same type (it is not possible to mix blades of different types in a single cluster).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          | SKU for the VMware offer         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| ECO v3 Blade          | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD v3 Blade     | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE v3 Blade      | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 v3 Blade| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 v3 Blade| 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 v3 Blade| 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 v3 Blade| 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48 GB | csp:fr1:iaas:vmware:perf4:v3    |

__Notes__ :

- __(1)__ The memory quantity delivered is the physically available memory on the blades. It is not possible to change the physical memory quantity of a blade.

- __(2)__ Minimum base frequency / turbo frequency, expressed in GHz. By default, processors are configured for maximum performance at the BIOS level.

- __(3)__ Physical connectivity is shared for network and block storage access, the Cisco platform being converged.

- __(4)__ The available GPU offer is constantly evolving. As of May 1, 2024, the offer is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade is delivered with 2 L40S cards with 48 GB of memory. Contact support for more details if necessary.

The availability of the compute offer is 99.99%, calculated monthly, including maintenance window. Eligibility in case of SLA non-compliance is subject to creating an incident ticket. You must also have at least two hosts per cluster and enable the __High Availability__ (HA) feature. This feature allows your architecture to automatically restart your virtual machines on the second hypervisor. In the case where an availability zone contains only one hypervisor, automatic restart is not possible.



## Network

The network service on Cloud Temple's IaaS platform is based on a network infrastructure using VPLS technology, offering flexible and high-performance segmentation to meet customers' needs for connectivity and network isolation.



### Layer 2 VLANs

The VLANs available in the IaaS offer are of __Layer 2__ type, providing full network isolation and a configurable setup according to needs.



#### Key Concepts

- __Sharing between clusters and availability zones (AZ)__ :
  - VLANs can be shared between different AZs and clusters belonging to the same tenant.
- __Inter-tenant propagation__ :
  - VLANs can be propagated between multiple tenants belonging to the same organization, facilitating internal communications.

---



### Network Performance

The network infrastructure ensures low latency for optimal performance:

- __Intra-AZ Latency__: Less than __3 ms__.
- __Inter-AZ Latency__: Less than __5 ms__.

---



### Key Points

1. __Flexibility__ : VLANs can be configured to adapt to multi-cluster and multi-tenant environments.
2. __High performance__ : Minimal latency ensures fast and efficient communication between availability zones.
3. __Isolation and security__ : Layer 2 VLANs provide strict network segmentation to protect data and traffic.

---



## Block Storage

Cloud Temple offers several storage classes based on the [IBM FlashSystem](https://www.ibm.com/flashsystem/) and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technologies.

The __IBM SVC__ technology enables delivering the required performance level for our clients' environments through the large amount of embedded memory cache in the controllers and the ability to distribute the entire IOPS of a server across multiple SANs.

It is also used to enable replication of your block storage LUNs between availability zones or to facilitate storage array maintenance operations.

The storage is primarily flash NVME storage dedicated to professional workloads. The disks are used by the storage arrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

The __'Mass Storage'__ storage class offers mechanical disks for archiving needs in an economic efficiency context. Several performance levels are available:

| Reference                         | Unit | SKU                                          |
|-----------------------------------|------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/TB   | 1 GiB| csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/TB   | 1 GiB| csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GiB| csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GiB| csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GiB| csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archiving          | 1 TiB| csp:(region):iaas:storage:bloc:mass:v1       |

*__Note__ :*

- *The effective performance for a storage class is related to the actual volume ordered, according to the "IOPS/TB" concept, meaning "IOPS limit per allocated Terabyte",*

> *Thus, a 0.5TB volume in the 'Standard' performance class will have an IOPS limit capped at 750 IOPS,*
> *Similarly, a 10TB volume in the 'Ultra' performance class will have an IOPS limit of 150,000 IOPS,*

- *The IOPS limit is applied to the volume, therefore to the Datastore concept for a VMware environment,*
- *Storage availability is 99.99% measured monthly, including maintenance window,*
- *There are no restrictions or quotas on read or write operations,*
- *There is no billing by IOPS,*
- *There is no performance guarantee for the __'Mass Storage'__ class,*
- *The minimum size of a storage LUN is 500GiB,*
- *When using a storage replication mechanism, performance must be identical in both availability zones,*
- *No "intelligent" optimization mechanisms such as compression or deduplication are implemented: when you reserve 10TiB of storage, you physically have 10TiB of usable storage implemented on the IBM machines.*
- *The storage LUNs are dedicated to the client environment.*



### Usage within the VMware compute offering

Within the use of block storage in the form of a datastore in Cloud Temple's VMware compute offering, __you must take into account several important considerations__:

1. __Swap file (.VSWP) during VM startup__: When a virtual machine starts, it creates a .VSWP file of the size of its memory on the disk. Therefore, to be able to start your virtual machines, you must always have free space in your datastore equivalent to the sum of the memory sizes of your virtual machines. For example, if your datastore has 1 TB of block storage and you want to start 10 virtual machines with 64 GiB of memory each, 640 GiB of disk space will be required. Without this space, the startup of the machines will be limited by the available capacity to create swap files.

2. __Free space for backup snapshots__: The backup service uses instant snapshots (snapshots). You must therefore always have sufficient free space to allow the creation of a snapshot during the backup of a virtual machine. The size of the snapshot depends on the write volume of the virtual machine and the time required to perform the backup. Generally, it is recommended to maintain at least 10% free space for this operation.

3. __Dynamic disk management__: Be cautious with the use of dynamic disks. If you do not manage their growth, a lack of physical space can cause the virtual machine to freeze (at best) or crash with corruption (at worst). It is crucial to carefully monitor the available space on your datastores when using this type of disk.

Proactive disk space management is essential to ensure the proper functioning of your virtual machines and the reliability of backups. Make sure you always have the necessary space for swap files, snapshots, and dynamic disk growth.



## Backup Storage

The dedicated storage for backing up your virtual machines is auto-provisioned by the platform within the ordered quota.

| Reference                | Unit | SKU                                      |
|--------------------------|------|------------------------------------------|
| MASS STORAGE - Archivage | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |



### Block Storage Replication



#### Principles

To enable the implementation of your business continuity plans, when it is not possible to be in a business continuity situation with application mechanisms and virtual machine replication is not suitable, Cloud Temple offers __block storage replication mechanisms between availability zones of a region__.

These replication mechanisms are applied to the storage LUNs of your environments, in addition to backups. The choice of using a replication mechanism on an environment __depends on many factors including its criticality, the acceptable data loss, or the performance required__ for the application.

Cloud Temple offers two types of mechanisms deployed in an active/passive configuration:

- Asynchronous replication (or __'Global Mirror'__): *The __'Global Mirror'__ function provides an asynchronous copy process. When a host writes to the primary volume, the confirmation of the completion of the I/O is received before the write operation ends for the copy to the secondary volume. If a failover operation is initiated, the application must recover and apply all updates that were not confirmed on the secondary volume. If I/O operations on the primary volume are paused for a short period, the secondary volume can become an exact match of the primary volume. This function is comparable to a continuous backup process in which the latest updates are always missing. When using Global Mirror for disaster recovery, you must consider how you want to handle these missing updates.*

- Synchronous replication (or __'Metro Mirror'__): *The __'Metro Mirror'__ function is a remote copy that creates a synchronous copy of the data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume but do not receive confirmation that the write operation is complete until the data is written to the secondary volume. This ensures that both volumes contain identical data when the copy operation is complete. After the initial copy operation is completed, the Metro Mirror function maintains a fully synchronized copy of the source data at the target site permanently. __As of January 1, 2024, the 'Metro Mirror' function is no longer commercially available.__*

A site referred to as "active" or "primary" and a "passive" or "standby" site are then defined. The disaster recovery plan is activated in case of a disaster or during a DRP test. The passive site then takes over from the active site.



#### Asynchronous Replication

When your workloads require short recovery time objectives and it is not acceptable or appropriate to use application-based replication or virtual machine replication mechanisms, it is possible to replicate a SAN storage LUN between two availability zones within the same region.

This offering provides a __RPO of 15 minutes__ and a __RTO of less than 4 hours__. It enables faster recovery than implementing a backup restoration.

In an asynchronous replication volume (__Global Mirror__), the SAN virtualization controllers of the two availability zones work together to perform write operations on both sites. The primary site does not wait for the acknowledgment of the secondary site.

The steps of a write operation are as follows:

1. An hypervisor wants to perform a __write operation on a Global-Mirror volume__: it sends its request to the SAN controller of its availability zone,
2. The local SAN controller requests the SAN controller of the remote zone to perform the write operation,
3. The local SAN controller does not wait for the acknowledgment from the remote SAN and performs the local write,
4. It provides __acknowledgment__ to the hypervisor that issued the request,
5. __The hypervisors of the remote site do not directly access the Global Mirror LUN__: a service request is required.

| SLA       | Description                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 minutes | In case of a disaster at the primary datacenter, the maximum amount of data lost corresponds to the maximum of the last 15 minutes of writes |
| RTO < 4 hours  | In case of a disaster at the primary datacenter, business recovery is guaranteed within 4 hours depending on the complexity of the environments.          |

In case of PRA activation, the Cloud Temple team performs a presentation operation of the __'Global Mirror'__ LUN to the remote hypervisors so they can access the data. Implementing this solution therefore requires reserving compute resources and RAM on the 'standby' site to resume operations in case of a disaster.

Using this technology also requires doubling the disk space: the remote site must have exactly the same space as the local site.

Using this mechanism may impact application performance by up to 10%. __Only the storage classes 500 IOPS/To, 1500 IOPS/To, and 3000 IOPS/TO are compatible.__

| Reference                          | Unit  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN  | 1 TiB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Note__*:

- *Since the offer is asynchronous, it is possible during a disaster that some disk operations were not written on the remote site. There may therefore be a risk of data inconsistency, mitigated in the risk analysis of the disaster recovery plan.*
- *Block storage replication is hidden from virtual machines and applications,*
- *In this regard, it is important to prioritize application replication scenarios or potentially virtual machine replication,*
- *Compute and memory on the recovery site can be reduced to optimize costs if a degraded situation is acceptable for the business during the disaster recovery plan execution.*



## VMware Virtualization

The VMware Cloud Temple offering qualified SecNumCloud is based on the __VMware vSphere__ technology.

The platform is managed by Cloud Temple automatically (security compliance maintenance, operational readiness maintenance, ...). It is controllable via the graphical interface of the Shiva console or via the associated APIs.

*__Note__* : *For security reasons related to the SecNumCloud qualification, __the client is not allowed to directly access the VMware virtualization platform__ (no direct access to vCenter, for example). Indeed, the SecNumCloud qualification imposes __complete segregation__ between the technical asset management interfaces and the client's interface (the Shiva console).*

- The products implemented are VMware ESXi, VMware vCenter, and VMware Replication.
- *The virtualization offer's network does not use the VMware NSX technology, but is managed physically by the Juniper technology and the VPLS protocol.*
- *The storage does not use the VMware vSAN technology, but only IBM SANs in 32G fiber channel.*
- *No hidden optimization is implemented (compression, deduplication, ...).*



### Definition of a compute blade cluster ('Cpool')

The __'Cpool'__ is a grouping of VMware ESXi hypervisors, also known as a *'ESX cluster'*.

The hosts present in a __'Cpool'__ all belong to __the same tenant and the same availability zone__ (AZ). They must necessarily have the same class: 
__it is not possible to mix different compute blade models within a single cluster__.

All compute blades are delivered with the maximum physical memory, a RAM usage limitation is applied software-wise at the cluster level to ensure it matches the billed RAM.

By default, each blade has 128 GB of memory enabled within the __'Cpool'__.

A __'Cpool'__ can contain a maximum of 32 hypervisors. Beyond this limit, it will be necessary to create a second cluster.

Storage can be shared between __'Cpools'__.



### Memory Allocation for a 'Cpool'

RAM reservation is configurable per cluster. You can reduce or increase the amount of RAM to match your needs at the cluster level.

__Warning: do not exceed an average memory consumption of 85% per compute node__.
Indeed, the VMware technology will use a compression-based optimization method that can significantly impact the performance of your workloads and complicate diagnostics.
Similarly, excessive memory pressure on your compute nodes will force the hypervisor to offload part of its memory to disk to meet the needs of virtual machines.

This case, called __'Ballooning'__, greatly impacts the performance of all virtual machines located on the affected datastore.
__Diagnosis is complicated in this context__, as your monitoring will detect impacts at the CPU level rather than memory or storage.
Keep in mind that the first thing the hypervisor does when starting a virtual machine is to create __a memory swap file__ (.vswap) on the disk, of the size of the memory of the affected virtual machine. You must __take this into account in your storage sizing__.

Each compute node is delivered with 128GB of memory activated at the __'Cpool'__ level, but physically has the entire allocatable memory.

For example, for a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation at activation of the _*'Cpool'*_ will be 3 x 128GB = 384GB of RAM.
You can extend it up to a maximum of 3 x 384GB = 1152GB of memory.

    Minimum memory of a 'Cpool' = number of hosts X 128GB of memory
    Maximum memory of a 'Cpool' = number of hosts X the amount of physical memory of the compute node



### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` that is regularly enriched and updated by our teams.
It includes, to date, several dozen `Templates` and images to mount on your virtual machines.



### Updating Hypervisors

Cloud Temple regularly provides builds for hypervisors to ensure the application of security patches.  
However, updating hypervisors remains your responsibility, as we do not have visibility into your business constraints.  

The update process is fully automated. To ensure service continuity, a minimum of two hypervisors is required per cluster during the update. Make sure you have the necessary permissions to perform these actions.



### Managing your virtual machine affinity

The __affinity and anti-affinity rules__ allow you to control the location of virtual machines on your hypervisors.
They can be used to manage the resource usage of your __'Cpool'__.
For example, they can help balance the workload between servers or isolate resource-intensive workloads.
In a __'Cpool'__ VMware, these rules are often used to manage the behavior of virtual machines with vMotion.
vMotion allows moving virtual machines from one host to another without service interruption.

You can configure through rule management:

- __Affinity Rules__: These rules ensure that certain virtual machines are executed on the same physical host.
They are used to improve performance by keeping virtual machines that communicate frequently
together on the same server to reduce network latency. Affinity rules are useful in scenarios
where performance is critical, such as in the case of databases or applications that require fast communication between servers.

- __Anti-Affinity Rules__: Conversely, these rules ensure that certain virtual machines are not executed
on the same physical host. They are important for availability and resilience, for example,
to prevent critical machines from all being affected in case of a single server failure.
Anti-affinity rules are crucial for applications requiring high availability,
such as in production environments where fault tolerance is a priority.
For example, you don't want your two Active Directory to be on the same hypervisor.

When creating a rule, you define the type of rule (affinity / anti-affinity), the rule name,
its activation status (__'Status'__) and the machines involved in your hypervisor cluster.

*Note: the affinity/anti-affinity rules proposed in the console are rules concerning virtual machines between them (not rules between hypervisors and virtual machines).*



### Asynchronous replication of your virtual machines in a VMware environment

Asynchronous replication of your virtual machines is a mechanism that consists of pushing write operations from the source hypervisor to the standby site at regular intervals.

After an initial hot copy of the entire active storage to the standby site, only writes are pushed at regular intervals to the sleeping site. This interval depends on the volume of writes (from every hour to every 24 hours).

The replication of virtual machines relies on the hypervisor's snapshot mechanism. In this regard, this solution has the same disadvantages, particularly the sensitivity to the virtual machine's write volume, as the snapshot process is a recursive mechanism for closing the snapshot.

The typical example of a machine that does not support the virtual machine replication mechanism is an FTP server receiving real-time streams from surveillance cameras. __The machine is constantly writing and will not be able to close a snapshot without pausing the operating system for a significant period (several tens of minutes).__ If the hypervisor fails to close the snapshot, this is exactly what will happen, with no possibility to intervene except by corrupting the virtual machine.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO of 1H to 24H | In case of a disaster at the primary datacenter, the maximum amount of data lost is that of the last write push to the standby site. |
| RTO  < 15mn     | Operation of starting the stopped virtual machine on the remote site                                                                                |

In case of need, or in case of failure on a machine from the primary site, the mirror machine on the standby site is activated. Business recovery requires having reserved computing and RAM capacity on the standby site. It is necessary to have the same storage space on the passive site as on the active site.

| Reference                         | Unit | SKU                                             |  
|-----------------------------------|------|-------------------------------------------------|
| PRA - VMware inter-AZ Replication | 1 vm | csp:(region):iaas:vmware:licence:replication:v1 |

*__Note__ : The calculation of the minimum RPO must be defined according to the change rate on the virtual machine.*



## Virtual Machine Backup

Cloud Temple offers a __native and non-removable cross-backup architecture__ (it is mandatory in the French secnumcloud qualification).

Backups are stored in a different availability zone and on a physical datacenter distinct from the one hosting the virtual machine. They are encrypted using the AES 256-bit symmetric key algorithm (cipher mode `xts-plain64`) to ensure data confidentiality.

This protects against major failures in the production datacenter and enables restoration on a secondary datacenter (e.g., fire).

This solution includes:

- Hot off-site backup of all disks,
- Instant presentation and startup of a virtual machine from the mass storage infrastructure and hot reloading on production SANs,
- Partial file restoration from the backup,
- Retention limited only by the allocated mass storage space.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution, a no-agent architecture, easy to use, and allows automation of backup processes as well as mass storage space optimization.

Backup and restoration speeds depend on the change rate in the environments. The backup policy is configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note:__*

*__Some virtual machines are not compatible with this backup technology__ which uses the hypervisor's snapshot mechanisms. These are typically machines with constant disk write loads. The hypervisor cannot close the snapshot, which forces the virtual machine to be frozen to complete the closure operation. This freeze can last several hours and is not stoppable.*

*The solution is then to exclude the disk targeted by permanent writes and back up the data using another method.*

| Reference                                               | Unit  | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| SAUVEGARDE - Access to IBM Spectrum Protect Plus service | 1 VM  | csp:(region):iaas:backup:vm:v1 |



#### Create a backup policy

To add a new backup policy, you need to submit a request to support. Support is accessible via the buoy icon in the top right corner of the window.

Creating a new backup policy is done via a __service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The name of the backup policy
    The characteristics (x days, y weeks, z months, ...)



## Advanced Data Protection (HSM/KMS)

Cloud Temple offers a __advanced encryption of virtual machines__ solution based on hardware security modules (HSM) and a key management service (KMS). This feature allows to strengthen the protection of sensitive data through a centralized and secure key management, directly integrated into the SecNumCloud environment.



### Technical Architecture

The solution relies on a robust security infrastructure composed of:

- __HSM (Hardware Security Module)__ : __Thales Luna S790__ modules certified __FIPS 140-3 level 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ for centralized key management
- __VMware Integration__ : Communication via the __KMIP__ (Key Management Interoperability Protocol) protocol



#### High Availability Deployment

The HSM infrastructure is deployed across __three availability zones__ in the FR1 region:

- PAR7S
- TH3S  
- AZ07

This distribution ensures maximum __high availability__ and __resilience__ of the encryption service.



### Operation and Key Hierarchy

The system uses a __cryptographic key hierarchy__ to ensure data security:

| Level | Key Type | Description | Location |
|-------|----------|-------------|----------|
| 1 | __Root of Trust (RoT)__ | Master key by KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Domain key by client (multi-tenant isolation) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Encryption key by VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Data key by VM | VMware ESXi |



#### Encryption Process

1. __Generation__: VMware ESXi generates a unique DEK for each virtual machine
2. __Protection__: The DEK is encrypted by the KEK stored in CipherTrust Manager
3. __Securing__: The KEK is itself protected by the HSM key hierarchy
4. __Storage__: The encrypted DEK is stored with the VM's configuration files



### Security and Compliance



#### Certifications

- __FIPS 140-3 Level 3__ : Highest level certification for HSMs
- __Common Criteria EAL4+__ : Advanced security evaluation
- __SecNumCloud__ : ANSSI qualification integrated into the Cloud Temple environment



#### Multi-Tenant Isolation

- __Cryptographic Separation__: Each client has an isolated KMS domain
- __Dedicated Keys__: A specific Domain Key per client
- __Audit and Traceability__: Full logging of actions per domain



### Activation and Use

Virtual machine encryption is activated **with a single click** from the [Shiva Console](../console/console.md).

For a detailed procedure with screenshots, see the [virtual machine encryption tutorial](tutorials/vm_encryption.md).



#### Prerequisites

- __Configured key provider__: A HSM/KMS provider must be enabled on the vStack
- __Virtual machine powered off__: The VM must be shut down before encryption
- __No active replication__: The VM must not be replicated (incompatible with Global Mirror)
- __No snapshot__: No snapshots must be present
- __Service subscription__: The advanced protection service must be subscribed

*__Note__: For more details on the prerequisites and complete procedure, refer to the [VM Encryption Guide](tutorials/vm_encryption.md).*



### Limitations and Considerations



#### Compatibility

- __Global Mirror__: Encrypted virtual machines are __not compatible__ with Global Mirror replication
- __Restoration__: Encrypted VM backups retain their cryptographic protection
- __Export__: Export of encrypted VMs requires specific procedures



#### Performance

- __Minimal impact__: Hardware encryption ensures optimal performance
- __Transparency__: No impact on the operation of applications



### Recommended Use Cases

This advanced protection solution is particularly suitable for:

- __Sensitive Data__: Personal information, financial data, trade secrets
- __Regulatory Compliance__: RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS requirements
- __Critical Sectors__: Banking, insurance, healthcare, defense
- __Digital Sovereignty__: Protection against unauthorized access, even in case of compromise

| Reference | Unit | SKU |
|-----------|-------|-----|
| ADVANCED PROTECTION - VM Encryption via HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Note__ :*

- *The service requires a specific subscription and is not included in the standard IaaS offer*
- *Key management remains fully under Cloud Temple's control in the SecNumCloud environment*
- *Encryption keys never leave the French and sovereign infrastructure*