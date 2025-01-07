---
title: Konzepte
---

## Einführung in RedHat Openshift

**Red Hat OpenShift** ist eine Unternehmens-Containerplattform, die die Bereitstellung, Verwaltung und Skalierung containerisierter Anwendungen automatisiert. Es ist eine Plattform, die um Docker herum entwickelt wurde, ein Containerisierungssystem, das es ermöglicht, eine Anwendung und deren Abhängigkeiten in einem virtuellen Container zu verpacken, und um Kubernetes, ein Container-Orchestrierungssystem, das die Ausführung und Koordination der Container auf einem Server-Cluster verwaltet.

### Hauptmerkmale von Red Hat OpenShift:

- **Automatisierte Bereitstellung und Verwaltung:** OpenShift vereinfacht den Bereitstellungsprozess von Anwendungen durch die Automatisierung von Verwaltungsroutinen wie Skalierung, Gesundheitsprüfung und Lebenszyklusmanagement der Container. Es bietet eine integrierte Umgebung für die Entwicklung, das Testen und den Betrieb von Anwendungen.

- **Unterstützung mehrerer Sprachen und Dienste:** Die Plattform unterstützt eine Vielzahl von Programmiersprachen (wie Java, Node.js, Python, Ruby und PHP) und bietet integrierte Dienste wie Messaging, Caching und Datenbanken, sodass sich Entwickler auf den Code und nicht auf die Infrastruktur konzentrieren können.

- **Continuous Integration (CI) und Continuous Deployment (CD):** OpenShift integriert CI/CD-Tools, die die Entwicklungspipeline von der anfänglichen Code-Commit bis zur Produktion automatisieren und so DevOps-Praktiken fördern.

- **Betriebsverwaltung:** OpenShift stellt Werkzeuge für die Überwachung, Leistungsverwaltung und Diagnose von Anwendungen und Infrastrukturen bereit, um Betreibern zu helfen, die Systemgesundheit und -leistung aufrechtzuerhalten.

- **Erhöhte Sicherheit:** Die Plattform wird mit integrierter Sicherheit entwickelt und bietet rollenbasierte Zugriffskontrollen, Aufgaben Trennung und automatisiertes Geheimnis-Management, um Anwendungen und Daten zu schützen.

### Vorteile von Red Hat OpenShift:

- **Flexibilität:** Entwickler können mit den Werkzeugen, Sprachen und Frameworks ihrer Wahl arbeiten.
- **Betriebliche Effizienz:** OpenShift optimiert die Ressourcennutzung, verkürzt die Markteinführungszeit und steigert die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform verwaltet automatisch die Skalierung der Anwendungen, um Schwankungen im Bedarf zu bewältigen.
- **Sicherheit und Compliance:** Mit seinen integrierten Sicherheitsrichtlinien hilft OpenShift, Sicherheits- und Compliance-Standards aufrechtzuerhalten.

Red Hat OpenShift ist eine umfassende Lösung für die Entwicklung, Bereitstellung und Verwaltung containerisierter Anwendungen und bietet eine robuste, sichere und flexible Plattform für Unternehmen, die moderne Softwareentwicklungsmethoden anwenden.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) ist eine integrierte Datenmanagement- und Speicherlösung, die nahtlos mit dem OpenShift-Ökosystem zusammenarbeitet. Sie bietet eine persistente, sichere und hochverfügbare Dateninfrastruktur für containerisierte Anwendungen und unterstützt so moderne, auf Container und Microservices ausgerichtete Entwicklungsumgebungen. ODF ist darauf ausgelegt, das Datenmanagement in hybriden und Multi-Cloud-Umgebungen zu vereinfachen und zu automatisieren, und stellt eine solide Grundlage für unternehmenskritische Anwendungen bereit.

#### Hauptmerkmale der OpenShift Data Foundation:

- **Persistenter Speicher:** ODF bietet eine Schicht für persistenten Speicher für Container, die für Unternehmensanwendungen wie Datenbanken, Content-Management-Systeme und Anwendungen, die einen persistenten Zustand erfordern, unerlässlich ist.

