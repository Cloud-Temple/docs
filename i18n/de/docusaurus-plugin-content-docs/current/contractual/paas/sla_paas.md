---

title: Convention de Service PaaS

---

**Inhaltsverzeichnis**

- [1. Rahmen](#1-rahmen)
- [2. Akronyme](#2-akronyme)
- [3. Glossar](#3-glossar)
- [4. Gegenstand der PaaS-Servicevereinbarung des Anbieters](#4-gegenstand-der-paas-servicevereinbarung-des-anbieters)
- [5. Entwicklung der PaaS-Servicevereinbarung](#5-entwicklung-der-paas-servicevereinbarung)
- [6. Audit](#6-audit)
- [7. Dienstbeschreibung](#7-dienstbeschreibung)
- [8. Implementierung des Dienstes](#8-implementierung-des-dienstes)
  - [8.1. Beschreibung der technischen Komponenten](#81-beschreibung-der-technischen-komponenten)
    - [8.1.1. REDHAT OpenShift Dienstplattform](#811-redhat-openshift-dienstplattform)
    - [8.1.2. Steuerungssoftware-Infrastruktur der Redhat Openshift Plattform](#812-steuerungssoftware-infrastruktur-der-redhat-openshift-plattform)
    - [8.1.3. Zugehörige Backup-Infrastruktur](#813-zugehörige-backup-infrastruktur)
    - [8.1.4. Implementierung von Notfallwiederherstellungs- oder Geschäftskontinuitätslösungen](#814-implementierung-von-notfallwiederherstellungs-oder-geschäftskontinuitätslösungen)
- [9. Verpflichtungen und Service Levels](#9-verpflichtungen-und-service-levels)
  - [9.1. Verfügbarkeitsverpflichtungen der RedHat OpenShift Plattform](#91-verfügbarkeitsverpflichtungen-der-redhat-openshift-plattform)
- [10. Anwendbares Modell der geteilten Verantwortung](#10-anwendbares-modell-der-geteilten-verantwortung)
  - [10.1. Verantwortung und Verpflichtungen des Anbieters](#101-verantwortung-und-verpflichtungen-des-anbieters)
  - [10.2. Haftungsbeschränkung des Anbieters](#102-haftungsbeschränkung-des-anbieters)
  - [10.3. Zugriffsbeschränkung](#103-zugriffsbeschränkung)
- [11. Datenlöschung am Ende des Vertrags](#11-datenlöschung-am-ende-des-vertrags)
- [12. Anwendbares Recht](#12-anwendbares-recht)

## 1. Rahmen

|           |                        |
| --------- | ---------------------- |
| Referenz  | CT.AM.JUR.ANX.PAAS 2.0 |
| Datum     | 13. März 2024          |

## 2. Akronyme

| Akronym    | Beschreibung                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Beratungsgremium für Änderungen                                                     |
| CMDB        | Configuration Management Database – Datenbank zur Konfigurationsverwaltung                                 |
| COPIL       | Lenkungsausschuss                                                                                           |
| COSTRAT     | Strategische Ausschuss                                                                                      |
| DB          | Database (Datenbank)                                                                                        |
| DRP         | Disaster Recovery Plan (Notfallwiederherstellungsplan)                                                      |
| GTI         | Eingreifzeitgarantie                                                                                        |
| GTR         | Lösungszeitgarantie                                                                                         |
| GTE         | Eskalationszeitgarantie                                                                                     |
| HYPERVISEUR | Betriebssystem, das die Ausführung von VMs auf einer Recheneinheit ermöglicht                               |
| ITIL        | Information Technology Infrastructure Library – Best Practices für das IT-Management                        |
| IAAS        | Infrastructure as a Service                                                                                 |
| MCO         | Betriebssicherstellung                                                                                      |
| MOA         | Auftraggeber                                                                                               |
| MOE         | Auftragnehmer                                                                                               |
| OS          | Operating System (Betriebssystem)                                                                           |
| PAQ         | Qualitätsmanagementplan                                                                                     |
| PAAS        | Platform as a Service                                                                                       |
| SDM         | Service Delivery Manager                                                                                    |
| RFC         | Request For Change – Änderungsanfrage                                                                       |
| RGPD        | Datenschutz-Grundverordnung (DSGVO)                                                                         |
| RPO         | Recovery Point Objective – Frische der wiederhergestellten Daten im Notfall                                 |
| RTO         | Recovery Time Objective – Wiederherstellungszeit des Dienstes im Notfall                                    |
| SLA         | Service Level Agreement – Dienstgütevereinbarung                                                            |
| UO          | Arbeitseinheit                                                                                              |
| VABF        | Betriebsfähigkeitstest                                                                                      |
| VABE        | Wartungsfähigkeitstest                                                                                      |
| VM          | Virtual Machine (Virtuelle Maschine)                                                                        |
| VSR         | Regelmäßige Servicetest                                                                                     |
| SNC         | SecNumCloud                                                                                                 |

## 3. Glossar

Die im vorliegenden Dokument verwendeten Ausdrücke werden gemäß den ihnen nachstehend zugewiesenen Definitionen ausgelegt:

| Ausdruck                                          | Definition                                                                                                                                                                                                                                                                             |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                   | Die Bezeichnung "Secure Temple" bezieht sich auf den IaaS- (Infrastructure as a Service) Dienst, qualifiziert für SecNumCloud, angeboten von der Firma Cloud Temple.                                                                                                                  |
| Region                                            | Eine "Region" im Kontext des Cloud Computings bezeichnet eine geografisch abgegrenzte Gruppe von Verfügbarkeitszonen,<br/> die Netzwerk-, Rechen- und Speicherdienste bereitstellt, um Latenz, Leistung <br/> und lokale regulatorische Anforderungen zu optimieren |
| Verfügbarkeitszone<br/>(AZ)<br/>(Availability Zone)| Ein spezifischer und isolierter Bereich der Cloud-Computing-Infrastruktur, der so konzipiert ist, dass er durch die geografische Verteilung der Ressourcen hohe Verfügbarkeit und Ausfallsicherheit der Dienste gewährleistet.                                                          |
| Tenant                                            | Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe zugewiesen ist und eine gemeinsame Infrastruktur nutzt, während die Unabhängigkeit und Sicherheit der Daten und Anwendungen gewahrt bleibt.                                                                           |

| Ausdruck                   | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vorfall                    | Ein "Vorfall" bezeichnet jedes unvorhergesehene Ereignis, das den normalen Betrieb eines Systems stört oder die Sicherheit von Daten und Infrastrukturen beeinträchtigt.                                                                                                                                                                                                                                                                       |
| Problème                 | Ein "Problem" ist eine grundlegende Ursache eines oder mehrerer Vorfälle, die identifiziert oder vermutet wird und deren Analyse und Lösung erforderlich ist, um deren Wiederholung zu verhindern                                                                                                                                                                                                                                                                          |
| Changement               | Ein "Change" bezeichnet jede Änderung in der IT-Umgebung, die darauf abzielt, Systeme, Prozesse oder Dienste zu verbessern oder zu korrigieren.                                                                                                                                                                                                                                                                                             |
| changement standard      | Ein "Standard-Change" ist eine vorab genehmigte, geringfügige, wiederholte Änderung, die einem festgelegten Verfahren in der IT-Umgebung folgt.                                                                                                                                                                                                                                                                                               |
| Mise en production       | Verwaltungsaktion(en) zur Durchführung des Changes, wenn dieser genehmigt wurde <br/>(der Change im ITIL-Sinne bezieht sich nur auf das Change-Management und nicht auf dessen Durchführung/Umsetzung).                                                                                                                                                                                                                                       |
| Demande de service       | Anfrage nach einer Änderung, die einem Verfahren unterliegt, dessen Durchführung: <br/> i) die CMDB nicht ändert,<br/>ii) das Verfahren, die Kosten und die Risiken sind im Voraus bekannt und akzeptiert und erfordern keine speziellen Rückverfahrensmodalitäten<br/> iii) die Durchführung unterliegt einer Service-Level-Vereinbarung und ist im Vertragsentgelt enthalten, wenn sie während der Geschäftszeiten durchgeführt wird.               |
| Element de configuration | Ein "Configuration Item" ist eine identifizierbare Komponente des Informationssystems, wie Software, Hardware oder ein Dokument,<br/> die im Rahmen des IT-Service-Managements verwaltet wird                                                                                                                                                                                                                                                |
| Service                  | Ein "Service" ist ein Mittel, um den KUNDEN Wert zu liefern, indem es die gewünschten Ergebnisse erleichtert, ohne dass diese die spezifischen Kosten und Risiken managen müssen.<br/>                                                                                                                                                                                                                                                   |
| Evenement                | Ein "Ereignis" ist jede erkennbare oder identifizierbare Vorkommnis in einem IT-System oder Netzwerk, die für das IT-Service-Management von Bedeutung sein kann                                                                                                                                                                                                                                                                             |
| Sinistre                 | Ein "Schadensfall" ist ein unvorhergesehenes schädigendes Ereignis, das materielle, finanzielle oder Datenverluste für einen KUNDEN zur Folge hat                                                                                                                                                                                                                                                                                             |
| Convention de service    | Dieses Dokument, das im Rahmen eines spezifischen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (AGB) erstellt wurde, wobei dies mit den Anforderungen des SecNumCloud-Referenzrahmens übereinstimmt.                                                                                                                                                                                                                      |
| Disponibilité            | Fähigkeit, die Verfügbarkeit und Aufrechterhaltung der optimalen Leistung eines Dienstes in Übereinstimmung mit den in den Service Level Agreements (SLA) definierten Kriterien und Verpflichtungen sicherzustellen                                                                                                                                                                                                                            |
| Supervision              | Überwachung eines Informationssystems oder eines Dienstes, die die Erfassung verschiedener Daten wie Messungen und Alarme beinhaltet. <br/>Diese Tätigkeit beschränkt sich auf Beobachtung und Verfolgung, ohne direkt auf die überwachten Elemente einzugreifen, eine Aufgabe, die den Administrationsoperationen vorbehalten ist.                                                                                                        |

## 4. Objet de la convention de service PaaS du Prestataire

La présente Convention de Services établit les termes et conditions selon lesquels le Prestataire s'engage à délivrer au CLIENT une infrastructure 
conforme aux spécifications de l'offre « Platform as a Service – PaaS », dûment qualifiée SecNumCloud.

Die Servicevereinbarung zielt darauf ab:

1. Die vom KUNDEN erwarteten Leistungsanforderungen in Bezug auf Funktionalität und Zuverlässigkeit der Infrastruktur festzulegen.
2. Die Verpflichtungen des Anbieters zur Erfüllung der vereinbarten Servicelevels darzulegen.
3. Die speziell für die vorgeschlagene Infrastruktur geltenden regulatorischen Standards zu identifizieren.
4. Einheitlichkeit und Integrität bei der Bewertung der Qualität der erbrachten Dienstleistungen zu gewährleisten.
5. Die Exzellenz der erbrachten Dienstleistungen zu garantieren, bewertet anhand quantitativer Leistungsindikatoren.

Es wird festgelegt, dass im Falle eines Entzugs der SecNumCloud-Qualifikation des Anbieters der vorliegende Vertrag von Rechts wegen ohne Strafen vom KUNDEN gekündigt werden kann. 
In einem solchen Fall verpflichtet sich der Anbieter, den KUNDEN über diese Aberkennung durch eine offizielle Benachrichtigung per Einschreiben mit Rückschein zu informieren.

Es wird darauf hingewiesen, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Widerruf der ursprünglichen Qualifikation ausgelegt wird.

## 5. Evolution de la convention de service PaaS

Änderungen oder Ergänzungen dieser Servicevereinbarung ergeben sich ausschließlich aus Anfragen der hierfür bestimmten Governance-Organe. 
Diese Änderungsvorschläge werden im strategischen Ausschuss überprüft, der als einziges Gremium befugt ist, die formelle schriftliche Ausarbeitung der erforderlichen Änderungen zu bestimmen.

Es wird vereinbart, dass jede nach der Genehmigung vorgenommene Änderung der Vereinbarung, die die ursprünglich festgelegten finanziellen Bedingungen verändert, die Erstellung und Unterzeichnung eines Nachtrags zum laufenden Vertrag erfordert.

Die Faktoren, die eine Überarbeitung dieser Vereinbarung bedingen können, umfassen unter anderem:

- Die Anpassung der vom Anbieter orchestrierten PaaS-Plattform.
- Anpassungen der vom Anbieter bereitgestellten Dienstleistungen.
- Änderungen der eingegangenen Verpflichtungen und anwendbaren Sanktionen.
- Organisationelle Neuausrichtungen beim KUNDEN oder beim Anbieter.
- Die Ausweitung oder Reduzierung des Umfangs der vom KUNDEN abonnierten Dienstleistungen.

Die Verwaltung der Versionen und Überarbeitungen der Vereinbarung wird im Vorwort des Dokuments festgehalten, um die Nachverfolgung zu erleichtern.

## 6. Audit 

Der Anbieter verpflichtet sich, dem KUNDEN oder einem von diesem benannten Dritten die Einsicht in alle Dokumente zu ermöglichen, die zur Bestätigung der vollständigen Einhaltung der Verpflichtungen im Zusammenhang mit den Bestimmungen von Artikel 28 der Allgemeinen Datenschutzverordnung (GDPR) erforderlich sind, um die Durchführung von Audits zu erleichtern.

**Der Anbieter verpflichtet sich insbesondere dazu, dem KUNDEN die Liste aller Dritten zur Verfügung zu stellen, die Zugriff auf die Daten erhalten können und ihn über jede Änderung der Unterauftragnehmer zu informieren.**

Mit der Annahme dieser Servicevereinbarung erteilt der KUNDE seine ausdrückliche Genehmigung an:

1. __Die Nationale Agentur für die Sicherheit der Informationssysteme (ANSSI)__ sowie die zuständige Qualifikationsstelle, um die Konformität des Dienstes und seines Informationssystems mit den im SecNumCloud-Referenzrahmen definierten Standards zu überprüfen.
2. __Einen vom Anbieter benannten, qualifizierten Serviceanbieter für die Sicherheitsüberprüfung von Informationssystemen__, um Sicherheitsprüfungen des vom Anbieter gelieferten Dienstes durchzuführen.

## 7. Description du service

Das vom Anbieter vorgeschlagene Dienstleistungsangebot zeichnet sich durch die Bereitstellung der folgenden Leistungen aus, 
die sich an dem im SecNumCloud-Referenzrahmen detailliert beschriebenen Prinzip der geteilten Verantwortung ausrichten:

- Die Bereitstellung einer vom Anbieter verwalteten Redhat Openshift-Containerverwaltungsplattform.

Es wird davon ausgegangen, dass der Anbieter seine Expertise einsetzt, um die Dienstleistungen nach bestmöglichen professionellen Praktiken zu erbringen,

conformément à leurs Spécifications et en respectant les normes de sa certification ISO/IEC 27001 ainsi que les directives du Référentiel SecNumCloud.

## 8. Mise en œuvre du service

Il est précisé que toutes les opérations et tous les composants physiques impliqués dans la fourniture du service qualifié, dont la présente convention fait l’objet,
sont situés dans l’Union Européenne. Cela inclut notamment le support, la supervision opérationnelle et la supervision de sécurité (SOC).

### 8.1. Description des composants techniques

Les services PaaS (Platform as a Service) englobent l'intégralité des composants et services requis pour son fonctionnement optimal dans le respect de la qualification SecNumCloud.

À cet égard, leur performance et fiabilité sont intrinsèquement liées aux composants techniques et aux services de **l'infrastructure IaaS** du Prestataire, comme spécifié dans le document [Convention de Service IaaS](../iaas/sla_iaas.md) du Prestataire.

#### 8.1.1. Plateforme de service REDHAT OpenShift

Le service englobe la mise à disposition au sein d'une région, sur 3 zones de disponibilité,

#### 8.1.2. Infrastructure logiciel de pilotage de la plateforme Redhat Openshift

Le Prestataire fournit au CLIENT la console d'administration et l'API nécessaires à l'exploitation de ses environnements PaaS RedHat OpenShift.
Il s'engage également à les maintenir en condition opérationnelle optimale et à assurer sa sécurité de manière continue.

Dans le cadre spécifique du service fourni, le Prestataire met à la disposition du CLIENT toutes les interfaces et API de la plateforme RedHat OpenShift au sein du tenant sélectionné. Il revient au CLIENT d'instaurer les dispositifs de sécurité appropriés, tels que les pare-feux (firewall), les pare-feux applicatifs Web (WAF), et autres mesures de protection, ainsi que de définir les règles de filtrage associées pour sécuriser l'accès à sa plateforme conformément à sa politique de sécurité.

Le Prestataire alerte le Client sur le fait qu'une utilisation anormale de sa console d'administration, notamment en cas de surcharge de ses APIs de commande (hammering),
peut déclencher des mesures de sécurité automatiques entrainant le blocage de l'accès aux APIs de commande ou à certains services du Prestataire. Il convient de souligner que cette situation ne constitue pas une indisponibilité du service mais une action de protection de l'Infrastructure du Prestataire ;
par conséquent, le Client ne peut la considérer comme une indisponibilité dans ses calculs.

De plus, le Prestataire précise au Client que les requêtes parfaitement identiques (doublons) envoyées à ses APIs sont limitées à une par seconde (Throttling).
Si le Client soumet des requêtes identiques à une fréquence supérieure, leur rejet ne doit pas être interprété comme une indisponibilité du service.

#### 8.1.3. Infrastructure de sauvegarde associée

Le Prestataire met à disposition du CLIENT une plateforme de sauvegarde intégrée, dédiée et gérée, destinée à la protection des données de ses environnements RedHat Openshift.
Le Prestataire assure le maintien en condition opérationnelle et en condition de sécurité de cette plateforme intégrée de sauvegarde.
Indépendamment du nombre de zones de disponibilité souscrites par le CLIENT, le Prestataire garantit que la plateforme de
sauvegarde du CLIENT sera située en dehors de la zone de disponibilité des charges de travail sauvegardées.

La prestation de sauvegarde se limite à la sauvegarde des machines virtuelles et des configurations de topologie de l'environnement IaaS des tenants SecNumCloud du CLIENT.
L'élaboration et l'application d'une politique de sauvegarde adéquate par le CLIENT dépendent de la souscription à des unités d'œuvre spécifiques.
Il incombe donc au CLIENT de s'assurer de la disponibilité des ressources techniques nécessaires auprès du Prestataire
pour mettre en œuvre sa politique de sauvegarde ou d'ajuster cette dernière en fonction des moyens disponibles.

Le Prestataire s'engage à notifier le CLIENT en cas de contraintes de capacité et à fournir une assistance conseil pour l'optimisation des ressources.
Les obligations du Prestataire se limiteront à la mise en œuvre des besoins exprimés par le CLIENT en matière de politique de sauvegarde, dans le cadre des ressources souscrites.

#### 8.1.4. Mise en œuvre de solutions de reprise d'activité ou de continuité d'activité

Le Prestataire fournit au CLIENT l'ensemble des solutions techniques nécessaires pour garantir une répartition optimale de ses ressources
à travers diverses zones de disponibilité. Il incombe au CLIENT la responsabilité de gérer efficacement cette distribution de ressources,
pour laquelle il a la possibilité d'exploiter les outils du Prestataire disponibles à cet usage.

En particulier, les applications déployées sur la plateforme RedHat OpenShift doivent prendre en charge les mécanismes de redondance proposés par le Prestataire afin de pouvoir bénéficier des solutions de reprise d'activité ou de continuité d'activité associées.

## 9. Engagements et niveaux de services

Le Prestataire s'engage à garantir une surveillance continue de la performance et de l'intégrité sécuritaire de ses
plateformes et services, veillant à leur fonctionnement optimal.

L'indisponibilité d'un service, faisant l'objet d'un indicateur de performance, est reconnue dès son identification par le système de supervision du Prestataire,
ou suite à une notification par un utilisateur du CLIENT. Le début de l'indisponibilité est fixé au moment le plus précoce entre ces deux événements,
afin de garantir un décompte précis et juste du temps d'indisponibilité.

La fin de l'indisponibilité est officiellement marquée par la restauration complète du service, confirmée soit par les outils de supervision du Prestataire,
soit par un retour utilisateur, assurant ainsi une reprise effective des opérations et une mesure fidèle de la durée de l'interruption.

### 9.1. Engagements de disponibilité de la plateforme RedHat OpenShift

Le Prestataire s'engage à maintenir un niveau de disponibilité et de performance conforme aux standards définis pour chaque période spécifiée.
Les engagements de niveau de service (Service Level Agreements, SLAs) s'appliquent sous réserve que le CLIENT implémente ses systèmes à travers
au moins deux des zones de disponibilité présentes dans la région concernée.

En l'absence de respect de ces conditions par le CLIENT, celui-ci se verra dans l'incapacité de revendiquer l'application des SLAs concernés,
lesquels sont spécifiquement identifiés par un astérisque (*). L'accessibilité aux SLAs se fait via l'interface CLIENT. **Les mesures s'entendent calculées mensuellement**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Disponibilité de la plateforme RedHat OpenShift : taux de disponibilité garanti de 99,9%, calculé sur une base 24h/24, 7j/7.

_**Remarques**_ :

- *En réponse à une attaque par déni de service distribué (DDoS), le Prestataire se réserve le droit d'ajuster sa configuration de routage internet pour
limiter l'impact de cette attaque et sauvegarder son infrastructure. En particulier, si une adresse IP appartenant au CLIENT est ciblée, le Prestataire peut recourir à la technique de blackholing
via la communauté BGP pour bloquer tout le trafic vers l'adresse IP visée en amont chez ses fournisseurs, dans le but de protéger les ressources du CLIENT ainsi que celles d'autres clients
et de l'infrastructure du Prestataire. Le Prestataire encourage vivement le CLIENT à adopter des mesures similaires, telles que l'utilisation de logiciels de pare-feu
d'applications web disponibles sur le marché, et à configurer soigneusement ses groupes de sécurité via l'API de commande.*

- *Le Prestataire insiste sur la nécessité pour le CLIENT de minimiser les ouvertures de flux, en évitant notamment de rendre accessibles les ports
d'administration **SSH** (port TCP 22) et **RDP** (port TCP 3389) depuis l'ensemble d'Internet (sous-réseau 0.0.0.0/0), ainsi que les protocoles internes tels que **SMB** (port TCP/UDP 445) ou **NFS** (port TCP/UDP 2049).*

## 10. Modèle de responsabilités partagées applicable

### 10.1. Responsabilité et Obligations du Prestataire

Le Prestataire s'engage à mettre à la disposition du CLIENT des interfaces utilisateur en langue française et anglaise, facilitant ainsi l'accès et la gestion des services fournis.
Le CLIENT, de son côté, s'engage à respecter les contraintes légales et réglementaires en vigueur relatives aux données qu'il confie au Prestataire pour traitement.

En cas de transmission de données sujettes à des exigences légales spécifiques, le Prestataire collaborera avec le CLIENT pour identifier et mettre en œuvre
les mesures de sécurité nécessaires, conformément aux obligations du Prestataire et dans le cadre de la prestation de services.

Le Prestataire prend également l'engagement d'examiner et de prendre en considération les besoins spécifiques liés aux secteurs d'activité du CLIENT,
en respectant les limitations de sa responsabilité, pour garantir un niveau de sécurité adapté aux informations traitées.

Si un projet est susceptible d'impacter la sécurité du service offert, le Prestataire s'engage à informer le CLIENT des impacts potentiels,
des mesures correctives envisagées et des risques résiduels, assurant une transparence totale.

Le Prestataire garantit qu'il n'utilisera pas les données du CLIENT à des fins de test sans un accord préalable et explicite du CLIENT
et s'engage à anonymiser et protéger la confidentialité de ces données durant leur traitement.

En cas de changement de sous-traitant pour l'hébergement, Le Prestataire informera le CLIENT en amont, s'assurant que cette transition n'affecte pas négativement le service fourni.

À la demande du CLIENT, le Prestataire fournira l'accès à son règlement intérieur, à sa charte d'éthique, aux sanctions applicables en cas de non-respect de sa
politik über Sicherheit, zu den ihn betreffenden Ereignissen, zu den dienstleistungsbezogenen Verfahren und zu spezifischen Sicherheitsanforderungen.

### 10.2. Haftungsbeschränkung des Dienstleisters

Die Struktur der geteilten Verantwortung reduziert effektiv den Umfang des Eingreifens des Dienstleisters auf Aspekte im Zusammenhang mit der Bereitstellung einer funktionalen RedHat OpenShift-Plattform, einschließlich:

- Verwaltung der IaaS-Infrastruktur, die die RedHat OpenShift-Plattform unterstützt und bereitstellt,
- Verwaltung der Systeme, die für den ordnungsgemäßen Betrieb der Plattform erforderlich sind,
- Aufrechterhaltung der Sicherheitsbedingungen,
- Aktualisierung der RedHat OpenShift-Plattform,
- Sicherung der wesentlichen Konfigurationsdaten dieser Plattform, mit Ausnahme der Daten und Anwendungen des KUNDEN, die unter seine Verantwortung fallen.

Sie schließt insbesondere, aber nicht ausschließlich, aus:

- Aktualisierung der Betriebssysteme und Software, die vom KUNDEN auf dessen OpenShift-Umgebungen in seinen Mieträumen installiert wurden,
- Sicherheit der Programme, Software und Anwendungen, die vom KUNDEN in der OpenShift-Umgebung installiert wurden,
- Sicherung der Daten auf Anwendungsebene,
- Konfiguration der Sicherungsrichtlinien.

### 10.3. Zugriffsbegrenzung

Im Rahmen dieser Servicevereinbarung ist dem Dienstleister der Zugriff auf die dem KUNDEN gehörenden Tenants ohne vorherige Genehmigung strikt untersagt. Es liegt in der Verantwortung des KUNDEN, dem Personal des Dienstleisters bei spezifischem Bedarf die erforderlichen Zugänge bereitzustellen, insbesondere für das Hosting und gegebenenfalls supportbezogene Dienstleistungen, falls der KUNDE diese Option gewählt hat.

Der KUNDE erkennt an, dass diese Zugänge ausschließlich für die im Rahmen der Dienstleistung vereinbarten Zwecke gewährt werden, sodass eine sichere und vertragskonforme Verwaltung gewährleistet ist.

Der Fernzugriff durch Dritte, die in die Dienstleistungen des Dienstleisters involviert sind, ist streng verboten. Sollte eine spezifische technische Anforderung einen solchen Zugriff erforderlich machen, kann dieser nur nach ausdrücklicher Benachrichtigung des KUNDEN, detaillierter Begründung und Einholung seiner schriftlichen Zustimmung eingerichtet werden.

Diese Maßnahme gewährleistet die Kontrolle und Sicherheit der Daten des KUNDEN, indem sichergestellt wird, dass jede Ausnahme von der Regel ordnungsgemäß genehmigt und dokumentiert ist.

## 11. Datenlöschung am Vertragsende

Am Ende des Vertrags, sei es durch Ablauf oder Kündigung aus welchem Grund auch immer, verpflichtet sich der Dienstleister zu einer sicheren Löschung sämtlicher Daten des Kunden, einschließlich technischer Daten. Der Dienstleister wird dem KUNDEN formell eine Vorankündigung mit einer Frist von einundzwanzig (21) Kalendertagen zukommen lassen. Die Daten des KUNDEN werden dann innerhalb einer maximalen Frist von dreißig (30) Tagen nach dieser Mitteilung gelöscht.

Um diese Löschung zu bestätigen, wird der Dienstleister dem Kunden ein Zertifikat vorlegen, das die Datenlöschung bestätigt.

## 12. Anwendbares Recht

Das anwendbare Recht für diese Servicevereinbarung ist das französische Recht.

Sollte der Dienstleister im Rahmen der dem KUNDEN erbrachten Dienstleistungen auf eine Drittgesellschaft, einschließlich eines Unterauftragnehmers, zurückgreifen, deren Hauptsitz, zentrale Verwaltung oder Hauptniederlassung sich in einem Staat außerhalb der Europäischen Union befindet oder die im Eigentum einer oder unter Kontrolle einer in einem Staat außerhalb der Europäischen Union ansässigen Drittgesellschaft steht, verpflichtet sich der Dienstleister, sicherzustellen, dass die besagte Drittgesellschaft keinen Zugang zu den durch den Dienstleister verarbeiteten Daten hat.

Es wird darauf hingewiesen, dass die betroffenen Daten diejenigen sind, die dem Dienstleister vom KUNDEN anvertraut wurden, sowie alle technischen Daten wie Identitäten von Begünstigten und Administratoren der technischen Infrastruktur, die durch Netzwerke verarbeiteten Daten, die Protokolle der technischen Infrastruktur, das Verzeichnis, Zertifikate, Zugriffskonfigurationen usw., die Informationen über den KUNDEN enthalten.

Zur Klarstellung wird der Begriff Kontrolle gemäß Abschnitt II von Artikel L233-3 des Handelsgesetzbuchs definiert.