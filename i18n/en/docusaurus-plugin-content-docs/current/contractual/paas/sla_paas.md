---
Title: Service Level Agreement (SLA) for Cloud Platform - SecNumCloud PaaS
---

## Framework

| Reference | CT.AM.JUR.ANX.PAAS 2.1 |
| :--- | :--- |
| **Date** | January 21, 2025 |

## Acronyms

| Acronym | Description |
| :--- | :--- |
| **CAB** | Change Advisory Board -- Comité consultatif sur les changements |
| **CMDB** | Configuration Management Database -- Base de données de gestion des configurations |
| **COPIL** | Comité de pilotage |
| **COSTRAT** | Comité stratégique |
| **DB** | Database (base de données) |
| **DRP** | Disaster Recovery Plan (Plan de reprise d\'activité) |
| **GTI** | Garantie de Temps d'Intervention |
| **GTR** | Garantie de Temps de Résolution |
| **GTE** | Garantie de Temps d'Escalade |
| **HYPERVISEUR** | Système d\'exploitation permettant l\'execution de VM sur une lame de calcul |
| **ITIL** | Information Technology Infrastructure Library - Bonnes pratiques pour la gestion des systèmes d\'information |
| **IAAS** | Infrastructure as a Service |
| **MCO** | Maintien en condition opérationnelle |
| **MOA** | Maitrise d'Ouvrage |
| **MOE** | Maitrise d'Œuvre |
| **OS** | Operating system |
| **PAQ** | Plan d\'Assurance Qualité |
| **PAAS** | Platform as a Service |
| **SDM** | Service Delivery Manager |
| **RFC** | Request For Change -- Demande de changement |
| **RGPD** | Règlement Général de Protection des Données (personnelles) |
| **RPO** | Recovery Point Objective -- Fraicheur des données restaurées en cas de sinistre |
| **RTO** | Recovery Time Objective -- Délai de rétablissement du service en cas de sinistre |
| **SLA** | Service Level Agreement -- Accord sur les niveaux de services |
| **UO** | Unité d'Œuvre |
| **VABF** | Validation d'Aptitude au Bon Fonctionnement |
| **VABE** | Validation d'Aptitude à la Bonne Exploitabilité |
| **VM** | Virtual Machine (Machine virtuelle) |
| **VSR** | Validation de Service Régulier |
| **SNC** | SecNumCloud |

## Glossary

The following expressions used in this document will be interpreted according to the definitions provided below:

| Expression | Definition |
| :--- | :--- |
| **Secure Temple** | Refers to the qualified IaaS service SecNumCloud offered by Cloud Temple, as defined in the accessible attestation on the ANSSI website and included as an Annex to this Service Agreement. |
| **Region** | In the context of cloud computing, a "region" denotes a geographically delimited set of availability zones providing network, compute, and storage services to optimize latency, performance, and local regulatory compliance. |
| **Availability Zone (AZ)** | A specific and isolated section of cloud infrastructure designed for ensuring high availability and resilience of services through the geographical distribution of resources. |
| **Tenant** | An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security. |

| Expression | Definition |
| :--- | :--- |
| **Incident** | Any "incident" refers to an unexpected event disrupting the normal functioning of a system or compromising data security. |
| **Root Cause** | A "root cause" is a fundamental cause of one or more incidents, identified or suspected, requiring analysis and resolution for preventing recurrence. |
| **Change** | Any addition, modification, or removal impacting the Service, authorized, planned, or covered, is termed a "change." |
| **Standard Change** | A "standard change" involves a change subject to a procedure with known procedures for go-live and anticipated impacts (including financial ones), accepted in advance by all parties. It's then integrated into the standard changes catalogue and may have GTI and GTR if applicable. |
| **Go Live** | Actions taken by administration to implement a change once it's approved (the change, per ITIL, pertains to change management rather than its execution/implementation). |
| **Service Request** | A request for service evolution following a procedure where the realization: i) doesn't alter the CMDB, ii) operational mode, costs, and risks are known and accepted in advance without specific rollback requirements, iii) is subject to an agreed-upon Service Level Agreement (SLA) and included in the contract's revenue when performed during business hours. |
| **Configuration Element** | An "configuration element" refers to a identifiable component of IT information system, such as software, hardware, or document, managed within IT service management framework. |
| **Service** | Refers to the qualified SecNumCloud service delivered by the Provider to COMMANDITAIRE, as detailed in the "Description of Service" section of this Service Agreement. |
| **Event** | Any detectable or identifiable occurrence potentially significant for managing a service's performance. |
| **Incident** | A "incident" signifies a severe event of natural or human origin, accidental or intentional, causing substantial losses and damages to the affected party. |
| **Service Agreement** | This document, established within the scope of a specific contract or General Terms and Conditions of Sale and Use (CGVU), adhering to SecNumCloud Reference requirements. |
| **Availability** | The capability to ensure service availability and optimal performance, in alignment with defined criteria and commitments outlined in Service Level Agreements (SLAs). |
| **Supervision** | Surveillance of an IT system or service involves collecting various data such as measurements and alarms. This activity is limited to observation and tracking without intervening directly on monitored elements, a prerogative reserved for operational administration. |

