---
title: IaaS Service Agreement
---
  
![Logo Cloud Temple](images/ct.png)

# 1. **IaaS SERVICE AGREEMENT**

| **Recipients:**                     | **SPONSOR**                                    |
| :---------------------------------- | :--------------------------------------------- |
| **Document Reference**              | CT.AM.JUR.ANX_Service Agreement_IaaS_v2.0      |
| **Your Contacts**                   | *First Name* *Last Name*                        |
|                                     | Account Manager                                 |
|                                     | email: *first.name*@cloud-temple.com            |
| **Last Update Date**                | 04/03/2024                                      |
| **Contractual Validation Date**     | Day DD YYYY                                     |

----------------------------------------------------------------------------------

| **Version** | **Date**    | **Action**                             | **Author**      |
| ----------- | ----------- | -------------------------------------- | --------------- |
| v0.1        | 06/07/2022  | Initial Draft                          | Lorena ALCALDE  |
| v0.2        | 09/14/2022  | Enrichment                             | Lorena ALCALDE  |
| v1.0        | 12/30/2022  | Indicator Integration                  | Lorena ALCALDE  |
| v1.1        | 01/23/2023  | Footer Modification                    | Lorena ALCALDE  |
| v1.2        | 05/22/2023  | Enrichment                             | Lorena ALCALDE  |
| v1.3        | 06/29/2023  | Enrichment                             | Lorena ALCALDE  |
| v1.4        | 11/06/2023  | Capital Modification and Enrichment    | Lorena ALCALDE  |
| v1.5        | 11/30/2023  | Enrichment                             | Lorena ALCALDE  |
| v1.6        | 03/21/2024  | Enrichment                             | Lorena ALCALDE  |
| v2.0        | 03/29/2024  | Compliance Adjustments SNC             | Nicolas ABRIOUX |
| v2.0        | 04/03/2024  | Publication                            | Lorena ALCALDE  |

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
  - [7.3. Service Limitations in Qualified IaaS Model](#73-service-limitations-in-qualified-iaas-model)
    - [7.3.1. Managed Services in RUN](#731-managed-services-in-run)
    - [7.3.2. Backup Configuration](#732-backup-configuration)
    - [7.3.3. Disaster Recovery Configuration](#733-disaster-recovery-configuration)
  - [7.4. Service Implementation](#74-service-implementation)
    - [7.4.1. Technical Prerequisites](#741-technical-prerequisites)
  - [7.5. Service Localization in France](#75-service-localization-in-france)
    - [7.5.1. Localization of Datacenters Hosting the Service](#751-localization-of-datacenters-hosting-the-service)
    - [7.5.2. Localization of Cloud Temple Agencies Operating the Service](#752-localization-of-cloud-temple-agencies-operating-the-service)
  - [7.6. Support](#76-support)
    - [7.6.1. Nature of Support Accompanying the Service](#761-nature-of-support-accompanying-the-service)
    - [7.6.2. Requesting Technical Support](#762-requesting-technical-support)
    - [7.6.3. Incident Management Process](#763-incident-management-process)
    - [7.6.4. Treatment Prioritization Process](#764-treatment-prioritization-process)
    - [7.6.5. Language and Localization of the Support Service](#765-language-and-localization-of-the-support-service)
- [8. Commitments and Service Levels](#8-commitments-and-service-levels)
  - [8.1. Infrastructure Availability Commitments](#81-infrastructure-availability-commitments)
  - [8.2. Availability Commitment of the SPONSOR Interface](#82-availability-commitment-of-the-sponsor-interface)
  - [8.3. Support Availability Commitment](#83-support-availability-commitment)
  - [8.4. Availability Commitment for S3 Object Storage](#84-availability-commitment-for-s3-object-storage)
  - [8.5. Backup Commitment Details](#85-backup-commitment-details)
- [9. Organization of the Contractual Relationship](#9-organization-of-the-contractual-relationship)
  - [9.1. Provider Responsibilities](#91-provider-responsibilities)
  - [9.2. Limitation of Provider Responsibilities](#92-limitation-of-provider-responsibilities)
  - [9.3. Access Limitation](#93-access-limitation)
  - [9.4. Responsibilities of Third Parties Participating in the Provision of the Secure Temple Service](#94-responsibilities-of-third-parties-participating-in-the-provision-of-the-secure-temple-service)
  - [9.5. SPONSOR Responsibilities and Obligations](#95-sponsor-responsibilities-and-obligations)
  - [9.6. SPONSOR Rights](#96-sponsor-rights)
  - [9.7. Data Deletion at End of Contract](#97-data-deletion-at-end-of-contract)
- [10. Service Agreement Lifecycle](#10-service-agreement-lifecycle)
  - [10.1. Service Agreement Effective Date](#101-service-agreement-effective-date)
  - [10.2. Service Agreement Evolutions](#102-service-agreement-evolutions)
    - [10.2.1. Evolutions Triggered by the SPONSOR](#1021-evolutions-triggered-by-the-sponsor)
    - [10.2.2. Evolutions Triggered by the Provider](#1022-evolutions-triggered-by-the-provider)
  - [10.3. Reversibility](#103-reversibility)
- [11. Service Availability, Continuity, and Restoration](#11-service-availability-continuity-and-restoration)
  - [11.1. Incident and Interruption Management](#111-incident-and-interruption-management)
    - [11.1.1. Incidents](#1111-incidents)
      - [11.1.1.1. Types of Incidents Covered by this Service Agreement](#11111-types-of-incidents-covered-by-this-service-agreement)
      - [11.1.1.2. Incident Handling](#11112-incident-handling)
      - [11.1.1.3. Security Incident Notification Levels](#11113-security-incident-notification-levels)
  - [11.2. Service Maintenance](#112-service-maintenance)
    - [11.2.1. Nature of Maintenance](#1121-nature-of-maintenance)
    - [11.2.2. Remote Access to Cloud Temple within the SPONSOR's Scope](#1122-remote-access-to-cloud-temple-within-the-sponsors-scope)
    - [11.2.3. Remote Access by Third Parties Participating in the Provision of the Service within the SPONSOR's Scope](#1123-remote-access-by-third-parties-participating-in-the-provision-of-the-service-within-the-sponsors-scope)
- [12. Data Deletion Procedure at End of Contract](#12-data-deletion-procedure-at-end-of-contract)
- [13. Applicable Law](#13-applicable-law)
  - [13.1. General Provisions](#131-general-provisions)
  - [13.2. Compliance with Applicable Laws and Regulations](#132-compliance-with-applicable-laws-and-regulations)
  - [13.3. GDPR](#133-gdpr)
  - [13.4. Protection Against Extra-European Law](#134-protection-against-extra-european-law)
- [14. SIGNATURES](#14-signatures)

----------------------------------------------------------------------------------

# 3. Preliminary and Glossary

## 3.1. Preliminary

This document formalizes the Service Agreement associated with the SecNumCloud qualified IaaS service under the name of “*Secure Temple*”.

\"This service agreement complements and is complementary to the general terms and conditions of sale and use of the Provider. It is
understood that the contractual documents are interpreted coherently among them. In case of contradiction or discrepancy between
the terms of the contractual documents, the documents will prevail over each other in the following order:

1. General Terms and Conditions of Sale and Use (GTCU)
2. SecNumCloud IaaS Service Agreement
3. SecNumCloud PaaS Service Agreement
4. Specific Custom Agreement
5. Security Assurance Plan (SAP)
6. Specific Terms of Use (STU)

## 3.2. Glossary

In this Service Agreement, the **SPONSOR**, the **Provider** and the **Parties** are identified in the Contract
to which this Service Agreement is annexed.

The expressions used in this Service Agreement will be interpreted according to the definitions given below:

- **Change:** Any addition, modification, or deletion impacting the Service, authorized, planned, or handled.


- **Changement standard :** Change subject to a procedure, the deployment modalities and impacts (including financial) of which are known and agreed upon in advance by the Parties. It is then integrated into the standard change catalog and may, in some cases, have an MTTR and MTTF.

- **Contract:** Refers to the contract subscribed by the PRINCIPAL with the Service Provider to enable the PRINCIPAL to benefit from the Service, to which this Service Agreement is annexed.

- **Service Agreement:** This document, established within the framework of a specific contract or the General Conditions of Sale and Use (GCSVU), and in compliance with the requirements of the SecNumCloud Reference.

- **Service request:** Request from the PRINCIPAL to the Service Provider within the framework of the Service, covering operations not executable by the PRINCIPAL from the PRINCIPAL interface and support requests within the framework of the Service. Service requests are limited to those provided for under the Contract or this Service Agreement.

- **Availability:** Ability to ensure the availability and maintain optimal performance of the Service, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).

- **Technical data:** Includes all data handled to deliver the Service, notably the identity of the beneficiaries and administrators of the technical infrastructure, technical infrastructure logs, access configurations, directory, certificates...

- **Event:** An "event" is any detectable or identifiable occurrence that may have significance for Service management.

- **Hypervisor:** Operating system enabling the execution of virtual machines on a compute blade.

- **Incident:** Any unforeseen event that disrupts the normal functioning of the Service or compromises the data security.

- **Security incident:** Any event within the scope of the Service:

  - Of intentionally malicious nature;
  - Of accidental nature affecting the integrity, confidentiality or traceability of the Service or PRINCIPAL's data;
  - Affecting existing security measures.
    Non-malicious origin availability breaches are not considered security incidents (hardware failure, bug, malfunction, natural disaster...).

- **PRINCIPAL Interface:** Service administration interface provided to the PRINCIPAL by the Service Provider, comprising a web administration console and an API.

- **Deployment to production:** Administration action(s) for implementing the Change when it is approved (change, in ITIL terms, only concerns change management and not its implementation/execution).

- **Problem:** Cause of one or more recurring Incidents, cause of a potential Incident (risk situation).

- **Region:** Refers to a geographically defined set of cloud availability zones, providing network, compute, and storage services to optimize latency, performance, and local regulatory compliance.

- **Service:** Refers to the IaaS service certified SecNumCloud "Secure Temple," delivered to the PRINCIPAL by the Service Provider from technical infrastructures maintained by the Service Provider, as described in the "Service Description" section of this Service Agreement.

- **Secure Temple:** Refers to the IaaS service certified SecNumCloud, offered by the company Cloud Temple, as defined in the certificate available on the ANSSI website and provided in the annex of this Service Agreement.

- **Disaster:** Refers to a serious event of natural or human origin, accidental or intentional, causing significant loss and damage to the affected Party.

- **Supervision:** Monitoring of an Information System or Service, involving the collection of various data such as measures and alarms. This activity is limited to observation and tracking, without directly intervening in the monitored elements, a prerogative belonging to Administration operations.

- **Tenant:** An isolated instance reserved for a user or group of users, sharing common infrastructure while maintaining the independence and security of data and applications.

- **Availability Zone (AZ):** A specific and isolated section of the cloud computing infrastructure, designed to ensure high availability and service resilience through the geographical distribution of resources.

# 4. Acronyms

  | **Acronym** | **Definition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Change Advisory Committee                                      |
  | **CMDB**     | Configuration Management Database -- Configuration Management Database                  |
  | **COPIL**    | Steering committee                                                                      |
  | **COSTRAT**  | Strategic committee                                                                     |
  | **COPROJ**   | Project Committee                                                                       |
  | **DB**       | Database                                                                               |
  | **DRP**      | Disaster Recovery Plan (DRP) (Disaster Recovery Plan)                                   |
  | **GTE**      | Escalation Time Guarantee                                                               |
  | **GTI**      | Intervention Time Guarantee                                                             |
  | **GTR**      | Resolution Time Guarantee                                                               |
  | **ITIL**     | Information Technology Infrastructure Library - Best practices for IT management        |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Maintaining Operational Condition                                                       |
  | **MOA**      | Project Ownership                                                                       |
  | **MOE**      | Project Management                                                                      |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system                                                                        |
  | **PAQ**      | Quality Assurance Plan                                                                  |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Security Assurance Plan                                                                 |
  | **PASSI**    | Information Systems Security Audit Provider                                             |
  | **RFC**      | Request For Change - Change request                                                     |
  | **GDPR**     | General Data Protection Regulation (personal data)                                      |
  | **RPO**      | Recovery Point Objective -- Data freshness restored in case of Disaster                 |
  | **RTO**      | Recovery Time Objective -- Service recovery time in case of Disaster                    |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Service level agreements                                     |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Third-party Application Maintenance                                                     |
  | **UO**       | Operating unit                                                                          |
  | **VABE**     | Validation of Exploitability                                                            |
  | **VABF**     | Validation of Proper Operation                                                          |
  | **VM**       | Virtual Machine                                                                         |
  | **VSR**      | Regular Service Validation                                                              |

# 5. Purpose of this Service Agreement

This Service Agreement sets forth the terms and conditions under which the Service Provider undertakes to deliver the Service to the
PRINCIPAL. Its purpose is to:

- Specify the performance requirements expected by the PRINCIPAL in terms of functionality and reliability of the Service;

- State the obligations of the Service Provider to meet the agreed service levels;

- Identify the regulatory standards specifically applicable to the delivered Service;

- Ensure consistency and integrity in the quality assessment of the Service;

- Guarantee the excellence of the provided services, evaluated using quantitative performance indicators.

It is stipulated that, in the event that the Service Provider's SecNumCloud certification is withdrawn, the Contract may be terminated by law, without incurring any penalties, by the PRINCIPAL. In such an eventuality, the Service Provider undertakes to inform the PRINCIPAL of this decertification by sending an official notification, by registered letter with acknowledgment of receipt.
Il convient de noter qu'une modification ou un ajustement de la qualification SecNumCloud ne sera pas interprété comme une révocation de 
la qualification initiale.

# 6. Audit

Le Prestataire s'engage à permettre au COMMANDITAIRE, ou à tout auditeur tiers et non concurrent du Prestataire que ce dernier aurait désigné, de consulter l'ensemble des documents nécessaires à l'attestation du respect intégral des obligations liées à la conformité avec les dispositions de l'article 28 du Règlement Général sur la Protection des Données (RGPD), facilitant ainsi la réalisation 
d'audits.

Par l'acceptation de la présente Convention de service, le COMMANDITAIRE confère son autorisation explicite à :

1. L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI) ainsi qu'à l'entité de qualification compétente pour entreprendre la vérification de la conformité du Service et de son système d'information au référentiel SecNumCloud.
2. Un prestataire d'audit de la sécurité des systèmes d'information, dûment qualifié PASSI et expressément désigné par le Prestataire, pour mener à bien des audits de sécurité portant sur le Service.

# 7. Description du Service

## 7.1. Shared Responsibility Model

The Service offered by the Provider is characterized by the provision of the following services, which align with the 
shared responsibility principle presented in the SecNumCloud reference framework:

- The provision of compute resources;

- The provision of storage spaces;

- Access to network and internet connectivity services;

- Offering a dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the CLIENT within the framework of the Service is presented in §7.1.

It is understood that the Provider will leverage its expertise to perform the Services according to best professional practices and 
in compliance with the requirements of the SecNumCloud reference framework.

The Service is SecNumCloud certified (see certificate in the Annex).

## 7.2. Detailed Service Scope Presentation

| Compute               | Compute Resource of the CLIENT Tenant                                                                              |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------- |
| Storage               | Production Data of the CLIENT Tenant                                                                               |
| S3 Object Storage     | Provision of a sovereign multi-AZ object storage infrastructure compatible with standard S3 APIs.                   |
| Backup                | Subject to subscription to the adequate mass-storage                                                              |
| Network Infrastructure| Network resource of the CLIENT Tenant                                                                             |
| CLIENT Console        | The service allowing the CLIENT to access its IaaS service and manage it via the Shiva interface                   |
| Support               | The support service accompanying the above services and only these (*)                                            |

*(*) Within the scope of the SNC qualified Service and the Provider's responsibilities therein*

### 7.2.1. Datacenter Infrastructures

The Service includes the provision, for each Availability Zone, of the qualified services described below:

- A datacenter site located in France for the FR Region, compliant with the latest technological standards, offering a resilience level equivalent to or higher than the Uptime Institute's Tier 3 level;
- Provision of technical rooms within datacenters dedicated to hosting the necessary technical equipment for service production, including compute, storage, network, cabling, and other required components;
- Secure power supply, ensured by two distinct electrical circuits, guaranteeing service continuity;
- Provision of air conditioning services, adjusted to comply with the standards and recommendations of equipment manufacturers, to maintain an optimal environment for technical devices;
- Continuous monitoring and detailed metrology, allowing precise tracking and proactive management of service performance and security.

The Provider ensures the provision of advanced fire detection and suppression services, designed to effectively identify and neutralize any fire outbreaks within the facilities. These systems are essential for ensuring the safety of the equipment
and data. They include high-precision smoke detectors and suppression devices capable of rapid action without damaging the IT equipment. This service is crucial for preventing fire risks, minimizing potential damages, and ensuring operational continuity.

The CLIENT is informed that all the security procedures and measures in place, including annual generator switchover tests, are essential for guaranteeing the continuity and integrity of the provided services. These practices are designed to 
minimize risks of outages and ensure optimal responsiveness in case of an Incident. By accepting these conditions, the client acknowledges
the importance of these measures and commits to fully cooperating to facilitate their implementation. The CLIENT is also encouraged to
take note of the provided security recommendations and integrate them into their own risk management strategy.

### 7.2.2. Service Management Software Infrastructure

The Provider supplies the CLIENT with the administration console and API necessary for using the Service. It also undertakes to maintain this administration console and API in optimal operational condition and ensure their continuous security. This administration console and API are collectively referred to as the "CLIENT interface."

The Provider alerts the CLIENT that abnormal use of the CLIENT interface, particularly in cases of API overloads (hammering), can trigger automatic security measures resulting in blocking access to the command APIs or the Service. It should be emphasized that this situation does not constitute service unavailability but a protective action for the Service and the Provider's infrastructure; hence, the CLIENT cannot consider it as unavailability in their calculations.

Moreover, the Provider informs the CLIENT that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the CLIENT submits identical requests at a higher frequency, their rejection cannot be interpreted as service unavailability.

### 7.2.3. Compute Infrastructure

The Service includes the provision, in the Availability Zones subscribed to by the CLIENT, of the equipment necessary to 
execute workloads in the form of virtual machines.

This includes:

- The provision of the technical chassis necessary for the proper functioning of the compute blades;
- The provision of compute blades in quantities specified by the CLIENT and distributed according to the Availability Zones of their choice. It should be noted that these compute blades are exclusively dedicated to the CLIENT;
- The provision of hypervisor-type operating systems, as well as guaranteeing the operational and security conditions of the software infrastructure necessary to manage these operating systems. It should be highlighted that, even though the Provider is responsible for the operational maintenance and overall security of the Service, it does not have specific knowledge of the CLIENT's production environments or the requirements related to their workloads. Consequently, the responsibility for deciding to update the operating systems of the compute blades hypervisors, an action that may require a restart, rests entirely on the CLIENT. This operation can be performed via the CLIENT Interface.

The choice of the compute blade model, selected from the catalog offered by the Provider, is the responsibility of the CLIENT.

### 7.2.4. Storage Infrastructure

The service includes the provision to the CLIENT of a shared SAN (Storage Area Network) type storage infrastructure offering various 
performance levels. This service encompasses:

- The implementation and maintenance of the dedicated SAN network in operational and secure conditions;
- The installation and management of shared storage arrays between clients, including their operational and secure conditions, supervision, and metrology;
- The implementation of automated systems for the allocated LUNs (Logical Unit Numbers) dedicated to the CLIENT's use, according to the volumes subscribed to by the CLIENT.

### 7.2.5. Global Network Infrastructure

The Provider deploys, within the framework of the Service, a global network facilitating the CLIENT's access to their hosted systems. This service includes:

- The provision, operational and secure maintenance of all optical fiber connections interconnecting the various Availability Zones;

- The provision, operational and secure maintenance of technical equipment necessary for the proper functioning of the network and client isolation.
L'interconnection of the SPONSORING Tenant's network to the Internet or to private networks, and the network equipment, operator links, and other technical components that make this interconnection, are not part of the Service's scope. This network interconnection is implemented in accordance with the provisions laid out in the Agreement.

### 7.2.6. Backup Infrastructure

The Provider offers the SPONSORING Tenant an integrated, dedicated, and managed backup service intended to protect its virtual machines. The Provider ensures the operational and security condition maintenance of this backup service. The Provider guarantees that the SPONSORING Tenant's backups will be located outside the availability zone of the workloads being backed up, provided that the SPONSORING Tenant has subscribed to the appropriate Work Units.

This backup service is limited to backing up the virtual machines and topology configurations of the SPONSORING Tenant's IaaS environment within the framework of the Service. The development and application of an adequate backup policy by the SPONSORING Tenant depend on the subscription to specific work units. It is therefore the responsibility of the SPONSORING Tenant to ensure the availability of the necessary technical resources from the Provider to implement its backup policy or to adjust this policy according to the available means.

The Provider commits to notify the SPONSORING Tenant in case of capacity constraints and to provide consulting assistance for the optimization of resources. The Provider's obligations will be limited to implementing the needs expressed by the SPONSORING Tenant in terms of backup policy, within the framework of the subscribed resources.

### 7.2.7. Implementation of Business Continuity or Disaster Recovery Solutions

The Provider provides the SPONSORING Tenant with all the necessary technical solutions to ensure an optimal distribution of its resources across various availability zones. It is the responsibility of the SPONSORING Tenant to efficiently manage this resource distribution, for which they have the option to use the Provider's tools available for this purpose.

## 7.3. Limitations of Services in the Qualified IaaS Model

### 7.3.1. Managed RUN Services

It is important to note that the following are excluded from the Service:

- Hosting of physical components of the SPONSORING Tenant;
- Network interconnection of the SPONSORING Tenant's Tenant to the Internet or private networks, including operator links;
- Any managed service type or TMA;
- Any assistance on virtual machines at the OS level and above within the IaaS responsibility stack, even if it is simple supervision.

That being said, the SPONSORING Tenant is not precluded from using such services under the Provider's MSP offer to engage in managed services mode on its Tenants. These services will not be covered by this Service Agreement and its bilateral commitments/clauses.

### 7.3.2. Backup Configuration

By default, the Provider sets up the IaaS resources for the SPONSORING Tenant by reserving resources and configuring deployments to use the availability zones. It is the responsibility of the SPONSORING Tenant to choose the availability zones through the SPONSORING Tenant interface.

### 7.3.3. Backup Configuration

The backup service is limited to the backup of virtual machines and topology configurations representing the SPONSORING Tenant's IaaS environment within the framework of the Service.

The backup service and the completion of the SPONSORING Tenant's backup policy are subject to the subscription of the necessary storage space on the mass storage to ensure the service. It is therefore the responsibility of the SPONSORING Tenant to subscribe to the Provider's necessary technical means to ensure the backup policy on its IT perimeter or to adjust the backup policy to the implemented means. The Provider commits to inform the SPONSORING Tenant in case of technical capacity limits.

The Provider will implement the necessary technical and human resources for the backup of the hosted system within the limits of the resources subscribed by the SPONSORING Tenant.

Furthermore, in cases not covered by the Provider, it is the responsibility of the SPONSORING Tenant to define its own backup strategy and to configure the backups of the VMs by itself or to make a service request to the Provider so that the backup configuration for physical servers can be set up if the SPONSORING Tenant has a managed service contract allowing the Provider to act via the SPONSORING Tenant interface, which is the administration console made available as part of this Service Agreement and which has features for configuring backups.

Moreover, this service will have no commitment other than to translate through the configuration via the SPONSORING Tenant interface the configuration clearly specified by the SPONSORING Tenant.

For reasons of flexibility of the Provider's offer, the SPONSORING Tenant has the option to associate a non-backup policy on some of its VMs. In this case, the SPONSORING Tenant is responsible for this choice. The Provider will not back up the VMs associated with the "no backup" policy. The Provider warns the SPONSORING Tenant that choosing the "no backup" policy or choosing to back up manually exposes the SPONSORING Tenant to a definitive data loss in case of an incident on the lower layers or on the layers dependent on its responsibility in the IaaS model. In such a case, it will be impossible to hold the Provider responsible for restoring the data as there will be nothing to restore. The Provider recommends always backing up the VMs.

For any subject regarding the OS installed on a virtual machine and any software or program running "above the OS," it is the SPONSORING Tenant's responsibility to perform administrative and supervisory operations within the European Union if they wish to ensure that all layers of the IT system are operated and managed from within the European Union. Administrative operations outside of the Provider's responsibility within the framework of this Service Agreement are indicated in the "Shared Responsibility Model" section of this Service Agreement.

## 7.4. Service Implementation

### 7.4.1. Technical Prerequisites

For the implementation of the Service, the SPONSORING Tenant acknowledges that they will need to:

- Operate with a VMware-type virtualization in the versions supported by the vendor and provided by the Provider within the framework of the Service;
- Use the backup tool through the Provider;
- Declare fixed IPs from which the Provider will authorize access to the SPONSORING Tenant interface (Whitelist filtering). Modifications of this IP list must be made via service requests (list not administrable from the Service administration interface).

## 7.5. Service Localization in France

It is specified that none of the operations and none of the physical components involved in providing the Service, subject to this Service Agreement, are located outside the European Union.

This includes notably the support, operational supervision, and security supervision (SOC) of the technical infrastructure delivering the Service. As a result, all storage, administrative tasks, supervision, and processing are carried out in France.

### 7.5.1. Localization of the Datacenters Hosting the Service

Apart from the operations of the Provider's employees and agencies, all production operations (including storage and data processing) and technical components delivering the Service are located in Datacenters based in France.

### 7.5.2. Localization of Cloud Temple Agencies Operating the Service

The Cloud Temple employees working within the Service scope operate from Cloud Temple agencies all located exclusively in France. These agencies are located in France, in Tours, Lyon, Caen, and Paris La Défense.

The SPONSORING Tenant is informed of the possibility for Cloud Temple employees to work remotely. However, the Provider guarantees the same level of security concerning remote access, particularly regarding VPN access. These remote accesses are implemented in accordance with the SecNumCloud reference standards.

## 7.6. Support

### 7.6.1. Nature of the Support Accompanying the Service

The Provider offers a technical support service aimed at assisting the SPONSORING Tenant in the management, troubleshooting, and optimization of their deployed resources. This service covers a wide range of activities, from initial service configuration assistance to advanced technical support to address specific issues.

Here is a description of the features and functionalities of the support service:

- Assistance in the initial implementation of the Service usage;
- Assistance in incident resolution;
- Assistance in problem resolution;
- Monitoring and consulting on the optimization of the technical framework.
Dans the scope of the support service, the Provider does not replace the CLIENT in the use of the Service. The CLIENT remains fully responsible for the configuration, operation of its VMs and its Tenants, and for managing all elements (including data and applications) that it has stored or installed on the Provider's infrastructures. The technical support service is provided in accordance with the General Terms and Conditions of Sale and Use, with the Provider being held to a best-effort obligation.

The CLIENT agrees to use the technical support service reasonably, refraining from requesting services not subscribed to with the Provider and from involving the Provider's teams with its own clients or third parties not included in the Contract. The Provider reserves the right to reject any service request that does not meet these criteria.

The level of support commitment is conditioned on the subscription of associated support work units.

### 7.6.2. Solicitation of technical support service

Technical support is accessible through a ticket system via the CLIENT console and is available during normal business hours excluding holidays (8 am - 6 pm; Monday -- Friday; French calendar and hours). For emergencies occurring outside of business hours, especially incidents significantly affecting production, the on-call service can be reached via a number provided to the CLIENT at the initiation of the Service.

For each request or Incident, it is imperative to generate a ticket with the Provider's support. The initiation of this ticket, including all necessary information, is essential and marks the beginning of the Provider's commitment evaluation.

As soon as the Provider receives a request or Incident notification, whether through the management console or following a phone call, a ticket is automatically created. When reporting an Incident, it is essential that the CLIENT provides the Provider with as many details as possible about the encountered problem. This approach is crucial to allow an adequate assessment of the situation, its prioritization, and an effective diagnosis.

The Client then receives an email confirmation indicating the ticket creation and its unique number. The CLIENT can check the status and history of its requests and Incident reports directly from the management console.

### 7.6.3. Incident management process

When declaring an Incident, the Provider's technical support team initiates an investigation to identify the cause of the problem and establish a diagnosis. The Client must actively collaborate with the Provider by providing all necessary information and performing the required tests. The Provider may access the Client's Service to diagnose the Incident.

If the Provider's Services are deemed functional and the Incident is not attributable to it, the Client will be informed. At the Client's request, the Provider may offer Professional Services to identify the origin of the problem, billable upon prior agreement in 30-minute increments.

In the case where the Incident is the responsibility of the Provider or one of its subcontractors, it completes the diagnosis and works on restoring the Service at no additional cost. The diagnosis is based on exchanges between the Parties and the Provider's data, which are deemed conclusive by agreement of the Parties.

### 7.6.4. Prioritization process for treatments

The determination of the priority level of a file is based on a matrix analysis that evaluates the impact of the Incident and its degree of criticality:

- The impact levels are defined as follows:

| Impact Level | Description                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| Impact I1    | The Provider's services are interrupted                                                                      |
| Impact I2    | The Provider's services are degraded                                                                         |
| Impact I3    | The Provider's services are currently stable but show signs of potential long-term decline                   |

- The criticality levels are defined as follows:

| Criticality Level | Description                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| Criticality C1    | The Provider's services are deteriorating at a worrying rate                                               |
| Criticality C2    | The Provider's services are gradually worsening over time                                                  |
| Criticality C3    | The Provider's services present one or more inconveniences without significant consequences                |

- Based on a thorough analysis of the situation, taking into account the factors that determine Impact and Criticality, a priority is assigned to the ticket in accordance with the following decision matrix:

| Impact Level <br/> \ Criticality Level | Impact I1       | Impact I2       | Impact I3       |
| --------------------------------------- | --------------- | --------------- | --------------- |
| Criticality C1                          | Priority **P1** | Priority **P2** | Priority **P3** |
| Criticality C2                          | Priority **P2** | Priority **P3** | Priority **P4** |
| Criticality C3                          | Priority **P3** | Priority **P4** | Priority **P5** |

The service level commitments corresponding to each priority level are detailed in the following chapter.

### 7.6.5. Language and location of support service

The support is provided by the Provider to the CLIENT at least in French. Support may also be provided in English.

Provider's support service operations for the SecNumCloud qualified infrastructure service offer are located in the European Union.

# 8. Commitments and service levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, ensuring their optimal functioning.

The unavailability of a service, which is subject to a performance indicator, is recognized as soon as it is identified by the Provider's monitoring system, or following a notification by a CLIENT user. The start of unavailability is set at the earliest moment between these two events, to ensure an accurate and fair account of the downtime.

The end of the unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or by user feedback, thus ensuring an effective resumption of operations and an accurate measure of the interruption duration.

## 8.1. Infrastructure availability commitments

The Provider commits to maintaining a level of availability and performance in line with the defined standards for each specified period. The Service Level Agreements (SLAs) apply provided that the CLIENT implements its systems across at least two of the Availability Zones present in the relevant Region.

If the CLIENT does not comply with these conditions, it will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (*). Accessibility to the SLAs is through the CLIENT interface. The measurements are calculated monthly:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Availability of computing power (Compute): guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Storage availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 3     : IC-INFRA_SNC-03** – Backup reliability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Network infrastructure availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 5     : IC-INFRA_SNC-05** – Internet access: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.

***Remarks***:

- *In response to a distributed denial of service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of this attack and safeguard its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may use the blackholing technique via the BGP community to block all traffic to the targeted IP address upstream at its providers, in order to protect the CLIENT's resources as well as those of other CLIENTs and the Provider's infrastructure. The Provider strongly encourages the CLIENT to adopt similar measures, such as using market-available web application firewall software, and carefully configuring its security groups via the command API.*

- *The Service Provider insists on the necessity for the CLIENT to minimize the openings of flows, notably by avoiding making accessible the **SSH** administration ports (TCP port 22) and **RDP** (TCP port 3389) from the entire Internet network (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 8.2. Availability commitment of the CLIENT interface

- SLA 6: IC-INFRA_SNC-06 -- Access to the Service administration console: a guaranteed availability of 97%, ensured continuously, 24 hours a day, 7 days a week.
- SLA 7: IC-INFRA_SNC-07 -- Access to Service management APIs: an availability of 99.9%, calculated on a 24/7 basis.

## 8.3. Support availability commitment

- **SLA 8: IC-INFRA_SNC-08** – Here are the performance commitments of the Service Provider's technical support for incidents, excluding scheduled maintenance:

| Priority         | Intervention Time Guarantee (ITG) | Performance Goal |
| ---------------- | --------------------------------- | ---------------- |
| Priority **P1**  | 30 min                            | 95%              |
| Priority **P2**  | 2h                                | 90%              |
| Priority **P3**  | 4h                                | 90%              |
| Priority **P4**  | 24h                               | 85%              |
| Priority **P5**  | 48h                               | 85%              |

- **SLA 9: IC-INFRA_SNC-09** – Here are the performance commitments of the Service Provider's technical support for service requests:

|                   | Intervention Time Guarantee (ITG) | Performance Goal |
| ----------------- | --------------------------------- | ---------------- |
| Service request   | 4h                                | 90%              |

*Note:*

- *The Intervention Time Guarantee (ITG) is calculated from the time difference between when the CLIENT opens the ticket and the first intervention by the Service Provider's support.*
- *Incident investigations regarding the CLIENT will not include remote intervention on the CLIENT's hosted servers. This assistance will be limited to explaining the available metrics related to the CLIENT environment to facilitate understanding of incidents or performance issues encountered. Based on the results of this analysis, recommendations may be suggested.*

## 8.4. Availability commitment for S3 object storage

- **SLA 10: IC-INFRA_SNC-10** – Here are the availability commitments for S3 object storage:

| Indicator         | Commitment                                      | Availability Goal | 
| ----------------- | ----------------------------------------------- | ----------------- |
| IC-INFRA-SNC-10.1 | Durability of an object's storage in a region   | 99.9999999% / year|
| IC-INFRA-SNC-10.2 | Availability of the S3 Object Storage API       | 99.99%            |
| IC-INFRA-SNC-10.3 | Maximum access latency to an object in a region | 150 ms            |

Notes:

- The Object Storage Service is specifically designed for object storage and must be used for this sole purpose, **categorically excluding its use in block mode**. Using block mode by workaround methods, including but not limited to the use of “FUSE” in a Linux environment, constitutes a violation of the stated usage terms. No incidents, malfunctions, or damages resulting from this non-compliant use will be covered by the Service Level Agreements (SLAs) defined in this service agreement.
- The durability guarantee is conditioned by the use of the services in accordance with current best practices and standards, and explicitly excludes any modification of data, whether intentional or accidental, resulting from actions taken by the CLIENT.

## 8.5. Backup commitment details

The backup strategy deployed for the CLIENT is conditioned by the subscription to the adequate units of work.

The Service Provider commits to the provision of a backup solution that will enable the CLIENT to apply the desired backup policies.

It is specified that the Service Provider's scope stops at providing a backup service, and it is up to the CLIENT to supervise through the CLIENT interface the proper execution of the associated policies.

It is specified that the management of storage capacities of the backup storage space remains the responsibility and liability of the CLIENT. The Service Provider provides the usage rate via the console.

*Example: Non-backup of a virtual machine:*

*The CLIENT is responsible for verifying/supervising the proper execution of backup policies; if the CLIENT notices that a virtual machine is not backed up, it is up to them to verify the cause. The CLIENT may request the Service Provider's Support according to the subscribed support level to be assisted.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9** will be exclusively applicable in the case of a Backup Service Incident.

# 9. Organization of the contractual relationship

## 9.1. Service Provider Responsibilities

The Service Provider commits to:

- Adequately inform its CLIENT (for example, in case of capacity limits of technical resources delivering the Service).

- Formally inform the CLIENT and within a one-month timeframe, of any legal, organizational, or technical change that may impact the Service's compliance with protection against extra-European laws (19.6 of the SNC v3.2 framework).

- Provide the CLIENT with interfaces and service interfaces that are in French at a minimum.

- Study and take into account the specific sectorial requirements related to the types of information entrusted by the CLIENT in the implementation of the service within the limits of the Service Provider’s responsibilities.

- Ensure that no information related to the service is disclosed to third parties, except with formal and written authorization from the CLIENT.

- Provide all necessary information for conducting compliance audits in accordance with the provisions of Article 28 of the GDPR.

- Report to the CLIENT, through this Service Agreement, any security incident impacting the Service or the use of the Service by the CLIENT (including the CLIENT's data).

- Allow a qualified information systems security audit service provider (PASSI), mandated by the Service Provider, to audit the service as well as its information system, in accordance with the Service Provider's SecNumCloud control plan. Additionally, the Service Provider commits to providing all necessary information to effectively carry out compliance audits in accordance with the provisions of Article 28 of the GDPR, conducted by the CLIENT or a mandated third party.

- Provide, as a subcontractor, in accordance with Article 28 of the General Data Protection Regulation (GDPR), assistance and advice to the CLIENT by alerting them whenever an instruction issued by the latter is likely to constitute a violation of data protection rules.

- Notify in writing, when a project impacts or is likely to impact the Service's security level, the CLIENT of potential impacts, mitigation measures implemented, and residual risks concerning them.

- Document and implement all necessary procedures to meet the legal, regulatory, and contractual requirements applicable to the service, as well as the specific security needs of the CLIENT, defined by the latter and provided for in the Contract. Upon request by the CLIENT, the Documentation module of the CLIENT interface will allow secure sharing of these documents.

- Provide, upon the CLIENT's request, the risk assessment elements related to the subjection of the CLIENT’s data to the laws of a non-EU state.

Upon formal and written request from the CLIENT, the Service Provider commits to:

1. Make accessible to the CLIENT the internal regulations and code of ethics of the Service Provider;

2. Make accessible to the CLIENT the sanctions incurred in case of violation of the security policy;

3. Provide the CLIENT with all events concerning them in the Service's logging elements;

4. Upon termination of the Contract, the Service Provider commits to deleting the CLIENT's data and technical data in accordance with the “data deletion procedure at the end of the Contract” described in this Service Agreement.

5. Ensure secure erasure of all CLIENT's data by complete rewriting of all media that hosted their data as part of the Service.

6. Provide the complete list of third parties authorized to access infrastructures hosting the data.
Le Provider will keep updated and make available to the CLIENT the exhaustive list of third parties authorized to access the infrastructures holding the data, informing the latter of any changes related to subcontractors. The Provider and all its subsidiaries commit to respecting the fundamental values of the European Union, namely human dignity, freedom, democracy, equality, the rule of law, as well as respect for human rights. The service provided by the Provider complies with the legislation in force regarding fundamental rights and the values of the European Union concerning respect for human dignity, freedom, equality, democracy, and the rule of law.

## 9.2. Limitation of the Provider’s Liabilities

Due to all definitions and conditions mentioned in this Service Agreement, the Provider's liabilities are limited as follows:

1. The shared responsibility model, described in the "Shared Responsibility Model" section of this Service Agreement, effectively limits the Provider's involvement in the operational layers going "above" the provisioning of computing, network, storage, and backup resources. This particularly excludes but is not limited to:

    - The management of what is installed on virtual machines (OS, middleware, applications, etc.);

    - The updating of OS and other software installed by the CLIENT on its machines in its Tenants;

    - The security of programs, software, and applications installed on virtual machines;

    - The updating of virtual machines;

    - The backup of data at the application level.

2. The Provider cannot commit to the backup of the CLIENT’s Tenants without the CLIENT first subscribing to the appropriate resource units.

3. The Provider cannot claim ownership of the data transmitted and generated by the CLIENT. Indeed, these are the property of the CLIENT.

4. The Provider emphasizes that under no circumstances can it exploit the data transmitted and generated by the CLIENT without the latter's prior validation.

5. The Provider absolves itself of any responsibility for components physically hosted and managed by the Provider but directly owned by the CLIENT or a third party with whom the CLIENT has contracted. The hosting of physical client components is not part of the Service and is therefore outside the scope of this Service Agreement. It is the responsibility of the CLIENT to evaluate the level of adherence or dependency that these components introduce concerning the SecNumCloud qualified IaaS Service.

## 9.3. Access Limitation

As part of the Service, the Provider is formally prohibited from accessing the CLIENT’s Tenants without prior authorization. It is the responsibility of the CLIENT to provide the necessary access to the Provider’s personnel, according to the specific needs of the hosting and, if applicable, the professional support services, if this option has been selected by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for the purposes related to the agreed service provision, thereby ensuring secure management in accordance with the terms of the agreement.

Remote access by third parties involved in the Provider’s service delivery is strictly prohibited. In the event that a specific technical requirement necessitates such access, it can only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining the CLIENT's written consent.

This measure ensures the control and security of the CLIENT's data, ensuring that any exception to the rule is duly authorized and documented.

## 9.4. Responsibilities of Third Parties Participating in the Provision of the Secure Temple Service

The Provider controls the list of partner third parties participating in the provision of the Service. These third parties are the editors, providers (of the Provider), and other suppliers participating in the provision of the Service. The Provider applies the following measures to these third parties:

- The Provider requires third parties involved in the implementation of the service, in their contribution to the Service, a security level at least equivalent to that which it commits to maintain in its own security policy applicable to the Secure Temple service;

- The Provider contracts, with each third party involved in the implementation of the service, audit clauses allowing a qualification body to verify that these third parties comply with legal requirements and SNC requirements, enabling the Provider to meet its commitments in this Service Agreement.

- The Provider implements a procedure to regularly control the measures taken by third parties involved in the implementation of the service to comply with the requirements of the Provider to meet its commitments in this Service Agreement.

- The Provider implements a procedure to monitor changes made by third parties involved in the implementation of the service that may affect the security level of the service information system.

## 9.5. Responsibilities and Obligations of the CLIENT

As a reminder, the Provider provides the CLIENT with a virtual machine execution platform, the configuration of which is the responsibility of the CLIENT. Each virtual machine cannot operate without an associated backup policy. The Provider defines automatic backup policies through its interfaces. However, it is the CLIENT’s responsibility to activate these backup policies and therefore to activate the virtual machines.

The CLIENT authorizes ANSSI and the SNC qualification body to audit the Service and the technical infrastructure delivering the Service.

## 9.6. Rights of the CLIENT

At any time during the contractual relationship, the CLIENT may file a complaint concerning the qualified service with ANSSI.

At any time, the CLIENT may request the Provider to make available its internal regulations and its code of ethics.

## 9.7. Data Erasure at the End of the Contract

At the end of the contract, whether it expires or is terminated for any reason, the Provider commits to securely erase all CLIENT data, including technical data. The Provider will ensure to communicate a formal notice to the CLIENT, adhering to a period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To attest to this deletion, the Provider will provide the CLIENT with a certificate confirming the data erasure.

# 10. Lifecycle of this Service Agreement

## 10.1. Effectiveness of the Service Agreement

This Service Agreement comes into effect on the day it is signed by the CLIENT.

The collection, handling, storage, and processing of data done in the context of pre-sales, implementation, and termination of the Service are done in compliance with the legislation in force.

## 10.2. Changes to the Service Agreement

Modifications or additions to this Service Agreement arise exclusively from requests made by the designated governance bodies. These proposed changes will be reviewed by the Parties, authorized to determine which aspects require formal written documentation.

It is agreed that any evolution of the Service Agreement, after approval, which alters the initially established financial conditions, will require the establishment and signing of an amendment to the current Contract.

Factors that may lead to a revision of this Service Agreement include, but are not limited to:

- The evolution of the technical infrastructure delivering the IaaS Service;

- Adjustments made to the services deployed by the Provider to provide the Service;

- Changes in the commitments made and applicable penalties;

- Organizational reconfigurations within the CLIENT or Provider;

- The expansion or reduction of the scope of the Service.

The version and revision management of the Service Agreement is recorded at the beginning of the document for ease of tracking.

### 10.2.1. Changes Initiated by the CLIENT

Changes to the Service Agreement may originate, in particular, from:

- An evolution of the infrastructure managed by the Provider;

- A modification of the services implemented by the Provider;

- A modification of the service level commitments made by the Provider.

### 10.2.2. Changes Initiated by the Provider

Any modification of the Service Agreement is subject to acceptance by the CLIENT. It is understood that any approved modification or addition altering the financial elements of the Contract may involve the signing of an amendment to it.

## 10.3. Reversibility

In addition, Cloud Temple commits to allowing a revision of this Service Agreement (including particularly its termination) without penalty for the CLIENT in the event of the loss of the SecNumCloud qualification.
Les Services ne comprennent pas d'obligation de réversibilité (à savoir, l'aide au Client pour qu'il puisse migrer son système vers un autre "Prestataire") à l'exception de la mise à disposition du COMMANDITAIRE par le Prestataire de l'interface COMMANDITAIRE permettant au COMMANDITAIRE de sauvegarder et récupérer ses données y compris notamment les données de configuration de leur système d'information via l'une des modalités techniques suivantes au choix du COMMANDITAIRE : la mise à disposition de fichiers suivant un ou plusieurs formats documentés et exploitables en dehors du service fourni par le Prestataire ou bien via la mise en place d'interfaces techniques permettant l'accès aux données suivant un schéma documenté et exploitable (API).

Le COMMANDITAIRE, seul maître de son système, doit tout mettre en œuvre pour faciliter cette opération en tant que de besoin (ce qui implique, notamment, qu'il mette en place une documentation rigoureuse à cet effet) et l'élaboration de plans de réversibilité. Dans le cas où le COMMANDITAIRE aurait besoin d'une prestation complémentaire, le Prestataire peut proposer une mission de conseil à cet égard dans le cadre d'un contrat spécifique à négocier.

# 11. Disponibilité, continuité et restauration du service

## 11.1. Gestion des Incidents et des interruptions

### 11.1.1. Incidents

#### 11.1.1.1. Types d'Incidents traités dans le cadre de cette Convention de service

- Disasters

- Breakdowns and failures

- Security incidents:

- Affecting the availability of the service

- Affecting the confidentiality of the service

- Affecting the integrity of the service

#### 11.1.1.2. Incident handling

- Delays

- Post-incident actions

- Archive documents detailing security incidents.

- Notification of personal data breaches [online](<https://notifications.cnil.fr/notifications/index>)

#### 11.1.1.3. Level of notification of Security Incidents

The CLIENT has the responsibility to choose the severity levels of the Security Incidents for which they wish to be informed, for example via their formalization in a PAS applicable to the Service.

By default, the CLIENT is informed:

- Of security incidents with impact (impacts I1 and I2 according to the impact scale defined in the prioritization process of this Service Agreement);

- Of personal data breaches for which the CLIENT is the data controller;

- Of personal data breaches for which the Provider is the data controller and involving the CLIENT's personal data.

## 11.2. Service Maintenance

### 11.2.1. Nature of maintenance

The maintenance provided consists of the implementation:

- Of the plan to maintain the Service in operational conditions to ensure good availability indicators as committed by the Provider above;

- Of the BCP/DRP plan if subscribed by the CLIENT triggered according to any incidents that may occur.

### 11.2.2. Remote access of Cloud Temple on the CLIENT's perimeter

The Provider is prohibited, as part of this Service Agreement, from any access to the Tenants and to the CLIENT’s interface space.

It will be incumbent on the CLIENT to provide the necessary access to the Provider's personnel. The CLIENT acknowledges that the accesses will be used as part of the hosting and ultimately of the outsourcing (if subscribed by the CLIENT).

### 11.2.3. Remote access of third parties participating in the provision of the service on the CLIENT’s perimeter

No remote access by third parties participating in the provision of the Service is authorized.

If a technical need makes this scenario necessary, then this type of access will only be carried out after notification of the CLIENT, justification, and obtaining their written consent.

# 12. Data deletion procedure at the end of the Contract

At the end of the Contract, whether the Contract has expired or for any other reason, the Provider will ensure the secure deletion of all data processed as part of the Service, including the CLIENT's Technical Data. The Provider will give a formal notice respecting a period of twenty-one (21) calendar days. The CLIENT's data will be deleted within a maximum period of thirty (30) days after the notification. The Provider provides a data deletion certificate to the CLIENT.

# 13. Applicable law

## 13.1. In general

The law applicable to this Service Agreement is French law.

## 13.2. Compliance with applicable law and regulations

The Provider commits to the following points:

- Identification of applicable legal and regulatory constraints within the framework of the Service;

- Compliance with applicable legal and regulatory constraints related to data entrusted to the Provider;

- Compliance with the Data Protection Act and GDPR;

- Implementation of personal data protection measures;

- Implementation of a legal and regulatory watch process;

- Maintaining appropriate relationships or a watch with sectoral authorities related to the nature of the data processed as part of the Service. This includes in particular ANSSI, CERT-FR, and CNIL.

## 13.3. GDPR

Acting as a data processor within the meaning of Article 28 of the General Data Protection Regulation (GDPR), the Provider commits:

- To ensure transparency and traceability;

- To appoint a DPO responsible for defining and implementing personal data protection measures;

- To provide assistance and advice to the CLIENT by alerting if an instruction from them constitutes a violation of personal data protection rules if the Provider can identify it;

- A guarantee of security on the processed data (due to the SecNumCloud qualification).

## 13.4. Protection against extra-European law

In the event that the Provider, within the framework of the Service, resorts to the services of a third company - including a subcontractor - headquartered, with its central administration or main establishment in a state that is not a member of the European Union or belonging to or controlled by a third company domiciled outside the European Union, the Provider guarantees that the aforementioned third company will not have any access to the data operated by the 'Secure Temple' service.

As a reminder, the data in question are those entrusted to the Provider by the CLIENT as well as all Technical Data including information about the CLIENTS.

For the purposes of this article, the notion of control is understood as mentioned in II of Article L233-3 of the Commercial Code.

# 14. SIGNATURES

Made in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, on
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For Cloud Temple, the PROVIDER

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the CLIENT