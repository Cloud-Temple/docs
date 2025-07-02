---
title: SecNumCloud PaaS Service Agreement
---

**Table of Contents**

- [1. Framework](#1-framework)
- [2. Acronyms](#2-acronyms)
- [SNC           SecNumCloud](#snc-----------secnumcloud)
- [3. Glossary](#3-glossary)
- [4. Object of the Provider's PaaS Service Agreement](#4-object-of-the-provider-s-paas-service-agreement)
- [5. Evolution of the PaaS Service Agreement](#5-evolution-of-the-paas-service-agreement)
- [6. Audit](#6-audit)
- [7. Service Description](#7-service-description)
- [8. Service Implementation](#8-service-implementation)
  - [8.1. Description of Technical Components](#81-description-of-technical-components)
    - [8.1.1. REDHAT OpenShift Service Platform](#811-redhat-openshift-service-platform)
    - [8.1.2. Software Infrastructure for Managing the Redhat Openshift Platform](#812-software-infrastructure-for-managing-the-redhat-openshift-platform)
    - [8.1.3. Associated Backup Infrastructure](#813-associated-backup-infrastructure)
    - [8.1.4. Implementation of Business Continuity or Disaster Recovery Solutions](#814-implementation-of-business-continuity-or-disaster-recovery-solutions)
- [9. Commitments and Service Levels](#9-commitments-and-service-levels)
  - [9.1. Availability Commitments for the RedHat OpenShift Platform](#91-availability-commitments-for-the-redhat-openshift-platform)
- [10. Applicable Shared Responsibility Model](#10-applicable-shared-responsibility-model)
  - [10.1. Responsibilities and Obligations of the Provider](#101-responsibilities-and-obligations-of-the-provider)
  - [10.2. Provider's Liability Limitation](#102-provider-s-liability-limitation)
  - [10.3. Access Limitation](#103-access-limitation)
- [11. Data Erasure at Contract Termination](#11-data-erasure-at-contract-termination)
- [12. Applicable Law](#12-applicable-law)

## 1. Framework

  --------------------- -------------------------------------------------
  Reference             CT.AM.JUR.ANX.PAAS 2.1

  Date                  21 January 2025
  --------------------- -------------------------------------------------

## 2. Acronyms

  ------------------------------------------------------------------------------
  Acronym       Description
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Advisory Committee on Changes

  CMDB          Configuration Management Database -- Configuration Management Database

  COPIL         Steering Committee

  COSTRAT       Strategic Committee

  DB            Database (database)

  DRP           Disaster Recovery Plan (Disaster Recovery Plan)

  GTI           Guaranteed Time to Intervention

  GTR           Guaranteed Time to Resolution

  GTE           Guaranteed Time to Escalation

  HYPERVISOR    Operating system allowing VM execution on a compute blade

  ITIL          Information Technology Infrastructure Library - Best practices
                for information system management

  IAAS          Infrastructure as a Service

  MCO           Operational Readiness Maintenance

  MOA           Project Owner

  MOE           Project Executor

  OS            Operating system

  PAQ           Quality Assurance Plan

  PAAS          Platform as a Service

  SDM           Service Delivery Manager

  RFC           Request For Change -- Change Request

  RGPD          General Data Protection Regulation (personal data)

  RPO           Recovery Point Objective -- Data freshness in case of incident

  RTO           Recovery Time Objective -- Service restoration time in case of incident

  SLA           Service Level Agreement -- Service level agreement

  UO            Work Unit

  VABF          Functional Fitness Validation

  VABE          Operational Fitness Validation

  VM            Virtual Machine (Virtual Machine)

  VSR           Regular Service Validation

SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glossary

The expressions used in this document will be interpreted according to the definitions assigned below:

  --------------------------------------------------------------------------------------------
  Expression                       Definition
  -------------------------------- -----------------------------------------------------------
  "Secure Temple"                Refers to the SecNumCloud qualified IaaS service, offered by
                                   the company Cloud Temple, as defined in the certificate
                                   available on the ANSSI website and provided as an appendix to
                                   this Service Agreement.

  Region                         A "region" in the context of cloud computing refers to
                                   a geographically defined set of cloud availability zones,
                                   providing network, compute, and storage services to optimize
                                   latency, performance, and local regulatory compliance.

  Availability Zone (AZ)         A specific and isolated section of cloud computing
                                   infrastructure, designed to ensure high availability and
                                   resilience of services through the geographical distribution
                                   of resources.

Tenant                           An isolated instance reserved for a user or group of
                                   users, sharing a common infrastructure while maintaining the
                                   independence and security of data and applications
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Expression      Definition
  --------------- ---------------------------------------------------------
  Incident        An "incident" refers to any unexpected event that disrupts the
                  normal operation of a system or compromises data security.

  Problem         A "problem" is a root cause of one or more incidents, identified
                  or suspected, requiring analysis and resolution to prevent recurrence

  Change          A "change" refers to any addition, modification or deletion
                  impacting the Service, having been authorized, planned or supported.

  Standard Change A "standard change" is a change subject to a procedure, whose
                  production methods and impacts (including financial) are known
                  and accepted in advance by the Parties. It is then integrated into
                  the standard changes catalog, and may, depending on the case, have
                  a GTI and a GTR.

  Implementation  Action(s) of administration of the change when it is approved (the
                  change, in the ITIL sense, concerns only the change management and
                  not its realization/concretization).

  Service Request A request for evolution subject to a procedure, whose
                  realization: i) does not modify the CMDB, ii) the operating procedure,
                  costs and risks are known and accepted in advance and do not require
                  specific rollback modalities iii) the realization is subject to a
                  service level agreement and included in the contract fee when
                  performed during working hours and working days.

  Configuration   An "element of configuration" is an identifiable component of the
  Element         information system, such as software, hardware or document, subject
                  to management within the framework of IT service management

  Service         A "service" refers to the SecNumCloud qualified service,
                  delivered to the CLIENT by the Provider, as described in the
                  "Service Description" section of this Service Agreement.

  Event           An "event" is any detectable or identifiable occurrence that may
                  have importance for Service management.

  Incident        An "incident" refers to a serious event of natural or human origin,
                  accidental or intentional, causing significant losses and damages
                  to the affected Party.

  Service Agreement This document, established within the framework of a specific
                  contract or the General Terms and Conditions of Sale and Use
                  (GTC), and in compliance with the requirements of the SecNumCloud
                  Reference Framework.

  Availability    Ability to ensure the availability and maintenance of optimal
                  service performance, in accordance with the criteria and
                  commitments defined in the Service Level Agreements
  --------------------------------------------------------------------------------------------
Service Level Agreement (SLA)

Supervision     Monitoring of an Information System or a Service, involving the collection of various data such as metrics and alarms. This activity is limited to observation and tracking, without directly intervening in the elements being monitored, a prerogative that belongs to Administration operations
  -------------------------------------------------------------------------
## 4. Object of the PaaS Service Agreement of the Provider

This Service Agreement sets out the terms and conditions according to which the Provider commits to delivering to the COMMANDER an infrastructure compliant with the specifications of the "Platform as a Service - PaaS" offer, duly qualified SecNumCloud.

Object of the Service Agreement:

1. Specify the performance requirements expected by the COMMANDER in terms of functionality and reliability of the infrastructure.
2. State the obligations of the Provider to meet the agreed service levels.
3. Identify the applicable regulatory standards specifically for the proposed infrastructure.
4. Ensure uniformity and integrity in the evaluation of the quality of services rendered.
5. Guarantee the excellence of the services provided, evaluated through quantitative performance indicators.

It is stipulated that, in the event the Provider loses its SecNumCloud qualification, this Contract may be terminated without penalty by the COMMANDER. In such a case, the Provider undertakes to inform the COMMANDER of this dequalification by sending an official notice via registered mail with acknowledgment of receipt.

It should be noted that a modification or adjustment of the SecNumCloud qualification will not be interpreted as a revocation of the initial qualification.

## 5. Evolution of the PaaS Service Agreement

Modifications or additions to this service agreement result exclusively from requests made by the designated governance bodies. These change proposals will be reviewed by the strategic committee, the only authorized body to determine aspects requiring written formalization.

It is agreed that any evolution of the agreement, after validation, that alters the initial financial conditions will require the establishment and signing of an amendment to the current contract.

Factors that may lead to a revision of this agreement include, but are not limited to:

- The adaptation of the PaaS platform orchestrated by the Provider.
- Adjustments made to the services deployed by the Provider.
- Variations in commitments and applicable sanctions.
- Organizational reconfigurations within the COMMANDER or the Provider.
- Expansion or reduction of the scope of services subscribed to by the COMMANDER.

Version and revision management of the agreement is documented in the preamble of the document to facilitate tracking.

## 6. Audit

The Provider undertakes to allow the COMMANDER, or any third-party auditor designated by the COMMANDER, to access all documents necessary to attest to the full compliance with the obligations related to compliance with the provisions of Article 28 of the General Data Protection Regulation (GDPR), thus facilitating audits.

**The Provider specifically undertakes to make available to the COMMANDER the list of all third parties who can access the data and to inform the COMMANDER of any change in subcontractors.**

By accepting this service agreement, the COMMANDER grants its explicit authorization to:

1. **The National Agency for the Security of Information Systems (ANSSI)** as well as the competent qualification entity to undertake the verification of the compliance of the Service and its Information System with the standards defined by the SecNumCloud Reference Framework.
2. **A qualified information system security auditor**, expressly designated by the Provider, to conduct security audits on the Service provided by the Provider.

## 7. Service Description

The service offer proposed by the Provider is characterized by the provision of the following services, which align with the shared responsibility principle detailed in the standards established by the SecNumCloud Reference Framework:

- Provision of a Redhat Openshift container management platform managed by the Provider.

It is understood that the Provider will use its expertise to deliver the Services according to best professional practices, in accordance with their Specifications and respecting the standards of its ISO/IEC 27001 certification as well as the guidelines of the SecNumCloud Reference Framework.

## 8. Service Implementation

It is specified that all operations and physical components involved in the delivery of the qualified service, the subject of this agreement, are located in the European Union. This includes, among others, support, operational monitoring, and security monitoring (SOC).

### 8.1. Description of Technical Components

The PaaS (Platform as a Service) services encompass all the components and services required for optimal operation while respecting the SecNumCloud qualification.

In this regard, their performance and reliability are intrinsically linked to the technical components and services of the Provider's **IaaS infrastructure**, as specified in the [IaaS Service Agreement](../iaas/sla_iaas.md) document of the Provider.

#### 8.1.1. REDHAT OpenShift Service Platform

The service includes the provision within a region, across 3 availability zones,

#### 8.1.2. Software Infrastructure for Managing the Redhat Openshift Platform

The Provider provides the COMMANDER with the administration console and the necessary API for operating its RedHat OpenShift PaaS environments. It also commits to maintaining them in optimal operational condition and ensuring continuous security.

In the specific context of the service provided, the Provider makes available to the COMMANDER all the interfaces and APIs of the RedHat OpenShift platform within the selected tenant. It is up to the COMMANDER to implement appropriate security measures, such as firewalls (firewall), web application firewalls (WAF), and other protection measures, as well as to define the associated filtering rules to secure access to its platform in accordance with its security policy.

The Provider alerts the COMMANDER that abnormal use of its administration console, particularly in case of overload of its command APIs (hammering), may trigger automatic security measures resulting in the blocking of access to the command APIs or certain services of the Provider. It should be noted that this situation does not constitute a service outage but a protective action of the Provider's Infrastructure; therefore, the COMMANDER cannot consider it as an outage in its calculations.

Furthermore, the Provider informs the COMMANDER that identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the COMMANDER submits identical requests at a higher frequency, their rejection should not be interpreted as a service outage.

#### 8.1.3. Associated Backup Infrastructure

The Provider provides the COMMANDER with an integrated, dedicated, and managed backup platform for protecting the data of its RedHat Openshift environments. The Provider ensures the operational and security condition of this integrated backup platform. Regardless of the number of availability zones subscribed to by the COMMANDER, the Provider guarantees that the COMMANDER's backup platform will be located outside the availability zone of the backed-up workloads.

The backup service is limited to backing up virtual machines and the topology configuration of the IaaS environments of the COMMANDER's SecNumCloud tenants. The development and implementation of an appropriate backup policy by the COMMANDER depends on the subscription to specific work units. Therefore, it is the responsibility of the COMMANDER to ensure the availability of the necessary technical resources with the Provider to implement its backup policy or adjust it according to available resources.

The Provider undertakes to notify the COMMANDER in case of capacity constraints and to provide advisory assistance for resource optimization. The Provider's obligations will be limited to implementing the backup policy requirements expressed by the COMMANDER within the subscribed resources.

#### 8.1.4. Implementation of Business Continuity or Disaster Recovery Solutions

The Provider provides the COMMANDER with all the technical solutions necessary to ensure optimal distribution of its resources across various availability zones. It is up to the
COMMANDER's responsibility to effectively manage this resource distribution, for which it has the possibility to use the tools available from the Provider for this purpose.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms proposed by the Provider in order to benefit from the associated business continuity or disaster recovery solutions.

## 9. Commitments and Service Levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its platforms and services, ensuring their optimal operation.

Service unavailability, which is subject to a performance indicator, is recognized upon its identification by the Provider's monitoring system, or following a notification from a COMMANDER user. The start of unavailability is set at the earliest of these two events, to ensure accurate and fair calculation of downtime.

The end of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools, or by a user return, thus ensuring an effective resumption of operations and a faithful measurement of the interruption duration.

### 9.1. RedHat OpenShift Platform Availability Commitments

The Provider commits to maintaining an availability and performance level compliant with the standards defined for each specified period. Service Level Agreements (SLAs) apply provided the COMMANDER implements its systems through at least two of the availability zones present in the relevant region.

In the absence of compliance with these conditions by the COMMANDER, it will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (*). SLA accessibility is via the COMMANDER interface. **Measurements are understood to be calculated monthly**:

- **SLA 1 (*) : IC-PAAS_SNC-01** -- RedHat OpenShift platform availability: 99.9% guaranteed availability rate, calculated on a 24/7 basis.

***Notes***:

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of this attack and protect its infrastructure. In particular, if an IP address belonging to the COMMANDER is targeted, the Provider may use blackholing via the BGP community to block all traffic to the targeted IP address upstream with its suppliers, in order to protect the COMMANDER's resources as well as those of other COMMANDERS and the Provider's infrastructure. The Provider strongly encourages the COMMANDER to adopt similar measures, such as using web application firewall software available on the market, and to carefully configure its security groups via the command API.*

- *The Provider emphasizes the need for the COMMANDER to minimize traffic openings, particularly by avoiding making administrative ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (0.0.0.0/0) as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 10. Shared Responsibility Model applicable

### 10.1. Responsibilities and Obligations of the Provider

The Provider commits to providing the COMMANDER with user interfaces in French and English, facilitating access and management of the services provided. The COMMANDER, in turn, commits to respecting the legal and regulatory constraints in force relating to the data it entrusts to the Provider for processing.

In the case of data transmission subject to specific legal requirements, the Provider will collaborate with the COMMANDER to identify and implement the necessary security measures, in accordance with the Provider's obligations and within the scope of the service provision.

The Provider also commits to examining and taking into account the specific needs related to the COMMANDER's industry sectors, while respecting the limits of its liability, to ensure a security level appropriate to the processed information.

If a project is likely to impact the security of the Service offered or the availability of said Service or to cause a loss of functionality, the Provider commits to informing the COMMANDER through the console or by email to the COMMANDER's contact within a reasonable timeframe of potential impacts, planned corrective measures, and the related residual risks, ensuring full transparency.

The Provider commits not to use the COMMANDER's production data for testing purposes, except with the COMMANDER's prior explicit authorization, in which case the Provider commits to anonymizing these data and ensuring their confidentiality during anonymization.

In the event of a change in subcontractor for hosting, the Provider will inform the COMMANDER in advance, ensuring that this transition does not negatively affect the service provided.

At the COMMANDER's request, the Provider will provide access to its internal regulations, code of ethics, applicable sanctions in case of non-compliance with its security policy, events affecting it, service procedures, and specific security requirements.

The Provider commits to informing the COMMANDER of any upcoming changes to elements under Cloud Temple's responsibility, provided that full compatibility cannot be ensured.

### 10.2. Provider's Liability Limitation

The shared responsibility model effectively limits the Provider's scope of intervention to aspects related to the provision of a functional RedHat OpenShift platform, including:

- Management of the IaaS infrastructure supporting the RedHat OpenShift platform and its provisioning,
- Management of the systems necessary for the proper operation of the platform,
- Maintenance in secure conditions,
- Updating the RedHat OpenShift platform,
- Backing up essential configuration data of this platform, excluding the COMMANDER's data and applications, which fall under its responsibility.

It specifically excludes, but is not limited to:

- Updating the operating systems and software installed by the COMMANDER on its OpenShift environments in its premises,
- Security of the programs, software, and applications installed within the OpenShift environment by the COMMANDER,
- Application-level data backup,
- Configuration of backup policies.

### 10.3. Access Limitation

Within the scope of this service agreement, the Provider is formally prohibited from accessing tenants belonging to the COMMANDER without prior authorization. It is the COMMANDER's responsibility to provide the necessary access to the Provider's staff, according to the specific needs of the hosting and, if applicable, the professional support services, if this option has been chosen by the COMMANDER.

The COMMANDER acknowledges that these accesses are granted exclusively for the needs related to the agreed service provision, thus ensuring secure management and compliance with the terms of the agreement.

Remote access by third parties involved in the Provider's service provision is strictly prohibited. In the event of a specific technical requirement necessitating such access, it could only be established after clearly notifying the COMMANDER, providing a detailed justification, and obtaining its written consent.

This measure ensures the control and security of the COMMANDER's data, ensuring that any exception to the rule is duly authorized and documented.

## 11. Data Erasure at Contract Termination

At the end of the contract, whether it expires or is terminated for any reason, the Provider commits to securely erasing all of the COMMANDER's data, including technical data. The Provider will ensure to communicate a formal notice to the COMMANDER, respecting a 21-calendar-day period. The COMMANDER's data will then be deleted within a maximum of 30 days following this notification.

To attest to this deletion, the Provider will provide the COMMANDER with a certificate confirming the data erasure.

## 12. Applicable Law

The applicable law for this service agreement is French law.

In the event the Provider, in the context of services provided to the COMMANDER, resorts to a third-party company, including a subcontractor, whose headquarters, central administration, or main establishment is located in a country not part of the European Union, or which is owned or under the control of a third-party company based outside the European Union, the Provider commits to
Guarantee that said third-party company will have no access to the data processed by the Provider's service.

It should be noted that the data referred to includes those entrusted to the Provider by the CLIENT, as well as all technical data such as the identities of beneficiaries and administrators of the technical infrastructure, data manipulated by the networks, technical infrastructure logs, the directory, certificates, access configurations, etc., containing information about the CLIENT.

For clarity, the concept of control is defined in accordance with section II of article L233-3 of the Commercial Code.