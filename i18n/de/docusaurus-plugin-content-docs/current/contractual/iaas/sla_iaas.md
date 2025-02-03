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

Le présent document formalise la Convention de service associée au service IaaS qualifiée SecNumCloud sous l'appellation de « *Secure Temple*».

\"La présente convention de service complète et est complémentaire aux conditions générales de vente et d'utilisation du Prestataire. Il est
entendu que les documents contractuels s'interprètent de manière cohérente entre eux. En cas de contradiction ou de divergence entre les
termes des documents contractuels, les documents prévaudront les uns sur les autres dans l'ordre suivant :

1. Conditions Générales de Vente et Utilisation (CGVU)
2. Convention de Service SecNumCloud IaaS
3. Convention de Service SecNumCloud PaaS
4. Convention spécifique particulière
5. Plan d'Assurance Sécurité (PAS)
6. Conditions Particulières d'Utilisation (CPU)

## 3.2. Glossaire

Dans la présente Convention de service, le **COMMANDITAIRE**, le **Prestataire** et les **Parties** sont identifiés dans le Contrat
auquel est annexe la présente Convention de service.

Les expressions ci-après employées dans la présente Convention de service seront interprétées conformément aux définitions qui leur sont
attribuées ci-dessous :

- **Changement :** Tout ajout, une modification ou suppression impactant le Service, ayant été autorisé, planifié ou pris en charge.
- **Standardänderung:** Eine Änderung, die einem Verfahren unterliegt, dessen Produktionsmodalitäten und Auswirkungen (einschließlich finanzieller) im Voraus von den Parteien bekannt und akzeptiert wurden. Sie wird dann in den Katalog der Standardänderungen aufgenommen und kann je nach Fall eine GTI und eine GTR haben.

- **Vertrag:** bezeichnet den Vertrag, den der AUFTRAGGEBER beim Dienstanbieter abgeschlossen hat, um dem AUFTRAGGEBER die Nutzung des Dienstes zu ermöglichen, und der dieser Servicevereinbarung beigefügt ist.

- ***Servicevereinbarung:** Dieses Dokument wird im Rahmen eines spezifischen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (AGB) erstellt und entspricht den Anforderungen des SecNumCloud-Standards.

- **Serviceanfrage:** Anfrage des AUFTRAGGEBERS an den Dienstanbieter im Rahmen des Dienstes, die Vorgänge umfasst, die vom AUFTRAGGEBER über die AUFTRAGGEBER-Schnittstelle nicht durchgeführt werden können, sowie Supportanfragen im Rahmen des Dienstes. Serviceanfragen sind auf die im Vertrag oder in dieser Servicevereinbarung vorgesehenen Anfragen beschränkt.

- **Verfügbarkeit:** Fähigkeit, die Verfügbarkeit und die Aufrechterhaltung der optimalen Leistung des Dienstes sicherzustellen, in Übereinstimmung mit den in den Service Level Agreements (SLA) festgelegten Kriterien und Verpflichtungen.

- **Technische Daten:** umfasst alle Daten, die zur Bereitstellung des Dienstes verarbeitet werden, insbesondere die Identität der Begünstigten und Administratoren der technischen Infrastruktur, die Protokolle der technischen Infrastruktur, Zugangskonfigurationen, Verzeichnis, Zertifikate usw.

- **Ereignis:** Ein „Ereignis“ ist jedes feststellbare oder identifizierbare Vorkommnis, das für das Management des Dienstes von Bedeutung sein könnte.

- **Hypervisor:** Betriebssystem, das die Ausführung virtueller Maschinen auf einer Recheneinheit ermöglicht.

- **Vorfall:** Jedes unvorhergesehene Ereignis, das den normalen Betrieb des Dienstes stört oder die Datensicherheit gefährdet.

- **Sicherheitsvorfall:** Jedes Ereignis im Rahmen des Dienstes:

  - Von absichtlich bösartiger Natur;
  - Von unbeabsichtigter Natur, das die Integrität, Vertraulichkeit oder Nachvollziehbarkeit des Dienstes oder der Daten des AUFTRAGGEBERS beeinträchtigt;
  - Das die bestehenden Sicherheitsmaßnahmen beeinträchtigt.
    Nicht bösartige Beeinträchtigungen der Verfügbarkeit werden nicht als Sicherheitsvorfall betrachtet (Hardware-Ausfall, Fehler, Fehlfunktion, Naturkatastrophe usw.).

- **AUFTRAGGEBER-Schnittstelle:** Verwaltungsschnittstelle des Dienstes, die dem AUFTRAGGEBER vom Dienstanbieter zur Verfügung gestellt wird und eine Web-Administrationskonsole und eine API umfasst.

- **Produktionsbereitstellung:** Verwaltungsaktion(en) zur Umsetzung der Änderung, wenn diese genehmigt ist (die Änderung im Sinne von ITIL betrifft nur das Änderungsmanagement und nicht deren Durchführung).

- **Problem:** Ursache eines oder mehrerer wiederkehrender Vorfälle, Ursache eines potenziellen Vorfalls (Risikosituation).

- **Region:** bezeichnet einen geografisch abgegrenzten Bereich von Cloud-Verfügbarkeitszonen, der Netzwerk-, Rechen- und Speicherressourcen bereitstellt, um Latenz, Leistung und lokale regulatorische Anforderungen zu optimieren.

- **Dienst:** bezeichnet den qualifizierten IaaS-Dienst SecNumCloud „Secure Temple“, der dem AUFTRAGGEBER vom Dienstanbieter aus von diesem verwalteten technischen Infrastrukturen bereitgestellt wird, wie in der Rubrik „Dienstbeschreibung“ dieser Servicevereinbarung beschrieben.

- **Secure Temple:** bezeichnet den von Cloud Temple angebotenen und nach SecNumCloud qualifizierten IaaS-Dienst, wie in der Bescheinigung definiert, die auf der Website der ANSSI einsehbar und dieser Servicevereinbarung beigefügt ist.

- **Schaden:** bezeichnet ein schwerwiegendes Ereignis natürlichen oder menschlichen, unbeabsichtigten oder absichtlichen Ursprungs, das der betroffenen Partei erhebliche Verluste und Schäden zufügt.

- **Überwachung:** Überwachung eines Informationssystems oder eines Dienstes, einschließlich der Erfassung verschiedener Daten wie Messwerte und Alarme. Diese Aktivität beschränkt sich auf die Beobachtung und Verfolgung, ohne direkt auf die überwachten Elemente einzugreifen, eine das Management betreffende Befugnis, die den Verwaltungsvorgängen vorbehalten ist.

- **Mandant:** Eine isolierte Instanz, die für einen Benutzer oder eine Benutzergruppe reserviert ist, die eine gemeinsame Infrastruktur nutzen und dabei die Unabhängigkeit und Sicherheit der Daten und Anwendungen bewahren.

- **Verfügbarkeitszone (AZ) (Availibility zone):** Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der darauf ausgelegt ist, durch geografische Verteilung der Ressourcen eine hohe Verfügbarkeit und Widerstandsfähigkeit der Dienste zu gewährleisten.

# 4. Akronyme

  | **Akronym** | **Definition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Beratendes Gremium für Änderungen                              |
  | **CMDB**     | Configuration Management Database -- Konfigurationsverwaltungsdatenbank                 |
  | **COPIL**    | Lenkungsausschuss                                                                       |
  | **COSTRAT**  | Strategisches Komitee                                                                   |
  | **COPROJ**   | Projektausschuss                                                                        |
  | **DB**       | Database (Datenbank)                                                                    |
  | **DRP**      | Disaster Recovery Plan (Wiederherstellungsplan)                                         |
  | **GTE**      | Garantie der Eskalationszeit                                                            |
  | **GTI**      | Garantie der Eingriffszeit                                                              |
  | **GTR**      | Garantie der Wiederherstellungszeit                                                     |
  | **ITIL**     | Information Technology Infrastructure Library - Best Practices für IT-Management         |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Betriebssicherung                                                                       |
  | **MOA**      | Projektsteuerungskontrolle                                                              |
  | **MOE**      | Projektdurchführungssteuerung                                                           |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating System (Betriebssystem)                                                       |
  | **PAQ**      | Qualitätsmanagementplan                                                                 |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Sicherheitsmanagementplan                                                               |
  | **PASSI**    | Anbieter von Sicherheitsprüfungen für Informationssystemen                              |
  | **RFC**      | Request For Change -- Änderungsanforderung                                              |
  | **RGPD**     | Datenschutz-Grundverordnung (DSGVO)                                                     |
  | **RPO**      | Recovery Point Objective -- Zeitrahmen für wiederhergestellte Daten im Schadensfall     |
  | **RTO**      | Recovery Time Objective -- Wiederherstellungszeit für den Dienst im Schadensfall        |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Service Level Vereinbarung                                   |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Third-Party Application Maintenance                                                     |
  | **UO**       | Leistungseinheit                                                                        |
  | **VABE**     | Validierung der Eignung für den ordnungsgemäßen Betrieb                                 |
  | **VABF**     | Validierung der Eignung für die ordnungsgemäße Funktion                                 |
  | **VM**       | Virtual Machine (Virtuelle Maschine)                                                    |
  | **VSR**      | Regelmäßige Service-Validierung                                                         |

