---
title: IaaS-Dienstvereinbarung
---
  
![Logo Cloud Temple](images/ct.png)

# 1. **IaaS-DIENSTVEREINBARUNG**

| **Empfänger:**                        | **AUFTRAGGEBER**                               |
| :------------------------------------ | :--------------------------------------------- |
| **Dokumentenreferenz:**               | CT.AM.JUR.ANX_Dienstvereinbarung_IaaS_v2.0     |
| **Ihre Ansprechpartner:**             | *Vorname* *Nachname*                           |
|                                       | Account Manager                                |
|                                       | E-Mail: *vorname.nachname*@cloud-temple.com    |
| **Datum der letzten Aktualisierung:** | 03/04/2024                                      |
| **Vertragsgültigkeitsdatum:**         | Tag TT JJJJ                                    |


----------------------------------------------------------------------------------

| **Version** | **Datum** | **Aktion**                                     | **Autor**       |
| ----------- | ---------- | ---------------------------------------------- | --------------- |
| v0.1        | 07/06/2022 | Erstentwurf                                   | Lorena ALCALDE  |
| v0.2        | 14/09/2022 | Erweiterung                                   | Lorena ALCALDE  |
| v1.0        | 30/12/2022 | Integration Indikatoren                       | Lorena ALCALDE  |
| v1.1        | 23/01/2023 | Fußzeilenänderung                             | Lorena ALCALDE  |
| v1.2        | 22/05/2023 | Erweiterung                                   | Lorena ALCALDE  |
| v1.3        | 29/06/2023 | Erweiterung                                   | Lorena ALCALDE  |
| v1.4        | 06/11/2023 | Kapitaländerung und Erweiterung               | Lorena ALCALDE  |
| v1.5        | 30/11/2023 | Erweiterung                                   | Lorena ALCALDE  |
| v1.6        | 21/03/2024 | Erweiterung                                   | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | Konformitätsanpassungen SNC                   | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Veröffentlichung                              | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **INHALTSVERZEICHNIS**

