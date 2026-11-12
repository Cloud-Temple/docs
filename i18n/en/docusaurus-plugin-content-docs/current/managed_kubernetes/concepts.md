---
title: Concepts
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import arch_hld from '@site/docs/managed_kubernetes/images/archmk-prod.png'
import arch_lld from '@site/docs/managed_kubernetes/images/archmck-prod-LLD-FR.png'
import cni_vs_node from '@site/docs/managed_kubernetes/tutorials/images/cni-vs-node.png'

## Our Managed Kubernetes Offerings

Cloud Temple offers two distinct offerings to meet your container orchestration needs:

- **Managed Core Kubernetes**: A minimalist product that provides you with a robust and secure Kubernetes foundation, based on cutting-edge open-source components. It is ideal for expert teams who want to build their own custom platform.
- **Managed Kubernetes**: A complete, ready-to-use solution that includes a full stack of tools for networking, security, storage, continuous deployment, observability, backup, and cost management.

### Offerings Comparison Table

| Component                               | Managed Core Kubernetes | Managed Kubernetes          |
| --------------------------------------- | ----------------------- | --------------------------- |
| **OS**                            | ✅Talos                 | ✅Talos                     |
| **CNI**                           | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                 | ✅MetalLB               | ✅MetalLB                   |
| **Distributed Storage**           | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Local Storage**                | 🔵TopoLVM               | 🔵TopoLVM                   |
| **CNI Observability**            | ❌                      | ✅Hubble                    |
| **Ingress**                       | ❌                      | ✅Ingress Nginx             |
| **Observability**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Backup and Migration**       | ❌                      | ✅Veeam Kasten              |
| **Governance and Security**     | ❌                      | ✅Kyverno, Capsule          |
| **Certificate Management**       | ❌                      | ✅Cert-Manager              |
| **Continuous Deployment (GitOps)** | ❌                      | 🔵ArgoCD                    |
| **Container Registry**            | ❌                      | 🔵Harbor                    |
| **SSO Authentication**          | ❌                      | 🔵OIDC Integration         |
| **Pod Autoscaling**           | ❌                      | 🔵Keda                      |
| **Cost Management (FinOps)**   | ❌                      | 🔵OpenCost                  |
| **Observability (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : included
🔵 : optional/disablable
❌ : not included

## Managed (Core) Kubernetes Product Overview

**Managed Core Kubernetes** is based on Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), a Kubernetes-dedicated operating system that is lightweight and secure. It is immutable, with no shell or SSH access, and configured exclusively in a declarative manner via gRPC API.

The standardized installation includes a set of components, mostly OpenSource and validated by the CNCF:

- **CNI Cilium**, with observability interface (**Hubble**): Cilium is a networking solution for Kubernetes containers (*Container Network Interface*). It handles security, load balancing, service mesh, observability, encryption, etc... It is a fundamental network component found in most Kubernetes distributions (OpenShift, AKS, GKE, EKS,...). In **Managed Kubernetes**, we have included the **Hubble** graphical interface for visualizing Cilium traffic flows.
  - **Gateway API**: Gateway API CRDs (≥ v1.6.1) are installed before Cilium and are required by Cilium ≥ 1.20 for the Gateway API.

  <img src={cillium} />

  The diagram below illustrates the distinction between the network carried by the CNI (pod ↔ pod traffic) and the node network, as well as how Cilium encapsulates traffic between nodes:

  <img src={cni_vs_node} alt="Réseau CNI vs réseau des nœuds" />
- **MetalLB** and **nginx**: For exposing Web applications, 3 *ingress-class* **nginx** are integrated by default:

  - *nginx-external-secured*: exposure on a public IP, filtered on the firewall to only allow known IPs (used for the graphical interfaces of the various products, and the Kubernetes API)
  - *nginx-external*: exposure on a second unfiltered public IP (or client-specific filtering)
  - *nginx-internal*: exposure on an internal IP only

    For "non-web" services, a **metalLB** load balancer allows exposing services internally or on public IPs. (this allows deploying other ingresses, such as a WAF for example)

