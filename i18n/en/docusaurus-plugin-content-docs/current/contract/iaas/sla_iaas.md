---
title: IaaS Service Convention
---
  
![Logo Cloud Temple](images/ct.png)

# 1. **IaaS SERVICE CONVENTION**

| **Recipients:**                      | **SPONSOR**                                     |
| :----------------------------------- | :---------------------------------------------- |
| **Document reference**               | CT.AM.JUR.ANX_Service Agreement_IaaS_v2.0       |
| **Your contacts**                    | *First Name* *Last Name*                        |
|                                      | Account Manager                                 |
|                                      | email: *first.name*@cloud-temple.com            |
| **Last update date**                 | 04/03/2024                                      |
| **Contractual validation date**      | Day DD YYYY                                     |


----------------------------------------------------------------------------------
| **Version** | **Date**   | **Action**                             | **Author**      |
| ----------- | ---------- | -------------------------------------- | --------------- |
| v0.1        | 07/06/2022 | Initial draft                          | Lorena ALCALDE  |
| v0.2        | 14/09/2022 | Enrichment                             | Lorena ALCALDE  |
| v1.0        | 30/12/2022 | Integration of Indicators              | Lorena ALCALDE  |
| v1.1        | 23/01/2023 | Footer modification                    | Lorena ALCALDE  |
| v1.2        | 22/05/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.3        | 29/06/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.4        | 06/11/2023 | Capital Modification and Enrichment    | Lorena ALCALDE  |
| v1.5        | 30/11/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.6        | 21/03/2024 | Enrichment                             | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | SNC Compliance Adjustments             | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Publication                            | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **TABLE OF CONTENTS**


