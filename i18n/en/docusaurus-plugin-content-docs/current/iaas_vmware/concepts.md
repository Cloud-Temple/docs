---
title: Concepts
---

The __IaaS (Infrastructure As A Service)__ offering from Cloud Temple is designed to meet critical business continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A Trusted Technological Platform

Cloud Temple's IaaS platform relies on internationally renowned technological partners:

- Compute: **CISCO UCS**.
- Storage: **IBM Spectrum Virtualize**, **IBM FlashSystem** for block storage.
- Network: **JUNIPER**.
- Virtualization: **VMware**, providing a reliable and proven foundation for managing your cloud environments.
- Backup: **IBM Spectrum Protect Plus**, for backup orchestration and storage.

This architecture is based on the **VersaStack** model, an alliance between Cisco and IBM, ensuring extensive compatibility with major software vendors.

## Dedicated and Automated Infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- **Dedicated Resources**: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- **Maximum Predictability**: You control virtualization rates, IOPS pressure on storage, and benefit from clear, monthly consumption-based billing.

The platform is **SecNumCloud** qualified by the [ANSSI](https://www.ssi.gouv.fr/), guaranteeing a high level of automation and security.

## Key Features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Shiva Console](../console/console.md) or in Infrastructure as Code mode thanks to APIs and the Terraform provider.

## Benefits

| Benefit              | Description                                                                                                                                    |   
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital Trust       | Data hosting in France and GDPR compliance.                                                                                                     |   
| Security            | Highly secure platform, qualified **SecNumCloud**, **HDS** (Health Data Hosting), **ISO 27001**, and **ISAE 3402 type II**.                      |  
| High Availability   | Platform availability rate of 99.99%, measured monthly, maintenance windows included.                                                           |   
| Resilience          | Implementation of business continuity or disaster recovery plans as needed.                                                                     |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                          |
| On-demand           | Resources available on demand.                                                                                                                  |

## Compute

The blades provided by Cloud Temple are of type __CISCO UCS B200__ or __CISCO UCS X210c__ . They are fully managed by Cloud Temple (firmware, OS versions, etc.) through the Cloud Temple console.

Several categories of compute blades are available in the catalog to support your workloads (Virtualization, Containerization, etc.).
These have different characteristics and performances to best meet your needs. The compute blade catalog is regularly updated.

When used with a virtualization offer, a hypervisor cluster is composed of only the same type of compute blade (it is not possible to mix different types of blades in the same cluster).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU **(4)**          | SKU for the Vmware offer        |
| --------------------- | ------------ | ----------------------------------------- | --------------------------| -------------------- | -------------------- | ------------------------------- | 
| ECO v3 Blade          | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD v3 Blade     | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE v3 Blade      | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 v3 Blade| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 v3 Blade| 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 v3 Blade| 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 v3 Blade| 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Notes__:

- __(1)__ The amount of RAM delivered is the physical memory available on the blades. It is not possible to change the physical memory amount of a blade.

- __(2)__ The minimum base frequency / turbo frequency, expressed in GHz. By default, processors are configured for maximum performance at the BIOS level.

- __(3)__ Physical connectivity is shared for network access and block storage access, the CISCO platform being converged.

- __(4)__ The available GPU offering evolves continuously. As of May 1, 2024, the offering is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade is delivered with 2 L40S cards of 48 GB of RAM. Contact support for more details if necessary.

The compute offering's availability is 99.99%, calculated monthly, maintenance window included. Eligibility in case of SLA non-compliance is subject to the creation of an incident ticket. You must also have at least two hosts per cluster and activate the __High Availability__ (HA) feature.
This feature allows your architecture to automatically restart your virtual machines on the second hypervisor.
In the event that a zone of availability contains only one hypervisor, automatic restart is not possible.

## Network
The network service on Cloud Temple's IaaS platform is based on a VPLS-based network infrastructure, offering flexible and high-performance segmentation to meet client connectivity and network isolation needs.

### Layer 2 VLANs

The VLANs provided in the IaaS offering are of **Layer 2** type, offering complete network isolation and adaptable configuration according to needs.

#### Key Concepts:
- **Sharing between clusters and availability zones (AZ)**:
  - VLANs can be shared between different AZs and different clusters belonging to the same tenant.
- **Inter-tenant propagation**:
  - VLANs can be propagated between multiple tenants belonging to the same organization, facilitating internal communications.

---

### Network Performance

The network infrastructure ensures low latency for optimal performance:
- **Intra-AZ Latency**: Less than **3 ms**.
- **Inter-AZ Latency**: Less than **5 ms**.

---

### Key Points

1. **Flexibility**: VLANs can be configured to adapt to multi-cluster and multi-tenant environments.
2. **High Performance**: Minimal latency ensures fast and efficient communication between availability zones.
3. **Isolation and Security**: Layer 2 VLANs offer strict network segmentation to protect data and traffic.

---

## Block Storage

Cloud Temple offers several classes of storage based on [IBM FlashSystem](https://www.ibm.com/flashsystem/) and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technology.

The __IBM SVC__ technology delivers the required performance level for our clients' environments thanks to the large amount of cache memory embedded in the controllers and the ability to distribute a server's IOPS load across multiple SANs.

It is also used to enable the replication of your block storage LUNs between availability zones or to facilitate interventions on storage arrays.

The storage is mainly dedicated FLASH NVME storage for professional workloads.
The disks are used by the storage arrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).
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

- *The effective performance for a storage class is related to the volume actually ordered, according to the "IOPS/To" notion, understood as "IOPS limit per allocated Terabyte",*
> *Thus, a 0.5To volume in the 'Standard' performance class will have an IOPS limitation capped at 750IOPS,*
> *Similarly, a 10To volume in the 'Ultra' performance class will have an IOPS limitation of up to 150000 IOPS,*
- *The IOPS limitation is applied to the volume, so to the notion of Datastore for a VMware environment,*
- *The storage availability is 99.99% measured monthly, including maintenance windows,*
- *There are no restrictions or quotas on reading or writing,*
- *There is no IOPS billing,*
- *There is no performance engagement on the __'Mass Storage'__ class,*
- *The minimum size of a storage LUN is 500GiB,*
- *When using a storage replication mechanism, the performance must be identical on both availability zones,*
- *No "intelligent" optimization mechanism such as compression or deduplication is implemented: when you reserve 10TiB of storage, you physically have 10TiB of useful storage implemented on IBM machines.*
- *Storage LUNs are dedicated to the client environment.*

### Usage within the VMware compute offer

When using block storage as a datastore in Cloud Temple's VMware compute offer, **several important considerations must be taken into account**:

1. **Swap file (.VSWP) during virtual machine startup**: When a virtual machine starts, it creates a .VSWP file of its memory size on the disk. Therefore, to be able to start your virtual machines, you must always have free space in your datastore equivalent to the sum of the memory sizes of your virtual machines. For example, if your datastore has 1 TiB of block storage and you want to start 10 virtual machines each with 64 GiB of memory, 640 GiB of disk space will be required. Without this space, machine startup will be limited by the available capacity to create the swap files.

2. **Free space for backup snapshots**: The backup service uses snapshots. You must therefore always have enough free space to allow the creation of a snapshot when backing up a virtual machine. The snapshot size depends on the write volume of the virtual machine and the time required to complete the backup. It is generally recommended to maintain at least 10% free space for this operation.

3. **Managing dynamic disks**: Be cautious with the use of dynamic disks. If you do not control their growth, a lack of physical space can result in a freeze (freeze) of the virtual machine at best, or a crash with corruption at worst. It is crucial to carefully monitor the available space on your datastores when using this type of disk.

Proactive disk space management is essential to ensure the proper functioning of your virtual machines and the reliability of backups. Make sure you always have the necessary space for swap files, snapshots, and the growth of dynamic disks.

## Backup mode storage

Storage dedicated to backing up your virtual machines is auto-provisioned by the platform within the ordered quota limit.

| Référence                | Unité | SKU                                      | 
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivage | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |


### Block mode storage replication

#### Principles

To enable the implementation of your disaster recovery plans, when it is not possible to be in a continuity situation with application mechanisms and when virtual machine replication is not suitable, Cloud Temple offers __block mode storage replication mechanisms between the availability zones of a region__.

These replication mechanisms are applied to the storage LUNs of your environments, in addition to backups. The choice of using a replication mechanism on an environment __depends on numerous factors including its criticality, the tolerated data loss, or the performance targeted__ for the application.

Cloud Temple offers two types of mechanisms deployed in an active/passive configuration:

- __Asynchronous replication__ (or __'Global Mirror'__): *The __'Global Mirror'__ function provides an asynchronous copy process. When a host writes to the primary volume, confirmation of I/O completion is received before the write operation is finished for the copy to the secondary volume. If a failover operation is initiated, the application must recover and apply all updates that have not been confirmed on the secondary volume. If I/O operations on the primary volume are paused for a short period, the secondary volume can become an exact match of the primary volume. This function is comparable to a continuous backup process in which the latest updates are always missing. When you use Global Mirror for disaster recovery, you need to consider how to handle these missing updates.*

- __Synchronous replication__ (or __'Metro Mirror'__): *The __'Metro Mirror'__ function is a type of remote copy that creates a synchronous copy of data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume but do not receive confirmation that the write operation is complete until the data is written to the secondary volume. This ensures that both volumes contain identical data when the copy operation is complete. After the initial copy operation is complete, the Metro Mirror function continuously maintains a fully synchronized copy of source data at the target site. __As of January 1, 2024, the 'Metro Mirror' function is no longer sold.__*

Then, a site is defined as "active" or "primary" and a "passive" or "standby" site. The disaster recovery plan is activated in case of a disaster or as part of a PRA test request. The passive site then takes over from the active site.

#### Asynchronous replication

When your workloads require short recovery times and it is not acceptable or suitable to use application-type replication mechanisms/virtual machine replication, it is possible to replicate a SAN storage LUN between two availability zones in the same region.

This offer provides an __RPO of 15Mn__ and an __RTO of less than 4H__. It allows for much faster recovery than implementing a backup restoration.

In an asynchronous replication (__Global Mirror__) storage volume, SAN virtualization controllers in both availability zones work together to perform write operations on both sites. The master site does not wait for the acknowledgment of writing from the slave site.

The steps of a write operation are as follows:

1. A hypervisor wants to perform __a write operation on a Global-Mirror volume__: it sends its request to the SAN controller of its availability zone,
2. The local SAN controller requests the SAN controller of the remote zone to perform the write operation,
3. The local SAN controller does not wait for the acknowledgment of the remote SAN and then performs the write locally,
4. It gives __acknowledgment__ to the hypervisor that issued the request,
5. __Hypervisors on the remote site do not directly access the Global Mirror LUN__: A service request is necessary.


| SLA       | Description                                                                                                                                       |   
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In case of a disaster at the primary data center, the maximum amount of data lost corresponds to the last 15 minutes of writing                   |
| RTO < 4H  | In case of a disaster at the primary data center, activity recovery is guaranteed within 4 hours depending on the complexity of the environments.  |
In case of PRA activation, the Cloud Temple team performs an operation to present the LUN __'Global Mirror'__ to the remote hypervisors so they can access the data. Therefore, implementing this solution requires reserving computing resources and RAM on the 'standby' site to resume activities in case of a disaster.

Using this technology also necessitates doubling the disk space: the same exact space is required on the remote site as on the local site.

The use of this mechanism can impact the application's performance by up to 10%. __Only storage classes 500 Iops/To, 1500 Iops/To, and 3000 Iops/To are compatible.__

| Reference                          | Unit  | SKU                                               |  
|------------------------------------|-------|---------------------------------------------------|
| STORAGE - Global Replication SAN   | 1 TiB | csp:(region):iaas:storage:license:globalmirror:v1 |

*__Note__*:

- *As the offer is asynchronous, it is possible that during a disaster some disk operations were not written on the remote site. Therefore, there could be a risk to data consistency, which should be mitigated in the risk analysis of the disaster recovery plan.*

- *The block storage replication is done transparently for virtual machines and applications,*

- *Hence, it is important to prioritize application-level replication scenarios or, alternatively, virtual machine replication scenarios,*

- *Compute and memory resources on the recovery site can be reduced to optimize costs if a degraded situation is acceptable for the business during disaster recovery plan execution.*

## VMware Virtualization

The Cloud Temple VMware virtualization offer qualified as SecNumCloud is based on __VMware Vsphere__ technology.

The platform is managed automatically by Cloud Temple (maintaining security conditions, operational conditions, etc.). It can be controlled via the Shiva console's graphical interface or via associated APIs.

*__Note__*: *For security reasons related to SecNumCloud qualification, __it is not possible for the client to directly access the VMware virtualization platform__ (no direct access to the vCenter notably). Indeed, the SecNumCloud qualification requires __total segregation__ between the control interfaces of the technical assets and the client's interface (the Shiva console).*

- The implemented products are VMware ESXi, VMware Vcenter, and VMware Replication.
- *The virtualization network does not use VMware NSX technology but is materially controlled by Juniper technology and the VPLS protocol.*
- *The storage does not use VMware vSan technology but only IBM SANs in 32G fiber channel technology.*
- *No hidden optimization (compression, deduplication, etc.) is implemented.*

### Definition of a Compute Blade Cluster ('Cpool')

The __'Cpool'__ is a grouping of VMware ESXi hypervisors, also known as an *'ESX cluster'*.

All hosts in a __'Cpool'__ belong __to the same tenant and the same availability zone__ (AZ). They must necessarily have the same class:
__it is not possible to mix different models of compute blades within the same cluster__.

All compute blades being delivered with the maximum physical memory, a software-based RAM usage limitation is applied at the cluster level to ensure it matches the billed RAM.

By default, each blade is equipped with 128 GB of activated memory within the __'Cpool'__.

A __'Cpool'__ can contain a maximum of 32 hypervisors. Beyond this limit, it will be necessary to create a second cluster.

The storage can be shared between __'Cpool'__.

### Memory Allocation for a 'Cpool'

The RAM reservation is configurable by cluster. You can reduce or increase the amount of RAM to match your needs at the cluster level.

__Be careful not to exceed an average of 85% memory consumption per compute blade__.
Indeed, VMware technology will use a compression optimization method that can heavily impact the performance of your workloads and complicate diagnostics.
Similarly, excessive memory pressure on your compute blades will force the hypervisor to offload some of its memory to disk to meet the virtual machines' needs.

This case, called __'Ballooning'__, greatly impacts the overall performance of virtual machines located on the affected storage (datastore).
__The diagnosis is complicated in this context__, as your metrics will show CPU impacts rather than memory or storage impacts.
Also, keep in mind that the first thing the hypervisor does when starting a virtual machine is to create __a memory swap file__ (.vswap) on
the disk, sized according to the memory of the concerned virtual machine. You must __account for this in your storage sizing__.

Each compute blade is delivered with 128GB of software-activated memory at the __'Cpool'__ level but physically has the entire allocatable memory.

For example, for a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation upon __'Cpool'__ activation will be 3 x 128GB = 384 GB of RAM.
You can extend this up to a maximum of 3 x 384GB = 1152GB of memory.

    Minimum memory for a 'Cpool' = number of hosts X 128GB of memory
    Maximum memory for a 'Cpool' = number of hosts X the physical memory quantity of the compute blade

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` regularly enriched and updated by our teams.
It currently includes several dozen `Templates` and images to mount on your virtual machines.

### Hypervisor Updates
Cloud Temple regularly provides builds for hypervisors to ensure the application of security patches.
However, updating the hypervisors remains your responsibility, as we do not have visibility into your business constraints.

The update process is fully automated. To guarantee service continuity, a minimum of two hypervisors is required per cluster during the update. Ensure you have the necessary permissions to perform these actions.

### Managing the Affinity of Your Virtual Machines

The __affinity and anti-affinity rules__ allow you to control the placement of virtual machines on your hypervisors.
They can be used to manage the resource usage of your __'Cpool'__.
For example, they can help balance the workload between servers or isolate resource-intensive workloads.
In a VMware __'Cpool'__, these rules are often used to manage the behavior of virtual machines with vMotion.
vMotion allows you to move virtual machines from one host to another without service interruption.

You can configure rules management to:

- __Affinity Rules__: These rules ensure that certain virtual machines run on the same physical host.
They are used to improve performance by keeping virtual machines that frequently communicate together on the same server to reduce network latency. Affinity rules are useful in scenarios
where performance is critical, such as for databases or applications requiring fast communication between servers.

- __Anti-affinity Rules__: Conversely, these rules ensure that certain virtual machines do not run
on the same physical host. They are important for availability and resilience, for instance,
to prevent all critical machines from being affected in case of a single server failure.
Anti-affinity rules are crucial for applications requiring high availability,
such as in production environments where fault tolerance is a priority.
For example, you would not want both your Active Directory instances on the same hypervisor.

When creating a rule, you define the rule type (affinity / anti-affinity), the rule name,
its activation status (__'Status'__), and the machines concerned in your hypervisor cluster.

*Note: The affinity/anti-affinity rules available in the console concern the virtual machines among themselves (no rules between hypervisors and virtual machines).*

### Asynchronous Replication of Your Virtual Machines in a VMware Environment

Asynchronous replication of your virtual machines is a mechanism that involves pushing write operations from the source hypervisor to the standby site at regular intervals.

After an initial hot copy of all active storage to the standby site, only the writes are pushed at regular intervals to the dormant site.
This interval depends on the write volume (from every hour to every 24 hours).

Virtual machine replication relies on the hypervisor's snapshot mechanism. As such,
this solution has the same disadvantages, particularly sensitivity to the virtual machine's write volume,
as the snapshot process is a recursive mechanism for snapshot closure.

The typical example of a machine that does not support the virtual machine replication mechanism is a 
serveur FTP qui reçoit les flux temps réels de caméras de surveillance. __The machine spends its time writing and will not be 
able to close a snapshot without pausing the operating system for a significant period of time
(several tens of minutes)__. If the hypervisor fails to close the snapshot, this is exactly what it will do,
with no possibility of intervention except to corrupt the virtual machine.

| SLA             | Description                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO of 1H to 24H | In case of a disaster at the main datacenter, the maximum amount of data lost is that of the last write push to the standby site. |
| RTO  < 15mn     | Operation of starting the stopped virtual machine on the remote site                                                                                |


In case of a need, or in case of a failure on a machine at the main site, the mirror machine on the standby site is activated. 
Activity resumption requires having reserved computing and RAM in standby on the standby site. It 
is necessary to have the same storage space on the passive site as on the active site.


| Reference                         | Unit | SKU                                             |  
|-----------------------------------|------|-------------------------------------------------|
| PRA - VMware inter-AZ Replication | 1 vm | csp:(region):iaas:vmware:license:replication:v1 |

*__Note__ : The calculation of the minimum RPO should be defined based on the rate of change on the virtual machine.*













## Backup of Virtual Machines
Cloud Temple offers __a native and non-defeasible cross-backup architecture__ (it is mandatory in the French secnumcloud qualification).

Backups are stored in an availability zone and on a physical datacenter different from the one hosting the virtual machine.

This allows protection in case of a major failure at the production datacenter and restoration on a secondary datacenter (fire, for example).

This solution includes:

- Offsite hot backup of all disks,
- Presentation and instant startup of a virtual machine from the mass storage infrastructure and hot reloading on production SANs,
- Partial file restoration from the backup,
- Retention limited only by the allocation of mass storage space.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution, an agentless architecture solution,
simple to use and allowing automation of backup processes in addition to optimizing mass storage space.

Backup and restore speeds depend on the rate of change in the environments.
The backup policy is configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note :__*

*__Some virtual machines are not compatible with this backup technology__ which uses the hypervisor's snapshot mechanisms.
These are typically machines with constant disk write loads. The hypervisor cannot close the snapshot which forces the virtual machine to freeze to complete the closure operation. This freeze can last several hours and is not stoppable.*

*The solution is then to exclude the disk that is the target of permanent writes and to back up the data by another method.*

| Reference                                               | Unit | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service    | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Create a Backup Policy
To add a new backup policy, you must request support. Support is accessible from the lifebuoy icon at the top right of the window.

The creation of a new backup policy is done by __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The name of the backup policy
    The characteristics (x days, y weeks, z months, ...)