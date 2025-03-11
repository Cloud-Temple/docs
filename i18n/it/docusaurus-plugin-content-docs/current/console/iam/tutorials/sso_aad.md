---
title: Esempio di federazione della identità con Microsoft EntraID
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

La configurazione del tuo repository Microsoft a livello di un'organizzazione Cloud Temple facilita l'autenticazione dei tuoi utenti sulla console Shiva. Ciò consente di evitare la moltiplicazione dei fattori di autenticazione e di ridurre la superficie di attacco.

Se i tuoi utenti sono autenticati con il loro account Microsoft, l'autenticazione ai servizi della console Shiva sarà trasparente.

Ecco i diversi passaggi per realizzare questa configurazione:


## Passaggio 1: Configurazione del SSO lato Microsoft Azure

### Registrazione di una nuova applicazione Azure (portale Azure)

Per la creazione della __registrazione app__, è necessario accedere al portale Microsoft Azure, poi in Microsoft EntraID, __"ADD > App Registration"__

Nella pagina "Register an application", indicare:
```
- __Name__ : Indicare "__SHIVA__"
- __Supported account types__ :  __Accounts in this organizational directory only__ (__<Il tuo Tenant Azure>__ only - Single tenant)
- __Redirect URL__ : Non parametrare inizialmente. L'URL sarà fornita dal supporto Cloud Temple e dovrà essere aggiunta in questo campo in seguito.
```

<img src={ssoEntra_001} />

Le informazioni **Application (client) ID** e **Directory (tenant) ID** sono le informazioni utili da fornire nella richiesta di supporto al team Cloud Temple per attivare l'autenticazione Microsoft EntraID a livello della tua organizzazione.

<img src={ssoEntra_002} />

### Definizione di un secret
Nella scheda "Certificates & secrets", creare un nuovo secret.

*Nota: la data di scadenza del secret non può superare i 24 mesi, inclusa una data di scadenza personalizzata.*

<img src={ssoAad_004} />

Il secret generato dovrà essere fornito nella richiesta di supporto:

<img src={ssoAad_005} />


### Definizione del token EntraID

Il token EntraID è necessario per configurare l'autenticazione.

Nel menu __"Token Configuration"__, cliccare su __"Add optional claim"__. Dovrete selezionare "ID" come tipo di token e spuntare "email".

<img src={ssoAad_006} />

L'interfaccia Azure ti chiederà se desideri aggiungere un permesso che ti consentirà di leggere l'email di un utente (Microsoft Graph email), spunta la casella e conferma.

<img src={ssoAad_007} />

Successivamente, vai su "API permissions" e clicca su __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Configurazioni di sicurezza aggiuntive (opzionale ma consigliato)

Per impostazione predefinita, Microsoft EntraID così configurato darà a qualsiasi utente del tuo tenant Azure la possibilità di accedere alla tua organizzazione Cloud Temple.
È possibile restringere a livello di __"App Registration"__ gli accessi per consentire solo a una lista di utenti o gruppi di accedere alla tua organizzazione Cloud Temple.

Ecco la procedura da seguire;

#### Accedere ai parametri aggiuntivi "App Registration"
##### Opzione 1
Vai sulla scheda "Overview" e clicca sul nome dell'applicazione (il link situato dopo "Managed application").

<img src={ssoAad_009} />

##### Opzione 2
Vai su "Enterprise applications" e cerca utilizzando il nome dell'applicazione creata precedentemente.

<img src={ssoAad_010} />

#### Restrizione dell'autenticazione agli utenti assegnati all'applicazione

Indicare qui la necessità di un'assegnazione dell'utente all'applicazione per autorizzare la sua autenticazione:

<img src={ssoAad_011} />

#### Assegnazione degli utenti e gruppi all'applicazione
Solo i gruppi e gli utenti assegnati all'applicazione potranno accedere alla tua organizzazione Cloud Temple tramite la registrazione dell'app.

<img src={ssoAad_012} />

Infine, non ti resta che applicare l'assegnazione cliccando su "Assign".

<img src={ssoAad_013} />

Ora gli utenti assegnati all'applicazione potranno accedere alla tua organizzazione Cloud Temple tramite l'applicazione creata.

## Passaggio 2: Richiedere la configurazione del SSO (Single Sign-On) della tua organizzazione

Questa parte della configurazione viene effettuata a livello di organizzazione dal team Cloud Temple.

Per fare ciò, fai __una richiesta di assistenza__ alla console indicando il tuo desiderio di configurare un SSO Microsoft EntraID.

Fornisci le seguenti informazioni nella richiesta di assistenza:

    Il nome della tua organizzazione
    Il nome di un contatto con il suo email e numero di telefono per finalizzare la configurazione
    Application ID (identificativo unico associato all'applicazione creata in precedenza)
    Directory ID (corrisponde all'identificativo Azure AD del tenant Azure)
    Secret (Secret associato all'applicazione creata in precedenza)

Non appena la configurazione sarà completata lato console Shiva, il contatto indicato sarà informato.

## Passaggio 3: Finalizzazione della configurazione

Nella pagina principale della registrazione dell'app, nel menu overview, cliccare su "Add a Redirect URL".

<img src={ssoAad_014} />

Successivamente, vai su "Add a platform" e aggiungi una di tipo Web.

<img src={ssoAad_015} />

Ti basta inserire la "Redirect URL" fornita dal Team di Prodotto Applicazioni.

<img src={ssoAad_016} />

Dovresti ottenere questo risultato una volta aggiunta la "Redirect URL".

<img src={ssoAad_017} />

La configurazione della "Redirect URL" può richiedere alcuni minuti per essere effettiva.
Una volta completati tutti i passaggi, potrai autenticarti alla tua organizzazione Cloud Temple tramite il tuo SSO.

<img src={ssoAad_018} />