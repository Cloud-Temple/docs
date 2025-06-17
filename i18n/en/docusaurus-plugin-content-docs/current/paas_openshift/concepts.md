---
title: Concepts
---
import oshiftOffert from './images/oshift_offert.jpg'

## Introduction to Red Hat OpenShift

**Red Hat OpenShift** is an enterprise container platform that automates the deployment, management, and scaling of containerized applications. It is a platform built around Docker, a containerization system that allows packaging an application and its dependencies into a virtual container, and Kubernetes, a container orchestration system that manages the execution and coordination of containers across a server cluster.

### Key Features of Red Hat OpenShift:

- **Automated Deployment and Management:** OpenShift simplifies the application deployment process by automating management routines such as scaling, health, and container lifecycle. It provides an integrated environment for application development, testing, and production.

- **Support for Multiple Languages and Services:** The platform supports a wide range of programming languages (such as Java, Node.js, Python, Ruby, and PHP) and offers integrated services such as messaging, caching, and databases, allowing developers to focus on code rather than infrastructure.

- **Continuous Integration (CI) and Continuous Deployment (CD):** OpenShift integrates CI/CD tools that automate the software development pipeline, from the initial commit to production deployment, promoting DevOps practices.

- **Operations Management:** OpenShift provides tools for monitoring, performance management, and diagnostics of applications and infrastructure, helping operators maintain the health and performance of systems.

- **Enhanced Security:** The platform is designed with built-in security, offering role-based access controls, task separation, and automated secret management to protect applications and data.

### Benefits of Red Hat OpenShift:

- **Flexibility:** Developers can work with their preferred tools, languages, and frameworks.
- **Operational Efficiency:** OpenShift optimizes resource usage, reduces time-to-market, and improves developer productivity.
- **Scalability:** The platform automatically scales applications to meet demand fluctuations.
- **Security and Compliance:** With its built-in security policies, OpenShift helps maintain security and compliance standards.

Red Hat OpenShift is a comprehensive solution for developing, deploying, and managing containerized applications, offering a robust, secure, and flexible platform for enterprises adopting modern software development approaches.

### Red Hat OpenShift Data Foundation

Red Hat OpenShift Data Foundation (ODF) is an integrated storage and data management solution designed to work seamlessly with the OpenShift ecosystem. It provides a persistent, secure, and highly available data infrastructure for containerized applications, supporting modern container- and microservices-focused development environments. ODF is designed to simplify and automate data management in hybrid and multicloud environments, providing a solid foundation for critical enterprise applications.

#### Key Features of OpenShift Data Foundation:

- **Persistent Storage:** ODF provides a persistent storage layer for containers, essential for enterprise applications such as databases, content management systems, and applications requiring persistent state.

- **Hybrid and Multicloud:** Designed for hybrid and multicloud environments, ODF offers a consistent data management experience across different cloud environments, facilitating application and data mobility.

- **Automation and Orchestration:** Deep integration with Kubernetes and OpenShift allows ODF to automate storage provisioning, scaling, and lifecycle management based on application needs.

- **High Availability and Resilience:** ODF uses data replication and snapshotting to ensure high availability and data durability, essential for enterprise operational continuity.

- **Data Security:** The solution includes advanced security features such as data encryption at rest and in transit, as well as customizable security and compliance policies.

#### Benefits of OpenShift Data Foundation:

- **Operational Flexibility:** ODF enables enterprises to efficiently manage data in distributed environments, offering the flexibility needed to meet the evolving requirements of modern applications.

- **Simplified Data Management:** By automating many data management tasks, ODF reduces complexity and frees IT resources to focus on higher-value initiatives.

- **Cost Optimization:** ODF's ability to dynamically adapt to storage needs helps optimize costs by avoiding overprovisioning and using available resources more efficiently.

- **Performance Improvement:** ODF is designed to deliver high performance for enterprise applications, with optimization capabilities for different workload types.

Red Hat OpenShift Data Foundation is an advanced data storage solution that enhances the efficiency, resilience, and security of enterprise applications deployed on OpenShift. By providing persistent, automated, and secure storage, ODF plays a crucial role in enabling enterprises to fully leverage container and hybrid cloud technologies.

## General Architecture of the Platform

### Overview

The Red Hat OpenShift platform from Cloud Temple is designed as a regional offering, deployed natively across [**three distinct availability zones**](../additional_content/concepts_az.md) within the same [region](../additional_content/concepts_regional.md) of Cloud Temple. This three-zone architecture significantly increases data availability and resilience.

