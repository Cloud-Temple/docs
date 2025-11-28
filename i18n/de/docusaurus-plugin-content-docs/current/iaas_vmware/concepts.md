---
title: Concepts
---

The __IaaS (Infrastructure as a Service)__ offering from Cloud Temple is designed to meet the critical requirements for business continuity and disaster recovery, with a particular focus on demanding sectors such as industry, banking, and insurance. Built on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technology platform

The Cloud Temple IaaS platform is built on internationally recognized technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage.
- Networking: __JUNIPER__.
- Virtualization: __VMware__, providing a reliable and proven foundation for managing your cloud environments.
- Backup: __IBM Spectrum Protect Plus__, for orchestration and storage of backups.

This architecture is based on the __VersaStack__ model, a collaboration between Cisco and IBM, ensuring broad compatibility with leading software vendors.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- __Maximum predictability__: You control virtualization rates, IOPS pressure on storage, and benefit from clear, consumption-based monthly billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Hauptfunktionen

- Dedicated und on-demand Rechenressourcen (CPU, RAM).
- On-demand Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Kreuzsicherungen mit konfigurierbarer Aufbewahrungsfrist.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Konsole](../console/console.md) oder im Infrastructure-as-Code-Modus über APIs und den Terraform-Provider.

## Vorteile

| Vorteil              | Beschreibung                                                                                                                                    |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauenswürdigkeit | Speicherung von Daten in Frankreich und Einhaltung der DSGVO.                                                                                          |
| Sicherheit           | Hochsichere Plattform, zertifiziert __SecNumCloud__, __HDS__ (Gesundheitsdaten-Hosting), __ISO 27001__ und __ISAE 3402 Typ II__. |  
| Hohe Verfügbarkeit   | Plattformverfügbarkeit von 99,99 %, monatlich gemessen, inklusive Wartungszeiträume.                                                             |
| Resilienz            | Implementierung von Kontinuitäts- oder Wiederherstellungsplänen je nach Bedarf.                                                                  |
| Automatisierung      | Vollständig automatisierte Plattform, entwickelt zur Integration in ein digitales Transformationsprogramm.                                       |
| On-Demand            | Ressourcen sind nach Bedarf verfügbar.                                                                                                          |

## Regions and Availability Zones

The VMware IaaS product is deployed within an availability zone.  
An [availability zone](../additional_content/concepts_az.md) is part of a [region](../additional_content/concepts_regional.md).

This deployment model allows you to select the location of clusters and distribute them across different availability zones (AZs).  
It enables better load distribution, maximizes redundancy, and simplifies the implementation of a disaster recovery plan (DRP) in the event of an incident.

## Computing

The blades provided by Cloud Temple are of type __CISCO UCS B200__ or __CISCO UCS X210c__. They are fully managed by Cloud Temple (firmware, OS version, etc.) via the Cloud Temple console.

Several categories of computing blades are available in the catalog to support your workloads (virtualization, containerization, ...). These blades feature different characteristics and performance levels to best meet your needs. The computing blade catalog is regularly updated.

When using the virtualization offering, a hypervisor cluster must consist exclusively of blades of the same type (mixing different blade types within a single cluster is not permitted).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of Cores / Threads | Connectivity __(3)__ | GPU __(4)__          | SKU for VMware Offering         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| ECO v3 Blade          | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 × 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD v3 Blade     | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 × 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE v3 Blade      | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 × 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 v3 Blade| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads            | 2 × 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 v3 Blade| 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 × 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 v3 Blade| 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 × 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 v3 Blade| 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 × 25 Gbit/s        | 2 × NVIDIA L40S 48 GB | csp:fr1:iaas:vmware:perf4:v3    |

__Notes__:

- __(1)__ The memory amount delivered corresponds to the physical memory available on the blades. It is not possible to change the physical memory capacity of a blade.

- __(2)__ Minimum base frequency / turbo frequency, expressed in GHz. By default, processors are configured in the BIOS for maximum performance.

- __(3)__ Physical connectivity is shared between network and block storage access, as the underlying CISCO platform is converged.

- __(4)__ The available GPU offering is continuously evolving. As of May 1, 2024, the offering is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade is delivered with two 48 GB L40S cards. Contact support for further details if needed.

