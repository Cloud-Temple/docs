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

Le présent document formalise la Convention de service associée au service IaaS qualifiée SecNumCloud sous l'appellation de « *Secure Temple *».

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


-   **Änderung :** Jede Hinzufügung, Änderung oder Löschung, die den Dienst betrifft und genehmigt, geplant oder unterstützt wurde.

-   **Standardänderung:** Eine Änderung, die einem Verfahren unterliegt, dessen Implementierungsmodalitäten und Auswirkungen (einschließlich finanzieller) im Voraus von den Parteien bekannt und akzeptiert sind. Es wird dann in den Katalog der Standardänderungen aufgenommen und kann je nach Fall eine GTI und eine GTR haben.

-   **Vertrag :** Bezeichnet den Vertrag, den der AUFTRAGGEBER mit dem Dienstleister abgeschlossen hat, um dem AUFTRAGGEBER die Nutzung des Dienstes zu ermöglichen, und an dem diese Servicevereinbarung angehängt ist.

-   **Servicevereinbarung: Dieses Dokument, das im Rahmen eines spezifischen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (CGVU) erstellt wurde, und zwar in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzsystems.

-   **Serviceanfrage:** Anfrage des AUFTRAGGEBERS an den Dienstleister im Rahmen des Dienstes, die nicht vom AUFTRAGGEBER über die AUFTRAGGEBER-Schnittstelle durchführbare Operationen und Supportanfragen im Rahmen des Dienstes abdeckt. Die Serviceanfragen sind auf die im Vertrag oder in dieser Servicevereinbarung vorgesehenen beschränkt.

-   **Verfügbarkeit:** Fähigkeit, die Verfügbarkeit und die Aufrechterhaltung der optimalen Leistung des Dienstes sicherzustellen, in Übereinstimmung mit den in den Service Level Agreements (SLA) definierten Kriterien und Verpflichtungen.

-   **Technische Daten:** Umfasst alle Daten, die zur Bereitstellung des Dienstes verarbeitet werden, insbesondere die Identität der Nutzer und Administratoren der technischen Infrastruktur, Infrastrukturprotokolle, Zugangskonfiguration, Verzeichnis, Zertifikate...

-   **Ereignis:** Ein "Ereignis" ist jede erkenn- oder identifizierbare Vorkommnis, die für die Verwaltung des Dienstes von Bedeutung sein kann.

-   **Hypervisor:** Betriebssystem, das die Ausführung virtueller Maschinen auf einer Recheneinheit ermöglicht.

-   **Vorfall:** Jedes unvorhergesehene Ereignis, das den normalen Betrieb des Dienstes stört oder die Datensicherheit gefährdet.

-   **Sicherheitsvorfall:** Jedes Ereignis im Rahmen des Dienstes:

    -   Von absichtlich bösartiger Natur;
    -   Von zufälliger Natur, das die Integrität, Vertraulichkeit oder Rückverfolgbarkeit des Dienstes oder der Daten des AUFTRAGGEBERS beeinträchtigt;
    -   Die bestehende Sicherheitsmaßnahmen beeinträchtigen.
    Nicht böswillige Verfügbarkeitsbeeinträchtigungen gelten nicht als Sicherheitsvorfall (Hardwareausfall, Fehler, Fehlfunktion, Naturkatastrophe...).

-   **AUFTRAGGEBER-Schnittstelle:** Verwaltungsschnittstelle des Dienstes, die dem AUFTRAGGEBER vom Dienstleister bereitgestellt wird und eine webbasierte Administrationskonsole und eine API umfasst.

-   **Inbetriebnahme:** Administrationsaktion(en) zur Durchführung der Änderung, wenn diese genehmigt wurde (die Änderung im ITIL-Sinne betrifft nur das Änderungsmanagement und nicht deren Umsetzung/Verwirklichung).

-   **Problem:** Ursache von einem oder mehreren wiederkehrenden Vorfällen, Ursache eines potenziellen Vorfalls (Risikofall).

-   **Region :** Bezeichnet eine geografisch abgegrenzte Gruppe von Cloud-Verfügbarkeitszonen, die Netzwerk-, Rechen- und Speicherdienste zur Optimierung der Latenzzeit, Leistung und lokalen gesetzlichen Konformität bereitstellt.

-   **Dienst:** Bezeichnet den vom Auftraggeber auf Infrastruktur des Dienstleisters bereitgestellten und vom Dienstleister gepflegten IaaS-Dienst SecNumCloud „Secure Temple“, wie in der „Servicebeschreibung“ beschrieben.

-   **Secure Temple:** Bezeichnet den SecNumCloud-qualifizierten IaaS-Dienst, der von der Firma Cloud Temple angeboten wird, wie in der auf der ANSSI-Website einsehbaren Bescheinigung definiert und im Anhang dieser Servicevereinbarung aufgeführt.

-   **Schadensfall:** Bezeichnet ein schwerwiegendes Ereignis natürlichen oder menschlichen, zufälligen oder absichtlichen Ursprungs, das erhebliche Verluste und Schäden für die geschädigte Partei verursacht.

-   **Überwachung:** Überwachung eines Informationssystems oder eines Dienstes, beinhaltet die Sammlung verschiedener Daten wie Messungen und Alarme. Diese Aktivität beschränkt sich auf Beobachtung und Nachverfolgung, ohne direkt auf die überwachten Elemente einzugreifen, was in den Zuständigkeitsbereich der Administration fällt.

-   **Nutzer:** Eine isolierte Instanz, die für einen Nutzer oder eine Nutzergruppe reserviert ist, die eine gemeinsame Infrastruktur teilt und gleichzeitig die Unabhängigkeit und Sicherheit der Daten und Anwendungen gewährleistet.

-   **Verfügbarkeitszone (AZ) (Availability zone):** Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der dazu konzipiert ist, hohe Verfügbarkeit und Resilienz der Dienste durch geografische Verteilung der Ressourcen zu gewährleisten.

# 4. Abkürzungen


  | **Abkürzung** | **Definition**                                                                          |
  | ------------- | :-------------------------------------------------------------------------------------- |
  | **CAB**       | Change Advisory Board -- Beratungsausschuss für Änderungen                             |
  | **CMDB**      | Configuration Management Database -- Konfigurationsverwaltungsdatenbank                 |
  | **COPIL**     | Lenkungsausschuss                                                                       |
  | **COSTRAT**   | Strategisches Komitee                                                                   |
  | **COPROJ**    | Projektkomitee                                                                          |
  | **DB**        | Datenbank (Database)                                                                    |
  | **DRP**       | Disaster Recovery Plan (Notfallwiederherstellungsplan)                                  |
  | **GTE**       | Eskalationszeitgarantie                                                                 |
  | **GTI**       | Eingreifzeitgarantie                                                                    |
  | **GTR**       | Lösungszeitgarantie                                                                     |
  | **ITIL**      | Information Technology Infrastructure Library - Best Practices für IT-Management        |
  | **IaaS**      | Infrastructure as a Service                                                             |
  | **MCO**       | Aufrechterhaltung des Betriebszustands                                                  |
  | **MOA**       | Projektsteuerung                                                                        |
  | **MOE**       | Durchführung                                                                            |
  | **MSP**       | Managed Services Provider                                                               |
  | **OS**        | Betriebssystem (Operating System)                                                       |
  | **PAQ**       | Qualitätsmanagementplan                                                                 |
  | **PaaS**      | Platform as a Service                                                                   |
  | **PAS**       | Sicherheitsmanagementplan                                                               |
  | **PASSI**     | Anbieter von Sicherheitssystemauditdiensten                                             |
  | **RFC**       | Request For Change -- Änderungsanfrage                                                  |
  | **RGPD**      | Datenschutz-Grundverordnung (DSGVO)                                                     |
  | **RPO**       | Recovery Point Objective -- Datenwiederherstellungsziel bei einem Schadensfall          |
  | **RTO**       | Recovery Time Objective -- Servicewiederherstellungszeit bei einem Schadensfall         |
  | **SDM**       | Service Delivery Manager                                                                |
  | **SLA**       | Service Level Agreement -- Service-Level-Vereinbarung                                   |
  | **SNC**       | SecNumCloud                                                                             |
  | **SOC**       | Security Operation Center                                                               |
  | **TMA**       | Drittwartung von Anwendungen                                                           |
  | **UO**        | Leistungseinheit                                                                        |
  | **VABE**      | Eignungsprüfung zur guten Betriebsfähigkeit                                             |
  | **VABF**      | Eignungsprüfung für die ordnungsgemäße Funktion                                         |
  | **VM**        | Virtuelle Maschine (Virtual Machine)                                                    |
  | **VSR**       | Regelmäßige Serviceprüfung                                                              |


# 5. Zweck dieser Servicevereinbarung

Diese Servicevereinbarung legt die Bedingungen fest, unter denen der Dienstleister verpflichtet ist, den Dienst an den AUFTRAGGEBER zu erbringen. Ihr Zweck ist es:

-   Die vom AUFTRAGGEBER erwarteten Leistungsanforderungen hinsichtlich Funktionalität und Zuverlässigkeit des Dienstes zu präzisieren;

-   Die Verpflichtungen des Dienstleisters zur Erfüllung der vereinbarten Servicelevels darzulegen;

