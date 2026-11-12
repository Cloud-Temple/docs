---
title: Containerization Offerings Overview
sidebar_position: 10 # Position just before IaaS
---

# Containerization, the accelerator of your digital transformation

In a context of accelerated digital transformation, the ability to rapidly develop, deploy, and scale applications has become a decisive competitive advantage. Containerization, orchestrated by platforms such as Kubernetes and OpenShift, addresses this challenge by offering unparalleled agility, portability, and operational efficiency.

However, the inherent complexity of these technologies can be a barrier. That is why Cloud Temple has developed a range of managed and "as a Service" solutions that allow you to benefit from the full power of containers while offloading the complexity of their management. Our offerings are designed to enable you to focus on your core business: application innovation, on a sovereign and trusted foundation.

## Our solution portfolio: which trajectory for your project?

This table highlights the strengths and positioning of each solution for quick decision-making.

| Criterion                      | PaaS OpenShift                                                                                                                | Managed Kubernetes                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Key positioning**       | **Trust without compromise**<br/>_"As a Service" platform, the fastest path to modernize on a certified foundation._ | **Open source flexibility**<br/>_A pure, portable Kubernetes with no overlay on a sovereign infrastructure._ |
| **Service level**        | as a Service                                                                                                                  | Managed                                                                                                               |
| **Compliance & security**    | **100% SecNumCloud**                                                                                                          | Hosted on SNC infrastructure                                                                                       |
| **Ideal target audience**       | Development teams, DevOps                                                                                              | DevOps teams, Kubernetes experts                                                                                   |
| **Differentiator** | Deployment simplicity and speed                                                                                         | Open-source, portable, and no overlay                                                                              |

### Technical components comparison

Beyond positioning, each product is built on distinct technological choices that address specific needs. The following table details the fundamental software building blocks that compose each solution.

| Technical Component             | PaaS OpenShift                     | Managed Kubernetes          | Managed Core Kubernetes     |
| :--------------------------- | :--------------------------------- | :-------------------------- | :-------------------------- |
| **OS Foundation**                 | Red Hat CoreOS (RHCOS)             | Talos OS (immutable)         | Talos OS (immutable)         |
| **Orchestrator**            | Red Hat OpenShift                  | Kubernetes (CNCF)           | Kubernetes (CNCF)           |
| **Persistent storage**      | OpenShift Data Foundation          | Rook-Ceph                   | Rook-Ceph                   |
| **Network (CNI)**             | OVN-Kubernetes                     | Cilium                      | Cilium                      |
| **Ingress / Load Balancing** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     | n/a                         |
| **Security (Policy Engine)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     | n/a                         |
| **Backup**               | Veeam Kasten K10 (optional)          | Veeam Kasten K10 (included)   | n/a                         |
| **Automation (GitOps)**  | OpenShift Pipelines                | ArgoCD                      | n/a                         |
| **Observability**            | Prometheus / Grafana               | Prometheus / Grafana / Loki | n/a                         |

---

## Which solution for your project?

Choosing a containerization platform is a structuring decision. Here are some key points to guide you toward the most relevant product for your context.

* **If regulatory compliance is your absolute priority...**
    ...and you need to operate in a highly regulated sector (public, healthcare, OIV) or qualify your own solution, the **PaaS OpenShift Offering** is the reference solution that provides the highest level of market guarantee.

* **If you prioritize open source, modernity, and "zero-trust" security...**
    and your company culture is strongly oriented toward open source, the absence of vendor lock-in, and next-generation security approaches (immutable systems, API-based management), the **Managed Kubernetes Offering** is the most aligned with your vision.

Our advisory role is to support you in this decision. Our architects are at your disposal to analyze your context and define with you the best trajectory.

---

## Explore our solutions

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>PaaS OpenShift</h3>
      </div>
      <div className="card__body">
        <p>Discover our "as a Service" platform to modernize your applications on a SecNumCloud-certified foundation.</p>
      </div>
      <div className="card__footer">
        <a href="./paas_openshift" className="button button--primary button--block">Learn more</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>Managed (core) Kubernetes</h3>
      </div>
      <div className="card__body">
        <p>Explore our pure, portable Kubernetes product with no overlay, hosted on a sovereign infrastructure.</p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Learn more</a>
      </div>
    </div>
  </div>
</div>
