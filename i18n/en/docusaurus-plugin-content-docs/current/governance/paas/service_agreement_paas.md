---
title: Convention de Service PaaS
---

**Table of Contents**

- [1. Cadre](#1-cadre)
- [2. Acronymes](#2-acronymes)
- [3. Glossaire](#3-glossaire)
- [4. Objet de la convention de service PaaS du Prestataire](#4-objet-de-la-convention-de-service-paas-du-prestataire)
- [5. Evolution de la convention de service PaaS](#5-evolution-de-la-convention-de-service-paas)
- [6. Audit](#6-audit)
- [7. Description du service](#7-description-du-service)
- [8. Mise en œuvre du service](#8-mise-en-œuvre-du-service)
  - [8.1. Description des composants techniques](#81-description-des-composants-techniques)
    - [8.1.1. Plateforme de service REDHAT OpenShift](#811-plateforme-de-service-redhat-openshift)
    - [8.1.2. Infrastructure logiciel de pilotage de la plateforme Redhat Openshift](#812-infrastructure-logiciel-de-pilotage-de-la-plateforme-redhat-openshift)
    - [8.1.3. Infrastructure de sauvegarde associée](#813-infrastructure-de-sauvegarde-associée)
    - [8.1.4. Mise en œuvre de solutions de reprise d'activité ou de continuité d'activité](#814-mise-en-œuvre-de-solutions-de-reprise-dactivité-ou-de-continuité-dactivité)
- [9. Engagements et niveaux de services](#9-engagements-et-niveaux-de-services)
  - [9.1. Engagements de disponibilité de la plateforme RedHat OpenShift](#91-engagements-de-disponibilité-de-la-plateforme-redhat-openshift)
- [10. Modèle de responsabilités partagées applicable](#10-modèle-de-responsabilités-partagées-applicable)
  - [10.1. Responsabilité et Obligations du Prestataire](#101-responsabilité-et-obligations-du-prestataire)
  - [10.2. Limitation de responsabilité du Prestataire](#102-limitation-de-responsabilité-du-prestataire)
  - [10.3. Limitation d'accès](#103-limitation-daccès)
- [11. Effacement des données en fin de contrat](#11-effacement-des-données-en-fin-de-contrat)
- [12. Droit applicable](#12-droit-applicable)


## 1. Cadre

|           |                        |
| --------- | ---------------------- |
| Reference | CT.AM.JUR.ANX.PAAS 2.0 |
| Date      | March 13, 2024          |

## 2. Acronymes

| Acronym    | Description                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Change Advisory Board                                                               |
| CMDB        | Configuration Management Database – Configuration Management Database                                       |
| COPIL       | Steering Committee                                                                                          |
| COSTRAT     | Strategic Committee                                                                                         |
| DB          | Database (base de données)                                                                                  |
| DRP         | Disaster Recovery Plan (Plan de reprise d'activité)                                                         |
| GTI         | Intervention Time Guarantee                                                                                |
| GTR         | Resolution Time Guarantee                                                                                   |
| GTE         | Escalation Time Guarantee                                                                                   |
| HYPERVISEUR | Operating system allowing the execution of VMs on a computing blade                                         |
| ITIL        | Information Technology Infrastructure Library - Best practices for IT systems management                    |
| IAAS        | Infrastructure as a Service                                                                                 |
| MCO         | Operational Maintenance                                                                                     |
| MOA         | Project Owner                                                                                               |
| MOE         | Project Manager                                                                                             |
| OS          | Operating system                                                                                            |
| PAQ         | Quality Assurance Plan                                                                                      |
| PAAS        | Platform as a Service                                                                                       |
| SDM         | Service Delivery Manager                                                                                    |
| RFC         | Request For Change – Change Request                                                                         |
| RGPD        | General Data Protection Regulation                                                                          |
| RPO         | Recovery Point Objective – Freshness of restored data in case of disaster                                   |
| RTO         | Recovery Time Objective – Service restoration time in case of disaster                                      |
| SLA         | Service Level Agreement – Service Level Agreement                                                          |
| UO          | Unit of Work                                                                                                |
| VABF        | Validation of Fitness for Operation                                                                         |
| VABE        | Validation of Fitness for Exploitation                                                                      |
| VM          | Virtual Machine (Virtual Machine)                                                                           |
| VSR         | Regular Service Validation                                                                                  |
| SNC         | SecNumCloud                                                                                                 |

## 3. Glossaire

The expressions used in the present document will be interpreted in accordance with the definitions attributed to them below:

| Expression                                          | Definition                                                                                                                                                                                                                                                                             |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                     | The term "Secure Temple" refers to the IaaS Infrastructure as a Service offered by Cloud Temple, qualified as SecNumCloud.                                                                                                                         |
| Region                                              | A "region" in the context of cloud computing refers to a geographically defined set of cloud availability zones, <br/>providing network, compute, and storage services to optimize latency, performance <br/>and local regulatory compliance          |
| Availability Zone<br/>(AZ)<br/>(Availability zone) | A specific and isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through the geographical distribution of resources.                                                      |
| Tenant                                              | An isolated instance reserved for a user or group of users, sharing common infrastructure while maintaining the independence and security of data and applications.                                                                                 |

| Expression               | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incident                 | An "incident" refers to any unexpected event that disrupts the normal operation of a system or compromises the security of data and infrastructures.                                                                                                                                                                                                                                                                                           |

| Problème                 | A "problem" is a fundamental cause of one or more incidents, identified or suspected, requiring analysis and resolution to prevent its recurrence.                                                                                     |
| Changement               | A "change" refers to any modification made to the IT environment, aiming to improve or correct systems, processes, or services.                                                                                       |
| changement standard      | A "standard change" is a pre-approved, low-risk, repetitive modification following an established procedure in the IT environment.                                                                                       |
| Mise en production       | Administration action(s) for implementing the change when it is approved <br/>(the change, in ITIL terms, only concerns change management and not its implementation/realization).                                                               |
| Demande de service       | Evolution request subject to a procedure, whose realization: <br/> i) does not modify the CMDB,<br/>ii) the operational mode, costs, and risks are known and accepted in advance and do not require specific rollback procedures<br/> iii) the realization is subject to a service level agreement and included in the contract fee when it is performed during working hours on business days.     |
| Element de configuration | A "configuration item" is an identifiable component of the information system, such as software, hardware, or a document,<br/> subject to management within IT service management.                                                                                       |
| Service                  | A "service" is a means of delivering value to CLIENTs by facilitating desired outcomes without requiring them to manage <br/>specific costs and risks.                                                               |
| Evenement                | An "event" is any detectable or identifiable occurrence in an IT system or network, which may have significance for IT service management.                                                                            |
| Sinistre                 | A "disaster" refers to an unforeseen damaging event leading to material, financial, or data losses for a CLIENT.                                                                                                   |
| Convention de service    | This document, established within the framework of a specific contract or the General Terms of Sale and Use (CGVU), and in accordance with the requirements of the SecNumCloud reference framework.                                          |
| Disponibilité            | Capability to ensure the availability and maintenance of optimal performance of a service, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).                           |
| Supervision              | Surveillance of an Information System or Service, involving the collection of various data such as measurements and alarms. <br/>This activity is limited to observation and monitoring, without direct intervention on the monitored elements, a prerogative belonging to Administration operations.                                                       |

## 4. Purpose of the Provider's PaaS service agreement 

This Service Agreement sets out the terms and conditions under which the Provider commits to delivering to the CLIENT an infrastructure compliant with the specifications of the "Platform as a Service – PaaS" offering, duly qualified SecNumCloud.

Purpose of the Service Agreement:

1. Specify performance requirements expected by the CLIENT in terms of functionality and reliability of the infrastructure.
2. Outline the Provider's obligations to meet the agreed service levels.
3. Identify the regulatory standards specifically applicable to the proposed infrastructure.
4. Ensure uniformity and integrity in the evaluation of the quality of services rendered.
5. Guarantee the excellence of the services provided, assessed through quantitative performance indicators.

It is stipulated that, in the event that the Provider loses its SecNumCloud qualification, this Agreement may be terminated by the CLIENT without penalty and by right. In such a case, the Provider commits to informing the CLIENT of this disqualification through an official notification via registered mail with acknowledgment of receipt.

It should be noted that a modification or adjustment of the SecNumCloud qualification shall not be interpreted as a revocation of the initial qualification.

## 5. Evolution of the PaaS service agreement

Modifications or additions to this service agreement exclusively arise from requests made by designated governance bodies. These change proposals will be reviewed in the strategic committee, the only body authorized to determine aspects requiring written formalization.

It is agreed that any evolution of the agreement, once validated, which alters the initially established financial conditions, will require the establishment and signing of an amendment to the ongoing contract.

Factors that may lead to a revision of this agreement include, but are not limited to:

- The adaptation of the PaaS platform orchestrated by the Provider.
- Adjustments to the services deployed by the Provider.
- Variations in commitments and applicable sanctions.
- Organizational reconfigurations within the CLIENT or the Provider.
- Expansion or reduction of the scope of services subscribed to by the CLIENT.

Version and revision management of the agreement is recorded in the preamble of the document for easier tracking.

## 6. Audit

The Provider commits to allowing the CLIENT, or any third-party auditor appointed by the latter, to review all documents necessary to attest to full compliance with the obligations related to the provisions of Article 28 of the General Data Protection Regulation (GDPR), thereby facilitating audits.

**The Provider notably commits to keeping at the CLIENT's disposal the list of all third parties who may access the data and to inform of any changes in subcontractors.**

By accepting this service agreement, the CLIENT explicitly authorizes:

1. __The National Cybersecurity Agency of France (ANSSI)__ as well as the competent certification entity to undertake the verification of the Service's and its Information System's compliance with the standards defined by the SecNumCloud reference framework.
2. __An information systems security audit provider__, duly qualified and expressly designated by the Provider, to conduct security audits on the Service delivered by the Provider.

## 7. Service Description

The service offering proposed by the Provider is characterized by the provision of the following services, which align with the principle of shared responsibility as detailed in the standards established by the SecNumCloud reference framework:

- The provision of a Redhat Openshift container management platform operated by the Provider.

It is understood that the Provider will leverage its expertise to perform the Services according to best professional practices,
conformité avec leurs Specifications and in compliance with its ISO/IEC 27001 certification standards as well as the guidelines of the SecNumCloud Framework.

## 8. Service Implementation

It is specified that all operations and all physical components involved in providing the qualified service, which is the subject of this agreement, 
are located in the European Union. This includes support, operational supervision, and security supervision (SOC).

### 8.1. Description of Technical Components

The PaaS (Platform as a Service) services encompass all the components and services required for its optimal operation in compliance with SecNumCloud qualification.

In this regard, their performance and reliability are intrinsically linked to the technical components and services of the **Provider's IaaS infrastructure**, as specified in the Provider's document [IaaS Service Agreement](../iaas/sla_iaas.md).

#### 8.1.1. REDHAT OpenShift Service Platform

The service includes the provision within a region, across 3 availability zones,

#### 8.1.2. Redhat Openshift Platform Management Software Infrastructure

The Provider supplies the CLIENT with the administration console and API necessary for the operation of its RedHat OpenShift PaaS environments.
The Provider also commits to maintaining them in optimal operational condition and continuously ensuring their security.

In the specific context of the service provided, the Provider provides the CLIENT with all the interfaces and APIs of the RedHat OpenShift platform within the selected tenant. It is the CLIENT’s responsibility to implement appropriate security measures, such as firewalls, Web Application Firewalls (WAF), and other protection measures, as well as to define the associated filtering rules to secure access to its platform according to its security policy.

The Provider alerts the Client that abnormal use of its administration console, particularly in the event of overloading its command APIs (hammering), 
may trigger automatic security measures leading to the blocking of access to the command APIs or certain Provider services. It is important to highlight that this situation does not constitute a service unavailability but a protection action of the Provider's Infrastructure;
therefore, the Client cannot consider it as unavailability in its calculations.

Additionally, the Provider informs the Client that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling).
If the Client submits identical requests at a higher frequency, their rejection should not be interpreted as service unavailability.

#### 8.1.3. Associated Backup Infrastructure

The Provider provides the CLIENT with an integrated, dedicated, and managed backup platform intended to protect the data of its RedHat Openshift environments.
The Provider ensures the operational and security condition of this integrated backup platform.
Regardless of the number of availability zones subscribed to by the CLIENT, the Provider guarantees that the CLIENT's backup platform will be located outside the availability zone of the backed-up workloads.

The backup service is limited to the backup of virtual machines and the topology configurations of the CLIENT’s SecNumCloud IaaS environment tenants.
The development and application of an adequate backup policy by the CLIENT depend on the subscription to specific working units.
It is therefore up to the CLIENT to ensure the availability of the necessary technical resources with the Provider
to implement its backup policy or to adjust it based on the available means.

The Provider commits to notifying the CLIENT in case of capacity constraints and providing advisory assistance for resource optimization.
The Provider's obligations will be limited to implementing the needs expressed by the CLIENT regarding the backup policy, within the limits of the subscribed resources.

#### 8.1.4. Implementation of Disaster Recovery or Business Continuity Solutions

The Provider supplies the CLIENT with all the technical solutions necessary to ensure optimal distribution of its resources
across various availability zones. It is the CLIENT’s responsibility to manage this resource distribution effectively,
for which they have the option to utilize the tools available from the Provider for this purpose.

In particular, the applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms provided by the Provider to benefit from the associated disaster recovery or business continuity solutions.

## 9. Commitments and Service Levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its 
platforms and services, ensuring their optimal operation.

Service unavailability, which is the subject of a performance indicator, is recognized upon identification by the Provider's supervision system,
or following notification by a CLIENT user. The start of unavailability is set at the earliest moment between these two events,
to ensure a precise and fair count of downtime.

The end of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's supervision tools,
or by user feedback, thus ensuring an effective resumption of operations and an accurate measurement of the interruption duration.

### 9.1. Availability Commitments of the RedHat OpenShift Platform

The Provider commits to maintaining a level of availability and performance in compliance with the standards defined for each specified period.
Service Level Agreements (SLAs) apply provided that the CLIENT implements its systems across 
at least two of the availability zones present in the relevant region.

If the CLIENT does not meet these conditions, they will be unable to claim the application of the relevant SLAs,
which are specifically identified by an asterisk (*). Access to the SLAs is via the CLIENT interface. **The measurements are calculated monthly**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Availability of the RedHat OpenShift platform: guaranteed availability rate of 99.9%, calculated on a 24/7 basis.

_**Remarks**_ :

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust its Internet routing configuration to 
mitigate the impact of this attack and protect its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may use the blackholing technique 
through the BGP community to block all traffic to the targeted IP address upstream with its providers, to protect the CLIENT's resources as well as those of other clients 
and the Provider's infrastructure. The Provider strongly encourages the CLIENT to adopt similar measures, such as using market-available web application firewall software,
and carefully configuring their security groups via the command API.*

- *The Provider insists on the necessity for the CLIENT to minimize flow openings, notably avoiding making administrative ports 
**SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols like **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 10. Applicable Shared Responsibility Model

### 10.1. Responsibilities and Obligations of the Provider

The Provider commits to providing the CLIENT with user interfaces in both French and English, thus facilitating access and management of the provided services.
The CLIENT, on their part, commits to complying with the applicable legal and regulatory constraints concerning the data they entrust to the Provider for processing.

In the case of data transmission subject to specific legal requirements, the Provider will collaborate with the CLIENT to identify and implement
the necessary security measures, in accordance with the Provider's obligations and within the service provision framework.

The Provider also commits to examining and considering the specific needs related to the CLIENT's sectors of activity,
within the limitations of its responsibility, to ensure an appropriate level of security for the processed information.

If a project may impact the security of the provided service, the Provider commits to informing the CLIENT of the potential impacts,
the planned corrective measures, and the residual risks, ensuring complete transparency.

The Provider guarantees that it will not use the CLIENT's data for testing purposes without the CLIENT’s prior and explicit consent
and commits to anonymizing and protecting the confidentiality of these data during their processing.

In the case of a change of subcontractor for hosting, the Provider will inform the CLIENT in advance, ensuring that this transition does not negatively affect the provided service.

At the CLIENT’s request, the Provider will provide access to its internal regulations, its code of ethics, and the applicable sanctions in case of non-compliance with its

security policy, relevant events, service procedures, and specific security requirements.

### 10.2. Limitation of the Provider's Liability

The shared responsibility structure effectively limits the Provider's scope of intervention to aspects related to the provision of a functional RedHat OpenShift platform, including:

- Managing the IaaS infrastructure supporting the RedHat OpenShift platform and its provisioning,
- Managing the systems necessary for the platform's proper functioning,
- Maintaining security conditions,
- Updating the RedHat OpenShift platform,
- Backing up essential configuration data of this platform, excluding CLIENT's data and applications which remain under CLIENT's responsibility.

It specifically excludes, but is not limited to:

- Updating operating systems and software installed by the CLIENT in their OpenShift environments within their rental spaces,
- Security of programs, software, and applications installed within the OpenShift environment by the CLIENT,
- Application-level data backup,
- Configuring backup policies.

### 10.3. Access Limitation

Under this service agreement, the Provider is strictly prohibited from accessing the CLIENT's tenants without prior authorization.
It is the CLIENT's responsibility to provide the necessary access to the Provider's personnel, according to specific hosting needs and,
if applicable, professional support services, should this option be chosen by the CLIENT.

The CLIENT acknowledges that such access is granted exclusively for the purposes related to the agreed service provision,
ensuring secure management within the terms of the agreement.

Remote access by third parties involved in the Provider's service provision is strictly prohibited.
In the event that a specific technical requirement necessitates such access, it can only be established
after clearly notifying the CLIENT, providing detailed justification, and obtaining written consent.

This measure ensures the control and security of CLIENT's data, guaranteeing that any exception to the rule is duly authorized and documented.

## 11. Data Deletion at the End of the Contract

At the end of the contract, whether it expires or is terminated for any reason, the Provider commits to securely deleting
all Client data, including technical data. The Provider will ensure to provide the CLIENT with formal notice, 
respecting a notice period of twenty-one (21) calendar days. CLIENT's data will then be deleted within a maximum period of thirty (30) days
following this notification.

To certify this deletion, the Provider will issue a certificate to the Client confirming the data deletion.

## 12. Governing Law

The governing law for this service agreement is French law.

In the case of involvement by the Provider, in the context of services provided to the CLIENT, of a third-party company, including a subcontractor, whose registered office, central administration,
or principal place of business is located in a non-EU state, or which is owned or controlled by a third-party company domiciled outside the European Union,
the Provider commits to ensuring that such third-party company will have no access to the data processed by the Provider's service.

It should be noted that the data concerned includes those entrusted to the Provider by the CLIENT, as well as all technical data such as identities of beneficiaries and administrators of the technical infrastructure,
data handled by networks, technical infrastructure logs, directories, certificates, access configurations, etc., containing information about the CLIENT.

For precision, the concept of control is defined according to II of article L233-3 of the commercial code.