---
title: Concepts
---

### The VPLS Technology
The global Cloud Temple network uses __[VPLS](https://en.wikipedia.org/wiki/Virtual_Private_LAN_Service)__ technology.
__VPLS__ is a point-to-multipoint Layer 2 VPN based on Ethernet. It allows geographically dispersed sites to connect to each other through an MPLS network. For clients, all sites appear to be on the same Ethernet LAN, even though the traffic is transported through the Cloud Temple network.

__VPLS__, in its implementation and configuration, has much in common with a Layer 2 VPN. In VPLS, a packet originating from a client's network is first sent to a Customer Edge (CE) device (e.g., a router or an Ethernet switch).
It then travels to a Provider Edge (PE) router within the service provider's network. The packet traverses the service provider's network on an MPLS label-switched path (LSP). 
It arrives at the egress PE router, which then transfers the traffic to the CE device at the destination client site. The difference is that, with __VPLS__, packets can traverse the service provider's network in a point-to-multipoint fashion, meaning that a packet from a CE device can be broadcast to all PE routers participating in a __VPLS__ routing instance.

A client's __VPLS__ circuit can be __extended across all availability zones in a region__.

The __VPLS__ protocol is __completely transparent__ to clients, who only see the various VLANs on their availability zones.

### The Network in the VMware Virtualization Offer

The virtual networks (vlan) of the VMware virtualization offer are networks of type __'DVPortgroup'__. A __'dvPortGroup'__, or __'Distributed Virtual Port Group'__, is a VMware-specific concept. A dvPortGroup is an entity that groups multiple virtual ports (vPorts) in a distributed virtual network environment to facilitate their use.

Located within a __[Tenant](../../../console/iam/concepts/#tenant)__, they can be extended between availability zones allowing you to build "active/active" architectures with quorum.

The maximum usable bandwidth mainly depends on the blade model used (10Gbps converged or 25 Gbps converged) and the capabilities of the virtual machines.

It is possible to achieve a bandwidth of 10Gbps.

The configurations available on the Cloud Temple console as part of the VMware virtualization offer are as follows:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Note__*:

- *The choice of IP addressing within these networks is __free.__*
- *__SRV-IO__ is not available in the network offer associated with VMware virtualization.*
- *__QinQ__ is supported on the Cloud Temple architecture. QinQ, also known as "VLAN stacking" or 802.1ad, is a network protocol that allows multiple VLAN (Virtual Local Area Network) tags to be encapsulated within a single Ethernet frame.*

## Regional Private Networks

The ordering of private networks within a region is done directly in the Cloud Temple console.

__*Note:*__ *It is not possible to choose the 802.1q vlan ID.*

| Reference                                 | Unit   | SKU                          | 
|-------------------------------------------|--------|------------------------------|
| NETWORK - FR1 Region - private VLAN inter AZ | 1 vlan | csp:(region):network:vlan:v1 |


## Network Sharing Between Tenants

By default, __networks are only available within a tenant__. You can choose to __share a network between multiple tenants__ for technical or connectivity reasons.
It is thus possible to share a network between your __[Tenant](../../../console/iam/concepts/#tenant)__ within the same organization.

## External Private Connectivity

The Cloud Temple network offer allows clients to connect their own IPSEC, MPLS, or Fiber infrastructures to their tenants.

Cloud Temple offers:

- The possibility to host a network device in a common area (not Secnumcloud qualified),
- Connectivity ports of 1Gbps or 10Gbps.

The creation of external connectivity is done by a service request indicating:

    Your Organization's name
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The availability zone or, if not, the desired physical site for this connectivity
    The number and type of expected connectivity ports (fiber, copper, 1Gbps, 10Gbps, ...)
    The network of your tenant that will host this connectivity
    The number of 'U' if hosting is desired

## Dedicated Circuits

Cloud Temple offers the possibility to benefit from a dedicated fiber between two dedicated hosting infrastructures (rack).

This service is typically used when you want to host 2 non-cloud infrastructures (e.g., two IBM AS/400) in two distinct racks in two distinct physical datacenters.
You may want to connect these two racks directly in private without going through the Cloud Temple backbone infrastructure and only using the optical backbone transmission.

In this context, we can deliver an optical fiber connectivity between your two racks. The delivery is systematically on two diverse optical paths.

Here are the different possible delivery types:

- Ethernet fiber 1Gbps
- Ethernet fiber 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

The creation of dedicated connectivity is done by a service request indicating:

    Your Organization's name
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenants
    The identifiers of the two dedicated racks
    The desired bandwidth
    The network of your tenant that will host this connectivity

You will be contacted by support to refine your request.

| Reference                                                                                | Unit     | SKU                              | Commitment |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| NETWORK - Dedicated link inter AZ 1G Ethernet (two links via two diverse paths)          | 1 package | csp:(region):network:epl:1g:v1   | 36 months  |
| NETWORK - Dedicated link inter AZ 10G Ethernet (two links via two diverse paths)         | 1 package | csp:(region):network:epl:10g:v1  | 36 months  |
| NETWORK - Dedicated link inter AZ 8G Fiber Channel (two links via two diverse paths)     | 1 package | csp:(region):network:fcpl:8g:v1  | 36 months  |
| NETWORK - Dedicated link inter AZ 16G Fiber Channel (two links via two diverse paths)    | 1 package | csp:(region):network:fcpl:16g:v1 | 36 months  |