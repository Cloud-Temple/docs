---
title: Concepts
---

## Introduction

Managed Firewall is a fully managed next-generation firewall (NGFW) cluster. It provides filtering of north-south traffic (between the Internet and your resources) and east-west traffic (between your internal segments), intrusion prevention, application inspection and VPN connectivity to your remote sites and mobile users.

The service is available in two editions:

- **Stormshield edition**: a solution from a French vendor, suited to organizations seeking technological sovereignty over their security equipment;
- **Fortinet edition**: suited to organizations that want to rely on the Fortinet ecosystem (SD-WAN, ZTNA, Security Fabric) or integrate it into their existing infrastructure.

In both editions, the service includes the Active/Passive high-availability cluster, operational management (operational maintenance, 24/7 monitoring, signature updates) and the VPN functions.

### Audiences and use cases

Managed Firewall is intended for CISOs and security teams, IT departments extending or replacing an on-premise firewall, and DevOps teams that need a dedicated firewall in front of their application clusters. Typical use cases:

- **Cloud security perimeter**: filtering of inbound and outbound traffic for your resources (virtual machines, Kubernetes clusters, databases).
- **Site-to-site VPN (IPsec)**: encrypted interconnection between your cloud resources, your on-premise datacenters, your branch offices and your partners.
- **Remote access (SSL-VPN)**: encrypted, MFA-authenticated access to internal resources for mobile employees.
- **Micro-segmentation**: isolation of network segments (DMZ, production, development, databases) with inter-segment filtering rules.
- **Application inspection and intrusion prevention**: control of the applications passing through the firewall and blocking of vulnerability exploitation attempts.
- **SD-WAN and ZTNA (Fortinet edition)**: management of multiple WAN links with automatic failover, and application access based on user identity and device posture.

## Benefits

| Benefit                      | Description                                                                                                                                              |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Operations handled for you   | Deployment, high availability, updates (firewall system, IPS signatures, URL databases) and monitoring are handled for you.                              |
| Choice of vendor             | You choose the Stormshield or Fortinet edition according to your sovereignty requirements and your existing ecosystem.                                    |
| High availability            | The Active/Passive cluster automatically fails over to the second node if a node fails.                                                                  |
| Multi-layer protection       | Stateful L3/L4 filtering, L7 application control, IPS/IDS, web filtering and antivirus are combined in a single service.                                 |
| Built-in VPN                 | Site-to-site IPsec VPN and SSL-VPN are included, with no additional VPN infrastructure.                                                                  |
| Threat intelligence          | IPS signatures, URL databases and indicators of compromise are updated automatically from the vendor's sources.                                          |
| Scalability                  | You can move up to a higher model without redesigning the architecture, with the configuration carried over.                                              |

## Features

### Features common to both editions

| Feature                            | Description                                                                                                                                                  |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Stateful firewall (L3/L4)          | Filtering by source and destination IP address, TCP/UDP port and protocol, with session state tracking.                                                      |
| Application control (L7)           | Identification and control of more than 3,000 applications, regardless of the port used: allow, block or limit per application.                              |
| Intrusion prevention (IPS/IDS)     | Detection and blocking of vulnerability exploitation attempts: attack signatures, protocol anomalies, virtual patching.                                      |
| Web filtering                      | URL categorization and filtering, blocking of malicious and phishing sites, DNS filtering, SafeSearch enforcement.                                           |
| SSL/TLS inspection                 | Decryption and inspection of HTTPS/TLS traffic, followed by transparent re-encryption. Exceptions can be defined (banking, healthcare, internal certificates). |
| Antivirus                          | Scanning of files in transit over HTTP, FTP, SMTP, IMAP and POP3.                                                                                            |
| Site-to-site IPsec VPN             | IKEv2 tunnels encrypted with AES-256-GCM with Perfect Forward Secrecy, authentication by certificates or pre-shared key, route-based VPN (VTI), Dead Peer Detection. |
| SSL-VPN                            | Remote access in full tunnel or split tunnel mode, MFA authentication (TOTP with LDAP or Active Directory), web portal or native client.                     |
| High availability                  | Active/Passive cluster with session and configuration synchronization, and automatic failover.                                                               |
| NAT/PAT                            | Source and destination address translation to expose services in a controlled way and manage Internet traffic.                                              |
| Logging                            | Logs of allowed and blocked traffic, IPS events, VPN connections and user sessions, exportable to a SIEM.                                                    |

