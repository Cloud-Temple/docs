---
title: Concepts
---

The __IaaS (Infrastructure As A Service)__ offering from Cloud Temple is designed to meet critical continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technological platform

Cloud Temple's IaaS platform relies on internationally renowned technology partners:

- Compute: **CISCO UCS**.
- Storage: **IBM Spectrum Virtualize**, **IBM FlashSystem** for block storage.
- Network: **JUNIPER**.
- Virtualization: **VMware**, offering a reliable and proven base for managing your cloud environments.
- Backup: **IBM Spectrum Protect Plus**, for orchestration and storage of backups.

This architecture is based on the **VersaStack** model, an alliance between Cisco and IBM, ensuring extensive compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- **Dedicated resources**: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- **Maximum predictability**: You control virtualization rates, IOPS pressure on storage, and benefit from clear, monthly usage-based billing.

The platform is **SecNumCloud** qualified by [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Key features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Shiva Console](../console/console.md) or in Infrastructure as Code mode with APIs and the Terraform provider.

## Benefits

| Advantage            | Description                                                                                                                                    |   
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital trust        | Data hosting in France and GDPR compliance.                                                                                                    |   
| Security             | Highly secure platform, **SecNumCloud** qualified, **HDS** (Healthcare Data Hosting), **ISO 27001** and **ISAE 3402 type II** certified.        |  
| High availability    | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                                         |   
| Resilience           | Implementation of continuity or disaster recovery plans as needed.                                                                             |
| Automation           | Fully automated platform designed to integrate into a digital transformation program.                                                          |
| On demand            | Resources available on demand.                                                                                                                 |













## Compute

The blades provided by Cloud Temple are of the __CISCO UCS B200__ or __CISCO UCS X210c__ type. They are fully managed by Cloud Temple (firmware, OS version, etc.) through the Cloud Temple console.

Several categories of compute blades are available in the catalog to support your workloads (Virtualization, Containerization, etc.).
These offer different characteristics and performances to best meet your needs. The compute blade catalog evolves regularly.

Within the virtualization offering usage, a cluster of hypervisors is composed solely of compute blades of the same type (it is not possible to mix blades of different types in the same cluster).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads  | Connectivity __(3)__  | GPU **(4)**          | SKU for the Vmware offer       |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | --------------------- | -------------------- | ------------------------------ |
| ECO v3 Blade          | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 x 10 Gbit/s         |                      | csp:fr1:iaas:vmware:eco:v3     |
| STANDARD v3 Blade     | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 x 25 Gbit/s         |                      | csp:fr1:iaas:vmware:standard:v3|
| ADVANCE v3 Blade      | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 x 25 Gbit/s         |                      | csp:fr1:iaas:vmware:advance:v3 |
| PERFORMANCE 1 v3 Blade| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads            | 2 x 25 Gbit/s         |                      | csp:fr1:iaas:vmware:perf1:v3   |
| PERFORMANCE 2 v3 Blade| 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 x 25 Gbit/s         |                      | csp:fr1:iaas:vmware:perf2:v3   |
| PERFORMANCE 3 v3 Blade| 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 x 25 Gbit/s         |                      | csp:fr1:iaas:vmware:perf3:v3   |
| PERFORMANCE 4 v3 Blade| 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 x 25 Gbit/s         | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3   |

__Notes__:

- __(1)__ The amount of memory delivered is that physically available on the blades. It is not possible to change the physical amount of memory on a blade.

- __(2)__ The minimum base frequency / turbo frequency, expressed in Ghz. By default, processors are configured for maximum performance at the BIOS level.

- __(3)__ Physical connectivity is shared for network access and block storage access, as the CISCO platform is converged.

- __(4)__ The available GPU offer evolves constantly. As of May 1, 2024, the offer is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade is delivered with 2 L40S graphics cards with 48 GB of ram. Contact support for more details if necessary.

The availability of the compute offer is 99.99%, calculated monthly, including the maintenance window. Eligibility in case of SLA violation is subject to the creation of an incident ticket. You must also have at least two hosts per cluster and enable the __High Availability__ (HA) feature.
This feature allows your architecture to automatically restart your virtual machines on the second hypervisor.
If a availability zone contains only one hypervisor, automatic restart is not possible.













