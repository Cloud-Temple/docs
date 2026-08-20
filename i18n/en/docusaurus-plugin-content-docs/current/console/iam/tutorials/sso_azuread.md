---
title: Identity Federation Example with Microsoft EntraID (Azure AD)
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoEntra_001 from '@site/docs/console/iam/tutorials/images/sso_entra_001.png'
import ssoEntra_002 from '@site/docs/console/iam/tutorials/images/sso_entra_002.png'
import ssoAad_004 from '@site/docs/console/iam/tutorials/images/sso_aad_004.png'
import ssoAad_005 from '@site/docs/console/iam/tutorials/images/sso_aad_005.png'
import ssoAad_006 from '@site/docs/console/iam/tutorials/images/sso_aad_006.png'
import ssoAad_007 from '@site/docs/console/iam/tutorials/images/sso_aad_007.png'
import ssoAad_008 from '@site/docs/console/iam/tutorials/images/sso_aad_008.png'
import ssoAad_009 from '@site/docs/console/iam/tutorials/images/sso_aad_009.png'
import ssoAad_010 from '@site/docs/console/iam/tutorials/images/sso_aad_010.png'
import ssoAad_011 from '@site/docs/console/iam/tutorials/images/sso_aad_011.png'
import ssoAad_012 from '@site/docs/console/iam/tutorials/images/sso_aad_012.png'
import ssoAad_013 from '@site/docs/console/iam/tutorials/images/sso_aad_013.png'
import ssoAad_014 from '@site/docs/console/iam/tutorials/images/sso_aad_014.png'
import ssoAad_015 from '@site/docs/console/iam/tutorials/images/sso_aad_015.png'
import ssoAad_016 from '@site/docs/console/iam/tutorials/images/sso_aad_016.png'
import ssoAad_017 from '@site/docs/console/iam/tutorials/images/sso_aad_017.png'
import ssoAad_018 from '@site/docs/console/iam/tutorials/images/sso_aad_018.png'

Here is an example configuration of the identity provider for a Cloud Temple organization using __Microsoft EntraID__.

Configuring your Microsoft identity provider at the Cloud Temple organization level simplifies user authentication on the Console. This helps avoid the proliferation of authentication factors and reduces the attack surface. If your users are already authenticated to their Microsoft accounts, logging into the Console services will be seamless.

:::info[Azure AD and Microsoft EntraID]
Microsoft EntraID is the new name of Azure Active Directory (Azure AD) since 2023. It is the same product: this tutorial applies to both names interchangeably.
:::

## Choosing the protocol

Federation with EntraID can be set up using either of the two standard protocols. Both offer an equivalent level of security; they differ mainly in what you need to send us and in what has to be maintained over time.

| | OpenID Connect | SAML 2.0 |
|---|---|---|
| What you send us | Two identifiers and a secret | A public metadata URL |
| Secret exchanged | Yes, the client secret | None |
| To maintain over time | The client secret (24 months maximum) | The signing certificate (3 years by default) |

__Unless you have a specific constraint, we recommend OpenID Connect__: it is the protocol we deploy by default. Choose SAML if your internal policy requires it, or if your directory is connected to a federation hub that only speaks that protocol.

State the protocol you have chosen when you open your support request.

## Information exchanged

Setting up the federation relies on a two-way exchange. Here are the details upfront, so you can prepare everything in a single pass.

### What you need to send us — with OpenID Connect

| Information | Name in the Azure portal | What it is used for |
|---|---|---|
| __Application (client) ID__ | *Application (client) ID* | Identifies the application to EntraID |
| __Directory (tenant) ID__ | *Directory (tenant) ID* | Determines the OpenID Connect endpoints of your directory |
| __Client secret__ | *Client secret* → __Value__ column | Authenticates the Console to EntraID |

Both identifiers appear in the __"Overview"__ tab of your app registration; the secret is created in the __"Certificates & secrets"__ tab.

### What you need to send us — with SAML 2.0

A single piece of information is enough in the usual case:

| Information | Name in the Azure portal | What it is used for |
|---|---|---|
| __Federation metadata URL__ | *App Federation Metadata Url* | We derive from it your directory identifier, its endpoints and its signing certificate |

It takes the following form:

```
https://login.microsoftonline.com/<directory-tenant-id>/federationmetadata/2007-06/federationmetadata.xml?appid=<application-id>
```

You will find it under __"Enterprise applications"__ → your application → __"Single sign-on"__, in the *SAML Certificates* section. It is public and contains no secret: it may appear in the body of your request.

:::tip[Why this URL rather than a list of parameters]
It gathers all your directory parameters into a single value and simplifies tracking the renewal of your signing certificate. If this URL is not reachable from the internet, send instead the *Identity provider entity ID*, the *Single Sign-On service URL*, the *Single Logout service URL* and the signing certificate in __Certificate (Base64)__ format.
:::

:::warning[Never send the secret in the body of a request]
The client secret value is an authentication credential. Do not place it in the body of a support request, in a comment, or in an unencrypted attachment: it would remain readable there permanently.

