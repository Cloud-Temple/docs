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

:::info[Managed service, outside Console]

Managed Kubernetes is subscribed through the Cloud Temple teams. It is not ordered from the Cloud Temple Console, which offers neither a view nor an API for this service.

:::

<a id="nos-offres-managed-kubernetes"></a>

## Overview

Managed Kubernetes is a fully managed container orchestration platform, based on open source standards validated by the CNCF. Each cluster is deployed in a client-dedicated environment, on a single availability zone or on three. The platform is delivered ready to use, with a complete stack for networking, security, storage, continuous deployment, observability, backup, and cost management.

For teams that prefer to build their own platform on a minimal foundation, the [Managed Core Kubernetes](../managed_core_kubernetes/concepts.md) offering provides only the base components.

### Comparative table of offerings

| Component                        | Managed Core Kubernetes | Managed Kubernetes          |
| -------------------------------- | ----------------------- | --------------------------- |
| **OS**                           | ✅Talos                 | ✅Talos                     |
| **CNI**                          | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                | ✅MetalLB               | ✅MetalLB                   |
| **Distributed storage**           | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Local storage**               | 🔵TopoLVM               | 🔵TopoLVM                   |
| **CNI Observability**            | ❌                      | ✅Hubble                    |
| **Ingress**                      | ❌                      | ✅Ingress Nginx             |
| **Observability**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Backup and Migration**      | ❌                      | ✅Veeam Kasten              |
| **Governance and Security**      | ❌                      | ✅Kyverno, Capsule          |
| **Certificate Management**      | ❌                      | ✅Cert-Manager              |
| **Continuous Deployment (GitOps)** | ❌                      | ✅ArgoCD (disableable)     |
| **Container Registry**           | ❌                      | ✅Harbor (disableable)     |
| **SSO Authentication**         | ❌                      | ✅OIDC Integration (disableable) |
| **Pod Autoscaling**          | ❌                      | 🔵Keda                      |
| **Cost Management (FinOps)**   | ❌                      | ✅OpenCost (disableable)   |
| **Observability (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : included
🔵 : optional
❌ : not included

Components marked ✅ are included in the offering. Those marked as "disableable" (ArgoCD, Harbor, OpenCost, and SSO authentication) can be disabled.

### Target audiences and use cases

Managed Kubernetes is designed for DevOps teams, cloud-native application developers, architects migrating to containerized architectures, and public or regulated organizations. Typical use cases:

<<<<<<< HEAD
- **CNI Cilium**, with observability interface (**Hubble**): Cilium is a networking solution for Kubernetes containers (*Container Network Interface*). It handles security, load balancing, service mesh, observability, encryption, etc... It is a fundamental network component found in most Kubernetes distributions (OpenShift, AKS, GKE, EKS,...). In **Managed Kubernetes**, we have included the **Hubble** graphical interface for visualizing Cilium flows.
  - **Gateway API**: the Gateway API CRDs (≥ v1.6.1) are installed before Cilium and are required by Cilium ≥ 1.20 for the Gateway API.

  <img src={cillium} />

  The diagram below illustrates the distinction between the network carried by the CNI (pod ↔ pod traffic) and the node network, as well as how Cilium encapsulates traffic between nodes:

  <img src={cni_vs_node} alt="CNI network vs node network" />
- **MetalLB** and **nginx**: For exposing web applications, 3 *ingress-class* **nginx** are integrated by default:
=======
- **Cloud-native applications**: microservices architectures.
- **Migration to containers**: progressive modernization of existing applications.
- **Advanced CI/CD**: automated deployment pipelines in GitOps.
- **Multiple environments**: separation of development, test, and production.
- **Critical applications**: high availability across three availability zones.
- **Regulatory compliance**: deployments subject to sovereignty requirements.

## Advantages

| Advantage                      | Description                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Fully managed            | Cluster configuration, deployment, and lifecycle are handled.                                         |
| High availability           | In production, the cluster is spread across three availability zones.                                            |
| Security by design            | Minimalist and immutable OS, managed only via API, without shell or SSH access.                                      |
| Ready-to-use platform   | Networking, observability, backup, governance, and certificates are integrated from delivery.                      |
| CNCF compatible               | Open source standards avoid vendor lock-in and guarantee the portability of your applications. |

<a id="présentation-des-produits-managed-core-kubernetes"></a>

## Features

Clusters are based on Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), a Kubernetes-dedicated operating system, lightweight and secure. It is immutable, without shell or SSH access, and configured only declaratively via a gRPC API. The standardized installation includes a set of components, mostly open source and validated by the CNCF.

