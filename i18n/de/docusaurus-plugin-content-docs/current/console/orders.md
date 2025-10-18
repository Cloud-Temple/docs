---
title: Ressourcen bereitstellen
---
import shivaOrdersList from './images/shiva_orders_list.png'
import shivaOrderNotif_001 from './images/shiva_order_notif_001.png'
import shivaOrderStatus from './images/shiva_order_status.png'
import shivaOrderAz_01 from './images/shiva_order_az_01.png'
import shivaOrderAz_02 from './images/shiva_order_az_02.png'
import shivaOrderAz_03 from './images/shiva_order_az_03.png'
import shivaOrderAz_04 from './images/shiva_order_az_04.png'
import shivaOrderAz_05 from './images/shiva_order_az_05.png'
import shivaOrderAz_06 from './images/shiva_order_az_06.png'
import shivaOrderAz_07 from './images/shiva_order_az_07.png'
import shivaOrderAz_08 from './images/shiva_order_az_08.png'
import shivaOrderClucalc_01 from './images/shiva_order_clucalc_01.png'
import shivaOrderClucalc_02 from './images/shiva_order_clucalc_02.png'
import shivaOrderClucalc_03 from './images/shiva_order_clucalc_03.png'
import shivaOrderClucalc_04 from './images/shiva_order_clucalc_04.png'
import shivaOrderClucalc_05 from './images/shiva_order_clucalc_05.png'
import shivaOrderClusto_01 from './images/shiva_order_clusto_01.png'
import shivaOrderClusto_02 from './images/shiva_order_clusto_02.png'
import shivaOrderClusto_03 from './images/shiva_order_clusto_03.png'
import shivaOrderClusto_04 from './images/shiva_order_clusto_04.png'
import shivaOrdersIaasSpoolDs from './images/shiva_orders_iaas_spool_ds.png'
import shivaOrdersNet_002 from './images/shiva_orders_net_002.png'
import shivaOrdersNet_003 from './images/shiva_orders_net_003.png'
import shivaOrdersNet_004 from './images/shiva_orders_net_004.png'
import shivaOrdersIaasCpoolEsx from './images/shiva_orders_iaas_cpool_esx.png'
import shivaOrdersIaasCpoolMemory from './images/shiva_orders_iaas_cpool_memory.png'

## Konzept

Die Überwachung des Bereitstellungsprozesses neuer Ressourcen erfolgt im Menü __'Befehle'__, das im grünen Balken links auf dem Bildschirm zugänglich ist.

