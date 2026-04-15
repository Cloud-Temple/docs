---
title: Gestionar permisos con Capsule
---

## Objetivos

Este tutorial le guiará en el uso de **Capsule**, la herramienta de multi-tenancy integrada en su clúster **Managed Kubernetes**. Al final de esta guía, sabrá:

- Qué es un **Tenant de Capsule** y cómo organiza sus permisos.
- Cómo **crear y gestionar Namespaces** dentro de su Tenant.
- Cómo se aplican las **políticas de seguridad y las cuotas** a sus proyectos.

## ¿Qué es Capsule?

Capsule es un controlador de Kubernetes que introduce el concepto de **Tenant** para agrupar múltiples Namespaces. En la oferta de Managed Kubernetes de Cloud Temple, Capsule se utiliza para delegarle la gestión de sus propios Namespaces de forma autónoma, sin necesitar la intervención de un administrador del clúster.

Al entregar su clúster, los equipos de Cloud Temple han creado un primer Tenant para usted y le han designado como su **propietario (Tenant Owner)**.

:::tip
Por defecto, su primer Tenant se llama `default` y la cuenta de servicio propietaria es `defaultapp`.
:::

Para saber más sobre el proyecto, puede consultar el [sitio web oficial de Capsule](https://projectcapsule.dev/).

## Paso 1: Conocer el nombre de su Tenant

Como `Tenant Owner`, no tiene permisos para listar el recurso `Tenant` directamente. El nombre de su Tenant le es comunicado por los equipos de Cloud Temple al entregar el servicio.

Si ha olvidado el nombre de su Tenant, puede encontrarlo inspeccionando las etiquetas de los Namespaces a los que tiene acceso. El siguiente comando lista todos los namespaces que están vinculados a un tenant de Capsule y muestra sus etiquetas:

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Busque la etiqueta `capsule.clastix.io/tenant`. El valor de esta etiqueta es el nombre de su Tenant. Luego puede usar este nombre para filtrar y ver solo los Namespaces de su Tenant:

```bash
# Una vez que conoce el nombre de su tenant, por ejemplo "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Paso 2: Crear un nuevo Namespace

Su principal ventaja como `Tenant Owner` es poder crear Namespaces por su cuenta. Puede hacerlo directamente con un único comando `kubectl`.

Ejecute el siguiente comando para crear un namespace llamado `mon-projet-dev`:

```bash
kubectl create namespace mon-projet-dev
```

Capsule interceptará esta solicitud. Como usted es propietario de un Tenant, autorizará la creación del Namespace y lo asociará automáticamente a su Tenant.

## Paso 3: Verificar la asociación del Namespace

Una vez creado el Namespace, puede verificar que ha sido correctamente vinculado a su Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

Notará que Capsule ha añadido una etiqueta a su Namespace, indicando a qué Tenant pertenece. Este es el mecanismo que garantiza el aislamiento entre los diferentes Tenants del clúster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Paso 4: Comprender la herencia de políticas

Una de las mayores ventajas de Capsule es que todas las políticas de seguridad, cuotas de recursos (`ResourceQuota`) y rangos de recursos (`LimitRange`) definidos a nivel de Tenant por los administradores son **heredados automáticamente** por todos los Namespaces que crea.

Esto garantiza que sus proyectos cumplan con los límites de consumo (CPU, memoria, almacenamiento) y las reglas de seguridad (como las políticas de red predeterminadas o las restricciones de seguridad definidas por **Kyverno**) establecidas para su entorno, sin que usted tenga que reconfigurarlos para cada Namespace.

:::info
Se han establecido cuotas específicas en su Tenant de Capsule para limitar el uso del almacenamiento persistente (Ceph-Block y Ceph-FileSystem) al espacio total disponible en el clúster. Si necesita modificar estas cuotas para un proyecto específico, por favor formule una solicitud al soporte de Cloud Temple.
:::

## Conclusión

Gracias a Capsule, dispone de autonomía completa para gestionar los Namespaces de sus equipos, beneficiándose al mismo tiempo de un marco seguro y preconfigurado por los administradores del clúster. Puede crear, modificar y eliminar Namespaces a voluntad, sabiendo que las salvaguardas necesarias se aplican automáticamente.

Si necesita crear un nuevo Tenant para aislar otro conjunto de proyectos o equipos, puede solicitarlo al soporte de Cloud Temple.
