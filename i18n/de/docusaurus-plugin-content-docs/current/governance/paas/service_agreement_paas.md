---
title: Convention de Service PaaS
---

**Inhaltsverzeichnis**

- [1. Rahmen](#1-rahmen)
- [2. Akronyme](#2-akronyme)
- [3. Glossar](#3-glossar)
- [4. Gegenstand der PaaS-Dienstleistungsvereinbarung des Anbieters](#4-gegenstand-der-paas-dienstleistungsvereinbarung-des-anbieters)
- [5. Entwicklung der PaaS-Dienstleistungsvereinbarung](#5-entwicklung-der-paas-dienstleistungsvereinbarung)
- [6. Audit](#6-audit)
- [7. Dienstleistungsbeschreibung](#7-dienstleistungsbeschreibung)
- [8. Umsetzung des Dienstes](#8-umsetzung-des-dienstes)
  - [8.1. Beschreibung der technischen Komponenten](#81-beschreibung-der-technischen-komponenten)
    - [8.1.1. Redhat OpenShift Service Plattform](#811-redhat-openshift-service-plattform)
    - [8.1.2. Steuerungssoftware-Infrastruktur der Redhat Openshift-Plattform](#812-steuerungssoftware-infrastruktur-der-redhat-openshift-plattform)
    - [8.1.3. Zugehörige Backup-Infrastruktur](#813-zugehörige-backup-infrastruktur)
    - [8.1.4. Umsetzung von Lösungen zur Wiederherstellung oder Kontinuität des Betriebs](#814-umsetzung-von-lösungen-zur-wiederherstellung-oder-kontinuität-des-betriebs)
- [9. Verpflichtungen und Service-Level](#9-verpflichtungen-und-service-level)
  - [9.1. Verfügbarkeitsverpflichtungen der RedHat OpenShift Plattform](#91-verfügbarkeitsverpflichtungen-der-redhat-openshift-plattform)
- [10. Anwendbares Modell der gemeinsamen Verantwortung](#10-anwendbares-modell-der-gemeinsamen-verantwortung)
  - [10.1. Verantwortung und Pflichten des Anbieters](#101-verantwortung-und-pflichten-des-anbieters)
  - [10.2. Haftungsbeschränkung des Anbieters](#102-haftungsbeschränkung-des-anbieters)
  - [10.3. Zugangsbeschränkung](#103-zugangsbeschränkung)
- [11. Datenlöschung bei Vertragsende](#11-datenlöschung-bei-vertragsende)
- [12. Anwendbares Recht](#12-anwendbares-recht)


## 1. Rahmen

|           |                        |
| --------- | ---------------------- |
| Referenz  | CT.AM.JUR.ANX.PAAS 2.0 |
| Datum     | 13. März 2024          |

## 2. Akronyme

| Akronym     | Beschreibung                                                                                                |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Beratungsausschuss für Änderungen                                                   |
| CMDB        | Configuration Management Database – Konfigurationsmanagement-Datenbank                                      |
| COPIL       | Lenkungsausschuss                                                                                           |
| COSTRAT     | Strategisches Komitee                                                                                       |
| DB          | Database (Datenbank)                                                                                        |
| DRP         | Disaster Recovery Plan (Katastrophenwiederherstellungsplan)                                                 |
| GTI         | Reaktionszeitgarantie                                                                                       |
| GTR         | Lösungszeitgarantie                                                                                         |
| GTE         | Eskalationszeitgarantie                                                                                     |
| HYPERVISEUR | Betriebssystem, das die Ausführung von VMs auf einer Recheneinheit ermöglicht                               |
| ITIL        | Information Technology Infrastructure Library - Best Practices für IT-Management                            |
| IAAS        | Infrastructure as a Service                                                                                 |
| MCO         | Betriebssicherstellung                                                                                      |
| MOA         | Projektauftraggeber                                                                                         |
| MOE         | Projektausführung                                                                                           |
| OS          | Operating System (Betriebssystem)                                                                           |
| PAQ         | Qualitätsmanagementplan                                                                                     |
| PAAS        | Platform as a Service                                                                                       |
| SDM         | Service Delivery Manager                                                                                    |
| RFC         | Request For Change – Änderungsanforderung                                                                   |
| RGPD        | Datenschutz-Grundverordnung                                                                                 |
| RPO         | Recovery Point Objective – Wiederherstellungspunktziel                                                      |
| RTO         | Recovery Time Objective – Wiederherstellungszeitziel                                                        |
| SLA         | Service Level Agreement – Service-Level-Vereinbarung                                                        |
| UO          | Betriebseinheit                                                                                             |
| VABF        | Eignungsvalidierung für den korrekten Betrieb                                                               |
| VABE        | Eignungsvalidierung für die korrekte Betriebsführung                                                        |
| VM          | Virtual Machine (Virtuelle Maschine)                                                                        |
| VSR         | Regelmäßige Servicevalidierung                                                                              |
| SNC         | SecNumCloud                                                                                                 |

## 3. Glossar

Die nachstehenden im vorliegenden Dokument verwendeten Begriffe werden im Rahmen der folgenden Definitionen ausgelegt:

| Ausdruck                        | Definition                                                                                                                                                                                                                                   |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                | Der Begriff "Secure Temple" bezieht sich auf den IaaS-Dienst, der als Secure-NumCloud zertifiziert ist und von der Firma Cloud Temple angeboten wird.                                                                                        |
| Region                         | Eine "Region" im Kontext des Cloud Computing bezeichnet einen geographisch abgegrenzten Bereich von Verfügbarkeitszonen, <br/>der Netzwerk-, Rechen- und Speicherdienste bietet, um Latenzzeiten, Leistung<br/> und lokale regulatorische Anforderungen zu optimieren |
| Zone Verfügbarkeit<br/>(AZ)<br/>(Availability zone) | Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der zur Sicherstellung der hohen Verfügbarkeit und Resilienz der Dienste durch geographische Verteilung der Ressourcen entwickelt wurde.               |
| Tenant                         | Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe reserviert ist, die eine gemeinsame Infrastruktur nutzen und dabei die Unabhängigkeit und Sicherheit von Daten und Anwendungen gewährleisten.                           |

| Ausdruck             | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Vorfall              | Ein "Vorfall" bezeichnet jedes unerwartete Ereignis, das den normalen Betrieb eines Systems stört oder die Sicherheit von Daten und Infrastrukturen gefährdet                                                                                                                                                                                                                                                                                 |
| Problème                 | Ein "Problem" ist eine grundlegende Ursache von einem oder mehreren Vorfällen, die identifiziert oder vermutet wird und eine Analyse und Lösung erfordert, um deren Wiederholung zu verhindern.                                                                                                                                                                                                                                                                       |
| Changement               | Eine "Änderung" bezeichnet jede Modifikation der IT-Umgebung, die darauf abzielt, Systeme, Prozesse oder Dienstleistungen zu verbessern oder zu korrigieren.                                                                                                                                                                                                                                                                                |
| changement standard      | Eine "Standardänderung" ist eine vorab genehmigte Modifikation mit geringem Risiko, die wiederkehrend ist und einem festgelegten Verfahren in der IT-Umgebung folgt.                                                                                                                                                                                                                                                                           |
| Mise en production       | Verwaltungsaktion(en) zur Durchführung der Änderung, sobald diese genehmigt wurde <br/>(die Änderung im Sinne von ITIL betrifft nur das Änderungsmanagement und nicht dessen Ausführung/Umsetzung).                                                                                                                                                                                                                                        |
| Demande de service       | Änderungsanfrage, die einem Verfahren unterliegt, bei dessen Durchführung: <br/> i) die CMDB nicht verändert wird,<br/> ii) das Verfahren, die Kosten und die Risiken im Voraus bekannt und akzeptiert sind und keine speziellen Rückführungsmodalitäten erfordern<br/> iii) die Durchführung einer Dienstgütevereinbarung unterliegt und im Entgelt des Vertrags enthalten ist, wenn sie während der Geschäftszeiten erfolgt.                               |
| Element de configuration | Ein "Configurationselement" ist eine identifizierbare Komponente des Informationssystems, wie z. B. Software, Hardware oder ein Dokument,<br/> das im Rahmen des IT-Service-Managements verwaltet wird.                                                                                                                                                                                                                                      |
| Service                  | Ein "Service" ist eine Möglichkeit, dem KUNDEN Wert zu bieten, indem er die gewünschten Ergebnisse erleichtert, ohne dass dieser die spezifischen Kosten und Risiken verwalten muss.                                                                                                                                                                                                                                                         |
| Evenement                | Ein "Ereignis" ist jede im IT- oder Netzwerk-System feststellbare oder identifizierbare Vorkommnis, das für das IT-Service-Management von Bedeutung sein kann.                                                                                                                                                                                                                                                                               |
| Sinistre                 | Ein "Schaden" bezeichnet ein unvorhergesehenes schädigendes Ereignis, das materielle, finanzielle oder Datenverluste für einen KUNDEN verursacht.                                                                                                                                                                                                                                                                                             |
| Convention de service    | Dieses Dokument, das im Rahmen eines spezifischen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (CGVU) erstellt wurde und den Anforderungen des SecNumCloud-Referenzmodells entspricht.                                                                                                                                                                                                                                   |
| Disponibilité            | Fähigkeit, die Verfügbarkeit und optimale Leistung eines Dienstes gemäß den in den Service Level Agreements (SLA) festgelegten Kriterien und Verpflichtungen sicherzustellen.                                                                                                                                                                                                                                                              |
| Supervision              | Überwachung eines Informationssystems oder eines Dienstes, einschließlich der Sammlung verschiedener Daten wie Messungen und Alarme. <br/>Diese Tätigkeit beschränkt sich auf die Beobachtung und Überwachung, ohne direkt auf die überwachten Elemente einzugreifen, was den Verwaltungsoperationen vorbehalten ist.                                                                                                                         |

## 4. Objet de la convention de service PaaS du Prestataire

La présente Convention de Services établit les termes et conditions selon lesquels le Prestataire s'engage à délivrer au CLIENT une infrastructure 
conforme aux spécifications de l'offre « Platform as a Service – PaaS », dûment qualifiée SecNumCloud.

Objet de la Convention de Services :

1. Préciser les exigences de performance attendues par le CLIENT en termes de fonctionnalité et de fiabilité de l'infrastructure.
2. Énoncer les obligations du Prestataire afin de satisfaire aux niveaux de service convenus.
3. Identifier les normes réglementaires applicables spécifiquement à l'infrastructure proposée.
4. Assurer une uniformité et une intégrité dans l'évaluation de la qualité des services rendus.
5. Garantir l'excellence des services fournis, évaluée au moyen d'indicateurs de performance quantitatifs.

Il est stipulé que, dans l'hypothèse où le Prestataire se verrait retirer sa qualification SecNumCloud, le présent Contrat pourra être résilié de plein droit, sans encourir de pénalités, par le CLIENT. 
Dans une telle éventualité, le Prestataire s'engage à informer le CLIENT de cette déqualification par envoi d'une notification officielle, au moyen d'une lettre recommandée avec demande d'avis de réception.

Il convient de noter qu'une modification ou un ajustement de la qualification SecNumCloud ne sera pas interprété comme une révocation de la qualification initiale.

## 5. Evolution de la convention de service PaaS

Les modifications ou ajouts apportés à la présente convention de service découlent exclusivement des requêtes formulées par les organes de gouvernance désignés à cet effet. 
Ces propositions de changement seront examinées au sein du comité stratégique, seule instance habilitée à déterminer les aspects nécessitant une formalisation écrite.

Il est convenu que toute évolution de la convention, après validation, qui altère les conditions financières initialement établies, nécessitera l'établissement et la signature d'un avenant au contrat en cours.

Les facteurs pouvant induire une révision de cette convention incluent, sans s'y limiter :

- L'adaptation de la plateforme PaaS orchestrée par le Prestataire.
- Les ajustements apportés aux services déployés par le Prestataire.
- Les variations des engagements pris et des sanctions applicables.
- Les reconfigurations organisationnelles au sein du CLIENT ou du Prestataire.
- L'expansion ou la réduction du champ d'application des services auxquels le CLIENT a souscrit.

La gestion des versions et des révisions de la convention est consignée en préambule du document pour en faciliter le suivi.

## 6. Audit 

Le Prestataire s'engage à permettre au CLIENT, ou à tout auditeur tiers que ce dernier aurait désigné, de consulter l'ensemble des documents nécessaires à l'attestation du respect intégral des obligations liées à la conformité avec les dispositions de l'article 28 du Règlement Général sur la Protection des Données (RGPD), facilitant ainsi la réalisation d'audits.

**Le Prestataire s'engage notamment à tenir à disposition du CLIENT la liste de l’ensemble des tiers qui peuvent accéder aux données et l’informer de tout changement de sous-traitants.**

Par l'acceptation de la présente convention de service, le CLIENT confère son autorisation explicite à :

1. __L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI)__ ainsi qu'à l'entité de qualification compétente pour entreprendre la vérification de la conformité du Service et de son Système d'Information aux standards définis par le Référentiel SecNumCloud.
2. __Un prestataire d'audit en sécurité des systèmes d'information__, dûment qualifié et expressément désigné par le Prestataire, pour mener à bien des audits de sécurité portant sur le Service délivré par le Prestataire.

## 7. Description du service

L'offre de services proposée par le Prestataire se caractérise par la mise à disposition des prestations suivantes, 
lesquelles s'alignent sur le principe de responsabilité partagée détaillé dans les normes établies par le référentiel SecNumCloud :

- La provision d'une plateforme de gestion des conteneurs Redhat Openshift pilotée par le Prestataire.

Il est entendu que le Prestataire mobilisera son expertise pour réaliser les Prestations selon les meilleures pratiques professionnelles, 
conform zu ihren Spezifikationen und unter Beachtung der Normen seiner ISO/IEC 27001 Zertifizierung sowie den Richtlinien des SecNumCloud-Referenzrahmens.

## 8. Dienstimplementierung

Es wird klargestellt, dass alle Vorgänge und physischen Komponenten, die an der Bereitstellung des qualifizierten Dienstes beteiligt sind, wie in dieser Vereinbarung beschrieben,
sich innerhalb der Europäischen Union befinden. Dies umfasst insbesondere den Support, die operative Überwachung und die Sicherheitsüberwachung (SOC).

### 8.1. Beschreibung der technischen Komponenten 

Die PaaS-Dienste (Platform as a Service) umfassen alle für ihren optimalen Betrieb erforderlichen Komponenten und Dienste im Einklang mit der SecNumCloud-Zertifizierung.

In diesem Zusammenhang sind ihre Leistung und Zuverlässigkeit eng mit den technischen Komponenten und Diensten der **IaaS-Infrastruktur** des Anbieters verbunden, wie im Dokument [IaaS-Servicevereinbarung](../iaas/sla_iaas.md) des Anbieters spezifiziert.

#### 8.1.1. REDHAT OpenShift Service-Plattform

Der Dienst umfasst die Bereitstellung innerhalb einer Region, über 3 Verfügbarkeitszonen hinweg.

#### 8.1.2. Infrastruktur zur Verwaltung der Redhat Openshift-Plattform

Der Anbieter stellt dem KUNDEN die Administrationskonsole und die erforderliche API zur Verfügung, um seine RedHat OpenShift PaaS-Umgebungen zu betreiben.
Er verpflichtet sich auch, sie in optimalem Betriebszustand zu halten und kontinuierlich ihre Sicherheit zu gewährleisten.

Im spezifischen Rahmen des bereitgestellten Dienstes stellt der Anbieter dem KUNDEN alle Schnittstellen und APIs der RedHat OpenShift-Plattform innerhalb des selektierten Tenants zur Verfügung. Es liegt in der Verantwortung des KUNDEN, geeignete Sicherheitsvorkehrungen zu treffen, wie Firewalls, Webanwendungs-Firewalls (WAF) und andere Schutzmaßnahmen, sowie die entsprechenden Filterregeln zu definieren, um den Zugriff auf seine Plattform gemäß seiner Sicherheitsrichtlinie zu sichern.

Der Anbieter warnt den Kunden, dass eine anomale Nutzung seiner Administrationskonsole, insbesondere bei Überlastung seiner Befehl-APIs (hammering),
automatische Sicherheitsmaßnahmen auslösen kann, die den Zugriff auf die Befehl-APIs oder auf bestimmte Dienste des Anbieters blockieren. Es sei darauf hingewiesen, dass diese Situation keine Dienstunverfügbarkeit darstellt, sondern eine Schutzmaßnahme der Infrastruktur des Anbieters ist; 
daher kann der Kunde dies nicht als Unverfügbarkeit in seine Berechnungen einbeziehen.

Darüber hinaus weist der Anbieter den Kunden darauf hin, dass perfekt identische Anfragen (Duplikate), die an seine APIs gesendet werden, auf eine Anfrage pro Sekunde (Throttling) begrenzt sind.
Wenn der Kunde identische Anfragen mit einer höheren Frequenz einreicht, sollte deren Ablehnung nicht als Dienstunverfügbarkeit interpretiert werden.

#### 8.1.3. Zuverlässige Backup-Infrastruktur

Der Anbieter stellt dem KUNDEN eine integrierte, dedizierte und verwaltete Backup-Plattform zur Verfügung, die dem Schutz der Daten seiner RedHat Openshift-Umgebungen dient.
Der Anbieter stellt sicher, dass diese integrierte Backup-Plattform in betriebsfähigem und sicherem Zustand gehalten wird.
Unabhängig von der Anzahl der vom KUNDEN abonnierten Verfügbarkeitszonen garantiert der Anbieter, dass die Backup-Plattform des
KUNDEN außerhalb der Verfügbarkeitszone der gesicherten Workloads liegt.

Der Backup-Dienst beschränkt sich auf die Sicherung von virtuellen Maschinen und topologischen Konfigurationen der IaaS-Umgebung der SecNumCloud-Tenants des KUNDEN.
Die Entwicklung und Umsetzung einer geeigneten Backup-Richtlinie durch den KUNDEN hängt von der Abonnierung bestimmter Leistungseinheiten ab.
Es liegt daher in der Verantwortung des KUNDEN, sicherzustellen, dass die beim Anbieter verfügbaren technischen Ressourcen zur Umsetzung seiner Backup-Richtlinie zur Verfügung stehen,
oder diese an die verfügbaren Mittel anzupassen.

Der Anbieter verpflichtet sich, den KUNDEN über Kapazitätsbeschränkungen zu informieren und Beratungsunterstützung zur Optimierung der Ressourcen bereitzustellen.
Die Verpflichtungen des Anbieters beschränken sich auf die Umsetzung der vom KUNDEN geäußerten Anforderungen hinsichtlich der Backup-Richtlinie, im Rahmen der abonnierten Ressourcen.

#### 8.1.4. Implementierung von Business-Continuity- oder Disaster-Recovery-Lösungen

Der Anbieter stellt dem KUNDEN alle technischen Lösungen zur Verfügung, die erforderlich sind, um eine optimale Verteilung seiner Ressourcen
über verschiedene Verfügbarkeitszonen hinweg sicherzustellen. Es liegt in der Verantwortung des KUNDEN, diese Ressourcenverteilung effektiv zu verwalten,
wobei er die vom Anbieter für diesen Zweck zur Verfügung stehenden Werkzeuge nutzen kann.

Insbesondere müssen die auf der RedHat OpenShift-Plattform bereitgestellten Anwendungen die vom Anbieter angebotenen Redundanzmechanismen unterstützen, um von den damit verbundenen Business-Continuity- oder Disaster-Recovery-Lösungen zu profitieren.

## 9. Verpflichtungen und Service Level Agreements

Der Anbieter verpflichtet sich, eine kontinuierliche Überwachung der Leistung und der sicheren Integrität seiner
Plattformen und Dienste zu gewährleisten und so ihren optimalen Betrieb sicherzustellen.

Die Nichtverfügbarkeit eines Dienstes, der einem Leistungsindikator unterliegt, wird ab dem Zeitpunkt anerkannt, an dem sie vom Überwachungssystem des Anbieters identifiziert wird,
oder nach einer Benachrichtigung durch einen Benutzer des KUNDEN. Der Beginn der Nichtverfügbarkeit wird zum frühesten dieser beiden Ereignisse festgelegt,
um eine präzise und faire Zählung der Nichtverfügbarkeitszeit zu garantieren.

Das Ende der Nichtverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, bestätigt entweder durch die Überwachungswerkzeuge des Anbieters,
entweder durch eine Benutzer-Rückmeldung, was somit eine effektive Wiederaufnahme der Operationen und eine genaue Messung der Unterbrechungsdauer gewährleistet.

### 9.1. Verfügbarkeitsverpflichtungen für die RedHat OpenShift-Plattform

Der Anbieter verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau zu gewährleisten, das den für jede spezifizierte Periode definierten Standards entspricht.
Die Service Level Agreements (SLAs) gelten unter der Voraussetzung, dass der KUNDE seine Systeme in mind. zwei der in der betreffenden Region vorhandenen Verfügbarkeitszonen implementiert.

Sollte der KUNDE diese Bedingungen nicht einhalten, wird er unfähig sein, die Anwendung der betreffenden SLAs zu beanspruchen,
die speziell durch ein Sternchen (*) gekennzeichnet sind. Der Zugang zu den SLAs erfolgt über die KUNDEN-Schnittstelle. **Die Messungen werden monatlich berechnet**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Verfügbarkeit der RedHat OpenShift-Plattform: garantierte Verfügbarkeit von 99,9 %, berechnet auf Basis 24h/24, 7j/7.

_**Bemerkungen**_ : 

- *Als Reaktion auf einen Distributed Denial of Service (DDoS)-Angriff behält sich der Anbieter das Recht vor, seine Internet-Routing-Konfiguration anzupassen,
um die Folgen dieses Angriffs zu begrenzen und seine Infrastruktur zu schützen. Insbesondere wenn eine IP-Adresse des KUNDEN Ziel des Angriffs ist, kann der Anbieter die Blackholing-Technik
über die BGP-Community anwenden, um den gesamten Traffic zur betroffenen IP-Adresse bei seinen Anbietern im Vorfeld zu blockieren, mit dem Ziel, die Ressourcen des KUNDEN sowie die anderer Kunden
und die Infrastruktur des Anbieters zu schützen. Der Anbieter ermutigt den KUNDEN nachdrücklich, ähnliche Maßnahmen zu ergreifen, z.B. durch Nutzung von verfügbaren Firewalls für Webanwendungen
und sorgfältige Konfiguration seiner Sicherheitsgruppen über die Befehl-API.*

- *Der Anbieter betont die Notwendigkeit für den KUNDEN, den Datenfluss zu minimieren, indem insbesondere die Verwaltungsschnittstellen **SSH** (TCP Port 22) und **RDP** (TCP Port 3389) nicht allgemein im Internet (Subnetz 0.0.0.0/0) sowie interne Protokolle wie **SMB** (TCP/UDP Port 445) oder **NFS** (TCP/UDP Port 2049) zugänglich gemacht werden.*

## 10. Anwendbares Modell der geteilten Verantwortlichkeiten

### 10.1. Verantwortung und Pflichten des Anbieters

Der Anbieter verpflichtet sich, dem KUNDEN Benutzeroberflächen in französischer und englischer Sprache zur Verfügung zu stellen und somit den Zugriff und die Verwaltung der bereitgestellten Dienste zu erleichtern.
Der KUNDE wiederum verpflichtet sich, die geltenden gesetzlichen und regulatorischen Anforderungen in Bezug auf die Daten, die er dem Anbieter zur Verarbeitung anvertraut, einzuhalten.

Im Falle der Übermittlung von Daten, die speziellen rechtlichen Anforderungen unterliegen, wird der Anbieter mit dem KUNDEN zusammenarbeiten, um
die erforderlichen Sicherheitsmaßnahmen zu identifizieren und umzusetzen, in Übereinstimmung mit den Pflichten des Anbieters und im Rahmen der Dienstleistungserbringung.

Der Anbieter verpflichtet sich auch, die spezifischen Bedürfnisse, die sich aus den Tätigkeitsbereichen des KUNDEN ergeben, zu prüfen und zu berücksichtigen,
unter Beachtung der Grenzen seiner Verantwortung, um ein angemessenes Sicherheitsniveau für die verarbeiteten Informationen zu gewährleisten.

Falls ein Projekt potenzielle Auswirkungen auf die Sicherheit des angebotenen Dienstes haben könnte, verpflichtet sich der Anbieter, den KUNDEN über die potenziellen Auswirkungen zu informieren,
die vorgesehenen Korrekturmaßnahmen sowie die verbleibenden Risiken darzulegen und vollständige Transparenz zu gewährleisten.

Der Anbieter garantiert, dass er die Daten des KUNDEN nicht für Testzwecke ohne vorherige und ausdrückliche Zustimmung des KUNDEN verwenden wird
und verpflichtet sich, diese Daten während ihrer Verarbeitung zu anonymisieren und ihre Vertraulichkeit zu schützen.

Im Falle eines Wechsels des Unterauftragnehmers für das Hosting wird der Anbieter den KUNDEN im Voraus informieren und sicherstellen, dass dieser Übergang sich nicht negativ auf den bereitgestellten Dienst auswirkt.

Auf Anfrage des KUNDEN wird der Anbieter Zugang zu seiner internen Regelung, seiner Ethik-Charta und den Sanktionen bei Nichteinhaltung derselben gewähren.
politique de sécurité, aux événements le concernant, aux procédures relatives au service et aux exigences spécifiques de sécurité.

### 10.2. Haftungsbeschränkung des Anbieters

Die Struktur der geteilten Verantwortung reduziert effektiv den Umfang der Eingriffe des Anbieters auf Aspekte, die mit der Bereitstellung einer funktionalen RedHat OpenShift-Plattform verbunden sind, einschließlich:

- Verwaltung der IaaS-Infrastruktur, die die RedHat OpenShift-Plattform unterstützt und bereitstellt,
- Verwaltung der Systeme, die für den ordnungsgemäßen Betrieb der Plattform erforderlich sind,
- Aufrechterhaltung der Sicherheitsbedingungen,
- Aktualisierung der RedHat OpenShift-Plattform,
- Sicherung der wesentlichen Konfigurationsdaten dieser Plattform, mit Ausnahme der Daten und Anwendungen des KUNDEN, die in dessen Verantwortungsbereich fallen.

Sie schließt insbesondere, aber nicht ausschließlich, Folgendes aus:

- Die Aktualisierung der Betriebssysteme und Software, die vom KUNDEN in seinen OpenShift-Umgebungen in seinen gemieteten Räumen installiert wurde,
- Die Sicherheit der Programme, Software und Anwendungen, die vom KUNDEN in der OpenShift-Umgebung installiert wurden,
- Die Sicherung von Anwendungsdaten,
- Die Konfiguration der Sicherungsrichtlinien.

### 10.3. Zugriffsbegrenzung

Im Rahmen dieses Dienstleistungsvertrags ist es dem Anbieter formell untersagt, ohne vorherige Genehmigung auf die dem KUNDEN gehörenden Tenants zuzugreifen.
Es liegt in der Verantwortung des KUNDEN, dem Personal des Anbieters die erforderlichen Zugänge je nach den spezifischen Anforderungen des Hostings und gegebenenfalls der professionellen Unterstützungsdienste zu gewähren, falls diese Option vom KUNDEN gewählt wurde.

Der KUNDE erkennt an, dass diese Zugänge ausschließlich für die Zwecke der vereinbarten Dienstleistungen gewährt werden und somit eine sichere und vertragskonforme Verwaltung gewährleisten.

Der Fernzugriff durch Dritte, die an den Dienstleistungen des Anbieters beteiligt sind, ist streng verboten. Sollte eine spezifische technische Anforderung einen solchen Zugriff erforderlich machen, darf dieser erst nach klarer Benachrichtigung des KUNDEN, detaillierter Begründung und schriftlicher Zustimmung des KUNDEN erfolgen.

Diese Maßnahme garantiert die Kontrolle und Sicherheit der Daten des KUNDEN, indem sichergestellt wird, dass jede Ausnahme von der Regel ordnungsgemäß genehmigt und dokumentiert wird.

## 11. Datenlöschung am Vertragsende

Nach Ablauf des Vertrags, sei es durch Fristablauf oder aus sonstigen Gründen, verpflichtet sich der Anbieter zur sicheren Löschung aller Daten des KUNDEN, einschließlich der technischen Daten. Der Anbieter wird dem KUNDEN eine formale Benachrichtigung unter Einhaltung einer Frist von einundzwanzig (21) Kalendertagen zukommen lassen. Die Daten des KUNDEN werden dann innerhalb von maximal dreißig (30) Tagen nach dieser Benachrichtigung gelöscht.

Um diese Löschung zu bestätigen, wird der Anbieter dem Kunden ein Zertifikat ausstellen, das die Datenlöschung bestätigt.

## 12. Anwendbares Recht

Das auf diese Dienstleistungsvereinbarung anwendbare Recht ist das französische Recht.

Im Falle der Inanspruchnahme eines Dritten durch den Anbieter im Rahmen der dem KUNDEN erbrachten Dienstleistungen, einschließlich eines Unterauftragnehmers, dessen Hauptsitz, zentrale Verwaltung oder Hauptgeschäftsstelle sich in einem Staat befindet, der kein Mitglied der Europäischen Union ist, oder der Eigentum oder unter Kontrolle einer in einem Nicht-EU-Staat ansässigen Gesellschaft steht, verpflichtet sich der Anbieter sicherzustellen, dass dieser Dritte keinen Zugriff auf die vom Dienstleister verarbeiteten Daten hat.

Es ist zu beachten, dass die betroffenen Daten diejenigen sind, die dem Anbieter vom KUNDEN anvertraut wurden, sowie alle technischen Daten wie die Identitäten der Begünstigten und Administratoren der technischen Infrastruktur, die von den Netzwerken verarbeiteten Daten, die Protokolle der technischen Infrastruktur, das Verzeichnis, die Zertifikate, die Zugangskonfiguration usw., die Informationen über den KUNDEN enthalten.

Zur Klarstellung wird die Begriffskontrolle im Sinne von Artikel L233-3, II des Handelsgesetzbuchs definiert.