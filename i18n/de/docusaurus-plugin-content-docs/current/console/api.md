---
title: API-Dokumentation
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

## API-Schlüssel

Der __API-Schlüssel__ ermöglicht die Authentifizierung, wenn Sie Anfragen an die API stellen möchten. Die Erstellung eines API-Schlüssels, auch bekannt als __Personal Access Token (PAT)__,
ist eine sichere Methode, um sich an die Shiva-APIs anzumelden, ohne eine grafische Benutzeroberfläche nutzen zu müssen. Jeder dieser Tokens ist mit einem Tenant und dem Benutzer verknüpft, der ihn erstellt hat.

Die Erstellung dieses Tokens erfolgt über Ihr Konto. Es ist möglich, mehrere Schlüssel zu generieren und für jeden die Berechtigungen entsprechend Ihren Rechten einzurichten.

Um einen API-Schlüssel zu erstellen, klicken Sie einfach auf Ihr __Profil__:

<img src={ShivaProfil001} />

Im Profilmenü klicken Sie auf __'Persönlichen Zugangstoken erstellen'__.

<img src={ShivaProfil003} />

Sie sehen nun alle API-Schlüssel, die für diesen Benutzer in diesem Tenant erstellt wurden. Klicken Sie auf __'Neuen persönlichen Zugangstoken erstellen'__.

<img src={ShivaProfil002} />

Sie müssen nun Folgendes angeben:

- Den Namen für diesen neuen Token,
- ein Ablaufdatum (maximal 12 Monate Gültigkeit),
- die zugehörigen Berechtigungen auswählen.

Anschließend werden die Details Ihres Tokens angezeigt. __Achtung: Der Zugriff auf diese Informationen ist nachträglich nicht mehr möglich.__

Wenn Sie diese Informationen nicht notieren, müssen Sie den Token löschen und neu erstellen.

<img src={ShivaProfil004} />

Aus Sicherheitsgründen wird empfohlen, mehrere Tokens zu erstellen, die jeweils einer spezifischen Aufgabe dienen (z. B. ein Token pro Anwendung oder pro Geschäftsprozess), anstatt einen einzigen Token mit allen Berechtigungen zu erstellen.

Sie sehen nun den neu erstellten Token und sein zukünftiges Ablaufdatum.

<img src={ShivaProfil005} />

:::info Lebenszyklus des Authentifizierungstokens
Wenn Sie Ihren **Personal Access Token (PAT)** verwenden, um sich bei der API zu authentifizieren, erhalten Sie daraufhin einen Zugangstoken zurück. Es ist wichtig zu beachten, dass dieser Zugangstoken ein **JSON Web Token (JWT)** mit begrenzter Gültigkeitsdauer ist.

