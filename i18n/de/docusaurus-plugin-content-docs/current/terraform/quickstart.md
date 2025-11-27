---
title: Erste Schritte
---

# Schnellstartanleitung

Diese Anleitung führt Sie Schritt für Schritt durch die Bereitstellung Ihrer ersten Cloud Temple-Infrastruktur mit Terraform.

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie über Folgendes verfügen:

- Ein aktives Cloud Temple-Konto
- Zugriff auf die [Cloud Temple Console](https://shiva.cloud-temple.com)
- API-Schlüssel (Client ID und Secret ID)
- Terraform auf Ihrem Computer installiert (Version 1.0 oder höher)

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

Sie sollten eine ähnliche Ausgabe sehen:

```
Terraform v1.6.0
```

## Schritt 2: Ihren API-Schlüssel erhalten

### Generieren eines API-Schlüssels in der Console

Diese Zugangsdaten können über die Cloud Temple Console generiert werden, indem Sie [dieser Anleitung](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api) folgen.

:::warning Sicherheit
    Bewahren Sie diese Zugangsdaten sicher auf. Die Secret ID wird nur einmal angezeigt.
:::

### Konfigurieren von Umgebungsvariablen

Exportieren Sie Ihre Zugangsdaten als Umgebungsvariablen:

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

### Provider-Konfigurationsdatei erstellen

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
  # Zugangsdaten werden automatisch aus Umgebungsvariablen abgerufen
  # CLOUDTEMPLE_CLIENT_ID und CLOUDTEMPLE_SECRET_ID
}
```

## Schritt 4: Terraform initialisieren

Initialisieren Sie Ihr Terraform-Projekt, um den Provider herunterzuladen:

```bash
terraform init
```

Sie sollten sehen:

```
Initializing the backend...

Initializing provider plugins...
- Finding Cloud-Temple/cloudtemple versions matching "~> 1.0"...
- Installing Cloud-Temple/cloudtemple v1.x.x...
- Installed Cloud-Temple/cloudtemple v1.x.x (signed by HashiCorp)

Terraform has been successfully initialized!
```

## Schritt 5: Ihre erste Ressource erstellen

### Einfaches Beispiel: VMware virtuelle Maschine

Erstellen Sie eine Datei `main.tf` mit einer minimalen Konfiguration:

```hcl
# Abrufen notwendiger vorhandener Ressourcen
data "cloudtemple_compute_machine_manager" "vc-vstack-01" {
  name = "vc-vstack-001-t0001" # Passen Sie den Namen Ihres vCenters an
}

data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"  # Passen Sie den Namen Ihres Rechenzentrums an
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"  # Passen Sie den Namen Ihres Clusters an
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"  # Passen Sie den Namen Ihres Datastore-Clusters an
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_backup_sla_policy" "daily" {
  name = "sla001-daily-par7s"  # Backup-Richtlinie
}

# Erstellen einer virtuellen Maschine
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  # Hardware-Konfiguration
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
  
  # Betriebssystem
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
  description = "ID der erstellten virtuellen Maschine"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.id
}

output "vm_moref" {
  description = "Managed Object Reference der VM"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.moref
}
```

:::note Namen anpassen
    Die Namen der Rechenzentren, Cluster und Datastores müssen mit denen in Ihrer Cloud Temple-Umgebung übereinstimmen. Überprüfen Sie die Console, um verfügbare Ressourcen zu identifizieren.
:::

## Schritt 6: Änderungen planen

Bevor Sie die Änderungen anwenden, visualisieren Sie, was erstellt wird:

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

Terraform fragt nach Bestätigung:

```
Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: 
```

Geben Sie `yes` ein und drücken Sie Enter.

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

:::success Glückwunsch!
    Sie haben gerade Ihre erste Cloud Temple virtuelle Maschine mit Terraform erstellt!
:::

## Schritt 8: Erstellung überprüfen

### In der Cloud Temple Console

1. Melden Sie sich bei der [Cloud Temple Console](https://shiva.cloud-temple.com) an
2. Navigieren Sie zu **IaaS VMWare** > **Virtuelle Maschinen**
3. Sie sollten Ihre virtuelle Maschine `terraform-vm-01` sehen

### Mit Terraform

Aktuellen Zustand anzeigen:

```bash
terraform show
```

Verwaltete Ressourcen auflisten:

```bash
terraform state list
```

Outputs anzeigen:

```bash
terraform output
```

## Schritt 9: Ihre Infrastruktur ändern

Ändern Sie die Datei `main.tf`, um den Speicher auf 8 GB zu erhöhen:

```hcl
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  memory = 8 * 1024 * 1024 * 1024  # 8 GB statt 4 GB
  cpu    = 2
  # ... Rest der Konfiguration
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
        # (andere Attribute unverändert)
    }

