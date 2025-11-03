---
title: Overview of Containerization Offerings
sidebar_position: 10 # Position just before IaaS
---

# Containerization – Accelerator for Your Digital Transformation

In the context of accelerated digital transformation, the ability to rapidly develop, deploy, and evolve applications has become a decisive competitive advantage. Containerization, orchestrated by platforms such as Kubernetes and OpenShift, addresses this challenge by delivering unmatched agility, portability, and operational efficiency.

However, the inherent complexity of these technologies can represent a barrier. That’s why Cloud Temple has developed a range of managed, "as a Service" solutions that enable you to harness the full power of containers while relieving you of the burden of managing their complexity. Our offerings are designed to allow you to focus on your core business: application innovation, on a sovereign and trustworthy foundation.

## Unser Lösungsportfolio: Welche Richtung für Ihr Projekt?

Diese Tabelle hebt die Stärken und das Positioning jeder Lösung hervor, um eine schnelle Entscheidungsfindung zu ermöglichen.

| Kriterium                      | PaaS OpenShift                                                                                                                | Managed Kubernetes                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Schlüsselpositionierung**       | **Vertrauen ohne Kompromisse**<br/>_Plattform "as a Service", der schnellste Weg zur Modernisierung auf einer zertifizierten Basis._ | **Flexibilität durch Open Source**<br/>_Ein reiner, portabler Kubernetes ohne Zusatzschicht auf einer souveränen Infrastruktur._ |
| **Service-Level**        | as a Service                                                                                                                  | Managé                                                                                                               |
| **Konformität & Sicherheit**    | **100 % SecNumCloud**                                                                                                          | Hosted auf SNC-Infrastruktur                                                                                       |
| **Zielgruppe**       | Entwicklungsteams, DevOps                                                                                              | DevOps-Teams, Kubernetes-Experten                                                                                   |
| **Unterscheidungsmerkmal** | Einfachheit und schnelle Bereitstellung                                                                                         | Open Source, portabel und ohne Zusatzschicht                                                                              |

### Technical Component Comparison

Beyond positioning, each offering is based on distinct technological choices that address specific requirements. The table below details the fundamental software building blocks that make up each solution.

| Technical Component        | PaaS OpenShift                     | Managed Kubernetes          |
| :------------------------- | :--------------------------------- | :-------------------------- |
| **OS Base**                | Red Hat CoreOS (RHCOS)             | Talos OS (immutable)        |
| **Orchestrator**           | Red Hat OpenShift                  | Kubernetes (CNCF)           |
| **Persistent Storage**     | OpenShift Data Foundation          | Rook-Ceph                   |
| **Networking (CNI)**       | OVN-Kubernetes                     | Cilium                      |
| **Ingress / Load Balancing** | HAProxy / MetalLB                | NGINX Ingress / MetalLB     |
| **Security (Policy Engine)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     |
| **Backup**                 | Veeam Kasten K10 (optional)        | Veeam Kasten K10 (included) |
| **Automation (GitOps)**    | OpenShift Pipelines                | ArgoCD                      |
| **Observability**          | Prometheus / Grafana               | Prometheus / Grafana / Loki |

## Which solution for your project?

Choosing a containerization platform is a strategic decision. Here are some key points to help you select the most suitable offering for your context.

*   **If regulatory compliance is your absolute priority...**  
    ...and you operate in a highly regulated sector (public, healthcare, finance) or need to certify your own solution, the **OpenShift PaaS offering** is the reference solution, providing the highest level of market assurance.

*   **If you value open source, modernity, and "zero-trust" security...**  
    ...and your company culture strongly emphasizes open source, independence from vendors, and next-generation security approaches (immutable systems, API-driven management), the **Managed Kubernetes offering** best aligns with your vision.

Our advisory role is to support you in making this decision. Our architects are available to analyze your context and define the optimal path together with you.

## Unsere Lösungen entdecken

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>PaaS OpenShift</h3>
      </div>
      <div className="card__body">
        <p>
          Entdecken Sie unsere „as a Service“-Plattform zur Modernisierung Ihrer Anwendungen auf einer zertifizierten SecNumCloud-Infrastruktur.
        </p>
      </div>
      <div className="card__footer">
        <a href="./paas_openshift" className="button button--primary button--block">Mehr erfahren</a>
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
          Erkunden Sie unser reines, portables und schichtfreies Kubernetes-Angebot, betrieben auf einer souveränen Infrastruktur.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Mehr erfahren</a>
      </div>
    </div>
  </div>
</div>