---
Titel: Dienstvertrag für OpenIaaS im Rahmen von Cloud-Security-Cloud (SecNumCloud)
---

# SERVICE AGREEMENT CONVENTION OpenIaaS

| Recipients: | **Commanditaire** |
| :--- | :--- |
| **Document Reference** | CT.AM.JUR.ANX OPENIaaS-202530101_v3.0.docx_Day JJ AAAA |
| **Your Contacts**: | *Prenom* *Nom* Account Manager email: *prenom.nom*\@cloud-temple.com |
| **Last Update Date**: | 17/01/2025 |
| **Contractual Validation Date**: | Day JJ AAAA |

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

## Vorbereitung und Glossar

---

## Vorlage

Die vorliegende Dokumentation regelt die Dienstleistungsvereinbarung im Zusammenhang mit dem in Qualifizierungsprozess bei SecNumCloud befindlichen OpenIaaS-Dienst.

Die Dienstleistung befindet sich derzeit im Qualifizierungsprozess bei SecNumCloud (siehe anschließende Attest).

Die vorliegende Dienstleistungsvereinbarung ergänzt und ergänzt die Allgemeinen Verkaufs- und Nutzungsbedingungen des Anbieters. Es wird vereinbart, dass die vertraglichen Dokumente in Bezug auf ihre Interpretation koordiniert interpretiert werden. In Fällen von Widersprüchen oder Unterschieden zwischen den Vertragsbedingungen gelten die folgenden Reihenfolge:

1. Allgemeine Bedingungen für den Verkauf und die Nutzung (CBVU)
2. Dienstleistungsvereinbarung SecNumCloud IaaS
3. Dienstleistungsvereinbarung SecNumCloud OpenIaaS
4. Dienstleistungsvereinbarung SecNumCloud PaaS
5. Spezifische Dienstleistungsvereinbarung - Bare Metal
6. Besondere Vertragsbedingungen
7. Sicherheitsversicherungs-Plan (SicherP)
8. Besondere Nutzungsbedingungen (CPU)
9. Datenschutzabfüllungsvertrag

## Glossary

In the present Service Agreement, the **Commanditaire**, **Prestataire** and **Parties** are identified in the Contract to which this Service Agreement is annexed.

The following expressions used in this Service Agreement shall be interpreted according to the definitions assigned to them below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, regardless of whether it's a standard change or not.

- **Standard Change:** A change following a procedure wherein the procedures for implementation and potential impacts (including financial ones) are known and accepted in advance by all Parties. It is then integrated into the standard change catalog, potentially having a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Prestataire enabling the Commanditaire to benefit from the Service, and to which this Service Agreement is annexed.

- **Service Agreement:** This document established within a specific contract or General Terms of Sale and Use (CGVU), in compliance with SecNumCloud requirements.

- **Service Request:** A request for evolution following a procedure wherein execution: i) does not modify the CMDB, ii) known operational procedures, costs, and risks are accepted upfront, no specific rollback procedures needed, iii) is subject to an agreed level of service (SLA) agreement and included in the contract revenue when performed during business hours.

- **Availability:** Capacity to ensure the Service's availability and optimal performance, in accordance with defined criteria and commitments within the Service Level Agreements (SLAs).

- **Technical Data:** Encompasses all data processed for delivering the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration of access, directory, certificates, etc.

- **Event:** Any detectable or identifiable occurrence that may have significance for managing the Service.

- **Hypervisor:** Operating system enabling execution of virtual machines on a compute layer.

- **Incident:** An unforeseen event disrupting normal Service operation or compromising COMMANDITAIRE data security.

- **Security Incident:** Any event within the Service's scope:

  - Intentionally malicious;
  - Accidental affecting the integrity, confidentiality, or traceability of the Service or COMMANDITAIRE data;
  - Compromising existing security measures. Non-origin-based availability outages are not considered security incidents (hardware failure, bug, malfunction, natural disaster...).

- **Commanditaire Interface:** Administration interface for the Service provided by the Prestataire to the Commanditaire, comprising a web administration console and an API.

- **Deployment:** Actions taken in administration to implement a Change once approved (the change, according to ITIL, pertains to managing changes rather than their execution/realization).

- **Problem:** Cause of recurring incidents, potential incident (situation at risk) requiring analysis and resolution to prevent recurrence.

- **Region:** A geographically defined set of availability cloud zones providing network, compute, and storage services optimized for latency, performance, and local regulatory compliance.

- **OpenIaaS Service:** An open-source IaaS service currently under SecNumCloud qualification, delivered by the Prestataire to COMMANDITAIRE from infrastructure maintained by the Prestataire, as described in the "Description of Service" section of this Service Agreement.

- **Catastrophe:** A serious event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Monitoring of an Information System or Service, involving collection of various data such as measurements and alarms. This activity is limited to observation and tracking without direct intervention on monitored elements, a prerogative reserved for operations management.

- **Tenant:** An isolated instance reserved for a user or group of users sharing a common technical infrastructure while maintaining data and application independence and security.

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

# Zweck dieser Dienstleistungsvereinbarung

Diese Dienstleistungsvereinbarung regelt die Bedingungen, unter denen sich der Anbieter verpflichtet, dem Auftragnehmer das Service zu liefern. Ihr Zweck besteht darin:

- Die von der Auftraggeber erwarteten Leistungs- und Zuverlässigkeitsanforderungen für den Service festzulegen;

- Die Pflichten des Anbieters festzulegen, um die vereinbarten Dienstleistungsniveaus zu erfüllen;

- Die spezifischen Vorschriften anzugeben, die auf den von uns gelieferten Service anwendbar sind;

- Eine Konsistenz und Integrität in der Bewertung der Qualität des Services sicherzustellen;

- Die Güte der bereitgestellten Dienstleistungen durch quantitative Leistungsindikatoren zu gewährleisten.

Im Falle, dass sich der Anbieter aufgrund einer Entziehung seiner Qualifikation SecNumCloud für den Service entscheidet, kann der Vertrag von Seiten des Auftraggebers ohne Kostenentschädigung fristlos gekündigt werden. In diesem Fall ist der Anbieter verpflichtet, den Auftraggeber unverzüglich über die Entziehung durch eine offizielle Benachrichtigung per Briefmarkenpost mit Anforderung an Anerkennung des Eingangs zu informieren.

Es ist zu beachten, dass eine Änderung oder Anpassung der Qualifikation SecNumCloud nicht als Entzug der ursprünglichen Qualifikation interpretiert wird.

# Audits

Der Lieferant verpflichtet sich, es dem AUFTRAGGEBER, oder einem unabhängigen und nicht konkurrierenden Auftragnehmer, der vom Lieferanten für dieses Zweck benannt wurde, zu ermöglichen, alle erforderlichen Dokumente zu durchsuchen, um die vollständige Einhaltung aller Pflichten im Zusammenhang mit der Einhaltung der Bestimmungen des Art. 28 der Datenschutz-Grundverordnung (DSGVO) zu bestätigen und so die Durchführung von Audits zu erleichtern.

Durch die Annahme dieser Dienstleistungsabwicklungserklärung erteilt der AUFTRAGGEBER dem Lieferanten seine explizite Erlaubnis, unter anderem:

1. Die Agentur für Sicherheit der Informationssysteme (Anssi) sowie die zuständige Qualifizierungsstelle, die für die Überprüfung der Konformität des Dienstes und seines Informationssystems gegenüber dem Referenzzertifikat SecNumCloud beauftragt ist, Durchführung von Konformitätsaudits durchzuführen.
2. Ein unabhängiger Auditor für die Sicherheit von Informationssystemen, der vom Lieferanten ausdrücklich benannt und qualifiziert wurde, um Sicherheitsaudits über den Dienst durchzuführen.

## Dienstbeschreibung

```markdown
### Service Description

Ce service offre une plateforme d'hébergement cloud flexible et évolutive pour les applications logicielles. Il permet aux développeurs de stocker, de traiter et de gérer des données de manière efficace, tout en garantissant la haute disponibilité et la sécurité des informations. Le service prend en charge divers langages de programmation et frameworks, facilitant ainsi le développement et l'exécution de solutions logicielles complexes.

Les fonctionnalités clés incluent :
- **Scalabilité** : Facilite la gestion automatique des ressources en fonction des besoins en temps réel.
- **Haute disponibilité** : Assure un accès constant aux applications grâce à des redondances et des mesures de fiabilité.
- **Sécurité** : Met en œuvre des protocoles robustes pour protéger les données contre les menaces externes.
- **Gestion des ressources** : Offre un contrôle précis sur l'utilisation des ressources informatiques, permettant une optimisation coûts-performance.
- **Intégration avec d'autres services** : Intègre facilement avec divers outils et services cloud pour créer des solutions complètes.
```

