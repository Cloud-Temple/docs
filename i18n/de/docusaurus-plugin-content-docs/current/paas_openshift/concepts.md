---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'


## Einführung in RedHat Openshift

**Red Hat OpenShift** ist eine unternehmensorientierte Containerplattform, die die Bereitstellung, Verwaltung und Skalierung containerisierter Anwendungen automatisiert. Es handelt sich um eine Plattform, die um Docker, ein Containerisierungssystem, das eine Anwendung und ihre Abhängigkeiten in einem virtuellen Container verpackt, und Kubernetes, ein Container-Orchestrierungssystem, das die Ausführung und Koordination der Container auf einem Server-Cluster verwaltet, herum aufgebaut ist.

### Hauptfunktionen von Red Hat OpenShift:

- **Automatisierte Bereitstellung und Verwaltung:** OpenShift vereinfacht den Bereitstellungsprozess von Anwendungen, indem es Routinen wie das Skalieren, die Gesundheit und die Lebensdauer der Container automatisiert. Es bietet eine integrierte Umgebung für Entwicklung, Test und Produktion von Anwendungen.

- **Unterstützung mehrerer Sprachen und Dienste:** Die Plattform unterstützt eine Vielzahl von Programmiersprachen (wie Java, Node.js, Python, Ruby und PHP) und bietet integrierte Dienste wie Messaging, Caching und Datenbanken, sodass sich Entwickler auf den Code und nicht auf die Infrastruktur konzentrieren können.

- **Kontinuierliche Integration (CI) und kontinuierliche Bereitstellung (CD):** OpenShift integriert CI/CD-Tools, die die Software-Entwicklungspipeline automatisieren, von der ersten Commit bis zur Produktion, und fördert so DevOps-Praktiken.

- **Betriebsmanagement:** OpenShift bietet Tools zur Überwachung, Leistungsverwaltung und Diagnose von Anwendungen und Infrastrukturen, was Betreibern hilft, die Gesundheit und Leistung der Systeme zu erhalten.

- **Erhöhte Sicherheit:** Die Plattform ist mit integrierter Sicherheit konzipiert und bietet rollenbasierte Zugangskontrollen, Aufgabentrennung und automatisierte Geheimnisverwaltung zum Schutz von Anwendungen und Daten.

### Vorteile von Red Hat OpenShift:

- **Flexibilität:** Entwickler können mit den Tools, Sprachen und Frameworks ihrer Wahl arbeiten.
- **Betriebliche Effizienz:** OpenShift optimiert die Ressourcennutzung, verkürzt die Markteinführungszeit und steigert die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform verwaltet automatisch das Skalieren der Anwendungen, um Schwankungen in der Nachfrage gerecht zu werden.
- **Sicherheit und Compliance:** Mit seinen integrierten Sicherheitsrichtlinien hilft OpenShift dabei, Sicherheits- und Compliance-Standards aufrechtzuerhalten.

Red Hat OpenShift ist eine umfassende Lösung für die Entwicklung, Bereitstellung und Verwaltung containerisierter Anwendungen und bietet eine robuste, sichere und flexible Plattform für Unternehmen, die moderne Software-Entwicklungsansätze anwenden.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) ist eine integrierte Speicher- und Datenverwaltungslösung, die nahtlos mit dem OpenShift-Ökosystem funktioniert. Sie bietet eine persistente, sichere und hochverfügbare Dateninfrastruktur für containerisierte Anwendungen und unterstützt moderne container- und mikroserviceorientierte Entwicklungsumgebungen. ODF ist darauf ausgelegt, die Datenverwaltung in hybriden und Multi-Cloud-Umgebungen zu vereinfachen und zu automatisieren und bietet eine solide Basis für geschäftskritische Unternehmensanwendungen.

#### Hauptfunktionen der OpenShift Data Foundation:

- **Persistenter Speicher:** ODF bietet eine Ebene für persistenten Speicher für Container, die für Unternehmensanwendungen wie Datenbanken, Content-Management-Systeme und Anwendungen, die einen persistenten Zustand benötigen, wesentlich ist.

