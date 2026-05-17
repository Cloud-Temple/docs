---
title: Gestionar los permisos con Capsule
---

## Objetivos

Este tutorial le guiará en el uso de **Capsule**, la herramienta de multiinquilino integrada en su clúster **Managed Kubernetes**. Al finalizar esta guía, sabrá:

- Qué es un **Tenant Capsule** y cómo organiza sus permisos.
- Cómo **crear y gestionar Namespaces** dentro de su Tenant.
- Cómo se aplican las **políticas de seguridad y las cuotas** a sus proyectos.

## ¿Qué es Capsule?

Capsule es un controlador de Kubernetes que introduce el concepto de **Tenant** para agrupar varios Namespaces. En el producto Managed Kubernetes de Cloud Temple, Capsule se utiliza para delegar la gestión de sus propios Namespaces con total autonomía, sin necesidad de la intervención de un administrador del clúster.

Al entregar su clúster, los equipos de Cloud Temple crearon un primer Tenant para usted y lo designaron como **propietario (Tenant Owner)**.

:::tip
De forma predeterminada, su primer Tenant se llama `default` y la cuenta de servicio propietaria es `defaultapp`.
:::

Para obtener más información sobre el proyecto, puede consultar el [sitio web oficial de Capsule](https://projectcapsule.dev/).

## Paso 1: Conocer el nombre de su Tenant

Como `Tenant Owner`, no tiene permisos para listar el recurso `Tenant` directamente. El nombre de su Tenant se le proporciona por los equipos de Cloud Temple durante la entrega del servicio.

Si ha olvidado el nombre de su Tenant, puede recuperarlo inspeccionando las etiquetas de los Namespaces a los que tiene acceso. El siguiente comando lista todos los namespaces que están asociados a un tenant Capsule y muestra sus etiquetas:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Busque la etiqueta `capsule.clastix.io/tenant`. El valor de esta etiqueta es el nombre de su Tenant. Puede utilizar este nombre para filtrar y ver únicamente los Namespaces de su Tenant:

```bash
# Una vez que conoce el nombre de su tenant, por ejemplo "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Paso 2 : Crear un nuevo Namespace

Su principal ventaja como `Tenant Owner` es poder crear Namespaces usted mismo. Puede hacerlo directamente con un solo comando `kubectl`.

Ejecute el siguiente comando para crear un namespace llamado `mon-projet-dev` :

```bash
kubectl create namespace mon-projet-dev
```

Capsule interceptará esta solicitud. Como es propietario de un Tenant, autorizará la creación del Namespace y la asociará automáticamente a su Tenant.

## Paso 3: Verificar la asociación del Namespace

Una vez creado el Namespace, puede verificar que se haya asociado correctamente a su Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

Observará que Capsule ha añadido una etiqueta a su Namespace, indicando a qué Tenant pertenece. Es este mecanismo el que garantiza el aislamiento entre los diferentes Tenants del clúster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Paso 4: Comprender la herencia de políticas

Una de las mayores ventajas de Capsule es que todas las políticas de seguridad, las cuotas de recursos (`ResourceQuota`) y los rangos de recursos (`LimitRange`) definidos a nivel de Tenant por los administradores son **heredados automáticamente** por todos los Namespaces que cree.

Esto garantiza que sus proyectos respeten los límites de consumo (CPU, memoria, almacenamiento) y las reglas de seguridad (como las políticas de red predeterminadas o las restricciones de seguridad definidas por **Kyverno**) establecidas para su entorno, sin que tenga que volver a configurarlos para cada Namespace.

:::info
Se han establecido cuotas específicas en su Tenant de Capsule para limitar el uso del almacenamiento persistente (Ceph-Block y Ceph-FileSystem) al espacio total disponible en el cluster. Si necesita modificar estas cuotas para un proyecto específico, por favor, envíe una solicitud al soporte de Cloud Temple.
:::

## Conclusión

Gracias a Capsule, dispone de autonomía completa para gestionar los Namespaces de sus equipos, al tiempo que cuenta con un marco seguro y preconfigurado por los administradores del cluster. Puede crear, modificar y eliminar Namespaces según sus necesidades, sabiendo que los controles de seguridad necesarios se aplican automáticamente.

Si necesita crear un nuevo Tenant para aislar otro conjunto de proyectos o equipos, puede solicitarlo al soporte de Cloud Temple.