-   Die spezifisch für den erbrachten Dienst geltenden gesetzlichen Normen zu identifizieren;

-   Konsistenz und Integrität bei der Bewertung der Servicequalität sicherzustellen;

-   Die Exzellenz der erbrachten Dienstleistungen zu garantieren, bewertet anhand quantitativer Leistungsindikatoren.

Es ist festgelegt, dass der Vertrag im Falle eines Entzugs der SecNumCloud-Zertifizierung durch den Dienstleister kündbar ist.

plein droit, sans encourir de pénalités, par le COMMANDITAIRE. Dans une telle éventualité, le Prestataire s'engage à informer le COMMANDITAIRE
de cette déqualification par envoi d'une notification officielle, au moyen d'une lettre recommandée avec demande d'avis de réception.

Il convient de noter qu'une modification ou un ajustement de la qualification SecNumCloud ne sera pas interprété comme une révocation de
la qualification initiale.

# 6. Audit

Le Prestataire s'engage à permettre au COMMANDITAIRE, ou à tout auditeur tiers et non concurrent du Prestataire que ce dernier aurait désigné, de consulter l'ensemble des documents nécessaires à l'attestation du respect intégral des obligations liées à la conformité avec les dispositions de l'article 28 du Règlement Général sur la Protection des Données (RGPD), facilitant ainsi la réalisation
d'audits.

Par l'acceptation de la présente Convention de service, le COMMANDITAIRE confère son autorisation explicite à :

1.  L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI) ainsi qu'à l'entité de qualification compétente pour entreprendre la vérification de la conformité du Service et de son système d'information au référentiel SecNumCloud.
2.  Un prestataire d'audit de la sécurité des systèmes d'information, dûment qualifié PASSI et expressément désigné par le Prestataire, pour mener à bien des audits de sécurité portant sur le Service.

# 7. Description du Service

## 7.1. Modèle de responsabilité partagé

Le Service proposé par le Prestataire se caractérise par la mise à disposition des prestations suivantes, lesquelles s'alignent sur le
principe de responsabilité partagée présenté dans le référentiel SecNumCloud :

-   La provision de ressources de calcul (compute) ;

-   La mise à disposition d'espaces de stockage ;

-   L'accès à des services de connectivité réseau et internet ;

-   L'offre d'un service de sauvegarde dédié aux machines virtuelles.

Le modèle de responsabilités partagé appliqué entre le Prestataire et le COMMANDITAIRE dans le cadre du Service est présenté en §7.1.

Il est entendu que le Prestataire mobilisera son expertise pour réaliser les Prestations selon les meilleures pratiques professionnelles et
conformément aux exigences du référentiel SecNumCloud.

Le Service est qualifié SecNumCloud (voir attestation en Annexe).

## 7.2. Présentation détaillée du périmètre du Service

| Compute               | Berechnungsressource des Mieters COMMANDITAIRE                                                                         |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Storage               | Produktionsdaten des Mieters COMMANDITAIRE                                                                             |
| Object Storage S3     | Bereitstellung einer souveränen Object Storage-Infrastruktur mit mehreren AZ und kompatibel mit den Standard-S3-APIs.  |
| Backup                | Modul-Abonnement der geeigneten Massenlagerung                                                                         |
| Netzwerkinfrastruktur | Netzwerkressource des Mieters COMMANDITAIRE                                                                            |
| Console COMMANDITAIRE | Der Dienst, der es dem COMMANDITAIRE ermöglicht, auf seinen IaaS-Dienst zuzugreifen und ihn über die Shiva-Schnittstelle zu verwalten |
| Support               | Der Support-Dienst zur Unterstützung der vorherigen Dienste und ausschließlich dieser (*)                              |

_(*) Im Rahmen des qualifizierten SNC-Dienstumfangs und der Verantwortlichkeiten des Prestataires in dieser Angelegenheit_

### 7.2.1. Infrastrukturen Datacenters

Der Service umfasst die Bereitstellung der nachfolgend aufgeführten qualifizierten Dienste für jede Verfügbarkeitszone:

-   Ein in Frankreich für die Region FR gelegenes Rechenzentrum, das den neuesten technologischen Standards entspricht und ein Resilienz-Niveau des Uptime Institute Tier 3 oder höher bietet;
-   Bereitstellung von Technikräumen innerhalb von Rechenzentren für die Unterbringung der für die Serviceproduktion notwendigen technischen Ausrüstung, einschließlich Rechenleistung, Speicher, Netzwerkinfrastruktur, Verkabelung und anderer notwendiger Komponenten;
-   Sichere Stromversorgung, gewährleistet durch zwei unabhängige Stromkreise, die eine kontinuierliche Servicebereitstellung garantieren;
-   Bereitstellung von Klimaanlagen, die den Normen und Empfehlungen der Gerätehersteller entsprechen, um ein optimales Umfeld für die technischen Geräte zu gewährleisten;
-   Ständige Überwachung und detaillierte Metrologie, die eine präzise Nachverfolgung und proaktive Verwaltung der Leistungs- und Sicherheitsanforderungen des angebotenen Service ermöglicht.

Der Prestataire stellt fortschrittliche Erkennungs- und Löschsysteme zur Brandbekämpfung bereit, die so konzipiert sind, dass Brandgefahren innerhalb der Einrichtungen effektiv erkannt und beseitigt werden. Diese Systeme sind wesentlich für die Sicherheit der Ausrüstung und Daten. Sie umfassen hochpräzise Rauchmelder und Löschvorrichtungen, die schnell reagieren können, ohne die IT-Ausrüstung zu beschädigen. Dieser Service ist entscheidend für die Brandprävention, Minimierung potenzieller Schäden und Sicherstellung der betrieblichen Kontinuität.

Der COMMANDITAIRE wird darüber informiert, dass alle implementierten Sicherheitsprozeduren und -maßnahmen, einschließlich der jährlichen Tests der Notstromaggregate, essenziell sind, um die Kontinuität und Integrität der bereitgestellten Dienste zu gewährleisten. Diese Maßnahmen sind darauf ausgelegt, Ausfallrisiken zu minimieren und eine optimale Reaktionsfähigkeit im Falle eines Vorfalls sicherzustellen. Mit der Annahme dieser Bedingungen erkennt der Kunde die Bedeutung dieser Maßnahmen an und verpflichtet sich, deren Umsetzung vollständig zu unterstützen. Der COMMANDITAIRE wird ebenfalls ermutigt, die bereitgestellten Sicherheitsrichtlinien zu befolgen und in die eigene Risikomanagementstrategie zu integrieren.

### 7.2.2. Infrastruktur zur Dienststeuerung

Der Prestataire stellt dem COMMANDITAIRE die Verwaltungskonsole und die benötigte API zur Nutzung des Service bereit. Er verpflichtet sich zudem, diese Verwaltungskonsole und die API im optimalen Betriebszustand zu halten und kontinuierlich zu sichern. Diese Verwaltungskonsole und API werden zusammenfassend als „interface COMMANDITAIRE“ bezeichnet.

Der Prestataire weist den COMMANDITAIRE darauf hin, dass eine abnormale Nutzung der interface COMMANDITAIRE, insbesondere bei Überlastung der Steuer-APIs (hammering), automatische Sicherheitsmaßnahmen auslösen kann, die den Zugang zu den Steuer-APIs oder zum Dienst blockieren. Diese Situation stellt keine Dienstunverfügbarkeit dar, sondern eine Maßnahme zum Schutz des Dienstes und der Infrastruktur des Prestataires; daher kann der COMMANDITAIRE diese nicht als Unverfügbarkeit in seinen Berechnungen berücksichtigen.

Zudem weist der Prestataire den COMMANDITAIRE darauf hin, dass identische Anfragen (Duplikate), die an seine APIs gesendet werden, auf eine pro Sekunde beschränkt sind (Throttling). Wenn der COMMANDITAIRE identische Anfragen mit höherer Frequenz sendet, kann deren Ablehnung nicht als Dienstunverfügbarkeit interpretiert werden.

### 7.2.3. Berechnungsinfrastrukturen

Der Service umfasst die Bereitstellung der notwendigen Ausrüstung zur Ausführung von Arbeitslasten in Form von virtuellen Maschinen in den vom COMMANDITAIRE abonnierten Verfügbarkeitszonen:

Dies umfasst:

- Bereitstellung der technischen Chassis, die für den einwandfreien Betrieb der Rechenkarten erforderlich sind;
- Bereitstellung der Rechenkarten in den vom COMMANDITAIRE angegebenen Mengen und verteilt auf die Verfügbarkeitszonen seiner Wahl. Es sei darauf hingewiesen, dass diese Rechenkarten ausschließlich für den COMMANDITAIRE reserviert sind;
- Bereitstellung von Hypervisor-Betriebssystemen sowie Gewährleistung der Betriebs- und Sicherheitsbedingungen der für die Verwaltung dieser Betriebssysteme erforderlichen Softwareinfrastruktur. Es ist hervorzuheben, dass, obwohl der Prestataire für die operative Wartung und allgemeine Sicherheit des Dienstes verantwortlich ist, er keine spezifischen Kenntnisse über die Produktionsumgebungen des COMMANDITAIRE oder die Anforderungen seiner Arbeitslasten besitzt. Daher liegt die Verantwortung für die Entscheidung über das Update der Hypervisor-Betriebssysteme, eine Aktion, die möglicherweise einen Neustart erfordert, vollständig beim COMMANDITAIRE. Diese Operation kann über die Interface COMMANDITAIRE durchgeführt werden.

