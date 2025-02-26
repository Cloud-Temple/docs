---
title: IaaS Service Agreement
---

![Logo Cloud Temple](images/ct.png)

# 1. **IaaS SERVICE AGREEMENT**

| **Recipients:**                      | **SPONSOR**                                    |
| :----------------------------------- | :---------------------------------------------- |
| **Document reference**               | CT.AM.JUR.ANX_IaaS Service Agreement_v2.0       |
| **Your contacts**                    | *First Name* *Last Name*                       |
|                                      | Account Manager                                 |
|                                      | e-mail: *first.name*@cloud-temple.com           |
| **Last update date**                 | 04/03/2024                                      |
| **Contractual validation date**      | Day DD YYYY                                     |


----------------------------------------------------------------------------------

| **Version** | **Date**   | **Action**                             | **Author**      |
| ----------- | ---------- | -------------------------------------- | --------------- |
| v0.1        | 06/07/2022 | Initial drafting                       | Lorena ALCALDE  |
| v0.2        | 09/14/2022 | Enrichment                             | Lorena ALCALDE  |
| v1.0        | 12/30/2022 | Indicator integration                  | Lorena ALCALDE  |
| v1.1        | 01/23/2023 | Footer modification                    | Lorena ALCALDE  |
| v1.2        | 05/22/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.3        | 06/29/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.4        | 11/06/2023 | Capital modification and Enrichment    | Lorena ALCALDE  |
| v1.5        | 11/30/2023 | Enrichment                             | Lorena ALCALDE  |
| v1.6        | 03/21/2024 | Enrichment                             | Lorena ALCALDE  |
| v2.0        | 03/29/2024 | SNC compliance adjustments             | Nicolas ABRIOUX |
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
  - [7.2. Detailed presentation of the Service scope](#72-detailed-presentation-of-the-service-scope)
    - [7.2.1. Data Center Infrastructures](#721-data-center-infrastructures)
    - [7.2.2. Service Management Software Infrastructure](#722-service-management-software-infrastructure)
    - [7.2.3. Compute Infrastructures](#723-compute-infrastructures)
    - [7.2.4. Storage Infrastructure](#724-storage-infrastructure)
    - [7.2.5. Global Network Infrastructure](#725-global-network-infrastructure)
    - [7.2.6. Backup Infrastructure](#726-backup-infrastructure)
    - [7.2.7. Implementation of business recovery or continuity solutions](#727-implementation-of-business-recovery-or-continuity-solutions)
  - [7.3. Service limitations in the qualified IaaS model](#73-service-limitations-in-the-qualified-iaas-model)
    - [7.3.1. Run managed services](#731-run-managed-services)
    - [7.3.2. Backup configuration](#732-backup-configuration)
    - [7.3.3. Backup configuration](#733-backup-configuration)
  - [7.4. Service implementation](#74-service-implementation)
    - [7.4.1. Technical prerequisites](#741-technical-prerequisites)
  - [7.5. Service location in France](#75-service-location-in-france)
    - [7.5.1. Location of Data Centers hosting the Service](#751-location-of-data-centers-hosting-the-service)
    - [7.5.2. Location of Cloud Temple agencies operating the service](#752-location-of-cloud-temple-agencies-operating-the-service)
  - [7.6. Support](#76-support)
    - [7.6.1. Nature of support accompanying the service](#761-nature-of-support-accompanying-the-service)
    - [7.6.2. Technical support service request](#762-technical-support-service-request)
    - [7.6.3. Incident management process](#763-incident-management-process)
    - [7.6.4. Treatment prioritization process](#764-treatment-prioritization-process)
    - [7.6.5. Language and location of the support service](#765-language-and-location-of-the-support-service)
- [8. Service Commitments and Levels](#8-service-commitments-and-levels)
  - [8.1. Infrastructure availability commitments](#81-infrastructure-availability-commitments)
  - [8.2. SPONSOR interface availability commitment](#82-sponsor-interface-availability-commitment)
  - [8.3. Support availability commitment](#83-support-availability-commitment)
  - [8.4. S3 object storage availability commitment](#84-s3-object-storage-availability-commitment)
  - [8.5. Clarification regarding the backup commitment](#85-clarification-regarding-the-backup-commitment)
- [9. Organization of the contractual relationship](#9-organization-of-the-contractual-relationship)
  - [9.1. Provider's responsibilities](#91-providers-responsibilities)
  - [9.2. Limitation of the Provider's responsibilities](#92-limitation-of-the-providers-responsibilities)
  - [9.3. Access limitation](#93-access-limitation)
  - [9.4. Responsibilities of third parties involved in providing the Secure Temple service](#94-responsibilities-of-third-parties-involved-in-providing-the-secure-temple-service)
  - [9.5. Responsibilities and obligations of the SPONSOR](#95-responsibilities-and-obligations-of-the-sponsor)
  - [9.6. Rights of the SPONSOR](#96-rights-of-the-sponsor)
  - [9.7. Data erasure at the end of the Contract](#97-data-erasure-at-the-end-of-the-contract)
- [10. Lifecycle of this Service Agreement](#10-lifecycle-of-this-service-agreement)
  - [10.1. Service Agreement effective date](#101-service-agreement-effective-date)
  - [10.2. Service Agreement changes](#102-service-agreement-changes)
    - [10.2.1. Changes initiated by the SPONSOR](#1021-changes-initiated-by-the-sponsor)
    - [10.2.2. Changes initiated by the Provider](#1022-changes-initiated-by-the-provider)
  - [10.3. Reversibility](#103-reversibility)
- [11. Availability, continuity, and service restoration](#11-availability-continuity-and-service-restoration)
  - [11.1. Incident and interruption management](#111-incident-and-interruption-management)
    - [11.1.1. Incidents](#1111-incidents)
      - [11.1.1.1. Types of Incidents handled under this Service Agreement](#11111-types-of-incidents-handled-under-this-service-agreement)
      - [11.1.1.2. Incident treatment](#11112-incident-treatment)
      - [11.1.1.3. Notification level of security Incidents](#11113-notification-level-of-security-incidents)
  - [11.2. Service Maintenance](#112-service-maintenance)
    - [11.2.1. Nature of maintenance](#1121-nature-of-maintenance)
    - [11.2.2. Remote access of Cloud Temple on the SPONSOR's scope](#1122-remote-access-of-cloud-temple-on-the-sponsors-scope)
    - [11.2.3. Remote access of third parties involved in providing the service on the SPONSOR's scope](#1123-remote-access-of-third-parties-involved-in-providing-the-service-on-the-sponsors-scope)
- [12. Data erasure procedure at the end of the Contract](#12-data-erasure-procedure-at-the-end-of-the-contract)
- [13. Applicable law](#13-applicable-law)
  - [13.1. In general](#131-in-general)
  - [13.2. Compliance with applicable laws and regulations](#132-compliance-with-applicable-laws-and-regulations)
  - [13.3. GDPR](#133-gdpr)
  - [13.4. Protection against extra-European law](#134-protection-against-extra-european-law)
- [14. SIGNATURES](#14-signatures)


----------------------------------------------------------------------------------


# 3. Preliminary and Glossary

## 3.1. Preliminary

This document formalizes the service agreement associated with the IaaS qualified SecNumCloud service under the name "Secure Temple".

"This service agreement is complementary to and supplements the general terms and conditions of sale and use of the Provider. It is
understood that contractual documents should be interpreted consistently with each other. In the event of a contradiction or divergence between
the terms of the contractual documents, the documents will prevail over each other in the following order:

1. General Terms and Conditions of Sale and Use (CGVU)
2. SecNumCloud IaaS Service Agreement
3. SecNumCloud PaaS Service Agreement
4. Specific specialty agreement
5. Security Assurance Plan (PAS)
6. Specific Terms of Use (CPU)

## 3.2. Glossary

In this Service Agreement, the **SPONSOR**, the **Provider**, and the **Parties** are identified in the Contract
to which this Service Agreement is annexed.

The expressions used in this Service Agreement will be interpreted according to the definitions assigned to them below:


-   **Change:** Any addition, modification, or deletion impacting the Service, authorized, planned, or supported.

-   **Standard change:** A change subject to a procedure, the methods of production implementation and impacts (including financial) of which are known and accepted in advance by the Parties. It is then integrated into the catalog of standard changes and may, in some cases, have an ITI and an RTO.

-   **Contract:** Refers to the contract subscribed by the SPONSOR with the Provider to allow the SPONSOR to benefit from the Service, to which this Service Level Agreement is annexed.

-   ***Service Level Agreement:** This document, established as part of a specific contract or the General Terms and Conditions of Sale and Use (GTCU), in compliance with the requirements of the SecNumCloud Framework.

-   **Service request:** Request from the SPONSOR to the Provider within the scope of the Service, covering operations that the SPONSOR cannot perform from the SPONSOR interface and support requests within the scope of the Service. Service requests are limited to those provided for in the Contract or this Service Level Agreement.

-   **Availability:** The ability to ensure the availability and maintenance of the optimal performance of the Service, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).

-   **Technical Data:** Includes all data handled to deliver the Service, notably the identity of beneficiaries and administrators of the technical infrastructure, technical infrastructure logs, access configuration, directory, certificates...

-   **Event:** An "event" is any detectable or identifiable occurrence that may have significance for the management of the Service.

-   **Hypervisor:** Operating system that allows the execution of virtual machines on a computing blade.

-   **Incident:** Any unforeseen event that disrupts the normal functioning of the Service or compromises data security.

-   **Security Incident:** Any event within the Service perimeter:

    -   Of intentionally malicious nature;
    -   Of accidental nature compromising the integrity, confidentiality, or traceability of the Service or the SPONSOR's data;
    -   Compromising existing security measures.
    Non-malicious origin Availability breaches are not considered Security Incidents (hardware failure, bug, malfunction, natural disaster, etc.).

-   **SPONSOR Interface:** Administration interface of the Service made available to the SPONSOR by the Provider, comprising a web administration console and an API.

-   **Production deployment:** Administrative action(s) for the realization of Change when it is approved (the change, in the ITIL sense, only concerns change management and not its realization/implementation).

-   **Problem:** Cause of one or more recurring Incidents, cause of a potential Incident (risky situation).

-   **Region:** Refers to a geographically defined set of cloud availability zones, providing network, computing, and storage services to optimize latency, performance, and local regulatory compliance.

-   **Service:** Refers to the SecNumCloud qualified IaaS service “Secure Temple,” delivered to the SPONSOR by the Provider from technical infrastructures maintained by the Provider, as described in the "Service Description" section of this Service Level Agreement.

-   **Secure Temple:** Refers to the SecNumCloud qualified IaaS service, offered by the company Cloud Temple, as defined in the certificate available on the ANSSI website and provided as an annex to this Service Level Agreement.

-   **Disaster:** Refers to a serious event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected Party.

-   **Supervision:** Monitoring of an Information System or Service, involving the collection of various data such as measurements and alarms. This activity is limited to observation and tracking, without directly intervening on the monitored elements, a prerogative belonging to administrative operations.

-   **Tenant:** An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security.

-   **Availability Zone (AZ):** A specific and isolated section of the cloud computing infrastructure designed to ensure high availability and resilience of services through a geographical distribution of resources.

# 4. Acronyms


  | **Acronym** | **Definition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Change Advisory Committee                                      |
  | **CMDB**     | Configuration Management Database -- Configuration Management Database                  |
  | **COPIL**    | Steering Committee                                                                      |
  | **COSTRAT**  | Strategic Committee                                                                     |
  | **COPROJ**   | Project Committee                                                                       |
  | **DB**       | Database (database)                                                                     |
  | **DRP**      | Disaster Recovery Plan (PRA) (Business Recovery Plan)                                   |
  | **GTE**      | Escalation Time Guarantee                                                               |
  | **GTI**      | Intervention Time Guarantee                                                             |
  | **GTR**      | Resolution Time Guarantee                                                               |
  | **ITIL**     | Information Technology Infrastructure Library - Best practices for IT management        |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Maintenance in Operational Condition                                                    |
  | **MOA**      | Contracting Authority                                                                   |
  | **MOE**      | Project Management                                                                      |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system                                                                        |
  | **PAQ**      | Quality Assurance Plan                                                                  |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Security Assurance Plan                                                                 |
  | **PASSI**    | Information System Security Audit Provider                                              |
  | **RFC**      | Request For Change                                                                      |
  | **RGPD**     | General Data Protection Regulation                                                      |
  | **RPO**      | Recovery Point Objective                                                                |
  | **RTO**      | Recovery Time Objective                                                                 |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement                                                                 |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Third-Party Application Maintenance                                                     |
  | **UO**       | Work Unit                                                                               |
  | **VABE**     | Validation of Operational Capability                                                    |
  | **VABF**     | Validation of Functional Capability                                                     |
  | **VM**       | Virtual Machine                                                                         |
  | **VSR**      | Regular Service Validation                                                              |


# 5. Purpose of this Service Level Agreement

This Service Level Agreement establishes the terms and conditions under which the Provider commits to delivering the Service to the
SPONSOR. Its purpose is to:

-   Specify the performance requirements expected by the SPONSOR in terms of Service functionality and reliability;

-   State the Provider's obligations to meet the agreed service levels;

-   Identify the regulatory standards specifically applicable to the Service delivered;

-   Ensure consistency and integrity in the evaluation of Service quality;

-   Guarantee the excellence of the services provided, evaluated using quantitative performance indicators.

It is stipulated that, in the event the Provider's SecNumCloud qualification is withdrawn, the Contract may be terminated
full right, without incurring penalties, by the SPONSOR. In such an event, the Service Provider agrees to inform the SPONSOR of this disqualification by sending an official notification via registered letter with acknowledgment of receipt.

It should be noted that a modification or adjustment to the SecNumCloud qualification will not be interpreted as a revocation of the initial qualification.

# 6. Audit

The Service Provider agrees to allow the SPONSOR, or any third-party non-competitor auditor designated by the SPONSOR, to review all necessary documents to attest to full compliance with the obligations related to the provisions of Article 28 of the General Data Protection Regulation (GDPR), thus facilitating the conduct of audits.

By accepting this Service Agreement, the SPONSOR explicitly authorizes:

1.  The National Cybersecurity Agency of France (ANSSI) and the competent qualification entity to undertake the verification of the Service's and its information system's compliance with the SecNumCloud standard.
2.  A duly qualified and explicitly designated PASSI information systems security audit provider appointed by the Service Provider to conduct security audits focusing on the Service.

# 7. Service Description

## 7.1. Shared Responsibility Model

The Service offered by the Service Provider is characterized by the provision of the following services, which align with the shared responsibility principle presented in the SecNumCloud standard:

-   Provision of compute resources;
-   Provision of storage spaces;
-   Access to network and internet connectivity services;
-   Offering of a backup service dedicated to virtual machines.

The shared responsibility model applied between the Service Provider and the SPONSOR within the framework of the Service is presented in §7.1.

It is understood that the Service Provider will leverage its expertise to deliver the Services according to best professional practices and in compliance with the SecNumCloud standard requirements.

The Service is SecNumCloud qualified (see certificate in the Annex).

## 7.2. Detailed Presentation of the Service Scope

| Compute               | Tenant SPONSOR's compute resource                                                                         |
| :-------------------- | :--------------------------------------------------------------------------------------------------------- |
| Storage               | Tenant SPONSOR's production data                                                                           |
| S3 Object Storage     | Provision of a sovereign multi-AZ object storage infrastructure compatible with standard S3 APIs.          |
| Backup                | Subject to subscription to adequate mass-storage                                                          |
| Network Infrastructure| Tenant SPONSOR's network resource                                                                          |
| SPONSOR Console       | The service allowing the SPONSOR to access and administer its IaaS service via the Shiva interface         |
| Support               | The support service accompanying the aforementioned services and only those (*)                           |

_(*) Within the SNC qualified Service scope and the Service Provider's responsibilities_

### 7.2.1. Datacenter Infrastructures

The Service includes the provision, for each Availability Zone, of the following qualified services:

-   Datacenter site located in France for the FR Region, compliant with the latest technological standards, offering a resilience level equivalent to or greater than Tier 3 of the Uptime Institute;
-   Provision of technical rooms within datacenters dedicated to hosting the technical equipment necessary for service production, including compute, storage, network, cabling, and other necessary components;
-   Secured power supply from two distinct electrical circuits, ensuring service continuity;
-   Provision of air conditioning services, adjusted to meet the standards and recommendations of equipment manufacturers, to maintain an optimal environment for technical devices;
-   Continuous supervision and detailed metrology, enabling precise monitoring and proactive management of performance and security of the provided service.

The Service Provider ensures the provision of advanced fire detection and extinction services, designed to effectively identify and neutralize any fire outbreak within the facilities. These systems are essential to guarantee the safety of equipment and data. They include high-precision smoke detectors and extinguishing devices that can act quickly without damaging the IT equipment. This service is crucial for preventing fire risks, minimizing potential damage, and ensuring operational continuity.

The SPONSOR is informed that all implemented security procedures and measures, including annual generator switchover tests, are essential for guaranteeing the continuity and integrity of the provided services. These practices are designed to minimize outage risks and ensure optimal response in case of an Incident. By accepting these conditions, the client acknowledges the importance of these measures and commits to fully cooperating to facilitate their implementation. The SPONSOR is also encouraged to take note of the provided security recommendations and to integrate them into its own risk management strategy.

### 7.2.2. Service Management Software Infrastructure

The Service Provider provides the SPONSOR with the administration console and the API necessary for using the Service. The Service Provider also commits to maintaining this administration console and API in optimal operational condition and ensuring their continuous security. This administration console and API are collectively referred to as the "SPONSOR interface".

The Service Provider alerts the SPONSOR that abnormal use of the SPONSOR interface, particularly in the case of command API overload (hammering), may trigger automatic security measures resulting in blocking access to the command APIs or the Service. It should be noted that this situation does not constitute a Service unavailability but rather a Service and infrastructure protection action; therefore, the SPONSOR cannot consider it an unavailability in its calculations.

Furthermore, the Service Provider specifies to the SPONSOR that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the SPONSOR submits identical requests at a higher frequency, their rejection cannot be interpreted as a Service unavailability.

### 7.2.3. Compute Infrastructures

The Service includes the provision, in the Availability Zones subscribed to by the SPONSOR, of the equipment necessary for running workloads in the form of virtual machines.

This includes:

- The provision of the technical chassis necessary for the proper operation of computing blades;
- The provision of computing blades in the quantities specified by the SPONSOR and allocated according to the Availability Zones of its choice. It should be noted that these computing blades are exclusively dedicated to the SPONSOR;
- The provision of hypervisor-type operating systems, as well as the guarantee of keeping operational and secure the software infrastructure necessary to manage these operating systems. It should be emphasized that even though the Service Provider is responsible for the operational maintenance and overall security of the Service, it lacks specific knowledge concerning the SPONSOR’s production environments or the requirements related to its workloads. Consequently, the responsibility for deciding to update the hypervisor computing blade operating systems, an action potentially requiring a reboot, fully rests on the SPONSOR. This operation can be performed via the SPONSOR Interface.

The choice of the computing blade model, selected from the catalog offered by the Service Provider, falls under the responsibility of the SPONSOR.

### 7.2.4. Storage Infrastructure

The service includes the provision of a shared SAN (Storage Area Network) storage infrastructure to the SPONSOR, offering various performance levels. This service encompasses:

- The implementation and maintenance in operational and secure condition of the dedicated SAN network;
- The installation and management of shared storage arrays among clients, including their operational and secure maintenance, supervision, and metrology;
- The implementation of automated systems for the allocation of LUNs (Logical Unit Numbers) for storage dedicated to the SPONSOR’s use, in accordance with the volumes subscribed by the SPONSOR.

### 7.2.5. Global Network Infrastructure

The Service Provider deploys, within the Service framework, a global network facilitating the SPONSOR's access to its hosted systems. This service includes:
- The provision, maintenance in operational condition, and security condition of all fiber optic connections interconnecting the different Availability Zones;

- The provision, maintenance in operational condition, and security condition of the technical equipment necessary for the proper functioning of the network and the isolation of different clients.

The interconnection of the SPONSORING Tenant's network to the Internet or private networks, and the network equipment, operator links, and other technical components implementing this interconnection, are not part of the Service scope. This network interconnection is implemented in accordance with the provisions set out in the Contract.

### 7.2.6. Backup infrastructure

The Service Provider provides the SPONSOR with an integrated, dedicated, and managed backup service for the protection of its virtual machines. The Service Provider ensures the maintenance in operational condition and security condition of this backup service. The Service Provider guarantees that the SPONSOR's backups will be located outside the Availability Zone of the backed-up workloads, provided that the SPONSOR has subscribed to the appropriate Units of Work.

This backup service is limited to the backup of virtual machines and topology configurations of the SPONSOR Tenants' IaaS environment within the scope of the Service. The development and implementation of an appropriate backup policy by the SPONSOR depend on the subscription to specific units of work. It is therefore the responsibility of the SPONSOR to ensure the availability of the necessary technical resources from the Service Provider to implement its backup policy or to adjust the latter according to available means.

The Service Provider undertakes to notify the SPONSOR in case of capacity constraints and to provide advisory assistance for resource optimization. The Service Provider's obligations will be limited to the implementation of the needs expressed by the SPONSOR in terms of backup policy, within the subscribed resources.

### 7.2.7. Implementation of disaster recovery or business continuity solutions

The Service Provider provides the SPONSOR with all the necessary technical solutions to ensure optimal distribution of its resources across various Availability Zones. It is the responsibility of the SPONSOR to effectively manage this resource distribution, for which they have the ability to use the Service Provider's available tools.

## 7.3. Limitations of services in the qualified IaaS model

### 7.3.1. Managed services in RUN

It is important to note that the following are excluded from the Service:

- Hosting of the SPONSOR's physical components;

- Network interconnection of the SPONSOR Tenant to the Internet or private networks, including operator links;

- Any managed service or TMA;

- Any assistance on virtual machines at the OS level and above in the IaaS responsibility stack, even if it is simple supervision.

That being said, it is not entirely excluded that the SPONSOR may resort to such services from the Service Provider's MSP offer to intervene in managed services mode on their Tenants. These services will not be covered by this Service Agreement and its bilateral commitments/clauses.

### 7.3.2. Backup configuration

By default, the Service Provider provides the setup of IaaS resources to the SPONSOR by reserving resources and configuring deployments to use Availability Zones. It is up to the SPONSOR to choose the Availability Zones via the SPONSOR interface.

### 7.3.3. Backup configuration

The backup service is limited to backing up virtual machines and topology configurations representing the SPONSOR Tenants' IaaS environment within the scope of the Service.

The backup service and the completion of the SPONSOR's backup policy are subject to the subscription of necessary storage space on the mass storage to ensure the service. Therefore, it is the responsibility of the SPONSOR to subscribe to the necessary technical resources from the Service Provider to enforce the backup policy on its IT perimeter, or to adjust the backup policy to the resources implemented. The Service Provider undertakes to inform the SPONSOR in case of technical capacity limitation.

The Service Provider will implement the necessary technical and human resources to back up the hosted system within the subscribed resources by the SPONSOR.

Furthermore, in unsupported perimeters by the Service Provider, it is up to the SPONSOR to define its own backup strategy and configure its own VM backups or submit a Service Request to the Service Provider to set up physical server backups if the SPONSOR has a managed service contract allowing the Service Provider to act via the SPONSOR interface, which is the administration console provided under this Service Agreement and has functionalities to configure backups.

Additionally, this service will only commit to configuring as specified by the SPONSOR through the SPONSOR interface.

For flexibility in the Service Provider's offer, the SPONSOR has the option to apply a no-backup policy on some of its VMs. In this case, the SPONSOR assumes this choice. The Service Provider will not back up the VMs associated with the "no backup" policy. The Service Provider alerts the SPONSOR that choosing the "no backup" policy or manual backup exposes the SPONSOR to permanent data loss in case of an Incident on lower layers or layers depending on its responsibility in the IaaS model. In such a case, it will be impossible to hold the Service Provider responsible for restoring data as there will be nothing to restore. The Service Provider recommends always backing up the VMs.

For any matters concerning the OS installed on a virtual machine and any software or program running "on top of the OS," it is the responsibility of the SPONSOR to carry out administration and supervision operations within the European Union if they wish to ensure that the entire verticality of the IT layers is operated and managed from the European Union. Administration operations outside the responsibility scope of the Service Provider under this Service Agreement are indicated in the "Shared Responsibility Model" section of this Service Agreement.

## 7.4. Service implementation

### 7.4.1. Technical prerequisites

For the implementation of the Service, the SPONSOR acknowledges that it will have to:

- Operate with VMware virtualization supported by the provider in the versions provided by the Service within the Service scope;

- Use the backup tool via the Service Provider;

- Declare fixed IPs from which the Service Provider will allow access to the SPONSOR interface (whitelisting). IP list modifications must be made via Service Requests (list not manageable from the Service administration interface).

## 7.5. Service location in France

It is specified that none of the operations and no physical components involved in providing the Service, which this Service Agreement is subject to, are located outside the European Union.

This includes, in particular, support, operational supervision, and infrastructure security (SOC) overseeing the Service delivery. Thus, all storage, administration tasks, supervision, and processing are carried out in France.

### 7.5.1. Location of Datacenters hosting the Service

Except for operations by the Service Provider's staff and agencies, all production operations (including data storage and processing) and technical components delivering the Service are located in Datacenters based in France.

### 7.5.2. Location of Cloud Temple agencies operating the service

Cloud Temple staff working on the Service scope operate from Cloud Temple agencies exclusively located in France. These agencies are located in France, in Tours, Lyon, Caen, and Paris La Défense.

The SPONSOR is informed of the possibility for Cloud Temple employees to work remotely. However, the Service Provider guarantees the same level of security for remote access, particularly concerning VPN access. These remote accesses are implemented in accordance with the requirements of the SecNumCloud framework.

## 7.6. Support

### 7.6.1. Nature of the support accompanying the service

The Service Provider provides a technical support service aimed at assisting the SPONSOR in managing, troubleshooting, and optimizing their deployed resources. This service covers a wide range of activities, from initial service configuration assistance to advanced technical support for resolving specific issues.

Here is a description of the support service's features and functionalities:

- Assistance with the initial implementation of the Service use;
- Assistance in incident resolution;
- Assistance in problem resolution;
- Monitoring and advice on technical foundation optimization.

Dans le cadre du service de support, le Prestataire ne se substitue pas au COMMANDITAIRE dans l'usage du Service. Le COMMANDITAIRE reste entièrement responsable de la configuration, de l'exploitation de ses VM et de ses Tenants, et de la gestion de tous les éléments (données et applications incluses) qu'il a stockés ou installés sur les infrastructures du Prestataire. Le service de support technique est fourni en accord avec les Conditions Générales de Vente et d'Utilisation, le Prestataire étant tenu à une obligation de moyens.

Le COMMANDITAIRE s'engage à utiliser le service de support technique de manière raisonnable, s'abstenant notamment de solliciter des services non souscrits auprès du Prestataire et de faire intervenir les équipes du Prestataire auprès de ses propres clients ou de tiers non inclus dans le Contrat. Le Prestataire se réserve le droit de rejeter toute demande de service ne respectant pas ces critères.

Le niveau d'engagement du support est conditionné à la souscription des unités d'œuvre de support associées.

### 7.6.2. Sollicitation du service support technique

Le support technique est accessible par le biais d'un système de tickets via la console COMMANDITAIRE et est disponible durant les heures normales de bureau hors jours fériés (8h - 18h ; Lundi -- Vendredi ; calendrier et horaires français). Pour les urgences survenant en dehors des heures ouvrées, notamment les incidents affectant significativement la production, le service d'astreinte peut être joint via un numéro communiqué au COMMANDITAIRE à l'initialisation du Service.

Pour chaque demande ou Incident, il est impératif de générer un ticket auprès du support du Prestataire. L'initialisation de ce ticket, comprenant toutes les informations nécessaires, est essentielle et marque le début de l'évaluation des engagements du Prestataire.

Dès que le Prestataire reçoit une demande ou une notification d'Incident, que ce soit par le biais de la console de gestion ou à la suite d'un appel téléphonique, un ticket est automatiquement créé. Lors de la déclaration d'un Incident, il est essentiel que le COMMANDITAIRE fournisse au prestataire un maximum de détails sur le problème rencontré. Cette démarche est cruciale pour permettre une évaluation adéquate de la situation, sa priorisation et un diagnostic efficace.

Le Client reçoit alors une confirmation par courriel, indiquant la création du ticket et son numéro unique. Le COMMANDITAIRE peut consulter le statut et l'historique de ses demandes et déclarations d'Incidents directement depuis la console de gestion.

### 7.6.3. Processus de gestion des Incidents

Lors d'une déclaration d'un Incident, l'équipe de support technique du Prestataire initie une investigation pour identifier la cause du problème et établir un diagnostic. Le Client doit collaborer activement avec le Prestataire en fournissant toutes les informations nécessaires et en effectuant les tests requis. Le Prestataire peut accéder au Service du Client pour diagnostiquer l'Incident.

Si les Services du Prestataire sont jugés fonctionnels et que l'Incident ne lui est pas imputable, le Client en sera informé. À la demande du Client, le Prestataire peut proposer des Services Professionnels pour identifier l'origine du problème, facturable sur accord préalable par tranche de 30mn.

Dans le cas où l'Incident est de la responsabilité du Prestataire ou de l'un de ses sous-traitants, celui-ci complète le diagnostic et s'attèle à la restauration du Service sans frais supplémentaires. Le diagnostic s'appuie sur les échanges entre les Parties et les données du Prestataire, ces éléments étant considérés comme probants par accord des Parties.

### 7.6.4. Processus de priorisation des traitements

La détermination du niveau de priorité d'un dossier repose sur une analyse matricielle qui évalue l'impact de l'Incident et son degré de criticité :

- Les niveaux d'impact sont définis de la manière suivante :

| Niveau d'impact | Description                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impact I1       | Le ou les services du Prestataire sont interrompus                                                                    |
| Impact I2       | Le ou les services du Prestataire sont dégradés                                                                       |
| Impact I3       | Le ou les services du Prestataire sont actuellement stable, mais montrent des signes de potentiel déclin à long terme |

- Les niveaux de Criticités sont définis de la manière suivante :

| Niveau de criticité | Description                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Criticité C1        | Le ou les services du Prestataire se dégradent à une vitesse préoccupante                               |
| Criticité C2        | Le ou les services du Prestataire se détériore progressivement au fil du temps                          |
| Criticité C3        | Le ou les services du Prestataire présentes un ou plusieurs inconvenient sans conséquence significative |

- Sur la base d'une analyse approfondie de la situation, prenant en compte les éléments déterminant l'Impact et la Criticité, une priorité est attribuée au ticket conformément à la matrice de décision ci-après :

| Niveau d'impact <br/> \ Niveau de criticité | Impact I1       | Impact I2       | Impact I3       |
| ------------------------------------------- | --------------- | --------------- | --------------- |
| Criticité C1                                | Priorité **P1** | Priorité **P2** | Priorité **P3** |
| Criticité C2                                | Priorité **P2** | Priorité **P3** | Priorité **P4** |
| Criticité C3                                | Priorité **P3** | Priorité **P4** | Priorité **P5** |

Les engagements de niveau de service correspondant à chaque niveau de priorité sont détaillés dans le chapitre suivant.

### 7.6.5. Langue et localisation du service de support

Le support est fourni par le Prestataire au COMMANDITAIRE a minima en langue française. Le support peut être également fourni en langue anglaise.

Les opérations du service de support du Prestataire pour l'offre de service d'infrastructure qualifiée SecNumCloud sont situées dans l'Union Européenne.

# 8. Engagements et niveaux de services

Le Prestataire s'engage à garantir une surveillance continue de la performance et de l'intégrité sécuritaire de son infrastructure technique délivrant le Service, veillant à leur fonctionnement optimal.

L'indisponibilité d'un service, faisant l'objet d'un indicateur de performance, est reconnue dès son identification par le système de supervision du Prestataire, ou suite à une notification par un utilisateur du COMMANDITAIRE. Le début de l'indisponibilité est fixé au moment le plus précoce entre ces deux événements, afin de garantir un décompte précis et juste du temps d'indisponibilité.

La fin de l'indisponibilité est officiellement marquée par la restauration complète du service, confirmée soit par les outils de supervision du Prestataire, soit par un retour utilisateur, assurant ainsi une reprise effective des opérations et une mesure fidèle de la durée de l'interruption.

## 8.1. Engagements de disponibilité de l'infrastructure

Le Prestataire s'engage à maintenir un niveau de disponibilité et de performance conforme aux standards définis pour chaque période spécifiée. Les engagements de niveau de service (Service Level Agreements, SLAs) s'appliquent sous réserve que le COMMANDITAIRE implémente ses systèmes à travers au moins deux des Zones de disponibilité présentes dans la Région concernée.

En l'absence de respect de ces conditions par le COMMANDITAIRE, celui-ci se verra dans l'incapacité de revendiquer l'application des SLAs concernés, lesquels sont spécifiquement identifiés par un astérisque (\*). L'accessibilité aux SLAs se fait via l'interface COMMANDITAIRE. Les mesures s'entendent calculées mensuellement :

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilité de la puissance de calcul (Compute) : taux de disponibilité garanti de 99,99%, calculé sur une base 24h/24, 7j/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilité du stockage : taux de disponibilité garanti de 99,99%, calculé sur une base 24h/24, 7j/7.
- **SLA 3     : IC-INFRA_SNC-03** – Fiabilité de la sauvegarde : taux de disponibilité garanti de 99,99%, calculé sur une base 24h/24, 7j/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilité de l'infrastructure réseau : taux de disponibilité garanti de 99,99%, calculé sur une base 24h/24, 7j/7.
- **SLA 5     : IC-INFRA_SNC-05** – Accès Internet : taux de disponibilité garanti de 99,99%, calculé sur une base 24h/24, 7j/7.

_**Remarques**_ :

- *En réponse une attaque par déni de service distribué (DDoS), le Prestataire se réserve le droit d'ajuster sa configuration de routage internet pour limiter l'impact de cette attaque et sauvegarder son infrastructure. En particulier, si une adresse IP appartenant au COMMANDITAIRE est ciblée, le Prestataire peut recourir à la technique de blackholing via la communauté BGP pour bloquer tout le trafic vers l'adresse IP visée en amont chez ses fournisseurs, dans le but de protéger les ressources du COMMANDITAIRE ainsi que celles d'autres COMMANDITAIREs et de l'infrastructure du Prestataire. Le Prestataire encourage vivement le COMMANDITAIRE à adopter des mesures similaires, telles que l'utilisation de logiciels de pare-feu d'applications web disponibles sur le marché, et à configurer soigneusement ses groupes de sécurité via l'API de commande.*
- *The Provider insists on the necessity for the CLIENT to minimize the opening of flows, notably by avoiding making administrative ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 8.2. Availability Commitment of the CLIENT Interface

-   SLA 6 : IC-INFRA_SNC-06 -- Access to the administration console of the Service: a guaranteed availability of 97%, ensured continuously, 24 hours a day, 7 days a week.
-   SLA 7 : IC-INFRA_SNC-07 -- Access to the Service's management APIs: an availability of 99.9%, calculated on a 24/7 basis.

## 8.3. Support Availability Commitment

- **SLA 8      : IC-INFRA_SNC-08** – Here are the performance commitments of the Provider's technical support for incidents, excluding planned maintenance:

| Priority         | Guaranteed Intervention Time (GIT) | Performance Target      |
| ---------------- | ---------------------------------- | ----------------------- |
| Priority **P1**  | 30min                              | 95%                     |
| Priority **P2**  | 2h                                 | 90%                     |
| Priority **P3**  | 4h                                 | 90%                     |
| Priority **P4**  | 24h                                | 85%                     |
| Priority **P5**  | 48h                                | 85%                     |

- **SLA 9      : IC-INFRA_SNC-09** – Here are the performance commitments of the Provider's technical support for service requests:

|                    | Guaranteed Intervention Time (GIT) | Performance Target      |
| ------------------ | ---------------------------------- | ----------------------- |
| Service request    | 4h                                 | 90%                     |

*Note:*

- *The Guaranteed Intervention Time (GIT) is calculated from the difference between the moment the CLIENT opens the ticket and the first intervention by the Provider's support.*
- *Incident investigation concerning the CLIENTs will not include remote intervention on the hosted servers of the CLIENT. This assistance will be limited to explaining the available metrics related to the CLIENT's environment, to facilitate understanding of the incidents or performance issues encountered. Based on the results of this analysis, recommendations may be suggested.*

## 8.4. Availability Commitment of Object Storage S3

- **SLA 10      : IC-INFRA_SNC-10** – Here are the availability commitments for object storage S3:

| Indicator         | Commitment                                      | Availability Target         |
| ----------------- | ------------------------------------------------| --------------------------- |
| IC-INFRA-SNC-10.1 | Durability of storage of an object in a region  | 99.9999999% / year          |
| IC-INFRA-SNC-10.2 | Availability of the Object Storage S3 API       | 99.99%                      |
| IC-INFRA-SNC-10.3 | Maximum latency for accessing an object in a region | 150 ms                   |

Notes:

- The Object Storage Service is specifically designed for object storage and must be used solely for this purpose, **categorically excluding its use in block mode**. Employing block mode through unconventional methods, including, for example, using *"FUSE" in a Linux environment*, constitutes a breach of the stated terms of use. Any incident, malfunction, or damage resulting from this non-compliant use will not be covered by the Service Level Agreements (SLAs) defined in this service agreement.
- The durability guarantee is conditioned on use of the services in line with current best practices and standards, and explicitly excludes any modification of the data, whether intentional or accidental, resulting from actions undertaken by the CLIENT.

## 8.5. Clarification on Backup Commitment

The backup strategy deployed for the CLIENT is conditioned by the subscription to the appropriate units of work.

The Provider commits to providing a backup solution that will enable the CLIENT to apply the intended backup policies.

It is specified that the Provider's scope ends at providing a backup service, and it is the CLIENT's responsibility to monitor through the CLIENT interface the proper execution of the associated policies.

It is specified that management of the backup storage space's capacities falls under the CLIENT'S charge and responsibility. The Provider provides the usage rate via the console.

*Example: Failure to back up a virtual machine:*

*It is the CLIENT's responsibility to verify / monitor the proper execution of the backup policies. Should the CLIENT notice that a virtual machine is not backed up, it is their responsibility to determine the cause, and the CLIENT may contact the Provider's Support according to the subscribed support level for assistance.*

**SLA 8 : IC-INFRA_SNC-08 and SLA 9**, will be exclusively applicable in the event of a backup service incident.

# 9. Organization of the Contractual Relationship


## 9.1. Provider Responsibilities

The Provider commits to:

- adequately informing its CLIENT (for example, in case of resource capacity limitations delivering the Service).

- formally informing the CLIENT and within a one-month period, of any legal, organizational, or technical change that may impact the Service's compliance with protection requirements against extra-European laws (19.6 of the SNC v3.2 framework).

- providing the CLIENT with interfaces and service interfaces that are at least in French.

- studying and considering the specific sectoral requirements related to the type of information entrusted by the CLIENT in the service's implementation, within the Provider's responsibility limits.

- not disclosing any information related to the service to third parties, except with the CLIENT’s formal and written authorization.

- providing all the necessary information for conducting compliance audits in accordance with Article 28 of the GDPR.

- reporting to the CLIENT, through this Service Agreement, any security incident impacting the Service or its usage by the CLIENT (including CLIENT data).

- allowing a qualified information systems security audit provider (PASSI) mandated by the Provider, to audit the service and its information system, according to the Provider's SecNumCloud control plan. Additionally, the Provider commits to providing all necessary information for conducting compliance audits with Article 28 of the GDPR, performed by the client or a mandated third party.

- providing, as a subcontractor, in accordance with Article 28 of the General Data Protection Regulation (GDPR), assistance and advice to the CLIENT by alerting them whenever an instruction issued by the latter is likely to constitute a violation of data protection rules.

- notifying in writing, when a project impacts or is likely to impact the Service's security level, the CLIENT of potential impacts, mitigation measures implemented, and remaining risks concerning them.

- documenting and implementing all necessary procedures to comply with the legal, regulatory, and contractual requirements applicable to the service, as well as the CLIENT's specific security needs, defined by the latter and provided in the Contract. Upon the CLIENT's request, the Documentation module of the CLIENT interface will allow secure sharing of these documents.

- providing, upon the CLIENT's request, elements for assessing the risks related to submitting CLIENT data to the jurisdiction of a non-EU state.

Upon formal and written request from the CLIENT, the Provider commits to:

1. Making the Provider's internal regulations and ethics charter accessible to the CLIENT;

2. Making the CLIENT aware of the penalties in case of security policy breaches;

3. Providing the CLIENT with all events concerning them in the Service's logging elements;

4. At the end of the Contract, the Provider commits to erasing the data and technical Data related to the CLIENT, in accordance with the "end of Contract data erasure procedure" described in this Service Agreement.

5. Ensuring secure deletion of all CLIENT data by complete overwriting of any media that hosted their data as part of the Service.

6. Providing a complete list of third parties authorized to access the infrastructure holding the data.
Le Provider will keep up-to-date and make available to the CLIENT the exhaustive list of third parties authorized to access the infrastructures carrying the data, informing the latter of any changes related to subcontractors. The Provider and all its subsidiaries commit to respecting the core values of the European Union, namely human dignity, freedom, democracy, equality, the rule of law, and respect for Human Rights. The service provided by the Provider complies with the legislation in force regarding fundamental rights and the values of the European Union relating to respect for human dignity, freedom, equality, democracy, and the rule of law.

## 9.2. Limitation of the Provider's Liabilities

Given all the definitions and conditions mentioned in this Service Agreement, the liabilities of the Provider are limited as follows:

1. The shared responsibility model, described in the "Shared Responsibility Model" section of this Service Agreement, in effect limits the Provider's involvement in the operational layers above the provision of computing, network, storage, and backup resources. This particularly excludes but is not limited to:

    -   The management of what is installed on the virtual machines (OS, middleware, applications, etc.);

    -   The updating of OS and other software installed by the CLIENT on its machines in its Tenants;

    -   The security of programs, software, and applications installed on the virtual machines;

    -   The updating of virtual machines;

    -   The application-level data backup.

2.  The Provider cannot commit to the backup of the CLIENT's Tenants without the CLIENT having beforehand subscribed to appropriate work units.

3.  The Provider cannot claim ownership of the data transmitted and generated by the CLIENT. Indeed, these fall under the CLIENT's property.

4.  The Provider emphasizes that it cannot, under any circumstances, exploit the data transmitted and generated by the CLIENT without the latter's prior validation.

5.  The Provider disclaims all liability on components physically hosted and managed by the Provider but directly owned by the CLIENT or a third party with which the CLIENT has contracted. The hosting of physical components of the clients is not part of the Service and is therefore outside the scope of this Service Agreement. It is the CLIENT's responsibility to assess the level of adherence or dependency that these components introduce towards the certified IaaS SecNumCloud Service.

## 9.3. Access Limitation

Within the framework of the Service, the Provider is formally prohibited from accessing the Tenants belonging to the CLIENT without prior authorization. It is the responsibility of the CLIENT to provide the necessary access to the Provider's personnel, according to the specific needs of the hosting, and, if applicable, the professional support services, if this option has been chosen by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for the needs related to the agreed services, ensuring secure management in accordance with the terms of the agreement.

Remote access by third parties involved in the Provider's service delivery is strictly prohibited. In the event that a specific technical requirement necessitates such access, it can only be established after having clearly notified the CLIENT, provided a detailed justification, and obtained its written consent.

This measure guarantees control and security of the CLIENT's data, ensuring that any exception to the rule is duly authorized and documented.

## 9.4. Responsibilities of Third Parties Participating in the Provision of the Secure Temple Service

The Provider controls the list of third-party partners participating in the provision of the Service. These third parties include editors, providers (of the Provider), and other suppliers participating in the Service delivery. The Provider applies the following measures to these third parties:

-   The Provider requires third parties participating in the service implementation, within their contribution to the Service, to maintain a security level at least equivalent to the one it commits to in its own security policy applicable to the Secure Temple service;

-   The Provider contracts, with each of the third parties participating in the service implementation, audit clauses allowing a qualifying body to verify that these third parties comply with legal and SNC requirements, allowing the Provider to meet its commitments in this Service Agreement.

-   The Provider implements a procedure allowing regular control of the measures put in place by third parties participating in the service implementation to meet the Provider's commitments in this Service Agreement.

-   The Provider implements a procedure to track changes made by third parties participating in the service implementation that could affect the information system security level of the service.

## 9.5. Responsibilities and Obligations of the CLIENT

To remind, the Provider supplies the CLIENT with a virtual machines execution platform, the configuration of which is the CLIENT's responsibility. Each virtual machine cannot operate without an associated backup policy. The Provider defines automatic backup policies through its interfaces. However, it is the CLIENT's responsibility to activate these backup policies and thereby activate the virtual machines.

The CLIENT authorizes ANSSI and the SNC qualification body to audit the Service and the technical infrastructure delivering the Service.

## 9.6. CLIENT’s Rights

At any time during the contractual relationship, the CLIENT may file a complaint regarding the qualified service with ANSSI.

At any time, the CLIENT may request the Provider to make its internal regulations and ethical charter accessible.

## 9.7. Data Erasure at the End of the Contract

At the end of the contract, whether it expires or is terminated for any reason, the Provider commits to the secure erasure of all CLIENT data, including technical data. The Provider will ensure to communicate a formal notice to the CLIENT, respecting a period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To attest to this deletion, the Provider will provide the CLIENT with a certificate confirming the data erasure.

# 10. Lifecycle of this Service Agreement

## 10.1. Effective Date of the Service Agreement

This Service Agreement comes into effect on the day it is signed by the CLIENT.

The collection, handling, storage, and processing of data made within the framework of pre-sales, implementation, and stopping of the Service are carried out in compliance with the legislation in force.

## 10.2. Amendments to the Service Agreement

Changes or additions to this Service Agreement result exclusively from requests made by the governance bodies designated for this purpose. These change proposals will be reviewed by the Parties, authorized to determine the aspects requiring formal written agreement.

It is agreed that any amendment to the Service Agreement, after validation, that alters the originally established financial conditions, will require the preparation and signing of an addendum to the current Contract.

Factors that may lead to a revision of this Service Agreement include but are not limited to:

-   Evolution of the technical infrastructure delivering the IaaS Service;
-   Adjustments made to the services deployed by the Provider to provide the Service;
-   Variations in the commitments made and applicable penalties;
-   Organizational reconfigurations within the CLIENT or the Provider;
-   Expansion or reduction of the Service's scope.

The version and revision management of the Service Agreement is recorded at the document's preamble for easy tracking.

### 10.2.1. Amendments Triggered by the CLIENT

Service Agreement amendments may notably originate from:

-   Evolution of the infrastructure managed by the Provider;

-   Modification of the services implemented by the Provider;

-   Modification of the service level commitments by the Provider.

### 10.2.2. Amendments Triggered by the Provider

Any modification of the Service Agreement is subject to the CLIENT's acceptance. It is understood that any validated modification or addition altering the financial elements of the Contract may involve signing an addendum to it.

## 10.3. Reversibility

Furthermore, Cloud Temple commits to allowing a revision of this Service Agreement (including its termination) without penalty for the CLIENT in the event of a loss of the SecNumCloud qualification.
Les Services ne comprennent pas d'obligation de réversibility (i.e., assistance to the Client for migrating their system to another provider) except for the provision of the CLIENT interface by the Provider, which allows the CLIENT to backup and recover their data including, among others, the configuration data of their information system via one of the following technical modalities chosen by the CLIENT: making files available in one or more documented and exploitable formats outside the service provided by the Provider or through the implementation of technical interfaces allowing access to data following a documented and exploitable schema (API).

The CLIENT, as the sole master of their system, must do everything possible to facilitate this operation as needed (which implies, among other things, setting up rigorous documentation for this purpose) and developing reversibility plans. If the CLIENT requires an additional service, the Provider can offer an advisory mission in this regard under a specific contract to be negotiated.

# 11. Availability, Continuity, and Restoration of the Service

## 11.1. Incident and Interruption Management

### 11.1.1. Incidents

#### 11.1.1.1. Types of Incidents Treated Under This Service Agreement

-   Disasters

-   Breakdowns and failures

-   Security incidents:

-   Impacting service availability

-   Impacting service confidentiality

-   Impacting service integrity

#### 11.1.1.2. Incident Handling

-   Deadlines

-   Post-incident actions

-   Archive documents detailing security incidents.

-   Notification of personal data breach (online): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Level of Notification for Security Incidents

The CLIENT is responsible for choosing the severity levels of security incidents they wish to be informed about, for example, through their formalization in an SLA applicable to the Service.

By default, the CLIENT is informed of:

-   Security incidents with impact (impacts I1 and I2 according to the impact scale defined in the treatment prioritization process of this Service Agreement);

-   Personal data breaches for which the CLIENT is the data controller;

-   Personal data breaches for which the Provider is the data controller and that involve the CLIENT's personal data.

## 11.2. Service Maintenance

### 11.2.1. Nature of Maintenance

The maintenance provided involves the implementation of:

-   The plan to maintain the operational conditions of the Service to ensure good availability indicators as committed by the Provider above;

-   The BCP/DR plan if subscribed by the CLIENT triggered according to any incidents that may occur.

### 11.2.2. Remote Access by Cloud Temple on the CLIENT's Scope

The Provider is prohibited, under this Service Agreement, from accessing the CLIENT's Tenants and interface space.

It will be the CLIENT's responsibility to provide the necessary access to the Provider's staff. The CLIENT acknowledges that the access will be used in the context of hosting and ultimately outsourcing (if subscribed by the CLIENT).

### 11.2.3. Third-Party Remote Access Participating in Service Provision on the CLIENT's Scope

No remote access by third parties involved in the Service provision is authorized.

If a technical need makes this scenario necessary, then such access would only be performed after notifying the CLIENT, providing justification, and obtaining their written consent.

# 12. Data Deletion Procedure at the End of the Contract

At the end of the Contract, whether at its term or for any other reason, the Provider will ensure the secure deletion of all data processed under the Service, including the CLIENT's technical data. The Provider will give formal notice respecting a twenty-one (21) calendar day period. CLIENT's data will be deleted within a maximum period of thirty (30) days after notification. The Provider will provide a data deletion certificate to the CLIENT.

# 13. Applicable Law

## 13.1. General Provisions

The applicable law governing this Service Agreement is French law.

## 13.2. Compliance with Applicable Laws and Regulations

The Provider commits to the following points:

-   Identifying the applicable legal and regulatory constraints in the context of the Service;

-   Complying with the applicable legal and regulatory constraints on the data entrusted to the Provider;

-   Complying with the Data Protection Act and the GDPR;

-   Implementing personal data protection measures;

-   Implementing a legal and regulatory monitoring process;

-   Maintaining appropriate relationships or monitoring with sectoral authorities related to the nature of the data processed under the Service. This includes notably ANSSI, CERT-FR, and CNIL.

## 13.3. GDPR

Acting as a data processor within the meaning of Article 28 of the General Data Protection Regulation (GDPR), the Provider commits to:

-   Ensuring transparency and traceability;

-   Appointing a DPO responsible for defining and implementing personal data protection measures;

-   Providing assistance and advice to the CLIENT and alerting them if an instruction from the latter constitutes a violation of personal data protection rules if the Provider is able to identify it;

-   Guaranteeing the security of the processed data (due to the SecNumCloud qualification).

## 13.4. Protection Against Extra-European Law

If the Provider resorts to the services of a third-party company - including a subcontractor - with its statutory seat, central administration, or principal place of business within a non-EU country or owned or controlled by a third-party company domiciled outside the European Union within the scope of the Service, the Provider commits that this third-party company will not have access to the data operated by the 'Secure Temple' service.

To recall, the targeted data are those entrusted to the Provider by the CLIENT as well as all Technical Data including information about the CLIENTS.

For the purposes of this article, control is understood as mentioned in II of Article L233-3 of the Commercial Code.

# 14. SIGNATURES

Made in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, on
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For Cloud Temple, the PROVIDER

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the CLIENT