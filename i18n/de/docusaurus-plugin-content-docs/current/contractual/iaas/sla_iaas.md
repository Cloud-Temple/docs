---
title: Titel des Dienstvereinbarungen für Cloud-Infrastruktur (SecNumCloud IaaS)
---

# CONVENTION DE SERVICES IaaS

| Empfänger: | **COMMANDITAIRE** |
| :--- | :--- |
| **Dokument-Referenz**: | CT.AM.JUR.ANX CdS-IaaS - 20251701_v3.0.docx_Jour JJ AAAA |
| **Ansprechpartner**: | *Pränom* *Name* Account Manager e-mail : *prenom.nom*\@cloud-temple.com |
| **Datum der letzten Aktualisierung**: | 17/01/2025 |
| **Datum der vertraglichen Validierung**: | Jour JJ AAAA |

------------------------------------------------------------------------

| Version | Datum | Handlung | Autor |
| :--- | :--- | :--- | :--- |
| v0.1 | 07/06/2022 | Erstellung | Lorena ALCALDE |
| v0.2 | 14/09/2022 | Verbesserung | Lorena ALCALDE |
| v1.0 | 30/12/2022 | Integration von Indikatoren | Lorena ALCALDE |
| v1.1 | 23/01/2023 | Fußnoten-Anpassung | Lorena ALCALDE |
| v1.2 | 22/05/2023 | Verbesserung | Lorena ALCALDE |
| v1.3 | 29/06/2023 | Verbesserung | Lorena ALCALDE |
| v1.4 | 06/11/2023 | Änderung des Kapitals und Verbesserung | Lorena ALCALDE |
| v1.5 | 30/11/2023 | Verbesserung | Lorena ALCALDE |
| v1.6 | 21/03/2024 | Verbesserung | Lorena ALCALDE |
| v2.0 | 29/03/2024 | Anpassungen zur Konformität SNC | Nicolas ABRIOUX |
| v2.0 | 03/04/2024 | Veröffentlichung | Lorena ALCALDE |
| V3.0 | 17/01/2025 | Verbesserung | Emeline CAZAUX |

------------------------------------------------------------------------

## Vorbereitung und Glossar

---

## Vorlage

Die vorliegende Dokumentarierung regelt die Dienstleistungsvereinbarung im Zusammenhang mit dem qualifizierten IaaS-Service von SecNumCloud, bekannt als "Sicherer Tempel".

Der Service wird als SecNumCloud qualifiziert (siehe Zertifikat in Anhang) anerkannt.

Die vorliegende Dienstleistungsvereinbarung ergänzt und ergänzt die Allgemeinen Verkaufs- und Nutzungsbedingungen des Anbieters und soll sicherstellen, dass alle Dokumente konsistent interpretiert werden. Im Falle von Widersprüchen oder Konflikten zwischen den Vertragsbestimmungen gelten die folgenden Reihenfolge:

1. Allgemeine Verkaufs- und Nutzungsbedingungen (CGVU)
2. Dienstleistungsvereinbarung SecNumCloud IaaS
3. Dienstleistungsvereinbarung SecNumCloud OpenIaaS
4. Dienstleistungsvereinbarung SecNumCloud PaaS
5. Spezifische Dienstleistungsvereinbarung - Bare Metal
6. Besondere Vertragsbestimmung
7. Sicherheitsversicherungsvertrag (PAS)
8. Besondere Nutzungsbedingungen (CPU)
9. Datenschutzabführungsvertrag

## Glossary

In the present Service Agreement, the **Commanditaire**, **Provider**, and **Parties** are identified in the Contract to which this Service Agreement is annexed.

The following expressions used in this Service Agreement shall be interpreted according to the definitions assigned to them below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, with known and accepted production procedures and impacts (including financial ones) by all Parties. It is then integrated into the standard change catalog, and may have a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Provider enabling the Commanditaire to benefit from the Service, and to which this Service Agreement is annexed.

- **Service Agreement:** This document, established within a specific contract or General Terms of Sale and Use (CGVU), in compliance with SecNumCloud Reference Framework requirements.

- **Service Request:** A request for evolution following a procedure where the execution: i) does not modify the CMDB; ii) known operational mode, costs, and risks are accepted upfront without specific return procedures; iii) is subject to an agreed service level agreement (SLA) and included in the contract fee when performed during business hours.

- **Availability:** Capacity to ensure Service availability and optimal performance, in accordance with defined criteria and commitments within the SLAs.

- **Technical Data:** Encompasses all data processed for delivering the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration of access, directory, certificates, etc.

- **Event:** Any detectable or identifiable occurrence potentially significant for managing the Service.

- **Hypervisor:** Operating system enabling execution of virtual machines on a compute layer.

- **Incident:** An unforeseen event disrupting normal Service operation or compromising COMMANDITAIRE data security.

- **Security Incident:** Any event within the Service's scope:

  - Intentionally malicious;
  - Accidental affecting Service integrity, confidentiality, or traceability of COMMANDITAIRE data;
  - Compromising existing security measures. Non-origin-based availability disruptions are not considered Security Incidents (hardware failure, bug, malfunction, natural disaster...).

- **Commanditaire Interface:** Administration interface for the Service provided by the Provider to the Commanditaire, comprising a web administration console and an API.

- **Production:** Actions of administration implementing the Change once approved (the change, in ITIL terminology, pertains to managing changes rather than their execution/realization).

- **Problem:** Cause of recurring incidents, potential incident (situation at risk) requiring analysis and resolution to prevent recurrence.

- **Region:** A geographically defined set of availability cloud zones providing network, compute, and storage services for optimizing latency, performance, and local regulatory compliance.

- **Service:** The SecNumCloud certified IaaS service named "Secure Temple," delivered by the Provider from maintained technical infrastructures as described in the "Description of Service" section of this Agreement.

- **Secure Temple:** Refers to the SecNumCloud IaaS service offered by Cloud Temple, as defined in the accessible ANSSI attestation on their website and included as an attachment to this Service Agreement.

- **Catastrophe:** A severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Surveillance of a Information System or Service, involving collection of various data such as measurements and alarms. This activity is limited to observation and tracking without direct intervention on monitored elements, a prerogative reserved for operational administration.

- **Tenant:** An isolated instance reserved for a user or group of users sharing a common infrastructure while maintaining data and application independence and security.

- **Availability Zone (AZ) (Availability Region):** A specific, isolated section of the cloud computing infrastructure designed to ensure high availability and resilience of services through geographical distribution of resources.

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

Diese Dienstleistungsvereinbarung regelt die Bedingungen, unter denen der Anbieter dem Auftragnehmer das Service anbietet. Ihr Zweck besteht darin:

- Die von der Auftraggeber erwarteten Leistungsanforderungen im Hinblick auf Funktionalität und Zuverlässigkeit des Services zu definieren;

- Die Pflichten des Anbieters festzulegen, um die vereinbarten Servicelevel einzuhalten;

- Die spezifischen Vorschriften anzugeben, die für den von uns gelieferten Service gelten;

- Eine Konsistenz und Integrität bei der Bewertung der Qualität des Services sicherzustellen;

- Die Güte der bereitgestellten Dienstleistungen durch quantitative Leistungsindikatoren zu gewährleisten.

Im Falle, dass der Anbieter seine Qualifikation SecNumCloud entzieht, kann der Vertrag vom Auftraggeber ohne Kündigungsfolge aufgelöst werden und es entstehen keine Sanktionen für den Auftragnehmer. In diesem Fall ist der Anbieter verpflichtet, den Auftraggeber unverzüglich über die Entziehung der Qualifikation durch eine offizielle Benachrichtigung per Registerbrief mit Beglaubigung zu informieren.

Es wird darauf hingewiesen, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Rückzug der ursprünglichen Qualifikation interpretiert wird.

# Audit

Der Lieferant verpflichtet sich, es dem AUFTRAGSMITTLER oder einem unabhängigen Auditor und nicht konkurrierenden Dritten zu ermöglichen, die gesamten Dokumente zu durchsuchen, die für die Bestätigung des vollständigen Erfüllens der Verpflichtungen zur Einhaltung der Anforderungen des Artikels 28 des Allgemeinen Datenschutz-Gesetzes (DSG) erforderlich sind. Dies erleichtert somit die Durchführung von Audits.

