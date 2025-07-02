---
title: Servicevereinbarung SecNumCloud PaaS
---

**Inhaltsverzeichnis**

- [1. Rahmen](#1-rahmen)
- [2. Abkürzungen](#2-abkuerzungen)
- [SNC           SecNumCloud](#snc-----------secnumcloud)
- [3. Glossar](#3-glossar)
- [4. Gegenstand der PaaS-Servicevereinbarung des Anbieters](#4-gegenstand-der-paas-servicevereinbarung-des-anbieters)
- [5. Entwicklung der PaaS-Servicevereinbarung](#5-entwicklung-der-paas-servicevereinbarung)
- [6. Audit](#6-audit)
- [7. Beschreibung des Dienstes](#7-beschreibung-des-dienstes)
- [8. Umsetzung des Dienstes](#8-umsetzung-des-dienstes)
  - [8.1. Beschreibung der technischen Komponenten](#81-beschreibung-der-technischen-komponenten)
    - [8.1.1. REDHAT OpenShift-Dienstplattform](#811-redhat-openshift-dienstplattform)
    - [8.1.2. Softwareinfrastruktur zur Steuerung der REDHAT OpenShift-Plattform](#812-softwareinfrastruktur-zur-steuerung-der-redhat-openshift-plattform)
    - [8.1.3. Dazugehörige Sicherungsinfrastruktur](#813-dazugehoerige-sicherungsinfrastruktur)
    - [8.1.4. Umsetzung von Wiederherstellungs- oder Kontinuitätslösungen](#814-umsetzung-von-wiederherstellungs-oder-kontinuitaetsloesungen)
- [9. Verpflichtungen und Dienstleistungslevel](#9-verpflichtungen-und-dienstleistungslevel)
  - [9.1. Verpflichtungen zur Verfügbarkeit der REDHAT OpenShift-Plattform](#91-verpflichtungen-zur-verfuegbarkeit-der-redhat-openshift-plattform)
- [10. Anwendbares Modell der geteilten Verantwortung](#10-anwendbares-modell-der-geteilten-verantwortung)
  - [10.1. Verantwortung und Pflichten des Anbieters](#101-verantwortung-und-pflichten-des-anbieters)
  - [10.2. Haftungsbeschränkung des Anbieters](#102-haftungsbeschrinkung-des-anbieters)
  - [10.3. Zugriffsbeschränkung](#103-zugriffsbeschrinkung)
- [11. Löschung der Daten am Ende des Vertrags](#11-loeschung-der-daten-am-ende-des-vertrags)
- [12. Geltendes Recht](#12-geltendes-recht)

## 1. Rahmen

  --------------------- -------------------------------------------------
  Referenz              CT.AM.JUR.ANX.PAAS 2.1

  Datum                 21. Januar 2025
  --------------------- -------------------------------------------------

## 2. Abkürzungen

  ------------------------------------------------------------------------------
  Abkürzung    Beschreibung
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Beratender Ausschuss für Änderungen

  CMDB          Configuration Management Database -- Konfigurationsverwaltungsdatenbank
                zur Verwaltung von Konfigurationen

  COPIL         Steuerungsausschuss

  COSTRAT       Strategischer Ausschuss

  DB            Database (Datenbank)

  DRP           Disaster Recovery Plan (Notfallwiederherstellungsplan)

  GTI           Garantie der Eingriffszeit

  GTR           Garantie der Lösungszeit

  GTE           Garantie der Eskalationszeit

  HYPERVISEUR   Betriebssystem, das die Ausführung von VMs auf einem Rechenblatt ermöglicht

  ITIL          Information Technology Infrastructure Library - Best Practices
                für die Verwaltung von Informationssystemen

  IAAS          Infrastructure as a Service

  MCO           Wartung in betriebsbereitem Zustand

  MOA           Projektverantwortung

  MOE           Projektumsetzung

  OS            Betriebssystem

  PAQ           Qualitätsicherungsplan

  PAAS          Platform as a Service

  SDM           Service-Lieferungsmanager

  RFC           Request For Change -- Änderungsantrag

  RGPD          Allgemeine Datenschutzverordnung (persönliche Daten)

  RPO           Recovery Point Objective -- Frische der wiederhergestellten Daten bei
                einem Schadensfall

  RTO           Recovery Time Objective -- Zeit bis zur Wiederherstellung des Dienstes bei
                einem Schadensfall

  SLA           Service Level Agreement -- Vereinbarung zu den Dienstleistungsleveln

  UO            Arbeitseinheit

  VABF          Prüfung der Funktionstüchtigkeit

  VABE          Prüfung der Nutzbarkeit

  VM            Virtual Machine (virtuelle Maschine)

  VSR           Regelmäßige Dienstprüfung

SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glossar

Die folgenden Ausdrücke, die im vorliegenden Dokument verwendet werden, werden gemäß den unten angegebenen Definitionen interpretiert:

  --------------------------------------------------------------------------------------------
  Ausdruck                       Definition
  -------------------------------- -----------------------------------------------------------
  \"Secure Temple\"                Bezeichnet den IaaS-Dienst SecNumCloud, der von der Gesellschaft Cloud Temple angeboten wird, wie in der auf der ANSSI-Website verfügbaren Bescheinigung definiert und im Anhang dieses Dienstvertrags beigefügt.

  Region                           Eine "Region" im Kontext des Cloud-Computings bezeichnet ein geografisch abgegrenztes Ensemble von Cloud-Verfügbarkeitszonen, die Dienste für Netzwerk, Berechnung und Speicher bereitstellen, um die Latenz, die Leistung und die regulatorische Konformität lokal zu optimieren.

  Zone                             Eine spezifische und isolierte Sektion der Cloud-Infrastruktur, die für die Sicherstellung der hohen Verfügbarkeit und Resilienz der Dienste durch eine geografische Verteilung der Ressourcen konzipiert ist.
  Verfügbarkeit (AZ) (Availability
  zone)                           

Mandant                          Eine isolierte Instanz, die einem Benutzer oder einer Gruppe von Benutzern vorbehalten ist, die eine gemeinsame Infrastruktur nutzen, während die Unabhängigkeit und Sicherheit der Daten und Anwendungen gewahrt bleibt.
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Ausdruck      Definition
  --------------- ---------------------------------------------------------
  Vorfall        Ein "Vorfall" bezeichnet jedes unerwartete Ereignis, das den normalen Betrieb eines Systems stört oder die Sicherheit der Daten bedroht.

  Problem         Ein "Problem" ist eine grundlegende Ursache eines oder mehrerer Vorfälle, die identifiziert oder vermutet wird und eine Analyse und Lösung erfordert, um eine Wiederholung zu verhindern.

  Änderung        Eine "Änderung" bezeichnet jede Hinzufügung, Änderung oder Löschung, die den Service beeinflusst, und wurde genehmigt, geplant oder unterstützt.

  Standardänderung Eine "Standardänderung" ist eine Änderung, die einer Prozedur unterliegt, deren Umsetzungsmodalitäten und Auswirkungen (einschließlich finanzieller) von den Parteien im Voraus bekannt und akzeptiert werden. Sie wird dann in den Katalog der Standardänderungen integriert und kann je nach Fall eine GTI und eine GTR haben.

  Einführung in    Aktionen der Administration zur Umsetzung der Änderung, wenn diese genehmigt ist (die Änderung im Sinne von ITIL bezieht sich nur auf die Änderungsverwaltung und nicht auf die Umsetzung/Verwirklichung).

  Serviceanfrage   Antrag auf Weiterentwicklung, der einer Prozedur unterliegt, deren Umsetzung: i) verändert die CMDB nicht, ii) das Betriebsmodus, die Kosten und Risiken sind im Voraus bekannt und akzeptiert und erfordern keine spezifischen Rückgängigmachungsmodalitäten iii) die Umsetzung unterliegt einem Service-Level-Agreement (SLA) und ist in die Gebühr des Vertrags einbezogen, wenn sie in Arbeitszeiten durchgeführt wird.

rs geöffnet.

  Element der      Ein "Konfigurationselement" ist ein identifizierbares
  Konfiguration   Komponente des Informationssystems, wie z. B. Software,
                  Hardware oder Dokumente, das in der IT-Services-Verwaltung
                  verwaltet wird.

  Dienst          Ein "Dienst" bezeichnet den qualifizierten SecNumCloud-Dienst,
                  der vom Anbieter an den Auftraggeber gemäß Abschnitt
                  „Dienstbeschreibung“ dieser Dienstvereinbarung geliefert wird.

  Ereignis        Ein „Ereignis“ ist jede nachweisbare oder identifizierbare
                  Situation, die für die Verwaltung des Dienstes von Bedeutung sein
                  kann.

  Schadensfall    Ein „Schadensfall“ bezeichnet ein schwerwiegendes Ereignis
                  mit natürlicher oder menschlicher Ursache, versehentlich oder
                  vorsätzlich, das zu erheblichen Verlusten und Schäden für die
                  betroffene Partei führt.

  Dienstvereinbarung   Dieses Dokument, erstellt im Rahmen eines spezifischen
                  Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen
                  (AGB), entspricht den Anforderungen des SecNumCloud-Referenzrahmens.

  Verfügbarkheit   Fähigkeit, die Verfügbarkheit und den Erhalt der optimalen
                  Leistungen eines Dienstes sicherzustellen, entsprechend den
                  Kriterien und Verpflichtungen, die in den Service-Level-Agreements
                  (SLA) definiert sind.

Überwachung     Die Überwachung eines Informationssystems oder eines Dienstes,
                die die Erfassung verschiedener Daten wie Messwerte und
                Alarme umfasst. Diese Tätigkeit beschränkt sich auf die
                Beobachtung und das Monitoring, ohne direkt in die überwachten
                Elemente einzugreifen, eine Befugnis, die den
                Verwaltungsoperationen vorbehalten ist.
 -------------------------------------------------------------------------

## 4. Gegenstand des PaaS-Dienstvertrags des Anbieters

Dieser Dienstvertrag legt die Bedingungen und Anforderungen fest, nach denen der Anbieter dem AUFTRAGGEBER eine Infrastruktur gemäß den Spezifikationen des Angebots „Platform as a Service – PaaS“ mit der entsprechenden SecNumCloud-Zertifizierung bereitstellen wird.

Gegenstand des Dienstvertrags:

1. Festlegung der von dem AUFTRAGGEBER erwarteten Leistungsanforderungen in Bezug auf die Funktionalität und Zuverlässigkeit der Infrastruktur.
2. Darstellung der Verpflichtungen des Anbieters, um die vereinbarten Service-Level zu erfüllen.
3. Identifizierung der geltenden gesetzlichen Vorschriften, die speziell auf die angebotene Infrastruktur anwendbar sind.
4. Sicherstellung einer einheitlichen und integren Bewertung der Qualität der geleisteten Dienstleistungen.
5. Gewährleistung der Qualität der Dienstleistungen, die anhand quantitativer Leistungsindikatoren bewertet wird.

Es wird vereinbart, dass im Fall der Entzug der SecNumCloud-Zertifizierung des Anbieters dieser Vertrag automatisch gelöst werden kann, ohne dass der AUFTRAGGEBER Strafen tragen muss. In einem solchen Fall verpflichtet sich der Anbieter, den AUFTRAGGEBER durch Versand einer offiziellen Benachrichtigung per Einschreiben mit Empfangsbestätigung über diese Nichtzulassung zu informieren.

Es sei daran erinnert, dass eine Änderung oder Anpassung der SecNumCloud-Zertifizierung nicht als Aufhebung der ursprünglichen Zertifizierung angesehen wird.

## 5. Entwicklung der PaaS-Servicevereinbarung

Änderungen oder Ergänzungen dieser Servicevereinbarung ergeben sich ausschließlich aus den Anfragen, die von den dafür benannten Governance-Gremien gestellt werden. Diese Änderungsvorschläge werden im strategischen Ausschuss geprüft, der einzige zuständige Instanz, die entscheidet, welche Aspekte einer schriftlichen Formalisierung bedürfen.

Es wurde vereinbart, dass jede Änderung der Vereinbarung, nach Genehmigung, die ursprünglich festgelegten finanziellen Bedingungen verändert, die Erstellung und Unterzeichnung einer Anlage zum laufenden Vertrag erfordert.

Faktoren, die eine Überarbeitung dieser Vereinbarung auslösen können, umfassen, jedoch nicht beschränken auf:

- Die Anpassung der PaaS-Plattform durch den Anbieter.
- Die Anpassungen an den vom Anbieter bereitgestellten Diensten.
- Änderungen der Verpflichtungen und anwendbaren Sanktionen.
- Organisatorische Umstrukturierungen innerhalb des Auftraggebers oder des Anbieters.
- Die Erweiterung oder Reduzierung des Anwendungsbereichs der Dienste, zu denen sich der Auftraggeber verpflichtet hat.

Die Versionierung und Überarbeitung der Vereinbarung ist im Vorwort des Dokuments festgehalten, um deren Nachverfolgung zu erleichtern.

## 6. Audit

Der Dienstleister verpflichtet sich, dem Auftraggeber oder einem unabhängigen Prüfer, den dieser letztere bestimmt hat, Zugang zu allen Dokumenten zu gewähren, die zur Nachweisführung der vollständigen Einhaltung der Pflichten im Zusammenhang mit der Konformität mit den Bestimmungen des Artikels 28 der Verordnung zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (DSGVO) erforderlich sind, und unterstützt damit die Durchführung von Audits.

**Der Dienstleister verpflichtet sich insbesondere, dem Auftraggeber die Liste aller Dritter bereitzuhalten, die Zugang zu den Daten haben, und ihn über jede Änderung der Unterlieferanten zu informieren.**

Durch die Annahme dieses Dienstvertrags erteilt der Auftraggeber seine ausdrückliche Zustimmung an:

1. **Die Nationale Agentur für Informationssicherheit der Systeme (ANSSI)** sowie die zuständige Zertifizierungsstelle, um die Konformität des Dienstes und seines Informationssystems mit den Standards des SecNumCloud-Referenzrahmens zu prüfen.
2. **Einen Sicherheitsauditor für Informationssysteme**, der ordnungsgemäß qualifiziert und vom Dienstleister ausdrücklich beauftragt ist, um Sicherheitsaudits im Zusammenhang mit dem vom Dienstleister bereitgestellten Dienst durchzuführen.

## 7. Dienstleistungsbeschreibung

Die von dem Dienstleister angebotene Dienstleistung wird durch die Bereitstellung der folgenden Leistungen gekennzeichnet, welche dem Prinzip der geteilten Verantwortung entsprechen, das im Referenzrahmen SecNumCloud detailliert beschrieben wird:

- Die Bereitstellung einer Red Hat OpenShift-Container-Management-Plattform, die vom Dienstleister betrieben wird.

Es wird verstanden, dass der Dienstleister seine Expertise einsetzen wird, um die Leistungen gemäß den besten branchenüblichen Praktiken zu erbringen, entsprechend ihren Spezifikationen und unter Einhaltung der Normen seiner ISO/IEC 27001-Zertifizierung sowie der Richtlinien des SecNumCloud-Referenzrahmens.

## 8. Implementierung des Dienstes

Es wird darauf hingewiesen, dass alle Operationen und physischen Komponenten, die bei der Bereitstellung des qualifizierten Dienstes beteiligt sind, dessen Gegenstand dieser Vertrag ist, sich in der Europäischen Union befinden. Dies umfasst insbesondere den Support, die operative Überwachung und die Sicherheitsüberwachung (SOC).

### 8.1. Beschreibung der technischen Komponenten

Die PaaS-Dienste (Platform as a Service) umfassen die gesamte Palette an Komponenten und Diensten, die für ihren optimalen Betrieb im Einklang mit der SecNumCloud-Zertifizierung erforderlich sind.

In diesem Zusammenhang sind ihre Leistungsfähigkeit und Zuverlässigkeit unverzichtbar mit den technischen Komponenten und den Diensten der **IaaS-Infrastruktur** des Anbieters verbunden, wie im Dokument [IaaS-Servicemanager](../iaas/sla_iaas.md) des Anbieters festgelegt.

#### 8.1.1. Dienstleistungsplattform REDHAT OpenShift

Der Dienst umfasst die Bereitstellung innerhalb einer Region, auf 3 Verfügbarkeitszonen,

#### 8.1.2. Software-Infrastruktur zur Steuerung der Red Hat OpenShift-Plattform

Der Anbieter stellt dem Auftraggeber die Verwaltungsconsole und die notwendige API zur Nutzung seiner PaaS-Umgebungen Red Hat OpenShift zur Verfügung. Er verpflichtet sich außerdem, diese in optimaler Betriebsbereitschaft zu halten und kontinuierlich sicherzustellen.

Im Rahmen des spezifischen Dienstes stellt der Anbieter dem Auftraggeber alle Schnittstellen und APIs der Red Hat OpenShift-Plattform innerhalb des ausgewählten Tenants zur Verfügung. Es liegt an dem Auftraggeber, die entsprechenden Sicherheitsmaßnahmen wie Firewalls (Firewall), Web Application Firewalls (WAF) und andere Schutzmaßnahmen einzurichten sowie die zugehörigen Filterregeln festzulegen, um den Zugriff auf seine Plattform gemäß seiner Sicherheitspolitik zu sichern.

Der Anbieter warnt den Auftraggeber davor, dass eine ungewöhnliche Nutzung seiner Verwaltungsconsole, insbesondere bei Überlastung seiner Befehls-APIs (Hammering), automatische Sicherheitsmaßnahmen auslösen kann, die den Zugriff auf die Befehls-APIs oder bestimmte Dienste des Anbieters blockieren können. Es ist zu beachten, dass sich diese Situation nicht als Ausfall des Dienstes darstellt, sondern als Schutzmaßnahme der Infrastruktur des Anbieters; daher darf der Auftraggeber dies nicht als Ausfall in seinen Berechnungen betrachten.

Darüber hinaus weist der Anbieter den Auftraggeber darauf hin, dass perfekt identische Anfragen (Duplikate), die an seine APIs gesendet werden, auf eine pro Sekunde beschränkt sind (Throttling). Wenn der Auftraggeber identische Anfragen mit einer höheren Frequenz sendet, darf deren Ablehnung nicht als Ausfall des Dienstes interpretiert werden.

#### 8.1.3. Verknüpfte Backup-Infrastruktur

Der Anbieter stellt dem Auftraggeber eine integrierte, dedizierte und verwaltete Backup-Plattform zur Verfügung, die der Schutz der Daten seiner RedHat Openshift-Umgebungen dient. Der Anbieter stellt sicher, dass diese integrierte Backup-Plattform in betriebsbereitem und sicherem Zustand bleibt. Unabhängig davon, wie viele Verfügbarkeitszonen der Auftraggeber abonniert, garantiert der Anbieter, dass die Backup-Plattform des Auftraggebers außerhalb der Verfügbarkeitszone der gesicherten Workloads liegt.

Die Backup-Leistung beschränkt sich auf die Sicherung virtueller Maschinen und der Topologie-Konfigurationen der IaaS-Umgebungen der SecNumCloud-Tenants des Auftraggebers. Die Erstellung und Anwendung einer angemessenen Backup-Politik durch den Auftraggeber hängt von der Abonnierung spezifischer Arbeitsleistungseinheiten ab. Es liegt also an dem Auftraggeber, sicherzustellen, dass die notwendigen technischen Ressourcen beim Anbieter verfügbar sind, um seine Backup-Politik umzusetzen oder diese entsprechend den verfügbaren Mitteln anzupassen.

Der Anbieter verpflichtet sich, den Auftraggeber bei Kapazitätsbeschränkungen zu informieren und Beratungshilfe bei der Ressourcenoptimierung zu leisten. Die Verpflichtungen des Anbieters beschränken sich auf die Umsetzung der vom Auftraggeber in Bezug auf die Backup-Politik geäußerten Bedürfnisse, innerhalb der abonnierten Ressourcen.

#### 8.1.4. Implementierung von Business-Continuity- oder Wiederherstellungslösungen

Der Anbieter stellt dem Auftraggeber alle notwendigen technischen Lösungen zur Verfügung, um eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen sicherzustellen. Es liegt in der Verantwortung des Auftraggebers, diese Ressourcenverteilung effizient zu verwalten, wozu er die Tools des Anbieters nutzen kann, die für diesen Zweck verfügbar sind.

Insbesondere müssen Anwendungen, die auf der RedHat OpenShift-Plattform bereitgestellt werden, die Redundanzmechanismen des Anbieters unterstützen, um die damit verbundenen Business-Continuity- oder Wiederherstellungslösungen nutzen zu können.

## 9. Verpflichtungen und Service-Level-Agreements

Der Anbieter verpflichtet sich, eine kontinuierliche Überwachung der Leistung und der Sicherheitsintegrität seiner Plattformen und Dienste sicherzustellen, um deren optimale Funktionsfähigkeit zu gewährleisten.

Ein Ausfall eines Dienstes, der auf einem Leistungsindikator basiert, wird ab dem Zeitpunkt anerkannt, zu dem er vom Überwachungssystem des Anbieters identifiziert wird, oder nach einer Benachrichtigung durch einen Nutzer des AUFTRAGGEBERS. Der Beginn des Ausfalls wird zum frühestmöglichen Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um eine genaue und faire Berechnung der Ausfallzeit zu gewährleisten.

Das Ende des Ausfalls wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, bestätigt entweder durch die Überwachungstools des Anbieters oder durch eine Rückmeldung des Nutzers, was eine effektive Wiederherstellung der Operationen und eine genaue Messung der Ausfallzeit sicherstellt.

### 9.1. Verfügbarkeitsverpflichtungen der RedHat OpenShift-Plattform

Der Anbieter verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau zu gewährleisten, das den in jeder angegebenen Periode definierten Standards entspricht. Die Service-Level-Agreements (SLAs) gelten, sofern der COMMANDITAIRE seine Systeme über mindestens zwei der in der betroffenen Region verfügbaren Verfügbarkeitszonen implementiert.

Bei Nichterfüllung dieser Bedingungen durch den COMMANDITAIRE ist dieser nicht berechtigt, die Anwendung der betreffenden SLAs zu verlangen, die speziell durch einen Sternchen (\*) gekennzeichnet sind. Der Zugriff auf die SLAs erfolgt über die COMMANDITAIRE-Oberfläche. **Die Messungen werden monatlich berechnet**:

- **SLA 1 (\*) : IC-PAAS_SNC-01** – Verfügbarkeit der RedHat OpenShift-Plattform: Garantierte Verfügbarkeitsrate von 99,9 %, berechnet auf 24h/24, 7T/7.

***Hinweise*** :

- *Bei einem DDoS-Angriff behält sich der Anbieter das Recht vor, seine Internet-Routings-Konfiguration anzupassen, um den Einfluss dieses Angriffs zu begrenzen und seine Infrastruktur zu schützen. Insbesondere, wenn eine IP-Adresse des COMMANDITAIRE angegriffen wird, kann der Anbieter die Blackholing-Technik über die BGP-Community anwenden, um den gesamten Datenverkehr an die angezielte IP-Adresse bereits bei seinen Lieferanten zu blockieren, um die Ressourcen des COMMANDITAIRE sowie die von anderen COMMANDITAIREs und der Infrastruktur des Anbieters zu schützen. Der Anbieter empfiehlt dem COMMANDITAIRE dringend, ähnliche Maßnahmen zu ergreifen, wie z. B. die Nutzung von Webanwendungs-Firewalls, die auf dem Markt erhältlich sind, und sorgfältig die Sicherheitsgruppen über die Befehls-API zu konfigurieren.*

- *Der Anbieter betont die Notwendigkeit, dass der COMMANDITAIRE die Öffnungen von Datenströmen minimiert, insbesondere indem er vermeidet, die Administrations-Ports **SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389) von ganz Internet (Subnetz 0.0.0.0/0) aus zugänglich zu machen, sowie interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049).*

## 10. Gemeinschaftsverantwortungsmodell anwendbar

### 10.1. Verantwortung und Pflichten des Anbieters

Der Anbieter verpflichtet sich, dem Auftraggeber Benutzeroberflächen in französischer und englischer Sprache zur Verfügung zu stellen, um den Zugriff und die Verwaltung der angebotenen Dienstleistungen zu erleichtern. Der Auftraggeber verpflichtet sich seinerseits, die geltenden rechtlichen und regulatorischen Anforderungen zu beachten, die sich auf die Daten beziehen, die er dem Anbieter zur Verarbeitung übergibt.

Bei der Übertragung von Daten, die spezifischen rechtlichen Anforderungen unterliegen, wird der Anbieter mit dem Auftraggeber zusammenarbeiten, um die erforderlichen Sicherheitsmaßnahmen zu identifizieren und umzusetzen, entsprechend den Verpflichtungen des Anbieters und im Rahmen der Dienstleistungserbringung.

Der Anbieter verpflichtet sich zudem, die spezifischen Anforderungen der Geschäftsbereiche des Auftraggebers zu prüfen und zu berücksichtigen, wobei die Grenzen seiner Verantwortung respektiert werden, um ein Sicherheitsniveau zu gewährleisten, das den verarbeiteten Informationen entspricht.

Wenn ein Projekt potenziell die Sicherheit des angebotenen Dienstes beeinträchtigen könnte oder die Verfügbarkeit dieses Dienstes beeinflussen oder zu Funktionsverlusten führen könnte, verpflichtet sich der Anbieter, den Auftraggeber über potenzielle Auswirkungen, geplante Korrekturmaßnahmen und verbleibende Risiken durch die Konsole oder per E-Mail an den Kontaktperson des Auftraggebers zu informieren und dies innerhalb einer angemessenen Frist, um Transparenz zu gewährleisten.

Der Anbieter verpflichtet sich, die Daten des Auftraggebers, die aus der Produktion stammen, nicht für Tests zu verwenden, es sei denn, der Auftraggeber hat zuvor seine ausdrückliche Zustimmung erteilt. In diesem Fall verpflichtet sich der Anbieter, diese Daten zu anonymisieren und während der Anonymisierung ihre Vertraulichkeit zu gewährleisten.

Bei einer Änderung des Unterauftragnehmers für die Hosting-Dienstleistungen wird der Anbieter den Auftraggeber im Voraus informieren und sicherstellen, dass diese Übergang den angebotenen Dienst nicht negativ beeinflusst.

Auf Anfrage des Auftraggebers wird der Anbieter den Zugriff auf sein internes Reglement, seine ethische Charta, die anwendbaren Sanktionen bei Verstößen gegen seine Sicherheitspolitik, Ereignisse, die ihn betreffen, die Verfahrensweisen im Zusammenhang mit dem Dienst und die spezifischen Sicherheitsanforderungen bereitstellen.

Der Anbieter verpflichtet sich, den Auftraggeber über bevorstehende Änderungen an Softwareelementen, die unter der Verantwortung von Cloud Temple stehen, zu informieren, sofern eine vollständige Kompatibilität nicht gewährleistet werden kann.

### 10.2. Haftungsbeschränkung des Dienstleisters

Die Shared-Responsibility-Struktur reduziert effektiv den Umfang der Intervention des Dienstleisters auf Aspekte, die mit der Bereitstellung einer funktionsfähigen RedHat OpenShift-Plattform verbunden sind, einschließlich:

- Die Verwaltung der IaaS-Infrastruktur, die die RedHat OpenShift-Plattform und deren Bereitstellung unterstützt,
- Die Verwaltung der Systeme, die für den ordnungsgemäßen Betrieb der Plattform erforderlich sind,
- Die Aufrechterhaltung der Sicherheitsbedingungen,
- Die Aktualisierung der RedHat OpenShift-Plattform,
- Die Sicherung der wesentlichen Konfigurationsdaten dieser Plattform, mit Ausnahme der Daten und Anwendungen des AUFTRAGGEBERS, die in seiner Verantwortung liegen.

Sie schließt insbesondere, aber nicht ausschließlich:

- Die Aktualisierung der Betriebssysteme und Software, die der AUFTRAGGEBER auf seinen OpenShift-Umgebungen in seinen lokalen Räumen installiert hat,
- Die Sicherheit der Programme, Software und Anwendungen, die der AUFTRAGGEBER innerhalb der OpenShift-Umgebung installiert hat,
- Die Sicherung von Daten auf Anwendungsebene,
- Die Konfiguration der Sicherungspolitiken.

### 10.3. Zugriffsbegrenzung

Im Rahmen dieses Servicevertrags ist der Dienstleister ausdrücklich daran gehindert, auf die Mietkunden des Auftraggebers zuzugreifen, ohne vorherige Zustimmung. Es ist die Verantwortung des Auftraggebers, den Mitarbeitern des Dienstleisters die erforderlichen Zugriffe zu gewähren, entsprechend den spezifischen Anforderungen des Hosting und, falls zutreffend, der professionellen Support-Dienstleistungen, sofern diese Option vom Auftraggeber gewählt wurde.

Der Auftraggeber erkennt an, dass diese Zugriffe ausschließlich für die Zwecke der vereinbarten Dienstleistung gewährt werden, wodurch eine sichere und den Bedingungen des Vertrags entsprechende Verwaltung gewährleistet wird.

Ferner ist der Zugriff von Dritten, die an der Dienstleistung des Dienstleisters beteiligt sind, streng verboten. Im Falle einer spezifischen technischen Anforderung, die einen solchen Zugriff erfordert, könnte dieser nur nach klaren Benachrichtigung des Auftraggebers, Bereitstellung einer detaillierten Begründung und Erhalt seiner schriftlichen Zustimmung hergestellt werden.

Diese Maßnahme gewährleistet die Kontrolle und Sicherheit der Daten des Auftraggebers und stellt sicher, dass jede Ausnahme von der Regel ausdrücklich genehmigt und dokumentiert ist.

## 11. Datenlöschung am Ende des Vertrags

Am Ende des Vertrags, ob er ausläuft oder aus irgendeinem Grund gelöst wird, verpflichtet sich der Dienstleister, die gesamten Daten des Auftraggebers, einschließlich der technischen Daten, sicher zu löschen. Der Dienstleister wird dem Auftraggeber einen formellen Vorabhinweis mitteilen, der einen Zeitraum von 21 Kalendertagen einhält. Die Daten des Auftraggebers werden dann innerhalb eines maximalen Zeitraums von 30 Tagen nach dieser Benachrichtigung gelöscht.

Um dies zu belegen, übergibt der Dienstleister dem Auftraggeber ein Zertifikat, das die Löschung der Daten bestätigt.

## 12. Anwendbares Recht

Das anwendbare Recht für diesen Dienstleistungsvertrag ist das französische Recht.

Im Falle einer Anrufung durch den Dienstleister im Rahmen der Dienstleistungen, die dem COMMANDITAIRE gewährt werden, bei einer dritten Gesellschaft, einschließlich eines Unterlieferanten, deren Sitz, Zentrale oder Hauptniederlassung in einem Nicht-EU-Land liegt, oder die von einer in einem Nicht-EU-Land ansässigen dritten Gesellschaft besessen oder unter Kontrolle steht, verpflichtet sich der Dienstleister, sicherzustellen, dass diese dritte Gesellschaft keinen Zugriff auf die Daten hat, die vom Dienstleister verarbeitet werden.

Es ist zu beachten, dass die genannten Daten solche sind, die dem Dienstleister vom COMMANDITAIRE übermittelt werden, sowie alle technischen Daten wie die Identitäten der Begünstigten und Administratoren der technischen Infrastruktur, die von den Netzwerken verarbeiteten Daten, die Technik-Logs, das Verzeichnis, die Zertifikate, die Zugriffsconfiguration usw., die Informationen über den COMMANDITAIRE enthalten.

Zur Klarstellung ist der Begriff der Kontrolle gemäß Abschnitt II des Artikels L233-3 des Handelsgesetzbuches definiert.