Die Entscheidung über das Berechnungsblattmodell, das aus dem vom Prestataire angebotenen Katalog ausgewählt wird, obliegt dem COMMANDITAIRE.

### 7.2.4. Speicherinfrastruktur

Der Service umfasst die Bereitstellung einer SAN (Storage Area Network)-basierten geteilten Speicherinfrastruktur verschiedener Leistungsstufen für den COMMANDITAIRE. Dieser Service beinhaltet:

- Implementierung und Aufrechterhaltung der Betriebs- und Sicherheitsbedingungen des dedizierten SAN-Netzwerks;
- Installation und Verwaltung der gemeinsam genutzten Speicher-Bays, einschließlich ihrer Betriebs- und Sicherheitsbedingungen, Überwachung und Metrologie;
- Einrichtung automatisierter Systeme zur Zuweisung von LUNs (Logical Unit Numbers) für die vom COMMANDITAIRE gebuchten Speichervolumen.

### 7.2.5. Globale Netzwerkinfrastruktur

Der Prestataire implementiert im Rahmen des Dienstes ein globales Netzwerk, das es dem COMMANDITAIRE erleichtert, seine gehosteten Systeme verfügbar zu machen. Dieser Service beinhaltet:

- Die Bereitstellung, die operative Funktionsfähigkeit und die Sicherheit aller Glasfaserverbindungen, die die verschiedenen Verfügbarkeitszonen miteinander verbinden;

- Die Bereitstellung, die operative Funktionsfähigkeit und die Sicherheit der technischen Geräte, die für den ordnungsgemäßen Betrieb des Netzwerks und die Isolation der verschiedenen Kunden erforderlich sind.

Die Netzwerkverbindung des Auftraggebers COMMANDITAIRE zum Internet oder zu privaten Netzwerken sowie die Netzwerkequipment, Anbieterlinks und andere technische Komponenten, die diese Verbindung herstellen, sind nicht Teil des Serviceumfangs. Diese Netzwerkanbindung wird gemäß den im Vertrag vorgesehenen Bestimmungen umgesetzt.

### 7.2.6. Backup-Infrastruktur

Der Dienstleister stellt dem COMMANDITAIRE einen integrierten, dedizierten und verwalteten Backup-Service zur Verfügung, der zum Schutz seiner virtuellen Maschinen dient. Der Dienstleister gewährleistet die operative Funktionsfähigkeit und die Sicherheit dieses Backup-Services. Der Dienstleister garantiert, dass die Backups des COMMANDITAIRE außerhalb der Verfügbarkeitszone der zu sichernden Arbeitslasten gespeichert werden, sofern der COMMANDITAIRE die entsprechenden Einheiten abonniert hat.

Diese Backup-Dienstleistung beschränkt sich auf die Sicherung der virtuellen Maschinen und der Topologie-Konfigurationen der IaaS-Umgebung der Tenants des COMMANDITAIRE im Rahmen des Service. Die Erstellung und Umsetzung einer angemessenen Backup-Strategie durch den COMMANDITAIRE hängt vom Abonnement spezifischer Einheiten ab. Es liegt daher in der Verantwortung des COMMANDITAIRE, sicherzustellen, dass die notwendigen technischen Ressourcen des Dienstleisters zur Verfügung stehen, um seine Backup-Strategie umzusetzen oder sie an die verfügbaren Mittel anzupassen.

Der Dienstleister verpflichtet sich, den COMMANDITAIRE im Falle von Kapazitätsengpässen zu benachrichtigen und Beratungsunterstützung zur Optimierung der Ressourcen zu bieten. Die Verpflichtungen des Dienstleisters beschränken sich auf die Umsetzung der vom COMMANDITAIRE ausgedrückten Bedürfnisse in Bezug auf die Backup-Strategie im Rahmen der abonnierten Ressourcen.

### 7.2.7. Implementierung von Lösungen für die Geschäftskontinuität oder Katastrophenwiederherstellung

Der Dienstleister stellt dem COMMANDITAIRE alle technischen Lösungen zur Verfügung, die notwendig sind, um eine optimale Verteilung seiner Ressourcen über verschiedene Verfügbarkeitszonen hinweg zu gewährleisten. Es liegt in der Verantwortung des COMMANDITAIRE, diese Ressourcendistribution effektiv zu verwalten, wobei er die vom Dienstleister für diesen Zweck bereitgestellten Werkzeuge nutzen kann.

## 7.3. Einschränkungen der Dienstleistungen im qualifizierten IaaS-Modell

### 7.3.1. Gemanagte Dienstleistungen im Betrieb

Es ist wichtig zu beachten, dass folgende Dienstleistungen vom Service ausgeschlossen sind:

- Das Hosting physischer Komponenten des COMMANDITAIRE;

- Die Netzwerkverbindung des Auftraggebers COMMANDITAIRE zum Internet oder zu privaten Netzwerken, einschließlich der Anbieterlinks;

- Jegliche gemanagte Dienstleistung oder TMA;

- Jegliche Unterstützung auf der Betriebssystemebene der virtuellen Maschinen und darüber in der IaaS-Verantwortungskette, selbst wenn es sich nur um einfache Überwachung handelt.

Es ist jedoch keineswegs ausgeschlossen, dass der COMMANDITAIRE solche Dienstleistungen im Rahmen des MSP-Angebots des Dienstleisters in Anspruch nimmt, um in gemanagten Service-Modus auf seine Tenants zuzugreifen. Diese Dienstleistungen werden dann nicht durch diese Servicevereinbarung und ihre bilateralen Verpflichtungen/Klauseln geregelt.

### 7.3.2. Konfiguration der Notfallwiederherstellung

Standardmäßig stellt der Dienstleister dem COMMANDITAIRE die Implementierung der IaaS-Ressourcen bereit, indem er Ressourcen reserviert und die Bereitstellungen so konfiguriert, dass sie die Verfügbarkeitszonen nutzen. Es liegt in der Verantwortung des COMMANDITAIRE, die Verfügbarkeitszonen über die COMMANDITAIRE-Schnittstelle auszuwählen.

### 7.3.3. Konfiguration des Backups

Der Backup-Service beschränkt sich auf die Sicherung der virtuellen Maschinen und der Topologie-Konfigurationen, die die IaaS-Umgebung der Tenants des COMMANDITAIRE im Rahmen des Service darstellen.

Der Backup-Service und die Umsetzung der Backup-Strategie des COMMANDITAIRE unterliegt dem Abonnement von Speicherplatz auf dem notwendigen Massenspeicher, um den Service zu gewährleisten. Daher liegt es in der Verantwortung des COMMANDITAIRE, beim Dienstleister die notwendigen technischen Mittel zu abonnieren, um die Backup-Strategie in seinem IT-Bereich zu gewährleisten oder die Backup-Strategie an die bereitgestellten Mittel anzupassen. Der Dienstleister verpflichtet sich, den COMMANDITAIRE im Falle einer technischen Kapazitätsgrenze zu informieren.

Der Dienstleister wird die notwendigen technischen und personellen Mittel zur Verfügung stellen, um das gehostete System innerhalb der Grenzen der vom COMMANDITAIRE abonnierten Ressourcen zu sichern.

Für Bereiche, die nicht vom Dienstleister abgedeckt werden, obliegt es dem COMMANDITAIRE, seine eigene Backup-Strategie zu definieren und die Backups der VM selbst zu konfigurieren oder eine Servicerequest beim Dienstleister zu stellen, damit die Backup-Konfiguration für physische Server eingerichtet wird, sofern der COMMANDITAIRE über einen gemanagten Servicevertrag verfügt, der es dem Dienstleister ermöglicht, über die COMMANDITAIRE-Schnittstelle zu agieren, welche im Rahmen dieser Servicevereinbarung zur Verfügung gestellt wird und Funktionen zur Konfiguration der Backups enthält.

Zusätzlich hat dieser Service nur das Engagement, die klar vom COMMANDITAIRE spezifizierte Konfiguration durch die Konfiguration über die COMMANDITAIRE-Schnittstelle zu übersetzen.

Aus Gründen der Flexibilität des Dienstleister-Angebots hat der COMMANDITAIRE die Möglichkeit, eine Nicht-Backup-Richtlinie auf einige seiner VM anzuwenden. In diesem Fall liegt es in der Verantwortung des COMMANDITAIRE, diese Entscheidung zu übernehmen. Der Dienstleister wird die VM, die der Richtlinie "no backup" zugeordnet sind, nicht sichern. Der Dienstleister warnt den COMMANDITAIRE, dass die Wahl der Richtlinie "no backup" oder die Entscheidung, manuell zu sichern, den COMMANDITAIRE dem Risiko eines vollständigen Datenverlustes im Falle eines Vorfalls in den unteren Schichten oder in den Schichten, die unter seine Verantwortung im IaaS-Modell fallen, aussetzt. In einem solchen Fall ist es unmöglich, den Dienstleister für die Wiederherstellung der Daten verantwortlich zu machen, da es nichts zum Wiederherstellen gibt. Der Dienstleister empfiehlt, die VM stets zu sichern.

