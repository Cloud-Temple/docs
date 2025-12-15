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

### Register a new Azure application (Azure portal)

To create the __app registration__, go to the Microsoft Azure portal, then navigate to Microsoft Entra ID, and select __"Add > App Registration"__.

On the "Register an application" page, please specify:

```
- __Name__ : Enter "__SHIVA__"
- __Supported account types__ : __Accounts in this organizational directory only__ (__<Your Azure Tenant>__ only - Single tenant)
- __Redirect URL__ : Do not configure this field at this time. The URL will be provided by Cloud Temple support and should be added to this field later.
```

<img src={ssoEntra_001} />

The __Application (client) ID__ and __Directory (tenant) ID__ are the key details that must be provided in your support request to the Cloud Temple team to enable Microsoft Entra ID authentication for your organization.

<img src={ssoEntra_002} />

### Definition of a secret

In the "Certificates & secrets" tab, create a new secret.

*Note: The expiration date of the secret cannot exceed 24 months, even with a custom expiration date.*

<img src={ssoAad_004} />

The generated secret must be provided in the support request:

<img src={ssoAad_005} />

### Definition des EntraID-Tokens

Der EntraID-Token ist für die Konfiguration der Authentifizierung erforderlich.

Klicken Sie im Menü __"Token Configuration"__ auf __"Add optional claim"__. Wählen Sie als Token-Typ "ID" aus und aktivieren Sie die Option "email".

<img src={ssoAad_006} />

Die Azure-Oberfläche fragt Sie daraufhin, ob Sie eine Berechtigung hinzufügen möchten, die Ihnen das Lesen der E-Mail-Adresse eines Benutzers (Microsoft Graph email) ermöglicht. Aktivieren Sie das Kontrollkästchen und bestätigen Sie.

<img src={ssoAad_007} />

Wechseln Sie anschließend zu "API-Berechtigungen" und klicken Sie auf __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Additional Security Configurations (optional but recommended)

By default, Microsoft Entra ID, as configured, will allow any user in your Azure tenant to sign in to your Cloud Temple organization.  
It is possible to restrict access at the __"App Registration"__ level to allow only a specific list of users or groups to sign in to your Cloud Temple organization.

Follow these steps:

#### Access additional "App Registration" settings

##### Option 1

Gehen Sie zum Register „Übersicht“ und klicken Sie auf den Anwendungsnamen (den Link hinter „Verwaltete Anwendung“).

<img src={ssoAad_009} />

##### Option 2

Gehe zu den „Enterprise-Anwendungen“ und suche mithilfe des zuvor erstellten Anwendungsnamens.

<img src={ssoAad_010} />

#### Authentication restriction to users assigned to the application

Indicate here the requirement for user assignment to the application to allow authentication:

<img src={ssoAad_011} />

#### Assigning Users and Groups to the Application

Only users and groups assigned to the application will be able to sign in to your Cloud Temple organization via the app registration.

<img src={ssoAad_012} />

Finally, simply apply the assignment by clicking "Assign".

<img src={ssoAad_013} />

From now on, users assigned to the application will be able to sign in to your Cloud Temple organization via the created application.

## Step 2: Request SSO (Single Sign-On) Configuration for Your Organization

This configuration step is performed at the organization level by the Cloud Temple team.

To proceed, please __submit a support request__ in the console indicating your intention to set up Microsoft Entra ID SSO.

Please provide the following information in your support request:
- Name of your Organization
- Name of a contact person, including their email address and phone number, to finalize the configuration
- Application ID (unique identifier associated with the previously created application)
- Directory ID (corresponds to the Azure AD tenant ID of your Azure environment)
- Secret (secret associated with the previously created application)

Once the configuration is completed on the Console side, the designated contact will be notified.

## Schritt 3: Abschluss der Konfiguration

Auf der Startseite der App-Registrierung klicken Sie im Menü „Übersicht“ auf „Redirect-URL hinzufügen“.

<img src={ssoAad_014} />

Wechseln Sie anschließend zum Abschnitt „Plattform hinzufügen“ und fügen Sie eine Plattform des Typs „Web“ hinzu.

<img src={ssoAad_015} />

Geben Sie einfach die von der Produkt-Team Anwendungen bereitgestellte „Redirect-URL“ ein.

<img src={ssoAad_016} />

Nachdem die „Redirect-URL“ hinzugefügt wurde, sollte das folgende Ergebnis angezeigt werden.

<img src={ssoAad_017} />

Die Konfiguration der „Redirect-URL“ kann einige Minuten in Anspruch nehmen, bis sie wirksam ist.  
Nach Abschluss aller Schritte können Sie sich über Ihren SSO bei Ihrer Cloud Temple-Organisation authentifizieren.

<img src={ssoAad_018} />