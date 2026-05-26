---
title: Overview
---

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and essential principles to master our infrastructure.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Explore concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Getting Started Guide</h3>
    <p>Get up and running quickly by following clear and straightforward instructions.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Launch Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Learn step-by-step how to configure and use our services with detailed guides.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Discover tutorials &rarr;</a>
  </div>
</div>

Managed Kubernetes by Cloud Temple is a container orchestration solution based on Open Source products, designed to deliver a high level of security, resilience, and automation on Cloud Temple's SecNumCloud platforms.

This product is designed for teams with a solid understanding of Kubernetes and open-source advocates seeking a native, portable solution without vendor lock-in, running on a minimalist and immutable OS built for automation and security.

### Key Benefits

- **Sovereignty and Reversibility**: The solution leverages open-source standards (CNCF Kubernetes) to avoid any technological dependency and ensure the portability of your applications. The Veeam Kasten backup tool, included in the product, is specifically designed to facilitate migrations from one cloud to another.
- **"Zero-Trust" Security and Governance**: The architecture is built on Talos OS, an immutable operating system with no direct access (no shell, no SSH), which drastically reduces the attack surface. This approach is coupled with governance tools such as Kyverno for policy management and Capsule for fine-grained rights management, providing a solid foundation for a "Zero-Trust" security strategy.
- **Cost Management and Integration**: The solution natively integrates FinOps tools such as OpenCost for precise consumption tracking. The pricing model is transparent, based on consumed IaaS resources, and the use of recognized open-source components (Cilium, Ceph, ArgoCD) facilitates integration into your existing ecosystems.

### A complete and ready-to-use platform

The solution natively includes a comprehensive and cohesive stack of cutting-edge open-source tools to cover all application lifecycle needs:

- **Networking and Security** : Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Storage** : Rook-Ceph
- **Continuous Deployment (GitOps)** : ArgoCD
- **Observability** : Prometheus, Grafana, Loki
- **Backup and Migration** : Veeam Kasten
- **Cost Management (FinOps)** : OpenCost

---

## Deployment Architectures

We offer two distinct architectures to meet your needs, whether for development environments or critical production environments.

### Architecture "Dev/Test"

Ideal for POC environments, this compact architecture deploys all resources within a single availability zone (AZ).

- **Use cases** : Development, testing, proof-of-concept (POC).
- **Key points** :
  - 1 Control Plane node.
  - 3 Worker nodes (or more).
  - Distributed storage (Ceph) is co-located on the worker nodes.
  - Does not include a high availability SLA.
  - no security restrictions

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Single-AZ Architecture" />

### Production Architecture (Multi-AZ)

Designed for production and critical applications, this architecture distributes resources across three availability zones (AZs) to ensure high availability and maximum resilience, in compliance with SecNumCloud requirements.

- **Use Case** : Production applications, critical services, platforms requiring an SLA.
- **Key Points** :
  - **High Availability** : 3 Control Plane nodes distributed across 3 AZs.
  - **Dedicated Storage** : 3 dedicated and distributed storage nodes for performance and resilience.
  - **Distributed Workers** : At least 3 worker nodes, one per AZ.
  - **Bare Metal Nodes (Optional)** : Possible integration of **"Bare Metal"** type worker nodes for specific performance needs, notably **GPU support**.
  - **99.95% SLA**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Architecture Multi-AZ" />

---

### Detailed Technical Components

The offering includes the following components in detail:

- Cilium CNI, with observability interface (Hubble)
- Internal and external Ingresses with MetalLB and nginx
- Rook-Ceph distributed storage
- Cert-Manager
- ArgoCD
- Prometheus stack (Prometheus, Grafana, Loki)
- Harbor container registry
- Cost management with OpenCost
- Advanced security policies with Kyverno and Capsule
- Veeam Kasten (backup, cross-environment automation, and rollback)
- SSO authentication with an external OIDC Identity Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)