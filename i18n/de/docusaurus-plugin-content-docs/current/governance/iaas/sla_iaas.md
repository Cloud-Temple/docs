title: IaaS-Dienstleistungsvereinbarung
---

![Cloud Temple Logo](images/ct.png)

# 1. **IaaS-DIENSTLEISTUNGSVEREINBARUNG**

| **Empfänger:**                      | **AUFTRAGGEBER**                               |
| :---------------------------------- | :--------------------------------------------- |
| **Dokumentenreferenz**              | CT.AM.JUR.ANX_Dienstleistungsvereinbarung_IaaS_v2.0 |
| **Ihre Ansprechpartner**            | *Vorname* *Nachname*                           |
|                                     | Account Manager                                |
|                                     | E-Mail: *vorname.nachname*@cloud-temple.com    |
| **Datum der letzten Aktualisierung** | 03/04/2024                                     |
| **Datum der vertraglichen Genehmigung** | Tag JJ AAAA                                    |

----------------------------------------------------------------------------------

| **Version** | **Datum**   | **Aktion**                             | **Autor**      |
| ----------- | ----------- | -------------------------------------- | -------------- |
| v0.1        | 07/06/2022  | Erste Fassung                          | Lorena ALCALDE |
| v0.2        | 14/09/2022  | Erweiterung                            | Lorena ALCALDE |
| v1.0        | 30/12/2022  | Integration von Indikatoren            | Lorena ALCALDE |
| v1.1        | 23/01/2023  | Änderung der Fußzeile                  | Lorena ALCALDE |
| v1.2        | 22/05/2023  | Erweiterung                            | Lorena ALCALDE |
| v1.3        | 29/06/2023  | Erweiterung                            | Lorena ALCALDE |
| v1.4        | 06/11/2023  | Änderung des Kapitals und Erweiterung  | Lorena ALCALDE |
| v1.5        | 30/11/2023  | Erweiterung                            | Lorena ALCALDE |
| v1.6        | 21/03/2024  | Erweiterung                            | Lorena ALCALDE |
| v2.0        | 29/03/2024  | Anpassungen zur SNC-Konformität        | Nicolas ABRIOUX|
| v2.0        | 03/04/2024  | Veröffentlichung                       | Lorena ALCALDE |

----------------------------------------------------------------------------------

# 2. **INHALTSVERZEICHNIS**

