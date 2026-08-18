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

:::info[Protocollo utilizzato]
La federazione con EntraID viene realizzata tramite __OpenID Connect (OIDC)__. Non è necessaria alcuna configurazione SAML da parte vostra.
:::

## Le informazioni scambiate

L'implementazione si basa su uno scambio nei due sensi. Eccone il dettaglio fin da subito, per consentirvi di preparare tutto in un'unica volta.

### Ciò che dovete trasmetterci

| Informazione | Nome nel portale Azure | A cosa serve |
|---|---|---|
| __Application (client) ID__ | *Application (client) ID* | Identifica l'applicazione presso EntraID |
| __Directory (tenant) ID__ | *Directory (tenant) ID* | Determina gli endpoint OpenID Connect della vostra directory |
| __Secret client__ | *Client secret* → colonna __Value__ | Autentica la Console presso EntraID |

I due identificatori figurano nella scheda __"Overview"__ della vostra registrazione applicativa; il secret viene creato nella scheda __"Certificates & secrets"__.

:::warning[Non trasmettete mai il secret nel corpo di una richiesta]
Il valore del secret client è una credenziale di autenticazione. Non inseritelo nel corpo di una richiesta di assistenza, né in un commento, né in un allegato non cifrato: vi resterebbe consultabile in modo duraturo.

Indicate nella vostra richiesta che disponete del secret, e trasmettetelo tramite il canale sicuro che il vostro referente Cloud Temple vi indicherà. I due identificatori (Application ID e Directory ID) non sono sensibili e possono invece figurare nella richiesta.
:::

### Ciò che Cloud Temple vi trasmette

La __"Redirect URL"__, specifica della vostra organizzazione. Va dichiarata nella vostra registrazione applicativa EntraID (fase 3).

:::tip[Richiedetela all'apertura della vostra domanda]
Questa URL dipende dalla vostra organizzazione e non può essere indovinata. Richiedendola all'apertura della vostra richiesta di assistenza, potrete realizzare tutta la configurazione Azure in un'unica volta, senza doverci ritornare.
:::

## Fase 1: Configurazione dell'SSO lato Microsoft EntraID

### Registrazione di una nuova applicazione Azure (portale Azure)

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

### Definizione di un secret

Nella scheda "Certificates & secrets", create un nuovo secret.

<img src={ssoAad_004} />

:::warning[Copiate il valore immediatamente]
Il valore del secret viene visualizzato una sola volta, subito dopo la sua creazione. Copiate il contenuto della colonna __"Value"__, e non quello della colonna __"Secret ID"__. Se perdete questo valore, dovrete generare un nuovo secret.
:::

<img src={ssoAad_005} />

:::caution[Validità limitata a 24 mesi]
La data di scadenza del secret non può essere superiore a 24 mesi, anche con una data di scadenza personalizzata. __Annotate fin da ora questa data__: alla scadenza, la connessione SSO cesserà di funzionare per tutti i vostri utenti. Vedere la sezione [Rinnovo del secret](#rinnovo-del-secret).
:::

### Autorizzazione delle informazioni utilizzate dalla Console

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
- il nome di un referente, con la sua e-mail e il suo numero di telefono, per finalizzare la configurazione;
- l'__Application (client) ID__ annotato alla fase 1;
- il __Directory (tenant) ID__ annotato alla fase 1.

Trasmettete il __secret client__ tramite il canale sicuro indicato dal vostro referente, e non nel corpo della richiesta.

Non appena la configurazione sarà realizzata lato Console, il referente indicato ne sarà informato e riceverà la __"Redirect URL"__ da dichiarare.

## Fase 3: Dichiarazione della "Redirect URL"

Se non avete indicato la "Redirect URL" al momento della creazione dell'applicazione, aggiungetela ora.

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

## Rinnovo del secret

Il secret client scade al più tardi 24 mesi dopo la sua creazione. Alla scadenza, la connessione SSO cessa di funzionare per tutti i vostri utenti. Anticipatene il rinnovo:

1. in "Certificates & secrets", create un __nuovo__ secret senza eliminare il precedente;
2. trasmettetene il valore a Cloud Temple tramite il canale sicuro, aprendo una richiesta di assistenza;
3. una volta confermato il passaggio dai nostri team, eliminate il vecchio secret dal portale Azure.

Conservare i due secret durante il passaggio evita qualsiasi interruzione di servizio.

## Buone pratiche

- __Gestite l'accesso per gruppi__ anziché per utenti: l'arrivo o la partenza di un collaboratore viene allora trattato nella vostra directory, senza intervento sulla Console.
- __Attivate l'autenticazione a più fattori__ sull'applicazione nelle vostre politiche di accesso condizionale EntraID: si applicherà allora all'accesso alla Console.
- __Programmate un avviso__ all'avvicinarsi della data di scadenza del secret.
- __Conservate almeno un account proprietario locale__ sulla vostra organizzazione Cloud Temple, al di fuori della federazione, per mantenere un accesso in caso di indisponibilità della vostra directory.

## Risoluzione dei problemi

| Sintomo | Causa probabile |
|---|---|
| `AADSTS50011`: l'URL di reindirizzamento non corrisponde | La "Redirect URL" dichiarata in Azure differisce da quella fornita da Cloud Temple. Verificatela carattere per carattere, compresa l'assenza di `/` finale. |
| `AADSTS7000215`: secret non valido | Il secret è scaduto, oppure il valore trasmesso era il "Secret ID" anziché il "Value". |
| `AADSTS50105`: utente non assegnato | L'opzione "Assignment required" è attiva e l'utente non è assegnato all'applicazione. |
| Il pulsante di connessione non appare nella pagina | La configurazione non è ancora attiva lato Cloud Temple. |
| L'utente è autenticato ma la Console rifiuta l'accesso | Il claim `email` è assente dal token, oppure nessun diritto è stato attribuito all'utente. |

## Supporto

Per qualsiasi domanda su questa procedura, aprite una richiesta di assistenza dalla vostra Console. Precisate il nome della vostra organizzazione nonché l'orario di un tentativo di connessione fallito: ciò consente di ritrovare la traccia corrispondente.
