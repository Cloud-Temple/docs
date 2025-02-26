---
title: Dienstleistungsvereinbarung SecNumCloud PaaS
---

**Inhaltsverzeichnis**

-   [1. Rahmen](#X09af6387e1d2792b8edc09fc15abd136a837db5)
-   [2. Akronyme](#Xc79d173393c04b42ba8cdf223cca3c0202f4dee)
-   [3. Glossar](#X0c9d1d82fdc5fcc3d01a320dd2dd3715a6900b4)
-   [4. Gegenstand der PaaS-Dienstleistungsvereinbarung des
    Anbieters](#X23ec3c3767539f9e69acc7cbf5af8aa8c1b6ad7)
-   [5. Entwicklung der PaaS-Dienstleistungsvereinbarung](#Xa7161677dcf9a35d02c20807040326b39d55881)
-   [6. Audits](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Beschreibung des
    Dienstes](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
-   [8. Implementierung des
    Dienstes](#Xc98fb6da582d483e300add6a80df6e3eb76498a)
    -   [8.1. Beschreibung der technischen Komponenten](#Xa61c340e3fdf14082cef411d3a913fc4bdeeb4c)
        -   [8.1.1. REDHAT OpenShift Serviceplattform](#Xf81d22ed0abca8eab163c160107fa228901d82c)
        -   [8.1.2. Betriebssoftwareinfrastruktur der Redhat Openshift Platform](#Xf11ec2e6a431ae11852fe3129245b4d0fd0747b)
        -   [8.1.3. Zugehörige Backup-Infrastruktur](#X77b1112fa2c2a53eb0cf09b416962164b77b437)
        -   [8.1.4. Implementierung von Notfallwiederherstellungs- oder Kontinuitätslösungen](#Xae1394210f1c9bee4293a93160d2d11cc70ebdd)
-   [9. Verpflichtungen und Servicelevels](#Xad2b4ae071a52a99b502c4e84cbba3f15ac78f8)
    -   [9.1. Verfügbarkeitsverpflichtungen der RedHat OpenShift-Plattform](#X273341276df81e9f6fad2000ac84216560e59fa)
-   [10. Anwendbares Modell der geteilten Verantwortlichkeiten](#Xa90d4e180ca2ae1d92e4e4cf00f20aca5061eac)
    -   [10.1. Verantwortung und Pflichten des Anbieters](#Xe5cf73850ea2189ab60f41560bf52e97d3019f9)
    -   [10.2. Haftungsbeschränkung des Anbieters](#X8856c8f606130116944398b24484722823c023c)
    -   [10.3. Zugriffsbegrenzung](#X902763258f1242326933ce46892d3f549e73e30)
-   [11. Datenlöschung am Vertragsende](#Xbe642a80027ce4ad88cc932e98b8661c2a0d3a6)
-   [12. Anwendbares Recht](#Xa219184d62eb90dfeec612801fd05c5d816c331)

## 1. Rahmen

  --------------------- -------------------------------------------------
  Referenz             CT.AM.JUR.ANX.PAAS 2.1

  Datum                21. Januar 2025
  --------------------- -------------------------------------------------

## 2. Akronyme

  ------------------------------------------------------------------------------
  Akronym       Beschreibung
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Änderungsausschuss

  CMDB          Configuration Management Database -- Konfigurationsverwaltungsdatenbank

  COPIL         Leitungskomitee

  COSTRAT       Strategisches Komitee

  DB            Datenbank

  DRP           Disaster Recovery Plan (Notfallwiederherstellungsplan)

  GTI           Garantie für Eingreifzeiten

  GTR           Garantie für Lösungszeiten

  GTE           Garantie für Eskalationszeiten

  HYPERVISEUR   Betriebssystem, das die Ausführung von virtuellen Maschinen auf einer Recheneinheit ermöglicht

  ITIL          Information Technology Infrastructure Library -- Best Practices für das IT-Service-Management

  IAAS          Infrastructure as a Service

  MCO           Betrieb und Wartung

  MOA           Projektauftraggeber

  MOE           Projektdurchführung

  OS            Betriebssystem

  PAQ           Qualitätsmanagementplan

  PAAS          Platform as a Service

  SDM           Service Delivery Manager

  RFC           Request For Change -- Änderungsanforderung

  RGPD          Allgemeine Datenschutzverordnung

  RPO           Recovery Point Objective -- Zeitpunkt der letzten Sicherung vor einem Vorfall

  RTO           Recovery Time Objective -- Wiederherstellungszeit im Falle eines Vorfalls

  SLA           Service Level Agreement -- Dienstleistungsvereinbarung

  UO            Leistungseinheit

  VABF          Betriebsfähigkeitstest

  VABE          Verfügbarkeitstest

  VM            Virtuelle Maschine

  VSR           Regelmäßiger Servicetest

  SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glossar

Die nachstehenden Ausdrücke, die in diesem Dokument verwendet werden, sind im Einklang mit den nachstehenden Definitionen zu interpretieren:

  --------------------------------------------------------------------------------------------
  Ausdruck                       Definition
  -------------------------------- -----------------------------------------------------------
  \"Secure Temple\"                Bezeichnet den SecNumCloud-zertifizierten IaaS-Service, der von der Firma Cloud Temple angeboten wird, wie in der auf der ANSSI-Website einsehbaren Bescheinigung definiert und im Anhang zu dieser Dienstleistungsvereinbarung bereitgestellt.

  Region                           Eine \"Region\" im Kontext des Cloud-Computing bezeichnet eine geografisch abgegrenzte Gruppe von Verfügbarkeitszonen, die Netzwerk-, Rechen- und Speicherressourcen bereitstellt, um Latenz, Leistung und lokale regulatorische Konformität zu optimieren.

  Zone                             Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der für hohe Verfügbarkeit und Resilienz der Dienste durch geografische Verteilung der Ressourcen konzipiert ist.
  Verfügbarkeit (Availability
  zone) (AZ)

  Tenant                           Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe zugewiesen ist, die eine gemeinsame Infrastruktur nutzt und gleichzeitig die Unabhängigkeit und Sicherheit von Daten und Anwendungen gewährleistet.
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Ausdruck      Definition
  --------------- ---------------------------------------------------------
  Zwischenfall  Ein \"Zwischenfall\" bezeichnet jedes unvorhergesehene Ereignis, das den normalen Betrieb eines Systems stört oder die Datensicherheit gefährdet.

  Problem       Ein \"Problem\" ist die zugrunde liegende Ursache eines oder mehrerer Zwischenfälle, die identifiziert oder vermutet wird und eine Analyse und Lösung erfordert, um Wiederholungen zu verhindern.

  Änderung      Eine \"Änderung\" bezeichnet jede Ergänzung, Änderung oder Löschung, die den Service betrifft und autorisiert, geplant oder übernommen wurde.

  Standard    Eine \"Standardänderung\" ist eine Änderung, die einem Verfahren unterliegt, dessen Implementierungsmodalitäten und Auswirkungen (einschließlich finanzieller) im Voraus bekannt und von den Parteien akzeptiert sind. Sie wird dann in den Katalog der Standardänderungen aufgenommen und kann in bestimmten Fällen eine GTI und eine GTR haben.
  Änderung

  In              Verwaltungshandlungen zur Durchführung der Änderung, wenn diese genehmigt ist (die Änderung im Sinne von ITIL betrifft nur das Änderungsmanagement und nicht deren Durchführung).

  Produktion

  Dienstanforderung  Eine Anforderung zur Weiterentwicklung, die einem Verfahren unterliegt und deren Durchführung: i) die CMDB nicht ändert, ii) das Betriebsverfahren, die Kosten und Risiken im Voraus bekannt und akzeptiert sind und keine spezifischen Rückabwicklungsmethoden erfordern, iii) die Durchführung einer Dienstleistungsvereinbarung unterliegt und im Vertragshonorar enthalten ist, wenn sie innerhalb der Arbeitszeiten und an Arbeitstagen durchgeführt wird.

  Konfigurationselement Ein \"Konfigurationselement\" ist eine identifizierbare Komponente des Informationssystems, wie z. B. eine Software, eine Hardware oder ein Dokument, die im Rahmen des IT-Service-Managements verwaltet wird.

  Service        Ein „Service“ bezeichnet den SecNumCloud-zertifizierten Service, der dem BEAUFTRAGENDEN vom Anbieter bereitgestellt wird, wie in der Rubrik „Dienstleistungsbeschreibung“ dieser Dienstleistungsvereinbarung beschrieben.

  Ereignis      Ein \"Ereignis\" ist jedes erkennbare oder identifizierbare Vorkommnis, das für das Management des Dienstes von Bedeutung sein könnte.

  Zwischenfall   Ein \"Zwischenfall\" bezeichnet ein schwerwiegendes, natürliches oder menschliches, zufälliges oder vorsätzliches Ereignis, das der betroffenen Partei erhebliche Verluste und Schäden verursacht.

  Dienstleistungsvertrag Dieses Dokument, das im Rahmen eines spezifischen Vertrags oder der Allgemeinen Geschäftsbedingungen (CGVU) erstellt wurde, und dies in Übereinstimmung mit den Anforderungen des SecNumCloud-Referenzrahmens.

  Verfügbarkeit  Die Fähigkeit, die Verfügbarkeit und die Aufrechterhaltung der optimalen Leistung eines Dienstes sicherzustellen, entsprechend den in den Servicevereinbarungen definierten Kriterien und Verpflichtungen.
                  Niveau de Service (SLA)

  Supervision     Überwachung eines Informationssystems oder eines
                  Dienstes, bei der verschiedene Daten wie Messungen und
                  Alarme gesammelt werden. Diese Aktivität beschränkt
                  sich auf die Beobachtung und Verfolgung, ohne direkt
                  auf die überwachten Elemente einzuwirken, eine
                  Befugnis, die den Administratoren vorbehalten ist.
  -------------------------------------------------------------------------

## 4. Gegenstand der PaaS-Dienstleistungsvereinbarung des Anbieters

Diese Dienstleistungsvereinbarung legt die Bedingungen fest, unter denen
der Anbieter dem KUNDEN eine Infrastruktur gemäß den Spezifikationen des
„Platform as a Service -- PaaS“-Angebots, qualifiziert als SecNumCloud,
bereitzustellen verpflichtet ist.

Gegenstand der Dienstleistungsvereinbarung:

1.  Die vom KUNDEN erwarteten Leistungsanforderungen in Bezug auf
    Funktionalität und Zuverlässigkeit der Infrastruktur zu präzisieren.
2.  Die Verpflichtungen des Anbieters darzulegen, um die vereinbarten
    Servicelevels zu erfüllen.
3.  Die speziell auf die vorgeschlagene Infrastruktur anwendbaren
    gesetzlichen Normen zu identifizieren.
4.  Die Einheitlichkeit und Integrität bei der Bewertung der erbrachten
    Dienstleistungsqualität sicherzustellen.
5.  Die Exzellenz der erbrachten Dienste zu garantieren, bewertet anhand
    quantitativer Leistungskennzahlen.

Es wird vereinbart, dass im Falle eines Entzugs der SecNumCloud-Qualifikation
des Anbieters diese Vereinbarung durch den KUNDEN rechtmäßig gekündigt
werden kann, ohne dass daraus Strafen erwachsen. In einem solchen Fall
verpflichtet sich der Anbieter, den KUNDEN über diesen Entzug durch
Zustellung einer offiziellen Mitteilung mittels Einschreiben mit
Rückschein zu informieren.

Es ist zu beachten, dass eine Änderung oder Anpassung der
SecNumCloud-Qualifikation nicht als Entzug der ursprünglichen
Qualifikation interpretiert wird.

## 5. Weiterentwicklung der PaaS-Dienstleistungsvereinbarung

Änderungen oder Ergänzungen zu dieser Dienstleistungsvereinbarung werden
ausschließlich auf Anfragen der hierfür bestimmten
Governance-Organe vorgenommen. Diese Änderungsvorschläge werden im
Rahmen des strategischen Komitees geprüft, welches allein befugt ist, die
Aspekte festzulegen, die eine schriftliche Formalisierung erfordern.

Es ist vereinbart, dass jede nach der Genehmigung vorgenommene
Weiterentwicklung der Vereinbarung, die die ursprünglich
festgelegten finanziellen Bedingungen verändert, die Erstellung und
Unterzeichnung eines Nachtrags zum laufenden Vertrag erfordert.

Faktoren, die eine Überarbeitung dieser Vereinbarung erforderlich machen
können, umfassen unter anderem:

-   Die Anpassung der vom Anbieter orchestrierten PaaS-Plattform.
-   Anpassungen der vom Anbieter bereitgestellten Dienste.
-   Veränderungen der Verpflichtungen und der anwendbaren Sanktionen.
-   Organisatorische Reorganisationen beim KUNDEN oder Anbieter.
-   Erweiterung oder Verkleinerung des Dienstleistungsumfangs, zu dem der
    KUNDE zugestimmt hat.

Das Versions- und Revisionsmanagement der Vereinbarung wird im
Präambel des Dokuments aufgeführt, um die Nachverfolgung zu erleichtern.

## 6. Audit

Der Anbieter verpflichtet sich, dem KUNDEN oder einem von ihm
beauftragten externen Auditor Einsicht in alle Dokumente zu
gewähren, die erforderlich sind, um die vollständige Erfüllung
der Bestimmungen von Artikel 28 der Allgemeinen Datenschutzverordnung
(GDPR) zu bestätigen und somit Audits zu ermöglichen.

**Der Anbieter verpflichtet sich insbesondere, dem KUNDEN die Liste
aller Dritten, die Zugriff auf die Daten haben können, zur Verfügung
zu stellen und ihn über jegliche Änderungen bei den Subunternehmern
zu informieren.**

Durch die Annahme dieser Dienstleistungsvereinbarung erteilt der
KUNDEN ausdrücklich seine Zustimmung zu:

1.  **Der Nationalen Agentur für die Sicherheit von Informationssystemen
    (ANSSI)** sowie der zuständigen Qualifizierungsstelle für die
    Überprüfung der Konformität des Dienstes und seines
    Informationssystems mit den im SecNumCloud-Referenzschema
    festgelegten Standards.
2.  **Einem Anbieter von Sicherheitsaudits für Informationssysteme**, der
    vom Anbieter qualifiziert und ausdrücklich benannt wird, um
    Sicherheitsaudits des vom Anbieter bereitgestellten Dienstes
    durchzuführen.

## 7. Beschreibung des Dienstes

Das vom Anbieter vorgeschlagene Dienstleistungsangebot ist
gekennzeichnet durch die Bereitstellung folgender Dienstleistungen,
die sich am Prinzip der gemeinsamen Verantwortung orientieren,
wie es in den Standards des SecNumCloud-Referenzschemas festgelegt
ist:

-   Bereitstellung einer vom Anbieter verwalteten Redhat OpenShift
    Container-Management-Plattform.

Es wird verstanden, dass der Anbieter seine Expertise mobilisiert,
um die Dienstleistungen nach den besten professionellen Praktiken gemäß
ihren Spezifikationen und unter Einhaltung der Standards seiner
ISO/IEC 27001-Zertifizierung sowie der Richtlinien des SecNumCloud-Referenzschemas
durchzuführen.

## 8. Umsetzung des Dienstes

Es wird präzisiert, dass alle Operationen und alle physischen Komponenten, die an
der Bereitstellung des qualifizierten Dienstes beteiligt sind, der Gegenstand
dieser Vereinbarung ist, sich in der Europäischen Union befinden. Das umfasst
insbesondere den Support, die operative Überwachung und das Sicherheitsmonitoring (SOC).

### 8.1. Beschreibung der technischen Komponenten

Die PaaS-Dienste (Platform as a Service) umfassen alle
Komponenten und Dienste, die für ihren optimalen Betrieb
unter Einhaltung der SecNumCloud-Qualifikation erforderlich sind.

In diesem Zusammenhang sind ihre Leistung und Zuverlässigkeit eng
an die technischen Komponenten und Dienstleistungen der **IaaS-Infrastruktur**
des Anbieters gebunden, wie im Dokument [IaaS-Dienstleistungsvereinbarung](../Working%20in%20progress%20-%20not%20use/iaas/sla_iaas.md) des
Anbieters spezifiziert.

#### 8.1.1. REDHAT OpenShift Serviceplattform

Der Dienst umfasst die Bereitstellung in einer Region über 3
Verfügbarkeitszonen,

#### 8.1.2. Betriebsinfrastruktur der Redhat OpenShift-Plattform

Der Anbieter stellt dem KUNDEN die Administrationskonsole und die API
zur Verfügung, die für den Betrieb seiner RedHat OpenShift PaaS-Umgebungen notwendig ist.
Er verpflichtet sich auch, diese in optimalem Betriebszustand und
ständig sicher zu halten.

Im spezifischen Rahmen des bereitgestellten Dienstes stellt der Anbieter dem KUNDEN
alle Schnittstellen und APIs der RedHat OpenShift-Plattform innerhalb
des ausgewählten Tenants zur Verfügung. Es ist die Verantwortung des KUNDEN,
die entsprechenden Sicherheitsvorrichtungen zu installieren, wie Firewalls,
Web Application Firewalls (WAF) und andere Schutzmaßnahmen, sowie die damit
verbundenen Filterregeln zu definieren, um den Zugang zu seiner Plattform
gemäß seiner Sicherheitsrichtlinie zu sichern.

Der Anbieter weist den KUNDEN darauf hin, dass eine ungewöhnliche Nutzung
seiner Administrationskonsole, insbesondere bei Überlastung seiner
Befehl-APIs (Hammering), automatische Sicherheitsmaßnahmen auslösen
kann, die den Zugang zu den Befehl-APIs oder zu bestimmten Diensten des
Anbieters blockieren. Es sei darauf hingewiesen, dass dies keine
Dienstuntätigkeit darstellt, sondern eine Schutzmaßnahme für die
Infrastruktur des Anbieters; folglich kann der KUNDEN dies nicht als
Dienstuntätigkeit in seinen Berechnungen betrachten.

Darüber hinaus informiert der Anbieter den KUNDEN, dass exakt identische
Anfragen (Duplikate) an seine APIs auf eine pro Sekunde beschränkt sind (Throttling).
Wenn der KUNDEN identische Anfragen mit einer höheren Frequenz sendet, darf deren Ablehnung
nicht als Dienstuntätigkeit interpretiert werden.

#### 8.1.3. Zugehörige Backup-Infrastruktur

Der Anbieter stellt dem KUNDEN eine integrierte, dedizierte und verwaltete
Backup-Plattform bereit, die dem Schutz der Daten seiner RedHat OpenShift-Umgebungen dient.
Der Anbieter gewährleistet den fortlaufend optimalen Betriebszustand und die
Sicherheit dieser integrierten Backup-Plattform. Unabhängig von der
Anzahl der vom KUNDEN gebuchten Verfügbarkeitszonen garantiert der Anbieter,
dass die Backup-Plattform des KUNDEN außerhalb der Verfügbarkeitszone
der gesicherten Arbeitslasten liegt.

Der Backup-Service beschränkt sich auf die Sicherung von
virtuellen Maschinen und Topologie-Konfigurationsdokumentationen der IaaS-Umgebung des
SecNumCloud Tenants des KUNDEN. Die Erstellung und Umsetzung einer
angemessenen Sicherungsrichtlinie durch den KUNDEN hängt von der
Buchung spezifischer Arbeitseinheiten ab. Daher liegt es in der
Verantwortung des KUNDEN, sicherzustellen, dass die technischen Ressourcen
beim Anbieter verfügbar sind, um seine Sicherungsrichtlinie zu
implementieren, oder diese je nach verfügbaren Mitteln anzupassen.

Der Anbieter verpflichtet sich, den KUNDEN im Falle von Kapazitätsbeschränkungen zu
benachrichtigen und Beratung zur Optimierung der Ressourcen bereitzustellen.
Die Verpflichtungen des Anbieters beschränken sich auf die Umsetzung der
vom KUNDEN geäußerten Bedürfnisse hinsichtlich der Sicherungsrichtlinie
innerhalb der abonnierten Ressourcen.

#### 8.1.4. Umsetzung von Disaster Recovery- oder Business Continuity-Lösungen

Der Anbieter stellt dem KUNDEN alle notwendigen technischen Lösungen zur
Verfügung, um eine optimale Verteilung seiner Ressourcen über verschiedene
Verfügbarkeitszonen zu gewährleisten. Es liegt in der Verantwortung des
KUNDEN, diese Ressourcenverteilung effizient zu verwalten, für die er
die Werkzeuge
du Prestataire disponibles à cet usage.

En particulier, les applications déployées sur la plateforme RedHat
OpenShift doivent prendre en charge les mécanismes de redondance
proposés par le Prestataire afin de pouvoir bénéficier des solutions de
reprise d\'activité ou de continuité d\'activité associées.

## 9. Engagements et niveaux de services

Le Prestataire s'engage à garantir une surveillance continue de la
performance et de l'intégrité sécuritaire de ses plateformes et
services, veillant à leur fonctionnement optimal.

L\'indisponibilité d\'un service, faisant l\'objet d\'un indicateur de
performance, est reconnue dès son identification par le système de
supervision du Prestataire, ou suite à une notification par un
utilisateur du COMMANDITAIRE. Le début de l\'indisponibilité est fixé au
moment le plus précoce entre ces deux événements, afin de garantir un
décompte précis et juste du temps d\'indisponibilité.

La fin de l\'indisponibilité est officiellement marquée par la
restauration complète du service, confirmée soit par les outils de
supervision du Prestataire, soit par un retour utilisateur, assurant
ainsi une reprise effective des opérations et une mesure fidèle de la
durée de l\'interruption.

### 9.1. Engagements de disponibilité de la plateforme RedHat OpenShift

Le Prestataire s'engage à maintenir un niveau de disponibilité et de
performance conforme aux standards définis pour chaque période
spécifiée. Les engagements de niveau de service (Service Level
Agreements, SLAs) s'appliquent sous réserve que le COMMANDITAIRE
implémente ses systèmes à travers au moins deux des zones de
disponibilité présentes dans la région concernée.

En l\'absence de respect de ces conditions par le COMMANDITAIRE,
celui-ci se verra dans l\'incapacité de revendiquer l\'application des
SLAs concernés, lesquels sont spécifiquement identifiés par un
astérisque (\*). L\'accessibilité aux SLAs se fait via l\'interface
COMMANDITAIRE. **Les mesures s'entendent calculées mensuellement**:

-   **SLA 1 (\*) : IC-PAAS_SNC-01** -- Disponibilité de la
    plateforme RedHat OpenShift : taux de disponibilité garanti de
    99,9%, calculé sur une base 24h/24, 7j/7.

***Remarques*** :

-   *En réponse une attaque par déni de service distribué (DDoS), le
    Prestataire se réserve le droit d\'ajuster sa configuration de
    routage internet pour limiter l\'impact de cette attaque et
    sauvegarder son infrastructure. En particulier, si une adresse IP
    appartenant au COMMANDITAIRE est ciblée, le Prestataire peut
    recourir à la technique de blackholing via la communauté BGP pour
    bloquer tout le trafic vers l\'adresse IP visée en amont chez ses
    fournisseurs, dans le but de protéger les ressources du
    COMMANDITAIRE ainsi que celles d'autres COMMANDITAIREs et de
    l\'infrastructure du Prestataire. Le Prestataire encourage vivement
    le COMMANDITAIRE à adopter des mesures similaires, telles que
    l\'utilisation de logiciels de pare-feu d\'applications web
    disponibles sur le marché, et à configurer soigneusement ses groupes
    de sécurité via l\'API de commande.*

-   *Le Prestataire insiste sur la nécessité pour le COMMANDITAIRE de
    minimiser les ouvertures de flux, en évitant notamment de rendre
    accessibles les ports d\'administration **SSH** (port TCP 22) et
    **RDP** (port TCP 3389) depuis l\'ensemble d\'Internet (sous-réseau
    0.0.0.0/0), ainsi que les protocoles internes tels que **SMB** (port
    TCP/UDP 445) ou **NFS** (port TCP/UDP 2049).*

## 10. Modèle de responsabilités partagées applicable

### 10.1. Responsabilité et Obligations du Prestataire

Le Prestataire s'engage à mettre à la disposition du COMMANDITAIRE des
interfaces utilisateur en langue française et anglaise, facilitant ainsi
l'accès et la gestion des services fournis. Le COMMANDITAIRE, de son
côté, s'engage à respecter les contraintes légales et réglementaires en
vigueur relatives aux données qu'il confie au Prestataire pour
traitement.

En cas de transmission de données sujettes à des exigences légales
spécifiques, le Prestataire collaborera avec le COMMANDITAIRE pour
identifier et mettre en œuvre les mesures de sécurité nécessaires,
conformément aux obligations du Prestataire et dans le cadre de la
prestation de services.

Le Prestataire prend également l\'engagement d'examiner et de prendre
en considération les besoins spécifiques liés aux secteurs d'activité
du COMMANDITAIRE, en respectant les limitations de sa responsabilité,
pour garantir un niveau de sécurité adapté aux informations traitées.

Si un projet est susceptible d\'impacter la sécurité du Service offert
ou la disponibilité dudit Service ou encore à engendrer une perte de
fonctionnalité, le Prestataire s\'engage à informer à travers la console
ou par courriel au contact du COMMANDITAIRE et dans un délai raisonnable
le COMMANDITAIRE des impacts potentiels, des mesures correctives
envisagées et des risques résiduels qui le concerne, assurant une
transparence totale.

Le Prestataire s'engage à ne pas utiliser les données du COMMANDITAIRE
issues de la production pour réaliser des tests, à l'exception d'en
obtenir préalablement l'autorisation explicite du COMMANDITAIRE, auquel
cas le Prestataire s\'engage à anonymiser ces données et à en assurer la
confidentialité lors de leur anonymisation.

En cas de changement de sous-traitant pour l\'hébergement, Le
Prestataire informera le COMMANDITAIRE en amont, s'assurant que cette
transition n'affecte pas négativement le service fourni.

À la demande du COMMANDITAIRE, le Prestataire fournira l'accès à son
règlement intérieur, à sa charte d'éthique, aux sanctions applicables
en cas de non-respect de sa politique de sécurité, aux événements le
concernant, aux procédures relatives au service et aux exigences
spécifiques de sécurité.

Le Prestataire s'engage à informer le COMMANDITAIRE de tout changement
à venir sur des éléments logiciels sous la responsabilité de Cloud
Temple dès lors que la compatibilité complète ne peut être assurée.

### 10.2. Limitation de responsabilité du Prestataire

La structure de responsabilité partagée réduit efficacement l'étendue
de l'intervention du Prestataire aux aspects liés à la fourniture
d'une plateforme RedHat OpenShift fonctionnelle, comprenant :

-   La gestion de l'infrastructure IaaS qui prend en charge la
    plateforme RedHat OpenShift et son provisionnement,
-   La gestion des systèmes nécessaires au bon fonctionnement de la
    plateforme,
-   Le maintien en conditions de sécurité,
-   La mise à jour de la plateforme RedHat OpenShift,
-   La sauvegarde des données de configuration essentielles de cette
    plateforme, à l'exception des données et des applications du
    COMMANDITAIRE qui relèvent de sa responsabilité.

Elle exclue notamment, mais sans s'y limiter :

-   La mise à jour des systèmes d'exploitation et des logiciels
    installés par le COMMANDITAIRE sur ses environnements OpenShift dans
    ses espaces locatifs,
-   La sécurité des programmes, logiciels et applications installés au
    sein de l'environnement OpenShift par le COMMANDITAIRE,
-   La sauvegarde des données au niveau applicatif,
-   La configuration des politiques de sauvegarde.

### 10.3. Limitation d\'accès

Dans le cadre de cette convention de service, le Prestataire est
formellement interdit d'accéder aux tenants appartenant au
COMMANDITAIRE sans autorisation préalable. Il est de la responsabilité
du COMMANDITAIRE de fournir les accès nécessaires au personnel du
Prestataire, selon les besoins spécifiques de l'hébergement et, le cas
échéant, des services professionnels de support, si cette option a été
choisie par le COMMANDITAIRE.

Le COMMANDITAIRE reconnaît que ces accès sont accordés exclusivement
pour les besoins liés à la prestation de services convenus, assurant
ainsi une gestion sécurisée et conforme aux termes de l\'accord.

L'accès distant par des tiers impliqués dans la prestation de service
du Prestataire est strictement interdit. Dans l'éventualité où une
exigence technique spécifique nécessiterait un tel accès, celui-ci ne
pourrait être établi qu'après avoir clairement notifié le
COMMANDITAIRE, fourni une justification détaillée et obtenu son accord
écrit.

Cette mesure garantit le contrôle et la sécurité des données du
COMMANDITAIRE, en s'assurant que toute exception à la règle est dûment
autorisée et documentée.

## 11. Effacement des données en fin de contrat

À l'issue du contrat, qu'il arrive à échéance ou qu'il soit résilié
pour quelque raison que ce soit, le Prestataire s'engage à procéder à
l'effacement sécurisé de l'intégralité des données du COMMANDITAIRE, y
compris les données techniques. Le Prestataire s'assurera de
communiquer au COMMANDITAIRE un préavis formel, respectant un délai de
vingt et un (21) jours calendaires. Les données du COMMANDITAIRE seront
alors supprimées dans un délai maximum de trente (30) jours suivant
cette notification.

Pour attester de cette suppression, le Prestataire remettra au
COMMANDITAIRE un certificat confirmant l'effacement des données.

## 12. Droit applicable

Le droit applicable pour la presente convention de service est le droit
français.

En cas de recours par le Prestataire, dans le cadre des services fournis
au COMMANDITAIRE, à une société tierce, y compris un sous-traitant, dont
le siège social, l'administration centrale ou le principal
établissement est situé dans un État non membre de l'Union Européenne,
ou qui est propriété ou sous le contrôle d'une société tierce
domiciliée en dehors de l'Union Européenne, le Prestataire s'engage à
garantir que ladite société tierce n'aura aucun accès aux données
traitées par le service du Prestataire.

Il est à noter que les données visées comprennent celles confiées au
Prestataire par le COMMANDITAIRE, ainsi que toutes les données
techniques telles que les identités des bénéficiaires et des
Administratoren der technischen Infrastruktur, die von Netzwerken verarbeiteten Daten, die Protokolle der technischen Infrastruktur, das Verzeichnis, die Zertifikate, die Zugangskonfiguration, usw., die Informationen über den AUFTRAGGEBER enthalten.

Zur Klarstellung: Der Begriff der Kontrolle wird gemäß II von Artikel L233-3 des Handelsgesetzbuchs definiert.
