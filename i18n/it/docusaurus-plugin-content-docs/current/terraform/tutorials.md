---
title: Tutorials
---

# Tutorial Terraform di Cloud Temple

Questa pagina contiene tutorial pratici per utilizzare il provider Terraform di Cloud Temple con diversi servizi.

## Sommario

- [VMware IaaS](#vmware-iaas)
- [OpenSource IaaS](#opensource-iaas)
- [Object Storage](#object-storage)

## VMware IaaS

### Creare una VM Vuota

**Obiettivo**: Creare una macchina virtuale VMware di base senza sistema operativo.

**Prerequisiti**:
- Accesso a un datacenter di Cloud Temple
- Credenziali API configurate
- Permessi richiesti:
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
# Recuperare le risorse richieste
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"
}

# Creare una VM vuota
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

**Spiegazioni**:
- `guest_operating_system_moref`: Definisce il tipo di SO per i driver VMware Tools
- La VM viene creata senza disco o rete (da aggiungere separatamente)
- Le opzioni hot-add permettono di aggiungere CPU/RAM al volo

---

### Creare una VM dal Marketplace

**Obiettivo**: Distribuire una VM da un'immagine del Marketplace di Cloud Temple.

**Codice**:

```hcl
# Recuperare un elemento del Marketplace
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

# Distribuire dal Marketplace
resource "cloudtemple_compute_virtual_machine" "marketplace_vm" {
  name = "ubuntu-marketplace-01"
  
  # Origine Marketplace
  marketplace_item_id = data.cloudtemple_marketplace_item.ubuntu_2404.id
  
  # Configurazione
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

**Spiegazioni**:
- `marketplace_item_id`: Fa riferimento a un'immagine pronta all'uso
- `datastore_id`: Datastore specifico richiesto per la distribuzione dal Marketplace
- L'immagine include già un sistema operativo configurato

---

### Creare una VM dalla Content Library

**Obiettivo**: Distribuire una VM da un template della Content Library VMware.

**Codice**:

```hcl
# Recuperare la Content Library
data "cloudtemple_compute_content_library" "public" {
  name = "PUBLIC"
}

# Recuperare un elemento specifico
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

# Distribuire dalla Content Library
resource "cloudtemple_compute_virtual_machine" "content_library_vm" {
  name = "centos-from-cl-01"
  
  # Origine Content Library
  content_library_id      = data.cloudtemple_compute_content_library.public.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.centos.id
  
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.sdrs.id
  datastore_id         = data.cloudtemple_compute_datastore.ds.id
  
  # Configurazione disco SO
  os_disk {
    capacity = 50 * 1024 * 1024 * 1024  # 50 GB
  }
  
  # Configurazione adattatore di rete SO
  os_network_adapter {
    network_id = data.cloudtemple_compute_network.vlan.id
  }
  
  tags = {
    source = "content-library"
  }
}
```

**Spiegazioni**:
- I blocchi `os_disk` e `os_network_adapter` configurano le risorse del template
- Questi blocchi possono essere utilizzati solo al momento della creazione (vedere sezione dedicata)

---

### Configurare Cloud-Init VMware

**Obiettivo**: Automatizzare la configurazione della VM al primo avvio con Cloud-Init.

**Prerequisiti**: Utilizzare un'immagine compatibile con Cloud-Init (ad es., Ubuntu Cloud Image in formato OVF).

**File Cloud-Init**:

Creare `cloud-init/user-data.yml`:

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

Creare `cloud-init/network-config.yml`:

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
  
  # Configurazione Cloud-Init (datasource OVF VMware)
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
- `public-keys`: Chiavi pubbliche SSH
- `hostname`: Nome host
- `password`: Password (o "RANDOM")
- `instance-id`: Identificatore univoco
- `seedfrom`: URL origine configurazione

:::warning Limitazione
    Cloud-Init viene eseguito solo al primo avvio della VM.
:::

---

### Creare un disco virtuale e collegarlo a una VM

**Obiettivo**: Aggiungere storage aggiuntivo a una macchina virtuale esistente.

**Codice**:

```hcl
# Fare riferimento a una VM esistente
data "cloudtemple_compute_virtual_machine" "existing_vm" {
  name = "my-existing-vm"
}

# Creare un disco virtuale
resource "cloudtemple_compute_virtual_disk" "data_disk" {
  name = "data-disk-01"
  
  # Collegare alla VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.existing_vm.id
  
  # Dimensione disco
  capacity = 100 * 1024 * 1024 * 1024  # 100 GB
  
  # Modalità disco
  disk_mode = "persistent"
  
  # Tipo di provisioning
  provisioning_type = "dynamic"
}
```

**Modalità disco disponibili**:
- `persistent`: Le modifiche vengono salvate immediatamente e permanentemente sul disco virtuale.
- `independent_nonpersistent`: Le modifiche apportate al disco virtuale vengono salvate in un log di ripristino ed eliminate allo spegnimento.
- `independent_persistent`: Le modifiche vengono salvate immediatamente e permanentemente sul disco virtuale. Non sono influenzate dagli snapshot.

**Tipi di provisioning**:
- `dynamic`: Risparmia spazio di storage allocando dinamicamente lo spazio secondo necessità. La creazione è veloce.
- `staticImmediate`: Alloca tutto lo spazio disco alla creazione, ma i blocchi vengono azzerati alla prima scrittura.
- `staticDiffered`: Alloca e azzera tutto lo spazio disco alla creazione.

---

### Creare un'interfaccia di rete e collegarla a una VM

**Obiettivo**: Aggiungere una scheda di rete a una macchina virtuale.

**Codice**:

```hcl
# Recuperare la rete
data "cloudtemple_compute_network" "production_vlan" {
  name = "PROD-VLAN-100"
}

# Fare riferimento alla VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Creare un adattatore di rete
resource "cloudtemple_compute_network_adapter" "eth1" {
  name = "Network adapter 2"
  
  # VM di destinazione
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Rete
  network_id = data.cloudtemple_compute_network.production_vlan.id
  
  # Tipo di adattatore
  type = "VMXNET3"
  
  # Connessione automatica all'accensione
  connect_on_power_on = true
  
  # Indirizzo MAC (opzionale, generato automaticamente se omesso)
  # mac_address = "00:50:56:xx:xx:xx"
}
```

:::info Tipi di adattatori di rete supportati
  I tipi di adattatori compatibili utilizzabili dipendono dal SO utilizzato sulla Macchina Virtuale e dalla versione VMware.
:::

---

### Creare un controller virtuale e collegarlo a una VM

**Obiettivo**: Aggiungere un controller di disco a una macchina virtuale.

**Codice**:

```hcl
# Fare riferimento alla VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Creare un controller SCSI
resource "cloudtemple_compute_virtual_controller" "scsi_controller" {
  name = "SCSI controller 1"
  
  # VM di destinazione
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Tipo di controller
  type = "SCSI"
}
```

**Tipi di controller**:
- `USB2`
- `USB3`
- `SCSI`
- `CD/DVD`
- `NVME`
- `PCI`

---

## OpenSource IaaS

### Creare una VM da un template

**Obiettivo**: Distribuire una macchina virtuale da un template di catalogo.

**Prerequisiti**:
- Accesso all'infrastruttura OpenSource di Cloud Temple
- Permessi richiesti:
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
# Recuperare un template
data "cloudtemple_compute_iaas_opensource_template" "almalinux" {
  name = "AlmaLinux 8"
}

# Recuperare l'host
data "cloudtemple_compute_iaas_opensource_host" "host" {
  name = "host-01"
}

# Recuperare il repository di storage
data "cloudtemple_compute_iaas_opensource_storage_repository" "sr" {
  name = "sr001-local-storage"
}

# Recuperare la rete
data "cloudtemple_compute_iaas_opensource_network" "network" {
  name = "VLAN-100"
}

# Recuperare la policy di backup
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

# Creare la VM
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
  
  # Disco SO (deve corrispondere al template)
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 20 * 1024 * 1024 * 1024  # 20 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # Adattatore di rete SO
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

**Spiegazioni**:
- `high_availability`: Opzioni disponibili: `disabled`, `restart`, `best-effort` (Vedi [documentazione](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) sull'Alta Disponibilità)
- `boot_firmware`: `bios` o `uefi`
- `secure_boot`: Solo con UEFI

---

### Creare una VM dal Marketplace

**Obiettivo**: Distribuire una VM dal Marketplace di Cloud Temple su OpenSource IaaS.

**Codice**:

```hcl
# Recuperare un elemento del Marketplace
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

# Distribuire dal Marketplace
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "marketplace_vm" {
  name        = "ubuntu-marketplace-01"
  power_state = "on"
  
  # Origine Marketplace
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

### Configurare la Replicazione

**Obiettivo**: Configurare una policy di replicazione per una VM.

**Codice**:

```hcl
data "cloudtemple_compute_iaas_opensource_storage_repository" "replication_target" {
  name               = "target_storage_repository_name"
  machine_manager_id = "availability_zone_id"
}

# Creare una policy di replicazione
resource "cloudtemple_compute_iaas_opensource_replication_policy" "policy_hourly" {
  name                  = "replication-policy-6h"
  storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.replication_target.id

  interval {
    hours = 1
  }
}

# Associare a una VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "replicated_vm" {
  name = "replicated-vm-01"
  
  # ... configurazione standard ...
  
  # Associare la policy di replicazione
  replication_policy_id = cloudtemple_compute_iaas_opensource_replication_policy.policy_hourly.id
}
```

**Spiegazioni**:
- `interval`: Intervallo di replicazione. Può essere specificato in `minutes` o `hours`
- `storage_repository_id`: Repository di Storage a cui verranno replicati i dischi della VM. Deve trovarsi su un'AZ diversa dalla VM originale

---

### Configurare il Backup

**Obiettivo**: Applicare una policy di backup a una VM.

**Codice**:

```hcl
# Recuperare le policy di backup
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

data "cloudtemple_backup_iaas_opensource_policy" "weekly" {
  name = "weekly-backup"
}

# VM con policy di backup multiple
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "backup_vm" {
  name = "important-vm-01"
  
  # ... configurazione standard ...
  
  # È possibile applicare più policy
  backup_sla_policies = [
    data.cloudtemple_backup_iaas_opensource_policy.daily.id,
    data.cloudtemple_backup_iaas_opensource_policy.weekly.id,
  ]
}
```

:::info Backup obbligatorio
    In un ambiente SecNumCloud, deve essere definita almeno una policy di backup per avviare la VM.
:::

---

### Configurare l'Alta Disponibilità

**Obiettivo**: Configurare il comportamento HA di una macchina virtuale.

**Codice**:

```hcl
# VM con HA disabilitato
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

Vedere la documentazione sull'[Alta Disponibilità](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) nell'infrastruttura OpenSource

| Modalità | Descrizione | Utilizzo |
|----------|-------------|----------|
| `disabled` | Nessuna HA | Ambienti di sviluppo |
| `restart` | Riavvio ad alta priorità | Produzione critica |
| `best-effort` | Riavvio se risorse disponibili | Produzione standard |

---

### Configurare Cloud-Init OpenSource

**Obiettivo**: Automatizzare la configurazione con Cloud-Init (datasource NoCloud).

**Prerequisiti**: Immagine compatibile con Cloud-Init NoCloud.

**File Cloud-Init**:

Creare `cloud-init/cloud-config.yml`:

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

Creare `cloud-init/network-config.yml`:

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
  Adattare la configurazione cloud-init alle proprie esigenze e alla versione di Cloud-Init installata sulla macchina. Il formato e la sintassi possono cambiare a seconda delle versioni.
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
  
  # Configurazione Cloud-Init (datasource NoCloud)
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
- OpenSource utilizza il datasource **NoCloud**
- Chiavi supportate: `cloud_config` e `network_config`
- Non si usa `filebase64()`, utilizzare `file()` direttamente

---

### Comprendere os_disk e os_network_adapter

I blocchi `os_disk` e `os_network_adapter` sono blocchi speciali utilizzabili **solo durante la creazione** di una macchina virtuale da:

- Content Library
- Template
- Marketplace di Cloud Temple
- Clone di una VM esistente

:::info Informazione
  Vengono utilizzati per fare riferimento a dischi virtuali e adattatori di rete distribuiti dal template per poter modificare i loro parametri successivamente senza doverli importare manualmente. Non creano in alcun modo una nuova risorsa.
:::

**Caratteristiche importanti**:

1. **Solo alla creazione**: Questi blocchi possono essere definiti solo durante il `terraform apply` iniziale
2. **Alternativa**: Utilizzare il comando `terraform import` per importarli manualmente

---

### Utilizzare os_disk

**VMware IaaS**:

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_os_disk" {
  name = "vm-content-library"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configurare il disco SO esistente nel template
  os_disk {
    capacity = 100 * 1024 * 1024 * 1024  # Ridimensionare a 100 GB
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
  
  # Configurazione disco SO
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 50 * 1024 * 1024 * 1024  # 50 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # ... altre configurazioni
}
```

---

### Utilizzare os_network_adapter

**VMware IaaS**:

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_network" {
  name = "vm-with-network"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configurare l'adattatore di rete del template
  os_network_adapter {
    network_id   = data.cloudtemple_compute_network.vlan.id
    auto_connect = true
    connected    = true
    mac_address  = "00:50:56:12:34:56"  # Opzionale
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
  
  # Configurazione adattatore di rete
  os_network_adapter {
    network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
    mac_address     = "c2:db:4f:15:41:3e"  # Opzionale
    tx_checksumming = true
    attached        = true
  }
  
  # ... altre configurazioni
}
```

:::info Nota
  È possibile combinare entrambi gli approcci facendo riferimento ai dischi e/o agli adattatori di rete di una VM e aggiungendone altri tramite le risorse `cloudtemple_compute_iaas_vmware/opensource_virtual_disk` e `cloudtemple_compute_iaas_vmware/opensource_network_adapter`
:::

---

**Best practice**:
1. Utilizzare `os_disk` e `os_network_adapter` per la configurazione iniziale del template
2. Utilizzare risorse dedicate per aggiungere risorse aggiuntive

---

## Object Storage

### Creare un bucket

**Obiettivo**: Creare un bucket di object storage compatibile S3.

**Prerequisiti**: Permesso `object-storage_write`

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

# Bucket con accesso personalizzato (whitelist IP)
resource "cloudtemple_object_storage_bucket" "custom_bucket" {
  name        = "my-custom-bucket"
  access_type = "custom"
  
  # Whitelist IP/CIDR
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
- `custom`: Accesso limitato agli IP in whitelist

**Versioning**:
- `Enabled`: Abilita il versioning degli oggetti
- `Suspended`: Sospende il versioning (mantiene le versioni esistenti)

---

### Creare un account di storage

**Obiettivo**: Creare un account di storage con credenziali S3.

**Codice**:

```hcl
# Creare un account di storage
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
    Le credenziali vengono visualizzate una sola volta. Archiviarle in modo sicuro (ad es., HashiCorp Vault, AWS Secrets Manager).
:::

---

### Creare ACL tramite risorsa dedicata

**Obiettivo**: Gestire i permessi di accesso al bucket con le ACL.

**Codice**:

```hcl
# Recuperare i ruoli disponibili
data "cloudtemple_object_storage_role" "read_only" {
  name = "read_only"
}

data "cloudtemple_object_storage_role" "maintainer" {
  name = "maintainer"
}

data "cloudtemple_object_storage_role" "admin" {
  name = "admin"
}

# Recuperare gli account di storage esistenti
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

# ACL per il team dev (sola lettura)
resource "cloudtemple_object_storage_acl_entry" "dev_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.dev_account.name
  role            = data.cloudtemple_object_storage_role.read_only.name
}

# ACL per il team ops (maintainer)
resource "cloudtemple_object_storage_acl_entry" "ops_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.ops_account.name
  role            = data.cloudtemple_object_storage_role.maintainer.name
}
```

**Ruoli disponibili**:
- `read_write`: Lettura e scrittura
- `write_only`: Solo scrittura
- `read_only`: Sola lettura
- `maintainer`: Accesso completo

---

### Configurare le ACL direttamente nel bucket

**Obiettivo**: Definire le ACL durante la creazione del bucket.

**Codice**:

```hcl
# Recuperare le risorse
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

# Bucket con ACL inline
resource "cloudtemple_object_storage_bucket" "bucket_with_acl" {
  name        = "bucket-with-inline-acl"
  access_type = "private"
  
  # Definizione ACL nel bucket
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

**Differenza con le risorse ACL dedicate**:
- **Inline**: ACL definite direttamente nel bucket (più semplice per configurazioni statiche)
- **Risorsa dedicata**: ACL gestite separatamente (più flessibile, permette modifiche indipendenti)

---

### Utilizzare i datasource

**Obiettivo**: Interrogare i metadati del bucket ed elencare i file.

**Codice**:

```hcl
# Datasource per elencare i file del bucket
data "cloudtemple_object_storage_bucket_files" "my_bucket_files" {
  bucket_name = cloudtemple_object_storage_bucket.my_bucket.name
}

# Visualizzare tutti i file
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

# Recuperare un account di storage esistente
data "cloudtemple_object_storage_storage_account" "existing_account" {
  name = "production-account"
}

output "account_access_key" {
  value     = data.cloudtemple_object_storage_storage_account.existing_account.access_key_id
  sensitive = true
}
```

---

### Integrazione S3 con il provider AWS

**Obiettivo**: Utilizzare il provider AWS per caricare file nell'object storage di Cloud Temple.

**Codice**:

```hcl
# Creare account e bucket
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

# Configurare il provider AWS per S3 di Cloud Temple
provider "aws" {
  alias  = "cloudtemple_s3"
  region = "eu-west-3"
  
  # Utilizzare le credenziali di Cloud Temple
  access_key = cloudtemple_object_storage_storage_account.upload_account.access_key_id
  secret_key = cloudtemple_object_storage_storage_account.upload_account.access_secret_key
  
  # Endpoint Cloud Temple
  endpoints {
    s3 = "https://${cloudtemple_object_storage_bucket.upload_bucket.namespace}.s3.fr1.cloud-temple.com"
  }
  
  # Configurazione per saltare la validazione AWS
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}

# Caricare un file
resource "aws_s3_object" "config_file" {
  provider = aws.cloudtemple_s3
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = "config/app-config.json"
  source = "./files/app-config.json"
  etag   = filemd5("./files/app-config.json")
}

# Caricare più file
resource "aws_s3_object" "static_files" {
  provider = aws.cloudtemple_s3
  
  for_each = fileset("./static/", "**/*")
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = each.value
  source = "./static/${each.value}"
  etag   = filemd5("./static/${each.value}")
}

# Verificare i file caricati
data "cloudtemple_object_storage_bucket_files" "uploaded_files" {
  depends_on  = [aws_s3_object.config_file]
  bucket_name = cloudtemple_object_storage_bucket.upload_bucket.name
}

output "uploaded_files_list" {
  value = data.cloudtemple_object_storage_bucket_files.uploaded_files.files
}
```

---

## Conclusione

Questa documentazione copre i principali casi d'uso del provider Terraform di Cloud Temple. Per approfondire:

- Consultare la [documentazione ufficiale del provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- Esplorare gli [esempi su GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)
- Utilizzare la [Console Cloud Temple](https://shiva.cloud-temple.com) per identificare le risorse disponibili

:::info Serve aiuto?
    Per qualsiasi domanda o problema, consultare la [sezione Issues su GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues) o contattare il supporto di Cloud Temple.
:::
