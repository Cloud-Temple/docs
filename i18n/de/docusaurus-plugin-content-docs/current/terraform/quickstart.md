---
title: Erste Schritte mit dem Terraform-Provider
---

# Erste Schritte mit dem Terraform-Provider

Dieser Leitfaden begleitet Sie Schritt für Schritt bei der Bereitstellung Ihrer ersten Cloud Temple-Infrastruktur mit Terraform.

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

### Überprüfung der Installation

```bash
terraform version
```

Sie sollten eine Ausgabe ähnlich der folgenden sehen:

```
Terraform v1.6.0
```

## Schritt 2: API-Schlüssel erhalten

### Generieren eines API-Schlüssels in der Konsole

Diese Anmeldeinformationen können in der Cloud Temple-Konsole gemäß [diesem Verfahren](https://docs.cloud-temple.com/console/api#api-keys) generiert werden.

:::warning[Sicherheit]
Bewahren Sie diese Anmeldeinformationen sicher auf. Die Secret ID wird nur ein einziges Mal angezeigt.
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

Initialisieren Sie Ihr Terraform-Projekt, um den Provider herunterzuladen:

```bash
terraform init
```

Sie sollten Folgendes sehen:

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
# Abrufen der benötigten vorhandenen Ressourcen
data "cloudtemple_compute_machine_manager" "vc-vstack-01" {
  name = "vc-vstack-001-t0001" # An den Namen Ihres vCenters anpassen
}

data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"  # An den Namen Ihres Datacenters anpassen
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"  # An den Namen Ihres Clusters anpassen
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"  # An den Namen Ihres Datastore-Clusters anpassen
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_backup_sla_policy" "daily" {
  name = "sla001-daily-par7s"  # Backup-Richtlinie
}

# Erstellen einer virtuellen Maschine
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  # Hardwarekonfiguration
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB in Bytes
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Flexibilitätsoptionen
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Standort
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Gastbetriebssystem
  guest_operating_system_moref = "ubuntu64Guest"
  
  # Backup-Richtlinie
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

# Output zur Anzeige der VM-ID
output "vm_id" {
  description = "ID of the created virtual machine"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.id
}

output "vm_moref" {
  description = "Managed Object Reference of the VM"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.moref
}
```

:::note[Anpassung der Namen]
Die Namen der Datacenter, Cluster und Datastores müssen mit denen übereinstimmen, die in Ihrer Cloud Temple-Umgebung verfügbar sind. Prüfen Sie in der Konsole, welche Ressourcen verfügbar sind.
:::

## Schritt 6: Änderungen planen

Bevor Sie die Änderungen anwenden, lassen Sie sich anzeigen, was erstellt wird:

```bash
terraform plan
```

Terraform zeigt einen detaillierten Plan an:

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

Stellen Sie Ihre Infrastruktur bereit:

```bash
terraform apply
```

Terraform fordert Ihre Bestätigung an:

```
Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: 
```

Geben Sie `yes` ein und drücken Sie die Eingabetaste.

Terraform erstellt die Ressourcen:

```
cloudtemple_compute_virtual_machine.my_first_vm: Creating...
cloudtemple_compute_virtual_machine.my_first_vm: Still creating... [10s elapsed]
cloudtemple_compute_virtual_machine.my_first_vm: Still creating... [20s elapsed]
cloudtemple_compute_virtual_machine.my_first_vm: Creation complete after 25s [id=12345678-1234-1234-1234-123456789abc]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

vm_id = "12345678-1234-1234-1234-123456789abc"
vm_moref = "vm-123"
```

:::success[Herzlichen Glückwunsch!]
Sie haben soeben Ihre erste virtuelle Maschine Cloud Temple mit Terraform erstellt!
:::

## Schritt 8: Erstellung überprüfen

### In der Cloud Temple-Konsole

1. Melden Sie sich bei der [Cloud Temple-Konsole](https://shiva.cloud-temple.com) an
2. Navigieren Sie zu **IaaS VMWare** > **Virtuelle Maschinen**
3. Sie sollten Ihre virtuelle Maschine `terraform-vm-01` sehen

### Mit Terraform

Zeigen Sie den aktuellen Zustand an:

```bash
terraform show
```

Listen Sie die verwalteten Ressourcen auf:

```bash
terraform state list
```

Zeigen Sie die Outputs an:

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
cloudtemple_compute_virtual_machine.my_first_vm: Refreshing state... [id=xxx]

Terraform will perform the following actions:

  # cloudtemple_compute_virtual_machine.my_first_vm will be updated in-place
  ~ resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
      ~ memory = 4294967296 -> 8589934592
        # (andere Attribute bleiben unverändert)
    }

Plan: 0 to add, 1 to change, 0 to destroy.
```

## Schritt 10: Ressourcen zerstören

Wenn Sie Ihre Tests abgeschlossen haben, löschen Sie die erstellten Ressourcen:

```bash
terraform destroy
```

Terraform zeigt an, was gelöscht wird, und fordert eine Bestätigung an:

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

Geben Sie `yes` ein, um das Löschen zu bestätigen.

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
# Terraform-Dateien
.terraform/
*.tfstate
*.tfstate.*
terraform.tfvars
.terraform.lock.hcl

# Crash-Dateien
crash.log
crash.*.log

# Dateien mit sensiblen Variablen
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

### 2. Organisieren Sie mit Modulen

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
# Virtuelle Maschine für den Produktions-Webserver

# CPU und Arbeitsspeicher für 1000 req/s dimensioniert
resource "cloudtemple_compute_virtual_machine" "web_prod" {
  name = "web-prod-01"
  
  # Hardwarekonfiguration auf Basis interner Benchmarks
  memory = 16 * 1024 * 1024 * 1024  # 16 GB
  cpu    = 8
  # ...
}
```

### 5. Verwenden Sie Datenquellen

Erstellen Sie nicht erneut, was bereits vorhanden ist. Verwenden Sie Datenquellen, um auf bestehende Ressourcen zu verweisen:

```hcl
# Auf ein vorhandenes Netzwerk verweisen
data "cloudtemple_compute_network" "prod_network" {
  name = "PROD-VLAN-100"
}

resource "cloudtemple_compute_network_adapter" "nic" {
  network_id = data.cloudtemple_compute_network.prod_network.id
  # ...
}
```

## Fehlerbehebung

### Fehler: "Error: Failed to query available provider packages"

**Ursache**: Netzwerkproblem beim Zugriff auf den Terraform Registry.

**Lösung**: Überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut mit `terraform init`.

### Fehler: "Error: failed to login"

```
Error: failed to login: Unexpected response code: 401
```

**Ursache**: Ungültige oder abgelaufene Anmeldeinformationen.

**Lösung**:

1. Überprüfen Sie Ihre Umgebungsvariablen
2. Generieren Sie in der Konsole einen neuen API-Schlüssel
3. Überprüfen Sie die Berechtigungen Ihres API-Schlüssels

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
- [IaaS OpenSource-Tutorials](tutorials.md): Virtuelle Maschinen mit XCP-ng, Replikation, Hochverfügbarkeit
- [Object Storage-Tutorials](tutorials.md#object-storage): Erstellung von Buckets, Verwaltung von ACLs, S3-Integration

## Zusätzliche Ressourcen

- [Terraform Registry - Provider Cloud Temple](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple)
- [Cloud Temple Console](https://shiva.cloud-temple.com)
- [Terraform Cloud Temple Konzepte](concepts.md)
