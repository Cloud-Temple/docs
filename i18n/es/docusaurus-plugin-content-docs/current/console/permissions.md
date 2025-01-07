---
title: User Permissions
---

The Shiva console enables fine-grained user rights management within an organization, with segregation by tenant.
Initially, it is the client's main account that allows for the initial configuration of accounts and associated permissions.
Subsequently, the __'iam_write'__ right allows an account to administer the permissions of other users.

## Available permissions for users in your organization

The following permissions can be configured for each [user](accounts.md#affectation-des-permissions-à-un-utilisateur) and for each [tenant](tenants.md#selection-dun-tenant) in your organization.

- __'read'__ type permissions are associated with viewing without the ability to configure
- __'write'__ type permissions are associated with configuration modification.

- __These are permissions, not roles.__ Therefore, it is necessary to have the READ and WRITE permissions to modify a configuration.

__VERSION: 20241007__

| Permission Name                               | Permission Description                                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| activity_read                                 | Viewing logs and activities                                                                                                    |
| activity_write                                | Managing logs and activities                                                                                                   |
| backup_iaas_opensource_read                   | Management of backup resources - OpenIaaS Offer - consultation                                                          |
| backup_iaas_opensource_write                  | Management of backup resources - OpenIaaS Offer - modification                                                          |
| backup_iaas_spp_read                          | Management of backup resources - Vmware Offer - consultation                                                            |
| backup_iaas_spp_write                         | Management of backup resources - Vmware Offer - modification                                                            |
| bastion_read                                  | Consultation of bastion resources                                                                                    |
| bastion_write                                 | Management of resources (appliances, sessions, etc.) of Bastion type                                                             |
| bastion_console_access                        | Authorization to access the console (ssh/rdp) of a resource protected by a Bastion appliance                                 |
| compute_iaas_opensource_console_access        | OpenIaaS Offer - Opening the console of a virtual machine                                                                |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS Offer - Consultation of advanced data from Xen Orchestra resources |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS Offer - Advanced management of Xen Orchestra resources                                                                          |
| compute_iaas_opensource_read                  | OpenIaaS Offer - Viewing resources of Virtual Machines type                                                        |
| compute_iaas_opensource_management            | OpenIaaS Offer - Management of Virtual Machines type resources                                                     |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS Offer - Power management of a virtual machine                                                             |
| compute_iaas_vmware_console_access            | VMware Offer - Opening the console of a virtual machine                                                            |
| compute_iaas_vmware_infrastructure_read       | VMware Offer - Viewing advanced data of VMware resources (affinity/anti-affinity rules, drs configuration, etc.)   |
| compute_iaas_vmware_infrastructure_write      | Vmware Offer - Advanced management of VMware resources                                                                         |
| compute_iaas_vmware_read                      | Vmware Offer - Consultation of Virtual Machine resources                                                                       |
| compute_iaas_vmware_management                | Vmware Offer - Management of Virtual Machine resources                                                                         |
| compute_iaas_vmware_virtual_machine_power     | Vmware Offer - Power management of a virtual machine                                                                           |
| console_public_access_read                    | Consultation of IPs allowed to access the console                                                                              |

| console_public_access_write                   | Addition of IPs authorized to access the console                                                                              |
| compute_virtual_machine_power                 | Virtual machine power management                                                                                             |
| documentation_read                            | Viewing of Confluence documentation resources                                                                                |
| housing_read                                  | Viewing of colocation-type resources                                                                                         |
| iam_offline_access                            | Creation and deletion of Personal Access Tokens (PAT)                                                                        |
| iam_read                                      | User rights consultation                                                                                           |
| iam_write                                     | User rights management                                                                                                |
| intervention_read                             | Consultation of planned changes and deployments on the platform                                                  |
| inventory_read                                | Consultation of inventory-type resources                                                                                 |
| inventory_write                               | Management of inventory-type resources                                                                                      |
| monitoring_read                               | Monitoring consultation                                                                                                        |
| monitoring_write                              | Monitoring management                                                                                                          |
| metric_read                                   | Consultation of health data on virtual machines and hosts                                                                      |
| network_read                                  | Network resources consultation                                                                                                 |
| network_write                                 | Network resources management                                                                                                   |
| order_read                                    | Infrastructure order consultation                                                                                      |
| order_write                                   | Infrastructure order creation                                                                                             |
| object-storage_iam_management                 | Allows management of storage accounts on the S3 product                                                                    |
| object-storage_read                           | Allows viewing of buckets and bucket configurations                                                                       |
| object-storage_write                          | Allows editing of buckets and bucket configurations                                                                      |
| openshift_management                          | Allows connection to Openshift platforms (scoped to the tenant)                                                                |
| Owner                                         | The user has administrative rights for a tenant                                                                               |
| support_management                            | Viewing all support tickets of the tenant                                                                                      |
| support_read                                  | Viewing one's own support tickets of the tenant                                                                               |
| support_write                                 | Creating a support ticket for the tenant                                                                                       |
| tag_read                                      | Viewing tags, except RTMS tags                                                                                   |
| tag_write                                     | Managing tags, except RTMS tags                                                                                        |
| ticket_comment_read                           | Viewing comments                                                                                                  |
| ticket_comment_write                          | Managing comments                                                                                                       |
| ticket_read                                   | Viewing tickets                                                                                                       |
| ticket_write                                  | Ticket Management                                                                                                            |

**Notes** :

- *There is no limit to the number of owners that can be defined on the tenant. However, the management interface (UI) issues a warning when there are more than 3 owners, to encourage limiting the number of owners for security and optimal access management reasons.*
- *When adding a new owner, updating their permissions may take up to 60 minutes. This propagation time is normal and ensures that access rights are correctly applied to all associated services and resources.*

- *To remove an owner from the tenant, the user must submit a support request. This procedure ensures that access rights modifications are performed securely and in accordance with best access management practices.*

## Deprecated Permissions

The following permissions are no longer available:

| Permission Name                                | Date       | Permission Description                                                                                         |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                  | 07/10/2024 | Viewing backup-type resources                                                                                  |
| backup_write (**DEPRECATED**)                  | 07/10/2024 | Management of backup resource types - modification                                                             |
| compute_console_access (**DEPRECATED**)        | 07/10/2024 | Opening the console of a virtual machine                                                                       |
| compute_infrastructure_read (**DEPRECATED**)   | 07/10/2024 | Advanced data consultation of VMware resources (affinity/anti-affinity rules, DRS configuration, etc.)          |
| compute_infrastructure_write (**DEPRECATED**)  | 07/10/2024 | Advanced management of VMware resources                                                                        |
| compute_read (**DEPRECATED**)                  | 07/10/2024 | Consultation of Virtual Machine resource types                                                                 |
| compute_management (**DEPRECATED**)            | 07/10/2024 | Management of Virtual Machine type resources                                                                  |
| compute_virtual_machine_power (**DEPRECATED**) | 07/10/2024 | Management of virtual machine power                                                                           |
| iam_manage_permissions (**DEPRECATED**)        | 07/10/2024 | Management of new permissions for oneself                                                                     |