- [1. **IaaS-DIENSTVEREINBARUNG**](#1-iaas-dienstvereinbarung)
- [2. **INHALTSVERZEICHNIS**](#2-inhaltsverzeichnis)
- [3. Präambel und Glossar](#3-präambel-und-glossar)
  - [3.1. Präambel](#31-präambel)
  - [3.2. Glossar](#32-glossar)
- [4. Akronyme](#4-akronyme)
- [5. Gegenstand dieser Dienstvereinbarung](#5-gegenstand-dieser-dienstvereinbarung)
- [6. Audit](#6-audit)
- [7. Dienstbeschreibung](#7-dienstbeschreibung)
  - [7.1. Gemeinsames Verantwortungsmodell](#71-gemeinsames-verantwortungsmodell)
  - [7.2. Detaillierte Darstellung des Dienstumfangs](#72-detaillierte-darstellung-des-dienstumfangs)
    - [7.2.1. Rechenzentrumsinfrastrukturen](#721-rechenzentrumsinfrastrukturen)
    - [7.2.2. Software-Infrastruktur zur Steuerung des Dienstes](#722-software-infrastruktur-zur-steuerung-des-dienstes)
    - [7.2.3. Recheninfrastrukturen](#723-recheninfrastrukturen)
    - [7.2.4. Speicherinfrastruktur](#724-speicherinfrastruktur)
    - [7.2.5. Globales Netzwerk-Infrastruktur](#725-globales-netzwerk-infrastruktur)
    - [7.2.6. Backup-Infrastruktur](#726-backup-infrastruktur)
    - [7.2.7. Implementierung von Lösungen für Notfallwiederherstellung und Geschäftskontinuität](#727-implementierung-von-lösungen-für-notfallwiederherstellung-und-geschäftskontinuität)
  - [7.3. Einschränkungen der Dienste im qualifizierten IaaS-Modell](#73-einschränkungen-der-dienste-im-qualifizierten-iaas-modell)
    - [7.3.1. Verwaltete Dienstleistungen im RUN](#731-verwaltete-dienstleistungen-im-run)
    - [7.3.2. Konfiguration der Notfallwiederherstellung](#732-konfiguration-der-notfallwiederherstellung)
    - [7.3.3. Konfiguration des Backups](#733-konfiguration-des-backups)
  - [7.4. Implementierung des Dienstes](#74-implementierung-des-dienstes)
    - [7.4.1. Technische Voraussetzungen](#741-technische-voraussetzungen)
  - [7.5. Lokalisierung des Dienstes in Frankreich](#75-lokalisierung-des-dienstes-in-frankreich)
    - [7.5.1. Standort der Rechenzentren, die den Dienst bereitstellen](#751-standort-der-rechenzentren-die-den-dienst-bereitstellen)
    - [7.5.2. Standort der Cloud Temple-Agenturen, die den Dienst betreiben](#752-standort-der-cloud-temple-agenturen-die-den-dienst-betreiben)
  - [7.6. Support](#76-support)
    - [7.6.1. Art des den Dienst begleitenden Supports](#761-art-des-den-dienst-begleitenden-supports)
    - [7.6.2. Inanspruchnahme des technischen Supports](#762-inanspruchnahme-des-technischen-supports)
    - [7.6.3. Verfahren zur Vorfallbehandlung](#763-verfahren-zur-vorfallbehandlung)
    - [7.6.4. Verfahren zur Priorisierung der Behandlungen](#764-verfahren-zur-priorisierung-der-behandlungen)
    - [7.6.5. Sprache und Standort des Supports](#765-sprache-und-standort-des-supports)
- [8. Verpflichtungen und Service Level](#8-verpflichtungen-und-service-level)
  - [8.1. Infrastruktur-Verfügbarkeitsverpflichtungen](#81-infrastruktur-verfügbarkeitsverpflichtungen)
  - [8.2. Verfügbarkeitsverpflichtung des AUFTRAGGEBER-Interfaces](#82-verfügbarkeitsverpflichtung-des-auftraggeber-interfaces)
  - [8.3. Support-Verfügbarkeitsverpflichtung](#83-support-verfügbarkeitsverpflichtung)
  - [8.4. Verfügbarkeitsverpflichtung des S3-Objektspeichers](#84-verfügbarkeitsverpflichtung-des-s3-objektspeichers)
  - [8.5. Präzisierung bezüglich der Backup-Verpflichtung](#85-präzisierung-bezüglich-der-backup-verpflichtung)
- [9. Organisation der Vertragsbeziehung](#9-organisation-der-vertragsbeziehung)
  - [9.1. Verantwortlichkeiten des Dienstleisters](#91-verantwortlichkeiten-des-dienstleisters)
  - [9.2. Haftungsbeschränkung des Dienstleisters](#92-haftungsbeschränkung-des-dienstleisters)
  - [9.3. Zugangsbeschränkung](#93-zugangsbeschränkung)
  - [9.4. Verantwortlichkeiten Dritter, die an der Bereitstellung des Secure Temple-Dienstes teilnehmen](#94-verantwortlichkeiten-dritter-die-an-der-bereitstellung-des-secure-temple-dienstes-teilnehmen)
  - [9.5. Verantwortlichkeiten und Verpflichtungen des AUFTRAGGEBER](#95-verantwortlichkeiten-und-verpflichtungen-des-auftraggebers)
  - [9.6. Rechte des AUFTRAGGEBER](#96-rechte-des-auftraggebers)
  - [9.7. Datenlöschung bei Vertragsende](#97-datenlöschung-bei-vertragsende)
- [10. Lebenszyklus dieser Dienstvereinbarung](#10-lebenszyklus-dieser-dienstvereinbarung)
  - [10.1. Inkrafttreten der Dienstvereinbarung](#101-inkrafttreten-der-dienstvereinbarung)
  - [10.2. Änderungen der Dienstvereinbarung](#102-änderungen-der-dienstvereinbarung)
    - [10.2.1. Vom AUFTRAGGEBER veranlasste Änderungen](#1021-vom-auftraggeber-veranlasste-änderungen)
    - [10.2.2. Vom Dienstleister veranlasste Änderungen](#1022-vom-dienstleister-veranlasste-änderungen)
  - [10.3. Reversibilität](#103-reversibilität)
- [11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes](#11-verfügbarkeit-kontinuität-und-wiederherstellung-des-dienstes)
  - [11.1. Verwaltung von Vorfällen und Unterbrechungen](#111-verwaltung-von-vorfällen-und-unterbrechungen)
    - [11.1.1. Vorfälle](#1111-vorfälle)
      - [11.1.1.1. Im Rahmen dieser Dienstvereinbarung behandelte Vorfalltypen](#11111-im-rahmen-dieser-dienstvereinbarung-behandelte-vorfalltypen)
      - [11.1.1.2. Vorfallbearbeitung](#11112-vorfallbearbeitung)
      - [11.1.1.3. Benachrichtigungsstufe bei Sicherheitsvorfällen](#11113-benachrichtigungsstufe-bei-sicherheitsvorfällen)
  - [11.2. Wartung des Dienstes](#112-wartung-des-dienstes)
    - [11.2.1. Art der Wartung](#1121-art-der-wartung)
    - [11.2.2. Remote-Zugriff von Cloud Temple im AUFTRAGGEBER-Bereich](#1122-remote-zugriff-von-cloud-temple-im-auftraggeber-bereich)
    - [11.2.3. Remote-Zugriff Dritter, die an der Bereitstellung des Dienstes im AUFTRAGGEBER-Bereich teilnehmen](#1123-remote-zugriff-dritter-die-an-der-bereitstellung-des-dienstes-im-auftraggeber-bereich-teilnehmen)
- [12. Datenlöschungsverfahren bei Vertragsende](#12-datenlöschungsverfahren-bei-vertragsende)
- [13. Anwendbares Recht](#13-anwendbares-recht)
  - [13.1. Allgemein](#131-allgemein)
  - [13.2. Einhaltung der geltenden Gesetze und Vorschriften](#132-einhaltung-der-geltenden-gesetze-und-vorschriften)
  - [13.3. DSGVO](#133-dsgvo)
  - [13.4. Schutz gegenüber außereuropäischem Recht](#134-schutz-gegenüber-außereuropäischem-recht)
- [14. UNTERSCHRIFTEN](#14-unterschriften)


----------------------------------------------------------------------------------

# 3. Präambel und Glossar

## 3.1. Präambel

Dieses Dokument formalisierte die Dienstvereinbarung im Zusammenhang mit dem qualifizierten SecNumCloud IaaS-Dienst unter der Bezeichnung „*Secure Temple*“.

\"Diese Dienstvereinbarung ergänzt und ist ergänzend zu den Allgemeinen Geschäftsbedingungen und Nutzungsbedingungen des Dienstleisters zu verstehen. Es wird davon ausgegangen, dass sich die Vertragsdokumente gegenseitig kohärent interpretieren. Im Falle eines Widerspruchs oder einer Abweichung zwischen den Bestimmungen der Vertragsdokumente gilt folgende Rangfolge:

1. Allgemeine Geschäftsbedingungen und Nutzungsbedingungen (AGB&N)
2. SecNumCloud IaaS-Dienstvereinbarung
3. SecNumCloud PaaS-Dienstvereinbarung
4. Besonderes spezifisches Abkommen
5. Sicherheitsversicherungsplan (SAP)
6. Besondere Nutzungsbedingungen (BNB)

## 3.2. Glossar

In der vorliegenden Dienstvereinbarung werden der **AUFTRAGGEBER**, der **Dienstleister** und die **Parteien** im Vertrag identifiziert, dem diese Dienstvereinbarung beigefügt ist.

Die im Folgenden verwendeten Begriffe in der vorliegenden Dienstvereinbarung werden im Einklang mit den unten aufgeführten Definitionen interpretiert:


-   **Änderung:** Jede Hinzufügung, Änderung oder Löschung, die den Service betrifft und genehmigt, geplant oder unterstützt wurde.

-   **Standardänderung:** Eine Änderung, die einem Verfahren unterliegt, dessen Produktionsmodalitäten und Auswirkungen (einschließlich finanzieller) im Voraus von den Parteien bekannt und akzeptiert werden. Sie wird dann in den Katalog der Standardänderungen aufgenommen und kann je nach Fall eine GTI und eine GTR haben.

-   **Vertrag:** bezeichnet den Vertrag, der vom AUFTRAGGEBER mit dem Dienstleister geschlossen wurde, um dem AUFTRAGGEBER die Nutzung des Dienstes zu ermöglichen, und der dieser Servicevereinbarung beigefügt ist.

-   ***Servicevereinbarung:** Dieses Dokument, erstellt im Rahmen eines spezifischen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (CGVU) und in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzrahmens.

-   **Serviceanfrage:** Anfrage des AUFTRAGGEBERS an den Dienstleister im Rahmen des Dienstes, die Operationen umfasst, die vom AUFTRAGGEBER nicht über die AUFTRAGGEBER-Schnittstelle ausgeführt werden können, sowie Supportanfragen im Rahmen des Dienstes. Die Serviceanfragen sind auf diejenigen begrenzt, die im Vertrag oder in dieser Servicevereinbarung vorgesehen sind.

-   **Verfügbarkeit:** Fähigkeit, die Verfügbarkeit und Aufrechterhaltung der optimalen Leistung des Dienstes in Übereinstimmung mit den in den Service Level Agreements (SLA) definierten Kriterien und Verpflichtungen zu gewährleisten.

-   **Technische Daten:** umfasst alle Daten, die zur Bereitstellung des Dienstes verarbeitet werden, insbesondere die Identität der Nutznießer und Administratoren der technischen Infrastruktur, Infrastrukturprotokolle, Zugangskonfigurationen, Verzeichnis, Zertifikate ...

-   **Ereignis:** Ein "Ereignis" ist jede erkennbare oder identifizierbare Vorkommnis, die für das Management des Dienstes von Bedeutung sein kann.

-   **Hypervisor:** Betriebssystem, das die Ausführung von virtuellen Maschinen auf einem Rechenknoten ermöglicht.

-   **Vorfall:** Jede unvorhergesehene Ereignis, das den normalen Betrieb des Dienstes stört oder die Datensicherheit gefährdet.

-   **Sicherheitsvorfall:** Jedes Ereignis im Bereich des Dienstes:

    -   Von absichtlich bösartiger Natur;
    -   Von zufälliger Natur, das die Integrität, Vertraulichkeit oder Rückverfolgbarkeit des Dienstes oder der Daten des AUFTRAGGEBERS beeinträchtigt;
    -   Die bestehende Sicherheitsmaßnahmen beeinträchtigen.
    Nicht böswillig bedingte Verfügbarkeitsbeeinträchtigungen gelten nicht als Sicherheitsvorfall (Hardware-Ausfall, Bug, Fehlfunktion, Naturkatastrophe ...).

-   **AUFTRAGGEBER-Schnittstelle:** Verwaltungsoberfläche des Dienstes, die dem AUFTRAGGEBER vom Dienstleister zur Verfügung gestellt wird und eine Web-Administrationskonsole und eine API umfasst.

-   **Inbetriebnahme:** Durchführung von Verwaltungshandlungen zur Umsetzung der Änderung, wenn diese genehmigt ist (die Änderung im Sinne von ITIL betrifft nur das Änderungsmanagement und nicht deren Durchführung/Verwirklichung).

-   **Problem:** Ursache für einen oder mehrere wiederkehrende Vorfälle, Ursache für einen potenziellen Vorfall (Risikosituation).

-   **Region:** bezeichnet ein geographisch abgegrenztes Ensemble von Cloud-Verfügbarkeitszonen, das Netzwerk-, Rechen- und Speicherdienste zur Optimierung der Latenz, Leistung und lokalen regulatorischen Konformität bereitstellt.

-   **Dienst:** bezeichnet den qualifizierten SecNumCloud IaaS-Dienst "Secure Temple", der vom Dienstleister über technische Infrastrukturen bereitgestellt wird, die vom Dienstleister gewartet werden und wie in der Sektion "Dienstbeschreibung" dieser Servicevereinbarung beschrieben.

-   **Secure Temple:** bezeichnet den qualifizierten SecNumCloud IaaS-Dienst, der von der Firma Cloud Temple angeboten wird, wie in der Bescheinigung definiert, die auf der Website der ANSSI einsehbar ist und der dieser Servicevereinbarung beigefügt ist.

-   **Schadensfall:** bezeichnet ein schwerwiegendes Ereignis natürlichen oder menschlichen, zufälligen oder absichtlichen Ursprungs, das dem betroffenen Teil erhebliche Verluste und Schäden zufügt.

-   **Überwachung:** Überwachung eines Informationssystems oder Dienstes, einschließlich der Sammlung verschiedener Daten wie Messwerte und Alarme. Diese Tätigkeit beschränkt sich auf die Beobachtung und Verfolgung, ohne direkt in die überwachten Elemente einzugreifen, ein Vorrecht der Verwaltungstätigkeiten.

-   **Tenant:** Eine isolierte Instanz, die für einen Benutzer oder eine Gruppe von Benutzern reserviert ist und eine gemeinsame Infrastruktur nutzt, während die Unabhängigkeit und Sicherheit der Daten und Anwendungen gewahrt bleiben.

-   **Verfügbarkeitszone (AZ) (Availability Zone):** Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der durch eine geografische Verteilung der Ressourcen für hohe Verfügbarkeit und Widerstandsfähigkeit der Dienste sorgt.

# 4. Akronyme


  | **Akronym** | **Definition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Beratendes Gremium für Änderungen                              |
  | **CMDB**     | Configuration Management Database -- Konfigurationsmanagement-Datenbank                 |
  | **COPIL**    | Steuerungskomitee                                                                       |
  | **COSTRAT**  | Strategischer Ausschuss                                                                 |
  | **COPROJ**   | Projektkomitee                                                                          |
  | **DB**       | Database (Datenbank)                                                                    |
  | **DRP**      | Disaster Recovery Plan (PRA) (Geschäftsfortführungsplan)                                |
  | **GTE**      | Garantie der Eskalationszeit                                                            |
  | **GTI**      | Garantie der Eingreifzeit                                                               |
  | **GTR**      | Garantie der Wiederherstellungszeit                                                     |
  | **ITIL**     | Information Technology Infrastructure Library - Best Practices für das IT-Management    |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Betriebserhalt                                                                          |
  | **MOA**      | Auftraggeber                                                                            |
  | **MOE**      | Auftragnehmer                                                                           |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system (Betriebssystem)                                                       |
  | **PAQ**      | Qualitätssicherungsplan                                                                 |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Sicherheitsgarantieplan                                                                 |
  | **PASSI**    | Anbieter von Sicherheitsaudits für Informationssysteme                                  |
  | **RFC**      | Request For Change -- Änderungsanforderung                                              |
  | **RGPD**     | Datenschutz-Grundverordnung (DSGVO)                                                     |
  | **RPO**      | Recovery Point Objective -- Frische der wiederhergestellten Daten im Falle eines Schadens|
  | **RTO**      | Recovery Time Objective -- Wiederherstellungszeit des Dienstes im Falle eines Schadens  |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Dienstgütevereinbarung                                       |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Anwendungswartungsdienst                                                                |
  | **UO**       | Arbeitseinheit                                                                          |
  | **VABE**     | Validierung der Betriebsfähigkeit                                                       |
  | **VABF**     | Validierung des ordnungsgemäßen Betriebs                                                 |
  | **VM**       | Virtual Machine (Virtuelle Maschine)                                                     |
  | **VSR**      | Regelmäßige Servicevalidierung                                                           |


# 5. Zweck dieser Servicevereinbarung

Diese Servicevereinbarung legt die Bedingungen fest, unter denen der Dienstleister dem AUFTRAGGEBER den Dienst bereitstellt. Ihr Zweck ist es:

-   Die vom AUFTRAGGEBER erwarteten Leistungsvorgaben in Bezug auf Funktionalität und Zuverlässigkeit des Dienstes festzulegen;

-   Die Verpflichtungen des Dienstleisters darzulegen, um die vereinbarten Service Level zu erfüllen;

-   Die spezifisch für den bereitgestellten Dienst geltenden regulatorischen Standards zu benennen;

-   Eine Einheitlichkeit und Integrität bei der Bewertung der Servicequalität zu gewährleisten;

-   Die Exzellenz der bereitgestellten Dienste durch quantitative Leistungsindikatoren zu gewährleisten.

Es wird festgelegt, dass im Falle eines Verlusts der SecNumCloud-Qualifikation durch den Dienstleister der Vertrag gekündigt werden kann.
une Strafe zu vermeiden, durch den SPONSOR. In einem solchen Fall verpflichtet sich der Anbieter, den SPONSOR
über diese Disqualifikation durch eine offizielle Benachrichtigung mittels eingeschriebenem Brief mit Rückschein zu informieren.

Es ist zu beachten, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Widerruf der
ursprünglichen Qualifikation interpretiert wird.

# 6. Audit

Der Anbieter verpflichtet sich, dem SPONSOR oder jedem vom Anbieter benannten Dritt- und Nicht-Konkurrenten-Auditor den Zugriff auf alle notwendigen Dokumente zur Bescheinigung der vollständigen Einhaltung der Verpflichtungen nach Artikel 28 der Allgemeinen Datenschutzverordnung (DSGVO) zu ermöglichen und somit die Durchführung von Audits zu erleichtern.

Durch die Annahme dieser Servicevereinbarung ermächtigt der SPONSOR ausdrücklich:

1.  Die Nationale Agentur für die Sicherheit von Informationssystemen (ANSSI) sowie die zuständige Qualifizierungseinheit zur Überprüfung der Konformität des Dienstes und seines Informationssystems mit den SecNumCloud-Referenzen.
2.  Einen vom Anbieter ausdrücklich benannten und qualifizierten PASSI-Auditor, Sicherheitsaudits des Dienstes durchzuführen.

# 7. Beschreibung des Dienstes

## 7.1. Modell der geteilten Verantwortung

Der vom Anbieter angebotene Dienst zeichnet sich durch die Bereitstellung der folgenden Leistungen aus, die sich nach dem
Prinzip der geteilten Verantwortung richten, wie im SecNumCloud-Referenzdokument beschrieben:

-   Bereitstellung von Rechenressourcen (Compute);

-   Bereitstellung von Speicherplatz;

-   Zugang zu Netzwerk- und Internetverbindungsdiensten;

-   Bereitstellung eines dedizierten Backup-Dienstes für virtuelle Maschinen.

Das Modell der geteilten Verantwortung zwischen dem Anbieter und dem SPONSOR im Rahmen des Dienstes ist in §7.1 dargestellt.

Es wird vereinbart, dass der Anbieter seine Expertise nutzen wird, um die Leistungen nach den besten professionellen Praktiken und
gemäß den Anforderungen des SecNumCloud-Referenzdokuments zu erbringen.

Der Dienst ist SecNumCloud-qualifiziert (siehe Bescheinigung im Anhang).

## 7.2. Detaillierte Darstellung des Serviceumfangs

| Compute               | Rechenressource des SPONSOR-Tenants                                                                                 |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | Produktionsdaten des SPONSOR-Tenants                                                                                 |
| Object-Storage S3     | Bereitstellung einer AZ-übergreifenden souveränen Object-Storage-Infrastruktur, die mit den Standard-S3-APIs kompatibel ist. |
| Backup                | Modulo Abonnement auf entsprechenden Massenspeicher                                                                  |
| Netzwerk-Infrastruktur| Netzwerk-Ressource des SPONSOR-Tenants                                                                               |
| SPONSOR-Konsole       | Der Dienst, der dem SPONSOR den Zugang und die Verwaltung seines IaaS-Dienstes über die Shiva-Schnittstelle ermöglicht  |
| Support               | Der Support-Dienst, der die zuvor genannten Dienste begleitet und sich ausschließlich auf diese beschränkt (*)        |

_(*) Innerhalb des Umfangs des SNC-qualifizierten Dienstes und der Verantwortungsbereiche des Anbieters_

### 7.2.1. Rechenzentrumsinfrastrukturen

Der Dienst umfasst die Bereitstellung der nachfolgend qualifizierten Leistungen für jede Verfügbarkeitszone:

-   Rechenzentrum vor Ort in Frankreich für die Region FR, gemäß den neuesten technologischen Normen, mit einem Resilienz-Niveau, das mindestens dem Tier-3-Niveau des Uptime Institutes entspricht;
-   Bereitstellung von Technikräumen innerhalb der Rechenzentren zur Aufnahme der für die Dienstleistungserbringung unerlässlichen technischen Einrichtungen, einschließlich Compute, Storage, Netzwerk, Verkabelung und anderer notwendiger Komponenten;
-   Gesicherte Stromversorgung durch zwei getrennte Stromkreise, um die Kontinuität des Dienstes zu gewährleisten;
-   Bereitstellung von Klimaanlagen-Diensten, angepasst an die Normen und Empfehlungen der Gerätehersteller, um ein optimales Umfeld für die technischen Geräte zu erhalten;
-   Ständige Überwachung und detaillierte Messungen, die eine genaue Nachverfolgung und proaktive Verwaltung der Leistung und Sicherheit des bereitgestellten Dienstes ermöglichen.

Der Anbieter stellt die Bereitstellung fortschrittlicher Branddetektions- und Löschdienste sicher, die darauf ausgelegt sind, Aufflackern
innerhalb der Einrichtungen effektiv zu erkennen und zu neutralisieren. Diese Systeme sind entscheidend, um die Geräte und Daten zu sichern. Sie umfassen hochpräzise Rauchmelder und Löschvorrichtungen, die schnell handeln können, ohne die IT-Ausrüstung zu beschädigen. Dieser Dienst ist unentbehrlich, um Brandrisiken zu verhindern, potenzielle Schäden zu minimieren und die Kontinuität der Operationen sicherzustellen.

Der SPONSOR wird darüber informiert, dass alle implementierten Sicherheitsverfahren und -maßnahmen, einschließlich der jährlichen Tests des
Wechsels auf die Notstromaggregate, unbedingt erforderlich sind, um die Service-Kontinuität und -Integrität zu gewährleisten. Diese Praktiken sind dazu bestimmt, Ausfallrisiken zu minimieren und eine optimale Reaktionsfähigkeit bei Vorfällen sicherzustellen. Durch die Annahme dieser Bedingungen erkennt der Kunde die Bedeutung dieser Maßnahmen an und verpflichtet sich, vollständig zu kooperieren, um deren Umsetzung zu erleichtern. Der SPONSOR wird auch ermutigt, die bereitgestellten Sicherheitsempfehlungen zur Kenntnis zu nehmen und in seine eigene Risikomanagementstrategie zu integrieren.

### 7.2.2. Software-Infrastruktur zur Steuerung des Dienstes

Der Anbieter stellt dem SPONSOR die Verwaltungskonsole und die API zur Nutzung des Dienstes zur Verfügung. Er verpflichtet sich auch, diese Verwaltungskonsole und die API in einem optimalen Betriebszustand zu halten und deren Sicherheit kontinuierlich zu gewährleisten.
Diese Verwaltungskonsole und die API werden gemeinsam als „SPONSOR-Schnittstelle“ bezeichnet.

Der Anbieter weist den SPONSOR darauf hin, dass eine anormale Nutzung der SPONSOR-Schnittstelle, insbesondere im Falle einer Überlastung ihrer Kommandoschnittstellen-APIs (Hammering), automatische Sicherheitsmaßnahmen auslösen kann, die den Zugang zu den Kommandoschnittstellen-APIs oder dem Dienst blockieren. Es sollte betont werden, dass diese Situation keine Dienstunverfügbarkeit darstellt, sondern eine Schutzmaßnahme für den Dienst und die Infrastruktur des Anbieters; daher kann der SPONSOR dies in seinen Berechnungen nicht als Dienstunverfügbarkeit ansehen.

Darüber hinaus weist der Anbieter den SPONSOR darauf hin, dass identische Anfragen (Duplikate), die an seine APIs gesendet werden, auf eine pro Sekunde begrenzt sind (Throttling). Wenn der SPONSOR identische Anfragen mit einer höheren Frequenz einreicht, kann ihre Ablehnung nicht als Dienstunverfügbarkeit interpretiert werden.

### 7.2.3. Computing-Infrastrukturen

Der Dienst umfasst die Bereitstellung der notwendigen technische Ausrüstung für die Ausführung von Arbeitslasten in Form von virtuellen Maschinen in den vom SPONSOR abonnierten Verfügbarkeitszonen.

Dies umfasst:

- Die Bereitstellung der notwendigen technischen Chassis für den ordnungsgemäßen Betrieb der Compute-Blades;
- Die Bereitstellung der Compute-Blades in den vom SPONSOR spezifizierten Mengen und auf die Verfügbarkeitszonen seiner Wahl verteilt. Es ist zu beachten, dass diese Compute-Blades ausschließlich dem SPONSOR gewidmet sind;
- Die Bereitstellung von Hypervisor-Betriebssystemen sowie die Gewährleistung des Betriebszustandes und der Sicherheit der erforderlichen Software-Infrastruktur zur Steuerung dieser Betriebssysteme. Es ist hervorzuheben, dass der Anbieter, obwohl er für die betriebliche Instandhaltung und die allgemeine Sicherung des Dienstes verantwortlich ist, keine spezifischen Kenntnisse über die Produktionsumgebungen des SPONSOR oder die Anforderungen seiner Arbeitslasten besitzt. Daher liegt die Verantwortung für die Entscheidung über das Update der Hypervisor-Compute-Blade-Betriebssysteme, eine Handlung, die möglicherweise einen Neustart erfordert, vollständig beim SPONSOR. Diese Operation kann über die SPONSOR-Schnittstelle durchgeführt werden.

Die Wahl des Compute-Blade-Modells aus dem Katalog des Anbieters liegt in der Verantwortung des
SPONSOR.

### 7.2.4. Speicherinfrastruktur

Der Dienst umfasst die Bereitstellung einer gemeinsamen SAN (Storage Area Network)-Speicherinfrastruktur mit verschiedenen Leistungsstufen für den SPONSOR. Dies beinhaltet:

- Die Implementierung und Aufrechterhaltung der Betriebs- und Sicherheitsbedingungen des dedizierten SAN-Netzwerks;
- Die Installation und Verwaltung gemeinsam genutzter Speicherarrays zwischen den Kunden, einschließlich ihres Betriebs- und Sicherheitszustandes, ihrer Überwachung und Messung;
- Die Implementierung automatisierter Systeme zur Zuweisung von dedizierten LUNs (Logical Unit Numbers) an den SPONSOR für die vom SPONSOR abonnierten Speicherumfänge.

### 7.2.5. Infrastruktur des globalen Netzwerks

Der Anbieter stellt im Rahmen des Dienstes ein globales Netzwerk bereit, das dem SPONSOR die Zugänglichkeit seiner gehosteten Systeme erleichtert. Dieser Dienst umfasst:
-   Die Bereitstellung, der Betrieb und die Sicherstellung der Betriebssicherheit aller Glasfaserverbindungen,
    die die verschiedenen Verfügbarkeitszonen verbinden;

-   Die Bereitstellung, der Betrieb und die Sicherstellung der Betriebssicherheit der technischen Ausrüstung, die für die ordnungsgemäße
    Funktion des Netzwerks und die Isolation der verschiedenen Kunden erforderlich ist.

Die Netzwerkkonnektivität des Beauftragten TENANTs zum Internet oder zu privaten Netzwerken sowie die Netzwerkausstattung, Betreiberverbindungen und andere
technische Komponenten, die diese Konnektivität herstellen, sind nicht Teil des Serviceumfangs. Diese Netzwerkkonnektivität wird
gemäß den im Vertrag vorgesehenen Bestimmungen umgesetzt.

### 7.2.6. Backup-Infrastruktur

Der Dienstleister stellt dem BEAUFTRAGTEN einen integrierten, dedizierten und verwalteten Backup-Dienst zur Verfügung, der zum Schutz seiner
virtuellen Maschinen dient. Der Dienstleister stellt den Betrieb und die Sicherstellung der Betriebssicherheit dieses Backup-Dienstes sicher.
Der Dienstleister garantiert, dass die Backups des BEAUFTRAGTEN außerhalb der Verfügbarkeitszone der gesicherten Arbeitslasten liegen, sofern der
BEAUFTRAGTE die entsprechenden Leistungseinheiten abonniert hat.

Dieser Backup-Dienst beschränkt sich auf die Sicherung der virtuellen Maschinen und der Topologiekonfigurationen der IaaS-Umgebung
der Tenants des BEAUFTRAGTEN im Rahmen des Services. Die Erstellung und Anwendung einer adäquaten Backup-Politik durch den
BEAUFTRAGTEN hängt von dem Abonnement spezifischer Leistungseinheiten ab. Es liegt daher in der Verantwortung des BEAUFTRAGTEN, sicherzustellen,
dass die erforderlichen technischen Ressourcen beim Dienstleister zur Umsetzung seiner Backup-Politik verfügbar sind oder
diese an die verfügbaren Mittel anzupassen.

Der Dienstleister verpflichtet sich, den BEAUFTRAGTEN bei Kapazitätsengpässen zu benachrichtigen und beratende Unterstützung zur
Optimierung der Ressourcen zu leisten. Die Verpflichtungen des Dienstleisters beschränken sich auf die Umsetzung der vom BEAUFTRAGTEN
geäußerten Anforderungen bezüglich der Backup-Politik im Rahmen der abonnierten Ressourcen.

### 7.2.7. Umsetzung von Lösungen zur Betriebs- oder Geschäftskontinuität

Der Dienstleister stellt dem BEAUFTRAGTEN alle technischen Lösungen zur Verfügung, die erforderlich sind, um eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen hinweg zu gewährleisten. Es liegt in der Verantwortung des BEAUFTRAGTEN, diese Ressourcenverteilung effizient zu verwalten und dabei die vom Dienstleister zu diesem Zweck bereitgestellten Werkzeuge zu nutzen.

## 7.3. Einschränkungen der Dienstleistungen im qualifizierten IaaS-Modell

### 7.3.1. Managed-Services im Betrieb (RUN)

Es ist wichtig zu beachten, dass aus dem Service ausgeschlossen sind:

-   Das Hosting physischer Komponenten des BEAUFTRAGTEN;

-   Die Netzwerkkonnektivität des Beauftragten TENANTs zum Internet oder zu privaten Netzwerken, einschließlich der Betreiberverbindungen;

-   Alle Managed-Services oder Anwendungsverwalter (TMA);

-   Jegliche Unterstützung auf virtuellen Maschinen auf OS-Ebene und darüber in der IaaS-Verantwortungsschichtung, auch wenn es sich nur um einfache Überwachung handelt.

Es ist jedoch keineswegs ausgeschlossen, dass der BEAUFTRAGTE solche Dienstleistungen über das MSP-Angebot des Dienstleisters in Anspruch nimmt, um im Managed-Service-Modus auf seine Tenants zuzugreifen. Diese Dienstleistungen sind dann nicht durch diese Dienstleistungsvereinbarung und deren Verpflichtungen/Zweiseitigen Klauseln geregelt.

### 7.3.2. Konfiguration des Notfallwiederherstellung

Standardmäßig stellt der Dienstleister die IaaS-Ressourcen dem BEAUFTRAGTEN zur Verfügung, indem er Ressourcen reserviert und die Bereitstellung konfiguriert, um die Verfügbarkeitszonen zu nutzen. Es liegt in der Verantwortung des BEAUFTRAGTEN, die Verfügbarkeitszonen über die Benutzeroberfläche des BEAUFTRAGTEN auszuwählen.

### 7.3.3. Konfiguration der Backup

Der Backup-Dienst beschränkt sich auf die Sicherung der virtuellen Maschinen und der Topologiekonfigurationen, die die IaaS-Umgebung der Tenants des BEAUFTRAGTEN im Rahmen des Services darstellen.

Der Backup-Dienst und die Umsetzung der Backup-Politik des BEAUFTRAGTEN erfordern das Abonnieren von Speicherkapazität im erforderlichen Massenspeicher, um den Dienst sicherzustellen. Es liegt daher in der Verantwortung des BEAUFTRAGTEN, beim Dienstleister die erforderlichen technischen Mittel zu abonnieren, um die Backup-Politik in seinem IT-Umfeld sicherzustellen, oder die Backup-Politik an die verfügbaren Mittel anzupassen. Der Dienstleister verpflichtet sich, den BEAUFTRAGTEN bei technischen Kapazitätsgrenzen zu informieren.

Der Dienstleister wird die erforderlichen technischen und personellen Mittel zur Sicherung des gehosteten Systems im Rahmen der vom BEAUFTRAGTEN abonnierten Ressourcen bereitstellen.

Darüber hinaus liegt es im Falle von nicht abgedeckten Bereichen in der Verantwortung des BEAUFTRAGTEN, seine eigene Backup-Strategie zu definieren und die Backups der virtuellen Maschinen selbst zu konfigurieren oder eine Serviceanfrage an den Dienstleister zu stellen, damit die Backup-Konfiguration für die physischen Server durchgeführt wird, sofern der BEAUFTRAGTE einen Managed-Service-Vertrag hat, der es dem Dienstleister ermöglicht, über die Benutzeroberfläche des BEAUFTRAGTEN zu agieren, die als Verwaltungskonsole im Rahmen dieser Dienstleistungsvereinbarung bereitgestellt wird und Funktionen zur Konfiguration der Backups bietet.

Dieser Dienst wird sich jedoch nur auf die Konfiguration über die Benutzeroberfläche des BEAUFTRAGTEN beschränken, die klar vom BEAUFTRAGTEN spezifizierte Konfiguration umzusetzen.

Aus Gründen der Flexibilität des Dienstleisterangebots hat der BEAUFTRAGTE die Möglichkeit, eine No-Backup-Politik auf einige seiner virtuellen Maschinen anzuwenden. In diesem Fall liegt es in der Verantwortung des BEAUFTRAGTEN, diese Entscheidung zu übernehmen. Der Dienstleister wird die virtuellen Maschinen, die mit der No-Backup-Politik assoziiert sind, nicht sichern. Der Dienstleister weist den BEAUFTRAGTEN darauf hin, dass die Wahl der No-Backup-Politik oder des manuellen Backups den BEAUFTRAGTEN einem endgültigen Datenverlust aussetzt im Falle eines Vorfalls in den unteren Schichten oder in Schichten, die in seiner Verantwortung im IaaS-Modell liegen. In einem solchen Fall wird es unmöglich sein, den Dienstleister für die Wiederherstellung der Daten verantwortlich zu machen, da es nichts wiederherzustellen gibt. Der Dienstleister empfiehlt, die virtuellen Maschinen immer zu sichern.

Für alle Fragen bezüglich des auf einer virtuellen Maschine installierten Betriebssystems und jeglicher Software oder Programme, die "oberhalb des Betriebssystems" ausgeführt werden, liegt es in der Verantwortung des BEAUFTRAGTEN, die Verwaltung und Überwachung innerhalb der Europäischen Union durchzuführen, wenn er sicherstellen möchte, dass alle Schichten der IT vertikal aus der Europäischen Union betrieben und verwaltet werden. Die Verwaltungsoperationen außerhalb des Verantwortungsbereichs des Dienstleisters im Rahmen dieser Dienstleistungsvereinbarung sind in der Abschnitt "Shared Responsibility Model" dieser Dienstleistungsvereinbarung aufgeführt.

## 7.4. Umsetzung des Services

### 7.4.1. Technische Voraussetzungen

Für die Umsetzung des Services erkennt der BEAUFTRAGTE an, dass er:

-   Mit einer Virtualisierung des Typs VMware in den vom Herausgeber unterstützten und im Rahmen des Services vom Dienstleister bereitgestellten Versionen arbeiten muss;

-   Über den Dienstleister das Backup-Tool verwenden muss;

-   Feste IP-Adressen angeben muss, von denen aus der Dienstleister ihm den Zugriff auf die Benutzeroberfläche des BEAUFTRAGTEN ermöglicht (Whitelist-Filterung). Änderungen dieser IP-Liste müssen über Serviceanfragen erfolgen (nicht administrierbare Liste aus der Verwaltungsoberfläche des Services).

## 7.5. Standort des Dienstes in Frankreich

Es wird klargestellt, dass keine der Operationen und keine der physischen Komponenten, die an der Erbringung des Dienstes beteiligt sind und die Gegenstand dieser Dienstleistungsvereinbarung sind, außerhalb der Europäischen Union liegen.

Dies schließt insbesondere den Support, die operative Überwachung und die Sicherheitsüberwachung (SOC) der technischen Infrastruktur, die den Dienst bereitstellt, ein. Daher werden alle Speicher, alle Verwaltungs- und Überwachungsaufgaben und alle Verarbeitungen in Frankreich durchgeführt.

### 7.5.1. Standort der Datacenter, die den Dienst hosten

Mit Ausnahme der Operationen der Mitarbeiter und Niederlassungen des Dienstleisters befinden sich alle Produktionsoperationen (einschließlich Speicherung und Verarbeitung von Daten) und technischen Komponenten, die den Dienst bereitstellen, in den Datacentern in Frankreich.

### 7.5.2. Standort der Cloud-Temple-Niederlassungen, die den Dienst betreiben

Die Mitarbeiter von Cloud Temple, die im Bereich des Services tätig sind, arbeiten aus den ausschließlich in Frankreich gelegenen Niederlassungen von Cloud Temple.
Diese Niederlassungen befinden sich in Frankreich, in Tours, Lyon, Caen und Paris La Défense.

Der BEAUFTRAGTE wird darüber informiert, dass Mitarbeiter von Cloud Temple die Möglichkeit haben, remote zu arbeiten. Der Dienstleister garantiert jedoch das gleiche Sicherheitsniveau bezüglich der Remotezugriffe, insbesondere der VPN-Zugänge. Diese Remotezugriffe werden gemäß den Anforderungen des SecNumCloud-Referenzrahmens implementiert.

## 7.6. Support

### 7.6.1. Art des Supports, der den Service begleitet

Der Dienstleister stellt einen technischen Supportservice zur Verfügung, der den BEAUFTRAGTEN bei der Verwaltung, Fehlerbehebung und Optimierung
ihrer bereitgestellten Ressourcen unterstützt. Dieser Service deckt eine breite Palette von Aktivitäten ab, von der Unterstützung bei der anfänglichen Konfiguration der Services bis hin zu fortgeschrittenem technischen Support zur Lösung spezifischer Probleme.

Hier ist eine Beschreibung der Merkmale und Funktionen des Supportservices:

-   Unterstützung bei der anfänglichen Implementierung der Nutzung des Services;
-   Unterstützung bei der Behebung von Vorfällen;
-   Unterstützung bei der Problemlösung;
-   Überwachung und Beratung zur Optimierung der technischen Basis.
Dans Rahmen des Supportdienstes ersetzt der Dienstleister den AUFTRAGGEBER nicht bei der Nutzung des Dienstes. Der AUFTRAGGEBER bleibt vollständig verantwortlich für die Konfiguration und den Betrieb seiner VMs und seiner Tenants sowie für die Verwaltung aller Elemente (einschließlich Daten und Anwendungen), die er auf den Infrastrukturen des Dienstleisters gespeichert oder installiert hat. Der technische Supportdienst wird gemäß den Allgemeinen Verkaufs- und Nutzungsbedingungen erbracht, wobei der Dienstleister einer Verpflichtung zur Bereitstellung von Mitteln unterliegt.

Der AUFTRAGGEBER verpflichtet sich, den technischen Supportdienst in einer angemessenen Weise zu nutzen, insbesondere, indem er davon absieht, nicht beim Dienstleister abonnierte Dienste in Anspruch zu nehmen und die Teams des Dienstleisters für seine eigenen Kunden oder Dritte, die nicht im Vertrag enthalten sind, hinzuzuziehen. Der Dienstleister behält sich das Recht vor, jede Dienstanforderung zurückzuweisen, die diese Kriterien nicht erfüllt.

Das Niveau des Supportengagements ist an die Abonnementeinheiten für unterstützende Werke gebunden.

### 7.6.2. Anforderung des technischen Supports

Der technische Support ist über ein Ticketsystem über die Konsolenoberfläche des AUFTRAGGEBERs zugänglich und steht während der normalen Bürozeiten an Werktagen zur Verfügung (8:00 - 18:00 Uhr; Montag bis Freitag; französischer Kalender und Zeiten). Für Notfälle außerhalb der Bürozeiten, insbesondere Vorfälle, die die Produktion erheblich beeinträchtigen, kann der Bereitschaftsdienst über eine dem AUFTRAGGEBER bei der Initialisierung des Dienstes mitgeteilte Telefonnummer erreicht werden.

Für jede Anfrage oder jeden Vorfall muss ein Ticket beim Support des Dienstleisters generiert werden. Die Initialisierung dieses Tickets, die alle erforderlichen Informationen enthält, ist unerlässlich und markiert den Beginn der Bewertung der Verpflichtungen des Dienstleisters.

Sobald der Dienstleister eine Anfrage oder eine Vorfallmeldung erhält, sei es über die Verwaltungskonsole oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Meldung eines Vorfalls ist es wichtig, dass der AUFTRAGGEBER dem Dienstleister so viele Details wie möglich zum aufgetretenen Problem angibt. Dieser Schritt ist entscheidend, um eine angemessene Bewertung der Situation, ihre Priorisierung und eine effektive Diagnose zu ermöglichen.

Der Kunde erhält dann eine Bestätigung per E-Mail, die die Erstellung des Tickets und seine eindeutige Nummer angibt. Der AUFTRAGGEBER kann den Status und die Historie seiner Anfragen und Vorfallmeldungen direkt über die Verwaltungskonsole einsehen.

### 7.6.3. Incident-Management-Prozess

Bei der Meldung eines Vorfalls leitet das technische Support-Team des Dienstleisters eine Untersuchung ein, um die Ursache des Problems zu identifizieren und eine Diagnose zu erstellen. Der Kunde muss aktiv mit dem Dienstleister zusammenarbeiten, indem er alle erforderlichen Informationen bereitstellt und die erforderlichen Tests durchführt. Der Dienstleister kann auf den Dienst des Kunden zugreifen, um den Vorfall zu diagnostizieren.

Wenn die Dienste des Dienstleisters als funktional eingestuft werden und der Vorfall ihm nicht zuzuschreiben ist, wird der Kunde informiert. Auf Kundenwunsch kann der Dienstleister professionelle Dienstleistungen anbieten, um die Ursache des Problems zu identifizieren, die nach vorheriger Vereinbarung in 30-Minuten-Abschnitten in Rechnung gestellt werden.

Falls der Vorfall dem Dienstleister oder einem seiner Unterauftragnehmer zuzuordnen ist, vervollständigt dieser die Diagnose und arbeitet an der Wiederherstellung des Dienstes ohne zusätzliche Kosten. Die Diagnose basiert auf dem Austausch zwischen den Parteien und den Daten des Dienstleisters, die als überzeugend durch Vereinbarung der Parteien gelten.

### 7.6.4. Priorisierungsprozess

Die Bestimmung der Prioritätsstufe eines Falls basiert auf einer matrixbasierten Analyse, die die Auswirkungen des Vorfalls und seinen Grad der Kritikalität bewertet:

-   Die Impact-Stufen sind wie folgt definiert:

| Impact-Stufe | Beschreibung                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impact I1       | Der oder die Dienste des Dienstleisters sind unterbrochen                                                                    |
| Impact I2       | Der oder die Dienste des Dienstleisters sind beeinträchtigt                                                                       |
| Impact I3       | Der oder die Dienste des Dienstleisters sind derzeit stabil, zeigen jedoch Anzeichen eines potenziellen Rückgangs auf lange Sicht |

-   Die Kritikalitätsstufen sind wie folgt definiert:

| Kritikalitätsstufe | Beschreibung                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Kritikalität C1        | Der oder die Dienste des Dienstleisters verschlechtern sich mit besorgniserregender Geschwindigkeit                               |
| Kritikalität C2        | Der oder die Dienste des Dienstleisters verschlechtern sich allmählich im Laufe der Zeit                          |
| Kritikalität C3        | Der oder die Dienste des Dienstleisters stellen Unannehmlichkeiten ohne signifikante Konsequenzen dar |

-   Basierend auf einer gründlichen Analyse der Situation, die die Faktoren Impact und Kritikalität berücksichtigt, wird dem Ticket gemäß der folgenden Entscheidungsmatrix eine Priorität zugewiesen:

| Impact-Stufe <br/> \ Kritikalitätsstufe | Impact I1       | Impact I2       | Impact I3       |
| ------------------------------------------- | --------------- | --------------- | --------------- |
| Kritikalität C1                                | Priorität **P1** | Priorität **P2** | Priorität **P3** |
| Kritikalität C2                                | Priorität **P2** | Priorität **P3** | Priorität **P4** |
| Kritikalität C3                                | Priorität **P3** | Priorität **P4** | Priorität **P5** |

Die entsprechenden Service-Level-Verpflichtungen für jede Prioritätsstufe werden im folgenden Kapitel detailliert beschrieben.

### 7.6.5. Sprache und Standort des Supportdienstes

Der Support wird vom Dienstleister für den AUFTRAGGEBER mindestens in französischer Sprache bereitgestellt. Der Support kann auch in englischer Sprache bereitgestellt werden.

Die Betrieb des Supportdienstes des Dienstleisters für das qualifizierte SecNumCloud-Infrastrukturdienstleistungsangebot befinden sich in der Europäischen Union.

# 8. Verpflichtungen und Service-Level

Der Dienstleister verpflichtet sich, eine kontinuierliche Überwachung der Leistung und der Sicherheitsintegrität seiner technischen Infrastruktur, die den Dienst bereitstellt, zu gewährleisten und auf deren optimalen Betrieb zu achten.

Die Nichtverfügbarkeit eines Dienstes, die Gegenstand eines Leistungsindikators ist, wird ab ihrer Identifikation durch das Überwachungssystem des Dienstleisters oder nach einer Benachrichtigung durch einen Nutzer des AUFTRAGGEBERs anerkannt. Der Beginn der Nichtverfügbarkeit wird zum frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um eine genaue und faire Zählung der Ausfallzeit zu gewährleisten.

Das Ende der Nichtverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, die entweder durch die Überwachungstools des Dienstleisters oder durch eine Rückmeldung eines Nutzers bestätigt wird, wodurch eine effektive Wiederaufnahme der Operationen und eine genaue Messung der Dauer der Unterbrechung sichergestellt werden.

## 8.1. Infrastrukturverfügbarkeits-Verpflichtungen

Der Dienstleister verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau aufrechtzuerhalten, das den jeweils spezifizierten Standards entspricht. Die Service-Level-Verpflichtungen (SLAs) gelten unter der Voraussetzung, dass der AUFTRAGGEBER seine Systeme über mindestens zwei der in der betreffenden Region vorhandenen Verfügbarkeitszonen implementiert.

Bei Nichteinhaltung dieser Bedingungen durch den AUFTRAGGEBER wird dieser nicht in der Lage sein, die Anwendung der entsprechenden SLAs zu beanspruchen, die spezifisch durch ein Sternchen (*) gekennzeichnet sind. Der Zugriff auf die SLAs erfolgt über die AUFTRAGGEBER-Oberfläche. Die Messungen werden monatlich berechnet:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Verfügbarkeit der Rechenleistung (Computing): Garantierte Verfügbarkeit von 99,99%, berechnet auf der Basis 24h/24, 7j/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Speicherverfügbarkeit: Garantierte Verfügbarkeit von 99,99%, berechnet auf der Basis 24h/24, 7j/7.
- **SLA 3     : IC-INFRA_SNC-03** – Zuverlässigkeit der Sicherung: Garantierte Verfügbarkeit von 99,99%, berechnet auf der Basis 24h/24, 7j/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Netzwerkverfügbarkeit: Garantierte Verfügbarkeit von 99,99%, berechnet auf der Basis 24h/24, 7j/7.
- **SLA 5     : IC-INFRA_SNC-05** – Internetzugang: Garantierte Verfügbarkeit von 99,99%, berechnet auf der Basis 24h/24, 7j/7.

_**Hinweise**_ :

- *Als Reaktion auf eine Distributed-Denial-of-Service-Attacke (DDoS) behält sich der Dienstleister das Recht vor, seine Internet-Routing-Konfiguration anzupassen, um die Auswirkungen dieser Attacke zu begrenzen und seine Infrastruktur zu schützen. Insbesondere, wenn eine dem AUFTRAGGEBER gehörende IP-Adresse das Ziel ist, kann der Dienstleister auf die Technik des Blackholing über die BGP-Community zurückgreifen, um den gesamten Traffic zur angegriffenen IP-Adresse bei seinen Anbietern zu blockieren, um die Ressourcen des AUFTRAGGEBERs sowie die anderer AUFTRAGGEBER und die Infrastruktur des Dienstleisters zu schützen. Der Dienstleister empfiehlt dringend, dass der AUFTRAGGEBER ähnliche Maßnahmen ergreift, wie z.B. die Nutzung verfügbarer Web-Application-Firewall-Software und die sorgfältige Konfiguration seiner Sicherheitsgruppen über die API.*


- *Der Dienstleister betont die Notwendigkeit, dass der AUFTRAGGEBER den Datenfluss minimiert, insbesondere durch Vermeidung des Zugriffs auf **SSH**-Verwaltungsports (TCP-Port 22) und **RDP**-Verwaltungsports (TCP-Port 3389) aus dem gesamten Internet (Subnetz 0.0.0.0/0), sowie auf interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049).*

## 8.2. Verfügbarkeitsverpflichtung der Auftraggeber-Schnittstelle

-   SLA 6 : IC-INFRA_SNC-06 -- Zugang zur Verwaltungskonsole des Dienstes: eine garantierte Verfügbarkeit von 97%, durchgehend gewährleistet, 24 Stunden am Tag, 7 Tage die Woche.
-   SLA 7 : IC-INFRA_SNC-07 -- Zugang zu den Steuerungs-APIs des Dienstes: eine Verfügbarkeit von 99,9%, berechnet auf einer Basis von 24h/24, 7d/7.

## 8.3. Verfügbarkeitsverpflichtung des Supports 

- **SLA 8      : IC-INFRA_SNC-08** – Hier sind die Leistungszusagen des technischen Supports des Dienstleisters für Vorfälle, ausgenommen geplante Wartungen:

| Priorität        | Garantie der Eingriffszeit (GTI) | Leistungsziel       |
| ---------------- | -------------------------------- | --------------------|
| Priorität **P1** | 30 Min                           | 95%                 |
| Priorität **P2** | 2h                               | 90%                 |
| Priorität **P3** | 4h                               | 90%                 |
| Priorität **P4** | 24h                              | 85%                 |
| Priorität **P5** | 48h                              | 85%                 |

- **SLA 9      : IC-INFRA_SNC-09** – Hier sind die Leistungszusagen des technischen Supports des Dienstleisters für Serviceanfragen:

|                    | Garantie der Eingriffszeit (GTI) | Leistungsziel       |
| ------------------ | -------------------------------- | --------------------|
| Serviceanfrage     | 4h                               | 90%                 |

*Hinweis:*

- *Die Garantie der Eingriffszeit (GTI) wird ab dem Zeitpunkt berechnet, an dem der AUFTRAGGEBER das Ticket eröffnet, bis zur ersten Intervention des Supports des Dienstleisters.*
- *Die Untersuchung von Vorfällen im Zusammenhang mit den AUFTRAGGEBERn umfasst keine Fernzugriffe auf die gehosteten Server des AUFTRAGGEBERs. Diese Unterstützung beschränkt sich auf die Erläuterung der verfügbaren Metriken in Bezug auf die Umgebung des AUFTRAGGEBERs, um das Verständnis der aufgetretenen Vorfälle oder Leistungsprobleme zu erleichtern. Auf Grundlage der Ergebnisse dieser Analyse können Empfehlungen gegeben werden.* 

## 8.4. Verfügbarkeitsverpflichtung des S3-Objektspeichers

- **SLA 10      : IC-INFRA_SNC-10** – Hier sind die Verfügbarkeitszusagen für den S3-Objektspeicher:

| Indikator        | Verpflichtung                                     | Verfügbarkeitsziel        |
| -----------------| --------------------------------------------------|---------------------------|
| IC-INFRA-SNC-10.1| Langlebigkeit der Speicherung eines Objekts in einer Region | 99,9999999% / Jahr        |
| IC-INFRA-SNC-10.2| Verfügbarkeit der S3-Objektspeicher-API           | 99,99%                    |
| IC-INFRA-SNC-10.3| Maximale Latenzzeit für den Zugriff auf ein Objekt in einer Region | 150 ms                |

Bemerkungen:

- Der Objektspeicherdienst ist speziell für die Speicherung von Objekten konzipiert und muss ausschließlich zu diesem Zweck verwendet werden, **wobei die Nutzung im Blockmodus kategorisch ausgeschlossen ist**. Der Einsatz des Blockmodus durch Umgehungsmethoden, einschließlich der Nutzung von *"FUSE" in einer Linux-Umgebung*, stellt einen Verstoß gegen die Nutzungsbedingungen dar. Keine Vorfälle, Fehlfunktionen oder Schäden, die aus dieser unsachgemäßen Nutzung resultieren, werden durch die in dieser Servicevereinbarung definierten Service Level Agreements (SLAs) abgedeckt.
- Die Langlebigkeitsgarantie setzt die Einhaltung der aktuellen Best Practices und Standards voraus und schließt ausdrücklich jegliche absichtliche oder unbeabsichtigte Datenänderungen durch den AUFTRAGGEBER aus.

## 8.5. Klarstellung zur Sicherungsverpflichtung

Die für den AUFTRAGGEBER eingesetzte Backup-Strategie hängt vom Abschluss der entsprechenden Arbeitseinheiten ab.

Der Dienstleister verpflichtet sich, dem AUFTRAGGEBER eine Backup-Lösung bereitzustellen, die es dem AUFTRAGGEBER ermöglicht, die gewünschten Backup-Politiken anzuwenden.

Es wird darauf hingewiesen, dass der Verantwortungsbereich des Dienstleisters bei der Bereitstellung eines Backup-Dienstes endet und es dem AUFTRAGGEBER obliegt, die ordnungsgemäße Ausführung der zugehörigen Politiken über die AUFTRAGGEBER-Schnittstelle zu überwachen.

Es wird darauf hingewiesen, dass die Verwaltung der Speicherkapazitäten des für Backups vorgesehenen Speicherplatzes in der Verantwortung und Zuständigkeit des AUFTRAGGEBERs bleibt. Der Dienstleister stellt die Auslastung über die Konsole zur Verfügung.

*Beispiel: Keine Sicherung einer virtuellen Maschine:*

*Der AUFTRAGGEBER ist verantwortlich für die Überprüfung / Überwachung der ordnungsgemäßen Ausführung der Backup-Politiken. Im Falle, dass der AUFTRAGGEBER feststellt, dass eine virtuelle Maschine nicht gesichert wird, obliegt es ihm, die Ursache zu ermitteln. Der AUFTRAGGEBER kann den Support des Dienstleisters gemäß dem abonnierten Supportlevel in Anspruch nehmen, um Unterstützung zu erhalten.*

**SLA 8 : IC-INFRA_SNC-08 und SLA 9** wird ausschließlich im Falle eines Vorfalls des Backup-Dienstes anwendbar sein.

# 9. Organisation der vertraglichen Beziehung


## 9.1. Verantwortlichkeiten des Dienstleisters

Der Dienstleister verpflichtet sich:

- den AUFTRAGGEBER angemessen zu informieren (z.B. im Falle einer Kapazitätsgrenze der technischen Ressourcen, die den Dienst liefern).

- den AUFTRAGGEBER formell und innerhalb eines Monats über jede juristische, organisatorische oder technische Änderung zu informieren, die Auswirkungen auf die Konformität des Dienstes mit den Anforderungen des Schutzes vor außer-europäischen Gesetzen haben kann (19.6 des SNC v3.2-Referenzrahmens).

- dem AUFTRAGGEBER mindestens französischsprachige Schnittstellen und Dienstschnittstellen bereitzustellen.

- spezifische sektorspezifische Anforderungen im Zusammenhang mit den vom AUFTRAGGEBER im Rahmen der Dienstleistung übermittelten Informationen zu berücksichtigen und zu beachten, soweit sie in der Verantwortung des Dienstleisters liegen.

- keine Informationen im Zusammenhang mit der Leistung an Dritte weiterzugeben, es sei denn, eine formelle und schriftliche Genehmigung des AUFTRAGGEBERs liegt vor.

- alle erforderlichen Informationen zur Durchführung von Konformitätsprüfungen gemäß Artikel 28 der DSGVO bereitzustellen.

- dem AUFTRAGGEBER im Rahmen dieser Servicevereinbarung über jede Sicherheitsverletzung Bericht zu erstatten, die den Dienst oder dessen Nutzung durch den AUFTRAGGEBER (einschließlich der Daten des AUFTRAGGEBERs) betrifft.

- einem qualifizierten Anbieter von Informationssicherheitssystem-Audits (PASSI), der vom Dienstleister beauftragt wurde, zu gestatten, den Dienst sowie sein Informationssystem gemäß dem Kontrollplan des SecNumCloud des Dienstleisters zu auditieren. Darüber hinaus verpflichtet sich der Dienstleister, alle notwendigen Informationen zur Durchführung der Konformitätsprüfungen gemäß Artikel 28 der DSGVO bereitzustellen, die vom Auftraggeber oder einem beauftragten Dritten durchgeführt werden.

- als Unterauftragnehmer gemäß Artikel 28 der DSGVO dem AUFTRAGGEBER Unterstützung und Beratung zu bieten und ihn zu warnen, wenn eine Anweisung des AUFTRAGGEBERs möglicherweise gegen die Datenschutzbestimmungen verstößt.

- den AUFTRAGGEBER schriftlich zu informieren, wenn ein Projekt die Sicherheit des Dienstes beeinträchtigt oder beeinträchtigen könnte, sowie über die ergriffenen Abhilfemaßnahmen und verbleibenden Risiken.

- alle erforderlichen Verfahren zu dokumentieren und umzusetzen, um die gesetzlichen, regulatorischen und vertraglichen Anforderungen an den Dienst sowie die spezifischen Sicherheitsbedürfnisse des AUFTRAGGEBERs zu erfüllen, die von diesem festgelegt und vertraglich festgelegt wurden. Auf Anfrage des AUFTRAGGEBERs wird das Modul "Dokumentation" der AUFTRAGGEBER-Schnittstelle einen sicheren Austausch dieser Dokumente ermöglichen.

- auf Anfrage des AUFTRAGGEBERs die Risikobewertung bezüglich der Unterwerfung der Daten des AUFTRAGGEBERs unter das Recht eines Nicht-EU-Staates bereitzustellen.


Auf formelle und schriftliche Anfrage des AUFTRAGGEBERs verpflichtet sich der Dienstleister:

1. Dem AUFTRAGGEBER das interne Regelwerk und die Ethikrichtlinien des Dienstleisters zugänglich zu machen;

2. Dem AUFTRAGGEBER die Sanktionen mitzuteilen, die bei Verstößen gegen die Sicherheitsrichtlinie anfallen;

3. Dem AUFTRAGGEBER alle ihn betreffenden Ereignisse in den Protokolldaten des Dienstes mitzuteilen;

4. Am Ende des Vertrags verpflichtet sich der Dienstleister, die Daten und technischen Daten des AUFTRAGGEBERs gemäß dem in dieser Servicevereinbarung beschriebenen "Datenlöschungsverfahren am Vertragsende" zu löschen.

5. eine sichere Löschung aller Daten des AUFTRAGGEBERs durch vollständiges Überschreiben aller Speichermedien, die seine Daten im Rahmen des Dienstes beherbergt haben, zu gewährleisten.

6. eine vollständige Liste der Dritten bereitstellen, die berechtigt sind, auf die Infrastrukturen zuzugreifen, die die Daten beherbergen.
Leistungserbringer wird die umfassende Liste der Dritten, die berechtigt sind, auf die Infrastrukturen mit den Daten zuzugreifen, aktualisieren und dem AUFTRAGGEBER zur Verfügung stellen und diesen über jede Änderung bezüglich der Unterauftragnehmer informieren. Der Leistungserbringer und alle seine Tochtergesellschaften verpflichten sich, die Grundwerte der Europäischen Union zu respektieren, nämlich die Würde des Menschen, die Freiheit, die Demokratie, die Gleichheit, die Rechtsstaatlichkeit sowie die Achtung der Menschenrechte. Der vom Leistungserbringer bereitgestellte Service entspricht der geltenden Gesetzgebung in Bezug auf Grundrechte und den Werten der Europäischen Union in Bezug auf die Achtung der Menschenwürde, der Freiheit, der Gleichheit, der Demokratie und der Rechtsstaatlichkeit.

## 9.2. Begrenzung der Haftung des Leistungserbringers

Aufgrund der in dieser Servicevereinbarung genannten Definitionen und Bedingungen ist die Haftung des Leistungserbringers wie folgt begrenzt:

1. Das Modell der geteilten Verantwortung, das im Abschnitt „Modell der geteilten Verantwortung“ dieser Servicevereinbarung beschrieben wird, begrenzt die Beteiligung des Leistungserbringers an den Betriebsschichten, die "über" der Bereitstellung von Rechen-, Netzwerk-, Speicher- und Backup-Ressourcen liegen. Dies schließt insbesondere, ohne darauf beschränkt zu sein, folgendes aus:

    -   Die Verwaltung dessen, was auf den virtuellen Maschinen installiert ist (Betriebssysteme, Middleware, Anwendungen etc.);

    -   Die Aktualisierung der Betriebssysteme und anderer Software, die vom AUFTRAGGEBER auf seinen Maschinen in seinen Tenants installierte Software;

    -   Die Sicherheit der Programme, Software und Anwendungen, die auf den virtuellen Maschinen installiert sind;

    -   Die Aktualisierung der virtuellen Maschinen;

    -   Das Anwendungsdaten-Backup.

2.  Der Leistungserbringer kann keine Zusagen zur Sicherung der Tenants des AUFTRAGGEBERS machen, ohne dass der AUFTRAGGEBER zuvor die entsprechenden Arbeitseinheiten abonniert hat.

3.  Der Leistungserbringer kann sich nicht das Eigentum an den vom AUFTRAGGEBER übermittelten und erzeugten Daten anmaßen. Diese gehören nämlich dem AUFTRAGGEBER.

4.  Der Leistungserbringer weist darauf hin, dass er die vom AUFTRAGGEBER übermittelten und erzeugten Daten in keinem Fall ohne vorherige Validierung des AUFTRAGGEBERS nutzen kann.

5.  Der Leistungserbringer übernimmt keine Verantwortung für physisch gehostete und von ihm verwaltete, aber im direkten Besitz des AUFTRAGGEBERS oder eines Drittanbieters befindliche Komponenten, mit dem der AUFTRAGGEBER vertraglich verbunden ist. Das Hosting von physischen Komponenten der Kunden ist nicht Teil des Services und liegt somit außerhalb des Rahmens dieser Servicevereinbarung. Es liegt in der Verantwortung des AUFTRAGGEBERS, das Maß der Abhängigkeit dieser Komponenten in Zusammenhang mit dem qualifizierten SecNumCloud IaaS Service zu bewerten.

## 9.3. Zugangsbeschränkung

Im Rahmen des Services ist es dem Leistungserbringer strengstens untersagt, ohne vorherige Genehmigung auf die Tenants des AUFTRAGGEBERS zuzugreifen. Es liegt in der Verantwortung des AUFTRAGGEBERS, dem Personal des Leistungserbringers die erforderlichen Zugänge gemäß den spezifischen Anforderungen des Hostings und gegebenenfalls der professionellen Supportdienste zu gewähren, falls diese Option vom AUFTRAGGEBER gewählt wurde.

Der AUFTRAGGEBER bestätigt, dass diese Zugriffe ausschließlich für die mit der Bereitstellung der vereinbarten Services verbundenen Bedürfnisse gewährt werden, um eine sichere und vertragskonforme Verwaltung zu gewährleisten.

Zugriff von dritten, in die Bereitstellung der Services des Leistungserbringers involvierten Parteien, ist strengstens verboten. Sollte eine technische Anforderung solch einen Zugriff erfordern, kann dieser nur nach einer klaren Benachrichtigung des AUFTRAGGEBERS, detaillierter Begründung und seiner schriftlichen Zustimmung erfolgen.

Diese Maßnahme gewährleistet die Kontrolle und Sicherheit der Daten des AUFTRAGGEBERS, indem sichergestellt wird, dass jede Ausnahme von dieser Regel ordnungsgemäß genehmigt und dokumentiert ist.

## 9.4. Verantwortlichkeiten der an der Erbringung des Secure Temple-Service beteiligten Dritten

Der Leistungserbringer verwaltet die Liste der Partnerdritten, die an der Erbringung des Services beteiligt sind. Diese Dritten sind die Herausgeber, Dienstleister (des Leistungserbringers) und andere Lieferanten, die an der Erbringung des Services beteiligt sind. Der Leistungserbringer wendet folgende Maßnahmen für diese Dritten an:

-   Der Leistungserbringer verlangt von den an der Implementierung des Services beteiligten Dritten, dass sie in ihrem Beitrag zum Service ein Sicherheitsniveau einhalten, das mindestens dem entspricht, das er in seiner eigenen Sicherheitsrichtlinie für den Secure Temple-Service aufrechterhalten muss;

-   Der Leistungserbringer vertraglich festlegt mit jedem der an der Implementierung des Services beteiligten Dritten Klauseln, die einem Qualifizierungsorgan erlauben zu überprüfen, dass diese Dritten die gesetzlichen und SNC-Anforderungen einhalten, die es dem Leistungserbringer ermöglichen, seine Verpflichtungen aus dieser Servicevereinbarung zu erfüllen.

-   Der Leistungserbringer implementiert ein Verfahren, das eine regelmäßige Überprüfung der von den an der Implementierung des Services beteiligten Dritten getroffenen Maßnahmen ermöglicht, um sicherzustellen, dass diese den Leistungserbringer in die Lage versetzen, seine Verpflichtungen aus dieser Servicevereinbarung zu erfüllen.

-   Der Leistungserbringer implementiert ein Vorgehen zur Überwachung der von den an der Implementierung des Services beteiligten Dritten vorgenommenen Änderungen, die das Sicherheitsniveau des Informationssystems des Services beeinflussen können.

## 9.5. Verantwortlichkeiten und Pflichten des AUFTRAGGEBERS

Zur Erinnerung: Der Leistungserbringer stellt dem AUFTRAGGEBER eine Plattform zur Ausführung von virtuellen Maschinen zur Verfügung, deren Konfiguration in der Verantwortung des AUFTRAGGEBERS liegt. Jede virtuelle Maschine kann ohne eine damit verbundene Backuppolitik nicht betrieben werden. Der Leistungserbringer definiert über seine Schnittstellen automatische Backuppolitiken. Es liegt jedoch in der Verantwortung des AUFTRAGGEBERS, diese Backuppolitiken zu aktivieren und somit die virtuellen Maschinen zu aktivieren.

Der AUFTRAGGEBER autorisiert ANSSI und die Einrichtung zur Qualifizierung von SNC, den Service und die technische Infrastruktur, die den Service liefert, zu auditieren.

## 9.6. Rechte des AUFTRAGGEBERS

Der AUFTRAGGEBER kann jederzeit während der Vertragslaufzeit eine Beschwerde zum qualifizierten Service bei ANSSI einreichen.

Der AUFTRAGGEBER kann jederzeit den Leistungserbringer darum bitten, ihm seine interne Regelung und seinen Ethikkodex zugänglich zu machen.

## 9.7. Datenlöschung am Vertragsende

Nach Beendigung des Vertrags, sei es durch Ablauf oder aus irgendeinem anderen Grund, verpflichtet sich der Leistungserbringer, alle Daten des AUFTRAGGEBERS einschließlich der technischen Daten sicher zu löschen. Der Leistungserbringer wird dem AUFTRAGGEBER eine formelle Ankündigung mit einer Frist von einundzwanzig (21) Kalendertagen übermitteln. Die Daten des AUFTRAGGEBERS werden dann innerhalb von maximal dreißig (30) Tagen nach dieser Benachrichtigung gelöscht.

Zur Bestätigung dieser Löschung wird der Leistungserbringer dem AUFTRAGGEBER ein Zertifikat überreichen, das die Datenlöschung bestätigt.

# 10. Lebenszyklus dieser Servicevereinbarung

## 10.1. Inkrafttreten der Servicevereinbarung

Diese Servicevereinbarung tritt am Tag ihrer Unterzeichnung durch den AUFTRAGGEBER in Kraft.

Die Sammlung, Handhabung, Speicherung und Verarbeitung von Daten im Rahmen des Verkaufsprozesses, der Implementierung und der Einstellung des Services erfolgt unter Einhaltung der geltenden Gesetze.

## 10.2. Änderungen der Servicevereinbarung

Änderungen oder Ergänzungen dieser Servicevereinbarung erfolgen ausschließlich auf Anfragen der zu diesem Zweck bestimmten Governance-Organe. Diese Änderungsvorschläge werden von den Parteien geprüft, die befugt sind zu bestimmen, welche Aspekte eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede Änderung der Servicevereinbarung, nach Genehmigung, die die ursprünglich festgelegten finanziellen Bedingungen verändert, einen Nachtrag zum laufenden Vertrag erfordert und unterzeichnet werden muss.

Faktoren, die zu einer Überprüfung dieser Servicevereinbarung führen können, umfassen, beschränken sich aber nicht auf:

-   Die Entwicklung der technischen Infrastruktur, die den IaaS-Service liefert;

-   Die Anpassungen der vom Leistungserbringer bereitgestellten Services zur Erbringung des Services;

-   Die Änderungen der eingegangenen Verpflichtungen und der anwendbaren Sanktionen;

-   Die organisatorischen Neuausrichtungen innerhalb des AUFTRAGGEBERS oder des Leistungserbringers;

-   Die Erweiterung oder Verringerung des Anwendungsbereichs des Services.

Die Versionenverwaltung und Änderungen der Servicevereinbarung werden im Vorwort des Dokuments festgehalten, um die Nachverfolgbarkeit zu erleichtern.

### 10.2.1. Änderungen durch den AUFTRAGGEBER

Änderungen der Servicevereinbarung können insbesondere aus folgenden Gründen notwendig werden:

-   Eine Entwicklung der vom Leistungserbringer verwalteten Infrastruktur;

-   Eine Änderung der vom Leistungserbringer implementierten Dienste;

-   Eine Änderung der Service Level Agreements des Leistungserbringers.

### 10.2.2. Änderungen durch den Leistungserbringer

Jede Änderung der Servicevereinbarung bedarf der Zustimmung des AUFTRAGGEBERS. Es wird vereinbart, dass jede genehmigte Änderung oder Ergänzung, die die finanziellen Elemente des Vertrags verändert, die Unterzeichnung eines Nachtrags erfordert.

## 10.3. Reversibilität

Darüber hinaus verpflichtet sich Cloud Temple, eine Überprüfung dieser Servicevereinbarung (einschließlich ihrer Kündigung) ohne Strafe für den AUFTRAGGEBER im Falle des Verlusts der SecNumCloud-Qualifikation zu ermöglichen.


Die Dienstleistungen beinhalten keine Verpflichtung zur Rückführbarkeit (d. h. Unterstützung des Kunden bei der Migration seines Systems zu einem anderen Anbieter), mit Ausnahme der Bereitstellung der Schnittstelle des AUFTRAGGEBERS durch den Anbieter, die es dem AUFTRAGGEBER ermöglicht, seine Daten, einschließlich der Konfigurationsdaten seines Informationssystems, über eine der vom AUFTRAGGEBER gewählten technischen Modalitäten zu sichern und wiederherzustellen: Bereitstellung von Dateien in einem oder mehreren dokumentierten und außerhalb des vom Anbieter bereitgestellten Dienstes nutzbaren Formaten oder über die Implementierung technischer Schnittstellen, die den Zugriff auf die Daten gemäß einem dokumentierten und nutzbaren Schema (API) ermöglichen.

Der AUFTRAGGEBER, der alleinige Besitzer seines Systems ist, muss alle notwendigen Maßnahmen ergreifen, um diesen Vorgang zu erleichtern (was u. a. bedeutet, dass er hierfür eine sorgfältige Dokumentation erstellt) sowie die Erstellung von Rückführbarkeitsplänen. Sollte der AUFTRAGGEBER eine ergänzende Dienstleistung benötigen, kann der Anbieter eine Beratungsmission in diesem Zusammenhang im Rahmen eines auszuhandelnden spezifischen Vertrags anbieten.

# 11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes

## 11.1. Verwaltung von Vorfällen und Unterbrechungen

### 11.1.1. Vorfälle

#### 11.1.1.1. Arten von Vorfällen, die im Rahmen dieses Servicevertrags behandelt werden

-   Schäden

-   Ausfälle und Störungen

-   Sicherheitsvorfälle:

-   Beeinträchtigung der Dienstverfügbarkeit

-   Beeinträchtigung der Dienstvertraulichkeit

-   Beeinträchtigung der Dienstintegrität

#### 11.1.1.2. Bearbeitung von Vorfällen

-   Fristen

-   Nachträgliche Maßnahmen

-   Archivieren von Dokumenten, die Sicherheitsvorfälle detaillieren.

-   Meldung von Verletzungen personenbezogener Daten (online): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Benachrichtigungsstufe bei Sicherheitsvorfällen

Der AUFTRAGGEBER ist verantwortlich für die Auswahl der Schweregrade der Sicherheitsvorfälle, über die er informiert werden möchte, beispielsweise durch deren Formalisierung in einem für den Dienst geltenden PAS.

Standardmäßig wird der AUFTRAGGEBER informiert über:

-   Sicherheitsvorfälle mit Auswirkungen (Auswirkungen I1 und I2 gemäß der im Vorpriorisierungsprozess dieses Servicevertrags festgelegten Auswirkungsstufe);

-   Verletzungen personenbezogener Daten, für die der AUFTRAGGEBER für die Verarbeitung verantwortlich ist;

-   Verletzungen personenbezogener Daten, für die der Anbieter für die Verarbeitung verantwortlich ist und die personenbezogene Daten des AUFTRAGGEBERS enthalten.

## 11.2. Wartung des Dienstes

### 11.2.1. Art der Wartung

Die durchgeführte Wartung besteht in der Umsetzung:

-   Des Betriebsbereitschaftsplans des Dienstes, um gute Verfügbarkeitsindikatoren zu gewährleisten, wie sie vom Anbieter weiter oben zugesagt wurden;

-   Des PCA/PRA-Plans, falls vom AUFTRAGGEBER abonniert, ausgelöst nach eventuellen Vorfällen, die auftreten könnten.

### 11.2.2. Ferngriffe von Cloud Temple auf das Gebiet des AUFTRAGGEBERS

Der Anbieter ist im Rahmen dieses Servicevertrags von jeglichem Zugriff auf die Tenants und die Schnittstellenoberfläche des AUFTRAGGEBERS ausgeschlossen.

Es liegt in der Verantwortung des AUFTRAGGEBERS, dem Personal des Anbieters die notwendigen Zugänge zu gewähren. Der AUFTRAGGEBER erkennt an, dass die Zugänge im Rahmen des Hostings und letztlich des IT-Outsourcings (falls vom AUFTRAGGEBER abonniert) genutzt werden.

### 11.2.3. Ferngriffe von Dritten, die an der Bereitstellung des Dienstes beteiligt sind, auf das Gebiet des AUFTRAGGEBERS

Ferngriffe von Dritten, die an der Bereitstellung des Dienstes beteiligt sind, sind nicht gestattet.

Sollte ein technisches Erfordernis diesen Fall notwendig machen, würde diese Art von Zugriff erst nach Benachrichtigung des AUFTRAGGEBERS, Begründung und Erhalt seiner schriftlichen Zustimmung erfolgen.

# 12. Datenlöschungsverfahren am Ende des Vertrags

Am Ende des Vertrags, sei es am Ende der Laufzeit oder aus einem anderen Grund, wird der Anbieter die sichere Löschung aller im Rahmen des Dienstes verarbeiteten Daten, einschließlich der technischen Daten des AUFTRAGGEBERS, gewährleisten. Der Anbieter wird eine formelle Vorankündigung mit einer Frist von einundzwanzig (21) Kalendertagen einhalten. Die Daten des AUFTRAGGEBERS werden innerhalb von maximal dreißig (30) Tagen nach der Benachrichtigung gelöscht. Der Anbieter stellt dem AUFTRAGGEBER eine Löschungsbescheinigung aus.

# 13. Anwendbares Recht

## 13.1. Allgemein

Das anwendbare Recht und das diesem Servicevertrag unterliegt, ist das französische Recht.

## 13.2. Einhaltung des geltenden Rechts und der geltenden Vorschriften

Der Anbieter verpflichtet sich zu Folgendem:

-   Die Identifizierung der im Rahmen des Dienstes geltenden gesetzlichen und regulatorischen Anforderungen;

-   Die Einhaltung der auf die dem Anbieter anvertrauten Daten anwendbaren gesetzlichen und regulatorischen Anforderungen;

-   Die Einhaltung des Datenschutzgesetzes und der DSGVO;

-   Die Umsetzung von Maßnahmen zum Schutz personenbezogener Daten;

-   Die Umsetzung eines Prozesses zur Überwachung der gesetzlichen und regulatorischen Anforderungen;

-   Über angemessene Beziehungen oder eine Überwachung mit den sektoralen Behörden zu verfügen und diese aufrechtzuerhalten, die im Zusammenhang mit der Art der im Rahmen des Dienstes verarbeiteten Daten stehen. Dies umfasst insbesondere die ANSSI, das CERT-FR und die CNIL.

## 13.3. DSGVO

Als Auftragsverarbeiter im Sinne von Artikel 28 der Datenschutz-Grundverordnung (DSGVO) verpflichtet sich der Anbieter:

-   Transparenz und Rückverfolgbarkeit zu gewährleisten;

-   Einen Datenschutzbeauftragten (DPO) zu benennen, der für die Definition und Umsetzung der Maßnahmen zum Schutz personenbezogener Daten verantwortlich ist;

-   Unterstützung und Beratung zu leisten und den AUFTRAGGEBER zu warnen, falls eine Anweisung des AUFTRAGGEBERS eine Verletzung der Datenschutzregeln darstellt, sofern der Anbieter dies erkennen kann;

-   Eine Sicherheitsgarantie für die verarbeiteten Daten (aufgrund der SecNumCloud-Qualifikation) zu bieten.

## 13.4. Schutz vor außereuropäischem Recht

Im Falle der Inanspruchnahme einer Drittgesellschaft durch den Anbieter im Rahmen des Dienstes - einschließlich eines Unterauftragnehmers - die ihren satzungsmäßigen Sitz, ihre Hauptverwaltung oder ihre Hauptniederlassung in einem Staat außerhalb der Europäischen Union hat oder die zu einer Drittgesellschaft gehört oder von einer solchen kontrolliert wird, die in der Europäischen Union nicht ansässig ist, verpflichtet sich der Anbieter, dass diese besagte Drittgesellschaft keinen Zugriff auf die vom Dienst 'Secure Temple' betriebenen Daten haben wird.

Zur Erinnerung: Die betroffenen Daten sind die dem Anbieter vom AUFTRAGGEBER anvertrauten Daten sowie alle technischen Daten, die Informationen über die AUFTRAGGEBER enthalten.

Für die Zwecke dieses Artikels wird der Begriff Kontrolle im Sinne von II des Artikels L233-3 des Handelsgesetzbuches verstanden.

# 14. UNTERSCHRIFTEN

Erstellt in _________, am __________

Für Cloud Temple, der ANBIETER

Für _________, der AUFTRAGGEBER