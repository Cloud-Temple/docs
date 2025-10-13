

---
title: Concepts
---



## Internet CloudTemple Infrastructure

CloudTemple operates as a **Cloud Service Provider (CSP)** with an independent, highly resilient and secure internet infrastructure. Our operator-type connectivity is based on a dedicated AS (Autonomous System Number) which gives us full control over routing and ensures high availability for all our services.

This autonomous infrastructure enables us to offer internet connectivity with advanced features tailored to all types of CloudTemple offerings, from dedicated hosting to IaaS solutions and PaaS services.



## Network Architecture and Redundancy

Our network benefits from a redundant architecture designed to optimize performance and ensure service continuity. CloudTemple has an independent autonomous system with a set of assigned public IP prefixes, ensuring direct global connectivity.

This connectivity relies on **two distinct paths** to maximize resilience:

**Transit Connectivity:** Two main transit operators ensure global redundancy, enabling optimal routing of Internet traffic to our infrastructure.

**Internet Exchange Points (IXPs):** Our presence at two IXPs in Paris allows us to significantly reduce latency for European users while improving regional service performance. This approach also provides natural redundancy against provider outages.

The use of the BGP4 protocol ensures efficient routing of your Internet traffic to the active gateway of your architecture, particularly in multi-availability zone deployment scenarios, such as firewall clusters distributed across two availability zones.



## Built-in DDoS Protection

All incoming traffic to the CloudTemple infrastructure benefits from advanced DDoS protection provided by **F5**, a global leader in network security. This protection works transparently and automatically.

Volumetric attacks are detected and mitigated directly at the F5 network edge, before reaching the CloudTemple network. This upstream filtering ensures that no congestion can affect our Internet connections, and only legitimate requests reach our infrastructures.

**All CloudTemple services** benefit from this protection without additional cost, including customer prefixes that can be migrated to our infrastructure. This integrated approach turns a security constraint into an operational advantage for our customers.



## Public IP Address Allocation

CloudTemple offers a flexible system for allocating public IP addresses Provider Aggregated (PA), allowing clients to reserve public IP addresses **per unit** according to their specific needs.



### Reservation Process

Reserving public IP addresses is done directly via the CloudTemple console, offering self-service and immediate management:

**Via the console API:** Possible integration into your automation and provisioning workflows.

**Via the web console:** Intuitive interface accessible from the *Internet* section of your client area.

The reservation process follows these simple steps: log in to the console, navigate to *Internet* > *Manage IP Addresses*, select *Reserve a new address*, choose between IPv4 or IPv6, then submit the order.



### Billing

Billing for public IP addresses is done by unit of work (UO) and starts from the reservation of the address, ensuring total cost transparency.

| Reference | Unit | SKU |
|-----------|------|-----|
| Network - Dedicated Public IPv4 | 1 IPv4 | RSIP-IP4-UNIT |
| Network - Dedicated Public IPv6 | 1 IPv6 | RSIP-IP6-UNIT |



## IPv4 Blocks

The delivery of an IPv4 is subject to __limited availability__ for our customers, per IP address.

The order of IPv4 addresses is carried out from the __*'Public IPs'*__ menu under the Networks menu in the left green bar, via the button __*"Order IPv4 addresses or IPv6 prefixes"*__.

It is possible to view the address blocks assigned to you in the same menu.

| Reference                     | Unit   | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 | 1 IPv4 | csp:(region):network:ipv4:v2 |



## IPv6 Blocks

The command for IPv6 prefixes is performed from the __*'Public IPs'*__ menu in the Networks section in the green bar on the left, via the button __*"Order IPv4 addresses or IPv6 prefixes"*__.

It is possible to view the prefixes assigned to you in the same menu.

| Reference                             | Unit    | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Network - Dedicated Public IPv6 Ranges | 64 IPv6 | csp:(region):network:ipv6:v1 |



## Client IP Prefix Migration

CloudTemple supports clients wishing to migrate their own IP prefixes to our infrastructure, thereby facilitating migration projects while maintaining the existing network identity.



### Advantages of the migration

This approach allows you to keep your IP address during migration to CloudTemple, ensuring perfect continuity for your applications and clients. You retain full control over the use of your IP addresses while benefiting from CloudTemple's infrastructure.



### Integration Process

Your IP prefix (e.g., `203.0.113.0/24`) is integrated into the CloudTemple backbone network and announced from our AS. Once integrated, the prefix can be freely associated with your virtual machines, load balancers, or other services.

**All addresses in the migrated prefix automatically benefit from the F5 anti-DDoS protection**, without additional configuration or surcharge.



### Requirements

IP prefix migration requires that the prefix is registered with a recognized Internet registry (ARIN, RIPE, APNIC, etc.) and that you are the legitimate owner. BGP management can be handled by your teams or benefit from CloudTemple's technical support according to your preferences.



## Reserved Internet Bandwidth

Internet bandwidth can be reserved in increments of 100 Mbps. The maximum available capacity for a gateway is 10 Gbps, potentially limited by the technical characteristics of your gateway.

Billing is based on the 95th percentile over the billing period, usually one month. You can therefore occasionally take advantage of a burst beyond your reserved capacity.

| Reference                                 | Unit    | SKU                                     |
| ----------------------------------------- | ------- | --------------------------------------- |
| Network - Reserved Internet Bandwidth     | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Note:*__
*There is no __volume-based billing__ of the __'egress fees'__ type. You only pay for the reserved bandwidth.*



## Availability by offer

The entire set of Internet connectivity features is available on all CloudTemple offers, ensuring a homogeneous experience regardless of the type of service used.

| Offer | Internet Connectivity | DDoS Protection | RSIP Management | Prefix Migration |
|-------|----------------------|------------------|-----------------|------------------|
| Dedicated Hosting | ✓ | ✓ | ✓ | ✓ |
| Shared Hosting | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

This unified approach ensures that all our customers benefit from operator-quality Internet access, with integrated security and advanced features, regardless of their technological choice.