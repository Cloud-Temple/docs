---
title: PaaS-Dienstleistungsvereinbarung
---

**Inhaltsverzeichnis**

- [1. Rahmen](#1-rahmen)
- [2. Akronyme](#2-akronyme)
- [3. Glossar](#3-glossar)
- [4. Gegenstand der PaaS-Dienstleistungsvereinbarung des Anbieters](#4-gegenstand-der-paas-dienstleistungsvereinbarung-des-anbieters)
- [5. Entwicklung der PaaS-Dienstleistungsvereinbarung](#5-entwicklung-der-paas-dienstleistungsvereinbarung)
- [6. Audit](#6-audit)
- [7. Dienstbeschreibung](#7-dienstbeschreibung)
- [8. Umsetzung des Dienstes](#8-umsetzung-des-dienstes)
  - [8.1. Beschreibung der technischen Komponenten](#81-beschreibung-der-technischen-komponenten)
    - [8.1.1. REDHAT OpenShift Serviceplattform](#811-redhat-openshift-serviceplattform)
    - [8.1.2. Infrastruktursoftware zur Verwaltung der Redhat Openshift-Plattform](#812-infrastruktursoftware-zur-verwaltung-der-redhat-openshift-plattform)
    - [8.1.3. Zugehörige Backup-Infrastruktur](#813-zugehörige-backup-infrastruktur)
    - [8.1.4. Umsetzung von Lösungen zur Geschäftsfortführung oder Geschäftskontinuität](#814-umsetzung-von-lösungen-zur-geschäftsfortführung-oder-geschäftskontinuität)
- [9. Verpflichtungen und Service Level](#9-verpflichtungen-und-service-level)
  - [9.1. Verfügbarkeitsgarantien der RedHat OpenShift-Plattform](#91-verfügbarkeitsgarantien-der-redhat-openshift-plattform)
- [10. Anwendbares Modell der geteilten Verantwortlichkeiten](#10-anwendbares-modell-der-geteilten-verantwortlichkeiten)
  - [10.1. Verantwortung und Verpflichtungen des Anbieters](#101-verantwortung-und-verpflichtungen-des-anbieters)
  - [10.2. Haftungsbeschränkung des Anbieters](#102-haftungsbeschränkung-des-anbieters)
  - [10.3. Zugriffsbeschränkung](#103-zugriffsbeschränkung)
- [11. Datenlöschung bei Vertragsende](#11-datenlöschung-bei-vertragsende)
- [12. Anwendbares Recht](#12-anwendbares-recht)


## 1. Rahmen

|           |                        |
| --------- | ---------------------- |
| Referenz  | CT.AM.JUR.ANX.PAAS 2.0 |
| Datum     | 13. März 2024          |

## 2. Akronyme

| Akronym     | Beschreibung                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Beratungsgremium für Änderungen                                                    |
| CMDB        | Configuration Management Database – Konfigurationsmanagement-Datenbank                                     |
| COPIL       | Steuerungskomitee                                                                                         |
| COSTRAT     | Strategisches Komitee                                                                                     |
| DB          | Database (Datenbank)                                                                                      |
| DRP         | Disaster Recovery Plan (Notfallwiederherstellungsplan)                                                     |
| GTI         | Interventionszeit-Garantie                                                                                |
| GTR         | Lösungszeit-Garantie                                                                                      |
| GTE         | Eskalationszeit-Garantie                                                                                  |
| HYPERVISEUR | Betriebssystem zur Ausführung von VMs auf einer Recheneinheit                                              |
| ITIL        | Information Technology Infrastructure Library - Best Practices für das IT-Servicemanagement               |
| IAAS        | Infrastructure as a Service                                                                               |
| MCO         | Betriebssicherstellung                                                                                    |
| MOA         | Auftraggeber                                                                                              |
| MOE         | Auftragnehmer                                                                                            |
| OS          | Betriebssystem                                                                                            |
| PAQ         | Qualitätssicherungsplan                                                                                   |
| PAAS        | Platform as a Service                                                                                     |
| SDM         | Service Delivery Manager                                                                                  |
| RFC         | Request For Change – Änderungsanfrage                                                                     |
| RGPD        | Datenschutz-Grundverordnung                                                                               |
| RPO         | Recovery Point Objective – Wiederherstellungspunktziel                                                     |
| RTO         | Recovery Time Objective – Wiederherstellungszeitziel                                                       |
| SLA         | Service Level Agreement – Dienstleistungsvereinbarung                                                      |
| UO          | Leistungseinheit                                                                                          |
| VABF        | Betriebserlaubnis                                                                                         |
| VABE        | Betriebsbereitschaftserklärung                                                                            |
| VM          | Virtual Machine (Virtuelle Maschine)                                                                      |
| VSR         | Regelmäßiger Serviceabnahme                                                                               |
| SNC         | SecNumCloud                                                                                               |

## 3. Glossar

Die im vorliegenden Dokument verwendeten Begriffe werden gemäß den folgenden Definitionen interpretiert:

| Begriff                                            | Definition                                                                                                                                                                                                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                    | Die Bezeichnung "Secure Temple" bezieht sich auf den IaaS-Dienst (Infrastructure as a Service), qualifiziert als SecNumCloud, der von der Firma Cloud Temple angeboten wird.                                                                                                            |
| Region                                             | Eine "Region" im Kontext des Cloud Computing bezeichnet ein geografisch abgegrenztes Set von Verfügbarkeitszonen, <br/>das Netzwerk-, Rechen- und Speicherdienste bereitstellt, um Latenz, Leistung <br/>und lokale gesetzliche Anforderungen zu optimieren.                         |
| Verfügbarkeitszone (AZ) (Availability Zone)        | Ein spezifischer und isolierter Bereich der Cloud-Computing-Infrastruktur, der entwickelt wurde, um hohe Verfügbarkeit und Resilienz der Dienste durch geografische Verteilung der Ressourcen sicherzustellen.                                                                          |
| Mandant (Tenant)                                   | Eine isolierte Instanz, die für einen Benutzer oder eine Benutzergruppe reserviert ist, die gemeinsame Infrastruktur nutzt und dennoch Unabhängigkeit sowie Sicherheit der Daten und Anwendungen gewährleistet.                                                                        |

| Begriff                   | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zwischenfall (Incident)  | Ein "Zwischenfall" bezeichnet jedes ungeplante Ereignis, das den normalen Betrieb eines Systems stört oder die Sicherheit von Daten und Infrastrukturen gefährdet.                                                                                                                                                                                                                                                                            |
| Problème                 | Ein "Problem" ist eine grundlegende Ursache für ein oder mehrere Vorfälle, die identifiziert oder vermutet wird und eine Analyse und Lösung erfordert, um deren Wiederauftreten zu verhindern.                                                                                                                                                                                                                                     |
| Changement               | Eine "Änderung" bezeichnet jede Modifikation der IT-Umgebung, die darauf abzielt, Systeme, Prozesse oder Dienste zu verbessern oder zu korrigieren.                                                                                                                                                                                                                                                                                          |
| changement standard      | Eine "Standardänderung" ist eine vorab genehmigte, risikoarme, wiederholte Modifikation, die einem etablierten Verfahren in der IT-Umgebung folgt.                                                                                                                                                                                                                                                                                           |
| Mise en production       | Verwaltungsaktion(en) zur Umsetzung der Änderung, wenn diese genehmigt ist <br/>(die Änderung im Sinne von ITIL bezieht sich nur auf das Change Management und nicht auf dessen Umsetzung/Verwirklichung).                                                                                                                                                                                                                                  |
| Demande de service       | Anfrage für eine Entwicklung, die einem Verfahren unterliegt, dessen Verwirklichung: <br/> i) die CMDB nicht ändert,<br/>ii) die Betriebsweise, Kosten und Risiken im Voraus bekannt und akzeptiert sind und keine spezifischen Rückabwicklungsmodalitäten erfordern<br/> iii) die Durchführung einem Service Level Agreement unterliegt und in den Vertragsgebühren enthalten ist, wenn sie während Geschäftszeiten durchgeführt wird.                       |
| Element de configuration | Ein "Konfigurationselement" ist eine identifizierbare Komponente des Informationssystems, wie z.B. eine Software, eine Hardware oder ein Dokument,<br/> das im Rahmen des IT-Service-Managements verwaltet wird.                                                                                                                                                                                                                              |
| Service                  | Ein "Service" ist ein Mittel, um dem KUNDEN Wert zu bieten, indem die gewünschten Ergebnisse erleichtert werden, ohne dass dieser <br/>die spezifischen Kosten und Risiken verwalten muss.                                                                                                                                                                                                                                                    |
| Evenement                | Ein "Ereignis" ist jedes nachweisbare oder identifizierbare Vorkommnis in einem IT- oder Netzwerksystem, das für das IT-Servicemanagement von Bedeutung sein kann.                                                                                                                                                                                                                                                                           |
| Sinistre                 | Ein "Schaden" bezeichnet ein unerwartetes schädliches Ereignis, das für den KUNDEN materielle, finanzielle oder Datenverluste zur Folge hat.                                                                                                                                                                                                                                                                                                   |
| Convention de service    | Dieses Dokument, das im Rahmen eines speziellen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (AGB) erstellt wird und den Anforderungen des SecNumCloud-Referenzrahmens entspricht.                                                                                                                                                                                                                                        |
| Disponibilité            | Fähigkeit, die Verfügbarkeit und Aufrechterhaltung der optimalen Leistung eines Services in Übereinstimmung mit den in den Service Level Agreements (SLA) definierten Kriterien und Verpflichtungen zu gewährleisten.                                                                                                                                                                                                                           |
| Supervision              | Überwachung eines Informationssystems oder eines Services, die das Sammeln verschiedener Daten wie Messungen und Alarme umfasst. <br/>Diese Tätigkeit beschränkt sich auf die Beobachtung und Überwachung, ohne direkt auf die überwachten Elemente einzugreifen, was der Verwaltung vorbehalten ist.                                                                                                                                        |

## 4. Objet de la convention de service PaaS du Prestataire

Der vorliegende Servicevertrag legt die Bedingungen fest, unter denen der Dienstleister dem KUNDEN eine Infrastruktur bereitstellt, 
die den Spezifikationen des Angebots „Platform as a Service – PaaS“ entspricht und ordnungsgemäß SecNumCloud-zertifiziert ist.

Zweck des Servicevertrags:

1. Festlegung der vom KUNDEN erwarteten Leistungsanforderungen in Bezug auf Funktionalität und Zuverlässigkeit der Infrastruktur.
2. Darstellung der Verpflichtungen des Dienstleisters zur Erfüllung der vereinbarten Service Levels.
3. Identifizierung der spezifisch auf die vorgeschlagene Infrastruktur anwendbaren regulatorischen Standards.
4. Gewährleistung von Einheitlichkeit und Integrität bei der Bewertung der erbrachten Servicequalität.
5. Sicherstellung der Exzellenz der erbrachten Dienstleistungen, bewertet anhand quantitativer Leistungsindikatoren.

Es wird festgelegt, dass der Vertrag im Falle eines Entzugs der SecNumCloud-Zertifizierung des Dienstleisters vom KUNDEN ohne Strafzahlung von Rechts wegen gekündigt werden kann.
In einem solchen Fall verpflichtet sich der Dienstleister, den KUNDEN durch eine offizielle Mitteilung per Einschreiben mit Rückschein über diesen Entzug zu informieren.

Es sei darauf hingewiesen, dass eine Änderung oder Anpassung der SecNumCloud-Zertifizierung nicht als Widerruf der ursprünglichen Zertifizierung ausgelegt wird.

## 5. Evolution de la convention de service PaaS

Änderungen oder Ergänzungen dieses Servicevertrags resultieren ausschließlich aus den Anträgen der hierfür benannten Governance-Organe. 
Diese Vorschläge werden im strategischen Ausschuss geprüft, der als einzige Instanz befugt ist, die Aspekte zu bestimmen, die eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede nach der Validierung vorgenommene Änderung, die die ursprünglich festgelegten finanziellen Bedingungen verändert, die Erstellung und Unterzeichnung eines Zusatzes zum laufenden Vertrag erfordert.

Faktoren, die eine Überarbeitung dieses Vertrags verursachen können, sind unter anderem:

- Anpassung der vom Dienstleister orchestrierten PaaS-Plattform.
- Anpassungen der vom Dienstleister bereitgestellten Dienste.
- Variationen der eingegangenen Verpflichtungen und der anwendbaren Sanktionen.
- Organisatorische Neustrukturierungen beim KUNDEN oder beim Dienstleister.
- Erweiterung oder Einschränkung des Umfangs der vom KUNDEN abonnierten Dienstleistungen.

Die Verwaltung der Versionen und Überarbeitungen des Vertrags ist im Vorwort des Dokuments zur besseren Nachverfolgung festgehalten.

## 6. Audit 

Der Dienstleister verpflichtet sich, dem KUNDEN oder einem vom KUNDEN benannten Drittauditor den Zugang zu allen notwendigen Dokumenten zur Bescheinigung der vollständigen Einhaltung der Verpflichtungen gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) zu ermöglichen und damit die Durchführung von Audits zu erleichtern.

**Der Dienstleister verpflichtet sich insbesondere, dem KUNDEN die Liste aller Dritten, die Zugang zu den Daten haben können, zur Verfügung zu stellen und ihn über jede Änderung von Subunternehmern zu informieren.**

Durch die Annahme dieses Servicevertrags erteilt der KUNDE seine ausdrückliche Erlaubnis an:

1. __Die Nationale Agentur für die Sicherheit der Informationssysteme (ANSSI)__ sowie die zuständige Zertifizierungsstelle, um die Konformität des Dienstes und seines Informationssystems mit den im SecNumCloud-Referenzrahmen festgelegten Standards zu überprüfen.
2. __Einen externen Auditanbieter für Informationssicherheit__, der vom Dienstleister ordnungsgemäß qualifiziert und ausdrücklich benannt ist, um Sicherheitstests für den vom Dienstleister bereitgestellten Dienst durchzuführen.

## 7. Description du service

Das vom Dienstleister angebotene Servicepaket umfasst die Bereitstellung der folgenden Dienstleistungen, 
die sich an dem im SecNumCloud-Referenzrahmen festgelegten Prinzip der geteilten Verantwortung orientieren:

- Bereitstellung einer vom Dienstleister verwalteten Container-Verwaltungsplattform Redhat Openshift.

Es wird davon ausgegangen, dass der Dienstleister seine Expertise einsetzt, um die Dienstleistungen nach den besten professionellen Praktiken zu erbringen,
conformément à leurs Spécifications et en respectant les normes de sa certification ISO/IEC 27001 ainsi que les directives du Référentiel SecNumCloud.

## 8. Mise en œuvre du service

Il est précisé que toutes les opérations et tous les composants physiques impliqués dans la fourniture du service qualifié, dont la présente convention fait l’objet,
sont situés dans l’Union Européenne. Cela inclut notamment le support, la supervision opérationnelle et la supervision de sécurité (SOC).

### 8.1. Description des composants techniques

Les service PaaS (Platform as a Service) englobent l'intégralité des composants et services requis pour son fonctionnement optimal dans le respect de la qualification SecNumCloud.

À cet égard, leur performance et fiabilité sont intrinsèquement liées aux composants techniques et aux services de **l'infrastructure IaaS** du Prestataire, comme spécifié dans le document [Convention de Service IaaS](../iaas/sla_iaas.md) du Prestataire.

#### 8.1.1. Plateforme de service REDHAT OpenShift

Der Service umfasst die Bereitstellung innerhalb einer Region, über 3 Verfügbarkeitszonen,

#### 8.1.2. Infrastruktur-Software zur Steuerung der Plattform Redhat Openshift

Der Anbieter stellt dem KUNDEN die Verwaltungskonsole und die API zur Verfügung, die für den Betrieb seiner PaaS-Umgebungen RedHat OpenShift erforderlich sind.
Er verpflichtet sich auch, sie in optimalem Betriebszustand zu halten und die Sicherheit kontinuierlich zu gewährleisten.

Im spezifischen Rahmen des bereitgestellten Dienstes stellt der Anbieter dem KUNDEN alle Schnittstellen und APIs der Plattform RedHat OpenShift innerhalb des ausgewählten Tenants zur Verfügung. Es liegt in der Verantwortung des KUNDEN, angemessene Sicherheitsvorkehrungen zu treffen, wie z. B. Firewalls, Web Application Firewalls (WAF) und andere Schutzmaßnahmen, sowie die zugehörigen Filterregeln festzulegen, um den Zugriff auf seine Plattform gemäß seiner Sicherheitsrichtlinie abzusichern.

Der Anbieter weist den Kunden darauf hin, dass eine anormale Nutzung seiner Verwaltungskonsole, insbesondere bei einer Überlastung der Befehls-APIs (Hammering),
automatische Sicherheitsmaßnahmen auslösen kann, die den Zugriff auf die Befehls-APIs oder bestimmte Dienste des Anbieters sperren. Es sei darauf hingewiesen, dass diese Situation keine Dienstunverfügbarkeit darstellt, sondern eine Schutzmaßnahme für die Infrastruktur des Anbieters;
daher kann der Kunde dies nicht als Verfügbarkeit in seinen Berechnungen betrachten.

Darüber hinaus weist der Anbieter den Kunden darauf hin, dass identische (duplizierte) Anfragen an seine APIs auf eine pro Sekunde beschränkt sind (Throttling).
Wenn der Kunde identische Anfragen häufiger stellt, sollte deren Ablehnung nicht als Dienstunverfügbarkeit interpretiert werden.

#### 8.1.3. Zugehörige Backup-Infrastruktur

Der Anbieter stellt dem KUNDEN eine integrierte, dedizierte und verwaltete Backup-Plattform zur Verfügung, die dem Schutz der Daten seiner RedHat Openshift-Umgebungen dient.
Der Anbieter sorgt für den operativen und sicherheitstechnischen Zustand dieser integrierten Backup-Plattform.
Unabhängig von der Anzahl der vom KUNDEN abonnierten Verfügbarkeitszonen garantiert der Anbieter, dass sich die Backup-Plattform des KUNDEN außerhalb der Verfügbarkeitszone der gesicherten Arbeitslasten befindet.

Die Backup-Dienstleistung beschränkt sich auf das Backup von virtuellen Maschinen und Konfigurationen der Topologie der IaaS-Umgebung der Tenants SecNumCloud des KUNDEN.
Die Erstellung und Umsetzung einer angemessenen Backup-Strategie durch den KUNDEN hängt vom Abonnement spezieller Leistungseinheiten ab.
Daher liegt es in der Verantwortung des KUNDEN, sicherzustellen, dass die erforderlichen technischen Ressourcen vom Anbieter verfügbar sind, um seine Backup-Strategie umzusetzen oder diese entsprechend den verfügbaren Mitteln anzupassen.

Der Anbieter verpflichtet sich, den KUNDEN über Kapazitätsbeschränkungen zu informieren und beratende Unterstützung zur Optimierung der Ressourcen zu bieten.
Die Verpflichtungen des Anbieters beschränken sich auf die Umsetzung der vom KUNDEN geäußerten Anforderungen bezüglich der Backup-Strategie im Rahmen der abonnierten Ressourcen.

#### 8.1.4. Umsetzung von Lösungen zur Geschäftskontinuität oder Notfallwiederherstellung

Der Anbieter stellt dem KUNDEN alle erforderlichen technischen Lösungen zur Verfügung, um eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen zu gewährleisten. Es liegt in der Verantwortung des KUNDEN, diese Ressourcenverwaltung effizient zu handhaben, wofür er die vom Anbieter verfügbaren Werkzeuge nutzen kann.

Insbesondere müssen die auf der Plattform RedHat OpenShift eingesetzten Anwendungen die vom Anbieter angebotenen Redundanzmechanismen unterstützen, um die zugehörigen Geschäftskontinuitäts- oder Notfallwiederherstellungslösungen nutzen zu können.

## 9. Engagements und Service Levels

Der Anbieter verpflichtet sich, eine kontinuierliche Überwachung der Leistung und der Sicherheit seiner Plattformen und Dienste zu gewährleisten, um deren optimalen Betrieb sicherzustellen.

Die Verfügbarkeit eines Dienstes, für den ein Leistungsindikator vorgesehen ist, wird mit seiner Identifizierung durch das Überwachungssystem des Anbieters anerkannt,
oder nach einer Benachrichtigung durch einen Benutzer des KUNDEN. Der Beginn der Unverfügbarkeit wird auf den frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt,
um eine genaue und faire Berechnung der Unverfügbarkeitszeit sicherzustellen.

Das Ende der Unverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, entweder durch die Überwachungswerkzeuge des Anbieters oder durch eine Rückmeldung des Benutzers, was eine effektive Wiederaufnahme des Betriebs und eine zuverlässige Messung der Unterbrechungsdauer gewährleistet.

### 9.1. Verfügbarkeitszusagen für die Plattform RedHat OpenShift

Der Anbieter verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau zu gewährleisten, das den für jede angegebene Periode festgelegten Standards entspricht.
Die Service-Level-Agreements (SLAs) gelten vorbehaltlich, dass der KUNDE seine Systeme über mindestens zwei der in der betreffenden Region vorhandenen Verfügbarkeitszonen implementiert.

Wenn der KUNDE diese Bedingungen nicht erfüllt, kann er die Anwendung der betreffenden SLAs nicht beanspruchen,
die durch ein Sternchen (*) gekennzeichnet sind. Der Zugriff auf die SLAs erfolgt über die KUNDENSCHNITTSTELLE. **Die Messungen gelten als monatlich berechnet**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Verfügbarkeit der Plattform RedHat OpenShift: garantierte Verfügbarkeit von 99,9 %, berechnet auf Basis von 24h/24, 7j/7.

_**Anmerkungen**_ :

- *In Reaktion auf einen Distributed Denial of Service (DDoS)-Angriff behält sich der Anbieter das Recht vor, seine Internet-Routing-Konfiguration anzupassen,
um die Auswirkungen dieses Angriffs zu begrenzen und seine Infrastruktur zu schützen. Insbesondere, wenn eine IP-Adresse des KUNDEN angegriffen wird, kann der Anbieter die Technik des Blackholing über die BGP-Gemeinschaft nutzen, um den gesamten Verkehr zu der angegriffenen IP-Adresse bei seinen Lieferanten upstream zu blockieren, mit dem Ziel, die Ressourcen des KUNDEN sowie die anderer Kunden und die Infrastruktur des Anbieters zu schützen. Der Anbieter fordert den KUNDEN dringend auf, ähnliche Maßnahmen zu ergreifen, wie die Nutzung verfügbarer Webanwendungs-Firewall-Software und die sorgfältige Konfiguration seiner Sicherheitsgruppen über die Befehls-API.*

- *Der Anbieter betont die Notwendigkeit für den KUNDEN, die Öffnung von Strömen zu minimieren, insbesondere durch Vermeidung des Zugangs zu Verwaltungsports
wie **SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389) aus dem gesamten Internet (Subnetz 0.0.0.0/0), sowie interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049).*

## 10. Anwendbares Modell der geteilten Verantwortung

### 10.1. Verantwortung und Pflichten des Anbieters

Der Anbieter verpflichtet sich, dem KUNDEN Benutzeroberflächen in französischer und englischer Sprache zur Verfügung zu stellen, um den Zugang und die Verwaltung der bereitgestellten Dienste zu erleichtern.
Der KUNDE verpflichtet sich seinerseits, die geltenden gesetzlichen und regulatorischen Anforderungen bezüglich der vom Anbieter für die Bearbeitung überlassenen Daten einzuhalten.

Im Falle der Übermittlung von Daten, die spezifischen gesetzlichen Anforderungen unterliegen, wird der Anbieter mit dem KUNDEN zusammenarbeiten, um die erforderlichen Sicherheitsmaßnahmen zu identifizieren und umzusetzen,
gemäß den Verpflichtungen des Anbieters und im Rahmen der Dienstleistungserbringung.

Der Anbieter verpflichtet sich auch, die spezifischen Bedürfnisse der Geschäftsfelder des KUNDEN zu prüfen und zu berücksichtigen,
unter Berücksichtigung der Begrenzungen seiner Haftung, um ein angemessenes Sicherheitsniveau für die verarbeiteten Informationen zu gewährleisten.

Wenn ein Projekt die Sicherheit des angebotenen Dienstes beeinträchtigen könnte, verpflichtet sich der Anbieter, den KUNDEN über die potenziellen Auswirkungen, die vorgesehenen Korrekturmaßnahmen und die verbleibenden Risiken zu informieren, um vollständige Transparenz sicherzustellen.

Der Anbieter garantiert, dass er die Daten des KUNDEN nicht ohne vorherige ausdrückliche Zustimmung des KUNDEN zu Testzwecken verwenden wird
und verpflichtet sich, diese Daten während ihrer Verarbeitung zu anonymisieren und deren Vertraulichkeit zu schützen.

Im Falle eines Wechsels des Dienstleisters für die Hosting-Dienstleistungen wird der Anbieter den KUNDEN im Voraus informieren und sicherstellen, dass dieser Übergang den bereitgestellten Dienst nicht negativ beeinflusst.

Auf Anfrage des KUNDEN wird der Anbieter Zugang zu seinem internen Regelwerk, seinem Ethikkodex und den bei Nichteinhaltung geltenden Sanktionen gewähren.
politique de sécurité, aux événements le concernant, aux procédures relatives au service et aux exigences spécifiques de sécurité.

### 10.2. Haftungsbeschränkung des Anbieters

Die Struktur der geteilten Verantwortung reduziert die Ausdehnung des Eingreifens des Anbieters auf Aspekte, die mit der Bereitstellung einer funktionalen RedHat OpenShift-Plattform zusammenhängen, einschließlich:

- Verwaltung der IaaS-Infrastruktur, die die RedHat OpenShift-Plattform unterstützt und ihre Bereitstellung,
- Verwaltung der Systeme, die für den reibungslosen Betrieb der Plattform erforderlich sind,
- Aufrechterhaltung der Sicherheit,
- Aktualisierung der RedHat OpenShift-Plattform,
- Sicherung der wesentlichen Konfigurationsdaten dieser Plattform, mit Ausnahme der Daten und Anwendungen des KUNDEN, die in dessen Verantwortung fallen.

Sie schließt insbesondere, aber nicht ausschließlich, aus:

- Die Aktualisierung der Betriebssysteme und Software, die vom KUNDEN in seinen OpenShift-Umgebungen in seinen Mieträumen installiert wurden,
- Die Sicherheit der Programme, Software und Anwendungen, die vom KUNDEN in der OpenShift-Umgebung installiert wurden,
- Die Sicherung der Anwendungsdaten,
- Die Konfiguration der Sicherungspolitik.

### 10.3. Zugriffsbeschränkung

Im Rahmen dieser Dienstleistungsvereinbarung ist dem Anbieter der Zugriff auf vom KUNDEN verwaltete Tenants ohne vorherige Genehmigung strengstens untersagt.
Es liegt in der Verantwortung des KUNDEN, dem Personal des Anbieters die erforderlichen Zugänge gemäß den spezifischen Anforderungen des Hostings zu verschaffen und gegebenenfalls professionelle Supportleistungen, falls diese Option vom KUNDEN gewählt wurde.

Der KUNDE erkennt an, dass diese Zugänge ausschließlich für die vereinbarten Dienstleistungen gewährt werden, und gewährleistet so ein sicheres und den vertraglichen Bestimmungen entsprechendes Management.

Der Fernzugriff durch Dritte, die in die Dienstleistung des Anbieters eingebunden sind, ist strengstens untersagt. Sollte eine technische Notwendigkeit einen solchen Zugriff erfordern, so kann dieser nur eingerichtet werden, nachdem der KUNDE klar benachrichtigt, eine detaillierte Begründung erhalten und seine schriftliche Zustimmung erteilt hat.

Diese Maßnahme gewährleistet die Kontrolle und Sicherheit der Daten des KUNDEN und stellt sicher, dass jede Ausnahme ordnungsgemäß genehmigt und dokumentiert wird.

## 11. Datenlöschung bei Vertragsende

Nach Ablauf des Vertrags, sei es durch Ablauf oder aus einem anderen Grund, verpflichtet sich der Anbieter, die vollständige Datenlöschung des Kunden, einschließlich technischer Daten, auf sichere Weise durchzuführen. Der Anbieter wird dem KUNDEN eine formelle Vorankündigung unter Einhaltung einer Frist von einundzwanzig (21) Kalendertagen übermitteln. Die Daten des KUNDEN werden dann innerhalb eines maximalen Zeitraums von dreißig (30) Tagen nach dieser Benachrichtigung gelöscht.

Um diese Löschung zu bestätigen, wird der Anbieter dem Kunden ein Zertifikat über die Datenlöschung ausstellen.

## 12. Anwendbares Recht

Das anwendbare Recht für diese Dienstleistungsvereinbarung ist das französische Recht.

Im Fall, dass der Anbieter im Rahmen der vom KUNDEN bezogenen Dienstleistungen ein Drittunternehmen einsetzt, einschließlich eines Unterauftragnehmers, dessen Hauptsitz, zentrale Verwaltung oder Hauptgeschäftssitz sich in einem Nicht-EU-Mitgliedstaat befindet oder das Eigentum oder unter der Kontrolle eines Drittunternehmens steht, das außerhalb der Europäischen Union ansässig ist, verpflichtet sich der Anbieter sicherzustellen, dass dieses Drittunternehmen keinen Zugriff auf die vom Anbieter verarbeiteten Daten hat.

Es ist anzumerken, dass die betreffenden Daten diejenigen umfassen, die vom KUNDEN dem Anbieter anvertraut werden, sowie alle technischen Daten, wie die Identitäten der Nutznießer und Administratoren der technischen Infrastruktur, die von den Netzwerken verarbeiteten Daten, die Protokolle der technischen Infrastruktur, das Verzeichnis, die Zertifikate, die Zugangssteuerungseinstellungen usw., die Informationen über den KUNDEN enthalten.

Zur Klarstellung wird der Begriff der Kontrolle gemäß Artikel L233-3 II des französischen Handelsgesetzbuchs definiert.