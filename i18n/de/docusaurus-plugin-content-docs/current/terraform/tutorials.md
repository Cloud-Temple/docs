---
title: Tutorials
---

# Cloud Temple Terraform Tutorials

Diese Seite enthält praktische Tutorials zur Verwendung des Cloud Temple Terraform Providers mit verschiedenen Diensten.

## Inhaltsverzeichnis

- [VMware IaaS](#vmware-iaas)
- [OpenSource IaaS](#opensource-iaas)
- [Objektspeicher](#objektspeicher)

## VMware IaaS

### Eine leere VM erstellen

**Ziel**: Erstellen Sie eine einfache VMware-Virtual Machine ohne Betriebssystem.

**Voraussetzungen**:
- Zugriff auf ein Cloud Temple Rechenzentrum
- Konfigurierte API-Anmeldeinformationen
- Erforderliche Berechtigungen:
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
# Erforderliche Ressourcen abrufen
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"
}

# Leere VM erstellen
resource "cloudtemple_compute_virtual_machine" "empty_vm" {
  name = "vm-empty-01"
  
  # Hardware-Konfiguration
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Hot-Add aktiviert
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Standort
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Gast-Betriebssystem
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
- Hot-Add-Optionen ermöglichen das Hinzufügen von CPU/RAM im laufenden Betrieb

---

### Eine VM aus dem Marketplace erstellen

**Ziel**: Bereitstellen einer VM aus einem Cloud Temple Marketplace-Image.

**Code**:

```hcl
# Marketplace-Element abrufen
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

# Bereitstellung aus dem Marketplace
resource "cloudtemple_compute_virtual_machine" "marketplace_vm" {
  name = "ubuntu-marketplace-01"
  
  # Marketplace-Quelle
  marketplace_item_id = data.cloudtemple_marketplace_item.ubuntu_2404.id
  
  # Konfiguration
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

**Erklärungen**:
- `marketplace_item_id`: Verweist auf ein einsatzbereites Image
- `datastore_id`: Spezifischer Datastore erforderlich für Marketplace-Bereitstellung
- Das Image enthält bereits ein konfiguriertes Betriebssystem

---

### Eine VM aus der Content Library erstellen

**Ziel**: Bereitstellen einer VM aus einer VMware Content Library-Vorlage.

**Code**:

```hcl
# Content Library abrufen
data "cloudtemple_compute_content_library" "public" {
  name = "PUBLIC"
}

# Spezifisches Element abrufen
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

# Bereitstellung aus Content Library
resource "cloudtemple_compute_virtual_machine" "content_library_vm" {
  name = "centos-from-cl-01"
  
  # Content Library-Quelle
  content_library_id      = data.cloudtemple_compute_content_library.public.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.centos.id
  
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.sdrs.id
  datastore_id         = data.cloudtemple_compute_datastore.ds.id
  
  # OS-Festplatten-Konfiguration
  os_disk {
    capacity = 50 * 1024 * 1024 * 1024  # 50 GB
  }
  
  # OS-Netzwerkadapter-Konfiguration
  os_network_adapter {
    network_id = data.cloudtemple_compute_network.vlan.id
  }
  
  tags = {
    source = "content-library"
  }
}
```

**Erklärungen**:
- Die Blöcke `os_disk` und `os_network_adapter` konfigurieren die Vorlagen-Ressourcen
- Diese Blöcke können nur bei der Erstellung verwendet werden (siehe dedizierter Abschnitt)

---

### VMware Cloud-Init konfigurieren

**Ziel**: VM-Konfiguration beim ersten Start mit Cloud-Init automatisieren.

**Voraussetzungen**: Verwenden Sie ein Cloud-Init-kompatibles Image (z.B. Ubuntu Cloud Image im OVF-Format).

**Cloud-Init-Dateien**:

Create `cloud-init/user-data.yml`:

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

Create `cloud-init/network-config.yml`:

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

**Terraform Code**:

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
  
  # Cloud-Init configuration (VMware OVF datasource)
  cloud_init = {
    user-data      = filebase64("./cloud-init/user-data.yml")
    network-config = filebase64("./cloud-init/network-config.yml")
    hostname       = "my-server"
    password       = "RANDOM"
  }
}
```

**Unterstützte Cloud-Init-Schlüssel (VMware)**:
- `user-data`: Hauptkonfiguration (base64)
- `network-config`: Netzwerkkonfiguration (base64)
- `public-keys`: SSH Public Keys
- `hostname`: Hostname
- `password`: Passwort (oder "RANDOM")
- `instance-id`: Eindeutige Kennung
- `seedfrom`: URL der Konfigurationsquelle

:::warning Einschränkung
    Cloud-Init wird nur beim ersten VM-Start ausgeführt.
:::

---

### Eine virtuelle Festplatte erstellen und an eine VM anhängen

**Ziel**: Zusätzlichen Speicher zu einer bestehenden virtuellen Maschine hinzufügen.

**Code**:

```hcl
# Referenz auf eine bestehende VM
data "cloudtemple_compute_virtual_machine" "existing_vm" {
  name = "my-existing-vm"
}

# Virtuelle Festplatte erstellen
resource "cloudtemple_compute_virtual_disk" "data_disk" {
  name = "data-disk-01"
  
  # An VM anhängen
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.existing_vm.id
  
  # Festplattengröße
  capacity = 100 * 1024 * 1024 * 1024  # 100 GB
  
  # Festplattenmodus
  disk_mode = "persistent"
  
  # Bereitstellungstyp
  provisioning_type = "dynamic"
}
```

**Verfügbare Festplattenmodi**:
- `persistent`: Änderungen werden sofort und dauerhaft auf der virtuellen Festplatte gespeichert.
- `independent_nonpersistent`: Änderungen an der virtuellen Festplatte werden in einem Redo-Log gespeichert und beim Ausschalten gelöscht.
- `independent_persistent`: Änderungen werden sofort und dauerhaft auf der virtuellen Festplatte gespeichert. Nicht von Snapshots betroffen.

**Bereitstellungstypen**:
- `dynamic`: Spart Speicherplatz durch dynamische Zuordnung nach Bedarf. Erstellung ist schnell.
- `staticImmediate`: Reserviert den gesamten Festplattenspeicher bei der Erstellung, aber Blöcke werden beim ersten Schreiben genullt.
- `staticDiffered`: Reserviert und nullt den gesamten Festplattenspeicher bei der Erstellung.

---

### Eine Netzwerkschnittstelle erstellen und an eine VM anhängen

**Ziel**: Hinzufügen einer Netzwerkkarte zu einer virtuellen Maschine.

**Code**:

```hcl
# Netzwerk abrufen
data "cloudtemple_compute_network" "production_vlan" {
  name = "PROD-VLAN-100"
}

# VM-Referenz
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Netzwerkadapter erstellen
resource "cloudtemple_compute_network_adapter" "eth1" {
  name = "Network adapter 2"
  
  # Ziel-VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Netzwerk
  network_id = data.cloudtemple_compute_network.production_vlan.id
  
  # Adaptertyp
  type = "VMXNET3"
  
  # Automatisch beim Einschalten verbinden
  connect_on_power_on = true
  
  # MAC-Adresse (optional, wird automatisch generiert, wenn weggelassen)
  # mac_address = "00:50:56:xx:xx:xx"
}
```

:::info Unterstützte Netzwerkadaptertypen
  Die kompatiblen Adaptertypen hängen vom verwendeten OS auf der Virtual Machine und der VMware-Version ab.
:::

---

### Einen virtuellen Controller erstellen und an eine VM anhängen

**Ziel**: Hinzufügen eines Festplatten-Controllers zu einer virtuellen Maschine.

**Code**:

```hcl
# VM-Referenz
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# SCSI-Controller erstellen
resource "cloudtemple_compute_virtual_controller" "scsi_controller" {
  name = "SCSI controller 1"
  
  # Ziel-VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Controller-Typ
  type = "SCSI"
}
```

**Controller-Typen**:
- `USB2`
- `USB3`
- `SCSI`
- `CD/DVD`
- `NVME`
- `PCI`

---

## OpenSource IaaS

### Eine VM aus einer Vorlage erstellen

**Ziel**: Bereitstellen einer virtuellen Maschine aus einer Katalogvorlage.

**Voraussetzungen**:
- Zugriff auf Cloud Temple OpenSource-Infrastruktur
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
# Vorlage abrufen
data "cloudtemple_compute_iaas_opensource_template" "almalinux" {
  name = "AlmaLinux 8"
}

# Host abrufen
data "cloudtemple_compute_iaas_opensource_host" "host" {
  name = "host-01"
}

# Storage-Repository abrufen
data "cloudtemple_compute_iaas_opensource_storage_repository" "sr" {
  name = "sr001-local-storage"
}

# Netzwerk abrufen
data "cloudtemple_compute_iaas_opensource_network" "network" {
  name = "VLAN-100"
}

# Backup-Policy abrufen
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

# VM erstellen
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "openstack_vm" {
  name        = "almalinux-vm-01"
  power_state = "on"
  
  # Quelle
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
  
  # OS-Festplatte (muss zur Vorlage passen)
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 20 * 1024 * 1024 * 1024  # 20 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # OS-Netzwerkadapter
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

**Erklärungen**:
- `high_availability`: Verfügbare Optionen: `disabled`, `restart`, `best-effort` (Siehe [Dokumentation](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) zur Hochverfügbarkeit)
- `boot_firmware`: `bios` oder `uefi`
- `secure_boot`: Nur mit UEFI

---

### Eine VM aus dem Marketplace erstellen

**Ziel**: Bereitstellen einer VM aus dem Cloud Temple Marketplace auf OpenSource IaaS.

**Code**:

```hcl
# Marketplace-Element abrufen
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

# Deploy from Marketplace
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "marketplace_vm" {
  name        = "ubuntu-marketplace-01"
  power_state = "on"
  
  # Marketplace source
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

### Replikation konfigurieren

**Ziel**: Einrichten einer Replikations-Policy für eine VM.

**Code**:

```hcl
data "cloudtemple_compute_iaas_opensource_storage_repository" "replication_target" {
  name               = "target_storage_repository_name"
  machine_manager_id = "availability_zone_id"
}

# Replikations-Policy erstellen
resource "cloudtemple_compute_iaas_opensource_replication_policy" "policy_hourly" {
  name                  = "replication-policy-6h"
  storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.replication_target.id

  interval {
    hours = 1
  }
}

# Mit einer VM verknüpfen
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "replicated_vm" {
  name = "replicated-vm-01"
  
  # ... Standardkonfiguration ...
  
  # Replikations-Policy zuweisen
  replication_policy_id = cloudtemple_compute_iaas_opensource_replication_policy.policy_hourly.id
}
```

**Erklärungen**:
- `interval`: Replikationsintervall. Kann in `minutes` oder `hours` angegeben werden
- `storage_repository_id`: Storage Repository, in das VM-Festplatten repliziert werden. Muss sich in einer anderen AZ als die Original-VM befinden

---

### Backup konfigurieren

**Ziel**: Eine Backup-Policy auf eine VM anwenden.

**Code**:

```hcl
# Backup-Policies abrufen
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

data "cloudtemple_backup_iaas_opensource_policy" "weekly" {
  name = "weekly-backup"
}

# VM mit mehreren Backup-Policies
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "backup_vm" {
  name = "important-vm-01"
  
  # ... Standardkonfiguration ...
  
  # Mehrere Policies können angewendet werden
  backup_sla_policies = [
    data.cloudtemple_backup_iaas_opensource_policy.daily.id,
    data.cloudtemple_backup_iaas_opensource_policy.weekly.id,
  ]
}
```

:::info Obligatorisches Backup
    In einer SecNumCloud-Umgebung muss mindestens eine Backup-Policy definiert werden, um die VM zu starten.
:::

---

### Hochverfügbarkeit konfigurieren

**Ziel**: HA-Verhalten einer virtuellen Maschine konfigurieren.

**Code**:

```hcl
# VM mit deaktivierter HA
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

# VM mit Best-Effort
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "besteff_ha" {
  name              = "test-vm-01"
  high_availability = "best-effort"
  # ...
}
```

**Verfügbare HA-Modi**:

Siehe Dokumentation zur [Hochverfügbarkeit](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) in der OpenSource-Infrastruktur

| Modus | Beschreibung | Verwendung |
|------|-------------|-------|
| `disabled` | Keine HA | Entwicklungsumgebungen |
| `restart` | Neustart mit hoher Priorität | Kritische Produktion |
| `best-effort` | Neustart wenn Ressourcen verfügbar | Standard-Produktion |

---

### OpenSource Cloud-Init konfigurieren

**Ziel**: Konfiguration mit Cloud-Init automatisieren (NoCloud datasource).

**Voraussetzungen**: Cloud-Init NoCloud kompatibles Image.

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
         via:: 0.0.0.0
     nameservers:
       addresses:
         - 0.0.0.0
```

:::important Hinweis
  Passen Sie die Cloud-Init-Konfiguration an Ihre Bedürfnisse und die auf Ihrer Maschine installierte Cloud-Init-Version an. Format und Syntax können je nach Version variieren.
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
  
  # Cloud-Init configuration (NoCloud datasource)
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
- OpenSource verwendet die **NoCloud** Datenquelle
- Unterstützte Schlüssel: `cloud_config` und `network_config`
- Kein `filebase64()`, verwenden Sie direkt `file()`

---

### os_disk und os_network_adapter verstehen

Die Blöcke `os_disk` und `os_network_adapter` sind spezielle Blöcke, die **nur während der Erstellung** einer virtuellen Maschine verwendet werden können aus:

- Content Library
- Vorlage
- Cloud Temple Marketplace
- Klon einer bestehenden VM

:::info Info
  Sie werden verwendet, um virtuelle Festplatten und Netzwerkadapter zu referenzieren, die von der Vorlage bereitgestellt werden, um deren Parameter später ändern zu können, ohne sie manuell importieren zu müssen. Sie erstellen in keiner Weise eine neue Ressource.
:::

**Wichtige Merkmale**:

1. **Nur bei Erstellung**: Diese Blöcke können nur während des ersten `terraform apply` definiert werden
2. **Alternative**: Verwenden Sie den Befehl `terraform import`, um sie manuell zu importieren

---

### os_disk verwenden

**VMware IaaS**:

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_os_disk" {
  name = "vm-content-library"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configure the existing OS disk in the template
  os_disk {
    capacity = 100 * 1024 * 1024 * 1024  # Resize to 100 GB
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
  
  # OS disk configuration
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 50 * 1024 * 1024 * 1024  # 50 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # ... other configurations
}
```

---

### Using os_network_adapter

**VMware IaaS**:

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_network" {
  name = "vm-with-network"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configure the template network adapter
  os_network_adapter {
    network_id   = data.cloudtemple_compute_network.vlan.id
    auto_connect = true
    connected    = true
    mac_address  = "00:50:56:12:34:56"  # Optional
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
  
  # Network adapter configuration
  os_network_adapter {
    network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
    mac_address     = "c2:db:4f:15:41:3e"  # Optional
    tx_checksumming = true
    attached        = true
  }
  
  # ... other configurations
}
```

:::info Hinweis
  Sie können beide Ansätze kombinieren, indem Sie die Festplatten und/oder Netzwerkadapter einer VM referenzieren und weitere über die Ressourcen `cloudtemple_compute_iaas_vmware/opensource_virtual_disk` und `cloudtemple_compute_iaas_vmware/opensource_network_adapter` hinzufügen
:::

---

**Best Practices**:
1. Verwenden Sie `os_disk` und `os_network_adapter` für die anfängliche Vorlagenkonfiguration
2. Verwenden Sie dedizierte Ressourcen, um zusätzliche Ressourcen hinzuzufügen

---

## Objektspeicher

### Einen Bucket erstellen

**Ziel**: Einen S3-kompatiblen Objektspeicher-Bucket erstellen.

**Voraussetzungen**: `object-storage_write` Berechtigung

**Code**:

```hcl
# Privater Bucket
resource "cloudtemple_object_storage_bucket" "private_bucket" {
  name        = "my-private-bucket"
  access_type = "private"
}

# Öffentlicher Bucket
resource "cloudtemple_object_storage_bucket" "public_bucket" {
  name        = "my-public-bucket"
  access_type = "public"
}

# Bucket mit benutzerdefiniertem Zugriff (IP-Whitelist)
resource "cloudtemple_object_storage_bucket" "custom_bucket" {
  name        = "my-custom-bucket"
  access_type = "custom"
  
  # IP/CIDR-Whitelist
  whitelist = [
    "10.0.0.0/8",
    "192.168.1.0/24",
    "203.0.113.42/32"
  ]
}

# Bucket mit aktivierter Versionierung
resource "cloudtemple_object_storage_bucket" "versioned_bucket" {
  name        = "my-versioned-bucket"
  access_type = "private"
  versioning  = "Enabled"
}

# Nützliche Outputs
output "bucket_endpoint" {
  value = cloudtemple_object_storage_bucket.private_bucket.endpoint
}

output "bucket_namespace" {
  value = cloudtemple_object_storage_bucket.private_bucket.namespace
}
```

**Zugriffstypen**:
- `private`: Zugriff beschränkt auf Tenant-IP-Adressen
- `public`: Öffentlicher Lesezugriff
- `custom`: Zugriff beschränkt auf Whitelist-IPs

**Versionierung**:
- `Enabled`: Aktiviert Objektversionierung
- `Suspended`: Pausiert Versionierung (behält bestehende Versionen)

---

### Ein Storage-Konto erstellen

**Ziel**: Ein Storage-Konto mit S3-Anmeldeinformationen erstellen.

**Code**:

```hcl
# Storage-Konto erstellen
resource "cloudtemple_object_storage_storage_account" "app_account" {
  name = "application-storage-account"
}

# Outputs zur Verwendung der Anmeldeinformationen
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

:::warning Sensible Informationen
    Anmeldeinformationen werden nur einmal angezeigt. Speichern Sie sie sicher (z.B. HashiCorp Vault, AWS Secrets Manager).
:::

---

### ACLs über dedizierte Ressource erstellen

**Ziel**: Bucket-Zugriffsberechtigungen mit ACLs verwalten.

**Code**:

```hcl
# Verfügbare Rollen abrufen
data "cloudtemple_object_storage_role" "read_only" {
  name = "read_only"
}

data "cloudtemple_object_storage_role" "maintainer" {
  name = "maintainer"
}

data "cloudtemple_object_storage_role" "admin" {
  name = "admin"
}

# Bestehende Storage-Konten abrufen
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

# ACL für Dev-Team (nur Lesen)
resource "cloudtemple_object_storage_acl_entry" "dev_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.dev_account.name
  role            = data.cloudtemple_object_storage_role.read_only.name
}

# ACL für Ops-Team (Maintainer)
resource "cloudtemple_object_storage_acl_entry" "ops_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.ops_account.name
  role            = data.cloudtemple_object_storage_role.maintainer.name
}
```

**Verfügbare Rollen**:
- `read_write`: Lesen und Schreiben
- `write_only`: Nur Schreiben
- `read_only`: Nur Lesen
- `maintainer`: Vollzugriff

---

### ACLs direkt im Bucket konfigurieren

**Ziel**: ACLs beim Erstellen des Buckets definieren.

**Code**:

```hcl
# Ressourcen abrufen
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

# Bucket mit Inline-ACLs
resource "cloudtemple_object_storage_bucket" "bucket_with_acl" {
  name        = "bucket-with-inline-acl"
  access_type = "private"
  
  # ACL-Definition im Bucket
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

**Unterschied zu dedizierten ACL-Ressourcen**:
- **Inline**: ACLs direkt im Bucket definiert (einfacher für statische Konfigurationen)
- **Dedizierte Ressource**: ACLs separat verwaltet (flexibler, ermöglicht unabhängige Änderungen)

---

### Datasources verwenden

**Ziel**: Bucket-Metadaten abfragen und Dateien auflisten.

**Code**:

```hcl
# Datasource zum Auflisten von Bucket-Dateien
data "cloudtemple_object_storage_bucket_files" "my_bucket_files" {
  bucket_name = cloudtemple_object_storage_bucket.my_bucket.name
}

# Alle Dateien anzeigen
output "all_files" {
  value = data.cloudtemple_object_storage_bucket_files.my_bucket_files.files
}

# Bestimmte Datei filtern
output "specific_file" {
  value = [
    for file in data.cloudtemple_object_storage_bucket_files.my_bucket_files.files :
    file if file.key == "config.json"
  ]
}

# Bestehendes Storage-Konto abrufen
data "cloudtemple_object_storage_storage_account" "existing_account" {
  name = "production-account"
}

output "account_access_key" {
  value     = data.cloudtemple_object_storage_storage_account.existing_account.access_key_id
  sensitive = true
}
```

---

### S3-Integration mit AWS Provider

**Ziel**: AWS Provider verwenden, um Dateien in Cloud Temple Objektspeicher hochzuladen.

**Code**:

```hcl
# Konto und Bucket erstellen
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

# AWS Provider für Cloud Temple S3 konfigurieren
provider "aws" {
  alias  = "cloudtemple_s3"
  region = "eu-west-3"
  
  # Cloud Temple Anmeldeinformationen verwenden
  access_key = cloudtemple_object_storage_storage_account.upload_account.access_key_id
  secret_key = cloudtemple_object_storage_storage_account.upload_account.access_secret_key
  
  # Cloud Temple Endpoint
  endpoints {
    s3 = "https://${cloudtemple_object_storage_bucket.upload_bucket.namespace}.s3.fr1.cloud-temple.com"
  }
  
  # Konfiguration zum Überspringen der AWS-Validierung
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

# Mehrere Dateien hochladen
resource "aws_s3_object" "static_files" {
  provider = aws.cloudtemple_s3
  
  for_each = fileset("./static/", "**/*")
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = each.value
  source = "./static/${each.value}"
  etag   = filemd5("./static/${each.value}")
}

# Hochgeladene Dateien überprüfen
data "cloudtemple_object_storage_bucket_files" "uploaded_files" {
  depends_on  = [aws_s3_object.config_file]
  bucket_name = cloudtemple_object_storage_bucket.upload_bucket.name
}

output "uploaded_files_list" {
  value = data.cloudtemple_object_storage_bucket_files.uploaded_files.files
}
```

---

## Fazit

Diese Dokumentation deckt die wichtigsten Anwendungsfälle des Cloud Temple Terraform Providers ab. Um weiterzugehen:

- Siehe die [offizielle Provider-Dokumentation](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- Erkunden Sie die [Beispiele auf GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)
- Verwenden Sie die [Cloud Temple Console](https://shiva.cloud-temple.com), um verfügbare Ressourcen zu identifizieren

:::info Benötigen Sie Hilfe?
    Bei Fragen oder Problemen siehe den [Issues-Bereich auf GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues) oder kontaktieren Sie den Cloud Temple Support.
:::
