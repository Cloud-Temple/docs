---
title: Service Convention SecNumCloud OpenIaaS
---

# 1. SERVICE CONVENTION OpenIaaS

  -----------------------------------------------------------------------
  **Empfänger :**                **SPONSOR**
  ------------------------------ ----------------------------------------
  **Dokumentenreferenz**         CT.AM.JUR.ANX OPENIaaS-
                                 202530101_v3.0.docx_Tag TT JJJJ

  **Ihre Ansprechpartner**       *Vorname* *Nachname*

                                 Account Manager

                                 e-mail : *vorname.nachname*\@cloud-temple.com

  **Datum der letzten            17/01/2025
  Aktualisierung**               

  **Vertragliches                Tag TT JJJJ
  Validierungsdatum**            
  -----------------------------------------------------------------------

------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Version**   **Datum**     **Aktion**                           **Autor**
  ------------- ------------ ------------------------------------ --------------
  v0.1          07/06/2022   Erstfassung                          Lorena ALCALDE

  v0.2          14/09/2022   Erweiterung                          Lorena ALCALDE

  v1.0          30/12/2022   Integration von Indikatoren          Lorena ALCALDE

  v1.1          23/01/2023   Fußzeilenänderung                    Lorena ALCALDE

  v1.2          22/05/2023   Erweiterung                          Lorena ALCALDE

  v1.3          29/06/2023   Erweiterung                          Lorena ALCALDE

  v1.4          06/11/2023   Kapitaländerung und                  Lorena ALCALDE
                             Erweiterung                          

  v1.5          30/11/2023   Erweiterung                          Lorena ALCALDE

  v1.6          21/03/2024   Erweiterung                          Lorena ALCALDE

  v2.0          29/03/2024   Anpassungen an SNC-Konformität       Nicolas
                                                                  ABRIOUX

  v2.0          03/04/2024   Veröffentlichung                     Lorena ALCALDE

  V3.0          17/01/2025   Erweiterung                          Emeline CAZAUX
  ------------- ------------ ------------------------------------ --------------

  ------------------------------------------------------------------------------

------------------------------------------------------------------------

# 2. INHALTSVERZEICHNIS

