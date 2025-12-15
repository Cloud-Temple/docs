---
title: Getting Started Guide
---

# Quick Start Guide

This guide walks you step by step through deploying your first Cloud Temple infrastructure with Terraform.

## Prerequisites

Before you begin, ensure you have:

- An active Cloud Temple account
- Access to the [Cloud Temple Console](https://shiva.cloud-temple.com)
- API key (Client ID and Secret ID)
- Terraform installed on your machine (version 1.0 or higher)

## Step 1: Install Terraform

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

Download the executable from [terraform.io](https://www.terraform.io/downloads) or use Chocolatey:

```powershell
choco install terraform
```

### Installation Verification

```bash
terraform version
```

You should see output similar to:

```
Terraform v1.6.0
```

## Step 2: Obtain Your API Key

### Generating an API Key in the Console

These credentials can be generated from the Cloud Temple Console by following [this procedure](https://docs.cloud-temple.com/console/api#api-keys).

:::warning Security
    Store these credentials securely. The Secret ID will be displayed only once.
:::

### Setting Environment Variables

Export your credentials as environment variables:

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

## Step 3: Create your Terraform project

### Create the project directory

```bash
mkdir terraform-cloudtemple-quickstart
cd terraform-cloudtemple-quickstart
```

### Create the provider configuration file

Create a file named `versions.tf`:

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
  # Credentials are automatically retrieved from environment variables
  # CLOUDTEMPLE_CLIENT_ID and CLOUDTEMPLE_SECRET_ID
}
```

## Step 4: Initialize Terraform

Initialize your Terraform project to download the provider:

```bash
terraform init
```

You should see:

```
Initializing the backend...

Initializing provider plugins...
- Finding Cloud-Temple/cloudtemple versions matching "~> 1.0"...
- Installing Cloud-Temple/cloudtemple v1.x.x...
- Installed Cloud-Temple/cloudtemple v1.x.x (signed by HashiCorp)

Terraform has been successfully initialized!
```

## Step 5: Create your first resource

### Simple example: VMware virtual machine

Create a file `main.tf` with minimal configuration:

```hcl
# Retrieving existing resources

data "cloudtemple_compute_machine_manager" "vc-vstack-01" {
  name = "vc-vstack-001-t0001" # Adapt with your vCenter name
}

data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"  # Adapt with your datacenter name
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"  # Adapt with your cluster name
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"  # Adapt with your datastore cluster name
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_backup_sla_policy" "daily" {
  name = "sla001-daily-par7s"  # Backup policy
}

# Creating a Virtual Machine
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  # Hardware configuration
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB in bytes
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Flexibility options
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Location
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Guest operating system
  guest_operating_system_moref = "ubuntu64Guest"
  
  # Backup policy
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

# Output to display the VM ID
output "vm_id" {
  description = "ID of the created virtual machine"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.id
}

output "vm_moref" {
  description = "Managed Object Reference of the VM"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.moref
}
```

:::note Naming adaptation
    The names of datacenters, clusters, and datastores must match those available in your Cloud Temple environment. Check the console to identify the available resources.
:::

## Step 6: Plan the Changes

Before applying the changes, visualize what will be created:

```bash
terraform plan
```

Terraform displays a detailed plan:

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

## Step 7: Apply the Configuration

Deploy your infrastructure:

```bash
terraform apply
```

Terraform prompts for confirmation:

```
Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: 
```

Type `yes` and press Enter.

Terraform creates the resources:

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

:::success Congratulations!
    You've just created your first Cloud Temple virtual machine using Terraform!
:::

## Step 8: Verify Creation

### In the Cloud Temple Console

1. Log in to the [Cloud Temple Console](https://shiva.cloud-temple.com)
2. Navigate to **IaaS VMWare** > **Virtual Machines**
3. You should see your Virtual Machine `terraform-vm-01`

### With Terraform

Display the current state:

```bash
terraform show
```

List the managed resources:

```bash
terraform state list
```

Display the outputs:

```bash
terraform output
```

## Step 9: Modify Your Infrastructure

Edit the `main.tf` file to increase the memory to 8 GB:

```hcl
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  memory = 8 * 1024 * 1024 * 1024  # 8 GB instead of 4 GB
  cpu    = 2
  # ... remaining configuration
}
```

Plan and apply the changes:

```bash
terraform plan
terraform apply
```

Terraform detects the modification and updates the VM:

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

## Step 10: Destroy the resources

When you have finished your tests, delete the created resources:

```bash
terraform destroy
```

Terraform displays what will be deleted and asks for confirmation:

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

Type `yes` to confirm the deletion.

## Recommended Project Structure

For more complex projects, organize your files as follows:

```
terraform-cloudtemple/
├── main.tf              # Main resources
├── versions.tf          # Provider configuration
├── variables.tf         # Variable declarations
├── outputs.tf           # Output declarations
├── terraform.tfvars     # Variable values (do not version control)
├── .gitignore          # Git exclusions
└── README.md           # Project documentation
```

### Example of .gitignore

```gitignore
# Terraform Files
.terraform/
*.tfstate
*.tfstate.*
terraform.tfvars
.terraform.lock.hcl

