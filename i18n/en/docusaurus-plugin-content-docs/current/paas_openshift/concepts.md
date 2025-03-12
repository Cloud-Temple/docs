---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'


## Introduction to RedHat Openshift

**Red Hat OpenShift** is an enterprise container platform that automates the deployment, management, and scaling of containerized applications. It is a platform built around Docker, a containerization system that allows packaging an application and its dependencies in a virtual container, and Kubernetes, a container orchestration system that manages the execution and coordination of containers on a server cluster.

### Key Features of Red Hat OpenShift:

- **Automated Deployment and Management:** OpenShift simplifies the application deployment process by automating routine management tasks like scaling, health, and lifecycle of containers. It provides an integrated environment for the development, testing, and production of applications.

- **Support for Multiple Languages and Services:** The platform supports a wide variety of programming languages (such as Java, Node.js, Python, Ruby, and PHP) and offers integrated services like messaging, caching, and databases, allowing developers to focus on code rather than infrastructure.

- **Continuous Integration (CI) and Continuous Deployment (CD):** OpenShift integrates CI/CD tools that automate the software development pipeline, from the initial commit to production deployment, thereby fostering DevOps practices.

- **Operations Management:** OpenShift provides tools for monitoring, performance management, and diagnostics of applications and infrastructure, helping operators maintain system health and performance.

- **Enhanced Security:** The platform is designed with built-in security, offering role-based access controls, separation of duties, and automated secret management to protect applications and data.

### Benefits of Red Hat OpenShift:

- **Flexibility:** Developers can work with the tools, languages, and frameworks of their choice.
- **Operational Efficiency:** OpenShift optimizes resource use, reduces time-to-market, and boosts developer productivity.
- **Scalability:** The platform automatically manages application scaling to meet demand variations.
- **Security and Compliance:** With its built-in security policies, OpenShift helps maintain security and compliance standards.

Red Hat OpenShift is a comprehensive solution for developing, deploying, and managing containerized applications, offering a robust, secure, and flexible platform for companies adopting modern software development approaches.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) is an integrated storage and data management solution designed to work seamlessly with the OpenShift ecosystem. It provides a persistent, secure, and highly available data infrastructure for containerized applications, thus supporting modern development environments focused on containers and microservices. ODF is designed to simplify and automate data management in hybrid and multicloud environments, providing a solid foundation for critical enterprise applications.

#### Key Features of OpenShift Data Foundation:

- **Persistent Storage:** ODF provides a layer of persistent storage for containers, essential for enterprise applications like databases, content management systems, and applications requiring a persistent state.

- **Multicloud and Hybrid:** Designed for hybrid and multicloud, ODF offers a consistent data management experience across different cloud environments, facilitating application and data mobility.

- **Automation and Orchestration:** Deep integration with Kubernetes and OpenShift allows ODF to automate provisioning, scaling, and lifecycle management of storage based on application needs.

- **High Availability and Resiliency:** ODF uses data replication and snapshotting to ensure high availability and data durability, essential for enterprise business continuity.

- **Data Security:** The solution includes advanced security features, such as encryption of data at rest and in transit, as well as customizable security and compliance policies.

#### Benefits of OpenShift Data Foundation:

- **Operational Flexibility:** ODF enables companies to efficiently manage their data in distributed environments, offering the necessary flexibility to meet the changing demands of modern applications.

- **Simplified Data Management:** By automating many data management tasks, ODF reduces complexity and frees IT resources to focus on higher-value initiatives.

- **Cost Optimization:** ODF's ability to dynamically adapt to storage needs helps optimize costs by avoiding over-provisioning and using available resources more efficiently.

- **Performance Improvement:** ODF is designed to deliver high performance for enterprise applications, with optimization capabilities for different types of workloads.

Red Hat OpenShift Data Foundation is an advanced data storage solution that enhances the efficiency, resiliency, and security of enterprise applications deployed on OpenShift. By offering persistent, automated, and secure storage, ODF plays a crucial role in enabling companies to fully leverage the potential of container and hybrid cloud technologies.

