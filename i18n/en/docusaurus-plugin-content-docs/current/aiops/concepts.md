---
title: Concepts
---

:::info[Managed service, outside the Console]

To subscribe to AIOps, contact Cloud Temple experts, who will assess how it can integrate into your environment and which deployment mode suits you. It is not ordered from the Cloud Temple Console and has neither a view nor an API there.

:::

## Introduction

Cloud Temple's **AIOps** service is an operational intelligence platform that applies artificial intelligence to IT operations: monitoring, incident analysis and automation of operational tasks. It relies on a hybrid CMDB to put each event in context (services, dependencies, criticality). It acts as a copilot for your teams: it does not replace them.

It is intended for operations teams, production engineers, SREs (*Site Reliability Engineers*) and CIOs who want to improve service quality and reduce repetitive tasks. Typical use cases:

- reducing noise during an alert storm, by grouping the events related to the same cause into a single incident;
- detecting anomalies in backup reports and batch processing;
- anticipating incidents through the analysis of metric behavior.

## Benefits

| Benefit | Description |
|---|---|
| Responsiveness | Depending on the deployment mode, AIOps proposes (Stackless) or applies (Stackfull) known fixes. |
| Less noise | Alert correlation focuses your teams on real incidents. |
| Proactive posture | Anomaly detection reports drifts before they cause an incident. |
| Skills transfer | Resolution suggestions and proven runbooks spread the expertise of experienced engineers. |

## Features

| Feature | Description |
|---|---|
| Contextual correlation | Aggregation of alerts according to the topology, to contain alert storms. |
| Root cause analysis | Identification of the failing component in the dependency chain. |
| Semantic log analysis | Understanding of the errors in backup and processing logs, beyond return codes. |
| Anomaly detection | Learning of nominal behavior and alert in case of deviation. |
| Auto-remediation | In Stackfull mode, execution of repair scenarios framed by guardrails; in Stackless mode, execution remains with your teams. |
| Triage and routing | Categorization of the incident and routing to the right team. |
| Resolution suggestions | Matching with the knowledge base and ticket history, to propose runbooks and probable causes. |

## Architecture

AIOps works as a control tower connected to your operations tools:

- **monitoring** feeds it continuously (events, alerts, metrics and logs depending on the scope);
- the **ITSM tool** provides the operational context: incidents, changes, history;
- the **CMDB** provides the repository of services and their dependencies.

The control tower correlates these signals, enriches tickets (categorization, grouping, prioritization, runbook suggestions) and traces its actions in the ITSM tool.

### Deployment modes

- **Stackless** (default): no intrusive component added to your information system. AIOps relies on the existing collection and provides analyses, recommendations and suggestions; the execution of actions remains with your teams.
- **Stackfull**: AI agents deployed in your information system execute predefined remediation scenarios, under the governance of your ITSM processes.

### Integrations

- **Monitoring**: Nagios, Centreon, Prometheus, Zabbix.
- **ITSM**: ServiceNow, Jira.
- **Environments**: Azure, AWS, VMware.

## Regions and availability zones

Data is hosted in France, in Cloud Temple datacenters, and isolated per customer. The inference of the AI models runs in France.

## Technical specifications

| Parameter | Value |
|---|---|
| Data retention | 12 months as standard |
| Analysis frequency | Real time (stream) |
| AI models | Supervised, unsupervised and large language models (LLM) |

### Limits

- AIOps is not ordered from the Cloud Temple Console and has neither a view nor an API there.
- The scope covered and the deployment mode are defined with Cloud Temple experts.

## Security and compliance

- **Isolation**: each customer's data is isolated.
- **Location**: data hosted and AI models run in France, on Cloud Temple infrastructure.
- **Governance of actions**: in Stackfull mode, remediation scenarios are predefined, framed by guardrails and governed by your ITSM processes; in Stackless mode, AIOps executes no action.

## Reversibility

To find out how your data can be exported and deleted, contact Cloud Temple experts.

## Pricing

To subscribe to AIOps, Cloud Temple experts first assess your needs: [contact us](https://www.cloud-temple.com/contactez-nous/). See also the [AIOps page on the Cloud Temple website](https://www.cloud-temple.com/produits/ai-ops/).
