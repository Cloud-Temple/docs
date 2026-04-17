---
title: SLA VM Instances
slug: /contractual/vm-instances/sla
---

# Service Level Agreement (SLA) – VM Instances

| | |
| :--- | :--- |
| **Last updated** | 15 April 2026 |

This document defines the Service Level Commitments (SLA) applicable to the **VM Instances** product provided by **Cloud Temple** (hereinafter "the Provider" or "Cloud Temple"). It supplements Cloud Temple's General Terms and Conditions and forms an inseparable whole with them.

---

## 1. Definitions

- **Monthly Availability Rate**: The guaranteed uptime percentage for a VM Instance during a calendar month.
- **VM Instance**: The virtual private server provisioned on demand by the Customer on Cloud Temple's cloud infrastructure, based on high-performance shared compute and storage resources.
- **Unavailability Period**: Total loss of access and external connectivity to the VM Instance, measured exclusively at the level of Cloud Temple's underlying infrastructure (instance status reported as inactive, stopped or in error by the Cloud Temple hypervisor).
- **Unavailability Duration**: Uninterrupted time during which the Unavailability Period is observed. To be counted under this SLA, an Unavailability Duration must be at least **four (4) consecutive minutes**.

---

## 2. Service Level Commitments (SLA)

Cloud Temple commits to ensuring a Monthly Availability Rate of **99.95%** for each active VM Instance billed to the Customer.

This rate equates to a maximum of **21.9 minutes** of authorized Unavailability Duration per calendar month. In the event of non-compliance, the Customer may claim Service Credits under the conditions defined in Article 5.

---

## 3. Availability Measurement & Scope

Monitoring and calculation of the Monthly Availability Rate are performed **exclusively by Cloud Temple's infrastructure monitoring tools**, polling the instance state at the virtualization layer.

**Scope of responsibility:**  
This SLA covers only the operation of compute resources (CPU, RAM) allocated on Cloud Temple's hardware infrastructure.

:::info
Network connectivity (VPC, routing) or persistent storage are covered by separate SLA documents and are not covered by this commitment.
:::

**UP status exclusion principle:**  
As soon as the VM Instance is seen as "UP" or "RUNNING" by the Cloud Temple platform, the SLA commitment is considered met, regardless of the accessibility of the Customer's application layer.

---

## 4. Exclusions from Guarantee

This SLA does not constitute a commitment on the availability of elements under the Customer's exclusive control. The following are therefore **not** considered Unavailability Periods:

1. **OS or software failures**: Guest OS crash (e.g., Kernel Panic, Blue Screen of Death), CPU or RAM overload caused by Customer processes, or internal filesystem corruption.

2. **Customer configurations**: Network or local firewall rules (iptables, firewalld) blocking access, network configuration errors within the OS via Cloud-init or post-deployment.

3. **Application failures**: Shutdown or crash of a service hosted on the VM Instance (web server, database, containers, etc.).

4. **Scheduled maintenance**: Hardware or software interventions on Cloud Temple's physical infrastructure that have been notified in advance within the maintenance windows provided by your support contract.

5. **Absence or disabling of VM tools**: The hypervisor management agents (*tools*) pre-installed by Cloud Temple on each instance are essential for measuring and guaranteeing availability. If these tools have been disabled, removed, or rendered non-functional by the customer, Cloud Temple can no longer monitor the instance or objectively record an unavailability period. The SLA is **immediately suspended** for the duration during which the tools are absent or non-operational. The presence and proper functioning of the tools are the customer's sole responsibility throughout the instance's lifetime.

6. **Abusive behavior or violation**: Suspension of the VM Instance by Cloud Temple following a violation of the General Terms or security requirements (e.g., compromise, non-compliance with Cloud Temple Marketplace rules).

7. **Force majeure**: Events beyond Cloud Temple's reasonable control.

---

## 5. Service Credits and Penalties

If the Monthly Availability Rate of 99.95% is not achieved for a given VM Instance, the Customer is eligible for compensation in the form of Service Credits.

The Service Credit is calculated as a percentage of the monthly amount billed for the impacted VM Instance:

| Monthly availability rate observed | Service Credit |
| :--- | :---: |
| Between 99.00% and 99.94% | 10% |
| Between 95.00% and 98.99% | 25% |
| Below 95.00% | 100% |

### 5.1 Claim Process

To obtain a Service Credit, the Customer must submit a justified request by opening a ticket with Cloud Temple support within **thirty (30) calendar days** following the month in which the incident occurred.

The request must include:
- The UUID of the affected VM Instance
- The precise timestamps of the observed Unavailability Period
