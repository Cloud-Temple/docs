---
title: Getting Started Guide
---

# Quick Start Guide

This guide walks you step by step through deploying your first Cloud Temple infrastructure with Terraform.

## Voraussetzungen

Stellen Sie sicher, dass Sie Folgendes besitzen, bevor Sie beginnen:

- Ein aktives Cloud Temple-Konto
- Zugriff auf die [Cloud Temple-Konsole](https://shiva.cloud-temple.com)
- API-Schlüssel (Client ID und Secret ID)
- Terraform auf Ihrer Maschine installiert (Version 1.0 oder höher)

## Schritt 1: Terraform installieren

### Linux (Ubuntu/Debian)

```bash
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform
```

### macOS

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

### Windows

Laden Sie die ausführbare Datei von [terraform.io](https://www.terraform.io/downloads) herunter oder verwenden Sie Chocolatey:

```powershell
choco install terraform
```

### Installation verification

```bash
terraform version
```

You should see output similar to:

```
Terraform v1.6.0
```

## Schritt 2: API-Schlüssel erhalten

### Generating an API Key in the Console

These credentials can be generated in the Cloud Temple Console by following [this procedure](https://docs.cloud-temple.com/console/api#api-keys).

:::warning Security
    Store these credentials securely. The Secret ID will be displayed only once.
:::

### Konfiguration der Umgebungsvariablen

Exportieren Sie Ihre Anmeldeinformationen als Umgebungsvariablen:

**Linux/macOS:**

```bash
export CLOUDTEMPLE_CLIENT_ID="12345678-1234-1234-1234-123456789abc"
export CLOUDTEMPLE_SECRET_ID="87654321-4321-4321-4321-cba987654321"
```

**Windows (PowerShell):**

```powershell
$env:CLOUDTEMPLE_CLIENT_ID="12345678-1234-1234-1234-123456789abc"
$env:CLOUDTEMPLE_SECRET_ID="87654321-4321-4321-4321-cba987654321"
```

## Schritt 3: Ihr Terraform-Projekt erstellen

### Projektverzeichnis erstellen

```bash
mkdir terraform-cloudtemple-quickstart
cd terraform-cloudtemple-quickstart
```

### Erstellen der Konfigurationsdatei für den Provider

Erstellen Sie eine Datei `versions.tf`:

```hcl
terraform {
  required_version = ">= 1.0"
  
  required_providers {
    cloudtemple = {
      source  = "Cloud-Temple/cloudtemple"
      version = "~> 1.0"
    }
  }
}

provider "cloudtemple" {
  # Die Anmeldeinformationen werden automatisch aus den Umgebungsvariablen
  # CLOUDTEMPLE_CLIENT_ID und CLOUDTEMPLE_SECRET_ID abgerufen
}
```

## Schritt 4: Terraform initialisieren

Initialize your Terraform project to download the provider:

```bash
terraform init
```

You should see:

```
Initializing the backend...

Initializing provider plugins...
- Finding Cloud-Temple/cloudtemple versions matching "~> 1.0"...
- Installing Cloud-Temple/cloudtemple v1.x.x...
- Installed Cloud-Temple/cloudtemple v1.x.x (signed by HashiCorp)

Terraform has been successfully initialized!
```

## Schritt 5: Ihre erste Ressource erstellen

### Einfaches Beispiel: Virtuelle Maschine VMware

Erstellen Sie eine Datei `main.tf` mit einer minimalen Konfiguration:

```hcl
# Retrieval of existing resources required
data "cloudtemple_compute_machine_manager" "vc-vstack-01" {
  name = "vc-vstack-001-t0001" # Adapt with your vCenter name
}

data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"  # Adapt with your datacenter name
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"  # Adapt with your cluster name
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"  # Adapt with your datastore cluster name
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_backup_sla_policy" "daily" {
  name = "sla001-daily-par7s"  # Backup policy
}

# Creating a virtual machine
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  # Hardware configuration
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB in bytes
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Flexibility options
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Location
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Guest operating system
  guest_operating_system_moref = "ubuntu64Guest"
  
  # Backup policy
  backup_sla_policies = [
    data.cloudtemple_backup_sla_policy.daily.id
  ]
  
  # Tags
  tags = {
    environment = "demo"
    managed_by  = "terraform"
    owner       = "quickstart"
  }
}

# Output to display the VM ID
output "vm_id" {
  description = "ID of the created virtual machine"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.id
}

output "vm_moref" {
  description = "Managed Object Reference of the VM"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.moref
}
```

:::note Adaptation of names
    The names of datacenters, clusters, and datastores must match those available in your Cloud Temple environment. Check the console to identify the available resources.
:::

## Schritt 6: Änderungen planen

Before applying the changes, visualize what will be created:

```bash
terraform plan
```

Terraform displays a detailed plan:

```
Terraform will perform the following actions:

  # cloudtemple_compute_virtual_machine.my_first_vm will be created
  + resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
      + cpu                    = 2
      + datacenter_id          = "xxxx-xxxx-xxxx"
      + guest_operating_system = "ubuntu64Guest"
      + id                     = (known after apply)
      + memory                 = 4294967296
      + name                   = "terraform-vm-01"
      + moref                  = (known after apply)
      ...
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```

## Schritt 7: Konfiguration anwenden

Bereiten Sie Ihre Infrastruktur bereit:

```bash
terraform apply
```

Terraform fordert Ihre Bestätigung an:

```
Möchten Sie diese Aktionen durchführen?
  Terraform wird die oben beschriebenen Aktionen durchführen.
  Nur "yes" wird akzeptiert, um die Bestätigung zu geben.

  Geben Sie einen Wert ein: 
```

Geben Sie `yes` ein und drücken Sie die Eingabetaste.

Terraform erstellt die Ressourcen:

```
cloudtemple_compute_virtual_machine.my_first_vm: Erstellung wird ausgeführt...
cloudtemple_compute_virtual_machine.my_first_vm: Erstellung wird ausgeführt... [10s vergangen]
cloudtemple_compute_virtual_machine.my_first_vm: Erstellung wird ausgeführt... [20s vergangen]
cloudtemple_compute_virtual_machine.my_first_vm: Erstellung abgeschlossen nach 25s [id=12345678-1234-1234-1234-123456789abc]

Anwendung abgeschlossen! Ressourcen: 1 hinzugefügt, 0 geändert, 0 entfernt.

Ausgaben:

vm_id = "12345678-1234-1234-1234-123456789abc"
vm_moref = "vm-123"
```

:::success Herzlichen Glückwunsch!
    Sie haben soeben Ihre erste virtuelle Maschine Cloud Temple mit Terraform erstellt!
:::

## Schritt 8: Erstellung überprüfen

### In the Cloud Temple console

1. Log in to the [Cloud Temple Console](https://shiva.cloud-temple.com)
2. Navigate to **IaaS VMWare** > **Virtual Machines**
3. You should see your Virtual Machine `terraform-vm-01`

### With Terraform

Display the current state:

```bash
terraform show
```

List the managed resources:

```bash
terraform state list
```

Display the outputs:

```bash
terraform output
```

## Schritt 9: Ihre Infrastruktur ändern

Ändern Sie die Datei `main.tf`, um den Speicher auf 8 GB zu erhöhen:

```hcl
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  memory = 8 * 1024 * 1024 * 1024  # 8 GB anstelle von 4 GB
  cpu    = 2
  # ... restliche Konfiguration
}
```

Planen und wenden Sie die Änderungen an:

```bash
terraform plan
terraform apply
```

Terraform erkennt die Änderung und aktualisiert die VM:

```
cloudtemple_compute_virtual_machine.my_first_vm: Zustand wird aktualisiert... [id=xxx]

Terraform wird die folgenden Aktionen ausführen:

  # cloudtemple_compute_virtual_machine.my_first_vm wird in-place aktualisiert
  ~ resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
      ~ memory = 4294967296 -> 8589934592
        # (andere Attribute bleiben unverändert)
    }

Plan: 0 hinzuzufügen, 1 zu ändern, 0 zu entfernen.
```

## Schritt 10: Ressourcen zerstören

When you have finished your tests, delete the created resources:

```bash
terraform destroy
```

Terraform displays what will be deleted and asks for confirmation:

```
cloudtemple_compute_virtual_machine.my_first_vm: Refreshing state... [id=xxx]

Terraform will perform the following actions:

  # cloudtemple_compute_virtual_machine.my_first_vm will be destroyed
  - resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
      - cpu    = 2
      - memory = 8589934592
      - name   = "terraform-vm-01"
      ...
    }

Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure.
  Only 'yes' will be accepted to confirm.

  Enter a value:
```

Type `yes` to confirm deletion.

## Empfohlene Projektstruktur

Für komplexere Projekte organisieren Sie Ihre Dateien wie folgt:

```
terraform-cloudtemple/
├── main.tf              # Hauptressourcen
├── versions.tf          # Provider-Konfiguration
├── variables.tf         # Variablendeklarationen
├── outputs.tf           # Output-Deklarationen
├── terraform.tfvars     # Variablenwerte (nicht versionieren)
├── .gitignore          # Git-Ausnahmen
└── README.md           # Projekt-Dokumentation
```

### Beispiel einer .gitignore-Datei

```gitignore
# Terraform Files
.terraform/
*.tfstate
*.tfstate.*
terraform.tfvars
.terraform.lock.hcl

# Crash Files
crash.log
crash.*.log

# Sensitive variable files
*.auto.tfvars
override.tf
override.tf.json
*_override.tf
*_override.tf.json
```

## Essentielle Terraform-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `terraform init` | Initialisiert das Arbeitsverzeichnis |
| `terraform validate` | Überprüft die Syntax der Konfiguration |
| `terraform fmt` | Formatiert die Dateien automatisch |
| `terraform plan` | Zeigt den Ausführungsplan an |
| `terraform apply` | Wendet die Änderungen an |
| `terraform destroy` | Zerstört alle Ressourcen |
| `terraform show` | Zeigt den aktuellen Zustand an |
| `terraform output` | Zeigt die Werte der Outputs an |
| `terraform state list` | Listet die verwalteten Ressourcen auf |

## Best Practices

### 1. Verwenden Sie Variablen

```hcl
# variables.tf
variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "dev"
}

# main.tf
resource "cloudtemple_compute_virtual_machine" "vm" {
  name = "${var.environment}-vm-01"
  # ...
  
  tags = {
    environment = var.environment
  }
}
```

### 2. Organize with modules

```hcl
# modules/vm/main.tf
resource "cloudtemple_compute_virtual_machine" "vm" {
  name   = var.name
  memory = var.memory
  cpu    = var.cpu
  # ...
}

# main.tf
module "web_vm" {
  source = "./modules/vm"
  
  name   = "web-01"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
}
```

### 3. Verwenden Sie einen entfernten Backend-Server

```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state-cloudtemple"
    key    = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}
```

### 4. Kommentieren Sie Ihren Code

```hcl
# Virtual Machine for the Production Web Server

# CPU and memory sized to handle 1000 req/s
resource "cloudtemple_compute_virtual_machine" "web_prod" {
  name = "web-prod-01"
  
  # Hardware configuration based on internal benchmarks
  memory = 16 * 1024 * 1024 * 1024  # 16 GB
  cpu    = 8
  # ...
}
```

### 5. Verwenden Sie Datenquellen

Erstellen Sie nicht erneut, was bereits vorhanden ist. Verwenden Sie Datenquellen, um auf bestehende Ressourcen zu verweisen:

```hcl
# Reference an existing network
data "cloudtemple_compute_network" "prod_network" {
  name = "PROD-VLAN-100"
}

resource "cloudtemple_compute_network_adapter" "nic" {
  network_id = data.cloudtemple_compute_network.prod_network.id
  # ...
}
```

## Troubleshooting

### Fehler: "Error: Failed to query available provider packages"

**Ursache**: Netzwerkproblem beim Zugriff auf den Terraform Registry.

**Lösung**: Überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut mit `terraform init`.

### Error: "Error: failed to login"

```
Error: failed to login: Unexpected response code: 401
```

**Cause**: Invalid or expired credentials.

**Solution**:
1. Check your environment variables
2. Generate a new API key in the console
3. Verify the permissions of your API key

### Fehler: "Error: resource not found"

```
Error: failed to find datastore named "ds002-t0001-r-stw1-data13-th3s"
```

**Ursache**: Die referenzierte Ressource (Datacenter, Cluster usw.) existiert nicht oder Sie haben keinen Zugriff darauf.

**Lösung**:
1. Überprüfen Sie den genauen Namen (oder die UUID) in der Cloud Temple-Konsole
2. Überprüfen Sie Ihre Zugriffsrechte für diese Ressource

## Nächste Schritte

Nachdem Sie die Grundlagen beherrschen, erkunden Sie nun die fortgeschrittenen Tutorials:

- [IaaS VMware-Tutorials](tutorials.md#iaas-vmware): Fortgeschrittener VM-Deploy, Disk-Management, Netzwerkkonfiguration
- [IaaS OpenSource-Tutorials](tutorials.md#iaas-opensource): Virtuelle Maschinen mit XCP-ng, Replikation, Hochverfügbarkeit
- [Object Storage-Tutorials](tutorials.md#object-storage): Erstellung von Buckets, Verwaltung von ACLs, S3-Integration

## Zusätzliche Ressourcen

- [Terraform Registry - Provider Cloud Temple](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple)
- [Cloud Temple Console](https://shiva.cloud-temple.com)
- [Terraform Cloud Temple Konzepte](concepts.md)
