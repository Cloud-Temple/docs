---
title: Getting Started Guide
---
import shivaTenant from '@site/docs/console/iam/images/shiva_tenant.png'
import shivaOnboard_003 from '@site/docs/console/iam/images/shiva_onboard_003.png'
import shivaOnboard_004 from '@site/docs/console/iam/images/shiva_onboard_004.png'
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import shivaProfil_006 from '@site/docs/console/iam/images/shiva_profil_006.png'
import shivaProfil_007 from '@site/docs/console/iam/images/shiva_profil_007.png'
import shivaOrgAccess from '@site/docs/console/images/shiva_org_access.png'
import shivaIpAccessManagement_02 from '@site/docs/console/iam/images/shiva_ip_access_management_02.png'

## Tenant

### Creating a tenant

Tenant creation is done __in self-service__ from the Console, without any prior service request. From __'Administration > Tenants'__, the __'New tenant'__ button opens a two-part form: the tenant identity (name and description) and the products to activate on it.

The detailed procedure is described in the [Quickstart Console](../console_quickstart.md).

### Selecting a tenant

Tenant selection is done from the main page of the Console:

<img src={shivaTenant} />

*__Note:__ A tenant's resources are exclusive to it and cannot be mixed with other tenants.*

## Console Access Accounts

Console access accounts are created by the sponsor's master account upon invitation (regardless of the authentication directory).
Credentials are global to your [Organisation](concepts.md#organizations).

*__Note:__ Identity federation is managed at the organisation level*

### Creating a user account in your organisation

Creating a user account in your organisation is done by invitation. To invite a user to an [Organisation](concepts.md#organizations), go to the __'Administration'__ menu on the left side of your screen on the green banner, then to the __'Users'__ sub-menu.

Click the __'New User'__ button from the users page.

<img src={shivaOnboard_003} />

Then enter the user's email address.

<img src={shivaOnboard_004} />

The user will then receive a verification email.

<img src={shivaOnboard_001} />

Once verification is complete, the user will be able to log in to the console.

### Assigning permissions to a user

User rights management is done from the user page.

<img src={shivaOnboard_003} />

By default, a user has no rights. It is therefore necessary for the administrator who made the invitation to grant the rights necessary for their activity. Simply click on the user's __'Actions'__ menu and choose the __'Edit'__ option.

The rights activation menu then appears:

<img src={shivaOnboard_005} />

Permission configuration must be done for each [Tenant](concepts.md#tenant) of the
[Organisation](concepts.md#organizations).

The list of permissions and their definition is available [here](#permissions).

### Changing a user's language

Changing a user's language is done in their __'Profile'__, at the top right of the screen, in __'User Settings'__.

<img src={shivaProfil_006} />

The configuration is done for each tenant [Tenant](concepts.md#tenant).

### Subscribing to thematic notifications

Subscription management allows you to receive emails related to the enabled topics, which will be automatically sent when corresponding events occur.

It is accessible in the user profile, in the "My subscriptions" tab:

<img src={shivaProfil_007} />

For example, in case of an incident, specific email notifications for that topic will be generated.

The list of available topics is subject to change and will gradually be enriched to adapt to the needs and changes in our operational environment.

## Permissions

### What permissions are available for Console user accounts?

Here is the list of [available permissions](#permissions).

### How to add a permission?

The [permission assignment procedure is available here](#permissions)

### Why can't I add a permission?

To add a permission, you need to have the __'iam_write'__ permission as well as the __permission you wish to add__.

### How to add a user?

*__Note__ : To add a user, you must have the __'iam_write'__ right.*

### How to audit user access/permissions?

Go to the users page and click the __'Export csv'__ button:

### How to delete a user?

In the __'Administration'__ menu on the green banner on the left side of the screen, in the __'user'__ sub-menu, click the __'Action'__ icon of the target user and choose __'Delete'__.

*__note__ :*

- *To add a user, you must have the __'iam_write'__ right.*
- *If it is a federated user, __make sure the user has also been deleted from the identity directory__.*

### How to reset your password?

It is possible to reset your password from the Console login page by clicking on __'Forgot password?'__.

### Why are some users greyed out?

Greyed-out users are those who have not validated their account. During account creation, the user received a verification email.

<img src={shivaOnboard_001} />

Once verification is complete, the user will be able to log in to the console.

The account remains greyed out until verification has been completed.

### What is a Personal Access Token (PAT)?

Generating an API key, also called a __Personal Access Token (PAT)__,
is a secure way to connect to Console APIs without going through a graphical interface.

### What is MFA and is it mandatory?

MFA (multi-factor authentication) is a concept of verifying a user's identity in two steps, called __two-factor authentication__.

The user must provide two distinct proofs of identity. In the case of the Console, two-factor authentication is mandatory and requires entering a one-time code once the user has entered their account password.

## Access Management and Authentication

### Console Access Authorization: Allowed IPs

Access to the cloud management console is strictly limited to previously authorized IP addresses, in compliance with SecNumCloud qualification requirements. This restriction ensures an enhanced security level by only allowing access from users coming from specified IP ranges, thereby minimizing the risks of unauthorized access and protecting the cloud infrastructure according to the highest security standards.

The list is that of the __organisation__: an address added from any tenant authorizes access to the Console for the entire organisation. It can be viewed and enriched from the __'Administration > Access'__ tab.

<img src={shivaOrgAccess} />

To do so, the user must have the `console_public_access_read` right to view allowed IPs, and the `console_public_access_write` right to add a public IP address to the list.

It is then possible to add a new IP:

<img src={shivaIpAccessManagement_02} />

Note: *Deletion of an allowed IP is done through a support request in the Cloud Temple console.*