### Features specific to the Fortinet edition

| Feature                       | Description                                                                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SD-WAN                        | Management of multiple WAN links with automatic failover, per-application load balancing and link quality monitoring (loss, latency, jitter).                      |
| ZTNA                          | Application access based on user identity and device posture (FortiClient), with continuous verification of device compliance.                                     |
| Virtual Domains (VDOM)        | Partitioning of the firewall into logically isolated instances on the same cluster, to separate environments or entities.                                          |
| FortiGuard services           | Threat intelligence: URL database (more than 175 categories), IPS and antivirus signatures, IP reputation, DNS filtering, anti-botnet.                             |
| Security Fabric integration   | Integration with the Fortinet ecosystem (FortiAnalyzer, FortiManager, FortiSIEM, FortiEDR).                                                                        |
| Anti-spam                     | Filtering of e-mail traffic (SMTP, IMAP, POP3) against spam and malicious e-mails.                                                                                 |

### Features specific to the Stormshield edition

| Feature                                | Description                                                                                                                    |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| ASQ protocol analysis                  | Inspection engine that checks the compliance of network protocols with the RFCs, beyond signatures.                            |
| Stormshield Data Security integration  | Compatibility with Stormshield Data Security for file-level and e-mail-level data encryption.                                  |
| Stormshield Management Center          | Centralized management console for security policies.                                                                          |
| Threat intelligence                    | Regular updates of IPS signatures, malicious URLs and indicators of compromise from the vendor.                                |

### Administration and monitoring

- **Policy management**: every change (filtering rule, VPN configuration) is the subject of a formal change request, handled by the service operations team.
- **Vendor interface**: access to the vendor's web interface can be offered for viewing logs and policies.
- **Monitoring**: preconfigured dashboards (traffic per interface, active sessions, IPS block rate, VPN bandwidth, high-availability status, CPU and memory).
- **Alerts**: preconfigured alerts (node unavailable, VPN tunnel down, abnormal traffic spike, attack detection, session saturation).
- **Log export**: Syslog (TCP/TLS), CEF or LEEF to your SIEM or a third party's.

## Architecture

The service is based on a two-node cluster in Active/Passive mode. The active node handles filtering, inspection and the VPN gateway; the passive node stays synchronized (sessions, configuration, routing tables) and takes over the traffic in the event of a failure.

The cluster sits between your external access points (Internet, WAN, remote sites, mobile users) and your hosted resources, which it protects in filtered network zones.

The service includes:

- **the high-availability cluster** of two nodes;
- **signature management**: automatic updates of the IPS, URL filtering, antivirus and threat intelligence databases;
- **monitoring** of the cluster status, active sessions, VPN tunnels and performance metrics;
- **administration** of the firewall by the service operations team.

### Integrations

- **VPC**: the firewall is inserted as a security gateway between the network zones of your VPC.
- **Private Backbone**: filtering of traffic between availability zones and between sites.
- **Managed Kubernetes**: dedicated firewall in front of managed Kubernetes clusters.
- **Bastion**: traced administrative access to the firewall consoles.
- **SIEM**: export of traffic logs, IPS events and VPN connections to your SIEM or a third party's.
- **Third-party equipment**: IPsec VPN compatible with any equipment that supports IKEv2; SSL-VPN authentication via Active Directory, LDAP or RADIUS, with TOTP.

## Regions and availability zones

Managed Firewall is available in the FR1 region. The infrastructure and configuration data are hosted exclusively in France.

## Technical specifications

### Stormshield edition models

Each model corresponds to a complete high-availability cluster of two nodes.

| Model  | vCPU | RAM  | Max SSL-VPN users        | Max IPsec tunnels |
|--------|------|------|--------------------------|-------------------|
| EVA1   | 1    | 2 GB | 50                       | 100               |
| EVA2   | 2    | 3 GB | 512                      | 150               |
| EVA3   | 4    | 6 GB | 512                      | 200               |

### Fortinet edition models

Each model corresponds to a complete high-availability cluster of two nodes.