State in your request that you have the secret, and send it through the secure channel your Cloud Temple contact will indicate. Both identifiers (Application ID and Directory ID) are not sensitive and may appear in the request.
:::

### What Cloud Temple sends you

Values specific to your organization, to be declared in your EntraID application:

| Our term | Microsoft term | Protocol |
|---|---|---|
| Redirect URL | *Redirect URL* | OpenID Connect |
| Redirect URL | *Reply URL (Assertion Consumer Service URL)* | SAML 2.0 |
| Service provider identifier | *Identifier (Entity ID)* | SAML 2.0 |

:::tip[Ask for them when you open your request]
These values depend on your organization and cannot be guessed. By requesting them when you open your support request, you can complete the entire Azure configuration in one pass, without having to come back to it.
:::

## Step 1: SSO configuration on the Microsoft EntraID side

Follow the section matching the protocol you have chosen, then the "Additional security settings" section, which is common to both.

### OpenID Connect path

#### Registering a new Azure application (Azure portal)

To create the __app registration__, go to the Microsoft Azure portal, then in Microsoft EntraID, __"ADD > App Registration"__.

On the "Register an application" page, provide the following:

```
- Name: enter "SHIVA"
- Supported account types: Accounts in this organizational directory only (<Your Azure Tenant> only - Single tenant)
- Redirect URL: enter the URL provided by Cloud Temple. If you do not have it yet, leave the field empty and refer to step 3.
```

<img src={ssoEntra_001} />

The __Application (client) ID__ and __Directory (tenant) ID__ are displayed on the "Overview" tab. Make a note of them: these are two of the three pieces of information to provide in your support request.

<img src={ssoEntra_002} />

#### Creating a secret

In the "Certificates & secrets" tab, create a new secret.

<img src={ssoAad_004} />

:::warning[Copy the value immediately]
The secret value is displayed only once, right after it is created. Copy the contents of the __"Value"__ column, not the __"Secret ID"__ column. If you lose this value, you will have to generate a new secret.
:::

<img src={ssoAad_005} />

