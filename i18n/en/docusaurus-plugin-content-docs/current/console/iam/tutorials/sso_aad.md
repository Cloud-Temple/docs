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


Here is an example of configuring the authentication repository of a Cloud Temple organization with __Microsoft EntraID__ (Azure Active Directory).

Configuring your Microsoft repository at the Cloud Temple organization level facilitates the authentication of your users to the Shiva console. This avoids the multiplication of authentication factors and reduces the attack surface.

If your users are authenticated to their Microsoft account, authentication to Shiva console services will be transparent.

Here are the different steps to achieve this configuration:


## Step 1: SSO configuration on the Microsoft Azure side

### Registering a new Azure application (Azure portal)

For the creation of the __app registration__, you need to go to the Microsoft Azure portal, then in Microsoft EntraID, __"ADD > App Registration"__

On the "Register an application" page, please indicate:
```
- __Name__ : Indicate "__SHIVA__"
- __Supported account types__ :  __Accounts in this organizational directory only__ (__<Your Azure Tenant>__ only - Single tenant)
- __Redirect URL__ : Do not configure initially. The URL will be provided by Cloud Temple support and will be added in this field later.
```

<img src={ssoEntra_001} />

The **Application (client) ID** and **Directory (tenant) ID** information is useful to provide in the support request to the Cloud Temple team to enable Microsoft EntraID authentication at your organization level.

<img src={ssoEntra_002} />

### Defining a secret
In the "Certificates & secrets" tab, create a new secret.

*Note: the expiration date of the secret cannot be more than 24 months, including with a custom expiration date.*

<img src={ssoAad_004} />

The generated secret should be provided in the support request:

<img src={ssoAad_005} />


### Defining the EntraID token

The EntraID token is necessary for authentication configuration.

In the __"Token Configuration"__ menu, click on __"Add optional claim"__. You will need to select "ID" as the token type and check "email".

<img src={ssoAad_006} />

The Azure interface will ask if you would like to add a permission that will allow you to read a user's email (Microsoft Graph email), check the box and validate.

<img src={ssoAad_007} />

Next, go to "API permissions" and click on __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Additional security configurations (optional but recommended)

By default, Microsoft EntraID as configured will allow any user in your Azure tenant to connect to your Cloud Temple organization.
Access can be restricted at the __"App Registration"__ level to only allow a list of users or groups to connect to your Cloud Temple organization.

Here is the procedure to follow:

#### Access additional App Registration settings
##### Option 1
Go to the "Overview" tab and click on the application name (the link located next to "Managed application").

<img src={ssoAad_009} />

##### Option 2
Navigate to "Enterprise applications" and search using the name of the previously created application.

<img src={ssoAad_010} />

#### Restricting authentication to users assigned to the application

Indicate here the need for user assignment to the application to authorize its authentication:

<img src={ssoAad_011} />

#### Assigning users and groups to the application
Only the groups and users assigned to the application will be able to connect to your Cloud Temple organization through the app registration.

<img src={ssoAad_012} />

Finally, you will only have to apply the assignment by clicking on "Assign".

<img src={ssoAad_013} />

Assigned users can now connect to your Cloud Temple organization through the created application.

## Step 2: Request SSO (Single Sign-On) configuration for your organization

This part of the configuration is done at the organization level by the Cloud Temple team.

To do this, make a __support request__ in the console indicating your wish to configure Microsoft EntraID SSO.

Please provide the following information in the support request:

    Your Organization's name
    The name of a contact with their email and phone number to finalize the configuration
    Application ID (unique identifier associated with the previously created application)
    Directory ID (corresponds to the Azure AD ID of the Azure tenant)
    Secret (Secret associated with the previously created application)

As soon as the configuration is done on the Shiva console side, the indicated contact will be informed.

## Step 3: Configuration finalization

On the home page of the App Registration, in the overview menu, click on "Add a Redirect URL".

<img src={ssoAad_014} />

Next, navigate to "Add a platform" and add one of type Web.

<img src={ssoAad_015} />

Simply fill in the "Redirect URL" provided by the Product Applications Team.

<img src={ssoAad_016} />

You should get this result once the "Redirect URL" is added.

<img src={ssoAad_017} />

Configuring the "Redirect URL" may take a few minutes to become effective.
Once all steps are completed, you can authenticate to your Cloud Temple organization via your SSO.

<img src={ssoAad_018} />