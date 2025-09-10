---
title: Concepts
---

Cloud Temple's __IaaS (Infrastructure As A Service)__ offering is designed to meet critical business continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technology platform

Cloud Temple's IaaS platform relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage.
- Network: __JUNIPER__.
- Virtualization: __VMware__, providing a reliable and proven foundation for managing your cloud environments.
- Backup: __IBM Spectrum Protect Plus__, for orchestrating and storing backups.

This architecture is based on the __VersaStack__ model, an alliance between Cisco and IBM, ensuring broad compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between customers.
- __Maximum predictability__: You control virtualization rates, IOPS pressure on storage, and benefit from clear, monthly consumption-based billing.

The platform is __SecNumCloud__ certified by [ANSSI](https://www.ssi.gouv.fr/), guaranteeing a high level of automation and security.

## Key features

- On-demand, dedicated compute resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-site backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Shiva Console](../console/console.md) or in Infrastructure as Code mode using APIs and the Terraform provider.

## Advantages

| Advantage           | Description                                                                                                                                  |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Digital trust       | Data hosting in France and GDPR compliance.                                                                                                  |
| Security            | Highly secure platform, certified __SecNumCloud__, __HDS__ (Health Data Hosting), __ISO 27001__, and __ISAE 3402 type II__.                  |
| High availability   | 99.99% platform availability rate, measured monthly, including maintenance windows.                                                          |
| Resilience          | Implementation of business continuity or disaster recovery plans as needed.                                                                  |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                        |
| On-demand           | Resources available on demand.                                                                                                               |

## Regions and availability zones

The IaaS VMware product is deployed in one availability zone.
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This type of deployment allows you to choose the location of the clusters and distribute them across different availability zones (AZ).
This provides better load balancing, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---

## Compute

The blades provided by Cloud Temple are __CISCO UCS B200__ or __CISCO UCS X210c__ types. They are fully managed by Cloud Temple (firmware, OS version, etc.) through the Cloud Temple console.

Several categories of compute blades are available in the catalog to support your workloads (Virtualization, Containerization, ...).
These have different characteristics and performance to best meet your needs. The compute blade catalog is regularly updated.

When used with a virtualization offer, a hypervisor cluster is composed solely of compute blades of the same type (it is not possible to mix different types of blades in the same cluster).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Cores / threads | Connectivity __(3)__ | GPU __(4)__          | SKU for VMware offer         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| ECO Blade v3          | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD Blade v3     | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE Blade v3      | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 Blade v3| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 Blade v3| 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 Blade v3| 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 Blade v3| 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Notes__:

- __(1)__ The amount of memory delivered is the amount physically available on the blades. It is not possible to change the physical amount of memory of a blade.

- __(2)__ The minimum base frequency / turbo frequency, expressed in GHz. By default, processors are configured for maximum performance at the BIOS level.

- __(3)__ Physical connectivity is shared for network access and block storage access, as the CISCO platform is converged.

- __(4)__ The actual available GPU offer is constantly evolving. As of May 1, 2024, the offer is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade is delivered with 2 L40S cards of 48 GB of RAM. Contact support for more details if necessary.

The availability of the compute offer is 99.99%, calculated monthly, including maintenance windows. Eligibility in case of non-compliance with the SLA is subject to
the creation of an incident ticket. You must also have at least two hosts per cluster and enable the __High Availability__ (HA) feature.
This feature allows your architecture to automatically restart your virtual machines on the second hypervisor.
If an availability zone contains only one hypervisor, automatic restart is not possible.

## Network

The network service on the Cloud Temple IaaS platform is based on a network infrastructure using VPLS technology, offering flexible and high-performance segmentation to meet customer needs for connectivity and network isolation.

### Layer 2 VLANs

The VLANs provided in the IaaS offer are __Layer 2__, offering complete network isolation and an adaptable configuration according to needs.

#### Key concepts

- __Sharing between clusters and availability zones (AZ)__:
  - VLANs can be shared between different AZs and different clusters belonging to the same tenant.
- __Inter-tenant propagation__:
  - VLANs can be propagated between several tenants belonging to the same organization, facilitating internal communications.

---

### Network performance

The network infrastructure ensures low latency for optimal performance:

- __Intra-AZ latency__: Less than __3 ms__.
- __Inter-AZ latency__: Less than __5 ms__.

---

### Key points

1. __Flexibility__: VLANs can be configured to adapt to multi-cluster and multi-tenant environments.
2. __High performance__: Minimal latency ensures fast and efficient communication between availability zones.
3. __Isolation and security__: Layer 2 VLANs offer strict network segmentation to protect data and traffic.

---

## Block storage

Cloud Temple offers several storage classes based on [IBM FlashSystem](https://www.ibm.com/flashsystem/)
and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technology.

__IBM SVC__ technology delivers the required performance level for our customers' environments thanks to the large
amount of cache memory embedded in the controllers and the ability to distribute all the IOPS
of a server over several SANs.

It is also used to enable replication of your block storage LUNs between
availability zones or to facilitate interventions on storage arrays.

The storage is mainly FLASH NVME type dedicated to professional workloads.
The disks are used by the storage arrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

The __'Mass Storage'__ class offers mechanical disks for archiving needs
in a context of economic efficiency. Several performance levels are available:

| Reference                         | Unit  | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/TB   | 1 GiB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/TB   | 1 GiB | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GiB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GiB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GiB | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archiving          | 1 TiB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Note__:*

- *The effective performance for a storage class is linked to the volume actually ordered, according to the "IOPS/TB" notion, meaning "IOPS limit per allocated Tera",*

> *Thus, a 0.5TB volume in the 'Standard' performance class will have an IOPS limit capped at 750 IOPS,*
> *Similarly, a 10TB volume in the 'Ultra' performance class will have an IOPS limit of 150,000 IOPS,*

- *The IOPS limit is applied to the volume, hence to the Datastore concept for a VMware environment,*
- *Storage availability is 99.99% measured monthly, including maintenance windows,*
- *There are no restrictions or quotas on reading or writing,*
- *There is no billing per IOPS,*
- *There is no performance commitment on the __'Mass Storage'__ class,*
- *The minimum size of a storage LUN is 500 GiB,*
- *When using a storage replication mechanism, performance must be identical in both availability zones,*
- *No "intelligent" optimization mechanism such as compression or deduplication is implemented: when you reserve 10 TiB of storage, you physically have 10 TiB of usable storage implemented on the IBM machines.*
- *Storage LUNs are dedicated to the customer environment.*

### Use within the VMware compute offer

When using block storage as a datastore in Cloud Temple's VMware compute offer, __you must take several important considerations into account__:

1. __Swap file (.VSWP) when starting virtual machines__: When a virtual machine starts, it creates a .VSWP file the size of its memory on the disk. Therefore, to be able to start your virtual machines, you must always have free space in your datastore equivalent to the sum of the memory sizes of your virtual machines. For example, if your datastore has 1 TiB of block storage and you want to start 10 virtual machines with 64 GiB of memory each, 640 GiB of disk space will be required. Without this space, the startup of the machines will be limited by the capacity available to create the swap files.

2. __Free space for backup snapshots__: The backup service uses snapshots. You must therefore always have enough free space to allow the creation of a snapshot when backing up a virtual machine. The size of the snapshot depends on the write volume of the virtual machine and the time required to perform the backup. As a general rule, it is recommended to maintain at least 10% free space for this operation.

3. __Managing dynamic disks__: Be careful with the use of dynamic disks. If you do not control their growth, a lack of physical space can lead to a freeze of the virtual machine in the best case, or a crash with corruption in the worst case. It is crucial to carefully monitor the available space on your datastores when using this type of disk.

Proactive disk space management is essential to ensure the proper functioning of your virtual machines and the reliability of backups. Make sure you always have the necessary space for swap files, snapshots, and the growth of dynamic disks.

## Backup storage mode

The storage dedicated to backing up your virtual machines is auto-provisioned by the platform up to the ordered quota.

| Reference                | Unit  | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archiving | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |

### Block storage replication

#### Principles

To enable the implementation of your disaster recovery plans, when it is not possible to be in
a business continuity situation with application mechanisms and when virtual machine replication
is not suitable, Cloud Temple offers __block storage replication mechanisms between availability zones of a region__.

These replication mechanisms are applied to the storage LUNs of your environments, in addition to backups.
The choice of using a replication mechanism on an environment __depends on many factors including its criticality, the tolerated data loss, or the targeted performance__ for the application.

Cloud Temple offers two types of mechanisms deployed in an active/passive configuration:

- __Asynchronous__ replication (or __'Global Mirror'__): *The __'Global Mirror'__ function provides an asynchronous copy process.
When a host writes to the primary volume, confirmation of I/O completion is received before the
write operation completes for the copy on the secondary volume. If a failover operation is initiated, the application
must recover and apply all updates that have not been confirmed on the secondary volume.
If I/O operations on the primary volume are paused for a short period,
the secondary volume can become an exact match of the primary volume. This function is comparable to a continuous
backup process in which the latest updates are always missing.
When using Global Mirror for disaster recovery purposes, you should consider how you want to handle these missing updates.*

- __Synchronous__ replication (or __'Metro Mirror'__): *The __'Metro Mirror'__ function is a type of remote copy that creates a synchronous copy
of data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume, but do not receive confirmation
that the write operation is complete until the data is written to the secondary volume. This ensures that both volumes contain identical data when
the copy operation is complete. After the initial copy operation is complete, the Metro Mirror function
permanently maintains a fully synchronized copy of the source data at the target site. __Since January 1, 2024, the 'Metro Mirror' function is no longer marketed.__*

We then define an "active" or "primary" site and a "passive" or "standby" site.
The disaster recovery plan is activated in the event of a disaster or as part of a DRP test request.
The passive site then takes over from the active site.

#### Asynchronous replication

When your workloads require short recovery times and it is not acceptable
or appropriate to use mechanisms such as application replication / virtual machine replication,
it is possible to replicate a SAN storage LUN between two availability zones of the same region.

This offer provides an __RPO of 15 minutes__ and an __RTO of less than 4 hours__. It allows for a much faster recovery than
implementing a backup restoration.

In a storage volume with asynchronous replication (__Global Mirror__), the SAN virtualization controllers of the
two availability zones work together to perform write operations on both sites.
The master site does not wait for the write acknowledgment from the slave site.

The steps of a write operation are as follows:

1. A hypervisor wants to perform __a write operation on a Global-Mirror volume__: it sends its request to the SAN controller of its availability zone,
2. The local SAN controller requests the SAN controller of the remote zone to perform the write operation,
3. The local SAN controller does not wait for the acknowledgment from the remote SAN and then performs the write locally,
4. It gives __acknowledgment__ to the hypervisor that issued the request,
5. __The hypervisors of the remote site do not directly access the Global Mirror LUN__: A service request is necessary.

| SLA          | Description                                                                                                                                       |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15min    | In the event of a disaster at the main datacenter, the maximum amount of data lost corresponds to a maximum of the last 15 minutes of writing.      |
| RTO < 4H     | In the event of a disaster at the main datacenter, business recovery is guaranteed within 4 hours depending on the complexity of the environments. |

In case of DRP activation, the Cloud Temple team performs an operation to present the __'Global Mirror'__ LUN to the remote hypervisors so they can access the data. The implementation of this solution therefore requires having reserved compute and RAM resources on the 'standby' site to resume activity in case of a disaster.

The use of this technology also requires doubling the disk space: it is necessary to have exactly the same space on the remote site as on the local site.

The use of this mechanism can impact application performance by up to 10%. __Only the 500 IOPS/TB, 1500 IOPS/TB, and 3000 IOPS/TB storage classes are compatible.__

| Reference                         | Unit   | SKU                                               |  
|-----------------------------------|--------|---------------------------------------------------|
| STORAGE - Global SAN Replication  | 1 TiB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Note__*:

- *As the offer is asynchronous, it is possible that during a disaster some disk operations have not been written to the remote site. There may therefore be a risk to data consistency, to be mitigated in the risk analysis of the disaster recovery plan.*
- *Block storage replication is done transparently for virtual machines and applications,*
- *As such, it is important to favor application replication scenarios or possibly virtual machine replication,*
- *Compute and memory on the recovery site can be reduced to optimize costs if a degraded situation is acceptable for the business when the disaster recovery plan is activated.*

## VMware Virtualization

The SecNumCloud-certified Cloud Temple VMware virtualization offer is based on __VMware vSphere__ technology.

The platform is managed automatically by Cloud Temple (maintenance of security conditions, operational maintenance, ...).
It can be controlled via the graphical interface of the Shiva console or via the associated APIs.

*__Note__*: *For security reasons related to the SecNumCloud certification,
__it is not possible for the customer to directly access the VMware virtualization platform__ (no direct access to vCenter in particular).
Indeed, the SecNumCloud certification imposes __a total segregation__ between the technical asset management interfaces and the customer's interface (the Shiva console).*

- The products implemented are VMware ESXi, VMware vCenter, and VMware Replication.
- *The virtualization offer's network does not use VMware NSX technology, but is hardware-driven by Juniper technology and the VPLS protocol.*
- *The storage does not use VMware vSAN technology, but only IBM SANs with 32G fiber channel.*
- *No hidden optimization is implemented (compression, deduplication, ...).*

### Definition of a compute blade cluster ('Cpool')

A __'Cpool'__ is a group of VMware ESXi hypervisors, also known as an *'ESX cluster'*.

The hosts in a __'Cpool'__ all belong to __the same tenant and the same availability zone__ (AZ). They must necessarily have the same class:
__it is not possible to mix different models of compute blades within the same cluster__.

Since all compute blades are delivered with the maximum physical memory, a RAM usage limitation is applied at the software level of the cluster to ensure it corresponds to the billed RAM.

By default, each blade has 128 GB of memory enabled within the __'Cpool'__.

A __'Cpool'__ can contain a maximum of 32 hypervisors. Beyond this limit, a second cluster will need to be created.

Storage can be shared between __'Cpools'__.

### Memory Allocation for a 'Cpool'

RAM reservation is configurable per cluster. You can reduce or increase the amount of RAM to match your needs at the cluster level.

__Be careful not to exceed an average of 85% memory consumption per compute blade__.
Indeed, VMware technology will use a compression-type optimization method that can strongly impact the performance of your workloads and complicate diagnosis.
Similarly, too much memory pressure on your compute blades will force the hypervisor to offload part of its memory to disk to meet the needs of the virtual machines.

This case, called __'Ballooning'__, very strongly impacts the overall performance of the virtual machines located on the concerned storage (datastore).
__Diagnosis is complicated in this context__, as your metrics will show impacts at the CPU level and not on memory or storage.
Also keep in mind that the first thing the hypervisor does when starting a virtual machine is to create __a memory swap file__ (.vswap) on
the disk, the size of the memory of the concerned virtual machine. You must __take this into account when sizing your storage__.

Each compute blade is delivered with 128GB of memory enabled at the software level of the __'Cpool'__ but physically has the total allocatable memory.

For example, for a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation upon activation of the *'Cpool'* will be 3 x 128GB = 384 GB of RAM.
You can extend it to a maximum of 3 x 384GB = 1152GB of memory.

    Minimum memory of a 'Cpool' = number of hosts X 128GB of memory
    Maximum memory of a 'Cpool' = number of hosts X the physical memory quantity of the compute blade

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` that is regularly enriched and updated by our teams.
It currently includes several dozen `Templates` and images to mount on your virtual machines.

### Hypervisor Updates

Cloud Temple regularly provides builds for hypervisors to ensure the application of security patches.
However, updating the hypervisors remains your responsibility, as we do not have visibility into your business constraints.

The update process is fully automated. To ensure service continuity, a minimum of two hypervisors is required per cluster during the update. Make sure you have the necessary permissions to perform these actions.

### Managing your virtual machine affinity

__Affinity and anti-affinity rules__ allow you to control the placement of virtual machines on your hypervisors.
They can be used to manage the resource usage of your __'Cpool'__.
For example, they can help balance the workload between servers or isolate resource-intensive workloads.
In a VMware __'Cpool'__, these rules are often used to manage the behavior of virtual machines with vMotion.
vMotion allows you to move virtual machines from one host to another without service interruption.

You can configure through rule management:

- __Affinity Rules__: These rules ensure that certain virtual machines run on the same physical host.
They are used to improve performance by keeping virtual machines that communicate frequently
together on the same server to reduce network latency. Affinity rules are useful in scenarios
where performance is critical, such as in the case of databases or applications that require fast communication between servers.

- __Anti-Affinity Rules__: Conversely, these rules ensure that certain virtual machines are not run
on the same physical host. They are important for availability and resilience, for example,
to prevent critical machines from all being affected in the event of a single server failure.
Anti-affinity rules are crucial for applications requiring high availability,
such as in production environments where fault tolerance is a priority.
For example, you do not want your two Active Directory servers to be on the same hypervisor.

When creating a rule, you define the type of rule (affinity / anti-affinity), the name of the rule,
its activation state (__'Status'__), and the concerned machines in your hypervisor cluster.

*Note: the affinity/anti-affinity rules offered in the console are rules concerning virtual machines among themselves (not rules between hypervisors and virtual machines).*

### Asynchronous replication of your virtual machines in a VMware environment

Asynchronous replication of your virtual machines is a mechanism that consists of pushing write operations from the source hypervisor to the standby site at regular time intervals.

After an initial hot copy of all active storage to the standby site, only writes are pushed at regular intervals to the sleeping site.
This interval depends on the volume of writes (from every hour to every 24 hours).

Virtual machine replication relies on the hypervisor's snapshot mechanism. As such,
this solution has the same drawbacks, particularly sensitivity to the virtual machine's write volume,
as the snapshot process is a recursive mechanism for closing the snapshot.

The typical example of a machine that does not support the virtual machine replication mechanism is an
FTP server that receives real-time streams from surveillance cameras. __The machine spends its time writing and will not be
able to close a snapshot without pausing the operating system for a significant period of time
(several tens of minutes)__. If the hypervisor cannot close the snapshot, this is exactly what it will do,
with no possibility of intervention except to corrupt the virtual machine.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO from 1H to 24H | In the event of a disaster at the main datacenter, the maximum amount of data lost is that of the last push of writes to the standby site.              |
| RTO < 15min     | Operation to start the stopped virtual machine on the remote site.                                                                                        |

If needed, or in case of a failure on a machine at the primary site, the mirror machine at the standby site is activated.
Business recovery requires having reserved compute and RAM on standby at the standby site. It
is necessary to have the same storage space on the passive site as on the active site.

| Reference                         | Unit | SKU                                             |  
|-----------------------------------|------|-------------------------------------------------|
| DRP - VMware inter-AZ replication | 1 vm | csp:(region):iaas:vmware:licence:replication:v1 |

*__Note__: The calculation of the minimum RPO must be defined according to the rate of change on the virtual machine.*

## Virtual machine backup

Cloud Temple offers __a native and non-disengageable cross-backup architecture__ (it is mandatory in the French SecNumCloud qualification).

Backups are stored in a different availability zone and physical datacenter from the one hosting the virtual machine. They are encrypted using a 256-bit AES symmetric key algorithm (cipher mode `xts-plain64`) to ensure data confidentiality.

This allows protection in case of a major failure at the production datacenter and restoration to a secondary datacenter (e.g., in case of fire).

This solution includes:

- Off-site hot backup of all disks,
- Instant presentation and startup of a virtual machine from the mass storage infrastructure and hot reloading to the production SANs,
- Partial file restoration from backup,
- Retention limited only by the allocation of mass storage space.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution, an agentless architecture solution,
easy to use and which allows the automation of backup processes in addition to optimizing mass storage space.

Backup and restoration speeds are dependent on the rate of change in the environments.
The backup policy is configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note:__*

*__Some virtual machines are not compatible with this backup technology__ which uses the hypervisor's snapshot mechanisms.
These are typically machines whose disk write loads are constant. It is not possible for the hypervisor to close the snapshot, which
forces the virtual machine to freeze to be able to complete the closing operation. This freeze can last several hours and cannot be stopped.*

*The solution is then to exclude the disk that is the target of permanent writes and to back up the data by another method.*

| Reference                                               | Unit | SKU                            |
| ------------------------------------------------------- | ---- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service    | 1 VM | csp:(region):iaas:backup:vm:v1 |

#### Create a backup policy

To add a new backup policy, a request must be made to support. Support is accessible from the buoy icon at the top right of the window.

The creation of a new backup policy is carried out by __a service request__ indicating:

    Your Organization's name
    A contact name with their email and phone number to finalize the configuration
    The tenant name
    The backup policy name
    The characteristics (x days, y weeks, z months, ...)

## Advanced data protection (HSM/KMS)

Cloud Temple offers an __advanced virtual machine encryption__ solution based on hardware security modules (HSM) and a key management service (KMS). This feature enhances the protection of sensitive data through centralized and secure management of encryption keys, directly integrated into the SecNumCloud environment.

### Technical architecture

The solution is based on a robust security infrastructure composed of:

- __HSM (Hardware Security Module)__: __Thales Luna S790__ modules certified __FIPS 140-3 Level 3__
- __KMS (Key Management System)__: __Thales CipherTrust Manager__ for centralized key management
- __VMware Integration__: Communication via the __KMIP__ (Key Management Interoperability Protocol) protocol

#### High availability deployment

The HSM infrastructure is deployed across __three availability zones__ in the FR1 region:

- PAR7S
- TH3S  
- AZ07

This distribution ensures __high availability__ and __maximum resilience__ of the encryption service.

### Operation and key hierarchy

The system uses a __cryptographic key hierarchy__ to ensure data security:

| Level | Key Type | Description | Location |
|-------|------------|-------------|--------------|
| 1 | __Root of Trust (RoT)__ | Master key per KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Domain key per customer (multi-tenant isolation) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Encryption key per VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Data key per VM | VMware ESXi |

#### Encryption process

1. __Generation__: VMware ESXi generates a unique DEK for each virtual machine
2. __Protection__: The DEK is encrypted by the KEK stored in CipherTrust Manager
3. __Securing__: The KEK is itself protected by the HSM key hierarchy
4. __Storage__: The encrypted DEK is stored with the VM's configuration files

### Security and compliance

#### Certifications

- __FIPS 140-3 Level 3__: Highest level certification for HSMs
- __Common Criteria EAL4+__: Advanced security evaluation
- __SecNumCloud__: ANSSI qualification integrated into the Cloud Temple environment

#### Multi-tenant isolation

- __Cryptographic separation__: Each customer has an isolated KMS domain
- __Dedicated keys__: A specific Domain Key per customer
- __Audit and traceability__: Complete logging of actions by domain

### Activation and use

Virtual machine encryption is activated __with a single click__ from the [Shiva Console](../console/console.md).

For a detailed procedure with screenshots, see the [virtual machine encryption tutorial](tutorials/vm_encryption.md).

#### Prerequisites

- __Key provider configured__: An HSM/KMS provider must be enabled on the vStack
- __Virtual machine powered off__: The VM must be stopped before encryption
- __No active replication__: The VM must not be replicated (incompatible with Global Mirror)
- __No snapshot__: No snapshot must be present
- __Service subscription__: The advanced protection service must be subscribed to

*__Note__: For more details on the prerequisites and the complete procedure, refer to the [VM encryption guide](tutorials/vm_encryption.md).*

### Limitations and considerations

#### Compatibility

- __Global Mirror__: Encrypted virtual machines are __not compatible__ with Global Mirror replication
- __Restoration__: Backups of encrypted VMs retain their cryptographic protection
- __Export__: Exporting encrypted VMs requires specific procedures

#### Performance

- __Minimal impact__: Hardware encryption ensures optimal performance
- __Transparency__: No impact on application operation

### Recommended use cases

This advanced protection solution is particularly suitable for:

- __Sensitive data__: Personal information, financial data, industrial secrets
- __Regulatory compliance__: GDPR, HIPAA, PCI-DSS, ISO 27001, PDIS requirements
- __Critical sectors__: Banking, insurance, health, defense
- __Digital sovereignty__: Protection against unauthorized access, even in case of compromise

| Reference | Unit | SKU |
|-----------|------|-----|
| ADVANCED PROTECTION - VM encryption via HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Note__:*

- *The service requires a specific subscription and is not included in the standard IaaS offer*
- *Key management remains entirely under Cloud Temple's control in the SecNumCloud environment*
- *Encryption keys never leave the French and sovereign infrastructure*
