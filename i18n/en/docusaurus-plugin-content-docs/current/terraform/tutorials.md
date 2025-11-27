---
title: Tutorials
---

# Cloud Temple Terraform Tutorials

This page contains practical tutorials for using the Cloud Temple Terraform provider with different services.

## Table of Contents

- [VMware IaaS](#vmware-iaas)
- [OpenSource IaaS](#opensource-iaas)
- [Object Storage](#object-storage)

## VMware IaaS

### Create an Empty VM

**Objective**: Create a basic VMware virtual machine without an operating system.

**Prerequisites**:
- Access to a Cloud Temple datacenter
- Configured API credentials
- Required permissions:
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
# Retrieve required resources
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"
}

# Create an empty VM
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

**Explanations**:
- `guest_operating_system_moref`: Defines the OS type for VMware Tools drivers
- The VM is created without disk or network (to be added separately)
- Hot-add options allow adding CPU/RAM on the fly

---

### Create a VM from the Marketplace

**Objective**: Deploy a VM from a Cloud Temple Marketplace image.

**Code**:

```hcl
# Retrieve a Marketplace item
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

# Deploy from Marketplace
resource "cloudtemple_compute_virtual_machine" "marketplace_vm" {
  name = "ubuntu-marketplace-01"
  
  # Marketplace source
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
- The image already includes a configured operating system

---

### Create a VM from Content Library

**Objective**: Deploy a VM from a VMware Content Library template.

**Code**:

```hcl
# Retrieve the Content Library
data "cloudtemple_compute_content_library" "public" {
  name = "PUBLIC"
}

# Retrieve a specific item
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

# Deploy from Content Library
resource "cloudtemple_compute_virtual_machine" "content_library_vm" {
  name = "centos-from-cl-01"
  
  # Content Library source
  content_library_id      = data.cloudtemple_compute_content_library.public.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.centos.id
  
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.sdrs.id
  datastore_id         = data.cloudtemple_compute_datastore.ds.id
  
  # OS disk configuration
  os_disk {
    capacity = 50 * 1024 * 1024 * 1024  # 50 GB
  }
  
  # OS network adapter configuration
  os_network_adapter {
    network_id = data.cloudtemple_compute_network.vlan.id
  }
  
  tags = {
    source = "content-library"
  }
}
```

**Explanations**:
- The `os_disk` and `os_network_adapter` blocks configure the template resources
- These blocks can only be used at creation time (see dedicated section)

---

### Configure VMware Cloud-Init

**Objective**: Automate VM configuration at first boot with Cloud-Init.

**Prerequisites**: Use a Cloud-Init compatible image (e.g., Ubuntu Cloud Image in OVF format).

**Cloud-Init Files**:

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

**Supported Cloud-Init keys (VMware)**:
- `user-data`: Main configuration (base64)
- `network-config`: Network configuration (base64)
- `public-keys`: SSH public keys
- `hostname`: Hostname
- `password`: Password (or "RANDOM")
- `instance-id`: Unique identifier
- `seedfrom`: Configuration source URL

:::warning Limitation
    Cloud-Init is only executed at first VM boot.
:::

---

### Create a virtual disk and attach it to a VM

**Objective**: Add additional storage to an existing virtual machine.

**Code**:

```hcl
# Reference an existing VM
data "cloudtemple_compute_virtual_machine" "existing_vm" {
  name = "my-existing-vm"
}

# Create a virtual disk
resource "cloudtemple_compute_virtual_disk" "data_disk" {
  name = "data-disk-01"
  
  # Attach to VM
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
- `persistent`: Changes are immediately and permanently saved to the virtual disk.
- `independent_nonpersistent`: Changes made to the virtual disk are saved in a redo log and deleted on power off.
- `independent_persistent`: Changes are immediately and permanently saved to the virtual disk. Not affected by snapshots.

**Provisioning types**:
- `dynamic`: Saves storage space by dynamically allocating space as needed. Creation is fast.
- `staticImmediate`: Allocates all disk space on creation, but blocks are zeroed out on first write.
- `staticDiffered`: Allocates and zeros out all disk space on creation.

---

### Create a network interface and attach it to a VM

**Objective**: Add a network card to a virtual machine.

**Code**:

```hcl
# Retrieve the network
data "cloudtemple_compute_network" "production_vlan" {
  name = "PROD-VLAN-100"
}

# Reference the VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Create a network adapter
resource "cloudtemple_compute_network_adapter" "eth1" {
  name = "Network adapter 2"
  
  # Target VM
  virtual_machine_id = data.cloudtemple_compute_virtual_machine.vm.id
  
  # Network
  network_id = data.cloudtemple_compute_network.production_vlan.id
  
  # Adapter type
  type = "VMXNET3"
  
  # Auto-connect on power on
  connect_on_power_on = true
  
  # MAC address (optional, generated automatically if omitted)
  # mac_address = "00:50:56:xx:xx:xx"
}
```

:::info Supported network adapter types
  The compatible adapter types that can be used depend on the OS used on the Virtual Machine and the VMware version.
:::

---

### Create a virtual controller and attach it to a VM

**Objective**: Add a disk controller to a virtual machine.

**Code**:

```hcl
# Reference the VM
data "cloudtemple_compute_virtual_machine" "vm" {
  name = "my-vm"
}

# Create a SCSI controller
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

---

## OpenSource IaaS

### Create a VM from a template

**Objective**: Deploy a virtual machine from a catalog template.

**Prerequisites**:
- Access to Cloud Temple OpenSource infrastructure
- Required permissions:
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
# Retrieve a template
data "cloudtemple_compute_iaas_opensource_template" "almalinux" {
  name = "AlmaLinux 8"
}

# Retrieve the host
data "cloudtemple_compute_iaas_opensource_host" "host" {
  name = "host-01"
}

# Retrieve the storage repository
data "cloudtemple_compute_iaas_opensource_storage_repository" "sr" {
  name = "sr001-local-storage"
}

# Retrieve the network
data "cloudtemple_compute_iaas_opensource_network" "network" {
  name = "VLAN-100"
}

# Retrieve the backup policy
data "cloudtemple_backup_iaas_opensource_policy" "daily" {
  name = "daily-backup"
}

# Create the VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "openstack_vm" {
  name        = "almalinux-vm-01"
  power_state = "on"
  
  # Source
  template_id = data.cloudtemple_compute_iaas_opensource_template.almalinux.id
  host_id     = data.cloudtemple_compute_iaas_opensource_host.host.id
  
  # Hardware configuration
  memory               = 8 * 1024 * 1024 * 1024  # 8 GB
  cpu                  = 4
  num_cores_per_socket = 2
  
  # Options
  boot_firmware     = "uefi"
  secure_boot       = false
  auto_power_on     = true
  high_availability = "best-effort"
  
  # OS disk (must match template)
  os_disk {
    name                  = "os-disk"
    connected             = true
    size                  = 20 * 1024 * 1024 * 1024  # 20 GB
    storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.sr.id
  }
  
  # OS network adapter
  os_network_adapter {
    network_id      = data.cloudtemple_compute_iaas_opensource_network.network.id
    tx_checksumming = true
    attached        = true
  }
  
  # Backup
  backup_sla_policies = [
    data.cloudtemple_backup_iaas_opensource_policy.daily.id
  ]
  
  # Boot order
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

**Explanations**:
- `high_availability`: Available options: `disabled`, `restart`, `best-effort` (See [documentation](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) on High Availability)
- `boot_firmware`: `bios` or `uefi`
- `secure_boot`: Only with UEFI

---

### Create a VM from the Marketplace

**Objective**: Deploy a VM from the Cloud Temple Marketplace on OpenSource IaaS.

**Code**:

```hcl
# Retrieve a Marketplace item
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

### Configure Replication

**Objective**: Set up a replication policy for a VM.

**Code**:

```hcl
data "cloudtemple_compute_iaas_opensource_storage_repository" "replication_target" {
  name               = "target_storage_repository_name"
  machine_manager_id = "availability_zone_id"
}

# Create a replication policy
resource "cloudtemple_compute_iaas_opensource_replication_policy" "policy_hourly" {
  name                  = "replication-policy-6h"
  storage_repository_id = data.cloudtemple_compute_iaas_opensource_storage_repository.replication_target.id

  interval {
    hours = 1
  }
}

# Associate with a VM
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "replicated_vm" {
  name = "replicated-vm-01"
  
  # ... standard configuration ...
  
  # Associate the replication policy
  replication_policy_id = cloudtemple_compute_iaas_opensource_replication_policy.policy_hourly.id
}
```

**Explanations**:
- `interval`: Replication interval. Can be specified in `minutes` or `hours`
- `storage_repository_id`: Storage Repository to which VM disks will be replicated. Must be on a different AZ than the original VM

---

### Configure Backup

**Objective**: Apply a backup policy to a VM.

**Code**:

```hcl
# Retrieve backup policies
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
    In a SecNumCloud environment, at least one backup policy must be defined to start the VM.
:::

---

### Configure High Availability

**Objective**: Configure HA behavior of a virtual machine.

**Code**:

```hcl
# VM with HA disabled
resource "cloudtemple_compute_iaas_opensource_virtual_machine" "no_ha" {
  name              = "dev-vm-01"
  high_availability = "disabled"
  # ...
}

# VM with priority restart
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

See documentation on [High Availability](https://docs.cloud-temple.com/iaas_opensource/concepts#haute-disponibilit%C3%A9) in OpenSource infrastructure

| Mode | Description | Usage |
|------|-------------|-------|
| `disabled` | No HA | Development environments |
| `restart` | High priority restart | Critical production |
| `best-effort` | Restart if resources available | Standard production |

---

### Configure OpenSource Cloud-Init

**Objective**: Automate configuration with Cloud-Init (NoCloud datasource).

**Prerequisites**: Cloud-Init NoCloud compatible image.

**Cloud-Init Files**:

Create `cloud-init/cloud-config.yml`:

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

Create `cloud-init/network-config.yml`:

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

:::important Note
  Adapt the cloud-init configuration to your needs and the version of Cloud-Init installed on your machine. Format and syntax may change depending on versions.
:::

**Terraform Code**:

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

**Difference with VMware**:
- OpenSource uses the **NoCloud** datasource
- Supported keys: `cloud_config` and `network_config`
- No `filebase64()`, use `file()` directly

---

### Understanding os_disk and os_network_adapter

The `os_disk` and `os_network_adapter` blocks are special blocks usable **only during creation** of a virtual machine from:

- Content Library
- Template
- Cloud Temple Marketplace
- Clone of an existing VM

:::info info
  They are used to reference virtual disks and network adapters deployed by the template to be able to modify their parameters later without having to import them manually. They do not create a new resource in any way.
:::

**Important characteristics**:

1. **Creation only**: These blocks can only be defined during the initial `terraform apply`
2. **Alternative**: Use the `terraform import` command to import them manually

---

### Using os_disk

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

:::info Note
  You can combine both approaches by referencing the disks and/or network adapters of a VM and adding others via the `cloudtemple_compute_iaas_vmware/opensource_virtual_disk` and `cloudtemple_compute_iaas_vmware/opensource_network_adapter` resources
:::

---

**Best practices**:
1. Use `os_disk` and `os_network_adapter` for initial template configuration
2. Use dedicated resources to add additional resources

---

## Object Storage

### Create a bucket

**Objective**: Create an S3-compatible object storage bucket.

**Prerequisites**: `object-storage_write` permission

**Code**:

```hcl
# Private bucket
resource "cloudtemple_object_storage_bucket" "private_bucket" {
  name        = "my-private-bucket"
  access_type = "private"
}

# Public bucket
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

# Bucket with versioning enabled
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
- `private`: Access restricted to tenant IP addresses
- `public`: Public read access
- `custom`: Access limited to whitelist IPs

**Versioning**:
- `Enabled`: Enables object versioning
- `Suspended`: Suspends versioning (keeps existing versions)

---

### Create a storage account

**Objective**: Create a storage account with S3 credentials.

**Code**:

```hcl
# Create a storage account
resource "cloudtemple_object_storage_storage_account" "app_account" {
  name = "application-storage-account"
}

# Outputs to use credentials
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

:::warning Sensitive information
    Credentials are displayed only once. Store them securely (e.g., HashiCorp Vault, AWS Secrets Manager).
:::

---

### Create ACLs via dedicated resource

**Objective**: Manage bucket access permissions with ACLs.

**Code**:

```hcl
# Retrieve available roles
data "cloudtemple_object_storage_role" "read_only" {
  name = "read_only"
}

data "cloudtemple_object_storage_role" "maintainer" {
  name = "maintainer"
}

data "cloudtemple_object_storage_role" "admin" {
  name = "admin"
}

# Retrieve existing storage accounts
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

# ACL for dev team (read only)
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

---

### Configure ACLs directly in the bucket

**Objective**: Define ACLs when creating the bucket.

**Code**:

```hcl
# Retrieve resources
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

# Bucket with inline ACLs
resource "cloudtemple_object_storage_bucket" "bucket_with_acl" {
  name        = "bucket-with-inline-acl"
  access_type = "private"
  
  # ACL definition in bucket
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

**Difference with dedicated ACL resources**:
- **Inline**: ACLs defined directly in the bucket (simpler for static configurations)
- **Dedicated resource**: ACLs managed separately (more flexible, allows independent modifications)

---

### Using datasources

**Objective**: Query bucket metadata and list files.

**Code**:

```hcl
# Datasource to list bucket files
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

# Retrieve an existing storage account
data "cloudtemple_object_storage_storage_account" "existing_account" {
  name = "production-account"
}

output "account_access_key" {
  value     = data.cloudtemple_object_storage_storage_account.existing_account.access_key_id
  sensitive = true
}
```

---

### S3 Integration with AWS provider

**Objective**: Use the AWS provider to upload files to Cloud Temple object storage.

**Code**:

```hcl
# Create account and bucket
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

# Configure AWS provider for Cloud Temple S3
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
  
  # Configuration to skip AWS validation
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
}

# Upload a file
resource "aws_s3_object" "config_file" {
  provider = aws.cloudtemple_s3
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = "config/app-config.json"
  source = "./files/app-config.json"
  etag   = filemd5("./files/app-config.json")
}

# Upload multiple files
resource "aws_s3_object" "static_files" {
  provider = aws.cloudtemple_s3
  
  for_each = fileset("./static/", "**/*")
  
  bucket = cloudtemple_object_storage_bucket.upload_bucket.name
  key    = each.value
  source = "./static/${each.value}"
  etag   = filemd5("./static/${each.value}")
}

# Verify uploaded files
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

This documentation covers the main use cases of the Cloud Temple Terraform provider. To go further:

- See the [official provider documentation](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- Explore the [examples on GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)
- Use the [Cloud Temple Console](https://shiva.cloud-temple.com) to identify available resources

:::info Need help?
    For any questions or issues, see the [Issues section on GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues) or contact Cloud Temple support.
:::
