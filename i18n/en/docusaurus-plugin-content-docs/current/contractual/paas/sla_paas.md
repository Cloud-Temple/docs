---
title: SecNumCloud PaaS Service Convention
---

## Framework

| Reference | CT.AM.JUR.ANX.PAAS 2.1 |
| :--- | :--- |
| **Date** | January 21, 2025 |

## Acronyms

| Acronym | Description |
| :--- | :--- |
| **CAB** | Change Advisory Board -- Change Advisory Board |
| **CMDB** | Configuration Management Database -- Configuration Management Database |
| **COPIL** | Steering Committee |
| **COSTRAT** | Strategic Committee |
| **DB** | Database (database) |
| **DRP** | Disaster Recovery Plan (Disaster Recovery Plan) |
| **GTI** | Guaranteed Time to Intervention |
| **GTR** | Guaranteed Time to Resolution |
| **GTE** | Guaranteed Time to Escalation |
| **HYPERVISEUR** | Operating system enabling VM execution on a compute blade |
| **ITIL** | Information Technology Infrastructure Library - Best practices for information systems management |
| **IAAS** | Infrastructure as a Service |
| **MCO** | Maintenance in Operational Condition |
| **MOA** | Client (Project Owner) |
| **MOE** | Contractor (Project Executor) |
| **OS** | Operating System |
| **PAQ** | Quality Assurance Plan |
| **PAAS** | Platform as a Service |
| **SDM** | Service Delivery Manager |
| **RFC** | Request For Change -- Change Request |
| **RGPD** | General Data Protection Regulation (personal data) |
| **RPO** | Recovery Point Objective -- Data freshness upon restoration after an incident |
| **RTO** | Recovery Time Objective -- Service restoration time after an incident |
| **SLA** | Service Level Agreement -- Service Level Agreement |
| **UO** | Work Unit |
| **VABF** | Validation of Operational Readiness |
| **VABE** | Validation of Operational Exploitability |
| **VM** | Virtual Machine (virtual machine) |
| **VSR** | Regular Service Validation |
| **SNC** | SecNumCloud |

## Glossary

The terms used in this document shall be interpreted according to the definitions provided below:

| Term | Definition |
| :--- | :--- |
| **"Secure Temple"** | Refers to the SecNumCloud-qualified IaaS service offered by Cloud Temple, as defined in the attestation available on the ANSSI website and included as an appendix to this Service Agreement. |
| **Region** | In the context of cloud computing, a "region" denotes a geographically defined set of cloud availability zones, providing network, computing, and storage services to optimize latency, performance, and local regulatory compliance. |
| **Availability Zone (AZ)** | A specific, isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through geographic distribution of resources. |
| **Tenant** | An isolated instance dedicated to a user or group of users, sharing a common infrastructure while maintaining data and application independence and security |

| Term | Definition |
| :--- | :--- |
| **Incident** | An "incident" refers to any unforeseen event that disrupts the normal operation of a system or compromises data security. |
| **Problem** | A "problem" is the root cause of one or more incidents, identified or suspected, requiring analysis and resolution to prevent recurrence. |
| **Change** | A "change" refers to any addition, modification, or deletion affecting the Service, which has been authorized, planned, or supported. |
| **Standard Change** | A "standard change" is a change governed by a predefined procedure, whose production implementation process and impacts (including financial ones) are known and accepted in advance by the Parties. It is then included in the standard changes catalog and may, depending on the case, have a GTI and a GTR. |
| **Production Deployment** | The administrative action(s) required to implement a change once it has been approved (in the ITIL sense, "change" refers only to change management, not its execution or realization). |
| **Service Request** | A request for evolution subject to a procedure, whose implementation: i) does not modify the CMDB, ii) has known and pre-approved operational procedures, costs, and risks, and does not require specific rollback mechanisms, iii) is subject to a Service Level Agreement and included in the contract fee when performed during business hours and business days. |
| **Configuration Item** | A "configuration item" is an identifiable component of an information system, such as software, hardware, or documentation, subject to management within the framework of IT service management. |
| **Service** | A "service" refers to the SecNumCloud-qualified service delivered by the Provider to the Client, as described in the "Service Description" section of this Service Agreement. |
| **Event** | An "event" is any detectable or identifiable occurrence that may have significance for the management of the Service. |
| **Incident (Claim)** | A "claim" refers to a serious event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected Party. |
| **Service Agreement** | This document, established within the framework of a specific contract or General Terms and Conditions of Sale and Use (GTC), in compliance with the requirements of the SecNumCloud Reference Framework. |
| **Availability** | The ability to ensure service availability and maintain optimal performance, in accordance with the criteria and commitments defined in the Service Level Agreements (SLAs). |
| **Monitoring** | The surveillance of an Information System or a Service, involving the collection of various data such as measurements and alarms. This activity is limited to observation and tracking, without direct intervention on the monitored elements—a prerogative reserved for administrative operations. |

