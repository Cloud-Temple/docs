---
title: Konzepte
---

## Cloud Internet Infrastructure

CloudTemple operates as a **Cloud Service Provider (CSP)** with an independent, highly resilient, and secure Internet infrastructure. Our operator-grade connectivity is based on our own Autonomous System Number (ASN), giving us full control over routing and ensuring high availability for all our services.

This independent infrastructure enables us to offer advanced Internet connectivity features, tailored to all CloudTemple service offerings—from dedicated hosting to IaaS solutions and PaaS services.

## Netzwerkarchitektur und Redundanz

Unser Netzwerk verfügt über eine redundant ausgelegte Architektur, die darauf abzielt, die Leistung zu optimieren und die kontinuierliche Verfügbarkeit des Dienstes sicherzustellen. CloudTemple verfügt über ein eigenständiges, unabhängiges System mit einem Satz öffentlicher IP-Präfixe, das eine direkte globale Konnektivität gewährleistet.

Diese Konnektivität basiert auf **zwei getrennten Wegen**, um die Resilienz zu maximieren:

**Transit-Konnektivität:** Zwei Haupt-Transit-Provider sorgen für globale Redundanz und ermöglichen einen optimalen Routing des Internet-Traffics zu unseren Infrastrukturen.

**Internet Exchange Points (IXP):** Unser Vorhandensein an zwei Internet Exchange Points (IXP) in Paris ermöglicht eine signifikante Reduzierung der Latenz für europäische Nutzer und verbessert die Leistung regionaler Dienste. Diese Vorgehensweise gewährleistet zudem eine natürliche Redundanz gegenüber Ausfällen von Anbietern.

Die Verwendung des BGP4-Protokolls sorgt für eine effiziente Weiterleitung Ihres Internet-Verkehrs zur aktiven Gateway-Instanz Ihrer Architektur, insbesondere in Szenarien mit Multi-Zone-Deployment, wie beispielsweise bei Clustern von Firewalls, die über zwei Verfügbarkeitszonen verteilt sind.

## Integrated DDoS Protection

All incoming traffic to the CloudTemple infrastructure benefits from advanced DDoS protection provided by **F5**, a global leader in network security. This protection operates transparently and automatically.

Volumetric attacks are detected and mitigated directly at the F5 network edge, well before reaching the CloudTemple network. This upstream filtering ensures that no congestion can affect our Internet connections, and only legitimate requests reach our infrastructure.

**All CloudTemple services** are protected at no additional cost, including customer prefixes that can be migrated to our infrastructure. This integrated approach transforms a security requirement into an operational advantage for our customers.

## Assignment of Public IP Addresses

CloudTemple offers a flexible system for assigning Provider Aggregated (PA) public IP addresses, allowing clients to reserve public IP addresses **individually** according to their specific requirements.

### Reservation process

The reservation of public IP addresses is performed directly via the CloudTemple console, enabling self-service and immediate management:

**Via the console API:** Integration possible into your automation and provisioning workflows.

**Via the web console:** Intuitive interface accessible from the *Internet* section of your client area.

The reservation process follows these simple steps: log in to the console, navigate to *Internet* > *Manage IP addresses*, select *Reserve a new address*, choose between IPv4 or IPv6, then confirm the order.

### Billing

Billing for public IP addresses is based on unit of work (UoW) and starts as soon as the IP address is reserved, ensuring full cost transparency.

| Reference | Unit | SKU |
|-----------|------|-----|
| Network - Dedicated Public IPv4 | 1 IPv4 | RSIP-IP4-UNIT |
| Network - Dedicated Public IPv6 | 1 IPv6 | RSIP-IP6-UNIT |

## IPv4 Blocks

The delivery of IPv4 addresses is subject to __available stock__ for our customers, per IP address.

To order IPv4 addresses, go to the __*'Public IPs'*__ menu under Networks in the green bar on the left, and click the __*"Order IPv4 addresses or IPv6 prefixes"*__ button.

You can also view the address blocks assigned to you in the same menu.

| Reference                     | Unit   | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Public IPv4 Network           | IPv4/32 | csp:(region):network:ipv4:v2 |

## IPv6 Blocks

The IPv6 prefix command is performed from the __*'Public IPs'*__ menu under Networks in the green sidebar, using the __*"Order IPv4 addresses or IPv6 prefixes"*__ button.

You can also view the prefixes assigned to you within the same menu.

| Reference                             | Unit    | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Network - Dedicated Public IPv6 Range | IPv6/48 | csp:(region):network:ipv6:v1 |

## IP Prefix Migration for Clients

CloudTemple supports clients wishing to migrate their own IP prefixes to our infrastructure, thereby facilitating migration projects while preserving existing network identity.

### Benefits of the migration

This approach allows you to retain your IP identity when migrating to CloudTemple, ensuring seamless continuity for your applications and clients. You maintain full control over the use of your IP addresses while benefiting from the CloudTemple infrastructure.

### Integration Process

Your IP prefix (e.g. `203.0.113.0/24`) is integrated into the CloudTemple backbone network and advertised from our AS. Once integrated, the prefix can be freely assigned to your virtual machines, load balancers, or other services.

**All addresses within the migrated prefix automatically benefit from F5 anti-DDoS protection**, without additional configuration or extra cost.

### Requirements

Migrating IP prefixes requires that the prefix be registered with a recognized Internet registry (ARIN, RIPE, APNIC, etc.) and that you are its legitimate owner. BGP management can be handled by your own team or supported by CloudTemple's technical team, according to your preferences.

## Reserved Internet Bandwidth

Internet bandwidth can be reserved in increments of 100 Mbps. The maximum available capacity for a gateway is 10 Gbps, potentially limited by the technical specifications of your gateway.

Billing is based on the 95th percentile over the billing period, typically one month. You may therefore occasionally benefit from bursts exceeding your reserved capacity.

| Reference                                 | Unit     | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Network - Reserved Internet Bandwidth     | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Note:*__
*There is no __volume-based billing__ of the type __'egress fees'__. You only pay for the reserved bandwidth.__*

## Availability by Offer

All of these Internet connectivity features are available across all CloudTemple offers, ensuring a consistent experience regardless of the service type used.

| Offer | Internet Connectivity | DDoS Protection | RSIP Management | Prefix Migration |
|-------|----------------------|------------------|---------------|-------------------|
| Dedicated Hosting | ✓ | ✓ | ✓ | ✓ |
| Shared Hosting | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

This unified approach ensures that all our customers benefit from high-quality carrier-grade Internet access, integrated security, and advanced features, regardless of their technological choice.