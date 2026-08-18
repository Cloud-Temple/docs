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

:::info[Protocol used]
Federation with EntraID is performed using __OpenID Connect (OIDC)__. No SAML configuration is required on your side.
:::

## Information exchanged

Setting up the federation relies on a two-way exchange. Here are the details upfront, so you can prepare everything in a single pass.

### What you need to send us

| Information | Name in the Azure portal | What it is used for |
|---|---|---|
| __Application (client) ID__ | *Application (client) ID* | Identifies the application to EntraID |
| __Directory (tenant) ID__ | *Directory (tenant) ID* | Determines the OpenID Connect endpoints of your directory |
| __Client secret__ | *Client secret* → __Value__ column | Authenticates the Console to EntraID |

Both identifiers appear in the __"Overview"__ tab of your app registration; the secret is created in the __"Certificates & secrets"__ tab.

:::warning[Never send the secret in the body of a request]
The client secret value is an authentication credential. Do not place it in the body of a support request, in a comment, or in an unencrypted attachment: it would remain readable there permanently.

State in your request that you have the secret, and send it through the secure channel your Cloud Temple contact will indicate. Both identifiers (Application ID and Directory ID) are not sensitive and may appear in the request.
:::

### What Cloud Temple sends you

The __"Redirect URL"__, specific to your organization. You must declare it in your EntraID app registration (step 3).

:::tip[Ask for it when you open your request]
This URL depends on your organization and cannot be guessed. By requesting it when you open your support request, you can complete the entire Azure configuration in one pass, without having to come back to it.
:::

## Step 1: SSO configuration on the Microsoft EntraID side

### Registering a new Azure application (Azure portal)

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

### Creating a secret

In the "Certificates & secrets" tab, create a new secret.

<img src={ssoAad_004} />

:::warning[Copy the value immediately]
The secret value is displayed only once, right after it is created. Copy the contents of the __"Value"__ column, not the __"Secret ID"__ column. If you lose this value, you will have to generate a new secret.
:::

<img src={ssoAad_005} />

:::caution[Validity limited to 24 months]
The secret expiry date cannot exceed 24 months, even with a custom expiry date. __Make a note of this date now__: once it is reached, SSO will stop working for all your users. See the [Renewing the secret](#renewing-the-secret) section.
:::

### Authorising the information used by the Console

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
- the name of a contact, with their email address and phone number, to finalise the configuration;
- the __Application (client) ID__ noted in step 1;
- the __Directory (tenant) ID__ noted in step 1.

Send the __client secret__ through the secure channel indicated by your contact, not in the body of the request.

Once the configuration is complete on the Console side, the contact you provided will be informed and will receive the __"Redirect URL"__ to declare.

## Step 3: Declaring the "Redirect URL"

If you did not enter the "Redirect URL" when creating the application, add it now.

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

## Renewing the secret

The client secret expires no later than 24 months after it is created. Once it expires, SSO stops working for all your users. Plan its renewal ahead:

1. in "Certificates & secrets", create a __new__ secret without deleting the old one;
2. send its value to Cloud Temple through the secure channel, by opening a support request;
3. once our teams confirm the switchover, delete the old secret from the Azure portal.

Keeping both secrets during the switchover avoids any service interruption.

## Best practices

- __Manage access through groups__ rather than individual users: a colleague joining or leaving is then handled in your directory, with no action needed on the Console.
- __Enable multi-factor authentication__ on the application in your EntraID conditional access policies: it then applies to Console access.
- __Set a reminder__ ahead of the secret expiry date.
- __Keep at least one local owner account__ on your Cloud Temple organization, outside the federation, so you retain access if your directory becomes unavailable.

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| `AADSTS50011`: redirect URL mismatch | The "Redirect URL" declared in Azure differs from the one provided by Cloud Temple. Check it character by character, including the absence of a trailing `/`. |
| `AADSTS7000215`: invalid secret | The secret has expired, or the value sent was the "Secret ID" instead of the "Value". |
| `AADSTS50105`: user not assigned | The "Assignment required" option is enabled and the user is not assigned to the application. |
| The sign-in button does not appear on the page | The configuration is not yet active on the Cloud Temple side. |
| The user authenticates but the Console denies access | The `email` claim is missing from the token, or no permissions have been granted to the user. |

## Support

For any question about this procedure, open a support request from your Console. Specify your organization name and the timestamp of a failed sign-in attempt: this allows the corresponding trace to be located.
