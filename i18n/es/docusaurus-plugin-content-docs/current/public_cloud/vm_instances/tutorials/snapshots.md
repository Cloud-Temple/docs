---
title: Tomar y gestionar snapshots
---

Los snapshots permiten capturar el estado de una VM en un momento determinado. Son útiles antes de una actualización importante, una migración o cualquier operación de riesgo.

## Requisitos previos

- Una VM Instance en su tenant

## Paso 1 — Acceder a los snapshots

Haga clic en su VM y navegue a la pestaña **Snapshots**.

![Detalle VM - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

## Paso 2 — Crear un snapshot

Haga clic en **+ Crear un snapshot** e introduzca un nombre descriptivo, por ejemplo:
- `antes-actualizacion-nginx`
- `prod-2026-04-17-antes-migracion`

Haga clic en **Crear**.

:::tip Buenas prácticas de nomenclatura
- Incluya la **fecha** en el nombre
- Especifique el **motivo** del snapshot
:::

## Paso 3 — Restaurar desde un snapshot

Haga clic en el menú **Acciones** (⋮) junto al snapshot y seleccione **Restaurar**.

:::caution
La restauración **sobrescribe el estado actual** de la VM. Todos los cambios realizados después del snapshot se perderán.
:::

## Paso 4 — Eliminar un snapshot obsoleto

Haga clic en el menú **Acciones** (⋮) y seleccione **Eliminar**.

## Diferencia entre snapshot y copia de seguridad

| | Snapshot | Copia de seguridad |
|--|----------|-------------------|
| **Uso** | Punto de restauración rápido | Protección de datos a largo plazo |
| **Retención** | Manual | Configurable |
| **Coste** | Por GB utilizado | Opción de pago adicional |
