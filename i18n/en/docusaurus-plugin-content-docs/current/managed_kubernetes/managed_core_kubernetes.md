---
title: Overview
---
import archiOverview1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import archiOverview from '@site/docs/managed_kubernetes/images/archi_overview.png'

# Managed Core Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and essential principles to master our infrastructure.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Explore concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Getting Started Guide</h3>
    <p>Get up and running quickly by following clear and simple instructions.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Launch the Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Learn step by step how to configure and use our services with detailed guides.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Discover tutorials &rarr;</a>
  </div>
</div>

Managed **Core** Kubernetes by Cloud Temple is a container orchestration solution based on a selection of Open Source products, designed to provide a secure, resilient, and automated foundational layer on Cloud Temple's SecNumCloud platforms. Each cluster is deployed in a Cloud-Temple IaaS environment entirely dedicated to the client.

This product is designed for teams with excellent mastery of Kubernetes and Cloud Native tools, who wish to build their own platform on minimalist and robust foundations. It targets open source enthusiasts looking for a streamlined, portable solution without vendor-specific layers, running on a minimalist and immutable OS designed for automation and security.

### Key Benefits

- **Sovereignty and Reversibility** : The solution relies exclusively on open-source standards (Kubernetes CNCF) to avoid any technological dependency and ensure the portability of your applications.
- **"Zero-Trust" Security by Design** : The architecture is built on Talos OS, an immutable operating system with no direct access (no shell, no SSH), which drastically reduces the attack surface and provides a solid foundation for a "Zero-Trust" security strategy.
- **Modern Networking Foundations** : The integration of Cilium for CNI and MetalLB for service exposure provides a high-performance, standards-based networking foundation, ready to accommodate your own security and filtering components.

### A foundational platform ready to be extended

The "Managed Core" offering natively includes a minimal and consistent stack of cutting-edge open-source tools to provide you with the foundations of a Kubernetes cluster:

- **OS and Networking** : Talos, Cilium, MetalLB

Building on this foundation, you are free to integrate your own tools for continuous deployment, observability, backup, and cost management.

---

## Deployment Architectures

We offer two distinct architectures to meet your needs, whether for development environments or critical production environments.

### "Dev/Test" Architecture

Ideal for POC environments, this compact architecture deploys all resources within a single Availability Zone (AZ).

- **Use cases** : Development, testing, proof-of-concept (POC).
- **Key points** :
  - 1 Control Plane node.
  - 3 Worker nodes (or more).
  - No high availability SLA.
  - no security restrictions

<img src={archiOverview1az} alt="Architecture Mono-AZ" />

### Production Architecture (Multi-AZ)

Designed for production and critical applications, this architecture distributes resources across three availability zones (AZ) to ensure high availability and maximum resilience, in compliance with SecNumCloud requirements.

- **Use cases** : Production applications, critical services, platforms requiring an SLA.
- **Key points** :
  - **High Availability** : 3 Control Plane nodes distributed across 3 AZ.
  - **Dedicated Storage** : 3 dedicated and distributed storage nodes for performance and resilience.
  - **Distributed Workers** : At least 3 worker nodes, one per AZ.
  - **Bare Metal Nodes (Optionnel)** : Possible integration of **"Bare Metal"** type worker nodes for specific performance needs, notably **GPU support**.
  - **99.95% SLA**, measured monthly.


<img src={archiOverview} alt="Architecture Multi-AZ" />

---

### Technical Components Included

The "Managed Core" offering includes the following components:

- **Operating System** : Talos OS
- **Storage** : Rook-Ceph
- **CNI (Container Network Interface)** : Cilium
- **Load Balancer** : MetalLB