---
title: Concetti
---

# Concetti di Terraform nel provider Cloud Temple

Questa pagina presenta i concetti fondamentali necessari per comprendere e utilizzare efficacemente il provider Terraform Cloud Temple.

## Infrastructure as Code (IaC)

L'Infrastructure as Code è un approccio che consiste nel gestire e provisionare l'infrastruttura informatica attraverso file di configurazione leggibili dall'uomo, piuttosto che tramite configurazione manuale o strumenti interattivi.

### Vantaggi di IaC con Terraform

- **Versionamento**: L'infrastruttura è definita in file che possono essere versionati (Git)
- **Collaborazione**: I team possono lavorare insieme sulla stessa infrastruttura
- **Automazione**: Riduzione degli errori umani e risparmio di tempo
- **Documentazione**: Il codice descrive esplicitamente l'infrastruttura
- **Riproducibilità**: Distribuzione di ambienti identici in pochi minuti

## Provider Terraform

Un provider Terraform è un plugin che permette a Terraform di interagire con un'API specifica. Il provider Cloud Temple agisce come uno strato di astrazione tra i file di configurazione Terraform e le API Cloud Temple.

### Dichiarazione del provider

Il provider deve essere dichiarato in un blocco `terraform` con `required_providers`:

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

### Autenticazione

Il provider si autentica presso le API Cloud Temple utilizzando:

1. **Client ID**: Identificatore univoco della propria applicazione
2. **Secret ID**: Chiave segreta associata al Client ID

Queste credenziali vengono generate dalla Console Cloud Temple e consentono al provider di eseguire operazioni per conto dell'utente.

:::info Best Practice
    Memorizzare le credenziali in variabili d'ambiente o in un gestore di segreti, mai direttamente nel codice.
:::

## Risorse

Una risorsa rappresenta un componente dell'infrastruttura che può essere creato, letto, aggiornato o eliminato (operazioni CRUD).

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

### Tipi di risorse Cloud Temple

#### IaaS VMware

- `cloudtemple_compute_virtual_machine`: Macchina virtuale
- `cloudtemple_compute_virtual_disk`: Disco virtuale
- `cloudtemple_compute_network_adapter`: Interfaccia di rete
- `cloudtemple_compute_virtual_controller`: Controller di dispositivo

#### IaaS OpenSource

- `cloudtemple_compute_iaas_opensource_virtual_machine`: Macchina virtuale
- `cloudtemple_compute_iaas_opensource_virtual_disk`: Disco
- `cloudtemple_compute_iaas_opensource_network_adapter`: Interfaccia di rete
- `cloudtemple_compute_iaas_opensource_replication_policy`: Politica di replica

#### Object Storage

- `cloudtemple_object_storage_bucket`: Bucket S3
- `cloudtemple_object_storage_storage_account`: Account di archiviazione
- `cloudtemple_object_storage_acl_entry`: ACL di un bucket
- `cloudtemple_object_storage_global_access_key`: Chiave di accesso globale al namespace

### Attributi e argomenti

Ogni risorsa ha:

- **Argomenti**: Valori che si configurano (input)
- **Attributi**: Valori restituiti dalla risorsa (output)

```hcl
resource "cloudtemple_compute_virtual_machine" "example" {
  # Argomenti (configurazione)
  name   = "my-vm"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
  
  # Attributi (calcolati automaticamente)
  # id, moref, machine_manager_id, etc.
}

# Riferimento a un attributo
output "vm_id" {
  value = cloudtemple_compute_virtual_machine.example.id
}
```

## Datasources

Le datasources consentono di recuperare informazioni su risorse esistenti senza gestirle. Sono in **sola lettura**.

### Utilizzo delle datasources

```hcl
# Recupero di un datacenter esistente
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Recupero di un cluster
data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu002-ucs01"
}

# Utilizzo in una risorsa
resource "cloudtemple_compute_virtual_machine" "web" {
  name            = "web-server"
  datacenter_id   = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  # ...
}
```

### Datasources principali

È possibile trovare l'elenco completo delle datasources disponibili nel provider Terraform Cloud Temple sulla [documentazione Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)

#### Infrastruttura Compute

| Datasource | Descrizione |
|------------|-------------|
| `cloudtemple_compute_virtual_datacenter` | Datacenter virtuale |
| `cloudtemple_compute_host_cluster` | Cluster di host |
| `cloudtemple_compute_datastore_cluster` | Cluster di datastore |
| `cloudtemple_compute_datastore` | Datastore individuale |
| `cloudtemple_compute_network` | Rete (VLAN, VXLAN) |
| `cloudtemple_compute_machine_manager` | Machine Manager (vCenter) |

#### Templates e Marketplace

| Datasource | Descrizione |
|------------|-------------|
| `cloudtemple_compute_content_library` | Libreria di contenuti |
| `cloudtemple_compute_content_library_item` | Elemento di libreria |
| `cloudtemple_marketplace_item` | Elemento Marketplace Cloud Temple |
| `cloudtemple_compute_iaas_opensource_template` | Template nel catalogo IaaS OpenSource |

#### Backup

| Datasource | Descrizione |
|------------|-------------|
| `cloudtemple_backup_sla_policy` | Politica SLA di backup VMware |
| `cloudtemple_backup_iaas_opensource_policy` | Politica di backup OpenSource |

#### Object Storage

