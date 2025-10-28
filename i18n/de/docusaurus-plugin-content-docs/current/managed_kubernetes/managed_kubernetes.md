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

Managed Kubernetes by Cloud Temple is a container orchestration solution based on open-source products, designed to deliver a high level of security, resilience, and automation on Cloud Temple’s SecNumcloud platforms. Each cluster is deployed in a dedicated IaaS environment (VMware or OpenIaaS) fully reserved for the client.

This offering is tailored for Kubernetes experts and open-source enthusiasts seeking a native, portable solution without vendor-specific overhead, running on a minimal, immutable operating system designed for automation and security.

### Key Benefits
- **Sovereignty and Reversibility**: The solution is based on open-source standards (CNCF Kubernetes) to avoid any technological lock-in and ensure application portability. The Veeam Kasten backup tool included in the offering is specifically designed to simplify migrations between clouds.
- **Zero-Trust Security and Governance**: The architecture is built on Talos OS, an immutable operating system with no direct access (no shell, no SSH), drastically reducing the attack surface. This approach is combined with governance tools such as Kyverno for policy management and Capsule for fine-grained access control, forming a solid foundation for a Zero-Trust security strategy.
- **Cost Control and Integration**: The solution natively integrates FinOps tools like KubeCost for precise consumption tracking. The economic model is transparent, based on consumed IaaS resources, and the use of well-established open-source components (Cilium, Ceph, ArgoCD) facilitates seamless integration into your existing ecosystems.

### A complete and ready-to-use platform  
The solution natively includes a comprehensive and cohesive stack of cutting-edge open-source tools to cover all requirements across the application lifecycle:

- **Networking and Security**: Cilium, Hubble, Kyverno, Capsule  
- **Storage**: Rook-Ceph  
- **Continuous Deployment (GitOps)**: ArgoCD  
- **Observability**: Prometheus, Grafana, Loki  
- **Backup and Migration**: Veeam Kasten  
- **Cost Management (FinOps)**: KubeCost

## Deployment Architectures

We offer two distinct architectures to meet your needs, whether for development environments or critical production setups.

### Mono-AZ Architecture (Development and Testing)

Ideal for non-production environments, this compact architecture deploys all resources within a single availability zone (AZ). It is designed for agility and cost efficiency.

- **Use cases**: Development, testing, pre-production, proof-of-concept (POC).
- **Key features**:
    - 1 Control Plane node.
    - 3 Worker nodes (or more).
    - Distributed storage (Ceph) is co-located on the Worker nodes.
    - Does not benefit from a high availability SLA.

<img src={require('./images/archi_overview_1az.png').default} alt="Mono-AZ Architecture" />

### Multi-AZ Architecture (Production)

Designed for production and critical applications, this architecture distributes resources across three Availability Zones (AZ) to ensure high availability and maximum resilience, in compliance with SecNumCloud requirements.

- **Use Case**: Production applications, critical services, platforms requiring an SLA.
- **Key Features**:
    - **High Availability**: 3 Control Plane nodes distributed across 3 AZs.
    - **Dedicated Storage**: 3 dedicated storage nodes distributed for performance and resilience.
    - **Distributed Workers**: At least 3 worker nodes, one per AZ.
    - **SLA of 99.95%**.

<img src={require('./images/archi_overview.png').default} alt="Multi-AZ Architecture" />

### Detailed Technical Components  
The offering includes the following components in detail:

- CNI Cilium, with observability interface (Hubble)  
- Internal and external ingresses via MetalLB and nginx  
- Distributed storage with Rook-Ceph  
- Cert-Manager  
- ArgoCD  
- Prometheus stack (Prometheus, Grafana, Promtail, Loki)  
- Container registry Harbor  
- Cost management with KubeCost  
- Advanced security policies with Kyverno and Capsule  
- Veeam Kasten (backup, cross-environment automation, and reversibility)  
- (optional): Entra authentication with SSO