---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'

## Präsentation von RedHat Openshift

**Red Hat OpenShift** ist eine Unternehmensplattform für Container, die die Bereitstellung, Verwaltung und Skalierung containerisierter Anwendungen automatisiert. Es ist eine Plattform, die um Docker, ein Containerisierungssystem, das es ermöglicht, eine Anwendung und ihre Abhängigkeiten in einem virtuellen Container zu verpacken, und Kubernetes, ein Container-Orchestrierungssystem, das die Ausführung und Koordination von Containern in einem Server-Cluster verwaltet, aufgebaut ist.

### Hauptfunktionen von Red Hat OpenShift:

- **Automatisierte Bereitstellung und Verwaltung:** OpenShift vereinfacht den Bereitstellungsprozess von Anwendungen, indem es Management-Routinen wie Skalierung, Gesundheitsüberwachung und Lebensdauer der Container automatisiert. Es bietet eine integrierte Umgebung für die Entwicklung, das Testen und den produktiven Einsatz von Anwendungen.

- **Unterstützung mehrerer Sprachen und Dienste:** Die Plattform unterstützt eine Vielzahl von Programmiersprachen (wie Java, Node.js, Python, Ruby und PHP) und bietet integrierte Dienste wie Messaging, Caching und Datenbanken, sodass sich Entwickler auf den Code statt auf die Infrastruktur konzentrieren können.

- **Kontinuierliche Integration (CI) und kontinuierliche Bereitstellung (CD):** OpenShift integriert CI/CD-Tools, die die Softwareentwicklungspipeline vom ersten Commit bis zur Produktion automatisieren und so DevOps-Praktiken fördern.

- **Betriebsmanagement:** OpenShift bietet Tools zur Überwachung, Leistungsverwaltung und Diagnose von Anwendungen und Infrastrukturen, die Betreibern helfen, die Gesundheit und Leistung der Systeme aufrechtzuerhalten.

- **Erhöhte Sicherheit:** Die Plattform ist mit integrierter Sicherheit konzipiert und bietet rollenbasierte Zugriffskontrollen, Aufgabenverteilung und automatisiertes Geheimnismanagement zum Schutz von Anwendungen und Daten.

### Vorteile von Red Hat OpenShift:

- **Flexibilität:** Entwickler können mit den Tools, Sprachen und Frameworks ihrer Wahl arbeiten.
- **Betriebliche Effizienz:** OpenShift optimiert die Ressourcennutzung, verkürzt die Markteinführungszeit und verbessert die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform verwaltet automatisch die Skalierung der Anwendungen, um den Nachfrageänderungen gerecht zu werden.
- **Sicherheit und Compliance:** Mit integrierten Sicherheitsrichtlinien hilft OpenShift, die Sicherheits- und Compliance-Standards einzuhalten.

Red Hat OpenShift ist eine Komplettlösung für die Entwicklung, Bereitstellung und Verwaltung containerisierter Anwendungen und bietet eine robuste, sichere und flexible Plattform für Unternehmen, die moderne Ansätze in der Softwareentwicklung übernehmen.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) ist eine integrierte Speicher- und Datenverwaltungslösung, die nahtlos mit dem OpenShift-Ökosystem zusammenarbeitet. Sie bietet eine persistente, sichere und hochverfügbare Dateninfrastruktur für containerisierte Anwendungen und unterstützt so moderne container- und mikroservicezentrierte Entwicklungsumgebungen. ODF ist darauf ausgelegt, die Datenverwaltung in hybriden und Multi-Cloud-Umgebungen zu vereinfachen und zu automatisieren und bietet eine solide Grundlage für geschäftskritische Unternehmensanwendungen.

#### Wichtige Funktionen der OpenShift Data Foundation:

- **Persistenter Speicher:** ODF bietet eine persistente Speicherebene für Container, die für Unternehmensanwendungen wie Datenbanken, Content-Management-Systeme und Anwendungen, die einen persistenten Zustand erfordern, unerlässlich ist.

