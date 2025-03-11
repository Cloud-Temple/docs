---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'


## Presentation of RedHat OpenShift

**Red Hat OpenShift** is an enterprise container platform that automates the deployment, management, and scaling of containerized applications. It is a platform built around Docker, a containerization system that allows packaging an application and its dependencies into a virtual container, and Kubernetes, a container orchestration system that manages the execution and coordination of containers on a server cluster.

### Main features of Red Hat OpenShift:

- **Automated deployment and management:** OpenShift simplifies the application deployment process by automating management routines like scaling, health, and container lifecycle. It provides an integrated environment for the development, testing, and production of applications.

- **Support for multiple languages and services:** The platform supports a wide variety of programming languages (such as Java, Node.js, Python, Ruby, and PHP) and offers integrated services such as messaging, caching, and databases, allowing developers to focus on code rather than infrastructure.

- **Continuous Integration (CI) and Continuous Deployment (CD):** OpenShift integrates CI/CD tools that automate the software development pipeline from the initial commit to production deployment, thus promoting DevOps practices.

- **Operations management:** OpenShift provides tools for monitoring, performance management, and diagnostics of applications and infrastructure, helping operators maintain system health and performance.

- **Enhanced security:** The platform is designed with built-in security, offering role-based access controls, the separation of tasks, and automated secret management to protect applications and data.

### Benefits of Red Hat OpenShift:

- **Flexibility:** Developers can work with the tools, languages, and frameworks of their choice.
- **Operational efficiency:** OpenShift optimizes resource usage, reduces time-to-market, and improves developer productivity.
- **Scalability:** The platform automatically manages application scaling to meet demand variations.
- **Security and compliance:** With its integrated security policies, OpenShift helps maintain security and compliance standards.

Red Hat OpenShift is a comprehensive solution for the development, deployment, and management of containerized applications, offering a robust, secure, and flexible platform for enterprises adopting modern software development approaches.

### RedHat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) is an integrated data storage and management solution designed to work seamlessly with the OpenShift ecosystem. It offers a persistent, secure, and highly available data infrastructure for containerized applications, supporting modern container- and microservices-oriented development environments. ODF is designed to simplify and automate data management in hybrid and multicloud environments, providing a solid foundation for critical enterprise applications.

#### Key Features of OpenShift Data Foundation:

- **Persistent Storage:** ODF provides a layer of persistent storage for containers, essential for enterprise applications like databases, content management systems, and applications requiring persistent state.

- **Multicloud and Hybrid Support:** Designed for hybrid and multicloud environments, ODF ensures consistent data management experiences across different cloud environments, facilitating application and data mobility.

- **Automation and Orchestration:** Deep integration with Kubernetes and OpenShift allows ODF to automate provisioning, scaling, and storage lifecycle management based on application needs.

- **High Availability and Resilience:** ODF uses data replication and snapshotting to ensure high availability and data durability, crucial for business continuity.

- **Data Security:** The solution integrates advanced security features such as encryption of data at rest and in transit and customizable security and compliance policies.

#### Benefits of OpenShift Data Foundation:

- **Operational Flexibility:** ODF enables businesses to manage their data effectively in distributed environments, offering the flexibility needed to meet the changing demands of modern applications.

- **Simplified Data Management:** By automating many data management tasks, ODF reduces complexity and frees IT resources to focus on higher-value initiatives.

- **Cost Optimization:** ODF's ability to dynamically adapt to storage needs helps optimize costs by avoiding overprovisioning and using available resources more efficiently.

- **Enhanced Performance:** ODF is designed to deliver high performance for enterprise applications, with optimization capabilities for different types of workloads.

Red Hat OpenShift Data Foundation is an advanced data storage solution that enhances the efficiency, resilience, and security of enterprise applications deployed on OpenShift. By offering persistent, automated, and secure storage, ODF plays a crucial role in enabling enterprises to fully leverage the potential of container and hybrid cloud technologies.

