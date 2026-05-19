---
title: Concepts
---

import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Our Managed Kubernetes Offerings

Cloud Temple offers two distinct offerings to meet your container orchestration needs:

- **Managed Core Kubernetes**: A minimalist product that provides you with a robust and secure Kubernetes foundation, based on cutting-edge open-source components. It is ideal for expert teams looking to build their own custom platform.
- **Managed Kubernetes**: A complete, out-of-the-box solution that includes a full stack of tools for networking, security, storage, continuous deployment, observability, backup, and cost management.

### Offerings Comparison Table

| Component | Managed Core Kubernetes | Managed Kubernetes |
|---|---|---|
| **OS** | Talos | Talos |
| **CNI** | Cilium | Cilium |
| **CNI Observability** | ❌ | Hubble |
| **Load Balancer** | MetalLB | MetalLB |
| **Ingress** | ❌ | Ingress Nginx |
| **Storage** | Rook-Ceph | Rook-Ceph |
| **Continuous Deployment (GitOps)** | ❌ | ArgoCD |
| **Observability** | ❌ | Prometheus, Grafana, Loki |
| **Backup and Migration** | ❌ | Veeam Kasten |
| **Cost Management (FinOps)** | ❌ | OpenCost |
| **Governance and Security**| ❌ | Kyverno, Capsule |
| **Container Registry**| ❌ | Harbor |
| **Certificate Management**| ❌ | Cert-Manager |
| **SSO Authentication**| ❌ | OIDC Integration |

## Overview of the Managed Kubernetes product (complete)

The **Managed Kubernetes** offering (aussi appelée "Kub Managé", ou "KM") is a Kubernetes containerization solution managed by Cloud-Temple, deployed as Virtual Machines running on Cloud-Temple OpenIaaS IaaS infrastructure.

**Managed Kubernetes** is based on Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), a lightweight and secure operating system dedicated to Kubernetes. It is immutable, with no shell or ssh access, and configured exclusively in a declarative manner via gRPC API.

The standardized installation includes a set of components, mostly OpenSource and validated by the CNCF:

- **CNI Cillium**, with observability interface (**Hubble**): Cillium is a Kubernetes container networking solution (*Container Network Interface*). It manages security, load balancing, service mesh, observability, encryption, etc... It is a fundamental networking component found in most Kubernetes distributions (OpenShift, AKS, GKE, EKS,...). We have included the **Hubble** graphical interface for Cillium traffic visualization.

    <img src={cillium} />

- **MetalLB** and **nginx**: To expose Web applications, 3 *ingress-class* **nginx** are integrated by default:
  - *nginx-external-secured*: exposure on a public IP, filtered via firewall to only allow known IPs (utilisé pour les interfaces graphiques des différents produits, et l'API Kubernetes)
  - *nginx-external*: exposure on a second unfiltered public IP (ou filtrage spécifique au client)
  - *nginx-internal*: exposure on an internal IP only

    For "non-web" services, a **MetalLB** load balancer allows exposing services internally or on public IPs. (ce qui permet de déployer des autres ingresses, comme par exemple un WAF)

- **Rook-Ceph distributed storage**: for persistent volume (PV) storage, an OpenSource **Ceph** distributed storage is integrated into the platform. It allows the use of *storage-classes* *ceph-block*, *ceph-bucket*, and *ceph-filesystem*. Storage with **7500 IOPS** is used, enabling high performance. In production deployments (sur 3 AZ), storage nodes are dedicated (1 noeud par AZ); in non-production deployments (1 AZ), storage is shared with worker nodes.

- **Cert-Manager**: the OpenSource certificate manager **Cert-Manager** is natively integrated into the platform.

- **ArgoCD** is available for your automated deployments via a **CI/CD** pipeline.

- **Prometheus** stack (Prometheus, Grafana, Loki): Managed Kubernetes clusters are delivered by default with a complete OpenSource **Prometheus** stack for observability, including:
  - **Prometheus**
  - **Grafana**, with numerous dashboards
  - **Loki**: platform logs are exported to Cloud-Temple S3 storage (et intégrés dans Grafana).

    <img src={grafana} />

- **Harbor** is a **Container registry** that allows you to store your container images or Helm charts directly in the cluster. It performs **vulnerability scans** on your images and can digitally sign them. **Harbor** also allows synchronization with other registries. ([https://goharbor.io/](https://goharbor.io/))

- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) is a cost management (Finops) tool for Kubernetes. It allows you to closely track Kubernetes resource consumption and perform chargeback by project/namespace.

- Advanced security strategies with **Kyverno** and **Capsule**:
  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) is a Kubernetes admission controller that enables policy enforcement. It is an essential tool for governance and security in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) is a permission management tool that simplifies rights management in Kubernetes. It introduces the concept of a *tenant*, which allows centralizing and delegating permissions across multiple namespaces. Through **Capsule**, users of the Managed Kubernetes platform therefore have restricted rights limited to their own namespaces.

