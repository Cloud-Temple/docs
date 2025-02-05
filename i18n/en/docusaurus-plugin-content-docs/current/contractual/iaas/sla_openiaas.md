---
title: SecNumCloud OpenIaaS Service Agreement
---

# 1. OpenIaaS SERVICE AGREEMENT

  -----------------------------------------------------------------------
  **Recipients:**                **SPONSOR**
  ------------------------------ ----------------------------------------
  **Document Reference**         CT.AM.JUR.ANX OPENIaaS-
                                 202530101_v3.0.docx_Day DD Year YYYY

  **Your contacts**              *First Name* *Last Name*

                                 Account Manager

                                 e-mail: *firstname.lastname*\@cloud-temple.com

  **Last updated on**            17/01/2025                         

  **Contractual validation       Day DD Year YYYY
  date**                         
  -----------------------------------------------------------------------

------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Version**   **Date**     **Action**                           **Author**
  ------------- ------------ ------------------------------------ --------------
  v0.1          07/06/2022   Initial drafting                     Lorena ALCALDE

  v0.2          14/09/2022   Enrichment                          Lorena ALCALDE

  v1.0          30/12/2022   Indicator integration               Lorena ALCALDE

  v1.1          23/01/2023   Footer modification                  Lorena ALCALDE

  v1.2          22/05/2023   Enrichment                           Lorena ALCALDE

  v1.3          29/06/2023   Enrichment                           Lorena ALCALDE

  v1.4          06/11/2023   Capital modification and             Lorena ALCALDE
                             Enrichment                           

  v1.5          30/11/2023   Enrichment                           Lorena ALCALDE

  v1.6          21/03/2024   Enrichment                           Lorena ALCALDE

  v2.0          29/03/2024   SNC conformity adjustments           Nicolas
                                                                  ABRIOUX

  v2.0          03/04/2024   Publication                          Lorena ALCALDE

  V3.0          17/01/2025   Enrichment                           Emeline CAZAUX
  ------------- ------------ ------------------------------------ --------------

  ------------------------------------------------------------------------------

------------------------------------------------------------------------

# 2. TABLE OF CONTENTS

