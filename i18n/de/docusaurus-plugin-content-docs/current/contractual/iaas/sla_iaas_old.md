---
title: Convention de Service IaaS
---

![Logo Cloud Temple](images/ct.png)

# 1. **CONVENTION DE SERVICES IaaS**

| **Destinataires :**                  | **COMMANDITAIRE**                               |
| :----------------------------------- | :---------------------------------------------- |
| **Référence du documents**           | CT.AM.JUR.ANX_Convention de Services_IaaS_v2.0  |
| **Vos interlocuteurs**               | *Prénom* *Nom*                                  |
|                                      | Account Manager                                 |
|                                      | e-mail : *prenom.nom*@cloud-temple.com          |
| **Date de dernière mise à jour**     | 03/04/2024                                      |
| **Date de validation contractuelle** | Jour JJ AAAA                                    |

----------------------------------------------------------------------------------

| **Version** | **Date**   | **Action**                             | **Auteur**      |
| ----------- | ---------- | -------------------------------------- | --------------- |
| v0.1        | 07/06/2022 | Rédaction initiale                     | Lorena ALCALDE  |
| v0.2        | 14/09/2022 | Enrichissement                         | Lorena ALCALDE  |
| v1.0        | 30/12/2022 | Intégration Indicateurs                | Lorena ALCALDE  |
| v1.1        | 23/01/2023 | Modification pied de page              | Lorena ALCALDE  |
| v1.2        | 22/05/2023 | Enrichissement                         | Lorena ALCALDE  |
| v1.3        | 29/06/2023 | Enrichissement                         | Lorena ALCALDE  |
| v1.4        | 06/11/2023 | Modification Capital et Enrichissement | Lorena ALCALDE  |
| v1.5        | 30/11/2023 | Enrichissement                         | Lorena ALCALDE  |
| v1.6        | 21/03/2024 | Enrichissement                         | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | Ajustements conformité SNC             | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Publication                            | Lorena ALCALDE  |

----------------------------------------------------------------------------------

# 2. **TABLE DES MATIÈRES**