> Note: we use nginx in the openSource version *maintained by F5 Networks*. (not the original, open-source version, which is deprecated)

- **Distributed Storage Rook-Ceph**: for persistent volume (PV) storage, an OpenSource **Ceph** distributed storage is integrated into the platform. It allows using the *storage-classes* *ceph-block* (Block, multi-zone replicated), *ceph-block-norepl* (Block, non-replicated), and *ceph-filesystem* (File, multi-zone replicated). Storage with **7500 IOPS** is used, enabling high performance. In production deployments (on 3 AZs), storage nodes are dedicated (1 node per AZ); in non-production deployments (1 AZ), storage is shared with worker nodes.
- **Local Storage TopoLVM**: for persistent volume (PV) storage, an OpenSource **TopoLVM** local storage can be added (as an option) to the platform. It allows using the *storage-class* *topolvm-ssd* to store data locally, *on the Worker nodes*. This option is useful for deployments that use built-in application-level replication (Kafka, MongoDB, PostgreSQL, ...) and benefit from ultra-fast storage with reduced latency. This option is generally used to dedicate *Worker nodes* to a specific workload.
- **Cert-Manager**: the OpenSource certificate manager **Cert-Manager** is natively integrated into the platform.
- **ArgoCD** is available to you for automated deployments via a **CI/CD** pipeline. (optional)
- **Prometheus** Stack (Prometheus, Grafana, Loki): Managed Kubernetes clusters are delivered by default with a complete OpenSource **Prometheus** stack for observability, including:

  - **Prometheus**, for metrics collection
  - **Grafana**, with numerous dashboards
  - **Alloy**: log and metrics collection agent (it replaces Promtail).
  - **Loki**: platform logs are exported to Cloud-Temple S3 storage (and integrated into Grafana).
  - **Pyroscope**: (optional) continuous profiling platform, queryable via LLM.

    <img src={grafana} />
- **Harbor** is a **Container registry** that allows you to store your container images or Helm charts directly in the cluster. It performs **vulnerability scans** on your images. **Harbor** also allows synchronization with other registries. ([https://goharbor.io/](https://goharbor.io/)) (optional)
- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) is a cost management tool (FinOps) for Kubernetes. It allows you to finely track Kubernetes resource consumption and perform sub-billing by project/namespace. (optional)
- Advanced security strategies with **Kyverno** and **Capsule**:

  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) is an admission controller for Kubernetes that allows applying policies. It is an essential tool for governance and security in Kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) is a permissions management tool that facilitates rights management in Kubernetes. It introduces the concept of *tenant* which allows centralizing and delegating permissions across multiple namespaces. Via **Capsule**, users of the Managed Kubernetes platform therefore have rights restricted to their own namespaces only.
- **Veeam Kasten** (aka 'k10') is a solution for **backup** of Kubernetes workloads.

  It allows backing up a complete deployment: manifests, volumes, etc... to Cloud-Temple S3 object storage. **Kasten** uses **Kanister** to enable consistent application-level backups, for example for databases ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

  **Kasten** is a cross-platform tool that can work with other Kubernetes clusters (OpenShift, Hyperscaler,...). It can therefore be used for reversibility or migration scenarios (K10 handles potential adaptations via *transformations*, for example a change of ingress-class), but also for "refresh" (example: scheduled restoration of a production environment to pre-production).
- **SSO Authentication** with an External OIDC Identity Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...) (optional)
- **Keda** enables pod autoscaling via advanced metrics, such as for example a number of HTTP connections. (optional)

## Reference Versions (as of 11/2026)

- **Kubernetes**: v1.36.6
- **Talos**: v1.13.12

These versions are **a baseline**, that of the reference foundation at this date: they evolve with each release of the foundation (security patches, version upgrades). The exact versions deployed on a given cluster are listed in the DAT of that cluster. The version support policy is described below ("Version Policy & Lifecycle").

