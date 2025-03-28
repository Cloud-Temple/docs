---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'

## Presentation of RedHat Openshift

**Red Hat OpenShift** is an enterprise container platform that automates the deployment, management, and scaling of containerized applications. It is a platform built around Docker, a containerization system that allows you to package an application and its dependencies in a virtual container, and Kubernetes, a container orchestration system, which manages the execution and coordination of containers on a server cluster.

### Main Features of Red Hat OpenShift:

- **Automated Deployment and Management:** OpenShift simplifies the application deployment process by automating management routines such as scaling, health, and container lifecycle. It provides an integrated environment for the development, testing, and production of applications.

- **Support for Multiple Languages and Services:** The platform supports a wide variety of programming languages (such as Java, Node.js, Python, Ruby, and PHP) and offers integrated services such as messaging, caching, and databases, allowing developers to focus on code rather than infrastructure.

- **Continuous Integration (CI) and Continuous Deployment (CD):** OpenShift integrates CI/CD tools that automate the software development pipeline from the initial commit to production deployment, fostering DevOps practices.

- **Operations Management:** OpenShift provides tools for monitoring, performance management, and diagnostics of applications and infrastructure, helping operators maintain system health and performance.

- **Enhanced Security:** The platform is designed with built-in security, offering role-based access controls, segregation of duties, and automated secret management to protect applications and data.

### Benefits of Red Hat OpenShift:

- **Flexibility:** Developers can work with their choice of tools, languages, and frameworks.
- **Operational Efficiency:** OpenShift optimizes resource usage, reduces time to market, and improves developer productivity.
- **Scalability:** The platform automatically handles application scaling to meet varying demand.
- **Security and Compliance:** With its built-in security policies, OpenShift helps maintain security and compliance standards.

Red Hat OpenShift is a comprehensive solution for developing, deploying, and managing containerized applications, offering a robust, secure, and flexible platform for enterprises adopting modern software development approaches.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) is an integrated storage and data management solution designed to work seamlessly with the OpenShift ecosystem. It provides a persistent, secure, and highly available data infrastructure for containerized applications, thus supporting modern container and microservices-driven development environments. ODF is designed to simplify and automate data management in hybrid and multicloud environments, providing a solid foundation for critical enterprise applications.

#### Key Features of OpenShift Data Foundation:

- **Persistent Storage:** ODF provides a persistent storage layer for containers, essential for enterprise applications like databases, content management systems, and applications requiring persistent state.

- **Multicloud and Hybrid:** Designed for hybrid and multicloud, ODF offers a consistent data management experience across different cloud environments, facilitating application and data mobility.

- **Automation and Orchestration:** Deep integration with Kubernetes and OpenShift allows ODF to automate provisioning, scaling, and storage lifecycle management according to application needs.

- **High Availability and Resilience:** ODF uses data replication and snapshotting to ensure high availability and durability of data, essential for business continuity.

- **Data Security:** The solution includes advanced security features, such as at-rest and in-transit data encryption, along with customizable security and compliance policies.

#### Benefits of OpenShift Data Foundation:

- **Operational Flexibility:** ODF enables enterprises to efficiently manage their data in distributed environments, offering the flexibility to meet the changing requirements of modern applications.

- **Simplified Data Management:** By automating many data management tasks, ODF reduces complexity and frees IT resources to focus on higher-value initiatives.

- **Cost Optimization:** ODF's ability to dynamically adapt to storage needs helps optimize costs by preventing over-provisioning and more efficiently using available resources.

- **Performance Improvement:** ODF is designed to deliver high performance for enterprise applications, with optimization capabilities for various workload types.

Red Hat OpenShift Data Foundation is an advanced data storage solution that enhances the efficiency, resilience, and security of enterprise applications deployed on OpenShift. By providing persistent, automated, and secure storage, ODF plays a crucial role in enabling enterprises to fully leverage the potential of container and hybrid cloud technologies.

## General Architecture of the Platform

### Overview

The Cloud Temple Red Hat OpenShift platform is designed as a regional offer, natively deployed on [**three distinct availability zones**](../additional_content/concepts_az.md) within a single [region](../additional_content/concepts_regional.md) of Cloud Temple. This tri-zonal architecture significantly increases the availability and resilience of the data.

The platform consists of a control plane and worker nodes, all managed by the Cloud Temple infrastructure. The control plane is evenly distributed over the three availability zones, ensuring centralized and secure management. The worker nodes are represented by compute blades, arranged so that each availability zone contains one.

