---
title: Guida di avvio
---

# Guida di avvio rapido

Questa guida ti accompagna passo dopo passo nel distribuire la tua prima infrastruttura Cloud Temple con Terraform.

## Prerequisiti

Prima di iniziare, assicurati di disporre di:

- Un account Cloud Temple attivo
- Accesso alla [Console Cloud Temple](https://shiva.cloud-temple.com)
- Chiave API (Client ID e Secret ID)
- Terraform installato sulla tua macchina (versione 1.0 o successiva)

## Passo 1: Installare Terraform

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

Scarica l'eseguibile da [terraform.io](https://www.terraform.io/downloads) oppure utilizza Chocolatey:

```powershell
choco install terraform
```

### Verifica dell'installazione

```bash
terraform version
```

Dovresti vedere un output simile a:

```
Terraform v1.6.0
```

## Passo 2: Ottenere la chiave API

### Generazione di una chiave API dalla Console

Queste credenziali possono essere generate dalla Console Cloud Temple seguendo [questa procedura](https://docs.cloud-temple.com/console/api#chiavi-api).

:::warning Sicurezza
    Conserva queste credenziali in un luogo sicuro. L'ID del segreto verrà visualizzato solo una volta.
:::

### Configurazione delle variabili di ambiente

Esporta le tue credenziali come variabili di ambiente:

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

## Passo 3: Creare il tuo progetto Terraform

### Creare la directory del progetto

```bash
mkdir terraform-cloudtemple-quickstart
cd terraform-cloudtemple-quickstart
```

### Creare il file di configurazione del provider

Crea un file `versions.tf`:

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
  # Le credenziali vengono recuperate automaticamente dalle variabili d'ambiente
  # CLOUDTEMPLE_CLIENT_ID e CLOUDTEMPLE_SECRET_ID
}
```

## Passo 4: Inizializzare Terraform

Inizializza il tuo progetto Terraform per scaricare il provider:

```bash
terraform init
```

Dovresti vedere:

```
Initializing the backend...

Initializing provider plugins...
- Finding Cloud-Temple/cloudtemple versions matching "~> 1.0"...
- Installing Cloud-Temple/cloudtemple v1.x.x...
- Installed Cloud-Temple/cloudtemple v1.x.x (signed by HashiCorp)

Terraform has been successfully initialized!
```

## Passo 5: Creare la tua prima risorsa

### Esempio semplice: Macchina virtuale VMware

Crea un file `main.tf` con una configurazione minima:

```hcl
# Recupero delle risorse esistenti necessarie
data "cloudtemple_compute_machine_manager" "vc-vstack-01" {
  name = "vc-vstack-001-t0001" # Adatta con il nome del tuo vCenter
}

data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"  # Adatta con il nome del tuo datacenter
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"  # Adatta con il nome del tuo cluster
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"  # Adatta con il nome del tuo datastore cluster
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_backup_sla_policy" "daily" {
  name = "sla001-daily-par7s"  # Politica di backup
}

# Creazione di una macchina virtuale
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  # Configurazione hardware
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB in byte
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Opzioni di flessibilità
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Posizione
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Sistema operativo
  guest_operating_system_moref = "ubuntu64Guest"
  
  # Politica di backup
  backup_sla_policies = [
    data.cloudtemple_backup_sla_policy.daily.id
  ]
  
  # Tag
  tags = {
    environment = "demo"
    managed_by  = "terraform"
    owner       = "quickstart"
  }
}

# Output per visualizzare l'ID della VM
output "vm_id" {
  description = "ID della macchina virtuale creata"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.id
}

output "vm_moref" {
  description = "Managed Object Reference della VM"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.moref
}
```

:::note Adattamento dei nomi
    I nomi dei datacenter, cluster e datastore devono corrispondere a quelli disponibili nel tuo ambiente Cloud Temple. Consulta la console per identificare le risorse disponibili.
:::

## Passo 6: Pianificare le modifiche

Prima di applicare le modifiche, visualizza cosa verrà creato:

```bash
terraform plan
```

Terraform mostra un piano dettagliato:

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

## Passo 7: Applicare la configurazione

Distribuisci la tua infrastruttura:

```bash
terraform apply
```

Terraform chiede conferma:

```
Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: 
```

Digita `yes` e premi Invio.

Terraform crea le risorse:

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

:::success Congratulazioni!
    Hai appena creato la tua prima macchina virtuale Cloud Temple con Terraform!
:::

## Passo 8: Verificare la creazione

### Nella console Cloud Temple

1. Accedi alla [Console Cloud Temple](https://shiva.cloud-temple.com)
2. Naviga verso **IaaS VMWare** > **Macchine virtuali**
3. Dovresti vedere la tua macchina virtuale `terraform-vm-01`

### Con Terraform

Visualizza lo stato corrente:

```bash
terraform show
```

Elenco delle risorse gestite:

```bash
terraform state list
```

Visualizza gli output:

```bash
terraform output
```

## Passo 9: Modificare l'infrastruttura

Modifica il file `main.tf` per aumentare la memoria a 8 GB:

```hcl
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  memory = 8 * 1024 * 1024 * 1024  # 8 GB instead of 4 GB
  cpu    = 2
  # ... remaining configuration
}
```

Pianifica e applica le modifiche:

```bash
terraform plan
terraform apply
```

Terraform rileva la modifica e aggiorna la VM:

```
cloudtemple_compute_virtual_machine.my_first_vm: Refreshing state... [id=xxx]