## Purpose of the PaaS Service Agreement by the Provider

This Service Agreement sets forth the terms and conditions under which the Provider undertakes to deliver to the CLIENT an infrastructure compliant with the specifications of the "Platform as a Service -- PaaS" offer, duly certified SecNumCloud.

Purpose of the Service Agreement:

1. Specify the performance requirements expected by the CLIENT in terms of functionality and reliability of the infrastructure.
2. Outline the Provider’s obligations to meet the agreed-upon service levels.
3. Identify the applicable regulatory standards specifically related to the proposed infrastructure.
4. Ensure consistency and integrity in the evaluation of the quality of services delivered.
5. Guarantee the excellence of the services provided, assessed through quantitative performance indicators.

It is stipulated that, in the event the Provider loses its SecNumCloud certification, this Contract may be terminated immediately and without penalty by the CLIENT. In such a case, the Provider undertakes to notify the CLIENT of this loss of certification by sending an official notice via registered letter with acknowledgment of receipt.

It should be noted that any modification or adjustment to the SecNumCloud certification shall not be interpreted as a revocation of the initial certification.

## Evolution of the PaaS Service Agreement

Any modifications or additions to this Service Agreement shall result exclusively from requests submitted by the designated governance bodies. Proposed changes will be reviewed within the Strategic Committee, the sole authorized body responsible for determining aspects requiring formal written documentation.

It is agreed that any evolution of the Agreement, after validation, which alters the initially established financial conditions, will require the preparation and signing of an amendment to the current contract.

Factors that may trigger a revision of this Agreement include, but are not limited to:

- The PaaS platform adjustments orchestrated by the Provider.
- Modifications to services deployed by the Provider.
- Changes in commitments made and applicable penalties.
- Organizational reconfigurations within either the CLIENT or the Provider.
- Expansion or reduction of the scope of services subscribed to by the CLIENT.

Version and revision management of the Agreement is documented in the preamble of the document to facilitate tracking.

## Audit

The Provider undertakes to allow the CLIENT, or any third-party auditor designated by the CLIENT, to access all documents necessary to verify full compliance with the obligations related to compliance with the provisions of Article 28 of the General Data Protection Regulation (GDPR), thereby facilitating the conduct of audits.

**The Provider specifically undertakes to make available to the CLIENT a list of all third parties who may access the data, and to inform the CLIENT of any changes to subcontractors.**

By accepting this Service Agreement, the CLIENT grants explicit authorization to:

1. **The National Agency for the Security of Information Systems (ANSSI)**, as well as the competent qualification body, to carry out verification of the compliance of the Service and its Information System with the standards defined by the SecNumCloud Reference Framework.
2. **A qualified information systems security auditor**, duly qualified and expressly designated by the Provider, to conduct security audits concerning the Service delivered by the Provider.

## Service Description

The service offering provided by the Contractor is characterized by the delivery of the following services, which align with the shared responsibility model detailed in the standards established by the SecNumCloud reference framework:

- Provision of a Red Hat OpenShift container management platform, operated by the Contractor.

It is understood that the Contractor will leverage its expertise to deliver the Services in accordance with professional best practices, consistent with their Specifications, and in compliance with the ISO/IEC 27001 certification standards as well as the guidelines of the SecNumCloud Reference Framework.

## Service Implementation

It is specified that all operations and physical components involved in providing the qualified service, the subject of this agreement, are located within the European Union. This includes, in particular, support, operational monitoring, and security monitoring (SOC).

### Technical Components Description

PaaS (Platform as a Service) services encompass all components and services required for their optimal operation, in compliance with SecNumCloud certification standards.

In this regard, their performance and reliability are inherently linked to the technical components and services of the **IaaS infrastructure** provided by the Supplier, as specified in the Supplier's [IaaS Service Agreement](../iaas/sla_iaas.md).

#### REDHAT OpenShift Service Platform

The service encompasses provisioning within a region, across 3 availability zones,

#### Software Infrastructure for Red Hat OpenShift Platform Management

