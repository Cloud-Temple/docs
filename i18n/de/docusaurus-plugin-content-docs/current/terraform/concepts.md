---
title: Konzepte
---

# Konzepte von Terraform im Cloud Temple Provider

Diese Seite stellt die grundlegenden Konzepte vor, die notwendig sind, um den Terraform Cloud Temple Provider zu verstehen und effektiv zu nutzen.

## Infrastructure as Code (IaC)

Infrastructure as Code ist ein Ansatz, bei dem die Verwaltung und Bereitstellung von IT-Infrastruktur mithilfe von für Menschen lesbaren Konfigurationsdateien erfolgt, anstatt manuell oder über interaktive Tools.

### Vorteile von IaC mit Terraform

- **Versionskontrolle**: Die Infrastruktur wird in Dateien definiert, die versioniert werden können (Git)
- **Zusammenarbeit**: Teams können gemeinsam an derselben Infrastruktur arbeiten
- **Automatisierung**: Reduzierung menschlicher Fehler und Zeitersparnis
- **Dokumentation**: Der Code beschreibt die Infrastruktur explizit
- **Reproduzierbarkeit**: Bereitstellung identischer Umgebungen innerhalb weniger Minuten

## Terraform-Provider

Ein Terraform-Provider ist ein Plugin, das es Terraform ermöglicht, mit einer bestimmten API zu interagieren. Der Cloud Temple Provider fungiert als Abstraktionsschicht zwischen Ihren Terraform-Konfigurationsdateien und den Cloud Temple APIs.

### Provider-Deklaration

Der Provider muss innerhalb eines `terraform`-Blocks mit `required_providers` deklariert werden:

```hcl
terraform {
  required_providers {
    cloudtemple = {
      source  = "Cloud-Temple/cloudtemple"
      version = "~> 1.0"
    }
  }
}

provider "cloudtemple" {
  client_id = var.cloudtemple_client_id
  secret_id = var.cloudtemple_secret_id
}
```

### Authentifizierung

Der Provider authentifiziert sich bei den Cloud Temple APIs mit:

1. **Client ID**: Eindeutige Kennung für Ihre Anwendung
2. **Secret ID**: Geheimer Schlüssel, der mit der Client ID verbunden ist

Diese Anmeldeinformationen werden über die Cloud Temple-Konsole generiert und ermöglichen es dem Provider, Operationen in Ihrem Namen durchzuführen.

:::info Best Practices
    Speichern Sie Ihre Anmeldeinformationen in Umgebungsvariablen oder einem Secrets-Manager, niemals direkt im Code.
:::

## Ressourcen

Eine Ressource stellt eine Infrastrukturkomponente dar, die erstellt, gelesen, aktualisiert oder gelöscht werden kann (CRUD-Operationen).

```hcl
resource "cloudtemple_compute_virtual_machine" "web" {
  name                         = "web-server-01"
  memory                       = 8 * 1024 * 1024 * 1024
  cpu                          = 4
  datacenter_id                = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id              = data.cloudtemple_compute_host_cluster.cluster.id
  guest_operating_system_moref = "ubuntu64Guest"
}
```

### Cloud Temple-Ressourcentypen

#### IaaS VMware

- `cloudtemple_compute_virtual_machine` : Virtuelle Maschine
- `cloudtemple_compute_virtual_disk` : Virtuelle Festplatte
- `cloudtemple_compute_network_adapter` : Netzwerkadapter
- `cloudtemple_compute_virtual_controller` : Gerätecontroller

#### IaaS Open Source

- `cloudtemple_compute_iaas_opensource_virtual_machine` : Virtuelle Maschine
- `cloudtemple_compute_iaas_opensource_virtual_disk` : Virtuelle Festplatte
- `cloudtemple_compute_iaas_opensource_network_adapter` : Netzwerkschnittstelle
- `cloudtemple_compute_iaas_opensource_replication_policy` : Replikationsrichtlinie

#### Object Storage

- `cloudtemple_object_storage_bucket` : S3-Bucket
- `cloudtemple_object_storage_storage_account` : Speicherkonto
- `cloudtemple_object_storage_acl_entry` : ACL eines Buckets
- `cloudtemple_object_storage_global_access_key`: Globale Zugriffsschlüssel für den Namespace

### Attribute und Argumente

Jede Ressource verfügt über:

- **Argumente**: Werte, die Sie konfigurieren (Eingaben)
- **Attribute**: Werte, die von der Ressource zurückgegeben werden (Ausgaben)

