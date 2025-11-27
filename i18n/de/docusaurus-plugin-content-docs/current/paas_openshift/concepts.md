---
title: Konzepte
---
import oshiftOffert from './images/oshift_offert.png'

## Introduction to Red Hat OpenShift

**Red Hat OpenShift** is an enterprise container platform that automates the deployment, management, and scaling of containerized applications. It is a platform built around Docker, a containerization system that enables packaging an application and its dependencies into a virtual container, and Kubernetes, a container orchestration system that manages the execution and coordination of containers across a cluster of servers.

### Hauptfunktionen von Red Hat OpenShift:

- **Automatisiertes Bereitstellen und Management:** OpenShift vereinfacht den Prozess der Anwendungsbereitstellung, indem er Routineaufgaben wie Skalierung, Gesundheitsüberwachung und Lebenszyklusverwaltung von Containern automatisiert. Es bietet eine integrierte Umgebung für Entwicklung, Test und Produktion von Anwendungen.

- **Unterstützung mehrerer Sprachen und Dienste:** Die Plattform unterstützt eine breite Palette von Programmiersprachen (z. B. Java, Node.js, Python, Ruby und PHP) und bietet integrierte Dienste wie Messaging, Caching und Datenbanken, sodass Entwickler sich auf den Code konzentrieren können, anstatt sich um die Infrastruktur kümmern zu müssen.

- **Integration von CI/CD (Continuous Integration / Continuous Deployment):** OpenShift integriert CI/CD-Tools, die den Softwareentwicklungs-Pipeline automatisieren – von der ersten Änderung bis hin zum Produktions-Deployment – und so DevOps-Praktiken fördern.

- **Operations-Management:** OpenShift stellt Tools für Überwachung, Leistungsmanagement und Diagnose von Anwendungen und Infrastruktur bereit, die Betreibern helfen, die Gesundheit und Leistung der Systeme aufrechtzuerhalten.

- **Erweiterte Sicherheit:** Die Plattform ist mit integrierter Sicherheit ausgelegt und bietet Rollenbasierten Zugriff, Aufgaben-Trennung sowie automatisierte Verwaltung von Geheimnissen, um Anwendungen und Daten zu schützen.

### Vorteile von Red Hat OpenShift:

- **Flexibilität:** Entwickler können die Tools, Sprachen und Frameworks ihrer Wahl verwenden.
- **Betriebseffizienz:** OpenShift optimiert die Ressourcennutzung, verkürzt die Time-to-Market und steigert die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform führt die Skalierung von Anwendungen automatisch aus, um dynamischen Anforderungen gerecht zu werden.
- **Sicherheit und Compliance:** Durch integrierte Sicherheitsrichtlinien unterstützt OpenShift die Einhaltung von Sicherheits- und Compliance-Standards.

Red Hat OpenShift ist eine umfassende Lösung für die Entwicklung, Bereitstellung und Verwaltung containerbasierter Anwendungen und bietet Unternehmen, die moderne Ansätze für die Softwareentwicklung verfolgen, eine leistungsstarke, sichere und flexible Plattform.

### Red Hat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) is an integrated storage and data management solution designed to seamlessly operate within the OpenShift ecosystem. It provides a persistent, secure, and highly available data infrastructure for containerized applications, supporting modern container- and microservices-oriented development environments. ODF is engineered to simplify and automate data management in hybrid and multi-cloud environments, delivering a robust foundation for mission-critical enterprise applications.

#### Key Features of OpenShift Data Foundation:

- **Persistent Storage:** ODF provides a persistent storage layer for containers, essential for enterprise applications such as databases, content management systems, and applications requiring stateful operations.

- **Multicloud and Hybrid:** Designed for hybrid and multicloud environments, ODF delivers a consistent data management experience across various cloud platforms, enabling seamless application and data mobility.

- **Automation and Orchestration:** Deep integration with Kubernetes and OpenShift allows ODF to automate provisioning, scaling, and lifecycle management of storage based on application requirements.

- **High Availability and Resilience:** ODF leverages data replication and snapshotting to ensure high availability and data durability—critical for maintaining business continuity.

