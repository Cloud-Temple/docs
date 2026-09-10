---
title: Create a virtual machine
---

This tutorial guides you through the different methods for creating a virtual machine in your OpenIaaS environment.

## Introduction

The Cloud Temple Console offers **three methods** to create an OpenIaaS virtual machine:

1. **From a Template** : Rapid deployment from a preconfigured template
2. **Import XVA** : Import a virtual machine from an XVA file
3. **From the Marketplace** : Deploy a certified image from the Cloud Temple catalog

## Prerequisites

- Have a configured OpenIaaS environment
- Have the necessary permissions to create virtual machines
- For XVA mode: have a valid XVA file
- For Marketplace mode: have access to the Marketplace catalog

## Access to Creation

From the **OpenIaaS** > **Virtual Machines** menu, click the **New Virtual Machine** button.

A window opens displaying the three available deployment methods. Select the desired method to continue.

---

## Method 1: Deployment from a Model

This method allows you to quickly create a virtual machine from a preconfigured model.

### Step 1: Pool and Model Selection

First, select the **Pool** (availability zone) where you want to deploy your virtual machine, then choose the **Model** to use as a base.

### Step 2: General Information

Configure the basic settings of your virtual machine:

- **Name**: Unique name for the virtual machine (alphanumeric characters, hyphens, underscores, periods, and spaces allowed)
- **CPU**: Number of virtual cores (minimum 1)
- **RAM**: Amount of memory with unit selection (MB, GB, TB)

### Step 3: Cloud Init (optional)

Cloud Init allows you to automate the initial configuration of your virtual machine on first boot.

You can configure:

- **Cloud Config**: General configuration (hostname, users, packages, etc.)
- **Network Config**: Network configuration in Netplan v2 format
- **Destroy After Boot**: Option to remove Cloud Init configuration after first boot

:::info
This step is entirely optional. If you do not need Cloud Init, leave the fields at their default values and proceed to the next step.
:::

### Step 4: Disk Configuration

Manage the virtual disks of your virtual machine. The model's disks are automatically added and cannot be deleted.

For each disk, configure:

- **Name**: Unique disk name
- **Capacity**: Disk size with unit selection (MB, GB, TB)
- **Block Storage**: Destination storage

You can add up to 24 virtual disks in total. Click **Add a disk** to create a new disk.

:::warning
If you configure Cloud Init, at least one disk is required to store the configuration.
:::

### Step 5: Network Adapter Configuration

Configure the network interfaces of your virtual machine (maximum 7 adapters).

For each network adapter:

- **Network**: Select the virtual network (with VPC or Private Backbone indication)
- **MAC Address**: Optional, automatically generated if not specified

:::info[VPC]
VPC network configuration is only available from the Network tab of the virtual machine once the operation is complete. Configuration from this form will be available soon.
:::

Click **Add network adapter** to create a new interface.

### Step 6: High Availability

Configure the high availability level for your virtual machine.

:::tip
For more information on configuring high availability and the different available modes, refer to the dedicated guide: [Managing high availability for a virtual machine](./high_availability/manage_vm)
:::

### Step 7: Summary and validation

Review your complete configuration before creating the virtual machine.

The summary displays all configured settings:

- General information (name, CPU, RAM)
- Selected model
- Cloud Init (if configured)
- Disks
- Network adapters
- High availability

Click **Create** to start the deployment of your virtual machine.

---

## Method 2: Import from an XVA file

This method allows importing a virtual machine from an XVA file (XenServer Virtual Appliance).

### XVA Format Overview

The XVA format is the native export/import format for XCP-ng and XenServer. It contains a complete virtual machine along with its disks and configuration.

### Step 1: Virtual machine name

Specify the name of your virtual machine.

The name must follow the same rules as deployment from a template (alphanumeric characters, hyphens, underscores, periods, and spaces).

### Step 2: Upload the XVA file

Import your XVA file from your computer.

:::info
The file must have the `.xva` extension. Filenames must only contain alphanumeric characters, hyphens, underscores, and periods (no spaces).
:::

Drag and drop your file into the designated area or click to select the file from your file explorer.

### Step 3: Storage Selection

Select the destination storage for your imported virtual machine.

Select a Block Storage from the tree. The system automatically verifies that the available space is sufficient to store your XVA file.

### Step 4: Summary and validation

Verify the information before starting the import.

The summary displays:

- The VM name
- The deployment type (XVA)
- The XVA file and its size
- The destination storage

Click **Create** to start the import of your virtual machine.

### About the skip_set_template option

When importing an XVA file, the `skip_set_template` option determines whether the import result will be a ready-to-use virtual machine or a template. This option is particularly used with automation tools such as Packer. For more information: [XCP-ng documentation](https://xcp-ng.org/blog/2024/02/22/using-packer-with-xcp-ng/).

---

## Method 3: Deployment from the Marketplace

Cloud Temple Marketplace offers certified and ready-to-use virtual machine images.

### Select a Marketplace Image

Browse the catalog of images available for OpenIaaS.

Only images compatible with the OpenIaaS platform are displayed.

### Virtual Machine Configuration

Configuration from the Marketplace follows a process similar to deployment from a template, with a few specifics:

- System specifications (OS, CPU, RAM) are predefined by the Marketplace image
- You can customize the VM name
- Cloud Init is available for initial configuration
- Network mapping allows you to associate the image's network interfaces with your networks

:::tip
For a detailed guide on Marketplace deployment, refer to the dedicated tutorial: [Deploy an image on OpenIaaS](../../marketplace/tutorials/deploy_openiaas)
:::

---

## Best practices

### Deployment method selection

- **Model** : Ideal for standard and repeatable deployments within your organization
- **XVA** : Recommended for migrating existing VMs or using custom images
- **Marketplace** : Perfect for quickly getting started with certified and maintained images

### Resource Configuration

- **CPU and RAM** : Size according to the actual requirements of your workload
- **Disks** : Allow for a growth margin to avoid future resizing

### High availability

- Enable **Restart** mode for critical applications
- Use **Best-Effort** for less critical environments

### Cloud Init

- Use Cloud Init to standardize your VM configurations
- Document your Cloud Init configurations to facilitate reuse
- Test your configurations on test VMs before deploying to production

### Security

- Use explicit names to facilitate identification and management
- Plan a backup strategy from the moment the VM is created