---
title: Getting Started Guide
---

Welcome to the **Managed Kubernetes** Cloud Temple Getting Started Guide.

The goal of this section is to guide you toward the resources necessary to get started with your cluster.

---

## Before you begin

To interact with your cluster, the following elements are essential:

1.  **The `kubeconfig` file**: This file, provided to you by the Cloud Temple teams upon service delivery, contains all the necessary information to securely connect to your cluster.
2.  **The `kubectl` tool**: This is the standard command-line interface used to manage a Kubernetes cluster.
3.  **The `kubelogin` tool (if OIDC is used)**: If your cluster is configured to authenticate via an OIDC identity provider (such as Entra ID/Azure AD), you must install the `kubelogin` tool to handle the authentication flow. Refer to the [kubelogin installation guide](https://github.com/int128/kubelogin).

Recommended graphical tools: For a more visual experience and simplified resource management, we recommend using **Lens**. It is a powerful Kubernetes tool that allows you to explore your cluster, manage your applications, and visualize their status graphically.
Some of our tutorials will use Lens to illustrate operations. You can download it here: [https://k8slens.dev/](https://k8slens.dev/).

## Access to your Managed Kubernetes Cluster

Your production cluster is identified by a 5-letter code (6 letters in Dev/Test). This code is used to construct the URLs for various interfaces. In the tutorials, we will use **"ctodev"**.

The URLs are:

- Kubernetes API (used in kubeconfig):
  - **identifier**.mk.ms-cloud-temple.com:6443 (thus, in our example: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443))

- Public URLs:
  - k10.external-secured.**identifier**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identifier**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identifier**.mk.ms-cloud-temple.com
  - kubecost.external-secured.**identifier**.mk.ms-cloud-temple.com

*The URLs above are accessible only from known public IPs configured in the solution's firewall. If you wish to add a public IP, you must submit a support request.*

- Internal URLs:
  - ceph.internal.**identifier**.mk.ms-cloud-temple.com
  - argocd.internal.**identifier**.mk.ms-cloud-temple.com
  - hubble.internal.**identifier**.mk.ms-cloud-temple.com

*The URLs above are not exposed to the internet. They are accessible only on the Managed Kubernetes internal network.*

## Ihre Berechtigungen

Für die Kubernetes-Cluster **"Dev/Test"** verfügt der Ihnen bereitgestellte Serviceaccount über alle Berechtigungen im gesamten Cluster (ClusterAdmin).

Bei den **"Production"-Clustern** sind Ihre Berechtigungen eingeschränkt. Sie verfügen über die Berechtigung **"Erweiterter Viewer"** für die Clusterressourcen. Diese Berechtigung gewährt Ihnen Lesezugriff auf zentrale Ressourcen, sowohl auf Cluster-Ebene als auch für die Diagnose:

- **Namespaces**: Ermöglichen es den Nutzern, die verfügbaren Namespaces für Tools und Dashboards aufzulisten.
- **Pods, Deployments, ReplicaSets usw.**: Erlauben es den Nutzern, die auf dem Cluster bereitgestellten Ressourcen aufzulisten.
- **Nodes**: Bieten Einblick in die Kapazität, die Taints und Labels der Knoten, um das Verhalten des Planers besser zu verstehen.
- **StorageClasses, PVs, PVCs, VolumeAttachments und CSIDrivers**: Erlauben es den Nutzern, die verfügbaren Speicherklassen zu identifizieren und Probleme bei der Bindung zwischen PVC und PV oder Fehler im Zusammenhang mit CSI-Treibern zu diagnostizieren.
- **IngressClasses**: Informieren die Benutzer über die verfügbaren Ingress-Controller für die Anwendungsweiterleitung.
- **NetworkPolicies, ResourceQuotas, LimitRanges und Events**: Sind entscheidend für die Diagnose von Netzwerkbeschränkungen, Planungsfehlern oder Verstößen gegen Ressourcenquoten.

Der Ihnen zugewiesene Serviceaccount ist zudem **Besitzer eines ersten *Tenant* Capsule**. Sie können Namespaces erstellen, die an Ihren Capsule-Tenant angehängt werden. Externe Konten (OIDC) sind Mitglieder desselben Capsule-Tenants, was ihnen freien Zugriff auf die **Namespaces** ermöglicht, die diesem Tenant zugeordnet sind. (Siehe Tutorial „Berechtigungen mit Capsule verwalten“)

Einige Aktionen sind **nicht erlaubt**:

- Auflistung oder Erstellung von Capsule-Tenants
- Erstellung von CRDs: Wenn Sie eine Anwendung mit CRDs bereitstellen müssen (z. B. ein Helm-Chart eines Operators), müssen Sie sich an den Support wenden, damit diese CRDs importiert werden (durch Extraktion der YAML-Dateien aus dem Helm-Chart). Anschließend können Sie Ihr Helm-Chart mit der Option `--skip-crds` bereitstellen. Weitere Informationen: [Helm 3-Dokumentation](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

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
          Entdecken Sie das Adressierungsschema, die Ingress-Controller und erfahren Sie, wie Sie Ihre Dienste sicher verfügbar machen.
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
          Lernen Sie, wie Sie mit Capsule Tenants erstellen und Berechtigungen für Ihre Teams delegieren.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Capsule entdecken &rarr;</a>
      </div>
    </div>
  </div>
</div>