## General Architecture of the Platform

### Overview 

The Cloud Temple Red Hat OpenShift platform is designed as a regional offer, natively deployed on [**three distinct availability zones**](../additional_content/concepts_az.md) within the same [Cloud Temple region](../additional_content/concepts_regional.md). This tri-zonal architecture significantly increases data availability and resilience.

The platform consists of a control plane and worker nodes, all managed by the Cloud Temple infrastructure. The control plane is evenly distributed across the three availability zones, ensuring centralized and secure management. The worker nodes are represented by compute blades, arranged so that each availability zone contains one.

For worker nodes, several types of compute blades are available, allowing flexible adaptation to various operational needs:

| RedHat Openshift 4 with Data Foundations Units of Work - On Demand - 1 month                                                | Unit                    | SKU                                   |
| :-------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Control Plane - 3 nodes - Region FR1                                                                           | 1 dedicated plan        | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 GB RAM - 512 GB FLASH 1500 IOPS)                        | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 GB RAM - 512 GB FLASH 1500 IOPS)                     | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 GB RAM - 512 GB FLASH 1500 IOPS)                  | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 GB RAM - 512 GB FLASH 1500 IOPS)                   | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 TB RAM - 512 GB FLASH 1500 IOPS)                      | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 GB RAM - 512 GB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 dedicated workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Red Hat OpenShift Cloud Temple products are available as pay-as-you-go or with a 12-month reservation.

**Notes**:

1. *Maintaining operational and security conditions of the control plane is Cloud Temple's responsibility as part of a PaaS service.*

2. *As of June 15, 2024, version 1 of the platform is intentionally software-limited to a control plane for 30 worker nodes (regardless of worker type) and total persistent storage of 50 TB. If these limits are blocking for your project, please contact support.*

