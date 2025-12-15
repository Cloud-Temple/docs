---
title: Concepts
---

# Terraform Concepts in the Cloud Temple Provider

This page presents the fundamental concepts required to understand and effectively use the Terraform Cloud Temple provider.

## Infrastructure as Code (IaC)

Infrastructure as Code is an approach that involves managing and provisioning computing infrastructure through human-readable configuration files, rather than through manual configuration or interactive tools.

### Benefits of IaC with Terraform

- **Versioning**: Infrastructure is defined in files that can be versioned (e.g., Git)
- **Collaboration**: Teams can work together on the same infrastructure
- **Automation**: Reduction of human errors and time savings
- **Documentation**: Code explicitly describes the infrastructure
- **Reproducibility**: Deployment of identical environments in minutes

## Terraform Provider

A Terraform provider is a plugin that enables Terraform to interact with a specific API. The Cloud Temple provider acts as an abstraction layer between your Terraform configuration files and the Cloud Temple APIs.

### Provider Declaration

The provider must be declared within a `terraform` block using `required_providers`:

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

### Authentication

The provider authenticates to the Cloud Temple APIs using:

1. **Client ID**: Unique identifier for your application  
2. **Secret ID**: Secret key associated with the Client ID  

These credentials are generated from the Cloud Temple Console and allow the provider to perform operations on your behalf.

:::info Best practices
    Store your credentials in environment variables or a secrets manager, never directly in the code.
:::

## Resources

A resource represents an infrastructure component that can be created, read, updated, or deleted (CRUD operations).

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

### Cloud Temple Resource Types

#### IaaS VMware

- `cloudtemple_compute_virtual_machine` : Virtual machine
- `cloudtemple_compute_virtual_disk` : Virtual disk
- `cloudtemple_compute_network_adapter` : Network adapter
- `cloudtemple_compute_virtual_controller` : Virtual device controller

#### IaaS Open Source

- `cloudtemple_compute_iaas_opensource_virtual_machine` : Virtual machine
- `cloudtemple_compute_iaas_opensource_virtual_disk` : Virtual disk
- `cloudtemple_compute_iaas_opensource_network_adapter` : Network interface
- `cloudtemple_compute_iaas_opensource_replication_policy` : Replication policy

#### Object Storage

- `cloudtemple_object_storage_bucket`: S3 Bucket
- `cloudtemple_object_storage_storage_account`: Storage Account
- `cloudtemple_object_storage_acl_entry`: Bucket ACL
- `cloudtemple_object_storage_global_access_key`: Global Access Key for the namespace

### Attributes and Arguments

Each resource has:

- **Arguments**: Values you configure (inputs)
- **Attributes**: Values returned by the resource (outputs)

```hcl
resource "cloudtemple_compute_virtual_machine" "example" {
  # Arguments (configuration)
  name   = "my-vm"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
  
  # Attributes (automatically computed)
  # id, moref, machine_manager_id, etc.
}

# Reference to an attribute
output "vm_id" {
  value = cloudtemple_compute_virtual_machine.example.id
}
```

## Data sources

Data sources allow you to retrieve information about existing resources without managing them. They are **read-only**.

### Using data sources

