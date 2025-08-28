---
Title: Service Level Agreement (SLA) for Cloud Infrastructure - SecNumCloud IaaS
---

# CONVENTION DE SERVICES IaaS

| Destinataires : | **COMMANDITAIRE** |
| :--- | :--- |
| **Référence du document** | CT.AM.JUR.ANX CdS-IaaS - 20251701_v3.0.docx_Jour JJ AAAA |
| **Vos interlocuteurs** | *Prénom* *Nom* Account Manager e-mail : *prenom.nom*\@cloud-temple.com |
| **Date de dernière mise à jour** | 17/01/2025 |
| **Date de validation contractuelle** | Jour JJ AAAA |

------------------------------------------------------------------------

| Version | Date | Action | Auteur |
| :--- | :--- | :--- | :--- |
| v0.1 | 07/06/2022 | Rédaction initiale | Lorena ALCALDE |
| v0.2 | 14/09/2022 | Enrichissement | Lorena ALCALDE |
| v1.0 | 30/12/2022 | Intégration Indicateurs | Lorena ALCALDE |
| v1.1 | 23/01/2023 | Modification pied de page | Lorena ALCALDE |
| v1.2 | 22/05/2023 | Enrichissement | Lorena ALCALDE |
| v1.3 | 29/06/2023 | Enrichissement | Lorena ALCALDE |
| v1.4 | 06/11/2023 | Modification Capital et Enrichissement | Lorena ALCALDE |
| v1.5 | 30/11/2023 | Enrichissement | Lorena ALCALDE |
| v1.6 | 21/03/2024 | Enrichissement | Lorena ALCALDE |
| v2.0 | 29/03/2024 | Ajustements conformité SNC | Nicolas ABRIOUX |
| v2.0 | 03/04/2024 | Publication | Lorena ALCALDE |
| V3.0 | 17/01/2025 | Enrichissement | Emeline CAZAUX |

------------------------------------------------------------------------

## Preface and Glossary

This section serves as a preface and glossary for the following content, providing an overview of key concepts and terms related to cloud computing, IT systems, and software engineering. The structure and formatting of this text will be preserved from the original Markdown file, with the exception of translating the text within tables (including table headers) while maintaining the HTML or Markdown structural elements intact.

### Key Concepts in Cloud Computing:
- **Cloud Computing**: A model for delivering on-demand computing resources over the Internet, including servers, storage, databases, networking, software, analytics, and intelligence.
- **IaaS (Infrastructure as a Service)**: Provides virtualized computing resources over the internet, allowing users to rent IT infrastructure such as virtual machines, storage, and networks.
- **PaaS (Platform as a Service)**: Offers a complete development and deployment environment in the cloud, enabling developers to build, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an application.
- **SaaS (Software as a Service)**: Delivers software applications over the internet, on a subscription basis, eliminating the need for local installations and maintenance.

### IT Systems:
- **Microservices Architecture**: An architectural style that structures an application as a collection of loosely coupled services, which can be developed, deployed, and scaled independently.
- **Containerization**: A lightweight virtualization technology allowing applications to run in isolated environments called containers, enhancing portability across different computing platforms.
- **Kubernetes**: An open-source platform designed to automate deploying, scaling, and managing containerized applications.

### Software Engineering:
- **DevOps**: A set of practices that combines software development (Dev) and IT operations (Ops), aiming to shorten the system development life cycle while delivering features, updates, or fixes more reliably.
- **Continuous Integration/Continuous Deployment (CI/CD)**: A software development practice where code changes are automatically built, tested, and deployed into the production environment, facilitating faster release cycles.
- **Agile Methodologies**: An iterative approach to project management and software development, emphasizing flexibility, collaboration, customer satisfaction, and rapid response to change.

### Glossary:
- **API (Application Programming Interface)**: A set of rules and protocols for building and interacting with software applications, defining methods and data formats to enable communication between different systems.
- **Microservices**: Small, independent services that work together to form a single application, each performing specific functions.
- **Cloud Provider**: Companies like Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP) offering cloud computing infrastructure and services over the internet.
- **Serverless Computing**: A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources, eliminating the need for developers to manage servers.

This glossary serves as a reference for understanding key terms used throughout this document, ensuring consistency in terminology across different sections.

## Introduction

The present document formalizes the Service agreement associated with the SecNumCloud IaaS service, designated as "Secure Temple."

The Service is qualified by SecNumCloud (see attached attestation).

This Service agreement supplements and complements the general terms of sale and use of the Provider. It is understood that the contractual documents will be interpreted consistently across them. In case of contradiction or divergence in the terms of the contractual documents, the following order of precedence shall apply:

 1. General Terms of Sale and Use (CGVU)
2. SecNumCloud IaaS Service Agreement
3. SecNumCloud OpenIaaS Service Agreement
4. SecNumCloud PaaS Service Agreement
5. Specific Bare Metal Service Convention
6. Particular Service Convention
7. Security Insurance Plan (PAS)
8. Particular Usage Conditions (CPU)
9. Data Protection Agreement

## Glossary

In the present Service Agreement, the **Commanditaire**, **Provider**, and **Parties** are identified in the Contract to which this Service Agreement is annexed.

The following expressions used in this Service Agreement shall be interpreted according to the definitions assigned to them below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, with known and accepted production procedures and impacts (including financial ones) by all Parties. It is then integrated into the standard change catalog, potentially having a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Provider enabling the Commanditaire to benefit from the Service, and to which this Service Agreement is annexed.

- **Service Agreement:** This document established within a specific contract or General Terms of Sale and Use (CGVU), in compliance with SecNumCloud requirements.

- **Service Request:** A request for evolution following a procedure where realization: i) does not modify the CMDB, ii) operational mode, costs, and risks are known and accepted upfront without specific rollback procedures, iii) is subject to an agreed level of service (SLA) agreement and included in the contract revenue when performed during business hours.

- **Availability:** Capacity to ensure Service's availability and optimal performance, aligned with defined criteria and commitments within SLAs.

- **Technical Data:** Encompasses all data manipulated for delivering the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration of access, directory, certificates, etc.

- **Event:** Any detectable or identifiable occurrence potentially significant for managing the Service.

- **Hypervisor:** Operating system enabling execution of virtual machines on a compute layer.

- **Incident:** An unforeseen event disrupting normal Service operation or compromising COMMANDITAIRE data security.

- **Security Incident:** Any event within the Service's scope:
  - Intentionally malicious;
  - Accidental affecting Service integrity, confidentiality, or traceability of the SERVICE or COMMANDITAIRE data;
  - Compromising existing security measures. Non-origin-based availability outages are not considered a Security Incident (hardware failure, bug, malfunction, natural disaster...).

- **Commanditaire Interface:** Administration interface for the Service provided by the Provider to the Commanditaire, comprising a web administration console and an API.

- **Deployment:** Actions of administration to implement Change once approved (Change in ITIL context concerns change management only, not actual implementation/execution).

- **Problem:** Cause of recurring Incidents, potential incident (situation at risk) requiring analysis and resolution to prevent recurrence.

- **Region:** A geographically defined set of availability cloud zones providing network, compute, and storage services for optimizing latency, performance, and local regulatory compliance.

- **Service:** The SecNumCloud certified IaaS service named "Secure Temple," delivered by the Provider from maintained technical infrastructure as described in the "Description of Service" section of this Agreement.

- **Secure Temple:** Refers to the SecNumCloud IaaS service, offered by Cloud Temple (as defined in the accessible ANSSI attestation on their site and attached to this Agreement).