## Managed Helm Packages (as of 11/2026)

The foundation below is deployed on every Managed Kubernetes cluster. The versions are a baseline, that of the reference template at this date; a cluster in service may be on an earlier version between two maintenance windows.

### Platform Foundation (always deployed)

| **Component** | **Version** | **Repository** | **Primary Role** |
| --- | --- | --- | --- |
| **Cilium** | 1.20.4 | https://helm.cilium.io/ | Advanced CNI, network policies and observability (Hubble), Gateway API |
| **Gateway API** | v1.6.1 | https://gateway-api.sigs.k8s.io/ | Gateway API CRDs, installed before Cilium (Cilium ≥ 1.20 requires ≥ v1.6.1) |
| **MetalLB** | 0.16.1 | https://metallb.github.io/metallb | BGP LoadBalancer (BFD) exposing two ranges, internal and external, in TCP/UDP |
| **Rook-Ceph** | 1.20.1 | https://charts.rook.io/release | High-availability distributed storage (RBD block + CephFS) |
| **TopoLVM** | 17.3.0 | https://github.com/topolvm/topolvm | Node-local LVM storage for low-latency workloads |
| **Metrics Server** | 3.13.1 | https://github.com/kubernetes-sigs/metrics-server | Resource metrics API (`kubectl top`, HPA) |
| **kubelet-cert-approver** | v0.12.0 | https://github.com/alex1989hu/kubelet-serving-cert-approver | Automatic kubelet certificate approval |

### Managed Platform Services

| **Component** | **Version** | **Repository** | **Primary Role** |
| --- | --- | --- | --- |
| **Cert-Manager** | v1.21.3 | https://charts.jetstack.io | Automated TLS certificate management (ZeroSSL integrated) |
| **NGINX Ingress** | 2.8.0 | https://helm.nginx.com/stable | Ingress Controllers: internal, external and external-secured (with IP filtering) |
| **Kyverno** | 3.9.2 | https://kyverno.github.io/kyverno/ | Security policy enforcement |
| **Capsule** | 0.13.11 | https://projectcapsule.github.io/charts/ | Multi-tenancy and namespace isolation with security policies |
| **ArgoCD** | 10.11.6 | https://argoproj.github.io/argo-helm | GitOps / continuous deployment |
| **Prometheus Stack** | 87.21.0 | https://prometheus-community.github.io/helm-charts | Monitoring & alerting |
| **Alloy** | 1.11.0 | https://grafana.github.io/helm-charts | Log/metrics collection agent (replaces Promtail) |
| **Loki** | 18.7.0 | https://grafana.github.io/helm-charts | Log centralization (logs stored on S3 Cloud Temple) |
| **Pyroscope** | 2.1.0 | https://grafana.github.io/helm-charts | Continuous profiling & performance analysis (flamegraphs in Grafana) |
| **Harbor** | 1.19.4 | https://helm.goharbor.io | Image registry (images stored on S3 Cloud Temple) |
| **Kasten K10** | 9.0.9 | https://charts.kasten.io/ | Backup & restore (backups exported to S3 Cloud Temple) |
| **OpenCost** | 2.5.28 | https://opencost.github.io/opencost-helm-chart/ | Cost observability and tracking |
| **KEDA** | 2.21.0 | https://kedacore.github.io/charts | Event-driven autoscaling (Beta) |

**Stack footprint on the Ceph cluster: approximately 180 Gi**, identical in production and staging.

Three `StorageClass` are provided:

| StorageClass | Backend | Access Mode | Typical Usage |
| --- | --- | --- | --- |
| `ceph-block` | Ceph RBD (distributed block) | ReadWriteOnce | Databases, single-pod workloads |
| `ceph-filesystem` | CephFS (distributed file system) | ReadWriteMany | Volumes shared between pods |
| `topolvm-ssd` | TopoLVM (node-local LVM) | ReadWriteOnce | Low-latency local storage, non-replicated, backed up by Kasten **in blueprint mode** only (see Backup) |

