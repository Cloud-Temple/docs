---
title: Concepts
---

## Assignment of a Public Internet Address (PA)

In this scenario, you are utilizing public IP addresses assigned to Cloud Temple, which you lease for your usages.

The establishment of internet connectivity and the assignment of associated public IP addresses is carried out through a service request specifying:

    Your Organization's Name
    The contact's name along with their email and phone number for final configuration
    The Tenant's Name
    The desired subnet size (minimum /29 in IPv4 and /64 in IPv6)
    If not already provided, RIPE (administrative contact information, among others) will be requested by the support team

The delivery of internet access is facilitated via BGP4, in response to a support request, which will provide the following details:

    *Public IP prefix*
    *Interconnection prefix*
    *Any-cast gateway*
    *Subnet IP*
    *Local AS number*
    *Cloud Temple's AS number*
    *Keepalive timers and hold-time timer*
    *Addresses of route servers associated with your tenant*.

The use of BGP4 ensures efficient routing of your Internet traffic to the active edge router in your architecture, particularly beneficial in multi-zone deployment scenarios such as distributed firewall clusters across two availability zones.

### IPv4 Blocks

This section discusses the various IPv4 blocks. An IPv4 block refers to a range of IP addresses that can be used for network communication. These ranges are managed by Internet Assigned Numbers Authority (IANA) and allocated to Regional Internet Registries (RIRs), who then distribute them to Internet Service Providers (ISPs).

### Types of IPv4 Blocks

1. **Classful Blocks**:
   - Traditionally, IP addresses were divided into five classes: A, B, C, D, and E. Each class had a different range of possible addresses.
   - Class A blocks could accommodate up to 126 networks (each with 2^8 addresses), Class B offered 65,536 networks (with 2^16 addresses each), and so on.

2. **CIDR (Classless Inter-Domain Routing) Blocks**:
   - Modern networking uses CIDR, which allows for more flexible allocation of IP addresses by using a prefix length to define the network size.
   - A CIDR block is defined by its prefix length followed by a slash (e.g., 192.0.2/16).

3. **Private and Public IPv4 Blocks**:
   - **Public IPv4 Addresses**: These are globally unique addresses used for direct internet communication. They are allocated to ISPs and organizations that need to communicate over the internet.
   - **Private IPv4 Addresses**: Used within private networks (like home or corporate LANs), these addresses cannot be routed on the public internet directly.

### Example of an IPv4 Block in Markdown:
```markdown
## Example CIDR Block
- 192.0.2.0/24
This block includes all IP addresses from 192.0.2.1 to 192.0.2.254, with a subnet mask of 255.255.255.0 (or /24).
```

### Importance of IPv4 Blocks

- **Network Addressing**: IP addresses are fundamental for identifying devices on a network and routing data packets between them.
- **IP Routing**: CIDR blocks facilitate efficient use of address space by allowing networks to be divided into smaller, more manageable subnets.
- **Security**: By isolating private networks with private IPv4 addresses, organizations can enhance security by limiting the exposure of internal IP addresses on the public internet.

### Conclusion

Understanding IPv4 blocks is crucial for network administrators and engineers to effectively design, manage, and secure their networks. Proper allocation and utilization of these address ranges are vital for efficient data transmission and adherence to routing protocols.

### Offer of IPv4 Version 1

*Note: This offer is no longer being marketed as of May 2, 2024.*

IPv4 delivery is provided within the limits of available stock for our clients, with a minimum block of 8 IPv4 addresses (/29 or 255.255.255.248).

You can view the affected IP address blocks in the 'Public IPs' menu under the Networks menu bar on the left (as shown below).

| Reference                             | Unité  | SKU                          |
| ------------------------------------- | ------ | ---------------------------- |
| Dedicated Public IPv4 Range          | 8 IPv4 | csp:(region):network:ipv4:v1 |

### Offer of IPv4 Version 2

The delivery of an IPv4 is provided within the **available stock limits** for our clients, per IP address.

You can view the affected blocks of addresses in the 'Public IPv4' menu under the Network section on the top left sidebar.

| Reference                     | Unit   | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Dedicated IPv4 Network        | 1 IPv4 | csp:(region):network:ipv4:v2 |

## IPv6 Blocks

The IPv6 block command is accessed via the *Internet* menu under the *Networks* tab.

You can view the prefixes assigned to you in the *Public IPs* menu of the Réseaux menu on the left sidebar.

| Reference                             | Unité   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Network - Dedicated Public IPv6 Ranges | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Public IP Addresses (Provider Independent)

If you have your own Provider Independent (PI) IP address, you can announce it within Cloud Temple's Autonomous System. This allows you to continue using your existing PI addresses within Cloud Temple's infrastructure and simplifies your migrations.

To do this, submit a service request specifying:

    Your Organization's Name
    The name of a contact along with their email and phone number for finalizing configuration
    The Tenant's Name
    The PI IP address block you own and wish to announce
    If not already provided, RIPE information will be requested by the support team

There is no specific billing for clients utilizing Provider Independent (PI) addresses.

### Internet Bandwidth Reservation

Internet bandwidth can be reserved in increments of 100 Mbps. The maximum capacity available for a router is 10 Gbps, potentially constrained by the technical specifications of your router.

Billing occurs at the 95th percentile over the billing period, typically a month. This means you may occasionally enjoy burst usage beyond your reserved bandwidth.

| Reference                                 | Unité    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Network - Reserved Internet Bandwidth     | 100 Mbps | csp:(region):network:traffic:internet:v1 |

__*Note:*__
*There are no __volumetric fees__ of the type 'egress fees'. You only pay for bandwidth reservation.__

## Anti-DDoS

A DDoS attack aims to degrade or take down a service by overwhelming it with illegitimate traffic.

Cloud Temple's Anti-DDoS protection shields you from malicious actors and is effective against volumetric attacks **without additional cost**: filtering occurs upstream by our telecom partners.