- **Multi-Cloud und Hybrid:** Entworfen für hybride und Multi-Cloud-Umgebungen, ermöglicht ODF eine konsistente Datenverwaltungserfahrung über verschiedene Cloud-Umgebungen hinweg und erleichtert die Mobilität von Anwendungen und Daten.

- **Automatisierung und Orchestrierung:** Die tiefe Integration mit Kubernetes und OpenShift ermöglicht es ODF, die Bereitstellung, Skalierung und Lebenszyklusverwaltung des Speichers entsprechend den Bedürfnissen der Anwendungen zu automatisieren.

- **Hohe Verfügbarkeit und Ausfallsicherheit:** ODF nutzt Datenreplikation und Snapshooting, um hohe Verfügbarkeit und Datenbeständigkeit zu gewährleisten, was für die Kontinuität von Unternehmensoperationen unerlässlich ist.

- **Datensicherheit:** Die Lösung integriert fortschrittliche Sicherheitsfunktionen wie Datenverschlüsselung im Ruhezustand und während der Übertragung sowie anpassbare Sicherheits- und Compliance-Richtlinien.

#### Vorteile der OpenShift Data Foundation:

- **Betriebliche Flexibilität:** ODF ermöglicht es Unternehmen, ihre Daten in verteilten Umgebungen effizient zu verwalten und bietet die notwendige Flexibilität, um den sich ändernden Anforderungen moderner Anwendungen gerecht zu werden.

- **Vereinfachte Datenverwaltung:** Durch die Automatisierung vieler Datenverwaltungsaufgaben reduziert ODF die Komplexität und gibt IT-Ressourcen frei, damit sie sich auf höherwertige Initiativen konzentrieren können.

- **Kostenoptimierung:** Die Fähigkeit von ODF, sich dynamisch an Speicheranforderungen anzupassen, hilft dabei, Kosten zu optimieren, indem eine Überversorgung vermieden und verfügbare Ressourcen effizienter genutzt werden.

- **Verbesserte Leistung:** ODF ist darauf ausgelegt, hohe Leistungen für Unternehmensanwendungen zu bieten und verfügt über Optimierungsmöglichkeiten für verschiedene Arbeitslasttypen.

Red Hat OpenShift Data Foundation ist eine fortschrittliche Datenspeicherlösung, die die Effizienz, Resilienz und Sicherheit von Unternehmensanwendungen verbessert, die auf OpenShift bereitgestellt werden. Durch die Bereitstellung von persistentem, automatisiertem und sicherem Speicher spielt ODF eine entscheidende Rolle dabei, Unternehmen in die Lage zu versetzen, das volle Potenzial von Container- und Hybrid-Cloud-Technologien auszuschöpfen.

## Allgemeine Architektur der Plattform

### Allgemeines

Die Red Hat OpenShift-Plattform von Cloud Temple ist als regionales Angebot konzipiert und wird nativ auf **drei verschiedenen Verfügbarkeitszonen** innerhalb einer einzigen Region von Cloud Temple bereitgestellt. Diese dreizonen architectural erhöht die Verfügbarkeit und Resilienz der Daten erheblich.

Die Plattform besteht aus einem Kontrollplan und Arbeitsknoten, die alle von der Cloud Temple-Infrastruktur verwaltet werden. Der Kontrollplan ist gleichmäßig über die drei Verfügbarkeitszonen verteilt und gewährleistet eine zentralisierte und sichere Verwaltung. Die Arbeitsknoten werden durch Rechenblades dargestellt, die so angeordnet sind, dass jede Verfügbarkeitszone eines enthält.

Für die Arbeitsknoten stehen verschiedene Arten von Rechenblades zur Verfügung, die eine flexible Anpassung an unterschiedliche betriebliche Anforderungen ermöglichen:

| Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                               | Einheit                | SKU                                  |
| :----------------------------------------------------------------------------------------------------------- | :--------------------- | :----------------------------------- |
| OPENSHIFT - Kontrollplan - 3 Knoten - Region FR1                                                             | 1 dediziertes Plan     | csp:fr1:paas:oshift:plan:payg:v1     |
| OPENSHIFT - ARBEITSKNOTEN - TINY - 3 x ( 10 cores / 20 threads - 64 GB Ram - 512 GB FLASH 1500 iops)         | 3 dedizierte Workers   | csp:fr1:paas:oshift:wkr:tiny:payg:v1 |
| OPENSHIFT - ARBEITSKNOTEN - SMALL  - 3 x ( 20 cores / 40 threads - 128 GB Ram - 512 GB FLASH 1500 iops)      | 3 dedizierte Workers   | csp:fr1:paas:oshift:wkr:small:payg:v1|
| OPENSHIFT - ARBEITSKNOTEN - STANDARD  - 3 x ( 32 cores / 64 threads - 384 GB Ram - 512 GB FLASH 1500 iops)   | 3 dedizierte Workers   | csp:fr1:paas:oshift:wkr:std:payg:v1  |
| OPENSHIFT - ARBEITSKNOTEN - ADVANCED - 3 x ( 48 cores / 96 threads - 768 GB Ram - 512 GB FLASH 1500 iops)    | 3 dedizierte Workers   | csp:fr1:paas:oshift:wkr:adv:payg:v1  |
| OPENSHIFT - ARBEITSKNOTEN - PERF - 3 x ( 56 cores / 112 threads - 1.5 TB Ram - 512 GB FLASH 1500 iops)       | 3 dedizierte Workers   | csp:fr1:paas:oshift:wkr:perf:payg:v1 |
| OPENSHIFT - ARBEITSKNOTEN - GPU - 3 x ( 32 cores / 64 threads - 512 GB Ram - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB) | 3 dedizierte Workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1 |

Die Produkte von Red Hat OpenShift Cloud Temple sind als nutzungsbasierte oder 12-monatige Reservierung verfügbar.

**Hinweise** :

1. *Die Aufrechterhaltung des betrieblichen und sicherheitstechnischen Zustands des Kontrollplans liegt in der Verantwortung von Cloud Temple im Rahmen eines PaaS-Dienstes.*

2. *Ab dem 15. Juni 2024 ist Version 1 der Plattform softwareseitig absichtlich auf einen Kontrollplan mit 30 Arbeitsknoten (unabhängig vom Typ des Arbeitsknotens) und einem globalen persistenten Speicher von 50 TB beschränkt. Wenn diese Grenzen für Ihr Projekt einschränkend sind, wenden Sie sich bitte an den Support.*

