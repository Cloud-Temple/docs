---
title: Example of Identity Federation with JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.jpg';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.jpg';

This tutorial guides you through the configuration of Single Sign-On (SSO) between JumpCloud and the Cloud Temple console using the OpenID Connect (OIDC) protocol.

For more detailed information directly from JumpCloud, refer to their official documentation on OIDC SSO: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Prerequisites

Before starting, make sure you have obtained the necessary information from Cloud Temple, including the redirect URI specific to your Keycloak instance.

## Configuration in JumpCloud

Follow these steps to configure a new OIDC application in your JumpCloud admin console:

1.  **Create a New Application:**
    *   Navigate to the applications section in JumpCloud.
    *   Click on "Add" or "Create a New Application".
    *   Choose the option for a "Custom Application Integration".

2.  **Configure SSO OIDC:**
    *   Select "Manage Single Sign-On (SSO)".
    *   Choose "Configure SSO with OIDC".

    <img src={ssoJumpcloud001} alt="SSO OIDC Configuration JumpCloud" />

3.  **Enter Redirect URIs:**
    *   In the appropriate field (often called "Redirect URIs" or "Callback URLs"), enter the URI provided by Cloud Temple. It will typically follow this format:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```
        *Replace `<company specific>` with your company's specific identifiers provided by Cloud Temple.*

4.  **Choose Client Authentication Type:**
    *   Select `Client Secret Post` as the "Client Authentication Type".

5.  **Enter Login URL:**
    *   In the "Login URL" field, enter the URL you use to access your Cloud Temple console. For example:
        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```
        *Replace `<unique-identifier>` with the unique identifier of your Cloud Temple instance.*

6.  **Configure Attribute Mapping:**
    *   In the "Attribute Mapping" section (or equivalent), ensure that the following attributes are selected to be sent to Cloud Temple:
        *   `Email`
        *   `Profile` (may include first name, last name, etc.)

    <img src={ssoJumpcloud002} alt="Attribute Mapping JumpCloud" />

7.  **Assign Groups:**
    *   Assign the JumpCloud user groups that should have access to the Cloud Temple console via this SSO application.

8.  **Activate the Application:**
    *   Click "Activate" or "Save" to finalize the application configuration.

9.  **Provide Credentials to Cloud Temple:**
    *   After activation, JumpCloud will provide a **Client ID** and a **Client Secret**.
    *   Securely convey this information to your Cloud Temple contact to finalize the federation configuration on the Keycloak side.

Once Cloud Temple has configured the federation with the provided credentials, your assigned users will be able to log in to the Cloud Temple console using their JumpCloud credentials.