Durch die Annahme dieser Dienstleistungsvereinbarung erteilt der AUFTRAGSMITTLER dem Lieferanten explizite Erlaubnis:


1. Der Nationalen Agentur für die Sicherheit der Informationssysteme (ANSSI) sowie einer zuständigen Qualifizierungsstelle, um die Überprüfung der Konformität des Dienstes und seines Informationssystems auf das Referenzsystem SecNumCloud durchzuführen.
2. Ein Auditor für die Sicherheit von Informationssystemen, der den Anforderungen PASSI zugeordnet ist und vom Lieferanten ausdrücklich beauftragt wurde, Sicherheitsaudits über den Dienst durchzuführen.

## Dienstbeschreibung

### Dienstbeschreibung

Dieser Service bietet eine flexible und skalierbare Cloud-Hosting-Plattform für Softwareanwendungen. Er ermöglicht es Entwicklern, Daten in Echtzeit zu speichern, zu verarbeiten und zu verwalten, während gleichzeitig hohe Verfügbarkeit und Sicherheit der Informationen gewährleistet werden. Der Service unterstützt verschiedene Programmiersprachen und Frameworks und erleichtert so die Bereitstellung und den Betrieb komplexer Softwarelösungen.

Die wichtigsten Funktionen umfassen:
- **Skalierbarkeit**: Erleichtert die automatische Verwaltung von Ressourcen zur Bewältigung unterschiedlicher Arbeitslasten.
- **Hohe Verfügbarkeit**: Gewährleistet ein hohes Serviceniveau mit Redundanzen und robusten Sicherheitsmaßnahmen.
- **Sicherheit**: Integriert fortschrittliche Tools zum Schutz von Daten vor externen Bedrohungen.
- **Interoperabilität**: Ermöglicht die einfache Integration mit anderen Services und Systemen unter Verwendung von Standardprotokollen.
- **Effizientes Kostenmanagement**: Bietet ein transparentes, nutzungsbasiertes Preismodell, das es Kunden ermöglicht, nur für das zu zahlen, was sie verbrauchen.

## Shared Responsibility Model

The offered service by the Provider is characterized by providing the following services, which align with the principle of shared responsibility as presented in the SecNumCloud reference:

- Provisioning of computing resources (compute);

- Availability of storage spaces;

- Access to network connectivity and internet services;

- Offering a dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the COMMANDITAIRE within the context of the Service is outlined in §7.1.

It is understood that the Provider will utilize its expertise to deliver the Services in accordance with professional best practices and in compliance with SecNumCloud requirements.

## Detailed Scope Description of the Service

| Service | Description |
| :--- | :--- |
| **Compute** | Computing resource for the Tenant COMMANDITAIRE |
| **Storage** | Production data storage for the Tenant COMMANDITAIRE |
| **Object Storage S3** | Provision of a sovereign multi-AZ object storage infrastructure compatible with standard S3 APIs. |
| **Backup** | Subscription to appropriate mass storage capacity |
| **Network Infrastructure** | Network resource for the Tenant COMMANDITAIRE |
| **COMMANDITAIRE Console** | Service enabling COMMANDITAIRE to access and manage its IaaS services via the Shiva interface |
| **Support** | Support service accompanying the aforementioned services, limited to SNC qualified scope and Prestataire responsibilities in this regard |

### Datacenter Infrastructures

The Service encompasses the provision, for each Availability Zone, of the following qualified services:

- Data center located in France for the FR region, compliant with the latest technological standards, offering a resilience level equivalent to or superior to Tier 3 according to Uptime Institute;
- Provision of technical rooms within dedicated datacenters designed to accommodate essential technical equipment required for service production, including computing, storage, networking, cabling, and other necessary components;
- Secure electrical supply ensured by two independent power circuits, guaranteeing uninterrupted service continuity;
- Supply of climate control systems tailored to meet manufacturer standards and recommendations, ensuring optimal conditions for technical devices;
- Continuous monitoring and metrology detail, enabling precise tracking and proactive management of the service's performance and security.

The Provider ensures the availability of advanced fire detection and suppression services, designed to identify and effectively neutralize any fire incidents within installations. These systems include high-precision smoke detectors and rapid-acting extinguishing devices that do not damage IT equipment. This service is critical for preventing fire hazards, minimizing potential damage, and ensuring operational continuity.

The COMMANDITAIRE is informed that all implemented security procedures and measures, including annual failover tests on generators, are vital to maintain the continuity and integrity of provided services. These practices aim to minimize downtime risks and ensure optimal response in case of an incident. By accepting these conditions, the COMMANDITAIRE acknowledges the importance of these safety measures and commits to cooperating fully for their implementation. The COMMANDITAIRE is also encouraged to review security recommendations and integrate them into its own risk management strategy.

### Software Management Infrastructure

The Provider delivers to the COMMANDITAURE the administration console and the API necessary for using the SERVICE. They commit to maintaining this console and API in optimal operational condition and ensuring continuous security maintenance. This is referred to as the "COMMANDITAURE Interface".

The Provider notifies the COMMANDITAURE that unusual usage of the "COMMANDITAURE Interface", especially excessive use of its command APIs (hammering), can trigger automatic security measures resulting in the blocking of access to command APIs or the SERVICE. It's crucial to note that this situation does not constitute a Service outage but rather an action to protect the SERVICE and Provider's infrastructure; thus, the COMMANDITAURE should not consider it as such in its calculations.

Furthermore, the Provider informs the COMMANDITAURE that identical requests (duplicates) sent to their APIs are limited to one per second (Throttling). If the COMMANDITAURE submits identical requests at a higher frequency, their rejection will not be interpreted as an outage of the SERVICE.

### Computing Infrastructures

The Service encompasses the provision of computing resources within the subscribed zones by the COMMANDITAIRE in the form of virtual machines. This includes:

- Provision of hardware necessary for the operation of compute nodes;
- Delivery of compute nodes in quantities specified by the COMMANDITAIRE and distributed according to their chosen availability zones. It's important to note that these compute nodes are exclusively dedicated to the COMMANDITAIRE;
- Availability of hypervisor operating systems, along with assurance of the operational readiness and security of the underlying software infrastructure required for managing these hypervisor operating systems. The Prestataire is responsible for operational maintenance and overall security of the Service but does not possess specific knowledge regarding the COMMANDITAIRE's production environments or workload requirements. Consequently, the decision to update the hypervisor operating system on compute nodes, an action potentially necessitating a restart, falls entirely on the COMMANDITAIRE. This operation can be executed via the COMMANDITAIRE Interface.

The selection of the compute node model, chosen from the catalog provided by the Prestataire, is under the COMMANDITAIRE's responsibility.

### Speicherinfrastruktur

Das Dienstleistungsangebot umfasst die Bereitstellung des COMMANDEURS mit einer gemeinsamen Speicherinfrastruktur im SAN-Verbindungsnetz (Storage Area Network), die verschiedene Leistungsniveaus bietet. Dieses Angebot umfasst:

- Die Implementierung und Wartung des spezifischen SAN-Netzwerks in Betrieb und Sicherheitsstatus für den COMMANDEUR;
- Die Installation und Verwaltung der gemeinsamen Speicherbanken zwischen den Kunden, einschließlich ihrer Betriebsbereitschaft und -sicherheit, Überwachung sowie Metriken;
- Die Einrichtung automatisierter Systeme zur Allokation von LUNs (Logical Unit Numbers) für den spezifischen Speicherbedarf des COMMANDEUR gemäß den abonnierten Volumina.

### Globale Network Infrastructure

The Provider, as part of the Service, establishes a global network facilitating the COMMANDITAIRE's access to its hosted systems. This service includes:

- The provision, maintenance in operational condition, and security of all fiber optic links connecting different availability zones;

- The provision, maintenance in operational condition, and security of technical equipment necessary for the proper functioning of the network and client isolation.

The Tenant COMMANDITAIRE's network interconnection with Internet or private networks, as well as the networking equipment, operator links, and other technical components enabling this interconnection, are outside the scope of the Service. This network interconnection is implemented in accordance with the provisions outlined in the Contract.

