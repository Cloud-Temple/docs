---
title: Example of Identity Federation with Microsoft ADFS
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoAdfs_001 from './images/sso_adfs_001.png'
import ssoAdfs_002 from './images/sso_adfs_002.png'
import ssoAdfs_003 from './images/sso_adfs_003.png'
import ssoAdfs_004 from './images/sso_adfs_004.png'
import ssoAdfs_005 from './images/sso_adfs_005.png'
import ssoAdfs_006 from './images/sso_adfs_006.png'
import ssoAdfs_007 from './images/sso_adfs_007.png'
import ssoAdfs_008 from './images/sso_adfs_008.png'
import ssoAdfs_009 from './images/sso_adfs_009.png'
import ssoAdfs_010 from './images/sso_adfs_010.png'
import ssoAdfs_011 from './images/sso_adfs_011.png'
import ssoAdfs_012 from './images/sso_adfs_012.png'

Here is an example of configuring the authentication repository of a Cloud Temple organization with __Microsoft ADFS__.

Configuring your Microsoft repository at the Cloud Temple organization level facilitates the authentication of your users on the Shiva console.
This helps avoid the multiplication of authentication factors and reduces the attack surface.
If your users are authenticated to their Microsoft account, authentication to Shiva console services will be transparent.

Here are the different steps to achieve this configuration:

## Prerequisites

Your Microsoft ADFS server must be able to access [the Cloud Temple URL](https://keycloak-shiva.cloud-temple.com/auth/).

The ADFS must be accessible from Cloud Temple networks and __expose a TLS certificate from a public CA__.

Users wishing to connect to the portal must have their email, first name, and last name filled in on the Active Directory.

## Step 2: Request the SSO (Single Sign-On) configuration for your organization

This part of the configuration is done at the organization level by the Cloud Temple team.

To do this, make a __support request__ in the console indicating your desire to configure your Microsoft ADFS authentication repository.

Please provide the following information in the support request:

```
    Your Organization name
    The name of a contact with their email and phone number to finalize the configuration
    Public URL of the ADFS Federation Metadata (<adfs domain name>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Example: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```

As soon as the configuration is completed on the Shiva console side, the indicated contact will be informed.

The Cloud Temple support team will provide you with a URL that will look like this: [https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor](https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor)

*You can paste the URL into a browser to test it. If it works correctly, you should see an XML displayed*

## Step 3: Implementing the ADFS configuration

### Configuration of the authentication federation

#### Adding a relying party trust

On your ADFS server, go to __"Add a relying party trust"__.

<img src={ssoAdfs_001} />

### Configure the "claims"

Claims provide information to the token that will be transmitted to the Cloud Temple console.

They transmit the connected user's information that is necessary for the proper functioning of the various services, such as their email, first name, and last name.

<img src={ssoAdfs_002} />

Select "Import data about the relying party published online or on a local network" and enter the URL provided by Cloud Temple support.

<img src={ssoAdfs_003} />

You can enter a name and description for the relying party; this part is optional.

<img src={ssoAdfs_004} />

By default, we allow everyone, but it's possible to select __"Allow a specific group"__ to choose the group(s) that will be authorized to access Shiva console services via ADFS.

<img src={ssoAdfs_005} />

Once all these steps are completed, you have finished configuring the relying party.

<img src={ssoAdfs_006} />

You will then need to edit the claim issuance policy for this new relying party.

<img src={ssoAdfs_007} />

Click "Add Rule" and specify the template, which is "Transform an Incoming Claim."

<img src={ssoAdfs_008} />

You will just need to enter the information as shown in the screenshot below.

<img src={ssoAdfs_009} />

### Add the claims

Add a second rule with the template "Send LDAP Attributes as Claims" this time.

<img src={ssoAdfs_010} />

Select the attribute store and add the attributes "E-Mail Addresses, Given-Name, Surname, and SAM-Account-Name" as shown in the screenshot below.

<img src={ssoAdfs_011} />

You just need to apply the changes.

## Step 3: Finalization

You can now test by going to the Shiva console and clicking on the button corresponding to the ADFS client authentication; in this example, it is __"ADFS Test"__

<img src={ssoAdfs_012} />
