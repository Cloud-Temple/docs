### Sessions

A session is a connection configuration to a device via a Bastion. It consists of defining the device to manage and the Appliance to use for routing the traffic, thus allowing faster connection to this device.

This solution is suitable for regular connections to a device to manage. Essential information is saved, only your credentials are required during the connection.

## What is the Cloud Temple Bastion?

The Cloud Temple Bastion is a managed service that provides secure RDP or SSH connectivity from the Cloud Temple console to your physical and virtual infrastructures, whether they are located in a trusted cloud, a public cloud, or on-premise. The Bastion solution allows you to manage your equipment without exposing them to the Internet.

<img src={bastion} />

## References (SKU)

| Reference                          |   Unit   |           SKU           |
|------------------------------------|:--------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std |

## Advantages

| Advantage               |                                                                              Description                                                                               |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Centralized Management |                                              The Cloud Temple Bastion is directly accessible from the Shiva portal.                                               |
| Security               | Devices managed via the Bastion are not exposed to the Internet, which protects them notably from port scanning by malicious users. |
| Infrastructure as Code |          APIs allow managing the Cloud Temple Bastion entirely "as Code" (session creation, connection, modification, and deletion).          |

### Bastion Appliance

The Bastion Appliance is a virtual machine deployed near your equipment. This Appliance allows a secure and direct flow from the Shiva platform to the equipment to be managed, which are located in the same virtual network.

The flow is encrypted and encapsulated in a VPN tunnel. The solution does not require opening a flow from the Internet to your infrastructure. It is sufficient for the Appliance to have access to the public IP of the Shiva Bastion module on port 443.

A single Appliance can be used to quickly connect to a device. For each connection, the desired protocol, the machine's IP address, and your credentials must be specified. To avoid entering these details for each connection, it is possible to create sessions associated with regularly managed equipment.

---
title: Concepts
---
import bastion from './images/bastion.svg'