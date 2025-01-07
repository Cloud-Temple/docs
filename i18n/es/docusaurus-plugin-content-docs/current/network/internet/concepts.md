---
title: Concepts
---

## Allocation of a Public Provider Aggregated (PA) Internet Address

In this context, you use public IP addresses allocated to Cloud Temple, which are rented to you for your use.

The creation of an internet connectivity and the allocation of associated public IP addresses is done by __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The desired subnet size (minimum /29 in IPv4 and /64 in IPv6)
    If they have not already been provided, RIPE information (especially administrative contacts) will be requested by support

The delivery of internet access is done via the BGP4 protocol following the support request, which will provide the following information:

- *public prefix*
- *interconnection prefix*
- *any-cast gateway*
- *Subnet IP*
- *local AS*
- *Cloud Temple AS*
- *keepalive timers and hold-time timer*
- *the addresses of the route servers associated with your tenant*.

The use of the BGP4 protocol ensures efficient routing of your Internet traffic to the active gateway of your architecture, particularly in multi-availability zone deployment scenarios, such as clusters of firewalls spread across two availability zones.

## IPv4 Blocks 

### IPv4 Address Offering Version 1

__*This offer is no longer marketed since May 2, 2024*__

Delivery of IPv4 addresses is done within __the limit of available stock__ for our clients, with a minimum block of 8 IPv4 (/29 or 255.255.255.248).

It is possible to view the address blocks allocated to you in the __*'Public IPs'*__ menu of the Networks menu in the green left-hand sidebar.

| Reference                              | Unit  | SKU                          |
| -------------------------------------- | ----- | ---------------------------- |
| Network - Dedicated Public IPv4 Range  | 8 IPv4 | csp:(region):network:ipv4:v1 |

### IPv4 Address Offering Version 2

Delivery of IPv4 addresses is done within __the limit of available stock__ for our clients, per IP address.

It is possible to view the address blocks allocated to you in the __*'Public IPs'*__ menu of the Networks menu in the green left-hand sidebar.

| Reference                       | Unit  | SKU                          |
| ------------------------------- | ----- | ---------------------------- |
| Network - Dedicated Public IPv4 | 1 IPv4 | csp:(region):network:ipv4:v2 |


## IPv6 Blocks

__As of May 1, 2024, the Public IPv6 address offer is not yet available for commercialization.__

The target commercialization is planned for the second half of 2024.

| Reference                              | Unit   | SKU                          |
| -------------------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv6 Range  | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Provider Independent (PI) Public IP Addresses

If you have your own Provider Independent addressing, you have the option to announce it within the Cloud Temple Autonomous System. This allows you to continue using your own IP addresses within the Cloud Temple infrastructure and facilitate your migrations.

To do this, make __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The PI IP address block you hold and wish to announce
    If they have not already been provided, the associated RIPE information will be requested by support 

There is no specific billing for clients using Provider Independent addresses.

### Internet Bandwidth Reservation

Internet bandwidth can be reserved in increments of 100 Mbps. The maximum available capacity for a gateway is 10 Gbps, potentially limited by the technical characteristics of your gateway.

Billing is done at the 95th percentile over the billing period, usually a month. You can therefore occasionally benefit from a burst beyond your reserved capacity.

| Reference                              | Unit     | SKU                                     |
| -------------------------------------- | -------- | --------------------------------------- |
| Network - Reserved internet bandwidth  | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Note:*__
*There is no __volumetric billing__ of type __'egress fees'. You only pay for the bandwidth reservation.__*


## Anti-DDoS

A distributed denial-of-service (DDoS) attack aims to degrade or bring a service offline by overloading it with illegitimate traffic.

Cloud Temple's Anti-DDoS protection safeguards you against malicious actors and __is activated at no extra cost against volumetric attacks__: filtering is done upstream by our telecom partners.
