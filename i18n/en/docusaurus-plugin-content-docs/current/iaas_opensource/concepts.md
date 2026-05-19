---
title: Concepts
---

Cloud Temple's __IaaS (Infrastructure As A Service)__ offering is designed to meet critical business continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Built on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technology platform

Cloud Temple's IaaS platform relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage, and __DELL ECS__ for object storage.
- Network: __JUNIPER__.
- Virtualization: __Stack Opensource__, providing a reliable and proven foundation for managing your cloud environments.

This architecture is based on the __VersaStack__ model, a partnership between Cisco and IBM, ensuring extensive compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated via APIs and a Terraform provider, Cloud Temple's IaaS product offers a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared among customers.
- __Maximum predictability__: You control virtualization ratios, IOPS load on storage, and benefit from clear, monthly consumption-based billing.

The platform is certified __SecNumCloud__ by [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Key features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Console](../console/console.md) or in Infrastructure as Code mode using APIs and the Terraform provider.

## Advantages

| Advantage            | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital Trust | Data hosting in France and GDPR compliance.                                                                                          |
| Security            | Highly secure platform, certified __SecNumCloud__, __HDS__ (Hébergement des Données de Santé), __ISO 27001__ and __ISAE 3402 type II__. |
| High Availability | Platform availability rate of 99.99%, measured monthly, maintenance windows included.                                        |
| Resilience          | Implementation of business continuity or disaster recovery plans as needed.                                                               |
| Automation      | Fully automated platform designed to integrate into a digital transformation program.                                        |
| On Demand           | Resources available on demand.                                                                                                          |

## Regions and Availability Zones

The OpenIaaS product is deployed in an availability zone.
An availability zone is part of a region.

This deployment type allows you to choose the location of the clusters and distribute them across different availability zones (AZ).
This provides better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in the event of an incident.

---

## Compute Blade Classes

The compute blades available for the Bare Metal offering provide a range of performance levels to meet various needs:

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48 GB |

### Notes

- __(1)__ The memory capacity is the physical amount available on the blades and cannot be modified.
- __(2)__ The indicated frequencies correspond to the minimum base frequency and the turbo frequency.
- __(3)__ Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- __(4)__ Available GPUs evolve based on the latest technologies. As of May 1, 2024, the product includes NVIDIA LOVELACE L40S GPUs.
- __(5)__ High availability on a cluster is available only with a minimum of 2 nodes.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any request related to the SLA must be submitted via an incident ticket.

---

## Block Storage Classes

Distributed block storage, based on __IBM Spectrum Virtualize__, offers a range of performance levels tailored to various use cases:

| Reference                         | IOPS/To        | Max IOPS Ceiling / Volume | Max Bandwidth / Volume      | Primary Use Case                       |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essential**             | 500            | 10 000 IOPS               | 512 MB/s                    | Light workloads                        |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 MB/s                   | Standard workloads                     |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                   | Intensive workloads                    |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                   | Critical workloads                     |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                   | Ultra-intensive workloads              |
| **MASS STORAGE - Archiving**      | Not applicable | Not guaranteed            | Not guaranteed              | Cost-effective storage for archiving   |

### Characteristics

- **Performance** : Effective performance scales linearly with allocated capacity (according to the IOPS/TB ratio), **up to the absolute hardware limit defined above**. (For example, a 10 TB Ultra class volume will be physically limited to 30,000 IOPS and 1024 MB/s).
- __Technology__ : NVMe Flash with __Distributed RAID 6__ for enhanced resilience.
- __Availability__ : 99.99%, measured monthly.
- __Restrictions__ : No limits on reads or writes. No automatic compression or deduplication, ensuring full utilization of reserved volumes.

### Block Storage Security and Encryption

To ensure the confidentiality of your data at rest, our entire block storage infrastructure incorporates robust hardware encryption.

- __Encryption Type__: Data is encrypted directly on the disks (`Data At Rest`) using the __XTS-AES 256__ algorithm.
- __Compliance__: This encryption method complies with the __FIPS 140-2__ standard, ensuring a validated high level of security.
- __Operation__: Encryption is applied at the time of writing data to the physical storage medium.

