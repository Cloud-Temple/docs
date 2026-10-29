---
title: Concepts
---

<a id="une-infrastructure-dédiée-et-automatisée"></a>

## Introduction

The __IaaS OpenSource__ offering is a dedicated virtualization infrastructure, designed to meet critical business continuity and disaster recovery needs, particularly in demanding sectors such as industry, banking, and insurance. It is built on an open source virtualization stack and guarantees high availability and predictable performance for your critical workloads.

Although fully automated through APIs and a Terraform provider, the offering provides a dedicated infrastructure:

- __Dedicated resources__ : Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- __Maximum predictability__ : You control virtualization ratios, IOPS pressure on storage, and benefit from clear, monthly consumption-based billing.

## Benefits

| Benefit             | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital trust       | Data hosting in France and GDPR compliance.                                                                                                    |
| Security            | Highly secure platform, __SecNumCloud__-qualified, certified __HDS__ (Health Data Hosting), __ISO 27001__ and __ISAE 3402 type II__. |
| High availability   | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                                         |
| Resilience          | Implementation of business continuity or disaster recovery plans as needed.                                                                     |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                           |
| On demand           | Resources available on demand.                                                                                                                 |

<a id="principales-fonctionnalités"></a>

## Features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Metrology: Prometheus APIs to view all product metrics.
- Management via the [Console](../console/console.md) or in Infrastructure as Code mode through APIs and the Terraform provider.

### Catalogs

The catalog allows you to manage three types of essential elements:

- Disk images (ISO)
- Configuration templates
- Preinstalled virtual machine templates

In the detailed view of a virtual machine template, you can consult crucial information such as the location, the number of disks, or the number of network adapters.

When the number of virtual disks is indicated as 0, this means that it is a configuration template without a preinstalled operating system, allowing you to deploy your own custom environment.

## Architecture

### A trusted technology platform

The Cloud Temple IaaS platform relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage, and __DELL ECS__ for object storage.
- Network: __JUNIPER__.
- Virtualization: __Stack Opensource__, providing a reliable and proven foundation for managing your cloud environments.

This architecture is based on the __VersaStack__ model, an alliance between Cisco and IBM, ensuring extensive compatibility with major software vendors.

The architecture separates compute (dedicated blades) from storage (distributed block). Networks, backup, and replication rely on separate infrastructures, described in the sections below.

## Regions and availability zones

The OpenIaaS product is deployed in an availability zone.
An availability zone is part of a region.

This type of deployment allows choosing the location of clusters and distributing them across different availability zones (AZ).
This provides better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in case of an incident.

## Technical specifications

### Compute blade classes

The compute blades available for the IaaS OpenSource offering provide a range of performance levels to meet various needs:

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Gold 5315Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

#### Notes

- __(1)__ The amount of memory is the one physically available on the blades and cannot be modified.
- __(2)__ The indicated frequencies correspond to the minimum base frequency and the turbo frequency.
- __(3)__ Physical connectivity is shared for network access and block storage access, thanks to a Cisco UCS converged architecture.
- __(4)__ The available GPUs evolve based on the latest technologies. The product offers NVIDIA L40S GPUs.
- __(5)__ High availability on a cluster is available only from 2 nodes.


### Block storage classes

Distributed block storage, based on __IBM Spectrum Virtualize__, offers a range of performance tiers suited to various use cases:

| Reference                         | IOPS/TB        | Max IOPS cap / Volume     | Max throughput / Volume     | Primary use case                       |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essential**             | 500            | 10 000 IOPS               | 512 MB/s                    | Light workloads                        |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 MB/s                   | Standard workloads                     |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                   | Intensive workloads                    |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                   | Critical workloads                     |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                   | Ultra-intensive workloads              |
| **MASS STORAGE - Archiving**      | Not applicable | Not guaranteed            | Not guaranteed              | Cost-effective storage for archiving   |

#### Characteristics

