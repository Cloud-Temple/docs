---
title: Concepts
---

import cillium from './images/cillium.png'
import grafana from './images/grafana.png'
import archi_overview from './images/archi_overview.png'
import archi_overview_1az from './images/archi_overview_1az.png'

## Managed Kubernetes Overview

The **Managed Kubernetes** offering (also known as "Kub Managé" or "KM") is a Kubernetes containerization solution managed by Cloud-Temple, deployed as Virtual Machines running on Cloud-Temple's IaaS infrastructure (OpenIaaS or VMware).

**Managed Kubernetes** is built on Talos Linux (https://www.talos.dev/), a lightweight and secure operating system dedicated to Kubernetes. It is immutable, with no shell or SSH access, and configured exclusively through a declarative API using gRPC.

The standardized installation includes a set of components, mostly open-source and CNCF-certified:

- **CNI Cillium**, with observability interface (**Hubble**): Cillium is a Kubernetes container networking solution (*Container Network Interface*). It handles security, load balancing, service mesh, observability, encryption, and more. It is a core networking component found in most Kubernetes distributions (OpenShift, AKS, GKE, EKS, etc.). We have included the **Hubble** graphical interface for visualizing Cillium traffic flows.

    <img src={cillium} />

- **MetalLB** and **nginx**: For exposing web applications, three **nginx** *ingress-classes* are included by default:
    - *nginx-external-secured*: Public IP exposure, filtered via firewall to allow only known IPs (used for product web interfaces and the Kubernetes API)
    - *nginx-external*: Exposure on a second public IP without filtering (or with client-specific filtering)
    - *nginx-internal*: Exposure on an internal IP only

    For non-web services, a **MetalLB** load balancer enables internal or public IP exposure (allowing deployment of additional ingresses, such as a WAF).

- **Distributed Storage Rook-Ceph**: For persistent volumes (PVs), an open-source distributed storage solution, **Ceph**, is integrated into the platform. It supports the following storage classes: *ceph-block*, *ceph-bucket*, and *ceph-filesystem*. A storage system with **7,500 IOPS/To** is used, enabling high performance. In production deployments (across 3 AZs), storage nodes are dedicated (1 node per AZ); in non-production deployments (1 AZ), storage is shared with worker nodes.

- **Cert-Manager**: The open-source **Cert-Manager** certificate manager is natively integrated into the platform.

- **ArgoCD**: We use **ArgoCD** for automated deployments of various components via a **CI/CD** pipeline.

- **Prometheus Stack** (Prometheus, Grafana, Promtail, Loki): Managed Kubernetes clusters come standard with a complete open-source **Prometheus** observability stack, including:
    - **Prometheus**
    - **Grafana**, with numerous pre-built dashboards
    - **Loki** and **Promtail**: Platform logs are exported to Cloud-Temple's S3 storage and integrated into Grafana.

    <img src={grafana} />

- **Harbor** is a **container registry** that allows you to store your container images or Helm charts directly within the cluster. It performs **vulnerability scanning** on your images and supports digital signing. **Harbor** also enables synchronization with other registries. (https://goharbor.io/)

- **KubeCost** (https://github.com/kubecost) is a FinOps tool for Kubernetes cost management. It enables fine-grained tracking of Kubernetes resource consumption and supports cost allocation by project/namespace.

- Advanced security policies with **Kyverno** and **Capsule**:
    - **Kyverno** (https://kyverno.io/) is a Kubernetes admission controller that enforces policies. It is essential for governance and security in Kubernetes environments.
    - **Capsule** (https://projectcapsule.dev/) is a permission management tool that simplifies access control in Kubernetes. It introduces the concept of *tenants*, enabling centralized and delegated permissions across multiple namespaces. With **Capsule**, users of the Managed Kubernetes platform are granted access restricted only to their own namespaces.

- **Veeam Kasten** (aka 'k10') is a solution for **Kubernetes workload backup**.

    It enables full deployment backups: manifests, volumes, etc., to Cloud-Temple's S3 object storage. **Kasten** uses **Kanister** to ensure application-consistent backups, such as for databases (https://docs.kasten.io/latest/usage/blueprints/).

    **Kasten** is a cross-platform tool compatible with other Kubernetes clusters (OpenShift, hyperscalers, etc.). It can be used for recovery scenarios, migration (K10 handles necessary adaptations via *transformations*, e.g., changing ingress-class), or "refresh" operations (e.g., scheduled restoration of a production environment into pre-production).

    **Veeam Kasten** requires licenses, billed per Worker node.

- (Optional): **Entra with SSO authentication**: For users wishing to authenticate directly to Managed Kubernetes using their EntraID (Microsoft 365) account, an optional SSO configuration via **Keycloak** is available. (*Integration with other external IdPs on request*)

## SLA & Support Information
- **Guaranteed Availability (production 3 AZ):** 99.95%
- **Support:** N1/N2/N3 included for the core scope (infrastructure and standard operators).
- **Mean Time to Recovery (MTTR) Commitment:** As per the Cloud Temple framework agreement.
- **Maintenance (MCO):** Regular patching of Talos / Kubernetes / standard operators by MSP, with no service interruption (rolling upgrade).

Response and recovery timeframes depend on the incident severity, according to the support matrix (P1 to P4).

## Versioning Policy & Lifecycle

- **Supported Kubernetes:** N-2 (3 major releases per year, approximately every 4 months). Each release is officially supported for 12 months, ensuring a maximum Cloud Temple support window of ~16 months per version.
- **Talos OS:** aligned with stable Kubernetes releases.
  - Each branch is maintained for approximately 12 months (including security patches).
  - Recommended upgrade frequency: 3 times per year, consistent with Kubernetes upgrades.
  - Critical patches (CVE, kernel) are applied via rolling upgrade, without service interruption.
- **Standard Operators:** updated within 90 days following stable release.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): scheduled 3 times per year, applied via rolling update.
  - **Minor:** applied automatically within 30 to 60 days.
- **Deprecation:** version N-3 → end of support within 90 days after the release of N.

## Kubernetes Nodes

### Production (multi-zone)
<img src={archi_overview} />

For a "production" (multi-zone) deployment, the following machines are used:

| **AZ** | **Machine**        | **vCores** | **RAM** | **Local Storage**                   |
| ------ | ------------------ | ---------- | ------- | ----------------------------------- |
| AZ07   | Git Runner         | 4          | 8 GB    | OS: 20 GB                           |
| AZ05   | Control Plane 1    | 8          | 12 GB   | OS: 20 GB                           |
| AZ06   | Control Plane 2    | 8          | 12 GB   | OS: 20 GB                           |
| AZ07   | Control Plane 3    | 8          | 12 GB   | OS: 20 GB                           |
| AZ05   | Storage Node 1     | 12         | 24 GB   | OS: 20 GB + Ceph 500 GB minimum (*) |
| AZ06   | Storage Node 2     | 12         | 24 GB   | OS: 20 GB + Ceph 500 GB minimum (*) |
| AZ07   | Storage Node 3     | 12         | 24 GB   | OS: 20 GB + Ceph 500 GB minimum (*) |
| AZ05   | Worker Node 1 (**) | 12         | 24 GB   | OS: 20 GB                           |
| AZ06   | Worker Node 2 (**) | 12         | 24 GB   | OS: 20 GB                           |
| AZ07   | Worker Node 3 (**) | 12         | 24 GB   | OS: 20 GB                           |

(*) Each storage node comes with a minimum of 500 GB of disk space, providing 500 GB of usable distributed Ceph storage (data is replicated across each AZ, hence ×3). The available free space for the client is approximately 350 GB. This initial size can be increased during deployment or later, depending on requirements.

(**) The size and number of Worker Nodes can be adjusted according to the client's compute capacity needs. The minimum number of Worker Nodes is 3 (1 per AZ), and we recommend increasing the number in batches of 3 to maintain consistent multi-zone distribution. Worker Node size can be customized, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is determined by the hypervisor size (up to 112 cores / 1536 GB of RAM with Performance 3 blade servers). The total number of Worker Nodes is limited to 250. The CNCF recommends using Worker Nodes of identical size. The maximum number of pods per Worker Node is 110.

### dev/test (single-zone)
<img src={archi_overview_1az} />

For a "dev/test" (single-zone) deployment, the following machines are provisioned:

| **AZ** | **Machine**        | **vCores** | **RAM** | **Local Storage**                  |
| ------ | ------------------ | ---------- | ------- | ---------------------------------- |
| AZ0n   | Git Runner         | 4          | 8 GB    | OS: 20 GB                          |
| AZ0n   | Control Plane      | 8          | 12 GB   | OS: 20 GB                          |
| AZ0n   | Worker Node 1 (**) | 12         | 24 GB   | OS: 20 GB + Ceph 300 GB minimum (*) |
| AZ0n   | Worker Node 2 (**) | 12         | 24 GB   | OS: 20 GB + Ceph 300 GB minimum (*) |
| AZ0n   | Worker Node 3 (**) | 12         | 24 GB   | OS: 20 GB + Ceph 300 GB minimum (*) |

(*) : Three Worker nodes are used as Storage nodes and are provisioned with a minimum of 300 GB of disk space, providing a distributed usable storage capacity of 300 GB (data is replicated three times). The available free space for the client is approximately 150 GB. This initial size can be increased during deployment or later, depending on requirements.

(**) : The size and number of Worker Nodes can be adjusted according to the client’s compute capacity needs. The minimum number of Worker Nodes is 3 (due to storage replication requirements). The minimum configuration per Worker Node is 12 cores and 24 GB of RAM; the upper limit per Worker Node is constrained by the size of the hypervisors used (up to 112 cores / 1536 GB of RAM with Performance 3 blade servers). The maximum number of Worker Nodes is capped at 250. The CNCF recommends using Worker Nodes of identical size. The maximum number of pods per Worker Node is 110.

## IaaS Prerequisites

You must have an IaaS infrastructure with the minimum requirements for deploying Managed Kubernetes:

### Production (multi-zone)

- 1 Cloud-Temple tenant
- 3 AZs
- 2 public IPs available
- 1 multi-zone VLAN with a private IPv4 range **/22**
- 1 firewall cluster: preferably Fortigate, to enable BGP-based load balancing and full automation (other firewall clusters are acceptable)
- ~2 TB of S3 storage (billed at actual usage)
- Per AZ:
    - 1 hypervisor host (OpenIaaS or VMware) per AZ with 40 cores, and 72 GB of RAM dedicated to Managed Kubernetes (ECO or higher instance type)
    - 600 GB available in a datastore with **7,500 effective IOPS** (e.g., a 2.5 TB datastore with 3,000 IOPS)

### Dev/Test (single-zone)

- 1 Cloud-Temple tenant
- 1 Availability Zone (AZ)
- 2 public IPs available
- 1 VLAN with a private IPv4 range **/22**
- 1 firewall cluster: preferably Fortigate, to enable BGP-based load balancing and full automation (other firewall clusters are acceptable)
- 48 CPU cores and 92 GB RAM available (it is acceptable if cores are subject to a virtualization factor of 1.5)
- 1.2 TB available in a datastore with **7,500 effective IOPS**
- ~1 TB of S3 storage (billed at actual usage)