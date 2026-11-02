---
title: Concepts
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

<a id="nos-offres-managed-kubernetes"></a>

## Introduction

Managed Kubernetes is a fully managed container orchestration platform, based on CNCF-validated open source standards. Each cluster is deployed in an environment dedicated to the customer, on a single availability zone or on three. The platform is delivered ready to use, with a complete stack for networking, security, storage, continuous deployment, observability, backup and cost management.

For teams who prefer to build their own platform on a minimal foundation, the [Managed Core Kubernetes](../managed_core_kubernetes/concepts.md) offering provides only the core components.

### Offering comparison table

| Component                        | Managed Core Kubernetes | Managed Kubernetes          |
| -------------------------------- | ----------------------- | --------------------------- |
| **OS**                           | ✅Talos                 | ✅Talos                     |
| **CNI**                          | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                | ✅MetalLB               | ✅MetalLB                   |
| **Distributed storage**          | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Local storage**                | 🔵TopoLVM               | 🔵TopoLVM                   |
| **CNI observability**            | ❌                      | ✅Hubble                    |
| **Ingress**                      | ❌                      | ✅Ingress Nginx             |
| **Observability**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Backup and Migration**         | ❌                      | ✅Veeam Kasten              |
| **Governance and Security**      | ❌                      | ✅Kyverno, Capsule          |
| **Certificate management**       | ❌                      | ✅Cert-Manager              |
| **Continuous Deployment (GitOps)** | ❌                    | 🔵ArgoCD                    |
| **Container Registry**           | ❌                      | 🔵Harbor                    |
| **SSO authentication**           | ❌                      | 🔵OIDC integration          |
| **Pod autoscaling**              | ❌                      | 🔵Keda                      |
| **Cost Management (FinOps)**     | ❌                      | 🔵OpenCost                  |
| **Observability (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : included
🔵 : optional/can be disabled
❌ : not included

### Audiences and use cases

Managed Kubernetes is intended for DevOps teams, cloud-native application developers, architects migrating to containerized architectures, and public or regulated organizations. Typical use cases:

- **Cloud-native applications**: microservices architectures.
- **Migration to containers**: progressive modernization of existing applications.
- **Advanced CI/CD**: automated GitOps deployment pipelines.
- **Multiple environments**: separation of development, test and production.
- **Critical applications**: high availability across three availability zones.
- **Regulatory compliance**: deployments subject to sovereignty requirements.

## Benefits

| Benefit                       | Description                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Fully managed                 | Cluster configuration, deployment and lifecycle are taken care of.                                                 |
| High availability             | In production, the cluster is spread across three availability zones.                                             |
| Security by design            | Minimalist and immutable OS, managed only through an API, with no shell or SSH access.                             |
| Ready-to-use platform         | Networking, observability, backup, governance and certificates are integrated from delivery.                       |
| CNCF compatible               | Open source standards avoid technological lock-in and guarantee the portability of your applications.             |

<a id="présentation-des-produits-managed-core-kubernetes"></a>

## Features

The clusters are based on Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), a lightweight and secure operating system dedicated to Kubernetes. It is immutable, with no shell or SSH access, and configured only declaratively through a gRPC API. The standardized installation includes a set of components, mostly open source and validated by the CNCF.

### Networking and service exposure

- **Cilium CNI**, with the **Hubble** observability interface: Cilium handles container networking (*Container Network Interface*): security, load balancing, service mesh, observability, encryption. The **Hubble** graphical interface lets you visualize Cilium flows.

  <img src={cillium} />

- **MetalLB** and **nginx**: to expose web applications, three **nginx** *ingress-classes* are integrated:
  - *nginx-external-secured*: exposure on a public IP, filtered at the firewall to allow only known IPs (used for the graphical interfaces of the various products and for the Kubernetes API);
  - *nginx-external*: exposure on a second, unfiltered public IP (or with customer-specific filtering);
  - *nginx-internal*: exposure on an internal IP only.

  For "non-web" services, the **MetalLB** load balancer exposes services internally or on public IPs, which makes it possible to deploy other ingresses, for example a WAF.

> Note: the open source version of nginx used is the one *maintained by F5 Networks*, not the original, deprecated version.

### Storage

- **Rook-Ceph distributed storage**: open source **Ceph** storage for persistent volumes (PV). It provides the *storage-classes* *ceph-block* (block, multi-zone replicated), *ceph-block-norepl* (block, not replicated) and *ceph-filesystem* (file, multi-zone replicated). The storage used delivers **7,500 IOPS**.
- **TopoLVM local storage** (optional): the *topolvm-ssd* *storage-class* stores data locally *on the Worker nodes*. This option is useful for applications that replicate their own data (Kafka, MongoDB, PostgreSQL…) and benefit from ultra-fast, low-latency storage. It is generally used to dedicate *Worker nodes* to a specific workload.

