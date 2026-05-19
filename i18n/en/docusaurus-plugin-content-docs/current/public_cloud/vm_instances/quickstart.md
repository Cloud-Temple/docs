---
title: Getting Started Guide
---

## Prerequisites

Before you begin, make sure you have the following:

- An active **Cloud Temple Tenant**
- A minimum **Standard Support** subscription
- The necessary permissions in your Cloud Temple organization

## Accessing the VM Instances Service

Log in to the **Cloud Temple Console** and navigate to **Cloud Public > VM Instances** from the main menu.

![Cloud Temple Console Dashboard](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

The dashboard gives you an overview of the VM Instances resources consumed (storage, CPU, RAM) as well as the number of active virtual machines.

Click on **Cloud Public** in the left sidebar to expand the submenu, then select **VM Instances**.

![Navigation to VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

You will land on the list of your VM Instances:

![VM Instances List](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

The table displays for each VM: its name, status (On / Off), availability zone, instance family, model, and allocated resources (CPU, RAM, Disk size).

## Deploying a Virtual Machine

Click the **+ New virtual machine** button at the top right to open the creation wizard. This wizard runs through **9 steps**.

### Step 1 — Instance Family

![Step 1: Instance Family](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Choose the **instance family** suited to your workload:

| Family | Description | CPU |
|--------|-------------|-----|
| **Development** | Cost-optimised, for test and staging environments | Shared |
| **General Purpose** | Optimal vCPU/RAM balance for standard workloads | Shared |

:::info
The **Performance** family (dedicated vCPUs) is available via the custom flavor option.
:::

### Step 2 — Availability Zone

![Step 2: Availability Zone](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Select the **availability zone (AZ)** in which your VM will be hosted (e.g. `fr1-az01`).

### Step 3 — Choose a Template

![Step 3: Choose a Template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Browse the available image catalogue via the **OS** and **Appliances** tabs:

- **Debian 13** (Trixie)
- **Rocky Linux**
- And other systems available in the Cloud Temple Marketplace

Select the desired operating system and choose the version from the associated dropdown.

### Step 4 — Flavor

![Step 4: Flavor](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Choose a **predefined flavor** or create a **Custom flavor**:

- `dev-1`: 1 vCPU
- `dev-2`: 2 vCPU / 8 GB RAM
- **Custom**: freely enter the number of vCPUs and the amount of RAM

### Step 5 — Name and Backup Policy

![Step 5: Name and Backup Policy](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Fill in:

| Parameter | Description |
|-----------|-------------|
| **Name** | Unique name for your VM in the tenant |
| **Backup policy** | `No Backup` by default, or a retention policy if the backup option is subscribed |

### Step 6 — Cloud Init

![Step 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

This step is **optional**. It allows you to pre-configure your VM at first boot via two editors:

- **Cloud Config**: SSH key injection, hostname configuration, package installation, etc.
- **Network Config**: static network configuration (Netplan format)

### Step 7 — Disks

![Step 7: Disks](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Configure the disk(s) for your VM. Two storage types are available:

| Type | IOPS |
|------|------|
| **Standard** | ~1,500 IOPS/TB |
| **Enterprise** | ~7,500 IOPS/TB |

### Step 8 — Network Adapters

![Step 8: Network Adapters](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Associate your VM with a network:

- **Private Backbone** (e.g. PACKFR): shared private network with logical isolation
- **VPC**: fully dedicated private network with advanced segmentation

### Step 9 — Summary

![Step 9: Summary](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Review the full summary before launching provisioning and click **Create**.

## Managing Your Virtual Machines

Click on a VM to open its detail panel. Four tabs are available:

### Information Tab

![VM Detail - Information](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

View and modify VM parameters: name, UUID, availability zone, instance family, OS model, CPU, RAM, and backup policy.

### Disks Tab

![VM Detail - Disks](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

View attached disks and add additional volumes via the **+ Add a disk** button.

### Network Adapters Tab

![VM Detail - Network](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

View the VM's network interfaces (network name, MAC address, IPv4/IPv6 address).

### Snapshots Tab

![VM Detail - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Create and manage snapshots of your VM via the **+ Create a snapshot** button.