## Shared Responsibility Model

The offered service by the Provider is characterized by providing the following services, which align with the shared responsibility principle presented in the SecNumCloud reference:

- Provisioning of computing resources (compute);
- Availability of storage spaces;
- Access to network connectivity and internet services;
- Offering a dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the COMMANDITAIRE within the context of the Service is outlined in §7.1.

It is understood that the Provider will utilize its expertise to deliver the Services in accordance with professional best practices and in compliance with SecNumCloud requirements.

## Detailed Scope Description of the Service

| Service | Description |
| :--- | :--- |
| **Compute** | Computing resource for Tenant COMMANDITAIRE |
| **Storage** | Production data storage for Tenant COMMANDITAIRE |
| **Object Storage S3** | Provision of a sovereign multi-AZ object storage infrastructure compatible with standard S3 APIs. |
| **Backup** | Subscription module to Object Storage S3 |
| **Network Infrastructure** | Network resource for Tenant COMMANDITAIRE |
| **COMMANDITAIRE Console** | Service enabling COMMANDITAIRE to access and manage its OpenIaaS via the Shiva interface |
| **Support** | Support service accompanying the aforementioned services, limited to them only (\*) |

\_(\*) Within the scope of the current qualification service and SNC as well as Prestataire's responsibilities in this regard\_

### Datacenter Infrastructures

The Service encompasses the provision, for each Availability Zone, of the following qualified services:

- Data center located in France for the FR region, compliant with the latest technological standards, offering a resilience level equivalent to or superior to Tier 3 according to Uptime Institute;
- Provision of technical rooms within dedicated datacenters designed to accommodate essential technical equipment required for service production, including computing, storage, networking, cabling, and other necessary components;
- Secure electrical supply ensured by two independent power circuits, guaranteeing uninterrupted service continuity;
- Supply of climate control systems tailored to meet manufacturer standards and recommendations, ensuring optimal operating conditions for technical devices;
- Continuous monitoring and detailed metrology, enabling precise tracking and proactive management of the service's performance and security.

The Provider ensures the availability of advanced fire detection and suppression systems, designed to quickly identify and effectively neutralize any fire incidents within installations. These systems feature high-precision smoke detectors and rapid-acting extinguishing devices that do not damage IT equipment. This service is critical for preventing fire hazards, minimizing potential damage, and ensuring operational continuity.

The COMMANDITAIRE is informed that all implemented security procedures and measures, including annual failover tests on generators, are vital to maintaining the continuity and integrity of provided services. These practices aim to minimize downtime risks and ensure optimal response times in case of an incident. By accepting these conditions, the COMMANDITAIRE acknowledges the importance of these safety measures and commits to full cooperation for their implementation. The COMMANDITAIRE is also encouraged to review security recommendations and integrate them into its own risk management strategy.

### Software Management Infrastructure

The Provider delivers to the COMMANDITAURE the administration console and the API necessary for using the SERVICE. They commit to maintaining this console and API in optimal operational condition, ensuring continuous security maintenance. This is referred to as the "COMMANDITAURE Interface".

The Provider notifies the COMMANDITAURE that unusual usage of the "COMMANDITAURE Interface", particularly excessive use of its command APIs (hammering), can trigger automatic security measures resulting in the blocking of access to command APIs or the SERVICE. It's crucial to note that this situation does not equate to a service outage but rather an action for safeguarding the SERVICE and Provider's infrastructure; thus, the COMMANDITAURE should not interpret this as an outage in its calculations.

Furthermore, the Provider informs the COMMANDITAURE that identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the COMMANDITAURE submits identical requests at a higher frequency, their rejection cannot be misconstrued as a service outage.

### Computing Infrastructures

The Service encompasses the provision of computing resources within the subscribed zones by the COMMANDITAIRE in the form of virtual machines. This includes:

- Provision of hardware necessary for the operation of compute nodes;
- Delivery of compute nodes in quantities specified by the COMMANDITAIRE and distributed across the availability zones chosen by them. It's important to note that these compute nodes are exclusively dedicated to the COMMANDITAIRE;
- Availability of hypervisor operating systems, along with assurance of the operational readiness and security of the underlying software infrastructure required for managing these hypervisor operating systems. The Prestataire is responsible for operational maintenance and overall security of the Service but does not possess specific knowledge regarding the COMMANDITAIRE's production environments or workload requirements. Consequently, the decision to update the hypervisor operating system instances on the compute nodes, an action potentially necessitating a restart, falls entirely on the COMMANDITAIRE. This operation can be executed via the COMMANDITAIRE Interface.

The selection of the compute node model, chosen from the catalog provided by the Prestataire, is under the COMMANDITAIRE's responsibility.

### Speicherinfrastruktur

Das Dienstleistungsangebot umfasst die Bereitstellung des COMMANDITAIRE mit einer gemeinsamen Speicherinfrastruktur im SAN-Verbindungsnetz (Storage Area Network), die verschiedene Leistungsniveaus bietet. Dieses Angebot umfasst:

- Die Implementierung und Wartung des spezifischen SAN-Netzwerks in Betrieb und Sicherheitsbedingungen für das COMMANDITAIRE;
- Die Installation und Verwaltung der gemeinsamen Speicherbanken zwischen den Kunden, einschließlich ihrer Wartung im Betrieb und in Sicherheitsbedingungen, Überwachung sowie Metriken;
- Die Einrichtung automatisierter Systeme zur Allokation von LUNs (Logical Unit Numbers) für den spezifischen Speicher des COMMANDITAIRE gemäß den abonnierten Volumina.

### Globale Network Infrastructure

The Provider, as part of the Service, establishes a global network facilitating the COMMANDITAIRE's access to its hosted systems. This service includes:

- The provision, maintenance in operational condition, and security of all fiber optic links connecting different availability zones;

- The provision, maintenance in operational condition, and security of technical equipment necessary for the proper functioning of the network and client isolation.

The Tenant COMMANDITAIRE's network interconnection with Internet or private networks, as well as the networking equipment, operator links, and other technical components enabling this interconnection, are outside the scope of the Service. This network interconnection is implemented in accordance with the provisions outlined in the Contract.

### Backup Infrastructure

The Provider offers the COMMANDITAIRE a dedicated and managed backup service, intended to protect its virtual machines. The Provider ensures the operational readiness and security of this backup service. The Provider guarantees that the COMMANDITAIRE's backups will be located outside the availability zone of the protected workloads, subject to the COMMANDITAIRE subscribing to the appropriate infrastructure units.

This backup service is limited to backing up virtual machines and the topology configurations of the OpenIaaS environment within the COMMANDITAIRE tenant, as part of the Service. The development and implementation of a suitable backup policy by the COMMANDITAIRE depend on subscribing to specific infrastructure units. It is thus the responsibility of the COMMANDITAIRE to ensure that the necessary technical resources are available from the Provider for implementing its backup policy or adjusting it according to available means.

The Provider commits to notifying the COMMANDITAIRE in case of capacity constraints and offering consultancy for optimizing resources. The Provider's obligations will be confined to implementing the backup requirements expressed by the COMMANDITAIRE, within the subscribed resources.

### Implementierung von Wiederherstellungsoptionen oder Kontinuitätslösungen

Der Anbieter stellt dem Beauftragten alle technischen Lösungen zur Verfügung, die für eine optimale Ressourcenverteilung in verschiedenen Verfügbarkeitszonen erforderlich sind. Es liegt an dem Beauftragten, diese Ressourcenverteilung effektiv zu verwalten, wobei er auf die von uns zur Verfügung gestellten Werkzeuge zurückgreifen kann.

### Einschränkungen der Dienste im Qualifizierungs-OpenIaaS-Modell

Die aktuelle Qualifizierungsphase des OpenIaaS-Modell weist mehrere Einschränkungen für die angebotenen Dienste auf. Diese Beschränkungen sind entscheidend für die Entwicklung und den Betrieb von Cloud-Infrastrukturen, die auf diesem Modell basieren. Hier sind einige der wichtigsten Einschränkungen:

1. **Skalierbarkeit**:
   - Die Skalierung der Dienste kann durch begrenzte Ressourcen und Infrastruktur-Limits eingeschränkt sein. Dies bedeutet, dass die Anzahl der angebotenen Instanzen oder die Leistungskapazitäten können durch technische Begrenzungen nicht unbegrenzt erhöht werden.

