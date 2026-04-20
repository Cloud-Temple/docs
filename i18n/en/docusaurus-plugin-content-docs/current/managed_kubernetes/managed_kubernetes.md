---
title: Managed Kubernetes Overview
---

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and essential principles to master our infrastructure.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Explore the concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Getting Started</h3>
    <p>Get up and running quickly by following clear and simple instructions.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Launch the Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Learn step by step how to configure and use our services with detailed guides.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Discover the tutorials &rarr;</a>
  </div>
</div>

Managed Kubernetes by Cloud Temple is a container orchestration solution based on Open Source products, designed to offer a high level of security, resilience, and automation on Cloud Temple's SecNumCloud platforms. Each cluster is deployed in a Cloud Temple IaaS environment entirely dedicated to the customer.

This offering is designed for teams with a solid knowledge of Kubernetes and open source enthusiasts who are looking for a native, portable solution, without any vendor overlay, on a minimalist and immutable OS designed for automation and security.

### Key Benefits

- **Sovereignty and Reversibility**: The solution relies on open source standards (Kubernetes CNCF) to avoid any technological dependency and guarantee the portability of your applications. The Veeam Kasten backup tool, included in the offering, is specifically designed to facilitate migrations from one cloud to another.
- **"Zero-Trust" Security and Governance**: The architecture is based on Talos OS, an immutable operating system with no direct access (no shell, no SSH), which drastically reduces the attack surface. This approach is coupled with governance tools like Kyverno for policy management and Capsule for fine-grained rights management, providing a solid foundation for a "Zero-Trust" security strategy.
- **Cost Control and Integration**: The solution natively integrates FinOps tools like OpenCost for precise consumption tracking. The pricing model is transparent, based on consumed IaaS resources, and the use of recognized open source components (Cilium, Ceph, ArgoCD) facilitates integration into your existing ecosystems.

### A Complete and Ready-to-Use Platform

The solution natively includes a complete and coherent stack of cutting-edge open source tools to cover all application lifecycle needs:

- **Network and Security**: Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Storage**: Rook-Ceph
- **Continuous Deployment (GitOps)**: ArgoCD
- **Observability**: Prometheus, Grafana, Loki
- **Backup and Migration**: Veeam Kasten
- **Cost Management (FinOps)**: OpenCost

---

## Deployment Architectures

We offer two distinct architectures to meet your needs, whether for development environments or critical production.

### "Dev/Test" Architecture

Ideal for POC environments, this compact architecture deploys all resources within a single availability zone (AZ).

- **Use cases**: Development, testing, proof-of-concept (POC).
- **Key points**:
  - 1 Control Plane node.
  - 3 Worker nodes (or more).
  - Distributed storage (Ceph) is co-located on worker nodes.
  - No high availability SLA.
  - No security restrictions.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Mono-AZ Architecture" />

### Production Architecture (Multi-AZ)

Designed for production and critical applications, this architecture distributes resources across three availability zones (AZ) to guarantee high availability and maximum resilience, in compliance with SecNumCloud requirements.

- **Use cases**: Production applications, critical services, platforms requiring an SLA.
- **Key points**:
  - **High Availability**: 3 Control Plane nodes distributed across 3 AZs.
  - **Dedicated Storage**: 3 dedicated and distributed storage nodes for performance and resilience.
  - **Distributed Workers**: A minimum of 3 worker nodes, one per AZ.
  - **Bare Metal Nodes (Optional)**: Possible integration of **"Bare Metal"** type worker nodes for specific performance needs, notably **GPU support**.
  - **SLA of 99.90%**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Multi-AZ Architecture" />

---

### Detailed Technical Components

The offering includes in detail the following components:

- CNI Cilium, with observability interface (Hubble)
- Internal and external Ingresses MetalLB and nginx
- Distributed storage Rook-Ceph
- Cert-Manager
- ArgoCD
- Prometheus stack (Prometheus, Grafana, Loki)
- Container registry Harbor
- Cost management with OpenCost
- Advanced security policies with Kyverno and Capsule
- Veeam Kasten (backup, cross-environment automations and reversibility)
- SSO authentication with an External OIDC Identity Provider (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)
