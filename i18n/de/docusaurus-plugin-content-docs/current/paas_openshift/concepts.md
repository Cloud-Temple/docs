---
title: Konzepte
---
import oshiftOffert from './images/oshift_offert.jpg'

## Einführung in RedHat OpenShift

**Red Hat OpenShift** ist eine Enterprise-Container-Plattform, die die Bereitstellung, Verwaltung und Skalierung von containerisierten Anwendungen automatisiert. Es handelt sich um eine Plattform, die auf Docker basiert, einem Containerisierungssystem, das es ermöglicht, eine Anwendung und ihre Abhängigkeiten in einem virtuellen Container zu verpacken, sowie auf Kubernetes, einem Container-Orchestrierungssystem, das die Ausführung und Koordination von Containern auf einem Cluster von Servern verwaltet.

### Hauptfunktionen von Red Hat OpenShift:

- **Automatisierte Bereitstellung und Verwaltung:** OpenShift vereinfacht den Anwendungsbereitstellungsprozess durch Automatisierung von Verwaltungsroutinen wie Skalierung, Zustandsüberwachung und Container-Lebenszyklus. Es bietet eine integrierte Umgebung für die Entwicklung, das Testen und den Produktionsbetrieb von Anwendungen.

- **Unterstützung für mehrere Sprachen und Dienste:** Die Plattform unterstützt eine Vielzahl von Programmiersprachen (wie Java, Node.js, Python, Ruby und PHP) und bietet integrierte Dienste wie Messaging, Caching und Datenbanken, sodass sich Entwickler auf den Code konzentrieren können, anstatt auf die Infrastruktur.

- **Kontinuierliche Integration (CI) und kontinuierliche Bereitstellung (CD):** OpenShift integriert CI/CD-Tools, die die Software-Entwicklungspipeline automatisieren, vom ersten Commit bis zur Produktionsbereitstellung, und fördert so DevOps-Praktiken.

- **Betriebsmanagement:** OpenShift bietet Tools für die Überwachung, Leistungsverwaltung und Diagnose von Anwendungen und Infrastrukturen und hilft Betreibern, die Systemgesundheit und -leistung aufrechtzuerhalten.

- **Verbesserte Sicherheit:** Die Plattform ist mit integrierter Sicherheit konzipiert und bietet rollenbasierte Zugriffskontrollen, Aufgabentrennung und automatisierte Geheimnisverwaltung zum Schutz von Anwendungen und Daten.

### Vorteile von Red Hat OpenShift:

- **Flexibilität:** Entwickler können mit den Tools, Sprachen und Frameworks ihrer Wahl arbeiten.
- **Betriebliche Effizienz:** OpenShift optimiert die Ressourcennutzung, verkürzt die Markteinführungszeit und verbessert die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform verwaltet automatisch die Skalierung von Anwendungen, um Nachfrageschwankungen zu bewältigen.
- **Sicherheit und Compliance:** Mit seinen integrierten Sicherheitsrichtlinien hilft OpenShift, Sicherheits- und Compliance-Standards aufrechtzuerhalten.

Red Hat OpenShift ist eine umfassende Lösung für die Entwicklung, Bereitstellung und Verwaltung von containerisierten Anwendungen und bietet eine robuste, sichere und flexible Plattform für Unternehmen, die moderne Softwareentwicklungsansätze verfolgen.

### RedHat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) ist eine integrierte Speicher- und Datenverwaltungslösung, die nahtlos mit dem OpenShift-Ökosystem zusammenarbeitet. Sie bietet eine persistente, sichere und hochverfügbare Dateninfrastruktur für containerisierte Anwendungen und unterstützt moderne Entwicklungsumgebungen, die auf Container und Microservices ausgerichtet sind. ODF ist darauf ausgelegt, die Datenverwaltung in Hybrid- und Multi-Cloud-Umgebungen zu vereinfachen und zu automatisieren und bietet eine solide Grundlage für kritische Unternehmensanwendungen.

#### Hauptfunktionen von OpenShift Data Foundation:

- **Persistenter Speicher:** ODF bietet eine persistente Speicherschicht für Container, die für Unternehmensanwendungen wie Datenbanken, Content-Management-Systeme und Anwendungen, die einen persistenten Zustand erfordern, unerlässlich ist.

- **Multi-Cloud und Hybrid:** ODF ist für Hybrid- und Multi-Cloud-Umgebungen konzipiert und ermöglicht eine konsistente Datenverwaltungserfahrung über verschiedene Cloud-Umgebungen hinweg, was die Mobilität von Anwendungen und Daten erleichtert.

