---
title: Concepts
---

import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Our Managed Kubernetes Offerings

Cloud Temple offers two distinct offerings to meet your container orchestration needs:

- **Managed Core Kubernetes**: A minimalist offering that provides you with a robust and secure Kubernetes foundation, based on leading open-source components. It is ideal for expert teams who want to build their own custom platform.
- **Managed Kubernetes**: A complete, ready-to-use solution that includes a full stack of tools for networking, security, storage, continuous deployment, observability, backup, and cost management.

### Comparison Table of Offerings

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

## Overview of the Managed Kubernetes Offering (complete)

The **Managed Kubernetes** offering (also called "Managed Kube", or "KM") is a Kubernetes containerization solution managed by Cloud-Temple, deployed as Virtual Machines running on Cloud-Temple OpenIaaS IaaS infrastructures.

**Managed Kubernetes** is based on Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), an operating system dedicated to Kubernetes that is lightweight and secure. It is immutable, with no shell or SSH access, and configured exclusively in a declarative manner via gRPC API.

The standardized installation includes a set of components, mostly OpenSource and validated by the CNCF:

- **CNI Cilium**, with observability interface (**Hubble**): Cilium is a networking solution for Kubernetes containers (*Container Network Interface*). It manages security, load balancing, service mesh, observability, encryption, etc. It is a fundamental network component found in most Kubernetes variants (OpenShift, AKS, GKE, EKS,...). We have included the **Hubble** graphical interface for visualization of Cilium flows.

    <img src={cillium} />

- **MetalLB** and **nginx**: For exposing web applications, 3 **nginx** *ingress-classes* are integrated by default:
  - *nginx-external-secured*: exposure on a public IP, filtered on the firewall to only allow known IPs (used for the graphical interfaces of the various products, and the Kubernetes API)
  - *nginx-external*: exposure on a second unfiltered public IP (or client-specific filtering)
  - *nginx-internal*: exposure on an internal IP only

    For "non-web" services, a **MetalLB** load-balancer allows services to be exposed internally or on public IPs. (which allows deploying other ingresses, such as a WAF)

- **Distributed Rook-Ceph Storage**: for storing persistent volumes (PV), an OpenSource **Ceph** distributed storage is integrated into the platform. It allows the use of *storage-classes* *ceph-block*, *ceph-bucket*, and *ceph-filesystem*. A storage with **7500 IOPS** is used, enabling high performance. In production deployments (on 3 AZs), storage nodes are dedicated (1 node per AZ); in non-production deployments (1 AZ), storage is shared with worker nodes.

- **Cert-Manager**: the OpenSource certificate manager **Cert-Manager** is natively integrated into the platform.

- **ArgoCD** is available for your automated deployments via a **CI/CD** pipeline.

- **Prometheus** stack (Prometheus, Grafana, Loki): Managed Kubernetes clusters are delivered as standard with a complete OpenSource **Prometheus** stack for observability, including:
  - **Prometheus**
  - **Grafana**, with numerous dashboards
  - **Loki**: platform logs are exported to Cloud-Temple S3 storage (and integrated into Grafana).

    <img src={grafana} />

- **Harbor** is a **Container Registry** that allows you to store your container images or Helm charts directly in the cluster. It performs **vulnerability scans** on your images and can digitally sign them. **Harbor** also enables synchronization with other registries. ([https://goharbor.io/](https://goharbor.io/))

- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) is a cost management tool (FinOps) for Kubernetes. It allows you to closely track Kubernetes resource consumption and implement chargeback by project/namespace.

- Advanced security policies with **Kyverno** and **Capsule**:
  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) is an admission controller for Kubernetes that allows policies to be enforced. It is an essential tool for governance and security in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) is a permissions management tool that facilitates rights management in Kubernetes. It introduces the concept of *tenant* that allows centralizing and delegating permissions across multiple namespaces. Via **Capsule**, users of the Managed Kubernetes platform have rights restricted to their own namespaces only.

- **Veeam Kasten** (aka 'k10') is a solution for **backing up** Kubernetes workloads.

    It enables backing up a complete deployment: manifests, volumes, etc., to Cloud-Temple S3 object storage. **Kasten** uses **Kanister** to enable consistent application backups, for example for databases ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

    **Kasten** is a cross-platform tool that can work with other Kubernetes clusters (OpenShift, Hyperscaler,...). It can therefore be used for reversibility or migration scenarios (K10 manages any necessary adaptations via *transformations*, for example a change in ingress-class), but also for "refresh" scenarios (example: scheduled restoration of a production environment to pre-production).

