---
title: IaaS Service Agreement
---
  
![Cloud Temple Logo](images/ct.png)

# 1. **IaaS SERVICE AGREEMENT**

| **Recipients:**                    | **SPONSOR**                             |
| :--------------------------------- | :-------------------------------------- |
| **Document Reference**             | CT.AM.JUR.ANX_IaaS_Service_Agreement_v2.0 |
| **Your contacts**                  | *First Name* *Last Name*                |
|                                    | Account Manager                         |
|                                    | email: *first.name*@cloud-temple.com    |
| **Last update date**               | 04/03/2024                              |
| **Contractual validation date**    | Day DD YYYY                             |

----------------------------------------------------------------------------------

| **Version** | **Date**   | **Action**                             | **Author**        |
| ----------- | ---------- | -------------------------------------- | ----------------- |
| v0.1        | 06/07/2022 | Initial drafting                       | Lorena ALCALDE    |
| v0.2        | 09/14/2022 | Enrichment                             | Lorena ALCALDE    |
| v1.0        | 12/30/2022 | Integration of Indicators              | Lorena ALCALDE    |
| v1.1        | 01/23/2023 | Footer modification                    | Lorena ALCALDE    |
| v1.2        | 05/22/2023 | Enrichment                             | Lorena ALCALDE    |
| v1.3        | 06/29/2023 | Enrichment                             | Lorena ALCALDE    |
| v1.4        | 11/06/2023 | Capital Modification and Enrichment    | Lorena ALCALDE    |
| v1.5        | 11/30/2023 | Enrichment                             | Lorena ALCALDE    |
| v1.6        | 03/21/2024 | Enrichment                             | Lorena ALCALDE    |
| v2.0        | 03/29/2024 | SNC compliance adjustments             | Nicolas ABRIOUX   |
| v2.0        | 04/03/2024 | Publication                            | Lorena ALCALDE    |

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
  - [7.1. Shared responsibility model](#71-shared-responsibility-model)
  - [7.2. Detailed service scope presentation](#72-detailed-service-scope-presentation)
    - [7.2.1. Datacenters Infrastructure](#721-datacenters-infrastructure)
    - [7.2.2. Service Management Software Infrastructure](#722-service-management-software-infrastructure)
    - [7.2.3. Computing Infrastructure](#723-computing-infrastructure)
    - [7.2.4. Storage Infrastructure](#724-storage-infrastructure)
    - [7.2.5. Global Network Infrastructure](#725-global-network-infrastructure)
    - [7.2.6. Backup Infrastructure](#726-backup-infrastructure)
    - [7.2.7. Implementation of business continuity or disaster recovery solutions](#727-implementation-of-business-continuity-or-disaster-recovery-solutions)
  - [7.3. Service limitations in the qualified IaaS model](#73-service-limitations-in-the-qualified-iaas-model)
    - [7.3.1. Managed services in RUN](#731-managed-services-in-run)
    - [7.3.2. Backup configuration](#732-backup-configuration)
    - [7.3.3. Backup setup](#733-backup-setup)
  - [7.4. Service implementation](#74-service-implementation)
    - [7.4.1. Technical prerequisites](#741-technical-prerequisites)
  - [7.5. Service localization in France](#75-service-localization-in-france)
    - [7.5.1. Localization of Datacenters hosting the Service](#751-localization-of-datacenters-hosting-the-service)
    - [7.5.2. Localization of Cloud Temple agencies operating the service](#752-localization-of-cloud-temple-agencies-operating-the-service)
  - [7.6. Support](#76-support)
    - [7.6.1. Nature of support accompanying the service](#761-nature-of-support-accompanying-the-service)
    - [7.6.2. Requesting technical support](#762-requesting-technical-support)
    - [7.6.3. Incident management process](#763-incident-management-process)
    - [7.6.4. Treatment prioritization process](#764-treatment-prioritization-process)
    - [7.6.5. Language and location of the support service](#765-language-and-location-of-the-support-service)
- [8. Commitments and service levels](#8-commitments-and-service-levels)
  - [8.1. Infrastructure availability commitments](#81-infrastructure-availability-commitments)
  - [8.2. Interface SPONSOR availability commitment](#82-interface-sponsor-availability-commitment)
  - [8.3. Support availability commitment](#83-support-availability-commitment)
  - [8.4. S3 object storage availability commitment](#84-s3-object-storage-availability-commitment)
  - [8.5. Backup commitment clarification](#85-backup-commitment-clarification)
- [9. Contractual relationship organization](#9-contractual-relationship-organization)
  - [9.1. Provider's responsibilities](#91-providers-responsibilities)
  - [9.2. Provider's liabilities limitation](#92-providers-liabilities-limitation)
  - [9.3. Access limitation](#93-access-limitation)
  - [9.4. Responsibilities of third parties involved in providing the Secure Temple service](#94-responsibilities-of-third-parties-involved-in-providing-the-secure-temple-service)
  - [9.5. SPONSOR's responsibilities and obligations](#95-sponsors-responsibilities-and-obligations)
  - [9.6. SPONSOR's rights](#96-sponsors-rights)
  - [9.7. Data erasure at the end of the Contract](#97-data-erasure-at-the-end-of-the-contract)
- [10. Life cycle of this Service Agreement](#10-life-cycle-of-this-service-agreement)
  - [10.1. Service Agreement effective date](#101-service-agreement-effective-date)
  - [10.2. Service Agreement evolutions](#102-service-agreement-evolutions)
    - [10.2.1. Evolutions triggered by the SPONSOR](#1021-evolutions-triggered-by-the-sponsor)
    - [10.2.2. Evolutions triggered by the Provider](#1022-evolutions-triggered-by-the-provider)
  - [10.3. Reversibility](#103-reversibility)
- [11. Service availability, continuity, and restoration](#11-service-availability-continuity-and-restoration)
  - [11.1. Incident and interruption management](#111-incident-and-interruption-management)
    - [11.1.1. Incidents](#1111-incidents)
      - [11.1.1.1. Types of Incidents covered under this Service Agreement](#11111-types-of-incidents-covered-under-this-service-agreement)
      - [11.1.1.2. Incident handling](#11112-incident-handling)
      - [11.1.1.3. Security Incident notification levels](#11113-security-incident-notification-levels)
  - [11.2. Service maintenance](#112-service-maintenance)
    - [11.2.1. Maintenance nature](#1121-maintenance-nature)
    - [11.2.2. Remote access by Cloud Temple on the SPONSOR's perimeter](#1122-remote-access-by-cloud-temple-on-the-sponsors-perimeter)
    - [11.2.3. Remote access by third parties involved in providing the service on the SPONSOR's perimeter](#1123-remote-access-by-third-parties-involved-in-providing-the-service-on-the-sponsors-perimeter)
- [12. Data erasure procedure at the end of the Contract](#12-data-erasure-procedure-at-the-end-of-the-contract)
- [13. Applicable law](#13-applicable-law)
  - [13.1. In general](#131-in-general)
  - [13.2. Compliance with applicable laws and regulations](#132-compliance-with-applicable-laws-and-regulations)
  - [13.3. GDPR](#133-gdpr)
  - [13.4. Protection against extra-European laws](#134-protection-against-extra-european-laws)
- [14. SIGNATURES](#14-signatures)

----------------------------------------------------------------------------------

# 3. Preliminary and Glossary

## 3.1. Preliminary

This document formalizes the Service Agreement associated with the SecNumCloud qualified IaaS service under the name "*Secure Temple*".

\"This service agreement supplements and is complementary to the general terms of sale and use of the Provider. It is
understood that contractual documents are interpreted coherently together. In case of contradiction or discrepancy between the
terms of the contractual documents, the documents will prevail over each other in the following order:

1. General Terms of Sale and Use (GTSU)
2. SecNumCloud IaaS Service Agreement
3. SecNumCloud PaaS Service Agreement
4. Specific Service Agreement
5. Security Assurance Plan (SAP)
6. Specific Terms of Use (STU)

## 3.2. Glossary

In this Service Agreement, the **SPONSOR**, the **Provider**, and the **Parties** are identified in the Contract
to which this Service Agreement is an annex.

The terms used in this Service Agreement will be interpreted in accordance with the definitions attributed to them below:

- **Change:** Any addition, modification or deletion impacting the Service, which has been authorized, planned, or taken care of.


- **Changement standard :** Change subject to a procedure, whose production methods and impacts (including financial) are known and accepted in advance by the Parties. It is then integrated into the standard changes catalog and may, in some cases, have a GTI and a GTR.

- **Contrat:** refers to the contract subscribed by the SPONSOR with the Provider to allow the SPONSOR to benefit from the Service, and to which this Service Agreement is attached.

- **Convention de service:** This document, established within the framework of a specific contract or the General Terms and Conditions of Sale and Use (CGVU), and in compliance with the requirements of the SecNumCloud Reference Framework.

- **Demande de service:** request from the SPONSOR to the Provider within the scope of the Service, covering operations that cannot be performed by the SPONSOR from the SPONSOR interface and support requests within the framework of the Service. Service requests are limited to those provided in the Contract or this Service Agreement.

- **Disponibilité:** Capacity to ensure availability and maintain optimal performance of the Service, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).

- **Données techniques:** includes all data handled to deliver the Service, notably including the identity of the beneficiaries and administrators of the technical infrastructure, technical infrastructure logs, access configuration, directory, certificates...

- **Evènement:** An "event" is any detectable or identifiable occurrence that may be significant for the management of the Service.

- **Hyperviseur:** Operating system that allows the execution of virtual machines on a compute blade.

- **Incident:** Any unexpected event that disrupts the normal functioning of the Service or compromises data security.

- **Incident de sécurité:** Any event within the scope of the Service:

  - Of intentionally malicious nature;
  - Of accidental nature that harms the integrity, confidentiality, or traceability of the Service or SPONSOR’s data;
  - That compromises existing security measures.
    Availability breaches of non-malicious origin are not considered security incidents (hardware failure, bug, malfunction, natural disaster...).

- **Interface COMMANDITAIRE:** Service administration interface provided to the SPONSOR by the Provider, encompassing a web administration console and an API.

- **Mise en production:** action(s) of administration carrying out the Change when approved (change, in the ITIL sense, only concerning change management and not its implementation/execution).

- **Problème:** cause of one or more recurring Incidents, cause of a potential Incident (risky situation).

- **Région:** refers to a geographically delimited collection of cloud availability zones, providing network, computing, and storage services to optimize latency, performance, and local regulatory compliance.

- **Service:** refers to the SecNumCloud qualified IaaS service "Secure Temple," delivered to the SPONSOR by the Provider from technical infrastructures maintained by the Provider, as described in the "Service Description" section of this Service Agreement.

- **Secure Temple:** refers to the SecNumCloud qualified IaaS service offered by Cloud Temple, as defined in the attestation consultable on the ANSSI website and provided in the annex of this Service Agreement.

- **Sinistre:** refers to a serious event of natural or human, accidental or intentional origin, causing significant losses and damages to the affected Party.

- **Supervision:** Monitoring of an Information System or a Service, involving the collection of various data such as measurements and alarms. This activity is limited to observation and tracking, without directly intervening on the monitored elements, a prerogative belonging to Administration operations.

- **Tenant:** An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining independence and security of data and applications.

- **Zone de Disponibilité (AZ) (Availability zone):** A specific and isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through geographical distribution of resources.

# 4. Acronyms

  | **Acronyme** | **Définition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Change advisory committee                                      |
  | **CMDB**     | Configuration Management Database -- Configuration management database                  |
  | **COPIL**    | Steering committee                                                                      |
  | **COSTRAT**  | Strategic committee                                                                     |
  | **COPROJ**   | Project committee                                                                       |
  | **DB**       | Database                                                                                |
  | **DRP**      | Disaster Recovery Plan                                                                  |
  | **GTE**      | Escalation Time Guarantee                                                               |
  | **GTI**      | Intervention Time Guarantee                                                             |
  | **GTR**      | Resolution Time Guarantee                                                               |
  | **ITIL**     | Information Technology Infrastructure Library - Best practices for IS management        |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Operational Conditions Maintenance                                                      |
  | **MOA**      | Project Owner                                                                           |
  | **MOE**      | Project Manager                                                                         |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating System                                                                        |
  | **PAQ**      | Quality Assurance Plan                                                                  |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Security Assurance Plan                                                                 |
  | **PASSI**    | Information Systems Security Audit Provider                                             |
  | **RFC**      | Request For Change                                                                      |
  | **RGPD**     | General Data Protection Regulation                                                      |
  | **RPO**      | Recovery Point Objective                                                                |
  | **RTO**      | Recovery Time Objective                                                                 |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement                                                                 |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Application Management                                                                  |
  | **UO**       | Unit of Work                                                                            |
  | **VABE**     | Operational Usability Validation                                                        |
  | **VABF**     | Functional Usability Validation                                                         |
  | **VM**       | Virtual Machine                                                                         |
  | **VSR**      | Regular Service Validation                                                              |

# 5. Subject of this Service Agreement

This Service Agreement establishes the terms and conditions under which the Provider commits to deliver the Service to the
SPONSOR. Its purpose is to:

- Specify the performance requirements expected by the SPONSOR in terms of Service functionality and reliability;

- State the obligations of the Provider to meet the agreed service levels;

- Identify the regulatory standards specifically applicable to the delivered Service;

- Ensure uniformity and integrity in assessing Service quality;

- Guarantee the excellence of services provided, assessed using quantitative performance indicators.

It is stipulated that, in the event that the Provider loses its SecNumCloud qualification, the Contract may be terminated by law,
without penalty, by the SPONSOR. In such an event, the Provider agrees to inform the SPONSOR of this disqualification by sending an official notification via registered letter with acknowledgment of receipt.
Il convient de noter qu'une modification ou un ajustement de la qualification SecNumCloud ne sera pas interprété comme une révocation de la qualification initiale.

# 6. Audit

Le Prestataire s'engage à permettre au COMMANDITAIRE, ou à tout auditeur tiers et non concurrent du Prestataire que ce dernier aurait désigné, de consulter l'ensemble des documents nécessaires à l'attestation du respect intégral des obligations liées à la conformité avec les dispositions de l'article 28 du Règlement Général sur la Protection des Données (GDPR), facilitant ainsi la réalisation d'audits.

Par l'acceptation de la présente Convention de service, le COMMANDITAIRE confère son autorisation explicite à :

1. L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI) ainsi qu'à l'entité de qualification compétente pour entreprendre la vérification de la conformité du Service et de son système d'information au référentiel SecNumCloud.
2. Un prestataire d'audit de la sécurité des systèmes d'information, dûment qualifié PASSI et expressément désigné par le Prestataire, pour mener à bien des audits de sécurité portant sur le Service.

# 7. Description du Service

## 7.1. Modèle de responsabilité partagé

Le Service proposé par le Prestataire se caractérise par la mise à disposition des prestations suivantes, lesquelles s'alignent sur le principe de responsabilité partagée présenté dans le référentiel SecNumCloud :

- La provision de ressources de calcul (compute);

- La mise à disposition d'espaces de stockage;

- L'accès à des services de connectivité réseau et internet;

- L'offre d'un service de sauvegarde dédié aux machines virtuelles.

Le modèle de responsabilités partagé appliqué entre le Prestataire et le COMMANDITAIRE dans le cadre du Service est présenté en §7.1.

Il est entendu que le Prestataire mobilisera son expertise pour réaliser les Prestations selon les meilleures pratiques professionnelles et conformément aux exigences du référentiel SecNumCloud.

Le Service est qualifié SecNumCloud (voir attestation en Annexe).

## 7.2. Présentation détaillée du périmètre du Service

| Compute               | Ressource de calcul du Tenant COMMANDITAIRE                                                                          |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | Données de production du Tenant COMMANDITAIRE                                                                        |
| Stockage objet S3     | mise à disposition d’une infrastructure de stockage objet souverain multi AZ et compatible avec les API S3 standard. |
| Sauvegarde            | Modulo souscription au mass-storage adéquat                                                                          |
| Infrastructure réseau | Ressource réseau du Tenant COMMANDITAIRE                                                                             |
| Console COMMANDITAIRE | Le service permettant au COMMANDITAIRE d’accéder à son service IaaS et de l’administrer via l’interface Shiva        |
| Support               | Le service de support accompagnant les services précédents et uniquement ceux-ci (*)                                 |

*(*) Dans la limite du périmètre du Service qualifié SNC et des responsabilités du Prestataire en la matière*

### 7.2.1. Infrastructures Datacenters

Le Service englobe la mise à disposition, pour chaque Zone de disponibilité, des prestations qualifiées ci-après :

- Site datacenter situé en France pour la Région FR, conforme aux dernières normes technologiques, avec proposant un niveau de résilience équivalent ou supérieur au niveau Tier 3 du Uptime Institute;
- Mise à disposition de salles techniques au sein de datacenters dédiés à l'accueil des équipements techniques indispensables à la production du service, incluant calcul, stockage, réseau, câblage, et autres composants nécessaires;
- Alimentation électrique sécurisée, assurée par deux circuits électriques distincts, garantissant une continuité de service;
- Fourniture de services de climatisation, ajustés pour respecter les normes et préconisations des fabricants d'équipements, afin de maintenir un environnement optimal pour les dispositifs techniques;
- Supervision continue et métrologie détaillée, permettant un suivi précis et une gestion proactive des performances et de la sécurité du service fourni.

Le Prestataire assure la mise à disposition de services avancés de détection et d'extinction d'incendie, conçus pour identifier et neutraliser efficacement tout départ de feu au sein des installations. Ces systèmes sont essentiels pour garantir la sécurité des équipements et des données. Ils comprennent des détecteurs de fumée de haute précision et des dispositifs d'extinction qui peuvent agir rapidement sans endommager l'équipement informatique. Ce service est crucial pour prévenir les risques d'incendie, minimiser les dommages potentiels et assurer la continuité des opérations.

Le COMMANDITAIRE est informé que toutes les procédures et mesures de sécurité mises en place, y compris les tests annuels de basculement sur les groupes électrogènes, sont essentielles pour garantir la continuité et l'intégrité des services fournis. Ces pratiques sont conçues pour minimiser les risques de panne et assurer une réactivité optimale en cas d'Incident. En acceptant ces conditions, le client reconnaît l'importance de ces mesures et s'engage à coopérer pleinement pour faciliter leur mise en œuvre. Le COMMANDITAIRE est également encouragé à prendre connaissance des recommandations de sécurité fournies et à les intégrer dans sa propre stratégie de gestion des risques.

### 7.2.2. Infrastructure logicielle de pilotage du Service

Le Prestataire fournit au COMMANDITAIRE la console d'administration et l'API nécessaire à l'utilisation du Service. Il s'engage également à maintenir cette console d'administration et l'API en condition opérationnelle optimale et à en assurer la sécurité de manière continue. Cette console d'administration et l'API sont désignées de manière groupées sous le terme «interface COMMANDITAIRE».

Le Prestataire alerte le COMMANDITAIRE sur le fait qu'une utilisation anormale de l'interface COMMANDITAIRE, notamment en cas de surcharge de ses APIs de commande (hammering), peut déclencher des mesures de sécurité automatiques entraînant le blocage de l'accès aux APIs de commande ou au Service. Il convient de souligner que cette situation ne constitue pas une indisponibilité du Service mais une action de protection du Service et de l'infrastructure du Prestataire; par conséquent, le COMMANDITAIRE ne peut la considérer comme une indisponibilité dans ses calculs.

De plus, le Prestataire précise au COMMANDITAIRE que les requêtes parfaitement identiques (doublons) envoyées à ses APIs sont limitées à une par seconde (Throttling). Si le COMMANDITAIRE soumet des requêtes identiques à une fréquence supérieure, leur rejet ne pourra être interprété comme une indisponibilité du Service.

### 7.2.3. Infrastructures de calcul

Le Service inclut la fourniture, dans les zones de disponibilité souscrites par le COMMANDITAIRE, des équipements nécessaires à l'exécution des charges de travail sous forme de machines virtuelles.

Ceci comprend :

- La fourniture des chassis techniques nécessaires au bon fonctionnement des lames de calcul;
- La fourniture des lames de calcul dans les quantités spécifiées par le COMMANDITAIRE et réparties selon les zones de disponibilité de son choix. Il est à noter que ces lames de calcul sont exclusivement dédiées au COMMANDITAIRE;
- La mise à disposition de systèmes d'exploitation de type hyperviseurs, ainsi que la garantie du maintien en condition opérationnelle et de sécurité de l'infrastructure logicielle nécessaire au pilotage de ces systèmes d'exploitation. Il convient de mettre en évidence que, même si le Prestataire est responsable de la maintenance opérationnelle et de la sécurisation globale du Service, il ne détient pas de connaissances spécifiques concernant les environnements de production du COMMANDITAIRE ni des exigences liées à ses charges de travail. Par conséquent, la responsabilité de décider de la mise à jour des systèmes d'exploitation des lames de calcul hyperviseurs, une action susceptible de nécessiter un redémarrage, repose entièrement sur le COMMANDITAIRE. Cette opération peut être réalisée via l'Interface COMMANDITAIRE.

Le choix du modèle de lame de calcul, sélectionné parmi le catalogue proposé par le Prestataire, relève de la responsabilité du COMMANDITAIRE.

### 7.2.4. Infrastructure de stockage

Le service comprend la fourniture au COMMANDITAIRE d'une infrastructure de stockage partagée de type SAN (Storage Area Network), offrant divers niveaux de performance. Ce service englobe :

- L'implémentation et le maintien en condition opérationnelle et en condition de sécurité du réseau SAN dédié;
- L'installation et la gestion des baies de stockage mutualisées entre les clients, y compris leur maintien en condition opérationnelle et en condition de sécurité, leur supervision et leur métrologie;
- La mise en place des systèmes automatisés pour l'allocation des LUNs (Logical Unit Numbers) de stockage dédiés à l'usage du COMMANDITAIRE, conformément aux volumes souscrits par le COMMANDITAIRE.

### 7.2.5. Infrastructure réseau globale

Le Prestataire déploie dans le cadre du Service, un réseau global facilitant au COMMANDITAIRE la mise en accessibilité de ses systèmes hébergés. Ce service comprend :

- La fourniture, le maintien en condition opérationnelle et en condition de sécurité de l'ensemble des liaisons en fibres optiques interconnectant les différentes Zones de disponibilité;

- La fourniture, le maintien en condition opérationnelle et en condition de sécurité des équipements techniques nécessaires au bon fonctionnement du réseau et à l'isolation des différents clients.
L'interconnection network of the SPONSOR'S Tenant, to the Internet or to private networks, and network equipment, operator links, and other technical components realizing this interconnection, are not part of the Service's scope. This network interconnection is implemented in accordance with the provisions stipulated in the Contract.

### 7.2.6. Backup Infrastructure

The Provider provides the SPONSOR with an integrated, dedicated, and managed backup service intended to protect its virtual machines. The Provider ensures the operational condition and security condition maintenance of this backup service. The Provider guarantees that the SPONSOR’s backups will be located outside the Availability Zone of the backed-up workloads, provided that the SPONSOR has subscribed to the appropriate Work Units.

This backup service is limited to the backup of virtual machines and the topology configurations of the SPONSOR’s IaaS environment Tenants as part of the Service. The development and implementation of an adequate backup policy by the SPONSOR depend on the subscription to specific work units. Therefore, it is incumbent upon the SPONSOR to ensure the availability of the necessary technical resources from the Provider to implement its backup policy or to adjust the latter according to the available means.

The Provider commits to notifying the SPONSOR in case of capacity constraints and to providing advisory assistance for resource optimization. The Provider's obligations will be limited to implementing the needs expressed by the SPONSOR regarding the backup policy within the subscribed resources.

### 7.2.7. Implementation of Disaster Recovery or Business Continuity Solutions

The Provider supplies the SPONSOR with all the necessary technical solutions to ensure the optimal distribution of its resources across various Availability Zones. It is the responsibility of the SPONSOR to manage this resource distribution effectively, for which they have the opportunity to use the tools provided by the Provider for this purpose.

## 7.3. Limitations of Services in the Qualified IaaS Model

### 7.3.1. Managed Services in the RUN

It is important to note that the following are excluded from the Service:

- Hosting of the SPONSOR’s physical components;

- The network interconnection of the SPONSOR’s Tenant to the Internet or to private networks, including operator links;

- Any type of managed service, or TMA;

- Any assistance on virtual machines at the OS level and above in the IaaS responsibility stack, even if it's just supervision.

However, it is not excluded that the SPONSOR may use such services from the Provider's MSP offer to intervene in managed service mode on their Tenants. These services will not be governed by this Service Agreement and its bilateral commitments/clauses.

### 7.3.2. Backup Configuration

By default, the Provider sets up the IaaS resources for the SPONSOR by reserving resources and configuring deployments to use the Availability Zones. It is incumbent upon the SPONSOR to choose the Availability Zones via the SPONSOR interface.

### 7.3.3. Backup Service

The backup service stops at the backup of virtual machines and the topology configurations representing the IaaS environment of the SPONSOR's Tenants as part of the Service.

The backup service and completion of the SPONSOR’s backup policy are subject to subscribing to necessary storage space on mass storage to ensure the service. Therefore, it is the responsibility of the SPONSOR to subscribe to the necessary technical resources from the Provider to ensure the backup policy on their IT scope or to adjust the backup policy according to the available means. The Provider commits to informing the SPONSOR in case of technical capacity limits.

The Provider will implement the necessary technical and human resources for the backup of the hosted system within the subscribed resources by the SPONSOR.

Additionally, for scopes not covered by the Provider, it is up to the SPONSOR to define its own backup strategy and to configure the backups of VMs themselves or to make a Service Request to the Provider for the configuration of backups for physical servers if the SPONSOR has a managed service contract allowing the Provider to act via the SPONSOR interface, which is the administration console provided under this Service Agreement and which has features to configure backups.

Moreover, this service will only commit to translating the configuration specified clearly by the SPONSOR via the SPONSOR interface's configuration settings.

For flexibility reasons of the Provider's offer, the SPONSOR has the option to associate a non-backup policy to some of their VMs. In this case, it is up to the SPONSOR to assume this choice. The Provider will not backup VMs associated with the "no backup" policy. The Provider warns the SPONSOR that choosing the "no backup" policy or choosing to backup manually exposes the SPONSOR to definite data loss in the event of an Incident on the lower layers or on layers depending on their responsibility in the IaaS model. In such a case, it will be impossible to hold the Provider responsible for restoring the data, as there will be nothing to restore. The Provider recommends always backing up VMs.

For any matters concerning the OS installed on a virtual machine and any software or program running "above the OS," it is the SPONSOR's responsibility to perform administrative and supervisory operations within the European Union if they wish to ensure that the entire verticality of the IS layers is operated and managed from within the European Union. Administrative operations outside the scope of the Provider's responsibility under this Service Agreement are indicated in the "Shared Responsibility Model" section of this Service Agreement.

## 7.4. Service Implementation

### 7.4.1. Technical Prerequisites

For the implementation of the Service, the SPONSOR acknowledges that they must:

- Operate with VMware-type virtualization in versions supported by the publisher and provided by the Provider under the Service;

- Use the backup tool via the Provider;

- Declare fixed IPs from which the Provider will authorize access to the SPONSOR interface (whitelist filtering). Changes to this IP list must be made via Service Requests (non-administerable list from the Service administration interface).

## 7.5. Service Location in France

It is specified that none of the operations and no physical components involved in providing the Service, which this Service Agreement covers, are located outside the European Union.

This includes in particular the support, operational supervision, and security supervision (SOC) of the technical infrastructure delivering the Service. Thus, all storage, all administration and supervision tasks, and all processing are carried out in France.

### 7.5.1. Location of Datacenters Hosting the Service

Except for the operations of the Provider's staff and agencies, all production operations (including data storage and processing) and technical components delivering the Service are located in Datacenters based in France.

### 7.5.2. Location of Cloud Temple Agencies Operating the Service

Cloud Temple employees intervening on the Service scope operate from Cloud Temple agencies all located exclusively in France. These agencies are located in France, in Tours, Lyon, Caen, and Paris La Défense.

The SPONSOR is informed of the possibility for Cloud Temple employees to work remotely. However, the Provider guarantees the same level of security regarding remote access, particularly concerning VPN access. These remote accesses are implemented in accordance with the requirements of the SecNumCloud referential.

## 7.6. Support

### 7.6.1. Nature of the Support Accompanying the Service

The Provider offers a technical support service aimed at assisting the SPONSOR in managing, troubleshooting, and optimizing their deployed resources. This service covers a wide range of activities, from assisting with the initial configuration of the services to advanced technical support for resolving specific issues.

Here is a description of the support service characteristics and functionalities:

- Assistance with the initial implementation of the Service usage;
- Incident resolution assistance;
- Problem resolution assistance;
- Monitoring and advice on optimizing the technical base.
Dans le cadre du service de support, le Prestataire ne se substitue pas au COMMANDITAIRE dans l'usage du Service. Le COMMANDITAIRE reste entièrement responsable de la configuration, de l'exploitation de ses VM et de ses Tenants, et de la gestion de tous les éléments (données et applications incluses) qu'il a stockés ou installés sur les infrastructures du Prestataire. Le service de support technique est fourni en accord avec les Conditions Générales de Vente et d'Utilisation, le Prestataire étant tenu à une obligation de moyens.

Le COMMANDITAIRE s'engage à utiliser le service de support technique de manière raisonnable, s'abstenant notamment de solliciter des services non souscrits auprès du Prestataire et de faire intervenir les équipes du Prestataire auprès de ses propres clients ou de tiers non inclus dans le Contrat. Le Prestataire se réserve le droit de rejeter toute demande de service ne respectant pas ces critères.

Le niveau d'engagement du support est conditionné à la souscription des unités d'œuvre de support associées.

### 7.6.2. Requesting Technical Support Service

Technical support is accessible through a ticket system via the COMMANDITAIRE console and is available during regular business hours except on public holidays (8 am - 6 pm; Monday -- Friday; French calendar and hours). For emergencies occurring outside business hours, especially incidents significantly affecting production, the on-call service can be reached via a number provided to the COMMANDITAIRE at the Service's initiation.

For each request or Incident, it is imperative to generate a ticket with the Prestataire's support. The initiation of this ticket, including all necessary information, is essential and marks the beginning of the evaluation of the Prestataire's commitments.

As soon as the Prestataire receives a request or Incident notification, whether via the management console or following a phone call, a ticket is automatically created. When reporting an Incident, it is essential that the COMMANDITAIRE provides the Prestataire with as many details as possible about the problem encountered. This approach is crucial to enable adequate situational assessment, prioritization, and effective diagnostics.

The Client then receives a confirmation email, indicating the ticket creation and its unique number. The COMMANDITAIRE can consult the status and history of its requests and Incident reports directly from the management console.

### 7.6.3. Incident Management Process

When reporting an Incident, the Prestataire's technical support team initiates an investigation to identify the problem's cause and establish a diagnosis. The Client must actively collaborate with the Prestataire by providing all necessary information and performing the required tests. The Prestataire may access the Client's Service to diagnose the Incident.

If the Prestataire's Services are deemed functional and the Incident is not attributable to them, the Client will be informed. At the Client's request, the Prestataire may offer Professional Services to identify the problem's origin, billable upon prior agreement in 30-minute increments.

If the Incident is the responsibility of the Prestataire or one of its subcontractors, they will complete the diagnosis and restore the Service at no additional cost. The diagnosis relies on exchanges between the Parties and the Prestataire's data, these elements being considered probative by agreement of the Parties.

### 7.6.4. Incident Prioritization Process

Determining the priority level of a case is based on a matrix analysis assessing the Incident's impact and degree of criticality:

- Impact levels are defined as follows:

| Impact Level | Description                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impact I1     | Prestataire's service(s) are interrupted                                                                             |
| Impact I2     | Prestataire's service(s) are degraded                                                                                |
| Impact I3     | Prestataire's service(s) are currently stable but show potential long-term decline signs                             |

- Criticality levels are defined as follows:

| Criticality Level | Description                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Criticality C1     | Prestataire's service(s) are degrading at a concerning rate                                                      |
| Criticality C2     | Prestataire's service(s) are progressively deteriorating over time                                               |
| Criticality C3     | Prestataire's service(s) present one or several inconveniences without significant consequences                   |

- Based on a thorough analysis of the situation, considering elements determining Impact and Criticality, a priority is assigned to the ticket according to the following decision matrix:

| Impact Level <br/> \ Criticality Level | Impact I1       | Impact I2       | Impact I3       |
| -------------------------------------- | --------------- | --------------- | --------------- |
| Criticality C1                         | Priority **P1** | Priority **P2** | Priority **P3** |
| Criticality C2                         | Priority **P2** | Priority **P3** | Priority **P4** |
| Criticality C3                         | Priority **P3** | Priority **P4** | Priority **P5** |

Service level commitments corresponding to each priority level are detailed in the following chapter.

### 7.6.5. Language and Location of Support Service

Support is provided by the Prestataire to the COMMANDITAIRE at least in French. Support may also be provided in English.

The operations of the Prestataire's support service for the SecNumCloud qualified infrastructure service offering are located in the European Union.

# 8. Commitments and Service Levels

The Prestataire commits to ensuring continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, ensuring their optimal operation.

The unavailability of a service, subject to a performance indicator, is acknowledged as soon as identified by the Prestataire's monitoring system or following a notification by a COMMANDITAIRE user. The beginning of the unavailability is set at the earliest moment between these two events, to ensure an accurate and fair count of downtime.

The end of the unavailability is officially marked by the complete restoration of the service, confirmed either by the Prestataire's monitoring tools or by user feedback, thus ensuring an effective resumption of operations and an accurate measurement of the interruption's duration.

## 8.1. Infrastructure Availability Commitments

The Prestataire commits to maintaining a level of availability and performance in line with the standards defined for each specified period. Service Level Agreements (SLAs) apply, provided the COMMANDITAIRE implements its systems across at least two of the Availability Zones present in the concerned Region.

In the absence of these conditions being met by the COMMANDITAIRE, 
they will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (\*). Access to the SLAs is via the COMMANDITAIRE interface. Measurements are calculated monthly:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Compute availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Storage availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 3     : IC-INFRA_SNC-03** – Backup reliability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Network infrastructure availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 5     : IC-INFRA_SNC-05** – Internet access: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.

***Notes***:

- *In response to a Distributed Denial of Service (DDoS) attack, the Prestataire reserves the right to adjust its internet routing configuration to limit the impact of this attack and protect its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Prestataire may use the BGP blackholing technique to block all traffic to the targeted IP address upstream with its providers, to protect the COMMANDITAIRE's resources as well as those of other COMMANDITAIREs and the Prestataire's infrastructure. The Prestataire strongly encourages the COMMANDITAIRE to adopt similar measures, such as using available Web Application Firewall software, and to carefully configure its security groups via the command API.*
- *The Provider insists on the necessity for the CLIENT to minimize the exposure of flows, specifically by avoiding making **SSH** administration ports (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 8.2. Availability Commitment of the CLIENT Interface

- SLA 6: IC-INFRA_SNC-06 -- Access to the Service administration console: a guaranteed availability of 97%, ensured continuously, 24 hours a day, 7 days a week.
- SLA 7: IC-INFRA_SNC-07 -- Access to the Service control APIs: an availability of 99.9%, calculated on a 24/7 basis.

## 8.3. Support Availability Commitment

- **SLA 8      : IC-INFRA_SNC-08** – Here are the performance commitments of the Provider's technical support for incidents, excluding scheduled maintenance:

| Priority         | Intervention Time Guarantee (ITG)     | Performance Target         |
|------------------|---------------------------------------|----------------------------|
| Priority **P1**  | 30min                                 | 95%                        |
| Priority **P2**  | 2h                                    | 90%                        |
| Priority **P3**  | 4h                                    | 90%                        |
| Priority **P4**  | 24h                                   | 85%                        |
| Priority **P5**  | 48h                                   | 85%                        |

- **SLA 9      : IC-INFRA_SNC-09** – Here are the performance commitments of the Provider's technical support for service requests:

|                    | Intervention Time Guarantee (ITG)     | Performance Target         |
|--------------------|---------------------------------------|----------------------------|
| Service request    | 4h                                    | 90%                        |

*Note:*

- *The Intervention Time Guarantee (ITG) is calculated based on the difference between the moment the CLIENT opens the ticket and the first intervention by the Provider's support.*
- *Incident investigation involving the CLIENT will not include remote intervention on hosted CLIENT servers. This assistance will be limited to explaining the available metrics related to the CLIENT's environment to facilitate understanding of the incidents or performance issues encountered. Based on the results of this analysis, recommendations may be suggested.*

## 8.4. Object Storage (S3) Availability Commitment

- **SLA 10      : IC-INFRA_SNC-10** – Here are the availability commitments for S3 object storage:

| Indicator            | Commitment                                      | Availability Target        |
|----------------------|-------------------------------------------------|----------------------------|
| IC-INFRA-SNC-10.1    | Durability of object storage in a region        | 99.9999999% / year         |
| IC-INFRA-SNC-10.2    | Availability of the S3 Object Storage API       | 99.99%                     |
| IC-INFRA-SNC-10.3    | Maximum access latency to an object in a region | 150 ms                     |

Notes:

- The Object Storage Service is specifically designed for object storage and must be used for this sole purpose, **categorically excluding block mode usage**. Using block mode by indirect methods, including for example the use of *"FUSE" in a Linux environment*, constitutes a violation of the stated terms of use. No incidents, malfunctions, or damages resulting from this non-compliant usage will be covered by the Service Level Agreements (SLAs) defined in this service agreement.
- The durability guarantee is conditioned by the use of the services in accordance with current best practices and standards and explicitly excludes any data modifications, whether intentional or accidental, resulting from actions taken by the CLIENT.

## 8.5. Clarification Regarding Backup Commitment

The backup strategy deployed for the CLIENT is conditioned on subscribing to the proper work units.

The Provider commits to providing a backup solution that will allow the CLIENT to apply the desired backup policies.

It is specified that the Provider's scope ends with the provision of a backup service and it is up to the CLIENT to monitor the proper execution of the associated policies via the CLIENT interface.

It is specified that the management of storage capacities for the dedicated backup storage space remains the responsibility of the CLIENT. The Provider provides the utilization rate via the console.

*Example: Non-backup of a virtual machine:*

*The CLIENT is responsible for verifying/monitoring the proper execution of the backup policies. If the CLIENT finds that a virtual machine is not backed up, it is up to them to verify the cause. The CLIENT can request support from the Provider according to the subscribed support level for assistance.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9** will only apply in the case of a service backup incident.

# 9. Organization of the Contractual Relationship

## 9.1. Responsibilities of the Provider

The Provider commits to:

- adequately inform its CLIENT (for example, in case of capacity limitations of technical resources delivering the Service).

- formally inform the CLIENT within one month of any legal, organizational, or technical change that may impact the Service's compliance with protection requirements against non-European laws (19.6 of the SNC v3.2 framework).

- provide the CLIENT with interfaces and service interfaces that are at least in French.

- study and take into account specific sectoral requirements related to the types of information entrusted by the CLIENT in the implementation of the service, within the Provider's responsibilities.

- not disclose any information related to the service to third parties, except with the formal and written authorization of the CLIENT.

- make available all necessary information for conducting compliance audits in accordance with Article 28 of the GDPR.

- report to the CLIENT, under this service agreement, any security incident impacting the Service or the CLIENT’s use of the Service (including CLIENT data).

- allow a qualified information systems security audit service provider (PASSI), mandated by the Provider, to audit the service and its information system, in accordance with the Provider's SecNumCloud control plan. Furthermore, the Provider commits to providing all necessary information to carry out compliance audits in accordance with Article 28 of the GDPR, conducted by the client or a third party mandated by them.

- provide, as a data processor, in accordance with Article 28 of the General Data Protection Regulation (GDPR), assistance and advice to the CLIENT by alerting them when an instruction issued by the CLIENT may constitute a violation of data protection rules.

- notify in writing, when a project impacts or is likely to impact the Service's security level, the CLIENT of potential impacts, mitigation measures put in place, and residual risks that concern them.

- document and implement all procedures necessary to meet the legal, regulatory, and contractual requirements applicable to the service, as well as the CLIENT's specific security needs, defined by them and provided in the Contract. Upon the CLIENT's request, the Documentation module of the CLIENT interface will allow the secure sharing of these documents.

- provide, upon the CLIENT's request, elements for assessing the risks related to submitting the CLIENT's data to the law of a non-European Union state.

At the CLIENT's formal and written request, the Provider commits to:

1. Make the Provider's internal regulations and ethics charter accessible to the CLIENT;

2. Make the CLIENT aware of the sanctions incurred in case of a security policy violation;

3. Provide the CLIENT with all events concerning them in the Service’s logging elements;

4. At the end of the Contract, the Provider commits to deleting the data and technical Data related to the CLIENT, in accordance with the "data deletion at the end of the Contract" procedure described in this service agreement.

5. Ensure secure deletion of all CLIENT data by complete rewriting of any medium that hosted their data as part of the Service.

6. Provide the full list of third parties authorized to access the infrastructures hosting the data.
Le Contractor will keep up to date and make available to the CLIENT the exhaustive list of third parties authorized to access the infrastructures containing the data, informing the latter of any changes related to subcontractors. The Contractor and all its subsidiaries commit to respecting the fundamental values of the European Union, namely human dignity, freedom, democracy, equality, the rule of law, and respect for human rights. The service provided by the Contractor complies with the current legislation on fundamental rights and the values of the European Union concerning respect for human dignity, freedom, equality, democracy, and the rule of law.

## 9.2. Limitation of Contractor's responsibilities

Due to all the definitions and conditions mentioned in this Service Agreement, the Contractor's responsibilities are limited as follows:

1. The shared responsibility model described in the "Shared Responsibility Model" section of this Service Agreement inherently limits the Contractor's involvement in the operation layers going "above" the provision of computing, network, storage, and backup resources. This particularly excludes but is not limited to:

    - The management of what is installed on virtual machines (OS, middleware, applications, etc.);

    - The updating of OS and other software installed by the CLIENT on its machines in its Tenants;

    - The security of programs, software, and applications installed on virtual machines;

    - The updating of virtual machines;
  
    - The backup of data at the application level.

2. The Contractor cannot undertake backups of the CLIENT's Tenants without the CLIENT having first subscribed to the appropriate units of work.

3. The Contractor cannot claim ownership of the data transmitted and generated by the CLIENT. Indeed, these are the property of the CLIENT.

4. The Contractor emphasizes that it cannot in any way exploit the data transmitted and generated by the CLIENT without prior validation from the latter.

5. The Contractor disclaims all responsibility for components physically hosted and managed by the Contractor but owned directly by the CLIENT or a third party with whom the CLIENT has contracted. The hosting of clients' physical components is not part of the Service and is thus outside the scope of this Service Agreement. It is up to the CLIENT to assess the level of adherence or dependency introduced by these components concerning the IaaS service qualified as SecNumCloud.

## 9.3. Limitation of access

As part of the Service, the Contractor is strictly prohibited from accessing CLIENT-owned Tenants without prior authorization. It is the CLIENT's responsibility to provide the necessary access to the Contractor's personnel, according to the specific needs of hosting and, where applicable, professional support services if this option has been chosen by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for the needs related to the agreed service provision, thus ensuring secure management in compliance with the terms of the agreement.

Remote access by third parties involved in the Contractor's service provision is strictly prohibited. In the event that a specific technical requirement necessitates such access, it can only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining their written consent.

This measure ensures the control and security of the CLIENT's data, making sure that any exception to the rule is duly authorized and documented.

## 9.4. Responsibilities of third parties participating in the provision of the Secure Temple service

The Contractor manages the list of third-party partners participating in the supply of the Service. These third parties are publishers, contractors (of the Contractor), and other suppliers involved in the provision of the Service. The Contractor applies the following measures to these third parties:

- The Contractor requires third parties involved in the implementation of the service, in their contribution to the Service, to maintain a level of security at least equivalent to that which it commits to maintaining in its own security policy applicable to the Secure Temple service;

- The Contractor contracts with each of the third parties involved in the implementation of the service audit clauses allowing a certifying body to verify that these third parties comply with legal requirements and SNC requirements, allowing the Contractor to meet its commitments in this Service Agreement.

- The Contractor implements a procedure to regularly control the measures put in place by the third parties participating in the service implementation to comply with the requirements for the Contractor to meet its commitments in this Service Agreement.

- The Contractor implements a follow-up procedure for changes made by third parties participating in the service implementation that could affect the security level of the service's information system.

## 9.5. Responsibilities and obligations of the CLIENT

As a reminder, the Contractor provides the CLIENT with a platform for running virtual machines, the configuration of which is the responsibility of the CLIENT. Each virtual machine cannot operate without an associated backup policy. The Contractor defines automatic backup policies through its interfaces. However, it is the CLIENT's responsibility to activate these backup policies and thus activate the virtual machines.

The CLIENT authorizes ANSSI and the SNC certifying body to audit the Service and the technical infrastructure delivering the Service.

## 9.6. Rights of the CLIENT

At any time during the contractual relationship, the CLIENT may file a complaint regarding the qualified service with ANSSI.

At any time, the CLIENT may request the Contractor to make available its internal regulations and ethics charter.

## 9.7. Data deletion at the end of the Contract

At the end of the contract, whether it expires or is terminated for any reason, the Contractor undertakes to securely delete all CLIENT data, including technical data. The Contractor will ensure to provide the CLIENT with formal notice, respecting a period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To attest to this deletion, the Contractor will issue a certificate to the CLIENT confirming the deletion of the data.

# 10. Life cycle of this Service Agreement

## 10.1. Effective date of the Service Agreement

This Service Agreement takes effect on the day of its signature by the CLIENT.

The collection, handling, storage, and processing of data made within the framework of presale, implementation, and termination of the Service are carried out in compliance with the applicable legislation.

## 10.2. Changes to the Service Agreement

Modifications or additions to this Service Agreement result exclusively from requests made by the designated governance bodies for this purpose. These change proposals will be reviewed by the Parties, authorized to identify the aspects requiring written formalization.

It is agreed that any change to the Service Agreement, once validated, that alters the initially established financial conditions, will require the establishment and signing of an amendment to the ongoing Contract.

Factors that may lead to a revision of this Service Agreement include but are not limited to:

- Evolution of the technical infrastructure delivering the IaaS Service;
- Adjustments to the services deployed by the Contractor to provide the Service;
- Variations in commitments and applicable sanctions;
- Organizational reconfigurations within the CLIENT or the Contractor;
- Expansion or reduction of the Service's scope.

The version and revision management of the Service Agreement is recorded at the beginning of the document to facilitate tracking.

### 10.2.1. Changes triggered by the CLIENT

Changes to the Service Agreement may be triggered, in particular, by:

- An evolution of the infrastructure managed by the Contractor;

- A modification of the services implemented by the Contractor;

- A modification of the Contractor's service level commitments.

### 10.2.2. Changes triggered by the Contractor

Any modification of the Service Agreement is subject to approval by the CLIENT. It is understood that any validated modification or addition altering the financial elements of the Contract may imply the signing of an amendment to it.

## 10.3. Reversibility

Moreover, Cloud Temple undertakes to allow a revision of this Service Agreement (notably providing for its termination) without penalty for the CLIENT in case of loss of the SecNumCloud qualification.
Les Services ne comprennent pas d'obligation de réversibilité (à savoir, l'aide au Client pour qu'il puisse migrer son système vers un autre Prestataire) à l'exception de la mise à disposition du COMMANDITAIRE par le Prestataire de l'interface COMMANDITAIRE permettant au COMMANDITAIRE de sauvegarder et récupérer ses données y compris notamment les données de configuration de leur système d'information via l'une des modalités techniques suivantes au choix du COMMANDITAIRE : la mise à disposition de fichiers suivant un ou plusieurs formats documentés et exploitables en dehors du service fourni par le Prestataire ou bien via la mise en place d'interfaces techniques permettant l'accès aux données suivant un schéma documenté et exploitable (API).

Le COMMANDITAIRE, seul maître de son système, doit tout mettre en œuvre pour faciliter cette opération en tant que de besoin (ce qui implique, notamment, qu'il mette en place une documentation rigoureuse à cet effet) et l'élaboration de plans de réversibilité. Dans le cas où le COMMANDITAIRE aurait besoin d'une prestation complémentaire, le Prestataire peut proposer une mission de conseil à cet égard dans le cadre d'un contrat spécifique à négocier.

# 11. Availability, continuity, and restoration of service

## 11.1. Incident and interruption management

### 11.1.1. Incidents

#### 11.1.1.1. Types of Incidents handled within the framework of this Service Agreement

- Disasters

- Breakdowns and failures

- Security incidents:

- Impacting service availability

- Impacting service confidentiality

- Impacting service integrity

#### 11.1.1.2. Incident handling

- Timeframes

- Post-incident actions

- Archiving documents detailing security incidents.

- Notification of personal data breaches [online](<https://notifications.cnil.fr/notifications/index>)

#### 11.1.1.3. Level of security incident notification

The CLIENT is responsible for choosing the severity levels of security incidents for which they wish to be informed, for example via their formalization in a PAS applicable to the Service.

By default, the CLIENT is informed:

- Of security incidents with impact (impacts I1 and I2 according to the impact scale defined in the prioritization process of this Service Agreement);

- Of personal data breaches for which the CLIENT is the data controller;

- Of personal data breaches for which the Provider is the data controller and involve the CLIENT's personal data.

## 11.2. Service Maintenance

### 11.2.1. Nature of maintenance

The maintenance provided consists of implementing:

- The operational conditions maintenance plan for the Service to ensure good availability indicators as committed by the Provider above;

- The BCP/DRP plan if subscribed by the CLIENT, triggered according to any incidents that may occur.

### 11.2.2. Remote access by Cloud Temple to the CLIENT's scope

The Provider refrains, under this Service Agreement, from any access to the Tenants and the CLIENT's interface space.

It will be the CLIENT's responsibility to grant the necessary access to the Provider's personnel. The CLIENT acknowledges that the access will be used within the framework of hosting and ultimately of managed services (if subscribed by the CLIENT).

### 11.2.3. Remote access by third parties participating in service delivery on the CLIENT's scope

No remote access by third parties participating in the Service delivery is authorized.

If a technical need makes such a scenario necessary, then this type of access will only be executed after notifying the CLIENT, providing justification, and obtaining their written agreement.

# 12. Data deletion procedure at the end of the Contract

At the end of the Contract, either due to its expiration or for any other reason, the Provider will ensure the secure deletion of all data processed within the Service framework, including the CLIENT's technical data. The Provider will give formal notice respecting a twenty-one (21) calendar day period. The CLIENT's data will be deleted within a maximum of thirty (30) days after notification. The Provider will provide a data deletion certificate to the CLIENT.

# 13. Applicable Law

## 13.1. Generally

The applicable law governing this Service Agreement is French law.

## 13.2. Compliance with applicable law and regulations

The Provider commits to the following:

- Identifying the legal and regulatory constraints applicable within the framework of the Service;

- Complying with the legal and regulatory constraints applicable to the data entrusted to the Provider;

- Complying with the Data Protection Act and the GDPR;

- Implementing personal data protection measures;

- Establishing a legal and regulatory monitoring process;

- Maintaining appropriate relationships or monitoring with sectoral authorities related to the nature of the data processed within the framework of the Services. This includes ANSSI, CERT-FR, and CNIL.

## 13.3. GDPR

Acting as a processor under Article 28 of the General Data Protection Regulation (GDPR), the Provider commits to:

- Ensuring transparency and traceability;

- Designating a DPO responsible for defining and implementing personal data protection measures;

- Providing assistance and advice to the CLIENT in alerting them if any of their instructions constitute a violation of personal data protection rules, if the Provider can identify this;

- Guaranteeing the security of the processed data (due to SecNumCloud qualification).

## 13.4. Protection against extra-European law

In case the Provider, within the framework of the Service, resorts to services from a third-party company - including a subcontractor - whose registered office, central administration, or principal place of business is in a non-EU state or which is controlled by a third-party company domiciled outside the EU, the Provider commits that this third-party company will not have any access to the data operated by the 'Secure Temple' service.

As a reminder, the data referred to are those entrusted to the Provider by the CLIENT as well as all Technical Data including information on the CLIENTS.

For the purpose of this article, the notion of control is understood as mentioned in II of Article L233-3 of the Commercial Code.

# 14. SIGNATURES

Executed at _______________, on ____________

For Cloud Temple, the PROVIDER

For _______________, the CLIENT