Terraform will perform the following actions:

  # cloudtemple_compute_virtual_machine.my_first_vm will be updated in-place
  ~ resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
      ~ memory = 4294967296 -> 8589934592
        # (other attributes unchanged)
    }

Plan: 0 to add, 1 to change, 0 to destroy.
```

## Passo 10: Eliminare le risorse

Quando hai finito i tuoi test, elimina le risorse create:

```bash
terraform destroy
```

Terraform mostra cosa verrà eliminato e chiede conferma:

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

Digita `yes` per confermare l'eliminazione.

## Struttura del progetto consigliata

Per progetti più complessi, organizza i tuoi file in questo modo:

```
terraform-cloudtemple/
├── main.tf              # Risorse principali
├── versions.tf          # Configurazione del provider
├── variables.tf         # Dichiarazioni delle variabili
├── outputs.tf           # Dichiarazioni degli output
├── terraform.tfvars     # Valori delle variabili (non versionare)
├── .gitignore          # Esclusioni Git
└── README.md           # Documentazione del progetto
```

### Esempio di .gitignore

```gitignore
# Terraform Files
.terraform/
*.tfstate
*.tfstate.*
terraform.tfvars
.terraform.lock.hcl

# Crash files
crash.log
crash.*.log

# Sensitive variable files
*.auto.tfvars
override.tf
override.tf.json
*_override.tf
*_override.tf.json
```

## Comandi Terraform essenziali

| Comando | Descrizione |
|----------|-------------|
| `terraform init` | Inizializza il percorso di lavoro |
| `terraform validate` | Valida la sintassi della configurazione |
| `terraform fmt` | Formatta automaticamente i file |
| `terraform plan` | Mostra il piano di esecuzione |
| `terraform apply` | Applica le modifiche |
| `terraform destroy` | Elimina tutte le risorse |
| `terraform show` | Mostra lo stato corrente |
| `terraform output` | Mostra i valori degli output |
| `terraform state list` | Elencare le risorse gestite |

## Best practices

### 1. Usa le variabili

```hcl
# variables.tf
variable "environment" {
  description = "Ambiente di distribuzione"
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

### 2. Organizza con i moduli

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

### 3. Usa un backend remoto

```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state-cloudtemple"
    key    = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}
```

### 4. Commenta il tuo codice

```hcl
# Virtual machine for the production web server

# CPU and memory sized to handle 1000 req/s
resource "cloudtemple_compute_virtual_machine" "web_prod" {
  name = "web-prod-01"
  
  # Hardware configuration based on internal benchmarks
  memory = 16 * 1024 * 1024 * 1024  # 16 GB
  cpu    = 8
  # ...
}
```

### 5. Usa i datasources

Non ricreare ciò che esiste già. Utilizzate i datasources per fare riferimento alle risorse esistenti:

```hcl
# Referenziare una rete esistente
data "cloudtemple_compute_network" "prod_network" {
  name = "PROD-VLAN-100"
}

resource "cloudtemple_compute_network_adapter" "nic" {
  network_id = data.cloudtemple_compute_network.prod_network.id
  # ...
}
```

## Risoluzione dei problemi

### Errore: "Error: Failed to query available provider packages"

**Causa**: Problema di connessione con Terraform Registry.

**Soluzione**: Verifica la tua connessione a Internet e riprova il comando `terraform init`.

### Errore: "Error: failed to login"

```
Error: failed to login: Unexpected response code: 401
```

**Causa**: Credenziali non valide o scadute.

**Soluzione**:
1. Verifica le tue variabili d'ambiente
2. Genera una nuova chiave API dalla console
3. Verifica le autorizzazioni della tua chiave API

### Errore: "Error: resource not found"

```
Error: failed to find datastore named "ds002-t0001-r-stw1-data13-th3s"
```

**Causa**: La risorsa richiamata (datacenter, cluster, ecc.) non esiste oppure non ne hai accesso.

**Soluzione**:
1. Verifica il nome esatto (o l'uuid) nella console Cloud Temple
2. Verifica i tuoi diritti di accesso a questa risorsa

## Passi successivi

Ora che hai acquis le basi, esplora i tutorial avanzati:

- [Tutorial IaaS VMware](tutorials.md#iaas-vmware): Distribuzione avanzata di VM, gestione dei dischi, configurazione di rete  
- [Tutorial IaaS OpenSource](tutorials.md#iaas-opensource): Macchine virtuali XCP-ng, replica, alta disponibilità  
- [Tutorial Storage oggetto](tutorials.md#object-storage): Creazione di bucket, gestione delle ACL, integrazione S3

## Risorse aggiuntive

- [Terraform Registry - Provider Cloud Temple](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple)
- [Console Cloud Temple](https://shiva.cloud-temple.com)
- [Concetti Terraform Cloud Temple](concepts.md)