- **Multi-Cloud und Hybrid:** Die Lösung ist für hybride und Multi-Cloud-Umgebungen konzipiert und ermöglicht ein einheitliches Datenmanagement über unterschiedliche Cloud-Umgebungen hinweg, was die Mobilität von Anwendungen und Daten erleichtert.

- **Automatisierung und Orchestrierung:** Die tiefe Integration mit Kubernetes und OpenShift ermöglicht es ODF, die Bereitstellung, Skalierung und Verwaltung des Speicherlebenszyklus basierend auf den Anforderungen der Anwendungen zu automatisieren.

- **Hohe Verfügbarkeit und Widerstandsfähigkeit:** ODF nutzt Datenreplikation und Snapshots, um die hohe Verfügbarkeit und Haltbarkeit der Daten sicherzustellen, was für die Kontinuität von Geschäftsabläufen entscheidend ist.

- **Datensicherheit:** Die Lösung integriert fortschrittliche Sicherheitsfunktionen wie die Verschlüsselung von Daten im Ruhezustand und während der Übertragung sowie anpassbare Sicherheits- und Compliance-Richtlinien.

#### Vorteile der OpenShift Data Foundation:

- **Operational Flexibility:** ODF ermöglicht es Unternehmen, ihre Daten in verteilten Umgebungen effizient zu verwalten und bietet die nötige Flexibilität, um den sich ändernden Anforderungen moderner Anwendungen gerecht zu werden.

- **Datenverwaltung vereinfachen:** Durch die Automatisierung vieler Datenverwaltungsaufgaben reduziert ODF die Komplexität und entlastet IT-Ressourcen, sodass diese sich auf wertschöpfendere Initiativen konzentrieren können.

- **Kostenoptimierung:** Die Fähigkeit von ODF, sich dynamisch an Speicheranforderungen anzupassen, hilft bei der Kostenoptimierung, indem Überprovisionierung vermieden und die verfügbaren Ressourcen effizienter genutzt werden.

- **Leistungssteigerung:** ODF ist darauf ausgelegt, eine hohe Leistung für Unternehmensanwendungen zu bieten und verfügt über Optimierungsmöglichkeiten für verschiedene Arbeitslasten.

Red Hat OpenShift Data Foundation ist eine fortschrittliche Datenspeicherlösung, die die Effizienz, Widerstandsfähigkeit und Sicherheit von Unternehmensanwendungen auf OpenShift stärkt. Durch die Bereitstellung eines persistenten, automatisierten und sicheren Speichers spielt ODF eine entscheidende Rolle bei der Ermöglichung von Unternehmen, das volle Potenzial der Container- und Hybrid-Cloud-Technologien auszuschöpfen.

## Allgemeine Architektur der Plattform

### Allgemeines

Die Red Hat OpenShift-Plattform von Cloud Temple ist als regionales Angebot konzipiert und wird nativ auf [**drei unterschiedliche Verfügbarkeitszonen**](../additional_content/concepts_az.md) innerhalb einer [Region](../additional_content/concepts_regional.md) von Cloud Temple bereitgestellt. Diese dreizonen-übergreifende Architektur erhöht die Datenverfügbarkeit und -resilienz erheblich.

Die Plattform besteht aus einer Steuerungsebene und Arbeitsknoten, die alle von der Cloud Temple Infrastruktur verwaltet werden. Die Steuerungsebene ist gleichmäßig auf die drei Verfügbarkeitszonen verteilt und gewährleistet eine zentrale und sichere Verwaltung. Die Arbeitsknoten hingegen bestehen aus Rechenschiebern, wobei jede Verfügbarkeitszone einen enthält.

Für die Arbeitsknoten sind mehrere Arten von Rechenschiebern verfügbar, was eine flexible Anpassung an verschiedene betriebliche Anforderungen ermöglicht:

| Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Einheit                  | SKU                                   |
| :-------------------------------------------------------------------------------------------------------------| :----------------------- | :------------------------------------ |
| OPENSHIFT - Steuerungsebene - 3 Knoten - Region FR1                                                           | 1 dedizierter Plan       | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - ARBEITSKNOTEN - TINY - 3 x (10 Kerne / 20 Threads - 64 GB RAM - 512 GiB FLASH 1500 IOPS)          | 3 dedizierte Arbeitsknot | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - ARBEITSKNOTEN - SMALL - 3 x (20 Kerne / 40 Threads - 128 GB RAM - 512 GiB FLASH 1500 IOPS)        | 3 dedizierte Arbeitsknot | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - ARBEITSKNOTEN - STANDARD - 3 x (32 Kerne / 64 Threads - 384 GB RAM - 512 GiB FLASH 1500 IOPS)     | 3 dedizierte Arbeitsknot | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - ARBEITSKNOTEN - ADVANCED - 3 x (48 Kerne / 96 Threads - 768 GB RAM - 512 GiB FLASH 1500 IOPS)     | 3 dedizierte Arbeitsknot | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - ARBEITSKNOTEN - PERF - 3 x (56 Kerne / 112 Threads - 1,5 TB RAM - 512 GiB FLASH 1500 IOPS)        | 3 dedizierte Arbeitsknot | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - ARBEITSKNOTEN - GPU - 3 x (32 Kerne / 64 Threads - 512 GB RAM - 512 GiB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 dedizierte Arbeitsknot | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Die Red Hat OpenShift Cloud Temple-Produkte sind nutzungsbasiert oder mit einer 12-monatigen Reservierung verfügbar.

**Hinweise**:

1. *Die Aufrechterhaltung des Betriebszustands und der Sicherheit der Steuerungsebene liegt in der Verantwortung von Cloud Temple als Teil eines PaaS-Dienstes.*

2. *Am 15. Juni 2024 ist die Version 1 der Plattform softwareseitig absichtlich auf eine Steuerungsebene mit 30 Arbeitsknoten (unabhängig vom Arbeitsknotentyp) und einem globalen persistenten Speicher von 50 TiB beschränkt. Wenn diese Grenzen für Ihr Projekt hinderlich sind, wenden Sie sich bitte an den Support.*

3. *Jeder Arbeitsknoten wird mit 512 GiB Flash-Block-Speicher geliefert, was 1,5 TiB pro Ausführungseinheit (1 Arbeitsknoten pro AZ) ergibt.*


4. *Ein Worker-Knoten kann standardmäßig bis zu 250 Pods verwalten. Diese Anzahl ist über den Parameter podsPerCore anpassbar – zum Beispiel, bei 10 Pods pro Kern auf einem 4-Kern-Knoten haben Sie maximal 40 Pods. Weitere technische Details finden Sie in der [Dokumentation zur Handhabung von Pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) und im [OpenShift-Limits-Guide](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *Das Openshift PaaS-Angebot umfasst nativ den Zugang zu den 3 Verfügbarkeitszonen, ohne dass zusätzlich abonniert werden muss.*

6. *Es ist möglich, nachträglich Blockspeicher zum Openshift-Cluster hinzuzufügen.*

7. *Die Knoten werden gleichmäßig auf die 3 Verfügbarkeitszonen verteilt (1 Knoten pro Zone). Es ist nicht möglich, einen Cluster zu destabilisieren, indem eine größere Anzahl von Knoten einer einzigen Zone zugewiesen wird.*

### RedHat-Angebot im Rahmen der Openshift Cloud Temple Plattform

Die Plattform basiert auf Redhat Openshift 4 und der [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) und umfasst [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Sicherungsstrategie für Ihre Openshift PaaS Plattform

Die Sicherung und Wiederherstellung der Openshift PaaS Plattform ist die Verantwortung von Cloud Temple für den **ETCD**-Teil im Rahmen des Plattformmanagements. **Die Sicherung und Wiederherstellung für den Bereitstellungs- und Datenanwendungsteil liegt in der Verantwortung des Auftraggebers**.

Cloud Temple stellt seinen Kunden das Angebot **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)) bereit, eine Plattform, die auf die Verwaltung von Daten in Kubernetes-Umgebungen spezialisiert ist. Entwickelt, um den Anforderungen an den Datenschutz gerecht zu werden, bietet sie robuste Funktionen für Sicherung, Wiederherstellung, Migration und Desaster Recovery. Kasten K10 integriert sich nahtlos in Kubernetes-Umgebungen, egal ob sie auf Cloud- oder On-Premises-Clustern verwaltet werden, und kann an verschiedene Anwendungsfälle angepasst werden, einschließlich der Migration von Clustern zwischen verschiedenen Kubernetes-Distributionen wie Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine und Red Hat OpenShift.

Einer der Haupteinsatzbereiche von Kasten K10 ist **die Migration von Clustern zwischen verschiedenen Kubernetes-Plattformen**. Sei es für den Übergang zu einer robusteren Infrastruktur oder zur Konsolidierung bestehender Umgebungen, Kasten K10 bietet einfache und effiziente Werkzeuge zur Verwaltung dieser Migrationen:

- **Datensicherung und -schutz**: Bei der Migration eines Kubernetes Vanilla oder VMware Tanzu Clusters zu Red Hat Kubernetes Engine oder OpenShift ist der erste Schritt die Sicherung der Anwendungsdaten und deren Status. Kasten K10 integriert sich problemlos mit den Kubernetes-APIs, um Anwendungen, ihre Abhängigkeiten und die zugehörigen Datenvolumen zu identifizieren. Dies umfasst die Sicherung von Persistent Volumes (PV), Datenbanken, Konfigurationen und Secrets. Kasten K10 unterstützt eine breite Palette von Speicheranbietern (S3, Google Cloud Storage, Azure Blob Storage usw.), was die Erstellung von Snapshots der zu migrierenden Anwendungen ermöglicht. Diese Sicherungen werden dann sicher gespeichert und bieten Optionen für Verschlüsselung und granulare Zugriffskontrollen, die die Datensicherheit während des gesamten Prozesses gewährleisten.

- **Portabilität und Migration**: Die Migration zwischen Kubernetes-Distributionen wie Vanilla oder Tanzu und Red Hat-Lösungen wie OpenShift oder Kubernetes Engine kann aufgrund der architektonischen Unterschiede und der spezifischen Konfigurationen jeder Plattform komplex sein. Kasten K10 vereinfacht diesen Prozess, indem es eine Abstraktionsschicht für die Anwendungsportabilität bereitstellt. Während der Migration repliziert Kasten K10 die Konfigurationen und Daten von einem Quell- zu einem Ziel-Cluster, wobei die Besonderheiten der jeweiligen Umgebung berücksichtigt werden. Beispielsweise können Kubernetes-Objekte wie ConfigMaps, Secrets, PVs sowie Custom Resource Definitions (CRDs) unter Berücksichtigung der restriktiven Anforderungen jeder Kubernetes-Distribution migriert werden, sei es ein Red Hat OpenShift oder Kubernetes Engine Cluster. Der Prozess ist automatisiert, was das Risiko manueller Fehler erheblich reduziert. Darüber hinaus ermöglicht Kasten K10 eine schrittweise oder vollständige Migration, je nach Bedarf, und bietet Echtzeit-Einblicke in den Status der Migration, wodurch das Management und die Überwachung des Übergangs erleichtert werden.

- **Multi-Cloud- und Multi-Distribution-Kompatibilität**: Kasten K10 ist darauf ausgelegt, in hybriden und Multi-Cloud-Umgebungen zu arbeiten, was es zu einem idealen Werkzeug für Organisationen macht, die Anwendungen von Tanzu oder Vanilla Clustern zu Red Hat-Umgebungen in der Cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) oder auf On-Premises-Infrastrukturen migrieren möchten. Dies gewährleistet maximale Flexibilität und ermöglicht es DevOps-Teams, die beste Umgebung entsprechend den geschäftlichen Anforderungen oder Infrastruktur-Modernisierungsstrategien auszuwählen.

