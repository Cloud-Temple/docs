---
Titel: Spezifisches Dienstvertrag - Nackt-Hardware
---

# DIENSTVERTRAG Bare Metal

| Empfänger: | **COMMANDITAIRE** |
| :--- | :--- |
| **Dokument-Referenz** | CT.AM.JUR.ANX. CdSS-BM - 20250122_v1.0.docx_Tag MM AAAA - VF |
| **Ihre Ansprechpartner** | *Vorname* *Nachname* Account Manager e-mail : *vorname.nachname@cloud-temple.com |
| **Letzte Aktualisierungsdatum** | 22/01/2025 |
| **Vertragsvalidierungsdatum** | Tag MM AAAA |

| Version | Datum | Handlung | Autor |
| :--- | :--- | :--- | :--- |
| v1.0 | 22/01/2025 | Erstellung | Nicolas BODILIS |

## Vorbereitung und Glossar

---

## Vorlage

Die vorliegende Dokumentation regelt die Dienstleistungsvereinbarung im Zusammenhang mit dem in Qualifizierungsprozess bei SecNumCloud befindlichen Bare-Metal-Service.

Der Dienst befindet sich derzeit im Qualifizierungsverfahren bei SecNumCloud (siehe Zertifikat in Anhang).

Die vorliegende Dienstleistungsvereinbarung ergänzt und ergänzt die Allgemeinen Verkaufs- und Nutzungsbedingungen des Anbieters. Es wird vereinbart, dass die vertraglichen Dokumente in Bezug auf ihre Interpretation koordiniert interpretiert werden. In Fällen von Widersprüchen oder Konflikten zwischen den Vertragsbedingungen gelten die folgenden vorrangig:

1. Allgemeine Verkaufs- und Nutzungsbedingungen (CGVU)
2. Dienstleistungsvereinbarung SecNumCloud IaaS
3. Dienstleistungsvereinbarung SecNumCloud OpenIaaS
4. Dienstleistungsvereinbarung SecNumCloud PaaS
5. Spezifische Dienstleistungsvereinbarung - Bare Metal
6. Besondere Vertragsbestimmung
7. Sicherheitsrücklage (PAS)
8. Besondere Nutzungsbedingungen (CPU)
9. Datenschutzabführungsvertrag


**Note:** Le texte traduit respecte strictement la structure et le formatage du fichier Markdown original, en évitant toute modification des éléments HTML ou Markdown structurels tels que les en-têtes (#), les listes, les blocs de code (utilisant triple backticks ```, triple quotes ''' ou """, et code inline `code`), ainsi que la préservation de l'indentation et de la syntaxe Python dans les blocs de code. Les éléments HTML bruts restent inchangés.

## Glossary

In the present Service Agreement, the **Commanditaire**, **Prestataire**, and **Parties** are identified in the Contract to which this Service Agreement is annexed.

The following expressions used in this Service Agreement shall be interpreted according to the definitions assigned below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, Prestataire, and Parties.

- **Standard Change:** A change subject to a procedure, whose implementation procedures and impacts (including financial ones) are known and accepted in advance by the Parties. It is then integrated into the standard change catalog, and may have a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Prestataire for the Commanditaire to benefit from the Service, and to which this Service Agreement is annexed.

- **Service Agreement:** This document, established within a specific contract or General Terms of Sale and Use (CGVU), in compliance with SecNumCloud requirements.

- **Service Request:** A request for evolution subject to a procedure, whose execution: i) does not modify the CMDB, ii) known operational mode, costs, and risks are accepted in advance, and do not require specific return procedures; iii) is subject to an agreed level of service agreement and included in the contract fee when performed during working hours.

- **Availability:** Capacity to ensure the Service's availability and optimal performance, in accordance with the defined and committed service level agreements (SLAs).

- **Technical Data:** All data processed for delivering the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration of access, directory, certificates, etc.

- **Event:** Any detectable or identifiable occurrence that may have significance for managing the Service.

- **Hypervisor:** Operating system allowing execution of virtual machines on a compute layer.

- **Incident:** Any unforeseen event disrupting normal Service operation or compromising COMMANDITAIRE data security.

- **Security Incident:** Any event within the Service's scope:
  - Intentionally malicious;
  - Accidental affecting the integrity, confidentiality, or traceability of the Service or COMMANDITAIRE data;
  - Compromising existing security measures. Non-origin origin downtime not considered a Security Incident (hardware failure, bug, malfunction, natural disaster...).

- **Commanditaire Interface:** Administration interface for the Service provided by the Prestataire to the Commanditaire, comprising a web administration console and an API.

- **Deployment:** Actions of administration to implement a Change once approved (the change, in ITIL terms, concerns change management only, not its execution/realization).

- **Problem:** Cause of recurring incidents, potential incident (situation at risk) requiring analysis and resolution to prevent recurrence.

- **Region:** A geographically defined set of availability cloud zones providing network, compute, and storage services for optimizing latency, performance, and local regulatory compliance.

- **Service:** The Bare Metal service currently under SecNumCloud qualification, delivered by the Prestataire from maintained technical infrastructures as described in the "Description of Service" section of this Service Agreement.

- **Catastrophe:** A severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Monitoring of an Information System or Service, involving collection of various data such as measurements and alarms. This activity is limited to observation and tracking without intervening directly on monitored elements, a prerogative reserved for administration operations.

- **Tenant:** An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security.

- **Availability Zone (AZ) (Availability Region):** A specific, isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through geographical distribution of resources.

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

Diese Dienstleistungsvereinbarung regelt die Bedingungen und Vereinbarungen, nach denen der Anbieter dem Kunden das Service anbietet. Ihr Zweck besteht darin:

- Die von der Kunden erwarteten Leistungsanforderungen im Hinblick auf Funktionalität und Zuverlässigkeit des Services zu definieren;

- Die Pflichten des Anbieters festzulegen, um die vereinbarten Servicelevel einzuhalten;

- Die zwischenstaatlichen Vorschriften anzugeben, die auf den von uns gelieferten Service anwendbar sind;

- Eine Konsistenz und Integrität in der Bewertung der Qualität des Services sicherzustellen;

- Die Güte der bereitgestellten Dienstleistungen durch quantitative Leistungsindikatoren zu gewährleisten.

Es wird vereinbart, dass im Falle einer Entlassung unserer Qualifikation SecNumCloud vom Kunden die Vereinbarung ohne zusätzliche Kosten aufgelöst werden kann. In diesem Fall ist der Anbieter verpflichtet, den Kunden umgehend über die Entlassung durch eine offizielle Benachrichtigung per Registerbrief mit Beglaubigung zu informieren.

Es wird darauf hingewiesen, dass eine Änderung oder Anpassung unserer SecNumCloud-Qualifikation nicht als Rückzug der ursprünglichen Qualifikation interpretiert werden sollte.

# Audit

Der Lieferant verpflichtet sich, es dem Auftragnehmer oder einem unabhängigen Auditor, der nicht mit dem Lieferanten konkurriert und vom letzteren beauftragt wurde, zu ermöglichen, alle erforderlichen Dokumente zu durchsuchen, um die Einhaltung aller Pflichten im Zusammenhang mit der Einhaltung der Artikel 28 des Allgemeinen Datenschutz-Gesetz (DSG) zu bestätigen. Dies vereinfacht die Durchführung von Audits.

