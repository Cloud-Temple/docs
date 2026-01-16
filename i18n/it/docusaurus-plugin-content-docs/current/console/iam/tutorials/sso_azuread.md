---
title: Esempio di federazione dell'identità con Microsoft EntraID
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

Ecco un esempio di configurazione del repository di autenticazione di un'organizzazione Cloud Temple con __Microsoft EntraID__ (Azure Active Directory).

La configurazione del tuo repository Microsoft a livello di organizzazione Cloud Temple semplifica l'autenticazione degli utenti sulla Console. Ciò permette di evitare la moltiplicazione dei fattori di autenticazione e di ridurre la superficie di attacco.

Se gli utenti sono autenticati con il loro account Microsoft, l'autenticazione ai servizi della Console avverrà in modo trasparente.

Di seguito sono riportati i diversi passaggi necessari per completare questa configurazione:

## Step 1: SSO configuration on Microsoft Azure side

### Registration of a new Azure application (Azure portal)

To create the __app registration__, go to the Microsoft Azure portal, then navigate to Microsoft Entra ID, and select __"Add > App Registration"__.

In the "Register an application" page, please specify:

```
- __Name__ : Enter "__SHIVA__"
- __Supported account types__ : __Accounts in this organizational directory only__ (__<Your Azure Tenant>__ only - Single tenant)
- __Redirect URL__ : Do not configure this field at this stage. The URL will be provided by Cloud Temple support and should be added to this field later.
```

<img src={ssoEntra_001} />

The __Application (client) ID__ and __Directory (tenant) ID__ are the key details to provide in your support request to the Cloud Temple team to enable Microsoft Entra ID authentication for your organization.

<img src={ssoEntra_002} />

### Definizione di un segreto

Nella scheda "Certificates & secrets", creare un nuovo segreto.

*Nota: la data di scadenza del segreto non può essere superiore a 24 mesi, anche con una data di scadenza personalizzata.*

<img src={ssoAad_004} />

Il segreto generato dovrà essere fornito nella richiesta di supporto:

<img src={ssoAad_005} />

### Definizione del token EntraID

Il token EntraID è necessario per la configurazione dell'autenticazione.

Nel menu __"Token Configuration"__, fare clic su __"Add optional claim"__. Selezionare "ID" come tipo di token e selezionare la voce "email".

<img src={ssoAad_006} />

L'interfaccia Azure vi chiederà se desiderate aggiungere un'autorizzazione che vi permetterà di leggere l'email di un utente (Microsoft Graph email), selezionare la casella e confermare.

<img src={ssoAad_007} />

Successivamente, recarsi su "API permissions" e fare clic su __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Additional security configurations (optional but recommended)

By default, Microsoft Entra ID, as configured, will allow any user from your Azure tenant to sign in to your Cloud Temple organization.  
It is possible to restrict access at the __"App Registration"__ level, allowing only a specific list of users or groups to sign in to your Cloud Temple organization.

Follow these steps:

#### Accedere alle impostazioni aggiuntive "App Registration"

##### Opzione 1

Vai sulla scheda "Overview" e fai clic sul nome dell'applicazione (il collegamento situato dopo "Managed application").

<img src={ssoAad_009} />

##### Opzione 2

Passare alle "Applicazioni aziendali" e cercare utilizzando il nome dell'applicazione creata in precedenza.

<img src={ssoAad_010} />

#### Authentication restriction to users assigned to the application

Indicate here the need for user assignment to the application to allow authentication:

<img src={ssoAad_011} />

#### Assegnazione di utenti e gruppi all'applicazione

Solo gli utenti e i gruppi assegnati all'applicazione potranno accedere alla vostra organizzazione Cloud Temple tramite la registrazione dell'applicazione.

<img src={ssoAad_012} />

Infine, dovrete applicare l'assegnazione facendo clic su "Assegna".

<img src={ssoAad_013} />

A partire da ora, gli utenti assegnati all'applicazione potranno accedere alla vostra organizzazione Cloud Temple tramite l'applicazione creata.

## Step 2: Request your organization's SSO (Single Sign-On) configuration

This configuration step is performed at the organization level by the Cloud Temple team.

To proceed, please __submit a support request__ in the console indicating your intention to set up Microsoft Entra ID SSO.

Please include the following information in your support request:
- Name of your Organization
- Name of a contact person, along with their email address and phone number, to finalize the configuration
- Application ID (unique identifier associated with the previously created application)
- Directory ID (corresponds to the Azure AD tenant ID of your Azure environment)
- Secret (secret associated with the previously created application)

Once the configuration is completed on the Console side, the designated contact will be notified.

## Step 3: Finalization of the configuration

On the App Registration home page, in the Overview menu, click on "Add a Redirect URL".

<img src={ssoAad_014} />

Next, go to "Add a platform" and add one of type Web.

<img src={ssoAad_015} />

Enter the "Redirect URL" provided by the Applications Product Team.

<img src={ssoAad_016} />

You should see this result once the "Redirect URL" has been added.

<img src={ssoAad_017} />

The configuration of the "Redirect URL" may take a few minutes to take effect.  
Once all steps are completed, you can authenticate to your Cloud Temple organization via your SSO.

<img src={ssoAad_018} />