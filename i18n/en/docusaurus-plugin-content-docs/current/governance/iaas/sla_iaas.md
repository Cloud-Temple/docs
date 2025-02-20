---
title: IaaS Service Agreement
---

![Cloud Temple Logo](images/ct.png)

# 1. **IaaS SERVICE AGREEMENT**

| **Recipients :**                     | **SPONSOR**                                     |
| :----------------------------------- | :---------------------------------------------- |
| **Document Reference**               | CT.AM.JUR.ANX_IaaS_Service_Agreement_v2.0       |
| **Your contacts**                    | *First Name* *Last Name*                        |
|                                      | Account Manager                                 |
|                                      | e-mail : *first.name*@cloud-temple.com          |
| **Last updated date**                | 04/03/2024                                      |
| **Contractual validation date**      | Day DD YYYY                                     |


----------------------------------------------------------------------------------

| **Version** | **Date**   | **Action**                             | **Author**      |
| ----------- | ---------- | -------------------------------------- | --------------- |
| v0.1        | 06/07/2022 | Initial drafting                       | Lorena ALCALDE  |
| v0.2        | 09/14/2022 | Enrichment                             | Lorena ALCALDE  |
| v1.0        | 12/30/2022 | Indicators Integration                 | Lorena ALCALDE  |
| v1.1        | 01/23/2023 | Footer modification                    | Lorena ALCALDE  |
| v1.2        | 05/22/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.3        | 06/29/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.4        | 11/06/2023 | Capital Modification and Enrichment    | Lorena ALCALDE  |
| v1.5        | 11/30/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.6        | 03/21/2024 | Enrichment                             | Lorena ALCALDE  |
| v2.0        | 03/29/2024 | SNC Compliance Adjustments             | Nicolas ABRIOUX |
| v2.0        | 04/03/2024 | Publication                            | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **TABLE OF CONTENTS**


