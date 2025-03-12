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

The tracking of new resource deployment is done in the __'Orders'__ menu accessible in the green sidebar on the left of the screen.

It allows you to view ordered Cloud resources, those in deployment, and any errors within a [Tenant](iam/concepts.md#tenant) of your [Organization](iam/concepts.md#organisations).

<img src={shivaOrdersList} />

*__Note: At this moment, a global view at an organization level of all resources deployed in various tenants is not yet possible.__ This topic will be addressed in 2024 through the implementation of a dedicated portal for the contractor (in the sense of a signatory) and management of their organization.*

Resource deployment or removal is done within each product in the __'IaaS'__ and __'Network'__ menus on the left of the screen in the green sidebar.

It is also possible to directly view deliveries in the Cloud Temple console notifications:

<img src={shivaOrderNotif_001} />

From the orders page, you can see the progress of a delivery and possibly interact with the team by providing comments or details:

<img src={shivaOrderStatus} />

__Note__: __It is not possible to initiate multiple orders of the same type of resource simultaneously. You will need to wait for the current order to be processed and completed before placing a new one. This ensures efficient and organized management of resources within your environment.__

## Order a new availability zone

It is possible to add a new availability zone by accessing the "__Order__" menu. This option allows you to extend your resources and improve the availability and resilience of your applications with just a few clicks:

<img src={shivaOrderAz_01} />

Start by selecting the desired location, first choosing the geographical region, then the corresponding availability zone (AZ) from among those available. This step allows you to adapt the deployment of your resources based on location and the requirements of your infrastructure:

<img src={shivaOrderAz_02} />

Next, proceed to select the desired hypervisor cluster type, choosing the one that best meets your performance and management needs for your cloud infrastructure:

<img src={shivaOrderAz_03} />

Select the number of hypervisors as well as the desired amount of memory to tailor resources to the workload and specific requirements of your cloud environment:

<img src={shivaOrderAz_04} />

Select the number of datastores to provision in the cluster and their types. It is important to note that the maximum number of authorized datastores is 10, with a minimum of 2 required. Each different type of datastore will result in the creation of an additional datastoreCluster. For example, if you choose 2 "live" datastores and 1 "mass" datastore, this will result in the formation of 2 different datastoreClusters:

<img src={shivaOrderAz_05} />

Define the storage size necessary for backup ensuring to allocate capacity equal to your production storage. Consider an average compression rate of 2 to optimize backup space and ensure effective data protection:

<img src={shivaOrderAz_06} />

Select the networks to propagate based on your needs. You also have the option to enable "Internet access" if necessary, by specifying the desired number of IP addresses, with a choice ranging from 1 to a maximum of 8:

<img src={shivaOrderAz_07} />

You will then get a summary of the selected options before validating your order.

<img src={shivaOrderAz_08} />

## Order additional storage resources

The block mode storage allocation logic on compute clusters is TODO

### Deploy a new compute cluster

Place an order for a hypervisor cluster by selecting the options appropriate for your virtualization needs. Define key characteristics such as the number of hypervisors, cluster type, memory amount, and required compute resources:

<img src={shivaOrderClucalc_01} />

Select the availability zone:

<img src={shivaOrderClucalc_02} />

Choose the type of compute blade:

<img src={shivaOrderClucalc_03} />

You then have the option to select existing networks and propagate them, or create new ones directly at this stage, based on your infrastructure needs. Note that the total number of configurable networks is limited to a maximum of 20:

<img src={shivaOrderClucalc_04} />

You will then get a summary of the selected options before validating your order and then you can visualize your ongoing order:

<img src={shivaOrderClucalc_05} />

### Deploy a new storage cluster

In the "__order__" menu, place an order for a __new storage cluster__ for your environment by selecting options that match your capacity, performance, and redundancy needs. Select the location:

<img src={shivaOrderClusto_01} />

Define the number of datastores to provision in the cluster and their type, respecting the following limits: a minimum of 2 datastores and a maximum of 10 can be configured. Choose the types of datastores that best meet your performance, capacity, and usage needs to optimize storage in your environment:

<img src={shivaOrderClusto_02} />

Select the desired storage type from the different options available:

<img src={shivaOrderClusto_03} />

You then access a full summary of the options you have selected, allowing you to check all parameters before definitively validating your order:

<img src={shivaOrderClusto_04} />

### Deploy a new datastore within a VMware SDRS cluster

In this example, we will add block storage for a VMware infrastructure.
To add an additional datastore in your SDRS storage cluster, go to the __'Infrastructure'__ submenu then __'VMWare'__.
Then choose the VMware stack and the availability zone. Next, go to the __'Storage'__ submenu.

Choose the SDRS cluster corresponding to the performance characteristics you wish and click on the __'Add a datastore'__ button located in the table with the list of datastores.

<img src={shivaOrdersIaasSpoolDs} />

__Note__:

- *The size of the smallest activatable LUN on a cluster is __500 GiB__.*
- *The performance of a datastore ranges from 500 iops/TiB on average to 15000 iops/TiB on average. __This is a software throttling done at the storage controllers level__.*
- *The volume accounting of disk consumed by your organization is the sum of all LUNs across all used AZs*.
- *The rights __'order'__ as well as __'compute'__ are necessary for the account to perform this action.*

### Order new networks

The network technology used on the Cloud Temple infrastructure is based on [VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service). It allows you to benefit from __layer 2 networks continuity between your availability zones within a region__.
It is also possible to share networks between your tenants and terminate them in the hosting zone.
Basically, you can imagine a Cloud Temple network as an 802.1q vlan available at any point of your tenant.

TODO

The ordering of a new network and the decisions to share between your tenants are made in the __'Network'__ menu of the green sidebar on the left of the screen. Networks will first be created, then a separate order will be generated to propagate them. You can follow the progress of ongoing orders by accessing the "Order" tab in the menu, or by clicking on the information labels that redirect you to active or in-process orders.

<img src={shivaOrdersNet_002} />

It is also possible to propagate already existing networks or to separate the two steps, starting with the creation of the network, then proceeding with propagation later according to your needs. The propagation option is found in the options of the selected network:

<img src={shivaOrdersNet_003} />

Click on the "Propagate" option for an existing network, then select the desired propagation target. This step allows you to define the location or resources on which the network should be propagated:

<img src={shivaOrdersNet_004} />

### Deactivating a network

A network can also be deactivated if necessary. This option allows you to temporarily pause access or use of the network without permanently deleting it, providing flexibility in managing your infrastructure according to your needs.

The deactivation option is found in the selected network's options.

## Adding additional hypervisors to a compute cluster

The operating logic for compute clusters is TODO

Adding hypervisors to a compute cluster is done in the __'IaaS'__ menu in the green sidebar to the left of the screen.
In the following example, we are going to add compute to a hypervisor cluster using VMware technology.

Go to the __'Infrastructure'__ submenu then __'VMware'__. Then choose the VMware stack and the availability zone and the compute cluster.
In this example, it is the __'clu001-ucs12'__. Click on the __'Add a host'__ button situated in the table with the hosts list, at the top right.

__Note__:

- *__The configuration of a cluster must be homogeneous__. Therefore, it is not allowed to mix hypervisor types within a cluster. All the blades must be of the same type.*
- *The __'order'__ and __'compute'__ rights are necessary for the account to carry out this action.*

<img src={shivaOrdersIaasCpoolEsx} />

## Adding additional memory resources to a compute cluster

The memory allocation logic on compute clusters is TODO

To add RAM to a cluster, simply go to the cluster configuration (same as adding a compute host as seen previously) and click on __'Modify memory'__.

<img src={shivaOrdersIaasCpoolMemory} />

__Note__:

- *__Machines are delivered with the total physical memory__. Unlocking the memory resource is only a software activation at the cluster level.*
- *It is not possible to modify the amount of physical memory of a blade type. Be mindful of the maximum capacity of a blade when creating a cluster.*
- *The __'order'__ and __'compute'__ rights are necessary for the account to carry out this action.*
