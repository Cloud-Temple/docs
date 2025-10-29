---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.png'

## Introduction to RedHat OpenShift

**Red Hat OpenShift** is an enterprise container platform that automates the deployment, management, and scaling of containerized applications. It's built around Docker, a containerization system that allows packaging an application along with its dependencies into a container virtual environment, and Kubernetes, a container orchestration system responsible for executing and coordinating containers across a cluster of servers.

### Key Features of Red Hat OpenShift:

- **Automated Deployment and Management:** OpenShift streamlines application deployment by automating routine management tasks such as scaling, health checks, and container lifespan. It offers an integrated environment for development, testing, and production of applications.

- **Multi-language and Service Support:** The platform supports a wide range of programming languages (including Java, Node.js, Python, Ruby, PHP) and provides integrated services like messaging, caching, and databases, enabling developers to focus on code rather than infrastructure.

- **Continuous Integration (CI) and Continuous Deployment (CD):** OpenShift integrates CI/CD tools that automate the software development lifecycle, from initial commit to production deployment, promoting DevOps practices.

- **Operations Management:** OpenShift offers tools for monitoring, performance management, and diagnostics of applications and infrastructure, aiding operations teams in maintaining system health and performance.

- **Enhanced Security:** The platform is built with integrated security features, providing role-based access control, process isolation, and automated secret management to safeguard applications and data.

### Advantages of Red Hat OpenShift:

- **Flexibility:** Developers can work with their preferred tools, languages, and frameworks.
- **Operational Efficiency:** OpenShift optimizes resource usage, reduces time to market, and enhances developer productivity.
- **Scalability:** The platform automatically scales applications in response to changing demand.
- **Security and Compliance:** With integrated security policies, OpenShift assists in maintaining security standards and compliance.

Red Hat OpenShift provides a comprehensive solution for application development, deployment, and management of containerized applications, offering a robust, secure, and flexible platform for businesses adopting modern software development methodologies.

### Red Hat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) is an integrated storage and data management solution designed to seamlessly integrate with the OpenShift ecosystem. It provides a persistent, secure, and highly available data infrastructure for containerized applications, thereby supporting modern development environments centered around containers and microservices. ODF aims to simplify and automate data management in hybrid and multi-cloud environments, offering a solid foundation for enterprise-critical applications.

#### Key Features of Red Hat OpenShift Data Foundation:

- **Persistent Storage:** ODF offers persistent storage layer for containers, crucial for enterprise applications such as databases, content management systems, and any application requiring state persistence.

- **Multi-cloud and Hybrid:** Designed for hybrid and multi-cloud environments, ODF provides a consistent data management experience across various cloud settings, facilitating the mobility of applications and data.

- **Automation and Orchestration:** Deep integration with Kubernetes and OpenShift enables ODF to automate provisioning, scaling, and lifecycle management of storage based on application needs.

- **High Availability and Resilience:** ODF leverages data replication and snapshotting for ensuring high availability and durability of data, vital for maintaining business operations continuity.

- **Data Security:** The solution incorporates advanced data security features such as data encryption at rest and in transit, along with customizable security policies and compliance settings.

#### Advantages of Red Hat OpenShift Data Foundation:

- **Operational Flexibility:** ODF empowers businesses to efficiently manage their data across distributed environments, providing the agility required to meet the evolving demands of modern applications.

- **Simplified Data Management:** By automating numerous data management tasks, ODF reduces complexity and frees up IT resources to focus on value-added initiatives.

- **Cost Optimization:** The ability of ODF to dynamically adapt to storage needs helps optimize costs by avoiding over-provisioning and making better use of available resources.

- **Enhanced Performance:** Designed for high performance, ODF offers optimization capabilities tailored for various workloads, ensuring applications run smoothly.

Red Hat OpenShift Data Foundation is a sophisticated data storage solution that enhances the efficiency, resilience, and security of enterprise applications deployed on OpenShift. Providing persistent, automated, and secure storage, ODF plays a critical role in enabling businesses to fully leverage the potential of container and hybrid cloud technologies.

