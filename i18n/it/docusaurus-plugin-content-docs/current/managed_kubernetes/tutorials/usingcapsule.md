---
title: Gestire i permessi con Capsule
---

## Obiettivi

Questo tutorial vi guiderà nell'utilizzo di **Capsule**, lo strumento di multi-tenancy integrato nel vostro cluster **Managed Kubernetes**. Al termine di questa guida, saprete:

- Cos'è un **Tenant Capsule** e come organizza i vostri permessi.
- Come **creare e gestire Namespace** all'interno del vostro Tenant.
- Come le **politiche di sicurezza e i limiti (quotas)** vengono applicati ai vostri progetti.

## Cos'è Capsule?

Capsule è un controller Kubernetes che introduce il concetto di **Tenant** per raggruppare più Namespaces. Nell'offerta Kubernetes gestito di Cloud Temple, Capsule viene utilizzato per delegarti la gestione dei tuoi Namespaces in totale autonomia, senza la necessità di interventi da parte di un amministratore cluster.

All'attivazione del tuo cluster, i team Cloud Temple hanno creato un primo Tenant per te e ti hanno designato come **proprietario (Tenant Owner)**.

:::tip
Per impostazione predefinita, il tuo primo Tenant si chiama `default` e il conto di servizio proprietario è `defaultapp`.
:::

Per ulteriori informazioni sul progetto, puoi consultare il [sito ufficiale di Capsule](https://projectcapsule.dev/).

## Step 1: Identify your Tenant name

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

## Step 2: Create a new Namespace

Your main advantage as a `Tenant Owner` is the ability to create Namespaces yourself. You can do this directly with a single `kubectl` command.

Run the following command to create a namespace named `mon-projet-dev`:

```bash
kubectl create namespace mon-projet-dev
```

Capsule will intercept this request. Since you are the owner of a Tenant, it will allow the creation of the Namespace and automatically associate it with your Tenant.

## Step 3: Verify Namespace Association

Once the Namespace has been created, you can verify that it has been correctly assigned to your Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

You will notice that Capsule has added a label to your Namespace, indicating which Tenant it belongs to. This mechanism ensures isolation between the different Tenants in the cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Step 4: Understand policy inheritance

One of the greatest advantages of Capsule is that all security policies, resource quotas (`ResourceQuota`), and resource ranges (`LimitRange`) defined at the Tenant level by administrators are **automatically inherited** by all Namespaces you create.

This ensures your projects comply with consumption limits (CPU, memory, storage) and security rules (such as default network policies or security constraints defined by **Kyverno**) set for your environment, without needing to reconfigure them for each Namespace.

:::info
Specific quotas have been set on your Capsule Tenant to limit the use of persistent storage (Ceph-Block and Ceph-FileSystem) to the total available space in the cluster. If you need to modify these quotas for a specific project, please submit a request to the Cloud Temple support team.
:::

## Conclusione

Grazie a Capsule, hai un'intera autonomia per gestire gli spazi dei nomi (Namespaces) delle tue squadre, beneficiando contemporaneamente di un ambiente sicuro e preconfigurato dagli amministratori del cluster. Puoi creare, modificare e eliminare spazi dei nomi in qualsiasi momento, sapendo che i controlli necessari vengono applicati automaticamente.

Se hai bisogno di creare un nuovo Tenant per isolare un altro insieme di progetti o squadre, puoi richiederlo al supporto Cloud Temple.