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
import ShivaApi004 from './images/shiva_api_004.jpg'

## Chiavi API

La __chiave API__ permette di autenticarsi quando desideri effettuare richieste all'API. La generazione di una chiave API, anche chiamata __Personal Access Token (PAT)__,
è un modo sicuro per connettersi alle API di Shiva senza passare attraverso un'interfaccia grafica. Ognuno di questi token è collegato a un tenant e all'utente che l'ha creato.

La creazione di questo token avviene dal tuo account. È possibile generare diverse chiavi e configurare per ciascuna le autorizzazioni nei limiti dei tuoi diritti.

Per creare una chiave API, basta __cliccare sul tuo profilo__:

<img src={ShivaProfil001} />

Nel menu del profilo, clicca su __'Token di accesso personale'__

<img src={ShivaProfil003} />

Vedrai sullo schermo tutte le chiavi API che sono state create per questo utente in questo tenant. Clicca su __'Nuovo token di accesso personale'__

<img src={ShivaProfil002} />

Devi quindi:

- Indicare il nome di questo nuovo token,
- Indicare una data di scadenza (massimo 12 mesi di validità),
- Scegliere i permessi associati al token.

I dettagli riguardanti il tuo token saranno quindi visualizzati. __Attenzione, non sarà più possibile accedervi in seguito.__

Se non annoti queste informazioni, dovrai distruggere e ricreare il token.

<img src={ShivaProfil004} />

Per una questione di sicurezza, è consigliato creare diversi token, ciascuno con un'utilità specifica (un token per ogni applicazione o per ogni processo aziendale) piuttosto che creare un solo token con tutti i diritti.

Vedrai poi il nuovo token creato e la sua futura data di scadenza.

<img src={ShivaProfil005} />

## Accesso al portale API

La documentazione OpenAPI 3.0 (Swagger) delle API della console Cloud Temple è disponibile direttamente nell'applicazione:

<img src={ShivaApi001} />

L'accesso alle API richiede l'autenticazione. Una volta autenticato, tutte le operazioni devono avere l'intestazione
__'Authorization'__ con il bearer access token ottenuto durante la fase di autenticazione.

L'URL dei punti di accesso è fornito direttamente in __Swagger__ (nell'oggetto "Servers" di ogni pagina delle API).

## Le attività

Il monitoraggio delle richieste di tipo scrittura (POST, PUT, PATCH, DELETE) è assicurato tramite la gestione delle attività. Ogni richiesta di questo tipo genera automaticamente un'attività associata. Un codice di stato HTTP 201 conferma la riuscita creazione dell'attività. L'identificativo unico di questa attività viene restituito nelle intestazioni della risposta, sotto la chiave 'Location'.

<img src={ShivaApi002} />

Una volta recuperato l'identificativo, è possibile accedere ai dettagli dell'attività utilizzando l'API del modulo Activity:

<img src={ShivaApi003} />

Il contenuto dell'attività include tutte le informazioni essenziali per identificare l'operazione, la sua data di esecuzione e il suo stato di avanzamento. Ecco il modello di un'attività:

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

L'oggetto **state** può assumere diverse forme a seconda dello stato dell'attività, ovvero:

**waiting**, stato prima che l'operazione sia iniziata:
```
    waiting: {}
```
**running**, stato quando l'operazione è in corso:
```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
**failed**, stato se l'operazione è fallita:
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, stato se l'operazione è completata:
```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

**Nota: l'Identificativo (UUIDv4) della risorsa creata è disponibile nel risultato dell'attività una volta completata.**

## Limiti API

### Perché dei limiti?

La console Cloud Temple definisce __dei limiti sul volume di richieste__ che un utente può indirizzare
all'API in un determinato periodo. L'instaurazione di questi limiti di frequenza è una misura comune nella gestione delle API, adottata per diversi motivi essenziali:

- **Prevenzione degli abusi**: Questi limiti contribuiscono a preservare l'integrità dell'API prevenendo usi abusivi o maldestri che potrebbero compromettere il funzionamento.
- **Assicurazione della qualità del servizio**: Regolando l'accesso all'API, garantiamo una distribuzione equa delle risorse, permettendo a tutti gli utenti di beneficiare di un'esperienza stabile e performante.