3. *Jeder Arbeitsknoten wird mit 512 GB Flash-Blockspeicher geliefert, was 1,5 TB für jede Arbeitsleistungseinheit (1 Arbeiter pro AZ) ausmacht.*
4. *Ein Worker-Knoten kann standardmäßig bis zu 250 Pods verwalten. Diese Zahl ist über den Parameter podsPerCore anpassbar - beispielsweise werden bei 10 Pods pro Kern auf einem 4-Kern-Knoten maximal 40 Pods erreicht. Für weitere technische Details, konsultieren Sie die [Dokumentation zur Verwaltung von Pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) und den [OpenShift-Grenzwerte-Leitfaden](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *Das OpenShift PaaS-Angebot umfasst nativen Zugang zu den 3 Verfügbarkeitszonen, ohne dass eine zusätzliche Anmeldung erforderlich ist.*

6. *Es ist möglich, dem OpenShift-Cluster nachträglich Blockspeicher hinzuzufügen.*

7. *Die Knoten werden gleichmäßig über die 3 Verfügbarkeitszonen verteilt (1 Knoten pro Zone). Es ist nicht möglich, ein Cluster durch die Zuweisung einer größeren Anzahl von Knoten an eine einzelne Zone zu destabilisieren.*

### RedHat-Angebot im Rahmen der Openshift Cloud Temple Plattform

Die Plattform basiert auf RedHat Openshift 4 und [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) und enthält [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Backup-Strategie Ihrer Openshift PaaS-Plattform

Das Backup und die Wiederherstellung der Openshift PaaS-Plattform liegt in der Verantwortung von Cloud Temple für den **ETCD**-Teil im Rahmen des Plattformmanagements. **Das Backup und die Wiederherstellung des Bereitstellungs- und Anwendungsdaten-Teils liegt in der Verantwortung des Auftraggebers**.

Cloud Temple bietet seinen Kunden die **Veeam Kasten K10**-Lösung (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)) an, eine Plattform, die auf die Datenverwaltung für Kubernetes-Umgebungen spezialisiert ist. Sie wurde entwickelt, um den Anforderungen an den Datenschutz gerecht zu werden, und bietet robuste Funktionen für Backup, Wiederherstellung, Migration und Disaster Recovery. Kasten K10 integriert sich nativ in Kubernetes-Umgebungen, unabhängig davon, ob diese auf Cloud-Clustern oder vor Ort verwaltet werden, und kann sich an verschiedene Anwendungsfälle anpassen, einschließlich der Cluster-Migration zwischen verschiedenen Kubernetes-Distributionen wie Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine und Red Hat OpenShift.

Ein Hauptanwendungsfall von Kasten K10 ist **die Migration von Clustern zwischen verschiedenen Kubernetes-Plattformen**. Ob für den Übergang zu einer robusteren Infrastruktur oder zur Konsolidierung bestehender Umgebungen, Kasten K10 bietet einfache und effiziente Werkzeuge zur Verwaltung dieser Migrationen:

 - **Backup und Datenschutz**: Bei der Migration eines Kubernetes Vanilla- oder VMware Tanzu-Clusters zu Red Hat Kubernetes Engine oder OpenShift besteht der erste Schritt darin, die Daten der Anwendungen und ihren Zustand zu sichern. Kasten K10 integriert sich nahtlos mit den Kubernetes-APIs, um Anwendungen, deren Abhängigkeiten sowie die zugehörigen Datenvolumen zu identifizieren. Dies umfasst die Sicherung der persistenten Volumen (Persistent Volumes - PV), Datenbanken, Konfigurationen und Secrets. Kasten K10 unterstützt eine Vielzahl von Speicheranbietern (S3, Google Cloud Storage, Azure Blob Storage etc.), was es ermöglicht, Snapshots der zu migrierenden Anwendungen zu erstellen. Diese Backups werden dann sicher gespeichert, mit Verschlüsselungsoptionen und granularem Zugriffsschutz, um die Sicherheit der Daten während des gesamten Prozesses zu gewährleisten.

 - **Portabilität und Migration**: Die Migration zwischen Kubernetes-Distributionen wie Vanilla oder Tanzu und Red Hat-Lösungen wie OpenShift oder Kubernetes Engine kann aufgrund unterschiedlicher Architekturen und spezifischer Konfigurationen jeder Plattform komplex sein. Kasten K10 vereinfacht diesen Prozess, indem es eine Abstraktionsschicht für die Portabilität der Anwendungen bietet. Während der Migration repliziert Kasten K10 die Konfigurationen und Daten von einem Quellcluster zu einem Zielcluster und berücksichtigt dabei die Spezifika jeder Umgebung. Beispielsweise können Kubernetes-Objekte wie ConfigMaps, Secrets, PV sowie CRDs (Custom Resource Definitions) unter Berücksichtigung der Besonderheiten jeder Kubernetes-Distribution migriert werden, sei es ein Red Hat OpenShift- oder Kubernetes Engine-Cluster. Der Prozess ist automatisiert, was das Risiko manueller Fehler erheblich reduziert. Außerdem ermöglicht Kasten K10 eine schrittweise oder vollständige Migration, je nach Bedarf, und bietet Echtzeiteinblicke in den Migrationsstatus, wodurch die Verwaltung und Überwachung des Übergangs vereinfacht wird.

 - **Multi-Cloud- und Multi-Distribution-Kompatibilität**: Kasten K10 ist für den Betrieb in hybriden und Multi-Cloud-Umgebungen konzipiert, was es zu einem idealen Werkzeug für Organisationen macht, die Anwendungen von Tanzu- oder Vanilla-Clustern zu Red Hat-Umgebungen in der Cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) oder auf lokalen Infrastrukturen migrieren möchten. Dies gewährleistet maximale Flexibilität und ermöglicht DevOps-Teams, das beste Umfeld basierend auf Geschäftsanforderungen oder Infrastruktur-Modernisierungsstrategien auszuwählen.

 - **Vereinfachte Verwaltung und Automatisierung**: Kasten K10 bietet eine intuitive Benutzeroberfläche, die Administratoren die einfache Verwaltung von Migrations- und Backup-Operationen ermöglicht, ohne tiefgehende Kenntnisse jeder Kubernetes-Plattform zu benötigen. Die Lösung ist außerdem mit Automatisierungsfunktionen ausgestattet, die es ermöglichen, wiederkehrende Migrations- und Backup-Richtlinien zu definieren und in CI/CD-Pipelines zu integrieren, um kontinuierliche Operationen durchzuführen. Benutzer können Migrationen oder Wiederherstellungen basierend auf Wartungsfenstern planen, nach der Migration Validierungstests durchführen und Ausfallprozesse im Falle eines Problems mit dem Quellcluster automatisieren.

 - **Sicherheit und Compliance**: Bei Migrationen zu kritischen Umgebungen wie Red Hat OpenShift oder Kubernetes Engine sind die Sicherheit der Daten und die Einhaltung von Normen (ISO, SOC, GDPR etc.) wesentliche Aspekte. Kasten K10 gewährleistet die Verschlüsselung der Daten während der Übertragung und im Ruhezustand und bietet Optionen zur Auditierung und Nachverfolgung von Backup- und Wiederherstellungsvorgängen. Diese Fähigkeiten sind entscheidend, um die Sicherheit der migrierten Daten in Produktions- oder Testumgebungen zu gewährleisten. Kasten K10 ist eine unverzichtbare Lösung für Unternehmen, die Kubernetes Vanilla- oder VMware Tanzu-Cluster effizient und sicher zu Red Hat Kubernetes Engine oder OpenShift migrieren möchten.

 Abrechnung nach Anzahl der Worker-Knoten.