Für alle Themen, die das auf einer virtuellen Maschine installierte Betriebssystem betreffen, sowie alle darüber ausgeführten Software oder Programme, liegt es in der Verantwortung des COMMANDITAIRE, die Verwaltungs- und Überwachungsoperationen innerhalb der Europäischen Union durchzuführen, wenn er sicherstellen möchte, dass alle vertikalen Schichten des IT-Systems aus der Europäischen Union betrieben und verwaltet werden. Die Verwaltungsoperationen außerhalb des Verantwortungsbereichs des Dienstleisters im Rahmen dieser Servicevereinbarung sind im Abschnitt "Modell der geteilten Verantwortung" dieser Servicevereinbarung aufgeführt.

## 7.4. Implementierung des Service

### 7.4.1. Technische Voraussetzungen

Zur Implementierung des Service erkennt der COMMANDITAIRE an, dass er:

- Mit einer Virtualisierung vom Typ VMware in den vom Hersteller unterstützten und im Rahmen des Service vom Dienstleister bereitgestellten Versionen arbeiten muss;

- Über den Dienstleister das Backup-Tool verwenden muss;

- Feste IP-Adressen deklarieren muss, von denen aus der Dienstleister den Zugriff auf die COMMANDITAIRE-Schnittstelle erlauben wird (Whitelisting). Änderungen dieser IP-Liste müssen über Serviceanfragen erfolgen (Liste nicht über die Administrationsschnittstelle des Services verwaltbar).

## 7.5. Lokalisierung des Service in Frankreich

Es wird darauf hingewiesen, dass keine der Operationen und keine der physischen Komponenten, die an der Bereitstellung des Service beteiligt sind und Gegenstand dieser Servicevereinbarung sind, außerhalb der Europäischen Union liegen.

Dies schließt insbesondere die Unterstützung, die operative Überwachung und die Sicherheitsüberwachung (SOC) der technischen Infrastruktur ein, die den Service liefert. Folglich werden alle Speicher-, Verwaltungs-, Überwachungs- und Bearbeitungsaufgaben in Frankreich durchgeführt.

### 7.5.1. Standort der Datacenter, die den Service hosten

Mit Ausnahme der Operationen der Mitarbeiter und Agenturen des Dienstleisters befinden sich alle Betriebsoperationen (einschließlich der Speicherung und Verarbeitung von Daten) und technischen Komponenten, die den Service liefern, in den Datacentern in Frankreich.

### 7.5.2. Standort der Cloud Temple-Agenturen, die den Service betreiben

Die Mitarbeiter von Cloud Temple, die im Rahmen desService tätig sind, arbeiten ausschließlich von den Cloud Temple-Agenturen in Frankreich aus. Diese Agenturen befinden sich in Frankreich, in Tours, Lyon, Caen und Paris La Défense.

Der COMMANDITAIRE ist darüber informiert, dass den Mitarbeitern von Cloud Temple die Möglichkeit gegeben wird, remote zu arbeiten. Der Dienstleister garantiert jedoch das gleiche Sicherheitsniveau hinsichtlich des Fernzugriffs, insbesondere bezüglich der VPN-Zugänge. Diese Fernzugänge werden gemäß den Anforderungen des SecNumCloud-Referenzrahmens umgesetzt.

## 7.6. Support

### 7.6.1. Natur des den Service begleitenden Supports

Der Dienstleister bietet einen technischen Support-Service an, der den COMMANDITAIRE bei der Verwaltung, Fehlerbehebung und Optimierung ihrer bereitgestellten Ressourcen unterstützt. Dieser Service deckt ein breites Spektrum an Aktivitäten ab, von der Unterstützung bei der initialen Konfiguration der Dienstleistungen bis hin zur fortgeschrittenen technischen Unterstützung zur Lösung spezifischer Probleme.

Hier ist eine Beschreibung der Merkmale und Funktionen des Support-Services:

- Unterstützung bei der initialen Implementierung des Service;
- Unterstützung bei der Lösung von Vorfällen;
- Unterstützung bei der Problemlösung;
- Überwachung und Beratung zur Optimierung der technischen Basis.

Dans dem Rahmen des Supportdienstes ersetzt der Dienstleister den AUFTRAGGEBER nicht in der Nutzung des Dienstes. Der AUFTRAGGEBER bleibt vollständig verantwortlich für die Konfiguration, den Betrieb seiner VMs und seiner Tenants sowie für die Verwaltung aller Elemente (einschließlich Daten und Anwendungen), die er auf der Infrastruktur des Dienstleisters gespeichert oder installiert hat. Der technische Supportdienst wird gemäß den Allgemeinen Verkaufs- und Nutzungsbedingungen bereitgestellt, wobei der Dienstleister lediglich zu einer Bemühenspflicht verpflichtet ist.

Der AUFTRAGGEBER verpflichtet sich, den technischen Supportdienst vernünftig zu nutzen, insbesondere davon abzusehen, nicht abonnierte Dienstleistungen direkt vom Dienstleister anzufordern und die Teams des Dienstleisters bei seinen eigenen Kunden oder Dritten, die nicht im Vertrag enthalten sind, einzusetzen. Der Dienstleister behält sich das Recht vor, jede Serviceanfrage abzulehnen, die nicht diesen Kriterien entspricht.

Das Support-Engagement hängt von der Abonnierung der zugehörigen Supporteinheiten ab.

### 7.6.2. Nutzung des technischen Supports

Der technische Support ist über ein Ticketsystem über die AUFTRAGGEBER-Konsole zugänglich und während der normalen Bürozeiten außer an Feiertagen verfügbar (8 Uhr - 18 Uhr; Montag - Freitag; französischer Kalender und Zeiten). Für außerhalb der regulären Arbeitszeiten auftretende Notfälle, insbesondere Vorfälle, die die Produktion erheblich beeinträchtigen, kann der Bereitschaftsdienst über eine dem AUFTRAGGEBER bei der Serviceinitialisierung mitgeteilte Nummer erreicht werden.

Für jede Anfrage oder jeden Vorfall ist es unabdingbar, ein Ticket beim Support des Dienstleisters zu erstellen. Die Initialisierung dieses Tickets, das alle notwendigen Informationen enthält, ist unerlässlich und markiert den Beginn der Bewertung der Verpflichtungen des Dienstleisters.

Sobald der Dienstleister eine Anfrage oder eine Vorfallsmeldung erhält, sei es über die Verwaltungskonsole oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Meldung eines Vorfalls ist es wichtig, dass der AUFTRAGGEBER dem Dienstleister so viele Details wie möglich über das Problem mitteilt. Diese Maßnahme ist entscheidend, um eine angemessene Bewertung der Situation, ihre Priorisierung und eine effektive Diagnose zu ermöglichen.

Der Kunde erhält darauf eine Bestätigung per E-Mail, die die Erstellung des Tickets und dessen eindeutige Nummer angibt. Der AUFTRAGGEBER kann den Status und die Historie seiner Anfragen und Vorfallmeldungen direkt über die Verwaltungskonsole einsehen.

### 7.6.3. Vorfallmanagement Prozess

Bei der Meldung eines Vorfalls beginnt das technische Supportteam des Dienstleisters eine Untersuchung, um die Ursache des Problems zu identifizieren und eine Diagnose zu stellen. Der Kunde muss aktiv mit dem Dienstleister zusammenarbeiten, alle erforderlichen Informationen liefern und die notwendigen Tests durchführen. Der Dienstleister kann auf den Dienst des Kunden zugreifen, um den Vorfall zu diagnostizieren.

Wenn die Dienste des Dienstleisters als funktional bewertet werden und der Vorfall ihm nicht zuzuschreiben ist, wird der Kunde darüber informiert. Auf Anfrage des Kunden kann der Dienstleister professionelle Dienstleistungen zur Identifizierung der Problemursache anbieten, die nach vorheriger Vereinbarung in 30-Minuten-Schritten abgerechnet werden.

Falls der Vorfall in der Verantwortung des Dienstleisters oder eines seiner Unterauftragnehmer liegt, vervollständigt dieser die Diagnose und stellt den Dienst kostenlos wieder her. Die Diagnose basiert auf dem Austausch zwischen den Parteien und den Daten des Dienstleisters, wobei diese Elemente durch eine Vereinbarung der Parteien als beweiskräftig angesehen werden.

### 7.6.4. Priorisierungsprozess der Bearbeitung

Die Bestimmung des Prioritätsniveaus eines Falles basiert auf einer Matrixanalyse, die die Auswirkung des Vorfalls und dessen Kritikalitätsgrad bewertet:

-   Die Auswirkungensebenen werden wie folgt definiert:

| Auswirkungensebene | Beschreibung                                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Auswirkung I1      | Der oder die Dienste des Dienstleisters sind unterbrochen                                                              |
| Auswirkung I2      | Der oder die Dienste des Dienstleisters sind verschlechtert                                                            |
| Auswirkung I3      | Der oder die Dienste des Dienstleisters sind derzeit stabil, zeigen aber Anzeichen eines potenziellen Rückgangs auf lange Sicht |