- **Vereinfachte Verwaltung und Automatisierung**: Kasten K10 bietet eine intuitive Benutzeroberfläche, die Administratoren die einfache Verwaltung von Migrations- und Sicherungsoperationen ermöglicht, ohne tiefgehendes Fachwissen über jede Kubernetes-Plattform zu erfordern. Die Lösung ist auch mit Automatisierungsfunktionen ausgestattet, die die Definition von wiederkehrenden Migrations- und Sicherungsrichtlinien ermöglichen und sich in CI/CD-Pipelines für kontinuierliche Operationen integrieren. Benutzer können Migrationen oder Wiederherstellungen je nach Wartungsfenstern planen, Validierungstests nach der Migration durchführen und Failover-Prozesse automatisieren, falls Probleme im Quell-Cluster auftreten.

- **Sicherheit und Compliance**: Bei Migrationen in kritische Umgebungen wie Red Hat OpenShift oder Kubernetes Engine sind Datensicherheit und Compliance mit Standards (ISO, SOC, GDPR usw.) wesentliche Aspekte. Kasten K10 stellt die Verschlüsselung von Daten während der Übertragung und im Ruhezustand sicher und bietet darüber hinaus Audit- und Verfolgbarkeitsoptionen für Sicherungs- und Wiederherstellungsoperationen. Diese Fähigkeiten sind entscheidend, um die Sicherheit der migrierten Daten sowohl in Produktions- als auch Testumgebungen zu gewährleisten. Kasten K10 ist eine unverzichtbare Lösung für Unternehmen, die Cluster von Kubernetes Vanilla oder VMware Tanzu effektiv und sicher zu Red Hat Kubernetes Engine oder OpenShift migrieren möchten.