- **Performance** : Effective performance grows linearly based on the allocated volume (according to the IOPS/TB ratio), **within the absolute hardware ceiling defined above**. (For example, a 10 TB volume in the Ultra class will be physically limited to 30,000 IOPS and 1024 MB/s).
- __Technology__ : NVMe Flash with __Distributed RAID 6__ for enhanced resilience.
- __Restrictions__ : No limitation on reads or writes. No automatic compression or deduplication, ensuring full utilization of reserved volumes.

### Networks

The OpenIaaS product is compatible with [private networks](../network/private_network) and [internet access](../network/internet).

Two types of networks are available from the virtual machine configuration.

#### VLAN-type networks

VLAN-type networks should be propagated at a rate of one VLAN per network card. If you wish to use multiple networks, simply create multiple network cards.

There is a limitation on the maximum number of cards that can be created on a VM, which is 7.

#### The VLAN TRUNK

In the case where you need to propagate more than 7 VLANs, you must use the VLAN Trunk.
The VLAN Trunk allows all your VLANs to pass through a single card. The configuration of VLAN IDs is to be done via VLAN-type virtual interfaces from the VM's OS. The VLAN IDs are the same as those present and visible from the console.

### Virtual machines

#### vCPU resource management

vCPU resource modifications are performed cold (machine powered off). The platform supports up to 254 vCPUs per virtual machine (theoretical limit), with successful tests conducted on Linux VMs equipped with 128 vCPUs.

It is important to note that guest operating system support is a determining factor when allocating resources. An allocation exceeding the limits supported by the operating system can lead to significant performance issues.

#### Memory resource management

Memory changes are also performed cold. The limits are as follows:

- 1.5 TiB with memory snapshot support
- 8 TiB without memory snapshot support
- 16 TiB (theoretical limit without security support, minus the RAM allocated to Xen and the control domain)

The actually usable memory may be limited by the guest operating system. Exceeding the limits supported by the guest OS may result in performance degradation.

#### Disk management

- The maximum disk size is 2 TB
- Disks use the standard VHD format
- The maximum number of virtual disks per virtual machine, including CD-ROM drives, is 24

It is not possible to resize disks once they have been created. To extend storage capacity, it is necessary to create a new disk.

#### Tools for virtual machines

These tools are used to ensure optimal performance of virtual machines. When you wish to perform an action and one of these tools is required, a message will be displayed on the Cloud Temple Console.
To install these tools, you can refer to the official Xen Server websites to obtain a precise procedure according to your OS.

##### Management Agent

The Management Agent is a component installed in each virtual machine. It allows the hypervisor to better manage the machine by having access to more information and enables certain actions to be performed more cleanly.

##### PV Drivers (Paravirtualization Drivers)

PV Drivers are drivers installed in the virtual machine to improve its performance.
Without these drivers, the machine works, but more slowly. In addition, they enable certain advanced actions.
PV Drivers are natively installed on the majority of current Linux kernels.

##### Tools

Tools are a set of software components that improve the integration of the virtual machine with the virtualization infrastructure.

### Limits

- A virtual machine has a maximum of 7 network cards; beyond 7 VLANs, use the VLAN Trunk.
- A virtual disk is limited to 2 TB and cannot be resized; a maximum of 24 virtual disks per virtual machine.
- vCPU and memory changes are performed cold.
- Cluster high availability requires at least two nodes.
- A storage volume is capped at 30,000 IOPS and 1024 MB/s (10,000 IOPS and 512 MB/s in the Essential class).

## Security and compliance

