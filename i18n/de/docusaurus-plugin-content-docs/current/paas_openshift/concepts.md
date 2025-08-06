---
title: Konzepte
---
import oshiftOffert from './images/oshift_offert.png'

## Einführung in Red Hat OpenShift

**Red Hat OpenShift** ist eine Enterprise-Containerplattform, die die Bereitstellung, Verwaltung und Skalierung containerisierter Anwendungen automatisiert. Es handelt sich um eine Plattform, die auf Docker, einem Containerisierungssystem, das es ermöglicht, eine Anwendung und ihre Abhängigkeiten in einem virtuellen Container zu verpacken, und Kubernetes, einem Container-Orchestrierungssystem, das die Ausführung und Koordination der Container in einem Server-Cluster verwaltet, aufgebaut.

### Hauptfunktionen von Red Hat OpenShift:

- **Automatisierte Bereitstellung und Verwaltung:** OpenShift vereinfacht den Bereitstellungsprozess von Anwendungen, indem es Verwaltungsprozesse wie Skalierung, Gesundheit und Lebensdauer von Containern automatisiert. Es bietet eine integrierte Umgebung für die Entwicklung, das Testen und die Produktion von Anwendungen.

- **Unterstützung mehrerer Sprachen und Dienste:** Die Plattform unterstützt eine breite Palette von Programmiersprachen (wie Java, Node.js, Python, Ruby und PHP) und bietet integrierte Dienste wie Nachrichtendienst, Caching und Datenbanken, wodurch Entwickler sich auf den Code konzentrieren können, anstatt sich um die Infrastruktur kümmern zu müssen.

- **Continuous Integration (CI) und Continuous Deployment (CD):** OpenShift integriert CI/CD-Tools, die den Softwareentwicklungs-Pipeline automatisieren, von dem ersten Commit bis zur Produktion, was DevOps-Praktiken fördert.

- **Betriebsverwaltung:** OpenShift bietet Tools für die Überwachung, die Leistungsverwaltung und die Diagnose von Anwendungen und Infrastrukturen, wodurch Betriebspersonal dabei unterstützt wird, die Gesundheit und Leistung der Systeme zu gewährleisten.

- **Erweiterte Sicherheit:** Die Plattform ist mit integrierter Sicherheit konzipiert und bietet rollebasierte Zugriffssteuerung, Aufgaben-Trennung und automatisierte Verwaltung von Geheimnissen, um Anwendungen und Daten zu schützen.

### Vorteile von Red Hat OpenShift:

- **Flexibilität:** Entwickler können mit den Tools, Sprachen und Frameworks ihrer Wahl arbeiten.
- **Betriebseffizienz:** OpenShift optimiert die Ressourcennutzung, reduziert die Time-to-Market und verbessert die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform verwaltet den Skalierung der Anwendungen automatisch, um den Schwankungen der Nachfrage gerecht zu werden.
- **Sicherheit und Compliance:** Mit integrierten Sicherheitsrichtlinien hilft OpenShift dabei, die Sicherheits- und Compliance-Standards zu gewährleisten.

Red Hat OpenShift ist eine umfassende Lösung für die Entwicklung, Bereitstellung und Verwaltung von Container-Anwendungen und bietet eine zuverlässige, sichere und flexible Plattform für Unternehmen, die moderne Ansätze der Softwareentwicklung verfolgen.

### Red Hat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) ist eine integrierte Lösung für Speicherung und Datenverwaltung, die nahtlos mit dem OpenShift-Ökosystem funktioniert. Sie bietet eine persistent, sichere und hochverfügbare Dateninfrastruktur für containerisierte Anwendungen und unterstützt damit moderne Entwicklungslandschaften, die auf Containern und Microservices basieren. ODF ist darauf ausgelegt, die Datenverwaltung in hybriden und multicloud-Umgebungen zu vereinfachen und zu automatisieren und bietet eine solide Grundlage für kritische Unternehmensanwendungen.

#### Schlüsselmerkmale von OpenShift Data Foundation:

- **Persistenter Speicher:** ODF bietet eine Schicht für persistente Speicherung für Container, was für Unternehmensanwendungen wie Datenbanken, Content-Management-Systeme und Anwendungen mit persistiertem Zustand unerlässlich ist.

- **Multicloud und Hybrid:** Für hybride und multicloud-umgebungen konzipiert, ermöglicht ODF eine konsistente Datenverwahrungserfahrung über verschiedene Cloud-Umgebungen hinweg und erleichtert die Mobilität von Anwendungen und Daten.

- **Automatisierung und Orchestrierung:** Die tiefe Integration mit Kubernetes und OpenShift ermöglicht es ODF, die Bereitstellung, Skalierung und Verwaltung des Lebenszyklus des Speichers basierend auf den Anforderungen der Anwendungen zu automatisieren.

- **Hohe Verfügbarkeit und Resilienz:** ODF verwendet die Replikation und das Snapshotting von Daten, um die hohe Verfügbarkeit und Datenverlässlichkeit zu gewährleisten, was für die Betriebskontinuität von Unternehmen entscheidend ist.

- **Daten-Sicherheit:** Die Lösung integriert fortgeschrittene Sicherheitsfunktionen, wie die Verschlüsselung von Daten im Ruhezustand und in Bewegung, sowie anpassbare Sicherheits- und Compliance-Politiken.

#### Vorteile von OpenShift Data Foundation:

- **Operative Flexibilität:** ODF ermöglicht es Unternehmen, ihre Daten effizient in verteilten Umgebungen zu verwalten, und bietet die Flexibilität, um den sich ändernden Anforderungen moderner Anwendungen gerecht zu werden.

- **Vereinfachung der Datenverwaltung:** Durch die Automatisierung vieler Datenverwaltungsaufgaben reduziert ODF die Komplexität und entlastet IT-Ressourcen, um sich auf wertsteigernde Initiativen zu konzentrieren.

- **Kosteneffizienz:** Die Fähigkeit von ODF, sich dynamisch an die Speicherbedürfnisse anzupassen, hilft dabei, Kosten zu optimieren, indem Überprovisionierung vermieden und verfügbare Ressourcen effizienter genutzt werden.

- **Leistungsverbesserung:** ODF ist darauf ausgelegt, hohe Leistungen für Unternehmensanwendungen zu liefern, mit Optimierungsfähigkeiten für verschiedene Arten von Arbeitslasten.

Red Hat OpenShift Data Foundation ist eine fortgeschrittene Daten-Speicherlösung, die die Effizienz, Resilienz und Sicherheit von auf OpenShift bereitgestellten Unternehmensanwendungen stärkt. Durch die Bereitstellung von persistenter, automatisierter und sicherer Speicherung spielt ODF eine entscheidende Rolle dabei, Unternehmen dabei zu unterstützen, das volle Potenzial von Container- und Hybrid-Cloud-Technologien auszuschöpfen.

## Allgemeine Architektur der Plattform

### Allgemeines

Die Red Hat OpenShift-Plattform von Cloud Temple ist als regionale Angebot konzipiert und native auf [**drei unterschiedlichen Verfügbarkeitszonen**](../additional_content/concepts_az.md) innerhalb derselben [Region](../additional_content/concepts_regional.md) von Cloud Temple bereitgestellt. Diese dreizonale Architektur erhöht die Verfügbarkeit und Resilienz der Daten erheblich.

Die Plattform besteht aus einer Steuerungsebene und Arbeitsknoten, die von der Cloud Temple-Infrastruktur verwaltet werden. Die Steuerungsebene ist gleichmäßig auf die drei Verfügbarkeitszonen verteilt und gewährleistet eine zentrale und sichere Verwaltung. Die Arbeitsknoten bestehen aus Rechenblöcken, die so angeordnet sind, dass jede Verfügbarkeitszone einen Rechenblock enthält.

Für die Arbeitsknoten sind verschiedene Arten von Rechenblöcken verfügbar, was eine flexible Anpassung an verschiedene betriebliche Anforderungen ermöglicht:

| Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Einheit                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Steuerungsebene - 3 Knoten - Region FR1                                                                          | 1 dediziertes Plan       | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 Kerne / 20 Threads - 64 GB RAM - 512 GiB FLASH 1500 IOPS)                      | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 Kerne / 40 Threads - 128 GB RAM - 512 GiB FLASH 1500 IOPS)                   | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 Kerne / 64 Threads - 384 GB RAM - 512 GiB FLASH 1500 IOPS)                | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 Kerne / 96 Threads - 768 GB RAM - 512 GiB FLASH 1500 IOPS)                 | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 Kerne / 112 Threads - 1,5 TB RAM - 512 GiB FLASH 1500 IOPS)                    | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 Kerne / 64 Threads - 512 GB RAM - 512 GiB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 Worker + GPUs         | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Die Red Hat OpenShift-Produkte von Cloud Temple sind im Nutzungsmodell oder im 12-monatigen Abonnement erhältlich.

**Hinweise** :

1. *Die Aufrechterhaltung der Betriebsbereitschaft und Sicherheit der Steuerungsebene ist die Verantwortung von Cloud Temple im Rahmen eines PaaS-Dienstes.*

2. *Bis zum 15. Juni 2024 ist die Version 1 der Plattform softwareseitig auf 30 Worker-Knoten (unabhängig vom Worker-Typ) und einen globalen persistenten Speicher von 50 TiB beschränkt. Falls diese Grenzen für Ihr Projekt blockierend sind, wenden Sie sich bitte an den Support.*

3. *Jeder Worker-Knoten verfügt über 512 GiB Flash-Speicher, was 1,5 TiB pro Einheit darstellt (1 Worker pro AZ).*

