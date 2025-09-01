---
Title: Service-Specific Service Agreement - Dedicated Hardware
---

# SERVICE AGREEMENT FOR BARE METAL

| Recipients: | **COMMANDITAIRE** |
| :--- | :--- |
| **Document Reference** | CT.AM.JUR.ANX. CdSS-BM - 20250122_v1.0.docx_Day MM AAAA - VF |
| **Your Contacts** | *First Name* *Last Name* Account Manager email: *first_name.last_name@cloud-temple.com |
| **Date of Last Update** | 22/01/2025 |
| **Contractual Validation Date** | Day MM AAAA |

| Version | Date | Action | Author |
| :--- | :--- | :--- | :--- |
| v1.0 | 22/01/2025 | Initial draft | Nicolas BODILIS |

## Preface and Glossary

This section serves as a preface and glossary for the following content, which delves into cloud computing, IT systems, and software engineering. The preface provides an overview of the document's purpose and scope, while the glossary defines key terms used throughout to ensure clarity and consistency.

### Preface

This document aims to serve as a comprehensive guide for understanding the intricacies of cloud computing, its underlying IT systems, and software engineering practices. It is structured to cater to both beginners and professionals seeking to deepen their knowledge in these rapidly evolving fields. The content covers foundational concepts, emerging trends, best practices, and technical details, all presented with a focus on clarity and practical applicability.

### Glossary

- **Cloud Computing**: A model for delivering on-demand computing resources over the Internet—including servers, storage, databases, networking, software, analytics, and intelligence—with economies of scale, programmable infrastructure, and rapid innovation.
  
- **IT Systems**: The hardware, software, networks, data, and people involved in the management and processing of information within an organization.

- **Software Engineering**: A systematic approach to the development, operation, maintenance, and engineering of software, focusing on practicality, efficiency, and quality.

- **Microservices Architecture**: An architectural style that structures an application as a collection of small, independent services, which communicate with each other using lightweight mechanisms, often HTTP/REST or message queues.

- **Containerization**: A lighter alternative to virtualization, where applications are packaged with their dependencies into containers, ensuring consistent execution across different computing environments.

- **Serverless Computing**: An architecture where the cloud provider dynamically manages the allocation of machine resources, allowing developers to write and run code without managing servers.

- **DevOps**: A set of practices that combines software development (Dev) and IT operations (Ops), aiming to shorten the system development life cycle while delivering applications and services more reliably.

- **Agile Methodology**: An iterative approach to project management and software development, emphasizing flexibility, collaboration, customer satisfaction, and continuous improvement.

- **Continuous Integration/Continuous Deployment (CI/CD)**: A software development practice where code changes are automatically built, tested, and deployed into a staging or production environment, facilitating rapid feedback loops.

- **Infrastructure as Code (IaC)**: The process of managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration.

- **API (Application Programming Interface)**: A set of rules and protocols for building software applications that allows different software systems to communicate with each other.

- **Data Management**: The processes and tools used to collect, store, manage, and disseminate data in a reliable manner, ensuring its quality, security, and accessibility.

- **Security**: Measures taken to protect information technology assets from unauthorized access, use, disclosure, disruption, modification, or destruction.

These terms will be used consistently throughout the document to ensure clarity and maintain a uniform understanding of technical concepts.

## Introduction

The present document formalizes the Service Agreement associated with the Bare Metal service currently undergoing SecNumCloud qualification.

The Service is currently undergoing SecNumCloud qualification (see attached certificate).

This Service Agreement supplements and complements the general terms of sale and use of the Provider, understood as interpreting all contractual documents coherently with one another. In case of contradiction or divergence in the terms of the contractual documents, the following order will prevail:

1. General Terms of Sale and Use (CGVU)
2. SecNumCloud IaaS Service Agreement
3. SecNumCloud OpenIaaS Service Agreement
4. SecNumCloud PaaS Service Agreement
5. Specific Bare Metal Service Agreement
6. Particularly specific agreement
7. Security Insurance Plan (PAS)
8. Particular Usage Conditions (CPU)
9. Data Protection Agreement

## Glossary

In the present Service Agreement, **Commanditaire**, **Prestataire**, and **Parties** are identified in the Contract to which this Service Agreement is annexed.

The following terms used in this Service Agreement shall be interpreted as defined below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, Prestataire, and Parties.

- **Standard Change:** A change subject to a procedure with known production procedures and anticipated impacts (including financial ones) accepted in advance by all Parties. It is then integrated into the standard change catalog, potentially having a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Prestataire for the Commanditaire to benefit from the Service, to which this Service Agreement is annexed.

- **Service Agreement:** This document, established within a specific contract or Conditions General de Vente et d'Utilisation (CGVU), and in compliance with SecNumCloud requirements.

- **Service Request:** A request for enhancement following a procedure where the execution:
  i) Does not modify the CMDB;
  ii) Known operational mode, costs, and risks are accepted upfront without specific rollback procedures;
  iii) Realization is subject to an agreed level of service (SLA) agreement and included in the contract's revenue when performed during business hours.

- **Availability:** Capacity to ensure the Service's availability and optimal performance, aligned with defined criteria and commitments in the SLAs.

- **Technical Data:** Encompasses all data processed for delivering the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration of access, directory, certificates, etc.

- **Event:** Any detectable or identifiable occurrence potentially significant for managing the Service.

- **Hypervisor:** Operating system enabling execution of virtual machines on a compute layer.

- **Incident:** An unexpected event disrupting normal Service operation or compromising COMMANDITAIRE data security.

- **Security Incident:** Any event within the Service's scope:
  - Intentionally malicious;
  - Accidental affecting Service integrity, confidentiality, or traceability of COMMANDITAIRE data;
  - Compromising existing security measures. Non-origin origin downtime not considered a Security Incident (hardware failure, bug, malfunction, natural disaster...).

- **Commanditaire Interface:** Administration interface for the Service provided by the Prestataire to the Commanditaire, comprising a web administration console and an API.

- **Deployment:** Actions taken to implement a Change once approved (the change, in ITIL context, pertains to change management but not its execution/realization).

- **Problem:** Cause of recurring Incidents, potential incident (situation at risk) requiring analysis and resolution to prevent recurrence.

- **Region:** A geographically defined set of availability zones providing cloud services for optimizing latency, performance, and local regulatory compliance.

- **Service:** The Bare Metal service currently under SecNumCloud qualification, delivered by the Prestataire from maintained technical infrastructures as described in the "Description of Service" section of this Agreement.

- **Catastrophe:** A severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Monitoring of an Information System or Service involves collecting various data such as measurements and alarms. This activity is limited to observation and tracking without intervening directly on monitored elements, a prerogative reserved for administration operations.

- **Tenant:** An isolated instance reserved for a user or group of users sharing a common infrastructure while maintaining data and application independence and security.

- **Availability Zone (AZ) / Availability Region:** A specific, isolated section of the cloud computing infrastructure designed to ensure high availability and resilience of services through geographical distribution of resources.

# Acronyms

