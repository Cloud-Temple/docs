---
title: Concepts
---

## Provider Aggregated (PA) Public Internet Address Assignment

In this context, you use public IP addresses assigned to Cloud Temple, which are leased to you for your use.

Creating internet connectivity and assigning associated public IP addresses is done through __a service request__ indicating:

    Your Organization name
    A contact name with email and phone number to finalize the configuration
    The tenant name
    The desired subnet size (minimum /29 in IPv4 and /64 in IPv6)
    If not already provided, RIPE information (especially administrative contact) will be requested by support

Internet access delivery is done via BGP4 protocol in response to the support request, which will provide the following information:

- *public prefix*
- *interconnection prefix*
- *any-cast gateway*
- *IP Subnet*
- *local AS*
- *Cloud Temple AS*
- *keepalive timers and hold-time timer*
- *route server addresses associated with your tenant*.

The use of BGP4 protocol ensures efficient routing of your Internet flows to the active gateway of your architecture, particularly in multi-availability zone deployment scenarios, such as firewall clusters distributed between two availability zones.

## IPv4 Blocks

### IPv4 Address Offer Version 1

__*This offer is no longer marketed since May 2, 2024*__

IPv4 delivery is done __subject to available stock__ for our customers, with a minimum block of 8 IPv4 (/29 or 255.255.255.248).

You can view the address blocks assigned to you in the __*'Public IPs'*__ menu of the Networks menu in the green banner on the left.

| Reference                           | Unit   | SKU                          |
| ----------------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 Range | 8 IPv4 | csp:(region):network:ipv4:v1 |

### IPv4 Address Offer Version 2

IPv4 delivery is done __subject to available stock__ for our customers, per IP address.

You can view the address blocks assigned to you in the __*'Public IPs'*__ menu of the Networks menu in the green banner on the left.

| Reference                      | Unit   | SKU                          |
| ------------------------------ | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 | 1 IPv4 | csp:(region):network:ipv4:v2 |

## IPv6 Blocks

IPv6 block ordering is done via the __*Internet*__ menu in the __*Networks*__ tab.

You can view the prefixes assigned to you in the __*'Public IPs'*__ menu of the Networks menu in the green banner on the left.

| Reference                           | Unit    | SKU                          |
| ----------------------------------- | ------- | ---------------------------- |
| Network - Dedicated Public IPv6 Range | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Provider Independent (PI) Public IP Addresses

If you have your own Provider Independent addressing, you have the possibility to announce it within Cloud Temple's Autonomous System. This allows you to continue using your own IP addresses within the Cloud Temple infrastructure and facilitates your migrations.

To do this, make __a service request__ indicating:

    Your Organization name
    A contact name with email and phone number to finalize the configuration
    The tenant name
    The PI IP address block you own and wish to announce
    If not already provided, the associated RIPE information will be requested by support

There is no specific billing for customers using Provider Independent addresses.

### Internet Bandwidth Reservation

Internet bandwidth can be reserved in increments of 100 Mbps. The maximum capacity available for a gateway is 10 Gbps, potentially limited by the technical characteristics of your gateway.

Billing is done at the 95th percentile over the billing period, usually one month. You can therefore occasionally benefit from a burst beyond your reserved capacity.

| Reference                              | Unit     | SKU                                     |
| -------------------------------------- | -------- | --------------------------------------- |
| Network - Reserved Internet Bandwidth  | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Note:*__
*There is no __volumetric billing__ such as __'egress fees'. You only pay for bandwidth reservation.__*

## Anti-DDoS

A distributed denial of service (DDoS) attack aims to degrade or take a service offline by overloading it with illegitimate traffic.

Cloud Temple's Anti-DDoS protection protects you against malicious actors and __is active at no extra cost against volumetric attacks__: filtering is performed upstream by our telecom partners.