## General Architecture of the Platform

### General Overview

The Red Hat OpenShift platform from Cloud Temple is designed as a regional offering, natively deployed on **three distinct availability zones** within the same Cloud Temple region. This tri-zonal architecture significantly increases the availability and resilience of data.

The platform consists of a control plane and worker nodes, all managed by Cloud Temple infrastructure. The control plane is evenly distributed across the three availability zones, ensuring centralized and secure management. The worker nodes are represented by compute blades, arranged so that each availability zone contains one.

For the worker nodes, various types of compute blades are available, allowing flexible adaptation to different operational needs:

| Redhat Openshift 4 Units of Work with Data Foundations - On Demand - 1 month                                                 | Unit                    | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Control plane - 3 nodes - Region FR1                                                                           | 1 dedicated plan        | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 GB RAM - 512 GB FLASH 1500 IOPS)                        | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 GB RAM - 512 GB FLASH 1500 IOPS)                     | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 GB RAM - 512 GB FLASH 1500 IOPS)                  | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 GB RAM - 512 GB FLASH 1500 IOPS)                   | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 TB RAM - 512 GB FLASH 1500 IOPS)                      | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 GB RAM - 512 GB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB)    | 3 dedicated workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Red Hat OpenShift Cloud Temple products are available on a pay-as-you-go basis or with a 12-month reservation.

**Notes:**

1. *The operational and security upkeep of the control plane is the responsibility of Cloud Temple as part of a PaaS service.*

2. *As of June 15, 2024, version 1 of the platform is intentionally limited to 30 worker nodes (regardless of worker type) for a single control plane and a total persistent storage of 50 TB. If these limits are blocking for your project, please contact support.*