### General Platform Architecture

### General Information

The Red Hat OpenShift platform by Cloud Temple is designed as a regional offering, deployed natively across **three availability zones** within the same [region](../additional_content/concepts_regional.md) of Cloud Temple. This tri-zonal architecture significantly enhances the platform's availability and data resilience.

The platform consists of a control plane and worker nodes, all managed by Cloud Temple's infrastructure. The control plane is evenly distributed across the three zones for centralized and secure management. Worker nodes are represented as compute blades arranged such that each zone hosts an equivalent number.

For worker nodes, multiple types of compute blades are available, offering flexibility to meet diverse operational needs:

| Red Hat OpenShift 4 with Data Foundations - On Demand - 1 month | Unit                   | SKU                                                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------------------------------ |
| OPENSHIFT - Control Plane - 3 nodes - Region FR1                           | 1 dedicated plan         | csp:fr1:paas:oshift:plan:payg:v1                               |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 Go RAM - 512 Gio FLASH 1500 iops)                      | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:tiny:payg:v1                             |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 Go RAM - 512 Gio FLASH 1500 iops)                   | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:small:payg:v1                             |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x ( 32 cores / 64 threads - 384 Go RAM - 512 Gio FLASH 1500 iops)                | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:std:payg:v1                             |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 Go RAM - 512 Gio FLASH 1500 iops)                 | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:adv:payg:v1                             |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 To RAM - 512 Gio FLASH 1500 iops)                    | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:perf:payg:v1                             |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 Go RAM - 512 Gio FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 dedicated workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1                             |

Red Hat OpenShift Cloud Temple products are available for usage-based or 12-month reservation.

**Notes:**

1. *Maintaining operational readiness and security of the control plane is Cloud Temple's responsibility as a PaaS service.*


2. *As of June 15, 2024, Version 1 of the platform is software-limited to 30 worker nodes (regardless of type) and a global persistent storage of 50 Tio. If these limits are blocking your project, please contact support.*


3. *Each worker node comes with 512Gio of block storage, resulting in 1.5Tio per unit of work (1 worker per AZ).*


4. *A worker node can manage up to 250 pods by default. This number is adjustable via the `podsPerCore` parameter; for instance, with 10 pods per core on a 4-core node, you can have up to 40 pods. For detailed technical information, refer to [Managing Pods documentation](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) and the [OpenShift limits guide](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*


5. *The PaaS OpenShift offering includes native access to the three availability zones, eliminating the need for additional subscriptions.*


6. *It is possible to add block storage to the OpenShift cluster later.*


7. *Nodes are deployed evenly across the three availability zones (1 node per zone). It's not possible to unbalance a cluster by assigning more nodes to a single zone.*

### RedHat Offer Deployed on OpenShift Cloud Temple Platform

The platform is a Redhat OpenShift 4, built upon [RedHat OpenShift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} alt="RedHat Offer" />

## Data Protection Strategy for Your OpenShift PaaS by Cloud Temple

The responsibility for backing up and restoring the OpenShift Platform-as-a-Service (PaaS) lies with Cloud Temple, specifically for the **ETCD** component responsible for platform management. The deployment and application data backup responsibilities are handled by the Client.

Cloud Temple provides its clients with Veeam Kasten K10 ([Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html))), a specialized platform for managing data in Kubernetes environments. Designed to address data protection needs, it offers robust features for backup, restore, migration, and disaster recovery. Kasten K10 seamlessly integrates with Kubernetes clusters, whether managed on cloud platforms or on-premises, and adapts to various use cases, including migrating clusters between different Kubernetes distributions such as Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

A major use case for Kasten K10 is **Kubernetes cluster migration across different platforms**. Whether transitioning to a more robust infrastructure or consolidating existing environments, Kasten K10 provides efficient tools for managing these migrations:

- **Data Backup and Protection**: During migrating Kubernetes Vanilla or VMware Tanzu clusters to Red Hat Kubernetes Engine or OpenShift, the initial step involves backing up application data and states. Kasten K10 integrates easily with Kubernetes APIs to identify applications, their dependencies, and associated volumes. This includes backing up persistent volumes (Persistent Volumes - PV), databases, configurations, and secrets. Kasten K10 supports a wide range of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.), enabling the creation of application snapshots for migration. These backups are securely stored with encryption and granular access control, ensuring data security throughout the process.

- **Portability and Migration**: Migrating between Kubernetes distributions like Vanilla or Tanzu and Red Hat solutions such as OpenShift or Kubernetes Engine can be complex due to architectural differences and specific configurations of each platform. Kasten K10 simplifies this by providing an abstraction layer for application portability. During migration, Kasten K10 replicates configurations and data from a source cluster to a target cluster, considering each environment's unique aspects. For instance, Kubernetes objects like ConfigMaps, Secrets, PV, and CRDs (Custom Resource Definitions) can be migrated while respecting constraints specific to each Kubernetes distribution, whether it’s Red Hat OpenShift or Kubernetes Engine. The process is automated, significantly reducing the risk of manual errors. Kasten K10 also offers incremental or full migration options based on needs and provides real-time visibility into the migration status, facilitating management and monitoring during transition.

