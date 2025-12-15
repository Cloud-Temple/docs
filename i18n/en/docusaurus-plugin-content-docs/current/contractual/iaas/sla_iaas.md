---
title: Service SecNumCloud IaaS Convention
---

# IaaS SERVICES AGREEMENT

| Recipients : | **CLIENT** |
| :--- | :--- |
| **Document Reference** | CT.AM.JUR.ANX CdS-IaaS - 20251701_v3.0.docx_JJJJ AAAA |
| **Your Contacts** | *First Name* *Last Name* Account Manager email: *firstname.lastname*@cloud-temple.com |
| **Last Updated Date** | 01/17/2025 |
| **Contractual Validation Date** | Day JJ YYYY |

------------------------------------------------------------------------

| Version | Date | Action | Author |
| :--- | :--- | :--- | :--- |
| v0.1 | 06/07/2022 | Initial Draft | Lorena ALCALDE |
| v0.2 | 09/14/2022 | Enrichment | Lorena ALCALDE |
| v1.0 | 12/30/2022 | Integration of Indicators | Lorena ALCALDE |
| v1.1 | 01/23/2023 | Footer Update | Lorena ALCALDE |
| v1.2 | 05/22/2023 | Enrichment | Lorena ALCALDE |
| v1.3 | 06/29/2023 | Enrichment | Lorena ALCALDE |
| v1.4 | 11/06/2023 | Capital Update and Enrichment | Lorena ALCALDE |
| v1.5 | 11/30/2023 | Enrichment | Lorena ALCALDE |
| v1.6 | 03/21/2024 | Enrichment | Lorena ALCALDE |
| v2.0 | 03/29/2024 | Compliance Adjustments (SNC) | Nicolas ABRIOUX |
| v2.0 | 04/03/2024 | Publication | Lorena ALCALDE |
| v3.0 | 01/17/2025 | Enrichment | Emeline CAZAUX |

------------------------------------------------------------------------

# Preliminary and Glossary

## Preliminary

This document formalizes the Service Agreement associated with the IaaS service qualified as SecNumCloud under the name « *Secure Temple*».

The Service is SecNumCloud qualified (see certificate in Annex).

This Service Agreement complements and is supplementary to the Provider's General Terms and Conditions of Sale and Use. It is understood that contractual documents shall be interpreted consistently with one another. In the event of contradiction or discrepancy between the terms of the contractual documents, the documents shall prevail over one another in the following order:

1. General Terms and Conditions of Sale and Use (GTCSU)

2. SecNumCloud IaaS Service Agreement

3. SecNumCloud OpenIaaS Service Agreement

4. SecNumCloud PaaS Service Agreement

5. Specific Service Agreement - Bare Metal

6. Specific Particular Agreement

7. Security Assurance Plan (SAP)

8. Particular Use Conditions (PUC)

9. Data Protection Agreement

## Glossary

In this Service Agreement, the **CLIENT**, the **Provider**, and the **Parties** are identified in the Contract to which this Service Agreement is attached.

The expressions used below in this Service Agreement shall be interpreted according to the definitions assigned to them below:

- **Change:** Any addition, modification, or deletion impacting the Service, which has been authorized, planned, or taken on.

- **Standard Change:** A change subject to a defined procedure, whose production implementation process and impacts (including financial ones) are known and accepted in advance by the Parties. It is then included in the catalog of standard changes and may, depending on the case, have a GTC and a GTR.

- **Contract:** Refers to the agreement subscribed by the CLIENT with the Provider to enable the CLIENT to benefit from the Service, to which this Service Agreement is annexed.

- **Service Agreement:** This document, established within the framework of a specific contract or the General Terms and Conditions of Sale and Use (T&C), in compliance with the requirements of the SecNumCloud Reference Framework.

- **Service Request:** A request for evolution subject to a procedure, whose implementation: i) does not modify the CMDB; ii) has known and pre-approved operational procedures, costs, and risks, and does not require specific rollback mechanisms; iii) is subject to a Service Level Agreement and included in the contract fee when performed during business hours and business days.

- **Availability:** The ability to ensure the availability and maintenance of optimal performance of the Service, in accordance with the criteria and commitments defined in the Service Level Agreements (SLAs).

- **Technical Data:** Includes all data processed to deliver the Service, notably the identities of beneficiaries and administrators of the technical infrastructure, technical infrastructure logs, access configurations, directory, certificates, etc.

- **Event:** An "event" is any detectable or identifiable occurrence that may have significance for Service management.

- **Hypervisor:** Operating system enabling the execution of virtual machines on a compute blade.

- **Incident:** Any unforeseen event disrupting the normal operation of the Service or compromising the security of the data.

- **Security Incident:** Any event within the scope of the Service:
  - Of intentional malicious nature;
  - Of accidental nature causing damage to the integrity, confidentiality, or traceability of the Service or the CLIENT’s data;
  - Resulting in a breach of existing security measures. Incidents affecting Availability due to non-malicious causes (hardware failure, bug, malfunction, natural disaster, etc.) are not considered Security Incidents.

- **CLIENT Interface:** The Service administration interface provided by the Provider to the CLIENT, comprising a web administration console and an API.

- **Production Deployment:** Administrative action(s) to implement a Change once it has been approved (the Change, in the ITIL sense, refers only to change management and not to its implementation/realization).

- **Problem:** The root cause of one or more recurring Incidents, or the cause of a potential Incident (a risk situation), requiring analysis and resolution to prevent recurrence.

- **Region:** Refers to a geographically defined set of cloud availability zones, providing network, computing, and storage services to optimize latency, performance, and local regulatory compliance.

- **Service:** Refers to the SecNumCloud-qualified IaaS service “Secure Temple,” delivered by the Provider to the CLIENT from technical infrastructures maintained by the Provider, as described in the “Service Description” section of this Service Agreement.

- **Secure Temple:** Refers to the SecNumCloud-qualified IaaS service offered by Cloud Temple, as defined in the attestation available on the ANSSI website and provided as an annex to this Service Agreement.

- **Incident:** Refers to a serious event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected Party.