Prendiamo ad esempio uno script mal progettato o inefficace che tenta di effettuare chiamate ripetitive all'API,
rischiando di saturare le risorse e di degradare le prestazioni. Stabilendo dei limiti di richieste,
preveniamo queste situazioni e assicuriamo il mantenimento di __un servizio fluido e senza interruzioni__ per tutta la nostra clientela.

### Quali sono i limiti di tasso per l'API della console Cloud Temple?

Applichiamo restrizioni quantitative alle interazioni degli utenti con la console
per ciascun prodotto.

I limiti sono definiti in __richieste per secondo (r/s) e per IP sorgente__. Oltre la soglia limite, il sistema risponderà
con un codice di errore HTTP 429, segnalando che è stato superato il limite di richieste consentite.

Ecco i limiti definiti:

| Prodotto             | Soglia limite |
|----------------------|---------------|
| Console Cloud Temple | 60 r/s        |
| Identità (IAM)       | 60 r/s        |
| IaaS - Calcolo       | 60 r/s        |
| IaaS - Archiviazione | 20 r/s        |
| IaaS - Backup        | 60 r/s        |
| PaaS - S3            | 60 r/s        |
| PaaS - Openshift     | 60 r/s        |
| Rete                 | 60 r/s        |
| Hosting              | 60 r/s        |

### Come funzionano i limiti di tasso?

Se il numero di richieste inviate a un endpoint API supera il limite consentito, l'endpoint API reagirà restituendo
__un codice di risposta HTTP 429__. Questo codice indica che l'utente ha superato il numero di richieste consentite.
Quando ciò si verifica, l'endpoint API fornirà anche un oggetto JSON in risposta,
che conterrà informazioni dettagliate sulla limitazione applicata:
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### Come evitare di effettuare troppe richieste?

È consigliato limitare il numero di chiamate API effettuate dalla tua automazione per rimanere al di sotto
del limite di tasso fissato per il punto di terminazione.

Questa situazione si verifica spesso quando più richieste vengono eseguite in parallelo,
utilizzando più processi o thread.

Esistono diversi modi per migliorare l'efficienza della tua automazione, inclusi l'uso di meccanismi
di __caching__ e l'implementazione di un __sistema di ripetizione con backoff progressivo__. Questo metodo consiste
nel fare una breve pausa quando si incontra un errore di limite di tasso, quindi riprovare la richiesta.
Se la richiesta fallisce di nuovo, la durata della pausa viene aumentata progressivamente fino a quando la richiesta non riesce
o fino a quando non viene raggiunto un numero massimo di tentativi.

Questo approccio presenta numerosi vantaggi:

- __Il backoff progressivo__ garantisce che i primi tentativi vengano fatti rapidamente, prevedendo al contempo tempi di attesa più lunghi in caso di fallimento ripetuto.
- L'aggiunta di __una variazione casuale__ alla pausa aiuta a evitare che tutti i tentativi si verifichino simultaneamente.

È importante notare che __le richieste fallite non influiscono sul tuo limite di tasso__.
Tuttavia, inviare continuamente una richiesta potrebbe non essere una soluzione valida a lungo termine,
poiché questo comportamento potrebbe essere modificato in futuro. Pertanto, si consiglia di non dipendere esclusivamente da questo meccanismo.

Le librerie __[Backoff](https://pypi.org/project/backoff/)__ e __[Tenacity](https://pypi.org/project/tenacity/)__ in Python
sono dei buoni punti di partenza per implementare strategie di backoff.

## Ciclo di vita di un endpoint API

Le informazioni sull'evoluzione degli endpoint dell'API sono disponibili nelle note di aggiornamento:

<img src={ShivaApi004} />

Troverai l'elenco degli endpoint che vengono deprecati attività per attività.

Inoltre, gli endpoint deprecati appariranno così sulle nostre API:
__~~this/is/an/endpoint~~__ insieme a una data di eliminazione definitiva nella descrizione.
