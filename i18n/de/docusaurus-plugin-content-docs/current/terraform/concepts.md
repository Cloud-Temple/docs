---
title: Konzepte
---

# Terraform-Konzepte im Cloud Temple Provider

Diese Seite präsentiert die grundlegenden Konzepte, die notwendig sind, um den Cloud Temple Terraform Provider effektiv zu verstehen und zu nutzen.

## Infrastructure as Code (IaC)

Infrastructure as Code ist ein Ansatz, bei dem IT-Infrastruktur durch menschenlesbare Konfigurationsdateien verwaltet und bereitgestellt wird, anstatt durch manuelle Konfiguration oder interaktive Tools.

### Vorteile von IaC mit Terraform

- **Versionierung**: Infrastruktur wird in Dateien definiert, die versioniert werden können (Git)
- **Zusammenarbeit**: Teams können gemeinsam an derselben Infrastruktur arbeiten
- **Automatisierung**: Reduzierung menschlicher Fehler und Zeitersparnis
- **Dokumentation**: Der Code beschreibt die Infrastruktur explizit
- **Reproduzierbarkeit**: Bereitstellung identischer Umgebungen in Minuten

## Terraform Provider

Ein Terraform Provider ist ein Plugin, das Terraform die Interaktion mit einer spezifischen API ermöglicht. Der Cloud Temple Provider fungiert als Abstraktionsschicht zwischen Ihren Terraform-Konfigurationsdateien und den Cloud Temple APIs.

### Provider-Deklaration

Der Provider muss in einem `terraform`-Block mit `required_providers` deklariert werden:

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

1. **Client ID**: Eindeutiger Identifikator für Ihre Anwendung
2. **Secret ID**: Geheimer Schlüssel, der mit der Client ID verknüpft ist

Diese Anmeldeinformationen werden über die Cloud Temple Konsole generiert und ermöglichen es dem Provider, Operationen in Ihrem Namen auszuführen.

:::info Best Practices
    Speichern Sie Ihre Anmeldeinformationen in Umgebungsvariablen oder einem Secrets-Manager, niemals direkt im Code.
:::

## Ressourcen

Eine Ressource repräsentiert eine Infrastrukturkomponente, die erstellt, gelesen, aktualisiert oder gelöscht werden kann (CRUD-Operationen).

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

### Cloud Temple Ressourcentypen

#### VMware IaaS

- `cloudtemple_compute_virtual_machine`: Virtuelle Maschine
- `cloudtemple_compute_virtual_disk`: Virtuelle Festplatte
- `cloudtemple_compute_network_adapter`: Netzwerkschnittstelle
- `cloudtemple_compute_virtual_controller`: Gerätecontroller

#### OpenSource IaaS

- `cloudtemple_compute_iaas_opensource_virtual_machine`: Virtuelle Maschine
- `cloudtemple_compute_iaas_opensource_virtual_disk`: Festplatte
- `cloudtemple_compute_iaas_opensource_network_adapter`: Netzwerkschnittstelle
- `cloudtemple_compute_iaas_opensource_replication_policy`: Replikationsrichtlinie

#### Object Storage

- `cloudtemple_object_storage_bucket`: S3-Bucket
- `cloudtemple_object_storage_storage_account`: Speicherkonto
- `cloudtemple_object_storage_acl_entry`: Bucket-ACL
- `cloudtemple_object_storage_global_access_key`: Globaler Zugriffsschlüssel für Namespace

### Attribute und Argumente

Jede Ressource hat:

- **Argumente**: Werte, die Sie konfigurieren (Eingaben)
- **Attribute**: Werte, die von der Ressource zurückgegeben werden (Ausgaben)

```hcl
resource "cloudtemple_compute_virtual_machine" "example" {
  # Argumente (Konfiguration)
  name   = "my-vm"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
  
  # Attribute (automatisch berechnet)
  # id, moref, machine_manager_id, etc.
}

# Verweis auf ein Attribut
output "vm_id" {
  value = cloudtemple_compute_virtual_machine.example.id
}
```

## Datasources

Datasources ermöglichen es Ihnen, Informationen über bestehende Ressourcen abzurufen, ohne sie zu verwalten. Sie sind **nur lesbar**.

### Verwendung von Datasources