### Backup Infrastructure

The Provider offers the COMMANDITAIRE a dedicated and managed backup service, designed to protect its virtual machines. The Provider ensures that this backup service remains operational and secure. The Provider guarantees that COMMANDITAIRE's backups will be located outside of the availability zone of the protected workloads, subject to COMMANDITAIRE subscribing to the appropriate infrastructure units.

This backup service is limited to backing up virtual machines and the topology configurations of the IaaS environment within the Tenant of COMMANDITAIRE, as part of the Service. The implementation and application of a suitable backup policy by COMMANDITAIRE depend on subscribing to specific infrastructure units. It is therefore up to COMMANDITAIRE to ensure that the necessary technical resources are available from the Provider for implementing its backup policy or adjusting it according to available means.

The Provider commits to notifying COMMANDITAIRE in case of capacity constraints and offering consultancy for optimizing resources. The Provider's obligations will be confined to fulfilling COMMANDITAIRE's expressed backup policy requirements, within the subscribed resources.

### Implementierung von Wiederherstellungsoptionen oder Kontinuitätslösungen

Der Lieferant stellt dem Auftraggeber alle technischen Lösungen zur Verfügung, die für eine optimale Verteilung der Ressourcen in verschiedenen Verfügbarkeitszonen erforderlich sind. Es obliegt dem Auftraggeber, diese Ressourcenverteilung effektiv zu verwalten, wobei er auf die von uns zur Verfügung gestellten Werkzeuge zurückgreifen kann.

### Einschränkungen von Cloud-Services im Qualifizierten IaaS-Modell

Im Qualifizierten Infrastructure-as-a-Service (IaaS) Modell gibt es mehrere Einschränkungen, die zu beachten sind:

1. **Skalierbarkeit**: Obwohl das IaaS selbst eine hohe Skalierbarkeit bietet, können bestimmte Anwendungen oder Dienste aufgrund ihrer Architektur und der verwendeten Technologien Schwierigkeiten haben, sich nahtlos an die Skalierung anzupassen.

2. **Verfügbarkeit**: Die Verfügbarkeit von Ressourcen kann durch lokale Netzwerkprobleme oder Hardware-Fehler eingeschränkt sein. Dies kann zu Ausfallzeiten führen, die nicht vollständig kontrolliert werden können.

3. **Sicherheit**: Obwohl das IaaS robuste Sicherheitsfunktionen bietet, sind die Kunden für die Verwaltung der Sicherheit ihrer Daten und Anwendungen verantwortlich. Dies umfasst die Konfiguration von Firewalls, Verschlüsselung und Authentifizierungsprotokollen.

4. **Kompatibilität**: Die Kompatibilität zwischen verschiedenen Cloud-Plattformen oder zwischen lokalen Infrastrukturen kann eine Herausforderung darstellen, insbesondere bei der Integration von Anwendungen und Daten zwischen diesen Systemen.

5. **Kostenmanagement**: Obwohl das IaaS seine Kosten transparent macht, können unüberwachte Ressourcennutzung zu unerwartet hohen Rechnungen führen. Eine präzise Überwachung und Steuerung der Ressourcen ist entscheidend für effiziente Kostenkontrolle.

6. **Performance**: Die Leistung kann durch die Konfiguration der virtuellen Maschinen (VMs) oder Container beeinflusst werden, sowie durch die Netzwerkbandbreite und -verfügbarkeit zwischen den Ressourcen.

7. **Verwaltung und Wartung**: Die Verwaltung und Wartung der VMs oder Container erfordert spezialisiertes Fachwissen, das nicht immer von den Cloud-Anbietern bereitgestellt wird. Dies kann zusätzliche Kosten für externe Dienstleistungen bedeuten.

8. **Compliance**: Die Einhaltung von Branchen- und Regulatorienanforderungen (z.B. GDPR, HIPAA) erfordert eine sorgfältige Konfiguration und Überwachung der Cloud-Umgebung, was zusätzliche Anstrengungen darstellt.

9. **Migration**: Die Migration von Anwendungen oder Daten zwischen verschiedenen IaaS-Anbietern kann komplex sein aufgrund unterschiedlicher Technologien und Protokolle.

10. **Abhängigkeit vom Anbieter**: Eine starke Abhängigkeit von einem einzelnen Cloud-Anbieter kann die Flexibilität und Kostenkontrolle beeinträchtigen, da Änderungen in den Preisen oder Dienstleistungen des Anbieters direkte Auswirkungen auf die Betriebskosten haben können.

Diese Einschränkungen erfordern eine sorgfältige Planung und Konfiguration der Cloud-Umgebung, um effektiv genutzt zu werden und potenzielle Risiken minimiert zu werden.

### Managed Services in RUN

Es ist wichtig zu beachten, dass von dem SERVICE:

- Der Hosting physischer Komponenten des COMMANDITAIRE;

- Die Netzwerkverbindung des Tenants COMMANDITAIRE mit Internet oder privaten
    Netzwerken sowie die Verbindungen der Betreiber;

- Alle verwalteten Dienste (TMA);

- Jede Unterstützung auf virtuellen Maschinen im Betriebssystem und über
    das Iaa-Pile, auch wenn es sich nur um Überwachung handelt.

Es ist jedoch absolut nicht ausgeschlossen, dass der COMMANDITAIRE diese
    Dienste von der Angebotserbranz des MSP beim Anbieter in Anspruch
    nehmen möchte, um im Modell services verwaltet zu unterstützen. Diese
    Dienste würden dann nicht durch die vorliegende Leistungsvereinbarung
    und deren Parteienverpflichtungen abgedeckt sein.

### Schutzbeauftragte-Konfiguration

Standardmäßig stellt der Anbieter die Bereitstellung von IaaS-Ressourcen beim COMMANDITAURE durch Reservierung von Ressourcen und Konfiguration von Deployments für die Verwendung von Verfügungszonen vor. Es obliegt dem COMMANDITAURE, die Verfügungszonen über die Benutzeroberfläche COMMANDITAURE auszuwählen.

### Backup Configuration

The backup service ceases at backing up virtual machines and topological configurations representing the IaaS environment of COMMANDITAIRE's tenants within the scope of this service.

The backup provision and implementation of COMMANDITAIRE's backup policy are subject to subscribing to necessary storage space on the mass storage level to ensure the service. It is, therefore, COMMANDITAIRE's responsibility to procure from the Provider the technical means required to implement the backup policy within its IT perimeter or adjust the backup policy to match the implemented means. The Provider commits to informing COMMANDITAIRE in case of technical capacity limitations.

The Provider will establish the necessary technical and human resources for backing up the hosted system, adhering to the subscribed resources' limits.

Furthermore, for non-supported perimeters by the Provider, it falls upon COMMANDITAIRE to define its own backup strategy and manually configure VM backups or request service from the Provider if a managed service contract exists, allowing the Provider access via COMMANDITAIRE's administration console (as outlined in this Service Agreement) with functionalities for configuring backups.

This service pledges only to translate, via the ADMINISTRATION interface, the configuration explicitly defined by COMMANDITAIRE.

Considering the flexibility of the Provider's offer, COMMANDITAIRE has the option to apply a "no backup" policy on certain VMs. In such cases, it is COMMANDITAIRE's prerogative to choose this policy. The Provider will not back up VMs associated with the "no backup" policy. The Provider alerts COMMANDITAIRE that opting for "no backup" or manual backups exposes COMMANDITAIRE to irrecoverable data loss in case of incidents affecting lower layers or dependent on COMMANDITAIRE's responsibility within the IaaS model. In this scenario, it would be impossible for the Provider to restore data due to the absence of anything to restore. The Provider recommends always backing up VMs.

Regarding any matters concerning the operating system installed on a virtual machine and all software or programs executed "on top" of the OS, it is COMMANDITAIRE's responsibility to carry out administrative and oversight tasks within the European Union if it aims to ensure complete vertical management and control of the IT stack from the EU. Such administrative actions outside the Provider's scope of responsibility under this Service Agreement, as detailed in the "Shared Responsibilities" section of this Service Agreement.

### Implementierung des Dienstes

### Technische Voraussetzungen

