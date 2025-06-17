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

Click then on the __*New Network*__ button.

You must specify the name of your network which will be displayed. By default, all your clusters will access your new network. However, in the __*Advanced Options*__ sub-menu, you can more precisely specify the propagation scope within the tenant between your different clusters.

<img src={shivaNetwork_002} />

All possible actions on your networks are found in the __*Actions*__ menu of each of them:

- Enable sharing of a network between tenants of the same organization.
- Disable sharing of a network between tenants of the same organization.
- Add sharing of a network between tenants of the same organization.
- Delete sharing of a network between tenants of the same organization.
- Visualize the network propagation across all your clusters and hypervisors within a tenant.
- Delete a propagation within a tenant.
- Modify a propagation within a tenant.
- Delete a network.

<img src={shivaNetwork_003} />

#### Viewing network propagation

You can easily view, in the __*Actions*__ menu, the propagation of a network to your different clusters within the same tenant. Choose the "View Propagation" option:

<img src={shivaNetwork_004} />

#### Modifying propagation

The modification of a propagation within a tenant is performed via the "Propagate" option: 
select then the clusters to be included in this propagation.

<img src={shivaNetwork_005} />

__*Note :*__ *Propagation modification is limited to 20 networks per action.*

#### Deleting a network

The deletion of a network within a tenant is performed via the "Delete Network" option:

<img src={shivaNetwork_006} />

### Network sharing between tenants

By default, __networks are only available within a tenant__. You can choose to __share a network between multiple tenants__ for technical reasons or connectivity reasons. It is thus possible to share a network between your __[Tenant](../../../console/iam/concepts/#tenant)__ within the same organization.

Simply activate the sharing as below.

<img src={shivaNetworkVnShareEnabled} />

Once the sharing activation is performed, simply add a sharing as below.

<img src={shivaNetworkVnShared} />

Then, select the target tenant. Note that the list of tenants is dynamic. 
It depends on your organization and your permissions.

<img src={shivaNetworkVnSharedTenant} />

Once the network is shared, it will be visible in the 'Shared Networks' tab from your second tenant.

<img src={shivaNetworkVnSharedWithMe} />