| Datasource | Descrizione |
|------------|-------------|
| `cloudtemple_object_storage_role` | Ruoli disponibili per gli ACL |
| `cloudtemple_object_storage_bucket_files` | File in un bucket |
| `cloudtemple_object_storage_storage_account` | Account di archiviazione esistente |

## Stato Terraform (State)

Lo state Terraform è un file che mantiene la corrispondenza tra la configurazione e le risorse reali nel cloud.

### File terraform.tfstate

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

### Backend remoto

Per il lavoro di squadra, archiviare lo state in un backend remoto:

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
    Il file `terraform.tfstate` contiene informazioni sensibili. Non commitarlo mai in Git e utilizzare un backend sicuro per l'archiviazione.
:::

:::info
    OpenTofu offre la crittografia dello state per impostazione predefinita ([OpenTofu - State and Plan Encryption](https://opentofu.org/docs/language/state/encryption/))
:::

## Ciclo di vita Terraform

### 1. Inizializzazione (terraform init)

Inizializza la directory di lavoro e scarica il provider Cloud Temple:

```bash
terraform init
```

Questo comando:
- Scarica il provider dal Terraform Registry
- Inizializza il backend (se configurato)
- Crea la directory `.terraform/`

### 2. Pianificazione (terraform plan)

Genera un piano di esecuzione mostrando le modifiche che verranno applicate:

```bash
terraform plan
```

Il piano indica:
- **Risorse da creare** (`+`)
- **Risorse da modificare** (`~`)
- **Risorse da distruggere** (`-`)
- **Risorse da ricreare** (`-/+`)

### 3. Applicazione (terraform apply)

Applica le modifiche per raggiungere lo stato desiderato:

```bash
terraform apply
```

Terraform:
1. Genera un piano
2. Richiede conferma (tranne con `--auto-approve`)
3. Applica le modifiche
4. Aggiorna lo state

### 4. Distruzione (terraform destroy)

Distrugge tutte le risorse gestite:

```bash
terraform destroy
```

:::danger Attenzione
  Questo comando elimina permanentemente tutte le risorse. Usare con cautela.
:::

### 5. Altri comandi utili

```bash
# Mostrare lo stato attuale
terraform show

# Elencare le risorse
terraform state list

# Verificare la configurazione
terraform validate

# Formattare i file
terraform fmt

# Mostrare gli output
terraform output
```

## Dipendenze e ordine di esecuzione

Terraform analizza automaticamente le dipendenze tra le risorse.

### Dipendenze implicite

Terraform rileva i riferimenti tra le risorse:

```hcl
# La datasource viene valutata per prima
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Poi viene creata la VM (dipendenza implicita tramite datacenter_id)
resource "cloudtemple_compute_virtual_machine" "web" {
  name          = "web-server"
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  # ...
}

# Infine viene collegato il disco (dipendenza tramite virtual_machine_id)
resource "cloudtemple_compute_virtual_disk" "data" {
  name               = "data-disk"
  virtual_machine_id = cloudtemple_compute_virtual_machine.web.id
  capacity           = 100 * 1024 * 1024 * 1024
}
```

### Dipendenze esplicite

Per forzare un ordine specifico, utilizzare `depends_on`:

```hcl
resource "cloudtemple_compute_virtual_machine" "web" {
  name = "web-server"
  # ...
  
  depends_on = [
    cloudtemple_compute_network_adapter.eth0
  ]
}
```

## Variabili e output

### Variabili di input

Rendono la configurazione riutilizzabile:

```hcl
variable "vm_name" {
  description = "Nome della macchina virtuale"
  type        = string
  default     = "my-vm"
}

variable "vm_memory" {
  description = "Memoria in GB"
  type        = number
  default     = 8
}

resource "cloudtemple_compute_virtual_machine" "example" {
  name   = var.vm_name
  memory = var.vm_memory * 1024 * 1024 * 1024
  # ...
}
```

### Output

Espongono informazioni dopo l'applicazione:

```hcl
output "vm_id" {
  description = "ID della macchina virtuale"
  value       = cloudtemple_compute_virtual_machine.example.id
}

output "vm_moref" {
  description = "Managed Object Reference VMware"
  value       = cloudtemple_compute_virtual_machine.example.moref
}
```

## Moduli

I moduli consentono di raggruppare e riutilizzare le configurazioni:

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

## Best Practice

### Organizzazione dei file

```
.
├── main.tf              # Risorse principali
├── variables.tf         # Dichiarazioni delle variabili
├── outputs.tf           # Dichiarazioni degli output
├── versions.tf          # Versioni Terraform e provider
├── terraform.tfvars     # Valori delle variabili (non committare)
└── modules/             # Moduli riutilizzabili
    └── vm/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

### Gestione dei segreti

```hcl
# ❌ Da evitare
provider "cloudtemple" {
  client_id = "12345678-1234-1234-1234-123456789abc"
  secret_id = "segreto-in-chiaro"
}

# ✅ Consigliato
provider "cloudtemple" {
  client_id = var.cloudtemple_client_id
  secret_id = var.cloudtemple_secret_id
}
```

### Utilizzo dei tag

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

## Prossimi passi

- [Guida introduttiva](quickstart.md): Creare la prima infrastruttura con Terraform
- [Tutorial](tutorials.md): Esempi pratici per ogni servizio
