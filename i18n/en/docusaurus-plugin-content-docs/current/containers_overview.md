---
title: Overview of Containerization Offerings
sidebar_position: 10 # Position just before IaaS
---

# Containerization, the accelerator of your digital transformation

In the context of accelerated digital transformation, the ability to quickly develop, deploy, and scale applications has become a decisive competitive advantage. Containerization, orchestrated by platforms such as Kubernetes and OpenShift, addresses this challenge by offering unparalleled agility, portability, and operational efficiency.

However, the inherent complexity of these technologies can be a hindrance. This is why Cloud Temple has developed a range of managed and "as a Service" solutions that allow you to leverage the full power of containers, while relieving you of the complexity of managing them. Our offerings are designed to enable you to focus on your core business: application innovation, on a sovereign and trusted foundation.

## Our solutions portfolio: which trajectory for your project?

This table highlights the strengths and positioning of each solution for quick decision-making.

| Criteria                     | OpenShift PaaS                                                                                                                | Managed Kubernetes                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Key Positioning**          | **Uncompromising trust**<br/>_An "as a Service" platform, the fastest route to modernize on a certified foundation._          | **Open-source flexibility**<br/>_Pure, portable Kubernetes without additional layers on sovereign infrastructure._     |
| **Service Level**            | as a Service                                                                                                                  | Managed                                                                                                              |
| **Compliance & Security**    | **100% SecNumCloud**                                                                                                          | Hosted on SNC infrastructure                                                                                         |
| **Ideal Target Audience**    | Development teams, DevOps                                                                                                     | DevOps teams, Kubernetes experts                                                                                     |
| **Differentiation Point**    | Simplicity and rapid deployment                                                                                               | Open-source, portable, and without additional layers                                                                 |

### Comparison of Technical Components

Beyond positioning, each product relies on distinct technological choices that address specific needs. The following table details the fundamental software building blocks that make up each solution.

| Technical Component          | OpenShift PaaS                     | Managed Kubernetes          |
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

---

## What solution for your project?

Choosing a containerization platform is a foundational decision. Here are some key points to help you identify the most relevant product for your context.

* **If regulatory compliance is your top priority...**
    ...and you need to operate in a highly regulated sector (public, healthcare, OIV) or certify your own solution, the **OpenShift PaaS Offering** is the reference solution that provides the highest level of market assurance.

* **If you prioritize open source, modernity, and "zero-trust" security...**
    ...and your corporate culture is strongly oriented towards open source, avoiding vendor dependency, and next-generation security approaches (immutable systems, API-driven management), the **Managed Kubernetes Offering** is the most aligned with your vision.

Our advisory role is to support you in this decision. Our architects are available to analyze your context and define the best path forward with you.

---

## Explore Our Solutions

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
          Explore our pure, portable, and vanilla Kubernetes product, hosted on sovereign infrastructure.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Learn more</a>
      </div>
    </div>
  </div>
</div>