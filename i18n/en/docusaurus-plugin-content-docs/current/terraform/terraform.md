---
title: Overview
---

The Terraform Cloud Temple provider enables you to manage your Cloud Temple account infrastructure using the Infrastructure as Code (IaC) approach. It offers full integration with Cloud Temple infrastructure services, allowing you to provision, configure, and manage your cloud resources in a declarative and reproducible manner.

## Key Features

- **Infrastructure as Code**: Define your infrastructure in version-controlled configuration files
- **Declarative Management**: Describe the desired state of your infrastructure; Terraform handles the rest
- **Full Automation**: Automate provisioning and management of your resources
- **Reproducibility**: Reliably deploy identical environments
- **Dependency Management**: Terraform automatically manages the creation order of resources

## Covered products

The Terraform Cloud Temple provider supports the following services:

### IaaS VMware

Manage your VMware virtual machines with all advanced virtualization features:

- **Virtual Machines**: Creation and configuration of virtual machines  
- **Virtual Disks**: Creation and configuration of virtual disks  
- **Network Adapters**: Management of network adapters for virtual machines  
- **Virtual Controllers**: Management of disk controllers and other devices  
- **Cloud-Init**: Automated configuration at boot  
- **Backup**: Integration with Cloud Temple backup policies

### IaaS OpenSource

Provision and manage virtual machines on the OpenSource infrastructure based on XCP-ng:

- **Virtual Machines**: Creation and management of virtual machines  
- **Virtual Disks**: Creation and configuration of virtual disks  
- **Network Adapters**: Creation and configuration of virtual machine network adapters  
- **Replication**: Data replication policies  
- **High Availability**: HA configuration (disabled, restart, best-effort)  
- **Cloud-Init**: Automated configuration compatible with NoCloud  
- **Backup**: Integration with Cloud Temple backup policies

### Object Storage

Manage your S3-compatible storage spaces:

- **Buckets**: Creation and configuration of buckets
- **Storage accounts**: Management of S3 identities and credentials
- **ACL**: Granular access control for buckets
- **Versioning**: Object version management

## Prerequisites

Before using the Terraform Cloud Temple provider, make sure you have:

### Access to the Cloud Temple Console

You must have access to the [Cloud Temple Console](https://shiva.cloud-temple.com) with the appropriate permissions on the tenant you wish to work on.

### API Key

The provider requires Cloud Temple API credentials:

- **Client ID**: Client identifier for authentication
- **Secret ID**: Secret associated with the Client ID

These credentials can be generated via the Cloud Temple Console by following [this procedure](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api).

### Rights and permissions

Depending on the resources you want to manage, you need to have the appropriate roles:

#### For VMware IaaS

- `compute_iaas_vmware_infrastructure_read`
- `compute_iaas_vmware_infrastructure_write`
- `compute_iaas_vmware_management`
- `compute_iaas_vmware_read`
- `compute_iaas_vmware_virtual_machine_power`
- `backup_iaas_spp_read` and `backup_iaas_spp_write` (for backup)

#### For OpenSource IaaS

- `compute_iaas_opensource_management`
- `compute_iaas_opensource_read`
- `compute_iaas_opensource_virtual_machine_power`
- `backup_iaas_opensource_read` and `backup_iaas_opensource_write` (for backup)

#### For Object Storage

- `object-storage_write`
- `object-storage_read`
- `object-storage_iam_management`

#### Common rights

- `activity_read`
- `tag_read` and `tag_write`

## Terraform Compatibility

The Cloud Temple provider is compatible with:

- **Terraform**: Version 1.0 and above
- **OpenTofu**: Compatible with recent versions

## Logging and Debugging

To enable detailed provider logging:

```bash
# DEBUG logging level
export TF_LOG=DEBUG
terraform apply

# Logging in JSON format
export TF_LOG=JSON
terraform apply

# Log to a file
export TF_LOG_PATH=./terraform.log
terraform apply
```

## Support and resources

- **Official documentation** : [Terraform Registry](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- **Source code** : [GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)
- **Issues** : [GitHub Issues](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues)

## Next Steps

- [Concepts](concepts.md): Understand the key concepts of the provider
- [Quickstart Guide](quickstart.md): Create your first infrastructure
- [Tutorials](tutorials.md): Practical examples and use cases
