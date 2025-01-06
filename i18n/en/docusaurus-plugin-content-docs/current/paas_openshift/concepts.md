---
title: Concepts
---

## Presentation of RedHat Openshift

**Red Hat OpenShift** is an enterprise container platform that automates the deployment, management, and scaling of containerized applications. It is a platform built around Docker, a containerization system that allows packaging an application and its dependencies into a virtual container, and Kubernetes, a container orchestration system that manages the execution and coordination of containers across a server cluster.

### Main Features of Red Hat OpenShift:

- **Automated Deployment and Management:** OpenShift simplifies the application deployment process by automating management routines such as scaling, health, and the lifecycle of containers. It provides an integrated environment for the development, testing, and production of applications.

- **Support for Multiple Languages and Services:** The platform supports a wide variety of programming languages (such as Java, Node.js, Python, Ruby, and PHP) and offers integrated services such as messaging, caching, and databases, allowing developers to focus on code rather than infrastructure.

- **Continuous Integration (CI) and Continuous Deployment (CD):** OpenShift integrates CI/CD tools that automate the software development pipeline, from initial commit to production deployment, thus fostering DevOps practices.

- **Operations Management:** OpenShift provides tools for monitoring, performance management, and diagnostics of applications and infrastructures, helping operators maintain system health and performance.

- **Enhanced Security:** The platform is designed with built-in security, offering role-based access controls, separation of duties, and automated secret management to protect applications and data.

### Advantages of Red Hat OpenShift:

- **Flexibility:** Developers can work with the tools, languages, and frameworks of their choice.
- **Operational Efficiency:** OpenShift optimizes resource utilization, reduces time to market, and improves developer productivity.
- **Scalability:** The platform automatically manages application scaling to respond to demand variations.
- **Security and Compliance:** With its integrated security policies, OpenShift helps maintain security and compliance standards.

Red Hat OpenShift is a comprehensive solution for developing, deploying, and managing containerized applications, offering a robust, secure, and flexible platform for enterprises adopting modern software development approaches.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) is an integrated data storage and management solution designed to work seamlessly with the OpenShift ecosystem. It provides a persistent, secure, and highly available data infrastructure for containerized applications, thus supporting modern container and microservices-based development environments. ODF is designed to simplify and automate data management in hybrid and multicloud environments, providing a solid foundation for critical enterprise applications.

#### Key Features of OpenShift Data Foundation:

- **Persistent Storage:** ODF provides a persistent storage layer for containers, essential for enterprise applications like databases, content management systems, and applications requiring a persistent state.

- **Multicloud and Hybrid:** Designed for hybrid and multicloud contexts, ODF enables a consistent data management experience across different cloud environments, facilitating application and data mobility.

- **Automation and Orchestration:** Deep integration with Kubernetes and OpenShift allows ODF to automate the provisioning, scaling, and lifecycle management of storage based on application needs.

- **High Availability and Resilience:** ODF uses data replication and snapshotting to ensure high availability and durability of data, critical for business continuity.

- **Data Security:** The solution incorporates advanced security features, such as encryption of data at rest and in transit, and customizable security and compliance policies.

#### Advantages of OpenShift Data Foundation:

- **Operational Flexibility:** ODF enables enterprises to efficiently manage their data in distributed environments, providing the necessary flexibility to meet the evolving demands of modern applications.

- **Simplified Data Management:** By automating many data management tasks, ODF reduces complexity and frees IT resources to focus on higher-value initiatives.

- **Cost Optimization:** ODF's ability to dynamically adapt to storage needs helps to optimize costs by avoiding over-provisioning and using available resources more efficiently.

- **Performance Enhancement:** ODF is designed to deliver high performance for enterprise applications, with optimization capabilities for different types of workloads.

Red Hat OpenShift Data Foundation is an advanced data storage solution that enhances the efficiency, resilience, and security of enterprise applications deployed on OpenShift. By offering persistent, automated, and secure storage, ODF plays a crucial role in enabling enterprises to fully harness the potential of container and hybrid cloud technologies.

