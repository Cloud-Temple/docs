---
title: Concepts
---

## Public Internet Address Allocation Provider Aggregated (PA)

In this context, you are using public IP addresses allocated by Cloud Temple, which are leased to you for your use.

The creation of an internet connectivity and the allocation of the associated public IP addresses is carried out by a __service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The size of the desired subnet (minimum /29 for IPv4 and /64 for IPv6)
    If they have not already been provided, RIPE information (including the administrative contact) will be requested by support

The delivery of internet access is done via the BGP4 protocol following the support request, which will provide the following information:

- *public prefix*
- *interconnection prefix*
- *any-cast gateway*
- *Subnet IP*
- *local AS*
- *AS of Cloud Temple*
- *keepalive timers and hold-time timer*
- *the addresses of the route servers associated with your tenant*.

The use of the BGP4 protocol ensures efficient routing of your Internet traffic to the active gateway of your architecture, particularly in multi-zone availability deployment scenarios, such as clusters of firewalls distributed between two availability zones.

## IPv4 Blocks

### IPv4 Address Offer Version 1

__*This offer is no longer commercialized since May 2, 2024*__

The delivery of IPv4 addresses is done within __the available stock__ for our customers, with a minimum block of 8 IPv4 (/29 or 255.255.255.248).

It is possible to view the address blocks allocated to you in the __*'Public IPs'*__ menu under the Networks section in the green bar on the left.

| Reference                             | Unit   | SKU                          |
| ------------------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 Ranges | 8 IPv4 | csp:(region):network:ipv4:v1 |

### IPv4 Address Offer Version 2

The delivery of an IPv4 address is done within __the available stock__ for our customers, per IP address.

It is possible to view the address blocks allocated to you in the __*'Public IPs'*__ menu under the Networks section in the green bar on the left.


| Reference                     | Unit   | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 | 1 IPv4 | csp:(region):network:ipv4:v2 |


## IPv6 Blocks

__As of May 1, 2024, the IPv6 Public IP Address offer is not yet available for commercialization.__

The commercialization target is scheduled for the second half of 2024.

| Reference                             | Unit   | SKU                          |
| ------------------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv6 Ranges | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Public Internet Address Allocation Provider Independent (PI)

If you have your own Provider Independent addressing, you have the option to announce it within Cloud Temple's Autonomous System. This allows you to continue using your own IP addresses within the Cloud Temple infrastructure and facilitates your migrations.

To do this, submit a __service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The PI address block you own and wish to announce
    If they have not already been provided, the associated RIPE information will be requested by support

There is no specific billing for customers using Provider Independent addresses.

### Internet Bandwidth Reservation

Internet bandwidth is reservable in 100 Mbps increments. The maximum capacity available for a gateway is 10 Gbps, potentially limited by the technical characteristics of your gateway.

Billing is done at the 95th percentile over the billing period, usually one month. You can therefore occasionally benefit from a burst beyond your reserved capacity.

| Reference                                 | Unit    | SKU                                     |
| ----------------------------------------- | ------- | --------------------------------------- |
| Network - Reserved Internet Bandwidth     | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Note:*__
*There is no __volumetric billing__ of the __'egress fees'__ type. You only pay for the bandwidth reservation.*


## Anti-DDoS

A distributed denial-of-service (DDoS) attack aims to degrade or take offline a service by overwhelming it with illegitimate traffic.

Cloud Temple's Anti-DDoS protection protects you against malicious actors and __is active without additional cost for volumetric attacks__: filtering is performed upstream by our telecom partners.