---
title: Schnellstartanleitung
---

Willkommen zur Schnellstartanleitung für **Managed Kubernetes** Cloud Temple.

Ziel dieses Abschnitts ist es, Sie zu den erforderlichen Ressourcen zu leiten, damit Sie Ihren Cluster schnell in die Hand nehmen können.

---

## Bevor Sie beginnen

Um mit Ihrem Cluster zu interagieren, sind mehrere Elemente erforderlich:

1. **Die `kubeconfig`-Datei**: Diese Datei, die Ihnen von den Cloud Temple-Teams bei der Bereitstellung des Services bereitgestellt wird, enthält alle Informationen für eine sichere Verbindung.
2. **Das `kubectl`-Tool**: Dies ist die Standard-Befehlszeilenschnittstelle zur Steuerung eines Kubernetes-Clusters.
3. **L'outil `kubelogin`** (si OIDC est utilisé) : Wenn Ihr Cluster so konfiguriert ist, dass er sich über einen OIDC-Identitätsanbieter (wie Entra ID/Azure AD) authentifiziert, müssen Sie das `kubelogin`-Tool installieren, um den Authentifizierungsablauf zu verwalten. Folgen Sie dem [Installationsleitfaden für kubelogin](https://github.com/int128/kubelogin).

:::info[Empfohlene grafische Tools:
]
Für eine visuellere Darstellung und ein vereinfachtes Ressourcenmanagement empfehlen wir die Verwendung von **Lens**. Dies ist ein leistungsstarkes Tool für Kubernetes, mit dem Sie Ihren Cluster erkunden, Ihre Anwendungen verwalten und deren Status grafisch visualisieren können.
Einige unserer Tutorials verwenden Lens, um die Vorgehensweise zu veranschaulichen. Sie können es hier herunterladen: [https://k8slens.dev/](https://k8slens.dev/).
:::

---

## Zugriff auf Ihren verwalteten Kubernetes-Cluster

Ihr Produktionscluster wird durch einen Code aus 5 Buchstaben identifiziert (6 Buchstaben in Dev/Test). Dieser Code wird verwendet, um die URLs der verschiedenen Schnittstellen zu erstellen. In den Tutorials verwenden wir **"ctodev"**.

Die URLs sind:

- Kubernetes-API (wird in kubeconfig verwendet):
  - **identifiant**.mk.ms-cloud-temple.com:6443  (also in unserem Beispiel: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )

- Öffentliche URLs:
  - k10.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**identifiant**.mk.ms-cloud-temple.com

:::info[Sichere URLs
]
Die oben genannten URLs sind nur von bekannten öffentlichen IPs aus zugänglich, die in der Firewall der Lösung konfiguriert sind. Wenn Sie eine öffentliche IP hinzufügen möchten, müssen Sie eine Supportanfrage stellen.
:::

- Interne URLs:
  - ceph.internal.**identifiant**.mk.ms-cloud-temple.com
  - argocd.internal.**identifiant**.mk.ms-cloud-temple.com
  - hubble.internal.**identifiant**.mk.ms-cloud-temple.com

:::info[Interne URLs
]
Die oben genannten URLs sind nicht im Internet exponiert. Sie sind nur im internen Netzwerk des verwalteten Kubernetes-Clusters zugänglich.
:::

---

## Ihre Berechtigungen

:::warning[Dev/Test
]
Für verwaltete Kubernetes-Cluster im Bereich **"Dev/Test"** verfügt das Ihnen bereitgestellte Dienstkonto über alle Berechtigungen im gesamten Cluster (ClusterAdmin)
:::

In **"Production"**-Clustern sind Ihre Berechtigungen eingeschränkt. Sie verfügen über ein Recht als **"Erweiterter Betrachter"** auf die Cluster-Ressourcen. Dieses Recht gewährt einen schreibgeschützten Zugriff auf Schlüsselressourcen, sowohl auf Cluster-Ebene als auch für Diagnosezwecke:

- Namespaces: Ermöglichen es Tenants, Namespaces für Tools und Dashboards aufzulisten.
- Pods, Deployments, ReplicaSets...: Ermöglichen es Tenants, auf dem Cluster bereitgestellte Ressourcen aufzulisten.
- Nodes: Bieten Einblicke in die Kapazität, Taints und Labels der Nodes, um das Verhalten des Schedulers zu verstehen.
- StorageClasses, PVs, PVCs, VolumeAttachments und CSIDrivers: Ermöglichen es Tenants, verfügbare Storage-Klassen zu identifizieren und Probleme bei der Bindung zwischen PVC und PV oder Treiberfehler (CSI) zu beheben.
- IngressClasses: Informieren Benutzer über verfügbare Ingress-Controller für das Application-Routing.
- NetworkPolicies, ResourceQuotas, LimitRanges und Events: Essentiell zur Diagnose von Netzwerkeinschränkungen, Scheduling-Fehlern oder Verletzungen von Ressourcen-Quotas.

Das Ihnen anvertraute Dienstkonto wurde zudem zum **Eigentümer eines ersten *Capsule*-Tenants***.
Sie können Namespaces erstellen, die Ihrem Capsule-Tenant zugeordnet werden.
Externe Konten (OIDC) sind Mitglieder dieses gleichen Capsule-Tenants, was ihnen ermöglicht, sich frei innerhalb der **Namespaces** zu bewegen, die dem Tenant zugeordnet sind. (Siehe Tutorial „Berechtigungen mit Capsule verwalten“)

Bestimmte Aktionen sind nicht gestattet:

- Auflisten / Erstellen von Capsule-Tenants
- Erstellen von CRDs: Wenn Sie eine Anwendung mit CRDs bereitstellen müssen (z. B. ein Helm-Chart eines Operators), müssen Sie den Support kontaktieren, damit diese CRDs importiert werden (durch Extrahieren der YAML-Dateien aus dem Helm-Chart). Anschließend können Sie Ihr Helm-Chart mit der Option `--skip-crds` bereitstellen. Siehe: [Dokumentation Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Bereitstellen Ihrer ersten Anwendung</h3>
      </div>
      <div className="card__body">
        <p>
          Folgen Sie einer detaillierten Anleitung, um sich zu verbinden, eine „Hello World“-Anwendung bereitzustellen und im Internet freizugeben.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Tutorial starten &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Netzwerk verstehen</h3>
      </div>
      <div className="card__body">
        <p>
          Erfahren Sie mehr über den Adressplan, Ingress-Controller und wie Sie Ihre Dienste sicher freigeben können.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Netzwerk-Tutorial anzeigen &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Berechtigungen mit Capsule verwalten</h3>
      </div>
      <div className="card__body">
        <p>
          Lernen Sie, wie Sie Capsule nutzen, um Tenants zu erstellen und Berechtigungen an Ihre Teams zu delegieren.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Capsule entdecken &rarr;</a>
      </div>
    </div>
  </div>
</div>