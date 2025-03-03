---
title: PaaS-Dienstleistungsvereinbarung
---

**Inhaltsverzeichnis**

- [1. Rahmen](#1-rahmen)
- [2. Akronyme](#2-akronyme)
- [3. Glossar](#3-glossar)
- [4. Ziel der PaaS-Dienstleistungsvereinbarung des Anbieters](#4-ziel-der-paas-dienstleistungsvereinbarung-des-anbieters)
- [5. Entwicklung der PaaS-Dienstleistungsvereinbarung](#5-entwicklung-der-paas-dienstleistungsvereinbarung)
- [6. Audits](#6-audits)
- [7. Dienstleistungsbeschreibung](#7-dienstleistungsbeschreibung)
- [8. Implementierung des Dienstes](#8-implementierung-des-dienstes)
  - [8.1. Beschreibung der technischen Komponenten](#81-beschreibung-der-technischen-komponenten)
    - [8.1.1. REDHAT OpenShift Serviceplattform](#811-redhat-openshift-serviceplattform)
    - [8.1.2. Steuerungssoftware-Infrastruktur der Redhat Openshift-Plattform](#812-steuerungssoftware-infrastruktur-der-redhat-openshift-plattform)
    - [8.1.3. Zugehörige Backup-Infrastruktur](#813-zugehörige-backup-infrastruktur)
    - [8.1.4. Implementierung von Lösungen zur Geschäftsfortführung oder Betriebswiederherstellung](#814-implementierung-von-lösungen-zur-geschäftsfortführung-oder-betriebswiederherstellung)
- [9. Zusagen und Service Levels](#9-zusagen-und-service-levels)
  - [9.1. Zusagen zur Verfügbarkeit der RedHat OpenShift-Plattform](#91-zusagen-zur-verfügbarkeit-der-redhat-openshift-plattform)
- [10. Anwendbares Modell der geteilten Verantwortung](#10-anwendbares-modell-der-geteilten-verantwortung)
  - [10.1. Verantwortlichkeiten und Verpflichtungen des Anbieters](#101-verantwortlichkeiten-und-verpflichtungen-des-anbieters)
  - [10.2. Haftungsbeschränkung des Anbieters](#102-haftungsbeschränkung-des-anbieters)
  - [10.3. Zugangsbeschränkung](#103-zugangsbeschränkung)
- [11. Datenlöschung am Vertragsende](#11-datenlöschung-am-vertragsende)
- [12. Anwendbares Recht](#12-anwendbares-recht)


## 1. Rahmen

|           |                        |
| --------- | ---------------------- |
| Referenz  | CT.AM.JUR.ANX.PAAS 2.0 |
| Datum     | 13. März 2024          |

## 2. Akronyme

| Akronym     | Beschreibung                                                                                               |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Änderungsberatungsausschuss                                                        |
| CMDB        | Configuration Management Database – Konfigurationsmanagement-Datenbank                                     |
| COPIL       | Steuerungscommittee                                                                                        |
| COSTRAT     | Strategisches Komitee                                                                                      |
| DB          | Datenbank                                                                                                  |
| DRP         | Disaster Recovery Plan (Notfallwiederherstellungsplan)                                                     |
| GTI         | Interventionszeitgarantie                                                                                  |
| GTR         | Lösungszeitgarantie                                                                                        |
| GTE         | Eskalationszeitgarantie                                                                                    |
| HYPERVISEUR | Betriebssystem zur Ausführung von VMs auf einer Recheneinheit                                               |
| ITIL        | Information Technology Infrastructure Library - Best Practices für IT-Servicemanagement                    |
| IAAS        | Infrastructure as a Service                                                                                |
| MCO         | Betriebsbereitschaftserhaltung                                                                             |
| MOA         | Projektsteuerung                                                                                           |
| MOE         | Projektdurchführung                                                                                        |
| OS          | Betriebssystem                                                                                             |
| PAQ         | Qualitätsassurance-Plan                                                                                    |
| PAAS        | Platform as a Service                                                                                      |
| SDM         | Service Delivery Manager                                                                                   |
| RFC         | Request For Change – Änderungsantrag                                                                       |
| RGPD        | Datenschutz-Grundverordnung                                                                                |
| RPO         | Recovery Point Objective – Frische der wiederhergestellten Daten im Falle eines Notfalls                   |
| RTO         | Recovery Time Objective – Wiederherstellungszeit des Dienstes im Falle eines Notfalls                      |
| SLA         | Service Level Agreement – Dienstgütenvereinbarung                                                          |
| UO          | Betreibereinheit                                                                                           |
| VABF        | Validierung der Funktionsfähigkeit                                                                         |
| VABE        | Validierung der Betriebseignung                                                                            |
| VM          | Virtuelle Maschine                                                                                         |
| VSR         | Regularisierungsservice-Validierung                                                                        |
| SNC         | SecNumCloud                                                                                                |

## 3. Glossar

Die im vorliegenden Dokument verwendeten Ausdrücke werden gemäß den unten aufgeführten Definitionen interpretiert:

| Ausdruck                                           | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "Secure Temple"                                    | Die Bezeichnung "Secure Temple" bezieht sich auf den IaaS-Infrastrukturdienst, der als SecNumCloud qualifiziert wird und von der Firma Cloud Temple angeboten wird.                                                                                                                                                                                                                                      |
| Region                                             | Eine "Region" im Kontext des Cloud Computing bezeichnet eine geografisch abgegrenzte Gruppe von Verfügbarkeitszonen, <br/>die Netzwerk-, Rechen- und Speicherressourcen bereitstellt, um Latenz, Leistung <br/>und lokale gesetzliche Vorgaben zu optimieren.                                                                                                                                             |
| Verfügbarkeitszone<br/>(AZ)<br/>(Availability zone)| Ein spezifischer und isolierter Abschnitt der Cloud-Computing-Infrastruktur, der eine hohe Verfügbarkeit und Ausfallsicherheit der Dienste durch geografische Verteilung der Ressourcen gewährleistet.                                                                                                                                                                                             |
| Tenant                                             | Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe vorbehalten ist und eine gemeinsame Infrastruktur nutzt, aber die Unabhängigkeit sowie die Sicherheit der Daten und Anwendungen gewährleistet.                                                                                                                                               |

| Ausdruck      | Definition                                                                                                                                                                                                                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vorfall       | Ein "Vorfall" bezeichnet jedes unvorhergesehene Ereignis, das den normalen Betrieb eines Systems stört oder die Sicherheit von Daten und Infrastrukturen gefährdet                                                                                                                                              |

| Problème                 | Ein "Problem" ist eine grundlegende Ursache für ein oder mehrere Vorfälle, identifiziert oder vermutet, die eine Analyse und Lösung erfordert, um deren Wiederauftreten zu verhindern.                                                                                                                                               |
| Changement               | Eine "Änderung" bezeichnet jede Änderung an der IT-Umgebung, die darauf abzielt, die Systeme, Prozesse oder Dienste zu verbessern oder zu korrigieren.                                                                                                                                           |
| changement standard      | Eine "Standardänderung" ist eine vorab genehmigte, risikofreie, sich wiederholende Änderung, die einem festgelegten Verfahren in der IT-Umgebung folgt.                                                                                                                                            |
| Mise en production       | Administrationsmaßnahmen zur Umsetzung der Änderung, wenn diese genehmigt ist <br/>(die Änderung im Sinne von ITIL bezieht sich nur auf das Änderungsmanagement und nicht auf dessen Umsetzung/Verwirklichung).                                                                                       |
| Demande de service       | Ein Service-Request ist eine prozedurengesteuerte Anfrage zur Entwicklung, deren Umsetzung: <br/> i) die CMDB nicht verändert,<br/>ii) das Verfahren, die Kosten und die Risiken im Voraus bekannt und akzeptiert sind und keine spezifischen Rückfallmodi erfordern<br/> iii) die Umsetzung unterliegt einer Service-Level-Vereinbarung und ist im Vertrag enthalten, wenn sie in den Geschäftszeiten durchgeführt wird.                 |
| Element de configuration | Ein "Configuration Item" ist eine identifizierbare Komponente des Informationssystems, wie eine Software, Hardware oder ein Dokument,<br/> das im Rahmen des IT-Service-Managements verwaltet wird.                                                                                                                                                 |
| Service                  | Ein "Service" ist eine Möglichkeit, dem KUNDEN Wert zu liefern, indem gewünschte Ergebnisse erleichtert werden, ohne dass der KUNDE spezifische Kosten und Risiken verwalten muss.                                                                                                                     |
| Evenement                | Ein "Ereignis" ist jede im IT-System oder Netzwerk erkennbare oder identifizierbare Vorkommnis, das für das IT-Service-Management von Bedeutung sein kann.                                                                                                                                            |
| Sinistre                 | Ein "Schaden" bezeichnet ein unvorhergesehenes schädliches Ereignis, das materielle, finanzielle oder Datenverluste für einen KUNDEN verursacht.                                                                                                                                                      |
| Convention de service    | Dieses Dokument, erstellt im Rahmen eines spezifischen Vertrags oder der Allgemeinen Verkaufs- und Nutzungsbedingungen (CGVU), und gemäß den Anforderungen des SecNumCloud-Referenzwerks.                                                                                   |
| Disponibilité            | Fähigkeit, die Verfügbarkeit und Aufrechterhaltung optimaler Leistungen eines Dienstes gemäß den in den Service-Level-Vereinbarungen (SLA) definierten Kriterien und Verpflichtungen zu gewährleisten.                                                                                                    |
| Supervision              | Überwachung eines Informationssystems oder eines Dienstes, das Sammeln verschiedener Daten wie Messungen und Alarme umfasst. <br/>Diese Tätigkeit beschränkt sich auf Beobachtung und Nachverfolgung, ohne direkt auf die überwachten Elemente einzugreifen, was eine Aufgabe der Administration ist. |

## 4. Objet de la convention de service PaaS du Prestataire

Die vorliegende Servicevereinbarung legt die Bedingungen fest, unter denen der Dienstleister dem KUNDEN eine Plattform gemäß den Spezifikationen des Angebots "Platform as a Service – PaaS" und ordnungsgemäß nach SecNumCloud-Qualifikation bereitstellt.

Zweck der Servicevereinbarung:

1. Die vom KUNDEN erwarteten Leistungsanforderungen in Bezug auf Funktionalität und Zuverlässigkeit der Infrastruktur festzulegen.
2. Die Verpflichtungen des Dienstleisters zur Erfüllung der vereinbarten Service-Level darzulegen.
3. Die speziell auf die angebotene Infrastruktur anwendbaren regulatorischen Standards zu identifizieren.
4. Konsistenz und Integrität bei der Bewertung der erbrachten Servicequalität sicherzustellen.
5. Die Exzellenz der erbrachten Dienstleistungen über quantitative Leistungsindikatoren zu garantieren.

Es wird festgelegt, dass im Falle eines Entzugs der SecNumCloud-Qualifikation des Dienstleisters dieser Vertrag vom KUNDEN ohne Strafe von Rechts wegen gekündigt werden kann.
In einem solchen Fall verpflichtet sich der Dienstleister, den KUNDEN über diese Aberkennung durch eine offizielle Benachrichtigung mittels eines Einschreibens mit Rückschein zu informieren.

Es ist zu beachten, dass eine Änderung oder Anpassung der SecNumCloud-Qualifikation nicht als Widerruf der ursprünglichen Qualifikation interpretiert wird.

## 5. Evolution de la convention de service PaaS

Änderungen oder Ergänzungen zu dieser Servicevereinbarung ergeben sich ausschließlich aus den von den für diesen Zweck benannten Governance-Gremien vorgebrachten Anfragen.
Diese Änderungsvorschläge werden im strategischen Ausschuss geprüft, dem einzigen Gremium, das befugt ist, die Aspekte zu bestimmen, die einer schriftlichen Formalisierung bedürfen.

Es wird vereinbart, dass jede nach der Validierung vorgenommene Änderung der Vereinbarung, die die ursprünglich festgelegten finanziellen Bedingungen verändert, die Erstellung und Unterzeichnung einer Zusatzvereinbarung zum laufenden Vertrag erfordert.

Zu den Faktoren, die eine Überarbeitung dieser Vereinbarung bedingen können, gehören unter anderem:

- Die Anpassung der PaaS-Plattform durch den Dienstleister.
- Änderungen an den vom Dienstleister bereitgestellten Diensten.
- Änderungen der eingegangenen Verpflichtungen und anwendbaren Sanktionen.
- Organisatorische Umstrukturierungen beim KUNDEN oder beim Dienstleister.
- Erweiterung oder Reduzierung des vom KUNDEN abonnierten Serviceumfangs.

Das Versionsmanagement und die Überarbeitung der Vereinbarung sind im Vorwort des Dokuments dokumentiert, um die Nachverfolgung zu erleichtern.

## 6. Audit

Der Dienstleister verpflichtet sich, dem KUNDEN oder jedem von diesem benannten Drittprüfer die Einsichtnahme in alle Dokumente zu ermöglichen, die zur Bestätigung der vollständigen Einhaltung der Pflichten gemäß Artikel 28 der Datenschutz-Grundverordnung (DSGVO) erforderlich sind und somit die Durchführung von Audits unterstützen.

**Der Dienstleister verpflichtet sich insbesondere, dem KUNDEN die Liste aller Dritten zur Verfügung zu stellen, die auf die Daten zugreifen können, und ihn über jegliche Änderungen bei den Unterauftragnehmern zu informieren.**

Durch die Annahme dieser Servicevereinbarung erteilt der KUNDE seine ausdrückliche Zustimmung zu:

1. __Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI)__ sowie der zuständigen Qualifizierungseinheit zur Überprüfung der Konformität des Service und des Informationssystems mit den im SecNumCloud-Referenzwerk festgelegten Standards.
2. __Ein qualifizierter und vom Dienstleister ausdrücklich benannter Prüfer für IT-Sicherheit__, um Sicherheitsaudits des vom Dienstleister erbrachten Service durchzuführen.

## 7. Description du service

Das vom Dienstleister angebotene Serviceangebot zeichnet sich durch die Bereitstellung der folgenden Dienstleistungen aus, die sich an dem im SecNumCloud-Referenzwerk beschriebenen Prinzip der geteilten Verantwortung orientieren:

- Bereitstellung einer vom Dienstleister betriebenen Redhat Openshift-Container-Management-Plattform.

Es wird verstanden, dass der Dienstleister sein Fachwissen einsetzt, um die Dienstleistungen gemäß den besten beruflichen Praktiken zu erbringen.
conformément à leurs Spécifications et en respectant les normes de sa certification ISO/IEC 27001 ainsi que les directives du Référentiel SecNumCloud.

## 8. Mise en œuvre du service

Il est précisé que toutes les opérations et tous les composants physiques impliqués dans la fourniture du service qualifié, dont la présente convention fait l’objet,
sont situés dans l’Union Européenne. Cela inclut notamment le support, la supervision opérationnelle et la supervision de sécurité (SOC).

### 8.1. Description des composants techniques

Les service PaaS (Platform as a Service) englobent l'intégralité des composants et services requis pour son fonctionnement optimal dans le respect de la qualification SecNumCloud.

À cet égard, leur performance et fiabilité sont intrinsèquement liées aux composants techniques et aux services de **l'infrastructure IaaS** du Prestataire, comme spécifié dans le document [Convention de Service IaaS](../iaas/sla_iaas.md) du Prestataire.

#### 8.1.1. Plateforme de service REDHAT OpenShift

Le service englobe la mise à disposition au sein d'une région, sur 3 zones de disponibilité,

#### 8.1.2. Infrastructure logiciel de pilotage de la plateforme Redhat Openshift

Le Prestataire fournit au CLIENT la console d'administration et l'API nécessaire à l'exploitation de ses environnements PaaS RedHat OpenShift.
Il s'engage également à les maintenir en condition opérationnelle optimale et à assurer sa sécurité de manière continue.

Dans le cadre spécifique du service fourni, le Prestataire met à la disposition du CLIENT toutes les interfaces et API de la plateforme RedHat OpenShift au sein du tenant sélectionné. Il revient au CLIENT d'instaurer les dispositifs de sécurité appropriés, tels que les pare-feux (firewall), les pare-feux applicatifs Web (WAF), et autres mesures de protection, ainsi que de définir les règles de filtrage associées pour sécuriser l'accès à sa plateforme conformément à sa politique de sécurité.

Le Prestataire alerte le Client sur le fait qu'une utilisation anormale de sa console d'administration, notamment en cas de surcharge de ses APIs de commande (hammering),
peut déclencher des mesures de sécurité automatiques entrainant le blocage de l'accès aux APIs de commande ou à certains services du Prestataire.  Il convient de souligner que cette situation ne constitue pas une indisponibilité du service mais une action de protection de l'Infrastructure du Prestataire ;
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
pour laquelle il a la possibilité à exploiter les outils du Prestataire disponibles à cet usage.

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

- *En réponse une attaque par déni de service distribué (DDoS), le Prestataire se réserve le droit d'ajuster sa configuration de routage internet pour
limiter l'impact de cette attaque et sauvegarder son infrastructure. En particulier, si une adresse IP appartenant au CLIENT est ciblée, le Prestataire peut recourir à la technique de blackholing
via la communauté BGP pour bloquer tout le trafic vers l'adresse IP visée en amont chez ses fournisseurs, dans le but de protéger les ressources du CLIENT ainsi que celles d'autres clients
et de l'infrastructure du Prestataire. Le Prestataire encourage vivement le CLIENT à adopter des mesures similaires, telles que l'utilisation de logiciels de pare-feu
d'applications web disponibles sur le marché, et à configurer soigneusement ses groupes de sécurité via l'API de commande.*

- *Le Prestataire insiste sur la nécessité pour le CLIENT de minimiser les ouvertures de flux, en évitant notamment de rendre accessibles les ports
d'administration **SSH** (port TCP 22) et **RDP** (port TCP 3389) depuis l'ensemble d'Internet (sous-réseau 0.0.0.0/0), ainsi que les protocoles internes tels que **SMB** (port TCP/UDP 445) ou **NFS** (port TCP/UDP 2049).*

## 10. Modèle de responsabilités partagées applicable

### 10.1. Responsabilité et Obligations du Prestataire

Le Prestataire s'engage à mettre à la disposition du CLIENT des interfaces utilisateur en langue française et anglaise, facilitant ainsi l'accès et la gestion des services fournis.
Der KUNDE verpflichtet sich seinerseits, die geltenden gesetzlichen und regulatorischen Anforderungen in Bezug auf die vom Dienstleister verarbeiteten Daten einzuhalten.

Bei der Übermittlung von Daten, die besonderen gesetzlichen Anforderungen unterliegen, wird der Dienstleister mit dem KUNDEN zusammenarbeiten, um die notwendigen Sicherheitsmaßnahmen zu identifizieren und umzusetzen, entsprechend den Verpflichtungen des Dienstleisters und im Rahmen der Dienstleistungserbringung.

Der Dienstleister verpflichtet sich auch, die spezifischen Bedürfnisse des KUNDEN in Bezug auf dessen Tätigkeitsbereiche, unter Berücksichtigung der Einschränkungen seiner Haftung, zu prüfen und zu berücksichtigen, um ein angemessenes Sicherheitsniveau für die verarbeiteten Informationen zu gewährleisten.

Falls ein Projekt die Sicherheit des angebotenen Dienstes beeinträchtigen könnte, verpflichtet sich der Dienstleister, den KUNDEN über die möglichen Auswirkungen, die vorgesehenen Korrekturmaßnahmen und die verbleibenden Risiken zu informieren, um vollständige Transparenz zu gewährleisten.

Der Dienstleister garantiert, dass er ohne ausdrückliche Zustimmung des KUNDEN keine Daten des KUNDEN zu Testzwecken verwenden wird und verpflichtet sich, diese Daten während ihrer Verarbeitung zu anonymisieren und deren Vertraulichkeit zu schützen.

Im Falle eines Wechsels des Unterauftragnehmers für das Hosting wird der Dienstleister den KUNDEN im Voraus informieren und sicherstellen, dass dieser Übergang die erbrachte Dienstleistung nicht negativ beeinflusst.

Auf Anfrage des KUNDEN wird der Dienstleister Zugang zu seinem internen Regelwerk, zu seiner Ethikcharta, zu den Sanktionen bei Nichteinhaltung desselben gewähren.
politique de sécurité, aux événements le concernant, aux procédures relatives au service et aux exigences spécifiques de sécurité.

### 10.2. Limitation de responsabilité du Prestataire

La structure de responsabilité partagée réduit efficacement l'étendue de l'intervention du Prestataire aux aspects liés à la fourniture d'une plateforme RedHat OpenShift fonctionnelle, comprenant :

- La gestion de l'infrastructure IaaS qui prend en charge la plateforme RedHat OpenShift et son provisionnement,
- La gestion des systèmes nécessaires au bon fonctionnement de la plateforme,
- Le maintien en conditions de sécurité,
- La mise à jour de la plateforme RedHat OpenShift,
- La sauvegarde des données de configuration essentielles de cette plateforme, à l'exception des données et des applications du CLIENT qui relèvent de sa responsabilité.

Elle exclue notamment, mais sans s'y limiter :

- La mise à jour des systèmes d'exploitation et des logiciels installés par le CLIENT sur ses environnements OpenShift dans ses espaces locatifs,
- La sécurité des programmes, logiciels et applications installés au sein de l'environnement OpenShift par le CLIENT,
- La sauvegarde des données au niveau applicatif,
- La configuration des politiques de sauvegarde.

### 10.3. Limitation d'accès

Dans le cadre de cette convention de service, le Prestataire est formellement interdit d'accéder aux tenants appartenant au CLIENT sans autorisation préalable.
Il est de la responsabilité du CLIENT de fournir les accès nécessaires au personnel du Prestataire, selon les besoins spécifiques de l’hébergement et,
le cas échéant, des services professionnels de support, si cette option a été choisie par le CLIENT.

Le CLIENT reconnaît que ces accès sont accordés exclusivement pour les besoins liés à la prestation de services convenus,
assurant ainsi une gestion sécurisée et conforme aux termes de l'accord.

L'accès distant par des tiers impliqués dans la prestation de service du Prestataire est strictement interdit.
Dans l'éventualité où une exigence technique spécifique nécessiterait un tel accès, celui-ci ne pourrait être établi
qu'après avoir clairement notifié le CLIENT, fourni une justification détaillée et obtenu son accord écrit.

Cette mesure garantit le contrôle et la sécurité des données du CLIENT, en s'assurant que toute exception à la règle est dûment autorisée et documentée.

## 11. Effacement des données en fin de contrat

À l'issue du contrat, qu'il arrive à échéance ou qu'il soit résilié pour quelque raison que ce soit, le Prestataire s'engage à procéder à l'effacement
sécurisé de l'intégralité des données du Client, y compris les données techniques. Le Prestataire s'assurera de communiquer au CLIENT un préavis formel,
respectant un délai de vingt et un (21) jours calendaires. Les données du CLIENT seront alors supprimées dans un délai maximum de trente (30) jours
suivant cette notification.

Pour attester de cette suppression, le Prestataire remettra au Client un certificat confirmant l'effacement des données.

## 12. Droit applicable

Le droit applicable pour la presente convention de service est le droit français.

En cas de recours par le Prestataire, dans le cadre des services fournis au CLIENT, à une société tierce, y compris un sous-traitant, dont le siège social, l'administration centrale
ou le principal établissement est situé dans un État non membre de l'Union Européenne, ou qui est propriété ou sous le contrôle d'une société tierce domiciliée en dehors de l'Union Européenne,
le Prestataire s'engage à garantir que ladite société tierce n'aura aucun accès aux données traitées par le service du Prestataire.

Il est à noter que les données visées comprennent celles confiées au Prestataire par le CLIENT, ainsi que toutes les données techniques telles que les identités des bénéficiaires et des administrateurs de l'infrastructure technique,
les données manipulées par les réseaux, les journaux de l'infrastructure technique, l'annuaire, les certificats, la configuration des accès, etc., contenant des informations sur le CLIENT.

Pour précision, la notion de contrôle est définie conformément au II de l'article L233-3 du code de commerce.