Die Abrechnung erfolgt pro Worker-Knoten.

| Redhat Openshift 4 Einheiten mit Data Foundations - Worker Node Backup-Lösung | Einheit      | SKU                         |
| :----------------------------------------------------------------------------- | :----------- | :---------------------------- |
| VEEAM - KASTEN K10 - Datenschutz und Anwendungsportabilität für Kubernetes      | 3 Arbeiter   | csp:fr1:paas:kasten:3wkr:v1     |

**Hinweis**: *Bitte beachten, dass das Speichervolumen für den ordnungsgemäßen Betrieb Ihrer Sicherung in der Empfangsumgebung Ihrer Sicherung eingeplant werden muss, normalerweise in S3-Speicher. Es ist nicht in den Redhat Openshift- oder Kasten-Einheiten enthalten.*

**(1)** _OADP ist nicht nativ im Cluster installiert. Nur Kasten ist für die Verwaltung von Migrationen, Sicherungen und Wiederherstellungen aktiviert_

## Lastverteiler

Die **SecNumCloud OpenShift** Umgebung bietet Lastverteilungslösungen, die verschiedenen funktionalen Bereichen angepasst sind, um ein sicheres und optimiertes Verkehrsmanagement zu gewährleisten.

Die Lastverteiler decken vier verschiedene Bereiche ab, basierend auf den verschiedenen Ebenen des OSI-Modells:

- **Zugang zu Administrationswerkzeugen** (API-Server und OpenShift-Konsole)
- **Öffentlicher HTTP/HTTPS-Verkehr**
- **Privater HTTP/HTTPS-Verkehr**
- **Spezifischer Verkehr, der erweiterte Personalisierung erfordert**

### Zugang zu Administrationswerkzeugen

