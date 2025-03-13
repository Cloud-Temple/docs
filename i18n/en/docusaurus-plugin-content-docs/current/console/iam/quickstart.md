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

### Creating a tenant

The creation of a tenant is done through a service request indicating:

    Your Organization name
    The name of a contact with their email and phone number to finalize the configuration
    The tenant name
    The desired availability zone or, failing that, the physical site for the tenant

### Selecting a tenant

Tenant selection is done from the main page of the Shiva console:

<img src={shivaTenant} />

*__Note:__ A tenant's resources are specific to it and cannot be mixed with other tenants.*

## Shiva console access accounts

Access accounts to the Shiva console are created by the sponsor's master account through invitation (regardless of the authentication repository).
Credentials are global to your [Organization](concepts.md#organisations).

*__Note:__ Identity federation is managed at the organization level*

### Creating a user account in your organization

Creating a user account in your organization is done by invitation. To invite a user to an [Organization](concepts.md#organisations), go to the __'Administration'__ menu on the left of your screen on the green banner, then to the __'Users'__ submenu.

Click on the __'New User'__ button from the users page.

<img src={shivaOnboard_003} />

Then enter the user's email address.

<img src={shivaOnboard_004} />

The user will then receive a verification email.

<img src={shivaOnboard_001} />

Once verification is complete, the user will be able to log in to the console.

### Assigning permissions to a user

User rights management is done from the user page.

<img src={shivaOnboard_003} />

By default, a user has no rights. It is therefore necessary for the administrator who sent the invitation to grant the rights needed for their activity. Simply click on the __'Actions'__ menu of the user and choose the __'Edit'__ option.

The rights activation menu then appears:

<img src={shivaOnboard_005} />

The permission configuration must be done for each [Tenant](concepts.md#tenants) of the [Organization](concepts.md#organisations).

The list of permissions and their definitions is accessible [here](#permissions).

### Changing a user's language

Changing a user's language is done from their __'Profile'__ at the top right of the screen, in the __'User settings'__.

<img src={shivaProfil_006} />

The configuration is done for each [Tenant](concepts.md#tenants).

### Subscribing to thematic notifications

Subscription management allows you to receive emails related to activated themes that will be automatically sent when corresponding events occur.

It is accessible in the user profile, in the "My subscriptions" tab:

<img src={shivaProfil_007} />

For example, in the event of an incident, email notifications specific to this theme will be generated.

The list of available themes is likely to evolve and be progressively enriched to adapt to the needs and changes in our operational environment.

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

Go to the users page and click on the __'Export csv'__ button:

### How to delete a user?

In the __'Administration'__ menu on the green banner on the left of the screen, in the __'users'__ submenu, click on the __'Action'__ icon of the target user and choose __'Delete'__.

*__Note__:*

- *To add a user, you must have the __'iam_write'__ right.*
- *If it is a federated user, __make sure the user has also been deleted from the identity repository__.*

### How to reset your password?

It is possible to reset your password from the Shiva console login page by clicking on __'Forgot password?'__.

### Why are some users grayed out?

Grayed out users are those who have not validated their account. When the account was created, the user received a verification email.

<img src={shivaOnboard_001} />

Once verification is complete, the user will be able to log in to the console.

The account is grayed out until the verification has been completed.

### What is a Personal Access Token (PAT)?

The generation of an API key, also called a __Personal Access Token (PAT)__, is a secure way to connect to Shiva APIs without going through a graphical interface.

### What is MFA and is it mandatory?

MFA (multi-factor authentication) is a concept of verifying a user's identity in two steps, called __two-factor authentication__.

The user must provide two distinct proofs of identity. In the case of the Shiva console, two-factor authentication is mandatory and requires entering a one-time code once the user has entered their account password.

## Access management and authentication

### Tenant access authorization: Authorized IPs

Access to the cloud management console is strictly limited to previously authorized IP addresses, in compliance with SecNumCloud qualification requirements. This restriction ensures an enhanced level of security by allowing access only to users from specified IP ranges, thereby minimizing the risks of unauthorized access and protecting the cloud infrastructure according to the highest security standards.

It is now possible to display the list of public IP addresses authorized on the tenant and add a new public IP address to this list directly from the "Administration > Access" tab.

<img src={shivaIpAccessManagement_01} />

To do this, the user must have the `console_public_access_read` right to view the authorized IPs, and the `console_public_access_write` right to add a public IP address to the list.

It is then possible to add a new IP:

<img src={shivaIpAccessManagement_02} />

Note: *The removal of an authorized IP is done through a support request in the Cloud Temple console.*
