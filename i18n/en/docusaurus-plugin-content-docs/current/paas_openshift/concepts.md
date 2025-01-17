---
title: Concepts
---

## Presentation of RedHat Openshift

**Red Hat OpenShift** is an enterprise container platform that automates the deployment, management, and scaling of containerized applications. It is a platform built around Docker, a containerization system that allows packaging an application and its dependencies in a virtual container, and Kubernetes, a container orchestration system that manages the execution and coordination of containers across a cluster of servers.

### Main features of Red Hat OpenShift:

- **Automated deployment and management:** OpenShift simplifies the application deployment process by automating management routines such as scaling, health, and the lifecycle of containers. It provides an integrated environment for the development, testing, and production of applications.

- **Support for multiple languages and services:** The platform supports a wide variety of programming languages (such as Java, Node.js, Python, Ruby, and PHP) and offers integrated services such as messaging, caching, and databases, allowing developers to focus on the code rather than the infrastructure.

- **Continuous Integration (CI) and Continuous Deployment (CD):** OpenShift integrates CI/CD tools that automate the software development pipeline, from the initial commit to production deployment, thus promoting DevOps practices.

- **Operations management:** OpenShift provides tools for monitoring, performance management, and diagnostics of applications and infrastructures, helping operators maintain the health and performance of the systems.

- **Enhanced security:** The platform is designed with built-in security, offering role-based access controls, separation of duties, and automated secret management to protect applications and data.

### Benefits of Red Hat OpenShift:

- **Flexibility:** Developers can work with the tools, languages, and frameworks of their choice.
- **Operational efficiency:** OpenShift optimizes resource usage, reduces time to market, and enhances developer productivity.
- **Scalability:** The platform automatically handles the scaling of applications to meet demand variations.
- **Security and compliance:** With its built-in security policies, OpenShift helps maintain security and compliance standards.

Red Hat OpenShift is a comprehensive solution for developing, deploying, and managing containerized applications, offering a robust, secure, and flexible platform for companies adopting modern software development approaches.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) is an integrated storage and data management solution designed to work seamlessly with the OpenShift ecosystem. It offers a persistent, secure, and highly available data infrastructure for containerized applications, thus supporting modern container and microservice-focused development environments. ODF is designed to simplify and automate data management in hybrid and multicloud environments, providing a solid foundation for critical enterprise applications.

#### Key Features of OpenShift Data Foundation:

- **Persistent Storage:** ODF provides a persistent storage layer for containers, essential for enterprise applications like databases, content management systems, and applications requiring persistent state.

- **Multicloud and Hybrid:** Designed for hybrid and multicloud environments, ODF enables consistent data management experience across different cloud environments, facilitating the mobility of applications and data.

- **Automation and Orchestration:** Deep integration with Kubernetes and OpenShift allows ODF to automate provisioning, scaling, and lifecycle management of storage based on application needs.

- **High Availability and Resilience:** ODF uses data replication and snapshotting to ensure high availability and data durability, essential for business continuity.

- **Data Security:** The solution integrates advanced security features, such as encryption of data at rest and in transit, along with customizable security and compliance policies.

#### Benefits of OpenShift Data Foundation:

- **Operational Flexibility:** ODF enables businesses to efficiently manage their data in distributed environments, offering the flexibility necessary to meet the evolving requirements of modern applications.

- **Simplified Data Management:** By automating many data management tasks, ODF reduces complexity and frees IT resources to focus on higher-value initiatives.

- **Cost Optimization:** ODF's ability to dynamically adapt to storage needs helps optimize costs by avoiding over-provisioning and using available resources more efficiently.

- **Performance Improvement:** ODF is designed to provide high performance for enterprise applications, with optimization capabilities for different workload types.

Red Hat OpenShift Data Foundation is an advanced data storage solution that enhances the efficiency, resilience, and security of enterprise applications deployed on OpenShift. By offering persistent, automated, and secure storage, ODF plays a crucial role in enabling businesses to fully leverage the potential of container and hybrid cloud technologies.

