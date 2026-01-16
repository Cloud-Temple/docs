---
title: Getting Started Guide
---

Welcome to the **Managed Kubernetes** Cloud Temple Getting Started Guide.

The goal of this section is to guide you toward the resources necessary to get started with your cluster.

---

## Vor Beginn

Um mit Ihrem Cluster zu interagieren, sind mehrere Elemente unbedingt erforderlich:

1.  **Die Datei `kubeconfig`**: Diese Datei, die Ihnen von den Cloud Temple-Teams bei der Bereitstellung des Services zur Verfügung gestellt wird, enthält alle notwendigen Informationen für eine sichere Verbindung.
2.  **Das Tool `kubectl`**: Dies ist die standardmäßige Befehlszeilenschnittstelle zur Steuerung eines Kubernetes-Clusters.
3.  **Das Tool `kubelogin`** (falls OIDC verwendet wird): Wenn Ihr Cluster so konfiguriert ist, dass die Authentifizierung über einen OIDC-Identitätsanbieter (z. B. Entra ID/Azure AD) erfolgt, müssen Sie das Tool `kubelogin` installieren, um den Authentifizierungsfluss zu verwalten. Folgen Sie dem [Installationsleitfaden für kubelogin](https://github.com/int128/kubelogin).

:::info Empfohlene grafische Tools:  
Für eine visuell ansprechendere und vereinfachte Verwaltung Ihrer Ressourcen empfehlen wir die Verwendung von **Lens**. Dies ist ein leistungsstarkes Tool für Kubernetes, mit dem Sie Ihren Cluster erkunden, Ihre Anwendungen verwalten und deren Zustand grafisch darstellen können.  
Einige unserer Tutorials verwenden Lens, um Manipulationen zu veranschaulichen. Sie können es hier herunterladen: [https://k8slens.dev/](https://k8slens.dev/).
:::

## Zugriff auf Ihren verwalteten Kubernetes-Cluster

Ihr Produktionscluster wird durch einen 5-Buchstaben-Code (6 Buchstaben in Dev/Test) identifiziert. Dieser Code wird verwendet, um die URLs der verschiedenen Interfaces zu erstellen. In den Tutorials verwenden wir **"ctodev"**.

Die URLs lauten:

- Kubernetes-API (verwendet in kubeconfig):
  - **identifiant**.mk.ms-cloud-temple.com:6443 (im Beispiel also: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443))

- Öffentliche URLs:
  - k10.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**identifiant**.mk.ms-cloud-temple.com

:::info Sicherheits-URLs
Die oben genannten URLs sind nur von bekannten öffentlichen IP-Adressen aus erreichbar, die im Firewall-Setup der Lösung konfiguriert sind. Wenn Sie eine weitere öffentliche IP hinzufügen möchten, müssen Sie eine Support-Anfrage stellen.
:::

- Interne URLs:
  - ceph.internal.**identifiant**.mk.ms-cloud-temple.com
  - argocd.internal.**identifiant**.mk.ms-cloud-temple.com
  - hubble.internal.**identifiant**.mk.ms-cloud-temple.com

:::info Interne URLs
Die oben genannten URLs sind nicht im Internet verfügbar. Sie sind ausschließlich im internen Netzwerk des verwalteten Kubernetes-Clusters erreichbar.
:::

## Ihre Berechtigungen

:::warning Dev/Test
Für die Kubernetes-Cluster der Kategorie **"Dev/Test"** verfügt der Ihnen bereitgestellte Serviceaccount über alle Berechtigungen im gesamten Cluster (ClusterAdmin).
:::

Bei **"Production"-Clustern** sind Ihre Berechtigungen eingeschränkt. Sie verfügen über die Berechtigung **"Erweiterter Viewer"** für die Clusterressourcen. Diese Berechtigung gewährt Ihnen Lesezugriff auf zentrale Ressourcen sowohl auf Cluster-Ebene als auch für die Diagnose:

- **Namespaces**: Ermöglichen es den Nutzern, die verfügbaren Namespaces für Tools und Dashboards aufzulisten.
- **Pods, Deployments, ReplicaSets usw.**: Erlauben es den Nutzern, die auf dem Cluster bereitgestellten Ressourcen aufzulisten.
- **Nodes**: Bieten Einblick in die Kapazität, die Taints und Labels der Knoten, um das Verhalten des Planers besser zu verstehen.
- **StorageClasses, PVs, PVCs, VolumeAttachments und CSIDrivers**: Erlauben es den Nutzern, verfügbare Speicherklassen zu identifizieren und Probleme bei der Bindung zwischen PVC und PV oder Fehler im Zusammenhang mit CSI-Treibern zu diagnostizieren.
- **IngressClasses**: Informieren die Benutzer über verfügbare Ingress-Controller für die Anwendungsweiterleitung.
- **NetworkPolicies, ResourceQuotas, LimitRanges und Events**: Sind entscheidend für die Diagnose von Netzwerkbeschränkungen, Planungsfehlern oder Verstößen gegen Ressourcenquoten.

Der Ihnen zugewiesene Serviceaccount ist zudem **Besitzer eines ersten *Tenant* Capsule**. Sie können Namespaces erstellen, die an Ihren Capsule-Tenant angehängt werden. Externe Konten (OIDC) sind Mitglieder desselben Capsule-Tenants und können somit frei innerhalb der **Namespaces** interagieren, die diesem Tenant zugeordnet sind. (Siehe Tutorial „Berechtigungen mit Capsule verwalten“)

Einige Aktionen sind **nicht erlaubt**:

- Auflistung oder Erstellung von Capsule-Tenants
- Erstellung von CRDs: Wenn Sie eine Anwendung mit CRDs bereitstellen müssen (z. B. ein Helm-Chart eines Operators), müssen Sie sich an den Support wenden, damit diese CRDs importiert werden (durch Extraktion der YAML-Dateien aus dem Helm-Chart). Anschließend können Sie Ihr Helm-Chart mit der Option `--skip-crds` bereitstellen. Siehe: [Helm 3-Dokumentation](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---
 
<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Ihre erste Anwendung bereitstellen</h3>
      </div>
      <div className="card__body">
        <p>
          Folgen Sie einer detaillierten Anleitung, um sich anzumelden, eine „Hello World“-Anwendung bereitzustellen und sie über das Internet zugänglich zu machen.
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
        <h3>Tutorial: Das Netzwerk verstehen</h3>
      </div>
      <div className="card__body">
        <p>
          Erfahren Sie mehr über das Adressierungsschema, die Ingress-Controller und die sichere Bereitstellung Ihrer Dienste.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Netzwerk-Tutorial ansehen &rarr;</a>
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
          Lernen Sie, wie Sie mit Capsule Tenants erstellen und Berechtigungen für Ihre Teams delegieren können.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Capsule entdecken &rarr;</a>
      </div>
    </div>
  </div>
</div>