## General Platform Architecture

### Generalities

The Red Hat OpenShift platform from Cloud Temple is designed as a regional offering, deployed natively across **three distinct availability zones** within a single Cloud Temple region. This tri-zonal architecture significantly increases the availability and resilience of data.

The platform is composed of a control plane and worker nodes, all managed by Cloud Temple's infrastructure. The control plane is evenly distributed across the three availability zones, ensuring centralized and secure management. The worker nodes, on the other hand, are represented by compute blades, arranged so that each availability zone contains one.

For the worker nodes, several types of compute blades are available, allowing flexible adaptation to various operational needs:

| Redhat Openshift 4 with Data Foundations - On Demand - 1 month Work Units                                        | Unit                    | SKU                                       |
| :--------------------------------------------------------------------------------------------------------------- | :---------------------- | :---------------------------------------- |
| OPENSHIFT - Control Plane - 3 nodes - Region FR1                                                                | 1 dedicated plan        | csp:fr1:paas:oshift:plan:payg:v1          |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 cores / 20 threads - 64 GB of RAM - 512 GB FLASH 1500 IOPS)            | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:tiny:payg:v1      |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 cores / 40 threads - 128 GB of RAM - 512 GB FLASH 1500 IOPS)          | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:small:payg:v1     |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 cores / 64 threads - 384 GB of RAM - 512 GB FLASH 1500 IOPS)       | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:std:payg:v1       |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 cores / 96 threads - 768 GB of RAM - 512 GB FLASH 1500 IOPS)       | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:adv:payg:v1       |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 cores / 112 threads - 1.5 TB of RAM - 512 GB FLASH 1500 IOPS)          | 3 dedicated workers     | csp:fr1:paas:oshift:wkr:perf:payg:v1      |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 cores / 64 threads - 512 GB of RAM - 512 GB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 dedicated workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1      |

Red Hat OpenShift Cloud Temple products are available on a pay-as-you-go basis or with a 12-month reservation.

**Notes**:

1. *The maintenance of operational and security conditions of the control plane is the responsibility of Cloud Temple under a PaaS service.*

2. *As of June 15, 2024, version 1 of the platform is intentionally software-limited to a control plane with 30 worker nodes (regardless of worker type) and a global persistent storage of 50 TiB. If these limits are blocking for your project, please contact support.*

3. *Each worker node comes with 512 GB of flash block storage, which makes 1.5 TiB per work unit (1 worker per AZ).*

4. *The PaaS Openshift offering natively includes access to all 3 availability zones, without the need for additional subscription.*

5. *It is possible to add block storage to the OpenShift cluster later.*

6. *Nodes are deployed in a balanced manner between the 3 availability zones (1 node per zone). It is not possible to unbalance a cluster by assigning a greater number of nodes to a single zone.*

### RedHat Offer deployed within the Openshift Cloud Temple platform

The platform is a Redhat Openshift 4 based on [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet). 

![](images/oshift_offert.jpg)

## Backup strategy for your Openshift PaaS platform

The backup and restoration of the Openshift PaaS platform is the responsibility of Cloud Temple for the **ETCD** part under the management of the platform. **Backup and restoration for the deployment and application data parts is the responsibility of the Client**. 

