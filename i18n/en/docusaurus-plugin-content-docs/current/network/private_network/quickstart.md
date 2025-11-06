---
title: Getting Started Guide
---
import shivaNetwork_001 from './images/shiva_network_001.png';
import shivaNetwork_002 from './images/shiva_network_002.png';
import shivaNetwork_003 from './images/shiva_network_003.png';
import shivaNetwork_004 from './images/shiva_network_004.png';
import shivaNetwork_005 from './images/shiva_network_005.png';
import shivaNetwork_006 from './images/shiva_network_006.png';
import shivaNetwork_007 from './images/shiva_network_007.png';
import shivaNetwork_008 from './images/shiva_network_008.png';
import shivaNetwork_009 from './images/shiva_network_009.png';
import shivaNetwork_010 from './images/shiva_network_010.png';
import shivaNetworkVnShareEnabled from './images/shiva_network_vn_share_enabled.png';
import shivaNetworkVnShared from './images/shiva_network_vn_shared.png';
import shivaNetworkVnSharedTenant from './images/shiva_network_vn_shared_tenant.png';
import shivaNetworkVnSharedWithMe from './images/shiva_network_vn_shared_with_me.png';
import shivaOrderNetwork_001 from './images/shiva_order_network_001.png';
import shivaNetworkDeletePropagation from './images/shiva_network_delete_propagation.png';
import shivaNetworkDeletePropagationOrder from './images/shiva_network_delete_propagation_order.png';
import shivaNetworkDeletePropagationOrderValidate from './images/shiva_network_delete_propagation_order_validate.png';

### Private Regional Networks

The management of private networks within a region is directly handled through the Cloud Temple console.

### Within a Tenant

The creation of a virtual network takes place in the *Networks* menu on the top left bar of the screen.

<img src={shivaNetwork_001} />

Clicking on the button *New Network*

You need to specify the name of your network, which will be displayed. By default, all of your clusters will access your new network.

It is now possible to create multiple networks simultaneously. Simply click on *Add Network*.

<img src={shivaNetwork_002} />

In the following steps, you can specify more precisely the scope of propagation within the tenant between your different IaaS VMware or Open IaaS clusters.

<div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
  <img src={shivaNetwork_003} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
  <img src={shivaNetwork_004} style={{flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain'}} />
</div>

### Network Command Management

Once all steps are completed, your networks are created, and a command is generated to propagate them. You can track your commands:

- Through the __*Commands*__ tab in the main menu

<img src={shivaOrderNetwork_001} alt="Shiva Network Order 001" />

- By clicking on informational labels that redirect to related commands

> **Important:** It is not possible to generate multiple commands of the same resource type simultaneously. You must wait for the current command to be processed before creating a new one.

All possible actions on your networks are available in the __*Actions*__ menu of each one:

- Enabling or disabling network sharing between tenants within the same organization.
- Disabling network sharing between tenants within the same organization.
- Adding a network sharing between tenants within the same organization.
- Removing a network sharing between tenants within the same organization.
- Graphically visualizing the propagation of a network across all your clusters and hypervisors within a tenant.
- Removing network propagation within a tenant.
- Modifying network propagation within a tenant.

> Network removal is currently not available.

<img src={shivaNetwork_005} alt="Shiva Network 005" />
<img src={shivaNetwork_006} alt="Shiva Network 006" />

#### Visualization of Network Propagation

You can easily visualize a network's propagation to your various clusters within the same tenant by selecting the option *"Visualize Propagation"* from the menu __*Actions*__:

<img src={shivaNetwork_007} />

#### Modification of Propagation

Modifying a propagation within a tenant is done via the __Propager__ option:

Next, select the target product (IaaS VMware, Open IaaS, Bare metal) for your network propagation, and ensure that the clusters are integrated into this propagation.

<img src={shivaNetwork_008} alt="Propagation" />
<img src={shivaNetwork_009} alt="Propagation" />

__Note:__ *Propagation modification is limited to 20 networks per action.*

#### Suppression of Propagation

The removal of a propagation within a tenant is carried out through the option __*Remove Propagation*:

You then select which propagation you wish to remove:

<img src={shivaNetworkDeletePropagation} alt="Shiva Network Delete Propagation" />

A command is subsequently generated, similar to the initial creation with propagation.

<img src={shivaNetworkDeletePropagationOrder} alt="Shiva Network Delete Propagation Order" />
<img src={shivaNetworkDeletePropagationOrderValidate} alt="Shiva Network Delete Propagation Order Validate" />

#### Delayed Network Propagation

It is feasible to separate the creation and propagation of networks into two distinct stages:

1. **Propagate an existing network**: Click on the action __*Propagate*__ for a network that has already been created.
2. **Select the target for propagation**: A command is then generated, similar to how it was done initially with propagation.

#### Activation and Deactivation of Networks

A network can be temporarily deactivated without being deleted, and then reactivated later.

<img src={shivaNetwork_010} alt="Shiva Network" />

### Network Sharing Between Tenants

By default, **networks are only available within a single tenant**. You can choose to **share a network across multiple tenants** for technical or connectivity reasons. This allows you to share a network between your **[Tenant](../console/iam/concepts.md#tenant)** within the same organization.

To achieve this, simply enable sharing as shown below:

<img src={shivaNetworkVnShareEnabled} />

After enabling sharing, add a share as follows:

<img src={shivaNetworkVnShared} />

Next, select the target tenant. Note that the list of tenants is dynamic and depends on your organization and your permissions.

<img src={shivaNetworkVnSharedTenant} />

Once network sharing is enabled, it will be visible in the 'Shared Networks' tab from your second tenant.

<img src={shivaNetworkVnSharedWithMe} />

### Visualization of Shared Networks

After propagating the networks, the "Shared Networks" tab allows you to visualize the networks that other tenants within your organization share with you:

<img src={shivaNetwork_007} alt="Visualisation des réseaux partagés" />
