---
title: Guía de inicio
---

## Prerrequisitos

Antes de comenzar, asegúrese de contar con los siguientes elementos:

- Un **Tenant Cloud Temple** activo
- Una suscripción al **Soporte Estándar** mínimo
- Los permisos necesarios en su organización Cloud Temple

## Acceder al servicio VM Instances

Inicie sesión en la **Consola Cloud Temple** y navegue hasta **Cloud Public > VM Instances** desde el menú principal.

![Panel de control de la Consola Cloud Temple](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

El panel de control le presenta un resumen de los recursos de VM Instances consumidos (almacenamiento, CPU, RAM), así como el número de máquinas virtuales activas.

Haga clic en **Cloud Public** en la barra lateral izquierda para desplegar el submenú y seleccione **VM Instances**.

![Navegación a VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Se mostrará la lista de sus VM Instances:

![Lista de VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

La tabla muestra para cada VM: su nombre, su estado (Encendida / Apagada), la zona de disponibilidad, la familia de instancia, el modelo, así como los recursos asignados (CPU, RAM, Tamaño del disco).

## Desplegar una máquina virtual

Haga clic en el botón **+ Nueva máquina virtual** en la parte superior derecha para abrir el asistente de creación. Este asistente consta de **9 pasos**.

### Paso 1 — Familia de instancia

![Paso 1 : Familia de instancia](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Seleccione la **familia de instancia** adecuada para su carga de trabajo:

| Familia | Descripción | CPU |
|---------|-------------|-----|
| **Development** | Coste optimizado, para entornos de prueba y preproducción | Compartidos |
| **General Purpose** | Equilibrio óptimo vCPU/RAM para cargas estándar | Compartidos |

:::info
La familia **Performance** (vCPU dedicados) está disponible a través de la plantilla personalizada.
:::

### Paso 2 — Zona de disponibilidad

![Paso 2: Zona de disponibilidad](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Seleccione la **zona de disponibilidad (AZ)** en la que se alojará su VM (ej.: `fr1-az01`).

### Paso 3 — Elegir una plantilla

![Paso 3 : Elegir una plantilla](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Explore el catálogo de imágenes disponibles a través de las pestañas **OS** y **Appliances** :

- **Debian 13** (Trixie)
- **Rocky Linux**
- Y otros sistemas disponibles en la Marketplace Cloud Temple

Seleccione el sistema operativo deseado y elija la versión en el menú desplegable asociado.

### Paso 4 — Plantilla

![Étape 4 : Gabarit](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Elija una **plantilla predefinida** o cree una **plantilla Custom** :

- `dev-1` : 1 vCPU
- `dev-2` : 2 vCPU / 8 GB RAM (seleccionado por defecto)
- **Custom** : introduzca libremente el número de vCPU y la cantidad de RAM

### Paso 5 — Nombre y política de copia de seguridad

![Étape 5 : Nom et politique de sauvegarde](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Complete lo siguiente:

| Parámetro | Descripción |
|-----------|-------------|
| **Nombre** | Nombre único de su VM en el tenant |
| **Política de copia de seguridad** | `No Backup` por defecto, o una política de retención si se ha suscrito la opción de copia de seguridad |

Esta etapa también muestra un resumen del sistema operativo seleccionado y del tamaño del disco del sistema.

### Paso 6 — Cloud Init

![Paso 6 : Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Este paso es **opcional**. Permite preconfigurar su VM en el primer arranque mediante dos editores:

- **Cloud Config** : inyección de claves SSH, configuración del nombre de host, instalación de paquetes, etc.
- **Network Config** : configuración de red estática (formato Netplan)

Ejemplo de Cloud Config mínimo:

```yaml
#cloud-config
hostname: mon-serveur-01
ssh_authorized_keys:
  - ssh-rsa AAAA...votre_cle_publique
packages:
  - htop
```

Una casilla de verificación permite **eliminar el disco de configuración de Cloud Init** después del primer arranque (recomendado por seguridad).

### Paso 7 — Discos

![Paso 7: Discos](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Configure el o los discos de su VM:

- **Disco del sistema**: creado automáticamente (`system-disk-1`), tamaño determinado por el SO
- **Discos adicionales**: agregue volúmenes adicionales con el nombre, la capacidad y el tipo de almacenamiento deseados

Hay dos tipos de almacenamiento disponibles:

| Tipo | IOPS |
|------|------|
| **Standard** | ~1 500 IOPS/TB |
| **Enterprise** | ~7 500 IOPS/TB |

### Paso 8 — Adaptadores de red

![Paso 8 : Adaptadores de red](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Asocie su VM a una red desde el menú desplegable. Hay dos tipos de redes disponibles :

- **Backbone privado** (ex : PACKFR) : red privada compartida con aislamiento lógico
- **VPC** : red privada totalmente dedicada con segmentación avanzada

### Paso 9 — Resumen

![Paso 9: Resumen](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Verifique el resumen completo antes de iniciar el aprovisionamiento:

- Información general (familia, AZ, modelo, nombre, copia de seguridad)
- Plantilla (CPU, RAM)
- Configuración de Cloud Init
- Discos virtuales
- Red

Haga clic en **Crear** para iniciar el despliegue. La VM se aprovisiona en unos minutos.

## Gestionar sus máquinas virtuales

Desde la lista, haga clic en una VM para desplegar su panel de detalles. Hay cuatro pestañas disponibles :

### Pestaña Información

![Detalle VM - Información](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

Consulte y modifique los parámetros de su VM:
- Nombre, UUID, zona de disponibilidad
- Familia de instancia, modelo de SO
- CPU, RAM (modificables con la VM apagada)
- Política de copia de seguridad

Los iconos de acción permiten **iniciar**, **detener**, **reiniciar** o **abrir la consola** de la VM.

### Pestaña Discos

![Detalle VM - Discos](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Consulte los discos conectados y agregue volúmenes adicionales mediante el botón **+ Agregar un disco**.

### Pestaña Adaptadores de Red

![Détail VM - Réseau](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

Consulte las interfaces de red de la VM (nombre de la red, dirección MAC, dirección IPv4/IPv6).

### Pestaña Snapshots

![Detalle VM - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Cree y gestione instantáneas de su VM a través del botón **+ Crear una instantánea**.

## Automatización e Infraestructura como código

El servicio de instancias de VM es completamente automatizable:

### A través de la API REST

La API REST de Cloud Temple permite el control programático completo del ciclo de vida de las máquinas virtuales.

Referencia de la API: [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Vía Terraform

El proveedor de Terraform Cloud Temple permite gestionar sus instancias de VM mediante Infraestructura como Código.

```hcl
# Exemple de ressource VM Instances avec Terraform
# Consultez la documentation du provider pour les attributs disponibles
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Consulte la [documentation Terraform](/terraform) para la instalación y configuración del proveedor.

## Recursos útiles

- [Documentación pública de Cloud Temple](https://docs.cloud-temple.com/home)
- [Referencia de la API](https://shiva.cloud-temple.com/api/)
- [Documentación de Terraform](/terraform)
- [Conceptos de zonas de disponibilidad](../../additional_content/concepts_az.md)