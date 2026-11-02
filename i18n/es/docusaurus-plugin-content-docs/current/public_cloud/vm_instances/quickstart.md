---
title: Guía de inicio
---

## Prerrequisitos

Antes de comenzar, asegúrese de contar con los siguientes elementos:

- Un **Tenant Cloud Temple** activo
- Una suscripción al **Soporte Standard** como mínimo para un cliente directo; el **Soporte Basic** está destinado a clientes acompañados por un socio formado (ver la [FAQ](./faq))
- Los permisos necesarios en su organización Cloud Temple

## Acceder al servicio VM Instances

Conéctese a la **Consola Cloud Temple** y navegue hacia **VM Instances** desde el menú principal.

![Panel de control Consola Cloud Temple](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

El panel de control le presenta un resumen de los recursos VM Instances consumidos (almacenamiento, CPU, RAM) así como el número de máquinas virtuales activas.

Seleccione **VM Instances** en la barra lateral izquierda.

![Navegación hacia VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Llega a la lista de sus VM Instances:

![Lista de VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

La tabla muestra para cada VM: su nombre, su estado (Encendida / Apagada), la zona de disponibilidad, la familia de instancia, el modelo, así como los recursos asignados (CPU, RAM, Tamaño de disco).

## Desplegar una máquina virtual

Haga clic en el botón **+ Nueva máquina virtual** en la parte superior derecha para abrir el asistente de creación. Este asistente se desarrolla en **9 pasos**.

### Paso 1 — Familia de instancia

![Paso 1: Familia de instancia](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Elija la **familia de instancia** adecuada para su carga de trabajo:

| Familia | Descripción | CPU |
|---------|-------------|-----|
| **Development** | Coste optimizado, para entornos de prueba y aceptación | Compartidos |
| **General Purpose** | Equilibrio óptimo vCPU/RAM para cargas estándar | Compartidos |

:::info
La familia **Performance** (vCPU dedicados) está disponible mediante la plantilla personalizada.
:::

### Paso 2 — Zona de disponibilidad

![Paso 2: Zona de disponibilidad](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Seleccione la **zona de disponibilidad (AZ)** en la que su VM será alojada (ej: `fr1-az01`).

Esta elección no requiere suscribir la activación AZ facturada de la oferta
IaaS: esta suscripción no es un prerrequisito de VM Instances.

### Paso 3 — Elegir una imagen

![Paso 3: Elegir una imagen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Explore el catálogo de imágenes disponibles a través de las pestañas **OS** y **Appliances**:

- **Debian 13** (Trixie)
- **Rocky Linux**
- Y otros sistemas disponibles en la Marketplace Cloud Temple

Seleccione el sistema operativo deseado y elija la versión en el menú desplegable asociado.

### Paso 4 — Plantilla

![Paso 4: Plantilla](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Elija una **plantilla predefinida** o cree una **plantilla Custom**:

- `dev-1`: 1 vCPU
- `dev-2`: 2 vCPU / 8 Go RAM (seleccionado por defecto)
- **Custom**: introduzca libremente el número de vCPU y la cantidad de RAM

### Paso 5 — Nombre y política de copia de seguridad

![Paso 5: Nombre y política de copia de seguridad](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Rellene:

| Parámetro | Descripción |
|-----------|-------------|
| **Nombre** | Nombre único de su VM en el tenant |
| **Política de copia de seguridad** | `No Backup` por defecto, o una política de retención si la opción de copia de seguridad está suscrita |

Este paso muestra también un resumen del sistema operativo seleccionado y del tamaño del disco de sistema.

### Paso 6 — Cloud Init

![Paso 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Este paso es **opcional**. Permite preconfigurar su VM en el primer arranque mediante dos editores:

- **Cloud Config**: inyección de claves SSH, configuración del hostname, instalación de paquetes, etc.
- **Network Config**: configuración de red estática (formato Netplan)

Ejemplo de Cloud Config mínimo:

```yaml
#cloud-config
hostname: mon-serveur-01
ssh_authorized_keys:
  - ssh-rsa AAAA...votre_cle_publique
packages:
  - htop
```

Una casilla de verificación permite **eliminar el disco de configuración Cloud Init** después del primer arranque (recomendado por seguridad).

### Paso 7 — Discos

![Paso 7: Discos](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Configure el o los discos de su VM:

- **Disco de sistema**: creado automáticamente (`system-disk-1`), tamaño determinado por el SO
- **Discos adicionales**: añada volúmenes suplementarios con el nombre, la capacidad y el tipo de almacenamiento deseados

Dos tipos de almacenamiento están disponibles:

| Tipo | IOPS |
|------|------|
| **Standard** | ~1 500 IOPS/To |
| **Enterprise** | ~7 500 IOPS/To |

### Paso 8 — Adaptadores de red

![Paso 8: Adaptadores de red](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Asocie su VM a una red desde el menú desplegable. Dos tipos de red están disponibles:

- **Backbone privado** (ej: PACKFR): red privada compartida con aislamiento lógico
- **VPC**: red privada totalmente dedicada con segmentación avanzada

### Paso 9 — Resumen

![Paso 9: Resumen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Verifique el resumen completo antes de iniciar el aprovisionamiento:

- Información general (familia, AZ, modelo, nombre, copia de seguridad)
- Plantilla (CPU, RAM)
- Configuración Cloud Init
- Discos virtuales
- Red

Haga clic en **Crear** para iniciar el despliegue. La VM se aprovisiona en pocos minutos.

## Gestionar sus máquinas virtuales

Desde la lista, haga clic en una VM para desplegar su panel de detalle. Cuatro pestañas están disponibles:

### Pestaña Información

![Detalle VM - Información](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

Consulte y modifique los parámetros de su VM:
- Nombre, UUID, zona de disponibilidad
- Familia de instancia, modelo de SO
- CPU, RAM (modificables con VM apagada)
- Política de copia de seguridad

Iconos de acciones permiten **iniciar**, **detener**, **reiniciar** o **abrir la consola** de la VM.

### Pestaña Discos

![Detalle VM - Discos](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Consulte los discos adjuntos y añada volúmenes suplementarios mediante el botón **+ Añadir un disco**.

### Pestaña Adaptadores de red

![Detalle VM - Red](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

Consulte las interfaces de red de la VM (nombre de la red, dirección MAC, dirección IPv4/IPv6).

### Pestaña Snapshots

![Detalle VM - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Cree y gestione snapshots de su VM mediante el botón **+ Crear un snapshot**.

## Automatización e Infrastructure as Code

El servicio VM Instances es totalmente automatizable:

### Mediante la API REST

La API REST Cloud Temple permite el control programático completo del ciclo de vida de las máquinas virtuales.

Referencia API: [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Mediante Terraform

El provider Terraform Cloud Temple permite gestionar sus VM Instances en Infrastructure as Code.

```hcl
# Exemple de ressource VM Instances avec Terraform
# Consultez la documentation du provider pour les attributs disponibles
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Consulte la [documentación Terraform](/terraform) para la instalación y la configuración del provider.

## Recursos útiles

- [Documentación pública Cloud Temple](https://docs.cloud-temple.com/home)
- [Referencia API](https://shiva.cloud-temple.com/api/)
- [Documentación Terraform](/terraform)
- [Conceptos de las zonas de disponibilidad](../../additional_content/concepts_az.md)