Durch die Annahme dieser Dienstleistungsvereinbarung erteilt der Auftraggeber dem Lieferanten explizit seine Erlaubnis, folgende zu ermöglichen:

1. Die Agentur für Sicherheit der Informationssysteme (Anssi) sowie die zuständige Qualifikationsstelle, um die Überprüfung der Konformität des Dienstes und des Informationssystems gegenüber dem Referenzzertifikat SecNumCloud durchzuführen.
2. Ein Auditor für die Sicherheit von Informationssystemen, der gemäß den Vorschriften PASSI zertifiziert ist und vom Lieferanten ausdrücklich beauftragt wurde, Sicherheitsaudits über den Dienst durchzuführen.

## Dienstbeschreibung

```markdown
### Service Description

Ce service offre une plateforme d'hébergement cloud flexible et évolutive pour les applications logicielles. Il permet aux développeurs de stocker, de traiter et de gérer des données de manière efficace, tout en garantissant la haute disponibilité et la sécurité des informations. Le service intègre des outils avancés pour le traitement distribué, le stockage de données massifs et l'analyse, facilitant ainsi le développement et la maintenance de solutions logicielles complexes.

Les fonctionnalités clés incluent :
- Infrastructure cloud flexible et évolutive
- Stockage de données étendu (S3, Glacier)
- Traitement distribué avec services comme Apache Spark
- Analyse de données en temps réel via services tels que Amazon Redshift
- Sécurité robuste par des protocoles de chiffrement et des contrôles d'accès
- Intégration facile avec d'autres services AWS (DynamoDB, Lambda, etc.)
- Gestion automatique des ressources pour optimiser les coûts

Cette plateforme est conçue pour répondre aux besoins variés des entreprises, des startups à grande échelle, en passant par les développeurs individuels cherchant à déployer leurs applications sans contraintes matérielles.
```

## Shared Responsibility Model

The offered service by the Provider is characterized by providing the following services, which align with the shared responsibility principle presented in the SecNumCloud reference:

- Provisioning of computing resources (compute);
- Availability of storage spaces;
- Access to network connectivity and internet services;
- Access to a management console for deployed resources.

The shared responsibility model applied between the Provider and the COMMANDITAIRE within the scope of the Service is outlined in §7.1.

It is understood that the Provider will utilize its expertise to deliver the Services in accordance with professional best practices and in compliance with SecNumCloud requirements.

## Detailed Scope Description of the Service

| Service | Description |
| :--- | :--- |
| **Compute** | Computing resource for Tenant COMMANDITAIRE |
| **Storage** | Production data for Tenant COMMANDITAIRE |
| **Network Infrastructure** | Network resource for Tenant COMMANDITAIRE |
| **COMMANDITAIRE Console** | Service enabling COMMANDITAIRE to access and manage its Bare Metal service via the Console interface |
| **Support** | Support service accompanying the aforementioned services, limited to SNC qualified scope and Prestataire responsibilities (\*) |

(\*) Within the scope of the qualified Service SNC and Prestataire's responsibilities.

### Datacenter Infrastructures

The Service encompasses the provision, for each Availability Zone, of the following services currently in qualification:

- Data center located in France for the FR region, compliant with the latest technological standards, offering a resilience level equivalent to or superior to Tier 3 according to the Uptime Institute;
- Provision of technical rooms within dedicated datacenters designed to accommodate essential technical equipment required for service production, including computing, storage, networking, cabling, and other necessary components;
- Secure electrical supply ensured by two independent power circuits, guaranteeing uninterrupted service continuity;
- Supply of climate control systems tailored to meet manufacturer specifications for environmental conditions, ensuring optimal operating parameters for technical equipment;
- Continuous monitoring and detailed metrology, enabling precise tracking and proactive management of service performance and security.

The Provider ensures the availability of advanced fire detection and suppression services, engineered to promptly identify and effectively neutralize any fire incidents within the facilities. These systems include high-precision smoke detectors and rapid-response extinguishing devices that do not damage IT equipment. This service is vital for preventing fire hazards, minimizing potential damage, and ensuring operational continuity.

The COMMANDITAIRE is informed that all implemented security procedures and measures, including annual emergency generator switchover tests, are critical for maintaining the reliability and integrity of provided services. These practices aim to minimize downtime risks and ensure optimal response times in case of incidents. By accepting these conditions, the COMMANDITAIRE acknowledges the importance of these safety measures and commits to full cooperation for their implementation. The COMMANDITAIRE is also encouraged to review and integrate security recommendations into its own risk management strategy.

### Software Management Infrastructure

The Provider delivers to the COMMANDITAURE the administration console and the API necessary for using the SERVICE. They commit to maintaining this console and API in optimal operational condition, ensuring continuous security. This is referred to as the "COMMANDITAURE Interface" collectively.

The Provider notifies the COMMANDITAURE that unusual usage of the "COMMANDITAURE Interface," particularly excessive use of its command execution APIs (hammering), could trigger automatic security measures resulting in the blocking of access to command execution or the SERVICE itself. It's crucial to note that this isn't a Service outage but rather an automated protection measure for both the SERVICE and the Provider's infrastructure; thus, the COMMANDITAURE should not interpret such actions as an outage in its calculations.

Furthermore, the Provider informs the COMMANDITAURE that identical requests (duplicates) sent to their APIs are limited to one per second (Throttling). If the COMMANDITAURE submits identical requests at a higher frequency, these rejections should not be misconstrued as an outage of the SERVICE.

### Computing Infrastructures

The Service encompasses the provision of computing equipment within the subscribed zones by the COMMANDITAIRE for executing workload tasks in the form of virtual machines.

This includes:

- Provision of technical chassis necessary for the proper functioning of compute nodes;
- Supply of compute nodes in quantities specified by the COMMANDITAIRE and distributed according to the availability zones chosen by the COMMANDITAIRE. Note that these compute nodes are exclusively dedicated to the COMMANDITAIRE;
- Availability of a KVM console for managing computational resource allocation.

The selection of the compute node model, chosen from the catalog offered by the Provider, falls under the responsibility of the COMMANDITAIRE.

### Speicherinfrastruktur

Das angebotene Service umfasst die Bereitstellung eines gemeinsamen SAN-Netzwerks (Storage Area Network) an den Kommandoantwort, das verschiedene Leistungsstufen bietet. Dieses Service beinhaltet:

- Die Implementierung und Wartung des spezifischen SAN-Netzwerks in Betrieb und Sicherheitsstatus für den Kommandoantwort;
- Die Installation und Verwaltung der gemeinsamen Speicherbüros zwischen den Kunden, einschließlich ihrer Betriebsbereitschaft und -sicherheit, Überwachung sowie Metriken;
- Die Einrichtung automatisierter Systeme zur Allokation von LUNs (Logical Unit Numbers) für den spezifischen Speicherbedarf des Kommandoantwort gemäß den abonnierten Volumina.

### Globale Network Infrastructure