# 5. Zweck dieser Servicevereinbarung

Diese Servicevereinbarung legt die Bedingungen fest, unter denen sich der Dienstanbieter verpflichtet, dem AUFTRAGGEBER den Dienst zu erbringen. Ihr Zweck ist es:

- Die vom AUFTRAGGEBER erwarteten Leistungsanforderungen an Funktionalität und Zuverlässigkeit des Dienstes zu präzisieren;

- Die Verpflichtungen des Dienstanbieters festzulegen, um die vereinbarten Servicelevel zu erfüllen;

- Die auf den spezifisch erbrachten Dienst anwendbaren gesetzlichen Normen zu identifizieren;

- Eine Einheitlichkeit und Integrität in der Bewertung der Servicequalität sicherzustellen;

- Die Exzellenz der erbrachten Dienstleistungen zu gewährleisten, gemessen anhand quantitativer Leistungsindikatoren.

Es wird festgelegt, dass der Vertrag im Falle einer Rücknahme der SecNumCloud-Qualifikation des Dienstanbieters automatisch und ohne Vertragsstrafe vom AUFTRAGGEBER gekündigt werden kann. In einem solchen Fall verpflichtet sich der Dienstanbieter, den AUFTRAGGEBER über diese Deklassifizierung durch Zusendung einer offiziellen Benachrichtigung per Einschreiben mit Rückschein zu informieren.
Il sei darauf hingewiesen, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Widerruf der ursprünglichen Qualifikation interpretiert wird.

# 6. Audit

Der Dienstleister verpflichtet sich, dem AUFTRAGGEBER oder jedem vom Dienstleister benannten, nicht konkurrierenden Dritten-Revisor den Zugang zu sämtlichen notwendigen Unterlagen zu gewähren, die erforderlich sind, um die vollständige Einhaltung der Verpflichtungen gemäß den Bestimmungen von Artikel 28 der Datenschutz-Grundverordnung (DSGVO) zu attestieren und somit die Durchführung von Audits zu erleichtern.

Mit der Annahme dieser Servicevereinbarung erteilt der AUFTRAGGEBER seine ausdrückliche Genehmigung:

1. Der Nationalen Agentur für Sicherheit in der Informationstechnik (ANSSI) sowie der zuständigen Qualifizierungseinheit, um die Konformität des Dienstes und seines Informationssystems mit dem SecNumCloud-Referenzial zu überprüfen.
2. Einem ordnungsgemäß qualifizierten und vom Dienstleister ausdrücklich benannten PASSI-IT-Sicherheitsauditor, um Sicherheitsüberprüfungen des Dienstes durchzuführen.

# 7. Beschreibung des Dienstes

## 7.1. Modell der geteilten Verantwortung

Der vom Dienstleister angebotene Service zeichnet sich durch die Bereitstellung der folgenden Dienstleistungen aus, die dem Prinzip der geteilten Verantwortung entsprechen, wie im SecNumCloud-Referenzial dargestellt:

- Bereitstellung von Rechenressourcen (Compute);

- Bereitstellung von Speicherplatz;

- Zugang zu Netzwerk- und Internet-Konnektivitätsdiensten;

- Angebot eines Backup-Dienstes für virtuelle Maschinen.

Das Modell der geteilten Verantwortung, das zwischen dem Dienstleister und dem AUFTRAGGEBER im Rahmen des Dienstes angewendet wird, wird in §7.1 dargestellt.

Es wird davon ausgegangen, dass der Dienstleister sein Fachwissen mobilisiert, um die Dienstleistungen nach den besten beruflichen Praktiken und in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzsystems durchzuführen.

Der Dienst ist als SecNumCloud zertifiziert (siehe Zertifikat im Anhang).

## 7.2. Detaillierte Darstellung des Dienstumfangs

| Compute               | Rechenressource des AUFTRAGGEBER-Tenants                                                                             |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | Produktionsdaten des AUFTRAGGEBER-Tenants                                                                            |
| Objektspeicher S3     | Bereitstellung einer souveränen Objektspeicher-Infrastruktur mit mehreren AZ und kompatibel mit den Standard-S3-APIs. |
| Backup                | Modul einer angemessenen Massenspeicherung                                                                          |
| Netzwerkinfrastruktur | Netzwerkmittel des AUFTRAGGEBER-Tenants                                                                             |
| Konsole AUFTRAGGEBER  | Der Dienst, der dem AUFTRAGGEBER den Zugriff auf sein IaaS ermöglicht und über das Shiva-Interface verwaltet wird    |
| Support               | Der Supportdienst, der die vorherigen Dienste begleitet und ausschließlich nur diese (*)                            |

*(*) Innerhalb des Umfangs des SNC-zertifizierten Dienstes und der diesbezüglichen Verantwortlichkeiten des Dienstleisters*

### 7.2.1. Datacenter-Infrastrukturen

Der Service umfasst die Bereitstellung der nachstehend qualifizierten Leistungen für jede Verfügbarkeitszone:

- Ein Datacenter-Standort in Frankreich für die Region FR, der den neuesten technologischen Standards entspricht und eine Resilienzstufe bietet, die gleichwertig oder höher ist als das Tier 3-Level des Uptime Institute;
- Bereitstellung von Technikräumen innerhalb von Datacentern zur Unterbringung der technischen Geräte, die für die Produktionsabwicklung des Dienstes notwendig sind, einschließlich Rechen-, Speicher-, Netzwerk-, Verkabelungs- und anderer erforderlicher Komponenten;
- Sichere Stromversorgung, die durch zwei separate Stromkreise gewährleistet wird und die Kontinuität des Dienstes sicherstellt;
- Bereitstellung von Klimaservices, die den Normen und Empfehlungen der Gerätehersteller entsprechen, um eine optimale Umgebung für technische Geräte aufrechtzuerhalten;
- Ständige Überwachung und detaillierte Metrologie, die eine präzise Überwachung und proaktive Verwaltung der Dienstleistungsleistung und -sicherheit ermöglicht.

Der Dienstleister stellt erweiterte Branddetektions- und Löschdienste zur Verfügung, die darauf ausgelegt sind, jedes Feuer effizient zu erkennen und auszuschalten, das in den Anlagen entsteht. Diese Systeme sind unerlässlich, um die Sicherheit der Geräte und Daten zu gewährleisten. Sie umfassen hochpräzise Rauchmelder und Löschvorrichtungen, die schnell eingreifen können, ohne Computerausrüstung zu beschädigen. Dieser Dienst ist entscheidend, um Brandrisiken zu verhindern, potenzielle Schäden zu minimieren und die Betriebsfortführung zu sichern.

Der AUFTRAGGEBER wird darüber informiert, dass alle implementierten Sicherheitsverfahren und Maßnahmen, einschließlich der jährlichen Tests zur Umschaltung auf Notstromaggregate, unerlässlich sind, um die Kontinuität und Integrität der angebotenen Dienste zu gewährleisten. Diese Praktiken sind darauf ausgelegt, Ausfallrisiken zu minimieren und eine optimale Reaktionsfähigkeit im Falle eines Vorfalls sicherzustellen. Mit der Annahme dieser Bedingungen erkennt der Kunde die Bedeutung dieser Maßnahmen an und verpflichtet sich, vollumfänglich zur Erleichterung ihrer Umsetzung zu kooperieren. Der AUFTRAGGEBER wird ebenfalls ermutigt, die bereitgestellten Sicherheitsempfehlungen zur Kenntnis zu nehmen und in seine eigene Risikomanagementstrategie zu integrieren.

### 7.2.2. Software-Infrastruktur zur Steuerung des Dienstes

Der Dienstleister stellt dem AUFTRAGGEBER die Verwaltungskonsole und die API zur Nutzung des Dienstes zur Verfügung. Er verpflichtet sich außerdem, diese Verwaltungskonsole und die API in optimalem Betriebszustand zu halten und die Sicherheit der Konsole und der API kontinuierlich zu gewährleisten. Diese Verwaltungskonsole und die API werden gemeinsam als "AUFTRAGGEBER-Interface" bezeichnet.

Der Dienstleister weist den AUFTRAGGEBER darauf hin, dass eine anormale Nutzung des AUFTRAGGEBER-Interface, insbesondere im Falle einer Überlastung der Befehl-APIs (Hammering), automatische Sicherheitsmaßnahmen auslösen kann, die das Blockieren des Zugangs zu den Befehl-APIs oder zum Dienst zur Folge haben. Es ist zu betonen, dass diese Situation keine Dienstesunverfügbarkeit darstellt, sondern eine Schutzmaßnahme für den Dienst und die Infrastruktur des Dienstleisters ist; daher kann dies vom AUFTRAGGEBER nicht als Verfügbarkeit im Sinne seiner Berechnungen angesehen werden.

Darüber hinaus informiert der Dienstleister den AUFTRAGGEBER, dass identische (redundante) Anfragen an seine APIs auf eine Anfrage pro Sekunde (Throttling) begrenzt sind. Wenn der AUFTRAGGEBER identische Anfragen mit höherer Frequenz einreicht, kann eine Ablehnung nicht als Dienstesunverfügbarkeit interpretiert werden.

### 7.2.3. Recheninfrastrukturen

