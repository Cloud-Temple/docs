---
title: Managing permissions with Capsule
---

## Objectives

This tutorial will guide you in using **Capsule**, the multi-tenancy tool integrated into your **Managed Kubernetes** cluster. By the end of this guide, you will know:

- What a **Capsule Tenant** is and how it organizes your permissions.
- How to **create and manage Namespaces** within your Tenant.
- How **security policies and quotas** are applied to your projects.

## What is Capsule?

Capsule is a Kubernetes controller that introduces the concept of a **Tenant** to group multiple Namespaces together. In the Cloud Temple Managed Kubernetes offering, Capsule is used to delegate the management of your own Namespaces to you autonomously, without needing intervention from a cluster administrator.

Upon delivery of your cluster, the Cloud Temple teams have created a first Tenant for you and designated you as its **owner (Tenant Owner)**.

:::tip
By default, your first Tenant is called `default` and the owner service account is `defaultapp`.
:::

To learn more about the project, you can visit the [official Capsule website](https://projectcapsule.dev/).

## Step 1: Know the Name of Your Tenant

As a `Tenant Owner`, you do not have the permissions to list the `Tenant` resource directly. The name of your Tenant is communicated to you by the Cloud Temple teams upon delivery of the service.

If you have forgotten the name of your Tenant, you can find it by inspecting the labels of the Namespaces you have access to. The following command lists all namespaces that are attached to a Capsule tenant and displays their labels:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Look for the label `capsule.clastix.io/tenant`. The value of this label is the name of your Tenant. You can then use this name to filter and see only the Namespaces of your Tenant:

```bash
# Once you know the name of your tenant, for example "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Step 2: Create a New Namespace

Your main advantage as a `Tenant Owner` is being able to create Namespaces yourself. You can do it directly with a single `kubectl` command.

Run the following command to create a namespace named `mon-projet-dev`:

```bash
kubectl create namespace mon-projet-dev
```

Capsule will intercept this request. Since you are the owner of a Tenant, it will authorize the creation of the Namespace and automatically associate it with your Tenant.

## Step 3: Verify the Namespace Association

Once the Namespace is created, you can verify that it has been properly attached to your Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

You will notice that Capsule has added a label to your Namespace, indicating which Tenant it belongs to. This is the mechanism that guarantees isolation between the different Tenants of the cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Step 4: Understand Policy Inheritance

One of the greatest advantages of Capsule is that all security policies, resource quotas (`ResourceQuota`) and resource ranges (`LimitRange`) defined at the Tenant level by administrators are **automatically inherited** by all the Namespaces you create.

This ensures that your projects comply with consumption limits (CPU, memory, storage) and security rules (such as default network policies or security constraints defined by **Kyverno**) defined for your environment, without you having to reconfigure them for each Namespace.

:::info
Specific quotas have been set on your Capsule Tenant to limit the use of persistent storage (Ceph-Block and Ceph-FileSystem) to the total space available in the cluster. If you need to modify these quotas for a specific project, please submit a request to Cloud Temple support.
:::

## Conclusion

Thanks to Capsule, you have complete autonomy to manage the Namespaces of your teams while benefiting from a secure and pre-configured framework by the cluster administrators. You can create, modify, and delete Namespaces at will, knowing that the necessary safeguards are automatically applied.

If you need to create a new Tenant to isolate another set of projects or teams, you can request this from Cloud Temple support.