For the worker nodes, several types of compute blades are available, allowing flexible adaptation to various operational needs:

| Redhat Openshift 4 with Data Foundations - On Demand - 1 month                          | Unit          | SKU                             |
| :-------------------------------------------------------------------------------------------------- | :-------------- | :----------------------------------- |
| OPENSHIFT - Control plane - 3 nodes - Region FR1                                      | 1 dedicated plan | csp:fr1:paas:oshift:plan:payg:v1 |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 cores / 20 threads - 64 GB of RAM - 512 GB FLASH 1500 IOPS) | 3 dedicated workers | csp:fr1:paas:oshift:wkr:tiny:payg:v1 |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 cores / 40 threads - 128 GB of RAM - 512 GB FLASH 1500 IOPS) | 3 dedicated workers | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 cores / 64 threads - 384 GB of RAM - 512 GB FLASH 1500 IOPS) | 3 dedicated workers | csp:fr1:paas:oshift:wkr:std:payg:v1 |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 cores / 96 threads - 768 GB of RAM - 512 GB FLASH 1500 IOPS) | 3 dedicated workers | csp:fr1:paas:oshift:wkr:adv:payg:v1 |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 cores / 112 threads - 1.5 TB of RAM - 512 GB FLASH 1500 IOPS) | 3 dedicated workers | csp:fr1:paas:oshift:wkr:perf:payg:v1 |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 cores / 64 threads - 512 GB of RAM - 512 GB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 dedicated workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1 |

Cloud Temple's Red Hat OpenShift products are available for pay-as-you-go or 12-month reservations.

**Notes**:

1. *Operational and security maintenance of the control plane is the responsibility of Cloud Temple as a PaaS service.*

2. *As of June 15, 2024, version 1 of the platform is software-limited for a control plane to 30 worker nodes (regardless of worker type) and a global persistent storage of 50 TiB. If these limits are blocking for your project, please contact support.*

3. *Each worker node is delivered with 512 GB of flash block storage, making 1.5 TiB for each unit of work (1 worker per AZ).*

4. *A worker node can manage up to 250 pods by default. This number is adjustable via the podsPerCore parameter - for example, with 10 pods per core on a 4-core node, you will have a maximum of 40 pods. For more technical details, see the [documentation on managing pods](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) and the [OpenShift limits guide](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *The Openshift PaaS offering natively includes access to 3 availability zones, with no need for an additional subscription.*

6. *It is possible to later add block storage to the Openshift cluster.*

7. *Nodes are deployed in a balanced manner across the 3 availability zones (1 node per zone). It is not possible to unbalance a cluster by assigning a larger number of nodes to a single zone.*

### RedHat Offer deployed within the framework of the Openshift Cloud Temple platform

The platform is a Redhat Openshift 4 based on [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Backup Strategy for your Openshift PaaS Platform

Backup and restoration of the Openshift PaaS platform is the responsibility of Cloud Temple for the **ETCD** part under platform management. **Backup and restoration for deployment and application data are the responsibility of the Sponsor**.

Cloud Temple provides its clients with the **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), a platform specialized in data management for Kubernetes environments. Designed to meet data protection needs, it offers robust features for backup, restoration, migration, and disaster recovery. Kasten K10 integrates natively into Kubernetes environments, whether managed on cloud or on-prem clusters, and can adapt to different use cases, including cluster migration between various Kubernetes distributions like Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

One of the major use cases of Kasten K10 is **cluster migration between different Kubernetes platforms**. Whether transitioning to a more robust infrastructure or consolidating existing environments, Kasten K10 provides simple and effective tools to manage these migrations:

 - **Backup and Data Protection**: When migrating a Kubernetes Vanilla or VMware Tanzu cluster to Red Hat Kubernetes Engine or OpenShift, the first step is to back up application data and their states. Kasten K10 easily integrates with Kubernetes APIs to identify applications, their dependencies, and associated data volumes. This includes backing up Persistent Volumes (PVs), databases, configurations, and secrets. Kasten K10 supports a wide variety of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.), allowing the creation of snapshots of applications to be migrated. These backups are then stored securely with encryption options and granular access control, ensuring data security throughout the process.

 - **Portability and Migration**: Migration between Kubernetes distributions such as Vanilla or Tanzu and Red Hat solutions like OpenShift or Kubernetes Engine can be complex due to differences in architectures and specific configurations of each platform. Kasten K10 simplifies this process by providing an abstraction layer for application portability. During migration, Kasten K10 replicates the configurations and data from a source cluster to a target cluster, taking into account the specifics of each environment. For example, Kubernetes objects like ConfigMaps, Secrets, PVs, as well as CRDs (Custom Resource Definitions) can be migrated considering the constraints specific to each Kubernetes distribution, whether it's a Red Hat OpenShift or Kubernetes Engine cluster. The process is automated, significantly reducing the risk of manual errors. Additionally, Kasten K10 allows for a gradual or complete migration, depending on the needs, and offers real-time visibility on the migration status, thus facilitating the management and monitoring of the transition.

 - **Multi-cloud and Multi-distribution Compatibility**: Kasten K10 is designed to work in hybrid and multi-cloud environments, making it an ideal tool for organizations seeking to migrate applications from Tanzu or Vanilla clusters to Red Hat environments in the cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on-prem infrastructures. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or infrastructure modernization strategies.

 - **Simplified Management and Automation**: Kasten K10 offers an intuitive user interface that allows administrators to easily manage migration and backup operations without requiring deep expertise in each Kubernetes platform. The solution is also equipped with automation features that allow the definition of recurring migration and backup policies, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restorations based on maintenance windows, perform validation tests after migration, and automate failover processes in case of issues on the source cluster.

 - **Security and Compliance**: When migrating to critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are essential aspects. Kasten K10 ensures data encryption in transit and at rest, while offering audit and traceability options for backup and restoration operations. These capabilities are crucial for ensuring the security of migrated data, whether in production or test environments. Kasten K10 is an indispensable solution for companies wishing to migrate Kubernetes Vanilla or VMware Tanzu clusters to Red Hat Kubernetes Engine or OpenShift efficiently and securely.

 Billing is done per number of worker nodes.

| Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution Work Units | Unit     | SKU                         |
| :------------------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility                            | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Note** : *Please note, the disk volume necessary for the proper functioning of your backup must be planned on the backup reception environment, usually in S3 storage. It is not included in the Openshift or Kasten work units.*

**(1)** _OADP is not natively installed in the cluster. Only Kasten is enabled for management of migrations, backups, and restoration_

## Load Balancers

The **SecNumCloud OpenShift** environment offers load balancing solutions adapted to several functional scopes, ensuring secure and optimized traffic management.

The load balancers cover four distinct scopes, relying on different levels of the OSI model:

- **Access to administration tools** (API server and OpenShift console)  
- **Public HTTP/HTTPS traffic**  
- **Private HTTP/HTTPS traffic**  
- **Specific traffic requiring advanced customization**  

### Access to Administration Tools  

Access to administration tools is secured by dedicated load balancers. These are protected by enhanced security controls, notably a whitelist manageable via the **Cloud Temple** console, ensuring strict access management.

### Public HTTP/HTTPS Traffic  

The **public LoadBalancers**, based on **HAProxy**, operate at **level 4** of the OSI model. They allow you to expose your workloads over **HTTP/HTTPS** via **routes** and **ingress**, ensuring efficient and performant distribution of incoming traffic.

### Private HTTP/HTTPS Traffic (Interconnection with your IaaS SNC services)  

The **private LoadBalancers** facilitate communication with your **IaaS SNC** services without public exposure. Like their public counterparts, they ensure the distribution of **HTTP/HTTPS** traffic while maintaining a secure and isolated environment.

### Specific Traffic  

**Specific traffic** is managed through **MetalLB**, a LoadBalancer operating at **level 2** of the OSI model. It handles advanced needs requiring fine-tuned customization, including:

- Connection to a database via **TCP**  
- Handling **UDP** flows for real-time or low-latency applications  
- Routing advanced protocols like **QUIC** or **MQTT-SN**, thus providing increased flexibility  
This solution supports your specific flows, for both your private interconnections and your public exposure needs.  

Routing is ensured via **public and private IP address pools**. By default, you are assigned two pools for exposing your services:  

- **A pool of 4 public IP addresses**
- **A pool of 254 private IP addresses**  

If these resources are insufficient to support your workloads, you can request additional IP addresses from our services, whether they are **public** or **private**.  

> **Note**: Integrated LoadBalancers do not serve as a **WAF**. A **WAF as a Service** solution will be available soon.  

## Rights and Permissions

Here are the main permissions implemented:

|       Group       |         API         |                                                                                       Resource Permissions                                                                                       |
|-------------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core       |       ("")/Apps     |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core       |         ("")        |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles    |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets, |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         All        |                                                                                    resources (*) Get, List                                                                                    |
|       Batch       |       CronJobs,     |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
|    Autoscaling    |HorizontalPodAutoscalers|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|     Networking    |       Ingresses,    |                                                                  NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|       Policy      |  PodDisruptionBudgets|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|       Route       |      (OpenShift)    |                                                                       Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build       |      (OpenShift)    |                                                          BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
|       Image       |      (OpenShift)    |                                                           ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
|        Apps       |      (OpenShift)    |                                                                 DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|      Template     |      (OpenShift)    |                                                            Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
|   Authorization   |         Roles,      |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        RBAC       |         Roles,      |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Project      |      (OpenShift)    |                                                                                Projects Get, Delete, Update, Patch                                                                                 |
|     Operators     |     Subscriptions,  |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager   |     Certificates,   |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging      |      (OpenShift)    |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Storage      |    VolumeSnapshots  |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|        Ceph       |         (Rook)      |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa      |     BackingStores,  |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket   |  ObjectBucketClaims,|                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        OCS        |      (OpenShift)    |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Local       |         Storage     |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI        |         Addons      |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics      |         Pods,       |                                                                                             Nodes Get                                                                                              |
|      Security     |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom      |       Resources     |                                       Various custom resources related to Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                               |


## Restrictions and Security Requirements on OpenShift SecNumCloud  

### Dedicated Control Plane  

Workloads on the **control plane** are strictly prohibited. This restriction ensures the security and stability of the OpenShift platform on **SecNumCloud** by limiting access to critical resources.  

### Prohibition of High-Privilege Containers (rootless)  

To comply with the security requirements of the **SecNumCloud repository**, only **rootless containers** are permitted. This approach enhances security by preventing any privileged access to containers.  

Applications requiring elevated privileges will need to be adapted, as their deployment will not be allowed. This constraint also applies to **Helm Charts** and **operators** using non-rootless images, making their use incompatible with the infrastructure.  

### Restrictions on ClusterRoles  

In our OpenShift offering, access rights management at the cluster level is rigorously controlled to ensure **security and compliance** with SecNumCloud.  

Cela implique des **restrictions sur les ClusterRoles**, limitant les privilèges globaux. Bien que ces restrictions puissent imposer des ajustements techniques, elles sont essentielles pour renforcer la résilience et la stabilité de l’environnement.  

Notre équipe de support est disponible pour vous accompagner dans l’adaptation de vos configurations et vous conseiller sur les alternatives possibles.  

### Restrictions on Security Context Constraints (SCC)

The **Security Context Constraints (SCC)** are imposed and cannot be modified by users. Consequently, container runtime parameters (access privileges, Linux capabilities, etc.) are predefined and non-customizable.

This constraint aims to prevent any unauthorized access to critical cluster resources. Applications requiring specific security contexts will need to be adapted to comply with the prevailing SCCs.

From an operational perspective, this may necessitate architectural adjustments and adaptations in deployment processes, particularly for **Helm Charts** and **operators** that do not comply with these constraints.

### Limitations on Custom Resource Definitions (CRDs)

To ensure **SecNumCloud compliance**, the use of **Custom Resource Definitions (CRDs)** and custom controllers is restricted.

This measure, associated with cluster rights, prevents the deployment of unauthorized resources that could affect the infrastructure's stability and security. It also applies to **operators** and **Helm Charts**, with limitations on **RBAC** rights.

**Non-certified CRDs** may be refused to ensure cluster integrity. Only **CRDs from certified operators or Helm Charts** are allowed after validation by our services.

Our support team can guide you through this process and advise you on best practices to adopt.

### Removal of support for dynamic IP addresses for runners

**OpenShift SecNumCloud runners** must be configured with **fixed IP addresses**.

This requirement ensures secure access to **OpenShift APIs**, admin interfaces, and **Cloud Temple** console access management tools.

**Dynamic IP addresses are not supported**, necessitating an adapted configuration to ensure connectivity and security of components.

## Good to know

• If hardware components at the platform level become obsolete and a migration to new computing resources is necessary, Cloud Temple handles all hardware migrations at no additional cost and without service interruption.

• To test OpenShift, Cloud Temple does not provide a dedicated environment, but you can use [RedHat testing platforms](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• For automating your infrastructure, prioritize the official OpenShift Terraform provider.