---
title: Concepts
sidebar_label: Concepts (Core)
---
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Introduction

Managed Core Kubernetes is a managed container orchestration foundation, based on open source standards validated by the CNCF. Each cluster is deployed in an environment dedicated to the client, on a single availability zone or on three. The foundation provides the building blocks of Kubernetes (OS, networking, load balancer, distributed storage) and leaves you free to build your platform with your own continuous deployment, observability, backup or security tools.

For a platform delivered ready to use, with these tools already integrated, see the [Managed Kubernetes](../managed_kubernetes/concepts.md) offering, which also compares the two offerings component by component.

### Audiences and use cases

Managed Core Kubernetes is intended for teams that master Kubernetes and the cloud-native ecosystem: platform teams, cloud architects, organizations with their own technical stack and regulated enterprises. Typical use cases:

- **Internal platforms (IDP)**: building a custom platform for developers.
- **Cloud-native applications**: microservices architectures with a customized stack.
- **Multiple environments**: separation of development, test and production.
- **Regulatory compliance**: deployments on a sovereign and controlled foundation.

## Benefits

| Benefit                | Description                                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------------------------|
| Managed foundations    | The infrastructure, the OS and the foundation components are managed for you.                                      |
| Freedom to build       | You install and configure your own stack (observability, CI/CD, security…).                                        |
| High availability      | In production, the cluster is spread across three availability zones.                                              |
| Security by design     | Minimalist and immutable OS, managed only through an API, with no shell or SSH access.                             |
| CNCF compatible        | Open source standards avoid technology lock-in and guarantee the portability of your applications.                 |

## Features

The clusters run on Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), a lightweight and secure operating system dedicated to Kubernetes. It is immutable, with no shell or SSH access, and configured only declaratively through a gRPC API.

| Component                   | Description                                                                                                   |
|-----------------------------|---------------------------------------------------------------------------------------------------------------|
| Cilium CNI                  | Container networking and network policies.                                                                    |
| MetalLB                     | Load balancer to expose services internally or on public IPs.                                                 |
| Rook-Ceph distributed storage | Persistent volumes with the *ceph-block*, *ceph-bucket* and *ceph-filesystem* *storage-classes*, 7,500 IOPS. |
| TopoLVM local storage (optional) | Fast storage on the Worker Nodes, for applications that replicate their data themselves.             |

Application components (ingress, observability, backup, certificate management, governance) are not included: you choose and operate them.

## Architecture

### Production (multi-zone)

<img src={archi_overview} />

The production cluster is spread across three availability zones:

- **Control Plane**: three nodes, one per zone;
- **storage nodes**: three dedicated Rook-Ceph nodes, one per zone, with data replicated across the three zones;
- **Worker nodes**: at least three, one per zone, adjustable to your needs;
- **Bare Metal Worker nodes** (optional): for specific performance needs, notably GPUs;
- **Git Runner**: one node for CI/CD pipelines;
- **managed firewall**: two virtual machines, which filter the public IPs of the Kubernetes API.

### Dev/test (single or dual zone)

<img src={archi_overview_1az} />

The development and test cluster is deployed on a single availability zone, with one Control Plane, at least three Worker nodes and one Git Runner. Ceph storage is shared on the Worker nodes.

### Integrations

- **Identity providers**: optional integration through OIDC.
- **Cloud Temple IaaS**: interconnection of the clusters with virtualized resources, such as databases or middleware components.

## Regions and availability zones

Managed Core Kubernetes is available in the FR1 region. A production cluster is spread across three availability zones; a development and test cluster is deployed on a single one. Data is hosted in France.

## Technical specifications

### Nodes of a production cluster

| **Machine**         | **Count**   | **vCores** | **RAM** | **Local storage**                                  |
| ------------------- | ----------- | ---------- | ------- | -------------------------------------------------- |
| Git Runner          | 1           | 4          | 8 GB    | OS: 256 GB                                         |
| Control Plane       | 3 (1 per AZ) | 8         | 12 GB   | OS: 64 GB                                          |
| Storage Node        | 3 (1 per AZ) | 12        | 24 GB   | OS: 64 GB + Ceph 500 GB minimum (~350 GB usable)   |
| Worker Node         | 3 or more (1 per AZ minimum) | 12 or more | 24 GB or more | OS: 64 GB                    |

### Nodes of a development and test cluster

| **Machine**   | **Count**  | **vCores** | **RAM** | **Local storage**                                |
| ------------- | ---------- | ---------- | ------- | ------------------------------------------------ |
| Git Runner    | 1          | 4          | 8 GB    | OS: 256 GB                                       |
| Control Plane | 1          | 8          | 12 GB   | OS: 64 GB                                        |
| Worker Node   | 3 or more  | 12 or more | 24 GB or more | OS: 64 GB + Ceph 300 GB minimum (~150 GB usable) |

In development and test, three Worker Nodes also act as storage nodes: this minimum is imposed by storage replication.

### Limits

| Parameter                        | Production                          | Development and test  |
|----------------------------------|-------------------------------------|-----------------------|
| Number of Worker Nodes           | 3 minimum (1 per zone), 100 maximum | 3 minimum, 250 maximum |
| Minimum size of a Worker Node    | 12 cores, 24 GB of RAM              | 12 cores, 24 GB of RAM |
| Pods per Worker Node             | 110                                 | 110                   |

## Security and compliance

Managed Core Kubernetes is certified HDS and ISO 27001, and available on SecNumCloud-qualified and C5-compliant services.

- **Immutable OS**: no shell or SSH access, managed only through an API.
- **Encryption**: data encrypted at rest and in transit, physical encryption of the links between availability zones.
- **Traceability**: complete audit log.
- **Data residency**: France (FR1), in standard Kubernetes formats.

## Versions and lifecycle

- **Supported Kubernetes:** N-2, with a new release supported approximately every four months.
- **Updates:**
  - **major** (Kubernetes, Talos OS): scheduled three times a year, as rolling updates, without interruption;
  - **minor and security patches**: applied automatically within 30 to 60 days.
- **Deprecation:** version N-3 is deprecated 90 days after the release of version N.

## Service availability

The availability objective of a production cluster (Kubernetes API) is 99.95%, measured over one month. Development and test clusters have no availability objective.

## Responsibilities

The distribution of responsibilities is detailed in the [Managed Kubernetes responsibility matrix (RACI)](../contractual/kubernetes/raci.md). For the Core offering:

- **Cloud Temple** is responsible for the foundation: infrastructure, OS, foundation components and their updates. Level 1, 2 and 3 support is included for this scope; response times depend on the severity of the incident (P1 to P4).
- **The client** is fully autonomous and responsible for what they deploy on the foundation: applications, operators, monitoring, backup and security tools.

## Reversibility

The clusters rely on open source standards and standard Kubernetes formats, which guarantees the portability of your applications.

| Operation                 | Deliverable                | Timeframe   | Cost       |
|---------------------------|----------------------------|-------------|------------|
| Application export        | Kubernetes YAML manifests  | 15 days     | Free of charge |
| Migration assistance      | Technical support          | On request  | On quotation |

## Pricing

The managed service is billed monthly, per cluster; the underlying IaaS infrastructure (compute, storage, network) is billed in addition, according to sizing. Prices are published on the product page on the Cloud Temple website:
[Managed Kubernetes — pricing](https://www.cloud-temple.com/produits/managed-kubernetes/).
