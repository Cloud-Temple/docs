---
title: SLA VM Instances
slug: /contractual/vm-instances/sla
displayed_sidebar: docSidebar
---

# Service Level Agreement (SLA) – VM Instances

| | |
| :--- | :--- |
| **Last Updated Date** | April 15, 2026 |

This document defines the Service Level Commitments (SLA) applicable to the **VM Instances** product provided by **Cloud Temple** (hereinafter referred to as "the Provider" or "Cloud Temple"). It supplements Cloud Temple's General Terms of Sale and Service and constitutes an inseparable part thereof.

---

## 1. Definitions

For the purposes of this SLA, the following capitalized terms shall have the meanings set forth below:

- **Monthly Availability Rate** : The percentage of guaranteed uptime for a VM instance over a calendar month.
- **VM Instance** : The virtual private server provisioned on-demand by the Client on Cloud Temple's cloud infrastructure, based on high-performance shared compute and storage resources.
- **Downtime Period** : Total loss of access and external connectivity to the VM Instance, measured exclusively at the level of Cloud Temple's underlying infrastructure (instance status reported as inactive, stopped, or in error by the Cloud Temple hypervisor).
- **Downtime Duration** : The uninterrupted time during which the Downtime Period is observed. To be counted under this SLA, a Downtime Duration must be at least **four (4) consecutive minutes**.

---

## 2. Service Level Commitments (SLA)

Cloud Temple commits to ensuring a Monthly Availability Rate of **99.95%** for each active VM Instance billed to the Customer.

This rate equates to a maximum of **21.9 minutes** of Permitted Downtime per calendar month. In the event of non-compliance with this commitment, the Customer may claim Service Credits under the conditions set forth in Article 5.

---

## 3. Measurement and Scope of Availability

Monitoring and calculation of the Monthly Availability Rate are performed **exclusively by Cloud Temple's infrastructure monitoring tools**, probing the instance state at the virtualization layer.

**Scope of responsibility:**  
This SLA covers only the operation of compute resources (Compute : CPU, RAM) allocated on Cloud Temple's hardware infrastructure.

:::info
Network connectivity (VPC, routing) or persistent storage are subject to separate SLA documents and are not covered by this commitment.
:::

**Exclusion based on UP status:**  
Once the VM Instance is seen as « UP » or « RUNNING » by the Cloud Temple platform, the SLA commitment is considered met, regardless of the accessibility of the Client's application layer.

---

## 4. Warranty Exclusions

This SLA does not constitute a commitment regarding the availability of elements that are under the exclusive control of the Client. Therefore, outages, loss of access, or failures resulting from the following are **not** considered Downtime Periods:

1. **Operating System (OS) or software failures**: Guest OS crash (ex : *Kernel Panic*, *Blue Screen of Death*), CPU or RAM overload caused by Client processes, or internal file system corruption.

2. **Client configurations**: Network or local firewall rules (iptables, firewalld) blocking access, network configuration errors within the OS via Cloud-init or post-deployment.

3. **Application failures**: Stop or crash of a service hosted on the VM Instance (serveur web, base de données, conteneurs, etc.).

4. **Scheduled maintenance**: Hardware or software interventions on Cloud Temple's physical infrastructure that have been subject to prior notification as part of the maintenance windows provided for in your support contract.

5. **Absence or deactivation of VM tools**: The hypervisor management agents (*tools*) pre-installed by Cloud Temple on each instance are essential for measuring and guaranteeing availability. If these tools have been deactivated, removed, or rendered non-functional by the client, Cloud Temple is no longer able to monitor the instance or objectively confirm a downtime period. The SLA is **immediately suspended** for the duration during which the tools are absent or non-operational. The presence and proper functioning of the tools are under the sole responsibility of the client throughout the entire lifecycle of the instance.

6. **Abusive behavior or violation**: Suspension of the VM Instance by Cloud Temple following a violation of the General Terms and Conditions or security requirements (ex : compromission, non-respect des règles de la Marketplace Cloud Temple).

7. **Force majeure**: Events beyond the reasonable control of Cloud Temple.

---

## 5. Service Credits and Penalties

If the 99.95% Monthly Availability Rate is not met for a given VM Instance, the Client is eligible for compensation in the form of a Service Credit.

The Service Credit is calculated as a percentage of the monthly billed amount for the affected VM Instance:

| Observed Monthly Availability Rate | Service Credit |
| :--- | ---: |
| Between 99.00% and 99.94% | 10% |
| Between 95.00% and 98.99% | 25% |
| Below 95.00% | 100% |

### 5.1 Claim Procedures

To obtain a Service Credit, the Customer must submit a reasoned request by opening a ticket with Cloud Temple Support within **thirty (30) calendar days** following the month in which the incident occurred.

The request must include:
- The identifier (UUID) of the affected VM Instance
- The precise timestamps of the observed Downtime Period