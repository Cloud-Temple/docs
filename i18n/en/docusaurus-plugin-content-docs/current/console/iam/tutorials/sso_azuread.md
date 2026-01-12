---
title: Identity Federation Example with Microsoft EntraID
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

Here is an example configuration of the identity provider for a Cloud Temple organization using __Microsoft EntraID__ (Azure Active Directory).

Configuring your Microsoft identity provider at the Cloud Temple organization level simplifies user authentication on the Console. This helps avoid the proliferation of authentication factors and reduces the attack surface.

If your users are already authenticated to their Microsoft accounts, logging into the Console services will be seamless and transparent.

Below are the steps to complete this configuration:

## Step 1: SSO Configuration on Microsoft Azure Side

### Registering a New Azure Application (Azure Portal)

To create the __app registration__, navigate to the Microsoft Azure portal, then go to Microsoft Entra ID, and select __"Add > App Registration"__.

On the "Register an application" page, please provide the following:

```
- __Name__ : Enter "__SHIVA__"
- __Supported account types__ : __Accounts in this organizational directory only__ (__<Your Azure Tenant>__ only - Single tenant)
- __Redirect URL__ : Do not configure this field at this time. The URL will be provided by Cloud Temple support and should be added to this field later.
```

<img src={ssoEntra_001} />

The __Application (client) ID__ and __Directory (tenant) ID__ are the key details to provide in your support request to the Cloud Temple team to enable Microsoft Entra ID authentication for your organization.

<img src={ssoEntra_002} />

### Definition of a Secret

In the "Certificates & secrets" tab, create a new secret.

*Note: The secret's expiration date cannot exceed 24 months, even with a custom expiration date.*

<img src={ssoAad_004} />

The generated secret will need to be provided in the support request:

<img src={ssoAad_005} />

### Definition of EntraID Token

The EntraID token is required for authentication configuration.

In the __"Token Configuration"_ menu, click on __"Add optional claim"__. You will need to select "ID" as the token type and check "email".

<img src={ssoAad_006} />

Azure will prompt you to grant a permission allowing you to read a user's email (Microsoft Graph email). Check the box and confirm.

<img src={ssoAad_007} />

Next, go to "API permissions" and click on __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Additional Security Configurations (Optional but Recommended)

By default, Microsoft Entra ID, as configured, will allow any user from your Azure tenant to sign in to your Cloud Temple organization.  
It is possible to restrict access at the __"App Registration"__ level, allowing only a specific list of users or groups to sign in to your Cloud Temple organization.

Follow the procedure below:

#### Access additional "App Registration" settings

##### Option 1

Go to the "Overview" tab, then click on the application name (the link located next to "Managed application").

<img src={ssoAad_009} />

##### Option 2

Go to "Enterprise applications" and search using the name of the previously created application.

<img src={ssoAad_010} />

#### Authentication restriction to users assigned to the application

Indicate here the requirement for user assignment to the application to allow authentication:

<img src={ssoAad_011} />

#### Assigning Users and Groups to the Application

Only users and groups assigned to the application will be able to sign in to your Cloud Temple organization via the app registration.

<img src={ssoAad_012} />

Finally, simply apply the assignment by clicking "Assign".

<img src={ssoAad_013} />

From now on, assigned users will be able to sign in to your Cloud Temple organization through the created application.

## Step 2: Request SSO (Single Sign-On) Configuration for Your Organization

This configuration step is performed at the organization level by the Cloud Temple team.

To proceed, submit a __support request__ in the console indicating your intent to set up Microsoft Entra ID SSO.

Please include the following information in your support request:
- Name of your Organization
- Name of a contact person, along with their email address and phone number, to finalize the configuration
- Application ID (unique identifier associated with the previously created application)
- Directory ID (corresponds to the Azure AD tenant ID in Azure)
- Secret (secret associated with the previously created application)

Once the configuration is completed on the Console side, the designated contact will be notified.

## Step 3: Finalize the Configuration

On the App Registration home page, in the Overview menu, click on "Add a Redirect URL".

<img src={ssoAad_014} />

Next, go to "Add a platform" and add one of type Web.

<img src={ssoAad_015} />

Simply enter the "Redirect URL" provided by the Applications Product Team.

<img src={ssoAad_016} />

You should see this result once the "Redirect URL" has been added.

<img src={ssoAad_017} />

It may take a few minutes for the "Redirect URL" configuration to take effect.  
Once all steps are completed, you can authenticate to your Cloud Temple organization using your SSO.

<img src={ssoAad_018} />