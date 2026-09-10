---
title: Administrar los discos de una VM
---

Este tutorial explica cómo agregar un disco de almacenamiento adicional a una VM ya desplegada y prepararlo desde el sistema operativo.

## Prerrequisitos

- Una instancia de VM activa en su tenant

## Paso 1 — Acceder a los discos de la VM

Desde la lista de Instancias de VM, haga clic en la fila de su VM para abrir su panel de detalles.

![Detalle VM - Discos](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Navegue hasta la pestaña **Discos** (icono de disco en el panel lateral izquierdo del detalle). Verá la lista de los discos actualmente adjuntos a la VM, junto con el nombre, el tamaño y el tipo de almacenamiento de cada disco.

## Paso 2 — Abrir el formulario de adición

Haga clic en el botón **+ Agregar un disco** en la parte superior derecha de la tabla de discos.

![Modal ajout de disque](@site/docs/public_cloud/vm_instances/images/vm_instances_ajout_disque_modal.png)

El formulario **Agregar un disco** se abre con los siguientes campos:

| Campo | Descripción |
|-------|-------------|
| **Nombre** | Identificador del disco en la consola |
| **Tipo de almacenamiento** | Estándar (~1 500 IOPS/TB) o Enterprise (~7 500 IOPS/TB) |

## Paso 3 — Configurar y agregar el disco

Ingrese los parámetros :

1. **Nombre** : ingrese un nombre descriptivo, ej. : `data-postgresql`
2. **Tipo de almacenamiento** :
   - Seleccione **Standard** para datos generales (logs, archivos, copias de seguridad)
   - Seleccione **Enterprise** para bases de datos o cargas de trabajo intensivas en E/S

Haga clic en **Agregar**. El disco se adjunta a la VM en tiempo real, sin necesidad de reiniciar.

## Paso 4 — Particionar y montar el disco (en la VM)

Después de agregarlo desde la consola, conéctese a su VM e inicialice el disco:

```bash
# Lister les disques disponibles
lsblk

# Créer une partition (remplacez /dev/vdb par le bon device)
sudo fdisk /dev/vdb
# Dans fdisk, tapez : n → p → 1 → Entrée → Entrée → w

# Formater la partition
sudo mkfs.ext4 /dev/vdb1

# Créer le point de montage
sudo mkdir -p /data

# Monter le disque
sudo mount /dev/vdb1 /data

# Vérifier le montage
df -h /data

# Rendre le montage persistant au redémarrage
echo '/dev/vdb1 /data ext4 defaults 0 2' | sudo tee -a /etc/fstab
```

:::caution
Adapte el nombre del dispositivo (`/dev/vdb`, `/dev/vdc`, etc.) según el resultado del comando `lsblk`. El primer disco adicional suele ser `/dev/vdb`.
:::

## Ir más allá

- Para un disco de alto rendimiento, utilice el tipo **Enterprise** (~7 500 IOPS/To) — ideal para PostgreSQL, MySQL o cualquier carga de trabajo intensiva en E/S.
- Puede adjuntar hasta **16 volúmenes** por VM, con un tamaño máximo de **2 TB** por volumen.
- La facturación se realiza por **GB asignado**, independientemente del uso real.