The Supplier provides the COMMANDITAIRE with the administration console and the necessary APIs for operating its Red Hat OpenShift PaaS environments. The Supplier further commits to maintaining these components in optimal operational condition and ensuring their continuous security.

Within the specific scope of the service provided, the Supplier makes available all interfaces and APIs of the Red Hat OpenShift platform within the selected tenant. It is the responsibility of the COMMANDITAIRE to implement appropriate security measures, such as firewalls (firewall), web application firewalls (WAF), and other protective measures, as well as to define the associated filtering rules to secure access to its platform in accordance with its security policy.

The Supplier alerts the COMMANDITAIRE that abnormal use of its administration console—particularly API command hammering—may trigger automatic security measures resulting in the blocking of access to the command APIs or certain Supplier services. It should be emphasized that this situation does not constitute a service outage but rather a protective action taken to safeguard the Supplier’s infrastructure; therefore, the COMMANDITAIRE must not consider it as an unavailability when performing its calculations.

Furthermore, the Supplier informs the COMMANDITAIRE that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the COMMANDITAIRE submits identical requests at a higher frequency, their rejection must not be interpreted as a service unavailability.

#### Associated Backup Infrastructure

The Provider makes available to the CLIENT an integrated, dedicated, and managed backup platform designed to protect the data of the CLIENT's RedHat OpenShift environments. The Provider ensures the operational readiness and security of this integrated backup platform. Regardless of the number of availability zones subscribed to by the CLIENT, the Provider guarantees that the CLIENT's backup platform will be located outside the availability zone of the workloads being backed up.

The backup service is limited to backing up virtual machines and topology configurations of the IaaS environments of the SecNumCloud tenants of the CLIENT. The development and implementation of an appropriate backup policy by the CLIENT depend on the subscription to specific work units. Therefore, it is the CLIENT's responsibility to ensure the availability of the necessary technical resources with the Provider to implement its backup policy or adjust it according to available resources.

The Provider undertakes to notify the CLIENT in case of capacity constraints and to provide advisory assistance for resource optimization. The Provider's obligations are limited to implementing the backup policy requirements expressed by the CLIENT, within the scope of the subscribed resources.

#### Implementation of Business Continuity or Disaster Recovery Solutions

The Provider supplies the CONTRACTOR with all necessary technical solutions to ensure optimal distribution of its resources across multiple availability zones. It is the CONTRACTOR's responsibility to effectively manage this resource distribution, for which it may utilize the tools provided by the Provider for this purpose.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms offered by the Provider, in order to benefit from the associated business continuity or disaster recovery solutions.

## Commitments and Service Levels

The Provider undertakes to ensure continuous monitoring of the performance and security integrity of its platforms and services, ensuring optimal operation.

Service unavailability, subject to a performance indicator, is acknowledged as soon as it is detected by the Provider’s monitoring system, or following notification from a user of the CLIENT. The start of unavailability is set at the earliest of these two events, ensuring accurate and fair calculation of downtime.

The end of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider’s monitoring tools or by user feedback, thereby ensuring an effective resumption of operations and a faithful measurement of the interruption duration.

### RedHat OpenShift Platform Availability Commitments

The Provider commits to maintaining an availability and performance level compliant with the standards defined for each specified period. Service Level Agreements (SLAs) apply provided that the CLIENT implements its systems across at least two of the available zones within the relevant region.

In the event that the CLIENT fails to meet these conditions, the CLIENT will be unable to claim the application of the corresponding SLAs, which are specifically identified by an asterisk (\*). SLA accessibility is provided through the CLIENT interface. **Measurements are calculated on a monthly basis**:

- \*\*SLA 1 (\*) : IC-PAAS_SNC-01\*\* -- RedHat OpenShift platform availability: guaranteed availability rate of 99.9%, calculated on a 24/7 basis.

***Notes***:

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact of the attack and protect its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may employ blackholing via the BGP community to block all traffic destined for the targeted IP address upstream with its providers, with the aim of safeguarding the CLIENT’s resources as well as those of other CLIENTs and the Provider’s infrastructure. The Provider strongly encourages the CLIENT to adopt similar protective measures, such as deploying commercially available web application firewalls, and to carefully configure its security groups via the command API.*

- *The Provider emphasizes the importance for the CLIENT to minimize open traffic flows, particularly by avoiding exposing administrative ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) to the entire Internet (0.0.0.0/0 subnet), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## Shared Responsibility Model Applicable