## Purpose of the PaaS Service Level Agreement (SLA) Contract

The present Service Level Agreement (SLA) Contract outlines the terms and conditions under which the Provider agrees to deliver an infrastructure conforming to the "Platform as a Service -- PaaS" offering, certified by SecNumCloud.

Purpose of the SLA Contract:

1. Define the performance expectations anticipated by the COMMANDITAIRE in terms of functionality and reliability of the infrastructure.
2. Specify the Provider's obligations to meet agreed-upon service levels.
3. Identify applicable regulatory standards specifically for the proposed infrastructure.
4. Ensure uniformity and integrity in assessing the quality of services provided.
5. Guarantee the excellence of services delivered, evaluated through quantitative performance indicators.

In case the Provider's SecNumCloud qualification is withdrawn, the Contract can be terminated immediately by the COMMANDITAIRE without any penalties. The Provider commits to notifying the COMMANDITAIRE of this de-qualification via an official notification letter sent by registered mail with acknowledgment of receipt.

It should be noted that a modification or adjustment in SecNumCloud qualification will not be construed as a revocation of the original qualification.

## Evolution of the Service Level Agreement (SLA) Convention

Any modifications or additions to the current SLA convention are exclusively based on requests from the designated governance bodies. These change proposals will be reviewed within the strategic committee, the sole body authorized to determine aspects requiring written formalization.

It is agreed that any evolution of the convention, upon validation, altering the initially established financial conditions, necessitates the drafting and signing of an amendment to the existing contract.

Factors potentially prompting a revision of this convention include, but are not limited to:

- Adjustments made to the PaaS platform orchestrated by the Provider.
- Modifications implemented on services deployed by the Provider.
- Changes in agreed commitments and applicable sanctions.
- Organizational reconfigurations within COMMANDITAIRE or the Provider.
- Expansion or reduction of the service scope subscribed to by COMMANDITAIRE.

The management of convention versions and revisions is documented at the outset of this document for ease of tracking.

## Audit

The Provider commits to enabling the COMMANDITAIRE, or any third-party auditor designated by the COMMANDITAIRE, to access all necessary documents for verifying full compliance with the obligations related to Article 28 of the General Data Protection Regulation (RGPD), thereby facilitating auditing.

**The Provider specifically commits to providing the COMMANDITAIRE with a list of all third parties who can access data and informing them of any changes in subcontractors.**

By accepting this Service Agreement, the COMMANDITAIRE grants explicit authorization to:

 1. **The French National Agency for Information System Security (ANSSI)** along with any competent qualifying entity, to verify compliance of the Service and its Information System with standards defined by the SecNumCloud Reference Framework.
