---
title: SecNumCloud IaaS Service Agreement
---


# 1. IaaS SERVICE AGREEMENT

  -----------------------------------------------------------------------
  **Recipients:**                 **SPONSOR**
  ------------------------------ ----------------------------------------
  **Document Reference**          CT.AM.JUR.ANX CdS-IaaS -
                                  20251701_v3.0.docx_Date DD YYYY

  **Your Contacts:**              *First Name* *Last Name*

                                  Account Manager

                                  e-mail: *firstname.lastname*\@cloud-temple.com

  **Last update date:**           17/01/2025

  **Contractual validation        Date DD YYYY
  date:**
  -----------------------------------------------------------------------


------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Version**    **Date**       **Action**                            **Author**
  ------------- ------------ ------------------------------------ --------------
  v0.1          07/06/2022   Initial drafting                    Lorena ALCALDE

  v0.2          14/09/2022   Enrichment                          Lorena ALCALDE

  v1.0          30/12/2022   Integration of Indicators           Lorena ALCALDE

  v1.1          23/01/2023   Footer modification                 Lorena ALCALDE

  v1.2          22/05/2023   Enrichment                          Lorena ALCALDE

  v1.3          29/06/2023   Enrichment                          Lorena ALCALDE

  v1.4          06/11/2023   Capital Modification and Enrichment Lorena ALCALDE

  v1.5          30/11/2023   Enrichment                          Lorena ALCALDE

  v1.6          21/03/2024   Enrichment                          Lorena ALCALDE

  v2.0          29/03/2024   SNC compliance adjustments          Nicolas
                                                                  ABRIOUX

  v2.0          03/04/2024   Publication                         Lorena ALCALDE

  V3.0          17/01/2025   Enrichment                          Emeline CAZAUX
  ------------- ------------ ------------------------------------ --------------
  ------------------------------------------------------------------------------


------------------------------------------------------------------------

# 2. TABLE OF CONTENTS

