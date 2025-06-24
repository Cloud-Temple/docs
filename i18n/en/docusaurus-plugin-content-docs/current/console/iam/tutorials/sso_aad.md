### Definition of the EntraID token

The EntraID token is required for authentication configuration.

In the __"Token Configuration"__ menu, click on __"Add optional claim"__. You will need to select "ID" as the token type and check "email".

<img src={ssoAad_006} />

The Azure interface will ask if you want to add a permission that will allow you to read the user's email (Microsoft Graph email), check the box and confirm.

<img src={ssoAad_007} />

Then go to "API permissions" and click on __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

##### Option 2

Go to "Enterprise Applications" and search using the name of the previously created application.

<img src={ssoAad_010} />

### Definition of a secret

In the "Certificates & secrets" tab, create a new secret.

*Note: The expiration date of the secret cannot be more than 24 months, including with a custom expiration date.*

<img src={ssoAad_004} />

The generated secret will need to be provided in the support request:

<img src={ssoAad_005} />

## Step 1: SSO Configuration on the Microsoft Azure Side

##### Option 1

Go to the "Overview" tab and click on the application name (the link following "Managed application").

<img src={ssoAad_009} />

## Step 2: Request the configuration of your organization's SSO (Single Sign-On)

This part of the configuration is done at the organization level by the Cloud temple team.

To do this, make a **support request** in the console indicating your desire to configure a Microsoft EntraID SSO.

Please provide the following information in the support request:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    Application ID (unique identifier associated with the previously created application)
    Directory ID (corresponds to the Azure AD tenant ID)
    Secret (Secret associated with the previously created application)

Once the configuration is completed on the Shiva console, the indicated contact will be notified.

### Registration of a new Azure application (Azure portal)

To create an __App registration__, go to the Microsoft Azure portal, then in Microsoft EntraID, __"ADD > App Registration"__.

In the "Register an application" page, please indicate:

```
- __Name__ : Enter "__SHIVA__"
- __Supported account types__ : __Accounts in this organizational directory only__ (__<Your Azure Tenant>__ only - Single tenant)
- __Redirect URL__ : Do not configure initially. The URL will be provided by Cloud Temple support and will be added to this field later.
```

<img src={ssoEntra_001} />

The __Application (client) ID__ and __Directory (tenant) ID__ information are the ones to provide in the support request to the Cloud Temple team to enable Microsoft EntraID authentication at your organization level.

<img src={ssoEntra_002} />

#### User and Group Assignment to the Application

Only the groups and users assigned to the application will be able to connect to your Cloud Temple organization via the app registration.

<img src={ssoAad_012} />

Finally, you will only need to apply the assignment by clicking on "Assign".

<img src={ssoAad_013} />

From now on, the users assigned to the application will be able to connect to your Cloud Temple organization via the created application.

#### Authentication restriction to users assigned to the application

Indicate here the necessity of user assignment to the application to allow its authentication :

<img src={ssoAad_011} />

## Step 3: Finalizing the Configuration

On the App Registration home page, in the overview menu, click on "Add a Redirect URL".

<img src={ssoAad_014} />

Next, navigate to "Add a platform" and add one of type Web.

<img src={ssoAad_015} />

You just need to enter the "Redirect URL" provided by the Applications Product Team.

<img src={ssoAad_016} />

You should get this result once the "Redirect URL" is added.

<img src={ssoAad_017} />

The "Redirect URL" configuration may take a few minutes to take effect. Once all steps are completed, you can authenticate to your Cloud Temple organization via your SSO.

<img src={ssoAad_018} />

#### Access the Additional Parameters 'App Registration'

---
title: Example of Identity Federation with Microsoft EntraID
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoEntra_001 from './images/sso_entra_001.png'
import ssoEntra_002 from './images/sso_entra_002.png'
import ssoAad_004 from './images/sso_aad_004.png'
import ssoAad_005 from './images/sso_aad_005.png'
import ssoAad_006 from './images/sso_aad_006.png'
import ssoAad_007 from './images/sso_aad_007.png'
import ssoAad_008 from './images/sso_aad_008.png'
import ssoAad_009 from './images/sso_aad_009.png'
import ssoAad_010 from './images/sso_aad_010.png'
import ssoAad_011 from './images/sso_aad_011.png'
import ssoAad_012 from './images/sso_aad_012.png'
import ssoAad_013 from './images/sso_aad_013.png'
import ssoAad_014 from './images/sso_aad_014.png'
import ssoAad_015 from './images/sso_aad_015.png'
import ssoAad_016 from './images/sso_aad_016.png'
import ssoAad_017 from './images/sso_aad_017.png'
import ssoAad_018 from './images/sso_aad_018.png'

Here is an example of the authentication repository configuration for a Cloud Temple organization with __Microsoft EntraID__ (Azure Active Directory).

Configuring your Microsoft repository at the level of a Cloud Temple organization facilitates user authentication on the Shiva console. This helps avoid the multiplication of authentication factors and reduces the attack surface.

If your users are authenticated with their Microsoft account, authentication to the Shiva console services will be transparent.

Here are the different steps to perform this configuration:

### Additional Security Configurations (optional but recommended)

By default, Microsoft EntraID as configured will allow any user in your Azure tenant to connect to your Cloud Temple organization.
It is possible to restrict access at the __"Application Registration"__ level to allow only a list of users or groups to connect to your Cloud Temple organization.

Here is the procedure to follow;