- [1. **IaaS Service Agreement**](#1-iaas-service-agreement)
- [2. **TABLE OF CONTENTS**](#2-table-of-contents)
- [3. Preliminary and Glossary](#3-preliminary-and-glossary)
  - [3.1. Preliminary](#31-preliminary)
  - [3.2. Glossary](#32-glossary)
- [4. Acronyms](#4-acronyms)
- [5. Purpose of the Service Agreement](#5-purpose-of-the-service-agreement)
- [6. Audit](#6-audit)
- [7. Service Description](#7-service-description)
  - [7.1. Shared Responsibility Model](#71-shared-responsibility-model)
  - [7.2. Detailed Service Scope Presentation](#72-detailed-service-scope-presentation)
```markdown
- [7.2.1. Datacenter Infrastructures](#721-datacenter-infrastructures)
- [7.2.2. Service Management Software Infrastructure](#722-service-management-software-infrastructure)
- [7.2.3. Computing Infrastructures](#723-computing-infrastructures)
- [7.2.4. Storage Infrastructure](#724-storage-infrastructure)
- [7.2.5. Global Network Infrastructure](#725-global-network-infrastructure)
- [7.2.6. Backup Infrastructure](#726-backup-infrastructure)
- [7.2.7. Implementation of Disaster Recovery or Business Continuity Solutions](#727-implementation-of-disaster-recovery-or-business-continuity-solutions)
- [7.3. Limitations of Services in the Qualified IaaS Model](#73-limitations-of-services-in-the-qualified-iaas-model)
- [7.3.1. Managed RUN Services](#731-managed-run-services)
- [7.3.2. Backup Configuration](#732-backup-configuration)
```
```markdown
- [7.3.3. Backup Configuration](#733-backup-configuration)
- [7.4. Service Implementation](#74-service-implementation)
  - [7.4.1. Technical Prerequisites](#741-technical-prerequisites)
- [7.5. Service Localization in France](#75-service-localization-in-france)
  - [7.5.1. Localization of Datacenters Hosting the Service](#751-localization-of-datacenters-hosting-the-service)
  - [7.5.2. Localization of Cloud Temple Agencies Operating the Service](#752-localization-of-cloud-temple-agencies-operating-the-service)
- [7.6. Support](#76-support)
  - [7.6.1. Nature of the Support Accompanying the Service](#761-nature-of-the-support-accompanying-the-service)
  - [7.6.2. Requesting Technical Support Service](#762-requesting-technical-support-service)
  - [7.6.3. Incident Management Process](#763-incident-management-process)
  - [7.6.4. Treatment Prioritization Process](#764-treatment-prioritization-process)
```
    - [7.6.5. Language and localization of the support service](#765-language-and-localization-of-the-support-service)
- [8. Commitments and service levels](#8-commitments-and-service-levels)
  - [8.1. Infrastructure availability commitments](#81-infrastructure-availability-commitments)
  - [8.2. SPONSOR interface availability commitment](#82-sponsor-interface-availability-commitment)
  - [8.3. Support availability commitment](#83-support-availability-commitment)
  - [8.4. S3 object storage availability commitment](#84-s3-object-storage-availability-commitment)
  - [8.5. Clarification regarding the backup commitment](#85-clarification-regarding-the-backup-commitment)
- [9. Organization of the contractual relationship](#9-organization-of-the-contractual-relationship)
  - [9.1. Responsibilities of the Provider](#91-responsibilities-of-the-provider)

  - [9.2. Limitation of the Provider's Responsibilities](#92-limitation-of-the-providers-responsibilities)
  - [9.3. Access Limitation](#93-access-limitation)
  - [9.4. Responsibilities of Third Parties Involved in the Provision of the Secure Temple Service](#94-responsibilities-of-third-parties-involved-in-the-provision-of-the-secure-temple-service)
  - [9.5. Responsibilities and Obligations of the CLIENT](#95-responsibilities-and-obligations-of-the-client)
  - [9.6. Rights of the CLIENT](#96-rights-of-the-client)
  - [9.7. Data Erasure at the End of the Contract](#97-data-erasure-at-the-end-of-the-contract)
- [10. Lifecycle of this Service Agreement](#10-lifecycle-of-this-service-agreement)
  - [10.1. Effective Date of the Service Agreement](#101-effective-date-of-the-service-agreement)
  - [10.2. Updates to the Service Agreement](#102-updates-to-the-service-agreement)
    - [10.2.1. Changes Triggered by the SPONSOR](#1021-changes-triggered-by-the-sponsor)
    - [10.2.2. Changes Triggered by the Provider](#1022-changes-triggered-by-the-provider)
  - [10.3. Reversibility](#103-reversibility)
- [11. Availability, Continuity, and Service Restoration](#11-availability-continuity-and-service-restoration)
  - [11.1. Incident and Outage Management](#111-incident-and-outage-management)
    - [11.1.1. Incidents](#1111-incidents)
      - [11.1.1.1. Types of Incidents Covered Under This Service Agreement](#11111-types-of-incidents-covered-under-this-service-agreement)
      - [11.1.1.2. Incident Handling](#11112-incident-handling)
      - [11.1.1.3. Notification Level for Security Incidents](#11113-notification-level-for-security-incidents)
  - [11.2. Service Maintenance](#112-service-maintenance)
    - [11.2.1. Nature of maintenance](#1121-nature-of-maintenance)
    - [11.2.2. Remote access by Cloud Temple on the SPONSOR's perimeter](#1122-remote-access-by-cloud-temple-on-the-sponsor's-perimeter)
    - [11.2.3. Remote access by third parties involved in service delivery on the SPONSOR's perimeter](#1123-remote-access-by-third-parties-involved-in-service-delivery-on-the-sponsor's-perimeter)
- [12. Data deletion procedure at the end of the Contract](#12-data-deletion-procedure-at-the-end-of-the-contract)
- [13. Applicable law](#13-applicable-law)
  - [13.1. In general](#131-in-general)
  - [13.2. Compliance with applicable laws and regulations](#132-compliance-with-applicable-laws-and-regulations)
  - [13.3. GDPR](#133-gdpr)
  - [13.4. Protection against non-European law](#134-protection-against-non-european-law)
- [14. SIGNATURES](#14-signatures)
----------------------------------------------------------------------------------


# 3. Preliminary and Glossary

## 3.1. Preliminary

This document formalizes the Service Agreement associated with the IaaS service qualified by SecNumCloud under the name "Secure Temple".

"This service agreement complements and is supplementary to the general sales and usage conditions of the Provider. It is understood that the contractual documents are interpreted consistently with each other. In case of contradiction or divergence between the terms of the contractual documents, the documents will prevail over each other in the following order:

1. General Sales and Usage Conditions (CGVU)
2. SecNumCloud IaaS Service Agreement
3. SecNumCloud PaaS Service Agreement
4. Specific special agreement
5. Security Assurance Plan (PAS)
6. Specific Usage Conditions (CPU)

## 3.2. Glossary
In this Service Agreement, the **SPONSOR**, the **Provider**, and the **Parties** are identified in the Contract to which this Service Agreement is annexed.

The expressions used in this Service Agreement will be interpreted according to the definitions given below:

-   **Change:** Any addition, modification, or deletion affecting the Service, having been authorized, planned, or managed.

-   **Standard Change:** Change subject to a procedure, the deployment methods and the impacts (including financial) of which are known and accepted in advance by the Parties. It is then integrated into the standard change catalog and may, in some cases, have an OLA and an SLA.
-   **Contract:** refers to the contract subscribed by the CLIENT with the Provider to enable the CLIENT to benefit from the Service, to which this Service Agreement is annexed.

-   ***Service Agreement:** This document, established within the framework of a specific contract or the General Terms and Conditions of Sale and Use (GTCU), in compliance with the requirements of the SecNumCloud Reference Framework.

-   **Service Request:** request from the CLIENT to the Provider within the framework of the Service, encompassing operations that cannot be carried out by the CLIENT from the CLIENT interface and support requests within the framework of the Service. Service requests are limited to those provided for under the Contract or this Service Agreement.

-   **Availability:** Ability to ensure the availability and maintenance of optimal Service performance, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).
-   **Technical Data**: Includes all data handled to deliver the Service, notably the identity of the beneficiaries and administrators of the technical infrastructure, technical infrastructure logs, access configuration, directory, certificates...

-   **Event**: An "event" is any detectable or identifiable occurrence that can be significant for the management of the Service.

-   **Hypervisor**: Operating system that allows the execution of virtual machines on a compute blade.

-   **Incident**: Any unexpected event that disrupts the normal functioning of the Service or compromises data security.

-   **Security Incident**: Any event within the scope of the Service:

    -   Of intentionally malicious nature;
    -   Of accidental nature compromising the integrity, confidentiality, or traceability of the Service or the SPONSOR's data;
-   Compromising existing security measures.
    Non-malicious Availability breaches are not considered a Security Incident (hardware failure, bug, malfunction, natural disaster...).

-   **SPONSOR Interface:** Administration interface of the Service provided by the Provider to the SPONSOR, comprising a web administration console and an API.

-   **Production Deployment:** administrative actions for implementing the Change when it is approved (the change, in the ITIL sense, only concerns the management of the change and not its implementation/concretization).

-   **Problem:** cause of one or more recurring Incidents, cause of a potential Incident (risk situation).

-   **Region:** refers to a geographically defined set of cloud availability zones, providing networking services,
    computing and storage to optimize latency, performance, and local regulatory compliance.

-   **Service:** refers to the SecNumCloud qualified IaaS service "Secure Temple," provided to the CLIENT by the Provider from technical infrastructures maintained by the Provider, as described in the "Service Description" section of this Service Agreement.

-   **Secure Temple:** refers to the SecNumCloud qualified IaaS service, offered by the company Cloud Temple, as defined in the certificate available on the ANSSI website and provided in the annex of this Service Agreement.

-   **Incident:** refers to a serious event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected Party.
-   **Supervision:** Monitoring of an Information System or a Service, involving the collection of various data such as metrics and alarms. This activity is limited to observation and tracking without directly intervening on the monitored elements, a prerogative that belongs to Administration operations.

-   **Tenant:** An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining the independence and security of data and applications.

-   **Zone de Disponibilité (AZ) (Availability zone):** A specific and isolated section of the cloud computing infrastructure designed to ensure high availability and resilience of services through geographical distribution of resources.

# 4. Acronyms

  | **Acronym** | **Definition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Change Advisory Committee                                       |
  | **CMDB**     | Configuration Management Database -- Configuration Management Database                   |
  | **COPIL**    | Steering Committee                                                                       |
  | **COSTRAT**  | Strategic Committee                                                                      |
  | **COPROJ**   | Project Committee                                                                        |
  | **DB**       | Database (base de données)                                                               |
  | **DRP**      | Disaster Recovery Plan (DRP) (Business Continuity Plan)                                  |
  | **GTE**      | Escalation Time Guarantee                                                                |
```markdown
  | **GTI**      | Guarantee of Intervention Time                                                          |
  | **GTR**      | Guarantee of Resolution Time                                                            |
  | **ITIL**     | Information Technology Infrastructure Library - Best practices for IT management        |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Operational Condition Maintenance                                                       |
  | **MOA**      | Project Owner                                                                           |
  | **MOE**      | Project Management                                                                      |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system                                                                        |
```
  | **PAQ**      | Quality Assurance Plan                                                                 |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Security Assurance Plan                                                                 |
  | **PASSI**    | Information Systems Security Audit Provider                                             |
  | **RFC**      | Request For Change -- Change Request                                                    |
  | **RGPD**     | General Data Protection Regulation (personal data)                                      |
  | **RPO**      | Recovery Point Objective -- Freshness of data restored in case of a Disaster            |
  | **RTO**      | Recovery Time Objective -- Service recovery time in case of a Disaster                  |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement                                                                  |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Third-Party Application Maintenance                                                    |
  | **UO**       | Unit of Work                                                                           |
  | **VABE**     | Validation of Suitability for Proper Maintainability                                    |
  | **VABF**     | Validation of Suitability for Proper Functioning                                         |
  | **VM**       | Virtual Machine                                                                         |
  | **VSR**      | Regular Service Validation                                                              |

# 5. Purpose of this Service Agreement

This Service Agreement establishes the terms and conditions under which the Provider agrees to deliver the Service to the CLIENT. Its purpose is to:

- Specify the performance requirements expected by the CLIENT in terms of the functionality and reliability of the Service;

- Outline the obligations of the Provider to meet the agreed service levels;

- Identify the regulatory standards specifically applicable to the delivered Service;

- Ensure consistency and integrity in the assessment of Service quality;

- Guarantee the excellence of the services provided, evaluated through quantitative performance indicators.

It is stipulated that, in the event that the Provider loses its SecNumCloud qualification, the Contract may be terminated.
plein droit, sans encourir de pénalités, par le COMMANDITAIRE. Dans une telle éventualité, le Prestataire s'engage à informer le COMMANDITAIRE
de cette déqualification par envoi d'une notification officielle, au moyen d'une lettre recommandée avec demande d'avis de réception.

Il convient de noter qu'une modification ou un ajustement de la qualification SecNumCloud ne sera pas interprété comme une révocation de
la qualification initiale.

# 6. Audit

Le Prestataire s'engage à permettre au COMMANDITAIRE, ou à tout auditeur tiers et non concurrent du Prestataire que ce dernier aurait désigné, de consulter l'ensemble des documents nécessaires à l'attestation du respect intégral des obligations liées à la conformité avec les dispositions de l'article 28 du Règlement Général sur la Protection des Données (RGPD), facilitant ainsi la réalisation
d'audits.

Par l'acceptation de la présente Convention de service, le COMMANDITAIRE confère son autorisation explicite à :

---

full right, without incurring penalties, by the SPONSOR. In such an event, the Provider commits to inform the SPONSOR
of this disqualification by sending an official notification via registered mail with acknowledgment of receipt.

It should be noted that a modification or adjustment of the SecNumCloud qualification will not be interpreted as a revocation of
the initial qualification.

# 6. Audit

The Provider agrees to allow the SPONSOR, or any third-party, non-competitor auditor designated by the former, to review all documents necessary to certify full compliance with the obligations related to adherence to the provisions of Article 28 of the General Data Protection Regulation (GDPR), thus facilitating the
conducting of audits.

By accepting this Service Agreement, the SPONSOR grants their explicit authorization to:
1. The National Agency for Information Systems Security (ANSSI) as well as the competent qualification entity to undertake the verification of the conformity of the Service and its information system with the SecNumCloud framework.
2. An information systems security audit provider, duly qualified PASSI and expressly designated by the Provider, to carry out security audits concerning the Service.

# 7. Service Description

## 7.1. Shared Responsibility Model

The Service provided by the Provider is characterized by the provision of the following services, which align with the shared responsibility principle presented in the SecNumCloud framework:

- The provision of compute resources;

- The availability of storage spaces;

- Access to network and internet connectivity services;

- The offer of a backup service dedicated to virtual machines.
The shared responsibility model applied between the Provider and the CLIENT within the framework of the Service is presented in §7.1.

It is understood that the Provider will leverage its expertise to perform the Services according to best professional practices and
in accordance with the requirements of the SecNumCloud framework.

The Service is SecNumCloud qualified (see certificate in Appendix).

## 7.2. Detailed presentation of the Service scope

| Compute               | CLIENT Tenant computing resource                                                                                    |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | CLIENT Tenant production data                                                                                       |
| Stockage objet S3     | Provision of a multi-AZ sovereign object storage infrastructure compatible with standard S3 APIs. |
| Sauvegarde            | Subject to subscription to the appropriate mass-storage service                                |
| Infrastructure réseau | Network resource of the SPONSORING Tenant                                                       |
| Console COMMANDITAIRE | The service allowing the SPONSOR to access and manage their IaaS service via the Shiva interface |
| Support               | The support service accompanying the previous services and only these (*)                        |

_(*) Within the scope of the qualified SNC Service and the responsibilities of the Provider in this matter_

### 7.2.1. Datacenter Infrastructures

The Service includes the provision, for each Availability Zone, of the services qualified below:
-   Datacenter site located in France for the FR Region, compliant with the latest technological standards, offering a resilience level equivalent to or higher than Tier 3 of the Uptime Institute;
-   Provision of technical rooms within datacenters dedicated to hosting essential technical equipment for service production, including computing, storage, network, cabling, and other necessary components;
-   Secure power supply ensured by two distinct electrical circuits, guaranteeing service continuity;
-   Provision of air conditioning services, adjusted to comply with the standards and recommendations of equipment manufacturers, in order to maintain an optimal environment for technical devices;
-   Continuous supervision and detailed metrology, allowing for precise monitoring and proactive management of the performance and security of the provided service.
The Provider ensures the provision of advanced fire detection and extinguishing services, designed to effectively identify and neutralize any fire outbreak within the facilities. These systems are essential to ensure the safety of equipment and data. They include high-precision smoke detectors and extinguishing devices that can act quickly without damaging IT equipment. This service is crucial to prevent fire risks, minimize potential damages, and ensure the continuity of operations.

The CLIENT is informed that all security procedures and measures in place, including annual failover tests on generators, are essential to ensure the continuity and integrity of the provided services. These practices are designed to
minimize the risk of outages and ensure optimal responsiveness in case of an incident. By accepting these conditions, the client acknowledges
the importance of these measures and commits to cooperating fully to facilitate their implementation. The CLIENT is also encouraged to
review the provided security recommendations and integrate them into their own risk management strategy.

### 7.2.2. Software Infrastructure for Service Management

The Provider supplies the CLIENT with the administration console and the necessary API for using the Service. The Provider also commits to maintaining this administration console and API in optimal operational condition and ensuring their continuous security.
This administration console and API are collectively referred to as the "CLIENT interface".

The Provider alerts the CLIENT to the fact that abnormal use of the CLIENT's interface, particularly in the event of overloading its order APIs (hammering), may trigger automatic security measures resulting in the blocking of access to the order APIs or the Service. It should be emphasized that this situation does not constitute unavailability of the Service but rather a protective action of the Service and the Provider's infrastructure; consequently, the CLIENT cannot consider it as downtime in its calculations.

Furthermore, the Provider specifies to the CLIENT that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the CLIENT submits identical requests at a higher frequency, their rejection cannot be interpreted as unavailability of the Service.

### 7.2.3. Compute Infrastructures
The Service includes the provision, in the availability zones subscribed by the SPONSOR, of the necessary equipment for executing workloads in the form of virtual machines.

This includes:

- The provision of technical chassis necessary for the proper functioning of the compute blades;
- The provision of compute blades in the quantities specified by the SPONSOR and distributed according to the availability zones of their choice. It should be noted that these compute blades are exclusively dedicated to the SPONSOR;
- The provision of hypervisor-type operating systems, as well as the guarantee of maintaining the operational and security condition of the software infrastructure necessary for the management of these operating systems. It is important to highlight that, even though the Service Provider is responsible for the operational maintenance and overall security of the Service, they do not possess specific knowledge regarding the SPONSOR's production environments or the requirements related to their workloads. Consequently, the responsibility for deciding on the update of the hypervisor compute blades' operating systems, an action that may require a reboot, rests entirely with the SPONSOR. This operation can be performed via the SPONSOR Interface.

The choice of the compute blade model, selected from the catalog offered by the Service Provider, is the responsibility of the SPONSOR.
### 7.2.4. Storage Infrastructure

The service includes the provision to the CLIENT of a shared SAN (Storage Area Network) storage infrastructure, offering various
performance levels. This service encompasses:

- The implementation and maintenance of the dedicated SAN network in operational and secure conditions;
- The installation and management of shared storage arrays among clients, including their operational and security maintenance, supervision, and metrology;
- The establishment of automated systems for the allocation of storage LUNs (Logical Unit Numbers) dedicated to the CLIENT's use, according to the volumes subscribed by the CLIENT.

### 7.2.5. Global Network Infrastructure

As part of the Service, the Provider deploys a global network facilitating the CLIENT's access to its hosted systems. This service includes:
- The provision, operational maintenance, and security upkeep of all fiber optic links interconnecting the various Availability Zones;

- The provision, operational maintenance, and security upkeep of the technical equipment necessary for the proper functioning of the network and the isolation of different clients.

The network interconnection of the SPONSORING TENANT to the Internet or private networks, and the network equipment, operator links, and other technical components enabling this interconnection, are not part of the Service scope. This network interconnection is implemented in accordance with the provisions set out in the Contract.

### 7.2.6. Backup Infrastructure

The Provider offers the SPONSOR a managed, dedicated, and integrated backup service aimed at protecting its
virtual machines. The Provider ensures the operational and security maintenance of this backup service.
The Provider guarantees that the backups of the CLIENT will be located outside the Availability Zone of the backed-up workloads, provided that the CLIENT has subscribed to the appropriate service units.

This backup service is limited to the backup of virtual machines and the topology configurations of the CLIENT's IaaS environment Tenants within the scope of the Service. The development and implementation of an adequate backup policy by the CLIENT depend on the subscription to specific service units. Therefore, it is the responsibility of the CLIENT to ensure the availability of the necessary technical resources from the Provider to implement their backup policy or to adjust it according to the available means.
Le Provider commits to notifying the CLIENT in case of capacity constraints and to providing consulting assistance for resource optimization. The Provider’s obligations will be limited to implementing the needs expressed by the CLIENT regarding backup policy, within the scope of the subscribed resources.

### 7.2.7. Implementation of Disaster Recovery or Business Continuity Solutions

The Provider supplies the CLIENT with all the necessary technical solutions to ensure an optimal distribution of its resources across various Availability Zones. The CLIENT is responsible for efficiently managing this resource distribution, for which it can utilize the Provider's available tools for this purpose.

## 7.3. Service Limitations in the Qualified IaaS Model

### 7.3.1. Managed Services in RUN

It is important to note that the following are excluded from the Service:
-   Hosting of the SPONSOR's physical components;

-   Network interconnection of the SPONSOR Tenant, to the Internet or private networks, including operator links;

-   Any type of managed service, or TMA;

-   Any assistance with virtual machines at the OS level and above within the Iaa stack of responsibilities, even if it is simple supervision.

That being said, it is absolutely not excluded that the SPONSOR may use such services from the Provider's MSP offer to operate in managed services mode on its Tenants. These services will then not be governed by this Service Agreement and its bipartite commitments/clauses.

### 7.3.2. Backup Configuration
By default, the Provider sets up the IaaS resources for the CLIENT by reserving resources and configuring deployments to use Availability Zones. It is the CLIENT's responsibility to select the Availability Zones through the CLIENT interface.

### 7.3.3. Backup Configuration

The backup service is limited to backing up virtual machines and topology configurations that represent the CLIENT's Tenants' IaaS environment within the Service.
The backup service and the completion of the SPONSOR's backup policy are subject to the subscription of storage space on the mass storage necessary to ensure the service. Therefore, it is the responsibility of the SPONSOR to subscribe to the necessary technical resources from the Provider to implement the backup policy on its IT perimeter or to adjust the backup policy to the resources deployed. The Provider undertakes to inform the SPONSOR in the event of a technical capacity limit.

The Provider will implement the necessary technical and human resources for the backup of the hosted system within the limits of the resources subscribed to by the SPONSOR.
Furthermore, in cases where the Provider does not support certain scopes, it is the responsibility of the CLIENT to define its own backup strategy and configure the VM backups themselves, or to make a Service request to the Provider so that the backup configurations for physical servers can be set up if the CLIENT has a managed service contract allowing the Provider to act through the CLIENT interface, which is the administration console made available under this Service Agreement and has features for configuring backups.

Moreover, this service will only be committed to translating via the CLIENT interface the configuration clearly specified by the CLIENT.
For reasons of flexibility in the Provider's offering, the CLIENT has the option to associate a no-backup policy on some of its VMs. In this case, it is the CLIENT's responsibility to assume this choice. The Provider will not back up the VMs associated with the "no backup" policy. The Provider warns the CLIENT that choosing the "no backup" policy or opting for manual backups exposes the CLIENT to the risk of permanent data loss in case of an Incident on the lower layers or layers under its responsibility in the IaaS model. In such an event, it will be impossible to hold the Provider responsible for restoring the data as there will be nothing to restore. The Provider recommends always backing up the VMs.
Pour tout sujet concernant l'OS installé sur une machine virtuelle et tout logiciel ou programme exécuté « par-dessus l'OS », il est de la responsabilité du CLIENT de réaliser les opérations d'administration et de supervision au sein de l'Union Européenne s'il souhaite garantir que toute la verticalité des couches du SI soit opérée et gérée depuis l'Union Européenne. Les opérations d'administration hors du périmètre de responsabilité du Prestataire dans le cadre de la présente Convention de service sont indiquées dans la section « Modèle de responsabilités partagées » de la présente Convention de Service.

## 7.4. Implementation of the Service

### 7.4.1. Technical Requirements

For the implementation of the Service, the CLIENT acknowledges that he/she will need to:

- Operate with VMware-type virtualization in the versions supported by the publisher and provided by the Provider as part of the Service;

- Use the backup tool through the Provider;
-   Declare fixed IPs from which the Provider will be authorized to access the SPONSOR interface (Whitelist filtering). Changes to this IP list must be made via Service Requests (list not manageable from the Service administration interface).

## 7.5. Service Location in France

It is specified that none of the operations and physical components involved in the provision of the Service, which is the subject of this Service Agreement, are located outside the European Union.

This includes notably the support, operational supervision, and security supervision (SOC) of the technical infrastructure delivering the Service. As a result, all storage, administration tasks, supervision, and processing are carried out in France.

### 7.5.1. Location of Datacenters Hosting the Service
In the absence of operations by the Provider's employees and agencies, all production operations (including data storage and processing) and technical components delivering the Service are located in Datacenters based in France.

### 7.5.2. Location of Cloud Temple agencies operating the service

The Cloud Temple employees involved in the scope of the Service operate from Cloud Temple agencies all located exclusively in France. These agencies are situated in France, in Tours, Lyon, Caen, and Paris La Défense.

The CLIENT is informed of the possibility for Cloud Temple employees to work remotely. However, the Provider guarantees the same level of security concerning remote access, particularly regarding VPN access. These remote accesses are implemented in accordance with the requirements of the SecNumCloud framework.

## 7.6. Support

### 7.6.1. Nature of the support accompanying the service
The Provider offers a technical support service aimed at assisting the CLIENT in managing, troubleshooting, and optimizing their deployed resources. This service covers a wide range of activities, from initial service setup assistance to advanced technical support for specific issues.

Here is a description of the characteristics and functionalities of the support service:

-   Assistance with the initial implementation of Service usage;
-   Assistance with incident resolution;
-   Assistance with problem resolution;
-   Monitoring and advising on the optimization of the technical foundation.
As part of the support service, the Provider does not replace the CLIENT in the use of the Service. The CLIENT remains fully responsible for the configuration, operation of its VMs and Tenants, and the management of all elements (including data and applications) that it has stored or installed on the Provider's infrastructure. The technical support service is provided in accordance with the General Terms and Conditions of Sale and Use, with the Provider being held to an obligation of means.

The CLIENT commits to using the technical support service reasonably, refraining from requesting services not subscribed to from the Provider and involving the Provider's teams with its own clients or third parties not included in the Contract. The Provider reserves the right to reject any service request that does not meet these criteria.
The level of support engagement is contingent upon the subscription to the associated support work units.

### 7.6.2. Requesting Technical Support Service

Technical support can be accessed through a ticketing system via the CLIENT console and is available during normal office hours excluding public holidays (8 AM - 6 PM; Monday -- Friday; French calendar and hours). For emergencies occurring outside normal working hours, particularly incidents significantly affecting production, the on-call service can be reached via a number provided to the CLIENT during the Service initiation.

For each request or Incident, it is imperative to generate a ticket with the Provider's support. The initiation of this ticket, including all necessary information, is essential and marks the beginning of the evaluation of the Provider's commitments.
As soon as the Provider receives a request or notification of an Incident, either through the management console or following a phone call, a ticket is automatically created. When reporting an Incident, it is essential that the CLIENT provides the provider with as many details as possible about the encountered problem. This step is crucial to enable proper evaluation of the situation, its prioritization, and an effective diagnosis.

The Client then receives a confirmation email, indicating the creation of the ticket and its unique number. The CLIENT can check the status and history of their requests and Incident reports directly from the management console.

### 7.6.3. Incident Management Process
When declaring an Incident, the service provider's technical support team initiates an investigation to identify the cause of the problem and establish a diagnosis. The Client must actively collaborate with the Provider by providing all necessary information and performing the required tests. The Provider may access the Client's Service to diagnose the Incident.

If the Provider's Services are deemed functional and the Incident is not attributable to them, the Client will be informed. At the Client's request, the Provider can offer Professional Services to identify the origin of the problem, billable upon prior agreement in 30-minute increments.
In the event that the Incident is the responsibility of the Provider or one of its subcontractors, the latter completes the diagnosis and begins the restoration of the Service at no additional cost. The diagnosis is based on the exchanges between the Parties and the data from the Provider, these elements being considered conclusive by agreement of the Parties.

### 7.6.4. Priority Processing Procedures

The determination of the priority level of a case is based on a matrix analysis that assesses the impact of the Incident and its degree of
criticality:

-   Impact levels are defined as follows:

| Impact Level   | Description                                                                                                           |
| ---------------| ----------------------------------------------------------------------------------------------------------------------|

| Impact I1       | The Provider's services are interrupted                                                                     |
| Impact I2       | The Provider's services are degraded                                                                     |
| Impact I3       | The Provider's services are currently stable but show signs of potential long-term decline                |

-   The levels of Criticality are defined as follows:

| Criticality Level  | Description                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Criticality C1     | The Provider's services are deteriorating at a concerning rate                                          |
| Criticité C2        | The Service Provider's services progressively deteriorate over time                          |
| Criticité C3        | The Service Provider's services present one or more inconveniences without significant consequence |

- Based on an in-depth analysis of the situation, taking into account the elements determining the Impact and Criticality, a priority is assigned to the ticket according to the decision matrix below:

| Impact Level <br/> \ Criticality Level       | Impact I1       | Impact I2       | Impact I3       |
| -------------------------------------------- | --------------- | --------------- | --------------- |
| Criticité C1                                 | Priority **P1** | Priority **P2** | Priority **P3** |
| Criticité C2                                 | Priority **P2** | Priority **P3** | Priority **P4** |
| Criticité C3                                 | Priority **P3** | Priority **P4** | Priority **P5** |
Les engagements de niveau de service correspondant à chaque niveau de priorité sont détaillés dans le chapitre suivant.

### 7.6.5. Language and Localization of the Support Service

Support is provided by the Provider to the CLIENT at a minimum in French. Support may also be provided in English.

The Provider's support service operations for the qualified SecNumCloud infrastructure service offering are located within the European Union.

# 8. Commitments and Service Levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, ensuring their optimal operation.
The unavailability of a service, subject to a performance indicator, is recognized as soon as it is identified by the Provider's monitoring system, or following a notification by a user of the CLIENT. The start of the unavailability is set at the earliest moment between these two events, to ensure an accurate and fair count of the downtime.

The end of the unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or by user feedback, thus ensuring an effective resumption of operations and a faithful measurement of the duration of the interruption.

## 8.1. Infrastructure Availability Commitments
The Provider commits to maintaining a level of availability and performance compliant with the standards defined for each specified period. The Service Level Agreements (SLAs) apply provided that the CLIENT implements its systems across at least two of the Availability Zones present in the concerned Region.

In the absence of compliance with these conditions by the CLIENT,
they will be unable to claim the application of the concerned SLAs, 
which are specifically identified by an asterisk (*). Access to the SLAs is available through the CLIENT interface. The measurements are calculated monthly:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Compute power availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.

- **SLA 2 (*) : IC-INFRA_SNC-02** – Storage availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 3     : IC-INFRA_SNC-03** – Backup reliability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Network infrastructure availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 5     : IC-INFRA_SNC-05** – Internet access: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.

_**Remarks**_ : 

- *In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of this attack and protect its infrastructure. Specifically, if an IP address belonging to the CLIENT is targeted, the Provider may employ the technique of blackholing*
via the BGP community to block all traffic to the targeted IP address upstream at its providers, in order to protect the SPONSOR's resources as well as those of other SPONSORs 
and the Provider's infrastructure. The Provider strongly encourages the SPONSOR to adopt similar measures, such as using commercially available web application firewall software, 
and to carefully configure its security groups via the command API.*

- *The Provider emphasizes the need for the SPONSOR to minimize open flows, particularly by avoiding making administration ports 
**SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 8.2. Availability Commitment of the SPONSOR Interface
-   SLA 6: IC-INFRA_SNC-06 -- Access to the Service's administration console: a guaranteed availability of 97%, ensured continuously, 24 hours a day, 7 days a week.
-   SLA 7: IC-INFRA_SNC-07 -- Access to the Service's management APIs: an availability of 99.9%, calculated on a 24/7 basis.

## 8.3. Support Availability Commitment 

- **SLA 8      : IC-INFRA_SNC-08** – Here are the performance commitments of the Provider's technical support for incidents, excluding scheduled maintenance:

| Priority        | Intervention Time Guarantee (ITG)    | Performance Objective |
| --------------- | ------------------------------------ | --------------------- |
| Priority **P1** | 30min                                | 95%                   |
| Priority **P2** | 2h                                   | 90%                   |
| Priority **P3** | 4h                                   | 90%                   |

| Priority **P4** | 24h                                    | 85%                     |
| Priority **P5** | 48h                                    | 85%                     |

- **SLA 9      : IC-INFRA_SNC-09** – Here are the performance commitments of the Provider's technical support for service requests:

|                    | Response Time Guarantee (RTG)         | Performance Objective   |
| ------------------ | -------------------------------------- | ----------------------- |
| Service Request    | 4h                                     | 90%                     |

*Note:*

- *The time for the Response Time Guarantee (RTG) is calculated based on the difference between the moment the CLIENT opens the ticket and the first intervention by the Provider's support.*
- *Incident investigations for the CLIENT will not include remote intervention on the CLIENT's hosted servers. This assistance will be limited to explaining the available metrics related to the CLIENT's environment to facilitate the understanding of the incidents or performance issues encountered. Based on the results of this analysis, recommendations may be suggested.*

## 8.4. S3 Object Storage Availability Commitment

- **SLA 10 : IC-INFRA_SNC-10** – Here are the availability commitments for S3 object storage:

| Indicator        | Commitment                                          | Availability Objective    |
| ---------------- | --------------------------------------------------- | ------------------------- |
| IC-INFRA-SNC-10.1| Durability of an object’s storage in a region       | 99.9999999% / year        |
| IC-INFRA-SNC-10.2 | S3 Object Storage API Availability                | 99.99%                    |
| IC-INFRA-SNC-10.3 | Maximum access latency to an object in a region   | 150 ms                    |

Remarks:

- The Object Storage Service is specifically designed for object storage and must be used solely for this purpose, **categorically excluding its use in block mode**. Employing block mode through workarounds, including for example the use of *"FUSE" in a Linux environment*, constitutes a violation of the stated terms of use. No incident, malfunction, or damage resulting from this non-compliant usage will be covered by the Service Level Agreements (SLA) defined in this service agreement.
- The durability guarantee is conditioned upon the use of the services in accordance with current best practices and standards, and explicitly excludes any modification of data, whether intentional or accidental, resulting from actions undertaken by the SPONSOR.

## 8.5. Clarification regarding the backup commitment

The backup strategy deployed for the SPONSOR is conditioned by the subscription to the appropriate work units.

The Provider commits to providing a backup solution that will enable the SPONSOR to apply the desired backup policies.

It is specified that the Provider's scope is limited to providing a backup service, and it is the responsibility of the SPONSOR to supervise via the SPONSOR interface the proper execution of the associated policies.
The management of storage capacities for the storage space dedicated to backups remains the responsibility and charge of the CLIENT. The Provider makes the usage rate available via the console.

*Example: Non-backup of a virtual machine:*

*The CLIENT is responsible for verifying/supervising the proper execution of backup policies. If the CLIENT notices that a virtual machine is not backed up, it is their responsibility to investigate the cause. The CLIENT may request support from the Provider according to the subscribed support level to receive assistance.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9** will be exclusively applicable in case of a backup service Incident.

# 9. Organization of the Contractual Relationship


## 9.1. Provider Responsibilities

The Provider undertakes:
- to adequately inform the SPONSOR (e.g., in case of technical resource capacity limitations delivering the Service).

- to formally inform the SPONSOR within one month of any legal, organizational, or technical changes that may impact the Service's compliance with protection requirements against extra-European laws (19.6 of the SNC v3.2 standard).

- to provide the SPONSOR with interfaces and service interfaces that are in French at a minimum.

- to study and take into account the specific sectoral requirements related to the types of information entrusted by the SPONSOR as part of the service implementation and within the limits of the Provider's responsibilities.

- not to disclose any information related to the service to third parties, except with the formal and written authorization of the SPONSOR.
- to provide all necessary information for compliance audits in accordance with the provisions of Article 28 of the GDPR.

- to report to the CLIENT, through this Service Agreement, any Security Incident impacting the Service or the CLIENT's use of the Service (including CLIENT data).

- to authorize a qualified information systems security audit provider (PASSI), mandated by the Service Provider, to audit the service as well as its information system, in accordance with the Service Provider's SecNumCloud control plan. Additionally, the Service Provider undertakes to provide all necessary information to carry out compliance audits with the provisions of Article 28 of the GDPR, conducted by the client or a mandated third party.
- to provide, as a subcontractor, in accordance with Article 28 of the General Data Protection Regulation (GDPR), assistance and advice to the CLIENT by alerting them whenever an instruction issued by the latter is likely to constitute a violation of data protection rules.

- to notify in writing, when a project impacts or is likely to impact the security level of the Service, the CLIENT of potential impacts, mitigation measures implemented, as well as the residual risks that concern it.

- to document and implement all procedures necessary to comply with legal, regulatory, and contractual requirements applicable to the service, as well as the CLIENT's specific security needs, defined by the latter and provided for in the Contract. Upon the CLIENT's request, the Documentation module of the CLIENT interface will allow secure sharing of these documents.
- to provide, upon request from the SPONSOR, elements of risk assessment related to the submission of SPONSOR's data to the jurisdiction of a non-European Union state.


Upon formal and written request from the SPONSOR, the Service Provider commits to:

1. Make accessible to the SPONSOR the internal regulations and the Service Provider's code of ethics;

2. Make accessible to the SPONSOR the sanctions incurred in case of violation of the security policy;

3. Provide the SPONSOR with all events concerning them in the Service logging elements;

4. At the end of the Contract, the Service Provider commits to delete the data and Technical Data related to the SPONSOR, in accordance with the "data erasure procedure at the end of the Contract" described in this Service Agreement.
5. to ensure the secure erasure of all the SPONSOR's data by complete overwriting of any medium that has hosted its data as part of the Service.

6. to provide the complete list of third parties authorized to access the infrastructures containing the data.
The Provider will maintain and make available to the CLIENT a comprehensive list of third parties authorized to access the infrastructures containing the data, informing the latter of any changes related to subcontractors. The Provider and all its subsidiaries commit to adhering to the fundamental values of the European Union, namely human dignity, freedom, democracy, equality, the rule of law, and respect for human rights. The service provided by the Provider complies with the legislation in force regarding fundamental rights and the values of the European Union concerning the respect of human dignity, freedom, equality, democracy, and the rule of law.

## 9.2. Limitation of the Provider's Responsibilities

Due to all the definitions and conditions mentioned in this Service Agreement, the Provider's responsibilities are limited as follows:

1. The shared responsibility model, described in the "Shared Responsibility Model" section of this Service Agreement, effectively limits the Provider's involvement to layers of operation "above" the provisioning of compute, network, storage, and backup resources. This specifically excludes, but is not limited to:

    -   The management of what is installed on virtual machines (OS, middleware, applications, etc.);

    -   Keeping OS and other software updated as installed by the CLIENT on its machines in its Tenants;

    -   The security of programs, software, and applications installed on the virtual machines;

    -   The updating of virtual machines;

    -   Application-level data backups.

2. The Provider cannot commit to backing up the CLIENT's Tenants without the CLIENT having first subscribed to the appropriate service units.
3. The Provider cannot claim ownership of the data transmitted and generated by the CUSTOMER. Indeed, these are the property of the CUSTOMER.

4. The Provider emphasizes that under no circumstances can it exploit the data transmitted and generated by the CUSTOMER without the prior validation of the latter.

5. The Provider disclaims all liability for components physically hosted and managed by the Provider but which are the direct property of the CUSTOMER or a third party with whom the CUSTOMER has contracted. The hosting of physical customer components is not part of the Service and is therefore outside the scope of this Service Agreement. It is the CUSTOMER's responsibility to assess the level of adherence or dependency that these components introduce with respect to the SecNumCloud qualified IaaS Service.

## 9.3. Limitation of Access
As part of the Service, the Service Provider is strictly prohibited from accessing the Tenants belonging to the CLIENT without prior authorization. It is the responsibility of the CLIENT to provide the necessary access to the Service Provider's personnel, according to the specific needs of hosting and, if applicable, professional support services if this option has been chosen by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for needs related to the agreed service provision, thereby ensuring secure management in accordance with the terms of the agreement.

Remote access by third parties involved in the Service Provider's service provision is strictly prohibited. In the event that a specific technical requirement necessitates such access, it can only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining their written consent.

This measure ensures the control and security of the SPONSOR's data, by making sure that any exception to the rule is duly authorized and documented.

## 9.4. Responsibilities of Third Parties Involved in Providing the Secure Temple Service

The Provider manages the list of partner third parties involved in providing the Service. These third parties are the publishers, providers (of the Provider) and other suppliers involved in providing the Service. The Provider applies the following measures to these third parties:

- The Provider requires third parties involved in the implementation of the service, in their contribution to the Service, to have a security level at least equivalent to the one it commits to maintain in its own security policy applicable to the Secure Temple service;
-   The Provider contracts, with each of the third parties participating in the implementation of the service, audit clauses allowing a qualification body to verify that these third parties comply with legal requirements and SNC requirements, enabling the Provider to meet its commitments in this Service Agreement.

-   The Provider implements a procedure to regularly control the measures put in place by the third parties participating in the implementation of the service to meet the requirements, allowing the Provider to fulfill its commitments in this Service Agreement.

-   The Provider implements a procedure to monitor changes made by the third parties participating in the implementation of the service that may affect the security level of the service's information system.

## 9.5. Responsibilities and obligations of the CLIENT
As a reminder, the Service Provider provides the CLIENT with a virtual machine execution platform, and the configuration of these machines is the responsibility of the CLIENT. Each virtual machine cannot operate without an associated backup policy. The Service Provider defines automatic backup policies through its interfaces. However, it is the CLIENT's responsibility to activate these backup policies and thus to activate the virtual machines.

The CLIENT authorizes ANSSI and the SNC certification body to audit the Service and the technical infrastructure delivering the Service.

## 9.6. CLIENT Rights

At any time during the contractual relationship, the CLIENT may file a complaint regarding the qualified service with ANSSI.

At any time, the CLIENT may request the Service Provider to make available its internal regulations and code of ethics.

## 9.7. Data Erasure at the End of the Contract
À la fin du contrat, qu'il arrive à échéance ou qu'il soit résilié pour quelque raison que ce soit, le Service Provider agrees to securely delete all data of the CLIENT, including technical data. The Service Provider will ensure to provide the CLIENT with a formal notice, respecting a period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To attest to this deletion, the Service Provider will provide the CLIENT with a certificate confirming the deletion of the data.

# 10. Lifecycle of this Service Agreement

## 10.1. Effective Date of the Service Agreement

This Service Agreement becomes effective on the day it is signed by the CLIENT.
The collection, manipulation, storage, and processing of data carried out in the context of pre-sales, implementation, and Service termination, are done in compliance with the applicable legislation.

## 10.2. Service Agreement Changes

Modifications or additions to this Service Agreement arise exclusively from requests made by the designated governance bodies. These change proposals will be reviewed by the Parties who are authorized to determine the aspects requiring formal written documentation.

It is agreed that any change to the Service Agreement, once validated, which alters the initially established financial conditions, will require the establishment and signing of an amendment to the current Contract.

Factors that may lead to a revision of this Service Agreement include, but are not limited to:

-   Changes in the technical infrastructure delivering the IaaS Service;

-   Adjustments made to the services deployed by the Provider to deliver the Service;
-   Variations in commitments made and applicable sanctions;
-   Organizational reconfigurations within the CLIENT or the Provider;
-   Expansion or reduction of the Service scope.

The management of versions and revisions of the Service Agreement is documented in the preamble of the document for ease of tracking.

### 10.2.1. Changes Triggered by the CLIENT

Changes to the Service Agreement may originate, among other things, from:

-   An evolution of the infrastructure managed by the Provider;

-   A modification of the services implemented by the Provider;

-   A modification of the service level commitments by the Provider.

### 10.2.2. Changes Triggered by the Provider
Any modification of the Service Agreement is subject to acceptance by the SPONSOR. It is understood that any validated modification or addition altering the financial elements of the Contract may involve the signing of an amendment to it.

## 10.3. Reversibility

Furthermore, Cloud Temple commits to allowing a review of the present Service Agreement (including, notably, its termination) without penalty for the SPONSOR in the event of loss of the SecNumCloud qualification.
Services do not include any obligation of reversibility (i.e., assistance to the Client to migrate their system to another Provider) except for providing the CLIENT with the interface from the Provider that allows the CLIENT to back up and retrieve their data, including, notably, configuration data of their information system through one of the following technical modalities, chosen by the CLIENT: making files available in one or more documented and usable formats outside the service provided by the Provider or through the implementation of technical interfaces allowing access to data according to a documented and usable schema (API).
The CLIENT, sole master of their system, must do everything to facilitate this operation as needed (which implies, in particular, that they must establish rigorous documentation for this purpose) and the development of reversibility plans. In the event that the CLIENT requires an additional service, the Provider can offer an advisory mission in this regard under a specific contract to be negotiated.

# 11. Availability, Continuity, and Service Restoration

## 11.1. Incident and Interruption Management

### 11.1.1. Incidents

#### 11.1.1.1. Types of Incidents Handled under this Service Agreement

-   Disasters

-   Breakdowns and failures

-   Security incidents:

-   Impacting service availability

-   Impacting the confidentiality of the service

-   Impacting the integrity of the service

#### 11.1.1.2. Incident Handling

-   Deadlines

-   Post-incident actions
-   Archive documents detailing security incidents.

-   Personal data breach notification (online): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Security Incident Notification Level

The CLIENT is responsible for choosing the severity levels of Security Incidents for which they wish to be informed, for example, through their formalization in an applicable SLA for the Service.

By default, the CLIENT is informed:

-   Of security incidents with impact (impacts I1 and I2 as per the impact scale defined in the prioritization process of the current Service Agreement);

-   Of personal data breaches for which the CLIENT is the data controller;

-   Of personal data breaches for which the Provider is the data controller and involves the CLIENT's personal data.
## 11.2. Service Maintenance

### 11.2.1. Nature of Maintenance

The maintenance provided consists of the implementation of:

-   The plan for maintaining the operational conditions of the Service to ensure good availability indicators as committed by the Provider above;

-   The BCP/DRP plan if subscribed by the CLIENT, triggered according to any incidents that may occur.

### 11.2.2. Remote Access by Cloud Temple within the CLIENT's Scope

The Provider is prohibited, within the framework of this Service Agreement, from any access to the Tenants and the CLIENT interface space.

It will be the responsibility of the CLIENT to provide the necessary access to the Provider's personnel. The CLIENT acknowledges that the access will be used within the framework of the hosting and ultimately the managed services (if subscribed by the CLIENT).

### 11.2.3. Remote Access by Third Parties Participating in Service Provision within the CLIENT's Scope


Aucun accès distant de tiers participant à la fourniture du Service n'est autorisé.

Si un besoin technique rendait ce cas de figure nécessaire, alors ce type d'accès ne serait réalisé qu'après notification du COMMANDITAIRE justification et obtention de son accord écrit.

# 12. Data Deletion Procedure at the End of the Contract

At the end of the Contract, whether the Contract has expired or for any other reason, the Service Provider will ensure the secure deletion of all data processed as part of the Service, including the technical data of the CLIENT. The Service Provider will give formal notice respecting a period of twenty-one (21) calendar days. The CLIENT's data will be deleted within a maximum period of thirty (30) days after the notification. The Service Provider will provide a data deletion certificate to the CLIENT.

# 13. Governing Law

## 13.1. General Provisions
The applicable law to which this Service Agreement is subject is French law.

## 13.2. Compliance with Applicable Laws and Regulations

The Service Provider commits to the following points:

-   Identifying the legal and regulatory constraints applicable within the framework of the Service;

-   Complying with the legal and regulatory constraints applicable to the data entrusted to the Service Provider;

-   Adhering to the Data Protection Act and GDPR;

-   Implementing means for protecting personal data;

-   Establishing a process for legal and regulatory monitoring;

-   Maintaining appropriate relationships or monitoring with sector authorities related to the nature of the data processed within the framework of the Services. This includes notably ANSSI, CERT-FR, and CNIL.

## 13.3. GDPR
Acting as a subcontractor within the meaning of Article 28 of the General Data Protection Regulation (GDPR), the Provider undertakes to:

- Ensure transparency and traceability;

- Appoint a DPO in charge of defining and implementing personal data protection measures;

- Provide assistance and advice to the CLIENT and alert them if an instruction from the latter constitutes a violation of personal data protection rules if the Provider has the means to identify it;

- Guarantee the security of processed data (due to SecNumCloud qualification).

## 13.4. Protection against non-European law
In case the Service Provider, within the framework of the Service, resorts to the services of a third-party company - including a subcontractor - having its statutory headquarters, central administration, or principal establishment within a non-European Union Member State or belonging to or being controlled by a third-party company domiciled outside the European Union, the Service Provider commits that this aforementioned third-party company will have no access to the data operated by the 'Secure Temple' service.

As a reminder, the data in question are those entrusted to the Service Provider by the CLIENT as well as all Technical Data including information about the CLIENTS.

For the purposes of this article, the concept of control is understood as mentioned in II of Article L233-3 of the Commercial Code.

# 14. SIGNATURES

Done at \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, on
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For Cloud Temple, the SERVICE PROVIDER
For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the CLIENT