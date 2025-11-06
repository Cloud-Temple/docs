---
title: Concepts
---

### VPLS Technology

The global Cloud Temple network uses the __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__ technology. __VPLS__ is a point-to-multipoint Layer 2 VPN based on Ethernet. It allows geographically dispersed sites to be connected to each other through an MPLS network. For customers, all sites appear to be in the same Ethernet LAN, even though the traffic is carried by the Cloud Temple network.

__VPLS__ shares many similarities with a Layer 2 VPN in its implementation and configuration. In VPLS, a packet coming from a customer network is first sent to a customer edge (CE) device (e.g., a router or Ethernet switch). It is then sent to a provider edge (PE) router within the service provider's network. The packet traverses the service provider's network over an MPLS label-switched path (LSP). It arrives at the outgoing PE router, which then forwards the traffic to the CE device at the destination customer site. The difference lies in the fact that, for __VPLS__, packets can traverse the service provider's network in a point-to-multipoint manner, meaning a packet from a CE device can be broadcasted to all PE routers participating in a __VPLS__ routing instance.

The __VPLS__ circuit of a customer can be __extended across all availability zones in a region__.

The __VPLS__ protocol is __completely transparent__ for customers who only see the different VLANs on their availability zones.

### The network in the VMware virtualization offering

The virtual networks (VLANs) of the VMware virtualization offering are of the type __'DVPortgroup'__. A __'dvPortGroup'__, or __'Distributed Virtual Port Group'__, is a specific concept in VMware. A dvPortGroup is an entity that groups multiple virtual ports (vPorts) in a distributed virtual network environment to facilitate their use.

Located within a __[Tenant](../console/iam/concepts.md#tenant)__, they can be extended across availability zones, allowing you to build "active/active" architectures with quorum.

The maximum usable bandwidth mainly depends on the blade model used (converged 10Gbps or 25Gbps) and the capabilities of the virtual machines.

It is possible to expect a bandwidth of 10Gbps.

The configurations available on the Cloud Temple console within the VMware virtualization offering are as follows:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Note__* :

- *The choice of IP addressing within these networks is __free.__*
- *__SRV-IO__ is not available in the network offering associated with VMware virtualization.*
- *__QinQ__ is supported on the Cloud Temple architecture. QinQ, also known as "VLAN stacking" or 802.1ad, is a network protocol that allows the encapsulation of multiple VLAN (Virtual Local Area Network) tags within a single Ethernet frame.*

## Regional Private Networks

The management of private networks within a region is carried out directly in the Cloud Temple console.

__*Note:*__ *It is not possible to select the 802.1q VLAN ID.*

| Reference                                 | Unit  | SKU                          |
|-------------------------------------------|-------|------------------------------|
| NETWORK - Region FR1 - Inter-AZ Private VLAN | 1 VLAN | csp:(region):network:vlan:v1 |

## Network Sharing Between Tenants

By default, __networks are only available within a tenant__. You can choose to __share a network between multiple tenants__ for technical reasons or connectivity reasons.
It is thus possible to share a network between your __[Tenant](../console/iam/concepts.md#tenant)__ within the same organization.

## External Private Connectivity

The Cloud Temple network offering allows customers to connect their own IPSEC, MPLS, or Fiber infrastructures to their tenants.

Cloud Temple offers the following for this purpose:

- The possibility to host a network device in a common area (non-Secnumcloud qualified),
- Connectivity ports of 1Gbps or 10Gbps.

The creation of an external connectivity is carried out by a service request indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The tenant name
    The availability zone or, in the absence of one, the physical site desired for this connectivity
    The number of ports and, for each, the type of connectivity port expected (fiber, copper, 1Gbps, 10Gbps, ...)
    The tenant's network that should host this connectivity
    The number of 'U' possibly desired for hosting

## Dedicated Circuits

Cloud Temple offers the possibility to benefit from a dedicated fiber connection between two dedicated hosting infrastructures (racks).

This service is typically used when you want to host two non-cloud infrastructures (e.g., two IBM AS/400) in two separate racks across two distinct physical datacenters. You may wish to directly connect these two racks privately without going through the Cloud Temple backbone infrastructure and only use the optical transmission backbone.

In this context, we can provide an optical fiber connectivity between your two racks. The delivery is always done via two diversified optical paths.

Here are the different possible delivery types:

- Fiber Ethernet 1Gbps
- Fiber Ethernet 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

The creation of a dedicated connectivity is performed through a service request indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The identifiers of the two dedicated racks
    The desired bandwidth
    The tenant's network that will host this connectivity

You will be contacted by support to refine your request.

| Reference                                                                                | Unit      | SKU                              | Commitment |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| RESEAU - Inter AZ dedicated link 1G ethernet (two links via two diversified paths)       | 1 package | csp:(region):network:epl:1g:v1   | 36 months  |
| RESEAU - Inter AZ dedicated link 10G ethernet (two links via two diversified paths)      | 1 package | csp:(region):network:epl:10g:v1  | 36 months  |
| RESEAU - Inter AZ dedicated link 8G fiber-channel (two links via two diversified paths)  | 1 package | csp:(region):network:fcpl:8g:v1  | 36 months  |
| RESEAU - Inter AZ dedicated link 16G fiber-channel (two links via two diversified paths) | 1 package | csp:(region):network:fcpl:16g:v1 | 36 months  |
