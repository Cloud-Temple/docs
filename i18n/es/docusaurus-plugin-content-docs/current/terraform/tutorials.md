---
title: Tutorials
---

# Tutoriales de Terraform en Cloud Temple

Esta página contiene tutoriales prácticos para usar el proveedor Terraform de Cloud Temple con diferentes servicios.

## Tabla de Contenidos

- [VMware IaaS](#vmware-iaas)
- [OpenSource IaaS](#opensource-iaas)
- [Almacenamiento de Objetos](#almacenamiento-de-objetos)

## VMware IaaS

### Crear una VM Vacía

**Objetivo**: Crear una máquina virtual VMware básica sin sistema operativo.

**Requisitos previos**:
- Acceso a un centro de datos de Cloud Temple
- Credenciales API configuradas
- Permisos requeridos:
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
# Recuperar los recursos necesarios
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"
}

# Crear una VM vacía
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

**Explicaciones**:
- `guest_operating_system_moref`: Define el tipo de SO para los controladores de VMware Tools
- La VM se crea sin disco ni red (se añaden por separado)
- Las opciones hot-add permiten añadir CPU/RAM en caliente

---

### Crear una VM desde el Marketplace

**Objetivo**: Desplegar una VM desde una imagen del Marketplace de Cloud Temple.

**Código**:

```hcl
# Recuperar un elemento del Marketplace
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

# Desplegar desde el Marketplace
resource "cloudtemple_compute_virtual_machine" "marketplace_vm" {
  name = "ubuntu-marketplace-01"
  
  # Origen del Marketplace
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
- `datastore_id`: Datastore específico requerido para el despliegue desde Marketplace
- La imagen ya incluye un sistema operativo configurado

---

### Crear una VM desde la Content Library

**Objetivo**: Desplegar una VM desde una plantilla de VMware Content Library.

**Código**:

```hcl
# Recuperar la Content Library
data "cloudtemple_compute_content_library" "public" {
  name = "PUBLIC"
}

# Recuperar un elemento específico
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

# Desplegar desde Content Library
resource "cloudtemple_compute_virtual_machine" "content_library_vm" {
  name = "centos-from-cl-01"
  
  # Origen Content Library
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
- Los bloques `os_disk` y `os_network_adapter` configuran los recursos de la plantilla
- Estos bloques solo pueden usarse en el momento de la creación (ver sección dedicada)

---

### Configurar Cloud-Init en VMware

**Objetivo**: Automatizar la configuración de la VM en el primer arranque con Cloud-Init.

**Requisitos previos**: Usar una imagen compatible con Cloud-Init (por ejemplo, Ubuntu Cloud Image en formato OVF).

**Archivos Cloud-Init**:

Crear `cloud-init/user-data.yml`:

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

Crear `cloud-init/network-config.yml`:

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

**Código Terraform**:

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
  
  # Configuración Cloud-Init (datasource OVF de VMware)
  cloud_init = {
    user-data      = filebase64("./cloud-init/user-data.yml")
    network-config = filebase64("./cloud-init/network-config.yml")
    hostname       = "my-server"
    password       = "RANDOM"
  }
}
```

**Claves Cloud-Init soportadas (VMware)**:
- `user-data`: Configuración principal (base64)
- `network-config`: Configuración de red (base64)
- `public-keys`: Claves públicas SSH
- `hostname`: Nombre de host
- `password`: Contraseña (o "RANDOM")
- `instance-id`: Identificador único
- `seedfrom`: URL de origen de configuración

:::warning Limitación
    Cloud-Init solo se ejecuta en el primer arranque de la VM.
:::

---

### Crear un disco virtual y adjuntarlo a una VM

**Objetivo**: Añadir almacenamiento adicional a una máquina virtual existente.

**Código**:

```hcl
# Referenciar una VM existente
data "cloudtemple_compute_virtual_machine" "existing_vm" {
  name = "my-existing-vm"
}

# Crear un disco virtual
resource "cloudtemple_compute_virtual_disk" "data_disk" {
  name = "data-disk-01"
  
  # Adjuntar a la VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.existing_vm.id
  
  # Tamaño del disco
  capacity = 100 * 1024 * 1024 * 1024  # 100 GB
  
  # Modo de disco
  disk_mode = "persistent"
  
  # Tipo de aprovisionamiento
  provisioning_type = "dynamic"
}
```

**Modos de disco disponibles**:
- `persistent`: Los cambios se guardan inmediata y permanentemente en el disco virtual.
- `independent_nonpersistent`: Los cambios realizados en el disco virtual se guardan en un registro de rehacer y se eliminan al apagar.
- `independent_persistent`: Los cambios se guardan inmediata y permanentemente en el disco virtual. No se ven afectados por las instantáneas.

**Tipos de aprovisionamiento**:
- `dynamic`: Ahorra espacio de almacenamiento asignando dinámicamente el espacio según sea necesario. La creación es rápida.
- `staticImmediate`: Asigna todo el espacio del disco en la creación, pero los bloques se ponen a cero en la primera escritura.
- `staticDiffered`: Asigna y pone a cero todo el espacio del disco en la creación.

---

### Crear una interfaz de red y adjuntarla a una VM

**Objetivo**: Añadir una tarjeta de red a una máquina virtual.

**Código**:

```hcl
# Recuperar la red
data "cloudtemple_compute_network" "production_vlan" {
  name = "PROD-VLAN-100"
}

# Referenciar la VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Crear un adaptador de red
resource "cloudtemple_compute_network_adapter" "eth1" {
  name = "Network adapter 2"
  
  # VM de destino
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Red
  network_id = data.cloudtemple_compute_network.production_vlan.id
  
  # Tipo de adaptador
  type = "VMXNET3"
  
  # Conectar automáticamente al encender
  connect_on_power_on = true
  
  # Dirección MAC (opcional, se genera automáticamente si se omite)
  # mac_address = "00:50:56:xx:xx:xx"
}
```

:::info Tipos de adaptadores de red soportados
  Los tipos de adaptadores compatibles que se pueden usar dependen del SO utilizado en la Máquina Virtual y de la versión de VMware.
:::

---

### Crear un controlador virtual y adjuntarlo a una VM

**Objetivo**: Añadir un controlador de disco a una máquina virtual.

**Código**:

```hcl
# Referenciar la VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Crear un controlador SCSI
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

---

## OpenSource IaaS

### Crear una VM desde una plantilla

**Objetivo**: Desplegar una máquina virtual desde una plantilla de catálogo.

**Requisitos previos**:
- Acceso a la infraestructura OpenSource de Cloud Temple
- Permisos requeridos:
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
# Recuperar una plantilla
data "cloudtemple_compute_iaas_opensource_template" "almalinux" {
  name = "AlmaLinux 8"
}

# Recuperar el host
data "cloudtemple_compute_iaas_opensource_host" "host" {
  name = "host-01"
}

# Recuperar el repositorio de almacenamiento
data "cloudtemple_compute_iaas_opensource_storage_repository" "sr" {
  name = "sr001-local-storage"
}

# Recuperar la red
data "cloudtemple_compute_iaas_opensource_network" "network" {
  name = "VLAN-100"
}

# Recuperar la política de respaldo
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

# Crear la VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "openstack_vm" {
  name        = "almalinux-vm-01"
  power_state = "on"
  
  # Origen
  template_id = data.cloudtemple_compute_iaas_opensource_template.almalinux.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  # Configuración de hardware
  memory               = 8 * 1024 * 1024 * 1024  # 8 GB
  cpu                  = 4
  num_cores_per_socket = 2
  
  # Opciones
  boot_firmware     = "uefi"
  secure_boot       = false
  auto_power_on     = true
  high_availability = "best-effort"
  
  # Disco del SO (debe coincidir con la plantilla)
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 20 * 1024 * 1024 * 1024  # 20 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # Adaptador de red del SO
  os_network_adapter {
    network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
    tx_checksumming = true
    attached        = true
  }
  
  # Respaldo
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

**Explicaciones**:
- `high_availability`: Opciones disponibles: `disabled`, `restart`, `best-effort` (Ver [documentación](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) sobre Alta Disponibilidad)
- `boot_firmware`: `bios` o `uefi`
- `secure_boot`: Solo con UEFI

---

### Crear una VM desde el Marketplace

**Objetivo**: Desplegar una VM desde el Marketplace de Cloud Temple en OpenSource IaaS.

**Código**:

```hcl
# Recuperar un elemento del Marketplace
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

# Desplegar desde el Marketplace
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "marketplace_vm" {
  name        = "ubuntu-marketplace-01"
  power_state = "on"
  
  # Origen del Marketplace
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

---

### Configurar Replicación

**Objetivo**: Configurar una política de replicación para una VM.

**Código**:

```hcl
data "cloudtemple_compute_iaas_opensource_storage_repository" "replication_target" {
  name               = "target_storage_repository_name"
  machine_manager_id = "availability_zone_id"
}

# Crear una política de replicación
resource "cloudtemple_compute_iaas_opensource_replication_policy" "policy_hourly" {
  name                  = "replication-policy-6h"
  storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.replication_target.id

  interval {
    hours = 1
  }
}

# Asociar con una VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "replicated_vm" {
  name = "replicated-vm-01"
  
  # ... configuración estándar ...
  
  # Asociar la política de replicación
  replication_policy_id = cloudtemple_compute_iaas_opensource_replication_policy.policy_hourly.id
}
```

**Explicaciones**:
- `interval`: Intervalo de replicación. Se puede especificar en `minutes` u `hours`
- `storage_repository_id`: Repositorio de almacenamiento al cual se replicarán los discos de la VM. Debe estar en una AZ diferente a la VM original

---

### Configurar Respaldo

**Objetivo**: Aplicar una política de respaldo a una VM.

**Código**:

```hcl
# Recuperar políticas de respaldo
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

data "cloudtemple_backup_iaas_opensource_policy" "weekly" {
  name = "weekly-backup"
}

# VM con múltiples políticas de respaldo
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "backup_vm" {
  name = "important-vm-01"
  
  # ... configuración estándar ...
  
  # Se pueden aplicar múltiples políticas
  backup_sla_policies = [
    data.cloudtemple_backup_iaas_opensource_policy.daily.id,
    data.cloudtemple_backup_iaas_opensource_policy.weekly.id,
  ]
}
```

:::info Respaldo obligatorio
    En un entorno SecNumCloud, se debe definir al menos una política de respaldo para iniciar la VM.
:::

---

### Configurar Alta Disponibilidad

**Objetivo**: Configurar el comportamiento de HA de una máquina virtual.

**Código**:

```hcl
# VM con HA deshabilitado
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

**Modos de HA disponibles**:

Ver documentación sobre [Alta Disponibilidad](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) en la infraestructura OpenSource

| Modo | Descripción | Uso |
|------|-------------|-------|
| `disabled` | Sin HA | Entornos de desarrollo |
| `restart` | Reinicio de alta prioridad | Producción crítica |
| `best-effort` | Reinicio si hay recursos disponibles | Producción estándar |

---

### Configurar Cloud-Init en OpenSource

**Objetivo**: Automatizar la configuración con Cloud-Init (datasource NoCloud).

**Requisitos previos**: Imagen compatible con Cloud-Init NoCloud.

**Archivos Cloud-Init**:

Crear `cloud-init/cloud-config.yml`:

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

Crear `cloud-init/network-config.yml`:

```yaml
version: 2
 ethernets:
   ens160:
     dhcp4: false
     addresses:
       - 0.0.0.0/24
     routes:
       - to: default
         via:: 0.0.0.0
     nameservers:
       addresses:
         - 0.0.0.0
```

:::important Nota
  Adapte la configuración de cloud-init a sus necesidades y a la versión de Cloud-Init instalada en su máquina. El formato y la sintaxis pueden cambiar según las versiones.
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
  
  # Configuración Cloud-Init (datasource NoCloud)
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
- OpenSource usa el datasource **NoCloud**
- Claves soportadas: `cloud_config` y `network_config`
- No se usa `filebase64()`, use `file()` directamente

---

### Comprender os_disk y os_network_adapter

Los bloques `os_disk` y `os_network_adapter` son bloques especiales usables **solo durante la creación** de una máquina virtual desde:

- Content Library
- Plantilla
- Marketplace de Cloud Temple
- Clon de una VM existente

:::info Info
  Se usan para referenciar discos virtuales y adaptadores de red desplegados por la plantilla para poder modificar sus parámetros posteriormente sin tener que importarlos manualmente. No crean un nuevo recurso de ninguna manera.
:::

**Características importantes**:

1. **Solo en creación**: Estos bloques solo pueden definirse durante el `terraform apply` inicial
2. **Alternativa**: Use el comando `terraform import` para importarlos manualmente

---

### Usar os_disk

**VMware IaaS**:

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_os_disk" {
  name = "vm-content-library"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configurar el disco del SO existente en la plantilla
  os_disk {
    capacity = 100 * 1024 * 1024 * 1024  # Redimensionar a 100 GB
    disk_mode = "persistent"
  }
}
```

**OpenSource IaaS**:

```hcl
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "vm_with_os_disk" {
  name = "openiaas-vm"
  
  template_id = data.cloudtemple_compute_iaas_opensource_template.template.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  memory               = 8 * 1024 * 1024 * 1024
  cpu                  = 4
  num_cores_per_socket = 2
  power_state          = "on"
  
  # Configuración del disco del SO
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 50 * 1024 * 1024 * 1024  # 50 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # ... otras configuraciones
}
```

---

### Usar os_network_adapter

**VMware IaaS**:

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_network" {
  name = "vm-with-network"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configurar el adaptador de red de la plantilla
  os_network_adapter {
    network_id   = data.cloudtemple_compute_network.vlan.id
    auto_connect = true
    connected    = true
    mac_address  = "00:50:56:12:34:56"  # Opcional
  }
}
```