- **Veeam Kasten** (aka 'k10') is a solution for **backing up** Kubernetes workloads.

    It allows backing up a complete deployment: manifests, volumes, etc... to Cloud-Temple S3 object storage. **Kasten** uses **Kanister** to enable consistent application backups, for example for databases ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

    **Kasten** is a cross-platform tool that can work with other Kubernetes clusters (OpenShift, Hyperscaler,...). It can therefore be used for reversibility or migration scenarios (K10 gère les adaptations éventuelles via des *transformations*, par exemple un changement d'ingress-class), as well as for "refresh" scenarios (exemple : restauration planifiée d'un environnement de production en pré-production).

- **SSO Authentication** with an External OIDC Identity Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)

## SLA & Support Information

- **Guaranteed Availability (3 AZ production)** : 99.90 %
- **Support** : N1/N2/N3 included for the core scope (infrastructure and standard operators).
- **Recovery Time Commitment (RTC)** : according to the Cloud Temple master contract.
- **Maintenance (MCO)** : regular patching of Talos / Kubernetes / standard operators by the MSP, without service interruption (rolling upgrade).

Response and recovery times depend on the incident severity, in accordance with the support matrix (P1 to P4).

## Versioning Policy & Lifecycle

- **Supported Kubernetes:** N-2 (3 major releases per year, approximately every 4 months). Each release is officially supported for 12 months, ensuring a Cloud Temple support window of up to ~16 months per version.
- **Talos OS:** aligned with stable Kubernetes versions.
  - Each branch is maintained for approximately 12 months (security patches included).
  - Recommended upgrade cadence: 3 times per year, aligned with Kubernetes upgrades.
  - Critical patches (CVE, kernel) are applied via rolling upgrade, with no service interruption.
- **Standard operators:** updated within 90 days of stable release.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): scheduled 3 times/year, using rolling updates.
  - **Minor:** applied automatically within 30 to 60 days.
- **Deprecation:** version N-3 → end of support within 90 days after N's release.

## Kubernetes Nodes

### Production (multi-zonal)

<img src={archi_overview} />

For a "production" (multi-zonal) deployment, the following machines are used:

| **AZ**  | **Machine**   | **vCores** | **RAM** | **Local Storage**  |
|---|---|---|---|---|
| AZ07  | Git Runner   | 4  | 8 GB | OS: 64 GB  |
| AZ05  | Control Plane 1   | 8  | 12 GB | OS: 64 GB  |
| AZ06  | Control Plane 2   | 8  | 12 GB | OS: 64 GB  |
| AZ07  | Control Plane 3   | 8  | 12 GB | OS: 64 GB  |
| AZ05  | Storage Node 1    | 12 | 24 GB | OS: 64 GB + Ceph 500 GB minimum (*) |
| AZ06  | Storage Node 2    | 12 | 24 GB | OS: 64 GB + Ceph 500 GB minimum (*)|
| AZ07  | Storage Node 3    | 12 | 24 GB | OS: 64 GB + Ceph 500 GB minimum (*)|
| AZ05  | Worker Node 1 (**)   | 12 | 24 GB | OS: 64 GB |
| AZ06  | Worker Node 2 (**)   | 12 | 24 GB | OS: 64 GB |
| AZ07  | Worker Node 3 (**)   | 12 | 24 GB | OS: 64 GB |

(*) : Each storage node is delivered with a minimum of 500 GB of disk space, providing 500 GB of usable distributed Ceph storage (data is replicated across each AZ, hence x3). The free space available to the client is approximately 350 GB. This initial size can be increased at provisioning time or later, depending on requirements. Quotas are applied on Ceph, with a Block/File split.

