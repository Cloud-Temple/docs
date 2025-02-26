---
title: Servicevereinbarung SecNumCloud IaaS
---


# 1. IaaS-SERVICEVEREINBARUNG

  -----------------------------------------------------------------------
  **Empfänger :**               **AUFTRAGGEBER**
  ------------------------------ ----------------------------------------
  **Dokumentenreferenz**        CT.AM.JUR.ANX CdS-IaaS -
                                 20251701_v3.0.docx_Tag TT JJJJ

  **Ihre Ansprechpartner**      *Vorname* *Nachname*

                                 Account Manager

                                 E-Mail : *vorname.nachname*\@cloud-temple.com

  **Letzte Aktualisierung**     17/01/2025

  **Vertragsgültigkeitsdatum**  Tag TT JJJJ
  -----------------------------------------------------------------------

------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Version**   **Datum**     **Aktion**                              **Autor**
  ------------- ------------ ------------------------------------ --------------
  v0.1          07/06/2022   Erstfassung                            Lorena ALCALDE

  v0.2          14/09/2022   Erweiterung                            Lorena ALCALDE

  v1.0          30/12/2022   Integration von Indikatoren            Lorena ALCALDE

  v1.1          23/01/2023   Änderung der Fußzeile                  Lorena ALCALDE

  v1.2          22/05/2023   Erweiterung                            Lorena ALCALDE

  v1.3          29/06/2023   Erweiterung                            Lorena ALCALDE

  v1.4          06/11/2023   Änderungen im Kapital und              Lorena ALCALDE
                             Erweiterung

  v1.5          30/11/2023   Erweiterung                            Lorena ALCALDE

  v1.6          21/03/2024   Erweiterung                            Lorena ALCALDE

  v2.0          29/03/2024   Anpassungen an SNC-Konformität         Nicolas
                                                                  ABRIOUX

  v2.0          03/04/2024   Veröffentlichung                       Lorena ALCALDE

  V3.0          17/01/2025   Erweiterung                            Emeline CAZAUX
  ------------- ------------ ------------------------------------ --------------
  ------------------------------------------------------------------------------

------------------------------------------------------------------------

# 2. INHALTSVERZEICHNIS

