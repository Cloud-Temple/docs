---
title: Concepts
---

## Präsentation von RedHat Openshift

**Red Hat OpenShift** ist eine Unternehmens-Containerplattform, die die Bereitstellung, Verwaltung und Skalierung containerisierter Anwendungen automatisiert. Es ist eine Plattform, die auf Docker, einem Containerisierungs-System, das es ermöglicht, eine Anwendung und ihre Abhängigkeiten in einem virtuellen Container zu verpacken, und Kubernetes, einem Container-Orchestrierungssystem, das die Ausführung und Koordination von Containern in einem Server-Cluster verwaltet, aufgebaut ist.

### Hauptfunktionen von Red Hat OpenShift:

- **Automatisierte Bereitstellung und Verwaltung:** OpenShift vereinfacht den Anwendungsbereitstellungsprozess, indem es Routinen wie Skalierung, Gesundheit und Lebensdauer von Containern automatisiert. Es bietet eine integrierte Umgebung für die Entwicklung, das Testen und den Produktiveinsatz von Anwendungen.

- **Unterstützung mehrerer Sprachen und Dienste:** Die Plattform unterstützt eine Vielzahl von Programmiersprachen (wie Java, Node.js, Python, Ruby und PHP) und bietet integrierte Dienste wie Messaging, Caching und Datenbanken, sodass Entwickler sich auf den Code anstatt auf die Infrastruktur konzentrieren können.

- **Kontinuierliche Integration (CI) und kontinuierliche Bereitstellung (CD):** OpenShift integriert CI/CD-Tools, die die Softwareentwicklungspipeline vom ersten Commit bis zur Produktion automatisieren und so DevOps-Praktiken fördern.

- **Operations Management:** OpenShift bietet Tools zur Überwachung, Leistungsverwaltung und Diagnose von Anwendungen und Infrastrukturen, die Betreibern helfen, die Gesundheit und Leistung der Systeme aufrechtzuerhalten.

- **Verstärkte Sicherheit:** Die Plattform ist mit integrierter Sicherheit konzipiert, bietet rollenbasierte Zugangskontrollen, Aufgaben Trennung und automatisiertes Secret-Management zum Schutz von Anwendungen und Daten.

### Vorteile von Red Hat OpenShift:

- **Flexibilität:** Entwickler können mit den Tools, Sprachen und Frameworks ihrer Wahl arbeiten.
- **Betriebliche Effizienz:** OpenShift optimiert die Ressourcennutzung, verkürzt die Markteinführungszeit und verbessert die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform verwaltet automatisch die Skalierung der Anwendungen, um auf Schwankungen in der Nachfrage zu reagieren.
- **Sicherheit und Konformität:** Mit seinen integrierten Sicherheitsrichtlinien hilft OpenShift, Sicherheits- und Konformitätsstandards einzuhalten.

Red Hat OpenShift ist eine umfassende Lösung für die Entwicklung, Bereitstellung und Verwaltung containerisierter Anwendungen und bietet eine robuste, sichere und flexible Plattform für Unternehmen, die moderne Softwareentwicklungsmethoden übernehmen.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) ist eine integrierte Datenmanagement- und Speicherlösung, die nahtlos mit dem OpenShift-Ökosystem funktioniert. Sie bietet eine persistent Speicherinfrastruktur, die sicher und hochverfügbar für containerisierte Anwendungen ist und so moderne, container- und microservices-orientierte Entwicklungsumgebungen unterstützt. ODF ist darauf ausgelegt, das Datenmanagement in hybriden und Multi-Cloud-Umgebungen zu vereinfachen und zu automatisieren und bietet eine solide Grundlage für geschäftskritische Unternehmensanwendungen.

#### Hauptfunktionen der OpenShift Data Foundation:

- **Persistenter Speicher:** ODF bietet eine Schicht für persistenten Speicher für Container, die für Unternehmensanwendungen wie Datenbanken, Content-Management-Systeme und Anwendungen, die einen persistenten Zustand erfordern, unerlässlich ist.

- **Multicloud und Hybrid:** ODF ist für hybride und Multi-Cloud-Umgebungen entwickelt und ermöglicht ein konsistentes Datenmanagement über verschiedene Cloud-Umgebungen hinweg, was die Mobilität von Anwendungen und Daten erleichtert.

- **Automatisierung und Orchestrierung:** Die tiefgreifende Integration mit Kubernetes und OpenShift ermöglicht es ODF, die Bereitstellung, Skalierung und das Lebenszyklusmanagement des Speichers basierend auf den Anforderungen der Anwendungen zu automatisieren.