Der Dienst umfasst die Bereitstellung der für die Ausführung von Arbeitslasten in Form von virtuellen Maschinen erforderlichen Geräte in den vom AUFTRAGGEBER abonnierten Verfügbarkeitszonen.

Dies umfasst:

- Die Bereitstellung von technischen Chassis, die für das ordnungsgemäße Funktionieren der Rechnerblades erforderlich sind;
- Die Bereitstellung von Rechnerblades in den vom AUFTRAGGEBER festgelegten Mengen, verteilt auf die von ihm gewählten Verfügbarkeitszonen. Es sei darauf hingewiesen, dass diese Rechnerblades ausschließlich dem AUFTRAGGEBER gewidmet sind;
- Die Bereitstellung von Hypervisor-Betriebssystemen und die Gewährleistung des Betriebs und der Sicherheit der Softwareinfrastruktur zur Steuerung dieser Betriebssysteme. Es wird hervorgehoben, dass, obwohl der Dienstleister für die operationelle Wartung und die gesamtsicherheit des Dienstes verantwortlich ist, keine spezifischen Kenntnisse über die Produktionsumgebungen des AUFTRAGGEBERS oder die Anforderungen seiner Arbeitslasten hat. Daher liegt die Verantwortung, über die Aktualisierung der Hypervisor-Betriebssysteme der Rechnerblades zu entscheiden, vollständig beim AUFTRAGGEBER. Diese Aktion kann einen Neustart erfordern und über das AUFTRAGGEBER-Interface durchgeführt werden.

Die Wahl des Modells für die Rechnerblades, die aus dem vom Dienstleister angebotenen Katalog ausgewählt wurden, liegt in der Verantwortung
des AUFTRAGGEBERS.

### 7.2.4. Speicherinfrastruktur

Der Dienst umfasst die Bereitstellung einer gemeinsamen SAN (Storage Area Network)-Speicherinfrastruktur für den AUFTRAGGEBER, die verschiedene Performanzstufen bietet. Dieser Dienst umfasst:

- Implementierung und Aufrechterhaltung des dedizierten SAN-Netzwerks im Betriebs- und Sicherheitszustand;
- Installation und Verwaltung der zwischen Kunden gemeinsam genutzten Speicherblöcke, einschließlich deren Betrieb und Sicherheit, Überwachung und Metrologie;
- Einrichtung eines automatisierten Systems zur Zuweisung von LUNs (Logical Unit Numbers), die dem AUFTRAGGEBER zur Verfügung stehen und gemäß den vom AUFTRAGGEBER abonnierten Volumen verwendet werden.

### 7.2.5. Globale Netzwerkinfrastruktur

Im Rahmen des Dienstes stellt der Dienstleister ein globales Netzwerk bereit, das dem AUFTRAGGEBER ermöglicht, seine gehosteten Systeme zugänglich zu machen. Dieser Dienst umfasst:

- Bereitstellung, Aufrechterhaltung des Betriebs- und Sicherheitszustands sämtlicher Glasfaserverbindungen, die die verschiedenen Verfügbarkeitszonen miteinander verbinden;

- Bereitstellung, Aufrechterhaltung des Betriebs- und Sicherheitszustands der technischen Geräte, die für den ordnungsgemäßen Betrieb des Netzwerks und die Isolation der verschiedenen Kunden erforderlich sind.
Die Netzwerkverbindung des Mandanten COMMANDITAIRE zum Internet oder zu privaten Netzwerken sowie die Netzwerkausrüstung, Provider-Verbindungen und andere technische Komponenten, die diese Verbindung herstellen, gehören nicht zum Umfang des Service. Diese Netzwerkverbindung wird in Übereinstimmung mit den Bestimmungen des Vertrags implementiert.

### 7.2.6. Backup-Infrastruktur

Der Dienstleister stellt dem MANDANTEN einen integrierten, dedizierten und verwalteten Backup-Dienst zur Verfügung, der dem Schutz seiner virtuellen Maschinen dient. Der Dienstleister sorgt für den Erhalt der Betriebsfähigkeit und Sicherheit dieses Backup-Dienstes. Der Dienstleister garantiert, dass die Backups des MANDANTEN außerhalb der Verfügbarkeitszone der gesicherten Workloads liegen, vorausgesetzt, der MANDANT hat die entsprechenden Leistungseinheiten abonniert.

Dieser Backup-Dienst beschränkt sich auf das Backup von virtuellen Maschinen und den Topologie-Konfigurationen der IaaS-Umgebung der MANDANTEN im Rahmen des Service. Die Erstellung und Implementierung einer angemessenen Backup-Politik durch den MANDANT hängt von der Abonnierung spezifischer Leistungseinheiten ab. Es obliegt daher dem MANDANTEN, sicherzustellen, dass die erforderlichen technischen Ressourcen beim Dienstleister verfügbar sind, um seine Backup-Politik umzusetzen oder diese entsprechend den verfügbaren Mitteln anzupassen.

Der Dienstleister verpflichtet sich, den MANDANTEN bei Kapazitätseinschränkungen zu benachrichtigen und Beratungsunterstützung zur Optimierung der Ressourcen zu bieten. Die Verpflichtungen des Dienstleisters beschränken sich auf die Umsetzung der vom MANDANTEN in Bezug auf die Backup-Politik geäußerten Anforderungen im Rahmen der abonnierten Ressourcen.

### 7.2.7. Implementierung von Disaster-Recovery- oder Business-Continuity-Lösungen

Der Dienstleister stellt dem MANDANTEN alle technischen Lösungen zur Verfügung, die notwendig sind, um eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen zu gewährleisten. Es obliegt dem MANDANTEN, diese Ressourcendistribution effektiv zu verwalten, für die er die verfügbaren Tools des Dienstleisters nutzen kann.

## 7.3. Einschränkungen der Services im qualifizierten IaaS-Modell

### 7.3.1. Managed Services im laufenden Betrieb (RUN)

Es ist wichtig zu beachten, dass vom Service ausgeschlossen sind:

- Die Unterbringung physischer Komponenten des MANDANTEN;

- Die Netzwerkverbindung des Mandanten COMMANDITAIRE, zum Internet oder zu privaten Netzwerken einschließlich der Provider-Verbindungen;

- Jeder verwaltete Service-Typ oder TMA;

- Jegliche Unterstützung auf den virtuellen Maschinen auf OS-Ebene und darüber hinaus im IaaS-Verantwortungsbereich, auch wenn es sich um einfache Überwachung handelt.

Es ist jedoch keinesfalls ausgeschlossen, dass der MANDANT solche Services vom MSP-Angebot des Dienstleisters in Anspruch nimmt, um im Managed-Services-Modus auf seine Mandanten zuzugreifen. Diese Services werden dann nicht durch diese Servicevereinbarung und deren zweiseitige Verpflichtungen/Klauseln geregelt.

### 7.3.2. Konfiguration der Notfallwiederherstellung

Standardmäßig stellt der Dienstleister dem MANDANTEN die Ressourcen des IaaS zur Verfügung, indem er Ressourcen reserviert und die Bereitstellungen so konfiguriert, dass die Verfügbarkeitszonen genutzt werden. Es obliegt dem MANDANTEN, die Verfügbarkeitszonen über die COMMANDITAIRE-Schnittstelle auszuwählen.

### 7.3.3. Backup-Konfiguration

Der Backup-Service beschränkt sich auf das Backup der virtuellen Maschinen und der Topologie-Konfigurationen repräsentierend die IaaS-Umgebung der MANDANTEN im Rahmen des Service.

Der Backup-Dienst und die Fertigstellung der Backup-Politik des MANDANTEN unterliegt dem Abonnement des notwendigen Speicherplatzes auf dem Massenspeicher, um den Dienst sicherzustellen. Es obliegt daher dem MANDANTEN, die notwendigen technischen Mittel beim Dienstleister zu abonnieren, um die Backup-Politik innerhalb seines IT-Bereichs zu gewährleisten, oder die Backup-Politik an die implementierten Mittel anzupassen. Der Dienstleister verpflichtet sich, den MANDANTEN im Falle einer technischen Kapazitätsgrenze zu informieren.

Der Dienstleister wird die notwendigen technischen und humanen Mittel zur Sicherung des gehosteten Systems im Rahmen der vom MANDANTEN abonnierten Ressourcen bereitstellen.

Darüber hinaus obliegt es dem MANDANTEN, bei den vom Dienstleister nicht unterstützten Bereichen seine eigene Backup-Strategie zu definieren und die Backups der VMs selbst zu konfigurieren oder eine Serviceanfrage beim Dienstleister zu stellen, damit die Backup-Konfiguration für physische Server implementiert wird, sofern der MANDANT einen Managed-Service-Vertrag hat, der es dem Dienstleister ermöglicht, über die COMMANDITAIRE-Schnittstelle zu handeln, die die Verwaltungskonsole ist, die im Rahmen dieser Servicevereinbarung bereitgestellt wird und über Funktionen zur Backup-Konfiguration verfügt.

Des Weiteren umfasst dieser Dienst nur die Umsetzung der vom MANDANTEN eindeutig spezifizierten Konfiguration über die COMMANDITAIRE-Schnittstelle.

