---
title: Concepts
---

Cloud Temple's __IaaS (Infrastructure As A Service)__ offering is designed to meet critical continuity and disaster recovery needs, with a particular focus on demanding sectors like industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure guarantees maximum availability and optimal performance for your critical workloads.

## A Trusted Technological Platform

Cloud Temple's IaaS platform relies on internationally renowned technological partners:

- Compute: **CISCO UCS**.
- Storage: **IBM Spectrum Virtualize**, **IBM FlashSystem** for block storage.
- Network: **JUNIPER**.
- Virtualization: **VMware**, providing a reliable and proven foundation for managing your cloud environments.
- Backup: **IBM Spectrum Protect Plus**, for orchestration and storage of backups.

This architecture is based on the **VersaStack** model, a partnership between Cisco and IBM, guaranteeing extensive compatibility with major software vendors.

## Dedicated and Automated Infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- **Dedicated Resources**: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- **Maximum Predictability**: You control virtualization rates, IOPS pressure on storage, and benefit from clear monthly consumption billing.

The platform is qualified **SecNumCloud** by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Key Features

- Dedicated and on-demand computing resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Shiva Console](../console/console.md) or in Infrastructure as Code mode using APIs and the Terraform provider.

## Benefits

| Benefit              | Description                                                                                                                                    |   
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital Trust       | Data hosting in France and GDPR compliance.                                                                                                    |   
| Security            | Highly secure platform, qualified **SecNumCloud**, **HDS** (Health Data Hosting), **ISO 27001**, and **ISAE 3402 Type II**.                    |  
| High Availability   | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                                          |   
| Resilience          | Implementation of continuity or disaster recovery plans according to needs.                                                                     |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                           |
| On Demand           | Resources available on demand.                                                                                                                  |

## Regions and Availability Zones

The VMware IaaS product is deployed in an availability zone. An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This type of deployment allows you to choose the location of clusters and distribute them across different availability zones (AZ).
This offers better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

---

## Compute

The blades provided by Cloud Temple are __CISCO UCS B200__ or __CISCO UCS X210c__. They are fully managed by Cloud Temple (firmware, OS version, etc.) through the Cloud Temple console.

Multiple categories of compute blades are available in the catalog to support your workloads (virtualization, containerization, etc.).
These have different characteristics and performance to best meet your needs. The compute blade catalog evolves regularly.

In the context of use with a virtualization offering, a cluster of hypervisors is only composed of compute blades of the same type (it is not possible to mix blades of different types within the same cluster).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU **(4)**          | SKU for the VMware offer         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| ECO Blade v3          | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD Blade v3     | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE Blade v3      | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 Blade v3| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 Blade v3| 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 Blade v3| 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 Blade v3| 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Notes__:

- __(1)__ The amount of memory delivered is physically available on the blades. It is not possible to change the physical amount of memory on a blade.

- __(2)__ Minimum base frequency / turbo frequency, expressed in GHz. By default, processors are configured for maximum performance at the BIOS level.

- __(3)__ Physical connectivity is shared for network access and block storage access, with the CISCO platform being converged.

- __(4)__ The available GPU offering evolves constantly. As of May 1, 2024, the offering is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade is delivered with 2 L40S cards of 48 GB of RAM. Contact support for more details if needed.

The compute service availability is 99.99%, calculated monthly, including maintenance windows. Eligibility in case of SLA breach is subject to
the creation of an incident ticket. You must also have at least two hosts per cluster and activate the __High Availability__ (HA) feature.
This feature allows your architecture to automatically restart your virtual machines on the second hypervisor.
In the event that an availability zone contains only one hypervisor, automatic restarts are not possible.

## Network

The network service on Cloud Temple's IaaS platform relies on a network infrastructure based on VPLS technology, offering flexible and high-performance segmentation to meet clients' connectivity and network isolation needs.

### Layer 2 VLANs

The VLANs provided in the IaaS offering are **Layer 2** type, offering complete network isolation and adaptable configuration as needed.

#### Key Concepts:
- **Sharing between Clusters and Availability Zones (AZ)**: 
  - VLANs can be shared between different AZs and different clusters belonging to the same tenant.
- **Inter-tenant Propagation**: 
  - VLANs can be propagated between multiple tenants belonging to the same organization, facilitating internal communications.

