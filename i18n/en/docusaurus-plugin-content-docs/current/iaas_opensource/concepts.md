---
title: Concepts
---

Cloud Temple's __IaaS (Infrastructure As A Service)__ offering is designed to meet critical business continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Built on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A Trusted Technology Platform

Cloud Temple's IaaS platform relies on internationally renowned technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage, and __DELL ECS__ for object storage.
- Networking: __JUNIPER__.
- Virtualization: __Open Source Stack__, providing a reliable and proven foundation for managing your cloud environments.

This architecture is based on the __VersaStack__ model, a partnership between Cisco and IBM, ensuring broad compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated via APIs and a Terraform provider, Cloud Temple's IaaS product offers a unique infrastructure:

- __Dedicated resources__ : Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- __Maximum predictability__ : You control virtualization ratios, IOPS load on storage, and benefit from clear, monthly consumption-based billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Key Features

- Dedicated and on-demand compute resources (CPU, RAM).
- On-demand storage (multiple classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Console](../console/console.md) or in Infrastructure as Code mode using APIs and the Terraform provider.

## Advantages

| Advantage            | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital trust        | Data hosting in France and GDPR compliance.                                                                                                    |
| Security             | Highly secure platform, certified __SecNumCloud__, __HDS__ (Health Data Hosting), __ISO 27001__ and __ISAE 3402 type II__.                     |
| High availability    | Platform availability rate of 99.99%, measured monthly, including maintenance windows.                                                         |
| Resilience           | Implementation of business continuity or disaster recovery plans as needed.                                                                    |
| Automation           | Fully automated platform designed to integrate into a digital transformation program.                                                          |
| On demand            | Resources available on demand.                                                                                                                 |

## Regions and Availability Zones

The OpenIaaS product is deployed in an availability zone.
An availability zone is part of a region.

This type of deployment allows you to choose the location of the clusters and distribute them across different availability zones (AZ).
This provides better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in the event of an incident.

---

## Compute Blade Classes

The compute blades available for the Bare Metal offering provide a range of performance levels to meet various needs:

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Notes

- __(1)__ The amount of memory is the physical capacity available on the blades and cannot be modified.
- __(2)__ The indicated frequencies correspond to the minimum base frequency and the turbo frequency.
- __(3)__ Physical connectivity is shared for network access and block storage access, thanks to a Cisco UCS converged architecture.
- __(4)__ Available GPUs evolve according to the latest technologies. As of May 1, 2024, the product includes NVIDIA LOVELACE L40S GPUs.
- __(5)__ High availability on a cluster is available only with a minimum of 2 nodes.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be reported via an incident ticket.

---

## Block Storage Classes

Distributed block storage, based on __IBM Spectrum Virtualize__, offers a range of performance levels tailored to various use cases:

| Reference                         | IOPS/TB        | Max IOPS Cap / Volume | Max Bandwidth / Volume | Primary Use                        |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essential**             | 500            | 10 000 IOPS               | 512 MB/s                    | Light workloads             |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 MB/s                   | Standard workloads            |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                   | Heavy workloads                     |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                   | Critical workloads                      |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                   | Ultra-intensive workloads               |
| **MASS STORAGE - Archive**      | Not applicable | Not guaranteed               | Not guaranteed                 | Cost-effective storage for archiving   |

### Features

- **Performance** : Effective performance scales linearly with allocated capacity (based on the IOPS/TB ratio), **up to the absolute hardware limit defined above**. (For example, a 10 TB volume in the Ultra tier will be physically capped at 30,000 IOPS and 1024 MB/s).
- __Technology__ : NVMe Flash with __Distributed RAID 6__ for enhanced resilience.
- __Availability__ : 99.99%, measured monthly.
- __Restrictions__ : No limits on read or write operations. No automatic compression or deduplication, ensuring full utilization of reserved volumes.

### Block Storage Security and Encryption

To ensure the confidentiality of your data at rest, our entire block storage infrastructure integrates robust hardware encryption.

- __Encryption Type__ : Data is encrypted directly on the disks (`Data At Rest`) using the __XTS-AES 256__ algorithm.
- __Compliance__ : This encryption method complies with the __FIPS 1-40-2__ standard, ensuring a validated high level of security.
- __Operation__ : Encryption is applied at the time data is written to the physical storage medium.

