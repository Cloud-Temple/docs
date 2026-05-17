---
title: Deploy resources
---
import shivaOrdersList from '@site/docs/console/images/shiva_orders_list.png'
import shivaOrderNotif_001 from '@site/docs/console/images/shiva_order_notif_001.png'
import shivaOrderStatus from '@site/docs/console/images/shiva_order_status.png'
import shivaOrderAz_01 from '@site/docs/console/images/shiva_order_az_01.png'
import shivaOrderAz_02 from '@site/docs/console/images/shiva_order_az_02.png'
import shivaOrderAz_03 from '@site/docs/console/images/shiva_order_az_03.png'
import shivaOrderAz_04 from '@site/docs/console/images/shiva_order_az_04.png'
import shivaOrderAz_05 from '@site/docs/console/images/shiva_order_az_05.png'
import shivaOrderAz_06 from '@site/docs/console/images/shiva_order_az_06.png'
import shivaOrderAz_07 from '@site/docs/console/images/shiva_order_az_07.png'
import shivaOrderAz_08 from '@site/docs/console/images/shiva_order_az_08.png'
import shivaOrderClucalc_01 from '@site/docs/console/images/shiva_order_clucalc_01.png'
import shivaOrderClucalc_02 from '@site/docs/console/images/shiva_order_clucalc_02.png'
import shivaOrderClucalc_03 from '@site/docs/console/images/shiva_order_clucalc_03.png'
import shivaOrderClucalc_04 from '@site/docs/console/images/shiva_order_clucalc_04.png'
import shivaOrderClucalc_05 from '@site/docs/console/images/shiva_order_clucalc_05.png'
import shivaOrderClusto_01 from '@site/docs/console/images/shiva_order_clusto_01.png'
import shivaOrderClusto_02 from '@site/docs/console/images/shiva_order_clusto_02.png'
import shivaOrderClusto_03 from '@site/docs/console/images/shiva_order_clusto_03.png'
import shivaOrderClusto_04 from '@site/docs/console/images/shiva_order_clusto_04.png'
import shivaOrdersIaasSpoolDs from '@site/docs/console/images/shiva_orders_iaas_spool_ds.png'
import shivaOrdersNet_002 from '@site/docs/console/images/shiva_orders_net_002.png'
import shivaOrdersNet_003 from '@site/docs/console/images/shiva_orders_net_003.png'
import shivaOrdersNet_004 from '@site/docs/console/images/shiva_orders_net_004.png'
import shivaOrdersIaasCpoolEsx from '@site/docs/console/images/shiva_orders_iaas_cpool_esx.png'
import shivaOrdersIaasCpoolMemory from '@site/docs/console/images/shiva_orders_iaas_cpool_memory.png'

## Concept

Deployment tracking for new resources is performed in the __'Orders'__ menu accessible in the green banner on the left side of the screen.