```hcl
# Retrieving an existing datacenter
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Cluster Retrieval
data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu002-ucs01"
}

# Usage in a resource
resource "cloudtemple_compute_virtual_machine" "web" {
  name            = "web-server"
  datacenter_id   = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  # ...
}

### Main Datasources

You can find the complete list of available datasources in the Terraform Cloud Temple provider on [Terraform Documentation](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)

#### Compute Infrastructure

| Datasource | Description |
|------------|-------------|
| `cloudtemple_compute_virtual_datacenter` | Virtual Datacenter |
| `cloudtemple_compute_host_cluster` | Host Cluster |
| `cloudtemple_compute_datastore_cluster` | Datastore Cluster |
| `cloudtemple_compute_datastore` | Individual Datastore |
| `cloudtemple_compute_network` | Network (VLAN, VXLAN) |
| `cloudtemple_compute_machine_manager` | Machine Manager (vCenter) |

#### Templates and Marketplace

| Datasource | Description |
|------------|-------------|
| `cloudtemple_compute_content_library` | Content library |
| `cloudtemple_compute_content_library_item` | Library item |
| `cloudtemple_marketplace_item` | Cloud Temple Marketplace item |
| `cloudtemple_compute_iaas_opensource_template` | Template in the OpenSource IaaS catalog |

#### Backup

| Datasource | Description |
|------------|-------------|
| `cloudtemple_backup_sla_policy` | VMware backup SLA policy |
| `cloudtemple_backup_iaas_opensource_policy` | OpenSource backup policy |

#### Object Storage

| Datasource | Description |
|------------|-------------|
| `cloudtemple_object_storage_role` | Roles available for ACL |
| `cloudtemple_object_storage_bucket_files` | Files within a bucket |
| `cloudtemple_object_storage_storage_account` | Existing storage account |

## Terraform State

The Terraform state is a file that maintains the mapping between your configuration and the actual resources in the cloud.

### terraform.tfstate file

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

For team collaboration, store the state in a remote backend:

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
    The `terraform.tfstate` file contains sensitive information. Never commit it to Git and use a secure backend for storage.
:::

:::info
    OpenTofu enables state and plan encryption by default ([OpenTofu - State and Plan Encryption](https://opentofu.org/docs/language/state/encryption/))
:::

## Terraform Lifecycle

### 1. Initialization (terraform init)

Initialize the working directory and download the Cloud Temple provider:

```bash
terraform init
```

This command:
- Downloads the provider from the Terraform Registry
- Initializes the backend (if configured)
- Creates the `.terraform/` directory

### 2. Planning (terraform plan)

Generate an execution plan showing the changes that will be applied:

```bash
terraform plan
```

The plan indicates:
- **Resources to create** (`+`)
- **Resources to modify** (`~`)
- **Resources to destroy** (`-`)
- **Resources to recreate** (`-/+`)

### 3. Application (terraform apply)

Apply the changes to reach the desired state:

```bash
terraform apply
```

Terraform:
1. Generates a plan
2. Requests confirmation (unless using `--auto-approve`)
3. Applies the changes
4. Updates the state

### 4. Destruction (terraform destroy)

Destroys all managed resources:

```bash
terraform destroy
```

:::danger Attention
  This command permanently deletes all resources. Use with caution.
:::

### 5. Other useful commands

```bash
```

# Display current state
terraform show

# List resources
terraform state list

# Verify configuration
terraform validate

# Format files
terraform fmt

# Display outputs
terraform output
```

## Dependencies and Execution Order

Terraform automatically analyzes dependencies between resources.

### Implicit dependencies

Terraform detects references between resources:

```hcl
# The datasource is evaluated first
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Then the VM is created (implicit dependency via datacenter_id)
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

### Explicit dependencies

To enforce a specific order, use `depends_on`:

```hcl
resource "cloudtemple_compute_virtual_machine" "web" {
  name = "web-server"
  # ...
  
  depends_on = [
    cloudtemple_compute_network_adapter.eth0
  ]
}
```

## Variables and outputs

### Input variables

Make your configuration reusable:

```hcl
variable "vm_name" {
  description = "Name of the virtual machine"
  type        = string
  default     = "my-vm"
}

variable "vm_memory" {
  description = "Memory in GB"
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

Expose information after the application:

```hcl
output "vm_id" {
  description = "ID of the virtual machine"
  value       = cloudtemple_compute_virtual_machine.example.id
}

output "vm_moref" {
  description = "VMware Managed Object Reference"
  value       = cloudtemple_compute_virtual_machine.example.moref
}
```

## Modules

Modules allow you to group and reuse configurations:

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

## Best practices

### File Organization

```
.
├── main.tf              # Main resources
├── variables.tf         # Variable declarations
├── outputs.tf           # Output declarations
├── versions.tf          # Terraform and provider versions
├── terraform.tfvars     # Variable values (do not commit)
└── modules/             # Reusable modules
    └── vm/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

### Secret Management

```hcl
# ❌ Do not do this
provider "cloudtemple" {
  client_id = "12345678-1234-1234-1234-123456789abc"
  secret_id = "plaintext-secret"
}

# ✅ Recommended
provider "cloudtemple" {
  client_id = var.cloudtemple_client_id
  secret_id = var.cloudtemple_secret_id
}

### Using tags

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

## Next Steps

- [Quick Start Guide](quickstart.md): Set up your first infrastructure with Terraform
- [Tutorials](tutorials.md): Practical examples for each service