- [1. **IaaS-DIENSTLEISTUNGSVEREINBARUNG**](#1-iaas-dienstleistungsvereinbarung)
- [2. **INHALTSVERZEICHNIS**](#2-inhaltsverzeichnis)
- [3. Einleitung und Glossar](#3-einleitung-und-glossar)
  - [3.1. Einleitung](#31-einleitung)
  - [3.2. Glossar](#32-glossar)
- [4. Abkürzungen](#4-abkürzungen)
- [5. Gegenstand dieser Dienstleistungsvereinbarung](#5-gegenstand-dieser-dienstleistungsvereinbarung)
- [6. Audit](#6-audit)
- [7. Beschreibung des Dienstes](#7-beschreibung-des-dienstes)
  - [7.1. Modell der geteilten Verantwortung](#71-modell-der-geteilten-verantwortung)
  - [7.2. Detaillierte Darstellung des Dienstumfangs](#72-detaillierte-darstellung-des-dienstumfangs)
    - [7.2.1. Infrastrukturen der Rechenzentren](#721-infrastrukturen-der-rechenzentren)
    - [7.2.2. Softwareinfrastruktur zur Steuerung des Dienstes](#722-softwareinfrastruktur-zur-steuerung-des-dienstes)
    - [7.2.3. Recheninfrastrukturen](#723-recheninfrastrukturen)
    - [7.2.4. Speicherinfrastruktur](#724-speicherinfrastruktur)
    - [7.2.5. Globale Netzwerkinfrastruktur](#725-globale-netzwerkinfrastruktur)
    - [7.2.6. Backup-Infrastruktur](#726-backup-infrastruktur)
    - [7.2.7. Implementierung von Lösungen zur Wiederherstellung oder Aufrechterhaltung des Betriebs](#727-implementierung-von-lösungen-zur-wiederherstellung-oder-aufrechterhaltung-des-betriebs)
  - [7.3. Einschränkungen der Dienste im qualifizierten IaaS-Modell](#73-einschränkungen-der-dienste-im-qualifizierten-iaas-modell)
    - [7.3.1. Managed Services im Betrieb](#731-managed-services-im-betrieb)
    - [7.3.2. Konfiguration der Notfallwiederherstellung](#732-konfiguration-der-notfallwiederherstellung)
    - [7.3.3. Konfiguration des Backups](#733-konfiguration-des-backups)
  - [7.4. Implementierung des Dienstes](#74-implementierung-des-dienstes)
    - [7.4.1. Technische Voraussetzungen](#741-technische-voraussetzungen)
  - [7.5. Standort des Dienstes in Frankreich](#75-standort-des-dienstes-in-frankreich)
    - [7.5.1. Standort der Rechenzentren, die den Dienst hosten](#751-standort-der-rechenzentren-die-den-dienst-hosten)
    - [7.5.2. Standort der Cloud Temple-Agenturen, die den Dienst betreiben](#752-standort-der-cloud-temple-agenturen-die-den-dienst-betreiben)
  - [7.6. Support](#76-support)
    - [7.6.1. Art des den Dienst begleitenden Supports](#761-art-des-den-dienst-begleitenden-supports)
    - [7.6.2. Inanspruchnahme des technischen Supports](#762-inanspruchnahme-des-technischen-supports)
    - [7.6.3. Prozess zur Verwaltung von Vorfällen](#763-prozess-zur-verwaltung-von-vorfällen)
    - [7.6.4. Prozess zur Priorisierung der Bearbeitung](#764-prozess-zur-priorisierung-der-bearbeitung)
    - [7.6.5. Sprache und Standort des Supports](#765-sprache-und-standort-des-supports)
- [8. Verpflichtungen und Servicelevel](#8-verpflichtungen-und-servicelevel)
  - [8.1. Verpflichtungen zur Verfügbarkeit der Infrastruktur](#81-verpflichtungen-zur-verfügbarkeit-der-infrastruktur)
  - [8.2. Verpflichtung zur Verfügbarkeit der AUFTRAGGEBER-Schnittstelle](#82-verpflichtung-zur-verfügbarkeit-der-auftraggeber-schnittstelle)
  - [8.3. Verpflichtung zur Verfügbarkeit des Supports](#83-verpflichtung-zur-verfügbarkeit-des-supports)
  - [8.4. Verpflichtung zur Verfügbarkeit des S3-Objektspeichers](#84-verpflichtung-zur-verfügbarkeit-des-s3-objektspeichers)
  - [8.5. Präzisierung der Backup-Verpflichtung](#85-präzisierung-der-backup-verpflichtung)
- [9. Organisation der vertraglichen Beziehung](#9-organisation-der-vertraglichen-beziehung)
  - [9.1. Verantwortlichkeiten des Dienstleisters](#91-verantwortlichkeiten-des-dienstleisters)
  - [9.2. Einschränkung der Verantwortlichkeiten des Dienstleisters](#92-einschränkung-der-verantwortlichkeiten-des-dienstleisters)
  - [9.3. Zugangsbeschränkung](#93-zugangsbeschränkung)
  - [9.4. Verantwortlichkeiten Dritter, die an der Bereitstellung des Secure Temple-Dienstes beteiligt sind](#94-verantwortlichkeiten-dritter-die-an-der-bereitstellung-des-secure-temple-dienstes-beteiligt-sind)
  - [9.5. Verantwortlichkeiten und Pflichten des AUFTRAGGEBERS](#95-verantwortlichkeiten-und-pflichten-des-auftraggebers)
  - [9.6. Rechte des AUFTRAGGEBERS](#96-rechte-des-auftraggebers)
  - [9.7. Löschung der Daten bei Vertragsende](#97-löschung-der-daten-bei-vertragsende)
- [10. Lebenszyklus dieser Dienstleistungsvereinbarung](#10-lebenszyklus-dieser-dienstleistungsvereinbarung)
  - [10.1. Inkrafttreten der Dienstleistungsvereinbarung](#101-inkrafttreten-der-dienstleistungsvereinbarung)
  - [10.2. Weiterentwicklungen der Dienstleistungsvereinbarung](#102-weiterentwicklungen-der-dienstleistungsvereinbarung)
    - [10.2.1. Vom AUFTRAGGEBER ausgelöste Weiterentwicklungen](#1021-vom-auftraggeber-ausgelöste-weiterentwicklungen)
    - [10.2.2. Vom Dienstleister ausgelöste Weiterentwicklungen](#1022-vom-dienstleister-ausgelöste-weiterentwicklungen)
  - [10.3. Reversibilität](#103-reversibilität)
- [11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes](#11-verfügbarkeit-kontinuität-und-wiederherstellung-des-dienstes)
  - [11.1. Verwaltung von Vorfällen und Unterbrechungen](#111-verwaltung-von-vorfällen-und-unterbrechungen)
    - [11.1.1. Vorfälle](#1111-vorfälle)
      - [11.1.1.1. Arten von Vorfällen, die im Rahmen dieser Dienstleistungsvereinbarung behandelt werden](#11111-arten-von-vorfällen-die-im-rahmen-dieser-dienstleistungsvereinbarung-behandelt-werden)
      - [11.1.1.2. Bearbeitung von Vorfällen](#11112-bearbeitung-von-vorfällen)
      - [11.1.1.3. Benachrichtigungsstufe für Sicherheitsvorfälle](#11113-benachrichtigungsstufe-für-sicherheitsvorfälle)
  - [11.2. Wartung des Dienstes](#112-wartung-des-dienstes)
    - [11.2.1. Art der Wartung](#1121-art-der-wartung)
    - [11.2.2. Fernzugriff von Cloud Temple auf den Bereich des AUFTRAGGEBERS](#1122-fernzugriff-von-cloud-temple-auf-den-bereich-des-auftraggebers)
    - [11.2.3. Fernzugriff Dritter, die an der Bereitstellung des Dienstes beteiligt sind, auf den Bereich des AUFTRAGGEBERS](#1123-fernzugriff-dritter-die-an-der-bereitstellung-des-dienstes-beteiligt-sind-auf-den-bereich-des-auftraggebers)
- [12. Verfahren zur Löschung der Daten bei Vertragsende](#12-verfahren-zur-löschung-der-daten-bei-vertragsende)
- [13. Anwendbares Recht](#13-anwendbares-recht)
  - [13.1. Allgemein](#131-allgemein)
  - [13.2. Einhaltung des anwendbaren Rechts und der Vorschriften](#132-einhaltung-des-anwendbaren-rechts-und-der-vorschriften)
  - [13.3. DSGVO](#133-dsgvo)
  - [13.4. Schutz vor außereuropäischem Recht](#134-schutz-vor-außereuropäischem-recht)
- [14. UNTERSCHRIFTEN](#14-unterschriften)

----------------------------------------------------------------------------------

# 3. Einleitung und Glossar

## 3.1. Einleitung

Dieses Dokument formalisiert die Dienstleistungsvereinbarung, die mit dem qualifizierten IaaS-Dienst SecNumCloud unter dem Namen „*Secure Temple*“ verbunden ist.

"Diese Dienstleistungsvereinbarung ergänzt die Allgemeinen Geschäfts- und Nutzungsbedingungen des Dienstleisters und ist komplementär dazu. Es wird davon ausgegangen, dass die vertraglichen Dokumente kohärent zueinander interpretiert werden. Im Falle eines Widerspruchs oder einer Divergenz zwischen den Bedingungen der vertraglichen Dokumente haben die Dokumente in der folgenden Reihenfolge Vorrang:

1. Allgemeine Geschäfts- und Nutzungsbedingungen (AGB)
2. Dienstleistungsvereinbarung SecNumCloud IaaS
3. Dienstleistungsvereinbarung SecNumCloud PaaS
4. Besondere Vereinbarung
5. Sicherheitsbewertungsplan (SAP)
6. Besondere Nutzungsbedingungen (BNB)

## 3.2. Glossar

In dieser Dienstleistungsvereinbarung werden der **AUFTRAGGEBER**, der **Dienstleister** und die **Parteien** im Vertrag identifiziert, dem diese Dienstleistungsvereinbarung als Anhang beigefügt ist.

Die nachfolgenden Ausdrücke, die in dieser Dienstleistungsvereinbarung verwendet werden, sind gemäß den unten angegebenen Definitionen zu interpretieren:
-   **Änderung:** Jede Ergänzung, Änderung oder Löschung, die den Dienst betrifft, autorisiert, geplant oder übernommen wurde.

-   **Standardänderung:** Änderung, die einem Verfahren unterliegt, dessen Einsatzmodalitäten und Auswirkungen (einschließlich finanzieller) im Voraus von den Parteien bekannt und akzeptiert wurden. Sie wird dann in den Katalog der Standardänderungen aufgenommen und kann je nach Fall eine GTI und eine GTR haben.

-   **Vertrag:** bezeichnet den Vertrag, den der AUFTRAGGEBER mit dem Anbieter abgeschlossen hat, damit der AUFTRAGGEBER den Dienst nutzen kann, und dem die vorliegende Servicevereinbarung beigefügt ist.

-   **Servicevereinbarung:** Dieses Dokument, das im Rahmen eines spezifischen Vertrags oder der Allgemeinen Geschäftsbedingungen (AGB) erstellt wurde und den Anforderungen des SecNumCloud-Referenzrahmens entspricht.

-   **Serviceanforderung:** Anfrage des AUFTRAGGEBERS an den Anbieter im Rahmen des Dienstes, die Operationen umfasst, die der AUFTRAGGEBER nicht über die Benutzeroberfläche des AUFTRAGGEBERS selbst durchführen kann, sowie Supportanfragen im Rahmen des Dienstes. Die Serviceanforderungen sind auf diejenigen beschränkt, die im Vertrag oder in dieser Servicevereinbarung vorgesehen sind.

-   **Verfügbarkeit:** Fähigkeit, die Verfügbarkeit und die Aufrechterhaltung der optimalen Leistung des Dienstes gemäß den in den Service Level Agreements (SLA) festgelegten Kriterien und Verpflichtungen sicherzustellen.

-   **Technische Daten:** Beinhaltet alle Daten, die zur Bereitstellung des Dienstes verarbeitet werden, insbesondere die Identität der Begünstigten und Administratoren der technischen Infrastruktur, die Protokolle der technischen Infrastruktur, Zugangskonfigurationen, Verzeichnisse, Zertifikate,...

-   **Ereignis:** Ein "Ereignis" ist jede feststellbare oder identifizierbare Vorkommnis, die für das Management des Dienstes von Bedeutung sein kann.

-   **Hypervisor:** Betriebssystem, das die Ausführung virtueller Maschinen auf einer Recheneinheit ermöglicht.

-   **Vorfall:** Jedes unvorhergesehene Ereignis, das den normalen Betrieb des Dienstes stört oder die Datensicherheit gefährdet.

-   **Sicherheitsvorfall:** Jedes Ereignis im Umfang des Dienstes:

    -   Von absichtlich bösartiger Natur;
    -   Von zufälliger Natur, das die Integrität, Vertraulichkeit oder Rückverfolgbarkeit des Dienstes oder der Daten des AUFTRAGGEBERS beeinträchtigt;
    -   Das die bestehenden Sicherheitsmaßnahmen beeinträchtigt.
    Nicht böswillige Verfügbarkeitsbeeinträchtigungen werden nicht als Sicherheitsvorfall betrachtet (Hardwarefehler, Bug, Fehlfunktion, Naturkatastrophe...).

-   **AUFTRAGGEBER-Oberfläche:** Verwaltungsoberfläche des Dienstes, die dem AUFTRAGGEBER vom Anbieter bereitgestellt wird und eine webbasierte Verwaltungskonsole und eine API umfasst.

-   **Inbetriebnahme:** Verwaltungshandlung zur Durchführung der Änderung, wenn diese genehmigt ist (die Änderung im Sinne von ITIL betrifft nur das Änderungsmanagement und nicht die Durchführung/Implementierung).

-   **Problem:** Ursache eines oder mehrerer wiederkehrender Vorfälle, Ursache eines potenziellen Vorfalls (Risikosituation).

-   **Region:** Bezeichnet eine geografisch abgegrenzte Gruppe von Cloud-Verfügbarkeitszonen, die Netzwerk-, Rechen- und Speicherdienste zur Optimierung der Latenz, Leistung und lokalen Rechtskonformität bereitstellen.

-   **Dienst:** Bezeichnet den SecNumCloud-qualifizierten IaaS-Dienst "Secure Temple", der dem AUFTRAGGEBER vom Anbieter über technische Infrastrukturen bereitgestellt wird, die vom Anbieter gewartet werden, wie in der Rubrik "Beschreibung des Dienstes" dieser Servicevereinbarung beschrieben.

-   **Secure Temple:** Bezeichnet den SecNumCloud-qualifizierten IaaS-Dienst, der von der Firma Cloud Temple angeboten wird, wie in der Bescheinigung definiert, die auf der Website der ANSSI einsehbar ist und der vorliegenden Servicevereinbarung beigefügt ist.

-   **Katastrophe:** Bezeichnet ein schwerwiegendes Ereignis natürlichen oder menschlichen Ursprungs, zufällig oder absichtlich, das der betroffenen Partei erhebliche Verluste und Schäden verursacht.

-   **Überwachung:** Überwachung eines Informationssystems oder eines Dienstes, die die Sammlung verschiedener Daten wie Messwerte und Alarme umfasst. Diese Aktivität beschränkt sich auf Beobachtung und Verfolgung, ohne direkt in die überwachten Elemente einzugreifen, was den Verwaltungsvorgängen vorbehalten ist.

-   **Mandant:** Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe vorbehalten ist, die eine gemeinsame Infrastruktur teilt und gleichzeitig die Unabhängigkeit und Sicherheit der Daten und Anwendungen gewährleistet.

-   **Verfügbarkeitszone (AZ) (Availibility zone):** Ein spezifischer und isolierter Bereich der Cloud-Computing-Infrastruktur, der dazu konzipiert ist, die hohe Verfügbarkeit und Ausfallsicherheit der Dienste durch eine geografische Verteilung der Ressourcen zu gewährleisten.

# 4. Akronyme

  | **Akronym** | **Definition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Änderungsausschuss                                             |
  | **CMDB**     | Configuration Management Database -- Konfigurationsmanagement-Datenbank                 |
  | **COPIL**    | Lenkungsausschuss                                                                       |
  | **COSTRAT**  | Strategischer Ausschuss                                                                 |
  | **COPROJ**   | Projektausschuss                                                                        |
  | **DB**       | Datenbank                                                                               |
  | **DRP**      | Disaster Recovery Plan (Wiederherstellungsplan)                                         |
  | **GTE**      | Garantie der Eskalationszeit                                                            |
  | **GTI**      | Garantie der Eingriffszeit                                                              |
  | **GTR**      | Garantie der Wiederherstellungszeit                                                     |
  | **ITIL**     | Information Technology Infrastructure Library - Best Practices für das IT-Management    |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Operative Unterhaltung                                                                  |
  | **MOA**      | Auftraggeber                                                                            |
  | **MOE**      | Auftragsausführer                                                                       |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system (Betriebssystem)                                                       |
  | **PAQ**      | Qualitätsicherungsplan                                                                  |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Sicherheitssicherungsplan                                                               |
  | **PASSI**    | Anbieter von Sicherheits-Audits für Informationssysteme                                 |
  | **RFC**      | Request For Change -- Änderungsanfrage                                                  |
  | **RGPD**     | Datenschutz-Grundverordnung                                                             |
  | **RPO**      | Recovery Point Objective -- Frische der wiederhergestellten Daten im Schadensfall       |
  | **RTO**      | Recovery Time Objective -- Wiederherstellungszeit des Dienstes im Schadensfall          |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Service Level Vereinbarung                                   |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Anwendungswartung durch Drittanbieter                                                   |
  | **UO**       | Arbeitseinheit                                                                          |
  | **VABE**     | Validierung der Betriebsbereitschaft                                                    |
  | **VABF**     | Validierung der Funktionsfähigkeit                                                      |
  | **VM**       | Virtual Machine (Virtuelle Maschine)                                                    |
  | **VSR**      | Validierung des regelmäßigen Services                                                   |

# 5. Gegenstand der vorliegenden Servicevereinbarung

Die vorliegende Servicevereinbarung legt die Bedingungen fest, unter denen der Anbieter sich verpflichtet, den Dienst dem AUFTRAGGEBER zu
erbringen. Ihr Zweck ist es:

-   Die vom AUFTRAGGEBER in Bezug auf Funktionalität und Zuverlässigkeit des Dienstes erwarteten Leistungsanforderungen festzulegen;

-   Die Verpflichtungen des Anbieters zur Erfüllung der vereinbarten Servicelevels darzulegen;

-   Die spezifisch auf den erbrachten Dienst anwendbaren Regulierungsstandards zu identifizieren;

-   Einheitlichkeit und Integrität bei der Bewertung der Servicequalität sicherzustellen;

-   Die Exzellenz der erbrachten Dienstleistungen zu gewährleisten, anhand quantitativer Leistungsindikatoren bewertet.

Es wird festgelegt, dass im Falle eines Entzugs der SecNumCloud-Qualifikation des Anbieters der Vertrag gekündigt werden kann.

# 6. Audit

Der Dienstanbieter verpflichtet sich, dem AUFTRAGGEBER oder jedem vom Dienstanbieter bestimmten, nicht konkurrierenden Drittprüfer Zugang zu allen notwendigen Dokumenten zu gewähren, die die vollständige Einhaltung der Verpflichtungen gemäß Artikel 28 der Allgemeinen Datenschutzverordnung (GDPR) bestätigen, um damit die Durchführung von Audits zu erleichtern.

Durch die Annahme dieser Servicevereinbarung erteilt der AUFTRAGGEBER seine ausdrückliche Genehmigung an:

1. Die Nationale Agentur für die Sicherheit von Informationssystemen (ANSSI) sowie die zuständige Qualifizierungseinheit, um die Konformität des Dienstes und seines Informationssystems mit dem SecNumCloud-Referenzrahmen zu überprüfen.
2. Einen vom Dienstanbieter ausdrücklich benannten und ordnungsgemäß qualifizierten PASSI-Informationssicherheitsauditor, um Sicherheitstests am Dienst durchzuführen.

# 7. Beschreibung des Dienstes

## 7.1. Modell der geteilten Verantwortung

Der vom Dienstanbieter angebotene Dienst zeichnet sich durch die Bereitstellung der folgenden Dienstleistungen aus, die sich am Prinzip der geteilten Verantwortung orientieren, wie im SecNumCloud-Referenzrahmen dargestellt:

-   Bereitstellung von Rechenressourcen (compute);

-   Bereitstellung von Speicherplatz;

-   Zugang zu Netzwerk- und Internetkonnektivitätsdiensten;

-   Angebot eines Backup-Dienstes für virtuelle Maschinen.

Das Modell der geteilten Verantwortung zwischen dem Dienstanbieter und dem AUFTRAGGEBER im Rahmen des Dienstes ist in §7.1 dargestellt.

Es wird davon ausgegangen, dass der Dienstanbieter seine Expertise einsetzen wird, um die Dienstleistungen nach den besten fachlichen Praktiken und gemäß den Anforderungen des SecNumCloud-Referenzrahmens zu erbringen.

Der Dienst ist nach SecNumCloud zertifiziert (siehe Bescheinigung im Anhang).

## 7.2. Detaillierte Darstellung des Umfangs des Dienstes

| Compute               | Rechenressource des AUFTRAGGEBER-Tenants                                                                                |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| Storage               | Produktionsdaten des AUFTRAGGEBER-Tenants                                                                              |
| Objekt-Speicher S3    | Bereitstellung einer souveränen Objektspeicher-Infrastruktur mit mehreren AZ und kompatibel mit den Standard-S3-APIs.    |
| Backup                | Modul zur Abonnierung des geeigneten Massenspeichers                                                                       |
| Netzwerk-Infrastruktur | Netzressource des AUFTRAGGEBER-Tenants                                                                                   |
| AUFTRAGGEBER-Konsole  | Der Dienst, der dem AUFTRAGGEBER den Zugang zu seinem IaaS-Dienst und die Verwaltung über die Shiva-Schnittstelle ermöglicht |
| Support               | Der Support-Dienst, der die vorherigen Dienste begleitet und ausschließlich diese (*)                                     |

_(*) Im Rahmen des zertifizierten SNC-Dienstes und den Aufgabenbereichen des Dienstanbieters_

### 7.2.1. Datacenter-Infrastrukturen

Der Dienst beinhaltet die Bereitstellung der hier qualifizierten Leistungen für jede Verfügbarkeitszone:

-   Datacenter-Standort in Frankreich für die Region FR, gemäß den neuesten technologischen Standards, mit einem Resilienzniveau von mindestens Tier 3 des Uptime Institute;
-   Bereitstellung technischer Räume in Datacentern zur Unterbringung der für die Produktion des Dienstes notwendigen technischen Ausrüstung, einschließlich Berechnung, Speicherung, Netzwerk, Verkabelung und anderer notwendiger Komponenten;
-   Sichere Stromversorgung über zwei verschiedene Stromkreise zur Gewährleistung der Dienstkontinuität;
-   Bereitstellung klimatisierter Dienste, angepasst zur Einhaltung der Normen und Empfehlungen der Gerätehersteller, um eine optimale Umgebung für die technischen Geräte sicherzustellen;
-   Kontinuierliche Überwachung und detaillierte Metrologie zur genauen Nachverfolgung und proaktiven Verwaltung von Leistung und Sicherheit des erbrachten Dienstes.

Der Dienstanbieter stellt fortschrittliche Branderkennungs- und -löschungssysteme bereit, die darauf ausgelegt sind, jedes Feuer innerhalb der Anlagen effizient zu erkennen und zu neutralisieren. Diese Systeme sind wesentlich, um die Sicherheit der Ausrüstung und Daten zu gewährleisten. Dazu gehören hochpräzise Rauchdetektoren und Löschvorrichtungen, die schnell eingreifen können, ohne die IT-Ausrüstung zu beschädigen. Dieser Dienst ist entscheidend, um Brandrisiken zu vermeiden, mögliche Schäden zu minimieren und die kontinuierliche Durchführung des Betriebs zu gewährleisten.

Der AUFTRAGGEBER wird informiert, dass alle ergriffenen Sicherheitsmaßnahmen und -verfahren, einschließlich jährlicher Umschaltprüfungen auf Generatoren, wesentlich sind, um die Kontinuität und Integrität der erbrachten Dienste sicherzustellen. Diese Praktiken sind darauf ausgelegt, Ausfallrisiken zu minimieren und eine optimale Reaktionsfähigkeit im Falle eines Vorfalls zu gewährleisten. Durch die Annahme dieser Bedingungen erkennt der Kunde die Bedeutung dieser Maßnahmen an und verpflichtet sich, vollumfänglich zu kooperieren, um deren Durchführung zu erleichtern. Der AUFTRAGGEBER wird auch dazu ermutigt, die gelieferten Sicherheitsempfehlungen zu beachten und in seine eigene Risikomanagementstrategie zu integrieren.

### 7.2.2. Software-Infrastruktur zur Steuerung des Dienstes

Der Dienstanbieter stellt dem AUFTRAGGEBER die Verwaltungskonsole und die API zur Nutzung des Dienstes zur Verfügung. Er verpflichtet sich auch, diese Verwaltungskonsole und die API in einem optimalen Betriebszustand zu halten und deren Sicherheit kontinuierlich zu gewährleisten. Diese Verwaltungskonsole und die API werden zusammengefasst als „AUFTRAGGEBER-Schnittstelle“ bezeichnet.

Der Dienstanbieter warnt den AUFTRAGGEBER darauf, dass eine anomale Nutzung der AUFTRAGGEBER-Schnittstelle, insbesondere bei einer Überlastung seiner Befehls-APIs (hammering), automatische Sicherheitsmaßnahmen auslösen kann, die den Zugang zu den Befehls-APIs oder zum Dienst sperren. Es ist zu betonen, dass diese Situation keine Dienstverfügbarkeit darstellt, sondern eine Schutzmaßnahme für den Dienst und die Infrastruktur des Dienstanbieters ist; folglich darf der AUFTRAGGEBER dies nicht als Dienstverfügbarkeit in seinen Berechnungen erfolgen.

Außerdem weist der Dienstanbieter den AUFTRAGGEBER darauf hin, dass identische Anfragen (Duplikate), die an seine APIs gesendet werden, auf eine pro Sekunde begrenzt sind (Throttling). Wenn der AUFTRAGGEBER identische Anfragen häufiger einreicht, können diese nicht als Nichtverfügbarkeit des Dienstes interpretiert werden.

### 7.2.3. Recheninfrastrukturen

Der Dienst umfasst die Bereitstellung der notwendigen Ausrüstung für die Ausführung von Arbeitslasten in Form von virtuellen Maschinen in den vom AUFTRAGGEBER abonnierten Verfügbarkeitszonen.

Dies umfasst:

- Bereitstellung technischer Gehäuse für den ordnungsgemäßen Betrieb der Rechenklingen;
- Bereitstellung der Rechenklingen in den vom AUFTRAGGEBER spezifizierten Mengen und Verteilung nach den Verfügbarkeitszonen seiner Wahl. Es ist zu beachten, dass diese Rechenklingen ausschließlich dem AUFTRAGGEBER gewidmet sind;
- Bereitstellung von Betriebssystemen vom Typ Hypervisor sowie die Sicherstellung und Gewährleistung des Betriebs und der Sicherheit der notwendigen Softwareinfrastruktur zur Verwaltung dieser Betriebssysteme. Es ist hervorzuheben, dass der Dienstanbieter trotz seiner Verantwortung für die operative Wartung und Gesamtsicherheit des Dienstes keine spezifischen Kenntnisse über die Produktionsumgebungen des AUFTRAGGEBER oder deren Lastanforderungen besitzt. Daher liegt die Verantwortung für die Aktualisierung der Betriebssysteme der Hypervisor-Klingen, eine Aktion, die einen Neustart erfordern kann, vollständig beim AUFTRAGGEBER. Diese Maßnahme kann über die AUFTRAGGEBER-Schnittstelle durchgeführt werden.

Die Wahl des Klingenmodells aus dem vom Dienstanbieter angebotenen Katalog liegt in der Verantwortung des AUFTRAGGEBER.

### 7.2.4. Speicherinfrastruktur

Der Dienst umfasst die Bereitstellung einer gemeinsam genutzten SAN- (Storage Area Network) Speicher-Infrastruktur für den AUFTRAGGEBER, die verschiedene Leistungsniveaus bietet. Dieser Dienst umfasst:

- Implementierung und Aufrechterhaltung des dedizierten SAN-Netzwerks in betriebsfähigem und sicherem Zustand;
- Installation und Verwaltung der gemeinsam genutzten Speicher-Arrays zwischen den Kunden, einschließlich deren Betriebs- und Sicherheitszustand, Überwachung und Metrologie;
- Implementierung automatisierter Systeme zur Zuweisung von dem AUFTRAGGEBER dedizierten LUNs (Logical Unit Numbers) in den abonnierten Volumina.

### 7.2.5. Globale Netzwerk-Infrastruktur

Der Dienstanbieter stellt im Rahmen des Dienstes ein globales Netzwerk bereit, das dem AUFTRAGGEBER die Zugangsmöglichkeiten zu seinen gehosteten Systemen erleichtert. Dieser Dienst umfasst:
-   Die Bereitstellung, der Betrieb und die Sicherheit aller Glasfaserverbindungen, die die verschiedenen Verfügbarkeitszonen miteinander verbinden;

-   Die Bereitstellung, der Betrieb und die Sicherheit der technischen Ausrüstungen, die für das ordnungsgemäße Funktionieren des Netzwerks und die Isolierung der verschiedenen Kunden erforderlich sind.

Die Netzwerkkonnektivität des Mandanten, zu Internet oder zu privaten Netzwerken, sowie die Netzwerkausrüstungen, Betreiberverbindungen und andere technische Komponenten, die diese Konnektivität realisieren, sind nicht Teil des Leistungsumfangs. Diese Netzwerkkonnektivität wird gemäß den Bestimmungen des Vertrags umgesetzt.

### 7.2.6. Backup-Infrastruktur

Der Anbieter stellt dem AUFTRAGGEBER einen integrierten, dedizierten und verwalteten Backup-Service zur Verfügung, der dem Schutz seiner virtuellen Maschinen dient. Der Anbieter gewährleistet den Betrieb und die Sicherheit dieses Backup-Dienstes. Der Anbieter garantiert, dass die Backups des AUFTRAGGEBERS außerhalb der Verfügbarkeitszone der gesicherten Arbeitslasten liegen, vorausgesetzt, der AUFTRAGGEBER hat die entsprechenden Leistungseinheiten abonniert.

Dieser Backup-Dienst beschränkt sich auf die Sicherung der virtuellen Maschinen und der Topologie-Konfigurationen der IaaS-Umgebung des AUFTRAGGEBERS im Rahmen des Dienstes. Die Erstellung und Umsetzung einer angemessenen Backup-Strategie durch den AUFTRAGGEBER hängt vom Abschluss spezifischer Leistungseinheiten ab. Es liegt daher in der Verantwortung des AUFTRAGGEBERS, sicherzustellen, dass die technischen Ressourcen beim Anbieter verfügbar sind, um seine Backup-Strategie umzusetzen oder diese an die verfügbaren Mittel anzupassen.

Der Anbieter verpflichtet sich, den AUFTRAGGEBER bei Kapazitätsbeschränkungen zu benachrichtigen und beratende Unterstützung zur Optimierung der Ressourcen zu bieten. Die Verpflichtungen des Anbieters beschränken sich auf die Umsetzung der vom AUFTRAGGEBER im Rahmen der abonnierten Ressourcen geäußerten Anforderungen an die Backup-Strategie.

### 7.2.7. Umsetzung von Disaster-Recovery- oder Business-Continuity-Lösungen

Der Anbieter stellt dem AUFTRAGGEBER alle technischen Lösungen zur Verfügung, die notwendig sind, um eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen hinweg zu gewährleisten. Es liegt in der Verantwortung des AUFTRAGGEBERS, diese Ressourcenverteilung effektiv zu verwalten, wofür er die vom Anbieter zu diesem Zweck verfügbaren Werkzeuge nutzen kann.

## 7.3. Einschränkungen der Dienste im qualifizierten IaaS-Modell

### 7.3.1. Verwaltete Dienste im Betrieb

Es ist wichtig zu beachten, dass vom Dienst ausgeschlossen sind:

-   Die Bereitstellung physischer Komponenten des AUFTRAGGEBERS;

-   Die Netzwerkkonnektivität des Mandanten, zu Internet oder zu privaten Netzwerken, einschließlich der Betreiberverbindungen;

-   Alle verwalteten Dienste oder Verwaltungs- und Wartungsdienste;

-   Jegliche Unterstützung für virtuelle Maschinen auf der Betriebssystemebene und höher in der Verantwortlichkeitspyramide des IaaS, selbst bei einfacher Überwachung.

Es ist jedoch keineswegs ausgeschlossen, dass der AUFTRAGGEBER auf solche Dienste im Rahmen des MSP-Angebots des Anbieters zurückgreift, um in einem verwalteten Dienstemodus auf seine Mandanten zuzugreifen. Diese Dienste werden dann nicht von dieser Service-Vereinbarung und ihren bilateralen Verpflichtungen/Klauseln abgedeckt.

### 7.3.2. Konfiguration der Notfallwiederherstellung

Standardmäßig stellt der Anbieter die Implementierung der IaaS-Ressourcen für den AUFTRAGGEBER bereit, indem er Ressourcen reserviert und die Bereitstellungen so konfiguriert, dass die Verfügbarkeitszonen genutzt werden. Es liegt in der Verantwortung des AUFTRAGGEBERS, die Verfügbarkeitszonen über die AUFTRAGGEBER-Oberfläche auszuwählen.

### 7.3.3. Backup-Konfiguration

Der Backup-Dienst beschränkt sich auf die Sicherung der virtuellen Maschinen und der Topologie-Konfigurationen, die die IaaS-Umgebung der Mandanten des AUFTRAGGEBERS im Rahmen des Dienstes repräsentieren.

Der Backup-Dienst und die Erstellung der Backup-Strategie des AUFTRAGGEBERS unterliegen dem Abschluss eines erforderlichen Speicherplatzes auf dem Massenspeicher, um die Dienstleistung sicherzustellen. Es liegt daher in der Verantwortung des AUFTRAGGEBERS, die notwendigen technischen Mittel beim Anbieter sicherzustellen, um die Backup-Strategie für seinen IT-Bereich zu gewährleisten oder die Backup-Strategie an die implementierten Mittel anzupassen. Der Anbieter verpflichtet sich, den AUFTRAGGEBER über technische Kapazitätsgrenzen zu informieren.

Der Anbieter wird die notwendigen technischen und personellen Mittel zur Sicherung des gehosteten Systems bereitstellen, innerhalb der vom AUFTRAGGEBER abonnierten Ressourcen.

Darüber hinaus obliegt es dem AUFTRAGGEBER für Bereiche, die nicht vom Anbieter abgedeckt werden, seine eigene Backup-Strategie zu definieren und die Backups der VMs selbst zu konfigurieren oder eine Dienstanforderung an den Anbieter zu stellen, um die Backup-Konfiguration für die physischen Server einzurichten, wenn der AUFTRAGGEBER über einen verwalteten Dienstvertrag verfügt, der es dem Anbieter ermöglicht, über die AUFTRAGGEBER-Oberfläche, die Verwaltungsoberfläche, die im Rahmen dieser Service-Vereinbarung zur Verfügung gestellt wird und Backup-Konfiguration-Funktionen bietet, zu agieren.

Darüber hinaus ist dieser Dienst nur in dem Maße verpflichtet, über die AUFTRAGGEBER-Oberfläche die vom AUFTRAGGEBER klar spezifizierte Konfiguration umzusetzen.

Aus Gründen der Flexibilität des Angebots des Anbieters hat der AUFTRAGGEBER die Option, eine Nicht-Backup-Strategie für einige seiner VMs zu wählen. In diesem Fall liegt es in der Verantwortung des AUFTRAGGEBERS, diese Wahl zu treffen. Der Anbieter wird die VMs, die der "no backup"-Strategie zugeordnet sind, nicht sichern. Der Anbieter warnt den AUFTRAGGEBER davor, dass die Wahl der "no backup"-Strategie oder manuelle Backups, den AUFTRAGGEBER einem endgültigen Datenverlust bei einem Ausfall in den unteren Schichten oder in den Verantwortungsschichten des IaaS-Modells aussetzt. In einem solchen Fall wird es unmöglich sein, den Anbieter zur Wiederherstellung der Daten zu verpflichten, da nichts zur Wiederherstellung vorhanden ist. Der Anbieter empfiehlt, die VMs immer zu sichern.

Für alle Themen rund um das installierte Betriebssystem einer virtuellen Maschine und jede darauf ausgeführte Software oder Programm liegt es in der Verantwortung des AUFTRAGGEBERS, die Administrations- und Überwachungsaufgaben innerhalb der Europäischen Union durchzuführen, wenn er möchte, dass alle Schichten des IT-Systems aus der Europäischen Union betrieben und verwaltet werden. Die Administrationstätigkeiten außerhalb des Verantwortungsbereichs des Anbieters im Rahmen dieser Service-Vereinbarung sind in dem Abschnitt "Modell der geteilten Verantwortlichkeiten" dieser Service-Vereinbarung angegeben.

## 7.4. Umsetzung des Dienstes

### 7.4.1. Technische Voraussetzungen

Für die Umsetzung des Dienstes erkennt der AUFTRAGGEBER an, dass er:

-   Mit einer VMware-Virtualisierung in den vom Anbieter unterstützten und bereitgestellten Versionen arbeiten muss;

-   Das Backup-Tool des Anbieters nutzen muss;

-   Feste IP-Adressen angeben muss, von denen der Anbieter dem Zugriff auf die AUFTRAGGEBER-Oberfläche (Whitelisting) autorisieren wird. Änderungen dieser IP-Liste müssen über Dienstanforderungen erfolgen (Liste nicht über die Verwaltungsoberfläche des Dienstes administrierbar).

## 7.5. Standort des Dienstes in Frankreich

Es wird klargestellt, dass keine der Operationen und keine der physischen Komponenten, die an der Bereitstellung des Dienstes beteiligt sind, die Gegenstand dieser Service-Vereinbarung sind, außerhalb der Europäischen Union liegt.

Dies umfasst insbesondere den Support, die betriebliche Überwachung und die Sicherheitsüberwachung (SOC) der technischen Infrastruktur, die den Dienst bereitstellt. Tatsächlich werden alle Speicheraufgaben, Administrations- und Überwachungstätigkeiten sowie alle Verarbeitungen in Frankreich durchgeführt.

### 7.5.1. Standort der die Dienste beherbergenden Rechenzentren

Mit Ausnahme der Operationen der Mitarbeiter und Agenturen des Anbieters werden alle Produktionsoperationen (einschließlich der Datenaufbewahrung und -verarbeitung) und technischen Komponenten der Dienstbereitstellung in Rechenzentren in Frankreich durchgeführt.

### 7.5.2. Standort der Cloud-Temple-Agenturen, die den Dienst betreiben

Die Mitarbeiter von Cloud Temple, die im Dienstbereich tätig sind, arbeiten von den Cloud-Temple-Agenturen aus, die sich ausschließlich in Frankreich befinden. Diese Agenturen befinden sich in Frankreich, in Tours, Lyon, Caen und Paris La Défense.

Der AUFTRAGGEBER wird darüber informiert, dass die Mitarbeiter von Cloud Temple remote arbeiten können. Der Anbieter garantiert jedoch das gleiche Sicherheitsniveau für die Fernzugriffe, insbesondere für VPN-Zugänge. Diese Fernzugriffe werden gemäß den Anforderungen des SecNumCloud-Referenzrahmens umgesetzt.

## 7.6. Support

### 7.6.1. Art des Supports, der den Dienst begleitet

Der Anbieter stellt einen technischen Supportdienst zur Verfügung, der den AUFTRAGGEBER bei der Verwaltung, Fehlerbehebung und Optimierung der bereitgestellten Ressourcen unterstützt. Dieser Dienst deckt ein breites Spektrum an Aktivitäten ab, von der Unterstützung bei der initialen Konfiguration der Dienste bis hin zur fortgeschrittenen technischen Unterstützung zur Lösung spezifischer Probleme.

Hier ist eine Beschreibung der Merkmale und Funktionalitäten des Supportdienstes:

-   Unterstützung bei der ursprünglichen Implementierung der Nutzung des Dienstes;
-   Unterstützung bei der Störungsbehebung;
-   Unterstützung bei der Problemlösung;
-   Überwachung und Beratung zur Optimierung der technischen Basis.
Dans dem Rahmen des Supportdienstes ersetzt der Dienstleister den AUFTRAGGEBER nicht in der Nutzung des Dienstes. Der AUFTRAGGEBER bleibt vollständig verantwortlich für die Konfiguration, den Betrieb seiner VMs und seiner Tenants sowie für die Verwaltung aller Elemente (einschließlich Daten und Anwendungen), die er auf den Infrastrukturen des Dienstleisters gespeichert oder installiert hat. Der technische Supportdienst wird in Übereinstimmung mit den Allgemeinen Geschäfts- und Nutzungsbedingungen erbracht, wobei der Dienstleister eine Verpflichtung zur Mitteln hat.

Der AUFTRAGGEBER verpflichtet sich, den technischen Supportdienst in angemessener Weise zu nutzen, insbesondere davon abzusehen, nicht abonnierte Dienstleistungen beim Dienstleister anzufordern und die Teams des Dienstleisters nicht bei eigenen Kunden oder Dritten, die nicht im Vertrag enthalten sind, einzusetzen. Der Dienstleister behält sich das Recht vor, jede Dienstleistungsanfrage abzulehnen, die diese Kriterien nicht erfüllt.

Das Niveau der Supportverpflichtung hängt vom Abschluss der zugehörigen Support-Leistungseinheiten ab.

### 7.6.2. Anforderung des technischen Supportdienstes

Der technische Support ist über ein Ticketsystem über die AUFTRAGGEBER-Konsole zugänglich und während der normalen Bürozeiten außer an Feiertagen verfügbar (8h - 18h; Montag - Freitag; französischer Kalender und Zeiten). Für Notfälle außerhalb der Geschäftszeiten, insbesondere Vorfälle, die die Produktion erheblich beeinträchtigen, kann der Bereitschaftsdienst über eine dem AUFTRAGGEBER bei der Initialisierung des Dienstes mitgeteilte Nummer erreicht werden.

Für jede Anfrage oder jeden Vorfall ist es zwingend erforderlich, ein Ticket beim Support des Dienstleisters zu erstellen. Die Initialisierung dieses Tickets, welche alle nötigen Informationen enthält, ist wesentlich und markiert den Beginn der Bewertung der Verpflichtungen des Dienstleisters.

Sobald der Dienstleister eine Anfrage oder eine Meldung eines Vorfalls erhält, ob über die Managementkonsole oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Meldung eines Vorfalls ist es unerlässlich, dass der AUFTRAGGEBER dem Dienstleister so viele Details wie möglich über das aufgetretene Problem liefert. Dieser Ansatz ist entscheidend, um eine adäquate Bewertung der Situation, deren Priorisierung und eine effektive Diagnose zu ermöglichen.

Der Kunde erhält dann eine Bestätigungs-E-Mail, die die Erstellung des Tickets und dessen eindeutige Nummer angibt. Der AUFTRAGGEBER kann den Status und die Historie seiner Anfragen und Vorfallmeldungen direkt über die Managementkonsole einsehen.

### 7.6.3. Incident-Management-Prozess

Bei der Meldung eines Vorfalls beginnt das technische Supportteam des Dienstleisters mit einer Untersuchung, um die Ursache des Problems zu identifizieren und eine Diagnose zu erstellen. Der Kunde muss aktiv mit dem Dienstleister zusammenarbeiten, indem er alle notwendigen Informationen liefert und die erforderlichen Tests durchführt. Der Dienstleister kann auf den Dienst des Kunden zugreifen, um den Vorfall zu diagnostizieren.

Sollten die Dienste des Dienstleisters als funktional erachtet werden und der Vorfall ihm nicht zugerechnet werden können, wird der Kunde darüber informiert. Auf Wunsch des Kunden kann der Dienstleister professionelle Dienstleistungen zur Identifikation der Problemursache anbieten, die nach vorheriger Vereinbarung in 30-minütigen Abschnitten in Rechnung gestellt werden.

Wenn der Vorfall in die Verantwortung des Dienstleisters oder eines seiner Unterauftragnehmer fällt, wird dieser die Diagnose abschließen und sich ohne zusätzliche Kosten um die Wiederherstellung des Dienstes kümmern. Die Diagnose basiert auf dem Austausch zwischen den Parteien und den Daten des Dienstleisters, wobei diese Elemente nach Vereinbarung der Parteien als beweiskräftig gelten.

### 7.6.4. Priorisierungsprozess der Bearbeitung

Die Bestimmung des Prioritätsniveaus eines Falles basiert auf einer Matrixanalyse, die die Auswirkungen des Vorfalls und dessen Grad der Kritikalität bewertet:

-   Die Auswirkungensebenen sind wie folgt definiert:

| Ebene der Auswirkungen | Beschreibung                                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Auswirkung I1          | Der oder die Diensten des Dienstleisters sind unterbrochen                                                              |
| Auswirkung I2          | Der oder die Diensten des Dienstleisters sind verschlechtert                                                            |
| Auswirkung I3          | Der oder die Diensten des Dienstleisters sind derzeit stabil, zeigen jedoch Anzeichen eines potenziellen langfristigen Rückgangs |

-   Die Kritikgrade sind wie folgt definiert:

| Kritikalitätsebene    | Beschreibung                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| Kritikalität K1       | Der oder die Dienste des Dienstleisters verschlechtern sich mit besorgniserregender Geschwindigkeit       |
| Kritikalität K2       | Der oder die Dienste des Dienstleisters verschlechtern sich allmählich im Laufe der Zeit                  |
| Kritikalität K3       | Der oder die Dienste des Dienstleisters weisen ein oder mehrere Unannehmlichkeiten ohne wesentliche Folgen auf |

-   Auf der Grundlage einer gründlichen Analyse der Situation, unter Berücksichtigung der Elemente, die die Auswirkung und die Kritikalität bestimmen, wird dem Ticket eine Priorität gemäß der folgenden Entscheidungsmatrix zugewiesen:

| Ebene der Auswirkungen <br/> \ Ebene der Kritikalität | Auswirkung I1       | Auswirkung I2       | Auswirkung I3       |
| -----------------------------------------------      | ------------------- | ------------------- | ------------------- |
| Kritikalität K1                                      | Priorität **P1**     | Priorität **P2**     | Priorität **P3**     |
| Kritikalität K2                                      | Priorität **P2**     | Priorität **P3**     | Priorität **P4**     |
| Kritikalität K3                                      | Priorität **P3**     | Priorität **P4**     | Priorität **P5**     |

Die entsprechenden Service-Level-Verpflichtungen für jedes Prioritätsniveau sind im folgenden Kapitel detailliert.

### 7.6.5. Sprache und Standort des Supportdienstes

Der Support wird vom Dienstleister dem AUFTRAGGEBER mindestens in französischer Sprache bereitgestellt. Der Support kann auch in englischer Sprache bereitgestellt werden.

Die Operationen des Supportdienstes des Dienstleisters für das SecNumCloud-qualifizierte Infrastrukturserviceangebot befinden sich in der Europäischen Union.

# 8. Engagements und Service Level Agreements

Der Dienstleister verpflichtet sich, eine kontinuierliche Überwachung der Leistung und der Sicherheit seiner technischen Infrastruktur, die den Dienst erbringt, sicherzustellen, um deren optimalen Betrieb zu gewährleisten.

Die Nichtverfügbarkeit eines Dienstes, die Gegenstand eines Leistungsindikators ist, wird bei ihrer Identifizierung durch das Überwachungssystem des Dienstleisters oder nach einer Benachrichtigung durch einen Nutzer des AUFTRAGGEBERS anerkannt. Der Beginn der Nichtverfügbarkeit wird auf den frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um eine genaue und faire Aufzeichnung der Ausfallzeit zu gewährleisten.

Das Ende der Nichtverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, entweder durch die Überwachungstools des Dienstleisters oder durch eine Rückmeldung des Nutzers bestätigt, wodurch eine effektive Wiederaufnahme der Operationen und eine genaue Messung der Dauer der Unterbrechung sichergestellt wird.

## 8.1. Verfügbarkeitszusagen der Infrastruktur

Der Dienstleister verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau zu gewährleisten, das den standardisierten Anforderungen für den jeweils angegebenen Zeitraum entspricht. Die Service Level Agreements (SLAs) gelten, sofern der AUFTRAGGEBER seine Systeme in mindestens zwei der in der betreffenden Region vorhandenen Verfügbarkeitszonen implementiert.

Beachtet der AUFTRAGGEBER diese Bedingungen nicht, ist er nicht berechtigt, die Anwendung der entsprechenden SLAs zu beanspruchen, die speziell durch ein Sternchen (\*) gekennzeichnet sind. Der Zugang zu den SLAs erfolgt über die AUFTRAGGEBER-Schnittstelle. Die Messungen werden monatlich berechnet:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Verfügbarkeit der Rechenleistung (Compute): garantierte Verfügbarkeit von 99,99%, berechnet auf einer Basis von 24h/24, 7d/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Verfügbarkeit des Speichers: garantierte Verfügbarkeit von 99,99%, berechnet auf einer Basis von 24h/24, 7d/7.
- **SLA 3     : IC-INFRA_SNC-03** – Zuverlässigkeit der Sicherung: garantierte Verfügbarkeit von 99,99%, berechnet auf einer Basis von 24h/24, 7d/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Netzwerkverfügbarkeit der Infrastruktur: garantierte Verfügbarkeit von 99,99%, berechnet auf einer Basis von 24h/24, 7d/7.
- **SLA 5     : IC-INFRA_SNC-05** – Internetzugang: garantierte Verfügbarkeit von 99,99%, berechnet auf einer Basis von 24h/24, 7d/7.

_**Anmerkungen**_ :

- *Als Reaktion auf einen verteilten Denial-of-Service-Angriff (DDoS) behält sich der Dienstleister das Recht vor, seine Internet-Routing-Konfiguration anzupassen, um die Auswirkungen dieses Angriffs zu begrenzen und seine Infrastruktur zu sichern. Insbesondere wenn eine dem AUFTRAGGEBER zugehörige IP-Adresse betroffen ist, kann der Dienstleister das Blackholing-Verfahren über die BGP-Community verwenden, um den gesamten Datenverkehr zur betroffenen IP-Adresse vorgelagert bei seinen Anbietern zu blockieren, um die Ressourcen des AUFTRAGGEBERS sowie die anderer AUFTRAGGEBER und die Infrastruktur des Dienstleisters zu schützen. Der Dienstleister empfiehlt dem AUFTRAGGEBER dringend, ähnliche Maßnahmen zu ergreifen, wie die Verwendung verfügbarer Web Application Firewalls und eine sorgfältige Konfiguration seiner Sicherheitsgruppen über die API-Bestellung.*
- *Der Anbieter betont die Notwendigkeit für den AUFTRAGGEBER, den Datenverkehr zu minimieren, insbesondere indem er vermeidet, die **SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389) Verwaltungsports sowie die internen Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049) aus dem gesamten Internet (Subnetz 0.0.0.0/0) zugänglich zu machen.*

## 8.2. Verfügbarkeitsverpflichtung der AUFTRAGGEBER-Schnittstelle

-   SLA 6: IC-INFRA_SNC-06 -- Zugriff auf die Verwaltungskonsole des Dienstes: Eine garantierte Verfügbarkeit von 97%, rund um die Uhr, 24 Stunden am Tag und 7 Tage die Woche.
-   SLA 7: IC-INFRA_SNC-07 -- Zugriff auf die Steuerungs-APIs des Dienstes: Eine Verfügbarkeit von 99,9%, berechnet auf einer 24/7-Basis.

## 8.3. Verfügbarkeitsverpflichtung des Supports

- **SLA 8: IC-INFRA_SNC-08** – Hier sind die Leistungszusagen des technischen Supports des Anbieters für Vorfälle, außer geplanten Wartungen:

| Priorität        | Garantie der Eingreifzeit (GTI) | Leistungsziel |
| ---------------- | ------------------------------- | ------------- |
| Priorität **P1** | 30 Min                          | 95%           |
| Priorität **P2** | 2 h                             | 90%           |
| Priorität **P3** | 4 h                             | 90%           |
| Priorität **P4** | 24 h                            | 85%           |
| Priorität **P5** | 48 h                            | 85%           |

- **SLA 9: IC-INFRA_SNC-09** – Hier sind die Leistungszusagen des technischen Supports des Anbieters für Serviceanfragen:

|                    | Garantie der Eingreifzeit (GTI) | Leistungsziel |
| ------------------ | ------------------------------- | ------------- |
| Serviceanfrage     | 4 h                             | 90%           |

*Hinweis:*

- *Die Garantie der Eingreifzeit (GTI) wird ab dem Zeitpunkt berechnet, an dem der AUFTRAGGEBER das Ticket öffnet, bis zum ersten Eingriff des Anbieter-Supports.*
- *Die Untersuchung von Vorfällen im Zusammenhang mit dem AUFTRAGGEBER wird keine Ferneingriffe auf die gehosteten Server des AUFTRAGGEBERS umfassen. Dieser Support beschränkt sich auf die Erklärung der verfügbaren Metriken bezüglich der Umgebung des AUFTRAGGEBERS, um das Verständnis der aufgetretenen Vorfälle oder Leistungsprobleme zu erleichtern. Basierend auf den Ergebnissen dieser Analyse können Empfehlungen vorgeschlagen werden.*

## 8.4. Verfügbarkeitsverpflichtung des S3-Objektspeichers

- **SLA 10: IC-INFRA_SNC-10** – Hier sind die Verfügbarkeitszusage für den S3-Objektspeicher:

| Indikator          | Verpflichtung                                    | Verfügbarkeitsziel   |
| ------------------ | ------------------------------------------------ | -------------------- |
| IC-INFRA-SNC-10.1  | Haltbarkeit der Speicherung eines Objekts         in einer Region | 99.9999999% / Jahr |
| IC-INFRA-SNC-10.2  | Verfügbarkeit der S3-Objektspeicher-API          | 99.99%               |
| IC-INFRA-SNC-10.3  | Maximale Zugriffsverzögerung auf ein Objekt       in einer Region | 150 ms              |

Hinweise:

- Der Objektspeicherdienst ist speziell für die Objektspeicherung konzipiert und muss ausschließlich zu diesem Zweck verwendet werden, **insbesondere ist die Nutzung im Blockmodus strikt ausgeschlossen**. Die Nutzung des Blockmodus durch unzulässige Methoden, wie z.B. der Einsatz von *"FUSE" in einer Linux-Umgebung*, stellt einen Verstoß gegen die festgelegten Nutzungsbedingungen dar. Kein Zwischenfall, Fehlfunktion oder Schaden, der sich aus dieser nicht konformen Nutzung ergibt, wird durch die in dieser Servicevereinbarung festgelegten Service Level Agreements (SLA) abgedeckt.
- Die Garantie der Haltbarkeit ist an eine Nutzung im Einklang mit den aktuellen Best Practices und Standards gebunden und schließt ausdrücklich jegliche Modifikation der Daten aus, sei sie beabsichtigt oder versehentlich, die durch Handlungen des AUFTRAGGEBERS erfolgen.

## 8.5. Präzisierung zur Sicherungsverpflichtung

Die für den AUFTRAGGEBER eingesetzte Sicherungsstrategie setzt den Abschluss entsprechender Leistungseinheiten voraus.

Der Anbieter verpflichtet sich, eine Sicherungslösung bereitzustellen, die es dem AUFTRAGGEBER ermöglicht, die gewünschten Sicherungsrichtlinien anzuwenden.

Es wird klargestellt, dass der Verantwortungsbereich des Anbieters bei der Bereitstellung eines Sicherungsdienstes endet und der AUFTRAGGEBER über die AUFTRAGGEBER-Schnittstelle die ordnungsgemäße Umsetzung der zugehörigen Richtlinien überwachen muss.

Es wird klargestellt, dass das Management der Speicherkapazitäten für den Sicherungsspeicherraum in der Verantwortung des AUFTRAGGEBERS liegt. Der Anbieter stellt den Nutzungsgrad über die Konsole zur Verfügung.

*Beispiel: Nicht-Sicherung einer virtuellen Maschine:*

*Der AUFTRAGGEBER ist dafür verantwortlich, die ordnungsgemäße Ausführung der Sicherungsrichtlinien zu überprüfen/überwachen. Wenn der AUFTRAGGEBER feststellt, dass eine virtuelle Maschine nicht gesichert wird, obliegt es ihm, die Ursache zu ermitteln. Der AUFTRAGGEBER kann den Support des Anbieters gemäß dem abonnierten Support-Level um Unterstützung bitten.*

**Das SLA 8: IC-INFRA_SNC-08 und SLA 9**, wird ausschließlich im Falle eines Sicherungsdienst-Vorfalls anwendbar sein.

# 9. Organisation der vertraglichen Beziehung

## 9.1. Verantwortlichkeiten des Anbieters

Der Anbieter verpflichtet sich:

- den AUFTRAGGEBER angemessen zu informieren (zum Beispiel im Falle einer Kapazitätsgrenze der technischen Ressourcen, die den Dienst bereitstellen).

- den AUFTRAGGEBER förmlich und innerhalb eines Monats über alle rechtlichen, organisatorischen oder technischen Änderungen zu informieren, die sich auf die Konformität des Dienstes mit den Anforderungen des Schutzes vor außereuropäischen Gesetzen auswirken könnten (19.6 des SNC v3.2-Referenzrahmens).

- dem AUFTRAGGEBER Schnittstellen und Dienstschnittstellen bereitzustellen, die mindestens in französischer Sprache verfügbar sind.

- die spezifischen branchenspezifischen Anforderungen zu berücksichtigen, die mit den vom AUFTRAGGEBER anvertrauten Informationen im Rahmen der Dienstimplementierung verbunden sind, und dies im Rahmen der Verantwortung des Anbieters.

- keine Informationen bezüglich der Dienstleistung an Dritte weiterzugeben, es sei denn, der AUFTRAGGEBER erteilt eine formelle und schriftliche Genehmigung.

- alle notwendigen Informationen für die Durchführung von Compliance-Audits gemäß den Bestimmungen von Artikel 28 der DSGVO bereitzustellen.

- dem AUFTRAGGEBER über die vorliegende Servicevereinbarung jegliche Sicherheitsvorfälle zu melden, die den Dienst oder die Nutzung des Dienstes durch den AUFTRAGGEBER (einschließlich der AUFTRAGGEBER-Daten) betreffen.

- einen qualifizierten Anbieter für Informationssicherheits-Audits (PASSI), der vom Anbieter beauftragt wurde, zu autorisieren, den Dienst sowie sein Informationssystem gemäß dem Kontrollplan des Anbieters zu auditieren. Darüber hinaus verpflichtet sich der Anbieter, alle notwendigen Informationen für die erfolgreiche Durchführung der Compliance-Audits gemäß Artikel 28 der DSGVO bereitzustellen, die vom Auftragsgeber oder einem beauftragten Dritten durchgeführt werden.

- dem AUFTRAGGEBER als Auftragsverarbeiter gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) Unterstützung und Beratung zu bieten und ihn zu warnen, sobald eine von ihm erteilte Anweisung möglicherweise eine Verletzung der Datenschutzregeln darstellt.

- bei Projekten, die das Sicherheitsniveau des Dienstes beeinflussen oder beeinflussen könnten, den AUFTRAGGEBER schriftlich über die potenziellen Auswirkungen, die umgesetzten Abhilfemaßnahmen und die verbleibenden Risiken zu informieren.

- alle notwendigen Verfahren zu dokumentieren und umzusetzen, um die gesetzlichen, regulatorischen und vertraglichen Anforderungen zu erfüllen, die für den Dienst gelten, sowie die spezifischen Sicherheitsbedürfnisse des AUFTRAGGEBERS, die dieser festgelegt und im Vertrag festgehalten hat, zu berücksichtigen. Auf Anfrage des AUFTRAGGEBERS ermöglicht das Dokumentationsmodul der AUFTRAGGEBER-Schnittstelle einen sicheren Austausch dieser Dokumente.

- auf Anfrage des AUFTRAGGEBERS eine Bewertung der Risiken im Zusammenhang mit der Unterwerfung der AUFTRAGGEBER-Daten unter das Recht eines Nicht-EU-Staates bereitzustellen.

Auf formelle und schriftliche Anfrage des AUFTRAGGEBERS verpflichtet sich der Anbieter:

1. Dem AUFTRAGGEBER die Hausordnung und die Ethik-Charta des Anbieters zur Verfügung zu stellen;

2. Dem AUFTRAGGEBER die bei Verstößen gegen die Sicherheitsrichtlinie zu erwartenden Sanktionen zugänglich zu machen;

3. Dem AUFTRAGGEBER alle ihn betreffenden Ereignisse in den Journalführungsinformationen des Dienstes zur Verfügung zu stellen;

4. Am Ende des Vertrags verpflichtet sich der Anbieter, die Daten und technischen Daten des AUFTRAGGEBERS gemäß dem in dieser Servicevereinbarung beschriebenen "Datentilgungsverfahren am Vertragsende" zu löschen.

5. eine sichere Löschung aller Daten des AUFTRAGGEBERS durch vollständiges Überschreiben jedes Mediums, das seine Daten im Rahmen des Dienstes gehostet hat, zu gewährleisten.

6. die vollständige Liste der Dritten bereitzustellen, die Zugang zu den Infrastrukturen haben, auf denen sich die Daten befinden.
Leistungserbringer wird eine vollständige und aktuelle Liste der Dritten, die auf die Infrastrukturen mit den Daten zugreifen dürfen, dem AUFTRAGGEBER zur Verfügung stellen und ihn über Änderungen bezüglich der Subunternehmer informieren. Der Leistungserbringer und alle seine Tochtergesellschaften verpflichten sich, die Grundwerte der Europäischen Union zu respektieren, nämlich die Menschenwürde, die Freiheit, die Demokratie, die Gleichheit, den Rechtsstaat sowie die Achtung der Menschenrechte. Die vom Leistungserbringer erbrachte Dienstleistung entspricht den geltenden Vorschriften in Bezug auf Grundrechte und die Werte der Europäischen Union bezüglich der Achtung der Menschenwürde, der Freiheit, der Gleichheit, der Demokratie und des Rechtsstaats.

## 9.2. Begrenzung der Haftung des Leistungserbringers

Aufgrund aller in dieser Dienstleistungsvereinbarung genannten Definitionen und Bedingungen ist die Haftung des Leistungserbringers wie folgt begrenzt:

1. Das in der Rubrik „Modell der geteilten Verantwortung“ dieser Dienstleistungsvereinbarung beschriebene Modell der geteilten Verantwortung begrenzt faktisch das Engagement des Leistungserbringers in den Funktionsebenen, die „oberhalb“ der Bereitstellung von Rechen-, Netzwerk-, Speicher- und Sicherungsressourcen liegen. Dies schließt insbesondere und ohne Einschränkung aus:

    -   Die Verwaltung dessen, was auf den virtuellen Maschinen installiert ist (OS, Middleware, Anwendungen usw.);

    -   Die Aktualisierung der vom AUFTRAGGEBER auf seinen Maschinen installierten Betriebssysteme und anderer Software in seinen Tenants;

    -   Die Sicherheit der auf den virtuellen Maschinen installierten Programme, Software und Anwendungen;

    -   Die Aktualisierung der virtuellen Maschinen;

    -   Die Sicherung der Daten auf Anwendungsebene.

2.  Der Leistungserbringer kann keine Zusicherungen zur Sicherung der Tenants des AUFTRAGGEBERS machen, ohne dass der AUFTRAGGEBER zuvor entsprechende Leistungseinheiten abonniert hat.

3.  Der Leistungserbringer kann keine Ansprüche auf das Eigentum an den vom AUFTRAGGEBER übermittelten und erzeugten Daten erheben. Diese sind Eigentum des AUFTRAGGEBERS.

4.  Der Leistungserbringer weist darauf hin, dass er die vom AUFTRAGGEBER übermittelten und erzeugten Daten in keinem Fall ohne vorherige Zustimmung des AUFTRAGGEBERS nutzen darf.

5.  Der Leistungserbringer lehnt jegliche Verantwortung für die physisch gehosteten und vom Leistungserbringer verwalteten Komponenten ab, die jedoch direktes Eigentum des AUFTRAGGEBERS oder eines Dritten sind, mit dem der AUFTRAGGEBER einen Vertrag abgeschlossen hat. Das Hosting physischer Komponenten von Kunden ist kein Teil des Dienstes und daher nicht Gegenstand dieser Dienstleistungsvereinbarung. Es liegt in der Verantwortung des AUFTRAGGEBERS, das Maß der Abhängigkeit oder Anhänglichkeit, das diese Komponenten gegenüber dem qualifizierten SecNumCloud IaaS-Dienst bedeuten, zu bewerten.

## 9.3. Zugangsbeschränkungen

Im Rahmen des Dienstes ist es dem Leistungserbringer streng untersagt, ohne vorherige Genehmigung auf die Tenants des AUFTRAGGEBERS zuzugreifen. Es liegt in der Verantwortung des AUFTRAGGEBERS, dem Personal des Leistungserbringers die erforderlichen Zugangsrechte entsprechend den spezifischen Anforderungen des Hostings und gegebenenfalls der Support-Dienstleistungen zu gewähren, falls der AUFTRAGGEBER diese Option gewählt hat.

Der AUFTRAGGEBER erkennt an, dass diese Zugriffsrechte ausschließlich für die Erbringung der vereinbarten Dienstleistungen gewährt werden, um eine sichere und vertragskonforme Verwaltung zu gewährleisten.

Fernzugriff durch Dritte, die an der Dienstleistung des Leistungserbringers beteiligt sind, ist streng verboten. Sollte ein spezifisches technisches Erfordernis einen solchen Zugang notwendig machen, kann dieser erst nach ausdrücklicher Benachrichtigung des AUFTRAGGEBERS, Vorlage einer detaillierten Begründung und Erhalt seiner schriftlichen Zustimmung eingerichtet werden.

Diese Maßnahme stellt die Kontrolle und Sicherheit der Daten des AUFTRAGGEBERS sicher, indem gewährleistet wird, dass jede Ausnahme von der Regel ordnungsgemäß autorisiert und dokumentiert wird.

## 9.4. Verantwortlichkeiten der an der Bereitstellung des Secure Temple-Dienstes beteiligten Dritten

Der Leistungserbringer verwaltet die Liste der Drittpartner, die an der Bereitstellung des Dienstes beteiligt sind. Diese Dritten umfassen Herausgeber, Dienstleister (des Leistungserbringers) und andere Anbieter, die an der Bereitstellung des Dienstes beteiligt sind. Der Leistungserbringer wendet folgende Maßnahmen auf diese Dritten an:

- Der Leistungserbringer verlangt von den an der Implementierung des Dienstes beteiligten Dritten, dass sie in ihrem Beitrag zum Dienst ein Sicherheitsniveau einhalten, das mindestens dem entspricht, das er in seiner eigenen Sicherheitsrichtlinie für den Secure Temple-Dienst beibehält;

- Der Leistungserbringer schließt mit jedem an der Implementierung des Dienstes beteiligten Dritten Audit-Klauseln ab, die es einer Qualifizierungsstelle ermöglichen, zu überprüfen, ob diese Dritten die gesetzlichen Anforderungen und die SNC-Anforderungen einhalten, sodass der Leistungserbringer seine Verpflichtungen in dieser Dienstleistungsvereinbarung erfüllen kann.

- Der Leistungserbringer implementiert ein Verfahren zur regelmäßigen Kontrolle der Maßnahmen, die von den an der Implementierung des Dienstes beteiligten Dritten zur Einhaltung der Anforderungen des Leistungserbringers zur Erfüllung seiner Verpflichtungen in dieser Dienstleistungsvereinbarung umgesetzt wurden.

- Der Leistungserbringer implementiert ein Verfahren zur Überwachung der Änderungen, die von den an der Implementierung des Dienstes beteiligten Dritten vorgenommen werden und die das Sicherheitsniveau des Informationssystems des Dienstes beeinträchtigen könnten.

## 9.5. Verantwortlichkeiten und Pflichten des AUFTRAGGEBERS

Zur Erinnerung: Der Leistungserbringer stellt dem AUFTRAGGEBER eine Plattform zur Ausführung virtueller Maschinen zur Verfügung, deren Konfiguration in der Verantwortung des AUFTRAGGEBERS liegt. Jede virtuelle Maschine kann ohne eine zugehörige Sicherungsrichtlinie nicht laufen. Der Leistungserbringer definiert über seine Schnittstellen automatische Sicherungsrichtlinien. Es liegt jedoch in der Verantwortung des AUFTRAGGEBERS, diese Sicherungsrichtlinien zu aktivieren und somit die virtuellen Maschinen zu aktivieren.

Der AUFTRAGGEBER erlaubt der ANSSI und der SNC-Qualifizierungsstelle, den Dienst und die technische Infrastruktur, die den Dienst bereitstellt, zu auditieren.

## 9.6. Rechte des AUFTRAGGEBERS

Der AUFTRAGGEBER kann jederzeit während der Vertragslaufzeit eine Beschwerde bezüglich des qualifizierten Dienstes bei der ANSSI einreichen.

Der AUFTRAGGEBER kann jederzeit den Leistungserbringer bitten, ihm seine interne Regelung und seine Ethikcharta zugänglich zu machen.

## 9.7. Datenlöschung zum Vertragsende

Am Ende des Vertrags, ob er abläuft oder aus irgendeinem Grund gekündigt wird, verpflichtet sich der Leistungserbringer, alle Daten des AUFTRAGGEBERS, einschließlich technischer Daten, sicher zu löschen. Der Leistungserbringer wird sicherstellen, dass er dem AUFTRAGGEBER eine formelle Vorankündigung mit einer Frist von einundzwanzig (21) Kalendertagen übermittelt. Die Daten des AUFTRAGGEBERS werden dann innerhalb einer maximalen Frist von dreißig (30) Tagen nach dieser Benachrichtigung gelöscht.

Zur Bestätigung dieser Löschung stellt der Leistungserbringer dem AUFTRAGGEBER ein Zertifikat aus, das die Datenlöschung bestätigt.

# 10. Lebenszyklus dieser Dienstleistungsvereinbarung

## 10.1. Inkrafttreten der Dienstleistungsvereinbarung

Diese Dienstleistungsvereinbarung tritt am Tag ihrer Unterzeichnung durch den AUFTRAGGEBER in Kraft.

Die Erhebung, Handhabung, Speicherung und Verarbeitung der Daten, die im Rahmen der Vorverkaufsphase, der Implementierung und der Beendigung des Dienstes erfolgen, geschehen unter Einhaltung der geltenden Gesetzgebung.

## 10.2. Änderungen der Dienstleistungsvereinbarung

Änderungen oder Ergänzungen dieser Dienstleistungsvereinbarung erfolgen ausschließlich auf Anfragen der zu diesem Zweck benannten Leitungsgremien. Diese Änderungsvorschläge werden von den Parteien geprüft, die berechtigt sind, die Aspekte zu bestimmen, die eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede Änderung der Dienstleistungsvereinbarung, die die ursprünglich festgelegten finanziellen Bedingungen verändert, die Erstellung und Unterzeichnung eines Nachtrags zum laufenden Vertrag erfordert.

Die Faktoren, die eine Überarbeitung dieser Dienstleistungsvereinbarung erfordern können, umfassen unter anderem:

- Die Weiterentwicklung der technischen Infrastruktur, die den IaaS-Dienst bereitstellt;

- Anpassungen der vom Leistungserbringer bereitgestellten Dienste zur Erbringung des Dienstes;

- Variationen der eingegangenen Verpflichtungen und der anwendbaren Sanktionen;

- Organisatorische Umstrukturierungen innerhalb des AUFTRAGGEBERS oder des Leistungserbringers;

- Erweiterung oder Reduzierung des Anwendungsbereichs des Dienstes.

Die Verwaltung der Versionen und Überarbeitungen der Dienstleistungsvereinbarung ist im Vorwort des Dokuments festgehalten, um die Nachverfolgung zu erleichtern.

### 10.2.1. Vom AUFTRAGGEBER ausgelöste Veränderungen

Die Änderungen der Dienstleistungsvereinbarung können unter anderem folgende Ursprünge haben:

- Eine Änderung der vom Leistungserbringer verwalteten Infrastruktur;

- Eine Modifikation der vom Leistungserbringer implementierten Dienste;

- Eine Änderung der vom Leistungserbringer eingegangenen Service-Level-Verpflichtungen.

### 10.2.2. Vom Leistungserbringer ausgelöste Veränderungen

Jede Änderung der Dienstleistungsvereinbarung unterliegt der Zustimmung des AUFTRAGGEBERS. Es wird verstanden, dass jede validierte Änderung oder Ergänzung, die die finanziellen Elemente des Vertrags verändert, die Unterzeichnung eines Nachtrags erforderlich machen kann.

## 10.3. Reversibilität

Darüber hinaus verpflichtet sich Cloud Temple, eine Überprüfung dieser Dienstleistungsvereinbarung (einschließlich ihrer Kündigung) ohne Strafe für den AUFTRAGGEBER im Falle eines Verlusts der SecNumCloud-Qualifikation zu ermöglichen.
Die Dienste umfassen keine Verpflichtung zur Reversibilität (d. h. Hilfe für den Kunden, damit er sein System zu einem anderen Anbieter migrieren kann), mit Ausnahme der Bereitstellung der SPONSORschnittstelle durch den Anbieter, die es dem SPONSOR ermöglicht, seine Daten zu sichern und wiederherzustellen, einschließlich insbesondere der Konfigurationsdaten ihres Informationssystems über eine der folgenden technischen Modalitäten nach Wahl des SPONSORS: die Bereitstellung von Dateien in einem oder mehreren dokumentierten und außerhalb des vom Anbieter bereitgestellten Dienstes verwertbaren Formaten oder über die Einrichtung technischer Schnittstellen, die den Zugriff auf die Daten gemäß einem dokumentierten und verwertbaren Schema (API) ermöglichen.

Der SPONSOR, als alleiniger Herr seines Systems, muss alles tun, um diese Operation nach Bedarf zu erleichtern (was insbesondere beinhaltet, dass er eine strenge Dokumentation zu diesem Zweck erstellt) sowie die Ausarbeitung von Reversibilitätsplänen. Für den Fall, dass der SPONSOR zusätzliche Dienstleistungen benötigt, kann der Anbieter eine Beratungsmission diesbezüglich im Rahmen eines speziell zu verhandelnden Vertrags anbieten.

# 11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes

## 11.1. Incident- und Unterbrechungsmanagement

### 11.1.1. Incidents

#### 11.1.1.1. Arten von Incidents, die im Rahmen dieser Servicevereinbarung behandelt werden

-   Schäden

-   Störungen und Ausfälle

-   Sicherheitsvorfälle:

-   Beeinträchtigung der Dienstverfügbarkeit

-   Beeinträchtigung der Dienstvertraulichkeit

-   Beeinträchtigung der Dienstintegrität

#### 11.1.1.2. Behandlung von Incidents

-   Verzögerungen

-   Nachträgliche Aktionen

-   Archivierung von Dokumenten, die Sicherheitsvorfälle detaillieren.

-   Benachrichtigung über Verletzung personenbezogener Daten (online): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Benachrichtigungsgrad von Sicherheitsvorfällen

Der SPONSOR ist dafür verantwortlich, die Schweregrade der Sicherheitsvorfälle auszuwählen, über die er informiert werden möchte, z. B. durch ihre Formulierung in einem auf den Dienst anwendbaren PAS.

Standardmäßig wird der SPONSOR informiert über:

-   Sicherheitsvorfälle mit Auswirkungen (Auswirkungen I1 und I2 gemäß der im Priorisierungsprozess dieser Servicevereinbarung definierten Aufprallskala);

-   Verletzungen personenbezogener Daten, für die der SPONSOR verantwortlich ist;

-   Verletzungen personenbezogener Daten, für die der Anbieter verantwortlich ist und die personenbezogene Daten des SPONSORS enthalten.

## 11.2. Wartung des Dienstes

### 11.2.1. Art der Wartung

Die sichergestellte Wartung besteht in der Implementierung:

-   Des Plans zur Aufrechterhaltung der Betriebsbedingungen des Dienstes, um gute Verfügbarkeitsindikatoren zu gewährleisten, wie vom Anbieter oben verpflichtet;

-   Des BCP/DRP-Plans, falls vom SPONSOR abonniert, ausgelöst nach möglichen auftretenden Vorfällen.

### 11.2.2. Remote-Zugriff von Cloud Temple im Bereich des SPONSORS

Der Anbieter verpflichtet sich im Rahmen dieser Servicevereinbarung zu keinem Zugriff auf Tenants und die Benutzeroberfläche des SPONSORS.

Es obliegt dem SPONSOR, dem Personal des Anbieters die erforderlichen Zugriffe zu gewähren. Der SPONSOR erkennt an, dass die Zugriffe im Rahmen des Hostings und letztendlich der IT-Verwaltung (falls vom SPONSOR abonniert) verwendet werden.

### 11.2.3. Remote-Zugriff Dritter, die an der Bereitstellung des Dienstes im Bereich des SPONSORS beteiligt sind

Kein Remote-Zugriff Dritter, die an der Bereitstellung des Dienstes beteiligt sind, ist gestattet.

Falls ein technischer Bedarf dies notwendig macht, wird dieser Zugangstyp nur nach Benachrichtigung des SPONSORS, Begründung und Einholung seiner schriftlichen Zustimmung erfolgen.

# 12. Verfahren zur Datenlöschung am Ende des Vertrags

Am Ende des Vertrags, sei es am Ende der Laufzeit oder aus einem anderen Grund, stellt der Anbieter die sichere Löschung aller im Rahmen des Dienstes verarbeiteten Daten sicher, einschließlich der technischen Daten des SPONSORS. Der Anbieter gibt eine formelle Vorwarnung mit einer Frist von einundzwanzig (21) Kalendertagen. Die Daten des SPONSORS werden innerhalb einer maximalen Frist von dreißig (30) Tagen nach der Benachrichtigung gelöscht. Der Anbieter stellt dem SPONSOR eine Löschungsbescheinigung aus.

# 13. Anwendbares Recht

## 13.1. Allgemein

Das anwendbare Recht, dem diese Servicevereinbarung unterliegt, ist das französische Recht.

## 13.2. Einhaltung der geltenden Gesetze und Vorschriften

Der Anbieter verpflichtet sich zu Folgendem:

-   Die Identifizierung der im Rahmen des Dienstes anwendbaren gesetzlichen und regulatorischen Anforderungen;

-   Die Einhaltung der gesetzlichen und regulatorischen Anforderungen für die dem Anbieter anvertrauten Daten;

-   Die Einhaltung des Datenschutzgesetzes und der DSGVO;

-   Die Implementierung von Maßnahmen zum Schutz personenbezogener Daten;

-   Die Implementierung eines rechtlichen und regulatorischen Monitoring-Prozesses;

-   Den Aufbau und die Aufrechterhaltung geeigneter Beziehungen oder Monitoring mit sektorspezifizierten Behörden im Zusammenhang mit der Art der im Rahmen des Dienstes verarbeiteten Daten. Dies umfasst insbesondere die ANSSI, den CERT-FR und die CNIL.

## 13.3. DSGVO

Als Auftragsverarbeiter im Sinne von Artikel 28 der Datenschutz-Grundverordnung (DSGVO) verpflichtet sich der Anbieter:

-   Transparenz und Nachverfolgbarkeit sicherzustellen;

-   Einen DSB zu benennen, der für die Definition und Implementierung der Maßnahmen zum Schutz personenbezogener Daten verantwortlich ist;

-   Unterstützung und Beratung dem SPONSOR zu bieten und ihn zu warnen, wenn eine Anweisung des SPONSORS eine Verletzung der Datenschutzvorschriften darstellt, sofern der Anbieter dies erkennen kann;

-   Eine Sicherheitsgarantie für die verarbeiteten Daten (aufgrund der SecNumCloud-Qualifikation).

## 13.4. Schutz gegenüber außereuropäischem Recht

Falls der Anbieter im Rahmen des Dienstes auf die Dienstleistungen eines Drittunternehmens - einschließlich eines Unterauftragnehmers - zurückgreift, das seinen Sitz, seine zentrale Verwaltung oder seine Hauptniederlassung in einem Nicht-EU-Staat hat oder im Besitz oder unter Kontrolle eines Drittunternehmens mit Sitz außerhalb der EU steht, verpflichtet sich der Anbieter, dass dieses Drittunternehmen keinen Zugang zu den durch den ‚Secure Temple‘-Dienst verarbeiteten Daten erhält.

Zur Erinnerung, die betreffenden Daten sind diejenigen, die dem Anbieter vom SPONSOR anvertraut wurden sowie alle technischen Daten, die Informationen über die SPONSOREN enthalten.

Für die Zwecke dieses Artikels wird der Begriff der Kontrolle gemäß Artikel II von L233-3 des Handelsgesetzbuchs verstanden.

# 14. UNTERSCHRIFTEN

Erstellt in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\__, am
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Für Cloud Temple, der ANBIETER

Für \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, der SPONSOR
