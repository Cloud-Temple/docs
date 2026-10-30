---
title: Create your first VM instance
---

This tutorial guides you step by step through the creation of a Debian 13 VM with an additional data disk, a Cloud Init configuration, and a connection to the private Backbone network.

## Objective

Create a Linux VM (Debian 13) in the `fr1-az01` zone, pre-configured with an SSH key, with an additional 50 GB disk.

## Prerequisites

- An active Cloud Temple tenant with access to the VM Instances service
- A public SSH key available
- A private Backbone network or VPC configured in your tenant

## Step 1 — Access the console and open the wizard

From the Cloud Temple Console, navigate to **VM Instances**.

![List of VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Click on **+ New virtual machine** to start the creation wizard.

## Step 2 — Select the instance family

![Step 1: Instance family](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

For this example, select **Development** — ideal for development and test environments with a controlled cost.

Click on **Next**.

## Step 3 — Choose the availability zone

![Step 2: Availability zone](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Select **fr1-az01**. This zone is available in the FR1 (France) region.

:::tip
To maximize resilience, you can deploy multiple VMs in different availability zones (fr1-az01 and fr1-az02).
:::

Click on **Next**.

## Step 4 — Choose an image

![Step 3: Choose an image](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

In the **OS** tab, select **Debian** and choose version **13 (Trixie)** from the dropdown menu.

Click on **Next**.

## Step 5 — Configure the template

![Step 4: Template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

For this tutorial, select the **dev-2** template (2 vCPU / 8 GB RAM).

If your requirement is different, use the **Custom** option to freely set the number of vCPUs and the amount of RAM.

Click on **Next**.

## Step 6 — Name the VM and configure backup

![Step 5: Name and backup policy](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Enter a descriptive name for your VM, for example: `web-server-01`.

For the backup policy, leave **No Backup** for this tutorial (you can enable it later from the Information tab).

Click on **Next**.

## Step 7 — Configure Cloud Init

![Step 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Cloud Init allows you to pre-configure your VM on first boot. Enter the following configuration in the **Cloud Config** editor:

```yaml
#cloud-config
hostname: web-server-01
users:
  - name: admin
    groups: sudo
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-rsa AAAA...votre_cle_publique_ssh
package_update: true
packages:
  - curl
  - vim
  - htop
```

Leave the **Network Config** field empty if you are using DHCP. For a static IP configuration, fill it in using the Netplan format:

```yaml
version: 2
ethernets:
  ens3:
    dhcp4: false
    addresses:
      - 192.168.1.10/24
    routes:
      - to: default
        via: 192.168.1.1
    nameservers:
      addresses:
        - 8.8.8.8
        - 1.1.1.1
```

Check the **Delete the Cloud Init configuration disk after first boot** box to improve security.

Click on **Next**.

## Step 8 — Configure the disks

![Step 7: Disks](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

You will notice that **Disk 1** (the system disk `system-disk-1`) has been automatically created with the size corresponding to the Debian 13 OS.

To add a data disk, configure a second disk in the wizard:
- **Name**: `data-disk-1`
- **Capacity**: `50` GB
- **Storage type**: Standard (~1,500 IOPS/TB)

Click on **Next**.

## Step 9 — Configure the network

![Step 8: Network adapters](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

From the **Network** dropdown menu, select your network. In this example, the **PACKFR** network (private Backbone) is available.

:::info
If you are using a **VPC**, you will be able to associate a **floating IP** (public IP) with your VM after its creation.
:::

Click on **Next**.

## Step 10 — Review the summary and create

![Step 9: Summary](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Carefully review the summary:

| Parameter | Value |
|-----------|--------|
| Instance family | Development |
| Availability zone | fr1-az01 |
| Model | Debian 13 |
| Template | 2 vCPU / 8 GB RAM |
| Backup policy | No Backup |
| Disks | system-disk-1 + data-disk-1 (50 GB) |
| Network | PACKFR (private Backbone) |

If everything is correct, click on **Create**. The deployment takes a few minutes. Your VM will then appear in the list with the status **On**.
