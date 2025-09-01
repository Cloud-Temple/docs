---
Title: Service Level Agreement (SLA) for OpenIaaS in the SecNumCloud Environment
---

# OPENIaaS SERVICES AGREEMENT CONVENTION

| Recipients: | **Commanditaire** |
| :--- | :--- |
| Document Reference: | CT.AM.JUR.ANX OPENIaaS-202530101_v3.0.docx_Day JJ AAAA |
| Interlocutors: | *Prenom* *Nom* Account Manager email: *prenom.nom@cloud-temple.com* |
| Last Update Date: | 17/01/2025 |
| Contractual Validation Date: | Day JJ AAAA |

------------------------------------------------------------------------

| Version | Date | Action | Author |
| :--- | :--- | :--- | :--- |
| v0.1 | 07/06/2022 | Initial Draft | Lorena ALCALDE |
| v0.2 | 14/09/2022 | Enrichment | Lorena ALCALDE |
| v1.0 | 30/12/2022 | Integration of Indicators | Lorena ALCALDE |
| v1.1 | 23/01/2023 | Modification of Footnote | Lorena ALCALDE |
| v1.2 | 22/05/2023 | Enrichment | Lorena ALCALDE |
| v1.3 | 29/06/2023 | Enrichment | Lorena ALCALDE |
| v1.4 | 06/11/2023 | Modification of Capital and Enrichment | Lorena ALCALDE |
| v1.5 | 30/11/2023 | Enrichment | Lorena ALCALDE |
| v1.6 | 21/03/2024 | Enrichment | Lorena ALCALDE |
| v2.0 | 29/03/2024 | Compliance Adjustments (SNC) | Nicolas ABRIOUX |
| v2.0 | 03/04/2024 | Publication | Lorena ALCALDE |
| V3.0 | 17/01/2025 | Enrichment | Emeline CAZAUX |

## Preface and Glossary

This document serves as a preface and glossary for the following content on cloud computing, IT systems, and software engineering. It outlines key concepts, definitions, and provides an introduction to the topics that will be discussed in detail throughout this resource. The structure of this section mirrors the Markdown format, ensuring that the text is preserved while adhering to the specified constraints.

### 1. Preface

This guide aims to provide a comprehensive overview of cloud computing, IT infrastructure, and software development practices. It is designed for professionals seeking to deepen their understanding or those new to these domains. The content will cover foundational concepts, emerging trends, best practices, and technical details relevant to both beginners and experienced practitioners.

### 2. Glossary

#### A. Cloud Computing
- **Cloud**: An abstraction that provides on-demand access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, services) over the Internet.
- **IaaS (Infrastructure as a Service)**: Delivers virtualized computing resources such as servers and storage over the internet.
- **PaaS (Platform as a Service)**: Provides a platform for developing, running, and managing applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching software applications.
- **SaaS (Software as a Service)**: Software applications hosted by a service provider over the internet; users can access these applications via web browsers or thin client interfaces.
- **Edge Computing**: Processing data closer to where it is collected, reducing latency and bandwidth use.

#### B. IT Systems
- **Virtualization**: The abstraction of physical resources into virtual ones, allowing multiple operating systems to run on a single hardware platform.
- **Containerization**: A lightweight form of virtualization that allows applications to be packaged with their dependencies, ensuring consistent operation across different computing environments.
- **Microservices Architecture**: An architectural style that structures an application as a collection of small, independent services, which communicate with each other using APIs.

#### C. Software Engineering
- **Agile Methodology**: A project management and software development approach where requirements and solutions evolve through the collaborative effort of self-organizing and cross-functional teams.
- **DevOps**: A set of practices that combines software development (Dev) and IT operations (Ops), aiming to shorten the system development life cycle while delivering applications and services more reliably.
- **Continuous Integration/Continuous Deployment (CI/CD)**: A software development practice where code changes are integrated into a shared repository frequently, followed by automated building, testing, and deployment.

This glossary serves as a reference point throughout the document, ensuring clarity in terminology while navigating through complex topics related to cloud computing, IT systems, and software engineering.

## Introduction

The present document formalizes the service agreement associated with the OpenIaaS service currently under qualification by SecNumCloud.

The Service is currently under qualification by SecNumCloud (see attached attestation, which will be in Annex).

This service agreement fully completes and complements the general terms of sale and use of the Provider. It is understood that the contractual documents are interpreted consistently across them. In case of contradiction or divergence between the terms of the contractual documents, the following order of precedence shall apply:

1. General Terms of Sale and Use (CGVU)
2. Service Agreement SecNumCloud IaaS
3. Service Agreement SecNumCloud OpenIaaS
4. Service Agreement SecNumCloud PaaS
5. Specific Bare Metal Service Agreement
6. Particular Service Agreement
7. Security Insurance Plan (PAS)
8. Particular Conditions of Use (CPU)
9. Data Protection Agreement

## Glossary

In the present Service Agreement, the **Commanditaire**, **Provider**, and **Parties** are identified in the Contract to which this Service Agreement is annexed.

The following expressions used in this Service Agreement shall be interpreted according to the definitions assigned to them below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, whether through a procedure or not.

- **Standard Change:** A change subject to a process with known and accepted procedures for deployment and impacts (including financial ones) at the time of approval by Parties. It is then integrated into the standard change catalog, potentially having a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Provider enabling the Commanditaire to benefit from the Service, to which this Service Agreement is annexed.

- **Service Agreement:** This document established within a specific contract or General Terms and Conditions of Sale and Use (CGVU), in compliance with SecNumCloud requirements.

- **Service Request:** A request for enhancement following a procedure where realization: i) does not modify the CMDB, ii) operational mode, costs, and risks are known and accepted upfront without specific rollback procedures, iii) is subject to an agreed level of service (SLA) agreement and included in the contract fee when performed during business hours.

- **Availability:** Capacity to ensure Service availability and optimal performance, in accordance with defined criteria and commitments within Service Level Agreements (SLAs).

- **Technical Data:** Encompasses all data processed for delivering the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration of access, directory, certificates, etc.

- **Event:** Any detectable or identifiable occurrence that may have significance for managing the Service.

- **Hypervisor:** An operating system allowing execution of virtual machines on a compute layer.

- **Incident:** Any unforeseen event disrupting normal Service operation or compromising COMMANDITAIRE data security.

- **Security Incident:** Any event within the Service's scope:

  - Intentionally malicious;
  - Accidental, affecting the integrity, confidentiality, or traceability of the Service or COMMANDITAIRE data;
  - Compromising existing security measures. Non-origin-based availability outages are not considered Security Incidents (hardware failure, bug, malfunction, natural disaster...).

- **Commanditaire Interface:** Administration interface for the Service provided by the Provider to the Commanditaire, comprising a web administration console and an API.

- **Deployment:** Actions taken to implement a Change once approved (ITIL change concerns management, not the actual execution/realization).

- **Problem:** Cause of recurring incidents, potential incident (situation at risk) requiring analysis and resolution to prevent recurrence.

- **Region:** A geographically defined set of availability cloud zones providing network, compute, and storage services optimized for latency, performance, and local regulatory compliance.

- **OpenIaaS Service:** An open-source IaaS service currently under SecNumCloud qualification, delivered by the Provider from maintained technical infrastructures as described in the "Service Description" section of this Service Agreement.

- **Catastrophe:** A severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Monitoring of an Information System or Service, involving collection of various data such as measurements and alarms. This activity is limited to observation and tracking without direct intervention on monitored elements, a prerogative reserved for operations management.