- **Data Security:** The solution includes advanced security features such as encryption at rest and in transit, along with customizable security and compliance policies. Our SecNumCloud implementation ensures multi-layered protection:
    - **Encryption at Rest:** The persistent storage provided by OpenShift Data Foundation relies on our underlying block storage infrastructure. As such, all data is encrypted at rest using the **XTS-AES 256** algorithm, compliant with the **FIPS 140-2** standard.
    - **Encryption in Transit:** All access to the platform—including the API, web console, and application traffic via routes—is systematically secured and encrypted using the **TLS** protocol.

#### Benefits of OpenShift Data Foundation:

- **Operational Flexibility:** ODF enables organizations to efficiently manage their data across distributed environments, providing the flexibility needed to meet the evolving demands of modern applications.

- **Simplified Data Management:** By automating numerous data management tasks, ODF reduces complexity and frees up IT resources to focus on higher-value initiatives.

- **Cost Optimization:** ODF’s ability to dynamically adapt to storage requirements helps optimize costs by preventing over-provisioning and enabling more efficient use of available resources.

- **Improved Performance:** Designed to deliver high performance for enterprise applications, ODF includes optimization capabilities tailored to various workload types.

Red Hat OpenShift Data Foundation is an advanced data storage solution that enhances the efficiency, resilience, and security of enterprise applications deployed on OpenShift. By providing persistent, automated, and secure storage, ODF plays a critical role in enabling organizations to fully leverage the potential of container and hybrid cloud technologies.

## General architecture of the platform

### Allgemeines

Die Red Hat OpenShift-Plattform von Cloud Temple ist als regionale Lösung konzipiert und native auf [**drei unterschiedlichen Verfügbarkeitszonen**](../additional_content/concepts_az.md) innerhalb derselben [Region](../additional_content/concepts_regional.md) von Cloud Temple bereitgestellt. Diese dreizonale Architektur erhöht die Verfügbarkeit und Resilienz der Daten erheblich.

Die Plattform besteht aus einem Control Plane und Worker-Knoten, die beide von der Cloud Temple-Infrastruktur verwaltet werden. Die Control Plane ist gleichmäßig auf die drei Verfügbarkeitszonen verteilt, um eine zentrale und sichere Verwaltung zu gewährleisten. Die Worker-Knoten werden hingegen durch Compute-Blades repräsentiert, die so angeordnet sind, dass jede Verfügbarkeitszone eine solche enthält.

Für die Worker-Knoten stehen mehrere Arten von Compute-Blades zur Verfügung, was eine flexible Anpassung an unterschiedliche betriebliche Anforderungen ermöglicht:

| Red Hat OpenShift 4 with Data Foundations - On Demand - 1 month | Einheit | SKU |
| :--- | :--- | :--- |
| OPENSHIFT - Control Plane - 3 Knoten - Region FR1 | 1 dedizierter Plan | csp:fr1:paas:oshift:plan:payg:v1 |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 Kerne / 20 Threads - 64 GB RAM - 512 GB FLASH 1500 IOPS) | 3 dedizierte Worker | csp:fr1:paas:oshift:wkr:tiny:payg:v1 |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 Kerne / 40 Threads - 128 GB RAM - 512 GB FLASH 1500 IOPS) | 3 dedizierte Worker | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 Kerne / 64 Threads - 384 GB RAM - 512 GB FLASH 1500 IOPS) | 3 dedizierte Worker | csp:fr1:paas:oshift:wkr:std:payg:v1 |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 Kerne / 96 Threads - 768 GB RAM - 512 GB FLASH 1500 IOPS) | 3 dedizierte Worker | csp:fr1:paas:oshift:wkr:adv:payg:v1 |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 Kerne / 112 Threads - 1,5 TB RAM - 512 GB FLASH 1500 IOPS) | 3 dedizierte Worker | csp:fr1:paas:oshift:wkr:perf:payg:v1 |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 Kerne / 64 Threads - 512 GB RAM - 512 GB FLASH 1500 IOPS - 2x NVIDIA L40S 48 GB) | 3 dedizierte Worker + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1 |