- **Monitoring:** Surveillance of an Information System or a Service, involving the collection of various data such as measurements and alarms. This activity is limited to observation and tracking, without direct intervention on the monitored elements—a prerogative reserved for administrative operations.

- **Tenant:** A dedicated isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security.

- **Availability Zone (AZ):** A specific and isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through geographical distribution of resources.

# Acronyms

| Acronym | Definition |
| :--- | :--- |
| **CAB** | Change Advisory Board -- Change Advisory Board |
| **CMDB** | Configuration Management Database -- Configuration Management Database |
| **COPIL** | Steering Committee |
| **COSTRAT** | Strategic Committee |
| **COPROJ** | Project Committee |
| **DB** | Database (database) |
| **DPA** | Data Protection Agreement |
| **DRP** | Disaster Recovery Plan (DRP) (Disaster Recovery Plan) |
| **GTE** | Escalation Time Guarantee |
| **GTI** | Intervention Time Guarantee |
| **GTR** | Resolution Time Guarantee |
| **ITIL** | Information Technology Infrastructure Library - Best practices for IT service management |
| **IaaS** | Infrastructure as a Service |
| **MCO** | Maintenance in Operational Condition |
| **MOA** | Client (Project Owner) |
| **MOE** | Contractor (Project Executor) |
| **MSP** | Managed Services Provider |
| **OS** | Operating system (operating system) |
| **PAQ** | Quality Assurance Plan |
| **PaaS** | Platform as a Service |
| **PAS** | Security Assurance Plan |
| **PASSI** | Information System Security Audit Provider |
| **RFC** | Request For Change -- Change Request |
| **RGPD** | General Data Protection Regulation (personal data) |
| **RPO** | Recovery Point Objective -- Data freshness upon restoration after an incident |
| **RTO** | Recovery Time Objective -- Service restoration time after an incident |
| **SDM** | Service Delivery Manager |
| **SLA** | Service Level Agreement -- Service Level Agreement |
| **SNC** | SecNumCloud |
| **SOC** | Security Operations Center |
| **TMA** | Third-Party Application Maintenance |
| **UO** | Work Unit |
| **VABE** | Validation of Suitability for Good Operability |
| **VABF** | Validation of Suitability for Proper Functioning |
| **VM** | Virtual Machine (virtual machine) |
| **VSR** | Regular Service Validation |

# Purpose of this Service Agreement

This Service Agreement establishes the terms and conditions under which the Provider undertakes to deliver the Service to the CLIENT. Its purpose is to:

- Specify the performance requirements expected by the CLIENT in terms of functionality and reliability of the Service;

- Outline the Provider’s obligations to meet the agreed-upon service levels;

- Identify the regulatory standards specifically applicable to the delivered Service;

- Ensure consistency and integrity in the evaluation of Service quality;

- Guarantee the excellence of the services provided, assessed through quantitative performance indicators.

It is stipulated that, in the event the Provider loses its SecNumCloud qualification, the Contract may be terminated immediately and without penalty by the CLIENT. In such a case, the Provider undertakes to notify the CLIENT of this loss of qualification by sending an official notice via registered letter with acknowledgment of receipt.

It should be noted that any modification or adjustment to the SecNumCloud qualification shall not be interpreted as a revocation of the initial qualification.

# Audit

The Provider undertakes to allow the CLIENT, or any third-party auditor who is not a competitor of the Provider and who has been designated by the Provider, to access all documents necessary to verify full compliance with the obligations related to conformity with the provisions of Article 28 of the General Data Protection Regulation (GDPR), thereby facilitating the conduct of audits.

By accepting this Service Agreement, the CLIENT explicitly grants authorization to:

1. The National Agency for the Security of Information Systems (ANSSI), as well as the competent qualification body, to carry out verification of the Service and its information system's compliance with the SecNumCloud framework.
2. A qualified information systems security auditor, duly certified PASSI and expressly designated by the Provider, to perform security audits concerning the Service.

# Service Description

## Shared Responsibility Model

The Service provided by the Provider is characterized by the delivery of the following offerings, which align with the shared responsibility principle outlined in the SecNumCloud reference framework:

- Provision of computing (compute) resources;

- Provision of storage spaces;

- Access to networking and internet connectivity services;

- A dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the CLIENT within the scope of the Service is detailed in §7.1.

It is understood that the Provider will leverage its expertise to deliver the Services in accordance with professional best practices and in compliance with the requirements of the SecNumCloud reference framework.

## Detailed Scope of the Service

| Service | Description |
| :--- | :--- |
| **Compute** | Computing resource of the CLIENT Tenant |
| **Storage** | Production data of the CLIENT Tenant |
| **S3 Object Storage** | Provisioning of a sovereign, multi-AZ object storage infrastructure compatible with standard S3 APIs. |
| **Backup** | Subject to subscription to appropriate mass-storage |
| **Network Infrastructure** | Networking resources of the CLIENT Tenant |
| **CLIENT Console** | The service enabling the CLIENT to access and manage its IaaS service via the Console interface |
| **Support** | The support service accompanying the aforementioned services and only those (\*) |

\_(\*) Within the scope of the qualified SNC service and the Provider’s responsibilities in this regard\_

### Datacenter Infrastructures

The Service encompasses the provision, for each Availability Zone, of the following qualified offerings:

- A datacenter site located in France for the FR Region, compliant with the latest technological standards, offering a resilience level equivalent to or higher than Tier 3 as defined by the Uptime Institute;
- Provision of technical rooms within dedicated datacenters for housing essential technical equipment required for service production, including computing, storage, networking, cabling, and other necessary components;
- Secure electrical power supply, delivered via two independent power circuits, ensuring uninterrupted service continuity;
- Provision of climate control services, calibrated to meet equipment manufacturers’ standards and recommendations, to maintain an optimal environment for technical devices;
- Continuous monitoring and detailed metrology, enabling precise tracking and proactive management of service performance and security.