-   [1. **SERVICE CONVENTION
    IaaS**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
-   [2. **INHALTSVERZEICHNIS**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Vorwort und
    Glossar](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Vorwort](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glossar](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Akronyme](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Zweck dieses
    Servicevertrags](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Dienstleistungsbeschreibung](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Modell der geteilten
        Verantwortung](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Detaillierte Übersicht des Serviceumfangs](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Rechenzentrumsinfrastrukturen](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Steuerungssoftware-Infrastruktur des
            Dienstes](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Recheninfrastrukturen](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Speicherinfrastrukturen](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Globale
            Netzwerkinfrastruktur](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Backup-Infrastruktur](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
        -   [7.2.7. Implementierung von Notfall- oder
            Geschäftskontinuitätslösungen](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Servicebeschränkungen im qualifizierten IaaS-Modell](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Verwaltete Dienste im
            RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Konfiguration des
            Notfalls](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
        -   [7.3.3. Konfiguration des
            Backups](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
    -   [7.4. Implementierung des
        Dienstes](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Technische
            Voraussetzungen](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
    -   [7.5. Standort des Dienstes in
        Frankreich](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Standorte der Rechenzentren, in denen der Dienst
            gehostet wird](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Standorte der Cloud Temple-Agenturen, die den
            Dienst betreiben](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Support](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Art des Supports, der den Dienst
            begleitet](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2. Kontaktaufnahme mit dem technischen
            Supportdienst](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Prozess zur Verwaltung von
            Vorfällen](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Prozess zur Priorisierung der
            Bearbeitung](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Sprache und Standort des
            Supportdienstes](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Verfügbarkeits- und Service-Level-Verpflichtungen](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Verfügbarkeitsverpflichtungen der
        Infrastruktur](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. Verfügbarkeitsverpflichtung der
        SPONSOR-Schnittstelle](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Verfügbarkeitsverpflichtung des
        Supports](#Xfc8548982b300528a67725f1705f15805f405f0)
    -   [8.4. Verfügbarkeitsverpflichtung des S3-Objektspeichers](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
    -   [8.5. Klarstellung zur Backup-Verpflichtung](#Xcc0ee164bf81418fd2280ceac4eb569bf7b97f7)
-   [9. Organisation der vertraglichen
    Beziehung](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Verantwortlichkeiten des
        Dienstleisters](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Begrenzung der Verantwortlichkeiten des
        Dienstleisters](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Zugriffsbeschränkung](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)
    -   [9.4. Verantwortlichkeiten von Dritten, die an der Bereitstellung des
        Secure Temple-Dienstes
        beteiligt sind](#Xc662a81cadd2baa300ca83a27240dec61621a56)
    -   [9.5. Verantwortlichkeiten und Pflichten des
        SPONSOR](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
    -   [9.6. Rechte des SPONSOR](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
    -   [9.7. Datenlöschung am Ende des
        Vertrags](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
-   [10. Lebenszyklus dieses
        Servicevertrags](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Inkrafttreten des
        Servicevertrags](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Änderungen des
        Servicevertrags](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Vom SPONSOR ausgelöste
            Änderungen](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Vom Dienstleister ausgelöste
            Änderungen](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Reversibilität](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Verfügbarkeit, Kontinuität und Wiederherstellung des
    Dienstes](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Verwaltung von Vorfällen und
        Unterbrechungen](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1.
            Vorfälle](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Arten der Vorfälle, die im Rahmen dieses
                Servicevertrags behandelt
                werden](#X09cc1e22db275b1a463f85596829f3f871ae224)
            -   [11.1.1.2. Behandlung von
                Vorfällen](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
            -   [11.1.1.3. Benachrichtigungsstufe über
                Sicherheitsvorfälle](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
    -   [11.2. Wartung des Dienstes](#X8f50b0b400c67568e380ddb602ac786ec585905)
        -   [11.2.1. Art der
            Wartung](#X903d92edf16182242ecfd404337edbaf2243b81)
        -   [11.2.2. Fernzugriff von Cloud Temple auf den
            SPONSOR-Bereich](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Fernzugriff von Dritten, die an der Bereitstellung des Dienstes
            beteiligt sind, auf den
            SPONSOR-Bereich](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Datenlöschverfahren am Ende des
    Vertrags](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Anwendbares
    Recht](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. Im Allgemeinen](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Einhaltung der geltenden Gesetze und
        Vorschriften](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. DSGVO](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Schutz vor
        außereuropäischem Recht](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. UNTERSCHRIFTEN](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Vorwort und Glossar


## 3.1. Vorbemerkung

Dieses Dokument formalisiert die Servicevereinbarung, die mit dem
aktuellen OpenIaaS-Service verbunden ist, der SecNumCloud zertifiziert wird.

Der Dienst wird derzeit SecNumCloud-zertifiziert (siehe Bescheinigung,
die im Anhang sein wird).

Diese Servicevereinbarung ergänzt und ist ergänzend zu den allgemeinen
Geschäfts- und Nutzungsbedingungen des Anbieters. Es wird davon
ausgegangen, dass die Vertragsdokumente in sich stimmig interpretiert
werden. Im Falle von Widersprüchen oder Abweichungen zwischen den
Begriffen der Vertragsdokumente haben die Dokumente in folgender
Reihenfolge Vorrang:

1.  Allgemeine Geschäfts- und Nutzungsbedingungen (AGB)

2.  SecNumCloud IaaS Servicevereinbarung

3.  SecNumCloud OpenIaaS Servicevereinbarung

4.  SecNumCloud PaaS Servicevereinbarung

5.  Spezifische Bare-Metal-Servicevereinbarung

6.  Spezifische besondere Vereinbarung

7.  Sicherheitsversicherungsplan (PAS)

8.  Besondere Nutzungsbedingungen (CPU)

9.  Datenschutzvereinbarung

## 3.2. Glossar

In der vorliegenden Servicevereinbarung sind der **AUFTRAGGEBER**, der
**Anbieter** und die **Parteien** im Vertrag, dem die vorliegende
Servicevereinbarung beigefügt ist, identifiziert.

Die in dieser Servicevereinbarung verwendeten Begriffe werden gemäß
den unten angegebenen Definitionen interpretiert:

-   **Änderung:** Jede Hinzufügung, Änderung oder Löschung, die den
    Dienst betrifft und autorisiert, geplant oder bearbeitet wurde.

-   **Standardänderung:** Änderung, die einem Verfahren unterliegt,
    dessen Bereitstellungsmethoden und Auswirkungen (einschließlich
    finanzieller) im Voraus von den Parteien bekannt und akzeptiert
    sind. Sie wird dann in den Katalog der Standardänderungen
    aufgenommen und kann je nach Fall eine GTI und eine GTR haben.

-   **Vertrag:** bezeichnet den Vertrag, den der AUFTRAGGEBER mit
    dem Anbieter abgeschlossen hat, um es dem AUFTRAGGEBER zu
    ermöglichen, den Dienst zu nutzen, und dem diese Servicevereinbarung
    beigefügt ist.

-   \***Servicevereinbarung:** Dieses Dokument wurde im Rahmen eines
    spezifischen Vertrags oder der allgemeinen Geschäfts- und
    Nutzungsbedingungen (AGB) erstellt und entspricht den Anforderungen
    des SecNumCloud-Referenzmodells.

-   **Serviceanforderung:** Eine Anforderung an eine Entwicklung, die
    einem Verfahren unterliegt, dessen Durchführung: i) die CMDB nicht
    ändert, ii) der Arbeitsmodus, die Kosten und die Risiken im Voraus
    bekannt und akzeptiert sind und keine spezifischen Rücksetzmethoden
    erfordern, iii) die Durchführung unterliegt einer
    Service-Level-Vereinbarung und ist in der Vertragsvergütung
    enthalten, wenn sie während der Geschäftszeiten ausgeführt wird.

-   **Verfügbarkeit:** Fähigkeit, die Verfügbarkeit und optimale
    Leistung des Dienstes gemäß den in den Service-Level-Vereinbarungen
    (SLA) definierten Kriterien und Verpflichtungen sicherzustellen.

-   **Technische Daten:** umfasst alle Daten, die zur Bereitstellung
    des Dienstes verarbeitet werden, insbesondere Identität der
    Begünstigten und Administratoren der technischen Infrastruktur,
    Protokolle der technischen Infrastruktur, Zugriffskonfigurationen,
    Directory, Zertifikate...

-   **Ereignis:** Ein „Ereignis" ist jede nachweisbare oder identifizierbare
    Vorkommnis, die für das Management des Dienstes von Bedeutung sein kann.

-   **Hypervisor:** Betriebssystem, das die Ausführung virtueller
    Maschinen auf einer Recheneinheit ermöglicht.

-   **Vorfall:** Jede unerwartete Vorkommnis, die den normalen Betrieb
    des Dienstes stört oder die Datensicherheit gefährdet.

-   **Sicherheitsvorfall:** Jede Vorkommnis im Bereich des Dienstes:

    -   Mit böswilliger Absicht;
    -   Mit unbeabsichtigtem Charakter, das die Integrität, die
        Vertraulichkeit oder die Rückverfolgbarkeit des Dienstes oder der
        Daten des AUFTRAGGEBERS beeinträchtigt;
    -   Beeinträchtigung bestehender Sicherheitsmaßnahmen. Nicht-böswillige
        Verfügbarkeitsverletzungen gelten nicht als Sicherheitsvorfälle
        (Hardwareausfall, Fehler, Fehlfunktion, Naturkatastrophe...).

-   **AUFTRAGGEBER-Interface:** Verwaltungsoberfläche des Dienstes,
    die dem AUFTRAGGEBER vom Anbieter zur Verfügung gestellt wird und
    eine webbasierte Verwaltungskonsole und eine API umfasst.

-   **Bereitstellung:** Verwaltungsaktion(en) zur Durchführung der
    Änderungsumsetzung, wenn diese genehmigt wurde (Änderung im Sinne
    von ITIL bezieht sich nur auf das Änderungsmanagement und nicht auf
    deren Durchführung).

-   **Problem:** Ursache eines oder mehrerer wiederkehrender Vorfälle,
    Ursache eines potenziellen Vorfalls (Risikosituation), der eine Analyse
    und Lösung erfordert, um dessen Wiederholung zu verhindern.

-   **Region:** bezeichnet eine geografisch abgegrenzte Gruppe von
    Cloud-Verfügbarkeitszonen, die Netzwerk-, Rechen- und
    Speicherdienste zur Optimierung der Latenz, Leistung und lokalen
    rechtlichen Konformität bereitstellen.

-   **OpenIaaS-Dienst:** bezeichnet den auf einer Open-Source-Technologie
    basierenden IaaS-Dienst, der derzeit SecNumCloud-zertifiziert wird,
    und der dem AUFTRAGGEBER vom Anbieter auf technischen Infrastrukturen
    zur Verfügung gestellt wird, die vom Anbieter gewartet werden, wie
    in der "Dienstbeschreibung" dieses Servicevertrags beschrieben.

<!-- -->

-   **Schadensfall:** bezeichnet ein schwerwiegendes Ereignis
    natürlichen oder menschlichen Ursprungs, ob zufällig oder vorsätzlich,
    das der betroffenen Partei erhebliche Verluste und Schäden zufügt.

<!-- -->

-   **Überwachung:** Überwachung eines Informationssystems oder eines
    Dienstes, die das Sammeln verschiedener Daten wie Messungen und
    Alarme umfasst. Diese Aktivität beschränkt sich auf die Beobachtung
    und Nachverfolgung ohne direkte Intervention in die überwachten
    Elemente, eine Aufgabe, die den Verwaltungsvorgängen vorbehalten
    ist.

-   **Tenant:** Eine isolierte Instanz, die einem Benutzer oder einer
    Benutzergruppe vorbehalten ist und eine gemeinsame Infrastruktur
    nutzt, dabei jedoch die Unabhängigkeit und Sicherheit der Daten und
    Anwendungen aufrechterhält.

-   **Verfügbarkeitszone (AZ) (Availability Zone):** Eine spezifische,
    isolierte Sektion der Cloud-Computing-Infrastruktur, die für hohe
    Verfügbarkeit und Resilienz der Dienste durch geografische
    Verteilung der Ressourcen ausgelegt ist.

# 4. Akronyme

  -----------------------------------------------------------------------------
  **Akronym**     **Definition**
  --------------  --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Veränderungsbeirat

  **CMDB**       Configuration Management Database -- Konfigurations-
                 Management-Datenbank

  **COPIL**      Steuerungsausschuss

  **COSTRAT**    Strategischer Ausschuss

  **COPROJ**     Projektausschuss

  **DB**         Datenbank
                 
  **DPA**        Datenschutzvereinbarung

  **DRP**        Disaster Recovery Plan (Notfallwiederherstellungsplan)

  **GTE**        Eskalationszeitgarantie

  **GTI**        Eingriffszeitgarantie

  **GTR**        Lösungszeitgarantie

  **ITIL**       Information Technology Infrastructure Library -- Beste
                 Praktiken für IT-Service-Management

  **IaaS**       Infrastructure as a Service

  **MCO**        Wartung im operativen Zustand

  **MOA**        Projektsteuerung

  **MOE**        Projektdurchführung

  **MSP**        Managed Services Provider (Anbieter verwalteter Dienste)

  **OS**         Betriebssystem

  **PAQ**        Qualitätsversicherungsplan

  **PaaS**       Platform as a Service

  **PAS**        Sicherheitsversicherungsplan

  **PASSI**      Sicherheitsprüfung Dienstanbieter

  **RFC**        Request For Change -- Änderungsantrag

  **RGPD**       Allgemeine Datenschutzverordnung

  **RPO**        Recovery Point Objective -- Wiederherstellungspunktziel

  **RTO**        Recovery Time Objective -- Wiederherstellungszeitziel

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Service-Level-Vereinbarung

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Anwendung Drittwartung

  **UO**         Betriebseinheit

  **VABE**       Validierung der Betriebsbereitschaft

  **VABF**       Validierung der Funktionstüchtigkeit

  **VM**         Virtuelle Maschine

  **VSR**        Validierung des Regelbetriebs
  -----------------------------------------------------------------------------

# 5. Zweck der vorliegenden Servicevereinbarung

Diese Servicevereinbarung legt die Bedingungen fest, unter denen der
Anbieter dem AUFTRAGGEBER den Dienst bereitstellt. Ihr Zweck ist es:

-   Die vom AUFTRAGGEBER in Bezug auf Funktionalität und Zuverlässigkeit
    des Dienstes erwarteten Leistungsanforderungen zu präzisieren;

-   Die Verpflichtungen des Anbieters zur Erfüllung der vereinbarten
    Service-Level zu erläutern;

-   Die speziell für den bereitgestellten Dienst geltenden
    gesetzlichen Normen zu nennen;

-   Eine Konsistenz und Integrität bei der Bewertung der Dienstqualität
    sicherzustellen;

-   Die Exzellenz der erbrachten Dienste zu gewährleisten, die durch
    quantitative Leistungsindikatoren bewertet wird.

Es wird festgelegt, dass im Falle eines Entzugs der SecNumCloud-Qualifikation
des Anbieters, der Vertrag von Rechts wegen ohne Strafen vom
AUFTRAGGEBER gekündigt werden kann. In einer
telle éventualité s'engage der Anbieters, BENACHRICHTIGUNG 

< der a12der Engagementsflchieqiten annehmen oder dieser sowie anderen System \[bereitstellung\](https://beispiel.com) 

```markdown
Der Anbieter verpflichtet sich dem AUFTRAGGEBER über die Aberkennung dieser Qualifikation zu informieren. Dies erfolgt durch Versendung einer offiziellen Benachrichtigung per Einschreiben mit Rückschein.

Es ist anzumerken, dass die Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Aberkennung der ursprünglichen Qualifikation interpretiert wird.

# 6. Audit

Der Anbieter verpflichtet sich, dem AUFTRAGGEBER oder jedem vom Anbieter benannten, nicht konkurrierenden Dritten die Einsicht in alle notwendigen Dokumente zu ermöglichen, um die vollständige Einhaltung der Anforderungen gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) nachzuweisen, und so die Durchführung von Audits zu erleichtern.

Durch die Annahme dieser Servicevereinbarung erteilt der AUFTRAGGEBER ausdrücklich seine Zustimmung zu:

1.  Der Nationalen Agentur für die Sicherheit von Informationssystemen (ANSSI) sowie der zuständigen Qualifizierungsstelle, um die Konformität des Dienstes und seines Informationssystems mit dem SecNumCloud-Referenzrahmen zu überprüfen.
2.  Einem zertifizierten Anbieter für die Sicherheitsüberprüfung von Informationssystemen (PASSI), der ausdrücklich vom Anbieter benannt wurde, um Sicherheitsaudits des Dienstes durchzuführen.

# 7. Dienstbeschreibung

## 7.1. Modell der geteilten Verantwortung

Der vom Anbieter angebotene Dienst zeichnet sich durch die Bereitstellung der folgenden Leistungen aus, die dem Prinzip der geteilten Verantwortung aus dem SecNumCloud-Referenzrahmen folgend:

-   Bereitstellung von Rechenressourcen (compute);

-   Bereitstellung von Speicherplätzen;

-   Zugang zu Netzwerk- und Internetverbindungsdiensten;

-   Angebot eines dedizierten Backup-Dienstes für virtuelle Maschinen.

Das Modell der geteilten Verantwortung zwischen Anbieter und AUFTRAGGEBER im Rahmen des Dienstes wird unter §7.1 beschrieben.

Es wird davon ausgegangen, dass der Anbieter sein Fachwissen einsetzt, um die Dienstleistungen gemäß den besten beruflichen Praktiken und den Anforderungen des SecNumCloud-Referenzrahmens zu erbringen.

## 7.2. Detaillierte Darstellung des Dienstes

  ------------------------------------------------------------------------
  Compute          Rechenressource des AUFTRAGGEBERS
  ---------------- -------------------------------------------------------
  Storage          Produktionsdaten des AUFTRAGGEBERS

  Objektspeicher   Bereitstellung einer souveränen Objektspeicher-Infrastruktur
  S3               über mehrere AZs hinweg, kompatibel mit den standardmäßigen S3 APIs.

  Backup           Modularer Zugriff auf den Objektspeicher S3

  Netzwerkinfrastruktur Netzwerkressource des AUFTRAGGEBERS           

  Konsole          Der Dienst, der dem AUFTRAGGEBER den Zugang zu seinem
  AUFTRAGGEBERS    OpenIaaS-Dienst ermöglicht und ihn über die Shiva-Oberfläche verwaltet

  Support          Der Support-Dienst unterstützt die vorherigen Dienste
                   und ausschließlich diese (\*)
  ------------------------------------------------------------------------

\*(\*) Innerhalb des Umfangs des SNC-Qualifikationsdienstes und der Verantwortlichkeiten des Anbieters in dieser Hinsicht\_

### 7.2.1. Datacenter-Infrastrukturen

Der Dienst umfasst die Bereitstellung der folgenden qualifizierten Leistungen für jede Verfügbarkeitszone:

-   Datacenter-Standort in Frankreich für die FR-Region, der den neuesten technologischen Standards entspricht und eine Resilienz auf dem Niveau von Tier 3 des Uptime Institute oder höher bietet;
-   Bereitstellung von Technikräumen innerhalb von Datacentern, die die notwendigen technischen Einrichtungen zur Produktion des Dienstes, einschließlich Compute, Storage, Netzwerk, Verkabelung und anderen erforderlichen Komponenten, beherbergen;
-   Gesicherte Stromversorgung, gewährleistet durch zwei getrennte Stromkreise, um die Kontinuität des Dienstes zu garantieren;
-   Bereitstellung von Klimaservices, die angepasst sind, um den Normen und Empfehlungen der Gerätehersteller zu entsprechen, um ein optimales Umfeld für die technischen Geräte zu erhalten;
-   Kontinuierliche Überwachung und detaillierte Metrik, um eine präzise Nachverfolgung und proaktive Verwaltung der Leistungs- und Sicherheitsparameter des angebotenen Dienstes zu ermöglichen.

Der Anbieter stellt erweiterte Dienste zur Brandfrüherkennung und -bekämpfung bereit, die entwickelt wurden, um effektiv auf Feueranfänge innerhalb der Einrichtungen zu reagieren. Diese Systeme sind wichtig, um die Sicherheit der Geräte und Daten zu gewährleisten. Sie umfassen hochpräzise Rauchmelder und Löschvorrichtungen, die schnell eingreifen können, ohne die IT-Ausstattung zu beschädigen. Dieser Service ist entscheidend, um Brandrisiken vorzubeugen, mögliche Schäden zu minimieren und die Fortsetzung der Betriebsabläufe zu sichern.

Der AUFTRAGGEBER wird darüber informiert, dass alle eingeführten Sicherheitsmaßnahmen und -verfahren, einschließlich der jährlichen Tests der Generatorumschaltung, wesentlich sind, um die Kontinuität und Integrität der bereitgestellten Dienste zu gewährleisten. Diese Praktiken zielen darauf ab, die Risiken von Ausfällen zu minimieren und eine optimale Reaktionsfähigkeit im Falle eines Vorfalls sicherzustellen. Durch die Annahme dieser Bedingungen erkennt der AUFTRAGGEBER die Bedeutung dieser Maßnahmen an und verpflichtet sich, umfassend zu kooperieren, um deren Umsetzung zu erleichtern. Der AUFTRAGGEBER wird außerdem ermutigt, die bereitgestellten Sicherheitsempfehlungen zur Kenntnis zu nehmen und sie in seine eigene Risikomanagementstrategie zu integrieren.

### 7.2.2. Software-Infrastruktur zur Steuerung des Dienstes

Der Anbieter stellt dem AUFTRAGGEBER die Verwaltungskonsole und die API zur Nutzung des Dienstes zur Verfügung. Er verpflichtet sich, diese Verwaltungskonsole und API stets in einem optimalen Betriebszustand zu halten und deren Sicherheit kontinuierlich zu gewährleisten. Diese Verwaltungskonsole und API werden zusammen unter dem Begriff „AUFTRAGGEBER-Schnittstelle“ geführt.

Der Anbieter macht den AUFTRAGGEBER darauf aufmerksam, dass eine anomale Nutzung der AUFTRAGGEBER-Schnittstelle, insbesondere bei Überlastung der APIs (hammering), automatische Sicherheitsmaßnahmen auslösen kann, die zur Sperrung des Zugangs zu den APIs oder zum Dienst führen. Es ist zu betonen, dass dies keine Unverfügbarkeit des Dienstes darstellt, sondern eine Schutzmaßnahme für den Dienst und die Infrastruktur des Anbieters; daher kann der AUFTRAGGEBER dies nicht als Unverfügbarkeit in seine Berechnungen einbeziehen.

Darüber hinaus weist der Anbieter den AUFTRAGGEBER darauf hin, dass perfekt identische Anfragen (Duplikate), die an die APIs gesendet werden, auf eine pro Sekunde beschränkt sind (Throttling). Werden identische Anfragen häufiger gesendet, kann deren Ablehnung nicht als Unverfügbarkeit des Dienstes interpretiert werden.

### 7.2.3. Recheninfrastruktur

Der Dienst umfasst die Bereitstellung der notwendigen Ausrüstung zur Ausführung der Workloads in den vom AUFTRAGGEBER abonnierten Verfügbarkeitszonen in Form von virtuellen Maschinen.

Dies umfasst:

-   Bereitstellung der technischen Chassis für den ordnungsgemäßen Betrieb der Rechenklingen;
-   Bereitstellung der Rechenklingen in den vom AUFTRAGGEBER spezifizierten Mengen, die nach den von ihm gewählten Verfügbarkeitszonen verteilt werden. Es sei darauf hingewiesen, dass diese Rechenklingen ausschließlich dem AUFTRAGGEBER gewidmet sind;
-   Bereitstellung von Betriebssystemen für Hypervisoren sowie die Garantie für den Betrieb und die Sicherheit der notwendigen Software-Infrastruktur zur Steuerung dieser Betriebssysteme. Es ist darauf hinzuweisen, dass der Anbieter zwar für den operativen Betrieb und die allgemeine Sicherheit des Dienstes verantwortlich ist, jedoch keine detaillierten Kenntnisse über die Produktionsumgebungen des AUFTRAGGEBERS oder die spezifischen Anforderungen seiner Workloads hat. Daher liegt die Verantwortung für die Entscheidung über die Aktualisierung der Betriebssysteme der Hypervisor-Rechenklingen, eine Maßnahme, die einen Neustart erfordern kann, vollständig beim AUFTRAGGEBER. Diese Aktion kann über die AUFTRAGGEBER-Schnittstelle durchgeführt werden.

Die Wahl des Modells der Rechenklinge, das aus dem vom Anbieter angebotenen Katalog ausgewählt wird, liegt in der Verantwortung des AUFTRAGGEBERS.

### 7.2.4. Speicherinfrastruktur

Der Dienst umfasst die Bereitstellung einer geteilten Speicherinfrastruktur vom Typ SAN (Storage Area Network) für den AUFTRAGGEBER, die verschiedene Leistungsstufen bietet. Dieser Dienst umfasst:

-   Implementierung und Betrieb sowie die Gewährleistung der Sicherheit des dedizierten SAN-Netzwerks;
-   Installation und Verwaltung der zwischen Kunden geteilten Speicherarrays, einschließlich ihres Betriebs und ihrer Sicherheit, Überwachung und Metrik;
-   Implementierung automatisierter Systeme zur Zuweisung von LUNs (Logical Unit Numbers) für den Speicher, der entsprechend den vom AUFTRAGGEBER abonnierten Volumina zur Verfügung gestellt wird.

### 7.2.5. Globale Netzwerkinfrastruktur

Der Anbieter setzt im Rahmen des Dienstes ein globales Netzwerk ein, das dem AUFTRAGGEBER den Zugang zu seinen gehosteten Systemen erleichtert. Dieser Dienst umfasst:

-   Bereitstellung, Betrieb und Sicherheit aller Glasfaserverbindungen, die die verschiedenen Verfügbarkeitszonen miteinander verbinden;
```
-   Die Bereitstellung, die Aufrechterhaltung der Betriebsbereitschaft und der
    Sicherheit der technischen Ausrüstung, die für den ordnungsgemäßen
    Betrieb des Netzwerks und die Isolierung der verschiedenen Kunden notwendig sind.

Die Netzwerkverbindung des Mieters AUFTRAGGEBER zu Internet oder privaten Netzwerken und die dazugehörigen Netzwerkausrüstungen, Operator-Verbindungen und andere technische Komponenten, die diese Verbindung realisieren, sind nicht Teil des Serviceumfangs. Diese Netzwerkverbindung wird gemäß den im Vertrag festgelegten Bestimmungen umgesetzt.

### 7.2.6. Backup-Infrastruktur

Der Dienstleister stellt dem AUFTRAGGEBER einen integrierten, dedizierten und verwalteten Backup-Service zur Verfügung, der dem Schutz seiner virtuellen Maschinen dient. Der Dienstleister stellt die Betriebsbereitschaft und die Sicherheit dieses Backup-Dienstes sicher. Der Dienstleister garantiert, dass die Backups des AUFTRAGGEBERS außerhalb der Verfügbarkeitszone der gesicherten Arbeitslasten liegen, vorausgesetzt, dass der AUFTRAGGEBER die entsprechenden Leistungseinheiten gebucht hat.

Dieser Backup-Dienst erstreckt sich ausschließlich auf die Sicherung virtueller Maschinen und der Topologie-Konfigurationen der OpenIaaS-Umgebung der Mieter des AUFTRAGGEBERS im Rahmen des Service. Die Erstellung und Anwendung einer angemessenen Backup-Politik durch den AUFTRAGGEBER hängt von der Buchung spezifischer Leistungseinheiten ab. Daher ist es die Verantwortung des AUFTRAGGEBERS, sicherzustellen, dass die notwendigen technischen Ressourcen beim Dienstleister verfügbar sind, um seine Backup-Politik umzusetzen oder diese Politik entsprechend den verfügbaren Mitteln anzupassen.

Der Dienstleister verpflichtet sich, den AUFTRAGGEBER im Falle von Kapazitätsbeschränkungen zu benachrichtigen und Beratungsunterstützung zur Optimierung der Ressourcen zu bieten. Die Verpflichtungen des Dienstleisters beschränken sich auf die Umsetzung der vom AUFTRAGGEBER hinsichtlich der Backup-Politik ausgedrückten Bedürfnisse im Rahmen der gebuchten Ressourcen.

### 7.2.7. Umsetzung von Disaster-Recovery- oder Business-Continuity-Lösungen

Der Dienstleister stellt dem AUFTRAGGEBER alle notwendigen technischen Lösungen zur Verfügung, um eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen hinweg zu gewährleisten. Es liegt in der Verantwortung des AUFTRAGGEBERS, diese Ressourcenverteilung effizient zu verwalten, wofür er die vom Dienstleister zu diesem Zweck verfügbaren Werkzeuge nutzen kann.

## 7.3. Einschränkungen der Dienste im laufenden OpenIaaS-Modell der Qualifikation

### 7.3.1. Managed Services im RUN

Es ist wichtig zu beachten, dass folgende Punkte vom Service ausgeschlossen sind:

-   Das Hosting physischer Komponenten des AUFTRAGGEBERS;

-   Die Netzwerkverbindung des Mieters AUFTRAGGEBER zu Internet oder privaten Netzwerken, einschließlich der Operator-Verbindungen;

-   Jede Art von Managed-Services oder TMA;

-   Jegliche Unterstützung für virtuelle Maschinen auf OS-Ebene und darüber hinaus in der IaaS-Verantwortungspyramide, auch wenn es sich nur um einfaches Monitoring handelt.

Dennoch ist es dem AUFTRAGGEBER nicht ausgeschlossen, solche Dienstleistungen im Rahmen des MSP-Angebots des Dienstleisters in Anspruch zu nehmen, um in einem Managed-Services-Modus auf seine Mieter zuzugreifen. Diese Dienstleistungen unterliegen dann nicht den Bestimmungen dieser Servicevereinbarung und ihren bilateralen Verpflichtungen/Klauseln.

### 7.3.2. Konfiguration der Notfallwiederherstellung

Standardmäßig stellt der Dienstleister dem AUFTRAGGEBER die IaaS-Ressourcen bereit, indem er Ressourcen reserviert und die Deployments konfiguriert, um die Verfügbarkeitszonen zu nutzen. Es liegt in der Verantwortung des AUFTRAGGEBERS, die Verfügbarkeitszonen über die AUFTRAGGEBER-Oberfläche auszuwählen.

### 7.3.3. Konfiguration des Backups

Der Backup-Dienst beschränkt sich auf die Sicherung virtueller Maschinen und der Topologie-Konfigurationen, die die OpenIaaS-Umgebung der Mieter des AUFTRAGGEBERS im Rahmen des Service darstellen.

Der Backup-Dienst und die Vervollständigung der Backup-Politik des AUFTRAGGEBERS unterliegen dem Abschluss eines Speicherkontingents im erforderlichen Massenspeicher, um den Service sicherzustellen. Es liegt daher in der Verantwortung des AUFTRAGGEBERS, die notwendigen technischen Mittel beim Dienstleister zu buchen, um die Backup-Politik für seinen IT-Bereich sicherzustellen oder die Backup-Politik an die bereitgestellten Mittel anzupassen. Der Dienstleister verpflichtet sich, den AUFTRAGGEBER im Falle von Kapazitätsgrenzen zu informieren.

Der Dienstleister wird die notwendigen technischen und personellen Mittel bereitstellen, um das gehostete System im Rahmen der vom AUFTRAGGEBER gebuchten Ressourcen zu sichern.

Darüber hinaus liegt es in den Bereichen, die nicht vom Dienstleister unterstützt werden, in der Verantwortung des AUFTRAGGEBERS, seine eigene Backup-Strategie zu definieren und die Sicherungen der VMs selbst zu konfigurieren oder einen Serviceantrag beim Dienstleister zu stellen, damit die Konfiguration der Sicherungen für physische Server vorgenommen wird, wenn der AUFTRAGGEBER über einen Managed-Service-Vertrag verfügt, der es dem Dienstleister ermöglicht, über die AUFTRAGGEBER-Oberfläche, die die Verwaltungskonsole ist, die im Rahmen dieser Servicevereinbarung zur Verfügung gestellt wird und über Funktionen zur Konfiguration von Sicherungen verfügt, zu handeln.

Außerdem wird dieser Service nur die in der AUFTRAGGEBER-Oberfläche klar spezifizierte Konfiguration umsetzen.

Aus Gründen der Flexibilität des Angebots des Dienstleisters hat der AUFTRAGGEBER die Möglichkeit, eine Nicht-Sicherungs-Politik für einige seiner VMs zu wählen. In diesem Fall obliegt es dem AUFTRAGGEBER, diese Entscheidung zu übernehmen. Der Dienstleister wird die VMs, die der Politik "no backup" zugeordnet sind, nicht sichern. Der Dienstleister warnt den AUFTRAGGEBER, dass die Wahl der Politik "no backup" oder die manuelle Sicherung den AUFTRAGGEBER einem endgültigen Datenverlust im Falle eines Vorfalls auf den unteren Schichten oder den Schichten der IaaS-Verantwortung aussetzt. In einem solchen Fall wird es dem Dienstleister unmöglich sein, für die Wiederherstellung der Daten verantwortlich gemacht zu werden, da nichts wiederherzustellen sein wird. Der Dienstleister empfiehlt immer, die VMs zu sichern.

Für alle Themen, die das auf einer virtuellen Maschine installierte Betriebssystem und jede darauf laufende Software oder Programme betreffen, liegt es in der Verantwortung des AUFTRAGGEBERS, die Verwaltungs- und Überwachungsaufgaben innerhalb der Europäischen Union durchzuführen, wenn er sicherstellen möchte, dass alle Schichten des IT-Systems aus der Europäischen Union verwaltet und betrieben werden. Verwaltungstätigkeiten außerhalb des Verantwortungsbereichs des Dienstleisters im Rahmen dieser Servicevereinbarung sind in der Rubrik „Modell der geteilten Verantwortlichkeiten“ dieser Servicevereinbarung aufgeführt.

## 7.4. Umsetzung des Dienstes

### 7.4.1. Technische Voraussetzungen

Für die Umsetzung des Dienstes erkennt der AUFTRAGGEBER an, dass er:

-   Mit einer Virtualisierung vom Typ Xen in den vom Anbieter unterstützten Versionen arbeiten muss, wie sie im Rahmen des Dienstes bereitgestellt werden;

-   Über den Dienstleister das Backup-Tool nutzen muss;

-   Feste IP-Adressen deklarieren muss, von denen aus der Dienstleister ihm den Zugriff auf die AUFTRAGGEBER-Oberfläche gestattet (Whitelist-Filterung). Änderungen dieser IP-Liste müssen über das dafür vorgesehene Menü in der Konsole oder über Serviceanfragen für nachträgliche Änderungen erfolgen. Bei der Initiierung des Dienstes wird der Dienstleister mindestens über eine Adresse IP, wie beschrieben, informiert worden sein.

## 7.5. Standort des Dienstes in Frankreich

Es wird klargestellt, dass keine der Operationen und keine der physischen Komponenten, die an der Bereitstellung des Dienstes beteiligt sind, auf die sich diese Servicevereinbarung bezieht, außerhalb der Europäischen Union liegen.

Dies umfasst insbesondere den Support, die Betriebsüberwachung und die Sicherheitsüberwachung (SOC) der technischen Infrastruktur, die den Dienst liefert. In der Tat werden alle Speicher-, Verwaltungs-, Überwachungsaufgaben und Verarbeitungen in Frankreich durchgeführt.

### 7.5.1. Standort der Datacenters, die den Dienst hosten

Abgesehen von den Operationen der Mitarbeiter und Agenturen des Dienstleisters befinden sich alle Produktionsoperationen (einschließlich Speicherung und Datenverarbeitung) und technischen Komponenten, die den Dienst bereitstellen, in Datacentern in Frankreich.

### 7.5.2. Standort der Cloud Temple-Agenturen, die den Dienst betreiben

Die Mitarbeiter von Cloud Temple, die für den Umfang des Dienstes tätig sind, arbeiten von den Cloud Temple-Agenturen aus, die alle ausschließlich in Frankreich ansässig sind. Diese Agenturen befinden sich in Frankreich, in Tours, Lyon, Caen und Paris La Défense.

Der AUFTRAGGEBER wird darüber informiert, dass Cloud Temple-Mitarbeiter die Möglichkeit haben, remote zu arbeiten. Der Dienstleister garantiert jedoch das gleiche Sicherheitsniveau für den Fernzugriff, insbesondere für VPN-Zugänge. Diese Fernzugänge werden gemäß den Anforderungen des SecNumCloud-Referenzrahmens umgesetzt.

## 7.6. Support

### 7.6.1. Art des Supports, der den Dienst begleitet

Der Dienstleister bietet einen technischen Supportdienst, der den AUFTRAGGEBER bei der Verwaltung, Fehlerbehebung und Optimierung seiner bereitgestellten Ressourcen unterstützt. Dieser Dienst umfasst eine breite Palette von Aktivitäten, von der Unterstützung bei der anfänglichen Konfiguration der Dienste bis hin zum fortschrittlichen technischen Support zur Lösung spezifischer Probleme.

Hier ist eine Beschreibung der Merkmale und Funktionen des Supportdienstes:

-   Unterstützung bei der anfänglichen Nutzung des Dienstes;
-   Unterstützung bei der Incident-Behebung;
-   Unterstützung bei der Problembehebung;
-   Überwachung und Beratung zur Optimierung der technischen Grundlage.
Dans dem Rahmen des Supportservices ersetzt der Dienstanbieter den AUFTRAGGEBER nicht bei der Nutzung des Dienstes. Der AUFTRAGGEBER bleibt vollständig verantwortlich für die Konfiguration, den Betrieb seiner VMs und seiner Tenants sowie für die Verwaltung aller Elemente (einschließlich Daten und Anwendungen), die er auf den Infrastrukturen des Dienstanbieters gespeichert oder installiert hat. Der technische Support wird in Übereinstimmung mit den Allgemeinen Verkaufs- und Nutzungsbedingungen bereitgestellt, wobei der Dienstanbieter einer Mittelverpflichtung unterliegt.

Der AUFTRAGGEBER verpflichtet sich, den technischen Supportservice vernünftig zu nutzen, indem er insbesondere auf die Inanspruchnahme nicht abonnierter Dienste des Dienstanbieters und auf das Einschalten der Teams des Dienstanbieters bei seinen eigenen Kunden oder Dritten, die nicht im Vertrag enthalten sind, verzichtet. Der Dienstanbieter behält sich das Recht vor, jede Serviceanfrage abzulehnen, die diese Kriterien nicht erfüllt.

Das Supportengagement ist an den Abschluss der zugehörigen Supporteinheiteneinheiten gebunden.

### 7.6.2. Inanspruchnahme des technischen Supportservices

Der technische Support ist über ein Ticketing-System über die AUFTRAGGEBER-Konsole zugänglich und während der normalen Bürozeiten außer an Feiertagen (8h - 18h; Montag - Freitag; französischer Kalender und Zeiten) verfügbar. Für Notfälle außerhalb der Geschäftszeiten, insbesondere für Vorfälle, die die Produktion erheblich beeinträchtigen, kann der Bereitschaftsdienst über eine dem AUFTRAGGEBER bei der Dienstinitialisierung mitgeteilte Nummer erreicht werden.

Für jede Anfrage oder jeden Vorfall ist es unerlässlich, ein Ticket beim Support des Dienstanbieters zu erstellen. Die Erstellung dieses Tickets, das alle erforderlichen Informationen enthält, ist wesentlich und markiert den Beginn der Bewertung der Verpflichtungen des Dienstanbieters.

Sobald der Dienstanbieter eine Anfrage oder eine Vorfallmeldung erhält, sei es über die Verwaltungskonsole oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Meldung eines Vorfalls ist es wichtig, dass der AUFTRAGGEBER dem Dienstanbieter möglichst viele Details zum aufgetretenen Problem bereitstellt. Dieser Schritt ist entscheidend, um eine angemessene Bewertung der Situation, ihre Priorisierung und eine effektive Diagnose zu ermöglichen.

Der AUFTRAGGEBER erhält dann eine Bestätigungs-E-Mail, die die Erstellung des Tickets und dessen eindeutige Nummer angibt. Der AUFTRAGGEBER kann den Status und die Historie seiner Anfragen und Vorfallmeldungen direkt über die Verwaltungskonsole einsehen.

### 7.6.3. Vorfallmanagementprozess

Bei der Meldung eines Vorfalls initiiert das technische Supportteam des Dienstanbieters eine Untersuchung, um die Ursache des Problems zu identifizieren und eine Diagnose zu stellen. Der AUFTRAGGEBER muss aktiv mit dem Dienstanbieter zusammenarbeiten, indem er alle erforderlichen Informationen bereitstellt und die erforderlichen Tests durchführt. Der Dienstanbieter kann auf den Dienst des AUFTRAGGEBERS zugreifen, um den Vorfall zu diagnostizieren.

Wenn die Dienste des Dienstanbieters als funktionsfähig angesehen werden und der Vorfall nicht ihm zugeschrieben werden kann, wird der AUFTRAGGEBER informiert. Auf Wunsch des AUFTRAGGEBERS kann der Dienstanbieter professionelle Dienstleistungen zur Identifizierung der Problemursache anbieten, die im Voraus pro 30 Minuten vereinbart und berechnet werden.

Wenn der Vorfall in der Verantwortung des Dienstanbieters oder eines seiner Unterauftragnehmer liegt, vervollständigt er die Diagnose und arbeitet auf die Wiederherstellung des Dienstes ohne zusätzliche Kosten hin. Die Diagnose basiert auf dem Austausch zwischen den Parteien und den Daten des Dienstanbieters, diese Elemente werden von den Parteien als schlüssig anerkannt.

### 7.6.4. Priorisierungsprozess der Bearbeitungen

Die Bestimmung des Prioritätsniveaus eines Falls basiert auf einer Matrixanalyse, die die Auswirkungen des Vorfalls und den Grad seiner Kritikalität bewertet:

-   Die Auswirkungensebenen sind wie folgt definiert:

  -------------------------------------------------------------------------
  Impact-Level    Beschreibung
  --------------- ---------------------------------------------------------
  Impact I1       Die Dienste des Dienstanbieters sind unterbrochen

  Impact I2       Die Dienste des Dienstanbieters sind beeinträchtigt

  Impact I3       Die Dienste des Dienstanbieters sind derzeit stabil,
                  zeigen aber Anzeichen eines möglichen langfristigen Verfalls
  -------------------------------------------------------------------------

-   Die Kritikalitätsstufen sind wie folgt definiert:

  -----------------------------------------------------------------------
  Kritikalitäts-   Beschreibung
  stufe            
  --------------- -------------------------------------------------------
  Kritikalität C1  Die Dienste des Dienstanbieters verschlechtern sich
                   besorgniserregend schnell

  Kritikalität C2  Die Dienste des Dienstanbieters verschlechtern sich
                   schrittweise im Laufe der Zeit

  Kritikalität C3  Die Dienste des Dienstanbieters zeigen ein oder mehrere
                   Unannehmlichkeiten ohne wesentliche Folgen
  -----------------------------------------------------------------------

-   Basierend auf einer gründlichen Analyse der Situation, die die Elemente 
    bestimmt, die die Auswirkung und die Kritikalität ausmachen, wird dem 
    Ticket gemäß der folgenden Entscheidungsmatrix eine Priorität zugewiesen:

  -------------------------------------------------------------------------
  Wirkungsebenen  Kritikalitäts-     Impact I1      Impact I2       Impact I3
  stufe                                                             
  ---------------------------------- ------------  ------------    ------------
  Kritikalität C1                     Priorität     Priorität       Priorität
                                       **P1**        **P2**          **P3**

  Kritikalität C2                     Priorität     Priorität       Priorität
                                       **P2**        **P3**          **P4**

  Kritikalität C3                     Priorität     Priorität       Priorität
                                       **P3**        **P4**          **P5**
  -------------------------------------------------------------------------

Die den einzelnen Prioritätsstufen entsprechenden Service-Level-Verpflichtungen sind im nächsten Kapitel detailliert beschrieben.

### 7.6.5. Sprache und Standort des Supportservices

Der Support wird vom Dienstanbieter an den AUFTRAGGEBER mindestens in französischer Sprache bereitgestellt. Der Support kann auch in englischer Sprache bereitgestellt werden.

Die Betriebsstandorte des technischen Supportservices des Dienstanbieters für das qualifizierte SecNumCloud-Infrastruktur-Angebot befinden sich in der Europäischen Union.

# 8. Verpflichtungen und Service-Level

Der Dienstanbieter verpflichtet sich zu einer kontinuierlichen Überwachung der Leistung und der Sicherheitsintegrität seiner technischen Infrastruktur, die den Dienst liefert, und stellt deren optimalen Betrieb sicher.

Die Unverfügbarkeit eines Dienstes, die einem Schlüsselwert unterliegt, wird erkannt, sobald sie vom Überwachungssystem des Dienstanbieters oder nach Benachrichtigung durch einen Benutzer des AUFTRAGGEBERS identifiziert wird. Der Beginn der Unverfügbarkeit wird auf den frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um eine genaue und faire Abrechnung der Ausfallzeit sicherzustellen.

Das Ende der Unverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, bestätigt entweder durch die Überwachungstools des Dienstanbieters oder durch eine Rückmeldung des Benutzers, was so eine effektive Wiederaufnahme der Operationen und eine treue Messung der Dauer des Ausfalls gewährleistet.

## 8.1. Infrastruktur-Verfügbarkeitsverpflichtungen

Der Dienstanbieter verpflichtet sich, eine Verfügbarkeit und Leistung gemäß den für jede spezifizierte Periode festgelegten Standards aufrechtzuerhalten. Die Service-Level-Verpflichtungen (Service Level Agreements, SLAs) gelten unter der Voraussetzung, dass der AUFTRAGGEBER seine Systeme in mindestens zwei der in der betreffenden Region vorhandenen Verfügbarkeitszonen implementiert.

Wenn diese Bedingungen vom AUFTRAGGEBER nicht erfüllt werden, kann er die Anwendung der betreffenden SLAs nicht in Anspruch nehmen, welche speziell durch ein Sternchen (*) gekennzeichnet sind. Der Zugriff auf die SLAs erfolgt über die AUFTRAGGEBER-Schnittstelle. Die Maßnahmen werden monatlich berechnet:

-   \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Verfügbarkeit der 
    Rechenleistung (Compute): garantierte Verfügbarkeitsrate von 99,99%, 
    berechnet auf der Basis von 24h/24, 7t/7.
-   \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Verfügbarkeit des Speichers: 
    garantierte Verfügbarkeitsrate von 99,99%, berechnet auf der Basis von 
    24h/24, 7t/7.
-   **SLA 3 : IC-INFRA_SNC-03** -- Zuverlässigkeit der Sicherung: 
    garantierte Verfügbarkeitsrate von 99,99%, berechnet auf der Basis von 
    24h/24, 7t/7.
-   \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Verfügbarkeit der 
    Netzwerkinfrastruktur: garantierte Verfügbarkeitsrate von 99,99%, 
    berechnet auf der Basis von 24h/24, 7t/7.
-   **SLA 5 : IC-INFRA_SNC-05** -- Internetzugang: garantierte 
    Verfügbarkeitsrate von 99,99%, berechnet auf der Basis von 24h/24, 7t/7.

***Bemerkungen*** :

-   *Als Reaktion auf eine verteilte Denial-of-Service-Attacke (DDoS) 
    behält sich der Dienstanbieter das Recht vor, seine Internet-Routing-
    Konfiguration anzupassen, um die Auswirkungen dieser Attacke zu 
    begrenzen und seine Infrastruktur zu schützen. Insbesondere wenn eine IP-
    Adresse, die dem AUFTRAGGEBER gehört, das Ziel ist, kann der 
    Dienstanbieter über die BGP-Community-Technik des Blackholing den 
    gesamten Verkehr zur Ziel-IP-Adresse bei seinen Anbietern blockieren, um 
    die Ressourcen des AUFTRAGGEBERS sowie die anderer AUFTRAGGEBER und des 
    Dienstanbieters zu schützen. Der Dienstanbieter ermutigt stark, dass der 
    AUFTRAGGEBER ähnliche Maßnahmen ergreift, wie die Nutzung von Web-
    Anwendungsschutzsoftware*
    disponibles sur le marché, et à configurer soigneusement ses groupes
    de sécurité via l'API de commande.*

-   *Der Dienstleister betont die Notwendigkeit für den AUFTRAGGEBER,
    die Flussöffnungen zu minimieren, indem insbesondere vermieden wird,
    die Verwaltungsports **SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389)
    aus dem gesamten Internet (Subnetz 0.0.0.0/0) zugänglich zu machen,
    sowie interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS**
    (TCP/UDP-Port 2049) zu verwenden.*

## 8.2. Verpflichtung zur Verfügbarkeit der AUFTRAGGEBER-Benutzeroberfläche

-   SLA 6: IC-INFRA_SNC-06 -- Zugang zur Verwaltungsconsole des Dienstes:
    eine garantierte Verfügbarkeit von 97%, durchgehend gewährleistet, 24
    Stunden am Tag und 7 Tage die Woche.
-   SLA 7: IC-INFRA_SNC-07 -- Zugang zu den Service-APIs:
    eine Verfügbarkeit von 99.9%, berechnet auf einer Basis von 24/7.

## 8.3. Verpflichtung zur Verfügbarkeit des Supports

-   **SLA 8: IC-INFRA_SNC-08** -- Hier sind die Leistungszusagen des technischen
    Supports des Dienstleisters für Vorfälle, ausgenommen geplante Wartungen:

  ------------------------------------------------------------------------
  Priorität       Garantie für Eingreifzeit (GTI)         Leistungsziel
  -------------- ----------------------------------- ---------------------
  Priorität       30min                                95%
  **P1**                                             

  Priorität       2h                                  90%
  **P2**                                             

  Priorität       4h                                  90%
  **P3**                                             

  Priorität       24h                                 85%
  **P4**                                             

  Priorität       48h                                 85%
  **P5**                                             
  ------------------------------------------------------------------------

-   **SLA 9: IC-INFRA_SNC-09** -- Hier sind die Leistungszusagen des technischen
    Supports des Dienstleisters für Serviceanfragen:

  ------------------------------------------------------------------------
                   Garantie für Eingreifzeit (GTI)      Leistungsziel
  ---------------- ---------------------------------- --------------------
  Serviceanfrage    4h                                  90%
                                                       
  ------------------------------------------------------------------------

*Hinweis*:

-   *Der Zeitraum für die Garantie der Eingreifzeit (GTI) wird ab dem Zeitpunkt berechnet,
    zu dem der AUFTRAGGEBER das Ticket eröffnet, bis zur ersten Intervention des Supports
    des Dienstleisters.*
-   *Die Untersuchung von Vorfällen betreffend den AUFTRAGGEBER umfasst
    keine Fernintervention auf den gehosteten Servern des AUFTRAGGEBERS.
    Dieser Support beschränkt sich auf die Erklärung der verfügbaren
    Metriken im Zusammenhang mit der Umgebung des AUFTRAGGEBERS, um das
    Verständnis der aufgetretenen Vorfälle oder Leistungsprobleme zu
    erleichtern. Basierend auf den Ergebnissen dieser Analyse können Empfehlungen
    gegeben werden.*

## 8.4. Verpflichtung zur Verfügbarkeit des S3-Objektspeichers

-   **SLA 10: IC-INFRA_SNC-10** -- Hier sind die Verfügbarkeitszusagen für
    den S3-Objektspeicher:

  ------------------------------------------------------------------------------
  Indikator          Verpflichtung                          Verfügbarkeitsziel
  ------------------ -------------------------------------- -------------------
  IC-INFRA-SNC-10.1  Haltbarkeit der Speicherung eines      99.9999999% / Jahr
                     Objekts in einer Region               

  IC-INFRA-SNC-10.2  Verfügbarkeit der S3-Objektspeicher-   99.99%
                     API                                   

  IC-INFRA-SNC-10.3  Maximale Latenz beim Zugriff auf ein   150 ms
                     Objekt in einer Region                
  ------------------------------------------------------------------------------

Bemerkungen:

-   Der Objektspeicherdienst ist speziell für die Speicherung von Objekten
    ausgelegt und sollte nur zu diesem Zweck verwendet werden, **die Verwendung
    im Blockmodus ist kategorisch ausgeschlossen**. Die Nutzung des Blockmodus
    durch Umgehungsmethoden, einschließlich beispielsweise der Verwendung von
    *"FUSE" in einer Linux-Umgebung*, stellt einen Verstoß gegen die
    Nutzungsbedingungen dar. Kein Vorfall, keine Fehlfunktion oder Beschädigung
    infolge dieser nicht konformen Nutzung wird durch die in dieser
    Servicevereinbarung definierten Service-Level-Agreements (SLA) abgedeckt.
-   Die Haltbarkeitsgarantie ist abhängig von einer Nutzung der Dienste gemäß
    den aktuellen Best Practices und Standards und schließt ausdrücklich jede
    Datenänderung aus, ob absichtlich oder unabsichtlich, die durch vom
    AUFTRAGGEBER durchgeführte Handlungen verursacht wurde.

## 8.5. Erläuterung zur Backup-Verpflichtung

Die für den AUFTRAGGEBER implementierte Backup-Strategie ist bedingt durch
den Abschluss der entsprechenden Arbeitseinheiten.

Der Dienstleister verpflichtet sich, eine Backup-Lösung bereitzustellen, die
es dem AUFTRAGGEBER ermöglicht, die gewünschten Backup-Richtlinien anzuwenden.

Es wird klargestellt, dass der Umfang des Dienstleisters bei der Bereitstellung
eines Backup-Services endet und es am AUFTRAGGEBER liegt, über die
AUFTRAGGEBER-Schnittstelle die einwandfreie Ausführung der zugehörigen
Richtlinien zu überwachen.

Es wird klargestellt, dass die Verwaltung der Speicherkapazitäten des für
Backups vorgesehenen Speicherplatzes in der Verantwortung des AUFTRAGGEBERS
liegt. Der Dienstleister stellt die Nutzungsrate über die Konsole zur Verfügung.

*Beispiel: Nicht-Backup einer virtuellen Maschine:*

*Es liegt in der Verantwortung des AUFTRAGGEBERS, die einwandfreie Ausführung
der Backup-Richtlinien zu überprüfen/überwachen. Falls der AUFTRAGGEBER
feststellt, dass eine virtuelle Maschine nicht gesichert wird, liegt es an ihm,
die Ursache zu überprüfen. Der AUFTRAGGEBER kann den Support des Dienstleisters
je nach dem abonnierten Supportlevel zur Unterstützung anfordern.*

**Die SLA 8: IC-INFRA_SNC-08 und SLA 9** sind ausschließlich im Falle eines
Backup-Service-Vorfalls anwendbar.

# 9. Organisation der vertraglichen Beziehung

## 9.1. Verantwortlichkeiten des Dienstleisters

Der Dienstleister verpflichtet sich:

-   seinen AUFTRAGGEBER angemessen zu informieren (zum Beispiel im Falle
    einer Kapazitätsgrenze der technischen Ressourcen, die den Dienst
    erbringen).

-   den AUFTRAGGEBER formell und innerhalb eines Monats von jeglicher
    rechtlichen, organisatorischen oder technischen Änderung zu
    unterrichten, die die Konformität des Dienstes mit den
    Anforderungen zum Schutz vor außer-europäischen Gesetzen (19.6 des
    SNC v3.2 Standards) beeinflussen kann.

-   dem AUFTRAGGEBER zumindest französische Schnittstellen und
    Service-Interfaces bereitzustellen.

-   spezifische sektorale Anforderungen in Bezug auf die vom AUFTRAGGEBER anvertrauten
    Informationstypen im Rahmen der Implementierung des Dienstes und im Rahmen der
    Verantwortung des Dienstleisters einerseits sowie der im Vertrag vorgesehenen
    Bestimmungen andererseits zu berücksichtigen;

-   spezifische sektorale Anforderungen in Bezug auf die vom AUFTRAGGEBER anvertrauten
    Informationstypen im Rahmen der Implementierung des Dienstes, die nachträglich vom
    AUFTRAGGEBER geäußert werden, zu prüfen und dem AUFTRAGGEBER die notwendigen
    Maßnahmen zur Berücksichtigung mitzuteilen

-   keine Informationen zu dem Dienst an Dritte weiterzugeben, außer bei formeller und
    schriftlicher Genehmigung durch den AUFTRAGGEBER.

-   alle notwendigen Informationen zur Durchführung von Konformitätsaudits gemäß den
    Bestimmungen von Artikel 28 der DSGVO bereitzustellen.

-   den AUFTRAGGEBER durch vorliegende Servicevereinbarung über alle
    Sicherheitsvorfälle zu informieren, die den Dienst oder die Nutzung
    des Dienstes durch den AUFTRAGGEBER (einschließlich der Daten des
    AUFTRAGGEBERS) beeinträchtigen.

-   einem vom Dienstleister beauftragten qualifizierten IT-Sicherheitsauditor
    (PASSI) zu gestatten, den Dienst sowie das Informationssystem gemäß
    dem Kontrollplan des SecNumCloud des Dienstleisters zu überprüfen.
    Zudem verpflichtet sich der Dienstleister, alle notwendigen
    Informationen bereitzustellen, um die Konformitätsaudits gemäß den
    Bestimmungen von Artikel 28 der DSGVO, die vom Auftraggeber oder
    einem beauftragten Dritten durchgeführt werden, erfolgreich
    durchzuführen.

-   als Auftragsverarbeiter gemäß Artikel 28 der Datenschutz-Grundverordnung
    (DSGVO) dem AUFTRAGGEBER Unterstützung und Beratung zu bieten,
    indem er diesen warnt, sobald eine vom AUFTRAGGEBER erteilte Anweisung
    eine Verletzung der Datenschutzbestimmungen darstellen könnte.

-   den AUFTRAGGEBER in angemessener Zeit, entweder über die
    AUFTRAGGEBER-Konsole oder per E-Mail an den AUFTRAGGEBER-Kontakt zu
    benachrichtigen, wenn ein Projekt den Sicherheitsgrad oder die
    Verfügbarkeit des Dienstes beeinflusst oder beeinträchtigen könnte,
    oder einen Funktionsverlust bewirken kann, einschließlich möglicher
    Auswirkungen, der implementierten Milderungsmaßnahmen und relevanter
    Restrisiken.

-   die notwendigen Verfahren zu dokumentieren und umzusetzen, um sicherzustellen,
    dass die gesetzlichen, regulatorischen und vertraglichen Anforderungen für den
    Dienst sowie die spezifischen Sicherheitsanforderungen des AUFTRAGGEBERS, die von
    diesem definiert und im Vertrag vorgesehen sind, eingehalten werden.

-   die vom AUFTRAGGEBER stammenden Daten nicht zu verwenden, die aus dem
    Produktion zum Zweck der Tests, es sei denn, die ausdrückliche
    Genehmigung des AUFTRAGGEBERS wurde zuvor eingeholt, in welchem Fall
    sich der Dienstleister verpflichtet, diese Daten zu anonymisieren
    und während der Anonymisierung deren Vertraulichkeit zu gewährleisten.

-   die Daten und Technischen Daten des AUFTRAGGEBERS gemäß dem in dieser
    Dienstleistungsvereinbarung beschriebenen „Verfahren zum Datenlöschen am Ende 
    des Vertrags“ bei Ablauf oder Kündigung des Vertrags zu löschen.

-   eine sichere Löschung aller Daten des AUFTRAGGEBERS durch
    vollständiges Überschreiben aller Datenträger, auf denen solche
    Daten im Rahmen des Dienstes gespeichert wurden, zu gewährleisten.

Auf formelle und schriftliche Anfrage des AUFTRAGGEBERS verpflichtet sich
der Dienstleister:

1.  Dem AUFTRAGGEBER das interne Regelwerk und den Ethikkodex des
    Dienstleisters zugänglich zu machen;

2.  Dem AUFTRAGGEBER die bei Verstößen gegen die Sicherheitsrichtlinien
    drohenden Strafen zugänglich zu machen;

3.  Dem AUFTRAGGEBER sämtliche ihn betreffenden Ereignisse in den
    Protokollierungsdaten des Dienstes zu liefern; der AUFTRAGGEBER
    kann darüber hinaus die ihn betreffenden Ereignisse im Bezug auf
    seine Nutzung des Dienstes über die Web- und API-Schnittstellen des
    Dienstes eigenständig einsehen;

4.  Dem AUFTRAGGEBER die Verfahren zugänglich zu machen, die erforderlich sind,
    um die gültigen gesetzlichen, regulatorischen und vertraglichen Anforderungen
    an den Dienst sowie die im Vertrag festgelegten spezifischen Sicherheitsanforderungen 
    des AUFTRAGGEBERS zu erfüllen;

5.  Die Bewertungen der Risiken, die sich aus der Übermittlung der Daten des
    AUFTRAGGEBERS an ein Nicht-EU-Land ergeben können, zur Verfügung zu
    stellen;

6.  Den AUFTRAGGEBER über nachfolgende Unterauftragnehmer, die an der Erbringung
    des Dienstes beteiligt sind, zu informieren und ihn über alle
    relevanten Änderungen im Zusammenhang mit diesen Unterauftragnehmern
    zu unterrichten.

> Der Dienstleister und alle seine Tochtergesellschaften verpflichten
> sich zur Einhaltung der grundlegenden Werte der Europäischen Union,
> nämlich der Menschenwürde, der Freiheit, der Demokratie, der
> Gleichheit, der Rechtsstaatlichkeit sowie der Achtung der
> Menschenrechte. Der vom Dienstleister erbrachte Dienst entspricht den
> geltenden Gesetzen in Bezug auf die Grundrechte und den Werten der
> Europäischen Union im Bezug auf die Achtung der Menschenwürde,
> Freiheit, Gleichheit, Demokratie und Rechtsstaatlichkeit.

## 9.2. Haftungsbeschränkung des Dienstleisters

Aufgrund der in dieser Dienstleistungsvereinbarung genannten Definitionen
und Bedingungen sind die Haftungen des Dienstleisters wie folgt
begrenzt:

1.  Das in der Abschnitt „Modell geteilte Verantwortlichkeiten“ dieser
    Dienstleistungsvereinbarung beschriebene Modell geteilter
    Verantwortlichkeiten begrenzt die Beteiligung des Dienstleisters an
    Betriebsebenen, die "oberhalb" der Bereitstellung von Rechen-
    Netzwerk-, Speicher- und Sicherungsressourcen liegen. Dies schließt
    insbesondere und ohne Einschränkung aus:

    -   Die Verwaltung dessen, was auf den virtuellen Maschinen
        installiert ist (OS, Middleware, Anwendungen, etc.);

    -   Die Aktualisierung der vom AUFTRAGGEBER auf seinen Maschinen in
        seinen Tenant installierten Betriebssysteme und anderer
        Software;

    -   Die Sicherheit der auf den virtuellen Maschinen
        installierten Programme, Software und Anwendungen;

    -   Die Aktualisierung der virtuellen Maschinen;

    -   Die Datensicherung auf Anwendungsebene.

2.  Der Dienstleister kann keine Sicherungsvereinbarungen für die
    Tenants des AUFTRAGGEBERS abgeben, ohne dass der AUFTRAGGEBER
    zuvor die entsprechenden Betriebseinheiten abonniert hat.

3.  Der Dienstleister kann sich nicht auf das Eigentum an den vom
    AUFTRAGGEBER übermittelten und generierten Daten berufen.
    Tatsächlich gehören diese dem AUFTRAGGEBER.

4.  Der Dienstleister weist darauf hin, dass er die vom AUFTRAGGEBER
    übermittelten und generierten Daten unter keinen Umständen ohne
    vorherige Genehmigung des AUFTRAGGEBERS nutzen und/oder darüber
    verfügen kann, wobei davon ausgegangen wird, dass die Nutzung nur
    dem AUFTRAGGEBER vorbehalten ist.

5.  Der Dienstleister lehnt jegliche Verantwortung für physisch
    gehostete und ebenenverwaltete Komponenten des Dienstleisters ab,
    die jedoch das direkte Eigentum des AUFTRAGGEBERS oder eines Dritten
    sind, mit dem der AUFTRAGGEBER einen Vertrag abgeschlossen hat. Das
    Hosting von physischen Kundenkomponenten ist nicht Teil des Dienstes
    und liegt daher außerhalb des Rahmens dieser
    Dienstleistungsvereinbarung. Es obliegt dem AUFTRAGGEBER, den Grad
    der Adhärenz oder Abhängigkeit dieser Komponenten von dem in
    Qualifikation befindlichen SecNumCloud OpenIaaS-Dienst zu
    bewerten.

## 9.3. Zugangsbeschränkungen

Im Rahmen des Dienstes ist dem Dienstleister der Zugang zu den Tenants
des AUFTRAGGEBERS ohne vorherige Genehmigung formell untersagt. Es liegt
in der Verantwortung des AUFTRAGGEBERS, dem Personal des Dienstleisters die
erforderlichen Zugänge bereitzustellen, basierend auf den spezifischen
Bedürfnissen des Hostings und gegebenenfalls der professionellen
Supportdienste, falls diese Option vom AUFTRAGGEBER gewählt wurde.

Der AUFTRAGGEBER erkennt an, dass dieser Zugang ausschließlich für die mit dem
Dienstleister vereinbarten Dienstleistungen gewährt wird, wodurch eine
sichere und den Vertragsbedingungen entsprechende Verwaltung
gewährleistet wird.

Der Fernzugriff durch Dritte, die an der Erbringung der Dienstleistung des
Dienstleisters beteiligt sind, ist strengstens untersagt. Wenn eine
spezifische technische Anforderung einen solchen Zugang erfordert, darf
dieser nur nach vorheriger klarer Benachrichtigung des AUFTRAGGEBERS,
detaillierter Begründung und schriftlicher Zustimmung eingerichtet
werden.

Diese Maßnahme gewährleistet die Kontrolle und Sicherheit der Daten des
AUFTRAGGEBERS und stellt sicher, dass jede Ausnahme von dieser Regel
ordnungsgemäß genehmigt und dokumentiert wird.

## 9.4. Verantwortlichkeiten Dritter, die an der Erbringung der Dienstleistung beteiligt sind

Der Dienstleister verwaltet die Liste der Drittpartner, die an der
Erbringung des Dienstes beteiligt sind. Diese Dritten umfassen die
Herausgeber, Anbieter (des Dienstleisters) und sonstigen Lieferanten,
die an der Erbringung des Dienstes beteiligt sind. Der Dienstleister
angewendet die folgenden Maßnahmen auf diese Dritten:

-   Der Dienstleister verlangt von den Drittparteien, die an der
    Durchführung des Dienstes beteiligt sind, dass sie ein
    Sicherheitsniveau mindestens auf dem Niveau einhalten, das der
    Dienstleister in seiner eigenen Sicherheitspolitik für den Dienst
    SecureTemple festgelegt hat;

-   Der Dienstleister schließt mit jedem Dritten, der an der
    Durchführung des Dienstes beteiligt ist, Vertragsklauseln ab, die
    einem Qualifizierungsorgan die Möglichkeit geben, zu überprüfen, ob
    diese Dritten die gesetzlichen Anforderungen und die SNC-
    Anforderungen einhalten, wodurch der Dienstleister seinen
    Verpflichtungen aus dieser Dienstleistungsvereinbarung nachkommen
    kann.

-   Der Dienstleister implementiert ein Verfahren, um die von den
    Drittparteien, die an der Durchführung des Dienstes beteiligt sind,
    getroffenen Maßnahmen regelmäßig zu überprüfen, um sicherzustellen,
    dass der Dienstleister seinen Verpflichtungen aus dieser
    Dienstleistungsvereinbarung nachkommt.

-   Der Dienstleister überwacht die von den an der Durchführung des
    Dienstes beteiligten Drittparteien vorgenommenen Änderungen, die
    das Sicherheitsniveau des Informationssystems des Dienstes
    beeinträchtigen könnten.

## 9.5. Verantwortlichkeiten und Pflichten des AUFTRAGGEBERS

Der AUFTRAGGEBER hat im Rahmen des Dienstes folgende Verpflichtungen:

-   Zur Erinnerung: Der Dienstleister stellt dem AUFTRAGGEBER eine
    Plattform zur Ausführung von virtuellen Maschinen zur Verfügung,
    deren Konfiguration in der Verantwortung des AUFTRAGGEBERS liegt.
    Jede virtuelle Maschine kann nicht ohne eine zugehörige
    Sicherungsrichtlinie betrieben werden. Der Dienstleister definiert
    über seine Schnittstellen automatische Sicherungsrichtlinien. Es
    liegt jedoch in der Verantwortung des AUFTRAGGEBERS, diese
    Sicherungsrichtlinien zu aktivieren und damit die virtuellen
    Maschinen zu aktivieren.

-   Der AUFTRAGGEBER ermöglicht der ANSSI und dem SNC-
    Qualifizierungsorgan die Prüfung des Dienstes und der technischen
    Infrastruktur, die den Dienst bereitstellt.

-   Der AUFTRAGGEBER ist dafür verantwortlich, den Dienstleister über
    spezifische Branchenanforderungen bezüglich der vom
    AUFTRAGGEBER bereitgestellten Informationen zu informieren, die der
    Dienstleister berücksichtigen muss.

-   Der AUFTRAGGEBER verpflichtet sich, vom Dienstleister keine Anforderungen
    oder Maßnahmen zu verlangen, die den Dienstleister veranlassen
    würden, von den Anforderungen des aktuellen SecNumCloud-
    Referenzrahmens abzuweichen oder die durch Einhaltung der
    Anforderungen dieses Referenzrahmens festgelegten
    Sicherheitsstandards zu senken.

## 9.6. Rechte des AUFTRAGGEBERS

Der AUFTRAGGEBER kann jederzeit während der Vertragslaufzeit eine
Beschwerde bezüglich des qualifizierten Dienstes bei der ANSSI einreichen.

Der AUFTRAGGEBER kann jederzeit vom Dienstleister verlangen, ihm das 
interne Regelwerk und den Ethikkodex zugänglich zu machen.

## 9.7. Datenlöschung am Ende des Vertrages

Am Ende der Vertragslaufzeit, sei es durch Ablauf oder Kündigung aus
irgendeinem Grund, verpflichtet sich der Dienstleister zur sicheren
Löschung sämtlicher Daten des AUFTRAGGEBERS, einschließlich der
Technischen Daten. Der Dienstleister wird dem AUFTRAGGEBER eine formelle
Vorankündigung unter Einhaltung einer Frist von einundzwanzig (21)
Kalendertagen übermitteln. Die Daten des AUFTRAGGEBERS werden dann 
innerhalb einer maximalen Frist von dreißig (30) Tagen nach dieser
Benachrichtigung gelöscht.

Zur Bestätigung dieser Löschung stellt der Dienstleister dem
AUFTRAGGEBER ein Zertifikat aus, das die Löschung der Daten bestätigt.

# 10. Lebenszyklus dieser Dienstleistungsvereinbarung

## 10.1. Inkrafttreten der Dienstleistungsvereinbarung

Diese Dienstleistungsvereinbarung tritt am Tag ihrer Unterzeichnung durch
den AUFTRAGGEBER in Kraft.
La Erhebung, die Verarbeitung, die Speicherung und die Verarbeitung von Daten
im Rahmen des Pre-Sales, der Implementierung und der Beendigung des
Dienstes erfolgen unter Einhaltung der geltenden Gesetze.

## 10.2. Änderungen der Servicevereinbarung

Die Änderungen oder Ergänzungen dieser Servicevereinbarung
erfolgen ausschließlich aufgrund von Anfragen der zu diesem Zweck benannten
Governance-Organe. Diese Änderungsvorschläge werden von den Parteien geprüft,
die befugt sind, die Aspekte zu bestimmen, die eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede Änderung der Servicevereinbarung nach
Genehmigung, die die ursprünglich festgelegten finanziellen Bedingungen ändert,
die Erstellung und Unterzeichnung eines Nachtrags zum laufenden Vertrag erfordert.

Die Faktoren, die eine Überarbeitung dieser Servicevereinbarung
veranlassen können, umfassen unter anderem:

-   Die Weiterentwicklung der technischen Infrastruktur, die den Service OpenIaaS bereitstellt;
-   Anpassungen der vom Dienstleister bereitgestellten Dienste zur Bereitstellung des Dienstes;
-   Änderungen der Verpflichtungen und der anwendbaren Sanktionen;
-   Organisatorische Umstrukturierungen beim Auftraggeber oder Dienstleister;
-   Die Erweiterung oder Reduzierung des Anwendungsbereichs des Dienstes.

Die Verwaltung der Versionen und Überarbeitungen der Servicevereinbarung wird
im Vorwort des Dokuments festgehalten, um die Nachverfolgung zu erleichtern.

### 10.2.1. Änderungen, die vom Auftraggeber initiiert werden

Die Änderungen der Servicevereinbarung können insbesondere ausgelöst werden durch:

-   Eine Weiterentwicklung der vom Dienstleister verwalteten Infrastruktur;

-   Eine Änderung der vom Dienstleister implementierten Dienste;

-   Eine Änderung der Dienstleistungsverpflichtungen durch den
    Dienstleister.

### 10.2.2. Änderungen, die vom Dienstleister initiiert werden

Jede Änderung der Servicevereinbarung bedarf der Zustimmung des
Auftraggebers. Es wird verstanden, dass jede genehmigte Änderung oder Ergänzung,
die die finanziellen Elemente des Vertrags ändert, die Unterzeichnung eines Nachtrags zu diesem erfordern kann.

## 10.3. Reversibilität

Darüber hinaus verpflichtet sich Cloud Temple, eine Überarbeitung dieser
Servicevereinbarung zu ermöglichen (einschließlich ihrer Kündigung) ohne
Strafe für den Auftraggeber im Falle des Verlusts der SecNumCloud-Qualifikation.

Die Dienstleistungen umfassen keine Reversibilitätspflicht (d.h. Unterstützung des Auftraggebers bei der Migration seines Systems zu einem anderen Dienstleister) mit Ausnahme der Bereitstellung der Auftraggeber-Schnittstelle durch den Dienstleister, die es dem Auftraggeber ermöglicht, seine Daten einschließlich der Konfigurationsdaten seines Informationssystems über eine der folgenden vom Auftraggeber gewählten technischen Modalitäten zu sichern und wiederherzustellen: die Bereitstellung von Dateien in einem oder mehreren dokumentierten und außerhalb des vom Dienstleister bereitgestellten Dienstes verarbeitbaren Formaten oder über die Einrichtung technischer Schnittstellen, die den Zugang zu den Daten gemäß einem dokumentierten und verarbeitbaren Schema (API) ermöglichen.

Der Auftraggeber, der alleinige Herr seines Systems ist, muss alles in seiner Macht stehende tun, um diese Operation bei Bedarf zu erleichtern (was insbesondere bedeutet, dass er eine rigorose Dokumentation zu diesem Zweck erstellt) und Reversibilitätspläne aufstellt. Sollte der Auftraggeber eine zusätzliche Dienstleistung benötigen, kann der Dienstleister im Rahmen eines spezifisch auszuhandelnden Vertrags eine Beratungsmission in dieser Hinsicht anbieten.

# 11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes

## 11.1. Vorfall- und Unterbrechungsmanagement

### 11.1.1. Vorfälle

#### 11.1.1.1. Arten von Vorfällen, die im Rahmen dieser Servicevereinbarung behandelt werden

-   Schäden;

-   Ausfälle und Störungen;

-   Sicherheitsvorfälle, die die Verfügbarkeit, Vertraulichkeit
    oder Integrität des Dienstes beeinträchtigen.

#### 11.1.1.2. Vorfallbehandlung

> Der Dienstleister informiert den Auftraggeber so schnell wie möglich
> über Vorfälle und Unterbrechungen, mittels einer Benachrichtigung in der
> Auftraggeber-Konsole oder per E-Mail an den Auftraggeber-Kontakt. Der
> Dienstleister informiert den Auftraggeber über die Behandlung des Vorfalls
> über den Kanal, der zur Benachrichtigung des Vorfalls verwendet wurde, oder über
> den in der Vorfallbenachrichtigung angegebenen Kanal.

#### 11.1.1.3. Benachrichtigungsstufe der Sicherheitsvorfälle

Der Auftraggeber ist dafür verantwortlich, die Schweregrade der Sicherheitsvorfälle auszuwählen, über die er informiert werden möchte, zum Beispiel durch ihre Formalisierung in einem für den Dienst geltenden PAS.

Standardmäßig wird der Auftraggeber informiert:

-   Über Sicherheitsvorfälle mit Auswirkungen (Auswirkungen I1 und I2 gemäß
    der im Priorisierungsprozess der Behandlungen dieser Servicevereinbarung definierten
    Wirkungsskala);

-   Über Sicherheitsvorfälle, die die Vertraulichkeit oder Integrität der
    im Rahmen des Dienstes anvertrauten Daten des Auftraggebers beeinträchtigen;

-   Über Datenschutzverletzungen, für die der Auftraggeber verantwortlich ist, gemäß Artikel
    8 des Anhangs DPA im Rahmen des Dienstes;

-   

## 11.2. Wartung des Dienstes

### 11.2.1. Art der Wartung

Über Datenschutzverletzungen, für die der
Dienstleister verantwortlich ist und die personenbezogene Daten des Auftraggebers betreffen, gemäß Artikel
8 des Anhangs DPA. Die gewährleistete Wartung umfasst die Implementierung:

-   Des Plans zur Aufrechterhaltung des Betriebs des Dienstes, um gute Verfügbarkeitsindikatoren sicherzustellen, wie es der Dienstleister weiter oben zusichert;

-   Des BCP/DRP-Plans, falls dieser vom Auftraggeber abonniert wurde, ausgelöst je nach
    den auftretenden Vorfällen.

### 11.2.2. Ferngesteuerter Zugriff von Cloud Temple auf das Gebiet des Auftraggebers

Im Rahmen dieser Servicevereinbarung ist jeglicher Zugriff des Dienstleisters auf Tenants
und den Bereich der Auftraggeber-Schnittstelle ausgeschlossen.

Der Auftraggeber wird den Zugang für das Personal des Dienstleisters bereitstellen. Es wird anerkannt,
dass diese Zugänge im Rahmen des Hostings und schließlich des IT-Outsourcings (wenn diese
vom Auftraggeber abonniert wurden) verwendet werden.

### 11.2.3. Ferngesteuerter Zugriff von Dritten, die an der Bereitstellung des Dienstes im Bereich des Auftraggebers beteiligt sind

Ein Ferngesteuerter Zugang von Dritten, die an der Bereitstellung des Dienstes beteiligt sind,
ist nicht gestattet.

Sollte ein technischer Bedarf diese Situation erfordern, wird solch ein
Zugang nur nach Benachrichtigung und mit schriftlicher Zustimmung des Auftraggebers
gewährt.

# 12. Verfahren zur Datenlöschung am Vertragsende

Am Ende des Vertrages, ob der Vertrag terminiert ist oder aus
jedem anderen Grund, wird der Dienstleister die sichere Löschung
aller im Rahmen des Dienstes verarbeiteten Daten, einschließlich der technischen Daten des Auftraggebers, sicherstellen. Der Dienstleister wird eine formale Benachrichtigung unter
Einhaltung einer Frist von einundzwanzig (21) Kalendertagen aussprechen.
Die Daten des Auftraggebers werden innerhalb von höchstens dreißig (30) Tagen nach der
Benachrichtigung gelöscht. Der Dienstleister stellt dem Auftraggeber ein Datenlöschzertifikat aus.

# 13. Anwendbares Recht

## 13.1. Im Allgemeinen

Das auf diese Servicevereinbarung anwendbare Recht ist französisches Recht.

## 13.2. Einhaltung des anwendbaren Rechts und der geltenden Vorschriften

Der Dienstleister verpflichtet sich zu Folgendem:

-   Identifikation der im Rahmen des Dienstes geltenden
    rechtlichen und regulatorischen Beschränkungen;

-   Einhaltung der rechtlichen und regulatorischen Beschränkungen im Zusammenhang mit
    den an den Dienstleister anvertrauten Daten im Rahmen der Verantwortlichkeiten dieses
    und der im Vertrag vorgesehenen Bestimmungen;

-   Einhaltung des Datenschutzgesetzes und der DSGVO;

-   Umsetzung von Maßnahmen zum Schutz personenbezogener Daten;

-   Durchführung eines Prozesses zur rechtlichen und regulatorischen Überwachung;

-   Unterhalt und Pflege geeigneter Beziehungen oder einer Überwachung
    mit den sektorspezifischen Behörden im Zusammenhang mit der Art der im Rahmen des
    Dienstes verarbeiteten Daten. Dies umfasst insbesondere ANSSI,
    CERT-FR und CNIL.

## 13.3. DSGVO

Als Auftragsverarbeiter im Sinne des Artikels 28 der
Datenschutz-Grundverordnung (DSGVO) verpflichtet sich der Dienstleister:

-   Transparenz und Nachverfolgbarkeit sicherzustellen;

-   Einen Datenschutzbeauftragten (DPO) zu benennen, der die Maßnahmen zum Schutz personenbezogener Daten definiert und umsetzt;

-   Unterstützung und Beratung des Auftraggebers, insbesondere wenn eine Anweisung des Auftraggebers
    eine Verletzung der Datenschutzbestimmungen darstellt, wenn der Dienstleister dies
    erkennen kann;

-   Eine Sicherheitsgarantie für die verarbeiteten Daten (aufgrund der SecNumCloud-Qualifikation).

## 13.4. Schutz gegenüber dem außereuropäischen Recht

Der eingetragene Sitz des Dienstleisters befindet sich in einem Mitgliedstaat
der Europäischen Union. Das Grundkapital und die Stimmrechte des
Dienstleisters werden nicht, direkt oder indirekt:

-   individuell zu mehr als 24% gehalten;

-   und kollektiv zu mehr als 39% gehalten;

von Drittunternehmen mit Sitz, Hauptverwaltung oder Hauptniederlassung in einem Staat außerhalb
der Europäischen Union.

Im Falle der Inanspruchnahme eines Drittunternehmens durch den Dienstleister im Rahmen des
Dienstes – einschließlich eines Unterauftragnehmers – dessen Sitz, Hauptverwaltung oder Hauptniederlassung
sich außerhalb der Europäischen Union befindet oder das einer außerhalb der Europäischen Union domizilierten oder kontrollierten Gesellschaft
gehört oder von dieser kontrolliert wird, verpflichtet sich der Dienstleister:
-   dass besagte Drittgesellschaft keinen Zugang
    zu den verarbeiteten Daten haben wird;

-   mit einer Betriebsautonomie durch die Möglichkeit
    verfügen, einen anderen Subunternehmer zu beauftragen oder schnell eine
    technologische Alternative umzusetzen.

Zur Erinnerung: Die betroffenen Daten sind diejenigen, die dem
Dienstleister vom AUFTRAGGEBER anvertraut werden, sowie alle technischen Daten,
die Informationen über die AUFTRAGGEBER enthalten.

Für die Zwecke dieses Artikels wird der Begriff der Kontrolle
wie im II des Artikels L233-3 des Handelsgesetzbuchs angegeben verstanden.

# 14. UNTERSCHRIFTEN

Erstellt in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, am
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Für Cloud Temple, der DIENSTLEISTER

Für \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, der AUFTRAGGEBER