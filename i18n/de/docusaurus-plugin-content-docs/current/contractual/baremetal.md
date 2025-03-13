---
title: Spezifische Servicevereinbarung - Bare Metal
---

# 1. BARE METAL SERVICEVEREINBARUNG

  ------------------------------------------------------------------------------------------------------
  **Empfänger:**                        **AUFTRAGGEBER**
  -------------------------------------- ---------------------------------------------------------------
  **Dokumentreferenz**                  CT.AM.JUR.ANX. CdSS-BM - 20250122_v1.0.docx_Tag MM JJJJ - VF

  **Ihre Ansprechpartner**              *Vorname* *Nachname*

                                         Account Manager

                                         E-Mail: *vorname.nachname*\@cloud-temple.com

  **Datum der letzten Aktualisierung**  22.01.2025

**Datum der vertraglichen Validierung**   Tag MM JJJJ
  ------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------
  **Version**   **Datum**    **Aktion**                           **Autor**
  ------------- ------------ ------------------------------------ -----------------
  v1.0          22.01.2025   Erstfassung                          Nicolas BODILIS
  ------------- ------------ ------------------------------------ -----------------

  ---------------------------------------------------------------------------------

# 2. INHALTSVERZEICHNIS

- [1. **BARE METAL SERVICEVEREINBARUNG**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
- [2. **INHALTSVERZEICHNIS**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
- [3. Vorbemerkung und Glossar](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
  - [3.1. Vorbemerkung](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
  - [3.2. Glossar](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
- [4. Akronyme](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
- [5. Zweck dieser Servicevereinbarung](#X30e34f28e133265489633a87e3abd4d1a022de5)
- [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
- [7. Servicebeschreibung](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
  - [7.1. Modell der geteilten Verantwortung](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
  - [7.2. Detaillierte Darstellung des Serviceumfangs](#Xd81ad0562f6e00e693916802084624b2a4885a5)
    - [7.2.1. Rechenzentrumsinfrastrukturen](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
    - [7.2.2. Software-Infrastruktur zur Serviceverwaltung](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
    - [7.2.3. Recheninfrastrukturen](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
    - [7.2.4. Speicherinfrastruktur](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
    - [7.2.5. Globale Netzwerkinfrastruktur](#X78b4484e386c95a988a698cd84bae342679ddb5)
    - [7.2.6. Implementierung von Disaster-Recovery- oder Business-Continuity-Lösungen](#X5610bffa77dd118e87cbee05f204158179c962f)
  - [7.3. Servicebeschränkungen im qualifizierten Bare-Metal-Modell](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
    - [7.3.1. Verwaltete Dienste im RUN-Modus](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
    - [7.3.2. Backup-Konfiguration](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)

    <!-- -->

  - [7.4. Service-Implementierung](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
    - [7.4.1. Technische Voraussetzungen](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)

    <!-- -->

  - [7.5. Servicestandort in Frankreich](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
    - [7.5.1. Standort der Rechenzentren, die den Service hosten](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
    - [7.5.2. Standort der Cloud Temple-Niederlassungen, die den Service betreiben](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
  - [7.6. Support](#X451baaab9b4764d97da95395b7e24265143a283)
    - [7.6.1. Art des begleitenden Supports](#X192381358bcad693baa22b16773742f4c8cf227)
    - [7.6.2. Anforderung des technischen Supportdienstes](#X03ef425751011df1818d9488df5625576c33f5e)
    - [7.6.3. Vorfallmanagementprozess](#Xac759d2aee6d685130dea876d7a1ed03888b994)
    - [7.6.4. Prozess zur Priorisierung der Bearbeitung](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
    - [7.6.5. Sprache und Standort des Supportdienstes](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
- [8. Verpflichtungen und Servicelevel](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
  - [8.1. Verfügbarkeitsverpflichtungen der Infrastruktur](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
  - [8.2. Verfügbarkeitsverpflichtung der AUFTRAGGEBER-Schnittstelle](#X86570f48e6da9370f069232b4ae175183f2dafd)
  - [8.3. Verfügbarkeitsverpflichtung des Supports](#Xfc8548982b300528a67725f1705f15805f405f0)
- [9. Organisation der vertraglichen Beziehung](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
  - [9.1. Verantwortlichkeiten des Dienstleisters](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
  - [9.2. Haftungsbeschränkung des Dienstleisters](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
  - [9.3. Zugangsbeschränkung](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)

[9.4. Verantwortlichkeiten Dritter, die an der Bereitstellung des Secure Temple-Dienstes beteiligt sind](#Xc662a81cadd2baa300ca83a27240dec61621a56)

- [9.5. Verantwortlichkeiten und Pflichten des AUFTRAGGEBERS](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
- [9.6. Rechte des AUFTRAGGEBERS](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
- [9.7. Datenlöschung am Ende des Vertrags](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)

<!-- -->

- [10. Lebenszyklus dieser Servicevereinbarung](#X89744c1f67247955b75e73d73aaa55899645415)
  - [10.1. Inkrafttreten der Servicevereinbarung](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
  - [10.2. Weiterentwicklung der Servicevereinbarung](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
    - [10.2.1. Vom AUFTRAGGEBER ausgelöste Entwicklungen](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
    - [10.2.2. Vom Dienstleister ausgelöste Entwicklungen](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
  - [10.3. Reversibilität](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
- [11. Serviceverfügbarkeit, -kontinuität und -wiederherstellung](#X115fcc8f59c1201dae17a3d86136d153be01044)
  - [11.1. Vorfall- und Unterbrechungsmanagement](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
    - [11.1.1. Vorfälle](#X648046c564ac1cd52bebb02b256b193a3da4d74)
      - [11.1.1.1. Arten von Vorfällen, die im Rahmen dieser Servicevereinbarung behandelt werden](#X09cc1e22db275b1a463f85596829f3f871ae224)
      - [11.1.1.2. Vorfallbehandlung](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
      - [11.1.1.3. Benachrichtigungsstufe bei Sicherheitsvorfällen](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
  - [11.2. Service-Wartung](#X8f50b0b400c67568e380ddb602ac786ec585905)
    - [11.2.1. Art der Wartung](#X903d92edf16182242ecfd404337edbaf2243b81)
    - [11.2.2. Fernzugriff durch Cloud Temple auf den Bereich des AUFTRAGGEBERS](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
    - [11.2.3. Fernzugriff durch Dritte, die an der Bereitstellung des Dienstes auf dem Bereich des AUFTRAGGEBERS beteiligt sind](#X7ad951099cc984b8fc113222e52c4e27d11465f)
- [12. Verfahren zur Datenlöschung am Ende des Vertrags](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
- [13. Anwendbares Recht](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
  - [13.1. Allgemein](#X5ed94d170893fb4c04d7110c419f01198fda773)
  - [13.2. Einhaltung geltender Gesetze und Vorschriften](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
  - [13.3. DSGVO](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
  - [13.4. Schutz vor nicht-europäischem Recht](#X5171f5ee735df20bc2100671620eddd76dca12d)
- [14. UNTERSCHRIFTEN](#X7ad993788a708b47017c27c9d96178e8795e44f)

# 3. Vorbemerkung und Glossar

## 3.1. Vorbemerkung

Dieses Dokument formalisiert die Servicevereinbarung für den Bare Metal-Dienst, der sich derzeit in der SecNumCloud-Qualifizierung befindet.

Der Dienst befindet sich derzeit in der SecNumCloud-Qualifizierung (siehe Bescheinigung im Anhang).

Diese Servicevereinbarung ergänzt die Allgemeinen Verkaufs- und Nutzungsbedingungen des Dienstleisters und ist zu diesen komplementär. Es wird vereinbart, dass die Vertragsdokumente konsistent miteinander ausgelegt werden. Im Falle eines Widerspruchs oder einer Abweichung zwischen den Bestimmungen der Vertragsdokumente haben die Dokumente in folgender Reihenfolge Vorrang:

1. Allgemeine Verkaufs- und Nutzungsbedingungen (AVNB)
2. SecNumCloud IaaS-Servicevereinbarung
3. SecNumCloud OpenIaaS-Servicevereinbarung
4. SecNumCloud PaaS-Servicevereinbarung
5. Spezifische Servicevereinbarung - Bare Metal
6. Spezifische besondere Vereinbarung
7. Sicherheitsgewährleistungsplan (SGP)
8. Besondere Nutzungsbedingungen (BNB)
9. Datenschutzvereinbarung

## 3.2. Glossar

In dieser Servicevereinbarung werden der **AUFTRAGGEBER**, der **Dienstleister** und die **Parteien** in dem Vertrag identifiziert, dem diese Servicevereinbarung beigefügt ist.

Die nachstehend in dieser Servicevereinbarung verwendeten Ausdrücke sind gemäß den ihnen nachstehend zugewiesenen Definitionen auszulegen:

- **Änderung:** Jede Hinzufügung, Änderung oder Löschung, die den Dienst betrifft und die genehmigt, geplant oder übernommen wurde.

- **Standardänderung:** Eine Änderung, die einem Verfahren folgt, dessen Umsetzungsmodalitäten und Auswirkungen (einschließlich finanzieller) im Voraus von den Parteien bekannt und akzeptiert sind. Sie wird dann in den Katalog der Standardänderungen aufgenommen und kann je nach Fall eine GTI und eine GTR haben.

- **Vertrag:** bezeichnet den Vertrag, den der AUFTRAGGEBER mit dem Dienstleister abgeschlossen hat, um dem AUFTRAGGEBER die Nutzung des Dienstes zu ermöglichen, und dem diese Servicevereinbarung beigefügt ist.

- **Servicevereinbarung:** Dieses Dokument, das im Rahmen eines spezifischen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (AVNB) erstellt wurde, und zwar in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzrahmens.

- **Serviceanfrage:** eine Änderungsanfrage, die einem Verfahren folgt, dessen Durchführung: i) die CMDB nicht ändert, ii) die Vorgehensweise, die Kosten und die Risiken im Voraus bekannt und akzeptiert sind und keine spezifischen Rücknahmemodalitäten erfordern iii) die Durchführung einer Servicelevelvereinbarung unterliegt und in der Vertragsgebühr enthalten ist, wenn sie während der Geschäftszeiten und an Geschäftstagen durchgeführt wird.

- **Verfügbarkeit:** Fähigkeit, die Verfügbarkeit und Aufrechterhaltung der optimalen Serviceleistung gemäß den in den Servicelevelvereinbarungen (SLA) definierten Kriterien und Verpflichtungen zu gewährleisten.

- **Technische Daten**: umfasst alle Daten, die zur Erbringung des Dienstes verarbeitet werden, insbesondere die Identität der Begünstigten und Administratoren der technischen Infrastruktur, Protokolle der technischen Infrastruktur, Zugriffskonfiguration, Verzeichnis, Zertifikate...

- **Ereignis:** Ein "Ereignis" ist jedes erkennbare oder identifizierbare Vorkommnis, das für die Verwaltung des Dienstes wichtig sein kann.

- **Hypervisor:** Betriebssystem, das die Ausführung virtueller Maschinen auf einer Recheneinheit ermöglicht.

- **Vorfall:** Jedes unvorhergesehene Ereignis, das den normalen Betrieb des Dienstes stört oder die Sicherheit der Daten gefährdet.

- **Sicherheitsvorfall:** Jedes Ereignis im Rahmen des Dienstes:

  - Von absichtlich böswilliger Natur;
  - Von versehentlicher Natur, die die Integrität, Vertraulichkeit oder Nachvollziehbarkeit des Dienstes oder der Daten des AUFTRAGGEBERS beeinträchtigt;
  - Die bestehende Sicherheitsmaßnahmen beeinträchtigt. Verfügbarkeitsbeeinträchtigungen nicht-böswilliger Herkunft werden nicht als Sicherheitsvorfall betrachtet (Hardwareausfall, Bug, Fehlfunktion, Naturkatastrophe...).

- **AUFTRAGGEBER-Schnittstelle:** Vom Dienstleister dem AUFTRAGGEBER zur Verfügung gestellte Administrationsoberfläche des Dienstes, die eine Web-Administrationskonsole und eine API umfasst.

- **Produktionseinführung:** Administrationsmaßnahme(n) zur Umsetzung der Änderung, wenn diese genehmigt ist (die Änderung im ITIL-Sinne betrifft nur das Änderungsmanagement und nicht ihre Realisierung/Konkretisierung).

- **Problem**: Ursache eines oder mehrerer wiederkehrender Vorfälle, Ursache eines potenziellen Vorfalls (Risikosituation), der eine Analyse und Lösung erfordert, um sein Wiederauftreten zu verhindern.

- **Region:** bezeichnet eine geografisch definierte Gruppe von Cloud-Verfügbarkeitszonen, die Netzwerk-, Rechen- und Speicherdienste bereitstellen, um Latenz, Leistung und lokale regulatorische Konformität zu optimieren.

- **Dienst:** bezeichnet den Bare Metal-Dienst, der sich derzeit in der SecNumCloud-Qualifizierung befindet und vom Dienstleister an den AUFTRAGGEBER von technischen Infrastrukturen geliefert wird, die vom Dienstleister gewartet werden, wie im Abschnitt "Servicebeschreibung" dieser Servicevereinbarung beschrieben.

- **Katastrophe:** bezeichnet ein schwerwiegendes Ereignis natürlichen oder menschlichen Ursprungs, zufällig oder absichtlich, das erhebliche Verluste und Schäden für die betroffene Partei verursacht.

- **Überwachung:** Überwachung eines Informationssystems oder eines Dienstes, die die Sammlung verschiedener Daten wie Messungen und Alarme umfasst. Diese Tätigkeit beschränkt sich auf Beobachtung und Überwachung, ohne direkt in die überwachten Elemente einzugreifen, ein Vorrecht, das den Verwaltungsoperationen vorbehalten ist.

- **Tenant:** Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe vorbehalten ist, die eine gemeinsame Infrastruktur teilen, während die Unabhängigkeit und Sicherheit von Daten und Anwendungen gewahrt bleibt.

- **Verfügbarkeitszone (AZ):** Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der entwickelt wurde, um hohe Verfügbarkeit und Widerstandsfähigkeit der Dienste durch geografische Verteilung der Ressourcen zu gewährleisten.

# 4. Akronyme

  --------------------------------------------------------------------------------------------------------
  **Akronym**    **Definition**
  -------------- -----------------------------------------------------------------------------------------
  **CAB**        Change Advisory Board -- Beratungsausschuss für Änderungen

  **CMDB**       Configuration Management Database -- Konfigurationsmanagement-Datenbank

  **COPIL**      Lenkungsausschuss

  **COSTRAT**    Strategischer Ausschuss

  **COPROJ**     Projektausschuss

  **DB**         Database (Datenbank)

  **DPA**        Data Protection Agreement (Datenschutzvereinbarung)

  **DRP**        Disaster Recovery Plan (Notfallwiederherstellungsplan)

  **GTE**        Garantierte Eskalationszeit

  **GTI**        Garantierte Interventionszeit

  **GTR**        Garantierte Lösungszeit

  **ITIL**       Information Technology Infrastructure Library - Bewährte Praktiken für IT-Management

  **IaaS**       Infrastructure as a Service

  **MCO**        Betriebliche Wartung

  **MOA**        Projekteignerschaft

  **MOE**        Projektmanagement

  **MSP**        Managed Services Provider

  **OS**         Operating system (Betriebssystem)

  **PAQ**        Qualitätssicherungsplan

  **PaaS**       Platform as a Service

  **PAS**        Sicherheitsgewährleistungsplan

  **PASSI**      Dienstleister für Informationssystemsicherheitsaudits

  **RFC**        Request For Change -- Änderungsantrag

  **DSGVO**      Datenschutz-Grundverordnung

  **RPO**        Recovery Point Objective -- Aktualität der wiederhergestellten Daten im Katastrophenfall

  **RTO**        Recovery Time Objective -- Wiederherstellungszeit des Dienstes im Katastrophenfall

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Servicelevelvereinbarung

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Drittanwendungswartung

  **UO**         Arbeitseinheit

  **VABE**       Validierung der Eignung für gute Betriebsfähigkeit

  **VABF**       Validierung der Eignung für gute Funktionalität

  **VM**         Virtual Machine (Virtuelle Maschine)

**VSR**        Regelmäßige Servicevalidierung
  --------------------------------------------------------------------------------------------------------

# 5. Zweck dieser Servicevereinbarung

Diese Servicevereinbarung legt die Bedingungen fest, unter denen der Dienstleister sich verpflichtet, den Dienst für den AUFTRAGGEBER zu erbringen. Ihr Zweck ist es:

- Die vom AUFTRAGGEBER erwarteten Leistungsanforderungen in Bezug auf Funktionalität und Zuverlässigkeit des Dienstes zu präzisieren;

- Die Verpflichtungen des Dienstleisters zur Erfüllung der vereinbarten Servicelevel darzulegen;

- Die speziell für den erbrachten Dienst geltenden regulatorischen Normen zu identifizieren;

- Eine Einheitlichkeit und Integrität bei der Bewertung der Servicequalität zu gewährleisten;

- Die Exzellenz der erbrachten Dienstleistungen zu garantieren, die anhand quantitativer Leistungsindikatoren bewertet wird.

Es wird festgelegt, dass für den Fall, dass dem Dienstleister seine SecNumCloud-Qualifikation entzogen wird, der Vertrag vom AUFTRAGGEBER ohne Vertragsstrafen fristlos gekündigt werden kann. In einem solchen Fall verpflichtet sich der Dienstleister, den AUFTRAGGEBER über diese Disqualifizierung durch Zusendung einer offiziellen Mitteilung per Einschreiben mit Rückschein zu informieren.

Es ist zu beachten, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Widerruf der ursprünglichen Qualifikation interpretiert wird.

# 6. Audit

Der Dienstleister verpflichtet sich, dem AUFTRAGGEBER oder einem von diesem benannten Drittprüfer, der kein Konkurrent des Dienstleisters ist, Einsicht in alle Dokumente zu gewähren, die für den Nachweis der vollständigen Einhaltung der Verpflichtungen im Zusammenhang mit der Einhaltung der Bestimmungen von Artikel 28 der Datenschutz-Grundverordnung (DSGVO) erforderlich sind, und erleichtert so die Durchführung von Audits.

Mit der Annahme dieser Servicevereinbarung erteilt der AUFTRAGGEBER ausdrücklich seine Genehmigung für:

1. Die Nationale Agentur für Informationssystemsicherheit (ANSSI) sowie die zuständige Qualifizierungsstelle zur Überprüfung der Konformität des Dienstes und seines Informationssystems mit dem SecNumCloud-Referenzrahmen.
2. Einen Dienstleister für Informationssystemsicherheitsaudits, der ordnungsgemäß als PASSI qualifiziert und ausdrücklich vom Dienstleister benannt wurde, um Sicherheitsaudits des Dienstes durchzuführen.

# 7. Servicebeschreibung

## 7.1. Modell der geteilten Verantwortung

Der vom Dienstleister angebotene Dienst zeichnet sich durch die Bereitstellung der folgenden Leistungen aus, die dem im SecNumCloud-Referenzrahmen dargestellten Prinzip der geteilten Verantwortung entsprechen:

- Die Bereitstellung von Rechenressourcen (Compute);

- Die Bereitstellung von Speicherplatz;

- Zugang zu Netzwerk- und Internetkonnektivitätsdiensten;

- Zugang zu einer Verwaltungskonsole für bereitgestellte Ressourcen;

Das zwischen dem Dienstleister und dem AUFTRAGGEBER im Rahmen des Dienstes angewandte Modell der geteilten Verantwortung wird in §7.1 dargestellt.

Es wird vereinbart, dass der Dienstleister sein Fachwissen einsetzen wird, um die Dienstleistungen nach den besten professionellen Praktiken und in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzrahmens zu erbringen.

## 7.2. Detaillierte Darstellung des Serviceumfangs

  -----------------------------------------------------------------------------------------------------------------------------------------------
  Compute                 Rechenressource des AUFTRAGGEBER-Tenants
  ----------------------- -----------------------------------------------------------------------------------------------------------------------
  Storage                 Produktionsdaten des AUFTRAGGEBER-Tenants

  Netzwerkinfrastruktur   Netzwerkressource des AUFTRAGGEBER-Tenants

  AUFTRAGGEBER-Konsole    Der Dienst, der dem AUFTRAGGEBER den Zugriff auf seinen Bare Metal-Dienst und dessen Verwaltung über die Konsolenschnittstelle ermöglicht

Support                 Der Supportdienst, der die oben genannten Dienste und nur diese begleitet (\*)
  -----------------------------------------------------------------------------------------------------------------------------------------------

(\*) Innerhalb der Grenzen des SNC-qualifizierten Dienstumfangs und der Verantwortlichkeiten des Dienstleisters in dieser Angelegenheit\_

### 7.2.1. Rechenzentrumsinfrastrukturen

Der Dienst umfasst die Bereitstellung der folgenden Dienste für jede Verfügbarkeitszone, die sich derzeit in der Qualifizierung befinden:

- Rechenzentrumsstandort in Frankreich für die Region FR, der den neuesten technologischen Standards entspricht und ein Resilienzniveau bietet, das dem Tier-3-Niveau des Uptime Institute entspricht oder dieses übertrifft;
- Bereitstellung von technischen Räumen in Rechenzentren, die der Aufnahme der für die Produktion des Dienstes wesentlichen technischen Geräte gewidmet sind, einschließlich Berechnung, Speicherung, Netzwerk, Verkabelung und andere notwendige Komponenten;
- Gesicherte Stromversorgung, die durch zwei getrennte Stromkreise gewährleistet wird und die Kontinuität des Dienstes garantiert;
- Bereitstellung von Klimatisierungsdiensten, die an die Normen und Empfehlungen der Gerätehersteller angepasst sind, um eine optimale Umgebung für technische Geräte zu gewährleisten;
- Kontinuierliche Überwachung und detaillierte Metrologie, die eine präzise Verfolgung und proaktive Verwaltung der Leistung und Sicherheit des bereitgestellten Dienstes ermöglicht.

Der Dienstleister gewährleistet die Bereitstellung fortschrittlicher Branderkennungs- und Löschdienste, die darauf ausgelegt sind, jeden Brandausbruch innerhalb der Einrichtungen effektiv zu identifizieren und zu neutralisieren. Diese Systeme sind wesentlich, um die Sicherheit von Geräten und Daten zu gewährleisten. Sie umfassen hochpräzise Rauchmelder und Löschvorrichtungen, die schnell handeln können, ohne Computerausrüstung zu beschädigen. Dieser Dienst ist entscheidend für die Vorbeugung von Brandrisiken, die Minimierung po