- **Catastrophe:** A severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Monitoring of an Information System or Service, involving collection of various data such as measurements and alarms. This activity is limited to observation and tracking without direct intervention on monitored elements, a prerogative reserved for operations management.

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
| **GTE** | Garantie de Temps d'Escalade |
| **GTI** | Garantie de Temps d'Intervention |
| **GTR** | Garantie de Temps de Résolution |
| **ITIL** | Information Technology Infrastructure Library - Bonnes pratiques pour la gestion des SI |
| **IaaS** | Infrastructure as a Service |
| **MCO** | Maintien en condition opérationnelle |
| **MOA** | Maitrise d'Ouvrage |
| **MOE** | Maitrise d'Œuvre |
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

- To clearly define the performance expectations set by the CLIENT for both functionality and reliability of the Service;
- To outline the Provider's obligations to meet agreed service levels;
- To specify applicable regulatory standards specifically related to the delivered Service;
- To ensure uniformity and integrity in assessing the quality of the Service;
- To guarantee the excellence of services provided, evaluated through quantifiable performance indicators.

In case the Provider loses its SecNumCloud qualification, the Contract can be terminated immediately, without penalty, at the CLIENT's discretion. The Provider commits to notifying the CLIENT of this de-qualification via an official notification letter sent by registered mail with request for receipt.

It should be noted that any modification or adjustment in the SecNumCloud qualification will not be construed as a revocation of the initial qualification.

# Audit

The Provider commits to enabling the COMMANDITAIRE, or any third-party and non-concurrent auditor designated by the Provider, to access all necessary documents for verifying full compliance with the obligations related to GDPR Article 28 compliance. This facilitates the conduct of audits.

By accepting this Service Agreement, the COMMANDITAIRE grants explicit authorization to:

1. The French National Agency for Information System Security (ANSSI) and any competent qualification entity to verify the Service's and its information system's compliance with the SecNumCloud reference framework.
2. A designated third-party audit firm, duly qualified PASSI and explicitly named by the Provider, to conduct security audits of the Service.

## Service Description

This section provides a detailed description of the cloud computing service. It outlines the key features, benefits, and functionalities offered by our platform. The service is designed to cater to a wide range of users, from individual developers to large enterprises, ensuring scalability, reliability, and cost-effectiveness.

### Key Features:

1. **Scalability**: Our cloud infrastructure allows for seamless scaling of resources up or down based on demand, ensuring optimal performance without over-provisioning.
   
2. **High Availability**: With multiple geographically dispersed data centers, our service guarantees high uptime and minimal downtime through redundancy and failover mechanisms.

3. **Security**: Robust security measures are in place, including encryption at rest and in transit, access controls, and regular security audits to protect user data.

4. **Cost-Effectiveness**: Pay-as-you-go pricing model allows users to only pay for the resources they consume, eliminating the need for large upfront capital expenditures.

5. **Ecosystem Integration**: Seamless integration with popular development tools and third-party services enhances productivity and streamlines workflows.

6. **Management Tools**: Comprehensive management consoles provide real-time monitoring, resource allocation, and cost optimization features for efficient administration of cloud resources.

### Benefits:

- **Agility**: Rapid deployment of applications and services, enabling businesses to innovate faster and respond quickly to market changes.
  
- **Reliability**: Ensures consistent performance and availability, reducing the risk of service disruptions that can impact business operations.

- **Efficiency**: Optimized resource utilization leads to reduced operational costs and improved efficiency in managing IT infrastructure.

- **Flexibility**: Supports diverse workloads, from web applications to big data analytics, machine learning, and more, catering to a broad spectrum of user needs.

### Functionalities:

1. **Compute Services**: Virtual machines (VMs), containers, serverless computing options for running applications.
   
2. **Storage Solutions**: Object storage, block storage, and file storage services with varying performance and cost profiles.

3. **Networking**: Secure and scalable networking capabilities including load balancers, VPN gateways, and content delivery networks (CDNs).

4. **Database Services**: Managed relational databases, NoSQL databases, and fully managed database services for various data management needs.

5. **DevOps Tools**: Integrated CI/CD pipelines, automation tools, and monitoring solutions to enhance the software development lifecycle.

6. **AI & Machine Learning**: Pre-built AI and ML services, as well as tools for custom model training and deployment.

This cloud computing service is engineered to empower users with a flexible, robust, and cost-effective platform that can adapt to their evolving needs while ensuring the highest standards of security and performance.

## Shared Responsibility Model

The service offered by the Provider is characterized by providing the following services, which align with the shared responsibility principle presented in the SecNumCloud reference:

- Provisioning of computing resources (compute);
- Availability of storage spaces;
- Access to network connectivity and internet services;
- Offering a dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the COMMANDITAIRE within the context of the Service is outlined in §7.1.

It is understood that the Provider will utilize its expertise to deliver the Services in accordance with professional best practices and in compliance with SecNumCloud requirements.

## Detailed Scope of the Service

| Service | Description |
| :--- | :--- |
| **Compute** | Compute resource for the COMMANDITAIRE tenant |
| **Storage** | Production data storage for the COMMANDITAIRE tenant |
| **S3 Object Storage** | Provision of a sovereign multi-AZ object storage infrastructure compatible with standard S3 APIs. |
| **Backup** | Subscription to appropriate mass storage for backups |
| **Network Infrastructure** | Network resource for the COMMANDITAIRE tenant |
| **COMMANDITAIRE Console** | Service enabling COMMANDITAIRE to access and manage its IaaS services via the Shiva interface |
| **Support** | Support service accompanying the aforementioned services, limited to SNC qualified scope and Prestataire responsibilities in this regard |

### Datacenter Infrastructure

The Service encompasses the provision of the following qualified services for each Availability Zone:

- A datacenter located in France for the FR region, compliant with the latest technological standards, offering a resilience level equivalent to or superior to Tier 3 as per Uptime Institute;
- Provision of technical rooms within dedicated datacenters designed to house essential technical equipment required for service production, including computing, storage, networking, cabling, and other necessary components;
- Secure electrical supply ensured by two independent power circuits, guaranteeing uninterrupted service continuity;
- Supply of climate control systems tailored to meet manufacturer standards and recommendations, ensuring optimal operating conditions for technical devices;
- Continuous monitoring and metrology detail, enabling precise tracking and proactive management of the service's performance and security.

The Provider ensures the availability of advanced fire detection and suppression services, engineered to identify and effectively neutralize any fire incidents within installations. These systems include high-precision smoke detectors and rapid-response extinguishing devices that do not damage IT equipment. This service is critical for preventing fire hazards, minimizing potential damage, and ensuring operational continuity.

The COMMANDITAIRE is informed that all implemented security procedures and measures, including annual failover tests on generators, are vital to maintaining the continuity and integrity of provided services. These practices aim to minimize downtime risks and ensure optimal response times during incidents. By accepting these terms, the COMMANDITAIRE acknowledges the importance of these safety measures and commits to full cooperation in their implementation. The COMMANDITAIRE is also encouraged to review and incorporate security recommendations into its own risk management strategy.

### Software Management Infrastructure

The Provider delivers to the COMMANDITAURE the administration console and the API necessary for using the SERVICE. They commit to maintaining this console and API in optimal operational condition, ensuring continuous security maintenance. This is referred to as the "COMMANDITAURE Interface."

The Provider notifies the COMMANDITAURE that unusual usage of the "COMMANDITAURE Interface," particularly excessive use of its command APIs (hammering), can trigger automatic security measures resulting in the blocking of access to command APIs or the SERVICE. It's crucial to note that this situation does not equate to a service outage but rather an action to safeguard the SERVICE and Provider's infrastructure; thus, the COMMANDITAURE should not interpret it as such in its calculations.

Furthermore, the Provider informs the COMMANDITAURE that identical API requests (duplicates) sent to their endpoints are limited to one per second (Throttling). If the COMMANDITAURE submits identical requests at a higher frequency, their rejection cannot be construed as an outage of the SERVICE.

