---
title: Manage permissions with Capsule
---

## Objectives

This tutorial will guide you through using **Capsule**, the multi-tenancy tool integrated into your **Managed Kubernetes** cluster. By the end of this guide, you will know how to:

- What a **Capsule Tenant** is and how it organizes your permissions.
- How to **create and manage Namespaces** within your Tenant.
- How **security policies and quotas** are applied to your projects.

## What is Capsule?

Capsule is a Kubernetes controller that introduces the concept of a **Tenant** to group multiple Namespaces. In Cloud Temple's Managed Kubernetes product, Capsule is used to delegate management of your own Namespaces to you, enabling full autonomy without requiring intervention from a cluster administrator.

Upon cluster delivery, the Cloud Temple teams created a first Tenant for you and designated you as the **owner (Tenant Owner)**.

:::tip
By default, your first Tenant is named `default` and the owner service account is `defaultapp`.
:::

To learn more about the project, you can visit the [official Capsule website](https://projectcapsule.dev/).

## Step 1: Know your Tenant name

As a `Tenant Owner`, you do not have permissions to list the `Tenant` resource directly. Your Tenant name is provided to you by the Cloud Temple teams during service delivery.

If you have forgotten your Tenant name, you can find it by inspecting the labels of the Namespaces you have access to. The following command lists all namespaces attached to a Capsule tenant and displays their labels:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Look for the `capsule.clastix.io/tenant` label. The value of this label is your Tenant name. You can then use this name to filter and view only the Namespaces of your Tenant:

```bash
# Once you know your tenant name, for example "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Step 2: Create a New Namespace

Your main advantage as a `Tenant Owner` is the ability to create Namespaces yourself. You can do this directly with a single `kubectl` command.

Run the following command to create a namespace named `mon-projet-dev`:

```bash
kubectl create namespace mon-projet-dev
```

Capsule will intercept this request. Since you are the owner of a Tenant, it will authorize the creation of the Namespace and automatically associate it with your Tenant.

## Step 3: Verify Namespace Association

Once the Namespace is created, you can verify that it has been properly associated with your Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

You will notice that Capsule has added a label to your Namespace, indicating which Tenant it belongs to. This mechanism ensures isolation between the different Tenants in the cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Step 4: Understanding policy inheritance

One of the biggest advantages of Capsule is that all security policies, resource quotas (`ResourceQuota`) and resource ranges (`LimitRange`) defined at the Tenant level by administrators are **automatically inherited** by all Namespaces you create.

This ensures that your projects comply with consumption limits (CPU, memory, storage) and security rules (such as default network policies or security constraints defined by **Kyverno**) set for your environment, without having to reconfigure them for each Namespace.

:::info
Specific quotas have been set on your Capsule Tenant to limit the use of persistent storage (Ceph-Block and Ceph-FileSystem) to the total available space in the cluster. If you need to modify these quotas for a specific project, please submit a request to Cloud Temple support.
:::

## Conclusion

With Capsule, you have full autonomy to manage your teams' Namespaces while benefiting from a secure, preconfigured framework established by cluster administrators. You can create, modify, and delete Namespaces at will, knowing that the necessary guardrails are automatically enforced.

If you need to create a new Tenant to isolate another set of projects or teams, you can submit a request to Cloud Temple support.