2. **Integration**:
   - Die Integration von Diensten aus verschiedenen Quellen (z.B., Open-Source vs. Proprietär) kann aufgrund von Kompatibilitätsproblemen und Standardisierungseinschränkungen erschwert sein.

3. **Sicherheit**:
   - Die Sicherheit der Dienste kann durch die Verwendung bestehender Sicherheitslösungen oder durch die Integration neuer Technologien eingeschränkt sein, insbesondere wenn diese nicht vollständig mit dem OpenIaaS-Modell kompatibel sind.

4. **Konfigurationsmanagement**:
   - Das Konfigurationsmanagement kann durch die Komplexität der verschiedenen Dienste und die Notwendigkeit einer zentralisierten Steuerung eingeschränkt sein, was die Effizienz und Zuverlässigkeit der Systemkonfiguration beeinflusst.

5. **Kostenmanagement**:
   - Die Kostenmanagementfunktionen können durch begrenzte Transparenz über den Ressourcenverbrauch und die Preisgestaltung eingeschränkt sein, was es schwierig macht, effiziente Ressourcennutzung zu gewährleisten.

6. **Automatisierung**:
   - Die Automatisierung von Prozessen kann durch die Komplexität der verschiedenen Dienste und die Notwendigkeit manueller Eingriffe in bestehende Systeme eingeschränkt sein, was die Effizienz und Reaktionszeit beeinflusst.

7. **Skalierbarkeit und Verfügbarkeit**:
   - Die Fähigkeit zur Skalierung der Dienste aufgrund von Laständerungen kann durch begrenzte Infrastrukturressourcen eingeschränkt sein, was die Verfügbarkeit und Zuverlässigkeit beeinträchtigen kann.

8. **Interoperabilität**:
   - Die Interoperabilität zwischen verschiedenen Diensten und Systemen kann durch unterschiedliche Standards und Protokolle eingeschränkt sein, was die Integration und den Austausch von Daten erschwert.

9. **Compliance und Regulierung**:
   - Die Einhaltung von Branchen- und Branchenspezifischen Vorschriften kann durch die Komplexität der verschiedenen Dienste und die Integration neuer Technologien eingeschränkt sein, was zusätzliche Anforderungen an die Compliance erfordert.

10. **Benutzerfreundlichkeit**:
    - Die Benutzerfreundlichkeit kann durch die Komplexität der verschiedenen Dienste und die Notwendigkeit einer zentralisierten Steuerung eingeschränkt sein, was die Effizienz und Zufriedenheit der Nutzer beeinflusst.

Diese Einschränkungen sind wichtig für die Entwicklung und den Betrieb von Cloud-Infrastrukturen im OpenIaaS-Modell, da sie die Herausforderungen und Grenzen identifizieren, die überwunden werden müssen, um ein robustes, skalierbares und effizientes System zu schaffen.

### Managed Services in RUN

Es ist wichtig zu beachten, dass vom SERVICE:

- Der Hosting physischer Komponenten des COMMANDITAIRE;

- Die Netzwerkverbindung des Tenants COMMANDITAIRE mit Internet oder privaten
    Netzwerken sowie die Verbindungen der Betreiber;

- Alle verwalteten Dienste (TMA);

- Jegliche Unterstützung auf virtuellen Maschinen im Betriebssystem und über
    das IaaS-Pile, auch wenn es sich nur um Überwachung handelt.

Es ist jedoch absolut nicht ausgeschlossen, dass COMMANDITAIRE diese Dienste
beim MSP-Anbieter in Anspruch nimmt, um seine Tenants als Managed Services
betreiben zu können. Diese Dienste werden dann nicht durch die vorliegende
    Service-Vereinbarung und deren Verpflichtungen/Klauseln geregelt.

### Schutzbeauftragte-Konfiguration

Standardmäßig stellt der Anbieter die Bereitstellung von IaaS-Ressourcen beim Kommanditätenverwaltung durch Reservieren von Ressourcen und Konfiguration von Deployments für die Verfügungsbereiche auf. Es obliegt dem Kommanditätenverwaltung, die Verfügungsbereiche über die Benutzeroberfläche des Kommanditätenverwaltung auszuwählen.

### Backup Configuration

The backup service ceases at the backup of virtual machines and topological configurations representing the OpenIaaS environment of COMMANDITAIRE's tenants within the scope of the service.

The backup provision and implementation of COMMANDITAIRE's backup policy are subject to subscribing to necessary storage space on mass storage to ensure the service. It is, therefore, COMMANDITAIRE's responsibility to subscribe with the Provider for the technical means required to implement the backup policy within its IT perimeter, or adjust the backup policy according to the implemented means. The Provider commits to informing COMMANDITAIRE in case of technical capacity limitations.

The Provider will establish the necessary technical and human resources to back up the hosted system within the subscribed resources' limits.

Furthermore, for non-supported perimeters by the Provider, it falls upon COMMANDITAIRE to define its own backup strategy and manually configure VM backups or request service from the Provider to set up backup parameters for physical servers if COMMANDITAIRE has a managed service contract allowing the Provider access via the COMMANDITAIRE interface (console of administration provided under this Service Agreement, equipped with functionalities for configuring backups).

Additionally, this service's commitment is limited to translating, via the COMMANDITAIRE interface, the configuration explicitly defined by COMMANDITAIRE.

Due to the Provider's flexibility offerings, COMMANDITAIRE has the option to implement a "no backup" policy on certain VMs. In such cases, it is COMMANDITAIRE's prerogative to choose this policy. The Provider will not back up VMs associated with the "no backup" policy. The Provider alerts COMMANDITAIRE that choosing "no backup" or manual backups exposes COMMANDITAIRE to irrecoverable data loss in case of incidents affecting lower layers or dependent layers within the IaaS model. In this scenario, it would be impossible for the Provider to restore data due to the absence of anything to restore. The Provider recommends always backing up VMs.

Regarding any matters concerning the operating system installed on a virtual machine and any software or program executed "on top" of the OS, it is COMMANDITAIRE's responsibility to perform administrative and oversight tasks within the European Union if it wishes to ensure that all system layers are managed and operated from the EU. These administrative tasks outside the Provider's scope of responsibility under this Service Agreement, as detailed in the "Shared Responsibilities" section of this Service Agreement.

### Implementierung des Dienstes

### Technische Voraussetzungen

Für die Umsetzung des Dienstes erkennt der COMMANDITAIRE an, dass es auf folgende Virtualisierungstechnologie mit den unterstützten Versionen durch den Anbieter und innerhalb des Dienstes bereitgestellt wird müssen:

- Funktionieren mit einer Virtualisierungstechnologie von Xen in den vom Anbieter unterstützten Versionen.

Darüber hinaus wird COMMANDITAIRE auf die Verwendung der Backup-Tools des Anbieters angewiesen.

Zudem muss COMMANDITAIRE festgelegte IP-Adressen angeben, über die der Anbieter ihm den Zugriff auf die INTERFACE COMMANDITAIRE ermöglichen wird (Whitelist). Änderungen dieser IP-Adresselisten müssen über das im Console vorgesehen Menü oder über Serviceanfragen für spätere Modifikationen durchgeführt werden. Bei der Inbetriebnahme des Dienstes wird der Anbieter mindestens über eine Adresse IP informiert, wie z.B. "minima 1 Adresse IP".

## Standort des Dienstleistungen in Frankreich

Es wird ausdrücklich festgelegt, dass keine der von der Bereitstellung dieses Dienstes beteiligten Operationen oder physischen Komponenten außerhalb der Europäischen Union ansässig sind.

Dazu gehören insbesondere der Support, die Betriebsführung und die Sicherheitsüberwachung (SOC) der technischen Infrastruktur, die den Dienst liefert. Dementsprechend werden alle Speicherung, Administration, Überwachung und Verarbeitung in Frankreich durchgeführt.

### Standort der Datencenter, die den Dienst hosten

Abgesehen von den Betriebsausgaben und den Agenturen des Lieferanten befindet sich der gesamte Betrieb (einschließlich Speicherung und Verarbeitung von Daten sowie technische Komponenten, die den Dienst liefern) in französischen Datacenters.

### Standorte der Cloud-Tempel-Mitarbeiter für den Dienstleistungsangebot

Die Mitarbeiter von Cloud Temple, die sich auf das Dienstleistungsportfolio konzentrieren, arbeiten aus den Büros von Cloud Temple, die sich ausschließlich in Frankreich befinden. Diese Büros befinden sich in Tours, Lyon, Caen und Paris La Défense.