-   Die Kritikalitätsstufen werden wie folgt definiert:

| Kritikalitätsstufe | Beschreibung                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Kritikalität C1    | Der oder die Dienste des Dienstleisters verschlechtern sich mit besorgniserregender Geschwindigkeit      |
| Kritikalität C2    | Der oder die Dienste des Dienstleisters verschlechtern sich allmählich im Laufe der Zeit                 |
| Kritikalität C3    | Der oder die Dienste des Dienstleisters weisen einen oder mehrere Unannehmlichkeiten ohne wesentliche Folgen auf |

-   Basierend auf einer umfassenden Analyse der Situation, die die Elemente zur Bestimmung der Auswirkung und der Kritikalität berücksichtigt, wird dem Ticket eine Priorität gemäß der folgenden Entscheidungsmatrix zugewiesen:

| Auswirkungensebene <br/> \ Kritikalitätsstufe | Auswirkung I1       | Auswirkung I2       | Auswirkung I3       |
| --------------------------------------------- | ------------------- | ------------------- | ------------------- |
| Kritikalität C1                               | Priorität **P1**    | Priorität **P2**    | Priorität **P3**    |
| Kritikalität C2                               | Priorität **P2**    | Priorität **P3**    | Priorität **P4**    |
| Kritikalität C3                               | Priorität **P3**    | Priorität **P4**    | Priorität **P5**    |

Die Service-Level-Verpflichtungen für jede Prioritätsstufe werden im nächsten Kapitel detailliert beschrieben.

### 7.6.5. Sprache und Standort des Supportdienstes

Der Support wird vom Dienstleister dem AUFTRAGGEBER mindestens in französischer Sprache bereitgestellt. Der Support kann auch in englischer Sprache bereitgestellt werden.

Die Supportdienstleistungen des Dienstleisters für das qualifizierte SecNumCloud Infrastrukturangebot befinden sich in der Europäischen Union.

# 8. Serviceverpflichtungen und Service Level

Der Dienstleister verpflichtet sich, eine kontinuierliche Überwachung der Leistung und der Sicherheitsintegrität seiner technischen Infrastruktur zu gewährleisten, um deren optimalen Betrieb sicherzustellen.

Die Nichtverfügbarkeit eines Dienstes, die durch einen Leistungsindikator gemeldet wird, wird ab dem Zeitpunkt erkannt, an dem sie vom Überwachungssystem des Dienstleisters oder nach einer Benachrichtigung durch einen Benutzer des AUFTRAGGEBERS identifiziert wird. Der Beginn der Nichtverfügbarkeit wird zu dem frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um eine genaue und faire Zählung der Ausfallzeit zu gewährleisten.

Das Ende der Nichtverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, bestätigt entweder durch die Überwachungstools des Dienstleisters oder durch eine Rückmeldung des Benutzers, die eine effektive Wiederaufnahme der Operationen und eine genaue Messung der Dauer der Unterbrechung sicherstellt.

## 8.1. Infrastrukturverfügbarkeitsverpflichtungen

Der Dienstleister verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau aufrechtzuerhalten, das den für jede spezifizierte Periode definierten Standards entspricht. Die Service Level Agreements (SLAs) gelten unter der Voraussetzung, dass der AUFTRAGGEBER seine Systeme über mindestens zwei der in der betreffenden Region vorhandenen Verfügbarkeitszonen implementiert.

Wenn der AUFTRAGGEBER diese Bedingungen nicht erfüllt,
kann er nicht die Anwendung der betreffenden
SLAs, die durch ein Sternchen (\*) speziell gekennzeichnet sind, beanspruchen. Der Zugriff auf die SLAs erfolgt über die
AUFTRAGGEBER-Schnittstelle. Die Messungen werden monatlich berechnet:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Verfügbarkeit der Rechenleistung (Compute): garantierte Verfügbarkeit von 99,99 %, berechnet auf einer 24/7-Basis.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Speicherverfügbarkeit: garantierte Verfügbarkeit von 99,99 %, berechnet auf einer 24/7-Basis.
- **SLA 3     : IC-INFRA_SNC-03** – Zuverlässigkeit der Sicherung: garantierte Verfügbarkeit von 99,99 %, berechnet auf einer 24/7-Basis.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Netzwerkverfügbarkeit der Infrastruktur: garantierte Verfügbarkeit von 99,99 %, berechnet auf einer 24/7-Basis.
- **SLA 5     : IC-INFRA_SNC-05** – Internetzugang: garantierte Verfügbarkeit von 99,99 %, berechnet auf einer 24/7-Basis.

_**Hinweise**_ : 

- *Als Reaktion auf einen Distributed Denial-of-Service (DDoS) Angriff behält sich der Dienstleister das Recht vor, seine Internet-Routing-Konfiguration anzupassen, um 
den Einfluss des Angriffs zu begrenzen und seine Infrastruktur zu schützen. Insbesondere, wenn eine dem AUFTRAGGEBER gehörende IP-Adresse angegriffen wird, kann der Dienstleister die Technik des Blackholing über die BGP-Community anwenden, um den gesamten Verkehr zur angegriffenen IP-Adresse im Vorfeld bei seinen Anbietern zu blockieren, um die Ressourcen des AUFTRAGGEBERS sowie die anderer AUFTRAGGEBER und die Infrastruktur des Dienstleisters zu schützen. Der Dienstleister empfiehlt dem AUFTRAGGEBER dringend, ähnliche Maßnahmen zu ergreifen, wie die Nutzung verfügbarer Web Application Firewall-Software und die sorgfältige Konfiguration seiner Sicherheitsgruppen über die API des Dienstleisters.*
- *Der Dienstleister betont die Notwendigkeit für den AUFTRAGGEBER, die Flussöffnungen zu minimieren und insbesondere die Verwaltungsports **SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389) nicht für das gesamte Internet (Subnetz 0.0.0.0/0) zugänglich zu machen, sowie interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049) zu vermeiden.*

## 8.2. Verfügbarkeitszusage der AUFTRAGGEBER-Schnittstelle

-   SLA 6 : IC-INFRA_SNC-06 -- Zugriff auf die Verwaltungskonsole des Dienstes: eine garantierte Verfügbarkeit von 97%, rund um die Uhr, 24 Stunden am Tag und 7 Tage die Woche.
-   SLA 7 : IC-INFRA_SNC-07 -- Zugriff auf die APIs zur Steuerung des Dienstes: eine Verfügbarkeit von 99.9%, berechnet auf Basis von 24h/24, 7j/7.

## 8.3. Verfügbarkeitszusage des Supports 

- **SLA 8      : IC-INFRA_SNC-08** – Hier sind die Leistungszusagen des technischen Supports des Dienstleisters für Vorfälle, mit Ausnahme geplanter Wartungen:

| Priorität        | Garantie der Eingriffszeit (GTI)       | Leistungsziel         |
| --------------- | -------------------------------------- | --------------------- |
| Priorität **P1** | 30 Minuten                             | 95%                   |
| Priorität **P2** | 2 Stunden                              | 90%                   |
| Priorität **P3** | 4 Stunden                              | 90%                   |
| Priorität **P4** | 24 Stunden                             | 85%                   |
| Priorität **P5** | 48 Stunden                             | 85%                   |

- **SLA 9      : IC-INFRA_SNC-09** – Hier sind die Leistungszusagen des technischen Supports des Dienstleisters für Serviceanfragen:

|                    | Garantie der Eingriffszeit (GTI)       | Leistungsziel         |
| ------------------ | -------------------------------------- | --------------------- |
| Serviceanfrage     | 4 Stunden                              | 90%                   |

*Hinweis:*

- *Das Eingriffszeit-Garantie (GTI) wird anhand der Differenz zwischen dem Zeitpunkt berechnet, zu dem der AUFTRAGGEBER ein Ticket eröffnet und dem ersten Eingriff des Dienstleistersupports.*
- *Die Untersuchung von Vorfällen bezüglich des AUFTRAGGEBER umfasst keine Fernwartung auf den gehosteten Servern des AUFTRAGGEBER. Diese Unterstützung wird sich auf die Erläuterung der verfügbaren Metriken in Bezug auf die Umgebung des AUFTRAGGEBER beschränken, um das Verständnis der aufgetretenen Vorfälle oder Leistungsprobleme zu erleichtern. Basierend auf den Ergebnissen dieser Analyse können Empfehlungen vorgeschlagen werden.*

## 8.4. Verfügbarkeitszusage des Objektspeichers S3

- **SLA 10      : IC-INFRA_SNC-10** – Hier sind die Verfügbarkeitszusagen für den Objektspeicher S3:

| Indikator        | Zusage                                            | Verfügbarkeitsziel    |
| ----------------- | ------------------------------------------------- | --------------------- |
| IC-INFRA-SNC-10.1 | Haltbarkeit der Speicherung eines Objekts in einer Region | 99.9999999% / Jahr    |
| IC-INFRA-SNC-10.2 | Verfügbarkeit der S3-Objekspeicher-API           | 99.99%                |
| IC-INFRA-SNC-10.3 | Maximale Zugriffslatenz auf ein Objekt in einer Region | 150 ms                |

