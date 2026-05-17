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
    <p>Get started quickly by following clear and simple instructions.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Start the Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Learn step-by-step how to configure and use our services with detailed guides.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Discover tutorials &rarr;</a>
  </div>
</div>

Managed Kubernetes by Cloud Temple is a container orchestration solution based on Open Source products, designed to provide a high level of security, resilience, and automation on Cloud Temple's SecNumcloud platforms. Each cluster is deployed in a fully client-dedicated Cloud-Temple IaaS environment.

This product is designed for teams with solid Kubernetes knowledge and open source enthusiasts seeking a native, portable, vendor-neutral solution on a minimalist, immutable OS designed for automation and security.

### Key Benefits

- **Sovereignty and Reversibility** : The solution relies on open source standards (Kubernetes CNCF) to avoid technological lock-in and ensure the portability of your applications. The Veeam Kasten backup tool, included in the product, is specifically designed to facilitate migrations from one cloud to another.
- **"Zero-Trust" Security and Governance** : The architecture is built on Talos OS, an immutable operating system with no direct access (no shell, no SSH), which drastically reduces the attack surface. This approach is combined with governance tools such as Kyverno for policy management and Capsule for fine-grained rights management, forming a solid foundation for a "Zero-Trust" security strategy.
- **Cost Management and Integration** : The solution natively integrates FinOps tools such as OpenCost for precise consumption tracking. The pricing model is transparent, based on consumed IaaS resources, and the use of recognized open source components (Cilium, Ceph, ArgoCD) facilitates integration into your existing ecosystems.

### A complete and ready-to-use platform

The solution natively includes a complete and coherent stack of cutting-edge open source tools to cover all application lifecycle requirements:

- **Networking and Security** : Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Storage** : Rook-Ceph
- **Continuous Deployment (GitOps)** : ArgoCD
- **Observability** : Prometheus, Grafana, Loki
- **Backup and Migration** : Veeam Kasten
- **Cost Management (FinOps)** : OpenCost

---

## Deployment Architectures

We offer two distinct architectures to meet your needs, whether for development environments or critical production environments.

### "Dev/Test" Architecture

Ideal for POC environments, this compact architecture deploys all resources within a single Availability Zone (AZ).

- **Use Case** : Development, testing, proof-of-concept (POC).
- **Key Points** :
  - 1 Control Plane node.
  - 3 Worker nodes (or more).
  - Distributed storage (Ceph) is co-located on the worker nodes.
  - Does not benefit from a high availability SLA.
  - No security restrictions

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Single-AZ Architecture" />

### Production Architecture (Multi-AZ)

Designed for production and critical applications, this architecture distributes resources across three Availability Zones (AZ) to ensure high availability and maximum resilience, in compliance with SecNumCloud requirements.

- **Use Case**: Production applications, critical services, platforms requiring an SLA.
- **Key Points**:
  - **High Availability**: 3 Control Plane nodes distributed across 3 AZs.
  - **Dedicated Storage**: 3 dedicated and distributed storage nodes for performance and resilience.
  - **Distributed Workers**: At least 3 worker nodes, one per AZ.
  - **Bare Metal Nodes (Optional)**: Integration of **"Bare Metal"** worker nodes is possible for specific performance requirements, particularly **GPU support**.
  - **99.90% SLA**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Architecture Multi-AZ" />

---

### Detailed technical components

The offer includes the following components in detail:

- CNI Cilium, with observability interface (Hubble)
- Internal and external MetalLB and nginx Ingresses
- Distributed storage Rook-Ceph
- Cert-Manager
- ArgoCD
- Prometheus stack (Prometheus, Grafana, Loki)
- Container registry Harbor
- Cost management with OpenCost
- Advanced security policies with Kyverno and Capsule
- Veeam Kasten (backup, cross-environment automations, and reversibility)
- SSO authentication with an external OIDC Identity Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)