---
title: Esempio di federazione delle identità con Microsoft EntraID (Azure AD)
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

Ecco un esempio di configurazione del repository di autenticazione di un'organizzazione Cloud Temple con __Microsoft EntraID__.

La configurazione del vostro repository Microsoft a livello di un'organizzazione Cloud Temple facilita l'autenticazione dei vostri utenti sulla Console. Ciò consente di evitare la moltiplicazione dei fattori di autenticazione e di ridurre la superficie di attacco. Se i vostri utenti sono già autenticati sul loro account Microsoft, l'autenticazione ai servizi della Console sarà trasparente.

:::info[Azure AD e Microsoft EntraID]
Microsoft EntraID è il nuovo nome di Azure Active Directory (Azure AD) dal 2023. Si tratta dello stesso prodotto: questo tutorial si applica indifferentemente a entrambe le denominazioni.
:::

## Scegliere il protocollo

La federazione con EntraID può essere realizzata con uno o l'altro dei due protocolli standard. Entrambi offrono un livello di sicurezza equivalente; si differenziano principalmente per ciò che dovete trasmetterci e per ciò che sarà da mantenere nel tempo.

| | OpenID Connect | SAML 2.0 |
|---|---|---|
| Ciò che ci trasmettete | Due identificatori e un secret | Un URL di metadati pubblico |
| Secret scambiato | Sì, il secret client | Nessuno |
| Da mantenere nel tempo | Il secret client (24 mesi massimo) | Il certificato di firma (3 anni per impostazione predefinita) |

__In assenza di vincoli particolari, raccomandiamo OpenID Connect__: è il protocollo che distribuiamo per impostazione predefinita. Scegliete SAML se la vostra politica interna lo impone, o se la vostra directory è collegata a un concentratore di federazione che supporta solo questo protocollo.

Indicate il protocollo scelto fin dall'apertura della vostra richiesta di assistenza.

## Le informazioni scambiate

L'implementazione si basa su uno scambio nei due sensi. Eccone il dettaglio fin da subito, per consentirvi di preparare tutto in un'unica volta.

### Ciò che dovete trasmetterci — con OpenID Connect

| Informazione | Nome nel portale Azure | A cosa serve |
|---|---|---|
| __Application (client) ID__ | *Application (client) ID* | Identifica l'applicazione presso EntraID |
| __Directory (tenant) ID__ | *Directory (tenant) ID* | Determina gli endpoint OpenID Connect della vostra directory |
| __Secret client__ | *Client secret* → colonna __Value__ | Autentica la Console presso EntraID |

I due identificatori figurano nella scheda __"Overview"__ della vostra registrazione applicativa; il secret viene creato nella scheda __"Certificates & secrets"__.

### Ciò che dovete trasmetterci — con SAML 2.0

Nel caso corrente è sufficiente una sola informazione:

| Informazione | Nome nel portale Azure | A cosa serve |
|---|---|---|
| __URL dei metadati di federazione__ | *App Federation Metadata Url* | Ne ricaviamo l'identificatore della vostra directory, i suoi endpoint e il suo certificato di firma |

Si presenta nella forma seguente:

```
https://login.microsoftonline.com/<directory-tenant-id>/federationmetadata/2007-06/federationmetadata.xml?appid=<application-id>
```

La trovate in __"Enterprise applications"__ → la vostra applicazione → __"Single sign-on"__, sezione *SAML Certificates*. È pubblica e non contiene alcun secret: può figurare nel corpo della vostra richiesta.

:::tip[Perché questo URL anziché un elenco di parametri]
Riunisce in un unico valore l'insieme dei parametri della vostra directory e semplifica il monitoraggio del rinnovo del vostro certificato di firma. Se questo URL non è raggiungibile da Internet, trasmettete invece l'*Identity provider entity ID*, la *Single Sign-On service URL*, la *Single Logout service URL* e il certificato di firma in formato __Certificate (Base64)__.
:::

:::warning[Non trasmettete mai il secret nel corpo di una richiesta]
Il valore del secret client è una credenziale di autenticazione. Non inseritelo nel corpo di una richiesta di assistenza, né in un commento, né in un allegato non cifrato: vi resterebbe consultabile in modo duraturo.

Indicate nella vostra richiesta che disponete del secret, e trasmettetelo tramite il canale sicuro che il vostro referente Cloud Temple vi indicherà. I due identificatori (Application ID e Directory ID) non sono sensibili e possono invece figurare nella richiesta.
:::

### Ciò che Cloud Temple vi trasmette

