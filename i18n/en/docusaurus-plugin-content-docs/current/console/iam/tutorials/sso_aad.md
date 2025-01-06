---
title: Example of Identity Federation with Microsoft EntraID
tags:
  - iam
  - tutorials
  - onboarding
---

Here is an example of configuring the authentication repository of a Cloud Temple organization with __Microsoft EntraID__ (Azure Active Directory).

Configuring your Microsoft repository at the level of a Cloud Temple organization facilitates the authentication of your users on the Shiva console. This helps avoid the multiplication of authentication factors and reduces the attack surface.

If your users are authenticated to their Microsoft account, authentication to Shiva console services will be seamless.

Here are the different steps to achieve this configuration:

## Step 1: Configuration of SSO on Microsoft Azure side

### Registering a new Azure application (Azure portal)

For the creation of the __app registration__, go to the Microsoft Azure portal, then in Microsoft EntraID, __"ADD > App Registration"__.

On the "Register an application" page, please indicate:
```
- __Name__ : Indicate "__SHIVA__"
- __Supported account types__ :  __Accounts in this organizational directory only__ (__<Your Azure Tenant>__ only - Single tenant) 
- __Redirect URL__ : Do not configure at first. The URL will be provided by Cloud Temple support and will need to be added to this field later.
```

![](images/sso_entra_001.png)

The **Application (client) ID** and **Directory (tenant) ID** information are useful to provide in the support request to the Cloud Temple team to activate Microsoft EntraID authentication for your organization.

![](images/sso_entra_002.png)

### Definition of a secret
In the "Certificates & secrets" tab, create a new secret.

*Note: the secret expiration date cannot exceed 24 months, including with a custom expiration date.*

![](images/sso_aad_004.png)

The generated secret should be provided in the support request:

![](images/sso_aad_005.png)

### Definition of the EntraID token

The EntraID token is necessary for the configuration of authentication.

In the __"Token Configuration"__ menu, click on __"Add optional claim"__. You will need to select "ID" as the token type and check "email".

![](images/sso_aad_006.png)

The Azure interface will ask if you wish to add permission that will allow you to read a user's email (Microsoft Graph email), check the box and validate.

![](images/sso_aad_007.png)

Then, go to "API permissions" and click on __"Grant admin consent for Cloud Temple"__.

![](images/sso_aad_008.png)

### Additional security configurations (optional but recommended)

By default, Microsoft EntraID as configured will allow any user from your Azure tenant to log into your Cloud Temple organization.
It is possible to restrict access at the __"App Registration"__ level to authorize only a list of users or groups to login to your Cloud Temple organization.

Here is the procedure to follow:

#### Access additional "App Registration" settings
##### Option 1 
Go to the "Overview" tab and click on the application name (the link following "Managed application").

![](images/sso_aad_009.png)

##### Option 2 
Go to "Enterprise applications" and search using the name of the previously created application.

![](images/sso_aad_010.png)

#### Restriction of authentication to users assigned to the application

Indicate here the need for user assignment to the application to authorize their authentication:

![](images/sso_aad_011.png)

#### Assignment of users and groups to the application
Only the groups and users assigned to the application will be able to log into your Cloud Temple organization via the app registration.

![](images/sso_aad_012.png)

Finally, you only need to apply the assignment by clicking on "Assign".

![](images/sso_aad_013.png)

Now, users assigned to the application will be able to log into your Cloud Temple organization via the created application.

## Step 2: Request the configuration of your organization's SSO (Single Sign-On)

This part of the configuration is done at the organization level by the Cloud Temple team.

To do so, make __a support request__ in the console indicating your wish to configure a Microsoft EntraID SSO.

Please provide the following information in the support request:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    Application ID (unique identifier associated with the previously created application)
    Directory ID (corresponds to the Azure AD identifier of the Azure tenant)
    Secret (Secret associated with the previously created application)

As soon as the configuration is completed on the Shiva console side, the indicated contact will be informed.

## Step 3: Finalization of the configuration

On the App Registration homepage, in the overview menu, click on "Add a Redirect URL".

![](images/sso_aad_014.png)

Then, go to "Add a platform" and add a Web type platform.

![](images/sso_aad_015.png)

You only need to fill in the "Redirect URL" provided by the Applications Product Team.

![](images/sso_aad_016.png)

You should get this result once the "Redirect URL" is added.

![](images/sso_aad_017.png)

The configuration of the "Redirect URL" may take a few minutes to become effective.
Once all the steps are completed, you can authenticate to your Cloud Temple organization via your SSO.

![](images/sso_aad_018.png)