### Networking and service exposure

- **CNI Cilium**, with the **Hubble** observability interface: Cilium manages container networking (*Container Network Interface*): security, load balancing, service mesh, observability, encryption. The **Hubble** graphical interface allows visualizing Cilium flows.

  <img src={cillium} />
>>>>>>> origin/dev

- **MetalLB** and **nginx**: for exposing web applications, three *ingress-class* **nginx** are integrated:
  - *nginx-external-secured*: exposure on a public IP, filtered at the firewall to only allow known IPs (used for the graphical interfaces of the various products and for the Kubernetes API);
  - *nginx-external*: exposure on a second unfiltered public IP (or with client-specific filtering);
  - *nginx-internal*: exposure on an internal IP only.

  For "non-web" services, the **MetalLB** load balancer exposes services internally or on public IPs, which allows deploying other ingress, for example a WAF.

> Note: the open source version of nginx used is the one *maintained by F5 Networks*, and not the original version, which is deprecated.

### Storage

<<<<<<< HEAD
  - **Prometheus**, for metrics collection
  - **Grafana**, with numerous dashboards
  - **Alloy**: log and metrics collection agent (it replaces Promtail).
  - **Loki**: platform logs are exported to Cloud-Temple S3 storage (and integrated in Grafana).
  - **Pyroscope**: (optional) continuous profiling platform, queryable via LLM.
=======
- **Distributed storage Rook-Ceph**: open source **Ceph** storage for persistent volumes (PV). It provides the *storage-classes* *ceph-block* (block, multi-zone replicated), *ceph-block-norepl* (block, non-replicated) and *ceph-filesystem* (file, multi-zone replicated). The storage used offers **7,500 IOPS**.
- **Local storage TopoLVM** (optional): the *storage-class* *topolvm-ssd* stores data locally *on Worker nodes*. This option is useful for applications that replicate their own data (Kafka, MongoDB, PostgreSQL…) and benefit from ultra-fast, low-latency storage. It is generally used to dedicate *Worker nodes* to a specific workload.
>>>>>>> origin/dev

### Observability

The open source **Prometheus** stack is delivered as standard:

- **Prometheus**, for metrics collection;
- **Grafana**, with numerous dashboards;
- **Loki**: platform logs are exported to Cloud Temple Object Storage and integrated in Grafana;
- **Pyroscope** (optional): continuous profiling platform, queryable via an LLM.

<img src={grafana} />

<<<<<<< HEAD
## Reference versions (as of 11/2026)

- **Kubernetes**: v1.36.6
- **Talos**: v1.13.12

These versions are **a baseline**, that of the reference foundation at this date: they evolve with each foundation release (security patches, version upgrades). The exact versions deployed on a given cluster are listed in the DAT of that cluster. The version support policy is described below ("Version policy & lifecycle").

## Managed Helm packages (as of 11/2026)

The foundation below is deployed on every Managed Kubernetes cluster. The versions are a baseline, that of the reference template at this date; a cluster in service may be on an earlier version between two maintenance windows.

### Platform foundation (always deployed)

| **Component** | **Version** | **Repository** | **Primary Role** |
| --- | --- | --- | --- |
| **Cilium** | 1.20.4 | https://helm.cilium.io/ | Advanced CNI, network policies and observability (Hubble), API Gateway |
| **Gateway API** | v1.6.1 | https://gateway-api.sigs.k8s.io/ | Gateway API CRDs, installed before Cilium (Cilium ≥ 1.20 requires ≥ v1.6.1) |
| **MetalLB** | 0.16.1 | https://metallb.github.io/metallb | BGP LoadBalancer (BFD) exposing two ranges, internal and external, over TCP/UDP |
| **Rook-Ceph** | 1.20.1 | https://charts.rook.io/release | High-availability distributed storage (RBD block + CephFS) |
| **TopoLVM** | 17.3.0 | https://github.com/topolvm/topolvm | Node-local LVM storage for low-latency workloads |
| **Metrics Server** | 3.13.1 | https://github.com/kubernetes-sigs/metrics-server | Resource metrics API (`kubectl top`, HPA) |
| **kubelet-cert-approver** | v0.12.0 | https://github.com/alex1989hu/kubelet-serving-cert-approver | Automatic kubelet certificate approval |