- **Automatisierung und Orchestrierung:** Die tiefe Integration mit Kubernetes und OpenShift ermöglicht es ODF, die Bereitstellung, Skalierung und Lebenszyklus-Verwaltung von Speicher basierend auf Anwendungsanforderungen zu automatisieren.

- **Hohe Verfügbarkeit und Ausfallsicherheit:** ODF verwendet Datenreplikation und Snapshots, um hohe Verfügbarkeit und Datenhaltbarkeit zu gewährleisten, was für die Geschäftskontinuität unerlässlich ist.

- **Datensicherheit:** Die Lösung integriert fortschrittliche Sicherheitsfunktionen wie Datenverschlüsselung im Ruhezustand und während der Übertragung sowie anpassbare Sicherheits- und Compliance-Richtlinien.

#### Vorteile von OpenShift Data Foundation:

- **Betriebliche Flexibilität:** ODF ermöglicht es Unternehmen, ihre Daten in verteilten Umgebungen effektiv zu verwalten und bietet die nötige Flexibilität, um den sich ändernden Anforderungen moderner Anwendungen gerecht zu werden.

- **Vereinfachte Datenverwaltung:** Durch die Automatisierung vieler Datenverwaltungsaufgaben reduziert ODF die Komplexität und setzt IT-Ressourcen frei, um sich auf Initiativen mit höherem Mehrwert zu konzentrieren.

- **Kostenoptimierung:** Die Fähigkeit von ODF, sich dynamisch an Speicheranforderungen anzupassen, hilft, Kosten zu optimieren, indem Überbereitstellung vermieden und verfügbare Ressourcen effizienter genutzt werden.

- **Leistungsverbesserung:** ODF ist darauf ausgelegt, hohe Leistung für Unternehmensanwendungen zu bieten, mit Optimierungsmöglichkeiten für verschiedene Arten von Workloads.

Red Hat OpenShift Data Foundation ist eine fortschrittliche Datenspeicherlösung, die die Effizienz, Ausfallsicherheit und Sicherheit von Unternehmensanwendungen, die auf OpenShift bereitgestellt werden, verbessert. Durch die Bereitstellung von persistentem, automatisiertem und sicherem Speicher spielt ODF eine entscheidende Rolle dabei, Unternehmen zu befähigen, das Potenzial von Container- und Hybrid-Cloud-Technologien voll auszuschöpfen.

## Allgemeine Plattformarchitektur

### Überblick

Die Cloud Temple Red Hat OpenShift-Plattform ist als regionales Angebot konzipiert und nativ auf [**drei verschiedene Verfügbarkeitszonen**](../additional_content/concepts_az.md) innerhalb derselben Cloud Temple [Region](../additional_content/concepts_regional.md) verteilt. Diese dreifache Zonenarchitektur erhöht die Datenverfügbarkeit und Ausfallsicherheit erheblich.

Die Plattform besteht aus einer Steuerungsebene und Worker-Knoten, die alle von der Cloud Temple-Infrastruktur verwaltet werden. Die Steuerungsebene ist gleichmäßig auf die drei Verfügbarkeitszonen verteilt, was eine zentralisierte und sichere Verwaltung gewährleistet. Die Worker-Knoten werden durch Rechenblades repräsentiert, die so angeordnet sind, dass jede Verfügbarkeitszone einen enthält.

Für Worker-Knoten sind mehrere Arten von Rechenblades verfügbar, die eine flexible Anpassung an verschiedene betriebliche Anforderungen ermöglichen:

| Red Hat OpenShift 4 mit Data Foundations Arbeitseinheiten - On Demand - 1 Monat                                                | Einheit                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Steuerungsebene - 3 Knoten - FR1 Region                                                                          | 1 dedizierter Plan            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 Kerne / 20 Threads - 64 GB RAM - 512 GB FLASH 1500 IOPS)                      | 3 dedizierte Worker        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 Kerne / 40 Threads - 128 GB RAM - 512 GB FLASH 1500 IOPS)                   | 3 dedizierte Worker        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 Kerne / 64 Threads - 384 GB RAM - 512 GB FLASH 1500 IOPS)                | 3 dedizierte Worker        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 Kerne / 96 Threads - 768 GB RAM - 512 GB FLASH 1500 IOPS)                 | 3 dedizierte Worker        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 Kerne / 112 Threads - 1,5 TB RAM - 512 GB FLASH 1500 IOPS)                    | 3 dedizierte Worker        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 Kerne / 64 Threads - 512 GB RAM - 512 GB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 dedizierte Worker + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Cloud Temple Red Hat OpenShift-Produkte sind als Pay-as-you-go oder mit einer 12-monatigen Reservierung verfügbar.