**OpenSource IaaS**:

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

:::info Nota
  Puede combinar ambos enfoques referenciando los discos y/o adaptadores de red de una VM y añadiendo otros a través de los recursos `cloudtemple_compute_iaas_vmware/opensource_virtual_disk` y `cloudtemple_compute_iaas_vmware/opensource_network_adapter`
:::

---

**Mejores prácticas**:
1. Use `os_disk` y `os_network_adapter` para la configuración inicial de la plantilla
2. Use recursos dedicados para añadir recursos adicionales

---

## Almacenamiento de Objetos

### Crear un bucket

**Objetivo**: Crear un bucket de almacenamiento de objetos compatible con S3.

**Requisitos previos**: Permiso `object-storage_write`

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

# Bucket con acceso personalizado (lista blanca de IPs)
resource "cloudtemple_object_storage_bucket" "custom_bucket" {
  name        = "my-custom-bucket"
  access_type = "custom"
  
  # Lista blanca de IP/CIDR
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

# Outputs útiles
output "bucket_endpoint" {
  value = cloudtemple_object_storage_bucket.private_bucket.endpoint
}

output "bucket_namespace" {
  value = cloudtemple_object_storage_bucket.private_bucket.namespace
}
```

**Tipos de acceso**:
- `private`: Acceso restringido a direcciones IP del tenant
- `public`: Acceso público de lectura
- `custom`: Acceso limitado a IPs de lista blanca

**Versionado**:
- `Enabled`: Habilita el versionado de objetos
- `Suspended`: Suspende el versionado (mantiene las versiones existentes)

---

### Crear una cuenta de almacenamiento

**Objetivo**: Crear una cuenta de almacenamiento con credenciales S3.

**Código**:

```hcl
# Crear una cuenta de almacenamiento
resource "cloudtemple_object_storage_storage_account" "app_account" {
  name = "application-storage-account"
}

# Outputs para usar las credenciales
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

:::warning Información sensible
    Las credenciales se muestran solo una vez. Almacénelas de forma segura (por ejemplo, HashiCorp Vault, AWS Secrets Manager).
:::

---

### Crear ACLs mediante recurso dedicado

**Objetivo**: Gestionar los permisos de acceso al bucket con ACLs.

**Código**:

```hcl
# Recuperar roles disponibles
data "cloudtemple_object_storage_role" "read_only" {
  name = "read_only"
}

data "cloudtemple_object_storage_role" "maintainer" {
  name = "maintainer"
}

data "cloudtemple_object_storage_role" "admin" {
  name = "admin"
}

# Recuperar cuentas de almacenamiento existentes
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

# ACL para el equipo de desarrollo (solo lectura)
resource "cloudtemple_object_storage_acl_entry" "dev_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.dev_account.name
  role            = data.cloudtemple_object_storage_role.read_only.name
}

# ACL para el equipo de operaciones (mantenedor)
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
- `maintainer`: Acceso completo

---

### Configurar ACLs directamente en el bucket

**Objetivo**: Definir ACLs al crear el bucket.

**Código**:

```hcl
# Recuperar recursos
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

# Bucket con ACLs inline
resource "cloudtemple_object_storage_bucket" "bucket_with_acl" {
  name        = "bucket-with-inline-acl"
  access_type = "private"
  
  # Definición de ACL en el bucket
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

**Diferencia con recursos ACL dedicados**:
- **Inline**: ACLs definidas directamente en el bucket (más simple para configuraciones estáticas)
- **Recurso dedicado**: ACLs gestionadas por separado (más flexible, permite modificaciones independientes)

---

### Usar datasources

**Objetivo**: Consultar metadatos del bucket y listar archivos.

**Código**:

```hcl
# Datasource para listar archivos del bucket
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

# Recuperar una cuenta de almacenamiento existente
data "cloudtemple_object_storage_storage_account" "existing_account" {
  name = "production-account"
}

output "account_access_key" {
  value     = data.cloudtemple_object_storage_storage_account.existing_account.access_key_id
  sensitive = true
}
```

---

### Integración S3 con el proveedor AWS

**Objetivo**: Usar el proveedor AWS para subir archivos al almacenamiento de objetos de Cloud Temple.

**Código**:

```hcl
# Crear cuenta y bucket
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

# Configurar el proveedor AWS para S3 de Cloud Temple
provider "aws" {
  alias  = "cloudtemple_s3"
  region = "eu-west-3"
  
  # Usar credenciales de Cloud Temple
  access_key = cloudtemple_object_storage_storage_account.upload_account.access_key_id
  secret_key = cloudtemple_object_storage_storage_account.upload_account.access_secret_key
  
  # Endpoint de Cloud Temple
  endpoints {
    s3 = "https://${cloudtemple_object_storage_bucket.upload_bucket.namespace}.s3.fr1.cloud-temple.com"
  }
  
  # Configuración para omitir validación de AWS
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}

# Subir un archivo
resource "aws_s3_object" "config_file" {
  provider = aws.cloudtemple_s3
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = "config/app-config.json"
  source = "./files/app-config.json"
  etag   = filemd5("./files/app-config.json")
}

# Subir múltiples archivos
resource "aws_s3_object" "static_files" {
  provider = aws.cloudtemple_s3
  
  for_each = fileset("./static/", "**/*")
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = each.value
  source = "./static/${each.value}"
  etag   = filemd5("./static/${each.value}")
}

# Verificar archivos subidos
data "cloudtemple_object_storage_bucket_files" "uploaded_files" {
  depends_on  = [aws_s3_object.config_file]
  bucket_name = cloudtemple_object_storage_bucket.upload_bucket.name
}

output "uploaded_files_list" {
  value = data.cloudtemple_object_storage_bucket_files.uploaded_files.files
}
```

---

## Conclusión

Esta documentación cubre los principales casos de uso del proveedor Terraform de Cloud Temple. Para ir más allá:

- Consulte la [documentación oficial del proveedor](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- Explore los [ejemplos en GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)
- Use la [Consola de Cloud Temple](https://shiva.cloud-temple.com) para identificar los recursos disponibles

:::info ¿Necesita ayuda?
    Para cualquier pregunta o problema, consulte la [sección de Issues en GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues) o contacte al soporte de Cloud Temple.
:::