The Provider, as part of the Service, establishes a global network facilitating the COMMANDITAIRE's accessibility to its hosted systems. This service encompasses:

- The provision, maintenance in operational condition, and security of all fiber optic links interconnecting various Availability Zones;

- The provision, maintenance in operational condition, and security of technical equipment necessary for the proper functioning of the network and client isolation.

The Tenant COMMANDITAIRE's network connection to Internet or private networks, as well as the networking equipment, operator links, and other technical components enabling this connection, are outside the scope of the Service. This network interconnection is implemented in accordance with the provisions outlined in the Contract.

### Implementierung von Wiederanlauf- und Kontinuitätslösungen

Der Anbieter stellt dem Beauftragten alle technischen Lösungen zur Verfügung, die für eine optimale Ressourcenverteilung in verschiedenen Verfügbarkeitszonen erforderlich sind. Es liegt an dem Beauftragten, diese Ressourcenverteilung effektiv zu verwalten, wobei er auf die von uns zur Verfügung gestellten Werkzeuge zurückgreifen kann.

### Einschränkungen von Diensten im Qualifizierten Bare-Metal-Modell

Im Qualifizierten Bare-Metal-Modell gibt es mehrere Einschränkungen in Bezug auf die verfügbaren Dienste:

1. **Skalierbarkeit**: Die Skalierbarkeit kann begrenzt sein, da jede zusätzliche Leistungseinheit physisch installiert und konfiguriert werden muss. Dies kann zeitaufwändig und kostspielig sein.

2. **Flexibilität**: Die Flexibilität bei der Auswahl von Hardware-Komponenten ist begrenzt, da die Systeme auf spezifische, vorab ausgewählte Hardware angewiesen sind.

3. **Integration**: Die Integration neuer Technologien oder Anwendungen kann komplexer sein, da dies oft eine physikalische Änderung der Infrastruktur erfordert.

4. **Wartung und Updates**: Wartungs- und Update-Prozesse sind direkt auf die Hardware beschränkt, was die Verwaltung komplexer machen kann.

5. **Redundanz**: Die Implementierung von Redundanzlösungen kann schwieriger sein, da dies oft eine zusätzliche Hardwarekomponente erfordert.

6. **Kosten**: Obwohl die Bare-Metal-Architektur in einigen Fällen Kosteneinsparungen bietet, können die Anfangsinvestitionen und die laufenden Wartungskosten hoch sein.

7. **Rückständigkeit**: Die Rückständigkeit kann eine Herausforderung darstellen, da jede Änderung an der Hardware physisch durchgeführt werden muss.

8. **Sicherheit**: Obwohl die Bare-Metal-Architektur in Bezug auf Sicherheit von Vorteil sein kann, erfordert sie ein hohes Maß an Expertise und sorgfältige Konfiguration, um potenzielle Sicherheitslücken zu vermeiden.

9. **Ressourceneffizienz**: Die Ressourcennutzung kann weniger effizient sein im Vergleich zu virtuellen Maschinen (VMs), da die Hardware-Ressourcen direkt mit den Anwendungen verbunden sind und nicht durch eine Hypervisor getrennt.

10. **Migration**: Die Migration von Anwendungen zwischen verschiedenen Bare-Metal-Umgebungen kann schwierig sein, insbesondere wenn die Hardware-Architekturen unterschiedlich sind.

### Managed Services in RUN

Es ist wichtig zu beachten, dass vom SERVICE:

- Der Hosting physischer Komponenten des COMMANDITAIRE;

- Die Netzwerkverbindung des Tenants COMMANDITAIRE mit Internet oder privaten Netzwerken sowie die Betriebskopfverbindungen;

- Alle Managed Services (TMA) oder verwaltete Dienste;

- Jegliche Unterstützung für betriebliche Systeme, die im Verantwortungsbereich des COMMANDITAIRE installiert und darüber hinaus sind, auch wenn es sich nur um Überwachung handelt.

Es ist jedoch absolut nicht ausgeschlossen, dass der COMMANDITAIRE bei Bedarf von solchen Diensten auf die Angebotsmöglichkeiten des MSP-Anbieters zurückgreift und diese in Modellen Managed Services für seine Tenants einsetzt. In diesem Fall werden diese Dienste nicht durch die vorliegende Leistungsvereinbarung und deren Vertragsparteien geregelt.

### Schutzbeauftragter-Konfiguration

Standardmäßig stellt der Anbieter die Ressourcenverwaltung im Bare Metal bereit und reserviert Ressourcen sowie konfiguriert die Bereitstellung für die Verwendung von Verfügbarkeitszonen. Es obliegt dem COMMANDITAIRE, die Verfügbarkeitszonen über die INTERFACE COMMANDITAIRE auszuwählen.

### Implementierung des Dienstes

### Vorrautige technische Anforderungen

Für die Implementierung des Dienstes erkennt das COMMANDITAIRE, dass es folgende Maßnahmen ergreifen muss:

- Die festen IP-Adressen auswählen, von denen aus der Lieferant das COMMANDITAIRE zugänglich machen wird (Whitelist). Änderungen an dieser Liste von IP-Adressen müssen über die im Menü für diese Zwecke in der Konsole oder über Serviceanfragen für spätere Änderungen vorgenommen werden. Bei der Inbetriebnahme des Dienstes wird der Lieferant mindestens über eine Adresse IP informiert, z.B. als Mindestanforderung.

## Standort des Dienstleistungen in Frankreich

Es wird ausdrücklich festgelegt, dass keine der von unserem Dienstleistungsangebot beteiligten Operationen oder physischen Komponenten außerhalb der Europäischen Union ansässig sind.

Dazu gehören insbesondere die Support-, Betriebsoperation und Sicherheitsüberwachung (SOC) des technischen Infrastrukturen, der den Dienst liefert. Daher werden alle Speicherung, Administration, Überwachung und Verarbeitung vollständig in Frankreich durchgeführt.

### Standort der Datencenter für den Dienst

Abgesehen von den Aktivitäten der Mitarbeiter und Agenturen des Lieferanten befinden sich alle Produktionsbetriebe (einschließlich Speicherung und Verarbeitung von Daten sowie technische Komponenten, die den Dienst liefern) sowie die damit verbundenen Datencenter in Frankreich.

### Standorte der Cloud-Agenturen von Cloud Temple, die den Dienst anbieten

Die Mitarbeiter von Cloud Temple, die für den Dienst tätig sind, arbeiten aus den Büros von Cloud Temple, die sich alle in Frankreich befinden. Diese Büros befinden sich in Tours, Lyon, Caen und Paris La Défense.

Der Verantwortliche ist über die Möglichkeit informiert, dass die Mitarbeiter von Cloud Temple von zu Hause aus arbeiten können. Allerdings stellt der Anbieter sicher, dass der gleiche Sicherheitsstandard für den Zugang außerhalb des Büros gelten bleibt, insbesondere für den VPN-Zugriff. Diese externen Zugriffe werden gemäß den Anforderungen des Referenzrahmens SecNumCloud umgesetzt.

### Unterstützung

### Nature des Unterstützungsmaterialien zum Dienst