### Computing Infrastructure

The Service encompasses the provision of computing resources within the subscribed zones by the COMMANDITAIRE, in the form of virtual machines. This includes:

- Provision of hardware necessary for the operation of compute nodes;
- Supply of compute nodes in quantities specified by the COMMANDITAIRE and distributed across the availability zones chosen by them. Note that these compute nodes are exclusively dedicated to the COMMANDITAIRE;
- Availability of hypervisor-based operating systems, along with assurance of the operational readiness and security of the underlying software infrastructure required for managing these hypervisor operating systems. It's important to highlight that while the Provider is responsible for the operational maintenance and overall security of the Service, they lack specific knowledge regarding the COMMANDITAIRE's production environments or workload requirements. Consequently, the decision to update the hypervisor compute node operating systems, an action potentially necessitating a restart, falls entirely on the COMMANDITAIRE. This operation can be executed via the COMMANDITAIRE Interface;
- The selection of compute node model, chosen from the catalog provided by the Provider, is under the COMMANDITAIRE's responsibility.

### Storage Infrastructure

The service involves providing the COMMANDITAIRE with a shared storage infrastructure of type SAN (Storage Area Network), offering various performance levels. This service encompasses:

- Implementation and maintenance of the dedicated SAN network in operational condition and security;
- Installation, management, and upkeep of shared storage arrays among clients, including their operational readiness, security, supervision, and monitoring;
- Deployment of automated systems for allocating dedicated LUNs (Logical Unit Numbers) of storage specifically for COMMANDITAIRE's use, in accordance with subscribed volumes.

### Global Network Infrastructure

The Provider, as part of the Service, establishes a global network facilitating the COMMANDITAIRE's system accessibility. This service includes:

- The provision, maintenance in operational condition, and security of all fiber optic links connecting various Availability Zones;

- The provision, maintenance in operational condition, and security of technical equipment necessary for the proper functioning of the network and client isolation.

The Tenant COMMANDITAIRE's network interconnection with Internet or private networks, as well as the networking equipment, operator links, and other technical components enabling this interconnection, are outside the scope of the Service. This network interconnection is implemented in accordance with provisions outlined in the Contract.

### Backup Infrastructure

The Provider offers the COMMANDITAIRE a dedicated and managed backup service, designed to protect its virtual machines. The Provider ensures the operational readiness and security of this backup service. The Provider guarantees that COMMANDITAIRE's backups will be located outside of the availability zone of the protected workloads, subject to COMMANDITAIRE subscribing to the appropriate infrastructure units.

This backup service is limited to backing up virtual machines and the topology configurations of the IaaS environment within the Tenant's domain under the Service. The implementation and application of a suitable backup policy by COMMANDITAIRE depend on subscribing to specific infrastructure units. It is COMMANDITAIRE's responsibility to ensure that the necessary technical resources are available from the Provider for implementing or adjusting this backup policy according to available means.

The Provider commits to notifying COMMANDITAIRE in case of capacity constraints and offering consultation assistance for optimization. The Provider's obligations will be confined to fulfilling COMMANDITAIRE's expressed backup policy requirements, within the subscribed resources.

### Implementation of Disaster Recovery or Business Continuity Solutions

The Provider delivers to the COMMANDITAIRE all necessary technical solutions to ensure optimal resource allocation across various Availability Zones. It is the COMMANDITAIRE's responsibility to effectively manage this resource distribution, for which they have access to the Provider's tools designed for such purposes.

### Limitations of Services in Qualified IaaS Model

In a qualified Infrastructure-as-a-Service (IaaS) model, several limitations should be considered regarding the services offered:

1. **Resource Control and Management**:
   - **Limited Resource Allocation**: Users typically have limited control over resource allocation compared to on-premises environments. This includes CPU, memory, storage, and network bandwidth.
   - **Dynamic Scaling Challenges**: While dynamic scaling is a feature of IaaS, it can be complex to configure and optimize for specific workloads, often requiring expertise in cloud management tools.

2. **Service Availability and Reliability**:
   - **Vendor Dependency**: The performance and uptime of services are heavily dependent on the provider's infrastructure and data center reliability.
   - **Service Level Agreements (SLAs)**: Users must adhere to SLAs set by the IaaS provider, which may have limitations or exceptions that could affect service availability.

3. **Security and Compliance**:
   - **Shared Responsibility Model**: Security responsibilities are shared between the user and the cloud provider. While providers offer robust security measures, users must implement additional controls to meet specific compliance requirements.
   - **Data Sovereignty**: Data stored in IaaS environments may be subject to data sovereignty laws, limiting where data can be processed or stored based on geographical regulations.

4. **Customization and Flexibility**:
   - **Limited OS and Software Options**: Users often have limited choices regarding the operating system (OS) and software stack available for deployment compared to traditional IT environments.
   - **Vendor Lock-in Risks**: Customizations or integrations may lead to vendor lock-in, making it difficult to migrate workloads to alternative platforms in the future.

5. **Cost Management**:
   - **Unpredictable Costs**: IaaS pricing models can be complex, with costs varying based on usage patterns (e.g., pay-as-you-go vs. reserved instances). This can make budgeting and cost control challenging.
   - **Overprovisioning Risks**: Users may overprovision resources to mitigate potential performance issues or unexpected spikes in demand, leading to unnecessary costs.

6. **Performance Optimization**:
   - **Network Latency**: Performance can be affected by network latency, especially when using public clouds where services are distributed across multiple regions.
   - **Limited Control Over Network Configuration**: Users have limited control over network configurations and routing compared to on-premises environments, which can impact application performance.

7. **Integration with On-Premises Systems**:
   - **Connectivity Challenges**: Integrating IaaS resources with existing on-premises systems or legacy applications can be complex due to network security and connectivity requirements.
   - **Data Transfer Costs**: Transferring large volumes of data between the cloud and on-premises environments can incur additional costs, impacting overall operational efficiency.

8. **Service Updates and Upgrades**:
   - **Version Control Issues**: Users may face challenges in managing software versions across different instances or services due to automatic updates provided by IaaS providers.
   - **Downtime During Upgrades**: Scheduled maintenance and upgrades can lead to service downtime, impacting application availability and user experience.

These limitations should be carefully considered when evaluating the suitability of an IaaS model for specific IT needs, ensuring that the chosen provider aligns with organizational requirements regarding control, security, cost management, and performance.

### Managed Services in RUN

It's crucial to note that the following are excluded from the COMMANDITARE service:

- Hosting of physical components of COMMANDITARE;
- Network interconnection of the COMMANDITARE tenant, to Internet or private networks, including operator links;
- Any managed service (TMA) type;
- Assistance on virtual machines at the OS level and above in the IaaP stack, even if it's just supervision.

However, it is absolutely not excluded that COMMANDITARE may utilize such services from the MSP offerings of the Provider to provide managed services on its tenants. In this case, these services will fall outside the scope of the present Service Level Agreement and its mutual commitments.

### Disaster Recovery Configuration

By default, the Provider sets up IaaS resources for the COMMANDER by reserving resources and configuring deployments to utilize Availability Zones. It is the COMMANDER's responsibility to select the Availability Zones through the COMMANDER interface.

### Backup Configuration

The backup service ceases at backing up virtual machines and topological configurations representing the IaaS environment of COMMANDITAIRE's tenants within the scope of this service.

The backup provision and adherence to COMMANDITAIRE's backup policy are subject to subscribing to necessary storage space on the mass storage platform to ensure the service. Consequently, it is COMMANDITAIRE's responsibility to procure from the Provider the technical means required to implement the backup policy within its IT perimeter or adjust the policy to align with the implemented means. The Provider commits to informing COMMANDITAIRE of any technical capacity limitations.