The Provider ensures the availability of advanced fire detection and suppression services, designed to effectively identify and neutralize any fire outbreak within the facilities. These systems are essential for safeguarding equipment and data. They include high-precision smoke detectors and suppression devices capable of rapid response without damaging IT equipment. This service is critical to prevent fire risks, minimize potential damage, and ensure operational continuity.

The CONTRACTOR is informed that all implemented security procedures and measures—including annual backup tests on diesel generators—are essential to ensure the continuity and integrity of the provided services. These practices are designed to minimize failure risks and ensure optimal responsiveness in the event of an incident. By accepting these conditions, the CONTRACTOR acknowledges the importance of these measures and commits to full cooperation to facilitate their implementation. The CONTRACTOR is also encouraged to review the provided security recommendations and integrate them into its own risk management strategy.

### Software Infrastructure for Service Management

The Provider supplies the COMMANDITAIRE with the administration console and the API necessary for using the Service. The Provider further undertakes to maintain this administration console and API in optimal operational condition and to continuously ensure their security. The administration console and API are collectively referred to under the term "COMMANDITAIRE interface."

The Provider alerts the COMMANDITAIRE that abnormal use of the COMMANDITAIRE interface—particularly API command overload (hammering)—may trigger automatic security measures resulting in the blocking of access to the command APIs or the Service. It should be emphasized that this situation does not constitute Service unavailability but rather a protective action taken to safeguard the Service and the Provider’s infrastructure; therefore, the COMMANDITAIRE may not consider it as unavailability for its calculations.

Furthermore, the Provider informs the COMMANDITAIRE that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the COMMANDITAIRE submits identical requests at a higher frequency, their rejection cannot be interpreted as Service unavailability.

### Computing Infrastructure

The Service includes the provision, within the availability zones subscribed by the CUSTOMER, of the equipment necessary to run workloads in the form of virtual machines.

This includes:

- Provision of the required technical chassis for the proper operation of compute blades;
- Provision of compute blades in the quantities specified by the CUSTOMER and distributed across availability zones of the CUSTOMER’s choice. It should be noted that these compute blades are exclusively dedicated to the CUSTOMER;
- Provision of operating system software in the form of hypervisors, along with the guarantee of maintaining the operational and security status of the underlying software infrastructure required to manage these operating systems. It should be emphasized that, although the Provider is responsible for the operational maintenance and overall security of the Service, it does not possess specific knowledge regarding the CUSTOMER’s production environments or the requirements related to their workloads. Consequently, the responsibility for deciding when to update the operating systems of the hypervisor compute blades— an action that may require a reboot— rests entirely with the CUSTOMER. This operation may be performed via the CUSTOMER Interface.

The selection of the compute blade model, chosen from the catalog offered by the Provider, is the responsibility of the CUSTOMER.

### Storage Infrastructure

The service includes providing the CONTRACTOR with a shared Storage Area Network (SAN) infrastructure offering various performance levels. This service encompasses:

- Implementation and ongoing operation and security maintenance of the dedicated SAN network;
- Installation and management of shared storage enclosures used by multiple clients, including their operational and security maintenance, monitoring, and metering;
- Deployment of automated systems for allocating dedicated storage LUNs (Logical Unit Numbers) to the CONTRACTOR, in accordance with the volumes subscribed by the CONTRACTOR.

### Global Network Infrastructure

The Provider deploys, as part of the Service, a global network enabling the CLIENT to access its hosted systems. This service includes:

- Provisioning, ongoing operational maintenance, and security assurance of all fiber-optic interconnections linking the various Availability Zones;

- Provisioning, ongoing operational maintenance, and security assurance of the technical equipment necessary for proper network operation and isolation of the different clients.

The Tenant CLIENT's network interconnection with the Internet or private networks, along with the associated network equipment, operator links, and other technical components enabling this interconnection, are not included within the scope of the Service. This network interconnection is implemented in accordance with the provisions set forth in the Contract.

### Backup Infrastructure

The Provider makes available to the CLIENT an integrated, dedicated, and managed backup service designed to protect its virtual machines. The Provider ensures the operational readiness and security of this backup service. The Provider guarantees that the CLIENT's backups will be stored outside the availability zone of the workloads being backed up, provided the CLIENT has subscribed to the appropriate Work Units.

This backup service is limited to backing up virtual machines and the topology configurations of the IaaS environment of the CLIENT's Tenants within the scope of the Service. The development and implementation of an adequate backup policy by the CLIENT depend on the subscription to specific Work Units. Therefore, it is the CLIENT's responsibility to ensure the availability of the necessary technical resources with the Provider to implement its backup policy or adjust it according to the available means.

The Provider undertakes to notify the CLIENT in case of capacity constraints and to provide advisory assistance for resource optimization. The Provider's obligations are limited to implementing the backup policy requirements expressed by the CLIENT, within the scope of the subscribed resources.

### Implementation of Business Continuity or Disaster Recovery Solutions

The Provider supplies the CONTRACTOR with all necessary technical solutions to ensure optimal distribution of its resources across multiple Availability Zones. It is the CONTRACTOR's responsibility to effectively manage this resource distribution, for which it has access to the Provider's tools available for this purpose.

## Limitations of Services in the Qualified IaaS Model

### Managed Services in RUN

It is important to note that the following are excluded from the Service:

- Hosting of physical components of the CUSTOMER;

- Network interconnection of the CUSTOMER's Tenant, to the Internet or private networks, including operator links;

- Any managed service or TMA (Third-Party Managed Application);

- Any support related to virtual machines at the OS level and above in the IaaS responsibility stack, even if it involves only monitoring.

That said, the CUSTOMER is in no way precluded from using such services through the Provider’s MSP offering to perform managed services on its Tenants. These services will then not be governed by the present Service Agreement or its bilateral commitments/clauses.

### Disaster Recovery Configuration

By default, the Provider sets up the IaaS resources for the Client by reserving resources and configuring deployments to use Availability Zones. It is the Client's responsibility to select the Availability Zones via the Client interface.

### Backup Configuration

The backup service ends with the backup of virtual machines and topology configurations representing the IaaS environment of the COMMANDITAIRE's Tenants within the scope of the Service.

