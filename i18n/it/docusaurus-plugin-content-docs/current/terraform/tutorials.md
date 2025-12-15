---
title: Tutorial
---

# Terraform Cloud Temple Tutorials

This page gathers practical tutorials for using the Terraform Cloud Temple provider with various services.

## Sommario

- [IaaS VMware](#iaas-vmware)
- [IaaS OpenSource](#iaas-opensource)
- [Archiviazione oggetto](#stockage-oggetto)

## IaaS VMware

### Creare una VM vuota

**Obiettivo**: Creare una macchina virtuale VMware di base senza sistema operativo.

**Prerequisiti**:
- Accesso a un datacenter Cloud Temple
- Credenziali API configurate
- Diritti necessari
  - `compute_iaas_vmware_read`
  - `compute_iaas_vmware_management`
  - `compute_iaas_vmware_virtual_machine_power`
  - `compute_iaas_vmware_infrastructure_read`
  - `backup_iaas_vmware_read`
  - `backup_iaas_vmware_write`
  - `activity_read`
  - `tag_read`
  - `tag_write`

**Codice**:

```hcl
# Recupero delle risorse necessarie
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"
}

# Creazione di una VM vuota
resource "cloudtemple_compute_virtual_machine" "empty_vm" {
  name = "vm-empty-01"
  
  # Configurazione hardware
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Hot-add abilitato
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Posizione
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Sistema operativo guest
  guest_operating_system_moref = "ubuntu64Guest"
  
  tags = {
    environment = "demo"
    created_by  = "terraform"
  }
}
```

**Spiegazioni** :
- `guest_operating_system_moref` : definisce il tipo di OS per i driver VMware Tools
- La VM viene creata senza disco né rete (da aggiungere separatamente)
- Le opzioni hot-add permettono di aggiungere CPU/RAM in modalità dinamica

### Creare una VM dalla Marketplace

**Obiettivo**: Distribuire una VM utilizzando un'immagine della Marketplace Cloud Temple.

**Codice**:

```hcl
# Retrieval of an item from the Marketplace
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

### Creare una VM dalla Content Library

**Obiettivo**: Distribuire una VM a partire da un modello della Content Library VMware.

**Codice**:

```hcl
# Recupero della Content Library
data "cloudtemple_compute_content_library" "public" {
  name = "PUBBLICA"
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

### Configurare Cloud-Init VMware

**Obiettivo**: Automatizzare la configurazione di una VM al primo avvio con Cloud-Init.

**Prerequisiti**: Utilizzare un'immagine compatibile con Cloud-Init (es: Ubuntu Cloud Image in formato OVF).

**File Cloud-Init**:

Crea `cloud-init/user-data.yml`:

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

Crea `cloud-init/network-config.yml`:

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

**Codice Terraform**:

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
  
  # Configurazione Cloud-Init (fonte OVF VMware)
  cloud_init = {
    user-data      = filebase64("./cloud-init/user-data.yml")
    network-config = filebase64("./cloud-init/network-config.yml")
    hostname       = "my-server"
    password       = "RANDOM"
  }
}
```

**Chiavi Cloud-Init supportate (VMware)**:
- `user-data`: Configurazione principale (base64)
- `network-config`: Configurazione di rete (base64)
- `public-keys`: Chiavi SSH pubbliche
- `hostname`: Nome host
- `password`: Password (oppure "RANDOM")
- `instance-id`: Identificativo univoco
- `seedfrom`: URL della fonte di configurazione

:::warning Limitazione
    Cloud-Init viene eseguito solo al primo avvio della VM.
:::

### Creare un disco virtuale e collegarlo a una VM

**Obiettivo**: Aggiungere spazio di archiviazione aggiuntivo a una macchina virtuale esistente.

**Codice**:

```hcl
# Riferimento a una VM esistente
data "cloudtemple_compute_virtual_machine" "existing_vm" {
  name = "my-existing-vm"
}

# Creazione di un disco virtuale
resource "cloudtemple_compute_virtual_disk" "data_disk" {
  name = "data-disk-01"
  
  # Collegamento alla VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.existing_vm.id
  
  # Dimensione del disco
  capacity = 100 * 1024 * 1024 * 1024  # 100 GB
  
  # Modalità del disco
  disk_mode = "persistent"
  
  # Tipo di provisioning
  provisioning_type = "dynamic"
}
```

**Modalità di disco disponibili**:
- `persistent`: Le modifiche vengono immediatamente e definitivamente salvate sul disco virtuale.
- `independent_nonpersistent`: Le modifiche apportate al disco virtuale vengono registrate in un log di ripristino e cancellate all'accensione.
- `independent_persistent`: Le modifiche vengono immediatamente e definitivamente salvate sul disco virtuale. Non influenzate dai snapshot.

**Tipi di provisioning**:
- `dynamic`: Risparmia spazio di archiviazione allocando lo spazio in modo dinamico in base alle esigenze. La creazione è rapida.
- `staticImmediate`: Alloca tutto lo spazio del disco durante la creazione, ma i blocchi vengono azzerati al primo scrittura.
- `staticDiffered`: Alloca e azzeri tutto lo spazio del disco durante la creazione.

### Creare un'interfaccia di rete e collegarla a una VM

**Obiettivo**: Aggiungere una scheda di rete a una macchina virtuale.

**Codice**:

```hcl
# Recupero della rete
data "cloudtemple_compute_network" "production_vlan" {
  name = "PROD-VLAN-100"
}

# Reference to the VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Creation of a network adapter
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
:::info Supported network adapter types
  The compatible adapter types that can be used depend on the OS running on the virtual machine as well as the version of VMware.
:::

---

### Creare un controller virtuale e collegarlo a una VM

**Obiettivo**: Aggiungere un controller del disco a una macchina virtuale.

**Codice**:

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

### Creare una VM da un template

**Obiettivo**: Distribuire una macchina virtuale a partire da un template del catalogo.

**Prerequisiti**:
- Accesso all'infrastruttura OpenSource Cloud Temple
- Diritti necessari:
  - `compute_iaas_opensource_read`
  - `compute_iaas_opensource_management`
  - `compute_iaas_opensource_virtual_machine_power`
  - `compute_iaas_opensource_infrastructure_read`
  - `backup_iaas_opensource_read`
  - `backup_iaas_opensource_write`
  - `activity_read`
  - `tag_read`
  - `tag_write`

**Codice**:

```hcl
# Recupero di un modello
data "cloudtemple_compute_iaas_opensource_template" "almalinux" {
  name = "AlmaLinux 8"
}

# Host retrieval
data "cloudtemple_compute_iaas_opensource_host" "host" {
  name = "host-01"
}

# Recupero del repository di storage
data "cloudtemple_compute_iaas_opensource_storage_repository" "sr" {
  name = "sr001-local-storage"
}

# Recupero della rete
data "cloudtemple_compute_iaas_opensource_network" "network" {
  name = "VLAN-100"
}

# Recupero della politica di backup
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

# Creazione della VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "openstack_vm" {
  name        = "almalinux-vm-01"
  power_state = "on"
  
  # Origine
  template_id = data.cloudtemple_compute_iaas_opensource_template.almalinux.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  # Configurazione hardware
  memory               = 8 * 1024 * 1024 * 1024  # 8 GB
  cpu                  = 4
  num_cores_per_socket = 2
  
  # Opzioni
  boot_firmware     = "uefi"
  secure_boot       = false
  auto_power_on     = true
  high_availability = "best-effort"
  
  # Disco OS (deve corrispondere al template)
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 20 * 1024 * 1024 * 1024  # 20 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # Adattatore di rete OS
  os_network_adapter {
    network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
    tx_checksumming = true
    attached        = true
  }
  
  # Backup
  backup_sla_policies = [
    data.cloudtemple_backup_iaas_opensource_policy.daily.id
  ]
  
  # Ordine di avvio
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

**Spiegazioni** :
- `high_availability` : Opzioni disponibili: `disabled`, `restart`, `best-effort` (vedi [documentazione](https://docs.cloud-temple.com/iaas_opensource/concepts#alta-disponibilita) sull'Alta Disponibilità)
- `boot_firmware` : `bios` o `uefi`
- `secure_boot` : Disponibile solo con UEFI

### Creare una VM dalla Marketplace

**Obiettivo**: Distribuire una VM dalla Marketplace Cloud Temple sul IaaS OpenSource.

**Codice**:

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

### Configurare la replica

**Obiettivo**: Implementare una politica di replica per una VM.

**Codice**:

```hcl
data "cloudtemple_compute_iaas_opensource_storage_repository" "replication_target" {
  name               = "target_storage_repository_name"
  machine_manager_id = "availability_zone_id"
}

# Creazione di una politica di replica
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
- `storage_repository_id`: Storage Repository to which the VM's disks will be replicated. Must be located in a different AZ than the original VM.

### Configurare il Backup

**Obiettivo** : Applicare una politica di backup a una VM.

**Codice** :

```hcl
# Recovery of backup policies
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

data "cloudtemple_backup_iaas_opensource_policy" "weekly" {
  name = "weekly-backup"
}

# VM with multiple backup policies
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

:::info Mandatory backup
    In a SecNumCloud environment, at least one backup policy must be defined in order to start the VM.
:::
---

### Configurare l'Alta Disponibilità

**Obiettivo**: Configurare il comportamento HA di una macchina virtuale.

**Codice**:

```hcl
# VM con HA disabilitata
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "no_ha" {
  name              = "dev-vm-01"
  high_availability = "disabled"
  # ...
}

# VM con riavvio prioritario
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

**Modalità HA disponibili**:

Consulta la documentazione sulla [Alta Disponibilità](https://docs.cloud-temple.com/iaas_opensource/concepts#alta-disponibilit%C3%A0) nell'infrastruttura OpenSource

| Modalità | Descrizione | Utilizzo |
|--------|-------------|----------|
| `disabled` | Nessuna HA | Ambienti di sviluppo |
| `restart` | Riavvio ad alta priorità | Produzione critica |
| `best-effort` | Riavvio se risorse disponibili | Produzione standard |

### Configurare Cloud-Init OpenSource

**Obiettivo**: Automatizzare la configurazione con Cloud-Init (fonte dati NoCloud).

**Prerequisiti**: Immagine compatibile con Cloud-Init NoCloud.

**File Cloud-Init**:

Crea `cloud-init/cloud-config.yml`:

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

Crea `cloud-init/network-config.yml`:

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

:::important Da notare
  Adatta la configurazione Cloud-Init alle tue esigenze e alla versione di Cloud-Init installata sulla tua macchina. Il formato e la sintassi possono variare in base alle versioni.
:::

**Codice Terraform**:

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
  
  # Configurazione Cloud-Init (fonte dati NoCloud)
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

**Differenza con VMware**:
- OpenSource utilizza la fonte dati **NoCloud**
- Chiavi supportate: `cloud_config` e `network_config`
- Non è necessario `filebase64()`, utilizzare direttamente `file()`

### Comprendere os_disk e os_network_adapter

I blocchi `os_disk` e `os_network_adapter` sono blocchi speciali utilizzabili **esclusivamente durante la creazione** di una macchina virtuale a partire da:

- Content Library  
- Template  
- Marketplace Cloud Template  
- Clonazione di una VM esistente  

:::info info  
Servono per fare riferimento ai dischi virtuali e agli adapter di rete distribuiti dal template, in modo da poterne modificare i parametri in un secondo momento senza doverli importare manualmente. Non creano in alcun modo una nuova risorsa.  
:::

**Caratteristiche importanti**:

1. **Creazione solo iniziale**: questi blocchi possono essere definiti solo durante il primo `terraform apply`  
3. **Alternativa**: utilizzare il comando `terraform import` per importarli manualmente

### Utilizzare os_disk

**IaaS VMware** :

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_os_disk" {
  name = "vm-content-library"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configurazione del disco OS esistente nel modello
  os_disk {
    capacity = 100 * 1024 * 1024 * 1024  # Ridimensionare a 100 GB
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
  
  # Configurazione del disco OS
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 50 * 1024 * 1024 * 1024  # 50 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # ... altre configurazioni
}
```

### Utilizzare os_network_adapter

**IaaS VMware** :

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_network" {
  name = "vm-with-network"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configurazione dell'adattatore di rete del template
  os_network_adapter {
    network_id   = data.cloudtemple_compute_network.vlan.id
    auto_connect = true
    connected    = true
    mac_address  = "00:50:56:12:34:56"  # Opzionale
  }
}
```

**IaaS OpenSource** :

```hcl
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "vm_with_network" {
  name = "openiaas-vm-network"
  
  template_id = data.cloudtemple_compute_iaas_opensource_template.template.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  memory               = 4 * 1024 * 1024 * 1024
  cpu                  = 2
  num_cores_per_socket = 2
  power_state          = "on"
  
  # Configurazione dell'adattatore di rete
  os_network_adapter {
    network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
    mac_address     = "c2:db:4f:15:41:3e"  # Opzionale
    tx_checksumming = true
    attached        = true
  }
  
  # ... altre configurazioni
}
```

:::info Da notare
  È possibile combinare entrambe le approcci facendo riferimento ai dischi e/o agli adattatori di rete di una VM e aggiungendone altri tramite le risorse `cloudtemple_compute_iaas_vmware/opensource_virtual_disk` e `cloudtemple_compute_iaas_vmware/opensource_network_adapter`
:::

---

**Pratiche consigliate** :
1. Utilizza `os_disk` e `os_network_adapter` per la configurazione iniziale del template
2. Utilizza le risorse dedicate per aggiungere risorse aggiuntive

## Archiviazione oggetti

### Creare un bucket

**Obiettivo**: Creare un bucket di archiviazione oggetti compatibile con S3.

**Prerequisiti**: Diritti `object-storage_write`

**Codice**:

```hcl
# Bucket privato
resource "cloudtemple_object_storage_bucket" "private_bucket" {
  name        = "my-private-bucket"
  access_type = "private"
}

# Bucket pubblico
resource "cloudtemple_object_storage_bucket" "public_bucket" {
  name        = "my-public-bucket"
  access_type = "public"
}

# Bucket with custom access (IP whitelist)
resource "cloudtemple_object_storage_bucket" "custom_bucket" {
  name        = "my-custom-bucket"
  access_type = "custom"
  
  # IP/CIDR whitelist
  whitelist = [
    "10.0.0.0/8",
    "192.168.1.0/24",
    "203.0.113.42/32"
  ]
}

# Bucket con versioning abilitato
resource "cloudtemple_object_storage_bucket" "versioned_bucket" {
  name        = "my-versioned-bucket"
  access_type = "private"
  versioning  = "Enabled"
}

# Output utili
output "bucket_endpoint" {
  value = cloudtemple_object_storage_bucket.private_bucket.endpoint
}

output "bucket_namespace" {
  value = cloudtemple_object_storage_bucket.private_bucket.namespace
}
```

**Tipi di accesso**:
- `private`: Accesso limitato agli indirizzi IP del tenant
- `public`: Accesso pubblico in lettura
- `custom`: Accesso limitato agli IP della whitelist

**Versioning**:
- `Enabled`: Abilita il versioning degli oggetti
- `Suspended`: Sospende il versioning (conserva le versioni esistenti)

### Creare un account di archiviazione

**Obiettivo**: Creare un account di archiviazione con credenziali S3.

**Codice**:

```hcl
# Creazione di un account di archiviazione
resource "cloudtemple_object_storage_storage_account" "app_account" {
  name = "application-storage-account"
}

# Output per utilizzare le credenziali
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

:::warning Informazioni sensibili
    Le credenziali vengono visualizzate una sola volta. Memorizzarle in modo sicuro (ad esempio: HashiCorp Vault, AWS Secrets Manager).
:::
---

### Creare ACL tramite risorsa dedicata

**Obiettivo** : Gestire i permessi di accesso ai bucket con le ACL.

**Codice** :

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

# Recupero di account di archiviazione esistenti
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

# ACL per il team dev (lettura sola)
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

### Configurare le ACL direttamente nel bucket

**Obiettivo** : Definire le ACL durante la creazione del bucket.

**Codice** :

```hcl
# Recupero delle risorse
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

# Bucket con ACL integrate
resource "cloudtemple_object_storage_bucket" "bucket_with_acl" {
  name        = "bucket-with-inline-acl"
  access_type = "private"
  
  # Definizione delle ACL all'interno del bucket
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

**Differenza rispetto alle risorse ACL dedicate**:
- **Inline**: ACL definite direttamente nel bucket (più semplice per configurazioni statiche)
- **Risorsa dedicata**: ACL gestite separatamente (più flessibili, permettono modifiche indipendenti)

### Utilizzare i datasource

**Obiettivo**: Interrogare i metadati dei bucket e elencare i file.

**Codice**:

```hcl
# Datasource per elenco dei file di un bucket
data "cloudtemple_object_storage_bucket_files" "my_bucket_files" {
  bucket_name = cloudtemple_object_storage_bucket.my_bucket.name
}

# Mostra tutti i file
output "all_files" {
  value = data.cloudtemple_object_storage_bucket_files.my_bucket_files.files
}

# Filtrare un file specifico
output "specific_file" {
  value = [
    for file in data.cloudtemple_object_storage_bucket_files.my_bucket_files.files :
    file if file.key == "config.json"
  ]
}

# Recupero di un account di archiviazione esistente
data "cloudtemple_object_storage_storage_account" "existing_account" {
  name = "production-account"
}

output "account_access_key" {
  value     = data.cloudtemple_object_storage_storage_account.existing_account.access_key_id
  sensitive = true
}
```

### Integrazione S3 con il provider AWS

**Obiettivo**: Utilizzare il provider AWS per caricare file nel servizio di archiviazione oggetti Cloud Temple.

**Codice**:

```hcl
# Creazione del account e del bucket
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

# Configurazione del provider AWS per Cloud Temple S3
provider "aws" {
  alias  = "cloudtemple_s3"
  region = "eu-west-3"
  
  # Utilizzo delle credenziali Cloud Temple
  access_key = cloudtemple_object_storage_storage_account.upload_account.access_key_id
  secret_key = cloudtemple_object_storage_storage_account.upload_account.access_secret_key
  
  # Endpoint Cloud Temple
  endpoints {
    s3 = "https://${cloudtemple_object_storage_bucket.upload_bucket.namespace}.s3.fr1.cloud-temple.com"
  }
  
  # Configurazione per evitare la convalida AWS
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}

# Caricamento di un file
resource "aws_s3_object" "config_file" {
  provider = aws.cloudtemple_s3
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = "config/app-config.json"
  source = "./files/app-config.json"
  etag   = filemd5("./files/app-config.json")
}

# Caricamento di più file
resource "aws_s3_object" "static_files" {
  provider = aws.cloudtemple_s3

  for_each = fileset("./static/", "**/*")

  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = each.value
  source = "./static/${each.value}"
  etag   = filemd5("./static/${each.value}")
}

# Verifica dei file caricati
data "cloudtemple_object_storage_bucket_files" "uploaded_files" {
  depends_on  = [aws_s3_object.config_file]
  bucket_name = cloudtemple_object_storage_bucket.upload_bucket.name
}

output "uploaded_files_list" {
  value = data.cloudtemple_object_storage_bucket_files.uploaded_files.files
}
```

## Conclusione

Questa documentazione copre i principali casi d'uso del provider Terraform Cloud Temple. Per approfondire:

- Consulta la [documentazione ufficiale del provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- Esplora gli [esempi su GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)
- Utilizza la [Console Cloud Temple](https://shiva.cloud-temple.com) per identificare le risorse disponibili

:::info Serve aiuto?
    Per qualsiasi domanda o problema, consulta la [sezione Issues su GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues) o contatta il supporto Cloud Temple.
:::