4. *Ein Worker-Knoten kann standardmäßig bis zu 250 Pods verwalten. Dieser Wert ist über den Parameter podsPerCore anpassbar – beispielsweise ergeben 10 Pods pro Kern auf einem 4-Kern-Knoten maximal 40 Pods. Für weitere technische Details konsultieren Sie die [Dokumentation zur Pod-Verwaltung](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) und das [OpenShift-Guide zu Grenzwerten](https://docs.openshift.com/container-platform/4.

16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *Die PaaS-Offerte Openshift bietet native Zugriff auf die 3 Verfügbarkeitszonen, ohne dass eine zusätzliche Abonnements erforderlich ist.*

6. *Es ist später möglich, Blockspeicher zum Openshift-Cluster hinzuzufügen.*

7. *Die Knoten sind gleichmäßig auf die 3 Verfügbarkeitszonen verteilt (1 Knoten pro Zone). Es ist nicht möglich, einen Cluster zu unbalancieren, indem man mehr Knoten einer einzelnen Zone zuweist.*

### RedHat-Angebot im Rahmen der Openshift Cloud Temple-Plattform

Die Plattform ist eine Redhat Openshift 4, basierend auf [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) und beinhaltet [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Sicherungsstrategie Ihrer PaaS-Plattform OpenShift

Die Sicherung und Wiederherstellung der PaaS-Plattform OpenShift ist die Verantwortung von Cloud Temple für den **ETCD**-Teil im Rahmen der Plattformverwaltung. **Die Sicherung und Wiederherstellung für den Deployment- und Anwendungsdatenteil ist die Verantwortung des Auftraggebers**.

Cloud Temple bietet seinen Kunden das Angebot **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), eine spezialisierte Plattform für die Datenverwaltung in Kubernetes-Umgebungen. Konzipiert, um die Anforderungen an den DatenSchutz zu erfüllen, bietet sie robuste Funktionen für die Sicherung, Wiederherstellung, Migration und Notfallwiederherstellung. Kasten K10 integriert sich nativ in Kubernetes-Umgebungen, unabhängig davon, ob sie auf Cloud-Clustern oder On-Premise-Infrastrukturen betrieben werden, und passt sich verschiedenen Anwendungsfällen an, insbesondere der Migration von Clustern zwischen unterschiedlichen Kubernetes-Distributionen wie Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine und Red Hat OpenShift.

Ein zentraler Anwendungsfall von Kasten K10 ist **die Migration von Clustern zwischen unterschiedlichen Kubernetes-Plattformen**. Ob es sich um eine Übertragung auf eine robustere Infrastruktur oder um die Konsolidierung bestehender Umgebungen handelt, Kasten K10 bietet einfache und effektive Werkzeuge, um diese Migrationen zu verwalten:

 - **Sicherung und Schutz der Daten**: Bei der Migration eines Kubernetes Vanilla- oder VMware Tanzu-Clusters in eine Red Hat Kubernetes Engine- oder OpenShift-Umgebung ist die erste Schritt die Sicherung der Anwendungsdaten und deren Zustände. Kasten K10 integriert sich nahtlos in die Kubernetes-APIs, um Anwendungen, deren Abhängigkeiten sowie die damit verbundenen Datenvolumina zu identifizieren. Dies umfasst die Sicherung von persistenten Volumina (Persistent Volumes - PV), Datenbanken, Konfigurationen und Geheimnissen. Kasten K10 unterstützt eine breite Palette von Speicheranbietern (S3, Google Cloud Storage, Azure Blob Storage usw.), was die Erstellung von Momentaufnahmen der anzuwendenden Anwendungen ermöglicht. Diese Sicherungen werden anschließend sicher gespeichert mit Optionen für Verschlüsselung und granularen Zugriffssteuerung, um die Sicherheit der Daten während des gesamten Prozesses zu gewährleisten.

 - **Portabilität und Migration**: Die Migration zwischen Kubernetes-Distributionen wie Vanilla oder Tanzu und Red Hat-Lösungen wie OpenShift oder Kubernetes Engine kann aufgrund der Unterschiede in den Architekturen und den spezifischen Konfigurationen jeder Plattform komplex sein. Kasten K10 vereinfacht diesen Prozess, indem es eine Abstraktionsschicht für die Portabilität von Anwendungen bereitstellt. Bei der Migration repliziert Kasten K10 die Konfigurationen und Daten eines Quellclusters in einen Zielcluster, wobei die Besonderheiten jedes Umfelds berücksichtigt werden. Zum Beispiel können Kubernetes-Objekte wie ConfigMaps, Secrets, PVs sowie CRDs (Custom Resource Definitions) unter Berücksichtigung der spezifischen Einschränkungen jeder Kubernetes-Distribution, sei es ein Red Hat OpenShift- oder Kubernetes Engine-Cluster, migriert werden. Der Prozess ist automatisiert, was das Risiko menschlicher Fehler erheblich reduziert. Darüber hinaus ermöglicht Kasten K10 eine schrittweise oder vollständige Migration, je nach Bedarf, und bietet eine Echtzeit-Übersicht über den Status der Migration, was die Verwaltung und Überwachung der Übergangsphase erleichtert.

 - **Multi-Cloud- und Multi-Distribution-Unterstützung**: Kasten K10 ist für die Arbeit in hybriden und Multi-Cloud-Umgebungen konzipiert, was es zu einem idealen Werkzeug für Organisationen macht, die Anwendungen aus Tanzu- oder Vanilla-Clustern in Red Hat-Umgebungen im Cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) oder auf On-Premise-Infrastrukturen migrieren möchten. Dies gewährleistet eine Flexibilität, die den Anforderungen moderner Cloud-Strategien entspricht.

maximale und ermöglicht es DevOps-Teams, den besten Umgebung basierend auf den Geschäftsanforderungen oder Modernisierungsstrategien für die Infrastruktur zu wählen.

 - **Einfache Verwaltung und Automatisierung**: Kasten K10 bietet eine intuitive Benutzeroberfläche, die Administratoren ermöglicht, Migrationen und Backup-Operationen einfach zu verwalten, ohne dass eine tiefgehende Kenntnis jeder Kubernetes-Plattform erforderlich ist. Die Lösung verfügt zudem über Automatisierungsfunktionen, die es ermöglichen, Migration- und Backup-Politiken zu definieren, die sich in CI/CD-Pipelines integrieren, um kontinuierliche Operationen zu ermöglichen. Benutzer können Migrationen oder Wiederherstellungen basierend auf Wartungsfenstern planen, Validierungstests nach der Migration durchführen und Prozesse für den Failover im Falle von Problemen im Quellcluster automatisieren.

 - **Sicherheit und Compliance**: Bei Migrationen in kritische Umgebungen wie Red Hat OpenShift oder Kubernetes Engine sind Daten Sicherheit und Einhaltung von Standards (ISO, SOC, GDPR usw.) entscheidende Aspekte. Kasten K10 gewährleistet die Verschlüsselung von Daten im Transit und im Ruhezustand und bietet Audit- und Nachverfolgungsoptionen für Backup- und Wiederherstellungsoperationen. Diese Funktionen sind entscheidend, um die Sicherheit der migrierten Daten zu gewährleisten, sei es in Produktions- oder Testumgebungen. Kasten K10 ist eine unverzichtbare Lösung für Unternehmen, die Kubernetes Vanilla- oder VMware Tanzu-Cluster effizient und sicher in Red Hat Kubernetes Engine oder OpenShift migrieren möchten.

