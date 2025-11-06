---
title: Containerization Offerings Overview
sidebar_position: 10 # Position just before IaaS
---

# Containerization: Accelerator of Your Digital Transformation

In an era of accelerated digital transformation, the ability to rapidly develop, deploy, and evolve applications has become a decisive competitive advantage. Containerization, orchestrated through platforms such as Kubernetes and OpenShift, addresses this challenge by delivering unmatched agility, portability, and operational efficiency.

However, the inherent complexity of these technologies can represent a barrier. That’s why Cloud Temple has developed a range of managed, "as a Service" solutions that enable you to harness the full power of containers while relieving you of the burden of managing their complexity. Our offerings are designed to allow you to focus on your core business: application innovation—on a sovereign, trusted foundation.

## Our solution portfolio: which path for your project?

This table highlights the strengths and positioning of each solution to enable quick decision-making.

| Criterion                    | PaaS OpenShift                                                                                                                | Managed Kubernetes                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Key positioning**          | **Uncompromised trust**<br/>_Platform as a Service — the fastest path to modernize on a certified foundation._           | **Open-source flexibility**<br/>_A pure, portable Kubernetes without overhead, running on a sovereign infrastructure._ |
| **Service level**            | As a Service                                                                                                                  | Managed                                                                                                              |
| **Compliance & security**    | **100% SecNumCloud**                                                                                                          | Hosted on SNC infrastructure                                                                                         |
| **Ideal target audience**    | Development and DevOps teams                                                                                                  | DevOps teams, Kubernetes experts                                                                                     |
| **Differentiating factor**   | Simplicity and rapid deployment                                                                                               | Open-source, portable, and without overhead                                                                          |

### Technical Component Comparison

Beyond positioning, each offering is built on distinct technological choices tailored to specific requirements. The table below details the core software components that make up each solution.

| Technical Component          | PaaS OpenShift                     | Managed Kubernetes          |
| :--------------------------- | :--------------------------------- | :-------------------------- |
| **OS Base**                  | Red Hat CoreOS (RHCOS)             | Talos OS (immutable)        |
| **Orchestrator**             | Red Hat OpenShift                  | Kubernetes (CNCF)           |
| **Persistent Storage**       | OpenShift Data Foundation          | Rook-Ceph                   |
| **Networking (CNI)**         | OVN-Kubernetes                     | Cilium                      |
| **Ingress / Load Balancing** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     |
| **Security (Policy Engine)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     |
| **Backup**                   | Veeam Kasten K10 (optional)        | Veeam Kasten K10 (included) |
| **Automation (GitOps)**      | OpenShift Pipelines                | ArgoCD                      |
| **Observability**            | Prometheus / Grafana               | Prometheus / Grafana / Loki |

## Which solution for your project?

Choosing a containerization platform is a strategic decision. Here are some key points to help you select the most suitable offering for your context.

*   **If regulatory compliance is your absolute priority...**  
    ...and you operate in a highly regulated sector (public, healthcare, finance) or need to certify your own solution, the **OpenShift PaaS Offering** is the reference solution, providing the highest level of market assurance.

*   **If you value open source, modernity, and "zero-trust" security...**  
    ...and your company culture strongly emphasizes open source, vendor independence, and next-generation security approaches (immutable systems, API-driven management), the **Managed Kubernetes Offering** best aligns with your vision.

Our advisory role is to support you in making this decision. Our architects are available to analyze your context and define the optimal path forward together with you.

## Explore our solutions

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>OpenShift PaaS</h3>
      </div>
      <div className="card__body">
        <p>
          Discover our "as a Service" platform to modernize your applications on a SecNumCloud-certified foundation.
        </p>
      </div>
      <div className="card__footer">
        <a href="./paas_openshift" className="button button--primary button--block">Learn more</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>Managed Kubernetes</h3>
      </div>
      <div className="card__body">
        <p>
          Explore our pure, portable, and overhead-free Kubernetes offering, hosted on a sovereign infrastructure.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Learn more</a>
      </div>
    </div>
  </div>
</div>