---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'


## Präsentation von RedHat Openshift

**Red Hat OpenShift** ist eine Unternehmenscontainerplattform, die den Einsatz, die Verwaltung und die Skalierung containerisierter Anwendungen automatisiert. Sie ist um Docker, ein Containerisierungssystem, das es ermöglicht, eine Anwendung und ihre Abhängigkeiten in einem virtuellen Container zu verpacken, und Kubernetes, ein Container-Orchestrierungssystem, das die Ausführung und Koordination der Container auf einem Server-Cluster verwaltet, aufgebaut.

### Hauptfunktionen von Red Hat OpenShift:

- **Automatisiertes Deployment und Management:** OpenShift vereinfacht den Anwendungsbereitstellungsprozess, indem es Verwaltungsroutinen wie Skalierung, Gesundheitsüberwachung und Lebenszyklus der Container automatisiert. Es bietet eine integrierte Umgebung für die Entwicklung, das Testen und die Produktion von Anwendungen.

- **Unterstützung mehrerer Sprachen und Dienste:** Die Plattform unterstützt eine breite Palette von Programmiersprachen (wie Java, Node.js, Python, Ruby und PHP) und bietet integrierte Dienste wie Messaging, Caching und Datenbanken, wodurch Entwickler sich auf den Code und nicht auf die Infrastruktur konzentrieren können.

- **Continuous Integration (CI) und Continuous Deployment (CD):** OpenShift integriert CI/CD-Tools, die die Software-Entwicklungspipeline von der ersten Code-Einreichung bis zum Produktions-Deployment automatisieren, wodurch DevOps-Praktiken gefördert werden.

- **Operations-Management:** OpenShift bietet Tools zur Überwachung, Leistungsverwaltung und Diagnose von Anwendungen und Infrastrukturen, die Betreiber dabei unterstützen, die Gesundheit und Leistung der Systeme zu erhalten.

- **Erhöhte Sicherheit:** Die Plattform ist mit integrierter Sicherheit konzipiert und bietet rollenbasierte Zugriffskontrollen, Trennung der Aufgaben und automatisiertes Geheimnis-Management, um Anwendungen und Daten zu schützen.

### Vorteile von Red Hat OpenShift:

- **Flexibilität:** Entwickler können mit den Tools, Sprachen und Frameworks ihrer Wahl arbeiten.
- **Betriebliche Effizienz:** OpenShift optimiert die Ressourcennutzung, verkürzt die Markteinführungszeiten und erhöht die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform verwaltet automatisch die Skalierung der Anwendungen, um auf Veränderungen in der Nachfrage zu reagieren.
- **Sicherheit und Compliance:** Mit ihren integrierten Sicherheitsrichtlinien hilft OpenShift, Sicherheits- und Compliance-Standards aufrechtzuerhalten.

Red Hat OpenShift ist eine umfassende Lösung für die Entwicklung, Bereitstellung und Verwaltung containerisierter Anwendungen und bietet eine robuste, sichere und flexible Plattform für Unternehmen, die moderne Ansätze in der Softwareentwicklung verfolgen.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) ist eine integrierte Speicher- und Datenmanagementlösung, die nahtlos mit dem OpenShift-Ökosystem arbeitet. Sie bietet eine persistente, sichere und hochverfügbare Dateninfrastruktur für containerisierte Anwendungen und unterstützt so moderne, container- und mikroservicezentrierte Entwicklungsumgebungen. ODF ist entwickelt, um die Datenverwaltung in hybriden und Multi-Cloud-Umgebungen zu vereinfachen und zu automatisieren und bietet eine solide Grundlage für unternehmenskritische Anwendungen.

#### Schlüsselmerkmale der OpenShift Data Foundation:

- **Persistenter Speicher:** ODF bietet eine persistente Speicherschicht für Container, die für Unternehmensanwendungen wie Datenbanken, Content-Management-Systeme und für Anwendungen, die einen persistenten Zustand benötigen, unerlässlich ist.

- **Multicloud und Hybrid:** Entwickelt für hybride und Multi-Cloud-Umgebungen, ermöglicht ODF eine konsistente Datenverwaltungserfahrung über verschiedene Cloud-Umgebungen hinweg und erleichtert die Mobilität von Anwendungen und Daten.