The backup service and the completion of the COMMANDITAIRE's backup policy are subject to the subscription of storage space on the required mass storage to ensure service delivery. It is therefore the responsibility of the COMMANDITAIRE to subscribe to the necessary technical resources from the Provider to implement the backup policy within its IT environment, or to adjust the backup policy according to the resources available. The Provider undertakes to inform the COMMANDITAIRE in case of technical capacity limitations.

The Provider will implement the necessary technical and human resources to back up the hosted system, within the limits of the resources subscribed by the COMMANDITAIRE.

Furthermore, for environments not covered by the Provider, it is the responsibility of the COMMANDITAIRE to define its own backup strategy and to configure VM backups independently, or to submit a Service Request to the Provider so that the backup configuration for physical servers can be set up, provided the COMMANDITAIRE has a managed service contract enabling the Provider to act via the COMMANDITAIRE's interface—the administration console made available under this Service Agreement—which includes functionalities for configuring backups.

Additionally, this service will only commit to translating, via the COMMANDITAIRE interface, the configuration clearly specified by the COMMANDITAIRE.

For reasons of offer flexibility, the COMMANDITAIRE has the option to associate a "no backup" policy with certain of its VMs. In such cases, it is the responsibility of the COMMANDITAIRE to assume this choice. The Provider will not back up VMs associated with the "no backup" policy. The Provider alerts the COMMANDITAIRE that choosing the "no backup" policy or opting for manual backups exposes the COMMANDITAIRE to the risk of permanent data loss in the event of an incident on lower layers or on layers dependent on the COMMANDITAIRE's responsibility under the IaaS model. In such cases, it will be impossible to hold the Provider responsible for data restoration, as there will be nothing to restore. The Provider recommends always backing up VMs.

For any matter concerning the OS installed on a virtual machine, or any software or program running "on top of the OS," it is the responsibility of the COMMANDITAIRE to perform administrative and monitoring operations within the European Union if it wishes to ensure that all layers of the IT environment are operated and managed from within the European Union. Administrative operations conducted outside the Provider's responsibility perimeter under this Service Agreement, as specified in the section "Shared Responsibility Model" of this Service Agreement.

## Implementation of the Service

### Technical Prerequisites

For the implementation of the Service, the CLIENT acknowledges that it will need to:

- Operate with VMware-type virtualization in versions supported by the vendor and provided by the Provider as part of the Service;

- Use the backup tool via the Provider;

- Declare fixed IP addresses from which the Provider will authorize access to the CLIENT interface (whitelist filtering). Any modifications to this IP list must be carried out via the dedicated menu in the console or through Service Requests for subsequent changes. At service initialization, the Provider shall have been informed of at least one IP address as described above.

## Service Location in France

It is specified that none of the operations or physical components involved in the provision of the Service, the subject of this Service Agreement, are located outside the European Union.

This specifically includes support, operational monitoring, and security monitoring (SOC) of the technical infrastructure delivering the Service. As a result, all storage, administrative tasks, monitoring, and processing are carried out in France.

### Datacenter Locations Hosting the Service

Unless otherwise specified by the Provider's employees and agencies, all production operations (including data storage and processing) and technical components delivering the Service are located in datacenters based in France.

### Location of Cloud Temple agencies operating the service

Cloud Temple staff members providing services within the scope of the Service operate from Cloud Temple agencies, all of which are exclusively located in France. These agencies are situated in France, in Tours, Lyon, Caen, and Paris La Défense.

The CLIENT is informed of the possibility for Cloud Temple employees to work remotely. However, the PROVIDER guarantees the same level of security regarding remote access, particularly concerning VPN access. Remote access is implemented in compliance with the requirements of the SecNumCloud reference framework.

## Support

### Nature of the support accompanying the service

The Provider delivers a technical support service aimed at assisting the **CLIENT** in managing, troubleshooting, and optimizing their deployed resources. This service encompasses a broad range of activities, from initial setup assistance to advanced technical support for resolving specific issues.

Below is a description of the characteristics and features of the support service:

- Initial implementation assistance for using the Service;
- Incident resolution support;
- Problem troubleshooting assistance;
- Monitoring and guidance on technical infrastructure optimization.

Within the scope of the support service, the Provider does not replace the **CLIENT** in the use of the Service. The **CLIENT** remains fully responsible for the configuration, operation of its VMs and Tenants, and management of all elements (including data and applications) it has stored or installed on the Provider’s infrastructure. Technical support is provided in accordance with the General Terms of Sale and Use, with the Provider bound by a duty of means.

The **CLIENT** undertakes to use the technical support service reasonably, refraining in particular from requesting services not subscribed to with the Provider, or from involving the Provider’s teams on behalf of its own clients or third parties not included in the Contract. The Provider reserves the right to reject any service request that does not meet these criteria.

The level of support engagement is conditional upon the subscription of corresponding support work units.

### Technical Support Request

Technical support is accessible through a ticketing system via the COMMANDITAIRE console and is available during standard business hours, excluding public holidays (8:00 – 18:00; Monday to Friday; French calendar and time zone). For emergencies occurring outside of business hours, particularly incidents significantly impacting production, the on-call service can be reached via a number provided to the COMMANDITAIRE at Service initiation.

For each request or incident, it is mandatory to create a ticket with the Provider’s support team. Initiating this ticket, including all necessary information, is essential and marks the beginning of the evaluation of the Provider’s commitments.

As soon as the Provider receives a request or incident notification—whether through the management console or following a phone call—a ticket is automatically generated. When reporting an incident, it is critical that the COMMANDITAIRE provides the Provider with as much detail as possible regarding the issue encountered. This step is crucial to enable an accurate assessment of the situation, proper prioritization, and effective diagnosis.

The COMMANDITAIRE then receives an email confirmation indicating the ticket creation and its unique ticket number. The COMMANDITAIRE can check the status and history of their requests and incident reports directly from the management console.

### Incident Management Process