-   [1. **IaaS SERVICE
    AGREEMENT**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
-   [2. **TABLE OF
    CONTENTS**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Preliminary and
    Glossary](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Preliminary](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glossary](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Acronyms](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Purpose of This Service
    Agreement](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Service
    Description](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Shared Responsibility
        Model](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Detailed presentation of the Service's
        scope](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Datacenter
            Infrastructures](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Service management software
            Infrastructure](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Compute
            Infrastructures](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Storage
            Infrastructure](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Global network
            Infrastructure](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Backup
            Infrastructure](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
        -   [7.2.7. Implementation of Business Continuity or Disaster
            Recovery
            solutions](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Service limitations in the qualified IaaS
        model](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Managed Services in
            RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Backup
            configuration](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
        -   [7.3.3. Recovery
            configuration](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
    -   [7.4. Service
        implementation](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Technical
            prerequisites](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
    -   [7.5. Service location in
        France](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Location of the Datacenters hosting the
            Service](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Location of Cloud Temple agencies operating the
            service](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Support](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Nature of the support accompanying the
            service](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2. Requesting technical support
            service](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Incident management
            Process](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Incident prioritization
            Process](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Language and location of the support
            service](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Service commitments and
    levels](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Infrastructure availability
        commitments](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. SPONSOR interface availability
        commitment](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Support availability
        commitment](#Xfc8548982b300528a67725f1705f15805f405f0)
    -   [8.4. S3 object storage availability
        commitment](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
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
    -   [9.4. Responsibilities of third parties involved in providing
        the Secure Temple
        service](#Xc662a81cadd2baa300ca83a27240dec61621a56)
    -   [9.5. SPONSOR's Responsibilities and
        obligations](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
    -   [9.6. SPONSOR's
        Rights](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
    -   [9.7. Data deletion at the end of the
        Contract](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
-   [10. Life cycle of this Service
    Agreement](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Effective date of the Service
        Agreement](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Evolutions of the Service
        Agreement](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Evolutions triggered by the
            SPONSOR](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Evolutions triggered by the
            Provider](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Reversibility](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Availability, continuity and service
    restoration](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Incident and interruption
        management](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1.
            Incidents](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Types of Incidents covered by this Service
                Agreement](#X09cc1e22db275b1a463f85596829f3f871ae224)
            -   [11.1.1.2. Incident
                management](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
            -   [11.1.1.3. Security Incident notification
                level](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
    -   [11.2. Service
        Maintenance](#X8f50b0b400c67568e380ddb602ac786ec585905)
        -   [11.2.1. Nature of the
            maintenance](#X903d92edf16182242ecfd404337edbaf2243b81)
        -   [11.2.2. Cloud Temple remote access to the SPONSOR's
            perimeter](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Remote access for third parties involved in service
            provision to the SPONSOR's
            perimeter](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Data deletion procedure at the end of the
    Contract](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Applicable law](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. Generally](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Compliance with applicable laws and
        regulations](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. GDPR](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Protection against non-European
        law](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. SIGNATURES](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Preliminary and Glossary

## 3.1. Preliminary


Le présent document formalise la Convention de service associée au
service IaaS qualifiée SecNumCloud sous l'appellation de « *Secure
Temple *».

Le Service est qualifié SecNumCloud (voir attestation en Annexe).

La présente convention de service complète et est complémentaire aux
conditions générales de vente et d'utilisation du Prestataire. Il est
entendu que les documents contractuels s'interprètent de manière
cohérente entre eux. En cas de contradiction ou de divergence entre les
termes des documents contractuels, les documents prévaudront les uns sur
les autres dans l'ordre suivant :

1.  Conditions Générales de Vente et Utilisation (CGVU)

2.  Convention de Service SecNumCloud IaaS

3.  Convention de Service SecNumCloud OpenIaaS

4.  Convention de Service SecNumCloud PaaS

5.  Convention de Service spécifique - Bare Metal

6.  Convention spécifique particulière

7.  Plan d'Assurance Sécurité (PAS)

8.  Conditions Particulières d'Utilisation (CPU)

9.  Data Protection Agreement

## 3.2. Glossaire

Dans la présente Convention de service, le **COMMANDITAIRE**, le
**Prestataire** et les **Parties** sont identifiés dans le Contrat
auquel est annexe la présente Convention de service.

Les expressions ci-après employées dans la présente Convention de
service seront interprétées conformément aux définitions qui leur sont
attribuées ci-dessous :

-   **Change:** Any addition, modification, or deletion impacting the Service, having been authorized, planned, or taken into account.

-   **Standard change:** Change subject to a procedure, whose production modalities and impacts (including financial ones) are known and accepted in advance by the Parties. It is then integrated into the catalog of standard changes and can, in some cases, have a GTI and a GTR.

-   **Contract:** refers to the contract entered into by the CLIENT with the Provider to enable the CLIENT to benefit from the Service, to which this Service Agreement is annexed.

-   **Service Agreement:** This document, established within the framework of a specific contract or the General Terms and Conditions of Sale and Use (CGVU), in compliance with the requirements of the SecNumCloud Referential.

-   **Service request:** Request for evolution subject to a procedure, whose realization: i) does not modify the CMDB, ii) the operating mode, costs, and risks are known and accepted in advance and do not require specific rollback procedures iii) the realization is subject to a service level agreement and included in the contract fee when performed during business hours and working days.

-   **Availability:** Capability to ensure the availability and maintenance of the Service's optimal performance, in accordance with the criteria and commitments defined in the Service Level Agreements (SLA).

-   **Technical data:** Includes all data manipulated to deliver the Service, notably the identity of beneficiaries and administrators of the technical infrastructure, logs of the technical infrastructure, access configuration, directory, certificates…

-   **Event:** An "event" is any detectable or identifiable occurrence that may be significant for the management of the Service.

-   **Hypervisor:** Operating system allowing the execution of virtual machines on a compute blade.

-   **Incident:** Any unexpected event that disrupts the normal functioning of the Service or compromises the security of the data.

-   **Security incident:** Any event within the scope of the Service:

    -   Of intentionally malicious nature;
    -   Of accidental nature affecting the integrity, confidentiality, or traceability of the Service or the CLIENT's data;
    -   Affecting existing security measures. Non-malicious origin availability breaches are not considered a Security incident (hardware failure, bug, malfunction, natural disaster…).

-   **CLIENT Interface:** Service administration interface made available to the CLIENT by the Provider, consisting of a web administration console and an API.

-   **Production:** Action(s) of administration to implement the Change when it is approved (the change, in ITIL terms, only concerns change management and not its realization/implementation).

-   **Problem:** Cause of one or more recurrent Incidents, cause of a potential Incident (risk situation) requiring analysis and resolution to prevent recurrence.

-   **Region:** Refers to a geographically bounded set of cloud availability zones, providing network, compute, and storage services to optimize latency, performance, and local regulatory compliance.

-   **Service:** Refers to the SecNumCloud qualified IaaS service "Secure Temple," delivered to the CLIENT by the Provider from technical infrastructures maintained by the Provider, as described in the "Service Description" section of this Service Agreement.

-   **Secure Temple:** Refers to the SecNumCloud qualified IaaS service, offered by Cloud Temple, as defined in the certification available on the ANSSI website and provided in the annex of this Service Agreement.

-   **Disaster:** Refers to a serious event of natural or human, accidental or intentional origin, causing significant losses and damage to the affected Party.

-   **Monitoring:** Observation of an Information System or Service, involving the collection of various data such as metrics and alarms. This activity is limited to observation and tracking, without directly intervening on the monitored elements, which is the prerogative of Administration operations.

-   **Tenant:** An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security.

-   **Availability Zone (AZ):** A specific and isolated section of cloud computing infrastructure, designed to ensure high availability and service resilience through geographic resource distribution.

# 4. Acronymes

  -----------------------------------------------------------------------------
  **Acronym**   **Definition**
  -------------- --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Change Advisory Committee

  **CMDB**       Configuration Management Database -- Configuration management database

  **COPIL**      Steering Committee

  **COSTRAT**    Strategic Committee

  **COPROJ**     Project Committee

  **DB**         Database

  **DPA**        Data Protection Agreement

  **DRP**        Disaster Recovery Plan (PRA) (Business Continuity Plan)

  **GTE**        Escalation Time Guarantee

  **GTI**        Intervention Time Guarantee

  **GTR**        Resolution Time Guarantee

  **ITIL**       Information Technology Infrastructure Library -- Best practices for IT management

  **IaaS**       Infrastructure as a Service

  **MCO**        Operational condition maintenance

  **MOA**        Project Owner

  **MOE**        Project Manager

  **MSP**        Managed Services Provider

  **OS**         Operating system

  **PAQ**        Quality Assurance Plan

  **PaaS**       Platform as a Service

  **PAS**        Security Assurance Plan

  **PASSI**      Security Information Systems Audit Provider

  **RFC**        Request For Change

  **RGPD**       General Data Protection Regulation (GDPR)

  **RPO**        Recovery Point Objective -- Freshness of restored data in case of disaster

  **RTO**        Recovery Time Objective -- Service recovery time in case of disaster

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Third-party Application Maintenance

  **UO**         Work Unit

  **VABE**       Validity of Good Operability

  **VABF**       Validity of Proper Functioning

  **VM**         Virtual Machine

  **VSR**        Regular Service Validation
  -----------------------------------------------------------------------------

# 5. Objet de la présente Convention de service

La présente Convention de service établit les termes et conditions selon
lesquels le Prestataire s'engage à délivrer le Service au COMMANDITAIRE.
Son objet est de :

-   Specify the performance requirements expected by the CLIENT in terms of functionality and reliability of the Service;

-   Set out the Provider's obligations to meet the agreed service levels;

-   Identify the regulatory standards specifically applicable to the delivered Service;

-   Ensure uniformity and integrity in the evaluation of the Service's quality;

-   Guarantee the excellence of the services provided, evaluated using quantitative performance indicators.

It is stipulated that, in the event that the Provider is required
retirer sa qualification SecNumCloud, le Contrat pourra être résilié de plein droit, sans encourir de pénalités, par le CLIENT. Dans une telle éventualité, le Prestataire s'engage à informer le CLIENT de cette déqualification par envoi d'une notification officielle, au moyen d'une lettre recommandée avec demande d'avis de réception.

Il convient de noter qu'une modification ou un ajustement de la qualification SecNumCloud ne sera pas interprété comme une révocation de la qualification initiale.

# 6. Audit

Le Prestataire s'engage à permettre au CLIENT, ou à tout auditeur tiers et non concurrent du Prestataire que ce dernier aurait désigné, de consulter l'ensemble des documents nécessaires à l'attestation du respect intégral des obligations liées à la conformité avec les dispositions de l'article 28 du Règlement Général sur la Protection des Données (RGPD), facilitant ainsi la réalisation d'audits.

Par l'acceptation de la présente Convention de service, le CLIENT confère son autorisation explicite à :

1.  L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI) ainsi qu'à l'entité de qualification compétente pour entreprendre la vérification de la conformité du Service et de son système d'information au référentiel SecNumCloud.
2.  Un prestataire d'audit de la sécurité des systèmes d'information, dûment qualifié PASSI et expressément désigné par le Prestataire, pour mener à bien des audits de sécurité portant sur le Service.

# 7. Description du Service

## 7.1. Modèle de responsabilité partagé

Le Service proposé par le Prestataire se caractérise par la mise à disposition des prestations suivantes, lesquelles s'alignent sur le principe de responsabilité partagée présenté dans le référentiel SecNumCloud :

-   La provision de ressources de calcul (compute) ;

-   La mise à disposition d'espaces de stockage ;

-   L'accès à des services de connectivité réseau et internet ;

-   L'offre d'un service de sauvegarde dédié aux machines virtuelles.

Le modèle de responsabilités partagé appliqué entre le Prestataire et le CLIENT dans le cadre du Service est présenté en §7.1.

Il est entendu que le Prestataire mobilisera son expertise pour réaliser les Prestations selon les meilleures pratiques professionnelles et conformément aux exigences du référentiel SecNumCloud.

## 7.2. Présentation détaillée du périmètre du Service

  -----------------------------------------------------------------------------
  Compute          Ressource de calcul du Tenant CLIENT
  ---------------- ------------------------------------------------------------
  Storage          Données de production du Tenant CLIENT

  Stockage objet   mise à disposition d'une infrastructure de stockage objet
  S3               souverain multi AZ et compatible avec les API S3 standard.

  Sauvegarde       Modulo souscription au mass-storage adéquat

  Infrastructure   Ressource réseau du Tenant CLIENT
  réseau

  Console          Le service permettant au CLIENT d'accéder à son
  CLIENT           service IaaS et de l'administrer via l'interface Shiva

  Support          Le service de support accompagnant les services précédents
                   et uniquement ceux-ci (\*)
  -----------------------------------------------------------------------------

\_(\*) Dans la limite du périmètre du Service qualifié SNC et des responsabilités du Prestataire en la matière\_

### 7.2.1. Infrastructures Datacenters

Le Service englobe la mise à disposition, pour chaque Zone de disponibilité, des prestations qualifiées ci-après :

-   Site datacenter situé en France pour la Région FR, conforme aux dernières normes technologiques, avec proposant un niveau de résilience équivalent ou supérieur au niveau Tier 3 du Uptime Institute ;
-   Mise à disposition de salles techniques au sein de datacenters dédiés à l'accueil des équipements techniques indispensables à la production du service, incluant calcul, stockage, réseau, câblage, et autres composants nécessaires ;
-   Alimentation électrique sécurisée, assurée par deux circuits électriques distincts, garantissant une continuité de service ;
-   Fourniture de services de climatisation, ajustés pour respecter les normes et préconisations des fabricants d'équipements, afin de maintenir un environnement optimal pour les dispositifs techniques ;
-   Supervision continue et métrologie détaillée, permettant un suivi précis et une gestion proactive des performances et de la sécurité du service fourni.

Le Prestataire assure la mise à disposition de services avancés de détection et d'extinction d'incendie, conçus pour identifier et neutraliser efficacement tout départ de feu au sein des installations. Ces systèmes sont essentiels pour garantir la sécurité des équipements et des données. Ils comprennent des détecteurs de fumée de haute précision et des dispositifs d'extinction qui peuvent agir rapidement sans endommager l'équipement informatique. Ce service est crucial pour prévenir les risques d'incendie, minimiser les dommages potentiels et assurer la continuité des opérations.

Le CLIENT est informé que toutes les procédures et mesures de sécurité mises en place, y compris les tests annuels de basculement sur les groupes électrogènes, sont essentielles pour garantir la continuité et l'intégrité des services fournis. Ces pratiques sont conçues pour minimiser les risques de panne et assurer une réactivité optimale en cas d'Incident. En acceptant ces conditions, le CLIENT reconnaît l'importance de ces mesures et s'engage à coopérer pleinement pour faciliter leur mise en œuvre. Le CLIENT est également encouragé à prendre connaissance des recommandations de sécurité fournies et à les intégrer dans sa propre stratégie de gestion des risques.

### 7.2.2. Infrastructure logicielle de pilotage du Service

Le Prestataire fournit au CLIENT la console d'administration et l'API nécessaire à l'utilisation du Service. Il s'engage également à les maintenir cette console d'administration et l'API en condition opérationnelle optimale et à en assurer la sécurité de manière continue. Cette console d'administration et l'API sont désignées de manière groupées sous le terme « interface CLIENT ».

Le Prestataire alerte le CLIENT sur le fait qu'une utilisation anormale de l'interface CLIENT, notamment en cas de surcharge de ses APIs de commande (hammering), peut déclencher des mesures de sécurité automatiques entraînant le blocage de l'accès aux APIs de commande ou au Service. Il convient de souligner que cette situation ne constitue pas une indisponibilité du Service mais une action de protection du Service et de l'infrastructure du Prestataire ; par conséquent, le CLIENT ne peut la considérer comme une indisponibilité dans ses calculs.

De plus, le Prestataire précise au CLIENT que les requêtes parfaitement identiques (doublons) envoyées à ses APIs sont limitées à une par seconde (Throttling). Si le CLIENT soumet des requêtes identiques à une fréquence supérieure, leur rejet ne pourra être interprété comme une indisponibilité du Service.

### 7.2.3. Infrastructures de calcul

Le Service inclut la fourniture, dans les zones de disponibilité souscrites par le CLIENT, des équipements nécessaires à l'exécution des charges de travail sous forme de machines virtuelles.

Ceci comprend :

-   La fourniture des chassis techniques nécessaires au bon fonctionnement des lames de calcul ;
-   La fourniture des lames de calcul dans les quantités spécifiées par le CLIENT et réparties selon les zones de disponibilité de son choix. Il est à noter que ces lames de calcul sont exclusivement dédiées au CLIENT ;
-   La mise à disposition de systèmes d'exploitation de type hyperviseurs, ainsi que la garantie du maintien en condition opérationnelle et de sécurité de l'infrastructure logicielle nécessaire au pilotage de ces systèmes d'exploitation. Il convient de mettre en évidence que, même si le Prestataire est responsable de la maintenance opérationnelle et de la sécurisation globale du Service, il ne détient pas de connaissances spécifiques concernant les environnements de production du CLIENT ni des exigences liées à ses charges de travail. Par conséquent, la responsabilité de décider de la mise à jour des systèmes d'exploitation des lames de calcul hyperviseurs, une action susceptible de nécessiter un redémarrage, repose entièrement sur le CLIENT. Cette opération peut être réalisée via l'Interface CLIENT.

Le choix du modèle de lame de calcul, sélectionné parmi le catalogue proposé par le Prestataire, relève de la responsabilité du CLIENT.

### 7.2.4. Infrastructure de stockage

Le service comprend la fourniture au CLIENT d'une infrastructure de stockage partagée de type SAN (Storage Area Network), offrant divers niveaux de performance. Ce service englobe :

-   L'implémentation et le maintien en condition opérationnelle et en condition de sécurité du réseau SAN dédié ;
-   L'installation et la gestion des baies de stockage mutualisées entre les clients, y compris leur maintien en condition opérationnelle et en condition de sécurité, leur supervision et leur métrologie ;
-   La mise en place des systèmes automatisés pour l'allocation des LUNs (Logical Unit Numbers) de stockage dédiés à l'usage du CLIENT, conformément aux volumes souscrits par le CLIENT.

### 7.2.5. Infrastructure réseau globale

Le Prestataire déploie dans le cadre du Service, un réseau global facilitant au CLIENT la mise en accessibilité de ses systèmes hébergés. Ce service comprend :

-   La fourniture, le maintien en condition opérationnelle et en condition de sécurité de l'ensemble des liaisons en fibres optiques
    interconnecting the different Availability Zones;

- The provision, maintenance in operational condition, and in security
  condition of the technical equipment necessary for the proper
  functioning of the network and the isolation of different clients.

The network interconnection of the Tenant CLIENT to the Internet or private networks, and the networking equipment, operator links, and other technical components enabling this interconnection, are not part of the Service scope. This network interconnection is implemented following the provisions outlined in the Contract.

### 7.2.6. Backup Infrastructure

The Provider makes available to the CLIENT an integrated, dedicated, and managed backup service intended for the protection of its virtual machines. The Provider ensures the maintenance in operational condition and in security condition of this backup service. The Provider guarantees that the CLIENT's backups will be located outside the Availability Zone of the workloads being backed up, provided that the CLIENT has subscribed to the appropriate Work Units.

This backup service is limited to the backup of virtual machines and topology configurations of the CLIENT Tenants' IaaS environment within the Service scope. The development and implementation of an adequate backup policy by the CLIENT depends on subscribing to specific work units. It is therefore up to the CLIENT to ensure the availability of the necessary technical resources from the Provider to implement its backup policy or to adjust it according to the available means.

The Provider commits to notifying the CLIENT in the event of capacity constraints and providing advisory assistance for resource optimization. The Provider's obligations will be limited to implementing the needs expressed by the CLIENT in terms of backup policy, within the framework of the subscribed resources.

### 7.2.7. Implementation of Disaster Recovery or Business Continuity Solutions

The Provider provides the CLIENT with all the necessary technical solutions to ensure the optimal distribution of its resources across various Availability Zones. It is the responsibility of the CLIENT to efficiently manage this resource distribution, for which they can utilize the Provider's tools available for this purpose.

## 7.3. Limitations of Services in the Qualified IaaS Model

### 7.3.1. Managed Services in RUN

It is important to note that the following are excluded from the Service:

- Hosting of the CLIENT's physical components;

- Network interconnection of the CLIENT Tenant to the Internet or private networks, including operator links;

- Any managed-type service or TMA;

- Any assistance on virtual machines at the OS level and above in the IaaS responsibility stack, even if it involves simple supervision.

However, it is by no means excluded that the CLIENT may use such services from the Provider's MSP offer to intervene in managed mode on its Tenants. These services will then not be governed by this Service Agreement and its commitments/bipartite clauses.

### 7.3.2. Backup Configuration

The default backup service provided by the Provider is limited to the backup of virtual machines and topology configurations representing the CLIENT Tenants' IaaS environment within the Service scope.

The completion of the CLIENT's backup policy is subject to the subscription to the necessary mass storage space to ensure the service. Therefore, it is the CLIENT's responsibility to subscribe to the necessary technical resources from the Provider to implement the backup policy for its IT scope or to adjust the backup policy to the implemented means. The Provider commits to informing the CLIENT in the event of technical capacity limits.

The Provider will implement the necessary technical and human resources for backing up the hosted system within the limits of the resources subscribed by the CLIENT.

Additionally, for scopes not covered by the Provider, it is up to the CLIENT to define its own backup strategy and configure its VM backups or submit a Service Request to the Provider to have the physical server backups configured if the CLIENT has a managed service contract that allows the Provider to act via the CLIENT interface, which is the administration console provided within the scope of this Service Agreement and that has functionalities to configure backups.

Furthermore, this service will only undertake the configuration specified by the CLIENT through the CLIENT interface settings.

For flexibility reasons, the CLIENT has the option to associate a non-backup policy with some of its VMs. In this case, the CLIENT assumes this choice. The Provider will not backup the VMs associated with the "no backup" policy. The Provider warns the CLIENT that choosing the "no backup" policy or choosing to backup manually exposes the CLIENT to a definitive loss of data in case of an Incident at the lower layers or layers dependent on its responsibility in the IaaS model. In such a case, it will be impossible to hold the Provider responsible for restoring the data as there will be nothing to restore. The Provider recommends always backing up the VMs.

For any issue concerning the OS installed on a virtual machine and any software or program executed "above the OS", it is the CLIENT's responsibility to perform the administration and supervision operations within the European Union if they wish to ensure that the entire verticality of the IT system layers is operated and managed from within the European Union. The administration operations outside the Provider's responsibility scope under this Service Agreement are indicated in the "Shared Responsibility Model" section of this Service Agreement.

## 7.4. Service Implementation

### 7.4.1. Technical Prerequisites

For Service implementation, the CLIENT acknowledges that they will need to:

- Operate with VMware virtualization within the versions supported by the vendor and provided by the Provider under the Service;

- Use the backup tool through the Provider;

- Declare fixed IPs from which the Provider will authorize access to the CLIENT interface (whitelisting). Modifications to this IP list must be made through the designated menu in the console or through Service Requests for subsequent changes. At service initialization, the Provider must have been informed of at least one IP address as described.

## 7.5. Service Location in France

It is specified that none of the operations and no physical components involved in providing the Service, as subject to this Service Agreement, are located outside the European Union.

This includes operational support, operational supervision, and security supervision (SOC) of the technical infrastructure delivering the Service. Therefore, all storage, administration, supervision tasks, and treatments are performed in France.

### 7.5.1. Location of Datacenters Hosting the Service

Except for the operations of the Provider's employees and agencies, all production operations (including data storage and processing) and technical components delivering the Service are located in Datacenters based in France.

### 7.5.2. Location of Cloud Temple Agencies Operating the Service

Cloud Temple employees intervening on the service scope operate from Cloud Temple agencies all located exclusively in France. These agencies are situated in France, namely in Tours, Lyon, Caen, and Paris La Défense.

The CLIENT is informed of the possibility for Cloud Temple employees to work remotely. However, the Provider guarantees the same security level for remote access, especially regarding VPN access. These remote accesses are implemented following the SecNumCloud reference requirements.

## 7.6. Support

### 7.6.1. Nature of the Support Accompanying the Service

The Provider offers a technical support service aiming to assist the CLIENT in managing, troubleshooting, and optimizing their deployed resources. This service covers a broad range of activities, from assisting with the initial configuration of services to advanced technical support to resolve specific issues.

Here is a description of the characteristics and functionalities of the support service:

- Assistance with the initial implementation of the Service use;
- Assistance with incident resolution;
- Assistance with problem resolution;
- Monitoring and advice on optimizing the technical foundation.


In the context of support service, the Provider does not replace the PRINCIPAL in the use of the Service. The PRINCIPAL remains entirely responsible for the configuration, operation of its VMs, and its Tenants, and the management of all elements (including data and applications) stored or installed on the Provider's infrastructure. The technical support service is provided in accordance with the General Terms and Conditions of Sale and Use, the Provider being bound by an obligation of means.

The PRINCIPAL agrees to use the technical support service reasonably, refraining from requesting uncontracted services from the Provider and preventing the Provider's teams from intervening with its own clients or third parties not included in the Contract. The Provider reserves the right to reject any service request that does not meet these criteria.

The level of support commitment is conditioned by the subscription to the associated support work units.

### 7.6.2. Solicitation of technical support service

Technical support is accessible via a ticketing system through the PRINCIPAL console and is available during normal business hours excluding holidays (8 am - 6 pm; Monday -- Friday; French calendar and hours). For emergencies outside business hours, particularly incidents significantly affecting production, the on-call service can be reached via a number communicated to the PRINCIPAL at the initiation of the Service.

For each request or Incident, it is imperative to generate a ticket with the Provider's support. Initiating this ticket with all necessary information is essential and marks the beginning of the Provider's engagement assessment.

As soon as the Provider receives a request or Incident notification, whether via the management console or following a phone call, a ticket is automatically created. When reporting an Incident, it is essential that the PRINCIPAL provides the provider with as much detail as possible about the encountered issue. This approach is crucial for an appropriate situation assessment, prioritization, and effective diagnosis.

The PRINCIPAL then receives an email confirmation, indicating the creation of the ticket and its unique number. The PRINCIPAL can view the status and history of its requests and Incident declarations directly from the management console.

### 7.6.3. Incident management process

When reporting an Incident, the Provider's technical support team initiates an investigation to identify the cause of the problem and establish a diagnosis. The PRINCIPAL should actively collaborate with the Provider by providing all necessary information and performing the required tests. The Provider may access the PRINCIPAL's Service to diagnose the Incident.

If the Provider's Services are found to be functional and the Incident is not attributable to them, the PRINCIPAL will be informed. At the PRINCIPAL's request, the Provider may offer Professional Services to identify the problem's origin, chargeable on prior agreement based on 30-minute increments.

If the Incident is the responsibility of the Provider or one of its subcontractors, they complete the diagnosis and proceed with Service restoration without additional costs. The diagnosis is based on exchanges between the Parties and the Provider's data, these elements being agreed as probative by the Parties.

### 7.6.4. Treatment prioritization process

The determination of a case's priority level is based on a matrix analysis evaluating the Impact of the Incident and its degree of Criticality:

- The Impact levels are defined as follows:

  -------------------------------------------------------------------------
  Impact Level Description
  -------------------------------------------------------------------------
  Impact I1    One or more of the Provider's services are interrupted

  Impact I2    One or more of the Provider's services are degraded

  Impact I3    One or more of the Provider's services are currently stable,
               but show signs of potential long-term decline
  -------------------------------------------------------------------------

- The Criticality levels are defined as follows:

  -----------------------------------------------------------------------
  Criticality Level Description
  -----------------------------------------------------------------------
  Criticality C1 The Provider’s service is degrading at a concerning rate

  Criticality C2 The Provider’s service deteriorates gradually over time

  Criticality C3 The Provider’s service presents one or more inconveniences
                 without significant consequences
  -----------------------------------------------------------------------

- Based on a thorough analysis of the situation, taking into account the elements determining Impact and Criticality, a priority is assigned to the ticket according to the following decision matrix:

  -------------------------------------------------------------------------
  Impact Level  Criticality       Impact I1       Impact I2    Impact I3
                Level
  -------------------------------------------------------------------------
  Criticality C1                        Priority     Priority     Priority
                                        **P1**       **P2**       **P3**

  Criticality C2                        Priority     Priority     Priority
                                        **P2**       **P3**       **P4**

  Criticality C3                        Priority     Priority     Priority
                                        **P3**       **P4**       **P5**
  -------------------------------------------------------------------------

The service level commitments corresponding to each priority level are detailed in the following chapter.

### 7.6.5. Language and location of the support service

Support is provided by the Provider to the PRINCIPAL at least in the French language. Support may also be provided in English.

The operations of the Provider's support service for the SecNumCloud-qualified infrastructure service offering are located in the European Union.

# 8. Commitments and service levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, ensuring their optimal operation.

Service unavailability, subject to a performance indicator, is recognized upon identification by the Provider's monitoring system, or following a notification by a PRINCIPAL user. The start of the unavailability is set at the earliest of these two events, ensuring accurate and fair downtime accounting.

The end of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or by user feedback, thus ensuring effective resumption of operations and an accurate measure of the interruption duration.

## 8.1. Infrastructure availability commitments

The Provider commits to maintaining a level of availability and performance in accordance with the standards defined for each specified period. Service Level Agreements (SLAs) apply provided that the PRINCIPAL implements its systems across at least two Availability Zones within the concerned Region.

In the absence of compliance with these conditions by the PRINCIPAL, they will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (\*). Access to the SLAs is via the PRINCIPAL interface. Measurements are calculated monthly:

- \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Compute availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Storage availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 3 : IC-INFRA_SNC-03** -- Backup reliability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Network infrastructure availability: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.
- **SLA 5 : IC-INFRA_SNC-05** -- Internet access: guaranteed availability rate of 99.99%, calculated on a 24/7 basis.

***Remarks*** :

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the attack's impact and safeguard its infrastructure. Specifically, if an IP address belonging to the PRINCIPAL is targeted, the Provider may resort to blackholing via the BGP community to block all traffic to the targeted IP address upstream at its providers, aiming to protect the PRINCIPAL's resources as well as those of other PRINCIPALs and the Provider's infrastructure. The Provider strongly encourages the PRINCIPAL to adopt similar measures, such as using web application firewall software*
    available on the market, and to carefully configure its security groups
    via the command API.*

-   *The Provider emphasizes the necessity for the CLIENT to minimize flow openings, notably by avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 8.2. Availability Commitment of the CLIENT Interface

-   SLA 6 : IC-INFRA_SNC-06 -- Access to the Service administration console: a guaranteed availability of 97%, ensured continuously, 24 hours a day and 7 days a week.
-   SLA 7 : IC-INFRA_SNC-07 -- Access to the Service management APIs: an availability of 99.9%, calculated on a 24/7 basis.

## 8.3. Support Availability Commitment

-   **SLA 8 : IC-INFRA_SNC-08** -- Here are the performance commitments of the Provider's technical support for incidents, excluding scheduled maintenance:

  ------------------------------------------------------------------------
  Priority      Guaranteed intervention time (GTI)       Performance goal
  ------------- --------------------------------------- ------------------
  Priority      30min                                    95%
  **P1**

  Priority      2h                                       90%
  **P2**

  Priority      4h                                       90%
  **P3**

  Priority      24h                                      85%
  **P4**

  Priority      48h                                      85%
  **P5**
  ------------------------------------------------------------------------

-   **SLA 9 : IC-INFRA_SNC-09** -- Here are the performance commitments of the Provider's technical support for service requests:

  ------------------------------------------------------------------------
                   Guaranteed intervention time (GTI)    Performance goal
  ---------------- ------------------------------------- --------------------
  Service request  4h                                    90%
  ------------------------------------------------------------------------

*Note:*

-   *The Guaranteed Intervention Time (GTI) is calculated from the difference between the moment the CLIENT opens the ticket and the first intervention by the Provider's support.*
-   *The investigation of incidents concerning the CLIENTs will not include remote intervention on the CLIENT's hosted servers. This assistance will be limited to explaining the available metrics related to the CLIENT's environment to facilitate the understanding of incidents or performance issues encountered. Based on the results of this analysis, recommendations may be suggested.*

## 8.4. Availability Commitment for S3 Object Storage

-   **SLA 10 : IC-INFRA_SNC-10** -- Here are the availability commitments for S3 object storage:

  ------------------------------------------------------------------------------
  Indicator      Commitment                              Availability goal
  -------------- -------------------------------------- -------------------
  IC-INFRA-SNC-10.1 Durability of storing an object in a region  99.9999999% / year

  IC-INFRA-SNC-10.2 Availability of the S3 Object Storage API    99.99%

  IC-INFRA-SNC-10.3 Maximum access latency for an object in a region  150 ms
  ------------------------------------------------------------------------------

Remarks:

-   The Object Storage Service is specifically designed for object storage and must be employed solely for this purpose, **categorically excluding its use in block mode**. Using block mode through indirect methods, including, for example, using *"FUSE" in a Linux environment*, constitutes a violation of the stated terms of use. No incidents, malfunctions, or damages resulting from this non-compliant usage will be covered by the Service Level Agreements (SLA) defined in this service agreement.
-   The durability guarantee is conditional on the use of services in accordance with current best practices and standards and explicitly excludes any modification of data, whether intentional or accidental, resulting from actions taken by the CLIENT.

## 8.5. Clarification on the Backup Commitment

The backup strategy deployed for the CLIENT is conditioned by the subscription to the appropriate service units.

The Provider commits to providing a backup solution that will allow the CLIENT to apply the desired backup policies.

It is specified that the Provider's scope stops at the provision of a backup service and that it is up to the CLIENT to supervise the proper execution of the associated policies via the CLIENT interface.

It is specified that the management of storage capacity for the storage space dedicated to backups remains the responsibility of the CLIENT. The Provider provides the usage rate via the console.

*Example: Non-backup of a virtual machine:*

*The CLIENT is responsible for verifying/supervising the proper execution of backup policies, in case the CLIENT finds that a virtual machine is not backed up, it is up to them to check the cause. The CLIENT may request support from the Provider according to the subscribed support level for assistance.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9** will only be applicable in the event of a backup service incident.

# 9. Organization of the contractual relationship

## 9.1. Responsibilities of the Provider

The Provider commits:

-   to adequately inform its CLIENT (for example, in case of capacity limitations of technical resources delivering the Service).

-   to formally inform the CLIENT within one month of any legal, organizational, or technical change that may impact the Service's compliance with protection requirements against extra-European laws (19.6 of the SNC v3.2 reference framework).

-   to provide the CLIENT with interfaces and service interfaces that are at least in the French language.

-   to consider specific sectoral requirements related to the types of information entrusted by the CLIENT during the implementation of the Service, within the Provider's responsibilities on one hand, and the provisions of the Contract on the other;

-   to study the specific sectoral requirements related to the types of information entrusted by the CLIENT during the implementation of the Service, subsequently expressed by the CLIENT, and to indicate to the latter the necessary actions for their consideration.

-   not to disclose any information related to the service to third parties without the formal and written authorization of the CLIENT.

-   to provide all necessary information for conducting compliance audits in accordance with the provisions of Article 28 of the GDPR.

-   to report to the CLIENT, through this Service Agreement, any security incident impacting the Service or the CLIENT's use of the Service (including the CLIENT's data).

-   to authorize a qualified information systems security audit provider (PASSI), mandated by the Provider, to audit the service as well as its information system, in accordance with the Provider's SecNumCloud control plan. Furthermore, the Provider commits to providing all necessary information to carry out compliance audits with the provisions of Article 28 of the GDPR, conducted by the Client or a mandated third party.

-   to provide, as a subcontractor, in accordance with Article 28 of the General Data Protection Regulation (GDPR), assistance and advice to the CLIENT by alerting them whenever an instruction issued by the latter is likely to constitute a violation of data protection rules.

-   to notify the CLIENT within a reasonable time, through the CLIENT console or by email to the CLIENT contact, when a project impacts or is likely to impact the security level or availability of the Service, or cause a loss of functionality, the potential impacts, mitigation measures put in place, and the residual risks that concern it.

-   to document and implement all necessary procedures to comply with applicable legal, regulatory, and contractual requirements for the service, as well as the specific security needs of the CLIENT, defined by the latter and provided for in the Contract.

-   not to use production data from the CLIENT for testing, except with the CLIENT's prior explicit authorization, in which case the Provider commits to anonymizing this data and ensuring its confidentiality during anonymization.

-   to delete the data and Technical Data related to the
    SPONSOR, in accordance with the "data erasure procedure at the end of the Contract" described in this Service Agreement upon termination or end of the Contract.

-   ensure secure erasure of all SPONSOR data by complete rewriting of all media that has hosted its data as part of the Service.

Upon formal and written request from the SPONSOR, the Provider agrees to:

1.  Make available to the SPONSOR the internal regulations and the
    ethical charter of the Provider;

2.  Make accessible to the SPONSOR the penalties incurred in case of
    violation of the security policy;

3.  Provide the SPONSOR with all the events concerning them in the
    Service's logging elements; the SPONSOR can furthermore
    independently consult the events related to their use of the Service
    through the Service's web and API interfaces;

4.  Make accessible to the SPONSOR the procedures allowing compliance
    with applicable legal, regulatory, and contractual requirements in
    force pertaining to the Service, as well as the specific security
    needs of the SPONSOR foreseen in the Contract;

5.  Provide elements to assess risks related to the submission of the
    SPONSOR's data to the laws of a non-EU state;

6.  Inform the SPONSOR of subsequent subcontractors involved in
    providing the Service and notify them of any changes affecting these
    subcontractors.

> The Provider and all its subsidiaries commit to respect the fundamental values of the European Union, namely human dignity, freedom, democracy, equality, the rule of law, and respect for human rights. The service provided by the Provider complies with the applicable legislation on fundamental rights and the values of the European Union related to the respect of human dignity, freedom, equality, democracy, and the rule of law.

## 9.2. Limitation of the Provider's Responsibilities

Due to all the definitions and conditions mentioned in this Service Agreement, the Provider's responsibilities are limited as follows:

1.  The shared responsibility model, described in the "Shared
    Responsibility Model" section of this Service Agreement, inherently
    limits the Provider's involvement in the operational layers going
    "above" the provision of computing, networking, storage, and backup
    resources. This excludes, in particular, without being limited to:

    -   Management of what is installed on the virtual machines (OS,
        middleware, applications, etc.);

    -   Keeping the OS and other software installed by the SPONSOR on its machines in its Tenants up to date;

    -   Security of the programs, software, and applications installed
        on the virtual machines;

    -   Updating the virtual machines;

    -   Application-level data backup.

2.  The Provider cannot commit to backing up the SPONSOR's Tenants
    without the SPONSOR having first subscribed to the appropriate units of work.

3.  The Provider cannot claim ownership of the data transmitted and generated by the SPONSOR. Indeed, these fall under the SPONSOR's ownership.

4.  The Provider emphasizes that it can in no case exploit and/or dispose of the data transmitted and generated by the SPONSOR without the latter's prior validation, understanding that their disposition is reserved for the SPONSOR.

5.  The Provider disclaims all liability on components physically hosted and managed by the Provider, but which are the direct property of the SPONSOR or a third party with which the SPONSOR has contracted. The hosting of client physical components is not part of the Service and is thus outside the scope of this Service Agreement. It is the SPONSOR's responsibility to evaluate the level of adherence or dependency that these components introduce regarding the qualified SecNumCloud IaaS Service.

## 9.3. Access Limitation

As part of the Service, the Provider is formally prohibited from accessing the Tenants belonging to the SPONSOR without prior authorization. It is the SPONSOR's responsibility to provide the necessary access to the Provider's personnel, according to the specific needs of hosting and, where applicable, professional support services, if this option has been chosen by the SPONSOR.

The SPONSOR acknowledges that these accesses are granted exclusively for needs related to the agreed services, thus ensuring secure and compliant management as per the agreement's terms.

Remote access by third parties involved in the Provider's service delivery is strictly prohibited. In the event that a specific technical requirement necessitates such access, it can only be established after clearly notifying the SPONSOR, providing a detailed justification, and obtaining their written consent.

This measure guarantees the control and security of the SPONSOR's data, ensuring that any exception to the rule is duly authorized and documented.

## 9.4. Responsibilities of Third Parties Participating in the Provision of the Secure Temple Service

The Provider manages the list of third-party partners involved in the provision of the Service. These third parties are the publishers, providers (of the Provider) and other suppliers participating in the provision of the Service. The Provider applies the following measures to these third parties:

-   The Provider requires from third parties participating in the
    service's implementation, in their contribution to the Service, a
    security level at least equivalent to that which it commits to
    maintaining in its own security policy applicable to the Secure Temple
    service;

-   The Provider contracts, with each third party participating in the
    service implementation, auditing clauses allowing a qualification
    body to verify that these third parties comply with legal
    requirements and SNC requirements, enabling the Provider to meet its
    commitments in this Service Agreement.

-   The Provider implements a procedure to regularly control the measures
    set up by third parties participating in the service implementation
    to comply with the Provider's commitments in this Service Agreement.

-   The Provider monitors the changes made by third parties participating
    in service implementation that might affect the information system
    security level of the service.

## 9.5. Responsibilities and Obligations of the SPONSOR

The SPONSOR has the following obligations regarding the Service:

-   As a reminder, the Provider supplies the SPONSOR with a virtual
    machine execution platform. The configuration of these machines is the responsibility of the SPONSOR. Each virtual machine cannot function without an associated backup policy. The Provider defines automatic backup policies via its interfaces. However, it is the SPONSOR's responsibility to activate these backup policies and thus activate the virtual machines.

-   The SPONSOR authorizes the ANSSI and the SNC qualification body to audit the Service and the technical infrastructure delivering the Service.

-   The SPONSOR is responsible for indicating to the Provider any
    specific sectoral requirements related to the types of information
    entrusted by the SPONSOR and needing to be taken into account by the
    Provider.

-   The SPONSOR agrees not to request requirements or actions from the
    Provider that would cause the Provider to deviate from current
    SecNumCloud framework requirements, or lower the security level
    established by meeting these framework requirements.

## 9.6. SPONSOR's Rights

At any time during the contractual relationship, the SPONSOR may file a complaint related to the qualified service with ANSSI.

At any time, the SPONSOR may request the Provider to make accessible its internal regulations and its ethical charter.

## 9.7. Data Erasure at the End of the Contract

At the end of the contract, whether it reaches its term or is terminated for any reason, the Provider agrees to perform secure erasure of all SPONSOR data, including technical data. The Provider will ensure to communicate a formal notice to the SPONSOR, giving at least twenty-one (21) calendar days’ notice. The SPONSOR's data will then be deleted within a maximum period of thirty (30) days following this notice.

To attest this deletion, the Provider will provide the SPONSOR with a certificate confirming data erasure.

# 10. Lifecycle of this Service Agreement

## 10.1. Effective Date of the Service Agreement

This Service Agreement takes effect on the day of its signature by the SPONSOR.

The collection, handling, storage, and processing of data performed as part of pre-sales, implementation, and service termination, are carried out in compliance with applicable legislation.

## 10.2. Changes to the Service Agreement

Any modifications or additions to this Service Agreement
dérive exclusively from requests made by the governance bodies designated for this purpose. These change proposals will be reviewed by the Parties, empowered to identify the aspects requiring written formalization.

It is agreed that any evolution of the Service Agreement, after validation, that alters the initially established financial conditions, will necessitate the creation and signing of an addendum to the ongoing Contract.

Factors that may lead to a revision of this Service Agreement include, but are not limited to:

-   The evolution of the technical infrastructure delivering the IaaS Service;
-   Adjustments made to the services deployed by the Service Provider to provide the Service;
-   Variations in commitments and applicable penalties;
-   Organizational reconfigurations within the SPONSOR or the Service Provider;
-   Expansion or reduction of the Service scope.

The management of versions and revisions of the Service Agreement is recorded in the preamble of the document for ease of tracking.

### 10.2.1. Changes Triggered by the SPONSOR

The Service Agreement changes may originate from, notably:

-   An evolution of the infrastructure managed by the Service Provider;

-   A modification of the services implemented by the Service Provider;

-   A modification of the service level agreements by the Service Provider.

### 10.2.2. Changes Triggered by the Service Provider

Any modification of the Service Agreement is subject to the SPONSOR’s acceptance. It is understood that any validated modification or supplement altering the financial elements of the Contract may result in the signing of an addendum thereto.

## 10.3. Reversibility

Additionally, Cloud Temple commits to allowing a revision of this Service Agreement (including its termination) without penalty for the SPONSOR in the event of loss of the SecNumCloud qualification.

The Services do not include a reversibility obligation (i.e., supporting the SPONSOR in migrating their system to another Service Provider) except for making available to the SPONSOR the interface allowing the SPONSOR to back up and recover their data, including, in particular, their system configuration data through one of the following technical modalities of the SPONSOR's choice: provision of files following one or more documented and usable formats outside the service provided by the Service Provider or through implementing technical interfaces allowing data access following a documented and exploitable schema (API).

The SPONSOR, as the sole master of their system, must do everything possible to facilitate this operation as needed (which notably implies setting up rigorous documentation for this purpose) and developing reversibility plans. If the SPONSOR requires additional services, the Service Provider can offer consultancy services in this regard through a specific contract to be negotiated.

# 11. Availability, Continuity, and Service Restoration

## 11.1. Incident and Interruption Management

### 11.1.1. Incidents

#### 11.1.1.1. Types of Incidents Covered under this Service Agreement

-   Disasters;

-   Breakdowns and failures;

-   Security incidents impacting the Service's availability, confidentiality, or integrity.

#### 11.1.1.2. Incident Handling

> The Service Provider informs the SPONSOR as soon as possible of incidents and interruptions via a notification in the SPONSOR console or email to the SPONSOR contact. The Service Provider informs the SPONSOR of the incident handling through the channel used to notify the incident or through the channel indicated in the incident notification.

#### 11.1.1.3. Security Incident Notification Levels

The SPONSOR is responsible for choosing the severity levels of Security Incidents for which they wish to be informed, for example, via their formalization in an applicable PAS for the Service.

By default, the SPONSOR is informed:

-   Of security incidents with impact (impacts I1 and I2 according to the impact scale defined in the prioritization process of this Service Agreement);

-   Of security incidents impacting the confidentiality or integrity of the SPONSOR’s data entrusted within the Service's framework;

-   Of personal data breaches for which the SPONSOR is responsible for processing in accordance with Article 8 of the DPA Annex in the Service's framework;

-

## 11.2. Service Maintenance

### 11.2.1. Nature of Maintenance

Of personal data breaches for which the Service Provider is responsible for processing and involving the SPONSOR’s personal data, in accordance with Article 8 of the DPA Annex. The maintenance provided consists of implementing:

-   The Service operational condition maintenance plan to ensure good availability indicators as committed by the Service Provider above;

-   The PCA/PRA plan if subscribed by the SPONSOR, triggered according to any incidents that may occur.

### 11.2.2. Cloud Temple Remote Access to the SPONSOR’s Scope

Under this Service Agreement, the Service Provider is prohibited from accessing the Tenants and the SPONSOR interface space.

The SPONSOR will be responsible for providing necessary access to the Service Provider's personnel. The SPONSOR acknowledges that the access will be used within the hosting scope and ultimately for outsourcing management (if subscribed by the SPONSOR).

### 11.2.3. Remote Access by Third Parties Participating in Service Provision on the SPONSOR’s Scope

No remote access by third parties participating in the Service provision is authorized.

If a technical need makes this scenario necessary, such access would only be carried out after notifying the SPONSOR, justifying it, and obtaining their written consent.

# 12. Data Erasure Procedure at Contract End

At the end of the Contract, whether it has reached its term or for any other reason, the Service Provider will ensure the secure deletion of all data processed within the Service framework, including the SPONSOR’s Technical Data. The Service Provider will give formal notice respecting a twenty-one (21) calendar days' period. The SPONSOR’s data will be deleted within a maximum of thirty (30) days after the notification. The Service Provider provides a data deletion certificate to the SPONSOR.

# 13. Applicable Law

## 13.1. General Provisions

The applicable law governing this Service Agreement is French law.

## 13.2. Compliance with Applicable Laws and Regulations

The Service Provider commits to the following:

-   Identifying applicable legal and regulatory constraints within the Service framework;

-   Complying with applicable legal and regulatory constraints on the data entrusted to the Service Provider within the limits of the latter's responsibility, on the one hand, and the provisions stipulated in the Contract, on the other;

-   Complying with the Data Protection Act and the GDPR;

-   Implementing data protection measures;

-   Implementing a legal and regulatory monitoring process;

-   Maintaining appropriate relationships or monitoring with sectoral authorities related to the nature of data processed within the Services framework. This notably includes ANSSI, CERT-FR, and CNIL.

## 13.3. GDPR

As a processor within the meaning of Article 28 of the General Data Protection Regulation (GDPR), the Service Provider commits to:

-   Ensuring transparency and traceability;

-   Appointing a DPO responsible for defining and implementing personal data protection measures;

-   Providing assistance and advice to the SPONSOR in alerting if an instruction from the latter constitutes a violation of personal data protection rules if the Service Provider has the means to identify it;

-   Guaranteeing the security of processed data (due to the SecNumCloud qualification).

## 13.4. Protection vis-à-vis Extraterritorial Law

The Service Provider's statutory seat is established in an EU Member State. The Service Provider's share capital and voting rights are not, directly or indirectly:

-   Individually owned by more than 24%;

-   And collectively owned by more than 39%;

by third-party entities headquartered, with a central administration, or main establishment in a non-EU state.

If the Service Provider resorts to a third-party company’s services — including a subcontractor — headquartered, with a central administration, or main establishment in a country outside the EU or owned or controlled by a third-party company domiciled outside the EU, the Service Provider commits to:

-   Ensuring that the third-party company will have no access to data operated by the 'Secure Temple' service;

-   Ensuring operational autonomy through the possibility of using another subcontractor or rapidly implementing a technological alternative.
Pour rappel, les données visées sont celles qui sont confiées au
Prestataire par le COMMANDITAIRE ainsi que toutes Données techniques
comprenant des informations sur les COMMANDITAIRES.

Pour les besoins du présent article, la notion de contrôle est entendue
comme étant celle mentionnée au II de l'article L233-3 du code de
commerce.

# 14. SIGNATURES

Made at \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, on
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For Cloud Temple, the PROVIDER

For \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, the PRINCIPAL