Die Abrechnung erfolgt nach Anzahl der Worker-Node.

| Einheiten für Red Hat OpenShift 4 mit Data Foundations - Worker Node Backup-Lösung | Einheit     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Hinweis**: *Beachten Sie, dass die erforderliche Speichervolumetrie für die ordnungsgemäße Funktion Ihres Backups auf dem Empfangsumfeld, üblicherweise in S3-Speicher, vorzusehen ist. Sie ist nicht in den OpenShift- oder Kasten-Einheiten enthalten.*

**(1)** _OADP ist nicht nativ im Cluster installiert. Nur Kasten ist aktiviert, um Migrationen, Backups und Wiederherstellungen zu verwalten_

## Lastverteilungssysteme  

Das Umfeld **SecNumCloud OpenShift** bietet Lösungen zur Lastverteilung, die sich an verschiedene funktionale Bereiche anpassen und eine sichere und optimierte Verkehrsverwaltung gewährleisten.  

Die Lastverteilungssysteme abdecken vier unterschiedliche Bereiche und stützen sich auf verschiedene Schichten des OSI-Modells:  

- **Zugriff auf Verwaltungstools** (API-Server und OpenShift-Konsole)  
- **Öffentlicher HTTP/HTTPS-Verkehr**  
- **Privater HTTP/HTTPS-Verkehr**  
- **Spezifischer Verkehr, der eine fortgeschrittene Anpassung erfordert**

### Zugriff auf die Verwaltungstools  

Der Zugriff auf die Verwaltungstools wird durch dedizierte Lastverteilungssysteme gesichert. Diese sind durch erweiterte Sicherheitskontrollen geschützt, insbesondere durch eine über die Konsole **Cloud Temple** verwaltbare Whitelist, die eine strenge Zugriffsverwaltung gewährleistet.

### Öffentlicher HTTP/HTTPS-Verkehr  

**LoadBalancers** (öffentliche), basierend auf **HAProxy**, arbeiten auf **Ebene 4** des OSI-Modells. Sie ermöglichen die Bereitstellung Ihrer Workloads über **HTTP/HTTPS** mithilfe von **Routen** und **Ingress**, wodurch eine effiziente und leistungsstarke Verteilung des eingehenden Verkehrs sichergestellt wird.

### Privater HTTP/HTTPS-Verkehr (Verbindung zu Ihren IaaS SNC-Diensten)  

**Private Load Balancer** erleichtern die Kommunikation mit Ihren **IaaS SNC**-Diensten ohne öffentliche Exposition. Wie ihre öffentlichen Kollegen sorgen sie für die Lastverteilung von **HTTP/HTTPS**-Verkehr, während sie ein sicheres und isoliertes Umfeld aufrechterhalten.

### Spezifischer Traffic  

Der **spezifische Traffic** wird über den LoadBalancer **MetalLB** verwaltet. Er unterstützt erweiterte Anforderungen mit feiner Abstimmung, beispielsweise:  

- Die Verbindung zu einer Datenbank über **TCP**  
- Die Verwaltung von **UDP**-Flüssen für Echtzeitanwendungen oder Anwendungen mit geringer Latenz  
- Der Routing von fortgeschrittenen Protokollen wie **QUIC** oder **MQTT-SN**, wodurch eine erhöhte Flexibilität gewährleistet wird  