RedHat Openshift Platform Plus natively includes the **Openshift Data Protection API (OADP)** and provides **Velero**. You can find the complete documentation on the subject (in English) here: [Backing up and restoring your OpenShift Container Platform cluster](https://docs.redhat.com/fr/documentation/openshift_container_platform/4.8/html/backup_and_restore/index). *(1)*

Cloud Temple optionally offers its clients the **Veeam Kasten K10** solution (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), a platform specialized in data management for Kubernetes environments. Designed to meet data protection needs, it offers robust capabilities for backup, restoration, migration, and disaster recovery. Kasten K10 integrates natively into Kubernetes environments, whether managed on cloud or on-premises clusters, and can adapt to different use cases, including cluster migrations between different Kubernetes distributions such as Vanilla Kubernetes, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift. 

One of the major use cases for Kasten K10 is **the migration of clusters between different Kubernetes platforms**. Whether transitioning to a more robust infrastructure or consolidating existing environments, Kasten K10 offers simple and effective tools to manage these migrations:

 - **Data backup and protection**: When migrating a Vanilla Kubernetes or VMware Tanzu cluster to Red Hat Kubernetes Engine or OpenShift, the first step is to back up application data and their states. Kasten K10 easily integrates with Kubernetes APIs to identify applications, their dependencies, and associated data volumes. This includes backing up Persistent Volumes (PV), databases, configurations, and secrets. Kasten K10 supports a wide variety of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.), allowing snapshots of applications to be created for migration. These backups are then securely stored with encryption options and granular access control, ensuring data security throughout the process.

 - **Portability and migration**: Migration between Kubernetes distributions like Vanilla or Tanzu and Red Hat solutions like OpenShift or Kubernetes Engine can be complex due to differences in architectures and specific configurations of each platform. Kasten K10 simplifies this process by providing an abstraction layer for application portability. During migration, Kasten K10 replicates configurations and data from a source cluster to a target cluster, considering the specifics of each environment. For example, Kubernetes objects like ConfigMaps, Secrets, PVs, as well as CRDs (Custom Resource Definitions) can be migrated considering constraints specific to each Kubernetes distribution, whether it is a Red Hat OpenShift cluster or Kubernetes Engine. The process is automated, significantly reducing the risk of manual errors. Additionally, Kasten K10 allows for progressive or complete migration, depending on needs, and offers real-time visibility into the migration status, facilitating management and monitoring of the transition.

 - **Multi-cloud and multi-distribution compatibility**: Kasten K10 is designed to operate in hybrid and multi-cloud environments, making it an ideal tool for organizations looking to migrate applications from Tanzu or Vanilla clusters to Red Hat environments in the cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on-premises infrastructures. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or infrastructure modernization strategies.

 - **Simplified management and automation**: Kasten K10 offers an intuitive user interface that allows administrators to easily manage migration and backup operations without requiring deep expertise in each Kubernetes platform. The solution is also equipped with automation features that allow for defining recurring migration and backup policies, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restorations according to maintenance windows, perform validation tests after migration, and automate failover processes in case of issues on the source cluster.

 - **Security and compliance**: In the context of migrations to critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are essential aspects. Kasten K10 ensures encryption of data in transit and at rest, while offering auditing and traceability options for backup and restoration operations. These capabilities are critical for ensuring the security of migrated data, whether in production or test environments. Kasten K10 is an essential solution for companies looking to efficiently and securely migrate Vanilla Kubernetes or VMware Tanzu clusters to Red Hat Kubernetes Engine or OpenShift.

 Billing is done based on the number of worker nodes.

| Redhat Openshift 4 with Data Foundations Units of Work - Worker Node Backup Solution  | Unit       | SKU                         |
| :------------------------------------------------------------------------------------ | :--------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers  | csp:fr1:paas:kasten:3wkr:v1 |
   
**Note**: *The disk volume required for the proper functioning of your backup must be planned in the receiving environment of your backup, usually in S3 storage. It is not included in the Openshift or Kasten units of work.*

**(1)** *OADP is not natively installed in the cluster. Only Kasten is activated for managing migrations, backups, and restoration*

## Rights and Permissions 

Here are the main permissions implemented:

|       Group       |         API          |                                                                                       Resources Permissions                                                                                       |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         All         |                                                                                    the resources (*) Get, List                                                                                    |
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
|       Custom       |       Resources        |                                       Various custom resources linked to Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Current Limitations of Redhat Openshift Offering in SecNumCloud Environment

Here are some limitations induced by the SecNumCloud qualification:

### Dedicated Control Plane

Workloads cannot be executed on the control plane due to the inherent restrictions in resource management and platform security of OpenShift on SecNumCloud.

