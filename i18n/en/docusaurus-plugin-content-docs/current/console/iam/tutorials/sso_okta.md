

---
title: Identity Federation Example with Okta
tags:
  - iam
  - tutorials
  - onboarding
---

This tutorial guides you through configuring identity federation with Okta for your Cloud Temple organization.



## Prerequisites

- Administrator access to your Okta instance
- Owner rights on your Cloud Temple organization
- Access to the Cloud Temple console



## Configuration

The configuration of identity federation with Okta allows integrating your Okta directory with the Cloud Temple console for centralized authentication.



### Step 1: Okta Side Configuration

1. Log in to your Okta administration console
2. Navigate to **Applications** > **Applications**
3. Click on **Create App Integration**
4. Select **SAML 2.0** as the authentication method
5. Configure the SAML settings for Cloud Temple



### Step 2: Configuring SAML Settings

Configure the following parameters in Okta:

- **Single sign on URL** : Provided by the Cloud Temple team
- **Audience URI (SP Entity ID)** : Provided by the Cloud Temple team
- **Attribute Statements** : Configure the necessary user attributes



### Step 3: Cloud Temple Configuration Request

To configure federation with Okta, please create a support request in the Cloud Temple console specifying:

- Your Organization's name
- The name of a contact along with their email and phone number
- The SAML metadata URL of your Okta application
- The SAML signature certificate
- The configured user attributes



### Step 4: Test and Validation

Once the configuration is complete:

1. Test the authentication with a test user
2. Check that user attributes are correctly mapped
3. Validate access to Cloud Temple resources



## Best Practices

- Configure Okta groups to manage permissions by tenant
- Enable multi-factor authentication (MFA) in Okta
- Monitor authentication logs to detect anomalies



## Support

For any assistance with the configuration of Okta, contact Cloud Temple support via the console.