- **SSO Authentication** with an External OIDC Identity Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)

## SLA & Support Information

- **Guaranteed Availability (production 3 AZ)**: 99.90%
- **Support**: N1/N2/N3 included for the base scope (infrastructure and standard operators).
- **Recovery Time Commitment (RTC)**: as per Cloud Temple master agreement.
- **Maintenance (MCO)**: regular patching of Talos / Kubernetes / standard operators by MSP, without service interruption (rolling upgrade).

Response and recovery times depend on incident severity, in accordance with the support matrix (P1 to P4).

## Versioning Policy & Lifecycle

- **Supported Kubernetes:** N-2 (3 major releases per year, approximately every 4 months). Each release is officially supported for 12 months, ensuring a Cloud Temple support window of ~16 months maximum per version.
- **Talos OS:** aligned with stable Kubernetes versions.
  - Each branch is maintained for approximately 12 months (including security patches).
  - Recommended upgrade cadence: 3 times per year, in line with Kubernetes upgrades.
  - Critical patches (CVE, kernel) are applied via rolling upgrade, without service interruption.
- **Standard operators:** updated within 90 days following stable release.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): scheduled 3 times/year, as rolling updates.
  - **Minor**: applied automatically within 30 to 60 days.
- **Deprecation:** version N-3 → end of support within 90 days after release of N.

## Kubernetes Nodes

### Production (multi-zonal)

<img src={archi_overview} />

For a "production" deployment (multi-zonal), the following machines are used:

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

(*): Each storage node is delivered with a minimum of 500 GB of disk space, for a distributed useful Ceph storage of 500 GB (data is replicated on each AZ, i.e. x3). The available free space for the client is approximately 350 GB. This initial size can be increased at build time, or later, depending on needs. Quotas are applied on Ceph, with a Block/File distribution.

(**): The size and number of Worker Nodes can be adapted according to the client's compute capacity needs. The minimum number of Worker Nodes is 3 (1 per AZ), and we recommend increasing their number in batches of 3 to maintain a consistent multi-zonal distribution. The Worker Node size can be adapted, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is determined by the size of the hypervisors used (thus potentially 112 cores/1536 GB of RAM with Performance 3 blades). The number of Worker Nodes is limited to 100. The CNCF recommends having Worker Nodes of identical size. The pod limit per Worker Node is 110.

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

(*): 3 Worker nodes are used as Storage nodes and are delivered with a minimum of 300 GB of disk space, for a distributed useful storage of 300 GB (data is replicated three times). The available free space for the client is approximately 150 GB. This initial size can be increased at build time, or later, depending on needs.

(**): The size and number of Worker Nodes can be adapted according to the client's compute capacity needs. The minimum number of Worker Nodes is 3 (due to storage replication). The Worker Node size can be adapted, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is determined by the size of the hypervisors used (thus potentially 112 cores/1536 GB of RAM with Performance 3 blades). The number of Worker Nodes is limited to 250. The CNCF recommends having Worker Nodes of identical size. The pod limit per Worker Node is 110.

## RACI

### Architecture & Infrastructure

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|---|---|---|
| Define the overall Kubernetes service architecture                           | C          | RA                     |
| Size the Kubernetes service (number of nodes, resources)                    | C          | RA                     |
| Install the Kubernetes service with a default configuration                 | I          | RA                     |
| Configure the Kubernetes service                                             | C          | RA                     |
| Configure the basic network of the Kubernetes service                       | I          | RA                     |
| Deploy the initial identity and access configuration                        | C          | RA                     |
| Define the scaling and high availability strategy                           | C          | RA                     |

### Management of Projects and Business Applications

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
| Manage Kubernetes service-related alerts                | I          | RA*                    |
| Manage application-related alerts                       | RA         |                        |

(*): *Production Cluster only. In Dev/Test the client is fully autonomous and responsible.*

### Infrastructure Maintenance and Updates

| **Activity**                                             | **Client** | **Cloud Temple** |
|---|---|---|
| Update the Kubernetes service/OS                         | C          | RA                     |
| Apply security patches to Kubernetes                     | C          | RA                     |
| Update deployed applications (operators*)               | C          | RA                     |

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

(*): *Production Cluster only. In Dev/Test the client is fully autonomous and responsible.*

