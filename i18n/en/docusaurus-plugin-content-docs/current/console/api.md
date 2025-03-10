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
import ShivaApi004 from './images/shiva_api_004.jpg'

## API Keys

The __API key__ allows authentication when you want to make requests to the API. The generation of an API key, also called __Personal Access Token (PAT)__,
is a secure way to connect to Shiva APIs without going through a graphical interface. Each of these tokens is linked to a tenant and the user who created it.

The creation of this token is done from your account. It is possible to generate multiple keys and configure permissions for each within the limits of your rights.

To create an API key, simply __click on your profile__:

<img src={ShivaProfil001} />

In the profile menu, click on __'Personal Access Token'__

<img src={ShivaProfil003} />

You will then see all the API keys that have been created for this user in this tenant. Click on __'New personal access token'__

<img src={ShivaProfil002} />

You must then:

- Provide a name for this new token,
- Provide an expiration date (maximum 12 months validity),
- Choose the permissions associated with the token.

The details concerning your token are then displayed. __Be careful, it will not be possible to access them afterward.__

If you do not note this information, you will have to destroy and recreate the token.

<img src={ShivaProfil004} />

For security reasons, it is recommended to create multiple tokens each having a specific use (a token for each application or each business process) rather than creating 1 token with all permissions.

You then see the new token created and its future expiration date.

<img src={ShivaProfil005} />

## Access to the API Portal

The OpenAPI 3.0 (Swagger) documentation of the Cloud Temple console APIs is directly available in the application:

<img src={ShivaApi001} className="img-large" />

Access to the APIs requires authentication. Once authenticated, all operations must have the header
__'Authorization'__ with the bearer access token obtained during the authentication phase.

The URL for the endpoints is directly given in __Swagger__ (in the "Servers" object on each API page).

## Activities

The tracking of write-type requests (POST, PUT, PATCH, DELETE) is ensured via activity management. Each request of this type automatically generates an associated activity. An HTTP status code 201 confirms the successful creation of the activity. The unique identifier of this activity is returned in the response headers, under the 'Location' key.

<img src={ShivaApi002} />

Once the identifier is retrieved, it is possible to access the details of the activity using the Activity module API:

<img src={ShivaApi003} />

The content of the activity includes all the essential information to identify the operation, its execution date, and its progress status. Here is the model of an activity:

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

The **state** object can take various forms depending on the activity's status, namely:

**waiting**, state before the operation has started:
```
    waiting: {}
```
**running**, state when the operation is in progress:
```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
**failed**, state if the operation failed:
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, state if the operation is complete:
```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

**Note: The (UUIDv4) Identifier of the created resource is available in the activity result once it is completed.**

## API Limits

### Why limits?

The Cloud Temple console defines __caps on the volume of requests__ a user can send to the API over a specified time period. Setting these frequency caps is a common measure in API management, adopted for several essential reasons:

- **Prevention of abuse**: These limits help protect the API's integrity by preventing abusive or careless uses that could compromise its functionality.
- **Assuring quality of service**: By regulating API access, we ensure a fair distribution of resources, allowing all users to enjoy a stable and efficient experience.

For example, a poorly designed or inefficient script that repeatedly calls the API could saturate resources and degrade performance. By establishing request thresholds, we prevent these situations and ensure __a smooth, uninterrupted service__ for all our clients.

### What are the rate limits for Cloud Temple console API?

We apply quantitative restrictions on user interactions with the console for each product.

Limits are defined in __requests per second (r/s) and by source IP__. Beyond the threshold limit, the system will respond
with an HTTP 429 error code, indicating that the authorized request limit has been exceeded.

Here are the defined limits:

| Product              | Threshold Limit |
|----------------------|--------------|
| Console Cloud Temple | 60 r/s       |
| Identity (IAM)       | 60 r/s       |
| IaaS - Compute       | 60 r/s       |
| IaaS - Storage       | 20 r/s       |
| IaaS - Backup        | 60 r/s       |
| PaaS - S3            | 60 r/s       |
| PaaS - Openshift     | 60 r/s       |
| Network              | 60 r/s       |
| Hosting              | 60 r/s       |

### How do rate limits work?

If the number of requests sent to an API endpoint exceeds the allowed limit, the API endpoint will respond by returning
__an HTTP 429 response code__. This code indicates that the user has exceeded the number of permitted requests.
When this occurs, the API endpoint will also provide a JSON object as a response,
containing detailed information about the applied limitation:
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### How to avoid making too many requests?

It is recommended to limit the number of API calls made by your automation in order to stay below the rate limit set for the endpoint.

This situation often arises when multiple requests are executed in parallel, using multiple processes or threads.

There are several ways to improve the efficiency of your automation, particularly by using __caching__ mechanisms and implementing __a backoff retry system__. This method involves taking a short pause when a rate limit error is encountered, then retrying the request. If the request fails again, the pause duration is progressively increased until the request succeeds or until a maximum number of retries is reached.

This approach has many advantages:

- __Backoff__ ensures that early attempts are made quickly, while accounting for longer delays in case of repeated failure.
- Adding __random variation__ to the pause helps avoid all retry attempts occurring simultaneously.

It is important to note that __unsuccessful requests do not affect your rate limit__.
However, continuously re-sending a request might not be a viable long-term solution, as this behavior could be altered in the future. Therefore, we recommend not relying solely on this mechanism.

The Python libraries __[Backoff](https://pypi.org/project/backoff/)__ and __[Tenacity](https://pypi.org/project/tenacity/)__ are good starting points for implementing backoff strategies.

## API Endpoint Lifecycle

Information on API endpoint updates is available in the release notes:

<img src={ShivaApi004} className="img-large" />

You will find the list of endpoints that are deprecated activity by activity.

Additionally, deprecated endpoints will appear in this manner on our APIs:
__~~this/is/an/endpoint~~__ along with a definitive deletion date in the description.