- [1. **IaaS SERVICE AGREEMENT**](#1-iaas-service-agreement)
- [2. **TABLE OF CONTENTS**](#2-table-of-contents)
- [3. Preliminary and Glossary](#3-preliminary-and-glossary)
  - [3.1. Preliminary](#31-preliminary)
  - [3.2. Glossary](#32-glossary)
- [4. Acronyms](#4-acronyms)
- [5. Purpose of this Service Agreement](#5-purpose-of-this-service-agreement)
- [6. Audit](#6-audit)
- [7. Service Description](#7-service-description)
  - [7.1. Shared Responsibility Model](#71-shared-responsibility-model)
  - [7.2. Detailed Presentation of the Service Scope](#72-detailed-presentation-of-the-service-scope)
    - [7.2.1. Datacenter Infrastructures](#721-datacenter-infrastructures)
    - [7.2.2. Service Management Software Infrastructure](#722-service-management-software-infrastructure)
    - [7.2.3. Compute Infrastructures](#723-compute-infrastructures)
    - [7.2.4. Storage Infrastructure](#724-storage-infrastructure)
    - [7.2.5. Global Network Infrastructure](#725-global-network-infrastructure)
    - [7.2.6. Backup Infrastructure](#726-backup-infrastructure)
    - [7.2.7. Implementation of Business Continuity or Disaster Recovery Solutions](#727-implementation-of-business-continuity-or-disaster-recovery-solutions)
  - [7.3. Service Limitations in the Qualified IaaS Model](#73-service-limitations-in-the-qualified-iaas-model)
    - [7.3.1. Managed Services in RUN](#731-managed-services-in-run)
    - [7.3.2. Backup Configuration](#732-backup-configuration)
    - [7.3.3. Backup Configuration](#733-backup-configuration)
  - [7.4. Service Implementation](#74-service-implementation)
    - [7.4.1. Technical Prerequisites](#741-technical-prerequisites)
  - [7.5. Service Localization in France](#75-service-localization-in-france)
    - [7.5.1. Datacenter Localization Hosting the Service](#751-datacenter-localization-hosting-the-service)
    - [7.5.2. Cloud Temple agencies Localization Operating the Service](#752-cloud-temple-agencies-localization-operating-the-service)
  - [7.6. Support](#76-support)
    - [7.6.1. Nature of Support Accompanying the Service](#761-nature-of-support-accompanying-the-service)
    - [7.6.2. Solicitation of Technical Support Service](#762-solicitation-of-technical-support-service)
    - [7.6.3. Incident Management Process](#763-incident-management-process)
    - [7.6.4. Treatment Prioritization Process](#764-treatment-prioritization-process)
    - [7.6.5. Language and Localization of Support Service](#765-language-and-localization-of-support-service)
- [8. Commitments and Service Levels](#8-commitments-and-service-levels)
  - [8.1. Infrastructure Availability Commitments](#81-infrastructure-availability-commitments)
  - [8.2. SPONSOR Interface Availability Commitment](#82-sponsor-interface-availability-commitment)
  - [8.3. Support Availability Commitment](#83-support-availability-commitment)
  - [8.4. S3 Object Storage Availability Commitment](#84-s3-object-storage-availability-commitment)
  - [8.5. Backup Commitment Clarification](#85-backup-commitment-clarification)
- [9. Organization of the Contractual Relationship](#9-organization-of-the-contractual-relationship)
  - [9.1. Service Provider Responsibilities](#91-service-provider-responsibilities)
  - [9.2. Service Provider's Liability Limitation](#92-service-provider's-liability-limitation)
  - [9.3. Access Limitation](#93-access-limitation)
  - [9.4. Third Parties Responsibilities Involved in the Secure Temple Service Provision](#94-third-parties-responsibilities-involved-in-the-secure-temple-service-provision)
  - [9.5. SPONSOR Responsibilities and Obligations](#95-sponsor-responsibilities-and-obligations)
  - [9.6. SPONSOR Rights](#96-sponsor-rights)
  - [9.7. Data Erasure at the End of Contract](#97-data-erasure-at-the-end-of-contract)
- [10. Service Agreement Lifecycle](#10-service-agreement-lifecycle)
  - [10.1. Service Agreement Effective Date](#101-service-agreement-effective-date)
  - [10.2. Service Agreement Evolutions](#102-service-agreement-evolutions)
    - [10.2.1. Evolutions Triggered by the SPONSOR](#1021-evolutions-triggered-by-the-sponsor)
    - [10.2.2. Evolutions Triggered by the Service Provider](#1022-evolutions-triggered-by-the-service-provider)
  - [10.3. Reversibility](#103-reversibility)
- [11. Service Availability, Continuity, and Restoration](#11-service-availability-continuity-and-restoration)
  - [11.1. Incident and Outage Management](#111-incident-and-outage-management)
    - [11.1.1. Incidents](#1111-incidents)
      - [11.1.1.1. Types of Incidents Handled Under This Service Agreement](#11111-types-of-incidents-handled-under-this-service-agreement)
      - [11.1.1.2. Incident Handling](#11112-incident-handling)
      - [11.1.1.3. Security Incident Notification Level](#11113-security-incident-notification-level)
  - [11.2. Service Maintenance](#112-service-maintenance)
    - [11.2.1. Nature of Maintenance](#1121-nature-of-maintenance)
    - [11.2.2. Cloud Temple Remote Access on the SPONSOR's Scope](#1122-cloud-temple-remote-access-on-the-sponsor's-scope)
    - [11.2.3. Third Parties Remote Access Involved in the Service Provision on the SPONSOR's Scope](#1123-third-parties-remote-access-involved-in-the-service-provision-on-the-sponsor's-scope)
- [12. Data Erasure Procedure at the End of Contract](#12-data-erasure-procedure-at-the-end-of-contract)
- [13. Applicable Law](#13-applicable-law)
  - [13.1. In General](#131-in-general)
  - [13.2. Compliance with Applicable Law and Regulations](#132-compliance-with-applicable-law-and-regulations)
  - [13.3. GDPR](#133-gdpr)
  - [13.4. Protection Against Non-European Law](#134-protection-against-non-european-law)
- [14. SIGNATURES](#14-signatures)


----------------------------------------------------------------------------------


# 3. Preliminary and Glossary

## 3.1. Preliminary

This document formalizes the Service Agreement associated with the IaaS service qualified as SecNumCloud under the name "*Secure Temple*".

\"This service agreement complements and is supplementary to the general terms of sales and use of the Service Provider. It is understood that contractual documents are to be interpreted consistently with each other. In case of contradiction or divergence between the terms of the contractual documents, the documents will prevail over each other in the following order:

1. General Terms of Sales and Use (GTSU)
2. SecNumCloud IaaS Service Agreement
3. SecNumCloud PaaS Service Agreement
4. Specific Special Agreement
5. Security Assurance Plan (SAP)
6. Special Terms of Use (STU)

## 3.2. Glossary

In this Service Agreement, the **SPONSOR**, the **Service Provider**, and the **Parties** are identified in the Contract to which this Service Agreement is an annex.

The expressions used hereafter in this Service Agreement will be interpreted according to the definitions attributed to them below:

-   **Change:** Any addition, modification, or deletion impacting the Service, having been authorized, planned, or managed.

-   **Standard Change:** Change subject to a procedure, whose deployment modalities and impacts (including financial) are known and accepted in advance by the Parties. It is then integrated into the standard changes catalog and may, in some cases, have an RTO and an RPO.

-   **Contract:** refers to the contract subscribed to by the CLIENT with the Provider to allow the CLIENT to benefit from the Service, to which this Service Agreement is annexed.

-   **Service Agreement:** This document, established within the framework of a specific contract or General Terms of Sale and Use (GTSU), in compliance with the requirements of the SecNumCloud Reference Framework.

-   **Service Request:** request from the CLIENT to the Provider within the framework of the Service, covering operations not feasible by the CLIENT from the CLIENT interface and support requests within the framework of the Service. Service requests are limited to those provided under the Contract or this Service Agreement.

-   **Availability:** Ability to ensure the availability and maintenance of optimal Service performance, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).

-   **Technical data:** includes all data handled to deliver the Service, notably including the identity of beneficiaries and administrators of the technical infrastructure, logs of the technical infrastructure, access configuration, directory, certificates...

-   **Event:** An "event" is any detectable or identifiable occurrence that may have significance for managing the Service.

-   **Hypervisor:** Operating system allowing the execution of virtual machines on a compute blade.

-   **Incident:** Any unforeseen event that disrupts the normal operation of the Service or compromises data security.

-   **Security Incident:** Any event within the Service scope:

    -   Of intentionally malicious nature;
    -   Of accidental nature affecting the integrity, confidentiality, or traceability of the Service or CLIENT's data;
    -   Affecting existing security measures.
    Non-malicious origin Availability breaches are not considered Security Incidents (hardware failure, bug, malfunction, natural disaster...).

-   **CLIENT Interface:** Administration interface of the Service made available to the CLIENT by the Provider, including a web administration console and an API.

-   **Deployment:** administration action(s) of executing the Change when it is approved (the change, in the ITIL sense, only concerning change management and not its execution/implementation).

-   **Problem:** the cause of one or more recurring Incidents, the cause of a potential Incident (risky situation).

-   **Region:** refers to a geographically defined set of cloud availability zones, providing network, compute, and storage services to optimize latency, performance, and local regulatory compliance.

-   **Service:** refers to the IaaS service qualified SecNumCloud "Secure Temple", delivered to the CLIENT by the Provider from technical infrastructures maintained by the Provider, as described in the "Service Description" section of this Service Agreement.

-   **Secure Temple:** refers to the IaaS service qualified SecNumCloud, offered by Cloud Temple, as defined in the certificate available on the ANSSI website and provided in the appendix of this Service Agreement.

-   **Disaster:** refers to a serious event of natural or human, accidental or intentional origin, causing significant losses and damages to the affected Party.

-   **Monitoring:** Surveillance of an Information System or Service, involving the collection of various data such as measurements and alarms. This activity is limited to observation and monitoring, without directly intervening on the monitored elements, a prerogative of Administration operations.

-   **Tenant:** An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security.

-   **Availability Zone (AZ):** A specific and isolated section of cloud computing infrastructure, designed to ensure high availability and service resilience through geographic distribution of resources.

# 4. Acronyms


  | **Acronym** | **Definition**                                                                          |
  | ----------- | :------------------------------------------------------------------------------------- |
  | **CAB**     | Change Advisory Board -- Comité consultatif sur les changements                         |
  | **CMDB**    | Configuration Management Database -- Base de données de gestion des configurations      |
  | **COPIL**   | Comité de pilotage                                                                      |
  | **COSTRAT** | Comité stratégique                                                                      |
  | **COPROJ**  | Comité Projet                                                                           |
  | **DB**      | Database (base de données)                                                              |
  | **DRP**     | Disaster Recovery Plan (PRA) (Plan de reprise d'activité)                               |
  | **GTE**     | Garantie de Temps d'Escalade                                                            |
  | **GTI**     | Garantie de Temps d'Intervention                                                        |
  | **GTR**     | Garantie de Temps de Résolution                                                         |
  | **ITIL**    | Information Technology Infrastructure Library - Best practices for managing IT          |
  | **IaaS**    | Infrastructure as a Service                                                             |
  | **MCO**     | Maintien en condition opérationnelle                                                    |
  | **MOA**     | Maitrise d'Ouvrage                                                                      |
  | **MOE**     | Maitrise d'Œuvre                                                                        |
  | **MSP**     | Managed Services Provider                                                               |
  | **OS**      | Operating system (système d'exploitation)                                               |
  | **PAQ**     | Plan d'Assurance Qualité                                                                |
  | **PaaS**    | Platform as a Service                                                                   |
  | **PAS**     | Plan d'Assurance Sécurité                                                               |
  | **PASSI**   | Prestataire d'Audit de Sécurité des Systèmes d'Information                              |
  | **RFC**     | Request For Change -- Demande de changement                                             |
  | **RGPD**    | Règlement Général de Protection des Données (personnelles)                              |
  | **RPO**     | Recovery Point Objective -- Data freshness restored in case of Disaster                 |
  | **RTO**     | Recovery Time Objective -- Time to recovery for service in case of Disaster             |
  | **SDM**     | Service Delivery Manager                                                                |
  | **SLA**     | Service Level Agreement -- Service Level Agreement                                      |
  | **SNC**     | SecNumCloud                                                                             |
  | **SOC**     | Security Operation Center                                                               |
  | **TMA**     | Tierce Maintenance d'Application                                                         |
  | **UO**      | Unité d'Œuvre                                                                           |
  | **VABE**    | Validation d'Aptitude à la Bonne Exploitabilité                                         |
  | **VABF**    | Validation d'Aptitude au Bon Fonctionnement                                             |
  | **VM**      | Virtual Machine (Virtual Machine)                                                       |
  | **VSR**     | Service Regular Validation                                                              |


# 5. Purpose of this Service Agreement

This Service Agreement establishes the terms and conditions under which the Provider commits to delivering the Service to the
CLIENT. Its purpose is to:

-   Specify the performance requirements expected by the CLIENT in terms of functionality and reliability of the Service;

-   Outline the Provider's obligations to meet the agreed service levels;

-   Identify the regulatory standards specifically applicable to the delivered Service;

-   Ensure uniformity and integrity in the evaluation of Service quality;

-   Guarantee the excellence of the services provided, assessed by quantitative performance indicators.

It is stipulated that, in the event the Provider loses its SecNumCloud qualification, the Contract may be terminated.
full right, without incurring penalties, by the SPONSOR. In such an event, the Provider commits to informing the SPONSOR
of this disqualification by sending an official notification, using a registered letter with a request for acknowledgment of receipt.

It should be noted that a modification or adjustment of the SecNumCloud qualification shall not be interpreted as a revocation of
the initial qualification.

# 6. Audit

The Provider commits to allowing the SPONSOR, or any third-party auditor who is not a competitor of the Provider and designated by the latter, to consult all documents necessary to certify full adherence to the obligations related to compliance with the provisions of Article 28 of the General Data Protection Regulation (GDPR), thus facilitating the conduct of
audits.

By accepting this Service Agreement, the SPONSOR gives explicit authorization to:

1. The National Cybersecurity Agency of France (ANSSI) and the competent qualification entity to undertake the verification of the conformity of the Service and its information system to the SecNumCloud framework.
2. An information system security audit provider, duly qualified as PASSI and expressly designated by the Provider, to conduct security audits of the Service.

# 7. Service Description

## 7.1. Shared Responsibility Model

The Service offered by the Provider is characterized by the provision of the following services, which align with the
shared responsibility principle presented in the SecNumCloud framework:

- The provision of compute resources;

- The provision of storage spaces;

- Access to network and internet connectivity services;

- The offer of a dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the SPONSOR within the framework of the Service is presented in §7.1.

It is understood that the Provider will leverage its expertise to perform the Services according to best professional practices and
in compliance with the requirements of the SecNumCloud framework.

The Service is SecNumCloud qualified (see certificate in Annex).

## 7.2. Detailed Service Scope Presentation

| Compute               | Compute resource of the SPONSOR Tenant                                                                          |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | Production data of the SPONSOR Tenant                                                                        |
| Object Storage S3     | provision of a multi-AZ sovereign object storage infrastructure compatible with standard S3 APIs. |
| Backup                | Subject to subscription to the appropriate mass storage                                                                          |
| Network Infrastructure | Network resource of the SPONSOR Tenant                                                                             |
| SPONSOR Console       | The service enabling the SPONSOR to access and manage its IaaS service via the Shiva interface        |
| Support               | The support service accompanying the previous services and exclusively those (*)                                 |

_(*) Within the scope of the SNC-qualified Service and the Provider's responsibilities therein_

### 7.2.1. Datacenter Infrastructures

The Service includes the provision, for each Availability Zone, of the following qualified services:

- Datacenter site located in France for the FR Region, compliant with the latest technological standards, offering a level of resilience equivalent or superior to the Tier 3 level of the Uptime Institute;
- Provision of server rooms within datacenters dedicated to hosting the technical equipment essential for service production, including compute, storage, network, cabling, and other necessary components;
- Secured power supply, ensured by two distinct electrical circuits, guaranteeing service continuity;
- Provision of air conditioning services, adjusted to comply with the standards and recommendations of equipment manufacturers, to maintain an optimal environment for technical devices;
- Continuous monitoring and detailed metrology, allowing precise tracking and proactive management of the provided service's performance and security.

The Provider ensures the provision of advanced fire detection and extinguishing services, designed to effectively identify and neutralize any fire outbreak within the facilities. These systems are essential to guarantee the safety of the equipment and data. They include high-precision smoke detectors and extinguishing devices that can act rapidly without damaging IT equipment. This service is crucial to prevent fire risks, minimize potential damage, and ensure operational continuity.

The SPONSOR is informed that all implemented security procedures and measures, including annual tests on generator switches, are essential to ensure the continuity and integrity of the provided services. These practices are designed to minimize outage risks and ensure optimal responsiveness in case of an Incident. By accepting these terms, the client acknowledges the importance of these measures and commits to fully cooperate to facilitate their implementation. The SPONSOR is also encouraged to review the provided security recommendations and integrate them into its own risk management strategy.

### 7.2.2. Service Management Software Infrastructure

The Provider provides the SPONSOR with the administration console and API required to use the Service. The Provider commits to maintaining this administration console and API in optimal operational condition and ensuring their continuous security.
This administration console and API are collectively referred to as the "SPONSOR interface."

The Provider alerts the SPONSOR that abnormal use of the SPONSOR interface, particularly in case of API command overload (hammering), may trigger automatic security measures leading to the blocking of access to the command APIs or the Service. It should be noted that this situation does not constitute a Service unavailability but an action to protect the Service and the Provider's infrastructure; thus, the SPONSOR cannot consider it as unavailability in its calculations.

Furthermore, the Provider specifies to the SPONSOR that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the SPONSOR submits identical requests at a higher frequency, their rejection cannot be interpreted as Service unavailability.

### 7.2.3. Compute Infrastructures

The Service includes the provision, within the availability zones subscribed to by the SPONSOR, of the necessary equipment for
executing workloads in the form of virtual machines.

This includes:

- Provision of technical chassis necessary for the proper functioning of the compute blades;
- Provision of compute blades in quantities specified by the SPONSOR and distributed according to the availability zones of its choice. It should be noted that these compute blades are exclusively dedicated to the SPONSOR;
- Provision of hypervisor-type operating systems and the guarantee of maintaining operational and security conditions for the software infrastructure necessary for managing these operating systems. It should be highlighted that, although the Provider is responsible for overall operational maintenance and security of the Service, it does not possess specific knowledge regarding the SPONSOR’s production environments or workload requirements. Therefore, the responsibility for deciding to update the hypervisor compute blades' operating systems, an action that may require a restart, rests entirely with the SPONSOR. This operation can be conducted via the SPONSOR Interface.

The selection of the compute blade model, chosen from the catalog offered by the Provider, is the responsibility of the
SPONSOR.

### 7.2.4. Storage Infrastructure

The service includes the provision to the SPONSOR of a shared SAN (Storage Area Network) infrastructure, offering various performance levels. This service includes:

- Implementation and maintenance of the dedicated SAN network in operational and security conditions;
- Installation and management of shared storage arrays among clients, including their operational and security maintenance, supervision, and metrology;
- Implementation of automated systems for the allocation of storage LUNs (Logical Unit Numbers) dedicated to the SPONSOR’s use, in accordance with the volumes subscribed by the SPONSOR.

### 7.2.5. Global Network Infrastructure

Within the Service framework, the Provider deploys a global network facilitating the accessibility of the SPONSOR’s hosted systems. This service includes:
-   The provision, operational maintenance, and security maintenance of all optical fiber connections
    interconnecting the various Availability Zones;

-   The provision, operational maintenance, and security maintenance of the technical equipment necessary for the proper
    functioning of the network and the isolation of different clients.

The network interconnection of the DELEGATOR Tenant to the Internet or private networks, and the network equipment, operator links, and other
technical components implementing this interconnection, are not part of the Service scope. This network interconnection is implemented
in accordance with the provisions outlined in the Contract.

### 7.2.6. Backup Infrastructure

The Provider makes an integrated, dedicated, and managed backup service available to the DELEGATOR, aimed at protecting its
virtual machines. The Provider ensures the operational maintenance and security maintenance of this backup service.
The Provider guarantees that the DELEGATOR’s backups will be located outside the Availability Zone of the workloads
backed up, provided that the DELEGATOR has subscribed to adequate Work Units.

This backup service is limited to the backup of virtual machines and the topology configurations of the IaaS environment
of the DELEGATOR’s Tenants as part of the Service. The development and implementation of an adequate backup policy by the
DELEGATOR depend on the subscription to specific work units. Therefore, it is the responsibility of the DELEGATOR to ensure the
availability of the necessary technical resources from the Provider to implement its backup policy or
to adjust this policy based on the available resources.

The Provider commits to notify the DELEGATOR in case of capacity constraints and to provide advisory assistance for
resource optimization. The Provider’s obligations will be limited to the implementation of the needs expressed by the DELEGATOR
regarding the backup policy, within the scope of the subscribed resources.

### 7.2.7. Implementation of Disaster Recovery or Business Continuity Solutions

The Provider supplies the DELEGATOR with all the necessary technical solutions to ensure an optimal distribution of its resources across various Availability Zones. It is the responsibility of the DELEGATOR to effectively manage this resource distribution, for which it can utilize the Provider's tools available for this purpose.

## 7.3. Service Limitations in the Qualified IaaS Model

### 7.3.1. Managed Services in RUN

It is important to note that the following are excluded from the Service:

-   Hosting of physical components of the DELEGATOR;

-   Network interconnection of the DELEGATOR Tenant to the Internet or private networks, including operator links;

-   Any managed service type, or TMA;

-   Any support on virtual machines at the OS level and above in the Iaa stack, even if it is simple supervision.

However, it is absolutely not excluded that the DELEGATOR may use such services from the Provider's MSP offer to operate in managed services mode on its Tenants. These services will then not be covered by this Service Agreement and its mutual commitments/clauses.

### 7.3.2. Backup Configuration

By default, the Provider provides the implementation of IaaS resources to the DELEGATOR by reserving resources and configuring deployments to use Availability Zones. It is up to the DELEGATOR to choose the Availability Zones via the DELEGATOR interface.

### 7.3.3. Backup Configuration

The backup service is limited to backing up virtual machines and topology configurations representing the DELEGATOR’s Tenant IaaS environment as part of the Service.

The backup service and the implementation of the DELEGATOR's backup policy are subject to the subscription of mass storage space necessary to ensure the service. Therefore, it is the responsibility of the DELEGATOR to subscribe to the necessary technical means from the Provider to ensure its backup policy within its IT scope, or to adjust the backup policy to the means implemented. The Provider commits to informing the DELEGATOR in case of technical capacity limits.

The Provider will implement the necessary technical and human resources for the backup of the hosted system within the limit of the resources subscribed by the DELEGATOR.

Moreover, for scopes not covered by the Provider, it is up to the DELEGATOR to define its own backup strategy and configure itself the backups of VMs or make a Service Request to the Provider for the configuration of backups for physical servers if the DELEGATOR has a managed service contract allowing the Provider to act via the DELEGATOR interface, which is the administration console provided under this Service Agreement and has functionalities to configure the backups.

Furthermore, this service will only be committed to translating by configuring via the DELEGATOR interface, the configuration clearly specified by the DELEGATOR.

For flexibility reasons of the Provider's offer, the DELEGATOR has the option to associate a no-backup policy on some of its VMs. In this case, it is up to the DELEGATOR to assume this choice. The Provider will not back up the VMs associated with the "no backup" policy. The Provider warns the DELEGATOR that choosing the "no backup" policy or choosing to back up manually exposes the DELEGATOR to a definitive data loss in case of Incident on the lower layers or on layers depending on its responsibility in the IaaS model. In such a case, it will be impossible to hold the Provider responsible for restoring the data as there will be nothing to restore. The Provider recommends always backing up the VMs.

For any subject concerning the OS installed on a virtual machine and any software or program running "above the OS", it is the responsibility of the DELEGATOR to perform administration and monitoring operations within the European Union if it wants to ensure that all vertical layers of the IS are operated and managed from the European Union. Administration operations outside the Provider's responsibility scope under this Service Agreement are listed in the "Shared Responsibilities Model" section of this Service Agreement.

## 7.4. Service Implementation

### 7.4.1. Technical Prerequisites

For the implementation of the Service, the DELEGATOR acknowledges that it will need to:

-   Operate with VMware virtualization in the versions supported by the vendor and provided by the Provider as part of the Service;

-   Utilize the backup tool via the Provider;

-   Declare fixed IPs from which the Provider will authorize access to the DELEGATOR interface (Whitelist filtering). Changes to this list of IPs must be made through Service Requests (the list cannot be managed through the Service administration interface).


## 7.5. Service Location in France

It is specified that none of the operations and none of the physical components involved in the provision of the Service, which is the subject of this Service Agreement, are located outside the European Union. 

This includes, notably, support, operational supervision, and security supervision (SOC) of the technical infrastructure delivering the Service. Therefore, all storage, all administration tasks, all supervision, and all processing are carried out in France.

### 7.5.1. Location of Datacenters Hosting the Service

Except for the operations of the Provider’s employees and agencies, all production operations (including data storage and processing) and technical components delivering the Service are located in datacenters based in France.

### 7.5.2. Location of Cloud Temple Agencies Operating the Service

Cloud Temple employees intervening within the Service scope operate from Cloud Temple agencies all located exclusively in France. These agencies are located in France, in Tours, Lyon, Caen, and Paris La Défense.

The DELEGATOR is informed of the possibility for Cloud Temple employees to work remotely. However, the Provider guarantees the same level of security regarding remote access, particularly concerning VPN access. These remote accesses are implemented following the requirements of the SecNumCloud framework.

## 7.6. Support

### 7.6.1. Nature of Support Accompanying the Service

The Provider offers a technical support service aimed at assisting the DELEGATOR in managing, troubleshooting, and optimizing
their deployed resources. This service covers a wide range of activities, from aiding in the initial configuration of services
to advanced technical support for resolving specific issues.

Here is a description of the characteristics and functionalities of the support service:

-   Assistance with the initial implementation of the Service use;
-   Assistance with incident resolution;
-   Assistance with problem resolution;
-   Monitoring and advice on optimizing the technical platform.

As part of the support service, the Provider does not replace the CLIENT in the use of the Service. The CLIENT remains fully responsible for the configuration, operation of its VMs and its Tenants, and the management of all elements (including data and applications) that it has stored or installed on the Provider's infrastructure. The technical support service is provided in accordance with the General Terms and Conditions of Sale and Use, with the Provider being bound to an obligation of means.

The CLIENT undertakes to use the technical support service reasonably, refraining from requesting services not subscribed to from the Provider and from involving the Provider's teams with its own clients or third parties not included in the Contract. The Provider reserves the right to reject any service request not meeting these criteria.

The level of support commitment is conditioned by the subscription of the associated support work units.

### 7.6.2. Requesting technical support service

Technical support is accessible via a ticket system through the CLIENT console and is available during normal office hours excluding public holidays (8 a.m. to 6 p.m.; Monday -- Friday; French calendar and hours). For emergencies occurring outside of business hours, particularly incidents significantly affecting production, the on-call service can be reached via a number communicated to the CLIENT at the initialization of the Service.

For each request or Incident, it is imperative to generate a ticket with the Provider's support. The initialization of this ticket, including all necessary information, is essential and marks the start of the Provider's engagement evaluation.

Once the Provider receives a request or Incident notification, either through the management console or following a phone call, a ticket is automatically created. When reporting an Incident, it is essential that the CLIENT provides the provider with as much detail as possible about the encountered problem. This approach is crucial for an adequate assessment of the situation, its prioritization, and effective diagnosis.

The Client then receives a confirmation email, indicating the creation of the ticket and its unique number. The CLIENT can check the status and history of its requests and Incident reports directly from the management console.

### 7.6.3. Incident management process

When reporting an Incident, the Provider's technical support team initiates an investigation to identify the cause of the problem and establish a diagnosis. The Client must actively cooperate with the Provider by providing all necessary information and performing the required tests. The Provider can access the Client's Service to diagnose the Incident.

If the Provider's Services are deemed functional and the Incident is not attributable to it, the Client will be informed. At the Client's request, the Provider can offer Professional Services to identify the origin of the problem, billable upon prior agreement in 30-minute increments.

If the Incident is the responsibility of the Provider or one of its subcontractors, the Provider completes the diagnosis and works on restoring the Service at no additional cost. The diagnosis is based on the exchanges between the Parties and the Provider's data, these elements being considered as evidence by agreement of the Parties.

### 7.6.4. Incident prioritization process

The determination of a case's priority level is based on a matrix analysis that evaluates the impact of the Incident and its level of severity:

- The levels of impact are defined as follows:

| Impact Level | Description                                                                                                       |
| -------------| ----------------------------------------------------------------------------------------------------------------- |
| Impact I1    | The Provider's service(s) are interrupted                                                                        |
| Impact I2    | The Provider's service(s) are degraded                                                                           |
| Impact I3    | The Provider's service(s) are currently stable, but show signs of potential long-term decline                    |

- The levels of Severity are defined as follows:

| Severity Level | Description                                                                                                     |
| ---------------| --------------------------------------------------------------------------------------------------------------- |
| Severity C1    | The Provider's service(s) are deteriorating at a worrying speed                                                 |
| Severity C2    | The Provider's service(s) are gradually deteriorating over time                                                 |
| Severity C3    | The Provider's service(s) present one or more inconsequential inconveniences                                   |

- Based on an in-depth analysis of the situation, taking into account the elements determining Impact and Severity, a priority is assigned to the ticket according to the decision matrix below:

| Impact Level <br/> \ Severity Level | Impact I1       | Impact I2       | Impact I3       |
| ------------------------------------| --------------- | --------------- | --------------- |
| Severity C1                         | Priority **P1** | Priority **P2** | Priority **P3** |
| Severity C2                         | Priority **P2** | Priority **P3** | Priority **P4** |
| Severity C3                         | Priority **P3** | Priority **P4** | Priority **P5** |

The service level agreements corresponding to each priority level are detailed in the next chapter.

### 7.6.5. Language and location of the support service

Support is provided by the Provider to the CLIENT at least in French. Support can also be provided in English.

The Provider's support service operations for the SecNumCloud qualified infrastructure service offering are located in the European Union.

# 8. Service commitments and levels

The Provider undertakes to ensure continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, ensuring its optimal functioning.

The unavailability of a service, subject to a performance indicator, is recognized upon identification by the Provider's monitoring system, or following notification by a CLIENT user. The start of unavailability is set at the earliest moment between these two events, to guarantee a precise and fair count of the downtime.

The end of the unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or by user feedback, thus ensuring an effective resumption of operations and an accurate measure of the interruption duration.

## 8.1. Infrastructure availability commitments

The Provider undertakes to maintain a level of availability and performance in accordance with the standards defined for each specified period. The service level agreements (SLAs) apply subject to the CLIENT implementing its systems across at least two Availability Zones in the relevant Region.

If the CLIENT does not meet these conditions,
they will be unable to claim the application of the 
applicable SLAs, which are specifically identified by an 
asterisk (\*). Access to the SLAs is available through the 
CLIENT interface. Measurements are considered calculated monthly:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Computation power availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Storage availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 3     : IC-INFRA_SNC-03** – Backup reliability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Network infrastructure availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 5     : IC-INFRA_SNC-05** – Internet access: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.

_**Notes**_

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to 
limit the impact of the attack and safeguard its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may resort to blackholing 
techniques via the BGP community to block all traffic to the targeted IP address upstream at its providers, to protect the CLIENT's resources as well as those of other CLIENTs 
and the Provider's infrastructure. The Provider strongly encourages the CLIENT to adopt similar measures, such as using available web application 
firewall software, and carefully configuring its security groups via the command API.*
- *The Service Provider insists on the necessity for the CLIENT to minimize open connections, specifically by avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 8.2. Availability Commitment of the CLIENT Interface

-   SLA 6: IC-INFRA_SNC-06 -- Access to the Service administration console: a guaranteed availability of 97%, ensured continuously, 24 hours a day, 7 days a week.
-   SLA 7: IC-INFRA_SNC-07 -- Access to the Service management APIs: an availability of 99.9%, calculated on a 24/7 basis.

## 8.3. Availability Commitment of Support

- **SLA 8      : IC-INFRA_SNC-08** – Here are the performance commitments of the Service Provider's technical support for incidents, excluding scheduled maintenance:

| Priority         | Guarantee of Response Time (GRT)      | Performance Objective |
| --------------- | -------------------------------------- | --------------------- |
| Priority **P1** | 30min                                  | 95%                   |
| Priority **P2** | 2h                                     | 90%                   |
| Priority **P3** | 4h                                     | 90%                   |
| Priority **P4** | 24h                                    | 85%                   |
| Priority **P5** | 48h                                    | 85%                   |

- **SLA 9      : IC-INFRA_SNC-09** – Here are the performance commitments of the Service Provider's technical support for service requests:

|                    | Guarantee of Response Time (GRT)      | Performance Objective |
| ------------------ | -------------------------------------- | --------------------- |
| Service Request    | 4h                                     | 90%                   |

*Note:*

- *The Guarantee of Response Time (GRT) is calculated from the difference between the moment the CLIENT opens the ticket and the first intervention by the Service Provider's support.*
- *Incident investigation for CLIENTs does not include remote intervention on the CLIENT's hosted servers. This assistance is limited to explaining the available metrics related to the CLIENT's environment to facilitate understanding of incidents or performance issues encountered. Based on the results of this analysis, recommendations may be suggested.*

## 8.4. Availability Commitment of S3 Object Storage

- **SLA 10      : IC-INFRA_SNC-10** – Here are the availability commitments for S3 object storage:

| Indicator         | Commitment                                        | Availability Objective  |
| ----------------- | -------------------------------------------------- | ----------------------- |
| IC-INFRA-SNC-10.1 | Durability of object storage in a region           | 99.9999999% / year      |
| IC-INFRA-SNC-10.2 | Availability of the S3 Object Storage API          | 99.99%                  |
| IC-INFRA-SNC-10.3 | Maximum access latency to an object in a region    | 150 ms                  |

Notes:

- The Object Storage Service is specifically designed for object storage and must be used exclusively for this purpose, **categorically excluding its use in block mode**. Resorting to block mode by circumventing methods, including the use of *"FUSE" in a Linux environment*, constitutes a violation of the stated terms of use. No incidents, malfunctions, or damages resulting from this non-compliant use will be covered by the Service Level Agreements (SLAs) defined in this service agreement.
- The durability guarantee is conditioned upon using the services in accordance with current best practices and standards and explicitly excludes any data modification, whether intentional or accidental, resulting from actions undertaken by the CLIENT.

## 8.5. Clarification regarding the backup commitment

The backup strategy deployed for the CLIENT is conditioned by subscribing to the appropriate units of work.

The Service Provider commits to providing a backup solution that will allow the CLIENT to apply the desired backup policies.

It is specified that the Service Provider's scope stops at providing a backup service, and it is the CLIENT's responsibility to monitor through the CLIENT interface the proper execution of the associated policies.

It is specified that the management of storage capacities of the storage space dedicated to backups remains the responsibility and liability of the CLIENT. The Service Provider provides the usage rate via the console.

*Example: Non-backup of a virtual machine:*

*The CLIENT is responsible for verifying / monitoring the proper execution of backup policies. If the CLIENT finds that a virtual machine is not backed up, it is the CLIENT's responsibility to check the cause, and the CLIENT may request the Service Provider's Support according to the subscribed support level for assistance.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9** will be exclusively applicable in the event of a backup service Incident.

# 9. Organization of the contractual relationship

## 9.1. Responsibilities of the Service Provider

The Service Provider commits to:

- properly inform their CLIENT (e.g., in case of technical resource capacity limits delivering the Service).

- formally inform the CLIENT within a month of any legal, organizational, or technical change that could impact the Service's compliance with protection requirements against extra-European laws (19.6 of the SNC v3.2 framework).

- provide the CLIENT with interfaces and service interfaces that are at least in the French language.

- study and consider sector-specific requirements related to the types of information entrusted by the CLIENT in implementing the service, within the Service Provider's responsibilities.

- not disclose any information related to the service to third parties, except with formal, written authorization from the CLIENT.

- provide all necessary information for compliance audits in accordance with Article 28 of the GDPR.

- report to the CLIENT under this Service Agreement any security Incident impacting the Service or the CLIENT's use of the Service (including CLIENT data).

- authorize a qualified information system security audit provider (PASSI) appointed by the Service Provider to audit the service and the Service Provider's information system according to the Prestataire's SecNumCloud control plan. Additionally, the Service Provider commits to providing all necessary information for conducting compliance audits in accordance with Article 28 of the GDPR, carried out by the client or a mandated third party.

- provide, as a subcontractor, in accordance with Article 28 of the General Data Protection Regulation (GDPR), assistance and advice to the CLIENT by alerting the CLIENT when an instruction issued by the CLIENT may constitute a violation of data protection rules.

- notify in writing when a project impacts or is likely to impact the Service's security level, informing the CLIENT of potential impacts, mitigation measures implemented, and residual risks affecting the CLIENT.

- document and implement all procedures necessary to meet the legal, regulatory, and contractual requirements applicable to the service, as well as the specific security needs of the CLIENT, defined by the CLIENT and specified in the Contract. Upon the CLIENT's request, the Documentation module of the CLIENT interface will allow for secure sharing of these documents.

- provide, upon the CLIENT's request, risk assessment elements related to the submission of the CLIENT data to the law of a non-EU state.

Upon formal and written CLIENT request, the Service Provider commits to:

1. Provide the CLIENT with access to the internal regulations and the Service Provider's ethics charter;

2. Provide the CLIENT with information on the penalties for violating security policies;

3. Provide the CLIENT with all events concerning the CLIENT within the Service's logging elements;

4. At the end of the Contract, the Service Provider commits to deleting the data and technical data related to the CLIENT, in accordance with the "end of Contract data deletion procedure" described in this Service Agreement.

5. Ensure the secure deletion of all CLIENT data by completely rewriting any medium that hosted their data as part of the Service.

6. Provide the complete list of third parties authorized to access infrastructures containing data.
The Service Provider shall keep up to date and make available to the CLIENT the exhaustive list of third parties authorized to access infrastructures containing data, informing the latter of any changes related to subcontractors. The Service Provider and all its subsidiaries commit to respecting the fundamental values of the European Union, namely human dignity, freedom, democracy, equality, the rule of law, and respect for human rights. The service provided by the Service Provider complies with the legislation in force concerning fundamental rights and the European Union's values concerning respect for human dignity, freedom, equality, democracy, and the rule of law.

## 9.2. Limitation of the Service Provider's responsibilities

Due to all the definitions and conditions mentioned in this Service Agreement, the Service Provider's responsibilities are limited as follows:

1. The shared responsibility model, described in the "Shared Responsibility Model" section of this Service Agreement, inherently limits the Service Provider's involvement in operational layers "above" the provision of computing, networking, storage, and backup resources. This particularly excludes but is not limited to:

    -   Management of what is installed on virtual machines (OS, middleware, applications, etc.);

    -   Keeping OS and other software installed by the CLIENT on its machines in its Tenants up-to-date;

    -   Security of programs, software, and applications installed on virtual machines;

    -   Updating virtual machines;
  
    -   Backup of data at the application level.

2.  The Service Provider cannot make backup commitments for the CLIENT’s Tenants without the CLIENT first subscribing to the appropriate operational units.

3.  The Service Provider cannot claim ownership of the data transmitted and generated by the CLIENT. Indeed, these belong to the CLIENT.

4.  The Service Provider emphasizes that it cannot in any way exploit the data transmitted and generated by the CLIENT without the latter's prior validation.
   
5.  The Service Provider disclaims any responsibility for components physically hosted and managed by the Service Provider but which are the direct property of the CLIENT or a third party with whom the CLIENT has contracted. The hosting of physical client components is not part of the Service and is thus outside the scope of this Service Agreement. It is up to the CLIENT to assess the level of adherence or dependency these components introduce concerning the qualified SecNumCloud IaaS Service.

## 9.3. Limitation of access

As part of the Service, the Service Provider is formally prohibited from accessing the CLIENT's Tenants without prior authorization. It is the CLIENT’s responsibility to provide the necessary access to the Service Provider's personnel, according to the specific needs of hosting and, where applicable, professional support services if this option has been chosen by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for needs related to the agreed service provision, ensuring secure management in accordance with the terms of the agreement.

Remote access by third parties involved in the Service Provider's service provision is strictly prohibited. In the event that a specific technical requirement necessitates such access, it may only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining written consent.

This measure ensures the CLIENT's data control and security by ensuring that any exception to the rule is duly authorized and documented.

## 9.4. Responsibilities of third parties participating in the provision of the Secure Temple service

The Service Provider controls the list of partner third parties participating in the Service delivery. These third parties are publishers, subcontractors (of the Service Provider), and other suppliers involved in the Service delivery. The Service Provider applies the following measures to these third parties:

-   The Service Provider requires that third parties participating in the service implementation, in their contribution to the Service, maintain a security level at least equivalent to that which it undertakes to maintain in its own security policy applicable to the Secure Temple service;

-   The Service Provider contracts with each third party participating in the service implementation, audit clauses enabling a qualification body to verify that these third parties comply with legal requirements and SNC requirements, allowing the Service Provider to meet its commitments in this Service Agreement.

-   The Service Provider implements a procedure to regularly control the measures taken by third parties participating in the service implementation to comply with the Service Provider's commitments in this Service Agreement.

-   The Service Provider implements a procedure to monitor the changes made by third parties participating in the service implementation that may affect the information system's security level.

## 9.5. Responsibilities and obligations of the CLIENT

As a reminder, the Service Provider provides the CLIENT with a platform for running virtual machines. The configuration of these is the CLIENT's responsibility. Each virtual machine cannot operate without an associated backup policy. The Service Provider defines through its interfaces automatic backup policies. However, it is the CLIENT’s responsibility to activate these backup policies and thus to activate the virtual machines.

The CLIENT authorizes ANSSI and the SNC qualification body to audit the Service and the technical infrastructure delivering the Service.

## 9.6. CLIENT's rights

At any time during the contractual relationship, the CLIENT may file a complaint regarding the qualified service with ANSSI.

At any time, the CLIENT may ask the Service Provider to make its internal regulations and ethics charter available.

## 9.7. Data erasure at the end of the Contract

At the end of the contract, whether it expires or is terminated for any reason, the Service Provider undertakes to securely erase all the CLIENT's data, including technical data. The Service Provider will ensure to communicate a formal notice to the CLIENT, respecting a period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum of thirty (30) days following this notification.

To attest to this deletion, the Service Provider will give the CLIENT a certificate confirming the erasure of the data.

# 10. Lifecycle of this Service Agreement

## 10.1. Effective date of the Service Agreement

This Service Agreement comes into effect on the day of its signature by the CLIENT.

The collection, handling, storage, and processing of data performed in the context of pre-sales, implementation, and termination of the service, are done in compliance with the applicable legislation.

## 10.2. Changes to the Service Agreement

Changes or additions made to this Service Agreement stem exclusively from requests made by governance bodies designated for this purpose. These change proposals will be reviewed by the Parties, authorized to determine the aspects requiring written formalization.

It is agreed that any change to the Service Agreement, after validation, that alters the initially established financial conditions, requires the establishment and signing of an amendment to the current Contract.

The factors that may prompt a revision of this Service Agreement include but are not limited to:

-   Evolution of the technical infrastructure delivering the IaaS Service;
-   Adjustments made to the services deployed by the Service Provider to provide the Service;
-   Variations in commitments made and applicable sanctions;
-   Organizational reconfigurations within the CLIENT or Service Provider;
-   Expansion or reduction in the scope of the Service.

The management of versions and revisions of the Service Agreement is recorded at the document's preamble to facilitate tracking.

### 10.2.1. Changes initiated by the CLIENT

Changes to the Service Agreement may originate, among other things, from:

-   Evolution of the infrastructure managed by the Service Provider;

-   Modification of the services implemented by the Service Provider;

-   Modification of the service level commitments by the Service Provider.

### 10.2.2. Changes initiated by the Service Provider

Any change to the Service Agreement is subject to the CLIENT's acceptance. It is understood that any validated modification or complement altering the Contract's financial elements may require the signing of an amendment to the Contract.

## 10.3. Reversibility

Additionally, Cloud Temple commits to allowing a revision of this Service Agreement (including notably its termination) without penalty for the CLIENT in case of loss of SecNumCloud qualification.
Les Services ne comprennent pas d'obligation de réversibilité (à savoir, l'aide au Client pour qu'il puisse migrer son système vers un autre" Provider) à l'exception de la mise à disposition du CLIENT by le Provider de l'interface CLIENT permettant au CLIENT de sauvegarder et récupérer ses données y compris notamment les données de configuration de leur système d'information via l'une des modalités techniques suivantes au choix du CLIENT : la mise à disposition de fichiers suivant un ou plusieurs formats documentés et exploitables en dehors du service fourni par le Provider ou bien via la mise en place d'interfaces techniques permettant l'accès aux données suivant un schéma documenté et exploitable (API).

Le CLIENT, seul maître de son système, doit tout mettre en œuvre pour faciliter cette opération en tant que de besoin (ce qui implique, notamment, qu'il mette en place une documentation rigoureuse à cet effet) et l'élaboration de plans de réversibilité. Dans le cas où le CLIENT aurait besoin d'une prestation complémentaire, le
Provider peut proposer une mission de conseil à cet égard dans le cadre d'un contrat spécifique à négocier.

# 11. Disponibilité, continuité et restauration du service

## 11.1. Gestion des Incidents et des interruptions

### 11.1.1. Incidents

#### 11.1.1.1. Types d'Incidents traités dans le cadre de cette Convention de service

-   Disasters

-   Failures and malfunctions

-   Security incidents:

-   Impacting service availability

-   Impacting service confidentiality

-   Impacting service integrity

#### 11.1.1.2. Incident handling

-   Deadlines

-   Post-incident actions

-   Archive documents detailing security incidents.

-   Notification of personal data breaches (online): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Level of notification of security incidents

The CLIENT has the responsibility to choose the severity levels of security incidents for which they wish to be informed, for example, via their formalization in an applicable PAS to the Service.

By default, the CLIENT is informed of:

-   Security incidents with impact (impacts I1 and I2 according to the impact scale defined in the prioritization process of this Service Agreement);

-   Personal data breaches for which the CLIENT is the data controller;

-   Personal data breaches for which the Provider is the data controller and involving the CLIENT's personal data.

## 11.2. Maintenance of the Service

### 11.2.1. Nature of maintenance

The maintenance provided consists of implementing:

-   The service continuity plan to ensure good availability metrics as committed by the Provider above;

-   The BCP/DRP plan if subscribed by the CLIENT triggered according to any incidents that may occur.

### 11.2.2. Remote access by Cloud Temple on the CLIENT's scope

The Provider is prohibited under this Service Agreement from accessing the Tenants and the CLIENT's interface space.

It is the CLIENT's responsibility to give the necessary access to the Provider's personnel. The CLIENT acknowledges that the access will be used as part of the hosting and ultimately for outsourcing (if subscribed by the CLIENT).

### 11.2.3. Remote access by third parties participating in the service provision on the CLIENT's scope

No remote access by third parties participating in the service provision is authorized.

If a technical need necessitates such a scenario, then this type of access will only be carried out after notification of the CLIENT, justification, and obtaining their written consent.

# 12. Data erasure procedure at the end of the Contract

At the end of the Contract, whether the Contract has expired or for any other reason, the Provider will ensure the secure erasure of all data processed under the Service, including the CLIENT's Technical Data. The Provider will give a formal notice with a minimum advance of twenty-one (21) calendar days. The CLIENT's data will be deleted within a maximum period of thirty (30) days after notification. The Provider provides a data deletion certificate to the CLIENT.

# 13. Applicable law

## 13.1. Generally

The applicable law to which this Service Agreement is subject is French law.

## 13.2. Compliance with applicable law and regulations

The Provider commits to the following:

-   Identification of applicable legal and regulatory constraints within the scope of the Service;

-   Compliance with applicable legal and regulatory constraints on data entrusted to the Provider;

-   Compliance with the Data Protection Act and GDPR;

-   Implementation of personal data protection measures;

-   Implementation of a legal and regulatory monitoring process;

-   Maintaining appropriate relationships or monitoring with sectoral authorities related to the nature of data processed under the Service. This includes in particular ANSSI, CERT-FR, and CNIL.

## 13.3. GDPR

Acting as a processor as per Article 28 of the General Data Protection Regulation (GDPR), the Provider commits to:

-   Ensuring transparency and traceability;

-   Appointing a DPO responsible for defining and implementing measures to protect personal data;

-   Providing assistance and advice to the CLIENT by alerting them if an instruction from the CLIENT constitutes a violation of data protection rules if the Provider has the means to identify it;

-   Guaranteeing the security of processed data (due to SecNumCloud qualification).

## 13.4. Protection against extraterritorial law

In the event that the Provider, within the scope of the Service, engages a third-party company - including a subcontractor - headquartered, centrally managed, or primarily established in a non-EU state, or belonging to or controlled by a third-party company located outside the European Union, the Provider commits that this aforementioned third party will not have any access to data operated by the 'Secure Temple' service.

As a reminder, the data concerned are those entrusted to the Provider by the CLIENT as well as all Technical Data containing information about the CLIENTS.

For the purposes of this article, the notion of control is understood as mentioned in II of Article L233-3 of the Commercial Code.

# 14. SIGNATURES

Signed at \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, on
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For Cloud Temple, the PROVIDER

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the CLIENT