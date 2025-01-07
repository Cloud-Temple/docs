---
title: Documentation API 
---

## Clés API

La __clé API__ permet de s'authentifier lorsque vous souhaitez faire des requêtes sur l'API. La génération d'une clé API, aussi appelée __Personal Access Token (PAT)__, est une manière sécurisée de se connecter aux API Shiva sans passer par une interface graphique. Chacun de ces tokens est lié à un tenant et à l'utilisateur qui l'a créé.

La création de ce token se fait depuis votre compte. Il est possible de générer plusieurs clés et de configurer pour chacune les autorisations dans la limite de vos droits.

Pour créer une clef API, il suffit de __cliquer sur votre profil__ :

![](images/shiva_profil_001.png)

Dans le menu du profil, cliquer sur __'Jeton d'accès personnel'__

![](images/shiva_profil_003.png)

Vous avez alors à l'écran l'ensemble des clés API qui ont été créées pour cet utilisateur dans ce tenant. Cliquer sur __'Nouveau access token personnel'__

![](images/shiva_profil_002.png)

Vous devez alors :

- Indiquer le nom de ce nouveau jeton,
- Indiquer une date d'expiration (maximum 12 mois de validité),
- Choisir les permissions associées au jeton.

Les détails concernant votre jeton sont alors affichés. __Attention, il n'est plus possible d'y accéder a posteriori.__

Si vous ne notez pas ces informations, vous devrez détruire et recréer le jeton.

![](images/shiva_profil_004.png)

Pour une question de sécurité, il est recommandé de créer plusieurs tokens ayant chacun une utilité spécifique (un token pour chaque application ou chaque processus métier) plutôt que de créer 1 token avec l'ensemble des droits.

Vous voyez ensuite le nouveau jeton créé et sa future date d'expiration.

![](images/shiva_profil_005.png)

## Accesso al portale API

La documentazione OpenAPI 3.0 (Swagger) delle API della console Cloud Temple è disponibile direttamente nell'applicazione:

![](images/shiva_api_001.png)

L'accesso alle API richiede l'autenticazione. Una volta autenticati, tutte le operazioni devono avere l'intestazione
__'Authorization'__ con il bearer access token ottenuto nella fase di autenticazione.

L'URL dei punti di accesso è direttamente fornito in __Swagger__ (nell'oggetto "Servers" di ciascuna pagina delle API).

## Le attività

Il monitoraggio delle richieste di tipo scrittura (POST, PUT, PATCH, DELETE) è garantito attraverso la gestione delle attività. Ogni richiesta di questo tipo genera automaticamente un'attività associata. Un codice di stato HTTP 201 conferma la creazione riuscita dell'attività. L'identificativo unico di questa attività viene restituito nelle intestazioni della risposta, sotto la chiave 'Location'.

![](images/shiva_api_002.png)

Una volta recuperato l'identificativo, è possibile accedere ai dettagli dell'attività utilizzando l'API del modulo Attività:

![](images/shiva_api_003.png)

Il contenuto dell'attività include tutte le informazioni essenziali per identificare l'operazione, la sua data di esecuzione, nonché il suo stato di avanzamento. Ecco il modello di un'attività:

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

L'oggetto **state** può assumere diverse forme a seconda dello stato dell'attività, come segue:

**waiting**, stato prima che l'operazione inizi:
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

La console Cloud Temple definisce __dei limiti sul volume di richieste__ che un utente può inviare 
all'API in un periodo di tempo determinato. L'imposizione di questi limiti di frequenza è una misura comune nella gestione delle API, adottata per diversi motivi essenziali:

- **Prevenzione degli abusi**: Questi limiti contribuiscono a mantenere l'integrità dell'API prevenendo usi
abusivi o inopportuni che potrebbero compromettere il suo funzionamento.
- **Garanzia della qualità del servizio**: Regolando l'accesso all'API, assicuriamo una distribuzione equa 
delle risorse, permettendo a tutti gli utenti di beneficiare di un'esperienza stabile e performante.

Prendiamo l'esempio di uno script mal progettato o inefficace che tenta ripetutamente di chiamare l'API,
rischiando di saturare le risorse e di degradare le prestazioni. Stabilendo dei limiti di richieste,
preveniamo queste situazioni e assicuriamo il mantenimento di __un servizio fluido e ininterrotto__ per tutta la nostra clientela.

### Quali sono i limiti di velocità per l'API della console Cloud Temple?

Applichiamo delle restrizioni quantitative sulle interazioni degli utenti con la console 
per ogni prodotto.

I limiti sono definiti in __richieste al secondo (r/s) per IP di origine__. Al superamento del limite, il sistema risponderà
con un codice errore HTTP 429, segnalando che è stato superato il limite di richieste consentite.

Ecco i limiti definiti:

| Prodotto             | Soglia limite |
|----------------------|--------------|
| Console Cloud Temple | 60 r/s       |
| Identità (IAM)       | 60 r/s       |
| IaaS - Calcolo       | 60 r/s       |
| IaaS - Archiviazione | 20 r/s       |
| IaaS - Backup        | 60 r/s       |
| PaaS - S3            | 60 r/s       |
| PaaS - Openshift     | 60 r/s       |
| Rete                 | 60 r/s       |
| Hosting              | 60 r/s       |

### Come funzionano i limiti di velocità?

Se il numero di richieste inviate a un punto d'API supera il limite consentito, il punto d'API reagirà restituendo 
__un codice di risposta HTTP 429__. Questo codice indica che l'utente ha superato il numero di richieste permesse.
Quando ciò avviene, il punto d'API fornirà anche un oggetto JSON come risposta,
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

Si raccomanda di limitare il numero di chiamate API effettuate dalla vostra automazione al fine di restare sotto 
il limite di velocità fissato per il punto di applicazione.

Questa situazione si verifica spesso quando più richieste sono eseguite in parallelo,
utilizzando più processi o thread.

Esistono diversi modi per migliorare l'efficienza della vostra automazione, tra cui l'uso di meccanismi
di __caching__ e l'implementazione di __un sistema di retry con backoff progressivo__. Questo metodo consiste
nell'effettuare una breve pausa quando si incontra un errore di limite di velocità, quindi riprovare la richiesta.
Se la richiesta fallisce ancora, la durata della pausa aumenta progressivamente fino a quando la richiesta non riesce
o fino a quando viene raggiunto un numero massimo di retry.

Questo approccio presenta molti vantaggi:

- __Il backoff progressivo__ garantisce che i primi tentativi siano eseguiti rapidamente, mentre prevede pause più lunghe in caso di errore ripetuto.
- L'aggiunta di __una variazione casuale__ alla pausa contribuisce a evitare che tutti i tentativi avvengano contemporaneamente.

È importante notare che __le richieste fallite non influiscono sul vostro limite di velocità__.
Tuttavia, inviare continuamente una richiesta potrebbe non essere una soluzione sostenibile a lungo termine,
poiché questo comportamento potrebbe essere modificato in futuro. Vi raccomandiamo quindi di non dipendere esclusivamente da questo meccanismo.

Le librerie __[Backoff](https://pypi.org/project/backoff/)__ e __[Tenacity](https://pypi.org/project/tenacity/)__ in Python
sono dei buoni punti di partenza per implementare strategie di backoff.