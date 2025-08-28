---
Concepts
---
Importieren von oshift_offert aus './images/oshift_offert.png'

## Anschrift von Red Hat OpenShift

**Red Hat OpenShift** ist eine Unternehmens-Container-Plattform, die den automatisierten Einsatz, die Verwaltung und die Skalierung von Containerisierter Anwendungen übernimmt. Es basiert auf Docker, einem Containerisierungssystem, das es ermöglicht, eine Anwendung sowie deren Abhängigkeiten in einem virtuellen Container zu verpacken, sowie auf Kubernetes, einem Orchestrierungssystem für Container, das die Ausführung und Koordination von Containern auf einem Server-Cluster verwaltet.

### Hauptfunktionen von Red Hat OpenShift:

- **Automatisiertes Deployment und Management:** OpenShift vereinfacht den Prozess des Anwendungsdatensatz-Einsatz, indem es Routinen wie Scaling, Gesundheitsprüfungen und Lebensdauer der Containers automatisiert. Es bietet ein integriertes Umfeld für Entwicklung, Testen und Produktion von Anwendungen.

- **Unterstützung mehrerer Programmiersprachen und Dienste:** Die Plattform unterstützt eine Vielzahl von Programmiersprachen (z.B. Java, Node.js, Python, Ruby, PHP) sowie integrierte Dienste wie Messaging, Caching und Datenbanken, was es Entwicklern ermöglicht, sich auf das Schreiben des Codes zu konzentrieren anstatt auf die Infrastruktur.

- **Integration Continuous (CI) and Deployment Continuous (CD):** OpenShift integriert Tools für CI/CD, die den Software-Entwicklungsprozess automatisieren, von der ersten Commit-Phase bis zum Produktions-Déploiement, was die Praktiken DevOps fördert.

- **Betrieb und Überwachung:** OpenShift bietet Werkzeuge zur Überwachung, Verwaltung der Leistung und Diagnose von Anwendungen sowie Infrastruktur, unterstützt so die Betriebsarbeit bei der Aufrechterhaltung der Gesundheit und des Leistungs der Systeme.

- **Erhöhte Sicherheit:** Die Plattform ist mit einer integrierten Sicherheitsfunktionalität konzipiert, die Rollenbasierte Zugriffssteuerung, Trennung von Aufgaben und automatisierte Verwaltung von Geheimnissen bietet, um Anwendungen und Daten zu schützen.

### Vorteile von Red Hat OpenShift:

- **Flexibilität:** Entwickler können mit ihren bevorzugten Werkzeugen, Programmiersprachen und Frameworks arbeiten.
- **Betriebseffizienz:** OpenShift optimiert die Ressourcennutzung, beschleunigt den Markteinführung und erhöht die Produktivität der Entwickler.
- **Skalierbarkeit:** Die Plattform automatisiert den Skalierungsprozess von Anwendungen, um auf Schwankungen der Nachfrage zu reagieren.
- **Sicherheit und Konformität:** Durch seine integrierten Sicherheitsrichtlinien hilft OpenShift, die Standards für Sicherheit und Konformität aufrechtzuerhalten.

Red Hat OpenShift bietet eine umfassende Lösung für die Entwicklung, den Bereitstellung und die Verwaltung containerisierter Anwendungen, wobei eine robuste, sichere und flexible Plattform für Unternehmen gewährleistet wird, die moderne Softwareentwicklungsansätze verfolgen.

### Red Hat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) ist eine integrierte Lösung für Speicher- und Datenmanagement, die sich nahtlos mit dem OpenShift-Ökosystem verbindet. Sie bietet eine robuste, sichere und hochverfügbare Infrastruktur für Daten, die für kontenergebene Anwendungen gedacht ist, was sie ideal für moderne Entwicklungsumgebungen mit Containern und Microservices macht. ODF vereinfacht und automatisiert die Datenverwaltung in hybriden und multicloud-Umgebungen, wodurch eine solide Grundlage für kritische Unternehmensanwendungen geschaffen wird.

#### Hauptfunktionen von OpenShift Data Foundation:

- **Persistenzspeicherung:** ODF bietet eine Speicherspezies für Container, die für Unternehmensanwendungen wie Datenbanken, Content-Management-Systeme und Anwendungen mit einem szenario persistenten Zustand unerlässlich ist.

