---
title: Concepts
---

import cillium from './images/cillium.png'
import grafana from './images/grafana.png'
import archi_overview from './images/archi_overview.png'
import archi_overview_1az from './images/archi_overview_1az.png'

## Managed Kubernetes Overview

The **Managed Kubernetes** offering (also known as "Kub Managé" or "KM") is a Kubernetes containerization solution managed by Cloud-Temple, deployed as Virtual Machines running on Cloud-Temple's OpenIaaS IaaS infrastructure.

**Managed Kubernetes** is built on **Talos Linux** (https://www.talos.dev/), a lightweight and secure operating system dedicated to Kubernetes. It is immutable, with no shell or SSH access, and configured exclusively through a declarative API using gRPC.

The standardized installation includes a set of components, mostly open-source and CNCF-certified:

- **CNI Cillium**, with observability interface (**Hubble**): Cillium is a Kubernetes container networking solution (*Container Network Interface*). It handles security, load balancing, service mesh, observability, encryption, and more. It is a core networking component found in most Kubernetes distributions (OpenShift, AKS, GKE, EKS, etc.). We have included the **Hubble** graphical interface for visualizing Cillium traffic flows.

    <img src={cillium} />

- **MetalLB** and **nginx**: For exposing web applications, three **nginx** *ingress-classes* are included by default:
    - *nginx-external-secured*: exposed on a public IP, filtered through the firewall to allow only known IPs (used for product web interfaces and the Kubernetes API)
    - *nginx-external*: exposed on a second public IP without filtering (or with client-specific filtering)
    - *nginx-internal*: exposed only on an internal IP

    For non-web services, a **MetalLB** load balancer enables internal or public IP exposure (allowing deployment of other ingress controllers, such as a WAF).

- **Distributed Storage Rook-Ceph**: For persistent volume (PV) storage, an open-source distributed storage solution **Ceph** is integrated into the platform. It supports the following *storage-classes*: *ceph-block*, *ceph-bucket*, and *ceph-filesystem*. A storage system with **7,500 IOPS/To** is used, enabling high performance. In production deployments (across 3 AZs), storage nodes are dedicated (1 node per AZ); in non-production deployments (1 AZ), storage is shared with worker nodes.

- **Cert-Manager**: The open-source **Cert-Manager** certificate manager is natively integrated into the platform.

- **ArgoCD**: We use **ArgoCD** for automated deployments of various components via a **CI/CD** pipeline.

- **Prometheus Stack** (Prometheus, Grafana, Promtail, Loki): Managed Kubernetes clusters come standard with a complete open-source **Prometheus** observability stack, including:
    - **Prometheus**
    - **Grafana**, with numerous pre-built dashboards
    - **Loki** and **Promtail**: Platform logs are exported to Cloud-Temple's S3 storage and integrated into Grafana.

    <img src={grafana} />

- **Harbor** is a **container registry** that allows you to store your container images or Helm charts directly within the cluster. It performs **vulnerability scanning** on your images and supports digital signing. **Harbor** also enables synchronization with other registries. (https://goharbor.io/)

- **KubeCost** (https://github.com/kubecost) is a Kubernetes cost management (FinOps) tool. It enables fine-grained tracking of Kubernetes resource consumption and supports cost allocation by project/namespace.

- Advanced security policies with **Kyverno** and **Capsule**:
    - **Kyverno** (https://kyverno.io/) is a Kubernetes admission controller that enforces policies. It is essential for governance and security in Kubernetes.
    - **Capsule** (https://projectcapsule.dev/) is a permissions management tool that simplifies access control in Kubernetes. It introduces the concept of *tenants*, enabling centralized and delegated permissions across multiple namespaces. With **Capsule**, users of the Managed Kubernetes platform are granted rights restricted solely to their own namespaces.

- **Veeam Kasten** (aka 'k10') is a solution for **Kubernetes workload backup**.

    It enables backing up complete deployments: manifests, volumes, etc., to Cloud-Temple's S3 object storage. **Kasten** uses **Kanister** to ensure application-consistent backups, such as for databases (https://docs.kasten.io/latest/usage/blueprints/).

    **Kasten** is a cross-platform tool that works with other Kubernetes clusters (OpenShift, hyperscalers, etc.). It can be used for recovery scenarios or migration (K10 handles necessary adaptations via *transformations*, e.g., changing ingress-class), as well as for "refresh" operations (e.g., scheduled restoration of a production environment into pre-production).

- (Optional): **SSO Authentication** with an external OIDC Identity Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, etc.)

## SLA & Support Information
- **Guaranteed Availability (production 3 AZ):** 99.50%
- **Support:** N1/N2/N3 included for the core scope (infrastructure and standard operators).
- **Mean Time to Recovery (MTTR) Commitment:** As per the Cloud Temple framework agreement.
- **Maintenance (MCO):** Regular patching of Talos / Kubernetes / standard operators by MSP, without service interruption (rolling upgrade).

Response and recovery timeframes depend on incident severity, according to the support matrix (P1 to P4).

## Version Policy & Lifecycle

- **Supported Kubernetes:** N-2 (3 major releases per year, approximately every 4 months). Each release is officially supported for 12 months, ensuring a maximum Cloud Temple support window of ~16 months per version.
- **Talos OS:** aligned with stable Kubernetes releases.
  - Each branch is maintained for approximately 12 months (including security patches).
  - Recommended upgrade frequency: 3 times per year, consistent with Kubernetes upgrades.
  - Critical patches (CVE, kernel) are applied via rolling upgrade, without service interruption.
- **Standard Operators:** updated within 90 days following stable release.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): scheduled 3 times per year, via rolling update.
  - **Minor:** applied automatically within 30 to 60 days.
- **Deprecation:** version N-3 → end of support within 90 days of N release.

## Kubernetes Nodes

### Production (multi-zonal)
<img src={archi_overview} />

For a "production" (multi-zone) deployment, the following machines are used:

| **AZ**  | **Machine**         | **vCores** | **RAM**  | **Local Storage**         |
|---------|---------------------|------------|----------|----------------------------|
| AZ07    | Git Runner          | 4          | 8 GB     | OS: 30 GB                  |
| AZ05    | Control Plane 1     | 8          | 12 GB    | OS: 20 GB                  |
| AZ06    | Control Plane 2     | 8          | 12 GB    | OS: 20 GB                  |
| AZ07    | Control Plane 3     | 8          | 12 GB    | OS: 20 GB                  |
| AZ05    | Storage Node 1      | 12         | 24 GB    | OS: 20 GB + Ceph 500 GB minimum (*) |
| AZ06    | Storage Node 2      | 12         | 24 GB    | OS: 20 GB + Ceph 500 GB minimum (*) |
| AZ07    | Storage Node 3      | 12         | 24 GB    | OS: 20 GB + Ceph 500 GB minimum (*) |
| AZ05    | Worker Node 1 (**)  | 12         | 24 GB    | OS: 20 GB                  |
| AZ06    | Worker Node 2 (**)  | 12         | 24 GB    | OS: 20 GB                  |
| AZ07    | Worker Node 3 (**)  | 12         | 24 GB    | OS: 20 GB                  |

(*) Each storage node comes with a minimum of 500 GB of disk space, providing a usable distributed Ceph storage of 500 GB (data is replicated across each AZ, hence ×3). The available free space for the client is approximately 350 GB. This initial size can be increased during provisioning or later, depending on requirements.

(**) The size and number of Worker Nodes can be adjusted according to the client's computational capacity needs. The minimum number of Worker Nodes is 3 (1 per AZ), and we recommend increasing the number in batches of 3 to maintain consistent multi-zone distribution. Worker Node size can be customized, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is determined by the hypervisor size (up to 112 cores / 1536 GB RAM with Performance 3 blade servers). The total number of Worker Nodes is capped at 100. The CNCF recommends using Worker Nodes of identical size. The maximum number of pods per Worker Node is 110.

### Dev/Test
<img src={archi_overview_1az} />

For a "dev/test" deployment, the following machines are provisioned:

| **AZ**  | **Machine**       | **vCores** | **RAM**  | **Local Storage**         |
|---------|-------------------|------------|----------|----------------------------|
| AZ0n    | Git Runner        | 4          | 8 GB     | OS: 30 GB                  |
| AZ0n    | Control Plane     | 8          | 12 GB    | OS: 20 GB                  |
| AZ0n    | Worker Node 1 (**) | 12        | 24 GB    | OS: 20 GB + Ceph 300 GB minimum (*) |
| AZ0n    | Worker Node 2 (**) | 12        | 24 GB    | OS: 20 GB + Ceph 300 GB minimum (*) |
| AZ0n    | Worker Node 3 (**) | 12        | 24 GB    | OS: 20 GB + Ceph 300 GB minimum (*) |

(*) : Three Worker nodes are used as Storage nodes and are provisioned with a minimum of 300 GB of disk space, providing a distributed usable storage capacity of 300 GB (data is replicated three times). The available free space for the client is approximately 150 GB. This initial size can be increased during deployment or later, depending on requirements.

(**) : The size and number of Worker Nodes can be adjusted according to the client’s compute capacity needs. The minimum number of Worker Nodes is 3 (due to storage replication requirements). The minimum configuration per Worker Node is 12 cores and 24 GB of RAM; the upper limit per Worker Node is constrained by the hypervisor size (up to 112 cores / 1536 GB RAM with Performance 3 blade servers). The maximum number of Worker Nodes is capped at 250. The CNCF recommends using Worker Nodes of identical size. The maximum number of pods per Worker Node is 110.

## RACI

### Architecture & Infrastructure

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|------------------------------------------------------------------------------|------------|------------------------|
| Define the overall architecture of the Kubernetes service                    | C          | RA                     |
| Size the Kubernetes service (number of nodes, resources)                     | C          | RA                     |
| Install the Kubernetes service with default configuration                    | I          | RA                     |
| Configure the Kubernetes service                                             | C          | RA                     |
| Set up the base networking for the Kubernetes service                        | I          | RA                     |
| Deploy initial configuration for identities and access                       | C          | RA                     |
| Define scaling and high availability strategy                                | C          | RA                     |

### Project and Business Applications Management

| **Activity**                                          | **Client** | **Cloud Temple** |
|-------------------------------------------------------|------------|------------------------|
| Create and manage Kubernetes projects                 | RA         | I*                     |
| Deploy and manage applications within Kubernetes      | RA         | I*                     |
| Configure CI/CD pipelines                             | RA         | I*                     |
| Manage container images and registries                | RA         | I*                     |

*May transition to "C" depending on the managed services contract

### Monitoring and Performance

| **Activity**                                            | **Client** | **Cloud Temple** |
|---------------------------------------------------------|------------|------------------------|
| Monitor Kubernetes service performance                  | I          | RA*                    |
| Monitor application performance                         | RA         |                        |
| Manage alerts related to the Kubernetes service         | I          | RA*                    |
| Manage alerts related to applications                   | RA         |                        |

(*) : *Production cluster only. In Dev/Test, the client is fully autonomous and responsible.*

### Infrastructure Maintenance and Updates

| **Activity**                                             | **Client** | **Cloud Temple** |
|----------------------------------------------------------|------------|------------------------|
| Update Kubernetes/OS service                             | C          | RA                     |
| Apply security patches to Kubernetes                     | C          | RA                     |
| Update deployed applications (operators*)                | C          | RA                     |

*Operator package included in Managed Kube - see sections: Managed Helm Packages

### Security

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Manage security for the Kubernetes service                                | RA         | RA*                    |
| Configure and manage pod security policies                                | RA         | I                      |
| Manage SSL/TLS certificates for the Kubernetes service                    | C          | RA*                    |
| Manage SSL/TLS certificates for applications                              | RA         | I                      |
| Implement and manage Role-Based Access Control (RBAC)                     | C          | R*                     |
| Implement and manage Client-Based Role-Based Access Control (RBAC)        | RA         | I                      |

(*) : *Production cluster only. In Dev/Test, the client has full autonomy and responsibility.*

### Backup and Disaster Recovery

| **Activity**                                                                 | **Client** | **Cloud Temple** |
|------------------------------------------------------------------------------|------------|------------------------|
| Define the backup strategy for the Kubernetes service                        | I         | RA                    |
| Implement and manage backups for the Kubernetes service                      | I         | RA                    |
| Define the backup strategy for applications                                  | RA*         | I*                   |
| Implement and manage backups for applications                                | RA*         | I*                   |
| Test disaster recovery procedures for the Kubernetes service                | CI         | RA                   |
| Test disaster recovery procedures for applications                           | RA*         | CI*                   |

*May change to "CI | RA" depending on the managed services contract

### Support and Troubleshooting

| **Activity**                                              | **Client** | **Cloud Temple** |
|-----------------------------------------------------------|------------|------------------------|
| Provide level 1 support for infrastructure                | I          | RA                     |
| Provide level 2 and 3 support for infrastructure          | I          | RA                     |
| Resolve issues related to the Kubernetes service          | C          | RA                     |
| Resolve issues related to applications                    | RA         | I                      |

### Capacity Management and Evolution

*Production cluster only. In Dev/Test, the client is fully autonomous and responsible.*

| **Activity**                                              | **Client** | **Cloud Temple** |
|-----------------------------------------------------------|------------|------------------------|
| Monitor Kubernetes resource utilization                   | C         | RA                     |
| Plan service capacity evolution                           | RA         | C                      |
| Implement capacity changes                                | I          | RA                     |
| Manage application evolution and their resources          | RA         | I                      |

### Documentation and Compliance

| **Activity**                                                  | **Client** | **Cloud Temple** |
|---------------------------------------------------------------|------------|------------------------|
| Maintain Kubernetes service documentation                   | I          | RA                     |
| Maintain application documentation                          | RA         | I                      |
| Ensure Kubernetes service compliance                        | I          | RA                     |
| Ensure application compliance                               | RA         | I                      |
| Conduct Kubernetes service audits                           | I          | RA                     |
| Conduct application audits                                  | RA         | I                      |

### Kubernetes Operators/CRD Management (included in the offering)

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Provisioning of default Operators catalog                                   | CI         | RA                     |
| Updating Operators                                                         | CI         | RA                     |
| Monitoring Operators' status                                               | CI         | RA                     |
| Troubleshooting issues related to Operators                                | CI         | RA                     |
| Managing Operators' permissions                                            | CI         | RA                     |
| Managing Operators' resources (addition/removal)                           | CI         | RA                     |
| Backing up Operators' resource data                                        | CI         | RA                     |
| Monitoring Operators' resources                                            | CI         | RA                     |
| Restoring Operators' resource data                                         | CI         | RA                     |
| Security auditing of Operators                                             | CI         | RA                     |
| Operator support                                                           | CI         | RA                     |
| License management for Operators                                           | CI         | RA                     |
| Management of specific support plans for Operators                         | CI         | RA                     |

*Operator package included in Managed Kube – see sections: Managed Helm Packages

### Kubernetes Application/Operator/CRD Management (Client-side)

*Production cluster only. In Dev/Test environments, the client is fully autonomous and responsible.*

| **Activity**                                                              | **Client** | **Cloud Temple** |
|---------------------------------------------------------------------------|------------|------------------------|
| Deployment of CRDs                                                        | I*         | RA*                    |
| Updating Operators                                                        | RA         | I                     |
| Monitoring Operator status                                                | RA         | I                     |
| Troubleshooting issues related to Operators                               | RA         | I                     |
| Managing Operator permissions                                             | RA         | I                     |
| Managing Operator resources (addition/removal)                            | RA         | I                     |
| Backing up Operator resource data                                         | RA         | I                     |
| Monitoring Operator resources                                             | RA         | I                     |
| Restoring Operator resource data                                          | RA         | I                     |
| Security auditing of Operators                                            | RA         | I                     |
| Supporting Operators                                                      | RA         | I                     |
| Managing licenses for operators                                           | RA         | I                     |
| Managing specific support plans for operators                             | RA         | I                     |

Some operator services may be managed depending on the managed services contract.

*May change to "A | RC" depending on the managed services contract

### Application Support

| **Activity**                                | **Client** | **Cloud Temple** |
|---------------------------------------------|------------|------------------------|
| Application Support (external service)      | RA         | I                      |

Application support can be provided through an additional service.

### RACI (synthetic)

- Cloud Temple: responsible and accountable (RA) for the Kubernetes foundation, cluster security, infrastructure backup, monitoring, and CRDs.
- Client: responsible and accountable (RA) for application projects, business operators, CI/CD pipelines, and application-level backups.
- "Grey zone": adaptations and extensions (IAM, specific operators, cluster compliance/security hardening) — billed on a project basis.