- **Tenant:** An isolated instance reserved for a user or group of users sharing a common technical infrastructure while maintaining data and application independence and security.

- **Availability Zone (AZ) / Availability Region:** A specific, isolated section of the cloud computing infrastructure designed to ensure high availability and resilience of services through geographic distribution of resources.

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

- To specify the performance expectations from the CLIENT regarding the functionality and reliability of the Service;
- To outline the Provider's obligations to meet agreed service levels;
- To identify applicable regulatory standards specifically for the delivered Service;
- To ensure uniformity and integrity in assessing the quality of the Service;
- To guarantee the excellence of services provided, evaluated through quantitative performance indicators.

In case the Provider loses its SecNumCloud qualification, the Contract can be terminated immediately, without penalty, at the CLIENT's discretion. The Provider commits to notifying the CLIENT of this degradation via an official notification, sent by registered mail with request for receipt.

It should be noted that any modification or adjustment in the SecNumCloud qualification will not be construed as a revocation of the initial qualification.

# Audit

The Provider commits to enabling the COMMANDITAIRE, or any third-party and non-concurrent auditor designated by the Provider, to access all necessary documents for verifying full compliance with the obligations related to GDPR Article 28 compliance. This facilitates the conduct of audits.

By accepting this Service Agreement, the COMMANDITAIRE grants explicit authorization to:

1. The French National Agency for Information System Security (ANSSI) and any competent qualification entity to verify the Service's and its information system's compliance with the SecNumCloud reference framework.
2. A designated third-party audit firm, duly certified PASSI by the Provider, to conduct security audits of the Service.

## Service Description

```markdown
### Service Description

Le service proposé est un plateforme de cloud computing hautement évolutive et sécurisée, conçue pour répondre aux besoins d'entreprise modernes en matière de gestion des données et des applications. Notre solution offre une flexibilité maximale, permettant aux clients de déployer, de gérer et d'étendre leurs ressources informatiques sans investissement initial élevé ni contraintes liées à l'infrastructure physique.

**Caractéristiques clés:**

- **Scalabilité intelligente**: Automatisation des ressources pour s'adapter aux besoins fluctuants en temps réel, garantissant une performance optimale sans surcoût.
- **Sécurité robuste**: Protocoles de sécurité avancés et conformité aux normes internationales (ISO 27001, SOC 2), protégeant les données contre les menaces actuelles et émergentes.
- **Interopérabilité** : Intégration facile avec des systèmes existants grâce à des APIs robustes et des outils de gestion intuitifs, favorisant l'innovation et la collaboration.
- **Gestion efficace des coûts**: Outils d'analyse détaillés permettent aux clients de surveiller et de contrôler leurs dépenses en temps réel, optimisant ainsi les ressources.
- **Support 24/7** : Équipe de support technique disponible 24 heures sur 24, 7 jours sur 7, pour assurer une assistance rapide et efficace.

Notre plateforme est conçue pour s'adapter aux besoins variés des entreprises, qu'elles soient de petite taille ou de grande envergure, en offrant un équilibre parfait entre performance, sécurité et flexibilité.
```

## Shared Responsibility Model

The service offered by the Provider is characterized by providing the following services, which align with the shared responsibility principle as outlined in the SecNumCloud reference:

- Provisioning of computing resources (compute);
- Availability of storage spaces;
- Access to network connectivity and internet services;
- Offering a dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the COMMANDITAIRE within the context of the Service is detailed in §7.1.

It is understood that the Provider will utilize its expertise to deliver the Services in accordance with professional best practices and in compliance with SecNumCloud requirements.

## Detailed Scope of the Service

| Service | Description |
| :--- | :--- |
| **Compute** | Computing resource for the COMMANDITAIRE tenant |
| **Storage** | Production data storage for the COMMANDITAIRE tenant |
| **S3 Object Storage** | Provision of a sovereign multi-AZ object storage infrastructure compatible with standard S3 APIs. |
| **Backup** | Subscription module to S3 Object Storage |
| **Network Infrastructure** | Network resource for the COMMANDITAIRE tenant |
| **COMMANDITAIRE Console** | Service enabling COMMANDITAIRE access and administration of its OpenIaaS via the Shiva interface |
| **Support** | Support service covering the above services only (\*) |

\_(\*) Within the scope of the current qualification service, SNC and Prestataire's responsibilities in this regard\_

### Datacenter Infrastructure

The Service encompasses the provision of the following qualified services for each Availability Zone:

- A datacenter located in France for the FR region, compliant with the latest technological standards, offering a resilience level equivalent to or superior to Tier 3 as per Uptime Institute;
- Provision of technical rooms within dedicated datacenters designed to accommodate essential technical equipment required for service production, including computing, storage, networking, cabling, and other necessary components;
- Secure electrical supply ensured by two independent power circuits, guaranteeing uninterrupted service continuity;
- Supply of climate control systems tailored to meet manufacturer standards and recommendations, ensuring optimal operating conditions for technical devices;
- Continuous monitoring and detailed metrology, enabling precise tracking and proactive management of the service's performance and security.

The Provider ensures the availability of advanced fire detection and suppression services, designed to identify and effectively neutralize any fire incidents within installations. These systems feature high-precision smoke detectors and rapid-response extinguishing devices that do not damage IT equipment. This service is critical for preventing fire hazards, minimizing potential damage, and ensuring operational continuity.

The COMMANDITAIRE is informed that all implemented security procedures, including annual backup generator drills, are vital for maintaining the continuity and integrity of provided services. These practices aim to minimize downtime risks and ensure optimal response in case of incidents. By accepting these terms, the COMMANDITAIRE acknowledges the importance of these measures and commits to full cooperation in their implementation. The COMMANDITAIRE is also encouraged to review and incorporate security recommendations into its own risk management strategy.

### Software Management Infrastructure

The Provider delivers to the COMMANDITAURE the administration console and the API necessary for utilizing the SERVICE. They commit to maintaining this console and API in optimal operational condition, ensuring continuous security maintenance. This is referred to as the "COMMANDITAURE Interface."

The Provider notifies the COMMANDITAURE that unusual usage of the "COMMANDITAURE Interface," particularly excessive use of its command APIs (hammering), can trigger automatic security measures resulting in the blocking of access to command APIs or the SERVICE. It's crucial to note that this situation does not equate to a service outage but rather an action to protect the SERVICE and Provider's infrastructure; thus, the COMMANDITAURE should not interpret this as an outage in its calculations.

Furthermore, the Provider informs the COMMANDITAURE that identical API requests (duplicates) sent to their APIs are limited to one per second (Throttling). If the COMMANDITAURE submits identical requests at a higher frequency, their rejection cannot be construed as a service outage.

### Computing Infrastructure

The Service encompasses the provision of computing resources within the subscribed zones by the COMMANDITAIRE in the form of virtual machines. This includes:

- Provision of hardware necessary for the smooth operation of compute nodes;
- Supply of compute nodes in quantities specified by the COMMANDITAIRE and distributed across the availability zones chosen by them. Note that these compute nodes are exclusively dedicated to the COMMANDITAIRE;
- Availability of hypervisor operating systems, along with assurance of the infrastructure's operational readiness and security necessary for managing these hypervisor operating systems. It is crucial to highlight that while the Provider is responsible for the operational maintenance and overall security of the Service, they lack specific knowledge regarding the COMMANDITAIRE's production environments or workload requirements. Consequently, the decision to update the hypervisor operating system on compute nodes, an action potentially necessitating a restart, falls entirely on the COMMANDITAIRE. This operation can be executed via the COMMANDITAIRE Interface.

