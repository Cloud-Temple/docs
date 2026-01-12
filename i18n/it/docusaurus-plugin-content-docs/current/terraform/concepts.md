---
title: Concetti
---

# Concetti di Terraform nel provider Cloud Temple

Questa pagina presenta i concetti fondamentali necessari per comprendere e utilizzare efficacemente il provider Terraform Cloud Temple.

## Infrastructure as Code (IaC)

Infrastructure as Code è un approccio che consiste nel gestire e provisioning l'infrastruttura informatica tramite file di configurazione leggibili dall'uomo, piuttosto che tramite configurazioni manuali o strumenti interattivi.

### Vantaggi dell'IaC con Terraform

- **Controllo delle versioni**: L'infrastruttura è definita in file che possono essere tracciati (Git)
- **Collaborazione**: I team possono lavorare insieme sulla stessa infrastruttura
- **Automazione**: Riduzione degli errori umani e risparmio di tempo
- **Documentazione**: Il codice descrive esplicitamente l'infrastruttura
- **Riproducibilità**: Distribuzione di ambienti identici in pochi minuti

## Terraform Provider

A Terraform provider is a plugin that enables Terraform to interact with a specific API. The Cloud Temple provider acts as an abstraction layer between your Terraform configuration files and the Cloud Temple APIs.

### Dichiarazione del provider

Il provider deve essere dichiarato all'interno di un blocco `terraform` con `required_providers`:

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

Il provider si autentica presso le API di Cloud Temple utilizzando:

1. **Client ID**: Identificativo univoco della tua applicazione  
2. **Secret ID**: Chiave segreta associata al Client ID

Questi identificativi vengono generati dalla Console di Cloud Temple e consentono al provider di eseguire operazioni a tuo nome.

:::info Best practice  
Memorizza le tue credenziali in variabili d'ambiente o in un gestore di segreti, mai direttamente nel codice.  
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

- `cloudtemple_compute_virtual_machine` : Macchina virtuale
- `cloudtemple_compute_virtual_disk` : Disco virtuale
- `cloudtemple_compute_network_adapter` : Interfaccia di rete
- `cloudtemple_compute_virtual_controller` : Controller per dispositivi

#### IaaS OpenSource

- `cloudtemple_compute_iaas_opensource_virtual_machine` : Macchina virtuale
- `cloudtemple_compute_iaas_opensource_virtual_disk` : Disco virtuale
- `cloudtemple_compute_iaas_opensource_network_adapter` : Interfaccia di rete
- `cloudtemple_compute_iaas_opensource_replication_policy` : Politica di replica

#### Archiviazione oggetti

- `cloudtemple_object_storage_bucket` : Bucket S3
- `cloudtemple_object_storage_storage_account` : Account di archiviazione
- `cloudtemple_object_storage_acl_entry` : ACL di un bucket
- `cloudtemple_object_storage_global_access_key`: Chiave di accesso globale allo spazio dei nomi

### Attributi e argomenti

Ogni risorsa possiede:

- **Argomenti**: Valori che configurate (input)
- **Attributi**: Valori restituiti dalla risorsa (output)

```hcl
resource "cloudtemple_compute_virtual_machine" "example" {
  # Argomenti (configurazione)
  name   = "my-vm"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
  
  # Attributi (calcolati automaticamente)
  # id, moref, machine_manager_id, ecc.
}

# Reference to an attribute
output "vm_id" {
  value = cloudtemple_compute_virtual_machine.example.id
}
```

## Datasources

I datasources consentono di recuperare informazioni su risorse esistenti senza gestirle. Sono in sola **lettura**.

### Utilizzo dei datasources

```hcl
# Recupero di un datacenter esistente
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Recupero di un cluster
data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu002-ucs01"
}

# Uso in una risorsa
resource "cloudtemple_compute_virtual_machine" "web" {
  name            = "web-server"
  datacenter_id   = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  # ...
}
```

### Principali fonti dati

Puoi trovare l'elenco completo delle fonti dati disponibili nel provider Terraform Cloud Temple nella [documentazione Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)

#### Infrastruttura Compute

| Datasource | Descrizione |
|------------|-------------|
| `cloudtemple_compute_virtual_datacenter` | Datacenter virtuale |
| `cloudtemple_compute_host_cluster` | Cluster di host |
| `cloudtemple_compute_datastore_cluster` | Cluster di datastore |
| `cloudtemple_compute_datastore` | Datastore singolo |
| `cloudtemple_compute_network` | Rete (VLAN, VXLAN) |
| `cloudtemple_compute_machine_manager` | Machine Manager (vCenter) |

