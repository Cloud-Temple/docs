---
title: Concepts
---


## Users

Access accounts to the Shiva console are created by the master's account of the sponsor upon invitation (whatever the authentication repository).
Credentials are global to your [Organization](#organisations).

*__Note:__ [Identity federation is managed at the organization level](#organisations#mecanismes-dauthentification)*

### Creating a user account in your organization

Creating a user account in your organization is done by invitation. To invite a user in an [Organization](#organisations), go to the __'Administration'__ menu on the left of your screen on the green banner, then in the __'Users'__ submenu.  

Click the __'New User'__ button from the users' page. 

![](images/shiva_onboard_003.png)

Then provide the user's email address

![](images/shiva_onboard_004.png)

The user will then receive a verification email.  

![](images/shiva_onboard_001.png)

Once the verification is completed, the user can log in to the console.

### Assigning permissions to a user

User rights management is done from the user page. 

![](images/shiva_onboard_003.png)

By default, a user has no rights. Therefore, it is necessary for the administrator who sent the invitation to grant the user the necessary permissions for their activity. Simply click on the user's __'Actions'__ menu and choose the __'Edit'__ option.  

The rights activation menu will then appear:

![](images/shiva_onboard_005.png)

The permissions configuration must be done for each [Tenant](#tenants) of the [Organization](#organisations).

The list of permissions and their definitions is accessible [here](#permissions).

### Re-enrolling a user

When a user has been provisioned but has not validated their enrollment within the expiration time of the email sent by the Console, they can no longer confirm their enrollment. In this case, it is possible to resend them a link so they can renew their initial enrollment.

Re-enrolling a user is done in the __'User'__ tab of the Administration panel, at the bottom left of the screen.

Select the user you wish to re-enroll, then click on the action button at the end of the line and then __'Re-enroll'__.

![](images/shiva_profil_012.png)

### Deleting a user

Deleting a user is done in the __'User'__ tab of the Administration panel, at the bottom left of the screen.

Select the user you wish to delete, then click on the action button at the end of the line and then __'Delete'__.

![](images/shiva_profil_013.png)
![](images/shiva_profil_010.png)

Note: You cannot delete yourself, and you cannot delete a __'Owner'__ user.

### Logging out

Logging out of a user is done in their __'Profile'__, at the top right of the screen, then __'Log out'__.

![](images/shiva_profil_009.png)
![](images/shiva_profil_011.png)

### Changing a user's language

Changing a user's language is done in their __'Profile'__, at the top right of the screen, in the __'User settings'__.

![](images/shiva_profil_006.png)

The configuration is done for each [Tenant](#tenants).

### Subscribing to topic notifications

Managing subscriptions allows you to receive emails related to activated topics that will be automatically sent when corresponding events occur.

It is accessible in the user profile, in the "My subscriptions" tab:

![](images/shiva_profil_007.png)

For example, in the event of an incident, specific email notifications for that topic will be generated.

The list of available topics is subject to change and will be gradually enriched to adapt to the needs and changes in our operational environment.



## Permissions

The Shiva console allows fine management of user rights within an organization, with segregation by tenant.
Initially, it is the main sponsor's account that allows the initial configuration of accounts and associated permissions.
Subsequently, the __'iam_write'__ right allows an account to administer the permissions of other users.

### Available permissions for users in your organization

The following permissions can be configured for each [user](#utilisateurs) and for each [tenant](#tenants#selection-dun-tenant) of your organization.

- Permissions of type __'read'__ are associated with viewing without configuration capabilities.
- Permissions of type __'write'__ are associated with configuration modification.
- __These are permissions, not roles.__ As such, it is necessary to have both READ and WRITE permissions to modify a configuration.

__VERSION : 20241007__

| Permission name                               | Permission description                                                                                                        |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                 | Viewing logs and activities                                                                                                   |
| activity_write                                | Managing logs and activities                                                                                                  |
| backup_iaas_opensource_read                   | Managing backup-type resources - OpenIaaS Offer - viewing                                                                     |
| backup_iaas_opensource_write                  | Managing backup-type resources - OpenIaaS Offer - modifying                                                                   |
| backup_iaas_spp_read                          | Managing backup-type resources - Vmware Offer - viewing                                                                       |
| backup_iaas_spp_write                         | Managing backup-type resources - Vmware Offer - modifying                                                                     |
| bastion_read                                  | Viewing bastion-type resources                                                                                                |
| bastion_write                                 | Managing bastion-type resources (appliances, sessions,...)                                                                    |
| bastion_console_access                        | Authorization to access the console (ssh/rdp) of a resource protected by a Bastion appliance                                  |
| compute_iaas_opensource_console_access        | OpenIaaS Offer - Opening the console of a virtual machine                                                                     |
| compute_iaas_opensource_infrastructure_read   | OpenIaaS Offer - Viewing advanced data of Xen Orchestra resources                                                             |
| compute_iaas_opensource_infrastructure_write  | OpenIaaS Offer - Advanced management of Xen Orchestra resources                                                               |
| compute_iaas_opensource_read                  | OpenIaaS Offer - Viewing virtual machine-type resources                                                                       |
| compute_iaas_opensource_management            | OpenIaaS Offer - Managing virtual machine-type resources                                                                      |
| compute_iaas_opensource_virtual_machine_power | OpenIaaS Offer - Managing the power state of a virtual machine                                                                |
| compute_iaas_vmware_console_access            | Vmware Offer - Opening the console of a virtual machine                                                                       |
| compute_iaas_vmware_infrastructure_read       | Vmware Offer - Viewing advanced data of VMware resources (affinity/anti-affinity rules, drs configuration, etc.)              |
| compute_iaas_vmware_infrastructure_write      | Vmware Offer - Advanced management of VMware resources                                                                        |
| compute_iaas_vmware_read                      | Vmware Offer - Viewing virtual machine-type resources                                                                         |
| compute_iaas_vmware_management                | Vmware Offer - Managing virtual machine-type resources                                                                        |
| compute_iaas_vmware_virtual_machine_power     | Vmware Offer - Managing the power state of a virtual machine                                                                  |
| console_public_access_read                    | Viewing IPs allowed to access the console                                                                                     |
| console_public_access_write                   | Adding IPs allowed to access the console                                                                                      |
| compute_virtual_machine_power                 | Managing the power state of a virtual machine                                                                                 |
| documentation_read                            | Viewing Confluence documentation resources                                                                                    |
| housing_read                                  | Consultation of colocation-type resources                                                                                 |
| iam_offline_access                            | Creation and deletion of Personal Access Tokens (PAT)                                                                    |
| iam_read                                      | Viewing user rights                                                                                                       |
| iam_write                                     | Managing user rights                                                                                                      |
| intervention_read                             | Viewing planned changes and deployments on the platform                                                                  |
| inventory_read                                | Viewing inventory-type resources                                                                                         |
| inventory_write                               | Managing inventory-type resources                                                                                        |
| monitoring_read                               | Viewing monitoring data                                                                                                   |
| monitoring_write                              | Managing monitoring                                                                                                       |
| metric_read                                   | Viewing health data on virtual machines and hosts                                                                        |
| network_read                                  | Viewing network resources                                                                                                |
| network_write                                 | Managing network resources                                                                                               |
| order_read                                    | Viewing infrastructure orders                                                                                            |
| order_write                                   | Creating infrastructure orders                                                                                           |
| object-storage_iam_management                 | Allow managing storage accounts on the S3 product                                                                       |
| object-storage_read                           | Allow viewing buckets and bucket configurations                                                                         |
| object-storage_write                          | Allow editing buckets and bucket configurations                                                                         |
| openshift_management                          | Allow connecting to Openshift platforms (scoped to the tenant)                                                           |
| Owner                                         | User has admin rights on a tenant                                                                                        |
| support_management                            | Viewing all support tickets of the tenant                                                                                |
| support_read                                  | Viewing personal support tickets of the tenant                                                                          |
| support_write                                 | Creating a support ticket on the tenant                                                                                  |
| tag_read                                      | Viewing tags, except RTMS tags                                                                                           |
| tag_write                                     | Managing tags, except RTMS tags                                                                                          |
| ticket_comment_read                           | Viewing comments                                                                                                         |
| ticket_comment_write                          | Managing comments                                                                                                        |
| ticket_read                                   | Viewing tickets                                                                                                          |
| ticket_write                                  | Managing tickets                                                                                                         |

**Notes** :

- *There is no limit to the number of owners that can be defined on the tenant. However, the management interface (IHM) issues a warning when there are more than 3 owners, to encourage limiting the number of owners for security and optimal access management reasons.*
- *When adding a new owner, updating their permissions may take up to 60 minutes. This propagation time is normal and ensures that access rights are properly applied to all associated services and resources.*
- *To remove an owner from the tenant, the user must submit a request to support. This procedure ensures that access rights changes are made securely and in accordance with best access management practices.*

### Deprecated Permissions

The following permissions are no longer available:

| Permission Name                               | Date       | Permission Description                                                                             |
| --------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| backup_read  (**DEPRECATED**)                 | 07/10/2024 | Viewing backup-type resources                                                                      |
| backup_write (**DEPRECATED**)                 | 07/10/2024 | Managing backup-type resources - modification                                                      |
| compute_console_access (**DEPRECATED**)       | 07/10/2024 | Opening the console of a virtual machine                                                           |
| compute_infrastructure_read (**DEPRECATED**)  | 07/10/2024 | Viewing advanced data of VMware resources (affinity/anti-affinity rules, drs configuration, etc.)  |
| compute_infrastructure_write (**DEPRECATED**) | 07/10/2024 | Advanced management of VMware resources                                                            |
| compute_read (**DEPRECATED**)                 | 07/10/2024 | Viewing virtual machine-type resources                                                             |
| compute_management (**DEPRECATED**)           | 07/10/2024 | Managing virtual machine-type resources                                                            |
| compute_virtual_machine_power (**DEPRECATED**)| 07/10/2024 | Managing the power of a virtual machine                                                            |
| iam_manage_permissions (**DEPRECATED**)       | 07/10/2024 | Managing new rights for oneself                                                                    |


## Organizations

The organization is linked to your __sponsoring account__ and the __associated Cloud Temple contract__. It represents your entity (company, department, team, ...) that holds the contractual relationship between Cloud Temple and you.

### Organization Principle

The organization has four main roles: 

- It represents the __contractual entity__ for tracking and billing aspects,
- It defines the __global configuration of the authentication mechanism__: authentication can be local at the Shiva console level or remote through an identity federation service,
- It holds all __user accounts__,
- It __federates the tenants__ (Production, Preproduction, Dev, Application 1, Application 2, ...) that you define for your Cloud architecture needs.

The roles (rights/permissions) of users are configurable for each tenant defined within your organization. For example, an account can be authorized to order resources in one tenant but not in another.

### Authentication Mechanisms

The Shiva console allows __authentication mechanism configuration__ at the organization level. You can use the local authentication repository of the Shiva console or link your organization to one of your authentication repositories.  

The following external repositories are supported:

- __OpenID Connect__ compatible repositories,
- __SAML__ compatible repositories,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak


## Tenant

The tenant is a __grouping of resources within an organization__. An [Organization](#organizations) has at least one tenant (called the __default tenant__, which can be renamed). Generally, multiple tenants are used to segment responsibilities or technical scopes.

For example:

- A __Production__ tenant
- A __Preproduction__ tenant
- A __Recette__ tenant
- A tenant __Qualification__

But it is also possible to organize things with an __application view__ or by __criticality__: 

- A tenant __Application 1__ or __Criticality 1__
- A tenant __Application 2__ or __Criticality 2__
- ...

The technical resources ordered are assigned to a specific tenant and are not shared with other tenants. For example, a Hypervisor cluster and the associated L2 networks are available only in 1 tenant.
Regarding networks, it is possible to request __'cross tenant'__ networks to ensure network continuity between tenants.

User permissions are to be defined in each tenant. Thus, each organization must carefully consider the desired tenants. This point is usually addressed in the initial workshop, at the time of the organization's creation.

It is possible to evolve the architecture by adding or removing tenants.

A tenant cannot be empty. It must be initialized with a minimum of resources:

- An availability zone (AZ, a physical data center),
- A computing cluster,
- A storage space,
- A network VLAN.


| Order reference                                              | Unit     | SKU                     |
|--------------------------------------------------------------|----------|-------------------------|
| TENANT - *(REGION)* - Tenant activation                      | 1 tenant | csp:tenant:v1           |
| TENANT - *(REGION)* - Availability zone activation           | 1 tenant | csp:(region):iaas:az:v1 |


### Tenant access authorization: Allowed IPs

Access to the cloud management console is strictly limited to pre-authorized IP addresses, in compliance with SecNumCloud qualification requirements. This restriction ensures an enhanced level of security by allowing access only to users from specified IP ranges, thus minimizing the risks of unauthorized access and protecting the cloud infrastructure according to the highest security standards.

Note: *The removal of an authorized IP is done through a support request in the Cloud Temple console.*

### Resource consumption within a tenant

It is possible to view the cloud resources consumed within a tenant, providing a detailed view of the use of the various deployed services. This feature allows users to monitor their resource consumption in real-time, identify the most solicited services, and optimize their use according to needs.

In the console menu, click on "Consumption report" and then select the desired time period. You will be able to view in detail the cloud resource consumption over the defined period, which will allow you to analyze the use of the services and optimize your management accordingly:

![](images/shiva_tenant_ressources_01.png)