### What is a Personal Access Token (PAT)?

The generation of an API key, also known as __Personal Access Token (PAT)__,
is a secure way to connect to Shiva APIs without using a graphical interface.

### Why can't I add a permission?

To add a permission, you need to have the __'iam_write'__ permission as well as the __permission you want to add__.

### What is MFA and is it mandatory?

MFA (multi-factor authentication) is an identity verification concept in two steps, called __two-factor authentication__.

The user must provide two distinct identity proofs. In the case of the Shiva console, two-factor authentication is mandatory and requires entering a one-time code once the user has entered their account password.

## Tenant

### Assigning Permissions to a User

User rights management is handled from the user page.

<img src={shivaOnboard_003} />

By default, a user has no rights. It is therefore necessary for the administrator who sent the invitation to grant the user the necessary rights for their activity. Simply click on the __'Actions'__ menu of the user and select the __'Edit'__ option.

The rights activation menu then appears:

<img src={shivaOnboard_005} />

Permission configuration must be done for each [Tenant](concepts.md#tenants) of the [Organization](concepts.md#organisations).

The list of permissions and their definitions is available [here](#permissions).

### How to add a user ?

*__Nota__ : To add a user, you must have the right __'iam_write'__.*

## Access Management and Authentication

### Change the language of a user

Changing the language of a user is done in their __'Profile'__, top right of the screen, in the __'User Settings'__.

<img src={shivaProfil_006} />

The configuration is set up for each tenant [Tenant](concepts.md#tenants).

### Creating a Tenant

The creation of a tenant is carried out by a service request indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The availability zone or, in the absence of one, the desired physical site for the tenant

### How to audit user access/permissions?

Go to the users page and click on the button __'Export CSV'__ :

### Access Authorization for a Tenant: Allowed IP Addresses

Access to the cloud management console is strictly limited to previously authorized IP addresses, in compliance with the requirements of the SecNumCloud certification. This restriction ensures an enhanced level of security by allowing access only to users from specified IP ranges, thus minimizing the risks of unauthorized access and protecting the cloud infrastructure according to the highest security standards.

It is now possible to display the list of allowed public IP addresses on the tenant and add a new public IP address to this list directly from the "Administration > Access" tab.

<img src={shivaIpAccessManagement_01} />

For this, the user must have the `console_public_access_read` right to view the allowed IPs, and the `console_public_access_write` right to add a public IP address to the list.

It is then possible to add a new IP:

<img src={shivaIpAccessManagement_02} />

Note: *The removal of an allowed IP is done via a support request in the Cloud Temple console.*

### Thematic Notifications Subscription

Subscription management allows you to receive emails related to activated themes, which will be automatically sent when corresponding events occur.

It is accessible in the user profile, in the "My Subscriptions" tab:

<img src={shivaProfil_007} />

For example, in the case of an incident, specific email notifications for this theme will be generated.

The list of available themes is subject to evolve and gradually enrich to adapt to our operational needs and changes.

### Selecting a tenant

The selection of a tenant is done from the main page of the Shiva console:

<img src={shivaTenant} />

*__Note :__ The resources of a tenant are unique to them and cannot be mixed with other tenants.*

### How to delete a user?

In the __'Administration'__ menu on the green bar on the left side of the screen, in the sub-menu __'user'__, click on the __'Action'__ icon of the target user and choose __'Delete'__.

*__note__ :*

- *To add a user, you must have the right __'iam_write'__.*
- *If it is a federated user, __make sure the user has also been deleted from the identity repository__.*

## Permissions

## Shiva Console Access Accounts

Shiva Console access accounts are created by the client's master account via invitation (regardless of the authentication repository). 
Credentials are global to your [Organization](concepts.md#organisations).

*__Note :__ Identity federation is managed at the organization level*

### How to reset your password?

It is possible to reset your password from the Shiva console login page by clicking on __'Forgot password?'__.

### What are the available permissions for Shiva console user accounts?

Here is the list of [available permissions](#permissions).

### Creating a user account in your organization

Creating a user account in your organization is done via invitation. To invite a user into an [Organization](concepts.md#organisations), go to the __'Administration'__ menu on the left side of your screen on the green bar then to the __'Users'__ submenu.

Click the __'New User'__ button from the users page.

<img src={shivaOnboard_003} />

Enter the user's email address next

<img src={shivaOnboard_004} />

The user will then receive a verification email.

<img src={shivaOnboard_001} />

Once the verification is complete, the user will be able to log in to the console.

### Why are some users grayed out?

Grayed-out users are those who have not validated their account. When the account was created, the user received a verification email.

<img src={shivaOnboard_001} />

Once the verification is complete, the user will be able to log in to the console.

The account remains grayed out until the verification is completed.

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

### How to add a permission?

Here is the [permission assignment procedure is available here](#permissions)