---
title: Getting Started Guide
---
Welcome to the **Managed Kubernetes** Cloud Temple getting started guide.

The purpose of this section is to direct you to the resources needed to get started with your cluster.

---

## Before You Begin

To interact with your cluster, several elements are essential:

1. **The `kubeconfig` file**: This file, provided to you by the Cloud Temple teams upon service delivery, contains all the information needed to connect securely.
2. **The `kubectl` tool**: This is the standard command-line interface for managing a Kubernetes cluster.
3. **The `kubelogin` tool** (si OIDC est utilisé) : If your cluster is configured to authenticate via an OIDC identity provider (comme Entra ID/Azure AD), you must install the `kubelogin` tool to handle the authentication flow. Follow the [guide d&#39;installation de kubelogin](https://github.com/int128/kubelogin).

> ℹ️[Outils graphiques recommandés:]
> For a more visual experience and simplified resource management, we recommend using **Lens**. It is a powerful Kubernetes tool that allows you to explore your cluster, manage your applications, and visualize their status graphically.
> Some of our tutorials will use Lens to illustrate the procedures. You can download it here: [https://k8slens.dev/](https://k8slens.dev/).

---

## Accessing Your Managed Kubernetes Cluster

Your production cluster is identified by a 5-letter code (6 letters in Dev/Test). This code is used to construct the URLs for the various interfaces. In the tutorials, we will use **"ctodev"**.

The URLs are:

- Kubernetes API (used in kubeconfig):

  - **identifier**.mk.ms-cloud-temple.com:6443  (so in our example: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )
- Public URLs:

  - k10.external-secured.**identifier**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identifier**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identifier**.mk.ms-cloud-temple.com
  - opencost.external-secured.**identifier**.mk.ms-cloud-temple.com
  - opencost-mcp.external-secured.**identifier**.mk.ms-cloud-temple.com

>ℹ️[Secure URLs]
>The URLs above are only accessible from known public IPs configured in the solution's firewall. If you wish to add a public IP, you must submit a support request.
>

>ℹ️[Internal URLs]
>The URLs below are not exposed to the Internet. They are only accessible on the Managed Kubernetes internal network.
>  - ceph.internal.**identifier**.mk.ms-cloud-temple.com
>  - argocd.internal.**identifier**.mk.ms-cloud-temple.com
>  - hubble.internal.**identifier**.mk.ms-cloud-temple.com

---

## Your Permissions

>⚠[Dev/Test et Kubernetes Core]
>For **"Dev/Test"** Managed Kubernetes clusters and Core clusters, the service account provided to you has all permissions across the entire cluster (ClusterAdmin)

On **"Production"** clusters, your permissions are limited. You have an **"Extended Viewer"** right on cluster resources. This right grants read-only access to key resources, both at the cluster level and for diagnostics:

- Namespaces: allow tenants to list namespaces for tools and dashboards.
- Pods, deployments, replicaset...: allow tenants to list resources deployed on the cluster.
- Nodes: provide visibility into node capacity, taints, and labels to understand scheduler behavior.
- StorageClasses, PVs, PVCs, VolumeAttachments, and CSIDrivers: enable tenants to identify available storage classes and troubleshoot PVC-to-PV binding issues or CSI driver-related errors.
- IngressClasses: inform users about available ingress controllers for application routing.
- NetworkPolicies, ResourceQuotas, LimitRanges, and Events: essential for diagnosing network restrictions, scheduling failures, or resource quota violations.

The service account entrusted to you has also been made the **owner of a first Capsule *tenant***.
You can create Namespaces, which will be attached to your Capsule tenant.
External accounts (OIDC) are members of this same Capsule tenant, allowing them to interact freely within the **namespaces** associated with the tenant. (Voir le tutoriel "Gérer les permissions avec Capsule")

Some actions are not permitted:

- list / create Capsule tenants
- create CRDs: If you need to deploy an application with CRDs (helm chart d'un opérateur par exemple), you will need to interact with support to have these CRDs imported (via extraction des yaml depuis le chart helm). You can then deploy your Helm chart with the --skip-crds option. See: [Documentation Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Deploy your first application</h3>
      </div>
      <div className="card__body">
        <p>
          Follow a detailed guide to connect, deploy a "Hello World" application, and expose it to the Internet.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Start the tutorial →</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Understand the network</h3>
      </div>
      <div className="card__body">
        <p>
          Discover the addressing plan, Ingress Controllers, and how to securely expose your services.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">View the networking tutorial →</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Manage permissions with Capsule</h3>
      </div>
      <div className="card__body">
        <p>
          Learn how to use Capsule to create tenants and delegate permissions to your teams.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Discover Capsule →</a>
      </div>
    </div>
  </div>
</div>