The selection of the compute node model, chosen from the catalog provided by the Provider, is the responsibility of the COMMANDITAIRE.

### Storage Infrastructure

The service includes providing the COMMANDITAIRE with a shared storage infrastructure of type SAN (Storage Area Network), offering various performance levels. This service encompasses:

- Implementation and maintenance of the dedicated SAN network in operational condition and security;
- Installation, management, and upkeep of shared storage arrays among clients, including their operational readiness, security, supervision, and monitoring;
- Deployment of automated systems for allocating dedicated LUNs (Logical Unit Numbers) of storage for COMMANDITAIRE's use, aligned with subscribed volumes by COMMANDITAIRE.

### Global Network Infrastructure

The Provider, as part of the Service, establishes a global network facilitating the COMMANDITAIRE's system accessibility. This service includes:

- The provision, maintenance in operational condition, and security of all fiber optic links connecting various Availability Zones;

- The provision, maintenance in operational condition, and security of technical equipment necessary for the proper functioning of the network and client isolation.

The Tenant COMMANDITAIRE's network interconnection with Internet or private networks, as well as the networking equipment, operator links, and other technical components enabling this interconnection, are outside the scope of the Service. This network interconnection is implemented in accordance with provisions outlined in the Contract.

### Backup Infrastructure

The Provider offers the COMMANDITAIRE a dedicated and managed backup service, designed to protect its virtual machines. The Provider ensures the operational readiness and security of this backup service. The Provider guarantees that COMMANDITAIRE's backups will be located outside the availability zone of the protected workloads, subject to COMMANDITAIRE subscribing to the appropriate infrastructure units.

This backup service is limited to backing up virtual machines and the topology configurations of the OpenIaaS environment for Tenants of COMMANDITAIRE within the Service's framework. The development and application of a suitable backup policy by COMMANDITAIRE depend on subscribing to specific infrastructure units. It is COMMANDITAIRE's responsibility to ensure that the necessary technical resources are available from the Provider to implement or adjust this policy according to available means.

The Provider commits to notifying COMMANDITAIRE in case of capacity constraints and offering consultative guidance for optimization. The Provider's obligations will be confined to implementing the backup requirements expressed by COMMANDITAIRE, within the subscribed resources.

### Implementation of Disaster Recovery or Business Continuity Solutions

The Provider delivers to the COMMANDITAIRE all necessary technical solutions to ensure optimal resource allocation across various Availability Zones. It is the COMMANDITAIRE's responsibility to effectively manage this resource distribution, for which they have access to the Provider's tools designed for this purpose.

### Limitations of Services in the Current Qualifying OpenIaaS Model

In the ongoing qualification phase of the OpenIaaS model, several limitations pertaining to services are identified:

1. **Resource Allocation and Management**:
   - The current system faces challenges in dynamically allocating resources based on real-time demands due to its reliance on static configurations.
   - There is a lack of sophisticated resource management tools that can optimize utilization across heterogeneous infrastructure components.

2. **Service Orchestration and Automation**:
   - The service orchestration capabilities are limited, primarily relying on manual workflows for complex service deployments.
   - Automated service provisioning and lifecycle management are not fully integrated into the current framework, leading to inefficiencies.

3. **Scalability and Elasticity**:
   - Scaling services up or down is cumbersome due to the absence of automated scaling mechanisms that can react swiftly to fluctuating loads.
   - The model lacks robust elasticity features, making it difficult to adapt to varying service demands without manual intervention.

4. **Multi-Cloud Integration**:
   - Current OpenIaaS services do not offer comprehensive integration with multiple cloud platforms, limiting the flexibility and choice for users.
   - There is a need for more standardized interfaces and tools to facilitate multi-cloud environments effectively.

5. **Security and Compliance**:
   - Security features are somewhat fragmented across different service components, leading to potential gaps in protection.
   - The model lacks comprehensive compliance monitoring and reporting tools that align with industry standards (e.g., GDPR, HIPAA).

6. **Cost Management and Optimization**:
   - Current cost management tools provide limited visibility into resource utilization and spending patterns, hindering effective budget control.
   - There is a need for more advanced analytics and automation to optimize costs based on usage patterns and service requirements.

7. **Service Level Agreement (SLA) Enforcement**:
   - Ensuring adherence to SLA terms across diverse services and infrastructure components is challenging due to the lack of unified monitoring and reporting mechanisms.
   - Automated SLA compliance checks are missing, making it difficult to proactively address potential breaches.

8. **User Experience and Interface**:
   - The user interface for managing services is not intuitive, leading to a steep learning curve for new users.
   - There is an opportunity to enhance the user experience through more streamlined, role-based interfaces that simplify service management tasks.

9. **Performance Monitoring and Analytics**:
   - Real-time performance monitoring is limited, with insufficient tools to analyze service behavior and identify bottlenecks effectively.
   - The current analytics capabilities do not provide actionable insights for proactive capacity planning or issue resolution.

10. **Integration with DevOps Practices**:
    - While the model supports some aspects of DevOps (e.g., CI/CD pipelines), it lacks seamless integration with popular DevOps tools and practices, hindering agile development cycles.
    - There is a need for enhanced interoperability to fully support modern software delivery methodologies.

These limitations are critical areas for improvement as the OpenIaaS model progresses towards full maturity and widespread adoption in enterprise environments. Addressing these will enhance service quality, efficiency, and user satisfaction.

### Managed Services in RUN

It's crucial to note that the following are excluded from the COMMANDITARE service:

- Hosting of physical components of COMMANDITARE;
- Network interconnection of the COMMANDITARE tenant, to Internet or private networks, including operator links;
- Any managed service (TMA) type;
- Assistance on virtual machines at the OS level and above in the IaaS stack, even if it's just monitoring.

However, it's absolutely not excluded that COMMANDITARE may utilize such services from the MSP offerings of the Provider to provide managed services on its tenants. These services will then fall outside the scope of this Service Level Agreement (SLA) and its bilateral commitments.

### Disaster Recovery Configuration

By default, the Provider sets up IaaS resources for the COMMANDER by reserving resources and configuring deployments to utilize Availability Zones. It is the COMMANDER's responsibility to select the Availability Zones through the COMMANDER interface.

### Backup Configuration

The backup service ceases at backing up virtual machines and topological configurations representing the OpenIaaS environment of COMMANDITAIRE's tenants within the scope of the service.

The backup provision and implementation of COMMANDITAIRE's backup policy are subject to subscribing to necessary storage space on mass storage to ensure the service. It is, therefore, COMMANDITAIRE's responsibility to procure from the Provider the technical means required to implement the backup policy within its IT perimeter or adjust the backup policy to match the implemented means. The Provider commits to informing COMMANDITAIRE of any technical capacity limitations.

The Provider will establish the necessary technical and human resources for backing up the hosted system, adhering to the subscribed resources' limits.

In cases where the Prestataire does not cover certain perimeters, COMMANDITAIRE is responsible for defining its own backup strategy and manually configuring VM backups or submitting a service request to the Provider to set up backup configurations for physical servers if COMMANDITAIRE has a managed service contract allowing the Provider access via the COMMANDITAIRE interface (console of administration) provided under this Service Agreement, which includes functionalities for configuring backups.

This service's commitment is limited to translating the specified configuration through the COMMANDITAIRE interface.

