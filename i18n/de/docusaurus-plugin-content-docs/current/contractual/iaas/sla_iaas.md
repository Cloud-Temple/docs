---
title: SecNumCloud IaaS Servicevereinbarung
---


# 1. IaaS SERVICEVEREINBARUNG

  -----------------------------------------------------------------------
  **Empfänger:**            **AUFTRAGGEBER**
  ------------------------------ ----------------------------------------
  **Dokumentreferenz**     CT.AM.JUR.ANX CdS-IaaS -
                                 20251701_v3.0.docx_Tag TT JJJJ

  **Ihre Ansprechpartner**         *Vorname* *Name*

                                 Account Manager

                                 E-Mail: *vorname.name*\@cloud-temple.com

  **Datum der letzten Aktualisierung**      17.01.2025

**Datum der vertraglichen Validierung**           Tag TT JJJJ
  -----------------------------------------------------------------------

------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Version**   **Datum**     **Aktion**                           **Autor**
  ------------- ------------ ------------------------------------ --------------
  v0.1          07.06.2022   Erstfassung                   Lorena ALCALDE

  v0.2          14.09.2022   Erweiterung                       Lorena ALCALDE

  v1.0          30.12.2022   Integration von Indikatoren              Lorena ALCALDE

  v1.1          23.01.2023   Änderung der Fußzeile            Lorena ALCALDE

  v1.2          22.05.2023   Erweiterung                       Lorena ALCALDE

  v1.3          29.06.2023   Erweiterung                       Lorena ALCALDE

  v1.4          06.11.2023   Änderung des Kapitals und              Lorena ALCALDE
                             Erweiterung

  v1.5          30.11.2023   Erweiterung                       Lorena ALCALDE

  v1.6          21.03.2024   Erweiterung                       Lorena ALCALDE

  v2.0          29.03.2024   Anpassungen zur SNC-Konformität           Nicolas
                                                                  ABRIOUX

  v2.0          03.04.2024   Veröffentlichung                          Lorena ALCALDE

  V3.0          17.01.2025   Erweiterung                       Emeline CAZAUX
  ------------- ------------ ------------------------------------ --------------
  ------------------------------------------------------------------------------

------------------------------------------------------------------------

# 2. INHALTSVERZEICHNIS

