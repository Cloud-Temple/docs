---
title: Übersicht der Containerisierungsangebote
sidebar_position: 10 # Position juste avant IaaS
---

# Containerisierung – der Beschleuniger Ihrer digitalen Transformation

In einem Umfeld beschleunigter digitaler Transformation ist die Fähigkeit, Anwendungen schnell zu entwickeln, bereitzustellen und weiterzuentwickeln, zu einem entscheidenden Wettbewerbsvorteil geworden. Die Containerisierung, orchestriert durch Plattformen wie Kubernetes und OpenShift, adressiert diese Herausforderung, indem sie eine beispiellose Agilität, Portabilität und operative Effizienz bietet.

Die inhärente Komplexität dieser Technologien kann jedoch eine Hürde darstellen. Aus diesem Grund hat Cloud Temple ein Portfolio an Managed- und „as a Service"-Lösungen entwickelt, die es Ihnen ermöglichen, die volle Leistungsfähigkeit von Containern zu nutzen, während Sie die Komplexität ihrer Verwaltung abgeben. Unsere Angebote sind so konzipiert, dass Sie sich auf Ihr Kerngeschäft konzentrieren können: die Anwendungsinnovation – auf einer souveränen und vertrauenswürdigen Basis.

## Unser Lösungsportfolio: Welcher Pfad für Ihr Projekt?

Diese Tabelle hebt die Stärken und die Positionierung jeder Lösung für eine schnelle Entscheidungsfindung hervor.

| Kriterium                      | PaaS OpenShift                                                                                                                | Managed Kubernetes                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Kernpositionierung**       | **Vertrauen ohne Kompromisse**<br/>_„as a Service"-Plattform, der schnellste Weg zur Modernisierung auf einer zertifizierten Basis._ | **Open-Source-Flexibilität**<br/>_Reines, portables Kubernetes ohne Overlayer auf einer souveränen Infrastruktur._ |
| **Serviceebene**        | as a Service                                                                                                                  | Managed                                                                                                               |
| **Konformität & Sicherheit**    | **100 % SecNumCloud**                                                                                                          | Gehostet auf SNC-Infrastruktur                                                                                       |
| **Ideales Zielpublikum**       | Entwicklungsteams, DevOps                                                                                              | DevOps-Teams, Kubernetes-Experten                                                                                   |
| **Differenzierungsmerkmal** | Einfachheit und Geschwindigkeit der Bereitstellung                                                                                         | Open Source, portabel und ohne Overlayer                                                                              |

### Vergleich der technischen Komponenten

Über die Positionierung hinaus stützt sich jedes Produkt auf unterschiedliche technologische Entscheidungen, die spezifischen Anforderungen entsprechen. Die folgende Tabelle beschreibt die grundlegenden Softwarebausteine, aus denen jede Lösung besteht.

| Technischer Baustein             | PaaS OpenShift                     | Managed Kubernetes          | Managed Core Kubernetes     |
| :--------------------------- | :--------------------------------- | :-------------------------- | :-------------------------- |
| **OS-Basis**                 | Red Hat CoreOS (RHCOS)             | Talos OS (immutable)         | Talos OS (immutable)         |
| **Orchestrator**            | Red Hat OpenShift                  | Kubernetes (CNCF)           | Kubernetes (CNCF)           |
| **Persistenter Speicher**      | OpenShift Data Foundation          | Rook-Ceph                   | Rook-Ceph                   |
| **Netzwerk (CNI)**             | OVN-Kubernetes                     | Cilium                      | Cilium                      |
| **Ingress / Load Balancing** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     | n/a                         |
| **Sicherheit (Policy Engine)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     | n/a                         |
| **Backup**               | Veeam Kasten K10 (Option)          | Veeam Kasten K10 (inklusive)   | n/a                         |
| **Automatisierung (GitOps)**  | OpenShift Pipelines                | ArgoCD                      | n/a                         |
| **Observability**            | Prometheus / Grafana               | Prometheus / Grafana / Loki | n/a                         |

---

## Welche Lösung für Ihr Projekt?

Die Wahl der Containerisierungsplattform ist eine strukturbestimmende Entscheidung. Hier sind einige Orientierungshilfen, um Sie zum für Ihren Kontext am besten geeigneten Produkt zu führen.

* **Wenn regulatorische Konformität Ihre absolute Priorität ist …**
    … und Sie in einem stark regulierten Sektor (Öffentlicher Sektor, Gesundheitswesen, OIV) tätig sind oder Ihre eigene Lösung qualifizieren müssen, ist das **PaaS-OpenShift-Angebot** die Referenzlösung, die Ihnen das höchste Garantieniveau am Markt bietet.

* **Wenn Sie Open Source, Modernität und „Zero-Trust"-Sicherheit bevorzugen …**
    und Ihre Unternehmenskultur stark auf Open Source, die Abwesenheit von Vendor-Lock-in und neue Sicherheitsansätze (immutable Systeme, API-basierte Verwaltung) ausgerichtet ist, ist das **Managed-Kubernetes-Angebot** am besten mit Ihrer Vision abgestimmt.

Unsere Beratungsrolle besteht darin, Sie bei dieser Entscheidung zu begleiten. Unsere Architekten stehen Ihnen zur Verfügung, um Ihren Kontext zu analysieren und gemeinsam mit Ihnen den besten Pfad zu definieren.

---

## Unsere Lösungen entdecken

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>PaaS OpenShift</h3>
      </div>
      <div className="card__body">
        <p>Entdecken Sie unsere „as a Service"-Plattform zur Modernisierung Ihrer Anwendungen auf einer SecNumCloud-zertifizierten Basis.</p>
      </div>
      <div className="card__footer">
        <a href="./paas_openshift" className="button button--primary button--block">Mehr erfahren</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>Managed (Core) Kubernetes</h3>
      </div>
      <div className="card__body">
        <p>Entdecken Sie unser reines, portables Kubernetes-Produkt ohne Overlayer, gehostet auf einer souveränen Infrastruktur.</p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Mehr erfahren</a>
      </div>
    </div>
  </div>
</div>