Due to the Prestataire's flexibility offerings, COMMANDITAIRE has the option to implement a "no backup" policy on certain VMs. In such cases, it falls on COMMANDITAIRE to make this decision. The Provider will not back up VMs associated with the "no backup" policy. The Provider alerts COMMANDITAIRE that choosing the "no backup" or manual backup exposes COMMANDITAIRE to irrecoverable data loss in case of incidents affecting lower layers or dependent layers under the IaaS model. In this scenario, it would be impossible for the Provider to restore data since nothing would exist to restore. The Provider recommends always backing up VMs.

For any matters concerning the operating system installed on a virtual machine and all software or programs executed "on top" of the OS, it is COMMANDITAIRE's responsibility to perform administrative and oversight tasks within the European Union if it wishes to ensure that all system layers are managed and operated from the EU. These administrative tasks outside the Prestataire's scope under this Service Agreement, as detailed in the "Shared Responsibilities" section of this Service Agreement.

### Service Implementation

This section outlines the implementation of our cloud computing service. It includes details on infrastructure setup, software deployment, security measures, and operational procedures. The following sub-sections delve into each aspect:

#### Infrastructure Setup

1. **Cloud Provider Selection**: We chose [Cloud Provider Name] due to its robust infrastructure, scalability, and compliance certifications.
2. **Virtual Machines (VMs)**: VMs are provisioned based on demand forecasting models, ensuring optimal resource allocation and cost efficiency.
3. **Storage Solutions**: Implementing a hybrid storage model combining object storage for archival data and block storage for high-performance applications.
4. **Networking**: Utilizing Virtual Private Cloud (VPC) to segment our network, enhancing security through firewalls and access control lists (ACLs).

#### Software Deployment

1. **Containerization**: Employing Docker containers for application packaging, ensuring consistency across different environments.
2. **Orchestration**: Using Kubernetes for container orchestration, facilitating automated deployment, scaling, and management of containerized applications.
3. **CI/CD Pipeline**: Integrating Jenkins for continuous integration and delivery, automating the software release process from development to production.

#### Security Measures

1. **Identity & Access Management (IAM)**: Implementing role-based access control (RBAC) with [IAM System Name] to manage user permissions effectively.
2. **Encryption**: Employing encryption at rest and in transit using [Encryption Algorithm/Method], safeguarding data integrity and confidentiality.
3. **Network Security**: Deploying intrusion detection systems (IDS) and intrusion prevention systems (IPS) for real-time threat monitoring and mitigation.
4. **Compliance**: Adhering to industry standards such as SOC 2, ISO 27001, and GDPR for data protection and privacy.

#### Operational Procedures

1. **Monitoring & Logging**: Utilizing tools like Prometheus and ELK Stack (Elasticsearch, Logstash, Kibana) for comprehensive monitoring and log management.
2. **Automated Alerts**: Setting up automated alerts through PagerDuty to ensure prompt response to critical incidents.
3. **Disaster Recovery Plan**: Establishing a robust disaster recovery strategy with regular backups and failover mechanisms across multiple availability zones.
4. **Performance Optimization**: Continuously monitoring key performance indicators (KPIs) using Grafana for real-time insights, enabling proactive optimization of service performance.

This structured approach ensures our cloud computing service is not only scalable but also secure, reliable, and efficient in meeting customer demands.

### Technical Prerequisites

To implement the Service, COMMANDITAIRE acknowledges that it will need to:

- Operate with Xen virtualization in supported versions by the editor and provided by the Provider as part of the Service;
- Utilize the Provider's backup tool;
- Declare fixed IP addresses from which the Provider will authorize access to the COMMANDITAIRE interface (whitelisting). Any modifications to this IP list must be carried out via the menu intended for this purpose in the console or through service requests for subsequent changes. At the initial service setup, the Provider will have been informed of at least one IP address as described.

## Service Location in France

It is specified that none of the operations and physical components involved in providing the Service, for which this Service Agreement governs, are located outside the European Union.

This includes, among other things, technical infrastructure support, operational oversight, and security (SOC) of the service delivery infrastructure. In fact, all storage, administrative tasks, supervision, and processing are carried out in France.

### Location of Production Data Centers Hosting the Service

In the absence of operational activities by collaborators and agencies of the Provider, all production operations (including data storage and processing) as well as technical components delivering the Service are located within French Data Centers.

### Locations of Cloud Temple's Agencies Providing the Service

Employees of Cloud Temple operating within the service's scope are based in France, with all agencies exclusively located in France. These agencies are situated in Tours, Lyon, Caen, and Paris La Défense.

The Commandant is informed about the possibility for Cloud Temple employees to work remotely. However, the Service Provider ensures equivalent security levels for remote access, particularly concerning VPN accesses. These remote accesses are implemented in accordance with SecNumCloud reference requirements.

## Support

### Nature of Support Accompanying the Service

The Provider offers a technical support service aimed at assisting
the COMMANDITAIRE in managing, troubleshooting, and optimizing their deployed resources. This service encompasses a wide range of activities, from initial configuration of services to advanced technical support for resolving specific issues.

Here's an overview of the features and functionalities of the technical support service:

- Initial setup assistance with the Service;
- Incident resolution support;
- Problem resolution support;
- Monitoring and guidance on technical optimization.

In the context of the technical support service, the Provider does not replace the COMMANDITAIRE in using the Service. The COMMANDITAIRE remains fully responsible for configuring, operating its Virtual Machines (VMs) and Tenants, as well as managing all elements (including data and applications) stored or installed on the Provider's infrastructure. Technical support is provided in accordance with the General Terms of Sale and Use, with the Provider obligated to provide means of service.

The COMMANDITAIRE commits to using the technical support service reasonably, avoiding unsubscribed services from the Provider and having the Provider's teams involved with its own clients or third parties not covered by the contract. The Provider reserves the right to reject any service request that does not meet these criteria.

The level of support engagement is contingent upon subscribing to the associated units of support work.

### Requesting Technical Support

Technical support is accessible via a ticket system through the COMMANDITAIRE console, and is available during regular business hours (8h - 18h; Monday to Friday) excluding holidays (French calendar and time). For emergencies occurring outside of these hours, particularly those significantly impacting production, the on-call service can be reached via a designated number provided by COMMANDITAIRE at the initiation of the Service.

For every request or incident, it is mandatory to generate a ticket with the Prestataire's support. The initialization of this ticket, encompassing all necessary information, is crucial and marks the commencement of evaluating the Prestataire's commitments.

As soon as the Prestataire receives a request or incident notification, either through the COMMANDITAIRE management console or following a telephone call, an automatic ticket is created. Upon reporting an incident, it is essential that COMMANDITAIRE provides the Prestataire with maximum details about the encountered problem. This procedure is vital for ensuring appropriate situation assessment, prioritization, and effective diagnosis.

COMMANDITAIRE receives confirmation via email, detailing ticket creation and its unique number. COMMANDITAIRE can view the status and incident history directly from the management console.

### Incident Management Process

Upon reporting an incident, the Technical Support team of the Service Provider initiates an investigation to identify the cause of the problem and establish a diagnosis. The COMMANDITAIRE must actively collaborate with the Service Provider by providing all necessary information and conducting required tests. The Service Provider can access the COMMANDITAIRE's services for incident diagnosis, provided their services are functioning properly and the incident is not attributable to them.

If the Service Provider’s services are deemed functional and the incident is not their responsibility, the COMMANDITAIRE will be informed. At the COMMANDITAIRE's request, the Service Provider may propose Professional Services to pinpoint the problem's origin, billed in 30-minute increments upon mutual agreement.

In cases where the incident is attributable to the Service Provider or one of their subcontractors, that party completes the diagnosis and addresses service restoration without additional costs. The diagnostic relies on exchanges between parties and the provider's data, considered valid by mutual agreement among all involved.

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
  | C3 | Services provided by the Vendor have one or more inconveniences without significant consequences |