| Einheiten für Redhat Openshift 4 mit Data Foundations - Worker Node Backup Solution   | Einheit   | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes Datenschutz und Anwendungs-Mobilität                  | 3 Workers | csp:fr1:paas:kasten:3wkr:v1 |

**Hinweis** : *Bitte beachten Sie, dass der für die ordnungsgemäße Funktion Ihres Backups erforderliche Speicherplatz auf der Empfangsumgebung Ihres Backups (in der Regel S3-Speicher) bereitgestellt werden muss. Dieser ist nicht in den Openshift- oder Kasten-Einheiten enthalten.*

**(1)** _OADP ist nicht nativ im Cluster installiert. Nur Kasten ist für die Verwaltung von Migrationen, Backups und Wiederherstellungen aktiviert_

## Rechte und Berechtigungen

Hier sind die wichtigsten implementierten Berechtigungen:

|       Gruppe       |         API             |                                                                                       Ressourcen-Berechtigungen                                                                                     |
|--------------------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps         |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, Replikationscontroller, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")           |                                                                                        Secrets Create                                                                                            |
|config.kio.kasten.io|        Profiles         |                                                                            Get, List, Watch, Create, Update, Patch, Delete                                                                        |
|config.kio.kasten.io|     PolicyPresets,      |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Alle            |                                                                                  Ressourcen (*) Get, List                                                                                         |
|       Batch        |       CronJobs,         |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |

|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|     Networking     |       Ingresses,       |                                                                  NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|       Policy       |  PodDisruptionBudgets  |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|       Route        |      (OpenShift)       |                                                                       Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build        |      (OpenShift)       |                                                          BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
|       Image        |      (OpenShift)       |                                                           ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
|        Apps        |      (OpenShift)       |                                                                 DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|      Template      |      (OpenShift)       |                                                            Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
|   Authorization    |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        RBAC        |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Project       |      (OpenShift)       |                                                                                Projects Get, Delete, Update, Patch                                                                                 |
|     Operators      |     Subscriptions,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager    |     Certificates,      |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging       |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Storage       |    VolumeSnapshots     |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|        Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa       |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket    |  ObjectBucketClaims,   |                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        OCS         |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Local        |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics       |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom       |       Resources        |                                       Verschiedene benutzerdefinierte Ressourcen im Zusammenhang mit Kasten K10, Keycloak usw. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Aktuelle Beschränkungen des Redhat Openshift-Angebots im SecNumCloud-Umfeld