Upon reporting an Incident, the Provider’s technical support team initiates an investigation to identify the root cause of the issue and establish a diagnosis. The CLIENT must actively collaborate with the Provider by providing all necessary information and performing required tests. The Provider may access the CLIENT’s Service to diagnose the Incident.

If the Provider’s Services are deemed functional and the Incident is not attributable to the Provider, the CLIENT will be notified. At the CLIENT’s request, the Provider may offer Professional Services to identify the source of the problem, billable upon prior agreement in 30-minute increments.

In the event that the Incident is the responsibility of the Provider or one of its subcontractors, the Provider will complete the diagnosis and proceed with restoring the Service at no additional cost. The diagnosis is based on communications between the Parties and data provided by the Provider, which are considered conclusive by mutual agreement of the Parties.

### Treatment Prioritization Process

The determination of a ticket's priority level is based on a matrix analysis evaluating the impact of the Incident and its degree of criticality:

- Impact levels are defined as follows:

| Impact Level | Description |
| :--- | :--- |
| **Impact I1** | The Provider's service(s) are disrupted |
| **Impact I2** | The Provider's service(s) are degraded |
| **Impact I3** | The Provider's service(s) are currently stable, but show signs of potential long-term decline |

- Criticality levels are defined as follows:

| Criticality Level | Description |
| :--- | :--- |
| **Criticality C1** | The Provider's service(s) are degrading at a concerning rate |
| **Criticality C2** | The Provider's service(s) are progressively deteriorating over time |
| **Criticality C3** | The Provider's service(s) present one or more minor inconveniences without significant consequences |

- Based on a thorough assessment of the situation, taking into account the factors determining Impact and Criticality, a priority is assigned to the ticket according to the decision matrix below:

| Impact Level / Criticality Level | Impact I1 | Impact I2 | Impact I3 |
| :--- | :--- | :--- | :--- |
| **Criticality C1** | Priority **P1** | Priority **P2** | Priority **P3** |
| **Criticality C2** | Priority **P2** | Priority **P3** | Priority **P4** |
| **Criticality C3** | Priority **P3** | Priority **P4** | Priority **P5** |

Service level commitments corresponding to each priority level are detailed in the following chapter.

### Language and Location of Support Service

Support is provided by the Provider to the CUSTOMER in French as a minimum. Support may also be provided in English.

The Provider's support service operations for the SecNumCloud qualified infrastructure service offering are located within the European Union.

# Service Level Agreements and Commitments

The Provider undertakes to ensure continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, ensuring optimal operation.

Service unavailability, as defined by a performance indicator, is acknowledged as soon as it is detected by the Provider’s monitoring system, or following a notification from a user of the CLIENT. The start of unavailability is set at the earliest of these two events, ensuring accurate and fair calculation of the downtime duration.

The end of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider’s monitoring tools or by user feedback, thereby ensuring an effective resumption of operations and a precise measurement of the interruption duration.

## Infrastructure Availability Commitments

The Provider commits to maintaining an availability and performance level compliant with the standards defined for each specified period. Service Level Agreements (SLAs) apply only if the CLIENT implements its systems across at least two of the Availability Zones available within the relevant Region.

In the event that the CLIENT fails to meet these conditions, the CLIENT will be unable to claim the application of the corresponding SLAs, which are specifically identified by an asterisk (\*). SLA accessibility is provided through the CLIENT interface. Measurements are calculated on a monthly basis:

- \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Compute Power Availability: Guaranteed availability rate of 99.99%, calculated on a 24/7, 7-day basis.
- \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Storage Availability: Guaranteed availability rate of 99.99%, calculated on a 24/7, 7-day basis.
- **SLA 3 : IC-INFRA_SNC-03** -- Backup Reliability: Guaranteed availability rate of 99.99%, calculated on a 24/7, 7-day basis.
- \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Network Infrastructure Availability: Guaranteed availability rate of 99.99%, calculated on a 24/7, 7-day basis.
- **SLA 5 : IC-INFRA_SNC-05** -- Internet Access: Guaranteed availability rate of 99.99%, calculated on a 24/7, 7-day basis.

***Notes***:

- *In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact of the attack and protect its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may employ blackholing via the BGP community to block all traffic destined for the targeted IP address upstream with its providers, with the aim of safeguarding the CLIENT’s resources as well as those of other CLIENTs and the Provider’s infrastructure. The Provider strongly encourages the CLIENT to adopt similar protective measures, such as using commercially available Web Application Firewalls, and to carefully configure its security groups via the command API.*

- *The Provider emphasizes the importance for the CLIENT to minimize open traffic flows, particularly by avoiding exposing administrative ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) to the entire Internet (0.0.0.0/0 subnet), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## Service Level Agreement for the COMMANDITAIRE Interface Availability

- SLA 6: IC-INFRA_SNC-06 -- Access to the Service administration console: a guaranteed availability of 97%, ensured continuously, 24 hours per day, 7 days per week.
- SLA 7: IC-INFRA_SNC-07 -- Access to the Service control APIs: a 99.9% availability, calculated on a 24/7 basis.

## Support Availability Commitment

- **SLA 8: IC-INFRA_SNC-08** -- Performance commitments of the Provider's technical support for incidents, excluding scheduled maintenance:

| Priority | Response Time Guarantee (RTG) | Performance Target |
| :--- | :--- | :--- |
| **Priority P1** | 30 min | 95% |
| **Priority P2** | 2 h | 90% |
| **Priority P3** | 4 h | 90% |
| **Priority P4** | 24 h | 85% |
| **Priority P5** | 48 h | 85% |

- **SLA 9: IC-INFRA_SNC-09** -- Performance commitments of the Provider's technical support for service requests:

| Type | Response Time Guarantee (RTG) | Performance Target |
| :--- | :--- | :--- |
| **Service Request** | 4 h | 90% |

*Note*:

- *The Response Time Guarantee (RTG) period is calculated from the difference between the time the CLIENT opens the ticket and the first intervention by the Provider's support team.*
- *Investigation of incidents involving the CLIENTs will not include remote interventions on servers hosted by the CLIENT. Support will be limited to explaining available metrics related to the CLIENT's environment, to assist in understanding incidents or performance issues. Based on the analysis results, recommendations may be provided.*