- Based on a thorough analysis of the situation, considering factors determining impact and criticism, a priority is assigned to the ticket according to the decision matrix below:

  | Impact Level / Criticism Level | I1 | I2 | I3 |
  | :-: | :-: | :-: | :-: |
  | C1 | Priority P1 | Priority P2 | Priority P3 |
  | C2 | Priority P2 | Priority P3 | Priority P4 |
  | C3 | Priority P3 | Priority P4 | Priority P5 |

The service level agreements (SLAs) corresponding to each priority level are detailed in the following chapter.

### Language and localization of the support service

The support is provided by the Provider to the COMMANDITAIRE at a minimum in French language. The support can also be offered in English language.

The operations of the support service provided by the Prestataire for the Qualified Infrastructure Service offering SecNumCloud are located within the European Union.

# Service Level Agreements (SLAs) and Service Quality Commitments

The Provider commits to continuously monitoring the performance and security integrity of its technical infrastructure delivering the Service, ensuring optimal functionality.

Service unavailability, indicated by a performance metric, is recognized as soon as it's identified by the Provider's supervision system or through a notification from the COMMANDITAIRE user. The onset of unavailability is determined at the earliest time between these two events to ensure precise and fair billing for downtime.

Service restoration is officially marked when the service is fully restored, confirmed by either the Provider's supervision tools or a user return, ensuring effective resumption of operations and accurate measurement of interruption duration.

## Service Availability Commitments

The Provider commits to maintaining the agreed-upon availability and performance standards for each specified period, as defined by Service Level Agreements (SLAs). These commitments are contingent upon the COMMANDITAIRE implementing its systems across at least two of the available zones within the relevant region.

In the absence of these conditions being met by the COMMANDITAIRE, it will be unable to assert the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is facilitated through the COMMANDITAIRE interface. Performance metrics are calculated monthly:

- **SLA 1** (IC-INFRA_SNC-01) - Compute Availability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 2** (IC-INFRA_SNC-02) - Storage Availability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 3** (IC-INFRA_SNC-03) - Backup Reliability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 4** (IC-INFRA_SNC-04) - Network Infrastructure Availability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 5** (IC-INFRA_SNC-05) - Internet Access: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.

***Notes:***

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing to block all traffic destined for that IP from upstream providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIRES and the Provider’s infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as utilizing web application firewall software available on the market, and meticulously configuring its security groups via the command-line interface (CLI).

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports like SSH (TCP 22) and RDP (TCP 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as SMB (TCP/UDP 445) or NFS (TCP/UDP 2049).

## COMMANDITAIRE Availability Commitment

- SLA 6: IC-INFRA_SNC-06 -- Access to the administration console of the Service:
    A guaranteed availability of 97%, provided continuously, 24 hours a day, 7 days a week.
- SLA 7: IC-INFRA_SNC-07 -- Access to the service orchestration APIs:
    A 99.9% availability, calculated on a daily basis, 24/7, 7 days a week.

## Service Level Agreement (SLA) Availability Commitment

### SLA 8: IC-INFRA_SNC-08

This is the performance commitment of technical support by the Provider for incidents, excluding scheduled maintenance:

| Priority | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Priority P1** | 30min | 95% |
| **Priority P2** | 2h | 90% |
| **Priority P3** | 4h | 90% |
| **Priority P4** | 24h | 85% |
| **Priority P5** | 48h | 85% |

### SLA 9: IC-INFRA_SNC-09

This is the performance commitment of technical support by the Provider for service requests:

| Type | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Service Request** | 4h | 90% |

*Note:*

- The GTI delay is calculated from the moment the COMMANDITAIRE opens a ticket until the first support intervention by the Provider.
- Investigation of incidents concerning COMMANDITAIRE commands will not include remote server assistance on the COMMANDITAIRE's hosted servers. Assistance in this area will be limited to explaining available metrics related to the COMMANDITAIRE environment, facilitating understanding of encountered incidents or performance issues. Based on these analysis results, recommendations may be suggested.*

## S3 Storage Object Availability Commitment

- **SLA 10: IC-INFRA_SNC-10** -- Here are the availability commitments for S3 storage object:

| Indicator | Commitment | Target Availability |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Durability of an object's storage in a region | 99.9999999% / year |
| **IC-INFRA-SNC-10.2** | Availability of S3 Object Storage API | 99.99% |
| **IC-INFRA-SNC-10.3** | Maximum latency to access an object in a region | 150 ms |

Notes:

- The S3 Storage Service is specifically designed for object storage and must be used exclusively for this purpose, **exclusively excluding its use in block mode**. Using the block mode via unauthorized methods, such as employing *"FUSE" in a Linux environment*, constitutes a violation of the usage terms. Any incident, malfunction, or damage resulting from such non-conforming use is not covered by the Service Level Agreements (SLAs) defined in this service agreement.
- The durability guarantee is contingent upon adherence to current best practices and standards, and explicitly excludes any data modification, whether intentional or accidental, resulting from actions taken by the COMMANDITAIRE.

## Data Backup Engagement Details

The backup strategy for COMMANDITAIRE is contingent upon subscribing to appropriate work units.

The Provider commits to delivering a backup solution enabling COMMANDITAIRE to implement desired backup policies.

It's specified that the Provider's scope ends with providing a backup service, while COMMANDITAIRE is responsible for overseeing policy execution via the COMMANDITAIRE interface.

It's noted that capacity management of the dedicated storage space for backups falls entirely on COMMANDITAIRE. The Provider offers usage rate information through the console.

*Example: Unbacked Virtual Machine:*

Should COMMANDITAIRE detect a virtual machine not backed up, it's its responsibility to investigate the cause. In such cases, COMMANDITAIRE can contact the Provider’s Support according to the subscribed support level for assistance.

**SLA 8 (IC-INFRA_SNC-08) and SLA 9** are exclusively applicable in scenarios of a backup service incident.

## Contractual Relationship Organization

## Provider Responsibilities

The Provider undertakes to:

- Inform the COMMANDITAIRE adequately (e.g., in case of technical resource capacity limitations affecting the Service).

- Formally inform the COMMANDITAIRE and within one month, of any formal changes in law, organization, or technology that could impact the Service's compliance with extra-EU data protection requirements (19.6 of the SNC v3.2 reference document).

- Provide the COMMANDITAIRE with interfaces and service interfaces at least in French.

- Consider sector-specific requirements related to the types of information entrusted by the COMMANDITAIRE for implementing the Service, within the Provider's responsibilities and as stipulated in the Contract, while adhering to applicable laws.

- Study further sector-specific requirements related to the types of information entrusted by the COMMANDITAIRE for implementing the Service, expressed later by the COMMANDITAIRE, and inform them about necessary actions for their implementation.

- Refrain from disclosing any information regarding service provision to third parties without the COMMANDITAIRE's formal written authorization.

- Make all necessary information available to the COMMANDITAIRE for conducting compliance audits as per Article 28 of GDPR, through this Service Agreement.

- Act as a subcontractor to the COMMANDITAIRE in accordance with Article 28 of the General Data Protection Regulation (RGPD), providing assistance and advice on data protection matters when an instruction from the COMMANDITAIRE is likely to breach data protection rules, alerting them immediately.

- Notify the COMMANDITAIRE promptly via the COMMANDITAIRE's console or email address, upon learning of a security incident affecting the Service or the COMMANDITAIRE’s usage of it (including COMMANDITAIRE's data), potential impacts on security and availability, implemented mitigation measures, and residual risks.

