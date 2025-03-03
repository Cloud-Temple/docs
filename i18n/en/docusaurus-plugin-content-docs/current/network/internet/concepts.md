---
title: Concepts
---

## Assignment of a Provider Aggregated (PA) public internet addressing

In this context, you use public IP addresses assigned to Cloud Temple, which are leased to you for your usage.

The creation of internet connectivity and the assignment of associated public IP addresses is done by __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The desired subnet size (minimum /29 in IPv4 and /64 in IPv6)
    If not already provided, RIPE information (notably administrative contact) will be requested by support

The delivery of internet access is done via the BGP4 protocol in response to the support request, which will provide the following information:

- *public prefix*
- *interconnection prefix*
- *any-cast gateway*
- *Subnet IP*
- *local AS*
- *Cloud Temple AS*
- *keepalive timers and hold-time timer*
- *the addresses of route servers associated with your tenant*.

Using the BGP4 protocol guarantees efficient routing of your internet traffic to the active gateway of your architecture, particularly in multi-availability zone deployment scenarios, such as in clusters of firewalls distributed between two availability zones.

## IPv4 Blocks

### IPv4 address offering version 1

__*This offer has not been available for sale since May 2, 2024*__

The delivery of IPv4s is done __within the limits of available stock__ for our customers, with a minimum block of 8 IPv4s (/29 or 255.255.255.248).

You can view the address blocks assigned to you in the __*'Public IPs'*__ menu in the Networks menu on the green side panel.

| Reference                              | Unit  | SKU                          |
| -------------------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 Range  | 8 IPv4 | csp:(region):network:ipv4:v1 |

### IPv4 address offering version 2

The delivery of an IPv4 is done __within the limits of available stock__ for our customers, per IP address.

You can view the address blocks assigned to you in the __*'Public IPs'*__ menu in the Networks menu on the green side panel.

| Reference                     | Unit  | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 | 1 IPv4 | csp:(region):network:ipv4:v2 |


## IPv6 Blocks

__As of May 1, 2024, the public IPv6 IP addresses offering is not yet available for sale.__

The target for commercial availability is planned for the second half of 2024.

| Reference                              | Unit   | SKU                          |
| -------------------------------------- | ------- | ---------------------------- |
| Network - Dedicated Public IPv6 Range  | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Provider Independent (PI) public IP addresses

If you have your own Provider Independent addressing, you have the option to announce it within Cloud Temple's Autonomous System. This allows you to continue using your own IP addresses within the Cloud Temple infrastructure and facilitate your migrations.

To do this, submit __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The PI IP address block that you own and wish to announce
    If not already provided, the associated RIPE information will be requested by support

There is no specific billing for customers using Provider Independent addresses.

### Reserving internet bandwidth

Internet bandwidth is reservable in increments of 100 Mbps. The maximum available capacity for a gateway is 10 Gbps, potentially limited by the technical characteristics of your gateway.

Billing is done at the 95th percentile over the billing period, typically a month. Therefore, you can occasionally benefit from a burst beyond your reserved capacity.

| Reference                                 | Unit    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Network - Reserved Internet Bandwidth     | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Note:*__
*There is no __volumetric billing__ such as __'egress fees'. You only pay for reserved bandwidth.__*


## Anti-DDoS

A distributed denial of service (DDoS) attack aims to degrade or take a service offline by overwhelming it with illegitimate traffic.

The Anti-DDoS protection from Cloud Temple protects you against malicious actors and __is active without additional cost for volumetric attacks__: filtering is done upstream by our telecom partners.