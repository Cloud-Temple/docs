---
title: Getting Started Guide
---
import shivaNetwork_001 from './images/shiva_network_001.jpg'
import shivaNetwork_002 from './images/shiva_network_002.jpg'
import shivaNetwork_003 from './images/shiva_network_003.jpg'
import shivaNetwork_004 from './images/shiva_network_004.jpg'
import shivaNetwork_005 from './images/shiva_network_005.jpg'
import shivaNetwork_006 from './images/shiva_network_006.jpg'
import shivaNetworkVnShareEnabled from './images/shiva_network_vn_share_enabled.png'
import shivaNetworkVnShared from './images/shiva_network_vn_shared.png'
import shivaNetworkVnSharedTenant from './images/shiva_network_vn_shared_tenant.png'
import shivaNetworkVnSharedWithMe from './images/shiva_network_vn_shared_with_me.png'

## Regional Private Networks

Private networks within a region can be ordered directly from the Cloud Temple console.

### Within a Tenant

Creating a virtual network is done in the __*Network*__ menu on the green banner on the left side of the screen.

<img src={shivaNetwork_001} />

Then click on the __*New network*__ button.

You must specify the name of your network that will be displayed. By default, all your clusters will have access to your new network.
However, in the __*Advanced Options*__ submenu, you can specify more precisely the scope of propagation within the tenant among your different clusters.

<img src={shivaNetwork_002} />

All possible actions on your networks can be found in the __*Actions*__ menu for each of them:

- Enabling network sharing between tenants of the same organization.
- Disabling network sharing between tenants of the same organization.
- Adding a network share between tenants of the same organization.
- Removing a network share between tenants of the same organization.
- Graphical visualization of network propagation across all your clusters and hypervisors within a tenant.
- Removing a propagation within a tenant.
- Modifying a propagation within a tenant.
- Deleting a network.

<img src={shivaNetwork_003} />

#### Visualizing Network Propagation

You can easily visualize the propagation of a network to your different clusters within the same tenant in the __*Actions*__ menu.
Choose the *"View propagation"* option:

<img src={shivaNetwork_004} />

#### Modifying Propagation

Modifying a propagation within a tenant is done through the *"Propagate"* option:
then choose the clusters that should be included in this propagation.

<img src={shivaNetwork_005} />

__*Note:*__ *Propagation modification is limited to 20 networks per action.*

#### Deleting a Network

Deleting a network within a tenant is done through the *"Delete network"* option:

<img src={shivaNetwork_006} />

### Network Sharing Between Tenants

By default, __networks are only available within a tenant__. You can choose to __share a network between multiple tenants__ for technical or connectivity reasons.
It is thus possible to share a network between your __[Tenants](../../../console/iam/concepts/#tenant)__ within the same organization.

To do this, simply enable sharing as shown below.

<img src={shivaNetworkVnShareEnabled} />

Once sharing is enabled, you just need to add a share as shown below.

<img src={shivaNetworkVnShared} />

Then, select the target tenant. Please note that the list of tenants is dynamic.
It depends on your organization and your permissions.

<img src={shivaNetworkVnSharedTenant} />

Once the network is shared, it will be visible in the 'Shared Networks' tab from your second tenant.

<img src={shivaNetworkVnSharedWithMe} />
