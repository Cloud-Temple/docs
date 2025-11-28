## Step 3: Implementation of the ADFS Configuration

### Add claims

Add a second rule using, this time, the "Send LDAP attributes as claims" template.

<img src={ssoAdfs_010} />

Select the attribute store and add the attributes "E-Mail Addresses, Given-Name, Name, and SAM-Account-Name" as shown in the screenshot below.

<img src={ssoAdfs_011} />

Simply apply the changes.

### Authentication Federation Configuration

## Prerequisites

Your Microsoft ADFS server must be able to access [Cloud Temple's URL](https://keycloak-shiva.cloud-temple.com/auth/).

ADFS must be accessible from Cloud Temple networks and __expose a TLS certificate from a public CA__.

Users wishing to log in to the portal must have their email, last name, and first name filled in on the Active Directory.

### Configure claims

Claims allow you to provide information to the token that will be sent to the Cloud Temple console.

They transmit the information of the connected user that is necessary for the proper functioning of the different services, such as their email, name and surname.

<img src={ssoAdfs_002} />

Select "Import data, published online or on a local network, concerning the relying party" and fill in the URL provided by Cloud Temple support.

<img src={ssoAdfs_003} />

You can enter a name and description for the relying party, this part is optional.

<img src={ssoAdfs_004} />

By default, we allow everyone but it is possible to select __"Allow a specific group"__ to select the group or groups that will be allowed to access the Console services via ADFS.

<img src={ssoAdfs_005} />

Once all these steps are completed, you have finished configuring the relying party.

<img src={ssoAdfs_006} />

You will then need to edit the claim issuance policy for this new relying party.

<img src={ssoAdfs_007} />

Click on "Add a rule" and specify the template, either "Transform an incoming claim".

<img src={ssoAdfs_008} />

You will only need to fill in the information as indicated in the screenshot below.

<img src={ssoAdfs_009} />

#### Adding a Trusted Party Approval

On your ADFS server, go to __"Add a Trusted Party Approval"__.

<img src={ssoAdfs_001} />

## Step 3: Finalization

you can now test by going to the Console and clicking on the button corresponding to the ADFS client authentication; in this example, it is here __"ADFS Test"__

<img src={ssoAdfs_012} />

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

Here is an example of configuring the authentication repository of a Cloud Temple organization with **Microsoft ADFS**.

Configuring your Microsoft repository at the Cloud Temple organization level facilitates user authentication on the Console.
This helps avoid the multiplication of authentication factors and reduce the attack surface.
If your users are authenticated via their Microsoft account, authentication to the Console services will be transparent.

Here are the different steps to perform this configuration:

## Step 2: Request the SSO (Single Sign-On) configuration of your organization

This part of the configuration is done at the organization level by the Cloud temple team.

To do this, make a __support request__ in the console indicating your desire to configure your Microsoft ADFS authentication repository.

Please provide the following information in the support request:

```
    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    Public URL of the ADFS federation Metadata (<domain name of the adfs>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Example: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```

Once the configuration is completed on the Console side, the designated contact will be notified.

The Cloud Temple support team will send you a URL that will look like this: [https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor](https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor)

*You can paste the URL in a browser to test it. If it works correctly, you should see an XML displayed*