## General Architecture of the Platform

### Overview

The Cloud Temple Red Hat OpenShift platform is designed as a regional offering, natively deployed on **three distinct availability zones** within the same Cloud Temple region. This tri-zonal architecture significantly increases data availability and resilience.

The platform consists of a control plane and worker nodes, all managed by the Cloud Temple infrastructure. The control plane is evenly distributed across the three availability zones, ensuring centralized and secure management. The worker nodes are represented by computing blades, arranged such that each availability zone contains one.

For the worker nodes, several types of computing blades are available, allowing flexible adaptation to various operational needs:

| Redhat Openshift 4 with Data Foundations - On Demand - 1 month Units of Work                                                 | Unit                   | SKU                                  |
| :------------------------------------------------------------------------------------------------------------------------- | :--------------------- | :----------------------------------- |
| OPENSHIFT - Control plane - 3 nodes - Region FR1                                                                            | 1 dedicated plan       | csp:fr1:paas:oshift:plan:payg:v1     |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 cores / 20 threads - 64 GiB ram - 512 GiB FLASH 1500 IOPS)                        | 3 dedicated workers    | csp:fr1:paas:oshift:wkr:tiny:payg:v1 |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 cores / 40 threads - 128 GiB ram - 512 GiB FLASH 1500 IOPS)                      | 3 dedicated workers    | csp:fr1:paas:oshift:wkr:small:payg:v1|
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 cores / 64 threads - 384 GiB ram - 512 GiB FLASH 1500 IOPS)                   | 3 dedicated workers    | csp:fr1:paas:oshift:wkr:std:payg:v1  |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 cores / 96 threads - 768 GiB ram - 512 GiB FLASH 1500 IOPS)                   | 3 dedicated workers    | csp:fr1:paas:oshift:wkr:adv:payg:v1  |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 cores / 112 threads - 1.5 TiB ram - 512 GiB FLASH 1500 IOPS)                      | 3 dedicated workers    | csp:fr1:paas:oshift:wkr:perf:payg:v1 |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 cores / 64 threads - 512 GiB ram - 512 GiB FLASH 1500 IOPS - 2xNVIDIA L40S 48 GiB) | 3 dedicated workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1  |

Red Hat OpenShift Cloud Temple products are available on a pay-as-you-go basis or with 12-month reservations.

**Notes:**

1. *The operational and security maintenance of the control plane is the responsibility of Cloud Temple as part of a PaaS service.*

2. *As of June 15, 2024, version 1 of the platform is intentionally software-limited to a control plane with 30 worker nodes (regardless of worker type) and a global persistent storage of 50 TiB. If these limits are blocking for your project, please contact support.*

3. *Each worker node comes with 512 GiB of flash block storage, totaling 1.5 TiB for each unit of work (1 worker per AZ).*

4. *The OpenShift PaaS offer natively includes access to the 3 availability zones, without the need for additional subscriptions.*

5. *Additional block storage can later be added to the OpenShift cluster.*

6. *Nodes are deployed evenly across the 3 availability zones (1 node per zone). It is not possible to unbalance a cluster by assigning a greater number of nodes to a single zone.*
### RedHat Offer deployed within the Cloud Temple Openshift platform

