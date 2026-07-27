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
- Owner permissions for your Cloud Temple organization
- Access to the Cloud Temple console

## Configuration

Configuring identity federation with Okta enables you to integrate your Okta directory with the Cloud Temple console for centralized authentication.

### Step 1: Okta-side Configuration

1. Log in to your Okta admin console
2. Navigate to **Applications** > **Applications**
3. Click **Create App Integration**
4. Select **SAML 2.0** as the authentication method
5. Configure the SAML settings for Cloud Temple

### Step 2: Configuring SAML Settings

Configure the following settings in Okta:

- **Single sign on URL**: Provided by the Cloud Temple team
- **Audience URI (SP Entity ID)**: Provided by the Cloud Temple team
- **Attribute Statements**: Configure the required user attributes

### Step 3: Cloud Temple Configuration Request

To configure federation with Okta, please create a support request in the Cloud Temple console specifying:

- Your Organization name
- A contact name with their email and phone number
- The SAML metadata URL for your Okta application
- The SAML signing certificate
- The configured user attributes

### Step 4: Testing and Validation

Once the configuration is complete:

1. Test authentication with a test user
2. Verify that user attributes are correctly mapped
3. Validate access to Cloud Temple resources

## Best Practices

- Configure Okta groups to manage permissions per tenant
- Enable multi-factor authentication (MFA) in Okta
- Monitor authentication logs to detect anomalies

## Support

For any assistance with Okta configuration, contact Cloud Temple support via the console.