Hier sind einige Einschränkungen, die durch die SecNumCloud-Zertifizierung verursacht werden:

### Dedizierter Kontrollplan

Arbeitslasten können aufgrund der inhärenten Beschränkungen hinsichtlich Ressourcenmanagement und Sicherheit der OpenShift-Plattform auf SecNumCloud nicht auf dem Kontrollplan ausgeführt werden.

### Verbot des Deployments von Images mit hohen Privilegien (rootless)

Um den Sicherheitsanforderungen des SecNumCloud-Repositorys zu entsprechen, ist die Verwendung von unverzichtbaren Containern (rootless) obligatorisch.

Dieser Ansatz erhöht die Gesamt Sicherheit, indem er jeglichen privilegierten Zugriff auf Container verhindert. Anwendungen, die privilegierte Container benötigen, müssen geändert werden, da deren Bereitstellung nicht gestattet ist.

Diese Einschränkung gilt auch für Helm Charts und Operatoren, die nicht-rootlose Images verwenden, sodass deren Bereitstellung innerhalb der Infrastruktur unmöglich ist.

### Einschränkungen der ClusterRole-Rechte

Im Rahmen unseres OpenShift-Angebots implementieren wir ein strenges Management der Zugriffsrechte auf Cluster-Ebene, das den SecNumCloud-Anforderungen entspricht.

Dieser Ansatz beinhaltet eine Einschränkung der ClusterRoles für unsere Kunden und beschränkt somit einige Aspekte des gesamten Cluster-Managements. Obwohl diese Maßnahme zunächst restriktiv wirken mag, zielt sie darauf ab, die Sicherheit und Stabilität der Infrastruktur zu stärken.

Wir sind uns bewusst, dass dies technische Herausforderungen mit sich bringen kann, insbesondere bei der Konfiguration fortgeschrittener Parameter, und potenziell Auswirkungen auf die Anpassung Ihrer Anwendungen oder den Erwerb zusätzlicher Tools hat.

Unser Support-Team steht Ihnen zur Verfügung, um Sie in diesem Bereich zu führen und zu beraten.

### Der SCC-Kontext kann in der SecNumCloud-Umgebung nicht geändert werden

Security Context Constraints (SCC) unterliegen strengen Beschränkungen und können von Benutzern nicht geändert werden. Diese Einschränkung hat erhebliche Auswirkungen auf die Bereitstellung und Ausführung von Containern.

In der Praxis bedeutet dies, dass Container-Ausführungsparameter wie Systemzugriffsrechte oder Linux-Fähigkeiten vordefiniert und nicht anpassbar sind.

Diese Maßnahme, die durch Sicherheitsanforderungen motiviert ist, soll unerlaubten Zugriff auf kritische Cluster-Ressourcen verhindern. Folglich können Anwendungen, die spezifische Sicherheitskontexte, insbesondere solche mit privilegierten Zugriffen, erfordern, auf Hindernisse bei der Bereitstellung stoßen.

Technisch gesehen kann dies eine Überprüfung der Anwendungsarchitektur und eine Anpassung der Bereitstellungsprozesse erfordern, um den vordefinierten SCCs zu entsprechen. In operativer Hinsicht kann diese Einschränkung die Flexibilität der Bereitstellungen verringern und die Verwaltung bestimmter Anwendungen in der OpenShift-Umgebung komplexer machen, insbesondere solcher, die Helm Charts oder Operatoren verwenden, die die geltenden SCCs nicht einhalten.

### Einschränkungen bei Custom Resource Definitions (CRDs)

Um der SecNumCloud-Zertifizierung zu entsprechen, gibt es eine wichtige Einschränkung hinsichtlich der Verwendung von Custom Resource Definitions (CRDs) und benutzerdefinierten Controllern. Diese Maßnahme, die sich auf Clusterrechte bezieht, zielt darauf ab, die Bereitstellung potenziell instabiler oder unautorisierter benutzerdefinierter Ressourcen zu verhindern.