- **Multicloud und Hybrid:** Entwickelt für hybride und Multi-Cloud-Umgebungen ermöglicht ODF ein konsistentes Datenmanagementerlebnis über verschiedene Cloud-Umgebungen hinweg und erleichtert die Mobilität von Anwendungen und Daten.

- **Automatisierung und Orchestrierung:** Die tiefe Integration mit Kubernetes und OpenShift ermöglicht es ODF, die Bereitstellung, Skalierung und Lebenszyklusverwaltung des Speichers basierend auf den Anforderungen der Anwendungen zu automatisieren.

- **Hohe Verfügbarkeit und Resilienz:** ODF verwendet Datenreplikation und Snapshotting, um die hohe Verfügbarkeit und Dauerhaftigkeit der Daten zu gewährleisten, was für die Kontinuität von Unternehmensoperationen unerlässlich ist.

- **Datensicherheit:** Die Lösung integriert fortschrittliche Sicherheitsfunktionen wie Verschlüsselung der Daten im Ruhezustand und während der Übertragung sowie anpassbare Sicherheits- und Compliance-Richtlinien.

#### Vorteile der OpenShift Data Foundation:

- **Betriebliche Flexibilität:** ODF ermöglicht es Unternehmen, ihre Daten in verteilten Umgebungen effektiv zu verwalten und bietet die notwendige Flexibilität, um den sich ändernden Anforderungen moderner Anwendungen gerecht zu werden.

- **Vereinfachtes Datenmanagement:** Durch die Automatisierung vieler Datenmanagementaufgaben reduziert ODF die Komplexität und setzt IT-Ressourcen frei, um sich auf wertschöpfendere Initiativen zu konzentrieren.

- **Kostenoptimierung:** ODFs Fähigkeit, sich dynamisch an Speicheranforderungen anzupassen, trägt zur Kostenoptimierung bei, indem Überprovisionierung vermieden und verfügbare Ressourcen effizienter genutzt werden.

- **Verbesserte Leistung:** ODF ist darauf ausgelegt, hohe Leistung für Unternehmensanwendungen zu liefern, mit Optimierungskapazitäten für verschiedene Arten von Workloads.

Red Hat OpenShift Data Foundation ist eine fortschrittliche Datenspeicherlösung, die die Effizienz, Widerstandsfähigkeit und Sicherheit von Unternehmensanwendungen, die auf OpenShift bereitgestellt werden, stärkt. Durch die Bereitstellung eines persistenten, automatisierten und sicheren Speichers spielt ODF eine entscheidende Rolle dabei, Unternehmen dabei zu unterstützen, das volle Potenzial von Container- und Hybrid-Cloud-Technologien zu nutzen.

## Allgemeine Architektur der Plattform

### Allgemeines

Die Red Hat OpenShift-Plattform von Cloud Temple ist als regionales Angebot konzipiert und wird nativ auf **drei verschiedenen Verfügbarkeitszonen** innerhalb einer Region von Cloud Temple bereitgestellt. Diese dreizonalige Architektur erhöht die Verfügbarkeit und Resilienz der Daten erheblich.

Die Plattform besteht aus einem Kontrollplan und Arbeitsknoten, die alle von der Cloud Temple-Infrastruktur verwaltet werden. Der Kontrollplan ist gleichmäßig auf die drei Verfügbarkeitszonen verteilt und sorgt für eine zentrale und sichere Verwaltung. Die Arbeitsknoten werden durch Computing-Blades dargestellt, die so angeordnet sind, dass jede Verfügbarkeitszone eines enthält.

Für die Arbeitsknoten stehen verschiedene Arten von Computing-Blades zur Verfügung, sodass eine flexible Anpassung an unterschiedliche betriebliche Anforderungen möglich ist:

| Einheiten Redhat Openshift 4 with Data Foundations - On Demand - 1 Monat                                                     | Einheit                 | SKU                                   |
| :-------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Kontrollplan - 3 Knoten - Region FR1                                                                            | 1 dedizierter Plan      | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - ARBEITSKNOTEN - TINY - 3 x (10 Kerne / 20 Threads - 64 GB RAM - 512 GB FLASH 1500 IOPS)                         | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - ARBEITSKNOTEN - SMALL - 3 x (20 Kerne / 40 Threads - 128 GB RAM - 512 GB FLASH 1500 IOPS)                       | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - ARBEITSKNOTEN - STANDARD - 3 x (32 Kerne / 64 Threads - 384 GB RAM - 512 GB FLASH 1500 IOPS)                    | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - ARBEITSKNOTEN - ADVANCED - 3 x (48 Kerne / 96 Threads - 768 GB RAM - 512 GB FLASH 1500 IOPS)                    | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - ARBEITSKNOTEN - PERF - 3 x (56 Kerne / 112 Threads - 1.5 TB RAM - 512 GB FLASH 1500 IOPS)                       | 3 dedizierte Worker     | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - ARBEITSKNOTEN - GPU - 3 x (32 Kerne / 64 Threads - 512 GB RAM - 512 GB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB)    | 3 dedizierte Worker + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1 |

Die Red Hat OpenShift Cloud Temple-Produkte sind sowohl pay-as-you-go als auch mit 12-monatigen Reservierungen verfügbar.

**Hinweise:**

1. *Die Betriebs- und Sicherheitsverwaltung des Kontrollplans liegt in der Verantwortung von Cloud Temple als Teil eines PaaS-Services.*

2. *Ab dem 15. Juni 2024 ist die Version 1 der Plattform softwaremäßig auf einen Kontrollplan mit 30 Arbeitsknoten (unabhängig vom Workertyp) und einen globalen persistenten Speicher von 50 TB begrenzt. Wenn diese Grenzen für Ihr Projekt problematisch sind, wenden Sie sich bitte an den Support.*

3. *Jeder Arbeitsknoten wird mit 512 GB Flash-Block-Speicher geliefert, was 1,5 TB pro Projekteinstellungseinheit (1 Worker pro AZ) entspricht.*

4. *Das PaaS Openshift-Angebot umfasst nativ den Zugriff auf die 3 Verfügbarkeitszonen, ohne dass ein zusätzlicher Zugriff erforderlich ist.*

5. *Es ist möglich, später Block-Speicher zum Openshift-Cluster hinzuzufügen.*

6. *Die Knoten sind gleichmäßig auf die 3 Verfügbarkeitszonen verteilt (1 Knoten pro Zone). Es ist nicht möglich, ein Cluster durch Zuordnung einer größeren Anzahl von Knoten zu einer einzigen Zone zu entkoppeln.*
### Offre RedHat déployée dans le cadre de la plateforme Openshift Cloud Temple

La plateforme est une Redhat Openshift 4 basée sur [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) und umfasst [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

![](images/oshift_offert.jpg)

## Stratégie de sauvegarde de votre plateforme PaaS Openshift

La sauvegarde et la restauration de la plateforme PaaS Openshift est de la responsabilité de Cloud Temple pour la partie **ETCD** au titre du management de la plateforme. **La sauvegarde et la restauration pour la partie déploiement et données applicatives est de la responsabilité du Commanditaire**.

RedHat Openshift Plateform Plus comprend l'**API Openshift Data Protection (OADP)** et met nativement à disposition **Velero**. Vous trouverez ici la documentation complète sur le sujet (en anglais) : [Backing up and restoring your OpenShift Container Platform cluster](https://docs.redhat.com/fr/documentation/openshift_container_platform/4.8/html/backup_and_restore/index). *(1)*

Cloud Temple met à disposition en option pour ses clients l’offre **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), plateforme spécialisée dans la gestion des données pour les environnements Kubernetes. Conçue pour répondre aux besoins en matière de protection des données, elle offre des fonctionnalités robustes pour la sauvegarde, la restauration, la migration et la reprise après sinistre. Kasten K10 s’intègre de manière native aux environnements Kubernetes, qu'ils soient gérés sur des clusters cloud ou sur site, et peut s’adapter à différents cas d’usage, notamment la migration de clusters entre différentes distributions Kubernetes telles que Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine et Red Hat OpenShift.