## Network
The network service on the Cloud Temple IaaS platform is based on a VPLS technology network infrastructure, offering flexible and high-performance segmentation to meet clients' connectivity and network isolation needs.

### Layer 2 VLANs

The VLANs provided in the IaaS offering are **Layer 2**, offering complete network isolation and adaptable configuration as needed.

#### Key concepts:
- **Sharing between clusters and availability zones (AZ)**:
  - VLANs can be shared between different AZs and different clusters belonging to the same tenant.
- **Inter-tenant propagation**:
  - VLANs can be propagated between multiple tenants belonging to the same organization, facilitating internal communications.

---

### Network performance

The network infrastructure guarantees low latency for optimal performance:
- **Intra-AZ latency**: Less than **3 ms**.
- **Inter-AZ latency**: Less than **5 ms**.

---

### Key points

1. **Flexibility**: VLANs can be configured to adapt to multi-cluster and multi-tenant environments.
2. **High performance**: Minimal latency ensures fast and efficient communication between availability zones.
3. **Isolation and security**: Layer 2 VLANs offer strict network segmentation to protect data and traffic.

---













## Block storage

Cloud Temple offers several storage classes based on [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technology.

The __IBM SVC__ technology delivers the required performance level for our clients' environments thanks to the large
amount of cache memory embedded in the controllers and the ability to distribute the total IOPS of a server across multiple SANs.

It is also used to enable the replication of your block storage LUNs between availability zones or facilitate maintenance on storage arrays.

The storage is primarily dedicated FLASH NVME storage for professional workloads.
The disks are used by the storage arrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).
Le class de stockage __'Mass Storage'__ propose des disques mécaniques pour les besoins d'archivages
dans un contexte d'efficience économique. Plusieurs niveaux de performances sont disponibles :

| Référence                         | Unité | SKU                                          | 
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 GiB | csp:(region):iaas:storage:block:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 GiB | csp:(region):iaas:storage:block:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To    | 1 GiB | csp:(region):iaas:storage:block:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 GiB | csp:(region):iaas:storage:block:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 GiB | csp:(region):iaas:storage:block:ultra:v1      | 
| MASS STORAGE - Archivage          | 1 TiB | csp:(region):iaas:storage:block:mass:v1       |

*__Note__ :*

- *The storage availability is 99.99% measured monthly, including the maintenance window,*
- *There are no restrictions or quotas on read or write,*
- *There is no billing based on IOPS,*
- *There is no performance commitment for the class __'Mass Storage'__,*
- *The minimum LUN storage size is 500 GiB,*
- *When using a storage replication mechanism, the performance must be identical across both availability zones,*
- *No "smart" optimization mechanisms like compression or deduplication are implemented: when you reserve 10 TiB of storage, you physically have 10 TiB of usable storage implemented on IBM machines.*
- *The storage LUNs are dedicated to the customer environment.*

### Usage within the VMware compute offer

When using block storage in the form of a datastore within Cloud Temple's VMware compute offer, **you must consider several important factors**:

1. **Swap file (.VSWP) when starting virtual machines**: When a virtual machine starts, it creates a .VSWP file of the size of its memory on the disk. Therefore, to be able to start your virtual machines, you must always have in your datastore free space equivalent to the total memory size of your virtual machines. For example, if your datastore has 1 TiB of block storage and you want to start 10 virtual machines with 64 GiB of memory each, 640 GiB of disk space will be required. Without this space, the startup of the machines will be limited by the available capacity to create the swap files.

2. **Free space for backup snapshots**: The backup service uses snapshots. Therefore, you must always have enough free space to allow the creation of a snapshot during the backup of a virtual machine. The snapshot size depends on the write volume of the virtual machine and the time required to perform the backup. Generally, it is recommended to maintain at least 10% of free space for this operation.

3. **Dynamic disk management**: Be cautious with the use of dynamic disks. If you don't control their growth, a lack of physical space can lead to a virtual machine freeze at best, or a crash with corruption at worst. It is crucial to closely monitor the available space on your datastores when using this type of disk.

Proactive disk space management is essential to ensure the smooth operation of your virtual machines and the reliability of backups. Make sure to always have the necessary space for swap files, snapshots, and the growth of dynamic disks.

## Backup mode storage

The storage dedicated to backing up your virtual machines is auto-provisioned by the platform [IBM Spectrum Protect Plus](backup.md) within the ordered quota limit.

