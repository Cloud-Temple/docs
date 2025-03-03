---
title: Getting Started Guide
---

## Tenant

### Creating a Tenant

Creating a tenant is done through a service request indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The availability zone or, if not available, the desired physical site for the tenant

### Selecting a Tenant

The tenant selection is done from the main page of the Shiva console:

![](images/shiva_tenant.png)

*__Note:__ The resources of a tenant are unique to it and cannot be mixed with other tenants.*

## Shiva Console Access Accounts

Shiva console access accounts are created by the sponsor's master account by invitation (regardless of the authentication repository).
Identification information is global to your [Organization](concepts.md#organisations).

*__Note:__ Identity federation is managed at the organization level.*

### Creating a User Account in Your Organization

Creating a user account in your organization is done by invitation. To invite a user into an [Organization](concepts.md#organisations), go to the __'Administration'__ menu on the left of your screen on the green banner, then to the __'Users'__ submenu.

Click the __'New User'__ button from the users page.

![](images/shiva_onboard_003.png)

Then enter the user's email address

![](images/shiva_onboard_004.png)

The user will then receive a verification email.

![](images/shiva_onboard_001.png)

Once verification is complete, the user will be able to log in to the console.

### Assigning Permissions to a User

User rights management is done from the user page.

![](images/shiva_onboard_003.png)

By default, a user has no rights. It is therefore necessary for the administrator who sent the invitation to grant the necessary rights for the user's activities. Simply click on the user's __'Actions'__ menu and choose the __'Edit'__ option.

The rights activation menu then appears:

![](images/shiva_onboard_005.png)

Permission configuration must be done for each [Tenant](concepts.md#tenants) of the [Organization](concepts.md#organisations).

The list of permissions and their definitions can be found [here](#permissions).

### Changing a User's Language

Changing a user's language is to be done in their __'Profile'__, at the top right of the screen, in the __'User Settings'__.

![](images/shiva_profil_006.png)

The configuration is done for each tenant [Tenant](concepts.md#tenants).

### Thematic Notification Subscription

Subscription management allows receiving emails related to activated themes that will be automatically sent when corresponding events occur.

It is accessible in the user profile, under the "My subscriptions" tab:

![](images/shiva_profil_007.png)

For example, in the event of an incident, specific email notifications for that theme will be generated.

The list of available themes is likely to evolve and expand progressively to adapt to needs and changes in our operational environment.

## Permissions

### What permissions are available for Shiva console user accounts?

Here is the list of [available permissions](#permissions).

### How to add a permission?

The [permission assignment procedure is available here](#permissions).

### Why can't I add a permission?

To add a permission, you need to have the __'iam_write'__ permission as well as the __permission you wish to add__.

### How to add a user?

*__Note__: To add a user, you must have the __'iam_write'__ right.*

### How to audit user access/permissions?

Go to the user page and click on the __'Export csv'__ button:

### How to delete a user?

In the __'Administration'__ menu on the green banner on the left of the screen, in the __'user'__ submenu, click on the user's __'Action'__ icon and choose __'Delete'__.

*__Note:__*
- *To add a user, you must have the __'iam_write'__ right.*
- *If it is a federated user, __ensure that the user has also been deleted from the identity repository__.*

### How to reset the password?

It is possible to reset the password from the Shiva console login page by clicking on __'Forgot password?'__.

### Why are some users grayed out?

Grayed-out users are those who have not validated their account. During account creation, the user received a verification email.

![](../../console/images/shiva_onboard_001.png)

Once verification is complete, the user can log in to the console.

The account remains grayed out until verification is finalized.

### What is a Personal Access Token (PAT)?

The generation of an API key, also called __Personal Access Token (PAT)__, 
is a secure way to connect to Shiva APIs without using a graphical interface.

### What is MFA, and is it mandatory?

MFA (multi-factor authentication) is a concept of identity verification in two steps, called __dual-factor authentication__.

The user must provide two distinct proofs of identity. In the case of the Shiva console, dual-factor authentication is mandatory and requires entering a one-time code once the user has entered their account password.

## Access and Authentication Management

### Tenant Access Authorization: Authorized IPs

Access to the cloud management console is strictly limited to pre-authorized IP addresses, in compliance with SecNumCloud qualification requirements. This restriction ensures an enhanced level of security by allowing access only to users from specified IP ranges, thereby minimizing the risk of unauthorized access and protecting the cloud infrastructure according to the highest security standards.

It is now possible to display the list of public IP addresses authorized on the tenant and add a new public IP address to this list directly from the "Administration > Access" tab.

![](images/shiva_ip_access_management_01.png)

To do this, the user must have the `console_public_access_read` right to view authorized IPs, and the `console_public_access_write` right to add a public IP address to the list.

It is then possible to add a new IP:

![](images/shiva_ip_access_management_02.png)

Note: *The deletion of an authorized IP is done through a support request in the Cloud Temple console.*