Für die Umsetzung des Dienstes erkennt der COMMANDITAIRE an, dass es auf folgende Virtualisierungstechnologie von VMware verweisen wird:

- Es muss mit der vom Anbieter unterstützten Version von VMware in Einhaltung mit den Bereitstellungsrichtlinien des Anbieters arbeiten.
- Es muss auf die Backup-Lösung durch den Anbieter zurückgreifen.
- Es müssen festgelegte IP-Adressen angegeben werden, über die der Anbieter COMMANDITAIRE den Zugriff auf die INTERFACE COMMANDITAIRE ermöglicht. Diese Liste wird als "Whitelist" bezeichnet und kann über den vorgesehenen Menü im Console oder durch Serviceanfragen für spätere Änderungen angepasst werden. Bei der Initialisierung des Dienstes muss der Anbieter mindestens eine Adresse IP erfahren, die aufgeführt wird.

## Standort des Dienstleistungen in Frankreich

Es wird ausdrücklich festgelegt, dass keine der von der Bereitstellung dieses Dienstes beteiligten Operationen oder physischen Komponenten außerhalb der Europäischen Union ansässig sind.

Dazu gehören insbesondere der Support, die Betriebsführung und die Sicherheitsüberwachung (SOC) der technischen Infrastruktur, die den Dienst liefert. Dementsprechend werden alle Speicherung, Administration, Überwachung und Verarbeitung in Frankreich durchgeführt.

### Standort der Datencenter, die den Dienst hosten

Abgesehen von den Betriebsausgaben und -abteilungen des Anbieters, befinden sich alle Produktionsbetriebe (einschließlich Speicher- und Verarbeitung von Daten sowie technische Komponenten, die den Dienst liefern) sowie die entsprechenden Datenzentralisierungen in französischen Datenzentren.

### Standorte der Cloud-Tempel-Mitarbeiter für den Dienstleistungsangebot

Die Mitarbeiter von Cloud Temple, die sich auf das Dienstangebot konzentrieren, arbeiten aus den Büros von Cloud Temple, die sich ausschließlich in Frankreich befinden. Diese Büros befinden sich in Tours, Lyon, Caen und Paris La Défense.

Der Beirat ist über die Möglichkeit informiert, dass die Mitarbeiter von Cloud Tempel von zu Hause aus arbeiten können. Allerdings stellt der Anbieter sicher, dass derselbe Sicherheitsstandard für den Zugang außerhalb des Büros gelten bleibt, insbesondere für den Zugriff über VPN. Diese externen Zugänge werden gemäß den Anforderungen des Referenzrahmens SecNumCloud implementiert.

## Unterstützung

### Nature des Unterstützungsmaterialien zum Dienst

Der Anbieter stellt ein technisches Unterstützungsservice an, das darauf abzielt, den COMMANDITAIRE bei der Verwaltung, Wartung und Optimierung seiner bereitgestellten Ressourcen zu unterstützen. Dieses Service umfasst eine breite Palette von Aktivitäten, von der Hilfe beim ersten Start des Dienstes bis hin zur fortgeschrittenen technischen Unterstützung für die Lösung spezifischer Probleme.

Hier ist eine Beschreibung der Merkmale und Funktionen des Support-Services:

- Hilfe bei der ersten Konfiguration des Dienstes;
- Hilfe bei der Behebung von Anomalien;
- Hilfe bei der Lösung von Problemen;
- Überwachung und Beratung zur Optimierung des Technologieunterbaus.

Im Rahmen des Support-Services übernimmt der Anbieter keine Rolle für den COMMANDITAIRE beim Einsatz des Dienstes selbst. Der COMMANDITAIRE bleibt vollständig verantwortlich für die Konfiguration, den Betrieb seiner VMs und seiner Tenants sowie für die Verwaltung aller Elemente (Daten und Anwendungen eingeschlossen), die er auf den Infrastrukturen des Anbieters gespeichert oder installiert hat. Der technische Support wird gemäß den Allgemeinen Bedingungen der Verkaufs- und Nutzungsbedingungen bereitgestellt, wobei der Anbieter eine Leistungsverpflichtung trifft.

Der COMMANDITAIRE verpflichtet sich, den technischen Support im Sinne des Vertrags zu nutzen und dabei vorsichtig zu sein, insbesondere keine nicht abonnierbaren Dienste beim Anbieter zu beanfragen oder die Teams des Anbieters bei seinen eigenen Kunden oder Dritten einzubinden, die nicht im Vertrag enthalten sind. Der Anbieter behält sich das Recht vor, Anfragen abzulehnen, die diesen Kriterien nicht erfüllen.

Das Niveau des Support-Engagements hängt von der Abrechnung der Unterstützungsressourcen ab.

### Anfrage an den technischen Support

Der technische Support ist über ein Ticket-System via die Befehlszeile COMMANDITAIRE zugänglich und erreichbar von Montag bis Freitag, außer an Feiertagen (8:00 - 18:00 Uhr; Kalender und Ordnung Französisch). Für Notfälle außerhalb der Geschäftszeiten, insbesondere solche, die einen erheblichen Produktionsausfall verursachen, kann der nachtdienst über das vom COMMANDITAIRE bekannt gegebene Telefonnummer kontaktiert werden.

Für jede Anfrage oder ein Incident muss ein Ticket beim Support des Anbieters angelegt werden. Die Erstellung dieses Tickets, das alle erforderlichen Informationen enthält und somit den Beginn der Bewertung der Verpflichtungen des Anbieters markiert, ist von größter Bedeutung.

Sobald der Anbieter eine Anfrage oder ein Incident-Notification erhält, sei es über die Befehlszeile der Verwaltung oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Berichterstattung eines Incidents ist es entscheidend, dass COMMANDITAIRE dem Anbieter alle relevanten Informationen über das Problem mitteilt. Diese Information ist entscheidend für eine angemessene Bewertung des Sachstands, die Priorisierung und einen effektiven Diagnoseprozess.

COMMANDITAIRE erhält dann eine Bestätigung per E-Mail, die die Erstellung des Tickets und dessen eindeutiger Nummer anzeigt. COMMANDITAIRE kann den Status und das Geschichte seiner Anfragen sowie Incident-Berichte direkt aus der Befehlszeile der Verwaltung überprüfen.

### Incidentbehandlungsprozess

Bei einer Meldung eines Problems führt die Technische Unterstützungs-Abteilung des Anbieters eine Untersuchung durch, um die Ursache des Problems zu bestimmen und einen Diagnoseplan zu erstellen. Der COMMANDITAIRE arbeitet aktiv mit dem Anbieter zusammen, indem er alle erforderlichen Informationen bereitstellt und die notwendigen Tests durchführt. Der Anbieter kann auf die Dienste des COMMANDITAIRE zugreifen, um das Problem zu diagnostizieren.

Wenn die Dienstleistungen des Anbieters als funktional angesehen werden und das Problem nicht ihrer Verantwortung zuzurechnen ist, wird der COMMANDITAIRE hierüber informiert. Bei Anfrage des COMMANDITAIRE kann der Anbieter Vorschläge für professionelle Dienste vorlegen, um die Ursache des Problems zu identifizieren und diese auf Basis von 30-minürigen Abständen in Rechnung zu stellen.

Im Fall, dass das Problem dem Anbieter oder einem seiner Subunternehmer zuzurechnen ist, ergänzt dieser den Diagnoseplan und setzt sich mit der Wiederherstellung des Dienstes auseinander ohne zusätzliche Kosten. Der Diagnoseplan basiert auf den Austauschdaten zwischen den Parteien sowie den Daten des Anbieters, die als glaubwürdig von allen Parteien anerkannt werden.

### Prozess der Priorisierung von Bearbeitungsaufgaben

Die Bestimmung des Prioritätsniveaus für einen Fall basiert auf einer mathematischen Analyse, die den Auswirkungen des Incidents und dessen Kritikalität bewertet:

- Die Ebenen der Auswirkungen werden wie folgt definiert:

| Ebene der Auswirkung | Beschreibung |
| :--- | :--- |
| **Ebene I1** | Der oder die Dienstleistungen des Anbieters sind unterbrochen |
| **Ebene I2** | Der oder die Dienstleistungen des Anbieters werden degradiert |
| **Ebene I3** | Der oder die Dienstleistungen des Anbieters sind derzeit stabil, zeigen jedoch Hinweise auf einen potenziellen langfristigen Niedergang |