- [1. **CONVENTION DE SERVICES IaaS**](#1-convention-de-services-iaas)
- [2. **TABLE DES MATIÈRES**](#2-table-des-matières)
- [3. Préliminaire et Glossaire](#3-préliminaire-et-glossaire)
  - [3.1. Préliminaire](#31-préliminaire)
  - [3.2. Glossaire](#32-glossaire)
- [4. Acronymes](#4-acronymes)
- [5. Objet de la présente Convention de service](#5-objet-de-la-présente-convention-de-service)
- [6. Audit](#6-audit)
- [7. Description du Service](#7-description-du-service)
  - [7.1. Modèle de responsabilité partagé](#71-modèle-de-responsabilité-partagé)
  - [7.2. Présentation détaillée du périmètre du Service](#72-présentation-détaillée-du-périmètre-du-service)
    - [7.2.1. Infrastructures Datacenters](#721-infrastructures-datacenters)
    - [7.2.2. Infrastructure logicielle de pilotage du Service](#722-infrastructure-logicielle-de-pilotage-du-service)
    - [7.2.3. Infrastructures de calcul](#723-infrastructures-de-calcul)
    - [7.2.4. Infrastructure de stockage](#724-infrastructure-de-stockage)
    - [7.2.5. Infrastructure réseau globale](#725-infrastructure-réseau-globale)
    - [7.2.6. Infrastructure de sauvegarde](#726-infrastructure-de-sauvegarde)
    - [7.2.7. Mise en œuvre de solutions de reprise d'activité ou de continuité d'activité](#727-mise-en-œuvre-de-solutions-de-reprise-dactivité-ou-de-continuité-dactivité)
  - [7.3. Limitations des services dans le modèle IaaS qualifié](#73-limitations-des-services-dans-le-modèle-iaas-qualifié)
    - [7.3.1. Services managés en RUN](#731-services-managés-en-run)
    - [7.3.2. Configuration du secours](#732-configuration-du-secours)
    - [7.3.3. Configuration de la sauvegarde](#733-configuration-de-la-sauvegarde)
  - [7.4. Mise en œuvre du service](#74-mise-en-œuvre-du-service)
    - [7.4.1. Prérequis techniques](#741-prérequis-techniques)
  - [7.5. Localisation du service en France](#75-localisation-du-service-en-france)
    - [7.5.1. Localisation des Datacenters hébergeant le Service](#751-localisation-des-datacenters-hébergeant-le-service)
    - [7.5.2. Localisation des agences Cloud Temple opérant le service](#752-localisation-des-agences-cloud-temple-opérant-le-service)
  - [7.6. Support](#76-support)
    - [7.6.1. Nature du support accompagnant le service](#761-nature-du-support-accompagnant-le-service)
    - [7.6.2. Sollicitation du service support technique](#762-sollicitation-du-service-support-technique)
    - [7.6.3. Processus de gestion des Incidents](#763-processus-de-gestion-des-incidents)
    - [7.6.4. Processus de priorisation des traitements](#764-processus-de-priorisation-des-traitements)
    - [7.6.5. Langue et localisation du service de support](#765-langue-et-localisation-du-service-de-support)
- [8. Engagements et niveaux de services](#8-engagements-et-niveaux-de-services)
  - [8.1. Engagements de disponibilité de l'infrastructure](#81-engagements-de-disponibilité-de-linfrastructure)
  - [8.2. Engagement de disponibilité de l'interface COMMANDITAIRE](#82-engagement-de-disponibilité-de-linterface-commanditaire)
  - [8.3. Engagement de disponibilité du support](#83-engagement-de-disponibilité-du-support)
  - [8.4. Engagement de disponibilité du stockage objet S3](#84-engagement-de-disponibilité-du-stockage-objet-s3)
  - [8.5. Précision concernant l'engagement de sauvegarde](#85-précision-concernant-lengagement-de-sauvegarde)
- [9. Organisation de la relation contractuelle](#9-organisation-de-la-relation-contractuelle)
  - [9.1. Responsabilités du Prestataire](#91-responsabilités-du-prestataire)
  - [9.2. Limitation des responsabilités du Prestataire](#92-limitation-des-responsabilités-du-prestataire)
  - [9.3. Limitation d'accès](#93-limitation-daccès)
  - [9.4. Responsabilités des tiers participant à la fourniture du service Secure Temple](#94-responsabilités-des-tiers-participant-à-la-fourniture-du-service-secure-temple)
  - [9.5. Responsabilités et obligations du COMMANDITAIRE](#95-responsabilités-et-obligations-du-commanditaire)
  - [9.6. Droits du COMMANDITAIRE](#96-droits-du-commanditaire)
  - [9.7. Effacement des données en fin de Contrat](#97-effacement-des-données-en-fin-de-contrat)
- [10. Cycle de vie de la présente Convention de service](#10-cycle-de-vie-de-la-présente-convention-de-service)
  - [10.1. Entrée en effet de la Convention de service](#101-entrée-en-effet-de-la-convention-de-service)
  - [10.2. Évolutions de la Convention de service](#102-évolutions-de-la-convention-de-service)
    - [10.2.1. Évolutions déclenchées par le COMMANDITAIRE](#1021-évolutions-déclenchées-par-le-commanditaire)
    - [10.2.2. Évolutions déclenchées par le Prestataire](#1022-évolutions-déclenchées-par-le-prestataire)
  - [10.3. Réversibilité](#103-réversibilité)
- [11. Disponibilité, continuité et restauration du service](#11-disponibilité-continuité-et-restauration-du-service)
  - [11.1. Gestion des Incidents et des interruptions](#111-gestion-des-incidents-et-des-interruptions)
    - [11.1.1. Incidents](#1111-incidents)
      - [11.1.1.1. Types d'Incidents traités dans le cadre de cette Convention de service](#11111-types-dincidents-traités-dans-le-cadre-de-cette-convention-de-service)
      - [11.1.1.2. Traitement des incidents](#11112-traitement-des-incidents)
      - [11.1.1.3. Niveau de notification des Incidents de sécurité](#11113-niveau-de-notification-des-incidents-de-sécurité)
  - [11.2. Maintenance du Service](#112-maintenance-du-service)
    - [11.2.1. Nature de la maintenance](#1121-nature-de-la-maintenance)
    - [11.2.2. Accès distants de Cloud Temple sur le périmètre du COMMANDITAIRE](#1122-accès-distants-de-cloud-temple-sur-le-périmètre-du-commanditaire)
    - [11.2.3. Accès distants de tiers participant à la fourniture du service sur le périmètre du COMMANDITAIRE](#1123-accès-distants-de-tiers-participant-à-la-fourniture-du-service-sur-le-périmètre-du-commanditaire)
- [12. Procédure d'effacement des données en fin de Contrat](#12-procédure-deffacement-des-données-en-fin-de-contrat)
- [13. Droit applicable](#13-droit-applicable)
  - [13.1. De manière générale](#131-de-manière-générale)
  - [13.2. Respect du droit et des réglementations applicables](#132-respect-du-droit-et-des-réglementations-applicables)
  - [13.3. RGPD](#133-rgpd)
  - [13.4. Protection vis à vis du droit extra-européen](#134-protection-vis-à-vis-du-droit-extra-européen)
- [14. SIGNATURES](#14-signatures)

----------------------------------------------------------------------------------

# 3. Préliminaire et Glossaire

## 3.1. Préliminaire

Das vorliegende Dokument formalisiert die Servicevereinbarung für den als SecNumCloud zertifizierten IaaS-Dienst unter der Bezeichnung „*Secure Temple*“.

\"Die vorliegende Servicevereinbarung ergänzt und ist ergänzend zu den allgemeinen Verkaufs- und Nutzungsbedingungen des Dienstleisters. 
Es wird davon ausgegangen, dass die Vertragsdokumente miteinander kohärent ausgelegt werden. Im Falle eines Widerspruchs oder einer 
Abweichung zwischen den Bestimmungen der Vertragsdokumente haben die Dokumente in der folgenden Reihenfolge Vorrang:

1. Allgemeine Verkaufs- und Nutzungsbedingungen (AGB)
2. Servicevereinbarung SecNumCloud IaaS
3. Servicevereinbarung SecNumCloud PaaS
4. Spezifische Sondervereinbarung
5. Sicherheits-Notfallplan (PAS)
6. Besondere Nutzungsbedingungen (BNU)

## 3.2. Glossaire

In der vorliegenden Servicevereinbarung sind der **COMMANDITAIRE**, der **Dienstleister** und die **Parteien** im Vertrag 
identifiziert, dem diese Servicevereinbarung beigefügt ist.

Die in dieser Servicevereinbarung verwendeten Ausdrücke werden gemäß den unten zugeordneten Definitionen ausgelegt:

- **Änderung :** Jede hinzufügung, änderung oder entfernung, die den Dienst betrifft und genehmigt, geplant oder übernommen wurde.

- **Standardänderung :** Eine Änderung, die einem Verfahren unterliegt, dessen Produktionsmodalitäten und Auswirkungen (einschließlich finanzieller) den Parteien im Voraus bekannt und akzeptiert sind. Sie wird dann in den Katalog der Standardänderungen aufgenommen und kann je nach Fall eine GTI und eine GTR haben.

- **Vertrag :** bezeichnet den Vertrag, der vom AUFTRAGGEBER mit dem Dienstleister abgeschlossen wurde, um dem AUFTRAGGEBER die Nutzung des Dienstes zu ermöglichen, und dem dieser Servicevertrag beigefügt ist.

- ***Servicevertrag :*** Dieses Dokument wird im Rahmen eines spezifischen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (CGVU) und in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzrahmens erstellt.

- **Serviceanfrage :** Anfrage des AUFTRAGGEBERS an den Dienstleister im Rahmen des Dienstes, die Vorgänge abdeckt, die der AUFTRAGGEBER nicht über die AUFTRAGGEBER-Schnittstelle ausführen kann, sowie Supportanfragen im Rahmen des Dienstes. Die Serviceanfragen sind auf die im Vertrag oder im vorliegenden Servicevertrag genannten beschränkt.

- **Verfügbarkeit :** Fähigkeit zur Sicherstellung der Verfügbarkeit und der Aufrechterhaltung der optimalen Leistung des Dienstes in Übereinstimmung mit den in den Service Level Agreements (SLA) definierten Kriterien und Verpflichtungen.

- **Technische Daten** : umfasst alle Daten, die zur Bereitstellung des Dienstes verwendet werden, insbesondere die Identität der Begünstigten und Administratoren der technischen Infrastruktur, Infrastrukturprotokolle, Zugangskonfigurationen, Verzeichnisdienste, Zertifikate usw.

- **Ereignis :** Ein "Ereignis" ist jedes erkennbare oder identifizierbare Vorkommen, das für die Verwaltung des Dienstes von Bedeutung sein kann.

- **Hypervisor :** Betriebssystem, das die Ausführung von virtuellen Maschinen auf einem Rechenknoten ermöglicht.

- **Störung :** Jedes unerwartete Ereignis, das den normalen Betrieb des Dienstes stört oder die Datensicherheit gefährdet.

- **Sicherheitsvorfall :** Jedes Ereignis im Rahmen des Dienstes:

  - Von absichtlich bösartiger Natur;
  - Von unbeabsichtigter Art, das die Integrität, Vertraulichkeit oder Rückverfolgbarkeit des Dienstes oder der Daten des AUFTRAGGEBERS beeinträchtigt;
  - Das die bestehenden Sicherheitsmaßnahmen beeinträchtigt.
    Nicht bösartige Verfügbarkeitsbeeinträchtigungen werden nicht als Sicherheitsvorfall betrachtet (Hardware-Ausfall, Fehler, Fehlfunktion, Naturkatastrophe usw.).

- **AUFTRAGGEBER-Schnittstelle :** Vom Dienstleister dem AUFTRAGGEBER zur Verfügung gestellte Administrationsschnittstelle für den Dienst, die eine Web-Administrationskonsole und eine API umfasst.

- **Inbetriebnahme :** Administrationshandlung(en) zur Umsetzung der Änderung, wenn diese genehmigt ist (die Änderung im Sinne von ITIL bezieht sich nur auf das Änderungsmanagement und nicht auf deren Umsetzung).

- **Problem :** Ursache einer oder mehrerer wiederkehrender Störungen, Ursache einer potenziellen Störung (Risikokonstellation).

- **Region :** Bezeichnet eine geo-graphisch abgegrenzte Gruppe von Cloud-Verfügbarkeitszonen, die Netzwerk-, Rechen- und Speicher- dienste bereitstellen, um Latenz, Leistung und lokale regulatorische Konformität zu optimieren.

- **Dienst :** Bezeichnet den IaaS-Dienst, der als SecNumCloud "Secure Temple" qualifiziert ist und dem AUFTRAGGEBER vom Dienstleister von technischen Infrastrukturen bereitgestellt wird, die vom Dienstleister gewartet werden, wie in der Sektion "Beschreibung des Dienstes" des vorliegenden Servicevertrags beschrieben.

- **Secure Temple** : Bezeichnet den als SecNumCloud qualifizierten IaaS-Dienst, der von der Firma Cloud Temple angeboten wird, wie in der Bescheinigung definiert, die auf der Website von ANSSI einsehbar und als Anhang des vorliegenden Servicevertrags beigefügt ist.

- **Schaden :** Bezeichnet ein schwerwiegendes Ereignis natürlichen oder menschlichen Ursprungs, unbeabsichtigt oder absichtlich, das erhebliche Verluste und Schäden bei der betroffenen Partei verursacht.

- **Überwachung :** Überwachung eines Informationssystems oder eines Dienstes, bei der verschiedene Daten wie Messungen und Alarme gesammelt werden. Diese Aktivität beschränkt sich auf die Beobachtung und Nachverfolgung, ohne direkt auf die überwachten Elemente einzugreifen, was den Administrationsvorgängen vorbehalten ist.

- **Tenant :** Eine isolierte Instanz, die einem Nutzer oder einer Nutzergruppe vorbehalten ist und eine gemeinsame Infrastruktur teilt, während die Unabhängigkeit und Sicherheit der Daten und Anwendungen gewährleistet bleibt.

- **Verfügbarkeitszone (AZ) :** Ein spezifischer und isolierter Abschnitt der Cloud-Computing- Infrastruktur, der auf hohe Verfügbarkeit und Resilienz der Dienste ausgelegt ist, indem die Ressourcen geografisch verteilt werden.

# 4. Akronyme

  | **Akronym** | **Definition**                                                                        |
  | ------------ | :------------------------------------------------------------------------------------ |
  | **CAB**      | Change Advisory Board -- Beratungsausschuss für Änderungen                            |
  | **CMDB**     | Configuration Management Database -- Konfigurationsmanagement-Datenbank               |
  | **COPIL**    | Steuerungsausschuss                                                                   |
  | **COSTRAT**  | Strategischer Ausschuss                                                               |
  | **COPROJ**   | Projektausschuss                                                                      |
  | **DB**       | Database (Datenbank)                                                                  |
  | **DRP**      | Disaster Recovery Plan (PRA) (Katastrophenwiederherstellungsplan)                     |
  | **GTE**      | Garantiezeit für Eskalation                                                           |
  | **GTI**      | Garantiezeit für Intervention                                                         |
  | **GTR**      | Garantiezeit für Lösung                                                               |
  | **ITIL**     | Information Technology Infrastructure Library - Best Practices für das IT-Management  |
  | **IaaS**     | Infrastructure as a Service                                                           |
  | **MCO**      | Aufrechterhaltung des operativen Zustands                                             |
  | **MOA**      | Projektleitung (Auftraggeber)                                                         |
  | **MOE**      | Projektausführung (Auftragnehmer)                                                     |
  | **MSP**      | Managed Services Provider                                                             |
  | **OS**       | Operating System (Betriebssystem)                                                     |
  | **PAQ**      | Qualitätssicherungsplan                                                               |
  | **PaaS**     | Platform as a Service                                                                 |
  | **PAS**      | Sicherheits-Sicherungsplan                                                            |
  | **PASSI**    | Sicherheitsauditanbieter für Informationssysteme                                      |
  | **RFC**      | Request For Change -- Änderungsanforderung                                            |
  | **RGPD**     | Datenschutz-Grundverordnung (DSGVO)                                                   |
  | **RPO**      | Recovery Point Objective -- Frische der wiederhergestellten Daten im Falle eines Schadens |
  | **RTO**      | Recovery Time Objective -- Wiederherstellungszeit des Dienstes im Falle eines Schadens|
  | **SDM**      | Service Delivery Manager                                                              |
  | **SLA**      | Service Level Agreement -- Vereinbarung über den Serviceniveaustandards               |
  | **SNC**      | SecNumCloud                                                                           |
  | **SOC**      | Security Operation Center                                                             |
  | **TMA**      | Drittsystemwartung für Anwendungen                                                    |
  | **UO**       | Leistungseinheit                                                                      |
  | **VABE**     | Betriebsfähigkeitstests                                                               |
  | **VABF**     | Funktionstüchtigkeitstests                                                            |
  | **VM**       | Virtual Machine (Virtuelle Maschine)                                                  |
  | **VSR**      | Regelmäßige Servicebewertung                                                           |

# 5. Zweck des vorliegenden Servicevertrags

Der vorliegende Servicevertrag legt die Geschäftsbedingungen fest, unter denen der Dienstleister sich verpflichtet, den Dienst dem AUFTRAGGEBER zu liefern. Sein Zweck ist es:

- Die vom AUFTRAGGEBER erwarteten Leistungsanforderungen in Bezug auf Funktionalität und Zuverlässigkeit des Dienstes festzulegen;

- Die Verpflichtungen des Dienstleisters zur Erfüllung der vereinbarten Serviceniveaus zu nennen;

- Die speziell auf den gelieferten Dienst anwendbaren gesetzlichen Normen zu identifizieren;

- Eine Einheitlichkeit und Integrität bei der Bewertung der Dienstqualität sicherzustellen;

- Die Exzellenz der bereitgestellten Dienste durch quantitative Leistungsindikatoren zu garantieren.

Es wird festgelegt, dass der Vertrag im Falle eines Entzugs der SecNumCloud-Qualifikation des Dienstleisters vom AUFTRAGGEBER von Rechts wegen ohne Strafzahlungen gekündigt werden kann. In einem solchen Fall verpflichtet sich der Dienstleister, den AUFTRAGGEBER über diese Aberkennung durch eine offizielle Benachrichtigung mittels Einschreiben mit Rückschein zu informieren.
Il ist darauf hinzuweisen, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Widerruf der ursprünglichen Qualifikation ausgelegt wird.

# 6. Audit

Der Anbieter verpflichtet sich, dem AUFTRAGGEBER, oder einem vom Anbieter benannten Dritt- und Nichtkonkurrenten-Auditor, den Zugriff auf alle notwendigen Dokumente zu ermöglichen, die zur Bestätigung der vollständigen Einhaltung der Verpflichtungen im Zusammenhang mit der Einhaltung der Bestimmungen von Artikel 28 der Datenschutz-Grundverordnung (DSGVO) erforderlich sind, um so die Durchführung von Audits zu erleichtern.

Durch Annahme dieser Servicevereinbarung erteilt der AUFTRAGGEBER seine ausdrückliche Genehmigung an:

1. Die Nationale Agentur für Sicherheit der Informationssysteme (ANSSI) sowie die zuständige Qualifizierungsstelle zur Überprüfung der Konformität des Dienstes und seines Informationssystems mit dem SecNumCloud-Referenzrahmen.
2. Einen vom Anbieter beauftragten und ausdrücklich benannten Anbieter von Sicherheitsaudits für Informationssysteme (PASSI), zur Durchführung von Sicherheitsaudits des Dienstes.

# 7. Beschreibung des Dienstes

## 7.1. Modell der geteilten Verantwortung

Der vom Anbieter angebotene Dienst zeichnet sich durch die Bereitstellung der folgenden Dienstleistungen aus, die sich am Prinzip der geteilten Verantwortung im SecNumCloud-Referenzrahmen orientieren:

- Die Bereitstellung von Rechenressourcen (compute);

- Die Bereitstellung von Speicherflächen;

- Der Zugang zu Netzwerk- und Internetverbindungsdiensten;

- Das Angebot eines Backup-Dienstes für virtuelle Maschinen.

Das Modell der geteilten Verantwortung zwischen dem Anbieter und dem AUFTRAGGEBER im Rahmen des Dienstes wird in §7.1 vorgestellt.

Es wird davon ausgegangen, dass der Anbieter seine Expertise mobilisiert, um die Dienstleistungen gemäß den besten beruflichen Praktiken und den Anforderungen des SecNumCloud-Referenzrahmens bereitstellt.

Der Dienst ist SecNumCloud-qualifiziert (siehe Bescheinigung im Anhang).

## 7.2. Detaillierte Darstellung des Dienstumfangs

| Compute               | Rechenressource des AUFTRAGGEBER-Teilnehmers                                                                       |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------  |
| Storage               | Produktionsdaten des AUFTRAGGEBER-Teilnehmers                                                                         |
| Objekt-Speicher S3    | Bereitstellung einer souveränen multi-AZ-Objektspeicher-Infrastruktur, die mit Standard-S3-APIs kompatibel ist.    |
| Backup                | Modulabonnement für adäquaten Massenspeicher                                                                          |
| Netzwerkinfrastruktur | Netzwerkressource des AUFTRAGGEBER-Teilnehmers                                                                        |
| AUFTRAGGEBER-Konsole  | Der Dienst, der dem AUFTRAGGEBER den Zugang zu seinem IaaS-Dienst und dessen Verwaltung über die Shiva-Schnittstelle ermöglicht |
| Support               | Der Supportdienst, der die vorherigen Dienste begleitet und ausschließlich diese (*)                                  |

*(*) Innerhalb des qualifizierten Dienstumfangs SNC und der diesbezüglichen Verantwortlichkeiten des Anbieters*

### 7.2.1. Datacenter-Infrastrukturen

Der Dienst umfasst die Bereitstellung der nachfolgend qualifizierten Dienstleistungen für jede Verfügbarkeitszone:

- In Frankreich für die Region FR gelegenes Rechenzentrum, das den neuesten technologischen Standards entspricht und ein Resilienz-Niveau bietet, das dem Niveau Tier 3 des Uptime Institute entspricht oder dieses übersteigt;
- Bereitstellung technischer Räume in Rechenzentren zur Unterbringung der für die Dienstproduktion unerlässlichen technischen Geräte, einschließlich Compute, Speicher, Netzwerk, Verkabelung und sonstiger notwendiger Komponenten;
- Sichere Stromversorgung, gewährleistet durch zwei getrennte Stromkreise, die einen kontinuierlichen Dienstbetrieb sicherstellen;
- Bereitstellung angepasster Klimadienste, die den Normen und Empfehlungen der Gerätehersteller entsprechen, um eine optimale Umgebung für die technischen Einrichtungen zu gewährleisten;
- Kontinuierliche Überwachung und detaillierte Metrologie, die eine präzise Nachverfolgung und proaktive Verwaltung der Leistung und Sicherheit des bereitgestellten Dienstes ermöglicht.

Der Anbieter stellt fortschrittliche Branddetektions- und -löschdienste bereit, die darauf ausgelegt sind, jedes Feuer in den Anlagen effizient zu erkennen und zu bekämpfen. Diese Systeme sind wesentlich zur Sicherung der Geräte und Daten und umfassen hochpräzise Rauchdetektoren und Löschmittel, die schnell handeln können, ohne die IT-Geräte zu beschädigen. Dieser Dienst ist entscheidend zur Verhinderung von Brandrisiken, Minimierung potenzieller Schäden und Sicherstellung der Betriebsfortführung.

Der AUFTRAGGEBER wird darüber informiert, dass alle implementierten Sicherheitsverfahren und -maßnahmen, einschließlich der jährlichen Notfalltests für Generatoren, essenziell sind, um die Kontinuität und Integrität der bereitgestellten Dienste zu gewährleisten. Diese Praktiken sind darauf ausgelegt, Ausfallrisiken zu minimieren und ein optimales Reaktionsvermögen im Fall eines Vorfalls zu gewährleisten. Durch die Annahme dieser Bedingungen erkennt der Kunde die Bedeutung dieser Maßnahmen an und verpflichtet sich zur vollständigen Zusammenarbeit, um deren Implementierung zu erleichtern. Der AUFTRAGGEBER wird auch ermutigt, sich über die bereitgestellten Sicherheitsempfehlungen zu informieren und diese in seine eigene Risikomanagementstrategie zu integrieren.

### 7.2.2. Softwareinfrastruktur zur Dienststeuerung

Der Anbieter stellt dem AUFTRAGGEBER die erforderliche Verwaltungskonsole und API zur Nutzung des Dienstes bereit. Er verpflichtet sich auch, diese Verwaltungskonsole und API in optimalem Betriebszustand zu halten und deren Sicherheit kontinuierlich zu gewährleisten.
Diese Verwaltungskonsole und API werden zusammenfassend als „AUFTRAGGEBER-Schnittstelle“ bezeichnet.

Der Anbieter weist den AUFTRAGGEBER darauf hin, dass eine anormale Nutzung der AUFTRAGGEBER-Schnittstelle, insbesondere im Fall einer Überlastung ihrer Befehlsschnittstellen (hammering), automatische Sicherheitsmaßnahmen auslösen kann, die den Zugang zu den Befehlsschnittstellen oder zum Dienst blockieren. Es ist zu betonen, dass diese Situation keine Dienstunstabilität darstellt, sondern eine Schutzmaßnahme für den Dienst und die Infrastruktur des Anbieters ist; daher kann der AUFTRAGGEBER diese nicht als Dienstunstabilität in seine Berechnungen einbeziehen.

Des Weiteren informiert der Anbieter den AUFTRAGGEBER, dass identische (duplizierte) Anforderungen an seine APIs auf eine pro Sekunde beschränkt sind (Throttling). Wenn der AUFTRAGGEBER identische Anforderungen mit einer höheren Frequenz stellt, kann deren Ablehnung nicht als Dienstunstabilität ausgelegt werden.

### 7.2.3. Compute-Infrastrukturen

Der Dienst umfasst die Bereitstellung der notwendigen Geräte zur Ausführung von Arbeitslasten in Form von virtuellen Maschinen, in den vom AUFTRAGGEBER abonnierten Verfügbarkeitszonen.

Dies umfasst:

- Die Bereitstellung der technischen Chassis für den ordnungsgemäßen Betrieb der Compute-Blades;
- Die Bereitstellung der Compute-Blades in den vom AUFTRAGGEBER spezifizierten Mengen, verteilt auf die Verfügbarkeitszonen seiner Wahl. Es sei darauf hingewiesen, dass diese Compute-Blades ausschließlich dem AUFTRAGGEBER gewidmet sind;
- Die Bereitstellung von Betriebssystemen des Typs Hypervisor sowie die Gewährleistung des Betriebszustands und der Sicherheit der notwendigen Software-Infrastruktur zur Steuerung dieser Betriebssysteme. Es sei darauf hingewiesen, dass der Anbieter zwar für die Betriebssicherheit und die Gesamtsicherheit des Dienstes verantwortlich ist, jedoch keine spezifischen Kenntnisse über die Produktionsumgebungen des AUFTRAGGEBER oder die Anforderungen an seine Arbeitslasten besitzt. Daher liegt die Verantwortung für die Entscheidung zur Aktualisierung der Betriebssysteme der Hypervisor-Blades, eine Aktion, die möglicherweise einen Neustart erfordert, vollständig beim AUFTRAGGEBER. Diese Aktion kann über die AUFTRAGGEBER-Schnittstelle durchgeführt werden.

Die Auswahl des Compute-Blade-Modells aus dem vom Anbieter vorgeschlagenen Katalog liegt in der Verantwortung des AUFTRAGGEBERS.

### 7.2.4. Speicherinfrastruktur

Der Dienst umfasst die Bereitstellung einer gemeinsamen SAN-Speicherinfrastruktur (Storage Area Network) für den AUFTRAGGEBER mit verschiedenen Leistungsniveaus. Dieser Dienst umfasst:

- Die Implementierung und Wartung des dedizierten SAN-Netzwerks;
- Die Installation und Verwaltung der gemeinsamen Speichereinheiten zwischen den Kunden, einschließlich deren Betriebszustand, Sicherheitszustand, Überwachung und Metrologie;
- Die Implementierung von automatisierten Systemen zur Zuweisung der dem AUFTRAGGEBER gewidmeten LUNs (Logical Unit Numbers) gemäß den vom AUFTRAGGEBER abonnierten Volumen.

### 7.2.5. Globale Netzwerk-Infrastruktur

Der Anbieter stellt im Rahmen des Dienstes ein globales Netzwerk bereit, das dem AUFTRAGGEBER die Erreichbarkeit seiner gehosteten Systeme
ermöglicht. Dieser Dienst umfasst:

- Die Bereitstellung, Wartung und den Sicherheitszustand aller Glasfaserverbindungen
    zwischen den verschiedenen Verfügbarkeitszonen;

- Die Bereitstellung, Wartung und den Sicherheitszustand der technischen Geräte, die
    für den ordnungsgemäßen Betrieb des Netzwerks und die Isolation der verschiedenen Kunden erforderlich sind.


L'interconnexion réseau des Tenants des AUFTRAGGEBERS, zum Internet oder zu privaten Netzwerken, und netzwerktechnische Ausrüstungen, Betreiberverbindungen und andere technische Komponenten, die diese Interkonnektion ermöglichen, sind nicht Teil des Serviceumfangs. Diese Netzwerkinverbindung wird gemäß den im Vertrag vorgesehenen Bestimmungen implementiert.

### 7.2.6. Backup-Infrastruktur

Der Anbieter stellt dem AUFTRAGGEBER einen integrierten, dedizierten und verwalteten Backup-Service zur Verfügung, der zum Schutz seiner virtuellen Maschinen dient. Der Anbieter sorgt für den Betrieb und die Sicherheit dieses Backup-Services. Der Anbieter garantiert, dass die Backups des AUFTRAGGEBERS außerhalb der Verfügbarkeitszone der gesicherten Arbeitslasten liegen, sofern der AUFTRAGGEBER die entsprechenden Leistungseinheiten abonniert hat.

Diese Backup-Leistung beschränkt sich auf die Sicherung der virtuellen Maschinen und Topologiekonfigurationen der IaaS-Umgebung der Tenants des AUFTRAGGEBERS im Rahmen des Services. Die Erstellung und Anwendung einer adäquaten Backup-Politik durch den AUFTRAGGEBER hängt von der Buchung spezifischer Leistungseinheiten ab. Es liegt daher in der Verantwortung des AUFTRAGGEBERS sicherzustellen, dass die technischen Ressourcen beim Anbieter verfügbar sind, um seine Backup-Politik umzusetzen oder diese an die verfügbaren Mittel anzupassen.

Der Anbieter verpflichtet sich, den AUFTRAGGEBER im Falle von Kapazitätsengpässen zu benachrichtigen und Beratungsunterstützung zur Optimierung der Ressourcen zu bieten. Die Verpflichtungen des Anbieters beschränken sich auf die Umsetzung der vom AUFTRAGGEBER geäußerten Bedürfnisse hinsichtlich der Backup-Politik im Rahmen der abonnierten Ressourcen.

### 7.2.7. Umsetzung von Disaster Recovery- oder Business Continuity-Lösungen

Der Anbieter stellt dem AUFTRAGGEBER alle technischen Lösungen zur Verfügung, die notwendig sind, um eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen zu gewährleisten. Es liegt in der Verantwortung des AUFTRAGGEBERS, diese Ressourcenverteilung effektiv zu verwalten, wofür er die vom Anbieter bereitgestellten Werkzeuge nutzen kann.

## 7.3. Beschränkungen der Services im qualifizierten IaaS-Modell

### 7.3.1. Managed Services im RUN

Es ist wichtig zu beachten, dass vom Service ausgeschlossen sind:

- Das Hosting physischer Komponenten des AUFTRAGGEBERS;

- Die Netzwerkinverbindung der Tenants des AUFTRAGGEBERS, zum Internet oder zu privaten Netzwerken, einschließlich Betreiberverbindungen;

- Jeglicher Managed Service oder TMA;

- Jegliche Unterstützung für virtuelle Maschinen auf OS-Ebene und darüber hinaus in der IaaS-Verantwortungsstapel, auch wenn es sich nur um einfache Überwachung handelt.

Dies bedeutet jedoch nicht, dass es ausgeschlossen ist, dass der AUFTRAGGEBER auf solche Dienste aus dem MSP-Angebot des Anbieters zurückgreift, um im Managed-Service-Modus auf seine Tenants zuzugreifen. Diese Dienste werden dann nicht durch diese Service-Vereinbarung und ihre beidseitigen Verpflichtungen/Klauseln abgedeckt.

### 7.3.2. Notfallkonfiguration

Standardmäßig stellt der Anbieter dem AUFTRAGGEBER die Ressourcen des IaaS zur Verfügung, indem er Ressourcen reserviert und die Bereitstellungen so konfiguriert, dass sie die Verfügbarkeitszonen nutzen. Es liegt in der Verantwortung des AUFTRAGGEBERS, die Verfügbarkeitszonen über die AUFTRAGGEBER-Schnittstelle auszuwählen.

### 7.3.3. Backup-Konfiguration

Der Backup-Service beschränkt sich auf die Sicherung der virtuellen Maschinen und der Topologiekonfigurationen, die die IaaS-Umgebung der Tenants des AUFTRAGGEBERS im Rahmen des Services darstellen.

Der Backup-Service und die Umsetzung der Backup-Politik des AUFTRAGGEBERS unterliegen der Buchung des notwendigen Speicherplatzes im Massenspeicher, um den Service zu gewährleisten. Es ist daher die Verantwortung des AUFTRAGGEBERS, beim Anbieter die technischen Mittel zu abonnieren, die notwendig sind, um die Backup-Politik in seinem IT-Umfeld sicherzustellen, oder die Backup-Politik an die implementierten Mittel anzupassen. Der Anbieter verpflichtet sich, den AUFTRAGGEBER im Falle technischer Kapazitätsbeschränkungen zu benachrichtigen.

Der Anbieter wird die technischen und personellen Mittel zur Sicherung des gehosteten Systems im Rahmen der vom AUFTRAGGEBER abonnierten Ressourcen umsetzen.

Darüber hinaus ist es im Falle von nicht vom Anbieter unterstützten Bereichen die Verantwortung des AUFTRAGGEBERS, seine eigene Backup-Strategie zu definieren und die Backups der VMs selbst zu konfigurieren oder eine Serviceanfrage beim Anbieter zu stellen, um die Backup-Konfiguration für physische Server zu implementieren, wenn der AUFTRAGGEBER über einen Managed-Service-Vertrag verfügt, der den Anbieter zur Konfiguration über die AUFTRAGGEBER-Schnittstelle, die Verwaltungskonsole, die im Rahmen dieser Service-Vereinbarung zur Verfügung gestellt wird, und über Funktionen zur Backup-Konfiguration ermöglicht.

Darüber hinaus beschränkt sich dieser Service darauf, die vom AUFTRAGGEBER klar spezifizierte Konfiguration über die AUFTRAGGEBER-Schnittstelle zu implementieren.

Aus Gründen der Flexibilität des Angebots des Anbieters hat der AUFTRAGGEBER die Möglichkeit, eine „No-Backup“-Politik für einige seiner VMs anzuwenden. In diesem Fall liegt diese Entscheidung in der Verantwortung des AUFTRAGGEBERS. Der Anbieter wird die VMs, die der „No-Backup“-Politik zugeordnet sind, nicht sichern. Der Anbieter weist den AUFTRAGGEBER darauf hin, dass die Wahl der „No-Backup“-Politik oder manuelle Sicherungen den AUFTRAGGEBER einem dauerhaften Datenverlust im Falle eines Vorfalls auf den unteren Schichten oder auf den Schichten, die seiner Verantwortung im IaaS-Modell unterliegen, aussetzt. In einem solchen Fall ist es unmöglich, den Anbieter dafür verantwortlich zu machen, die Daten wiederherzustellen, da es nichts wiederherzustellen gibt. Der Anbieter empfiehlt immer, die VMs zu sichern.

Bezüglich des auf einer virtuellen Maschine installierten OS und aller darauf ausgeführten Software oder Programme liegt die Verantwortung für die Durchführung von Administrations- und Überwachungsmaßnahmen beim AUFTRAGGEBER, wenn dieser sicherstellen möchte, dass alle Schichten des IT-Systems innerhalb der Europäischen Union betrieben und verwaltet werden. Die Administrationsmaßnahmen außerhalb des Verantwortungsbereichs des Anbieters im Rahmen dieser Service-Vereinbarung sind im Abschnitt „Modell der geteilten Verantwortung“ dieser Service-Vereinbarung angegeben.

## 7.4. Implementierung des Service

### 7.4.1. Technische Voraussetzungen

Für die Implementierung des Services erkennt der AUFTRAGGEBER an, dass er:

- Mit einer VMware-Virtualisierung arbeiten muss, unter den vom Anbieter unterstützten Versionen, die im Rahmen des Services bereitgestellt werden;

- Über den Anbieter das Backup-Tool nutzen muss;

- Feste IP-Adressen deklarieren muss, von denen aus der Anbieter ihm den Zugriff auf die AUFTRAGGEBER-Schnittstelle erlaubt (Whitelisting). Änderungen an dieser IP-Liste müssen über Serviceanfragen durchgeführt werden (Liste nicht über die Verwaltungsschnittstelle des Services verwaltbar).

## 7.5. Standort des Services in Frankreich

Es wird darauf hingewiesen, dass keine der Operationen und keine der physischen Komponenten, die an der Bereitstellung des Services beteiligt sind, der Gegenstand dieser Service-Vereinbarung ist, außerhalb der Europäischen Union liegen.

Dies schließt insbesondere den Support, die Betriebsüberwachung und die Sicherheitsüberwachung (SOC) der technischen Infrastruktur, die den Service bereitstellt, ein. Daher werden alle Speicherungen, alle Administrations- und Überwachungsaufgaben sowie alle Bearbeitungen in Frankreich durchgeführt.

### 7.5.1. Standort der Rechenzentren, die den Service hosten

Abgesehen von den Operationen der Mitarbeiter und Agenturen des Anbieters befinden sich alle Produktionsoperationen (einschließlich Speicherung und Datenverarbeitung) und technischen Komponenten, die den Service bereitstellen, in Rechenzentren in Frankreich.

### 7.5.2. Standort der Cloud-Temple-Agenturen, die den Service betreiben

Die Mitarbeiter von Cloud Temple, die im Rahmen des Service tätig sind, arbeiten von den Cloud-Temple-Agenturen aus, die sich ausschließlich in Frankreich befinden. Diese Agenturen befinden sich in Frankreich in Tours, Lyon, Caen und Paris La Défense.

Der AUFTRAGGEBER wird über die Möglichkeit informiert, dass Mitarbeiter von Cloud Temple remote arbeiten können. Dennoch garantiert der Anbieter das gleiche Sicherheitsniveau bezüglich der Fernzugriffe, insbesondere bei VPN-Zugängen. Diese Fernzugriffe werden gemäß den Anforderungen des SecNumCloud-Referenzdokuments umgesetzt.

## 7.6. Support

### 7.6.1. Art des Supports, der den Service begleitet

Der Anbieter bietet einen technischen Support-Service an, der den AUFTRAGGEBER bei der Verwaltung, Fehlerbehebung und Optimierung seiner bereitgestellten Ressourcen unterstützen soll. Dieser Service deckt eine breite Palette an Aktivitäten ab, von der anfänglichen Konfigurationshilfe für die Nutzung des Services bis hin zu fortgeschrittener technischer Unterstützung zur Lösung spezifischer Probleme.

Hier ist eine Beschreibung der Eigenschaften und Funktionen des Support-Services:

- Unterstützung bei der anfänglichen Implementierung der Nutzung des Services;
- Unterstützung bei der Lösung von Vorfällen;
- Unterstützung bei der Problemlösung;
- Überwachung und Beratung zur Optimierung der technischen Basis.
Im Rahmen des Supportdienstes ersetzt der Dienstleister nicht den AUFTRAGGEBER bei der Nutzung des Dienstes. Der AUFTRAGGEBER bleibt vollständig verantwortlich für die Konfiguration, den Betrieb seiner VMs und seiner Tenants sowie für die Verwaltung aller Elemente (einschließlich Daten und Anwendungen), die er auf den Infrastrukturen des Dienstleisters gespeichert oder installiert hat. Der technische Supportdienst wird gemäß den Allgemeinen Geschäfts- und Nutzungsbedingungen erbracht, wobei der Dienstleister eine Verpflichtung nach besten Kräften eingeht.

Der AUFTRAGGEBER verpflichtet sich, den technischen Supportdienst in angemessener Weise zu nutzen, insbesondere keine beim Dienstleister nicht abonnierten Leistungen in Anspruch zu nehmen und die Teams des Dienstleisters nicht bei seinen eigenen Kunden oder Dritten, die nicht im Vertrag enthalten sind, einzusetzen. Der Dienstleister behält sich das Recht vor, jede Serviceanfrage abzulehnen, die diese Kriterien nicht erfüllt.

Das Engagementniveau des Supports ist abhängig vom Abonnement der zugehörigen Support-Einheiten.

### 7.6.2. Anforderung des technischen Supports

Der technische Support ist über ein Ticket-System über die AUFTRAGGEBER-Konsole zugänglich und während der normalen Bürozeiten außer an Feiertagen verfügbar (8 Uhr - 18 Uhr; Montag - Freitag; französischer Kalender und Uhrzeiten). Für Notfälle außerhalb der Geschäftszeiten, insbesondere Vorfälle, die die Produktion erheblich beeinträchtigen, kann der Bereitschaftsdienst über eine dem AUFTRAGGEBER bei der Initialisierung des Dienstes mitgeteilte Telefonnummer erreicht werden.

Für jede Anfrage oder jeden Vorfall muss unbedingt ein Ticket beim Support des Dienstleisters erstellt werden. Die Initialisierung dieses Tickets, einschließlich aller erforderlichen Informationen, ist wesentlich und markiert den Beginn der Evaluierung der Verpflichtungen des Dienstleisters.

Sobald der Dienstleister eine Anfrage oder eine Benachrichtigung über einen Vorfall erhält, sei es über die Managementkonsole oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Meldung eines Vorfalls ist es unerlässlich, dass der AUFTRAGGEBER dem Dienstleister so viele Details wie möglich zum aufgetretenen Problem
liefert. Diese Vorgehensweise ist entscheidend, um eine angemessene Bewertung der Situation, deren Priorisierung und eine effektive Diagnose zu ermöglichen.

Der Kunde erhält dann eine Bestätigung per E-Mail, die die Erstellung des Tickets und dessen eindeutige Nummer angibt. Der AUFTRAGGEBER kann den Status und die Historie seiner Anfragen und Vorfallsmeldungen direkt über die Managementkonsole einsehen.

### 7.6.3. Vorfallsmanagementprozess

Bei der Meldung eines Vorfalls beginnt das technische Supportteam des Dienstleisters mit einer Untersuchung, um die Ursache des Problems zu identifizieren und eine Diagnose zu erstellen. Der Kunde muss aktiv mit dem Dienstleister zusammenarbeiten, indem er alle notwendigen Informationen bereitstellt und die erforderlichen Tests durchführt. Der Dienstleister kann auf den Dienst des Kunden zugreifen, um den Vorfall zu diagnostizieren.

Wenn die Dienste des Dienstleisters funktionsfähig sind und der Vorfall nicht auf ihn zurückzuführen ist, wird der Kunde informiert. Auf Wunsch des Kunden kann der Dienstleister professionelle Dienste anbieten, um die Ursache des Problems zu ermitteln, die nach vorheriger Absprache für jeweils 30 Minuten berechnet werden.

Im Falle, dass der Vorfall in die Verantwortung des Dienstleisters oder eines seiner Subunternehmer fällt, schließt dieser die Diagnose ab und arbeitet kostenlos an der Wiederherstellung des Dienstes. Die Diagnose basiert auf dem Austausch zwischen den Parteien und den Daten des Dienstleisters, diese Elemente werden durch Vereinbarung der Parteien als beweiskräftig erachtet.

### 7.6.4. Priorisierungsprozess der Bearbeitung

Die Bestimmung des Prioritätsniveaus eines Falls basiert auf einer Matrixanalyse, die die Auswirkungen des Vorfalls und dessen Grad der
Kritikalität bewertet:

- Die Impactlevel sind wie folgt definiert:

| Impactlevel | Beschreibung                                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| Impact I1   | Die oder die Dienste des Dienstleisters sind unterbrochen                                                              |
| Impact I2   | Die oder die Dienste des Dienstleisters sind beeinträchtigt                                                            |
| Impact I3   | Die oder die Dienste des Dienstleisters sind derzeit stabil, zeigen jedoch Anzeichen eines potenziellen langfristigen Rückgangs |

- Die Kritikalitätslevel sind wie folgt definiert:

| Kritikalitätslevel | Beschreibung                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| Kritikalität C1    | Die oder die Dienste des Dienstleisters verschlechtern sich mit besorgniserregender Geschwindigkeit      |
| Kritikalität C2    | Die oder die Dienste des Dienstleisters verschlechtern sich allmählich im Laufe der Zeit                 |
| Kritikalität C3    | Die oder die Dienste des Dienstleisters weisen eine oder mehrere Unannehmlichkeiten ohne wesentliche Folgen auf |

- Basierend auf einer gründlichen Analyse der Situation, unter Berücksichtigung der die Auswirkungen und die Kritikalität bestimmenden Elemente, wird dem Ticket eine Priorität gemäß der folgenden Entscheidungsmatrix zugewiesen:

| Impactlevel <br/> \ Kritikalitätslevel | Impact I1       | Impact I2       | Impact I3       |
| -------------------------------------- | --------------- | --------------- | --------------- |
| Kritikalität C1                        | Priorität **P1** | Priorität **P2** | Priorität **P3** |
| Kritikalität C2                        | Priorität **P2** | Priorität **P3** | Priorität **P4** |
| Kritikalität C3                        | Priorität **P3** | Priorität **P4** | Priorität **P5** |

Die Service-Level-Vereinbarungen, die den jeweiligen Prioritätsstufen entsprechen, werden im folgenden Kapitel detailliert beschrieben.

### 7.6.5. Sprache und Standort des Supportdienstes

Der Support wird vom Dienstleister dem AUFTRAGGEBER mindestens in französischer Sprache bereitgestellt. Der Support kann auch in englischer Sprache erbracht werden.

Die Betriebsstandorte des Supportdienstes des Dienstleisters für das qualifizierte SecNumCloud-Infrastruktur-Serviceangebot befinden sich in der Europäischen Union.

# 8. Verpflichtungen und Service Level Agreements

Der Dienstleister verpflichtet sich, eine kontinuierliche Überwachung der Leistung und der sicheren Integrität seiner technischen Infrastruktur, die den Dienst bereitstellt, zu gewährleisten und die optimale Funktionsweise sicherzustellen.

Die Nichtverfügbarkeit eines Dienstes, der einem Leistungsindikator unterliegt, wird ab dem Zeitpunkt anerkannt, an dem sie vom Überwachungssystem des Dienstleisters identifiziert wird oder nach einer Benachrichtigung durch einen Benutzer des AUFTRAGGEBERS. Der Beginn der Nichtverfügbarkeit wird auf den frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um eine genaue und faire Zählung der Ausfallzeit zu gewährleisten.

Das Ende der Nichtverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, entweder durch die Überwachungstools des Dienstleisters oder durch eine Rückmeldung des Benutzers bestätigt, wodurch eine effektive Wiederaufnahme der Operationen und eine genaue Messung der Dauer der Unterbrechung sichergestellt wird.

## 8.1. Verfügbarkeitsgarantien der Infrastruktur

Der Dienstleister verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau einzuhalten, das den für jeden spezifizierten Zeitraum definierten Standards entspricht. Die Service-Level-Vereinbarungen (SLAs) gelten unter der Voraussetzung, dass der AUFTRAGGEBER seine Systeme über mindestens zwei der in der betreffenden Region vorhandenen Verfügbarkeitszonen implementiert.

Wenn der AUFTRAGGEBER diese Bedingungen nicht einhält,
ist er nicht in der Lage, die Anwendung der
betreffenden SLAs zu beanspruchen, die durch ein
Sternchen (\*) gekennzeichnet sind. Der Zugriff auf die SLAs erfolgt über die
AUFTRAGGEBER-Schnittstelle. Die Messungen werden monatlich berechnet:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Verfügbarkeit der Rechenleistung (Compute): garantierte Verfügbarkeit von 99,99%, berechnet auf einer Basis von 24h/24, 7j/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Verfügbarkeit des Speichers: garantierte Verfügbarkeit von 99,99%, berechnet auf einer Basis von 24h/24, 7j/7.
- **SLA 3     : IC-INFRA_SNC-03** – Zuverlässigkeit der Sicherung: garantierte Verfügbarkeit von 99,99%, berechnet auf einer Basis von 24h/24, 7j/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Verfügbarkeit der Netzwerk-Infrastruktur: garantierte Verfügbarkeit von 99,99%, berechnet auf einer Basis von 24h/24, 7j/7.
- **SLA 5     : IC-INFRA_SNC-05** – Internetzugang: garantierte Verfügbarkeit von 99,99%, berechnet auf einer Basis von 24h/24, 7j/7.

***Hinweise*** :

- *Als Reaktion auf einen verteilten Denial-of-Service-Angriff (DDoS) behält sich der Dienstleister das Recht vor, seine Internet-Routing-Konfiguration anzupassen, um die Auswirkungen dieses Angriffs zu begrenzen und seine Infrastruktur zu schützen. Insbesondere wenn eine IP-Adresse des AUFTRAGGEBERS Ziel des Angriffs ist, kann der Dienstleister auf die Technik des Blackholing
über die BGP-Community zurückgreifen, um den gesamten Datenverkehr zu der betroffenen IP-Adresse upstream bei seinen Anbietern zu blockieren, um die Ressourcen des AUFTRAGGEBERS sowie die anderer AUFTRAGGEBER und der Infrastruktur des Dienstleisters zu schützen. Der Dienstleister empfiehlt dringend, dass der AUFTRAGGEBER ähnliche Maßnahmen ergreift, wie die Verwendung von auf dem Markt erhältlichen Web Application Firewalls, und seine Sicherheitsgruppen über die API-Schnittstelle sorgfältig konfiguriert.*
- *Der Dienstleister betont die Notwendigkeit für den AUFTRAGGEBER, die Öffnungen der Datenströme zu minimieren, indem er es insbesondere vermeidet, die Verwaltungs-Ports **SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389) für das gesamte Internet (Teilnetz 0.0.0.0/0) zugänglich zu machen, sowie interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049) zu verwenden.*

## 8.2. Verfügbarkeitsverpflichtung der AUFTRAGGEBER-Oberfläche

- SLA 6: IC-INFRA_SNC-06 -- Zugang zur Administrationskonsole des Dienstes: eine garantierte Verfügbarkeit von 97%, rund um die Uhr, 24 Stunden am Tag und 7 Tage die Woche.
- SLA 7: IC-INFRA_SNC-07 -- Zugang zur Pilot-API des Dienstes: eine Verfügbarkeit von 99.9%, basierend auf 24 Stunden am Tag, 7 Tage die Woche berechnet.

## 8.3. Verfügbarkeitsverpflichtung des Supports

- **SLA 8 : IC-INFRA_SNC-08** – Hier sind die Leistungszusagen des technischen Supports des Dienstleisters für Vorfälle, außer geplanten Wartungen:

| Priorität        | Garantie der Interventionszeit (GTI) | Leistungsziel        |
| ---------------  | ------------------------------------ | ----------------------|
| Priorität **P1** | 30 Min                                | 95%                  |
| Priorität **P2** | 2 Std                                 | 90%                  |
| Priorität **P3** | 4 Std                                 | 90%                  |
| Priorität **P4** | 24 Std                                | 85%                  |
| Priorität **P5** | 48 Std                                | 85%                  |

- **SLA 9: IC-INFRA_SNC-09** – Hier sind die Leistungszusagen des technischen Supports des Dienstleisters für Serviceanfragen:

|                         | Garantie der Interventionszeit (GTI) | Leistungsziel        |
| ----------------------- | ------------------------------------ | ----------------------|
| Serviceanfrage          | 4 Std                                 | 90%                  |

*Hinweis:*

- *Die Garantie der Interventionszeit (GTI) wird ab dem Zeitpunkt berechnet, an dem der AUFTRAGGEBER das Ticket öffnet, bis zur ersten Intervention des Dienstleistersupports.*
- *Die Untersuchung von Vorfällen bezüglich der AUFTRAGGEBER umfasst keine Fernwartung von gehosteten Servern des AUFTRAGGEBER. Diese Unterstützung beschränkt sich auf die Erklärung der verfügbaren Metriken in Bezug auf die Umgebung des AUFTRAGGEBER, um das Verständnis der aufgetretenen Vorfälle oder Leistungsprobleme zu erleichtern. Auf der Grundlage der Ergebnisse dieser Analyse können Empfehlungen vorgeschlagen werden.*

## 8.4. Verfügbarkeitsverpflichtung des S3 Objektspeichers

- **SLA 10 : IC-INFRA_SNC-10** – Hier sind die Verfügbarkeitsverpflichtungen für den S3 Objektspeicher:

| Indikator             | Verpflichtung                                     | Verfügbarkeitsziel      |
| --------------------  | ------------------------------------------------ | ------------------------|
| IC-INFRA-SNC-10.1     | Haltbarkeit der Speicherung eines Objekts in einer Region | 99.9999999% / Jahr      |
| IC-INFRA-SNC-10.2     | Verfügbarkeit der S3 Objektspeicher-API       | 99.99%                  |
| IC-INFRA-SNC-10.3     | Maximale Zugriffsverzögerung auf ein Objekt in einer Region | 150 ms                     |

Hinweise:

- Der Objektspeicherdienst ist speziell für die Objektspeicherung konzipiert und sollte ausschließlich zu diesem Zweck verwendet werden, **insbesondere ist die Nutzung im Blockmodus ausgeschlossen**. Die Nutzung im Blockmodus durch Umgehungsmethoden, einschließlich der Verwendung von *„FUSE“ in einer Linux-Umgebung*, stellt einen Verstoß gegen die angegebenen Nutzungsbedingungen dar. Keine Vorfälle, Fehlfunktionen oder Schäden, die aus dieser nicht konformen Nutzung resultieren, werden durch die in dieser Dienstleistungsvereinbarung definierten Service Level Agreements (SLA) abgedeckt.
- Die Garantie der Haltbarkeit ist an die konforme Nutzung der Dienste gemäß den besten aktuellen Praktiken und Standards gebunden und schließt ausdrücklich alle Modifikationen der Daten aus, ob absichtlich oder versehentlich, die aus Handlungen des AUFTRAGGEBER resultieren.

## 8.5. Präzisierung der Sicherungsverpflichtung

Die für den AUFTRAGGEBER eingesetzte Sicherungsstrategie hängt vom Abonnement der entsprechenden Arbeitseinheiten ab.

Der Dienstleister verpflichtet sich, eine Sicherungslösung bereitzustellen, die es dem AUFTRAGGEBER ermöglicht, die gewünschten Sicherungspolitiken anzuwenden.

Es wird darauf hingewiesen, dass der Geltungsbereich des Dienstleisters auf die Bereitstellung eines Sicherungsdienstes beschränkt ist und es am AUFTRAGGEBER liegt, die ordnungsgemäße Ausführung der zugehörigen Politiken über die AUFTRAGGEBER-Schnittstelle zu überwachen.

Es wird darauf hingewiesen, dass das Management der Speicherkapazität des für Sicherungen reservierten Speichers dem AUFTRAGGEBER obliegt und in seiner Verantwortung liegt. Der Dienstleister stellt die Nutzungsrate über die Konsole bereit.

*Beispiel: Nicht-Sicherung einer virtuellen Maschine:*

*Der AUFTRAGGEBER ist dafür verantwortlich, die ordnungsgemäße Ausführung der Sicherungspolitiken zu überprüfen/überwachen. Wenn der AUFTRAGGEBER feststellt, dass eine virtuelle Maschine nicht gesichert wird, muss er die Ursache überprüfen. Der AUFTRAGGEBER kann den Support des Dienstleisters gemäß dem abonnierten Support-Level um Unterstützung bitten.*

**SLA 8 : IC-INFRA_SNC-08 und SLA 9**, sind ausschließlich im Falle eines Vorfalls des Sicherungsdienstes anwendbar.

# 9. Organisation der Vertragsbeziehung

## 9.1. Verantwortlichkeiten des Dienstleisters

Der Dienstleister verpflichtet sich:

- seinen AUFTRAGGEBER angemessen zu informieren (z.B. im Fall von Kapazitätsgrenzen der technischen Ressourcen, die den Dienst bereitstellen).

- den AUFTRAGGEBER formell und innerhalb eines Monats über jede juristische, organisatorische oder technische Änderung zu informieren, die Auswirkungen auf die Konformität des Dienstes mit den Anforderungen des Schutzes vor außer-europäischen Gesetzen haben kann (19.6 des SNC v3.2 Referenzmodells).

- dem AUFTRAGGEBER mindestens französischsprachige Schnittstellen und Schnittstellen für Dienstleistungen zur Verfügung zu stellen.

- spezifische sektorale Anforderungen im Zusammenhang mit den Arten von Informationen, die der AUFTRAGGEBER im Rahmen der Implementierung des Dienstes übermittelt, zu prüfen und zu berücksichtigen, soweit dies im Verantwortungsbereich des Dienstleisters liegt.

- keine Informationen über die Leistung an Dritte weiterzugeben, es sei denn, es liegt eine formelle und schriftliche Genehmigung des AUFTRAGGEBER vor.

- alle notwendigen Informationen zur Durchführung von Konformitätsprüfungen gemäß den Bestimmungen des Artikels 28 der DSGVO zur Verfügung zu stellen.

- den AUFTRAGGEBER im Rahmen dieser Dienstleistungsvereinbarung über alle Sicherheitsvorfälle zu informieren, die den Dienst oder die Nutzung des Dienstes durch den AUFTRAGGEBER betreffen (einschließlich der Daten des AUFTRAGGEBER).

- einem qualifizierten Anbieter von IT-Sicherheitsaudits (PASSI), der vom Dienstleister beauftragt wird, zu gestatten, sowohl den Dienst als auch dessen Informationssystem zu prüfen, gemäß dem Kontrollplan des SecNumCloud des Dienstleisters. Darüber hinaus verpflichtet sich der Dienstleister, alle notwendigen Informationen zur Verfügung zu stellen, um die Konformitätsprüfungen gemäß den Bestimmungen des Artikels 28 der DSGVO, die vom Auftraggeber oder einem beauftragten Dritten durchgeführt werden, erfolgreich durchzuführen.

- im Rahmen seiner Tätigkeit als Auftragsverarbeiter gemäß Artikel 28 der Datenschutzgrundverordnung (DSGVO) Unterstützung und Beratung an den AUFTRAGGEBER zu leisten, indem er diesen benachrichtigt, sobald eine von ihm erteilte Anweisung voraussichtlich gegen die Datenschutzbestimmungen verstößt.

- den AUFTRAGGEBER schriftlich zu benachrichtigen, sobald ein Projekt Auswirkungen auf die Sicherheit des Dienstes hat oder haben kann, die potenziellen Auswirkungen sowie die ergriffenen Maßnahmen zur Risikominderung und die verbleibenden Restrisiken.

- sämtliche erforderlichen Verfahren zu dokumentieren und umzusetzen, um die gesetzlichen, regulatorischen und vertraglichen Anforderungen des Dienstes sowie die spezifischen Sicherheitsanforderungen des AUFTRAGGEBER, die von diesem definiert und im Vertrag festgelegt sind, zu erfüllen. Auf Anfrage des AUFTRAGGEBER wird das Modul "Dokumentation" der AUFTRAGGEBER-Schnittstelle einen sicheren Austausch dieser Dokumente ermöglichen.

- dem AUFTRAGGEBER auf dessen Anfrage hin Beurteilungselemente zu den Risiken bezüglich der Unterwerfung der Daten des AUFTRAGGEBER unter die Rechtsordnung eines Nicht-EU-Staates zur Verfügung zu stellen.

Auf formelle und schriftliche Anfrage des AUFTRAGGEBER verpflichtet sich der Dienstleister:

1. dem AUFTRAGGEBER die interne Geschäftsordnung und den Ethikkodex des Dienstleisters zugänglich zu machen.

2. dem AUFTRAGGEBER die Sanktionen im Falle eines Verstoßes gegen die Sicherheitspolitik zugänglich zu machen.

3. dem AUFTRAGGEBER alle ihn betreffenden Ereignisse in den Protokollierungsdaten des Dienstes bereitzustellen.

4. Am Ende des Vertrages verpflichtet sich der Dienstleister, die Daten und technischen Daten des AUFTRAGGEBER gemäß dem in dieser Dienstleistungsvereinbarung beschriebenen "Datenlöschungsverfahren am Ende des Vertrages" zu löschen.

5. eine sichere Löschung sämtlicher Daten des AUFTRAGGEBER durch vollständiges Überschreiben aller Datenträger, auf denen seine Daten im Rahmen des Dienstes gespeichert waren, zu gewährleisten.

6. die vollständige Liste der Dritten zur Verfügung zu stellen, die befugt sind, Zugang zu den Datenhaltungsinfrastrukturen zu erhalten.


Der Anbieter wird eine aktuelle und vollständige Liste der Dritten führen, die berechtigt sind, auf die die Daten tragenden Infrastrukturen zuzugreifen, und den AUFTRAGGEBER über jede Änderung bezüglich der Unterauftragsverarbeiter informieren. Der Anbieter und alle seine Tochtergesellschaften verpflichten sich, die grundlegenden Werte der Europäischen Union zu achten, und zwar die Menschenwürde, die Freiheit, die Demokratie, die Gleichheit, die Rechtsstaatlichkeit sowie die Achtung der Menschenrechte. Der vom Anbieter erbrachte Dienst entspricht der geltenden Gesetzgebung in Bezug auf Grundrechte und den Werten der Europäischen Union bezüglich der Achtung der Menschenwürde, der Freiheit, der Gleichheit, der Demokratie und der Rechtsstaatlichkeit.

## 9.2. Haftungsbeschränkungen des Anbieters

Aufgrund aller in dieser Dienstleistungsvereinbarung genannten Definitionen und Bedingungen sind die Haftungen des Anbieters wie folgt beschränkt:

1. Das in der Sektion „Modell der geteilten Verantwortlichkeiten“ dieser Dienstleistungsvereinbarung beschriebene geteilte Verantwortungsmodell beschränkt die Beteiligung des Anbieters auf die Bereitstellung von Rechner-, Netzwerk-, Speicher- und Sicherungsressourcen. Dies schließt insbesondere, aber nicht ausschließlich, aus:

    - Die Verwaltung dessen, was auf den virtuellen Maschinen installiert ist (OS, Middleware, Anwendungen, etc.);

    - Das Aktualisieren der vom AUFTRAGGEBER auf seinen Maschinen in seinen Tenants installierten Betriebssysteme und anderer Software;

    - Die Sicherheit der auf den virtuellen Maschinen installierten Programme, Software und Anwendungen;

    - Die Aktualisierung der virtuellen Maschinen;

    - Die Sicherung von Anwendungsdaten.

2. Der Anbieter kann keine Verpflichtungen zur Sicherung der Tenants des AUFTRAGGEBERS übernehmen, ohne dass der AUFTRAGGEBER zuvor die entsprechenden Leistungsblöcke abonniert hat.

3. Der Anbieter kann nicht Eigentum an den vom AUFTRAGGEBER übermittelten und generierten Daten beanspruchen. Diese Daten bleiben im Eigentum des AUFTRAGGEBERS.

4. Der Anbieter betont, dass er die vom AUFTRAGGEBER übermittelten und generierten Daten in keinem Fall ohne vorherige Zustimmung des AUFTRAGGEBERS verwerten darf.

5. Der Anbieter lehnt jede Verantwortung für die physisch vom Anbieter gehosteten und verwalteten, aber direkt im Eigentum des AUFTRAGGEBERS oder eines Drittanbieters stehenden Komponenten ab, mit dem der AUFTRAGGEBER vertragliche Verpflichtungen eingegangen ist. Das Hosting physischer Komponenten der Kunden gehört nicht zum Service und liegt daher außerhalb des Geltungsbereichs dieser Dienstleistungsvereinbarung. Es obliegt dem AUFTRAGGEBER, das Maß an Abhängigkeit oder Abhängigkeit zu bewerten, das diese Komponenten gegenüber dem als SecNumCloud qualifizierten IaaS-Service einführen.

## 9.3. Zugangsbeschränkung

Im Rahmen des Dienstes ist dem Anbieter der Zugang zu den Tenants des AUFTRAGGEBERS ohne vorherige Genehmigung ausdrücklich untersagt. Es liegt in der Verantwortung des AUFTRAGGEBERS, dem Personal des Anbieters den spezifischen Erfordernissen des Hostings entsprechend Zugang zu gewähren und gegebenenfalls die Option für professionelle Unterstützungsdienste zu wählen.

Der AUFTRAGGEBER erkennt an, dass diese Zugänge ausschließlich für die mit der Erbringung der vereinbarten Dienstleistungen verbundenen Anforderungen gewährt werden, um so ein sicheres und den Vertragsbedingungen entsprechendes Management zu gewährleisten.

Der Fernzugriff von Dritten, die an der Leistungserbringung des Anbieters beteiligt sind, ist strengstens untersagt. Sollte eine spezifische technische Anforderung einen solchen Zugriff erfordern, darf dieser erst nach einer klaren Benachrichtigung des AUFTRAGGEBERS, einer detaillierten Begründung und der schriftlichen Zustimmung des AUFTRAGGEBERS erfolgen.

Diese Maßnahme gewährleistet die Kontrolle und Sicherheit der Daten des AUFTRAGGEBERS, indem sichergestellt wird, dass jede Ausnahme von der Regel ordnungsgemäß genehmigt und dokumentiert ist.

## 9.4. Verantwortlichkeiten der am Dienst Secure Temple beteiligten Dritten

Der Anbieter verwaltet die Liste der Partnerdritten, die an der Erbringung des Dienstes beteiligt sind. Diese Dritten sind die Herausgeber, Dienstleister (des Anbieters) und andere Lieferanten, die an der Erbringung des Dienstes beteiligt sind. Der Anbieter wendet die folgenden Maßnahmen auf diese Dritten an:

- Der Anbieter verlangt von den Dritten, die an der Implementierung des Dienstes beteiligt sind, ein Sicherheitsniveau, das mindestens dem entspricht, dem er sich selbst in seiner für den Dienst Secure Temple geltenden Sicherheitspolitik verpflichtet hat;

- Der Anbieter schließt mit jedem der an der Implementierung des Dienstes beteiligten Dritten Verträge ab, die Auditklauseln enthalten, die es einer Qualifizierungsstelle ermöglichen, zu überprüfen, ob diese Dritten die gesetzlichen Anforderungen und die SNC-Anforderungen einhalten, sodass der Anbieter seine Verpflichtungen aus dieser Dienstleistungsvereinbarung erfüllen kann;

- Der Anbieter implementiert ein Verfahren zur regelmäßigen Überprüfung der Maßnahmen, die von den an der Implementierung des Dienstes beteiligten Dritten umgesetzt wurden, um die Einhaltung der Anforderungen des Anbieters zu gewährleisten und seine Verpflichtungen aus dieser Dienstleistungsvereinbarung zu erfüllen;

- Der Anbieter implementiert ein Verfahren zur Überwachung von Änderungen, die von den an der Implementierung des Dienstes beteiligten Dritten vorgenommen werden und die das Sicherheitsniveau des Informationssystems des Dienstes beeinflussen könnten.

## 9.5. Verantwortlichkeiten und Verpflichtungen des AUFTRAGGEBERS

Zur Erinnerung: Der Anbieter stellt dem AUFTRAGGEBER eine Plattform zur Ausführung virtueller Maschinen zur Verfügung. Die Konfiguration dieser Maschinen liegt in der Verantwortung des AUFTRAGGEBERS. Jede virtuelle Maschine kann nicht ohne eine zugehörige Sicherungsrichtlinie betrieben werden. Der Anbieter definiert über seine Schnittstellen automatische Sicherungsrichtlinien. Es liegt jedoch in der Verantwortung des AUFTRAGGEBERS, diese Sicherungsrichtlinien zu aktivieren und somit die virtuellen Maschinen zu aktivieren.

Der AUFTRAGGEBER ermächtigt die ANSSI und die Qualifizierungsstelle SNC, den Dienst und die technische Infrastruktur des Dienstes zu auditieren.

## 9.6. Rechte des AUFTRAGGEBERS

Der AUFTRAGGEBER kann jederzeit während der Vertragsbeziehung eine Beschwerde bezüglich des qualifizierten Dienstes bei der ANSSI einreichen.

Der AUFTRAGGEBER kann jederzeit den Anbieter auffordern, ihm die interne Geschäftsordnung und die Ethikrichtlinien zugänglich zu machen.

## 9.7. Datenlöschung am Ende des Vertrags

Nach Ablauf des Vertrags, sei es, dass er ausläuft oder aus irgendeinem Grund gekündigt wird, verpflichtet sich der Anbieter, alle Daten des AUFTRAGGEBERS, einschließlich technischer Daten, sicher zu löschen. Der Anbieter wird dem AUFTRAGGEBER eine formelle Benachrichtigung mit einer Frist von einundzwanzig (21) Kalendertagen übermitteln. Die Daten des AUFTRAGGEBERS werden dann innerhalb von maximal dreißig (30) Tagen nach dieser Benachrichtigung gelöscht.

Um diese Löschung zu belegen, wird der Anbieter dem AUFTRAGGEBER ein Zertifikat über die Datenlöschung ausstellen.

# 10. Lebenszyklus dieser Dienstleistungsvereinbarung

## 10.1. Inkrafttreten der Dienstleistungsvereinbarung

Diese Dienstleistungsvereinbarung tritt am Tag ihrer Unterzeichnung durch den AUFTRAGGEBER in Kraft.

Die Erhebung, Verarbeitung, Speicherung und Bearbeitung der Daten, die im Rahmen des Vorsorge-, Implementierungs- und Stilllegungsdienstes durchgeführt werden, erfolgt in Übereinstimmung mit den geltenden Gesetzen.

## 10.2. Weiterentwicklungen der Dienstleistungsvereinbarung

Änderungen oder Ergänzungen dieser Dienstleistungsvereinbarung erfolgen ausschließlich aufgrund von Anfragen der dafür bestimmten Governance-Organe. Diese Änderungsvorschläge werden von den Parteien geprüft, die berechtigt sind, die Aspekte zu bestimmen, die eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede Weiterentwicklung der Dienstleistungsvereinbarung, nach Validierung, die die ursprünglich festgelegten finanziellen Bedingungen ändert, die Erstellung und Unterzeichnung eines Zusatzvertrags zum laufenden Vertrag erfordert.

Faktoren, die zu einer Überarbeitung dieser Dienstleistungsvereinbarung führen können, sind unter anderem:

- Die Weiterentwicklung der technischen Infrastruktur, die den IaaS-Dienst bereitstellt;

- Die Anpassungen der vom Anbieter bereitgestellten Dienste;

- Die Änderungen der eingegangenen Verpflichtungen und der geltenden Sanktionen;

- Die organisatorischen Umstrukturierungen innerhalb des AUFTRAGGEBERS oder des Anbieters;

- Die Erweiterung oder Reduzierung des Geltungsbereichs des Dienstes.

Die Verwaltung der Versionen und Überarbeitungen der Dienstleistungsvereinbarung wird im Präambel des Dokuments festgehalten, um die Nachverfolgbarkeit zu erleichtern.

### 10.2.1. Weiterentwicklungen initiiert durch den AUFTRAGGEBER

Die Weiterentwicklungen der Dienstleistungsvereinbarung können insbesondere auf Folgendes zurückzuführen sein:

- Eine Weiterentwicklung der vom Anbieter verwalteten Infrastruktur;

- Eine Änderung der vom Anbieter implementierten Dienste;

- Eine Änderung der Dienstleistungsgrade, die vom Anbieter eingehalten werden.

### 10.2.2. Weiterentwicklungen initiiert durch den Anbieter

Jede Änderung der Dienstleistungsvereinbarung bedarf der Zustimmung des AUFTRAGGEBERS. Es wird verstanden, dass jede genehmigte Änderung oder Ergänzung, die die finanziellen Elemente des Vertrags ändert, die Unterzeichnung eines Zusatzvertrags erforderlich machen kann.

## 10.3. Reversibilität

Darüber hinaus verpflichtet sich Cloud Temple, die Überprüfung dieser Dienstleistungsvereinbarung (insbesondere deren Kündigung) ohne Strafe für den AUFTRAGGEBER im Falle eines Verlusts der SecNumCloud-Qualifizierung zu ermöglichen.
Les Services ne comprennent pas d'obligation de réversibilité (à savoir, l'aide au Client pour qu'il puisse migrer son système vers un autre" Prestataire) à l'exception de la mise à disposition du COMMANDITAIRE par le Prestataire de l'interface COMMANDITAIRE permettant au COMMANDITAIRE de sauvegarder et récupérer ses données y compris notamment les données de configuration de leur système d'information via l'une des modalités techniques suivantes au choix du COMMANDITAIRE : la mise à disposition de fichiers suivant un ou plusieurs formats documentés et exploitables en dehors du service fourni par le Prestataire ou bien via la mise en place d'interfaces techniques permettant l'accès aux données suivant un schéma documenté et exploitable (API).

Le COMMANDITAIRE, seul maître de son système, doit tout mettre en œuvre pour faciliter cette opération en tant que de besoin (ce qui implique, notamment, qu'il mette en place une documentation rigoureuse à cet effet) et l'élaboration de plans de réversibilité. Dans le cas où le COMMANDITAIRE aurait besoin d'une prestation complémentaire, le
Prestataire peut proposer une mission de conseil à cet égard dans le cadre d'un contrat spécifique à négocier.

# 11. Disponibilité, continuité et restauration du service

## 11.1. Gestion des incidents et des interruptions

### 11.1.1. Incidents

#### 11.1.1.1. Types d'incidents traités dans le cadre de cette convention de service

- Schäden

- Ausfälle und Störungen

- Sicherheitsvorfälle:

- Auswirkungen auf die Verfügbarkeit des Dienstes

- Auswirkungen auf die Vertraulichkeit des Dienstes

- Auswirkungen auf die Integrität des Dienstes

#### 11.1.1.2. Behandlung der Vorfälle

- Verzögerungen

- Nachträgliche Maßnahmen

- Archivieren Sie die Dokumente, die die Sicherheitsvorfälle detaillieren.

- Meldung von Verletzungen personenbezogener Daten [online](<https://notifications.cnil.fr/notifications/index>)

#### 11.1.1.3. Meldungsniveau der Sicherheitsvorfälle

Der COMMANDITAIRE hat die Verantwortung, die Schweregrade der Sicherheitsvorfälle zu wählen, über die er informiert werden möchte, beispielsweise durch ihre Formalisierung in einem PAS, das auf den Dienst zutrifft.

Standardmäßig wird der COMMANDITAIRE informiert über:

- Sicherheitsvorfälle mit Auswirkungen (Auswirkungen I1 und I2 gemäß der im Priorisierungsprozess dieser Dienstvereinbarung definierten Einflussmaßstabes);

- Verletzungen personenbezogener Daten, für die der COMMANDITAIRE verantwortlich ist;

- Verletzungen personenbezogener Daten, für die der Prestataire verantwortlich ist und die personenbezogene Daten des COMMANDITAIRE enthalten.

## 11.2. Wartung des Dienstes

### 11.2.1. Art der Wartung

Die gewährte Wartung besteht in der Implementierung:

- Des Plans zur Aufrechterhaltung der Betriebsbereitschaft des Dienstes, um gute Verfügbarkeitsindikatoren sicherzustellen, wie weiter oben vom Prestataire zugesagt;

- Des ggf. vom COMMANDITAIRE abonnierten PCA/PRA-Plans, der bei Auftreten eventueller Vorfälle ausgelöst wird.

### 11.2.2. Fernzugriff von Cloud Temple auf den Bereich des COMMANDITAIRE

Der Prestataire verzichtet im Rahmen dieser Dienstvereinbarung auf jeglichen Zugriff auf die Tenants und die Schnittstellenoberfläche des COMMANDITAIRE.

Es obliegt dem COMMANDITAIRE, dem Personal des Prestataire die notwendigen Zugriffe zu gewähren. Der COMMANDITAIRE erkennt an, dass die Zugriffe im Rahmen des Hostings und schließlich des Managementservices (falls vom COMMANDITAIRE abonniert) genutzt werden.

### 11.2.3. Fernzugriff Dritter, die an der Bereitstellung des Dienstes im Bereich des COMMANDITAIRE beteiligt sind

Es ist kein Fernzugriff Dritter, die an der Bereitstellung des Dienstes beteiligt sind, erlaubt.

Sollte ein technischer Bedarf diesen Fall erforderlich machen, würde dieser Zugriff erst nach Benachrichtigung des COMMANDITAIRE und Erhalt seiner schriftlichen Zustimmung gewährt.

# 12. Verfahren zur Datenlöschung am Vertragsende

Am Ende des Vertrags, sei es durch Beendigung oder aus einem anderen Grund, wird der Prestataire die sichere Löschung aller im Rahmen des Dienstes verarbeiteten Daten, einschließlich der technischen Daten des COMMANDITAIRE, gewährleisten. Der Prestataire gibt eine formelle Vorankündigung unter Einhaltung einer Frist von einundzwanzig (21) Kalendertagen. Die Daten des COMMANDITAIRE werden innerhalb eines maximalen Zeitraums von dreißig (30) Tagen nach der Benachrichtigung gelöscht. Der Prestataire stellt dem COMMANDITAIRE ein Löschungszertifikat zur Verfügung.

# 13. Anwendbares Recht

## 13.1. Allgemein

Das auf diese Dienstvereinbarung anwendbare Recht ist das französische Recht.

## 13.2. Einhaltung des geltenden Rechts und der geltenden Vorschriften

Der Prestataire verpflichtet sich zu Folgendem:

- Identifikation der im Rahmen des Dienstes geltenden gesetzlichen und regulatorischen Anforderungen;

- Einhaltung der gesetzlichen und regulatorischen Anforderungen in Bezug auf die dem Prestataire anvertrauten Daten;

- Einhaltung des Datenschutzgesetzes und der DSGVO;

- Implementierung von Maßnahmen zum Schutz personenbezogener Daten;

- Implementierung eines rechtlichen und regulatorischen Überwachungsprozesses;

- Aufrechtzuerhalten angemessene Beziehungen oder Überwachung mit den sektoriellen Behörden im Zusammenhang mit der Art der im Rahmen des Dienstes verarbeiteten Daten. Dies umfasst insbesondere die ANSSI, das CERT-FR und die CNIL.

## 13.3. DSGVO

Als Auftragsverarbeiter im Sinne von Artikel 28 der Datenschutz-Grundverordnung (DSGVO) verpflichtet sich der Prestataire:

- Transparenz und Nachverfolgbarkeit sicherzustellen;

- Einen DPO zu benennen, der für die Festlegung und Implementierung von Maßnahmen zum Schutz personenbezogener Daten verantwortlich ist;

- Dem COMMANDITAIRE Unterstützung und Beratung zu bieten, ihn zu warnen, wenn eine Anweisung seinerseits eine Verletzung der Datenschutzvorschriften darstellt, falls der Prestataire in der Lage ist, dies zu erkennen;

- Eine Sicherheitsgarantie für die verarbeiteten Daten (aufgrund der SecNumCloud-Qualifikation).

## 13.4. Schutz im Hinblick auf außereuropäisches Recht

Im Falle des Rückgriffs des Prestataire auf den Dienst eines Drittunternehmens im Rahmen des Dienstes - einschließlich eines Unterauftragsverarbeiters - mit statutarischem Sitz, Hauptverwaltung oder Hauptniederlassung in einem Nicht-EU-Staat oder im Besitz oder kontrolliert von einem Drittunternehmen mit Sitz außerhalb der EU verpflichtet sich der Prestataire, dass dieses Drittunternehmen keinen Zugang zu den vom Service „Secure Temple“ betriebenen Daten erhält.

Zur Erinnerung: Die betroffenen Daten sind die dem Prestataire vom COMMANDITAIRE anvertrauten Daten sowie alle technischen Daten, die Informationen über die COMMANDITAIRES enthalten.

Zum Zweck dieses Artikels wird der Begriff der Kontrolle im Sinne von Artikel L233-3 Absatz II des Handelsgesetzbuchs verstanden.

# 14. UNTERSCHRIFTEN

Gefertigt zu \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, am
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Für Cloud Temple, der PRESTATAIRE

Für \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, der COMMANDITAIRE