:::warning[Note on Replication]
It is important to note that this encryption protects data stored on the disks. It is not active "on-the-fly", meaning that data is not encrypted during storage replication operations between availability zones. Transfer security is ensured through dedicated and secure communication channels.
:::

---

## Networks

The OpenIaaS product is compatible with [private networks](../network/private_network) and [internet access](../network/internet).

Two types of networks are available from a virtual machine configuration.

### VLAN-type networks

VLAN-type networks should be configured with one VLAN per network interface. If you wish to use multiple networks, simply create multiple network interfaces.

There is a limitation on the maximum number of network interfaces that can be created on a VM, which is 7.

### VLAN TRUNK

If you need to carry more than 7 VLANs, you must use a VLAN Trunk.
The VLAN Trunk allows all your VLANs to pass through a single network adapter. VLAN ID configuration must be performed via VLAN virtual interfaces from the VM's OS. The VLAN IDs are the same as those present and visible from the console.

## Virtual Machine Backup

The OpenIaaS offering integrates __a native, non-removable distributed backup architecture__, a mandatory requirement for the French SecNumCloud certification.

Backups are stored on the [SecNumCloud-certified Object Storage](../storage/oss), ensuring optimal protection in the event of a major production datacenter failure. This approach enables data restoration to a secondary datacenter, even in the event of a critical incident such as a fire.

### Available Data Protection Services

| Service | Description |
|---|---|
| **Incremental Backup (Agentless)** | Agentless backup via the hypervisor's native mechanisms, to a remote S3 repository. |
| **Metadata Backup** | Protection of virtualization pool and backup orchestrator configurations — essential for Disaster Recovery. |
| **Granular Restore** | Restoration possible at the full VM level, individual virtual disk, or single file. |
| **S3 Multi-AZ Offloading** | Offloading to Cloud Temple S3 object storage replicated across availability zones. |

Backup and restore speeds depend on the change rate in the environments. The backup policy is fully configurable from [la Console Cloud Temple](../console/console.md) for each virtual machine.

| Reference                                    | Unit | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Service Access                      | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

---

### Backup Technical Architecture

#### High-Level View

The architecture relies on a strict separation between the **control plane** and the **data plane**: the backup orchestrator is hosted in the Cloud Temple management cluster (distinct and inaccessible to the client), while backup data is stored in a remote S3 bucket, physically separated from the production infrastructure. Data transits encrypted between the two components.

#### Backup Orchestrator

The orchestrator is deployed in the Cloud Temple management cluster, **directly inaccessible to the client**. It orchestrates all backup jobs and manages encryption.

- **Standard policies**: backup policies are applied by default to each tenant.
- **Custom policies**: the client can request specific frequencies or retention periods via a support ticket in the Cloud Temple console.

#### Remote S3 Storage

Backups are sent to the [Stockage Objet qualifié SecNumCloud](../storage/oss) of Cloud Temple, with Multi-AZ replication to ensure resilience against the loss of an entire physical site.

---

### Backup Mechanism: Incremental Backup

The service uses an **incremental** backup mode. This mode targets a **Backup Repository** (remote S3 storage) and never exports a full backup after the first one: only the **modified data blocks** are transferred in each cycle.