- Die Ebenen der Kritik werden wie folgt definiert:

| Ebene der Kritik | Beschreibung |
| :--- | :--- |
| **Kritik C1** | Der oder die Dienstleistungen des Anbieters degradieren sich auf eine bedrohliche Geschwindigkeit |
| **Kritik C2** | Der oder die Dienstleistungen des Anbieters deteriorieren sich allmählich im Laufe der Zeit |
| **Kritik C3** | Der oder die Dienstleistungen des Anbieters stellen einen oder mehrere Unannehmlichkeiten dar, ohne signifikante Nachteile zu haben |

- Basierend auf einer gründlichen Analyse der Situation, die alle Faktoren berücksichtigt, die den Auswirkungen und der Kritik beeinflussen, wird ein Ticket entsprechend dem folgenden Entscheidungsmatrix zugeordnet:

| Ebene der Auswirkung / Ebene der Kritik | I1 | I2 | I3 |
| :--- | :--- | :--- | :--- |
| **Kritik C1** | Priorität P1 | Priorität P2 | Priorität P3 |
| **Kritik C2** | Priorität P2 | Priorität P3 | Priorität P4 |
| **Kritik C3** | Priorität P3 | Priorität P4 | Priorität P5 |

Die mit jedem Prioritätsniveau entsprechenden Service-Level-Abkommen (SLAs) werden im folgenden Kapitel detailliert beschrieben.

### Sprach- und Lokalisierung des Supportdienstes

Der Support wird vom Anbieter für den Kundenministerium mindestens auf Französisch angeboten. Der Support kann auch auf Englisch erfolgen.

Die Betriebsabläufe des Support-Dienstes des Anbieters für die Qualitätsinfrastruktur SecNumCloud befinden sich in der Europäischen Union.

# Service Level Agreements (SLAs) and Service Quality Commitments

The Provider commits to continuously monitor the performance and security integrity of its technical infrastructure delivering the Service, ensuring optimal functioning.

The unavailability of a service, indicated by a performance metric, is recognized as soon as it's identified by the Provider's monitoring system or through a notification from the COMMANDITAIRE user. The onset of unavailability is determined at the earliest moment between these two events to ensure precise and fair billing for downtime.

The termination of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or through a return from the user, ensuring effective resumption of operations and accurate measurement of interruption duration.

## Service Level Agreement (SLA) Availability Commitments

The Provider commits to maintaining a level of availability and performance in accordance with the defined standards for each specified period. These Service Level Agreements (SLAs) are subject to the COMMANDITAIRE implementing its systems across at least two of the available zones within the relevant region.

In case the COMMANDITAIRE fails to meet these conditions, it will not be able to claim the application of the concerned SLAs, which are specifically identified by an asterisk (\*). Access to SLAs is provided through the COMMANDITAIRE interface. The measurements are calculated monthly:

- **SLA 1** (IC-INFRA_SNC-01) - Compute Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 2** (IC-INFRA_SNC-02) - Storage Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 3** (IC-INFRA_SNC-03) - Backup Reliability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 4** (IC-INFRA_SNC-04) - Network Infrastructure Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 5** (IC-INFRA_SNC-05) - Internet Access: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.

**Remarks:**

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing to block all traffic directed at the targeted IP from upstream providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIRES and the Provider’s infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as utilizing web application firewall software available on the market, and meticulously configuring its security groups via the API command interface.

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

- The GTI delay is calculated from the moment the COMMANDITAIRE opens the ticket until the first intervention by Prestataire's support.
- Investigation of incidents concerning COMMANDITAIRE commands will not include remote server interventions on COMMANDITAIRE's hosted servers. Assistance in this area will be limited to explaining available metrics related to the COMMANDITAIRE environment, facilitating understanding of encountered performance issues or problems. Based on these analysis results, recommendations may be suggested.*

## Storage Object Availability Service Level Agreement (SLA) IC-INFRA_SNC-10

- **SLA 10 : IC-INFRA_SNC-10** -- Voici les engagements de disponibilité pour le stockage objet S3 :

| Kennzeichner | Engagement | Ziel der Verfügbarkeit |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Lebensdauer des Speicherung eines Objekts in einer Region | 99,9999999% / Jahr |
| **IC-INFRA-SNC-10.2** | Verfügbarkeit der S3-Speicherobjekt-API | 99,99% |
| **IC-INFRA-SNC-10.3** | Maximale Latenz zum Zugriff auf ein Objekt in einer Region | 150 ms |

Hinweis:

- Der Speicherdienst ist ausschließlich für den Speichern von Objekten konzipiert und muss ausschließlich für dieses Zweck genutzt werden, **ausgenommen der Blockspeicherung**. Die Nutzung des Blockspeichers durch Methoden, die nicht autorisiert sind (z.B. "FUSE" in einem Linux-Umfeld), wird als Verstoß gegen die Nutzungsbedingungen angesehen. Jegliche Schäden, Ausfälle oder Schäden, die aus dieser nicht konformen Nutzung entstehen, werden von den im Kontrakt definierten Servicelevelabkommen (SLA) nicht abgedeckt.
- Die Garantie der Lebensdauer ist an die Einhaltung der besten Praktiken und aktuellen Standards geknüpft und ausschließt explizit jede Modifikation von Daten, sei es absichtlich oder unabsichtlich, das durch Handlungen des COMMANDITAIRE entsteht.

## Detail regarding the backup engagement

The backup strategy for COMMANDITAIRE is contingent upon subscribing to appropriate work units.

The Provider commits to delivering a backup solution enabling COMMANDITAIRE to implement its desired backup policies.

It's specified that the Provider's scope ends with providing a backup service, while COMMANDITAIRE is responsible for overseeing policy execution via the COMMANDITAIRE interface.

It's noted that capacity management of the dedicated storage space for backups falls entirely on COMMANDITAIRE. The Provider offers usage rate information through the console.

*Example: Non-backup of a virtual machine:*

In case COMMANDITAIRE identifies a non-backed up virtual machine, it is its responsibility to investigate and determine the cause. COMMANDITAIRE can then contact the Provider's Support according to the subscribed support level for assistance.

**SLA 8 (IC-INFRA_SNC-08) and SLA 9** will be exclusively applicable in the event of a backup service incident.

## Vertragliche Beziehungsorganisation

## Verantworliche Verpflichtungen des Auftragnehmers

Der Auftragnehmer verpflichtet sich:

- Zu informieren den COMMANDITAIRE über angemessene Weise (z.B. in Fällen, in denen die technischen Kapazitäten zur Leistung des Dienstes aufgrund von Ressourcengrenzen begrenzt sind).

- Innerhalb eines Monats nach Bekanntwerden von Änderungen juridischer, organisatorischer oder technischer Natur, die die Einhaltung der Konformitätsanforderungen gegenüber ausländischen Datenschutzbestimmungen (19.6 des Referenzrahmen SNC v3.2) beeinträchtigen könnten, dem COMMANDITAIRE und offiziell mitzuteilen.

- Den COMMANDITAIRE in Französischer Sprache mindestens eine Benutzeroberfläche und Dienstinterfaces bereitzustellen.

- Die spezifischen Branchenanforderungen, die im Rahmen der Erstellung des Dienstes durch den COMMANDITAIRE anfallen, sowie die Verantwortlichkeiten des Auftragnehmers gemäß Artikel 19.6 des Referenzrahmen SNC v3.2 berücksichtigen und diese später vom COMMANDITAIRE ausgedrückten Anforderungen umsetzen.

- Die Exigienen spezifischer Branchen, die sich aus den von COMMANDITAIRE übermittelten Informationen ergeben, insbesondere im Hinblick auf Datenschutzbestimmungen und -vorschriften, zu untersuchen und dem COMMANDITAIRE diese Informationen mitteilen.

- Keine Informationen über die Leistungserbringung an Dritte preiszugeben, es sei denn, der COMMANDITAIRE hat eine schriftliche, offizielle Genehmigung erteilt.

