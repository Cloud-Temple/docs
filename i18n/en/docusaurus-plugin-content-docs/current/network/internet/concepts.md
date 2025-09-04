---
title: Concepts
---

## CloudTemple Internet Infrastructure

CloudTemple operates as a **Cloud Service Provider (CSP)** with an autonomous, highly resilient and secure Internet infrastructure. Our carrier-grade connectivity relies on our own AS (Autonomous System Number) which gives us complete control over routing and guarantees high availability for all our services.

This autonomous infrastructure allows us to offer Internet connectivity with advanced features, adapted to all types of CloudTemple offerings, from dedicated hosting to IaaS solutions and PaaS services.

## Network architecture and redundancy

Our network benefits from a redundant architecture designed to optimize performance and guarantee service continuity. CloudTemple has an independent autonomous system with a set of assigned public IP prefixes, ensuring direct global connectivity.

This connectivity relies on **two distinct paths** to maximize resilience:

**Transit connectivity:** Two main transit operators ensure redundancy at the global level, enabling optimal routing of Internet traffic to our infrastructures.

**Exchange points:** Our presence at two exchange points (IXP) in Paris allows us to significantly reduce latency for European users while improving the performance of regional services. This approach also guarantees natural redundancy against supplier failures.

The use of the BGP4 protocol guarantees efficient routing of your Internet flows to the active gateway of your architecture, particularly in multi-availability zone deployment scenarios, as is the case for firewall clusters distributed between two availability zones.

## Integrated anti-DDoS protection

All incoming traffic to the CloudTemple infrastructure benefits from advanced anti-DDoS protection, provided by **F5**, a global leader in network security. This protection works transparently and automatically.

Volumetric attacks are detected and mitigated directly at the edge of the F5 network, before even reaching the CloudTemple network. This upstream filtering ensures that no saturation can affect our Internet connections, and only legitimate requests reach our infrastructures.

**All CloudTemple services** benefit from this protection at no extra cost, including client prefixes that can be migrated to our infrastructure. This integrated approach transforms a security constraint into an operational advantage for our clients.

## Public IP address allocation

CloudTemple offers a flexible system for allocating Provider Aggregated (PA) public IP addresses, allowing clients to reserve public IP addresses **individually** according to their specific needs.

### Reservation process

Public IP address reservation is performed directly via the CloudTemple console, offering autonomous and immediate management:

**Via the console API:** Possible integration into your automation and provisioning workflows.

**Via the web console:** Intuitive interface accessible from the *Internet* section of your client area.

The reservation process follows these simple steps: connect to the console, navigate to *Internet* > *Manage IP addresses*, select *Reserve a new address*, choose between IPv4 or IPv6, then validate the order.

### Billing

Public IP address billing is performed per work unit (WU) and begins as soon as the address is reserved, guaranteeing complete cost transparency.

| Reference | Unit | SKU |
|-----------|------|-----|
| Network - Dedicated Public IPv4 | 1 IPv4 | RSIP-IP4-UNIT |
| Network - Dedicated Public IPv6 | 1 IPv6 | RSIP-IP6-UNIT |

## IPv4 blocks

IPv4 delivery is subject to __available stock limits__ for our clients, per IP address.

IPv4 address ordering is performed from the __*'Public IPs'*__ menu in the Networks menu in the green banner on the left, via the __*"Order IPv4 addresses or IPv6 prefixes"*__ button.

You can view the address blocks assigned to you in this same menu.

| Reference                     | Unit   | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Network - Dedicated Public IPv4 | 1 IPv4 | csp:(region):network:ipv4:v2 |

## IPv6 blocks

IPv6 prefix ordering is performed from the __*'Public IPs'*__ menu in the Networks menu in the green banner on the left, via the __*"Order IPv4 addresses or IPv6 prefixes"*__ button.

You can view the prefixes assigned to you in this same menu.

| Reference                             | Unit    | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Network - Dedicated Public IPv6 ranges | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Client IP prefix migration

CloudTemple supports clients wishing to migrate their own IP prefixes to our infrastructure, thus facilitating migration projects while maintaining existing network identity.

### Migration advantages

This approach allows you to maintain your IP identity when migrating to CloudTemple, ensuring perfect continuity for your applications and clients. You retain complete control over the use of your IP addresses while benefiting from the CloudTemple infrastructure.

### Integration process

Your IP prefix (for example `203.0.113.0/24`) is integrated into the CloudTemple backbone network and announced from our AS. Once integrated, the prefix can be freely associated with your virtual machines, load balancers or other services.

**All addresses in the migrated prefix automatically benefit from F5 anti-DDoS protection**, without additional configuration or extra cost.

### Required conditions

IP prefix migration requires that the prefix be registered in a recognized Internet registry (ARIN, RIPE, APNIC, etc.) and that you are the legitimate owner. BGP management can be handled by your teams or benefit from CloudTemple technical support according to your preferences.

## Internet bandwidth reservation

Internet bandwidth can be reserved in increments of 100 Mbps. The maximum capacity available for a gateway is 10 Gbps, potentially limited by the technical characteristics of your gateway.

Billing is performed at the 95th percentile over the billing period, usually one month. You can therefore occasionally benefit from a burst beyond your reserved capacity.

| Reference                                 | Unit     | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Network - Reserved internet bandwidth    | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Note:*__
*There is no __volumetric billing__ of the __'egress fees'__ type. You only pay for bandwidth reservation.__*

## Availability by offering

All of these Internet connectivity features are available on all CloudTemple offerings, guaranteeing a consistent experience regardless of the type of service used.

| Offering | Internet Connectivity | DDoS Protection | RSIP Management | Prefix Migration |
|----------|----------------------|------------------|-----------------|------------------|
| Dedicated hosting | ✓ | ✓ | ✓ | ✓ |
| Shared hosting | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

This unified approach ensures that all our clients benefit from carrier-grade Internet access, with integrated security and advanced features, regardless of their technological choice.