3. *Each worker node is delivered with 512GB of flash block storage, which results in 1.5 TB per work unit (1 worker per AZ).*
4. *A worker node can manage up to 250 pods by default. This number is adjustable via the podsPerCore parameter - for example, with 10 pods per core on a 4-core node, you will have a maximum of 40 pods. For more technical details, refer to the [documentation on managing pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) and the [OpenShift limits guide](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *The Openshift PaaS offer includes native access to 3 availability zones, without the need for additional subscription.*

6. *It is possible to add block storage to the Openshift cluster at a later stage.*

7. *The nodes are deployed in a balanced manner across the 3 availability zones (1 node per zone). It is not possible to unbalance a cluster by assigning a greater number of nodes to a single zone.*

### RedHat offer deployed within the Openshift Cloud Temple platform

The platform is a Redhat Openshift 4 based on [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Backup strategy for your Openshift PaaS platform

Backup and restoration of the Openshift PaaS platform are the responsibility of Cloud Temple for the **ETCD** part within the scope of platform management. **Backup and restoration for deployment and application data are the responsibility of the Customer**.

Cloud Temple offers its clients the **Veeam Kasten K10** solution (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), a platform specialized in data management for Kubernetes environments. Designed to meet data protection needs, it offers robust features for backup, restoration, migration, and disaster recovery. Kasten K10 integrates natively with Kubernetes environments whether managed on cloud clusters or on-premises, and can adapt to various use cases, including cluster migrations between different Kubernetes distributions such as Vanilla Kubernetes, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

One major use case of Kasten K10 is **cluster migration between different Kubernetes platforms**. Whether transitioning to a more robust infrastructure or consolidating existing environments, Kasten K10 provides simple and efficient tools for managing these migrations:

 - **Data backup and protection**: when migrating a Vanilla Kubernetes or VMware Tanzu cluster to Red Hat Kubernetes Engine or OpenShift, the first step is to back up application data and their states. Kasten K10 easily integrates with Kubernetes APIs to identify applications, their dependencies, and associated data volumes. This includes backing up Persistent Volumes (PV), databases, configurations, and secrets. Kasten K10 supports a wide variety of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.), allowing the creation of application snapshots to be migrated. These backups are then securely stored with encryption and granular access control options, ensuring data security throughout the process.

 - **Portability and migration**: migrating between Kubernetes distributions like Vanilla or Tanzu and Red Hat solutions like OpenShift or Kubernetes Engine can be complex due to architectural differences and specific configurations of each platform. Kasten K10 simplifies this process by providing an abstraction layer for application portability. During migration, Kasten K10 replicates configurations and data from a source cluster to a target cluster, considering the specifics of each environment. For example, Kubernetes objects like ConfigMaps, Secrets, PV, and CRDs (Custom Resource Definitions) can be migrated while accounting for constraints specific to each Kubernetes distribution, whether it's a Red Hat OpenShift or Kubernetes Engine cluster. The process is automated, significantly reducing the risk of manual errors. Additionally, Kasten K10 allows for gradual or complete migrations according to needs and provides real-time visibility into the migration status, facilitating management and monitoring of the transition.

 - **Multi-cloud and multi-distribution compatibility**: Kasten K10 is designed to operate in hybrid and multi-cloud environments, making it an ideal tool for organizations looking to migrate applications from Tanzu or Vanilla clusters to Red Hat environments in the cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on-premises infrastructures. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or infrastructure modernization strategies.

 - **Simplified management and automation**: Kasten K10 offers an intuitive user interface that allows administrators to easily manage migration and backup operations without requiring deep expertise in each Kubernetes platform. The solution also comes equipped with automation features that allow repetitive migration and backup policies to be defined, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restorations based on maintenance windows, perform validation tests post-migration, and automate failover processes in case of issues with the source cluster.

 - **Security and compliance**: when migrating to critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are essential aspects. Kasten K10 ensures data encryption in transit and at rest, while offering auditing and traceability options for backup and restoration operations. These capabilities are essential for ensuring the security of migrated data, whether in production or testing environments. Kasten K10 is an essential solution for companies looking to efficiently and securely migrate Vanilla Kubernetes or VMware Tanzu clusters to Red Hat Kubernetes Engine or OpenShift.

 The billing is based on the number of worker nodes.

| Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution Units | Unit     | SKU                         |
| :--------------------------------------------------------------------------- | :------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility     | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Note**: *Please note, the disk volume required for your backup to function correctly must be planned for in your backup reception environment, usually in S3 storage. It is not included in the Openshift or Kasten solution units.*

**(1)** _OADP is not natively installed in the cluster. Only Kasten is enabled for managing migrations, backups, and restoration_

## Rights and Permissions

Here are the main permissions implemented:

|       Group       |         API           |                                                                                       Resource Permissions                                                                                        |
|-------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core       |       ("")/Apps       |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core       |          ("")         |                                                                                           Secrets Create                                                                                          |
|config.kio.kasten.io|        Profiles      |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                          |
|config.kio.kasten.io|     PolicyPresets    |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                |
|config.kio.kasten.io|         All          |                                                                                    resources (*) Get, List                                                                                         |
|       Batch       |       CronJobs        |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                       |
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
|       Custom       |       Resources        |                                       Various custom resources related to Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Current limitations of the Redhat Openshift offer in the SecNumCloud environment

Here are some limitations induced by the SecNumCloud qualification:

### Dedicated control plane

Workloads cannot be run on the control plane due to the inherent restrictions in resource management and the security of the OpenShift platform on SecNumCloud.

### Prohibition of deploying images with high privileges (rootless)

To comply with SecNumCloud repository security requirements, it is mandatory to use rootless containers.

This approach enhances overall security by preventing any privileged access to containers. Applications requiring privileged containers will need to be modified as their deployment will not be permitted.

This restriction also extends to Helm Charts and operators that use non-rootless images, making their deployment within the infrastructure impossible.

### Restrictions on ClusterRole permissions

Within our OpenShift offer, we implement rigorous access rights management at the cluster level in accordance with SecNumCloud requirements.

This approach involves limiting ClusterRoles for our clients, thus restricting certain aspects of overall cluster management. While this measure may initially seem restrictive, it aims to strengthen the security and stability of the infrastructure.

We recognize that this may lead to technical challenges, particularly in configuring advanced settings, and potentially implications related to adapting your applications or acquiring additional tools.

Our support team is available to guide and advise you on this matter.

### SCC context cannot be modified in the SecNumCloud environment

Security Context Constraints (SCC) are subject to strict restrictions and cannot be modified by users. This limitation has significant implications for container deployment and execution.

In practice, this means that container runtime settings, such as system access privileges or Linux capabilities, are predefined and non-customizable.

This measure, driven by security requirements, aims to prevent any unauthorized access to critical cluster resources. Consequently, applications requiring specific security contexts, especially those needing privileged access, may encounter obstacles during deployment.

From a technical perspective, this may involve a revision of the application architecture and adaptation of deployment processes to comply with predefined SCCs. Operationally, this constraint can reduce deployment flexibility and increase the complexity of managing certain applications in the OpenShift environment, particularly those using Helm Charts or operators that do not comply with the current SCCs.

### Limitations on Custom Resource Definitions (CRDs)

To comply with the SecNumCloud qualification, a significant restriction concerns the use of Custom Resource Definitions (CRDs) and custom controllers. This measure, related to cluster rights, aims to prevent the deployment of potentially unstable or unauthorized custom resources.

This limitation also applies to operators and Helm Charts, with a direct impact on RBAC rights, as CRDs extend the Kubernetes API. Consequently, operators and Helm Charts must undergo a certification process with our services to ensure their compliance and security.
Les CRDs personnalisées, notamment celles répondant à des besoins métiers spécifiques, peuvent être refusées dans l'infrastructure en raison des risques qu'elles présentent pour la stabilité et la sécurité de la plateforme. Cette politique, conçue pour protéger l'intégrité et la fiabilité du cluster, n'autorise que les CRDs provenant d'opérateurs ou de Helm Charts officiellement certifiés.

Notre équipe de support est disponible pour vous guider et vous conseiller sur les bonnes pratiques à adopter dans ce cadre.

### No support for Dynamic IPs for the runners 

The OpenShift SecNumCloud platform requires that runners be configured with static IP addresses. This requirement is motivated by the need to authorize the IPs managing our Cloud Temple console, necessary for the API access management tool. The authorized IP addresses are also used to access the OpenShift API as well as the OpenShift and Shiva administration interfaces.

Therefore, the use of dynamic IP addresses is not supported for these components, imposing the configuration of static IPs to ensure security and API access.

## Load Balancers

The SecNumCloud Openshift environment offers Load Balancing options at different levels to ensure secure and efficient traffic management. The Load Balancer API is accessible via ports 6443 and 443, with security control ensured by a whitelist managed by the Cloud Temple console. This API uses a public IP address connected to our backbone, but it is not accessible by default, thus enhancing access security.

For the private Load Balancer, the environment uses Ingress (nginx) as the default solution, allowing efficient internal traffic management. Additionally, TCP support is available via Cloud Temple’s IaaS infrastructure, offering additional flexibility for applications requiring load balancing at this level.

Regarding the public Load Balancer, level 4 support is provided via Ingress, although some limitations currently exist with the "expose" command. This means that the system can reliably handle TCP and UDP connections while continuing to evolve to offer greater compatibility and flexibility.

**Please note**: the integrated Load Balancer does not function as a WAF. A WAF as a Service offering is planned for the second half of 2025.

## Good to know

• If the hardware components at the platform level become obsolete and migration to new computing resources is necessary, Cloud Temple handles all hardware migrations at no additional cost and without service interruption.

• To test OpenShift, Cloud Temple does not provide a dedicated environment, but you can use [the RedHat test platforms](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• For automating your infrastructure, prioritize the official OpenShift Terraform provider over that of Cloud Temple.