**Hinweise**:

1. *Die betriebliche und sicherheitstechnische Wartung der Steuerungsebene liegt in der Verantwortung von Cloud Temple als Teil eines PaaS-Dienstes.*

2. *Ab dem 15. Juni 2024 ist Version 1 der Plattform softwareseitig bewusst auf eine Steuerungsebene mit 30 Worker-Knoten (unabhängig vom Worker-Typ) und einen globalen persistenten Speicher von 50 TB begrenzt. Wenn diese Grenzen für Ihr Projekt blockierend sind, wenden Sie sich bitte an den Support.*

3. *Jeder Worker-Knoten wird mit 512 GB Flash-Blockspeicher geliefert, was 1,5 TB für jede Arbeitseinheit (1 Worker pro AZ) ergibt.*

4. *Ein Worker-Knoten kann standardmäßig bis zu 250 Pods verwalten. Diese Zahl ist über den Parameter podsPerCore anpassbar - zum Beispiel, mit 10 Pods pro Kern auf einem 4-Kern-Knoten haben Sie maximal 40 Pods. Weitere technische Details finden Sie in der [Pod-Verwaltungsdokumentation](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) und im [OpenShift-Grenzwertleitfaden](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *Das PaaS Openshift-Angebot beinhaltet nativ den Zugriff auf alle 3 Verfügbarkeitszonen, ohne dass eine zusätzliche Anmeldung erforderlich ist.*

6. *Es ist möglich, später Blockspeicher zum Openshift-Cluster hinzuzufügen.*

7. *Knoten werden ausgewogen über die 3 Verfügbarkeitszonen verteilt (1 Knoten pro Zone). Es ist nicht möglich, einen Cluster durch Zuweisung von mehr Knoten zu einer einzelnen Zone unausgewogen zu gestalten.*

### RedHat-Angebot als Teil der Cloud Temple Openshift-Plattform

Die Plattform ist ein RedHat Openshift 4, basierend auf [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) und beinhaltet [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Backup-Strategie für Ihre PaaS Openshift-Plattform

Die Sicherung und Wiederherstellung der PaaS Openshift-Plattform liegt für den **ETCD**-Teil in der Verantwortung von Cloud Temple als Teil des Plattformmanagements. **Die Sicherung und Wiederherstellung für den Bereitstellungs- und Anwendungsdatenteil liegt in der Verantwortung des Kunden**.

Cloud Temple stellt seinen Kunden das **Veeam Kasten K10**-Angebot (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)) zur Verfügung, eine Plattform, die auf Datenverwaltung für Kubernetes-Umgebungen spezialisiert ist. Konzipiert, um Datenschutzanforderungen zu erfüllen, bietet sie robuste Funktionen für Backup, Wiederherstellung, Migration und Notfallwiederherstellung. Kasten K10 integriert sich nativ in Kubernetes-Umgebungen, ob in Cloud-Clustern oder vor Ort verwaltet, und kann sich an verschiedene Anwendungsfälle anpassen, einschließlich Cluster-Migration zwischen verschiedenen Kubernetes-Distributionen wie Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine und Red Hat OpenShift.

Einer der Hauptanwendungsfälle für Kasten K10 ist die **Cluster-Migration zwischen verschiedenen Kubernetes-Plattformen**. Ob für einen Übergang zu einer robusteren Infrastruktur oder zur Konsolidierung bestehender Umgebungen, Kasten K10 bietet einfache und effektive Tools zur Verwaltung dieser Migrationen:

 - **Datensicherung und -schutz**: Bei der Migration von einem Kubernetes Vanilla- oder VMware Tanzu-Cluster zu Red Hat Kubernetes Engine oder OpenShift besteht der erste Schritt darin, Anwendungsdaten und deren Zustände zu sichern. Kasten K10 integriert sich leicht mit Kubernetes-APIs, um Anwendungen, ihre Abhängigkeiten und zugehörige Datenvolumen zu identifizieren. Dies umfasst die Sicherung von Persistent Volumes (PV), Datenbanken, Konfigurationen und Secrets. Kasten K10 unterstützt eine Vielzahl von Speicheranbietern (S3, Google Cloud Storage, Azure Blob Storage usw.), was die Erstellung von Snapshots von zu migrierenden Anwendungen ermöglicht. Diese Backups werden dann sicher mit Verschlüsselungsoptionen und granularer Zugriffskontrolle gespeichert, was die Datensicherheit während des gesamten Prozesses gewährleistet.

 - **Portabilität und Migration**: Die Migration zwischen Kubernetes-Distributionen wie Vanilla oder Tanzu und Red Hat-Lösungen wie OpenShift oder Kubernetes Engine kann aufgrund von Architekturunterschiede und spezifischen Konfigurationen jeder Plattform komplex sein. Kasten K10 vereinfacht diesen Prozess durch Bereitstellung einer Abstraktionsschicht für Anwendungsportabilität. Während der Migration repliziert Kasten K10 Konfigurationen und Daten von einem Quellcluster zu einem Zielcluster und berücksichtigt dabei die Besonderheiten jeder Umgebung. Zum Beispiel können Kubernetes-Objekte wie ConfigMaps, Secrets, PVs und CRDs (Custom Resource Definitions) unter Berücksichtigung der spezifischen Einschränkungen jeder Kubernetes-Distribution migriert werden, sei es ein Red Hat OpenShift- oder Kubernetes Engine-Cluster. Der Prozess ist automatisiert, was das Risiko manueller Fehler erheblich reduziert. Darüber hinaus ermöglicht Kasten K10 eine progressive oder vollständige Migration, je nach Bedarf, und bietet Echtzeit-Einblick in den Migrationsstatus, was die Verwaltung und Überwachung des Übergangs erleichtert.

 - **Multi-Cloud- und Multi-Distributions-Kompatibilität**: Kasten K10 ist für den Einsatz in Hybrid- und Multi-Cloud-Umgebungen konzipiert, was es zu einem idealen Tool für Organisationen macht, die Anwendungen von Tanzu- oder Vanilla-Clustern zu Red Hat-Umgebungen in der Cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) oder auf On-Premises-Infrastrukturen migrieren möchten. Dies gewährleistet maximale Flexibilität und ermöglicht DevOps-Teams, die beste Umgebung basierend auf Geschäftsanforderungen oder Infrastrukturmodernisierungsstrategien zu wählen.

 - **Vereinfachtes Management und Automatisierung**: Kasten K10 bietet eine intuitive Benutzeroberfläche, die es Administratoren ermöglicht, Migrations- und Backup-Operationen einfach zu verwalten, ohne tiefgreifende Expertise für jede Kubernetes-Plattform zu benötigen. Die Lösung ist auch mit Automatisierungsfunktionen ausgestattet, die es ermöglichen, wiederkehrende Migrations- und Backup-Richtlinien zu definieren und in CI/CD-Pipelines für kontinuierliche Operationen zu integrieren. Benutzer können Migrationen oder Wiederherstellungen basierend auf Wartungsfenstern planen, Validierungstests nach der Migration durchführen und Failover-Prozesse bei Problemen auf dem Quellcluster automatisieren.

 - **Sicherheit und Compliance**: Im Kontext von Migrationen zu kritischen Umgebungen wie Red Hat OpenShift oder Kubernetes Engine sind Datensicherheit und Einhaltung von Standards (ISO, SOC, GDPR usw.) wesentliche Aspekte. Kasten K10 gewährleistet Datenverschlüsselung während der Übertragung und im Ruhezustand und bietet gleichzeitig Audit- und Nachverfolgungsoptionen für Backup- und Wiederherstellungsoperationen. Diese Fähigkeiten sind wesentlich, um die Sicherheit migrierter Daten zu gewährleisten, sei es in Produktions- oder Testumgebungen. Kasten K10 ist eine wesentliche Lösung für Unternehmen, die Kubernetes Vanilla- oder VMware Tanzu-Cluster effizient und sicher zu Red Hat Kubernetes Engine oder OpenShift migrieren möchten.

 Die Abrechnung basiert auf der Anzahl der Worker-Knoten.

