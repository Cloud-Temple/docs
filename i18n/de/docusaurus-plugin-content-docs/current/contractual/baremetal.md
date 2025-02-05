---
title: Spezifischer Servicevertrag - Bare Metal
---

# 1. SERVICEVERTRAG Bare Metal

  ------------------------------------------------------------------------------------------------------
  **Empfänger :**                       **AUFTRAGGEBER**
  -------------------------------------- ---------------------------------------------------------------
  **Dokumentenreferenz**                CT.AM.JUR.ANX. CdSS-BM - 20250122_v1.0.docx_Tag MM JJJJ - VF

  **Ihre Ansprechpartner**              *Vorname* *Nachname*

                                         Account Manager

                                         E-Mail : *vorname.nachname*\@cloud-temple.com

  **Datum der letzten Aktualisierung**  22/01/2025

  **Datum der vertraglichen Validierung** Tag MM JJJJ
  ------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------
  **Version**   **Datum**     **Aktion**                         **Autor**
  ------------- ------------ ------------------------------------ -----------------
  v1.0          22/01/2025   Initiale Erstellung                 Nicolas BODILIS
  ------------- ------------ ------------------------------------ -----------------
                                                                  

                                                                  

                                                                  
  ---------------------------------------------------------------------------------

# 2. INHALTSVERZEICHNIS

