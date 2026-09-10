---
title: Overview
---

import archiOverview1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import archiOverview from '@site/docs/managed_kubernetes/images/archi_overview.png'

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and essential principles to master our infrastructure.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Explore concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Getting Started Guide</h3>
    <p>Get up and running quickly by following clear and simple instructions.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Launch Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Learn step by step how to configure and use our services with detailed guides.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Discover tutorials &rarr;</a>
  </div>
</div>

**Managed Kubernetes** by Cloud Temple is a container orchestration solution based on open source standards (CNCF). It is designed to provide a high level of security, resilience, and automation on Cloud Temple's SecNumcloud platforms. Each cluster is deployed in a Cloud-Temple IaaS environment fully dedicated to the client.

To best meet your teams' needs, we offer two versions of this product: **Managed Core Kubernetes** (a minimal base) and **Managed Kubernetes** (a complete "out-of-the-box" platform).

---

## Two approaches for your clusters

### 1. Managed Core Kubernetes (Le socle minimaliste)
This offering is designed for teams with **excellent Kubernetes expertise** and Cloud Native tools, who wish to build their own platform on minimalist and robust foundations. It targets open source enthusiasts looking for a streamlined, portable solution without vendor-specific overlays, running on a minimalist and immutable OS designed for automation and security.

- **OS and Networking included** : Talos OS, Rook-Ceph (stockage), Cilium (CNI), MetalLB (Load Balancer).
- **Philosophy** : Starting from this high-performance and standardized foundation, you are free to integrate your own continuous deployment, observability, backup, or security tools.

### 2. Managed Kubernetes (La plateforme complète)
This turnkey offering is designed for teams seeking a **native, out-of-the-box, and all-in-one** solution, integrating the best open-source standards to cover all application lifecycle needs without having to assemble and maintain the components themselves.

In addition to the "Core" foundation (Talos, Ceph, Cilium, MetalLB), it natively integrates:
- **Networking and Security** : Hubble, Ingress Nginx, Kyverno, Capsule, Cert-Manager.
- **Continuous Deployment (GitOps)** : ArgoCD, Harbor Container Registry, Keda
- **Observability** : Full stack (Prometheus, Grafana, Loki, Pyroscope).
- **Cost Management (FinOps)** : OpenCost.
- **Backup and Rollback** : Veeam Kasten.
- **Identity** : SSO authentication with an external OIDC Identity Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...).

---

## Common Key Benefits

Regardless of the chosen offering, our Kubernetes clusters share these fundamental benefits:

- **Sovereignty and Reversibility** : The solution relies on open source standards to avoid any technological dependency (*vendor lock-in*) and guarantee full portability of your applications. (With Veeam Kasten included in the full version to facilitate inter-cloud migrations).
- **"Zero-Trust" Security by design** : The architecture is built on **Talos OS**, an immutable and ephemeral Linux operating system specifically designed for Kubernetes. It provides no direct access (neither shell nor SSH), which drastically reduces the attack surface.
- **Cost Control** : The pricing model is transparent, based exclusively on the underlying consumed IaaS resources, with no additional licensing cost for the orchestrator.

---

## Deployment Architectures

We offer two distinct architectures to meet your needs, whether for development environments or critical production environments. These architectures apply to both offerings (Core et Full).

### "Dev/Test" Architecture

Ideal for POC environments, this compact architecture deploys all resources within a single availability zone (AZ).

- **Use case** : Development, testing, proof-of-concept (POC).
- **Key points** :
  - 1 Control Plane node.
  - 3 Worker nodes (or more).
  - Distributed storage (Ceph) is co-located on the worker nodes.
  - Does not provide a high availability SLA.
  - No architecture-specific security restrictions.

<img src={archiOverview1az} alt="Single-AZ Architecture" />

### Production Architecture (Multi-AZ)

Designed for production and critical applications, this architecture distributes resources across three availability zones (AZ) to ensure high availability and maximum resilience, in compliance with SecNumCloud requirements.

- **Use Case** : Production applications, critical services, platforms requiring an SLA.
- **Key Points** :
  - **High Availability** : 3 Control Plane nodes distributed across 3 AZ.
  - **Dedicated Storage** : 3 dedicated and distributed storage nodes for performance and resilience.
  - **Distributed Workers** : At least 3 worker nodes, one per AZ.
  - **Bare Metal Nodes (Optional)** : Possible integration of **"Bare Metal"** type worker nodes for specific performance needs, particularly **GPU support**.
  - **99.95% SLA**, measured monthly.

<img src={archiOverview} alt="Multi-AZ Architecture" />