The computing offering availability is 99.99%, calculated monthly, including maintenance windows. Eligibility for SLA non-compliance claims requires the creation of an incident ticket. You must also have at least two hosts per cluster and enable the __High Availability__ (HA) feature.  
This feature allows your architecture to automatically restart your virtual machines on the second hypervisor in case of failure. If a zone of availability contains only a single hypervisor, automatic restart is not possible.

## Network

The networking service on Cloud Temple's IaaS platform is based on a VPLS technology infrastructure, providing flexible and high-performance segmentation to meet client requirements for connectivity and network isolation.

### Layer-2 VLANs

The VLANs provided in the IaaS offering are of __layer 2__ type, delivering complete network isolation and adaptable configuration according to your requirements.

#### Hauptkonzepte

- __VLAN-Teilung zwischen Clustern und Verfügbarkeitszonen (AZ)__:
  - VLANs können zwischen verschiedenen AZs und verschiedenen Clustern desselben Tenants geteilt werden.
- __Inter-Tenant-Propagation__:
  - VLANs können zwischen mehreren Containern innerhalb derselben Organisation propagiert werden, was interne Kommunikation vereinfacht.

### Network performance

The network infrastructure ensures low latency for optimal performance:

- __Intra-AZ latency__: Less than __3 ms__.
- __Inter-AZ latency__: Less than __5 ms__.

### Schlüsselpunkte

1. __Flexibilität__: VLANs können so konfiguriert werden, dass sie sich an Umgebungen mit mehreren Clustern und mehreren Mandanten anpassen lassen.  
2. __Hohe Leistung__: Eine minimale Latenz gewährleistet eine schnelle und effiziente Kommunikation zwischen Verfügbarkeitszonen.  
3. __Isolation und Sicherheit__: Layer-2-VLANs bieten eine strenge Netzwerksegmentierung zur Sicherung von Daten und Datenströmen.

## Block Storage

