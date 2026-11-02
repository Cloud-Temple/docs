---
title: Frequently asked questions
---
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'

# IAM FAQ

Common questions about accounts, permissions and access to the Console. Step-by-step procedures are in [Onboarding](../onboarding.md); the complete reference is in the [IAM concepts](concepts.md).

<a id="tenant"></a>
<a id="création-dun-tenant"></a>
<a id="selection-dun-tenant"></a>

## How do I create or select a tenant?

Tenant creation is done __in self-service__ from the Console, with no prior service request: __'Administration > Tenants'__, __'New tenant'__ button. The working tenant is selected from the __'My tenants'__ selector in the header.

See [Choose or create an environment](../onboarding.md#step-3-choose-or-create-an-environment).

*__Note:__ A tenant's resources are exclusive to that tenant and are not shared with other tenants.*

<a id="comptes-daccès-à-la-console"></a>
<a id="création-dun-compte-utilisateur-dans-votre-organisation"></a>

## How do I add a user?

By invitation, from __'Administration > Users'__, __'New User'__ button. Credentials are global to your [organization](concepts.md#organizations), regardless of the authentication repository.

*__Note__: To add a user, you must have the __'iam_write'__ permission.*

See [Invite your collaborators](../onboarding.md#step-4-invite-your-collaborators) and the [reference](concepts.md#creating-a-user-account-in-your-organization).

<a id="affectation-des-permissions-à-un-utilisateur"></a>

## How do I add a permission?

By default, a user has no permissions. From the users page, open the user's __'Actions'__ menu and choose __'Edit'__. Permissions are granted __tenant by tenant__: there is no global assignment at the organization level.

See [assigning permissions within a tenant](concepts.md#assigning-permissions-within-a-tenant).

## Why can't I add a permission?

To add a permission, you need to have the __'iam_write'__ permission as well as the __permission you wish to add__.

<a id="permissions"></a>

## What permissions are available for Console user accounts?

See the list of [available permissions](concepts.md#permissions-available-for-users-in-your-organization) and their definitions.

## How do I audit user access/permissions?

Go to the __'Users'__ page and click the __'Export CSV'__ button: you get the list of users and their access.

## How do I delete a user?

In the __'Administration'__ menu on the green banner on the left side of the screen, under the __'Users'__ submenu, click the __'Actions'__ icon of the target user and select __'Delete'__.

*__Note__:*

- *You cannot delete yourself, nor delete an __'Owner'__ user.*
- *If this is a federated user, __make sure the user has also been deleted from the identity repository__.*

## Why are some users grayed out?

Grayed-out users are those who have not validated their account. Upon account creation, the user received a verification email.

<img src={shivaOnboard_001} />

The account remains grayed out until verification is finalized. If the link has expired, use the __'Re-registration'__ action: see [re-registering a user](concepts.md#user-re-registration).

## How do I reset my password?

You can reset your password from the Console login page by clicking on __'Forgot password?'__.

## What is MFA and is it mandatory?

MFA (multi-factor authentication) is an identity verification concept involving two steps, known as __two-factor authentication__.

The user must provide two distinct proofs of identity. In the case of the Console, two-factor authentication is mandatory and requires entering a one-time code after the user has entered their account password.

## What is a Personal Access Token (PAT)?

Generating an API key, also known as a __Personal Access Token (PAT)__, is a secure way to connect to the Console APIs without using a graphical interface. See the [API documentation](../api.md).

<a id="gestion-des-accès-et-authentification"></a>
<a id="autorisation-daccès-à-la-console--ip-autorisées"></a>

## How do I authorize a new IP address to access the Console?

As the Console is hosted on SecNumCloud-qualified infrastructure, access to it is limited to authorized public IP addresses. The list belongs to the __organization__: it can be viewed and extended from __'Administration > Access'__, with the `console_public_access_read` and `console_public_access_write` permissions. Removing an address is done through a support request in the Console.

See [Add an IP address](../onboarding.md#add-an-ip-address).

## How do I federate authentication with our directory?

Identity federation is configured at the organization level: see the [authentication mechanisms](concepts.md#authentication-mechanisms) and the [identity federation tutorials](/console/iam/tutorials).

<a id="changer-la-langue-dun-utilisateur"></a>

## How do I change a user's language?

In their __'Profile'__, at the top right of the screen, under __'User Settings'__. See [Change a user's language](concepts.md#change-a-users-language).

<a id="abonnement-aux-notifications-thématiques"></a>

## How do I receive email notifications?

In the user profile, __'My Subscriptions'__ tab, enable the desired themes. See [thematic notification subscriptions](concepts.md#thematic-notification-subscriptions).