Valori specifici della vostra organizzazione, da dichiarare nella vostra applicazione EntraID:

| Il nostro termine | Termine Microsoft | Protocollo |
|---|---|---|
| URL di reindirizzamento | *Redirect URL* | OpenID Connect |
| URL di reindirizzamento | *Reply URL (Assertion Consumer Service URL)* | SAML 2.0 |
| Identificatore del fornitore di servizio | *Identifier (Entity ID)* | SAML 2.0 |

:::tip[Richiedeteli all'apertura della vostra domanda]
Questi valori dipendono dalla vostra organizzazione e non possono essere indovinati. Richiedendoli all'apertura della vostra richiesta di assistenza, potrete realizzare tutta la configurazione Azure in un'unica volta, senza doverci ritornare.
:::

## Fase 1: Configurazione dell'SSO lato Microsoft EntraID

Seguite la sezione corrispondente al protocollo scelto, poi la sezione «Configurazioni di sicurezza supplementari», comune a entrambi.

### Via OpenID Connect

#### Registrazione di una nuova applicazione Azure (portale Azure)

Per la creazione dell'__app registration__, recatevi sul portale Microsoft Azure, poi in Microsoft EntraID, __"ADD > App Registration"__.

Nella pagina "Register an application", indicate quanto segue:

```
- Name: indicare "SHIVA"
- Supported account types: Accounts in this organizational directory only (<Il vostro Tenant Azure> only - Single tenant)
- Redirect URL: indicare l'URL fornita da Cloud Temple. Se non ne disponete ancora, lasciate il campo vuoto e fate riferimento alla fase 3.
```

<img src={ssoEntra_001} />

Le informazioni __Application (client) ID__ e __Directory (tenant) ID__ sono visualizzate nella scheda "Overview". Annotatele: sono due delle tre informazioni da fornire nella vostra richiesta di assistenza.

<img src={ssoEntra_002} />

#### Definizione di un secret

Nella scheda "Certificates & secrets", create un nuovo secret.

<img src={ssoAad_004} />

:::warning[Copiate il valore immediatamente]
Il valore del secret viene visualizzato una sola volta, subito dopo la sua creazione. Copiate il contenuto della colonna __"Value"__, e non quello della colonna __"Secret ID"__. Se perdete questo valore, dovrete generare un nuovo secret.
:::

<img src={ssoAad_005} />

:::caution[Validità limitata a 24 mesi]
La data di scadenza del secret non può essere superiore a 24 mesi, anche con una data di scadenza personalizzata. __Annotate fin da ora questa data__: alla scadenza, la connessione SSO cesserà di funzionare per tutti i vostri utenti. Vedere la sezione [Mantenimento della federazione nel tempo](#mantenimento-della-federazione-nel-tempo).
:::

#### Autorizzazione delle informazioni utilizzate dalla Console

La Console identifica i vostri utenti a partire dalle informazioni trasportate dal token di identità. È necessaria una sola azione da parte vostra: __esporre l'indirizzo e-mail__.

Nel menu __"Token Configuration"__, cliccate su __"Add optional claim"__. Selezionate "ID" come tipo di token e spuntate "email".

<img src={ssoAad_006} />

L'interfaccia Azure vi chiederà se desiderate aggiungere un'autorizzazione che consenta di leggere l'e-mail di un utente (Microsoft Graph email). Spuntate la casella e confermate.

<img src={ssoAad_007} />

Recatevi poi su "API permissions" e cliccate su __"Grant admin consent for &lt;la vostra organizzazione&gt;"__.

<img src={ssoAad_008} />

A titolo informativo, ecco l'insieme delle informazioni consumate dalla Console:

| Informazione | Utilizzo | Azione da parte vostra |
|---|---|---|
| `email` | Indirizzo di connessione dell'utente | __Sì__ — da dichiarare come claim opzionale (sopra) |
| `oid` | Collegamento stabile tra l'account Console e l'identità della vostra directory, anche se l'indirizzo e-mail cambia | Nessuna — emesso nativamente da EntraID |
| `given_name`, `family_name` | Nome e cognome visualizzati nella Console | Nessuna — inclusi nell'ambito `profile` |

### Via SAML 2.0

#### Creazione dell'applicazione aziendale

In __Microsoft EntraID__, recatevi in __"Enterprise applications"__, poi __"New application"__. Scegliete __"Create your own application"__, assegnatele un nome e selezionate *Integrate any other application you don't find in the gallery (Non-gallery)*. Confermate con __"Create"__.

#### Configurazione dell'autenticazione unica

Nella vostra applicazione, aprite __"Single sign-on"__ e scegliete __"SAML"__. In __"Basic SAML Configuration"__, cliccate su __"Edit"__ e inserite i valori forniti da Cloud Temple:

- __Identifier (Entity ID)__;
- __Reply URL (Assertion Consumer Service URL)__.

Salvate.

#### Attributi e attestazioni

EntraID emette per impostazione predefinita le attestazioni attese dalla Console. Verificatene la presenza in __"Attributes & Claims"__:

| Attestazione | Utilizzo | Azione da parte vostra |
|---|---|---|
| `…/claims/emailaddress` | Indirizzo di connessione dell'utente | Nessuna — origine `user.mail` |
| `http://schemas.microsoft.com/identity/claims/objectidentifier` | Collegamento stabile tra l'account Console e l'identità della vostra directory | Nessuna |
| `…/claims/givenname`, `…/claims/surname` | Nome e cognome visualizzati nella Console | Nessuna |

:::warning[Identificatore di nome (NameID): il punto più spesso trascurato]
In __"Attributes & Claims"__ → __"Unique User Identifier (Name ID)"__, impostate l'origine su __user.objectid__ e il formato su __Persistent__.

Per impostazione predefinita, EntraID emette l'indirizzo e-mail come NameID. Se un utente cambia indirizzo, la Console lo tratterebbe come una persona diversa e perderebbe i suoi diritti. L'identificatore di oggetto, invece, non cambia mai.
:::

### Configurazioni di sicurezza supplementari (opzionale ma consigliato)

Per impostazione predefinita, Microsoft EntraID così configurato consentirà a qualsiasi utente del vostro tenant Azure di connettersi alla vostra organizzazione Cloud Temple. È possibile limitare a livello di __"App Registration"__ gli accessi per autorizzare solo un elenco di utenti o gruppi.

Ecco la procedura da seguire.

#### Accedere ai parametri supplementari "App Registration"

##### Opzione 1

Andate sulla scheda "Overview" e cliccate sul nome dell'applicazione (il link situato dopo "Managed application").

<img src={ssoAad_009} />

##### Opzione 2

Recatevi nelle "Enterprise applications" e cercate utilizzando il nome dell'applicazione creata in precedenza.

<img src={ssoAad_010} />

#### Limitazione dell'autenticazione agli utenti assegnati all'applicazione

Indicate qui la necessità di un'assegnazione dell'utente all'applicazione per autorizzarne l'autenticazione:

<img src={ssoAad_011} />

#### Assegnazione degli utenti e dei gruppi all'applicazione

Solo i gruppi e gli utenti assegnati all'applicazione potranno connettersi alla vostra organizzazione Cloud Temple tramite l'app registration.

<img src={ssoAad_012} />

Infine, applicate l'assegnazione cliccando su "Assign".

<img src={ssoAad_013} />

Da questo momento gli utenti assegnati all'applicazione potranno connettersi alla vostra organizzazione Cloud Temple tramite l'applicazione creata.

## Fase 2: Richiedere la configurazione dell'SSO della vostra organizzazione

Questa parte della configurazione viene effettuata a livello dell'organizzazione dal team Cloud Temple.

A tal fine, presentate __una richiesta di assistenza__ nella Console indicando il vostro desiderio di configurare una federazione Microsoft EntraID, precisando:

- il nome della vostra organizzazione;
- __il protocollo scelto__: OpenID Connect o SAML 2.0;
- il nome di un referente, con la sua e-mail e il suo numero di telefono, per finalizzare la configurazione;
- __con OpenID Connect__: l'__Application (client) ID__ e il __Directory (tenant) ID__ annotati alla fase 1;
- __con SAML 2.0__: l'__URL dei metadati di federazione__ della vostra applicazione.

Con OpenID Connect, trasmettete il __secret client__ tramite il canale sicuro indicato dal vostro referente, e non nel corpo della richiesta. Con SAML, non viene scambiato alcun secret.

Non appena la configurazione sarà realizzata lato Console, il referente indicato ne sarà informato.

## Fase 3: Dichiarazione della "Redirect URL" (OpenID Connect)

Se non avete indicato la "Redirect URL" al momento della creazione dell'applicazione, aggiungetela ora.

Con SAML 2.0, gli URL equivalenti sono già stati dichiarati in __"Basic SAML Configuration"__ alla fase 1: passate direttamente alla fase 4.

Nella pagina iniziale dell'App Registration, nel menu "Overview", cliccate su "Add a Redirect URL".

<img src={ssoAad_014} />

Dirigetevi poi verso "Add a platform" e aggiungetene una di tipo Web.

<img src={ssoAad_015} />

Indicate la "Redirect URL" fornita da Cloud Temple.

<img src={ssoAad_016} />

Dovreste ottenere questo risultato una volta aggiunta la "Redirect URL".

<img src={ssoAad_017} />

La configurazione della "Redirect URL" può richiedere qualche minuto per diventare effettiva.

## Fase 4: Verifica

Una volta realizzate tutte le fasi, potete autenticarvi alla vostra organizzazione Cloud Temple tramite il vostro SSO.

<img src={ssoAad_018} />

:::info[Diritti dei nuovi utenti]
La federazione delle identità gestisce __l'autenticazione__, non le __autorizzazioni__. Un utente che si connette per la prima volta tramite l'SSO non dispone di alcun diritto finché un proprietario dell'organizzazione non gliene ha attribuiti dalla Console.
:::

## Mantenimento della federazione nel tempo

È il principale punto di vigilanza: qualunque sia il protocollo, un elemento scade, e la sua scadenza interrompe l'SSO __per tutti i vostri utenti__.

### Con OpenID Connect: il secret client

Il secret client scade al più tardi 24 mesi dopo la sua creazione. Anticipatene il rinnovo:

1. in "Certificates & secrets", create un __nuovo__ secret senza eliminare il precedente;
2. trasmettetene il valore a Cloud Temple tramite il canale sicuro, aprendo una richiesta di assistenza;
3. una volta confermato il passaggio dai nostri team, eliminate il vecchio secret dal portale Azure.

Conservare i due secret durante il passaggio evita qualsiasi interruzione di servizio.

### Con SAML 2.0: il certificato di firma

Il certificato di firma emesso da EntraID ha una durata di vita limitata, di tre anni per impostazione predefinita.

__Avvisateci prima di qualsiasi rotazione di certificato__, tramite una richiesta di assistenza, rispettando il periodo di sovrapposizione proposto da Microsoft. Se ci avete trasmesso un certificato sotto forma di file anziché l'URL dei metadati, allegate il nuovo certificato alla vostra richiesta.

## Buone pratiche

- __Gestite l'accesso per gruppi__ anziché per utenti: l'arrivo o la partenza di un collaboratore viene allora trattato nella vostra directory, senza intervento sulla Console.
- __Attivate l'autenticazione a più fattori__ sull'applicazione nelle vostre politiche di accesso condizionale EntraID: si applicherà allora all'accesso alla Console.
- __Programmate un avviso__ all'avvicinarsi della data di scadenza del secret client o del certificato di firma, a seconda del protocollo scelto.
- __Conservate almeno un account proprietario locale__ sulla vostra organizzazione Cloud Temple, al di fuori della federazione, per mantenere un accesso in caso di indisponibilità della vostra directory.

## Risoluzione dei problemi

| Sintomo | Protocollo | Causa probabile |
|---|---|---|
| `AADSTS50011`: l'URL di reindirizzamento non corrisponde | Entrambi | L'URL dichiarato in Azure differisce da quello fornito da Cloud Temple. Verificatelo carattere per carattere, compresa l'assenza di `/` finale. |
| `AADSTS700016`: applicazione non trovata | SAML 2.0 | L'*Entity ID* dichiarato non corrisponde a quello fornito da Cloud Temple. |
| `AADSTS7000215`: secret non valido | OpenID Connect | Il secret è scaduto, oppure il valore trasmesso era il "Secret ID" anziché il "Value". |
| `AADSTS50105`: utente non assegnato | Entrambi | L'opzione "Assignment required" è attiva e l'utente non è assegnato all'applicazione. |
| Il pulsante di connessione non appare nella pagina | Entrambi | La configurazione non è ancora attiva lato Cloud Temple. |
| L'utente è autenticato ma la Console rifiuta l'accesso | Entrambi | L'indirizzo e-mail è assente dal token, oppure nessun diritto è stato attribuito all'utente. |
| L'utente appare come un nuovo account a ogni connessione | SAML 2.0 | Il NameID non è impostato su `user.objectid`. |
| Errore di firma all'arrivo sulla Console | SAML 2.0 | Il certificato di firma è stato rinnovato lato Azure senza che ne fossimo informati. |

## Supporto

Per qualsiasi domanda su questa procedura, aprite una richiesta di assistenza dalla vostra Console. Precisate il nome della vostra organizzazione nonché l'orario di un tentativo di connessione fallito: ciò consente di ritrovare la traccia corrispondente.