Der Beirat ist über die Möglichkeit informiert, dass die Mitarbeiter von Cloud Temple von zu Hause aus arbeiten können. Allerdings stellt der Anbieter sicher, dass derselbe Sicherheitsstandard für den Zugang außerhalb des Büros gelten bleibt, insbesondere für den Zugriff über VPNs. Diese Remote-Zugänge werden gemäß den Anforderungen des Referenzrahmens SecNumCloud umgesetzt.

### Unterstützung

### Nature des Unterstützungsmaterialien zum angebotenen Service

Der Anbieter stellt ein technisches Unterstützungsservice an, das darauf abzielt, den COMMANDITAIRE bei der Verwaltung, Wartung und Optimierung seiner bereitgestellten Ressourcen zu unterstützen. Dieses Service deckt eine breite Palette von Aktivitäten ab, von der Hilfe beim ersten Einsatz des Dienstes bis hin zum fortgeschrittenen technischen Support zur Lösung spezifischer Probleme.

Hier ist eine Beschreibung der Merkmale und Funktionen dieses Unterstützungsdienstes:

- Hilfe bei der ersten Einsatzphase des Dienstes;
- Hilfe bei der Behebung von Anomalien;
- Hilfe bei der Lösung von Problemen;
- Überwachung und Beratung zur Optimierung des Technologieunterbaus.

Im Rahmen des Unterstützungsdienstes übernimmt der Anbieter keine Ersatzrolle für den COMMANDITAIRE beim Gebrauch des Dienstes. Der COMMANDITAIRE bleibt vollständig verantwortlich für die Konfiguration, den Betrieb seiner VMs und Tenants sowie für die Verwaltung aller Elemente (einschließlich Daten und Anwendungen), die er auf oder installiert hat, in den Infrastrukturen des Anbieters. Der technische Unterstützungsdienst wird gemäß den Allgemeinen Bedingungen der Verkaufs- und Nutzungsbedingungen bereitgestellt, wobei der Anbieter eine Leistungsverpflichtung hat.

Der COMMANDITAIRE verpflichtet sich, den Unterstützungsdienst technisch im Sinne zu nutzen, insbesondere durch Vermeidung ungewöhnlicher Anfragen an den Anbieter und die Einbindung der Anbieteteams bei seinen eigenen Kunden oder Dritten, die nicht im Vertrag enthalten sind. Der Anbieter behält sich das Recht vor, jede unangemessene Serviceanfrage abzulehnen.

Das Niveau des Unterstützungsengagements ist an die Abwicklung der dazugehörigen Leistungsofferte gebunden.

### Anfrage an den technischen Support

Der technische Support ist über ein Ticket-System via die Befehlszeile COMMANDITAIRE zugänglich und erreichbar von Montag bis Freitag, außer an Feiertagen (8:00 - 18:00 Uhr; Kalender und Ordnung Französisch). Für Notfälle außerhalb der Geschäftszeiten, insbesondere solche, die einen erheblichen Produktionsausfall verursachen, kann der nachtdienst über das vom COMMANDITAIRE bekannt gegebene Telefonnummer kontaktiert werden.

Für jede Anfrage oder Meldung ist es unerlässlich, ein Ticket beim Support des Anbieters zu erstellen. Die Erstellung dieses Tickets, das alle erforderlichen Informationen enthält und somit den Beginn der Bewertung der Verpflichtungen des Anbieters markiert, ist von größter Bedeutung.

Sobald der Anbieter eine Anfrage oder eine Meldung über einen Incident erhält, sei es über die Befehlszeile der Verwaltung oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Meldung eines Incidents ist es entscheidend, dass COMMANDITAIRE dem Anbieter alle relevanten Informationen über das Problem mitteilt. Diese Information ist entscheidend für eine angemessene Bewertung des Sachstands, die Priorisierung und einen effektiven Diagnoseprozess.

COMMANDITAIRE erhält dann eine Bestätigung per E-Mail, die die Erstellung des Tickets sowie dessen eindeutiger Nummer anzeigt. COMMANDITAIRE kann den Status und das Geschichte seiner Anfragen und Meldungen direkt aus der Befehlszeile der Verwaltung überprüfen.

### Prozess der Störungsbehebung

Bei einer Meldung eines Incidents führt die Technische Unterstützungs-Abteilung des Anbieters eine Untersuchung durch, um die Ursache des Problems zu bestimmen und einen Diagnoseplan zu erstellen. Der COMMANDITAIRE arbeitet eng mit dem Anbieter zusammen, indem er alle erforderlichen Informationen bereitstellt und die notwendigen Tests durchführt. Der Anbieter kann auf den SERVICE des COMMANDITAIRE zugreifen, um das Incident zu diagnostizieren.

Wenn die Dienstleistungen des Anbieters als funktional angesehen werden und das Incident nicht ihm zuzuordnen ist, wird der COMMANDITAIRE hierüber informiert. Bei Anfrage des COMMANDITAIRE kann der Anbieter Vorschläge für professionelle Dienstleistungen machen, um die Ursache des Problems zu identifizieren (für 30-minütige Intervalle), unter Vorbehalt einer vorherigen Vereinbarung.

Im Fall, dass das Incident auf die Haftung des Anbieters oder eines seiner Subunternehmer zurückzuführen ist, ergänzt dieser den Diagnoseplan und setzt sich mit der Wiederherstellung des Dienstes auseinander ohne zusätzliche Kosten. Der Diagnoseplan basiert auf den Austauschinformationen zwischen den Parteien sowie den Daten des Anbieters, wobei diese Elemente als anerkannt von allen Parteien gelten.

### Prozess der Priorisierung von Bearbeitungsaufgaben

Die Bestimmung des Prioritätsniveaus für einen Fall basiert auf einer mathematischen Analyse, die den Auswirkungen des Incidents und dessen Kritikalität bewertet:

- Die Ebenen der Auswirkungen werden wie folgt definiert:

| Ebene der Auswirkung | Beschreibung |
| :--- | :--- |
| **Ebene I1** | Der oder die Dienstleistungen des Anbieters sind unterbrochen |
| **Ebene I2** | Der oder die Dienstleistungen des Anbieters werden degradiert |
| **Ebene I3** | Der oder die Dienstleistungen des Anbieters sind derzeit stabil, zeigen jedoch Hinweise auf ein potenzielles langfristiges Abwärtspotenzial |

- Die Ebenen der Kritikalität werden wie folgt definiert:

| Ebene der Kritikalität | Beschreibung |
| :--- | :--- |
| **Kritikale C1** | Der oder die Dienstleistungen des Anbieters degradieren sich auf eine bedrohliche Geschwindigkeit |
| **Kritikale C2** | Der oder die Dienstleistungen des Anbieters deteriorieren sich allmählich im Laufe der Zeit |
| **Kritikale C3** | Der oder die Dienstleistungen des Anbieters präsentieren ein oder mehrere Probleme ohne signifikante Konsequenzen |

- Basierend auf einer gründlichen Analyse der Situation, die alle Faktoren berücksichtigt, die den Auswirkungen und die Kritikalität bestimmen, wird eine Priorisierung für das Ticket gemäß der folgenden Entscheidungsmatrix festgelegt:

| Ebene der Auswirkung / Ebene der Kritikalität | I1 | I2 | I3 |
| :--- | :--- | :--- | :--- |
| **Kritikale C1** | Priorisierung P1 | Priorisierung P2 | Priorisierung P3 |
| **Kritikale C2** | Priorisierung P2 | Priorisierung P3 | Priorisierung P4 |
| **Kritikale C3** | Priorisierung P3 | Priorisierung P4 | Priorisierung P5 |

Die mit jeder Priorisierungsstufe verbundenen Service-Level-Abkommen (SLAs) werden im folgenden Kapitel detailliert beschrieben.

### Sprach- und Lokalisation des Supportdienstes

Der Support wird vom Anbieter an den Kunden mindestens auf Französisch bereitgestellt. Der Support kann auch auf Englisch erfolgen.

Die Betriebsstellen des Supportdienstes des Anbieters für die Qualifizierte Infrastruktur-Angebote SecNumCloud befinden sich innerhalb der Europäischen Union.

# Servicevereinbarungen und Leistungsstufen

Der Anbieter verpflichtet sich, die Leistung und Sicherheit seiner Technologieinfrastruktur, die den Dienst liefert, kontinuierlich zu überwachen und sicherzustellen, dass diese optimal funktioniert.

