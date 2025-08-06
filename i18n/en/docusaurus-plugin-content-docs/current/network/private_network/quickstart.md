---
title: Getting Started Guide
---
import shivaNetwork_001 from './images/shiva_network_001.png'
import shivaNetwork_002 from './images/shiva_network_002.png'
import shivaNetwork_003 from './images/shiva_network_003.png'
import shivaNetwork_004 from './images/shiva_network_004.png'
import shivaNetwork_005 from './images/shiva_network_005.png'
import shivaNetwork_006 from './images/shiva_network_006.png'
import shivaNetwork_007 from './images/shiva_network_007.png'
import shivaNetwork_008 from './images/shiva_network_008.png'
import shivaNetwork_009 from './images/shiva_network_009.png'
import shivaNetwork_010 from './images/shiva_network_010.png'
import shivaNetworkVnShareEnabled from './images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from './images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from './images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from './images/shiva_network_vn_shared_with_me.png'
import shivaNetwork_order_001 from './images/shiva_order_network_001.png'
import shivaNetworkDeletePropagation from './images/shiva_network_delete_propagation.png'
import shivaNetworkDeletePropagationOrder from './images/shiva_network_delete_propagation_order.png'
import shivaNetworkDeletePropagationOrderValidate from './images/shiva_network_delete_propagation_order_validate.png'

## Regional Private Networks

Ordering private networks within a region is done directly in the Cloud Temple console.

### Within a Tenant

Creating a virtual network is done in the __*Networks*__ menu on the green banner on the left side of the screen.

<img src={shivaNetwork_001} />

Then click on the __*New network*__ button

You must specify the name of your network that will be displayed. By default, all your clusters will access your new network.

It is now possible to create multiple networks simultaneously. Simply click on __*add a network*__.

<img src={shivaNetwork_002} />

In the next steps, you can more precisely specify the scope of propagation within the tenant between your different VMware IaaS or Open IaaS clusters.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Network Order Management

After completing all the steps, your networks are created, then an order is generated to propagate them. You can track your orders:

- Via the __*Orders*__ tab in the main menu

<img src={shivaNetwork_order_001} />

- By clicking on the information labels that redirect to related orders

> __Important:__ It is not possible to generate multiple orders of the same resource type simultaneously. You must wait for the current order to be processed before creating a new one.

All possible actions on your networks are found in the __*Actions*__ menu of each one:

- Enabling network sharing between tenants of the same organization.
- Disabling network sharing between tenants of the same organization.
- Adding network sharing between tenants of the same organization.
- Removing network sharing between tenants of the same organization.
- Graphical visualization of network propagation across all your clusters and hypervisors within a tenant.
- Deleting propagation within a tenant.
- Modifying propagation within a tenant.

> Network deletion is not yet available.

<img src={shivaNetwork_005} />
<img src={shivaNetwork_006} />

#### Viewing Your Network Propagation

You can easily view the propagation of a network to your different clusters within the same tenant in the __*Actions*__ menu.

Choose the *"View propagation"* option:

<img src={shivaNetwork_007} />

#### Modifying Propagation

Modifying propagation within a tenant is done through the __*Propagate*__ option:

Then choose which product (VMware IaaS, Open IaaS, Bare metal) you want to propagate your networks to, then the clusters that should be integrated into this propagation.

<img src={shivaNetwork_008} />
<img src={shivaNetwork_009} />

__*Note:*__ *Propagation modification is limited to 20 networks per action.*

#### Deleting Propagation

Deleting propagation within a tenant is done through the __*Delete propagation*__ option:

Then choose which propagation you want to delete:

<img src={shivaNetworkDeletePropagation} />

An order is then created, as during the initial creation with propagation.

<img src={shivaNetworkDeletePropagationOrder} />
<img src={shivaNetworkDeletePropagationOrderValidate} />

#### Deferred Network Propagation

It is possible to separate network creation and propagation into two distinct steps:

1. __Propagate an existing network__: Click on the __*Propagate*__ action on an already created network
2. __Select the propagation target__: An order is then created, as during the initial creation with propagation.

#### Enabling and Disabling Networks

A network can be temporarily disabled without being deleted and then reactivated.

<img src={shivaNetwork_010} />

### Network Sharing Between Tenants

By default, __networks are only available within a tenant__. You can choose to __share a network between multiple tenants__ for technical reasons or connectivity reasons.
It is thus possible to share a network between your __[Tenants](../../../console/iam/concepts/#tenant)__ within the same organization.

Simply enable sharing as shown below.

<img src={shivaNetworkVnShareEnabled} />

Once sharing is enabled, simply add a share as shown below.

<img src={shivaNetworkVnShared} />

Then, select the target tenant. Note that the tenant list is dynamic.
It depends on your organization and your rights.

<img src={shivaNetworkVnSharedTenant} />

Once the network is shared, it will be visible in the 'Shared Networks' tab from your second tenant.

<img src={shivaNetworkVnSharedWithMe} />

### Viewing Shared Networks

Once networks are propagated, the "Shared Networks" tab allows you to view networks that other tenants in your organization share with you:

<img src={shivaNetwork_007} />