#### Template e Marketplace

| Datasource | Descrizione |
|------------|-------------|
| `cloudtemple_compute_content_library` | Libreria di contenuti |
| `cloudtemple_compute_content_library_item` | Elemento della libreria |
| `cloudtemple_marketplace_item` | Elemento del Marketplace Cloud Temple |
| `cloudtemple_compute_iaas_opensource_template` | Template nel catalogo del IaaS OpenSource |

#### Backup

| Datasource | Descrizione |
|------------|-------------|
| `cloudtemple_backup_sla_policy` | Politica SLA di backup VMware |
| `cloudtemple_backup_iaas_opensource_policy` | Politica di backup OpenSource |

#### Object Storage

| Datasource | Descrizione |
|------------|-------------|
| `cloudtemple_object_storage_role` | Ruoli disponibili per le ACL |
| `cloudtemple_object_storage_bucket_files` | File in un bucket |
| `cloudtemple_object_storage_storage_account` | Account di archiviazione esistente |

## Stato Terraform

Lo stato Terraform è un file che mantiene il collegamento tra la tua configurazione e le risorse effettive nel cloud.

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

Per un lavoro di squadra, memorizza lo stato in un backend remoto:

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
    Il file `terraform.tfstate` contiene informazioni sensibili. Non committerlo mai su Git e utilizza un backend sicuro per il suo archiviazione.
:::

:::info
    OpenTofu abilita il cifratura dello stato per impostazione predefinita ([OpenTofu - State and Plan Encryption](https://opentofu.org/docs/language/state/encryption/))
:::

## Ciclo di vita di Terraform

### 1. Inizializzazione (terraform init)

Inizializza il repository di lavoro e scarica il provider Cloud Temple:

```bash
terraform init
```

Questo comando:
- Scarica il provider dal Terraform Registry
- Inizializza il backend (se configurato)
- Crea la directory `.terraform/`

### 2. Pianificazione (terraform plan)

Genera un piano di esecuzione che mostra le modifiche che verranno applicate:

```bash
terraform plan
```

Il piano indica:
- **Risorse da creare** (`+`)
- **Risorse da modificare** (`~`)
- **Risorse da eliminare** (`-`)
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
4. Aggiorna lo stato

### 4. Distruzione (terraform destroy)

Elimina tutte le risorse gestite:

```bash
terraform destroy
```

:::danger Attenzione
  Questo comando elimina definitivamente tutte le risorse. Utilizzarlo con cautela.
:::

### 5. Altre comandi utili

```bash
# Mostra lo stato attuale
terraform show

# Elencare le risorse
terraform state list

# Verificare la configurazione
terraform validate

# Formattare i file
terraform fmt

# Visualizzare gli output
terraform output
```

## Dipendenze e ordine di esecuzione

Terraform analizza automaticamente le dipendenze tra le risorse.

### Dipendenze implicite

Terraform rileva le riferimenti tra le risorse:

```hcl
# La datasource viene valutata per prima
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Quindi la VM viene creata (dipendenza implicita tramite datacenter_id)
resource "cloudtemple_compute_virtual_machine" "web" {
  name          = "web-server"
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  # ...
}

# Finally the disk is attached (dependency via virtual_machine_id)
resource "cloudtemple_compute_virtual_disk" "data" {
  name               = "data-disk"
  virtual_machine_id = cloudtemple_compute_virtual_machine.web.id
  capacity           = 100 * 1024 * 1024 * 1024
}
```

### Dipendenze esplicite

Per impostare un ordine specifico, utilizza `depends_on`:

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

### Input variables

Make your configuration reusable:

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

### Outputs

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

I moduli consentono di raggruppare e riutilizzare configurazioni:

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

## Best practices

### Organizzazione dei file

```
.
├── main.tf              # Risorse principali
├── variables.tf         # Dichiarazioni delle variabili
├── outputs.tf           # Dichiarazioni degli output
├── versions.tf          # Versioni di Terraform e dei provider
├── terraform.tfvars     # Valori delle variabili (non da committare)
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

### Uso di tag

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

## Passi successivi

- [Guida introduttiva](quickstart.md): Creare la tua prima infrastruttura con Terraform
- [Tutorial](tutorials.md): Esempi pratici per ogni servizio