Hinweise:

- Der Objektspeicherdienst ist speziell für die Objektspeicherung konzipiert und darf ausschließlich dafür verwendet werden, **der Blockmodus ist strengstens ausgeschlossen**. Die Verwendung des Blockmodus durch Umgehungsmethoden, wie zum Beispiel durch die Nutzung von *"FUSE" in einer Linux-Umgebung*, stellt einen Verstoß gegen die festgelegten Nutzungsbedingungen dar. Jeglicher Vorfall, Funktionsstörung oder Schaden, der aus dieser nicht konformen Nutzung resultiert, wird von den in diesem Servicevertrag definierten Service Level Agreements (SLA) nicht abgedeckt.
- Die Haltbarkeitsgarantie ist an die Einhaltung aktueller Best Practices und Standards gebunden und schließt ausdrücklich jegliche Änderung der Daten, sei sie absichtlich oder versehentlich, durch Handlungen des AUFTRAGGEBER aus.

## 8.5. Präzisierung bezüglich der Backup-Zusage

Die für den AUFTRAGGEBER bereitgestellte Backup-Strategie ist abhängig vom Abonnement der entsprechenden Leistungseinheiten.

Der Dienstleister verpflichtet sich zur Bereitstellung einer Backup-Lösung, die es dem AUFTRAGGEBER ermöglicht, die gewünschten Backup-Richtlinien anzuwenden.

Es wird klargestellt, dass der Aufgabenbereich des Dienstleisters bei der Bereitstellung eines Backup-Services endet und es dem AUFTRAGGEBER obliegt, die ordnungsgemäße Ausführung der zugehörigen Richtlinien über die AUFTRAGGEBER-Schnittstelle zu überwachen.

Es wird klargestellt, dass das Management der Speicherkapazitäten des für Backups zugewiesenen Speicherplatzes in der Verantwortung des AUFTRAGGEBER liegt. Der Dienstleister stellt die Nutzung über die Konsole zur Verfügung.

*Beispiel: Kein Backup einer virtuellen Maschine:*

*Der AUFTRAGGEBER ist verantwortlich für die Überprüfung/Überwachung der ordnungsgemäßen Ausführung der Backup-Richtlinien. Im Falle, dass der AUFTRAGGEBER feststellt, dass eine virtuelle Maschine nicht gesichert wird, obliegt es ihm, die Ursache zu ermitteln. Der AUFTRAGGEBER kann den Support des Dienstleisters gemäß dem abonnierten Supportlevel zur Unterstützung anfordern.*

**Der SLA 8 : IC-INFRA_SNC-08 und SLA 9** sind ausschließlich im Falle eines Backup-Servicevorfalls anwendbar.

# 9. Organisation der Vertragsbeziehung

## 9.1. Verantwortlichkeiten des Dienstleisters

Der Dienstleister verpflichtet sich:

- den AUFTRAGGEBER angemessen zu informieren (zum Beispiel im Falle von Kapazitätsgrenzen technischer Ressourcen, die den Dienst bereitstellen).

- den AUFTRAGGEBER formell und innerhalb eines Monats über jede Änderung rechtlicher, organisatorischer oder technischer Natur zu informieren, die die Konformität des Dienstes mit den Anforderungen des Schutzes vor außer-europäischem Recht beeinträchtigen könnte (19.6 des Referenzrahmen SNC v3.2).

- dem AUFTRAGGEBER Schnittstellen und Service-Schnittstellen mindestens in deutscher Sprache bereitzustellen.

- die spezifischen sektoralen Anforderungen in Bezug auf die vom AUFTRAGGEBER im Rahmen der Diensterbringung anvertrauten Informationsarten zu berücksichtigen, soweit diese in den Verantwortungsbereich des Dienstleisters fallen.

- keine Informationen über die Leistung an Dritte weiterzugeben, außer mit formeller und schriftlicher Genehmigung des AUFTRAGGEBER.

- alle notwendigen Informationen für die Durchführung von Konformitätsprüfungen gemäß den Bestimmungen des Artikels 28 der DSGVO bereitzustellen.

- dem AUFTRAGGEBER im Rahmen dieser Servicevereinbarung über alle Sicherheitsvorfälle, die den Dienst oder deren Nutzung durch den AUFTRAGGEBER (einschließlich der Daten des AUFTRAGGEBER) beeinträchtigen, zu berichten.

- einem qualifizierten Dienstleister für die Sicherheit von Informationssystemen (PASSI), der vom Dienstleister beauftragt wurde, zu gestatten, den Dienst sowie dessen Informationssystem zu überprüfen, in Übereinstimmung mit dem Kontrollplan des SecNumCloud des Dienstleisters. Darüber hinaus verpflichtet sich der Dienstleister, alle notwendigen Informationen bereitzustellen, um die Konformitätsprüfungen gemäß den Bestimmungen des Artikels 28 der DSGVO zu ermöglichen, die vom AUFTRAGGEBER oder einem beauftragten Dritten durchgeführt werden.

- als Auftragsverarbeiter gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) Unterstützung und Beratung des AUFTRAGGEBER zu leisten und diesen zu warnen, falls eine von ihm erteilte Anweisung gegen Datenschutzregeln verstößt.

- den AUFTRAGGEBER schriftlich zu benachrichtigen, wenn ein Projekt die Sicherheit des Dienstes überhaupt oder möglicherweise beeinträchtigt, und über mögliche Auswirkungen, die ergriffenen Minderungsmaßnahmen sowie die verbleibenden Risiken zu informieren.

- alle erforderlichen Verfahren zur Einhaltung der gesetzlichen, regulatorischen und vertraglichen Anforderungen, die auf den Dienst anwendbar sind, sowie der spezifischen Sicherheitsanforderungen des AUFTRAGGEBER, die von diesem definiert und im Vertrag festgelegt wurden, zu dokumentieren und umzusetzen. Auf Anfrage des AUFTRAGGEBER ermöglicht das Dokumentationsmodul der AUFTRAGGEBER-Schnittstelle den sicheren Austausch dieser Dokumente.

- auf Anfrage des AUFTRAGGEBER die Einschätzung der Risiken bezüglich der Unterordnung der Daten des AUFTRAGGEBER unter das Recht eines Nicht-EU-Mitgliedsstaates bereitzustellen.


Auf formelle und schriftliche Anfrage des AUFTRAGGEBER verpflichtet sich der Dienstleister:

1. Dem AUFTRAGGEBER die interne Regelung und die Ethik-Charta des Dienstleisters zugänglich zu machen;

2. Dem AUFTRAGGEBER die Sanktionen im Falle eines Verstoßes gegen die Sicherheitsrichtlinie zugänglich zu machen;

3. Dem AUFTRAGGEBER alle Ereignisse, die ihn betreffen, in den Protokolleinträgen des Dienstes bereitzustellen;

4. Am Ende des Vertrags verpflichtet sich der Dienstleister, die Daten und technischen Daten des AUFTRAGGEBER gemäß dem in dieser Servicevereinbarung beschriebenen "Datenlöschverfahren am Ende des Vertrags" zu löschen.

5. eine sichere Löschung sämtlicher Daten des AUFTRAGGEBER durch vollständiges Überschreiben aller Medien vorzunehmen, die seine Daten im Rahmen des Dienstes gehostet haben.

6. die vollständige Liste der Dritten bereitzustellen, die Zugriff auf die Infrastrukturen haben, auf denen die Daten gespeichert werden.
Der Dienstleister wird eine aktuelle und vollständige Liste der Dritten, die berechtigt sind, auf die Infrastrukturen, die die Daten enthalten, zuzugreifen, führen und dem AUFTRAGGEBER zur Verfügung stellen, wobei dieser über alle Änderungen bezüglich der Unterauftragnehmer informiert wird. Der Dienstleister und alle seine Tochtergesellschaften verpflichten sich, die Grundwerte der Europäischen Union, nämlich die menschliche Würde, die Freiheit, die Demokratie, die Gleichheit, den Rechtsstaat und die Achtung der Menschenrechte, zu respektieren. Der vom Dienstleister bereitgestellte Service entspricht den geltenden gesetzlichen Bestimmungen zu Grundrechten und den Werten der Europäischen Union hinsichtlich der Achtung der menschlichen Würde, der Freiheit, der Gleichheit, der Demokratie und des Rechtsstaats.

## 9.2. Haftungsbeschränkungen des Dienstleisters

Aufgrund der in dieser Servicevereinbarung genannten Definitionen und Bedingungen gelten folgende Haftungsbeschränkungen für den Dienstleister:

1. Das Modell der geteilten Verantwortung, wie in der Abschnitt „Modell der geteilten Verantwortung“ dieser Servicevereinbarung beschrieben, begrenzt die Beteiligung des Dienstleisters auf die Bereitstellung von Rechen-, Netzwerk-, Speicher- und Sicherungsressourcen. Dies schließt insbesondere, aber nicht ausschließlich aus:

    -   Die Verwaltung dessen, was auf den virtuellen Maschinen installiert ist (Betriebssysteme, Middleware, Anwendungen usw.);
    
    -   Die Aktualisierung der Betriebssysteme und anderer vom AUFTRAGGEBER auf seinen Maschinen in seinen Tenants installierter Software;
    
    -   Die Sicherheit der auf den virtuellen Maschinen installierten Programme, Software und Anwendungen;
    
    -   Die Aktualisierung der virtuellen Maschinen;
    
    -   Die Sicherung der Daten auf Anwendungsniveau.