- Den COMMANDITAIRE durch diese Dienstvereinbarung alle Informationen zur Verfügung stellen, die für Audits der Konformität gemäß Artikel 28 der DSGVO erforderlich sind.

- Die Sicherheit des Dienstes und seiner Informationssysteme (Systeme d'information de sécurité - SIS) durch einen autorisierten externen Auditor der Sicherheit von Systemen von Informationsverarbeitung (PASSI) gemäß dem Auftragnehmers Plan zur Kontrolle durch SecNumCloud bereitstellen. Darüber hinaus stellt der Auftragnehmer alle erforderlichen Informationen für die Durchführung von Audits zur Einhaltung der Artikel 28 der DSGVO bereit, die vom COMMANDITAIRE oder einem von diesem beauftragten Dritten durchgeführt wurden.

- Als Subunternehmer im Sinne des Artikels 28 der Datenschutz-Grundverordnung (DSGVO) dem COMMANDITAIRE Unterstützung und Beratung in Bezug auf die Einhaltung von Datenschutzbestimmungen anbieten, sobald ein Anweisung des COMMANDITAIRE als potenziell rechtswidrig eingeführt werden könnte.

- Den COMMANDITAIRE innerhalb eines angemessenen Zeitraums, entweder über die Befehlszeile COMMANDITAIRE oder per E-Mail an den zuständigen Kontakt, über potenzielle Auswirkungen auf die Sicherheit oder Verfügbarkeit des Dienstes sowie auf Funktionen, die durch die Nutzung des Dienstes beeinträchtigt werden könnten, Maßnahmen zur Warnung und Risikomanagementmaßnahmen mitteilen.

- Alle notwendigen Verfahren und Prozesse zum Erfüllen der geltenden Gesetze, Vorschriften und Vertragsbestimmungen sowie den spezifischen Sicherheitsanforderungen des COMMANDITAIRE zu dokumentieren und umzusetzen, die vom COMMANDITAIRE definiert wurden und im Contract enthalten sind.

- Die Daten des COMMANDITAIRE aus der Produktion nicht für Tests zu nutzen, es sei denn, der COMMANDITAIRE hat vorher explizite Zustimmung erteilt; in diesem Fall muss der Auftragnehmer die Daten anonymisieren und ihre Vertraulichkeit während des Anonymisierungsprozesses gewährleisten.

- Die Daten und technischen Informationen des COMMANDITAIRE sicher zu löschen, gemäß der "Löschverfahren zum Ende des Vertrags" in dieser Dienstvereinbarung, wenn der Vertrag endet oder widerrufen wird.

- Auf Verlangen des COMMANDITAIRE formell und schriftlich:

1. Den Rahmenordnung und die Ethikrichtlinie des Auftragnehmers zugänglich machen;
2. Die Sanktionen für Verstöße gegen die Sicherheitspolitik offenlegen;
3. Alle Ereignisse, die den COMMANDITAIRE betreffen, in den Journalierungen des Dienstes bereitstellen; der COMMANDITAIRE kann diese Informationen unabhängig durch die Web- und API-Schnittstellen des Dienstes einsehen;
4. Die Verfahren zur Einhaltung der geltenden Gesetze, Vorschriften und Vertragsbestimmungen sowie den spezifischen Sicherheitsanforderungen des COMMANDITAIRE, die vom CONTRACT definiert sind und im Contract enthalten sind, bereitstellen;
5. Die Elemente zur Bewertung der Risiken in Bezug auf die Übermittlung von Daten des COMMANDITAIRE an einen Staat außerhalb der Europäischen Union;
6. Den COMMANDITAIRE über alle nachfolgenden Subunternehmer, die im Zusammenhang mit der Bereitstellung des Dienstes involviert sind, sowie über jede Änderung dieser Subunternehmer, die Auswirkungen auf diese Subunternehmer hat.

> Der Auftragnehmer und alle seine Tochtergesellschaften verpflichten sich, die grundlegenden Werte der Europäischen Union zu respektieren, nämlich die Würde des Menschen, Freiheit, Demokratie, Gleichheit, Rechtsstaatlichkeit sowie den Respekt vor den Menschenrechten. Die bereitgestellte Dienstleistung entspricht der geltenden Rechtsordnung in Bezug auf grundlegende Rechte und den Werten der Europäischen Union im Hinblick auf die Würdigung der Würde des Menschen, Freiheit, Gleichheit, Demokratie und Rechtsstaatlichkeit sowie den Respekt vor den Menschenrechten.

## Scope of Provider's Liability

Due to the entirety of definitions and conditions outlined in this Service Agreement, the liabilities of the Provider are limited as follows:

1. The shared responsibility model, described in the "Shared Responsibility Model" section of this Service Agreement, inherently restricts the Provider's involvement in layers above the provision of computing resources, network, storage, and backup services. This specifically excludes, among other things:

    - Management of what is installed on virtual machines (OS, middlewares, applications, etc.);
    - Maintenance of OS and other software installed by the COMMANDITAIRE on its Tenants;
    - Security of programs, software, and applications installed on virtual machines;
    - Updating virtual machines;
    - Application-level data backup.

2. The Provider cannot assume any tenant's backup obligations without the COMMANDITAIRE first subscribing to appropriate infrastructure units.

3. The Provider cannot claim ownership of data transmitted and generated by the COMMANDITAIRE. In fact, these belong to the COMMANDITAIRE.

4. The Provider emphasizes that it cannot exploit or make use of data transmitted and generated by the COMMANDITAIRE without prior validation from the latter, as their disposition is reserved for the COMMANDITAIRE.

5. The Provider waives any responsibility concerning physically hosted and managed components directly under its control but owned by the COMMANDITAIRE or a third party with which the COMMANDITAIRE has contracted. Hosting of such physical client components falls outside the scope of this Service Agreement and is therefore not part of SecNumCloud IaaS qualified service framework. It is the COMMANDITAIRE's responsibility to assess the level of adherence or dependency these components introduce concerning the SecNumCloud IaaS service.

## Zugangsbeschränkung

Im Rahmen des Dienstes ist der Anbieter ausdrücklich verboten, auf Tenanten zuzugreifen, die dem COMMANDITAIRE gehören, ohne vorherige Genehmigung. Es liegt an dem COMMANDITAIRE, den notwendigen Zugang für das Personal des Anbieters bereitzustellen, abhängig von den spezifischen Anforderungen des Hostings und, falls gewünscht, durch professionelle Support-Dienste.

Der COMMANDITAIRE erkennt an, dass diese Zugänge ausschließlich für die Erfüllung der vereinbarten Dienstleistungen erteilt werden und stellen somit eine sichere und konformen Verwaltung gewährleisten.

Jegliche fremde Zugriffe durch Dritte, die im Rahmen des von dem Anbieter bereitgestellten Dienstleistungen betrieben werden, sind streng verboten. In Ausnahmefällen, bei denen ein technischer Bedarf nachweislich eine solche Zugriffsmöglichkeit erfordert, kann dieser nur unter der Voraussetzung einer klarer Benachrichtigung an den COMMANDITAIRE, einer detaillierten Gewährleistung und einer schriftlichen Zustimmierung durchgeführt werden.

Diese Maßnahme stellt sicher, dass der COMMANDITAIRE die Kontrolle über seine Daten behält und alle Ausnahmen von der Regel ordnungsgemäß genehmigt und dokumentiert werden.

## Responsabilitäten von Dritten, die zur Bereitstellung des Services Secure Temple beitragen

Der Anbieter hat eine vollständige Übersicht über die Drittpartner, die an der Bereitstellung des Dienstes beteiligt sind. Diese Drittpartner umfassen Verlage, Lieferanten (des Anbieters) und andere Unterlieferanten, die zur Bereitstellung des Dienstes beitragen. Der Anbieter setzt folgende Maßnahmen gegen diese Drittpartner an:

- Der Anbieter verlangt von den Dritten, die am Betrieb des Services beteiligt sind, ein Sicherheitsniveau, das mindestens dem entspricht, das der Anbieter in seiner eigenen Sicherheitspolitik für den Dienst Secure Temple anstrebt;

- Der Anbieter vertraglich mit jedem Dritten, der am Betrieb des Services beteiligt ist, klare Auditklauseln vereinbart, die es einem Qualifikationsorganismus ermöglichen, zu überprüfen, ob diese Drittpartner die gesetzlichen Anforderungen und die SNC-Anforderungen erfüllen. Dies ermöglicht dem Anbieter, seine Verpflichtungen in dieser Dienstleistungsvereinbarung einzuhalten;

- Der Anbieter implementiert eine Prozedur zur regelmäßigen Überprüfung der Maßnahmen, die von den Dritten zur Erfüllung der Anforderungen des Anbieters an das System der Sicherheitsinformationen des Dienstes getroffen werden.

- Der Anbieter übernimmt die Kontrolle über Änderungen, die von Drittpartnern am System der Sicherheitsinformationen des Dienstes vorgenommen wurden, die den Sicherheitsstandard beeinflussen könnten.

## Verantwortlichkeiten und Pflichten des COMMANDITAIRE

Im Rahmen des Services hat das COMMANDITAIRE folgende Pflichten:

- Das Lieferantenunternehmen stellt dem COMMANDITAIRE eine Plattform für die Ausführung virtueller Maschinen bereit. Die Konfiguration dieser Maschinen obliegt dem COMMANDITAIRE. Jede virtuelle Maschine muss mit einer Backup-Politik versehen sein. Das Lieferantenunternehmen definiert über seine Schnittstellen automatische Backup-Politiken. Es ist jedoch Aufgabe des COMMANDITAIRE, diese Politiken zu aktivieren und somit die virtuellen Maschinen zu starten.

- Das COMMANDITAIRE erlaubt der ANSSI und dem Qualifikationsorgan den Audit des Services sowie der dazugehörigen technischen Infrastruktur.

- Das COMMANDITAIRE ist verantwortlich, dem Lieferantenunternehmen eventuelle branchenspezifische Anforderungen zu kommunizieren, die mit den von ihm übermittelten Informationen verbunden sind und deren Beachtung durch das Lieferantenunternehmen erforderlich macht.

- Das COMMANDITAIRE akzeptiert, dass es keine Anforderungen oder Aktionen an das Lieferantenunternehmen stellt, die dessen Einhaltung von SecNumCloud-Anforderungen (aktueller Stand) vermeiden oder den Sicherheitsstandard abwerten, der durch die Erfüllung dieser Anforderungen gewährleistet wird.

## COMMANDITAIRE'S RIGHTS

At any point during the contractual relationship, the COMMANDITAIRE may file a claim regarding the qualified service with the ANSSI.

The COMMANDITAIRE can at any time request from the Prestataire that its internal settlement and ethics charter become accessible to it.

## Löschung der Daten am Ende des Vertrags

Bei Ablauf des Vertrages, sei es durch Ablauf oder aufgrund einer anderen Gründe, verpflichtet sich der Dienstleister, die sicherheitsgewährleistete Löschung aller Daten des COMMANDITAIRE, einschließlich technischer Daten, durchzuführen. Der Dienstleister stellt sicher, dass er dem COMMANDITAIRE ein formellen Vorabverfahren mit einem Mindestabstand von 21 Kalendertagen (21) kommuniziert. Die Daten des COMMANDITAIRE werden dann innerhalb eines maximalen Zeitraums von 30 Tagen nach dieser Benachrichtigung gelöscht.

Um diese Löschung zu bestätigen, übergibt der Dienstleister dem COMMANDITAIRE ein Zertifikat, das die Löschung der Daten bestätigt.

## Lebenszyklus des vorliegenden Dienstleistungsvertrag

## Eintritt in Kraft der Dienstleistungsvereinbarung

Die vorliegende Dienstleistungsvereinbarung tritt am Tag ihrer Unterzeichnung durch den Auftraggeber in Kraft.

Die Sammlung, Verarbeitung, Speicherung und Bearbeitung von Daten im Rahmen der Vorvermarktung, des Einrichtens und des Ausschalten des Services erfolgt im Einklang mit der geltenden Gesetzgebung.

## Änderungen der Dienstleistungsvereinbarung

Die in der vorliegenden Dienstleistungsvereinbarung vorgenommenen Änderungen oder Hinzufügungen entsprechen ausschließlich den Anfragen der zuständigen Governance-Organisationen. Diese Vorschläge für Änderungen werden von den Parteien geprüft, die befugt sind, die Aspekte festzulegen, die eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede Änderung der Dienstleistungsvereinbarung, nach Genehmigung, die ursprünglich festgelegten finanziellen Bedingungen ändert, eine schriftliche Anpassung des laufenden Vertragsvertrags erfordert und von allen Parteien unterzeichnet wird.

Die Faktoren, die zu einer Überprüfung dieser Dienstleistungsvereinbarung führen können, sind nicht beschränkt auf:

- Die Entwicklung der technischen Infrastruktur, die den Service IaaS liefert;
- Die Anpassungen am von dem Anbieter bereitgestellten Service zur Bereitstellung des Services;
- Die Veränderungen der Verpflichtungen und Sanktionen;
- Die Organisationsreformen innerhalb des COMMANDITAIRE oder beim Anbieter;
- Der Ausbau oder die Verringerung des Anwendungsbereichs des Services.

Die Verwaltung der Versionen und Änderungen der Dienstleistungsvereinbarung wird im Vorblatt des Dokuments festgehalten, um den Überblick zu erleichtern.

### Evolutionen ausgelöst durch den COMMANDITAIRE

Die Änderungen der Dienstleistungsvereinbarung können hauptsächlich aus folgenden Gründen erfolgen:

- Eine Weiterentwicklung der von uns verwalteten Infrastruktur durch den Anbieter;

- Eine Anpassung der von uns implementierten Dienstleistungen durch den Anbieter;

- Eine Änderung der Servicelevelabkommen (SLAs) durch den Anbieter.

### Änderungen durch den Auftragnehmer

Jede Änderung der Dienstleistungsvereinbarung unterliegt der Zustimmung des Beauftragten. Es wird vereinbart, dass jede Modifikation oder Ergänzung validiert, die die finanziellen Elemente des Vertrags verändert, möglicherweise eine Unterzeichnung eines Annexes zu diesem Vertrag erfordert.

## Réversibilität

Zusätzlich verpflichtet sich Cloud Temple, die vorliegende
Dienstleistungsvereinbarung (u.a. auch deren Kündigung) ohne Sanktionierung für den
COMMANDITAIRE zu ermöglichen, falls dieser seine Qualifikation SecNumCloud
verliert.

Die angebotenen Dienste enthalten keine Verpflichtung zur Rückgängigkeitsfähigkeit (d.h. die Unterstützung des COMMANDITAIRE beim Wechsel zu einem anderen "Anbieter") außer der Bereitstellung der INTERFACE COMMANDITAIRE durch den Anbieter, welche es dem COMMANDITAIRE ermöglicht, seine Daten zu sichern und wiederherzustellen, einschließlich der Konfigurationsdaten seines Informationssystems über eine der folgenden technischen Modalitäten:
- Den Einsatz von Dateien in einem oder mehreren dokumentierten und nutzbar außerhalb des vom Anbieter bereitgestellten Dienstes.
- Die Implementierung technischer Lösungen, die es dem COMMANDITAIRE ermöglichen, auf seine Daten über einen dokumentierten und nutzbaren Schnittstellen (z.B. API) zuzugreifen.

Der COMMANDITAIRE, der allein für sein System verantwortlich ist, muss alles tun, um diese Operation zu erleichtern, falls er dies erforderlich befindet (was bedeutet, dass er eine gründliche Dokumentation einrichten und Pläne zur Rückgängigkeitsfähigkeit erstellen sollte). In Fällen, in denen der COMMANDITAIRE zusätzliche Leistungen benötigt, kann der Anbieter eine Beratungsaufgabe anbieten, die im Rahmen eines spezifischen Vertrags zu verhandeln ist.

---

## Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes

---

### Verwaltung von Meldungen und Ausfällen


---
Incidents
---

#### Artikel 2 - Art der Schadenarten, die in Anspruch genommen werden

- Schäden durch Unfälle;

- Ausfälle und Fehlers;

- Sicherheitsverletzungen, die die Verfügbarkeit, den Datenschutz oder die Integrität des Dienstes beeinträchtigen.

#### Behandlung von Anwenderrückmeldungen

> Der Lieferant informiert den AUFTRAGSVERWALTUNGEN in der besten Zeit möglich über
> Störungen und Ausfälle, entweder durch eine Benachrichtigung im
> Auftragsverwaltungs-Console oder per E-Mail an den zuständigen
> Auftragsverwalter. Der Lieferant informiert die Auftragsverwaltung über
> die Bearbeitung des Anlasses durch den von ihm genutzten Kommunikationskanal,
> oder durch den im Anlagenbeschreibung angegebenen Kanal.

#### Sicherheitsmeldungslevel

Das COMMANDITAIRE hat die Aufgabe, die Ernstgraden der Sicherheitsverletzungen zu bestimmen, für die es benachrichtigt werden möchte, z.B. durch die Formalisierung in einem PAS, das auf den Dienst anwendbar ist.

Standardmäßig wird das COMMANDITAIRE über:

- Sicherheitsverletzungen mit Auswirkungen (Impacts I1 und I2 gemäß der Schwereanordnung im Verarbeitungsablauf der vorliegenden Dienstleistungskonvention) informiert;

- Sicherheitsverletzungen, die die Vertraulichkeit oder Integrität der von COMMANDITAIRE über den Dienst verarbeiteten Daten betreffen;

- Datenschutzverletzungen für die sich das COMMANDITAIRE nach Artikel 8 der Anhang DPA zum Dienst haftet, informiert.

### Wartung des Dienstes

This is the direct translation of "Maintenance du Service" into German. The structure and formatting of Markdown, including headers, lists, and code blocks, are preserved as they were in the original French text. Note that table content (including table headers) was translated, while inline code within tables was left unchanged. Similarly, Python-specific code blocks adhere to the rules: variable names, function calls, class definitions, and comments starting with '#' are not translated; the syntax, indentation, and spacing are preserved exactly as in the original. HTML or raw code snippets are left untouched.

### Art der Wartung

Verletzungen personenbezogener Daten, für die der Auftragsverarbeiter
für das Verarbeiten verantwortlich ist und dessen Personendaten betreffen
die BETRIEBSBENUTZER gemäß Artikel 8 der DSGVO. Die durchgeführte Wartung
umfasst die Umsetzung:

- Der Wartungsplan zur Aufrechterhaltung des Dienstes in Betriebsfähigkeit, um
  sicherzustellen, dass die BETRIEBSBENUTZER wie oben angegeben eine gute
  Verfügbarkeit erhalten,

- Wenn der BETRIEBSBENUTZER einen PCA/PRA abgeschlossen hat, dessen Umsetzung
  bei Auftreten von beabsichtigten Ereignissen wie oben angegeben.

### Remote Access to Cloud Temple within the COMMANDITAIRE Perimeter

The Provider explicitly forbids, as per the terms of this Service Agreement, any access to Tenants and the COMMANDITAIRE interface.

It will be the responsibility of the COMMANDITAIRE to grant the necessary access to Provider's personnel. The COMMANDITAIRE acknowledges that these accesses will be utilized within the hosting and, ultimately, the management (if subscribed by the COMMANDITAIRE).

### Remote Access by Third Parties for Service Provision within the COMMANDITAIRE Domain

No remote access by third parties involved in providing the SERVICE is permitted.

Should a technical necessity arise, such access would only be granted post-notification and written approval from COMMANDITAIRE.

# Datenlöschung am Ende des Vertrags

Bei Ablauf des Vertrages, sei es durch die regelmäßige Beendigung oder auf eine andere Grundlage, stellt der Lieferant sicher, dass die gesamten Daten, die im Rahmen des Dienstes verarbeitet wurden, sicher entfernt werden, einschließlich technischer Daten des Kommanditären. Der Lieferant gibt den Kommanditären eine formale Benachrichtigung innerhalb eines Zeitraums von 21 Kalendertagen (21 Tage). Die Daten des Kommanditären werden innerhalb von 30 Tagen nach der Benachrichtigung gelöscht. Der Lieferant liefert ein Entlassungsbeweis für die Datenlöschung an den Kommanditären.

## Anwendbares Recht

## Allgemein

Die anwendbare Rechtsordnung und die zu der vorliegenden Dienstleistungsvereinbarung unterliegende Rechtssubjekte ist das französische Recht.

## Einhaltung von Gesetzen und Vorschriften

Der Anbieter sich verpflichtet sich auf die folgenden Punkte:

- Identifizierung der rechtlichen und regulatorischen Einschränkungen, die im Rahmen des Dienstes anwendbar sind;

- Einhaltung der rechtlichen und regulatorischen Einschränkungen für die von ihm übernommenen Daten innerhalb der Grenzen seiner Verantwortung und gemäß den Bestimmungen des Vertrags andererseits;

- Einhaltung der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG);

