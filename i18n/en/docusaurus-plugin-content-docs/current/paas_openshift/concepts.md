---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'

## Introduction to RedHat OpenShift

**Red Hat OpenShift** is an enterprise container platform that automates the deployment, management, and scaling of containerized applications. It's a platform built around Docker, a containerization system that allows packaging an application and its dependencies in a virtual container, and Kubernetes, a container orchestration system that manages the execution and coordination of containers on a cluster of servers.

### Key Features of Red Hat OpenShift:

- **Automated Deployment and Management:** OpenShift simplifies the application deployment process by automating management routines such as scaling, health, and container lifecycle. It provides an integrated environment for application development, testing, and production.

- **Support for Multiple Languages and Services:** The platform supports a wide variety of programming languages (such as Java, Node.js, Python, Ruby, and PHP) and offers integrated services such as messaging, caching, and databases, allowing developers to focus on code rather than infrastructure.

- **Continuous Integration (CI) and Continuous Deployment (CD):** OpenShift integrates CI/CD tools that automate the software development pipeline, from initial commit to production deployment, promoting DevOps practices.

- **Operations Management:** OpenShift provides tools for monitoring, performance management, and diagnostics of applications and infrastructures, helping operators maintain system health and performance.

- **Enhanced Security:** The platform is designed with built-in security, offering role-based access controls, separation of duties, and automated secrets management to protect applications and data.

### Advantages of Red Hat OpenShift:

- **Flexibility:** Developers can work with the tools, languages, and frameworks of their choice.
- **Operational Efficiency:** OpenShift optimizes resource utilization, reduces time to market, and improves developer productivity.
- **Scalability:** The platform automatically manages application scaling to meet variations in demand.
- **Security and Compliance:** With its integrated security policies, OpenShift helps maintain security and compliance standards.

Red Hat OpenShift is a comprehensive solution for the development, deployment, and management of containerized applications, offering a robust, secure, and flexible platform for enterprises adopting modern software development approaches.

### RedHat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) is an integrated storage and data management solution designed to work seamlessly with the OpenShift ecosystem. It provides a persistent, secure, and highly available data infrastructure for containerized applications, supporting modern development environments focused on containers and microservices. ODF is designed to simplify and automate data management in hybrid and multicloud environments, providing a solid foundation for critical enterprise applications.

#### Key Features of OpenShift Data Foundation:

- **Persistent Storage:** ODF provides a persistent storage layer for containers, essential for enterprise applications such as databases, content management systems, and applications requiring a persistent state.

- **Multicloud and Hybrid:** Designed for hybrid and multicloud, ODF enables a consistent data management experience across different cloud environments, facilitating application and data mobility.

- **Automation and Orchestration:** Deep integration with Kubernetes and OpenShift allows ODF to automate the provisioning, scaling, and lifecycle management of storage based on application needs.

- **High Availability and Resilience:** ODF uses data replication and snapshotting to ensure high availability and data durability, essential for business continuity.

- **Data Security:** The solution integrates advanced security features, such as data encryption at rest and in transit, as well as customizable security and compliance policies.

#### Benefits of OpenShift Data Foundation:

- **Operational Flexibility:** ODF enables enterprises to effectively manage their data in distributed environments, offering the flexibility needed to meet the changing requirements of modern applications.

- **Simplified Data Management:** By automating many data management tasks, ODF reduces complexity and frees up IT resources to focus on higher-value initiatives.

- **Cost Optimization:** ODF's ability to dynamically adapt to storage needs helps optimize costs by avoiding over-provisioning and using available resources more efficiently.

- **Performance Improvement:** ODF is designed to provide high performance for enterprise applications, with optimization capabilities for different types of workloads.

Red Hat OpenShift Data Foundation is an advanced data storage solution that enhances the efficiency, resilience, and security of enterprise applications deployed on OpenShift. By providing persistent, automated, and secure storage, ODF plays a crucial role in enabling enterprises to fully exploit the potential of container and hybrid cloud technologies.

## General Platform Architecture

### Overview

The Cloud Temple Red Hat OpenShift platform is designed as a regional offering, natively deployed across [**three distinct availability zones**](../additional_content/concepts_az.md) within the same Cloud Temple [region](../additional_content/concepts_regional.md). This tri-zonal architecture significantly increases data availability and resilience.

The platform consists of a control plane and worker nodes, all managed by Cloud Temple infrastructure. The control plane is evenly distributed across the three availability zones, ensuring centralized and secure management. The worker nodes are represented by compute blades, arranged so that each availability zone contains one.

For worker nodes, several types of compute blades are available, allowing for flexible adaptation to various operational needs:

| Red Hat OpenShift 4 with Data Foundations Work Units - On Demand - 1 month                                                | Unit                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Control plane - 3 nodes - FR1 Region                                                                          | 1 dedicated plan            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 GB RAM - 512 GB FLASH 1500 iops)                      | 3 dedicated workers        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 GB RAM - 512 GB FLASH 1500 iops)                   | 3 dedicated workers        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 GB RAM - 512 GB FLASH 1500 iops)                | 3 dedicated workers        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 GB RAM - 512 GB FLASH 1500 iops)                 | 3 dedicated workers        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 TB RAM - 512 GB FLASH 1500 iops)                    | 3 dedicated workers        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 GB RAM - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB) | 3 dedicated workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Cloud Temple Red Hat OpenShift products are available as pay-as-you-go or with a 12-month reservation.

