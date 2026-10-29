---
title: Getting Started Guide
---
import shivaNetwork_001 from '@site/docs/network/private_network/images/shiva_network_001.png'
import shivaNetwork_002 from '@site/docs/network/private_network/images/shiva_network_002.png'
import shivaNetwork_003 from '@site/docs/network/private_network/images/shiva_network_003.png'
import shivaNetwork_004 from '@site/docs/network/private_network/images/shiva_network_004.png'
import shivaNetwork_005 from '@site/docs/network/private_network/images/shiva_network_005.png'
import shivaNetwork_006 from '@site/docs/network/private_network/images/shiva_network_006.png'
import shivaNetwork_007 from '@site/docs/network/private_network/images/shiva_network_007.png'
import shivaNetwork_008 from '@site/docs/network/private_network/images/shiva_network_008.png'
import shivaNetwork_009 from '@site/docs/network/private_network/images/shiva_network_009.png'
import shivaNetwork_010 from '@site/docs/network/private_network/images/shiva_network_010.png'
import shivaNetworkVnShareEnabled from '@site/docs/network/private_network/images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from '@site/docs/network/private_network/images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from '@site/docs/network/private_network/images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from '@site/docs/network/private_network/images/shiva_network_vn_shared_with_me.png'
import shivaNetwork_order_001 from '@site/docs/network/private_network/images/shiva_order_network_001.png'
import shivaNetworkDeletePropagation from '@site/docs/network/private_network/images/shiva_network_delete_propagation.png'
import shivaNetworkDeletePropagationOrder from '@site/docs/network/private_network/images/shiva_network_delete_propagation_order.png'
import shivaNetworkDeletePropagationOrderValidate from '@site/docs/network/private_network/images/shiva_network_delete_propagation_order_validate.png'

## Regional Private Networks

The ordering of private networks within a region is done directly in the Cloud Temple console.

### Within a tenant

The creation of a virtual network is done in the __*Network*__ > __*Private Backbone*__ menu on the green panel on the left side of the screen.

<img src={shivaNetwork_001} />

Then click on the __*New network*__ button.

You must specify the name of your network, which will be displayed. By default, all of your clusters will have access to your new network.

It is now possible to create multiple networks simultaneously. Simply click on __*add a network*__.

<img src={shivaNetwork_002} />

In the next steps, you will be able to more precisely specify the scope of propagation within the tenant between your different IaaS VMware or Open IaaS clusters.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Network order management

After completing all the steps, your networks are created, and then an order is generated to propagate them. You can track your orders:

- Via the __*Orders*__ tab in the main menu

<img src={shivaNetwork_order_001} />

- By clicking on the information labels that redirect to the related orders

> __Important:__ It is not possible to generate multiple orders of the same resource type simultaneously. You must wait for the current order to be processed before creating a new one.

All possible actions on your networks are found in the __*Actions*__ menu of each one:

- Enabling network sharing between tenants of the same organization.
- Disabling network sharing between tenants of the same organization.
- Adding a network sharing between tenants of the same organization.
- Removing a network sharing between tenants of the same organization.
- Graphical visualization of network propagation across all of your clusters and hypervisors within a tenant.
- Removing a propagation within a tenant.
- Modifying a propagation within a tenant.

> Network deletion is not yet available.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Visualization of your network propagation

You can easily visualize in the __*Actions*__ menu the propagation of a network to your different clusters within the same tenant.

Choose the *"Visualize propagation"* option:

<img src={shivaNetwork_007} />

#### Modifying propagation

Modifying a propagation within a tenant is done via the __*Propagate*__ option:

Then choose which product (IaaS VMware, Open IaaS, Bare metal) you want to propagate your networks to, and then the clusters to be included in this propagation.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Note:*__ *Propagation modification is limited to 20 networks per action.*

#### Removing propagation

Removing a propagation within a tenant is done via the __*Remove a propagation*__ option:

Then choose which propagation you want to remove:

<img src={shivaNetworkDeletePropagation} />

An order is then created, as during the initial creation with propagation.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Deferred network propagation

It is possible to separate the creation and propagation of networks into two distinct steps:

1. __Propagate an existing network__: Click on the __*Propagate*__ action on an already created network
2. __Select the propagation target__: An order is then created, as during the initial creation with propagation.

#### Enabling and disabling networks

A network can be temporarily disabled without being deleted and then re-enabled later.

<img src={shivaNetwork_010} />

### Network sharing between tenants

By default, __networks are only available within a tenant__. You can choose to __share a network between multiple tenants__ for technical reasons or connectivity reasons.
It is thus possible to share a network between your __[Tenant](../../console/iam/concepts.md#tenant)__ within the same organization.

Simply enable sharing as shown below.

<img src={shivaNetworkVnShareEnabled} />

Once sharing is enabled, you just need to add a sharing as shown below.

<img src={shivaNetworkVnShared} />

Then, select the target tenant. Note that the list of tenants is dynamic.
It depends on your organization and your permissions.

<img src={shivaNetworkVnSharedTenant} />

Once the network is shared, it will be visible in the 'Shared Networks' tab from your second tenant.

<img src={shivaNetworkVnSharedWithMe} />

### Visualization of shared networks

Once the networks are propagated, the "Shared Networks" tab allows you to visualize the networks that other tenants in your organization are sharing with you:

<img src={shivaNetwork_007} />