Die Red Hat OpenShift-Angebote von Cloud Temple sind sowohl im Pay-As-You-Go-Modell als auch im 12-Monats-Reservierungsmodell verfügbar.

**Hinweise**:

1. *Die Aufrechterhaltung der Betriebsbereitschaft und Sicherheit der Control Plane liegt in der Verantwortung von Cloud Temple im Rahmen eines PaaS-Services.*

2. *Zum 15. Juni 2024 ist die Version 1 der Plattform softwareseitig bewusst begrenzt: maximal 30 Worker-Knoten (unabhängig vom Worker-Typ) und insgesamt 50 TiB persistenten Speicher. Sollten diese Grenzen für Ihr Projekt problematisch sein, wenden Sie sich bitte an den Support.*

3. *Jeder Worker-Knoten verfügt standardmäßig über 512 GiB Flash-Speicher. Damit ergibt sich pro Einheit (1 Worker pro AZ) ein Gesamtspeicher von 1,5 TiB.*

4. *Ein Worker-Knoten kann standardmäßig bis zu 250 Pods verwalten. Diese Anzahl ist über den Parameter `podsPerCore` anpassbar – beispielsweise ergeben sich bei 10 Pods pro Kern auf einem 4-Kern-Knoten maximal 40 Pods. Weitere technische Details finden Sie in der [Dokumentation zur Pod-Verwaltung](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) und im [Leitfaden zu OpenShift-Grenzwerten](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *Das PaaS-Angebot OpenShift beinhaltet die natürliche Nutzung der drei Verfügbarkeitszonen, ohne dass eine zusätzliche Buchung erforderlich ist.*

6. *Es ist möglich, den Cluster OpenShift später um zusätzlichen Block-Speicher zu erweitern.*

7. *Die Knoten werden gleichmäßig auf die drei Verfügbarkeitszonen verteilt (1 Knoten pro Zone). Es ist nicht möglich, einen Cluster durch Zuweisung einer größeren Anzahl von Knoten zu einer einzelnen Zone zu unbalancieren.*

### Red Hat Offer deployed within the OpenShift Cloud Temple platform

The platform is a Red Hat OpenShift 4 based on [Red Hat OpenShift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift Data Foundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Backup-Strategie für Ihre OpenShift PaaS-Plattform

Die Sicherung und Wiederherstellung der OpenShift PaaS-Plattform ist für Cloud Temple verantwortlich hinsichtlich des **ETCD**-Teils im Rahmen der Plattformverwaltung. **Die Sicherung und Wiederherstellung für den Anwendungs- und Datenbereich (Deployment und Anwendungsdaten) liegt in der Verantwortung des Auftraggebers.**

Cloud Temple stellt seinen Kunden das Angebot **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)) zur Verfügung, eine Plattform speziell für die Datenverwaltung in Kubernetes-Umgebungen. Kasten K10 wurde entwickelt, um die Anforderungen an den Daten- und Anwendungs-Schutz zu erfüllen, und bietet leistungsstarke Funktionen für Sicherung, Wiederherstellung, Migration und Disaster Recovery. Die Lösung integriert sich nahtlos in Kubernetes-Umgebungen – unabhängig davon, ob diese in Cloud-Clustern oder on-premise betrieben werden – und eignet sich für unterschiedliche Einsatzszenarien, insbesondere die Migration von Clustern zwischen verschiedenen Kubernetes-Distributionen wie Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine und Red Hat OpenShift.

Ein zentrales Anwendungsfeld von Kasten K10 ist die **Migration von Clustern zwischen verschiedenen Kubernetes-Plattformen**. Egal, ob eine Migration auf eine robustere Infrastruktur oder die Konsolidierung bestehender Umgebungen angestrebt wird – Kasten K10 bietet einfache und effiziente Werkzeuge zur Durchführung solcher Migrationen:

- **Sicherung und Schutz der Daten**: Bei der Migration eines Kubernetes Vanilla- oder VMware Tanzu-Clusters in eine Red Hat Kubernetes Engine- oder OpenShift-Umgebung ist der erste Schritt die Sicherung der Anwendungsdaten und deren Zustände. Kasten K10 integriert sich problemlos in die Kubernetes-APIs, um Anwendungen, deren Abhängigkeiten sowie zugehörige Datenvolumes zu identifizieren. Dazu gehören die Sicherung von Persistent Volumes (PV), Datenbanken, Konfigurationen und Secrets. Kasten K10 unterstützt eine breite Palette an Speicheranbietern (S3, Google Cloud Storage, Azure Blob Storage usw.), was die Erstellung von Snapshots für migrierbare Anwendungen ermöglicht. Diese Sicherungen werden sicher gespeichert, wobei Verschlüsselung und granulare Zugriffssteuerung gewährleistet sind, um die Datenintegrität und -sicherheit während des gesamten Prozesses zu gewährleisten.

- **Portabilität und Migration**: Die Migration zwischen Kubernetes-Distributionen wie Vanilla oder Tanzu und Red Hat-Lösungen wie OpenShift oder Kubernetes Engine kann komplex sein, da die Architekturen und Konfigurationen der Plattformen unterschiedlich sind. Kasten K10 vereinfacht diesen Prozess durch eine Abstraktionsschicht für die Portabilität von Anwendungen. Bei der Migration repliziert Kasten K10 Konfigurationen und Daten von einem Quellcluster auf einen Zielcluster, wobei die Besonderheiten jedes Umfelds berücksichtigt werden. Beispielsweise können Kubernetes-Objekte wie ConfigMaps, Secrets, PVs sowie CRDs (Custom Resource Definitions) unter Berücksichtigung der spezifischen Anforderungen jeder Kubernetes-Distribution – sei es ein Red Hat OpenShift- oder Kubernetes Engine-Cluster – migriert werden. Der Prozess ist automatisiert, wodurch das Risiko menschlicher Fehler erheblich reduziert wird. Zudem ermöglicht Kasten K10 eine schrittweise oder vollständige Migration, je nach Bedarf, und bietet Echtzeit-Übersicht über den Status der Migration, was die Verwaltung und Überwachung der Umstellung erleichtert.

- **Multi-Cloud- und Multi-Distribution-Kompatibilität**: Kasten K10 ist für hybride und multi-cloud-Umgebungen konzipiert, was sie zu einem idealen Werkzeug für Organisationen macht, die Anwendungen von Tanzu- oder Vanilla-Clustern in Red Hat-Umgebungen im Cloud-Bereich (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) oder on-premise migrieren möchten. Dies gewährleistet maximale Flexibilität und ermöglicht DevOps-Teams, den besten Umgebungskontext basierend auf den Geschäftsbedürfnissen oder Modernisierungsstrategien auszuwählen.

- **Einfache Verwaltung und Automatisierung**: Kasten K10 bietet eine intuitive Benutzeroberfläche, die Administratoren die Verwaltung von Migrationen und Sicherungen erleichtert, ohne tiefgehende Kenntnisse jeder einzelnen Kubernetes-Plattform zu erfordern. Die Lösung verfügt zudem über Automatisierungsfunktionen, mit denen wiederkehrende Sicherungs- und Migrationsrichtlinien definiert werden können, die nahtlos in CI/CD-Pipelines integriert werden können, um kontinuierliche Operationen zu ermöglichen. Benutzer können Migrationen oder Wiederherstellungen nach Wartungsfenstern planen, Validierungstests nach der Migration durchführen und Prozesse für Failover im Falle von Problemen auf dem Quellcluster automatisieren.

- **Sicherheit und Compliance**: Bei Migrationen in kritische Umgebungen wie Red Hat OpenShift oder Kubernetes Engine sind Daten-Sicherheit und Einhaltung von Standards (ISO, SOC, GDPR usw.) entscheidend. Kasten K10 gewährleistet die Verschlüsselung von Daten im Transit und im Ruhezustand und bietet Audit- und Nachverfolgungsfunktionen für Sicherungs- und Wiederherstellungsoperationen. Diese Funktionen sind unerlässlich, um die Sicherheit der migrierten Daten zu gewährleisten, egal ob in Produktions- oder Testumgebungen. Kasten K10 ist eine unverzichtbare Lösung für Unternehmen, die Kubernetes-Cluster von Vanilla oder VMware Tanzu effizient und sicher in Red Hat Kubernetes Engine oder OpenShift migrieren möchten.

