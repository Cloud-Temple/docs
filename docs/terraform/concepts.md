---
title: Concepts
---

# Concepts de Terraform dans le provider Cloud Temple

Cette page présente les concepts fondamentaux nécessaires pour comprendre et utiliser efficacement le provider Terraform Cloud Temple.

## Infrastructure as Code (IaC)

L'Infrastructure as Code est une approche qui consiste à gérer et provisionner l'infrastructure informatique à travers des fichiers de configuration lisibles par l'homme, plutôt que par une configuration manuelle ou des outils interactifs.

### Avantages de l'IaC avec Terraform

- **Versionnage** : L'infrastructure est définie dans des fichiers qui peuvent être versionnés (Git)
- **Collaboration** : Les équipes peuvent travailler ensemble sur la même infrastructure
- **Automatisation** : Réduction des erreurs humaines et gain de temps
- **Documentation** : Le code décrit explicitement l'infrastructure
- **Reproductibilité** : Déploiement d'environnements identiques en quelques minutes

## Provider Terraform

Un provider Terraform est un plugin qui permet à Terraform d'interagir avec une API spécifique. Le provider Cloud Temple agit comme une couche d'abstraction entre vos fichiers de configuration Terraform et les APIs Cloud Temple.

### Déclaration du provider

Le provider doit être déclaré dans un bloc `terraform` avec `required_providers` :

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

### Authentification

Le provider s'authentifie auprès des APIs Cloud Temple en utilisant :

1. **Client ID** : Identifiant unique de votre application
2. **Secret ID** : Clé secrète associée au Client ID

Ces identifiants sont générés depuis la Console de Cloud Temple et permettent au provider d'effectuer des opérations en votre nom.

:::info Bonnes pratiques
    Stockez vos credentials dans des variables d'environnement ou un gestionnaire de secrets, jamais directement dans le code.
:::

## Ressources

Une ressource représente un composant d'infrastructure qui peut être créé, lu, mis à jour ou supprimé (opérations CRUD).

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

### Types de ressources Cloud Temple

#### IaaS VMware

- `cloudtemple_compute_virtual_machine` : Machine virtuelle
- `cloudtemple_compute_virtual_disk` : Disque virtuel
- `cloudtemple_compute_network_adapter` : Interface réseau
- `cloudtemple_compute_virtual_controller` : Contrôleur de périphérique

#### IaaS OpenSource

- `cloudtemple_compute_iaas_opensource_virtual_machine` : Machine virtuelle
- `cloudtemple_compute_iaas_opensource_virtual_disk` : Disque virtuel
- `cloudtemple_compute_iaas_opensource_network_adapter` : Interface réseau 
- `cloudtemple_compute_iaas_opensource_replication_policy` : Politique de réplication

#### Object Storage

- `cloudtemple_object_storage_bucket` : Bucket S3
- `cloudtemple_object_storage_storage_account` : Compte de stockage
- `cloudtemple_object_storage_acl_entry` : ACL d'un bucket
- `cloudtemple_object_storage_global_access_key`: Clé d'accès global au namespace

### Attributs et arguments

Chaque ressource possède :

- **Arguments** : Valeurs que vous configurez (inputs)
- **Attributs** : Valeurs retournées par la ressource (outputs)

```hcl
resource "cloudtemple_compute_virtual_machine" "example" {
  # Arguments (configuration)
  name   = "my-vm"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
  
  # Attributs (calculés automatiquement)
  # id, moref, machine_manager_id, etc.
}

# Référence à un attribut
output "vm_id" {
  value = cloudtemple_compute_virtual_machine.example.id
}
```

## Datasources

Les datasources permettent de récupérer des informations sur des ressources existantes sans les gérer. Elles sont en **lecture seule**.

### Utilisation des datasources

```hcl
# Récupération d'un datacenter existant
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Récupération d'un cluster
data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu002-ucs01"
}

# Utilisation dans une ressource
resource "cloudtemple_compute_virtual_machine" "web" {
  name            = "web-server"
  datacenter_id   = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  # ...
}
```

### Datasources principales

Vous pouvez retrouver la liste complète des datasources disponibles dans le provider Terraform Cloud Temple sur [documentation Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)

#### Infrastructure Compute

| Datasource | Description |
|------------|-------------|
| `cloudtemple_compute_virtual_datacenter` | Datacenter virtuel |
| `cloudtemple_compute_host_cluster` | Cluster d'hôtes |
| `cloudtemple_compute_datastore_cluster` | Cluster de datastores |
| `cloudtemple_compute_datastore` | Datastore individuel |
| `cloudtemple_compute_network` | Réseau (VLAN, VXLAN) |
| `cloudtemple_compute_machine_manager` | Machine Manager (vCenter) |

#### Templates et Marketplace

| Datasource | Description |
|------------|-------------|
| `cloudtemple_compute_content_library` | Bibliothèque de contenu |
| `cloudtemple_compute_content_library_item` | Item d'une bibliothèque |
| `cloudtemple_marketplace_item` | Item de la Marketplace Cloud Temple |
| `cloudtemple_compute_iaas_opensource_template` | Template dans le catalogue du IaaS OpenSource |

#### Backup

