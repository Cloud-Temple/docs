---
title: Example of Identity Federation with JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.png';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.png';

This tutorial guides you through configuring single sign-on (SSO) between JumpCloud and Cloud Temple console using the OpenID Connect (OIDC) protocol.

For detailed information directly from JumpCloud, refer to their official SSO OIDC documentation: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).


Note: The images referenced in the Markdown file (`ssoJumpcloud001.png` and `ssoJumpcloud002.png`) are not included in this translation as they are external media files, and their inclusion would require actual image content which is not provided here.

## Prerequisites

Before you begin, ensure that you have gathered all necessary information from Cloud Temple, specifically the URL redirection specific to your Keycloak instance.

## Configuration dans JumpCloud

Follow these steps to configure a new OIDC application in your JumpCloud admin console:

1. **Create a New Application:**
    * Navigate to the applications section of JumpCloud.
    * Click on "Add" or "Create New Application".
    * Choose the option for a custom application integration ("Custom Application Integration").

2. **Configure SSO OIDC:**
    * Select "Manage Single Sign-On (SSO)".
    * Choose "Configure SSO with OIDC".

    ![Configuration SSO OIDC JumpCloud](https://i.imgur.com/z9lQ5jS.png)

3. **Enter Redirection URIs:**
    * In the appropriate field (often labeled "Redirect URIs" or "Callback URLs"), enter the URI provided by Cloud Temple. It typically follows this format:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```
        * Replace `<company specific>` with your company-specific identifiers provided by Cloud Temple.

4. **Select Authentication Client Type:**
    * Choose `Client Secret Post` as the "Client Authentication Type".

5. **Enter Login URL:**
    * In the "Login URL" field, enter the URL you use to access your Cloud Temple console. For example:
        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```
        * Replace `<unique-identifier>` with the unique identifier of your Cloud Temple instance.

6. **Configure Attribute Mapping:**
    * In the "Attribute Mapping" section (or equivalent), ensure that the following attributes are selected to be sent to Cloud Temple:
        * `Email`
        * `Profile` (which may include name, last name, etc.)

    ![Attribute Mapping JumpCloud](https://i.imgur.com/4z6lQ5S.png)

7. **Assign User Groups:**
    * Assign the user groups in JumpCloud that should have access to your Cloud Temple console via this SSO application.

8. **Activate the Application:**
    * Click on "Activate" or "Save" to finalize the application configuration.

9. **Provide Credentials to Cloud Temple:**
    * After activation, JumpCloud will provide you with a **Client ID** and a **Client Secret**.
    * Securely communicate these two identifiers to your Cloud Temple contact for finalizing the federation setup on Keycloak side.

Once Cloud-Temple has completed its federation configuration using the provided identifiants, users assigned to this JumpCloud application will be able to connect to their Cloud Temple console using their JumpCloud credentials.