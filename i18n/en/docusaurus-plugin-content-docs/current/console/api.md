## API Limits

### How do rate limits work?

If the number of requests sent to an API endpoint exceeds the allowed limit, the API endpoint will respond by returning
__an HTTP 429 response code__. This code indicates that the user has exceeded the number of allowed requests.
When this occurs, the API endpoint will also provide a JSON object as a response,
which will contain detailed information about the applied limitation:

```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```

## API Keys

The __API Key__ allows you to authenticate when you want to make requests to the API. Generating an API key, also called a __Personal Access Token (PAT)__,
is a secure way to connect to Shiva APIs without using a graphical interface. Each of these tokens is linked to a tenant and the user who created it.

Creating this token is done from your account. It is possible to generate multiple keys and configure permissions for each within the limits of your rights.

To create an API key, simply __click on your profile__:

<img src={ShivaProfil001} />

In the profile menu, click on __'Personal Access Token'__

<img src={ShivaProfil003} />

You will then see all the API keys created for this user in this tenant. Click on __'New Personal Access Token'__

<img src={ShivaProfil002} />

You must then:

- Specify the name of this new token,
- Specify an expiration date (maximum 12 months of validity),
- Choose the permissions associated with the token.

The details of your token are then displayed. __Warning, you will no longer be able to access it afterward.__

If you don't note these information, you will have to destroy and recreate the token.

<img src={ShivaProfil004} />

For security reasons, it is recommended to create multiple tokens with specific purposes (one token for each application or business process) rather than creating 1 token with all rights.

You then see the new token created and its future expiration date.

<img src={ShivaProfil005} />

### How to Avoid Making Too Many Requests?

It is recommended to limit the number of API calls made by your automation to stay below the rate limit set for the endpoint.

This situation often occurs when multiple requests are executed in parallel, using multiple processes or threads.

There are several ways to improve the efficiency of your automation, including using __caching__ mechanisms and implementing a __retry system with exponential backoff__. This method involves taking a short pause when a rate limit error is encountered, then retrying the request. If the request fails again, the pause duration is gradually increased until the request succeeds or a maximum number of retries is reached.

This approach offers several advantages:

- __Exponential backoff__ ensures that initial attempts are made quickly, while planning longer delays in case of repeated failures.
- Adding a __random variation__ to the pause helps avoid simultaneous attempts.

It is important to note that __failed requests do not affect your rate limit__. However, continuously resubmitting a request may not be a viable long-term solution, as this behavior could change in the future. We therefore recommend not relying solely on this mechanism.

The Python libraries __[Backoff](https://pypi.org/project/backoff/)__ and __[Tenacity](https://pypi.org/project/tenacity/)__ are good starting points for implementing backoff strategies.

## API Endpoint Lifecycle

The evolution information for API endpoints is available in the release notes:

<img src={ShivaApi004} />

You will find the list of endpoints that are deprecated activity by activity.

Moreover, the deprecated endpoints will appear in the following way on our APIs: __~~this/is/an/endpoint~~__ along with a final deletion date in the description.

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

## Access to the API Portal

The OpenAPI 3.0 (Swagger) documentation for the Cloud Temple console APIs is available directly in the application:

<img src={ShivaApi001} />

Access to the APIs requires authentication. Once authenticated, all operations must have the header
__'Authorization'__ with the bearer access token obtained during the authentication phase.

The URL for the endpoints is directly provided in __Swagger__ (in the "Servers" object of each API page).

## Activities

The tracking of write-type requests (POST, PUT, PATCH, DELETE) is handled through activity management. Each of these requests automatically generates a corresponding activity. An HTTP 201 status code confirms the successful creation of the activity. The unique identifier of this activity is returned in the response headers, under the 'Location' key.

<img src={ShivaApi002} />

Once the identifier is retrieved, it is possible to access the activity details using the Activity module API:

<img src={ShivaApi003} />

The activity content includes all essential information to identify the operation, its execution date, and its progress status. Here is the activity model:

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

The __state__ object can take different forms depending on the activity status, namely:

__waiting__, state before the operation starts:

```
    waiting: {}
```
__running__, state when the operation is in progress:

```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
__failed__, state if the operation has failed:

```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
__completed__, state if the operation is finished:

```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

__Note: The identifier (UUIDv4) of the created resource is available in the activity result once it is completed.__

### Why limits?

The Cloud Temple console defines __ceilings on the volume of requests__ that a user can send to the API over a determined period. Implementing these frequency ceilings is a common practice in API management, adopted for several essential reasons:

- __Prevention of abuse__: These limits contribute to preserving the API's integrity by preventing abusive or careless usage that could compromise its operation.
- __Ensuring service quality__: By regulating access to the API, we ensure a fair distribution of resources, allowing all users to benefit from a stable and performant experience.

Consider the example of a poorly designed or inefficient script that attempts repeated API calls, risking to overload resources and degrade performance. By establishing request thresholds, we prevent these situations and ensure __a smooth and uninterrupted service__ for our entire customer base.

### What are the rate limits for the Cloud Temple console API?

We apply quantitative restrictions on user interactions with the console for each product.

The limits are defined in __requests per second (r/s) and per source IP__. Beyond the threshold, the system will respond
with an HTTP 429 error code, indicating that the allowed request limit has been exceeded.

Here are the defined limits:

| Product              | Limit threshold |
|----------------------|-----------------|
| Cloud Temple Console | 60 r/s          |
| Identity (IAM)       | 60 r/s          |
| IaaS - Compute       | 60 r/s          |
| IaaS - Storage       | 20 r/s          |
| IaaS - Backup        | 60 r/s          |
| PaaS - S3            | 60 r/s          |
| PaaS - Openshift     | 60 r/s          |
| Network              | 60 r/s          |
| Hosting              | 60 r/s          |