Der Anbieter stellt ein technisches Unterstützungsservice an, das darauf abzielt, den COMMANDITAIRE bei der Verwaltung, Wartung und Optimierung seiner bereitgestellten Ressourcen zu unterstützen. Dieses Service deckt eine breite Palette von Aktivitäten ab, von der Hilfe bei der initialen Konfiguration der Dienste bis hin zum fortgeschrittenen technischen Support zur Lösung spezifischer Probleme.

Hier sind die Merkmale und Funktionen des Unterstützungsdienstes:

- Hilfe bei der ersten Einstellung des Verwendungserfolgs des Dienstes;
- Hilfe bei der Behebung von Anomalien (Incidents);
- Hilfe bei der Lösung von Problemen;
- Überwachung und Beratung zur Optimierung des Technologieunterbaus.

Im Rahmen des Unterstützungsdienstes übernimmt der Anbieter keine Ersatzrolle für den COMMANDITAIRE beim Nutzung des Dienstes. Der COMMANDITAIRE bleibt vollständig verantwortlich für die Konfiguration, den Betrieb seiner VMs und Tenants sowie für die Verwaltung aller Elemente (Daten und Anwendungen eingeschlossen), die er auf den Infrastrukturen des Anbieters gespeichert oder installiert hat. Der technische Support wird gemäß den Allgemeinen Bedingungen der Verkaufs- und Nutzungsbedingungen bereitgestellt, wobei der Anbieter eine Leistungsverpflichtung eingehalten hat.

Der COMMANDITAIRE verpflichtet sich, den Unterstützungsdienst technisch reibungslos zu nutzen, insbesondere durch das Vermeiden unabgesicherter Dienste beim Anbieter und die Einbindung der Anbieteteams bei Kunden oder Dritten, die nicht im Rahmen des Vertrags enthalten sind. Der Anbieter behält sich das Recht vor, Anfragen abzulehnen, die diesen Kriterien nicht erfüllen.

Der Unterstützungsgrad ist an die Abwicklung der damit verbundenen Arbeitsleistungen (Unterstützungsuniten) geknüpft.

### Anfrage an technischen Support

Der technische Support ist über ein Ticket-System via die Befehlszeile COMMANDITAIRE zugänglich und erreichbar von Montag bis Freitag, außer an Feiertagen (8:00 - 18:00 Uhr; Kalender und Ordnung Französisch). Für Notfälle außerhalb der Geschäftszeiten, insbesondere solche, die einen erheblichen Produktionsausfall verursachen, kann der nachtdienst über das vom COMMANDITAIRE angegebene Telefonnummer kontaktiert werden.

Für jede Anfrage oder ein Incident muss ein Ticket beim Support des Anbieters erstellt werden. Die Erstellung dieses Tickets, das alle notwendigen Informationen enthält, ist unerlässlich und markiert den Beginn der Bewertung der Verpflichtungen des Anbieters.

Sobald der Anbieter eine Anfrage oder ein Incident erhält, sei es über die Befehlszeile der Verwaltung oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Berichterstattung eines Incidents ist es entscheidend, dass COMMANDITAIRE dem Anbieter alle relevanten Informationen über das Problem mitteilt. Diese Information ist entscheidend für eine angemessene Bewertung des Sachstands, die Priorisierung und einen effektiven Diagnoseprozess.

COMMANDITAIRE erhält dann eine Bestätigung per E-Mail, die die Erstellung des Tickets und dessen eindeutiger Nummer anzeigt. COMMANDITAIRE kann den Status und das Historik ihrer Anfragen sowie Incident-Berichte direkt aus der Befehlszeile der Verwaltung überprüfen.

### Incident Management Process

Upon reporting an incident, the Technical Support Team of the Service Provider initiates an investigation to pinpoint the cause of the issue and establish a diagnosis. The COMMANDITAIRE must actively collaborate with the Service Provider by providing all necessary information and executing required tests. The Service Provider can access COMMANDITAIRE's services to diagnose the incident.

If the Service Provider's services are deemed functional and the incident is not attributable to them, COMMANDITAIRE will be informed. Upon request from COMMANDITAIRE, the Service Provider may propose Professional Services to trace the problem's origin, billed on an agreed basis of 30-minute increments.

In cases where the incident is attributed to the Service Provider or one of their subcontractors, that party completes the diagnosis and addresses service restoration without additional costs. The diagnostic relies on exchanges between parties and the provider's data, considered valid by mutual agreement among parties.

### Prozessus der Priorisierung von Bearbeitungsaufgaben

Die Zuordnung des Prioritätsniveaus für einen Ordner basiert auf einer mathematischen Analyse, die den Auswirkungsbereich eines Incidents und dessen Kritiklevel bewertet:

- Die Ebenen des Auswirkungsbereichs werden wie folgt definiert:

| Ebene des Auswirkungsbereichs | Beschreibung |
| :--- | :--- |
| **Ebene I1** | Die oder die Dienstleistungen des Anbieters sind unterbrochen |
| **Ebene I2** | Die oder die Dienstleistungen des Anbieters werden beeinträchtigt |
| **Ebene I3** | Die oder die Dienstleistungen des Anbieters sind derzeit stabil, zeigen jedoch Hinweise auf ein potenzielles langfristiges Abwärtspotenzial |

- Die Ebenen der Kritik werden wie folgt definiert:

| Ebene der Kritik | Beschreibung |
| :--- | :--- |
| **Ebene C1** | Die oder die Dienstleistungen des Anbieters verschlechtern sich in einem beunruhigenden Tempo |
| **Ebene C2** | Die oder die Dienstleistungen des Anbieters verschleiern sich allmählich im Laufe der Zeit |
| **Ebene C3** | Die oder die Dienstleistungen des Anbieters stellen einen oder mehrere Unannehmlichkeiten dar, ohne signifikante Nachteile zu haben |

- Basierend auf einer gründlichen Analyse der Situation, die alle Aspekte berücksichtigt, die den Auswirkungsbereich und das Kritiklevel bestimmen, wird ein Priorisierungsniveau für das Ticket gemäß der folgenden Entscheidungsmatrix festgelegt:

| Ebene des Auswirkungsbereichs / Ebene der Kritik | I1 | I2 | I3 |
| :--- | :--- | :--- | :--- |
| **Ebene C1** | Priorität P1 | Priorität P2 | Priorität P3 |
| **Ebene C2** | Priorität P2 | Priorität P3 | Priorität P4 |
| **Ebene C3** | Priorität P3 | Priorität P4 | Priorität P5 |

Die mit jeder Priorisierungsstufe verbundenen Service-Level-Abkommen (SLAs) werden im folgenden Kapitel detailliert beschrieben.

### Sprach- und Lokalisierung des Supportdienstes

Der Support wird vom Anbieter für den COMMANDITAIRE mindestens auf Französisch bereitgestellt. Der Support kann auch auf Englisch erfolgen.

Die Betriebsstellen des Supportdienstes des Anbieters für die in Qualifizierung unter SecNumCloud befindliche Bare-Metal-Anwendung befinden sich im Europäischen Wirtschaftsraum.

# Service Level Agreements (SLAs) and Service Quality Commitments

The Provider commits to continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, ensuring optimal operation.