The platform consists of a control plane and worker nodes, all managed by the Cloud Temple infrastructure. The control plane is evenly distributed across the three availability zones, ensuring centralized and secure management. Worker nodes, on the other hand, are represented by compute blades, arranged so that each availability zone contains one.

For worker nodes, several types of compute blades are available, allowing flexible adaptation to various operational needs:

| Red Hat OpenShift 4 with Data Foundations - On Demand - 1 month Units | Unit | SKU |
| :-------------------------------------------------------------------- | :--- | :--- |
| OPENSHIFT - Control Plane - 3 Nodes - Region FR1 | 1 dedicated plan | csp:fr1:paas:oshift:plan:payg:v1 |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 cores / 20 threads - 64 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedicated workers | csp:fr1:paas:oshift:wkr:tiny:payg:v1 |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 cores / 40 threads - 128 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedicated workers | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 cores / 64 threads - 384 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedicated workers | csp:fr1:paas:oshift:wkr:std:payg:v1 |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 cores / 96 threads - 768 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedicated workers | csp:fr1:paas:oshift:wkr:adv:payg:v1 |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 cores / 112 threads - 1.5 TB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedicated workers | csp:fr1:paas:oshift:wkr:perf:payg:v1 |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 cores / 64 threads - 512 GB RAM - 512 GiB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 dedicated workers + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1 |

The Red Hat OpenShift products from Cloud Temple are available on a pay-as-you-go basis or with a 12-month reservation.

**Notes**:

1. *The operational and security maintenance of the control plane is the responsibility of Cloud Temple as part of a PaaS service.*

2. *As of June 15, 2024, version 1 of the platform is voluntarily software-limited to 30 worker nodes (regardless of worker type) and a global persistent storage of 50 TiB. If these limits are blocking for your project, please contact support.*

3. *Each worker node comes with 512 GiB of block flash storage, which amounts to 1.5 TiB per unit (1 worker per AZ).*
4. *A worker node can handle up to 250 pods by default. This number is adjustable via the podsPerCore parameter - for example, 10 pods per core on a 4-core node would give a maximum of 40 pods. For more technical details, see the [pod management documentation](https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html) and the [OpenShift limits guide](https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html).*

5. *The OpenShift PaaS offering includes native access to the 3 availability zones, without requiring additional subscription.*

6. *It is possible to add block storage to the OpenShift cluster at a later date.*

7. *Nodes are deployed evenly across the 3 availability zones (1 node per zone). It is not possible to imbalance a cluster by assigning a greater number of nodes to a single zone.*

### RedHat Offer Deployed Within the OpenShift Cloud Temple Platform

The platform is a Redhat OpenShift 4 based on [RedHat OpenShift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) and includes [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

<img src={oshiftOffert} />

## Backup Strategy for Your OpenShift PaaS Platform

Backup and restoration of the OpenShift PaaS platform is the responsibility of Cloud Temple for the **ETCD** component as part of platform management. **Backup and restoration for the deployment and application data components is the responsibility of the Client**.

Cloud Temple provides its customers with the **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)) offering, a platform specialized in data management for Kubernetes environments. Designed to meet data protection needs, it offers robust features for backup, restoration, migration, and disaster recovery. Kasten K10 natively integrates with Kubernetes environments, whether managed on cloud clusters or on-premises, and can adapt to various use cases, including cluster migration between different Kubernetes distributions such as Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine, and Red Hat OpenShift.