Eine Ausfallzeit wird als solcher erkannt, sobald sie vom Überwachungssystem des Anbieters identifiziert oder durch eine Benachrichtigung eines Nutzers des COMMANDITAIRE festgestellt wird. Der Beginn der Ausfallzeit wird auf den frühesten Zeitpunkt festgelegt, um ein genaues und gerechtes Maß für die Dauer der Ausfallzeit zu gewährleisten.

Die Offizielle Beendigung der Ausfallzeit wird durch eine vollständige Wiederherstellung des Dienstes bestätigt, entweder durch die Überwachungssysteme des Anbieters oder durch einen Rückmeldung eines Nutzers, was eine effektive Wiederaufnahme der Betriebsabläufe und eine genaue Messung der Ausfalldauer gewährleistet.

## Service Level Agreement (SLA) Availability Commitments

The Provider commits to maintaining a level of availability and performance in accordance with the defined standards for each specified period. These Service Level Agreements (SLAs) are subject to the COMMANDITAIRE implementing its systems across at least two of the available zones within the relevant region.

In the absence of these conditions by the COMMANDITAIRE, it will be unable to claim the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is provided through the COMMANDITAIRE interface. The measurements are calculated monthly:

- **SLA 1** (IC-INFRA_SNC-01) - Compute Availability: Guaranteed uptime of 99.99%, calculated on a 24/7, 7-day basis.
- **SLA 2** (IC-INFRA_SNC-02) - Storage Availability: Guaranteed uptime of 99.99%, calculated on a 24/7, 7-day basis.
- **SLA 3** (IC-INFRA_SNC-03) - Backup Reliability: Guaranteed uptime of 99.99%, calculated on a 24/7, 7-day basis.
- **SLA 4** (IC-INFRA_SNC-04) - Network Infrastructure Availability: Guaranteed uptime of 99.99%, calculated on a 24/7, 7-day basis.
- **SLA 5** (IC-INFRA_SNC-05) - Internet Access: Guaranteed uptime of 99.99%, calculated on a 24/7, 7-day basis.

***Remarks***:

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing to block all traffic destined for the targeted IP at the provider's upstream providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIRES and the Provider's infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as utilizing web application firewall software available on the market, and meticulously configuring its security groups via the provider's API.

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols like **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).

## Verfügbarkeitsvertrag der COMMANDITAIRE-Schnittstelle

- SLA 6: IC-INFRA_SNC-06 - Zugriff auf die Admin-Konsole des Dienstes: Eine Verfügbarkeit von mindestens 97% garantiert, kontinuierlich, rund um die Uhr und an sieben Tagen der Woche.
- SLA 7: IC-INFRA_SNC-07 - Zugriff auf die Steuerungs-APIs des Dienstes: Eine Verfügbarkeit von mindestens 99,9%, berechnet auf einer Basis von 24 Stunden am Tag, sieben Tagen die Woche.

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
- Investigations into incidents concerning COMMANDITAIRE commands will not include remote server interventions on the COMMANDITAIRE's hosted servers. Assistance in this area will be limited to explaining available metrics related to the COMMANDITAIRE environment, facilitating understanding of encountered incidents or performance issues. Based on these analysis results, recommendations can be suggested.*

## Storage Object Availability Commitment for S3

- **SLA 10 : IC-INFRA_SNC-10** -- Hier sont présentés les engagements de disponibilité pour le stockage objet S3 :

| Indicateur | Engagement | Objectif de disponibilité |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Durabilité du stockage d'un objet sur une région | 99,9999999% / an |
| **IC-INFRA-SNC-10.2** | Disponibilité de l'API Stockage Objet S3 | 99,99% |
| **IC-INFRA-SNC-10.3** | Latence maximale d'accès à un objet sur une région | 150 ms |

Bemerkungen:

- Der Speicherdienst ist ausschließlich für den Speichern von Objekten konzipiert und muss nur für diesen Zweck verwendet werden, **ausgenommen jegliche Verwendung im Blockmodus**. Die Nutzung des Modus Block über Umwege, wie z.B. die Verwendung von "FUSE" in einem Linux-Umfeld, stellt eine Verletzung der Nutzungsbedingungen dar. Jeder Schaden, Fehler oder Schaden, der durch diese nicht konforme Nutzung entsteht, wird nicht durch die im vorliegenden Dienstvertrag festgelegten Servicelevelabkommen abgedeckt.
- Die Garantie der Verfügbarkeit ist an die Einhaltung der besten Praktiken und Standards vorausgesetzt sowie explizit ausschließt jede Modifikation von Daten, sei es absichtlich oder unabsichtlich, das durch Handlungen des COMMANDITAIRE entsteht.

## Detail regarding backup engagement

The backup strategy for COMMANDITAIRE is contingent upon subscribing to appropriate work units.

The Provider commits to providing a backup solution that enables COMMANDITAIRE to implement its desired backup policies.

It's specified that the Provider's scope ends with the provision of a backup service, while COMMANDITAIRE is responsible for overseeing the correct execution of associated policies via the COMMANDITAIRE interface.

It's noted that capacity management of the dedicated storage space for backups falls entirely on COMMANDITAIRE. The Provider offers usage rate information through the console.

*Example: Unbacked virtual machine:*

In case COMMANDITAIRE identifies a non-backed up virtual machine, it is its responsibility to investigate and determine the cause. COMMANDITAIRE can then contact the Provider's Support according to the subscribed support level for assistance.

**SLA 8 (IC-INFRA_SNC-08) and SLA 9** will be exclusively applicable in the event of a backup service incident.

## Verwaltung der Vertragsbeziehung

## Verantworliche Verpflichtungen des Auftragnehmers

Der Auftragnehmer verpflichtet sich:

- Zu informieren den COMMANDITAIRE über angemessene Weise (z.B. in Fällen,
    wenn die technischen Kapazitäten zur Bereitstellung des Dienstes
    begrenzt sind und damit die Konformität mit den Datenschutzbestimmungen
    außerhalb der Europäischen Union beeinträchtigt werden).

- Zu informieren den COMMANDITAIRE innerhalb eines Monats über jede
    juristische, organisatorische oder technische Änderung, die die
    Konformität des Dienstes mit den Datenschutzbestimmungen außerhalb
    der Europäischen Union beeinträchtigen könnte (19.6 des Referenzrahmens
    SNC v3.2).

- Den COMMANDITAIRE in Französisch oder einer anderen Sprache, die vom
    COMMANDITAIRE angegeben wird, geeignete Schnittstellen und Dienstleistungsinterfaces bereitzustellen.

- Die spezifischen Branchenanforderungen im Zusammenhang mit den von
    dem COMMANDITAIRE zur Durchführung des Dienstes übermittelten Informationen
    zu berücksichtigen, unter Berücksichtigung der Verantwortlichkeiten des
    Auftragnehmers und der Bestimmungen des Vertrags.

- Die zukünftig vom COMMANDITAIRE ausgedrückten spezifischen Branchenanforderungen im Zusammenhang mit den von ihm zur Durchführung des Dienstes übermittelten Informationen zu untersuchen und dem COMMANDITAIRE die erforderlichen Maßnahmen anzuzeigen.

- Keine Informationen über die Ausführung der Dienstleistung an Dritte
    preiszugeben, es sei denn, der COMMANDITAIRE hat eine schriftliche
    und formale Genehmigung ausgesprochen.

- Alle erforderlichen Informationen bereitzustellen, um Audits der
    Konformität gemäß Artikel 28 der DSGVO durchzuführen.

- Den COMMANDITAIRE über die vorliegende Dienstleistungsvereinbarung
    über alle Sicherheitsvorfälle im Zusammenhang mit dem Dienst oder
    der Nutzung des Dienstes durch den COMMANDITAIRE (einschließlich
    Daten des COMMANDITAIRE) zu informieren.

- Ein autorisiertes Unternehmen zur Überprüfung der Sicherheit von Informationssystemen (PASSI) beizubeordern, das vom Auftragnehmer beauftragt wurde, um den Dienst und dessen Informationssystem zu überprüfen. Darüber hinaus verpflichtet sich der Auftragnehmer, alle erforderlichen Informationen bereitzustellen, um die Konformität mit Artikel 28 der DSGVO durch den COMMANDITAIRE oder einen von diesem beauftragten Dritten zu gewährleisten.

- Als Subunternehmer im Sinne des Artikels 28 der Datenschutz-Grundverordnung (DSGVO) dem COMMANDITAIRE Unterstützung und Beratung in Bezug auf die DSGVO bieten, sobald ein von diesem angeordnetes Verfahren eine mögliche Verletzung der Datenschutzregeln darstellt.

