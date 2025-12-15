---
title: Concepts
---
import bastion from './images/bastion.svg'

## What is the Cloud Temple Bastion?

The Cloud Temple Bastion is a managed service that provides you with secure RDP or SSH connectivity from the Cloud Temple console to your physical and virtual infrastructures, whether they are located in the trusted cloud, a public cloud, or on-premise. The Bastion solution enables you to manage your equipment without exposing them to the internet.

<img src={bastion} />

## Benefits

| Benefit                |                                                                                                                                                                        |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Centralized Management | The Cloud Temple Bastion is directly accessible from the Console.                                                                                                     |
| Security               | Equipment managed via the Bastion is not exposed to the Internet, protecting it from malicious users scanning for open ports.                                        |
| Infrastructure as Code | APIs enable full "as Code" management of the Cloud Temple Bastion (session creation, connection, modification, and deletion).                                        |

## References (SKU)

| Reference                          |   Unit   |           SKU           |
|------------------------------------|:--------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std |

### Bastion Appliance

The Bastion Appliance is a virtual machine deployed close to your equipment. This appliance enables a secure, direct flow from the Console platform to the equipment being managed, which resides within the same virtual network.

The traffic is encrypted and encapsulated within a VPN tunnel. The solution does not require opening any inbound traffic from the Internet to your infrastructure. It is sufficient for the appliance to have access to the public IP address of the Console Bastion module on port 443.

A single appliance can be used to quickly connect to a target device. For each connection, you must specify the desired protocol, the target machine's IP address, and your credentials. To avoid entering these details repeatedly, you can create sessions associated with equipment that you regularly manage.

### Sessions

A session is a connection configuration to a device via a Bastion. It involves defining the device to manage and the Appliance used to route the traffic, enabling faster connections to that device.

This solution is suitable for regular connections to a device that requires management. Essential information is retained, requiring only your credentials upon connection.