| Model  | vCPU | VDOMs included |
|--------|------|----------------|
| VM02V  | 2    | 1              |
| VM04V  | 4    | 1              |
| VM08V  | 8    | 1              |

An option adds 5 VDOMs. Each VDOM has its own security policies, routing tables, network interfaces and logs.

### Common parameters

| Parameter                  | Value                                                     |
|----------------------------|-----------------------------------------------------------|
| High-availability mode     | Active/Passive (Active/Active on request)                  |
| IPsec VPN                  | IKEv2 (IKEv1 compatible)                                  |
| VPN encryption             | AES-256-GCM, AES-128-GCM                                  |
| VPN integrity              | SHA-256, SHA-384, SHA-512                                 |
| Perfect Forward Secrecy    | DH group 14 (2,048 bits) at minimum, up to group 21 (ECDH P-521) |
| VPN authentication         | X.509 certificates or pre-shared key                      |
| SSL-VPN encryption         | TLS 1.3 (TLS 1.2 at minimum)                              |
| Administration encryption  | TLS 1.3                                                   |
| Traffic logging            | All sessions, configurable volume                         |

### Limits

- Filtering rules are managed by the service operations team, in coordination with you, through the change request process.
- Direct access to the firewall command line (SSH or console) is not provided as standard.
- Stormshield models have a maximum number of SSL-VPN users and IPsec tunnels set by the license: beyond that, an upgrade to a higher model is required.
- Active/Active mode (session distribution) is available on request; the standard mode is Active/Passive.

## Security and compliance

Managed Firewall is certified HDS and ISO 27001.

- **Encryption in transit**: AES-256-GCM for VPNs (IKEv2, SSL-VPN), TLS 1.3 for administration.
- **Encryption at rest**: logs are encrypted.
- **Change governance**: every modification of the security policy follows a documented and traceable change process.
- **Traceability**: all administrative operations are logged (author, modification, date).
- **Alerts**: critical events (intrusion attempts, threshold breaches, node failure) trigger real-time alerts.

## Backup and continuity

- **High availability**: the Active/Passive cluster synchronizes sessions, configurations and routing tables, and fails over automatically if a node fails.
- **Non-disruptive maintenance**: patches are applied node by node (update of the passive node, failover, then update of the other node) to ensure service continuity.

## Versions and lifecycle

- **Fortinet edition**: FortiOS version selected according to the vendor's recommendations, with two planned major updates per year.
- **Stormshield edition**: latest stable version, with two planned major updates per year and security patches applied within 15 days.
- **IPS, antivirus and URL signatures**: automatic daily updates, or in real time depending on the vendor subscription.
- **End of support**: you are notified 90 days before the end of support of a version.

## Service availability

| Item                           | Availability objective, measured over a month |
|--------------------------------|-----------------------------------------------|
| Filtering service (cluster)    | 99.9%                                         |
| Established IPsec VPN tunnels  | 99.9%                                         |

## Reversibility

At the end of the service, you can retrieve the following items:

| Exported item            | Deliverable                                                | Availability lead time      | Cost       |
|--------------------------|------------------------------------------------------------|-----------------------------|------------|
| Configuration            | Complete firewall configuration file (vendor format)       | 15 days                     | Free of charge |
| Logs                     | Traffic and event logs (Syslog or CEF)                     | 30 days                     | Free of charge |
| VPN policies             | IPsec tunnel and SSL-VPN settings                          | 15 days                     | Free of charge |
| Migration assistance     | Technical support for a deployment on another infrastructure | On request                | On quotation |

Configuration data and logs are then securely erased within 7 days.

## Pricing

Managed Firewall is billed monthly, per high-availability cluster of two nodes, with vendor licenses, signatures and operations included. Prices are published on the product page on the Cloud Temple website:
[Managed Firewall — pricing](https://www.cloud-temple.com/produits/managed-firewall/).

## Best practices

- Choose the edition according to your requirements: vendor sovereignty (Stormshield) or SD-WAN, ZTNA and VDOM features (Fortinet).
- Size the model according to the expected number of SSL-VPN users and IPsec tunnels, with room for growth.
- Export the logs to your SIEM to correlate network events with your other security sources.
- Use the Bastion for administrative access, so that it is traced.