2. Der Dienstleister kann keine Sicherungsverpflichtungen für die Tenants des AUFTRAGGEBERS eingehen, ohne dass der AUFTRAGGEBER zuvor die entsprechenden Leistungseinheiten abonniert hat.

3. Der Dienstleister kann das Eigentum an den vom AUFTRAGGEBER übermittelten und generierten Daten nicht beanspruchen. Diese Daten gehören nämlich dem AUFTRAGGEBER.

4. Der Dienstleister weist darauf hin, dass er die vom AUFTRAGGEBER übermittelten und generierten Daten in keinem Fall ohne vorherige Zustimmung des AUFTRAGGEBERS nutzen kann.

5. Der Dienstleister übernimmt keine Verantwortung für die vom Dienstleister physisch gehosteten und verwalteten Komponenten, die dem AUFTRAGGEBER oder einem Dritten, mit dem der AUFTRAGGEBER einen Vertrag abgeschlossen hat, direkt gehören. Das Hosting von physischen Komponenten der Kunden ist nicht Teil des Services und wird daher nicht durch diese Servicevereinbarung abgedeckt. Es liegt in der Verantwortung des AUFTRAGGEBERS, das Maß der Abhängigkeit oder Einbindung dieser Komponenten in Bezug auf den zertifizierten SecNumCloud IaaS-Service zu bewerten.

## 9.3. Zugriffsbeschränkung

Im Rahmen des Services ist es dem Dienstleister formell untersagt, ohne vorherige Genehmigung auf die Tenants, die dem AUFTRAGGEBER gehören, zuzugreifen. Es liegt in der Verantwortung des AUFTRAGGEBERS, dem Personal des Dienstleisters die erforderlichen Zugriffe zu gewähren, je nach den spezifischen Bedürfnissen des Hostings und gegebenenfalls des professionellen Supports, falls diese Option vom AUFTRAGGEBER gewählt wurde.

Der AUFTRAGGEBER erkennt an, dass diese Zugriffe ausschließlich für die im Servicevertrag vereinbarten Dienstleistungen gewährt werden, um eine sichere und vertragskonforme Verwaltung zu gewährleisten.

Der Fernzugriff durch Dritte, die an der Dienstleistung des Dienstleisters beteiligt sind, ist strengstens untersagt. Falls eine spezifische technische Anforderung einen solchen Zugriff erfordert, kann dieser nur nach klarer Benachrichtigung des AUFTRAGGEBERS, detaillierter Begründung und schriftlicher Zustimmung eingerichtet werden.

Diese Maßnahme gewährleistet die Kontrolle und Sicherheit der Daten des AUFTRAGGEBERS, indem gewährleistet wird, dass jede Ausnahme von der Regel ordnungsgemäß genehmigt und dokumentiert ist.

## 9.4. Verantwortlichkeiten der an der Bereitstellung des Service Secure Temple beteiligten Drittparteien

Der Dienstleister kontrolliert die Liste der Drittpartner, die an der Bereitstellung des Services beteiligt sind. Diese Drittparteien sind die Herausgeber, Dienstleister (des Dienstleisters) und anderen Lieferanten, die zur Bereitstellung des Services beitragen. Der Dienstleister wendet folgende Maßnahmen auf diese Drittparteien an:

-   Der Dienstleister verlangt von den Drittparteien, die an der Implementierung des Services mitwirken, dass sie in ihrem Beitrag zum Service ein Sicherheitsniveau gewährleisten, das mindestens dem entspricht, das er in seiner eigenen Sicherheitsrichtlinie für den sicheren Tempel anwendet;

-   Der Dienstleister schließt mit jeder der an der Implementierung des Services beteiligten Drittparteien Auditklauseln ab, die es einem Qualifizierungsorgan ermöglichen, zu überprüfen, ob diese Drittparteien die gesetzlichen Anforderungen und die SNC-Anforderungen erfüllen, wodurch der Dienstleister seine Verpflichtungen aus dieser Servicevereinbarung erfüllen kann.

-   Der Dienstleister implementiert ein Verfahren zur regelmäßigen Überprüfung der von den an der Implementierung des Services beteiligten Drittparteien umgesetzten Maßnahmen, um sicherzustellen, dass diese Anforderungen erfüllt werden und der Dienstleister seine Verpflichtungen aus dieser Servicevereinbarung einhalten kann.

-   Der Dienstleister implementiert ein Verfahren zur Nachverfolgung von Änderungen, die von den an der Implementierung des Services beteiligten Drittparteien durchgeführt werden und die das Sicherheitsniveau des Informationssystems des Services beeinträchtigen könnten.

## 9.5. Verantwortlichkeiten und Pflichten des AUFTRAGGEBERS

Zur Erinnerung: Der Dienstleister stellt dem AUFTRAGGEBER eine Plattform zur Ausführung von virtuellen Maschinen zur Verfügung, deren Konfiguration in der Verantwortung des AUFTRAGGEBERS liegt. Jede virtuelle Maschine kann ohne eine zugehörige Sicherungsrichtlinie nicht funktionieren. Der Dienstleister definiert über seine Schnittstellen automatische Sicherungsrichtlinien. Es liegt jedoch in der Verantwortung des AUFTRAGGEBERS, diese Sicherungsrichtlinien zu aktivieren und somit die virtuellen Maschinen zu aktivieren.

Der AUFTRAGGEBER autorisiert die ANSSI und die SNC-Qualifizierungsstelle, den Service und die technische Infrastruktur, die den Service bereitstellt, zu prüfen.

## 9.6. Rechte des AUFTRAGGEBERS

Der AUFTRAGGEBER kann zu jeder Zeit während der vertraglichen Beziehung beim ANSSI eine Beschwerde über den qualifizierten Dienst einreichen.

Der AUFTRAGGEBER kann jederzeit den Dienstleister auffordern, ihm seine internen Vorschriften und seine Ethik-Charta zur Verfügung zu stellen.

## 9.7. Datenlöschung am Ende des Vertrags

Am Ende des Vertrags, sei es durch Ablauf oder Kündigung aus irgendeinem Grund, verpflichtet sich der Dienstleister, alle Daten des AUFTRAGGEBERS, einschließlich technischer Daten, sicher zu löschen. Der Dienstleister wird dem AUFTRAGGEBER eine formelle Mitteilung mit einer Frist von einundzwanzig (21) Kalendertagen zukommen lassen. Die Daten des AUFTRAGGEBERS werden dann innerhalb einer maximalen Frist von dreißig (30) Tagen nach dieser Benachrichtigung gelöscht.

Um diese Löschung zu bestätigen, wird der Dienstleister dem AUFTRAGGEBER ein Zertifikat zur Bestätigung der Datenlöschung übergeben.

# 10. Lebenszyklus dieser Servicevereinbarung

## 10.1. Inkrafttreten der Servicevereinbarung

Diese Servicevereinbarung tritt am Tag ihrer Unterzeichnung durch den AUFTRAGGEBER in Kraft.

Die Erhebung, Verarbeitung, Speicherung und Handhabung der Daten im Zusammenhang mit dem Vorverkauf, der Implementierung und der Beendigung des Services erfolgt gemäß den geltenden gesetzlichen Bestimmungen.

## 10.2. Weiterentwicklungen der Servicevereinbarung

Änderungen oder Ergänzungen dieser Servicevereinbarung erfolgen ausschließlich auf Anfrage der dafür vorgesehenen Governance-Organe. Diese Änderungsvorschläge werden von den Parteien geprüft, die berechtigt sind, die Aspekte zu bestimmen, die eine schriftliche Formalisierung erfordern.

Es wird vereinbart, dass jede nach Genehmigung vorgenommene Änderung der Servicevereinbarung, die die ursprünglich festgelegten finanziellen Bedingungen verändert, die Erstellung und Unterzeichnung eines Nachtrags zum laufenden Vertrag erfordert.

Faktoren, die eine Überarbeitung dieser Servicevereinbarung erforderlich machen können, schließen unter anderem ein:

-   Die Weiterentwicklung der technischen Infrastruktur, die den IaaS-Service liefert;
-   Anpassungen der vom Dienstleister bereitgestellten Dienste zur Servicebereitstellung;
-   Variationen der eingegangenen Verpflichtungen und anwendbaren Sanktionen;
-   Organisatorische Neuausrichtungen innerhalb des AUFTRAGGEBERS oder des Dienstleisters;
-   Die Erweiterung oder Verringerung des Anwendungsbereichs des Services.

Das Versionen- und Revisionsmanagement der Servicevereinbarung wird im Vorwort des Dokuments festgehalten, um die Nachverfolgung zu erleichtern.

### 10.2.1. Vom AUFTRAGGEBER ausgelöste Weiterentwicklungen

Die Weiterentwicklungen der Servicevereinbarung können insbesondere ihren Ursprung haben in:

-   Einer Weiterentwicklung der vom Dienstleister verwalteten Infrastruktur;

-   Einer Änderung der vom Dienstleister implementierten Dienste;

