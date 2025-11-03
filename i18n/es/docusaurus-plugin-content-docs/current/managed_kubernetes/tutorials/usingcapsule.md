---
title: Manage permissions with Capsule
---

## Objetivos

Este tutorial lo guiará en el uso de **Capsule**, la herramienta de multi-tenancy integrada en su clúster **Managed Kubernetes**. Al final de esta guía, sabrá:

- Qué es un **Tenant Capsule** y cómo organiza sus permisos.
- Cómo **crear y gestionar Namespaces** dentro de su Tenant.
- Cómo se aplican las **políticas de seguridad y cuotas** a sus proyectos.

## ¿Qué es Capsule?

Capsule es un controlador de Kubernetes que introduce el concepto de **Tenant** para agrupar múltiples Namespaces. En la oferta de Kubernetes gestionado de Cloud Temple, Capsule se utiliza para delegarle la gestión de sus propios Namespaces de forma autónoma, sin necesidad de intervención de un administrador del clúster.

Al entregarle su clúster, los equipos de Cloud Temple han creado un primer Tenant para usted y lo han designado como **propietario (Tenant Owner)**.

*Nota: Por defecto, su primer Tenant se llama `default` y el servicio de cuenta propietario es `defaultapp`.*

Para obtener más información sobre el proyecto, puede consultar el [sitio web oficial de Capsule](https://projectcapsule.dev/).

## Step 1: Know your Tenant name

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

## Paso 3: Verificar la asociación del Namespace

Una vez creado el Namespace, puede comprobar que se ha asignado correctamente a su Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

Observará que Capsule ha añadido una etiqueta a su Namespace, indicando a qué Tenant pertenece. Este mecanismo garantiza la aislamiento entre los diferentes Tenants del clúster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Step 4: Understand policy inheritance

One of the greatest advantages of Capsule is that all security policies, resource quotas (`ResourceQuota`), and resource ranges (`LimitRange`) defined at the Tenant level by administrators are **automatically inherited** by all Namespaces you create.

This ensures your projects comply with consumption limits (CPU, memory, storage) and security rules (such as default network policies or security constraints defined by **Kyverno**) set for your environment, without having to reconfigure them for each Namespace.

## Conclusión

Gracias a Capsule, dispone de una autonomía completa para gestionar los Namespaces de sus equipos, al tiempo que se beneficia de un entorno seguro y preconfigurado por los administradores del clúster. Puede crear, modificar y eliminar Namespaces según sea necesario, sabiendo que los mecanismos de protección necesarios se aplican automáticamente.

Si necesita crear un nuevo Tenant para aislar otro conjunto de proyectos o equipos, puede solicitarlo al soporte de Cloud Temple.