2. **A third-party security audit firm**, duly qualified and specifically designated by the Provider, to conduct security audits on the Service provided by the Provider.

## Service Description

The service offered by the Provider is characterized by providing the following services, which align with the principle of shared responsibility as detailed in the norms established by the SecNumCloud reference framework:

- The provisioning of a Redhat Openshift container management platform managed by the Provider.

It is understood that the Provider will utilize its expertise to deliver these services in accordance with professional best practices, adhering to their specifications and complying with ISO/IEC 27001 standards as well as SecNumCloud guidelines.

## Service Implementation

It is specified that all operations and physical components involved in providing the qualified service, subject to this agreement, are located within the European Union. This includes, but is not limited to, support, operational oversight, and security oversight (SOC).

### Description of Technical Components

The Platform as a Service (PaaS) offerings encompass all the components and services necessary for optimal operation in accordance with SecNumCloud's qualification.

In this regard, their performance and reliability are intrinsically linked to the technical components and infrastructure IaaS (Infrastructure as a Service) provided by the Hosting Provider, as outlined in the [IaaS Service Level Agreement](../iaas/sla_iaas.md) of the Hosting Provider.

### RedHat OpenShift Service Platform

The service encompasses the provision within a region, across three availability zones.

#### Software Management Platform for Redhat OpenShift

The Provider delivers to the COMMANDITAINER the administration console and the API necessary for operating their PaaS environments on RedHat OpenShift. The Provider commits to maintaining these systems in optimal operational condition and ensuring continuous security.

Within the scope of this service, the Provider makes available all interfaces and APIs of the RedHat OpenShift platform within the selected tenant. It is the COMMANDITAINER's responsibility to implement appropriate security measures, such as firewalls (firewall), application-layer web firewalls (WAF), and other protection mechanisms, along with defining associated filtering rules to secure access to their platform in accordance with their security policy.

The Provider notifies the COMMANDITAINER that unusual usage of its administration console, particularly excessive API command invocation (hammering), may trigger automated security measures resulting in blocking access to command APIs or certain Provider services. It's crucial to note that this situation does not equate to service unavailability but rather an action for infrastructure protection; thus, the COMMANDITAINER should not consider it as a service outage in their calculations.

Furthermore, the Prestataire informs the COMMANDITAINER that identical API requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the COMMANDITAINER submits identical requests at a higher frequency, their rejection should not be interpreted as service unavailability.

### Backup Infrastructure Associated

The Provider offers the COMMANDITAIRE a dedicated and managed backup platform, specifically tailored for safeguarding the data of its RedHat Openshift environments. The Provider ensures the operational readiness and security of this integrated backup platform. Regardless of the number of availability zones subscribed by the COMMANDITAIRE, the Provider guarantees that the COMMANDITAIRE's backup platform will be situated outside the availability zone of the backed-up workloads.

The backup service is limited to backing up virtual machines and the topology configurations of the IaaS environment of the COMMANDITAIRE's tenants within SecNumCloud. The implementation and application of a suitable backup policy by the COMMANDITAIRE depend on subscribing to specific resource units. It is therefore the responsibility of the COMMANDITAIRE to ensure that the necessary technical resources are available from the Provider for implementing or adjusting the backup policy as needed.

The Provider commits to notifying the COMMANDITAIRE in case of capacity constraints and offering consultation assistance for optimizing resources. The Provider's obligations will be confined to fulfilling the COMMANDITAIRE's expressed backup policy requirements, within the subscribed resource limits.

#### Implementation of Disaster Recovery or Business Continuity Solutions

The Provider delivers to the COMMANDITAIRE all technical solutions necessary for optimally distributing its resources across various availability zones. It is the COMMANDITAIRE's responsibility to effectively manage this resource distribution, utilizing the Provider's available tools for this purpose.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms offered by the Provider in order to benefit from associated disaster recovery or business continuity solutions.

## Service Level Agreements and Service Availability Commitments

