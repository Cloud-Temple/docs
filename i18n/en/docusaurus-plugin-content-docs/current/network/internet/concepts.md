---
title: Concepts
---

## CloudTemple Internet Infrastructure

CloudTemple operates as a **Cloud Service Provider (CSP)** with an independent, highly resilient, and secure Internet infrastructure. Our operator-grade connectivity is built upon a dedicated Autonomous System Number (ASN), granting us full control over routing and ensuring high availability for all our services.

This autonomous infrastructure enables us to offer advanced Internet connectivity, tailored to all CloudTemple service offerings—from dedicated hosting to IaaS solutions and PaaS services.

## Network Architecture and Redundancy

Our network features a redundant architecture designed to optimize performance and ensure continuous service availability. CloudTemple operates an independent, self-contained system with a dedicated set of public IP prefixes, enabling direct global connectivity.

This connectivity is built on **two distinct paths** to maximize resilience:

**Transit Connectivity:** Two primary transit providers ensure global redundancy, enabling optimal routing of Internet traffic toward our infrastructure.

**Internet Exchange Points (IXPs):** Our presence at two Internet Exchange Points (IXPs) in Paris significantly reduces latency for European users while enhancing regional service performance. This approach also provides natural redundancy against provider outages.

The use of the BGP4 protocol ensures efficient routing of your Internet traffic to the active gateway of your architecture, particularly in multi-zone availability deployment scenarios—such as firewall clusters distributed across two availability zones.

## Built-in DDoS Protection

All incoming traffic to the CloudTemple infrastructure benefits from advanced DDoS protection provided by **F5**, a global leader in network security. This protection operates transparently and automatically.

Volumetric attacks are detected and mitigated directly at the F5 network edge, well before reaching the CloudTemple network. This upstream filtering ensures that no traffic saturation can impact our Internet connections, and only legitimate requests reach our infrastructure.

**All CloudTemple services** are protected at no additional cost, including customer prefixes that can be migrated to our infrastructure. This integrated approach transforms a security requirement into an operational advantage for our customers.

## Public IP Address Assignment

CloudTemple offers a flexible Public IP address assignment system based on Provider Aggregated (PA) addresses, allowing clients to reserve public IP addresses **one at a time** according to their specific requirements.

### Reservation Process

Reserving public IP addresses is done directly through the CloudTemple console, providing self-service and immediate management:

**Via the console API:** Integration possible within your automation and provisioning workflows.

**Via the web console:** Intuitive interface accessible from the *Internet* section of your client area.

The reservation process follows these simple steps: log in to the console, navigate to *Internet* > *Manage IP Addresses*, select *Reserve a new address*, choose between IPv4 or IPv6, then confirm the request.

### Billing

Billing for public IP addresses is based on unit of work (UoW) and starts as soon as the IP address is reserved, ensuring full cost transparency.

| Reference | Unit | SKU |
|-----------|------|-----|
| Network - Dedicated Public IPv4 | 1 IPv4 | RSIP-IP4-UNIT |
| Network - Dedicated Public IPv6 | 1 IPv6 | RSIP-IP6-UNIT |

## IPv4 Blocks

IPv4 addresses are delivered __within available stock limits__ for our customers, per IP address.

To order IPv4 addresses, go to the __*'Public IPs'*__ menu under Networks in the green sidebar on the left, and click the __*"Order IPv4 addresses or IPv6 prefixes"*__ button.

You can also view the address blocks assigned to you within the same menu.

| Reference                     | Unit   | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Public IPv4 Network           | IPv4/32 | csp:(region):network:ipv4:v2 |

## IPv6 Blocks

IPv6 prefix allocation is performed from the __*'Public IPs'*__ menu under Networks in the green sidebar, using the __*"Order IPv4 addresses or IPv6 prefixes"*__ button.

You can also view the prefixes assigned to you within the same menu.

| Reference                             | Unit    | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Network - Dedicated Public IPv6 Range | IPv6/48 | csp:(region):network:ipv6:v1 |

## Client IP Prefix Migration

CloudTemple supports clients wishing to migrate their own IP prefixes to our infrastructure, facilitating migration projects while preserving existing network identity.

### Benefits of Migration

This approach allows you to retain your IP identity when migrating to CloudTemple, ensuring seamless continuity for your applications and clients. You maintain full control over the use of your IP addresses while benefiting from CloudTemple's infrastructure.

### Integration Process

Your IP prefix (for example `203.0.113.0/24`) is integrated into the CloudTemple backbone network and advertised from our AS. Once integrated, the prefix can be freely assigned to your virtual machines, load balancers, or other services.

**All addresses within the migrated prefix automatically benefit from F5 anti-DDoS protection**, with no additional configuration or extra cost.

### Requirements

IP prefix migration requires that the prefix be registered with a recognized Internet registry (ARIN, RIPE, APNIC, etc.) and that you are its legitimate owner. BGP management can be handled by your own team or supported by CloudTemple's technical team, according to your preferences.

## Reserved Internet Bandwidth

Internet bandwidth is reserved in increments of 100 Mbps. The maximum available capacity for a gateway is 10 Gbps, potentially limited by the technical specifications of your gateway.

Billing is based on the 95th percentile over the billing period, typically one month. You may therefore occasionally benefit from bursts exceeding your reserved capacity.

| Reference                                 | Unit     | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Network - Reserved Internet Bandwidth     | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Note:*__
*There is no __volume-based billing__ of the type __'egress fees'__. You are charged only for the bandwidth reservation.__*

## Availability by Offer

All of these Internet connectivity features are available across all CloudTemple offers, ensuring a consistent experience regardless of the service type used.

| Offer | Internet Connectivity | DDoS Protection | RSIP Management | Prefix Migration |
|-------|----------------------|------------------|---------------|-------------------|
| Dedicated Hosting | ✓ | ✓ | ✓ | ✓ |
| Shared Hosting | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

This unified approach ensures that all our customers benefit from high-quality carrier-grade Internet access, built-in security, and advanced features, regardless of their technology choice.