### Responsibilities and Obligations of the Provider

The Provider undertakes to make available to the CLIENT user interfaces in both French and English, thereby facilitating access to and management of the services provided. In turn, the CLIENT undertakes to comply with applicable legal and regulatory requirements relating to the data entrusted to the Provider for processing.

In the event of data transmission subject to specific legal requirements, the Provider will collaborate with the CLIENT to identify and implement the necessary security measures, in accordance with the Provider’s obligations and within the scope of the service provision.

The Provider also undertakes to review and take into account the specific needs related to the CLIENT’s industry sectors, while respecting the limits of its liability, to ensure an appropriate level of security for the processed information.

If a project is likely to impact the security of the Service provided, or its availability, or result in a loss of functionality, the Provider undertakes to inform the CLIENT, through the console or by email to the designated CLIENT contact, within a reasonable timeframe, about the potential impacts, the corrective measures being considered, and the residual risks involved, ensuring full transparency.

The Provider undertakes not to use the CLIENT’s production data for testing purposes, except with the prior explicit authorization of the CLIENT. In such cases, the Provider undertakes to anonymize these data and ensure their confidentiality during the anonymization process.

In the event of a change in the subcontractor responsible for hosting, the Provider will inform the CLIENT in advance, ensuring that this transition does not negatively affect the provided service.

Upon request by the CLIENT, the Provider will provide access to its internal regulations, code of ethics, applicable sanctions for non-compliance with its security policy, relevant events, service-related procedures, and specific security requirements.

The Provider undertakes to inform the CLIENT of any upcoming changes to software components under Cloud Temple’s responsibility, provided that full compatibility cannot be guaranteed.

### Provider Liability Limitation

The shared responsibility model effectively limits the Provider's scope of intervention to aspects related to delivering a functional RedHat OpenShift platform, including:

- Management of the IaaS infrastructure supporting the RedHat OpenShift platform and its provisioning,
- Management of systems necessary for the proper operation of the platform,
- Maintenance of security conditions,
- Updating the RedHat OpenShift platform,
- Backing up essential configuration data of the platform, excluding data and applications of the CLIENT, which remain the CLIENT's responsibility.

This excludes, among others but not limited to:

- Updating operating systems and software installed by the CLIENT on its OpenShift environments within its dedicated spaces,
- Security of programs, software, and applications installed by the CLIENT within the OpenShift environment,
- Application-level data backup,
- Configuration of backup policies.

### Access Restrictions

Under the terms of this service agreement, the Provider is formally prohibited from accessing any assets belonging to the CLIENT without prior authorization. It is the CLIENT’s responsibility to provide necessary access to the Provider’s personnel, as required by the specific hosting needs and, where applicable, professional support services, if such an option has been selected by the CLIENT.

The CLIENT acknowledges that such access is granted exclusively for the purposes related to the provision of the agreed services, thereby ensuring secure and compliant management in accordance with the terms of the agreement.

Remote access by third parties involved in the Provider’s service delivery is strictly prohibited. In the event that a specific technical requirement necessitates such access, it may only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining the CLIENT’s written approval.

This measure ensures control and security of the CLIENT’s data, by guaranteeing that any exception to the rule is duly authorized and properly documented.

## Data Deletion at Contract End

Upon termination of the contract, whether by expiry or for any other reason, the Provider undertakes to securely erase all data belonging to the CLIENT, including technical data. The Provider will ensure to issue a formal notice to the CLIENT, respecting a notice period of twenty-one (21) calendar days. The CLIENT’s data will then be deleted within a maximum period of thirty (30) days following this notification.

To confirm this deletion, the Provider will provide the CLIENT with a certificate verifying the erasure of the data.

## Applicable Law

The governing law for this Service Agreement is French law.

In the event that the Provider, in the course of providing services to the CLIENT, engages a third-party company—including a subcontractor—whose registered office, central administration, or principal establishment is located in a country that is not a member of the European Union, or which is owned or under the control of a third-party company domiciled outside the European Union, the Provider undertakes to ensure that such third party shall have no access to the data processed by the Provider’s service.

It should be noted that the data referred to includes data entrusted to the Provider by the CLIENT, as well as all technical data such as identities of beneficiaries and administrators of the technical infrastructure, data handled by the networks, technical infrastructure logs, directories, certificates, access configurations, etc., containing information about the CLIENT.

For the avoidance of doubt, the concept of "control" is defined in accordance with paragraph II of Article L233-3 of the French Commercial Code.