### Observability

The open source **Prometheus** stack is delivered as standard:

- **Prometheus**, for metrics collection;
- **Grafana**, with numerous dashboards;
- **Loki**: platform logs are exported to Cloud Temple Object Storage and integrated into Grafana;
- **Pyroscope** (optional): continuous profiling platform, queryable through an LLM.

<img src={grafana} />

### Governance and security

- **Kyverno** ([https://kyverno.io/](https://kyverno.io/)): admission controller that enforces security and governance policies.
- **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)): permission management based on the *tenant* concept, which centralizes and delegates rights across several namespaces. Platform users thus have rights restricted to their own namespaces only.
- **Cert-Manager**: natively integrated open source certificate manager.
- **SSO authentication** (optional): integration with an external OIDC identity provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce…).

### Deployment and automation

- **ArgoCD** (optional): automated GitOps deployments, within a **CI/CD** chain.
- **Harbor** (optional): **container registry** that stores your container images and Helm charts directly in the cluster. It performs **vulnerability scans** on your images and synchronizes with other registries ([https://goharbor.io/](https://goharbor.io/)).
- **Keda** (optional): pod autoscaling based on advanced metrics, for example a number of HTTP connections.
- **OpenCost** (optional, [https://github.com/opencost/opencost](https://github.com/opencost/opencost)): FinOps tracking of Kubernetes resource consumption and chargeback per project or namespace.

### Backup

**Veeam Kasten** (also called K10) backs up a complete deployment (manifests, volumes…) to Cloud Temple Object Storage. It relies on **Kanister** for application-consistent backups, for example for databases ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

## Architecture

### Production (multi-zone)

<img src={archi_overview} />

The production cluster is spread across three availability zones:

- **Control Plane**: three nodes, one per zone;
- **storage nodes**: three dedicated Rook-Ceph nodes, one per zone;
- **Worker nodes**: at least three, one per zone, adjustable to your needs;
- **Bare Metal Worker nodes** (optional): for specific performance needs, notably GPUs;
- **Git Runner**: one node for CI/CD pipelines;
- **managed firewall**: two virtual machines, which filter the public IPs of the Kubernetes API and of the secured ingresses.

### Dev/test (single or dual zone)

<img src={archi_overview_1az} />

The development and test cluster is deployed on a single availability zone, with one Control Plane, at least three Worker nodes and one Git Runner. Ceph storage is shared on the Worker nodes.

### Integrations

- **Cloud Temple Object Storage**: logs (Loki) and backups (Kasten).
- **Identity providers**: optional integration via OIDC.
- **Cloud Temple IaaS**: interconnection of clusters with virtualized resources, such as databases or middleware components.

## Regions and availability zones

Managed Kubernetes is available in the FR1 region. A production cluster is spread across three availability zones; a development and test cluster is deployed on a single one. Data is hosted in France.

<a id="noeuds-kubernetes"></a>

## Technical specifications

### Nodes of a production cluster

| **AZ** | **Machine**         | **vCores** | **RAM** | **Local storage**                     |
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

(*): the size and number of Worker Nodes adapt to your compute capacity needs. It is recommended to increase their number in batches of 3 to maintain a consistent multi-zone distribution, and to have Worker Nodes of identical size, as advised by the CNCF.

(**): the size of the Storage Nodes can be increased according to the size of the associated Ceph storage (for example 24 cores and 128 GB of RAM for 10 TB of Ceph).

(***): each storage node is delivered with at least 500 GB of disk space, for 500 GB of usable distributed Ceph storage (data is replicated on each zone, i.e. three times). The free space available to the customer is approximately 350 GB. This initial size can be increased at build time or later. Quotas are applied on Ceph, with a block / file split.

### Nodes of a development and test cluster

| **AZ** | **Machine**       | **vCores** | **RAM** | **Local storage**                    |
| ------ | ----------------- | ---------- | ------- | ------------------------------------ |
| AZ0n   | Git Runner        | 4          | 8 GB    | OS: 256 GB                           |
| AZ0n   | Control Plane     | 8          | 12 GB   | OS: 64 GB                            |
| AZ0n   | Worker Node 1 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |
| AZ0n   | Worker Node 2 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |
| AZ0n   | Worker Node 3 (*) | 12         | 24 GB   | OS: 64 GB + Ceph 300 GB minimum (**) |

(*): the size and number of Worker Nodes adapt to your needs. The minimum of three Worker Nodes is imposed by storage replication.

(**): three Worker Nodes serve as storage nodes and are delivered with at least 300 GB of disk space, for 300 GB of usable distributed storage (data is replicated three times). The free space available to the customer is approximately 150 GB. This initial size can be increased at build time or later.

### Limits

| Parameter                          | Production                         | Development and test               |
|------------------------------------|------------------------------------|------------------------------------|
| Number of Worker Nodes             | 3 minimum (1 per zone), 100 maximum | 3 minimum, 250 maximum            |
| Minimum size of a Worker Node      | 12 cores, 24 GB of RAM             | 12 cores, 24 GB of RAM             |
| Maximum size of a Worker Node      | Hypervisor size, up to 112 cores and 1,536 GB of RAM (Performance 3 blades) | Same |
| Pods per Worker Node               | 110                                | 110                                |

## Security and compliance

Managed Kubernetes is certified HDS and ISO 27001, and available on SecNumCloud-qualified and C5-compliant services.

- **Immutable OS**: no shell or SSH access, managed only through an API.
- **Encryption**: data encrypted at rest and in transit, physical encryption of the links between availability zones.
- **Governance**: Kyverno policies, per-tenant permissions with Capsule, complete audit log.
- **Data residency**: France (FR1), in standard Kubernetes formats.

## Backup and continuity

- **Workload backup**: Veeam Kasten backs up your deployments (manifests and volumes) to Cloud Temple Object Storage, with application-consistent backups.
- **Storage replication**: in production, replicated Ceph volumes are copied across the three availability zones.
- **High availability**: in production, the Control Plane and the storage nodes are spread across three zones.

<a id="politique-de-versions--cycle-de-vie"></a>

## Versions and lifecycle

- **Supported Kubernetes:** N-2 (three major releases per year, roughly every four months). Each release is officially supported for 12 months, i.e. a support window of approximately 16 months maximum per version.
- **Talos OS:** aligned with stable Kubernetes versions.
  - Each branch is maintained for approximately 12 months, security patches included.
  - Recommended upgrade cadence: three times a year, consistent with Kubernetes upgrades.
  - Critical patches (CVE, kernel) are applied as rolling upgrades, without service interruption.
- **Updates:**
  - **major** (Kubernetes N+1, Talos X+1): scheduled three times a year, as rolling updates;
  - **minor**: applied automatically within 30 to 60 days.
- **Deprecation:** version N-3 reaches end of support 90 days after the release of version N.

<a id="sla--information-sur-le-support"></a>

## Service availability

| Item                        | Availability target, measured over one month |
|-----------------------------|-----------------------------------------------|
| Production cluster (Kubernetes API) | 99.95 %                               |
| Production storage (Ceph volumes)   | 99.90 %                               |

Development and test clusters have no availability target.

<a id="raci"></a>

## Responsibilities

The split of responsibilities between the customer and Cloud Temple is detailed in the [Managed Kubernetes responsibility matrix (RACI)](../contractual/kubernetes/raci.md). In summary:

- **Cloud Temple** is responsible for the Kubernetes foundation and the managed services: security, cluster backup, monitoring, updates and included operators.
- **The customer** is responsible for their application projects, their business operators, their CI/CD pipelines and the backups of their applications.
- **Support**: levels 1, 2 and 3 included for the foundation (infrastructure and standard operators). Response times depend on incident severity (P1 to P4).
- **Maintenance**: regular patching of Talos, Kubernetes and the standard operators, as rolling upgrades, without service interruption.

## Reversibility

The clusters are based on open source standards and standard Kubernetes formats, which guarantees the portability of your applications.

| Operation                | Deliverable                 | Lead time   | Cost         |
|--------------------------|-----------------------------|-------------|--------------|
| Application export       | Kubernetes YAML manifests   | 15 days     | Free of charge |
| Volume backup            | Veeam Kasten backups        | Continuous  | Included     |
| Migration assistance     | Technical support           | On request  | On quotation |

**Veeam Kasten** also works with other Kubernetes clusters (OpenShift, hyperscalers…). It can therefore be used for reversibility or migration scenarios, handling the necessary adaptations through *transformations* (for example a change of ingress-class), but also for "refresh" scenarios, such as the scheduled restoration of a production environment into pre-production.

## Pricing

The managed service is billed monthly, per cluster; the underlying IaaS infrastructure (compute, storage, network) is billed in addition, according to sizing. Prices are published on the product page on the Cloud Temple website:
[Managed Kubernetes — pricing](https://www.cloud-temple.com/produits/managed-kubernetes/).