Der Zugang zu Administrationswerkzeugen ist durch dedizierte LoadBalancer gesichert. Diese sind durch verstärkte Sicherheitskontrollen geschützt, einschließlich einer anpassbaren Whitelist über die **Cloud Temple**-Konsole, die eine strikte Zugriffskontrolle gewährleistet.

### Öffentlicher HTTP/HTTPS-Verkehr

Die **öffentlichen LoadBalancer**, die auf **HAProxy** basieren, arbeiten auf **Level 4** des OSI-Modells. Sie ermöglichen die Exposition Ihrer Arbeitslasten in **HTTP/HTTPS** über **Routen** und **Ingress**, wodurch eine effiziente und leistungsstarke Verteilung des eingehenden Verkehrs gewährleistet wird.

### Privater HTTP/HTTPS-Verkehr (Interne Verbindung mit Ihren IaaS SNC-Diensten)

Die **privaten LoadBalancer** erleichtern die Kommunikation mit Ihren **IaaS SNC**-Diensten ohne öffentliche Exposition. Wie ihre öffentlichen Gegenstücke stellen sie die Verteilung des **HTTP/HTTPS**-Verkehrs sicher und bieten ein sicheres und isoliertes Umfeld.

### Spezifischer Verkehr

Der **spezifische Verkehr** wird über **MetalLB** verwaltet, einen LoadBalancer, der auf **Level 2** des OSI-Modells operiert. Er unterstützt fortgeschrittene Anforderungen, die eine feine Personalisierung erfordern, einschließlich:

- Verbindung zu einer Datenbank über **TCP**
- Verwaltung von **UDP**-Flüssen für Echtzeitanwendungen oder Anwendungen mit geringer Latenz
- Routing von fortgeschrittenen Protokollen wie **QUIC** oder **MQTT-SN**, die eine erhöhte Flexibilität bieten
Cette Lösung ermöglicht es, Ihre spezifischen Workflows zu unterstützen, sowohl für Ihre privaten Interkonnektivitäten als auch für Ihre öffentlichen Expositionsanforderungen.  

Das Routing erfolgt über **Pools von öffentlichen und privaten IP-Adressen**. Standardmäßig werden Ihnen zwei Pools zur Exposition Ihrer Dienste zugewiesen:  

- **Ein Pool von 4 öffentlichen IP-Adressen**
- **Ein Pool von 254 privaten IP-Adressen**  

Wenn diese Ressourcen nicht ausreichen, um Ihre Workloads zu unterstützen, können Sie bei unseren Diensten die Zuweisung zusätzlicher IP-Adressen, seien es **öffentliche** oder **private**, beantragen.  

> **Hinweis**: Eingebaute LoadBalancers fungieren nicht als **WAF**. Eine **WAF as a Service**-Lösung wird bald verfügbar sein.  

## Rechte und Berechtigungen

Hier sind die wesentlichen implementierten Berechtigungen:

|       Gruppe       |         API          |                                                                                       Ressourcenspeicher                                                               |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Alle         |                                                                                    Ressourcen (*) Get, List                                                                                    |
|       Batch        |       CronJobs,        |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
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
|       Lokal        |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metriken       |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Sicherheit      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom       |       Ressourcen        |                                       Verschiedene benutzerdefinierte Ressourcen im Zusammenhang mit Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |


## Sicherheitsbeschränkungen und -anforderungen auf OpenShift SecNumCloud  

### Dedizierter Kontrollplan  

Die Ausführung von Workloads auf dem **Kontrollplan** ist strengstens untersagt. Diese Einschränkung gewährleistet die Sicherheit und Stabilität der OpenShift-Plattform auf **SecNumCloud**, indem der Zugriff auf kritische Ressourcen begrenzt wird.  

### Verbot von Containern mit hohen Privilegien (rootless)  

Zur Einhaltung der Sicherheitsanforderungen des **SecNumCloud-Referenzrahmens** sind nur **rootless-Container** zulässig. Dieser Ansatz erhöht die Sicherheit, indem er jeglichen privilegierten Zugriff auf die Container verhindert.  