:::warning[Replication Considerations]
It is important to note that this encryption protects data stored on disks. It is not active "on-the-fly", which means that data is not encrypted during storage replication operations between availability zones. Transfer security is ensured by dedicated and secure communication channels.
:::

---

## Networks

The OpenIaaS product is compatible with [private networks](../network/private_network) and [internet access](../network/internet).

Two types of networks are available from the virtual machine configuration.

### VLAN Networks

VLAN networks should be configured with one VLAN per network interface. If you want to use multiple networks, simply create multiple network interfaces.

There is a limitation on the maximum number of network interfaces that can be created on a VM, which is 7.

### VLAN Trunk

In cases where you need to carry more than 7 VLANs, you must use a VLAN Trunk.
A VLAN Trunk allows all your VLANs to pass through a single card. The VLAN ID configuration must be done via VLAN-type virtual interfaces from the VM OS. The VLAN IDs are the same as those present and visible from the console.

## Virtual Machine Backup

The OpenIaaS offering integrates __a native distributed backup architecture that cannot be bypassed__, a mandatory requirement for the French SecNumCloud certification.

Backups are stored on the [SecNumCloud qualified Object Storage](../storage/oss), ensuring optimal protection in the event of a major production datacenter failure. This approach allows you to restore your data to a secondary datacenter, even in the event of a critical incident such as a fire.

### Available Data Protection Services

| Service | Description |
|---|---|
| **Incremental Backup (Agentless)** | Agentless backup via hypervisor native mechanisms, to a remote S3 repository. |
| **Metadata Backup** | Protection of virtualization pool and backup orchestrator configurations — essential for Disaster Recovery. |
| **Granular Restoration** | Restoration possible at the full VM, individual virtual disk, or single file level. |
| **S3 Multi-AZ Offloading** | Offloading to Cloud Temple S3 object storage replicated across availability zones. |

Backup and restoration speeds depend on the change rate across environments. The backup policy is fully configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

| Reference                                    | Unit | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Service Access                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

---

### Technical architecture of backup

#### Overview

The architecture relies on a strict separation between the **control plane** and the **data plane**: the backup orchestrator is hosted in the Cloud Temple management cluster (distinct and inaccessible to the client), while backup data is stored on a remote S3 repository, physically separated from the production infrastructure. Data is transmitted encrypted between the two components.

#### Backup Orchestrator

The orchestrator is deployed in the Cloud Temple management cluster, **directly inaccessible to the client**. It orchestrates all backup jobs and manages encryption.

- **Standard policies** : backup policies are applied by default to each tenant.
- **Custom policies** : the client can request specific frequencies or retention periods via a support ticket in the Cloud Temple console.

#### Remote S3 Storage

Backups are sent to Cloud Temple's [SecNumCloud Qualified Object Storage](../storage/oss), with Multi-AZ replication to ensure resilience against the loss of an entire physical site.

---

### Backup Mechanism: Incremental Backup

The service uses an **incremental** backup mode. This mode targets a **Backup Repository** (the remote S3 storage) and never exports a full backup after the first one: only the **modified data blocks** are transferred each cycle.