Diese Einschränkung gilt auch für Operatoren und Helm Charts, mit direkten Auswirkungen auf RBAC-Rechte, da CRDs die Kubernetes-API erweitern. Folglich müssen Operatoren und Helm Charts einen Zertifizierungsprozess durch unsere Dienste durchlaufen, um ihre Konformität und Sicherheit zu gewährleisten.
Les benutzerdefinierten CRDs, insbesondere diejenigen, die spezifischen geschäftlichen Anforderungen entsprechen, können aufgrund der Risiken, die sie für die Stabilität und Sicherheit der Plattform darstellen, in der Infrastruktur abgelehnt werden. Diese Richtlinie, die zum Schutz der Integrität und Zuverlässigkeit des Clusters entwickelt wurde, erlaubt nur CRDs von offiziell zertifizierten Operatoren oder Helm Charts.

Unser Support-Team steht Ihnen zur Verfügung, um Sie zu leiten und zu beraten, welche bewährten Praktiken in diesem Rahmen anzuwenden sind.

### Keine Unterstützung von dynamischen IPs für Runner

Die OpenShift SecNumCloud-Plattform erfordert, dass Runner mit festen IP-Adressen konfiguriert werden. Diese Anforderung ist motiviert durch die Notwendigkeit, die IPs zu autorisieren, die unsere Cloud Temple-Konsole verwalten, die für das API-Zugriffsverwaltungs-Tool erforderlich ist. Die autorisierten IP-Adressen werden auch verwendet, um auf die OpenShift-API sowie auf die OpenShift- und Shiva-Verwaltungsschnittstellen zuzugreifen.

Daher wird die Verwendung von dynamischen IP-Adressen für diese Komponenten nicht unterstützt, was die Konfiguration von festen IPs erforderlich macht, um die Sicherheit und den Zugang zu APIs zu gewährleisten.

## Lastverteiler

Die SecNumCloud Openshift-Umgebung bietet verschiedene Load-Balancing-Optionen auf unterschiedlichen Ebenen, um eine sichere und effiziente Verkehrsverwaltung zu gewährleisten. Die API des Load Balancers ist über die Ports 6443 und 443 zugänglich, wobei die Sicherheit durch eine Whitelist verwaltet wird, die von der Cloud Temple-Konsole verwaltet wird. Diese API verwendet eine öffentliche IP-Adresse, die mit unserem Backbone verbunden ist, ist jedoch standardmäßig nicht zugänglich, um die Zugriffssicherheit zu erhöhen.

Für den privaten Load Balancer verwendet die Umgebung standardmäßig Ingress (nginx), was eine effiziente Verwaltung des internen Verkehrs ermöglicht. Darüber hinaus ist über die IaaS-Infrastruktur von Cloud Temple Unterstützung für TCP verfügbar, was zusätzliche Flexibilität für Anwendungen bietet, die auf dieser Ebene Load Balancing benötigen.

Was den öffentlichen Load Balancer betrifft, so wird Level-4-Support über Ingress bereitgestellt, obwohl derzeit einige Einschränkungen bei der "expose"-Befehl bestehen. Dies bedeutet, dass das System in der Lage ist, TCP- und UDP-Verbindungen zuverlässig zu verwalten und weiterhin entwickelt wird, um größere Kompatibilität und Flexibilität zu bieten.

**Hinweis**: Der integrierte Load Balancer dient nicht als WAF. Ein WAF-as-a-Service-Angebot ist für das zweite Halbjahr 2025 geplant.

## Gut zu wissen

• Wenn die Hardwarekomponenten auf der Plattform veraltet sind und eine Migration auf neue Rechenressourcen erforderlich ist, übernimmt Cloud Temple alle Hardware-Migrationen ohne zusätzliche Kosten und ohne Unterbrechung des Dienstes.

• Zum Testen von OpenShift stellt Cloud Temple keine dedizierte Umgebung zur Verfügung, aber Sie können [die RedHat-Testplattformen](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) verwenden.

• Für die Automatisierung Ihrer Infrastruktur bevorzugen Sie den offiziellen Terraform-Provider von OpenShift gegenüber dem von Cloud Temple.