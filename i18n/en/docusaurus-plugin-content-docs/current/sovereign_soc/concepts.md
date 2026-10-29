---
title: Concepts
---

## Introduction

The Sovereign SOC is a managed cyber-surveillance service. It handles the collection, analysis and qualification of security events from your information systems, whether they are hosted on the Trusted Cloud or in another environment. The service is end-to-end: it includes the technical detection platform, automated analysis and 24/7 human validation by a team of security analysts. You only receive qualified incident tickets, accompanied by a monitored remediation plan.

### Funnel-based qualification

Each security event goes through three successive levels of analysis, so that your teams are only called upon for confirmed incidents:

1. **Automatic detection**: real-time analysis of the collected logs, by matching against detection rules (pattern matching).
2. **AI pre-qualification**: artificial intelligence models enrich alerts with regard to known threats and vulnerabilities, and rule out obvious false positives.
3. **Human validation**: a SOC analyst qualifies the incident before the ticket is issued, then monitors the remediation.

### Sovereign SOC or SIEM

A SIEM (Security Information and Event Management) is the technical platform that collects, correlates and retains logs. The Sovereign SOC includes this platform, but also the analysis and qualification of alerts by analysts. If you already have an internal SOC team and are only looking for a collection and correlation platform, a SIEM operated by yourself or by a third party meets this need.

### Audiences and use cases

The service is intended for CIOs and CISOs who wish to outsource security monitoring without building an internal SOC, for operational teams who receive the incident tickets, and for compliance officers who need to centralize audit trails. Typical use cases:

- **Intrusion detection**: illegitimate access attempts, account compromises, privilege escalations. For example, an abnormal login outside business hours is checked by an analyst (no scheduled maintenance operation), who notifies you so that it can be blocked.
- **Ransomware detection**: mass file encryption behaviour and suspicious communications with command and control (C2) servers.
- **Infrastructure monitoring**: abnormal network flows and critical configuration changes.
- **Traceability**: centralization of the audit trails of your systems.

## Benefits

| Benefit                    | Description                                                                                                                                       |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Sovereignty                | The collected data is hosted in France, and the SOC analysts are based in France.                                                                  |
| Continuous monitoring      | Alerts are handled 24 hours a day, 7 days a week, all year round.                                                                                  |
| Qualified alerts           | The combination of automated analysis and human validation limits the requests made to your teams to confirmed incidents.                         |
| Subscription model         | The service is taken out on a subscription basis, with no upfront investment in a detection platform or in a dedicated team.                         |
| Rapid implementation       | The collection and processing architecture is pre-provisioned.                                                                                     |
| Team coordination          | When your systems are hosted on the Trusted Cloud, the cloud and security teams coordinate on change, asset and incident management.               |

## Features

| Feature                         | Description                                                                                                                       |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Log source catalogue            | Collection of logs from the main technologies of your information systems.                                                        |
| Detection rules                 | Catalogue of proven rules covering the main attack techniques, documented according to the MITRE ATT&CK framework.               |
| AI pre-qualification            | First-level automated qualification, to rule out false positives and enrich the analysis of alerts.                               |
| 24/7 human expertise            | Validation of critical alerts by a SOC analyst, proposal and monitoring of a remediation plan.                                    |
| Data partitioning               | Strict logical isolation of each customer's data.                                                                                 |
| Ticketing                       | Automatic creation of a ticket for each confirmed incident.                                                                       |
| Notifications                   | Qualified alerts sent by e-mail to the contacts you have designated.                                                              |
| Customer portal                 | Access to tickets, dashboards, the detection rules register and the service deliverables.                                         |
| Monthly follow-up               | Monthly dashboard: ticket review, changes to the monitored scope, register of the detection rules implemented.                    |

## Architecture

### Data flow

1. **Collection**: logs are collected according to the nature of each source, by a forwarding agent (forwarder) installed on your infrastructure or by API call.
2. **Transport**: logs travel through an IPsec VPN tunnel to the SOC collection enclave.
3. **Processing**: a shared collection and analysis platform applies the detection rules, complemented by an AI analysis module. Each customer's data is logically partitioned within it.
4. **Operations**: SOC analysts handle alerts from a dedicated management console, then issue the incident tickets.

### Integrations

- **Notifications**: qualified alerts sent by e-mail to the designated contacts.
- **Customer portal**: incident tracking in the service's ticketing tool.
- **Third-party ITSM tools**: interfacing with your IT service management tools can be studied on a case-by-case basis.