Aus Gründen der Flexibilität des Dienstleistungsangebots hat der MANDANT die Möglichkeit, eine Nicht-Backup-Politik auf einige seiner VMs anzuwenden. In diesem Fall obliegt es dem MANDANTEN, diese Entscheidung zu übernehmen. Der Dienstleister wird die VMs, die mit der "no backup" Politik verbunden sind, nicht sichern. Der Dienstleister warnt den MANDANTEN, dass die Wahl der "no backup" Politik oder die Wahl des manuellen Backups den MANDANTEN im Falle eines Incidents auf den unteren Schichten oder auf den Schichten innerhalb seiner Verantwortung im IaaS-Modell einem vollständigen Datenverlust aussetzt. In einem solchen Fall ist es unmöglich, den Dienstleister dafür verantwortlich zu machen, die Daten wiederherzustellen, da es nichts wiederherzustellen gibt. Der Dienstleister empfiehlt, die VMs immer zu sichern.

Für alle Themen in Bezug auf das auf einer virtuellen Maschine installierte OS und alle darüber laufenden Software oder Programme ist der MANDANT dafür verantwortlich, die Verwaltungs- und Überwachungsarbeiten innerhalb der Europäischen Union durchzuführen, wenn er sicherstellen möchte, dass alle Schichten des IT-Systems operiert und verwaltet werden, und zwar aus der Europäischen Union heraus. Die Verwaltungsarbeiten, die außerhalb des Verantwortungsbereichs des Dienstleisters im Rahmen dieser Servicevereinbarung liegen, sind im Abschnitt "Modell der geteilten Verantwortung" dieser Servicevereinbarung aufgeführt.

## 7.4. Implementierung des Service

### 7.4.1. Technische Voraussetzungen

Für die Implementierung des Service erkennt der MANDANT an, dass er:

- Mit einer Virtualisierung vom Typ VMware in den vom Anbieter unterstützten und im Rahmen des Service bereitgestellten Versionen arbeiten muss;

- Über den Anbieter das Backup-Tool verwenden muss;

- Feste IP-Adressen angeben muss, von denen aus der Anbieter ihm den Zugriff auf die COMMANDITAIRE-Schnittstelle erlauben wird (Whitelist-Filterung). Änderungen an dieser IP-Liste müssen über Serviceanfragen erfolgen (Liste kann nicht über die Verwaltungsschnittstelle des Service administriert werden).

## 7.5. Lokalisierung des Service in Frankreich

Es wird festgelegt, dass keine der Operationen und keine der physischen Komponenten, die an der Bereitstellung des Service beteiligt sind und Gegenstand dieser Servicevereinbarung sind, sich außerhalb der Europäischen Union befinden.

Dies umfasst insbesondere den Support, die betriebliche Überwachung und die Sicherheitsüberwachung (SOC) der technischen Infrastruktur zur Bereitstellung des Service. Folglich werden alle Speicherung, alle Verwaltungsarbeiten, Überwachungen und alle Verarbeitungen in Frankreich durchgeführt.

### 7.5.1. Standort der Datencenter, die den Service beherbergen

Mit Ausnahme der Operationen der Mitarbeiter und der Niederlassungen des Dienstleisters befinden sich alle Produktionsoperationen (einschließlich Speicherung und Datenverarbeitung) und technischen Komponenten zur Bereitstellung des Service in den in Frankreich ansässigen Datencenter.

### 7.5.2. Standort der Cloud Temple Niederlassungen, die den Service betreiben

Die Mitarbeiter von Cloud Temple, die im Rahmen des Service tätig sind, arbeiten von den Cloud Temple Niederlassungen aus, die sich ausschließlich in Frankreich befinden. Diese Niederlassungen befinden sich in Frankreich, in Tours, Lyon, Caen und Paris La Défense.

Der MANDANT wird darüber informiert, dass die Mitarbeiter von Cloud Temple die Möglichkeit haben, remote zu arbeiten. Der Anbieter garantiert jedoch das gleiche Sicherheitsniveau hinsichtlich des Fernzugriffs, insbesondere in Bezug auf den VPN-Zugang. Diese Fernzugriffe werden gemäß den Anforderungen des SecNumCloud-Referenzrahmens implementiert.

## 7.6. Unterstützung

### 7.6.1. Art der Unterstützung, die den Service begleitet

Der Dienstleister bietet einen technischen Support-Service an, der den MANDANTEN bei der Verwaltung, Fehlerbehebung und Optimierung ihrer eingesetzten Ressourcen unterstützt. Dieser Service umfasst eine breite Palette von Aktivitäten, von der Hilfe bei der Ersteinrichtung der Services bis hin zum fortgeschrittenen technischen Support zur Lösung spezifischer Probleme.

Hier ist eine Beschreibung der Merkmale und Funktionen des Support-Services:

- Unterstützung bei der anfänglichen Implementierung der Nutzung des Service;
- Unterstützung bei der Incident-Lösung;
- Unterstützung bei der Problemlösung;
- Überwachung und Beratung zur Optimierung der technischen Basis.
Im Rahmen des Supports ersetzt der Anbieter den AUFTRAGGEBER nicht bei der Nutzung des Dienstes. Der AUFTRAGGEBER bleibt vollständig verantwortlich für die Konfiguration, den Betrieb seiner VMs und Mietobjekte sowie für das Management aller Elemente (einschließlich Daten und Anwendungen), die er auf den Infrastrukturen des Anbieters gespeichert oder installiert hat. Der technische Support wird gemäß den Allgemeinen Verkaufs- und Nutzungsbedingungen bereitgestellt, wobei der Anbieter eine Verpflichtung zur Mittelnutzung hat.

Der AUFTRAGGEBER verpflichtet sich, den technischen Support auf vernünftige Weise zu nutzen, insbesondere indem er keine nicht abonnierten Dienste vom Anbieter anfordert und das Team des Anbieters nicht für seine eigenen Kunden oder Dritte, die nicht im Vertrag enthalten sind, einsetzt. Der Anbieter behält sich das Recht vor, jede Dienstanforderung abzulehnen, die diese Kriterien nicht erfüllt.

Das Support-Niveau ist an den Abschluss der damit verbundenen Support-Bearbeitungseinheiten gebunden.

### 7.6.2. Inanspruchnahme des technischen Supports

Der technische Support ist über ein Ticket-System über die AUFTRAGGEBER-Konsole erreichbar und während der normalen Bürozeiten außerhalb der Feiertage (8 bis 18 Uhr; Montag - Freitag; französischer Kalender und Zeiten) verfügbar. Für Notfälle außerhalb der Arbeitszeiten, insbesondere bei Vorfällen, die die Produktion erheblich beeinträchtigen, kann der Bereitschaftsdienst über eine beim Start des Dienstes an den AUFTRAGGEBER mitgeteilte Nummer erreicht werden.

Für jede Anfrage oder jeden Vorfall muss ein Ticket beim Support des Anbieters erstellt werden. Die Erstellung dieses Tickets, das alle notwendigen Informationen enthält, ist entscheidend und markiert den Beginn der Bewertung der Verpflichtungen des Anbieters.

Sobald der Anbieter eine Anfrage oder eine Vorfallmeldung erhält, sei es über die Managementkonsole oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Meldung eines Vorfalls ist es wichtig, dass der AUFTRAGGEBER dem Anbieter so viele Details wie möglich zu dem aufgetretenen Problem zur Verfügung stellt. Dieser Schritt ist entscheidend, um eine angemessene Bewertung, Priorisierung und effiziente Diagnose der Situation zu ermöglichen.

Der Kunde erhält dann eine Bestätigung per E-Mail, die die Erstellung des Tickets und seine eindeutige Nummer angibt. Der AUFTRAGGEBER kann den Status und die Historie seiner Anfragen und Vorfallmeldungen direkt über die Managementkonsole einsehen.

### 7.6.3. Vorfallmanagementprozess

Bei einer Vorfallmeldung startet das technische Supportteam des Anbieters eine Untersuchung, um die Ursache des Problems zu identifizieren und eine Diagnose zu stellen. Der Kunde muss aktiv mit dem Anbieter zusammenarbeiten, indem er alle notwendigen Informationen bereitstellt und die erforderlichen Tests durchführt. Der Anbieter kann auf den Dienst des Kunden zugreifen, um den Vorfall zu diagnostizieren.

Wenn die Dienste des Anbieters als funktionsfähig erachtet werden und der Vorfall nicht ihm zuzuschreiben ist, wird der Kunde informiert. Auf Wunsch des Kunden kann der Anbieter professionelle Dienstleistungen zur Identifizierung der Ursache des Problems anbieten, die nach vorheriger Vereinbarung in 30-minütigen Intervallen berechnet werden.

Wenn der Vorfall in die Verantwortung des Anbieters oder eines seiner Unterlieferanten fällt, wird dieser die Diagnose abschließen und die Wiederherstellung des Dienstes ohne zusätzliche Kosten durchführen. Die Diagnose stützt sich auf den Austausch zwischen den Parteien und die Daten des Anbieters, die nach Zustimmung der Parteien als beweiskräftig erachtet werden.

### 7.6.4. Priorisierungsprozess der Bearbeitungen

Die Bestimmung des Prioritätslevels eines Falls basiert auf einer Matrixanalyse, die die Auswirkungen des Vorfalls und seinen Kritikalitätsgrad bewertet:

- Die Impact-Level werden wie folgt definiert:

| Impact-Level  | Beschreibung                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impact I1     | Die Dienste des Anbieters sind unterbrochen                                                                            |
| Impact I2     | Die Dienste des Anbieters sind verschlechtert                                                                          |
| Impact I3     | Die Dienste des Anbieters sind derzeit stabil, zeigen jedoch Anzeichen eines potenziellen langfristigen Rückgangs     |

- Die Kritikalitätsstufen werden wie folgt definiert:

| Kritikalitätsstufe | Beschreibung                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| Kritikalität C1    | Die Dienste des Anbieters verschlechtern sich in besorgniserregendem Tempo                                 |
| Kritikalität C2    | Die Dienste des Anbieters verschlechtern sich schrittweise im Laufe der Zeit                               |
| Kritikalität C3    | Die Dienste des Anbieters weisen einen oder mehrere Unannehmlichkeiten ohne signifikante Konsequenzen auf |

- Basierend auf einer gründlichen Analyse der Situation, die die bestimmten Bereiche Impact und Kritikalität berücksichtigt, wird dem Ticket entsprechend der nachstehenden Entscheidungs-Matrix eine Priorität zugewiesen:

| Impact-Level <br/> \ Kritikalitätsstufe | Impact I1       | Impact I2       | Impact I3       |
| --------------------------------------- | --------------- | --------------- | --------------- |
| Kritikalität C1                        | Priorität **P1** | Priorität **P2** | Priorität **P3** |
| Kritikalität C2                        | Priorität **P2** | Priorität **P3** | Priorität **P4** |
| Kritikalität C3                        | Priorität **P3** | Priorität **P4** | Priorität **P5** |

Die Service-Level-Verpflichtungen für jeden Prioritätslevel sind im folgenden Kapitel detailliert beschrieben.

### 7.6.5. Sprache und Standort des Supports

Der Support wird vom Anbieter dem AUFTRAGGEBER mindestens in französischer Sprache bereitgestellt. Der Support kann auch in englischer Sprache bereitgestellt werden.

Die Support-Operationen des Anbieters für das qualifizierte SecNumCloud-Infrastrukturangebot befinden sich in der Europäischen Union.

# 8. Verpflichtungen und Servicelevel

Der Anbieter verpflichtet sich, eine kontinuierliche Überwachung der Leistung und der Sicherheit seiner technischen Infrastruktur, die den Dienst liefert, zu gewährleisten, um ihren optimalen Betrieb sicherzustellen.

Die Nichterreichbarkeit eines Dienstes, die durch einen Leistungsindikator angezeigt wird, wird ab ihrem Identifizierungszeitpunkt durch das Überwachungssystem des Anbieters oder nach einer Benachrichtigung durch einen Nutzer des AUFTRAGGEBERS anerkannt. Der Beginn der Nichterreichbarkeit wird auf den frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um eine präzise und gerechte Berechnung der Nichterreichbarkeitszeit zu gewährleisten.

Das Ende der Nichterreichbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, bestätigt entweder durch die Überwachungstools des Anbieters oder durch eine Nutzer-Rückmeldung, um so eine effektive Wiederaufnahme der Operationen und eine genaue Messung der Ausfallzeit sicherzustellen.

## 8.1. Verfügbarkeitsverpflichtungen der Infrastruktur

Der Anbieter verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau zu gewährleisten, das den für jede festgelegte Periode definierten Standards entspricht. Die Service-Level-Verpflichtungen (SLAs) gelten, sofern der AUFTRAGGEBER seine Systeme über mindestens zwei der in der betreffenden Region verfügbaren Verfügbarkeitszonen implementiert.

Wenn diese Bedingungen vom AUFTRAGGEBER nicht erfüllt werden, ist er nicht in der Lage, die Anwendung der betroffenen SLAs zu beanspruchen, die speziell durch ein Sternchen (*) gekennzeichnet sind. Die Zugänglichkeit zu den SLAs erfolgt über die AUFTRAGGEBER-Schnittstelle. Die Messungen werden monatlich berechnet:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Verfügbarkeit der Rechenleistung (Compute): garantierte Verfügbarkeit von 99,99%, berechnet auf Basis 24/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Speicherverfügbarkeit: garantierte Verfügbarkeit von 99,99%, berechnet auf Basis 24/7.
- **SLA 3     : IC-INFRA_SNC-03** – Zuverlässigkeit der Sicherung: garantierte Verfügbarkeit von 99,99%, berechnet auf Basis 24/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Netzwerk-Infrastrukturverfügbarkeit: garantierte Verfügbarkeit von 99,99%, berechnet auf Basis 24/7.
- **SLA 5     : IC-INFRA_SNC-05** – Internetzugang: garantierte Verfügbarkeit von 99,99%, berechnet auf Basis 24/7.

***Anmerkungen*** :

- *Als Reaktion auf einen verteilten Denial-of-Service-Angriff (DDoS) behält sich der Anbieter das Recht vor, seine Internet-Routing-Konfiguration anzupassen, um die Auswirkungen dieses Angriffs zu begrenzen und seine Infrastruktur zu schützen. Insbesondere wenn eine IP-Adresse des AUFTRAGGEBERS Ziel eines Angriffs ist, kann der Anbieter die Blackholing-Technik über die BGP-Community anwenden, um den gesamten Traffic zur Ziel-IP-Adresse bei seinen Anbietern abzublocken, um die Ressourcen des AUFTRAGGEBERS sowie die anderer AUFTRAGGEBER und der Infrastruktur des Anbieters zu schützen. Der Anbieter empfiehlt dem AUFTRAGGEBER dringend, ähnliche Maßnahmen zu ergreifen, wie die Nutzung verfügbarer Web-Anwendungs-Firewall-Software und die sorgfältige Konfiguration seiner Sicherheitsgruppen über die API.*
- *Der Anbieter betont die Notwendigkeit für den AUFTRAGGEBER, den Datenstrom zu minimieren, insbesondere indem der Zugang zu den Verwaltungsports
**SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389) vom gesamten Internet (Subnetz 0.0.0.0/0) sowie interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049) vermieden wird.*

## 8.2. Verpflichtung zur Verfügbarkeit der AUFTRAGGEBER-Schnittstelle

- SLA 6: IC-INFRA_SNC-06 -- Zugang zur Verwaltungsoberfläche des Dienstes: Eine garantierte Verfügbarkeit von 97%, rund um die Uhr, 24 Stunden am Tag und 7 Tage die Woche.
- SLA 7: IC-INFRA_SNC-07 -- Zugang zu den API-Steuerungen des Dienstes: Eine Verfügbarkeit von 99,9%, berechnet auf einer 24/7-Basis.

## 8.3. Verpflichtung zur Verfügbarkeit des Supports

- **SLA 8: IC-INFRA_SNC-08** – Hier sind die Leistungszusagen des technischen Supports des Anbieters für Vorfälle, ausgenommen geplante Wartungen:

| Priorität        | Garantie der Interventionszeit (GTI) | Leistungsziel        |
| ---------------- | ------------------------------------ | --------------------- |
| Priorität **P1** | 30min                                 | 95%                   |
| Priorität **P2** | 2h                                    | 90%                   |
| Priorität **P3** | 4h                                    | 90%                   |
| Priorität **P4** | 24h                                   | 85%                   |
| Priorität **P5** | 48h                                   | 85%                   |

- **SLA 9: IC-INFRA_SNC-09** – Hier sind die Leistungszusagen des technischen Supports des Anbieters für Serviceanfragen:

|                    | Garantie der Interventionszeit (GTI) | Leistungsziel        |
| ------------------ | ------------------------------------ | --------------------- |
| Serviceanfrage     | 4h                                    | 90%                   |

*Hinweis:*

- *Die Garantie der Interventionszeit (GTI) wird ab dem Zeitpunkt berechnet, an dem der AUFTRAGGEBER das Ticket öffnet und der Support des Anbieters das erste Mal eingreift.*
- *Bei der Untersuchung von Vorfällen im Zusammenhang mit dem AUFTRAGGEBER wird keine Fernunterstützung auf den gehosteten Servern des AUFTRAGGEBERS durchgeführt. Diese Unterstützung beschränkt sich auf die Erklärung der verfügbaren Metriken in Bezug auf die Umgebung des AUFTRAGGEBERS, um das Verständnis der aufgetretenen Vorfälle oder Leistungsprobleme zu erleichtern. Auf der Grundlage der Ergebnisse dieser Analyse können Empfehlungen vorgeschlagen werden.*

## 8.4. Verpflichtung zur Verfügbarkeit des S3-Objektspeichers

- **SLA 10: IC-INFRA_SNC-10** – Hier sind die Verfügbarkeitszusagen für den S3-Objektspeicher:

| Indikator          | Verpflichtung                                   | Verfügbarkeitsziel |
| ------------------ | ----------------------------------------------- | ------------------ |
| IC-INFRA-SNC-10.1  | Haltbarkeit der Objektspeicherung in einer Region | 99,9999999% / Jahr |
| IC-INFRA-SNC-10.2  | Verfügbarkeit der S3-Objektspeicher-API         | 99,99%             |
| IC-INFRA-SNC-10.3  | Maximale Zugriffsverzögerung auf ein Objekt in einer Region | 150 ms            |

Hinweise:

- Der Objektspeicherdienst ist speziell für die Speicherung von Objekten konzipiert und sollte nur zu diesem Zweck verwendet werden. **Der Gebrauch im Block-Modus ist ausdrücklich ausgeschlossen**. Die Verwendung im Block-Modus durch Umgehungsmethoden, wie zum Beispiel die Nutzung von *"FUSE" in einer Linux-Umgebung*, stellt einen Verstoß gegen die Nutzungsbedingungen dar. Keine Vorfälle, Fehlfunktionen oder Schäden, die durch eine nicht konforme Nutzung verursacht werden, sind durch die in dieser Dienstleistungskonvention definierten Service Level Agreements (SLA) abgedeckt.
- Die Haltbarkeitsgarantie ist an eine Nutzung der Dienste gemäß aktuellen Best Practices und Standards gebunden und schließt ausdrücklich jede Datenänderung, ob beabsichtigt oder versehentlich, aus, die aus Handlungen des AUFTRAGGEBERS resultieren.

## 8.5. Klarstellung zur Backup-Verpflichtung

Die für den AUFTRAGGEBER implementierte Backup-Strategie hängt von der Abonnement der entsprechenden Leistungseinheiten ab.

Der Anbieter verpflichtet sich, eine Backup-Lösung bereitzustellen, die es dem AUFTRAGGEBER ermöglicht, die gewünschten Backup-Richtlinien anzuwenden.

Es wird klargestellt, dass der Anwendungsbereich des Anbieters auf die Bereitstellung eines Backup-Dienstes beschränkt ist und der AUFTRAGGEBER über die AUFTRAGGEBER-Schnittstelle die ordnungsgemäße Ausführung der zugehörigen Richtlinien überwachen muss.

Es wird klargestellt, dass die Verwaltung der Speicherkapazitäten des für Backups dedizierten Speicherplatzes in der Verantwortung des AUFTRAGGEBERS liegt. Der Anbieter stellt die Auslastungsrate über die Konsole zur Verfügung.

*Beispiel: Nicht-Sicherung einer virtuellen Maschine:*

*Der AUFTRAGGEBER ist dafür verantwortlich, die ordnungsgemäße Ausführung der Backup-Richtlinien zu überprüfen / zu überwachen. Wenn der AUFTRAGGEBER feststellt, dass eine virtuelle Maschine nicht gesichert wird, liegt es an ihm, die Ursache zu überprüfen. Der AUFTRAGGEBER kann den Support des Anbieters gemäß dem abonnierten Support-Level um Hilfe bitten.*

**SLA 8: IC-INFRA_SNC-08 und SLA 9** sind ausschließlich auf den Fall eines Vorfalls bei der Backup-Dienstleistung anwendbar.

# 9. Organisation der vertraglichen Beziehung

## 9.1. Verantwortlichkeiten des Anbieters

Der Anbieter verpflichtet sich:

- Den AUFTRAGGEBER angemessen zu informieren (zum Beispiel im Falle einer Kapazitätsgrenze der technischen Ressourcen, die den Dienst bereitstellen).

- Den AUFTRAGGEBER formell und innerhalb eines Monats über jede juristische, organisatorische oder technische Änderung zu informieren, die die Konformität des Dienstes mit den Anforderungen zum Schutz vor außereuropäischen Gesetzen beeinträchtigen könnte (19.6 des Referenzrahmens SNC v3.2).

- Dem AUFTRAGGEBER Schnittstellen und Dienstschnittstellen mindestens in französischer Sprache bereitzustellen.

- Die branchenspezifischen Anforderungen zu berücksichtigen, die sich aus der Art der vom AUFTRAGGEBER im Rahmen der Implementierung des Dienstes anvertrauten Informationen ergeben, und dies im Rahmen der Verantwortlichkeiten des Anbieters.

- Keine Informationen über die Leistung an Dritte weiterzugeben, es sei denn, der AUFTRAGGEBER hat dem formell und schriftlich zugestimmt.

- Alle Informationen bereitzustellen, die zur Durchführung von Compliance-Prüfungen gemäß den Bestimmungen von Artikel 28 der DSGVO erforderlich sind.

- Den AUFTRAGGEBER, wie in dieser Dienstleistungskonvention vorgesehen, über jeden Sicherheitsvorfall zu informieren, der den Dienst oder die Nutzung des Dienstes durch den AUFTRAGGEBER betrifft (einschließlich der Daten des AUFTRAGGEBERS).

- Ein qualifiziertes Unternehmen zur Informationssicherheit-Auditierung (PASSI), das vom Anbieter beauftragt wird, den Dienst sowie dessen Informationssystem gemäß dem Kontrollplan des SecNumCloud des Anbieters zu auditieren. Darüber hinaus verpflichtet sich der Anbieter, alle Informationen bereitzustellen, die für die Durchführung von Compliance-Prüfungen gemäß den Bestimmungen von Artikel 28 der DSGVO erforderlich sind, die vom Auftraggeber oder einem beauftragten Dritten durchgeführt werden.

- Als Datenverarbeiter gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) Unterstützung und Beratung an den AUFTRAGGEBER zu leisten, indem er diesen darauf hinweist, wenn eine Anweisung von diesem wahrscheinlich gegen Datenschutzbestimmungen verstößt.

- Schriftlich zu benachrichtigen, wenn ein Projekt den Sicherheitsstandard des Dienstes betrifft oder wahrscheinlich betrifft, den AUFTRAGGEBER über potenzielle Auswirkungen, die durchgeführten Migrationsmaßnahmen sowie die verbleibenden Risiken, die ihn betreffen.

- Alle notwendigen Verfahren zu dokumentieren und umzusetzen, um die gesetzlichen, regulatorischen und vertraglichen Anforderungen an den Dienst sowie die spezifischen Sicherheitsanforderungen des AUFTRAGGEBERS zu erfüllen, wie diese vom AUFTRAGGEBER festgelegt und im Vertrag vorgesehen sind. Auf Anfrage des AUFTRAGGEBERS wird das Dokumentationsmodul der AUFTRAGGEBER-Schnittstelle einen sicheren Austausch dieser Dokumente ermöglichen.

- Auf Anfrage des AUFTRAGGEBERS, die Elemente zur Bewertung der Risiken bezüglich der Unterwerfung der Daten des AUFTRAGGEBERS unter das Recht eines Nicht-EU-Staates bereitzustellen.

Auf formelle und schriftliche Anfrage des AUFTRAGGEBERS verpflichtet sich der Anbieter:

1. Dem AUFTRAGGEBER die interne Regelung und die Ethik-Charta des Anbieters zugänglich zu machen;

2. Dem AUFTRAGGEBER die Sanktionen zugänglich zu machen, die bei Verstößen gegen die Sicherheitspolitik verhängt werden;

3. Dem AUFTRAGGEBER alle ihn betreffenden Ereignisse in den Protokollelementen des Dienstes bereitzustellen;

4. Am Ende des Vertrags verpflichtet sich der Anbieter, die Daten und technischen Daten des AUFTRAGGEBERS gemäß der in dieser Dienstleistungskonvention beschriebenen „End-of-Contract-Datenlöschungsprozedur“ zu löschen;

5. Eine sichere Löschung aller Daten des AUFTRAGGEBERS durch vollständiges Überschreiben aller Datenträger, auf denen seine Daten im Rahmen des Dienstes gespeichert waren, zu gewährleisten;

6. Die vollständige Liste der Dritten bereitzustellen, die Zugang zu den die Daten tragenden Infrastrukturen haben.

Der Anbieter wird die ausführliche Liste der Dritten, die berechtigt sind, auf die Infrastrukturen mit den Daten zuzugreifen, auf dem neuesten Stand halten und dem AUFTRAGGEBER zur Verfügung stellen, und diesen über jegliche Änderungen bezüglich der Unterauftragnehmer informieren. Der Anbieter und alle seine Tochtergesellschaften verpflichten sich, die Grundwerte der Europäischen Union zu respektieren, nämlich die menschliche Würde, Freiheit, Demokratie, Gleichheit, Rechtsstaatlichkeit sowie die Achtung der Menschenrechte. Der vom Anbieter bereitgestellte Dienst entspricht der geltenden Gesetzgebung in Bezug auf Grundrechte und den Werten der Europäischen Union in Bezug auf die Achtung der menschlichen Würde, Freiheit, Gleichheit, Demokratie und Rechtsstaatlichkeit.

## 9.2. Haftungsbeschränkungen des Anbieters

Aufgrund der in dieser Servicevereinbarung erwähnten Definitionen und Bedingungen ist die Haftung des Anbieters wie folgt beschränkt:

1. Das in der Rubrik „Modell der geteilten Verantwortlichkeiten“ dieser Servicevereinbarung beschriebene Modell der geteilten Verantwortung beschränkt faktisch die Einbindung des Anbieters in die Betriebsschichten, die "oberhalb" der Bereitstellung von Rechen-, Netzwerk-, Speicher- und Sicherungsressourcen liegen. Dies schließt insbesondere ohne Beschränkung ein:

    - Die Verwaltung dessen, was auf den virtuellen Maschinen installiert ist (Betriebssysteme, Middleware, Anwendungen usw.);

    - Die Aktualisierung der von dem AUFTRAGGEBER auf seinen Maschinen in seinen Tenants installierten Betriebssysteme und anderer Software;

    - Die Sicherheit der auf den virtuellen Maschinen installierten Programme, Software und Anwendungen;

    - Die Aktualisierung der virtuellen Maschinen;

    - Die Sicherung der Daten auf Anwendungsebene.