L’un des cas d’utilisation majeurs de Kasten K10 est **la migration de clusters entre différentes plateformes Kubernetes**. Que ce soit pour une transition vers une infrastructure plus robuste ou pour consolider les environnements existants, Kasten K10 offre des outils simples et efficaces pour gérer ces migrations :

- **Sauvegarde et protection des données** : lors de la migration d'un cluster Kubernetes Vanilla ou VMware Tanzu vers Red Hat Kubernetes Engine ou OpenShift, la première étape est de sauvegarder les données des applications et leurs états. Kasten K10 s'intègre facilement avec les API Kubernetes pour identifier les applications, leurs dépendances, ainsi que les volumes de données associés. Cela inclut la sauvegarde des volumes persistants (Persistent Volumes - PV), des bases de données, des configurations et des secrets. Kasten K10 prend en charge une large variété de fournisseurs de stockage (S3, Google Cloud Storage, Azure Blob Storage, etc.), ce qui permet de créer des instantanés des applications à migrer. Ces sauvegardes sont ensuite stockées de manière sécurisée avec des options de chiffrement et de contrôle d'accès granulaires, garantissant la sécurité des données tout au long du processus.

- **Portabilité et migration** : la migration entre des distributions Kubernetes comme Vanilla ou Tanzu et des solutions Red Hat comme OpenShift ou Kubernetes Engine peut être complexe en raison des différences d’architectures et des configurations spécifiques de chaque plateforme. Kasten K10 simplifie ce processus en fournissant une couche d’abstraction pour la portabilité des applications. Lors de la migration, Kasten K10 réplique les configurations et les données d’un cluster source vers un cluster cible, tout en tenant compte des spécificités de chaque environnement. Par exemple, les objets Kubernetes comme les ConfigMaps, les Secrets, les PV, ainsi que les CRDs (Custom Resource Definitions) peuvent être migrés en tenant compte des contraintes propres à chaque distribution Kubernetes, qu’il s’agisse d’un cluster Red Hat OpenShift ou Kubernetes Engine. Le processus est automatisé, ce qui réduit considérablement le risque d’erreurs manuelles. De plus, Kasten K10 permet une migration progressive ou complète, en fonction des besoins, et offre une visibilité en temps réel sur l’état de la migration, facilitant ainsi la gestion et la surveillance de la transition.

- **Compatibilité multi-cloud et multi-distribution** : Kasten K10 est conçu pour fonctionner dans des environnements hybrides et multi-clouds, ce qui en fait un outil idéal pour les organisations cherchant à migrer des applications de clusters Tanzu ou Vanilla vers des environnements Red Hat dans le cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) ou sur des infrastructures sur site. Cela garantit une flexibilité maximale et permet aux équipes DevOps de choisir le meilleur environnement en fonction des besoins métier ou des stratégies de modernisation d'infrastructure.

- **Gestion simplifiée et automatisation**: Kasten K10 offre une interface utilisateur intuitive qui permet aux administrateurs de gérer facilement les opérations de migration et de sauvegarde sans nécessiter une expertise approfondie de chaque plateforme Kubernetes. La solution est également équipée de fonctionnalités d’automatisation qui permettent de définir des politiques de migration et de sauvegarde récurrentes, s’intégrant aux pipelines CI/CD pour des opérations continues. Les utilisateurs peuvent planifier des migrations ou des restaurations en fonction de fenêtres de maintenance, effectuer des tests de validation après migration et automatiser les processus de basculement en cas de problème sur le cluster source.

- **Sécurité et conformité**: dans le cadre de migrations vers des environnements critiques comme Red Hat OpenShift ou Kubernetes Engine, la sécurité des données et la conformité aux normes (ISO, SOC, GDPR, etc.) sont des aspects essentiels. Kasten K10 assure le chiffrement des données en transit et au repos, tout en offrant des options d'audit et de traçabilité des opérations de sauvegarde et de restauration. Ces capacités sont essentielles pour garantir la sécurité des données migrées, que ce soit dans des environnements de production ou de test. Kasten K10 est une solution incontournable pour les entreprises qui souhaitent migrer efficacement et en toute sécurité des clusters Kubernetes Vanilla ou VMware Tanzu vers Red Hat Kubernetes Engine ou OpenShift.

