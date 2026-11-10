---
title: Tutoriales de Terraform Cloud Temple
---

# Tutoriales de Terraform Cloud Temple

Esta página reúne tutoriales prácticos para utilizar el proveedor Terraform Cloud Temple con diferentes servicios.

## Índice

- [IaaS VMware](#iaas-vmware)
- [IaaS Open Source]
- [Almacenamiento objeto](#almacenamiento-objeto)

## IaaS VMware

### Crear una VM vacía

**Objetivo**: Crear una máquina virtual VMware básica sin sistema operativo.

**Requisitos previos**:

- Acceso a un datacenter Cloud Temple
- Credenciales API configuradas
- Permisos necesarios
  - `compute_iaas_vmware_read`
  - `compute_iaas_vmware_management`
  - `compute_iaas_vmware_virtual_machine_power`
  - `compute_iaas_vmware_infrastructure_read`
  - `backup_iaas_vmware_read`
  - `backup_iaas_vmware_write`
  - `activity_read`
  - `tag_read`
  - `tag_write`

**Código**:

```hcl
# Recuperación de los recursos necesarios
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"
}

# Creación de una VM vacía
resource "cloudtemple_compute_virtual_machine" "empty_vm" {
  name = "vm-empty-01"
  
  # Configuración de hardware
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Hot-add habilitado
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Ubicación
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Sistema operativo invitado
  guest_operating_system_moref = "ubuntu64Guest"
  
  tags = {
    environment = "demo"
    created_by  = "terraform"
  }
}
```

**Explicaciones** :

- `guest_operating_system_moref` : Define el tipo de SO para los controladores de VMware Tools
- La VM se crea sin disco ni red (que se deben añadir por separado)
- Las opciones de hot-add permiten añadir CPU/RAM en caliente

### Crear una VM desde la Marketplace

**Objetivo**: Desplegar una VM a partir de una imagen de la Marketplace Cloud Temple.

**Código**:

```hcl
# Recuperación de un elemento de la Marketplace
data "cloudtemple_marketplace_item" "ubuntu_2404" {
  name = "Ubuntu 24.04 LTS"
}

data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"
}

data "cloudtemple_compute_datastore" "ds" {
  name = "ds001-data01"
}

data "cloudtemple_backup_sla_policy" "daily" {
  name = "sla001-daily-par7s"
}

# Despliegue desde la Marketplace
resource "cloudtemple_compute_virtual_machine" "marketplace_vm" {
  name = "ubuntu-marketplace-01"
  
  # Fuente Marketplace
  marketplace_item_id = data.cloudtemple_marketplace_item.ubuntu_2404.id
  
  # Configuración
  memory               = 8 * 1024 * 1024 * 1024  # 8 GB
  cpu                  = 4
  num_cores_per_socket = 2
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  power_state = "on"
  
  backup_sla_policies = [
    data.cloudtemple_backup_sla_policy.daily.id
  ]
  
  tags = {
    source = "marketplace"
  }
}
```

**Explicaciones**:

- `marketplace_item_id`: Hace referencia a una imagen lista para usar
- `datastore_id`: Datastore específico requerido para el despliegue Marketplace
- La imagen ya incluye un sistema operativo configurado

### Crear una VM desde Content Library

**Objetivo**: Desplegar una VM a partir de una plantilla de la Content Library de VMware.

**Código**:

```hcl
# Recuperación de la Biblioteca de Contenidos
data "cloudtemple_compute_content_library" "public" {
  name = "PUBLIC"
}

# Recuperación de un elemento específico
data "cloudtemple_compute_content_library_item" "centos" {
  content_library_id = data.cloudtemple_compute_content_library.public.id
  name               = "centos-8-template"
}

data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"
}

data "cloudtemple_compute_datastore_cluster" "sdrs" {
  name = "sdrs001-LIVE"
}

data "cloudtemple_compute_datastore" "ds" {
  name = "ds001-data01"
}

data "cloudtemple_compute_network" "vlan" {
  name = "VLAN_201"
}

# Despliegue desde Content Library
resource "cloudtemple_compute_virtual_machine" "content_library_vm" {
  name = "centos-from-cl-01"
  
  # Fuente Content Library
  content_library_id      = data.cloudtemple_compute_content_library.public.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.centos.id
  
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.sdrs.id
  datastore_id         = data.cloudtemple_compute_datastore.ds.id
  
  # Configuración del disco del SO
  os_disk {
    capacity = 50 * 1024 * 1024 * 1024  # 50 GB
  }
  
  # Configuración del adaptador de red del SO
  os_network_adapter {
    network_id = data.cloudtemple_compute_network.vlan.id
  }
  
  tags = {
    source = "content-library"
  }
}
```

**Explicaciones**:

- Los bloques `os_disk` y `os_network_adapter` configuran los recursos del template
- Estos bloques solo pueden utilizarse durante la creación (ver la sección dedicada)

### Configurar Cloud-Init VMware

**Objetivo** : Automatizar la configuración de una VM en el primer arranque con Cloud-Init.

**Requisitos previos** : Utilizar una imagen compatible con Cloud-Init (por ejemplo: Ubuntu Cloud Image en formato OVF).

**Archivos Cloud-Init** :

Cree `cloud-init/user-data.yml` :

```yaml
#cloud-config
hostname: my-server
fqdn: my-server.example.com

users:
  - name: admin
    sudo: ALL=(ALL) NOPASSWD:ALL
    groups: sudo
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-rsa AAAAB3NzaC1yc2E... your-key-here

packages:
  - nginx
  - git
  - curl

runcmd:
  - systemctl enable nginx
  - systemctl start nginx
```

Cree `cloud-init/network-config.yml` :

```yaml
version: 2
ethernets:
  eth0:
    dhcp4: false
    addresses:
      - 192.168.1.10/24
    gateway4: 192.168.1.1
    nameservers:
      addresses:
        - 8.8.8.8
        - 8.8.4.4
```

**Código Terraform** :

```hcl
data "cloudtemple_compute_content_library" "local" {
  name = "local-content-library"
}

data "cloudtemple_compute_content_library_item" "ubuntu_cloudimg" {
  content_library_id = data.cloudtemple_compute_content_library.local.id
  name               = "ubuntu-jammy-22.04-cloudimg"
}

resource "cloudtemple_compute_virtual_machine" "cloudinit_vm" {
  name = "ubuntu-cloudinit-01"
  
  memory               = 8 * 1024 * 1024 * 1024
  cpu                  = 4
  num_cores_per_socket = 2
  
  datacenter_id   = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id    = data.cloudtemple_compute_datastore.ds.id
  
  content_library_id      = data.cloudtemple_compute_content_library.local.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.ubuntu_cloudimg.id
  
  power_state = "on"
  
  # Configuración Cloud-Init (fuente OVF de VMware)
  cloud_init = {
    user-data      = filebase64("./cloud-init/user-data.yml")
    network-config = filebase64("./cloud-init/network-config.yml")
    hostname       = "my-server"
    password       = "RANDOM"
  }
}
```

**Claves de Cloud-Init compatibles (VMware)** :

- `user-data` : Configuración principal (codificada en base64)
- `network-config` : Configuración de red (codificada en base64)
- `public-keys` : Claves SSH públicas
- `hostname` : Nombre de host
- `password` : Contraseña (o "RANDOM")
- `instance-id` : Identificador único
- `seedfrom` : URL de origen de la configuración

:::warning[Limitación]
Cloud-Init solo se ejecuta en el primer arranque de la VM.
:::

### Crear un disco virtual y adjuntarlo a una VM

**Objetivo**: Añadir almacenamiento adicional a una máquina virtual existente.

**Código**:

```hcl
# Referencia a una VM existente
data "cloudtemple_compute_virtual_machine" "existing_vm" {
  name = "my-existing-vm"
}

# Creación de un disco virtual
resource "cloudtemple_compute_virtual_disk" "data_disk" {
  name = "data-disk-01"
  
  # Adjuntar a la VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.existing_vm.id
  
  # Tamaño del disco
  capacity = 100 * 1024 * 1024 * 1024  # 100 GB
  
  # Modo del disco
  disk_mode = "persistent"
  
  # Tipo de aprovisionamiento
  provisioning_type = "dynamic"
}
```

**Modos de disco disponibles**:

- `persistent`: Los cambios se guardan de inmediato y de forma definitiva en el disco virtual.
- `independent_nonpersistent`: Los cambios realizados en el disco virtual se guardan en un registro de recuperación y se eliminan al apagar la máquina.
- `independent_persistent`: Los cambios se guardan de inmediato y de forma definitiva en el disco virtual. No se ve afectado por las instantáneas (snapshots).

**Tipos de aprovisionamiento**:

- `dynamic`: Ahorra espacio de almacenamiento al asignar espacio de forma dinámica según las necesidades. La creación es rápida.
- `staticImmediate`: Asigna todo el espacio del disco durante la creación, pero los bloques se inicializan a cero en la primera escritura.
- `staticDiffered`: Asigna y inicializa a cero todo el espacio del disco durante la creación.

### Crear una interfaz de red y conectarla a una VM

**Objetivo**: Agregar una tarjeta de red a una máquina virtual.

**Código**:

```hcl
# Recuperación de la red
data "cloudtemple_compute_network" "production_vlan" {
  name = "PROD-VLAN-100"
}

# Referencia a la VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Creación de un adaptador de red
resource "cloudtemple_compute_network_adapter" "eth1" {
  name = "Network adapter 2"
  
  # VM de destino
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Red
  network_id = data.cloudtemple_compute_network.production_vlan.id
  
  # Tipo de adaptador
  type = "VMXNET3"
  
  # Conexión automática al arrancar
  connect_on_power_on = true
  
  # Dirección MAC (opcional, se genera automáticamente si se omite)
  # mac_address = "00:50:56:xx:xx:xx"
}
```

:::info[Tipos de adaptadores de red compatibles]
  Los tipos de adaptadores compatibles que pueden utilizarse dependen del SO utilizado en la máquina virtual, así como de la versión de VMware.
:::

---

### Crear un controlador virtual y adjuntarlo a una VM

**Objetivo**: Agregar un controlador de disco a una máquina virtual.

**Código**:

```hcl
# Referencia a la VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Creación de un controlador SCSI
resource "cloudtemple_compute_virtual_controller" "scsi_controller" {
  name = "SCSI controller 1"
  
  # VM de destino
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Tipo de controlador
  type = "SCSI"
}
```

**Tipos de controladores**:

- `USB2`
- `USB3`
- `SCSI`
- `CD/DVD`
- `NVME`
- `PCI`

## Infraestructura como Servicio (IaaS) de Código Abierto

### Crear una VM desde una plantilla

**Objetivo**: Desplegar una máquina virtual a partir de una plantilla del catálogo.

**Requisitos previos**:

- Acceso a la infraestructura OpenSource Cloud Temple
- Permisos necesarios:
  - `compute_iaas_opensource_read`
  - `compute_iaas_opensource_management`
  - `compute_iaas_opensource_virtual_machine_power`
  - `compute_iaas_opensource_infrastructure_read`
  - `backup_iaas_opensource_read`
  - `backup_iaas_opensource_write`
  - `activity_read`
  - `tag_read`
  - `tag_write`

**Código**:

```hcl
# Recuperación de una plantilla
data "cloudtemple_compute_iaas_opensource_template" "almalinux" {
  name = "AlmaLinux 8"
}

# Recuperación del anfitrión
data "cloudtemple_compute_iaas_opensource_host" "host" {
  name = "host-01"
}

# Recuperación del repositorio de almacenamiento
data "cloudtemple_compute_iaas_opensource_storage_repository" "sr" {
  name = "sr001-local-storage"
}

# Recuperación de la red
data "cloudtemple_compute_iaas_opensource_network" "network" {
  name = "VLAN-100"
}

# Recuperación de la política de backup
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

# Creación de la VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "openstack_vm" {
  name        = "almalinux-vm-01"
  power_state = "on"
  
  # Fuente
  template_id = data.cloudtemple_compute_iaas_opensource_template.almalinux.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  # Configuración hardware
  memory               = 8 * 1024 * 1024 * 1024  # 8 GB
  cpu                  = 4
  num_cores_per_socket = 2
  
  # Opciones
  boot_firmware     = "uefi"
  secure_boot       = false
  auto_power_on     = true
  high_availability = "best-effort"
  
  # Disco del sistema operativo (debe coincidir con la plantilla)
  os_disk {
name                  = "os-disk"
connected             = true
size                  = 20 * 1024 * 1024 * 1024  # 20 GB
storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # Adaptador de red del sistema operativo
  os_network_adapter {
network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
tx_checksumming = true
attached        = true
  }
  
  # Copia de seguridad
  backup_sla_policies = [
data.cloudtemple_backup_iaas_opensource_policy.daily.id
  ]
  
  # Orden de arranque
  boot_order = [
"Hard-Drive",
"DVD-Drive",
  ]
  
  tags = {
environment = "production"
os          = "almalinux"
  }
}
```

**Explicaciones** :

- `high_availability` : Opciones disponibles: `disabled`, `restart`, `best-effort` (Ver [documentación](https://docs.cloud-temple.com/iaas_opensource/concepts#alta-disponibilidad) sobre Alta Disponibilidad)
- `boot_firmware` : `bios` o `uefi`
- `secure_boot` : Solo disponible con UEFI

### Crear una VM desde la Marketplace

**Objetivo**: Desplegar una VM desde la Marketplace Cloud Temple en el IaaS de código abierto.

**Código**:

```hcl
# Recuperación de un elemento de Marketplace
data "cloudtemple_marketplace_item" "ubuntu_2404" {
  name = "Ubuntu 24.04 LTS"
}

data "cloudtemple_compute_iaas_opensource_storage_repository" "sr" {
  name = "sr001-shared-storage"
}

data "cloudtemple_compute_iaas_opensource_network" "network" {
  name = "PROD-NETWORK"
}

data "cloudtemple_backup_iaas_opensource_policy" "nobackup" {
  name = "nobackup"
}

# Despliegue desde Marketplace
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "marketplace_vm" {
  name        = "ubuntu-marketplace-01"
  power_state = "on"
  
  # Fuente Marketplace
  marketplace_item_id   = data.cloudtemple_marketplace_item.ubuntu_2404.id
  storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  
  memory               = 6 * 1024 * 1024 * 1024
  cpu                  = 4
  num_cores_per_socket = 4
  boot_firmware        = "uefi"
  secure_boot          = false
  
  auto_power_on     = true
  high_availability = "best-effort"
  
  os_network_adapter {
network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
tx_checksumming = true
attached        = true
  }
  
  os_disk {
connected             = true
storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  backup_sla_policies = [
data.cloudtemple_backup_iaas_opensource_policy.nobackup.id
  ]
  
  boot_order = [
"Hard-Drive",
"DVD-Drive",
  ]
  
  tags = {
source = "marketplace"
  }
}
```

### Configurar la Replicación

**Objetivo**: Implementar una política de replicación para una VM.

**Código**:

```hcl
data "cloudtemple_compute_iaas_opensource_storage_repository" "replication_target" {
  name               = "target_storage_repository_name"
  machine_manager_id = "availability_zone_id"
}

# Creación de una política de replicación
resource "cloudtemple_compute_iaas_opensource_replication_policy" "policy_hourly" {
  name                  = "replication-policy-6h"
  storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.replication_target.id

  interval {
hours = 1
  }
}

# Asociación a una VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "replicated_vm" {
  name = "replicated-vm-01"
  
  # ... configuración estándar ...
  
  # Asociación de la política de replicación
  replication_policy_id = cloudtemple_compute_iaas_opensource_replication_policy.policy_hourly.id
}
```

**Explicaciones**:

- `interval`: Intervalo de replicación. Puede expresarse en `minutes` o `hours`.
- `storage_repository_id`: Storage Repository al que se replicarán los discos de la VM. Debe estar en una AZ diferente de la VM de origen.

### Configurar la Copia de Seguridad

**Objetivo**: Aplicar una política de copia de seguridad a una VM.

**Código**:

```hcl
# Recuperación de las políticas de backup
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

data "cloudtemple_backup_iaas_opensource_policy" "weekly" {
  name = "weekly-backup"
}

# VM con varias políticas de backup
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "backup_vm" {
  name = "important-vm-01"
  
  # ... configuración estándar ...
  
  # Pueden aplicarse varias políticas
  backup_sla_policies = [
data.cloudtemple_backup_iaas_opensource_policy.daily.id,
data.cloudtemple_backup_iaas_opensource_policy.weekly.id,
  ]
}
```

:::info[Backup obligatorio]
En un entorno SecNumCloud, debe definirse al menos una política de backup para poder iniciar la VM.
:::

### Configurar la Alta Disponibilidad

**Objetivo**: Configurar el comportamiento HA de una máquina virtual.

**Código**:

```hcl
# VM con HA desactivada
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "no_ha" {
  name              = "dev-vm-01"
  high_availability = "disabled"
  # ...
}

# VM con reinicio prioritario
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "priority_ha" {
  name              = "prod-vm-01"
  high_availability = "restart"
  # ...
}

# VM con best-effort
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "besteff_ha" {
  name              = "test-vm-01"
  high_availability = "best-effort"
  # ...
}
```

**Modos HA disponibles**:

Consulte la documentación sobre la [Alta Disponibilidad](https://docs.cloud-temple.com/iaas_opensource/concepts#alta-disponibilidad) en la infraestructura OpenSource.

| Modo | Descripción | Uso |
|------|-------------|-----|
| `disabled` | Sin HA | Entornos de desarrollo |
| `restart` | Reinicio de alta prioridad | Producción crítica |
| `best-effort` | Reinicio si hay recursos disponibles | Producción estándar |

### Configurar Cloud-Init OpenSource

**Objetivo**: Automatizar la configuración con Cloud-Init (fuente de datos NoCloud).

**Requisitos previos**: Imagen compatible con Cloud-Init NoCloud.

**Archivos Cloud-Init**:

Cree `cloud-init/cloud-config.yml`:

```yaml
#cloud-config
hostname: openiaas-server

users:
  - name: cloudadmin
sudo: ALL=(ALL) NOPASSWD:ALL
groups: sudo, docker
shell: /bin/bash
ssh_authorized_keys:
  - ssh-rsa AAAAB3NzaC1yc2E... your-key

packages:
  - docker.io
  - docker-compose
  - htop

runcmd:
  - systemctl enable docker
  - systemctl start docker
  - usermod -aG docker cloudadmin
```

Cree `cloud-init/network-config.yml`:

```yaml
version: 2
ethernets:
  ens160:
    dhcp4: false
    addresses:
      - 0.0.0.0/24
    routes:
      - to: default
        via: 0.0.0.0
    nameservers:
      addresses:
        - 0.0.0.0
```

:::important[A tener en cuenta]
  Ajuste la configuración de Cloud-Init según sus necesidades y la versión de Cloud-Init instalada en su máquina. El formato y la sintaxis pueden variar según las versiones.
:::

**Código Terraform**:

```hcl
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "cloudinit_vm" {
  name        = "ubuntu-cloudinit-01"
  power_state = "on"
  
  template_id = data.cloudtemple_compute_iaas_opensource_template.ubuntu_cloud.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  memory               = 4 * 1024 * 1024 * 1024
  cpu                  = 2
  num_cores_per_socket = 2
  
  auto_power_on     = true
  high_availability = "best-effort"
  
  os_disk {
connected             = true
size                  = 30 * 1024 * 1024 * 1024
storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  os_network_adapter {
network_id = data.cloudtemple_compute_iaas_opensource_network.network.id
attached   = true
  }
  
  # Configuración Cloud-Init (fuente de datos NoCloud)
  cloud_init = {
cloud_config   = file("./cloud-init/cloud-config.yml")
network_config = file("./cloud-init/network-config.yml")
  }
  
  backup_sla_policies = [
data.cloudtemple_backup_iaas_opensource_policy.daily.id
  ]
  
  boot_order = ["Hard-Drive"]
}
```

**Diferencia con VMware**:

- OpenSource utiliza la fuente de datos **NoCloud**
- Claves admitidas: `cloud_config` y `network_config`
- No se utiliza `filebase64()`, se emplea `file()` directamente

### Entender os_disk y os_network_adapter

Los bloques `os_disk` y `os_network_adapter` son bloques especiales que se pueden utilizar **únicamente durante la creación** de una máquina virtual a partir de:

- Content Library
- Plantilla
- Plantilla de Cloud del Marketplace
- Clonación de una VM existente

:::info[info]
  Sirven para hacer referencia a los discos virtuales y adaptadores de red desplegados por la plantilla, con el fin de poder modificar sus parámetros posteriormente sin tener que importarlos manualmente. En ningún caso crean un nuevo recurso.
:::

**Características importantes**:

1. **Creación únicamente**: Estos bloques solo pueden definirse durante el `terraform apply` inicial
2. **Alternativa**: Utilice el comando `terraform import` para importarlos manualmente

### Usar os_disk

**IaaS VMware** :

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_os_disk" {
  name = "vm-content-library"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configuración del disco del sistema operativo existente en la plantilla
  os_disk {
capacity = 100 * 1024 * 1024 * 1024  # Redimensionar a 100 GB
disk_mode = "persistent"
  }
}
```

**IaaS OpenSource** :

```hcl
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "vm_with_os_disk" {
  name = "openiaas-vm"
  
  template_id = data.cloudtemple_compute_iaas_opensource_template.template.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  memory               = 8 * 1024 * 1024 * 1024
  cpu                  = 4
  num_cores_per_socket = 2
  power_state          = "on"
  
  # Configuración del disco del sistema operativo
  os_disk {
name                  = "os-disk"
connected             = true
size                  = 50 * 1024 * 1024 * 1024  # 50 GB
storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # ... otras configuraciones
}
```

### Usar os_network_adapter

**IaaS VMware**:

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_network" {
  name = "vm-with-network"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configuración del adaptador de red del template
  os_network_adapter {
network_id   = data.cloudtemple_compute_network.vlan.id
auto_connect = true
connected    = true
mac_address  = "00:50:56:12:34:56"  # Opcional
  }
}
```

**IaaS OpenSource**:

```hcl
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "vm_with_network" {
  name = "openiaas-vm-network"
  
  template_id = data.cloudtemple_compute_iaas_opensource_template.template.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  memory               = 4 * 1024 * 1024 * 1024
  cpu                  = 2
  num_cores_per_socket = 2
  power_state          = "on"
  
  # Configuración del adaptador de red
  os_network_adapter {
network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
mac_address     = "c2:db:4f:15:41:3e"  # Opcional
tx_checksumming = true
attached        = true
  }
  
  # ... otras configuraciones
}
```

:::info[A tener en cuenta]
  Puede combinar ambas aproximaciones haciendo referencia a los discos y/o adaptadores de red de una VM y añadir otros mediante los recursos `cloudtemple_compute_iaas_vmware/opensource_virtual_disk` y `cloudtemple_compute_iaas_vmware/opensource_network_adapter`
:::

---

**Buenas prácticas**:

1. Use `os_disk` y `os_network_adapter` para la configuración inicial del template
2. Use los recursos dedicados para añadir recursos adicionales

## Almacenamiento objeto

### Crear un bucket

**Objetivo**: Crear un bucket de almacenamiento de objetos compatible con S3.

**Requisitos previos**: Permisos `object-storage_write`

**Código**:

```hcl
# Bucket privado
resource "cloudtemple_object_storage_bucket" "private_bucket" {
  name        = "my-private-bucket"
  access_type = "private"
}

# Bucket público
resource "cloudtemple_object_storage_bucket" "public_bucket" {
  name        = "my-public-bucket"
  access_type = "public"
}

# Bucket con acceso personalizado (lista blanca de IP)
resource "cloudtemple_object_storage_bucket" "custom_bucket" {
  name        = "my-custom-bucket"
  access_type = "custom"
  
  # Lista blanca de direcciones IP/CIDR
  whitelist = [
"10.0.0.0/8",
"192.168.1.0/24",
"203.0.113.42/32"
  ]
}

# Bucket con versionado habilitado
resource "cloudtemple_object_storage_bucket" "versioned_bucket" {
  name        = "my-versioned-bucket"
  access_type = "private"
  versioning  = "Enabled"
}

# Salidas útiles
output "bucket_endpoint" {
  value = cloudtemple_object_storage_bucket.private_bucket.endpoint
}

output "bucket_namespace" {
  value = cloudtemple_object_storage_bucket.private_bucket.namespace
}
```

**Tipos de acceso**:

- `private`: Acceso restringido a las direcciones IP del inquilino
- `public`: Acceso público en lectura
- `custom`: Acceso limitado a las IPs de la lista blanca

**Versionado**:

- `Enabled`: Habilita el versionado de objetos
- `Suspended`: Suspender el versionado (mantiene las versiones existentes)

### Crear una cuenta de almacenamiento

**Objetivo**: Crear una cuenta de almacenamiento con credenciales S3.

**Código**:

```hcl
# Creación de una cuenta de almacenamiento
resource "cloudtemple_object_storage_storage_account" "app_account" {
  name = "application-storage-account"
}

# Outputs para utilizar las credenciales
output "s3_access_key" {
  value     = cloudtemple_object_storage_storage_account.app_account.access_key_id
}

output "s3_secret_key" {
  value     = cloudtemple_object_storage_storage_account.app_account.access_secret_key
  sensitive = true
}

output "s3_endpoint" {
  value = "https://${cloudtemple_object_storage_bucket.my_bucket.namespace}.s3.fr1.cloud-temple.com"
}
```

:::warning[Información sensible]
Las credenciales se muestran una sola vez. Almacénelas de forma segura (p. ej.: HashiCorp Vault, AWS Secrets Manager).
:::
---

### Crear ACL mediante recurso dedicado

**Objetivo**: Administrar los permisos de acceso a los buckets con ACL.

**Código**:

```hcl
# Recuperación de los roles disponibles
data "cloudtemple_object_storage_role" "read_only" {
  name = "read_only"
}

data "cloudtemple_object_storage_role" "maintainer" {
  name = "maintainer"
}

data "cloudtemple_object_storage_role" "admin" {
  name = "admin"
}

# Recuperación de cuentas de almacenamiento existentes
data "cloudtemple_object_storage_storage_account" "dev_account" {
  name = "dev-team-account"
}

data "cloudtemple_object_storage_storage_account" "ops_account" {
  name = "ops-team-account"
}

# Bucket
resource "cloudtemple_object_storage_bucket" "shared_bucket" {
  name        = "shared-bucket"
  access_type = "private"
}

# ACL para el equipo dev (solo lectura)
resource "cloudtemple_object_storage_acl_entry" "dev_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.dev_account.name
  role            = data.cloudtemple_object_storage_role.read_only.name
}

# ACL para el equipo ops (maintainer)
resource "cloudtemple_object_storage_acl_entry" "ops_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.ops_account.name
  role            = data.cloudtemple_object_storage_role.maintainer.name
}
```

**Roles disponibles**:

- `read_write`: Lectura y escritura
- `write_only`: Solo escritura
- `read_only`: Solo lectura
- `maintainer`: Acceso total

### Configurar ACL directamente en el bucket

**Objetivo** : Definir las ACL al crear el bucket.

**Código** :

```hcl
# Recuperación de recursos
data "cloudtemple_object_storage_storage_account" "account1" {
  name = "storage-account-1"
}

data "cloudtemple_object_storage_storage_account" "account2" {
  name = "storage-account-2"
}

data "cloudtemple_object_storage_role" "read_only" {
  name = "read_only"
}

data "cloudtemple_object_storage_role" "maintainer" {
  name = "maintainer"
}

# Bucket con ACL integradas
resource "cloudtemple_object_storage_bucket" "bucket_with_acl" {
  name        = "bucket-with-inline-acl"
  access_type = "private"
  
  # Definición de ACL dentro del bucket
  acl_entry {
storage_account = data.cloudtemple_object_storage_storage_account.account1.name
role            = data.cloudtemple_object_storage_role.read_only.name
  }
  
  acl_entry {
storage_account = data.cloudtemple_object_storage_storage_account.account2.name
role            = data.cloudtemple_object_storage_role.maintainer.name
  }
}
```

**Diferencia con los recursos ACL dedicados**:

- **Inline**: ACL definidas directamente en el bucket (más sencillo para configuraciones estáticas)
- **Recurso dedicado**: ACL gestionadas de forma independiente (más flexible, permite modificaciones independientes)

### Usar los datasources

**Objetivo**: Consultar los metadatos de los buckets y listar los archivos.

**Código**:

```hcl
# Fuente de datos para listar los archivos de un bucket
data "cloudtemple_object_storage_bucket_files" "my_bucket_files" {
  bucket_name = cloudtemple_object_storage_bucket.my_bucket.name
}

# Mostrar todos los archivos
output "all_files" {
  value = data.cloudtemple_object_storage_bucket_files.my_bucket_files.files
}

# Filtrar un archivo específico
output "specific_file" {
  value = [
for file in data.cloudtemple_object_storage_bucket_files.my_bucket_files.files :
file if file.key == "config.json"
  ]
}

# Recuperación de una cuenta de almacenamiento existente
data "cloudtemple_object_storage_storage_account" "existing_account" {
  name = "production-account"
}

output "account_access_key" {
  value     = data.cloudtemple_object_storage_storage_account.existing_account.access_key_id
  sensitive = true
}
```

### Integración S3 con el proveedor AWS

**Objetivo**: Utilizar el proveedor AWS para subir archivos al almacenamiento objeto Cloud Temple.

**Código**:

```hcl
# Creación de la cuenta y el bucket

data "cloudtemple_object_storage_role" "maintainer" {
  name = "maintainer"
}

resource "cloudtemple_object_storage_storage_account" "upload_account" {
  name = "upload-storage-account"
}

resource "cloudtemple_object_storage_bucket" "upload_bucket" {
  name        = "upload-bucket"
  access_type = "private"
  
  acl_entry {
storage_account = cloudtemple_object_storage_storage_account.upload_account.name
role            = data.cloudtemple_object_storage_role.maintainer.name
  }
}

# Configuración del proveedor AWS para Cloud Temple S3
provider "aws" {
  alias  = "cloudtemple_s3"
  region = "eu-west-3"
  
  # Uso de credenciales de Cloud Temple
  access_key = cloudtemple_object_storage_storage_account.upload_account.access_key_id
  secret_key = cloudtemple_object_storage_storage_account.upload_account.access_secret_key
  
  # Endpoint de Cloud Temple
  endpoints {
s3 = "https://${cloudtemple_object_storage_bucket.upload_bucket.namespace}.s3.fr1.cloud-temple.com"
  }
  
  # Configuración para evitar la validación de AWS
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}

# Carga de un archivo
resource "aws_s3_object" "config_file" {
  provider = aws.cloudtemple_s3
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = "config/app-config.json"
  source = "./files/app-config.json"
  etag   = filemd5("./files/app-config.json")
}

# Carga de múltiples archivos
resource "aws_s3_object" "static_files" {
  provider = aws.cloudtemple_s3
  
  for_each = fileset("./static/", "**/*")
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = each.value
  source = "./static/${each.value}"
  etag   = filemd5("./static/${each.value}")
}

# Verificación de los archivos subidos
data "cloudtemple_object_storage_bucket_files" "uploaded_files" {
  depends_on  = [aws_s3_object.config_file]
  bucket_name = cloudtemple_object_storage_bucket.upload_bucket.name
}

output "uploaded_files_list" {
  value = data.cloudtemple_object_storage_bucket_files.uploaded_files.files
}
```

## Conclusión

Esta documentación cubre los principales casos de uso del proveedor Terraform Cloud Temple. Para profundizar más:

- Consulte la [documentación oficial del proveedor](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- Explore los [ejemplos en GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)
- Utilice la [Consola Cloud Temple](https://shiva.cloud-temple.com) para identificar los recursos disponibles

:::info[¿Necesita ayuda?]
Para cualquier pregunta o problema, consulte la [sección Issues en GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues) o póngase en contacto con el soporte de Cloud Temple.
:::
