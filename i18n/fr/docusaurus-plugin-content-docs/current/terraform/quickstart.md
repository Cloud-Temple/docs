---
title: Guide de démarrage
---

# Guide de démarrage rapide

Ce guide vous accompagne pas à pas pour déployer votre première infrastructure Cloud Temple avec Terraform.

## Prérequis

Avant de commencer, assurez-vous de disposer de :

- Un compte Cloud Temple actif
- Accès à la [Console Cloud Temple](https://shiva.cloud-temple.com)
- Clé API (Client ID et Secret ID)
- Terraform installé sur votre machine (version 1.0 ou supérieure)

## Étape 1 : Installer Terraform

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

Téléchargez l'exécutable depuis [terraform.io](https://www.terraform.io/downloads) ou utilisez Chocolatey :

```powershell
choco install terraform
```

### Vérification de l'installation

```bash
terraform version
```

Vous devriez voir une sortie similaire à :

```
Terraform v1.6.0
```

## Étape 2 : Obtenir votre Clé API

### Génération d'un Clé API dans la Console

Ces credentials peuvent être générés depuis la Console Cloud Temple en suivant [cette procédure](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api).

:::warning Sécurité
    Conservez ces credentials en lieu sûr. Le Secret ID ne sera affiché qu'une seule fois.
:::
### Configuration des variables d'environnement

Exportez vos credentials en variables d'environnement :

**Linux/macOS :**

```bash
export CLOUDTEMPLE_CLIENT_ID="12345678-1234-1234-1234-123456789abc"
export CLOUDTEMPLE_SECRET_ID="87654321-4321-4321-4321-cba987654321"
```

**Windows (PowerShell) :**

```powershell
$env:CLOUDTEMPLE_CLIENT_ID="12345678-1234-1234-1234-123456789abc"
$env:CLOUDTEMPLE_SECRET_ID="87654321-4321-4321-4321-cba987654321"
```

## Étape 3 : Créer votre projet Terraform

### Créer le répertoire du projet

```bash
mkdir terraform-cloudtemple-quickstart
cd terraform-cloudtemple-quickstart
```

### Créer le fichier de configuration du provider

Créez un fichier `versions.tf` :

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
  # Les credentials sont automatiquement récupérés depuis les variables d'environnement
  # CLOUDTEMPLE_CLIENT_ID et CLOUDTEMPLE_SECRET_ID
}
```

## Étape 4 : Initialiser Terraform

Initialisez votre projet Terraform pour télécharger le provider :

```bash
terraform init
```

Vous devriez voir :

```
Initializing the backend...

Initializing provider plugins...
- Finding Cloud-Temple/cloudtemple versions matching "~> 1.0"...
- Installing Cloud-Temple/cloudtemple v1.x.x...
- Installed Cloud-Temple/cloudtemple v1.x.x (signed by HashiCorp)

Terraform has been successfully initialized!
```

## Étape 5 : Créer votre première ressource

### Exemple simple : Machine virtuelle VMware

Créez un fichier `main.tf` avec une configuration minimale :

```hcl
# Récupération des ressources existantes nécessaires
data "cloudtemple_compute_machine_manager" "vc-vstack-01" {
  name = "vc-vstack-001-t0001" # Adaptez avec le nom de votre vCenter
}

data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"  # Adaptez avec le nom de votre datacenter
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"  # Adaptez avec le nom de votre cluster
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"  # Adaptez avec le nom de votre datastore cluster
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_backup_sla_policy" "daily" {
  name = "sla001-daily-par7s"  # Politique de sauvegarde
}

# Création d'une machine virtuelle
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  # Configuration matérielle
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB en bytes
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Options de flexibilité
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Emplacement
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Système d'exploitation
  guest_operating_system_moref = "ubuntu64Guest"
  
  # Politique de sauvegarde
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

# Output pour afficher l'ID de la VM
output "vm_id" {
  description = "ID de la machine virtuelle créée"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.id
}

output "vm_moref" {
  description = "Managed Object Reference de la VM"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.moref
}
```

:::note Adaptation des noms
    Les noms des datacenters, clusters et datastores doivent correspondre à ceux disponibles dans votre environnement Cloud Temple. Consultez la console pour identifier les ressources disponibles.
:::

## Étape 6 : Planifier les changements

Avant d'appliquer les changements, visualisez ce qui va être créé :

```bash
terraform plan
```

Terraform affiche un plan détaillé :

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

## Étape 7 : Appliquer la configuration

Déployez votre infrastructure :

```bash
terraform apply
```

Terraform vous demande confirmation :

```
Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: 
```

Tapez `yes` et appuyez sur Entrée.

Terraform crée les ressources :

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

:::success Félicitations !
    Vous venez de créer votre première machine virtuelle Cloud Temple avec Terraform !
:::

## Étape 8 : Vérifier la création

### Dans la console Cloud Temple

1. Connectez-vous à la [Console Cloud Temple](https://shiva.cloud-temple.com)
2. Naviguez vers **IaaS VMWare** > **Machines virtuelles**
3. Vous devriez voir votre Machine Virtuelle `terraform-vm-01`

### Avec Terraform

Affichez l'état actuel :

```bash
terraform show
```

Listez les ressources gérées :

```bash
terraform state list
```

Affichez les outputs :

```bash
terraform output
```

## Étape 9 : Modifier votre infrastructure

Modifiez le fichier `main.tf` pour augmenter la mémoire à 8 GB :

```hcl
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  memory = 8 * 1024 * 1024 * 1024  # 8 GB au lieu de 4 GB
  cpu    = 2
  # ... reste de la configuration
}
```

Planifiez et appliquez les changements :

```bash
terraform plan
terraform apply
```

Terraform détecte la modification et met à jour la VM :

```
cloudtemple_compute_virtual_machine.my_first_vm: Refreshing state... [id=xxx]