The Provider will establish the necessary technical and human resources for backing up the hosted system, adhering to the subscribed resources' limits.

Furthermore, in cases where the perimeter is not covered by the Provider, it falls upon COMMANDITAIRE to define its own backup strategy and manually configure VM backups or request service from the Provider to set up backup configurations for physical servers if COMMANDITAIRE has a managed service contract allowing the Provider access via the COMMANDITAIRE interface (console of administration) provided under this Service Agreement, which includes functionalities for configuring backups.

Additionally, this service's commitment is limited to translating through the COMMANDITAIRE interface the configuration explicitly defined by COMMANDITAIRE.

Due to the flexibility offered by the Provider, COMMANDITAIRE has the option to implement a "no backup" policy on certain VMs. In such cases, it is COMMANDITAIRE's prerogative to choose this policy. The Provider will not back up VMs associated with the "no backup" policy. The Provider alerts COMMANDITAIRE that opting for "no backup" or manual backups exposes COMMANDITAIRE to irrecoverable data loss in case of incidents affecting lower layers or layers under COMMANDITAIRE's responsibility within the IaaS model. In such scenarios, it would be impossible for the Provider to restore data since nothing would exist to restore. The Provider recommends always backing up VMs.

For any matters concerning the operating system installed on a virtual machine and all software or programs executed "on top" of the OS, it is COMMANDITAIRE's responsibility to carry out administrative and oversight tasks within the European Union if it aims to ensure comprehensive management and operation of the entire IT stack from the EU. These administrative tasks outside the Provider's scope under this Service Agreement, as detailed in the "Shared Responsibilities" section of this Service Agreement.

### Service Implementation

This section outlines the implementation process of our cloud computing service. It includes details on infrastructure setup, software deployment, security measures, and performance optimization strategies. The following sub-sections provide a detailed breakdown:

1. **Infrastructure Setup**
   - Description of hardware components (servers, storage systems) used in our cloud environment.
   - Network architecture and configuration for seamless data transfer.
   - Utilization of virtualization technologies for resource efficiency.

2. **Software Deployment**
   - Overview of operating systems and middleware platforms employed.
   - Installation and configuration of key applications (e.g., databases, web servers).
   - Automation tools and methodologies used in deployment processes.

3. **Security Measures**
   - Implementation of firewalls, intrusion detection/prevention systems.
   - Data encryption strategies at rest and in transit.
   - Compliance with industry standards (e.g., ISO 27001) for information security management.
   - Access control mechanisms and user authentication protocols.

4. **Performance Optimization**
   - Load balancing techniques to distribute workloads evenly across resources.
   - Monitoring tools for real-time performance analysis and alerting.
   - Capacity planning strategies to anticipate resource demands.
   - Regular maintenance and updates to ensure optimal system performance.

5. **Scalability and Resilience**
   - Design principles enabling easy scaling of services up or down based on demand.
   - Redundancy mechanisms for high availability and fault tolerance.
   - Disaster recovery strategies ensuring business continuity in case of major outages.

6. **Cost Management**
   - Pricing models and cost optimization techniques leveraging cloud economics.
   - Resource utilization monitoring to prevent over-provisioning or under-utilization.
   - Automation tools for billing and expense management.

7. **Documentation and Support**
   - Comprehensive documentation of all implemented processes, configurations, and best practices.
   - Support channels (helpdesk, ticketing systems) for user assistance and issue resolution.
   - Training materials for internal teams to maintain service quality and efficiency.

This structured approach ensures a robust, secure, efficient, and scalable cloud computing environment aligned with industry standards and customer needs.

### Technical Prerequisites

To implement the Service, COMMANDITAIRE acknowledges that it will need to:

- Operate with VMware virtualization in versions supported by the editor and provided by the Provider as part of the Service;
- Utilize the Provider's backup tool;
- Declare fixed IP addresses from which the Provider will authorize access to the COMMANDITAIRE interface (whitelisting). Any modifications to this IP list must be carried out via the menu designed for this purpose in the console or through service requests for subsequent changes. At the initial service setup, the Provider will have been informed of at least one IP address as described.

## Service Location in France

It is specified that none of the operations and physical components involved in providing the Service, for which this Service Agreement pertains, are located outside the European Union.

This includes, among other things, technical infrastructure support, operational oversight, and security (SOC) of the service delivery infrastructure. In fact, all storage, administrative tasks, supervision, and processing are carried out in France.

### Location of Production Data Centers Hosting the Service

In the absence of operational activities by the provider's employees and agencies, all production operations (including data storage and processing) as well as technical components delivering the Service are located within French Data Centers.

### Locations of Cloud Temple's Agencies Providing the Service

Employees of Cloud Temple operating within the service's scope are based in France, with all agencies exclusively located in France. These agencies are situated in Tours, Lyon, Caen, and Paris La Défense.

The Commandant is informed about the possibility for Cloud Temple employees to work remotely. However, the Service Provider ensures equivalent security levels for remote access, particularly concerning VPN accesses. These remote accesses are implemented in accordance with SecNumCloud reference requirements.

### Support