- Den COMMANDITAIRE innerhalb eines angemessenen Zeitraums (über die
    Kommunikationskanäle des COMMANDITAIRE oder per E-Mail an den zuständigen
    Kontakt) über potenzielle Auswirkungen auf die Sicherheit oder
    Verfügbarkeit des Dienstes, oder über Funktionseinschränkungen,
    Sicherheitsmaßnahmen und damit verbundene Risiken informieren, die durch
    den von ihm genutzten Dienst entstehen.

- Alle erforderlichen Prozesse und Verfahren zur Einhaltung der
    geltenden Gesetze, Vorschriften und Vertragsbestimmungen sowie
    spezifischer Sicherheitsanforderungen des COMMANDITAIRE zu dokumentieren
    und umzusetzen.

- Die Daten des COMMANDITAIRE nicht für Tests aus der Produktion zu nutzen,
    es sei denn, der COMMANDITAIRE hat vorher explizite Zustimmung erteilt,
    unter der Bedingung, dass die Daten anonymisiert und während der
    Anonymisierung gesichert werden.

- Die gesamten Daten und technischen Informationen des COMMANDITAIRE
    sicher zu löschen, gemäß der "Löschprozedur zum Ende des Vertrags"
    in dieser Dienstleistungsvereinbarung, wenn der Vertrag endet oder
    widerrufen wird.

- Eine sichere Löschung aller Daten des COMMANDITAIRE durch eine vollständige
    Neuinstallation der Daten auf einem neuen Medium zu gewährleisten.

Auf Anfrage des COMMANDITAIRE formell und schriftlich:

1. Den COMMANDITAIRE den Innenkodex und die Ethikrichtlinie des Auftragnehmers
    zur Verfügung zu stellen;

2. Die Sanktionen für Verstöße gegen die Sicherheitsrichtlinie dem COMMANDITAIRE
    zugänglich zu machen;

3. Den COMMANDITAIRE alle Ereignisse im Zusammenhang mit der Dienstleistung
    in den Journalierungen des Dienstes zur Verfügung zu stellen, sodass
    der COMMANDITAIRE die Möglichkeit hat, diese Ereignisse über die
    Web- und API-Schnittstellen des Dienstes unabhängig zu durchsuchen;

4. Den COMMANDITAIRE alle Prozesse zur Einhaltung der geltenden Gesetze,
    Vorschriften und Vertragsbestimmungen sowie spezifischer Sicherheitsanforderungen
    des COMMANDITAIRE bereitzustellen, die im Vertrag festgelegt sind;

5. Die Elemente zur Risikobeurteilung in Bezug auf die Übermittlung der Daten
    des COMMANDITAIRE an einen Staat außerhalb der Europäischen Union unter
    Berücksichtigung der DSGVO und anderer Datenschutzbestimmungen;

6. Den COMMANDITAIRE über alle nachfolgenden Subunternehmer, die zur
    Bereitstellung des Dienstes beitragen, sowie über jede Änderung, die
    diese Subunternehmen betreffen und deren Auswirkungen auf den von ihm genutzten
    Dienst.

> Der Auftragnehmer und alle seine Tochtergesellschaften verpflichten sich,
> die grundlegenden Werte der Europäischen Union zu respektieren, nämlich
> die Würde des Menschen, Freiheit, Demokratie, Gleichheit, Rechtsstaatlichkeit
> und den Respekt vor den Menschenrechten. Der von uns bereitgestellte Dienst
> entspricht der geltenden Rechtsordnung in Bezug auf Grundrechte und den
> Werten der Europäischen Union im Hinblick auf die Würdigung der Würde des Menschen,
> Freiheit, Gleichheit, Demokratie und das Rechtstaatswesen sowie den Respekt vor
> den Menschenrechten.

## Limitation des Haftings des Auftragsnehmer

Aufgrund der in dieser Dienstleistungsvereinbarung dargestellten Definitionen und Bedingungen ist die Haftung des Auftragsnehmers auf folgende Weise beschränkt:

1. Das Modell der gemeinsamen Haftung, das in der Abschnitt "Gemeinsame Haftungsmodalitäten" dieser Dienstleistungsvereinbarung beschrieben wird, begrenzt die Beteiligung des Auftragsnehmers an den Schichten des Betriebs, die über die Bereitstellung von Rechenressourcen, Netzwerkressourcen, Speicher- und Backup-Ressourcen hinausgehen. Dies gilt insbesondere und ohne Einschränkung:

    - Die Verwaltung der installierten Software (Betriebssysteme, Middleware, Anwendungen usw.);
    - Die Wartung der Betriebssysteme und anderer von COMMANDITAIRE auf seinen virtuellen Maschinen installierter Software;
    - Die Sicherheit der Programme, Software und Anwendungen, die auf den virtuellen Maschinen installiert sind;
    - Die Aktualisierung der virtuellen Maschinen;
    - Die Speicherung von Daten auf Anwendungsebene.

2. Der Auftragsnehmer kann keine Garantien für die Sicherheit der Tenants von COMMANDITAIRE ohne eine vorherige Zahlung der entsprechenden Infrastruktur durch diesen erhalten.

3. Der Auftragsnehmer übernimmt keine Eigentumsrechte an den übertragenen und generierten Daten von COMMANDITAIRE. Diese gehören COMMANDITAIRE.

4. Der Auftragsnehmer betont, dass er die Daten nicht ohne vorherige Zustimmung von COMMANDITAIRE auswerten oder nutzen kann. Ihre Verfügbarkeit ist für COMMANDITAIRE reserviert.

5. Der Auftragsnehmer haftet nicht für physische Komponenten, die er verwaltet und verwaltet, obwohl diese direkt COMMANDITAIRE oder einem Dritten gehören, mit dem COMMANDITAIRE ein Vertrag abgeschlossen hat. Die Wartung physischer Komponenten der Tenants ist außerhalb des Rahmens dieser Dienstleistungsvereinbarung und wird daher nicht von diesem abgedeckt. Es obliegt COMMANDITAIRE, die Abhängigkeit oder Anhaftung dieser physischen Komponenten in Bezug auf den im Rahmen der SecNumCloud-Dienstleistung laufenden Service zu bewerten.

## Zugangsbeschränkung

Im Rahmen des Dienstes ist der Anbieter ausdrücklich verboten, auf Tenanten zuzugreifen, die dem COMMANDITAIRE gehören, ohne vorherige Genehmigung. Es liegt an dem COMMANDITAIRE, den notwendigen Zugang für das Personal des Anbieters bereitzustellen, abhängig von den spezifischen Anforderungen des Hostings und, falls gewünscht, durch professionelle Support-Dienste.

Der COMMANDITAIRE erkennt an, dass diese Zugänge ausschließlich für die Erfüllung der vereinbarten Dienstleistungen erteilt werden und stellen somit eine sichere und konformen Verwaltung gewährleisten.

Jegliche fremde Zugriffe durch Dritte, die im Rahmen des von dem Anbieter bereitgestellten Dienstleistungen betrieben werden, sind streng verboten. In Ausnahmefällen, bei denen eine technische Spezifikation einen solchen Zugang erfordert, kann dieser nur nach einer klareren Benachrichtigung des COMMANDITAIRE, einer detaillierten Begründung und der schriftlichen Zustimmierung erfolgen.

Diese Maßnahme stellt sicher, dass der COMMANDITAIRE den Zugriff auf seine Daten kontrolliert und sichert, indem alle Ausnahmen von der Regel ausdrücklich genehmigt und dokumentiert werden.

## Verantwortlichkeiten von Dritten, die für den Dienstleistungsangebot beigetragen haben

Der Anbieter überwacht die Liste der Drittpartner, die am Angebot des Dienstes beteiligt sind. Diese Drittpartner sind die Softwarehersteller, Lieferanten (des Anbieters) und andere Auftragnehmer, die am Angebot des Dienstes beitragen. Der Anbieter setzt folgende Maßnahmen gegen diese Drittpartner um:

- Der Anbieter verlangt von den Teilnehmern am Implementierungsprozess des Dienstes, insbesondere in ihrer Beiträge zum Dienst, einen Sicherheitsstandard, der mindestens dem entspricht, das der Anbieter in seiner eigenen Sicherheitspolitik für den Service anbietet;

- Der Anbieter verhandelt mit jedem Teilnehmer am Implementierungsprozess des Dienstes individuelle Auditsklauseln, die es einem Qualifikationsorganismus ermöglichen, zu überprüfen, ob diese Drittpartner die gesetzlichen Anforderungen und die internen Standards (SNC) einhalten. Dies ermöglicht dem Anbieter, seine Verpflichtungen in der vorliegenden Dienstleistungsvereinbarung einzuhalten;

