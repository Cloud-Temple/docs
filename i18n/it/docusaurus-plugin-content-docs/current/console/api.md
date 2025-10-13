---
title: documentazione API
---
import ShivaProfil001 from './images/shiva_profil_001.png'
import ShivaProfil002 from './images/shiva_profil_002.png'
import ShivaProfil003 from './images/shiva_profil_003.png'
import ShivaProfil004 from './images/shiva_profil_004.png'
import ShivaProfil005 from './images/shiva_profil_005.png'
import ShivaApi001 from './images/shiva_api_001.png'
import ShivaApi002 from './images/shiva_api_002.png'
import ShivaApi003 from './images/shiva_api_003.png'
import ShivaApi004 from './images/shiva_api_004.png'

## API Keys

The __API Key__, also known as a __Personal Access Token (PAT)__, serves as an authentication method when you need to make requests to the Shiva API. Generating an API key is a secure way to connect to Shiva's APIs without relying on a graphical interface. Each token is associated with a tenant and the user who created it.

Creating these tokens can be done from your account. You can generate multiple keys, configuring permissions for each within the limits of your access rights.

To create an API key, simply:

<img src={ShivaProfil001} />

From the profile menu, select __'Personal Access Token'__.

<img src={ShivaProfil003} />

You'll then see a list of all API keys created for this user in this tenant. Click on __'New Personal Access Token'__.

<img src={ShivaProfil002} />

You will need to:

- Provide a name for the new token,
- Specify an expiration date (maximum 12 months validity),
- Choose the permissions associated with the token.

The details of your token are then displayed. __Please note that you cannot view these later.__

If you forget these details, you'll need to destroy and regenerate the token.

<img src={ShivaProfil004} />

For security reasons, it's recommended to create several tokens with specific purposes (one for each application or business process) rather than using one token with all permissions.

You will then see the newly created token and its upcoming expiration date.

<img src={ShivaProfil005} />

## Accesso al portale API

La documentazione OpenAPI 3.0 (Swagger) delle API della console Cloud Temple è disponibile direttamente nell'applicazione:

<img src={ShivaApi001} />

L'accesso alle API richiede l'autenticazione. Una volta autenticato, tutte le operazioni devono avere il header __'Authorization'__ con l'accesso token bearer ottenuto durante la fase di autenticazione.

L'URL dei punti di accesso è direttamente indicato nella documentazione Swagger (nell'oggetto "Servers" di ciascuna pagina API).

## Le seguito

Il monitoraggio delle richieste di tipo scrittura (POST, PUT, PATCH, DELETE) viene assicurato tramite la gestione delle attività. Ogni richiesta di questo tipo genera automaticamente un'attività associata. Un codice di stato HTTP 201 conferma la creazione riuscita dell'attività. L'identificatore univoco di questa attività viene restituito negli header della risposta, sotto la chiave 'Location'.

<img src={ShivaApi002} />

Una volta ottenuto l'identificatore, è possibile accedere ai dettagli dell'attività tramite l'API del modulo Attività:

<img src={ShivaApi003} />

Il contenuto dell'attività include tutte le informazioni essenziali per identificare l'operazione, la data di esecuzione, nonché lo stato di avanzamento. Ecco il modello di un'attività:

```json
{
    "tenantId": "UUIDV4",
    "description": "STRING",
    "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
    "tags": "STRING[]",
    "initiator": "UUIDV4",
    "concernedItems": [
        {
        "type": "string",
        "id": "string"
        }
    ],
    "id": "UUIDV4",
    "creationDate": "DATE",
    "operationType": "read" | "write",
    "state": "CompletedState | RunningState | WaitingState | FailedState"
}
```

Il campo __state__ può assumere diverse forme a seconda dello stato dell'attività, come:

__waiting__, lo stato prima che l'operazione inizi:

```json
waiting: {}
```

__running__, lo stato quando l'operazione è in corso:

```json
running: {
    status: string;
    startDate: Date;
    progression: number;
}
```

__failed__, lo stato se l'operazione ha fallito:

```json
failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
}
```

__completed__, lo stato se l'operazione è terminata:

```json
completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
}
```

__Nota__: L'identificatore (UUIDv4) della risorsa creata è disponibile negli elementi di risposta dell'attività una volta completata la stessa.

## Limiti API

### Perché ci sono dei limiti?

La console di Cloud Temple definisce dei __limiti sul volume di richieste__ che un utente può indirizzare all'API in un determinato periodo. L'introduzione di questi limiti di frequenza è una misura comune nella gestione delle API, adottata per diverse ragioni essenziali:

- __Prevenzione degli abusi__: Questi limiti contribuiscono a salvaguardare l'integrità dell'API prevenendo usi abusivi o maldestri che potrebbero comprometterne il funzionamento.
- __Garanzia della qualità del servizio__: Regolando l'accesso all'API, assicuriamo una distribuzione equa delle risorse, permettendo così a tutti gli utenti di beneficiare di un'esperienza stabile e performante.

Prendiamo l'esempio di uno script mal progettato o inefficiente che tenta di effettuare chiamate ripetitive all'API, rischiando di saturare le risorse e di degradare le prestazioni. Stabilendo delle soglie di richieste, preveniamo queste situazioni e assicuriamo il mantenimento di __un servizio fluido e senza interruzioni__ per tutta la nostra clientela.

### Quali sono i limiti di tasso per l'API della console di Cloud Temple?

Applichiamo restrizioni quantitative sulle interazioni degli utenti con la console per ogni prodotto.

I limiti sono definiti in __richieste al secondo (r/s) e per IP di origine__. Oltre la soglia limite, il sistema risponderà con un codice di errore HTTP 429, segnalando che il limite di richieste autorizzate è stato superato.

Ecco i limiti definiti:

| Prodotto | Limite |
|---|---|
| Console Cloud Temple | 25 r/s |
| Identità (IAM) | 25 r/s |
| IaaS VMware | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| Openshift | 25 r/s |
| Bastion | 25 r/s |
| Rete | 25 r/s |
| Hosting | 25 r/s |
| Marketplace | 25 r/s |
| Supporto | 25 r/s |
| Notifica | 25 r/s |
| LLMaaS | 25 r/s |

### Rotte specifiche

Alcuni endpoint API specifici, in particolare quelli legati all'autenticazione o ad azioni sensibili, hanno limiti più restrittivi per rafforzare la sicurezza e garantire la stabilità.

| Rotta | Limite |
|---|---|
| Autenticazione (IAM) | 5 r/s |
| IaaS - Archiviazione (Datastores) | 20 r/s |
| Marketplace (Contatto) | 1 r/min - 5 r/h |

### Come funzionano le limiti di frequenza?

Se il numero di richieste inviate a un punto API supera la soglia consentita, il punto API risponderà con un codice di risposta HTTP 429. Questo codice indica che l'utente ha superato il limite di richieste permesso. Inoltre, il punto API fornirà anche un oggetto JSON come risposta, contenente informazioni dettagliate sulla limitazione applicata:

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

### Come evitare di inviare troppi richieste?

È consigliabile limitare il numero di chiamate API effettuate dalla tua automazione per rimanere al di sotto delle soglie di frequenza impostate all'ingresso.

Questa situazione si verifica frequentemente quando vengono eseguite contemporaneamente più richieste tramite processi o thread multipli.

Esistono diversi modi per migliorare l'efficienza della tua automazione, tra cui l'utilizzo di meccanismi di __cache__ e la implementazione di un sistema di riprova con attenuazione progressiva. Questa strategia prevede di effettuare una breve pausa quando si verifica un'eccezione relativa alle soglie di frequenza, poi ripetere la richiesta. Se la richiesta fallisce nuovamente, la durata della pausa viene aumentata progressivamente fino a quando non viene raggiunta una successione o fino a quando un numero massimo di tentativi è stato esaurito.

Questa approccio offre numerosi vantaggi:

- L'attenuazione progressiva garantisce che le prime tentative vengano effettuate rapidamente, mentre si prevede tempi di attesa più lunghi in caso di errori ripetuti.
- L'integrazione di un __variabile casuale__ nella durata della pausa contribuisce a evitare che tutte le tentative avvengano simultaneamente.

È importante ricordare che le richieste infruttuose non influenzano la tua soglia di frequenza. Tuttavia, inviare continuamente una stessa richiesta potrebbe non essere una soluzione a lungo termine, poiché questo comportamento potrebbe essere modificato in futuro. Pertanto, si consiglia di non fare dipendenza esclusivamente da questo meccanismo.

Le librerie __Backoff__ ([https://pypi.org/project/backoff/](https://pypi.org/project/backoff/)) e __Tenacity__ ([https://pypi.org/project/tenacity/](https://pypi.org/project/tenacity/)) in Python sono buoni punti di partenza per implementare strategie di attenuazione.

## Ciclo di vita di un endpoint API

Le documento delle note delle versioni dell'API fornisce informazioni sull'evoluzione degli endpoint:

<img src={ShivaApi004} />

Puoi trovare la lista degli endpoint che sono stati resi obsoleti attivamente, un po' alla volta.

Inoltre, gli endpoint obsoleti appaiono sulla nostra API come: `__~~this/is/an/endpoint~~__`, insieme a una data di rimozione definitiva nella descrizione.