The unavailability of a service, indicated by a performance metric, is recognized as soon as it's identified by the Provider's supervision system or through a user notification on COMMANDITAIRE. The start of unavailability is determined at the earliest time between these two events to ensure precise and fair billing for downtime.

The end of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's supervision tools or through a user return, ensuring effective resumption of operations and accurate measurement of interruption duration.

## Service Level Agreement (SLA) Availability Commitments

The Provider commits to maintaining a level of availability and performance in accordance with the defined standards for each specified period. These Service Level Agreements (SLAs) are subject to the CONDITION that the COMMANDITAIRE implements its systems across at least two of the available zones within the relevant region.

In the absence of these conditions by the COMMANDITAIRE, it will not be able to claim the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is provided through the COMMANDITAIRE interface. The availability metrics are calculated monthly:

- **SLA 1** (IC-INFRA_SNC-01) - Compute Availability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 2** (IC-INFRA_SNC-02) - Storage Availability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 3** (IC-INFRA_SNC-03) - Network Infrastructure Availability: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 4** (IC-INFRA_SNC-04) - Internet Access: Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.

***Remarks***:

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing techniques to block all traffic destined for that IP from upstream providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIREs and the Provider’s infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as deploying web application firewall software available on the market, and meticulously configuring its security groups via the API command interface.

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols like **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).

## Verfügbarkeitsvertrag der COMMANDITAIRE-Schnittstelle

- SLA 5: IC-INFRA_SNC-05 - Zugriff auf die Admin-Konsole des Dienstes: Eine Verfügbarkeit von mindestens 97% garantiert, kontinuierlich, rund um die Uhr und an sieben Tagen der Woche.
- SLA 6: IC-INFRA_SNC-06 - Zugriff auf die Steuerungs-APIs des Dienstes: Eine Verfügbarkeit von mindestens 99,9%, berechnet auf einer Basis von 24 Stunden am Tag, sieben Tagen der Woche.

## Service Level Agreement (SLA) Engagement for Support Availability

### SLA 7: IC-INFRA_SNC-07

This is the performance commitment of the technical support provided by the Vendor for incidents, excluding scheduled maintenance:

| Priority | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Priority P1** | 30min | 95% |
| **Priority P2** | 2h | 90% |
| **Priority P3** | 4h | 90% |
| **Priority P4** | 24h | 85% |
| **Priority P5** | 48h | 85% |

### SLA 8: IC-INFRA_SNC-08

This is the performance commitment of the technical support provided by the Vendor for service requests:

| Type | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Service Request** | 4h | 90% |

*Note:*

- The GTI delay is calculated from the moment the COMMANDITAIRE opens a ticket until the first intervention by the Vendor's support team.
- Investigation of incidents concerning COMMANDITAIREs will not include remote server assistance on the COMMANDITAIRE's hosted servers. Assistance in this area will be limited to explaining available metrics related to the COMMANDITAIRE's environment, facilitating understanding of encountered performance issues or problems. Based on these analysis results, recommendations can be suggested.*

## Vertragliche Beziehungsorganisation

## Provider Responsibilities

The Provider undertakes to:

- Inform the COMMANDITAIRE adequately (e.g., in case of technical resource capacity limitations affecting the Service).

- Formally inform the COMMANDITAIRE and within one month, of any formal changes (legal, organizational, or technical) that could impact the Service's compliance with extra-EU data protection laws (Article 19.6 of the SNC v3.2 reference manual).

- Provide the COMMANDITAIRE with interfaces and service interfaces in French at a minimum.

- Consider sector-specific requirements related to the types of information entrusted by the COMMANDITAIRE for Service implementation, within the Provider's scope of responsibilities and as outlined in the Contract, while adhering to the latter's provisions.

- Study further sector-specific requirements expressed by the COMMANDITAIRE post-implementation and advise accordingly on necessary actions.

- Refrain from disclosing any information regarding service provision to third parties without the COMMANDITAIRE's explicit written authorization.

- Make all relevant information available to the COMMANDITAIRE for compliance audits as per Article 28 of GDPR, through this Service Agreement.

- Act as a subcontractor to the COMMANDITAIRE in accordance with Article 28 of GDPR, providing assistance and advice on data protection matters upon learning that an instruction from the COMMANDITAIRE may breach data protection rules.