The Provider commits to continuously monitor the performance and security integrity of its platforms and services, ensuring optimal operation.

The unavailability of a service, indicated by a performance metric, is recognized as soon as it's identified by the Provider’s supervision system or through a notification from a COMMANDITAIRE user. The onset of unavailability is determined at the earliest point between these two events to ensure accurate and fair billing for downtime.

The termination of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider’s supervision tools or through a return from a user, ensuring a genuine resumption of operations and an accurate measurement of interruption duration.

### Service Level Agreement (SLA) Availability and Performance Commitments for RedHat OpenShift Platform

The Provider commits to maintaining a level of availability and performance in accordance with the defined standards for each specified period. These Service Level Agreements (SLAs) apply, subject to the COMMANDITAIRE implementing its systems across at least two of the availability zones located in the relevant region.

In the absence of these conditions being met by the COMMANDITAIRE, it will be unable to claim the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is available through the COMMANDITAIRE interface. The following SLA measurements are calculated monthly:

- **SLA 1 (IC-PAAS_SNC-01)**: RedHat OpenShift Platform Availability - Guaranteed uptime of 99.9%, calculated on a daily, 24/7 basis.

**Notes:**

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing techniques to block all traffic destined for that IP address upstream with their providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIRES and the Prestataire’s infrastructure. The Provider strongly encourages COMMANDITAIRE to adopt similar measures, such as utilizing web application firewall software available on the market, and configuring security groups via the API command interface.

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).

### Shared Responsibility Model Applicable

This model outlines the division of security responsibilities between cloud service providers and their customers. It's crucial to understand that in a cloud computing environment, security is a shared responsibility. 

**Cloud Service Provider (CSP) Responsibilities:**
1. **Infrastructure Security**: CSPs are responsible for securing the underlying infrastructure—the physical data centers, servers, storage systems, and networking equipment. This includes maintaining the hardware, operating systems, and virtualization layers.
2. **Physical Security**: Protecting facilities where the infrastructure resides from unauthorized access, theft, or damage.
3. **Network Security**: Securing the network perimeters and ensuring that traffic flows correctly within the cloud environment.
4. **Compliance**: Ensuring compliance with various regulatory standards (e.g., HIPAA, GDPR) for data storage and processing.
5. **Data Center Security**: Implementing measures to protect against natural disasters, power outages, or other catastrophic events that could affect the availability of services.

**Customer Responsibilities:**
1. **Platform Security**: Customers are responsible for securing their applications and data running on the cloud infrastructure. This includes configuring firewalls, access controls, encryption, and patch management for operating systems and applications.
2. **Data Security**: Implementing security measures to protect sensitive data stored in the cloud, including encryption at rest and in transit, access controls, and data loss prevention strategies.
3. **Identity & Access Management (IAM)**: Managing user identities, permissions, and authentication mechanisms within the cloud environment.
4. **Compliance**: Ensuring compliance with internal policies and external regulations for data handling and storage.
5. **Monitoring & Logging**: Setting up monitoring tools to detect anomalies and logging mechanisms to track activities for auditing purposes.

Understanding this shared responsibility model is vital for organizations leveraging cloud services, as it helps in defining clear security expectations and responsibilities between the CSP and the customer.

### Service Provider Responsibility and Obligations

The Service Provider commits to providing the COMMANDITAIRE with user interfaces in both French and English, ensuring easy access and management of the services offered. The COMMANDITAIRE, on its part, agrees to adhere to all legal and regulatory constraints regarding the data it entrusts to the Service Provider for processing.

In cases where data subject to specific legal requirements is transmitted, the Service Provider collaborates with the COMMANDITAIRE to identify and implement necessary security measures in accordance with the Service Provider's obligations and within the scope of service delivery.

The Service Provider also pledges to evaluate and consider the unique needs related to the COMMANDITAIRE's operational sectors, respecting its limitations, to ensure an appropriate level of security for the processed information.