Cloud Temple offers several classes of storage based on [IBM FlashSystem](https://www.ibm.com/flashsystem/) and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technology.

The __IBM SVC__ technology enables delivering the required performance levels for our customers' environments through the large amount of embedded memory cache in the controllers and the ability to distribute a server's total IOPS across multiple SANs.

It is also used to enable replication of your block storage LUNs across availability zones or to facilitate maintenance operations on storage arrays.

The storage is primarily NVMe flash storage dedicated to professional workloads. The drives are used by the storage arrays in [__'Distributed RAID 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

### Storage Block Security and Encryption

To ensure the confidentiality of your data at rest, our entire block storage infrastructure integrates a robust hardware-based encryption solution.

-   **Encryption Type**: Data is encrypted directly on the disks (`Data At Rest`) using the **XTS-AES 256** algorithm.
-   **Compliance**: This encryption method complies with the **FIPS 140-2** standard, ensuring a high level of validated security.
-   **Operation**: Encryption is applied at the time data is written to the physical storage medium.

:::warning Attention point regarding replication
It is important to note that this encryption protects data stored on disks. It is not active "on-the-fly", meaning data is not encrypted during storage replication operations between availability zones. Security of transfers is ensured through dedicated, secure communication channels.
:::

The __'Mass Storage'__ storage class offers mechanical disks for archival needs in an economically efficient context. Several performance tiers are available:

| Reference                         | Unit  | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/To   | 1 GiB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 GiB | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 GiB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 GiB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 GiB | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archival           | 1 TiB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Note__ :*

- *Actual performance for a storage class is linked to the volume actually ordered, based on the "IOPS/To" metric, meaning "maximum IOPS per allocated terabyte",*

> *Thus, a 0.5 To volume in the 'Standard' performance class will have an IOPS limit capped at 750 IOPS,*
> *Similarly, a 10 To volume in the 'Ultra' performance class will have an IOPS limit of 150,000 IOPS,*

- *The IOPS limit is applied per volume, thus per datastore in a VMware environment,*
- *Storage availability is 99.99% measured monthly, including maintenance windows,*
- *There are no restrictions or quotas on read or write operations,*
- *There is no billing based on IOPS,*
- *No performance commitment is provided for the __'Mass Storage'__ class,*
- *The minimum size of a storage LUN is 500 GiB,*
- *When using a storage replication mechanism, performance must be identical across both availability zones,*
- *No "intelligent" optimization mechanisms such as compression or deduplication are implemented: when you reserve 10 TiB of storage, you physically have 10 TiB of usable storage deployed on IBM machines.*
- *Storage LUNs are dedicated to the client environment.*

### Usage within the VMware compute offering

Within the context of using block storage in the form of a datastore in Cloud Temple’s VMware compute offering, __you must take several important considerations into account__:

1. __Swap file (.VSWP) creation during virtual machine startup__: When a virtual machine starts up, it creates a .VSWP file equal in size to its allocated memory on disk. Therefore, to successfully start your virtual machines, you must always have free space in your datastore equivalent to the total memory size of all your virtual machines. For example, if your datastore has 1 TiB of block storage and you want to start 10 virtual machines each with 64 GiB of memory, 640 GiB of disk space will be required. Without sufficient free space, virtual machine startup will be limited by the available capacity to create swap files.

2. __Free space required for backup snapshots__: The backup service uses instant snapshots. You must therefore always have sufficient free space to allow the creation of a snapshot during a virtual machine backup. The size of the snapshot depends on the amount of write activity from the virtual machine and the time required to perform the backup. Generally, it is recommended to maintain at least 10 % free space for this operation.

3. __Management of dynamic disks__: Exercise caution when using dynamic disks. If you do not properly manage their growth, a lack of physical space can result in the virtual machine freezing (in the best case), or crashing with data corruption (in the worst case). It is crucial to closely monitor available space on your datastores when using this type of disk.

Proactive disk space management is essential to ensure the proper operation of your virtual machines and the reliability of backups. Always ensure you have sufficient space available for swap files, snapshots, and dynamic disk growth.

## Backup Storage

The storage dedicated to backing up your virtual machines is automatically provisioned by the platform, up to the quota ordered.

| Reference                | Unit | SKU                                      |
|--------------------------|------|------------------------------------------|
| MASS STORAGE - Archiving | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |

### Block Storage Replication

#### Principles

To enable the implementation of your business continuity plans, when it is not possible to maintain business continuity using application-level mechanisms and virtual machine replication is not suitable, Cloud Temple offers __block-level storage replication mechanisms between availability zones within a region__.

These replication mechanisms are applied to the storage LUNs of your environments, in addition to backups. The decision to use a replication mechanism for a given environment __depends on various factors, including its criticality, the acceptable data loss tolerance, and the performance requirements for the application__.

Cloud Temple provides two types of replication mechanisms deployed in an active/passive configuration:

- **Asynchronous replication** (or **'Global Mirror'**): *The **'Global Mirror'** function provides an asynchronous copy process. When a host writes to the primary volume, the confirmation of the I/O completion is received before the write operation finishes on the secondary volume. If a failover operation is initiated, the application must recover and apply all updates that were not confirmed on the secondary volume. If I/O operations on the primary volume are paused briefly, the secondary volume can become an exact match of the primary volume. This function is comparable to a continuous backup process in which the latest updates are always missing. When using Global Mirror for disaster recovery purposes, you must consider how you intend to handle these missing updates.*

- **Synchronous replication** (or **'Metro Mirror'**): *The **'Metro Mirror'** function is a type of remote copy that creates a synchronous copy of data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume but do not receive confirmation that the write operation is complete until the data has been written to the secondary volume. This ensures that both volumes contain identical data once the copy operation is complete. After the initial copy operation finishes, the Metro Mirror function maintains a fully synchronized copy of the source data at the target site at all times. **As of January 1, 2024, the 'Metro Mirror' function is no longer available for sale.***

A site is then designated as "active" (or "primary") and another as "passive" (or "standby"). The business continuity plan is activated in the event of a disaster or during a PRA test. The passive site then takes over from the active site.

#### Asynchrone Replikation

Wenn Ihre Workloads kurze Wiederherstellungszeiten erfordern und es nicht akzeptabel oder angemessen ist, Anwendungsreplikationen oder VM-Replikationen zu verwenden, ist es möglich, eine SAN-Speicher-LUN zwischen zwei Verfügbarkeitszonen derselben Region zu replizieren.

Diese Lösung ermöglicht ein __RPO von 15 Minuten__ und ein __RTO unter 4 Stunden__. Sie ermöglicht eine deutlich schnellere Wiederinbetriebnahme im Vergleich zur Durchführung einer Sicherungs-Wiederherstellung.

Bei einem in asynchroner Replikation betriebenen Speichervolume („Global Mirror“) arbeiten die SAN-Virtualisierungscontroller beider Verfügbarkeitszonen gemeinsam, um Schreibvorgänge auf beiden Standorten durchzuführen. Der primäre Standort wartet nicht auf die Bestätigung der Schreiboperation am sekundären Standort.

Die Schritte eines Schreibvorgangs sind wie folgt:

1. Ein Hypervisor möchte __einen Schreibvorgang auf einem Global-Mirror-Volumen__ durchführen: Er sendet die Anfrage an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller fordert den SAN-Controller der entfernten Zone auf, den Schreibvorgang durchzuführen,
3. Der lokale SAN-Controller wartet nicht auf die Bestätigung des entfernten SAN-Controllers und führt die Schreiboperation stattdessen lokal durch,
4. Er gibt die __Bestätigung__ an den Hypervisor zurück, der die Anfrage gestellt hat,
5. __Die Hypervisoren am entfernten Standort greifen nicht direkt auf die Global-Mirror-LUN zu__: Eine Dienstanforderung ist erforderlich.

| SLA       | Beschreibung                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 Min | Im Falle eines Ausfalls im primären Rechenzentrum entspricht die maximal verlorene Datenmenge maximal den letzten 15 Minuten der Schreibvorgänge |
| RTO < 4 Std | Im Falle eines Ausfalls im primären Rechenzentrum ist die Wiederinbetriebnahme innerhalb von 4 Stunden garantiert, abhängig von der Komplexität der Umgebung.          |

Im Falle der Aktivierung des PRA (Plan zur Wiederherstellung von Aktivitäten) führt das Cloud Temple-Team eine Präsentation der LUN __'Global Mirror'__ an die entfernten Hypervisoren durch, damit diese auf die Daten zugreifen können. Die Einrichtung dieser Lösung erfordert daher, dass auf dem „Standby“-Standort bereits Rechenressourcen und RAM reserviert sind, um im Falle eines Ausfalls die Aktivität wieder aufnehmen zu können.

Die Nutzung dieser Technologie erfordert zudem eine Verdoppelung des Speicherplatzes: Es ist erforderlich, dass der entfernte Standort exakt denselben Speicherplatz wie der lokale Standort bereitstellt.

Die Nutzung dieses Mechanismus kann die Leistung der Anwendung um bis zu 10 % beeinträchtigen. __Nur die Speicherklassen 500 IOPS/To, 1500 IOPS/To und 3000 IOPS/To sind kompatibel.__

| Referenz                          | Einheit  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Hinweis__*:

- *Da die Angebotslösung asynchron ist, kann es im Falle eines Ausfalls vorkommen, dass bestimmte Datenträgeroperationen nicht auf dem entfernten Standort geschrieben wurden. Es besteht daher ein Risiko für die Datenkonsistenz, das im Risikoanalyse-Teil des Wiederherstellungsplans berücksichtigt werden muss.*
- *Die Block-basierte Speicherreplikation erfolgt für virtuelle Maschinen und Anwendungen transparent und wird nicht sichtbar.*
- *Daher ist es wichtig, Replikationsszenarien auf Anwendungsebene oder gegebenenfalls VM-Replikationen vorzuziehen.*
- *Berechnungsleistung und Arbeitsspeicher am Wiederherstellungsstandort können reduziert werden, um die Kosten zu optimieren, sofern eine eingeschränkte Leistung für das Geschäft während der Durchführung des Wiederherstellungsplans akzeptabel ist.*

## VMware Virtualization

The VMware Cloud Temple offering, certified SecNumCloud, is based on the __VMware vSphere__ technology.

The platform is managed automatically by Cloud Temple (ensuring security conditions, operational readiness, etc.). It can be controlled via the Console's graphical interface or through the associated APIs.

*__Note__*: *For security reasons related to the SecNumCloud certification,  
__the customer is not permitted to access the VMware virtualization platform directly__ (no direct access to vCenter, for example).  
Indeed, the SecNumCloud certification requires __complete segregation__ between the technical asset management interfaces and the customer's interface (the Console).*

- The implemented products are VMware ESXi, VMware vCenter, and VMware Replication.
- *The virtualization offering's network does not use VMware NSX technology, but is instead managed physically using Juniper technology and the VPLS protocol.*
- *The storage does not use VMware vSAN technology, but exclusively IBM SANs via 32G Fiber Channel.*
- *No hidden optimizations are applied (compression, deduplication, etc.).*

### Definition of a Compute Node Cluster ('Cpool')

The __'Cpool'__ is a grouping of VMware ESXi hypervisors, also known as an *'ESX cluster'*.

All hosts within a __'Cpool'* belong to the **same tenant and the same availability zone (AZ)**. They must necessarily have the same instance type:  
__It is not possible to mix different compute node models within the same cluster__.

Since all compute nodes are delivered with the maximum physical RAM, a software-level RAM usage limit is enforced at the cluster level to ensure it matches the billed RAM.

By default, each compute node has 128 GB of RAM enabled within the __'Cpool'*.

A __'Cpool'* can contain a maximum of 32 hypervisors. Beyond this limit, a second cluster must be created.

Storage can be shared among __'Cpool'* clusters.

### Memory Allocation for a 'Cpool'

Memory reservation is configurable per cluster. You can reduce or increase the amount of RAM to match your cluster-wide requirements.

__Be careful not to exceed an average memory utilization of 85% per compute node__.
Indeed, VMware's technology uses a compression-based optimization method that can significantly impact the performance of your workloads and complicate diagnostics.
Similarly, excessive memory pressure on your compute nodes will force the hypervisor to offload part of its memory to disk to meet the needs of virtual machines.

This situation, known as __'Ballooning'__, severely impacts the performance of all virtual machines located on the affected datastore.
__Diagnosis becomes complicated in this context__, as your monitoring will detect issues at the CPU level rather than at the memory or storage level.
Also keep in mind that the first action the hypervisor performs when starting a virtual machine is to create a __memory swap file (.vswap)__ on disk, with a size equal to the memory allocated to the virtual machine. You must __account for this when sizing your storage__.

Each compute node is delivered with 128 GB of memory activated at the __'Cpool'__ level, although it physically has access to all available memory.

For example, in a cluster of three hosts of type ```vmware:standard:v2```, the RAM reservation at activation of the _*'Cpool'*_ will be 3 × 128 GB = 384 GB of RAM.
You can extend it up to a maximum of 3 × 384 GB = 1,152 GB of memory.

    Minimum memory for a 'Cpool' = number of hosts × 128 GB of memory  
    Maximum memory for a 'Cpool' = number of hosts × physical memory capacity of each compute node

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` that is regularly enriched and updated by our teams.  
To date, it includes dozens of `Templates` and images ready to be deployed on your virtual machines.

### Updating Hypervisors

Cloud Temple regularly provides updated builds for hypervisors to ensure security patches are applied.  
However, updating hypervisors remains your responsibility, as we do not have visibility into your business constraints.

The update process is fully automated. To ensure service continuity, a minimum of two hypervisors is required per cluster during the update. Make sure you have the necessary permissions to perform these actions.

### VM Affinity Management

__Affinity and anti-affinity rules__ allow you to control the placement of virtual machines on your hypervisors.  
They can be used to manage resource utilization within your __'Cpool'__.  
For example, they help balance workloads across servers or isolate resource-intensive workloads.  
In a __'Cpool'__ environment based on VMware, these rules are frequently used to manage virtual machine behavior during vMotion.  
vMotion enables the migration of virtual machines from one host to another without service interruption.

You can configure the following rules via the rule management interface:

- __Affinity Rules__: These rules ensure that certain virtual machines run on the same physical host.  
  They are used to improve performance by keeping virtual machines that communicate frequently together on the same server, thus reducing network latency. Affinity rules are particularly useful in scenarios where performance is critical, such as databases or applications requiring fast inter-server communication.

- __Anti-Affinity Rules__: Conversely, these rules ensure that certain virtual machines do not run on the same physical host.  
  They are essential for availability and resilience—for instance, to prevent all critical machines from being affected in the event of a single host failure. Anti-affinity rules are crucial for high-availability applications, such as in production environments where fault tolerance is a priority.  
  For example, you would not want both of your Active Directory servers located on the same hypervisor.

When creating a rule, you define the rule type (affinity / anti-affinity), the rule name, its activation status (__'Status'__), and the virtual machines involved within your hypervisor cluster.

*Note: The affinity/anti-affinity rules available in the console are rules between virtual machines (not between hypervisors and virtual machines).*

### Asynchronous replication of your virtual machines in a VMware environment

Asynchronous replication of your virtual machines is a mechanism that pushes write operations from the source hypervisor to the standby site at regular intervals.

After an initial hot copy of all active storage to the standby site, only write operations are pushed at regular intervals to the dormant site.  
The interval depends on the volume of writes (ranging from every hour to every 24 hours).

VM replication relies on the hypervisor’s snapshot mechanism. As such, this solution shares the same drawbacks, particularly sensitivity to the VM’s write volume, since the snapshot process is recursive and requires closing the snapshot.

A typical example of a machine that does not support VM replication is an FTP server receiving real-time video streams from surveillance cameras. __The machine is constantly writing data and will not be able to close a snapshot without pausing the operating system for a significant period (several tens of minutes).__ If the hypervisor fails to close the snapshot, it will proceed to do so anyway—without the possibility of intervention, unless the virtual machine becomes corrupted.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO of 1H to 24H | In the event of a disaster at the primary datacenter, the maximum amount of data lost corresponds to the last write push to the standby site.                 |
| RTO < 15 min    | Startup of the stopped virtual machine on the remote site.                                                                                                 |

In case of need or failure of a machine at the primary site, the mirrored machine on the standby site is activated.  
Recovery requires pre-reserved compute and RAM capacity on the standby site.  
The same amount of storage space must be available on the passive site as on the active site.

| Reference                         | Unit | SKU                                             |  
|-----------------------------------|------|-------------------------------------------------|
| PRA - VMware replication inter-AZ | 1 vm | csp:(region):iaas:vmware:licence:replication:v1 |

*__Note__: The minimum RPO must be defined based on the rate of change on the virtual machine.*

## Virtual Machine Backup

Cloud Temple offers a __native, non-optional cross-architecture backup solution__ (mandatory for French secnumcloud certification).

Backups are stored in a different availability zone and on a physically separate datacenter from the one hosting the virtual machine. They are encrypted using the AES 256-bit symmetric key algorithm (cipher mode `xts-plain64`) to ensure data confidentiality.

This setup protects against major failures in the production datacenter and enables restoration on a secondary datacenter (e.g., in case of fire).

The solution includes:

- Hot off-site backup of all disks,
- Instant presentation and booting of a virtual machine from the mass storage infrastructure, followed by hot reloading onto production SANs,
- Partial file restoration from backups,
- Retention limited solely by allocated mass storage space.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution — a no-agent architecture, easy to use, enabling automation of backup processes and optimization of mass storage space.

Backup and restore speeds depend on the change rate within the environments.  
Backup policies are configurable per virtual machine via the [Cloud Temple Console](../console/console.md).

*__Note:__*

*__Some virtual machines are incompatible with this backup technology__, which relies on the hypervisor’s snapshot mechanisms. These are typically machines with constant disk write workloads. The hypervisor cannot close the snapshot, forcing the virtual machine to be frozen to complete the closure operation. This freeze can last several hours and cannot be interrupted.*

*In such cases, the solution is to exclude the disk subject to continuous writes and back up the data using an alternative method.*

| Reference                                               | Unit  | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service    | 1 VM  | csp:(region):iaas:backup:vm:v1 |

#### Create a backup policy

To create a new backup policy, you must submit a request to support. Support is accessible via the buoy icon in the top-right corner of the window.

Creating a new backup policy is done through a __service request__ specifying:

    Your Organization's name
    A contact name, email address, and phone number to finalize the configuration
    The tenant name
    The backup policy name
    The retention characteristics (x days, y weeks, z months, ...)

## Advanced Data Protection (HSM/KMS)

Cloud Temple offers a __virtual machine encryption solution__ based on hardware security modules (HSM) and a key management service (KMS). This feature enhances the protection of sensitive data through centralized and secure key management, seamlessly integrated into the SecNumCloud environment.

### Technical Architecture

The solution is based on a robust security infrastructure composed of:

- __HSM (Hardware Security Module)__ : __Thales Luna S790__ modules certified __FIPS 140-3 Level 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ for centralized key management
- __VMware Integration__ : Communication via the __KMIP__ (Key Management Interoperability Protocol)

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
| 1 | __Root of Trust (RoT)__ | Master key managed by KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Domain key per client (multi-tenant isolation) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Key encryption key per VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Data encryption key per VM | VMware ESXi |

#### Verschlüsselungsprozess

1. __Generierung__: VMware ESXi generiert eine eindeutige DEK für jede virtuelle Maschine  
2. __Schutz__: Die DEK wird durch die KEK verschlüsselt, die in CipherTrust Manager gespeichert ist  
3. __Sicherung__: Die KEK wird ihrerseits durch die HSM-Schlüsselhierarchie geschützt  
4. __Speicherung__: Die verschlüsselte DEK wird zusammen mit den VM-Konfigurationsdateien gespeichert

### Security and Compliance

#### Certifications

- __FIPS 140-3 Level 3__ : Highest level certification for HSMs
- __Common Criteria EAL4+__ : Advanced security evaluation
- __SecNumCloud__ : ANSSI qualification integrated into the Cloud Temple environment

#### Multi-tenant Isolation

- __Cryptographic separation__: Each client has an isolated KMS domain  
- __Dedicated keys__: A specific Domain Key per client  
- __Audit and traceability__: Full logging of actions per domain

### Activation and Usage

VM encryption is activated __with a single click__ from the [Console](../console/console.md).

For a detailed step-by-step guide with screenshots, see the [VM Encryption Tutorial](tutorials/vm_encryption.md).

#### Voraussetzungen

- __Konfigurierter Schlüsselanbieter__: Ein HSM-/KMS-Anbieter muss auf der vStack aktiviert sein
- __Deaktivierte virtuelle Maschine__: Die VM muss heruntergefahren sein, bevor die Verschlüsselung durchgeführt wird
- __Keine aktive Replikation__: Die VM darf nicht repliziert werden (nicht kompatibel mit Global Mirror)
- __Kein Snapshot__: Es darf kein Momentaufnahme vorhanden sein
- __Abonnement für den Dienst__: Das Abonnement für den erweiterten Schutzdienst muss abgeschlossen sein

*__Hinweis__: Für weitere Informationen zu den Voraussetzungen und dem vollständigen Prozess siehe den [Leitfaden zur Verschlüsselung von VMs](tutorials/vm_encryption.md).*

### Limitations and considerations

#### Compatibility

- __Global Mirror__ : Encrypted virtual machines are __not compatible__ with Global Mirror replication  
- __Restore__ : Backups of encrypted VMs retain their cryptographic protection  
- __Export__ : Exporting encrypted VMs requires specific procedures

#### Leistung

- __Minimaler Einfluss__: Die Hardware-Verschlüsselung gewährleistet optimale Leistung
- __Transparenz__: Kein Einfluss auf das Verhalten der Anwendungen

### Recommended Use Cases

This advanced protection solution is particularly suitable for:

- __Sensitive Data__: Personal information, financial data, trade secrets  
- __Regulatory Compliance__: GDPR, HIPAA, PCI-DSS, ISO 27001, PDIS requirements  
- __Critical Sectors__: Banking, insurance, healthcare, defense  
- __Digital Sovereignty__: Protection against unauthorized access, even in case of compromise  

| Reference | Unit | SKU |
|-----------|------|-----|
| ADVANCED PROTECTION - VM Encryption via HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Note__:*  

- *The service requires a specific subscription and is not included in the standard IaaS offering*  
- *Key management remains fully under Cloud Temple’s control within the SecNumCloud environment*  
- *Encryption keys never leave the French, sovereign infrastructure*