### Managed platform services

| **Component** | **Version** | **Repository** | **Primary Role** |
| --- | --- | --- | --- |
| **Cert-Manager** | v1.21.3 | https://charts.jetstack.io | Automated TLS certificate management (ZeroSSL integrated) |
| **NGINX Ingress** | 2.8.0 | https://helm.nginx.com/stable | Ingress controllers: internal, external, and external-secured (with IP filtering) |
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

| StorageClass | Backend | Access mode | Typical usage |
| --- | --- | --- | --- |
| `ceph-block` | Ceph RBD (distributed block) | ReadWriteOnce | Databases, single-pod workloads |
| `ceph-filesystem` | CephFS (distributed file system) | ReadWriteMany | Volumes shared between pods |
| `topolvm-ssd` | TopoLVM (node-local LVM) | ReadWriteOnce | Low-latency local storage, non-replicated, backed up by Kasten **in blueprint mode** only (see Backup) |

**Quotas** — standard values of a delivered cluster, **adjustable per cluster** at order time and during its lifecycle:

| Scope | RBD (block) | CephFS |
| --- | --- | --- |
| Pool ceiling, all tenants combined | 300 Gi | 125 Gi |
| Default tenant ceiling, applied by Capsule | 115 Gi | 100 Gi |

The Ceph capacity itself depends on the chosen sizing: with the default template (3 Ceph nodes at 500 GB), a cluster has 1500 GB raw, i.e., 500 GB usable after ×3 replication.

## SLA & Support Information

- **Guaranteed availability (production 3 AZ)**: 99.95%
- **Support**: N1/N2/N3 included for the foundation scope (infrastructure and standard operators).
- **Support matrix**: response and recovery times depend on the incident severity, according to the P1 to P4 matrix below.
- **RPO / RTO commitment**: on a 3 AZ cluster, RPO ≤ 24 h and RTO ≤ 4 h. In single-AZ, backups exist but are not covered by an RTO commitment.
- **Maintenance (MCO)**: regular patching of Talos / Kubernetes / standard operators by MSP, without service interruption (rolling upgrade).

| Level | Definition | Response time | Target recovery |
| --- | --- | --- | --- |
| **P1** | Production unavailable | Immediate (24/7) | ≤ 4 h |
| **P2** | Major degradation | ≤ 1 h (24/7) | ≤ 8 h |
| **P3** | Minor degradation | ≤ 4 h (business hours) | ≤ 2 business days |
| **P4** | Question / enhancement | ≤ 1 business day | To be scheduled |
=======
### Governance and security

- **Kyverno** ([https://kyverno.io/](https://kyverno.io/)): admission controller that enforces security and governance policies.
- **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)): permission management with the concept of *tenant*, which centralizes and delegates rights across multiple namespaces. Platform users thus have rights restricted to their own namespaces only.
- **Cert-Manager**: natively integrated open source certificate manager.
- **SSO Authentication** (included, disableable): integration with an external OIDC identity provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce…).

### Deployment and automation
>>>>>>> origin/dev

