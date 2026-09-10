---
title: Übersicht der Containerisierungsangebote
sidebar_position: 10 # Position direkt vor IaaS
---

# Containerisierung: Der Beschleuniger Ihrer digitalen Transformation

In einem Umfeld beschleunigter digitaler Transformation ist die Fähigkeit, Anwendungen schnell zu entwickeln, bereitzustellen und zu skalieren, zu einem entscheidenden Wettbewerbsvorteil geworden. Die Containerisierung, orchestriert durch Plattformen wie Kubernetes und OpenShift, adressiert diese Herausforderung, indem sie unübertroffene Agilität, Portabilität und operative Effizienz bietet.

Die diesen Technologien inhärente Komplexität kann jedoch ein Hindernis darstellen. Aus diesem Grund hat Cloud Temple eine Reihe von Managed Services und "as a Service"-Lösungen entwickelt, die Ihnen den vollen Nutzen der Containerisierung ermöglichen, während Sie von der Komplexität des Managements entlastet werden. Unsere Angebote sind darauf ausgelegt, Ihnen zu ermöglichen, sich auf Ihr Kerngeschäft zu konzentrieren: die Anwendungsinnovation, auf einer souveränen und vertrauenswürdigen Basis.

## Unser Lösungsportfolio: Welcher Weg für Ihr Projekt ?

Diese Tabelle hebt die Stärken und die Positionierung jeder Lösung hervor, um eine schnelle Entscheidungsfindung zu ermöglichen.

| Kriterium                      | PaaS OpenShift                                                                                                                | Managed Kubernetes                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Kernpositionierung**       | **Vertrauen ohne Kompromisse**<br/>_Plattform "as a Service", der schnellste Weg zur Modernisierung auf einer zertifizierten Grundlage._ | **Open-Source-Flexibilität**<br/>_Reines, portables Kubernetes ohne zusätzliche Schicht auf einer souveränen Infrastruktur._ |
| **Service-Level**        | as a Service                                                                                                                  | Managed                                                                                                               |
| **Konformität & Sicherheit**    | **100% SecNumCloud**                                                                                                          | Auf SNC-Infrastruktur gehostet                                                                                       |
| **Ideale Zielgruppe**       | Entwicklungsteams, DevOps                                                                                              | DevOps-Teams, Kubernetes-Experten                                                                                   |
| **Unterscheidungsmerkmal** | Einfachheit und schnelle Bereitstellung                                                                                         | Open-Source, portabel und ohne zusätzliche Schicht                                                                              |

### Vergleich der technischen Komponenten

Über die Positionierung hinaus basiert jedes Produkt auf unterschiedlichen technologischen Entscheidungen, die spezifischen Anforderungen gerecht werden. Die folgende Tabelle detailliert die grundlegenden Softwarebausteine, die jede Lösung ausmachen.

| Technische Komponente             | PaaS OpenShift                     | Managed Kubernetes          | Managed Core Kubernetes     |
| :--------------------------- | :--------------------------------- | :-------------------------- | :-------------------------- |
| **Basis-OS**                 | Red Hat CoreOS (RHCOS)             | Talos OS (unveränderlich)         | Talos OS (unveränderlich)         |
| **Orchestrator**            | Red Hat OpenShift                  | Kubernetes (CNCF)           | Kubernetes (CNCF)           |
| **Persistenter Speicher**      | OpenShift Data Foundation          | Rook-Ceph                   | Rook-Ceph                   |
| **Netzwerk (CNI)**             | OVN-Kubernetes                     | Cilium                      | Cilium                      |
| **Ingress / Lastverteilung** | HAProxy / MetalLB                  | NGINX Ingress / MetalLB     | n/a                         |
| **Sicherheit (Policy-Engine)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule     | n/a                         |
| **Sicherung**               | Veeam Kasten K10 (optional)          | Veeam Kasten K10 (inklusive)   | n/a                         |
| **Automatisierung (GitOps)**  | OpenShift Pipelines                | ArgoCD                      | n/a                         |
| **Observierbarkeit**            | Prometheus / Grafana               | Prometheus / Grafana / Loki | n/a                         |

---

## Welche Lösung für Ihr Projekt?

Die Wahl der Containerisierungsplattform ist eine strategische Entscheidung. Hier sind einige Leitlinien, um Sie zur passendsten Lösung für Ihren Kontext zu führen.

* **Wenn regulatorische Konformität Ihre absolute Priorität ist...**
    ...und Sie in einer stark regulierten Branche (Öffentlicher Sektor, Gesundheitswesen, Finanzsektor) tätig sind oder Ihre eigene Lösung zertifizieren müssen, ist das **OpenShift PaaS-Angebot** die Referenzlösung, die Ihnen die höchste Marktgarantie bietet.

* **Wenn Sie Open Source, Modernität und "Zero-Trust"-Sicherheit bevorzugen...**
    und Ihre Unternehmenskultur stark auf Open Source, Anbieterunabhängigkeit und Sicherheitsansätze der nächsten Generation (immutable Systeme, API-basierte Verwaltung) ausgerichtet ist, ist das **Managed Kubernetes-Angebot** am besten mit Ihrer Vision vereinbar.

Unsere beratende Rolle besteht darin, Sie bei dieser Entscheidung zu begleiten. Unsere Architekten stehen Ihnen zur Verfügung, um Ihren Kontext zu analysieren und gemeinsam mit Ihnen den optimalen Weg zu definieren.

---

## Entdecken Sie unsere Lösungen

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>PaaS OpenShift</h3>
      </div>
      <div className="card__body">
        <p>
          Entdecken Sie unsere "as a Service"-Plattform, um Ihre Anwendungen auf einer SecNumCloud-zertifizierten Basis zu modernisieren.
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
        <h3>Managed (core) Kubernetes</h3>
      </div>
      <div className="card__body">
        <p>
          Entdecken Sie unser reines, portables und unmodifiziertes Kubernetes-Produkt, das auf einer souveränen Infrastruktur gehostet wird.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Mehr erfahren</a>
      </div>
    </div>
  </div>
</div>