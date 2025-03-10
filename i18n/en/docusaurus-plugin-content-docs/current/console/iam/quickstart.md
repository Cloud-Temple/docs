---
title: Getting Started Guide
---
import shivaTenant from './images/shiva_tenant.png'
import shivaOnboard_003 from './images/shiva_onboard_003.png'
import shivaOnboard_004 from './images/shiva_onboard_004.png'
import shivaOnboard_001 from './images/shiva_onboard_001.png'
import shivaOnboard_005 from './images/shiva_onboard_005.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaProfil_007 from './images/shiva_profil_007.png'
import shivaIpAccessManagement_01 from './images/shiva_ip_access_management_01.png'
import shivaIpAccessManagement_02 from './images/shiva_ip_access_management_02.png'

## Tenant

### Tenant Creation

The creation of a tenant is done through a service request indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The availability zone or, failing that, the desired physical site for the tenant


### Tenant Selection

The selection of the tenant is done from the main page of the Shiva console:

<img src={shivaTenant} />


*__Note:__ A tenant's resources are unique to it and cannot be mixed with other tenants.*



## Shiva Console Access Accounts

Shiva console access accounts are created by the principal account of the requestor upon invitation (regardless of the authentication repository).
The identification information is global to your [Organization](concepts.md#organisations).

*__Note:__ Identity federation is managed at the organization level*

### Creating a User Account in your Organization

Creating a user account in your organization is done by invitation. To invite a user in an [Organization](concepts.md#organisations), go to the __'Administration'__ menu on the left side of your screen in the green banner, then in the __'Users'__ submenu.

Click the __'New User'__ button from the users page.

<img src={shivaOnboard_003} />

Then enter the user's email address

<img src={shivaOnboard_004} />

The user will then receive a verification email.

<img src={shivaOnboard_001} />

Once verification is complete, the user will be able to log into the console.

### Assigning Permissions to a User

User rights management is done from the user page.

<img src={shivaOnboard_003} />

By default, a user has no rights. It is therefore necessary for the administrator who sent the invitation to grant rights necessary for the user’s activity. Simply click on the user's __'Actions'__ menu and choose the __'Edit'__ option.

The rights activation menu then appears:

<img src={shivaOnboard_005} />

Permission configuration must be done for each [Tenant](concepts.md#tenants) of the
[Organization](concepts.md#organisations).

The list of permissions and their definitions can be found [here](#permissions).

### Changing a User's Language

Changing a user's language must be done in their __'Profile'__, at the top right of the screen, in the __'User Settings'__.

<img src={shivaProfil_006} />

The configuration is done for each tenant [Tenant](concepts.md#tenants).

### Subscription to Themed Notifications

Subscription management allows emails related to activated themes to be automatically sent when corresponding events occur.

It is accessible in the user profile, in the "My Subscriptions" tab:

<img src={shivaProfil_007} />

 For example, in case of an incident, themed email notifications will be generated.

The list of available themes is subject to evolve and progressively enrich to adapt to the needs and changes in our operational environment.


## Permissions

### What permissions are available for user accounts in the Shiva console?

Here is the list of [available permissions](#permissions).

### How to add a permission?

The [permission assignment procedure is available here](#permissions).

### Why can't I add a permission?

To add a permission, you need to have the __'iam_write'__ permission as well as the __permission you wish to add__.

### How to add a user?

*__Note__ : To add a user, you must have the __'iam_write'__ permission.*

### How to audit user access/permissions?

Go to the users page and click the __'Export csv'__ button:

### How to delete a user?

In the __'Administration'__ menu on the green banner to the left of the screen, in the __'users'__ submenu, click on the user's __'Action'__ icon and choose __'Delete'__.

*__note__ :*
- *To add a user, you must have the __'iam_write'__ permission.*
- *If it is a federated user, __make sure the user has also been deleted from the identity repository__.*

### How to reset your password?
It is possible to reset your password from the Shiva console login page by clicking __'Forgot Password?'__.

### Why are some users grayed out?
The grayed-out users are those who have not validated their account. When the account was created, the user received a verification email.

<img src={shivaOnboard_001} />

Once verification is complete, the user will be able to log into the console.

The account will remain grayed out until the verification is completed.

### What is a Personal Access Token (PAT)?

The generation of an API key, also known as a __Personal Access Token (PAT)__, is a secure way to connect to Shiva APIs without using a graphical interface.

### What is MFA and is it mandatory?
MFA (multi-factor authentication) is a concept of verifying a user's identity in two steps, called __two-factor authentication__.

The user must provide two distinct proofs of identity. In the case of the Shiva console, two-factor authentication is mandatory and requires entering a one-time code after entering the account password.


## Access and Authentication Management

### Tenant Access Authorization: Allowed IPs

Access to the cloud management console is strictly limited to pre-authorized IP addresses, in compliance with SecNumCloud qualification requirements. This restriction ensures enhanced security by only allowing access to users from specified IP ranges, thereby minimizing the risks of unauthorized access and protecting the cloud infrastructure according to the highest security standards.

It is now possible to display the list of authorized public IP addresses on the tenant and add a new public IP address to this list directly from the "Administration > Access" tab.

<img src={shivaIpAccessManagement_01} />

To do this, the user must have the `console_public_access_read` right to view the authorized IPs, and the `console_public_access_write` right to add a public IP address to the list.

It is then possible to add a new IP:

<img src={shivaIpAccessManagement_02} />

Note: *Deleting an authorized IP is done through a support request in the Cloud Temple console.*