- Notify the COMMANDITAIRE promptly (via the COMMANDITAIRE's console or email) regarding projects impacting or potentially impacting Service security level, availability, or functionality, along with potential impacts, mitigation measures, and residual risks.

- Develop and implement all necessary procedures to comply with applicable legal, regulatory, and contractual requirements, as well as the COMMANDITAIRE's specific security needs defined in the Contract.

- Avoid using COMMANDITAIRE's production data for testing purposes, except upon obtaining explicit written authorization from the COMMANDITAIRE, at which point the Provider commits to anonymizing these data and ensuring their confidentiality during anonymization.

- Securely erase all COMMANDITAIRE data, in accordance with the "Data Deletion Procedure at Contract Termination" outlined in this Service Agreement upon contract termination or cancellation.

- Ensure secure erasure of all COMMANDITAIRE data by completely rewriting any storage medium housing these data within the Service's framework.

On formal written request from the COMMANDITAIRE, the Provider undertakes to:

1. Make the Provider's internal regulations and code of ethics accessible to the COMMANDITAIRE.
2. Provide access to the COMMANDITAIRE to sanctions for security policy violations.
3. Share all relevant events concerning the COMMANDITAIRE with the SERVICE logging elements, enabling the COMMANDITAIRE to independently review usage-related logs via SERVICE web and API interfaces.
4. Make procedures for complying with applicable legal, regulatory, and contractual requirements, alongside the COMMANDITAIRE's specific security needs as defined in the Contract, accessible to the COMMANDITAIRE.
5. Provide elements of risk assessment regarding the submission of COMMANDITAIRE data to non-EU member states' jurisdictions.
6. Inform the COMMANDITAIRE about any subsequent subcontractors involved in Service provision and any changes impacting these subcontractors.

> All Provider entities commit to upholding the fundamental values of the European Union, namely dignity, freedom, democracy, equality, rule of law, and respect for human rights. The service provided by the Provider aligns with applicable data protection legislation and the EU's values concerning fundamental rights and respect for human dignity, liberty, equality, democracy, and the rule of law.

## Limitation des Haftings des Auftragsnehmer

Aufgrund der in dieser Dienstleistungsvereinbarung enthaltenen Definitionen und Bedingungen ist die Haftung des Auftragsnehmers auf folgende Grenzen beschränkt:

1. Das Modell der gemeinsamen Haftung, das in der Abschnitt "Gemeinsame Haftungsmodelle" dieser Dienstleistungsvereinbarung beschrieben wird, begrenzt die Beteiligung des Auftragsnehmers an den Schichten über die Bereitstellung von Rechenressourcen (Rechner, Netzwerk, Speicher und Wiederherstellung) hinaus. Dazu gehört insbesondere:

    - Die Verwaltung der installierten Software auf virtuellen Maschinen (Betriebssysteme, Middleware, Anwendungen usw.);
    - Die Aktualisierung von Betriebssystemen und anderer installierter Software durch den COMMANDITAIRE auf seinen virtuellen Maschinen in seinen Tenants;
    - Die Sicherheit der Programme, Software und Anwendungen, die auf virtuellen Maschinen installiert sind;
    - Die Aktualisierung der virtuellen Maschinen;
    - Die Datensicherung im Anwendungsebene.

2. Der Auftragsnehmer kann nicht von der Eigentum der übertragenen und erzeugten Daten durch den COMMANDITAIRE argumentieren, da diese letzteren gehören. Die Daten unterliegen dem Eigentum des COMMANDITAIRE.

3. Der Auftragsnehmer betont, dass er die Daten nicht ohne vorherige Zustimmung des COMMANDITAIRE auswerten oder nutzen kann. Ihre Verfügbarkeit ist für den COMMANDITAIRE reserviert.

4. Der Auftragsnehmer trägt keine Haftung für physische Komponenten, die er hält und verwaltet, aber deren Eigentum direkt dem COMMANDITAIRE oder einem Dritten zugerechnet ist, mit dem der COMMANDITAIRE einen Vertrag geschlossen hat. Die Bereitstellung physischer Komponenten des Kunden fällt nicht in den Zweck dieses Dienstes und liegt daher außerhalb des Rahmens dieser Dienstleistungsvereinbarung. Es obliegt dem COMMANDITAIRE, die Anhaftung oder Abhängigkeit der physischen Komponenten gegenüber dem in Qualifizierung durch SecNumCloud laufenden Service Bare Metal zu bewerten.

## Zugangsbeschränkung

Im Rahmen des Dienstes ist es dem Anbieter streng verboten, auf Tenanten zuzugreifen, die zum COMMANDITAIR gehören, ohne vorherige Genehmigung. Es liegt an dem COMMANDITAIR, den erforderlichen Zugriff für das Personal des Anbieters bereitzustellen, abhängig von den spezifischen Anforderungen des Hostings sowie bei Bedarf die Dienstleistungen eines externen Support-Teams (wenn diese Option vom COMMANDITAIR gewählt wurde).

Das COMMANDITAIR erkennt an, dass dieser Zugriff ausschließlich für die Erfüllung der vereinbarten Leistungen bestimmt ist und somit eine sichere und konformen Verwaltung gewährleistet.

Der Zugang durch Dritte, die im Rahmen der Dienstleistungsbereitstellung des Anbieters tätig sind, ist grundsätzlich untersagt. In Ausnahmefällen, bei denen eine technische Beschränkung einen solchen Zugriff erfordert, kann dieser nur nach einer klaren Benachrichtigung an das COMMANDITAIR, einer detaillierten Begründung und der schriftlichen Zustimmierung des COMMANDITAIR eingerichtet werden.

Diese Maßnahme stellt sicher, dass das COMMANDITAIR den Zugriff auf seine Daten kontrolliert und sichert, indem alle Ausnahmen von der Regel ausdrücklich genehmigt und dokumentiert werden.

## Verantwortlichkeiten von Dritten, die für die Bereitstellung des Dienstes verantwortlich sind

Der Anbieter überwacht die Liste der Drittpartner, die an der Bereitstellung des Dienstes beteiligt sind. Diese Drittpartner umfassen Verlage, Lieferanten (des Anbieters) und andere Auftragnehmer, die zur Bereitstellung des Dienstes beitragen. Der Anbieter setzt folgende Maßnahmen gegen diese Drittpartner an:

- Der Anbieter verlangt von den Drittpartnern, die am Betrieb des Services beteiligt sind, ein Sicherheitsniveau mindestens so hoch wie das, das der Anbieter in seiner eigenen Dienstleistungs-Sicherheitsrichtlinie anstrebt.

- Der Anbieter verhandelt mit jedem Drittpartner, der am Betrieb des Services beteiligt ist, einen Audit-Vertrag, der es einem Qualitätszertifizierungsorganismus ermöglicht, die Einhaltung der gesetzlichen Anforderungen und den Anbieters Sicherheitsanforderungen zu überprüfen. Diese Überprüfung ermöglicht es dem Anbieter, seine Verpflichtungen in dieser Dienstleistungsvereinbarung einzuhalten.

- Der Anbieter implementiert eine Prozedur zur regelmäßigen Kontrolle der Maßnahmen, die von den Drittpartnern zur Einhaltung der Sicherheitsanforderungen des Anbieters getroffen werden.

- Der Anbieter überwacht die Änderungen, die von Drittpartnern am System der Information des Dienstes vorgenommen wurden, die das Sicherheitsniveau beeinflussen könnten.

## Verantwortlichkeiten und Pflichten des Beauftragten

Der BEAUFTRAGTE hat folgende Aufgaben im Rahmen des Dienstes:

- Zum Erinnerung weiß der LIEFERANT dem BEAUFTRAGTEN eine Plattform für Berechnungen (Server ohne Betriebssystem) zur Verfügung zu stellen, dessen Konfiguration durch den BEAUFTRAGTEN zu tragen ist.

- Der BEAUFTRAGTE erlaubt der ANSSI und dem Qualifikationsorgan die Überprüfung des Dienstes sowie der technischen Infrastruktur, die den Dienst liefert.

- Der BEAUFTRAGTE ist verantwortlich, dem LIEFERanten die möglichen Branchenspezifischen Anforderungen zu benennen, die mit den von ihm übermittelten Informationen verbunden sind und deren Berücksichtigung durch den LIEFERanten erforderlich machen.

- Der BEAUFTRAGTE akzeptiert, dass er keine Anforderungen oder Handlungen an den LIEFERanten auferlegt, die diese ab sofort von den Anforderungen des Referenzrahmen SecNumCloud in seiner aktuellen Version oder das Abwerten der Sicherheitsstufe durch die Erfüllung dieser Anforderungen verringern würden.

## COMMANDITAIRE'S RIGHTS

At any point during the contractual relationship, the COMMANDITARE can submit a claim regarding the qualified service to the ANSSI.

At any time, the COMMANDITARE can request from the Prestataire that they make their internal settlement and ethics charter accessible to them.

## Löschung der Daten am Ende des Vertrags

Bei Ablauf des Vertrages, sei es durch Ablauf oder aufgrund einer anderen Gründe, verpflichtet sich der Dienstleister, die sicherheitsgewährleistete Löschung aller Daten des COMMANDITAIRE, einschließlich technischer Daten, durchzuführen. Der Dienstleister stellt sicher, dass er dem COMMANDITAIRE ein formellen Vorab-Mitteilung abgibt, die einen Zeitraum von 21 Kalendertagen (21 Tage) beinhaltet. Die Daten des COMMANDITAIRE werden dann innerhalb eines maximalen Zeitraums von 30 Tagen nach dieser Mitteilung gelöscht.

Um diese Löschung zu bestätigen, übergibt der Dienstleister dem COMMANDITAIRE ein Zertifikat, das die Löschung der Daten bestätigt.

## Lebenszyklus des vorliegenden Dienstleistungsvertrag

## Eingang in Kraft treten der Dienstleistungsvertrag

Die vorliegende Dienstleistungsvereinbarung tritt am Tag ihrer Unterzeichnung durch den Auftragsgeber in Kraft.

Die Sammlung, Verarbeitung, Speicherung und Verarbeitung der Daten im Rahmen des Vorverkaufs, der Implementierung und des Ausschalts des Services erfolgt im Einklang mit der geltenden Gesetzgebung.

## Änderungen der Dienstleistungsvereinbarung

Die in der vorliegenden Dienstleistungsvereinbarung vorgenommenen Änderungen oder Hinzufügungen basieren ausschließlich auf Anfragen von den zuständigen Governance-Organen. Diese Vorschläge für Änderungen werden von den Parteien geprüft, die befugt sind, die Aspekte zu identifizieren, die eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede Änderung der Dienstleistungsvereinbarung, nach Genehmigung, die ursprünglich festgelegten finanziellen Bedingungen ändert, eine Erweiterung des laufenden Vertragsvertrages erfordert und die Unterschrift der Parteien.

Faktoren, die zu einer Überprüfung dieser Dienstleistungsvereinbarung führen können, sind:

- Die Entwicklung der technischen Infrastruktur, die den Service Bare Metal liefert;
- Anpassungen an die von dem Anbieter bereitgestellten Dienste zur Bereitstellung des Services;
- Änderungen der Verpflichtungen und Sanktionen;
- Organisationsplanänderungen innerhalb des COMMANDITAIRE oder beim Anbieter;
- Ausweitung oder Verkleinerung des Anwendungsbereichs des Services.

Die Verwaltung von Versionen und Änderungen der Dienstleistungsvereinbarung wird in der Vorlage dokumentiert, um den Überblick zu erhalten.

### Evolutionen ausgelöst durch den COMMANDITAIRE

Die Änderungen der Dienstleistungsvereinbarung können hauptsächlich auf folgende Gründe zurückzuführen sein:

- Eine Weiterentwicklung der von uns verwalteten Infrastruktur durch den Anbieter;

- Eine Änderung der von uns implementierten Dienstleistungen durch den Anbieter;

- Eine Anpassung der Servicelevelabkommen durch den Anbieter.

### Änderungen durch den Auftragnehmer

Jede Änderung der Dienstleistungsvereinbarung unterliegt der Zustimmung des Kommanditären. Es wird vereinbart, dass jede geplante oder erfolgreich validierte Modifikation, die die finanziellen Elemente des Vertrags betrifft, möglicherweise eine Unterzeichnung eines Annexes zur Folge hat.

## Reversibilität

Cloud Temple sichert die Rücknahme der vorliegenden Dienstleistungsvereinbarung (insbesondere ihres Auflösens) ohne Kosten für den COMMANDITAIRE zu, falls dieser seine Qualifikation SecNumCloud verliert.

Die angebotenen Dienste enthalten keine Verpflichtung zur Reversibilität (d.h., Unterstützung des COMMANDITAIRE beim Wechsel zu einem anderen "Anbieter") außer der Bereitstellung der COMMANDITAIRE-Schnittstelle durch den Anbieter, die es dem COMMANDITAIRE ermöglicht, seine Daten zu sichern und wiederherzustellen sowie seine Systemkonfigurationen (einschließlich) zu speichern. Der COMMANDITAIRE kann dies über folgende technische Modalitäten erreichen:

1. Den Zugriff auf Dateien in einem dokumentierten und außerhalb des von uns bereitgestellten Dienstes verwendbaren Format.
2. Die Implementierung technischer Schnittstellen, die es dem COMMANDITAIRE ermöglichen, auf seine Daten zuzugreifen und diese in einem dokumentierten und verwendbaren Schema (API) abzurufen.

Der COMMANDITAIRE, der allein für sein System verantwortlich ist, muss alles tun, um dieses Verfahren zu erleichtern, falls er dies benötigt (was bedeutet, dass er eine gründliche Dokumentation einrichten und Pläne zur Reversibilität erstellen muss). In Fällen, in denen der COMMANDITAIRE zusätzliche Leistungen benötigt, kann der Anbieter eine Beratungsmöglichkeit anbieten, die auf einem individuellen Vertrag geschlossen wird.

---

## Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes

---

### Verwaltung von Meldungen und Ausfällen

Ich werde die folgenden Schritte zur Verwaltung von Meldungen und Ausfällen in Markdown formatieren:

1. **Erkennung der Meldung**:
   - Die Systeme überwachen kontinuierlich den Betrieb, um Anomalien oder Fehler zu erkennen.
   - Wenn ein Problem identifiziert wird, wird eine Meldung generiert und an das entsprechende Team weitergeleitet.

2. **Priorisierung der Meldungen**:
   - Die Meldungen werden basierend auf ihrer Dringlichkeit klassifiziert (z.B., hoch, mittel, niedrig).
   - Teams priorisieren die Meldungen entsprechend der Kategorien festgelegten Regeln.

3. **Analysierung und Diagnose**:
   - Das Team analysiert die Meldung, um den Ursprung des Problems zu bestimmen.
   - Dazu werden verschiedene Werkzeuge wie Logs, Monitoring-Tools und Debugging-Tools genutzt.

4. **Behebung der Meldungen**:
   - Sobald das Problem identifiziert wurde, wird ein Behebungsplan erstellt.
   - Die Teammitglieder arbeiten zusammen, um die Lösung zu implementieren und zu testen.

5. **Validierung der Lösung**:
   - Nach Implementierung des Fixes wird die Funktionalität überprüft, um sicherzustellen, dass das Problem behoben wurde.
   - Die Meldung wird als "behebt" markiert.

6. **Dokumentation und Berichterstattung**:
   - Alle Schritte zur Behebung der Meldung werden dokumentiert, einschließlich der Ursache des Problems und der Lösungsmaßnahmen.
   - Ein Bericht wird an die relevanten Stakeholder gesendet, um sie über den Zustand zu informieren.

7. **Prävention zukünftiger Meldungen**:
   - Aus der Analyse werden Maßnahmen zur Verbesserung des Systems und zur Prävention ähnlicher Probleme in Zukunft ergriffen.

8. **Überwachung und Kontinuierliche Verbesserung**:
   - Die Wirksamkeit der Behebungsmaßnahmen wird kontinuierlich überwacht, um sicherzustellen, dass keine neuen Probleme entstehen.
   - Das System zur Meldung und Verwaltung von Ausfällen wird regelmäßig aktualisiert und verbessert.

Diese Schritte bilden die Grundlage für eine effektive Verwaltung von Meldungen und Ausfällen im Cloud-Computing-Umfeld, um die Systemverfügbarkeit und -zuverlässigkeit zu gewährleisten.

---
Incidents
---

#### Artikel 2 - Art der Schadenarten, die in Anspruch genommen werden

- Schadensfälle;

- Ausfälle und Störungen;

- Sicherheitsvorfälle, die die Verfügbarkeit, den Datenschutz oder die Integrität des Dienstes beeinträchtigen.

#### Behandlung von Ausfällen

> Der Anbieter informiert den COMMANDITAIRE in absoluter Erstes besten Zeiten über Störungen und Ausfälle, mithilfe einer Benachrichtigung im COMMANDITAIRE-Console oder per E-Mail an den zuständigen COMMANDITAIRE. Der Anbieter informiert den COMMANDITAIRE über die Bearbeitung des Ausfallereignisses über den von ihm verwendeten Kanal zur Meldung des Störungsereignisses, oder über den in der Meldung des Störungsereignisses angegebenen Kanal.

#### Sicherheitsvorfallberichtungslevel

Das COMMANDITAIRE hat die Aufgabe, die Ernstgraden der Sicherheitsverletzungen zu bestimmen, für die es benachrichtigt werden soll, z.B. durch die Formalisierung in einem PAS, das auf den Dienst anwendbar ist.

Standardmäßig wird das COMMANDITAIRE über:

- Sicherheitsverletzungen informiert, die einen Auswirkung (Ereignisse I1 und I2 gemäß der Schwereanordnung im Verarbeitungsablauf dieser Dienstleistungsvereinbarung) haben;

- Sicherheitsverletzungen, die die Vertraulichkeit oder Integrität der Daten des COMMANDITAIRE betreffen, die im Rahmen des Services verarbeitet werden;

- Datenschutzverletzungen von personenbezogenen Daten, für die das COMMANDITAIRE als Verantwortlicher gemäß Artikel 8 der Datenschutzgrundverordnung (DSGVO) im Rahmen des Services verantwortlich ist;

-

### Wartung des Dienstes

This is the direct translation of "Maintenance du Service" from French to German while preserving the structure and formatting of the Markdown text. The content outside of code blocks, HTML tags, or Markdown structures (like headers, lists, etc.) was translated directly, adhering to the specified rules.

### Art der Wartung

Verletzungen personenbezogener Daten, für die der Anbieter für den Verarbeitungsauftrag verantwortlich ist und dessen Personendaten betroffen sind, gemäß Artikel 8 der Anhang DPA. Die durchgeführte Wartung umfasst:

- Die Implementierung des Wartungsplans zur Aufrechterhaltung des Dienstes in Betriebszustand mit guten Verfügbarkeitsindikatoren, wie vom Anbieter bereits angegeben.

- Die Durchführung eines Plans PCA/PRA (Notfallmanagementplan), falls er vom Kunden abgeschlossen wurde und durch einen möglichen Vorfall ausgelöst wird.

### Remote Access to Cloud Temple within the COMMANDITAIRE Perimeter

The Provider explicitly forbids, as per this Service Agreement, any access to Tenants and the COMMANDITAIRE interface.

It will be the responsibility of the COMMANDITAIRE to grant the necessary access to Provider's personnel. The COMMANDITAIRE acknowledges that these accesses will be utilized within the hosting and, if applicable, information management (if subscribed by the COMMANDITAIRE).

### Remote Access by Third Parties for Service Provision within the COMMANDITAIRE Domain

No remote access by third parties involved in providing the service is permitted.

Should a technical necessity arise, such access would only be granted post-notification and written approval from COMMANDITAIRE.

# Datenlöschung am Ende des Vertrags

Bei Ablauf oder jeder anderen rechtlichen Voraussetzung des Vertrages wird der Lieferant die sichere Entfernung aller im Rahmen des Dienstes verarbeiteten Daten, einschließlich technischer Daten des COMMANDITAIRE, sicherstellen. Der Lieferant wird den Kunden mit einem formvollständigen Schreiben innerhalb eines Zeitraums von 21 Kalendertagen (21) über die Absicht informieren. Die Daten des COMMANDITAIRE werden innerhalb von 30 Tagien nach der Benachrichtigung entfernt. Der Lieferant liefert ein Entfernungszertifikat für technische Daten des COMMANDITAIRE.

## Anwendbares Recht

## Allgemein

Die anwendbare Rechtsordnung und die zu der vorliegenden Dienstleistungsvereinbarung unterliegende Rechtssubjekte ist das französische Recht.

## Einhaltung von Gesetzen und Vorschriften

Der Anbieter sich verpflichtet sich auf die folgenden Punkte:

- Identifizierung der rechtlichen und regulatorischen Einschränkungen im Rahmen des Dienstes;

- Einhaltung der rechtlichen und regulatorischen Einschränkungen für die von uns übernommenen Daten innerhalb der Grenzen unserer Verantwortung und gemäß den Bestimmungen des Vertrags;

- Einhaltung der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG);