2. Der Anbieter kann keine Verpflichtungen zur Sicherung der Tenants des AUFTRAGGEBERS eingehen, ohne dass der AUFTRAGGEBER zuvor die entsprechenden Leistungseinheiten abonniert hat.

3. Der Anbieter kann sich nicht die Eigentumsrechte an den vom AUFTRAGGEBER übermittelten und erzeugten Daten vorbehalten. Diese Daten gehören nämlich dem AUFTRAGGEBER.

4. Der Anbieter betont, dass er die vom AUFTRAGGEBER übermittelten und erzeugten Daten in keinem Fall ohne vorherige Genehmigung des AUFTRAGGEBERS nutzen kann.

5. Der Anbieter übernimmt keinerlei Haftung für die physisch gehosteten und vom Anbieter verwalteten Komponenten, die jedoch im direkten Besitz des AUFTRAGGEBERS oder eines Dritten sind, mit dem der AUFTRAGGEBER einen Vertrag abgeschlossen hat. Das Hosting von physischen Komponenten der Kunden gehört nicht zum Service und fällt somit nicht in den Rahmen dieser Servicevereinbarung. Es obliegt dem AUFTRAGGEBER zu bewerten, welchen Grad an Haftung oder Abhängigkeit diese Komponenten im Verhältnis zu dem qualifizierten SecNumCloud IaaS-Dienst einführen.

## 9.3. Zugangsbeschränkungen

Im Rahmen des Service ist es dem Anbieter ausdrücklich untersagt, ohne vorherige Genehmigung auf die Tenants des AUFTRAGGEBERS zuzugreifen. Es liegt in der Verantwortung des AUFTRAGGEBERS, dem Personal des Anbieters die erforderlichen Zugänge, je nach den spezifischen Anforderungen des Hostings und gegebenenfalls der professionellen Supportdienste, wenn diese Option vom AUFTRAGGEBER gewählt wurde, bereitzustellen.

Der AUFTRAGGEBER erkennt an, dass diese Zugänge ausschließlich den Anforderungen der vereinbarten Serviceleistungen dienen, wodurch eine sichere und den Bestimmungen des Vertrags entsprechende Verwaltung gewährleistet wird.

Fernzugriffe durch Dritte, die in die Erbringung des Service des Anbieters eingebunden sind, sind strengstens untersagt. Sollte eine spezifische technische Anforderung einen solchen Zugang erforderlich machen, kann dieser nur nach vorheriger klarer Benachrichtigung des AUFTRAGGEBERS, Bereitstellung einer detaillierten Begründung und Erhalt dessen schriftlicher Zustimmung gewährt werden.

Diese Maßnahme gewährleistet die Kontrolle und Sicherheit der Daten des AUFTRAGGEBERS, indem sichergestellt wird, dass jede Ausnahme von der Regel ordnungsgemäß genehmigt und dokumentiert wird.

## 9.4. Verantwortlichkeiten der an der Bereitstellung des Secure Temple-Dienstes beteiligten Dritten

Der Anbieter führt die Liste der Partnerdritten, die an der Bereitstellung des Dienstes beteiligt sind. Diese Dritten sind Editoren, (Dienst-)Anbieter (des Anbieters) und andere Lieferanten, die an der Bereitstellung des Dienstes beteiligt sind. Der Anbieter wendet die folgenden Maßnahmen auf diese Dritten an:

- Der Anbieter verlangt von den an der Implementierung des Dienstes beteiligten Dritten, in ihrem Beitrag zum Dienst ein mindestens gleichwertiges Sicherheitsniveau, wie das, das er in seiner eigenen Sicherheitsrichtlinie zum Dienst Secure Temple aufrechterhält;

- Der Anbieter schließt mit jedem an der Implementierung des Dienstes beteiligten Drittunternehmen Vertragsklauseln, die es einer Zertifizierungsstelle ermöglichen, zu prüfen, ob diese Dritten die gesetzlichen Anforderungen und die SNC-Anforderungen einhalten, was dem Anbieter ermöglicht, seine Verpflichtungen in dieser Servicevereinbarung zu erfüllen.

- Der Anbieter implementiert ein Verfahren, das es ermöglicht, regelmäßig die Maßnahmen zu kontrollieren, die von den an der Implementierung des Dienstes beteiligten Dritten ergriffen wurden, um die Anforderungen des Anbieters zur Erfüllung seiner Verpflichtungen in dieser Servicevereinbarung zu erfüllen.

- Der Anbieter implementiert ein Verfahren zur Verfolgung der Änderungen, die von den an der Implementierung des Dienstes beteiligten Dritten vorgenommen wurden und die das Sicherheitsniveau des Informationssystems des Dienstes beeinträchtigen könnten.

## 9.5. Verantwortlichkeiten und Pflichten des AUFTRAGGEBERS

Zur Erinnerung: Der Anbieter stellt dem AUFTRAGGEBER eine Plattform zur Ausführung virtueller Maschinen zur Verfügung, deren Konfiguration dem AUFTRAGGEBER obliegt. Jede virtuelle Maschine kann nicht ohne eine zugehörige Backuppolitik funktionieren. Der Anbieter definiert über seine Schnittstellen automatische Backuppolitiken. Es liegt jedoch in der Verantwortung des AUFTRAGGEBERS, diese Backuppolitiken zu aktivieren und somit die virtuellen Maschinen zu aktivieren.

Der AUFTRAGGEBER ermächtigt die ANSSI und die Zertifizierungsstelle SNC, den Dienst und die technische Infrastruktur, die den Dienst erbringt, zu auditieren.

## 9.6. Rechte des AUFTRAGGEBERS

Der AUFTRAGGEBER kann jederzeit während der Vertragsbeziehung eine Beschwerde bezüglich des qualifizierten Dienstes bei der ANSSI einreichen.

Der AUFTRAGGEBER kann jederzeit den Anbieter um Einsicht in seine internen Regelungen und seinen Ethikkodex bitten.

## 9.7. Datenlöschung am Ende des Vertrags 

Nach Beendigung des Vertrags, sei es durch Ablauf oder Beendigung aus irgendeinem Grund, verpflichtet sich der Anbieter, eine sichere Löschung aller Daten des AUFTRAGGEBERS, einschließlich technischer Daten, durchzuführen. Der Anbieter stellt sicher, dass dem AUFTRAGGEBER eine formelle Vorankündigung unter Einhaltung einer Frist von einundzwanzig (21) Kalendertagen mitgeteilt wird. Die Daten des AUFTRAGGEBERS werden dann innerhalb einer Frist von maximal dreißig (30) Tagen nach dieser Benachrichtigung gelöscht.

Um diese Löschung zu bestätigen, stellt der Anbieter dem AUFTRAGGEBER ein Zertifikat aus, das die Löschung der Daten bestätigt.

# 10. Lebenszyklus dieser Servicevereinbarung

## 10.1. Inkrafttreten der Servicevereinbarung

Diese Servicevereinbarung tritt am Tag ihrer Unterzeichnung durch den AUFTRAGGEBER in Kraft.

Die Erfassung, Manipulation, Speicherung und Verarbeitung der im Vorverkauf, bei der Implementierung, dem Beenden des Dienstes vorgenommenen Daten erfolgt in Übereinstimmung mit der geltenden Gesetzgebung.

## 10.2. Änderungen der Servicevereinbarung

Änderungen oder Ergänzungen dieser Servicevereinbarung erfolgen ausschließlich aufgrund von Anfragen der dafür designierten Governance-Organe. Diese Änderungsvorschläge werden von den Parteien geprüft, die berechtigt sind, die Aspekte zu identifizieren, die eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede Änderung der Servicevereinbarung nach Genehmigung, die die ursprünglich festgelegten finanziellen Bedingungen verändert, die Erstellung und Unterzeichnung einer Ergänzungsvereinbarung zum laufenden Vertrag erfordert.

Die Faktoren, die eine Überarbeitung dieser Servicevereinbarung auslösen können, umfassen unter anderem:

- Die Entwicklung der technischen Infrastruktur, die den IaaS-Dienst bereitstellt;

- Die Anpassungen der vom Anbieter umgesetzten Dienste zur Bereitstellung des Dienstes;

- Die Änderungen der eingegangenen Verpflichtungen und anwendbaren Sanktionen;

- Die organisatorischen Reorganisationen innerhalb des AUFTRAGGEBERS oder des Anbieters;

- Die Erweiterung oder Reduktion des Anwendungsbereichs des Dienstes.

Die Verwaltung der Versionen und Überarbeitungen der Servicevereinbarung wird im Vorwort des Dokuments festgehalten, um die Verfolgung zu erleichtern.

### 10.2.1. Vom AUFTRAGGEBER ausgelöste Änderungen

Die Änderungen der Servicevereinbarung können insbesondere ihren Ursprung haben in:

- Einer Änderung der vom Anbieter verwalteten Infrastruktur;

- Einer Änderung der vom Anbieter umgesetzten Dienste;

