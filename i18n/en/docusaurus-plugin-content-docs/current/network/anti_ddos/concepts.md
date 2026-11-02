---
title: Concepts
---

## Introduction

Anti-DDoS protects applications and services published on the Internet against volumetric distributed denial-of-service (DDoS) attacks, which aim to saturate network links. Incoming traffic is continuously monitored: in the event of an attack, illegitimate traffic is filtered upstream, and only legitimate requests reach your services.

The protection is included in the Private Backbone [Internet access](../internet/concepts.md). It is active by default and requires no configuration on your part.

### Audiences and use cases

- **High-traffic websites**: keeping the site available during an attack.
- **Critical applications**: continuity of web applications exposed on the Internet.
- **SaaS solution vendors**: protection of the platforms accessed by their customers.

## Benefits

| Benefit                    | Description                                                                                          |
|----------------------------|------------------------------------------------------------------------------------------------------|
| Service continuity         | Your services remain accessible during a volumetric attack.                                          |
| Upstream filtering         | Illegitimate traffic is filtered before it reaches the Cloud Temple network and your infrastructure. |
| Permanent monitoring       | Incoming traffic is analysed continuously, for an immediate response.                                |
| No configuration           | The protection applies automatically to public IP addresses, with no settings or intervention.       |

## Features

| Feature                 | Description                                                                                       |
|-------------------------|---------------------------------------------------------------------------------------------------|
| Volumetric protection   | Upstream traffic scrubbing to block volumetric attacks before they reach your services.           |
| Traffic analysis        | Detection and analysis of malicious traffic patterns.                                             |
| Continuous monitoring   | Permanent monitoring of incoming traffic.                                                         |
| Attack reports          | In the event of a significant attack, an incident report can be provided on request to support.   |

## Architecture

### How the protection works

Volumetric attacks are detected and mitigated at the network edge, upstream of the Cloud Temple network. When an attack is detected, illegitimate traffic is automatically diverted and filtered ("scrubbed"), without disrupting legitimate traffic, which continues to be routed to your services.

The protection operates at the network level (layers 3 and 4): it does not decrypt flows and does not inspect their content.

### Integration with other products

Anti-DDoS is a component of Internet access. It covers all services exposed on a public IP address provided by Cloud Temple, including:

- **Housing**: shared or dedicated hosting;
- **Compute**: Bare Metal, IaaS VMware, IaaS OpenSource;
- **Containers**: PaaS OpenShift, Managed Kubernetes.

The IP prefixes you migrate to the Cloud Temple infrastructure are also protected, with no additional configuration (see the [Internet access concepts](../internet/concepts.md)).

## Regions and availability zones

The protection is available in the FR1 region.

## Technical specifications

| Parameter               | Value                                                         |
|-------------------------|---------------------------------------------------------------|
| Type of attacks handled | Volumetric attacks                                            |
| Protection level        | Network (layers 3 and 4)                                      |
| Mitigation capacity     | 1 Tb/s                                                        |
| Detection               | Permanent                                                     |
| Scope                   | Public IP addresses provided by Cloud Temple and migrated prefixes |
| Configuration           | None, protection active by default                            |

### Limits

- The protection targets volumetric attacks at the network level: it does not inspect the application content of flows.
- No console or API is provided: the protection is fully managed by the Cloud Temple teams and cannot be configured.
- Attack reports are provided on request, via support.

## Security and compliance

Anti-DDoS is certified HDS and ISO 27001.

- **Encryption**: the protection does not decrypt any flows.
- **Inspection**: the content of flows is not inspected.

## Service availability

The availability objective of the Anti-DDoS service is 99.99%, measured monthly.

## Reversibility

As Anti-DDoS is included in Internet access, its reversibility follows that of the network offering: the protection is removed when the Internet service is terminated. You can retrieve the following items, free of charge:

| Exported item        | Deliverable                           | Availability lead time      |
|----------------------|---------------------------------------|-----------------------------|
| Incident reports     | Attack reports, on request            | 30 days                     |

## Pricing

Anti-DDoS is included in the Internet access offering, at no extra cost. Prices are published on the product page on the Cloud Temple website:
[Anti-DDoS — pricing](https://www.cloud-temple.com/produits/anti-ddos/).