| Reference                | Unit | SKU                                      | 
|--------------------------|------|------------------------------------------|
| MASS STORAGE - Archive   | 1 TiB | csp:(region):iaas:storage:block:backup:v1 |

### Block mode storage replication

#### Principles

To enable the implementation of your disaster recovery plans, when it is not possible to maintain business continuity with application mechanisms and virtual machine replication is not suitable, Cloud Temple offers __block mode storage replication mechanisms between the availability zones of a region__.

These replication mechanisms are applied to the storage LUNs of your environments, in addition to backups. 
The choice to use a replication mechanism on an environment __depends on many factors, including its criticality, tolerated data loss, or the targeted performance__ for the application.

Cloud Temple offers two types of mechanisms deployed in an active/passive configuration:

- __Asynchronous replication__ (or __'Global Mirror'__): *The __'Global Mirror'__ function provides an asynchronous copy process. When a host writes to the primary volume, the confirmation of the completion of the I/O is received before the write operation is completed for the copy to the secondary volume. If a failover operation is initiated, the application must recover and apply all updates that have not been confirmed on the secondary volume. If the I/O operations on the primary volume are paused for a short period, the secondary volume can become an exact match of the primary volume. This function is comparable to a continuous backup process in which the latest updates are always missing. When using Global Mirror for disaster recovery, you must consider how you want to handle these missing updates.*

- __Synchronous replication__ (or __'Metro Mirror'__): *The __'Metro Mirror'__ function is a type of remote copy that creates a synchronous copy of the data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume but do not receive confirmation that the write operation is complete until the data is written to the secondary volume. This ensures that both volumes contain identical data when the copy operation is complete. After the initial copy operation is complete, the Metro Mirror function continuously maintains a fully synchronized copy of the source data at the target site. __Since January 1, 2024, the 'Metro Mirror' function is no longer sold.__*

A site is then defined as "active" or "primary" and a site as "passive" or "standby".
The disaster recovery plan is activated in case of disaster or to test the DRP. 
The passive site then takes over from the active site.

#### Asynchronous replication

When your workloads require short recovery times and it is not acceptable or suitable to use application-type replication mechanisms/virtual machine replication, 
it is possible to replicate a SAN storage LUN between two availability zones in the same region.

This offer provides a __15Mn RPO__ and a __RTO of less than 4H__. It allows much faster recovery than implementing a backup restoration.

In an asynchronous replication storage volume (__Global Mirror__), the SAN virtualization controllers in the 
two availability zones work together to perform write operations on both sites. 
The master site does not wait for the write acknowledgment from the slave site.

The steps of a write operation are as follows:

1. A hypervisor wants to perform __a write operation on a Global-Mirror volume__: it sends its request to the SAN controller in its availability zone, 
2. The local SAN controller requests the remote zone's SAN controller to perform the write operation,
3. The local SAN controller does not wait for the distant SAN acknowledgment and then performs the write locally,
4. It gives __acknowledgment__ to the hypervisor that issued the request,
5. __The hypervisors of the distant site do not directly access the Global Mirror LUN__: A service request is necessary.

| SLA       | Description                                                                                                   |   
|-----------|---------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In the event of a disaster on the main data center, the maximum amount of data lost corresponds to the last 15 minutes of writing   |
| RTO < 4H  | In the event of a disaster on the main data center, the recovery time is guaranteed within 4 hours depending on the complexity of the environments. |

In the event of DRP activation, the Cloud Temple team performs a presentation operation of the __'Global Mirror'__ LUN to the distant hypervisors so that they can access the data. The implementation of this solution therefore requires reserving computing and RAM resources on the 'standby' site to resume activity in the event of a disaster.

The use of this technology also requires doubling the disk space: it is necessary to have exactly the same space on the distant site as on the local site.


The use of this mechanism can impact the application's performance by up to 10%. __Only storage classes 500 Iops/To, 1500 Iops/To, and 3000 Iops/TO are compatible.__


| Reference                           | Unit   | SKU                                               |  
|-------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN    | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Note__*:

- *Since the offer is asynchronous, it is possible during a disaster that some disk operations have not been written on the remote site. Therefore, there may be a risk to data consistency, to be mitigated in the risk analysis of the disaster recovery plan.*
- *The replication of storage in block mode is done in a masked way for virtual machines and applications,*
- *Thus, it is important to favor application replication scenarios or possibly virtual machine replication,*
- *The computation and memory on the recovery site can be reduced to optimize costs if a degraded situation is acceptable for the business during the disaster recovery plan action.*

## VMware Virtualization

The Cloud Temple VMware Cloud virtualization offer qualified SecNumCloud is based on the __VMware Vsphere__ technology.

The platform is managed by Cloud Temple automatically (security maintenance, operational condition maintenance, ...).
It can be managed via the graphical interface of the Shiva console or via associated APIs.

*__Note__*: *For security reasons related to the SecNumCloud qualification,
__it is not possible for the customer to access the VMware virtualization platform directly__ (no direct access to vCenter in particular).
Indeed, the SecNumCloud qualification imposes __complete segregation__ between the management interfaces of technical assets and the customer's interface (the Shiva console).*

- The products implemented are VMware ESXi, VMware Vcenter, and VMware Replication.
- *The network of the virtualization offer does not use VMware NSX technology but is hardware managed by Juniper technology and the VPLS protocol.*
- *The storage does not use VMWare vSan technology but only IBM SANs in 32G fiber channel.*
- *No hidden optimization methods are implemented (compression, deduplication, ...).*

### Definition of a Compute Blade Cluster ('Cpool')

The __'Cpool'__ is a grouping of VMware ESXi hypervisors, also known as the *'ESX cluster'*.

The hosts in a __'Cpool'__ all belong to __the same tenant and the same availability zone__ (AZ). They must necessarily have the same class:
__it is not possible to mix different compute blade models within the same cluster__.

All compute blades are delivered with the maximum physical memory, with a software-enforced RAM usage limitation at the cluster level to ensure it matches the billed RAM.

By default, each blade has 128 GB of activated memory within the __'Cpool'__.

A __'Cpool'__ can contain a maximum of 32 hypervisors. Beyond this limit, it will be necessary to create a second cluster.

Storage can be shared between __'Cpools'__.

### Memory Allocation for a 'Cpool'

The RAM reservation is configurable per cluster. You can reduce or increase the amount of RAM to match your needs at the cluster level.

__Be careful not to exceed an average of 85% memory consumption per compute blade__.
Indeed, VMware technology will use a compression optimization method that can significantly impact the performance of your workloads and complicate diagnostics.
Similarly, excessive memory pressure on your compute blades will force the hypervisor to offload some of its memory to disk to meet virtual machine needs.

This case, called __'Ballooning'__, greatly impacts the overall performance of the virtual machines located on the affected datastore.
__The diagnosis is complicated in this context__, as your metrics will show impacts at the CPU level rather than memory or storage.
Also, keep in mind that the first thing the hypervisor does when starting a virtual machine is create __a memory swap file__ (.vswap) on
the disk, the size of the concerned virtual machine's memory. You must __take this into account in your storage sizing__.

Each compute blade is delivered with 128GB of software-activated memory at the __'Cpool'__ level but physically has the full allocatable memory.

For example, for a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation at the activation of the __'Cpool'_ will be 3 x 128GB = 384 GB of RAM.
You can extend it to a maximum of 3 x 384GB = 1152GB of memory.

    Minimum memory of a 'Cpool' = number of hosts X 128GB of memory
    Maximum memory of a 'Cpool' = number of hosts X the physical memory amount of the compute blade

### Cloud Temple Virtual Machines Catalog

Cloud Temple provides you with a catalog of `Templates` regularly enriched and updated by our teams.
It currently includes several dozen `Templates` and images to mount on your virtual machines.

### Updating Hypervisors
Cloud Temple regularly provides builds for hypervisors to ensure the application of security patches. 
However, updating the hypervisors remains your responsibility, as we have no visibility into your business constraints.

The update process is fully automated. To ensure continuity of service, a minimum of two hypervisors is required per cluster during the update. Make sure you have the necessary permissions to perform these actions.


### Managing the Affinity of Your Virtual Machines

The __affinity and anti-affinity rules__ allow you to control the placement of virtual machines on your hypervisors.
They can be used to manage the resource usage of your __'Cpool'__.
For example, they can help balance the workload between servers or isolate resource-intensive workloads.
In a VMware __'Cpool'__, these rules are often used to manage the behavior of virtual machines with vMotion.
vMotion allows moving virtual machines from one host to another without service interruption.