Es ermöglicht die Anzeige der angeforderten Cloud-Ressourcen, der Ressourcen, die sich im Bereitstellungsprozess befinden, sowie etwaiger Fehler innerhalb eines [Tenant](iam/concepts.md#tenant) Ihrer [Organisation](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Hinweis: Derzeit ist eine globale Übersicht über alle im Rahmen verschiedener Tenants bereitgestellten Ressourcen innerhalb einer Organisation noch nicht möglich.__ Dieses Thema wird später durch die Einführung eines speziellen Portals für den Auftraggeber (im Sinne des Unterzeichners) und die Steuerung seiner Organisation behandelt.*

Die Bereitstellung oder Löschung von Ressourcen erfolgt jeweils innerhalb der Produkte im Menü __'IaaS'__ und __'Netzwerk'__ im grünen Balken links auf dem Bildschirm.

Es ist ebenfalls möglich, die Bereitstellungen direkt über die Benachrichtigungen der Cloud-Temple-Konsole einzusehen:

<img src={shivaOrderNotif_001} />

Von der Befehlsseite aus können Sie den Fortschritt einer Bereitstellung einsehen und gegebenenfalls mit dem Team über Kommentare oder Ergänzungen kommunizieren:

<img src={shivaOrderStatus} />

__Hinweis__: __Es ist nicht möglich, gleichzeitig mehrere Befehle derselben Ressourcentypen zu starten. Sie müssen daher warten, bis der laufende Befehl abgeschlossen ist, bevor Sie einen neuen ausführen können. Dies gewährleistet eine effiziente und geordnete Ressourcenverwaltung innerhalb Ihres Umfelds.__

## Order a new Availability Zone

It is possible to add a new availability zone by accessing the "__Order__" menu. This option allows you to expand your resources and enhance the availability and resilience of your applications with just a few clicks:

<img src={shivaOrderAz_01} />

Begin by selecting your desired location, first choosing the geographic region, then selecting the corresponding availability zone (AZ) from the available options. This step enables you to tailor your resource deployment according to your infrastructure's location and requirements:

<img src={shivaOrderAz_02} />

Next, select the desired type of hypervisor cluster, choosing the one that best meets the performance and management needs of your cloud infrastructure:

<img src={shivaOrderAz_03} />

Then, specify the number of hypervisors and the desired amount of memory to adapt resources to your workload and the specific requirements of your cloud environment:

<img src={shivaOrderAz_04} />

Next, select the number of datastores to provision within the cluster as well as their types. Note that the maximum number of allowed datastores is 10, with a minimum of 2 datastores required. Each different datastore type will result in the creation of an additional datastoreCluster. For example, selecting 2 "live" type datastores and 1 "mass" type datastore will create two distinct datastoreClusters:

<img src={shivaOrderAz_05} />

Define the required storage size for backup, ensuring capacity equivalent to your production storage. Consider an average compression ratio of 2 to optimize backup space and ensure effective data protection:

<img src={shivaOrderAz_06} />

Select the networks to propagate based on your needs. You also have the option to enable "Internet Access" if required, specifying the desired number of IP addresses, with a range between 1 and a maximum of 8:

<img src={shivaOrderAz_07} />

You will then receive a summary of your selected options before confirming your order:

<img src={shivaOrderAz_08} />

## Request additional storage resources

The block storage allocation logic on compute clusters is based on the __IBM SVC (San Volume Controller)__ and __IBM FlashSystem__ technologies. Storage is organized into __LUNs of at least 500 GiB__, presented according to the technology used:
- For __VMware__: as __datastores__ grouped into __SDRS clusters (Storage Distributed Resource Scheduler)__
- For __Bare Metal__: as __volumes__
- For __Open IaaS__: as __Storage Repositories (SR)__

Each datastore inherits a __performance class__ defined in IOPS/To (ranging from 500 to 15,000 IOPS/To for FLASH, or no guarantee for MASS STORAGE). IOPS limitations are applied __at the datastore level__ (not per VM), meaning all virtual machines sharing the same datastore share the allocated IOPS quota.

__Key points to remember__:

- __Minimum size__: 500 GiB per LUN
- __Performance__: Proportional to allocated volume (e.g., 2 TiB in Standard class = maximum 3,000 IOPS)
- __Organization__: Datastores of the same type are automatically grouped into datastore clusters
- __Availability__: 99.99% measured monthly, including maintenance windows
- __Required space__: Always reserve 10% free space for backup snapshots and an amount equivalent to the total RAM of VMs for .VSWP files

### Deploy a new compute cluster

Place a cluster order by selecting the options that best suit your virtualization requirements. Define key characteristics such as the number of hypervisors, cluster type, amount of memory, and required compute resources:

<img src={shivaOrderClucalc_01} />

Select the availability zone:

<img src={shivaOrderClucalc_02} />

Choose the compute blade type:

<img src={shivaOrderClucalc_03} />

You can then select existing networks to propagate, or create new networks directly at this stage, depending on your infrastructure needs. Note that the total number of configurable networks is limited to a maximum of 20:

<img src={shivaOrderClucalc_04} />

You will then receive a summary of your selected options before confirming your order, after which you can view your ongoing order:

<img src={shivaOrderClucalc_05} />

### Deploy a new storage cluster

In the "__command__" menu, proceed with ordering a __new storage cluster__ for your environment by selecting the options that match your requirements in terms of capacity, performance, and redundancy. Choose the location:

<img src={shivaOrderClusto_01} />

Define the number of datastores to provision within the cluster as well as their type, adhering to the following limits: a minimum of 2 datastores and a maximum of 10 can be configured. Select the datastore types that best meet your needs regarding performance, capacity, and usage, in order to optimize storage in your environment:

<img src={shivaOrderClusto_02} />

Select the desired storage type from the available options:

<img src={shivaOrderClusto_03} />

You will then be presented with a complete summary of the options you have selected, allowing you to review all settings before definitively confirming your order:

<img src={shivaOrderClusto_04} />

### Deploy a new datastore within a VMware SDRS cluster

In this example, we will add block storage for a VMware infrastructure.  
To add an additional datastore to your SDRS cluster, navigate to the __'Infrastructure'__ submenu, then select __'VMware'__.  
Choose the appropriate VMware stack and availability zone, then go to the __'Storage'__ submenu.

Select the SDRS cluster that matches your desired performance characteristics, and click the __'Add a datastore'__ button located in the table displaying the list of datastores.

<img src={shivaOrdersIaasSpoolDs} />

__Note__:

- *The smallest activatable LUN size on a cluster is __500 GiB__.*
- *Datastore performance ranges from an average of 500 IOPS/TiB up to 15,000 IOPS/TiB on average. __This is a software-based limit enforced at the storage controller level__.*
- *The disk volume consumption billing for your organization is the sum of all LUNs across all used availability zones.*
- *The __'order'__ and __'compute'__ permissions are required for the account to perform this action.*

### Order new networks

The networking technology used on the Cloud Temple infrastructure is based on [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). It enables you to benefit from __Layer 2 networks seamlessly connected across your availability zones within a region__.

It is also possible to share networks between your tenants and terminate them in hosting zones.  
In essence, you can think of a Cloud Temple network as an 802.1q VLAN available at any point within your tenant.

Networks on the Cloud Temple platform are __Layer 2 (VLANs)__ based on the __VPLS (Virtual Private LAN Service)__ technology. This technology allows you to enjoy __seamless network connectivity across your availability zones__ within a region, with guaranteed performance:

- __Intra-AZ latency__: < 3 ms  
- __Inter-AZ latency__: < 5 ms  

__Network flexibility__:

- A network can be __shared across multiple clusters__ within the same availability zone  
- A network can be __propagated across multiple availability zones__ within the same region  
- A network can be __shared between different tenants__ within your organization  
- A network can be __terminated in a hosting zone__ for your physical equipment  
- __Limit__: Maximum of 20 networks per order. You can place multiple successive orders to extend this number according to your needs  

Ordering a new network and defining sharing options between your tenants is done in the __'Network'__ menu of the green sidebar on the left side of the screen. Networks are first created, then a separate order is generated to propagate them. You can track the progress of ongoing orders by accessing the "Order" tab in the menu, or by clicking on the information labels that redirect you to active or processing orders.

<img src={shivaOrdersNet_002} />

It is also possible to propagate existing networks or to separate the two steps—first creating the network, then propagating it later as needed. The propagation option is available in the settings of the selected network:

<img src={shivaOrdersNet_003} />

Click on the "Propagate" option for an existing network, then select your desired propagation target. This step allows you to define the location or resources where the network should be propagated:

<img src={shivaOrdersNet_004} />

### Deactivation of a network

A network can also be deactivated if necessary. This option allows you to temporarily pause access to or usage of the network without permanently deleting it, providing flexibility in managing your infrastructure according to your needs.

The deactivation option is located within the settings of the selected network.

## Add additional hypervisors to a compute cluster

A __compute cluster__ is a grouping of hypervisors that must comply with the following rules:

### For VMware ESXi clusters

__Homogeneity rules__:

- All hosts within a cluster must be of the __same server type__ (ECO, STANDARD, ADVANCE, PERFORMANCE, etc.)
- All hosts must belong to the __same tenant and the same availability zone__
- __Limit__: Maximum of 32 hypervisors per cluster

__Memory allocation__:

- Each server is delivered with __all physical memory activated from the start__
- __Example__: A cluster of 3 STANDARD v3 servers (each with 384 GB of physical memory) = 3 × 384 GB = 1,152 GB available
- __Recommendation__: Do not exceed 85% memory utilization per server to avoid VMware's compression and ballooning mechanisms

__High Availability__:

- __Recommended minimum__: 2 hypervisors per cluster to benefit from the 99.99% SLA
- Enable the __VMware HA__ (High Availability) feature to automatically restart VMs in case of host failure

Adding hypervisors to a compute cluster is done in the __'IaaS'__ menu in the green sidebar on the left side of the screen.  
In the following example, we will add compute capacity to a VMware-based hypervisor cluster.

Go to the __'Infrastructure'__ submenu, then __'VMWare'__. Select the VMware stack, the availability zone, and the compute cluster.  
In this example, it is __'clu001-ucs12'__. Click the __'Add host'__ button located in the top-right corner of the table listing the hosts.

__Note__:

- *__Cluster configuration must be homogeneous*. It is not allowed to mix different hypervisor types within a cluster. All servers must be of the same type.*
- *The __'order'__ and __'compute'__ permissions are required for the account to perform this action.*

<img src={shivaOrdersIaasCpoolEsx} />

### For Open IaaS clusters

Open IaaS clusters follow similar rules regarding homogeneity and high availability. Computing resource management is also performed via the __'OpenIaaS'__ menu, with the same access rights requirements.

## Add additional memory resources to a compute cluster

Memory allocation on compute clusters works as follows:

__Memory Allocation Principle__:

- All compute blades are delivered with the __maximum physical memory installed__
- A __software-based limitation__ is applied at the VMware cluster level to match the billed RAM
- Each blade has access to the __full amount of physically activated memory__ within the cluster

__Cluster-Scale Memory Sizing__:

- __Minimum__: number of hosts × 128 GB of memory
- __Maximum__: number of hosts × physical memory capacity per blade

__Example__: For a three-host cluster using `STANDARD v3` hosts (384 GB physical memory per blade)

- Total available memory: 3 × 384 GB = 1152 GB

__Important Recommendations__:

- Do not exceed __85% average memory utilization per blade__ to avoid VMware ballooning and compression
- Ensure sufficient disk space is available for swap files (.VSWP) created when each VM starts (size = VM memory allocation)

To add additional RAM to a cluster, navigate to the cluster configuration (as previously described for adding a compute host) and click on __'Modify Memory'__.

<img src={shivaOrdersIaasCpoolMemory} />

__Note__:

- *__Machines are delivered with the full physical memory installed__. Memory resource unblocking is purely a software activation at the cluster level.*
- *It is not possible to modify the physical memory capacity of a blade type. Always consider the maximum memory capacity of a blade when creating a cluster.*
- *The __'order'__ and __'compute'__ permissions are required on the account to perform this action.*