Anwendungen, die hohe Privilegien erfordern, müssen angepasst werden, da ihre Bereitstellung nicht zulässig ist. Diese Einschränkung gilt auch für **Helm Charts** und **Operatoren**, die nicht-rootless-Bilder verwenden, wodurch ihre Verwendung mit der Infrastruktur unvereinbar ist.  

### Einschränkungen bei ClusterRoles  

In unserem OpenShift-Angebot wird das Management von Zugriffsrechten auf Clusterebene streng geregelt, um **Sicherheit und Compliance** mit SecNumCloud zu gewährleisten.
Cela implique des **restrictions sur les ClusterRoles**, limitant les privilèges globaux. Bien que ces restrictions puissent imposer des ajustements techniques, elles sont essentielles pour renforcer la résilience et la stabilité de l’environnement.  

Notre équipe de support est disponible pour vous accompagner dans l’adaptation de vos configurations et vous conseiller sur les alternatives possibles.  

### Restrictions sur les Security Context Constraints (SCC)  

Les **Security Context Constraints (SCC)** sont imposées et ne peuvent être modifiées par les utilisateurs. En conséquence, les paramètres d’exécution des conteneurs (privilèges d’accès, capacités Linux, etc.) sont prédéfinis et non personnalisables.  

Cette contrainte vise à empêcher tout accès non autorisé aux ressources critiques du cluster. Les applications nécessitant des contextes de sécurité spécifiques devront être adaptées pour respecter les SCC en vigueur.  

D’un point de vue opérationnel, cela peut nécessiter des ajustements architecturaux et des adaptations dans les processus de déploiement, en particulier pour les **Helm Charts** et les **opérateurs** ne respectant pas ces contraintes.  

### Begrenzungen bei den Custom Resource Definitions (CRDs)  

Um die **SecNumCloud-Konformität** zu gewährleisten, ist die Verwendung von **Custom Resource Definitions (CRDs)** und benutzerdefinierten Controllern eingeschränkt.  

Diese Maßnahme, die mit den Rechten des Clusters verbunden ist, verhindert die Bereitstellung nicht autorisierter Ressourcen, die die Stabilität und Sicherheit der Infrastruktur beeinträchtigen könnten. Sie gilt auch für **Operatoren** und **Helm Charts**, mit Einschränkungen bei den **RBAC**-Rechten.  

Nicht zertifizierte **CRDs** können abgelehnt werden, um die Integrität des Clusters zu gewährleisten. Nur **CRDs aus zertifizierten Operatoren oder Helm Charts** sind nach Validierung durch unsere Dienste zugelassen.  

Unser Support-Team kann Sie bei diesem Prozess unterstützen und Ihnen bewährte Verfahren empfehlen.  

### Um einen sicheren Zugang zu den **OpenShift-APIs**, den Verwaltungsoberflächen und den Zugriffstools der **Cloud Temple**-Konsole zu gewährleisten, müssen die **OpenShift SecNumCloud-Runners** mit **festen IP-Adressen** konfiguriert werden. 

Diese Anforderung stellt sicher, dass **dynamische IP-Adressen nicht unterstützt werden**, was eine entsprechende Konfiguration erfordert, um die Konnektivität und Sicherheit der Komponenten zu gewährleisten.  


## Wissenswertes

• Sollten die Hardwarekomponenten auf der Plattform veralten und eine Migration auf neue Rechenressourcen erforderlich sein, übernimmt Cloud Temple alle Hardware-Migrationen ohne zusätzliche Kosten und ohne Betriebsunterbrechung.

• Um OpenShift zu testen, bietet Cloud Temple keine dedizierte Umgebung an, aber Sie können die [Testplattformen von RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) verwenden.

• Für die Automatisierung Ihrer Infrastruktur sollten Sie den offiziellen Terraform-Provider von OpenShift verwenden.