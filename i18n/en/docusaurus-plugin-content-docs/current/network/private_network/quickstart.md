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

The management of private networks within a region is done directly in the Cloud Temple console.

### Within a tenant

Creating a virtual network is done in the __*Network*__ menu on the green bar on the left of the screen.

<img src={shivaNetwork_001} />

Then click on the __*New Network*__ button

You must specify the name of your network which will be displayed. By default, all your clusters will access your new network.
However, in the __*Advanced Options*__ submenu, you can more precisely specify the scope of propagation within the tenant between your different clusters.

<img src={shivaNetwork_002} />

All possible actions on your networks are found in the __*Actions*__ menu of each of them:

- Enabling the sharing of a network between tenants within the same organization.
- Disabling the sharing of a network between tenants within the same organization.
- Adding the sharing of a network between tenants within the same organization.
- Removing the sharing of a network between tenants within the same organization.
- Graphical visualization of the propagation of a network across all your clusters and hypervisors within a tenant.
- Removing a propagation within a tenant.
- Modifying a propagation within a tenant.
- Deleting a network.

<img src={shivaNetwork_003} />

#### Visualization of Network Propagation

You can easily visualize the propagation of a network to your different clusters within the same tenant in the __*Actions*__ menu.
Choose the *"View Propagation"* option:

<img src={shivaNetwork_004} />

#### Modifying Propagation

Modifying the propagation within a tenant is done using the *"Propagate"* option:
then select the clusters to be included in this propagation.

<img src={shivaNetwork_005} />

__*Note:*__ *Propagation modification is limited to 20 networks per action.*

#### Deleting a Network

Deleting a network within a tenant is done using the *"Delete Network"* option:

<img src={shivaNetwork_006} />

### Network Sharing Between Tenants

By default, __networks are only available within a tenant__. You can choose to __share a network between multiple tenants__ for technical or connectivity reasons.
It is possible to share a network between your __[Tenant](../../../console/iam/concepts/#tenant)__ within the same organization.

Simply enable sharing as shown below.

<img src={shivaNetworkVnShareEnabled} />

Once sharing is enabled, you just need to add a share as shown below.

<img src={shivaNetworkVnShared} />

Then, select the target tenant. Be careful, the list of tenants is dynamic.
It depends on your organization and your rights.

<img src={shivaNetworkVnSharedTenant} />

Once the network is shared, it will be visible in the 'Shared Networks' tab from your second tenant.

<img src={shivaNetworkVnSharedWithMe} />