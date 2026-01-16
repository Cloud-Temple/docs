---
title: Tutorials
---

# Terraform Cloud Temple Tutorials

This page gathers practical tutorials for using the Terraform Cloud Temple provider with various services.

## Inhaltsverzeichnis

- [IaaS VMware](#iaas-vmware)
- [IaaS OpenSource](#iaas-opensource)
- [Objekt-Speicher](#stockage-objet)

## IaaS VMware

### Erstellen einer leeren VM

**Ziel**: Erstellen einer einfachen VMware-VM ohne Betriebssystem.

**Voraussetzungen**:
- Zugriff auf ein Cloud Temple Datacenter
- Konfigurierte API-Anmeldeinformationen
- Erforderliche Berechtigungen
  - `compute_iaas_vmware_read`
  - `compute_iaas_vmware_management`
  - `compute_iaas_vmware_virtual_machine_power`
  - `compute_iaas_vmware_infrastructure_read`
  - `backup_iaas_vmware_read`
  - `backup_iaas_vmware_write`
  - `activity_read`
  - `tag_read`
  - `tag_write`

**Code**:

```hcl
# Retrieval of required resources
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"
}

# Creating an empty VM
resource "cloudtemple_compute_virtual_machine" "empty_vm" {
  name = "vm-empty-01"
  
  # Hardware configuration
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Hot-add enabled
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Location
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Guest operating system
  guest_operating_system_moref = "ubuntu64Guest"
  
  tags = {
    environment = "demo"
    created_by  = "terraform"
  }
}
```

**Erklärungen**:
- `guest_operating_system_moref`: Definiert den OS-Typ für VMware Tools-Treiber
- Die VM wird ohne Festplatte oder Netzwerk erstellt (separat hinzuzufügen)
- Hot-add-Optionen ermöglichen das Hinzufügen von CPU/RAM im laufenden Betrieb

### VM aus der Marketplace erstellen

**Ziel**: Bereitstellung einer VM aus einem Image aus der Cloud Temple Marketplace.

**Code**:

```hcl
# Retrieval of a Marketplace Item
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

# Deployment from the Marketplace
resource "cloudtemple_compute_virtual_machine" "marketplace_vm" {
  name = "ubuntu-marketplace-01"
  
  # Marketplace Source
  marketplace_item_id = data.cloudtemple_marketplace_item.ubuntu_2404.id
  
  # Configuration
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

**Explanations**:
- `marketplace_item_id`: References a ready-to-use image
- `datastore_id`: Specific datastore required for Marketplace deployment
- The image already includes a pre-configured operating system

### VM aus Content Library erstellen

**Ziel**: Bereitstellung einer VM aus einem Template der VMware Content Library.

**Code**:

```hcl
# Retrieval of the Content Library
data "cloudtemple_compute_content_library" "public" {
  name = "PUBLIC"
}

# Retrieval of a specific item
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

# Deployment from Content Library
resource "cloudtemple_compute_virtual_machine" "content_library_vm" {
  name = "centos-from-cl-01"
  
  # Source Content Library
  content_library_id      = data.cloudtemple_compute_content_library.public.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.centos.id
  
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.sdrs.id
  datastore_id         = data.cloudtemple_compute_datastore.ds.id
  
  # OS Disk Configuration
  os_disk {
    capacity = 50 * 1024 * 1024 * 1024  # 50 GB
  }
  
  # OS Network Adapter Configuration
  os_network_adapter {
    network_id = data.cloudtemple_compute_network.vlan.id
  }
  
  tags = {
    source = "content-library"
  }
}
```

**Explanations**:
- The `os_disk` and `os_network_adapter` blocks configure the template's resources
- These blocks can only be used at creation (see dedicated section)

### Cloud-Init VMware konfigurieren

**Ziel**: Automatisierte Konfiguration einer VM beim ersten Start mit Cloud-Init.

**Voraussetzungen**: Verwenden einer Cloud-Init-kompatiblen Image (z. B. Ubuntu Cloud Image im OVF-Format).

**Cloud-Init-Dateien**:

Erstellen Sie `cloud-init/user-data.yml`:

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

Erstellen Sie `cloud-init/network-config.yml`:

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

**Terraform-Code**:

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
  
  # Cloud-Init-Konfiguration (VMware OVF-Datasource)
  cloud_init = {
    user-data      = filebase64("./cloud-init/user-data.yml")
    network-config = filebase64("./cloud-init/network-config.yml")
    hostname       = "my-server"
    password       = "RANDOM"
  }
}
```

**Unterstützte Cloud-Init-Schlüssel (VMware)**:
- `user-data`: Hauptkonfiguration (Base64)
- `network-config`: Netzwerkkonfiguration (Base64)
- `public-keys`: Öffentliche SSH-Schlüssel
- `hostname`: Hostname
- `password`: Passwort (oder „RANDOM“)
- `instance-id`: Eindeutige Instanz-ID
- `seedfrom`: URL der Konfigurationsquelle

:::warning Einschränkung
    Cloud-Init wird nur beim ersten Start der VM ausgeführt.
:::

### Erstellen eines virtuellen Laufwerks und Anhängen an eine VM

**Ziel**: Zusätzlichen Speicher einer bestehenden virtuellen Maschine hinzufügen.

**Code**:

```hcl
# Reference to an existing VM
data "cloudtemple_compute_virtual_machine" "existing_vm" {
  name = "my-existing-vm"
}

# Creating a virtual disk
resource "cloudtemple_compute_virtual_disk" "data_disk" {
  name = "data-disk-01"
  
  # Attachment to the VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.existing_vm.id
  
  # Disk size
  capacity = 100 * 1024 * 1024 * 1024  # 100 GB
  
  # Disk mode
  disk_mode = "persistent"
  
  # Provisioning type
  provisioning_type = "dynamic"
}
```

**Available disk modes**:
- `persistent`: Changes are immediately and permanently written to the virtual disk.
- `independent_nonpersistent`: Changes made to the virtual disk are recorded in a rollback journal and discarded upon shutdown.
- `independent_persistent`: Changes are immediately and permanently written to the virtual disk. Unaffected by snapshots.

**Provisioning types**:
- `dynamic`: Saves storage space by dynamically allocating space as needed. Creation is fast.
- `staticImmediate`: Allocates all disk space during creation, but blocks are zeroed out on first write.
- `staticDiffered`: Allocates and zeros out all disk space during creation.

### Erstellen einer Netzwerkschnittstelle und Anhängen an eine VM

**Ziel**: Hinzufügen einer Netzwerkkarte zu einer virtuellen Maschine.

**Code**:

```hcl
# Network Recovery
data "cloudtemple_compute_network" "production_vlan" {
  name = "PROD-VLAN-100"
}

# Reference to the VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Creating a Network Adapter
resource "cloudtemple_compute_network_adapter" "eth1" {
  name = "Network adapter 2"
  
  # Target VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Network
  network_id = data.cloudtemple_compute_network.production_vlan.id
  
  # Adapter type
  type = "VMXNET3"
  
  # Connect automatically on power on
  connect_on_power_on = true
  
  # MAC address (optional, automatically generated if omitted)
  # mac_address = "00:50:56:xx:xx:xx"
}
```
:::info Supported Network Adapter Types
  The supported adapter types depend on the operating system running on the virtual machine as well as the version of VMware.
:::

---

### Erstellen eines virtuellen Controllers und Anhängen an eine VM

**Ziel**: Hinzufügen eines Festplattencontrollers zu einer virtuellen Maschine.

**Code**:

```hcl
# Reference to the VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Creation of a SCSI controller
resource "cloudtemple_compute_virtual_controller" "scsi_controller" {
  name = "SCSI controller 1"
  
  # Target VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Controller type
  type = "SCSI"
}
```

**Controller types**:
- `USB2`
- `USB3`
- `SCSI`
- `CD/DVD`
- `NVME`
- `PCI`

## IaaS Open Source

### Erstellen einer VM aus einem Template

**Ziel**: Bereitstellen einer virtuellen Maschine aus einem Template im Katalog.

**Voraussetzungen**:
- Zugriff auf die OpenSource Cloud Temple-Infrastruktur
- Erforderliche Berechtigungen:
  - `compute_iaas_opensource_read`
  - `compute_iaas_opensource_management`
  - `compute_iaas_opensource_virtual_machine_power`
  - `compute_iaas_opensource_infrastructure_read`
  - `backup_iaas_opensource_read`
  - `backup_iaas_opensource_write`
  - `activity_read`
  - `tag_read`
  - `tag_write`

**Code**:

```hcl
# Retrieval of a template
data "cloudtemple_compute_iaas_opensource_template" "almalinux" {
  name = "AlmaLinux 8"
}

# Host retrieval
data "cloudtemple_compute_iaas_opensource_host" "host" {
  name = "host-01"
}

# Retrieval of the storage repository
data "cloudtemple_compute_iaas_opensource_storage_repository" "sr" {
  name = "sr001-local-storage"
}

# Network Recovery
data "cloudtemple_compute_iaas_opensource_network" "network" {
  name = "VLAN-100"
}

# Retrieval of the backup policy
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

# VM-Erstellung
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "openstack_vm" {
  name        = "almalinux-vm-01"
  power_state = "on"
  
  # Quelle Quelle
  template_id = data.cloudtemple_compute_iaas_opensource_template.almalinux.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  # Hardware-Konfiguration
  memory               = 8 * 1024 * 1024 * 1024  # 8 GB
  cpu                  = 4
  num_cores_per_socket = 2
  
  # Optionen
  boot_firmware     = "uefi"
  secure_boot       = false
  auto_power_on     = true
  high_availability = "best-effort"
  
  # Betriebssystem-Platte (muss mit dem Template übereinstimmen)
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 20 * 1024 * 1024 * 1024  # 20 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # Netzwerkadapter für das Betriebssystem
  os_network_adapter {
    network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
    tx_checksumming = true
    attached        = true
  }
  
  # Backup
  backup_sla_policies = [
    data.cloudtemple_backup_iaas_opensource_policy.daily.id
  ]
  
  # Boot-Reihenfolge
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

**Erläuterungen**:
- `high_availability`: Verfügbare Optionen: `disabled`, `restart`, `best-effort` (siehe [Dokumentation](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) zur Hochverfügbarkeit)
- `boot_firmware`: `bios` oder `uefi`
- `secure_boot`: Nur mit UEFI möglich

### Erstellen einer VM aus der Marketplace

**Ziel**: Bereitstellen einer VM aus der Marketplace Cloud Temple im IaaS OpenSource.

**Code**:

```hcl
# Retrieval of a Marketplace item
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

# Deployment from Marketplace
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "marketplace_vm" {
  name        = "ubuntu-marketplace-01"
  power_state = "on"
  
  # Marketplace Source
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

### Replikation konfigurieren

**Ziel**: Eine Replikationsrichtlinie für eine VM einrichten.

**Code**:

```hcl
data "cloudtemple_compute_iaas_opensource_storage_repository" "replication_target" {
  name               = "target_storage_repository_name"
  machine_manager_id = "availability_zone_id"
}

# Creating a replication policy
resource "cloudtemple_compute_iaas_opensource_replication_policy" "policy_hourly" {
  name                  = "replication-policy-6h"
  storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.replication_target.id

  interval {
    hours = 1
  }
}

# Association to a VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "replicated_vm" {
  name = "replicated-vm-01"
  
  # ... standard configuration ...
  
  # Association of the replication policy
  replication_policy_id = cloudtemple_compute_iaas_opensource_replication_policy.policy_hourly.id
}
```

**Explanations**:
- `interval`: Replication interval. Can be specified in `minutes` or `hours`.
- `storage_repository_id`: Storage repository to which the VM's disks will be replicated. Must be located in a different AZ than the original VM.

### Backup konfigurieren

**Ziel**: Eine Backup-Politik auf einer VM anwenden.

**Code**:

```hcl
# Retrieval of backup policies
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

data "cloudtemple_backup_iaas_opensource_policy" "weekly" {
  name = "weekly-backup"
}

# VM with Multiple Backup Policies
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "backup_vm" {
  name = "important-vm-01"
  
  # ... standard configuration ...
  
  # Multiple policies can be applied
  backup_sla_policies = [
    data.cloudtemple_backup_iaas_opensource_policy.daily.id,
    data.cloudtemple_backup_iaas_opensource_policy.weekly.id,
  ]
}
```

:::info Mandatory Backup
    In a SecNumCloud environment, at least one backup policy must be defined in order to start the VM.
:::
---

### Hochverfügbarkeit konfigurieren

**Ziel**: Das HA-Verhalten einer virtuellen Maschine konfigurieren.

**Code**:

```hcl
# VM with HA disabled
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "no_ha" {
  name              = "dev-vm-01"
  high_availability = "disabled"
  # ...
}

# VM mit priorisiertem Neustart
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "priority_ha" {
  name              = "prod-vm-01"
  high_availability = "restart"
  # ...
}

# VM with best-effort
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "besteff_ha" {
  name              = "test-vm-01"
  high_availability = "best-effort"
  # ...
}
```

**Available HA modes**:

See documentation on [High Availability](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) in the OpenSource infrastructure

| Mode | Description | Usage |
|------|-------------|-------|
| `disabled` | No HA | Development environments |
| `restart` | High-priority restart | Critical production |
| `best-effort` | Restart if resources available | Standard production |

### Cloud-Init OpenSource konfigurieren

**Ziel**: Automatisierte Konfiguration mit Cloud-Init (NoCloud-Datasource).

**Voraussetzungen**: Cloud-Init-kompatible Image (NoCloud).

**Cloud-Init-Dateien**:

Erstellen Sie `cloud-init/cloud-config.yml`:

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

Erstellen Sie `cloud-init/network-config.yml`:

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

:::important Hinweis
  Passen Sie die Cloud-Init-Konfiguration Ihren Anforderungen und der auf Ihrer Maschine installierten Cloud-Init-Version an. Das Format und die Syntax können je nach Version variieren.
:::

**Terraform-Code**:

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
  
  # Cloud-Init-Konfiguration (NoCloud-Datasource)
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

**Unterschied zu VMware**:
- OpenSource verwendet die Datasource **NoCloud**
- Unterstützte Schlüssel: `cloud_config` und `network_config`
- Kein `filebase64()`, stattdessen direkt `file()` verwenden

### os_disk und os_network_adapter verstehen

The `os_disk` and `os_network_adapter` blocks are special blocks that can be used **only during the creation** of a virtual machine from:

- Content Library  
- Template  
- Marketplace Cloud Template  
- Clone of an existing VM  

:::info info  
  They are used to reference virtual disks and network adapters deployed by the template, allowing their parameters to be modified later without manually importing them. These blocks do **not** create any new resources.  
:::

**Important characteristics**:

1. **Creation only**: These blocks can only be defined during the initial `terraform apply`  
3. **Alternative**: Use the `terraform import` command to manually import them

### os_disk verwenden

**IaaS VMware**:

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_os_disk" {
  name = "vm-content-library"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Konfiguration der bestehenden Betriebssystemfestplatte im Template
  os_disk {
    capacity = 100 * 1024 * 1024 * 1024  # Auf 100 GB vergrößern
    disk_mode = "persistent"
  }
}
```

**IaaS OpenSource**:

```hcl
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "vm_with_os_disk" {
  name = "openiaas-vm"
  
  template_id = data.cloudtemple_compute_iaas_opensource_template.template.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  memory               = 8 * 1024 * 1024 * 1024
  cpu                  = 4
  num_cores_per_socket = 2
  power_state          = "on"
  
  # Konfiguration der Betriebssystemfestplatte
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 50 * 1024 * 1024 * 1024  # 50 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # ... weitere Konfigurationen
}
```

### os_network_adapter verwenden

**IaaS VMware**:

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_network" {
  name = "vm-with-network"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Konfiguration des Netzwerkadapters des Templates
  os_network_adapter {
    network_id   = data.cloudtemple_compute_network.vlan.id
    auto_connect = true
    connected    = true
    mac_address  = "00:50:56:12:34:56"  # Optional
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
  
  # Konfiguration des Netzwerkadapters
  os_network_adapter {
    network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
    mac_address     = "c2:db:4f:15:41:3e"  # Optional
    tx_checksumming = true
    attached        = true
  }
  
  # ... weitere Konfigurationen
}
```

:::info Hinweis
  Sie können beide Ansätze problemlos kombinieren, indem Sie Festplatten und/oder Netzwerkadapter einer VM referenzieren und zusätzliche über die Ressourcen `cloudtemple_compute_iaas_vmware/opensource_virtual_disk` und `cloudtemple_compute_iaas_vmware/opensource_network_adapter` hinzufügen.
:::

---

**Best Practices**:
1. Verwenden Sie `os_disk` und `os_network_adapter` für die ursprüngliche Konfiguration des Templates
2. Verwenden Sie die spezialisierten Ressourcen, um zusätzliche Ressourcen hinzuzufügen

## Object Storage

### Einen Bucket erstellen

**Ziel**: Erstellen eines S3-kompatiblen Objektspeicher-Buckets.

**Voraussetzungen**: Berechtigung `object-storage_write`

**Code**:

```hcl
# Private Bucket
resource "cloudtemple_object_storage_bucket" "private_bucket" {
  name        = "my-private-bucket"
  access_type = "private"
}

# Öffentlicher Bucket
resource "cloudtemple_object_storage_bucket" "public_bucket" {
  name        = "my-public-bucket"
  access_type = "public"
}

# Bucket with Custom Access (IP Whitelist)
resource "cloudtemple_object_storage_bucket" "custom_bucket" {
  name        = "my-custom-bucket"
  access_type = "custom"
  
  # IP/CIDR Whitelist
  whitelist = [
    "10.0.0.0/8",
    "192.168.1.0/24",
    "203.0.113.42/32"
  ]
}

# Bucket mit aktiviertem Versioning
resource "cloudtemple_object_storage_bucket" "versioned_bucket" {
  name        = "my-versioned-bucket"
  access_type = "private"
  versioning  = "Enabled"
}

# Useful outputs
output "bucket_endpoint" {
  value = cloudtemple_object_storage_bucket.private_bucket.endpoint
}

output "bucket_namespace" {
  value = cloudtemple_object_storage_bucket.private_bucket.namespace
}
```

**Access types**:
- `private`: Restricted access to tenant IP addresses
- `public`: Public read access
- `custom`: Limited access to IPs on the whitelist

**Versioning**:
- `Enabled`: Enables object versioning
- `Suspended`: Suspends versioning (preserves existing versions)

### Ein Speicherkonto erstellen

**Ziel**: Erstellen eines Speicherkontos mit S3-Zugangsdaten.

**Code**:

```hcl
# Creating a storage account
resource "cloudtemple_object_storage_storage_account" "app_account" {
  name = "application-storage-account"
}

# Outputs for using the credentials
output "s3_access_key" {
  value = cloudtemple_object_storage_storage_account.app_account.access_key_id
}

output "s3_secret_key" {
  value     = cloudtemple_object_storage_storage_account.app_account.access_secret_key
  sensitive = true
}

output "s3_endpoint" {
  value = "https://${cloudtemple_object_storage_bucket.my_bucket.namespace}.s3.fr1.cloud-temple.com"
}
```

:::warning Sensitive information
    The credentials are displayed only once. Store them securely (e.g., HashiCorp Vault, AWS Secrets Manager).
:::
---

### ACL über eine dedizierte Ressource erstellen

**Ziel**: Verwaltung der Zugriffsrechte auf Buckets mit Hilfe von ACLs.

**Code**:

```hcl
# Retrieval of available roles
data "cloudtemple_object_storage_role" "read_only" {
  name = "read_only"
}

data "cloudtemple_object_storage_role" "maintainer" {
  name = "maintainer"
}

data "cloudtemple_object_storage_role" "admin" {
  name = "admin"
}

# Retrieval of existing storage accounts
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

# ACL for development team (read-only)
resource "cloudtemple_object_storage_acl_entry" "dev_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.dev_account.name
  role            = data.cloudtemple_object_storage_role.read_only.name
}

# ACL for ops team (maintainer)
resource "cloudtemple_object_storage_acl_entry" "ops_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.ops_account.name
  role            = data.cloudtemple_object_storage_role.maintainer.name
}
```

**Available roles**:
- `read_write`: Read and write
- `write_only`: Write only
- `read_only`: Read only
- `maintainer`: Full access

### ACLs direkt im Bucket konfigurieren

**Ziel**: ACLs beim Erstellen des Buckets festlegen.

**Code**:

```hcl
# Retrieval of resources
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

# Bucket with Inline ACLs
resource "cloudtemple_object_storage_bucket" "bucket_with_acl" {
  name        = "bucket-with-inline-acl"
  access_type = "private"
  
  # Define ACLs directly within the bucket
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

**Difference compared to dedicated ACL resources**:
- **Inline**: ACLs defined directly inside the bucket (simpler for static configurations)
- **Dedicated resource**: ACLs managed separately (more flexible, allows independent modifications)

### Datenquellen verwenden

**Ziel**: Metadaten der Buckets abfragen und die Dateien auflisten.

**Code**:

```hcl
# Datenquelle zum Auflisten der Dateien eines Buckets
data "cloudtemple_object_storage_bucket_files" "my_bucket_files" {
  bucket_name = cloudtemple_object_storage_bucket.my_bucket.name
}

# Display all files
output "all_files" {
  value = data.cloudtemple_object_storage_bucket_files.my_bucket_files.files
}

# Filter a specific file
output "specific_file" {
  value = [
    for file in data.cloudtemple_object_storage_bucket_files.my_bucket_files.files :
    file if file.key == "config.json"
  ]
}

# Retrieval of an existing storage account
data "cloudtemple_object_storage_storage_account" "existing_account" {
  name = "production-account"
}

output "account_access_key" {
  value     = data.cloudtemple_object_storage_storage_account.existing_account.access_key_id
  sensitive = true
}
```

### S3-Integration mit dem AWS-Provider

**Ziel**: Verwenden des AWS Providers, um Dateien in den Objektspeicher Cloud Temple hochzuladen.

**Code**:

```hcl
# Erstellung des Kontos und des Buckets

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

# AWS Provider Configuration for Cloud Temple S3
provider "aws" {
  alias  = "cloudtemple_s3"
  region = "eu-west-3"
  
  # Use Cloud Temple credentials
  access_key = cloudtemple_object_storage_storage_account.upload_account.access_key_id
  secret_key = cloudtemple_object_storage_storage_account.upload_account.access_secret_key
  
  # Cloud Temple endpoint
  endpoints {
    s3 = "https://${cloudtemple_object_storage_bucket.upload_bucket.namespace}.s3.fr1.cloud-temple.com"
  }
  
  # Configuration to bypass AWS validation
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}

# Datei hochladen
resource "aws_s3_object" "config_file" {
  provider = aws.cloudtemple_s3

  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = "config/app-config.json"
  source = "./files/app-config.json"
  etag   = filemd5("./files/app-config.json")
}

# Upload von mehreren Dateien
resource "aws_s3_object" "static_files" {
  provider = aws.cloudtemple_s3

  for_each = fileset("./static/", "**/*")

  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = each.value
  source = "./static/${each.value}"
  etag   = filemd5("./static/${each.value}")
}

# Überprüfung der hochgeladenen Dateien
data "cloudtemple_object_storage_bucket_files" "uploaded_files" {
  depends_on  = [aws_s3_object.config_file]
  bucket_name = cloudtemple_object_storage_bucket.upload_bucket.name
}

output "uploaded_files_list" {
  value = data.cloudtemple_object_storage_bucket_files.uploaded_files.files
}
```

## Fazit

Diese Dokumentation behandelt die wichtigsten Anwendungsfälle des Terraform Cloud Temple-Providers. Um weiter zu gehen:

- Konsultieren Sie die [offizielle Provider-Dokumentation](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- Erkunden Sie die [Beispiele auf GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)
- Verwenden Sie die [Cloud Temple-Konsole](https://shiva.cloud-temple.com), um verfügbare Ressourcen zu entdecken

:::info Brauchen Sie Hilfe?
    Bei Fragen oder Problemen schauen Sie in den [Bereich Issues auf GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues) oder kontaktieren Sie den Cloud Temple-Support.
:::
