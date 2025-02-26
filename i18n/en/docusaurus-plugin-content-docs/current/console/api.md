---
title: API Documentation
---


## API Keys

The __API key__ allows for authentication when making requests to the API. Generating an API key, also known as a __Personal Access Token (PAT)__, is a secure way to connect to the Shiva APIs without using a graphical interface. Each of these tokens is linked to a tenant and the user who created it.

Creating this token is done from your account. It is possible to generate multiple keys and configure permissions for each one within the limits of your rights.

To create an API key, simply __click on your profile__:

![](images/shiva_profil_001.png)

In the profile menu, click on __'Personal Access Token'__

![](images/shiva_profil_003.png)

You will then see all the API keys created for this user in this tenant. Click on __'New personal access token'__

![](images/shiva_profil_002.png)

You will need to:

- Provide the name of this new token,
- Provide an expiration date (maximum 12 months validity),
- Choose the permissions associated with the token.

The details of your token will then be displayed. __Note that it will no longer be accessible later.__

If you do not note this information, you will need to destroy and recreate the token.

![](images/shiva_profil_004.png)

For security reasons, it is recommended to create several tokens each having a specific utility (one token for each application or business process) rather than creating one token with all rights.

You will then see the new token created and its future expiration date.

![](images/shiva_profil_005.png)

## API Portal Access

The OpenAPI 3.0 (Swagger) documentation of the Cloud Temple console APIs is directly available within the application:

![](images/shiva_api_001.png)

Access to the APIs requires authentication. Once authenticated, all operations must have the header
__'Authorization'__ with the bearer access token obtained during the authentication phase.

The URL of the access points is directly given in __Swagger__ (in the "Servers" object of each API page).

## Activities

Tracking of write-type requests (POST, PUT, PATCH, DELETE) is ensured via activity management. Each request of this type automatically generates an associated activity. An HTTP status code 201 confirms the successful creation of the activity.
The unique identifier of this activity is returned in the response headers, under the 'Location' key.

![](images/shiva_api_002.png)

Once the identifier is retrieved, it is possible to access the activity details using the Activity module's API:

![](images/shiva_api_003.png)

The content of the activity includes all essential information to identify the operation, its execution date, and its progress state. Here is the model of an activity:

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

The **state** object can take different forms depending on the activity status, namely:

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
**failed**, state if the operation has failed:
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, state if the operation is completed:
```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

**Note: The Identifier (UUIDv4) of the created resource is available in the activity result once it is completed.**

## API Limits

### Why limits?

The Cloud Temple console defines __ceiling limits on the volume of requests__ that a user can send to the API over a determined period. Establishing these frequency limits is a common measure in API management, adopted for several essential reasons:

- **Abuse Prevention**: These limits help preserve the integrity of the API by preventing abusive or careless usage that could compromise its operation.
- **Quality of Service Assurance**: By regulating API access, we ensure an equitable distribution of resources, allowing all users to enjoy a stable and performant experience.

For example, a poorly designed or inefficient script that makes repetitive calls to the API, risking to saturate resources and degrade performance. By setting request thresholds, we prevent these situations and ensure the maintenance of __a smooth and uninterrupted service__ for all our customers.

### What are the rate limits for the Cloud Temple console API?

We apply quantitative restrictions on user interactions with the console
for each product.

The limits are defined in __requests per second (r/s) and per source IP__. Beyond the threshold limit, the system will respond
with an HTTP error code 429, indicating that the allowed request limit has been exceeded.

Here are the defined limits:

| Product              | Limit threshold |
|----------------------|------------------|
| Cloud Temple Console | 60 r/s           |
| Identity (IAM)       | 60 r/s           |
| IaaS - Compute       | 60 r/s           |
| IaaS - Storage       | 20 r/s           |
| IaaS - Backup        | 60 r/s           |
| PaaS - S3            | 60 r/s           |
| PaaS - Openshift     | 60 r/s           |
| Network              | 60 r/s           |
| Hosting              | 60 r/s           |

### How do rate limits work?

If the number of requests sent to an API endpoint exceeds the allowed limit, the API endpoint will respond by returning
__an HTTP 429 response code__. This code indicates that the user has exceeded the permissible request limit.
When this happens, the API endpoint will also provide a JSON object as a response,
which will contain detailed information about the applied limitation:
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### How can you avoid making too many requests?

It is recommended to limit the number of API calls made by your automation to stay below
the set rate limit for the endpoint.

This situation often occurs when multiple requests are executed in parallel,
using multiple processes or threads.

There are several ways to improve the efficiency of your automation, particularly by using __caching mechanisms__ and implementing __a retry system with progressive backoff__. This method involves taking a short pause when a rate limit error is encountered, then retrying the request.
If the request fails again, the pause duration is progressively increased until the request succeeds
or until the maximum number of retries is reached.

This approach has many advantages:

- __Progressive backoff__ ensures that initial attempts are made quickly, while allowing for longer delays in case of repeated failure.
- Adding a __random variation__ to the pause helps prevent all attempts from occurring simultaneously.

It is important to note that __unsuccessful requests do not affect your rate limit__.
However, continuously retrying a request may not be a viable long-term solution,
as this behavior could be modified in the future. We therefore recommend not relying exclusively on this mechanism.

The __[Backoff](https://pypi.org/project/backoff/)__ and __[Tenacity](https://pypi.org/project/tenacity/)__ libraries in Python
are good starting points for implementing backoff strategies.

## API Endpoint Lifecycle

Information on the evolution of API endpoints is available in the release notes:

![](images/shiva_api_004.jpg)

You will find a list of endpoints that are deprecated activity by activity.

Additionally, the deprecated endpoints will appear in this manner on our APIs:
__~~this/is/an/endpoint~~__ along with a definitive removal date in the description.