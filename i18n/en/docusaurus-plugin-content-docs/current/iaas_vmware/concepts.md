---
title: Concepts
---

The Cloud Temple __IaaS (Infrastructure As A Service)__ offering is designed to meet critical continuity and disaster recovery needs, with a particular focus on demanding sectors such as industry, banking, and insurance. Based on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technological platform

Cloud Temple's IaaS platform relies on internationally renowned technological partners:

- Compute: **CISCO UCS**.
- Storage: **IBM Spectrum Virtualize**, **IBM FlashSystem** for block storage.
- Network: **JUNIPER**.
- Virtualization: **VMware**, providing a reliable and proven foundation to manage your cloud environments.
- Backup: **IBM Spectrum Protect Plus**, for orchestration and backup storage.

This architecture is based on the **VersaStack** model, an alliance between Cisco and IBM, ensuring extensive compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated through APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- **Dedicated resources**: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared between clients.
- **Maximum predictability**: You control virtualization rates, IOPS pressure on storage, and benefit from clear, monthly consumption-based billing.

The platform is **SecNumCloud** qualified by the [ANSSI](https://www.ssi.gouv.fr/), guaranteeing a high level of automation and security.

## Key features

- Dedicated and on-demand computing resources (CPU, RAM).
- On-demand storage (various classes available).
- Network resources (Internet, private networks).
- Cross-backups with configurable retention.
- Asynchronous replication for storage or virtual machines.
- Management via the [Shiva Console](../console/console.md) or in Infrastructure as Code mode thanks to APIs and the Terraform provider.

## Benefits

| Benefit             | Description                                                                                                                                    |   
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digital trust       | Data hosting in France and GDPR compliance.                                                                                                     |   
| Security            | Highly secure platform, **SecNumCloud**, **HDS** (Health Data Hosting), **ISO 27001** and **ISAE 3402 type II** qualified.                      |  
| High availability   | Platform availability rate of 99.99%, measured monthly, maintenance windows included.                                                        |   
| Resilience          | Implementation of continuity or disaster recovery plans according to needs.                                                                    |
| Automation          | Fully automated platform designed to integrate into a digital transformation program.                                                           |
| On demand           | Resources available on demand.                                                                                                                 |













## Compute

The blades provided by Cloud Temple are of type __CISCO UCS B200__ or __CISCO UCS X210c__. They are fully managed by Cloud Temple (firmware, OS version, ...) through the Cloud Temple console.

Several categories of compute blades are available in the catalog to support your workloads (virtualization, containerization, ...).
These come with different characteristics and performance levels to best meet your needs. The compute blade catalog evolves regularly.

In the context of usage with a virtualization offering, a cluster of hypervisors is composed only of compute blades of the same type (it is not possible to mix blades of different types within the same cluster).

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of cores / threads | Connectivity __(3)__ | GPU **(4)**          | SKU for VMware offer              |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| ECO Blade v3           | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD Blade v3       | 384 GB      | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE Blade v3       | 768 GB      | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 Blade v3 | 384 GB      | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 Blade v3 | 768 GB      | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 Blade v3 | 1536 GB     | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 Blade v3 | 512 GB      | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Remarks__ :

- __(1)__ The amount of memory delivered is the physical memory available on the blades. It is not possible to change the physical memory amount of a blade.

- __(2)__ Minimum base frequency / turbo frequency, expressed in GHz. By default, processors are configured for maximum performance at the BIOS level.

- __(3)__ Physical connectivity is shared for both network access and block storage access, as the CISCO platform is converged.

- __(4)__ The available GPU offering evolves constantly. As of May 1, 2024, the offer is based on NVIDIA LOVELACE L40S GPUs. By default, the PERF4 blade is delivered with 2 L40S cards of 48GB RAM. Contact support for more details if necessary.

The compute availability is 99.99%, calculated monthly, maintenance window included. Eligibility in case of non-compliance with the SLA is subject to the creation of an incident ticket. You must also have at least two hosts per cluster and activate the __High Availability__ (HA) feature.
This feature allows your architecture to automatically restart your virtual machines on the second hypervisor.
In the event that an availability zone contains only one hypervisor, automatic restart is not possible.













## Network
The network service on Cloud Temple's IaaS platform relies on a network infrastructure based on VPLS technology, offering flexible and high-performance segmentation to meet clients' connectivity and network isolation needs.

### Level 2 VLANs

The VLANs provided in the IaaS offering are of **Level 2** type, offering complete network isolation and adaptable configuration according to needs.

#### Key concepts:
- **Sharing between clusters and availability zones (AZ)**: 
  - VLANs can be shared between the different AZs and clusters belonging to the same tenant.
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
3. **Isolation and security**: Level 2 VLANs offer strict network segmentation to protect data and flows.

---













## Block Storage

Cloud Temple offers several storage classes based on [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
and [IBM SVC](https://www.ibm.com/products/san-volume-controller) technology.

The __IBM SVC__ technology provides the level of performance required for our clients' environments thanks to the large amount of cache memory embedded in the controllers and the ability to distribute all IOPS of a server across multiple SANs.

It is also used to enable the replication of your block storage LUNs between availability zones or to facilitate interventions on the storage arrays.

The storage is mainly dedicated NVME FLASH storage for professional workloads.
Disks are used by the storage arrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).
Le classe de stockage __'Mass Storage'__ propose des disques mécaniques pour les besoins d'archivages dans un contexte d'efficience économique. Plusieurs niveaux de performances sont disponibles :

| Référence                         | Unité | SKU                                          | 
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivage          | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Note__ :*

- *The storage availability is 99.99% measured monthly, including the maintenance window,*
- *There are no restrictions or quotas on reading or writing,*
- *There is no IOPS billing,*
- *There is no performance commitment on the __'Mass Storage'__ class,*
- *The minimum size of a storage LUN is 500Gio,*
- *When using a storage replication mechanism, the performance must be identical in both availability zones,*
- *No "intelligent" optimization mechanisms like compression or deduplication are implemented: when you reserve 10Tio of storage, you physically have 10Tio of usable storage on the IBM machines.*
- *The storage LUNs are dedicated to the client environment.*

### Usage within the VMware compute offer

When using block storage as a datastore within the VMware compute offer from Cloud Temple, **you must consider several important factors**:

1. **Swap file (.VSWP) when starting virtual machines**: When a virtual machine starts, it creates a .VSWP file the size of its memory on the disk. Therefore, to start your virtual machines, you must always have free space in your datastore equivalent to the total memory sizes of your virtual machines. For example, if your datastore has 1 Tio of block storage and you want to start 10 virtual machines each with 64 Gio of memory, 640 Gio of disk space will be required. Without this space, the startup of the machines will be limited by the available capacity to create the swap files.

2. **Free space for backup snapshots**: The backup service uses snapshots. You must therefore always have enough free space to allow the creation of a snapshot when backing up a virtual machine. The size of the snapshot depends on the write volume of the virtual machine and the time needed to complete the backup. As a general rule, it is recommended to maintain at least 10% of free space for this operation.

3. **Managing dynamic disks**: Be cautious with the use of dynamic disks. If you do not control their growth, a lack of physical space can lead to a freeze of the virtual machine at best, or a crash with corruption at worst. It is crucial to monitor the available space on your datastores carefully when using this type of disk.

Proactive disk space management is essential to ensure the proper functioning of your virtual machines and the reliability of backups. Make sure to always have the necessary space for swap files, snapshots, and the growth of dynamic disks.

## Backup mode storage

The storage dedicated to backing up your virtual machines is auto-provisioned by the platform within the limit of the ordered quota. 

| Référence                | Unité | SKU                                      | 
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivage | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |


### Block storage replication

#### Principles

To implement your disaster recovery plans when continuous activity cannot be maintained with application mechanisms, and virtual machine replication is not suitable, Cloud Temple offers __block storage replication mechanisms between availability zones within a region__.

These replication mechanisms are applied to the storage LUNs of your environments, in addition to backups. The decision to use a replication mechanism in an environment __depends on many factors such as its criticality, the tolerable data loss, or the desired performance__ for the application. 

Cloud Temple offers two types of mechanisms deployed in an active/passive configuration: 

- The __asynchronous__ replication (or __'Global Mirror'__): *The __'Global Mirror'__ function provides an asynchronous copy process. When a host writes to the primary volume, confirmation of I/O completion is received before the write operation finishes for the copy on the secondary volume. If a failover operation is initiated, the application must recover and apply all updates that were not confirmed on the secondary volume. If I/O operations to the primary volume are paused briefly, the secondary volume can become an exact match to the primary volume. This function is comparable to a continuous backup process in which the latest updates are always missing. When using Global Mirror for disaster recovery, you must consider how you want to handle these missing updates.*

- The __synchronous__ replication (or __'Metro Mirror'__): *The __'Metro Mirror'__ function is a type of remote copy that creates a synchronous copy of data from a primary volume to a secondary volume. With synchronous copies, host applications write to the primary volume but do not receive confirmation that the write operation is complete until the data is written to the secondary volume. This ensures that both volumes contain identical data when the copy operation is finished. After the initial copy operation is complete, the Metro Mirror function continuously maintains a fully synchronized copy of the source data at the target site. __Since January 1, 2024, the 'Metro Mirror' function is no longer commercially available.__*

An "active" or "primary" site and a "passive" or "standby" site are then defined. The disaster recovery plan activates in case of disaster or for a DRP test request. The passive site then takes over from the active site.

#### Asynchronous replication

When your workloads require short recovery times, and it is not acceptable or suitable to use application-type replication mechanisms/virtual machine replication, it is possible to replicate a SAN storage LUN between two availability zones within the same region.

This offer provides a __RPO of 15 minutes__ and an __RTO of less than 4 hours__. It allows a much faster recovery than implementing a backup restore.

In an asynchronous replication storage volume (__Global Mirror__), the SAN virtualization controllers of both availability zones work together to perform write operations on both sites. The master site does not wait for the write acknowledgment from the slave site.

The steps of a write operation are as follows:

1. A hypervisor wants to perform __a write operation on a Global-Mirror volume__: it sends its request to the SAN controller of its availability zone, 
2. The local SAN controller asks the SAN controller of the remote zone to perform the write operation,
3. the local SAN controller does not wait for acknowledgment from the remote SAN and then performs the write operation locally,
4. It gives __acknowledgment__ to the hypervisor that issued the request,
5. __The hypervisors of the remote site do not directly access the Global Mirror LUN__: A service request is necessary.

| SLA       | Description                                                                                                                                       |   
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In case of disaster on the primary datacenter, the maximum amount of lost data corresponds to at most the last 15 minutes of writes               |
| RTO < 4H  | In case of disaster on the primary datacenter, recovery is guaranteed within 4 hours depending on the complexity of the environments.             |

In case of DRP activation, the Cloud Temple team presents the __'Global Mirror'__ LUN to the remote hypervisors so they can access the data. Implementing this solution requires reserving computing and RAM resources on the 'standby' site to resume activity in case of disaster.

Using this technology also requires doubling the disk space: the same space is needed on the remote site as on the local site.
L'usage de ce mécanisme peut impacter la performance de l'application à hauteur de 10 %. __Seules les classes de stockage 500 Iops/To, 1500 Iops/To et 3000 Iops/TO sont compatibles.__


| Référence                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STOCKAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* : 

- *L'offre étant asynchrone, il est possible lors d'un sinistre que certaines opérations disques n'aient pas été écrites sur le site distant. Il peut donc y avoir un risque sur la cohérence des données, à mitiger dans l'analyse de risque du plan de reprise d'activité.*
- *La réplication du stockage en mode bloc se fait de façon masquée pour les machines virtuelles et les applications,*
- *À ce titre, il est important de privilégier les scénarios de réplication applicative ou éventuellement de réplication de machine virtuelle,*
- *Le calcul et la mémoire, sur le site de reprise, peuvent être diminués pour optimiser les coûts si une situation dégradée est acceptable pour le métier lors de l'action du plan de reprise d'activité.*


## Virtualisation VMware

L'offre de virtualisation VMware Cloud Temple qualifiée SecNumCloud est basée sur la technologie __VMware Vsphere__.

La plateforme est managée par Cloud Temple de façon automatique (maintien de condition de sécurité, maintien en condition opérationnelle, ...).
Elle est pilotable via l'interface graphique de la console Shiva ou via les APIs associées.

*__Remarque__* : *Pour des raisons de sécurité liées à la qualification SecNumCloud,
__il n'est pas possible pour le commanditaire d'accéder directement à la plateforme de virtualisation VMware__ (aucun accès direct au vCenter notamment).
En effet, la qualification SecNumCloud impose __une totale ségrégation__ entre les interfaces de pilotage des actifs techniques et l'interface du commanditaire (la console Shiva).*

- Les produits mis en oeuvre sont VMware ESXi, VMware Vcenter et VMware Replication.
- *Le réseau de l'offre de virtualisation n'utilise pas la technologie VMware NSX, mais est piloté matériellement par la technologie Juniper et le protocole VPLS.*
- *Le stockage n'utilise pas la technologie VMWare vSan, mais uniquement des SANs IBM en fibre channel 32G.*
- *Aucune forme d'optimisation cachée n'est mise en œuvre (compression, déduplication, ...).*

### Définition d'un cluster de lames de calcul ('Cpool')

Le __'Cpool'__ est un regroupement d'hyperviseurs VMware ESXi, également connu sous le nom de *'cluster ESX'*.

Les hôtes présents dans un __'Cpool'__ appartiennent tous __au même tenant et à la même zone de disponibilité__ (AZ). Ils doivent nécessairement avoir la même classe :
__il n'est pas possible de mixer des modèles différents de lames de calcul au sein d'un même cluster__.

Toutes les lames de calcul étant livrées avec le maximum physique de mémoire, une limitation d'utilisation de la RAM est appliquée logiciellement au niveau du cluster pour s'assurer qu'elle correspond à la RAM facturée.

Par défaut, chaque lame dispose de 128 Go de mémoire activée au sein du __'Cpool'__.

Un __'Cpool'__ peut contenir au maximum 32 hyperviseurs. Au-delà de cette limite, il sera nécessaire de créer un deuxième cluster.

Le stockage peut être partagé entre les __'Cpool'__.

### Allocation Mémoire pour un 'Cpool'

La réservation de la RAM est configurable par cluster. Vous pouvez réduire ou augmenter la quantité de la RAM pour qu'elle corresponde à vos besoins à l'échelle du cluster.

__Attention à ne pas dépasser une moyenne de 85 % de consommation mémoire par lame de calcul__.
En effet, la technologie VMware utilisera une méthode d'optimisation de type compression qui peut impacter fortement les performances de vos charges de travail et complexifier le diagnostic.
De même, une trop forte pression mémoire sur vos lames de calcul forcera l'hyperviseur à décharger une partie de sa mémoire sur disque pour répondre aux besoins des machines virtuelles.

Ce cas, appelé __'Ballooning'__ impacte très fortement l'ensemble des performances des machines virtuelles situées sur le stockage (datastore) concerné.
__Le diagnostic est compliqué dans ce contexte__, car votre métrologie constatera des impacts au niveau CPU et non de la mémoire ou du stockage.
Gardez aussi à l'esprit que la première chose que fait l'hyperviseur au démarrage d'une machine virtuelle est de créer __un fichier de swap mémoire__ (.vswap) sur
le disque, de la taille de la mémoire de la machine virtuelle concernée. Il vous faut __en tenir compte sur le dimensionnement de votre stockage__.

Chaque lame de calcul est livrée avec 128 Go de mémoire activée logiciellement au niveau du __'Cpool'__ mais dispose physiquement de la totalité de la mémoire allouable.

Par exemple, pour un cluster de trois hosts de type ```vmware:standard:v2```, la réservation de la RAM à l'activation du __'Cpool'_ sera de 3 x 128 Go = 384 Go de RAM.
Vous pourrez l'étendre au maximum à 3 x 384 Go = 1152 Go de mémoire.

    Minimum de mémoire d'un 'Cpool' = nombre de hosts X 128 Go de mémoire
    Maximum de mémoire d'un 'Cpool' = nombre de hosts X la quantité de mémoire physique de la lame de calcul

### Catalogues de machines virtuelles Cloud Temple

Cloud Temple met à votre disposition un catalogue de `Templates` régulièrement enrichi et mis à jour par nos équipes.
Il comprend à ce jour plusieurs dizaines de `Templates` et images à monter sur vos machines virtuelles.

### Mise à jour des Hyperviseurs
Cloud Temple fournit régulièrement des builds pour les hyperviseurs afin d’assurer l’application des correctifs de sécurité. 
Cependant, la mise à jour des hyperviseurs reste sous votre responsabilité, car nous n’avons pas de visibilité sur vos contraintes métier.

Le processus de mise à jour est entièrement automatisé. Pour garantir une continuité de service, un minimum de deux hyperviseurs est requis par cluster pendant la mise à jour. Assurez-vous de disposer des permissions nécessaires pour effectuer ces actions.


### Gestion de l'affinité de vos machines virtuelles

Les __règles d'affinité et d'anti-affinité__ permettent de contrôler l'emplacement des machines virtuelles sur vos hyperviseurs.
Elles peuvent être utilisées pour gérer l'utilisation des ressources de votre __'Cpool'__.
Par exemple, elles peuvent aider à équilibrer la charge de travail entre les serveurs ou à isoler les charges de travail gourmandes en ressources.
Dans un __'Cpool'__ VMware, ces règles sont souvent utilisées pour gérer le comportement des machines virtuelles avec vMotion.
vMotion permet de déplacer des machines virtuelles d'un hôte à un autre sans interruption de service.

Vous pouvez configurer grâce à la gestion des règles :

- __Règles d'Affinité__ : Ces règles assurent que certaines machines virtuelles soient exécutées sur le même hôte physique.
Elles sont utilisées pour améliorer les performances en maintenant les machines virtuelles qui communiquent fréquemment
ensemble sur le même serveur pour réduire la latence réseau. Les règles d'affinité sont utiles dans des scénarios
où la performance est critique, comme dans le cas de bases de données ou d'applications qui nécessitent une communication rapide entre les serveurs.

- __Règles d'Anti-affinité__ : À l'inverse, ces règles garantissent que certaines machines virtuelles ne soient pas exécutées
sur le même hôte physique. Elles sont importantes pour la disponibilité et la résilience, par exemple,
pour éviter que des machines critiques ne soient toutes affectées en cas de défaillance d'un serveur unique.
Les règles d'anti-affinité sont cruciales pour les applications nécessitant une haute disponibilité,
comme dans les environnements de production où la tolérance aux pannes est une priorité.
Par exemple, vous ne souhaitez pas que vos deux Active Directory soient sur le même hyperviseur.

Lors de la création d'une règle, vous définissez le type de règle (affinité / anti-affinité), le nom de la règle,
son état d'activation (__'Statut'__) et les machines concernées de votre cluster d'hyperviseurs.

*Remarque : les règles affinité/anti-affinité proposées dans la console sont des règles concernant les machines virtuelles entre elles (pas de règles entre hyperviseurs et machines virtuelles).*


### Réplication asynchrone de vos machines virtuelles en environnement VMware

La réplication asynchrone de vos machines virtuelles est un mécanisme qui consiste à pousser au niveau de l'hyperviseur source les opérations d'écriture sur le site standby à intervalle de temps régulier. 

Après une copie initiale à chaud de l'ensemble du stockage actif sur le site standby, seules les écritures sont poussées à intervalles réguliers sur le site en sommeil. 
Cet intervalle dépend du volume d'écriture (de toutes les heures à toutes les 24 heures).

La réplication des machines virtuelles s'appuie sur le mécanisme de clichés instantanés de l'hyperviseur. À ce titre, 
cette solution a les mêmes inconvénients, en particulier la sensibilité au volume d'écritures de la machine virtuelle, 
le processus de cliché instantané étant un mécanisme récursif pour la clôture du cliché instantané.

L'exemple typique de machine qui ne supporte pas le mécanisme de réplication des machines virtuelles est un 
serveur FTP qui reçoit les flux temps réels de caméras de surveillance. __La machine passe son temps à écrire et ne sera 
pas capable de clôturer un cliché instantané sans mise en pause du système d'exploitation pendant une période de temps significative
(plusieurs dizaines de minutes)__. Si l'hyperviseur n'arrive pas à clôturer le cliché instantané, c'est exactement ce qu'il fera,
sans possibilité d'intervenir sauf à corrompre la machine virtuelle.
| SLA             | Description                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H à 24H | In case of a disaster at the primary datacenter, the maximum amount of lost data is that of the last write push to the standby site.                                                                  |
| RTO  < 15mn     | Operation to start the stopped virtual machine at the remote site                                                                                        |


In case of need, or in case of a failure on a machine at the main site, the mirror machine at the standby site is activated. 
Resuming activity requires having reserved compute and RAM resources on standby at the standby site. It 
is necessary to have the same storage space on the passive site as on the active site.


| Reference                         | Unit  | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - VMware replication inter-AZ | 1 vm  | csp:(region):iaas:vmware:license:replication:v1 |

*__Note__ : The calculation of the minimum RPO must be defined according to the rate of change on the virtual machine.*













## Virtual Machines Backup
Cloud Temple offers __a native and non-switchable cross-backup architecture__ (it is mandatory in the French secnumcloud qualification).

The backups are stored in an availability zone and on a different physical datacenter than the one hosting the virtual machine.

This allows protection in case of a major failure at the production datacenter and restoration at a secondary datacenter (e.g., fire).

This solution includes:

- The off-site hot backup of all disks,
- The instant presentation and startup of a virtual machine from the mass storage infrastructure and the hot reload on the production SANs,
- Partial file restoration from backup,
- A retention limited only by the allocation of mass storage space.

This backup infrastructure is based on the *IBM Spectrum Protect Plus* solution, an agentless architecture solution, 
easy to use, and which allows automation of backup processes in addition to mass storage space optimization.

Backup and restoration speeds depend on the rate of change in the environments.
The backup policy is configurable from [the Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note :__*

*__Some virtual machines are not compatible with this backup technology__ which uses the hypervisor's snapshot mechanisms.
These are typically machines whose disk write loads are constant. It is not possible for the hypervisor to close the snapshot, which 
requires freezing the virtual machine to complete the closure operation. This freeze can last several hours and is not stoppable.*

*The solution is then to exclude the disk that is the target of permanent writes and to back up the data by another method.*

| Reference                                              | Unit  | SKU                            |
| ------------------------------------------------------ | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service   | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Create a Backup Policy
To add a new backup policy, you need to make a request to support. Support is accessible from the buoy icon at the top right of the window.

The creation of a new backup policy is done by __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The name of the backup policy
    The characteristics (x days, y weeks, z months, ...)