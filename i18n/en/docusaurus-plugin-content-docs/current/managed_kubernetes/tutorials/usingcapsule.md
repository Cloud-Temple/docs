---
title: Managing Permissions with Capsule
---

## Objectives

This tutorial will guide you through using **Capsule**, the built-in multi-tenancy tool for your **Managed Kubernetes** cluster. By the end of this guide, you will know how to:

- Understand what a **Capsule Tenant** is and how it organizes your permissions.
- Create and manage **Namespaces** within your Tenant.
- Apply **security policies and quotas** to your projects.

## What is Capsule?

Capsule is a Kubernetes controller that introduces the concept of **Tenant** to group multiple Namespaces. In Cloud Temple's Managed Kubernetes offering, Capsule is used to delegate the management of your own Namespaces to you, allowing full autonomy without requiring intervention from a cluster administrator.

Upon cluster provisioning, the Cloud Temple teams have created a first Tenant for you and designated you as its **Tenant Owner**.

:::tip
By default, your first Tenant is named `default`, and the owning service account is `defaultapp`.
:::

For more information about the project, you can visit the [official Capsule website](https://projectcapsule.dev/).

## Step 1: Identify Your Tenant Name

As a `Tenant Owner`, you do not have the permissions to list the `Tenant` resource directly. The name of your Tenant is provided to you by the Cloud Temple teams during service delivery.

If you have forgotten your Tenant name, you can retrieve it by inspecting the labels of the Namespaces you have access to. The following command lists all namespaces that are attached to a Capsule Tenant and displays their labels:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Look for the label `capsule.clastix.io/tenant`. The value of this label is your Tenant name. You can then use this name to filter and display only the Namespaces belonging to your Tenant:

```bash
```

# Once you know your tenant's name, for example "my-tenant"
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

Once the Namespace is created, you can verify that it has been successfully attached to your Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

You will notice that Capsule has added a label to your Namespace, indicating which Tenant it belongs to. This mechanism ensures isolation between the different Tenants in the cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=your-tenant
```

## Step 4: Understand Policy Inheritance

One of the greatest advantages of Capsule is that all security policies, resource quotas (`ResourceQuota`), and resource ranges (`LimitRange`) defined at the Tenant level by administrators are **automatically inherited** by every Namespace you create.

This ensures your projects adhere to consumption limits (CPU, memory, storage) and security rules (such as default network policies or security constraints defined by **Kyverno**) set for your environment, without needing to reconfigure them for each Namespace.

:::info
Specific quotas have been set on your Capsule Tenant to limit the use of persistent storage (Ceph-Block and Ceph-FileSystem) to the total available space in the cluster. If you need to modify these quotas for a specific project, please submit a request to Cloud Temple support.
:::

## Conclusion

With Capsule, you have full autonomy to manage your teams' namespaces while benefiting from a secure, preconfigured framework set up by cluster administrators. You can create, modify, and delete namespaces at will, knowing that necessary safeguards are automatically applied.

If you need to create a new Tenant to isolate another set of projects or teams, please contact Cloud Temple support.