```hcl
resource "cloudtemple_compute_virtual_machine" "example" {
  # Argumente (Konfiguration)
  name   = "my-vm"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
  
  # Attribute (automatisch berechnet)
  # id, moref, machine_manager_id, usw.
}

# Referenz auf ein Attribut
output "vm_id" {
  value = cloudtemple_compute_virtual_machine.example.id
}
```

## Datenquellen

Datenquellen ermöglichen die Abfrage von Informationen zu vorhandenen Ressourcen, ohne diese zu verwalten. Sie sind **schreibgeschützt**.

### Verwendung von Datenquellen

```hcl
# Abrufen eines vorhandenen Datacenters
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Abrufen eines Clusters
data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu002-ucs01"
}

# Verwendung in einer Ressource
resource "cloudtemple_compute_virtual_machine" "web" {
  name            = "web-server"
  datacenter_id   = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  # ...
}
```

### Hauptdatenquellen

Sie finden die vollständige Liste der verfügbaren Datenquellen im Terraform Cloud Temple Provider in der [Terraform-Dokumentation](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)

#### Compute-Infrastruktur

| Datenquelle | Beschreibung |
|-------------|--------------|
| `cloudtemple_compute_virtual_datacenter` | Virtuelles Datacenter |
| `cloudtemple_compute_host_cluster` | Host-Cluster |
| `cloudtemple_compute_datastore_cluster` | Datastore-Cluster |
| `cloudtemple_compute_datastore` | Einzelner Datastore |
| `cloudtemple_compute_network` | Netzwerk (VLAN, VXLAN) |
| `cloudtemple_compute_machine_manager` | Machine Manager (vCenter) |

#### Templates und Marketplace

| Datenquelle | Beschreibung |
|-------------|--------------|
| `cloudtemple_compute_content_library` | Inhaltsbibliothek |
| `cloudtemple_compute_content_library_item` | Element einer Bibliothek |
| `cloudtemple_marketplace_item` | Cloud Temple Marketplace-Element |
| `cloudtemple_compute_iaas_opensource_template` | Template im IaaS OpenSource-Katalog |

#### Backup

| Datenquelle | Beschreibung |
|-------------|--------------|
| `cloudtemple_backup_sla_policy` | SLA-Richtlinie für VMware-Backup |
| `cloudtemple_backup_iaas_opensource_policy` | Backup-Richtlinie für OpenSource |

#### Object Storage

| Datenquelle | Beschreibung |
|-------------|--------------|
| `cloudtemple_object_storage_role` | Verfügbare Rollen für ACL |
| `cloudtemple_object_storage_bucket_files` | Dateien in einem Bucket |
| `cloudtemple_object_storage_storage_account` | Vorhandenes Speicherkonto |

## Terraform-State

Der Terraform-State ist eine Datei, die die Zuordnung zwischen Ihrer Konfiguration und den tatsächlichen Ressourcen in der Cloud verwaltet.

### Terraform-State-Datei

```json
{
  "version": 4,
  "terraform_version": "1.5.0",
  "resources": [
    {
      "mode": "managed",
      "type": "cloudtemple_compute_virtual_machine",
      "name": "web",
      "provider": "provider[\"registry.terraform.io/Cloud-Temple/cloudtemple\"]",
      "instances": [...]
    }
  ]
}
```

### Remote-Backend

Für ein Teamprojekt speichern Sie den State in einem entfernten Backend:

```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state"
    key    = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}
```

:::warning
    Die Datei `terraform.tfstate` enthält sensible Informationen. Commiten Sie sie niemals in Git und verwenden Sie ein sicheres Backend für die Speicherung.
:::