- Implementierung von Maßnahmen zur Datenpersönlichkeitsverwaltung;

- Einrichtung eines regelmäßigen Rechts- und Vorschriftenüberwachungsverfahrens;

- Behalten und Aufrechterhaltung angemessener Beziehungen zu den zuständigen Behörden im Zusammenhang mit der Art der von ihm verarbeiteten Daten innerhalb des Dienstes. Dazu gehören insbesondere das Bundesamt für Sicherheit im Internet (BSI), das Centre National d'Etudes Spéciales (CNEST) und die Commission Nationale de l'Informatique et des Libertés (CNIL).

## GDPR

As a processor under the meaning of Article 28 of the General Data Protection Regulation (RGPD), the Processor commits to:

- Ensuring transparency and traceability;

- Designating a DPO responsible for defining and implementing data protection measures for personal data;

- Providing assistance and advice to the Principal in alerting them if their instruction would constitute a violation of data protection rules for personal data, provided the Processor can identify such a violation;

- Ensuring security of processed data (due to SecNumCloud qualification).

## Gegen Verletzung des ausländischen Rechts

Der Sitz des Auftragnehmers ist innerhalb eines Mitgliedstaats der Europäischen Union angesiedelt. Der Kapitalanteil und die Stimmrechte in der Unternehmensgesellschaft des Auftragnehmers werden nicht, direkt oder indirekt:

- individuell von mehr als 24% besitzt;

- und gemeinsam von mehr als 39% besitzt,

durch Entitäten, deren Sitz im Außenseiterstaat der Europäischen Union liegt, die ein Hauptverwaltungsort oder einen zentralen Betrieb haben.

Im Falle eines Rechtsmittelweges durch den Auftragnehmer gegenüber dem Dienstleistungsangebot einer Drittanbieter-Unternehmens, die ihr Sitz im Außenseiterstaat der Europäischen Union hat oder von einer Drittanbieter-Unternehmens kontrolliert wird, das ihren Hauptverwaltungsort oder zentralen Betrieb im Außenseiterstaat der Europäischen Union hat, verpflichtet sich der Auftragnehmer:

- Dazu, dass diese Drittanbieter-Unternehmens keinen Zugriff auf die von 'Secure Temple' erstellten Daten hat;

- Dazu, eine unabhängige Betriebsführung durch die Möglichkeit zu gewährleisten, einen anderen Subunternehmer einzubinden oder schnellstmögliche Alternativen zur Technologie umzusetzen.

Zur Erinnerung: Die betreffenden Daten sind solche, die dem Auftragnehmers vom Commanditaire anvertraut werden und alle technischen Informationen über die Commanditaire sowie.

Für die Zwecke dieses Artikels wird der Begriff Kontrolle nach den Anweisungen des Artikel 2 des Buchstabens L233-3 des Handelsgesetzes verstanden.

# SIGNATUREN

Unterzeichnet am \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, dem
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Für Cloud Temple, den AUßENSTELLER

Für \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, den BENÖTIGTEN

---

Note: Les éléments de texte en français (signatures) ont été traduits en allemand selon les règles strictes mentionnées. La structure, le formatage et la préservation des éléments structuraux tels que les dates, les noms et les titres sont maintenus. Les signatures elles-mêmes n'ont pas été modifiées en termes de contenu ou de formatage, car elles ne font pas partie du formatage Markdown ou HTML structurel.