- Develop and implement all necessary procedures to comply with applicable legal, regulatory, and contractual requirements for the service, as well as the COMMANDITAIRE’s specific security needs defined in the Contract.

- Avoid using COMMANDITAIRE's production data for testing purposes, except upon obtaining explicit written authorization from the COMMANDITAIRE, at which point the Provider commits to anonymizing these data and ensuring their confidentiality during anonymization.

- Securely erase all COMMANDITAIRE’s data, in accordance with the "Data Eradication Procedure" outlined in this Service Agreement upon contract termination or cancellation.

- Ensure secure erasure of all COMMANDITAIRE’s data by completely overwriting any storage medium used for their data within the Service.

On formal written request from the COMMANDITAIRE, the Provider undertakes to:

1. Make the Provider's internal regulations and code of ethics accessible to the COMMANDITAIRE.
2. Provide access to sanctions imposed for security policy violations.
3. Share all relevant events concerning the COMMANDITAIRE in the Service’s logging elements, allowing the COMMANDITAIRE to independently consult usage logs via web interfaces and APIs.
4. Make procedures available to ensure compliance with applicable legal, regulatory, and contractual requirements, as well as the COMMANDITAIRE's specific security needs outlined in the Contract.
5. Provide risk assessment elements concerning the submission of COMMANDITAIRE’s data to non-EU member states' jurisdictions.
6. Inform the COMMANDITAIRE about any subsequent subcontractors involved in providing the Service and any changes impacting these subcontractors.

> All Provider entities commit to upholding the fundamental values of the European Union, namely dignity, freedom, democracy, equality, rule of law, and respect for human rights. The service provided by the Provider complies with applicable data protection legislation concerning fundamental rights and adheres to EU values regarding respect for dignity, freedom, equality, democracy, and the rule of law.

## Scope of Provider's Liability

Given the definitions and conditions outlined in this Service Agreement, the responsibilities of the Provider are limited as follows:

1. The shared responsibility model, described in the "Shared Responsibility Model" section of this Service Agreement, inherently limits the Provider's involvement in operational layers above providing computational resources, network, storage, and backup services. This specifically excludes:

   - Management of what is installed on virtual machines (OS, middleware, applications, etc.);
   - Maintenance of OS and other software installed by the COMMANDITAIRE on its Tenants;
   - Security of programs, software, and applications installed on virtual machines;
   - Upgrading virtual machines;
   - Application-level data backup.

2. The Provider cannot assume tenant-level backup obligations for the COMMANDITAIRE without the latter subscribing to appropriate infrastructure units first.

3. The Provider cannot claim ownership of data transmitted and generated by the COMMANDITAIRE, as these belong to the COMMANDITAIRE.

4. The Provider emphasizes that it cannot exploit or access data transmitted and generated by the COMMANDITAIRE without prior validation from the latter, with their disposition reserved for the COMMANDITAIRE alone.

5. The Provider waives any responsibility for physical components physically hosted and managed by the Provider, which are directly owned by the COMMANDITAIRE or a third party with whom the COMMANDITAIRE has contracted. Physical client components' hosting is outside the scope of this Service Agreement and SecNumCloud's ongoing Qualification process. The COMMANDITAIRE is responsible for assessing the adherence or dependency of these physical components concerning the OpenIaaS service in qualification.

## Access Restriction

In accordance with the Service, the Provider is expressly prohibited
from accessing Tenants belonging to COMMANDITAIRE without prior authorization. It is the responsibility of COMMANDITAIRE to provide necessary access for Provider's personnel, based on specific hosting and service requirements, as well as professional support services chosen by COMMANDITAIRE.

COMMANDITAIRE acknowledges that these accesses are granted exclusively for the purposes related to agreed-upon service provision, ensuring secure and compliant management of data according to the agreement terms.

Remote access by third parties involved in Provider's service delivery is strictly forbidden. Should a specific technical requirement necessitate such access, it can only be established after clear notification to COMMANDITAIRE, detailed justification provided, and written approval obtained.

This measure ensures COMMANDITAIRE's control and data security, confirming that any exception to the rule is duly authorized and documented.

## Third-Party Responsibilities in Service Delivery

The Provider maintains a list of third-party partners involved in delivering the Service, which includes editors, providers (of the Provider), and other suppliers participating in the delivery of the Service. The Provider implements the following measures with these third parties:

- The Provider mandates to all third parties contributing to the Service implementation a security level at least as high as that it commits to maintaining within its own service security policy;

- The Provider negotiates audit clauses with each third party involved in implementing the service, enabling an accreditation body to verify compliance of these third parties with legal requirements and Service Network Code (SNC) standards. This ensures the Provider meets its obligations under this Service Agreement.

- The Provider establishes a procedure for regularly monitoring the security measures implemented by third parties involved in delivering the service to adhere to the Provider's commitment as outlined in this Service Agreement.

- The Provider ensures tracking of changes made by third parties impacting the information system's security level within the delivered service.

## RESPONSIBILITIES AND OBLIGATIONS OF THE COMMANDITAIRE

The COMMANDITAIRE is responsible for the following obligations within the context of the Service:

- The Prestataire provides the COMMANDITAIRE with a virtual machine execution platform. Configuration of these machines is the responsibility of the COMMANDITAIRE. Each virtual machine must be accompanied by an associated backup policy. The Prestataire defines automated backup policies through its interfaces. However, it is the COMMANDITAIRE's duty to activate these backup policies and thus enable the virtual machines.

- The COMMANDITAIRE grants authorization for the ANSSI and the qualification organization (SNC) to audit both the Service and the underlying technical infrastructure delivering the Service.

- The COMMANDITAIRE is responsible for informing the Prestataire of any sector-specific requirements related to the types of information entrusted by the COMMANDITAIRE, which need to be considered by the Prestataire.

- The COMMANDITAIRE accepts not to request from the Prestataire any additional or actions that would exempt the Prestataire from the requirements of the SecNumCloud reference framework (current version) on one hand, or lower the established security level by adhering to less stringent requirements defined by this same reference framework on the other hand.

## COMMANDITAIRE'S RIGHTS

At any point during the contractual relationship, the COMMANDITARE can file a claim regarding the qualified service with the ANSSI.

At any time, the COMMANDITARE may request from the Provider access to its internal settlement and ethics charter.

## Data Erasure Upon Contract Termination

Upon the conclusion of the contract, whether by expiration or termination for any reason, the Provider commits to securely erase all data associated with the COMMANDITAIRE, encompassing technical data. The Provider will ensure that the COMMANDITAIRE is formally notified of this erasure plan within a 21-day (calendar) window. The COMMANDITAIRE's data will be deleted no later than 30 days following this notification.

To validate this deletion, the Provider will deliver to the COMMANDITAIRE a certificate confirming the data erasure.

## Service Lifecycle of the Present Service Agreement

This document outlines the lifecycle stages of the current service agreement, detailing each phase from initiation to termination. The structure adheres strictly to Markdown's formatting rules, ensuring that text content is translated while preserving HTML and Markdown structural elements.

### 1. **Initiation Phase**
   - **Objective**: Define project scope, objectives, and deliverables.
   - **Activities**:
     - Client requirements gathering.
     - Proposal development by service provider.
     - Negotiation of terms and conditions.

### 2. **Implementation Phase**
   - **Objective**: Execute the agreed-upon services.
   - **Activities**:
     - Resource allocation and team formation.
     - Development, testing, and deployment of services.
     - Regular progress reporting to stakeholders.