-   **Gültigkeitsdauer**: Jeder JWT ist für eine Dauer von **5 Minuten** gültig.
-   **Überprüfung**: Sie können Datum der Ausstellung (`iat`) und Ablaufdatum (`exp`) Ihres Tokens überprüfen, indem Sie es decodieren. Tools wie [jwt.io](https://jwt.io) ermöglichen dies einfach und schnell.

Sobald der Token abgelaufen ist, müssen Sie sich erneut mit Ihrem PAT authentifizieren, um einen neuen Token zu erhalten. Es wird daher empfohlen, diesen Lebenszyklus in Ihren Skripten und Anwendungen zu verwalten, indem Sie eine automatische Erneuerung des Tokens vorsehen.
:::

## Access to the API Portal

The OpenAPI 3.0 (Swagger) documentation for the Cloud Temple console APIs is available directly within the application:

<img src={ShivaApi001} />

Access to the APIs requires authentication. Once authenticated, all operations must include the header  
__'Authorization'__ with the bearer access token obtained during the authentication phase.

The URLs for the endpoints are provided directly in __Swagger__ (in the "Servers" object on each API page).

## Activities

The tracking of write-type requests (POST, PUT, PATCH, DELETE) is handled through activity management. Each such request automatically generates a corresponding activity. A HTTP status code 201 confirms the successful creation of the activity. The unique identifier of this activity is returned in the response headers under the key 'Location'.

<img src={ShivaApi002} />

Once the identifier has been retrieved, it is possible to access the activity details using the Activity module's API:

<img src={ShivaApi003} />

The activity content includes all essential information needed to identify the operation, its execution date, and its current progress status. Here is the model of an activity:

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

The __state__ object can take different forms depending on the activity's status, as follows:

__waiting__, status before the operation has started:

```
    waiting: {}
```
__running__, status while the operation is in progress:

```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
__failed__, status if the operation has failed:

```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
__completed__, status if the operation has finished successfully:

```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

__Note: The resource's UUIDv4 identifier is available in the activity result once the activity has completed.__

## API limits

### Why limits?

The Cloud Temple console sets __caps on the number of requests__ a user can send to the API within a given time period. Implementing these rate limits is a common practice in API management, adopted for several essential reasons:

- __Prevention of abuse__: These limits help safeguard the API's integrity by preventing abusive or careless usage that could compromise its operation.
- __Guarantee of service quality__: By regulating API access, we ensure an equitable distribution of resources, allowing all users to enjoy a stable and high-performing experience.

Consider a poorly designed or inefficient script making repeated API calls, risking resource exhaustion and performance degradation. By setting request thresholds, we prevent such scenarios and ensure __a smooth, uninterrupted service__ for our entire customer base.

### What are the rate limits for the Cloud Temple Console API?

We apply quantitative restrictions on user interactions with the console for each product.

The limits are defined in __requests per second (r/s) and per source IP__. Once the threshold is exceeded, the system responds with an HTTP 429 error code, indicating that the allowed number of requests has been surpassed.

The following limits are in place:

| Product | Limit Threshold |
|---|---|
| Cloud Temple Console | 25 r/s |
| Identity (IAM) | 25 r/s |
| IaaS VMware | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastion | 25 r/s |
| Networking | 25 r/s |
| Hosting | 25 r/s |
| Marketplace | 25 r/s |
| Support | 25 r/s |
| Notification | 25 r/s |
| LLMaaS | 25 r/s |

### Specific Routes

Certain API endpoints, particularly those related to authentication or sensitive actions, have more restrictive limits to enhance security and ensure stability.

| Route | Limit Threshold |
|---|---|
| Authentication (IAM) | 5 r/s |
| IaaS - Storage (Datastores) | 20 r/s |
| Marketplace (Contact) | 1 r/min - 5 r/h |

### How Rate Limits Work

If the number of requests sent to an API endpoint exceeds the allowed limit, the API endpoint will respond by returning  
__an HTTP 429 status code__. This code indicates that the user has exceeded the permitted number of requests.  
When this occurs, the API endpoint will also provide a JSON object as part of the response,  
containing detailed information about the applied rate limit:

```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```

### How to avoid making too many requests?

It is recommended to limit the number of API calls made by your automation to stay below the rate limit set for the endpoint.

This situation often occurs when multiple requests are executed in parallel, using several processes or threads.

There are several ways to improve the efficiency of your automation, including using __caching mechanisms__ and implementing a __retry system with exponential backoff__. This method involves taking a short pause when a rate limit error is encountered, then retrying the request. If the request fails again, the pause duration is progressively increased until the request succeeds or a maximum number of retries is reached.

This approach offers several advantages:

- __Exponential backoff__ ensures that initial attempts are made quickly, while longer delays are applied in case of repeated failures.
- Adding a __random variation__ to the pause helps prevent all retry attempts from occurring simultaneously.

It is important to note that __failed requests do not affect your rate limit__. However, continuously retrying a request may not be a sustainable long-term solution, as this behavior could change in the future. Therefore, we recommend not relying solely on this mechanism.

Python libraries __[Backoff](https://pypi.org/project/backoff/)__ and __[Tenacity](https://pypi.org/project/tenacity/)__ are good starting points for implementing retry strategies.

## API Endpoint Lifecycle

Information about the evolution of API endpoints is available in the release notes:

<img src={ShivaApi004} />

You will find a list of endpoints that are deprecated, organized by activity.

Additionally, deprecated endpoints will appear in our API as follows:  
__~~this/is/an/endpoint~~__ along with a definitive deletion date in the description.