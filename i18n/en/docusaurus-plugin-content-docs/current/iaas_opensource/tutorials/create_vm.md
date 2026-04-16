---
title: Create a virtual machine
---

This tutorial guides you through the different methods of creating a virtual machine in your OpenIaaS environment.

## Introduction

The Cloud Temple Console offers **three methods** to create an OpenIaaS virtual machine:

1. **From a Template**: Quick deployment from a preconfigured template
2. **XVA Import**: Import a virtual machine from an XVA file
3. **From Marketplace**: Deploy a certified image from the Cloud Temple catalog

## Prerequisites

- Have a configured OpenIaaS environment
- Have the necessary permissions to create virtual machines
- For XVA mode: have a valid XVA file
- For Marketplace mode: have access to the Marketplace catalog

## Access to creation

From the **OpenIaaS** > **Virtual Machines** menu, click on the **New virtual machine** button.

A window opens presenting the three available deployment methods. Select the desired method to continue.

---

## Method 1: Deployment from a Template

This method allows you to quickly create a virtual machine from a preconfigured template.

### Step 1: Pool and Template Selection

First select the **Pool** (availability zone) where you want to deploy your virtual machine, then choose the **Template** to use as a base.

### Step 2: General Information

Configure the basic parameters of your virtual machine:

- **Name**: Unique name of the virtual machine (alphanumeric characters, hyphens, underscores, dots and spaces allowed)
- **CPU**: Number of virtual cores (minimum 1)
- **RAM**: Amount of memory with unit selection (MB, GB, TB)

### Step 3: Cloud Init (optional)

Cloud Init allows you to automate the initial configuration of your virtual machine at first boot.

You can configure:

- **Cloud Config**: General configuration (hostname, users, packages, etc.)
- **Network Config**: Network configuration in Netplan v2 format
- **Destroy After Boot**: Option to remove Cloud Init configuration after first boot

:::info
This step is entirely optional. If you don't need Cloud Init, leave the default fields and proceed to the next step.
:::

### Step 4: Disk Configuration

Manage the virtual disks of your virtual machine. Template disks are automatically added and cannot be removed.

For each disk, configure:

- **Name**: Unique disk name
- **Capacity**: Disk size with unit selection (MB, GB, TB)
- **Block Storage**: Destination storage

You can add up to 24 virtual disks in total. Click **Add disk** to create a new disk.

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

Configure the high availability level of your virtual machine.

:::tip
For more information on high availability configuration and the different modes available, consult the dedicated guide: [Managing high availability of a virtual machine](./high_availability/manage_vm)
:::

### Step 7: Summary and Validation

Review your entire configuration before creating the virtual machine.

The summary displays all configured parameters:

- General information (name, CPU, RAM)
- Selected template
- Cloud Init (if configured)
- Disks
- Network adapters
- High availability

Click **Create** to launch the deployment of your virtual machine.

---

## Method 2: Import from an XVA File

This method allows you to import a virtual machine from an XVA format file (XenServer Virtual Appliance).

### XVA Format Overview

The XVA format is the native export/import format of XCP-ng and XenServer. It contains a complete virtual machine with its disks and configuration.

### Step 1: Virtual Machine Name

Define the name of your virtual machine.

The name must follow the same rules as for deployment from a template (alphanumeric characters, hyphens, underscores, dots and spaces).

### Step 2: XVA File Upload

Import your XVA file from your computer.

:::info
The file must have the `.xva` extension. File names must contain only alphanumeric characters, hyphens, underscores and dots (no spaces).
:::

Drag and drop your file into the designated area or click to select the file from your explorer.

### Step 3: Storage Selection

Choose the destination storage for your imported virtual machine.

Select a Block Storage from the tree. The system automatically verifies that sufficient space is available to accommodate your XVA file.

### Step 4: Summary and Validation

Verify the information before launching the import.

The summary displays:

- The VM name
- The deployment type (XVA)
- The XVA file and its size
- The destination storage

Click **Create** to launch the import of your virtual machine.

### About the skip_set_template Option

When importing an XVA file, the `skip_set_template` option determines whether the import result will be a directly usable virtual machine or a template. This option is particularly used with automation tools like Packer. More information: [XCP-ng documentation](https://xcp-ng.org/blog/2024/02/22/using-packer-with-xcp-ng/).

---

## Method 3: Deployment from Marketplace

The Cloud Temple Marketplace offers certified and ready-to-use virtual machine images.

### Marketplace Image Selection

Browse the catalog of images available for OpenIaaS.

Only images compatible with the OpenIaaS platform are displayed.

### Virtual Machine Configuration

Configuration from Marketplace follows a similar process to deployment from a template, with some specificities:

- System characteristics (OS, CPU, RAM) are predefined by the Marketplace image
- You can customize the VM name
- Cloud Init is available for initial configuration
- Network mapping allows you to associate the image's network interfaces with your networks

:::tip
For a detailed guide on Marketplace deployment, consult the dedicated tutorial: [Deploy an image on OpenIaaS](../../marketplace/tutorials/deploy_openiaas)
:::

---

## Best Practices

### Choosing the Deployment Method

- **Template**: Ideal for standard and repetitive deployments within your organization
- **XVA**: Recommended for migrating existing VMs or using custom images
- **Marketplace**: Perfect for quickly starting with certified and maintained images

### Resource Configuration

- **CPU and RAM**: Size according to the actual needs of your workload
- **Disks**: Plan a growth margin to avoid future resizing

### High Availability

- Enable **Restart** mode for critical applications
- Use **Best-Effort** for less critical environments

### Cloud Init

- Use Cloud Init to standardize the configuration of your VMs
- Document your Cloud Init configurations to facilitate their reuse
- Test your configurations on test VMs before production deployment

### Security

- Use explicit names to facilitate identification and management
- Plan a backup strategy from the creation of the VM
