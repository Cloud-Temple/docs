---
title: SecNumCloud IaaS Service Agreement
---


# 1. IaaS SERVICE AGREEMENT

  -----------------------------------------------------------------------
  **Recipients:**            **CLIENT**
  ------------------------------ ----------------------------------------
  **Document Reference**     CT.AM.JUR.ANX CdS-IaaS -
                                 20251701_v3.0.docx_Jour JJ AAAA

  **Your contacts**         *First Name* *Last Name*

                                 Account Manager

                                 e-mail: *prenom.nom*\@cloud-temple.com

  **Last update date**      17/01/2025

**Contractual validation date**  Jour JJ AAAA
  -----------------------------------------------------------------------

------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Version**   **Date**     **Action**                           **Author**
  ------------- ------------ ------------------------------------ --------------
  v0.1          07/06/2022   Initial Draft                        Lorena ALCALDE

  v0.2          14/09/2022   Enrichment                           Lorena ALCALDE

  v1.0          30/12/2022   Integration of Indicators              Lorena ALCALDE

  v1.1          23/01/2023   Page footer modification             Lorena ALCALDE

  v1.2          22/05/2023   Enrichment                           Lorena ALCALDE

  v1.3          29/06/2023   Enrichment                           Lorena ALCALDE

  v1.4          06/11/2023   Capital modification and             Lorena ALCALDE
                             Enrichment

  v1.5          30/11/2023   Enrichment                           Lorena ALCALDE

  v1.6          21/03/2024   Enrichment                           Lorena ALCALDE

  v2.0          29/03/2024   Compliance adjustments SNC            Nicolas
                                                                  ABRIOUX

  v2.0          03/04/2024   Publication                          Lorena ALCALDE

  V3.0          17/01/2025   Enrichment                           Emeline CAZAUX
  ------------- ------------ ------------------------------------ --------------
  ------------------------------------------------------------------------------

------------------------------------------------------------------------

# 2. TABLE OF CONTENTS

