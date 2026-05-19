---
title: Übersicht der Containerisierungsangebote
sidebar_position: 10 # Position direkt vor IaaS
---

# Containerisierung, Beschleuniger Ihrer digitalen Transformation

In einem Umfeld beschleunigter digitaler Transformation ist die Fähigkeit, Anwendungen schnell zu entwickeln, bereitzustellen und weiterzuentwickeln, zu einem entscheidenden Wettbewerbsvorteil geworden. Die Containerisierung, orchestriert durch Plattformen wie Kubernetes und OpenShift, adressiert diese Herausforderung, indem sie eine unübertroffene Agilität, Portabilität und Betriebseffizienz bietet.

Die inhärente Komplexität dieser Technologien kann jedoch ein Hemmnis darstellen. Aus diesem Grund hat Cloud Temple eine Palette von verwalteten "as a Service"-Lösungen entwickelt, die es Ihnen ermöglichen, die volle Leistungsfähigkeit von Containern zu nutzen, während Sie von der Komplexität ihres Managements entlastet werden. Unsere Angebote sind darauf ausgelegt, Ihnen die Konzentration auf Ihr Kerngeschäft zu ermöglichen: die Anwendungsinnovation, auf einer souveränen und vertrauenswürdigen Basis.

## Unser Lösungsportfolio: Welcher Weg für Ihr Projekt?

Diese Tabelle hebt die Stärken und die Positionierung jeder Lösung hervor, um eine schnelle Entscheidungsfindung zu ermöglichen.

| Kriterium                      | PaaS OpenShift                                                                                                                | Managed Kubernetes                                                                                                   |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Kernpositionierung**       | **Unkompromissiges Vertrauen**<br/>_Plattform "as a Service", der schnellste Weg zur Modernisierung auf einer zertifizierten Basis._ | **Open-Source-Flexibilität**<br/>_Ein reines, portables und schichtenfreies Kubernetes auf einer souveränen Infrastruktur._ |
| **Servicelevel**        | as a Service                                                                                                                  | Managed                                                                                                               |
| **Compliance & Sicherheit**    | **100 % SecNumCloud**                                                                                                          | Auf SNC-Infrastruktur gehostet                                                                                       |
| **Ideale Zielgruppe**       | Entwicklungsteams, DevOps                                                                                              | DevOps-Teams, Kubernetes-Experten                                                                                   |
| **Unterscheidungsmerkmal** | Einfachheit und schnelle Bereitstellung                                                                                         | Open-Source, portabel und schichtenfrei                                                                              |

### Vergleich der technischen Komponenten

Jenseits der Positionierung setzt jedes Produkt auf unterschiedliche technologische Entscheidungen, die spezifische Anforderungen erfüllen. Die folgende Tabelle listet die grundlegenden Softwarekomponenten auf, aus denen jede Lösung besteht.

| Technische Komponente      | PaaS OpenShift                     | Managed Kubernetes          |
| :--------------------------- | :--------------------------------- | :-------------------------- |
| **OS-Grundlage**           | Red Hat CoreOS (RHCOS)             | Talos OS (immutable)        |
| **Orchestrator**           | Red Hat OpenShift                  | Kubernetes (CNCF)           |
| **Persistenter Speicher**  | OpenShift Data Foundation          | Rook-Ceph                   |
| **Netzwerk (CNI)**         | OVN-Kubernetes                     | Cilium                      |
| **Ingress / Lastverteilung**| HAProxy / MetalLB                  | NGINX Ingress / MetalLB     |
| **Sicherheit (Policy Engine)** | Security Context Constraints (SCC) | PSA + Kyverno + Capsule |
| **Backup**                 | Veeam Kasten K10 (optional)        | Veeam Kasten K10 (inklusive)|
| **Automatisierung (GitOps)** | OpenShift Pipelines              | ArgoCD                      |
| **Observability**          | Prometheus / Grafana               | Prometheus / Grafana / Loki |

---

## Welche Lösung für Ihr Projekt?

Die Wahl der Containerisierungsplattform ist eine strategische Entscheidung. Hier sind einige Orientierungshilfen, um Sie zum für Ihren Kontext passendsten Produkt zu führen.

* **Wenn die regulatorische Compliance Ihre absolute Priorität ist...**
    ...und Sie in einem stark regulierten Sektor (Öffentlicher Dienst, Gesundheitswesen, OIV) tätig sein müssen oder Ihre eigene Lösung für den Produktiveinsatz qualifizieren wollen, ist das **OpenShift PaaS-Angebot** die Referenzlösung, die Ihnen das höchste Maß an Marktgarantien bietet.

* **Wenn Sie Open Source, Modernität und "Zero-Trust"-Sicherheit bevorzugen...**
    und Ihre Unternehmenskultur stark auf Open Source, Herstellerunabhängigkeit sowie Sicherheitsansätze der neuen Generation (immutable Systeme, API-gesteuertes Management) ausgerichtet ist, ist das **Managed Kubernetes-Angebot** am besten mit Ihrer Vision vereinbar.

Unsere Beratungsrolle besteht darin, Sie bei dieser Entscheidung zu begleiten. Unsere Architekten stehen Ihnen gerne zur Verfügung, um Ihren Kontext zu analysieren und gemeinsam mit Ihnen den optimalen Weg zu definieren.

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
          Entdecken Sie unsere "as a Service"-Plattform zur Modernisierung Ihrer Anwendungen auf einer SecNumCloud-zertifizierten Basis.
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
          Entdecken Sie unser reines, portables Kubernetes-Produkt ohne Overhead, das auf einer souveränen Infrastruktur gehostet wird.
        </p>
      </div>
      <div className="card__footer">
        <a href="./managed_kubernetes" className="button button--primary button--block">Mehr erfahren</a>
      </div>
    </div>
  </div>
</div>