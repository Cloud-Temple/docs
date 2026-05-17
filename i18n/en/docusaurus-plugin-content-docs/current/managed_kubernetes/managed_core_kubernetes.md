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
    <p>Get started quickly by following clear and simple instructions.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Launch Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Learn step-by-step how to configure and use our services with detailed guides.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Discover tutorials &rarr;</a>
  </div>
</div>

Managed **Core** Kubernetes by Cloud Temple is a container orchestration solution based on a selection of Open Source products, designed to provide a secure, resilient, and automated foundational layer on Cloud Temple's SecNumCloud platforms. Each cluster is deployed in a fully client-dedicated Cloud-Temple IaaS environment.

This product is designed for teams with excellent mastery of Kubernetes and Cloud Native tools, who wish to build their own platform on minimalist and robust foundations. It is aimed at open source enthusiasts looking for a streamlined, portable solution without proprietary management layers, running on a minimalist and immutable OS designed for automation and security.

### Key Benefits

- **Sovereignty and Reversibility** : The solution relies exclusively on open source standards (Kubernetes CNCF) to avoid any technological dependency and ensure the portability of your applications.
- **"Zero-Trust" by design** : The architecture is built on Talos OS, an immutable operating system without direct access (ni shell, ni SSH), which drastically reduces the attack surface and provides a solid foundation for a "Zero-Trust" security strategy.
- **Modern Network Foundations** : The integration of Cilium for the CNI and MetalLB for service exposure delivers a high-performance, standard network foundation, ready to host your own security and filtering components.

### A foundational platform ready to be extended

The "Managed Core" offering natively includes a minimal and consistent stack of cutting-edge open source tools to provide the foundations for a Kubernetes cluster:

- **OS and Networking** : Talos, Cilium, MetalLB

From this foundation, you are free to integrate your own tools for continuous deployment, observability, backup, and cost management.

---

## Deployment Architectures

We offer two distinct architectures to meet your needs, whether for development environments or critical production environments.

### "Dev/Test" Architecture

Ideal for POC environments, this compact architecture deploys all resources within a single Availability Zone (AZ).

- **Use case**: Development, testing, proof-of-concept (POC).
- **Key points**:
  - 1 Control Plane node.
  - 3 Worker nodes (or more).
  - Does not benefit from a high availability SLA.
  - No security restrictions

<img src={archiOverview1az} alt="Single-AZ Architecture" />

### Production Architecture (Multi-AZ)

Designed for production and critical applications, this architecture distributes resources across three Availability Zones (AZ) to ensure high availability and maximum resilience, in compliance with SecNumCloud requirements.

- **Use Case** : Production applications, critical services, platforms requiring an SLA.
- **Key Points** :
  - **High Availability** : 3 Control Plane nodes distributed across 3 AZs.
  - **Distributed Workers** : At least 3 worker nodes, one per AZ.
  - **Bare Metal Nodes (Optional)** : Possible integration of **"Bare Metal"** worker nodes for specific performance requirements, particularly **GPU support**.
  - **99.90% SLA**, measured monthly.

<img src={archiOverview} alt="Multi-AZ Architecture" />

---

### Technical Components Included

The "Managed Core" offer includes the following components:

- **Operating System** : Talos OS
- **Storage** : Rook-Ceph
- **CNI (Container Network Interface)** : Cilium
- **Load Balancer** : MetalLB