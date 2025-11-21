---
title: Overview
---

The Cloud Temple Terraform provider allows you to manage your Cloud Temple account infrastructure using the Infrastructure as Code (IaC) approach. It offers complete integration with Cloud Temple infrastructure services, enabling you to provision, configure, and manage your cloud resources in a declarative and reproducible manner.

## Key Features

- **Infrastructure as Code**: Define your infrastructure in versionable configuration files
- **Declarative Management**: Describe the desired state of your infrastructure, Terraform handles the rest
- **Complete Automation**: Automate the provisioning and management of your resources
- **Reproducibility**: Deploy identical environments reliably
- **Dependency Management**: Terraform automatically manages resource creation order

## Covered Products

The Cloud Temple Terraform provider supports the following services:

### VMware IaaS

Manage your VMware virtual machines with all advanced virtualization features:

- **Virtual Machines**: Virtual machine creation and configuration
- **Virtual Disks**: Virtual disk creation and configuration
- **Network Adapters**: Virtual machine network adapter management
- **Virtual Controllers**: Disk controller and other device management
- **Cloud-Init**: Automated startup configuration
- **Backup**: Integration with Cloud Temple backup policies

### OpenSource IaaS

Provision and manage virtual machines on OpenSource infrastructure based on XCP-ng:

- **Virtual Machines**: Virtual machine creation and management
- **Virtual Disks**: Virtual disk creation and configuration
- **Network Adapters**: Virtual machine network adapter creation and configuration
- **Replication**: Data replication policies
- **High Availability**: HA configuration (disabled, restart, best-effort)
- **Cloud-Init**: NoCloud-compatible automated configuration
- **Backup**: Integration with Cloud Temple backup policies

### Object Storage

Manage your S3-compatible object storage spaces:

- **Buckets**: Bucket creation and configuration
- **Storage Accounts**: S3 identity and credential management
- **ACL**: Granular bucket access control
- **Versioning**: Object version management

## Prerequisites

Before using the Cloud Temple Terraform provider, ensure you have:

### Cloud Temple Console Access

You must have access to the [Cloud Temple Console](https://shiva.cloud-temple.com) with appropriate rights on the tenant you wish to work on.

### API Key

The provider requires Cloud Temple API credentials:

- **Client ID**: Client identifier for authentication
- **Secret ID**: Secret associated with the client ID

These credentials can be generated from the Cloud Temple Console by following [this procedure](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api).

### Rights and Permissions

Depending on the resources you want to manage, you must have the appropriate roles:

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

#### Common Rights

- `activity_read`
- `tag_read` and `tag_write`

## Terraform Compatibility

The Cloud Temple provider is compatible with:

- **Terraform**: Version 1.0 and above
- **OpenTofu**: Compatible with recent versions

## Logging and Debugging

To enable detailed provider logging:

```bash
# DEBUG level logging
export TF_LOG=DEBUG
terraform apply

# JSON format logging
export TF_LOG=JSON
terraform apply

# Save logs to a file
export TF_LOG_PATH=./terraform.log
terraform apply
```

## Support and Resources

- **Official Documentation**: [Terraform Registry](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- **Source Code**: [GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)
- **Issues**: [GitHub Issues](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues)

## Next Steps

- [Concepts](concepts.md): Understand key provider concepts
- [Getting Started Guide](quickstart.md): Create your first infrastructure
- [Tutorials](tutorials.md): Practical examples and use cases
