---
title: Documentazione API
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

## Chiavi API

La __chiave API__ permet di autenticarsi quando si desidera effettuare richieste sull'API. La generazione di una chiave API, nota anche come __Personal Access Token (PAT)__, è un modo sicuro per connettersi alle API Console senza dover passare attraverso un'interfaccia grafica. Ogni token è associato a un tenant e all'utente che lo ha creato.

La creazione di questo token avviene dal tuo account. È possibile generare più chiavi e configurare per ciascuna le autorizzazioni entro i limiti dei tuoi diritti.

Per creare una chiave API, è sufficiente __fare clic sul tuo profilo__:

<img src={ShivaProfil001} />

Nel menu del profilo, fare clic su __'Token di accesso personale'__.

<img src={ShivaProfil003} />

A questo punto, sullo schermo verranno visualizzate tutte le chiavi API create per questo utente in questo tenant. Fare clic su __'Nuovo token di accesso personale'__.

<img src={ShivaProfil002} />

Devi quindi:

- Inserire il nome di questo nuovo token,
- Specificare una data di scadenza (massimo 12 mesi di validità),
- Scegliere le autorizzazioni associate al token.

Verranno quindi visualizzati i dettagli relativi al tuo token. __Attenzione, non sarà più possibile accedervi successivamente.__

Se non annoti queste informazioni, dovrai distruggere e ricreare il token.

<img src={ShivaProfil004} />

Per ragioni di sicurezza, si raccomanda di creare più token, ciascuno con una funzione specifica (un token per ogni applicazione o processo aziendale), piuttosto che creare un singolo token con tutti i diritti.

Vedi quindi il nuovo token creato e la sua futura data di scadenza.

<img src={ShivaProfil005} />

:::info Ciclo di vita del token di autenticazione
Quando utilizzi il tuo **Personal Access Token (PAT)** per autenticarti presso l'API, ricevi in risposta un token di accesso. È importante notare che questo token di accesso è un **JSON Web Token (JWT)** con una durata di vita limitata.

-   **Durata di vita**: Ogni token JWT è valido per una durata di **5 minuti**.
-   **Verifica**: Puoi verificare la data di emissione (`iat`) e la data di scadenza (`exp`) del tuo token decodificandolo. Strumenti online come [jwt.io](https://jwt.io) ti permettono di farlo facilmente.

Una volta scaduto il token, dovrai autenticarti nuovamente con il tuo PAT per ottenerne uno nuovo. È quindi consigliabile gestire questo ciclo di vita nei tuoi script e applicazioni prevedendo un aggiornamento automatico del token.
:::

## Accesso al portale API

La documentazione OpenAPI 3.0 (Swagger) delle API della console Cloud Temple è disponibile direttamente nell'applicazione:

<img src={ShivaApi001} />

L'accesso alle API richiede l'autenticazione. Una volta autenticati, tutte le operazioni devono includere l'intestazione  
__'Authorization'__ con il bearer access token ottenuto durante la fase di autenticazione.

L'URL dei punti di accesso è fornita direttamente in __Swagger__ (nell'oggetto "Servers" di ogni pagina API).

## Le attività

Il monitoraggio delle richieste di tipo scrittura (POST, PUT, PATCH, DELETE) avviene tramite la gestione delle attività. Ogni richiesta di questo tipo genera automaticamente un'attività associata. Un codice di stato HTTP 201 conferma la creazione avvenuta con successo dell'attività. L'identificativo univoco di questa attività viene restituito negli header della risposta, con la chiave 'Location'.

<img src={ShivaApi002} />

Una volta ottenuto l'identificativo, è possibile accedere ai dettagli dell'attività utilizzando l'API del modulo Activity:

<img src={ShivaApi003} />

Il contenuto dell'attività include tutte le informazioni essenziali per identificare l'operazione, la data di esecuzione e lo stato di avanzamento. Ecco il modello di un'attività:

```
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

L'oggetto __state__ può assumere diverse forme a seconda dello stato dell'attività, ovvero:

__waiting__, stato prima che l'operazione abbia iniziato:

```
    waiting: {}
```
__running__, stato quando l'operazione è in corso:

```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
__failed__, stato se l'operazione ha fallito:

```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
__completed__, stato se l'operazione è terminata:

```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

__Nota: l'identificativo (UUIDv4) della risorsa creata è disponibile nel risultato dell'attività una volta completata.__

## Limiti API

### Perché limiti?

La console Cloud Temple definisce __un limite massima sul volume di richieste__ che un utente può inviare all'API in un determinato periodo di tempo. L'implementazione di questi limiti di frequenza è una pratica comune nella gestione delle API, adottata per diversi motivi fondamentali:

