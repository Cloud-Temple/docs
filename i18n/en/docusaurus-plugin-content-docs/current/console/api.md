---
title: API Documentation
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

The __API key__ allows you to authenticate when making requests to the API. Generating an API key, also known as a __Personal Access Token (PAT)__, is a secure way to connect to the Shiva APIs without using a graphical interface. Each of these tokens is linked to a specific tenant and the user who created it.

Creating this token is done from your account. You can generate multiple keys and configure permissions for each one, within the limits of your access rights.

To create an API key, simply __click on your profile__:

<img src={ShivaProfil001} />

In the profile menu, click on __'Personal Access Token'__:

<img src={ShivaProfil003} />

You will then see all API keys created for this user within this tenant. Click on __'New Personal Access Token'__:

<img src={ShivaProfil002} />

You must then:

- Provide a name for this new token,
- Set an expiration date (maximum validity of 12 months),
- Select the permissions associated with the token.

The details of your token are then displayed. __Warning: you will no longer be able to access these details afterward.__

If you do not record this information, you will need to delete and recreate the token.

<img src={ShivaProfil004} />

For security reasons, it is recommended to create multiple tokens, each with a specific purpose (one token per application or business process), rather than creating a single token with all permissions.

You will then see the newly created token and its future expiration date.

<img src={ShivaProfil005} />

:::info Token Authentication Lifecycle
When you use your **Personal Access Token (PAT)** to authenticate with the API, you receive in return an access token. It is important to note that this access token is a **JSON Web Token (JWT)** with a limited lifespan.

-   **Lifespan**: Each JWT token is valid for **5 minutes**.
-   **Verification**: You can check the issuance date (`iat`) and expiration date (`exp`) of your token by decoding it. Online tools such as [jwt.io](https://jwt.io) make this easy.

Once the token expires, you must re-authenticate using your PAT to obtain a new one. Therefore, it is recommended to manage this lifecycle in your scripts and applications by implementing automatic token renewal.
:::

## Access to the API Portal

The OpenAPI 3.0 (Swagger) documentation for the Cloud Temple console APIs is available directly within the application:

<img src={ShivaApi001} />

Access to the APIs requires authentication. Once authenticated, all operations must include the header  
__'Authorization'__ with the bearer access token obtained during the authentication phase.

The API endpoint URLs are directly provided in __Swagger__ (within the "Servers" object on each API page).

## Activities

Tracking of write-type requests (POST, PUT, PATCH, DELETE) is handled through activity management. Each such request automatically generates a corresponding activity. A HTTP status code 201 confirms the successful creation of the activity. The unique identifier of this activity is returned in the response headers under the key 'Location'.

<img src={ShivaApi002} />

Once the identifier is retrieved, it is possible to access the activity details using the Activity module API:

<img src={ShivaApi003} />

The activity content includes all essential information to identify the operation, its execution date, and its current progress status. Here is the activity model:

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

The __state__ object can take different forms depending on the activity status, as follows:

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

## API Limits

### Why Limits?

The Cloud Temple console sets __caps on the volume of requests__ an individual user can send to the API within a given time period. Implementing these rate limits is a common practice in API management, adopted for several essential reasons:

- __Prevention of abuse__: These limits help safeguard the API's integrity by preventing abusive or poorly designed usage that could compromise its operation.
- __Guarantee of service quality__: By regulating API access, we ensure a fair distribution of resources, allowing all users to enjoy a stable and high-performing experience.

Consider a poorly designed or inefficient script making repeated calls to the API—this could overwhelm system resources and degrade performance. By setting request thresholds, we prevent such scenarios and ensure a __smooth, uninterrupted service__ for our entire user base.

### What are the rate limits for the Cloud Temple console API?

We apply quantitative restrictions on user interactions with the console for each product.

Limits are defined in __requests per second (r/s) and per source IP__. Once the threshold is exceeded, the system responds with an HTTP 429 error code, indicating that the allowed request limit has been surpassed.

Here are the defined limits:

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

Certain specific API endpoints, particularly those related to authentication or sensitive operations, have more restrictive limits to enhance security and ensure stability.

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

### How to Avoid Making Too Many Requests?

It is recommended to limit the number of API calls made by your automation to stay below the rate limit set for the endpoint.

This situation often occurs when multiple requests are executed in parallel, using several processes or threads.

There are several ways to improve the efficiency of your automation, including using __caching mechanisms__ and implementing a __retry system with exponential backoff__. This method involves taking a short pause when a rate limit error is encountered, then retrying the request. If the request fails again, the pause duration is progressively increased until the request succeeds or a maximum number of retries is reached.

This approach offers several advantages:

- __Exponential backoff__ ensures that initial attempts are made quickly, while longer delays are applied in case of repeated failures.
- Adding a __random variation__ to the pause helps prevent all retry attempts from occurring simultaneously.

It is important to note that __failed requests do not count toward your rate limit__. However, continuously retrying a request may not be a sustainable long-term solution, as this behavior could change in the future. Therefore, we recommend against relying solely on this mechanism.

Python libraries __[Backoff](https://pypi.org/project/backoff/)__ and __[Tenacity](https://pypi.org/project/tenacity/)__ are excellent starting points for implementing retry strategies.

## API Endpoint Lifecycle

Information about the evolution of API endpoints is available in the release notes:

<img src={ShivaApi004} />

You will find a list of deprecated endpoints, organized by activity.

Additionally, deprecated endpoints will appear in our API as follows:  
__~~this/is/an/endpoint~~__ along with a definitive deletion date in the description.