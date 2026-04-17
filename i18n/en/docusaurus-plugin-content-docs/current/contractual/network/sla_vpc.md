---
title: VPC SLA
slug: /contractual/network/sla-vpc
displayed_sidebar: docSidebar
---

# Service Level Agreement (SLA) – Virtual Private Cloud (VPC)

| | |
| :--- | :--- |
| **Last updated** | April 17, 2026 |

This document defines the Service Level Agreements (SLA) applicable to the **Virtual Private Cloud (VPC)** product provided by **Cloud Temple** (hereinafter referred to as "the Provider" or "Cloud Temple"). It supplements the Cloud Temple General Terms and Conditions and forms an inseparable whole with them.

---

## 1. Definitions

Within this SLA, the following capitalized terms have the meanings set forth below:

- **Monthly Availability Rate**: The guaranteed uptime percentage for the VPC service data plane during a calendar month.
- **VPC Service**: All components managed by Cloud Temple constituting the Virtual Private Cloud: VPC router, Private Networks, and External Gateway with its NAT, DNAT, and Floating IP features.
- **Data Plane**: The network transport plane providing routing between private networks within the same VPC and Internet connectivity via the External Gateway.
- **Control Plane**: The APIs and interfaces (Cloud Temple Console) enabling the creation, modification, and deletion of VPC resources (networks, routers, floating IPs, security rules).
- **Unavailability Period**: Complete interruption of routing between private networks within the same VPC, or total loss of Internet connectivity via the enabled External Gateway, as detected by Cloud Temple's monitoring tools.
- **Downtime Duration**: Uninterrupted time during which the Unavailability Period is observed. To be counted under this SLA, a Downtime Duration must be at least **five (5) consecutive minutes**.

---

## 2. Service Level Commitments (SLA)

Cloud Temple commits to the following monthly availability levels:

| Component | Guaranteed Monthly Availability Rate |
| :--- | :---: |
| **VPC Data Plane** (inter-network routing, NAT, DNAT) | **99.99%** |
| **VPC Control Plane** (API, Cloud Temple Console) | **99.9%** |

A Monthly Availability Rate of **99.99%** for the data plane corresponds to a maximum of **4.4 minutes** of permitted downtime per calendar month.

In case of non-compliance with these commitments, the Client may claim Service Credits under the conditions defined in Article 5.

---

## 3. Availability Measurement and Scope

Monitoring and calculation of the Monthly Availability Rate are performed **exclusively by Cloud Temple's infrastructure monitoring tools**.

**Scope of responsibility:**  
This SLA covers only the network components **managed by Cloud Temple**:
- The VPC router and internal routing table.
- Private Networks (L2 segments) and their data plane availability.
- The External Gateway, its NAT, DNAT features, and associated Floating IPs.

:::info
Compute resources (VM Instances, IaaS OpenSource, IaaS VMware) connected to the VPC are subject to separate SLAs and are not covered by this document.
:::

---

## 4. Exclusions

This SLA does not constitute a commitment on elements outside Cloud Temple's direct control. The following are **not** considered Unavailability Periods:

1. **Client Configurations**: Network filtering rules (Security Groups, ACLs) configured by the Client blocking connectivity, IP address conflicts, misconfigured subnets or static routes.

2. **Connected Resource Failures**: Failures at the operating system or application level on compute instances (VM Instances, IaaS, Bare Metal) connected to the VPC.

3. **External Internet Connectivity**: Connectivity interruptions beyond Cloud Temple's point of demarcation (Internet transit provider incidents, BGP upstream link degradations).

4. **Scheduled Maintenance**: Network infrastructure maintenance operations that have been previously notified within the maintenance windows provided in the Client's support contract.

5. **Abusive Behavior or Violation**: Suspension of the VPC service by Cloud Temple following a violation of the General Terms or security requirements (e.g., malicious network activity, non-compliance with Acceptable Use Policies).

6. **Force Majeure**: Events beyond Cloud Temple's reasonable control (natural disasters, acts of war, national power outages, etc.).

---

## 5. Service Credits and Penalties

### 5.1 VPC Data Plane

If the Monthly Availability Rate of 99.99% is not achieved for the data plane, the Client is eligible for a Service Credit calculated as a percentage of the monthly amount billed for the VPC service:

| Observed monthly availability rate | Service Credit |
| :--- | :---: |
| Between 99.00% and 99.98% | 10% |
| Between 95.00% and 98.99% | 25% |
| Below 95.00% | 100% |

### 5.2 VPC Control Plane

If the Monthly Availability Rate of 99.9% is not achieved for the control plane, the Client is eligible for a Service Credit of **10%** of the monthly amount billed for the VPC service.

### 5.3 Claim Procedure

To obtain a Service Credit, the Client must submit a reasoned request by opening a ticket with Cloud Temple support within **thirty (30) calendar days** following the month in which the incident occurred.

The request must include:
- The UUID of the VPC concerned
- Precise timestamps of the observed Unavailability Period
