---
title: Overview
---

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and essential principles to master our infrastructure.</p>
    <a href="managed_kubernetes/concepts" class="card-link">Explore concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Quickstart Guide</h3>
    <p>Get started quickly with clear and simple instructions.</p>
    <a href="managed_kubernetes/quickstart" class="card-link">Launch Quickstart &rarr;</a>
  </div>
  <div class="card">
    <h3>Tutorials</h3>
    <p>Learn step by step how to set up and use our services with detailed guides.</p>
    <a href="managed_kubernetes/tutorials" class="card-link">Discover tutorials &rarr;</a>
  </div>
</div>

Managed Kubernetes by Cloud Temple is a container orchestration solution based on open-source products, designed to deliver a high level of security, resilience, and automation on Cloud Temple’s SecNumcloud platforms. Each cluster is deployed in a dedicated IaaS Cloud-Temple OpenIaaS environment fully dedicated to the customer.

This offering is tailored for teams with solid Kubernetes expertise and open-source enthusiasts seeking a native, portable solution without vendor-specific overhead, running on a minimal, immutable OS designed for automation and security.

### Key Benefits

- **Sovereignty and Reversibility**: The solution is built on open-source standards (CNCF Kubernetes) to avoid technological lock-in and ensure application portability. The Veeam Kasten backup tool included in the offering is specifically designed to simplify migrations between clouds.
- **Zero-Trust Security and Governance**: The architecture is based on Talos OS, an immutable operating system with no direct access (no shell, no SSH), drastically reducing the attack surface. This approach is combined with governance tools such as Kyverno for policy management and Capsule for fine-grained access control, forming a solid foundation for a Zero-Trust security strategy.
- **Cost Control and Integration**: The solution natively integrates FinOps tools like OpenCost for precise consumption tracking. The pricing model is transparent, based on consumed IaaS resources, and the use of well-established open-source components (Cilium, Ceph, ArgoCD) facilitates seamless integration into your existing ecosystems.

### A complete and ready-to-use platform

The solution natively includes a full, cohesive stack of cutting-edge open-source tools to address all needs across the application lifecycle:

- **Networking and Security**: Cilium, Hubble, MetalLB, Ingress Nginx, Kyverno, Capsule
- **Storage**: Rook-Ceph
- **Continuous Deployment (GitOps)**: ArgoCD
- **Observability**: Prometheus, Grafana, Loki
- **Backup and Migration**: Veeam Kasten
- **Cost Management (FinOps)**: OpenCost

## Deployment Architectures

We offer two distinct architectures to meet your needs, whether for development environments or critical production setups.

### Dev/Test Architecture

Ideal for non-production environments, this compact architecture deploys all resources within a single Availability Zone (AZ). It is designed for agility and cost efficiency.

- **Use cases**: Development, testing, proof-of-concept (POC).
- **Key features**:
    - 1 Control Plane node.
    - 3 Worker nodes (or more).
    - Distributed storage (Ceph) is co-located on the Worker nodes.
    - Does not benefit from a High Availability SLA.
    - No security restrictions.

<img src={require('./images/archi_overview_1az.png').default} alt="Mono-AZ Architecture" />

### Production Architecture (Multi-AZ)

Designed for production and critical applications, this architecture distributes resources across three Availability Zones (AZs) to ensure high availability and maximum resilience, in compliance with SecNumCloud requirements.

- **Use Case**: Production applications, critical services, platforms requiring an SLA.
- **Key Features**:
    - **High Availability**: 3 Control Plane nodes distributed across 3 AZs.
    - **Dedicated Storage**: 3 dedicated storage nodes distributed for performance and resilience.
    - **Distributed Workers**: Minimum of 3 worker nodes, one per AZ.
    - **Bare Metal Nodes (Optional)**: Optional integration of **"Bare Metal"** worker nodes for specific performance needs, particularly **GPU support**.
    - **SLA of 99.90%**.

<img src={require('./images/archi_overview.png').default} alt="Multi-AZ Architecture" />

### Detailed Technical Components

The offering includes the following components in detail:

- CNI Cilium, with observability interface (Hubble)
- Internal and external ingresses using MetalLB and nginx
- Distributed storage with Rook-Ceph
- Cert-Manager
- ArgoCD
- Prometheus stack (Prometheus, Grafana, Loki)
- Container registry Harbor
- Cost management with OpenCost
- Advanced security policies with Kyverno and Capsule
- Veeam Kasten (backup, cross-environment automation, and reversibility)
- SSO authentication with an external Identity Provider (OIDC) (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)