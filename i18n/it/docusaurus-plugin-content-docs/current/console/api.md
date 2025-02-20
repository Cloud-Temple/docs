---
title: Documentation API
---

## Chiavi API

La __chiave API__ consente di autenticarsi quando si desidera effettuare richieste all'API. La generazione di una chiave API, chiamata anche __Personal Access Token (PAT)__,
è un modo sicuro per connettersi alle API Shiva senza passare attraverso un'interfaccia grafica. Ognuno di questi token è legato a un tenant e all'utente che l'ha creato.

La creazione di questo token avviene dal tuo account. È possibile generare più chiavi e configurare per ciascuna le autorizzazioni entro il limite dei tuoi diritti.

Per creare una chiave API, è sufficiente __fare clic sul proprio profilo__:

![](images/shiva_profil_001.png)

Nel menu del profilo, cliccare su __'Jeton d'accès personnel'__

![](images/shiva_profil_003.png)

Apparirà quindi sullo schermo l'elenco di tutte le chiavi API create per questo utente in questo tenant. Cliccare su __'Nouveau access token personnel'__

![](images/shiva_profil_002.png)

A questo punto devi:

- Indicare il nome di questo nuovo token,
- Indicare una data di scadenza (validità massima di 12 mesi),
- Scegliere le autorizzazioni associate al token.

I dettagli riguardanti il tuo token vengono quindi visualizzati. __Attenzione, non è più possibile accedervi successivamente.__

Se non annoti queste informazioni, dovrai distruggere e ricreare il token.

![](images/shiva_profil_004.png)

Per questioni di sicurezza, si consiglia di creare più token, ognuno con una specifica utilità (un token per ogni applicazione o processo aziendale), piuttosto che crearne uno con tutti i diritti.

Successivamente vedrai il nuovo token creato e la sua futura data di scadenza.

![](images/shiva_profil_005.png)

## Accesso al portale API

La documentazione OpenAPI 3.0 (Swagger) delle API della console Cloud Temple è disponibile direttamente nell'applicazione:

![](images/shiva_api_001.png)

L'accesso alle API richiede l'autenticazione. Una volta autenticati, tutte le operazioni devono avere l'header
__'Authorization'__ con il bearer access token ottenuto durante la fase di autenticazione.

L'URL dei punti di accesso è fornito direttamente in __Swagger__ (nell'oggetto "Servers" di ogni pagina APIs).

## Le attività

Il monitoraggio delle richieste di tipo scrittura (POST, PUT, PATCH, DELETE) è garantito tramite la gestione delle attività. Ogni richiesta di questo tipo genera automaticamente un'attività associata. Un codice di stato HTTP 201 conferma la creazione riuscita dell'attività. L'identificativo unico di questa attività è restituito nelle intestazioni della risposta, sotto la chiave 'Location'.

![](images/shiva_api_002.png)

Una volta recuperato l'identificativo, è possibile accedere ai dettagli dell'attività utilizzando l'API del modulo Activity:

![](images/shiva_api_003.png)

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

L'oggetto **state** può avere forme diverse a seconda dello stato dell'attività, ovvero:

**waiting**, stato prima che l'operazione abbia inizio:
```
    waiting: {}
```
**running**, stato durante l'esecuzione dell'operazione:
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

**Nota: l'Identificativo (UUIDv4) della risorsa creata è disponibile nel risultato dell'attività una volta che questa è completata.**

## Limiti API

### Perché dei limiti?

La console Cloud Temple definisce __dei limiti sul volume delle richieste__ che un utente può indirizzare
all'API in un determinato arco di tempo. L'introduzione di questi limiti di frequenza è una misura comune nella gestione delle API, adottata per diversi motivi essenziali:

- **Prevenzione degli abusi**: Questi limiti contribuiscono a preservare l'integrità dell'API prevenendo usi
abusivi o malevoli che potrebbero comprometterne il funzionamento.
- **Assicurazione della qualità del servizio**: Regolando l'accesso all'API, noi garantiamo una distribuzione equa
delle risorse, permettendo così a tutti gli utenti di beneficiare di un'esperienza stabile e performante.