### Prohibition of Deploying Images with Elevated Privileges (rootless)

To comply with the security requirements of the SecNumCloud repository, it is mandatory to use unprivileged (rootless) containers.

This approach enhances overall security by preventing any privileged access to containers. Applications requiring privileged containers will need to be modified, as their deployment will not be allowed.

This restriction also extends to Helm Charts and operators that use non-rootless images, rendering their deployment impossible within the infrastructure.

### Restrictions on ClusterRole Rights

As part of our OpenShift offering, we implement strict access rights management at the cluster level, in accordance with SecNumCloud requirements.

This approach involves limiting ClusterRoles for our clients, thereby restricting certain aspects of overall cluster management. While this measure may initially seem constraining, it aims to enhance the security and stability of the infrastructure.

We are aware that this may pose technical challenges, particularly in configuring advanced settings and potentially involving implications related to adapting your applications or acquiring additional tools.

Our support team is available to guide and advise you on this matter.

### SCC Context Cannot Be Modified in the SecNumCloud Environment

Security Context Constraints (SCC) are subject to strict restrictions and cannot be modified by users. This limitation has significant implications on the deployment and execution of containers.

In practice, this means that container execution settings, such as system access privileges or Linux capabilities, are predefined and not customizable.

This measure, motivated by security requirements, aims to prevent any unauthorized access to critical cluster resources. Therefore, applications requiring specific security contexts, including those requiring privileged access, may encounter obstacles during deployment.

From a technical standpoint, this may involve revising application architecture and adapting deployment processes to comply with predefined SCCs. Operationally, this constraint can reduce deployment flexibility and increase the complexity of managing certain applications in the OpenShift environment, particularly those using Helm Charts or operators that do not comply with the current SCCs.

### Limitations on Custom Resource Definitions (CRDs)

To comply with SecNumCloud qualification, a significant restriction concerns the use of Custom Resource Definitions (CRDs) and custom controllers. This measure, related to cluster rights, aims to prevent the deployment of potentially unstable or unauthorized custom resources.

This limitation also applies to operators and Helm Charts, with a direct impact on RBAC rights, as CRDs extend the Kubernetes API. Consequently, operators and Helm Charts must go through a certification chain with our services to ensure their compliance and security.

Custom CRDs, particularly those meeting specific business needs, may be denied in the infrastructure due to the risks they pose to platform stability and security. This policy, designed to protect the cluster's integrity and reliability, only allows CRDs from officially certified operators or Helm Charts.

Our support team is available to guide and advise you on best practices to adopt in this context.

### No Support for Dynamic IPs for Runners
La plateforme OpenShift SecNumCloud exige que les runners soient configurés avec des adresses IP fixes. Cette exigence est motivée par le besoin d'autoriser les IPs administrant notre console Cloud Temple, nécessaire pour l'outil de gestion d'accès aux API. Les adresses IPs autorisées sont également utilisées pour accéder à l'API OpenShift ainsi qu'aux interfaces d'administration d'OpenShift et de Shiva.

Par conséquent, l'utilisation d'adresses IP dynamiques n'est pas prise en charge pour ces composants, imposant la configuration d'IPs fixes afin de garantir la sécurité et l'accès aux API.

## Load Balancers

The SecNumCloud Openshift environment offers Load Balancing options at different levels to ensure secure and efficient traffic management. The Load Balancer API is accessible via ports 6443 and 443, with security control ensured by a whitelist managed by the Cloud Temple console. This API uses a public IP address connected to our backbone, but it is not accessible by default, thereby enhancing access security.

For the private Load Balancer, the environment uses Ingress (nginx) as the default solution, allowing efficient management of internal traffic. Additionally, TCP support is available via the Cloud Temple IaaS infrastructure, thus providing additional flexibility for applications needing load balancing at this level.

Concerning the public Load Balancer, level 4 support is provided via Ingress, although there are currently some limitations with the "expose" command. This means that the system can reliably handle TCP and UDP connections while continuing to evolve to offer greater compatibility and flexibility.