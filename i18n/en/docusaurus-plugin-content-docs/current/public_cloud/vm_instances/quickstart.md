---
title: Getting Started Guide
---

## Prerequisites

Before you begin, ensure you have the following:

- An active **Cloud Temple Tenant**
- A minimum **Standard Support** subscription
- The necessary permissions within your Cloud Temple organization

## Access the VM Instances Service

Log in to the **Cloud Temple Console** and navigate to **Cloud Public > VM Instances** from the main menu.

![Cloud Temple Console Dashboard](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

The dashboard provides an overview of the consumed VM Instances resources (stockage, CPU, RAM) as well as the number of active virtual machines.

Click on **Cloud Public** in the left sidebar to expand the submenu, then select **VM Instances**.

![Navigation to VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

You will be directed to the list of your VM Instances:

![VM Instances List](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

The table displays for each VM: its name, its status (Allumée / Éteinte), the availability zone, the instance family, the model, as well as the allocated resources (CPU, RAM, Taille disque).

## Deploy a virtual machine

Click the **+ New virtual machine** button in the top right to open the creation wizard. This wizard consists of **9 steps**.

### Step 1 — Instance Family

![Step 1: Instance Family](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Choose the **instance family** suited to your workload:

| Family | Description | CPU |
|---------|-------------|-----|
| **Development** | Cost-optimized, for testing and staging environments | Shared |
| **General Purpose** | Optimal vCPU/RAM balance for standard workloads | Shared |

:::info
The **Performance** family (dedicated vCPUs) is available via the custom template.
:::

### Step 2 — Availability Zone

![Step 2: Availability Zone](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Select the **availability zone (AZ)** in which your VM will be hosted (e.g., `fr1-az01`).

### Step 3 — Choose a template

![Step 3: Choose a template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Browse the catalog of available images via the **OS** and **Appliances** tabs:

- **Debian 13** (Trixie)
- **Rocky Linux**
- And other systems available in the Cloud Temple Marketplace

Select the desired operating system and choose the version from the associated dropdown menu.

### Step 4 — Template

![Step 4: Template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Choose a **predefined template** or create a **Custom template** :

- `dev-1` : 1 vCPU
- `dev-2` : 2 vCPU / 8 GB RAM (selected by default)
- **Custom** : manually specify the number of vCPUs and the amount of RAM

### Step 5 — Name and backup policy

![Step 5: Name and backup policy](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Enter:

| Parameter | Description |
|-----------|-------------|
| **Name** | Unique name for your VM in the tenant |
| **Backup policy** | `No Backup` by default, or a retention policy if the backup option is subscribed |

This step also displays a summary of the selected operating system and the system disk size.

### Step 6 — Cloud Init

![Step 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

This step is **optional**. It allows you to pre-configure your VM on first boot via two editors:

- **Cloud Config**: SSH key injection, hostname configuration, package installation, etc.
- **Network Config**: static network configuration (Netplan format)

Minimal Cloud Config example:

```yaml
#cloud-config
hostname: mon-serveur-01
ssh_authorized_keys:
  - ssh-rsa AAAA...votre_cle_publique
packages:
  - htop
```

A checkbox allows you to **delete the Cloud Init configuration disk** after the first boot (recommended for security).

### Step 7 — Disks

![Step 7: Disks](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Configure the disk(s) for your VM:

- **System disk** : created automatically (`system-disk-1`), size determined by the OS
- **Additional disks** : add extra volumes with the desired name, capacity, and storage type

Two storage types are available:

| Type | IOPS |
|------|------|
| **Standard** | ~1,500 IOPS/TB |
| **Enterprise** | ~7,500 IOPS/TB |

### Step 8 — Network Adapters

![Step 8: Network Adapters](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Associate your VM with a network from the dropdown menu. Two types of networks are available:

- **Private Backbone** (ex : PACKFR): shared private network with logical isolation
- **VPC**: fully dedicated private network with advanced segmentation

### Step 9 — Summary

![Step 9: Summary](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Review the complete summary before launching provisioning:

- General information (family, AZ, model, name, backup)
- Flavor (CPU, RAM)
- Cloud-Init configuration
- Virtual disks
- Network

Click **Create** to launch the deployment. The VM is provisioned within a few minutes.

## Manage your virtual machines

From the list, click on a VM to expand its details panel. Four tabs are available:

### Information tab

![VM details - Information](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

View and modify your VM settings:
- Name, UUID, availability zone
- Instance family, OS template
- CPU, RAM (modifiable when the VM is stopped)
- Backup policy

Action icons allow you to **start**, **stop**, **restart**, or **open the console** for the VM.

### Disks Tab

![VM Detail - Disks](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

View attached disks and add additional volumes via the **+ Add a disk** button.

### Network Adapters Tab

![VM Detail - Network](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

View the VM's network interfaces (network name, MAC address, IPv4/IPv6 address).

### Snapshots Tab

![VM Details - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Create and manage snapshots of your VM via the **+ Create a snapshot** button.

## Automation and Infrastructure as Code

The VM Instances service is fully automatable:

### Via the REST API

The Cloud Temple REST API allows for complete programmatic control of the virtual machine lifecycle.

API Reference: [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Via Terraform

The Cloud Temple Terraform provider allows you to manage your VM Instances as Infrastructure as Code.

```hcl
# Exemple de ressource VM Instances avec Terraform
# Consultez la documentation du provider pour les attributs disponibles
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

See the [Terraform documentation](/terraform) for provider installation and configuration.

## Useful Resources

- [Public Cloud Temple Documentation](https://docs.cloud-temple.com/home)
- [API Reference](https://shiva.cloud-temple.com/api/)
- [Terraform Documentation](/terraform)
- [Availability Zone Concepts](../../additional_content/concepts_az.md)