```hcl
# Abrufen eines bestehenden Datacenters
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

### Hauptdatasources

Die vollständige Liste der verfügbaren Datasources im Cloud Temple Terraform Provider finden Sie in der [Terraform-Dokumentation](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)

#### Compute-Infrastruktur

| Datasource | Beschreibung |
|------------|-------------|
| `cloudtemple_compute_virtual_datacenter` | Virtuelles Datacenter |
| `cloudtemple_compute_host_cluster` | Host-Cluster |
| `cloudtemple_compute_datastore_cluster` | Datastore-Cluster |
| `cloudtemple_compute_datastore` | Einzelner Datastore |
| `cloudtemple_compute_network` | Netzwerk (VLAN, VXLAN) |
| `cloudtemple_compute_machine_manager` | Machine Manager (vCenter) |

#### Templates und Marketplace

| Datasource | Beschreibung |
|------------|-------------|
| `cloudtemple_compute_content_library` | Inhaltsbibliothek |
| `cloudtemple_compute_content_library_item` | Bibliothekselement |
| `cloudtemple_marketplace_item` | Cloud Temple Marketplace-Element |
| `cloudtemple_compute_iaas_opensource_template` | Template im OpenSource IaaS-Katalog |

#### Backup

| Datasource | Beschreibung |
|------------|-------------|
| `cloudtemple_backup_sla_policy` | VMware Backup-SLA-Richtlinie |
| `cloudtemple_backup_iaas_opensource_policy` | OpenSource Backup-Richtlinie |

#### Object Storage

| Datasource | Beschreibung |
|------------|-------------|
| `cloudtemple_object_storage_role` | Verfügbare Rollen für ACLs |
| `cloudtemple_object_storage_bucket_files` | Dateien in einem Bucket |
| `cloudtemple_object_storage_storage_account` | Bestehendes Speicherkonto |

## Terraform State

Der Terraform State ist eine Datei, die die Zuordnung zwischen Ihrer Konfiguration und den tatsächlichen Ressourcen in der Cloud aufrechterhält.

### terraform.tfstate Datei

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

### Remote Backend

Für die Teamzusammenarbeit speichern Sie den State in einem Remote-Backend:

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
    Die `terraform.tfstate`-Datei enthält sensible Informationen. Committen Sie sie niemals in Git und verwenden Sie ein sicheres Backend für die Speicherung.
:::

:::info
    OpenTofu bietet standardmäßig State-Verschlüsselung ([OpenTofu - State and Plan Encryption](https://opentofu.org/docs/language/state/encryption/))
:::

## Terraform-Lebenszyklus

### 1. Initialisierung (terraform init)

Initialisieren Sie das Arbeitsverzeichnis und laden Sie den Cloud Temple Provider herunter:

```bash
terraform init
```

Dieser Befehl:
- Lädt den Provider aus dem Terraform Registry herunter
- Initialisiert das Backend (falls konfiguriert)
- Erstellt das `.terraform/`-Verzeichnis

### 2. Planung (terraform plan)

Erzeugen Sie einen Ausführungsplan, der die anzuwendenden Änderungen zeigt:

```bash
terraform plan
```

Der Plan zeigt:
- **Zu erstellende Ressourcen** (`+`)
- **Zu ändernde Ressourcen** (`~`)
- **Zu löschende Ressourcen** (`-`)
- **Neu zu erstellende Ressourcen** (`-/+`)

### 3. Anwendung (terraform apply)

Wenden Sie Änderungen an, um den gewünschten Zustand zu erreichen:

```bash
terraform apply
```

Terraform:
1. Erzeugt einen Plan
2. Fragt nach Bestätigung (außer mit `--auto-approve`)
3. Wendet Änderungen an
4. Aktualisiert den State

### 4. Zerstörung (terraform destroy)

Zerstören Sie alle verwalteten Ressourcen:

```bash
terraform destroy
```

:::danger Achtung
  Dieser Befehl löscht alle Ressourcen dauerhaft. Mit Vorsicht verwenden.
:::

### 5. Weitere nützliche Befehle

```bash
# Aktuellen State anzeigen
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
# Die Datasource wird zuerst ausgewertet
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

## Variablen und Outputs

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

### Outputs

Geben Sie Informationen nach der Anwendung preis:

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

Module ermöglichen es Ihnen, Konfigurationen zu gruppieren und wiederzuverwenden:

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

### Dateiorganisation

```
.
├── main.tf              # Hauptressourcen
├── variables.tf         # Variablendeklarationen
├── outputs.tf           # Output-Deklarationen
├── versions.tf          # Terraform- und Provider-Versionen
├── terraform.tfvars     # Variablenwerte (nicht committen)
└── modules/             # Wiederverwendbare Module
    └── vm/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

### Secrets-Verwaltung

```hcl
# ❌ Zu vermeiden
provider "cloudtemple" {
  client_id = "12345678-1234-1234-1234-123456789abc"
  secret_id = "klartext-secret"
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

- [Erste Schritte](quickstart.md): Erstellen Sie Ihre erste Infrastruktur mit Terraform
- [Tutorials](tutorials.md): Praktische Beispiele für jeden Service