**Quotas** — standard values of a delivered cluster, **adjustable per cluster** at order time and during its lifecycle:

| Scope | RBD (block) | CephFS |
| --- | --- | --- |
| Pool ceiling, all tenants combined | 300 Gi | 125 Gi |
| Default tenant ceiling, applied by Capsule | 115 Gi | 100 Gi |

The Ceph capacity itself depends on the chosen sizing: with the default template (3 Ceph nodes at 500 Go), a cluster has 1500 Go raw, i.e. 500 Go usable after ×3 replication.

## SLA & Support Information

- **Guaranteed Availability (production 3 AZ)**: 99.95%
- **Support**: N1/N2/N3 included for the foundation scope (infrastructure and standard operators).
- **Support Grid**: response and resolution times depend on the incident severity, in accordance with the P1 to P4 grid below.
- **RPO / RTO Commitment**: on a 3 AZ cluster, RPO ≤ 24 h and RTO ≤ 4 h. In single-AZ, backups exist but are not covered by an RTO commitment.
- **Maintenance (MCO)**: regular patching of Talos / Kubernetes / standard operators by MSP, without service interruption (rolling upgrade).

| Level | Definition | Response Time | Target Resolution |
| --- | --- | --- | --- |
| **P1** | Production unavailable | Immediate (24/7) | ≤ 4 h |
| **P2** | Major degradation | ≤ 1 h (24/7) | ≤ 8 h |
| **P3** | Minor degradation | ≤ 4 h (business hours) | ≤ 2 business days |
| **P4** | Question / improvement | ≤ 1 business day | To be scheduled |

## Versioning Policy & Lifecycle

- **Supported Kubernetes:** N-2 (3 major releases per year, approximately every 4 months). Each release is officially supported for 12 months, which ensures a Cloud Temple support window of ~16 months maximum per version.
- **Talos OS:** aligned with stable Kubernetes versions.
  - Each branch is maintained for approximately 12 months (security patches included).
  - Recommended upgrade cadence: 3 times per year, in line with Kubernetes upgrades.
  - Critical patches (CVE, kernel) are applied via rolling upgrade, with no service interruption.
- **Updates:**
  - **Major** (Kubernetes N+1, Talos X+1): scheduled 3 times/year, via rolling update.
  - **Minor**: applied automatically within a 30 to 60-day window.
- **Deprecation:** version N-3 → end of support within 90 days after the release of N.

## Kubernetes Nodes

### Production (multi-zonal)

<img src={archi_overview} />

#### Architecture Diagrams

- **HLD View (High Level Design)**:

<img src={arch_hld} alt="HLD Architecture Diagram" />

- **LLD View (Low Level Design)**:

<img src={arch_lld} alt="LLD Architecture Diagram" />

For a "production" deployment (multi-zonal), the following machines are used:

| **AZ** | **Machine**   | **vCores** | **RAM** | **Local Storage**              |
| ------------ | ------------------- | ---------------- | ------------- | ------------------------------------- |
| AZ07         | Git Runner          | 4                | 8 GB          | OS: 256 GB                            |
| AZ05         | Control Plane 1     | 8                | 12 GB         | OS: 128 GB                            |
| AZ06         | Control Plane 2     | 8                | 12 GB         | OS: 128 GB                            |
| AZ07         | Control Plane 3     | 8                | 12 GB         | OS: 128 GB                            |
| AZ05         | Storage Node 1 (**) | 12               | 24 GB         | OS: 128 GB + Ceph 500 GB minimum (***) |
| AZ06         | Storage Node 2 (**) | 12               | 24 GB         | OS: 128 GB + Ceph 500 GB minimum (***) |
| AZ07         | Storage Node 3 (**) | 12               | 24 GB         | OS: 128 GB + Ceph 500 GB minimum (***) |
| AZ05         | Worker Node 1 (*)   | 12               | 24 GB         | OS: 128 GB                            |
| AZ06         | Worker Node 2 (*)   | 12               | 24 GB         | OS: 128 GB                            |
| AZ07         | Worker Node 3 (*)   | 12               | 24 GB         | OS: 128 GB                            |