Should a project potentially impact the security of the offered Service or its availability, or result in functionality loss, the Service Provider commits to informing the COMMANDITAIRE through the service console or designated email address within a reasonable timeframe, detailing potential impacts, corrective measures planned, and residual risks. This ensures complete transparency.

The Service Provider further agrees not to utilize production data from the COMMANDITAIRE for testing purposes, except with explicit prior authorization from the COMMANDITAIRE. In such cases, the Service Provider commits to anonymizing these data and ensuring their confidentiality during the anonymization process.

Upon a change in hosting subcontractor, the Service Provider will inform the COMMANDITAIRE in advance, guaranteeing that this transition does not negatively affect the service provided.

At the COMMANDITAIRE's request, the Service Provider will provide access to its internal policies, code of ethics, disciplinary actions for policy violations, relevant events, service procedures, and specific security requirements.

The Service Provider commits to notifying the COMMANDITAIRE of any upcoming changes in software elements under Cloud Temple’s responsibility as soon as full compatibility can be assured.

### Service Provider Liability Limitation

The shared responsibility model effectively limits the Prestataire's involvement to aspects related to providing a functional RedHat OpenShift platform, including:

- Management of the underlying Infrastructure as a Service (IaaS) that supports RedHat OpenShift and its provisioning,
- Management of necessary systems for the proper functioning of the platform,
- Maintenance of security,
- Updating RedHat OpenShift platform,
- Backup of essential configuration data of this platform, excluding data and applications managed by COMMANDITAIRE which fall under their responsibility.

This exclusion notably includes, but is not limited to:

- Updates of operating systems and installed software on OpenShift environments within COMMANDITAIRE's locations,
- Security of programs, software, and applications installed within the OpenShift environment managed by COMMANDITAIRE,
- Application-level data backup,
- Configuration of backup policies.

### Access Restriction

In accordance with this service agreement, the Provider is formally prohibited from accessing tenants that belong to the COMMANDITAIRE without prior authorization. It is the responsibility of the COMMANDITAIRE to provide the necessary access for Provider's personnel, based on the specific requirements of hosting and, if chosen by the COMMANDITAIRE, professional support services.

The COMMANDITAIRE acknowledges that these accesses are granted exclusively for the purposes related to the agreed-upon service provision, ensuring a secure and compliant management of data as per the agreement terms.

Remote access by third parties involved in providing the Provider's service is strictly prohibited. In case a specific technical requirement mandates such access, it can only be established after clear notification to the COMMANDITAIRE, detailed justification provided, and written approval obtained.

This measure ensures the COMMANDITAIRE maintains control and security over its data, confirming that any exception to the rule is duly authorized and documented.

## Data Erasure Upon Contract Termination

Upon the conclusion of the contract, whether by expiration or termination for any reason, the Provider commits to securely erase all data associated with the COMMANDITAIRE, including technical data. The Provider will ensure that the COMMANDITAIRE is formally notified of this erasure plan within a 21-day (calendrical) window. The COMMANDITAIRE's data will be removed within a maximum of 30 days following this notification.

To validate this deletion, the Provider will deliver to the COMMANDITAIRE a certificate confirming the complete removal of data.

## Applicable Law

The applicable law for the present service agreement is French law.

In case of a claim by the Service Provider, in relation to services provided to the CLIENT, against a third party, including a subcontractor, whose registered office, central administration, or principal establishment is located in a non-EU country, or which is owned or controlled by a third party based outside the EU, the Service Provider undertakes to ensure that such third party has no access to the data processed by the Service Provider's systems.

It should be noted that the data in question includes those entrusted to the SERVICE PROVIDER by the CLIENT, as well as all technical data such as beneficiary and administrator identities of the technical infrastructure, data manipulated by networks, logs of the technical infrastructure, directory, certificates, access configuration, etc., containing information about the CLIENT.

For clarity, the concept of "control" is defined in accordance with Article L233-3, II of the French Commercial Code.