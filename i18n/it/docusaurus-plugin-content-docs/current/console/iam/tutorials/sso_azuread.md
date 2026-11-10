---
title: Esempio di federazione dell'identità con Microsoft EntraID
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoEntra_001 from '@site/docs/console/iam/tutorials/images/sso_entra_001.png'
import ssoEntra_002 from '@site/docs/console/iam/tutorials/images/sso_entra_002.png'
import ssoAad_004 from '@site/docs/console/iam/tutorials/images/sso_aad_004.png'
import ssoAad_005 from '@site/docs/console/iam/tutorials/images/sso_aad_005.png'
import ssoAad_006 from '@site/docs/console/iam/tutorials/images/sso_aad_006.png'
import ssoAad_007 from '@site/docs/console/iam/tutorials/images/sso_aad_007.png'
import ssoAad_008 from '@site/docs/console/iam/tutorials/images/sso_aad_008.png'
import ssoAad_009 from '@site/docs/console/iam/tutorials/images/sso_aad_009.png'
import ssoAad_010 from '@site/docs/console/iam/tutorials/images/sso_aad_010.png'
import ssoAad_011 from '@site/docs/console/iam/tutorials/images/sso_aad_011.png'
import ssoAad_012 from '@site/docs/console/iam/tutorials/images/sso_aad_012.png'
import ssoAad_013 from '@site/docs/console/iam/tutorials/images/sso_aad_013.png'
import ssoAad_014 from '@site/docs/console/iam/tutorials/images/sso_aad_014.png'
import ssoAad_015 from '@site/docs/console/iam/tutorials/images/sso_aad_015.png'
import ssoAad_016 from '@site/docs/console/iam/tutorials/images/sso_aad_016.png'
import ssoAad_017 from '@site/docs/console/iam/tutorials/images/sso_aad_017.png'
import ssoAad_018 from '@site/docs/console/iam/tutorials/images/sso_aad_018.png'

Ecco un esempio di configurazione del repository di autenticazione di un'organizzazione Cloud Temple con __Microsoft EntraID__ (Azure Active Directory).

La configurazione del vostro repository Microsoft a livello di organizzazione Cloud Temple semplifica l'autenticazione degli utenti sulla Console. Ciò permette di evitare la moltiplicazione dei fattori di autenticazione e di ridurre la superficie di attacco.

Se gli utenti sono autenticati con il loro account Microsoft, l'autenticazione ai servizi della Console avverrà in modo trasparente.

Di seguito sono riportati i diversi passaggi necessari per completare questa configurazione:

## Passo 1: Configurazione dell'SSO lato Microsoft Azure

### Registrazione di una nuova applicazione Azure (portale Azure)

Per creare l'__app registration__, accedete al portale Microsoft Azure, poi a Microsoft EntraID, __"ADD > App Registration"__.

Nella pagina "Register an application", indicate:

```
- __Name__ : Indicate "__SHIVA__"
- __Supported account types__ : __Accounts in this organizational directory only__ (__<Il vostro Tenant Azure>__ only - Single tenant)
- __Redirect URL__ : Da non configurare in un primo momento. L'URL sarà fornito dal supporto Cloud Temple e andrà aggiunto in questo campo in seguito.
```

<img src={ssoEntra_001} />

Le informazioni __Application (client) ID__ e __Directory (tenant) ID__ sono quelle da fornire nella richiesta di supporto al team Cloud Temple per attivare l'autenticazione Microsoft EntraID a livello della vostra organizzazione.

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

### Configurazioni di sicurezza aggiuntive (opzionali ma raccomandate)

Per impostazione predefinita, Microsoft EntraID così configurato consentirà a qualsiasi utente del vostro tenant Azure di accedere alla vostra organizzazione Cloud Temple.  
È possibile limitare gli accessi a livello di __"App Registration"__ per autorizzare solo un elenco di utenti o gruppi ad accedere alla vostra organizzazione Cloud Temple.

Ecco la procedura da seguire:

#### Accedere alle impostazioni aggiuntive "App Registration"

##### Opzione 1

Andate sulla scheda "Overview" e fate clic sul nome dell'applicazione (il collegamento situato dopo "Managed application").

<img src={ssoAad_009} />

##### Opzione 2

Passare alle "Enterprise applications" e cercare utilizzando il nome dell'applicazione creata in precedenza.

<img src={ssoAad_010} />

#### Limitazione dell'autenticazione agli utenti assegnati all'applicazione

Indicate qui che l'utente deve essere assegnato all'applicazione per poter essere autenticato:

<img src={ssoAad_011} />

#### Assegnazione di utenti e gruppi all'applicazione

Solo gli utenti e i gruppi assegnati all'applicazione potranno accedere alla vostra organizzazione Cloud Temple tramite la registrazione dell'applicazione.

<img src={ssoAad_012} />

Infine, dovrete applicare l'assegnazione facendo clic su "Assign".

<img src={ssoAad_013} />

A partire da ora, gli utenti assegnati all'applicazione potranno accedere alla vostra organizzazione Cloud Temple tramite l'applicazione creata.

## Passo 2: Richiedere la configurazione dell'SSO (Single Sign-On) della vostra organizzazione

Questa parte della configurazione viene eseguita a livello di organizzazione dal team Cloud Temple.

Per farlo, inviate __una richiesta di assistenza__ dalla console indicando che desiderate configurare un SSO Microsoft EntraID.

Fornite le seguenti informazioni nella richiesta di assistenza:

- Il nome della vostra Organizzazione
- Il nome di un referente, con la sua email e il suo numero di telefono, per finalizzare la configurazione
- Application ID (identificativo univoco associato all'applicazione creata in precedenza)
- Directory ID (corrisponde all'identificativo Azure AD del tenant Azure)
- Secret (segreto associato all'applicazione creata in precedenza)

Non appena la configurazione sarà stata eseguita lato Console, il referente indicato verrà informato.

## Passo 3: Finalizzazione della configurazione

Nella pagina iniziale dell'App Registration, nel menu Overview, fate clic su "Add a Redirect URL".

<img src={ssoAad_014} />

Quindi andate su "Add a platform" e aggiungetene una di tipo Web.

<img src={ssoAad_015} />

È sufficiente inserire il "Redirect URL" fornito dal Team Prodotto Applications.

<img src={ssoAad_016} />

Una volta aggiunto il "Redirect URL", dovreste ottenere questo risultato.

<img src={ssoAad_017} />

La configurazione del "Redirect URL" può richiedere qualche minuto prima di diventare effettiva.  
Una volta completati tutti i passaggi, potete autenticarvi alla vostra organizzazione Cloud Temple tramite il vostro SSO.

<img src={ssoAad_018} />
