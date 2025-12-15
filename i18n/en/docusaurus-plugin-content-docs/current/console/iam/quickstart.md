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

Tenant creation is performed via a service request indicating:

    Your Organization's name
    A contact name, email address, and phone number to finalize the configuration
    The tenant name
    The desired availability zone, or alternatively, the physical site for the tenant

### Selecting a Tenant

Tenant selection is performed from the main page of the Console:

<img src={shivaTenant} />

*__Note:__ A tenant's resources are exclusive to that tenant and cannot be mixed with those of other tenants.*

## Console Access Accounts

Console access accounts are created by the sponsor's master account upon invitation (regardless of the authentication repository).

Credentials are global to your [Organization](concepts.md#organizations).

*__Note:__ Identity federation is managed at the organization level*

### Creating a User Account in Your Organization

Creating a user account in your organization is done through invitation. To invite a user to an [Organization](concepts.md#organisations), go to the __'Administration'__ menu on the left side of your screen, along the green banner, then select the __'Users'__ submenu.

Click the __'New User'__ button from the users page.

<img src={shivaOnboard_003} />

Next, enter the user's email address.

<img src={shivaOnboard_004} />

The user will then receive a verification email.

<img src={shivaOnboard_001} />

Once verification is complete, the user will be able to log in to the console.

### Assigning Permissions to a User

User rights management is performed from the user page.

<img src={shivaOnboard_003} />

By default, a user has no rights. Therefore, the administrator who sent the invitation must assign the necessary rights for the user's activities. Simply click on the user's __'Actions'__ menu and select the __'Edit'__ option.

The rights activation menu then appears:

<img src={shivaOnboard_005} />

Permission configuration must be done for each [Tenant](concepts.md#tenant) within the 
[Organization](concepts.md#organisations).

The list of permissions and their definitions is available [here](#permissions).

### Change a user's language

Changing a user's language is done in their __'Profile'__, located in the top-right corner of the screen, under __'User Settings'__.

<img src={shivaProfil_006} />

The configuration is set individually for each tenant [Tenant](concepts.md#tenant).

### Thematic Notifications Subscription

Managing subscriptions allows you to receive emails related to activated themes, automatically sent when corresponding events occur.

This feature is accessible in the user profile, under the "My Subscriptions" tab:

<img src={shivaProfil_007} />

For example, in case of an incident, specific email notifications related to this theme will be generated.

The list of available themes may evolve and gradually expand to adapt to changing operational needs and environment requirements.

## Permissions

### What permissions are available for user accounts in the Console?

Here is the list of [available permissions](#permissions).

### How to add a permission?

Here is the [permission assignment procedure available here](#permissions)

### Why can't I add a permission?

To add a permission, you need to have the __'iam_write'__ permission as well as the __permission you wish to add__.

### How to add a user?

*__Note__ : To add a user, you must have the __'iam_write'__ permission.*

### How to audit user access/permissions?

Go to the users page and click the __'Export CSV'__ button:

### How to delete a user?

In the __'Administration'__ menu on the green bar on the left side of the screen, under the __'User'__ submenu, click the __'Action'__ icon of the target user and select __'Delete'__.

*__Note__:*  
- *To add a user, you must have the __'iam_write'__ permission.*  
- *If this is a federated user, __make sure the user has also been deleted from the identity repository__.*

### How to reset your password?

You can reset your password from the Console login page by clicking on __'Forgot password?'__.

### Why are some users grayed out?

Grayed-out users are those who have not yet verified their account. Upon account creation, the user receives a verification email.

<img src={shivaOnboard_001} />

Once verification is complete, the user will be able to log in to the console.

The account remains grayed out until verification is finalized.

### What is a Personal Access Token (PAT)?

Generating an API key, also known as a __Personal Access Token (PAT)__,
is a secure way to connect to the Console API without using a graphical interface.

### What is MFA and is it mandatory?

MFA (multi-factor authentication) is an identity verification concept involving two steps, known as __two-factor authentication__.

The user must provide two distinct proofs of identity. In the case of the Console, two-factor authentication is mandatory and requires entering a one-time code after the user has entered their account password.

## Access Management and Authentication

### Access Authorization to a Tenant: Allowed IPs

Access to the cloud management console is strictly limited to previously authorized IP addresses, in compliance with the SecNumCloud certification requirements. This restriction ensures a heightened level of security by allowing access only from specified IP ranges, thereby minimizing the risk of unauthorized access and protecting the cloud infrastructure according to the highest security standards.

It is now possible to view the list of authorized public IP addresses for the tenant and to add a new public IP address directly from the **Administration > Access** tab.

<img src={shivaIpAccessManagement_01} />

To perform these actions, the user must have the `console_public_access_read` permission to view the allowed IPs, and the `console_public_access_write` permission to add a public IP address to the list.

You can then add a new IP address:

<img src={shivaIpAccessManagement_02} />

> Note: *Removing an authorized IP requires submitting a support request via the Cloud Temple console.*