La facturation se fait au nombre de worker node.

| Unités d'œuvre Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unité     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Note** : *Attention, la volumétrie disque nécessaire au bon fonctionnement de votre backup est à prévoir sur l'environnement de réception de votre backup, généralement en stockage S3. Elle n'est pas incluse dans les unités d'œuvre Openshift ou Kasten.*

**(1)** _OADP n'est pas installé nativement dans le cluster. Seul Kasten est activé pour la gestion des migrations, des sauvegardes et de la restauration_

## Droits et Permissions

Voici les permissions principales mises en oeuvre :

|       Groupe       |         d'API          |                                                                                       Ressources Permissions                                                                                        |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Toutes         |                                                                                    les ressources (*) Get, List                                                                                    |
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
|       Custom       |       Resources        |                                       Diverses ressources personnalisées liées à Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Aktueller Redhat Openshift-Angebotsgrenzen in SecNumCloud-Umgebung

Hier sind einige Einschränkungen aufgeführt, die durch die SecNumCloud-Qualifikation bedingt sind:

### Dediziertes Steuerungsebenen-Plan

Arbeitslasten können aufgrund der inhärenten Einschränkungen bei der Ressourcennutzung und Plattform-Sicherheit von OpenShift auf SecNumCloud nicht auf der Steuerungsebene ausgeführt werden.

### Verbot der Bereitstellung von Images mit hohen Berechtigungen (rootless)

Um den Sicherheitsanforderungen des SecNumCloud-Referenzrahmens gerecht zu werden, ist die Verwendung von Containern ohne Berechtigungen (rootless) obligatorisch.

Dieser Ansatz erhöht die allgemeine Sicherheit, indem jeglicher privilegierter Zugang zu Containern verhindert wird. Anwendungen, die Container mit Berechtigungen benötigen, müssen geändert werden, da deren Bereitstellung nicht erlaubt ist.

Diese Einschränkung erstreckt sich auch auf Helm Charts und Operatoren, die nicht-rootless Images nutzen, wodurch deren Bereitstellung innerhalb der Infrastruktur unmöglich wird.

### Einschränkungen bei ClusterRole-Rechten

Im Rahmen unseres OpenShift-Angebots haben wir eine strikte Verwaltung der Zugriffsrechte auf Clusterebene gemäß den SecNumCloud-Anforderungen etabliert.

Dieser Ansatz beinhaltet eine Einschränkung der ClusterRoles für unsere Kunden und beschränkt somit einige Aspekte der globalen Cluster-Verwaltung. Obwohl diese Maßnahme anfangs restriktiv erscheinen mag, zielt sie darauf ab, die Sicherheit und Stabilität der Infrastruktur zu verstärken.

Wir sind uns bewusst, dass dies technische Herausforderungen mit sich bringen kann, insbesondere bei der Konfiguration fortgeschrittener Einstellungen und möglicherweise in Bezug auf die Anpassung Ihrer Anwendungen oder den Erwerb zusätzlicher Tools.

Unser Support-Team steht Ihnen zur Verfügung, um Sie dazu zu beraten und zu unterstützen.

### Das SCC-Kontext kann in der SecNumCloud-Umgebung nicht geändert werden

Die Security Context Constraints (SCC) unterliegen strengen Beschränkungen und können von den Benutzern nicht geändert werden. Diese Einschränkung hat erhebliche Auswirkungen auf die Bereitstellung und Ausführung von Containern.

In der Praxis bedeutet dies, dass die Ausführungsparameter von Containern, wie Systemzugriffsrechte oder Linux-Fähigkeiten, vordefiniert und nicht anpassbar sind.

Diese Maßnahme, motiviert durch Sicherheitsanforderungen, zielt darauf ab, jeglichen unbefugten Zugriff auf kritische Clusterressourcen zu verhindern. Folglich können Anwendungen, die spezifische Sicherheitskontexte erfordern, insbesondere solche, die privilegierten Zugriff benötigen, auf Hindernisse bei der Bereitstellung stoßen.