- Der Anbieter implementiert eine Prozedur zur regelmäßigen Überprüfung der Maßnahmen, die von den Teilnehmern am Implementierungsprozess des Dienstes ergriffen werden, um die Anforderungen des Anbieters einzuhalten.

- Der Anbieter übernimmt die Kontrolle über Änderungen, die von Drittpartnern am System der Information des Dienstes vorgenommen wurden, die den Sicherheitsstandard beeinflussen könnten.

## Verantwortlichkeiten und Pflichten des COMMANDITAIRE

Im Rahmen des Dienstes hat das COMMANDITAIRE folgende Verantwortlichkeiten:

- Der Anbieter liefert dem COMMANDITAIRE eine Plattform für die Ausführung virtueller Maschinen. Die Konfiguration dieser Maschinen obliegt dem COMMANDITAIRE. Jede virtuelle Maschine muss mit einer Backup-Politik versehen sein. Der Anbieter definiert über seine Schnittstellen automatische Backup-Politiken. Es ist jedoch Aufgabe des COMMANDITAIRE, diese Politiken zu aktivieren und somit die virtuellen Maschinen zu starten.

- Das COMMANDITAIRE erlaubt der ANSSI und dem Qualifikationsorganismus SNC, den Dienst und die technische Infrastruktur, die den Dienst liefert, zu auditeren.

- Das COMMANDITAIRE ist verantwortlich, dem Anbieter eventuelle Branchenspezifische Anforderungen anzuzeigen, die mit den von ihm übermittelten Informationen verbunden sind und deren Beachtung vom Anbieter erforderlich macht.

- Das COMMANDITAIRE akzeptiert, dass es nicht auf den Anbieter zugehen kann, um Anforderungen oder Handlungen zu stellen, die dem Anbieter aus dem SecNumCloud-Referenzpunkt (der aktuellen Version) abweichen oder dessen Sicherheitsniveau senken.

## COMMANDITAIRE'S RIGHTS

At any point during the contractual relationship, the COMMANDITÀIRE may file a complaint regarding the qualified service with ANSSI.

At any time, the COMMANDITÀIRE can request from the Prestataire that its internal settlement and ethics charter be made accessible to it.

## Löschung der Daten am Ende des Vertrags

Bei Ablauf des Vertrages, sei es durch Ablauf oder aufgrund einer anderen Gründe, verpflichtet sich der Lieferant, die sicherheitsgewährleistete Löschung aller Daten des COMMANDITAIRE, einschließlich technischer Daten, durchzuführen. Der Lieferant stellt sicher, dass er dem COMMANDITAIRE ein formales Vorabverwarnungskonzept mit einem Mindestabstand von 21 Kalendertagen (21 Tage) übersendet. Die Daten des COMMANDITAIRE werden dann innerhalb eines maximalen Zeitraums von 30 Tagen nach der Benachrichtigung gelöscht.

Um diese Löschung zu bestätigen, übermittelt der Lieferant dem COMMANDITAIRE ein Zertifikat, das die Löschung der Daten bestätigt.

## Lebenszyklus des vorliegenden Dienstleistungsvertrag

## Eintritt in die Dienstleistungsvertrag

Die vorliegende Dienstleistungsvertrag tritt am Tag ihrer Unterzeichnung durch den Auftragsgeber in Kraft.

Die Sammlung, Verarbeitung, Speicherung und Bearbeitung von Daten im Rahmen der Vorvermarktung, Inbetriebnahme und Ausschaltung des Services erfolgt im Einklang mit der geltenden Gesetzgebung.

## Änderungen der Dienstleistungsvereinbarung

Die in der vorliegenden Dienstleistungsvereinbarung vorgenommenen Änderungen oder Hinzufügungen entsprechen ausschließlich den Vorschlägen der für diese Zwecke zuständigen Gremien. Diese Vorschlagsmöglichkeiten werden von den Parteien geprüft, die befugt sind, die Aspekte festzulegen, die eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede Änderung der Dienstleistungsvereinbarung nach Validierung, die die ursprünglich festgelegten finanziellen Bedingungen ändert, eine schriftliche Anpassung des laufenden Vertrags und der Unterschrift erfordert.

Faktoren, die zu einer Überprüfung dieser Dienstleistungsvereinbarung führen können, sind:

- Die Entwicklung der technischen Infrastruktur, die den Service OpenIaaS liefert;
- Anpassungen, die beim Prestator vorgenommen wurden, um den Service bereitzustellen;
- Änderungen der Verpflichtungen und Sanktionen;
- Organisationsplanänderungen innerhalb des COMMANDITAIRE oder beim Prestator;
- Ausweitung oder Verkleinerung des Anwendungsbereichs des Services.

Die Verwaltung der Versionen und Änderungen der Dienstleistungsvereinbarung wird in der Vorlage erfasst, um den Überblick zu erhalten.

### Evolutionen ausgelöst durch den COMMANDITAIRE

Die Änderungen der Dienstleistungsvereinbarung können hauptsächlich aus folgenden Gründen erfolgen:

- Eine Weiterentwicklung des von uns verwalteten Infrastrukturbereichs;

- Eine Anpassung der durch den Prestator bereitgestellten Dienste;

- Eine Änderung der Servicelevelabsprachen durch den Prestator.

### Änderungen durch den Auftragnehmer

Jede Änderung der Dienstleistungsvereinbarung unterliegt der Zustimmung des Kommanditären. Es wird vereinbart, dass jede Änderung oder Ergänzung validiert, die die finanziellen Elemente des Vertrags verändert, möglicherweise eine Unterzeichnung eines Anhangs zu diesem Vertrag erforderlich macht.

## Réversibilität

Zusätzlich verpflichtet sich Cloud Temple, die vorliegende
Dienstleistungsvereinbarung (u.a. auch deren Kündigung) ohne Sanktionierung für den COMMANDITAIRE zu ermöglichen, falls dieser seine Qualifikation SecNumCloud verliert.

Die angebotenen Dienste enthalten keine Verpflichtung zur Rückgängigkeitsfähigkeit (d.h. Unterstützung des COMMANDITAIRE beim Wechsel zu einem anderen "Anbieter") außer der Bereitstellung der COMMANDITAIRE-Schnittstelle durch den Anbieter, die es dem COMMANDITAIRE ermöglicht, seine Daten zu sichern und wiederherzustellen, einschließlich der Konfigurationsdaten seines Informationssystems über eine der folgenden technischen Modalitäten:

- Den Einsatz von Dateien in einem oder mehreren dokumentierten und nutzbar gemachten Formaten außerhalb des vom Anbieter bereitgestellten Dienstes.
- Die Einrichtung technischer Schnittstellen, die es dem COMMANDITAIRE ermöglichen, auf Daten in einem dokumentierten und nutzbar gemachten Schema (API) zuzugreifen.

Der COMMANDITAIRE, der allein für sein System verantwortlich ist, muss alles tun, um diese Operation zu erleichtern, falls er dies erforderlich befindet (was bedeutet, dass er eine gründliche Dokumentation einrichten und Pläne zur Rückgängigkeitsfähigkeit erstellen muss). In Fällen, in denen der COMMANDITAIRE zusätzliche Leistungen benötigt, kann der Anbieter eine Beratungsaufgabe anbieten, die im Rahmen eines spezifischen Vertrags zu verhandeln ist.

---

## Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes

---

### Verwaltung von Meldungen und Ausfällen

Ich werde die folgenden Schritte zur Verwaltung von Meldungen und Ausfällen in Markdown-Format übersetzen:

1. **Erkennung der Problematik**:
   - Identifizieren Sie die Art des Problems (Fehler, Performance-Probleme, Ausfall usw.).
   - Notieren Sie den Zeitpunkt der Meldung und der ersten Beobachtung.

2. **Bewertung der Schwere**:
   - Bewerten Sie die Schwere des Problems anhand eines festgelegten Skala (z.B. kritisch, hoch, mittel, niedrig).
   - Notieren Sie den Grund für diese Bewertung.

3. **Kommunikation**:
   - Informieren Sie die zuständigen Teams über das Problem und seine Schwere (z.B. via E-Mail, Chat oder ein Ticketing-System).
   - Fügen Sie alle relevanten Details hinzu, wie Fehlermeldungen, Auffälligkeiten, Beschreibung des Problems usw.