- __Prevenzione degli abusi__: Questi limiti contribuiscono a preservare l'integrità dell'API prevenendo utilizzi abusivi o inadeguati che potrebbero comprometterne il funzionamento.
- __Garanzia della qualità del servizio__: Regolando l'accesso all'API, garantiamo una distribuzione equa delle risorse, permettendo a tutti gli utenti di godere di un'esperienza stabile e performante.

Prendiamo ad esempio uno script mal progettato o inefficiente che tenta chiamate ripetute all'API, con il rischio di saturare le risorse e degradare le prestazioni. Stabilendo soglie di richieste, preveniamo queste situazioni e garantiamo il mantenimento di un __servizio fluido e continuo__ per l'intera clientela.

### Quali sono i limiti di velocità per l'API della console Cloud Temple?

Applichiamo restrizioni quantitative sulle interazioni degli utenti con la console per ogni prodotto.

I limiti sono definiti in __richieste al secondo (r/s) e per indirizzo IP sorgente__. Oltre la soglia limite, il sistema risponderà con un codice di errore HTTP 429, indicando che il limite massimo di richieste consentite è stato superato.

Ecco i limiti definiti:

| Prodotto | Soglia limite |
|---|---|
| Console Cloud Temple | 25 r/s |
| Identità (IAM) | 25 r/s |
| IaaS VMware | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastion | 25 r/s |
| Rete | 25 r/s |
| Hosting | 25 r/s |
| Marketplace | 25 r/s |
| Supporto | 25 r/s |
| Notifiche | 25 r/s |
| LLMaaS | 25 r/s |

### Specific routes

Certain API endpoints, particularly those related to authentication or sensitive actions, have more restrictive limits to enhance security and ensure stability.

| Route | Limit threshold |
|---|---|
| Authentication (IAM) | 5 r/s |
| IaaS - Storage (Datastores) | 20 r/s |
| Marketplace (Contact) | 1 r/min - 5 r/h |

### Come funzionano i limiti di velocità?

Se il numero di richieste inviate a un endpoint API supera il limite consentito, l'endpoint API risponderà restituendo  
__un codice di risposta HTTP 429__. Questo codice indica che l'utente ha superato il numero di richieste consentite.  
Quando ciò si verifica, l'endpoint API fornirà inoltre un oggetto JSON come risposta,  
che conterrà informazioni dettagliate sulla limitazione applicata:

```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```

### Come evitare di effettuare troppi richieste?

Si raccomanda di limitare il numero di chiamate all'API effettuate dalla propria automazione per rimanere al di sotto del limite di frequenza impostato per l'endpoint.

Questa situazione si verifica spesso quando diverse richieste vengono eseguite in parallelo, utilizzando più processi o thread.

Esistono diversi modi per migliorare l'efficienza della propria automazione, in particolare utilizzando meccanismi di __caching__ e implementando un __sistema di ripetizione con attenuazione progressiva__. Questo metodo consiste nel fare una breve pausa quando viene rilevato un errore legato al limite di frequenza, quindi riprovare la richiesta. Se la richiesta fallisce nuovamente, la durata della pausa viene aumentata progressivamente fino al successo della richiesta o fino al raggiungimento del numero massimo di tentativi.

Questo approccio presenta numerosi vantaggi:

- L'__attenuazione progressiva__ garantisce che i primi tentativi vengano eseguiti rapidamente, prevedendo pause più lunghe in caso di fallimenti ripetuti.
- L'aggiunta di una __variazione casuale__ alla pausa contribuisce a evitare che tutti i tentativi si verifichino simultaneamente.

È importante notare che le __richieste non riuscite non influenzano il proprio limite di frequenza__. Tuttavia, inviare continuamente una richiesta potrebbe non essere una soluzione sostenibile a lungo termine, poiché questo comportamento potrebbe essere modificato in futuro. Vi raccomandiamo quindi di non basarvi esclusivamente su questo meccanismo.

Le librerie __[Backoff](https://pypi.org/project/backoff/)__ e __[Tenacity](https://pypi.org/project/tenacity/)__ in Python sono ottimi punti di partenza per implementare strategie di attenuazione.

## Ciclo di vita di un endpoint API

Le informazioni sull'evoluzione degli endpoint dell'API sono disponibili nelle note di aggiornamento:

<img src={ShivaApi004} />

Troverai l'elenco degli endpoint deprecati, organizzati per attività.

Inoltre, gli endpoint deprecati verranno visualizzati nel seguente modo nelle nostre API:  
__~~this/is/an/endpoint~~__ insieme a una data di rimozione definitiva nella descrizione.