# Crash Files
crash.log
crash.*.log

# Sensitive variable files
*.auto.tfvars
override.tf
override.tf.json
*_override.tf
*_override.tf.json
```

## Essential Terraform Commands

| Command | Description |
|---------|-------------|
| `terraform init` | Initializes the working directory |
| `terraform validate` | Validates the configuration syntax |
| `terraform fmt` | Automatically formats configuration files |
| `terraform plan` | Displays the execution plan |
| `terraform apply` | Applies the changes |
| `terraform destroy` | Destroys all resources |
| `terraform show` | Displays the current state |
| `terraform output` | Displays output values |
| `terraform state list` | Lists managed resources |

## Best practices

### 1. Use variables

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

### 2. Organize with modules

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

### 3. Use a remote backend

```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state-cloudtemple"
    key    = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}
```

### 4. Comment your code

```hcl
# Virtual Machine for the Production Web Server

# CPU and memory sized to handle 1000 req/s
resource "cloudtemple_compute_virtual_machine" "web_prod" {
  name = "web-prod-01"
  
  # Hardware configuration based on internal benchmarks
  memory = 16 * 1024 * 1024 * 1024  # 16 GB
  cpu    = 8
  # ...
}

### 5. Use data sources

Do not recreate what already exists. Use data sources to reference existing resources:

```hcl
# Reference an existing network
data "cloudtemple_compute_network" "prod_network" {
  name = "PROD-VLAN-100"
}

resource "cloudtemple_compute_network_adapter" "nic" {
  network_id = data.cloudtemple_compute_network.prod_network.id
  # ...
}
```

## Troubleshooting

### Error: "Error: Failed to query available provider packages"

**Cause**: Connection issue with the Terraform Registry.

**Solution**: Check your internet connection and retry `terraform init`.

### Error: "Error: failed to login"

```
Error: failed to login: Unexpected response code: 401
```

**Cause**: Invalid or expired credentials.

**Solution**:
1. Check your environment variables
2. Generate a new API key in the console
3. Verify the permissions of your API key

### Error: "Error: resource not found"

```
Error: failed to find datastore named "ds002-t0001-r-stw1-data13-th3s"
```

**Cause**: The referenced resource (datacenter, cluster, etc.) does not exist or you do not have access to it.

**Solution**:
1. Verify the exact name (or UUID) in the Cloud Temple console
2. Check your access rights to this resource

## Next Steps

Now that you've mastered the basics, explore the advanced tutorials:

- [VMware IaaS Tutorials](tutorials.md#iaas-vmware): Advanced VM deployment, disk management, network configuration
- [Open Source IaaS Tutorials](tutorials.md#iaas-opensource): XCP-ng virtual machines, replication, high availability
- [Object Storage Tutorials](tutorials.md#object-storage): Bucket creation, ACL management, S3 integration

## Additional Resources

- [Terraform Registry - Cloud Temple Provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple)
- [Cloud Temple Console](https://shiva.cloud-temple.com)
- [Terraform Cloud Temple Concepts](concepts.md)
