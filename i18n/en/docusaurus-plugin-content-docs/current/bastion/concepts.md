---
title: Concepts
---
import bastion from '@site/docs/bastion/images/bastion.png'

## What is the Bastion Cloud Temple?

The Bastion Cloud Temple is a managed service that provides you with secure RDP or SSH connectivity from the Cloud Temple console to your physical and virtual infrastructures, whether they are located on the trusted Cloud, a public Cloud, or on-premise. The Bastion solution allows you to manage your equipment without exposing them to the Internet.

<img src={bastion} />

## Advantages

| Advantage               |                                                                              Description                                                                               |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Centralized management    |                                              The Bastion Cloud Temple is directly accessible from the Console.                                               |
| Security               | Devices managed via the Bastion are not exposed to the Internet, protecting them from port scanning by malicious users. |
| Infrastructure as Code |          APIs allow the Bastion Cloud Temple to be managed entirely "as Code" (session creation, connection, modification, and deletion).          |

## References (SKU)

| Reference                          |   Unit   |           SKU           |
|------------------------------------|:---------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std |

### The Bastion Appliance

The Bastion Appliance is a virtual machine deployed in close proximity to your equipment. This Appliance enables secure and direct traffic flow from the Console platform to the managed equipment located within the same virtual network.

The traffic is encrypted and encapsulated in a VPN tunnel. The solution does not require opening a traffic flow from the Internet to your infrastructure. It is sufficient for the Appliance to have access to the public IP of the Bastion Console module on port 443.

An Appliance can be used to establish a quick connection to a device. For each connection, the desired protocol, the device's IP address, and your credentials must be specified. To avoid entering this information for every connection, you can create sessions associated with regularly managed equipment.

### Sessions

A session is a connection configuration to a device via a Bastion. It consists of defining a device to manage and the Appliance to use for traffic routing, thereby enabling faster connections to that device.

This solution is suitable for regular connections to a device to manage. Essential information is retained, and only your credentials are required upon connection.