-   [1. **IaaS SERVICE AGREEMENT**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
-   [2. **TABLE OF
    CONTENTS**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Preliminary and
    Glossary](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Preliminary](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glossary](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Acronyms](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Purpose of this Service
    Agreement](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Service
    Description](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Shared responsibility
        model](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Detailed service scope
        presentation](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Datacenter
            Infrastructures](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Service management software
            infrastructure](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Compute
            infrastructures](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Storage
            infrastructure](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Global network
            infrastructure](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Backup
            infrastructure](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
        -   [7.2.7. Implementation of business continuity or disaster 
            recovery
            solutions](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Limitations of the services in the qualified IaaS
        model](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Managed services in
            RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Backup
            configuration](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
        -   [7.3.3. Backup
            implementation](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
    -   [7.4. Service
        implementation](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Technical
            prerequisites](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
    -   [7.5. Service location in
        France](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Location of the datacenters hosting the
            Service](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Location of Cloud Temple agencies operating the
            service](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Support](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Nature of the support accompanying the
            service](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2. Requesting technical support
            service](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Incident management
            process](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Treatment prioritization
            process](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Language and location of the support
            service](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Commitments and service
    levels](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Infrastructure availability
        commitments](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. SPONSOR interface availability 
        commitments](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Support availability
        commitments](#Xfc8548982b300528a67725f1705f15805f405f0)
    -   [8.4. Object storage S3 availability
        commitments](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
    -   [8.5. Backup commitment
        details](#Xcc0ee164bf81418fd2280ceac4eb569bf7b97f7)
-   [9. Organization of the contractual 
    relationship](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Provider's
        Responsibilities](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Provider's liability 
        limitations](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Access
        limitations](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)
    -   [9.4. Responsibilities of third parties participating in the provision of
        the Secure Temple
        service](#Xc662a81cadd2baa300ca83a27240dec61621a56)
    -   [9.5. SPONSOR's responsibilities and 
        obligations](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
    -   [9.6. SPONSOR's
        rights](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
    -   [9.7. Data deletion at contract 
        termination](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
-   [10. Service Agreement life
    cycle](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Effective date of the Service
        Agreement](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Service Agreement 
        updates](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Updates triggered by the
            SPONSOR](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Updates triggered by the
            Provider](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Reversibility](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Service availability, continuity, and 
    restoration](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Incident and interruption
        management](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1.
            Incidents](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Types of incidents handled under this Service
                Agreement](#X09cc1e22db275b1a463f85596829f3f871ae224)
            -   [11.1.1.2. Incident
                handling](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
            -   [11.1.1.3. Security incident notification
                level](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
    -   [11.2. Service
        Maintenance](#X8f50b0b400c67568e380ddb602ac786ec585905)
        -   [11.2.1. Nature of the
            maintenance](#X903d92edf16182242ecfd404337edbaf2243b81)
        -   [11.2.2. Remote access by Cloud Temple to the SPONSOR's
            perimeter](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Remote access by third parties participating in the provision of the service to the SPONSOR's
            perimeter](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Data deletion procedure at contract 
    termination](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Applicable law](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. In general](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Compliance with applicable laws and 
        regulations](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. GDPR](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Protection against non-European 
        law](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. SIGNATURES](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Preliminary and Glossary

## 3.1. Preliminary

This document formalizes the Service Agreement associated with the OpenIaaS service currently undergoing SecNumCloud qualification.

The Service is undergoing SecNumCloud qualification (see the certificate in the Annex).

This service agreement complements and is supplementary to the general terms and conditions of sale and use of the Service Provider. It is understood that contractual documents are to be interpreted coherently among themselves. In case of contradiction or divergence between the terms of the contractual documents, the documents will prevail over each other in the following order:

1.  General Terms and Conditions of Sale and Use (CGVU)

2.  SecNumCloud IaaS Service Agreement

3.  SecNumCloud OpenIaaS Service Agreement

4.  SecNumCloud PaaS Service Agreement

5.  Specific Service Agreement - Bare Metal

6.  Specific particular agreement

7.  Security Assurance Plan (PAS)

8.  Specific Usage Conditions (CPU)

9.  Data Protection Agreement

## 3.2. Glossary

In the present Service Agreement, the **SPONSOR**, the **Service Provider**, and the **Parties** are identified in the Contract to which this Service Agreement is annexed.

The expressions used in this Service Agreement will be interpreted according to the definitions given below:

- **Change:** Any addition, modification, or deletion impacting the Service, having been authorized, planned, or taken care of.

- **Standard Change:** Change subject to a procedure, whose production release modalities and impacts (including financial) are known and accepted in advance by the Parties. It is then integrated into the catalog of standard changes and may, in some cases, have a GTI and a GTR.

- **Contract:** refers to the contract entered into by the SPONSOR with the Service Provider to enable the SPONSOR to benefit from the Service, and to which this Service Agreement is annexed.

- **Service Agreement:** This document, established within the framework of a specific contract or the General Terms and Conditions of Sale and Use (CGVU), and in compliance with the requirements of the SecNumCloud Referential.

- **Service Request:** request for evolution subject to a procedure, whose execution: i) does not modify the CMDB, ii) the operating mode, costs, and risks are known and accepted in advance and do not require specific rollback modalities iii) the execution is subject to a service level agreement and included in the contract fee when performed during business hours and business days.

- **Availability:** Ability to ensure the availability and maintenance of the Service's optimal performance, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).

- **Technical Data:** includes all data manipulated to deliver the Service, notably the identity of the beneficiaries and the technical infrastructure administrators, technical infrastructure logs, access configuration, directory, certificates...

- **Event:** An "event" is any detectable or identifiable occurrence that may be significant for Service management.

- **Hypervisor:** Operating system enabling the execution of virtual machines on a computing blade.

- **Incident:** Any unexpected event that disrupts the normal functioning of the Service or compromises data security.

- **Security Incident:** Any event within the scope of the Service:

    - Intentionally malicious in nature;
    - Accidental, compromising the integrity, confidentiality, or traceability of the Service or data of the SPONSOR;
    - Compromising existing security measures. Non-malicious origin Availability breaches are not considered a Security Incident (hardware failure, bug, malfunction, natural disaster...).

- **SPONSOR Interface:** Service administration interface provided to the SPONSOR by the Service Provider, comprising a web administration console and an API.

- **Production Release:** administration action(s) for the realization of the Change when it is approved (the change, in the ITIL sense, only concerns change management and not its realization/implementation).

- **Problem:** cause of one or more recurring Incidents, cause of a potential Incident (risky situation) requiring analysis and resolution to prevent recurrence.

- **Region:** refers to a geographically delimited set of cloud availability zones, providing network, compute, and storage services to optimize latency, performance, and local regulatory compliance.

- **OpenIaaS Service:** refers to the IaaS service based on open source technology, undergoing SecNumCloud qualification, delivered to the SPONSOR by the Service Provider from technical infrastructures maintained by the Service Provider, as described in the "Service Description" section of this Service Agreement.

<!-- -->

- **Disaster:** refers to a severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected Party.

<!-- -->

- **Supervision:** Monitoring of an Information System or Service, involving the collection of various data such as measurements and alarms. This activity is limited to observation and tracking, without directly intervening in the monitored elements, a prerogative belonging to Administration operations.

- **Tenant:** An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security.

- **Availability Zone (AZ):** A specific and isolated section of the cloud computing infrastructure, designed to ensure the high availability and resilience of services through geographic resource distribution.

# 4. Acronyms

  -----------------------------------------------------------------------------
  **Acronym**   **Definition**
  -------------- --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Comité consultatif sur les
                 changements

  **CMDB**       Configuration Management Database -- Base de données de
                 gestion des configurations

  **COPIL**      Comité de pilotage

  **COSTRAT**    Comité stratégique

  **COPROJ**     Comité Projet

  **DB**         Database (base de données)
                 
  **DPA**        Data Protection Agreement

  **DRP**        Disaster Recovery Plan (PRA) (Plan de reprise d'activité)

  **GTE**        Garantie de Temps d'Escalade

  **GTI**        Garantie de Temps d'Intervention

  **GTR**        Garantie de Temps de Résolution

  **ITIL**       Information Technology Infrastructure Library - Bonnes
                 pratiques pour la gestion des SI

  **IaaS**       Infrastructure as a Service

  **MCO**        Maintien en condition opérationnelle

  **MOA**        Maitrise d'Ouvrage

  **MOE**        Maitrise d'Œuvre

  **MSP**        Managed Services Provider

  **OS**         Operating system (système d'exploitation)

  **PAQ**        Plan d'Assurance Qualité

  **PaaS**       Platform as a Service

  **PAS**        Plan d'Assurance Sécurité

  **PASSI**      Prestataire d'Audit de Sécurité des Systèmes d'Information

  **RFC**        Request For Change -- Demande de changement

  **RGPD**       Règlement Général de Protection des Données (personnelles)

  **RPO**        Recovery Point Objective -- Fraicheur des données restaurées
                 en cas de Sinistre

  **RTO**        Recovery Time Objective -- Délai de rétablissement du service
                 en cas de Sinistre

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Accord sur les niveaux de services

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Tierce Maintenance dApplication

  **UO**         Unité d'Œuvre

  **VABE**       Validation d'Aptitude à la Bonne Exploitabilité

  **VABF**       Validation d'Aptitude au Bon Fonctionnement

  **VM**         Virtual Machine (Machine virtuelle)

  **VSR**        Validation de Service Régulier
  -----------------------------------------------------------------------------

# 5. Purpose of this Service Agreement

This Service Agreement establishes the terms and conditions under which the Service Provider undertakes to deliver the Service to the SPONSOR. Its purpose is to:

- Specify the performance requirements expected by the SPONSOR in terms of functionality and Service reliability;

- State the obligations of the Service Provider to meet the agreed Service levels;

- Identify the regulatory standards specifically applicable to the delivered Service;

- Ensure uniformity and integrity in the evaluation of Service quality;

- Guarantee the excellence of the provided services, evaluated through quantitative performance indicators.

It is stipulated that, in the event the Service Provider's SecNumCloud qualification is withdrawn, the Contract may be terminated automatically, without incurring penalties, by the SPONSOR. In such
telle éventualité, le Service Provider undertakes to inform the CLIENT
of this disqualification by sending an official notification via
registered mail with acknowledgment of receipt requested.

It should be noted that a modification or adjustment of the
SecNumCloud qualification will not be interpreted as a revocation of the
initial qualification.

# 6. Audit

The Service Provider undertakes to allow the CLIENT, or any third-party
auditor who is not a competitor of the Service Provider and who has been designated by the Service Provider,
to review all necessary documents to attest to full compliance with
the obligations related to conformity with the provisions of Article 28 of the General Data Protection Regulation (GDPR), thus facilitating audit activities.

By accepting this Service Agreement, the CLIENT explicitly authorizes:

1.  The National Cybersecurity Agency of France (ANSSI) as well as the competent qualification entity to verify the conformity of the Service and its information system with the SecNumCloud framework.
2.  An information system security audit provider, duly qualified as PASSI and expressly designated by the Service Provider,
    to conduct security audits on the Service.

# 7. Service Description

## 7.1. Shared Responsibility Model

The Service offered by the Service Provider is characterized by the provision of the following services, which align with the principle of shared responsibility presented in the SecNumCloud framework:

-   Provision of computing resources;

-   Provision of storage spaces;

-   Access to network and internet connectivity services;

-   Offering a dedicated backup service for virtual machines.

The shared responsibility model applied between the Service Provider and the CLIENT within the framework of the Service is presented in §7.1.

It is understood that the Service Provider will leverage its expertise to perform the Services according to best professional practices and in compliance with the standards of the SecNumCloud framework.

## 7.2. Detailed Presentation of the Service Scope

  ------------------------------------------------------------------------
  Compute          Computing resource of the CLIENT Tenant
  ---------------- -------------------------------------------------------
  Storage          Production data of the CLIENT Tenant

  Object storage   Provision of a multi-AZ sovereign object storage
  S3               infrastructure compatible with standard S3 APIs.

  Backup           Subscription to S3 Object Storage required

  Network          Network resource of the CLIENT Tenant
  infrastructure           

  Console          The service allowing the CLIENT to access its OpenIaaS
  CLIENT           service and administer it via the Shiva interface

  Support          The support service accompanying the previous services
                    and only those (\*)
  ------------------------------------------------------------------------

\_(\*) Within the scope of the Service undergoing SNC qualification
and the responsibilities of the Service Provider in this regard\_

### 7.2.1. Datacenter Infrastructures

The Service includes the provision, for each Availability Zone, of the qualified services specified below:

-   Datacenter site located in France for the FR Region, compliant with the latest technological standards, offering a resilience level equivalent to or higher than Tier 3 of the Uptime Institute;
-   Provision of technical rooms within datacenters dedicated to hosting the technical equipment essential for service production, including computation, storage, networking, cabling, and other necessary components;
-   Secured power supply, guaranteed by two distinct electrical circuits, ensuring service continuity;
-   Provision of air conditioning services, adjusted to meet the norms and recommendations of equipment manufacturers, to maintain an optimal environment for technical devices;
-   Continuous monitoring and detailed metrology, allowing for precise tracking and proactive management of the performance and security of the provided service.

The Service Provider ensures the provision of advanced fire detection and extinguishing services, designed to effectively identify and neutralize any fire outbreak within the installations. These systems are essential for guaranteeing the safety of the equipment and data. They include high-precision smoke detectors and extinguishing devices that can act quickly without damaging the IT equipment. This service is crucial for preventing fire risks, minimizing potential damage, and ensuring operational continuity.

The CLIENT is informed that all implemented security measures and procedures, including annual switchover tests to backup generators, are essential for ensuring the continuity and integrity of the provided services. These practices are designed to minimize downtime risks and ensure optimal responsiveness in case of an Incident. By accepting these terms, the CLIENT acknowledges the importance of these measures and agrees to cooperate fully to facilitate their implementation. The CLIENT is also encouraged to review the provided security recommendations and integrate them into their own risk management strategy.

### 7.2.2. Service Management Software Infrastructure

The Service Provider provides the CLIENT with the administration console and API necessary for using the Service. It also undertakes to maintain this administration console and API in optimal operational condition and to ensure their continuous security. This administration console and API are collectively referred to as the "CLIENT interface."

The Service Provider alerts the CLIENT that abnormal use of the CLIENT interface, particularly in cases of overloading its command APIs (hammering), can trigger automatic security measures resulting in blocking access to the command APIs or the Service. It should be noted that this situation does not constitute a Service unavailability but a protective action for the Service and the Service Provider's infrastructure; therefore, the CLIENT cannot consider it as an unavailability in their calculations.

Moreover, the Service Provider informs the CLIENT that perfectly identical (duplicate) requests sent to its APIs are limited to one per second (Throttling). If the CLIENT submits identical requests at a higher frequency, their rejection cannot be interpreted as Service unavailability.

### 7.2.3. Computing Infrastructures

The Service includes the provision, in the availability zones subscribed to by the CLIENT, of the necessary equipment to execute workloads in the form of virtual machines.

This includes:

-   Provision of technical chassis necessary for the proper operation of the compute blades;
-   Provision of compute blades in quantities specified by the CLIENT and distributed according to the availability zones of their choice. It should be noted that these compute blades are exclusively dedicated to the CLIENT;
-   Provision of hypervisor-type operating systems, as well as the guarantee of maintaining operational and security conditions for the software infrastructure necessary to manage these operating systems. It should be highlighted that, even though the Service Provider is responsible for the operational maintenance and overall security of the Service, it does not have specific knowledge concerning the CLIENT's production environments or workload requirements. Therefore, the responsibility for deciding on the update of the hypervisor compute blade operating systems, which may require a reboot, rests entirely with the CLIENT. This operation can be performed via the CLIENT Interface.

The choice of the compute blade model, selected from the catalog offered by the Service Provider, is the responsibility of the CLIENT.

### 7.2.4. Storage Infrastructure

The service includes the provision to the CLIENT of a shared SAN (Storage Area Network) storage infrastructure, offering various performance levels. This service includes:

-   Implementation and maintenance in an operational and secure state of the dedicated SAN network;
-   Installation and management of storage arrays shared among clients, including maintaining them in operational and secure conditions, as well as their supervision and metrology;
-   Deployment of automated systems for allocating LUNs (Logical Unit Numbers) dedicated to the CLIENT's use, according to the volumes subscribed by the CLIENT.

### 7.2.5. Global Network Infrastructure

The Service Provider deploys a global network within the framework of the Service, facilitating the CLIENT's accessibility to their hosted systems. This service includes:

-   Provision, maintenance in operational and secure condition of all optical fiber links interconnecting the different Availability Zones;
-   The provision, operational maintenance, and security maintenance of the technical equipment necessary for the proper functioning of the network and the isolation of different clients.

The network interconnection of the Tenant CUSTOMER, to the Internet or private networks, and the network equipment, operator links, and other technical components realizing this interconnection, are not part of the Service's scope. This network interconnection is implemented in accordance with the provisions set out in the Contract.

### 7.2.6. Backup Infrastructure

The Provider makes available to the CUSTOMER an integrated, dedicated, and managed backup service intended to protect its virtual machines. The Provider ensures the operational and security maintenance of this backup service. The Provider guarantees that the CUSTOMER's backups will be located outside the Availability Zone of the backed-up workloads, provided the CUSTOMER has subscribed to the appropriate Work Units.

This backup service is limited to the backup of virtual machines and the topology configurations of the OpenIaaS environment of the CUSTOMER's Tenants within the Scope of Service. The development and implementation of an adequate backup policy by the CUSTOMER depend on subscribing to specific work units. Therefore, it is the CUSTOMER's responsibility to ensure the availability of the necessary technical resources from the Provider to implement its backup policy or adjust it according to the available means.

The Provider commits to notifying the CUSTOMER in case of capacity constraints and providing advisory assistance for resource optimization. The Provider's obligations will be limited to implementing the needs expressed by the CUSTOMER in terms of backup policy, within the subscribed resources.

### 7.2.7. Implementation of disaster recovery or business continuity solutions

The Provider supplies the CUSTOMER with all the necessary technical solutions to ensure an optimal distribution of its resources across various Availability Zones. It is the CUSTOMER's responsibility to efficiently manage this resource distribution, for which he has the possibility to exploit the Provider's available tools for this purpose.

## 7.3. Limitations of services in the OpenIaaS model under qualification

### 7.3.1. Managed services in RUN

It is important to note that the Service excludes:

-   Hosting of the CUSTOMER's physical components; 

-   Network interconnection of the Tenant CUSTOMER, to the Internet or private networks, including operator links;

-   Any type of managed service, or TMA;
  
-   Any assistance on virtual machines at the OS level and above in the IaaS responsibility stack, even if it is simple supervision.

However, it is absolutely not excluded that the CUSTOMER resorts to such services from the Provider's MSP offer to intervene in managed services mode on its Tenants. These services will not be covered by this Service Agreement and its bilateral commitments/clauses.

### 7.3.2. Backup configuration

By default, the Provider implements the setup of the IaaS resources for the CUSTOMER, reserving resources and configuring deployments to use the Availability Zones. It is the CUSTOMER's responsibility to choose the Availability Zones through the CUSTOMER interface.

### 7.3.3. Backup service configuration

The backup service is limited to the backup of virtual machines and topology configurations representing the OpenIaaS environment of the CUSTOMER's Tenants within the Service scope.

The backup service and the completion of the CUSTOMER's backup policy are subject to the subscription of storage space on mass storage necessary to ensure the service. Therefore, it is the CUSTOMER's responsibility to subscribe to the necessary technical means from the Provider to ensure the backup policy within its IT perimeter or to adjust the backup policy to the implemented means. The Provider commits to informing the CUSTOMER in case of technical capacity limits.

The Provider will implement the necessary technical and human resources to back up the hosted system within the limits of the resources subscribed to by the CUSTOMER.

Moreover, in the cases not covered by the Provider, it is the CUSTOMER's responsibility to define its backup strategy and configure the backups of the VMs or make a Service Request to the Provider, so that the backup configuration for physical servers is implemented if the CUSTOMER has a managed service contract allowing the Provider to act via the CUSTOMER interface, which is the administration console made available under this Service Agreement and has functionalities to configure the backups.

Furthermore, this service is only committed to translating, through the configuration via the CUSTOMER interface, the configuration clearly specified by the CUSTOMER.

For flexibility reasons in the Provider's offering, the CUSTOMER has the option to associate a non-backup policy on certain VMs. In this case, it is up to the CUSTOMER to assume this choice. The Provider will not back up the VMs associated with the "no backup" policy. The Provider alerts the CUSTOMER that choosing the "no backup" policy or opting for manual backup exposes the CUSTOMER to a definitive data loss in case of an Incident on the lower layers or on the layers under its responsibility in the IaaS model. In such a case, it will be impossible to hold the Provider responsible for data restoration as there will be nothing to restore. The Provider recommends always backing up the VMs.

For any subject concerning the OS installed on a virtual machine and any software or program running "above the OS," it is the CUSTOMER's responsibility to perform administration and supervision operations within the European Union if it wishes to ensure that the entire vertical stack of the IS is operated and managed from the European Union. Administration operations outside the Provider's responsibility scope under this Service Agreement are indicated in the "Shared Responsibility Model" section of this Service Agreement.

## 7.4. Service implementation

### 7.4.1. Technical prerequisites

For the Service implementation, the CUSTOMER acknowledges that it will need to:

-   Operate with Xen virtualization in the versions supported by the publisher and provided by the Provider under the Service;

-   Use the backup tool through the Provider;

-   Declare fixed IPs from which the Provider will authorize access to the CUSTOMER interface (whitelist filtering). Modifications to this IP list must be made through the menu provided for this purpose in the console or through Service Requests for subsequent changes. At service initialization, the Provider will have been informed of at least one IP address as described.

## 7.5. Service localization in France

It is noted that none of the operations and physical components involved in the provision of the Service, subject to this Service Agreement, are located outside the European Union.

This includes in particular the support, operational supervision, and security supervision (SOC) of the technical infrastructure delivering the Service. As a result, all storage, administration tasks, supervision, and processing are carried out in France.

### 7.5.1. Localization of Datacenters hosting the Service

With the exception of the operations of the Provider's employees and offices, all production operations (including data storage and processing) and technical components delivering the Service are located in Datacenters based in France.

### 7.5.2. Localization of Cloud Temple offices operating the service

Cloud Temple employees intervening on the Service perimeter operate from Cloud Temple offices located exclusively in France. These offices are located in France, in Tours, Lyon, Caen, and Paris La Défense.

The CUSTOMER is informed of the possibility for Cloud Temple employees to work remotely. However, the Provider guarantees the same level of security regarding remote access, particularly concerning VPN access. These remote accesses are implemented in accordance with the requirements of the SecNumCloud reference.

## 7.6. Support

### 7.6.1. Nature of the support accompanying the service

The Provider offers a technical support service aimed at assisting the CUSTOMER in managing, troubleshooting, and optimizing their deployed resources. This service covers a wide range of activities, from initial service configuration assistance to advanced technical support for resolving specific issues.

Here is a description of the features and functionalities of the support service:

-   Assistance with the initial implementation of the Service;
-   Incident resolution assistance;
-   Problem resolution assistance;
-   Monitoring and advisory support for the optimization of the technical foundation.
Dans le cadre du service de support, le Prestataire ne se substitue pas
au COMMANDITAIRE dans l'usage du Service. Le COMMANDITAIRE reste
entièrement responsable de la configuration, de l'exploitation de ses VM
et de ses Tenants, et de la gestion de tous les éléments (données et
applications incluses) qu'il a stockés ou installés sur les
infrastructures du Prestataire. Le service de support technique est
fourni en accord avec les Conditions Générales de Vente et
d'Utilisation, le Prestataire étant tenu à une obligation de moyens.

Le COMMANDITAIRE s'engage à utiliser le service de support technique de
manière raisonnable, s'abstenant notamment de solliciter des services
non souscrits auprès du Prestataire et de faire intervenir les équipes
du Prestataire auprès de ses propres clients ou de tiers non inclus dans
le Contrat. Le Prestataire se réserve le droit de rejeter toute demande
de service ne respectant pas ces critères.

Le niveau d'engagement du support est conditionné à la souscription des
unités d'œuvre de support associées.

### 7.6.2. Sollicitation du service support technique

Le support technique est accessible par le biais d'un système de tickets
via la console COMMANDITAIRE et est disponible durant les heures
normales de bureau hors jours fériés (8h - 18h ; Lundi -- Vendredi ;
calendrier et horaires français). Pour les urgences survenant en dehors
des heures ouvrées, notamment les incidents affectant significativement
la production, le service d'astreinte peut être joint via un numéro
communiqué au COMMANDITAIRE à l'initialisation du Service.

Pour chaque demande ou Incident, il est impératif de générer un ticket
auprès du support du Prestataire. L'initialisation de ce ticket,
comprenant toutes les informations nécessaires, est essentielle et
marque le début de l'évaluation des engagements du Prestataire.

Dès que le Prestataire reçoit une demande ou une notification
d'Incident, que ce soit par le biais de la console de gestion ou à la
suite d'un appel téléphonique, un ticket est automatiquement créé. Lors
de la déclaration d'un Incident, il est essentiel que le COMMANDITAIRE
fournisse au prestataire un maximum de détails sur le problème
rencontré. Cette démarche est cruciale pour permettre une évaluation
adéquate de la situation, sa priorisation et un diagnostic efficace.

Le COMMANDITAIRE reçoit alors une confirmation par courriel, indiquant
la création du ticket et son numéro unique. Le COMMANDITAIRE peut
consulter le statut et l'historique de ses demandes et déclarations
d'Incidents directement depuis la console de gestion.

### 7.6.3. Processus de gestion des Incidents

Lors d'une déclaration d'un Incident, l'équipe de support technique du
Prestataire initie une investigation pour identifier la cause du
problème et établir un diagnostic. Le COMMANDITAIRE doit collaborer
activement avec le Prestataire en fournissant toutes les informations
nécessaires et en effectuant les tests requis. Le Prestataire peut
accéder au Service du COMMANDITAIRE pour diagnostiquer l'Incident.

Si les Services du Prestataire sont jugés fonctionnels et que l'Incident
ne lui est pas imputable, le COMMANDITAIRE en sera informé. À la demande
du COMMANDITAIRE, le Prestataire peut proposer des Services
Professionnels pour identifier l'origine du problème, facturable sur
accord préalable par tranche de 30mn.

Dans le cas où l'Incident est de la responsabilité du Prestataire ou de
l'un de ses sous-traitants, celui-ci complète le diagnostic et s'attèle
à la restauration du Service sans frais supplémentaires. Le diagnostic
s'appuie sur les échanges entre les Parties et les données du
Prestataire, ces éléments étant considérés comme probants par accord des
Parties.

### 7.6.4. Processus de priorisation des traitements

La détermination du niveau de priorité d'un dossier repose sur une
analyse matricielle qui évalue l'impact de l'Incident et son degré de
criticité :

-   Les niveaux d'impact sont définis de la manière suivante :

  -------------------------------------------------------------------------
  Niveau     Description
  d'impact   
  ---------- --------------------------------------------------------------
  Impact I1  Le ou les services du Prestataire sont interrompus

  Impact I2  Le ou les services du Prestataire sont dégradés

  Impact I3  Le ou les services du Prestataire sont actuellement stable,
             mais montrent des signes de potentiel déclin à long terme
  -------------------------------------------------------------------------

-   Les niveaux de Criticités sont définis de la manière suivante :

  -----------------------------------------------------------------------
  Niveau de   Description
  criticité   
  ----------- -----------------------------------------------------------
  Criticité   Le ou les services du Prestataire se dégradent à une
  C1          vitesse préoccupante

  Criticité   Le ou les services du Prestataire se détériore
  C2          progressivement au fil du temps

  Criticité   Le ou les services du Prestataire présentes un ou plusieurs
  C3          inconvenient sans conséquence significative
  -----------------------------------------------------------------------

-   Sur la base d'une analyse approfondie de la situation, prenant en
    compte les éléments déterminant l'Impact et la Criticité, une
    priorité est attribuée au ticket conformément à la matrice de
    décision ci-après :

  -------------------------------------------------------------------------
  Niveau d'impact  Niveau de         Impact I1    Impact I2    Impact I3
  criticité                                                    
  ---------------------------------- ------------ ------------ ------------
  Criticité C1                       Priorité     Priorité     Priorité
                                     **P1**       **P2**       **P3**

  Criticité C2                       Priorité     Priorité     Priorité
                                     **P2**       **P3**       **P4**

  Criticité C3                       Priorité     Priorité     Priorité
                                     **P3**       **P4**       **P5**
  -------------------------------------------------------------------------

Les engagements de niveau de service correspondant à chaque niveau de
priorité sont détaillés dans le chapitre suivant.

### 7.6.5. Langue et localisation du service de support

Le support est fourni par le Prestataire au COMMANDITAIRE a minima en
langue française. Le support peut être également fourni en langue
anglaise.

Les opérations du service de support du Prestataire pour l'offre de
service d'infrastructure qualifiée SecNumCloud sont situées dans l'Union
Européenne.

# 8. Engagements et niveaux de services

Le Prestataire s'engage à garantir une surveillance continue de la
performance et de l'intégrité sécuritaire de son infrastructure
technique délivrant le Service, veillant à leur fonctionnement optimal.

L'indisponibilité d'un service, faisant l'objet d'un indicateur de
performance, est reconnue dès son identification par le système de
supervision du Prestataire, ou suite à une notification par un
utilisateur du COMMANDITAIRE. Le début de l'indisponibilité est fixé au
moment le plus précoce entre ces deux événements, afin de garantir un
décompte précis et juste du temps d'indisponibilité.

La fin de l'indisponibilité est officiellement marquée par la
restauration complète du service, confirmée soit par les outils de
supervision du Prestataire, soit par un retour utilisateur, assurant
ainsi une reprise effective des opérations et une mesure fidèle de la
durée de l'interruption.

## 8.1. Engagements de disponibilité de l'infrastructure

Le Prestataire s'engage à maintenir un niveau de disponibilité et de
performance conforme aux standards définis pour chaque période
spécifiée. Les engagements de niveau de service (Service Level
Agreements, SLAs) s'appliquent sous réserve que le COMMANDITAIRE
implémente ses systèmes à travers au moins deux des Zones de
disponibilité présentes dans la Région concernée.

En l'absence de respect de ces conditions par le COMMANDITAIRE, celui-ci
se verra dans l'incapacité de revendiquer l'application des SLAs
concernés, lesquels sont spécifiquement identifiés par un astérisque
(\*). L'accessibilité aux SLAs se fait via l'interface COMMANDITAIRE.
Les mesures s'entendent calculées mensuellement :

-   \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Disponibilité de la
    puissance de calcul (Compute) : taux de disponibilité garanti de
    99,99%, calculé sur une base 24h/24, 7j/7.
-   \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Disponibilité du stockage :
    taux de disponibilité garanti de 99,99%, calculé sur une base
    24h/24, 7j/7.
-   **SLA 3 : IC-INFRA_SNC-03** -- Fiabilité de la sauvegarde : taux de
    disponibilité garanti de 99,99%, calculé sur une base 24h/24, 7j/7.
-   \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Disponibilité de
    l'infrastructure réseau : taux de disponibilité garanti de 99,99%,
    calculé sur une base 24h/24, 7j/7.
-   **SLA 5 : IC-INFRA_SNC-05** -- Accès Internet : taux de
    disponibilité garanti de 99,99%, calculé sur une base 24h/24, 7j/7.

***Remarques*** :

-   *En réponse une attaque par déni de service distribué (DDoS), le
    Prestataire se réserve le droit d'ajuster sa configuration de
    routage internet pour limiter l'impact de cette attaque et
    sauvegarder son infrastructure. En particulier, si une adresse IP
    appartenant au COMMANDITAIRE est ciblée, le Prestataire peut
    recourir à la technique de blackholing via la communauté BGP pour
    bloquer tout le trafic vers l'adresse IP visée en amont chez ses
    fournisseurs, dans le but de protéger les ressources du
    COMMANDITAIRE ainsi que celles d'autres COMMANDITAIREs et de
    l'infrastructure du Prestataire. Le Prestataire encourage vivement
    le COMMANDITAIRE à adopter des mesures similaires, telles que
    l'utilisation de logiciels de pare-feu d'applications web
disponibles sur le marché, et à configurer soigneusement ses groupes
    de sécurité via l'API de commande.*

-   *The Service Provider emphasizes the necessity for the CLIENT to
    minimize flow openings, notably by avoiding making **SSH**
    administrative ports (TCP port 22) and **RDP** (TCP port 3389)
    accessible from the entire Internet (subnet 0.0.0.0/0), as well as
    internal protocols such as **SMB** (TCP/UDP port 445) or **NFS**
    (TCP/UDP port 2049).*

## 8.2. Availability Commitment for the CLIENT Interface

-   SLA 6: IC-INFRA_SNC-06 -- Access to the administration console of
    the Service: a guaranteed availability of 97%, ensured continuously, 24
    hours a day and 7 days a week.
-   SLA 7: IC-INFRA_SNC-07 -- Access to the Service management APIs: an
    availability of 99.9%, calculated on a 24h/7d basis.

## 8.3. Support Availability Commitment

-   **SLA 8: IC-INFRA_SNC-08** -- Here are the performance commitments
    of the Service Provider's technical support for incidents, excluding
    scheduled maintenance:

  ------------------------------------------------------------------------
  Priority        Intervention Time Guarantee (GTI)      Performance
                                                         Goal
  --------------- ----------------------------------- ---------------------
  Priority        30min                                95%
  **P1**                                             

  Priority        2h                                  90%
  **P2**                                             

  Priority        4h                                  90%
  **P3**                                             

  Priority        24h                                 85%
  **P4**                                             

  Priority        48h                                 85%
  **P5**                                             
  ------------------------------------------------------------------------

-   **SLA 9: IC-INFRA_SNC-09** -- Here are the performance commitments
    of the Service Provider's technical support for service requests:

  ------------------------------------------------------------------------
                   Intervention Time Guarantee (GTI)   Performance
                                                      Goal
  ---------------- ---------------------------------- --------------------
  Service Request  4h                                 90%

  ------------------------------------------------------------------------

*Note*:

-   *The Guaranteed Intervention Time (GTI) is calculated from the
    difference between the moment the CLIENT opens the ticket and the
    first intervention by the Service Provider's support.*
-   *Incident investigation concerning the CLIENTs will not include
    remote intervention on the CLIENT's hosted servers. This assistance
    will be limited to explaining available metrics related to the
    CLIENT's environment to facilitate understanding of incidents or
    performance issues encountered. Based on the results of this
    analysis, recommendations may be suggested.*

## 8.4. Availability Commitment for S3 Object Storage

-   **SLA 10: IC-INFRA_SNC-10** -- Here are the availability commitments
    for S3 object storage:

  ------------------------------------------------------------------------------
  Indicator          Commitment                           Availability Goal
  ------------------ ------------------------------------ -------------------
  IC-INFRA-SNC-10.1  Storage durability of an object in  99.9999999% / year
                     a region                             

  IC-INFRA-SNC-10.2  S3 Object Storage API Availability  99.99%

  IC-INFRA-SNC-10.3  Maximum object access latency in    150 ms
                     a region                         
  ------------------------------------------------------------------------------

Remarks:

-   The Object Storage Service is specifically designed for object
    storage and should be used solely for this purpose, **categorically
    excluding its use in block mode**. Using block mode by circumvented
    methods, including for example using *"FUSE" in a Linux environment*,
    constitutes a violation of the terms of use stated. No incident,
    malfunction, or damage resulting from such non-compliant use will be
    covered by the Service Level Agreements (SLA) defined in this service
    agreement.
-   The durability guarantee is conditioned on the service usage in
    accordance with current best practices and standards and explicitly
    excludes any modification of the data, whether intentional or
    accidental, resulting from actions taken by the CLIENT.

## 8.5. Clarification on Backup Commitment

The backup strategy deployed for the CLIENT is conditioned by
subscription to adequate work units.

The Service Provider commits to providing a backup solution that will
allow the CLIENT to apply the desired backup policies.

It is clarified that the Service Provider's scope is limited to the
provision of a backup service and it is up to the CLIENT to monitor via
the CLIENT interface the proper execution of the associated policies.

It is clarified that the management of storage capacity of the storage
space dedicated to backups remains the responsibility of the CLIENT.
The Service Provider makes the usage rate available via the console.

*Example: Non-backup of a virtual machine:*

*The CLIENT is responsible for verifying/monitoring the proper execution
of backup policies. In the event that the CLIENT notices that a virtual
machine is not being backed up, it is up to them to check the cause. The
CLIENT may request assistance from the Service Provider's Support
according to the subscribed support level for assistance.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9** will exclusively apply in the case
of a backup service Incident.

# 9. Organization of the Contractual Relationship

## 9.1. Responsibilities of the Service Provider

The Service Provider commits to:

-   adequately informing its CLIENT (e.g., in case of capacity resource
    limits delivering the Service).

-   formally informing the CLIENT and within a month of any legal,
    organizational, or technical change that may impact the Service's
    compliance with the requirements for protection against extra-European
    laws (19.6 of the SNC v3.2 standard).

-   providing the CLIENT with interfaces and service interfaces that are
    at least in French.

-   taking into account the specific sectoral requirements related to the
    types of information entrusted by the CLIENT as part of the Service
    implementation, within the limits of the Service Provider's
    responsibilities, and the provisions set forth in the Contract.

-   examining the specific sectoral requirements related to the types of
    information entrusted by the CLIENT in the framework of the Service
    implementation, later expressed by the CLIENT, and indicating the
    necessary actions for their consideration.

-   not disclosing any information relating to the service to third
    parties, unless with formal and written authorization from the CLIENT.

-   providing all the necessary information for conducting compliance
    audits according to the provisions of Article 28 of the GDPR.

-   reporting to the CLIENT through this Service Agreement of any
    security Incident impacting the Service or the CLIENT's use of the
    Service (including CLIENT data).

-   authorizing a qualified information systems security audit provider
    (PASSI), mandated by the Service Provider, to audit the service as
    well as its information system, according to the Service Provider's
    SecNumCloud control plan. Additionally, the Service Provider commits
    to providing all the necessary information to carry out compliance
    audits with the GDPR Article 28 provisions, conducted by the client or
    a third party mandated.

-   as a data processor, in accordance with Article 28 of the General Data
    Protection Regulation (GDPR), to assist and advise the CLIENT by
    alerting them whenever a directive issued by them is likely to
    constitute a violation of data protection rules.

-   notifying the CLIENT within a reasonable timeframe, through the CLIENT
    console or by email to the CLIENT contact, when a project impacts or
    is likely to impact the security or availability level of the Service,
    or to result in a loss of functionality, including potential impacts,
    implemented mitigation measures, and the relevant residual risks.

-   documenting and implementing all procedures necessary to meet the
    legal, regulatory, and contractual obligations applicable to the
    service, as well as the specific security requirements of the CLIENT,
    defined by them and set forth in the contract.

-   not using CLIENT data obtained from the service for purposes other 
    production for testing purposes, except with prior explicit
    authorization from the SPONSOR, in which case the Provider commits
    to anonymize this data and ensure confidentiality during its
    anonymization.

-   to delete the data and Technical Data related to the SPONSOR, in
    accordance with the "data deletion procedure at the end of the
    Contract" described in this Service Agreement upon termination or
    expiration of the Contract.

-   to ensure secure deletion of all SPONSOR data by complete rewriting
    of any media that has hosted its data as part of the Service.

Upon formal and written request from the SPONSOR, the Provider agrees
to:

1.  Make accessible to the SPONSOR the internal regulations and ethical
    charter of the Provider;

2.  Make accessible to the SPONSOR the penalties incurred in case of
    violation of security policy;

3.  Provide the SPONSOR with all events concerning them in the Service's
    logs; the SPONSOR can also independently consult events related to
    their use of the Service through the web interfaces and APIs of the
    Service;

4.  Make accessible to the SPONSOR the procedures allowing compliance 
    with the legal, regulatory, and contractual requirements in force 
    applicable to the Service, as well as the specific security needs 
    of the SPONSOR provided for in the Contract;

5.  Provide elements of risk assessment related to the submission of the
    SPONSOR's data to the legislation of a non-EU country;

6.  Inform the SPONSOR of subsequent subcontractors involved in the
    delivery of the Service, and notify them of any impactful change 
    related to these subcontractors.

> The Provider and all its subsidiaries commit to adhering to the
> fundamental values of the European Union, namely human dignity,
> freedom, democracy, equality, the rule of law, and respect for human
> rights. The service provided by the Provider complies with current
> legislation on fundamental rights and the European Union's values 
> concerning respect for human dignity, freedom, equality, democracy, 
> and the rule of law.

## 9.2. Limitation of the Provider's responsibilities

Due to all the definitions and conditions mentioned in this Service
Agreement, the Provider's responsibilities are limited as follows:

1.  The shared responsibility model, described in the "Shared
    Responsibility Model" section of this Service Agreement, inherently
    limits the Provider's involvement in the operational layers "above"
    the provision of computing, network, storage, and backup resources.
    This particularly excludes and is not limited to:

    -   Managing what is installed on virtual machines (OS, middleware, 
        applications, etc.);

    -   Keeping OS and other software installed by the SPONSOR on its 
        machines within its Tenants up-to-date;

    -   Security of the programs, software, and applications installed 
        on the virtual machines;

    -   Updating virtual machines;

    -   Application-level data backups.

2.  The Provider cannot commit to backing up the SPONSOR's Tenants 
    unless the SPONSOR has previously subscribed to the appropriate
    service units.

3.  The Provider cannot claim ownership of the data transmitted and 
    generated by the SPONSOR. Indeed, these are the property of the 
    SPONSOR.

4.  The Provider emphasizes that it can in no case exploit and/or dispose
    of the data transmitted and generated by the SPONSOR without their
    prior validation, understanding that their disposal is reserved for
    the SPONSOR.

5.  The Provider disclaims any responsibility for the components
    physically hosted and managed by the Provider but directly owned by
    the SPONSOR or a third party with whom the SPONSOR has a contract.
    The hosting of clients' physical components is not part of the
    Service and is therefore outside the scope of this Service Agreement. 
    It is the responsibility of the SPONSOR to evaluate the level of 
    adherence or dependency that these components introduce towards the 
    OpenIaaS Service being qualified for SecNumCloud.

## 9.3. Access Limitation

As part of the Service, the Provider is strictly prohibited from
accessing Tenants belonging to the SPONSOR without prior authorization.
It is the SPONSOR's responsibility to provide necessary access to the
Provider's personnel, according to the specific needs of the hosting and,
if applicable, professional support services, if this option has been 
chosen by the SPONSOR.

The SPONSOR acknowledges that these accesses are granted exclusively for
the needs related to the agreed service provision, thereby ensuring secure
management and compliance with the terms of the agreement.

Remote access by third parties involved in the Provider's service delivery
is strictly prohibited. In case a specific technical requirement necessitates
such access, it can only be established after clearly notifying the SPONSOR,
providing a detailed justification, and obtaining their written consent.

This measure guarantees the control and security of the SPONSOR's data,
ensuring any exception to the rule is duly authorized and documented.

## 9.4. Responsibilities of third parties participating in service delivery

The Provider manages the list of third-party partners involved in service
delivery. These third parties include publishers, providers (of the
Provider), and other suppliers involved in the delivery of the Service.
The Provider applies the following measures to these third parties:

-   The Provider requires third parties participating in the
    implementation of the service, in their contribution to the Service,
    to maintain a security level at least equivalent to that committed
    by the Provider in its own security policy applicable to the Secure 
    Temple service;

-   The Provider contracts with each third party participating in the
    implementation of the service, including audit clauses allowing a
    qualifying body to verify that these third parties comply with legal
    and SNC requirements, enabling the Provider to meet its commitments
    in this Service Agreement.

-   The Provider implements a procedure to regularly control measures
    implemented by third parties participating in the service
    implementation to comply with the Provider's commitments in this
    Service Agreement.

-   The Provider monitors changes made by third parties involved in service
    implementation that may affect the information system's security level
    of the service.

## 9.5. Responsibilities and obligations of the SPONSOR

The SPONSOR has the following obligations as part of the Service:

-   As a reminder, the Provider offers the SPONSOR a virtual machine
    execution platform, and the configuration of these machines is the
    responsibility of the SPONSOR. Each virtual machine cannot operate
    without an associated backup policy. The Provider defines automatic
    backup policies via its interfaces. However, it is the SPONSOR's
    responsibility to activate these backup policies and thereby activate
    the virtual machines.

-   The SPONSOR authorizes ANSSI and the SNC qualifying body to audit
    the Service and the technical infrastructure delivering the Service.

-   The SPONSOR is responsible for informing the Provider of any specific
    sectorial requirements related to the types of information entrusted
    by the SPONSOR that need to be considered by the Provider.

-   The SPONSOR agrees not to ask the Provider for requirements or actions
    that would deviate the Provider from the current SecNumCloud reference
    framework requirements or decrease the security level established by
    compliance with these same reference framework requirements.

## 9.6. Rights of the SPONSOR

At any time during the contractual relationship, the SPONSOR may file a
complaint about the qualified service with ANSSI.

At any time, the SPONSOR may request the Provider to make accessible their
internal regulations and ethical charter.

## 9.7. Data Deletion at End of Contract

At the end of the contract, whether it comes to term or is terminated
for any reason, the Provider commits to securely delete all SPONSOR data,
including technical data. The Provider will ensure to communicate a formal
notice to the SPONSOR, adhering to a twenty-one (21) calendar day notice
period. The SPONSOR's data will then be deleted within a maximum of thirty
(30) days following this notification.

To certify this deletion, the Provider will issue a certificate to the
SPONSOR confirming the data deletion.

# 10. Lifecycle of this Service Agreement

## 10.1. Effective Date of the Service Agreement

This Service Agreement becomes effective the day it is signed by the 
SPONSOR.
Data collection, handling, storage, and processing carried out in the scope of pre-sales, implementation, and Service termination are conducted in compliance with the applicable legislation.

## 10.2. Service Agreement Changes

Changes or additions to the present Service Agreement exclusively stem from the requests made by the governing bodies designated for this purpose. These proposed changes will be reviewed by the Parties, authorized to determine the aspects requiring written formalization.

It is agreed that any change to the Service Agreement, once validated, that alters the initial financial conditions will require the drafting and signing of an amendment to the ongoing Contract.

Factors that may prompt a revision of this Service Agreement include, but are not limited to:

- The evolution of the technical infrastructure delivering the OpenIaaS Service;
- Adjustments made to the services deployed by the Provider to deliver the Service;
- Changes in commitments and applicable penalties;
- Organizational reconfigurations within the SPONSOR or the Provider;
- Expansion or reduction of the Service scope.

Version and revision management of the Service Agreement is recorded at the beginning of the document for ease of tracking.

### 10.2.1. Changes Initiated by the SPONSOR

Changes to the Service Agreement may notably originate from:

- An evolution of the infrastructure managed by the Provider;

- A modification of the services implemented by the Provider;

- A modification of the Provider's service level commitments.

### 10.2.2. Changes Initiated by the Provider

Any change to the Service Agreement is subject to the SPONSOR's acceptance. It is understood that any validated change or addition modifying the financial aspects of the Contract may entail the signing of an amendment.

## 10.3. Reversibility

Moreover, Cloud Temple commits to allowing a revision of the present Service Agreement (including its termination) without penalty for the SPONSOR in case of loss of the SecNumCloud qualification.

Services do not include a reversibility obligation (i.e., assisting the SPONSOR in migrating its system to another Provider) except for providing the SPONSOR with the Provider's interface, enabling the SPONSOR to back up and retrieve its data, including configuration data of their information system via one of the technical methods chosen by the SPONSOR: providing files in one or more documented and usable formats outside the service provided by the Provider, or through the implementation of technical interfaces allowing data access following a documented and exploitable schema (API).

The SPONSOR, as the sole master of its system, must do everything in its power to facilitate this operation as needed (which entails, notably, setting up rigorous documentation for this purpose) and the development of reversibility plans. If the SPONSOR needs additional services, the Provider can offer consulting services in this regard under a specific contract to be negotiated.

# 11. Service Availability, Continuity, and Restoration

## 11.1. Incident and Interruption Management

### 11.1.1. Incidents

#### 11.1.1.1. Types of Incidents Covered by this Service Agreement

- Disasters;

- Failures and breakdowns;

- Security incidents impacting the service's availability, confidentiality, or integrity.

#### 11.1.1.2. Incident Handling

> The Provider informs the SPONSOR as soon as possible about incidents and interruptions through a notification on the SPONSOR console or by email to the SPONSOR contact. The Provider informs the SPONSOR about incident handling through the channel used to notify the incident or the channel indicated in the incident notification.

#### 11.1.1.3. Security Incident Notification Level

The SPONSOR is responsible for choosing the severity levels of Security Incidents they wish to be informed about, for example, through their formalization in a PAS applicable to the Service.

By default, the SPONSOR is informed of:

- Security incidents with impact (impacts I1 and I2 according to the impact scale defined in the processing prioritization process of this Service Agreement);

- Security incidents impacting the confidentiality or integrity of SPONSOR data entrusted within the Service;

- Data breaches for which the SPONSOR is responsible per Article 8 of the DPA Appendix in the context of the Service;

-  

## 11.2. Service Maintenance

### 11.2.1. Nature of Maintenance

Data breaches for which the Provider is responsible for processing and involving the SPONSOR's personal data, per Article 8 of the DPA Appendix. The maintenance provided consists of the implementation of:

- The operational conditions maintenance plan for the Service to ensure good availability indicators as committed by the Provider above;

- The BCP/DRP plan if subscribed by the SPONSOR, triggered according to any incidents that may occur.

### 11.2.2. Remote Access by Cloud Temple to the SPONSOR's Scope

The Provider is prohibited from accessing the Tenants and the SPONSOR interface space under the present Service Agreement.

The SPONSOR shall grant the necessary access to the Provider's personnel. The SPONSOR acknowledges that the accesses will be used for hosting and ultimately for outsourcing (if subscribed by the SPONSOR).

### 11.2.3. Remote Access by Third Parties Participating in Service Delivery to the SPONSOR's Scope

Remote access by third parties participating in Service delivery is not authorized.

If a technical need makes such a scenario necessary, then this type of access would only be performed after notifying the SPONSOR, providing justification, and obtaining their written consent.

# 12. Data Deletion Procedure at Contract End

At the end of the Contract, whether the Contract has expired or for any other reason, the Provider will ensure the secure deletion of all data processed within the Service scope, including the SPONSOR's technical data. The Provider will give formal notice following a twenty-one (21) calendar-day period. The SPONSOR's data will be deleted within a maximum period of thirty (30) days after the notification. The Provider will provide the SPONSOR with a data deletion certificate.

# 13. Governing Law

## 13.1. In General

The law governing and applicable to the present Service Agreement is French law.

## 13.2. Compliance with Applicable Laws and Regulations

The Provider commits to the following points:

- Identifying the legal and regulatory constraints applicable within the Service scope;

- Complying with the legal and regulatory constraints applicable to the data entrusted to the Provider within the limits of the latter's responsibilities on one hand, and the provisions stipulated in the Contract on the other hand;

- Complying with data protection laws and the GDPR;

- Implementing personal data protection measures;

- Implementing a legal and regulatory monitoring process;

- Maintaining appropriate relationships or monitoring with the sectoral authorities related to the nature of the data processed within the Services. This includes, in particular, ANSSI, CERT-FR, and CNIL.

## 13.3. GDPR

Acting as a processor as defined in Article 28 of the General Data Protection Regulation (GDPR), the Provider commits to:

- Ensuring transparency and traceability;

- Appointing a DPO responsible for defining and implementing personal data protection measures;

- Providing assistance and advice to the SPONSOR and alerting them if one of their instructions constitutes a violation of data protection rules if the Provider can identify it;

- Guaranteeing data security (due to the SecNumCloud qualification).

## 13.4. Protection Against Non-European Law

The Provider's statutory headquarters are established within an EU Member State. The Provider's share capital and voting rights are not, directly or indirectly:

- Individually held over 24%;

- Collectively held over 39%;

by third entities having their statutory headquarters, central administration, or main establishment within a non-EU Member State.

If the Provider, within the Service scope, resorts to a third-party company - including a subcontractor - having its statutory headquarters, central administration, or main establishment within a non-EU Member State or belonging to or controlled by a third-party company domiciled outside the EU, the Provider commits to:
-   to ensure that this aforementioned third-party company will have no access
    to the managed data;

-   to have operational autonomy through the ability
    to call upon another subcontractor or to quickly implement an
    alternative technology.

As a reminder, the referenced data are those entrusted to the
Provider by the PRINCIPAL as well as all Technical Data
including information about the PRINCIPALS.

For the purposes of this article, the concept of control is understood
as being that mentioned in II of Article L233-3 of the Commercial Code.

# 14. SIGNATURES

Done at \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, on
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For Cloud Temple, the PROVIDER

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the PRINCIPAL