- **Multicloud und Hybrid:** ODF ist für hybride und multicloud Umgebungen konzipiert und ermöglicht eine konsistente Datenverwaltung über verschiedene Cloud-Umgebungen hinweg, was die Mobilität von Anwendungen und Daten erleichtert.

- **Automatisierung und Orchestrierung:** Durch die tiefgreifende Integration mit Kubernetes und OpenShift kann ODF den Speicherprovision, das Skalieren und die Lebenszyklusverwaltung des Speichers automatisieren und an die Anforderungen der Anwendungen anpassen.

- **Hohe Verfügbarkeit und Widerstandsfähigkeit:** ODF nutzt Replikation und Snapshots der Daten, um eine hohe Verfügbarkeit und Datensicherheit zu gewährleisten, was für die kontinuierliche Betriebsführung von Unternehmen entscheidend ist.

- **Datensicherheit:** Die Lösung integriert fortschrittliche Funktionen zur Datenverschlüsselung sowie anpassbare Richtlinien und Konformitätsanforderungen für die Datensicherheit.

#### Vorte OpenShift Data Foundation:

- **Fleixibilitat Operativa:** ODF oferece a empresas a capacidade de gerenciar eficientemente seus dados em ambientes distribuídos, proporcionando a flexibilidade necessária para atender às exigências dinâmicas das aplicações modernas.

- **Simplificação da Gestão de Dados:** Ao automatizar muitas tarefas de gestão de dados, ODF reduz a complexidade e libera as recursos IT para se concentrarem em iniciativas de maior valor adicionado.

- **Otimização dos Custos:** A capacidade de ODF de se adaptar dinamicamente aos requisitos de armazenamento ajuda a otimizar os custos, evitando o sobre-provisionamento e utilizando de forma mais eficiente as recursos disponíveis.

- **Melhoria das Performances:** ODF é projetado para fornecer altos níveis de desempenho para aplicações empresariais, com capacidades de otimização para diferentes tipos de carga de trabalho.

Red Hat OpenShift Data Foundation é uma solução de armazenamento de dados avançada que aumenta a eficiência, a resiliência e a segurança das aplicações empresariais implantadas em OpenShift. Oferece armazenamento persistente, automatizado e seguro, desempenhando um papel crucial na capacitação das empresas para explorar plenamente o potencial das tecnologias de contêineres e cloud híbrido.

### Allgemeine Architektur der Plattform

### Allgemeines

Die Plattform Red Hat OpenShift von Cloud Temple ist als regionales Angebot konzipiert und wird native auf drei Verfügbarkeitszonen innerhalb einer Region von Cloud Temple bereitgestellt. Diese dreizonale Architektur erhöht die Verfügbarkeit und Zuverlässigkeit der Daten erheblich.

Die Plattform besteht aus einem Steuerungsplan und Arbeitsnähten, die alle von der Cloud-Infrastruktur von Cloud Temple verwaltet werden. Der Steuerungsplan wird gleichmäßig auf die drei Verfügbarkeitszonen verteilt, um eine zentrale und sichere Verwaltung zu gewährleisten. Die Arbeitsnähte werden durch Rechenblöcke dargestellt, die so angeordnet sind, dass jede Verfügbarkeitszone einen eigenen Block enthält.

Für die Arbeitsnähte stehen verschiedene Arten von Rechenblöcke zur Verfügung, um eine flexible Anpassung an unterschiedliche Betriebsanforderungen zu ermöglichen:

| Red Hat OpenShift 4 mit Datengrundlagen - Nach Bedarf - 1 Monat | Unité                   | SKU                                                                                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :---------------------------------------------------------------------------------- |
| OPENSHIFT - Steuerungsplan - 3 Arbeitsnähte - Region FR1                                                                          | 1 Plan spezifisch       | csp:fr1:paas:oshift:plan:payg:v1                                                                   |
| OPENSHIFT - Arbeitsnähte - Klein - 3 x ( 10 Kerne / 20 Threads - 64 GB RAM - 512 Gio FLASH 1500 IOPS)                      | 3 Dedicated Workers    | csp:fr1:paas:oshift:wkr:tiny:payg:v1                                                                 |
| OPENSHIFT - Arbeitsnähte - Mittel - 3 x ( 20 Kerne / 40 Threads - 128 GB RAM - 512 Gio FLASH 1500 IOPS)                   | 3 Dedicated Workers    | csp:fr1:paas:oshift:wkr:small:payg:v1                                                                 |
| OPENSHIFT - Arbeitsnähte - Standard - 3 x ( 32 Kerne / 64 Threads - 384 GB RAM - 512 Gio FLASH 1500 IOPS)                | 3 Dedicated Workers    | csp:fr1:paas:oshift:wkr:std:payg:v1                                                                 |
| OPENSHIFT - Arbeitsnähte - Fortschritt - 3 x ( 48 Kerne / 96 Threads - 768 GB RAM - 512 Gio FLASH 1500 IOPS)                 | 3 Dedicated Workers    | csp:fr1:paas:oshift:wkr:adv:payg:v1                                                                 |
| OPENSHIFT - Arbeitsnähte - Leistung - 3 x ( 56 Kerne / 112 Threads - 1,5 TB RAM - 512 Gio FLASH 1500 IOPS)                    | 3 Dedicated Workers    | csp:fr1:paas:oshift:wkr:perf:payg:v1                                                                 |
| OPENSHIFT - Arbeitsnähte - GPU - 3 x ( 32 Kerne / 64 Threads - 512 GB RAM - 512 Gio FLASH 1500 IOPS - 2x NVIDIA L40S 48GO) | 3 Dedicated Workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1                                                                   |

Die Produkte Red Hat OpenShift von Cloud Temple sind sowohl auf Zeitabhängigkeit als auch auf Reservierung für 12 Monate verfügbar.

**Hinweise:**

1. *Die Wartung und Sicherstellung der Betriebsbereitschaft des Steuerungsplans liegt in der Verantwortung von Cloud Temple im Rahmen eines PaaS-Dienstes.*

2. *Ab dem 15. Juni 2024 wird die Version 1 der Plattform softwarebedingt auf 30 Worker-Nodes beschränkt, unabhängig vom Arbeitsnähtetype, sowie auf ein globales Speicherplatzvolumen von 50 TiB. Solche Einschränkungen könnten für Ihr Projekt blockierend sein; in diesem Fall wenden Sie sich bitte an unser Support.*

3. *Jeder Arbeitsnachrichtenblock enthält 512 Gio Flash-Speicher, was einem Blockspeicher von 1,5 TiB pro Unit (ein Worker pro Zone) entspricht.*

4. *Ein Arbeitsnachrichtenblock kann bis zu 250 Pods standardmäßig verwalten. Dieses Limit kann über den Parameter podsPerCore angepasst werden, z.B. mit 10 Pods pro Kern auf einem 4-Kern-Prozessor, was maximal 40 Pods erlaubt. Weitere technische Details finden Sie in der [Dokumentation zur Pod-Verwaltung](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) und im [OpenShift-Limitenhandbuch](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *Die PaaS-Lösung OpenShift umfasst die drei Verfügbarkeitszonen aus der Grundlage, ohne dass zusätzliche Abonnements erforderlich sind.*

6. *Es ist möglich, nachträglich Speicherblöcke zum OpenShift-Cluster hinzuzufügen.*

7. *Die Arbeitsnachrichten werden gleichmäßig auf die drei Verfügbarkeitszonen verteilt (ein Nachrichtenblock pro Zone). Es ist nicht möglich, ein Cluster zu ungleichmäßigen zu verteilen, indem man mehrere Nachrichtenblöcke einer Zone zugewiesen wird.*

### Offre RedHat imballée dans le cadre de la plateforme Openshift Cloud Temple

La plateforme est une Redhat Openshift 4, basée sur [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) et inclut [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Data Backup Strategy for Your OpenShift PaaS by Cloud Temple

The responsibility for backing up and restoring the OpenShift Platform-as-a-Service (PaaS) lies with Cloud Temple, specifically for the **ETCD** component responsible for platform management. The deployment and application data backup is the domain of the Commanditaire.

Cloud Temple provides its clients with Veeam Kasten K10 ([Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html))), a specialized platform for managing data in Kubernetes environments. Designed to address data protection needs, it offers robust features for backup, restore, migration, and disaster recovery. Kasten K10 seamlessly integrates with Kubernetes clusters, whether managed on cloud platforms or on-premises, and adapts to various use cases, including migrating clusters between different Kubernetes distributions such as Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

A major usage scenario for Kasten K10 is **data cluster migration across different Kubernetes platforms**. Whether transitioning to a more robust infrastructure or consolidating existing environments, Kasten K10 provides straightforward tools for managing these migrations:

- **Data Backup and Protection**: During migrating clusters from Kubernetes Vanilla or VMware Tanzu to Red Hat Kubernetes Engine or OpenShift, the initial step involves backing up application data and their states. Kasten K10 effortlessly integrates with Kubernetes APIs to identify applications, their dependencies, and associated data volumes (Persistent Volumes - PV), databases, configurations, and secrets. It supports a wide range of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.) for creating application snapshots. These backups are securely stored with encryption and granular access control, ensuring data safety throughout the process.

