---
title: Tutoriels
---

# Tutoriels Terraform Cloud Temple

Cette page regroupe des tutoriels pratiques pour utiliser le provider Terraform Cloud Temple avec différents services.

## Sommaire

- [IaaS VMware](#iaas-vmware)
- [IaaS OpenSource](#iaas-opensource)
- [Stockage Objet](#stockage-objet)

## IaaS VMware

### Créer une VM vide

**Objectif** : Créer une machine virtuelle VMware de base sans système d'exploitation.

**Prérequis** :
- Accès à un datacenter Cloud Temple
- Credentials API configurés
- Droits nécessaires
  - `compute_iaas_vmware_read`
  - `compute_iaas_vmware_management`
  - `compute_iaas_vmware_virtual_machine_power`
  - `compute_iaas_vmware_infrastructure_read`
  - `backup_iaas_vmware_read`
  - `backup_iaas_vmware_write`
  - `activity_read`
  - `tag_read`
  - `tag_write`

**Code** :

```hcl
# Récupération des ressources nécessaires
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"
}

# Création d'une VM vide
resource "cloudtemple_compute_virtual_machine" "empty_vm" {
  name = "vm-empty-01"
  
  # Configuration matérielle
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Hot-add activé
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Emplacement
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Système d'exploitation guest
  guest_operating_system_moref = "ubuntu64Guest"
  
  tags = {
    environment = "demo"
    created_by  = "terraform"
  }
}
```

**Explications** :
- `guest_operating_system_moref` : Définit le type d'OS pour les pilotes VMware Tools
- La VM est créée sans disque ni réseau (à ajouter séparément)
- Les options hot-add permettent d'ajouter CPU/RAM à chaud

---

### Créer une VM depuis la Marketplace

**Objectif** : Déployer une VM à partir d'une image de la Marketplace Cloud Temple.

**Code** :

```hcl
# Récupération d'un item de la Marketplace
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

# Déploiement depuis la Marketplace
resource "cloudtemple_compute_virtual_machine" "marketplace_vm" {
  name = "ubuntu-marketplace-01"
  
  # Source Marketplace
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

**Explications** :
- `marketplace_item_id` : Référence une image prête à l'emploi
- `datastore_id` : Datastore spécifique requis pour le déploiement Marketplace
- L'image inclut déjà un système d'exploitation configuré

---

### Créer une VM depuis Content Library

**Objectif** : Déployer une VM à partir d'un template de la Content Library VMware.

**Code** :

```hcl
# Récupération de la Content Library
data "cloudtemple_compute_content_library" "public" {
  name = "PUBLIC"
}

# Récupération d'un item spécifique
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

# Déploiement depuis Content Library
resource "cloudtemple_compute_virtual_machine" "content_library_vm" {
  name = "centos-from-cl-01"
  
  # Source Content Library
  content_library_id      = data.cloudtemple_compute_content_library.public.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.centos.id
  
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.sdrs.id
  datastore_id         = data.cloudtemple_compute_datastore.ds.id
  
  # Configuration du disque OS
  os_disk {
    capacity = 50 * 1024 * 1024 * 1024  # 50 GB
  }
  
  # Configuration de l'adaptateur réseau OS
  os_network_adapter {
    network_id = data.cloudtemple_compute_network.vlan.id
  }
  
  tags = {
    source = "content-library"
  }
}
```

**Explications** :
- Les blocs `os_disk` et `os_network_adapter` configurent les ressources du template
- Ces blocs ne peuvent être utilisés qu'à la création (voir section dédiée)

---

### Configurer Cloud-Init VMware

**Objectif** : Automatiser la configuration d'une VM au premier démarrage avec Cloud-Init.

**Prérequis** : Utiliser une image compatible Cloud-Init (ex: Ubuntu Cloud Image en OVF).

**Fichiers Cloud-Init** :

Créez `cloud-init/user-data.yml` :

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

Créez `cloud-init/network-config.yml` :

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

**Code Terraform** :

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
  
  # Configuration Cloud-Init (VMware OVF datasource)
  cloud_init = {
    user-data      = filebase64("./cloud-init/user-data.yml")
    network-config = filebase64("./cloud-init/network-config.yml")
    hostname       = "my-server"
    password       = "RANDOM"
  }
}
```

**Clés Cloud-Init supportées (VMware)** :
- `user-data` : Configuration principale (base64)
- `network-config` : Configuration réseau (base64)
- `public-keys` : Clés SSH publiques
- `hostname` : Nom d'hôte
- `password` : Mot de passe (ou "RANDOM")
- `instance-id` : Identifiant unique
- `seedfrom` : URL source de configuration

:::warning Limitation
    Cloud-Init n'est exécuté qu'au premier démarrage de la VM.
:::
---

### Créer un disque virtuel et l'attacher à une VM

**Objectif** : Ajouter du stockage supplémentaire à une machine virtuelle existante.

**Code** :

```hcl
# Référence à une VM existante
data "cloudtemple_compute_virtual_machine" "existing_vm" {
  name = "my-existing-vm"
}

# Création d'un disque virtuel
resource "cloudtemple_compute_virtual_disk" "data_disk" {
  name = "data-disk-01"
  
  # Attachement à la VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.existing_vm.id
  
  # Taille du disque
  capacity = 100 * 1024 * 1024 * 1024  # 100 GB
  
  # Mode du disque
  disk_mode = "persistent"
  
  # Type de provisionnement
  provisioning_type = "dynamic"
}
```

**Modes de disque disponibles** :
- `persistent` : Les modifications sont immédiatement et définitivement enregistrées sur le disque virtuel.
- `independent_nonpersistent` : Les modifications apportées au disque virtuel sont enregistrées dans un journal de reprise et supprimées à la mise hors tension.
- `independent_persistent` : Les modifications sont immédiatement et définitivement enregistrées sur le disque virtuel. Non affecté par les snapshots.

**Types de provisionnement** :
- `dynamic` : Économise de l'espace de stockage en allouant de l'espace de manière dynamique selon les besoins. La création est rapide.
- `staticImmediate` : Alloue tout l'espace disque lors de la création, mais les blocs sont remis à zéro lors de la première écriture.
- `staticDiffered` : Alloue et remet à zéro tout l'espace disque lors de la création.

---

### Créer une interface réseau et l'attacher à une VM

**Objectif** : Ajouter une carte réseau à une machine virtuelle.

**Code** :

```hcl
# Récupération du réseau
data "cloudtemple_compute_network" "production_vlan" {
  name = "PROD-VLAN-100"
}

# Référence à la VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Création d'un adaptateur réseau
resource "cloudtemple_compute_network_adapter" "eth1" {
  name = "Network adapter 2"
  
  # VM cible
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Réseau
  network_id = data.cloudtemple_compute_network.production_vlan.id
  
  # Type d'adaptateur
  type = "VMXNET3"
  
  # Connexion automatique au démarrage
  connect_on_power_on = true
  
  # MAC address (optionnel, générée automatiquement si omis)
  # mac_address = "00:50:56:xx:xx:xx"
}
```
:::info Type d'adaptateur réseaux supportés
  Les types d'adaptateurs compatible pouvant être utilisés dépendent de l'OS utilisé sur la Machine Virtuelle ainsi que de la version de VMWare. 
:::

---

### Créer un contrôleur virtuel et l'attacher à une VM

**Objectif** : Ajouter un contrôleur de disque à une machine virtuelle.

**Code** :

```hcl
# Référence à la VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Création d'un contrôleur SCSI
resource "cloudtemple_compute_virtual_controller" "scsi_controller" {
  name = "SCSI controller 1"
  
  # VM cible
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Type de contrôleur
  type = "SCSI"
}
```

**Types de contrôleurs** :
- `USB2`
- `USB3`
- `SCSI`
- `CD/DVD`
- `NVME`
- `PCI`

---

## IaaS OpenSource

### Créer une VM depuis un template

**Objectif** : Déployer une machine virtuelle à partir d'un template du catalogue.

**Prérequis** :
- Accès à l'infrastructure OpenSource Cloud Temple
- Droits nécessaires :
  - `compute_iaas_opensource_read`
  - `compute_iaas_opensource_management`
  - `compute_iaas_opensource_virtual_machine_power`
  - `compute_iaas_opensource_infrastructure_read`
  - `backup_iaas_opensource_read`
  - `backup_iaas_opensource_write`
  - `activity_read`
  - `tag_read`
  - `tag_write`

**Code** :

```hcl
# Récupération d'un template
data "cloudtemple_compute_iaas_opensource_template" "almalinux" {
  name = "AlmaLinux 8"
}

# Récupération de l'hôte
data "cloudtemple_compute_iaas_opensource_host" "host" {
  name = "host-01"
}

# Récupération du storage repository
data "cloudtemple_compute_iaas_opensource_storage_repository" "sr" {
  name = "sr001-local-storage"
}

# Récupération du réseau
data "cloudtemple_compute_iaas_opensource_network" "network" {
  name = "VLAN-100"
}

# Récupération de la politique de backup
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

# Création de la VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "openstack_vm" {
  name        = "almalinux-vm-01"
  power_state = "on"
  
  # Source
  template_id = data.cloudtemple_compute_iaas_opensource_template.almalinux.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  # Configuration matérielle
  memory               = 8 * 1024 * 1024 * 1024  # 8 GB
  cpu                  = 4
  num_cores_per_socket = 2
  
  # Options
  boot_firmware     = "uefi"
  secure_boot       = false
  auto_power_on     = true
  high_availability = "best-effort"
  
  # Disque OS (doit correspondre au template)
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 20 * 1024 * 1024 * 1024  # 20 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # Adaptateur réseau OS
  os_network_adapter {
    network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
    tx_checksumming = true
    attached        = true
  }
  
  # Backup
  backup_sla_policies = [
    data.cloudtemple_backup_iaas_opensource_policy.daily.id
  ]
  
  # Ordre de boot
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

**Explications** :
- `high_availability` : Options disponibles: `disabled`, `restart`, `best-effort` (Voir [documentation](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) sur la Haute Disponibilité)
- `boot_firmware` : `bios` ou `uefi`
- `secure_boot` : Uniquement avec UEFI

---

### Créer une VM depuis la Marketplace

**Objectif** : Déployer une VM depuis la Marketplace Cloud Temple sur le IaaS OpenSource.

**Code** :

```hcl
# Récupération d'un item Marketplace
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

# Déploiement depuis Marketplace
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "marketplace_vm" {
  name        = "ubuntu-marketplace-01"
  power_state = "on"
  
  # Source Marketplace
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

### Configurer la Réplication

**Objectif** : Mettre en place une politique de réplication pour une VM.

**Code** :

```hcl
data "cloudtemple_compute_iaas_opensource_storage_repository" "replication_target" {
  name               = "target_storage_repository_name"
  machine_manager_id = "availability_zone_id"
}

# Création d'une politique de réplication
resource "cloudtemple_compute_iaas_opensource_replication_policy" "policy_hourly" {
  name                  = "replication-policy-6h"
  storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.replication_target.id

  interval {
    hours = 1
  }
}

# Association à une VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "replicated_vm" {
  name = "replicated-vm-01"
  
  # ... configuration standard ...
  
  # Association de la politique de réplication
  replication_policy_id = cloudtemple_compute_iaas_opensource_replication_policy.policy_hourly.id
}
```

**Explications** :
- `interval` : Intervalle de réplication. Peut être formulé en `minutes`ou `hours`
- `storage_repository_id` : Storage Repository vers lequel les disques de la VM vont être répliqué. Doit être sur une AZ différente de la VM d'origine

---

### Configurer la Sauvegarde

**Objectif** : Appliquer une politique de sauvegarde à une VM.

**Code** :

```hcl
# Récupération des politiques de backup
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

data "cloudtemple_backup_iaas_opensource_policy" "weekly" {
  name = "weekly-backup"
}

# VM avec plusieurs politiques de backup
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "backup_vm" {
  name = "important-vm-01"
  
  # ... configuration standard ...
  
  # Plusieurs politiques peuvent être appliquées
  backup_sla_policies = [
    data.cloudtemple_backup_iaas_opensource_policy.daily.id,
    data.cloudtemple_backup_iaas_opensource_policy.weekly.id,
  ]
}
```

:::info Backup obligatoire
    Dans un environnement SecNumCloud, au moins une politique de backup doit être définie pour pouvoir démarrer la VM.
:::
---

### Configurer la Haute Disponibilité

**Objectif** : Configurer le comportement HA d'une machine virtuelle.

**Code** :

```hcl
# VM avec HA désactivée
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "no_ha" {
  name              = "dev-vm-01"
  high_availability = "disabled"
  # ...
}

# VM avec restart prioritaire
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "priority_ha" {
  name              = "prod-vm-01"
  high_availability = "restart"
  # ...
}

# VM avec best-effort
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "besteff_ha" {
  name              = "test-vm-01"
  high_availability = "best-effort"
  # ...
}
```

**Modes HA disponibles** :

Voir documentation sur la [Haute Disponibilité](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) dans l'infrastructure OpenSource

| Mode | Description | Usage |
|------|-------------|-------|
| `disabled` | Pas de HA | Environnements de développement |
| `restart` | Redémarrage haute priorité | Production critique |
| `best-effort` | Redémarrage si ressources disponibles | Production standard |

---

### Configurer Cloud-Init OpenSource

**Objectif** : Automatiser la configuration avec Cloud-Init (NoCloud datasource).

**Prérequis** : Image compatible Cloud-Init NoCloud.

**Fichiers Cloud-Init** :

Créez `cloud-init/cloud-config.yml` :

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

Créez `cloud-init/network-config.yml` :

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

:::important A noter
  Adaptez la configuration cloud-init à vos besoin et à la version de Cloud-Init installée sur votre machine. Le format et la syntaxe peuvent évoluer en fonction des versions.
:::

**Code Terraform** :

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
  
  # Configuration Cloud-Init (NoCloud datasource)
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

**Différence avec VMware** :
- OpenSource utilise la datasource **NoCloud**
- Clés supportées : `cloud_config` et `network_config`
- Pas de `filebase64()`, utiliser `file()` directement

---


### Comprendre os_disk et os_network_adapter

Les blocs `os_disk` et `os_network_adapter` sont des blocs spéciaux utilisables **uniquement lors de la création** d'une machine virtuelle à partir de :

- Content Library
- Template
- Marketplace Cloud Temple
- Clone d'une VM existante

:::info info
  Ils servent à réferencer les disques virtuels et adaptateurs réseaux déployé par le template afin de pouvoir en modifier les paramètres par la suite sans avoir à les importer manuellement. Ils ne créent en aucun cas une nouvelle ressource.
:::

**Caractéristiques importantes** :

1. **Création uniquement** : Ces blocs ne peuvent être définis que lors du `terraform apply` initial
3. **Alternative** : Utilisez la commande `terraform import` pour les importer manuellement

---

### Utiliser os_disk

**IaaS VMware** :

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_os_disk" {
  name = "vm-content-library"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configuration du disque OS existant dans le template
  os_disk {
    capacity = 100 * 1024 * 1024 * 1024  # Redimensionner à 100 GB
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
  
  # Configuration du disque OS
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 50 * 1024 * 1024 * 1024  # 50 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # ... autres configurations
}
```

---

### Utiliser os_network_adapter

**IaaS VMware** :

```hcl
resource "cloudtemple_compute_virtual_machine" "vm_with_network" {
  name = "vm-with-network"
  
  content_library_id      = data.cloudtemple_compute_content_library.cl.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.item.id
  
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_id = data.cloudtemple_compute_datastore.ds.id
  
  # Configuration de l'adaptateur réseau du template
  os_network_adapter {
    network_id   = data.cloudtemple_compute_network.vlan.id
    auto_connect = true
    connected    = true
    mac_address  = "00:50:56:12:34:56"  # Optionnel
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
  
  # Configuration de l'adaptateur réseau
  os_network_adapter {
    network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
    mac_address     = "c2:db:4f:15:41:3e"  # Optionnel
    tx_checksumming = true
    attached        = true
  }
  
  # ... autres configurations
}
```

:::info A noter
  Vous pouvez tout à fait combiner les deux approches en réferençant les disques et/ou adaptateurs réseaux d'une VM et en ajouter d'autres via les ressource `cloudtemple_compute_iaas_vmware/opensource_virtual_disk` et `cloudtemple_compute_iaas_vmware/opensource_network_adapter`
:::

---

**Bonnes pratiques** :
1. Utilisez `os_disk` et `os_network_adapter` pour la configuration initiale du template
2. Utilisez les ressources dédiées pour ajouter des ressources supplémentaires

---

## Stockage Objet

### Créer un bucket

**Objectif** : Créer un bucket de stockage objet S3-compatible.

**Prérequis** : Droits `object-storage_write`

**Code** :

```hcl
# Bucket privé
resource "cloudtemple_object_storage_bucket" "private_bucket" {
  name        = "my-private-bucket"
  access_type = "private"
}

# Bucket public
resource "cloudtemple_object_storage_bucket" "public_bucket" {
  name        = "my-public-bucket"
  access_type = "public"
}

# Bucket avec accès personnalisé (whitelist IP)
resource "cloudtemple_object_storage_bucket" "custom_bucket" {
  name        = "my-custom-bucket"
  access_type = "custom"
  
  # Liste blanche d'adresses IP/CIDR
  whitelist = [
    "10.0.0.0/8",
    "192.168.1.0/24",
    "203.0.113.42/32"
  ]
}

# Bucket avec versioning activé
resource "cloudtemple_object_storage_bucket" "versioned_bucket" {
  name        = "my-versioned-bucket"
  access_type = "private"
  versioning  = "Enabled"
}

# Outputs utiles
output "bucket_endpoint" {
  value = cloudtemple_object_storage_bucket.private_bucket.endpoint
}

output "bucket_namespace" {
  value = cloudtemple_object_storage_bucket.private_bucket.namespace
}
```

**Types d'accès** :
- `private` : Accès restreint aux adresses IP du tenant
- `public` : Accès public en lecture
- `custom` : Accès limité aux IPs de la whitelist

**Versioning** :
- `Enabled` : Active le versioning des objets
- `Suspended` : Suspend le versioning (conserve les versions existantes)

---

### Créer un compte de stockage

**Objectif** : Créer un compte de stockage avec des credentials S3.

**Code** :

```hcl
# Création d'un compte de stockage
resource "cloudtemple_object_storage_storage_account" "app_account" {
  name = "application-storage-account"
}

# Outputs pour utiliser les credentials
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

:::warning Informations sensibles
    Les credentials sont affichés une seule fois. Stockez-les de manière sécurisée (ex: HashiCorp Vault, AWS Secrets Manager).
:::
---

### Créer des ACL via ressource dédiée

**Objectif** : Gérer les permissions d'accès aux buckets avec des ACL.

**Code** :

```hcl
# Récupération des rôles disponibles
data "cloudtemple_object_storage_role" "read_only" {
  name = "read_only"
}

data "cloudtemple_object_storage_role" "maintainer" {
  name = "maintainer"
}

data "cloudtemple_object_storage_role" "admin" {
  name = "admin"
}

# Récupération de comptes de stockage existants
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

# ACL pour l'équipe dev (lecture seule)
resource "cloudtemple_object_storage_acl_entry" "dev_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.dev_account.name
  role            = data.cloudtemple_object_storage_role.read_only.name
}

# ACL pour l'équipe ops (maintainer)
resource "cloudtemple_object_storage_acl_entry" "ops_acl" {
  bucket          = cloudtemple_object_storage_bucket.shared_bucket.name
  storage_account = data.cloudtemple_object_storage_storage_account.ops_account.name
  role            = data.cloudtemple_object_storage_role.maintainer.name
}
```

**Rôles disponibles** :
- `read_write` : Lecture et écriture
- `write_only`: Écriture seule
- `read_only` : Lecture seule
- `maintainer` : Accès total

---

### Configurer des ACL directement dans le bucket

**Objectif** : Définir les ACL lors de la création du bucket.

**Code** :

```hcl
# Récupération des ressources
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

# Bucket avec ACL intégrées
resource "cloudtemple_object_storage_bucket" "bucket_with_acl" {
  name        = "bucket-with-inline-acl"
  access_type = "private"
  
  # Définition des ACL dans le bucket
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

**Différence avec les ressources ACL dédiées** :
- **Inline** : ACL définies directement dans le bucket (plus simple pour des configurations statiques)
- **Ressource dédiée** : ACL gérées séparément (plus flexible, permet des modifications indépendantes)

---

### Utiliser les datasources

**Objectif** : Interroger les métadonnées des buckets et lister les fichiers.

**Code** :

```hcl
# Datasource pour lister les fichiers d'un bucket
data "cloudtemple_object_storage_bucket_files" "my_bucket_files" {
  bucket_name = cloudtemple_object_storage_bucket.my_bucket.name
}

# Afficher tous les fichiers
output "all_files" {
  value = data.cloudtemple_object_storage_bucket_files.my_bucket_files.files
}

# Filtrer un fichier spécifique
output "specific_file" {
  value = [
    for file in data.cloudtemple_object_storage_bucket_files.my_bucket_files.files :
    file if file.key == "config.json"
  ]
}

# Récupération d'un compte de stockage existant
data "cloudtemple_object_storage_storage_account" "existing_account" {
  name = "production-account"
}

output "account_access_key" {
  value     = data.cloudtemple_object_storage_storage_account.existing_account.access_key_id
  sensitive = true
}
```

---

### Intégration S3 avec le provider AWS

**Objectif** : Utiliser le provider AWS pour uploader des fichiers vers le stockage objet Cloud Temple.

**Code** :

```hcl
# Création du compte et du bucket
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

# Configuration du provider AWS pour Cloud Temple S3
provider "aws" {
  alias  = "cloudtemple_s3"
  region = "eu-west-3"
  
  # Utilisation des credentials Cloud Temple
  access_key = cloudtemple_object_storage_storage_account.upload_account.access_key_id
  secret_key = cloudtemple_object_storage_storage_account.upload_account.access_secret_key
  
  # Endpoint Cloud Temple
  endpoints {
    s3 = "https://${cloudtemple_object_storage_bucket.upload_bucket.namespace}.s3.fr1.cloud-temple.com"
  }
  
  # Configuration pour éviter la validation AWS
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}

# Upload d'un fichier
resource "aws_s3_object" "config_file" {
  provider = aws.cloudtemple_s3
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = "config/app-config.json"
  source = "./files/app-config.json"
  etag   = filemd5("./files/app-config.json")
}

# Upload de plusieurs fichiers
resource "aws_s3_object" "static_files" {
  provider = aws.cloudtemple_s3
  
  for_each = fileset("./static/", "**/*")
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = each.value
  source = "./static/${each.value}"
  etag   = filemd5("./static/${each.value}")
}

# Vérification des fichiers uploadés
data "cloudtemple_object_storage_bucket_files" "uploaded_files" {
  depends_on  = [aws_s3_object.config_file]
  bucket_name = cloudtemple_object_storage_bucket.upload_bucket.name
}

output "uploaded_files_list" {
  value = data.cloudtemple_object_storage_bucket_files.uploaded_files.files
}
```

---

## Conclusion

Cette documentation couvre les principaux cas d'usage du provider Terraform Cloud Temple. Pour aller plus loin :

- Consultez la [documentation officielle du provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- Explorez les [exemples sur GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)
- Utilisez la [Console Cloud Temple](https://shiva.cloud-temple.com) pour identifier les ressources disponibles

:::info Besoin d'aide ?
    Pour toute question ou problème, consultez la [section Issues sur GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues) ou contactez le support Cloud Temple.
:::