Prendiamo l'esempio di uno script mal progettato o inefficiente che tenta ripetutamente chiamate all'API,
rischiando di saturare le risorse e degradare le prestazioni. Stabilendo dei limiti sulle richieste,
preveniamo queste situazioni e garantiamo il mantenimento di __un servizio fluido e ininterrotto__ per tutti i nostri clienti.

### Quali sono i limiti di frequenza per l'API della console Cloud Temple?

Applichiamo restrizioni quantitative sulle interazioni degli utenti con la console
per ogni prodotto.

I limiti sono definiti in __richieste per secondo (r/s) e per IP sorgente__. Oltre il limite, il sistema risponderà
con un codice di errore HTTP 429, segnalando che il limite di richieste autorizzate è stato superato.

Ecco i limiti definiti:

| Prodotto             | Limite       |
|----------------------|--------------|
| Console Cloud Temple | 60 r/s       |
| Identità (IAM)       | 60 r/s       |
| IaaS - Calcolo       | 60 r/s       |
| IaaS - Storage       | 20 r/s       |
| IaaS - Backup        | 60 r/s       |
| PaaS - S3            | 60 r/s       |
| PaaS - Openshift     | 60 r/s       |
| Rete                 | 60 r/s       |
| Ospitalità           | 60 r/s       |

### Come funzionano i limiti di frequenza?

Se il numero di richieste inviate a un punto API supera il limite autorizzato, il punto API reagirà restituendo
__un codice di risposta HTTP 429__. Questo codice indica che l'utente ha superato il numero di richieste permesse.
Quando ciò accade, il punto API fornirà anche un oggetto JSON come risposta,
che conterrà informazioni dettagliate sul limite applicato:
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### Come evitare di effettuare troppe richieste?

Si consiglia di limitare il numero di chiamate all'API effettuate dalla propria automazione per rimanere al di sotto
del limite di frequenza stabilito per l'endpoint.

Questo accade spesso quando più richieste vengono eseguite in parallelo,
utilizzando più processi o thread.

Esistono diversi modi per migliorare l'efficienza della tua automazione, inclusi l'uso di meccanismi
di __caching__ e l'introduzione di __un sistema di ripetizione con attenuazione progressiva__. Questo metodo prevede una breve pausa quando si incontra un errore di limite di frequenza, quindi si riprova la richiesta.
Se la richiesta fallisce di nuovo, la durata della pausa aumenta progressivamente fino a quando la richiesta non riesce
o fino a quando non si raggiunge un massimo di tentativi.

Questo approccio presenta numerosi vantaggi:

- __L'attenuazione progressiva__ garantisce che i primi tentativi vengano ripetuti rapidamente, prevedendo pause più lunghe in caso di fallimenti ripetuti.
- L'aggiunta di __una variazione casuale__ alla pausa aiuta a evitare che tutti i tentativi avvengano simultaneamente.

È importante notare che __le richieste infruttuose non influiscono sul limite di frequenza__.
Tuttavia, inviare continuamente una richiesta potrebbe non essere una soluzione praticabile a lungo termine,
poiché questo comportamento potrebbe essere modificato in futuro. Pertanto, ti consigliamo di non dipendere esclusivamente da questo meccanismo.

Le librerie __[Backoff](https://pypi.org/project/backoff/)__ e __[Tenacity](https://pypi.org/project/tenacity/)__ in Python
sono un buon punto di partenza per implementare strategie di attenuazione.

## Ciclo di vita di un endpoint API

Le informazioni sull'evoluzione degli endpoint dell'API sono disponibili nelle note di rilascio:

![](images/shiva_api_004.jpg)

Troverai l'elenco degli endpoint che sono deprecati attività per attività.

Inoltre, gli endpoint che sono deprecati appariranno in questo modo sulle nostre API:
__~~this/is/an/endpoint~~__ insieme a una data di rimozione definitiva nella descrizione.