---

### Network Performance

The network infrastructure guarantees low latency for optimal performance:
- **Intra-AZ Latency**: Less than **3 ms**.
- **Inter-AZ Latency**: Less than **5 ms**.

---

### Key Points

1. **Flexibility**: VLANs can be configured to adapt to multi-cluster and multi-tenant environments.
2. **High Performance**: Minimal latency ensures fast and efficient communication between availability zones.
3. **Isolation and Security**: Layer 2 VLANs offer strict network segmentation to protect data and flows.

---

## Block Storage

Cloud Temple offers several storage classes based on [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technology.

__IBM SVC__ technology allows delivering the required performance level for our clients' environments thanks to a large
amount of cache memory embedded in the controllers and the ability to distribute all of a server's IOPS across multiple SANs.
Elle est aussi utilisée pour permettre la réplication de vos LUNs de stockage en mode bloc entre les zones de disponibilité ou faciliter les interventions sur les baies de stockages.

Le stockage est principalement du stockage de type FLASH NVME dédié aux charges de travail professionnelles. Les disques sont utilisés par les baies de stockage en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

Le classe de stockage __'Mass Storage'__ propose des disques mécaniques pour les besoins d'archivages dans un contexte d'efficience économique. Plusieurs niveaux de performances sont disponibles :

| Référence                         | Unité | SKU                                          | 
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 GiB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 GiB | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To    | 1 GiB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 GiB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 GiB | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivage          | 1 TiB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Note__ :*

- *The effective performance for a storage class is linked to the volumetry actually ordered, according to the concept "IOPS/To", meaning "IOPS limit per allocated Tera",* 
> *Thus, a volume of 0.5TB in the 'Standard' performance class will have an IOPS limitation capped at 750IOPS,*
> *Similarly, a volume of 10TB in the 'Ultra' performance class will have an IOPS limitation of up to 150000 IOPS,*
- *The IOPS limitation is applied to the volume, hence to the Datastore concept for a VMware environment,*
- *The storage availability is 99.99% measured monthly, including maintenance window,*
- *There is no restriction or quota on reading or writing,*
- *There is no IOPS billing,*
- *There is no performance commitment for the __'Mass Storage'__ class,*
- *The minimum size of a storage LUN is 500GiB,*
- *When using a storage replication mechanism, performances must be identical on both availability zones,*
- *No "intelligent" optimization mechanism like compression or deduplication is implemented: when you reserve 10TiB of storage, you physically have 10TiB useful storage implemented on IBM machines.*
- *The storage LUNs are dedicated to the client environment.*

### Usage in VMware computing offer

When using block storage as a datastore in the Cloud Temple VMware computing offer, **you must consider several important aspects**:

1. **Swap file (.VSWP) during virtual machine startup**: When a virtual machine starts, it creates a .VSWP file of its memory size on the disk. Therefore, to start your virtual machines, you must always have free space in your datastore equivalent to the total memory sizes of your virtual machines. For example, if your datastore has 1 TiB of block storage and you want to start 10 virtual machines with 64 GiB of memory each, 640 GiB of disk space will be required. Without this space, starting the machines will be limited by the available capacity to create the swap files.

2. **Free space for backup snapshots**: The backup service uses snapshots. You must always have enough free space to allow the creation of a snapshot during a virtual machine backup. The snapshot size depends on the write volume of the virtual machine and the time needed to perform the backup. As a general rule, it is recommended to maintain at least 10% free space for this operation.

3. **Management of dynamic disks**: Be cautious with the use of dynamic disks. If you do not control their growth, a lack of physical space can result in a freeze of the virtual machine at best, or a crash with corruption at worst. It is crucial to carefully monitor the available space on your datastores when using such disks.

Proactive disk space management is essential to ensure the proper functioning of your virtual machines and the reliability of backups. Always ensure sufficient space for swap files, snapshots, and the growth of dynamic disks.

## Backup mode storage

Storage dedicated to backing up your virtual machines is self-provisioned by the platform within the ordered quota limit. 

| Référence                | Unité | SKU                                      | 
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivage | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |


### Block storage replication

#### Principles

To implement your disaster recovery plans, when it is not possible to maintain business continuity with application mechanisms and virtual machine replication is not suitable, Cloud Temple offers __block storage replication mechanisms between availability zones in a region__.

These replication mechanisms are applied to the storage LUNs of your environments, in addition to backups. The choice to use a replication mechanism on an environment __depends on many factors including its criticality, tolerable data loss, and desired performance__ for the application.

Cloud Temple offers two types of mechanisms deployed in an active/passive configuration: 

- __Asynchronous__ replication (or __'Global Mirror'__): *The __'Global Mirror'__ function provides an asynchronous copy process. When a host writes to the primary volume, the acknowledgment of I/O completion is received before the write operation is finished for the secondary volume copy. If a failover operation is initiated, the application must recover and apply all updates that were not acknowledged on the secondary volume. If I/O operations on the primary volume are paused for a short period, the secondary volume can become an exact match of the primary volume. This function is comparable to a continuous backup process where the latest updates are always missing. When using Global Mirror for disaster recovery purposes, you must consider how you wish to handle these missing updates.*

- __Synchronous__ replication (or __'Metro Mirror'__): *The __'Metro Mirror'__ function is a remote copy type that creates a synchronous copy of data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume and do not receive any acknowledgment that the write operation is complete until the data is written to the secondary volume. This ensures that both volumes contain identical data when the copy operation is complete. After the initial copy operation is finished, the Metro Mirror function continuously maintains a fully synchronized copy of the source data at the target site. __As of January 1, 2024, the 'Metro Mirror' function is no longer marketed.__*

A site is then defined as "active" or "primary" and a "passive" or "standby" site. The disaster recovery plan is activated in case of disaster or for a PRA test request. The passive site then takes over from the active site.

#### Asynchronous replication 

When your workloads require short recovery times and it is not acceptable or suitable to use application replication mechanisms/virtual machine replication, it is possible to replicate a SAN storage LUN between two availability zones in the same region.

This offer provides a __15Mn RPO__ and an __RTO of less than 4H__. It allows you to restart much faster than implementing a backup restore.

In an asynchronous replication (__Global Mirror__) storage volume, the SAN virtualization controllers of the two availability zones work together to perform write operations on both sites. The master site does not wait for the acknowledgment of the slave site's write.

The steps for a write operation are as follows:

1. A hypervisor wants to perform __a write operation on a Global-Mirror volume__: it sends its request to the SAN controller of its availability zone,
2. The local SAN controller requests the remote zone's SAN controller to perform the write operation,
3. The local SAN controller does not wait for the remote SAN's acknowledgment and performs the write locally,
4. It gives __acknowledgment__ to the hypervisor that issued the request,
5. __Hypervisors on the remote site do not directly access the Global Mirror LUN__: A service request is necessary.


| SLA       | Description                                                                                                                                       |  

|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In case of a disaster at the primary datacenter, the maximum amount of data lost corresponds to at most the last 15 minutes of writing            |
| RTO < 4H  | In case of a disaster at the primary datacenter, resumption of activity is guaranteed within 4 hours depending on the complexity of the environments.|

In the event of a DR activation, the Cloud Temple team will present the LUN __'Global Mirror'__ to the remote hypervisors so they can access the data. Implementing this solution thus requires reserving compute and RAM resources on the 'standby' site to resume activity in the event of a disaster.

Using this technology also requires doubling the disk space: it is necessary to have exactly the same space on the remote site as on the local site.

Using this mechanism can impact application performance by around 10%. __Only the 500 Iops/To, 1500 Iops/To, and 3000 Iops/To storage classes are compatible.__


| Reference                          | Unit  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN   | 1 TiB  | csp:(region):iaas:storage:license:globalmirror:v1  |

*__Note__* : 

- *Since the offer is asynchronous, it is possible during a disaster that some disk operations have not been written on the remote site. There may thus be a risk regarding data consistency, to be mitigated in the risk analysis of the disaster recovery plan.*
- *Block storage replication is done transparently for virtual machines and applications,*
- *As such, it is important to prioritize application replication scenarios or, eventually, virtual machine replication scenarios,*
- *Compute and memory resources on the recovery site can be reduced to optimize costs if a degraded situation is acceptable for business during the execution of the recovery plan.*

## VMware Virtualization

The Cloud Temple VMware virtualization offer, qualified by SecNumCloud, is based on the __VMware Vsphere__ technology.

The platform is managed by Cloud Temple in an automated way (maintaining security conditions, operational conditions, etc.).
It can be controlled via the graphical interface of the Shiva console or through the associated APIs.

*__Note__* : *For security reasons related to the SecNumCloud qualification,
__it is not possible for the client to directly access the VMware virtualization platform__ (no direct access to vCenter, notably).
Indeed, the SecNumCloud qualification mandates __complete segregation__ between the management interfaces of technical assets and the client's interface (the Shiva console).*

- The products implemented are VMware ESXi, VMware vCenter, and VMware Replication.
- *The network for the virtualization offer does not use VMware NSX technology but is hardware-piloted by Juniper technology and the VPLS protocol.*
- *Storage does not use VMWare vSAN technology but only IBM SANs in 32G fiber channel.*
- *No form of hidden optimization is implemented (compression, deduplication, etc.).*

### Definition of a Compute Blade Cluster ('Cpool')

The __'Cpool'__ is a grouping of VMware ESXi hypervisors, also known as an *'ESX cluster'*.

The hosts in a __'Cpool'__ all belong __to the same tenant and the same availability zone__ (AZ). They must necessarily be of the same class:
__it is not possible to mix different models of compute blades within the same cluster__.

All compute blades delivered with the maximum physical memory have a software limitation applied at the cluster level to ensure it corresponds to the billed RAM.

By default, each blade has 128 GB of memory activated within the __'Cpool'__.

A __'Cpool'__ can contain a maximum of 32 hypervisors. Beyond this limit, it will be necessary to create a second cluster.

Storage can be shared between the __'Cpools'__.

### Memory Allocation for a 'Cpool'

RAM reservation is configurable by cluster. You can reduce or increase the amount of RAM to meet your needs at the cluster level.

__Be careful not to exceed an average memory consumption of 85% per compute blade__.
Indeed, VMware technology will use a compression optimization method, which can significantly impact the performance of your workloads and complicate diagnostics.
Likewise, excessive memory pressure on your compute blades will force the hypervisor to offload some of its memory to disk to meet the needs of the virtual machines.

This case, known as __'Ballooning'__, strongly impacts the overall performance of the virtual machines on the affected storage (datastore).
__Diagnosis is complicated in this context__, as your metrics will see impacts at the CPU level rather than memory or storage.
Also, keep in mind that the first thing the hypervisor does when starting a virtual machine is to create __a memory swap file__ (.vswap) on the disk of the size of the virtual machine's memory. You need __to take this into account when sizing your storage__.

Each compute blade is delivered with 128 GB of memory activated by software at the __'Cpool'__ level but physically has the full allocatable memory.

For example, for a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation upon __'Cpool'_ activation will be 3 x 128 GB = 384 GB of RAM.
You could extend it up to a maximum of 3 x 384 GB = 1152 GB of memory.

    Minimum memory of a 'Cpool' = number of hosts X 128 GB of memory
    Maximum memory of a 'Cpool' = number of hosts X the amount of physical memory of the compute blade

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` regularly enriched and updated by our teams.
It currently includes several dozen `Templates` and images to mount on your virtual machines.

### Hypervisor Updates
Cloud Temple regularly provides builds for hypervisors to ensure the application of security patches.
However, hypervisor updates remain your responsibility, as we do not have visibility into your business constraints.

The update process is fully automated. To ensure service continuity, a minimum of two hypervisors per cluster is required during the update. Make sure you have the necessary permissions to perform these actions.

### Managing the Affinity of Your Virtual Machines

__Affinity and anti-affinity rules__ allow you to control the placement of virtual machines on your hypervisors.
They can be used to manage the resource usage of your __'Cpool'__.
For example, they can help balance the workload between servers or isolate resource-intensive workloads.
In a VMware __'Cpool'__, these rules are often used to manage the behavior of virtual machines with vMotion.
vMotion allows you to move virtual machines from one host to another without service interruption.

You can configure the rules management to:

- __Affinity Rules__: These rules ensure that certain virtual machines are executed on the same physical host.
They are used to improve performance by keeping virtual machines that frequently communicate together on the same server to reduce network latency. Affinity rules are useful in scenarios
where performance is critical, such as in the case of databases or applications requiring fast server-to-server communication.

- __Anti-affinity Rules__: Conversely, these rules ensure that certain virtual machines are not executed
on the same physical host. They are important for availability and resilience, for example,
to prevent all critical machines from being affected in the event of a single server failure.
Anti-affinity rules are crucial for applications requiring high availability,
such as in production environments where fault tolerance is a priority.
For example, you wouldn't want both of your Active Directories on the same hypervisor.

When creating a rule, you define the type of rule (affinity / anti-affinity), the rule name,
its activation status (__'Status'__), and the machines concerned in your hypervisor cluster.

*Note: The affinity/anti-affinity rules proposed in the console are rules concerning the virtual machines among themselves (not between hypervisors and virtual machines).*

### Asynchronous Replication of Your Virtual Machines in VMware Environment

Asynchronous replication of your virtual machines is a mechanism that consists of pushing write operations from the source hypervisor to the standby site at regular intervals.

After a hot initial copy of all active storage on the standby site, only writes are pushed regularly to the standby site.
This interval depends on the write volume (from every hour to every 24 hours).
La réplication des machines virtuelles s'appuie sur le mécanisme de clichés instantanés de l'hyperviseur. À ce titre,
cette solution a les mêmes inconvénients, en particulier la sensibilité au volume d'écritures de la machine virtuelle,
le processus de cliché instantané étant un mécanisme récursif pour la clôture du cliché instantané.

The typical example of a machine that does not support the virtual machine replication mechanism is an
FTP server that receives real-time streams from surveillance cameras. __The machine spends its time writing and will
not be able to close a snapshot without pausing the operating system for a significant period
(several tens of minutes)__. If the hypervisor fails to close the snapshot, that is exactly what it will do,
without any possibility of intervention except to corrupt the virtual machine.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO of 1H to 24H| In case of disaster at the main datacenter, the maximum data loss is that of the last write push on the standby site.                                      |
| RTO  < 15mn     | Operation to start the stopped virtual machine on the remote site                                                                                        |

In case of need, or in case of failure of a machine at the main site, the mirror machine on the standby site is activated.
The resumption of activity requires reserving computing and RAM on standby at the standby site. It
is necessary to have the same storage space on the passive site as on the active site.

| Reference                         | Unit  | SKU                                             |
|-----------------------------------|-------|-------------------------------------------------|
| PRA - VMware inter-AZ Replication | 1 vm  | csp:(region):iaas:vmware:license:replication:v1 |

*__Note__ : The calculation of the minimum RPO must be defined based on the rate of change on the virtual machine.*

## Virtual Machine Backup
Cloud Temple offers __a native and non-disableable cross-backup architecture__ (it is mandatory in the French secnumcloud qualification).

The backups are stored in an availability zone and on a physical datacenter different from the one hosting the virtual machine.

This protects against major failures in the production datacenter and allows restoration in a secondary datacenter (e.g., fire).

This solution includes:

- Off-site hot backup of all disks,
- Instant presentation and startup of a virtual machine from the mass storage infrastructure and hot reload on the production SANs,
- Partial file restoration from backup,
- Retention limited only by the allocation of mass storage space.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution, an agentless architecture solution,
easy to use and allowing the automation of backup processes in addition to space optimization for mass storage.

The backup and restoration speeds depend on the rate of change in environments.
The backup policy is configurable from the [Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note :__*

*__Some virtual machines are not compatible with this backup technology__ which uses the hypervisor snapshot mechanisms.
These typically are machines with constant disk write workloads. It is not possible for the hypervisor to close the snapshot,
which forces the virtual machine to freeze to complete the closing operation. This freeze can last several hours and is not stoppable.*

*The solution is to exclude the disk that is the target of permanent writes and to back up the data by another method.*

| Reference                                               | Unit  | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ | 
| BACKUP - Access to IBM Spectrum Protect Plus service    | 1 VM  | csp:(region):iaas:backup:vm:v1 |

#### Create a Backup Policy
To add a new backup policy, a request must be made to support. Support is accessible from the lifebuoy icon at the top right of the window.

Creating a new backup policy is done by __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The name of the backup policy
    The characteristics (x days, y weeks, z months, ...)