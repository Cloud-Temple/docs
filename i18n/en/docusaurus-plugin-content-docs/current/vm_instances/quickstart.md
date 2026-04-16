---
title: Getting Started
---

## Prerequisites

Before you begin, make sure you have the following:

- An active **Cloud Temple Tenant**
- A minimum **Standard Support** subscription
- The necessary permissions in your Cloud Temple organisation

## Deploy a Virtual Machine

### 1. Access the Service

Log in to the **Cloud Temple Console** and navigate to the **VM Instances** section from the main menu.

### 2. Select the Tenant and Availability Zone

- Choose the **tenant** in which you want to deploy the virtual machine.
- Select the target **availability zone (AZ)** from those available in the FR1 region.

### 3. Choose an Image from the Marketplace

Virtual machines are deployed exclusively from **official Cloud Temple Marketplace images**.

- Browse the catalogue of available images.
- Select the desired operating system and version.

### 4. Configure the Virtual Machine

Fill in the parameters for your instance:

| Parameter | Description |
|-----------|-------------|
| **Service class** | Development, General Purpose or Performance |
| **Flavor** | Choose from predefined flavors or create a custom flavor (vCPU + RAM) |
| **Additional disks** | Add extra volumes if needed (up to 16 volumes, 2 TB max per volume) |
| **Network (VPC)** | Associate the VM with your VPC network |
| **Cloud-init** | Optional: inject a pre-configuration script at startup (SSH keys, network configuration, etc.) |

:::info System Disk
The system disk (Flash) is included automatically. Its size (between 15 and 100 GB) depends on the chosen operating system.
:::

### 5. Launch the Deployment

Validate the configuration and launch provisioning. Deployment is **automated and immediate** (a few minutes).

## Manage Your Virtual Machines

From the console, you can perform the following actions on your virtual machines:

- **Start / Stop / Restart** the virtual machine
- **Open the console** to access the system directly
- **Modify the configuration** (vCPU, RAM) — requires stopping the VM
- **Add disks** additional volumes
- **View performance metrics** (CPU, RAM, Disk)
- **Configure backup** (paid option) with configurable retention

## Automation and Infrastructure as Code

The VM Instances service is fully automatable:

### Via the REST API

The Cloud Temple REST API enables full programmatic control of the virtual machine lifecycle.

API reference: [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Via Terraform

The Cloud Temple Terraform provider allows you to manage your VM Instances as Infrastructure as Code.

```hcl
# Example VM Instances resource with Terraform
# Refer to the provider documentation for available attributes
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

See the [Terraform documentation](../terraform/terraform.md) for provider installation and configuration.

## Useful Resources

- [Cloud Temple public documentation](https://docs.cloud-temple.com/home)
- [API Reference](https://shiva.cloud-temple.com/api/)
- [Terraform documentation](../terraform/terraform.md)
- [Availability Zone concepts](../additional_content/concepts_az.md)
