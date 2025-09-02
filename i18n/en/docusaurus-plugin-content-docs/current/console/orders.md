### Deploy a new storage cluster

In the "__Order__" menu, proceed with the order of a "__new storage cluster__" for your environment by selecting the options that match your needs in terms of capacity, performance, and redundancy. Select the location:

<img src={shivaOrderClusto_01} />

Define the number of datastores to provision in the cluster as well as their type, respecting the following limits: a minimum of 2 datastores and a maximum of 10 can be configured. Choose the datastore types that best meet your needs in terms of performance, capacity, and usage to optimize your environment's storage:

<img src={shivaOrderClusto_02} />

Select the desired storage type from the available options:

<img src={shivaOrderClusto_03} />

You then access a complete summary of the options you have selected, allowing you to verify all parameters before finally confirming your order:

<img src={shivaOrderClusto_04} />

### Deactivation of a network

A network can also be deactivated if necessary. This option allows you to temporarily pause access or use of the network without permanently deleting it, thus offering flexibility in managing your infrastructure according to your needs.

The deactivation option is found in the options of the selected network.

## Concept

The tracking of new resource deployment is done in the __'Commandes'__ menu accessible in the green bar on the left side of the screen.

It allows you to view the ordered Cloud resources, those in deployment, and any potential errors within a [Tenant](iam/concepts.md#tenant) of your [Organization](iam/concepts.md#organizations).

<img src={shivaOrdersList} />

*__Note: At this time, a global view at the organization level of all resources deployed across different tenants is not yet possible.__ This topic will be addressed in 2024 through the implementation of a dedicated portal for the signatory (contractor) and management of their organization.*

The deployment of resources or their deletion is performed in each product within the __'IaaS'__ and __'Réseau'__ menus on the left side of the screen in the green bar.

It is also possible to directly view the deliveries in the notifications of the Cloud Temple console:

<img src={shivaOrderNotif_001} />

From the orders page, you can view the progress status of a delivery and potentially communicate with the team by providing comments or clarifications:

<img src={shivaOrderStatus} />

__Note__: __It is not possible to launch multiple orders of the same resource type simultaneously. You will therefore have to wait for the current order to be processed and finalized before being able to place a new one. This ensures an efficient and orderly management of resources within your environment.__

### Deploy a new compute cluster

Proceed to order a hypervisor cluster by selecting the options that suit your virtualization needs. Define key characteristics such as the number of hypervisors, cluster type, amount of memory, as well as required compute resources:

<img src={shivaOrderClucalc_01} />

Select the availability zone:

<img src={shivaOrderClucalc_02} />

Choose the compute blade type:

<img src={shivaOrderClucalc_03} />

You then have the option to select existing networks and propagate them, or create new ones directly at this stage, depending on your infrastructure needs. Note that the total number of configurable networks is limited to a maximum of 20:

<img src={shivaOrderClucalc_04} />

You then get a summary of the selected options before confirming your order and can then view your ongoing order:

<img src={shivaOrderClucalc_05} />

---
title: Deploy Resources
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

### Order new networks

The network technology used on the Cloud Temple infrastructure is based on [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). It allows you to benefit from __layer 2 networks with continuity between your availability zones within a region__.
It is also possible to share networks between your tenants and terminate them in hosting zones.
Basically, you can imagine a Cloud Temple network as a VLAN 802.1q available anywhere within your tenant.

TODO

Ordering a new network and decisions about sharing between your tenants are done in the __'Network'__ menu of the green bar on the left side of the screen. Networks will first be created, then a separate order will be generated to propagate them. You can track the progress of ongoing orders by accessing the "Order" tab in the menu, or by clicking on the information labels that redirect you to active or processing orders.

<img src={shivaOrdersNet_002} />

It is also possible to propagate existing networks or separate the two steps, starting with the creation of the network and then proceeding with the propagation later according to your needs. The propagation option is found in the options of the selected network:

<img src={shivaOrdersNet_003} />

Click on the "Propagate" option for an existing network, then select the desired propagation target. This step allows you to define the location or resources where the network should be propagated:

<img src={shivaOrdersNet_004} />

## Order additional storage resource

The block storage allocation logic on compute clusters is TODO

### Deploy a new datastore within a VMware SDRS cluster

In this example, we will add block storage for a VMware infrastructure.
To add an additional datastore in your SDRS storage cluster, go to the __'Infrastructure'__ sub-menu then __'VMWare'__.
Select the vmware stack and the availability zone. Then go to the __'Storage'__ sub-menu.

Select the SDRS cluster corresponding to the performance characteristics you want and click the __'Add a datastore'__ button located in the table with the list of datastores.

<img src={shivaOrdersIaasSpoolDs} />

__note__:

- *The minimum activable LUN size on a cluster is __500 GiB__.*
- *The performance of a datastore ranges from an average of 500 IOPS/TE to 15000 IOPS/TE on average. __This is a software limitation implemented at the storage controllers level__.*
- *The accounting of the disk volume consumed by your organization is the sum of all LUNs across all used AZs.*
- *The __'order'__ and __'compute'__ rights are required for the account to perform this action.*

## Add additional hypervisors to a compute cluster

The operating logic of compute clusters is TODO

Adding hypervisors to a compute cluster is done in the __'IaaS'__ menu in the green bar on the left side of the screen.
In the following example, we will add compute to a hypervisor cluster using the VMware technology.

Go to the __'Infrastructure'__ sub-menu then __'VMWare'__. Select the VMware stack, availability zone, and compute cluster.
In this example, it is the __'clu001-ucs12'__. Click the __'Add a host'__ button located in the table with the list of hosts, top right.

__note__ :

- *__A cluster's configuration must be homogeneous__. It is not allowed to mix hypervisor types within a cluster. All blades must be of the same type.*
- *The rights __'order'__ and __'compute'__ are required for the account to perform this action.*

<img src={shivaOrdersIaasCpoolEsx} />

## Order a new Availability Zone

It is possible to add a new Availability Zone by accessing the "__Commande__" menu. This option allows you to expand your resources and improve the availability and resilience of your applications with just a few clicks:

<img src={shivaOrderAz_01} />

Start by selecting the desired location, first choosing the geographic region, then the corresponding Availability Zone (AZ) from the available options. This step allows you to adapt the deployment of your resources based on location and infrastructure requirements:

<img src={shivaOrderAz_02} />

Next, select the desired hypervisor cluster type, choosing the one that best meets the performance and management needs of your cloud infrastructure:

<img src={shivaOrderAz_03} />

Select the number of hypervisors as well as the desired amount of memory to adapt resources to the workload and specific requirements of your cloud environment:

<img src={shivaOrderAz_04} />

Select the number of datastores to provision in the cluster as well as their types. It is important to note that the maximum number of allowed datastores is 10, with a minimum of 2 datastores required. Each different datastore type will result in the creation of an additional datastoreCluster. For example, if you choose 2 "live" type datastores and 1 "mass" type datastore, this will result in the formation of 2 distinct datastoreClusters:

<img src={shivaOrderAz_05} />

Define the required storage size for backups, ensuring capacity equivalent to your production storage. Take into account an average compression rate of 2 to optimize backup space and ensure effective data protection:

<img src={shivaOrderAz_06} />

Select the networks to propagate based on your needs. You also have the option to enable the "Internet Access" feature if required, by defining the desired number of IP addresses, with a choice between 1 and a maximum of 8:

<img src={shivaOrderAz_07} />

You then get a summary of the selected options before validating your order.

<img src={shivaOrderAz_08} />

## Add Additional Memory Resource to a Compute Cluster

The memory allocation logic on compute clusters is TODO

To add RAM to a cluster, simply go to the cluster configuration (as for adding a compute host as previously shown) and click on __'Modify Memory'__.

<img src={shivaOrdersIaasCpoolMemory} />

__nota__ :

- *__Machines are delivered with the entire physical memory__. Memory resource unblocking is only a software activation at the cluster level.*
- *It is not possible to modify the amount of physical memory of a blade type. Be sure to consider the maximum capacity of a blade when creating a cluster.*
- *The __'order'__ and __'compute'__ rights are required for the account to perform this action.*