- [1. **IaaS SERVICE AGREEMENT**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
- [2. **TABLE OF CONTENTS**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
- [3. Preliminary and Glossary](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
  - [3.1. Preliminary](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
  - [3.2. Glossary](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
- [4. Acronyms](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
- [5. Object of this Service Agreement](#X30e34f28e133265489633a87e3abd4d1a022de5)
- [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
- [7. Service Description](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
  - [7.1. Shared Responsibility Model](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
  - [7.2. Detailed Presentation of the Service Scope](#Xd81ad0562f6e00e693916802084624b2a4885a5)
    - [7.2.1. Datacenter Infrastructures](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
    - [7.2.2. Management Software Infrastructure of the Service](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
    - [7.2.3. Computing Infrastructures](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
    - [7.2.4. Storage Infrastructure](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
    - [7.2.5. Global Network Infrastructure](#X78b4484e386c95a988a698cd84bae342679ddb5)
    - [7.2.6. Backup Infrastructure](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
    - [7.2.7. Implementation of Business Continuity or Disaster Recovery Solutions](#X5610bffa77dd118e87cbee05f204158179c962f)
  - [7.3. Service Limitations in the Qualified IaaS Model](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
    - [7.3.1. RUN Managed Services](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
    - [7.3.2. Standby Configuration](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
    - [7.3.3. Backup Configuration](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
  - [7.4. Service Implementation](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
    - [7.4.1. Technical Requirements](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
  - [7.5. Service Location in France](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
    - [7.5.1. Location of Datacenters Hosting the Service](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
    - [7.5.2. Location of Cloud Temple Agencies Operating the Service](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
  - [7.6. Support](#X451baaab9b4764d97da95395b7e24265143a283)
    - [7.6.1. Nature of the Support Accompanying the Service](#X192381358bcad693baa22b16773742f4c8cf227)
    - [7.6.2. Requesting Technical Support Service](#X03ef425751011df1818d9488df5625576c33f5e)
    - [7.6.3. Incident Management Process](#Xac759d2aee6d685130dea876d7a1ed03888b994)
    - [7.6.4. Prioritization Process of Treatments](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
    - [7.6.5. Language and Location of the Support Service](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
- [8. Commitments and Service Levels](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
  - [8.1. Availability Commitments of the Infrastructure](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
  - [8.2. Availability Commitment of the CLIENT Interface](#X86570f48e6da9370f069232b4ae175183f2dafd)
  - [8.3. Availability Commitment of the Support](#Xfc8548982b300528a67725f1705f15805f405f0)
  - [8.4. Availability Commitment of the S3 Object Storage](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
  - [8.5. Clarification Regarding the Backup Commitment](#Xcc0ee164bf81418fd2280ceac4eb569bf7b97f7)
- [9. Organization of the Contractual Relationship](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
  - [9.1. Responsibilities of the Provider](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
  - [9.2. Limitation of the Provider's Responsibilities](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
  - [9.3. Access Limitation](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)
  - [9.4. Responsibilities of Third Parties Participating in the Provision of the Secure Temple Service](#Xc662a81cadd2baa300ca83a27240dec61621a56)
  - [9.5. Responsibilities and Obligations of the CLIENT](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
  - [9.6. Rights of the CLIENT](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
  - [9.7. Data Erasure at the End of the Contract](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
- [10. Lifecycle of this Service Agreement](#X89744c1f67247955b75e73d73aaa55899645415)
  - [10.1. Effective Date of the Service Agreement](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
  - [10.2. Evolution of the Service Agreement](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
    - [10.2.1. Evolutions Triggered by the CLIENT](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
    - [10.2.2. Evolutions Triggered by the Provider](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
  - [10.3. Reversibility](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
- [11. Service Availability, Continuity and Restoration](#X115fcc8f59c1201dae17a3d86136d153be01044)
  - [11.1. Incident and Interruption Management](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
    - [11.1.1. Incidents](#X648046c564ac1cd52bebb02b256b193a3da4d74)
      - [11.1.1.1. Types of Incidents Handled within this Service Agreement](#X09cc1e22db275b1a463f85596829f3f871ae224)
      - [11.1.1.2. Incident Handling](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
      - [11.1.1.3. Security Incident Notification Level](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
  - [11.2. Service Maintenance](#X8f50b0b400c67568e380ddb602ac786ec585905)
    - [11.2.1. Nature of the Maintenance](#X903d92edf16182242ecfd404337edbaf2243b81)
    - [11.2.2. Remote Access of Cloud Temple on the CLIENT's Perimeter](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
    - [11.2.3. Remote Access of Third Parties Participating in the Service Provision on the CLIENT's Perimeter](#X7ad951099cc984b8fc113222e52c4e27d11465f)
- [12. Data Erasure Procedure at Contract End](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
- [13. Applicable Law](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
  - [13.1. Generally](#X5ed94d170893fb4c04d7110c419f01198fda773)
  - [13.2. Compliance with Applicable Laws and Regulations](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
  - [13.3. GDPR](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
  - [13.4. Protection Regarding Extra-European Law](#X5171f5ee735df20bc2100671620eddd76dca12d)
- [14. SIGNATURES](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Preliminary and Glossary

## 3.1. Preliminary

This document formalizes the Service Agreement associated with the SecNumCloud qualified IaaS service under the name "Secure Temple".
The Service is qualified SecNumCloud (see the certificate in the Appendix).

This service agreement completes and is complementary to the Provider's general terms and conditions of sale and use. It is understood that the contractual documents are to be interpreted consistently with each other. In the event of a contradiction or divergence between the terms of the contractual documents, the documents shall prevail over each other in the following order:

1. General Terms and Conditions of Sale and Use (CGVU)

2. SecNumCloud IaaS Service Agreement

3. SecNumCloud OpenIaaS Service Agreement

4. SecNumCloud PaaS Service Agreement

5. Specific Service Agreement - Bare Metal

6. Specific Agreement

7. Security Assurance Plan (PAS)

8. Particular Terms of Use (CPU)

9. Data Protection Agreement

## 3.2. Glossary

In this Service Agreement, the **CLIENT**, the **Provider**, and the **Parties** are identified in the Contract to which this Service Agreement is annexed.

The expressions used in this Service Agreement shall be interpreted according to the definitions assigned below:

- **Change:** Any addition, modification or deletion impacting the Service, having been authorized, planned or supported.

- **Standard Change:** Change subject to a procedure, whose production modalities and impacts (including financial) are known and accepted in advance by the Parties. It is then included in the standard changes catalog, and may, depending on the case, have a GTI and a GTR.

- **Contract:** Refers to the contract subscribed by the CLIENT with the Provider to enable the CLIENT to benefit from the Service, to which this Service Agreement is annexed.

- **Service Agreement:** This document, established within the framework of a specific contract or the General Terms and Conditions of Sale and Use (CGVU), and in compliance with the requirements of the SecNumCloud Reference Framework.

- **Service Request:** Evolution request subject to a procedure, whose implementation: i) does not modify the CMDB, ii) the operating procedure, costs and risks are known and accepted in advance and do not require specific rollback modalities iii) the implementation is subject to a service level agreement and included in the contract fee when implemented during working hours and working days.

- **Availability:** Ability to ensure the availability and maintenance of optimal performance of the Service, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).

- **Technical Data**: Includes all data processed to deliver the Service, notably the identity of the beneficiaries and administrators of the technical infrastructure, technical infrastructure logs, access configurations, directory, certificates...

- **Event:** An "event" is any detectable or identifiable occurrence that may have importance for the management of the Service.

- **Hypervisor:** Operating system allowing the execution of virtual machines on a compute blade.

- **Incident:** Any unexpected event that disrupts the normal operation of the Service or compromises the security of the data.

- **Security Incident:** Any event within the scope of the Service:

  - Of intentionally malicious nature;
  - Of accidental nature causing damage to the integrity, confidentiality or traceability of the Service or the CLIENT's data;
  - Causing damage to existing security measures. Damage to Availability of non-malicious origin are not considered as Security Incidents (hardware failure, bug, malfunction, natural disaster...).

- **CLIENT Interface:** Administration interface of the Service made available to the CLIENT by the Provider, grouping a web administration console and an API.

- **Production Implementation:** Administration action(s) for the implementation of the Change when it is approved (the change, in the ITIL sense, relates only to change management and not to its implementation/realization).

- **Problem**: Cause of one or more recurring Incidents, cause of a potential Incident (risk situation) requiring analysis and resolution to prevent recurrence.

- **Region:** Refers to a geographically delimited set of cloud availability zones, providing network, compute and storage services to optimize latency, performance and local regulatory compliance.

- **Service:** Refers to the IaaS service qualified SecNumCloud « Secure Temple », delivered to the CLIENT by the Provider from technical infrastructures maintained by the Provider, as described in the « Description of the Service » section of this Service Agreement.

- **Secure Temple**: Refers to the IaaS service qualified SecNumCloud, offered by the company Cloud Temple, as defined in the certificate available on the ANSSI website and provided as an appendix to this Service Agreement.

- **Incident:** Refers to a serious event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected Party.

- **Monitoring:** Surveillance of an Information System or a Service, involving the collection of various data such as measurements and alarms. This activity is limited to observation and follow-up, without directly intervening on the elements being monitored, a prerogative that belongs to the Administration operations.

- **Tenant:** A separate instance reserved for a user or group of users, sharing a common infrastructure while maintaining the independence and security of data and applications.

- **Availability Zone (AZ):** A specific and isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through the geographical distribution of resources.

# 4. Acronyms

  -----------------------------------------------------------------------------
  **Acronym**   **Definition**
  -------------- --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Advisory Committee on Changes

  **CMDB**       Configuration Management Database -- Configuration Management Database

  **COPIL**      Steering Committee

  **COSTRAT**    Strategic Committee

  **COPROJ**     Project Committee

  **DB**         Database (database)

  **DPA**        Data Protection Agreement

  **DRP**        Disaster Recovery Plan (PRA) (Business Continuity Plan)

  **GTE**        Escalation Time Guarantee

  **GTI**        Intervention Time Guarantee

  **GTR**        Resolution Time Guarantee

  **ITIL**       Information Technology Infrastructure Library - Best practices for IT service management

  **IaaS**       Infrastructure as a Service

  **MCO**        Operational Readiness Maintenance

  **MOA**        Client (Project Owner)

  **MOE**        Contractor (Project Executor)

  **MSP**        Managed Services Provider

  **OS**         Operating system (operating system)

  **PAQ**        Quality Assurance Plan

  **PaaS**       Platform as a Service

  **PAS**        Security Assurance Plan

  **PASSI**      Information System Security Audit Provider

  **RFC**        Request For Change -- Change Request

  **RGPD**       General Data Protection Regulation (GDPR)

  **RPO**        Recovery Point Objective -- Data freshness in case of Incident

  **RTO**        Recovery Time Objective -- Service restoration time in case of Incident

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Service Level Agreement

  **SNC**        SecNumCloud

  **SOC**        Security Operations Center

  **TMA**        Application Third-Party Maintenance

  **UO**         Work Unit

  **VABE**       Validation of Good Usability

  **VABF**       Validation of Good Functioning

  **VM**         Virtual Machine (virtual machine)

**VSR**        Regular Service Validation
  -----------------------------------------------------------------------------

# 5. Object of this Service Agreement

This Service Agreement establishes the terms and conditions under which the Provider undertakes to deliver the Service to the CLIENT. Its purpose is to:

- Specify the performance requirements expected by the CLIENT in terms of functionality and reliability of the Service;

- State the Provider's obligations to meet the agreed service levels;

- Identify the applicable regulatory standards specifically for the delivered Service;

- Ensure uniformity and integrity in the evaluation of the Service quality;

- Guarantee the excellence of the services provided, evaluated through quantitative performance indicators.

It is stipulated that, in the event that the Provider were to find itself...
remove its SecNumCloud qualification, the Contract may be terminated at will, without incurring penalties, by the CLIENT. In such a case, the Provider undertakes to inform the CLIENT of this dequalification by sending an official notice via registered mail with acknowledgment of receipt.

It should be noted that a modification or adjustment of the SecNumCloud qualification will not be interpreted as a revocation of the initial qualification.

# 6. Audit

The Provider undertakes to allow the CLIENT, or any third-party non-competitor auditor designated by the Provider, to access all documents necessary to verify full compliance with the obligations related to compliance with the provisions of Article 28 of the General Data Protection Regulation (GDPR), facilitating the conduct of audits.

By accepting this Service Agreement, the CLIENT grants explicit authorization to:

1. The National Agency for Information System Security (ANSSI)
    as well as the competent qualification entity to undertake
    the verification of the Service and its information system
    compliance with the SecNumCloud framework.
2. A qualified information system security audit provider,
    duly PASSI-certified and explicitly designated by the Provider,
    to conduct security audits on the Service.

# 7. Service Description

## 7.1. Shared Responsibility Model

The Service offered by the Provider is characterized by the provision of the following services, which align with the shared responsibility principle presented in the SecNumCloud framework:

- Provision of computing resources (compute);
- Provision of storage spaces;
- Access to network and internet connectivity services;
- A dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the CLIENT within the scope of the Service is presented in §7.1.

It is understood that the Provider will leverage its expertise to deliver the Services according to best practices and in compliance with the requirements of the SecNumCloud framework.

## 7.2. Detailed Service Scope Presentation

  -----------------------------------------------------------------------------
  Compute          Tenant CLIENT's computing resource
  ---------------- ------------------------------------------------------------
  Storage          Tenant CLIENT's production data

  Object Storage   provision of an object storage infrastructure
  S3               multi-AZ sovereign and compatible with standard S3 APIs.

  Backup           Based on subscription to appropriate mass-storage

  Infrastructure   Tenant CLIENT's network resource
  network

  Console          The service allowing the CLIENT to access its
  CLIENT           IaaS service and manage it via the Shiva interface

Support          The support service accompanying the above services
                   and only those (\*)
  -----------------------------------------------------------------------------
  
\_(\*) Within the scope of the qualified SNC Service and the Provider's responsibilities in this regard\_

### 7.2.1. Datacenter Infrastructures

The Service includes the provision, for each Availability Zone, of the following qualified services:

- A datacenter site located in France for the FR region, compliant with the latest technological standards, offering a resilience level equivalent to or higher than Tier 3 of the Uptime Institute;
- Provision of technical rooms within dedicated datacenters for housing essential technical equipment for service production, including computing, storage, networking, cabling, and other necessary components;
- Secure electrical power supply through two distinct electrical circuits, ensuring service continuity;
- Provision of climate control services, adjusted to meet equipment manufacturers' standards and recommendations, to maintain an optimal environment for technical devices;
- Continuous monitoring and detailed metrology, enabling precise tracking and proactive management of service performance and security.

The Provider ensures the availability of advanced fire detection and suppression services, designed to identify and effectively neutralize any fire incidents within the facilities. These systems are essential to ensure equipment and data security. They include high-precision smoke detectors and suppression devices that can act quickly without damaging computer equipment. This service is crucial for preventing fire risks, minimizing potential damage, and ensuring operational continuity.

The CLIENT is informed that all implemented security procedures and measures, including annual backup generator load tests, are essential to ensure service continuity and integrity. These practices are designed to minimize failure risks and ensure optimal responsiveness in case of incidents. By accepting these conditions, the CLIENT acknowledges the importance of these measures and commits to fully cooperating to facilitate their implementation. The CLIENT is also encouraged to review the provided security recommendations and integrate them into its own risk management strategy.

### 7.2.2. Service Management Software Infrastructure

The Provider provides the CLIENT with the administration console and necessary API for using the Service. It commits to maintaining this administration console and API in optimal operational condition and ensuring continuous security. This administration console and API are collectively referred to as the "CLIENT Interface."

The Provider alerts the CLIENT that abnormal use of the CLIENT Interface, particularly API command overloads (hammering), may trigger automatic security measures resulting in blocking access to command APIs or the Service. It should be emphasized that this situation does not constitute Service unavailability but a protective action for the Service and Provider's infrastructure; therefore, the CLIENT cannot consider it as unavailability in its calculations.

Additionally, the Provider informs the CLIENT that perfectly identical (duplicate) requests sent to its APIs are limited to one per second (Throttling). If the CLIENT submits identical requests at a higher frequency, their rejection cannot be interpreted as Service unavailability.

### 7.2.3. Computing Infrastructure

The Service includes the provision, in the Availability Zones subscribed to by the CLIENT, of the equipment necessary for executing workloads in the form of virtual machines.

This includes:

- Provision of technical chassis necessary for the proper operation of compute blades;
- Provision of compute blades in the quantities specified by the CLIENT and distributed according to its chosen Availability Zones. It should be noted that these compute blades are exclusively dedicated to the CLIENT;
- Provision of hypervisor-type operating systems, as well as the guarantee of maintaining the operational condition and security of the software infrastructure necessary for managing these operating systems. It should be emphasized that although the Provider is responsible for the operational maintenance and overall security of the Service, it does not have specific knowledge of the CLIENT's production environments or requirements related to its workloads. Therefore, the responsibility for deciding on the update of hypervisor compute blade operating systems, an action that may require a reboot, rests entirely with the CLIENT. This operation can be performed via the CLIENT Interface.

The choice of the blade model, selected from the catalog offered by the Provider, falls under the CLIENT's responsibility.

### 7.2.4. Storage Infrastructure

The service includes the provision to the CLIENT of a shared SAN (Storage Area Network) infrastructure offering various performance levels. This service includes:

- Implementation and maintenance of the dedicated SAN network in operational and secure conditions;
- Installation and management of shared storage cabinets among clients, including their maintenance in operational and secure conditions, their monitoring and metrology;
- Implementation of automated systems for allocating storage LUNs (Logical Unit Numbers) dedicated to the CLIENT's use, in accordance with the volumes subscribed to by the CLIENT.

### 7.2.5. Global Network Infrastructure

The Provider deploys within the scope of the Service a global network facilitating the CLIENT's access to its systems
hosted. This service includes:

- The provisioning, maintenance in operational and security conditions of all fiber optic connections interconnecting the different Availability Zones;

- The provisioning, maintenance in operational and security conditions of the technical equipment necessary for the proper functioning of the network and the isolation of the different clients.

The network interconnection of the CLIENT Tenant, to the Internet or private networks, and the network equipment, operator links and other technical components implementing this interconnection, are not part of the Service scope. This network interconnection is implemented in accordance with the provisions set out in the Contract.

### 7.2.6. Backup Infrastructure

The Provider provides the CLIENT with an integrated, dedicated, and managed backup service intended to protect its virtual machines. The Provider ensures the operational and security maintenance of this backup service. The Provider guarantees that the CLIENT's backups will be located outside the Availability Zone of the workloads being backed up, provided that the CLIENT has subscribed to the appropriate Work Units.

This backup service is limited to backing up virtual machines and the topology configuration of the IaaS environment of the CLIENT's Tenants within the scope of the Service. The development and implementation of an appropriate backup policy by the CLIENT depends on the subscription to specific Work Units. It is therefore the CLIENT's responsibility to ensure the availability of the necessary technical resources with the Provider to implement its backup policy or to adjust it according to the available resources.

The Provider commits to notifying the CLIENT in case of capacity constraints and to providing advisory assistance for resource optimization. The Provider's obligations will be limited to implementing the backup policy requirements expressed by the CLIENT within the scope of the subscribed resources.

### 7.2.7. Implementation of business recovery or continuity solutions

The Provider provides the CLIENT with all the technical solutions necessary to ensure an optimal distribution of its resources across various Availability Zones. It is the CLIENT's responsibility to effectively manage this resource distribution, for which it has the possibility to use the tools provided by the Provider for this purpose.

## 7.3. Service limitations in the qualified IaaS model

### 7.3.1. Managed services in RUN

It is important to note that the following are excluded from the Service:

- Hosting of the CLIENT's physical components;

- The CLIENT Tenant's network interconnection, to the Internet or private networks, including operator links;

- Any managed service, or TMA;

- Any assistance on virtual machines at the OS level and above in the IaaS responsibility stack, even if it is only monitoring.

That said, the CLIENT may certainly use such services through the Provider's MSP offering to intervene in managed services mode on its Tenants. These services will not be governed by this Service Agreement and its bilateral clauses.

### 7.3.2. Backup configuration

By default, the Provider provides the IaaS resources to the CLIENT by reserving resources and configuring deployments to use Availability Zones. It is the CLIENT's responsibility to choose the Availability Zones via the CLIENT interface.

### 7.3.3. Backup configuration

The backup service is limited to backing up virtual machines and the topology configurations representing the IaaS environment of the CLIENT's Tenants within the scope of the Service.

The backup service and completion of the CLIENT's backup policy are subject to the subscription of storage space on the necessary mass storage to ensure the service. It is therefore the CLIENT's responsibility to subscribe to the necessary technical means with the Provider to ensure the backup policy on its IT environment, or to adjust the backup policy according to the implemented resources. The Provider commits to informing the CLIENT in case of technical capacity limitations.

The Provider will implement the necessary technical and human resources for backing up the hosted system within the scope of the resources subscribed by the CLIENT.

Furthermore, in the case of environments not covered by the Provider, it is the CLIENT's responsibility to define its own backup strategy and to configure the backups of the VMs itself or to submit a service request to the Provider to implement the configuration of backups for physical servers if the CLIENT has a managed service contract allowing the Provider to act via the CLIENT interface, which is the administration console provided within this Service Agreement and which has features to configure backups.

In addition, this service will only commit to translating the configuration specified clearly by the CLIENT via the CLIENT interface.

For reasons of flexibility in the Provider's offer, the CLIENT has the option to associate a no-backup policy on certain of its VMs. In this case, it is the CLIENT's responsibility to assume this choice. The Provider will not back up VMs associated with the "no backup" policy. The Provider alerts the CLIENT that choosing the "no backup" policy or choosing to back up manually exposes the CLIENT to a definitive data loss in case of an incident on the lower layers or on the layers dependent on its responsibility in the IaaS model. In such a case, it will be impossible to hold the Provider responsible for restoring the data as there will be nothing to restore. The Provider recommends always backing up the VMs.

For any matter concerning the OS installed on a virtual machine and any software or program executed "above the OS," it is the CLIENT's responsibility to perform the administration and monitoring operations within the European Union if it wishes to ensure that the entire verticality of the SI layers are operated and managed from the European Union. The administration operations outside the Provider's responsibility scope within the context of this Service Agreement are indicated in the "Shared Responsibility Model" section of this Service Agreement.

## 7.4. Service implementation

### 7.4.1. Technical prerequisites

For the implementation of the Service, the CLIENT acknowledges that it will need to:

- Operate with VMware-based virtualization in the versions supported by the publisher and provided by the Provider within the scope of the Service;

- Use the backup tool via the Provider;

- Declare fixed IPs from which the Provider will authorize access to the CLIENT interface (Whitelist filtering). Modifications to this IP list must be made via the menu provided for this purpose in the console or via service requests for subsequent modifications. At service initialization, the Provider will have been informed of at least 1 IP address as described.

## 7.5. Service location in France

It is specified that none of the operations or physical components involved in the provision of the Service, the subject of this Service Agreement, are located outside the European Union.

This includes, in particular, support, operational monitoring, and security monitoring (SOC) of the technical infrastructure delivering the Service. In fact, all storage, all administrative tasks, monitoring, and processing are carried out in France.

### 7.5.1. Location of Datacenters hosting the Service

In the absence of operations by the Provider's employees and agencies, all production operations (including data storage and processing) and technical components delivering the Service are located in Datacenters based in France.

### 7.5.2. Location of Cloud Temple agencies operating the service

The Cloud Temple employees working on the Service perimeter operate from Cloud Temple agencies all located exclusively in France. These agencies are located in France, in Tours, Lyon, Caen, and Paris La Défense.

The CLIENT is informed of the possibility of Cloud Temple employees working remotely. However, the Provider guarantees the same level of security regarding remote access, particularly regarding VPN access. These remote accesses are implemented in accordance with the requirements of the SecNumCloud Reference.

## 7.6. Support

### 7.6.1. Nature of the support accompanying the service

The Provider provides a technical support service aimed at assisting the CLIENT in the management, troubleshooting, and optimization of their deployed resources. This service covers a wide range of activities, from initial service configuration assistance.
up to advanced technical support to resolve specific issues.

Here is a description of the characteristics and features of the support service:

- Initial implementation assistance for using the Service;
- Incident resolution assistance;
- Problem resolution assistance;
- Monitoring and advice on optimizing the technical base.

Within the scope of the support service, the Provider does not replace the CLIENT in the use of the Service. The CLIENT remains fully responsible for the configuration, operation of its VMs and Tenants, and the management of all elements (data and applications included) it has stored or installed on the Provider's infrastructure. The technical support service is provided in accordance with the General Terms and Conditions of Sale and Use, with the Provider being subject to an obligation of means.

The CLIENT commits to using the technical support service in a reasonable manner, refraining notably from requesting services not subscribed to with the Provider and from having the Provider's teams intervene with its own clients or third parties not included in the Contract. The Provider reserves the right to reject any service request that does not meet these criteria.

The level of support engagement is conditional upon the subscription of associated support units.

### 7.6.2. Requesting the technical support service

Technical support is accessible via a ticketing system through the CLIENT's console and is available during normal business hours excluding public holidays (8h - 18h; Monday to Friday; French calendar and hours). For emergencies occurring outside of working hours, particularly incidents significantly affecting production, the on-call service can be reached via a number provided to the CLIENT at the initiation of the Service.

For each request or incident, it is mandatory to generate a ticket with the Provider's support. The initiation of this ticket, including all necessary information, is essential and marks the beginning of the evaluation of the Provider's commitments.

As soon as the Provider receives a request or an incident notification, whether through the management console or following a phone call, a ticket is automatically created. When reporting an incident, it is essential for the CLIENT to provide the Provider with as much detail as possible about the problem encountered. This step is crucial to enable an adequate assessment of the situation, its prioritization, and an effective diagnosis.

The CLIENT then receives an email confirmation indicating the creation of the ticket and its unique number. The CLIENT can check the status and history of its requests and incident reports directly from the management console.

### 7.6.3. Incident management process

When an incident is reported, the Provider's technical support team initiates an investigation to identify the cause of the problem and establish a diagnosis. The CLIENT must actively collaborate with the Provider by providing all necessary information and performing the required tests. The Provider may access the CLIENT's Service to diagnose the incident.

If the Provider's Services are deemed functional and the incident is not attributable to the Provider, the CLIENT will be informed. At the CLIENT's request, the Provider may offer Professional Services to identify the source of the problem, billable on a prior agreement basis per 30-minute block.

In the case where the incident is the responsibility of the Provider or one of its subcontractors, the Provider completes the diagnosis and works on restoring the Service without additional charges. The diagnosis is based on the exchanges between the Parties and the Provider's data, these elements being considered as evidence by mutual agreement.

### 7.6.4. Prioritization process

The determination of the priority level of a case is based on a matrix analysis that evaluates the impact of the incident and its level of criticality:

- Impact levels are defined as follows:

  -------------------------------------------------------------------------
  Level     Description
  of impact
  ---------- --------------------------------------------------------------
  Impact I1  The Provider's service(s) are interrupted

  Impact I2  The Provider's service(s) are degraded

  Impact I3  The Provider's service(s) are currently stable, but show signs of potential long-term decline
  -------------------------------------------------------------------------

- Criticality levels are defined as follows:

  -----------------------------------------------------------------------
  Level of   Description
  criticality
  ----------- -----------------------------------------------------------
  Criticality   The Provider's service(s) are degrading at an alarming rate
  C1

  Criticality   The Provider's service(s) are gradually deteriorating over time
  C2

  Criticality   The Provider's service(s) present one or more inconveniences without significant consequences
  C3
  -----------------------------------------------------------------------

- Based on a thorough analysis of the situation, taking into account the elements determining Impact and Criticality, a priority is assigned to the ticket according to the following decision matrix:

  -------------------------------------------------------------------------
  Level of impact  Level of         Impact I1    Impact I2    Impact I3
  criticality
  ---------------------------------- ------------ ------------ ------------
  Criticality C1                       Priority     Priority     Priority
                                       **P1**       **P2**       **P3**

  Criticality C2                       Priority     Priority     Priority
                                       **P2**       **P3**       **P4**

  Criticality C3                       Priority     Priority     Priority
                                       **P3**       **P4**       **P5**
  -------------------------------------------------------------------------

The service level commitments corresponding to each priority level are detailed in the following chapter.

### 7.6.5. Language and location of the support service

The support is provided by the Provider to the CLIENT in at least the French language. The support can also be provided in the English language.

The operations of the Provider's support service for the SecNumCloud qualified infrastructure service are located in the European Union.

# 8. Commitments and service levels

The Provider commits to ensuring continuous monitoring of the performance and secure integrity of its technical infrastructure delivering the Service, ensuring its optimal operation.

The unavailability of a service, subject to a performance indicator, is recognized upon its identification by the Provider's monitoring system, or following a notification by a CLIENT user. The start of unavailability is set at the earliest of these two events to ensure accurate and fair calculation of the unavailability time.

The end of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or by a user feedback, thus ensuring an effective resumption of operations and a faithful measurement of the downtime duration.

## 8.1. Infrastructure availability commitments

The Provider commits to maintaining an availability and performance level compliant with the standards defined for each specified period. The service level agreements (SLAs) apply provided the CLIENT implements its systems through at least two of the Availability Zones present in the relevant Region.

In the absence of compliance with these conditions by the CLIENT, it will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (*). SLA accessibility is via the CLIENT interface. The measurements are calculated monthly:

- **SLA 1 (*) : IC-INFRA_SNC-01** -- Compute Availability: Guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 2 (*) : IC-INFRA_SNC-02** -- Storage Availability: Guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 3 : IC-INFRA_SNC-03** -- Backup Reliability: Guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 4 (*) : IC-INFRA_SNC-04** -- Network Infrastructure Availability: Guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 5 : IC-INFRA_SNC-05** -- Internet Access: Guaranteed availability rate of 99.99%, calculated on a 24/7 basis.

***Notes***:

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of this attack and protect its infrastructure. In particular, if an IP address
the COMMANDITAIRE is targeted, the Provider may use the blackholing technique via the BGP community to block all traffic to the targeted IP address upstream with its suppliers, in order to protect the COMMANDITAIRE's resources as well as those of other COMMANDITAIREs and the Provider's infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as the use of web application firewall software available on the market, and to carefully configure its security groups via the command API.*

- *The Provider emphasizes the necessity for the COMMANDITAIRE to minimize traffic openings, particularly by avoiding making the administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 8.2. Availability commitment for the COMMANDITAIRE interface

- SLA 6: IC-INFRA_SNC-06 -- Access to the Service administration console: a guaranteed availability of 97%, ensured continuously, 24 hours a day, 7 days a week.
- SLA 7: IC-INFRA_SNC-07 -- Access to the Service control APIs: an availability of 99.9%, calculated on a 24/7 basis.

## 8.3. Availability commitment for support

- **SLA 8: IC-INFRA_SNC-08** -- Here are the performance commitments of the Provider's technical support for incidents, excluding scheduled maintenance:

  ------------------------------------------------------------------------
  Priority       Guaranteed Time to Intervention (GTI)    Performance Target
  -------------- ----------------------------------- ---------------------
  Priority       30mn                                95%
  **P1**

  Priority       2h                                  90%
  **P2**

  Priority       4h                                  90%
  **P3**

  Priority       24h                                 85%
  **P4**

  Priority       48h                                 85%
  **P5**
  ------------------------------------------------------------------------

- **SLA 9: IC-INFRA_SNC-09** -- Here are the performance commitments of the Provider's technical support for service requests:

  ------------------------------------------------------------------------
                   Guaranteed Time to Intervention (GTI)   Performance Target
  ---------------- ---------------------------------- --------------------
  Service request  4h                                 90%
  ------------------------------------------------------------------------

*Note*:

- *The time for the Guaranteed Time to Intervention (GTI) is calculated from the difference between the moment the COMMANDITAIRE opens the ticket and the first intervention by the Provider's support.*
- *Investigation of incidents concerning the COMMANDITAIRE will not include remote intervention on the COMMANDITAIRE's hosted servers. This support will be limited to explaining the available metrics related to the COMMANDITAIRE's environment, to facilitate understanding of the incidents or performance issues encountered. Based on the results of this analysis, recommendations may be suggested.*

## 8.4. Availability commitment for S3 object storage

- **SLA 10: IC-INFRA_SNC-10** -- Here are the availability commitments for S3 object storage:

  ------------------------------------------------------------------------------
  Indicator           Commitment                             Availability Target
  ------------------- -------------------------------------- -------------------
  IC-INFRA-SNC-10.1   Object storage durability in a region  99.9999999% / year
  IC-INFRA-SNC-10.2   S3 Object Storage API availability     99.99%
  IC-INFRA-SNC-10.3   Maximum access latency for an object   150 ms
                      in a region
  ------------------------------------------------------------------------------

Notes:

- The Object Storage Service is specifically designed for object storage and must be used for this purpose only, **excluding any use in block mode**. Using block mode through indirect methods, including for example the use of *"FUSE" in a Linux environment*, constitutes a violation of the terms of use. No incident, malfunction or damage resulting from this non-compliant use will be covered by the Service Level Agreements (SLAs) defined in this service agreement.
- The durability guarantee is conditional upon the use of services in compliance with current best practices and standards, and explicitly excludes any modification of data, whether intentional or accidental, resulting from actions undertaken by the COMMANDITAIRE.

## 8.5. Clarification regarding the backup commitment

The backup strategy deployed for the COMMANDITAIRE is conditional upon the subscription to appropriate units of work.

The Provider commits to providing a backup solution that will enable the COMMANDITAIRE to apply the desired backup policies.

It is specified that the Provider's scope ends with the provision of a backup service, and it is the COMMANDITAIRE's responsibility to monitor the correct execution of the associated policies via the COMMANDITAIRE interface.

It is specified that the management of storage capacity for the storage space dedicated to backups remains the responsibility of the COMMANDITAIRE. The Provider provides the utilization rate via the console.

*Example: Non-backup of a virtual machine:*

*The COMMANDITAIRE is responsible for verifying / monitoring the correct execution of the backup policies. In the event the COMMANDITAIRE notices that a virtual machine is not backed up, it is their responsibility to investigate the cause. The COMMANDITAIRE may request assistance from the Provider's Support according to the level of support subscribed to.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9**, will be exclusively applicable in the case of a backup service incident.

# 9. Organization of the contractual relationship

## 9.1. Responsibilities of the Provider

The Provider commits to:

- informing its COMMANDITAIRE adequately (e.g., in case of technical resource capacity limits delivering the Service).

- formally informing the COMMANDITAIRE within a one-month period of any legal, organizational or technical change that may impact the Service's compliance with protection requirements against extra-European laws (19.6 of the SNC v3.2 reference framework).

- providing the COMMANDITAIRE with interfaces and service interfaces that are at a minimum in French.

- taking into account the specific sectoral requirements related to the types of information entrusted by the COMMANDITAIRE during the implementation of the Service, within the limits of the Provider's responsibilities and the provisions of the Contract;

- studying the specific sectoral requirements related to the types of information entrusted by the COMMANDITAIRE during the implementation of the Service, subsequently expressed by the COMMANDITAIRE, and indicating to them the necessary actions for their consideration

- not disclosing any information relating to the service to third parties, except with the COMMANDITAIRE's formal and written authorization.

- providing all necessary information for the realization of compliance audits in accordance with the provisions of Article 28 of the GDPR.

- reporting to the COMMANDITAIRE, through this Service Agreement, of any security incident impacting the Service or the use made by the COMMANDITAIRE of the Service (including the COMMANDITAIRE's data).

- allowing a qualified information system security audit provider (PASSI), mandated by the Provider, to audit the service and its information system, in accordance with the Provider's SecNumCloud control plan. Furthermore, the Provider commits to providing all necessary information to carry out compliance audits under the provisions of Article 28 of the GDPR, conducted by the COMMANDITAIRE or a mandated third party.

- providing, as a subcontractor, assistance and advice to the COMMANDITAIRE in accordance with Article 28 of the General Data Protection Regulation (GDPR), alerting them as soon as an instruction issued by them is likely to constitute a violation of data protection rules.

- notifying the COMMANDITAIRE within a reasonable time frame, through the COMMANDITAIRE console or by email to the COMMANDITAIRE contact, when a project impacts or is likely to impact the security level or availability of the Service, or to cause a loss of functionality, potential impacts, mitigation measures implemented, as well as residual risks that affect it.
- to document and implement all procedures necessary to comply with applicable legal, regulatory, and contractual requirements for the service, as well as the specific security needs of the CLIENT, defined by the latter and outlined in the Contract.

- to not use the CLIENT's data from production for testing purposes, except with prior explicit authorization from the CLIENT, in which case the Provider undertakes to anonymize these data and ensure their confidentiality during anonymization.

- to delete the data and technical data related to the CLIENT, in accordance with the "data deletion procedure at the end of the Contract" described in this Service Agreement upon termination or cancellation of the Contract.

- to ensure secure erasure of all the CLIENT's data by fully overwriting all media that hosted its data within the scope of the Service.

Upon formal written request from the CLIENT, the Provider undertakes to:

1. Make the Provider's internal regulations and code of ethics accessible to the CLIENT;

2. Make the sanctions applicable in case of violation of the security policy accessible to the CLIENT;

3. Provide the CLIENT with all events related to it in the Service's logging elements; the CLIENT may also independently consult events related to its use of the Service through the Service's web and API interfaces;

4. Make accessible to the CLIENT the procedures enabling compliance with the current legal, regulatory, and contractual requirements applicable to the Service, as well as the specific security needs of the CLIENT outlined in the Contract;

5. Provide elements of assessment related to the risks associated with submitting the CLIENT's data to the law of a non-EU member state;

6. Inform the CLIENT of subsequent subcontractors involved in the provision of the Service, and inform it of any changes affecting these subcontractors.

> The Provider and all its subsidiaries commit to respecting the fundamental values of the European Union, namely human dignity, freedom, democracy, equality, the rule of law, as well as respect for human rights. The service provided by the Provider complies with the legislation in force regarding fundamental rights and the values of the European Union related to respect for human dignity, freedom, equality, democracy, and the rule of law.

## 9.2. Limitation of the Provider's Responsibilities

Due to the definitions and conditions mentioned in this Service Agreement, the Provider's responsibilities are limited as follows:

1. The shared responsibility model, described in the "Shared Responsibility Model" section of this Service Agreement, effectively limits the Provider's involvement in the operational layers "above" the provision of computing, network, storage, and backup resources. This specifically excludes, without limitation:

    - Management of what is installed on virtual machines (OS, middleware, applications, etc.);

    - Maintenance of OS and other software installed by the CLIENT on its machines within its Tenants;

    - Security of programs, software, and applications installed on virtual machines;

    - Updating of virtual machines;

    - Backup of data at the application level.

2. The Provider cannot commit to backing up the CLIENT's Tenants without the CLIENT having previously subscribed to the appropriate units.

3. The Provider cannot claim ownership of the data transmitted and generated by the CLIENT. Indeed, these belong to the CLIENT's ownership.

4. The Provider emphasizes that it cannot exploit and/or dispose of the data transmitted and generated by the CLIENT without prior validation from the latter, with the understanding that their disposal is reserved for the CLIENT.

5. The Provider disclaims all responsibility for components physically hosted and managed by the Provider, but which are the direct property of the CLIENT or a third party with whom the CLIENT has contracted. Hosting physical components of clients is not part of the Service and is outside the scope of this Service Agreement. It is the CLIENT's responsibility to assess the level of adherence or dependency introduced by these components regarding the qualified IaaS Service SecNumCloud.

## 9.3. Access Limitation

Within the scope of the Service, the Provider is formally prohibited from accessing the CLIENT's Tenants without prior authorization. It is the CLIENT's responsibility to provide the necessary access to the Provider's personnel, according to the specific needs of the hosting and, if applicable, the professional support services, if this option has been chosen by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for the needs related to the service provision, thus ensuring secure management and compliance with the agreement's terms.

Remote access by third parties involved in the Provider's service provision is strictly prohibited. In the event of a specific technical requirement necessitating such access, it could only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining its written consent.

This measure ensures the control and security of the CLIENT's data, ensuring that any exception to the rule is duly authorized and documented.

## 9.4. Responsibilities of Third Parties Participating in the Provision of the Secure Temple Service

The Provider maintains a list of third-party partners participating in the provision of the Service. These third parties are the publishers, providers (of the Provider), and other suppliers participating in the provision of the Service. The Provider applies the following measures to these third parties:

- The Provider requires third parties participating in the implementation of the service, in their contribution to the Service, a security level at least equivalent to that which it commits to maintaining in its own security policy applicable to the Secure Temple Service;

- The Provider contracts, with each of the third parties participating in the implementation of the service, audit clauses allowing a qualification body to verify that these third parties comply with legal requirements and SNC requirements, enabling the Provider to fulfill its commitments in this Service Agreement.

- The Provider implements a procedure to regularly monitor the measures implemented by the third parties participating in the implementation of the service to comply with the requirements for the Provider to fulfill its commitments in this Service Agreement.

- The Provider monitors changes made by the third parties participating in the implementation of the service that could affect the security level of the service's information system.

## 9.5. Responsibilities and Obligations of the CLIENT

The CLIENT has the following obligations within the scope of the Service:

- As a reminder, the Provider provides the CLIENT with a virtual machine execution platform, and the configuration of these is the CLIENT's responsibility. Each virtual machine cannot operate without an associated backup policy. The Provider defines automatic backup policies via its interfaces. However, it is the CLIENT's responsibility to activate these backup policies and therefore to activate the virtual machines.

- The CLIENT authorizes ANSSI and the SNC qualification body to audit the Service and the technical infrastructure delivering the Service.

- The CLIENT is responsible for informing the Provider of any specific sectorial requirements related to the types of information entrusted by the CLIENT and requiring to be taken into account by the Provider.

- The CLIENT accepts not to request the Provider to comply with requirements or actions that would deviate the Provider from the current version of the SecNumCloud reference framework, or lower the security level established by compliance with the requirements of the same reference framework.

## 9.6. Rights of the CLIENT

At any time during the contractual relationship, the CLIENT may file a complaint regarding the qualified service with ANSSI.

At any time, the CLIENT may request the Provider to make its internal regulations and code of ethics accessible.

## 9.7. Data Erasure at the End of the Contract

At the end of the contract, whether it expires or is terminated for any reason, the Provider undertakes to perform secure erasure of all the CLIENT's data, including technical data. The Provider will ensure to communicate a formal notice to the CLIENT, respecting a period of twenty-one
(21) calendar days. The COMMANDITAIRE's data will then be deleted within a maximum of thirty (30) days following this notification.

To attest to this deletion, the PROVIDER will provide the COMMANDITAIRE with a certificate confirming the erasure of the data.

# 10. Life Cycle of this Service Agreement

## 10.1. Effective Date of the Service Agreement

This Service Agreement becomes effective on the day of its signature by the COMMANDITAIRE.

The collection, processing, storage, and handling of data carried out during the pre-sales, implementation, and termination of the Service are conducted in compliance with the applicable legislation.

## 10.2. Amendments to the Service Agreement

Modifications or additions to this Service Agreement result exclusively from requests formulated by the designated governance bodies. These change proposals will be reviewed by the Parties, who are authorized to determine the aspects requiring written formalization.

It is agreed that any amendment to the Service Agreement, after validation, which alters the initially established financial conditions, will require the preparation and signing of an amendment to the ongoing Contract.

Factors that may lead to a revision of this Service Agreement include, but are not limited to:

- The evolution of the technical infrastructure delivering the Service IaaS;
- Adjustments made to the services deployed by the PROVIDER to deliver the Service;
- Variations in commitments and applicable sanctions;
- Organizational reconfigurations within the COMMANDITAIRE or the PROVIDER;
- Expansion or reduction of the Service's scope.

The management of versions and revisions of the Service Agreement is documented in the preamble of the document to facilitate tracking.

### 10.2.1. Amendments initiated by the COMMANDITAIRE

Amendments to the Service Agreement may, among other things, originate from:

- The evolution of the infrastructure managed by the PROVIDER;

- The modification of the services implemented by the PROVIDER;

- The modification of the service level commitments by the PROVIDER.

### 10.2.2. Amendments initiated by the PROVIDER

Any modification to the Service Agreement is subject to the COMMANDITAIRE's approval. It is understood that any validated modification or addition affecting the financial elements of the Contract may require the signing of an amendment to it.

## 10.3. Reversibility

Furthermore, Cloud Temple commits to allowing a revision of this Service Agreement (including its termination) without penalty for the COMMANDITAIRE in the event of loss of the SecNumCloud qualification.

The Services do not include a reversibility obligation (i.e., assistance to the COMMANDITAIRE to migrate its system to another PROVIDER), except for the provision by the PROVIDER of the COMMANDITAIRE interface allowing the COMMANDITAIRE to back up and retrieve its data, including notably the configuration data of their information system via one of the following technical methods chosen by the COMMANDITAIRE: the provision of files following one or more documented and usable formats outside the service provided by the PROVIDER, or the implementation of technical interfaces allowing access to the data following a documented and usable schema (API).

The COMMANDITAIRE, as the master of its system, must do everything possible to facilitate this operation when needed (which implies, among other things, that it must implement thorough documentation for this purpose) and the development of reversibility plans. In the event that the COMMANDITAIRE requires additional services, the PROVIDER may propose a consulting mission in this regard within the framework of a specific contract to be negotiated.

# 11. Service Availability, Continuity, and Restoration

## 11.1. Incident and Interruption Management

### 11.1.1. Incidents

#### 11.1.1.1. Types of Incidents Covered by this Service Agreement

- Incidents;

- Failures and malfunctions;

- Security incidents impacting the availability, confidentiality, or integrity of the Service.

#### 11.1.1.2. Incident Handling

> The PROVIDER informs the COMMANDITAIRE as soon as possible of incidents and interruptions, through a notification in the COMMANDITAIRE console or by email to the COMMANDITAIRE contact. The PROVIDER informs the COMMANDITAIRE of the incident handling via the channel used to notify the incident, or via the channel indicated in the incident notification.

#### 11.1.1.3. Security Incident Notification Levels

The COMMANDITAIRE is responsible for choosing the severity levels of security incidents for which it wishes to be informed, for example via their formalization in an applicable PAS for the Service.

By default, the COMMANDITAIRE is informed of:

- Security incidents with impact (impact levels I1 and I2 according to the impact scale defined in the prioritization process of this Service Agreement);

- Security incidents impacting the confidentiality or integrity of the COMMANDITAIRE's data entrusted within the Service;

- Personal data breaches for which the COMMANDITAIRE is responsible for processing in accordance with Article 8 of Annex DPA within the Service;

-

## 11.2. Service Maintenance

### 11.2.1. Nature of Maintenance

Personal data breaches for which the PROVIDER is responsible for processing and containing the COMMANDITAIRE's personal data, in accordance with Article 8 of Annex DPA. The maintenance provided consists of:

- The implementation of the Service's operational continuity plan to ensure good availability indicators as committed by the PROVIDER above;

- The PCA/PRA plan if subscribed by the COMMANDITAIRE, triggered according to any incidents that may occur.

### 11.2.2. Remote Access by Cloud Temple to the COMMANDITAIRE's Scope

The PROVIDER is prohibited, within the scope of this Service Agreement, from accessing Tenants and the COMMANDITAIRE's interface space.

It will be the COMMANDITAIRE's responsibility to provide the necessary access to the PROVIDER's personnel. The COMMANDITAIRE acknowledges that these accesses will be used within the scope of hosting and ultimately of managed services (if subscribed by the COMMANDITAIRE).

### 11.2.3. Remote Access by Third Parties Participating in Service Delivery within the COMMANDITAIRE's Scope

No remote access by third parties participating in Service delivery is authorized.

If a technical need made this situation necessary, such access would only be implemented after notification to the COMMANDITAIRE, justification, and obtaining its written consent.

# 12. Data Erasure Procedure at Contract Termination

At the end of the Contract, whether it has reached its term or for any other reason, the PROVIDER will ensure the secure erasure of all data processed within the scope of the Service, including the COMMANDITAIRE's technical data. The PROVIDER will provide a formal notice, respecting a 21-day (21) calendar period. The COMMANDITAIRE's data will be deleted within a maximum of thirty (30) days after the notification. The PROVIDER provides a data deletion certificate to the COMMANDITAIRE.

# 13. Applicable Law

## 13.1. Generally

The applicable law governing this Service Agreement is French law.

## 13.2. Compliance with Applicable Law and Regulations

The PROVIDER commits to the following points:

- Identification of the legal and regulatory constraints applicable within the scope of the Service;

- Compliance with the legal and regulatory constraints applicable to the data entrusted to the PROVIDER, within the scope of its responsibilities, and the provisions outlined in the Contract;

- Compliance with the Computer Science and Freedom Act and the GDPR;

- Implementation of data protection measures;

- Implementation of a legal and regulatory monitoring process;

- Maintaining appropriate relationships or monitoring with sectoral authorities related to the nature of the data processed within the Services. This includes, among others, the ANSSI, CERT-FR, and the CNIL.

## 13.3. GDPR

Acting as a processor within the meaning of Article 28 of the General Data Protection Regulation (GDPR), the PROVIDER commits to:

- Ensuring transparency and traceability;

- Appointing a DPO responsible for defining and implementing data protection measures;

- Providing assistance and advice to the COMMANDITAIRE when it detects that an instruction from the latter constitutes a violation of data protection rules, provided the PROVIDER has the means to identify it;

- Ensuring security for the processed data (due to the SecNumCloud certification).

## 13.4. Protection against Extra-EU Law

The PROVIDER's registered office is located within a European Union Member State. The social capital and voting rights in the PROVIDER's company are not, directly or indirectly:
- individually held by more than 24% ;

- and collectively held by more than 39% ;

by third-party entities possessing their registered office, central administration or principal establishment within a non-EU member state.

In the event that the Provider, within the framework of the Service, uses the services of a third-party company - including a subcontractor - possessing its registered office, central administration or principal establishment within a non-EU member state or belonging to or being controlled by a third-party company based outside the EU, the Provider undertakes:

- that this aforementioned third-party entity will have no access to the data processed by the 'Secure Temple' service ;

- to have operational autonomy through the ability to engage another subcontractor or to quickly implement a technological alternative.

For reference, the data in question are those entrusted to the Provider by the CLIENT as well as all Technical Data containing information on the CLIENTS.

For the purposes of this article, the concept of control is understood as that mentioned in paragraph II of Article L233-3 of the Commercial Code.

# 14. SIGNATURES

Made in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, on
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For Cloud Temple, the PROVIDER

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the CLIENT