(*) : The size and number of Worker Nodes can be adjusted according to the client's compute capacity requirements. The minimum number of Worker Nodes is 3 (1 per AZ), and we recommend increasing their number in batches of 3 to maintain a consistent multi-zonal distribution. The size of Worker Nodes can be adjusted, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is determined by the size of the hypervisors used (thus potentially 112 cores/1536 GB of RAM with Performance 3 blades). The number of Worker Nodes is limited to 100. The CNCF recommends having worker nodes of identical size. The limit on the number of pods per Worker Node is 110.

(**) : The size of Storage Nodes can be increased depending on the size of the associated Ceph storage. (for example: 24c/128GB for 10 TB of Ceph)

(***) : Each storage node is delivered with a minimum of 500 GB of disk space, for a distributed Ceph usable storage of 500 GB (data is replicated across each AZ, hence x3). The free space available to the client is approximately 350 GB. This initial size can be increased at the time of construction, or later, depending on requirements. Quotas are applied on Ceph, with a Block/File split.

### Dev/test (single zone)

<img src={archi_overview_1az} />

For a "dev/test" version, the following machines are deployed:

| **AZ** | **Machine** | **vCores** | **RAM** | **Local Storage**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 GB          | OS: 256 GB                           |
| AZ0n         | Control Plane     | 8                | 12 GB         | OS: 128 GB                           |
| AZ0n         | Worker Node 1 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB minimum (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB minimum (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB minimum (**) |

(*) : The size and number of Worker Nodes can be adjusted according to the client's compute capacity requirements. The minimum number of Worker Nodes is 3 (due to storage replication). The size of Worker Nodes can be adjusted, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is determined by the size of the hypervisors used (thus potentially 112 cores/1536 GB of RAM with Performance 3 blades). The number of Worker Nodes is limited to 100. The CNCF recommends having worker nodes of identical size. The limit on the number of pods per Worker Node is 110.

(**) : 3 Worker Nodes are used as Storage Nodes and are delivered with a minimum of 300 GB of disk space, for a distributed usable storage of 300 GB (data is replicated three times). The free space available to the client is approximately 150 GB. This initial size can be increased at the time of construction, or later, depending on requirements.

## RACI

### Architecture & Infrastructure

| **Activity**                                                      | **Client** | **Cloud Temple** |
| ------------------------------------------------------------------------ | ---------------- | ---------------------- |
| Define the overall architecture of the Kubernetes service                    | C                | RA                     |
| Size the Kubernetes service (number of nodes, resources)        | C                | RA                     |
| Install the Kubernetes service with a default configuration       | I                | RA                     |
| Configure the Kubernetes service                                      | C                | RA                     |
| Configure the base network of the Kubernetes service                      | I                | RA                     |
| Deploy the initial configuration of identities and access   | C                | RA                     |
| Define the scaling and high availability strategy | C                | RA                     |

### Project and Business Application Management

| **Activity**                                  | **Client** | **Cloud Temple** |
| ---------------------------------------------------- | ---------------- | ---------------------- |
| Create and manage Kubernetes projects              | RA               | I*                     |
| Deploy and manage applications in Kubernetes | RA               | I*                     |
| Configure CI/CD pipelines                       | RA               | I*                     |
| Manage container images and registries     | RA               | I*                     |

*may change to "C" depending on the managed services contract

### Monitoring and Performance

| **Activity**                             | **Client** | **Cloud Temple** |
| ----------------------------------------------- | ---------------- | ---------------------- |
| Monitor the performance of the Kubernetes service | I                | RA*                    |
| Monitor the performance of applications      | RA               |                        |
| Manage alerts related to the Kubernetes service | I                | RA*                    |
| Manage alerts related to applications      | RA               |                        |

(*) : *Production Managed Kubernetes Cluster only. In Dev/Test and Core version, the client is fully autonomous and responsible.*

### Infrastructure Maintenance and Updates

| **Activity**                                        | **Client** | **Cloud Temple** |
| ---------------------------------------------------------- | ---------------- | ---------------------- |
| Update the Kubernetes service/OS                    | C                | RA                     |
| Apply security patches to Kubernetes       | C                | RA                     |
| Update deployed applications (operators*) | C                | RA                     |

*Operator package included on Managed Kube - see chapters: Managed Helm Packages

### Security

| **Activity**                                                              | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Manage the security of the Kubernetes service                                       | RA               | RA*                    |
| Configure and manage pod security policies                       | RA               | I                      |
| Manage SSL/TLS certificates for the Kubernetes service                        | C                | RA*                    |
| Manage SSL/TLS certificates for applications                             | RA               | I                      |
| Implement and manage basic role-based access control (RBAC) | C                | R*                     |
| Implement and manage client role-based access control (RBAC)  | RA               | I                      |

(*) : *Production Managed Kubernetes Cluster only. In Dev/Test and Core version, the client is fully autonomous and responsible.*

### Backup and Disaster Recovery

| **Activity**                                                          | **Client** | **Cloud Temple** |
| ---------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Define the backup strategy for the Kubernetes service              | I                | RA                     |
| Implement and manage backups of the Kubernetes service             | I                | RA                     |
| Define the backup strategy for applications                   | RA*              | I*                     |
| Implement and manage backups of applications                  | RA*              | I*                     |
| Test disaster recovery procedures for the Kubernetes service | CI               | RA                     |
| Test disaster recovery procedures for applications      | RA*              | CI*                    |

*may change to "CI | RA" depending on the managed services contract

#### Infrastructure Backup (managed scope)

- **Cluster backup via Kasten K10** (Disaster Recovery and Infrastructure part), with disaster recovery tests.
- **Baseline scope**: namespaces & PVC (Ceph RBD), critical infra CRD objects, observability, standard operators.
- **etcd (cluster state)**: daily snapshot taken by Cloud Temple outside of Kasten, with the Talos node configuration; it is used to rebuild the control plane. Snapshots are retained for 2 days on the management VM, itself backed up at the IaaS level by a daily policy with 35 days of retention.
- **Frequency**: daily (7-day retention) and weekly (4-week retention).
- **Commitments**: RPO ≤ 24 h, RTO ≤ 4 h (automated cluster reconstruction and component restoration via Kasten).
- **Target**: S3 Cloud Temple (FR), server-side encryption.

#### Client Workload Backup (label-based)

The service provides a flexible mechanism to back up client workloads using labels.

- **Mechanism**: register resources (namespaces, PVCs, etc.) in a backup policy via specific labels.
- **Available policies**: 24 hourly policies, covering each hour of the day (00 to 23 UTC).
- **Label format**: `kasten-dailyHH-r7d: "true"` (where `HH` is the hour in 24-hour format, e.g. `00`, `14`, `23`).
- **Frequency**: daily at the specified hour (UTC). **Retention**: 7 days on S3.
- **Example**: to back up a namespace every day at 14:00 UTC, add the label `kasten-daily14-r7d: "true"` to the namespace.
- **TopoLVM Volumes**: `topolvm-ssd` does not support snapshots; without precaution, a backed-up namespace containing a TopoLVM volume will have **its entire** backup fail, including Ceph volumes. These volumes are backed up with Kasten **in blueprint mode** (Kanister): Kasten performs an application-level backup (database dump, data export) sent to S3, and the restore replays the reverse operation. The blueprint is specific to each application and is set up **upon assessment**, at the client's request.
- **Application scope**: RPO and RTO defined by the client.

### Support and Problem Resolution

| **Activity**                                       | **Client** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Provide level 1 support for the infrastructure      | I                | RA                     |
| Provide level 2 and 3 support for the infrastructure | I                | RA                     |
| Resolve issues related to the Kubernetes service      | C                | RA                     |
| Resolve issues related to applications           | RA               | I                      |

### Capacity Management and Evolution

*Production Managed Kubernetes Cluster only. In Dev/Test and Core version, the client is fully autonomous and responsible.*

| **Activity**                                       | **Client** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Monitor Kubernetes resource utilization        | C                | RA                     |
| Plan the evolution of service capacities         | RA               | C                      |
| Implement capacity changes                 | I                | RA                     |
| Manage the evolution of applications and their resources | RA               | I                      |

### Documentation and Compliance

| **Activity**                              | **Client** | **Cloud Temple** |
| ------------------------------------------------ | ---------------- | ---------------------- |
| Maintain the Kubernetes product documentation | I                | RA                     |
| Maintain the application documentation      | RA               | I                      |
| Ensure compliance of the Kubernetes service     | I                | RA                     |
| Ensure compliance of applications          | RA               | I                      |
| Perform audits of the Kubernetes service       | I                | RA                     |
| Perform audits of applications            | RA               | I                      |

### Kubernetes Operators/CRD Management (included in the product)

| **Activity**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Provisioning of the default Operators catalog    | CI               | RA                     |
| Updating Operators                                  | CI               | RA                     |
| Monitoring the state of Operators                      | CI               | RA                     |
| Resolution of Operator-related issues              | CI               | RA                     |
| Management of Operator permissions                     | CI               | RA                     |
| Management of Operator resources (addition/removal)    | CI               | RA                     |
| Backup of Operator resource data        | CI               | RA                     |
| Monitoring of Operator resources                        | CI               | RA                     |
| Restoration of Operator resource data      | CI               | RA                     |
| Security audit of Operators                           | CI               | RA                     |
| Operator support                                       | CI               | RA                     |
| Management of licenses on operators                      | CI               | RA                     |
| Management of specific support plans on operators | CI               | RA                     |

*Operator package included in Managed Kube - see chapters: Managed Helm Packages

### Kubernetes Applications/Operators/CRD Management (client's)

*Production Managed Kubernetes cluster only. In Dev/Test and Core version, the client is fully autonomous and responsible.*

| **Activity**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Deployment of CRDs                                         | I*               | RA*                    |
| Updating Operators                                  | RA               | I                      |
| Monitoring the state of Operators                      | RA               | I                      |
| Resolution of Operator-related issues              | RA               | I                      |
| Management of Operator permissions                     | RA               | I                      |
| Management of Operator resources (addition/removal)    | RA               | I                      |
| Backup of Operator resource data        | RA               | I                      |
| Monitoring of Operator resources                        | RA               | I                      |
| Restoration of Operator resource data      | RA               | I                      |
| Security audit of Operators                           | RA               | I                      |
| Operator support                                       | RA               | I                      |
| Management of licenses on operators                      | RA               | I                      |
| Management of specific support plans on operators | RA               | I                      |

Some operator services may be supported depending on the managed services contract.

*may change to "A | RC" depending on the managed services contract

### Application support

| **Activity**                         | **Client** | **Cloud Temple** |
| ------------------------------------------- | ---------------- | ---------------------- |
| Application support (external service) | RA               | I                      |

Application support can be provided through a complementary service.

### RACI (summary)

- Cloud Temple: responsible and actor (RA) of the *Core Kubernetes* foundation and additional *Managed Kubernetes* services (security, backup, monitoring)
- Client: responsible and actor (RA) of application projects, business operators, CI/CD pipelines, application backups.
- "Grey" zone: adaptations and extensions (IAM, specific operators, cluster compliance/security hardening) - billed on a project basis.
