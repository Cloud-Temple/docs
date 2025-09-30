---
title: Documentation API
---
import ShivaProfil001 from './images/shiva_profil_001.png';
import ShivaProfil002 from './images/shiva_profil_002.png';
import ShivaProfil003 from './images/shiva_profil_003.png';
import ShivaProfil004 from './images/shiva_profil_004.png';
import ShivaProfil005 from './images/shiva_profil_005.png';
import ShivaApi001 from './images/shiva_api_001.png';
import ShivaApi002 from './images/shiva_api_002.png';
import ShivaApi003 from './images/shiva_api_003.png';
import ShivaApi004 from './images/shiva_api_004.png';

## API Keys

The __API Key__, also known as a __Personal Access Token (PAT)__, serves as an authentication method when you need to make requests to the Shiva API. Generating an API key is a secure way to connect to Shiva's APIs without relying on a graphical interface. Each token is tied to a tenant and the user who created it.

Creating these tokens can be done from your account. You can generate multiple keys, configuring permissions for each within the limits of your access rights.

To create an API key, simply:

<img src={ShivaProfil001} alt="Shiva Profil 001" />

From the profile menu, select __'Personal Access Token'__.

<img src={ShivaProfil003} alt="Shiva Profil 003" />

You'll then see a list of all API keys created for this user in this tenant. Click on __'New Personal Access Token'__.

<img src={ShivaProfil002} alt="Shiva Profil 002" />

You will need to:

- Provide a name for the new token,
- Specify an expiration date (maximum 12 months of validity),
- Choose the permissions associated with the token.

The details of your token are then displayed. **Note**: You cannot view these later after creation.

If you miss noting these details, you'll need to destroy and regenerate the token.

<img src={ShivaProfil004} alt="Shiva Profil 004" />

For security reasons, it's recommended to create multiple tokens with specific purposes (one for each application or business process) rather than using one token with all permissions.

You will then see the newly created token and its upcoming expiration date.

<img src={ShivaProfil005} alt="Shiva Profil 005" />

## Accessing the Cloud Temple API Portal

The OpenAPI 3.0 (Swagger) documentation for Cloud Temple's APIs is directly accessible within the application:

<img src={ShivaApi001} />

Access to these APIs requires authentication. Once authenticated, all operations must include the `Authorization` header with the bearer access token obtained during the authentication phase.

The API endpoints' URLs are directly provided in Swagger (within the "Servers" object of each API page).

## Activities

The tracking of write requests (POST, PUT, PATCH, DELETE) is handled through the Activity Management. Each such request automatically generates an associated activity. A HTTP status code 201 confirms the successful creation of the activity. The unique identifier of this activity is returned in the response headers under the 'Location' key.

<img src={ShivaApi002} />

Once the identifier is retrieved, it's possible to access the activity details via the Activity Module API:

<img src={ShivaApi003} />

The content of an activity includes all essential information for identifying the operation, its execution date, and its progress status. Here’s a template for an activity:

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

The `__state__` object can take different forms depending on the activity's status:

- __waiting__, state before operation commencement:
  ```json
  waiting: {}
  ```

- __running__, state during operation execution:
  ```json
  running: {
    status: string;
    startDate: Date;
    progression: number;
  }
  ```

- __failed__, state if the operation failed:
  ```json
  failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
  }
  ```

- __completed__, state if the operation is finished:
  ```json
  completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
  }
  ```

__Note:__ The identifier (UUIDv4) of the created resource is available in the activity's result once it’s completed.

## API Limits

### Why are there limits?

The Cloud Temple console defines __limits on the volume of requests__ a user can make to the API over a specific period. The introduction of these rate limits is a common practice in API management, adopted for several essential reasons:

- __Abuse Prevention__: These limits help safeguard the integrity of the API by preventing abusive or improper use that could compromise its operation.
- __Ensuring Quality of Service__: By regulating access to the API, we ensure an equitable distribution of resources, allowing all users to benefit from a stable and high-performance experience.

For example, a poorly designed or inefficient script making repetitive calls to the API could risk saturating resources and degrading performance. By establishing request thresholds, we prevent these situations and ensure the maintenance of a __smooth and uninterrupted service__ for all our customers.

### What are the rate limits for the Cloud Temple console API?

We apply quantitative restrictions on user interactions with the console for each product.

The limits are defined in __requests per second (r/s) and by source IP__. Beyond the limit threshold, the system will respond with an HTTP 429 error code, signaling that the authorized request limit has been exceeded.

Here are the defined limits:

| Product | Limit |
|---|---|
| Cloud Temple Console | 25 r/s |
| Identity (IAM) | 25 r/s |
| IaaS VMware | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| Openshift | 25 r/s |
| Bastion | 25 r/s |
| Network | 25 r/s |
| Hosting | 25 r/s |
| Marketplace | 25 r/s |
| Support | 25 r/s |
| Notification | 25 r/s |
| LLMaaS | 25 r/s |

### Specific Routes

Certain specific API endpoints, particularly those related to authentication or sensitive actions, have more restrictive limits to enhance security and ensure stability.

| Route | Limit |
|---|---|
| Authentication (IAM) | 5 r/s |
| IaaS - Storage (Datastores) | 20 r/s |
| Marketplace (Contact) | 1 r/min - 5 r/h |

### How do rate limits work?

If the number of requests sent to an API endpoint exceeds the allowed limit, that API will respond with a HTTP 429 status code. This code signifies that the user has surpassed the permitted request count. Alongside this status code, the API will provide a JSON response containing detailed information about the applied limitation:

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

### How to Avoid Over-Requesting

It's advisable to restrict the number of API calls made by your automation to stay below the rate limit at the endpoint.

This often occurs when multiple requests are executed concurrently, using various processes or threads.

Several methods can enhance the efficiency of your automation, such as implementing __caching__ mechanisms and establishing a __retry system with gradual escalation__. This approach involves brief pauses upon encountering rate limit errors, followed by retrying the request. If the request fails again, the pause duration is incrementally increased until success or a maximum number of retries is reached.

This method offers several benefits:

- The __gradual escalation__ ensures initial attempts are made quickly while anticipating longer delays with repeated failures.
- Incorporating __random variation__ in pause times helps prevent all attempts from happening simultaneously.

It's crucial to understand that unsuccessful requests do not impact your rate limit. However, continuously resending the same request might not be a sustainable long-term solution, as this behavior could change in the future. We recommend not relying solely on this mechanism.

Python libraries like __Backoff__ ([https://pypi.org/project/backoff/]) and __Tenacity__ ([https://pypi.org/project/tenacity/]) are excellent starting points for implementing these strategies.

## Lifecycle of an API Endpoint

Details regarding the evolution of our API endpoints can be found in the release notes:

<img src={ShivaApi004} alt="Shiva API 004" />

You will find a list of endpoints that are deprecated activity by activity.

Additionally, deprecated endpoints appear on our APIs as follows: `__this/is/an/endpoint__` along with a definitive removal date in the description.
