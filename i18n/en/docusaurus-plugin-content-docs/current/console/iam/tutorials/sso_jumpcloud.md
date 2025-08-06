---
title: Identity Federation Example with JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.png';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.png';

This tutorial guides you through configuring Single Sign-On (SSO) between JumpCloud and the Cloud Temple console using the OpenID Connect (OIDC) protocol.

For detailed information directly from JumpCloud, see their official documentation on SSO OIDC: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Prerequisites

Before starting, make sure you have obtained the necessary information from Cloud Temple, including the specific redirect URI for your Keycloak instance.

## Configuration in JumpCloud

Follow these steps to set up a new OIDC application in your JumpCloud administration console:

1.  **Create a new application:**
    *   Navigate to the applications section in JumpCloud.
    *   Click on "Add" or "Create a new application".
    *   Choose the option for a custom application integration ("Custom Application Integration").

2.  **Configure the OIDC SSO:**
    *   Select "Manage Single Sign-On (SSO)".
    *   Choose "Configure SSO with OIDC".

    <img src={ssoJumpcloud001} alt="JumpCloud OIDC SSO Configuration" />

3.  **Enter the redirect URIs:**
    *   In the appropriate field (often called "Redirect URIs" or "Callback URLs"), enter the URI provided by Cloud Temple. It will generally follow this format:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```
        *Replace `<company specific>` with the specific identifiers provided by Cloud Temple for your company.*

4.  **Choose the client authentication type:**
    *   Select `Client Secret Post` as the "Client Authentication Type".

5.  **Enter the login URL:**
    *   In the "Login URL" field, enter the URL you use to access your Cloud Temple console. For example:
        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```
        *Replace `<unique-identifier>` with the unique identifier of your Cloud Temple instance.*

6.  **Configure attribute mapping:**
    *   In the "Attribute Mapping" (or equivalent) section, ensure the following attributes are selected to be sent to Cloud Temple:
        *   `Email`
        *   `Profile` (may include name, first name, etc.)

    <img src={ssoJumpcloud002} alt="Attribute Mapping JumpCloud" />

7.  **Assign groups:**
    *   Assign the JumpCloud user groups that should have access to the Cloud Temple console via this SSO application.

8.  **Activate the application:**
    *   Click on "Activate" or "Save" to complete the application configuration.

9.  **Provide credentials to Cloud Temple:**
    *   After activation, JumpCloud will provide a **Client ID** and a **Client Secret**.
    *   Safely communicate these two pieces of information to your Cloud Temple contact to finalize the Keycloak side federation configuration.

Once Cloud-Temple has configured the federation with the provided credentials, your assigned users will be able to log in to the Cloud Temple console using their JumpCloud credentials.