You can configure the rules management to:

- __Affinity Rules__: These rules ensure that certain virtual machines are run on the same physical host.
They are used to improve performance by keeping virtual machines that frequently communicate with each other on the same server to reduce network latency. Affinity rules are useful in scenarios
where performance is critical, such as for databases or applications that require quick communication between servers.

- __Anti-affinity Rules__: Conversely, these rules ensure that certain virtual machines are not run on the same physical host. They are important for availability and resilience, for example,
to prevent critical machines from being all affected in case of a single server failure. Anti-affinity rules are crucial for applications requiring high availability,
such as in production environments where fault tolerance is a priority. For example, you do not want your two Active Directories on the same hypervisor.

When creating a rule, you define the type of rule (affinity / anti-affinity), the rule's name,
its activation status (__'Status'__), and the concerned machines of your hypervisor cluster.

*Note: the affinity/anti-affinity rules offered in the console are rules concerning virtual machines among themselves (no rules between hypervisors and virtual machines).*

### Asynchronous Replication of Your Virtual Machines in VMware Environment

The asynchronous replication of your virtual machines is a mechanism that involves pushing the write operations at the source hypervisor level to the standby site at regular intervals.

After an initial hot copy of the entire active storage on the standby site, only the writes are pushed at regular intervals to the standby site.
This interval depends on the volume of writing (from every hour to every 24 hours).

The replication of virtual machines relies on the snapshot mechanism of the hypervisor. As such,
this solution has the same disadvantages, particularly the sensitivity to the virtual machine's volume of writes,
as the snapshot process is a recursive mechanism for snapshot closure.

The typical example of a machine that does not support the virtual machine replication mechanism is a
FTP server that receives real-time surveillance camera streams. __The machine spends its time writing and will not be 
able to close a snapshot without pausing the operating system for a significant period 
(several tens of minutes)__. If the hypervisor cannot close the snapshot, that's exactly what it will do,
without the possibility of intervening except to corrupt the virtual machine.

| SLA             | Description                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H à 24H | In case of disaster at the main datacenter, the maximum amount of data lost is that of the last write push on the standby site.                           |
| RTO  < 15mn     | Operation to start the stopped virtual machine on the remote site                                                                                        |

In case of need or in case of failure on a machine of the main site, the mirror machine on the standby site is activated. 
Resumption of activity requires reserving computing and RAM on standby at the standby site. It 
is necessary to have the same storage space on the passive site as on the active site.

| Reference                         | Unit  | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:license:replication:v1 |

*__Note__ : The calculation of the minimum RPO must be defined according to the rate of change on the virtual machine.*

## Backup of virtual machines
Cloud Temple offers __a cross-native backup architecture that is non-disengageable__ (it is mandatory in the French secnumcloud qualification).

Backups are stored in an availability zone and on a physical datacenter different from the one hosting the virtual machine.

This allows for protection in case of major failure in the production datacenter and restoration on a secondary datacenter (e.g., fire).

This solution includes:

- Off-site hot backup of all disks,
- Instant presentation and startup of a virtual machine from mass storage infrastructure and hot reloading on production SANs,
- Partial file restoration from the backup,
- Retention limited only by mass storage space allocation.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution, an agentless architecture solution,
simple to use and allowing the automation of backup processes in addition to optimizing mass storage space.

Backup and restoration speeds are dependent on the rate of change in the environments.
The backup policy is configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note:__*

*__Some virtual machines are not compatible with this backup technology__ which uses the hypervisor's snapshot mechanisms.
These are typically the machines with constant disk write loads. It is not possible for the hypervisor to close the snapshot
which forces the freezing of the virtual machine to complete the closure operation. This freeze can last several hours and cannot be stopped.*

*The solution is then to exclude the disk that is the target of constant writes and to back up the data using another method.*

| Reference                                               | Unit  | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service    | 1 VM  | csp:(region):iaas:backup:vm:v1 |

#### Create a backup policy
To add a new backup policy, you must make a request to support. Support is accessible from the buoy icon at the top right of the window.

The creation of a new backup policy is done by __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The name of the backup policy
    The characteristics (x days, y weeks, z months, ...)