### Incident response organization

A security incident management procedure is drawn up with you, together with an escalation matrix. It specifies the contacts, the operating model and the incident handling process.

## Regions and availability zones

The service is operated in France: all collected data remains on national territory. The monitored systems, for their part, can be hosted on the Trusted Cloud, on a third-party cloud or on-premises, as long as their logs can be routed to the collection enclave.

## Technical specifications

| Parameter                     | Value                                                                                          |
|-------------------------------|------------------------------------------------------------------------------------------------|
| Collection                    | Forwarding agent installed on your infrastructure, or collection by API                        |
| Transport                     | IPsec VPN tunnel; TLS 1.3-compatible collection protocols                                      |
| Encryption at rest            | AES-256                                                                                        |
| Log retention                 | 90 days; a specific retention requirement can be taken into account on request                 |
| Detection method              | Pattern matching, rules documented according to MITRE ATT&CK                                   |
| Monitoring hours              | 24/7, all year round                                                                           |

### Detection rules

The detection rules included in the service are presented to and validated with you during the build phase, based on the monitored scope and the available logs. They are designed to:

- cover the most likely threats;
- apply to an information system without heavy tuning;
- have documented MITRE ATT&CK coverage, with default thresholds and criticality levels. These thresholds can be adapted based on the list of your sensitive assets.

The rule lifecycle is defined with you to keep pace with changes in the scope, threats, vulnerabilities and security incidents. The monthly follow-up lets you know which rules are in force and which risks are covered.

There are two types of new rules:

- **Simple rule**: one log source and one condition, for example the detection of a brute-force attack on an authentication.
- **Advanced rule**: several conditions, or enrichment by AI (threat intelligence, asset sensitivity).

### Service phases

1. **Subscription**: the service scope and the selected options are defined with you; you take note of the prerequisites for which you are responsible.
2. **Build**: construction of the service with you, setup of collection and detection rules, definition of the incident management organization between your teams and the SOC.
3. **Pre-run**: a one-month period dedicated to tuning the detection rules. At the end of it, a false positive rate target can be set with you.
4. **Run**: active monitoring, notifications and escalations, definition and monitoring of remediation plans, monthly governance, evolution of log sources and detection rules.

### Options

| Option                                              | Description                                                                                                                                                                  |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alignment with your risk analysis                   | Build option. Based on your cybersecurity risk analysis, the detection rules and alert criticality are aligned with your risks, during a joint workshop.                      |
| Penetration testing                                 | Run option. Security verification of an application, or deliberate triggering of detection rules to test the organization put in place end to end.                           |
| Cold log retention                                  | Long-term storage of logs, outside the detection systems, with protection of their integrity and confidentiality.                                                            |

### Limits

- The service relies on log analysis and pattern matching. It does not include advanced user and entity behaviour analytics (UEBA) features, nor complex correlation across multiple sources.
- The level of false positives depends on your context: quality of the collected data, exposure of the information system, compliance with good practices by users and administrators.

## Security and compliance

The service and its information system implement technical and organizational security measures:

- **Hosting in France**: the collected data and the AI models that analyze it are hosted in France.
- **Encryption**: data is encrypted in transit and at rest.
- **Partitioning**: partitioned architecture, logical isolation of each customer's data.
- **Security maintenance** of the technical components of the service.
- **Organizational measures**: information system usage, ethics and administration charters, background checks, confidentiality clause and security awareness training for all SOC staff.
- **Continuous monitoring**: alerts are handled 24/7 by analysts based in France.

## Reversibility

The collected data (logs) and the detection rules remain your property. They are returned to you on request, in standard formats.

## Pricing

The Sovereign SOC is billed as a fixed subscription, supplemented by a variable portion calculated on the average daily volume of ingested logs; this portion covers ingestion, 90-day retention and AI analysis. Commissioning (build) and options are billed separately. Prices are published on the product page on the Cloud Temple website:
[Sovereign SOC — pricing](https://www.cloud-temple.com/produits/sovereign-soc/).

## Best practices

- It is recommended to have the SOC collect the alerts issued by your own security solutions (xDR, web application firewall, IPS…), so that they are qualified together with the rest of your events.
- Provide the list of your sensitive assets: it makes it possible to adapt the thresholds and criticality of alerts.
- Access to the customer portal is nominative: it is your responsibility to review it regularly.
