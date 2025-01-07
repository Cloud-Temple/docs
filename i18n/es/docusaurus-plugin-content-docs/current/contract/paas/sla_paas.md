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
    - [8.1.2. Management Software Infrastructure for Redhat OpenShift Platform](#812-management-software-infrastructure-for-redhat-openshift-platform)
    - [8.1.3. Associated Backup Infrastructure](#813-associated-backup-infrastructure)
    - [8.1.4. Implementation of Disaster Recovery or Business Continuity Solutions](#814-implementation-of-disaster-recovery-or-business-continuity-solutions)
- [9. Service Commitments and Levels](#9-service-commitments-and-levels)
  - [9.1. Availability Commitments of the RedHat OpenShift Platform](#91-availability-commitments-of-the-redhat-openshift-platform)
- [10. Applicable Shared Responsibility Model](#10-applicable-shared-responsibility-model)
  - [10.1. Provider's Responsibility and Obligations](#101-providers-responsibility-and-obligations)
  - [10.2. Provider's Liability Limitation](#102-providers-liability-limitation)
  - [10.3. Access Limitation](#103-access-limitation)
- [11. Data Erasure at Contract Termination](#11-data-erasure-at-contract-termination)
- [12. Governing Law](#12-governing-law)


## 1. Framework

|           |                        |

| --------- | ---------------------- |
| Reference  | CT.AM.JUR.ANX.PAAS 2.0 |
| Date       | March 13, 2024         |

## 2. Acronyms

| Acronym     | Description                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| CAB         | Change Advisory Board – Committee advising on changes                                                        |
| CMDB        | Configuration Management Database – Configuration Management Database                                        |
| COPIL       | Steering Committee                                                                                           |
| COSTRAT     | Strategic Committee                                                                                          |
| DB          | Database (base de données)                                                                                  |
| DRP         | Disaster Recovery Plan (Plan de reprise d'activité)                                                         |
| GTI         | Guaranteed Intervention Time (Garantie de Temps d’Intervention)                                             |
| GTR         | Guaranteed Resolution Time (Garantie de Temps de Résolution)                                                |
| GTE         | Guaranteed Escalation Time (Garantie de Temps d’Escalade)                                                   |
| HYPERVISEUR | Operating system allowing the execution of VMs on a compute blade                                           |
| ITIL        | Information Technology Infrastructure Library - Best practices for IT system management                     |
| IAAS        | Infrastructure as a Service                                                                                 |
| MCO         | Operational Maintenance                                                                                    |
| MOA         | Project Owner                                                                                               |
| MOE         | Project Management                                                                                          |
| OS          | Operating system                                                                                            |
| PAQ         | Quality Assurance Plan                                                                                      |
| PAAS        | Platform as a Service                                                                                       |
| SDM         | Service Delivery Manager                                                                                    |
| RFC         | Request For Change – Change Request                                                                         |
| RGPD        | General Data Protection Regulation (personal data)                                                          |
| RPO         | Recovery Point Objective – Freshness of data restored in case of disaster                                   |
| RTO         | Recovery Time Objective – Time to restore service in case of disaster                                       |
| SLA         | Service Level Agreement – Agreement on service levels                                                       |
| UO          | Unit of Work                                                                                                |
| VABF        | Validation of Suitability for Proper Functioning                                                             |
| VABE        | Validation of Suitability for Proper Usability                                                               |
| VM          | Virtual Machine                                                                                              |
| VSR         | Regular Service Validation                                                                                   |
| SNC         | SecNumCloud                                                                                                  |

## 3. Glossary

The expressions used in this document shall be interpreted according to the definitions assigned to them below:
```markdown
| Expression                                          | Definition                                                                                                                                                                                                                                                                             |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
```
| "Secure Temple"                                     | The term "Secure Temple" refers to the Infrastructure as a Service (IaaS) offering, certified SecNumCloud, provided by the company Cloud Temple.                                                                                                       |
| Région                                              | A "region" in the context of cloud computing refers to a geographically demarcated collection of availability zones, <br/>providing network, compute, and storage services to optimize latency, performance, <br/>and local regulatory compliance. |
| Zone Disponibilité<br/>(AZ)<br/>(Availability zone) | A specific and isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through the geographical distribution of resources.                                                                                         |
| Tenant                                              | An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining the independence and security of data and applications.                                                                                 |
| Expression               | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incident                 | An "incident" refers to any unforeseen event that disrupts the normal operation of a system or compromises the security of data and infrastructures                                                                                                                                                                                                                                                                                   |
| Problème                 | A "problem" is a root cause of one or more incidents, identified or suspected, requiring analysis and resolution to prevent its recurrence                                                                                                                                                                                                                                                                          |
| Change                   | A "change" refers to any modification made to the IT environment, aiming to enhance or correct systems, processes, or services.                                                                                                                                                                                                                                                                             |
| standard change          | A "standard change" is a pre-approved, low-risk, repetitive modification following an established procedure in the IT environment.                                                                                                                                                                                                                                                                                 |
| Deployment               | administrative actions carried out when the change is approved <br/>(the change, in the ITIL sense, concerns only change management and not its realization/implementation).                                                                                                                                                                                                                                   |
| Service request          | request for an evolution that follows a procedure, where the realization: <br/> i) does not modify the CMDB,<br/>ii) the operating mode, costs, and risks are known and accepted in advance and do not require specific rollback procedures<br/> iii) the realization is subject to a service level agreement and included in the contract fee when performed during business hours and working days.                 |
| Configuration Element | A "configuration element" is an identifiable component of the information system, such as software, hardware, or a document, <br/> subject to management within the framework of IT service management                                                                                                                                                                                                                                          |
| Service                | A "service" is a means of providing value to CLIENTs by facilitating desired outcomes without requiring them to manage <br/> specific costs and risks                                                                                                                                                                                                                                                                |
| Event                   | An "event" is any detectable or identifiable occurrence in a computer system or network that may have significance for IT service management                                                                                                                                                                                                                                                                                |
| Incident                 | An "incident" refers to an unexpected harmful event resulting in material, financial, or data losses for a CLIENT                                                                                                                                                                                                                                                                                      |
| Service Agreement       | This document, established as part of a specific contract or the General Terms and Conditions of Sale and Use (GTCU), and in compliance with the requirements of the SecNumCloud Framework.                                                                                                                                                                                                                                         |
| Availability             | Ability to ensure the availability and maintenance of optimal service performance, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).                                                                                                                                                                                                                                                           |
| Supervision              | Monitoring of an Information System or Service, involving the collection of various data such as measurements and alarms. <br/>This activity is limited to observation and tracking, without directly intervening on the monitored elements, a prerogative which belongs to Administration operations.                                                                                                                        |

## 4. Purpose of the Service Level Agreement for the Provider's PaaS

This Service Agreement establishes the terms and conditions under which the Provider commits to delivering to the CLIENT an infrastructure 
in accordance with the specifications of the "Platform as a Service – PaaS" offer, duly qualified as SecNumCloud.

Purpose of the Service Agreement:

1. Specify the performance requirements expected by the CLIENT in terms of functionality and reliability of the infrastructure.
2. State the Provider's obligations to meet the agreed service levels.
3. Identify the regulatory standards specifically applicable to the proposed infrastructure.
4. Ensure uniformity and integrity in evaluating the quality of delivered services.
5. Guarantee the excellence of the provided services, assessed through quantitative performance indicators.

It is stipulated that, in the event the Provider loses its SecNumCloud qualification, this Contract may be terminated automatically, without incurring penalties, by the CLIENT. 
In such an event, the Provider undertakes to inform the CLIENT of this disqualification by sending an official notification via registered letter with acknowledgment of receipt.

It should be noted that a modification or adjustment of the SecNumCloud qualification will not be interpreted as a revocation of the initial qualification.
## 5. Evolution of the PaaS Service Agreement

Modifications or additions to this service agreement arise solely from requests made by the designated governance bodies for this purpose.
These proposed changes will be reviewed within the strategic committee, the only body authorized to determine aspects requiring formal written documentation.

It is agreed that any evolution of the agreement, after validation, that alters the initially established financial conditions will necessitate the creation and signing of an addendum to the current contract.

Factors that may induce a revision of this agreement include, but are not limited to:

- Adaptation of the PaaS platform orchestrated by the Provider.
- Adjustments made to the services deployed by the Provider.
- Variations in commitments made and applicable penalties.
- Organizational reconfigurations within the CLIENT or the Provider.
- The expansion or reduction of the scope of services to which the CLIENT has subscribed.

Version and revision management of the agreement is recorded in the preamble of the document for easier tracking.

## 6. Audit

The Provider undertakes to allow the CLIENT, or any third-party auditor designated by the CLIENT, to consult all necessary documents to attest to full compliance with the obligations related to Article 28 of the General Data Protection Regulation (GDPR), thereby facilitating the carrying out of audits.

**The Provider notably undertakes to make available to the CLIENT the list of all third parties who can access the data and to notify of any changes in subcontractors.**

By accepting this service agreement, the CLIENT explicitly grants their authorization for:
1. __The National Agency for Information System Security (ANSSI)__ as well as the competent qualification entity to undertake the verification of the conformity of the Service and its Information System to the standards defined by the SecNumCloud Framework.
2. __An information system security audit provider__, duly qualified and expressly designated by the Provider, to carry out security audits concerning the Service delivered by the Provider.

## 7. Service Description

The service offerings proposed by the Provider are characterized by the provision of the following services, 
which align with the principle of shared responsibility detailed in the standards established by the SecNumCloud framework:

- The provision of a Redhat Openshift container management platform managed by the Provider.
It is understood that the Service Provider will leverage its expertise to deliver the Services according to the best professional practices, 
in accordance with their Specifications and in compliance with the standards of its ISO/IEC 27001 certification as well as the guidelines of the SecNumCloud Reference Framework.

## 8. Service Implementation

It is specified that all operations and all physical components involved in the provision of the qualified service, which is the subject of this agreement, 
are located in the European Union. This includes, in particular, support, operational supervision, and security supervision (SOC).

### 8.1. Description of Technical Components

The PaaS (Platform as a Service) service encompasses all components and services required for its optimal operation in compliance with the SecNumCloud qualification.
In this regard, their performance and reliability are intrinsically linked to the technical components and services of the **IaaS infrastructure** of the Provider, as specified in the Provider's document [Convention de Service IaaS](../iaas/sla_iaas.md).

#### 8.1.1. REDHAT OpenShift Service Platform

The service includes provisioning within a region, across 3 availability zones,

#### 8.1.2. Management Software Infrastructure of the Redhat Openshift Platform

The Provider supplies the CLIENT with the administration console and the necessary API for the operation of its RedHat OpenShift PaaS environments. The Provider also commits to maintaining them in optimal operational condition and ensuring their continuous security.
In the specific context of the service provided, the Provider makes available to the CLIENT all interfaces and APIs of the RedHat OpenShift platform within the selected tenant. It is the CLIENT's responsibility to implement appropriate security measures, such as firewalls, Web Application Firewalls (WAF), and other protective measures, as well as to define associated filtering rules to secure access to their platform in accordance with their security policy.

The Provider alerts the Client that abnormal usage of their administration console, especially in cases of API overloading (hammering), 
may trigger automatic security measures leading to the blocking of access to command APIs or certain services of the Provider. It should be noted that this situation does not constitute a service unavailability but is an action to protect the Provider's Infrastructure.
therefore, the Client cannot consider it as unavailability in their calculations.

Additionally, the Provider informs the Client that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling).
If the Client submits identical requests at a higher frequency, their rejection should not be interpreted as a service unavailability.

#### 8.1.3. Associated Backup Infrastructure

The Provider makes available to the CLIENT an integrated, dedicated, and managed backup platform designed for the protection of data in their RedHat Openshift environments.
The Provider ensures the operational and security condition maintenance of this integrated backup platform.
Regardless of the number of availability zones subscribed to by the CLIENT, the Provider guarantees that the CLIENT's backup platform will be located outside the availability zone of the backed-up workloads.
The backup service is limited to the backup of virtual machines and the topology configurations of the CLIENT's SecNumCloud tenants' IaaS environment.
The development and application of an appropriate backup policy by the CLIENT depend on subscribing to specific work units.
It is therefore the CLIENT's responsibility to ensure the availability of the necessary technical resources from the Provider
to implement their backup policy or to adjust it according to the available resources.

The Provider commits to notifying the CLIENT in case of capacity constraints and providing advisory assistance for resource optimization.
The Provider's obligations will be limited to implementing the requirements expressed by the CLIENT in terms of backup policy, within the scope of the subscribed resources.

#### 8.1.4. Implementation of Disaster Recovery or Business Continuity Solutions
The Provider supplies the CLIENT with all the necessary technical solutions to ensure an optimal distribution of its resources across various availability zones. It is the CLIENT's responsibility to efficiently manage this resource distribution, for which they have the option to utilize the Provider's tools available for this purpose.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms offered by the Provider to benefit from the associated disaster recovery or business continuity solutions.

## 9. Commitments and Service Levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its platforms and services, ensuring their optimal operation.
The unavailability of a service, which is a subject of a performance indicator, is recognized as soon as it is identified by the Provider's monitoring system,
or following a notification by a CLIENT user. The start of the unavailability is set at the earliest moment between these two events,
to ensure an accurate and fair accounting of the downtime.

The end of the unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools,
or by user feedback, thus ensuring an effective resumption of operations and an accurate measurement of the duration of the interruption.

### 9.1. RedHat OpenShift Platform Availability Commitments

The Provider commits to maintaining a level of availability and performance in accordance with the standards defined for each specified period.

The Service Level Agreements (SLAs) apply provided that the CLIENT deploys their systems across at least two of the availability zones within the relevant region.

If the CLIENT fails to meet these conditions, they will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (*). Access to the SLAs is available via the CLIENT interface. **Measurements are calculated monthly**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Availability of the RedHat OpenShift platform: guaranteed availability rate of 99.9%, calculated on a 24/7 basis.

_**Notes**_:

- *In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to
limiter l'impact de cette attaque et sauvegarder son infrastructure. En particulier, si une adresse IP appartenant au CLIENT est ciblée, le Prestataire peut recourir à la technique de blackholing
via la communauté BGP pour bloquer tout le trafic vers l'adresse IP visée en amont chez ses fournisseurs, dans le but de protéger les ressources du CLIENT ainsi que celles d'autres clients
et de l'infrastructure du Prestataire. Le Prestataire encourage vivement le CLIENT à adopter des mesures similaires, telles que l'utilisation de logiciels de pare-feu
d'applications web disponibles sur le marché, et à configurer soigneusement ses groupes de sécurité via l'API de commande.*

- *The Service Provider stresses the need for the CLIENT to minimize flow openings, particularly by avoiding making ports accessible
d'administration **SSH** (port TCP 22) et **RDP** (port TCP 3389) depuis l'ensemble d'Internet (sous-réseau 0.0.0.0/0), ainsi que les protocoles internes tels que **SMB** (port TCP/UDP 445) ou **NFS** (port TCP/UDP 2049).*

## 10. Applicable Shared Responsibility Model

### 10.1. Responsibility and Obligations of the Provider

The Provider commits to making user interfaces available to the CLIENT in both French and English, thus facilitating access to and management of the provided services.
The CLIENT, on their part, commits to adhering to the current legal and regulatory constraints related to the data they entrust to the Provider for processing.

In the event of transmitting data subject to specific legal requirements, the Provider will collaborate with the CLIENT to identify and implement 
the necessary security measures, in accordance with the Provider's obligations and within the scope of service provision.
The Service Provider also commits to examining and considering the specific needs related to the CLIENT's industry sectors,
while respecting the limitations of its responsibility, to ensure an appropriate level of security for the processed information.

If a project is likely to impact the security of the offered service, the Service Provider commits to informing the CLIENT about potential impacts,
the planned corrective measures, and the residual risks, ensuring total transparency.

The Service Provider guarantees that it will not use the CLIENT's data for testing purposes without prior and explicit consent from the CLIENT
and commits to anonymizing and protecting the confidentiality of this data during processing.

In the event of a change of subcontractor for hosting, the Service Provider will inform the CLIENT in advance, ensuring that this transition does not negatively affect the provided service.
Upon the CLIENT's request, the Provider will grant access to its internal regulations, ethics charter, applicable sanctions for breaches of its security policy, events concerning it, service-related procedures, and specific security requirements.

### 10.2. Limitation of Provider's Liability

The shared responsibility model effectively limits the Provider's scope of involvement to aspects related to providing a functional RedHat OpenShift platform, including:

- Management of the IaaS infrastructure that supports the RedHat OpenShift platform and its provisioning,
- Management of the systems required for the platform's proper functioning,
- Maintenance of security conditions,
- Updating of the RedHat OpenShift platform,
- Backup of essential configuration data of this platform, excluding the CLIENT's data and applications, which remain their responsibility.
Elle exclut notamment, mais sans s'y limiter :

- Updating operating systems and software installed by the CLIENT on their OpenShift environments in their rental spaces,
- Security of the programs, software, and applications installed within the OpenShift environment by the CLIENT,
- Backup of data at the application level,
- Configuration of backup policies.

### 10.3. Access Limitation

In the context of this service agreement, the Provider is strictly prohibited from accessing the CLIENT's tenants without prior authorization.
It is the CLIENT's responsibility to provide the necessary access to the Provider's personnel, according to the specific needs of hosting and,
if applicable, professional support services, if this option has been chosen by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for the purposes related to the agreed service provision,
assuring secure and compliant management according to the terms of the agreement.

Remote access by third parties involved in the service provision by the Provider is strictly prohibited. 
In the event that a specific technical requirement necessitates such access, it can only be established 
after clearly notifying the CLIENT, providing a detailed justification, and obtaining written consent.

This measure ensures the control and security of CLIENT data, ensuring that any exception to the rule is duly authorized and documented.

## 11. Data Erasure at Contract End

At the end of the contract, whether it expires or is terminated for any reason, the Provider commits to performing the secure 
erasure of all Client data, including technical data. The Provider will ensure to communicate a formal notice to the CLIENT,
respecting a period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To certify this deletion, the Provider will provide the Client with a certificate confirming the erasure of the data.

## 12. Applicable Law

The applicable law for this service agreement is French law.

In case the Provider uses a third-party company, including a subcontractor, within the scope of the services provided to the CLIENT, whose registered office, central administration, or main establishment is located in a non-European Union member state, or which is owned or controlled by a third-party company domiciled outside the European Union, the Provider commits to ensuring that said third-party company will have no access to the data processed by the Provider's service.
It should be noted that the data concerned includes those entrusted to the Provider by the CLIENT, as well as all technical data such as the identities of beneficiaries and administrators of the technical infrastructure, the data handled by networks, the technical infrastructure logs, the directory, the certificates, the access configurations, etc., containing information about the CLIENT.

For clarification, the notion of control is defined in accordance with II of article L233-3 of the commercial code.