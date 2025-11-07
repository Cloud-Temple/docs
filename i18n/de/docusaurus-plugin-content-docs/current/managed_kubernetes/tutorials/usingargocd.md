---
title: ArgoCD für Ihre GitOps-Deployments nutzen
---

import argocdguestbook from './images/argocdguestbook.png'

## Ziele

In diesem Tutorial erfahren Sie, wie Sie **ArgoCD**, das integrierte GitOps-Tool für kontinuierliche Bereitstellung in Ihrem **Managed Kubernetes**-Cluster, verwenden. Am Ende dieses Leitfadens wissen Sie:
- Was die GitOps-Methodik ist.
- Wie Sie auf die ArgoCD-Oberfläche zugreifen.
- Wie Sie eine Anwendung mithilfe von ArgoCD bereitstellen, um einen Git-Repository mit dem Cluster zu synchronisieren.

## The GitOps Principle with ArgoCD

**GitOps** is a practice that uses a Git repository as the single source of truth to declaratively define the desired state of your infrastructure and applications.

**ArgoCD** is the tool that implements this principle. It continuously monitors a Git repository and compares the state defined there (via Kubernetes manifests) with the actual state of your cluster. If it detects any discrepancies, it automatically applies the necessary changes to align the cluster with what is declared in Git.

The benefits are numerous:
- **Reliable and reproducible deployments.**
- **Full traceability** of all changes through Git history.
- **Fast recovery** after incidents by rolling back to a previous commit.
- **Improved security** by limiting direct access to the cluster.

## Access the ArgoCD Interface

The ArgoCD web interface is exposed on an internal URL of your cluster. To access it, you must be connected to the cluster's internal network (for example, via a bastion host or a VPN).

Use the following URL, replacing `<your-cluster-identifier>`:

`http://argocd.internal.<your-cluster-identifier>.mk.ms-cloud-temple.com`

You can retrieve the internal IP address of the ArgoCD Ingress using the following command:
```bash
kubectl get ingress argocd-server -n argocd
```

:::info
The password for the `admin` account is provided by the Cloud Temple teams upon delivery of your cluster.
:::

## Deploy an application with ArgoCD

We will now deploy a test application using the GitOps approach.

### 1. The Git Repository

ArgoCD requires a Git repository containing the Kubernetes manifests for the application to be deployed. For this tutorial, we will use ArgoCD's example repository: `https://github.com/argoproj/argocd-example-apps`. We will deploy the `guestbook` application located in this repository.

### 2. Prepare the target namespace

To deploy the application in a namespace managed by Capsule, we first need to create the namespace and apply the appropriate tenant label.

Run the following commands:

```bash
```

# Create the namespace
kubectl create namespace guestbook

# Apply the label to associate it with the "default" tenant of Capsule (if needed, as the namespace has likely already been associated with your tenant during its creation)
kubectl label namespace guestbook capsule.clastix.io/tenant=default

### 3. Create the application in ArgoCD

Now that the namespace is ready, we can declare the application to ArgoCD.

1. Create a file named `app-guestbook.yaml` with the following content:

    ```yaml
    apiVersion: argoproj.io/v1alpha1
    kind: Application
    metadata:
      name: guestbook
      namespace: argocd
    spec:
      project: default
      source:
        repoURL: https://github.com/argoproj/argocd-example-apps.git
        targetRevision: HEAD
        path: guestbook
      destination:
        server: https://kubernetes.default.svc
        namespace: guestbook
      syncPolicy:
        automated:
          prune: true
          selfHeal: true
    ```
    This manifest instructs ArgoCD to:
    - Create an application named `guestbook`.
    - Monitor the `argocd-example-apps` repository.
    - Focus on the `guestbook` directory within this repository.
    - Deploy the manifests found in the `guestbook` namespace of the local cluster.
    - Maintain automatic synchronization (`automated`).

2. You have two options to create the application in ArgoCD:

    **Option A: Via `kubectl` (GitOps approach)**

    Apply this manifest directly to your cluster. This is the recommended method as it follows the GitOps principle of declarative management.
    ```bash
    kubectl apply -f app-guestbook.yaml
    ```

    **Option B: Via the ArgoCD web interface**

    You can also create the application directly from the graphical user interface:
    - In the ArgoCD UI, click **"+ NEW APP"**.
    - In the top-right corner of the creation screen, click **"EDIT AS YAML"**.
    - Paste the content of your `app-guestbook.yaml` file into the editor.
    - Click **"CREATE"**.

### 4. Verify Synchronization

As soon as you apply the manifest, ArgoCD detects the new `Application` resource and begins its work.

1.  **Via the web interface:**
    - Log in to the ArgoCD web interface.
    - You should see a new card for the `guestbook` application.
    - After a short time, its status should change to `Healthy` and `Synced`.
    - Clicking on the card allows you to view all Kubernetes resources (Deployment, Service, etc.) that have been created.

<img src={argocdguestbook} />

2.  **Via the command line:**
    - Check that the `guestbook` namespace has been created:
      ```bash
      kubectl get ns guestbook
      ```
    - Verify that the application resources are correctly deployed in this namespace:
      ```bash
      kubectl get all -n guestbook
      NAME                                READY   STATUS    RESTARTS   AGE
      pod/guestbook-ui-85db984648-br6r2   1/1     Running   0          19m

      NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
      service/guestbook-ui   ClusterIP   10.111.160.90   <none>        80/TCP    19m

      NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
      deployment.apps/guestbook-ui   1/1     1            1           19m

      NAME                                      DESIRED   CURRENT   READY   AGE
      replicaset.apps/guestbook-ui-85db984648   1         1         1       19m
      ```

### 5. The GitOps Cycle

Now, if you modify a manifest in the Git repository, ArgoCD will detect the change and automatically update the application in the cluster. That's the magic of GitOps!

## Cleanup

To remove the application and all associated resources, you can simply delete the `Application` resource in ArgoCD.

1.  **Via the web interface:**
    - In the ArgoCD UI, locate the `guestbook` application.
    - Click the three dots (...) to open the menu and select **"Delete"**.
    - Check the **"Foreground"** option to ensure all managed resources (pods, services, etc.) are also deleted in cascade.
2.  **Via `kubectl`:**
    - Delete the `app-guestbook.yaml` file you created:
      ```bash
      kubectl delete -f app-guestbook.yaml
      ```

ArgoCD will now delete all components of the `guestbook` application. Once the deletion synchronization is complete, the `guestbook` namespace will be empty. You can then delete it using the following command:

```bash
kubectl delete namespace guestbook
```

:::info Going further: Secret management
This tutorial uses a public repository without sensitive data. For production applications, it is crucial never to store secrets (passwords, API keys) in plain text in your Git repository. Solutions such as **Sealed Secrets** or **HashiCorp Vault** integrate with ArgoCD to securely manage your secrets. A future tutorial will detail this approach.
:::

## Schlussfolgerung

Sie haben Ihre erste Anwendung mit ArgoCD bereitgestellt, wobei die Prinzipien von GitOps befolgt wurden. Dieser leistungsstarke Ansatz ermöglicht es Ihnen, Ihre Bereitstellungen deklarativ, zuverlässig und sicher zu verwalten. Wir empfehlen Ihnen, GitOps für alle Ihre Anwendungen auf Managed Kubernetes zu übernehmen.