:::info[Incremental Backup vs Replication]
**Incremental backup** targets a remote S3 repository and is optimized for **long-term protection**. It should not be confused with **replication** (hot Disaster Recovery) which targets a local Storage Repository — this mode is covered by the [réplication de machines virtuelles](#réplication-de-machines-virtuelles) feature.
:::

#### Technical Lifecycle of an Incremental Backup

Here are the successive steps triggered at each execution of a backup job :

**1. Local Snapshot Creation (Source)**

Upon job launch, the orchestrator requests the hypervisor to create a snapshot of the VM. This snapshot serves as a comparison point to calculate the delta relative to the previous reference snapshot.

**2. Differential Export via Changed Block Tracking (CBT)**

The orchestrator compares the new snapshot with the previous reference snapshot via CBT metadata. Only the data blocks that have changed since the last backup are extracted — not the entire disk.

**3. Encryption and Transfer to S3**

The modified blocks are **encrypted on the fly by the orchestrator** and then sent via HTTPS/TLS 1.3 to the remote S3 bucket.

**4. Snapshot Rotation (Coalesce)**

Once the transfer is validated, the old reference snapshot is deleted, and the new snapshot becomes the reference for the next cycle. The hypervisor then triggers a **coalesce** (fusion) process to reintegrate the old delta's data into the virtual disk chain.

:::warning[Impact I/O du Coalesce]
The coalesce operation is **I/O intensive** on production storage. It is triggered automatically after each successful backup. It is recommended to schedule backup windows during periods of low application load.
:::

**5. Retention Management on S3 (Merge) and Key Backup Interval**

On S3 storage, the orchestrator manages backup rotation by **merging** (*merge*) old deltas into the oldest full backup retained according to the retention policy.

To ensure the integrity of the backup chain, a full backup is **forced periodically** (typiquement tous les 20 incréments — *Key Backup Interval*). This creates a clean new starting point and limits the impact of potential corruption in any link of the chain.

---

### Impact on Production Storage Sizing

:::warning[Critical Consideration — Block Storage (Thick provisioning)]
The OpenIaaS offering relies on high-performance Block Storage (Fibre Channel / LVM). Snapshots used by incremental backups are provisioned in **Thick** mode: each snapshot consumes on the Storage Repository (SR) the **full nominal size of the VM disk**, and not just the actual delta.

**Consumption example for a VM with a 50 GB disk:**

| Element | Consumption on the SR |
|---|---|
| Active VM disk | 50 GB |
| Permanent reference snapshot (for delta calculation) | 50 GB |
| Temporary snapshot created during export | 50 GB |
| **Total required during the backup window** | **up to 150 GB** |

**Recommended sizing rule**: plan for **at least 50% free space** on production storage relative to the total volume of backed-up VMs, to support this overhead inherent to high-performance block storage.
:::

---

### Backup Security and Encryption

#### Encryption in Transit

All communications between the backup orchestrator and S3 storage are encrypted via **HTTPS / TLS 1.3**.

#### Encryption at Rest and Key Management

Encryption is applied by the backup orchestrator, **before** sending data to S3.

| Parameter | Value |
|---|---|
| **Algorithm** | AES-256 or ChaCha20-Poly1305 |
| **Key Generation** | Automatic upon deployment of the backup orchestrator |
| **Key Storage** | Centralized Cloud Temple Vault (never exposed in the client interface) |
| **Resilience** | In the event of orchestrator loss, the key is re-injected from the Vault to restore the service |

#### Network isolation (SecNumCloud architecture)

The backup infrastructure is designed to be **strictly isolated** from client environments:

- **Physical separation**: the *Client*, *Administration*, and *Backup* networks rely on distinct physical backbones and separate routing contexts (VRFs).
- **Prevention of lateral infection**: a compromised VM cannot reach the S3 storage or the backup orchestrator — no network path exists between them. S3 is never "mounted" in the VM.

#### Secure Administration

Administration of the backup platform is **restricted to Cloud Temple's Backup teams** and subject to SecNumCloud requirements:

| Control | Measure |
|---|---|
| **Access Bastion** | Mandatory routing through a hardened internal administration bastion (Ubuntu Hardened) |
| **Workstation** | Access only from dedicated and secured administration laptops |
| **Authentication** | Mandatory MFA via a dedicated administration LDAP directory (separate from the office LDAP) |

---

### Monitoring and auditing

- **Backup logs**: visible to the client directly in the Cloud Temple Console — status (success/failure), data volume, timestamp.
- **Administrator access logs**: access to backup infrastructure (orchestrator, S3) is logged and **audited monthly** to detect any anomalies.
- **Penetration tests (PASSI Pentests)**: the infrastructure undergoes regular pentests by qualified PASSI providers as part of maintaining the SecNumCloud qualification.
- **Physical security**: all equipment is hosted in SecNumCloud zones (dedicated physical cages with biometric access control) within Cloud Temple data centers.

---

### Compatibility and Special Cases

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

#### Scheduling Constraints

| Constraint | Value |
|---|---|
| **Minimum interval between two executions** | 24 hours |
| **Maximum retention** | 24 months |
| **Simultaneous executions per policy** | 1 at a time |

:::warning[A policy can only run once at a time]
Each backup policy is **single-instance**: only one execution can be active simultaneously.

**Practical consequence**: if you add many virtual machines to an existing policy and yesterday's backup is not yet complete at the scheduled trigger time, **the new cycle will not start** — it will be skipped until the next occurrence.

To avoid this scenario:
- check the **execution durations** of your jobs from the Cloud Temple Console logs,
- adjust the **frequency** or **policy size** if backups regularly overflow into the next window,
- consider **distributing VMs across multiple policies** with staggered schedules for large scopes.
:::

:::info[Long-term retention — future availability]
**The maximum retention is currently 24 months.** Long-term retention (up to 10 years) will be integrated with the launch of our **Glacier** product, scheduled for **Q1 2027**, as an add-on subscription.

For retention periods this long, we recommend backing up **flat files only** (raw files, static documents) as well as **database dumps**. Restoring a full server after 10 years carries significant risks: many services or dependencies may have become obsolete or incompatible with the current environment.

**Alternative available now**: the **agent-based backup** service, available as an add-on subscription. Contact support for more information.
:::

## Virtual machines

### vCPU Resource Management

vCPU resource modifications are performed cold (machine powered off). The platform supports up to 254 vCPUs per virtual machine (theoretical limit), with successful tests conducted on Linux VMs equipped with 128 vCPUs.

It is important to note that guest operating system support is a critical factor during resource allocation. An allocation exceeding the limits supported by the operating system can lead to significant performance issues.

### Memory Resource Management

Memory modifications are also performed cold. The limits are as follows:

- 1.5 TiB with memory snapshot support
- 8 TiB without memory snapshot support
- 16 TiB (theoretical limit without security support, minus RAM allocated to Xen and the control domain)

The actually usable memory may be limited by the guest operating system. Exceeding the limits supported by the guest OS may result in performance degradation.

### Disk Management

- The maximum disk size is 2 TB
- Disks use the standard VHD format
- The maximum number of virtual disks per virtual machine, including CD-ROM drives, is 24

Disks cannot be resized once created. To expand storage capacity, a new disk must be created.

### Tools for Virtual Machines

These tools are used to ensure optimal performance of virtual machines. When you wish to perform an action and one of these tools is required, a message will appear on the Cloud Temple console.
To install these tools, you can consult the official Xen Server websites to obtain specific instructions for your OS.

#### Management Agent

The Management Agent is a component installed in each virtual machine. It enables the hypervisor to better manage the machine by having access to more information and allows certain actions to be performed more cleanly.

#### PV Drivers (Paravirtualization Drivers)

PV Drivers are drivers installed within the virtual machine to enhance its performance.
Without these drivers, the machine operates, but at a slower pace. Additionally, they enable certain advanced operations.
PV Drivers are natively installed on the majority of current Linux kernels.

#### Tools

Tools are a set of software components that enhance the integration of the virtual machine with the virtualization infrastructure.

## Catalogs

The catalog allows you to manage three types of essential elements:

- Disk images (ISO)
- Configuration templates
- Preinstalled virtual machine templates

In the detailed view of a virtual machine template, you can view crucial information such as the location, the number of disks, or the number of network adapters.

When the number of virtual disks is indicated as 0, this means it is a configuration template without a preinstalled operating system, allowing you to deploy your own custom environment.

## Virtual Machine Replication

The __virtual machine replication__ of Cloud Temple ensures the protection and continuity of your critical data through automated copying of your environments to a separate availability zone. This feature, natively integrated into the Open Source IaaS product, meets the strictest requirements for business continuity and disaster recovery.

### Automated and Secure Protection

Cloud Temple replication relies on a __SecNumCloud-certified__ infrastructure, ensuring:

- __Asynchronous replication__ : Continuous copying of your virtual machines without impacting production performance
- __Geographic separation__ : Storage of replicas in an availability zone different from the source
- __Full automation__ : Fully automated process via the [Console Cloud Temple](../console/console.md)
- __Regulatory compliance__ : Adherence to backup and business continuity requirements

### Advantages of Replication

| Advantage                | Description                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Business Continuity   | Protection of your critical services in the event of a major incident at the primary site.                                                          |
| Geographic Protection | Replication to a distinct availability zone, protecting against localized disasters.                                             |
| Temporal Flexibility  | Choice of replication interval according to your needs: from 15 minutes to 24 hours.                                                          |
| Ease of Management   | Configuration and monitoring fully integrated into the Cloud Temple Console.                                                                |
| SecNumCloud Compliance  | Qualified infrastructure guaranteeing the highest level of security for your sensitive data.                                             |

### Replication Configuration

#### Replication Policies

Creating a replication policy defines the protection settings for your virtual machines:

- __Destination__ : Selection of the target storage in the replication availability zone
- __Frequency__ : Replication interval tailored to your recovery needs (RPO)
- __Retention__ : Number of recovery points retained

#### Available Intervals

| Interval              | Recommended Usage                           | RPO (Max Data Loss) |
|-------------------------|--------------------------------------------|-----------------------------|
| __15 to 59 minutes__     | Real-time critical applications         | < 1 hour                   |
| __1 to 24 hours__       | Business applications and standard environments | < 24 hours               |

:::warning[RPO: Objective Not Contractually Guaranteed]
The configured replication interval (e.g., 15 minutes) constitutes a **RPO (Recovery Point Objective) target**, and not a contractual commitment.

The actual RPO achieved depends directly on the **change rate** of the data on the replicated virtual machines. If the volume of modified data between two replication cycles is too large, the transfer may not complete within the configured interval. In this case, the next cycle will not start until the previous one is completed, which de facto extends the actual RPO.

**In summary:**
- The minimum configurable RPO is **15 minutes**.
- This RPO is achievable only if the data change rate remains compatible with the available replication bandwidth.
- **No SLA is associated with the RPO**: it is a "best effort" objective whose compliance depends on the workload characteristics.
- For workloads with high write rates (databases, transaction logs, etc.), it is recommended to configure a wider replication interval and supplement it with an application-level backup strategy.
:::

#### Associating Virtual Machines

Once the policy is created, you can associate the virtual machines to protect:

- __Simple selection__ : Select VMs from the Console interface
- __Automatic validation__ : Verification of compatibility and prerequisites
- __Immediate activation__ : Automatic start of replication after configuration

### Replica Management

#### Policy View

The Cloud Temple Console provides a centralized view of your replication policies with:

- Name and frequency of each policy
- Destination availability zone
- Associated pool and storage
- Available management actions

#### Replicas View

The replicas table allows you to view:

- Names of replicated virtual machines
- Source and target locations
- Associated replication policy
- Data export in CSV format

### Best practices

#### Recommendations by workload type

- __Critical applications__ : Replication every 15-30 minutes to minimize data loss
- __Business applications__ : Hourly or bi-hourly replication as needed
- __Development environments__ : Daily replication is generally sufficient

#### Policy Planning

- Create distinct policies based on the criticality of your applications
- Clearly name your policies to facilitate management
- Regularly check the status of your replicas from the console
- Document your replication strategy for your teams

__Important Note :__

*Replication does not replace a comprehensive backup strategy. It serves as an essential complement to ensure business continuity in the event of a major incident at your primary site.*

## High Availability

High availability ensures service continuity for virtual machines (VMs) in the event of a physical host failure within an OpenIaaS pool.
With high availability (HA), each host in the pool regularly sends heartbeat signals to its peers via shared storage (Block Storage Heartbeat). If a response is absent for an extended period, the host is considered failed.

A Block Storage designated as a heartbeat means it will serve as the basis for verifying hosts that stop responding.

For high availability to be properly configured in an OpenIaaS pool, it is essential to have __at least two hosts__ connected.

Each VM must be configured with a high availability restart priority level:

#### Disabled

  High availability is not configured. In the event of a host failure, the virtual machine will not be restarted.

#### Restart

  In the event of a host failure, the virtual machine will be automatically restarted as soon as resources become available in the pool. Virtual machines configured in "restart" mode are prioritized over those configured in "best-effort" mode.

#### Best-Effort  

  In the event of a host failure, the virtual machine will only be automatically restarted if resources remain available after processing all virtual machines configured in "restart" mode. The "Best-effort" mode makes only one attempt, so if resources are insufficient, the virtual machine will not be restarted.