Plan: 0 to add, 1 to change, 0 to destroy.
```

## Schritt 10: Ressourcen zerstören

Wenn Sie mit dem Testen fertig sind, löschen Sie die erstellten Ressourcen:

```bash
terraform destroy
```

Terraform zeigt an, was gelöscht wird, und fragt nach Bestätigung:

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

Geben Sie `yes` ein, um die Löschung zu bestätigen.

## Empfohlene Projektstruktur

Für komplexere Projekte organisieren Sie Ihre Dateien wie folgt:

```
terraform-cloudtemple/
├── main.tf              # Hauptressourcen
├── versions.tf          # Provider-Konfiguration
├── variables.tf         # Variablendeklarationen
├── outputs.tf           # Output-Deklarationen
├── terraform.tfvars     # Variablenwerte (nicht versionieren)
├── .gitignore          # Git-Ausschlüsse
└── README.md           # Projektdokumentation
```

### Beispiel .gitignore

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

# Sensible Variablendateien
*.auto.tfvars
override.tf
override.tf.json
*_override.tf
*_override.tf.json
```

## Wichtige Terraform-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `terraform init` | Arbeitsverzeichnis initialisieren |
| `terraform validate` | Konfigurationssyntax validieren |
| `terraform fmt` | Dateien automatisch formatieren |
| `terraform plan` | Ausführungsplan anzeigen |
| `terraform apply` | Änderungen anwenden |
| `terraform destroy` | Alle Ressourcen zerstören |
| `terraform show` | Aktuellen Zustand anzeigen |
| `terraform output` | Output-Werte anzeigen |
| `terraform state list` | Verwaltete Ressourcen auflisten |

## Best Practices

### 1. Variablen verwenden

```hcl
# variables.tf
variable "environment" {
  description = "Bereitstellungsumgebung"
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

### 2. Mit Modulen organisieren

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

### 3. Remote Backend verwenden

```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state-cloudtemple"
    key    = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}
```

### 4. Code kommentieren

```hcl
# Virtuelle Maschine für Produktions-Webserver
# CPU und Speicher dimensioniert für 1000 Req/s
resource "cloudtemple_compute_virtual_machine" "web_prod" {
  name = "web-prod-01"
  
  # Hardware-Konfiguration basierend auf internen Benchmarks
  memory = 16 * 1024 * 1024 * 1024  # 16 GB
  cpu    = 8
  # ...
}
```

### 5. Datasources verwenden

Erstellen Sie nicht neu, was bereits existiert. Verwenden Sie Datasources, um auf vorhandene Ressourcen zu verweisen:

```hcl
# Vorhandenes Netzwerk referenzieren
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

**Ursache**: Verbindungsproblem zum Terraform Registry.

**Lösung**: Überprüfen Sie Ihre Internetverbindung und versuchen Sie `terraform init` erneut.

### Fehler: "Error: failed to login"

```
Error: failed to login: Unexpected response code: 401
```

**Ursache**: Ungültige oder abgelaufene Zugangsdaten.

**Lösung**: 
1. Überprüfen Sie Ihre Umgebungsvariablen
2. Generieren Sie einen neuen API-Schlüssel in der Console
3. Überprüfen Sie die Berechtigungen Ihres API-Schlüssels

### Fehler: "Error: resource not found"

```
Error: failed to find datastore named "ds002-t0001-r-stw1-data13-th3s"
```

**Ursache**: Die referenzierte Ressource (Rechenzentrum, Cluster usw.) existiert nicht oder Sie haben keinen Zugriff darauf.

**Lösung**: 
1. Überprüfen Sie den genauen Namen (oder uuid) in der Cloud Temple Console
2. Überprüfen Sie Ihre Zugriffsrechte auf diese Ressource

## Nächste Schritte

Nachdem Sie die Grundlagen beherrschen, erkunden Sie erweiterte Tutorials:

- [VMware IaaS Tutorials](tutorials.md#iaas-vmware): Erweiterte VM-Bereitstellung, Disk-Verwaltung, Netzwerkkonfiguration
- [OpenSource IaaS Tutorials](tutorials.md#iaas-opensource): XCP-ng virtuelle Maschinen, Replikation, Hochverfügbarkeit
- [Object Storage Tutorials](tutorials.md#object-storage): Bucket-Erstellung, ACL-Verwaltung, S3-Integration

## Zusätzliche Ressourcen

- [Terraform Registry - Cloud Temple Provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple)
- [Cloud Temple Console](https://shiva.cloud-temple.com)
- [Cloud Temple Terraform Konzepte](concepts.md)
