---
title: Getting Started Guide
---

Welcome to the **Managed Kubernetes** Cloud Temple Getting Started Guide.

The goal of this section is to guide you toward the resources necessary to get started with your cluster.

---

## Before You Begin

To interact with your cluster, the following elements are essential:

1.  **The `kubeconfig` file**: This file, provided to you by the Cloud Temple teams upon service delivery, contains all the necessary information to securely connect to your cluster.
2.  **The `kubectl` tool**: This is the standard command-line interface used to manage a Kubernetes cluster.
3.  **The `kubelogin` tool (if OIDC is used)**: If your cluster is configured to authenticate via an OIDC identity provider (such as Entra ID/Azure AD), you must install the `kubelogin` tool to handle the authentication flow. Refer to the [kubelogin installation guide](https://github.com/int128/kubelogin).

Recommended graphical tools: For a more visual experience and simplified resource management, we recommend using **Lens**. It is a powerful Kubernetes tool that allows you to explore your cluster, manage your applications, and visualize their status graphically.
Some of our tutorials will use Lens to illustrate operations. You can download it here: [https://k8slens.dev/](https://k8slens.dev/).

## Access Your Managed Kubernetes Cluster

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

*The URLs above are not exposed to the internet. They are accessible only from within the Managed Kubernetes network.*

## Your Permissions

For the managed **"Dev/Test"** Kubernetes clusters, the service account provided to you has full permissions across the entire cluster (ClusterAdmin).

On **"Production"** clusters, your permissions are restricted. You have an **"Extended Viewer"** role on cluster resources. This role grants read-only access to key resources, both at the cluster level and for diagnostic purposes:

- **Namespaces**: Allow tenants to list namespaces for tools and dashboards.
- **Pods, Deployments, ReplicaSets, etc.**: Allow tenants to list deployed resources on the cluster.
- **Nodes**: Provide visibility into node capacity, taints, and labels, helping understand scheduler behavior.
- **StorageClasses, PVs, PVCs, VolumeAttachments, and CSIDrivers**: Enable tenants to identify available storage classes and troubleshoot issues with PVC-PV binding or CSI driver errors.
- **IngressClasses**: Inform users about available ingress controllers for application routing.
- **NetworkPolicies, ResourceQuotas, LimitRanges, and Events**: Essential for diagnosing network restrictions, scheduling failures, or resource quota violations.

The service account assigned to you has also been made the **owner of a first Capsule tenant**.  
You can create Namespaces, which will be attached to your Capsule tenant.  
External accounts (OIDC) are members of the same Capsule tenant, allowing them to freely interact within the **Namespaces** associated with that tenant. (See the tutorial "Managing Permissions with Capsule")

Certain actions are **not allowed**:

- Listing or creating Capsule tenants
- Creating CRDs: If you need to deploy an application that uses CRDs (e.g., a Helm chart for an operator), you must contact support so these CRDs can be imported (via extraction of YAML files from the Helm chart). You can then deploy your Helm chart using the `--skip-crds` option. See: [Helm 3 Documentation](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---

<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Deploy Your First Application</h3>
      </div>
      <div className="card__body">
        <p>
          Follow a detailed guide to connect, deploy a "Hello World" application, and expose it to the internet.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Start the tutorial &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Understanding the Network</h3>
      </div>
      <div className="card__body">
        <p>
          Explore the addressing scheme, Ingress Controllers, and how to securely expose your services.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">View the networking tutorial &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutorial: Managing Permissions with Capsule</h3>
      </div>
      <div className="card__body">
        <p>
          Learn how to use Capsule to create tenants and delegate permissions to your teams.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Discover Capsule &rarr;</a>
      </div>
    </div>
  </div>
</div>