## S3 Object Storage Availability Commitment

- **SLA 10: IC-INFRA_SNC-10** -- The availability commitments for S3 Object Storage are as follows:

| Indicator | Commitment | Availability Target |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Object storage durability within a region | 99.9999999% / year |
| **IC-INFRA-SNC-10.2** | S3 Object Storage API availability | 99.99% |
| **IC-INFRA-SNC-10.3** | Maximum latency for accessing an object within a region | 150 ms |

Notes:

- The Object Storage Service is specifically designed for object storage and must be used exclusively for this purpose, **strictly excluding any use in block mode**. Using block mode through indirect methods, such as employing *"FUSE"* in a Linux environment, constitutes a violation of the terms of use. No incident, malfunction, or damage resulting from such non-compliant usage will be covered by the Service Level Agreements (SLAs) defined in this service agreement.
- The durability guarantee is conditional upon compliant use of the services in accordance with current best practices and standards, and explicitly excludes any data modification—whether intentional or accidental—arising from actions taken by the **CLIENT**.

## Clarification Regarding Backup Commitment

The backup strategy deployed for the CLIENT is contingent upon the subscription to appropriate work units.

The Provider commits to providing a backup solution enabling the CLIENT to implement desired backup policies.

It is specified that the Provider's scope ends with the provision of a backup service, and it is the CLIENT's responsibility to monitor, via the CLIENT's interface, the proper execution of associated backup policies.

It is further specified that management of storage capacity for the dedicated backup storage space remains the sole responsibility of the CLIENT. The Provider will make the utilization rate available via the console.

*Example: Failure to back up a virtual machine:*

*The CLIENT is responsible for verifying and monitoring the correct execution of backup policies. If the CLIENT detects that a virtual machine is not being backed up, it is their responsibility to investigate the cause. The CLIENT may contact the Provider's Support team, according to the support level subscribed, for assistance.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9** will apply exclusively in the event of a backup service incident.

# Contractual Relationship Organization

## Provider Responsibilities

The Provider undertakes to:

- Inform its CLIENT adequately (e.g., in case of limitations in technical resource capacity delivering the Service).

- Notify the CLIENT formally and within one month of any legal, organizational, or technical change that may impact the Service’s compliance with requirements for protection against non-EU laws (Section 19.6 of the SNC v3.2 reference framework).

- Provide the CLIENT with interfaces and service interfaces in French at a minimum.

- Take into account sector-specific requirements related to the types of information entrusted by the CLIENT in the context of the Service implementation, within the limits of the Provider’s responsibilities on one hand, and the provisions set forth in the Contract on the other.

- Review sector-specific requirements related to the types of information entrusted by the CLIENT in the context of the Service implementation, as subsequently communicated by the CLIENT, and inform the CLIENT of the necessary actions required to address them.

- Not disclose any information relating to the service to third parties, except with the CLIENT’s formal and written authorization.

- Make available all necessary information to enable compliance audits in accordance with the provisions of Article 28 of the GDPR.

- Report to the CLIENT, through this Service Agreement, any security incident impacting the Service or the CLIENT’s use of the Service (including the CLIENT’s data).

- Allow a qualified Information Systems Security Audit Provider (PASSI), appointed by the Provider, to audit the service and its information system, in accordance with the Provider’s SecNumCloud control plan. Furthermore, the Provider undertakes to provide all necessary information to carry out compliance audits under Article 28 of the GDPR, conducted by the CLIENT or a third party appointed by the CLIENT.

- Provide assistance and advice as a subprocessor, in accordance with Article 28 of the General Data Protection Regulation (GDPR), alerting the CLIENT immediately when an instruction issued by the CLIENT may constitute a breach of data protection rules.

- Notify the CLIENT within a reasonable timeframe, via the CLIENT’s console or by email to the designated CLIENT contact, when a project impacts or is likely to impact the security level or availability of the Service, or results in functionality loss, potential impacts, mitigation measures implemented, and residual risks involved.

- Document and implement all procedures necessary to comply with applicable legal, regulatory, and contractual requirements for the service, as well as the specific security needs of the CLIENT, as defined by the CLIENT and specified in the Contract.

- Not use the CLIENT’s production data for testing purposes, except with the CLIENT’s prior explicit authorization. In such cases, the Provider undertakes to anonymize these data and ensure their confidentiality during the anonymization process.

- Delete the CLIENT’s data and technical data, in accordance with the “Contract End Data Erasure Procedure” described in this Service Agreement, upon termination or cancellation of the Contract.

- Ensure secure deletion of all the CLIENT’s data by fully overwriting all storage media that have hosted the CLIENT’s data within the scope of the Service.

Upon formal and written request by the CLIENT, the Provider undertakes to:

1. Make available to the CLIENT the Provider’s internal regulations and code of ethics;

2. Make available to the CLIENT the sanctions applicable in case of violation of the security policy;

3. Provide the CLIENT with all events concerning it within the Service’s logging elements; the CLIENT may also independently review events related to its use of the Service via the Service’s web interfaces and APIs;

4. Make available to the CLIENT the procedures necessary to comply with applicable legal, regulatory, and contractual requirements for the Service, as well as the specific security needs of the CLIENT as defined in the Contract;

5. Provide the CLIENT with risk assessment elements related to the submission of the CLIENT’s data to the jurisdiction of a non-EU country;

6. Inform the CLIENT of any subsequent subcontractors involved in the delivery of the Service, and notify the CLIENT of any changes affecting these subcontractors.

> The Provider and all its subsidiaries commit to respecting the fundamental values of the European Union, namely human dignity, freedom, democracy, equality, the rule of law, and respect for human rights. The service provided by the Provider complies with current legislation regarding fundamental rights and the EU’s values concerning human dignity, freedom, equality, democracy, and the rule of law.

## Limitation of Provider's Liability

Due to the definitions and conditions outlined in this Service Agreement, the Provider's liabilities are limited as follows:

1. The shared responsibility model, described in the section "Shared Responsibility Model" of this Service Agreement, effectively limits the Provider's involvement in operational layers "above" the provision of computing, networking, storage, and backup resources. This specifically excludes, without limitation:

    - Management of what is installed on virtual machines (OS, middleware, applications, etc.);
    
    - Maintenance and updating of the OS and other software installed by the CLIENT on its machines within its Tenants;
    
    - Security of programs, software, and applications installed on virtual machines;
    
    - Updating of virtual machines;
    
    - Application-level data backup.

2. The Provider cannot commit to backing up the CLIENT's Tenants without prior subscription by the CLIENT to the appropriate work units.

3. The Provider cannot claim ownership of data transmitted or generated by the CLIENT. Such data remain the exclusive property of the CLIENT.

4. The Provider emphasizes that it may in no case exploit and/or use the data transmitted or generated by the CLIENT without prior explicit approval from the CLIENT, with the understanding that such data usage is reserved exclusively for the CLIENT.

5. The Provider disclaims all liability for components physically hosted and managed by the Provider, but which are directly owned by the CLIENT or by a third party with whom the CLIENT has contracted. Hosting of physical components belonging to clients is not part of the Service and is therefore outside the scope of this Service Agreement. It is the CLIENT's responsibility to assess the level of compliance or dependency introduced by these components with respect to the qualified IaaS Service SecNumCloud.

## Access Restrictions

Within the scope of the Service, the Provider is explicitly prohibited from accessing Tenants belonging to the CLIENT without prior authorization. It is the CLIENT’s responsibility to provide necessary access to the Provider’s personnel, according to the specific requirements of the hosting and, where applicable, professional support services, if such an option has been selected by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for the purposes related to the provision of the agreed services, thereby ensuring secure and compliant management in accordance with the terms of the agreement.

Remote access by third parties involved in the Provider’s service delivery is strictly prohibited. In the event that a specific technical requirement necessitates such access, it may only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining the CLIENT’s written consent.

This measure ensures control and security of the CLIENT’s data, by guaranteeing that any exception to the rule is duly authorized and properly documented.

## Responsibilities of Third Parties Participating in the Provision of the Secure Temple Service

The Provider maintains a list of third-party partners involved in the provision of the Service. These third parties include software vendors, service providers (of the Provider), and other suppliers participating in the delivery of the Service. The Provider implements the following measures with respect to these third parties:

- The Provider requires that all third parties involved in the implementation of the Service maintain a security level at least equivalent to the one the Provider commits to maintaining in its own security policy applicable to the Secure Temple Service;

- The Provider contracts with each third party involved in the implementation of the Service specific audit clauses enabling a qualified body to verify that these third parties comply with legal requirements and SNC requirements, thereby allowing the Provider to fulfill its obligations under this Service Agreement;

- The Provider implements a procedure to regularly monitor the measures implemented by third parties involved in the service implementation to ensure compliance with the Provider’s requirements for fulfilling its obligations under this Service Agreement;

- The Provider conducts ongoing monitoring of changes made by third parties involved in the service implementation that could affect the security level of the Service’s information system.

## Responsibilities and Obligations of the CLIENT

The CLIENT has the following obligations in the context of the Service:

- For information, the Provider delivers to the CLIENT a virtual machine execution platform; the configuration of these virtual machines is the responsibility of the CLIENT. Each virtual machine cannot operate without an associated backup policy. The Provider defines automatic backup policies via its interfaces. However, it is the CLIENT's responsibility to activate these backup policies and thus to activate the virtual machines.

- The CLIENT authorizes ANSSI and the SNC qualification body to audit the Service and the technical infrastructure delivering the Service.

- The CLIENT is responsible for informing the Provider of any specific sectoral requirements related to the types of information entrusted by the CLIENT and which need to be taken into account by the Provider.

- The CLIENT agrees not to request from the Provider any requirements or actions that would deviate the Provider from the current version of the SecNumCloud reference framework, or that would lower the security level established by compliance with the requirements of this same reference framework.

## Rights of the CONTRACTOR

At any time during the contractual relationship, the CONTRACTOR may file a complaint regarding the qualified service with ANSSI.

At any time, the CONTRACTOR may request the Provider to make its internal regulations and code of ethics accessible.

## Data Deletion at Contract End

Upon termination of the contract, whether by expiry or for any other reason, the Provider undertakes to securely erase all data belonging to the CLIENT, including technical data. The Provider will ensure to issue a formal notice to the CLIENT, respecting a notice period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To confirm this deletion, the Provider will provide the CLIENT with a certificate verifying the erasure of the data.

# Lifecycle of the Present Service Agreement

## Effective Date of the Service Agreement

This Service Agreement becomes effective on the date of its signature by the CLIENT.

The collection, handling, storage, and processing of data carried out within the scope of pre-sales, implementation, and termination of the Service are conducted in compliance with applicable legislation.

## Service Agreement Updates

Any modifications or additions to this Service Agreement shall result exclusively from requests submitted by the designated governance bodies. These proposed changes will be reviewed by the Parties, who are authorized to determine which aspects require formal written documentation.

It is agreed that any update to the Service Agreement, following validation, which alters the initially established financial terms, will require the preparation and signing of an amendment to the current Contract.

Factors that may trigger a revision of this Service Agreement include, but are not limited to:

- Evolution of the technical infrastructure delivering the IaaS Service;
- Adjustments made by the Provider to the services deployed to deliver the Service;
- Changes in commitments and applicable penalties;
- Organizational reconfigurations within either the COMMANDITAIRE or the Provider;
- Expansion or reduction of the Service's scope of application.

Version and revision management of the Service Agreement is documented in the preamble of the document to facilitate tracking.

### Evolutions triggered by the CLIENT

The changes to the Service Agreement may, in particular, originate from:

- An evolution of the infrastructure managed by the Provider;

- A modification of the services implemented by the Provider;

- A change in the service level commitments by the Provider.

### Changes initiated by the Provider

Any modification to the Service Agreement is subject to acceptance by the **CLIENT**. It is understood that any validated modification or addition altering the financial terms of the Contract may require the signing of an amendment thereto.