### Backup and Disaster Recovery

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|---|---|---|
| Define the backup strategy for the Kubernetes service                        | I         | RA                    |
| Implement and manage Kubernetes service backups                              | I         | RA                    |
| Define the backup strategy for applications                                  | RA*         | I*                   |
| Implement and manage application backups                                     | RA*         | I*                   |
| Test disaster recovery procedures for the Kubernetes service                 | CI         | RA                   |
| Test disaster recovery procedures for applications                           | RA*         | CI*                   |

*may change to "CI | RA" depending on the managed services contract

### Support and Problem Resolution

| **Activity**                                              | **Client** | **Cloud Temple** |
|---|---|---|
| Provide level 1 support for infrastructure                | I          | RA                     |
| Provide level 2 and 3 support for infrastructure          | I          | RA                     |
| Resolve issues related to the Kubernetes service          | C          | RA                     |
| Resolve application-related issues                        | RA         | I                      |

### Capacity Management and Evolution

*Production Cluster only. In Dev/Test the client is fully autonomous and responsible.*

| **Activity**                                              | **Client** | **Cloud Temple** |
|---|---|---|
| Monitor Kubernetes resource usage                         | C         | RA                     |
| Plan service capacity evolution                           | RA         | C                      |
| Implement capacity changes                                | I          | RA                     |
| Manage application evolution and their resources          | RA         | I                      |

### Documentation and Compliance

| **Activity**                                                  | **Client** | **Cloud Temple** |
|---|---|---|
| Maintain Kubernetes service documentation                     | I          | RA                     |
| Maintain application documentation                            | RA         | I                      |
| Ensure Kubernetes service compliance                          | I          | RA                     |
| Ensure application compliance                                 | RA         | I                      |
| Conduct Kubernetes service audits                             | I          | RA                     |
| Conduct application audits                                    | RA         | I                      |

### Management of Kubernetes Operators/CRDs (included in the offering)

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---|---|---|
| Provision of the default Operators catalog                                | CI         | RA                     |
| Update of Operators                                                       | CI         | RA                     |
| Monitoring of Operators status                                            | CI         | RA                     |
| Resolution of Operator-related issues                                     | CI         | RA                     |
| Management of Operator permissions                                        | CI         | RA                     |
| Management of Operator resources (add/remove)                             | CI         | RA                     |
| Backup of Operator resource data                                          | CI         | RA                     |
| Supervision of Operator resources                                         | CI         | RA                     |
| Restoration of Operator resource data                                     | CI         | RA                     |
| Security audit of Operators                                               | CI         | RA                     |
| Operator support                                                          | CI         | RA                     |
| License management for operators                                          | CI         | RA                     |
| Management of specific support plans for operators                        | CI         | RA                     |

*Operator package included on Managed Kube - see chapters: Managed Helm Packages

### Management of Client Kubernetes Applications/Operators/CRDs

*Production Cluster only. In Dev/Test the client is fully autonomous and responsible.*

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---|---|---|
| Deployment of CRDs                                                        | I*         | RA*                    |
| Update of Operators                                                       | RA         | I                     |
| Monitoring of Operators status                                            | RA         | I                     |
| Resolution of Operator-related issues                                     | RA         | I                     |
| Management of Operator permissions                                        | RA         | I                     |
| Management of Operator resources (add/remove)                             | RA         | I                     |
| Backup of Operator resource data                                          | RA         | I                     |
| Supervision of Operator resources                                         | RA         | I                     |
| Restoration of Operator resource data                                     | RA         | I                     |
| Security audit of Operators                                               | RA         | I                     |
| Operator support                                                          | RA         | I                     |
| License management for operators                                          | RA         | I                     |
| Management of specific support plans for operators                        | RA         | I                     |

Some operator services may be covered depending on the managed services contract.

*may change to "A | RC" depending on the managed services contract

### Application Assistance

| **Activity**                                | **Client** | **Cloud Temple** |
|---|---|---|
| Application assistance (external service)   | RA         | I                      |

Application support can be provided via an additional service.

### RACI (summary)

- Cloud Temple: responsible and accountable (RA) for the Kubernetes foundation, cluster security, infrastructure backup, monitoring, CRD.
- Client: responsible and accountable (RA) for application projects, business operators, CI/CD pipelines, application backups.
- "Grey area": adaptations and extensions (IAM, specific operators, cluster compliance/security hardening) - billed on a project basis.