4. **Analyse und Diagnose**:
   - Legen Sie die Ursache des Problems fest (z.B. durch Logs, Debugging oder Tests).
   - Notieren Sie alle Schritte zur Diagnose im Problem-Tracking-System.

5. **Behebung**:
   - Entwickeln Sie einen Plan zur Behebung des Problems und priorisieren Sie die Maßnahmen.
   - Implementieren Sie den Lösungsweg und testen Sie diesen gründlich, um sicherzustellen, dass das Problem vollständig behoben wurde.

6. **Validierung**:
   - Validieren Sie die Behebung durch Tests oder Durchführung der ursprünglichen Auffälligkeiten.
   - Überprüfen Sie, ob das Problem nicht erneut auftritt.

7. **Dokumentation**:
   - Führen Sie eine detaillierte Dokumentation des gesamten Prozesses durch, einschließlich der Schritte zur Erkennung, Bewertung, Analyse, Behebung und Validierung.
   - Speichern Sie diese Informationen im Problem-Tracking-System für zukünftige Referenzen.

8. **Präsentation**:
   - Präsentieren Sie die Ergebnisse an die relevanten Stakeholder (z.B. Management, Teamleiter).
   - Diskutieren Sie mögliche Verbesserungen im Prozess zur Vermeidung ähnlicher Probleme in Zukunft.

9. **Lernen**:
   - Analysieren Sie die Ursache des Problems und identifizieren Sie Möglichkeiten für kontinuierliches Lernen und Verbesserung der Systeme oder Prozesse.

Diese Schritte sollten in einem strukturierten Problem-Tracking-System (z.B. Jira, Redmine) dokumentiert werden, um die Transparenz und Effizienz des Incident-Management zu gewährleisten.

---
Incidents
---

#### Artikel 2 - Art der Schadenarten, die in Anspruch genommen werden

- Schäden durch Unfälle;

- Ausfälle und Fehlers;

- Sicherheitsverletzungen, die die Verfügbarkeit, den Datenschutz oder die Integrität des Dienstes beeinträchtigen.

#### Behandlung von Anlässen

> Der Anbieter informiert den Buchhalter in den besten Fällen innerhalb kürzester Zeit über
> Störungen und Ausfälle, mithilfe einer Benachrichtigung im Buchhaltungssystem oder per E-Mail an den zuständigen Buchhalter. Der Anbieter informiert den Buchhalter auch über die Bearbeitung des Anlases über den von ihm genutzten Kanal der Anlaßmeldung oder über den in der Anlaßmeldung angegebenen Kontakt.

#### Sicherheitsmeldungslevel

Das COMMANDITAIRE hat die Aufgabe, die Ernstgraden der Sicherheitsverletzungen zu bestimmen, für die es benachrichtigt werden möchte, z.B. durch die Formalisierung in einem PAS, das auf den Dienst anwendbar ist.

Standardmäßig wird das COMMANDITAIRE über:

- Sicherheitsverletzungen mit Auswirkungen (Impacts I1 und I2 nach der Schwereanordnung im Verarbeitungsprozess der vorliegenden Leistungsvereinbarung) informiert;

- Sicherheitsverletzungen, die die Vertraulichkeit oder Integrität der von COMMANDITAIRE für den Dienst übertragenen Daten betreffen;

- Datenschutzverletzungen, bei denen das COMMANDITAIRE als Verantwortlicher gemäß Artikel 8 der Anhang DPA für die Verarbeitung verantwortlich ist;

-

### Dienstpflege

### Art der Wartung

Verletzungen personenbezogener Daten, für die der Auftragnehmer verantwortlich ist, den Umgang zu gewährleisten und dessen Datenpersonen betreffen, gemäß Artikel 8 der Vertragsdurchführungsvereinbarung (DPA). Die durchgeführte Wartung umfasst:

- Die Umsetzung des Wartungsplans zur Aufrechterhaltung des Dienstes in betriebsfähigen Zustand, um sicherzustellen, dass die Verfügbarkeitskennzeichen wie vom Auftragnehmer bereits angegeben erfüllt sind;

- Die Umsetzung des Plans PCA/PRA (Notfallmanagementplan), falls der Kunde dies abgeschlossen hat, das bei Auftreten von Notfällen automatisch aktiviert wird.

### Remote Access to Cloud Temple within the COMMANDITAIRE Perimeter

The Provider explicitly forbids, as per the terms of this Service Agreement, any access to Tenants and the COMMANDITAIRE interface.

It will be the responsibility of the COMMANDITAIRE to grant the necessary access to Provider's personnel. The COMMANDITAIRE acknowledges that these accesses will be utilized within the hosting and, if applicable, information management (if subscribed by COMMANDITAIRE).

### Zugang von Dritten au Dienst auf dem Bereitstellungspermimeter

Kein Zugang von Dritten, die zur Bereitstellung des Services beitragen,
auf Distanz ist erlaubt.

Wenn ein technischer Bedarf diesen Fall erforderlich macht, wird dieser
Zugang nur nach der schriftlichen Justifizierung durch den COMMANDITAIRE
und dessen ausdrücklicher Zustimmung erst eingerichtet.

# Datenlöschung am Ende des Vertrags

Bei Ablauf oder jeder anderen Situation, die zum Ende des Vertrags führt, stellt der Lieferant sicher, dass die gesamten Daten, die im Rahmen des Dienstes verarbeitet wurden, sicher entfernt werden, einschließlich technischer Daten des BENUTZER. Der Lieferant gibt eine formale Benachrichtigung innerhalb eines Zeitraums von 21 Kalendertagen (21) ab Vertragsende. Die Daten des BENUTZERS werden innerhalb von maximal 30 Tagen nach der Benachrichtigung gelöscht. Der Lieferant liefert ein Entfernungszertifikat für die Datenlöschung an den BENUTZER.

## Anwendbares Recht

## Allgemein

Die anwendbare Rechtsordnung und die zu der vorliegenden Dienstleistungsvereinbarung unterliegende Rechtssubjekte ist das französische Recht.

## Einhaltung von Gesetzen und Vorschriften

Der Anbieter sich verpflichtet sich auf die folgenden Punkte:

- Identifizierung der rechtlichen und regulatorischen Einschränkungen, die im Rahmen des Dienstes anwendbar sind;

- Einhaltung der rechtlichen und regulatorischen Anforderungen für die von uns übernommenen Daten innerhalb der Grenzen unserer Verantwortung und gemäß den Bestimmungen des Vertrags andererseits;

- Einhaltung der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG);

- Implementierung von Maßnahmen zur Datenpersönlichkeitsverwaltung;

- Einrichtung eines regelmäßigen Rechts- und Vorschriftenüberwachungsverfahrens;

- Aufrechterhaltung angemessener Beziehungen oder eine Überwachung mit den zuständigen Behörden im Zusammenhang mit der Art der von uns verarbeiteten Daten innerhalb des Rahmens des Dienstes. Dazu gehören insbesondere das Bundesamt für Sicherheit im Internet (BSI), das Centre National d'Etudes Spéciales (CNEST) und die Commission Nationale de l'Informatique et des Libertés (CNIL).

## GDPR

As a processor under the meaning of Article 28 of the General Data Protection Regulation (RGPD), the Processor commits to:

- Ensuring transparency and traceability;

- Designating a DPO responsible for defining and implementing data protection measures for personal data;

- Providing assistance and advice to the Principal in alerting them if their instruction would constitute a violation of data protection rules for personal data, should the Processor have the means to identify it;

- Ensuring security of processed data (due to SecNumCloud qualification).

## Protection against extra-EU law

The provider's corporate headquarters is located within an EU member state. The provider's share capital and voting rights in the company are not, directly or indirectly:

- individually held by more than 24%;

- and collectively held by more than 39%;

by third entities having their corporate headquarters, central administration, or main establishment within a non-EU member state.

In case the provider, as part of the service, engages with a third party - including a subcontractor - that has its corporate headquarters, central administration, or main establishment in a non-EU member state or is owned or controlled by a third party located outside the EU, the provider commits to:

- ensuring this third party does not have access to operational data;

- maintaining operational autonomy through the ability to engage another subcontractor or swiftly implement a technological alternative.

For clarity, the data in question includes those entrusted to the provider by the COMMANDITAIRE as well as all TECHNICAL DATA encompassing information about the COMMANDITAIRES.

For the purposes of this article, the notion of control is understood according to the definition provided in Article L233-3 II of the French Commercial Code.

# SIGNATUREN

Unterzeichnet am \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, dem
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Für Cloud Temple, den AUßENSTELLER

Für \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, den BETREUER