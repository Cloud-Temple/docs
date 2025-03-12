---
title: SecNumCloud PaaS Servicevereinbarung
---

**Inhaltsverzeichnis**

- [1. Rahmen](#X09af6387e1d2792b8edc09fc15abd136a837db5)
- [2. Akronyme](#Xc79d173393c04b42ba8cdf223cca3c0202f4dee)
- [3. Glossar](#X0c9d1d82fdc5fcc3d01a320dd2dd3715a6900b4)
- [4. Zweck der PaaS-Servicevereinbarung des Dienstleisters](#X23ec3c3767539f9e69acc7cbf5af8aa8c1b6ad7)
- [5. Weiterentwicklung der PaaS-Servicevereinbarung](#Xa7161677dcf9a35d02c20807040326b39d55881)
- [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
- [7. Beschreibung des Services](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
- [8. Implementierung des Services](#Xc98fb6da582d483e300add6a80df6e3eb76498a)
  - [8.1. Beschreibung der technischen Komponenten](#Xa61c340e3fdf14082cef411d3a913fc4bdeeb4c)
    - [8.1.1. REDHAT OpenShift Serviceplattform](#Xf81d22ed0abca8eab163c160107fa228901d82c)
    - [8.1.2. Software-Infrastruktur zur Steuerung der Redhat Openshift-Plattform](#Xf11ec2e6a431ae11852fe3129245b4d0fd0747b)
    - [8.1.3. Zugehörige Backup-Infrastruktur](#X77b1112fa2c2a53eb0cf09b416962164b77b437)
    - [8.1.4. Implementierung von Lösungen zur Wiederherstellung oder Kontinuität des Geschäftsbetriebs](#Xae1394210f1c9bee4293a93160d2d11cc70ebdd)
- [9. Verpflichtungen und Servicelevel](#Xad2b4ae071a52a99b502c4e84cbba3f15ac78f8)
  - [9.1. Verfügbarkeitsverpflichtungen der RedHat OpenShift-Plattform](#X273341276df81e9f6fad2000ac84216560e59fa)
- [10. Anwendbares Modell der geteilten Verantwortung](#Xa90d4e180ca2ae1d92e4e4cf00f20aca5061eac)
  - [10.1. Verantwortlichkeiten und Pflichten des Dienstleisters](#Xe5cf73850ea2189ab60f41560bf52e97d3019f9)
  - [10.2. Haftungsbeschränkungen des Dienstleisters](#X8856c8f606130116944398b24484722823c023c)
  - [10.3. Zugangsbeschränkung](#X902763258f1242326933ce46892d3f549e73e30)
- [11. Löschung der Daten am Ende des Vertrags](#Xbe642a80027ce4ad88cc932e98b8661c2a0d3a6)
- [12. Anwendbares Recht](#Xa219184d62eb90dfeec612801fd05c5d816c331)

## 1. Rahmen

  --------------------- -------------------------------------------------
  Referenz             CT.AM.JUR.ANX.PAAS 2.1

  Datum                  21. Januar 2025
  --------------------- -------------------------------------------------

## 2. Akronyme

  ------------------------------------------------------------------------------
  Akronym      Beschreibung
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Beratungsausschuss für Änderungen

  CMDB          Configuration Management Database -- Konfigurationsmanagement-Datenbank

  COPIL         Lenkungsausschuss

  COSTRAT       Strategieausschuss

  DB            Database (Datenbank)

  DRP           Disaster Recovery Plan (Notfallwiederherstellungsplan)

  GTI           Garantie de Temps d'Intervention (Reaktionszeitgarantie)

  GTR           Garantie de Temps de Résolution (Lösungszeitgarantie)

  GTE           Garantie de Temps d'Escalade (Eskalationszeitgarantie)

  HYPERVISEUR   Betriebssystem, das die Ausführung von VMs auf einer Recheneinheit ermöglicht

  ITIL          Information Technology Infrastructure Library - Bewährte Praktiken für IT-Management

  IAAS          Infrastructure as a Service

  MCO           Maintien en condition opérationnelle (Betriebserhaltung)

  MOA           Maîtrise d'Ouvrage (Bauherr)

  MOE           Maîtrise d'Œuvre (Bauunternehmer)

  OS            Operating system (Betriebssystem)

  PAQ           Plan d'Assurance Qualité (Qualitätssicherungsplan)

  PAAS          Platform as a Service

  SDM           Service Delivery Manager

  RFC           Request For Change -- Änderungsantrag

  RGPD          Règlement Général de Protection des Données (Datenschutz-Grundverordnung)

  RPO           Recovery Point Objective -- Aktualität der wiederhergestellten Daten im Katastrophenfall

  RTO           Recovery Time Objective -- Wiederherstellungszeit des Services im Katastrophenfall

  SLA           Service Level Agreement -- Vereinbarung über Servicelevel

  UO            Unité d'Œuvre (Arbeitseinheit)

  VABF          Validation d'Aptitude au Bon Fonctionnement (Validierung der Eignung für gute Funktionalität)

  VABE          Validation d'Aptitude à la Bonne Exploitabilité (Validierung der Eignung für gute Nutzbarkeit)

  VM            Virtual Machine (Virtuelle Maschine)

  VSR           Validation de Service Régulier (Validierung des regulären Services)

SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glossar

Die nachstehenden Ausdrücke in diesem Dokument werden gemäß den ihnen unten zugewiesenen Definitionen ausgelegt:

  --------------------------------------------------------------------------------------------
  Ausdruck                        Definition
  -------------------------------- -----------------------------------------------------------
  \"Secure Temple\"                Bezeichnet den SecNumCloud-qualifizierten IaaS-Service, der von der Firma Cloud Temple angeboten wird, wie in der Bescheinigung definiert, die auf der Website der ANSSI eingesehen werden kann und dieser Servicevereinbarung als Anhang beigefügt ist.

  Region                           Eine \"Region\" im Kontext des Cloud Computing bezeichnet eine geografisch abgegrenzte Gruppe von Cloud-Verfügbarkeitszonen, die Netzwerk-, Rechen- und Speicherdienste bereitstellen, um Latenz, Leistung und lokale regulatorische Konformität zu optimieren.

  Verfügbarkeitszone               Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der entwickelt wurde, um die hohe Verfügbarkeit und Widerstandsfähigkeit der Dienste durch eine geografische Verteilung der Ressourcen zu gewährleisten.
  (AZ)(Availability zone)

Tenant                           Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe vorbehalten ist, die eine gemeinsame Infrastruktur teilen, während die Unabhängigkeit und Sicherheit der Daten und Anwendungen gewahrt bleibt.
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Ausdruck       Definition
  --------------- ---------------------------------------------------------
  Vorfall        Ein \"Vorfall\" bezeichnet jedes unvorhergesehene Ereignis, das den normalen Betrieb eines Systems stört oder die Sicherheit der Daten gefährdet.

  Problem        Ein \"Problem\" ist eine grundlegende Ursache eines oder mehrerer Vorfälle, identifiziert oder vermutet, die eine Analyse und Lösung erfordert, um ihr Wiederauftreten zu verhindern.

  Änderung      Eine \"Änderung\" bezeichnet jede Hinzufügung, Änderung oder Entfernung, die den Service beeinflusst und die genehmigt, geplant oder übernommen wurde.

  Standardänderung Eine \"Standardänderung\" ist eine Änderung, die einem Verfahren unterliegt, dessen Modalitäten der Inbetriebnahme und Auswirkungen (einschließlich finanzieller) im Voraus von den Parteien bekannt und akzeptiert sind. Sie wird dann in den Katalog der Standardänderungen aufgenommen und kann je nach Fall eine GTI und eine GTR haben.

  Inbetriebnahme Verwaltungsmaßnahme(n) zur Umsetzung der Änderung, wenn diese genehmigt ist (wobei die Änderung im Sinne von ITIL nur das Änderungsmanagement und nicht ihre Realisierung/Konkretisierung betrifft).

  Serviceanfrage Eine Änderungsanfrage, die einem Verfahren unterliegt, dessen Durchführung: i) die CMDB nicht ändert, ii) deren Vorgehensweise, Kosten und Risiken im Voraus bekannt und akzeptiert sind und keine spezifischen Rückfallmodalitäten erfordern, iii) deren Durchführung einem Service Level Agreement unterliegt und in der Vertragsgebühr enthalten ist, wenn sie während der Geschäftszeiten und an Arbeitstagen durchgeführt wird.

  Konfigurationselement Ein \"Konfigurationselement\" ist eine identifizierbare Komponente des Informationssystems, wie Software, Hardware oder ein Dokument, die im Rahmen des IT-Servicemanagements verwaltet wird.

  Service        Ein \"Service\" bezeichnet den SecNumCloud-qualifizierten Service, der dem AUFTRAGGEBER vom Dienstleister bereitgestellt wird, wie im Abschnitt \"Beschreibung des Services\" dieser Servicevereinbarung beschrieben.

  Ereignis       Ein \"Ereignis\" ist jedes erkennbare oder identifizierbare Vorkommnis, das für die Verwaltung des Services von Bedeutung sein kann.

  Katastrophe    Eine \"Katastrophe\" bezeichnet ein schwerwiegendes Ereignis natürlichen oder menschlichen Ursprungs, zufällig oder absichtlich, das der betroffenen Partei erhebliche Verluste und Schäden verursacht.

  Servicevereinbarung Dieses Dokument, das im Rahmen eines spezifischen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (AVNB) erstellt wurde, und zwar in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzrahmens.

  Verfügbarkeit Die Fähigkeit, die Verfügbarkeit und Aufrechterhaltung der optimalen Leistung eines Services gemäß den in den Service Level Agreements (SLA) definierten Kriterien und Verpflichtungen zu gewährleisten.

Überwachung    Überwachung eines Informationssystems oder eines Services, die die Sammlung verschiedener Daten wie Messungen und Alarme umfasst. Diese Aktivität beschränkt sich auf die Beobachtung und Verfolgung, ohne direkt in die überwachten Elemente einzugreifen, eine Vorrechte, die den Verwaltungsoperationen vorbehalten ist.
  -------------------------------------------------------------------------

## 4. Zweck der PaaS-Servicevereinbarung des Dienstleisters

Diese Servicevereinbarung legt die Bedingungen fest, unter denen der Dienstleister sich verpflichtet, dem AUFTRAGGEBER eine Infrastruktur bereitzustellen, die den Spezifikationen des Angebots \"Platform as a Service -- PaaS\" entspricht, das ordnungsgemäß nach SecNumCloud qualifiziert ist.

Zweck der Servicevereinbarung:

1. Die vom AUFTRAGGEBER erwarteten Leistungsanforderungen in Bezug auf Funktionalität und Zuverlässigkeit der Infrastruktur zu präzisieren.
2. Die Verpflichtungen des Dienstleisters zur Erfüllung der vereinbarten Servicelevel darzulegen.
3. Die spezifisch für die angebotene Infrastruktur geltenden regulatorischen Standards zu identifizieren.
4. Eine Einheitlichkeit und Integrität bei der Bewertung der Servicequalität zu gewährleisten.
5. Die Exzellenz der erbrachten Dienstleistungen zu garantieren, die anhand quantitativer Leistungsindikatoren bewertet wird.

Es wird festgelegt, dass für den Fall, dass dem Dienstleister die SecNumCloud-Qualifikation entzogen wird, der Vertrag vom AUFTRAGGEBER ohne Vertragsstrafen fristlos gekündigt werden kann. In einem solchen Fall verpflichtet sich der Dienstleister, den AUFTRAGGEBER über diese Disqualifizierung durch Versenden einer offiziellen Mitteilung per Einschreiben mit Rückschein zu informieren.

Es ist zu beachten, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Widerruf der ursprünglichen Qualifikation interpretiert wird.

## 5. Weiterentwicklung der PaaS-Servicevereinbarung

Die Änderungen oder Ergänzungen dieser Servicevereinbarung ergeben sich ausschließlich aus den Anfragen, die von den dafür bestimmten Leitungsgremien formuliert werden. Diese Änderungsvorschläge werden im Strategieausschuss geprüft, der als einziges Gremium befugt ist, die Aspekte zu bestimmen, die einer schriftlichen Formalisierung bedürfen.

Es wird vereinbart, dass jede Weiterentwicklung der Vereinbarung nach Validierung, die die ursprünglich festgelegten finanziellen Bedingungen ändert, die Erstellung und Unterzeichnung eines Nachtrags zum laufenden Vertrag erfordert.

Zu den Faktoren, die eine Überarbeitung dieser Vereinbarung auslösen können, gehören unter anderem:

- Die Anpassung der vom Dienstleister orchestrierten PaaS-Plattform.
- Die Anpassungen der vom Dienstleister bereitgestellten Dienste.
- Die Änderungen der eingegangenen Verpflichtungen und der anwendbaren Sanktionen.
- Die organisatorischen Umgestaltungen innerhalb des AUFTRAGGEBERS oder des Dienstleisters.
- Die Erweiterung oder Reduzierung des Anwendungsbereichs der Dienste, die der AUFTRAGGEBER abonniert hat.

Die Verwaltung der Versionen und Überarbeitungen der Vereinbarung wird in der Präambel des Dokuments festgehalten, um die Nachverfolgung zu erleichtern.

## 6. Audit

Der Dienstleister verpflichtet sich, dem AUFTRAGGEBER oder einem von diesem benannten Drittprüfer Einsicht in alle Dokumente zu gewähren, die für den Nachweis der vollständigen Einhaltung der Verpflichtungen gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) erforderlich sind, um so die Durchführung von Audits zu erleichtern.

**Der Dienstleister verpflichtet sich insbesondere, dem AUFTRAGGEBER die Liste aller Dritten, die Zugang zu den Daten haben können, zur Verfügung zu stellen und ihn über jede Änderung der Unterauftragnehmer zu informieren.**

Durch die Annahme dieser Servicevereinbarung erteilt der AUFTRAGGEBER seine ausdrückliche Genehmigung für:

1. **Die Nationale Agentur für die Sicherheit von Informationssystemen (ANSSI)** sowie die zuständige Qualifizierungsstelle, um die Konformität des Services und seines Informationssystems mit den im SecNumCloud-Referenzrahmen definierten Standards zu überprüfen.
2. **Einen Anbieter für Sicherheitsaudits von Informationssystemen**, der ordnungsgemäß qualifiziert und ausdrücklich vom Dienstleister benannt ist, um Sicherheitsaudits des vom Dienstleister bereitgestellten Services durchzuführen.

## 7. Beschreibung des Services

Das vom Dienstleister angebotene Serviceangebot zeichnet sich durch die Bereitstellung der folgenden Leistungen aus, die dem Prinzip der geteilten Verantwortung entsprechen, wie es im SecNumCloud-Referenzrahmen dargestellt wird:

- Die Bereitstellung einer vom Dienstleister gesteuerten Redhat Openshift Container-Management-Plattform.

Es wird vereinbart, dass der Dienstleister sein Fachwissen einsetzen wird, um die Leistungen gemäß den besten Berufspraktiken, ihren Spezifikationen und in Übereinstimmung mit den Normen seiner ISO/IEC 27001-Zertifizierung sowie den Richtlinien des SecNumCloud-Referenzrahmens zu erbringen.

## 8. Implementierung des Services

Es wird darauf hingewiesen, dass alle Operationen und alle physischen Komponenten, die an der Bereitstellung des qualifizierten Services beteiligt sind, der Gegenstand dieser Vereinbarung ist, in der Europäischen Union angesiedelt sind. Dies umfasst insbesondere den Support, die betriebliche Überwachung und die Sicherheitsüberwachung (SOC).

### 8.1. Beschreibung der technischen Komponenten

Die PaaS-Dienste (Platform as a Service) umfassen alle Komponenten und Dienste, die für ihren optimalen Betrieb unter Einhaltung der SecNumCloud-Qualifikation erforderlich sind.

In dieser Hinsicht sind ihre Leistung und Zuverlässigkeit untrennbar mit den technischen Komponenten und Diensten der **IaaS-Infrastruktur** des Dienstleisters verbunden, wie in der [IaaS-Servicevereinbarung](../Working%20in%20progress%20-%20not%20use/iaas/sla_iaas.md) des Dienstleisters spezifiziert.

#### 8.1.1. REDHAT OpenShift Serviceplattform

Der Service umfasst die Bereitstellung innerhalb einer Region, auf 3 Verfügbarkeitszonen,
