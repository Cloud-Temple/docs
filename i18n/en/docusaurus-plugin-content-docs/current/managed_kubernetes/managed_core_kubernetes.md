---
title: Managed Core Kubernetes Overview
---

# Managed Core Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and essential principles to master our infrastructure.</p>
    <a href="managed_kubernetes/concepts" class="card-link">Explore the concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Getting Started</h3>
    <p>Get up and running quickly by following clear and simple instructions.</p>
    <a href="managed_kubernetes/quickstart" class="card-link">Launch the Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Learn step by step how to configure and use our services with detailed guides.</p>
    <a href="managed_kubernetes/tutorials" class="card-link">Discover the tutorials &rarr;</a>
  </div>
</div>

Managed **Core** Kubernetes by Cloud Temple is a container orchestration solution based on a selection of Open Source products, designed to offer a secure, resilient, and automated base layer on Cloud Temple's SecNumCloud platforms. Each cluster is deployed in a Cloud Temple IaaS environment entirely dedicated to the customer.

This offering is designed for teams with an excellent command of Kubernetes and Cloud Native tools, who want to build their own platform on minimalist and robust foundations. It targets open source enthusiasts who are looking for a streamlined, portable solution, without any vendor overlay, on a minimalist and immutable OS designed for automation and security.

### Key Benefits

- **Sovereignty and Reversibility**: The solution relies exclusively on open source standards (Kubernetes CNCF) to avoid any technological dependency and guarantee the portability of your applications.
- **"Zero-Trust" Security by design**: The architecture is based on Talos OS, an immutable operating system with no direct access (no shell, no SSH), which drastically reduces the attack surface and provides a solid foundation for a "Zero-Trust" security strategy.
- **Modern Network Foundations**: The integration of Cilium for CNI and MetalLB for service exposure provides a performant and standard network base, ready to accommodate your own security and filtering components.

### A Base Platform Ready to Be Extended

The "Managed Core" offering natively includes a minimal and coherent stack of cutting-edge open source tools to provide you with the foundations of a Kubernetes cluster:

- **OS and Network**: Talos, Cilium, MetalLB

From this foundation, you are free to integrate your own tools for continuous deployment, observability, backup, and cost management.

---

## Deployment Architectures

We offer two distinct architectures to meet your needs, whether for development environments or critical production.

### "Dev/Test" Architecture

Ideal for POC environments, this compact architecture deploys all resources within a single availability zone (AZ).

- **Use cases**: Development, testing, proof-of-concept (POC).
- **Key points**:
  - 1 Control Plane node.
  - 3 Worker nodes (or more).
  - No high availability SLA.
  - No security restrictions.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview_1az.png').default} alt="Mono-AZ Architecture" />

### Production Architecture (Multi-AZ)

Designed for production and critical applications, this architecture distributes resources across three availability zones (AZ) to guarantee high availability and maximum resilience, in compliance with SecNumCloud requirements.

- **Use cases**: Production applications, critical services, platforms requiring an SLA.
- **Key points**:
  - **High Availability**: 3 Control Plane nodes distributed across 3 AZs.
  - **Distributed Workers**: A minimum of 3 worker nodes, one per AZ.
  - **Bare Metal Nodes (Optional)**: Possible integration of **"Bare Metal"** type worker nodes for specific performance needs, notably **GPU support**.
  - **SLA of 99.90%**.

<img src={require('@site/docs/managed_kubernetes/images/archi_overview.png').default} alt="Multi-AZ Architecture" />

---

### Included Technical Components

The "Managed Core" offering includes the following components:

- **Operating System**: Talos OS
- **Storage**: Rook-Ceph
- **CNI (Container Network Interface)**: Cilium
- **Load Balancer**: MetalLB