| Red Hat OpenShift 4 mit Data Foundations Arbeitseinheiten - Worker Node Backup-Lösung | Einheit     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes-Datenschutz und Anwendungsmobilität              | 3 Worker | csp:fr1:paas:kasten:3wkr:v1 |

**Hinweis**: *Achtung, das für die ordnungsgemäße Funktion Ihres Backups erforderliche Festplattenvolumen muss in der Umgebung bereitgestellt werden, die Ihr Backup empfängt, in der Regel in S3-Speicher. Es ist nicht in den Openshift- oder Kasten-Arbeitseinheiten enthalten.*

**(1)** _OADP ist nicht nativ im Cluster installiert. Nur Kasten ist für die Verwaltung von Migration, Backup und Wiederherstellung aktiviert_

## Rechte und Berechtigungen

Hier sind die wichtigsten implementierten Berechtigungen:

|       Gruppe       |         API          |                                                                                       Ressourcenberechtigungen                                                                                       |
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
|       Local        |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics       |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom       |       Resources        |                                       Verschiedene benutzerdefinierte Ressourcen im Zusammenhang mit Kasten K10, Keycloak usw. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Aktuelle Einschränkungen des RedHat OpenShift-Angebots in einer SecNumCloud-Umgebung

Hier sind einige Einschränkungen, die durch die SecNumCloud-Qualifikation bedingt sind:

### Dedizierte Steuerungsebene

Workloads können aufgrund inhärenter Einschränkungen bei der Ressourcenverwaltung und Sicherheit der OpenShift-Plattform auf SecNumCloud nicht auf der Steuerungsebene ausgeführt werden.

### Verbot der Bereitstellung von Images mit erhöhten Privilegien (rootless)

Um die Sicherheitsanforderungen des SecNumCloud-Frameworks zu erfüllen, ist es obligatorisch, Container ohne Privilegien (rootless) zu verwenden.

Dieser Ansatz verbessert die Gesamtsicherheit, indem er jeden privilegierten Zugriff auf Container verhindert. Anwendungen, die Container mit Privilegien benötigen, müssen modifiziert werden, da ihre Bereitstellung nicht autorisiert wird.

Diese Einschränkung erstreckt sich auch auf Helm Charts und Operatoren, die nicht-rootless Images verwenden, was ihre Bereitstellung innerhalb der Infrastruktur unmöglich macht.

### Einschränkungen bei ClusterRole-Rechten

Im Rahmen unseres OpenShift-Angebots implementieren wir eine rigorose Verwaltung von Zugriffsrechten auf Cluster-Ebene, in Übereinstimmung mit den SecNumCloud-Anforderungen.

Dieser Ansatz impliziert eine Begrenzung der ClusterRoles für unsere Kunden und schränkt damit bestimmte Aspekte der globalen Cluster-Verwaltung ein. Obwohl diese Maßnahme zunächst einschränkend erscheinen mag, zielt sie darauf ab, die Sicherheit und Stabilität der Infrastruktur zu verbessern.

Wir sind uns bewusst, dass dies technische Herausforderungen schaffen kann, insbesondere bei der Konfiguration fortgeschrittener Parameter, und möglicherweise Auswirkungen auf die Anpassung Ihrer Anwendungen oder den Erwerb komplementärer Tools haben kann.

Unser Support-Team steht Ihnen zur Verfügung, um Sie zu diesem Thema zu beraten und zu unterstützen.

### Der SCC-Kontext kann in der SecNumCloud-Umgebung nicht modifiziert werden

Security Context Constraints (SCC) unterliegen strengen Einschränkungen und können von Benutzern nicht modifiziert werden. Diese Einschränkung hat erhebliche Auswirkungen auf die Bereitstellung und Ausführung von Containern.

In der Praxis bedeutet dies, dass Container-Ausführungsparameter, wie Systemzugriffsrechte oder Linux-Fähigkeiten, vordefiniert und nicht anpassbar sind.

Diese Maßnahme, die durch Sicherheitsanforderungen motiviert ist, zielt darauf ab, jeden unbefugten Zugriff auf kritische Cluster-Ressourcen zu verhindern. Folglich können Anwendungen, die spezifische Sicherheitskontexte benötigen, insbesondere solche, die privilegierten Zugriff erfordern, bei der Bereitstellung auf Hindernisse stoßen.

Aus technischer Sicht kann dies eine Überarbeitung der Anwendungsarchitektur und eine Anpassung der Bereitstellungsprozesse erfordern, um den vordefinierten SCCs zu entsprechen. Aus betrieblicher Sicht kann diese Einschränkung die Bereitstellungsflexibilität reduzieren und die Komplexität der Verwaltung bestimmter Anwendungen in der OpenShift-Umgebung erhöhen, insbesondere solcher, die Helm Charts oder Operatoren verwenden, die nicht den geltenden SCCs entsprechen.

### Einschränkungen bei Custom Resource Definitions (CRDs)

Um der SecNumCloud-Qualifikation zu entsprechen, betrifft eine wichtige Einschrän