The platform is a Redhat Openshift 4 based on [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

![](images/oshift_offert.jpg)

## Backup strategy for your Openshift PaaS platform

The backup and restoration of the Openshift PaaS platform is the responsibility of Cloud Temple for the **ETCD** part as part of the platform management. **Backup and restoration for the deployment and application data part is the responsibility of the Sponsor**.

Cloud Temple provides its customers with the **Veeam Kasten K10** offer (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), a platform specialized in data management for Kubernetes environments. Designed to meet data protection needs, it offers robust features for backup, restoration, migration, and disaster recovery. Kasten K10 integrates natively with Kubernetes environments, whether managed on cloud or on-premise clusters, and can adapt to different use cases, including cluster migration between various Kubernetes distributions such as Vanilla Kubernetes, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

One of the major use cases of Kasten K10 is **cluster migration between different Kubernetes platforms**. Whether for transitioning to a more robust infrastructure or consolidating existing environments, Kasten K10 offers simple and effective tools to manage these migrations:

 - **Backup and data protection**: when migrating a Vanilla Kubernetes or VMware Tanzu cluster to Red Hat Kubernetes Engine or OpenShift, the first step is to back up the application data and their states. Kasten K10 integrates easily with Kubernetes APIs to identify applications, their dependencies, and associated data volumes. This includes backing up Persistent Volumes (PV), databases, configurations, and secrets. Kasten K10 supports a wide variety of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.), allowing for the creation of snapshots of applications to be migrated. These backups are then securely stored with encryption and granular access control options, ensuring data security throughout the process.

 - **Portability and migration**: migration between Kubernetes distributions like Vanilla or Tanzu and Red Hat solutions like OpenShift or Kubernetes Engine can be complex due to architectural differences and specific configurations of each platform. Kasten K10 simplifies this process by providing an abstraction layer for application portability. During migration, Kasten K10 replicates configurations and data from a source cluster to a target cluster, considering the specifics of each environment. For example, Kubernetes objects like ConfigMaps, Secrets, PVs, as well as CRDs (Custom Resource Definitions) can be migrated considering the constraints of each Kubernetes distribution, whether it's a Red Hat OpenShift or Kubernetes Engine cluster. The process is automated, significantly reducing the risk of manual errors. Additionally, Kasten K10 allows for progressive or complete migration, depending on needs, and provides real-time visibility into the migration status, facilitating the management and monitoring of the transition.

 - **Multicloud and multi-distribution compatibility**: Kasten K10 is designed to operate in hybrid and multicloud environments, making it an ideal tool for organizations looking to migrate applications from Tanzu or Vanilla clusters to Red Hat environments in the cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on-premise infrastructures. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or infrastructure modernization strategies.

 - **Simplified management and automation**: Kasten K10 offers an intuitive user interface that allows administrators to easily manage migration and backup operations without requiring in-depth expertise on each Kubernetes platform. The solution is also equipped with automation features that allow for the definition of recurring migration and backup policies, integrating into CI/CD pipelines for continuous operations. Users can schedule migrations or restorations based on maintenance windows, perform validation tests after migration, and automate failover processes in case of issues on the source cluster.

 - **Security and compliance**: during migrations to critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are essential aspects. Kasten K10 ensures data encryption in transit and at rest, while offering audit and traceability options for backup and restoration operations. These capabilities are essential to ensure the security of migrated data, whether in production or test environments. Kasten K10 is an essential solution for companies looking to efficiently and securely migrate Vanilla Kubernetes or VMware Tanzu clusters to Red Hat Kubernetes Engine or OpenShift.

 The billing is done based on the number of worker nodes.

| RedHat Openshift 4 with Data Foundations Units of Work - Worker Node Backup Solution | Unit     | SKU                         |
| :------------------------------------------------------------------------------------| :--------| :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |
   
**Note**: *Attention, the necessary disk volume for the proper functioning of your backup must be planned in your backup receiving environment, usually in S3 storage. It is not included in the Openshift or Kasten units of work.*

**(1)** _OADP is not natively installed in the cluster. Only Kasten is enabled for managing migrations, backups, and restoration._

## Rights and Permissions 

Here are the main permissions implemented:

|       Group       |         API          |                                                                                       Resource Permissions                                                                                       |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         All            |                                                                                    resources (*) Get, List                                                                                    |
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
|       Custom       |       Resources        |                                       Various custom resources related to Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Current limitations of the Redhat Openshift offer in the SecNumCloud environment

Here are some limitations induced by the SecNumCloud qualification:

