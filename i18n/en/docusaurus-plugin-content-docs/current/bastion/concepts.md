---
title: Concepts
---
## What is the Bastion Cloud Temple?

The Bastion Cloud Temple is a managed service that provides secure RDP or SSH connectivity from the Cloud Temple console to your physical and virtual infrastructures, whether they are located on the trusted Cloud, on a public Cloud, or on-premise. The Bastion solution allows you to manage your equipment without exposing them to the Internet.

![](images/bastion.svg)

## Advantages
| Advantage               |                                                                              Description                                                                               |   
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Centralized Management    |                                              The Bastion Cloud Temple is directly accessible from the Shiva portal.                                               |   
| Security               | Equipment managed via the Bastion is not exposed to the Internet, protecting them from, among other things, port scanning by malicious users. |  
| Infrastructure as Code |          APIs allow you to manage the Bastion Cloud Temple entirely "as Code" (session creation, connection, modification, and session deletion).          |   

## References (SKU)
| Reference                          |   Unit   |           SKU           |  
|------------------------------------|:---------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std | 


### The Bastion Appliance

The Bastion Appliance is a virtual machine deployed near your equipment. This Appliance allows for a secure and direct flow from the Shiva platform to the equipment to be managed that are located in the same virtual network.

The flow is encrypted and encapsulated in a VPN tunnel. The solution does not require opening a flow from the Internet to your infrastructures. The Appliance only needs access to the public IP of the Shiva Bastion module on port 443.

An Appliance can be used to make a quick connection to a piece of equipment. For each connection, the desired protocol, the machine's IP address, and your credentials must be specified. To avoid filling in this information for each connection, it is possible to create sessions associated with equipment that needs regular management.

### Sessions

A session is a configuration for connecting to equipment via a Bastion. It involves defining a piece of equipment to be managed and the Appliance to be used to route the flow, thus allowing faster connection to that equipment.

This solution is suitable for regular connections to a piece of equipment to be managed. Essential information is retained, only your credentials are required upon connection.