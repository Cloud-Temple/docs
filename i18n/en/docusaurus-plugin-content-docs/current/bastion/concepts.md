---
title: Concepts
---
import bastion from './images/bastion.svg'

## What is the Cloud Temple Bastion?

The Cloud Temple Bastion is a managed service that provides secure RDP or SSH connectivity from the Cloud Temple console to your physical and virtual infrastructures, whether they are located on the Trusted Cloud, on a public Cloud, or on-premises. The Bastion solution allows you to administer your equipment without exposing it to the Internet.

<img src={bastion} />

## The advantages

| Advantage              |                                                                              Description                                                                               |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Centralized management |                                              The Cloud Temple Bastion is accessible directly from the Shiva portal.                                                     |
| Security               | Equipment administered via the Bastion is not exposed to the Internet, protecting it particularly from port scanning by malicious users.                                |
| Infrastructure as Code |          APIs allow you to manage the Cloud Temple Bastion entirely "as Code" (session creation, connection, modification, and deletion).                              |

## References (SKU)

| Reference                          |   Unit    |           SKU           |
|------------------------------------|:---------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std |

### The Bastion Appliance

The Bastion Appliance is a virtual machine deployed in proximity to your equipment. This Appliance enables a secure and direct flow from the Shiva platform to the equipment being administered that is located in the same virtual network.

The flow is encrypted and encapsulated in a VPN tunnel. The solution does not require opening a flow from the Internet to your infrastructures. The Appliance only needs access to the public IP of the Shiva Bastion module on port 443.

An Appliance can be used to make a quick connection to equipment. For each connection, the desired protocol, the machine's IP address, and your credentials must be specified. To avoid entering this information for each connection, it is possible to create sessions associated with equipment that needs to be regularly administered.

### The Sessions

A session is a connection configuration to equipment via a Bastion. It consists of defining equipment to be administered and the Appliance to be used for the flow, thus allowing faster connection to this equipment.

This solution is suitable for regular connections to equipment that needs to be administered. Essential information is retained, only your credentials are required during connection.
