---
title: Konzepte
---
import bastion from './images/bastion.svg'

## What is the Cloud Temple Bastion?

The Cloud Temple Bastion is a managed service that provides you with secure RDP or SSH connectivity from the Cloud Temple console to your physical and virtual infrastructures, whether they are located in the trusted cloud, a public cloud, or on-premise. The Bastion solution enables you to manage your devices without exposing them to the internet.

<img src={bastion} />

## Vorteile

| Vorteil                |                                                                              Beschreibung                                                                               |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Zentrale Verwaltung    |                                              Der Cloud Bastion Temple ist direkt über die Console zugänglich.                                               |
| Sicherheit             | Geräte, die über den Bastion verwaltet werden, sind nicht dem Internet ausgesetzt, wodurch sie insbesondere vor Port-Scans durch schadhaften Nutzer geschützt sind. |
| Infrastructure as Code |          APIs ermöglichen die vollständige Verwaltung des Cloud Bastion Temple „as Code“ (Erstellung von Sitzungen, Verbindung, Änderung und Löschung von Sitzungen).          |

## References (SKU)

| Reference                          |   Unit   |           SKU           |
|------------------------------------|:--------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std |

### Bastion Appliance

The Bastion Appliance is a virtual machine deployed close to your equipment. This appliance enables a secure, direct flow from the Console platform to the equipment being managed, which resides in the same virtual network.

The traffic is encrypted and encapsulated within a VPN tunnel. The solution does not require opening a connection from the internet to your infrastructure. It is sufficient for the appliance to have access to the public IP address of the Bastion Console module on port 443.

A single appliance can be used to establish a quick connection to a target device. For each connection, you must specify the desired protocol, the target machine's IP address, and your credentials. To avoid entering these details repeatedly, you can create sessions associated with equipment that you regularly manage.

### Sessions

A session is a connection configuration to a device via a Bastion. It defines the device to be managed and the Appliance used to route the traffic, enabling faster connections to that device.

This solution is suitable for regular connections to a device that needs to be managed. Essential information is stored, requiring only your credentials when connecting.