Diese Lösung ermöglicht die Unterstützung Ihrer spezifischen Flüsse, sowohl für Ihre privaten Verbindungen als auch für Ihre Anforderungen der öffentlichen Exposition.  

Der Routing wird über **dedizierte öffentliche und private IP-Adressen** sichergestellt. Standardmäßig werden Ihnen IP-Adressen für die Exposition Ihrer Dienste zugewiesen:  

- **4 öffentliche IP-Adressen**  
- **254 private IP-Adressen**  

Wenn diese Ressourcen nicht ausreichen, um Ihre Workloads zu unterstützen, können Sie eine Anfrage an unsere Services stellen, um zusätzliche IP-Adressen, ob **öffentlich** oder **privat**, zuzuweisen.  

> **Hinweis**: Die integrierten LoadBalancers fungieren nicht als **WAF**. Eine Lösung **WAF as a Service** wird demnächst verfügbar sein.

## Rechte und Berechtigungen

Hier sind die wichtigsten implementierten Berechtigungen:

|       Gruppe       |         API          |                                                                                       Ressourcenberechtigungen                                                                                       |
|--------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps      |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen |
|        Core        |          ("")        |                                                                                           Secrets Erstellen                                                                                           |
|config.kio.kasten.io|        Profile         |                                                                          Abrufen, Auflisten, Beobachten, Erstellen, Aktualisieren, Patchen, Löschen                                                                           |
|config.kio.kasten.io|     RichtlinienVorlagen,     |                                                Transformationsmengen, Blueprint-Bindungen, Speicher-Sicherheitskontexte, Speicher-Sicherheitskontext-Bindungen Abrufen, Auflisten                                                 |
|config.kio.kasten.io|         Alle          |                                                                                    die Ressourcen (*) Abrufen, Auflisten                                                                                    |
|       Batch        |       CronJobs,        |                                                                        Aufgaben Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                        |
|    Autoscaling     |HorizontalPodAutoscaler|                                                                          Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                           |
|     Networking     |       Eingänge,       |                                                                  Netzwerkrichtlinien Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                   |
|       Richtlinien       |  Pod-Disruption-Budgets  |                                                                          Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                           |
|       Routen        |      (OpenShift)       |                                                                       Routen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                       |
|       Build        |      (OpenShift)       |                                                          Build-Konfigurationen, Builds, Build-Protokolle Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                           |
|       Bild        |      (OpenShift)       |                                                           Image-Streams, Image-Stream-Tags Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                            |
|        Apps        |      (OpenShift)       |                                                                 Deployment-Konfigurationen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                  |
|      Vorlagen      |      (OpenShift)       |                                                            Vorlagen, Vorlagen-Instanzen Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                            |

|   Authorisierung    |         Rollen,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        RBAC        |         Rollen,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Projekt       |      (OpenShift)       |                                                                                Projekte Get, Delete, Update, Patch                                                                                 |
|     Operatoren      |     Subscriptions,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager    |     Zertifikate,      |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging       |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Speicher       |    VolumeSnapshots     |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|        Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa       |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket    |  ObjectBucketClaims,   |                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        OCS         |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Lokal        |        Speicher         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metriken       |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Sicherheit      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Benutzerdefinierte       |       Ressourcen        |                                       Verschiedene benutzerdefinierte Ressourcen im Zusammenhang mit Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Sicherheitsbeschränkungen und -anforderungen bei OpenShift SecNumCloud

### Dedizierter Steuerungsplan  

Die Ausführung von Workloads auf dem **Steuerungsplan** ist streng verboten. Diese Einschränkung garantiert die Sicherheit und Stabilität der OpenShift-Plattform auf **SecNumCloud**, indem der Zugriff auf kritische Ressourcen begrenzt wird.

### Verbot von Containern mit hohen Berechtigungen (rootless)  

Um den Sicherheitsanforderungen des **SecNumCloud-Referenzrahmens** zu entsprechen, sind nur **rootless-Container** erlaubt. Diese Vorgehensweise stärkt die Sicherheit, indem sie jeglichen privilegierten Zugriff auf die Container verhindert.  