One of the major use cases for Kasten K10 is **cluster migration between different Kubernetes platforms**. Whether transitioning to a more robust infrastructure or consolidating existing environments, Kasten K10 offers simple and effective tools to manage these migrations:

 - **Data backup and protection**: When migrating a Kubernetes Vanilla or VMware Tanzu cluster to Red Hat Kubernetes Engine or OpenShift, the first step is to back up application data and their states. Kasten K10 easily integrates with Kubernetes APIs to identify applications, their dependencies, and associated data volumes. This includes backing up persistent volumes (Persistent Volumes - PV), databases, configurations, and secrets. Kasten K10 supports a wide range of storage providers (S3, Google Cloud Storage, Azure Blob Storage, etc.), enabling snapshots of applications to be migrated. These backups are then securely stored with encryption and granular access control options, ensuring data security throughout the process.

 - **Portability and migration**: Migrating between Kubernetes distributions like Vanilla or Tanzu and Red Hat solutions like OpenShift or Kubernetes Engine can be complex due to differences in architectures and specific configurations of each platform. Kasten K10 simplifies this process by providing an abstraction layer for application portability. During migration, Kasten K10 replicates configurations and data from the source cluster to the target cluster, taking into account the specifics of each environment. For example, Kubernetes objects such as ConfigMaps, Secrets, PVs, as well as CRDs (Custom Resource Definitions) can be migrated while considering the constraints of each Kubernetes distribution, whether it's an OpenShift or Kubernetes Engine cluster. The process is automated, significantly reducing the risk of manual errors. Additionally, Kasten K10 allows for progressive or full migration, depending on needs, and provides real-time visibility into the migration status, facilitating management and monitoring of the transition.

 - **Multi-cloud and multi-distribution compatibility**: Kasten K10 is designed to operate in hybrid and multi-cloud environments, making it an ideal tool for organizations seeking to migrate applications from Tanzu or Vanilla clusters to Red Hat environments in the cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) or on-premises infrastructures. This ensures maximum flexibility and allows DevOps teams to choose the best environment based on business needs or infrastructure modernization strategies.

 - **Simplified management and automation**: Kasten K10 offers an intuitive user interface that allows administrators to easily manage migration and backup operations without requiring in-depth expertise in each Kubernetes platform. The solution also includes automation features that enable the definition of recurring migration and backup policies, integrating with CI/CD pipelines for continuous operations. Users can schedule migrations or restorations based on maintenance windows, perform validation tests after migration, and automate failover processes in case of issues on the source cluster.

 - **Security and compliance**: In the context of migrations to critical environments like Red Hat OpenShift or Kubernetes Engine, data security and compliance with standards (ISO, SOC, GDPR, etc.) are essential aspects. Kasten K10 ensures encryption of data in transit and at rest, while offering audit and traceability options for backup and restoration operations. These capabilities are essential to ensure the security of migrated data, whether in production or test environments. Kasten K10 is an essential solution for companies seeking to effectively and securely migrate Vanilla or VMware Tanzu Kubernetes clusters to Red Hat Kubernetes Engine or OpenShift.

 The billing is based on the number of worker nodes.

| Redhat OpenShift 4 with Data Foundations - Worker Node Backup Solution Units | Unit     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |

**Note**: *Attention, the disk volume required for the proper functioning of your backup must be planned in the receiving environment of your backup, usually in S3 storage. It is not included in the OpenShift or Kasten units.*

**(1)** _OADP is not natively installed in the cluster. Only Kasten is enabled for migration, backup, and restoration management_

## Load Balancers  

The **SecNumCloud OpenShift** environment offers load balancing solutions adapted to multiple functional perimeters, ensuring secure and optimized traffic management.  

The load balancers cover four distinct perimeters, relying on different levels of the OSI model:  

- **Access to administration tools** (OpenShift API server and console)  
- **Public HTTP/HTTPS traffic**  
- **Private HTTP/HTTPS traffic**  
- **Specific traffic requiring advanced customization**  

### Access to Administration Tools  

Access to administration tools is secured by dedicated load balancers. These are protected by enhanced security controls, including an adjustable whitelist via the **Cloud Temple** console, ensuring strict access management.  

### Public HTTP/HTTPS Traffic  

The **public LoadBalancers**, based on **HAProxy**, operate at **OSI level 4**. They allow exposing your workloads in **HTTP/HTTPS** via **routes** and **ingress**, ensuring efficient and high-performance distribution of incoming traffic.  

### Private HTTP/HTTPS Traffic (Interconnection with Your SNC IaaS Services)  

The **private LoadBalancers** facilitate communication with your **SNC IaaS** services without public exposure. Like their public counterparts, they ensure the distribution of **HTTP/HTTPS** traffic while maintaining a secure and isolated environment.  

### Specific Traffic  

**Specific traffic** is managed through the **MetalLB** LoadBalancer. It supports advanced needs requiring fine customization, for example:  

- Connecting to a database via **TCP**  
- Managing **UDP** flows for real-time or low-latency applications  
- Routing advanced protocols such as **QUIC** or **MQTT-SN**, offering increased flexibility
This solution allows you to support your specific flows, whether for your private connections or public exposure needs.

Routing is ensured via **dedicated public and private IP addresses**. By default, IP addresses are assigned to you for exposing your services:

- **4 public IP addresses**
- **254 private IP addresses**

If these resources are insufficient to support your workloads, you can request additional IP addresses from our services, whether **public** or **private**.

> **Note**: The integrated LoadBalancers do not act as a **WAF**. A **WAF as a Service** solution will be available shortly.

## Rights and Permissions

Here are the main permissions implemented:

|       Group       |         API          |                                                                                       Resource Permissions                                                                                       |
|-------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core       |       ("")/Apps      |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core       |          ("")        |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         All          |                                                                                    the resources (*) Get, List                                                                                    |
|       Batch       |       CronJobs,        |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
|    Autoscaling    |HorizontalPodAutoscalers|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|    Networking     |       Ingresses,       |                                                                  NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|       Policy      |  PodDisruptionBudgets  |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|       Route       |      (OpenShift)       |                                                                       Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build       |      (OpenShift)       |                                                          BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
|       Image       |      (OpenShift)       |                                                           ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
|       Apps        |      (OpenShift)       |                                                                 DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|      Template     |      (OpenShift)       |                                                            Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
|   Authorization   |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|       RBAC        |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Project      |      (OpenShift)       |                                                                                Projects Get, Delete, Update, Patch                                                                                 |
|     Operators     |     Subscriptions,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager   |     Certificates,      |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging      |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Storage      |    VolumeSnapshots     |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|       Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa      |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket   |  ObjectBucketClaims,   |                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|       OCS         |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Local       |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|       CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics      |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom      |       Resources        |                                       Various custom resources related to Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |


## Restrictions and security requirements on OpenShift SecNumCloud  

### Dedicated control plane  

Running workloads on the **control plane** is strictly prohibited. This restriction ensures the security and stability of the OpenShift platform on **SecNumCloud**, by limiting access to critical resources.  

### Prohibition of containers with elevated privileges (rootless)  

To comply with the security requirements of the **SecNumCloud repository**, only **rootless containers** are allowed. This approach enhances security by preventing any privileged access to containers.  

Applications requiring elevated privileges must be adapted, as their deployment will not be authorized. This constraint also applies to **Helm Charts** and **operators** using non-rootless images, making their use incompatible with the infrastructure.  

### Restrictions on ClusterRoles  

In our OpenShift offering, access rights management at the cluster level is strictly regulated to ensure **security and compliance** with SecNumCloud.
This involves **restrictions on ClusterRoles**, limiting global privileges. Although these restrictions may require technical adjustments, they are essential to enhance the resilience and stability of the environment.  

Our support team is available to assist you in adapting your configurations and advising you on possible alternatives.  

### Restrictions on Security Context Constraints (SCC)  

**Security Context Constraints (SCC)** are imposed and cannot be modified by users. As a result, container execution parameters (access privileges, Linux capabilities, etc.) are predefined and non-customizable.  

This constraint aims to prevent unauthorized access to critical cluster resources. Applications requiring specific security contexts must be adapted to comply with the current SCCs.  

From an operational perspective, this may require architectural adjustments and changes in deployment processes, especially for **Helm Charts** and **operators** that do not comply with these constraints.  

### Limitations on Custom Resource Definitions (CRDs)  

To ensure **SecNumCloud compliance**, the use of **Custom Resource Definitions (CRDs)** and custom controllers is restricted.  

This measure, related to cluster rights, prevents the deployment of unauthorized resources that could affect the stability and security of the infrastructure. It also applies to **operators** and **Helm Charts**, with limitations on **RBAC** rights.  

**Non-certified CRDs** may be rejected to ensure cluster integrity. Only **CRDs from certified operators or Helm Charts** are allowed after validation by our services.  

Our support team can guide you through this process and advise you on best practices to adopt.  

### Removal of support for dynamic IP addresses for runners  

The **OpenShift SecNumCloud runners** must be configured with **fixed IP addresses**.  

This requirement ensures secure access to **OpenShift APIs**, administration interfaces, and access management tools of the **Cloud Temple** console.  

**Dynamic IP addresses are not supported**, requiring appropriate configuration to ensure connectivity and security of the components.  


## Useful Information

• If hardware components on the platform become obsolete and a migration to new computing resources is necessary, Cloud Temple handles all hardware migrations at no additional cost and without service interruption.

• For testing OpenShift, Cloud Temple does not provide a dedicated environment, but you can use [Red Hat test platforms](https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it).

• For infrastructure automation, prefer the official OpenShift Terraform provider.