-   Einer Änderung der vom Dienstleister angebotenen Service Level Agreements.

### 10.2.2. Vom Dienstleister ausgelöste Weiterentwicklungen

Jede Änderung der Servicevereinbarung bedarf der Zustimmung des AUFTRAGGEBERS. Es wird verstanden, dass jede genehmigte Änderung oder Ergänzung, die die finanziellen Aspekte des Vertrags ändert, die Unterzeichnung eines Nachtrags zu diesem Vertrag erfordern kann.

## 10.3. Reversibilität

Des Weiteren verpflichtet sich Cloud Temple, eine Überprüfung dieser Servicevereinbarung (einschließlich ihrer Kündigung) ohne Strafzahlung für den AUFTRAGGEBER im Falle des Verlusts der SecNumCloud-Qualifizierung zu ermöglichen.
Die Dienstleistungen umfassen keine Verpflichtung zur Rückführbarkeit (d. h. Unterstützung des Kunden bei der Migration seines Systems zu einem anderen Anbieter), mit Ausnahme der Bereitstellung durch den Auftragnehmer der Auftraggeber-Schnittstelle, die es dem Auftraggeber ermöglicht, seine Daten einschließlich der Konfigurationsdaten seines Informationssystems zu sichern und wiederherzustellen, und zwar über eine der vom Auftraggeber gewählten technischen Methoden: entweder durch Bereitstellung von Dateien in einem oder mehreren dokumentierten und außerhalb des vom Auftragnehmer erbrachten Dienstes nutzbaren Formaten oder durch Einrichtung technischer Schnittstellen, die den Zugang zu den Daten gemäß einem dokumentierten und nutzbaren Schema ermöglichen (API).

Der Auftraggeber, alleiniger Herr seines Systems, muss alles tun, um diese Operation so gut wie möglich zu erleichtern (was insbesondere bedeutet, dass er eine rigorose Dokumentation zu diesem Zweck erstellt) und Rückführungspläne erstellt. Falls der Auftraggeber eine zusätzliche Dienstleistung benötigt, kann der Auftragnehmer eine Beratungsmission in diesem Zusammenhang im Rahmen eines spezifisch zu verhandelnden Vertrags anbieten.

# 11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes

## 11.1. Incident- und Unterbrechungsmanagement

### 11.1.1. Zwischenfälle

#### 11.1.1.1. Arten von Zwischenfällen, die im Rahmen dieses Service Level Agreements behandelt werden

-   Schäden

-   Ausfälle und Störungen

-   Sicherheitszwischenfälle:

-   Die die Verfügbarkeit des Dienstes beeinträchtigen

-   Die die Vertraulichkeit des Dienstes beeinträchtigen

-   Die die Integrität des Dienstes beeinträchtigen

#### 11.1.1.2. Behandlung von Zwischenfällen

-   Fristen

-   Nachträgliche Maßnahmen

-   Archivierung der Dokumente, die die Sicherheitszwischenfälle beschreiben.

-   Meldung von Verletzungen personenbezogener Daten (online): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Meldestufe der Sicherheitszwischenfälle

Der Auftraggeber ist verantwortlich für die Auswahl der Schweregrade der Sicherheitszwischenfälle, über die er informiert werden möchte, zum Beispiel durch deren Formalisierung in einem für den Service geltenden PAS.

Standardmäßig wird der Auftraggeber informiert:

-   Über Sicherheitszwischenfälle mit Auswirkungen (Auswirkungen I1 und I2 gemäß der im Priorisierungsprozess dieser Service Level Agreement festgelegten Wirkungsskala);

-   Über Verstöße gegen personenbezogene Daten, für die der Auftraggeber verantwortlich ist;

-   Über Verstöße gegen personenbezogene Daten, für die der Auftragnehmer verantwortlich ist, und die personenbezogene Daten des Auftraggebers enthalten.

## 11.2. Wartung des Dienstes

### 11.2.1. Art der Wartung

Die durchgeführte Wartung besteht in der Umsetzung:

-   Des Plans zur Aufrechterhaltung der operativen Bedingungen des Dienstes zur Sicherstellung guter Verfügbarkeitsindikatoren, wie sie der Auftragnehmer oben angegeben hat;

-   Des PCA/PRA-Plans, falls vom Auftraggeber abonniert, der gemäß den eventuell auftretenden Zwischenfällen ausgelöst wird.

### 11.2.2. Fernzugriffe von Cloud Temple auf das Gebiet des Auftraggebers

Der Auftragnehmer verpflichtet sich im Rahmen dieses Service Level Agreements, keinen Zugang zu den Tenants und dem Schnittstellenbereich des Auftraggebers zu gewähren.

Es obliegt dem Auftraggeber, dem Personal des Auftragnehmers die notwendigen Zugänge zu gewähren. Der Auftraggeber erkennt an, dass die Zugänge im Rahmen des Hostings und letztendlich des IT-Managements (falls vom Auftraggeber abonniert) verwendet werden.

### 11.2.3. Fernzugriffe von Dritten, die an der Bereitstellung des Dienstes auf dem Gebiet des Auftraggebers beteiligt sind

Fernzugriffe von Dritten, die an der Bereitstellung des Dienstes beteiligt sind, sind nicht gestattet.

Sollte ein technischer Bedarf dies erforderlich machen, würde dieser Zugriff erst nach Mitteilung, Begründung und Einholung der schriftlichen Zustimmung des Auftraggebers gewährt werden.

# 12. Verfahren zur Löschung der Daten am Vertragsende

Am Ende des Vertrags, sei es durch Ablauf oder aus einem anderen Grund, sorgt der Auftragnehmer für die sichere Löschung aller im Rahmen des Dienstes verarbeiteten Daten, einschließlich der technischen Daten des Auftraggebers. Der Auftragnehmer gibt eine förmliche Vorankündigung unter Einhaltung einer Frist von einundzwanzig (21) Kalendertagen. Die Daten des Auftraggebers werden innerhalb einer Frist von maximal dreißig (30) Tagen nach der Mitteilung gelöscht. Der Auftragnehmer stellt dem Auftraggeber ein Löschungszertifikat zur Verfügung.

# 13. Anwendbares Recht

## 13.1. Allgemein

Das auf das vorliegende Service Level Agreement anzuwendende Recht ist französisches Recht.

## 13.2. Einhaltung des geltenden Rechts und der Vorschriften

Der Auftragnehmer verpflichtet sich zu folgenden Punkten:

-   Identifizierung der im Rahmen des Dienstes geltenden gesetzlichen und regulatorischen Anforderungen;

-   Einhaltung der gesetzlichen und regulatorischen Anforderungen hinsichtlich der dem Auftragnehmer anvertrauten Daten;

-   Einhaltung des Datenschutzgesetzes und der DSGVO;

-   Umsetzung von Maßnahmen zum Schutz personenbezogener Daten;

-   Einrichtung eines Prozesses zur gesetzlichen und regulatorischen Überwachung;

-   Aufbau und Aufrechterhaltung geeigneter Beziehungen oder Überwachung mit den sektoralen Behörden im Zusammenhang mit der Art der im Rahmen des Dienstes verarbeiteten Daten. Dies umfasst insbesondere die ANSSI, das CERT-FR und die CNIL.

## 13.3. DSGVO

Als Auftragsverarbeiter im Sinne von Artikel 28 der Datenschutz-Grundverordnung (DSGVO) verpflichtet sich der Auftragnehmer:

-   Transparenz und Rückverfolgbarkeit zu gewährleisten;

-   Einen DPO zu benennen, der für die Definition und Umsetzung der Maßnahmen zum Schutz personenbezogener Daten verantwortlich ist;

-   Unterstützung und Beratung an den Auftraggeber zu leisten und ihn zu warnen, falls eine Anweisung des Auftraggebers gegen die Datenschutzrichtlinien verstößt, sofern der Auftragnehmer dies erkennen kann;

-   Eine Sicherheitsgarantie für die verarbeiteten Daten zu bieten (aufgrund der Qualifikation SecNumCloud).

## 13.4. Schutz vor außereuropäischem Recht

Im Falle des Rückgriffs des Auftragnehmers im Rahmen des Dienstes auf die Dienste eines Drittunternehmens - einschließlich eines Unterauftragnehmers -, dessen Hauptsitz, zentrale Verwaltung oder Hauptniederlassung sich in einem Nicht-EU-Staat befindet oder das im Besitz oder unter der Kontrolle eines Drittunternehmens mit Sitz außerhalb der Europäischen Union steht, verpflichtet sich der Auftragnehmer, dass dieses Drittunternehmen keinen Zugang zu den vom Dienst "Secure Temple" betriebenen Daten erhält.

Zur Erinnerung: Die betroffenen Daten sind die vom Auftraggeber dem Auftragnehmer anvertrauten Daten sowie alle technischen Daten, die Informationen über die Auftraggeber enthalten.

Für die Zwecke dieses Artikels wird der Kontrollbegriff im Sinne von Artikel L233-3 II des Handelsgesetzbuches verstanden.

# 14. UNTERSCHRIFTEN

Ausgestellt in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, am
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Für Cloud Temple, der AUFTRAGNEHMER

Für \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, der AUFTRAGGEBER