(**) : The size and number of Worker Nodes can be adjusted based on the client's compute capacity requirements. The minimum number of Worker Nodes is 3 (1 per AZ), and we recommend increasing their count in batches of 3 to maintain a consistent multi-zonal distribution. Worker Node sizing can be adjusted, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is determined by the size of the hypervisors used (thus potentially 112 cores/1536 GB of RAM with Performance 3 blades). The number of Worker Nodes is limited to 100. The CNCF recommends using Worker Nodes of identical size. The limit for the number of pods per Worker Node is 110.

### Dev/Test

<img src={archi_overview_1az} />

For a "dev/test" version, the following machines are deployed:

| **AZ**  | **Machine**   | **vCores** | **RAM** | **Local Storage**  |
|---|---|---|---|---|
| AZ0n  | Git Runner   | 4  | 8 GB | OS: 30 GB  |
| AZ0n  | Control Plane    | 8  | 12 GB | OS: 64 GB  |
| AZ0n  | Worker Node 1 (**)   | 12 | 24 GB | OS: 64 GB + Ceph 300 GB minimum (*) |
| AZ0n  | Worker Node 2 (**)   | 12 | 24 GB | OS: 64 GB + Ceph 300 GB minimum (*) |
| AZ0n  | Worker Node 3 (**)   | 12 | 24 GB | OS: 64 GB + Ceph 300 GB minimum (*) |

(*) : 3 Worker nodes are used as Storage nodes and are delivered with a minimum of 300 GB of disk space, for a distributed usable storage of 300 GB (data is replicated three times). The free space available to the client is approximately 150 GB. This initial size can be increased during provisioning, or later, depending on requirements.

(**) : The size and number of Worker Nodes can be adjusted based on the client's compute capacity requirements. The minimum number of Worker nodes is 3 (due to storage replication). The size of Worker Nodes can be adjusted, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker node is determined by the size of the hypervisors used (thus potentially 112 cores/1536 GB of RAM with Performance 3 blades). The number of Worker Nodes is limited to 250. CNCF recommends having Worker nodes of identical size. The limit on the number of pods per Worker Node is 110.

## RACI

### Architecture & Infrastructure

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|---|---|---|
| Define the overall Kubernetes service architecture                         | C          | RA                     |
| Size the Kubernetes service (number of nodes, resources)            | C          | RA                     |
| Install the Kubernetes service with a default configuration            | I          | RA                     |
| Kubernetes service configuration                                          | C          | RA                     |
| Configure the underlying network of the Kubernetes service                           | I          | RA                     |
| Deploy the initial identity and access configuration          | C          | RA                     |
| Define the scaling and high availability strategy           | C          | RA                     |

### Project and Business Application Management

| **Activity**                                          | **Client** | **Cloud Temple** |
|---|---|---|
| Create and manage Kubernetes projects                 | RA         | I*                     |
| Deploy and manage applications in Kubernetes          | RA         | I*                     |
| Configure CI/CD pipelines                             | RA         | I*                     |
| Manage container images and registries                | RA         | I*                     |

*may change to "C" depending on the managed services contract

### Monitoring and Performance

| **Activity**                                            | **Client** | **Cloud Temple** |
|---|---|---|
| Monitor Kubernetes service performance                  | I          | RA*                    |
| Monitor application performance                         | RA         |                        |
| Manage Kubernetes service alerts                        | I          | RA*                    |
| Manage application alerts                               | RA         |                        |

(*) : *Production cluster only. In Dev/Test, the client is fully autonomous and responsible.*

### Infrastructure Maintenance and Updates

| **Activity**                                             | **Client** | **Cloud Temple** |
|---|---|---|
| Update Kubernetes/OS service                             | C          | RA                     |
| Apply security patches to Kubernetes                     | C          | RA                     |
| Update deployed applications (operators*)                | C          | RA                     |

*Operator package included on Managed Kube - see chapters: Managed Helm Packages

### Security

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---|---|---|
| Manage Kubernetes service security                                        | RA         | RA*                    |
| Configure and manage pod security policies                                | RA         | I                      |
| Manage SSL/TLS certificates for the Kubernetes service                    | C          | RA*                    |
| Manage SSL/TLS certificates for applications                              | RA         | I                      |
| Implement and manage basic role-based access control (RBAC)               | C          | R*                     |
| Implement and manage client role-based access control (RBAC)              | RA         | I                      |

(*) : *Production cluster only. In Dev/Test, the client is fully autonomous and responsible.*

