---
title: Esempio di federazione di identità con Microsoft EntraID
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

La configurazione del repository Microsoft a livello di un'organizzazione Cloud Temple facilita l'autenticazione dei vostri utenti sulla console Shiva. Questo aiuta a evitare la moltiplicazione dei fattori di autenticazione e riduce la superficie di attacco.

Se i vostri utenti sono autenticati al loro account Microsoft, l'autenticazione ai servizi della console Shiva sarà trasparente.

Ecco i diversi passaggi per realizzare questa configurazione:

## Fase 1: Configurazione SSO lato Microsoft Azure

### Registrazione di una nuova applicazione Azure (portale Azure)

Per la creazione dell'__app registration__, è necessario accedere al portale Microsoft Azure, poi in Microsoft EntraID, __"ADD > App Registration"__

Nella pagina "Register an application", si prega di indicare:

```
- __Name__: Indicare "__SHIVA__"
- __Supported account types__: __Accounts in this organizational directory only__ (__<Il vostro Tenant Azure>__ only - Single tenant)
- __Redirect URL__: Da non configurare inizialmente. L'URL sarà fornito dal supporto Cloud Temple e sarà da aggiungere in questo campo successivamente.
```

<img src={ssoEntra_001} />

Le informazioni __Application (client) ID__ e __Directory (tenant) ID__ sono utili da fornire nella richiesta di supporto al team Cloud Temple per attivare l'autenticazione Microsoft EntraID a livello della vostra organizzazione.

<img src={ssoEntra_002} />

### Definizione di un segreto

Nella scheda "Certificates & secrets", create un nuovo segreto.

*Nota: la data di scadenza del segreto non può essere superiore a 24 mesi, anche con una data di scadenza personalizzata.*

<img src={ssoAad_004} />

Il segreto generato dovrà essere fornito nella richiesta di supporto:

<img src={ssoAad_005} />

### Definizione del token EntraID

Il token EntraID è necessario per la configurazione dell'autenticazione.

Nel menu __"Token Configuration"__, cliccate su __"Add optional claim"__. Dovrete selezionare "ID" come tipo di token e spuntare "email".

<img src={ssoAad_006} />

L'interfaccia Azure vi chiederà se desiderate aggiungere un permesso che vi permetterà di leggere l'email di un utente (Microsoft Graph email), spuntate la casella e validate.

<img src={ssoAad_007} />

Successivamente, andate su "API permissions" e cliccate su __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Configurazioni di sicurezza aggiuntive (opzionali ma raccomandate)

Di default, Microsoft EntraID così come configurato darà a qualsiasi utente del vostro tenant Azure la possibilità di connettersi alla vostra organizzazione Cloud Temple.
È possibile limitare l'accesso a livello di __"App Registration"__ per autorizzare solo una lista di utenti o gruppi a connettersi alla vostra organizzazione Cloud Temple.

Ecco la procedura da seguire:

#### Accedere alle impostazioni aggiuntive di "App Registration"

##### Opzione 1

Andate sulla scheda "Overview" e cliccate sul nome dell'applicazione (il link situato accanto a "Managed application").

<img src={ssoAad_009} />

##### Opzione 2

Navigate verso "Enterprise applications" e cercate utilizzando il nome dell'applicazione creata in precedenza.

<img src={ssoAad_010} />

#### Limitazione dell'autenticazione agli utenti assegnati all'applicazione

Indicate qui la necessità di un'assegnazione dell'utente all'applicazione per autorizzare la sua autenticazione:

<img src={ssoAad_011} />

#### Assegnazione di utenti e gruppi all'applicazione

Solo i gruppi e gli utenti assegnati all'applicazione potranno connettersi alla vostra organizzazione Cloud Temple tramite l'app registration.

<img src={ssoAad_012} />

Infine, dovrete solo applicare l'assegnazione cliccando su "Assign".

<img src={ssoAad_013} />

Ora gli utenti assegnati all'applicazione potranno connettersi alla vostra organizzazione Cloud Temple tramite l'applicazione creata.

## Fase 2: Richiedere la configurazione SSO (Single Sign-On) per la vostra organizzazione

Questa parte della configurazione viene effettuata a livello dell'organizzazione dal team Cloud Temple.

Per fare ciò, effettuate una __richiesta di assistenza__ nella console indicando il vostro desiderio di configurare Microsoft EntraID SSO.

Si prega di fornire le seguenti informazioni nella richiesta di assistenza:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua email e numero di telefono per finalizzare la configurazione
    Application ID (identificativo unico associato all'applicazione creata in precedenza)
    Directory ID (corrisponde all'ID Azure AD del tenant Azure)
    Secret (Segreto associato all'applicazione creata in precedenza)

Non appena la configurazione sarà completata lato console Shiva, il contatto indicato sarà informato.

## Fase 3: Finalizzazione della configurazione

Nella pagina iniziale dell'App Registration, nel menu overview, cliccate su "Add a Redirect URL".

<img src={ssoAad_014} />

Successivamente, navigate verso "Add a platform" e aggiungete una di tipo Web.

<img src={ssoAad_015} />

Inserite semplicemente la "Redirect URL" fornita dal Team Applicazioni Prodotto.

<img src={ssoAad_016} />

Dovreste ottenere questo risultato una volta aggiunta la "Redirect URL".

<img src={ssoAad_017} />

La configurazione della "Redirect URL" può richiedere alcuni minuti per diventare effettiva.
Una volta completati tutti i passaggi, potrete autenticarvi alla vostra organizzazione Cloud Temple tramite il vostro SSO.

<img src={ssoAad_018} />