- [1. **IaaS SERVICEVEREINBARUNG**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
- [2. **INHALTSVERZEICHNIS**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
- [3. Einleitung und Glossar](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
  - [3.1. Einleitung](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
  - [3.2. Glossar](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
- [4. Akronyme](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
- [5. Zweck dieser Servicevereinbarung](#X30e34f28e133265489633a87e3abd4d1a022de5)
- [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
- [7. Beschreibung des Services](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
  - [7.1. Modell der geteilten Verantwortung](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
  - [7.2. Detaillierte Darstellung des Serviceumfangs](#Xd81ad0562f6e00e693916802084624b2a4885a5)
    - [7.2.1. Datacenter-Infrastrukturen](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
    - [7.2.2. Software-Infrastruktur zur Steuerung des Services](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
    - [7.2.3. Recheninfrastrukturen](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
    - [7.2.4. Speicherinfrastruktur](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
    - [7.2.5. Globale Netzwerkinfrastruktur](#X78b4484e386c95a988a698cd84bae342679ddb5)
    - [7.2.6. Backup-Infrastruktur](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
    - [7.2.7. Implementierung von Lösungen zur Wiederherstellung oder Kontinuität des Geschäftsbetriebs](#X5610bffa77dd118e87cbee05f204158179c962f)
  - [7.3. Einschränkungen der Dienste im qualifizierten IaaS-Modell](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
    - [7.3.1. Managed Services im RUN-Modus](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
    - [7.3.2. Konfiguration der Notfallwiederherstellung](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
    - [7.3.3. Backup-Konfiguration](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
  - [7.4. Implementierung des Services](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
    - [7.4.1. Technische Voraussetzungen](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
  - [7.5. Standort des Services in Frankreich](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
    - [7.5.1. Standort der Rechenzentren, die den Service hosten](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
    - [7.5.2. Standort der Cloud Temple-Niederlassungen, die den Service betreiben](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
  - [7.6. Support](#X451baaab9b4764d97da95395b7e24265143a283)
    - [7.6.1. Art des Supports für den Service](#X192381358bcad693baa22b16773742f4c8cf227)
    - [7.6.2. Anfrage des technischen Support-Services](#X03ef425751011df1818d9488df5625576c33f5e)
    - [7.6.3. Prozess des Vorfallmanagements](#Xac759d2aee6d685130dea876d7a1ed03888b994)
    - [7.6.4. Prozess der Priorisierung der Bearbeitung](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
    - [7.6.5. Sprache und Standort des Support-Services](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
- [8. Verpflichtungen und Servicelevel](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
  - [8.1. Verfügbarkeitsverpflichtungen der Infrastruktur](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
  - [8.2. Verfügbarkeitsverpflichtung der AUFTRAGGEBER-Schnittstelle](#X86570f48e6da9370f069232b4ae175183f2dafd)
  - [8.3. Verfügbarkeitsverpflichtung des Supports](#Xfc8548982b300528a67725f1705f15805f405f0)
  - [8.4. Verfügbarkeitsverpflichtung des S3-Objektspeichers](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
  - [8.5. Präzisierung bezüglich der Backup-Verpflichtung](#Xcc0ee164bf81418fd2280ceac4eb569bf7b97f7)
- [9. Organisation der vertraglichen Beziehung](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
  - [9.1. Verantwortlichkeiten des Dienstleisters](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
  - [9.2. Haftungsbeschränkungen des Dienstleisters](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
  - [9.3. Zugangsbeschränkung](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)
  - [9.4. Verantwortlichkeiten von Dritten, die an der Bereitstellung des Secure Temple-Services beteiligt sind](#Xc662a81cadd2baa300ca83a27240dec61621a56)
  - [9.5. Verantwortlichkeiten und Pflichten des AUFTRAGGEBERS](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
  - [9.6. Rechte des AUFTRAGGEBERS](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
  - [9.7. Löschung der Daten am Ende des Vertrags](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
- [10. Lebenszyklus dieser Servicevereinbarung](#X89744c1f67247955b75e73d73aaa55899645415)
  - [10.1. Inkrafttreten der Servicevereinbarung](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
  - [10.2. Weiterentwicklung der Servicevereinbarung](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
    - [10.2.1. Vom AUFTRAGGEBER initiierte Änderungen](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
    - [10.2.2. Vom Dienstleister initiierte Änderungen](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
  - [10.3. Reversibilität](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
- [11. Verfügbarkeit, Kontinuität und Wiederherstellung des Services](#X115fcc8f59c1201dae17a3d86136d153be01044)
  - [11.1. Management von Vorfällen und Unterbrechungen](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
    - [11.1.1. Vorfälle](#X648046c564ac1cd52bebb02b256b193a3da4d74)
      - [11.1.1.1. Arten von Vorfällen, die im Rahmen dieser Servicevereinbarung behandelt werden](#X09cc1e22db275b1a463f85596829f3f871ae224)
      - [11.1.1.2. Bearbeitung von Vorfällen](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
      - [11.1.1.3. Benachrichtigungsstufe bei Sicherheitsvorfällen](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
  - [11.2. Wartung des Services](#X8f50b0b400c67568e380ddb602ac786ec585905)
    - [11.2.1. Art der Wartung](#X903d92edf16182242ecfd404337edbaf2243b81)
    - [11.2.2. Fernzugriffe von Cloud Temple auf den Bereich des AUFTRAGGEBERS](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
    - [11.2.3. Fernzugriffe von Dritten, die an der Bereitstellung des Services auf dem Bereich des AUFTRAGGEBERS beteiligt sind](#X7ad951099cc984b8fc113222e52c4e27d11465f)
- [12. Verfahren zur Löschung von Daten am Ende des Vertrags](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
- [13. Anwendbares Recht](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
  - [13.1. Allgemein](#X5ed94d170893fb4c04d7110c419f01198fda773)
  - [13.2. Einhaltung des geltenden Rechts und der geltenden Vorschriften](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
  - [13.3. DSGVO](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
  - [13.4. Schutz gegenüber außereuropäischem Recht](#X5171f5ee735df20bc2100671620eddd76dca12d)
- [14. UNTERSCHRIFTEN](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Einleitung und Glossar

## 3.1. Einleitung

Dieses Dokument formalisiert die Servicevereinbarung für den SecNumCloud-qualifizierten IaaS-Service unter der Bezeichnung "Secure Temple".

Der Service ist SecNumCloud-qualifiziert (siehe Bescheinigung im Anhang).

Diese Servicevereinbarung ergänzt die Allgemeinen Verkaufs- und Nutzungsbedingungen des Dienstleisters und ist zu diesen komplementär. Es wird vereinbart, dass die Vertragsdokumente kohärent miteinander zu interpretieren sind. Im Falle eines Widerspruchs oder einer Abweichung zwischen den Bestimmungen der Vertragsdokumente haben die Dokumente in folgender Reihenfolge Vorrang:

1. Allgemeine Verkaufs- und Nutzungsbedingungen (AVNB)

2. SecNumCloud IaaS Servicevereinbarung

3. SecNumCloud OpenIaaS Servicevereinbarung

4. SecNumCloud PaaS Servicevereinbarung

5. Spezifische Servicevereinbarung - Bare Metal

6. Besondere spezifische Vereinbarung

7. Sicherheitsgewährleistungsplan (PAS)

8. Besondere Nutzungsbedingungen (BNB)

9. Datenschutzvereinbarung

## 3.2. Glossar

In dieser Servicevereinbarung werden der **AUFTRAGGEBER**, der **Dienstleister** und die **Parteien** in dem Vertrag identifiziert, dem diese Servicevereinbarung als Anhang beigefügt ist.

Die nachstehenden Ausdrücke in dieser Servicevereinbarung werden gemäß den ihnen unten zugewiesenen Definitionen ausgelegt:

- **Änderung:** Jede Hinzufügung, Änderung oder Entfernung, die den Service beeinflusst und die genehmigt, geplant oder übernommen wurde.

- **Standardänderung:** Eine Änderung, die einem Verfahren unterliegt, dessen Modalitäten der Inbetriebnahme und Auswirkungen (einschließlich finanzieller) im Voraus von den Parteien bekannt und akzeptiert sind. Sie wird dann in den Katalog der Standardänderungen aufgenommen und kann je nach Fall eine GTI und eine GTR haben.

- **Vertrag:** bezeichnet den Vertrag, den der AUFTRAGGEBER mit dem Dienstleister abgeschlossen hat, um dem AUFTRAGGEBER die Nutzung des Services zu ermöglichen, und dem diese Servicevereinbarung beigefügt ist.

- **Servicevereinbarung:** Dieses Dokument, das im Rahmen eines spezifischen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (AVNB) erstellt wurde, und zwar in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzrahmens.

- **Serviceanfrage:** Eine Änderungsanfrage, die einem Verfahren unterliegt, dessen Durchführung: i) die CMDB nicht ändert, ii) deren Vorgehensweise, Kosten und Risiken im Voraus bekannt und akzeptiert sind und keine spezifischen Rückfallmodalitäten erfordern, iii) deren Durchführung einem Service Level Agreement unterliegt und in der Vertragsgebühr enthalten ist, wenn sie während der Geschäftszeiten und an Arbeitstagen durchgeführt wird.

- **Verfügbarkeit:** Die Fähigkeit, die Verfügbarkeit und Aufrechterhaltung der optimalen Leistung des Services gemäß den in den Service Level Agreements (SLA) definierten Kriterien und Verpflichtungen zu gewährleisten.

- **Technische Daten**: Umfasst alle Daten, die zur Bereitstellung des Services verarbeitet werden, insbesondere die Identität der Begünstigten und Administratoren der technischen Infrastruktur, Protokolle der technischen Infrastruktur, Zugriffskonfiguration, Verzeichnis, Zertifikate...

- **Ereignis:** Ein "Ereignis" ist jedes erkennbare oder identifizierbare Vorkommnis, das für die Verwaltung des Services von Bedeutung sein kann.

- **Hypervisor:** Betriebssystem, das die Ausführung virtueller Maschinen auf einer Recheneinheit ermöglicht.

- **Vorfall:** Jedes unvorhergesehene Ereignis, das den normalen Betrieb des Services stört oder die Sicherheit der Daten gefährdet.

- **Sicherheitsvorfall:** Jedes Ereignis im Bereich des Services:

  - Von absichtlich böswilliger Natur;
  - Von versehentlicher Natur, die die Integrität, Vertraulichkeit oder Nachvollziehbarkeit des Services oder der Daten des AUFTRAGGEBERS beeinträchtigt;
  - Das die bestehenden Sicherheitsmaßnahmen beeinträchtigt. Beeinträchtigungen der Verfügbarkeit nicht-böswilliger Herkunft werden nicht als Sicherheitsvorfall betrachtet (Hardwareausfall, Bug, Fehlfunktion, Naturkatastrophe...).

- **AUFTRAGGEBER-Schnittstelle:** Vom Dienstleister dem AUFTRAGGEBER zur Verfügung gestellte Administrationsoberfläche des Services, die eine Web-Administrationskonsole und eine API umfasst.

- **Inbetriebnahme:** Verwaltungsmaßnahme(n) zur Umsetzung der Änderung, wenn diese genehmigt ist (wobei die Änderung im Sinne von ITIL nur das Änderungsmanagement und nicht ihre Realisierung/Konkretisierung betrifft).

- **Problem**: Ursache eines oder mehrerer wiederkehrender Vorfälle, Ursache eines potenziellen Vorfalls (Risikosituation), der eine Analyse und Lösung erfordert, um sein Wiederauftreten zu verhindern.

- **Region:** bezeichnet eine geografisch abgegrenzte Gruppe von Cloud-Verfügbarkeitszonen, die Netzwerk-, Rechen- und Speicherdienste bereitstellen, um Latenz, Leistung und lokale regulatorische Konformität zu optimieren.

- **Service:** bezeichnet den SecNumCloud-qualifizierten IaaS-Service "Secure Temple", der dem AUFTRAGGEBER vom Dienstleister von technischen Infrastrukturen aus bereitgestellt wird, die vom Dienstleister gewartet werden, wie im Abschnitt "Beschreibung des Services" dieser Servicevereinbarung beschrieben.

- **Secure Temple**: bezeichnet den SecNumCloud-qualifizierten IaaS-Service, der von der Firma Cloud Temple angeboten wird, wie in der Bescheinigung definiert, die auf der Website der ANSSI eingesehen werden kann und dieser Servicevereinbarung als Anhang beigefügt ist.

- **Katastrophe:** bezeichnet ein schwerwiegendes Ereignis natürlichen oder menschlichen Ursprungs, zufällig oder absichtlich, das der betroffenen Partei erhebliche Verluste und Schäden verursacht.

- **Überwachung:** Überwachung eines Informationssystems oder eines Services, die die Sammlung verschiedener Daten wie Messungen und Alarme umfasst. Diese Aktivität beschränkt sich auf die Beobachtung und Verfolgung, ohne direkt in die überwachten Elemente einzugreifen, eine Vorrechte, die den Verwaltungsoperationen vorbehalten ist.

- **Tenant:** Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe vorbehalten ist, die eine gemeinsame Infrastruktur teilen, während die Unabhängigkeit und Sicherheit der Daten und Anwendungen gewahrt bleibt.

- **Verfügbarkeitszone (AZ) (Availability Zone):** Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der entwickelt wurde, um die hohe Verfügbarkeit und Widerstandsfähigkeit der Dienste durch eine geografische Verteilung der Ressourcen zu gewährleisten.

# 4. Akronyme

  -----------------------------------------------------------------------------
  **Akronym**   **Definition**
  -------------- --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Beratungsausschuss für Änderungen

  **CMDB**       Configuration Management Database -- Konfigurationsmanagement-Datenbank

  **COPIL**      Lenkungsausschuss

  **COSTRAT**    Strategieausschuss

  **COPROJ**     Projektausschuss

  **DB**         Database (Datenbank)

  **DPA**        Data Protection Agreement (Datenschutzvereinbarung)

  **DRP**        Disaster Recovery Plan (Notfallwiederherstellungsplan)

  **GTE**        Garantie de Temps d'Escalade (Eskalationszeitgarantie)

  **GTI**        Garantie de Temps d'Intervention (Reaktionszeitgarantie)

  **GTR**        Garantie de Temps de Résolution (Lösungszeitgarantie)

  **ITIL**       Information Technology Infrastructure Library - Bewährte Praktiken für IT-Management

  **IaaS**       Infrastructure as a Service

  **MCO**        Maintien en condition opérationnelle (Betriebserhaltung)

  **MOA**        Maîtrise d'Ouvrage (Bauherr)

  **MOE**        Maîtrise d'Œuvre (Bauunternehmer)

  **MSP**        Managed Services Provider

  **OS**         Operating system (Betriebssystem)

  **PAQ**        Plan d'Assurance Qualité (Qualitätssicherungsplan)

  **PaaS**       Platform as a Service

  **PAS**        Plan d'Assurance Sécurité (Sicherheitsgewährleistungsplan)

  **PASSI**      Prestataire d'Audit de Sécurité des Systèmes d'Information (Anbieter für Sicherheitsaudits von Informationssystemen)

  **RFC**        Request For Change -- Änderungsantrag

  **RGPD**       Règlement Général de Protection des Données (Datenschutz-Grundverordnung)

  **RPO**        Recovery Point Objective -- Aktualität der wiederhergestellten Daten im Katastrophenfall

  **RTO**        Recovery Time Objective -- Wiederherstellungszeit des Services im Katastrophenfall

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Vereinbarung über Servicelevel

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Tierce Maintenance Application (Anwendungswartung durch Dritte)

  **UO**         Unité d'Œuvre (Arbeitseinheit)

  **VABE**       Validation d'Aptitude à la Bonne Exploitabilité (Validierung der Eignung für gute Nutzbarkeit)

  **VABF**       Validation d'Aptitude au Bon Fonctionnement (Validierung der Eignung für gute Funktionalität)

  **VM**         Virtual Machine (Virtuelle Maschine)

**VSR**        Validation de Service Régulier (Validierung des regulären Services)
  -----------------------------------------------------------------------------

# 5. Zweck dieser Servicevereinbarung

Diese Servicevereinbarung legt die Bedingungen fest, unter denen der Dienstleister sich verpflichtet, dem AUFTRAGGEBER den Service zu liefern. Ihr Zweck ist es:

- Die vom AUFTRAGGEBER erwarteten Leistungsanforderungen in Bezug auf Funktionalität und Zuverlässigkeit des Services zu präzisieren;

- Die Verpflichtungen des Dienstleisters zur Erfüllung der vereinbarten Servicelevel darzulegen;

- Die spezifisch für den gelieferten Service geltenden regulatorischen Standards zu identifizieren;

- Eine Einheitlichkeit und Integrität bei der Bewertung der Servicequalität zu gewährleisten;

- Die Exzellenz der erbrachten Dienstleistungen zu garantieren, die anhand quantitativer Leistungsindikatoren bewertet wird.

Es wird festgelegt, dass für den Fall, dass dem Dienstleister die SecNumCloud-Qualifikation entzogen wird, der Vertrag vom AUFTRAGGEBER ohne Vertragsstrafen fristlos gekündigt werden kann. In einem solchen Fall verpflichtet sich der Dienstleister, den AUFTRAGGEBER über diese Disqualifizierung durch Versenden einer offiziellen Mitteilung per Einschreiben mit Rückschein zu informieren.

Es ist zu beachten, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Widerruf der ursprünglichen Qualifikation interpretiert wird.

# 6. Audit

Der Dienstleister verpflichtet sich, dem AUFTRAGGEBER oder einem von diesem benannten Drittprüfer, der kein Konkurrent des Dienstleisters ist, Einsicht in alle Dokumente zu gewähren, die für den Nachweis der vollständigen Einhaltung der Verpflichtungen gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) erforderlich sind, um so die Durchführung von Audits zu erleichtern.

Durch die Annahme dieser Servicevereinbarung erteilt der AUFTRAGGEBER seine ausdrückliche Genehmigung für:

1. Die Nationale Agentur für die Sicherheit von Informationssystemen (ANSSI) sowie die zuständige Qualifizierungsstelle, um die Konformität des Services und seines Informationssystems mit dem SecNumCloud-Referenzrahmen zu überprüfen.
2. Einen Anbieter für Sicherheitsaudits von Informationssystemen, der ordnungsgemäß als PASSI qualifiziert und ausdrücklich vom Dienstleister benannt ist, um Sicherheitsaudits des Services durchzuführen.

# 7. Beschreibung des Services

## 7.1. Modell der geteilten Verantwortung

Der vom Dienstleister angebotene Service zeichnet sich durch die Bereitstellung der folgenden Leistungen aus, die dem Prinzip der geteilten Verantwortung entsprechen, wie es im SecNumCloud-Referenzrahmen dargestellt wird:

- Die Bereitstellung von Rechenressourcen (Compute);

- Die Bereitstellung von Speicherplatz;

- Der Zugang zu Netzwerk- und Internetkonnektivitätsdiensten;

- Das Angebot eines Backup-Services für virtuelle Maschinen.

Das zwischen dem Dienstleister und dem AUFTRAGGEBER im Rahmen des Services angewandte Modell der geteilten Verantwortung wird in §7.1 dargestellt.

Es wird vereinbart, dass der Dienstleister sein Fachwissen einsetzen wird, um die Leistungen gemäß den besten Berufspraktiken und in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzrahmens zu erbringen.

## 7.2. Detaillierte Darstellung des Serviceumfangs

  -----------------------------------------------------------------------------
  Compute          Rechenressource des AUFTRAGGEBER-Tenants
  ---------------- ------------------------------------------------------------
  Storage          Produktionsdaten des AUFTRAGGEBER-Tenants

  S
