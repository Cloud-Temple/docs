---
title: Concepts
---

The Cloud Temple's __IaaS (Infrastructure As A Service)__ offering is designed to meet critical continuity and disaster recovery needs, with a particular focus on demanding sectors such as manufacturing, finance, and insurance. Built on cutting-edge technologies, this infrastructure ensures maximum uptime and optimal performance for your critical workloads.

## A Trusted Technological Platform

Cloud Temple's IaaS platform leverages renowned international technology partners:

- Computing: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage.
- Networking: __JUNIPER__.
- Virtualization: __VMware__, providing a reliable and proven foundation for managing your cloud environments.
- Backup: __IBM Spectrum Protect Plus__, for orchestrating and storing backup data.

This architecture is built upon the __VersaStack__ model, an alliance between Cisco and IBM, ensuring broad compatibility with leading software vendors.

## A Dedicated and Automated Infrastructure

Despite being entirely automated through APIs and a provider Terraform, Cloud Temple's IaaS offering provides a unique infrastructure:

- **Dedicated Resources**: Compute instances, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared among clients.
- **Maximum Predictability**: You have full control over virtualization rates, storage IOPS pressure, and benefit from clear billing based on monthly consumption.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Primary Features

- Dedicated and on-demand computing resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Networking resources (Internet, private networks).
- Cross-region replication with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via [Shiva Console](../console/console.md) or Infrastructure as Code using APIs and Terraform provider.

## Benefits

| Advantage            | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Trust in the Digital | Data storage in France, GDPR compliance.                                                                                          |
| Security            | Highly secure platform, certified __SecNumCloud__, __HDS__ (Health Data Storage), __ISO 27001__ and __ISAE 3402 type II__. |  
| Uptime             | Platform uptime of 99.99%, measured monthly, including maintenance periods.                                                        |
| Resilience         | Implementation of business continuity/disaster recovery plans as needed.                                                               |
| Automation         | Fully automated platform designed for integration into a digital transformation program.                                        |
| On-demand           | Resources available on demand.                                                                                                          |

## Regions and Availability Zones

