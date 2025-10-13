---
title: Deploy resources
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

## Concept

The tracking of new resource deployments is done in the __'Orders'__ menu accessible from the green banner on the left side of the screen.

It allows you to view the ordered Cloud resources, those being deployed, and any errors within a [Tenant](iam/concepts.md#tenant) of your [Organization](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Note: At this time, a global view at the organization level of all resources deployed across different tenants is not yet possible.__ This topic will be addressed in 2026 with the implementation of a dedicated portal for the sponsor (signatory) and the management of their organization.*

The deployment of resources or their deletion is done in each product through the __'IaaS'__ and __'Network'__ menus on the left side of the screen in the green banner.

It is also possible to see deliveries directly at the Cloud Temple console notifications level:

<img src={shivaOrderNotif_001} />

From the orders page, you can see the progress of a delivery and possibly interact with the team by adding comments or clarifications:

<img src={shivaOrderStatus} />

__Note__: __It is not possible to launch multiple orders of the same resource type simultaneously. You will need to wait for the current order to be processed and finalized before placing a new one. This ensures efficient and orderly resource management within your environment.__

## Ordering a new availability zone

It is possible to add a new availability zone by accessing the "__Order__" menu. This option allows you to expand your resources and improve the availability and resilience of your applications in just a few clicks:

<img src={shivaOrderAz_01} />

Start by selecting the desired location, first choosing the geographical region, then the corresponding availability zone (AZ) among those available. This step allows you to adapt the deployment of your resources based on location and infrastructure requirements:

<img src={shivaOrderAz_02} />

Next, proceed to select the desired hypervisor cluster type, choosing the one that best meets the performance and management needs of your cloud infrastructure:

<img src={shivaOrderAz_03} />

Then select the number of hypervisors and the desired amount of memory to adapt resources to the workload and specific requirements of your cloud environment:

<img src={shivaOrderAz_04} />

Next, select the number of datastores to provision in the cluster as well as their types. It is important to note that the maximum number of allowed datastores is 10, with a minimum of 2 datastores required. Each different datastore type will result in the creation of an additional datastoreCluster. For example, if you choose 2 "live" type datastores and 1 "mass" type datastore, this will result in the formation of 2 distinct datastoreClusters:

<img src={shivaOrderAz_05} />

Define the storage size needed for backup, ensuring you plan for capacity equivalent to your production storage. Consider an average compression rate of 2 to optimize backup space and ensure effective data protection:

<img src={shivaOrderAz_06} />

Select the networks to propagate according to your needs. You also have the option to enable "Internet access" if necessary, defining the number of desired IP addresses, with a choice between 1 and a maximum of 8:

<img src={shivaOrderAz_07} />

You will then get a summary of the selected options before validating your order.

<img src={shivaOrderAz_08} />

## Ordering additional storage resources

The storage allocation logic in block mode on compute clusters is based on __IBM SVC (San Volume Controller)__ and __IBM FlashSystem__ technology. Storage is organized in __LUNs of 500 GiB minimum__, presented according to the technology used:
- For __VMware__: as __datastores__ grouped in __SDRS (Storage Distributed Resource Scheduler) clusters__
- For __Bare Metal__: as __volumes__
- For __IaaS Open Source__: as __Storage Repository (SR)__

Each datastore inherits a __performance class__ defined in IOPS/TB (from 500 to 15,000 IOPS/TB for FLASH, or without guarantee for MASS STORAGE). The IOPS limitation is applied __at the datastore level__ (not per VM), meaning all virtual machines sharing the same datastore share the allocated IOPS quota.

__Key points to remember__:

- __Minimum size__: 500 GiB per LUN
- __Performance__: Proportional to allocated volume (e.g., 2 TB in Standard class = 3,000 max IOPS)
- __Organization__: Datastores of the same type are automatically grouped into datastore clusters
- __Availability__: 99.99% measured monthly, including maintenance windows
- __Required space__: Always plan for 10% free space for backup snapshots and the equivalent of the sum of VM RAMs for .VSWP files

### Deploying a new compute cluster

Order a hypervisor cluster by selecting options adapted to your virtualization needs. Define key characteristics such as the number of hypervisors, cluster type, amount of memory, and required compute resources:

<img src={shivaOrderClucalc_01} />

Select the availability zone:

<img src={shivaOrderClucalc_02} />

Choose the compute blade type:

<img src={shivaOrderClucalc_03} />

You then have the option to select existing networks and propagate them, or create new ones directly at this step, depending on your infrastructure needs. Note that the total number of configurable networks is limited to a maximum of 20:

<img src={shivaOrderClucalc_04} />

You will then get a summary of the selected options before validating your order and can then view your order in progress:

<img src={shivaOrderClucalc_05} />

### Deploying a new storage cluster

In the "__order__" menu, order a __new storage cluster__ for your environment by selecting options that match your needs in terms of capacity, performance, and redundancy. Select the location:

<img src={shivaOrderClusto_01} />

Define the number of datastores to provision in the cluster and their type, following these limits: a minimum of 2 datastores and a maximum of 10 can be configured. Choose datastore types that best meet your needs in terms of performance, capacity, and usage to optimize storage in your environment:

<img src={shivaOrderClusto_02} />

Select the desired storage type from the various available options:

<img src={shivaOrderClusto_03} />

You will then access a complete summary of the options you have selected, allowing you to verify all parameters before finalizing your order:

<img src={shivaOrderClusto_04} />

### Deploying a new datastore within a VMware SDRS cluster

In this example, we will add block storage for a VMware infrastructure.
To add an additional datastore to your SDRS storage cluster, go to the __'Infrastructure'__ submenu then __'VMware'__.
Then choose the VMware stack and availability zone. Then go to the __'Storage'__ submenu.

Choose the SDRS cluster corresponding to the performance characteristics you want and click the __'Add a datastore'__ button located in the table with the list of datastores.

<img src={shivaOrdersIaasSpoolDs} />

__note__:

- *The minimum LUN size that can be activated on a cluster is __500 GiB__.*
- *The performance of a datastore ranges from 500 iops/TiB on average to 15,000 iops/TiB on average. __This is a software throttling performed at the storage controller level__.*
- *The accounting of disk volume consumed by your organization is the sum of all LUNs across all used AZs*.
- *__'order'__ and __'compute'__ rights are required for the account to perform this action.*

### Ordering new networks

The network technology used on the Cloud Temple infrastructure is based on [VPLS](https://en.wikipedia.org/wiki/Virtual_Private_LAN_Service). It allows you to benefit from __Layer 2 networks in continuity between your availability zones within a region__.
It is also possible to share networks between your tenants and terminate them in the hosting zone.
Basically, you can imagine a Cloud Temple network as an 802.1q VLAN available anywhere in your tenant.

Networks on the Cloud Temple platform are __Layer 2 (VLANs)__ based on __VPLS (Virtual Private LAN Service)__ technology. This technology allows you to benefit from __network continuity between your availability zones__ within a region, with guaranteed performance:

- __Intra-AZ latency__: < 3 ms
- __Inter-AZ latency__: < 5 ms

__Network flexibility__:

- A network can be __shared between multiple clusters__ within the same availability zone
- A network can be __propagated between multiple availability zones__ within the same region
- A network can be __shared between different tenants__ of your organization
- A network can be __terminated in the hosting zone__ for your physical equipment
- __Limit__: Maximum of 20 networks per order. You can place multiple successive orders to extend this number according to your needs

Ordering a new network and sharing decisions between your tenants are done in the __'Network'__ menu in the green banner on the left side of the screen. Networks will first be created, then a separate order will be generated to propagate them. You can track the progress of current orders by accessing the "Order" tab in the menu, or by clicking on the information labels that redirect you to active or processing orders.

<img src={shivaOrdersNet_002} />

It is also possible to propagate existing networks or separate the two steps, starting with network creation, then proceeding with propagation later according to your needs. The propagation option is found in the options of the selected network:

<img src={shivaOrdersNet_003} />

Click on the "Propagate" option for an existing network, then select the desired propagation target. This step allows you to define the location or resources where the network should be propagated:

<img src={shivaOrdersNet_004} />

### Deactivating a network

A network can also be deactivated if necessary. This option allows you to temporarily pause access to or use of the network without permanently deleting it, providing flexibility in managing your infrastructure according to your needs.

The deactivation option is found in the options of the selected network.

## Adding additional hypervisors to a compute cluster

A __compute cluster__ is a grouping of hypervisors that must follow these rules:

### For VMware ESXi clusters

__Homogeneity rules__:

- All hosts in a cluster must be of the __same blade type__ (ECO, STANDARD, ADVANCE, PERFORMANCE, etc.)
- All hosts belong __to the same tenant and availability zone__
- __Limit__: Maximum of 32 hypervisors per cluster

__Memory allocation__:

- Each blade is delivered with __all physical memory activated__ from the start
- __Example__: A cluster of 3 STANDARD v3 blades (384 GB physical each) = 3 × 384 GB = 1,152 GB available
- __Recommendation__: Do not exceed 85% memory consumption per blade to avoid VMware compression mechanism and ballooning

__High availability__:

- __Recommended minimum__: 2 hypervisors per cluster to benefit from the 99.99% SLA
- Enable the __VMware HA__ (High Availability) feature for automatic VM restart in case of host failure

Adding hypervisors to a compute cluster is done in the __'IaaS'__ menu in the green banner on the left side of the screen.
In the following example, we will add compute to a hypervisor cluster using VMware technology.

Go to the __'Infrastructure'__ submenu then __'VMware'__. Then choose the VMware stack and availability zone and compute cluster.
In this example, it is __'clu001-ucs12'__. Click the __'Add a host'__ button located in the table with the list of hosts, in the top right.

__note__:

- *__The configuration of a cluster must be homogeneous__. Thus, it is not allowed to mix hypervisor types within a cluster. All blades must be of the same type.*
- *__'order'__ and __'compute'__ rights are required for the account to perform this action.*

<img src={shivaOrdersIaasCpoolEsx} />

### For IaaS Open Source clusters

IaaS Open Source clusters follow similar rules in terms of homogeneity and high availability. Compute resource management is also done via the __'IaaS'__ menu with the same access rights prerequisites.

## Adding additional memory resources to a compute cluster

Memory allocation on compute clusters works as follows:

__Memory allocation principle__:

- All compute blades are delivered with the __maximum physical memory__ installed
- A __software limitation__ is applied at the VMware cluster level to match the billed RAM
- Each blade has __all physical memory activated__ within the cluster

__Cluster sizing__:

- __Minimum__: number of hosts × 128 GB of memory
- __Maximum__: number of hosts × physical memory quantity of the blade

__Example__: For a cluster of three hosts of type `STANDARD v3` (384 GB physical per blade)

- Total available memory: 3 × 384 GB = 1,152 GB

__Important recommendations__:

- Do not exceed __85% average memory consumption per blade__ to avoid ballooning and VMware compression
- Plan disk space for swap files (.VSWP) created at startup of each VM (size = VM memory)

To add RAM to a cluster, simply go to the cluster configuration (as for adding a compute host as previously seen) and click __'Modify memory'__.

<img src={shivaOrdersIaasCpoolMemory} />

__note__:

- *__Machines are delivered with all physical memory__. Memory resource unbridling is only a software activation at the cluster level.*
- *It is not possible to modify the amount of physical memory of a blade type. Take into account the maximum capacity of a blade when creating a cluster.*
- *__'order'__ and __'compute'__ rights are required for the account to perform this action.*
