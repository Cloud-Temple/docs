---
title: Concepts
---

## CloudTemple Internet Infrastructure

CloudTemple operates as a **Cloud Service Provider (CSP)** with its own autonomous Internet infrastructure, highly resilient and secure. Our carrier-grade connectivity relies on our own AS number, which provides us with complete routing control and guarantees high availability for all our services.

This autonomous infrastructure enables us to offer Internet connectivity with advanced features, tailored to all types of CloudTemple offerings, from dedicated hosting to IaaS solutions and PaaS services.

## Network architecture and redundancy

Our network benefits from a redundant architecture designed to optimize performance and ensure service continuity. CloudTemple operates an independent autonomous system with a set of assigned public IP prefixes, ensuring direct global connectivity.

This connectivity relies on **two distinct paths** to maximize resilience :

**Transit connectivity :** Two primary transit operators ensure global redundancy, enabling optimal routing of Internet traffic to our infrastructure.

**Exchange points :** Our presence at two Internet Exchange Points (IXP) in Paris allows us to significantly reduce latency for European users while improving regional service performance. This approach also guarantees natural redundancy against provider outages.

The use of the BGP4 protocol ensures efficient routing of your Internet traffic to the active gateway of your architecture, particularly in multi-availability zone deployment scenarios, as is the case with firewall clusters distributed across two availability zones.

## Integrated anti-DDoS protection

All incoming traffic to the CloudTemple infrastructure benefits from advanced anti-DDoS protection, provided by **F5**, a global leader in network security. This protection operates seamlessly and automatically.

Volumetric attacks are detected and mitigated directly at the F5 network edge, before even reaching the CloudTemple network. This upstream filtering ensures that no saturation can affect our Internet connections, and only legitimate requests reach our infrastructure.

**All CloudTemple services** benefit from this protection at no additional cost, including customer prefixes that can be migrated to our infrastructure. This integrated approach transforms a security constraint into an operational advantage for our customers.

## Public IP Address Allocation

CloudTemple offers a flexible Public Provider Aggregated (PA) IP address allocation system, allowing customers to reserve public IP addresses **individually** according to their specific needs.

### IP Reservation Process

Public IP address reservation is performed directly through the CloudTemple console, providing self-service and immediate management:

**Via the console API:** Can be integrated into your automation and provisioning workflows.

**Via the web console:** Intuitive interface accessible from the *Internet* section of your client area.

The reservation process follows these simple steps: log in to the console, navigate to *Internet* > *Manage IP addresses*, select *Reserve a new address*, choose between IPv4 or IPv6, and then validate the order.

### Billing

Public IP address billing is charged per unit of work (UoW) and begins as soon as the address is reserved, ensuring complete cost transparency.

| Reference | Unit | SKU |
|-----------|-------|-----|
| Network - Dedicated Public IPv4 | 1 IPv4 | RSIP-IP4-UNIT |
| Network - Dedicated Public IPv6 | 1 IPv6 | RSIP-IP6-UNIT |

## IPv4 Blocks

IPv4 provisioning is subject to **available stock limits** for our customers, per IP address.

IPv4 address orders are placed from the ***'Public IPs'*** menu under the Networks menu in the green sidebar on the left, via the ***"Order IPv4 addresses or IPv6 prefixes"*** button.

You can view the address blocks assigned to you in this same menu.

| Reference                     | Unit  | SKU                          |
| ----------------------------- | ----- | ---------------------------- |
| Dedicated Public IPv4 Network | IPv4/32 | csp:(region):network:ipv4:v2 |

## IPv6 Blocks

IPv6 prefix ordering is performed from the ***'Public IPs'*** menu in the Networks menu in the green left sidebar, via the ***"Order IPv4 addresses or IPv6 prefixes"*** button.

You can view the prefixes assigned to you in this same menu.

| Reference                             | Unit   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Network - Dedicated Public IPv6 Ranges | IPv6/48 | csp:(region):network:ipv6:v1 |

## Customer IP Prefix Migration

CloudTemple assists customers who wish to migrate their own IP prefixes to our infrastructure, thereby facilitating migration projects while preserving the existing network identity.

### Migration Benefits

This approach allows you to retain your IP address during migration to CloudTemple, ensuring seamless continuity for your applications and clients. You maintain full control over the use of your IP addresses while benefiting from the CloudTemple infrastructure.

### Integration Process

Your IP prefix (e.g., `203.0.113.0/24`) is integrated into the CloudTemple backbone network and announced from our AS. Once integrated, the prefix can be freely associated with your virtual machines, load balancers, or other services.

**All addresses in the migrated prefix automatically benefit from F5 anti-DDoS protection**, with no additional configuration or extra cost.

### Prerequisites

IP prefix migration requires that the prefix be registered in a recognized Internet registry (ARIN, RIPE, APNIC, etc.) and that you are the legitimate owner. BGP management can be handled by your teams or take advantage of CloudTemple technical support, depending on your preferences.

## Internet Bandwidth Reservation

Internet bandwidth can be reserved in increments of 100 Mbps. The maximum capacity available for a gateway is 10 Gbps, potentially limited by your gateway's technical specifications.

Billing is calculated based on the 95th percentile over the billing period, usually one month. This allows you to occasionally burst beyond your reserved capacity.

| Reference                                 | Unit     | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Network - Reserved internet bandwidth     | 100 Mbps | csp:(region):network:trafic:internet:v1 |

***Note:***
*There is no **volumetric billing** of the **'egress fees'** type. You only pay for the bandwidth reservation.*

## Availability by Product

All of these Internet connectivity features are available on all CloudTemple offerings, ensuring a consistent experience regardless of the service type used.

| Offering | Internet Connectivity | DDoS Protection | RSIP Management | Prefix Migration |
|-------|----------------------|------------------|---------------|-------------------|
| Dedicated Hosting | ✓ | ✓ | ✓ | ✓ |
| Shared Hosting | ✓ | ✓ | ✓ | ✓ |
| VMware IaaS | ✓ | ✓ | ✓ | ✓ |
| OpenSource IaaS | ✓ | ✓ | ✓ | ✓ |
| OpenShift PaaS | ✓ | ✓ | ✓ | ✓ |

This unified approach ensures that all our customers benefit from carrier-grade Internet access, with integrated security and advanced features, regardless of their technology choice.