- **ArgoCD** (included, can be disabled): automated GitOps deployments, within a **CI/CD** pipeline.
- **Harbor** (included, can be disabled): a **container registry** that stores your container images and Helm charts directly in the cluster. It performs **vulnerability scans** on your images and synchronizes with other registries ([https://goharbor.io/](https://goharbor.io/)).
- **Keda** (optional): pod autoscaling based on advanced metrics, for example a number of HTTP connections.
- **OpenCost** (included, can be disabled, [https://github.com/opencost/opencost](https://github.com/opencost/opencost)): FinOps tracking of Kubernetes resource consumption and chargeback by project or namespace.

### Backup

**Veeam Kasten** (also known as K10) backs up a complete deployment (manifests, volumes…) to Cloud Temple Object Storage. It relies on **Kanister** for application-consistent backups, for example for databases ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

## Architecture

### Production (multi-zone)

<img src={archi_overview} />

<<<<<<< HEAD
#### Architecture diagrams

- **HLD (High Level Design) view**:

<img src={arch_hld} alt="HLD architecture diagram" />

- **LLD (Low Level Design) view**:

<img src={arch_lld} alt="LLD architecture diagram" />

For a production deployment (multi-zone), the following machines are used:

| **AZ** | **Machine**   | **vCores** | **RAM** | **Local storage**              |
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

(*) : The size and number of Worker Nodes can be adjusted according to the client's compute capacity requirements. The minimum number of Worker Nodes is 3 (1 per AZ), and we recommend increasing their number in batches of 3 to maintain a consistent multi-zone distribution. The size of Worker Nodes can be adjusted, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is set by the size of the hypervisors used (so potentially 112 cores/1536 GB of RAM with Performance 3 blades). The number of Worker Nodes is limited to 100. The CNCF recommends having Worker Nodes of identical size. The limit on the number of pods per Worker Node is 110.

(**) : the size of Storage Nodes can be increased depending on the size of the associated Ceph storage. (for example: 24c/128GB for 10 TB of Ceph)

(***) : Each storage node is delivered with a minimum of 500 GB of disk space, for a distributed Ceph usable storage of 500 GB (data is replicated on each AZ, so x3). The free space available to the client is approximately 350 GB. This initial size can be increased at build time, or later, depending on needs. Quotas are applied on Ceph, with a Block/File split.
=======
The production cluster is distributed across three availability zones:

- **Control Plane**: three nodes, one per zone;
- **storage nodes**: three dedicated Rook-Ceph nodes, one per zone;
- **Worker nodes**: at least three, one per zone, adjustable according to your needs;
- **Bare Metal Worker nodes** (optional): for specific performance requirements, notably GPUs;
- **Git Runner**: one node for CI/CD pipelines;
- **managed firewall**: two virtual machines, which filter the public IPs of the Kubernetes API and secure ingress.
>>>>>>> origin/dev

### Dev/test (single zone)

<img src={archi_overview_1az} />

The development and test cluster is deployed on a single availability zone, with a Control Plane, a minimum of three Worker nodes and a Git Runner. Ceph storage is shared across the Worker nodes.

<<<<<<< HEAD
| **AZ** | **Machine** | **vCores** | **RAM** | **Local storage**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 GB          | OS: 256 GB                           |
| AZ0n         | Control Plane     | 8                | 12 GB         | OS: 128 GB                           |
| AZ0n         | Worker Node 1 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB minimum (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB minimum (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 GB         | OS: 128 GB + Ceph 300 GB minimum (**) |

(*) : The size and number of Worker Nodes can be adjusted according to the client's compute capacity requirements. The minimum number of Worker Nodes is 3 (due to storage replication). The size of Worker Nodes can be adjusted, with a minimum of 12 cores and 24 GB of RAM; the upper limit per Worker Node is set by the size of the hypervisors used (so potentially 112 cores/1536 GB of RAM with Performance 3 blades). The number of Worker Nodes is limited to 100. The CNCF recommends having Worker Nodes of identical size. The limit on the number of pods per Worker Node is 110.
=======
### Integrations

- **Cloud Temple Object Storage**: logs (Loki) and backups (Kasten).
- **Identity providers**: integration via OIDC, included and can be disabled.
- **Cloud Temple IaaS**: interconnection of clusters with virtualized resources, such as databases or middleware components.
>>>>>>> origin/dev

## Regions and availability zones

Managed Kubernetes is available in the FR1 region. A production cluster is distributed across three availability zones; a development and test cluster is deployed on a single one. Data is hosted in France.

<a id="noeuds-kubernetes"></a>

## Technical specifications

### Nodes of a production cluster

| **AZ** | **Machine**         | **vCores** | **RAM** | **Local storage**                    |
| ------ | ------------------- | ---------- | ------- | ------------------------------------- |
| AZ07   | Git Runner          | 4          | 8 GB    | OS: 256 GB                            |
| AZ05   | Control Plane 1     | 8          | 12 GB   | OS: 64 GB                             |
| AZ06   | Control Plane 2     | 8          | 12 GB   | OS: 64 GB                             |
| AZ07   | Control Plane 3     | 8          | 12 GB   | OS: 64 GB                             |
| AZ05   | Storage Node 1 (**) | 12         | 24 GB   | OS: 64 GB + Ceph 500 GB minimum (***) |
| AZ06   | Storage Node 2 (**) | 12         | 24 GB   | OS: 64 GB + Ceph 500 GB minimum (***) |
| AZ07   | Storage Node 3 (**) | 12         | 24 GB   | OS: 64 GB + Ceph 500 GB minimum (***) |
| AZ05   | Worker Node 1 (*)   | 12         | 24 GB   | OS: 64 GB                             |
| AZ06   | Worker Node 2 (*)   | 12         | 24 GB   | OS: 64 GB                             |
| AZ07   | Worker Node 3 (*)   | 12         | 24 GB   | OS: 64 GB                             |

(*) : the size and number of Worker Nodes adapt to your compute capacity requirements. It is recommended to increase their number in batches of 3 to maintain a consistent multi-zone distribution, and to have Worker Nodes of identical size, as recommended by the CNCF.

(**) : the size of Storage Nodes can be increased depending on the size of the associated Ceph storage (for example 24 cores and 128 GB of RAM for 10 TB of Ceph).

(***) : each storage node is delivered with a minimum of 500 GB of disk space, for a distributed Ceph usable storage of 500 GB (data is replicated on each zone, so three times). The free space available to the client is approximately 350 GB. This initial size can be increased at build time or later. Quotas are applied on Ceph, with a block / file split.

### Nodes of a development and test cluster

| **AZ** | **Machine**       | **vCores** | **RAM** | **Local storage**                   |
| ------ | ----------------- | ---------- | ------- | ------------------------------------ |
| AZ0n   | Git Runner        | 4          | 8 GB    | OS: 256 GB                           |
| AZ0n   | Control Plane     | 8          | 12 GB   | OS: 64 GB                            |
| AZ0n   | Worker Node 1 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |
| AZ0n   | Worker Node 2 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |
| AZ0n   | Worker Node 3 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |

(*) : the size and number of Worker Nodes adapt to your needs. The minimum of three Worker Nodes is imposed by storage replication.

(**) : three Worker Nodes serve as storage nodes and are delivered with a minimum of 300 GB of disk space, for a distributed usable storage of 300 GB (data is replicated three times). The free space available to the client is approximately 150 GB. This initial size can be increased at build time or later.

### Limits

| Parameter                          | Production                         | Development and test              |
|------------------------------------|------------------------------------|------------------------------------|
| Number of Worker Nodes             | 3 minimum (1 per zone), 100 maximum | 3 minimum, 250 maximum            |
| Minimum Worker Node size           | 12 cores, 24 GB of RAM             | 12 cores, 24 GB of RAM             |
| Maximum Worker Node size           | Hypervisor size, up to 112 cores and 1,536 GB of RAM (Performance 3 blades) | Same |
| Pods per Worker Node               | 110                                | 110                                |

## Security and compliance

Managed Kubernetes is HDS and ISO 27001 certified, and available on SecNumCloud qualified and C5 compliant services.

- **Immutable OS**: no shell or SSH access, managed only via API.
- **Encryption**: data encrypted at rest and in transit, physical encryption of links between availability zones.
- **Governance**: Kyverno policies, per-tenant permissions with Capsule, full audit log.
- **Data residency**: France (FR1), in standard Kubernetes formats.

## Backup and continuity

<<<<<<< HEAD
#### Infrastructure backup (managed scope)

- **Cluster backup via Kasten K10** (Disaster Recovery and Infrastructure part), with disaster recovery tests.
- **Base scope**: namespaces & PVCs (Ceph RBD), critical infra CRD objects, observability, standard operators.
- **etcd (cluster state)**: daily snapshot taken by Cloud Temple outside Kasten, with the Talos node configuration; it is used to rebuild the control plane. Snapshots are retained for 2 days on the management VM, itself backed up at the IaaS level by a daily policy with 35 days of retention.
- **Frequency**: daily (7-day retention) and weekly (4-week retention).
- **Commitments**: RPO ≤ 24 h, RTO ≤ 4 h (automated cluster reconstruction and component restoration via Kasten).
- **Target**: S3 Cloud Temple (FR), server-side encryption.

#### Client workload backup (label-based)

The service provides a flexible mechanism to back up client workloads using labels.

- **Mechanism**: register resources (namespaces, PVCs, etc.) in a backup policy via specific labels.
- **Available policies**: 24 hourly policies, covering each hour of the day (00 to 23 UTC).
- **Label format**: `kasten-dailyHH-r7d: "true"` (where `HH` is the hour in 24-hour format, e.g. `00`, `14`, `23`).
- **Frequency**: daily at the specified time (UTC). **Retention**: 7 days on S3.
- **Example**: to back up a namespace every day at 14:00 UTC, add the label `kasten-daily14-r7d: "true"` to the namespace.
- **TopoLVM Volumes**: `topolvm-ssd` does not support snapshots; without precaution, a backed-up namespace containing a TopoLVM volume will have its **entire** backup fail, including Ceph volumes. These volumes are backed up with Kasten **in blueprint mode** (Kanister): Kasten performs an application backup (database dump, data export) sent to S3, and the restore replays the reverse operation. The blueprint is specific to each application and is set up **on a case-by-case basis**, at the client's request.
- **Application scope**: RPO and RTO defined by the client.

### Support and troubleshooting
=======
- **Workload backup**: Veeam Kasten backs up your deployments (manifests and volumes) to Cloud Temple Object Storage, with application-consistent backups.
- **Storage replication**: in production, replicated Ceph volumes are copied across the three availability zones.
- **High availability**: in production, the Control Plane and storage nodes are distributed across three zones.
>>>>>>> origin/dev

<a id="politique-de-versions--cycle-de-vie"></a>

## Versions and lifecycle

- **Supported Kubernetes:** N-2 (three major releases per year, approximately every four months). Each release is officially supported for 12 months, resulting in a support window of approximately 16 months maximum per version.
- **Talos OS:** aligned with stable Kubernetes versions.
  - Each branch is maintained for approximately 12 months, including security patches.
  - Recommended upgrade cadence: three times per year, in line with Kubernetes upgrades.
  - Critical patches (CVE, kernel) are applied via rolling upgrade, without service interruption.
- **Updates:**
  - **major** (Kubernetes N+1, Talos X+1): scheduled three times per year, via rolling update;
  - **minor**: applied automatically within 30 to 60 days.
- **Deprecation:** version N-3 reaches end of support 90 days after the release of version N.

<a id="sla--information-sur-le-support"></a>

## Service availability

| Element                     | Availability target, measured over one month |
|-----------------------------|-----------------------------------------------|
| Production cluster (Kubernetes API) | 99.95 %                            |
| Production storage (Ceph volumes)  | 99.90 %                            |

Development and test clusters have no availability target.

<a id="raci"></a>

## Responsibilities

The allocation of responsibilities between the client and Cloud Temple is detailed in the [Managed Kubernetes RACI matrix](../contractual/kubernetes/raci.md). In summary:

- **Cloud Temple** is responsible for the Kubernetes platform and managed services: security, cluster backup, monitoring, updates, and included operators.
- **The client** is responsible for its application projects, its business operators, its CI/CD pipelines, and the backups of its applications.
- **Support**: levels 1, 2, and 3 included for the platform (infrastructure and standard operators). Response times depend on the severity of the incident (P1 to P4).
- **Maintenance**: regular patching of Talos, Kubernetes, and standard operators, via rolling upgrade, with no service interruption.

## Reversibility

Clusters are built on open source standards and standard Kubernetes formats, which guarantees the portability of your applications.

| Operation                | Deliverable                 | Timeline    | Cost       |
|--------------------------|-----------------------------|-------------|------------|
| Application export       | Kubernetes YAML manifests   | 15 days     | No charge  |
| Volume backup            | Veeam Kasten backups        | Continuous  | Included   |
| Migration assistance     | Technical support           | On request  | On quote   |

**Veeam Kasten** also works with other Kubernetes clusters (OpenShift, hyperscalers…). It can therefore be used for reversibility or migration scenarios, managing the necessary adaptations via *transformations* (for example a change of ingress-class), but also for "refresh" scenarios, such as the scheduled restoration of a production environment to pre-production.

## Pricing

The managed service is billed monthly, per cluster; the underlying IaaS infrastructure (compute, storage, network) is billed separately, based on sizing. Pricing is published on the Cloud Temple website product page:
[Managed Kubernetes — pricing](https://www.cloud-temple.com/produits/managed-kubernetes/).