- Einer Änderung der Service-Level-Verpflichtungen durch den Anbieter.

### 10.2.2. Vom Anbieter ausgelöste Änderungen

Alle Änderungen der Servicevereinbarung unterliegen der Zustimmung des AUFTRAGGEBERS. Es ist zu verstehen, dass alle validierten Änderungen oder Ergänzungen, die die finanziellen Elemente des Vertrags verändern, möglicherweise die Unterzeichnung einer Ergänzungsvereinbarung erfordern.

## 10.3. Reversibilität

Darüber hinaus verpflichtet sich Cloud Temple, eine Überarbeitung dieser Servicevereinbarung (durch die insbesondere ihre Beendigung vorgesehen wird) ohne Strafe zu ermöglichen, falls die Qualifikation SecNumCloud verloren geht.
Die Dienste umfassen keine Verpflichtung zur Rückführung (das heißt, die Unterstützung des Kunden bei der Migration seines Systems zu einem anderen Dienstleister), mit Ausnahme der Bereitstellung der INTERFACE durch den Dienstleister an den AUFTRAGGEBER, die es dem AUFTRAGGEBER ermöglicht, seine Daten einschließlich der Konfigurationsdaten seines Informationssystems über eine der folgenden technischen Methoden nach Wahl des AUFTRAGGEBERS zu sichern und wiederherzustellen: Die Bereitstellung von Dateien in einem oder mehreren dokumentierten und außerhalb des vom Dienstleister bereitgestellten Dienstes nutzbaren Formaten oder durch die Einrichtung technischer Schnittstellen, die den Zugang zu den Daten gemäß einem dokumentierten und nutzbaren Schema (API) ermöglichen.

Der AUFTRAGGEBER, der alleinige Herr seines Systems, muss alles tun, um diese Operation gegebenenfalls zu erleichtern (was das Erstellen einer gründlichen Dokumentation zu diesem Zweck und die Ausarbeitung von Rückführungsplänen beinhaltet). Sollte der AUFTRAGGEBER eine zusätzliche Dienstleistung benötigen, kann der Dienstleister eine diesbezügliche Beratungsleistung im Rahmen eines spezifisch zu verhandelnden Vertrags anbieten.

# 11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes

## 11.1. Verwaltung von Vorfällen und Unterbrechungen

### 11.1.1. Vorfälle

#### 11.1.1.1. Arten von Vorfällen, die im Rahmen dieser Servicevereinbarung behandelt werden

- Schadenfälle

- Ausfälle und Störungen

- Sicherheitsvorfälle:

- Beeinträchtigung der Dienstverfügbarkeit

- Beeinträchtigung der Dienstvertraulichkeit

- Beeinträchtigung der Dienstintegrität

#### 11.1.1.2. Behandlung der Vorfälle

- Fristen

- Nachbereitungsmaßnahmen

- Archivierung von Dokumenten, die Sicherheitsvorfälle detaillieren

- Meldung von Datenschutzverletzungen [online](<https://notifications.cnil.fr/notifications/index>)

#### 11.1.1.3. Benachrichtigungsgrad der Sicherheitsvorfälle

Der AUFTRAGGEBER ist dafür verantwortlich, die Schweregrade der Sicherheitsvorfälle auszuwählen, über die er informiert werden möchte, z. B. durch ihre Formalisierung in einem PSA, das auf den Dienst anwendbar ist.

Standardmäßig wird der AUFTRAGGEBER informiert:

- Über Sicherheitsvorfälle mit Auswirkungen (Auswirkungen I1 und I2 gemäß der im Priorisierungsprozess der vorliegenden Servicevereinbarung definierten Auswirkungsskala);

- Über Datenschutzverletzungen, für die der AUFTRAGGEBER für die Verarbeitung verantwortlich ist;

- Über Datenschutzverletzungen, für die der Dienstleister für die Verarbeitung verantwortlich ist und die personenbezogene Daten des AUFTRAGGEBERS enthalten.

## 11.2. Wartung des Dienstes

### 11.2.1. Art der Wartung

Die gewährleistete Wartung umfasst die Umsetzung:

- Des Plans zur Aufrechterhaltung des Betriebszustands des Dienstes zur Sicherstellung guter Verfügbarkeitsindikatoren, wie oben vom Dienstleister festgelegt;

- Des BCP/DRP-Plans, sofern vom AUFTRAGGEBER abonniert, ausgelöst basierend auf den möglicherweise auftretenden Vorfällen.

### 11.2.2. Fernzugriff von Cloud Temple auf den Bereich des AUFTRAGGEBERS

Der Dienstleister darf im Rahmen dieser Servicevereinbarung keinen Zugriff auf die Tenants und den Bereich der Schnittstelle des
AUFTRAGGEBERS haben.

Es liegt in der Verantwortung des AUFTRAGGEBERS, dem Personal des Dienstleisters die notwendigen Zugänge zu gewähren. Der AUFTRAGGEBER erkennt an, dass die Zugänge im Rahmen des Hostings und schließlich des IT-Managements (sofern vom AUFTRAGGEBER abonniert) genutzt werden.

### 11.2.3. Fernzugriff von Dritten, die an der Bereitstellung des Dienstes im Bereich des AUFTRAGGEBERS beteiligt sind

Kein Fernzugriff von Dritten, die an der Bereitstellung des Dienstes beteiligt sind, ist erlaubt.

Sollte ein technisches Bedürfnis diesen Fall erforderlich machen, würde diese Art von Zugang erst nach Benachrichtigung des AUFTRAGGEBERS und Erhalt seiner schriftlichen Zustimmung durchgeführt werden.

# 12. Verfahren zur Datenlöschung am Vertragsende

Am Ende des Vertrags, sei es durch Zeitablauf oder aus einem anderen Grund, wird der Dienstleister die sichere Löschung aller im Rahmen des Dienstes verarbeiteten Daten, einschließlich der technischen Daten des AUFTRAGGEBERS, sicherstellen. Der Dienstleister gibt eine formale Vorankündigung mit einer Frist von einundzwanzig (21) Kalendertagen. Die Daten des AUFTRAGGEBERS werden maximal dreißig (30) Tage nach der Benachrichtigung gelöscht. Der Dienstleister stellt dem AUFTRAGGEBER ein Datenlöschungszertifikat aus.

# 13. Anwendbares Recht

## 13.1. Im Allgemeinen

Das auf diese Servicevereinbarung anwendbare Recht ist das französische Recht.

## 13.2. Einhaltung des geltenden Rechts und der geltenden Vorschriften

Der Dienstleister verpflichtet sich zu den folgenden Punkten:

- Identifizierung der im Rahmen des Dienstes geltenden gesetzlichen und regulatorischen Anforderungen;

- Einhaltung der für die anvertrauten Daten geltenden gesetzlichen und regulatorischen Anforderungen;

- Einhaltung des Datenschutzgesetzes und der DSGVO;

- Implementierung von Maßnahmen zum Schutz personenbezogener Daten;

- Implementierung eines Prozesses zur gesetzlichen und regulatorischen Überwachung;

- Aufrechterhaltung angemessener Beziehungen oder einer Überwachung mit den sektoralen Behörden im Zusammenhang mit den im Rahmen des Dienstes verarbeiteten Daten. Dies schließt insbesondere die ANSSI, das CERT-FR und die CNIL ein.

## 13.3. DSGVO

Handelnd als Auftragsverarbeiter im Sinne von Artikel 28 der Datenschutz-Grundverordnung (DSGVO) verpflichtet sich der Dienstleister:

- Transparenz und Nachvollziehbarkeit zu gewährleisten;

- Einen DPO zu benennen, der für die Festlegung und Umsetzung der Maßnahmen zum Schutz personenbezogener Daten verantwortlich ist;

- Unterstützung und Beratung für den AUFTRAGGEBER zu leisten und ihn zu warnen, wenn eine Anweisung des AUFTRAGGEBERS einen Verstoß gegen die Datenschutzregeln darstellt, sofern der Dienstleister dies erkennen kann;

- Sicherheit für die verarbeiteten Daten zu gewährleisten (aufgrund der Qualifikation SecNumCloud).

## 13.4. Schutz vor außereuropäischem Recht

Im Falle der Inanspruchnahme eines Dritten - einschließlich eines Unterauftragnehmers - durch den Dienstleister im Rahmen des Dienstes, der seinen Sitz, seine Hauptverwaltung oder seinen Hauptgeschäftsort außerhalb der Europäischen Union hat, oder der von einem Dritten, der seinen Sitz außerhalb der Europäischen Union hat, kontrolliert wird, verpflichtet sich der Dienstleister, dass dieser Dritte keinen Zugang zu den im Rahmen des 'Secure Temple'-Dienstes verarbeiteten Daten hat.

Zur Erinnerung: Die betroffenen Daten sind die dem Dienstleister vom AUFTRAGGEBER anvertrauten Daten sowie alle technischen Daten, die Informationen über die AUFTRAGGEBER enthalten.

Für die Zwecke dieses Artikels wird das Begriff des Kontrolls gemäß Artikel L233-3 II Handelsgesetzbuch verstanden.

# 14. UNTERSCHRIFTEN

Ort: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, Datum:
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Für Cloud Temple, der DIENSTLEISTER

Für \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, der AUFTRAGGEBER