- **Automatisierung und Orchestrierung:** Die tiefe Integration mit Kubernetes und OpenShift ermöglicht es ODF, die Bereitstellung, Skalierung und den Lebenszyklus-Management des Speichers entsprechend den Anforderungen der Anwendungen zu automatisieren.

- **Hohe Verfügbarkeit und Ausfallsicherheit:** ODF verwendet Datenreplikation und Snapshotting, um hohe Verfügbarkeit und Datenhaltbarkeit sicherzustellen, die für die Kontinuität von Unternehmensoperationen unerlässlich sind.

- **Datensicherheit:** Die Lösung integriert fortschrittliche Sicherheitsfunktionen wie die Verschlüsselung von Daten im Ruhezustand und in der Übertragung sowie anpassbare Sicherheits- und Compliance-Richtlinien.

#### Vorteile der OpenShift Data Foundation:

- **Betriebliche Flexibilität:** ODF ermöglicht es Unternehmen, ihre Daten effektiv in verteilten Umgebungen zu verwalten und bietet die notwendige Flexibilität, um den sich ändernden Anforderungen moderner Anwendungen gerecht zu werden.

- **Vereinfachung der Datenverwaltung:** Durch die Automatisierung vieler Datenverwaltungsaufgaben reduziert ODF die Komplexität und entlastet IT-Ressourcen, sodass diese sich auf höherwertige Initiativen konzentrieren können.

- **Kostenoptimierung:** Die Fähigkeit von ODF, sich dynamisch an Speicheranforderungen anzupassen, hilft bei der Kostenoptimierung, indem Überprovisionierung vermieden und Ressourcen effizienter genutzt werden.

- **Leistungsverbesserung:** ODF ist so konzipiert, dass es hohe Leistungen für Unternehmensanwendungen bietet, mit Optimierungsmöglichkeiten für verschiedene Arten von Arbeitslasten.

Die Red Hat OpenShift Data Foundation ist eine fortschrittliche Datenspeicherlösung, die die Effizienz, Ausfallsicherheit und Sicherheit von Unternehmensanwendungen auf OpenShift stärkt. Durch die Bereitstellung von persistentem, automatisiertem und sicherem Speicher spielt ODF eine entscheidende Rolle dabei, Unternehmen zu befähigen, das volle Potenzial von Container- und Hybrid-Cloud-Technologien auszuschöpfen.

## Allgemeine Architektur der Plattform

### Allgemeines

Die Red Hat OpenShift-Plattform von Cloud Temple ist als regionales Angebot konzipiert und wird nativ auf [**drei verschiedenen Verfügbarkeitszonen**](../additional_content/concepts_az.md) innerhalb der gleichen [Region](../additional_content/concepts_regional.md) von Cloud Temple bereitgestellt. Diese drei-zonen Architektur erhöht die Verfügbarkeit und Resilienz der Daten erheblich.

Die Plattform besteht aus einer Steuerungsebene und Arbeitsknoten, die alle von der Cloud-Temple-Infrastruktur verwaltet werden. Die Steuerungsebene ist gleichmäßig auf die drei Verfügbarkeitszonen verteilt und gewährleistet eine zentrale und sichere Verwaltung. Die Arbeitsknoten hingegen sind durch Rechenblades vertreten, die so angeordnet sind, dass jede Verfügbarkeitszone ein solches enthält.

Für die Arbeitsknoten stehen verschiedene Typen von Rechenblades zur Verfügung, die eine flexible Anpassung an verschiedene betriebliche Anforderungen ermöglichen:

| Redhat Openshift 4 with Data Foundations - On Demand - 1 month                          | Einheit                   | SKU                                   |
| :--------------------------------------------------------------------------------------| :------------------------| :------------------------------------ |
| OPENSHIFT - Steuerungsebene - 3 Knoten - Region FR1                                    | 1 dedizierter Plan       | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - ARBEITSKNOTEN - TINY - 3 x (10 Kerne / 20 Threads - 64 GB RAM - 512 GB FLASH 1500 IOPS)           | 3 dedizierte Arbeiter   | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - ARBEITSKNOTEN - SMALL - 3 x (20 Kerne / 40 Threads - 128 GB RAM - 512 GB FLASH 1500 IOPS)         | 3 dedizierte Arbeiter   | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - ARBEITSKNOTEN - STANDARD - 3 x (32 Kerne / 64 Threads - 384 GB RAM - 512 GB FLASH 1500 IOPS)      | 3 dedizierte Arbeiter   | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - ARBEITSKNOTEN - ADVANCED - 3 x (48 Kerne / 96 Threads - 768 GB RAM - 512 GB FLASH 1500 IOPS)      | 3 dedizierte Arbeiter   | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - ARBEITSKNOTEN - PERF - 3 x (56 Kerne / 112 Threads - 1,5 TB RAM - 512 GB FLASH 1500 IOPS)         | 3 dedizierte Arbeiter   | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - ARBEITSKNOTEN - GPU - 3 x (32 Kerne / 64 Threads - 512 GB RAM - 512 GB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 dedizierte Arbeiter + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Die Red Hat OpenShift Cloud Temple Produkte sind in Pay-as-you-go oder in 12-Monats-Reservierung erhältlich.

**Hinweise**:

1. *Die Sicherstellung des operativen und sicherheitstechnischen Zustands der Steuerungsebene liegt in der Verantwortung von Cloud Temple im Rahmen eines PaaS-Dienstes.*

2. *Ab dem 15. Juni 2024 ist die Version 1 der Plattform softwaremäßig absichtlich auf eine Steuerungsebene mit 30 Arbeitsknoten (unabhängig vom Typ der Arbeitsknoten) und eine globale persistente Speicherung von 50 TB begrenzt. Wenn diese Limits für Ihr Projekt ein Hindernis darstellen, wenden Sie sich bitte an den Support.*

3. *Jeder Arbeitsknoten wird mit 512 GB Flash-Speicher geliefert, was insgesamt 1,5 TB für jede Ausführungseinheit (1 Arbeitsknoten pro AZ) ergibt.*


4. *Ein Worker-Knoten kann standardmäßig bis zu 250 Pods verwalten. Diese Zahl ist über den Parameter podsPerCore anpassbar - beispielsweise sind bei 10 Pods pro Kern auf einem 4-Kern-Knoten maximal 40 Pods möglich. Für weitere technische Details siehe die [Dokumentation zur Verwaltung von Pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) und den [OpenShift-Limits-Leitfaden](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *Das PaaS-Angebot von Openshift beinhaltet von Haus aus den Zugang zu den 3 Verfügbarkeitszonen, ohne dass ein zusätzlicher Abschluss erforderlich ist.*

6. *Es ist möglich, dem Openshift-Cluster nachträglich Blockspeicher hinzuzufügen.*

7. *Die Knoten werden gleichmäßig auf die 3 Verfügbarkeitszonen verteilt (1 Knoten pro Zone). Es ist nicht möglich, einen Cluster durch Zuweisung einer größeren Anzahl von Knoten zu einer einzigen Zone aus dem Gleichgewicht zu bringen.*

### RedHat-Angebot im Rahmen der Openshift Cloud Temple Plattform bereitgestellt

Die Plattform basiert auf Redhat Openshift 4 mit [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) und beinhaltet [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Backup-Strategie für Ihre PaaS Openshift Plattform

Das Backup und die Wiederherstellung der PaaS Openshift Plattform ist die Verantwortung von Cloud Temple für den Teil **ETCD** im Rahmen des Plattform-Managements. **Die Sicherung und Wiederherstellung des Bereitstellungs- und Anwendungsdaten ist die Verantwortung des Auftraggebers**.

Cloud Temple bietet seinen Kunden die **Veeam Kasten K10**-Lösung an (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), eine Plattform, die auf das Datenmanagement in Kubernetes-Umgebungen spezialisiert ist. Konzipiert zur Erfüllung der Anforderungen an den Datenschutz, bietet sie robuste Funktionen für Backup, Wiederherstellung, Migration und Notfallwiederherstellung. Kasten K10 integriert sich nahtlos in Kubernetes-Umgebungen, unabhängig davon, ob sie auf Cloud- oder On-Premise-Clustern verwaltet werden, und passt sich verschiedenen Anwendungsfällen an, einschließlich der Cluster-Migration zwischen verschiedenen Kubernetes-Distributionen wie Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine und Red Hat OpenShift.

Ein bedeutender Anwendungsfall von Kasten K10 ist **die Migration von Clustern zwischen verschiedenen Kubernetes-Plattformen**. Egal ob für den Übergang zu einer robusteren Infrastruktur oder zur Konsolidierung bestehender Umgebungen, Kasten K10 bietet einfache und effektive Werkzeuge zur Verwaltung dieser Migrationen:

 - **Datensicherung und -schutz** : Bei der Migration eines Kubernetes Vanilla- oder VMware Tanzu-Clusters zur Red Hat Kubernetes Engine oder OpenShift besteht der erste Schritt darin, die Anwendungsdaten und deren Zustand zu sichern. Kasten K10 integriert sich leicht mit den Kubernetes-APIs, um die Anwendungen, deren Abhängigkeiten sowie die zugehörigen Datenvolumen zu identifizieren. Dies beinhaltet die Sicherung von persistenten Volumen (Persistent Volumes - PV), Datenbanken, Konfigurationen und Secrets. Kasten K10 unterstützt eine breite Palette von Speicheranbietern (S3, Google Cloud Storage, Azure Blob Storage usw.), wodurch Snapshots der zu migrierenden Anwendungen erstellt werden können. Diese Sicherungen werden dann sicher mit Verschlüsselungsoptionen und granularem Zugriffskontrollen gespeichert, um die Datensicherheit während des gesamten Prozesses zu gewährleisten.

 - **Portabilität und Migration** : Die Migration zwischen Kubernetes-Distributionen wie Vanilla oder Tanzu und Red Hat-Lösungen wie OpenShift oder Kubernetes Engine kann aufgrund der unterschiedlichen Architekturen und spezifischen Konfigurationen jeder Plattform komplex sein. Kasten K10 vereinfacht diesen Prozess, indem es eine Abstraktionsschicht für die Portabilität von Anwendungen bereitstellt. Während der Migration repliziert K10 die Konfigurationen und Daten eines Quellclusters zu einem Zielcluster, unter Berücksichtigung der Besonderheiten jeder Umgebung. Zum Beispiel können Kubernetes-Objekte wie ConfigMaps, Secrets, PVs sowie CRDs (Custom Resource Definitions) unter Berücksichtigung der Eigenheiten jeder Kubernetes-Distribution migriert werden, sei es ein Red Hat OpenShift oder Kubernetes Engine Cluster. Der Prozess ist automatisiert, was das Risiko manueller Fehler erheblich reduziert. Darüber hinaus ermöglicht Kasten K10 eine schrittweise oder vollständige Migration je nach Bedarf und bietet eine Echtzeit-Transparenz über den Zustand der Migration, was die Verwaltung und Überwachung des Übergangs erleichtert.

 - **Multi-Cloud- und Multi-Distribution-Kompatibilität** : K10 ist so konzipiert, dass es in hybriden und Multi-Cloud-Umgebungen funktioniert, was es zu einem idealen Werkzeug für Organisationen macht, die Anwendungen von Tanzu- oder Vanilla-Clustern in Red Hat-Umgebungen in der Cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) oder auf On-Premise-Infrastrukturen migrieren möchten. Dies gewährleistet maximale Flexibilität und ermöglicht DevOps-Teams die Wahl der besten Umgebung entsprechend den geschäftlichen Anforderungen oder Infrastrukturmodernisierungsstrategien.

 - **Vereinfachte Verwaltung und Automatisierung**: Kasten K10 bietet eine intuitive Benutzeroberfläche, die es Administratoren ermöglicht, Migrations- und Sicherungsprozesse einfach zu verwalten, ohne tiefgehende Fachkenntnisse jeder Kubernetes-Plattform zu benötigen. Die Lösung ist auch mit Automatisierungsfunktionen ausgestattet, die die Einrichtung wiederkehrender Migrations- und Sicherungsrichtlinien ermöglichen, indem sie sich in CI/CD-Pipelines integrieren lassen, um kontinuierliche Operationen zu gewährleisten. Benutzer können Migrationen oder Wiederherstellungen in Wartungsfenstern planen, Validierungstests nach der Migration durchführen und die Failover-Prozesse im Falle eines Problems mit dem Quellcluster automatisieren.

 - **Sicherheit und Compliance**: Bei Migrationen zu kritischen Umgebungen wie Red Hat OpenShift oder Kubernetes Engine sind die Datensicherheit und die Einhaltung von Standards (ISO, SOC, GDPR usw.) wesentliche Aspekte. Kasten K10 stellt sicher, dass Daten bei der Übertragung und im Ruhezustand verschlüsselt sind, und bietet Audit- und Rückverfolgungsoptionen für Backup- und Wiederherstellungsoperationen. Diese Fähigkeiten sind entscheidend, um die Sicherheit der migrierten Daten zu gewährleisten, sei es in Produktions- oder Testumgebungen. Kasten K10 ist eine unverzichtbare Lösung für Unternehmen, die effizient und sicher Kubernetes Vanilla- oder VMware Tanzu-Cluster zur Red Hat Kubernetes Engine oder OpenShift migrieren möchten.

Die Abrechnung erfolgt pro Worker Node.

| Redhat Openshift 4 Einheiten mit Data Foundations - Worker Node Backup-Lösung | Einheit   | SKU                        |
| :---------------------------------------------------------------------------- | :-------- | :--------------------------|
| VEEAM - KASTEN K10 - Kubernetes-Datenschutz und Anwendungsportabilität          | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Hinweis**: *Bitte beachten Sie, dass das für die ordnungsgemäße Funktion Ihrer Sicherung erforderliche Festplattenvolumen in der Empfangsumgebung Ihrer Sicherung, im Allgemeinen in S3-Speicher, bereitgestellt werden muss. Es ist nicht in den Openshift- oder Kasten-Einheiten enthalten.*

**(1)** _OADP ist nicht nativ im Cluster installiert. Nur Kasten ist zur Verwaltung der Migrationen, Sicherungen und Wiederherstellungen aktiviert._

## Rechte und Berechtigungen

Hier sind die implementierten Hauptberechtigungen:

|       Gruppe       |         API          |                                                                                      Ressourcen Berechtigungen                                                                                      |
|--------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps      |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")        |                                                                                          Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles      |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                          |
|config.kio.kasten.io|     PolicyPresets,   |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                |
|config.kio.kasten.io|         Alle         |                                                                                     die Ressourcen (*) Get, List                                                                                  |
|       Batch        |       CronJobs,      |                                                                      Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                         |
|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                           |
|     Networking     |       Ingresses,       |                                                                  NetworkPolicies Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                   |
|       Policy       |  PodDisruptionBudgets  |                                                                          Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                           |
|       Route        |      (OpenShift)       |                                                                       Routes Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                       |
|       Build        |      (OpenShift)       |                                                          BuildConfigs, Builds, BuildLogs Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                           |
|       Image        |      (OpenShift)       |                                                           ImageStreams, ImageStreamTags Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                            |
|        Apps        |      (OpenShift)       |                                                                 DeploymentConfigs Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                  |
|      Template      |      (OpenShift)       |                                                            Templates, TemplateInstances Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                            |
|   Authorization    |         Roles,         |                                                                    RoleBindings Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                    |
|        RBAC        |         Roles,         |                                                                    RoleBindings Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                    |
|      Project       |      (OpenShift)       |                                                                                Projects Abrufen, Löschen, Aktualisieren, Patchen                                                                                 |
|     Operators      |     Subscriptions,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                        |
|    Cert-Manager    |     Certificates,      |                                                    CertificateRequests, Issuers, ClusterIssuers Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                    |
|      Logging       |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                        |
|      Storage       |    VolumeSnapshots     |                                                                          Abrufen, Auflisten, Beobachten, Erstellen, Aktualisieren, Patchen, Löschen                                                                           |
|        Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                           |
|       NooBaa       |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                            |
|    ObjectBucket    |  ObjectBucketClaims,   |                                                                   ObjectBuckets Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                                    |
|        OCS         |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                          |
|       Local        |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                                            |
|      Metrics       |         Pods,          |                                                                                             Nodes Abrufen                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Erstellen                                                                                               |
|       Custom       |       Resources        |                                       Diverse benutzerdefinierte Ressourcen im Zusammenhang mit Kasten K10, Keycloak usw. Erstellen, Abrufen, Auflisten, Beobachten, Aktualisieren, Patchen, Löschen                                        |

## Aktuelle Grenzen des Redhat Openshift-Angebots in der SecNumCloud-Umgebung

Hier sind einige Einschränkungen, die durch die SecNumCloud-Zertifizierung bedingt sind:

### Dedizierter Kontrollplan

Workloads können aufgrund der mit dem Ressourcenmanagement und der Sicherheit der OpenShift-Plattform in der SecNumCloud verbundenen Einschränkungen nicht auf dem Kontrollplan ausgeführt werden.

### Verbot des Einsatzes von Bildern mit erhöhten Privilegien (rootless)

Um den Sicherheitsanforderungen des SecNumCloud-Repositorys zu entsprechen, ist die Verwendung von containerlosen Containern (rootless) obligatorisch.

Dieser Ansatz erhöht die allgemeine Sicherheit, indem jeglicher privilegierter Zugriff auf Container verhindert wird. Anwendungen, die Container mit Privilegien erfordern, müssen geändert werden, da deren Bereitstellung nicht erlaubt ist.

Diese Einschränkung erstreckt sich auch auf Helm Charts und Operatoren, die nicht rootlose Bilder verwenden, was deren Bereitstellung innerhalb der Infrastruktur unmöglich macht.

### Einschränkungen bei den Rechten der ClusterRole

Im Rahmen unseres OpenShift-Angebots setzen wir ein strenges Zugriffsmanagement auf Clusterebene gemäß den Anforderungen von SecNumCloud um.

Dieser Ansatz bedeutet eine Einschränkung der ClusterRoles für unsere Kunden, was einige Aspekte des globalen Clustermanagements begrenzt. Obwohl diese Maßnahme zunächst einschränkend sein mag, zielt sie darauf ab, die Sicherheit und Stabilität der Infrastruktur zu erhöhen.

Wir sind uns bewusst, dass dies technische Herausforderungen, insbesondere bei der Konfiguration fortgeschrittener Parameter, und möglicherweise Auswirkungen auf die Anpassung Ihrer Anwendungen oder den Erwerb zusätzlicher Werkzeuge mit sich bringen kann.

Unser Support-Team steht Ihnen zur Verfügung, um Sie zu diesem Thema zu beraten und zu unterstützen.

### Der SCC-Kontext kann in der SecNumCloud-Umgebung nicht geändert werden

Die Security Context Constraints (SCC) unterliegen strengen Einschränkungen und können von Benutzern nicht geändert werden. Diese Einschränkung hat erhebliche Auswirkungen auf die Bereitstellung und Ausführung von Containern.

In der Praxis bedeutet dies, dass die Ausführungsparameter der Container, wie z.B. die Systemzugriffsrechte oder die Linux-Fähigkeiten, vordefiniert und nicht anpassbar sind.

Diese Maßnahme, die durch Sicherheitsanforderungen motiviert ist, zielt darauf ab, jeglichen unbefugten Zugriff auf kritische Ressourcen des Clusters zu verhindern. Folglich können Anwendungen, die spezifische Sicherheitskontexte erfordern, insbesondere solche, die privilegierte Zugriffe benötigen, bei der Bereitstellung auf Hindernisse stoßen.

Technisch gesehen kann dies eine Überarbeitung der Anwendungsarchitektur und eine Anpassung der Bereitstellungsprozesse erfordern, um den vordefinierten SCC zu entsprechen. Operativ kann diese Einschränkung die Flexibilität der Bereitstellungen verringern und die Komplexität der Verwaltung bestimmter Anwendungen in der OpenShift-Umgebung erhöhen, insbesondere solcher, die Helm Charts oder Operatoren verwenden, die die geltenden SCC nicht einhalten.

### Einschränkungen bei den Custom Resource Definitions (CRDs)

Um den SecNumCloud-Zertifizierungsanforderungen zu entsprechen, gibt es eine wichtige Einschränkung bezüglich der Verwendung der Custom Resource Definitions (CRDs) und benutzerdefinierter Controller. Diese Maßnahme, die mit den Clusterechten zusammenhängt, soll verhindern, dass potenziell instabile oder nicht autorisierte benutzerdefinierte Ressourcen bereitgestellt werden.

Diese Einschränkung gilt auch für Operatoren und Helm Charts und hat direkte Auswirkungen auf die RBAC-Rechte, da die CRDs die Kubernetes-API erweitern. Daher müssen Operatoren und Helm Charts eine Zertifizierungskette durch unsere Dienste durchlaufen, um deren Konformität und Sicherheit zu gewährleisten.
Les benutzerdefinierten CRDs, insbesondere jene, die spezifischen geschäftlichen Anforderungen entsprechen, können in der Infrastruktur abgelehnt werden, da sie Risiken für die Stabilität und Sicherheit der Plattform darstellen. Diese Richtlinie, die zum Schutz der Integrität und Zuverlässigkeit des Clusters entwickelt wurde, erlaubt nur CRDs von offiziell zertifizierten Operatoren oder Helm Charts.

Unser Support-Team steht Ihnen zur Verfügung, um Sie zu beraten und Ihnen Best Practices in diesem Zusammenhang aufzuzeigen.

### Keine Unterstützung für dynamische IPs für Runner

Die Plattform OpenShift SecNumCloud verlangt, dass Runner mit festen IP-Adressen konfiguriert werden. Diese Anforderung wird durch die Notwendigkeit motiviert, die IPs zuzulassen, die unsere Cloud Temple-Konsole verwalten, die für das Zugriffsverwaltungstool für APIs erforderlich ist. Die zulässigen IP-Adressen werden auch verwendet, um auf die OpenShift-API sowie die OpenShift- und Shiva-Verwaltungsschnittstellen zuzugreifen.

Daher wird die Verwendung dynamischer IP-Adressen für diese Komponenten nicht unterstützt, was die Konfiguration fester IPs erzwingt, um die Sicherheit und den Zugang zu den APIs zu gewährleisten.

## Lastverteiler

Die OpenShift SecNumCloud-Umgebung bietet verschiedene Load Balancing-Optionen, um eine sichere und effiziente Verkehrsverwaltung zu gewährleisten. Die Load Balancer-API ist über die Ports 6443 und 443 zugänglich, wobei die Sicherheit durch eine Whitelist gewährleistet wird, die von der Cloud Temple-Konsole verwaltet wird. Diese API verwendet eine öffentliche IP-Adresse, die mit unserem Backbone verbunden ist, aber standardmäßig nicht zugänglich ist, was die Sicherheit weiter erhöht.

Für den privaten Load Balancer verwendet die Umgebung standardmäßig Ingress (nginx) als Lösung, was eine effiziente Verwaltung des internen Verkehrs ermöglicht. Darüber hinaus bietet die IaaS-Infrastruktur von Cloud Temple TCP-Unterstützung und bietet somit zusätzliche Flexibilität für Anwendungen, die eine Lastverteilung auf dieser Ebene benötigen.

Hinsichtlich des öffentlichen Load Balancers wird die Unterstützung auf Ebene 4 über Ingress bereitgestellt, obwohl derzeit einige Einschränkungen mit dem Befehl „expose“ bestehen. Dies bedeutet, dass das System in der Lage ist, TCP- und UDP-Verbindungen zuverlässig zu verwalten und sich weiterentwickelt, um eine größere Kompatibilität und Flexibilität zu bieten.

**Beachten Sie**: Der integrierte Load Balancer fungiert nicht als WAF. Ein WAF as a Service-Angebot ist für das zweite Halbjahr 2025 geplant.

## Wissenswertes

• Wenn Hardwarekomponenten der Plattform veraltet sind und eine Migration zu neuen Rechenressourcen erforderlich ist, übernimmt Cloud Temple alle Hardware-Migrationen ohne zusätzliche Kosten und ohne Unterbrechung des Dienstes.

• Um OpenShift zu testen, stellt Cloud Temple keine dedizierte Umgebung zur Verfügung, aber Sie können [die Testplattformen von RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) verwenden.

• Für die Automatisierung Ihrer Infrastruktur bevorzugen Sie bitte den offiziellen Terraform-Provider von OpenShift anstelle desjenigen von Cloud Temple.