3. *Each worker node comes with 512 GB of flash block storage, totaling 1.5 TB for each unit of work (1 worker per AZ).*
4. *A worker node can handle up to 250 pods by default. This number is adjustable via the podsPerCore parameter - for example, with 10 pods per core on a 4-core node, you will have a maximum of 40 pods. For more technical details, check the [documentation on managing pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) and the [OpenShift limits guide](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *The OpenShift PaaS offering natively includes access to 3 availability zones, without the need for additional subscription.*

6. *It is possible to add block storage to the OpenShift cluster at a later stage.*

7. *The nodes are deployed evenly across the 3 availability zones (1 node per zone). It is not possible to unbalance a cluster by assigning more nodes to a single zone.*

### RedHat Offering Deployed as Part of the OpenShift Cloud Temple Platform

The platform is a Redhat Openshift 4 based on [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Backup Strategy for Your OpenShift PaaS Platform

The backup and restoration of the OpenShift PaaS platform is the responsibility of Cloud Temple for the **ETCD** part under the platform management. **Backup and restoration for deployment and application data is the responsibility of the Contractor**.

Cloud Temple provides its clients with the **Veeam Kasten K10** offer (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), a platform specialized in data management for Kubernetes environments. Designed to meet data protection needs, it offers robust features for backup, restore, migration, and disaster recovery. Kasten K10 integrates natively with Kubernetes environments, whether managed on cloud clusters or on-site, and can adapt to various use cases, including migrating clusters between different Kubernetes distributions such as Vanilla Kubernetes, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

One of the major use cases of Kasten K10 is **the migration of clusters between different Kubernetes platforms**. Whether for a transition to a more robust infrastructure or to consolidate existing environments, Kasten K10 offers simple and effective tools to manage these migrations:

 - **Data backup and protection**: when migrating a Vanilla Kubernetes or VMware Tanzu cluster to Red Hat Kubernetes Engine or OpenShift, the first step is to back up application data and their states. Kasten K10 easily integrates with Kubernetes APIs to identify applications, their dependencies, as well as associated data volumes. This includes backing up Persistent Volumes (PVs), databases, configurations, and secrets. Kasten K10 supports a wide variety of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.), allowing for the creation of snapshots of applications to be migrated. These backups are then securely stored with options for encryption and granular access control, ensuring data security throughout the process.

 - **Portability and migration**: migration between Kubernetes distributions such as Vanilla or Tanzu and Red Hat solutions like OpenShift or Kubernetes Engine can be complex due to architectural differences and specific configurations of each platform. Kasten K10 simplifies this process by providing an abstraction layer for application portability. During migration, Kasten K10 replicates configurations and data from a source cluster to a target cluster while considering the specificities of each environment. For example, Kubernetes objects like ConfigMaps, Secrets, PVs, as well as CRDs (Custom Resource Definitions) can be migrated considering the constraints specific to each Kubernetes distribution, whether it's a Red Hat OpenShift or Kubernetes Engine cluster. The process is automated, significantly reducing the risk of manual errors. Additionally, Kasten K10 allows for progressive or complete migration based on needs and offers real-time visibility into the migration state, facilitating management and monitoring of the transition.

 - **Multi-cloud and multi-distribution compatibility**: Kasten K10 is designed to operate in hybrid and multi-cloud environments, making it an ideal tool for organizations seeking to migrate applications from Tanzu or Vanilla clusters to Red Hat environments in the cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on on-site infrastructures. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or infrastructure modernization strategies.

 - **Simplified management and automation**: Kasten K10 offers an intuitive user interface that allows administrators to easily manage migration and backup operations without requiring deep expertise in each Kubernetes platform. The solution is also equipped with automation features that allow for defining recurring migration and backup policies, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restorations based on maintenance windows, perform validation tests after migration, and automate failover processes in case of issues on the source cluster.

 - **Security and compliance**: in the context of migrations to critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are essential aspects. Kasten K10 ensures data encryption in transit and at rest, while offering audit and traceability options for backup and restoration operations. These capabilities are essential to ensure the security of migrated data, whether in production or test environments. Kasten K10 is an indispensable solution for companies that wish to migrate Vanilla Kubernetes or VMware Tanzu clusters efficiently and securely to Red Hat Kubernetes Engine or OpenShift.

 Billing is based on the number of worker nodes.

| Work Units Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unit     | SKU                         |
| :--------------------------------------------------------------------------------| :--------| :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility          | 3 workers| csp:fr1:paas:kasten:3wkr:v1 |

**Note**: *Please note, the disk volume required for the proper functioning of your backup must be planned on the environment where your backup will be received, generally in S3 storage. It is not included in the OpenShift or Kasten work units.*

**(1)** _OADP is not natively installed in the cluster. Only Kasten is enabled for handling migrations, backups, and restoration._

## Rights and Permissions

Here are the main permissions implemented:

|       Group       |         API            |                                                                                       Resource Permissions                                                                                        |
|-------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core       |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete|
|        Core       |          ("")          |                                                                                           Secrets Create                                                                                          |
|config.kio.kasten.io|       Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                          |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                |
|config.kio.kasten.io|         All           |                                                                                    resources (*) Get, List                                                                                         |
|       Batch       |       CronJobs,        |                                                                         Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                       |
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
|       Custom       |       Resources        |                                       Various custom resources related to Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                               |

## Current Limitations of Redhat Openshift in SecNumCloud Environment

Here are some limitations induced by the SecNumCloud qualification:

### Dedicated Control Plane

Workloads cannot be run on the control plane due to the inherent restrictions on resource management and the security of the OpenShift platform on SecNumCloud.

### Prohibition of deploying images with elevated privileges (rootless)

To comply with the SecNumCloud repository's security requirements, it is mandatory to use rootless containers.

This approach strengthens overall security by preventing privileged access to containers. Applications requiring privileged containers will need to be modified as their deployment will not be allowed.

This restriction also extends to Helm Charts and operators using non-rootless images, rendering their deployment within the infrastructure impossible.

### Restrictions on ClusterRole Rights

Under our OpenShift offering, we implement strict access right management at the cluster level in line with SecNumCloud requirements.

This approach implies a limitation of ClusterRoles for our clients, thus restricting certain aspects of overall cluster management. Although this measure may initially seem restrictive, it aims to enhance the security and stability of the infrastructure.

We recognize that this may pose technical challenges, particularly in configuring advanced parameters, and potentially implications related to adapting your applications or acquiring additional tools.

Our support team is available to guide and advise you on this matter.

### SCC context cannot be modified in SecNumCloud environment

Security Context Constraints (SCC) are subject to strict restrictions and cannot be modified by users. This limitation has significant repercussions on the deployment and execution of containers.

In practice, this means that container runtime settings, such as system access privileges or Linux capabilities, are predefined and not customizable.

This measure, motivated by security requirements, aims to prevent unauthorized access to critical cluster resources. Consequently, applications requiring specific security contexts, especially those needing privileged access, may encounter deployment obstacles.

From a technical perspective, this may imply revising application architecture and adapting deployment processes to comply with predefined SCCs. Operationally, this constraint can reduce deployment flexibility and increase the complexity of managing certain applications in the OpenShift environment, particularly those using Helm Charts or operators not adhering to the applicable SCCs.

### Limitations on Custom Resource Definitions (CRDs)

To comply with SecNumCloud qualification, a significant restriction concerns the use of Custom Resource Definitions (CRDs) and custom controllers. This measure, related to cluster rights, aims to prevent the deployment of potentially unstable or unauthorized custom resources.

This limitation also applies to operators and Helm Charts, with a direct impact on RBAC rights, as CRDs extend the Kubernetes API. Consequently, operators and Helm Charts must go through a certification chain with our services to ensure their compliance and security.
Les CRDs personnalisées, notamment celles répondant à des besoins métiers spécifiques, peuvent être refusées dans l'infrastructure en raison des risques qu'elles présentent pour la stabilité et la sécurité de la plateforme. Cette politique, conçue pour protéger l'intégrité et la fiabilité du cluster, n'autorise que les CRDs provenant d'opérateurs ou de Helm Charts officiellement certifiés.

Notre équipe de support est disponible pour vous guider et vous conseiller sur les bonnes pratiques à adopter dans ce cadre.

### No support for dynamic IPs for runners

The OpenShift SecNumCloud platform requires that runners be configured with fixed IP addresses. This requirement is driven by the need to authorize the IPs managing our Cloud Temple console, necessary for the API access management tool. The authorized IP addresses are also used to access the OpenShift API as well as the OpenShift and Shiva administration interfaces.

Therefore, the use of dynamic IP addresses is not supported for these components, imposing the configuration of fixed IPs to ensure security and access to the APIs.

## Load Balancers

The SecNumCloud Openshift environment offers Load Balancing options at different levels to ensure secure and efficient traffic management. The Load Balancer API is accessible via ports 6443 and 443, with security control ensured by a whitelist managed by the Cloud Temple console. This API uses a public IP address connected to our backbone, but it is not accessible by default, thereby enhancing access security.

For the private Load Balancer, the environment uses Ingress (nginx) as the default solution, which allows for efficient management of internal traffic. Additionally, TCP support is available via Cloud Temple's IaaS infrastructure, offering further flexibility for applications requiring load balancing at this level.

Concerning the public Load Balancer, layer 4 support is provided via Ingress, although there are some current limitations with the "expose" command. This means that the system is capable of reliably handling TCP and UDP connections while continuing to evolve for greater compatibility and flexibility.

**Note**: the integrated Load Balancer does not function as a WAF. A WAF as a Service offering is planned for the second half of 2025.

## Good to know

• If hardware components at the platform level become obsolete and migration to new computing resources is required, Cloud Temple takes care of all hardware migrations at no additional cost and without service interruption.

• To test OpenShift, Cloud Temple does not provide a dedicated environment, but you can use [RedHat test platforms](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• For automating your infrastructure, prefer the official OpenShift Terraform provider rather than that of Cloud Temple.