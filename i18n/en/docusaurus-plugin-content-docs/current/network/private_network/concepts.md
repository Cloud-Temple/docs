---
title: Concepts
---

### VPLS Technology

The Cloud Temple global network uses __[VPLS](https://en.wikipedia.org/wiki/Virtual_Private_LAN_Service)__ technology.
__VPLS__ is a point-to-multipoint layer 2 VPN based on Ethernet. It allows geographically dispersed sites to be connected
to each other through an MPLS network. For clients, all sites appear to be in the same
Ethernet LAN, even though traffic is transported through the Cloud Temple network.

__VPLS__, in its implementation and configuration, has much in common with a layer 2 VPN. In VPLS, a packet that comes
from a client network is first sent to a customer edge (CE) device (for example, a router or an Ethernet switch).
It is then sent to a provider edge (PE) router within the service provider's network.
The packet traverses the service provider's network on an MPLS label-switched path (LSP).
It arrives at the egress PE router, which then forwards the traffic to the CE device on the destination client site.
The difference lies in the fact that, for __VPLS__, packets can traverse the service provider's
network in a point-to-multipoint manner, which means that a packet from a CE device can be
broadcast to all PE routers participating in a __VPLS__ routing instance.

A client's __VPLS__ circuit can be __extended across all availability zones in a region__.

The __VPLS__ protocol is __completely transparent__ to clients who only see the different VLANs in their availability zones.

### Networking in the VMware Virtualization Offering

Virtual networks (vlan) in the VMware virtualization offering are __'DVPortgroup'__ type networks. A __'dvPortGroup'__,
or __'Distributed Virtual Port Group'__, is a concept specific to VMware. A dvPortGroup is an entity that
groups multiple virtual ports (vPorts) in a distributed virtual network environment to facilitate their use.

Located within a __[Tenant](../../../console/iam/concepts/#tenant)__, they can be extended across availability zones,
allowing you to build "active/active" architectures with quorum.

The maximum usable bandwidth depends mainly on the blade model used (10Gbps converged or 25 Gbps converged) and the capabilities of the virtual machines.

It is possible to achieve a bandwidth of 10Gbps.

The configurations available on the Cloud Temple console as part of the VMware virtualization offering are as follows:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Note__* :

- *The choice of IP addressing within these networks is __free.__*
- *__SRV-IO__ is not available in the network offering associated with VMware virtualization.*
- *__QinQ__ is supported on the Cloud Temple architecture. QinQ, also known as "VLAN stacking" or 802.1ad, is
a network protocol that allows the encapsulation of multiple VLAN (Virtual Local Area Network) tags in a single Ethernet frame.*

## Regional Private Networks

Private networks within a region can be ordered directly from the Cloud Temple console.

__*Note:*__ *It is not possible to choose the 802.1q VLAN ID.*

| Reference                                 | Unit   | SKU                          |
|-------------------------------------------|--------|------------------------------|
| NETWORK - Region FR1 - Private VLAN inter AZ | 1 vlan | csp:(region):network:vlan:v1 |

## Network Sharing Between Tenants

By default, __networks are only available within a tenant__. You can choose to __share a network between multiple tenants__ for technical or connectivity reasons.
It is thus possible to share a network between your __[Tenants](../../../console/iam/concepts/#tenant)__ within the same organization.

## External Private Connectivity

Cloud Temple's network offering allows customers to connect their own IPSEC, MPLS, or Fiber infrastructures to their tenants.

For this purpose, Cloud Temple offers:

- The possibility to host a network device in a common area (not qualified as Secnumcloud),
- 1Gbps or 10Gbps connectivity ports.

Creating an external connectivity is done through a service request indicating:

    Your Organization name
    The name of a contact with their email and phone number to finalize the configuration
    The tenant name
    The availability zone or, failing that, the physical site desired for this connectivity
    The number and, for each, the type of connectivity port expected (fiber, copper, 1Gbps, 10Gbps, ...)
    The network of your tenant that will host this connectivity
    The number of 'U' of hosting space required, if any

## Dedicated Circuits

Cloud Temple offers the possibility to benefit from a dedicated fiber between two dedicated hosting infrastructures (racks).

This service is typically used when you want to host 2 non-cloud infrastructures (for example, two IBM AS/400), in two separate racks on two separate physical datacenters.
You may wish to directly connect these two racks privately without going through the Cloud Temple backbone infrastructure and only use the optical transmission backbone.

In this context, we can deliver fiber optic connectivity between your two racks. Delivery is systematically on two diversified optical paths.

Here are the different types of delivery possible:

- 1Gbps fiber Ethernet
- 10Gbps fiber Ethernet
- 8Gbps Fiber Channel
- 16Gbps Fiber Channel

Creating a dedicated connectivity is done through a service request indicating:

    Your Organization name
    The name of a contact with their email and phone number to finalize the configuration
    The tenant name
    The identifiers of the two dedicated racks
    The desired bandwidth
    The network of your tenant that will host this connectivity

You will be contacted by support to refine your request.

| Reference                                                                                | Unit     | SKU                              | Commitment |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| NETWORK - Dedicated inter AZ 1G ethernet link (two links via two diversified paths)       | 1 package | csp:(region):network:epl:1g:v1   | 36 months  |
| NETWORK - Dedicated inter AZ 10G ethernet link (two links via two diversified paths)      | 1 package | csp:(region):network:epl:10g:v1  | 36 months  |
| NETWORK - Dedicated inter AZ 8G fiber-channel link (two links via two diversified paths)  | 1 package | csp:(region):network:fcpl:8g:v1  | 36 months  |
| NETWORK - Dedicated inter AZ 16G fiber-channel link (two links via two diversified paths) | 1 package | csp:(region):network:fcpl:16g:v1 | 36 months  |