### Dedicated Control Plane

Workloads cannot be executed on the control plane due to inherent restrictions in resource management and platform security for OpenShift on SecNumCloud.

### Prohibition of deploying images with elevated privileges (rootless)

To comply with the SecNumCloud security requirements, it is mandatory to use rootless containers. 

This approach enhances overall security by preventing any privileged access to containers. Applications requiring privileged containers will need to be modified as their deployment will not be allowed.

This restriction also extends to Helm Charts and operators that use non-rootless images, making their deployment impossible within the infrastructure.

### Restrictions on ClusterRole rights

As part of our OpenShift offering, we enforce strict access control at the cluster level in compliance with SecNumCloud requirements. 

This approach involves limiting ClusterRoles for our clients, thereby restricting certain aspects of cluster-wide management. Though this measure might initially seem restrictive, it aims to enhance security and infrastructure stability.

We are aware that this may pose technical challenges, particularly in configuring advanced settings, and potentially implications related to application adaptation or the acquisition of additional tools.

Our support team is available to guide and advise you on this matter.

### SCC context cannot be modified in the SecNumCloud environment

Security Context Constraints (SCCs) are strictly regulated and cannot be modified by users. This limitation significantly impacts container deployment and execution.

In practice, this means that container runtime configurations, such as system access privileges or Linux capabilities, are predefined and non-customizable.

This measure, driven by security requirements, aims to prevent any unauthorized access to critical cluster resources. Consequently, applications needing specific security contexts, especially those requiring privileged access, may face obstacles during deployment.

From a technical perspective, this might require a revision of application architecture and an adaptation of deployment processes to comply with predefined SCCs. Operationally, this constraint can reduce deployment flexibility and increase the complexity of managing certain applications in the OpenShift environment, particularly those using Helm Charts or operators that do not comply with the current SCCs.

### Limitations on Custom Resource Definitions (CRDs)

To comply with SecNumCloud qualification, a significant restriction concerns the use of Custom Resource Definitions (CRDs) and custom controllers. This measure, related to cluster rights, aims to prevent the deployment of potentially unstable or unauthorized custom resources.

This limitation also applies to operators and Helm Charts, with a direct impact on RBAC rights, as CRDs allow for the extension of the Kubernetes API. Therefore, operators and Helm Charts must go through a certification process with our services to ensure their compliance and security.

Custom CRDs, particularly those meeting specific business needs, may be refused in the infrastructure due to the risks they present to the platform's stability and security. This policy, designed to protect the integrity and reliability of the cluster, only allows CRDs from officially certified operators or Helm Charts.

Our support team is available to guide and advise you on best practices in this context.

### No support for dynamic IPs for runners

The OpenShift SecNumCloud platform requires runners to be configured with static IP addresses. This requirement is driven by the need to authorize the IPs managing our Cloud Temple console, necessary for the API access management tool. The authorized IP addresses are also used to access the OpenShift API as well as the administration interfaces of OpenShift and Shiva.

As a result, the use of dynamic IP addresses is not supported for these components, requiring the configuration of static IPs to ensure security and API access.

## Load Balancers
The SecNumCloud Openshift environment offers Load Balancing options at different levels to ensure secure and efficient traffic management. The Load Balancer API is accessible via ports 6443 and 443, with security control ensured by a whitelist managed by the Cloud Temple console. This API uses a public IP address connected to our backbone, but it is not accessible by default, thereby enhancing access security.

For the private Load Balancer, the environment uses Ingress (nginx) as the default solution, which allows for effective internal traffic management. Additionally, TCP support is available via Cloud Temple's IaaS infrastructure, providing extra flexibility for applications that require load balancing at this level.

Regarding the public Load Balancer, level 4 support is provided via Ingress, although there are some current limitations with the "expose" command. This means that the system can reliably handle TCP and UDP connections while continuing to evolve to offer greater compatibility and flexibility.