:::info
    OpenTofu bietet die Verschlüsselung des States standardmäßig an ([OpenTofu - State and Plan Encryption](https://opentofu.org/docs/language/state/encryption/))
:::

## Terraform-Lebenszyklus

### 1. Initialisierung (terraform init)

Initialisiert das Arbeitsverzeichnis und lädt den Cloud Temple Provider herunter:

```bash
terraform init
```

Dieser Befehl:
- Lädt den Provider aus dem Terraform Registry herunter
- Initialisiert das Backend (falls konfiguriert)
- Erstellt das Verzeichnis `.terraform/`

### 2. Planung (terraform plan)

Erstellt einen Ausführungsplan, der die Änderungen anzeigt, die angewendet werden:

```bash
terraform plan
```

Der Plan zeigt an:
- **Ressourcen, die erstellt werden** (`+`)
- **Ressourcen, die geändert werden** (`~`)
- **Ressourcen, die entfernt werden** (`-`)
- **Ressourcen, die neu erstellt werden** (`-/+`)

### 3. Anwendung (terraform apply)

Wendet die Änderungen an, um den gewünschten Zustand zu erreichen:

```bash
terraform apply
```

Terraform:
1. Generiert einen Plan
2. Fordert Bestätigung an (außer bei Verwendung von `--auto-approve`)
3. Wendet die Änderungen an
4. Aktualisiert den State

### 4. Zerstörung (terraform destroy)

Zerstört alle verwalteten Ressourcen:

```bash
terraform destroy
```

:::danger Achtung
  Dieser Befehl löscht alle Ressourcen endgültig. Verwenden Sie ihn vorsichtig.
:::

### 5. Andere nützliche Befehle

```bash
# Aktuellen Zustand anzeigen
terraform show

# Ressourcen auflisten
terraform state list

# Konfiguration validieren
terraform validate

# Dateien formatieren
terraform fmt

# Outputs anzeigen
terraform output
```

## Abhängigkeiten und Ausführungsreihenfolge

Terraform analysiert automatisch Abhängigkeiten zwischen Ressourcen.

### Implizite Abhängigkeiten

Terraform erkennt Referenzen zwischen Ressourcen:

```hcl
# Die Datenquelle wird zuerst ausgewertet
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Dann wird die VM erstellt (implizite Abhängigkeit über datacenter_id)
resource "cloudtemple_compute_virtual_machine" "web" {
  name          = "web-server"
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  # ...
}

# Schließlich wird die Festplatte angehängt (Abhängigkeit über virtual_machine_id)
resource "cloudtemple_compute_virtual_disk" "data" {
  name               = "data-disk"
  virtual_machine_id = cloudtemple_compute_virtual_machine.web.id
  capacity           = 100 * 1024 * 1024 * 1024
}
```

### Explizite Abhängigkeiten

Um eine bestimmte Reihenfolge zu erzwingen, verwenden Sie `depends_on`:

```hcl
resource "cloudtemple_compute_virtual_machine" "web" {
  name = "web-server"
  # ...
  
  depends_on = [
    cloudtemple_compute_network_adapter.eth0
  ]
}
```

## Variablen und Ausgaben

### Eingabevariablen

Machen Sie Ihre Konfiguration wiederverwendbar:

```hcl
variable "vm_name" {
  description = "Name der virtuellen Maschine"
  type        = string
  default     = "my-vm"
}

variable "vm_memory" {
  description = "Speicher in GB"
  type        = number
  default     = 8
}

resource "cloudtemple_compute_virtual_machine" "example" {
  name   = var.vm_name
  memory = var.vm_memory * 1024 * 1024 * 1024
  # ...
}
```

### Ausgaben

Exponieren Sie Informationen nach der Anwendung:

```hcl
output "vm_id" {
  description = "ID der virtuellen Maschine"
  value       = cloudtemple_compute_virtual_machine.example.id
}

output "vm_moref" {
  description = "VMware Managed Object Reference"
  value       = cloudtemple_compute_virtual_machine.example.moref
}
```

## Module

Module ermöglichen die Gruppierung und Wiederverwendung von Konfigurationen:

```hcl
# modules/vm/main.tf
resource "cloudtemple_compute_virtual_machine" "vm" {
  name   = var.name
  memory = var.memory
  cpu    = var.cpu
  # ...
}

# main.tf
module "web_server" {
  source = "./modules/vm"
  
  name   = "web-01"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
}

module "db_server" {
  source = "./modules/vm"
  
  name   = "db-01"
  memory = 16 * 1024 * 1024 * 1024
  cpu    = 8
}
```

## Best Practices

### Dateistruktur

```
.
├── main.tf              # Hauptressourcen
├── variables.tf         # Variablendeklarationen
├── outputs.tf           # Ausgabedeklarationen
├── versions.tf          # Terraform- und Provider-Versionen
├── terraform.tfvars     # Variablenwerte (nicht commiten)
└── modules/             # Wiederverwendbare Module
    └── vm/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

### Geheimnisverwaltung

```hcl
# ❌ Zu vermeiden
provider "cloudtemple" {
  client_id = "12345678-1234-1234-1234-123456789abc"
  secret_id = "klartext-geheimnis"
}

# ✅ Empfohlen
provider "cloudtemple" {
  client_id = var.cloudtemple_client_id
  secret_id = var.cloudtemple_secret_id
}
```

### Verwendung von Tags

```hcl
resource "cloudtemple_compute_virtual_machine" "web" {
  name = "web-server"
  # ...
  
  tags = {
    environment = "production"
    managed_by  = "terraform"
    team        = "platform"
    cost_center = "engineering"
  }
}
```

## Nächste Schritte

- [Schnellstartanleitung](quickstart.md): Erstellen Sie Ihre erste Infrastruktur mit Terraform
- [Tutorials](tutorials.md): Praktische Beispiele für jeden Dienst
