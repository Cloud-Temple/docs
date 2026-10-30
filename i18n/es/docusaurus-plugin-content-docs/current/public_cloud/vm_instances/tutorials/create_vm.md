---
title: Crear su primera instancia de VM
---

Este tutorial le guía paso a paso en la creación de una VM Debian 13 con un disco de datos adicional, una configuración Cloud Init y una conexión a la red Backbone privada.

## Objetivo

Crear una VM Linux (Debian 13) en la zona `fr1-az01`, preconfigurada con una clave SSH, con un disco adicional de 50 Go.

## Prerrequisitos

- Un tenant Cloud Temple activo con acceso al servicio VM Instances
- Una clave SSH pública disponible
- Una red Backbone privada o VPC configurada en su tenant

## Paso 1 — Acceder a la consola y abrir el asistente

Desde la Consola Cloud Temple, navegue a **VM Instances**.

![Lista de VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Haga clic en **+ Nueva máquina virtual** para iniciar el asistente de creación.

## Paso 2 — Seleccionar la familia de instancia

![Paso 1: Familia de instancia](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Para este ejemplo, seleccione **Development** — ideal para entornos de desarrollo y pruebas con un costo controlado.

Haga clic en **Siguiente**.

## Paso 3 — Elegir la zona de disponibilidad

![Paso 2: Zona de disponibilidad](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Seleccione **fr1-az01**. Esta zona está disponible en la región FR1 (Francia).

:::tip
Para maximizar la resiliencia, puede desplegar varias VMs en zonas de disponibilidad diferentes (fr1-az01 y fr1-az02).
:::

Haga clic en **Siguiente**.

## Paso 4 — Elegir una imagen

![Paso 3: Elegir una imagen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

En la pestaña **OS**, seleccione **Debian** y elija la versión **13 (Trixie)** en el menú desplegable.

Haga clic en **Siguiente**.

## Paso 5 — Configurar la plantilla

![Paso 4: Flavor](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Para este tutorial, seleccione la plantilla **dev-2** (2 vCPU / 8 Go RAM).

Si su necesidad es diferente, utilice la opción **Custom** para ingresar libremente el número de vCPU y la cantidad de RAM.

Haga clic en **Siguiente**.

## Paso 6 — Nombrar la VM y configurar la copia de seguridad

![Paso 5: Nombre y política de copias de seguridad](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Ingrese un nombre explícito para su VM, por ejemplo: `web-server-01`.

Para la política de copia de seguridad, deje **No Backup** para este tutorial (podrá activarla posteriormente desde la pestaña Información).

Haga clic en **Siguiente**.

## Paso 7 — Configurar Cloud Init

![Paso 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Cloud Init permite preconfigurar su VM en el primer arranque. Ingrese la siguiente configuración en el editor **Cloud Config**:

```yaml
#cloud-config
hostname: web-server-01
users:
  - name: admin
    groups: sudo
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-rsa AAAA...votre_cle_publique_ssh
package_update: true
packages:
  - curl
  - vim
  - htop
```

Deje el campo **Network Config** vacío si utiliza DHCP. Para una configuración de IP estática, complételo en formato Netplan:

```yaml
version: 2
ethernets:
  ens3:
    dhcp4: false
    addresses:
      - 192.168.1.10/24
    routes:
      - to: default
        via: 192.168.1.1
    nameservers:
      addresses:
        - 8.8.8.8
        - 1.1.1.1
```

Marque la casilla **Eliminar el disco de configuración Cloud Init después del primer arranque** para mejorar la seguridad.

Haga clic en **Siguiente**.

## Paso 8 — Configurar los discos

![Paso 7: Discos](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Observará que **Disco 1** (el disco de sistema `system-disk-1`) fue creado automáticamente con el tamaño correspondiente al SO Debian 13.

Para agregar un disco de datos, configure un segundo disco en el asistente:
- **Nombre**: `data-disk-1`
- **Capacidad**: `50` Go
- **Tipo de almacenamiento**: Standard (~1 500 IOPS/To)

Haga clic en **Siguiente**.

## Paso 9 — Configurar la red

![Paso 8: Adaptadores de red](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Desde el menú desplegable **Red**, seleccione su red. En este ejemplo, la red **PACKFR** (Backbone privado) está disponible.

:::info
Si utiliza un **VPC**, podrá asociar una **IP flotante** (IP pública) a su VM después de su creación.
:::

Haga clic en **Siguiente**.

## Paso 10 — Verificar el resumen y crear

![Paso 9: Resumen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Verifique cuidadosamente el resumen:

| Parámetro | Valor |
|-----------|--------|
| Familia de instancia | Development |
| Zona de disponibilidad | fr1-az01 |
| Modelo | Debian 13 |
| Plantilla | 2 vCPU / 8 Go RAM |
| Política de copia de seguridad | No Backup |
| Discos | system-disk-1 + data-disk-1 (50 Go) |
| Red | PACKFR (Backbone privado) |

Si todo es correcto, haga clic en **Crear**. El despliegue toma unos minutos. Su VM aparecerá luego en la lista con el estado **Encendida**.