-   [1. **SERVICEVERTRAG Bare**](#Xc3786c07943ae71dec5191b24567a7f31cb6100) Metal
-   [2. **INHALTSVERZEICHNIS**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Vorbemerkungen und Glossar](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Vorbemerkungen](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glossar](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Akronyme](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Zweck des vorliegenden Servicevertrags](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Beschreibung des Service](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Modell der geteilten Verantwortung](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Detaillierte Vorstellung des Serviceumfangs](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Rechenzentrumsinfrastrukturen](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Management-Softwareinfrastruktur des Service](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Recheninfrastrukturen](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Speicherinfrastruktur](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Gesamte Netzwerk-Infrastruktur](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Implementierung von Notfall- oder Geschäftskontinuitätslösungen](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Einschränkungen der Services im qualifizierten Bare Metal Modell](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Managed Services im Betrieb](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Konfiguration der Notfallwiederherstellung](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)

    <!-- -->

    -   [7.4. Implementierung des Service](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Technische Voraussetzungen](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)

    <!-- -->

    -   [7.5. Standort des Service in Frankreich](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Standort der Rechenzentren, die den Service hosten](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Standort der Cloud Temple Niederlassungen, die den Service betreiben](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Support](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Art des Support, der den Service begleitet](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2. Anforderung des technischen Support-Services](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Prozess der Incident-Management](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Priorisierungsprozess der Behandlungen](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Sprache und Standort des Support-Service](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Verpflichtungen und Service Level](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Verfügbarkeitsverpflichtungen der Infrastruktur](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. Verfügbarkeitsverpflichtung der AUFTRAGGEBER-Schnittstelle](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Verfügbarkeitsverpflichtung des Support](#Xfc8548982b300528a67725f1705f15805f405f0)
-   [9. Organisation der Vertragsbeziehung](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Verantwortlichkeiten des Anbieters](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Haftungsbeschränkung des Anbieters](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Zugriffsbeschränkung](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)

[9.4. Verantwortlichkeiten der Dritten, die an der Bereitstellung des Secure Temple-Service beteiligt sind](#Xc662a81cadd2baa300ca83a27240dec61621a56)

-   [9.5. Verantwortlichkeiten und Verpflichtungen des AUFTRAGGEBER](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
-   [9.6. Rechte des AUFTRAGGEBER](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
-   [9.7. Datenlöschung am Ende des Vertrags](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)

<!-- -->

-   [10. Lebenszyklus des vorliegenden Servicevertrags](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Inkrafttreten des Servicevertrags](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Änderungen des Servicevertrags](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Änderungen durch den AUFTRAGGEBER](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Änderungen durch den Anbieter](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Reversibilität](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Verfügbarkeit, Kontinuität und Wiederherstellung des Service](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Incident-Management und Unterbrechungen](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1. Incidents](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Arten von Incidents, die im Rahmen dieses Servicevertrags behandelt werden](#X09cc1e22db275b1a463f85596829f3f871ae224)
            -   [11.1.1.2. Behandlung von Incidents](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
            -   [11.1.1.3. Sicherheitsvorfall-Meldestufe](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
    -   [11.2. Wartung des Service](#X8f50b0b400c67568e380ddb602ac786ec585905)
        -   [11.2.1. Art der Wartung](#X903d92edf16182242ecfd404337edbaf2243b81)
        -   [11.2.2. Remote-Zugriffe von Cloud Temple auf den Umfang des AUFTRAGGEBER](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Remote-Zugriffe von Dritten, die an der Bereitstellung des Service auf den Umfang des AUFTRAGGEBER beteiligt sind](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Verfahren zur Datenlöschung am Ende des Vertrags](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Anwendbares Recht](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. Allgemein](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Einhaltung der geltenden Rechte und Vorschriften](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. DSGVO](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Schutz gegenüber außereuropäischem Recht](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. UNTERSCHRIFTEN](#X7ad993788a708b47017c27c9d96178e8795e44f)

# 3. Vorbemerkungen und Glossar

## 3.1. Vorbemerkungen

Das vorliegende Dokument formalisiert den Servicevertrag für den Bare Metal-Service, der derzeit die SecNumCloud-Qualifizierung durchläuft.

Der Service durchläuft derzeit die SecNumCloud-Qualifizierung (siehe Bescheinigung im Anhang).

Der vorliegende Servicevertrag ergänzt die allgemeinen Geschäftsbedingungen des Anbieters und ist zudem komplementär. Es wird davon ausgegangen, dass die vertraglichen Dokumente in sich kohärent interpretiert werden. Im Falle eines Widerspruchs oder einer Abweichung zwischen den Bedingungen der vertraglichen Dokumente haben die Dokumente wie folgt Vorrang:

1.  Allgemeine Geschäftsbedingungen (AGB)
2.  Servicevertrag SecNumCloud IaaS
3.  Servicevertrag SecNumCloud OpenIaaS
4.  Servicevertrag SecNumCloud PaaS
5.  Spezifischer Servicevertrag - Bare Metal
6.  Spezifischer besonderer Vertrag
7.  Sicherheitsgarantieplan (PAS)
8.  Besondere Nutzungsbedingungen (BNU)
9.  Datenverarbeitungsvereinbarung

## 3.2. Glossar

In dem vorliegenden Servicevertrag sind der **AUFTRAGGEBER**, der **Anbieter** und die **Parteien** im Vertrag identifiziert, dem dieser Servicevertrag angefügt ist.

Die im vorliegenden Servicevertrag verwendeten Ausdrücke werden gemäß den unten definierten Begriffen interpretiert:

-   **Änderung:** Jede Ergänzung, Änderung oder Löschung, die den Service betrifft und die genehmigt, geplant oder übernommen wurde.

-   **Standardänderung:** Änderung, die durch ein Verfahren behandelt wird, dessen Modalitäten der Implementierung und Auswirkungen (einschließlich finanzieller) im Voraus von den Parteien bekannt und akzeptiert sind. Es wird dann in den Standardänderungskatalog aufgenommen und kann je nach Fall eine GTI und eine GTR haben.
-   **Vertrag:** bezeichnet den Vertrag, den der BEAUFTRAGENDER beim Dienstleister abgeschlossen hat, um dem BEAUFTRAGENDER die Nutzung des Dienstes zu ermöglichen, und dem dieser Servicevertrag beigefügt ist.

-   \***Servicevereinbarung:** Dieses Dokument, erstellt im Rahmen eines spezifischen Vertrags oder der Allgemeinen Geschäfts- und Nutzungsbedingungen (AGB), und zwar in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzdokuments.

-   **Service-Anfrage:** Änderungsanfrage, die einem Verfahren unterliegt, deren Umsetzung: i) die CMDB nicht verändert, ii) das operative Vorgehen, die Kosten und die Risiken im Voraus bekannt und akzeptiert sind und keine speziellen Rückgriffsmöglichkeiten erfordern, iii) die Umsetzung einem Service-Level-Agreement unterliegt und im Vertragsentgelt enthalten ist, wenn sie während der Arbeitsstunden an Arbeitstagen durchgeführt wird.

-   **Verfügbarkeit:** Fähigkeit, die Verfügbarkeit und die Aufrechterhaltung optimaler Serviceleistungen zu gewährleisten, in Übereinstimmung mit den in den Service-Level-Agreements (SLA) definierten Kriterien und Verpflichtungen.

-   **Technische Daten:** umfasst alle Daten, die zur Erbringung des Dienstes verarbeitet werden, insbesondere die Identität der Nutznießer und der Administratoren der technischen Infrastruktur, Infrastruktur-Protokolle, Zugangskonfigurationen, Verzeichnisse, Zertifikate...

-   **Ereignis:** Ein "Ereignis" ist jeder erkennbare oder feststellbare Vorfall, der für das Management des Dienstes von Bedeutung sein kann.

-   **Hypervisor:** Betriebssystem, das die Ausführung von virtuellen Maschinen auf einem Rechenknoten ermöglicht.

-   **Vorfall:** Jeder unerwartete Vorfall, der den normalen Betrieb des Dienstes stört oder die Datensicherheit gefährdet.

-   **Sicherheitsvorfall:** Jeder Vorfall im Rahmen des Dienstes:

    -   Der absichtlich bösartiger Natur ist;
    -   Der versehentlich die Integrität, Vertraulichkeit oder Rückverfolgbarkeit des Dienstes oder der Daten des BEAUFTRAGENDER beeinträchtigt;
    -   Der die bestehenden Sicherheitsmaßnahmen beeinträchtigt. Nicht böswillige Verfügbarkeitsbeeinträchtigungen (Hardwareausfall, Bug, Fehlfunktion, Naturkatastrophe usw.) werden nicht als Sicherheitsvorfall angesehen.

-   **BEAUFTRAGENDER-Schnittstelle:** Verwaltungsoberfläche des Dienstes, die dem BEAUFTRAGENDER vom Dienstleister zur Verfügung gestellt wird, einschließlich einer Web-Admin-Konsole und einer API.

-   **Inbetriebnahme:** Verwaltungsaktion(en) zur Umsetzung der Änderung, wenn diese genehmigt wird (die Änderung im Sinne von ITIL betrifft nur das Änderungsmanagement und nicht dessen Durchführung/Implementierung).

-   **Problem:** Ursache eines oder mehrerer wiederkehrender Vorfälle, Ursache eines potenziellen Vorfalls (Risikosituation), der einer Analyse und Lösung bedarf, um eine Wiederholung zu verhindern.

-   **Region:** Bezeichnet einen geografisch abgegrenzten Bereich von Cloud-Verfügbarkeitszonen, der Netzwerk-, Rechen- und Speicherdienste bereitstellt, um Latenz, Leistung und gesetzliche Compliance lokal zu optimieren.

-   **Dienst:** Bezeichnet den Bare-Metal-Dienst, der im Rahmen der SecNumCloud-Qualifikation an den BEAUFTRAGENDER vom Dienstleister von den vom Dienstleister gepflegten technischen Infrastrukturen bereitgestellt wird, wie in der Rubrik „Dienstbeschreibung“ dieser Servicevereinbarung beschrieben.

-   **Katastrophe:** Bezeichnet ein schwerwiegendes Ereignis natürlichen oder menschlichen, zufälligen oder absichtlichen Ursprungs, das erhebliche Verluste und Schäden bei der geschädigten Partei verursacht.

-   **Überwachung:** Überwachung eines Informationssystems oder eines Dienstes, die die Sammlung verschiedener Daten wie Messungen und Alarme umfasst. Diese Aktivität beschränkt sich auf Beobachtung und Nachverfolgung ohne direkte Eingriffe in die überwachten Elemente, eine Befugnis, die den Verwaltungsaktionen vorbehalten ist.

-   **Mandant:** Eine isolierte Instanz, die einem Benutzer oder einer Gruppe von Benutzern vorbehalten ist und eine gemeinsame Infrastruktur teilt, während Unabhängigkeit und Sicherheit von Daten und Anwendungen gewährleistet werden.

-   **Verfügbarkeitszone (AZ) (Availability Zone):** Ein spezifischer und isolierter Bereich der Cloud-Computing-Infrastruktur, der hohe Verfügbarkeit und Widerstandsfähigkeit der Dienste durch geografische Verteilung der Ressourcen gewährleistet.

# 4. Akronyme

  --------------------------------------------------------------------------------------------------------
  **Akronym**   **Definition**
  -------------- -----------------------------------------------------------------------------------------
  **CAB**        Change Advisory Board -- Beratungsgremium für Änderungen

  **CMDB**       Configuration Management Database -- Konfigurationsmanagement-Datenbank

  **COPIL**      Lenkungsausschuss

  **COSTRAT**    Strategischer Ausschuss

  **COPROJ**     Projektausschuss

  **DB**         Database (Datenbank)
                 
  **DPA**        Data Protection Agreement

  **DRP**        Disaster Recovery Plan (Wiederherstellungsplan)

  **GTE**        Eskalationszeitgarantie

  **GTI**        Eingreifzeitgarantie

  **GTR**        Lösungszeitgarantie

  **ITIL**       Information Technology Infrastructure Library -- Best Practices für IT-Management

  **IaaS**       Infrastructure as a Service

  **MCO**        Betriebsbereitschaftserhaltung 

  **MOA**        Auftraggeber

  **MOE**        Auftragnehmer

  **MSP**        Managed Services Provider

  **OS**         Operating System (Betriebssystem)

  **PAQ**        Qualitätssicherungsplan

  **PaaS**       Platform as a Service

  **PAS**        Sicherheitssicherungsplan

  **PASSI**      Anbieter von Sicherheitsprüfungen für Informationssysteme

  **RFC**        Request For Change -- Änderungsanfrage

  **RGPD**       Datenschutz-Grundverordnung (DSGVO)

  **RPO**        Recovery Point Objective -- Aktualität der wiederhergestellten Daten im Katastrophenfall

  **RTO**        Recovery Time Objective -- Wiederherstellungszeit des Dienstes im Katastrophenfall

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Dienstgütevereinbarung

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Drittanbieter-Anwendungswartung

  **UO**         Leistungseinheit

  **VABE**       Verfassung zur guten Betriebsfähigkeit

  **VABF**       Verfassung zur guten Funktionsfähigkeit

  **VM**         Virtual Machine (Virtuelle Maschine)

  **VSR**        Regelmäßige Servicevalidierung
  --------------------------------------------------------------------------------------------------------

# 5. Zweck dieser Servicevereinbarung

Diese Servicevereinbarung legt die Bedingungen fest, unter denen sich der Dienstleister verpflichtet, den Dienst dem BEAUFTRAGENDER bereitzustellen. Ihr Zweck ist es:

-   Die von dem BEAUFTRAGENDER erwarteten Performance-Anforderungen in Bezug auf Funktionalität und Zuverlässigkeit des Dienstes festzulegen;

-   Die Verpflichtungen des Dienstleisters darzulegen, um die vereinbarten Service-Level einzuhalten;

-   Die speziell auf den erbrachten Dienst anwendbaren regulatorischen Standards zu identifizieren;

-   Einheitlichkeit und Integrität bei der Bewertung der Dienstqualität sicherzustellen;

-   Exzellenz der erbrachten Dienstleistungen zu garantieren, bewertet durch quantitative Leistungsindikatoren.

Es wird vereinbart, dass im Falle eines Entzugs der SecNumCloud-Qualifikation des Dienstleisters der Vertrag von dem BEAUFTRAGENDER von Rechts wegen ohne Strafen gekündigt werden kann. In einem solchen Fall verpflichtet sich der Dienstleister, den BEAUFTRAGENDER über diese Aberkennung durch die Zustellung einer offiziellen Mitteilung per Einschreiben mit Rückschein zu informieren.

Es ist zu beachten, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Entziehung der ursprünglichen Qualifikation angesehen wird.

# 6. Audit

Der Dienstleister verpflichtet sich, dem BEAUFTRAGENDER oder jedem vom Dienstleister bestimmten, nicht konkurrierenden Drittprüfer den Zugang zu allen Dokumenten zu gewähren, die zur Bescheinigung der vollständigen Einhaltung der Verpflichtungen gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) erforderlich sind, damit Audits durchgeführt werden können.

Mit der Annahme dieser Servicevereinbarung erteilt der BEAUFTRAGENDER seine ausdrückliche Zustimmung zu:

1.  Der Nationalen Agentur für die Sicherheit der Informationssysteme (ANSSI) sowie der zuständigen Zertifizierungsbehörde zur Überprüfung der Konformität des Dienstes und seines Informationssystems mit dem SecNumCloud-Referenzdokument.
2.  Einem qualifizierten Anbieter von Sicherheitsprüfungen für Informationssysteme (PASSI) und ausdrücklich vom Dienstleister benannten, um Sicherheitsprüfungen des Dienstes durchzuführen.

# 7. Beschreibung des Dienstes

## 7.1. Modell der geteilten Verantwortlichkeit

Der vom Dienstleister angebotene Dienst zeichnet sich durch die Bereitstellung der folgenden Leistungen aus, die sich nach dem Prinzip der geteilten Verantwortlichkeit im SecNumCloud-Referenzmodell richten:

-   Die Bereitstellung von Rechenressourcen (compute);

-   Die Bereitstellung von Speicherplätzen;

-   Der Zugang zu Netzwerk- und Internetanbindungsdiensten;

-   Der Zugang zu einer Verwaltungsoberfläche für die bereitgestellten Ressourcen.

Das Modell der geteilten Verantwortlichkeiten, das zwischen dem Dienstleister und dem BEAUFTRAGENDER im Rahmen des Dienstes angewendet wird, ist in §7.1 dargestellt.

Es wird davon ausgegangen, dass der Dienstleister sein Fachwissen einsetzen wird, um die Leistungen gemäß den besten beruflichen Praktiken und den Anforderungen des SecNumCloud-Referenzdokumentes zu erbringen.
## 7.2. Detaillierte Darstellung des Serviceumfangs

  -----------------------------------------------------------------------------------------------------------------------------------------------
  Compute                 Rechenressource des Auftraggebers
  ----------------------- -----------------------------------------------------------------------------------------------------------------------
  Storage                 Produktionsdaten des Auftraggebers

  Netzwerkinfrastruktur   Netzwerkressource des Auftraggebers

  Auftraggeber-Konsole    Der Dienst, der dem Auftraggeber den Zugang zu seinem Bare-Metal-Dienst und dessen Verwaltung über die Konsole ermöglicht

  Support                 Der Supportdienst, der die vorherigen Dienste und nur diese (\*) unterstützt
  -----------------------------------------------------------------------------------------------------------------------------------------------

(\*) Im Rahmen des qualifizierten Serviceumfangs SNC und der diesbezüglichen Verantwortlichkeiten des Dienstleisters\_

### 7.2.1. Datacenter-Infrastrukturen

Der Dienst umfasst die Bereitstellung der nachstehend qualifizierenden Leistungen für jede Verfügbarkeitszone:

-   Ein in Frankreich gelegenes Datacenter für die Region FR, das den neuesten technologischen Standards entspricht und ein Resilienzniveau bietet, das dem Tier-3-Niveau des Uptime Institute entspricht oder dieses übertrifft;
-   Bereitstellung technischer Räume innerhalb von Datacentern, die der Aufnahme der für die Dienstproduktion erforderlichen technischen Geräte dienen, einschließlich Rechnen, Speicherung, Netzwerk, Verkabelung und anderer notwendiger Komponenten;
-   Gesicherte Stromversorgung durch zwei getrennte Stromkreise, die eine Dienstkontinuität gewährleisten;
-   Bereitstellung von Kühlungsdiensten, die den Normen und Empfehlungen der Gerätehersteller entsprechen, um ein optimales Umfeld für die technischen Geräte zu gewährleisten;
-   Ständige Überwachung und detaillierte Metrik, die eine präzise Nachverfolgung und proaktive Verwaltung der Dienstleistung und deren Sicherheit ermöglichen.

Der Dienstleister stellt fortschrittliche Branddetektions- und Löschsysteme zur Verfügung, die entwickelt wurden, um Brände innerhalb der Anlagen effektiv zu erkennen und zu löschen. Diese Systeme sind unerlässlich, um die Sicherheit der Geräte und Daten sicherzustellen. Sie umfassen hochpräzise Rauchmelder und Löschvorrichtungen, die schnell agieren können, ohne die IT-Geräte zu beschädigen. Dieser Dienst ist entscheidend, um Brandrisiken zu minimieren, potenzielle Schäden zu reduzieren und die Betriebsfortführung zu gewährleisten.

Der Auftraggeber wird darüber informiert, dass alle Sicherheitsprozeduren und Maßnahmen, einschließlich der jährlichen Tests der Umschaltung auf Notstromaggregate, unerlässlich sind, um die Kontinuität und Integrität der angebotenen Dienste zu gewährleisten. Diese Praktiken sind darauf ausgelegt, Ausfallrisiken zu minimieren und bei Vorfällen eine optimale Reaktionsfähigkeit sicherzustellen. Durch die Annahme dieser Bedingungen erkennt der Auftraggeber die Bedeutung dieser Maßnahmen an und verpflichtet sich zur umfassenden Zusammenarbeit, um deren Implementierung zu erleichtern. Der Auftraggeber wird außerdem ermutigt, die bereitgestellten Sicherheitsempfehlungen zu berücksichtigen und in seine eigene Risikomanagementstrategie zu integrieren.

### 7.2.2. Softwaregesteuerte Serviceinfrastruktur

Der Dienstleister stellt dem Auftraggeber die Verwaltungskonsole und die API zur Nutzung des Dienstes zur Verfügung. Er verpflichtet sich zudem, diese Verwaltungskonsole und die API in optimalem Betriebszustand zu halten und deren Sicherheit kontinuierlich zu gewährleisten. Diese Verwaltungskonsole und die API werden gemeinsam als „Auftraggeber-Schnittstelle“ bezeichnet.

Der Dienstleister warnt den Auftraggeber davor, dass eine anormale Nutzung der Auftraggeber-Schnittstelle, insbesondere im Falle einer Überlastung ihrer Steuer-APIs (Hammering), automatische Sicherheitsmaßnahmen auslösen kann, die den Zugang zu den Steuer-APIs oder zum Dienst blockieren. Es ist zu betonen, dass diese Situation keine Dienstunverfügbarkeit darstellt, sondern eine Schutzmaßnahme zum Schutz des Dienstes und der Infrastruktur des Dienstleisters; daher kann der Auftraggeber diese nicht als Dienstunverfügbarkeit in seinen Berechnungen berücksichtigen.

Darüber hinaus weist der Dienstleister den Auftraggeber darauf hin, dass identische doppelte Anfragen an seine APIs auf eine pro Sekunde begrenzt sind (Throttling). Sollte der Auftraggeber identische Anfragen mit einer höheren Frequenz einreichen, kann deren Ablehnung nicht als Dienstunverfügbarkeit interpretiert werden.

### 7.2.3. Recheninfrastrukturen

Der Dienst umfasst die Bereitstellung der notwendigen Geräte zur Ausführung von Workloads in Form von virtuellen Maschinen in den vom Auftraggeber gebuchten Verfügbarkeitszonen.

Dies beinhaltet:

-   Bereitstellung der technischen Chassis, die für das ordnungsgemäße Funktionieren der Compute-Blades erforderlich sind;
-   Bereitstellung der Compute-Blades in den vom Auftraggeber festgelegten Mengen und verteilt auf die von ihm gewählten Verfügbarkeitszonen. Es sei darauf hingewiesen, dass diese Compute-Blades ausschließlich dem Auftraggeber vorbehalten sind;
-   Bereitstellung einer KVM-Konsole zur Verwaltung der Rechenressource

Die Auswahl des Compute-Blade-Modells aus dem Katalog des Dienstleisters liegt in der Verantwortung des Auftraggebers.

### 7.2.4. Speicherinfrastruktur

Der Dienst umfasst die Bereitstellung einer geteilten SAN-Speicherinfrastruktur (Storage Area Network) an den Auftraggeber, die verschiedene Leistungsniveaus bietet. Dieser Dienst beinhaltet:

-   Implementierung und Aufrechterhaltung des dedizierten SAN-Netzwerks in Betriebs- und Sicherheitszustand;
-   Installation und Verwaltung der zwischen den Kunden geteilten Speicherarrays, einschließlich deren Betriebs- und Sicherheitszustand, Überwachung und Metrik;
-   Implementierung automatisierter Systeme zur Zuweisung von LUNs (Logical Unit Numbers) zur Nutzung durch den Auftraggeber entsprechend den vom Auftraggeber abonnierten Volumina.

### 7.2.5. Globale Netzwerkinfrastruktur

Im Rahmen des Dienstes stellt der Dienstleister ein globales Netzwerk bereit, das dem Auftraggeber den Zugang zu seinen gehosteten Systemen erleichtert. Dieser Dienst umfasst:

-   Bereitstellung, Aufrechterhaltung und Sicherung aller Glasfaserkabelverbindungen zwischen den verschiedenen Verfügbarkeitszonen;

-   Bereitstellung, Aufrechterhaltung und Sicherung der technischen Geräte, die für das ordnungsgemäße Funktionieren des Netzwerks und die Isolation der verschiedenen Kunden erforderlich sind.

Die Netzwerkverbindung des Auftraggebers, zu Internet oder privaten Netzwerken, sowie Netzwerkausrüstungen, Provider-Verbindungen und andere technische Komponenten, die diese Verbindung herstellen, sind nicht Teil des Serviceumfangs. Diese Netzwerkverbindung wird gemäß den im Vertrag festgelegten Bestimmungen umgesetzt.

### 7.2.6. Umsetzung von Disaster-Recovery- oder Business-Continuity-Lösungen

Der Dienstleister stellt dem Auftraggeber alle technischen Lösungen zur Verfügung, die für eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen erforderlich sind. Es liegt in der Verantwortung des Auftraggebers, diese Ressourcenverteilung effektiv zu verwalten, für die er die vom Dienstleister bereitgestellten Tools nutzen kann.

## 7.3. Einschränkungen der Dienstleistungen im qualifizierten Bare-Metal-Modell

### 7.3.1. Managed Services im RUN

Es ist wichtig zu beachten, dass aus dem Dienst ausgeschlossen sind:

-   Hosting physischer Komponenten des Auftraggebers;

-   Netzwerkverbindung des Auftraggebers, zu Internet oder privaten Netzwerken, einschließlich der Provider-Verbindungen;

-   Jeder Managed Service oder TMA;

-   Jegliche Unterstützung bei den installierten Betriebssystemen und darüber hinaus in der Verantwortungsstapel, selbst wenn es sich nur um einfache Überwachung handelt.

Es ist jedoch nicht ausgeschlossen, dass der Auftraggeber solche Dienste über das MSP-Angebot des Dienstleisters in Anspruch nimmt, um Managed Services in seinen Tenants zu implementieren. Diese Dienste werden dann nicht von dieser Servicevereinbarung und ihren bilateralen Verpflichtungen/Klauseln abgedeckt.

### 7.3.2. Konfigurationssicherung

Der Dienstleister stellt standardmäßig die Einrichtung der Bare-Metal-Ressourcen dem Auftraggeber bereit, indem er Ressourcen reserviert und die Deployments konfiguriert, um die Verfügbarkeitszonen zu nutzen. Es liegt in der Verantwortung des Auftraggebers, die Verfügbarkeitszonen über die Auftraggeber-Schnittstelle auszuwählen.

## 7.4. Umsetzung der Dienstleistung

### 7.4.1. Technische Voraussetzungen

Für die Umsetzung der Dienstleistung erkennt der Auftraggeber an, dass er:

-   Feste IP-Adressen deklarieren muss, von denen aus der Dienstleister den Zugang zur Auftraggeber-Schnittstelle zulässt (Whitelist-Filterung). Änderungen dieser IP-Liste müssen über das dafür bestimmte Menü in der Konsole oder über Serviceanfragen für nachträgliche Änderungen erfolgen. Zu Beginn der Dienstleistung wird der Dienstleister mindestens über eine IP-Adresse gemäß Beschreibung informiert sein.

## 7.5. Standort des Dienstes in Frankreich

Es wird klargestellt, dass keine der Operationen und keine der physischen Komponenten, die an der Bereitstellung des Dienstes beteiligt sind, auf die sich diese Servicevereinbarung bezieht, außerhalb der Europäischen Union ansässig sind.
Cela inclut notamment le support, la supervision opérationnelle et la supervision de sécurité (SOC) de l'infrastructure technique délivrant le Service. De fait, tout le stockage, toutes les tâches d'administration, de supervision et tous les traitements sont réalisés en France.

### 7.5.1. Localisation des Datacenters hébergeant le Service

A défaut des opérations des collaborateurs et des agences du Prestataire, l'ensemble des opérations de production (comprenant le stockage et le traitement des données) et composants techniques délivrant le Service sont situés dans les Datacenters basés en France.

### 7.5.2. Localisation des agences Cloud Temple opérant le service

Les collaborateurs de Cloud Temple intervenant sur le périmètre du Service opèrent depuis les agences de Cloud Temple toutes situées exclusivement en France. Ces agences sont situées en France, à Tours, Lyon, Caen et Paris La Défense.

Le COMMANDITAIRE est informé de la possibilité des salariés de Cloud Temple de travailler à distance. Toutefois, le Prestataire garantit le même niveau de sécurité concernant les accès à distance, notamment concernant les accès VPN. Ces accès distants sont mis en œuvre conformément aux exigences du référentiel SecNumCloud.

## 7.6. Support

### 7.6.1. Nature du support accompagnant le service

Le Prestataire fournit un service de support technique visant à assister le COMMANDITAIRE dans la gestion, le dépannage et l'optimisation de leurs ressources déployées. Ce service couvre une gamme étendue d'activités, depuis l'aide à la configuration initiale des services jusqu'au soutien technique avancé pour résoudre des problèmes spécifiques.

Voici une description des caractéristiques et fonctionnalités du service de support :

-   Assistance à la mise en œuvre initiale de l'utilisation du Service ;
-   Assistance à la résolution d'incidents ;
-   Assistance à la résolution de problèmes ;
-   Suivi et conseil sur l'optimisation du socle technique.

Dans le cadre du service de support, le Prestataire ne se substitue pas au COMMANDITAIRE dans l'usage du Service. Le COMMANDITAIRE reste entièrement responsable de la configuration, de l'exploitation de ses VM et de ses Tenants, et de la gestion de tous les éléments (données et applications incluses) qu'il a stockés ou installés sur les infrastructures du Prestataire. Le service de support technique est fourni en accord avec les Conditions Générales de Vente et d'Utilisation, le Prestataire étant tenu à une obligation de moyens.

Le COMMANDITAIRE s'engage à utiliser le service de support technique de manière raisonnable, s'abstenant notamment de solliciter des services non souscrits auprès du Prestataire et de faire intervenir les équipes du Prestataire auprès de ses propres clients ou de tiers non inclus dans le Contrat. Le Prestataire se réserve le droit de rejeter toute demande de service ne respectant pas ces critères.

Le niveau d'engagement du support est conditionné à la souscription des unités d'œuvre de support associées.

### 7.6.2. Sollicitation du service support technique

Le support technique est accessible par le biais d'un système de tickets via la console COMMANDITAIRE et est disponible durant les heures normales de bureau, hors jours fériés (8h - 18h ; Lundi -- Vendredi ; calendrier et horaires français). Pour les urgences survenant en dehors des heures ouvrées, notamment les incidents affectant significativement la production, le service d'astreinte peut être joint via un numéro communiqué au COMMANDITAIRE à l'initialisation du Service.

Pour chaque demande ou Incident, il est impératif de générer un ticket auprès du support du Prestataire. L'initialisation de ce ticket, comprenant toutes les informations nécessaires, est essentielle et marque le début de l'évaluation des engagements du Prestataire.

Dès que le Prestataire reçoit une demande ou une notification d'Incident, que ce soit par le biais de la console de gestion ou à la suite d'un appel téléphonique, un ticket est automatiquement créé. Lors de la déclaration d'un Incident, il est essentiel que le COMMANDITAIRE fournisse au prestataire un maximum de détails sur le problème rencontré. Cette démarche est cruciale pour permettre une évaluation adéquate de la situation, sa priorisation et un diagnostic efficace.

Le COMMANDITAIRE reçoit alors une confirmation par courriel, indiquant la création du ticket et son numéro unique. Le COMMANDITAIRE peut consulter le statut et l'historique de ses demandes et déclarations d'Incidents directement depuis la console de gestion.

### 7.6.3. Processus de gestion des Incidents

Lors d'une déclaration d'un Incident, l'équipe de support technique du Prestataire initie une investigation pour identifier la cause du problème et établir un diagnostic. Le COMMANDITAIRE doit collaborer activement avec le Prestataire en fournissant toutes les informations nécessaires et en effectuant les tests requis. Le Prestataire peut accéder au Service du COMMANDITAIRE pour diagnostiquer l'Incident.

Si les Services du Prestataire sont jugés fonctionnels et que l'Incident ne lui est pas imputable, le COMMANDITAIRE en sera informé. À la demande du COMMANDITAIRE, le Prestataire peut proposer des Services Professionnels pour identifier l'origine du problème, facturable sur accord préalable par tranche de 30mn.

Dans le cas où l'Incident est de la responsabilité du Prestataire ou de l'un de ses sous-traitants, celui-ci complète le diagnostic et s'attèle à la restauration du Service sans frais supplémentaires. Le diagnostic s'appuie sur les échanges entre les Parties et les données du Prestataire, ces éléments étant considérés comme probants par accord des Parties.

### 7.6.4. Processus de priorisation des traitements

La détermination du niveau de priorité d'un dossier repose sur une analyse matricielle qui évalue l'impact de l'Incident et son degré de criticité :

-   Les niveaux d'impact sont définis de la manière suivante :

  -----------------------------------------------------------------------------------------------------------------------------------------
  Niveau d'impact   Beschreibung
  ----------------- -----------------------------------------------------------------------------------------------------------------------
  Impact I1         Der oder die Dienste des Prestataires sind unterbrochen

  Impact I2         Der oder die Dienste des Prestataires sind verschlechtert

  Impact I3         Der oder die Dienste des Prestataires sind momentan stabil, zeigen aber Anzeichen eines potenziellen langfristigen Verfalls
  -----------------------------------------------------------------------------------------------------------------------------------------

-   Die Schweregrade sind wie folgt definiert:

  -------------------------------------------------------------------------------------------------------------------------------
  Schweregrad       Beschreibung
  --------------------- ---------------------------------------------------------------------------------------------------------
  Schweregrad C1        Der oder die Dienste des Prestataires verschlechtern sich mit alarmierender Geschwindigkeit

  Schweregrad C2        Der oder die Dienste des Prestataires verschlechtern sich allmählich im Laufe der Zeit

  Schweregrad C3        Der oder die Dienste des Prestataires weisen einen oder mehrere Unannehmlichkeiten ohne signifikante Folgen auf
  -------------------------------------------------------------------------------------------------------------------------------

-   Basierend auf einer gründlichen Analyse der Situation, unter Berücksichtigung der Auswirkungen und Schweregrade, wird dem Ticket eine Priorität gemäß der folgenden Entscheidungsmatrix zugewiesen:

  --------------------------------------------------------------------------------------------
  Niveau d'impact  Schweregrad   Impact I1              Impact I2              Impact I3
  -------------------------------------- ----------------- ----------------- -----------------
  Schweregrad C1                            Priorität **P1**      Priorität **P2**      Priorität **P3**

  Schweregrad C2                            Priorität **P2**      Priorität **P3**      Priorität **P4**

  Schweregrad C3                            Priorität **P3**      Priorität **P4**      Priorität **P5**
  --------------------------------------------------------------------------------------------

Die Service Level Agreements (SLAs) für jedes Prioritätsniveau sind im folgenden Kapitel detailliert.

### 7.6.5. Sprache und Standort des Supportservices

Der Support wird vom Prestataire an den COMMANDITAIRE mindestens in französischer Sprache bereitgestellt. Der Support kann auch in englischer Sprache bereitgestellt werden.

Die Operationen des Support-Dienstes des Prestataires für das qualifizierende SecNumCloud Bare Metal-Angebot befinden sich in der Europäischen Union.

# 8. Engagements et niveaux de services

Der Prestataire verpflichtet sich, die Leistung und die Sicherheit seiner technischen Infrastruktur, die den Dienst liefert, kontinuierlich zu überwachen, um deren optimalen Betrieb zu gewährleisten.

Die Nichtverfügbarkeit eines Dienstes, für den ein Leistungsindikator existiert, wird ab der Identifikation durch das Überwachungssystem des Prestataires oder nach Benachrichtigung durch einen Benutzer des COMMANDITAIRE anerkannt. Der Beginn der Nichtverfügbarkeit wird auf den frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um eine genaue und faire Zählung der Ausfallzeit zu gewährleisten.

Das Ende der Nichtverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, bestätigt entweder durch die Überwachungstools des Prestataires oder durch Benutzerfeedback, um somit eine effektive Wiederaufnahme der Operationen und eine genaue Messung der Unterbrechungsdauer sicherzustellen.

## 8.1. Engagements de disponibilité de l'infrastructure
Leistungserbringer verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau zu halten, das den für jede festgelegte Periode definierten Standards entspricht. Die Service Level Agreements (SLAs) gelten unter der Voraussetzung, dass der Auftraggeber seine Systeme über mindestens zwei der in der betreffenden Region vorhandenen Verfügbarkeitszonen betreibt.

Erfüllt der Auftraggeber diese Bedingungen nicht, kann er die Anwendung der betreffenden SLAs, die mit einem Sternchen (\*) gekennzeichnet sind, nicht beanspruchen. Der Zugang zu den SLAs erfolgt über die Schnittstelle des Auftraggebers. Die Messungen werden monatlich berechnet:

-   \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Verfügbarkeit der Rechenleistung (Compute): garantierte Verfügbarkeit von 99,99%, berechnet auf einer 24/7-Basis.
-   \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Verfügbarkeit des Speichers: garantierte Verfügbarkeit von 99,99%, berechnet auf einer 24/7-Basis.
-   \*\*SLA 3 (\*) : IC-INFRA_SNC-03\*\* -- Verfügbarkeit der Netzwerk-Infrastruktur: garantierte Verfügbarkeit von 99,99%, berechnet auf einer 24/7-Basis.
-   **SLA 4 : IC-INFRA_SNC-04** -- Internetzugang: garantierte Verfügbarkeit von 99,99%, berechnet auf einer 24/7-Basis.

***Anmerkungen***:

-   *Als Antwort auf einen Distributed Denial of Service (DDoS)-Angriff behält sich der Dienstleister das Recht vor, seine Internet-Routing-Konfiguration anzupassen, um die Auswirkungen dieses Angriffs zu begrenzen und seine Infrastruktur zu schützen. Insbesondere, wenn eine dem Auftraggeber gehörende IP-Adresse angegriffen wird, kann der Dienstleister die Blackholing-Technik über die BGP-Community anwenden, um jeglichen Verkehr zur angegriffenen IP-Adresse upstream bei seinen Anbietern zu blockieren, um die Ressourcen des Auftraggebers sowie die anderer Auftraggeber und der Infrastruktur des Dienstleisters zu schützen. Der Dienstleister ermutigt den Auftraggeber dringend, ähnliche Maßnahmen zu ergreifen, wie die Verwendung derzeit verfügbarer Web Application Firewall-Software und die sorgfältige Konfiguration seiner Sicherheitsgruppen über die Befehls-API.*

-   *Der Dienstleister betont die Notwendigkeit, dass der Auftraggeber die Öffnungen des Datenflusses minimiert, insbesondere um die Zugänglichkeit der Administrationsports **SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389) vom gesamten Internet (Subnetz 0.0.0.0/0) sowie interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049) zu vermeiden.*

## 8.2. Verfügbarkeitsverpflichtungen der Auftraggeberschnittstelle

-   SLA 5 : IC-INFRA_SNC-05 -- Zugang zur Verwaltungsoberfläche des Dienstes: garantierte Verfügbarkeit von 97%, fortlaufend, 24 Stunden am Tag und 7 Tage die Woche.
-   SLA 6 : IC-INFRA_SNC-06 -- Zugang zu den Steuerungs-APIs des Dienstes: eine Verfügbarkeit von 99,9%, berechnet auf einer 24/7-Basis.

## 8.3. Verfügbarkeitsverpflichtungen des Supports

-   **SLA 7 : IC-INFRA_SNC-07** -- Hier sind die Leistungsversprechen des technischen Supports des Dienstleisters für Vorfälle, außer geplanten Wartungen:

  ------------------------------------------------------------------------------------
  Priorität          Interventionszeit-Garantie (GTI)           Leistungsziel
  ----------------- ---------------------------------------- -------------------------
  Priorität **P1**   30 Minuten                                      95%

  Priorität **P2**   2 Stunden                                       90%

  Priorität **P3**   4 Stunden                                       90%

  Priorität **P4**   24 Stunden                                      85%

  Priorität **P5**   48 Stunden                                      85%
  ------------------------------------------------------------------------------------

-   **SLA 8 : IC-INFRA_SNC-08** -- Hier sind die Leistungsversprechen des technischen Supports des Dienstleisters für Serviceanfragen:

  ---------------------------------------------------------------------------------------
                       Interventionszeit-Garantie (GTI)           Leistungsziel
  -------------------- ---------------------------------------- -------------------------
  Serviceanfrage       4 Stunden                                       90%

  ---------------------------------------------------------------------------------------

*Hinweis*:

-   *Die Garantie für die Interventionszeit (GTI) wird berechnet als die Zeitdifferenz zwischen dem Zeitpunkt, zu dem der Auftraggeber das Ticket öffnet, und dem Zeitpunkt der ersten Intervention des Supports des Dienstleisters.*
-   *Die Untersuchung von Vorfällen bezüglich der Auftraggeber beinhaltet keine Fernwartung der gehosteten Server des Auftraggebers. Diese Unterstützung beschränkt sich auf die Erläuterung der verfügbaren Metriken in Bezug auf die Umgebung des Auftraggebers, um das Verständnis der aufgetretenen Vorfälle oder Leistungsprobleme zu erleichtern. Basierend auf den Ergebnissen dieser Analyse können Empfehlungen vorgeschlagen werden.*

# 9. Organisation der vertraglichen Beziehung

## 9.1. Verantwortlichkeiten des Dienstleisters

Der Dienstleister verpflichtet sich:

-   den Auftraggeber angemessen zu informieren (beispielsweise bei Kapazitätsbeschränkungen der technischen Ressourcen, die den Dienst liefern).

-   den Auftraggeber formell und innerhalb eines Monats über rechtliche, organisatorische oder technische Änderungen zu informieren, die die Konformität des Dienstes mit den Anforderungen des Schutzes vor außer-europäischen Gesetzen beeinträchtigen könnten (19.6 des SNC v3.2 Referenzmodells).

-   dem Auftraggeber Schnittstellen und Service-Schnittstellen bereitzustellen, die mindestens auf Deutsch sind.

-   die spezifischen branchenspezifischen Anforderungen im Zusammenhang mit den vom Auftraggeber anvertrauten Informationen bei der Umsetzung des Dienstes zu berücksichtigen, soweit die Verantwortlichkeiten des Dienstleisters einerseits und die im Vertrag vorgesehenen Bestimmungen andererseits es zulassen;

-   die spezifischen branchenspezifischen Anforderungen im Zusammenhang mit den vom Auftraggeber anvertrauten Informationen bei der Umsetzung des Dienstes, die später vom Auftraggeber geäußert werden, zu prüfen und dem Auftraggeber die notwendigen Maßnahmen zur Berücksichtigung dieser Anforderungen mitzuteilen;

-   keine Informationen bezüglich der Dienstleistung ohne ausdrückliche und schriftliche Zustimmung des Auftraggebers an Dritte weiterzugeben.

-   alle notwendigen Informationen bereit zu stellen, um die Durchführung von Konformitätsprüfungen gemäß den Bestimmungen von Artikel 28 der DSGVO zu ermöglichen.

-   den Auftraggeber durch diese Service-Vereinbarung über alle Sicherheitsvorfälle zu informieren, die den Dienst oder die Nutzung des Dienstes durch den Auftraggeber (einschließlich der Daten des Auftraggebers) betreffen.

-   einen qualifizierten Anbieter von Audits für die Informationssicherheitssysteme (PASSI), der vom Dienstleister beauftragt wird, zu autorisieren, den Dienst sowie sein Informationssystem zu auditieren, gemäß dem Kontrollplan des Dienstleisters nach SecNumCloud. Darüber hinaus verpflichtet sich der Dienstleister, alle notwendigen Informationen bereitzustellen, um die Durchführung von Konformitätsprüfungen gemäß Artikel 28 der DSGVO zu gewährleisten, durchgeführt durch den Auftraggeber oder einen beauftragten Dritten.

-   als Auftragsverarbeiter gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) dem Auftraggeber Unterstützung und Beratung zu leisten, indem er ihn benachrichtigt, sobald eine von letzterem erteilte Anweisung einen Verstoß gegen die Datenschutzbestimmungen darstellen könnte.

-   den Auftraggeber innerhalb einer angemessenen Frist über die Auftraggeberkonsole oder per E-Mail an den Auftraggeberkontakt zu benachrichtigen, wenn ein Projekt die Sicherheitsstufe oder die Verfügbarkeit des Dienstes beeinträchtigt oder beeinträchtigen könnte, oder zu einem Funktionsverlust führt, die potenziellen Auswirkungen, die ergriffenen Abmilderungsmaßnahmen sowie die verbleibenden Risiken, die ihn betreffen.

-   alle notwendigen Verfahren zu dokumentieren und zu implementieren, um die gesetzlichen, regulatorischen und vertraglichen Anforderungen, die für den Dienst gelten, sowie die spezifischen Sicherheitsanforderungen des Auftraggebers, die von diesem festgelegt und im Vertrag vorgesehen sind, zu erfüllen.

-   die Daten des Auftraggebers aus der Produktion nicht für Tests zu verwenden, es sei denn, eine ausdrückliche Genehmigung des Auftraggebers liegt vor, in welchem Fall der Dienstleister sich verpflichtet, diese Daten zu anonymisieren und deren Vertraulichkeit während der Anonymisierung zu gewährleisten.

-   die Daten und technischen Daten im Zusammenhang mit dem Auftraggeber gemäß dem in dieser Service-Vereinbarung beschriebenen „Datenlöschverfahren am Ende des Vertrages“ zu löschen, bei Vertragsende oder Kündigung.

-   eine sichere Löschung aller Daten des Auftraggebers durch vollständiges Überschreiben aller Medien, die seine Daten im Rahmen des Dienstes gehostet haben, zu gewährleisten.

Auf ausdrückliche und schriftliche Anfrage des Auftraggebers verpflichtet sich der Dienstleister:

1.  Dem Auftraggeber die Hausordnung und die Ethik-Charta des Dienstleisters zugänglich zu machen;

2.  Dem Auftraggeber die Sanktionen zugänglich zu machen, die im Falle eines Verstoßes gegen die Sicherheitsrichtlinie verhängt werden;

3.  Dem Auftraggeber alle ihn betreffenden Ereignisse in den Logging-Elementen des Dienstes zur Verfügung zu stellen; der Auftraggeber kann ferner eigenständig die Ereignisse in Bezug auf seine Nutzung des Dienstes über die Webschnittstellen und APIs des Dienstes einsehen;

4.  Dem Auftraggeber die Verfahren zur Einhaltung der geltenden gesetzlichen, regulatorischen und vertraglichen Anforderungen, die für den Dienst gelten, sowie die spezifischen Sicherheitsanforderungen des Auftraggebers gemäß Vertrag zugänglich zu machen;


5. Bereitstellung der Risikobewertungsdaten in Bezug auf die Übermittlung von Daten des AUFTRAGGEBERS an ein Nicht-EU-Land;

6. Benachrichtigung des AUFTRAGGEBERS über nachfolgende Subunternehmer, die am Service beteiligt sind, und Information über alle Änderungen, die diese Subunternehmer betreffen.

> Der Dienstleister und alle seine Tochtergesellschaften verpflichten sich, die Grundwerte der Europäischen Union zu respektieren, nämlich die Achtung der Menschenwürde, Freiheit, Demokratie, Gleichheit, Rechtsstaatlichkeit sowie die Achtung der Menschenrechte. Der vom Dienstleister angebotene Service entspricht der geltenden Gesetzgebung zu Grundrechten und den Werten der Europäischen Union in Bezug auf die Achtung der Menschenwürde, Freiheit, Gleichheit, Demokratie und Rechtsstaatlichkeit.

## 9.2. Haftungsbeschränkung des Dienstleisters

Aufgrund aller im vorliegenden Servicevertrag genannten Definitionen und Bedingungen sind die Verantwortlichkeiten des Dienstleisters wie folgt beschränkt:

1. Das Modell der geteilten Verantwortung, beschrieben im Abschnitt «Modell der geteilten Verantwortung» dieses Servicevertrags, begrenzt tatsächlich die Einbindung des Dienstleisters in die Betriebsschichten, die „oberhalb“ der Bereitstellung von Rechen-, Netz-, Speicher- und Sicherungsressourcen liegen. Dies schließt insbesondere, aber nicht ausschließlich aus:

    - Die Verwaltung dessen, was auf den virtuellen Maschinen installiert ist (Betriebssysteme, Middleware, Anwendungen usw.);
    - Die Aktualisierung der Betriebssysteme und anderer Software, die vom AUFTRAGGEBER auf seinen Maschinen in seinen Mandanten installiert werden;
    - Die Sicherheit von Programmen, Software und Anwendungen auf den virtuellen Maschinen;
    - Die Aktualisierung der virtuellen Maschinen;
    - Die Sicherung von Anwendungsdaten.

2. Der Dienstleister kann nicht Eigentum an den vom AUFTRAGGEBER übermittelten und generierten Daten beanspruchen. Diese gehören nämlich dem AUFTRAGGEBER.

3. Der Dienstleister betont, dass er die vom AUFTRAGGEBER übermittelten und generierten Daten in keinem Fall ohne vorherige Genehmigung des AUFTRAGGEBERS nutzen und/oder darüber verfügen kann, wobei davon ausgegangen wird, dass deren Verfügung dem AUFTRAGGEBER vorbehalten ist.

4. Der Dienstleister lehnt jede Verantwortung für die physisch vom Dienstleister gehosteten und verwalteten, aber im direkten Eigentum des AUFTRAGGEBERS oder eines Dritten befindlichen Komponenten ab, mit dem der AUFTRAGGEBER einen Vertrag abgeschlossen hat. Das Hosting physischer Komponenten der Kunden ist nicht Bestandteil des Service und liegt daher außerhalb des Geltungsbereichs dieses Servicevertrags. Es liegt in der Verantwortung des AUFTRAGGEBERS, das Maß der Abhängigkeit oder das Verhältnis, das diese Komponenten gegenüber dem Bare-Metal-Service gemäß SecNumCloud-Qualifikationslauf beeinflussen können, zu bewerten.

## 9.3. Zugangsbeschränkung

Im Rahmen des Dienstes ist es dem Dienstleister formell untersagt, ohne vorherige Genehmigung auf die vom AUFTRAGGEBER verwalteten Mandanten zuzugreifen. Es liegt in der Verantwortung des AUFTRAGGEBERS, die erforderlichen Zugänge für das Personal des Dienstleisters bereitzustellen, je nach den spezifischen Bedürfnissen des Hostings und gegebenenfalls der professionellen Supportdienste, falls diese Option vom AUFTRAGGEBER gewählt wurde.

Der AUFTRAGGEBER erkennt an, dass diese Zugänge ausschließlich für die zur Erbringung der vereinbarten Dienstleistungen erforderlichen Zwecke gewährt werden und somit eine sichere und den Vertragsbedingungen entsprechende Verwaltung gewährleisten.

Der Fernzugriff durch Dritte, die in die Erbringung des Dienstes durch den Dienstleister eingebunden sind, ist strikt untersagt. Sollte ein spezifischer technischer Bedarf einen solchen Zugriff erfordern, kann dieser nur nach ausdrücklicher Benachrichtigung des AUFTRAGGEBERS, Bereitstellung einer detaillierten Begründung und Erhalt der schriftlichen Einverständniserklärung erfolgen.

Diese Maßnahme gewährleistet die Kontrolle und Sicherheit der Daten des AUFTRAGGEBERS, indem sichergestellt wird, dass jede Ausnahme von der Regel ordnungsgemäß genehmigt und dokumentiert ist.

## 9.4. Verantwortlichkeiten der an der Serviceerbringung beteiligten Dritten

Der Dienstleister kontrolliert die Liste der an der Servicebereitstellung beteiligten Partner-Dritten. Diese Dritten sind Herausgeber, Dienstleister (des Dienstleisters) und andere Anbieter, die an der Servicebereitstellung beteiligt sind. Der Dienstleister wendet die folgenden Maßnahmen bei diesen Dritten an:

- Der Dienstleister verlangt von den an der Serviceimplementierung beteiligten Dritten, die an der Serviceerbringung teilnehmen, ein Sicherheitsniveau, das mindestens dem entspricht, was der Dienstleister in seinen eigenen Sicherheitsrichtlinien für den Service aufrechterhält;

- Der Dienstleister schließt mit jedem an der Serviceimplementierung beteiligten Dritten Vertragsklauseln, die es einem Qualifizierungsorgan ermöglichen, zu überprüfen, ob diese Dritten die gesetzlichen Anforderungen und die SNC-Anforderungen einhalten und dem Dienstleister somit die Einhaltung seiner Verpflichtungen dieses Servicevertrags ermöglichen;

- Der Dienstleister führt eine Verfahren ein, um regelmäßig die von den an der Serviceimplementierung beteiligten Dritten eingeführten Maßnahmen zur Einhaltung der Anforderungen zu überprüfen, die es dem Dienstleister ermöglichen, seine Verpflichtungen dieses Servicevertrags einzuhalten;

- Der Dienstleister überwacht Änderungen, die von den an der Serviceimplementierung beteiligten Dritten vorgenommen werden und die die Sicherheit des Informationssystems des Dienstes beeinträchtigen können.

## 9.5. Verantwortlichkeiten und Pflichten des AUFTRAGGEBERS

Der AUFTRAGGEBER hat im Rahmen des Dienstes folgende Pflichten:

- Zur Erinnerung, der Dienstleister stellt dem AUFTRAGGEBER eine Rechenplattform (Server ohne Betriebssystem) zur Verfügung, deren Konfiguration in der Verantwortung des AUFTRAGGEBERS liegt.

- Der AUFTRAGGEBER autorisiert die ANSSI und das Qualifizierungsorgan SNC, den Service und die technische Infrastruktur zur Bereitstellung des Dienstes zu auditieren.

- Der AUFTRAGGEBER ist dafür verantwortlich, den Dienstleister über eventuelle spezifische Anforderungen des Sektors hinsichtlich der vom AUFTRAGGEBER anvertrauten Informationen zu informieren, die erfordert werden müssen.

- Der AUFTRAGGEBER akzeptiert, keine Anforderungen oder Maßnahmen vom Dienstleister zu fordern, die den Dienstleister von den Anforderungen des aktuellen SecNumCloud-Referenzrahmens abweichen lassen oder das durch Einhaltung der Anforderungen desselben Referenzrahmens etablierte Sicherheitsniveau senken.

## 9.6. Rechte des AUFTRAGGEBERS

Der AUFTRAGGEBER kann jederzeit während der Vertragslaufzeit eine Beschwerde über den qualifizierten Dienst bei der ANSSI einreichen.

Zu jeder Zeit kann der AUFTRAGGEBER vom Dienstleister verlangen, dass ihm die interne Regelung und die Ethik-Charta zugänglich gemacht werden.

## 9.7. Datenlöschung am Ende des Vertrags

Nach Vertragsende, sei es aufgrund seiner Laufzeit oder seiner Kündigung aus irgendeinem Grund, verpflichtet sich der Dienstleister, alle Daten des AUFTRAGGEBERS, einschließlich der technischen Daten, sicher zu löschen. Der Dienstleister stellt dem AUFTRAGGEBER eine formelle Benachrichtigung mit einer Frist von einundzwanzig (21) Kalendertagen zu. Daraufhin werden die Daten des AUFTRAGGEBERS innerhalb einer maximalen Frist von dreißig (30) Tagen nach dieser Benachrichtigung gelöscht.

Um diese Löschung zu bestätigen, wird der Dienstleister dem AUFTRAGGEBER ein Zertifikat über die Datenlöschung ausstellen.

# 10. Lebenszyklus des vorliegenden Servicevertrags

## 10.1. Inkrafttreten des Servicevertrags

Der vorliegende Servicevertrag tritt am Tag seiner Unterzeichnung durch den AUFTRAGGEBER in Kraft.

Die Sammlung, Handhabung, Speicherung und Verarbeitung der Daten im Rahmen des Vorverkaufs, der Implementierung und des Endes des Dienstes erfolgt in Übereinstimmung mit den geltenden Gesetzen.

## 10.2. Änderungen des Servicevertrags

Die Modifikationen oder Ergänzungen des vorliegenden Servicevertrags ergeben sich ausschließlich aus den von den dafür benannten Governance-Gremien formulierten Anfragen. Diese Änderungsvorschläge werden von den Parteien geprüft, die befugt sind, die Aspekte zu bestimmen, die eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede Änderung des Servicevertrags, nach Genehmigung, die die ursprünglich festgelegten finanziellen Bedingungen ändert, die Erstellung und Unterzeichnung eines Nachtrags zum laufenden Vertrag erfordert.

Faktoren, die eine Überprüfung dieses Servicevertrags auslösen können, umfassen unter anderem:

- Änderungen der technischen Infrastruktur, die den Bare-Metal-Dienst liefert;
- Anpassungen der vom Dienstleister bereitgestellten Dienste;
- Veränderungen der eingegangenen Verpflichtungen und der geltenden Sanktionen;
- Organisatorische Umstrukturierungen beim AUFTRAGGEBER oder Dienstleister;
- Erweiterung oder Reduzierung des Anwendungsbereichs des Dienstes.

Das Versionierungs- und Revisionsmanagement des Servicevertrags wird im Vorwort des Dokuments dokumentiert, um die Nachverfolgung zu erleichtern.

### 10.2.1. Vom AUFTRAGGEBER ausgelöste Änderungen

Die Änderungen des Servicevertrags können insbesondere durch Folgendes ausgelöst werden:

- Eine Änderung der vom Dienstleister verwalteten Infrastruktur;
- Eine Änderung der vom Dienstleister implementierten Dienste;
- Eine Veränderung der Service-Level-Verpflichtungen des Dienstleisters.

### 10.2.2. Vom Dienstleister ausgelöste Änderungen

Jede Änderung des Servicevertrags bedarf der Zustimmung des AUFTRAGGEBERS. Es wird verstanden, dass jede genehmigte Änderung oder Ergänzung, die die finanziellen Elemente des Vertrags ändert, die Unterzeichnung eines Nachtrags erforderlich machen kann.

## 10.3. Rückabwicklung

Cloud Temple verpflichtet sich, eine Überarbeitung des vorliegenden Servicevertrags (insbesondere dessen Kündigung) ohne Strafe für den AUFTRAGGEBER im Falle des Verlustes der SecNumCloud-Qualifikation zu ermöglichen.
Die Services beinhalten keine Verpflichtung zur Rückführung (d. h. Unterstützung des AUFTRAGGEBERS bei der Migration seines Systems zu einem anderen Anbieter), mit Ausnahme der Bereitstellung der AUFTRAGBGEBER-Schnittstelle durch den Anbieter, die es dem AUFTRAGGEBER ermöglicht, seine Daten zu sichern und wiederherzustellen, einschließlich der Konfigurationsdaten ihres Informationssystems, über eine der vom AUFTRAGGEBER gewählten technischen Methoden: entweder durch Bereitstellung von Dateien in einem oder mehreren dokumentierten und außerhalb des vom Anbieter bereitgestellten Dienstes nutzbaren Formaten oder durch Einrichtung technischer Schnittstellen, die den Zugriff auf die Daten gemäß einem dokumentierten und nutzbaren Schema (API) ermöglichen.

Der AUFTRAGGEBER, alleiniger Herr seines Systems, muss alles tun, um diesen Vorgang nach Bedarf zu erleichtern (einschließlich der Erstellung einer strikten Dokumentation zu diesem Zweck) und die Erstellung von Rückführungsplänen. Falls der AUFTRAGGEBER eine zusätzliche Dienstleistung benötigt, kann der Anbieter im Rahmen eines spezifischen zu verhandelnden Vertrags eine Beratungsmission zu diesem Zweck vorschlagen.

# 11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes

## 11.1. Management von Vorfällen und Unterbrechungen

### 11.1.1. Vorfälle

#### 11.1.1.1. Arten von Vorfällen, die im Rahmen dieser Servicevereinbarung behandelt werden

-   Schäden;

-   Ausfälle und Störungen;

-   Sicherheitsvorfälle, die die Verfügbarkeit, Vertraulichkeit oder Integrität des Dienstes betreffen.

#### 11.1.1.2. Behandlung von Vorfällen

> Der Anbieter informiert den AUFTRAGGEBER so schnell wie möglich über Vorfälle und Unterbrechungen mittels einer Benachrichtigung in der AUFTRAGGEBER-Konsole oder per E-Mail an den AUFTRAGGEBER-Kontakt. Der Anbieter informiert den AUFTRAGGEBER über die Behandlung des Vorfalls über den Kanal, der zur Benachrichtigung über den Vorfall genutzt wurde, oder über den in der Benachrichtigung des Vorfalls angegebenen Kanal.

#### 11.1.1.3. Benachrichtigungsstufe zu Sicherheitsvorfällen

Der AUFTRAGGEBER ist dafür verantwortlich, die Schweregrade der Sicherheitsvorfälle auszuwählen, über die er informiert werden möchte, beispielsweise durch deren Formalisierung in einem PAS, das auf den Dienst anwendbar ist.

Standardmäßig wird der AUFTRAGGEBER informiert über:

-   Sicherheitsvorfälle mit Einfluss (Einflüsse I1 und I2 gemäß der im Priorisierungsprozess der vorliegenden Dienstvereinbarung definierten Einfluss-Skala);

-   Sicherheitsvorfälle, die die Vertraulichkeit oder Integrität der im Rahmen des Dienstes übermittelten AUFTRAGGEBER-Daten betreffen;

-   Verstöße gegen personenbezogene Daten, für die der AUFTRAGGEBER im Rahmen des Dienstes gemäß Artikel 8 des Anhangs DPA verantwortlich ist;

-   

## 11.2. Wartung des Dienstes

### 11.2.1. Art der Wartung

Verstöße gegen personenbezogene Daten, für die der Anbieter im Rahmen des Dienstes verantwortlich ist und die personenbezogene Daten des AUFTRAGGEBERS beinhalten, gemäß Artikel 8 des Anhangs DPA. Die durchgeführte Wartung besteht aus der Umsetzung von:

-   Dem Plan zur Aufrechterhaltung der Betriebsbereitschaft des Dienstes, um gute Verfügbarkeitsindikatoren zu gewährleisten, wie oben vom Anbieter zugesichert;

-   Dem PCA/PRA-Plan, falls vom AUFTRAGGEBER abgeschlossen, aktiviert je nach Auftreten möglicher Vorfälle.

### 11.2.2. Fernzugriffe von Cloud Temple auf den Bereich des AUFTRAGGEBERS

Dem Anbieter ist im Rahmen der vorliegenden Dienstvereinbarung jeglicher Zugriff auf die Tenants und den Bereich der AUFTRAGGEBER-Schnittstelle untersagt.

Es obliegt dem AUFTRAGGEBER, dem Anbieterpersonal die erforderlichen Zugänge zu gewähren. Der AUFTRAGGEBER erkennt an, dass die Zugänge im Rahmen des Hostings und letztlich der Auslagerung (falls vom AUFTRAGGEBER abgeschlossen) genutzt werden.

### 11.2.3. Fernzugriffe von Dritten, die an der Bereitstellung des Dienstes auf dem Bereich des AUFTRAGGEBERS beteiligt sind

Fernzugriffe von Dritten, die an der Bereitstellung des Dienstes beteiligt sind, sind nicht gestattet.

Sollte ein technischer Bedarf diesen Fall erforderlich machen, würde dieser Art des Zugangs erst nach Benachrichtigung des AUFTRAGGEBERS und dessen schriftlicher Zustimmung realisiert werden.

# 12. Verfahren zur Datenlöschung am Vertragsende

Am Ende des Vertrages, sei es nach Ablauf des Vertrages oder aus jedem anderen Grund, wird der Anbieter die sichere Löschung aller im Rahmen des Dienstes verarbeiteten Daten, einschließlich der technischen Daten des AUFTRAGBGEBERS, sicherstellen. Der Anbieter wird eine formelle Vorankündigung unter Einhaltung einer Frist von einundzwanzig (21) Kalendertagen aussprechen. Die Daten des AUFTRAGGBERS werden innerhalb einer Höchstfrist von dreißig (30) Tagen nach der Benachrichtigung gelöscht. Der Anbieter stellt dem AUFTRAGGEBER ein Datenlöschungszertifikat aus.

# 13. Anwendbares Recht

## 13.1. Im Allgemeinen

Das auf die vorliegende Dienstvereinbarung anwendbare Recht ist französisches Recht.

## 13.2. Einhaltung der anwendbaren Gesetze und Vorschriften

Der Anbieter verpflichtet sich zu folgenden Punkten:

-   Die Identifikation der im Rahmen des Dienstes anwendbaren gesetzlichen und regulatorischen Anforderungen;

-   Die Einhaltung der rechtlichen und regulatorischen Anforderungen für die dem Anbieter anvertrauten Daten im Rahmen seiner Verantwortung und der im Vertrag vorgesehenen Bestimmungen;

-   Die Einhaltung des Datenschutzgesetzes und der DSGVO;

-   Die Implementierung von Maßnahmen zum Schutz personenbezogener Daten;

-   Die Implementierung eines Systems zur rechtlichen und regulatorischen Überwachung;

-   Die Aufrechterhaltung und Pflege von entsprechenden Beziehungen oder der Überwachung mit den sektoralen Behörden in Bezug auf die Natur der im Rahmen des Dienstes verarbeiteten Daten. Dies umfasst insbesondere die ANSSI, das CERT-FR und die CNIL.

## 13.3. DSGVO

Als Auftragsverarbeiter im Sinne von Artikel 28 der Datenschutz-Grundverordnung (DSGVO) verpflichtet sich der Anbieter:

-   Transparenz und Nachvollziehbarkeit sicherzustellen;

-   Einen DPO zu benennen, der für die Definition und Umsetzung der Maßnahmen zum Schutz personenbezogener Daten verantwortlich ist;

-   Den AUFTRAGGEBER zu unterstützen und zu beraten und ihn zu warnen, wenn eine Anweisung von ihm einen Verstoß gegen die Datenschutzvorschriften darstellt, sofern der Anbieter dies erkennen kann;

-   Eine Sicherheitsgarantie für die verarbeiteten Daten (aufgrund der SecNumCloud-Qualifikation).

## 13.4. Schutz vor nicht-europäischem Recht

Der gesetzliche Sitz des Anbieters befindet sich in einem Mitgliedstaat der Europäischen Union. Das Unternehmen des Anbieters ist weder direkt noch indirekt:

-   individuell zu mehr als 24 %;

-   und kollektiv zu mehr als 39 %;

im Besitz von Dritten, die ihren gesetzlichen Sitz, ihre zentrale Verwaltung oder ihren Hauptsitz in einem Drittstaat außerhalb der Europäischen Union haben.

Falls der Anbieter im Rahmen des Dienstes auf den Dienst eines Drittunternehmens – einschließlich eines Unterauftragsnehmers – zurückgreift, das seinen gesetzlichen Sitz, seine zentrale Verwaltung oder seinen Hauptsitz in einem Staat außerhalb der Europäischen Union hat oder zu einem solchen Unternehmen gehört oder von einem solchen Unternehmen kontrolliert wird, verpflichtet sich der Anbieter:

-   sicherzustellen, dass dieses Drittunternehmen keinen Zugriff auf die betriebenen Daten hat;

-   sicherzustellen, dass er über eine betriebliche Autonomie durch die Möglichkeit verfügt, auf einen anderen Unterauftragnehmer zurückzugreifen oder schnell eine technologische Alternative umzusetzen.

Zur Erinnerung: Die betroffenen Daten sind diejenigen, die dem Anbieter vom AUFTRAGGEBER anvertraut werden, sowie alle technischen Daten, die Informationen über die AUFTRAGGEBER enthalten.

Für die Zwecke dieses Artikels wird der Begriff der Kontrolle im Sinne von Artikel L233-3 II des Handelsgesetzbuchs verstanden.

# 14. UNTERSCHRIFTEN

Erstellt in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Für Cloud Temple, der ANBIETER

Für \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, der AUFTRAGGEBER