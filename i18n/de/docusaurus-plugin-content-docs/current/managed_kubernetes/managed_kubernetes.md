---
title: Overview
---

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Entdecken Sie die Grundlagen und wesentlichen Prinzipien, um unsere Infrastruktur sicher zu beherrschen.</p>
    <a href="managed_kubernetes/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Quickstart</h3>
    <p>Starten Sie schnell mit klaren und einfachen Anweisungen.</p>
    <a href="managed_kubernetes/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
  <div class="card">
    <h3>Tutorials</h3>
    <p>Lernen Sie Schritt für Schritt, wie Sie unsere Dienste mit detaillierten Anleitungen konfigurieren und nutzen.</p>
    <a href="managed_kubernetes/tutorials" class="card-link">Tutorials entdecken &rarr;</a>
  </div>
</div>

Managed Kubernetes by Cloud Temple ist eine Container-Orchestrierungslösung auf Basis von Open-Source-Produkten und wurde speziell entwickelt, um ein hohes Maß an Sicherheit, Resilienz und Automatisierung auf den SecNumcloud-Plattformen von Cloud Temple zu gewährleisten. Jeder Cluster wird in einer vollständig dedizierten IaaS-Umgebung von Cloud-Temple OpenIaaS für den Kunden bereitgestellt.

Diese Lösung ist für Kubernetes-Experten und Anhänger des Open Source-Philosophie konzipiert, die eine native, portierbare Lösung ohne Hersteller-spezifische Zusatzschichten suchen, auf einem minimalen und unveränderlichen Betriebssystem, das speziell für Automatisierung und Sicherheit entwickelt wurde.

### Key Benefits
- **Sovereignty and Reversibility**: The solution is built on open-source standards (CNCF Kubernetes) to avoid any technological lock-in and ensure application portability. The Veeam Kasten backup tool included in the offering is specifically designed to simplify migrations between clouds.
- **Zero-Trust Security and Governance**: The architecture is based on Talos OS, an immutable operating system with no direct access (no shell, no SSH), drastically reducing the attack surface. This approach is combined with governance tools such as Kyverno for policy management and Capsule for fine-grained access control, forming a solid foundation for a Zero-Trust security strategy.
- **Cost Control and Integration**: The solution natively integrates FinOps tools like OpenCost for precise consumption tracking. The pricing model is transparent, based on consumed IaaS resources, and the use of well-established open-source components (Cilium, Ceph, ArgoCD) facilitates seamless integration into your existing ecosystems.

### A complete and ready-to-use platform  
The solution natively includes a comprehensive and consistent stack of cutting-edge open-source tools to cover all requirements throughout the application lifecycle:

- **Networking and Security**: Cilium, Hubble, Kyverno, Capsule  
- **Storage**: Rook-Ceph  
- **Continuous Deployment (GitOps)**: ArgoCD  
- **Observability**: Prometheus, Grafana, Loki  
- **Backup and Migration**: Veeam Kasten  
- **Cost Management (FinOps)**: OpenCost

## Deployment Architectures

We offer two distinct architectures to meet your needs, whether for development environments or critical production setups.

### "Dev/Test" Architecture

Ideal for non-production environments, this compact architecture deploys all resources within a single availability zone (AZ). It is designed for agility and cost efficiency.

- **Use cases**: Development, testing, proof-of-concept (POC).
- **Key features**:
    - 1 Control Plane node.
    - 3 Worker nodes (or more).
    - Distributed storage (Ceph) is co-located on the Worker nodes.
    - No high availability SLA.
    - No security restrictions.

<img src={require('./images/archi_overview_1az.png').default} alt="Mono-AZ Architecture" />

### Production Architecture (Multi-AZ)

Designed for production and critical applications, this architecture distributes resources across three Availability Zones (AZ) to ensure high availability and maximum resilience, in compliance with SecNumCloud requirements.

- **Use case**: Production applications, critical services, platforms requiring an SLA.
- **Key features**:
    - **High Availability**: 3 Control Plane nodes distributed across 3 AZs.
    - **Dedicated Storage**: 3 dedicated storage nodes distributed for performance and resilience.
    - **Distributed Workers**: At least 3 worker nodes, one per AZ.
    - **SLA of 99.90%**.

<img src={require('./images/archi_overview.png').default} alt="Multi-AZ Architecture" />

### Detailed Technical Components  
The offer includes the following components in detail:

- CNI Cilium, with observability interface (Hubble)  
- Internal and external ingresses via MetalLB and nginx  
- Distributed storage with Rook-Ceph  
- Cert-Manager  
- ArgoCD  
- Prometheus stack (Prometheus, Grafana, Loki)  
- Container registry Harbor  
- Cost management with OpenCost  
- Advanced security policies with Kyverno and Capsule  
- Veeam Kasten (backup, cross-environment automation, and reversibility)  
- SSO authentication with external Identity Provider OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)