### 3. **Operational Phase**
   - **Objective**: Maintain and optimize service delivery.
   - **Activities**:
     - Monitoring system performance.
     - Customer support and issue resolution.
     - Continuous improvement based on feedback loops.

### 4. **Maintenance Phase**
   - **Objective**: Ensure ongoing functionality and security.
   - **Activities**:
     - Regular updates and patches application.
     - System backups and disaster recovery planning.
     - Compliance with regulatory standards.

### 5. **Review Phase**
   - **Objective**: Evaluate service effectiveness and identify areas for enhancement.
   - **Activities**:
     - Performance reviews against KPIs.
     - Customer satisfaction surveys.
     - Identification of potential enhancements or new features.

### 6. **Termination Phase**
   - **Objective**: Facilitate smooth transition out of the agreement.
   - **Activities**:
     - Final deliverables and documentation handover.
     - System decommissioning and data migration.
     - Contractual obligations fulfillment, including any penalties or credits.

### 7. **Post-Termination Phase**
   - **Objective**: Ensure continuity of service post-contract closure.
   - **Activities**:
     - Ongoing support for transitioned services (if applicable).
     - Knowledge transfer to client's team.
     - Final reporting and audit preparation.

This lifecycle framework ensures a comprehensive approach to managing the service agreement, from inception through to conclusion, while maintaining clarity and adherence to structural integrity as per Markdown specifications.

## Effective Entry of Service Agreement

The present Service Agreement shall come into effect on the date of its signing by the COMMANDITAIRE.

Data collection, handling, storage, and processing conducted in the context of pre-sale, service implementation, and termination are carried out in compliance with applicable laws.

## Evolutions of the Service Agreement

Any modifications or additions to the present Service Agreement stem exclusively from requests made by the designated governance bodies. These change proposals will be reviewed by the Parties, empowered to determine which aspects require written formalization.

It is agreed that any evolution of the Service Agreement, upon validation, altering the initially established financial conditions, necessitates the drafting and signing of an amendment to the ongoing contract.

Factors potentially prompting a review of this Service Agreement include, but are not limited to:

- The evolution of the technical infrastructure delivering the OpenIaaS Service;
- Adjustments made by the Provider to services deployed for the Service;
- Variations in agreed commitments and applicable sanctions;
- Organizational reconfigurations within COMMANDITAIRE or the Provider;
- Expansion or reduction of the Service's operational scope.

The management of versions and revisions of the Service Agreement is documented at the outset of this document for ease of tracking.

### Evolutions Triggered by COMMANDITAIRE

The evolutions of the Service Agreement may originate from:

- An update to the managed infrastructure provided by the Vendor;
- A change in the services implemented by the Vendor;
- A modification of the service level agreements (SLAs) by the Vendor.

### Changes Initiated by the Provider

Any modification of the Service Agreement is subject to acceptance by the **CLIENT**. It is understood that any modification or addition validated altering the financial elements of the Contract may necessitate the signing of an addendum to this one.

## Reversibility

In addition, Cloud Temple commits to allowing a review of the present Service Agreement (including its potential termination) without penalty for the COMMANDITAIRE in case of loss of SecNumCloud qualification.

The Services do not include an obligation of reversibility (i.e., assistance provided by the COMMANDITAIRE to migrate their system to another "Provider") except for the provision of the COMMANDITAIRE interface by the Provider, enabling the COMMANDITAIRE to back up and retrieve their data, including their system's configuration data via one or more documented and exploitable modalities at the COMMANDITAIRE's discretion: providing files in formats documented and accessible outside the service provided by the Provider, or establishing technical interfaces allowing access to data according to a documented and exploitable schema (API).

The COMMANDITAIRE, being the sole master of their system, must take all necessary measures to facilitate this operation as needed (which involves, among other things, meticulous documentation) and the development of a reversibility plan. In case the COMMANDITAIRE requires additional services, the Provider may offer consulting services in this regard under a specific contract to be negotiated.

## Service Availability, Continuity, and Recovery

In the realm of cloud computing and IT systems, ensuring service availability, continuity, and recovery is paramount. These aspects are critical for maintaining business operations, data integrity, and customer trust. Let's delve into each of these components:

### Service Availability

Service availability refers to the proportion of time a system or service is operational and accessible to users. High availability is often achieved through redundancy, load balancing, and failover mechanisms. Key strategies include:

- **Redundant Infrastructure**: Deploying multiple servers or clusters to handle traffic and ensure that if one fails, others can take over seamlessly.
- **Load Balancing**: Distributing network traffic across multiple servers to prevent overload on any single server.
- **Failover Mechanisms**: Automatically switching to backup systems in case of primary system failure, ensuring minimal downtime.

### Continuity

Continuity focuses on maintaining operations during and after disruptions. This involves robust disaster recovery plans (DRP) and business continuity planning (BCP). Key elements include:

- **Disaster Recovery Plans (DRP)**: Detailed procedures to restore IT infrastructure and services following a catastrophic event, ensuring rapid recovery.
- **Business Continuity Planning (BCP)**: Strategies that ensure critical business functions can continue during and after disruptions, safeguarding against data loss and operational downtime.
- **Data Replication**: Regularly replicating data across different geographical locations to prevent data loss in case of a major outage or natural disaster.

### Recovery

Recovery encompasses the processes and technologies used to restore systems and data after an incident. It involves various techniques:

- **Backup and Restore**: Regular backups of critical data are crucial, allowing for quick restoration in case of data loss or corruption.
- **Snapshot Technology**: Utilizing snapshots to capture system states at specific points in time, enabling rapid recovery without the need for full system restores.
- **Automated Recovery Procedures**: Implementing automated workflows that trigger predefined actions upon detection of failures, minimizing human intervention and response times.

### Best Practices

To enhance service availability, continuity, and recovery:

- **Regular Testing**: Conduct regular drills to validate the effectiveness of DRPs and BCPs, ensuring readiness for real-world scenarios.
- **Monitoring and Alerting Systems**: Implement robust monitoring tools that provide real-time insights into system health, enabling proactive issue resolution.
- **Scalability and Flexibility**: Design systems with scalability in mind to accommodate growth and changing demands while maintaining high availability.
- **Security Measures**: Integrate security protocols throughout the continuity strategy to protect against cyber threats that could disrupt operations.

In conclusion, achieving robust service availability, continuity, and recovery in cloud computing and IT systems requires a multi-faceted approach. By implementing strategic redundancy, effective DR/BCPs, data protection measures, and continuous monitoring, organizations can ensure resilience against disruptions, safeguarding both operational integrity and customer trust.

### Incident and Outage Management

This section outlines the processes and procedures for managing incidents and outages within our cloud infrastructure. The goal is to ensure rapid response, effective communication, and minimal impact on services for our customers.

#### 1. Incident Reporting
- **Reporting Channels**: Incidents can be reported via designated email addresses (e.g., [incident@cloudprovider.com](mailto:incident@cloudprovider.com)), a dedicated incident management platform, or through the customer portal.
- **Incident Description**: When reporting an incident, provide clear and concise details including:
  - A brief description of the issue
  - Affected services/systems
  - Impact on users (e.g., downtime duration)
  - Initial troubleshooting steps taken
  
#### 2. Incident Triage
- **Initial Assessment**: Upon receiving an incident report, assign it to a designated team for initial assessment. This team will categorize the incident based on severity and impact using predefined criteria (e.g., high, medium, low).
- **Priority Levels**: Assign priority levels (High, Medium, Low) to facilitate efficient resource allocation.