It allows you to view ordered Cloud resources, those currently being deployed, and any errors within a [Tenant](iam/concepts.md#tenant) of your [Organization](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Note: At this time, a global view at the organization level of all resources deployed across different tenants is not yet available.__ This topic will be addressed later through the implementation of a dedicated portal for the sponsor (in the signatory sense) and the management of their organization.*

Resource deployment or deletion is performed in each product via the __'IaaS'__ and __'Network'__ menus on the left side of the screen in the green banner.

It is also possible to view deliveries directly in the notifications of the Cloud Temple console:

<img src={shivaOrderNotif_001} />

From the orders page, you can view the progress status of a delivery and potentially communicate with the team by providing comments or clarifications:

<img src={shivaOrderStatus} />

__Note__ : __It is not possible to launch multiple orders for the same resource type simultaneously. You must therefore wait for the current order to be processed and finalized before placing a new one. This ensures efficient and orderly management of resources within your environment.__

## Order a new availability zone

You can add a new availability zone by accessing the "__Order__" menu. This option allows you to scale your resources and improve the availability and resilience of your applications with just a few clicks:

<img src={shivaOrderAz_01} />

Start by selecting the desired location, first choosing the geographic region, and then the corresponding availability zone (AZ) from the available options. This step allows you to tailor the deployment of your resources based on location and your infrastructure requirements:

<img src={shivaOrderAz_02} />

Next, proceed to select the desired hypervisor cluster type, choosing the one that best meets the performance and management needs of your cloud infrastructure:

<img src={shivaOrderAz_03} />

Next, select the number of hypervisors as well as the desired amount of memory, to tailor the resources to the workload and specific requirements of your cloud environment:

<img src={shivaOrderAz_04} />

Next, select the number of datastores to provision in the cluster as well as their types. Please note that the maximum number of allowed datastores is 10, with a minimum of 2 required datastores. Each different datastore type will result in the creation of an additional datastoreCluster. For example, if you choose 2 "live" type datastores and 1 "mass" type datastore, this will result in the formation of 2 distinct datastoreClusters:

<img src={shivaOrderAz_05} />

Define the storage size required for backup, ensuring you allocate a capacity equivalent to that of your production storage. Consider an average compression ratio of 2 to optimize backup space and ensure effective data protection:

<img src={shivaOrderAz_06} />

Select the networks to propagate based on your needs. You also have the option to enable the "Internet Access" feature if necessary, by specifying the desired number of IP addresses, with a choice ranging from 1 to a maximum of 8:

<img src={shivaOrderAz_07} />

You will then see a summary of the selected options before validating your order.

<img src={shivaOrderAz_08} />

## Ordering additional storage resources

The block storage allocation logic on compute clusters relies on __IBM SVC (San Volume Controller)__ and __IBM FlashSystem__ technologies. Storage is organized into __LUNs of at least 500 GiB__, presented according to the technology used :

- For __VMware__ : in the form of __datastores__ grouped into __SDRS clusters (Storage Distributed Resource Scheduler)__
- For __Bare Metal__ : in the form of __volumes__
- For __Open IaaS__ : in the form of __Storage Repository (SR)__

Each datastore inherits a __performance class__ defined in IOPS/TiB (from 500 to 15,000 IOPS/TiB for FLASH, or without guarantee for MASS STORAGE). IOPS limiting is applied __at the datastore level__ (and not per VM), which means that all virtual machines sharing the same datastore share the allocated IOPS quota.

__Key points to remember__ :

- __Minimum size__ : 500 GiB per LUN
- __Performance__ : Proportional to the allocated volume, __up to an absolute physical ceiling per LUN__ (e.g., 2 TiB in Standard class = 3,000 IOPS, but a 10 TiB LUN will cap at a maximum of 30,000 IOPS). This ceiling varies by class (10,000 IOPS / 512 MiB/s for the Essential class, and 30,000 IOPS / 1024 MiB/s for higher classes).
- __Organization__ : Datastores of the same type are automatically grouped into datastore clusters
- __Availability__ : 99.99% measured monthly, maintenance windows included
- __Required space__ : Always allow 10% free space for backup snapshots and the equivalent of the sum of VM RAMs for .VSWP files

### Deploy a new compute cluster

Proceed to order a hypervisor cluster by selecting the options that best suit your virtualization needs. Define key features such as the number of hypervisors, cluster type, memory capacity, and required compute resources:

<img src={shivaOrderClucalc_01} />

Select the availability zone:

<img src={shivaOrderClucalc_02} />

Choose the compute blade type:

<img src={shivaOrderClucalc_03} />

You can then select existing networks to propagate, or create new ones directly at this step, depending on your infrastructure requirements. Note that the total number of configurable networks is limited to a maximum of 20:

<img src={shivaOrderClucalc_04} />

You will then receive a summary of the selected options before validating your order, and you can subsequently view your order in progress:

<img src={shivaOrderClucalc_05} />

### Deploy a new storage cluster

In the "__command__" menu, proceed to order a __new storage cluster__ for your environment by selecting the options that match your capacity, performance, and redundancy requirements. Select the location:

<img src={shivaOrderClusto_01} />

Define the number of datastores to provision in the cluster as well as their type, respecting the following limits: a minimum of 2 datastores and a maximum of 10 can be configured. Choose the datastore types that best meet your performance, capacity, and usage requirements to optimize your environment's storage:

<img src={shivaOrderClusto_02} />

Select the desired storage type from the available options:

<img src={shivaOrderClusto_03} />

You will then access a complete summary of the options you have selected, allowing you to verify all parameters before finally confirming your order:

<img src={shivaOrderClusto_04} />

### Deploy a new datastore within a VMware SDRS cluster

In this example, we will add block storage for a VMware infrastructure.
To add an additional datastore to your SDRS storage cluster, go to the __'Infrastructure'__ submenu and then __'VMWare'__.
Then select the VMware stack and the availability zone. Next, go to the __'Storage'__ submenu.

Select the SDRS cluster that matches the performance characteristics you want and click the __'Add a datastore'__ button located in the table
with the list of datastores.

<img src={shivaOrdersIaasSpoolDs} />

__note__ :

- *The minimum size of an activatable LUN on a cluster is __500 GiB__.*
- *Datastore performance ranges from an average of 500 IOPS/TiB up to an average of 15,000 IOPS/TiB. __This is a software limit enforced at the storage controller level__, subject to an absolute hardware limit of 30,000 IOPS and 1,024 MB/s maximum per LUN.*
- *The disk volume accounting for your organization is the sum of all LUNs across all used AZs.*
- *The __'order'__ and __'compute'__ permissions are required for the account to perform this action.*

### Order new networks

The network technology used on the Cloud Temple infrastructure is based on [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). It allows you to have __continuous level 2 networks between your availability zones within a region__.
It is also possible to share networks between your tenants and terminate them in a hosting zone.
Basically, you can imagine a Cloud Temple network as an 802.1q VLAN available at every point of your tenant.

Networks on the Cloud Temple platform are __level 2 (VLANs)__ based on __VPLS (Virtual Private LAN Service)__ technology. This technology allows you to benefit from __network continuity between your availability zones__ within a region, with guaranteed performance:

- __Intra-AZ Latency__: < 3 ms
- __Inter-AZ Latency__: < 5 ms

__Network Flexibility__:

- A network can be __shared between multiple clusters__ within the same availability zone
- A network can be __propagated across multiple availability zones__ within the same region
- A network can be __shared between different tenants__ of your organization
- A network can be __terminated in a hosting zone__ for your physical equipment
- __Limit__: Maximum of 20 networks per order. You can place multiple successive orders to extend this number according to your needs

Ordering a new network and making sharing decisions between your tenants are performed in the __'Network'__ menu of the green banner on the left side of the screen. Networks will first be created, then a separate order will be generated to propagate them. You can track the progress of ongoing orders by accessing the "Order" tab in the menu, or by clicking on the information labels that redirect you to active or processing orders.

<img src={shivaOrdersNet_002} />

It is also possible to propagate already existing networks or to separate the two steps, starting with network creation, then proceeding with propagation later as needed. The propagation option is located in the options for the selected network:

<img src={shivaOrdersNet_003} />

Click the "Propagate" option for an already existing network, then select the desired propagation target. This step allows you to define the location or resources where the network must be propagated:

<img src={shivaOrdersNet_004} />

### Disabling a network

A network can also be disabled if necessary. This option allows you to temporarily pause access to or use of the network without permanently deleting it, thereby providing flexibility in managing your infrastructure according to your needs.

The disable option is located in the options for the selected network. '

## Add additional hypervisors to a compute cluster

A __compute cluster__ is a grouping of hypervisors that must comply with the following rules:

### For VMware ESXi clusters

__Homogeneity rules__ :

- All hosts in a cluster must be of the __same blade type__ (ECO, STANDARD, ADVANCE, PERFORMANCE, etc.)
- All hosts must belong to the __same tenant and the same availability zone__
- __Limit__ : Maximum of 32 hypervisors per cluster

__Memory allocation__ :

- Each blade is delivered with __all physical memory enabled__ from the start
- __Example__ : A cluster of 3 STANDARD v3 blades (384 GB physical each) = 3 × 384 GB = 1152 GB available
- __Recommendation__ : Do not exceed 85% memory consumption per blade to avoid VMware compression mechanisms and ballooning

__High availability__ :

- __Recommended minimum__ : 2 hypervisors per cluster to benefit from the 99.99% SLA
- Enable the __VMware HA__ (High Availability) feature for automatic VM restart in case of host failure

Adding hypervisors to a compute cluster is done in the __'IaaS'__ menu in the green banner on the left side of the screen.
In the following example, we will add compute resources to a hypervisor cluster using VMware technology.

Navigate to the __'Infrastructure'__ submenu, then __'VMWare'__. Then select the VMware stack, availability zone, and compute cluster.
In this example, it is __'clu001-ucs12'__. Click the __'Add a host'__ button located in the hosts list table, at the top right.

__note__ :

- *__A cluster's configuration must be homogeneous__. Therefore, mixing hypervisor types within a cluster is not allowed. All blades must be of the same type.*
- *The __'order'__ and __'compute'__ permissions are required for the account to perform this action.*

<img src={shivaOrdersIaasCpoolEsx} />

### For Open IaaS clusters

Open IaaS clusters follow similar rules regarding homogeneity and high availability. Compute resource management is also handled via the __'OpenIaaS'__ menu, with the same access rights prerequisites.

## Adding additional memory resources to a compute cluster

Memory allocation on compute clusters works as follows:

__Memory allocation principle__:

- All compute blades are delivered with the __maximum physical memory__ installed
- A __software limitation__ is applied at the VMware cluster level to match the billed RAM
- Each blade has __the full amount of physical memory enabled__ within the cluster

__Cluster sizing__:

- __Minimum__: number of hosts × 128 GB of memory
- __Maximum__: number of hosts × physical memory quantity of the blade

__Example__: For a cluster of three `STANDARD v3` type hosts (384 GB physical per blade)

- Total available memory: 3 × 384 GB = 1152 GB

__Important recommendations__:

- Do not exceed __85% average memory consumption per blade__ to avoid VMware ballooning and compression
- Allocate disk space for swap files (.VSWP) created at each VM startup (size = VM memory)

To add RAM to a cluster, simply navigate to the cluster configuration (as for adding a compute host as previously seen) and click on __'Modify memory'__.

<img src={shivaOrdersIaasCpoolMemory} />

__note__:

- *__Machines are delivered with the full physical memory__. Enabling the memory resource is merely a software activation at the cluster level.*
- *It is not possible to modify the physical memory quantity of a blade type. Be sure to take into account the maximum capacity of a blade when creating a cluster.*
- *The __'order'__ and __'compute'__ permissions are required for the account to perform this action.*