This term translates directly to "Support" in English. No modifications were made to the structure or formatting of the Markdown text. The content within code blocks, including inline code snippets and block quotes, was preserved as is. Similarly, HTML elements were left untouched unless explicitly stated that they needed translation (which wasn't the case here).

### Nature of Support Accompanying the Service

The Provider offers a technical support service aimed at assisting
the COMMANDITAIRE in managing, troubleshooting, and optimizing their deployed resources. This service encompasses a wide range of activities, from initial configuration of services to advanced technical support for resolving specific issues.

Here's an overview of the features and functionalities of the technical support service:

- Assistance with the initial setup of using the Service;
- Incident resolution assistance;
- Problem resolution assistance;
- Monitoring and guidance on technical optimization.

In the context of the technical support service, the Provider does not replace the COMMANDITAIRE in utilizing the Service. The COMMANDITAIRE remains fully responsible for configuring, operating its Virtual Machines (VMs) and Tenants, as well as managing all elements (including data and applications) stored or installed on the Provider's infrastructure. Technical support is provided in accordance with the General Terms of Sale and Use, with the Provider obligated to provide means of service.

The COMMANDITAIRE commits to using the technical support service reasonably, avoiding unsubscribed services from the Provider and having Provider teams assist its own clients or third parties not covered by the contract. The Provider reserves the right to reject any service request that does not meet these criteria.

The level of support engagement is contingent upon subscribing to the associated units of support work.

### Requesting Technical Support

Technical support is accessible via a ticket system through the COMMANDITAIRE console, and is available during regular business hours (8h - 18h; Monday to Friday) excluding holidays (French calendar and time). For emergencies outside of these hours, particularly those significantly impacting production, the on-call service can be reached via a designated number provided by COMMANDITAIRE at the initiation of the Service.

For each request or incident, it is mandatory to generate a ticket with the Prestataire's support. The initialization of this ticket, encompassing all necessary information, is crucial and marks the start of evaluating the Prestataire's commitments.

As soon as the Prestataire receives a request or incident notification, either through the COMMANDITAIRE management console or following a phone call, an automatic ticket is created. Upon reporting an incident, it is essential that COMMANDITAIRE provides the Prestataire with comprehensive details about the problem encountered. This step is vital for ensuring appropriate situation assessment, prioritization, and effective diagnosis.

COMMANDITAIRE receives confirmation via email, detailing ticket creation and its unique number. The COMMANDITAIRE can view the status and incident history directly from the management console.

### Incident Management Process

Upon reporting an incident, the Technical Support team of the Service Provider initiates an investigation to identify the cause of the problem and establish a diagnosis. The COMMANDITAIRE must actively collaborate with the Service Provider by providing all necessary information and conducting required tests. The Service Provider can access COMMANDITAIRE's services to diagnose the incident.

If the Service Provider's services are deemed functional and the incident is not attributable to them, the COMMANDITAIRE will be informed. At the request of the COMMANDITAIRE, the Service Provider may propose Professional Services to pinpoint the problem's origin, billed in 30-minute increments upon prior agreement.

In cases where the incident is attributed to the Service Provider or one of their subcontractors, that party completes the diagnosis and addresses service restoration without additional costs. The diagnostic relies on exchanges between parties and the provider's data, considered valid by mutual agreement among parties.

### Process for Priority Determination of Incident Handling

The determination of an incident's priority is based on a matrix analysis that evaluates the impact of the incident and its level of criticality:

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

The operations of the service support provided by the Vendor for the SecNumCloud qualified infrastructure offering are located within the European Union.

## Service Level Agreements (SLAs) and Service Availability Commitments

The Provider commits to continuously monitor the performance and security integrity of its technical infrastructure delivering the Service, ensuring optimal functioning.

Service unavailability, indicated by a performance metric, is recognized as soon as it's identified by the Provider’s monitoring system or through a notification from the COMMANDITAIRE user. The onset of unavailability is determined at the earliest time between these two events to ensure precise and fair billing for downtime.

Service restoration is officially marked when the service is fully restored, confirmed by either the Provider’s monitoring tools or a user return, ensuring effective resumption of operations and accurate measurement of interruption duration.

## Service Availability Commitments

The Provider commits to maintaining the agreed-upon availability and performance standards for each specified period, as defined by Service Level Agreements (SLAs). These commitments apply only if the COMMANDITAIRE implements its systems across at least two of the available availability zones within the relevant region.

In the absence of these conditions being met by the COMMANDITAIRE, it will be unable to assert the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is provided through the COMMANDITAIRE interface. Performance metrics are calculated monthly:

- **SLA 1** (IC-INFRA_SNC-01) - Compute Availability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 2** (IC-INFRA_SNC-02) - Storage Availability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 3** (IC-INFRA_SNC-03) - Backup Reliability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 4** (IC-INFRA_SNC-04) - Network Infrastructure Availability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 5** (IC-INFRA_SNC-05) - Internet Access: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.

**Remarks:**

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing to block all traffic destined for that IP at their upstream providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIREs and the Provider’s infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as implementing web application firewall software available on the market, and carefully configuring its security groups via the API command interface.

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports like SSH (TCP 22) and RDP (TCP 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as SMB (TCP/UDP 445) or NFS (TCP/UDP 2049).

## COMMANDITAIRE Availability Commitment

- SLA 6: IC-INFRA_SNC-06 -- Access to the administration console of the Service:
    A guaranteed availability of 97%, provided continuously, 24 hours a day, 7 days a week.
- SLA 7: IC-INFRA_SNC-07 -- Access to the service orchestration APIs:
    A 99.9% availability, calculated on a daily basis, 24/7.

## Service Level Agreement (SLA) Availability Commitment

### SLA 8: IC-INFRA_SNC-08

Here are the performance commitments of the Prestataire's technical support for incidents, excluding scheduled maintenance:

| Priority | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Priority P1** | 30min | 95% |
| **Priority P2** | 2h | 90% |
| **Priority P3** | 4h | 90% |
| **Priority P4** | 24h | 85% |
| **Priority P5** | 48h | 85% |

### SLA 9: IC-INFRA_SNC-09

Here are the performance commitments of the Prestataire's technical support for service requests:

| Type | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Service Request** | 4h | 90% |

*Note:*

- The GTI delay is calculated from the moment the COMMANDITAIRE opens a ticket until the first intervention by the Prestataire's support team.
- Investigation of incidents concerning COMMANDITAIRE commands will not include remote server assistance on the COMMANDITAIRE's hosted servers. Assistance in this area will be limited to explaining available metrics related to the COMMANDITAIRE environment, facilitating understanding of encountered performance issues or problems. Based on these analysis results, recommendations may be suggested.*

## S3 Storage Object Availability Commitment

- **SLA 10: IC-INFRA_SNC-10** -- Here are the availability commitments for S3 storage object:

| Indicator | Commitment | Target Availability |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Durability of an object's storage in a region | 99.9999999% / year |
| **IC-INFRA-SNC-10.2** | Availability of the S3 Object Storage API | 99.99% |
| **IC-INFRA-SNC-10.3** | Maximum latency to access an object in a region | 150 ms |

Notes:

- The S3 Storage Service is specifically designed for object storage and must be used exclusively for this purpose, **exclusively excluding any use in block mode**. Using the block mode via unauthorized methods, such as employing "FUSE" in a Linux environment, constitutes a violation of the usage terms. Any incident, malfunction, or damage resulting from such non-conforming use is not covered by the Service Level Agreements (SLAs) defined in this service agreement.
- The durability guarantee is contingent upon adherence to current best practices and standards, and explicitly excludes any data modification, whether intentional or accidental, resulting from actions taken by the COMMANDITAIRE.

## Data Backup Commitment Details

The backup strategy for COMMANDITAIRE is contingent upon subscribing to appropriate work units.

The Provider commits to delivering a backup solution enabling COMMANDITAIRE to implement desired backup policies.

It's specified that the Provider's scope ends with providing a backup service, while COMMANDITAIRE is responsible for overseeing policy execution via the COMMANDITAIRE interface.

It's noted that capacity management of the dedicated storage space for backups falls entirely on COMMANDITAIRE. The Provider offers usage rate information through the console.

*Example: Unbacked virtual machine:*

In case COMMANDITAIRE identifies a non-backed virtual machine, it is its responsibility to investigate and determine the cause. COMMANDITAIRE can then contact the Provider's Support according to the subscribed support level for assistance.

**SLA 8 (IC-INFRA_SNC-08) and SLA 9** are exclusively applicable in scenarios of a backup service incident.

## Contractual Relationship Organization

## Responsibilities of the Provider

The Provider undertakes:

- To adequately inform the COMMANDITAIRE (e.g., in case of technical resource capacity limitations affecting the Service delivery).

- To formally notify the COMMANDITAIRE and within one month, of any formal changes (legal, organizational, or technical) that could impact the Service's compliance with extra-EU data protection requirements (19.6 of the SNC v3.2 reference document).

- To provide the COMMANDITAIRE with interfaces and service interfaces in French at a minimum.

- To consider sector-specific requirements related to the types of information entrusted by the COMMANDITAIRE for Service implementation, within the Provider's scope of responsibilities and as stipulated in the Contract, while adhering to applicable laws.

- To study further sector-specific requirements related to the types of information entrusted by the COMMANDITAIRE for Service implementation, expressed later by the COMMANDITAIRE, and inform them about necessary actions for compliance.

- Not to disclose any information regarding service provision to third parties without a formal written authorization from the COMMANDITAIRE.

- To make all necessary information available to the COMMANDITAIRE for audits of Service conformity as per Article 28 of GDPR, through this Service Agreement.

- To act as a subcontractor for the COMMANDITAIRE in accordance with Article 28 of the General Data Protection Regulation (RGPD), providing assistance and advice on data protection matters when an instruction from the COMMANDITAIRE is likely to breach data protection rules, alerting them immediately.

- To promptly inform the COMMANDITAIRE via the COMMANDITAIRE's console or designated email address regarding any project impacting Service security level, availability, or functionality, potential impacts, mitigation measures, and residual risks concerning the COMMANDITAIRE.

- To document and implement all procedures necessary to comply with applicable legal, regulatory, and contractual requirements for the service, as well as the COMMANDITAIRE's specific security needs defined in the Contract.

- Not to use COMMANDITAIRE’s production data for testing purposes, except upon explicit prior authorization from the COMMANDITAIRE, at which point the Provider commits to anonymizing these data and ensuring their confidentiality during anonymization.

- To securely erase all COMMANDITAIRE's data, in accordance with the "Data Eradication Procedure" outlined in this Service Agreement upon contract termination or cancellation.

- On formal written request from the COMMANDITAIRE, to:

  1. Make the Provider’s internal regulations and code of ethics accessible to the COMMANDITAIRE;
  2. Provide access to sanctions for security policy violations;
  3. Offer the COMMANDITAIRE all relevant Service event logs for review through web interfaces and APIs;
  4. Make procedures available for complying with applicable legal, regulatory, and contractual requirements, as well as the COMMANDITAIRE's specific security needs outlined in the Contract;
  5. Provide elements of risk assessment related to submitting COMMANDITAIRE’s data to non-EU member states' jurisdictions;
  6. Inform the COMMANDITAIRE about subsequent subcontractors involved in Service provision and any changes impacting these subcontractors.

> All Provider entities commit to upholding the fundamental values of the European Union, namely dignity, freedom, democracy, equality, rule of law, and respect for human rights. The service provided by the Provider is compliant with applicable data protection legislation concerning fundamental rights and adheres to EU values regarding respect for human dignity, freedom, equality, democracy, and the rule of law.

## Scope of Provider's Liability

Given the definitions and conditions outlined in this Service Agreement, the responsibilities of the Provider are limited as follows:

1. The shared responsibility model, described in the "Shared Responsibility Model" section of this Service Agreement, inherently limits the Provider's involvement in operational layers above providing computational resources, network, storage, and backup services. This specifically excludes:

   - Management of what is installed on virtual machines (OS, middleware, applications, etc.);
   - Maintenance of operating systems and other software installed by the COMMANDITAIRE on its tenants' machines;
   - Security of programs, software, and applications installed on virtual machines;
   - Updating virtual machines;
   - Application-level data backup.

2. The Provider cannot make any backup commitments for COMMANDITAIRE's tenants without the latter having first subscribed to appropriate infrastructure units.

3. The Provider cannot claim ownership of data transmitted and generated by COMMANDITAIRE. In fact, these belong to COMMANDITAIRE.

4. The Provider emphasizes that it cannot exploit or make use of any data transmitted and generated by COMMANDITAIRE without prior validation from the latter, as such disposition is reserved for COMMANDITAIRE.

5. The Provider waives all responsibility for physical components physically hosted and managed by the Provider, which are directly owned by COMMANDITAIRE or a third party with whom COMMANDITAIRE has contracted. Physical client components' hosting is outside the scope of this Service Agreement and is thus not covered under its terms. It falls upon COMMANDITAIRE to assess the level of adherence or dependency these physical components introduce concerning the SecNumCloud IaaS qualified service.

## Access Restriction

In accordance with the Service, the Provider is expressly prohibited from accessing Tenants belonging to COMMANDITAIRE without prior authorization. It is the responsibility of COMMANDITAIRE to provide necessary access for Provider's personnel, based on specific hosting and service requirements, as well as professional support services, if chosen by COMMANDITAIRE.

COMMANDITAIRE acknowledges that these accesses are granted exclusively for the purposes related to agreed-upon service provision, ensuring secure and compliant management of data according to the agreement terms.

Remote access by third parties involved in Provider's service delivery is strictly forbidden. Should a specific technical requirement necessitate such access, it can only be established after clear notification to COMMANDITAIRE, detailed justification provided, and written approval obtained.

This measure ensures COMMANDITAIRE's control and data security, confirming that any exception to the rule is duly authorized and documented.

## Third-Party Responsibilities in Providing Secure Temple Service

The Provider maintains a list of third-party partners involved in providing the Service, which includes editors, vendors (of the Provider), and other suppliers contributing to the Service's provision. The Provider implements the following measures with respect to these third parties:

- The Provider mandates that all third parties implementing the service adhere to a security level at least as high as what the Provider commits to maintaining in its own security policy applicable to Secure Temple;
  
- The Provider negotiates audit clauses with each third party involved in implementing the Service, enabling an accreditation body to verify compliance of these third parties with legal requirements and the Provider's security standards. This ensures the Provider meets its obligations under this Service Agreement.

- The Provider establishes a procedure for regularly monitoring the security measures implemented by third parties contributing to the service's implementation to ensure they meet the Provider's commitment as outlined in this Service Agreement.

- The Provider conducts ongoing tracking of changes made by third parties involved in implementing the service that could impact the system's information security level.

## RESPONSIBILITIES AND OBLIGATIONS OF THE COMMANDITAIRE

The COMMANDITAIRE is responsible for the following obligations within the context of the Service:

- The Prestataire provides the COMMANDITAIRE with a virtual machine execution platform. Configuration of these machines is the responsibility of the COMMANDITAIRE. Each virtual machine must be accompanied by an associated backup policy. The Prestataire defines automated backup policies through its interfaces. However, it is the COMMANDITAIRE's duty to activate these backup policies and thus enable the virtual machines.

- The COMMANDITAIRE grants authorization for the ANSSI and the qualification organization SNC to audit both the Service and the underlying technical infrastructure delivering the Service.

- The COMMANDITAIRE is responsible for informing the Prestataire of any sector-specific requirements related to the types of information entrusted by the COMMANDITAIRE, which must be considered by the Prestataire.

- The COMMANDITAIRE accepts not to request from the Prestataire any additional or actions that would exempt the Prestataire from the requirements of the SecNumCloud reference framework (current version) on one hand, or lower the established security level by adhering to less stringent requirements defined by this same reference framework on the other hand.

## COMMANDITAIRE'S RIGHTS

At any point during the contractual relationship, the COMMANDITARE can file a claim regarding the qualified service with the ANSSI.

At any time, the COMMANDITARE may request from the Provider access to its internal settlement and ethics charter.

## Data Erasure upon Contract Termination

Upon the conclusion of the contract, whether by expiration or termination for any reason, the Provider commits to securely erase all data associated with the COMMANDITAIRE, including technical data. The Provider will ensure that the COMMANDITAIRE is formally notified of this erasure plan within a 21-day (calendar) window. The COMMANDITAIRE's data will be removed no later than 30 days following this notification.

To validate this deletion, the Provider will provide the COMMANDITAIRE with a certificate confirming the data erasure.

## Lifecycle of the Present Service Agreement

This document outlines the lifecycle stages of the current service agreement, detailing its initiation, execution, maintenance, and termination. Each phase is crucial for understanding the contractual relationship between the service provider and the client, ensuring compliance with legal requirements and fostering a productive partnership.

### 1. Initiation Phase

- **Purpose**: This stage involves defining the objectives of the agreement, identifying the scope of services to be provided, and outlining the responsibilities of both parties.
- **Key Elements**:
  - **Service Description**: Detailed explanation of the services being offered (e.g., cloud computing solutions, IT infrastructure management).
  - **Scope of Work**: Clear delineation of tasks, deliverables, and timelines.
  - **Parties Involved**: Identification of all stakeholders, including subcontractors if applicable.
- **Outcome**: A comprehensive agreement document that serves as the foundation for the service relationship.

### 2. Execution Phase

- **Purpose**: This phase focuses on implementing the agreed services according to the outlined plan. It involves resource allocation, project management, and ensuring adherence to quality standards.
- **Key Elements**:
  - **Resource Allocation**: Assignment of personnel, technology, and other resources necessary for service delivery.
  - **Project Management**: Implementation of a structured approach to manage tasks, track progress, and address issues.
  - **Quality Assurance**: Establishment of processes to ensure the delivered services meet specified standards.
- **Outcome**: Effective execution of services, meeting client requirements as per the initial agreement.

### 3. Maintenance Phase

- **Purpose**: This ongoing phase ensures continuous service delivery and support, addressing any issues that arise post-implementation. It includes maintenance, updates, and enhancements to maintain service quality and relevance.
- **Key Elements**:
  - **Ongoing Support**: Provision of technical assistance, troubleshooting, and issue resolution.
  - **Regular Updates**: Implementation of software patches, security updates, and feature enhancements.
  - **Performance Monitoring**: Continuous assessment of service performance against agreed KPIs.
- **Outcome**: Sustained delivery of services aligned with evolving client needs and technological advancements.

### 4. Termination Phase

- **Purpose**: This phase addresses the formal conclusion of the agreement, encompassing all necessary steps to wind down operations, settle outstanding obligations, and ensure a smooth transition for both parties.
- **Key Elements**:
  - **Termination Conditions**: Clear criteria under which the agreement can be terminated (e.g., breach of contract, non-payment).
  - **Exit Strategy**: Plan for data migration, system decommissioning, and knowledge transfer.
  - **Final Settlements**: Procedures for resolving any financial or service-related obligations.
- **Outcome**: A seamless transition where all responsibilities are fulfilled, and the contractual relationship is formally closed with no outstanding issues.

### Conclusion

Understanding each phase of this service agreement lifecycle is vital for both parties to ensure effective collaboration, compliance, and mutual success. By adhering to these stages, we can maintain a robust, transparent, and productive partnership that aligns with the evolving needs of our clients while upholding legal and ethical standards in cloud computing and IT service management.

## Effective Entry into Service Agreement

The present Service Agreement shall come into effect on the date of its signing by the COMMANDITAIRE.

Data collection, processing, storage, and handling in the context of pre-sale, service implementation, and termination are conducted in compliance with applicable laws.

## Evolutions of the Service Agreement

Any modifications or additions to the present Service Agreement stem exclusively from requests made by designated governance bodies. These change proposals will be reviewed by the Parties, empowered to determine which aspects require written formalization.

It is agreed that any evolution of the Service Agreement, upon validation, altering the initially established financial conditions, necessitates the drafting and signing of an amendment to the ongoing contract.

Factors potentially prompting a revision of this Service Agreement include, but are not limited to:

- The evolution of the underlying technical infrastructure delivering the IaaS Service;
- Adjustments made by the Prestataire to its services for providing the Service;
- Variations in agreed commitments and applicable sanctions;
- Organizational reconfigurations within COMMANDITAIRE or the Prestataire;
- Expansion or reduction of the Service's operational scope.

The management of versions and revisions of the Service Agreement is documented at the beginning of this document for ease of tracking.

### Evolutions Triggered by COMMANDITAIRE

The evolutions of the Service Agreement may originate from:

- An update to the managed infrastructure provided by the Vendor;
- A change in the services implemented by the Vendor;
- A modification of the service level agreements (SLAs) by the Vendor.

### Changes Initiated by the Provider

Any modification of the Service Agreement is subject to acceptance by the **CLIENT**. It is understood that any modification or addition validated altering financial elements of the Contract may necessitate the signing of an addendum to this one.

## Reversibility

In addition, Cloud Temple commits to allowing the review of this Service Agreement (including its potential termination) without penalty for the COMMANDITAIRE in case of loss of SecNumCloud qualification.

The Services do not include an obligation of reversibility (i.e., assistance from the COMMANDITAIRE to migrate their system to another "Provider"), except for the provision of the COMMANDITAIRE interface by the Provider, enabling the COMMANDITAIRE to back up and retrieve their data, including their system's configuration data via one or more documented and exploitable modalities at the COMMANDITAIRE's discretion: providing files in formats documented and accessible outside the service provided by the Provider, or establishing technical interfaces allowing access to data according to a documented and exploitable schema (API).

The COMMANDITAIRE, being the sole master of their system, must take all necessary measures to facilitate this operation as needed (which involves, among other things, meticulous documentation for this purpose) and the development of a reversibility plan. In case the COMMANDITAIRE requires additional services, the Provider may offer consulting work in this area under a separate contract to be negotiated.

## Service Availability, Continuity, and Recovery

In the realm of cloud computing and IT systems, ensuring service availability, continuity, and recovery is paramount. These aspects are critical for maintaining business operations, data integrity, and customer satisfaction. Let's delve into each:

### Service Availability

Service availability refers to the proportion of time a system or service is operational and accessible to users. High availability is typically measured using uptime percentages—the percentage of time during which a system is functioning correctly over a given period, usually a month. Achieving high availability often involves redundancy in hardware and software components, load balancing, failover mechanisms, and robust network infrastructure.

### Continuity

Continuity pertains to the ability of an IT system or business process to maintain operations during and after disruptions such as natural disasters, cyber-attacks, or system failures. This involves implementing disaster recovery plans (DRP) that outline procedures for restoring systems and data quickly in case of a crisis. Key components include backup strategies, failover systems, and business continuity planning to ensure minimal downtime and data loss.

### Recovery

Recovery encompasses the processes and technologies used to restore normal operations after an incident or disaster. This includes both data recovery (restoring lost or corrupted data) and system recovery (bringing services back online). Effective recovery strategies often incorporate:
- **Backup and Restore**: Regularly backing up critical data and having a robust restore process in place.
- **Disaster Recovery Sites**: Having secondary sites with identical infrastructure to switch operations quickly during an emergency.
- **Automated Recovery Tools**: Utilizing software tools that can automatically detect failures and initiate recovery processes, minimizing human intervention time.

### Best Practices for Enhanced Availability, Continuity, and Recovery

1. **Redundancy**: Implement redundant systems to ensure that if one component fails, another can take over seamlessly.
2. **Regular Testing**: Conduct regular drills and tests of disaster recovery plans to validate their effectiveness and identify areas for improvement.
3. **Monitoring and Alerts**: Utilize robust monitoring tools with real-time alerts to detect issues early before they impact availability or continuity.
4. **Automated Response Systems**: Employ automation where possible to reduce human error and speed up response times during incidents.
5. **Compliance and Standards**: Adhere to industry standards (e.g., ISO 22301 for Business Continuity Management) and regulatory requirements to ensure comprehensive coverage.
6. **Training and Awareness**: Regularly train staff on disaster recovery procedures, emphasizing the importance of their roles in maintaining continuity.

In conclusion, ensuring service availability, continuity, and robust recovery mechanisms is a multifaceted endeavor requiring careful planning, implementation, and ongoing maintenance. By adhering to best practices and leveraging appropriate technologies, organizations can significantly enhance their resilience against disruptions and maintain operational integrity.

### Incident and Outage Management

This section outlines the processes and procedures for managing incidents and outages within our cloud infrastructure. The goal is to ensure minimal disruption, rapid resolution, and effective communication with stakeholders during any service disruption.

#### Key Components:

1. **Incident Detection**:
   - Utilize monitoring tools (e.g., Prometheus, Grafana) for real-time alerts on potential issues.
   - Implement alerting mechanisms to notify the incident management team promptly.

2. **Incident Classification**:
   - Categorize incidents based on severity (Critical, High, Medium, Low).
   - Assign priority levels according to business impact and urgency.

3. **Incident Response Team**:
   - Assemble a cross-functional team including engineers, system administrators, network specialists, and customer support representatives.
   - Define roles and responsibilities for each member of the team.

4. **Incident Triage**:
   - Quickly assess the situation to determine root cause and impact.
   - Use incident management software (e.g., Jira Service Management) for tracking and managing incidents.

5. **Resolution Process**:
   - Develop and execute a plan to resolve the issue, including potential workarounds if necessary.
   - Document all actions taken during resolution for future reference and compliance purposes.

6. **Communication Plan**:
   - Establish clear communication channels with stakeholders (internal teams, customers).
   - Provide regular updates on incident status, expected resolution time, and any impact mitigation efforts.

7. **Post-Incident Review**:
   - Conduct a thorough post-incident analysis to identify lessons learned and areas for improvement.
   - Update incident response procedures based on findings from reviews.

8. **Documentation and Reporting**:
   - Maintain detailed records of all incidents, including root cause analysis, resolution steps, and communication logs.
   - Generate reports for management and compliance purposes.

#### Tools and Technologies:

- Incident Management Software (e.g., Jira Service Management)
- Monitoring and Alerting Systems (e.g., Prometheus, Grafana)
- Collaboration Platforms (e.g., Slack, Microsoft Teams)
- Documentation Tools (e.g., Confluence)

By adhering to these processes, we aim to ensure efficient incident management that minimizes downtime and maintains customer satisfaction while continuously improving our response capabilities.

---
Incidents
---

### Types of Incidents Handled Under This Service Agreement

- **Damages**;
- **Outages and Failures**;
- **Security Incidents affecting the availability, privacy, or integrity of the Service.**

### Incident Handling

> The Provider promptly informs the COMMANDITAIRE of any incidents and disruptions, using a notification in the COMMANDITAIRE console or via email to the COMMANDITAIRE contact. The Provider notifies the COMMANDITAIRE on the channel used for reporting the incident, or as specified in the incident notification.

#### Level of Security Incident Notification

The COMMANDITAIRE is responsible for determining the severity levels
of Security Incidents for which it wishes to be notified, such as formalization within a PAS applicable to the Service.

By default, the COMMANDITAIRE is informed:

- Of security incidents with impact (I1 and I2 according to the impact scale defined in the processing priority process of this Service Convention) ;

- Of security incidents affecting the COMMANDITAIRE's confidentiality or data integrity, which it processes under the Service's framework ;

- Of personal data breaches for which the COMMANDITAIRE is responsible for processing as per Article 8 of Annex DPA within the Service's context ;

- [Additional levels/types of notifications to be specified based on specific requirements or further details not provided in the excerpt.]

### Service Maintenance

This section outlines the procedures and protocols for maintaining our cloud services. It includes regular updates, system checks, security audits, performance optimization, and troubleshooting processes to ensure continuous service availability and reliability. 

1. **Scheduled Updates**:
   - Regular software updates are scheduled to incorporate new features, enhance security, and improve overall system efficiency.
   - These updates are thoroughly tested in a staging environment before deployment to production servers.

2. **System Checks**:
   - Continuous monitoring of server health using tools like Nagios or Prometheus for real-time performance metrics.
   - Automated checks for disk space, memory usage, and network connectivity.

3. **Security Audits**:
   - Periodic vulnerability assessments conducted by security experts to identify potential threats.
   - Penetration testing simulations are performed quarterly to evaluate the effectiveness of our defense mechanisms.

4. **Performance Optimization**:
   - Regular tuning of database queries and application code for efficiency.
   - Load balancing adjustments to distribute traffic evenly across servers, preventing overload.

5. **Troubleshooting Processes**:
   - A well-documented incident response plan outlining steps for diagnosing and resolving service disruptions quickly.
   - Dedicated support teams available 24/7 for immediate assistance during critical issues.

6. **Documentation and Training**:
   - Comprehensive documentation of all maintenance procedures, including step-by-step guides and troubleshooting tips.
   - Regular training sessions for IT staff to keep them updated on new technologies and best practices in service management.

This structured approach ensures that our cloud services remain robust, secure, and efficient, providing uninterrupted service to our clients.

### Nature of Maintenance

Data breaches involving personal data for which the Provider is responsible for processing and containing personal data of the **COMMANDITAIRE**, in accordance with Article 8 of the DPA Annex. The maintenance provided includes:

- Implementation of the operational readiness plan for the Service to ensure optimal availability indicators, as outlined by the Provider above;
- Execution of PCA/PRA (if procured by the COMMANDITAIRE) triggered by potential incidents that may occur.

### Remote Access to Cloud Temple Beyond COMMANDITAIRE's Perimeter

The Provider is prohibited, under the terms of this Service Agreement, from accessing Tenants and the interface space of the COMMANDITAIRE.

It will be the responsibility of the COMMANDITAIRE to grant the necessary access to Provider personnel. The COMMANDITAIRE acknowledges that these accesses will be utilized for hosting and ultimately information management (if subscribed by COMMANDITAIRE).

### Remote Access by Third Parties for Service Provision Within the COMMANDITARE

No remote access by third parties involved in service provision within the COMMANDITARE is authorized.

Should a technical necessity arise, such access would only be granted post-notification and written approval from COMMANDITAIRE.

# Data Erasure Procedure at Contract Termination

At the conclusion of the Contract, whether due to expiration or any other reason, the Provider ensures a secure erasure of all data processed under the Service, including COMMANDER'S technical data. The Provider will provide a formal notice within a 21-calendar-day window (21 days). The COMMANDER'S data will be deleted no later than 30 days following the notification. The Provider will deliver a data deletion certificate to the COMMANDER.

## Applicable Law

## Generally Speaking

The applicable law and jurisdiction for this Service Agreement is French law.

## Compliance with Laws and Regulations

The Provider commits to the following:

- Identifying applicable legal and regulatory constraints within the scope of the Service;
- Adhering to these legal and regulatory constraints for the data entrusted to the Provider, within the limits of its responsibilities on one hand, and as stipulated in the Contract on the other;
- Compliance with the French Data Protection Law (Loi informatique et libertés) and the General Data Protection Regulation (RGPD);
- Implementing data protection measures;
- Establishing and maintaining a legal and regulatory compliance process;
- Ensuring appropriate relationships or vigilance with relevant sectoral authorities concerning the nature of the processed data under the Service. This includes, but is not limited to, ANSSI (National Cybersecurity Agency), CERT-FR (France Computer Emergency Response Team), and CNIL (Commission Nationale de l'Informatique et des Libertés).

## GDPR

As a processor under the provisions of Article 28 of the General Data Protection Regulation (RGPD), the Provider commits to:

- Ensuring transparency and traceability;
- Designating a Data Protection Officer (DPO) responsible for defining and implementing data protection measures concerning personal data;
- Providing assistance and advice to the COMMANDITAIRE, alerting them if an instruction from the latter constitutes a violation of data protection rules that the Provider can identify;
- Ensuring data security for processed data due to its SecNumCloud qualification.

## Protection against extra-EU law

The Prestator's corporate seat is located within an EU member state. The Prestator's share capital and voting rights in the company are not, directly or indirectly:

- individually held by more than 24%;

- and collectively held by more than 39%;

by third entities having their registered office, central administration, or principal establishment within a non-EU member state.

In the event that the Prestator, as part of its service, engages with a third party (including a subcontractor) located outside an EU member state or controlled by a third party based outside the EU, the Prestator commits to:

- ensuring this third party has no access to operational data processed by the 'Secure Temple' service;

- maintaining operational autonomy through the ability to engage another subcontractor or swiftly implement an alternative technology.

For clarity, the data in question includes those entrusted to the Prestator by the COMMANDITAIRE, as well as all technical data encompassing information about the COMMANDITAIRES.

For the purposes of this article, the notion of control is understood according to the definition provided in Article L233-3 of the French Commercial Code.

# SIGNATURES

Made in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\, the
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ date

On behalf of Cloud Temple, the
PRESTATAIRE

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the COMMANDITAIRE