- **Portability and Migration**: Migrating between Kubernetes distributions like Vanilla or Tanzu and Red Hat solutions (OpenShift, Kubernetes Engine) can be complex due to architectural differences and specific configurations of each platform. Kasten K10 simplifies this by providing an abstraction layer for application portability. During migration, Kasten K10 replicates configurations and data from a source cluster to a target cluster, considering each environment's unique aspects. For instance, Kubernetes objects like ConfigMaps, Secrets, PV, and CRDs (Custom Resource Definitions) can be migrated while respecting constraints specific to each Kubernetes distribution, whether it’s Red Hat OpenShift or Kubernetes Engine. The process is automated, significantly reducing the risk of manual errors. Moreover, Kasten K10 enables both incremental and full migrations based on needs, offering real-time visibility into migration status for efficient management and monitoring of transition.

- **Multi-cloud and Multi-distribution Compatibility**: Designed for hybrid and multi-cloud environments, Kasten K10 makes it an ideal tool for migrating applications from Tanzu or Vanilla clusters to Red Hat cloud platforms (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on-premises infrastructure. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or modernization strategies.

- **Simplified Management and Automation**: Kasten K10 offers an intuitive user interface enabling administrators to manage migration and backup operations effortlessly without in-depth expertise for each Kubernetes distribution. The solution also includes automation features allowing users to define recurring migration and backup policies, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restores based on maintenance windows, perform post-migration validation tests, and automate failover processes in case of issues on the source cluster.

- **Security and Compliance**: In critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are paramount. Kasten K10 ensures data encryption both in transit and at rest, alongside auditing and traceability options for backup and restore operations. These capabilities are crucial for ensuring the security of migrated data, whether in production or testing environments. Kasten K10 is an indispensable solution for companies aiming to efficiently and securely migrate clusters from Kubernetes Vanilla or VMware Tanzu to Red Hat Kubernetes Engine or OpenShift.

Billing is based on worker nodes:

| Unit of Work - Redhat Openshift 4 with Data Foundations Backup Solution | Unit       | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Note**: *Please note that the required disk volume for optimal backup functionality on the reception environment (generally in S3 storage) is to be planned separately and is not included in OpenShift or Kasten worker units.*

**(1)** _OADP is not natively installed within the cluster. Only Kasten is activated for managing migrations, backups, and restores_

## Load Balancers

Das Umgebungs-System **SecNumCloud OpenShift** bietet Lösungen für die Lastverteilung, die auf mehrere Funktionsperiode abgestimmt sind und eine sichere sowie optimierte Verwaltung des Netzflusses gewährleisten.

Die Load Balancer decken vier unterschiedliche Bereiche ab, basierend auf verschiedenen Ebenen des OSI-Modells:

- **Zugang zu Administrationstools** (Server API und OpenShift-Console)
- **Öffentlicher HTTP/HTTPS-Verkehr**
- **Privater HTTP/HTTPS-Verkehr**
- **Verkehr, der eine fortgeschrittene Anpassung erfordert**

### Zugrichtlinigen für Admin-Tools

Der Zugang zu den Admin-Tools wird durch spezielle Lastverteiler gesichert, die mit erhöhten Sicherheitsmaßnahmen ausgestattet sind, einschließlich einer konfigurierbaren Weißliste über die Konsole **Cloud Temple**. Dadurch wird eine strenge Kontrolle der Zugriffsrechte sichergestellt.

### Öffentlicher HTTP/HTTPS-Verkehr

Die **öffentlichen LoadBalancers**, basierend auf **HAProxy**, arbeiten im OSI-Modell an Position 4. Sie ermöglichen die Exposition Ihrer Anwendungsbereiche über **HTTP/HTTPS** durch **Routen** und **Ingress**, was eine effiziente und leistungsstarke Verteilung des eingehenden Verkehrs gewährleistet.

### Private HTTP/HTTPS Traffic (Interconnection with your SNC IaaS services)

The **Private LoadBalancers** enable communication with your **SNC IaaS services** without public exposure, similar to their public counterparts. Just like them, they ensure the distribution of traffic **HTTP/HTTPS**, while maintaining a secure and isolated environment.

### Spezifischer Verkehr 

Der **spezifische Verkehr** wird über den LoadBalancer **MetalLB** verwaltet. Er unterstützt fortgeschrittene Anforderungen, die eine präzise Individualisierung erfordern, wie z.B.:

- Die Verbindung zu einer Datenbank über TCP
- Die Verwaltung von Paketfluss UDP für Anwendungen in Echtzeit oder mit niedriger Latenz
- Der Routing von Protokollen avancés wie QUIC oder MQTT-SN, wodurch die Flexibilität erhöht wird

Diese Lösung ermöglicht es Ihnen, Ihre spezifischen Flussdynamiken zu unterstützen, sowohl für interne als auch für öffentliche Expositionsanforderungen.

Der Routing erfolgt über dedizierte **IP-Adressen öffentlich und privat**. Standardmäßig werden Ihnen Adressen zugewiesen, um Ihre Dienste zu präsentieren:

- **4 öffentliche IP-Adressen**
- **254 private IP-Adressen**

Wenn diese Ressourcen nicht ausreichen, können Sie eine Anfrage bei unseren Diensten stellen, um zusätzliche Adressen zu erhalten, sowohl öffentlich als auch privat.

> **Hinweis**: Die integrierten LoadBalancers bieten keinen **WAF**. Eine WAF-Lösung als Dienst wird in Kürze verfügbar sein.

## Permissions and Access Control

Here are the primary permissions implemented:

| Group Name       | API Path          |                                                                                                  Resource Permissions                                                                                                  |
|------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------????----------------------------------------------------------------------------------------------------|
| Core             | ("")/Apps         | ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
| Core             | (""/)            | Secrets Create                                                                                           |
| config.kio.kasten.io| Profiles        | Get, List, Watch, Create, Update, Patch, Delete                                                                           |
| config.kio.kasten.io| PolicyPresets,  | TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
| config.kio.kasten.io| All             | (*) Get, List                                                                                    |
| Batch            | CronJobs,        | Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
| Autoscaling       | HorizontalPodAutoscalers| Create, Get, List, Watch, Update, Patch, Delete                                                                           |
| Networking       | Ingresses,       | NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
| Policy           | PodDisruptionBudgets  | Create, Get, List, Watch, Update, Patch, Delete                                                                           |
| Route            | (OpenShift)       | Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
| Build            | (OpenShift)       | BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
| Image            | (OpenShift)       | ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
| Apps             | (OpenShift)       | DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
| Template         | (OpenShift)       | Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
| Authorization    | Roles,           | RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
| RBAC             | Roles,           | RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
| Project          | (OpenShift)       | Projects Get, Delete, Update, Patch                                                                                 |
| Operators        | Subscriptions,   | ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
| Cert-Manager     | Certificates,    | CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
| Logging          | (OpenShift)       | ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
| Storage           | VolumeSnapshots     | Get, List, Watch, Create, Update, Patch, Delete                                                                           |
| Ceph             | (Rook)            | CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
| NooBaa            | BackingStores,   | BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
| ObjectBucket     | ObjectBucketClaims, | ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
| OCS               | (OpenShift)       | StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
| Local             | Storage           | LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
| CSI              | Addons            | CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
| Metrics           | Pods, Nodes       | Nodes Get                                                                                              |
| Security          | PodSecurityPolicyReviews| Create                                                                                               |
| Custom            | Resources         | Various custom resources related to Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

### Sicherheits- und Compliance-Einschränkungen auf OpenShift SecNumCloud

SecNumCloud, insbesondere in Kombination mit Red Hat OpenShift, bietet eine Reihe von Sicherheits- und Compliance-Einschränkungen, die sicherstellen, dass sensible Daten und Anwendungen in einer sichere Umgebung betrieben werden. Hier sind einige wichtige Aspekte:

1. **Hardware-basiertes Virtualisierung (HVM)**:
   - SecNumCloud nutzt Hardware-basiertes Virtualisierungstechnologie, um die Sicherheit zu erhöhen. Dies bedeutet, dass jedes Container seine eigene virtuelle Maschine hat und so isoliert ist, dass ein Angriff auf eine Maschine keine Auswirkungen auf andere hat.

2. **Trusted Execution Environments (TEE)**:
   - SecNumCloud unterstützt TEEs wie Intel SGX oder ARM TrustZone, um kritische Bereiche des Betriebssystems und der Anwendungen zu schützen. Diese Technologie stellt sicher, dass sensible Daten und Funktionen vor unbefugtem Zugriff geschützt sind.

3. **Secure Enclaves**:
   - In OpenShift SecNumCloud können Secure Enclaves verwendet werden, um kritische Bereiche der Anwendung in isolierten Umgebungen zu verankern. Dies ist besonders nützlich für die Verarbeitung sensibler Daten und die Durchführung von Authentifizierungs- und Autorisierungsprozessen.

4. **Compliance mit Standards**:
   - SecNumCloud unterstützt verschiedene Compliance-Standards wie FIPS 140-2, Common Criteria (CC) und CSA GPI. Dies stellt sicher, dass die Umgebung den höchsten Sicherheitsanforderungen entspricht.

5. **Zertifizierung**:
   - SecNumCloud ist zertifiziert durch verschiedene Stellen wie BSI (Bundesamt für Sicherheit in der Informationstechnik) und EAL (European Assessment Procedure), was die Zuverlässigkeit und Sicherheit des Systems unterstreicht.

6. **Isolation und Segmentierung**:
   - OpenShift SecNumCloud ermöglicht eine strenge Isolation und Segmentierung von Ressourcen, um potenzielle Schäden zu minimieren. Dies wird durch die Verwendung von Firewalls, Zonen und anderen Sicherheitsmechanismen erreicht.

7. **Automatisierte Compliance-Überwachung**:
   - Mit OpenShift SecNumCloud können Sie automatisierte Überwachungs- und Auditing-Tools einsetzen, um sicherzustellen, dass Ihre Anwendungen und Infrastruktur den geltenden Sicherheitsstandards entsprechen.

8. **Integration mit Red Hat Advanced Cluster Management**:
   - Die Integration von SecNumCloud mit Red Hat Advanced Cluster Management (RHACM) ermöglicht eine zentrale Verwaltung und Überwachung der Sicherheitseinstellungen über mehrere OpenShift-Cluster hinweg.

9. **Zugangskontrolle und Authentifizierung**:
   - SecNumCloud bietet fortschrittliche Zugangskontroll- und Authentifizierungsmechanismen, wie z.B. Multi-Factor Authentication (MFA), um sicherzustellen, dass nur autorisierte Benutzer auf sensible Ressourcen zugreifen können.

10. **Datenschutz durch Technik**:
    - Durch die Nutzung von Technologien wie Homomorphic Encryption und Secure Multi-Party Computation (SMPC) kann SecNumCloud den Datenschutz verbessern, indem sensible Daten verarbeitet werden, ohne dass diese entschlüsselt werden müssen.

Diese Sicherheits- und Compliance-Einschränkungen tragen dazu bei, dass OpenShift SecNumCloud eine robuste Plattform für die Verwaltung von sensiblen Anwendungen und Daten in einer Cloud-Umgebung bietet.

### Dedicated Control Plan  

The execution of workloads on the **control plan** is strictly prohibited. This restriction ensures the security and stability of the OpenShift platform on **SecNumCloud**, by limiting access to critical resources.

### Verbot von Containern mit hohen Privilegien (rootless)

Um die Sicherheitsanforderungen des **SecNumCloud-Repositoriums** zu erfüllen, werden nur **rootless Containers** zulässig sein. Diese Methode verbessert die Sicherheit, indem sie verhindert wird, dass auf die Container von außen hohe Privilegien genutzt werden.

Anwendungen, die hohe Privilegien benötigen, müssen angepasst werden, da ihr Betrieb nicht genehmigt wird. Diese Einschränkung gilt auch für **Helm Charts** und **Operators**, die auf nicht-rootless-Bildern basieren, was deren Nutzung mit der Infrastruktur unmöglich macht.

### Einschränkungen für ClusterRoles

In unserem OpenShift-Angebot wird die Berechtigungskontrolle am Kernbereich streng geregelt, um **Sicherheit und Konformität** mit SecNumCloud sicherzustellen.

Dies bedeutet, dass **Einschränkungen für ClusterRoles eingeführt werden**, die globale Privilegierungen beschränken. Obwohl diese Einschränkungen technische Anpassungen erfordern können, sind sie unerlässlich, um die Widerstandsfähigkeit und Stabilität des Umfelds zu verbessern.

Unser Support-Team steht Ihnen zur Seite, um bei der Anpassung Ihrer Konfigurationen zu helfen und alternative Lösungen zu beraten.

### Einschränkungen der Sicherheitskontexte (SCC)

Die **Sicherheitskontexte (SCC)** werden von Administratoren festgelegt und dürfen nicht vom Benutzer geändert werden. Dadurch sind die Ausführungsbedingungen für Container (Zugriffsrechte, Linux-Kapsel, usw.) vordefiniert und nicht anpassbar.

Diese Einschränkung dient dazu, unbefugten Zugriff auf kritische Ressourcen des Clusters zu verhindern. Anwendungen, die spezifische Sicherheitskontexte erfordern, müssen angepasst werden, um den in Kraft tretenden SCCs zu respektieren.

Auf Betriebsebene kann dies die Anpassung der Architektur und die Anpassung der Deployment-Prozesse, insbesondere für Helm Charts und Operatorn, die diese Einschränkungen nicht einhalten, erfordern.

### Einschränkungen bei der Verwendung von Custom Resource Definitions (CRDs)

Um die **Konformität SecNumCloud** zu gewährleisten, wird die Nutzung von **Custom Resource Definitions (CRDs)** und personalisierten Kontrollern eingeschränkt.

Diese Maßnahme, die mit den Rechten auf dem Cluster zusammenhängt, verhindert den Einsatz unbefugter Ressourcen, die die Stabilität und Sicherheit der Infrastruktur beeinträchtigen könnten. Sie gilt auch für **Operator** und **Helm Charts**, wobei die Berechtigungen **RBAC** eingeschränkt werden.

Nicht zertifizierte CRDs können abgelehnt werden, um die Integrität des Clusters zu gewährleisten. Nur CRDs aus zertifizierten Operatorn oder Helm Charts sind nach der Überprüfung durch unsere Dienste genehmigt.

Unser Support-Team kann Sie bei diesem Prozess unterstützen und Ihnen Empfehlungen für die richtigen Praktiken geben.

### Entfernung der Unterstützung für dynamische Adressen für Runners

Die **OpenShift SecNumCloud-Runners** müssen mit festen IP-Adressen konfiguriert werden.

Diese Anforderung stellt sicher die sichere Zugriffsmöglichkeit auf die **API OpenShift**, die Administrationsoberflächen und die Zugangskontrollen der Konsole **Cloud Temple**.

Dynamische Adressen werden nicht unterstützt; eine entsprechende Konfiguration ist erforderlich, um die Verbindung und Sicherheit der Komponenten sicherzustellen.

## Wissenswertes

• Sobald die Hardware-Komponenten auf Plattform-Ebene obsolet werden und eine Migration auf neue Rechenressourcen erforderlich ist, übernimmt Cloud Temple alle Materialmigrations ohne zusätzliche Kosten und Unterbrechung des Dienstes.

• Für die Testung von OpenShift bietet Cloud Temple kein eigenes Testumgebungs-Environment an, stattdessen können Sie die [Testplattformen von RedHat](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it) nutzen.

• Für die Automatisierung Ihrer Infrastruktur empfehlen wir den offiziellen OpenShift-Provider Terraform.