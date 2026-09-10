---
title: Crear su primera VM Instance
---

Este tutorial le guía paso a paso en la creación de una VM Debian 13 con un disco de datos adicional, una configuración Cloud Init y una conexión a la red Backbone privada.

## Objetivo

Crear una VM Linux (Debian 13) en la zona `fr1-az01`, preconfigurada con una clave SSH y un disco adicional de 50 GB.

## Requisitos previos

- Un tenant Cloud Temple activo con acceso al servicio VM Instances
- Una clave SSH pública disponible
- Una red Backbone privada o VPC configurada en su tenant

## Paso 1 — Abrir el asistente de creación

Desde la Consola Cloud Temple, navegue a **Cloud Public > VM Instances**.

![Lista de VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Haga clic en **+ Nueva máquina virtual** para iniciar el asistente.

## Paso 2 — Seleccionar la familia de instancia

![Paso 1: Familia de instancia](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Seleccione **Development** para este ejemplo. Haga clic en **Siguiente**.

## Paso 3 — Elegir la zona de disponibilidad

![Paso 2: Zona de disponibilidad](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Seleccione **fr1-az01**. Haga clic en **Siguiente**.

## Paso 4 — Elegir la plantilla

![Paso 3: Elegir una plantilla](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

En la pestaña **OS**, seleccione **Debian** y elija la versión **13 (Trixie)**. Haga clic en **Siguiente**.

## Paso 5 — Configurar el flavor

![Paso 4: Flavor](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Seleccione **dev-2** (2 vCPU / 8 GB RAM). Haga clic en **Siguiente**.

## Paso 6 — Nombrar la VM

![Paso 5: Nombre y política de copias de seguridad](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Introduzca, por ejemplo, `web-server-01`. Haga clic en **Siguiente**.

## Paso 7 — Configurar Cloud Init

![Paso 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

```yaml
#cloud-config
hostname: web-server-01
users:
  - name: admin
    groups: sudo
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-rsa AAAA...su_clave_ssh_publica
package_update: true
packages:
  - curl
  - vim
  - htop
```

## Paso 8 — Configurar los discos

![Paso 7: Discos](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Añada un disco de datos: nombre `data-disk-1`, capacidad `50` GB, tipo Standard.

## Paso 9 — Configurar la red

![Paso 8: Adaptadores de red](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Seleccione su red (ej.: **PACKFR**). Haga clic en **Siguiente**.

## Paso 10 — Revisar el resumen y crear

![Paso 9: Resumen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Verifique todos los parámetros y haga clic en **Crear**. Su VM aparecerá en la lista en unos minutos.
