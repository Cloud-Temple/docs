---
title: Concepts
---
## What is the Cloud Temple Bastion?

The Cloud Temple Bastion is a managed service that provides you with secure RDP or SSH connectivity from the Cloud Temple console to your physical and virtual infrastructures, whether located on the trusted Cloud, on a public Cloud, or on-premise. The Bastion solution allows you to manage your equipment without exposing them to the Internet.

![](images/bastion.svg)

## Benefits
| Advantage              |                                                                              Description                                                                               |   
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Centralized Management | The Bastion Cloud Temple is directly accessible from the Shiva portal. |
| Security               | The equipment managed via the Bastion is not exposed to the Internet, protecting them from port scanning by malicious users. |  
| Infrastructure as Code | APIs allow managing the Bastion Cloud Temple entirely "as Code" (session creation, connection, modification, and deletion). |

## References (SKU)
| Reference                          |   Unit   |           SKU           |  
|------------------------------------|:---------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std |  


### The Bastion Appliance


The Bastion Appliance is a virtual machine deployed in proximity to your equipment. This Appliance allows for a secure and direct flow from the Shiva platform to the equipment to be managed, which are located in the same virtual network.

The flow is encrypted and encapsulated in a VPN tunnel. The solution does not require opening a flow from the Internet to your infrastructures. It is sufficient for the Appliance to have access to the public IP of the Shiva Bastion module on port 443.

An Appliance can be used to quickly connect to equipment. For each connection, the desired protocol, the machine's IP address, and your credentials must be specified. To avoid entering this information for each connection, it is possible to create sessions associated with equipment that needs regular management.

### Sessions
A session is a connection configuration to a device via a Bastion. It involves defining a device to administer and the Appliance to use for routing the traffic, thus enabling quicker connection to that device.

This solution is suitable for regular connections to a device to administer. Essential information is preserved, only your credentials are required at the connection time.