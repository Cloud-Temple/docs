---
title: Convention of PaaS Service
---

**Table of Contents**

- [1. Framework](#1-framework)
- [2. Acronyms](#2-acronyms)
- [3. Glossary](#3-glossary)
- [4. Purpose of the Provider's PaaS Service Agreement](#4-purpose-of-the-providers-paas-service-agreement)
- [5. Evolution of the PaaS Service Agreement](#5-evolution-of-the-paas-service-agreement)
- [6. Audit](#6-audit)
- [7. Service Description](#7-service-description)
- [8. Service Implementation](#8-service-implementation)
  - [8.1. Description of Technical Components](#81-description-of-technical-components)
    - [8.1.1. REDHAT OpenShift Service Platform](#811-redhat-openshift-service-platform)
    - [8.1.2. Redhat Openshift Platform Management Software Infrastructure](#812-redhat-openshift-platform-management-software-infrastructure)
    - [8.1.3. Associated Backup Infrastructure](#813-associated-backup-infrastructure)
    - [8.1.4. Implementation of Business Continuity or Disaster Recovery Solutions](#814-implementation-of-business-continuity-or-disaster-recovery-solutions)
- [9. Commitments and Service Levels](#9-commitments-and-service-levels)
  - [9.1. Availability Commitments of the RedHat OpenShift Platform](#91-availability-commitments-of-the-redhat-openshift-platform)
- [10. Applicable Shared Responsibilities Model](#10-applicable-shared-responsibilities-model)
  - [10.1. Provider's Responsibility and Obligations](#101-providers-responsibility-and-obligations)
  - [10.2. Provider's Liability Limitation](#102-providers-liability-limitation)
  - [10.3. Access Limitation](#103-access-limitation)
- [11. Data Erasure at Contract End](#11-data-erasure-at-contract-end)
- [12. Applicable Law](#12-applicable-law)


## 1. Framework

|           |                        |
| --------- | ---------------------- |
| Reference | CT.AM.JUR.ANX.PAAS 2.0 |
| Date      | March 13, 2024         |

## 2. Acronyms

| Acronym    | Description                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Advisory Committee on Changes                                                      |
| CMDB        | Configuration Management Database – Configuration Management Database                                      |
| COPIL       | Steering Committee                                                                                         |
| COSTRAT     | Strategic Committee                                                                                        |
| DB          | Database                                                                                                   |
| DRP         | Disaster Recovery Plan                                                                                     |
| GTI         | Intervention Time Guarantee                                                                                |
| GTR         | Resolution Time Guarantee                                                                                  |
| GTE         | Escalation Time Guarantee                                                                                  |
| HYPERVISEUR | Operating system allowing the execution of VMs on a computing blade                                        |
| ITIL        | Information Technology Infrastructure Library - Best practices for information systems management          |
| IAAS        | Infrastructure as a Service                                                                                |
| MCO         | Maintenance of Operational Condition                                                                       |
| MOA         | Project Owner                                                                                              |
| MOE         | Project Manager                                                                                            |
| OS          | Operating System                                                                                           |
| PAQ         | Quality Assurance Plan                                                                                     |
| PAAS        | Platform as a Service                                                                                      |
| SDM         | Service Delivery Manager                                                                                   |
| RFC         | Request For Change                                                                                         |
| RGPD        | General Data Protection Regulation                                                                         |
| RPO         | Recovery Point Objective – Freshness of restored data in case of disaster                                  |
| RTO         | Recovery Time Objective – Service recovery time in case of disaster                                        |
| SLA         | Service Level Agreement                                                                                    |
| UO          | Unit of Work                                                                                               |
| VABF        | Aptitude Verification for Proper Functioning                                                               |
| VABE        | Aptitude Verification for Proper Operability                                                               |
| VM          | Virtual Machine                                                                                            |
| VSR         | Regular Service Validation                                                                                 |
| SNC         | SecNumCloud                                                                                                |

## 3. Glossary

The expressions below used in this document will be interpreted according to the definitions attributed to them below:

| Expression                                          | Definition                                                                                                                                                                               |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                     | The term "Secure Temple" refers to the Infrastructure as a Service IaaS, SecNumCloud qualified service, offered by the Cloud Temple company.                                                                                                                               |
| Region                                              | A "region" in the context of cloud computing refers to a geographically limited set of cloud availability zones,<br/>providing network, compute, and storage services to optimize latency, performance, <br/>and local regulatory compliance.                               |
| Availability Zone<br/>(AZ)<br/>(Zone Disponibilité) | A specific and isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through a geographical distribution of resources.                                                                                         |
| Tenant                                              | An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security.                                                                                             |

| Expression               | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incident                 | An "incident" refers to any unexpected event that disrupts normal system operation or compromises the security of data and infrastructure.                                                                                                                                                                                                                                                                                 |
| Problème                 | A "problem" is a fundamental cause of one or more incidents, identified or suspected, requiring analysis and resolution to prevent its recurrence                                                                                                                                                                                                                                                                                  |
| Changement               | A "change" refers to any modification made to the IT environment aimed at improving or correcting systems, processes, or services.                                                                                                                                                                                                                                                                             |
| changement standard      | A "standard change" is a pre-approved, low-risk, repetitive modification following an established procedure in the IT environment.                                                                                                                                                                                                                                                                                 |
| Mise en production       | Action(s) of change implementation management when the change is approved <br/>(change, in ITIL terms, only concerns change management and not its realization/implementation).                                                                                                                                                                                                                                      |
| Demande de service       | Request for evolution subject to a procedure, whose execution:<br/> i) does not alter the CMDB,<br/>ii) the operating mode, costs, and risks are known and accepted in advance and do not require specific rollback modalities<br/> iii) execution is subject to a service level agreement and included in the contract fee when performed during business hours on business days. |
| Element de configuration | A "configuration item" is an identifiable component of the information system, such as software, hardware, or a document,<br/> subject to management within the scope of IT service management.                                                                                                                                                                                                                   |
| Service                  | A "service" is a means of delivering value to CLIENTs by facilitating desired outcomes without requiring them to manage <br/> specific costs and risks                                                                                                                                                                                                                                                                |
| Evenement                | An "event" is any detectable or identifiable occurrence in an IT system or network that may be significant for IT service management                                                                                                                                                                                                                                                                            |
| Sinistre                 | A "disaster" refers to an unforeseen damaging event resulting in material, financial, or data losses for a CLIENT                                                                                                                                                                                                                                                                                                |
| Convention de service    | This document, established within the scope of a specific contract or General Terms of Sale and Use (CGVU), in compliance with the requirements of the SecNumCloud Reference Framework.                                                                                                                                                                                                                          |
| Disponibilité            | Ability to ensure the availability and maintenance of optimal service performance, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA)                                                                                                                                                                                                                                 |
| Supervision              | Monitoring of an Information System or a Service, involving the collection of various data such as metrics and alarms. <br/>This activity is limited to observation and tracking, without directly intervening on the monitored elements, a prerogative belonging to Administration operations.                                                                                                                        |

## 4. Purpose of the Supplier's PaaS Service Agreement

This Service Agreement establishes the terms and conditions under which the Supplier commits to provide the CLIENT with an infrastructure that conforms to the specifications of the "Platform as a Service – PaaS" offer, duly qualified SecNumCloud.

Purpose of the Service Agreement:

1. Specify the performance requirements expected by the CLIENT in terms of functionality and reliability of the infrastructure.
2. State the Supplier's obligations to meet the agreed service levels.
3. Identify the regulatory standards specifically applicable to the proposed infrastructure.
4. Ensure uniformity and integrity in the evaluation of the quality of services rendered.
5. Guarantee the excellence of the services provided, assessed by means of quantitative performance indicators.

It is stipulated that if the Supplier loses its SecNumCloud qualification, this Agreement may be terminated ipso jure, without incurring penalties, by the CLIENT. 
In such an event, the Supplier undertakes to inform the CLIENT of this disqualification by sending an official notification, by registered mail with return receipt requested.

It should be noted that a modification or adjustment of the SecNumCloud qualification will not be interpreted as a revocation of the initial qualification.

## 5. Evolution of the PaaS Service Agreement

Modifications or additions to this service agreement come exclusively from requests made by the designated governance bodies. 
These change proposals will be reviewed within the strategic committee, the only body authorized to determine aspects requiring formal documentation.

It is agreed that any evolution of the agreement, once validated, that alters the initially established financial conditions, will require the establishment and signing of an amendment to the ongoing contract.

Factors that may induce a revision of this agreement include, but are not limited to:

- The adaptation of the PaaS platform orchestrated by the Supplier.
- Adjustments made to the services deployed by the Supplier.
- Variations in commitments and applicable sanctions.
- Organizational reconfigurations within the CLIENT or the Supplier.
- Expansion or reduction of the scope of services subscribed to by the CLIENT.

The version and revision management of the agreement is recorded in the preamble of the document to facilitate tracking.

## 6. Audit 

The Supplier undertakes to allow the CLIENT, or any third-party auditor designated by the latter, to review all documents necessary to attest to full compliance with the obligations related to the provisions of Article 28 of the General Data Protection Regulation (GDPR), thereby facilitating audits.

**The Supplier specifically commits to keeping the CLIENT informed of the list of all third parties who may access the data and notify of any changes in subcontractors.**

By accepting this service agreement, the CLIENT explicitly grants authorization to:

1. __The National Cybersecurity Agency of France (ANSSI)__ as well as the competent certification entity to verify the compliance of the Service and its Information System with the standards defined by the SecNumCloud Reference Framework.
2. __An information systems security audit provider__, duly qualified and expressly designated by the Supplier, to conduct security audits on the Service provided by the Supplier.

## 7. Description of the service

The service offering provided by the Supplier is characterized by the provision of the following services, 
which align with the principle of shared responsibility detailed in the established standards of the SecNumCloud reference framework:

- The provisioning of a Redhat Openshift container management platform operated by the Supplier.

It is understood that the Supplier will leverage its expertise to deliver the Services according to best professional practices,
conformément à leurs Specifications et en respectant les normes de sa certification ISO/IEC 27001 ainsi que les directives du Référentiel SecNumCloud.

## 8. Service Implementation

It is specified that all operations and all physical components involved in providing the qualified service, which is the subject of this agreement, are located in the European Union. This includes, in particular, support, operational supervision, and security supervision (SOC).

### 8.1. Description of Technical Components

The PaaS (Platform as a Service) services encompass all the components and services required for its optimal operation in compliance with the SecNumCloud qualification.

In this regard, their performance and reliability are intrinsically linked to the technical components and services of the **IaaS infrastructure** of the Provider, as specified in the document [IaaS Service Agreement](../iaas/sla_iaas.md) of the Provider.

#### 8.1.1. REDHAT OpenShift Service Platform

The service includes the provision within a region, across 3 availability zones,

#### 8.1.2. Software Infrastructure for Managing the Redhat Openshift Platform

The Provider supplies the CLIENT with the administration console and the necessary API for operating its RedHat OpenShift PaaS environments. It also undertakes to maintain them in optimal operational condition and to ensure their continuous security.

For the specific service provided, the Provider makes available to the CLIENT all the interfaces and APIs of the RedHat OpenShift platform within the selected tenant. It is the CLIENT's responsibility to establish appropriate security measures, such as firewalls, web application firewalls (WAF), and other protective measures, and to define associated filtering rules to secure access to its platform according to its security policy.

The Provider warns the Client that an abnormal use of its administration console, particularly in the case of overloading its command APIs (hammering), may trigger automatic security measures resulting in blocking access to the command APIs or certain services of the Provider. It should be noted that this situation does not constitute service unavailability but a protection action for the Provider's Infrastructure; therefore, the Client cannot consider it as unavailability in its calculations.

Furthermore, the Provider informs the Client that identical (duplicate) requests sent to its APIs are limited to one per second (Throttling). If the Client submits identical requests at a higher frequency, their rejection should not be interpreted as service unavailability.

#### 8.1.3. Associated Backup Infrastructure

The Provider provides the CLIENT with an integrated, dedicated, and managed backup platform aimed at protecting the data of its RedHat Openshift environments. The Provider ensures the operational and security condition of this integrated backup platform. Regardless of the number of subscribed availability zones by the CLIENT, the Provider guarantees that the CLIENT’s backup platform will be located outside the availability zone of the backed-up workloads.

The backup service is limited to the backup of virtual machines and topology configurations of the CLIENT's SecNumCloud IaaS environments. The development and implementation of an adequate backup policy by the CLIENT depend on the subscription to specific work units.
It is therefore the CLIENT's responsibility to ensure the availability of necessary technical resources from the Provider for implementing its backup policy or to adjust it based on available means.

The Provider commits to notify the CLIENT in case of capacity constraints and to provide advisory assistance for the optimization of resources. The Provider's obligations will be limited to implementing the needs expressed by the CLIENT regarding backup policy, within the scope of subscribed resources.

#### 8.1.4. Implementation of Business Continuity or Disaster Recovery Solutions

The Provider provides the CLIENT with all the technical solutions necessary to ensure an optimal distribution of its resources across various availability zones. It is the CLIENT's responsibility to efficiently manage this resource distribution, for which they can utilize the Provider's available tools for this purpose.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms offered by the Provider to benefit from the associated disaster recovery or business continuity solutions.

## 9. Commitments and Service Levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its platforms and services, ensuring their optimal operation.

The unavailability of a service, which is the subject of a performance indicator, is recognized from its identification by the Provider's monitoring system or following a notification by a CLIENT user. The start of the unavailability is set at the earliest moment between these two events to ensure an accurate and fair count of downtime.

The end of the unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or by user feedback, thus ensuring an effective resumption of operations and a faithful measurement of the interruption duration.

### 9.1. RedHat OpenShift Platform Availability Commitments

The Provider commits to maintaining a level of availability and performance consistent with the standards defined for each specified period. Service Level Agreements (SLAs) apply provided the CLIENT deploys its systems across at least two of the availability zones present in the concerned region.

If these conditions are not met by the CLIENT, they will be unable to claim the application of the concerned SLAs, which are specifically identified by an asterisk (*). Access to the SLAs is available through the CLIENT interface. **Measurements are calculated monthly**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – RedHat OpenShift platform availability: guaranteed 99.9% availability rate, calculated on a 24/7 basis.

_**Remarks**_:

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of this attack and safeguard its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may resort to the blackholing technique through the BGP community to block all traffic to the targeted IP address upstream with its providers, to protect the CLIENT’s resources as well as those of other clients and the Provider's infrastructure. The Provider strongly encourages the CLIENT to adopt similar measures, such as using available web application firewall software and carefully configuring its security groups via the command API.*

- *The Provider emphasizes the need for the CLIENT to minimize flow openings, particularly avoiding making **SSH** (TCP port 22) and **RDP** (TCP port 3389) administration ports accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 10. Applicable Shared Responsibility Model

### 10.1. Provider Responsibilities and Obligations

The Provider commits to providing the CLIENT with user interfaces in both French and English, thereby facilitating access and management of the provided services.
The CLIENT, for their part, commits to complying with the applicable legal and regulatory constraints related to the data it entrusts to the Provider for processing.

In case of transmission of data subject to specific legal requirements, the Provider will cooperate with the CLIENT to identify and implement the necessary security measures, in accordance with the Provider's obligations within the scope of service provision.

The Provider also commits to considering the specific needs related to the CLIENT's business sectors, respecting the limitations of its responsibility, to ensure a security level compatible with the processed information.

If a project is likely to impact the security of the offered service, the Provider commits to inform the CLIENT of the potential impacts, the planned corrective measures, and the residual risks, ensuring complete transparency.

The Provider guarantees it will not use the CLIENT's data for testing purposes without prior and explicit CLIENT agreement and commits to anonymizing and protecting the confidentiality of these data during their processing.

In the event of a change of subcontractor for hosting, the Provider will inform the CLIENT in advance, ensuring this transition does not negatively affect the provided service.

At the CLIENT’s request, the Provider will provide access to its internal regulations, ethical charter, and applicable sanctions in case of non-compliance.
politique de sécurité, to events concerning it, to service-related procedures, and to specific security requirements.

### 10.2. Limitation of Provider's Liability

The shared responsibility structure effectively limits the Provider's intervention scope to aspects related to providing a functional RedHat OpenShift platform, including:

- Managing the IaaS infrastructure that supports the RedHat OpenShift platform and its provisioning,
- Managing the systems necessary for the proper functioning of the platform,
- Maintaining security conditions,
- Updating the RedHat OpenShift platform,
- Backing up the essential configuration data of this platform, excluding the CLIENT's data and applications, which are the CLIENT's responsibility.

Notably excludes, but is not limited to:

- Updating operating systems and software installed by the CLIENT on its OpenShift environments in its rental spaces,
- Security of programs, software, and applications installed within the OpenShift environment by the CLIENT,
- Application-level data backup,
- Configuration of backup policies.

### 10.3. Access Limitation

Under this service agreement, the Provider is strictly prohibited from accessing the CLIENT's tenants without prior authorization.
It is the CLIENT's responsibility to provide necessary access to the Provider's personnel, according to the specific needs of hosting and, 
if applicable, professional support services, if this option has been chosen by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for the purposes related to the agreed services,
thereby ensuring secure and compliant management according to the terms of the agreement.

Remote access by third parties involved in the Provider's service delivery is strictly prohibited.
In the event of a specific technical requirement for such access, it can only be established
after clearly notifying the CLIENT, providing detailed justification, and obtaining written consent.

This measure ensures the CLIENT's data control and security, with due authorization and documentation of any exception to the rule.

## 11. Data Deletion at the End of the Contract

At the contract's end, whether upon expiration or termination for any reason, the Provider commits to securely delete all Client's data, including technical data. The Provider will ensure to give the CLIENT formal notice, respecting a twenty-one (21) calendar day period. The CLIENT's data will be deleted within a maximum period of thirty (30) days following this notification.

To certify this deletion, the Provider will issue a certificate to the Client confirming data erasure.

## 12. Applicable Law

The law applicable to this service agreement is French law.

In case the Provider, within the services provided to the CLIENT, engages a third party company, including a subcontractor, whose head office, central administration, or principal place of business is located in a non-European Union member state, or is owned or controlled by a third party company domiciled outside the European Union, the Provider agrees to ensure that the said third party company will have no access to data processed by the Provider's service.

It should be noted that the data referred to includes those entrusted to the Provider by the CLIENT, as well as all technical data such as the identities of beneficiaries and administrators of the technical infrastructure, data handled by networks, technical infrastructure logs, directory, certificates, access configuration, etc., containing information about the CLIENT.

For clarification, the notion of control is defined in accordance with Article L233-3 II of the French Commercial Code.