- **Hohe Verfügbarkeit und Resilienz:** ODF verwendet Datenreplikation und Snapshotting, um die hohe Verfügbarkeit und Haltbarkeit der Daten zu gewährleisten, die für die Geschäftskontinuität unerlässlich ist.

- **Datensicherheit:** Die Lösung integriert erweiterte Sicherheitsfunktionen wie Verschlüsselung der Daten im Ruhezustand und während der Übertragung sowie anpassbare Sicherheits- und Compliance-Richtlinien.

#### Vorteile der OpenShift Data Foundation:

- **Betriebliche Flexibilität:** ODF ermöglicht es Unternehmen, ihre Daten in verteilten Umgebungen effizient zu verwalten und bietet die notwendige Flexibilität, um den sich ändernden Anforderungen moderner Anwendungen gerecht zu werden.

- **Vereinfachung des Datenmanagements:** Durch die Automatisierung vieler Datenverwaltungsaufgaben reduziert ODF die Komplexität und entlastet IT-Ressourcen, sodass diese sich auf höherwertige Initiativen konzentrieren können.

- **Kostenoptimierung:** Die Fähigkeit von ODF, sich dynamisch an Speicheranforderungen anzupassen, hilft, Kosten zu optimieren, indem Überprovisionierung vermieden und Ressourcen effizienter genutzt werden.

- **Leistungsverbesserung:** ODF ist darauf ausgelegt, hohe Leistungen für Unternehmensanwendungen zu bieten, mit Optimierungsfähigkeiten für verschiedene Arbeitslasttypen.

Red Hat OpenShift Data Foundation ist eine fortschrittliche Datenspeicherlösung, die die Effizienz, Resilienz und Sicherheit von Unternehmensanwendungen, die auf OpenShift bereitgestellt werden, stärkt. Durch die Bereitstellung von persistentem, automatisiertem und sicherem Speicher spielt ODF eine entscheidende Rolle dabei, Unternehmen zu befähigen, das volle Potenzial von Container- und Hybrid-Cloud-Technologien auszuschöpfen.

## Allgemeine Architektur der Plattform

### Allgemeines

Die Red Hat OpenShift-Plattform von Cloud Temple ist als regionales Angebot konzipiert, das nativ auf **drei separate Verfügbarkeitszonen** innerhalb einer einzigen Cloud-Temple-Region bereitgestellt wird. Diese dreizonenartige Architektur erhöht die Verfügbarkeit und Resilienz der Daten erheblich.

Die Plattform besteht aus einem Steuerungsebenen-Plan und Arbeitsknoten, die alle von der Cloud Temple-Infrastruktur verwaltet werden. Die Steuerungsebene ist gleichmäßig auf die drei Verfügbarkeitszonen verteilt und gewährleistet eine zentrale und sichere Verwaltung. Die Arbeitsknoten werden durch Rechenklingen repräsentiert, die so verteilt sind, dass jede Verfügbarkeitszone eine enthält.

Für die Arbeitsknoten sind verschiedene Arten von Rechenklingen verfügbar, die eine flexible Anpassung an unterschiedliche betriebliche Anforderungen ermöglichen:

| Einheiten von Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Einheit                 | SKU                                   |
| :------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Plan der Steuerung - 3 Knoten - Region FR1                                                                     | 1 dedizierter Plan      | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 Cores / 20 Threads - 64 GB RAM - 512 GB FLASH 1500 IOPS)                        | 3 dedizierte Arbeiter   | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL - 3 x ( 20 Cores / 40 Threads - 128 GB RAM - 512 GB FLASH 1500 IOPS)                      | 3 dedizierte Arbeiter   | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x ( 32 Cores / 64 Threads - 384 GB RAM - 512 GB FLASH 1500 IOPS)                   | 3 dedizierte Arbeiter   | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 Cores / 96 Threads - 768 GB RAM - 512 GB FLASH 1500 IOPS)                   | 3 dedizierte Arbeiter   | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 Cores / 112 Threads - 1.5 TB RAM - 512 GB FLASH 1500 IOPS)                      | 3 dedizierte Arbeiter   | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 Cores / 64 Threads - 512 GB RAM - 512 GB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB)   | 3 dedizierte Arbeiter + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Die Red Hat OpenShift-Produkte von Cloud Temple sind entweder nach Bedarf zu bezahlen oder mit einer 12-monatigen Reservierung erhältlich.

**Hinweise**:

1. *Die Aufrechterhaltung der Betriebs- und Sicherheitsbedingungen des Steuerungsebenen-Plans liegt in der Verantwortung von Cloud Temple im Rahmen eines PaaS-Dienstes.*

2. *Am 15. Juni 2024 ist die Version 1 der Plattform aufgrund von Software bewusst auf 30 Arbeitsknoten (unabhängig vom Typ) und einen gesamten persistenten Speicher von 50 TB begrenzt. Sollten diese Einschränkungen für Ihr Projekt ein Hindernis darstellen, wenden Sie sich bitte an den Support.*

3. *Jeder Arbeitsknoten wird mit 512GB Flash-Block-Speicher geliefert, was 1.5 TB pro Einheitsleistung (1 Arbeiter pro AZ) ergibt.*
4. *Ein Worker-Knoten kann standardmäßig bis zu 250 Pods verwalten. Diese Zahl ist über den Parameter podsPerCore anpassbar - zum Beispiel, mit 10 Pods pro Kern auf einem 4-Kern-Knoten, haben Sie maximal 40 Pods. Für technische Details konsultieren Sie die [Dokumentation zur Verwaltung von Pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) und den [Leitfaden zu OpenShift-Grenzwerten](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *Das PaaS-Angebot OpenShift beinhaltet nativ den Zugriff auf die 3 Verfügbarkeitszonen, ohne dass ein zusätzlicher Abonnement erforderlich ist.*

6. *Es ist möglich, nachträglich Blockspeicher zum OpenShift-Cluster hinzuzufügen.*

7. *Die Knoten werden gleichmäßig zwischen den 3 Verfügbarkeitszonen verteilt (1 Knoten pro Zone). Es ist nicht möglich, einen Cluster durch die Zuweisung einer größeren Anzahl von Knoten zu einer einzigen Zone aus dem Gleichgewicht zu bringen.*

### RedHat-Angebot im Rahmen der OpenShift Cloud Temple Plattform

Die Plattform ist eine Redhat OpenShift 4 basierend auf [RedHat OpenShift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) und enthält [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

![](images/oshift_offert.jpg)

## Backup-Strategie für Ihre PaaS OpenShift Plattform

Das Backup und die Wiederherstellung der PaaS OpenShift Plattform sind die Verantwortung von Cloud Temple für den **ETCD**-Teil im Rahmen des Plattformmanagements. **Das Backup und die Wiederherstellung für den Bereitstellungs- und Anwendungsdatenteil obliegen dem Auftraggeber.**

Cloud Temple bietet seinen Kunden die Lösung **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), eine Plattform, die auf das Datenmanagement in Kubernetes-Umgebungen spezialisiert ist. Entwickelt, um den Anforderungen an den Datenschutz gerecht zu werden, bietet sie robuste Funktionen für Backup, Wiederherstellung, Migration und Desaster Recovery. Kasten K10 integriert sich nativ in Kubernetes-Umgebungen, sowohl in Cloud-Clustern als auch vor Ort, und kann sich an verschiedene Anwendungsfälle anpassen, wie z.B. die Migration von Clustern zwischen verschiedenen Kubernetes-Distributionen wie Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine und Red Hat OpenShift.

Einer der Hauptanwendungsfälle von Kasten K10 ist **die Migration von Clustern zwischen verschiedenen Kubernetes-Plattformen**. Egal ob für eine Umstellung auf eine robustere Infrastruktur oder zur Konsolidierung bestehender Umgebungen, bietet Kasten K10 einfache und effektive Werkzeuge zur Verwaltung dieser Migrationen:

 - **Backup und Datenschutz**: Bei der Migration eines Kubernetes Vanilla oder VMware Tanzu Clusters zu Red Hat Kubernetes Engine oder OpenShift besteht der erste Schritt darin, die Daten und Zustände der Anwendungen zu sichern. Kasten K10 integriert sich mühelos mit den Kubernetes-APIs, um Anwendungen, ihre Abhängigkeiten sowie die damit verbundenen Datenträger zu identifizieren. Dies schließt die Sicherung von Persistent Volumes (PV), Datenbanken, Konfigurationen und Geheimnissen ein. Kasten K10 unterstützt eine breite Palette von Speicheranbietern (S3, Google Cloud Storage, Azure Blob Storage, etc.), was es ermöglicht, Snapshots der zu migrierenden Anwendungen zu erstellen. Diese Backups werden dann sicher mit Verschlüsselungsoptionen und granularer Zugriffskontrolle gespeichert, um die Datensicherheit während des gesamten Prozesses zu gewährleisten.

 - **Portabilität und Migration**: Die Migration zwischen Kubernetes-Distributionen wie Vanilla oder Tanzu und Red Hat-Lösungen wie OpenShift oder Kubernetes Engine kann aufgrund der architektonischen Unterschiede und spezifischen Konfigurationen jeder Plattform komplex sein. Kasten K10 vereinfacht diesen Prozess, indem es eine Abstraktionsschicht für die Portabilität von Anwendungen bereitstellt. Bei der Migration repliziert Kasten K10 die Konfigurationen und Daten von einem Quell- zu einem Ziel-Cluster, wobei die Besonderheiten jeder Umgebung berücksichtigt werden. Zum Beispiel können Kubernetes-Objekte wie ConfigMaps, Secrets, PVs sowie CRDs (Custom Resource Definitions) migriert werden, unter Berücksichtigung der spezifischen Anforderungen jeder Kubernetes-Distribution, sei es ein Red Hat OpenShift- oder Kubernetes Engine-Cluster. Der Prozess ist automatisiert, wodurch das Risiko menschlicher Fehler erheblich reduziert wird. Darüber hinaus ermöglicht Kasten K10 eine schrittweise oder vollständige Migration, je nach Bedarf, und bietet Echtzeitsichtbarkeit des Migrationszustands, was die Verwaltung und Überwachung des Übergangs erleichtert.

 - **Multi-Cloud- und Multi-Distribution-Kompatibilität**: Kasten K10 ist für den Betrieb in hybriden und Multi-Cloud-Umgebungen ausgelegt und somit ein ideales Werkzeug für Organisationen, die Anwendungen von Tanzu- oder Vanilla-Clustern zu Red Hat-Cloud-Umgebungen (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) oder zu Vor-Ort-Infrastrukturen migrieren möchten. Dies garantiert maximale Flexibilität und ermöglicht den DevOps-Teams, die beste Umgebung entsprechend den geschäftlichen Anforderungen oder Infrastrukturmodernisierungsstrategien zu wählen.

 - **Vereinfachtes Management und Automatisierung**: Kasten K10 bietet eine intuitive Benutzeroberfläche, die Administratoren die einfache Verwaltung von Migrations- und Backup-Operationen ermöglicht, ohne umfassende Fachkenntnisse jeder Kubernetes-Plattform zu benötigen. Die Lösung ist zudem mit Automatisierungsfunktionen ausgestattet, die es ermöglichen, wiederkehrende Migrations- und Backup-Politiken zu definieren und sich in CI/CD-Pipelines für kontinuierliche Operationen zu integrieren. Benutzer können Migrationen oder Wiederherstellungen in Wartungsfenstern planen, Validierungstests nach der Migration durchführen und die Failover-Prozesse im Falle von Problemen im Quell-Cluster automatisieren.

 - **Sicherheit und Compliance**: Bei Migrationen zu kritischen Umgebungen wie Red Hat OpenShift oder Kubernetes Engine sind Datensicherheit und die Einhaltung von Normen (ISO, SOC, GDPR, etc.) wesentliche Aspekte. Kasten K10 sorgt für die Verschlüsselung der Daten während der Übertragung und im Ruhezustand und bietet Optionen zum Audit und zur Rückverfolgbarkeit der Backup- und Wiederherstellungsoperationen. Diese Fähigkeiten sind entscheidend, um die Sicherheit der migrierten Daten zu gewährleisten, sei es in Produktions- oder Testumgebungen. Kasten K10 ist eine unverzichtbare Lösung für Unternehmen, die Kubernetes Vanilla oder VMware Tanzu-Cluster sicher und effizient zu Red Hat Kubernetes Engine oder OpenShift migrieren möchten.

 Die Abrechnung erfolgt pro Worker-Knoten.

| Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution Einheitenwerte | Einheit   | SKU                          |
| :----------------------------------------------------------------------------------- | :-------- | :--------------------------- |
| VEEAM - KASTEN K10 - Kubernetes Data Protection and Application Mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1   |

**Hinweis**: *Achten Sie darauf, dass das für die ordnungsgemäße Durchführung Ihres Backups erforderliche Plattenvolumen in der Zielumgebung Ihres Backups vorgesehen ist, normalerweise in S3-Speicher. Es ist nicht in den Openshift- oder Kasten-Einheiten enthalten.*

**(1)** _OADP ist nicht nativ im Cluster installiert. Nur Kasten ist für die Verwaltung von Migrationen, Backups und Wiederherstellungen aktiviert_

## Rechte und Berechtigungen

Hier sind die wichtigsten umgesetzten Berechtigungen:

|       Gruppe       |         API            |                                                                                       Ressourcen-Berechtigungen                                                                                       |
|--------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen |
|        Core        |          ("")          |                                                                                           Secrets-Erstellen                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Abrufen, Auflisten, Beobachten, Erstellen, Aktualisieren, Patchen, Löschen                                                    |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Abrufen, Auflisten                                          |
|config.kio.kasten.io|         Alle           |                                                                                    Ressourcen (*) Abrufen, Auflisten                                                                                   |
|       Batch        |       CronJobs,        |                                                                        Jobs Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                              |
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
|       Custom       |       Resources        |                                       Verschiedene benutzerdefinierte Ressourcen in Zusammenhang mit Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Aktuelle Einschränkungen des Redhat Openshift-Angebots in der SecNumCloud-Umgebung

Hier sind einige Einschränkungen, die durch die SecNumCloud-Zertifizierung bedingt sind:

### Dediziertes Steuerungsebenen-Plan

Arbeitslasten können aufgrund der inhärenten Beschränkungen im Ressourcenmanagement und der Sicherheit der OpenShift-Plattform auf SecNumCloud nicht auf der Steuerungsebene ausgeführt werden.

### Verbot des Einsatzes von Bildern mit erhöhten Rechten (rootless)

Um den Sicherheitsanforderungen des SecNumCloud-Referenzmodells zu entsprechen, ist die Verwendung von privilegienlosen Containern (rootless) obligatorisch.

Dieser Ansatz erhöht die allgemeine Sicherheit, indem er jeglichen privilegierten Zugriff auf Container verhindert. Anwendungen, die privilegierte Container benötigen, müssen geändert werden, da deren Bereitstellung nicht erlaubt wird.

Diese Einschränkung gilt auch für Helm Charts und Operatoren, die nicht-rootless Bilder verwenden, wodurch deren Bereitstellung innerhalb der Infrastruktur unmöglich wird.

### Einschränkungen bei den Rechten der ClusterRole

Im Rahmen unseres OpenShift-Angebots implementieren wir ein striktes Management der Zugriffsrechte auf Clusterebene, angepasst an die SecNumCloud-Anforderungen.

Dieser Ansatz bedeutet eine Begrenzung der ClusterRoles für unsere Kunden und schränkt somit einige Aspekte des globalen Cluster-Managements ein. Auch wenn diese Maßnahme zunächst einschränkend erscheinen mag, zielt sie darauf ab, die Sicherheit und Stabilität der Infrastruktur zu stärken.

Wir sind uns bewusst, dass dies technische Herausforderungen mit sich bringen kann, speziell bei der Konfiguration fortgeschrittener Parameter, und möglicherweise Anpassungen Ihrer Anwendungen oder den Erwerb zusätzlicher Tools erfordert.

Unser Support-Team steht Ihnen zur Verfügung, um Sie zu diesem Thema zu beraten und zu unterstützen.

### Der SCC-Kontext kann in der SecNumCloud-Umgebung nicht geändert werden

Die Security Context Constraints (SCC) unterliegen strengen Einschränkungen und können von den Nutzern nicht geändert werden. Diese Einschränkung hat erhebliche Auswirkungen auf die Bereitstellung und Ausführung von Containern.

Praktisch bedeutet dies, dass die Ausführungsparameter der Container, wie Systemzugriffsrechte oder Linux-Fähigkeiten, vordefiniert und nicht anpassbar sind.

Diese Maßnahme, motiviert durch Sicherheitsanforderungen, zielt darauf ab, jeglichen unbefugten Zugriff auf die kritischen Ressourcen des Clusters zu verhindern. Folglich können Anwendungen, die spezifische Sicherheitskontexte erfordern, insbesondere solche mit privilegierten Zugriffen, auf Hindernisse bei der Bereitstellung stoßen.

Technisch kann dies eine Überarbeitung der Anwendungsarchitektur und eine Anpassung der Bereitstellungsprozesse erfordern, um die vordefinierten SCCs einzuhalten. Operativ kann diese Einschränkung die Flexibilität der Bereitstellungen verringern und die Verwaltung bestimmter Anwendungen in der OpenShift-Umgebung komplizierter machen, insbesondere solche, die Helm Charts oder Betreiber verwenden, die nicht den geltenden SCCs entsprechen.

### Einschränkungen bei Custom Resource Definitions (CRDs)

Um der SecNumCloud-Zertifizierung zu entsprechen, gibt es eine wichtige Einschränkung bezüglich der Nutzung von Custom Resource Definitions (CRDs) und benutzerdefinierten Controllern. Diese Maßnahme, die sich auf die Rechte im Cluster bezieht, zielt darauf ab, die Bereitstellung potenziell instabiler oder nicht autorisierter benutzerdefinierter Ressourcen zu verhindern.

Diese Einschränkung gilt auch für Operatoren und Helm Charts und hat direkte Auswirkungen auf die RBAC-Rechte, da CRDs die Kubernetes-API erweitern. Daher müssen Operatoren und Helm Charts eine Zertifizierungskette durch unsere Dienste durchlaufen, um deren Konformität und Sicherheit zu gewährleisten.
Les benutzerdefinierten CRDs, insbesondere solche, die spezifischen geschäftlichen Anforderungen entsprechen, können in der Infrastruktur aufgrund der Risiken für die Stabilität und Sicherheit der Plattform abgelehnt werden. Diese Richtlinie, die zum Schutz der Integrität und Zuverlässigkeit des Clusters entwickelt wurde, erlaubt nur CRDs, die von offiziell zertifizierten Operatoren oder Helm Charts stammen.

Unser Support-Team steht Ihnen zur Verfügung, um Sie zu leiten und Ihnen Ratschläge zu guten Praktiken in diesem Rahmen zu geben.

### Keine Unterstützung für dynamische IPs für die Runner

Die OpenShift SecNumCloud-Plattform verlangt, dass die Runner mit festen IP-Adressen konfiguriert werden. Diese Anforderung ist motiviert durch die Notwendigkeit, die IPs zu autorisieren, die unsere Cloud-Temple-Konsole verwalten, die für das Zugriffskontrolltool für die API erforderlich ist. Die autorisierten IP-Adressen werden auch für den Zugriff auf die OpenShift-API sowie auf die Administrationsschnittstellen von OpenShift und Shiva verwendet.

Folglich wird die Verwendung dynamischer IP-Adressen für diese Komponenten nicht unterstützt, sodass die Konfiguration fester IPs erforderlich ist, um die Sicherheit und den Zugriff auf die API zu gewährleisten.

## Lastverteiler

Die SecNumCloud Openshift-Umgebung bietet Load Balancing-Optionen auf verschiedenen Ebenen, um eine sichere und effiziente Verkehrsverwaltung zu gewährleisten. Die Load Balancer-API ist über die Ports 6443 und 443 zugänglich, wobei die Sicherheit durch eine Whitelist sichergestellt wird, die von der Cloud Temple-Konsole verwaltet wird. Diese API verwendet eine öffentliche IP-Adresse, die mit unserem Backbone verbunden ist, aber standardmäßig nicht zugänglich ist, was die Sicherheit der Zugriffe verstärkt.

Für den privaten Load Balancer verwendet die Umgebung Ingress (nginx) als Standardlösung, was eine effiziente Verwaltung des internen Verkehrs ermöglicht. Zusätzlich ist eine TCP-Unterstützung über die IaaS-Infrastruktur von Cloud Temple verfügbar, was zusätzliche Flexibilität für Anwendungen bietet, die Load Balancing auf dieser Ebene erfordern.

Was den öffentlichen Load Balancer betrifft, wird die Unterstützung auf Ebene 4 über Ingress sichergestellt, obwohl derzeit einige Einschränkungen mit dem Befehl "expose" bestehen. Das bedeutet, dass das System in der Lage ist, TCP- und UDP-Verbindungen zuverlässig zu verwalten, während es sich weiterentwickelt, um eine größere Kompatibilität und Flexibilität zu bieten.

**Zu beachten**: Der integrierte Load Balancer dient nicht als WAF. Ein WAF as a Service-Angebot ist für das zweite Halbjahr 2025 geplant.

## Wissenswertes

• Wenn die Hardwarekomponenten der Plattform veraltet sind und eine Migration zu neuen Rechenressourcen erforderlich ist, übernimmt Cloud Temple alle Hardware-Migrationen ohne zusätzliche Kosten und ohne Unterbrechung des Dienstes.

• Um OpenShift zu testen, bietet Cloud Temple keine dedizierte Umgebung an, aber Sie können [die RedHat-Testplattformen](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) nutzen.

• Für die Automatisierung Ihrer Infrastruktur verwenden Sie bevorzugt den offiziellen Terraform-Provider von OpenShift statt den von Cloud Temple.