:::info[Incremental Backup vs Replication]
**Incremental backup** targets a remote S3 repository and is optimized for **long-term protection**. It should not be confused with **replication** (Hot Disaster Recovery) which targets a local Storage Repository — this mode is covered by the [virtual machine replication](#virtual-machine-replication) feature.
:::

#### Technical lifecycle of an incremental backup

The following are the successive steps triggered with each backup job execution:

**1. Local snapshot creation (Source)**

Upon job launch, the orchestrator requests the hypervisor to create a VM snapshot. This snapshot serves as a comparison point to calculate the delta relative to the previous reference snapshot.

**2. Differential export via Changed Block Tracking (CBT)**

The orchestrator compares the new snapshot with the previous reference snapshot using CBT metadata. Only data blocks that have changed since the last backup are extracted — not the entire disk.

**3. Encryption and transfer to S3**

The modified blocks are **encrypted on the fly by the orchestrator** and then sent via HTTPS/TLS 1.3 to the remote S3 bucket.

**4. Snapshot rotation (Coalesce)**

Once the transfer is validated, the old reference snapshot is deleted, and the new snapshot becomes the reference for the next cycle. The hypervisor then triggers a **coalesce** process to reintegrate the old delta's data into the virtual disk chain.

:::warning[Impact I/O du Coalesce]
The coalesce operation is **I/O intensive** on the production storage. It is triggered automatically after each successful backup. It is recommended to schedule backup windows during periods of low application load.
:::

**5. S3 retention management (Merge) and Key Backup Interval**

On S3 storage, the orchestrator manages backup rotation by **merging** (*merge*) old deltas into the oldest retained full backup according to the retention policy.

To ensure backup chain integrity, a full backup is **forced periodically** (typiquement tous les 20 incréments — *Key Backup Interval*). This creates a clean new starting point and limits the impact of potential corruption in any link of the chain.

---

### Impact on Production Storage Sizing

:::warning[Critical Consideration — Block Storage (Thick provisioning)]
The OpenIaaS offering relies on high-performance Block Storage (Fibre Channel / LVM). The snapshots used by incremental backup are provisioned in **Thick** mode: each snapshot consumes on the Storage Repository (SR) the **full nominal size of the VM disk**, and not just the actual delta.

**Consumption example for a VM with a 50 GB disk:**

| Item | SR Consumption |
|---|---|
| Active VM disk | 50 GB |
| Permanent reference snapshot (for delta calculation) | 50 GB |
| Temporary snapshot created during export | 50 GB |
| **Total required during the backup window** | **up to 150 GB** |

**Recommended sizing rule**: allocate **at least 50% free space** on production storage relative to the total volume of backed-up VMs, to accommodate this overhead inherent to high-performance block storage.
:::

---

### Security and Encryption of Backups

#### Encryption in transit

All communications between the backup orchestrator and S3 storage are encrypted via **HTTPS / TLS 1.3**.

#### Encryption at Rest and Key Management

Encryption is applied by the backup orchestrator, **before** data is sent to S3.

| Parameter | Value |
|---|---|
| **Algorithm** | AES-256 or ChaCha20-Poly1305 |
| **Key Generation** | Automatic upon deployment of the backup orchestrator |
| **Key Storage** | Centralized Cloud Temple Vault (never exposed in the client interface) |
| **Resilience** | In the event of orchestrator loss, the key is re-injected from the Vault to restore the service |

#### Network isolation (architecture SecNumCloud)

The backup infrastructure is designed to be **strictly isolated** from client environments:

- **Physical separation**: the *Client*, *Administration*, and *Backup* networks rely on distinct physical backbones and separate routing contexts (VRF).
- **No lateral infection risk**: a compromised VM cannot reach S3 storage or the backup orchestrator — no network path exists between them. S3 is never "mounted" in the VM.

#### Secure Administration

The administration of the backup platform is **reserved for the Cloud Temple Backup teams** and subject to SecNumCloud requirements:

| Control | Measure |
|---|---|
| **Access Bastion** | Mandatory access through a hardened internal administration bastion (Ubuntu Hardened) |
| **Workstation** | Access only from dedicated and secure administration laptops |
| **Authentication** | Mandatory MFA via a dedicated administration LDAP directory (distinct from the office LDAP) |

---

### Monitoring and Audit

- **Backup logs** : visible to the client directly in the Cloud Temple Console — status (success/failure), volume, timestamp.
- **Administrator access logs** : access to backup infrastructure (orchestrator, S3) is logged and **audited monthly** to detect any anomalies.
- **Penetration tests (PASSI Pentests)** : the infrastructure undergoes regular penetration tests by qualified PASSI providers as part of maintaining SecNumCloud certification.
- **Physical security** : all equipment is hosted in SecNumCloud zones (dedicated physical cages with biometric access control) within Cloud Temple data centers.

---

### Compatibility and Edge Cases

:::warning[VMs with Continuous Disk Writes]
Some virtual machines are not compatible with this backup technology when their **disk write loads are constant** (active databases, transaction logs, etc.). The hypervisor cannot then finalize the snapshot without freezing the VM, which can take several hours.

For these workloads, we recommend **complementing or replacing the hypervisor backup with an application-level backup**: database dump (pg_dump, mysqldump…), agent-based backup, or native application export.
:::

---

### Creating a backup policy

Creating a backup policy is an administrative operation performed **exclusively via a support request**, accessible via the lifebuoy icon in the top right corner of the interface.

The request must specify:

- Your Organization name
- Contact details (email and phone number) to finalize the configuration
- The tenant name
- The backup policy name
- Desired characteristics: frequency, retention (x days, y weeks, z months…)

#### Planning Constraints

| Constraint | Value |
|---|---|
| **Minimum interval between two executions** | 24 hours |
| **Maximum retention** | 24 months |
| **Concurrent executions per policy** | 1 at a time |

:::warning[A policy can only run once at a time]
Each backup policy is **single-instance** : only one execution can be active simultaneously.

**Practical consequence** : if you add many virtual machines to an existing policy and yesterday's backup is not yet completed at the scheduled trigger time, **the new cycle will not start** — it will be ignored until the next occurrence.

To avoid this scenario:
- check the **execution durations** of your jobs from the Cloud Temple Console logs,
- adjust the **frequency** or **policy size** if backups regularly overflow into the next window,
- consider **distributing VMs across multiple policies** with staggered schedules for large environments.
:::

:::info[Long-term retention — future availability]
**Maximum retention is currently 24 months.** Long-term retention (up to 10 years) will be integrated with the launch of our **Glacier** product, scheduled for the **first quarter of 2027**, as an add-on subscription.

For such long retention periods, we recommend backing up **flat files exclusively** (raw files, static documents) as well as **database dumps**. Restoring a complete server after 10 years indeed carries significant risks: many services or dependencies may have become obsolete or incompatible with the current environment.

**Alternative available now** : the **agent-based backup** service, available as an add-on subscription. Contact support for more information.
:::

## Virtual machines

### vCPU Resource Management

vCPU resource modifications are performed offline (with the machine powered off). The platform supports up to 254 vCPUs per virtual machine (theoretical limit), with successful tests conducted on Linux VMs equipped with 128 vCPUs.

It is important to note that guest operating system support is a critical factor during resource allocation. An allocation exceeding the limits supported by the operating system can lead to significant performance issues.

### Memory Resource Management

Memory modifications are also performed offline. The limits are as follows:

- 1.5 TiB with memory snapshot support
- 8 TiB without memory snapshot support
- 16 TiB (theoretical limit without security support, minus RAM allocated to Xen and the control domain)

The actually usable memory may be limited by the guest operating system. Exceeding the limits supported by the guest OS may result in performance degradation.

### Disk Management

- The maximum size of a disk is 2 TB
- Disks use the standard VHD format
- The maximum number of virtual disks per virtual machine, including CD-ROM drives, is 24

Disks cannot be resized once created. To expand storage capacity, it is necessary to create a new disk.

### Tools for Virtual Machines

These tools are used to ensure optimal operation of virtual machines. When you need to perform an action that requires one of these tools, a message will appear on the Cloud Temple console.
To install these tools, you can consult the official XenServer websites to obtain detailed instructions based on your OS.

#### Management Agent

The Management Agent is a component installed in each virtual machine. It enables the hypervisor to better manage the machine by providing access to additional information and allows certain operations to be executed more cleanly.

#### PV Drivers (Paravirtualization Drivers)

PV Drivers are drivers installed in the virtual machine to improve its performance.
Without these drivers, the machine runs, but more slowly. Additionally, they enable certain advanced operations.
PV Drivers are natively installed on the majority of current Linux kernels.

#### Tools

Tools are a set of software components that improve the integration of the virtual machine with the virtualization infrastructure.

## Catalogs

The catalog allows you to manage three essential types of elements:

- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can access crucial information such as the location, the number of disks, or the number of network adapters.

When the number of virtual disks is indicated as 0, it means that it is a configuration template without a pre-installed operating system, allowing you to deploy your own custom environment.

## Virtual Machine Replication

Cloud Temple's __virtual machine replication__ ensures the protection and continuity of your critical data through an automated copy of your environments to a distinct availability zone. This feature, natively integrated into the Open Source IaaS product, meets the strictest requirements for business continuity and disaster recovery.

### Automated and secure protection

Cloud Temple replication relies on a __SecNumCloud-certified infrastructure__, ensuring:

- __Asynchronous replication__ : Continuous copying of your virtual machines without impacting production performance
- __Geographical separation__ : Storage of replicas in a different availability zone from the source
- __Full automation__ : Fully automated process via the [Cloud Temple Console](../console/console.md)
- __Regulatory compliance__ : Compliance with backup and business continuity requirements

### Advantages of Replication

| Advantage               | Description                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Business Continuity     | Protection of your critical services in the event of a major incident at the primary site.                                                    |
| Geographic Protection   | Replication to a distinct availability zone, protecting against localized disasters.                                                           |
| Time Flexibility        | Choose the replication interval according to your needs: from 1 minute to 24 hours.                                                            |
| Ease of Management      | Configuration and monitoring fully integrated into the Temple Cloud Console.                                                                   |
| SecNumCloud Compliance  | Qualified infrastructure ensuring the highest level of security for your sensitive data.                                                       |

### Replication Configuration

#### Replication Policies

Creating a replication policy defines the protection settings for your virtual machines:

- __Destination__ : Select the target storage in the replication availability zone
- __Frequency__ : Replication interval tailored to your recovery requirements (RPO)
- __Retention__ : Number of recovery points retained

#### Available Intervals

| Interval              | Recommended Use                           | RPO (Maximum Data Loss) |
|-------------------------|--------------------------------------------|-----------------------------|
| __1 to 59 minutes__      | Real-time critical applications         | < 1 hour                   |
| __1 to 24 hours__       | Business applications and standard environments | < 24 hours               |

#### Virtual Machine Association

Once the policy is created, you can associate your virtual machines to protect:

- __Simple selection__: Select VMs from the Console interface
- __Automatic validation__: Compatibility and prerequisites verification
- __Immediate activation__: Automatic replication startup after configuration

### Replica Management

#### Policies View

The Cloud Temple Console provides a centralized view of your replication policies with:

- Name and frequency of each policy
- Destination availability zone
- Associated pool and storage
- Available management actions

#### Replicas View

The replicas table allows you to view:

- Name of replicated virtual machines
- Source and target location
- Associated replication policy
- Data export in CSV format

### Best practices

#### Recommendations by workload type

- __Critical applications__ : Replication every 1-30 minutes to minimize data loss
- __Business applications__ : Hourly or every two hours replication depending on requirements
- __Development environments__ : Daily replication is generally sufficient

#### Policy Planning

- Create separate policies based on the criticality of your applications
- Name your policies clearly to facilitate management
- Regularly check the status of your replicas from the console
- Document your replication strategy for your teams

__Important Note:__

*Replication does not replace a comprehensive backup strategy. It serves as an essential complement to ensure business continuity in the event of a major incident at your primary site.*

## High availability

High availability ensures service continuity for virtual machines (VMs) in the event of a physical host failure within an OpenIaaS pool.
With high availability (HA), each host in the pool regularly sends heartbeat signals to its peers via shared storage (Block Storage Heartbeat). In the event of a prolonged lack of response, the host is considered failed.

A Block Storage designated as a heartbeat means it will serve as the basis for verifying the status of hosts that no longer respond.

For high availability to be properly configured in an OpenIaaS pool, it is essential to have __at least two hosts__ connected.

Each VM must be configured with a high availability restart priority level:

#### Disabled

  High availability is not configured. In the event of a host failure, the virtual machine will not be restarted.

#### Restart

  In the event of a host failure, the virtual machine will be automatically restarted as soon as resources are available in the pool. Virtual machines configured in "restart" mode take priority over those configured in "best-effort" mode.

#### Best-Effort  

  In the event of a host failure, the virtual machine will only be automatically restarted if resources remain available after processing all virtual machines configured in "restart" mode. The "Best-effort" mode makes only one attempt, so if resources are insufficient, the virtual machine will not be restarted.