Terraform will perform the following actions:

  # cloudtemple_compute_virtual_machine.my_first_vm will be updated in-place
  ~ resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
      ~ memory = 4294967296 -> 8589934592
        # (autres attributs inchangés)
    }

Plan: 0 to add, 1 to change, 0 to destroy.
```

## Étape 10 : Détruire les ressources

Lorsque vous avez terminé vos tests, supprimez les ressources créées :

```bash
terraform destroy
```

Terraform affiche ce qui va être supprimé et demande confirmation :

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

Tapez `yes` pour confirmer la suppression.

## Structure de projet recommandée

Pour des projets plus complexes, organisez vos fichiers ainsi :

```
terraform-cloudtemple/
├── main.tf              # Ressources principales
├── versions.tf          # Configuration du provider
├── variables.tf         # Déclarations des variables
├── outputs.tf           # Déclarations des outputs
├── terraform.tfvars     # Valeurs des variables (ne pas versionner)
├── .gitignore          # Exclusions Git
└── README.md           # Documentation du projet
```

### Exemple de .gitignore

```gitignore
# Fichiers Terraform
.terraform/
*.tfstate
*.tfstate.*
terraform.tfvars
.terraform.lock.hcl

# Fichiers de crash
crash.log
crash.*.log

# Fichiers de variables sensibles
*.auto.tfvars
override.tf
override.tf.json
*_override.tf
*_override.tf.json
```

## Commandes Terraform essentielles

| Commande | Description |
|----------|-------------|
| `terraform init` | Initialise le répertoire de travail |
| `terraform validate` | Valide la syntaxe de la configuration |
| `terraform fmt` | Formate automatiquement les fichiers |
| `terraform plan` | Affiche le plan d'exécution |
| `terraform apply` | Applique les changements |
| `terraform destroy` | Détruit toutes les ressources |
| `terraform show` | Affiche l'état actuel |
| `terraform output` | Affiche les valeurs des outputs |
| `terraform state list` | Liste les ressources gérées |

## Bonnes pratiques

### 1. Utilisez des variables

```hcl
# variables.tf
variable "environment" {
  description = "Environnement de déploiement"
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

### 2. Organisez avec des modules

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

### 3. Utilisez un backend distant

```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state-cloudtemple"
    key    = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}
```

### 4. Commentez votre code

```hcl
# Machine virtuelle pour le serveur web de production
# CPU et mémoire dimensionnés pour gérer 1000 req/s
resource "cloudtemple_compute_virtual_machine" "web_prod" {
  name = "web-prod-01"
  
  # Configuration matérielle basée sur les benchmarks internes
  memory = 16 * 1024 * 1024 * 1024  # 16 GB
  cpu    = 8
  # ...
}
```

### 5. Utilisez des datasources

Ne recréez pas ce qui existe déjà. Utilisez des datasources pour référencer les ressources existantes :

```hcl
# Référencer un réseau existant
data "cloudtemple_compute_network" "prod_network" {
  name = "PROD-VLAN-100"
}

resource "cloudtemple_compute_network_adapter" "nic" {
  network_id = data.cloudtemple_compute_network.prod_network.id
  # ...
}
```

## Dépannage

### Erreur : "Error: Failed to query available provider packages"

**Cause** : Problème de connexion au Terraform Registry.

**Solution** : Vérifiez votre connexion Internet et réessayez `terraform init`.

### Erreur : "Error: failed to login"

```
Error: failed to login: Unexpected response code: 401
```

**Cause** : Credentials invalides ou expirés.

**Solution** : 
1. Vérifiez vos variables d'environnement
2. Générez une nouvelle clé API dans la console
3. Vérifiez les permissions de votre Clé API

### Erreur : "Error: resource not found"

```
Error: failed to find datastore named "ds002-t0001-r-stw1-data13-th3s"
```

**Cause** : La ressource référencée (datacenter, cluster, etc.) n'existe pas ou vous n'y avez pas accès.

**Solution** : 
1. Vérifiez le nom exact (ou l'uuid) dans la console Cloud Temple
2. Vérifiez vos droits d'accès sur cette ressource

## Prochaines étapes

Maintenant que vous maîtrisez les bases, explorez les tutoriels avancés :

- [Tutoriels IaaS VMware](tutorials.md#iaas-vmware) : Déploiement avancé de VMs, gestion des disques, configuration réseau
- [Tutoriels IaaS OpenSource](tutorials.md#iaas-opensource) : Machines virtuelles XCP-ng, réplication, haute disponibilité
- [Tutoriels Object Storage](tutorials.md#object-storage) : Création de buckets, gestion des ACL, intégration S3

## Ressources complémentaires

- [Terraform Registry - Provider Cloud Temple](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple)
- [Console Cloud Temple](https://shiva.cloud-temple.com)
- [Concepts Terraform Cloud Temple](concepts.md)
