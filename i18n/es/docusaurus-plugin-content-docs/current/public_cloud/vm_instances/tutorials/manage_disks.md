---
title: Gestionar los discos de una VM
---

Este tutorial explica cómo añadir un disco de almacenamiento adicional a una VM ya desplegada y prepararlo desde el sistema operativo.

## Requisitos previos

- Una VM Instance activa en su tenant

## Paso 1 — Acceder a los discos de la VM

Desde la lista de VM Instances, haga clic en su VM para abrir el panel de detalles.

![Detalle VM - Discos](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Navegue a la pestaña **Discos**.

## Paso 2 — Abrir el formulario de adición

Haga clic en **+ Añadir un disco**.

![Modal añadir disco](@site/docs/public_cloud/vm_instances/images/vm_instances_ajout_disque_modal.png)

| Campo | Descripción |
|-------|-------------|
| **Nombre** | Identificador del disco en la consola |
| **Tipo de almacenamiento** | Standard (~1.500 IOPS/TB) o Enterprise (~7.500 IOPS/TB) |

## Paso 3 — Configurar y añadir el disco

1. **Nombre**: introduzca un nombre descriptivo, ej.: `data-postgresql`
2. **Tipo de almacenamiento**: Standard para datos generales, Enterprise para cargas I/O intensivas

Haga clic en **Añadir**. El disco se adjunta en tiempo real, sin necesidad de reiniciar.

## Paso 4 — Particionar y montar el disco (en la VM)

```bash
lsblk
sudo fdisk /dev/vdb
sudo mkfs.ext4 /dev/vdb1
sudo mkdir -p /data
sudo mount /dev/vdb1 /data
echo '/dev/vdb1 /data ext4 defaults 0 2' | sudo tee -a /etc/fstab
```

:::caution
Adapte el nombre del dispositivo (`/dev/vdb`, `/dev/vdc`, etc.) según el resultado del comando `lsblk`.
:::