Die Abrechnung erfolgt nach Anzahl der Worker Nodes.

| Einheiten für Redhat OpenShift 4 mit Data Foundations – Worker Node Backup-Lösung | Einheit | SKU                         |
| :------------------------------------------------------------------------------------ | :------ | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes-Daten-Schutz und Anwendungs-Mobilität                  | 3 Worker | csp:fr1:paas:kasten:3wkr:v1 |

**Hinweis**: *Bitte beachten Sie, dass der erforderliche Speicherplatz für die ordnungsgemäße Funktion Ihrer Sicherung auf dem Zielumfeld (in der Regel S3-Speicher) vorab bereitzustellen ist. Dieser Speicherplatz ist nicht in den OpenShift- oder Kasten-Einheiten enthalten.*

**(1)** _OADP ist nicht nativ im Cluster installiert. Nur Kasten ist aktiviert für die Verwaltung von Migrationen, Sicherungen und Wiederherstellungen._

## Load Balancers

The **SecNumCloud OpenShift** environment offers load balancing solutions tailored to multiple functional domains, ensuring secure and optimized traffic management.

The load balancers cover four distinct domains, leveraging different layers of the OSI model:

- **Access to administration tools** (API server and OpenShift console)  
- **Public HTTP/HTTPS traffic**  
- **Private HTTP/HTTPS traffic**  
- **Specialized traffic requiring advanced customization**

### Access to Administration Tools

Access to administration tools is secured by dedicated load balancers. These are protected by enhanced security controls, including a configurable whitelist managed via the **Cloud Temple** console, ensuring strict access management.

### Public HTTP/HTTPS Traffic

The **public LoadBalancers**, based on **HAProxy**, operate at **Layer 4** of the OSI model. They enable the exposure of your workloads via **routes** and **ingresses** using **HTTP/HTTPS**, ensuring efficient and high-performance distribution of incoming traffic.

### Private HTTP/HTTPS Traffic (Connection with your SNC IaaS Services)

**Private LoadBalancers** enable communication with your **SNC IaaS services** without public exposure. Like their public counterparts, they distribute **HTTP/HTTPS** traffic while maintaining a secure and isolated environment.

### Specific Traffic

**Specific traffic** is managed through the LoadBalancer **MetalLB**. It supports advanced requirements that demand fine-grained customization, for example:

- Connecting to a database via **TCP**
- Handling **UDP** streams for real-time or low-latency applications
- Routing advanced protocols such as **QUIC** or **MQTT-SN**, thus providing enhanced flexibility

This solution enables you to handle your specific traffic flows, whether for private interconnections or public exposure needs.

Routing is performed using dedicated **public and private IP addresses**. By default, you are assigned the following IP addresses for service exposure:

- **4 public IP addresses**
- **254 private IP addresses**

If these resources are insufficient to support your workloads, you can request additional IP addresses—either **public** or **private**—from our support team.

> **Note**: The integrated LoadBalancers do not function as a **WAF**. A **WAF as a Service** solution will be available shortly.

## Rechte und Berechtigungen

Hier sind die wichtigsten Berechtigungen, die implementiert wurden:

|       Gruppe       |         API-Endpunkt          |                                                                                       Ressourcenberechtigungen                                                                                       |
|--------------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps               | ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")                 |                                                                                           Secrets Create                                                                                           |
| config.kio.kasten.io|        Profiles               |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
| config.kio.kasten.io|     PolicyPresets,            |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
| config.kio.kasten.io|         Alle                 |                                                                                    die Ressourcen (*) Get, List                                                                                    |
|       Batch        |       CronJobs,               |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
|    Autoscaling     | HorizontalPodAutoscalers      |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|     Networking     |       Ingresses,              |                                                                  NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|       Policy       |  PodDisruptionBudgets         |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|       Route        |      (OpenShift)              |                                                                       Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build        |      (OpenShift)              |                                                          BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
|       Image        |      (OpenShift)              |                                                           ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
|        Apps        |      (OpenShift)              |                                                                 DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|      Template      |      (OpenShift)              |                                                            Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
|   Authorization    |         Roles,                |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        RBAC        |         Roles,                |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Project       |      (OpenShift)              |                                                                                Projects Get, Delete, Update, Patch                                                                                 |
|     Operators      |     Subscriptions,            |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager    |     Certificates,             |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging       |      (OpenShift)              |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Storage       |    VolumeSnapshots            |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|        Ceph        |         (Rook)               |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa       |     BackingStores,            |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket    |  ObjectBucketClaims,          |                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        OCS         |      (OpenShift)              |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Local        |        Storage                 |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons                 |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics       |         Pods,                 |                                                                                             Nodes Get                                                                                              |
|      Security      | PodSecurityPolicyReviews      |                                                                                               Create                                                                                               |
|       Custom       |       Ressourcen               |                                       Verschiedene benutzerdefinierte Ressourcen im Zusammenhang mit Kasten K10, Keycloak usw. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Security Restrictions and Requirements on OpenShift SecNumCloud

### Dedicated Control Plane

Running workloads on the **control plane** is strictly prohibited. This restriction ensures the security and stability of the OpenShift platform on **SecNumCloud** by limiting access to critical resources.

### Restriction of Containers with Elevated Privileges (rootless)

To comply with the security requirements of the **SecNumCloud reference repository**, only **rootless containers** are permitted. This approach enhances security by preventing any privileged access to containers.

Applications requiring elevated privileges must be adapted, as their deployment will not be allowed. This restriction also applies to **Helm Charts** and **operators** using non-rootless images, making their use incompatible with the infrastructure.

### Restrictions on ClusterRoles

In our OpenShift offering, access management at the cluster level is strictly regulated to ensure **security and compliance** with SecNumCloud.

This means there are **restrictions on ClusterRoles**, limiting global privileges. While these restrictions may require technical adjustments, they are essential for enhancing the resilience and stability of the environment.

Our support team is available to assist you in adapting your configurations and advise you on possible alternatives.

### Restrictions on Security Context Constraints (SCC)

**Security Context Constraints (SCC)** are enforced and cannot be modified by users. As a result, container execution parameters (such as access privileges, Linux capabilities, etc.) are predefined and not customizable.

This restriction aims to prevent unauthorized access to critical cluster resources. Applications requiring specific security contexts must be adapted to comply with the existing SCCs.

From an operational perspective, this may require architectural adjustments and modifications to deployment processes, particularly for **Helm Charts** and **operators** that do not adhere to these constraints.

### Limitations on Custom Resource Definitions (CRDs)

To ensure **SecNumCloud compliance**, the use of **Custom Resource Definitions (CRDs)** and custom controllers is restricted.

This measure, tied to cluster-level permissions, prevents the deployment of unauthorized resources that could impact the stability and security of the infrastructure. It also applies to **operators** and **Helm Charts**, with limitations on **RBAC** permissions.

**Non-certified CRDs** may be rejected to maintain cluster integrity. Only **CRDs from certified operators or Helm Charts** are permitted after validation by our services.

Our support team can guide you through this process and advise on best practices to follow.

### Removal of support for dynamic IP addresses for runners

**OpenShift SecNumCloud runners** must be configured with **static IP addresses**.

This requirement ensures secure access to **OpenShift APIs**, administration interfaces, and access management tools of the **Cloud Temple console**.

**Dynamic IP addresses are not supported**, requiring appropriate configuration to ensure connectivity and security of the components.

## Wissenswertes

• Falls die Hardwarekomponenten auf Plattformebene veraltet sind und eine Migration zu neuen Rechenressourcen erforderlich wird, übernimmt Cloud Temple die gesamte Hardware-Migration kostenfrei und ohne Dienstunterbrechung.

• Für die Testung von OpenShift stellt Cloud Temple kein dediziertes Umfeld bereit, doch Sie können die [RedHat-Testplattformen](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) nutzen.

• Für die Automatisierung Ihrer Infrastruktur empfehlen wir den offiziellen Terraform-Anbieter für OpenShift.