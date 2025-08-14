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

The management of private networks within a region is performed directly in the Cloud Temple console.

### Within a tenant

The creation of a virtual network is done in the __*Network*__ menu on the green bar on the left side of the screen.

<img src={shivaNetwork_001} />

Click then on the __*New network*__ button.

You must specify the name of your network which will be displayed. By default, all your clusters will access your new network.  
However, in the __*Advanced Options*__ sub-menu, you can finely specify the propagation scope within the tenant between your different clusters.

<img src={shivaNetwork_002} />

All possible actions on your networks are found in the __*Actions*__ menu of each of them:

- Activation of sharing a network between tenants of the same organization.
- Deactivation of sharing a network between tenants of the same organization.
- Addition of sharing a network between tenants of the same organization.
- Removal of sharing a network between tenants of the same organization.
- Graphical visualization of the propagation of a network across all your clusters and hypervisors within a tenant.
- Removal of a propagation within a tenant.
- Modification of a propagation within a tenant.
- Deletion of a network.

<img src={shivaNetwork_003} />

#### Visualization of the propagation of your networks

You can easily in the __*Actions*__ menu visualize the propagation of a network to your different clusters within the same tenant.
Select the option *"Visualize the propagation"* :

<img src={shivaNetwork_004} />

#### Modification of the propagation

Modifying a propagation within a tenant is done using the *"Propagate"* option:
then select the clusters to be included in this propagation.

<img src={shivaNetwork_005} />

__*Note:*__ *Propagation modification is limited to 20 networks per action.*

#### Deleting a network

Deleting a network within a tenant is performed using the *Delete network* option:

<img src={shivaNetwork_006} />

### Network Sharing Between Tenants

By default, __networks are only available within a tenant__. You can choose to __share a network between multiple tenants__ for technical reasons or connectivity reasons.  
It is thus possible to share a network between your __[Tenant](../../console/iam/concepts.md#tenant)__ within the same organization.

All you need to do is enable the sharing as shown below.

<img src={shivaNetworkVnShareEnabled} />

Once the sharing activation is completed, you just need to add a sharing as shown below.

<img src={shivaNetworkVnShared} />

Then, select the target tenant. Note, the list of tenants is dynamic. It depends on your organization and your permissions.

<img src={shivaNetworkVnSharedTenant} />

Once the network is shared, it will be visible in the 'Shared Networks' tab from your second tenant.

<img src={shivaNetworkVnSharedWithMe} />