## Reversibility

Furthermore, Cloud Temple undertakes to allow the revision of this Service Agreement (including its termination) without penalty for the CLIENT in the event of loss of SecNumCloud qualification.

The Services do not include a reversibility obligation (i.e., assistance to the CLIENT to enable migration of its system to another "Provider"), except for the provision by the Provider to the CLIENT of the CLIENT interface, enabling the CLIENT to back up and retrieve its data—including configuration data of its information system—through one of the following technical options, at the CLIENT’s discretion:  
- The delivery of files in one or more documented and usable formats outside the service provided by the Provider; or  
- The implementation of technical interfaces enabling access to data according to a documented and usable schema (API).

The CLIENT, as sole owner of its system, must take all necessary measures to facilitate this operation as required (including, notably, the development of thorough documentation and the creation of reversibility plans). In the event the CLIENT requires additional support, the Provider may offer a consulting engagement on this matter under a separate contract to be negotiated.

# Service Availability, Continuity, and Restoration

## Incident and Outage Management

### Incidents

#### Types of Incidents Covered under this Service Agreement

- Incidents;

- Failures and outages;

- Security incidents affecting the availability, confidentiality, or integrity of the Service.

#### Incident Management

> The Provider shall inform the CLIENT as soon as possible of any incidents or outages, through a notification in the CLIENT's console or by email to the designated CLIENT contact. The Provider shall inform the CLIENT of the incident resolution via the same channel used to report the incident, or via the channel specified in the incident notification.

#### Security Incident Notification Level

The CONTRACTOR is responsible for selecting the severity levels of security incidents for which it wishes to be notified, for example by formalizing them in an applicable SLA for the Service.

By default, the CONTRACTOR is notified of:

- Security incidents with impact (impact levels I1 and I2 according to the impact scale defined in the prioritization process for handling incidents in this Service Agreement);

- Security incidents affecting the confidentiality or integrity of the CONTRACTOR’s data entrusted within the scope of the Service;

- Personal data breaches for which the CONTRACTOR is responsible for processing in accordance with Article 8 of Annex DPA under the scope of the Service;

## Service Maintenance

### Nature of Maintenance

Data breaches involving personal data for which the Provider is responsible for processing, and which include personal data of the CLIENT, in accordance with Article 8 of Annex DPA. The maintenance provided consists of:

- Implementation of the Service's operational continuity plan to ensure good availability indicators, as committed to by the Provider above;

- Implementation of the PCA/PRA plan, if subscribed to by the CLIENT, triggered according to any incidents that may occur.

### Remote Access to Cloud Temple within the COMMANDITAIRE's Scope

Under the terms of this Service Agreement, the Provider is prohibited from accessing the Tenants or the COMMANDITAIRE's interface environment.

It shall be the responsibility of the COMMANDITAIRE to grant the necessary access to the Provider's personnel. The COMMANDITAIRE acknowledges that such access will be used solely for hosting purposes and ultimately for managed services (if subscribed to by the COMMANDITAIRE).

### Remote access by third parties involved in service delivery within the COMMANDITAIRE's scope

No remote access by third parties involved in delivering the Service is permitted.

If a technical requirement made such access necessary, this type of access would only be granted after notifying the COMMANDITAIRE, providing justification, and obtaining their written approval.

# Data Deletion Procedure at Contract End

At the end of the Contract, whether due to expiration or for any other reason, the Provider shall ensure the secure deletion of all data processed under the Service, including the COMMANDITARY's technical data. The Provider shall provide formal notice with a minimum advance notice period of twenty-one (21) calendar days. The COMMANDITARY's data shall be deleted within a maximum of thirty (30) days following notification. The Provider shall issue a data deletion certificate to the COMMANDITARY.

# Applicable Law

## In general

The governing law and jurisdiction applicable to this Service Agreement is French law.

## Compliance with Applicable Laws and Regulations

The Provider undertakes the following:

- Identification of legal and regulatory requirements applicable within the scope of the Service;

- Compliance with applicable legal and regulatory requirements regarding data entrusted to the Provider, within the limits of the Provider’s responsibilities on one hand, and the provisions set forth in the Contract on the other hand;

- Compliance with the Data Protection Act (Loi informatique et liberté) and the GDPR;

- Implementation of measures to protect personal data;

- Establishment of a legal and regulatory monitoring process;

- Maintaining appropriate relationships or ongoing monitoring with sectoral authorities related to the nature of the data processed under the Service. This includes, in particular, ANSSI, CERT-FR, and CNIL.

## GDPR

Acting as a data processor under Article 28 of the General Data Protection Regulation (GDPR), the Provider undertakes:

- To ensure transparency and traceability;

- To appoint a Data Protection Officer (DPO) responsible for defining and implementing measures to protect personal data;

- To provide assistance and advice to the CLIENT and alert the CLIENT if an instruction from the CLIENT constitutes a breach of personal data protection rules, provided the Provider has the means to identify such a breach;

- To guarantee data security for the processed data (due to the SecNumCloud certification status).

## Protection Regarding Non-EU Law

The registered office of the Provider is located within a Member State of the European Union. The share capital and voting rights in the Provider’s company are not, directly or indirectly:

- held individually by more than 24%;

- and held collectively by more than 39%;

by third-party entities having their registered office, central administration, or principal establishment located within a country that is not a Member State of the European Union.

In the event that the Provider, in the course of providing the Service, relies on the services of a third-party company—including a subcontractor—whose registered office, central administration, or principal establishment is located within a country that is not a Member State of the European Union, or which is owned or controlled by a third-party company domiciled outside the European Union, the Provider undertakes:

- that such third-party company shall have no access to the data processed by the 'Secure Temple' service;

- to maintain operational autonomy through the ability to engage another subcontractor or to swiftly implement an alternative technological solution.

For the purposes of this article, the concept of control shall be understood as defined in paragraph II of Article L233-3 of the French Commercial Code.

# SIGNATURES

Signed at \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, on
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For Cloud Temple, the SERVICE PROVIDER

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the CLIENT