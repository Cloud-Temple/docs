---
title: Managing permissions with Capsule
---

## Objectives

This tutorial will guide you through using **Capsule**, the multi-tenancy tool built into your **Managed Kubernetes** cluster. By the end of this guide, you will know:

- What a **Capsule Tenant** is and how it organizes your permissions.
- How to **create and manage Namespaces** within your Tenant.
- How **security policies and quotas** are applied to your projects.

## What is Capsule?

Capsule is a Kubernetes controller that introduces the concept of a **Tenant** to group multiple Namespaces. In Cloud Temple's Managed Kubernetes product, Capsule is used to delegate the management of your own Namespaces to you with full autonomy, without requiring intervention from a cluster administrator.

Upon delivery of your cluster, the Cloud Temple teams have created an initial Tenant for you and designated you as the **owner (Tenant Owner)**.

> ℹ️By default, your first Tenant is named `default` and the owner service account is `defaultapp`.

To learn more about the project, you can visit the [official Capsule website](https://projectcapsule.dev/).

## Step 1: Know Your Tenant Name

As a `Tenant Owner`, you do not have the permissions to list the `Tenant` resource directly. Your Tenant name is provided by the Cloud Temple teams during service delivery.

If you have forgotten your Tenant name, you can find it by inspecting the labels of the Namespaces you have access to. The following command lists all namespaces attached to a Capsule tenant and displays their labels:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Look for the `capsule.clastix.io/tenant` label. The value of this label is your Tenant name. You can then use this name to filter and view only the Namespaces belonging to your Tenant:

```bash
# Une fois que vous connaissez le nom de votre tenant, par exemple "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Step 2: Create a New Namespace

Your main advantage as a `Tenant Owner` is the ability to create Namespaces yourself. You can do this directly with a single `kubectl` command.

Run the following command to create a namespace named `mon-projet-dev`:

```bash
kubectl create namespace mon-projet-dev
```

Capsule will intercept this request. Since you are a Tenant owner, it will allow the Namespace creation and automatically associate it with your Tenant.

## Step 3: Verify Namespace Association

Once the Namespace is created, you can verify that it has been properly associated with your Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

You will notice that Capsule has added a label to your Namespace, indicating which Tenant it belongs to. This is the mechanism that ensures isolation between the different Tenants in the cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Step 4: Understanding Policy Inheritance

One of the biggest advantages of Capsule is that all security policies, resource quotas (`ResourceQuota`), and resource ranges (`LimitRange`) defined at the Tenant level by administrators are **automatically inherited** by all Namespaces you create.

This ensures that your projects comply with consumption limits (CPU, memory, storage) and security rules (such as default network policies or security constraints defined by **Kyverno**) set for your environment, without you having to reconfigure them for each Namespace.

> ℹ️ Specific quotas have been set on your Capsule Tenant to limit the use of persistent storage (Ceph-Block, Ceph-Block-norepl, and Ceph-FileSystem) to the total available space in the cluster. If you need to modify these quotas for a specific project, please submit a request to Cloud Temple support.

## Conclusion

Thanks to Capsule, you have full autonomy to manage your teams' Namespaces while benefiting from a secure and preconfigured framework set up by the cluster administrators. You can create, modify, and delete Namespaces at will, knowing that the necessary guardrails are automatically applied.

If you need to create a new Tenant to isolate another set of projects or teams, you can submit a request to Cloud Temple support.