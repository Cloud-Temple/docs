---
title: Manage Permissions with Capsule
---

## Ziele

Dieser Leitfaden führt Sie durch die Nutzung von **Capsule**, dem integrierten Multi-Tenancy-Tool in Ihrem **Managed Kubernetes**-Cluster. Am Ende dieses Leitfadens wissen Sie:

- Was ein **Tenant Capsule** ist und wie er Ihre Berechtigungen organisiert.
- Wie Sie **Namespaces innerhalb Ihres Tenants erstellen und verwalten**.
- Wie **Sicherheitsrichtlinien und Quoten** auf Ihre Projekte angewendet werden.

## What is Capsule?

Capsule is a Kubernetes controller that introduces the concept of **Tenant** to group multiple Namespaces. In Cloud Temple's Managed Kubernetes offering, Capsule is used to delegate the management of your own Namespaces to you, enabling full autonomy without requiring intervention from a cluster administrator.

Upon delivery of your cluster, the Cloud Temple teams have created a first Tenant for you and appointed you as its **Tenant Owner**.

*Note: By default, your first Tenant is named `default`, and the owner service account is `defaultapp`.*

For more information about the project, you can visit the [official Capsule website](https://projectcapsule.dev/).

## Step 1: Determine your Tenant name

As a `Tenant Owner`, you do not have the permissions to list the `Tenant` resource directly. The name of your Tenant is provided to you by the Cloud Temple teams during service delivery.

If you have forgotten your Tenant name, you can retrieve it by inspecting the labels of the Namespaces you have access to. The following command lists all namespaces that are attached to a Capsule Tenant and displays their labels:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Look for the label `capsule.clastix.io/tenant`. The value of this label is your Tenant name. You can then use this name to filter and display only the Namespaces belonging to your Tenant:

```bash


# Once you know the name of your tenant, for example "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Step 2: Create a New Namespace

Your main advantage as a `Tenant Owner` is the ability to create namespaces yourself. You can do this directly with a single `kubectl` command.

Run the following command to create a namespace named `mon-projet-dev`:

```bash
kubectl create namespace mon-projet-dev
```

Capsule will intercept this request. Since you are the owner of a Tenant, it will allow the namespace creation and automatically associate it with your Tenant.

## Step 3: Verify Namespace Association

Once the namespace has been created, you can verify that it has been correctly assigned to your Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

You will notice that Capsule has added a label to your namespace, indicating which Tenant it belongs to. This mechanism ensures isolation between the different Tenants in the cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Step 4: Understanding Policy Inheritance

One of the greatest advantages of Capsule is that all security policies, resource quotas (`ResourceQuota`), and resource ranges (`LimitRange`) defined at the Tenant level by administrators are **automatically inherited** by all Namespaces you create.

This ensures your projects adhere to consumption limits (CPU, memory, storage) and security rules (such as default network policies or security constraints defined by **Kyverno**) set for your environment, without needing to reconfigure them for each Namespace.

## Schlussfolgerung

Mit Capsule verfügen Sie über vollständige Autonomie zur Verwaltung der Namespaces Ihrer Teams, während Sie gleichzeitig einen sicheren und vorab konfigurierten Rahmen durch die Cluster-Administratoren nutzen. Sie können Namespaces beliebig erstellen, ändern und löschen, wobei die erforderlichen Sicherheitsmaßnahmen automatisch angewendet werden.

Wenn Sie einen neuen Tenant erstellen müssen, um einen weiteren Satz von Projekten oder Teams zu isolieren, können Sie dies beim Cloud Temple-Support beantragen.