Anwendungen, die hohe Berechtigungen erfordern, müssen angepasst werden, da ihre Bereitstellung nicht erlaubt sein wird. Diese Einschränkung gilt auch für **Helm-Charts** und **Operatoren**, die nicht-rootless-Images verwenden, wodurch ihre Nutzung mit der Infrastruktur unvereinbar wird.

### Einschränkungen zu ClusterRoles  

In unserem OpenShift-Angebot sind die Zugriffsrechte auf Cluster-Ebene streng reguliert, um **Sicherheit und Konformität** mit SecNumCloud zu gewährleisten.  

Dies umfasst **Einschränkungen bei den ClusterRoles**, die die globalen Berechtigungen beschränken. Obwohl diese Einschränkungen technische Anpassungen erfordern können, sind sie entscheidend, um die Resilienz und Stabilität des Umfelds zu stärken.  

Unser Support-Team steht Ihnen zur Verfügung, um Sie bei der Anpassung Ihrer Konfigurationen zu unterstützen und Sie über mögliche Alternativen zu beraten.

### Einschränkungen der Security Context Constraints (SCC)  

Die **Security Context Constraints (SCC)** sind vorgeschrieben und können von Benutzern nicht geändert werden. Daher sind die Ausführungsparameter der Container (Zugriffsrechte, Linux-Fähigkeiten usw.) vordefiniert und nicht anpassbar.  

Diese Einschränkung dient dazu, jeden unerlaubten Zugriff auf kritische Cluster-Ressourcen zu verhindern. Anwendungen, die spezifische Sicherheitskontexte benötigen, müssen angepasst werden, um den geltenden SCC zu entsprechen.  

Aus operativer Sicht kann dies Anpassungen in der Architektur und Anpassungen in den Bereitstellungsprozessen erfordern, insbesondere für **Helm Charts** und **Operators**, die diese Einschränkungen nicht einhalten.

### Einschränkungen bei Custom Resource Definitions (CRDs)  

Um die Konformität mit SecNumCloud zu gewährleisten, sind die Verwendung von Custom Resource Definitions (CRDs) und benutzerdefinierten Controllern eingeschränkt.  

Diese Maßnahme, die mit den Cluster-Rechten verbunden ist, verhindert den Einsatz nicht autorisierter Ressourcen, die die Stabilität und Sicherheit der Infrastruktur beeinträchtigen könnten. Sie gilt auch für Operatoren und Helm-Charts, mit Einschränkungen bei den RBAC-Rechten.  

Nicht zertifizierte CRDs können abgelehnt werden, um die Integrität des Clusters zu gewährleisten. Nur CRDs, die aus zertifizierten Operatoren oder Helm-Charts stammen, sind nach Prüfung durch unsere Dienste erlaubt.  

Unser Support-Team kann Sie bei diesem Prozess unterstützen und Sie bei der Auswahl guter Praktiken beraten.

### Entfernung der Unterstützung für dynamische IP-Adressen für Runner  

Die **Runners OpenShift SecNumCloud** müssen mit **festen IP-Adressen** konfiguriert werden.  

Diese Anforderung sichert den sicheren Zugriff auf die **OpenShift-APIs**, die Verwaltungs-Schnittstellen und die Zugriffsverwaltungstools der Konsole **Cloud Temple**.  

**Dynamische IP-Adressen werden nicht unterstützt**, wodurch eine angepasste Konfiguration erforderlich ist, um die Konnektivität und Sicherheit der Komponenten zu gewährleisten.

## Wissenswertes

• Wenn die Hardware-Komponenten auf Plattform-Ebene veraltet sind und eine Migration zu neuen Rechenressourcen erforderlich ist, übernimmt Cloud Temple alle Hardware-Migrationen ohne zusätzliche Kosten und ohne Dienstunterbrechung.

• Um OpenShift zu testen, bietet Cloud Temple kein dediziertes Umfeld an, Sie können jedoch [die RedHat-Testplattformen](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) nutzen.

• Für die Automatisierung Ihrer Infrastruktur bevorzugen Sie den offiziellen Terraform-Anbieter von OpenShift.