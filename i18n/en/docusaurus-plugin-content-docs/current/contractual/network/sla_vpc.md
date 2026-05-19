---
title: SLA VPC
slug: /contractual/network/sla-vpc
displayed_sidebar: docSidebar
---

# Service Level Agreement (SLA) – Virtual Private Cloud (VPC)

| | |
| :--- | :--- |
| **Last Updated Date** | 17 April 2026 |

This document defines the Service Level Commitments (SLA) applicable to the **Virtual Private Cloud (VPC)** product provided by **Cloud Temple** (hereinafter referred to as "the Provider" or "Cloud Temple"). It supplements Cloud Temple's General Terms of Sale and Service and forms an integral part thereof.

---

## 1. Definitions

For the purposes of this SLA, the following capitalized terms shall have the meanings set forth below:

- **Monthly Availability Rate**: The guaranteed percentage of uptime for the VPC service data plane during a calendar month.
- **VPC Service**: The set of components managed by Cloud Temple that constitute the Virtual Private Cloud: VPC router, Private Networks, and External Gateway with its NAT, DNAT, and Floating IP features.
- **Data Plane**: The network transport plane responsible for routing traffic between the private networks within the same VPC, as well as Internet connectivity via the External Gateway.
- **Control Plane**: The APIs and interfaces (Cloud Temple Console) used to create, modify, and delete VPC resources (networks, routers, Floating IPs, security rules).
- **Downtime Period**: A complete interruption of routing between the private networks within the same VPC, or a total loss of Internet connectivity via the External Gateway when enabled, as detected by Cloud Temple's monitoring tools.
- **Downtime Duration**: The uninterrupted time during which the Downtime Period is observed. To be counted under this SLA, a Downtime Duration must be at least **five (5) consecutive minutes**.

---

## 2. Service Level Agreements (SLA)

Cloud Temple commits to the following monthly availability levels:

| Component | Guaranteed Monthly Availability Rate |
| :--- | :---: |
| **VPC Data Plane** (routage inter-réseaux, NAT, DNAT) | **99.99 %** |
| **VPC Control Plane** (API, Console Cloud Temple) | **99.9 %** |

A Monthly Availability Rate of **99.99 %** for the data plane corresponds to a maximum of **4.4 minutes** of authorized downtime per calendar month.

In the event of non-compliance with these commitments, the Customer may claim Service Credits under the conditions set forth in Article 5.

---

## 3. Measurement and Scope of Availability

Monitoring and calculation of the Monthly Availability Rate are performed **exclusively by Cloud Temple's infrastructure monitoring tools**.

**Scope of responsibility:**  
This SLA covers only the network components **managed by Cloud Temple** :
- The VPC router and the internal routing table.
- Private Networks (segments L2) and their availability at the data plane level.
- The external gateway (External Gateway), its NAT and DNAT features, and the associated floating IPs.

:::info
Compute resources (VM Instances, IaaS OpenSource, IaaS VMware) connected to the VPC are subject to separate SLAs and are not covered by this document.
:::

---

## 4. SLA Exclusions

This SLA does not constitute a commitment regarding elements outside Cloud Temple's direct control. Outages resulting from the following are **not** considered Downtime Periods:

1. **Client Configurations**: Network filtering rules (Security Groups, ACLs) configured by the Client that block connectivity, IP address conflicts, misconfigured subnets or static routes.

2. **Failures of Connected Resources**: Failures at the operating system or application level hosted on compute instances (VM Instances, IaaS, Bare Metal) connected to the VPC.

3. **External Internet Connectivity**: Connectivity interruptions occurring beyond the Cloud Temple demarcation point (incidents with Internet transit providers, degradation of upstream BGP links).

4. **Scheduled Maintenance**: Maintenance activities on Cloud Temple's network infrastructure that have been subject to prior notification as part of the maintenance windows outlined in the Client's support contract.

5. **Abusive Behavior or Violation**: Suspension of the VPC service by Cloud Temple following a violation of the Terms and Conditions or security requirements (e.g., malicious network activity, failure to comply with the Acceptable Use Policy).

6. **Force Majeure**: Events beyond Cloud Temple's reasonable control (natural disasters, acts of war, national power outages, etc.).

---

## 5. Service Credits and Penalties

### 5.1 VPC Data Plan

If the 99.99% Monthly Availability Rate is not met for the data plan, the Customer is eligible for a Service Credit calculated as a percentage of the monthly billed amount for the VPC service:

| Actual Monthly Availability Rate | Service Credit |
| :--- | :---: |
| Between 99.00% and 99.98% | 10% |
| Between 95.00% and 98.99% | 25% |
| Below 95.00% | 100% |

### 5.2 VPC Control Plane

If the Monthly Availability Rate of 99.9% is not met for the control plane, the Customer is eligible for a Service Credit of **10%** of the monthly billed amount for the affected VPC service.

### 5.3 Claim Procedures

To obtain a Service Credit, the Customer must submit a reasoned request by opening a ticket with Cloud Temple Support within **thirty (30) calendar days** following the month in which the incident occurred.

The request must include:
- The UUID of the affected VPC
- The precise timestamps of the observed Downtime Period