| Datasource | Description |
|------------|-------------|
| `cloudtemple_backup_sla_policy` | Politique SLA de backup VMware |
| `cloudtemple_backup_iaas_opensource_policy` | Politique de backup OpenSource |

#### Object Storage

| Datasource | Description |
|------------|-------------|
| `cloudtemple_object_storage_role` | Rôles disponibles pour les ACL |
| `cloudtemple_object_storage_bucket_files` | Fichiers dans un bucket |
| `cloudtemple_object_storage_storage_account` | Compte de stockage existant |

## État Terraform (State)

Le state Terraform est un fichier qui maintient la correspondance entre votre configuration et les ressources réelles dans le cloud.

### Fichier terraform.tfstate

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

### Backend remote

Pour un travail d'équipe, stockez le state dans un backend distant :

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
    Le fichier `terraform.tfstate` contient des informations sensibles. Ne le commitez jamais dans Git et utilisez un backend sécurisé pour le stockage.
:::

:::info
    OpenTofu propose le chiffrement du state par défaut ([OpenTofu - State and Plan Encryption](https://opentofu.org/docs/language/state/encryption/))
:::
## Cycle de vie Terraform

### 1. Initialisation (terraform init)

Initialise le répertoire de travail et télécharge le provider Cloud Temple :

```bash
terraform init
```

Cette commande :
- Télécharge le provider depuis le Terraform Registry
- Initialise le backend (si configuré)
- Crée le répertoire `.terraform/`

### 2. Planification (terraform plan)

Génère un plan d'exécution montrant les changements qui seront appliqués :

```bash
terraform plan
```

Le plan indique :
- **Ressources à créer** (`+`)
- **Ressources à modifier** (`~`)
- **Ressources à détruire** (`-`)
- **Ressources à recréer** (`-/+`)

### 3. Application (terraform apply)

Applique les changements pour atteindre l'état désiré :

```bash
terraform apply
```

Terraform :
1. Génère un plan
2. Demande confirmation (sauf avec `--auto-approve`)
3. Applique les changements
4. Met à jour le state

### 4. Destruction (terraform destroy)

Détruit toutes les ressources gérées :

```bash
terraform destroy
```

:::danger Attention
  Cette commande supprime définitivement toutes les ressources. Utilisez-la avec précaution.
:::
### 5. Autres commandes utiles

```bash
# Afficher l'état actuel
terraform show

# Lister les ressources
terraform state list

# Vérifier la configuration
terraform validate

# Formater les fichiers
terraform fmt

# Afficher les outputs
terraform output
```

## Dépendances et ordre d'exécution

Terraform analyse automatiquement les dépendances entre ressources.

### Dépendances implicites

Terraform détecte les références entre ressources :

```hcl
# La datasource est évaluée en premier
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Puis la VM est créée (dépendance implicite via datacenter_id)
resource "cloudtemple_compute_virtual_machine" "web" {
  name          = "web-server"
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  # ...
}

# Enfin le disque est attaché (dépendance via virtual_machine_id)
resource "cloudtemple_compute_virtual_disk" "data" {
  name               = "data-disk"
  virtual_machine_id = cloudtemple_compute_virtual_machine.web.id
  capacity           = 100 * 1024 * 1024 * 1024
}
```

### Dépendances explicites

Pour forcer un ordre spécifique, utilisez `depends_on` :

```hcl
resource "cloudtemple_compute_virtual_machine" "web" {
  name = "web-server"
  # ...
  
  depends_on = [
    cloudtemple_compute_network_adapter.eth0
  ]
}
```

## Variables et outputs

### Variables d'entrée

Rendent votre configuration réutilisable :

```hcl
variable "vm_name" {
  description = "Nom de la machine virtuelle"
  type        = string
  default     = "my-vm"
}

variable "vm_memory" {
  description = "Mémoire en GB"
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

Exposent des informations après l'application :

```hcl
output "vm_id" {
  description = "ID de la machine virtuelle"
  value       = cloudtemple_compute_virtual_machine.example.id
}

output "vm_moref" {
  description = "Managed Object Reference VMware"
  value       = cloudtemple_compute_virtual_machine.example.moref
}
```

## Modules

Les modules permettent de regrouper et réutiliser des configurations :

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

## Bonnes pratiques

### Organisation des fichiers

```
.
├── main.tf              # Ressources principales
├── variables.tf         # Déclarations des variables
├── outputs.tf           # Déclarations des outputs
├── versions.tf          # Versions Terraform et providers
├── terraform.tfvars     # Valeurs des variables (ne pas commiter)
└── modules/             # Modules réutilisables
    └── vm/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

### Gestion des secrets

```hcl
# ❌ À éviter
provider "cloudtemple" {
  client_id = "12345678-1234-1234-1234-123456789abc"
  secret_id = "secret-en-clair"
}

# ✅ Recommandé
provider "cloudtemple" {
  client_id = var.cloudtemple_client_id
  secret_id = var.cloudtemple_secret_id
}
```

### Utilisation de tags

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

## Prochaines étapes

- [Guide de démarrage](quickstart.md) : Créez votre première infrastructure avec Terraform
- [Tutoriels](tutorials.md) : Exemples pratiques pour chaque service
