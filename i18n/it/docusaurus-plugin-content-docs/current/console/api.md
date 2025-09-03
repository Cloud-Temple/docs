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

# Limitazioni API

Questo documento descrive le limitazioni relative alle API. Le informazioni contenute in questo documento sono destinate a essere utilizzate da sviluppatori e ingegneri IT che lavorano con i nostri servizi cloud.

## 1. Limitazioni di Risposta per API REST

Le nostre API REST implementano limitazioni di risposta per garantire un'efficace gestione delle risorse e prevenire il sovraccarico dei server. Le principali limitazioni includono:

- **Numero massimo di richieste par zona**: Ogni utente può effettuare fino a 100 richieste simultanee provenienti da una singola zona geografica. Questa limitazione è in vigore per proteggere le risorse e garantire un'esperienza fluida per tutti gli utenti.
- **Risposta massima**: Le API REST restituiscono fino a 100 record per richiesta. Se necessario, è possibile ottenere ulteriori pagine di risultati consultando i metadati di posizionamento (paginazione) presenti nelle risposte.
- **Tempo di attesa**: Le API REST hanno un limite di tempo di attesa massimo di 60 secondi per qualsiasi singola richiesta. Se una richiesta non viene completata entro questo periodo, verrà restituita un messaggio di errore indicando che la richiesta ha superato il limite temporale.

## 2. Limitazioni di Utilizzo per API Private

Le nostre API private sono progettate per l'uso interno e non sono soggette alle stesse limitazioni pubbliche. Tuttavia, è fondamentale rispettare i seguenti punti:

- **Numero massimo di utenti simultanei**: Le API private possono gestire fino a 500 connessioni simultanee. Superare questo limite può influire sulla stabilità del servizio e potrebbe comportare la sospensione temporanea dell'accesso per garantire un'esperienza fluida per tutti gli utenti.
- **Volume di dati**: Le API private sono progettate per gestire grandi volumi di dati, ma è importante monitorare il flusso di dati per evitare sovraccarichi che potrebbero influire negativamente sulle prestazioni del sistema.

## 3. Limitazioni di Utilizzo per API di Terze Parte

Le API di terze parti, integrate con i nostri servizi cloud, possono avere limitazioni specifiche impostate dai fornitori di queste API. È essenziale consultare direttamente il fornitore per ottenere informazioni dettagliate sulle limitazioni relative alle loro API.

## 4. Gestione delle Limitazioni

In caso di superamento delle limitazioni, le seguenti azioni possono essere prese:

- **Riduzione dei requisiti**: Rivedi i tuoi algoritmi o query per ridurre il volume di dati richiesto.
- **Asincronicità**: Implementa tecniche asincrone per gestire grandi volumi di richieste senza sovraccaricare le risorse.
- **Paginazione**: Utilizza la paginazione per recuperare i dati in più fasi, riducendo così il volume di dati trasferito in una singola richiesta.
- **Caching**: Implementa strategie di caching per ridurre il numero di richieste alle API principali.

Ricorda che queste limitazioni sono soggette a modifiche e potrebbero variare nel tempo, pertanto è sempre consigliabile consultare regolarmente le nostre documentazioni ufficiali per informazioni aggiornate.

### Perché di queste limitazioni?

La console Cloud Temple definis __limiti sul volume di richiesta__ che un utente può effettuare all'API nel corso di una determinata durata. L'introduzione di questi limiti di frequenza è una pratica comune nella gestione delle API, adottata per diversi motivi essenziali:

- __Prevenzione degli abusi__ : Queste limitazioni contribuiscono a preservare l'integrità dell'API impedendo utilizzi abusivi o maldestri che potrebbero comprometterne il funzionamento.
- __Assicurazione del servizio qualitativo__ : Regolando l'accesso all'API, garantiamo una distribuzione equa delle risorse, permettendo a tutti gli utenti di godere di un'esperienza stabile e performante.

Consideriamo ad esempio un script mal concepito o inefficiente che effettua appelli ripetuti all'API, potenzialmente sovraccaricando le risorse e compromettendo le prestazioni. Estendendo i limiti di richiesta, preveniamo queste situazioni e garantiamo un __servizio fluido e senza interruzioni__ per l'intera nostra clientela.

### Quale è il limite di frequenza per l'API della console Cloud Temple?

Ci applichiamo limiti quantitativi sulle interazioni degli utenti con la console per ogni prodotto.

I limiti sono definiti in **richieste per secondo (r/s)** e per fonte IP. Oltre il limite di frequenza, il sistema risponderà con un codice di errore HTTP 429, indicando che la soglia di richieste autorizzate è stata superata.

Ecco i limiti definiti:

| Prodotto              | Limite di frequenza |
|----------------------|--------------------|
| Console Cloud Temple | 60 r/s            |
| Identità (IAM)       | 60 r/s            |
| IaaS - Calcolo       | 60 r/s            |
| IaaS - Archiviazione  | 20 r/s            |
| IaaS - Backup       | 60 r/s            |
| PaaS - S3           | 60 r/s            |
| PaaS - OpenShift     | 60 r/s            |
| Rete                | 60 r/s            |
| Ospitamento         | 60 r/s            |

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