| Acronym | Definition |
| :--- | :--- |
| **CAB** | Change Advisory Board -- Comité consultatif sur les changements |
| **CMDB** | Configuration Management Database -- Base de données de gestion des configurations |
| **COPIL** | Comité de pilotage |
| **COSTRAT** | Comité stratégique |
| **COPROJ** | Comité Projet |
| **DB** | Database (base de données) |
| **DPA** | Data Protection Agreement |
| **DRP** | Disaster Recovery Plan (PRA) (Plan de reprise d'activité) |
| **GTE** | Guaranty of Time to Escalation |
| **GTI** | Guaranty of Time to Intervention |
| **GTR** | Guaranty of Time to Resolution |
| **ITIL** | Information Technology Infrastructure Library - Bonnes pratiques pour la gestion des SI |
| **IaaS** | Infrastructure as a Service |
| **MCO** | Maintenance en condition opérationnelle |
| **MOA** | Maîtrise d'Ouvrage |
| **MOE** | Maîtrise d'Œuvre |
| **MSP** | Managed Services Provider |
| **OS** | Operating system (système d'exploitation) |
| **PAQ** | Plan d'Assurance Qualité |
| **PaaS** | Platform as a Service |
| **PAS** | Plan d'Assurance Sécurité |
| **PASSI** | Prestataire d'Audit de Sécurité des Systèmes d'Information |
| **RFC** | Request For Change -- Demande de changement |
| **RGPD** | Règlement Général de Protection des Données (personnelles) |
| **RPO** | Recovery Point Objective -- Fraicheur des données restaurées en cas de Sinistre |
| **RTO** | Recovery Time Objective -- Délai de rétablissement du service en cas de Sinistre |
| **SDM** | Service Delivery Manager |
| **SLA** | Service Level Agreement -- Accord sur les niveaux de services |
| **SNC** | SecNumCloud |
| **SOC** | Security Operation Center |
| **TMA** | Tierce Maintenance dApplication |
| **UO** | Unité d'Œuvre |
| **VABE** | Validation d'Aptitude à la Bonne Exploitabilité |
| **VABF** | Validation d'Aptitude au Bon Fonctionnement |
| **VM** | Virtual Machine (Machine virtuelle) |
| **VSR** | Validation de Service Régulier |

# Purpose of This Service Agreement

This Service Agreement outlines the terms and conditions under which the Provider agrees to deliver the Service to the CLIENT. Its purpose is:

- To clearly define the performance expectations set by the CLIENT regarding the functionality and reliability of the Service;
- To outline the Provider's obligations to meet agreed service levels;
- To specify applicable regulatory standards specifically for the delivered Service;
- To ensure uniformity and integrity in assessing the quality of the Service;
- To guarantee the excellence of services provided, evaluated through quantitative performance indicators.

In case the Provider loses its SecNumCloud qualification, the Contract can be terminated immediately by the CLIENT without any penalties, at the CLIENT's discretion. The Provider commits to notifying the CLIENT of this de-qualification via a formal notification letter sent by registered mail with acknowledgment of receipt.

It should be noted that any modification or adjustment in SecNumCloud qualification will not be construed as revocation of the initial qualification.

## Audit

The Provider commits to enabling the COMMANDITAIRE, or any third-party auditor not concurrent with the Provider (as designated), to access all necessary documents for verifying full compliance with the obligations related to Article 28 of the General Data Protection Regulation (RGPD). This facilitates the conduct of audits.

By accepting this Service Agreement, the COMMANDITAIRE grants explicit permission to:

1. The French National Agency for Information System Security (ANSSI) and any competent entity responsible for verifying the compliance of the Service and its information system with the SecNumCloud reference framework.
2. A designated third-party security audit firm, duly qualified PASSI and explicitly named by the Provider, to conduct security audits on the Service.

## Service Description

```markdown
**Service Description**

Le service proposé est un plateforme de cloud computing hautement évolutive et sécurisée, conçue pour répondre aux besoins d'entreprise modernes en matière de gestion des données et des applications. Notre solution offre une flexibilité maximale, permettant aux clients de déployer, de gérer et d'étendre leurs ressources informatiques sans investissement initial élevé ni contraintes liées à l'infrastructure physique.

**Caractéristiques Clés:**

- **Scalabilité Intelligente**: Automatisation des ressources pour s'adapter automatiquement aux besoins en temps réel, garantissant une performance optimale sans surcharge ni sous-utilisation.
- **Sécurité Avancée**: Protocoles de sécurité robustes incluant le chiffrement à l'endroit et en transit, contrôles d'accès rigoureux, et conformité aux normes internationales (ISO 27001, SOC 2).
- **Interopérabilité**: Intégration fluide avec les systèmes existants grâce à des APIs bien documentées et des outils de migration facilitant le passage vers notre plateforme.
- **Gestion Automatique des Mises à Jour**: Assurance que les applications sont constamment mises à jour pour tirer parti des dernières innovations technologiques sans perturbation du service client.
- **Réduction des Coûts Opérationnels**: Optimisation des ressources informatiques, élimination de la nécessité de maintenance matérielle et logicielle coûteuse, et facturation à l'utilisation pour un contrôle financier précis.
- **Support 24/7**: Équipe de support technique disponible en permanence pour répondre rapidement aux besoins des clients et résoudre les problèmes techniques.

Notre plateforme est conçue pour soutenir une variété d'applications, allant des applications web simples aux infrastructures complexes de big data, en passant par l'intelligence artificielle et le machine learning. Nous offrons un environnement flexible permettant aux développeurs et aux entreprises de se concentrer sur la création de valeur plutôt que sur la gestion des infrastructures sous-jacentes.
```

## Shared Responsibility Model

The service offered by the Provider is characterized by providing the following services, which align with the shared responsibility principle presented in the SecNumCloud reference:

- Provisioning of computing resources (compute);
- Availability of storage spaces;
- Access to network connectivity and internet services;
- Access to a management console for deployed resources.

The shared responsibility model applied between the Provider and the COMMANDITAIRE within the service context is outlined in §7.1.

It is understood that the Provider will utilize its expertise to deliver the Services in accordance with professional best practices and in compliance with SecNumCloud requirements.

## Detailed Scope of the Service

| Service | Description |
| :--- | :--- |
| **Compute** | Computing resource for the COMMANDITAIRE tenant |
| **Storage** | Production data for the COMMANDITAIRE tenant |
| **Network Infrastructure** | Network resource for the COMMANDITAIRE tenant |
| **COMMANDITAIRE Console** | Service enabling COMMANDITAIRE to access and manage its Bare Metal service via the Console interface |
| **Support** | Support service accompanying the aforementioned services, limited to SNC qualified scope and Prestataire responsibilities (\*) |

(\*) Within the confines of the SERVICE's defined scope and the Prestataire's duties in this regard.

### Datacenter Infrastructure

The Service encompasses the provision, for each Availability Zone, of the following services currently in qualification:

- A datacenter site located in France for the FR region, compliant with the latest technological standards, offering a resilience level equivalent to or higher than Tier 3 as per Uptime Institute;
- Provision of technical rooms within dedicated datacenters designed to house essential technical equipment required for service production, including computing, storage, networking, cabling, and other necessary components;
- Secure electrical supply ensured by two independent power circuits, guaranteeing uninterrupted service continuity;
- Supply of climate control systems tailored to meet manufacturer specifications for environmental conditions, ensuring optimal operation for technical devices;
- Continuous monitoring and detailed metrology, enabling precise tracking and proactive management of service performance and security.

The Provider ensures the availability of advanced fire detection and suppression systems, engineered to identify and effectively neutralize any fire incidents within installations. These systems include high-precision smoke detectors and rapid-response extinguishing devices that do not damage IT equipment. This service is critical for preventing fire hazards, minimizing potential damage, and ensuring operational continuity.

The COMMANDITAIRE is informed that all implemented security procedures and measures, including annual emergency generator switchover tests, are vital to maintaining the continuity and integrity of provided services. These practices aim to minimize downtime risks and ensure optimal response times in case of incidents. By accepting these conditions, the COMMANDITAIRE acknowledges the importance of these security measures and commits to full cooperation for their implementation. The COMMANDITAIRE is also encouraged to review and incorporate security recommendations into its own risk management strategy.

### Software Management Infrastructure

The Provider delivers to the COMMANDITAURE the administration console and the API necessary for utilizing the SERVICE. They commit to maintaining this console and API in optimal operational condition and ensuring continuous security, without alteration. This is collectively referred to as the "COMMANDITAURE Interface."

The Provider notifies the COMMANDITAURE that unusual usage of the COMMANDITAURE Interface, particularly excessive use of its command execution APIs (hammering), could trigger automatic security measures resulting in the blocking of access to these APIs or the SERVICE. It's crucial to note that this situation does not equate to a service outage but rather an automated protective measure for both the SERVICE and the Provider's infrastructure; thus, the COMMANDITAURE should not interpret it as such in its calculations.

Furthermore, the Provider informs the COMMANDITAURE that identical requests (duplicates) sent to their APIs are limited to one per second (Throttling). If the COMMANDITAURE submits identical requests at a higher frequency, these rejections cannot be misconstrued as an outage of the SERVICE.

### Computing Infrastructure

The Service encompasses the provision of computing resources within zones of availability designated by the COMMANDITAIRE, in the form of virtual machines (VMs).

This includes:

- Provision of hardware necessary for the operation of compute nodes;
- Supply of compute nodes in quantities specified by the COMMANDITAIRE and distributed across the availability zones chosen by them. Note that these compute nodes are exclusively dedicated to the COMMANDITAIRE;
- Availability of a KVM console for managing compute resource allocation.

The selection of the compute node model, chosen from the catalog provided by the Prestataire, falls under the responsibility of the COMMANDITAIRE.

### Storage Infrastructure

The service includes providing the COMMANDITAIRE with a shared storage infrastructure of type SAN (Storage Area Network), offering various performance levels. This service encompasses:

- Implementation and maintenance of the dedicated SAN network in operational and secure condition;
- Installation, management, and upkeep of shared storage arrays among clients, including their operational and security status monitoring, supervision, and metering;
- Deployment of automated systems for allocating dedicated LUNs (Logical Unit Numbers) of storage specifically for COMMANDITAIRE usage, in accordance with subscribed volumes.

### Global Network Infrastructure

The Provider, as part of the Service, establishes a global network enabling COMMANDITAIRE to make its hosted systems accessible. This service includes:

- The provision, maintenance in operational condition, and security of all fiber optic links connecting various Availability Zones;

- The provision, maintenance in operational condition, and security of technical equipment necessary for the proper functioning of the network and isolation of different clients.

The Tenant COMMANDITAIRE's network interconnection with Internet or private networks, as well as the networking equipment, operator links, and other technical components facilitating this interconnection, are outside the scope of the Service. This network interconnection is implemented in accordance with the provisions outlined in the Contract.

### Implementation of Disaster Recovery or Business Continuity Solutions

The Provider delivers to the COMMANDITAIRE all necessary technical solutions to ensure optimal resource allocation across various Availability Zones. It is the responsibility of the COMMANDITAIRE to effectively manage this resource distribution, utilizing the Provider's available tools for this purpose.

### Limitations of Services in Qualified Bare Metal Model

In a qualified bare metal model, the services offered are subject to several limitations due to the nature of this infrastructure. Here's a breakdown:

1. **Hardware Dependency**:
   - Services are directly tied to physical hardware components. Any changes or updates to hardware require manual intervention and can lead to downtime during transitions.

2. **Scalability Challenges**:
   - Scaling up or down requires physical provisioning of resources, which is time-consuming and often involves complex logistics. This can limit agility in responding to fluctuating demands.

3. **Resource Utilization**:
   - Efficient resource utilization can be challenging due to the fixed allocation of hardware resources per server. Overprovisioning or underutilization becomes a common concern, impacting cost-efficiency.

4. **Maintenance and Upgrades**:
   - Maintenance schedules are dictated by hardware lifecycles, which can lead to planned downtime for system upgrades or repairs. This can disrupt service availability and require careful planning.

5. **Security Considerations**:
   - Physical security is a critical aspect, as the infrastructure's physical integrity directly affects data protection. Ensuring robust security measures against both internal and external threats requires constant vigilance.

6. **Isolation and Virtualization Limitations**:
   - While bare metal offers high isolation, managing virtual machines (VMs) or containers can introduce complexities in resource management and performance optimization due to shared hardware resources.

7. **Cost Management**:
   - Costs are directly tied to the physical assets, making it challenging to optimize expenses without over-provisioning or underutilizing resources. This requires careful capacity planning and cost analysis.

8. **Service Level Agreements (SLAs)**:
   - Meeting SLAs can be complex due to the inherent variability in hardware performance and potential downtime during physical changes. Ensuring consistent service quality across varying conditions is a significant challenge.

9. **Disaster Recovery**:
   - Implementing robust disaster recovery strategies becomes more complicated, as it involves not just data replication but also ensuring that physical infrastructure can be quickly restored or replaced in case of catastrophic failures.

10. **Vendor Lock-in**:
    - Relying on specific hardware vendors can lead to vendor lock-in, limiting flexibility for future technology migrations or consolidation efforts.

These limitations highlight the need for careful planning and management when deploying services within a qualified bare metal environment. Balancing performance, cost, security, and agility requires a nuanced approach tailored to specific business needs.

### Managed Services in RUN

It's crucial to note that the following are excluded from the COMMANDITARE's managed services:

- Hosting of physical components of COMMANDITARE;
- Network interconnection of the COMMANDITARE tenant, to Internet or private networks, including operator links;
- Any managed service (TMA) type;
- Assistance on operating systems installed and above in the responsibility stack, even if it's just supervision.

However, it is absolutely not excluded that COMMANDITARE may utilize such services from the MSP offer by the Provider to intervene in a managed services mode for its tenants. These services will then fall outside the scope of this Service Level Agreement and its bilateral commitments/clauses.

### Disaster Recovery Configuration

By default, the Provider sets up Bare Metal resources at the COMMANDITAIN by reserving resources and configuring deployments to utilize Availability Zones. It is the responsibility of the COMMANDITAIN to select the Availability Zones via the COMMANDITAIN interface.

### Service Implementation

This section outlines the implementation details of our cloud computing service. It includes an overview of the architecture, deployment strategies, and integration points with existing systems. The following sub-sections detail each aspect:

1. **Architecture Overview**
   - Description of the system's components and their interactions.
   - Explanation of how data flows through the service.

2. **Deployment Strategies**
   - Detailed explanation of the deployment models (e.g., public, private, hybrid).
   - Considerations for scalability, availability, and fault tolerance.

3. **Integration Points**
   - Integration with existing IT infrastructure, including databases, applications, and monitoring tools.
   - APIs and interfaces for seamless integration with third-party services.

4. **Security Measures**
   - Overview of security protocols to protect data in transit and at rest.
   - Access control mechanisms and compliance with industry standards (e.g., GDPR, HIPAA).

5. **Performance Optimization**
   - Techniques for enhancing service performance, including caching strategies and load balancing.
   - Monitoring tools and metrics used to ensure optimal operation.

6. **Maintenance and Updates**
   - Procedures for system maintenance, patching, and updates.
   - Impact on users during planned downtime or changes.

7. **Cost Management**
   - Pricing models and billing mechanisms.
   - Tools and strategies for cost optimization and resource management.

8. **User Support and Documentation**
   - Comprehensive documentation available to support users, including user guides, API references, and troubleshooting resources.
   - Support channels and response times for user inquiries.

This section aims to provide a clear roadmap of how our cloud computing service is designed, deployed, and managed, ensuring that both technical and non-technical stakeholders can understand the service's capabilities and operational aspects.

### Prerequisites for Service Implementation

To implement the SERVICE, COMMANDITAIRE acknowledges that it will need to:

- Declare fixed IP addresses from which the PROVIDER will allow access to the COMMANDITAIRE interface (Whitelisting). Any modifications to this IP list must be carried out via the designated menu in the console or through service requests for subsequent changes. At the initial service setup, the PROVIDER will have been informed of at least one IP address, such as described below.

## Localization of the service in France

It is specified that none of the operations and physical components involved in providing the Service, for which this Service Agreement pertains, are located outside the European Union.

This includes, among other things, support, operational oversight, and security (SOC) of the technical infrastructure delivering the Service. Consequently, all storage, administrative tasks, supervision, and processing are conducted in France.

### Location of Production Data Centers Hosting the Service

In the absence of operational activities by collaborators and agencies of the Provider, all production operations (including data storage and processing) as well as technical components delivering the Service are located within French Data Centers.

### Locations of Cloud Temple Agencies Providing the Service

Employees of Cloud Temple operating within the service's scope are based in France, with all agencies located exclusively in France. These agencies are situated in Tours, Lyon, Caen, and Paris La Défense.

The Commandant is informed about the possibility for Cloud Temple employees to work remotely. However, the Service Provider ensures equivalent security standards for remote access, particularly concerning VPN access. These remote accesses are implemented in accordance with SecNumCloud reference requirements.

### Support

### Nature of Support Accompanying the Service

The Provider offers a technical support service aimed at assisting the COMMANDITAIRE in managing, troubleshooting, and optimizing their deployed resources. This service encompasses a wide range of activities, from initial configuration of services to advanced technical support for resolving specific issues.

Here's an overview of the features and functionalities of the technical support service:

- Assistance with the initial setup of using the Service;
- Incident resolution assistance;
- Problem resolution assistance;
- Monitoring and guidance on optimizing the underlying technology stack.

In the context of the technical support, the Provider does not replace the COMMANDITAIRE in utilizing the Service. The COMMANDITAIRE remains fully responsible for configuring, operating its Virtual Machines (VMs) and Tenants, as well as managing all elements (including data and applications) stored or installed on the Provider's infrastructure. Technical support is provided in accordance with the General Terms of Sale and Use, with the Provider obligated to provide means of service.

The COMMANDITAIRE commits to using the technical support service reasonably, avoiding unsubscribed services from the Provider and having Provider teams assist its own clients or third parties not covered by the contract. The Provider reserves the right to reject any service request that does not meet these criteria.

The level of support engagement is contingent upon subscribing to the associated units of work support.

### Requesting Technical Support

Technical support is accessible via a ticket system within the COMMANDITAIRE console, and is available during regular business hours (8h - 18h; Monday to Friday) excluding holidays. For emergencies outside of these hours, particularly those significantly impacting production, the on-call service can be reached through a designated phone number provided by COMMANDITAIRE at the start of the Service.

For every request or incident, it is mandatory to create a ticket with the Prestataire's support. The initialization of this ticket, encompassing all necessary information, is crucial and marks the beginning of assessing the Prestataire's commitments.

As soon as the Prestataire receives a request or incident notification—whether through the management console or following a phone call—an automatic ticket is generated. Upon reporting an incident, it's vital for COMMANDITAIRE to provide the Prestataire with comprehensive details about the encountered problem. This step is essential for accurate situation assessment, prioritization, and effective diagnosis.

COMMANDITAIRE receives confirmation via email, detailing ticket creation and its unique number. The COMMANDITAIRE can view the status and history of their requests and incident reports directly through the management console.

### Incident Management Process

Upon reporting an incident, the Technical Support team of the Service Provider initiates an investigation to pinpoint the cause of the issue and establish a diagnosis. The COMMANDITAIRE must actively collaborate with the Service Provider by providing all necessary information and executing required tests. The Service Provider can access COMMANDITAIRE's services to diagnose the incident.

If the Service Provider’s services are deemed functional and the incident is not their responsibility, COMMANDITAIRE will be notified. Upon request from COMMANDITAIRE, the Service Provider may propose Professional Services to trace the problem's origin, billed in 30-minute increments upon mutual agreement.

In cases where the incident is attributed to the Service Provider or one of their subcontractors, that party completes the diagnosis and addresses service restoration without additional costs. The diagnostic relies on exchanges between parties and the provider's data, considered valid by mutual agreement among parties.

### Process for Assigning Treatment Priority

The determination of a file's priority level is based on an analytical matrix that evaluates the impact of the incident and its degree of criticality:

- **Impact Levels** are defined as follows:

  | Impact Level | Description |
  | :-: | :-: |
  | I1 | The or services provided by the Vendor are interrupted |
  | I2 | The or services provided by the Vendor are degraded |
  | I3 | The or services provided by the Vendor are currently stable but show signs of potential long-term decline |

- **Criticism Levels** are defined as follows:

  | Criticism Level | Description |
  | :-: | :-: |
  | C1 | Services provided by the Vendor degrade at an alarming rate |
  | C2 | Services provided by the Vendor deteriorate gradually over time |
  | C3 | Services provided by the Vendor have one or more issues without significant consequences |

- Based on a thorough analysis of the situation, considering factors determining impact and criticism, a priority is assigned to the ticket according to the decision matrix below:

  | Impact Level / Criticism Level | I1 | I2 | I3 |
  | :-: | :-: | :-: | :-: |
  | C1 | Priority P1 | Priority P2 | Priority P3 |
  | C2 | Priority P2 | Priority P3 | Priority P4 |
  | C3 | Priority P3 | Priority P4 | Priority P5 |

The service level agreements (SLAs) corresponding to each priority level are detailed in the subsequent chapter.

### Service and Language of Support

The support is provided by the Vendor to the COMMANDITAURE at a minimum in French. The support can also be offered in English.

The operations of the service support provided by the Vendor for the ongoing Qualification of Bare Metal offering within SecNumCloud are located within the European Union.

## Service Level Agreements (SLAs) and Service Quality Commitments

The Provider commits to continuously monitor the performance and security integrity of its technical infrastructure delivering the Service, ensuring optimal operation.

An unavailability of the service, indicated by a performance metric, is recognized as soon as it's identified by the Provider’s monitoring system or through a user notification on the COMMANDITAIRE platform. The start of unavailability is determined at the earliest time between these two events to ensure precise and fair billing for downtime.

The termination of unavailability is officially marked by the complete restoration of service, confirmed either by the Provider’s monitoring tools or through a user return, ensuring effective resumption of operations and accurate measurement of interruption duration.

## Service Level Agreement (SLA) Availability Commitments

The Provider commits to maintaining a level of availability and performance in accordance with the defined standards for each specified period. These Service Level Agreements (SLAs) are subject to the COMMANDITAIRE implementing its systems across at least two of the available zones within the relevant region.

In the absence of these conditions by the COMMANDITAIRE, it will be unable to claim the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is provided through the COMMANDITAIRE interface. The availability metrics are calculated monthly:

- **SLA 1** (IC-INFRA_SNC-01) - Compute Availability: Guaranteed uptime of 99.99%, calculated on a 24/7, 7-day basis.
- **SLA 2** (IC-INFRA_SNC-02) - Storage Availability: Guaranteed uptime of 99.99%, calculated on a 24/7, 7-day basis.
- **SLA 3** (IC-INFRA_SNC-03) - Network Infrastructure Availability: Guaranteed uptime of 99.99%, calculated on a 24/7, 7-day basis.
- **SLA 4** (IC-INFRA_SNC-04) - Internet Access: Guaranteed uptime of 99.99%, calculated on a 24/7, 7-day basis.

**Remarks:**

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing techniques to block all traffic destined for that IP from upstream providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIREs and the Provider’s infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as deploying web application firewall software available on the market, and meticulously configuring its security groups via the command-line interface (CLI).

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols like **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).

## COMMANDITAIRE Availability Commitment

- **SLA 5**: IC-INFRA_SNC-05 -- Access to the administration console of the Service: a guaranteed availability of 97%, provided continuously, 24 hours a day, 7 days a week.
- **SLA 6**: IC-INFRA_SNC-06 -- Access to the service orchestration APIs: a uptime of 99.9%, calculated on a daily basis, 24/7.

## Service Level Agreement (SLA) Availability Commitment

### SLA 7: IC-INFRA_SNC-07

This is the availability commitment for technical support from the Provider regarding incidents, excluding scheduled maintenance:

| Priority | Guaranteed Time to Interact (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Priority P1** | 30min | 95% |
| **Priority P2** | 2h | 90% |
| **Priority P3** | 4h | 90% |
| **Priority P4** | 24h | 85% |
| **Priority P5** | 48h | 85% |

### SLA 8: IC-INFRA_SNC-08

This is the availability commitment for technical support from the Provider regarding service requests:

| Type | Guaranteed Time to Interact (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Service Request** | 4h | 90% |

*Note:*

- The GTI for incidents is calculated from the moment the COMMANDITAIRE opens a ticket until the first interaction of the Provider's support.
- Investigations into incidents concerning COMMANDITAIREs will not include remote intervention on the hosted servers of COMMANDITAIRE. Assistance in this area will be limited to explaining available metrics related to the COMMANDITAIRE environment, facilitating understanding of encountered performance issues or outages. Based on these findings, recommendations can be suggested.*

## Contractual Relationship Organization

## Provider Responsibilities

The Provider undertakes to:

- Inform the COMMANDITAIRE adequately (e.g., in case of resource capacity limitations affecting Service delivery).

- Formally inform the COMMANDITAIRE within one month, upon any formal change impacting the Service's compliance with extra-EU data protection laws (19.6 of the SNC v3.2 reference), including legal, organizational, or technical changes.

- Provide the COMMANDITAIRE with interfaces and service interfaces in French at a minimum.

- Consider sector-specific requirements related to the types of information entrusted by the COMMANDITAIRE for Service implementation, within the Provider's scope and limitations, as well as provisions outlined in the Contract, while adhering to these requirements.

- Study further sector-specific requirements from the COMMANDITAIRE regarding confided information types, and advise accordingly on necessary actions for compliance.

- Refrain from disclosing any Service performance details to third parties without the COMMANDITAIRE's explicit written authorization.

- Make all necessary information available to the COMMANDITAIRE for audits of Service conformity as per Article 28 of GDPR, through this Service Agreement.

- Act as a subcontractor in accordance with Article 28 of the General Data Protection Regulation (GDPR), offering assistance and advice to the COMMANDITAIRE upon recognizing an instruction potentially violating data protection rules.

- Notify the COMMANDITAIRE promptly, via the COMMANDITAIRE's console or email, regarding any project impacting Service security level, usage by the COMMANDITAIRE, potential functional loss, mitigation measures, and residual risks.

- Develop and implement all necessary procedures to comply with applicable legal, regulatory, and contractual requirements, alongside the COMMANDITAIRE's specific security needs defined in the Contract.

- Avoid using COMMANDITAIRE production data for testing purposes, except upon obtaining explicit written authorization from the COMMANDITAIRE, at which point the Provider commits to anonymizing these data and ensuring confidentiality during anonymization.

- Securely erase all COMMANDITAIRE data, in accordance with the "Data Deletion Procedure at Contract Termination" outlined in this Service Agreement upon contract termination or cancellation.

- Ensure secure erasure of all COMMANDITAIRE data through complete data rewrite across all storage media used for their data within the Service.

On formal written request from the COMMANDITAIRE, the Provider undertakes to:

1. Provide access to the COMMANDITAIRE's internal regulations and ethics code.
2. Make available to the COMMANDITAIRE sanctions for security policy violations.
3. Offer the COMMANDITAIRE all relevant Service event logs for review. The COMMANDITAIRE may independently consult usage-related events through Service web interfaces and APIs.
4. Provide access to procedures ensuring compliance with applicable legal, regulatory, and contractual requirements, alongside the COMMANDITAIRE's specific security needs outlined in the Contract.
5. Supply elements for assessing risks related to submitting COMMANDITAIRE data to non-EU member states' jurisdictions.
6. Inform the COMMANDITAIRE of any subsequent subcontractors involved in Service provision and any changes impacting these subcontractors.

The Provider and its affiliated entities pledge adherence to fundamental European values, including dignity, freedom, democracy, equality, rule of law, and respect for human rights. The service provided by the Provider aligns with applicable data protection legislation and upholds EU values concerning fundamental rights and respect for human dignity, liberty, equality, democracy, and the rule of law.

## Scope of Provider's Liability

Given the definitions and conditions outlined in this Service Agreement, the Provider's liabilities are confined to:

1. The shared responsibility model, described in the "Shared Responsibility Model" section of this Service Agreement, inherently limits the Provider's involvement with operational layers above providing computational resources, network, storage, and backup services. This exclusion includes, but is not limited to:

    - Management of what is installed on virtual machines (OS, middleware, applications, etc.);
    - Keeping operating systems (OS) and other software installed by the COMMANDITAIRE up-to-date in its Tenants;
    - Ensuring security of programs, software, and applications installed on virtual machines;
    - Updating virtual machines;
    - Application-level data backup.

2. The Provider cannot claim ownership of data transmitted and generated by the COMMANDITAIRE. Such data rightfully belongs to the COMMANDITAIRE.

3. The Provider emphasizes that it cannot exploit or make use of, nor can it dispose of, any data transmitted and generated by the COMMANDITAIRE without prior validation from the latter, as their disposition is reserved for the COMMANDITAIRE.

4. The Provider waives all responsibility for physically hosted and managed components, which are directly owned by the COMMANDITAIRE or a third party with whom the COMMANDITAIRE has contracted. These physical components, while under the Provider's care, are not part of the Service and fall outside the scope of this Service Agreement. The COMMANDITAIRE is responsible for assessing the adherence or dependency level of these components concerning the ongoing Bare Metal Service qualification within SecNumCloud.

## Access Restrictions

In accordance with the Service, the Provider is expressly prohibited from accessing Tenants belonging to the COMMANDITAIRE without prior authorization. It is the responsibility of the COMMANDITAIRE to provide necessary access for Provider personnel, based on specific hosting and service requirements, as well as professional support services chosen by the COMMANDITAIRE (if applicable).

The COMMANDITAIRE acknowledges that these accesses are granted exclusively for the purpose of fulfilling agreed-upon service obligations, ensuring secure and compliant management in accordance with the agreement terms.

Remote access by third parties involved in providing Provider services is strictly forbidden. Should a technical requirement necessitate such access, it can only be established after clear notification to the COMMANDITAIRE, detailed justification provided, and written approval obtained.

This measure ensures control and security of COMMANDITAIRE's data, confirming that any exception to the rule is duly authorized and documented.

## Third Party Responsibilities in Service Delivery

The Provider maintains a list of third-party partners involved in delivering the Service, including editors, providers (of the Provider), and other service suppliers. The Provider implements the following measures with these third parties:

- The Provider mandates that all third parties contributing to the Service implementation adhere to at least the same security level as the one it commits to maintaining within its own security policy applicable to the service;

- The Provider negotiates audit clauses with each third party involved in delivering the service, enabling an accreditation body to verify compliance of these third parties with legal requirements and the Provider's Service Level Agreements (SLAs), thereby allowing the Provider to fulfill its obligations under this Service Agreement.

- The Provider establishes a procedure for regularly monitoring the security measures implemented by third parties delivering the service to ensure they meet the Provider's commitment as outlined in this Service Agreement.

- The Provider ensures tracking of changes made by third parties that could impact the information system's security level of the delivered service.

## RESPONSIBILITIES AND OBLIGATIONS OF THE COMMANDITAire

The COMMANDITAIRE is responsible for the following duties within the scope of the Service:

- For reference, the Prestataire provides the COMMANDITAIRE with a computing platform (bare server) whose configuration is at the COMMANDITAIRE's expense.

- The COMMANDITAIRE grants authorization to the ANSSI and the qualification organization SNC to audit both the Service and the underlying technical infrastructure delivering the Service.

- The COMMANDITAIRE must inform the Prestataire of any sector-specific requirements concerning the types of information entrusted by the COMMANDITAIRE, which need to be considered by the Prestataire.

- The COMMANDITAIRE accepts not to request from the Prestataire any additional requirements or actions that would exempt the Prestataire from the SecNumCloud reference framework's current requirements (one part) or lower the established security level resulting from adhering to these reference framework's requirements (other part).

## COMMANDITAIRÉ'S RIGHTS

At any point during the contractual relationship, the COMMANDITAIRE may file a claim regarding the qualified service with the ANSSI.

At any time, the COMMANDITAIRE can request from the Prestataire access to its internal settlement and ethics charter.

## Data Erasure Upon Contract Termination

Upon the conclusion of the contract, whether by expiration or termination for any reason, the Provider commits to securely erase all data associated with the COMMANDITAIRE, including technical data. The Provider will ensure that the COMMANDITAIRE is formally notified of this erasure plan within a 21-day (calendar) window. The COMMANDITAIRE's data will be deleted no later than 30 days following this notification.

To validate this deletion, the Provider will provide the COMMANDITAIRE with a certificate confirming the complete removal of data.

## Service Lifecycle of the Present Service Agreement

This document outlines the lifecycle stages of the current service agreement, detailing its initiation, execution, maintenance, and termination. Each phase is crucial for ensuring effective service delivery, compliance with legal obligations, and continuous improvement.

### 1. Initiation Phase

- **Requirement Analysis**: Identifying customer needs through consultation and documentation of requirements.
- **Feasibility Study**: Evaluating technical and operational viability to confirm the project's feasibility.
- **Contract Negotiation**: Drafting and finalizing terms, including scope, pricing, service level agreements (SLAs), and payment schedules.
- **Legal Review**: Ensuring compliance with local laws and regulations governing service contracts.

### 2. Execution Phase

- **Service Design**: Developing detailed technical specifications, architecture, and integration plans.
- **Resource Allocation**: Assigning personnel, equipment, and software necessary for service delivery.
- **Testing & Validation**: Conducting rigorous testing phases to ensure the service meets quality standards and customer expectations.
- **Training**: Equipping staff with the skills required to manage and support the service effectively.

### 3. Maintenance Phase

- **Ongoing Support**: Providing technical assistance, troubleshooting, and maintenance services as per agreed SLAs.
- **Performance Monitoring**: Continuously tracking service performance against predefined metrics and KPIs.
- **Updates & Enhancements**: Implementing updates, patches, and feature enhancements to keep the service current and competitive.
- **Change Management**: Managing changes in requirements or scope through formal change control processes.

### 4. Termination Phase

- **Review of Contract Terms**: Evaluating contractual obligations for termination conditions (e.g., breach, non-payment, mutual agreement).
- **Data Migration & Handover**: Ensuring a smooth transition by migrating data and handing over responsibilities to the customer or another service provider.
- **Final Settlements**: Processing any outstanding payments and resolving financial matters in accordance with contract terms.
- **Post-Termination Review**: Conducting an analysis of the entire lifecycle to identify lessons learned, areas for improvement, and potential enhancements for future agreements.

This structured approach ensures that each phase of the service lifecycle is managed effectively, contributing to customer satisfaction, operational efficiency, and compliance with legal obligations throughout the agreement's duration.

## Effective Entry into Force of the Service Agreement

The present Service Agreement shall come into effect on the date of its signing by the COMMANDITAIRE.

Data collection, processing, storage, and handling in relation to pre-sale activities, service implementation, and termination are conducted in accordance with applicable laws.

## Evolutions of the Service Agreement

The modifications or additions to the present Service Agreement are exclusively based on requests formulated by the designated governance bodies. These change proposals will be reviewed by the Parties, authorized to determine which aspects require a written formalization.

It is agreed that any evolution of the Service Agreement, after validation, altering the initially established financial conditions, necessitates the drafting and signing of an amendment to the current contract.

Factors potentially prompting a review of this Service Agreement include, but are not limited to:

- The evolution of the technical infrastructure delivering the Bare Metal Service;
- Adjustments made by the Provider to its services for providing the Service;
- Variations in agreed commitments and applicable sanctions;
- Organizational reconfigurations within COMMANDITAIRE or the Provider;
- Expansion or reduction of the Service's operational scope.

The management of versions and revisions of the Service Agreement is documented at the beginning of this document for ease of tracking.

### Evolutions Triggered by COMMANDITAIRE

The evolutions of the Service Agreement may originate from:

- An update to the managed infrastructure provided by the Vendor;
- A change in the services implemented by the Vendor;
- A modification of the service level agreement commitments by the Vendor.

### Changes Initiated by the Provider

Any modification of the Service Agreement is subject to approval by the **Commanditaire**. It is understood that any validated modification or addition affecting financial elements of the Contract may necessitate signing an amendment to this one.

## Reversibility

Cloud Temple commits to enabling review of this Service Agreement (including the right to terminate) without penalty for the COMMANDITAIRE in case of loss of SecNumCloud qualification.

The Services do not include an obligation of reversibility (i.e., assistance provided by Cloud Temple for the COMMANDITAIRE to migrate their system to another "Provider") except for the provision of the COMMANDITAIRE interface by the Provider, enabling the COMMANDITAIRE to back up and retrieve their data, including their system's configuration data via one or more documented and externally exploitable formats. This can be achieved either by providing files in documented and externalizable formats (at the COMMANDITAIRE's discretion) or through the establishment of technical interfaces allowing access to data structured according to a documented and exploitable schema (API).

The COMMANDITAIRE, being the sole steward of their system, must take all necessary measures to facilitate this operation as needed (which may involve meticulous documentation efforts) and the development of a reversibility plan. Should the COMMANDITAIRE require additional services, the Provider can offer consulting services tailored to this purpose under a separate, negotiable contract.

## Service Availability, Continuity, and Recovery

In the realm of cloud computing and IT systems, ensuring service availability, continuity, and recovery is paramount. These aspects are critical for maintaining business operations, data integrity, and customer trust. Let's delve into each of these components:

### 1. Service Availability

Service availability refers to the proportion of time a system or service is operational and accessible to users. High availability is achieved through redundancy, load balancing, and failover mechanisms that minimize downtime. Key strategies include:

- **Redundant Infrastructure**: Deploying multiple servers or components in parallel to ensure if one fails, others can take over seamlessly.
- **Load Balancing**: Distributing network traffic across multiple servers to prevent overload on any single machine.
- **Failover Mechanisms**: Automatically switching to backup systems when primary systems fail, ensuring continuous service provision.

### 2. Continuity

Continuity focuses on maintaining operations during and after disruptions. It involves having robust disaster recovery plans (DRP) and business continuity plans (BCP). Key elements include:

- **Disaster Recovery Plans (DRP)**: Detailed procedures to restore IT infrastructure and services post-disaster, ensuring minimal data loss and quick resumption of operations.
- **Business Continuity Planning (BCP)**: Strategies to keep essential business functions operational during and after a disruption, safeguarding against potential revenue loss.
- **Data Replication**: Regularly replicating critical data across geographically diverse locations to ensure availability even in the event of a major outage.

### 3. Recovery

Recovery encompasses all processes involved in restoring IT systems and data after an incident or disaster. It includes:

- **Data Backup**: Regularly backing up critical data to secure, off-site locations to prevent permanent loss.
- **Incident Response**: Quick identification, assessment, and mitigation of incidents (e.g., cyberattacks, hardware failures) to minimize impact.
- **Testing Recovery Procedures**: Periodically testing DRP and BCP to ensure effectiveness and identify areas for improvement.

### Best Practices

- **Implement a 3-2-1 Rule**: Maintain three copies of data, on two different media types, with one copy stored offsite (1).
- **Automate Recovery Processes**: Utilize automation tools to streamline failover and recovery processes, reducing human error and response time.
- **Regular Audits and Updates**: Conduct regular audits of your availability, continuity, and recovery strategies, updating them as necessary to adapt to evolving threats and technologies.

### Conclusion

Ensuring service availability, continuity, and robust recovery mechanisms are integral to effective IT management in the cloud era. By implementing these principles and best practices, organizations can enhance their resilience against disruptions, safeguard data integrity, and maintain uninterrupted service delivery, thereby fostering customer confidence and business stability.

### Incident and Outage Management

This section outlines the procedures and processes for managing incidents and outages within our cloud infrastructure. The goal is to ensure minimal disruption, rapid resolution, and effective communication with stakeholders during any service disruption.

#### Key Components:

1. **Incident Classification**:
   - Categorize incidents based on severity (e.g., critical, high, medium, low).
   - Define clear criteria for each level to facilitate prioritization.

2. **Incident Response Team (IRT)**:
   - Establish a dedicated team responsible for managing and resolving incidents.
   - Roles: Incident Manager, Technical Lead, Communications Specialist, etc.

3. **Incident Logging and Tracking**:
   - Implement a system to log all incident details (date, time, description, affected systems).
   - Utilize an incident management tool for real-time tracking and status updates.

4. **Communication Plan**:
   - Develop templates for internal and external communication during outages.
   - Ensure stakeholders are informed promptly about the incident's impact and resolution progress.

5. **Root Cause Analysis (RCA)**:
   - Conduct thorough investigations post-incident to identify underlying causes.
   - Document findings and implement corrective actions to prevent recurrence.

6. **Post-Incident Review**:
   - Hold debrief sessions with the IRT to discuss lessons learned.
   - Update incident response procedures based on feedback and RCA outcomes.

7. **Documentation and Reporting**:
   - Maintain detailed records of all incidents, including actions taken and resolutions.
   - Generate reports for management and compliance purposes.

8. **Training and Drills**:
   - Regularly train IRT members on incident response procedures.
   - Conduct simulated drills to test readiness and identify areas for improvement.

#### Tools and Technologies:

- Incident Management Software (e.g., PagerDuty, ServiceNow)
- Monitoring and Alerting Systems (e.g., Prometheus, Grafana)
- Collaboration Platforms (e.g., Slack, Microsoft Teams)

By adhering to these procedures, we aim to enhance our incident management capabilities, ensuring resilience and reliability of our cloud services while maintaining effective communication with all stakeholders.

---
Incidents
---

### Types of Incidents Handled Under This Service Agreement

- **Damages**;
- **Outages and Failures**;
- **Security Incidents affecting the availability, confidentiality, or integrity of the Service.**

### Incident Handling

> The Provider promptly informs the COMMANDITAIRE of incidents and outages via a notification in the COMMANDITAIRE console or through email to the designated COMMANDITAIRE contact. The Provider notifies the COMMANDITAIRE regarding incident resolution via the same channel used for incident notification, or as indicated in the incident notification.

#### Incident Severity Notification Levels

The COMMANDITAIRE is responsible for determining the severity levels of security incidents it wishes to be notified about, such as formalization within a PAS applicable to the Service.

By default, the COMMANDITAIRE receives notifications for:

- Security incidents with significant impact (I1 and I2 according to the impact scale defined in the processing priority process of this Service Convention)

- Security incidents affecting the confidentiality or integrity of data entrusted to COMMANDITAIRE under the Service

- Data breaches concerning personal data for which COMMANDITAIRE is responsible for processing as per Article 8 of Annex DPA within the Service context

- [Additional levels/types of notifications can be specified by the COMMANDITAIRE based on specific requirements or agreements]

### Service Maintenance

This section outlines the procedures and protocols for maintaining our cloud services. It includes schedules for routine maintenance, updates, and troubleshooting processes to ensure continuous service availability and optimal performance. 

1. **Scheduled Downtime**:
   - **Maintenance Windows**: We communicate upcoming scheduled downtimes clearly through various channels such as email notifications, in-app alerts, and our status page. These windows are planned to minimize disruption for users.
   - **Impact Assessment**: Before any maintenance, we assess potential impacts on services, user experience, and business operations to implement mitigation strategies where necessary.

2. **Patch Management**:
   - **Security Updates**: Regular updates to software and systems are crucial for security. These include operating system patches, application fixes, and security enhancements.
   - **Testing**: All critical patches undergo rigorous testing in staging environments before deployment to production to ensure no adverse effects on service functionality.

3. **Performance Optimization**:
   - **Load Balancing**: We continuously monitor resource utilization and adjust load balancers to distribute traffic evenly across servers, enhancing performance and reliability.
   - **Caching Strategies**: Implementing efficient caching mechanisms reduces latency and improves response times for frequently accessed data.

4. **Incident Response**:
   - **Monitoring Tools**: Utilize advanced monitoring tools to detect issues proactively. Real-time alerts notify our operations team immediately upon detection of potential problems.
   - **Troubleshooting Procedures**: Defined procedures guide the team through diagnosing and resolving incidents efficiently, minimizing downtime.

5. **Documentation and Reporting**:
   - **Incident Logs**: Detailed logs of all maintenance activities, incidents, and resolutions are maintained for auditing purposes and continuous improvement.
   - **Post-Mortem Analysis**: After each significant event, a thorough analysis is conducted to identify root causes and implement preventive measures.

6. **Communication Plan**:
   - **Stakeholder Updates**: Regular updates are provided to stakeholders regarding service maintenance schedules, potential impacts, and any changes in service availability.
   - **Customer Communication**: Clear communication channels ensure customers are informed about planned outages or service interruptions well in advance.

By adhering to these practices, we aim to provide a robust, reliable, and secure cloud environment that meets the evolving needs of our users while maintaining high operational efficiency.

### Nature of Maintenance

Data breaches involving personal data for which the Provider is responsible for processing and containing personal data of the **COMMANDITAIRE**, in accordance with Article 8 of Annex DPA. The maintenance provided includes:

- Implementation of the operational readiness plan for the Service to ensure optimal availability indicators, as outlined by the Provider above;

- Execution of the PCA/PRA plan (if procured by the **COMMANDITAIRE**) triggered by potential incidents that may occur.

### Remote Access to Cloud Temple Outside of COMMANDITAIRE's Perimeter

The Provider expressly prohibits, under the terms of this Service Agreement, any access to Tenants and the COMMANDITAIRE interface.

It will be the responsibility of COMMANDITAIRE to grant the necessary access to Provider personnel. COMMANDITAIRE acknowledges that such accesses will be utilized for hosting and, ultimately, management (if subscribed by COMMANDITAIRE).

### Remote Access by Third Parties for Service Provision Within the COMMANDITARE

No remote access by third parties involved in providing the SERVICE is permitted.

Should a technical necessity arise, such access would only be granted post-notification and written approval from COMMANDITAIRE.

# Data Erasure Procedure at Contract Termination

At the conclusion of the Contract, whether due to expiration or any other reason, the Provider ensures a secure erasure of all data processed under the Service, encompassing the COMMANDITAIRE's technical data. The Provider will provide a formal notice within twenty-one (21) calendar days. The COMMANDITAIRE's data will be deleted no later than thirty (30) days following the notification. The Provider furnishes a data erasure certificate to the COMMANDITAIRE.

## Applicable Law

## Generally Speaking

The applicable law and jurisdiction for this Service Agreement is French law.

## Compliance with Laws and Regulations

The Provider commits to the following:

- Identification of applicable legal and regulatory constraints within the scope of the Service;
- Adherence to these legal and regulatory constraints for the data entrusted to the Provider, within the limits of its responsibilities on one hand, and as stipulated in the Contract on the other;
- Compliance with the French Data Protection Law (Loi informatique et libertés) and the General Data Protection Regulation (RGPD);
- Implementation of data protection measures;
- Establishment and maintenance of a legal and regulatory compliance process;
- Ensuring appropriate relationships or continuous monitoring with relevant sectoral authorities concerning the nature of the processed data under the Service, including but not limited to ANSSI, CERT-FR, and CNIL.

## GDPR

As a processor under the provisions of Article 28 of the General Data Protection Regulation (RGPD), the Provider commits to:

- Ensuring transparency and traceability;

- Designating a Data Protection Officer (DPO) responsible for defining and implementing data protection measures concerning personal data;

- Providing assistance and advice to the COMMANDITAIRE, alerting them if an instruction from the latter constitutes a violation of data protection rules that the Provider can identify;

- Ensuring security of processed data due to its SecNumCloud qualification.

## Data Protection in Light of Extra-EU Law

The Prestator's corporate seat is located within an EU member state. The Prestator's share capital and voting rights in its own company do not, either directly or indirectly:

- individually exceed 24%;

- collectively exceed 39%;

held by third entities with their headquarters, central administration, or main establishment within a non-EU member state.

In the event that the Prestator, as part of its service, engages a third party (including a subcontractor) located outside an EU member state or controlled/owned by a third party based outside the EU, the Prestator commits to:

- ensuring this third party has no access to operational data;

- maintaining operational autonomy through the ability to switch to another subcontractor or implement alternative technology promptly.

For clarity, the data in question includes those entrusted to the Prestator by the COMMANDITAIRE, as well as any TECHNICAL DATA encompassing information about the COMMANDITAIRES.

For the purposes of this article, the notion of control is understood according to the definition provided in Article L233-3 of the French Commercial Code.

# SIGNATURES

Made in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\, on the \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ date

For Cloud Temple, the PROVIDER

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\, the COMMANDER