- **Multi-cloud and Multi-distribution Compatibility**: Designed for hybrid and multi-cloud environments, Kasten K10 makes it an ideal tool for organizations migrating applications from Tanzu or Vanilla clusters to Red Hat cloud platforms (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on-premises infrastructure. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or modernization strategies.

- **Simplified Management and Automation**: Kasten K10 offers an intuitive user interface enabling administrators to manage migration and backup operations easily without deep expertise in each Kubernetes distribution. The solution also includes automation features for defining recurring migration and backup policies, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restores based on maintenance windows, perform post-migration validation tests, and automate failover processes in case of issues on the source cluster.

- **Security and Compliance**: In critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are paramount. Kasten K10 ensures data encryption both in transit and at rest, along with auditing and traceability options for backup and restore operations. These capabilities are crucial for ensuring the security of migrated data, whether in production or testing environments. Kasten K10 is an indispensable solution for companies aiming to migrate Kubernetes Vanilla or VMware Tanzu clusters efficiently and securely to Red Hat Kubernetes Engine or OpenShift.

Billing is based on worker nodes:

| Unit of Work - Redhat OpenShift 4 with Data Foundations Backup Solution | Unit       | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Note**: *Please note that the required disk volume for optimal backup functionality on the reception environment (generally in S3 storage) is not included in OpenShift or Kasten worker units. It needs to be provisioned separately.*

**(1)** _OADP is not natively installed within the cluster. Only Kasten is activated for managing migrations, backups, and restores_

## Load Balancers 

The SecNumCloud OpenShift environment offers load balancing solutions tailored to multiple functional domains, ensuring secure and optimized traffic management.

These load balancers cover four distinct areas, leveraging different layers of the OSI model:

- **Access to administration tools** (server API and OpenShift console)  
- **Public HTTP/HTTPS traffic**  
- **Private HTTP/HTTPS traffic**  
- **Traffic requiring advanced customization**

### Access to Administration Tools

Access to administration tools is secured through dedicated load balancers. These are protected by enhanced security controls, including an admin-configurable whitelist via the Cloud Temple console, ensuring stringent access management.

### Public HTTP/HTTPS Traffic

The **Public Load Balancers**, based on **HAProxy**, operate at layer 4 of the OSI model. They enable you to expose your workloads via **HTTP/HTTPS** through **routes** and **ingress**, ensuring efficient and high-performance distribution of incoming traffic.

### Private HTTP/HTTPS Traffic (Connecting to Your IaaS SNC Services)

Private LoadBalancers facilitate communication with your **IaaS SNC** services without public exposure. Just like their public counterparts, they ensure the distribution of traffic **HTTP/HTTPS**, while maintaining a secure and isolated environment.

### Specific Traffic

Specific traffic is managed through the LoadBalancer MetalLB. It caters to advanced needs requiring fine customization, such as:

- Connection to a database via TCP
- Management of UDP flows for real-time or low-latency applications
- Routing of advanced protocols like QUIC or MQTT-SN, thus enhancing flexibility

This solution supports your specific traffic, whether it's for private interconnections or public exposure needs.

Routing is handled using dedicated **public and private IP addresses**. By default, you are assigned:

- **4 public IP addresses**
- **254 private IP addresses**

Should these resources be insufficient to accommodate your workloads, you can request additional IPs from our services, either public or private.

> **Note**: The integrated LoadBalancers do not serve as a **WAF**. A WAF as a Service will soon be available.

## Permissions and Access Control

Here are the primary permissions implemented:

|       Group        |         API           |                                                                                       Resource Permissions                                                                                       |
|--------------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------????----------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps      |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")        |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles      |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         All         |                                                                                    all resources (*) Get, List                                                                                    |
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
|        Local        |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics       |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom       |       Resources        |                                       Diverse custom resources linked to Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

### Security Restrictions and Requirements on OpenShift SecNumCloud

OpenShift SecNumCloud impose plusieurs restrictions et exigences de sécurité pour garantir la protection des données sensibles et le respect des normes réglementaires. Voici quelques-unes des principales restrictions et exigences :

1. **Contrôle d'Accès Strict**
   - **Authentification Multi-Facteurs (MFA)** : Utilisation obligatoire de MFA pour toutes les actions critiques, y compris l'accès aux ressources sensibles.
   - **Rôles et Permissions** : Mise en place rigoureuse des rôles d'utilisateur et permissions pour limiter l'accès aux seuls utilisateurs autorisés.

2. **Isolation des Containers**
   - **Séparation des Ressources** : Les containers sont isolés entre eux pour éviter les vulnérabilités de type "container-to-container" (e.g., via namespaces).
   - **Contrôle d'Accès à la Matière** : Utilisation de SELinux ou AppArmor pour contrôler l'accès aux ressources matérielles et logicielles.

3. **Gestion des Clés et des Certificats**
   - **Sécurité des Clés** : Les clés privées sont stockées en toute sécurité, séparées des clés publiques, et utilisent des mécanismes de chiffrement forts (e.g., Hardware Security Modules - HSM).
   - **Gestion des Certificats** : Utilisation de solutions de gestion de certificats robustes pour assurer la validité et l'intégrité des certificats.

4. **Audit et Surveillance**
   - **Journalisation et Audit** : Enregistrement détaillé de toutes les actions critiques, y compris les modifications de configuration, l'accès aux ressources sensibles, et les tentatives d'intrusion.
   - **Surveillance en Temps Réel** : Utilisation de systèmes de surveillance pour détecter activités suspectes immédiatement.

5. **Contrôle des Mises à Jour et des Patches**
   - **Mise à Jour Automatique** : Mise en place de processus automatisés pour appliquer les mises à jour et les correctifs de sécurité sans interruption des services critiques.
   - **Validation des Mises à Jour** : Contrôle rigoureux des mises à jour avant leur déploiement pour éviter les vulnérabilités introduites par des logiciels obsolètes ou non validés.

6. **Conformité Réglementaire**
   - **Réglementations Locales et Internationales** : Conformité aux réglementations spécifiques à l'industrie, telles que GDPR, HIPAA, PCI DSS, etc., pour la protection des données sensibles.

7. **Sécurité des Données en Transit et au Répos**
   - **Chiffrement** : Utilisation de protocoles de chiffrement robustes (TLS 1.2 ou supérieur) pour les communications en transit, ainsi que le chiffrement à repos pour protéger les données stockées.

8. **Sécurité des Applications et des Microservices**
   - **Contrôle d'Entrée/Sortie** : Mise en œuvre de contrôles d'entrée/sortie stricts pour prévenir les attaques par injection (SQLi, XSS, etc.).
   - **Tests de Sécurité** : Intégration continue des tests de sécurité dans le cycle de développement pour identifier et corriger les vulnérabilités dès le début.

9. **Gestion des Vulnérabilités**
   - **Scénarios de Test** : Utilisation de scénarios de test spécifiques pour identifier les vulnérabilités, y compris l'analyse périodique par des outils de détection automatique (VAS).

10. **Planification de la Résilience et de la Reprise après Sinistre**
    - **Sauvegardes et Restauration** : Mise en place de stratégies de sauvegarde régulières et de plans de reprise après sinistre pour minimiser les pertes de données et le temps d'arrêt.

En respectant ces restrictions et exigences, OpenShift SecNumCloud offre un environnement sécurisé pour l'exécution des applications sensibles et la gestion des données critiques.

### Dedicated Control Plan  

Execution of workloads on the **control plan** is strictly prohibited. This restriction ensures the security and stability of the OpenShift platform on **SecNumCloud**, by limiting access to critical resources.

### Prohibition of Root Containers  

To comply with the security requirements of the **SecNumCloud repository**, only **rootless containers** are permitted. This approach enhances security by preventing any privileged access to containers.  

Applications requiring elevated privileges will need to be adapted, as their deployment will not be allowed. This constraint also applies to **Helm Charts** and **operators** utilizing non-rootless images, making their use incompatible with the infrastructure.

### Restrictions on ClusterRoles

In our OpenShift offering, the management of cluster-level access rights is strictly regulated to ensure **security** and compliance with SecNumCloud.

This involves **restrictions on ClusterRoles**, which limit global privileges. While these restrictions may necessitate some technical adjustments, they are crucial for enhancing resilience and stability within the environment.

Our support team is readily available to assist you in adapting your configurations and provide guidance on alternative options.

### Restrictions on Security Context Constraints (SCC)

Security Context Constraints (SCC) are imposed and cannot be modified by users. Consequently, execution container parameters (access privileges, Linux capabilities, etc.) are pre-defined and not customizable.

This constraint aims to prevent unauthorized access to critical cluster resources. Applications requiring specific security contexts must be adapted to comply with the enforced SCCs.

From an operational standpoint, this may necessitate architectural adjustments and process modifications in deployment, particularly for **Helm Charts** and **operators** that do not adhere to these constraints.

### Restrictions on Custom Resource Definitions (CRDs)

To ensure **SecNumCloud compliance**, the use of **Custom Resource Definitions (CRDs)** and custom controllers is restricted.

This measure, linked to cluster permissions, prevents the deployment of unauthorized resources that could compromise the infrastructure's stability and security. It also applies to operators and Helm Charts, with limitations on Role-Based Access Control (RBAC).

Uncertified CRDs can be denied to maintain cluster integrity. Only CRDs originating from certified operators or Helm Charts are allowed after validation by our services.

Our support team can guide you through this process and advise on best practices.

### Removal of Support for Dynamic IP Addresses for Runners

OpenShift SecNumCloud runners must be configured with **fixed IP addresses**.

This requirement ensures secure access to **OpenShift API**, administration interfaces, and authentication management tools within the **Cloud Temple** console.

Dynamic IP addresses are not supported; a specific configuration is needed to ensure connectivity and security of components.

## Tips

* In the event that hardware components at the platform level become obsolete and a migration to new computing resources is required, Cloud Temple handles all hardware migrations without additional cost or service disruption.

* To test OpenShift, Cloud Temple does not provide a dedicated environment; however, you can utilize [RedHat's testing platforms for OpenShift](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

* For infrastructure automation, it is recommended to leverage the official Terraform provider for OpenShift.