### Backup and Disaster Recovery

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|---|---|---|
| Define the backup strategy for the Kubernetes service                | I         | RA                    |
| Implement and manage backups for the Kubernetes service              | I         | RA                    |
| Define the backup strategy for the applications                     | RA*         | I*                   |
| Implement and manage backups for the applications                   | RA*         | I*                   |
| Test disaster recovery procedures for the Kubernetes service   | CI         | RA                   |
| Test disaster recovery procedures for the applications      | RA*         | CI*                   |

*may change to "CI | RA" depending on the managed services contract

### Support and Troubleshooting

| **Activity**                                              | **Client** | **Cloud Temple** |
|---|---|---|
| Provide Level 1 support for infrastructure                | I          | RA                     |
| Provide Level 2 and 3 support for infrastructure          | I          | RA                     |
| Resolve Kubernetes service issues                         | C          | RA                     |
| Resolve application issues                                | RA         | I                      |

### Capacity Management and Evolution

*Production Cluster only. In Dev/Test, the client is fully autonomous and responsible.*

| **Activity**                                              | **Client** | **Cloud Temple** |
|---|---|---|
| Monitor Kubernetes resource usage                         | C         | RA                     |
| Plan service capacity evolution                           | RA         | C                      |
| Implement capacity changes                                | I          | RA                     |
| Manage application and resource evolution                 | RA         | I                      |

### Documentation and Compliance

| **Activity**                                                  | **Client** | **Cloud Temple** |
|---|---|---|
| Maintain Kubernetes product documentation                   | I          | RA                     |
| Maintain application documentation                            | RA         | I                      |
| Ensure Kubernetes service compliance                        | I          | RA                     |
| Ensure application compliance                               | RA         | I                      |
| Conduct Kubernetes service audits                           | I          | RA                     |
| Conduct application audits                                  | RA         | I                      |

### Kubernetes Operators/CRD Management (included in the product)

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---|---|---|
| Provisioning of the default Operators catalog                   | CI         | RA                     |
| Operators updates                                                | CI         | RA                     |
| Monitoring Operators status                                     | CI         | RA                     |
| Troubleshooting Operators issues                              | CI         | RA                     |
| Managing Operators permissions                                  | CI         | RA                     |
| Managing Operators resources (add/remove)                 | CI         | RA                     |
| Backing up Operators resources data                      | CI         | RA                     |
| Supervising Operators resources                                     | CI         | RA                     |
| Restoring Operators resources data                    | CI         | RA                     |
| Operators security audit                                          | CI         | RA                     |
| Operators support                                                    | CI         | RA                     |
| Managing Operators licenses                                   | CI         | RA                     |
| Managing specific support plans for Operators               | CI         | RA                     |

*Operator package included on Managed Kube - see chapters: Managed Helm Packages

### Kubernetes application/operator/CRD management (client)

*Production cluster only. In Dev/Test, the client operates entirely independently and is fully responsible.*

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---|---|---|
| CRD deployment                                                            | I*         | RA*                    |
| Operator updates                                                          | RA         | I                     |
| Operator status monitoring                                                | RA         | I                     |
| Operator issue resolution                                                 | RA         | I                     |
| Operator permissions management                                           | RA         | I                     |
| Operator resource management (add/remove)                                 | RA         | I                     |
| Operator resource data backup                                             | RA         | I                     |
| Operator resource supervision                                             | RA         | I                     |
| Operator resource data restoration                                        | RA         | I                     |
| Operator security audit                                                   | RA         | I                     |
| Operator support                                                          | RA         | I                     |
| Operator license management                                               | RA         | I                     |
| Management of specific support plans for operators                        | RA         | I                     |

Some operator services may be covered depending on the managed services contract.

*may change to "A | RC" depending on the managed services contract

### Application Support

| **Activity**                                | **Client** | **Cloud Temple** |
|---|---|---|
| Application support (external service) | RA         | I                      |

Application support can be provided via a supplementary service.

### RACI (summary)

- Cloud Temple: responsible and actor (RA) for the Kubernetes platform, cluster security, infrastructure backup, monitoring, CRD.
- Client: responsible and actor (RA) for application projects, business operators, CI/CD pipelines, application backups.
- "Gray" zone: adaptations and extensions (IAM, specific operators, cluster compliance/security hardening) - billed on a project basis.