**Notes**:

1. *The operational and security maintenance of the control plane is Cloud Temple's responsibility as part of a PaaS service.*

2. *As of June 15, 2024, version 1 of the platform is deliberately limited in software to a control plane with 30 worker nodes (regardless of worker type) and a global persistent storage of 50 TB. If these limits are blocking for your project, please contact support.*

3. *Each worker node comes with 512GB of flash block storage, which makes 1.5 TB for each work unit (1 worker per AZ).*

4. *A worker node can handle up to 250 pods by default. This number is adjustable via the podsPerCore parameter - for example, with 10 pods per core on a 4-core node, you will have a maximum of 40 pods. For more technical details, see the [pod management documentation](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) and the [OpenShift limits guide](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *The PaaS Openshift offering natively includes access to all 3 availability zones, without the need to subscribe to them additionally.*

6. *It is possible to add block storage to the Openshift cluster later.*

7. *Nodes are deployed in a balanced manner across the 3 availability zones (1 node per zone). It is not possible to unbalance a cluster by assigning more nodes to a single zone.*

### RedHat Offering Deployed as Part of the Cloud Temple Openshift Platform

The platform is a RedHat Openshift 4 based on [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Backup Strategy for Your PaaS Openshift Platform

The backup and restoration of the PaaS Openshift platform is Cloud Temple's responsibility for the **ETCD** part as part of platform management. **Backup and restoration for the deployment and application data part is the responsibility of the Client**.

Cloud Temple provides its customers with the **Veeam Kasten K10** offering (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), a platform specialized in data management for Kubernetes environments. Designed to meet data protection needs, it offers robust features for backup, restoration, migration, and disaster recovery. Kasten K10 integrates natively with Kubernetes environments, whether managed on cloud clusters or on-premises, and can adapt to different use cases, including cluster migration between different Kubernetes distributions such as Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

One of the major use cases for Kasten K10 is **cluster migration between different Kubernetes platforms**. Whether for a transition to a more robust infrastructure or to consolidate existing environments, Kasten K10 offers simple and effective tools to manage these migrations:

 - **Data Backup and Protection**: When migrating from a Kubernetes Vanilla or VMware Tanzu cluster to Red Hat Kubernetes Engine or OpenShift, the first step is to back up application data and their states. Kasten K10 easily integrates with Kubernetes APIs to identify applications, their dependencies, and associated data volumes. This includes backing up Persistent Volumes (PV), databases, configurations, and secrets. Kasten K10 supports a wide variety of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.), allowing for the creation of snapshots of applications to be migrated. These backups are then securely stored with encryption options and granular access control, ensuring data security throughout the process.

 - **Portability and Migration**: Migration between Kubernetes distributions like Vanilla or Tanzu and Red Hat solutions like OpenShift or Kubernetes Engine can be complex due to architectural differences and specific configurations of each platform. Kasten K10 simplifies this process by providing an abstraction layer for application portability. During migration, Kasten K10 replicates configurations and data from a source cluster to a target cluster, taking into account the specificities of each environment. For example, Kubernetes objects like ConfigMaps, Secrets, PVs, and CRDs (Custom Resource Definitions) can be migrated considering the constraints specific to each Kubernetes distribution, whether it's a Red Hat OpenShift or Kubernetes Engine cluster. The process is automated, which significantly reduces the risk of manual errors. Additionally, Kasten K10 allows for progressive or complete migration, depending on needs, and offers real-time visibility into the migration status, facilitating the management and monitoring of the transition.

 - **Multi-cloud and Multi-distribution Compatibility**: Kasten K10 is designed to work in hybrid and multi-cloud environments, making it an ideal tool for organizations looking to migrate applications from Tanzu or Vanilla clusters to Red Hat environments in the cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on on-premises infrastructures. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or infrastructure modernization strategies.

 - **Simplified Management and Automation**: Kasten K10 offers an intuitive user interface that allows administrators to easily manage migration and backup operations without requiring in-depth expertise of each Kubernetes platform. The solution is also equipped with automation features that allow for defining recurring migration and backup policies, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restorations based on maintenance windows, perform validation tests after migration, and automate failover processes in case of issues on the source cluster.

 - **Security and Compliance**: In the context of migrations to critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are essential aspects. Kasten K10 ensures data encryption in transit and at rest, while offering audit and traceability options for backup and restoration operations. These capabilities are essential to ensure the security of migrated data, whether in production or test environments. Kasten K10 is an essential solution for companies that want to efficiently and securely migrate Kubernetes Vanilla or VMware Tanzu clusters to Red Hat Kubernetes Engine or OpenShift.

 Billing is based on the number of worker nodes.

| Red Hat OpenShift 4 with Data Foundations Work Units - Worker Node Backup Solution | Unit     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Note**: *Attention, the disk volume necessary for the proper functioning of your backup must be provided on the environment receiving your backup, generally in S3 storage. It is not included in the Openshift or Kasten work units.*

**(1)** _OADP is not natively installed in the cluster. Only Kasten is enabled for migration, backup, and restoration management_

## Rights and Permissions

Here are the main permissions implemented:

|       Group       |         API          |                                                                                       Resource Permissions                                                                                       |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         All         |                                                                                    resources (*) Get, List                                                                                    |
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

## Current Limitations of the RedHat OpenShift Offering in a SecNumCloud Environment

Here are some limitations induced by the SecNumCloud qualification:

### Dedicated Control Plane

Workloads cannot be executed on the control plane due to inherent restrictions in resource management and security of the OpenShift platform on SecNumCloud.

### Prohibition on Deploying Images with Elevated Privileges (rootless)

To comply with the security requirements of the SecNumCloud framework, it is mandatory to use containers without privileges (rootless).

This approach enhances overall security by preventing any privileged access to containers. Applications requiring containers with privileges will need to be modified, as their deployment will not be authorized.

This restriction also extends to Helm Charts and operators that use non-rootless images, making their deployment impossible within the infrastructure.

### Restrictions on ClusterRole Rights

As part of our OpenShift offering, we implement rigorous access rights management at the cluster level, in accordance with SecNumCloud requirements.

This approach implies a limitation of ClusterRoles for our customers, thus restricting certain aspects of global cluster management. Although this measure may initially seem constraining, it aims to enhance the security and stability of the infrastructure.

We are aware that this may create technical challenges, particularly in configuring advanced parameters, and potentially implications related to adapting your applications or acquiring complementary tools.

Our support team is available to guide and advise you on this subject.

### The SCC Context Cannot Be Modified in the SecNumCloud Environment

Security Context Constraints (SCC) are subject to strict restrictions and cannot be modified by users. This limitation has significant repercussions on the deployment and execution of containers.

In practice, this means that container execution parameters, such as system access privileges or Linux capabilities, are predefined and not customizable.

This measure, motivated by security requirements, aims to prevent any unauthorized access to critical cluster resources. Consequently, applications requiring specific security contexts, particularly those requiring privileged access, may encounter obstacles during deployment.

From a technical perspective, this may imply a revision of application architecture and an adaptation of deployment processes to conform to predefined SCCs. From an operational standpoint, this constraint may reduce deployment flexibility and increase the complexity of managing certain applications in the OpenShift environment, particularly those using Helm Charts or operators that do not comply with the SCCs in force.

### Limitations on Custom Resource Definitions (CRDs)

To comply with the SecNumCloud qualification, an important restriction concerns the use of Custom Resource Definitions (CRDs) and custom controllers. This measure, related to cluster rights, aims to prevent the deployment of potentially unstable or unauthorized custom resources.

This limitation also applies to operators and Helm Charts, with a direct impact on RBAC rights, as CRDs allow extending the Kubernetes API. Consequently, operators and Helm Charts must go through a certification chain with our services to ensure their compliance and security.

Custom CRDs, particularly those responding to specific business needs, may be refused in the infrastructure due to the risks they present to the stability and security of the platform. This policy, designed to protect the integrity and reliability of the cluster, only authorizes CRDs from officially certified operators or Helm Charts.

Our support team is available to guide and advise you on best practices to adopt in this context.

### No Support for Dynamic IPs for Runners

The SecNumCloud OpenShift platform requires runners to be configured with fixed IP addresses. This requirement is motivated by the need to authorize IPs administering our Cloud Temple console, necessary for the API access management tool. The authorized IP addresses are also used to access the OpenShift API as well as the OpenShift and Shiva administration interfaces.

Consequently, the use of dynamic IP addresses is not supported for these components, imposing the configuration of fixed IPs to ensure security and API access.

## Load Balancers

The SecNumCloud Openshift environment offers Load Balancing options at different levels to ensure secure and efficient traffic management. The Load Balancer API is accessible via ports 6443 and 443, with security control ensured by a whitelist managed by the Cloud Temple console. This API uses a public IP address connected to our backbone, but it is not accessible by default, thus reinforcing access security.

For the private Load Balancer, the environment uses Ingress (nginx) as the default solution, which allows for efficient management of internal traffic. Additionally, TCP support is available via Cloud Temple's IaaS infrastructure, thus offering additional flexibility for applications requiring load balancing at this level.

Regarding the public Load Balancer, level 4 support is provided via Ingress, although some limitations currently exist with the "expose" command. This means that the system is capable of reliably managing TCP and UDP connections while continuing to evolve to offer greater compatibility and flexibility.

**Note**: The integrated Load Balancer does not serve as a WAF. A WAF as a Service offering is planned for the second half of 2025.

## Good to Know

• If hardware components at the platform level become obsolete and migration to new computing resources is necessary, Cloud Temple handles all hardware migrations at no additional cost and without service interruption.

• To test OpenShift, Cloud Temple does not provide a dedicated environment, but you can use [RedHat's test platforms](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• For infrastructure automation, prefer the official OpenShift Terraform provider rather than Cloud Temple's.