-   [1. **IaaS-SERVICEVEREINBARUNG**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
-   [2. **INHALTSVERZEICHNIS**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Vorwort und
    Glossar](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Vorwort](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glossar](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Akronyme](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Ziel dieser Servicevereinbarung](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Beschreibung des
    Service](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Modell der geteilten
        Verantwortung](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Detaillierte Darstellung des Serviceumfangs](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Rechenzentrumsinfrastrukturen](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Software-Infrastruktur zur Verwaltung des Services](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3.
            Recheninfrastrukturen](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4.
            Speicherinfrastruktur](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Globale Netzwerkinfrastruktur](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Backup-Infrastruktur](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
        -   [7.2.7. Umsetzung von Rücksichts-oder
            Geschäftsfortführungsplänen](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Einschränkungen der Dienstleistungen im qualifizierten IaaS-Modell](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1.
            Verwaltete Services im
            Betrieb](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2.
            Notfallkonfiguration](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
        -   [7.3.3.
            Backup-Konfiguration](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
    -   [7.4. Implementierung des
        Services](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Technische
            Voraussetzungen](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
    -   [7.5. Standort des Services in Frankreich](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Standort der Rechenzentren, die den Service hosten](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Standort der Cloud Temple Außenstellen, die den Service betreiben](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Support](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Art des unterstützen
            Services](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2.
            Inanspruchnahme des technischen Supports](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Prozess zur
            Vorfallbearbeitung](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Prozess der Priorisierung der
            Anfragen](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Sprache und Standort des Support-Services](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Verpflichtungen und Servicelevels](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Verpflichtungen zur Verfügbarkeit der Infrastruktur](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. Verpflichtung zur Verfügbarkeit der AUFTRAGGEBER-Schnittstelle](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Verpflichtung zur Verfügbarkeit des
        Supports](#Xfc8548982b300528a67725f1705f15805f405f0)
    -   [8.4. Verpflichtung zur Verfügbarkeit des Objektspeichers S3](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
    -   [8.5. Genauigkeit der Backup-Verpflichtung](#Xcc0ee164bf81418fd2280ceac4eb569bf7b97f7)
-   [9. Organisation der Vertragsbeziehung](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Verantwortlichkeiten des Anbieters](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Begrenzung der Verantwortung des Anbieters](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Zugangsbeschränkungen](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)
    -   [9.4. Verantwortlichkeiten der Dritten, die an der Bereitstellung des Secure Temple Services beteiligt sind](#Xc662a81cadd2baa300ca83a27240dec61621a56)
    -   [9.5. Verantwortlichkeiten und Pflichten des AUFTRAGGEBERS](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
    -   [9.6. Rechte des AUFTRAGGEBERS](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
    -   [9.7. Datenlöschung am Vertragsende](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
-   [10. Lebenszyklus dieser Servicevereinbarung](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Inkrafttreten der Servicevereinbarung](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Änderungen der Servicevereinbarung](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Änderungen seitens des AUFTRAGGEBERS](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Änderungen seitens des Anbieters](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Umkehrbarkeit](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Verfügbarkeit, Kontinuität und Wiederherstellung des Services](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Verwaltung von Vorfällen und
        Unterbrechungen](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1.
            Vorfälle](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Typen von Vorfällen, die im Rahmen dieser Servicevereinbarung behandelt werden](#X09cc1e22db275b1a463f85596829f3f871ae224)
            -   [11.1.1.2.
                Vorfallsbearbeitung](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
            -   [11.1.1.3. Benachrichtigungsstufe bei Sicherheitsvorfällen](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
    -   [11.2. Wartung des
        Services](#X8f50b0b400c67568e380ddb602ac786ec585905)
        -   [11.2.1.
            Art der Wartung](#X903d92edf16182242ecfd404337edbaf2243b81)
        -   [11.2.2. Ferner Zugriff von Cloud Temple auf den Umfang des AUFTRAGGEBERS](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Ferner Zugang von Dritten, die an der Bereitstellung des Services beteiligt sind, auf den Umfang des AUFTRAGGEBERS](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Datenlöschungsverfahren am Vertragsende](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Anwendbares Recht](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. Allgemein](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Einhaltung der geltenden Gesetze und Vorschriften](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. DSGVO](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Schutz vor außer-europäischem Recht](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. UNTERSCHRIFTEN](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Vorwort und Glossar

## 3.1. Vorwort
Le présent document formalise la Convention de service associée au
service IaaS qualifiée SecNumCloud sous l'appellation de « *Secure
Temple *».

Le Service est qualifié SecNumCloud (voir attestation en Annexe).

La présente convention de service complète et est complémentaire aux
conditions générales de vente et d'utilisation du Prestataire. Il est
entendu que les documents contractuels s'interprètent de manière
cohérente entre eux. En cas de contradiction ou de divergence entre les
termes des documents contractuels, les documents prévaudront les uns sur
les autres dans l'ordre suivant :

1.  Conditions Générales de Vente et Utilisation (CGVU)

2.  Convention de Service SecNumCloud IaaS

3.  Convention de Service SecNumCloud OpenIaaS

4.  Convention de Service SecNumCloud PaaS

5.  Convention de Service spécifique - Bare Metal

6.  Convention spécifique particulière

7.  Plan d'Assurance Sécurité (PAS)

8.  Conditions Particulières d'Utilisation (CPU)

9.  Data Protection Agreement

## 3.2. Glossaire

Dans la présente Convention de service, le **COMMANDITAIRE**, le
**Prestataire** et les **Parties** sont identifiés dans le Contrat
auquel est annexe la présente Convention de service.

Les expressions ci-après employées dans la présente Convention de
service seront interprétées conformément aux définitions qui leur sont
attribuées ci-dessous :

-   **Changement :** Tout ajout, une modification ou suppression
    impactant le Service, ayant été autorisé, planifié ou pris en
    charge.

-   **Changement standard :** Changement faisant l'objet d'une
    procédure, dont les modalités de mise en production et les impacts
    (y compris financiers) sont connus et acceptés à l'avance par les
    Parties. Il est alors intégré au catalogue des changements
    standards, et peut selon les cas avoir une GTI et une GTR. 

-   **Contrat :** désigne le contrat souscrit par le COMMANDITAIRE
    auprès du Prestataire pour permettre au COMMANDITAIRE de bénéficier
    du Service, et auquel la présente Convention de service est annexée.

-   \***Convention de service :** Ce document, établi dans le cadre d'un
    contrat spécifique ou des Conditions Générales de Vente et
    d'Utilisation (CGVU), et ce, en conformité avec les exigences du
    Référentiel SecNumCloud.

-   **Demande de service :** demande d'évolution faisant l'objet d'une
    procédure, dont la réalisation: i) ne modifie pas la CMDB,ii) le
    mode opératoire, les coûts et les risques sont connus et acceptés à
    l'avance et ne nécessitent pas de modalités de retour arrière
    spécifiques iii) la réalisation est soumise à un accord de niveau de
    service et incluse dans la redevance du contrat lorsqu'elle est
    réalisée en heures ouvrées et jours ouvrés.

-   **Disponibilité :** Capacité à assurer la disponibilité et le
    maintien des performances optimales du Service, en accord avec les
    critères et engagements définis dans les Accords de Niveau de
    Service (SLA).

-   **Données techniques** : comprend l'ensemble des données manipulées
    pour délivrer le Service, notablement dont l'identité des
    bénéficiaires et des administrateurs de l'infrastructure technique,
    des journaux de l'infrastructure technique, configuration des accès,
    annuaire, certificats\...

-   **Evènement :** Un \"événement\" est toute occurrence détectable ou
    identifiable pouvant avoir une importance pour la gestion du
    Service.

-   **Hyperviseur :** Système d'exploitation permettant l'execution de
    machines virtuelles sur une lame de calcul.

-   **Incident :** Tout événement imprévu qui perturbe le fonctionnement
    normal du Service ou compromet la sécurité des données.

-   **Incident de sécurité :** Tout événement dans le périmètre du
    Service:

    -   De nature intentionnellement malveillante ;
    -   De nature accidentelle portant atteinte à l'intégrité, la
        confidentialité ou la traçabilité du Service ou des données du
        COMMANDITAIRE ;
    -   Portant atteinte aux mesures de sécurité existantes. Les
        atteintes à la Disponibilité d'origine non-malveillante ne sont
        pas considérées comme un Incident de sécurité (panne matérielle,
        bug, dysfonctionnement, sinistre naturel...).

-   **Interface COMMANDITAIRE :** Interface d'administration du Service
    mise à disposition du COMMANDITAIRE par le Prestataire, regroupant
    une console d'administration web et une API.

-   **Mise en production :** action(s) d'administration de réalisation
    du Changement quand celui-ci est approuvé (le changement, au sens
    ITIL, ne concernant que la gestion du changement et non sa
    réalisation/concrétisation).

-   **Problème** : cause d'un ou plusieurs Incidents récurrents, cause
    d'un Incident potentiel (situation à risque) nécessitant une analyse
    et une résolution pour prévenir sa récurrence.

-   **Région :** désigne un ensemble géographiquement délimité de zones
    de disponibilité cloud, fournissant des services de réseau, de
    calcul et de stockage pour optimiser la latence, la performance et
    la conformité réglementaire locale.

-   **Service :** désigne le service IaaS qualifié SecNumCloud « Secure
    Temple », délivré au COMMANDITAIRE par la Prestataire depuis des
    infrastructures techniques maintenues par le Prestataire, tel que
    décrit dans la section « Description du Service » de la présente
    Convention de service.

-   **Secure Temple** : désigne le service IaaS qualifié SecNumCloud,
    proposé par la société Cloud Temple, tel que défini dans
    l'attestation consultable sur le site de l'ANSSI et fournie en
    annexe de la présente Convention de service.

-   **Sinistre :** désigne un événement grave d'origine naturelle ou
    humaine, accidentelle ou intentionnelle, occasionnant des pertes et
    des dommages importants à la Partie sinistrée.

-   **Supervision :** Surveillance d'un Système d'Information ou d'un
    Service, impliquant la collecte de diverses données telles que
    mesures et alarmes. Cette activité se limite à l'observation et au
    suivi, sans intervenir directement sur les éléments surveillés, une
    prérogative qui appartient aux opérations d'Administration. 

-   **Tenant :** Eine isolierte Instanz, die für einen Benutzer oder eine
    Benutzergruppe reserviert ist, die eine gemeinsame Infrastruktur teilt und 
    gleichzeitig die Unabhängigkeit und Sicherheit der Daten und Anwendungen 
    gewährleistet.

-   **Zone de Disponibilité (AZ) (Availibility zone) :** Un secteur
    spécifique et isolé de l'infrastructure de cloud computing, conçu
    pour assurer la haute disponibilité et la résilience des services
    par une distribution géographique des ressources.

# 4. Acronymes

  -----------------------------------------------------------------------------
  **Acronyme**   **Définition**
  -------------- --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Change Advisory Board

  **CMDB**       Configuration Management Database -- Configuration Management
                 Database

  **COPIL**      Lenkungsausschuss

  **COSTRAT**    Strategischer Ausschuss

  **COPROJ**     Projektausschuss

  **DB**         Datenbank (Database)

  **DPA**        Datenschutzvereinbarung (Data Protection Agreement)

  **DRP**        Katastrophenwiederherstellungsplan (Disaster Recovery Plan) 
                 (Plan de reprise d'activité)

  **GTE**        Eskalationszeitgarantie

  **GTI**        Interventionszeitgarantie

  **GTR**        Wiederherstellungszeitgarantie

  **ITIL**       Information Technology Infrastructure Library - Best Practices 
                 zur IT-Service-Management

  **IaaS**       Infrastructure as a Service

  **MCO**        Aufrechterhaltung der Betriebsbereitschaft

  **MOA**        Auftraggeber

  **MOE**        Auftragnehmer

  **MSP**        Dienstanbieter (Managed Services Provider)

  **OS**         Betriebssystem (Operating system)

  **PAQ**        Qualitätssicherungsplan

  **PaaS**       Platform as a Service

  **PAS**        Sicherheits-Sicherungsplan

  **PASSI**      Anbieter von Sicherheitsprüfungsdienstleistungen für IT-Systeme

  **RFC**        Änderungsanforderung (Request For Change)

  **RGPD**       Datenschutzgrundverordnung (General Data Protection Regulation) 
                 (personnelles)

  **RPO**        Wiederherstellungspunktziel (Recovery Point Objective) - 
                 Datenaktualität im Falle eines Ausfalls

  **RTO**        Wiederherstellungszeitpunktziel (Recovery Time Objective) - 
                 Zeitrahmen für die Wiederherstellung des Services

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Service Level Agreement

  **SNC**        SecNumCloud

  **SOC**        Sicherheitsleitstelle (Security Operation Center)

  **TMA**        Drittherstelleranwendungswartung

  **UO**         Arbeitseinheit (Unité d'Œuvre)

  **VABE**       Betriebsbereitschaftsprüfung

  **VABF**       Funktionsfähigkeitstest

  **VM**         Virtuelle Maschine (Virtual Machine)

  **VSR**        Regelmäßige Servicevalidierung
  -----------------------------------------------------------------------------

# 5. Objet de la présente Convention de service

La présente Convention de service établit les termes et conditions selon
lesquels le Prestataire s'engage à délivrer le Service au COMMANDITAIRE.
Son objet est de :

-   Préciser les exigences de performance attendues par le COMMANDITAIRE
    en termes de fonctionnalité et de fiabilité du Service ;

-   Énoncer les obligations du Prestataire afin de satisfaire aux
    niveaux de service convenus ;

-   Identifier les normes réglementaires applicables spécifiquement au
    Service délivré ;

-   Assurer une uniformité et une intégrité dans l'évaluation de la
    qualité du Service ;

-   Garantir l'excellence des services fournis, évaluée au moyen
    d'indicateurs de performance quantitatifs.

Il est stipulé que, dans l'hypothèse où le Prestataire se verrait

retirer seine SecNumCloud-Qualifikation, kann der Vertrag vom AUFTRAGGEBER
stillschweigend und ohne Strafzahlungen gekündigt werden. In einem
solchen Fall verpflichtet sich der Dienstleister, den AUFTRAGGEBER
über diese Entqualifizierung durch eine offizielle Mitteilung per
Einschreiben mit Rückschein zu informieren.

Es ist zu beachten, dass eine Änderung oder Anpassung der
SecNumCloud-Qualifikation nicht als Widerruf der ursprünglichen
Qualifikation interpretiert wird.

# 6. Audit

Der Dienstleister verpflichtet sich, dem AUFTRAGGEBER oder jedem von ihm
benannten Dritt- und Nichtwettbewerbsprüfer Zugang zu allen erforderlichen
Dokumenten zu gewähren, um die vollständige Einhaltung der Verpflichtungen
gemäß Artikel 28 der Allgemeinen Datenschutzverordnung (DSGVO) zu
bestätigen und somit die Durchführung von Audits zu erleichtern.

Mit der Annahme dieser Servicevereinbarung erteilt der AUFTRAGGEBER
seine ausdrückliche Genehmigung an:

1.  Die Nationale Agentur für Information Systems Security (ANSSI)
    sowie die zuständige Qualifizierungsstelle, um die
    Konformität des Dienstes und seines Informationssystems mit dem
    SecNumCloud-Referenzrahmen zu überprüfen.
2.  Einen von dem Dienstleister ausdrücklich benannten und qualifizierten
    Dienstleister für die Sicherheit von Audits der Information Systems
    Security (PASSI), um Sicherheitsaudits des Dienstes durchzuführen.

# 7. Dienstbeschreibung

## 7.1. Gemeinsames Verantwortungsmodell

Der vom Dienstleister angebotene Dienst zeichnet sich durch die
Bereitstellung der folgenden Dienstleistungen aus, die dem im
SecNumCloud-Referenzrahmen vorgestellten Prinzip des gemeinsamen
Verantwortungsmodells entsprechen:

-   Bereitstellung von Rechenressourcen (Compute);

-   Bereitstellung von Speicherplatz;

-   Zugang zu Netzwerk- und Internetkonnektivitätsdiensten;

-   Angebot eines dedizierten Backup-Dienstes für virtuelle Maschinen.

Das zwischen dem Dienstleister und dem AUFTRAGGEBER im Rahmen des
Dienstes angewandte gemeinsame Verantwortungsmodell wird in §7.1.
vorgestellt.

Es wird davon ausgegangen, dass der Dienstleister seine Expertise nutzt,
um die Dienstleistungen nach den besten beruflichen Praktiken und
gemäß den Anforderungen des SecNumCloud-Referenzrahmens zu erbringen.

## 7.2. Detaillierte Darstellung des Serviceumfangs

  -----------------------------------------------------------------------------
  Compute          Rechenressource des AUFTRAGGEBERS Tenant
  ---------------- ------------------------------------------------------------
  Storage          Produktionsdaten des AUFTRAGGEBERS Tenant

  Objektspeicher   Bereitstellung einer objektbasierten Speicherinfrastruktur
  S3               souverän multi AZ und kompatibel mit den Standard-S3 APIs.

  Backup           Modulo Abonnement an das entsprechende Mass-Storage

  Netzwerk-        Netzwerkressource des AUFTRAGGEBERS Tenant
  Infrastruktur

  Konsole          Der Dienst, der dem AUFTRAGGEBER den Zugang zu
  AUFTRAGGEBER     seinem IaaS-Dienst ermöglicht und die Verwaltung über
                   die Shiva-Schnittstelle

  Support          Der Support-Service unterstützt die oben genannten
                   Dienste und nur diese (\*)
  -----------------------------------------------------------------------------

\_(\*) Im Rahmen des qualifizierten SNC-Serviceumfangs und der diesbezüglichen
Verantwortlichkeiten des Dienstleisters\_

### 7.2.1. Rechenzentrums-Infrastrukturen

Der Dienst umfasst die Bereitstellung der folgenden qualifizierten
Dienstleistungen für jede Verfügbarkeitszone:

-   Rechenzentrum in Frankreich für die Region FR, das den neuesten
    technologischen Standards entspricht und ein Resilienzniveau bietet,
    das dem Tier 3-Level des Uptime Institute entspricht oder darüber
    liegt;
-   Bereitstellung von Technikräumen in Rechenzentren zur Aufnahme der
    technischen Ausrüstung, die für die Produktion des Dienstes
    erforderlich ist, einschließlich Compute, Storage, Netzwerk,
    Verkabelung und anderer notwendiger Komponenten;
-   Gesicherte Stromversorgung durch zwei getrennte Stromkreise,
    die eine ununterbrochene Dienstleistung gewährleisten;
-   Bereitstellung von Klimaanlagen, die den Normen und
    Empfehlungen der Gerätehersteller angepasst sind, um eine optimale
    Umgebung für die technischen Geräte zu gewährleisten;
-   Dauerhafte Überwachung und detaillierte Metrologie, die eine
    präzise Überwachung und proaktive Verwaltung der Leistung und
    Sicherheit des bereitgestellten Dienstes ermöglichen.

Der Dienstleister stellt fortschrittliche Brandmeldungs- und
Brandbekämpfungsdienste zur Verfügung, die darauf ausgelegt sind, jedes
Feuer effektiv zu erkennen und zu löschen. Diese Systeme sind
wesentlich, um die Sicherheit der Geräte und Daten zu gewährleisten.
Sie umfassen hochpräzise Rauchmelder und Löschsysteme, die schnell
eingreifen können, ohne die IT-Ausrüstung zu beschädigen. Dieser Dienst
ist entscheidend, um Brandrisiken zu vermeiden, potenzielle Schäden zu
minimieren und den Betrieb aufrechtzuerhalten.

Der AUFTRAGGEBER wird darüber informiert, dass alle implementierten
Sicherheitsverfahren und -maßnahmen, einschließlich der jährlichen Tests
der Umschaltung auf Notstromaggregate, unerlässlich sind, um die
Kontinuität und Integrität der bereitgestellten Dienste sicherzustellen.
Diese Praktiken sollen Ausfallrisiken minimieren und eine optimale
Reaktionsfähigkeit im Falle von Vorfällen gewährleisten. Durch die
Annahme dieser Bedingungen erkennt der AUFTRAGGEBER die Bedeutung dieser
Maßnahmen an und verpflichtet sich zur uneingeschränkten Zusammenarbeit
zur Unterstützung ihrer Durchführung. Der AUFTRAGGEBER wird
ebenfalls ermutigt, die bereitgestellten Sicherheits Empfehlungen zu
berücksichtigen und in seine eigene Risikomanagementstrategie zu
integrieren.

### 7.2.2. Software-Infrastruktur zur Dienststeuerung

Der Dienstleister stellt dem AUFTRAGGEBER die Verwaltungskonsole und
die erforderlichen APIs zur Nutzung des Dienstes bereit. Er verpflichtet
sich ebenfalls, diese Verwaltungskonsole und die APIs in optimalem
Betriebszustand zu halten und kontinuierlich ihre Sicherheit zu
gewährleisten. Diese Verwaltungskonsole und APIs werden zusammenfassend
als "AUFTRAGGEBERSchnittstelle" bezeichnet.

Der Dienstleister weist den AUFTRAGGEBER auf die Tatsache hin, dass eine
anormale Nutzung der AUFTRAGGEBERSchnittstelle, insbesondere im Falle
einer Überlastung seiner APIs (Hammering), automatische
Sicherheitsmaßnahmen auslösen kann, die den Zugang zu den APIs oder dem
Dienst blockieren. Es sei darauf hingewiesen, dass diese Situation keine
Dienstunverfügbarkeit darstellt, sondern eine Schutzmaßnahme für den
Dienst und die Infrastruktur des Dienstleisters; folglich kann der
AUFTRAGGEBER dies nicht als Unverfügbarkeit in seinen Berechnungen
berücksichtigen.

Darüber hinaus informiert der Dienstleister den AUFTRAGGEBER darüber,
dass identische Anfragen (Duplikate) an seine APIs auf eine pro Sekunde
beschränkt sind (Throttling). Wenn der AUFTRAGGEBER identische Anfragen
häufiger stellt, wird deren Ablehnung nicht als Dienstunverfügbarkeit
verstanden.

### 7.2.3. Recheninfrastrukturen

Der Dienst umfasst die Bereitstellung der für die Ausführung der
Workloads in Form von virtuellen Maschinen erforderlichen Geräte in den
von dem AUFTRAGGEBER abonnierten Verfügbarkeitszonen.

Dies umfasst:

-   Bereitstellung der technischen Chassis, die für den
    ordnungsgemäßen Betrieb der Rechenklingen erforderlich sind;
-   Bereitstellung der Rechenklingen in den vom AUFTRAGGEBER
    angegebenen Mengen und Verteilung nach den von ihm gewählten
    Verfügbarkeitszonen. Es sei darauf hingewiesen, dass diese
    Rechenklingen ausschließlich dem AUFTRAGGEBER vorbehalten sind;
-   Bereitstellung von Hypervisor-Betriebssystemen sowie die
    Gewährleistung der Betriebssicherheit und der Softwareinfrastruktur,
    die für die Steuerung dieser Betriebssysteme erforderlich ist. Es
    sollte hervorgehoben werden, dass der Dienstleister zwar für die
    Betriebssicherheit und die Gesamtsicherheit des Dienstes verantwortlich
    ist, jedoch keine spezifischen Kenntnisse über die Produktionsumgebung
    des AUFTRAGGEBERS oder die Anforderungen seiner Workloads besitzt.
    Daher liegt die Verantwortung für die Entscheidung über die
    Aktualisierung der Hypervisor-Betriebssysteme, eine Aktion, die einen
    Neustart erfordern kann, vollständig beim AUFTRAGGEBER. Diese
    Operation kann über die AUFTRAGGEBERSchnittstelle durchgeführt werden.

Die Auswahl des Rechenklingenmodells aus dem vom Dienstleister
angebotenen Katalog fällt in den Verantwortungsbereich des
AUFTRAGGEBERS.

### 7.2.4. Speicherinfrastruktur

Der Dienst umfasst die Bereitstellung einer geteilten SAN (Storage Area
Network)-Speicherinfrastruktur mit verschiedenen Leistungsniveaus für
den AUFTRAGGEBER. Dieser Dienst umfasst:

-   Implementierung und laufender Betrieb sowie Sicherheitsstatus des
    dedizierten SAN-Netzwerks;
-   Installation und Verwaltung der gemeinsamen Speicherarrays für
    Kunden, einschließlich ihres Betriebszustands und ihrer Sicherheit,
    ihrer Überwachung und ihrer Metrologie;
-   Implementierung automatischer Systeme zur Zuweisung von
    Speicher-LUNs (Logical Unit Numbers) für die Verwendung des
    AUFTRAGGEBERS entsprechend der von ihm abonnierten Volumina.

### 7.2.5. Globale Netzwerkinfrastruktur

Der Dienstleister stellt im Rahmen des Dienstes ein globales Netzwerk
bereit, das dem AUFTRAGGEBER die Zugänglichkeit seiner gehosteten Systeme
ermöglicht. Dieser Dienst umfasst:

-   Bereitstellung, Betrieb und Sicherheitsstatus aller
    Glasfaserverbindungen

    interconnectant die verschiedenen Verfügbarkeitszonen;

-   Die Bereitstellung, die Erhaltung der Betriebsbereitschaft und der
    Sicherheitsbedingungen der technischen Ausrüstungen, die für den
    ordnungsgemäßen Betrieb des Netzwerks und die Isolierung der
    verschiedenen Kunden erforderlich sind.

Die Netzwerkanbindung des Auftraggebers TENANT an das Internet oder an
private Netzwerke sowie die Netzwerkausrüstungen, Betreiberverbindungen
und andere technische Komponenten, die diese Anbindung gewährleisten,
sind nicht Teil des Leistungsumfangs des Dienstes. Diese Netzwerkanbindung wird gemäß den Bestimmungen im Vertrag umgesetzt.

### 7.2.6. Backup-Infrastruktur

Der Dienstleister stellt dem Auftraggeber einen integrierten,
dedizierten und verwalteten Backup-Dienst zur Verfügung, der dem Schutz
seiner virtuellen Maschinen dient. Der Dienstleister stellt die
Betriebsbereitschaft und die Sicherheit dieses Backup-Dienstes sicher. Der
Dienstleister gewährleistet, dass die Backups des Auftraggebers außerhalb der Verfügbarkeitszone der gesicherten Workloads gespeichert werden, vorausgesetzt, dass der Auftraggeber die entsprechenden Leistungseinheiten abonniert hat.

Diese Backup-Dienstleistung beschränkt sich auf die Sicherung der virtuellen Maschinen und der Topologiekonfigurationen der IaaS-Umgebung der Tenants des Auftraggebers im Rahmen des Dienstes. Die Erstellung und Anwendung einer angemessenen Backup-Politik durch den Auftraggeber hängt vom Abonnement spezieller Leistungseinheiten ab. Es obliegt daher dem Auftraggeber, sich beim Dienstleister die erforderlichen technischen Ressourcen
zu sichern, um seine Backup-Politik umzusetzen oder diese an die verfügbaren Mittel anzupassen.

Der Dienstleister verpflichtet sich, den Auftraggeber im Falle von
Kapazitätsbeschränkungen zu benachrichtigen und Beratungsunterstützung zur
Optimierung der Ressourcen bereitzustellen. Die Verpflichtungen des Dienstleisters beschränken sich auf die Umsetzung der vom Auftraggeber geäußerten Anforderungen in Bezug auf die Backup-Politik im Rahmen der abonnierten Ressourcen.

### 7.2.7. Implementierung von Disaster Recovery- oder Business Continuity-Lösungen

Der Dienstleister stellt dem Auftraggeber alle notwendigen technischen Lösungen
zur Verfügung, um eine optimale Verteilung seiner Ressourcen über verschiedene
Verfügbarkeitszonen sicherzustellen. Es liegt in der Verantwortung des Auftraggebers, diese Ressourcenverteilung effizient zu verwalten, wofür ihm die Tools des Dienstleisters zur Verfügung stehen.

## 7.3. Einschränkungen der Dienstleistungen im qualifizierten IaaS-Modell

### 7.3.1. Verwaltete Dienste im Betrieb

Es ist wichtig zu beachten, dass vom Dienst ausgeschlossen sind:

-   Das Hosting physischer Komponenten des Auftraggebers;
-   Die Netzwerkanbindung des Auftraggebers TENANT an das Internet oder an
    private Netzwerke, einschließlich der Betreiberverbindungen;
-   Jeder verwaltete Dienst oder TMA;
-   Jegliche Unterstützung auf virtuellen Maschinen auf OS-Ebene und darüber
    hinaus in der Iaa-Verantwortungspyramide, selbst wenn es sich nur um einfache
    Überwachung handelt.

Es ist jedoch keineswegs ausgeschlossen, dass der Auftraggeber solche Dienste im Rahmen des MSP-Angebots des Dienstleisters in Anspruch nimmt, um seine Tenants im Managed-Services-Modus zu betreiben. Diese Dienste werden dann nicht von der vorliegenden Servicevereinbarung und ihren bilateralen Verpflichtungen/Klauseln abgedeckt.

### 7.3.2. Notfallkonfiguration

Standardmäßig stellt der Dienstleister dem Auftraggeber die IaaS-Ressourcen
bereit, indem er Ressourcen reserviert und die Bereitstellungen so konfiguriert,
dass sie die Verfügbarkeitszonen nutzen. Es liegt in der Verantwortung des Auftraggebers, die Verfügbarkeitszonen über die
Auftraggeberoberfläche auszuwählen.

### 7.3.3. Backup-Konfiguration

Die Backup-Dienstleistung beschränkt sich auf die Sicherung der virtuellen
Maschinen und der Topologiekonfigurationen, die die IaaS-Umgebung der Tenants
des Auftraggebers im Rahmen des Dienstes darstellen.

Die Backup-Dienstleistung und die Umsetzung der Backup-Politik des
Auftraggebers unterliegt dem Abonnement von Speicherplatz auf dem Mass Storage,
der notwendig ist, um den Dienst sicherzustellen. Es liegt daher in der
Verantwortung des Auftraggebers, über den Dienstleister die erforderlichen technischen Mittel zu abonnieren, um die Backup-Politik auf seinem IT-Umfang sicherzustellen oder die Backup-Politik an die eingesetzten
Mittel anzupassen. Der Dienstleister verpflichtet sich, den Auftraggeber im
Falle von technischen Kapazitätsgrenzen zu informieren.

Der Dienstleister wird die notwendigen technischen und menschlichen Mittel zur
Verfügung stellen, um das gehostete System innerhalb der vom Auftraggeber
abonnierten Ressourcen zu sichern.

Darüber hinaus liegt es im Falle von Bereichen, die nicht vom Dienstleister
abgedeckt sind, in der Verantwortung des Auftraggebers, seine eigene
Backup-Strategie zu definieren und die Backups der VMs selbst zu konfigurieren
oder eine Serviceanfrage beim Dienstleister zu stellen, damit die
Backup-Konfiguration für die physischen Server eingerichtet wird, falls der Auftraggeber über einen Managed-Service-Vertrag verfügt, der es dem Dienstleister
ermöglicht, über die Auftraggeberoberfläche zu agieren, die die
Verwaltungskonsole darstellt, die im Rahmen dieser Servicevereinbarung zur
Verfügung gestellt wird und über Funktionen zur Konfiguration der Backups
verfügt.

Darüber hinaus hat dieser Dienst nur die Verpflichtung, die vom Auftraggeber
klar spezifizierte Konfiguration über die Auftraggeberoberfläche umzusetzen.

Aus Gründen der Flexibilität des Dienstleistungsangebots hat der Auftraggeber die Möglichkeit, eine Nicht-Backup-Politik für einige seiner VMs zu wählen. In diesem Fall liegt es in der Verantwortung des Auftraggebers, diese Wahl zu übernehmen. Der Dienstleister wird die der „No Backup“-Politik zugeordneten VMs nicht
sichern. Der Dienstleister weist den Auftraggeber darauf hin, dass die Wahl der „No Backup“-Politik oder der manuellen Sicherung den Auftraggeber dem Risiko eines endgültigen Datenverlusts im Falle eines Zwischenfalls in den unteren Schichten oder in den Schichten, die in seiner Verantwortung im IaaS-Modell liegen, aussetzt. In einem solchen Fall wird es unmöglich sein, den Dienstleister für die Wiederherstellung der Daten verantwortlich zu machen, da es
nichts zu wiederherstellen gibt. Der Dienstleister empfiehlt stets, die VMs zu sichern.

Für alle Themen im Zusammenhang mit dem auf einer virtuellen Maschine
installierten OS und jeder Software oder jedem Programm, das „oberhalb
des OS“ ausgeführt wird, liegt es in der Verantwortung des Auftraggebers, die
Administrations- und Überwachungsvorgänge innerhalb der Europäischen Union durchzuführen, wenn er sicherstellen möchte, dass alle vertikalen Schichten des
IT-Systems in der Europäischen Union betrieben und verwaltet werden. Die
Administrationsvorgänge außerhalb des Verantwortungsbereichs des Dienstleisters im Rahmen dieser Servicevereinbarung sind in der Sektion „Modell der geteilten Verantwortlichkeiten“ dieser Servicevereinbarung angegeben.

## 7.4. Umsetzung des Dienstes

### 7.4.1. Technische Voraussetzungen

Für die Umsetzung des Dienstes erkennt der Auftraggeber an, dass er:

-   Mit einer Virtualisierung vom Typ VMware in den vom Hersteller
    unterstützten und im Rahmen des Dienstes vom Dienstleister bereitgestellten
    Versionen arbeiten muss;

-   Über den Dienstleister auf das Backup-Tool zugreifen muss;

-   Feste IP-Adressen deklarieren muss, von denen aus der Dienstleister ihm Zugang zur Auftraggeberoberfläche (Whitelist-Filterung) gewährt. Änderungen dieser IP-Liste müssen über das dafür vorgesehene Menü in der Konsole oder über Serviceanfragen für spätere Änderungen vorgenommen werden. Zum Beginn des Dienstes
    wird der Dienstleister mindestens 1 IP-Adresse wie beschrieben informiert
    worden sein.

## 7.5. Standort des Dienstes in Frankreich

Es wird klargestellt, dass keine der Operationen und keine der physischen Komponenten,
die an der Bereitstellung des Dienstes beteiligt sind, die Gegenstand dieser
Servicevereinbarung ist, außerhalb der Europäischen Union liegen.

Dies schließt insbesondere den Support, die Betriebsüberwachung und die
Sicherheitsüberwachung (SOC) der technischen Infrastruktur ein, die den Dienst
bereitstellt. Somit werden alle Aufgaben zur Speicherung, Verwaltung und Überwachung in Frankreich ausgeführt.

### 7.5.1. Standort der Datacenter, die den Dienst hosten

Abgesehen von den Operationen der Mitarbeiter und Agenturen des Dienstleisters
sind alle Produktionsoperationen (einschließlich der Speicherung und Verarbeitung von Daten) und technischen Komponenten, die den Dienst bereitstellen, in den in Frankreich ansässigen Datacentern angesiedelt.

### 7.5.2. Standort der Cloud Temple-Agenturen, die den Dienst betreiben

Die Mitarbeiter von Cloud Temple, die im Rahmen des Dienstes tätig sind,
arbeiten von den ausschließlich in Frankreich gelegenen Niederlassungen von Cloud Temple. Diese Niederlassungen befinden sich in Frankreich, in Tours,
Lyon, Caen und Paris La Défense.

Der Auftraggeber wird über die Möglichkeit informiert, dass Cloud Temple-Mitarbeiter aus der Ferne arbeiten können. Der Dienstleister garantiert jedoch das gleiche Sicherheitsniveau in Bezug auf den Fernzugang, insbesondere den VPN-Zugang. Diese Remote-Zugänge werden gemäß den Anforderungen des SecNumCloud-Referenzrahmens umgesetzt.

## 7.6. Support

### 7.6.1. Art des Support-Service

Der Dienstleister bietet einen technischen Support-Service an, der den
Auftraggeber bei der Verwaltung, Fehlerbehebung und Optimierung der
bereitgestellten Ressourcen unterstützt. Dieser Dienst umfasst eine Vielzahl von
Aktivitäten, von der Unterstützung bei der anfänglichen Dienstkonfiguration bis
hin zum fortgeschrittenen technischen Support zur Lösung spezifischer Probleme.

Hier ist eine Beschreibung der Eigenschaften und Funktionen des
Support-Dienstes:

-   Unterstützung bei der anfänglichen Implementierung der Nutzung des Dienstes;
-   Unterstützung bei der Vorfalllösung;
-   Unterstützung bei der Problemlösung;
-   Überwachung und Beratung zur Optimierung der technischen Grundlage.
Dans dem Rahmen des Supports ersetzt der Dienstleister nicht
den AUFTRAGGEBER bei der Nutzung des Dienstes. Der AUFTRAGGEBER bleibt
vollständig verantwortlich für die Konfiguration, den Betrieb seiner VM
und seiner Tenants sowie für die Verwaltung aller Elemente (einschließlich Daten und Anwendungen), die er auf den
Infrastrukturen des Dienstleisters gespeichert oder installiert hat. Der technische Supportdienst wird
in Übereinstimmung mit den Allgemeinen Verkaufs- und
Nutzungsbedingungen bereitgestellt, wobei der Dienstleister eine Mittelverpflichtung hat.

Der AUFTRAGGEBER verpflichtet sich, den technischen Supportdienst
angemessen zu nutzen, insbesondere keine nicht abonnierten Dienste beim Dienstleister anzufordern und das Eingreifen der Teams
des Dienstleisters bei seinen eigenen Kunden oder Dritten, die nicht im
Vertrag enthalten sind, zu vermeiden. Der Dienstleister behält sich das Recht vor, jede Dienstanforderung, die diesen Kriterien nicht entspricht, abzulehnen.

Das Engagementslevel des Supports hängt vom Abonnement der
zugehörigen Support-Einheiten ab.

### 7.6.2. Inanspruchnahme des technischen Supports

Der technische Support ist über ein Ticketsystem
über die AUFTRAGGEBER-Konsole zugänglich und während der normalen
Bürozeiten an Werktagen (8:00 - 18:00 Uhr; Montag - Freitag; französischer Kalender und Zeiten) verfügbar. Für Notfälle, die außerhalb der normalen
Arbeitszeiten auftreten, insbesondere Vorfälle, die die Produktion erheblich beeinträchtigen, kann der Bereitschaftsdienst über eine dem AUFTRAGGEBER bei der Initialisierung des Dienstes mitgeteilte Nummer erreicht werden.

Für jede Anfrage oder Vorfall ist es zwingend erforderlich, ein Ticket beim Support des Dienstleisters zu erstellen. Die Erstellung dieses Tickets, das alle erforderlichen Informationen enthält, ist entscheidend und markiert den Beginn der Bewertung der Verpflichtungen des Dienstleisters.

Sobald der Dienstleister eine Anfrage oder eine Benachrichtigung über einen Vorfall erhält, sei es über die Verwaltungskonsole oder nach einem Telefonanruf, wird automatisch ein Ticket erstellt. Bei der Meldung eines Vorfalls ist es unerlässlich, dass der AUFTRAGGEBER dem Dienstleister so viele Details wie möglich über das aufgetretene Problem liefert. Dieser Schritt ist entscheidend, um eine angemessene Bewertung der Situation, ihre Priorisierung und eine effektive Diagnose zu ermöglichen.

Der AUFTRAGGEBER erhält eine Bestätigung per E-Mail, die die Erstellung des Tickets und seine eindeutige Nummer angibt. Der AUFTRAGGEBER kann den Status und die Historie seiner Anfragen und Vorfallmeldungen direkt über die Verwaltungskonsole einsehen.

### 7.6.3. Vorfallmanagement-Prozess

Bei der Meldung eines Vorfalls initiiert das technische Supportteam des
Dienstleisters eine Untersuchung, um die Ursache des
Problems zu identifizieren und eine Diagnose zu stellen. Der AUFTRAGGEBER muss aktiv mit dem Dienstleister zusammenarbeiten, indem er alle erforderlichen Informationen bereitstellt und die erforderlichen Tests durchführt. Der Dienstleister kann auf den Dienst des AUFTRAGGEBERS zugreifen, um den Vorfall zu diagnostizieren.

Wenn die Dienste des Dienstleisters als funktionsfähig beurteilt werden und der Vorfall ihm nicht zugerechnet werden kann, wird der AUFTRAGGEBER darüber informiert. Auf Anfrage des AUFTRAGGEBERS kann der Dienstleister professionelle Dienstleistungen anbieten, um die Ursache des Problems zu identifizieren; diese sind kostenpflichtig nach vorheriger Zustimmung in 30-Minuten-Einheiten.

Wenn der Vorfall in die Verantwortung des Dienstleisters oder eines seiner Unterauftragnehmer fällt, vervollständigt dieser die Diagnose und bemüht sich um die Wiederherstellung des Dienstes ohne zusätzliche Kosten. Die Diagnose stützt sich auf den Austausch zwischen den Parteien und die Daten des
Dienstleisters, diese Elemente werden durch die Vereinbarung der Parteien als beweiskräftig angesehen.

### 7.6.4. Priorisierungsprozess der Anfragen

Die Bestimmung des Prioritätsniveaus eines Vorgangs basiert auf einer
mathematischen Analyse, die die Auswirkungen des Vorfalls und dessen Kritikalität bewertet:

-   Die Auswirkungensebenen sind wie folgt definiert:

  -------------------------------------------------------------------------
  Ebene     Beschreibung
  der Auswirkungen
  ---------- --------------------------------------------------------------
  Auswirkungen A1  Ein oder mehrere Dienste des Dienstleisters sind unterbrochen

  Auswirkungen A2  Ein oder mehrere Dienste des Dienstleisters sind
  beeinträchtigt

  Auswirkungen A3  Ein oder mehrere Dienste des Dienstleisters sind derzeit stabil,
             zeigen aber Anzeichen eines potenziellen langfristigen Rückgangs
  -------------------------------------------------------------------------

-   Die Kritikalitätsebenen sind wie folgt definiert:

  -----------------------------------------------------------------------
  Kritikalitätsebenen    Beschreibung
  ----------- -----------------------------------------------------------
  Kritikalität K1    Ein oder mehrere Dienste des Dienstleisters verschlechtern sich mit
                      besorgniserregender Geschwindigkeit

  Kritikalität K2    Ein oder mehrere Dienste des Dienstleisters verschlechtern sich
                      allmählich im Laufe der Zeit

  Kritikalität K3    Ein oder mehrere Dienste des Dienstleisters weisen eine oder mehrere
  Unannehmlichkeiten ohne signifikante Konsequenzen auf
  -----------------------------------------------------------------------

-   Basierend auf einer gründlichen Analyse der Situation,
    die die bestimmenden Elemente der Auswirkungen und Kritikalität berücksichtigt, wird dem Ticket gemäß der folgenden
    Entscheidungsmatrix eine Priorität zugewiesen :

  -------------------------------------------------------------------------
  Auswirkungensebene  Kritikalitätsebene      Auswirkungen A1    Auswirkungen A2    Auswirkungen A3
  ---------------------------------- ------------ ------------ ------------
  Kritikalität K1                       Priorität     Priorität     Priorität
                                       **P1**       **P2**       **P3**

  Kritikalität K2                       Priorität     Priorität     Priorität
                                       **P2**       **P3**       **P4**

  Kritikalität K3                       Priorität     Priorität     Priorität
                                       **P3**       **P4**       **P5**
  -------------------------------------------------------------------------

Die Service-Level-Verpflichtungen, die sich auf jede Prioritätsstufe beziehen, sind im nächsten Kapitel detailliert.

### 7.6.5. Sprache und Ort des Supports

Der Support wird vom Dienstleister dem AUFTRAGGEBER mindestens in französischer Sprache bereitgestellt. Der Support kann auch in englischer Sprache bereitgestellt werden.

Die Support-Operationen des Dienstleisters für das qualifizierte SecNumCloud-Infrastrukturservice-Angebot befinden sich in der Europäischen Union.

# 8. Service-Verpflichtungen und Service-Level

Der Dienstleister verpflichtet sich, eine kontinuierliche Überwachung der
Leistung und der Sicherheitsintegrität seiner technischen
Infrastruktur, die den Dienst liefert, zu gewährleisten, um deren optimalen Betrieb sicherzustellen.

Die Nichtverfügbarkeit eines Dienstes, die einem Leistungsindikator
unterliegt, wird ab ihrer Identifizierung durch das Überwachungssystem des Dienstleisters oder nach einer Benachrichtigung durch einen
Benutzer des AUFTRAGGEBERS anerkannt. Der Beginn der Nichtverfügbarkeit wird zum
frühesten Zeitpunkt zwischen diesen beiden Ereignissen festgelegt, um
eine genaue und faire Zählung der Ausfallzeit zu gewährleisten.

Das Ende der Nichtverfügbarkeit wird offiziell durch die vollständige Wiederherstellung des Dienstes markiert, entweder von den Überwachungssystemen des Dienstleisters bestätigt oder durch einen Nutzerrückmeldung bestätigt, wodurch eine effektive Wiederaufnahme der
Operationen und eine echte Messung der Dauer der Unterbrechung gewährleistet werden.

## 8.1. Verfügbarkeitsverpflichtungen der Infrastruktur

Der Dienstleister verpflichtet sich, ein Verfügbarkeits- und Leistungsniveau in Übereinstimmung mit den für jede spezifizierte Periode definierten Standards aufrechtzuerhalten. Die Service-Level-Verpflichtungen (Service Level Agreements, SLAs) gelten, sofern der AUFTRAGGEBER
seine Systeme über mindestens zwei der in der betreffenden Region vorhandenen Verfügbarkeitszonen implementiert.

Wenn der AUFTRAGGEBER diese Bedingungen nicht einhält, kann er die Anwendung der betreffenden SLAs nicht geltend machen, die speziell durch ein
Sternchen (\*) gekennzeichnet sind. Der Zugriff auf die SLAs erfolgt über die AUFTRAGGEBER-Schnittstelle.
Die Messungen werden monatlich berechnet:

-  \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Verfügbarkeit der
   Rechenleistung (Compute): garantierte Verfügbarkeitsrate von
  99,99%, berechnet auf Basis von 24h/24, 7T/7.
-  \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Verfügbarkeit des Speichers:
   garantierte Verfügbarkeitsrate von 99,99%, berechnet auf Basis von
  24h/24, 7T/7.
-  **SLA 3 : IC-INFRA_SNC-03** -- Zuverlässigkeit der Sicherung: garantierte
   Verfügbarkeitsrate von 99,99%, berechnet auf Basis von 24h/24,
  7T/7.
-  \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Verfügbarkeit der
   Netzwerkinfrastruktur: garantierte Verfügbarkeitsrate von 99,99%,
   berechnet auf Basis von 24h/24, 7T/7.
-  **SLA 5 : IC-INFRA_SNC-05** -- Internetzugang: garantierte
   Verfügbarkeitsrate von 99,99%, berechnet auf Basis von
  24h/24, 7T/7.

***Anmerkungen***:

-   *Als Reaktion auf einen Distributed Denial-of-Service-Angriff (DDoS) behält sich
 der Dienstleister das Recht vor, seine Internet-Routing-Konfiguration anzupassen, um die Auswirkungen dieses Angriffs zu begrenzen und
 seine Infrastruktur zu schützen. Insbesondere, wenn eine IP-Adresse im Besitz des AUFTRAGGEBERS angegriffen wird, kann der Dienstleister
 die Blackholing-Technik über die BGP-Community anwenden, um den gesamten Verkehr zur angegriffenen IP-Adresse upstream bei seinen
 Anbietern zu blockieren, um die Ressourcen des
 AUFTRAGGEBERS sowie die anderer AUFTRAGGEBER und die
 Infrastruktur des Dienstleisters zu schützen. Der Dienstleister ermutigt den
 AUFTRAGGEBER dringend, ähnliche Maßnahmen zu ergreifen, wie die Verwendung von Webanwendungs-Firewall-Software
disponiblen auf dem Markt und seine Sicherheitsgruppen sorgfältig über die Befehls-API zu konfigurieren.*

- *Der Anbieter betont, dass es für den AUFTRAGGEBER unerlässlich ist, die Flussöffnungen zu minimieren, insbesondere durch Vermeidung des Zugangs zu Verwaltungsports wie **SSH** (TCP-Port 22) und **RDP** (TCP-Port 3389) aus dem gesamten Internet (Subnetz 0.0.0.0/0), sowie interne Protokolle wie **SMB** (TCP/UDP-Port 445) oder **NFS** (TCP/UDP-Port 2049).*

## 8.2. Verfügbarkeitszusage für die Auftraggeber-Oberfläche

- SLA 6: IC-INFRA_SNC-06 -- Zugang zur Administrationskonsole des Dienstes: eine garantierte Verfügbarkeit von 97%, kontinuierlich, 24 Stunden am Tag und 7 Tage die Woche.
- SLA 7: IC-INFRA_SNC-07 -- Zugang zu den Steuerungs-APIs des Dienstes: eine Verfügbarkeit von 99.9%, berechnet auf einer Basis von 24h/24, 7d/7.

## 8.3. Support-Verfügbarkeitszusage

- **SLA 8: IC-INFRA_SNC-08** -- Hier sind die Leistungszusagen des technischen Supports des Anbieters für Vorfälle, außerhalb geplanter Wartungsarbeiten:

  ------------------------------------------------------------------------
  Priorität       Garantie für Eingreifzeit (GTI)        Leistungsziel
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

- **SLA 9: IC-INFRA_SNC-09** -- Hier sind die Leistungszusagen des technischen Supports des Anbieters für Serviceanfragen:

  ------------------------------------------------------------------------
                   Garantie für Eingreifzeit (GTI)      Leistungsziel
  ---------------- ---------------------------------- --------------------
  Serviceanfrage   4h                                  90%
  ------------------------------------------------------------------------

*Hinweis*:

- *Die Garantiezeit für die Eingreifzeit (GTI) wird ab der Differenz zwischen dem Zeitpunkt, zu dem der AUFTRAGGEBER das Ticket eröffnet, und der ersten Intervention des Anbietersupports berechnet.*
- *Die Untersuchung von Vorfällen, die die AUFTRAGGEBER betreffen, umfasst keine Remote-Interventionen auf den gehosteten Servern des AUFTRAGGEBERs. Diese Unterstützung beschränkt sich auf die Erklärung der verfügbaren Metriken im Umfeld des AUFTRAGGEBERS, um das Verständnis der aufgetretenen Vorfälle oder Leistungsprobleme zu erleichtern. Basierend auf den Ergebnissen dieser Analyse können Empfehlungen gegeben werden.*

## 8.4. Verfügbarkeitszusage für S3-Objektspeicher

- **SLA 10: IC-INFRA_SNC-10** -- Hier sind die Verfügbarkeitszusagen für den S3-Objektspeicher:

  ------------------------------------------------------------------------------
  Indikator          Verpflichtung                           Verfügbarkeitsziel
  ------------------- -------------------------------------- -------------------
  IC-INFRA-SNC-10.1   Haltbarkeit der Speicherung eines      99.9999999% / Jahr
                      Objekts in einer Region

  IC-INFRA-SNC-10.2   Verfügbarkeit der S3 Object Storage    99.99%
                      API

  IC-INFRA-SNC-10.3   Maximale Zugriffs-Latenz auf ein       150 ms
                      Objekt in einer Region
  ------------------------------------------------------------------------------

Hinweise:

- Der Objektspeicherdienst ist speziell für die Speicherung von Objekten konzipiert und sollte ausschließlich zu diesem Zweck verwendet werden, **ausdrücklich ausgeschlossen ist die Verwendung im Blockmodus**. Die Nutzung im Blockmodus durch Umwege, wie beispielsweise die Verwendung von *"FUSE" in einer Linux-Umgebung*, stellt einen Verstoß gegen die festgelegten Nutzungsbedingungen dar. Kein Vorfall, Fehlfunktion oder Schaden, der aus dieser unsachgemäßen Verwendung resultiert, wird von den in dieser Servicevereinbarung festgelegten Service-Level-Agreements (SLA) abgedeckt.
- Die Haltbarkeitsgarantie ist an die Nutzung der Dienste gemäß den besten aktuellen Praktiken und Standards gebunden und schließt ausdrücklich jede Datenänderung aus, sei sie beabsichtigt oder versehentlich, die aus Handlungen des AUFTRAGGEBERS resultieren.

## 8.5. Klarstellung zur Backup-Zusage

Die für den AUFTRAGGEBER eingesetzte Backup-Strategie ist abhängig vom Abschluss geeigneter Arbeitseinheiten.

Der Anbieter verpflichtet sich zur Bereitstellung einer Backup-Lösung, die dem AUFTRAGGEBER ermöglicht, die gewünschten Backup-Strategien anzuwenden.

Es wird darauf hingewiesen, dass der Verantwortungsbereich des Anbieters bei der Bereitstellung eines Backup-Dienstes endet und es dem AUFTRAGGEBER obliegt, über die AUFTRAGGEBER-Oberfläche die ordnungsgemäße Ausführung der zugehörigen Richtlinien zu überwachen.

Es wird klargestellt, dass die Kapazitätsverwaltung des Speicherplatzes für Backups in der Verantwortung des AUFTRAGGEBERS liegt. Der Anbieter stellt die Nutzungsrate über die Konsole zur Verfügung.

*Beispiel: Nicht-Sicherung einer virtuellen Maschine:*

*Der AUFTRAGGEBER ist dafür verantwortlich, die ordnungsgemäße Ausführung der Backup-Richtlinien zu überprüfen/überwachen. Wenn der AUFTRAGGEBER feststellt, dass eine virtuelle Maschine nicht gesichert wird, liegt es an ihm, die Ursache zu überprüfen. Der AUFTRAGGEBER kann den Support des Anbieters gemäß dem abonnierten Service-Level-Support kontaktieren, um Unterstützung zu erhalten.*

**Der SLA 8: IC-INFRA_SNC-08 und SLA 9**, sind nur im Falle eines Vorfalls des Backup-Dienstes anwendbar.

# 9. Organisation der Vertragsbeziehung

## 9.1. Verantwortlichkeiten des Anbieters

Der Anbieter verpflichtet sich:

- den AUFTRAGGEBER angemessen zu informieren (zum Beispiel im Falle von Kapazitätsgrenzen der technischen Ressourcen, die den Dienst bereitstellen).

- den AUFTRAGGEBER formell und innerhalb eines Monats über jede rechtliche, organisatorische oder technische Änderung zu informieren, die sich auf die Konformität des Dienstes mit den Anforderungen des Schutzes gegen außereuropäische Gesetze auswirken könnte (19.6 des SNC-Referenzrahmens v3.2).

- dem AUFTRAGGEBER mindestens französischsprachige Schnittstellen und Serviceoberflächen bereitzustellen.

- die branchenspezifischen Anforderungen im Zusammenhang mit den Arten von Informationen, die vom AUFTRAGGEBER im Rahmen der Implementierung des Dienstes anvertraut werden, zu berücksichtigen, soweit die Verantwortung des Anbieters einerseits und die im Vertrag vorgesehenen Bestimmungen andererseits reichen;

- die branchenspezifischen Anforderungen im Zusammenhang mit den Arten von Informationen, die vom AUFTRAGGEBER im Rahmen der Implementierung des Dienstes anvertraut werden und die vom AUFTRAGGEBER nachträglich ausgedrückt werden, zu prüfen und dem AUFTRAGGEBER die notwendigen Maßnahmen für deren Berücksichtigung mitzuteilen.

- keine Informationen über die Dienstleistung an Dritte weiterzugeben, außer mit ausdrücklicher und schriftlicher Zustimmung des AUFTRAGGEBERS.

- alle notwendigen Informationen zur Durchführung von Konformitätsprüfungen gemäß den Bestimmungen von Artikel 28 der DSGVO bereitzustellen.

- dem AUFTRAGGEBER im Rahmen dieser Servicevereinbarung über alle Sicherheitsvorfälle zu berichten, die den Dienst oder die Nutzung des Dienstes durch den AUFTRAGGEBER betreffen (einschließlich der Daten des AUFTRAGGEBERS).

- einen qualifizierten Anbieter von Informationssicherheitssystemaudits (PASSI), beauftragt durch den Anbieter, zu autorisieren, den Dienst sowie sein Informationssystem gemäß dem Kontrolleplan des Anbieters, SecNumCloud, zu auditieren. Außerdem verpflichtet sich der Anbieter, alle notwendigen Informationen zur Verfügung zu stellen, um die Konformitätsprüfungen gemäß den Bestimmungen des Artikels 28 der DSGVO durchzuführen, die vom AUFTRAGGEBER oder einem beauftragten Dritten durchgeführt werden.

- in seiner Eigenschaft als Auftragsverarbeiter gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) Unterstützung und Beratung des AUFTRAGGEBERS zu leisten, indem er diesen warnt, sobald eine Anweisung des AUFTRAGGEBERS möglicherweise gegen Datenschutzregeln verstößt.

- den AUFTRAGGEBER in einem angemessenen Zeitraum über die AUFTRAGGEBER-Oberfläche oder per E-Mail an den AUFTRAGGEBER-Kontakt zu benachrichtigen, wenn ein Projekt die Sicherheits- oder Verfügbarkeitsstufe des Dienstes beeinflusst oder voraussichtlich beeinflussen wird, oder einen Funktionsverlust zur Folge haben könnte, die potenziellen Auswirkungen, die ergriffenen Minderungsmaßnahmen sowie die verbleibenden Risiken, die ihn betreffen.

- alle notwendigen Verfahren zu dokumentieren und umzusetzen, um die gesetzlichen, regulatorischen und vertraglichen Anforderungen zu erfüllen, die für den Dienst gelten, sowie die spezifischen Sicherheitsanforderungen des AUFTRAGGEBERS, die vom letzten definiert und im Vertrag vorgesehen sind.

- die Daten des AUFTRAGGEBERS aus der Produktion nicht für Tests zu verwenden, es sei denn, dies erfolgt mit vorheriger ausdrücklicher Zustimmung des AUFTRAGGEBERS. In diesem Fall verpflichtet sich der Anbieter, diese Daten zu anonymisieren und ihre Vertraulichkeit während der Anonymisierung sicherzustellen.

- die Daten und technischen Daten des
    COMMANDITAIRE, gemäß dem in dieser Servicevereinbarung beschriebenen "Verfahren zur Datenlöschung am Vertragsende" bei Vertragsende oder -kündigung.

-   für eine sichere Löschung aller Daten des COMMANDITAIRE durch vollständiges Überschreiben sämtlicher Datenträger, die im Rahmen des Dienstes seine Daten gehostet haben, zu sorgen.

Auf formelle und schriftliche Anfrage des COMMANDITAIRE verpflichtet sich der Dienstleister zu:

1.  Dem COMMANDITAIRE die interne Regelung und die Ethik-Charta des Dienstleisters zugänglich zu machen;

2.  Dem COMMANDITAIRE die Sanktionen zugänglich zu machen, die bei Verstoß gegen die Sicherheitsrichtlinie drohen;

3.  Dem COMMANDITAIRE alle ihn betreffenden Ereignisse in den Protokollelementen des Dienstes zu liefern; der COMMANDITAIRE kann außerdem selbstständig die Ereignisse in Bezug auf die Nutzung des Dienstes über die Weboberflächen und APIs des Dienstes einsehen;

4.  Dem COMMANDITAIRE die Verfahren zugänglich zu machen, die es ermöglichen, die geltenden gesetzlichen, regulatorischen und vertraglichen Anforderungen des Dienstes sowie die spezifischen Sicherheitsbedürfnisse des COMMANDITAIRE, die im Vertrag festgelegt sind, zu erfüllen;

5.  Die Risiko-Bewertungselemente im Zusammenhang mit der Unterwerfung der Daten des COMMANDITAIRE unter das Recht eines Nicht-EU-Staates bereitzustellen;

6.  Den COMMANDITAIRE über nachträgliche Unterauftragnehmer, die an der Bereitstellung des Dienstes beteiligt sind, zu informieren und ihn über jegliche Änderungen, die diese Unterauftragnehmer betreffen, zu informieren.

> Der Dienstleister und all seine Tochtergesellschaften verpflichten sich, die Grundwerte der Europäischen Union zu respektieren, nämlich die Würde des Menschen, die Freiheit, die Demokratie, die Gleichheit, den Rechtsstaat sowie die Achtung der Menschenrechte. Der vom Dienstleister erbrachte Dienst entspricht der geltenden Gesetzgebung in Bezug auf Grundrechte und den Werten der Europäischen Union, die die Achtung der Menschenwürde, die Freiheit, die Gleichheit, die Demokratie und den Rechtsstaat betreffen.

## 9.2. Haftungsbeschränkung des Dienstleisters

Aufgrund aller Definitionen und Bedingungen dieser Servicevereinbarung sind die Haftungen des Dienstleisters wie folgt beschränkt:

1.  Das in der Sektion „Modell der geteilten Verantwortung“ dieser Servicevereinbarung beschriebene Modell der geteilten Verantwortung beschränkt die Beteiligung des Dienstleisters an den Funktionsschichten, die "über" der Bereitstellung von Rechen-, Netzwerk-, Speicher- und Backup-Ressourcen liegen. Dies schließt insbesondere ein, aber nicht darauf beschränkt:

    -   Die Verwaltung dessen, was auf den virtuellen Maschinen installiert ist (Betriebssysteme, Middleware, Anwendungen usw.);

    -   Die Aktualisierung der Betriebssysteme und anderer Software, die vom COMMANDITAIRE auf seinen Maschinen in seinen Tenants installiert wurde;

    -   Die Sicherheit der Programme, Software und Anwendungen, die auf den virtuellen Maschinen installiert sind;

    -   Die Aktualisierung der virtuellen Maschinen;

    -   Das Backup der Daten auf Anwendungsebene.

2.  Der Dienstleister kann keine Backup-Verpflichtungen der Tenants des COMMANDITAIRE übernehmen, ohne dass der COMMANDITAIRE zuvor die entsprechenden Leistungseinheiten abonniert hat.

3.  Der Dienstleister kann keinen Anspruch auf das Eigentum an den vom COMMANDITAIRE übermittelten und generierten Daten erheben. Diese gehören dem COMMANDITAIRE.

4.  Der Dienstleister stellt klar, dass er in keinem Fall die vom COMMANDITAIRE übermittelten und generierten Daten ohne vorherige Zustimmung des COMMANDITAIRE nutzen und/oder verwerten darf, da diese dem COMMANDITAIRE zur Verfügung stehen.

5.  Der Dienstleister übernimmt keine Haftung für physisch gehostete und verwaltete Komponenten, die direkt dem COMMANDITAIRE oder einem Dritten gehören, mit dem der COMMANDITAIRE einen Vertrag geschlossen hat. Das Hosting von physischen Komponenten von Kunden ist nicht Bestandteil des Dienstes und daher außerhalb des Rahmen dieser Servicevereinbarung. Es obliegt dem COMMANDITAIRE, das Maß an Abhängigkeit oder Abhängigkeit zu bewerten, das diese Komponenten gegenüber dem SecNumCloud-qualifizierten IaaS-Dienst einführen.

## 9.3. Zugangsbeschränkung

Im Rahmen des Dienstes ist es dem Dienstleister strengstens untersagt, ohne vorherige Genehmigung auf die Tenants des COMMANDITAIRE zuzugreifen. Es liegt in der Verantwortung des COMMANDITAIRE, dem Personal des Dienstleisters die erforderlichen Zugänge gemäß den spezifischen Anforderungen des Hostings und gegebenenfalls der gewählten professionellen Supportdienste zu gewähren.

Der COMMANDITAIRE erkennt an, dass diese Zugänge ausschließlich für die im Dienstleistungsvertrag vereinbarten Zwecke gewährt werden, um so eine sichere und vertragskonforme Verwaltung zu gewährleisten.

Der Fernzugriff durch Dritte, die an der Dienstleistungserbringung des Dienstleisters beteiligt sind, ist strengstens verboten. Sollte eine spezifische technische Anforderung einen solchen Zugriff erfordern, darf dieser nur nach klarer Benachrichtigung des COMMANDITAIRE, ausführlicher Begründung und schriftlicher Zustimmung erfolgen.

Diese Maßnahme stellt sicher, dass die Daten des COMMANDITAIRE kontrolliert und sicher verwaltet werden, und stellt sicher, dass jede Ausnahme von der Regel ordnungsgemäß autorisiert und dokumentiert wird.

## 9.4. Verantwortung Dritter bei der Bereitstellung des Secure Temple-Dienstes

Der Dienstleister behält die Kontrolle über die Liste der Drittanbieter, die an der Bereitstellung des Dienstes beteiligt sind. Diese Drittanbieter sind die Herausgeber, Dienstleister (des Dienstleisters) und andere Lieferanten, die an der Bereitstellung des Dienstes beteiligt sind. Der Dienstleister wendet die folgenden Maßnahmen für diese Dritten an:

-   Der Dienstleister verlangt von den dritten Parteien, die an der Implementierung des Dienstes beteiligt sind, in ihrem Beitrag zum Dienst ein Sicherheitsniveau, das mindestens dem entspricht, das er in seiner eigenen Sicherheitsrichtlinie für den Secure Temple-Dienst verpflichtet ist, aufrechtzuerhalten;

-   Der Dienstleister schließt mit jedem der an der Implementierung des Dienstes beteiligten Dritten Verträge mit Audit-Klauseln ab, die es einer Zertifizierungsstelle ermöglichen, zu überprüfen, ob diese Dritten die gesetzlichen Anforderungen und die SNC-Anforderungen einhalten, sodass der Dienstleister seine Verpflichtungen aus dieser Servicevereinbarung erfüllen kann;

-   Der Dienstleister implementiert ein Verfahren, das die regelmäßige Überprüfung der von den an der Implementierung des Dienstes beteiligten Dritten durchgeführten Maßnahmen ermöglicht, um die Anforderungen des Dienstleisters zur Einhaltung der in dieser Servicevereinbarung eingegangenen Verpflichtungen zu erfüllen;

-   Der Dienstleister überwacht die von den an der Implementierung des Dienstes beteiligten Dritten vorgenommenen Änderungen, die das Sicherheitsniveau des Informationssystems des Dienstes beeinflussen könnten.

## 9.5. Verantwortlichkeiten und Pflichten des COMMANDITAIRE

Der COMMANDITAIRE hat im Rahmen des Dienstes die folgenden Verpflichtungen:

-   Zur Erinnerung: Der Dienstleister stellt dem COMMANDITAIRE eine Plattform zum Ausführen virtueller Maschinen zur Verfügung, deren Konfiguration in der Verantwortung des COMMANDITAIRE liegt. Jede virtuelle Maschine kann nicht ohne eine zugehörige Backup-Richtlinie betrieben werden. Der Dienstleister definiert über seine Schnittstellen automatische Backup-Richtlinien. Aber es liegt in der Verantwortung des COMMANDITAIRE, diese Backup-Richtlinien zu aktivieren und somit die virtuellen Maschinen zu aktivieren.

-   Der COMMANDITAIRE erlaubt der ANSSI und der Zertifizierungsstelle SNC, den Dienst und die technische Infrastruktur, die den Dienst bereitstellt, zu prüfen.

-   Der COMMANDITAIRE ist verantwortlich dafür, dem Dienstleister spezielle branchenspezifische Anforderungen im Zusammenhang mit den Arten von Informationen, die der COMMANDITAIRE bereitstellt, mitzuteilen, die vom Dienstleister berücksichtigt werden müssen.

-   Der COMMANDITAIRE akzeptiert, keine Anforderungen oder Maßnahmen vom Dienstleister zu verlangen, die den Dienstleister von den Anforderungen des aktuellen SecNumCloud-Referenzrahmens abweichen lassen oder das Sicherheitsniveau senken würden, das durch Einhaltung der Anforderungen dieses Referenzrahmens erreicht wird.

## 9.6. Rechte des COMMANDITAIRE

Der COMMANDITAIRE kann jederzeit während der Vertragslaufzeit eine Beschwerde bezüglich des zertifizierten Dienstes bei der ANSSI einreichen.

Der COMMANDITAIRE kann jederzeit den Dienstleister auffordern, ihm die interne Regelung und die Ethik-Charta des Dienstleisters zugänglich zu machen.

## 9.7. Datenlöschung am Vertragsende

Am Ende des Vertrags, sei es bei Ablauf oder aus irgendeinem Grund gekündigt, verpflichtet sich der Dienstleister, alle Daten des COMMANDITAIRE, einschließlich technischer Daten, sicher zu löschen. Der Dienstleister stellt sicher, dass er dem COMMANDITAIRE eine formelle Benachrichtigung mit einer Frist von einundzwanzig (21) Kalendertagen mitteilt. Die Daten des COMMANDITAIRE werden dann innerhalb eines maximalen Zeitraums von dreißig (30) Tagen nach dieser Benachrichtigung gelöscht.

Um diese Löschung zu bestätigen, stellt der Dienstleister dem COMMANDITAIRE ein Zertifikat aus, das die Datenlöschung bestätigt.

# 10. Lebenszyklus dieser Servicevereinbarung

## 10.1. Inkrafttreten der Servicevereinbarung

Diese Servicevereinbarung tritt am Tag ihrer Unterzeichnung durch den COMMANDITAIRE in Kraft.

Die Erhebung, Manipulation, Speicherung und Verarbeitung von Daten, die im Rahmen der Vorverkaufs-, Implementierungs- und Dienstbeendungsverfahren durchgeführt werden, erfolgt unter Einhaltung der geltenden Gesetzgebung.

## 10.2. Änderungen der Servicevereinbarung

Änderungen oder Ergänzungen dieser Servicevereinbarung
daraus ausschliesslich aus den von den zu diesem Zweck benannten
Governance-Organen gestellten Anträgen entstehen. Diese Vorschläge zu
Änderungen werden von den Parteien geprüft, die befugt sind, die
Aspekte zu bestimmen, die einer schriftlichen Formalisierung bedürfen.

Es wird vereinbart, dass jede nach Validierung vorgenommene Änderung der
Dienstvereinbarung, die die ursprünglich festgelegten finanziellen
Bedingungen ändert, die Erstellung und Unterzeichnung eines Nachtrags
zum laufenden Vertrag erforderlich macht.

Faktoren, die eine Überarbeitung dieser Dienstvereinbarung erfordern
können, umfassen unter anderem:

-   Die Entwicklung der technischen Infrastruktur, die den IaaS-Service
    bereitstellt;

-   Anpassungen der vom Dienstleister bereitgestellten Dienstleistungen
    zur Erbringung des Service;

-   Änderungen der eingegangenen Verpflichtungen und anwendbaren
    Sanktionen;

-   Organisationelle Umstrukturierungen innerhalb des AUFTRAGGEBERS oder
    des Dienstleisters;

-   Die Erweiterung oder Einschränkung des Anwendungsbereichs des
    Service.

Das Versions- und Revisionsmanagement der Dienstvereinbarung wird im
Vorspann des Dokuments festgehalten, um die Nachverfolgung zu
ermöglichen.

### 10.2.1. Von dem AUFTRAGGEBER ausgelöste Entwicklungen

Die Entwicklungen der Dienstvereinbarung können insbesondere aus
folgendem resultieren:

-   Die Entwicklung der vom Dienstleister verwalteten Infrastruktur;

-   Eine Änderung der vom Dienstleister umgesetzten Dienstleistungen;

-   Eine Änderung der vom Dienstleister eingegangenen
    Service-Level-Verpflichtungen.

### 10.2.2. Vom Dienstleister ausgelöste Entwicklungen

Jede Änderung der Dienstvereinbarung bedarf der Annahme des
AUFTRAGGEBERS. Es wird verstanden, dass jede validierte Änderung oder
Ergänzung, die die finanziellen Elemente des Vertrags ändert, die
Unterzeichnung eines Nachtrags zu diesem Vertrag nach sich ziehen kann.

## 10.3. Reversibilität

Darüber hinaus verpflichtet sich Cloud Temple, eine Überprüfung der
vorliegenden Dienstvereinbarung (einschließlich ihrer Kündigung) ohne
Strafe für den AUFTRAGGEBER zu ermöglichen, falls die Qualifikation
SecNumCloud verloren geht.

Die Services umfassen keine Verpflichtung zur Reversibilität (d.h. Hilfe
für den AUFTRAGGEBER, damit dieser sein System zu einem anderen
Dienstleister migrieren kann), mit Ausnahme der Bereitstellung der
AUFTRAGGEBER-Schnittstelle, die es dem AUFTRAGGEBER ermöglicht, seine
Daten einschließlich der Konfigurationsdaten seines
Informationssystems wie folgt zu sichern und wiederherzustellen: durch
die Bereitstellung von Dateien in einem oder mehreren dokumentierten und
außerhalb des vom Dienstleister bereitgestellten Service nutzbaren
Formaten oder durch die Einrichtung technischer Schnittstellen, die den
Zugriff auf die Daten gemäß einem dokumentierten und nutzbaren Schema
(API) ermöglichen.

Der AUFTRAGGEBER als alleiniger Betreiber seines Systems muss alles in
seiner Macht Stehende tun, um diesen Vorgang gegebenenfalls zu
erleichtern (was insbesondere die Einrichtung einer rigorosen
Dokumentation zu diesem Zweck beinhaltet) und die Entwicklung von
Reversibilitätsplänen. Falls der AUFTRAGGEBER eine zusätzliche Leistung
benötigt, kann der Dienstleister diesbezüglich im Rahmen eines
gesondert zu verhandelnden Vertrags Beratungsleistungen anbieten.

# 11. Verfügbarkeit, Kontinuität und Wiederherstellung des Dienstes

## 11.1. Verwaltung von Vorfällen und Unterbrechungen

### 11.1.1. Vorfälle

#### 11.1.1.1. Arten von Vorfällen, die im Rahmen dieser Dienstvereinbarung behandelt werden

-   Schäden;

-   Störungen und Ausfälle;

-   Sicherheitsvorfälle, die die Verfügbarkeit, Vertraulichkeit oder
    Integrität des Dienstes beeinträchtigen.

#### 11.1.1.2. Bearbeitung von Vorfällen

> Der Dienstleister informiert den AUFTRAGGEBER so schnell wie möglich
> über Vorfälle und Unterbrechungen durch eine Benachrichtigung in der
> AUFTRAGGEBER-Konsole oder per E-Mail an den AUFTRAGGEBER-Kontakt. Der
> Dienstleister informiert den AUFTRAGGEBER über die Bearbeitung des
> Vorfalls über den zur Benachrichtigung des Vorfalls verwendeten
> Kanal oder über den in der Benachrichtigung angegebenen Kanal.

#### 11.1.1.3. Benachrichtigungsstufen bei Sicherheitsvorfällen

Der AUFTRAGGEBER ist dafür verantwortlich, die Schweregrade der
Sicherheitsvorfälle auszuwählen, über die er informiert werden möchte,
zum Beispiel durch ihre Formalisierung in einem für den Service geltenden
PAS.

Standardmäßig wird der AUFTRAGGEBER informiert:

-   Über Sicherheitsvorfälle mit Auswirkungen (Auswirkungen I1 und I2
    gemäß der im Priorisierungsprozess der Behandlung der vorliegenden
    Dienstvereinbarung definierten Wirkungsskala);

-   Über Sicherheitsvorfälle, die die Vertraulichkeit oder Integrität
    der im Rahmen des Service anvertrauten AUFTRAGGEBER-Daten
    beeinträchtigen;

-   Über Verstöße gegen personenbezogene Daten, für die der
    AUFTRAGGEBER im Rahmen des Service gemäß Artikel 8 des Anhangs DPA
    verantwortlich ist;

-

## 11.2. Wartung des Dienstes

### 11.2.1. Art der Wartung

Über Verstöße gegen personenbezogene Daten, für die der Dienstleister im
Rahmen des Service gemäß Artikel 8 des Anhangs DPA verantwortlich ist und
die personenbezogene Daten des AUFTRAGGEBERS beinhalten. Die Wartung
umfasst die Umsetzung:

-   Des Plans zur Aufrechterhaltung der Betriebsbereitschaft des Service
    zur Sicherstellung guter Verfügbarkeitsindikatoren, wie es der
    Dienstleister oben bereits zugesagt hat;

-   Des PCA/PRA-Plans, wenn er vom AUFTRAGGEBER abonniert wurde, der
    gemäß den auftretenden Vorfällen ausgelöst wird.

### 11.2.2. Fernzugriff von Cloud Temple auf den Bereich des AUFTRAGGEBERS

Der Dienstleister verbietet sich im Rahmen der vorliegenden
Dienstvereinbarung jeden Zugriff auf die Tenants und den Bereich der
AUFTRAGGEBER-Schnittstelle.

Es liegt in der Verantwortung des AUFTRAGGEBERS, dem Personal des
Dienstleisters die notwendigen Zugänge zu gewähren. Der AUFTRAGGEBER
erkennt an, dass die Zugänge im Rahmen des Hostings und letztlich des
Outsourcings (falls vom AUFTRAGGEBER abonniert) genutzt werden.

### 11.2.3. Fernzugriffe von Drittanbietern, die an der
Servicebereitstellung im Bereich des AUFTRAGGEBERS beteiligt sind

Kein Fernzugriff von Drittanbietern, die an der Bereitstellung des
Service beteiligt sind, ist erlaubt.

Falls ein technischer Bedarf dieses Szenario notwendig macht, wird ein
solcher Zugriff erst nach Benachrichtigung des AUFTRAGGEBERS, mit
Begründung und Einholung seiner schriftlichen Zustimmung durchgeführt.

# 12. Verfahren zur Datenlöschung am Ende des Vertrags

Am Ende des Vertrags, sei es durch Zeitablauf oder aus jedem anderen
Grund, wird der Dienstleister die sichere Löschung aller im Rahmen des
Service verarbeiteten Daten, einschließlich der technischen Daten des
AUFTRAGGEBERS, gewährleisten. Der Dienstleister wird eine formelle
Voranmeldung mit einer Frist von einundzwanzig (21) Kalendertagen
vornehmen. Die Daten des AUFTRAGGEBERS werden innerhalb von maximal
dreißig (30) Tagen nach der Benachrichtigung gelöscht. Der Dienstleister
stellt dem AUFTRAGGEBER ein Löschungszertifikat zur Verfügung.

# 13. Anwendbares Recht

## 13.1. Im Allgemeinen

Das auf die vorliegende Dienstvereinbarung anwendbare Recht ist
französisches Recht.

## 13.2. Einhaltung des anwendbaren Rechts und der Vorschriften

Der Dienstleister verpflichtet sich zu folgenden Punkten:

-   Die Identifizierung der im Rahmen des Service geltenden gesetzlichen
    und regulatorischen Zwänge;

-   Die Einhaltung der gesetzlichen und regulatorischen Zwänge, die auf
    die dem Dienstleister anvertrauten Daten anwendbar sind, im Rahmen
    der Verantwortlichkeiten des Dienstleisters einerseits und der im
    Vertrag vorgesehenen Bestimmungen andererseits;

-   Die Einhaltung des Datenschutzgesetzes und der DSGVO;

-   Die Umsetzung von Maßnahmen zum Schutz personenbezogener Daten;

-   Die Implementierung eines gesetzlichen und regulatorischen
    Überwachungsprozesses;

-   Die Aufrechterhaltung angemessener Beziehungen oder einer
    Überwachung mit den sektoralen Behörden in Verbindung mit der
    Natur der im Rahmen des Service verarbeiteten Daten. Dies schließt
    insbesondere die ANSSI, das CERT-FR und die CNIL ein.

## 13.3. DSGVO

Als Auftragsverarbeiter im Sinne von Artikel 28 der Datenschutz
grundverordnung (DSGVO) verpflichtet sich der Dienstleister:

-   Transparenz und Nachverfolgbarkeit zu gewährleisten;

-   Einen DPO zu benennen, der mit der Definition und Umsetzung der
    Maßnahmen zum Schutz personenbezogener Daten betraut ist;

-   Unterstützung und Beratung dem AUFTRAGGEBER zu bieten, insbesondere
    bei Warnung, wenn eine Anweisung des AUFTRAGGEBERS eine Verletzung
    der Datenschutzbestimmungen darstellt, sofern der Dienstleister dies
    erkennen kann;

-   Eine Sicherheitsgarantie für die verarbeiteten Daten zu bieten
    (aufgrund der SecNumCloud-Qualifikation).

## 13.4. Schutz vor außereuropäischem Recht

Der statutarische Sitz des Dienstleisters befindet sich in einem
Mitgliedstaat der Europäischen Union. Das Grundkapital und die
Stimmrechte an der Gesellschaft des Dienstleisters werden weder direkt
noch indirekt:

-   individuell zu mehr als 24%;

-   und kollektiv zu mehr als 39%;

von Unternehmen gehalten, deren statutarischer Sitz, zentrale Verwaltung
oder Hauptniederlassung sich in einem Nicht-EU-Mitgliedstaat befinden.

Sollte der Dienstleister im Rahmen des Service auf die Dienste eines
Unternehmens - einschließlich eines Unterauftragnehmers - zurückgreifen,
dessen statutarischer Sitz, zentrale Verwaltung oder Hauptniederlassung
sich in einem Nicht-EU-Mitgliedstaat befindet oder das entweder zu einem
Unternehmen gehört oder von einem Unternehmen kontrolliert wird, das
außerhalb der Europäischen Union ansässig ist, verpflichtet sich der
Dienstleister:

-   dass dieses genannte Unternehmen keinen Zugang zu den im Secure
    Temple Service betriebenen Daten hat;

-   über eine Betriebsselbständigkeit zu verfügen, die es ermöglicht,
    auf einen anderen Unterauftragnehmer zurückzugreifen oder schnell
    eine technologische Alternative umzusetzen.
Zur Erinnerung: Die betroffenen Daten sind diejenigen, die dem
Dienstleister vom AUFTRAGGEBER anvertraut werden, sowie alle technischen Daten,
die Informationen über die AUFTRAGGEBER enthalten.

Für die Zwecke dieses Artikels wird die Kontrollbegriffs als jene,
die im II des Artikels L233-3 des Handelsgesetzbuchs erwähnt wird, verstanden.

# 14. UNTERSCHRIFTEN

Gemacht in \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, am
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Für Cloud Temple, der DIENSTLEISTER

Für \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, der AUFTRAGGEBER