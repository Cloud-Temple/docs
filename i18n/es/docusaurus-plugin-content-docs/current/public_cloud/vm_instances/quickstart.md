---
title: Guía de inicio
---

## Requisitos previos

Antes de comenzar, asegúrese de disponer de lo siguiente:

- Un **Tenant Cloud Temple** activo
- Una suscripción mínima al **Soporte Estándar**
- Los permisos necesarios en su organización Cloud Temple

## Acceder al servicio VM Instances

Inicie sesión en la **Consola Cloud Temple** y navegue a **Cloud Public > VM Instances** desde el menú principal.

![Panel de la Consola Cloud Temple](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

El panel muestra un resumen de los recursos de VM Instances consumidos (almacenamiento, CPU, RAM) y el número de máquinas virtuales activas.

Haga clic en **Cloud Public** en la barra lateral izquierda para expandir el submenú y seleccione **VM Instances**.

![Navegación hacia VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Accederá a la lista de sus VM Instances:

![Lista de VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

La tabla muestra para cada VM: nombre, estado (Encendida / Apagada), zona de disponibilidad, familia de instancia, modelo y recursos asignados (CPU, RAM, tamaño de disco).

## Desplegar una máquina virtual

Haga clic en el botón **+ Nueva máquina virtual** en la parte superior derecha para abrir el asistente de creación. Este asistente consta de **9 pasos**.

### Paso 1 — Familia de instancia

![Paso 1: Familia de instancia](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Elija la **familia de instancia** adecuada para su carga de trabajo:

| Familia | Descripción | CPU |
|---------|-------------|-----|
| **Development** | Costo optimizado, para entornos de prueba | Compartidos |
| **General Purpose** | Equilibrio óptimo vCPU/RAM para cargas estándar | Compartidos |

:::info
La familia **Performance** (vCPUs dedicadas) está disponible a través del flavor personalizado.
:::

### Paso 2 — Zona de disponibilidad

![Paso 2: Zona de disponibilidad](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Seleccione la **zona de disponibilidad (AZ)** donde se alojará su VM (ej.: `fr1-az01`).

### Paso 3 — Elegir una plantilla

![Paso 3: Elegir una plantilla](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Explore el catálogo de imágenes disponibles en las pestañas **OS** y **Appliances**.

### Paso 4 — Flavor

![Paso 4: Flavor](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Elija un **flavor predefinido** o cree un **flavor personalizado** (vCPU + RAM).

### Paso 5 — Nombre y política de copias de seguridad

![Paso 5: Nombre y política de copias de seguridad](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Introduzca el **Nombre** único y la **Política de copias de seguridad** (`No Backup` por defecto).

### Paso 6 — Cloud Init

![Paso 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Paso opcional. Pre-configure su VM mediante **Cloud Config** (claves SSH, paquetes) y **Network Config** (Netplan).

### Paso 7 — Discos

![Paso 7: Discos](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

El disco del sistema se crea automáticamente. Añada volúmenes adicionales (Standard ~1.500 IOPS/TB o Enterprise ~7.500 IOPS/TB).

### Paso 8 — Adaptadores de red

![Paso 8: Adaptadores de red](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Seleccione la red: **Backbone privado** o **VPC**.

### Paso 9 — Resumen

![Paso 9: Resumen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Verifique el resumen y haga clic en **Crear**.

## Gestionar sus máquinas virtuales

Haga clic en una VM para acceder a sus 4 pestañas:

### Pestaña Información
![Detalle VM - Información](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

### Pestaña Discos
![Detalle VM - Discos](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

### Pestaña Adaptadores de red
![Detalle VM - Red](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

### Pestaña Snapshots
![Detalle VM - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)