The VMware IaaS product is deployed within a availability zone.
A [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This type of deployment allows you to choose the location of the cluster and distribute it across different availability zones (AZs). This provides better load distribution, maximizes redundancy, and simplifies the implementation of a Disaster Recovery Plan (DRP) in case of an incident.

---

## Calcul

The compute nodes provided by Cloud Temple are of type __CISCO UCS B200__ or __CISCO UCS X210c__. They are fully managed by Cloud Temple (firmware, OS version, etc.) through the Cloud Temple console.

Various categories of compute nodes are available in our catalog to support your workloads (Virtualization, Containerization, etc.). These nodes feature different characteristics and performance levels tailored to meet your needs. Our compute node catalog is regularly updated.

In the context of virtualization usage, a VMware hypervisor cluster is exclusively composed of nodes of the same type; mixing nodes of different types within one cluster is not possible.

| Reference             | RAM (Go) | Frequency (GHz) | Cores/Threads | Connectivity | GPU | SKU for VMware Offer |
|-----------------------|-----------|---------------|--------------|-------------|-----|---------------------------------|
| ECO v3                | 384        | 2.20/3.0 GHz   | 20 / 40       | 2 x 10 Gbit/s |          | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD v3           | 384        | 2.40/3.4 GHz   | 32 / 64       | 2 x 25 Gbit/s |          | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE v3            | 768        | 2.80/3.5 GHz   | 48 / 96       | 2 x 25 Gbit/s |          | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 v3       | 384        | 3.20/3.6 GHz   | 16 / 32       | 2 x 25 Gbit/s |          | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 v3       | 768        | 3.00/3.6 GHz   | 36 / 72       | 2 x 25 Gbit/s |          | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 v3       | 1536       | 2.60/3.5 GHz   | 56 / 112      | 2 x 25 Gbit/s |          | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 v3       | 512        | 2.50/4.1 GHz   | 32 / 64       | 2 x 25 Gbit/s | 2 x NVIDIA L40S 48 Go | csp:fr1:iaas:vmware:perf4:v3    |

**Notes:**

- (1) The physically available memory delivered is that on the nodes themselves. It's not possible to change the physical memory quantity of a node.

- (2) Base frequency and turbo frequency, expressed in GHz. By default, processors are configured for maximum performance at BIOS level.

- (3) Physical connectivity is shared for network access and storage block access, as CISCO platform is converged.

- (4) The actual GPU offering continuously evolves. As of May 1, 2024, the offer is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 node comes with 2 NVIDIA L40S cards, 48 Go of RAM each. For more precision, please contact support.

Compute node availability is 99.99% (calculated monthly, including maintenance window), with a plage de maintenance incluse. Eligibility in case of SLA non-compliance requires the creation of an incident ticket. You must also have at least two hosts per cluster and enable the __High Availability__ (HA) feature. This feature allows your architecture to automatically restart virtual machines on the secondary hypervisor. In cases where a availability zone contains only one hypervisor, automatic restart is not possible.

## Network

The network service on Cloud Temple's IaaS platform leverages a VPLS-based infrastructure, providing flexible and high-performance segmentation to meet clients' connectivity and isolation needs.

### Level 2 VLANs

The Level 2 VLANs provided in our IaaS offering are of this type, providing complete network isolation and a highly configurable setup tailored to specific needs.

### Main Concepts

- **Shared Between Clusters and Availability Zones (AZ)**:
  - VLANs can be shared across different AZs and clusters belonging to the same tenant, enabling inter-cluster communication.
- **Inter-Tenant Propagation**:
  - VLANs can be propagated between multiple tenants within the same organization, facilitating internal communications.

### Network Performance

The network infrastructure ensures low latency for optimal performance:

- **Latency within AZ**: Below __3 ms__.
- **Latency between AZs**: Below __5 ms__.

---

### Key Points

1. **Flexibility**: VLANs can be configured to adapt to multi-cluster and multi-tenant environments.
2. **High Performance**: Minimal latency ensures rapid and efficient communication between availability zones.
3. **Isolation and Security**: Level 2 VLANs provide strict network segmentation, safeguarding data and traffic flow.

## Storage Block

Cloud Temple offers several storage tiers based on [IBM FlashSystem](https://www.ibm.com/flashsystem/) and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technology.

The __IBM SVC__ technology delivers the required performance for our clients' environments through the large amount of embedded cache in controllers and the ability to distribute a server's IOPS across multiple SANs. It is also utilized for block storage replication between availability zones or facilitating maintenance on storage enclosures.

Storage primarily consists of high-performance NVMe flash storage, dedicated to professional workloads. Disks are employed by storage enclosures using [Distributed RAID 6](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

The __'Mass Storage'__ tier provides mechanical disks for archival purposes, offering economic efficiency. Multiple performance levels are available:

| Reference                         | Unit   | SKU                                         |
|-----------------------------------|---------|-------------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio   | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio   | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio   | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio   | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio   | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivage          | 1 Tio   | csp:(region):iaas:storage:bloc:mass:v1       |

*__Note:__

- The actual performance of a storage tier is linked to the volume commanded, based on "IOPS/To", meaning "limit of IOPS per Terabyte allocated."*
> *For instance, a 0.5To volume in the 'Standard' tier will have an IOPS limit capped at 750 IOPS,*
> *Similarly, a 10To volume in the 'Ultra' tier will have an IOPS limit of up to 150,000 IOPS,*
- The IOPS limitation applies to the volume itself, i.e., Datastore for VMware environments,
- Storage availability is 99.99% monthly, including maintenance window,
- There are no restrictions or quotas on read/write operations,
- No billing based on IOPS,
- No performance guarantee on the __'Mass Storage'__ tier,
- The minimum size of a storage volume is 500Gio,
- When using storage replication mechanisms, performance must be identical across both availability zones,
- No intelligent optimization mechanisms such as compression or deduplication are implemented: when you reserve 10Tio of storage, you physically have 10Tio of usable storage deployed on IBM machines.
- Storage volumes are dedicated to the client's environment.*

### Utilization of Block Storage in VMware Cloud Temple Offering

When utilizing block storage as datastores within the VMware Cloud Temple offering, you must consider several critical factors:

1. **Swap File Space (.VSWP) During VM Startup**: When a virtual machine starts, it creates a .VSWP file on the disk equal to its memory size. Therefore, you need sufficient free space in your datastore equal to the sum of all VMs' memory sizes for their startup. For instance, if your datastore has 1 TiB of block storage and you aim to start 10 virtual machines each with 64 GiB of memory, you'll require 640 GiB of disk space. Insufficient free space can limit VM startup due to the inability to create swap files.

2. **Free Space for Snapshot Backups**: The backup service uses instantaneous snapshots (snapshots). You must ensure sufficient free space for creating these snapshots during VM backups. The snapshot size depends on the virtual machine's write activity and the time required for the backup. Generally, it’s advisable to maintain at least 10% free space for this operation.

3. **Management of Dynamic Disks**: Be cautious with dynamic disks. Without proper management, insufficient physical space can lead to VM freeze or even corruption in extreme cases. It's crucial to closely monitor available disk space on your datastores when using this type of disk.

Proactive disk space management is vital for ensuring smooth VM operation and reliable backups. Always ensure you have the necessary free space for swap files, snapshots, and dynamic disk growth.

## Backup Storage Allocation

Backup storage for your virtual machines is automatically provisioned by the platform, within the allocated quota.

| Reference                | Unit   | SKU                                      |
|--------------------------|--------|------------------------------------------|
| MASS STORAGE - BACKUP    | 1 TiB  | csp:(region):iaas:storage:block:backup:v1 |

### Block Storage Replication

#### Principles

To facilitate the implementation of your disaster recovery plans, when it's not feasible to maintain continuity of operations with application-level replication and virtual machine replication isn't suitable, Cloud Temple offers __storage block replication mechanisms between availability zones within a region__.

These replication mechanisms are applied to your storage LUNs (Logical Unit Numbers) in addition to backups. The decision to use replication on an environment depends on several factors including its criticality, the acceptable data loss tolerance, and the performance goals for the application.

Cloud Temple provides two types of deployed mechanisms in an active/passive configuration:

- **Asynchronous Replication** (or 'Global Mirror'): *The 'Global Mirror' function provides an asynchronous replication process. When a host writes to the primary volume, confirmation of the write completion is received before the write operation on the secondary volume completes. If a failover is initiated, the application must retrieve and apply all unconfirmed updates from the secondary volume. Even if primary volume I/O operations are paused briefly, the secondary volume can become an exact replica of the primary volume. This process is comparable to continuous backup where the latest updates are always missing.*

- **Synchronous Replication** (or 'Metro Mirror'): *The 'Metro Mirror' function creates a remote synchronous copy of data from one primary volume to another secondary volume. With synchronous replication, applications write to the primary volume but don't receive confirmation that the write operation is complete until the data is written to the secondary volume. This ensures both volumes contain identical data once the initial copy operation is finished. After the initial copy operation completes, 'Metro Mirror' maintains a continuous, fully synchronized copy of source data on the target site.*

A "primary" or "active" site and a "passive" or "standby" site are defined. The disaster recovery plan activates in case of an incident or during a PRA (Planned Response Activity) test. The passive site then takes over from the active site.

#### Asynchronous Replication

When your workloads require short downtime and using application-level or VM replication mechanisms is not feasible or suitable, you can replicate a SAN LUN (Logical Unit Number) between two availability zones within the same region.

This offering provides a __RPO (Recovery Point Objective) of 15 minutes__ and an __RTO (Recovery Time Objective) below 4 hours__. It allows for faster recovery compared to traditional backup restoration processes.

In a storage volume replication setup (__Global Mirror__), the SAN virtualization controllers in both availability zones collaborate to perform write operations on both sites simultaneously. The primary site does not wait for the remote site's write confirmation.

The steps of a write operation are as follows:

1. A hypervisor intends to perform a __write operation on a Global-Mirror volume__: It sends the request to the SAN controller in its local zone,
2. The local SAN controller requests the remote SAN controller to execute the write operation,
3. The local SAN controller does not wait for the remote site's confirmation and performs the write locally,
4. It issues __write acknowledgment__ to the hypervisor that initiated the request,
5. __Hypervisors on the distant site do not directly access the Global Mirror LUN__: A service request is necessary.

| SLA       | Description                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In case of a disaster at the primary data center, the maximum amount of lost data corresponds to the maximum of 15 minutes of writing. |
| RTO < 4H  | In case of a disaster at the primary data center, recovery is guaranteed within 4 hours, considering the complexity of environments.          |

Upon activation of the PRA (Planned Recovery Action), Cloud Temple's team replicates the 'Global Mirror' LUN to the distant hypervisors for them to access the data. This setup requires reserving compute and RAM resources on the standby site for recovery in case of a disaster.

Using this technology also necessitates doubling the storage space: it is essential to have exactly the same amount of space on the distant site as on the local site.

This method can impact application performance by 10%. Compatible storage classes are 500 IOPS/TB, 1500 IOPS/TB, and 3000 IOPS/TB.

| Reference                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN    | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Note__:

- Since the offering is asynchronous, there's a possibility during a disaster that some disk operations are not written to the distant site. This could lead to data inconsistency, mitigated through risk assessment in the disaster recovery plan.
- Block storage replication is performed transparently for virtual machines and applications,
- Consequently, it's advisable to favor application-level or VM replication scenarios,
- Compute and memory resources on the recovery site can be reduced to optimize costs if a degraded state is acceptable during the disaster recovery process.*

## Virtualization with VMware Cloud Temple by SecNumCloud

The qualified VMware virtualization offering from Cloud Temple, known as VMware Cloud Temple SecNumCloud, is built upon the technology __VMware vSphere__.

The platform is managed automatically by Cloud Temple for security maintenance and operational readiness. It can be controlled via Shiva's graphical console interface or through associated APIs.

***Note**: Due to security requirements stemming from SecNumCloud qualification, the sponsor cannot directly access the VMware virtualization platform (neither vCenter, in particular). This is because SecNumCloud mandates a complete segregation between technical asset management interfaces and the commander's interface (Shiva console).*

- The implemented products include VMware ESXi, VMware vCenter, and VMware Site Recovery Manager.
- *The virtualization offering's network does not utilize VMware NSX technology but is physically managed by Juniper hardware and VPLS protocol.*
- *Storage does not employ VMware vSAN but exclusively uses IBM Fiber Channel 32G SANs.*
- *No hidden optimizations (compression, deduplication, etc.) are implemented.*

### Definition of a Compute Pool ('Cpool')

The `__Cpool__` is a grouping of VMware ESXi hypervisors, also known as a *cluster ESX*.

All hosts within an `__Cpool__` belong to the same tenant and availability zone (AZ). They must inherently share the same hardware class:
__it's not possible to mix different types of compute nodes within the same cluster__.

Since all compute nodes come with the maximum physical memory, a software RAM usage limit is applied at the cluster level to ensure it matches the physically purchased RAM.

By default, each node in an `__Cpool__` has 128 GB of activated memory.

A `__Cpool__` can contain up to 32 hypervisors by default. Beyond this limit, a second cluster would need to be created.

Storage can be shared between the `__Cpool__`.

### Memory Allocation for a 'Cpool'

Memory reservation per cluster is configurable. You can adjust the amount of RAM to match your needs at the cluster level, either reducing or increasing it accordingly.

**Important: Do not exceed an average memory usage of 85% per compute node.**

The VMware technology employs a compression optimization method that significantly impacts workload performance and complicates diagnostics. Similarly, excessive memory pressure on compute nodes will force the hypervisor to offload some memory onto disk to accommodate virtual machine needs.

This scenario, known as __'Ballooning'__, severely affects the overall performance of all virtual machines (VMs) on the affected datastore. Diagnosis becomes complex in this context because monitoring tools will show CPU impacts rather than memory or storage issues.

Remember that upon VM startup, the hypervisor automatically creates a __swap memory file__ (.vswap) on the disk, equal to the size of the compute node's memory. This should be considered when determining your storage capacity.

Each compute node comes with 128GB of software-activated memory in the __'Cpool'__, but physically has access to the full allocated memory.

For instance, for a VMware cluster of three hosts (`vmware:standard:v2`), memory reservation for _*'Cpool'* activation would be 3 x 128GB = 384GB. You can extend this up to 3 x 384GB = 1152GB.

    Minimum memory for a 'Cpool' = number of hosts x 128GB
    Maximum memory for a 'Cpool' = number of hosts x the physical memory capacity of the compute node

---

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a regularly updated and enriched catalog of `Templates`. This catalog currently includes several dozens of `Templates` and images to deploy on your virtual machines.

### Hypervisor Updates

Cloud Temple regularly provides updates for hypervisors to ensure the application of security patches. However, the responsibility for updating your hypervisors lies with you, as we do not have visibility into your business constraints.

The update process is fully automated. To maintain service continuity, a minimum of two hypervisors per cluster must be available during the update. Ensure that you have the necessary permissions to carry out these actions.

### Management of Virtual Machine Affinity

__Affinity and anti-affinity rules__ enable control over the placement of virtual machines on your hypervisors. They can be used to manage utilization of your __'Cpool'__. For instance, they help balance workload distribution across servers or isolate resource-intensive workloads. In a VMware __'Cpool',__ these rules are frequently employed for managing vMotion behavior.

vMotion allows moving virtual machines between hosts without service interruption.

You can configure using affinity/anti-affinity rule management:

- **Affinity Rules**: These ensure certain virtual machines run on the same physical host. They enhance performance by keeping communication-heavy VMs on the same server, reducing network latency. Affinity rules are beneficial in high-performance scenarios, such as databases or applications requiring rapid server-to-server communication.

- **Anti-affinity Rules**: Conversely, these ensure certain virtual machines aren't placed on the same physical host. They're crucial for availability and resilience, preventing all critical VMs from being affected by a single server failure. Anti-affinity rules are vital for applications demanding high uptime, like production environments prioritizing fault tolerance. For example, you wouldn’t want both your Active Directory instances on the same hypervisor.

When creating a rule, you specify the rule type (affinity/anti-affinity), its name, activation status (__'Status'__), and the VMs involved in your cluster of hypervisors.

*Note: The affinity/anti-affinity rules provided in the console pertain to VM-to-VM interactions; no rules exist between hypervisors and virtual machines.*

### Asynchronous Replication of Virtual Machines in VMware Environment

Asynchronous replication of your virtual machines involves pushing write operations from the source hypervisor to the standby site at regular intervals.

Following an initial hot copy of all active storage on the standby site, only writes are pushed to the standby machine (in sleep mode) at regular intervals. The interval varies depending on the volume of writes (from hourly to every 24 hours).

Virtual machine replication leverages the instant cloning mechanism provided by the hypervisor. This solution shares similar drawbacks, particularly sensitivity to the virtual machine's write volume, as the instant clone process is a recursive closure mechanism for the instant clone.

An example of a machine that typically does not support virtual machine replication is an FTP server receiving real-time video feeds from surveillance cameras. Such a machine spends most of its time writing and would be unable to complete an instant clone without pausing the operating system for a significant period (several tens of minutes). If the hypervisor cannot close the instant clone, it will do so automatically, potentially corrupting the virtual machine with no intervention possible.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 1H to 24H    | In case of a disaster at the primary data center, the maximum amount of lost data is that of the last pushed write on the standby site. |
| RTO < 15mn      | Operation to stop the mirrored virtual machine on the distant site                                                                                |

In case of need or in case of failure on a machine at the primary site, the mirror machine on the standby site is activated. Recovery requires reserving compute and memory resources on the standby site as well as having identical storage capacity on the passive site as on the active site.

| Reference                         | Unité | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Note__: The minimum RPO must be defined based on the virtual machine's write rate.*

## Virtual Machine Backups

Cloud Temple offers an **native, non-disruptive cross-architecture backup** (it's mandatory for the secnumcloud French certification).

Backups are stored in a high availability zone and on a physically separate datacenter from where the virtual machine is hosted.

This setup safeguards against major failures at the production datacenter and allows restoration onto a secondary datacenter (e.g., due to fire) by leveraging another infrastructure.

This solution encompasses:

- **Hot, on-site backup of the entire disk array**,
- **Instantaneous presentation and startup of a virtual machine from mass storage infrastructure and hot reload onto production SANs**,
- **Partial file restoration from the backup**,
- **Limited retention based solely on mass storage allocation**.

This backup infrastructure is built upon IBM Spectrum Protect Plus, an agentless architecture solution known for its simplicity, ease of use, and capability to automate backup processes while optimizing mass storage usage.

Backup speeds and restoration times are contingent on the rate of data change within environments. The backup policy can be configured via [Cloud Temple Console](../console/console.md) for each virtual machine.

*Note:*

* Some virtual machines may not be compatible with this instantaneous snapshot technology, which relies on hypervisor-level snapshots. These are typically VMs with constant disk write operations. Since the hypervisor cannot immediately close a snapshot, it necessitates freezing the VM to complete the closure process, which can take several hours and is unstoppable.

In such cases, the solution involves excluding the target persistent disk and backing up data through an alternative method.

| Reference                                               | Unité | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service     | 1 VM   | csp:(region):iaas:backup:vm:v1 |

To create a new backup policy, you need to submit a service request to the support team. The support team can be reached via the anchor icon located at the top right corner of the window.

The process for creating a new backup policy involves submitting a service request that includes:

    Your Organization's name
    Contact information (name, email, phone) for finalizing configuration
    Tenant's name
    Backup policy's name
    Policy specifications (e.g., x days, y weeks, z months, etc.)

## Advanced Data Protection (HSM/KMS)

Cloud Temple offers an advanced virtual machine encryption solution based on hardware security modules (HSMs) and a key management service (KMS). This feature strengthens the protection of sensitive data through centralized and secure key management, directly integrated into the SecNumCloud environment.

### Technical Architecture

The solution leverages a robust security infrastructure composed of:

- **HSM (Hardware Security Module)**
  - Modules **Thales Luna S790** certified at **FIPS 140-3 level 3**
- **KMS (Key Management System)**
  - **Thales CipherTrust Manager** for centralized key management
- **VMware Integration**
  - Communication via the protocol **KMIP (Key Management Interoperability Protocol)**

#### High Availability Deployment

The HSM infrastructure is deployed across **three availability zones** in the FR1 region:

- PAR7S
- TH3S  
- AZ07

This distribution ensures maximum high availability and resilience for the encryption service.

### Functionality and Key Hierarchy

The system employs a **key hierarchy** for data security:

| Level | Type of Key | Description | Location |
|--------|-------------|-------------|--------------|
| 1 | Root of Trust (RoT) | Master key by KMS | HSM Luna |
| 2 | Domain Key (DK) | Client-defined domain key (multi-tenant isolation) | HSM Luna |
| 3 | Key Encryption Key (KEK) | VM encryption key | CipherTrust Manager |
| 4 | Data Encryption Key (DEK) | VM data encryption key | VMware ESXi |

#### Encryption Process

1. **Key Generation**: VMware ESXi generates a unique DEK (Data Encryption Key) for each virtual machine
2. **Protection**: The DEK is encrypted using the KEK (Key Encryption Key) stored in CipherTrust Manager
3. **Security**: The KEK is itself secured by the HSM (Hardware Security Module) hierarchy
4. **Storage**: The encrypted DEK is stored alongside the VM's configuration files

## Security and Compliance

This section covers security measures and compliance requirements relevant to our cloud infrastructure. It includes details on data protection, access controls, encryption methods, auditing, and adherence to industry standards such as GDPR, HIPAA, and ISO 27001.

#### Certifications

- **FIPS 140-3 Level 3**: Highest level certification for HSMs
- **Common Criteria EAL4+**: Advanced security evaluation
- **SecNumCloud**: Integrated ANSSI qualification within the Cloud Temple environment

### Multi-Tenant Isolation

- **Cryptographic Separation**: Each tenant has an isolated KMS domain
- **Dedicated Keys**: A unique Domain Key per tenant
- **Auditing and Traceability**: Comprehensive logging of actions by tenant

### Activation and Usage

Virtual machine encryption can be activated **with a single click** from the [Shiva Console](../console/console.md).

For a detailed procedure with screenshots, refer to the [VM Encryption Tutorial](tutorials/vm_encryption.md).

#### Prerequisites

- **Key Provider Configured**: An HSM/KMS provider must be enabled on the vStack.
- **VM Shut Down**: The VM should be powered off before encryption.
- **No Active Replication**: The VM should not be replicated (incompatible with Global Mirror).
- **No Snapshots**: No instantaneous snapshots should be present.
- **Subscription to Service**: Advanced protection service must be subscribed to.

*__Note__: For detailed prerequisites and the complete procedure, refer to the [VM Encryption Guide](tutorials/vm_encryption.md).*

## Limitations and Considerations

This section outlines the constraints and considerations relevant to our cloud computing, IT systems, and software engineering projects. These limitations are crucial for ensuring project success, maintaining security, and adhering to industry standards.

1. **Resource Constraints**:
   - **Compute Capacity**: Limited processing power or memory can restrict the scalability of applications.
   - **Network Bandwidth**: Insufficient bandwidth may hinder data transfer rates and application performance.
   - **Storage Limitations**: Storage capacity constraints might affect data retention and retrieval capabilities.

2. **Security Considerations**:
   - **Data Protection**: Ensuring compliance with regulations like GDPR, HIPAA, etc., for sensitive data handling.
   - **Access Control**: Implementing robust authentication mechanisms to prevent unauthorized access.
   - **Network Security**: Employing firewalls and intrusion detection systems to safeguard against cyber threats.

3. **Compliance Requirements**:
   - Adherence to industry-specific regulations (e.g., financial, healthcare) is essential for legal operations.
   - Compliance with data privacy laws impacts how we handle user information.

4. **Performance and Reliability**:
   - Ensuring high availability through redundancy and failover mechanisms.
   - Optimizing application performance to meet service level agreements (SLAs).

5. **Cost Management**:
   - Balancing resource utilization with cost efficiency, avoiding over-provisioning or under-utilization of resources.
   - Monitoring and optimizing cloud spending through tools like AWS Cost Explorer or Azure Cost Management.

6. **Scalability and Elasticity**:
   - Designing systems that can scale dynamically based on demand without compromising performance.
   - Leveraging auto-scaling features provided by cloud platforms (e.g., AWS Auto Scaling, Azure Autoscale).

7. **Integration Challenges**:
   - Ensuring seamless integration with existing legacy systems or third-party applications.
   - Managing interoperability issues across different technologies and platforms.

8. **Maintenance and Updates**:
   - Planning for regular system updates, patches, and maintenance to mitigate security vulnerabilities.
   - Establishing robust monitoring and alerting systems for proactive issue resolution.

9. **Vendor Lock-in Mitigation**:
   - Avoiding dependency on a single cloud provider by adopting multi-cloud or hybrid strategies where feasible.
   - Ensuring portability of applications across different cloud environments.

10. **Talent and Skills Gap**:
    - Addressing the shortage of skilled professionals in emerging technologies like AI, machine learning, and DevOps practices.
    - Investing in continuous training and development to keep up with evolving IT landscapes.

These considerations are critical for navigating the complexities of cloud computing projects while ensuring efficiency, security, compliance, and scalability. Each limitation requires a tailored approach that balances technical requirements with business objectives.

#### Compatibility

- **Global Mirror**: Encrypted virtual machines are NOT compatible with Global Mirror replication.
- **Restore**: Encrypted VM backups maintain their cryptographic protection.
- **Export**: Exporting encrypted VMs requires specific procedures.

### Performance

- **Minimal Impact**: Hardware encryption ensures optimal performance
- **Transparency**: No effect on application functionality

### Recommended Use Cases

This advanced protection solution is particularly well-suited for:

- **Sensitive Data**: Personal information, financial data, industrial secrets
- **Regulatory Compliance**: RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS requirements
- **Critical Sectors**: Banking, insurance, healthcare, defense
- **Digital Sovereignty**: Protection against unauthorized access, even in case of compromise

| Reference | Unité | SKU |
|------------|-------|-----|
| PROTECTION AVANCÉE - Chiffrement VM via HSM/KMS | 1 VM | `csp:(region):iaas:vmware:encryption:hsm:v1`

*Note*:

- *This service requires a specific subscription and is not included in the standard IaaS offering*
- *Key management remains entirely under Cloud Temple's control within the SecNumCloud environment*
- *Encryption keys never leave the French, sovereign infrastructure*