#### 3. Incident Resolution
- **Root Cause Analysis (RCA)**: Engage the appropriate technical teams to perform an RCA. This involves identifying the underlying cause of the incident.
- **Resolution Strategy**: Develop a strategy for resolving the issue, which may include:
  - Implementing workarounds or temporary fixes
  - Coordinating with vendors/suppliers if external components are involved
  - Planning permanent solutions once root causes are identified

#### 4. Communication and Escalation
- **Internal Communication**: Maintain transparent communication within the incident management team, ensuring all stakeholders are informed of progress and decisions.
- **Customer Notification**: Inform affected customers about the incident, its impact, and estimated resolution timeframe. Use multiple channels (email, SMS, app notifications) to ensure broad reach.
- **Escalation Procedures**: Establish clear escalation paths for complex or high-priority incidents involving senior management or external parties.

#### 5. Post-Incident Review
- **Lessons Learned**: Conduct a post-incident review to analyze the incident lifecycle, identify areas of improvement in processes, and update incident response plans accordingly.
- **Documentation**: Document all aspects of the incident, including resolution steps, RCA findings, and lessons learned for future reference and continuous improvement.

#### 6. Outage Management
- Similar principles apply to outage management, focusing on restoring services as quickly and safely as possible while ensuring no data loss or corruption occurs.

### Tools and Technologies
- **Incident Management Platforms**: Utilize platforms like ServiceNow, Jira Service Desk, or custom-built solutions for tracking, managing, and reporting incidents.
- **Monitoring and Alerting Systems**: Leverage tools such as Prometheus, Grafana, or ELK Stack for real-time monitoring and alerting to detect issues early.
- **Collaboration Tools**: Employ platforms like Slack, Microsoft Teams, or email for seamless communication among teams during incident response.

### Training and Compliance
- Regular training sessions for staff on incident management procedures, tools usage, and compliance with relevant regulations (e.g., GDPR, HIPAA).
- Ensure adherence to industry standards such as ISO 27001 for information security management.

By following these structured processes, we aim to enhance our ability to handle incidents and outages effectively, minimizing disruption to services and maintaining customer trust.

---
Incidents
---

#### Types of Incidents Handled Under This Service Agreement

- **Damages**;
- **Outages and Failures**;
- **Security Incidents affecting the availability, confidentiality, or integrity of the Service.**

### Incident Handling

> The Provider promptly informs the COMMANDITARE in the best timeframes,
> regarding incidents and outages, through a notification in the COMMANDITARE console or by email to the COMMANDITARE contact. The Provider notifies the COMMANDITARE on the handling of the incident via the same channel used for reporting the incident, or as indicated in the incident notification.

#### Level of Security Incident Notification

The COMMANDITAIRE is responsible for determining the severity levels
of Security Incidents for which it desires notification, such as formalization
within a PAS applicable to the Service.

By default, the COMMANDITAIRE is notified:

- Of security incidents with impact (I1 and I2 according to the severity scale defined in the processing priority process of this Service Convention) ;

- Of security incidents affecting the COMMANDITAIRE's confidentiality or data integrity entrusted within the Service context ;

- Of personal data breaches for which the COMMANDITAIRE is responsible for processing as per Article 8 of Annex DPA within the Service context ;

- [Note: The text seems to be cut off at this point. If additional information is available, please provide it.]

### Service Maintenance

This section outlines the procedures and protocols for maintaining our cloud services. It includes schedules for routine maintenance, updates, and troubleshooting processes to ensure continuous service availability and optimal performance. The content within code blocks, such as Python scripts or configuration files, should be translated literally without altering their functionality or syntax. Similarly, HTML elements and Markdown structure should remain intact, with the text within tables preserved.

### Nature of Maintenance

Data breaches involving personal data for which the Provider is responsible for processing and containing personal data of the **COMMANDITAIRE**, in accordance with Article 8 of the DPA Annex. The maintenance provided includes:

- Implementation of the operational readiness plan for the Service to ensure optimal availability indicators, as outlined by the Provider above;
- Execution of PCA/PRA (if subscribed by the COMMANDITAIRE) triggered by potential incidents that may occur.

### Remote Access to Cloud Temple Beyond COMMANDITAIRE's Perimeter

The Provider hereby abstains, under the terms of this Service Agreement, from accessing Tenants and the interface space of the COMMANDITAIRE.

It is the responsibility of the COMMANDITAIRE to grant the necessary access to the Provider's personnel. The COMMANDITAIRE acknowledges that these accesses will be utilized within the hosting and, ultimately, information management (if subscribed by the COMMANDITAIRE).

### Remote Access by Third Parties for Service Provision Within the COMMANDITARE

No remote access by third parties involved in providing the SERVICE is authorized.

Should a technical necessity arise, such access would only be granted post-notification and written approval from COMMANDITAIRE.

# Data Erasure Procedure at Contract Termination

At the conclusion of the Contract, whether due to expiration or any other reason, the Provider ensures a secure erasure of all data processed under the Service, including COMMANDER'S technical data. The Provider will provide a formal notice within a 21 calendar day window (21). The COMMANDER'S data will be deleted no later than 30 days following the notification. The Provider issues a data deletion certificate to the COMMANDER.

## Applicable Law

## Generally Speaking

The applicable law and jurisdiction for this Service Agreement is French law.

## Compliance with Laws and Regulations

The Provider commits to the following:

- Identifying applicable legal and regulatory constraints within the scope of the Service;

- Adhering to these legal and regulatory constraints for the data entrusted to the Provider, within the limits of its responsibilities on one hand, and as stipulated in the Contract on the other;

- Compliance with the French Data Protection Law (Loi informatique et libertés) and the General Data Protection Regulation (RGPD);

- Implementing data protection measures;

- Establishing a legal and regulatory compliance monitoring process;

- Ensuring appropriate relationships or continuous legal and regulatory vigilance with sectoral authorities concerning the nature of the processed data under the Service. This includes, but is not limited to, ANSSI (National Cybersecurity Agency), CERT-FR (France Computer Emergency Response Team), and CNIL (Commission Nationale de l'Informatique et des Libertés).

## GDPR

As a processor under the provisions of Article 28 of the General Data Protection Regulation (RGPD), the Processor commits to:

- Ensuring transparency and traceability;
- Designating a Data Protection Officer (DPO) responsible for defining and implementing data protection measures concerning personal data;
- Providing assistance and advice to the Principal in alerting them if their instruction would constitute a violation of data protection rules, provided the Processor can identify such a violation;
- Ensuring data security for processed data due to its SecNumCloud qualification.

## Protection against extra-EU law

The Prestator's corporate seat is located within an EU member state. The Prestator's share capital and voting rights in the company are not, directly or indirectly:

- individually held by more than 24%;

- and collectively held by more than 39%;

by third entities having their registered office, central administration, or main establishment within a non-EU member state.

In the event that the Prestator, as part of its service, engages with a third party (including a subcontractor) located outside an EU member state or controlled/owned by a third party based outside the EU, the Prestator commits to:

- ensuring this third party has no access to operational data;

- maintaining operational autonomy through the ability to engage another subcontractor or swiftly implement a technological alternative.

For clarity, the data in question includes those entrusted to the Prestator by the COMMANDITAIRE, as well as all TECHNICAL DATA encompassing information about the COMMANDITAIRES.

For the purposes of this article, the notion of control is understood in accordance with Article L233-3 II of the French Commercial Code.

# SIGNATURES

Made in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\, on the
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ date

For Cloud Temple, the PROVIDER

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the COMMANDER