Technisch gesehen kann dies eine Überprüfung der Anwendungsarchitektur und eine Anpassung der Bereitstellungsprozesse erfordern, um sich den vordefinierten SCCs anzupassen. Operativ kann diese Einschränkung die Flexibilität der Bereitstellungen reduzieren und die Verwaltung einiger Anwendungen innerhalb der OpenShift-Umgebung, insbesondere solcher, die Helm Charts oder Operatoren nutzen, die die geltenden SCCs nicht einhalten, komplexer machen.

### Einschränkungen bei Custom Resource Definitions (CRDs)

Um sich an die SecNumCloud-Qualifikation zu halten, gibt es eine wichtige Einschränkung bei der Verwendung von Custom Resource Definitions (CRDs) und benutzerdefinierten Controllern. Diese Maßnahme, die mit den Clusterrechten verbunden ist, zielt darauf ab, die Bereitstellung potenziell instabiler oder nicht autorisierter benutzerdefinierter Ressourcen zu verhindern.

Diese Einschränkung gilt auch für Operatoren und Helm Charts, mit direkter Auswirkung auf die RBAC-Rechte, da CRDs die Kubernetes-API erweitern können. Daher müssen Operatoren und Helm Charts einen Zertifizierungsprozess durchlaufen, um deren Konformität und Sicherheit zu gewährleisten.

Benutzerdefinierte CRDs, insbesondere solche, die speziellen geschäftlichen Anforderungen entsprechen, können aufgrund der Risiken, die sie für Stabilität und Sicherheit der Plattform darstellen, in der Infrastruktur abgelehnt werden. Diese Richtlinie, die auf den Schutz der Integrität und Zuverlässigkeit des Clusters abzielt, erlaubt nur CRDs von offiziell zertifizierten Operatoren oder Helm Charts.

Unser Support-Team steht Ihnen zur Verfügung, um Sie über die besten Praktiken in diesem Rahmen zu beraten und zu unterstützen.

### Keine Unterstützung für dynamische IP-Adressen für die Runner
Die OpenShift SecNumCloud-Plattform erfordert, dass die Runner mit festen IP-Adressen konfiguriert sind. Diese Anforderung basiert auf dem Bedarf, die IPs zu autorisieren, die unsere Cloud Temple-Konsole verwalten, was für das API-Zugriffsverwaltungstool notwendig ist. Die autorisierten IP-Adressen werden auch genutzt, um auf die OpenShift-API sowie die OpenShift- und Shiva-Administrationsschnittstellen zuzugreifen.

Daher wird die Verwendung von dynamischen IP-Adressen für diese Komponenten nicht unterstützt, was die Konfiguration von festen IP-Adressen zur Gewährleistung der Sicherheit und des API-Zugriffs notwendig macht.

## Load Balancer

Die SecNumCloud Openshift-Umgebung bietet Load Balancing-Optionen auf verschiedenen Ebenen, um ein sicheres und effizientes Verkehrsmanagement zu gewährleisten. Die Load Balancer-API ist über die Ports 6443 und 443 zugänglich, mit einer Sicherheitskontrolle, die durch eine Whitelist verwaltet wird, die von der Cloud Temple-Konsole gesteuert wird. Diese API verwendet eine öffentliche IP-Adresse, die mit unserem Backbone verbunden ist, ist jedoch standardmäßig nicht zugänglich, was die Sicherheit der Zugriffe erhöht.

Für den privaten Load Balancer verwendet die Umgebung Ingress (nginx) als Standardlösung, was eine effiziente Verwaltung des internen Verkehrs ermöglicht. Zudem bietet die IaaS-Infrastruktur von Cloud Temple TCP-Unterstützung, was zusätzliche Flexibilität für Anwendungen bietet, die auf dieser Ebene Load Balancing benötigen.

Für den öffentlichen Load Balancer wird die Unterstützung der Ebene 4 über Ingress sichergestellt, obwohl es derzeit einige Einschränkungen mit dem Kommando "expose" gibt. Das bedeutet, dass das System in der Lage ist, TCP- und UDP-Verbindungen zuverlässig zu verwalten, und sich weiterhin weiterentwickelt, um eine größere Kompatibilität und Flexibilität zu bieten.