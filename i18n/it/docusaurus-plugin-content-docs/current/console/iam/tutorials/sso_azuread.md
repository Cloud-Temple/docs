

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

La configurazione del tuo repository Microsoft a livello di organizzazione Cloud Temple semplifica l'autenticazione degli utenti sulla console Shiva. Questo permette di evitare la moltiplicazione dei fattori di autenticazione e di ridurre la superficie d'attacco.

Se gli utenti sono autenticati con il loro account Microsoft, l'autenticazione ai servizi della console Shiva sarà trasparente.

Ecco i diversi passaggi per realizzare questa configurazione :



## Fase 1: Configurazione del SSO sul lato Microsoft Azure



### Registrazione di una nuova applicazione Azure (portale Azure)

Per la creazione della __registrazione dell'app__, è necessario recarsi sul portale Microsoft Azure, quindi in Microsoft EntraID, __"Aggiungi > Registrazione applicazione"__.

Nella pagina "Register an application", indicare quanto segue:

```
- __Nome__ : Inserire "__SHIVA__"
- __Tipi di account supportati__ : __Account solo nel proprio dominio organizzativo__ (__<Il tuo tenant Azure>__ solo - single tenant)
- __URL di reindirizzamento__ : Non configurare inizialmente. L'URL verrà fornito dal supporto Cloud Temple e dovrà essere aggiunto in questo campo in un secondo momento.
```

<img src={ssoEntra_001} />

Le informazioni __Application (client) ID__ e __Directory (tenant) ID__ sono le informazioni utili da fornire nella richiesta di supporto all'équipe Cloud Temple per attivare l'autenticazione Microsoft EntraID a livello della tua organizzazione.

<img src={ssoEntra_002} />



### Definizione di un segreto

Nella scheda "Certificates & secrets", creare un nuovo segreto.

*Nota: la data di scadenza del segreto non può essere superiore a 24 mesi, incluso con una data di scadenza personalizzata.*

<img src={ssoAad_004} />

Il segreto generato dovrà essere fornito nella richiesta di supporto:

<img src={ssoAad_005} />



### Definizione del token EntraID

Il token EntraID è necessario per la configurazione dell'autenticazione.

Nel menu __"Configurazione del token"__, fare clic su __"Aggiungi un'asserzione opzionale"__. Dovrai selezionare "ID" come tipo di token e spuntare "email".

<img src={ssoAad_006} />

L'interfaccia Azure ti chiederà se desideri aggiungere un'autorizzazione che ti permetterà di leggere l'email di un utente (Microsoft Graph email), seleziona la casella e conferma.

<img src={ssoAad_007} />

Successivamente, vai su "API permissions" e fai clic su __"Concedi il consenso dell'amministratore per Cloud Temple"__.

<img src={ssoAad_008} />



### Configurazioni di sicurezza aggiuntive (opzionale ma consigliato)

Di default, Microsoft EntraID come configurato permetterà a qualsiasi utente del tenant Azure di accedere alla vostra organizzazione Cloud Temple.
È possibile limitare a livello di __"App Registration"__ gli accessi per autorizzare solo un elenco di utenti o gruppi a connettersi alla vostra organizzazione Cloud Temple.

Ecco la procedura da seguire;



#### Accedere ai parametri aggiuntivi "App Registration"



##### Opzione 1

Vai alla scheda "Overview" e fai clic sul nome dell'applicazione (il collegamento situato dopo "Managed application").

<img src={ssoAad_009} />



##### Opzione 2

Andare alle "Applicazioni aziendali" e cercare utilizzando il nome dell'applicazione creata in precedenza.

<img src={ssoAad_010} />



#### Limitazione dell'autenticazione agli utenti assegnati all'applicazione

Indicare qui la necessità di un assegnamento dell'utente all'applicazione per autorizzare l'autenticazione:

<img src={ssoAad_011} />



#### Assegnazione degli utenti e dei gruppi all'applicazione

Solo i gruppi e gli utenti assegnati all'applicazione potranno accedere alla vostra organizzazione Cloud Temple tramite la registrazione dell'app.

<img src={ssoAad_012} />

Infine, dovrete applicare l'assegnazione facendo clic su "Assign".

<img src={ssoAad_013} />

D'ora in poi, gli utenti assegnati all'applicazione potranno accedere alla vostra organizzazione Cloud Temple tramite l'applicazione creata.



## Fase 2: Richiedere la configurazione del SSO (Single Sign-On) della vostra organizzazione

Questa parte della configurazione viene effettuata a livello di organizzazione dall'équipe Cloud temple.

Per farlo, inviate __una richiesta di assistenza__ nella console indicando il vostro desiderio di configurare un SSO Microsoft EntraID.

Fornite le seguenti informazioni nella richiesta di assistenza:
    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua mail e numero di telefono per completare la configurazione
    Application ID (identificativo unico associato all'applicazione creata in precedenza)
    Directory ID (corrisponde all'identificativo Azure AD del tenant Azure)
    Secret (Secret associato all'applicazione creata in precedenza)

Una volta che la configurazione è stata completata sul lato console Shiva, il contatto indicato verrà informato.



## Fase 3: Configurazione finale

Sulla pagina iniziale di App Registration, nel menu Overview, fare clic su "Aggiungi un URL di reindirizzamento".

<img src={ssoAad_014} />

Passare quindi a "Aggiungi una piattaforma" e aggiungerne una di tipo Web.

<img src={ssoAad_015} />

Basta che si inserisca l'URL di reindirizzamento fornito dal Team Produzione Applicazioni.

<img src={ssoAad_016} />

Dovresti ottenere questo risultato una volta aggiunto l'URL di reindirizzamento.

<img src={ssoAad_017} />

La configurazione dell'URL di reindirizzamento potrebbe richiedere alcuni minuti per diventare effettiva.
Una volta completate tutte le fasi, è possibile autenticarsi nell'organizzazione Cloud Temple tramite il proprio SSO.

<img src={ssoAad_018} />