:::caution[Validity limited to 24 months]
The secret expiry date cannot exceed 24 months, even with a custom expiry date. __Make a note of this date now__: once it is reached, SSO will stop working for all your users. See the [Maintaining the federation over time](#maintaining-the-federation-over-time) section.
:::

#### Authorising the information used by the Console

The Console identifies your users from the information carried by the identity token. Only one action is required on your side: __exposing the email address__.

In the __"Token Configuration"__ menu, click __"Add optional claim"__. Select "ID" as the token type and tick "email".

<img src={ssoAad_006} />

The Azure interface asks whether you want to add a permission allowing it to read a user's email (Microsoft Graph email). Tick the box and confirm.

<img src={ssoAad_007} />

Then go to "API permissions" and click __"Grant admin consent for &lt;your organization&gt;"__.

<img src={ssoAad_008} />

For reference, here is all the information consumed by the Console:

| Information | Usage | Action on your side |
|---|---|---|
| `email` | User's sign-in address | __Yes__ — must be declared as an optional claim (above) |
| `oid` | Stable link between the Console account and the identity in your directory, even if the email address changes | None — issued natively by EntraID |
| `given_name`, `family_name` | First name and last name shown in the Console | None — included in the `profile` scope |

### SAML 2.0 path

#### Creating the enterprise application

In __Microsoft EntraID__, go to __"Enterprise applications"__, then __"New application"__. Choose __"Create your own application"__, name it, and select *Integrate any other application you don't find in the gallery (Non-gallery)*. Confirm with __"Create"__.

#### Configuring single sign-on

In your application, open __"Single sign-on"__ and choose __"SAML"__. In __"Basic SAML Configuration"__, click __"Edit"__ and fill in the values provided by Cloud Temple:

- __Identifier (Entity ID)__;
- __Reply URL (Assertion Consumer Service URL)__.

Save.

#### Attributes and claims

EntraID issues by default the claims expected by the Console. Check that they are present under __"Attributes & Claims"__:

| Claim | Usage | Action on your side |
|---|---|---|
| `…/claims/emailaddress` | User's sign-in address | None — source `user.mail` |
| `http://schemas.microsoft.com/identity/claims/objectidentifier` | Stable link between the Console account and the identity in your directory | None |
| `…/claims/givenname`, `…/claims/surname` | First name and last name shown in the Console | None |

:::warning[Name identifier (NameID): the most commonly missed step]
Under __"Attributes & Claims"__ → __"Unique User Identifier (Name ID)"__, set the source to __user.objectid__ and the format to __Persistent__.

By default, EntraID issues the email address as the NameID. If a user's address changes, the Console would treat them as a different person and they would lose their permissions. The object identifier, by contrast, never changes.
:::

### Additional security settings (optional but recommended)

By default, Microsoft EntraID as configured will allow any user of your Azure tenant to sign in to your Cloud Temple organization. You can restrict access at the __"App Registration"__ level so that only a list of users or groups is authorised.

Here is the procedure to follow.

#### Accessing the additional "App Registration" settings

##### Option 1

Go to the "Overview" tab, then click the application name (the link next to "Managed application").

<img src={ssoAad_009} />

##### Option 2

Go to "Enterprise applications" and search using the name of the application created earlier.

<img src={ssoAad_010} />

#### Restricting authentication to users assigned to the application

Specify here that a user must be assigned to the application in order to authenticate:

<img src={ssoAad_011} />

#### Assigning users and groups to the application

Only the groups and users assigned to the application will be able to sign in to your Cloud Temple organization through the app registration.

<img src={ssoAad_012} />

Finally, apply the assignment by clicking "Assign".

<img src={ssoAad_013} />

Users assigned to the application can now sign in to your Cloud Temple organization through the application you created.

## Step 2: Requesting the SSO configuration for your organization

This part of the configuration is carried out at the organization level by the Cloud Temple team.

To do so, submit __a support request__ in the Console stating that you wish to configure Microsoft EntraID federation, specifying:

- your organization name;
- __the protocol you have chosen__: OpenID Connect or SAML 2.0;
- the name of a contact, with their email address and phone number, to finalise the configuration;
- __with OpenID Connect__: the __Application (client) ID__ and the __Directory (tenant) ID__ noted in step 1;
- __with SAML 2.0__: the __federation metadata URL__ of your application.

With OpenID Connect, send the __client secret__ through the secure channel indicated by your contact, not in the body of the request. With SAML, no secret is exchanged.

Once the configuration is complete on the Console side, the contact you provided will be informed.

## Step 3: Declaring the "Redirect URL" (OpenID Connect)

If you did not enter the "Redirect URL" when creating the application, add it now.

With SAML 2.0, the equivalent URLs were already declared under __"Basic SAML Configuration"__ in step 1: go straight to step 4.

On the App Registration home page, in the "Overview" menu, click "Add a Redirect URL".

<img src={ssoAad_014} />

Then go to "Add a platform" and add one of type Web.

<img src={ssoAad_015} />

Enter the "Redirect URL" provided by Cloud Temple.

<img src={ssoAad_016} />

You should get this result once the "Redirect URL" has been added.

<img src={ssoAad_017} />

The "Redirect URL" configuration may take a few minutes to take effect.

## Step 4: Verification

Once all the steps are complete, you can authenticate to your Cloud Temple organization through your SSO.

<img src={ssoAad_018} />

:::info[Permissions for new users]
Identity federation handles __authentication__, not __authorisation__. A user signing in for the first time through SSO has no permissions until an organization owner grants them from the Console.
:::

## Maintaining the federation over time

This is the main point to watch: whatever the protocol, one element expires, and its expiry interrupts SSO __for all your users__.

### With OpenID Connect: the client secret

The client secret expires no later than 24 months after it is created. Plan its renewal ahead:

1. in "Certificates & secrets", create a __new__ secret without deleting the old one;
2. send its value to Cloud Temple through the secure channel, by opening a support request;
3. once our teams confirm the switchover, delete the old secret from the Azure portal.

Keeping both secrets during the switchover avoids any service interruption.

### With SAML 2.0: the signing certificate

The signing certificate issued by EntraID has a limited lifetime, three years by default.

__Let us know before any certificate rotation__, through a support request, respecting the overlap period offered by Microsoft. If you sent us a certificate as a file rather than the metadata URL, attach the new certificate to your request.

## Best practices

- __Manage access through groups__ rather than individual users: a colleague joining or leaving is then handled in your directory, with no action needed on the Console.
- __Enable multi-factor authentication__ on the application in your EntraID conditional access policies: it then applies to Console access.
- __Set a reminder__ ahead of the expiry date of the client secret or the signing certificate, depending on the protocol chosen.
- __Keep at least one local owner account__ on your Cloud Temple organization, outside the federation, so you retain access if your directory becomes unavailable.

## Troubleshooting

| Symptom | Protocol | Likely cause |
|---|---|---|
| `AADSTS50011`: redirect URL mismatch | Both | The URL declared in Azure differs from the one provided by Cloud Temple. Check it character by character, including the absence of a trailing `/`. |
| `AADSTS700016`: application not found | SAML 2.0 | The *Entity ID* declared does not match the one provided by Cloud Temple. |
| `AADSTS7000215`: invalid secret | OpenID Connect | The secret has expired, or the value sent was the "Secret ID" instead of the "Value". |
| `AADSTS50105`: user not assigned | Both | The "Assignment required" option is enabled and the user is not assigned to the application. |
| The sign-in button does not appear on the page | Both | The configuration is not yet active on the Cloud Temple side. |
| The user authenticates but the Console denies access | Both | The email address is missing from the token, or no permissions have been granted to the user. |
| The user appears as a new account at every sign-in | SAML 2.0 | The NameID is not set to `user.objectid`. |
| Signature error on arrival at the Console | SAML 2.0 | The signing certificate was renewed on the Azure side without us being informed. |

## Support

For any question about this procedure, open a support request from your Console. Specify your organization name and the timestamp of a failed sign-in attempt: this allows the corresponding trace to be located.