IaaS OpenSource is certified HDS, ISO 27001 and ISAE 3402 type II, Gaia-X Label Level 3, CISPE-compliant and C5-compliant, and SecNumCloud-qualified by [ANSSI](https://www.ssi.gouv.fr/).

### Block storage security and encryption

To ensure the confidentiality of your data at rest, our entire block storage infrastructure integrates robust hardware encryption.

- __Encryption type__ : Data is encrypted directly on the disks (`Data At Rest`) using the __XTS-AES 256__ algorithm.
- __Compliance__ : This encryption method is compliant with the __FIPS 140-2__ standard, ensuring a validated high level of security.
- __How it works__ : Encryption is applied at the time data is written to the physical storage medium.

:::warning[Note on replication]
It is important to note that this encryption protects data stored on the disks. It is not active "on-the-fly", which means that data is not encrypted during storage replication operations between availability zones. The security of transfers is ensured by dedicated and secure communication channels.
:::

## Backup and continuity

### Virtual machine backup

The OpenIaaS offering integrates __a native and non-disableable distributed backup architecture__, a mandatory requirement for the French SecNumCloud qualification.

Backups are stored on the [SecNumCloud-qualified Object Storage](../storage/oss), ensuring optimal protection in the event of a major failure of the production datacenter. This approach allows you to restore your data on a secondary datacenter, even in the event of a critical incident such as a fire.

#### Available data protection services

| Service | Description |
|---|---|
| **Incremental backup (Agentless)** | Agentless backup via the hypervisor's native mechanisms, to a remote S3 repository. |
| **Metadata backup** | Protection of the virtualization pool and backup orchestrator configurations — essential for Disaster Recovery. |
| **Granular restore** | Restore possible at the full VM level, individual virtual disk, or single file. |
| **S3 Multi-AZ offloading** | Offloading to Cloud Temple S3 object storage replicated across availability zones. |

Backup and restore speeds depend on the change rate across environments. The backup policy is fully configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.


---

#### Technical backup architecture

##### Global overview

The architecture relies on a strict separation between the **control plane** and the **data plane**: the backup orchestrator is hosted in the Cloud Temple management cluster (separate and inaccessible to the client), while backup data is stored on a remote S3 repository, physically separated from the production infrastructure. Data is encrypted in transit between the two components.

##### Backup orchestrator

The orchestrator is deployed in the Cloud Temple management cluster, **inaccessible directly to the client**. It orchestrates all backup jobs and manages encryption.

- **Standard policies**: backup policies are applied by default to each tenant.
- **Custom policies**: the client can request specific frequencies or retentions via a support ticket in the Cloud Temple Console.

##### Remote S3 storage

Backups are sent to Cloud Temple's [SecNumCloud-qualified Object Storage](../storage/oss), with Multi-AZ replication to ensure resilience against the loss of an entire physical site.

---

#### Backup mechanism: Incremental Backup

The service uses an **incremental** backup mode. This mode targets a **Backup Repository** (remote S3 storage) and never exports a full backup after the first one: only **modified data blocks** are transferred at each cycle.

:::info[Incremental backup vs replication]
The **incremental backup** targets a remote S3 repository and is optimized for **long-term protection**. It should not be confused with **replication** (hot Disaster Recovery) which targets a local Storage Repository — this mode is covered by the [virtual machine replication](#virtual-machine-replication) feature.
:::

##### Technical lifecycle of an incremental backup

Here are the successive steps triggered at each execution of a backup job:

**1. Local snapshot creation (Source)**

At job launch, the orchestrator requests the hypervisor to create a snapshot of the VM. This snapshot serves as a comparison point to calculate the delta relative to the previous reference snapshot.

**2. Differential export via Changed Block Tracking (CBT)**

The orchestrator compares the new snapshot with the previous reference snapshot via CBT metadata. Only the data blocks that have changed since the last backup are extracted — not the entire disk.

**3. Encryption and transfer to S3**

The modified blocks are **encrypted on the fly by the orchestrator** then sent via HTTPS/TLS 1.3 to the remote S3 bucket.

**4. Snapshot rotation (Coalesce)**

Once the transfer is validated, the old reference snapshot is deleted, and the new snapshot becomes the reference for the next cycle. The hypervisor then triggers a **coalesce** (merge) process to reintegrate the old delta data into the virtual disk chain.

:::warning[Coalesce I/O impact]
The coalesce operation is **I/O intensive** on production storage. It is automatically triggered after each successful backup. It is recommended to schedule backup windows during periods of low application load.
:::

**5. Retention management on S3 (Merge) and Key Backup Interval**

On S3 storage, the orchestrator manages backup rotation by **merging** (*merge*) old deltas into the oldest full backup retained according to the retention policy.

To guarantee the integrity of the backup chain, a full backup is **periodically forced** (typically every 20 increments — *Key Backup Interval*). This creates a new clean starting point and limits the impact of a potential corruption of a link in the chain.

---

#### Impact on production storage sizing

:::warning[Critical attention point — Block storage (Thick provisioning)]
The OpenIaaS offering is based on high-performance Block storage (Fibre Channel / LVM). The snapshots used by incremental backup are provisioned in **Thick** mode: each snapshot consumes on the Storage Repository (SR) the **full nominal size of the VM disk**, and not only the actual delta.

**Consumption example for a VM with a 50 GB disk:**

| Element | Consumption on the SR |
|---|---|
| Active VM disk | 50 GB |
| Permanent reference snapshot (for delta calculation) | 50 GB |
| Temporary snapshot created during export | 50 GB |
| **Total required during the backup window** | **up to 150 GB** |

**Recommended sizing rule**: to prudently size production storage during backups or manual snapshots, plan for **2.5 times the VM size**. This margin accounts for the nominal consumption of snapshots; it does not constitute a general billing or capacity coefficient. The peak of the backup window described in the example above can reach **3 times the disk size**: it must be covered by the available capacity, even when the nominal sizing chosen is 2.5 times.
:::

---

#### Security and encryption of backups

##### Encryption in transit

All communications between the backup orchestrator and S3 storage are encrypted via **HTTPS / TLS 1.3**.

##### Encryption at rest and key management

Encryption is applied by the backup orchestrator, **before** sending data to S3.

| Parameter | Value |
|---|---|
| **Algorithm** | AES-256 or ChaCha20-Poly1305 |
| **Key generation** | Automatic upon deployment of the backup orchestrator |
| **Key storage** | Centralized secrets vault (never exposed in the client interface) |
| **Resilience** | In case of orchestrator loss, the key is re-injected from the secrets vault to restore the service |

##### Network isolation (SecNumCloud architecture)

The backup infrastructure is designed to be **strictly isolated** from client environments:

- **Physical separation**: the *Client*, *Administration*, and *Backup* networks rely on distinct physical backbones and separate routing contexts (VRF).
- **No lateral infection possible**: a compromised VM cannot reach the S3 storage or the backup orchestrator — no network path exists between them. S3 is never "mounted" in the VM.

##### Secure administration

Administration of the backup platform is **reserved for Cloud Temple Backup teams** and subject to SecNumCloud requirements:

| Control | Measure |
|---|---|
| **Access bastion** | Mandatory routing through a hardened internal administration bastion |
| **Workstation** | Access only from dedicated and secured administration laptops |
| **Authentication** | Mandatory MFA via a dedicated administration directory, separate from the office directory |

---

#### Monitoring and auditing

- **Backup logs**: visible to the client directly in the Cloud Temple Console — status (success/failure), volume, timestamp.
- **Administrator access logs**: access to backup infrastructures (orchestrator, S3) is logged and **audited monthly** to detect any anomaly.
- **Penetration tests (PASSI pentests)**: the infrastructure is subject to regular pentests by PASSI-qualified providers as part of maintaining the SecNumCloud qualification.
- **Physical security**: all equipment is hosted in the SecNumCloud zones (dedicated physical cages with biometric access control) of Cloud Temple datacenters.

---

#### Compatibility and special cases

:::warning[VMs with continuous disk writes]
Some virtual machines are not compatible with this backup technology when their **disk write loads are constant** (active databases, transaction logs, etc.). The hypervisor cannot then finalize the snapshot without freezing the VM, which can last several hours.

For these workloads, we recommend **complementing or replacing the hypervisor backup with an application-level backup**: database dump (pg_dump, mysqldump…), agent-based backup, or native application export.
:::

---

#### Creating a backup policy

Creating a backup policy is an administrative operation performed **exclusively via a support request**, accessible through the lifebuoy icon in the top right corner of the interface.

The request must specify:

- The name of your Organization
- The contact details (email and phone number) of a contact person to finalize the configuration
- The name of the tenant
- The name of the backup policy
- The desired characteristics: frequency, retention (x days, y weeks, z months…)

##### Scheduling constraints

| Constraint | Value |
|---|---|
| **Minimum interval between two runs** | 24 hours |
| **Maximum retention** | 24 months |
| **Concurrent runs per policy** | Only 1 at a time |

:::warning[A policy can only run once at a time]
Each backup policy is **single-instance**: only one run can be active at a time.

**Practical consequence**: if you add many virtual machines to an existing policy and the previous day's backup is not yet finished at the scheduled trigger time, **the new cycle will not start** — it will be skipped until the next occurrence.

To avoid this situation:
- check the **run durations** of your jobs from the Cloud Temple Console logs,
- adjust the **frequency** or the **policy size** if backups regularly overflow into the next window,
- consider **spreading VMs across multiple policies** with staggered schedules for large scopes.
:::

:::info[Long-term retention]
**The maximum retention is 24 months.** For longer retention needs, the **agent-based backup** service is available as a complementary subscription. Contact support for more information.
:::

<a id="réplication-de-machines-virtuelles"></a>
<a id="virtual-machine-replication"></a>
<a id="replikation-virtueller-maschinen"></a>
<a id="réplication-de-máquinas-virtuales"></a>
<a id="replicazione-di-macchine-virtuali"></a>

<a id="vm-replication"></a>

### Virtual machine replication

Cloud Temple's __virtual machine replication__ guarantees the protection and continuity of your critical data through an automated copy of your environments to a distinct availability zone. This feature, natively integrated into the IaaS Open Source product, meets the strictest business continuity and disaster recovery requirements.

#### Automated and secure protection

Cloud Temple replication relies on a __SecNumCloud-qualified__ infrastructure, ensuring:

- __Asynchronous replication__: Continuous copy of your virtual machines without impact on production performance
- __Geographic separation__: Storage of replicas in an availability zone different from the source
- __Full automation__: Fully automated process via the [Cloud Temple Console](../console/console.md)
- __Regulatory compliance__: Compliance with backup and business continuity requirements

#### Benefits of replication

| Benefit                 | Description                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Business continuity     | Protection of your critical services in the event of a major incident on the primary site.                                                    |
| Geographic protection   | Replication to a distinct availability zone, protecting against localized disasters.                                                          |
| Time flexibility        | Choice of replication interval according to your needs: from 15 minutes to 24 hours.                                                          |
| Management simplicity   | Configuration and monitoring fully integrated into the Cloud Temple Console.                                                                  |
| SecNumCloud compliance  | Qualified infrastructure guaranteeing the highest level of security for your sensitive data.                                                  |

#### Replication configuration

##### Replication policies

Creating a replication policy defines the protection parameters for your virtual machines:

- __Destination__: Selection of the target storage in the replication availability zone
- __Frequency__: Replication interval tailored to your recovery needs (RPO)
- __Retention__: Number of recovery points retained

##### Available intervals

| Interval                | Recommended usage                          | RPO (Max data loss)         |
|-------------------------|--------------------------------------------|-----------------------------|
| __15 to 59 minutes__    | Critical real-time applications            | < 1 hour                    |
| __1 to 24 hours__       | Business applications and standard environments | < 24 hours             |

:::warning[RPO: not a contractually guaranteed objective]
The configured replication interval (for example, 15 minutes) constitutes an **RPO (Recovery Point Objective) target**, and not a contractual commitment.

The RPO actually achieved depends directly on the **change rate** of the data on the replicated virtual machines. If the volume of modified data between two replication cycles is too large, the transfer may not complete within the configured interval. In this case, the next cycle will not start until the previous one is finished, which de facto extends the actual RPO.

**In summary:**
- The minimum configurable RPO is **15 minutes**.
- This RPO is achievable only if the data change rate remains compatible with the available replication bandwidth.
- **No SLA is associated with the RPO**: it is a "best effort" target whose compliance depends on the workload characteristics.
- For high write-rate workloads (databases, transaction logs, etc.), it is recommended to plan a wider replication interval and complement it with an application-level backup strategy.
:::

##### Association of virtual machines

Once the policy is created, you can associate your virtual machines to protect:

- __Simple selection__: Selection of VMs from the Console interface
- __Automatic validation__: Verification of compatibility and prerequisites
- __Immediate activation__: Automatic start of replication after configuration

#### Replica management

##### Policies view

The Cloud Temple Console provides a centralized view of your replication policies with:

- Name and frequency of each policy
- Destination availability zone
- Associated pool and storage
- Available management actions

##### Replicas view

The replicas table allows you to view:

- Names of replicated virtual machines
- Source and target location
- Associated replication policy
- Data export in CSV format

#### Best practices

##### Recommendations by workload type

- __Critical applications__: Replication every 15-30 minutes to minimize data loss
- __Business applications__: Hourly or bi-hourly replication depending on requirements
- __Development environments__: Daily replication generally sufficient

##### Policy planning

- Create distinct policies based on the criticality of your applications
- Clearly name your policies to facilitate management
- Regularly check the status of your replicas from the console
- Document your replication strategy for your teams

__Important note:__

*Replication does not replace a complete backup strategy. It is an essential complement to ensure business continuity in the event of a major incident on your primary site.*

<a id="hochverfügbarkeit"></a>

### High availability

High availability ensures the continuity of service for virtual machines (VM) in the event of a physical host failure within an OpenIaaS pool.
With high availability (HA), each host in the pool regularly sends heartbeat signals to its peers via shared storage (Block Storage Heartbeat). In the event of a prolonged lack of response, the host is considered failed.

A Block Storage designated as heartbeat means it will serve as the basis for authenticating hosts that are no longer responding.

For high availability to be properly configured in an OpenIaaS pool, it is essential to have __at least two hosts__ connected.

Each VM must be configured with a high availability restart priority level:

##### Disabled

  High availability is not configured. In the event of a host failure, the virtual machine will not be restarted.

##### Restart

  In the event of a host failure, the virtual machine will be automatically restarted as soon as resources become available in the pool. Virtual machines configured in "restart" mode are processed first, before those configured in "best-effort" mode.

##### Best-Effort

  In the event of a host failure, the virtual machine will only be automatically restarted if resources remain available after processing all virtual machines configured in "restart" mode. The "Best-effort" mode makes only a single attempt, so if resources are insufficient, the virtual machine will not be restarted.

## Service availability

| Component       | Availability target, measured over one month  |
|-----------------|-----------------------------------------------|
| Platform        | 99.99%, including maintenance windows         |
| Block storage   | 99.99%                                        |

Any availability-related request must be filed via an incident ticket.

## Reversibility

| Operation                 | Deliverable                                                      | Timeframe   | Cost            |
|---------------------------|------------------------------------------------------------------|-------------|-----------------|
| VM export                 | Disks in standard VHD format, export/import in native XVA format | 30 days     | Free of charge  |
| Configuration export      | Terraform templates                                              | 15 days     | Free of charge  |
| Backup export             | Retrieval of backups from S3 storage                             | 30 days     | Free of charge  |
| Migration assistance      | Technical support                                                | On request  | On quotation    |

## Pricing

The service is billed based on monthly consumption. Prices are published on the product page on the Cloud Temple website:
[IaaS OpenSource — pricing](https://www.cloud-temple.com/produits/iaas-opensource/).
