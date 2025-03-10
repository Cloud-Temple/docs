---
title: Getting Started Guide
---
import shivaInet_001 from './images/shiva_inet_001.png'
import shivaInet_002 from './images/shiva_inet_002.png'
import shivaInet_003 from './images/shiva_inet_003.png'
import shivaInet_004 from './images/shiva_inet_004.png'
import shivaInet_005 from './images/shiva_inet_005.png'
import shivaInet_008 from './images/shiva_inet_008.png'
import shivaInet_007 from './images/shiva_inet_007.png'


## Management of Your Internet Connectivity

Connectivity management is carried out through the **'Network'** > **'Internet'** menu. This menu centralizes the management of IP addresses, offering two distinct categories:

1. **Public IP Addresses**: they are used to expose your services on the Internet, thereby facilitating incoming and outgoing data exchanges.
2. **Interconnection IP Addresses**: these addresses enable your gateways to direct traffic to the specific Cloud Temple network, ensuring a secure and efficient connection.

Public IP addresses allow Internet access, while interconnection IP addresses used with the BGP4 protocol ensure secure connections between networks. The latter facilitate reliable and secure exchanges between your tenant and the Cloud Temple network. The joint use of these addresses improves traffic management and enhances network security and performance.

Here is the main interface for IP address management:

<img src={shivaInet_001} />

The home tab corresponds to your internal ASN dedicated to your tenant. It notably indicates important information for configuring your BGP connectivity.

### Public IP Addresses

It is possible to view and comment on the blocks and IP addresses associated with your tenant via the IPAM integrated into the Cloud Temple console:

<img src={shivaInet_002} />

Ordering public IP addresses is done through the **'Order Public IPs'** button:

<img src={shivaInet_003} />

Reserving and assigning an IP address is done through the **'Reserve an Address'** button:

<img src={shivaInet_004} />

Modifying or deleting the reservation is done via the **'Actions'** buttons:

<img src={shivaInet_005} />

Deleting a reservation means that the resource becomes available for another use but remains allocated and billed to the client.

On some lines, the **'Action'** button is not available, indicating that the IP addresses are reserved and thus unavailable for use.

### Interconnection IP Addresses

Similarly, you can view and comment on interconnection IP address blocks. You can view the subnets of interconnections with the Cloud Temple network and their usage:

<img src={shivaInet_008} />

You can easily modify their usage, as with public addresses, in the integrated IPAM management:

<img src={shivaInet_007} />