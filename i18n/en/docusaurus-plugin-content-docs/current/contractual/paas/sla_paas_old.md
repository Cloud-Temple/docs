---
title: PaaS Service Agreement
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
    - [8.1.2. Management Software Infrastructure for the RedHat OpenShift Platform](#812-management-software-infrastructure-for-the-redhat-openshift-platform)
    - [8.1.3. Associated Backup Infrastructure](#813-associated-backup-infrastructure)
    - [8.1.4. Implementation of Disaster Recovery or Business Continuity Solutions](#814-implementation-of-disaster-recovery-or-business-continuity-solutions)
- [9. Commitments and Service Levels](#9-commitments-and-service-levels)
  - [9.1. Availability Commitments of the RedHat OpenShift Platform](#91-availability-commitments-of-the-redhat-openshift-platform)
- [10. Applicable Shared Responsibility Model](#10-applicable-shared-responsibility-model)
  - [10.1. Provider's Responsibility and Obligations](#101-providers-responsibility-and-obligations)
  - [10.2. Provider's Liability Limitation](#102-providers-liability-limitation)
  - [10.3. Access Limitation](#103-access-limitation)
- [11. Data Deletion at End of Contract](#11-data-deletion-at-end-of-contract)
- [12. Applicable Law](#12-applicable-law)


## 1. Framework

|           |                        |
| --------- | ---------------------- |
| Reference | CT.AM.JUR.ANX.PAAS 2.0 |
| Date      | March 13, 2024         |

## 2. Acronyms

| Acronym    | Description                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Change Advisory Committee                                              |
| CMDB        | Configuration Management Database – Configuration Management Database                           |
| COPIL       | Steering Committee                                                                                          |
| COSTRAT     | Strategic Committee                                                                                          |
| DB          | Database                                                                                  |
| DRP         | Disaster Recovery Plan                                                         |
| GTI         | Intervention Time Guarantee                                                                            |
| GTR         | Resolution Time Guarantee                                                                             |
| GTE         | Escalation Time Guarantee                                                                                |
| HYPERVISEUR | Operating system enabling the execution of VMs on a computing blade                                  |
| ITIL        | Information Technology Infrastructure Library - Best practices for IT systems management |
| IAAS        | Infrastructure as a Service                                                                                 |
| MCO         | Operational Maintenance                                                                        |
| MOA         | Contracting Authority                                                                                          |
| MOE         | Project Management                                                                                            |
| OS          | Operating system                                                                                            |
| PAQ         | Quality Assurance Plan                                                                                    |
| PAAS        | Platform as a Service                                                                                       |
| SDM         | Service Delivery Manager                                                                                    |
| RFC         | Request For Change – Change request                                                                  |
| RGPD        | General Data Protection Regulation                                                  |
| RPO         | Recovery Point Objective – Freshness of restored data in case of disaster                              |
| RTO         | Recovery Time Objective – Service recovery time frame in case of disaster                             |
| SLA         | Service Level Agreement – Service level agreement                                                |
| UO          | Work Unit                                                                                               |
| VABF        | Validation of Good Functioning                                                                 |
| VABE        | Validation of Good Operability                                                             |
| VM          | Virtual Machine                                                                         |
| VSR         | Regular Service Validation                                                                              |
| SNC         | SecNumCloud                                                                                                 |


## 3. Glossary

The terms used in this document will be interpreted according to the definitions attributed to them below:

| Term                                          | Definition                                                                                                                                                                                                                                                                             |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                     | The name "Secure Temple" refers to the IaaS Infrastructure as a Service, SecNumCloud qualified, offered by Cloud Temple.                                                                                                                          |
| Region                                              | A "region" in the context of cloud computing refers to a geographically bounded set of cloud availability zones, <br/>providing network, computing, and storage services to optimize latency, performance, <br/>and local regulatory compliance. |
| Availability Zone<br/>(AZ)<br/>(Availability zone) | A specific and isolated section of cloud computing infrastructure, designed to ensure high availability and service resilience through a geographic distribution of resources.                                                                                    |
| Tenant                                              | An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security.                                                                                        |

| Term               | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incident                 | An "incident" refers to any unexpected event that disrupts the normal functioning of a system or compromises the data and infrastructure security.                                                                                                                                                                                                                                                                                   |
| Problème                 | A "problem" is a fundamental cause of one or more incidents, identified or suspected, requiring analysis and resolution to prevent its recurrence                                                                                                                                                                                                                                              |
| Changement               | A "change" refers to any modification made to the IT environment, aimed at improving or correcting systems, processes, or services.                                                                                                                                                                                                                                                                       |
| changement standard      | A "standard change" is a pre-approved, low-risk, repetitive modification following an established procedure in the IT environment.                                                                                                                                                                                                                                                                        |
| Mise en production       | action(s) of administration to implement the change once it is approved <br/>(the change, in the ITIL sense, only concerns change management and not its implementation/concretization).                                                                                                                                                                                                                  |
| Demande de service       | request for evolution subject to a procedure, whose implementation: <br/> i) does not modify the CMDB,<br/>ii) the operating mode, costs, and risks are known and accepted in advance and do not require specific rollback protocols<br/> iii) the implementation is subject to a service level agreement and included in the contract fee when carried out during business hours and working days.              |
| Element de configuration | A "configuration item" is an identifiable component of the information system, such as software, hardware, or a document,<br/> subject to management within the framework of IT service management                                                                                                                                                                                                           |
| Service                  | A "service" is a means of providing value to CLIENTs by facilitating desired outcomes without them having to manage <br/>specific costs and risks                                                                                                                                                                                                                                                        |
| Evenement                | An "event" is any detectable or identifiable occurrence in a computer system or network that may have significance for IT service management                                                                                                                                                                                                                                                               |
| Sinistre                 | A "disaster" refers to an unforeseen damaging event causing material, financial, or data losses for a CLIENT                                                                                                                                                                                                                                                                                               |
| Convention de service    | This document, established within the framework of a specific contract or the General Terms of Sale and Use (CGVU), and this, in compliance with the requirements of the SecNumCloud Reference Framework.                                                                                                                                                                                                  |
| Disponibilité            | The ability to ensure the availability and maintenance of optimal service performance, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA)                                                                                                                                                                                                                        |
| Supervision              | Monitoring of an Information System or a Service, involving the collection of various data such as measurements and alarms. <br/>This activity is limited to observation and tracking, without directly intervening on the monitored elements, a prerogative belonging to administrative operations.                                                                                                       |

## 4. Object of the Supplier's PaaS service agreement

This Service Agreement establishes the terms and conditions under which the Supplier commits to delivering to the CLIENT an infrastructure 
compliant with the specifications of the "Platform as a Service – PaaS" offer, duly qualified SecNumCloud.

Object of the Service Agreement:

1. Specify the performance requirements expected by the CLIENT in terms of the functionality and reliability of the infrastructure.
2. State the Supplier's obligations to meet the agreed service levels.
3. Identify the regulatory standards specifically applicable to the proposed infrastructure.
4. Ensure uniformity and integrity in the evaluation of the quality of services rendered.
5. Guarantee the excellence of the services provided, assessed using quantitative performance indicators.

It is stipulated that, in the event the Supplier loses its SecNumCloud qualification, this Agreement may be terminated by right, without incurring penalties, by the CLIENT. 
In such an event, the Supplier commits to informing the CLIENT of this disqualification by sending an official notice via registered mail with a request for a return receipt.

It should be noted that any modification or adjustment of the SecNumCloud qualification will not be interpreted as a revocation of the initial qualification.

## 5. Evolution of the PaaS service agreement

Modifications or additions to this service agreement arise exclusively from requests made by the designated governance bodies. 
These change proposals will be reviewed within the strategic committee, the only entity authorized to determine aspects requiring written formalization.

It is agreed that any evolution of the agreement, once validated, that alters the initially established financial conditions, will require the establishment and signing of an amendment to the current contract.

Factors that may induce a revision of this agreement include, but are not limited to:

- Adaptation of the PaaS platform orchestrated by the Supplier.
- Adjustments made to the services deployed by the Supplier.
- Variations in commitments made and applicable penalties.
- Organizational reconfigurations within the CLIENT or the Supplier.
- Expansion or reduction of the scope of services to which the CLIENT has subscribed.

Version and revision management of the agreement is recorded at the beginning of the document to facilitate tracking.

## 6. Audit 

The Supplier commits to allowing the CLIENT, or any third-party auditor designated by the latter, to review all documents necessary to attest to full compliance with the obligations related to the provisions of Article 28 of the General Data Protection Regulation (GDPR), thus facilitating the implementation of audits.

**The Supplier specifically commits to keeping at the CLIENT's disposal the list of all third parties who may access the data and to inform them of any subcontractor changes.**

By accepting this service agreement, the CLIENT explicitly authorizes:

1. __The National Agency for Information System Security (ANSSI)__ as well as the competent qualification entity to undertake the verification of the compliance of the Service and its Information System with the standards defined by the SecNumCloud Reference Framework.
2. __An information system security audit provider__, duly qualified and expressly designated by the Supplier, to conduct security audits on the Service delivered by the Supplier.

## 7. Service description

The service offer provided by the Supplier is characterized by the provision of the following services, 
which align with the shared responsibility principle detailed in the standards set by the SecNumCloud reference framework:

- The provision of a container management platform Redhat Openshift managed by the Supplier.

It is understood that the Supplier will leverage its expertise to perform the Services according to best professional practices.
conformément à leurs Spécifications et en respectant les normes de sa certification ISO/IEC 27001 ainsi que les directives du Référentiel SecNumCloud.

## 8. Implementation of the service

It is specified that all operations and physical components involved in the provision of the qualified service, which is the subject of this agreement, 
are located in the European Union. This includes, in particular, support, operational monitoring, and security monitoring (SOC).

### 8.1. Description of technical components

The PaaS (Platform as a Service) services encompass all components and services required for its optimal functioning in compliance with the SecNumCloud qualification.

In this regard, their performance and reliability are intrinsically linked to the technical components and services of the **IaaS infrastructure** of the Provider, as specified in the document [Service Agreement IaaS](../iaas/sla_iaas.md) of the Provider.

#### 8.1.1. REDHAT OpenShift service platform

The service includes provisioning within a region, over 3 availability zones,

#### 8.1.2. Redhat Openshift platform management software infrastructure

The Provider provides the CLIENT with the administration console and the necessary API for operating its RedHat OpenShift PaaS environments.
It also commits to maintaining them in optimal operational condition and ensuring continuous security.

In the specific context of the provided service, the Provider makes all the interfaces and API of the RedHat OpenShift platform available to the CLIENT within the selected tenant. It is the CLIENT's responsibility to establish appropriate security measures, such as firewalls, Web Application Firewalls (WAF), and other protective measures, as well as to define associated filtering rules to secure access to their platform in accordance with their security policy.

The Provider alerts the Client that an abnormal use of their administration console, especially in case of overloading of its command APIs (hammering), 
may trigger automatic security measures resulting in blocking access to the command APIs or certain services of the Provider. It should be noted that this situation does not constitute a service unavailability but a protection action of the Provider's Infrastructure; 
therefore, the Client cannot consider it as unavailability in their calculations.

Moreover, the Provider specifies to the Client that perfectly identical requests (duplicates) sent to their APIs are limited to one per second (Throttling). 
If the Client submits identical requests at a higher frequency, their rejection should not be interpreted as a service unavailability.

#### 8.1.3. Associated backup infrastructure

The Provider makes an integrated, dedicated, and managed backup platform available to the CLIENT for the protection of their RedHat Openshift environments data. 
The Provider ensures the operational and security condition maintenance of this integrated backup platform.
Regardless of the number of availability zones subscribed by the CLIENT, the Provider guarantees that the CLIENT's backup platform will be located outside the availability zone of the saved workloads.

The backup service is limited to the backup of the virtual machines and topology configurations of the CLIENT's SecNumCloud tenant IaaS environments.
The development and implementation of an appropriate backup policy by the CLIENT depend on the subscription to specific work units.
It is, therefore, the CLIENT's responsibility to ensure the availability of necessary technical resources from the Provider to implement their backup policy or to adjust it according to the available means.

The Provider commits to notifying the CLIENT in case of capacity constraints and providing advisory assistance for resource optimization.
The Provider's obligations will be limited to implementing the CLIENT's expressed needs concerning backup policy, within the subscribed resources' framework.

#### 8.1.4. Implementation of disaster recovery or business continuity solutions

The Provider supplies the CLIENT with all the necessary technical solutions to ensure an optimal distribution of their resources 
across various availability zones. It is the CLIENT's responsibility to effectively manage this resource distribution, 
for which they have the possibility to exploit the Provider's available tools.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms offered by the Provider to benefit from the associated disaster recovery or business continuity solutions.

## 9. Commitments and service levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of their platforms and services, ensuring their optimal functioning.

Service unavailability, subject to a performance indicator, is acknowledged as soon as it is identified by the Provider's monitoring system, 
or following a notification by a CLIENT user. The unavailability start time is set at the earliest of these two events, 
to ensure an accurate and fair downtime count.

The end of the unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools 
or by user feedback, thus ensuring effective operational resumption and faithful interruption duration measurement.

### 9.1. Availability commitments of the RedHat OpenShift platform

The Provider commits to maintaining a level of availability and performance compliant with the defined standards for each specified period.
Service Level Agreements (SLAs) apply provided that the CLIENT deploys their systems across at least two of the availability zones present in the concerned region.

In the absence of CLIENT compliance with these conditions, they will be unable to claim the application of concerned SLAs, 
which are specifically identified by an asterisk (*). Access to the SLAs is via the CLIENT interface. **The measurements are understood to be calculated monthly**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – RedHat OpenShift platform availability: guaranteed availability rate of 99.9%, calculated on a 24h/24, 7d/7 basis.

_**Remarks**_ : 

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust their internet routing configuration to 
limit the impact of this attack and safeguard their infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may employ a blackholing technique 
via the BGP community to block all traffic to the targeted IP address upstream with their suppliers, aimed at protecting the CLIENT's resources as well as those of other clients 
and the Provider's infrastructure. The Provider strongly encourages the CLIENT to adopt similar measures, such as using commercially available web application firewalls, 
and to carefully configure their security groups via the command API.*

- *The Provider emphasizes the necessity for the CLIENT to minimize traffic openings, notably by avoiding making administration ports 
**SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 10. Applicable shared responsibility model

### 10.1. Responsibility and Obligations of the Provider

The Provider commits to providing the CLIENT with user interfaces in both French and English, thus facilitating access and management of the provided services.
The CLIENT, for their part, commits to complying with the legal and regulatory constraints in force related to the data they entrust to the Provider for processing.

In the event of data transmission subject to specific legal requirements, the Provider will collaborate with the CLIENT to identify and implement 
the necessary security measures, in accordance with the Provider's obligations and within the service provision framework.

The Provider also commits to reviewing and considering specific needs related to the CLIENT's industry sectors,
respecting the limits of their responsibility, to ensure an appropriate level of security for the processed information.

If a project is likely to impact the provided service's security, the Provider commits to informing the CLIENT of potential impacts, 
the corrective measures envisaged, and residual risks, ensuring total transparency.

The Provider guarantees that they will not use the CLIENT's data for testing purposes without prior and explicit CLIENT agreement 
and commits to anonymizing and protecting the confidentiality of this data during processing.

In case of a change of subcontractor for hosting, the Provider will inform the CLIENT in advance, ensuring that this transition does not negatively impact the provided service.

At the CLIENT's request, the Provider will provide access to their internal regulations, their ethics charter, and applicable sanctions in case of non-compliance.
security policies, related events, service procedures, and specific security requirements.

### 10.2. Limitation of Liability of the Provider

The shared responsibility structure effectively limits the scope of the Provider's involvement to aspects related to delivering a functional RedHat OpenShift platform, including:

- Management of the IaaS infrastructure that supports the RedHat OpenShift platform and its provisioning,
- Management of the systems necessary for the proper functioning of the platform,
- Maintaining security conditions,
- Updating the RedHat OpenShift platform,
- Backing up essential configuration data of this platform, except for the CLIENT's data and applications which are under their responsibility.

It specifically excludes, but is not limited to:

- Updating operating systems and software installed by the CLIENT on their OpenShift environments within their rental spaces,
- Security of programs, software, and applications installed within the OpenShift environment by the CLIENT,
- Application-level data backup,
- Configuration of backup policies.

### 10.3. Limitation of Access

Within the framework of this service agreement, the Provider is strictly prohibited from accessing the CLIENT-owned tenants without prior authorization.
It is the CLIENT's responsibility to provide the necessary access to the Provider's personnel, according to the specific needs of hosting and, 
if applicable, professional support services if this option has been chosen by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for the needs related to the agreed service provision,
thus ensuring secure management in accordance with the terms of the agreement.

Remote access by third parties involved in the Provider’s service provision is strictly prohibited.
In the event that a specific technical requirement necessitates such access, it can only be established
after clearly notifying the CLIENT, providing detailed justification, and obtaining written consent.

This measure ensures the control and security of the CLIENT's data, making sure that any exceptions to the rule are duly authorized and documented.

## 11. Data Erasure at the End of the Contract

At the end of the contract, whether it expires or is terminated for any reason, the Provider commits to securely erasing all Client data, including technical data. The Provider will ensure to communicate a formal notice to the CLIENT, respecting a period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To testify to this deletion, the Provider will provide the Client with a certificate confirming the data has been erased.

## 12. Applicable Law

The applicable law for this service agreement is French law.

In the event that the Provider, within the scope of services provided to the CLIENT, involves a third party company, including a subcontractor, whose registered office, central administration, or main establishment is located in a non-EU member state, or which is owned or controlled by a third-party company domiciled outside the European Union, the Provider commits to ensuring that the said third party will have no access to the data processed by the Provider's service.

It should be noted that the data in question includes those entrusted to the Provider by the CLIENT, as well as all technical data such as the identities of beneficiaries and administrators of the technical infrastructure,
data handled by the networks, technical infrastructure logs, directory, certificates, access configurations, etc., containing information about the CLIENT.

For clarification, the notion of control is defined according to II of Article L233-3 of the Commercial Code.