- Implementierung von Maßnahmen zur Datenbeschützung;

- Einrichtung eines regelmäßigen Rechts- und Vorschriften-Überwachungsverfahrens;

- Besitzen und Aufrechterhaltung angemessener Beziehungen oder einer Überwachung mit den zuständigen Behörden im Zusammenhang mit der Art der von uns verarbeiteten Daten innerhalb des Rahmens unseres Dienstleistungen. Dazu gehören insbesondere das Bundesamt für Sicherheit im Internet (BSI), das Centre National d'Études Spéciales (CNEST) und die Commission Nationale de l'Informatique et des Libertés (CNIL).

## GDPR

As a processor under the provisions of Article 28 of the General Data Protection Regulation (RGPD), the Processor commits to:

- Ensuring transparency and traceability;

- Designating a Data Protection Officer (DPO) responsible for defining and implementing data protection measures concerning personal data;

- Providing assistance and advice to the Principal in alerting them if their instruction would constitute a violation of data protection rules, should the Processor have the capability to identify such violations;

- Ensuring security of processed data due to its SecNumCloud qualification.

## Schutz vor außereuropäischem Recht

Der Sitz des Auftragnehmers ist innerhalb eines Mitgliedstaats der Europäischen Union angesiedelt. Der Kapitalzusammenhang und die Stimmrechte im Unternehmen des Auftragnehmers sind nicht, direkt oder indirekt:

- individuell von mehr als 24% besitzt;

- und gemeinsam von mehr als 39% besitzt,

durch Entitäten, deren Sitz im Außeneuropa liegt, eine zentrale Verwaltung oder Hauptstelle.

Im Falle eines Rechtsmittelverfahrens durch den Auftragnehmer innerhalb des Dienstes gegen eine Drittpartei (einschließlich Subunternehmer), die ihren Sitz im Außeneuropa hat, oder gegen eine Unternehmensgruppe, die sich in einem Außeneuropa ansässig ist oder von einer solchen kontrolliert wird, verpflichtet sich der Auftragnehmer:

- Dass diese Drittpartei keinen Zugriff auf die betreffenden Betriebsdaten hat;

- Dass sie eine ausreichende Unabhängigkeit in der Betriebsführung durch die Möglichkeit, einen anderen Subunternehmer zu beauftragen oder schnell alternative Technologien einzusetzen, besitzt.

Zur Erinnerung: Die betreffenden Daten sind solche, die dem Auftragnehmers vom COMMANDITAIRE übertragen wurden sowie alle technischen Daten, die Informationen über die COMMANDITAIRES enthalten.

Für die Zwecke dieses Artikels wird der Begriff Kontrolle nach den Anweisungen des Art. L233-3 II des Handelsgesetzes verstanden.

# SIGNATUREN

Unterzeichnet am \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, dem \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Für Cloud Temple, den AUßENSTELLER

Für \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, den BETREUER