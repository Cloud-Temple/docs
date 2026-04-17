---
title: API Documentation
---
import ShivaProfil001 from '@site/docs/console/images/shiva_profil_001.png'
import ShivaProfil002 from '@site/docs/console/images/shiva_profil_002.png'
import ShivaProfil003 from '@site/docs/console/images/shiva_profil_003.png'
import ShivaProfil004 from '@site/docs/console/images/shiva_profil_004.png'
import ShivaProfil005 from '@site/docs/console/images/shiva_profil_005.png'
import ShivaApi001 from '@site/docs/console/images/shiva_api_001.png'
import ShivaApi002 from '@site/docs/console/images/shiva_api_002.png'
import ShivaApi003 from '@site/docs/console/images/shiva_api_003.png'
import ShivaApi004 from '@site/docs/console/images/shiva_api_004.png'

## Introduction

The Cloud Temple API allows you to create and manage all your cloud resources programmatically. Everything you can do through the Cloud Temple console can also be done via the API, from creating virtual machines to configuring identity and access management.

This documentation guides you through using the Cloud Temple API, from authentication to best practices, including endpoint lifecycle management.

## Quickstart: Your First API Request

:::info[Summary - 3 steps to get started]
1. 🔑 **Generate your PAT** from the console
2. 🚀 **Test with curl** on `/iam/v2/roles`
3. ✅ **Analyze the response** JSON
:::

### Prerequisites

Before starting, you must have a Cloud Temple account with the appropriate permissions to generate API keys.

### Steps

1. **Generate your API key**: Log in to the [Cloud Temple console](https://shiva.cloud-temple.com/login) and generate your Personal Access Token (see [API Keys](#api-keys-personal-access-token) section below).

2. **Test your first request**: Execute the following curl command, replacing `<your-personal-access-token>` with your token:

```bash
curl -X GET \
  -H "Authorization: Bearer <your-personal-access-token>" \
  -H "Content-Type: application/json" \
  "https://shiva.cloud-temple.com/api/iam/v2/roles"
```

3. **Analyze the response**: You will receive the list of IAM roles available in your tenant, allowing you to understand existing permissions.

## Authentication

### API Keys (Personal Access Token)

The __API key__ allows you to authenticate when making API requests. Generating an API key, also known as a __Personal Access Token (PAT)__, is a secure way to connect to Console APIs without using a graphical interface. Each of these tokens is linked to a tenant and the user who created it.

Creating this token is done from your account. You can generate multiple keys and configure permissions for each within the limits of your rights.

#### Create an API Key

To create an API key, simply __click on your profile__:

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

In the profile menu, click on __'Personal Access Token'__

<img src={ShivaProfil003} />

You will then see all the API keys created for this user in this tenant. Click on __'New Personal Access Token'__

<img src={ShivaProfil002} />

You must then:

- Specify the name of this new token,
- Set an expiration date (maximum 12 months validity),
- Choose the permissions associated with the token.

The details of your token are then displayed. __Warning: you will no longer be able to access these details afterward.__

If you don't record this information, you will need to delete and recreate the token.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

For security reasons, it is recommended to create multiple tokens, each with a specific purpose (one token per application or business process) rather than creating one token with all permissions.

You will then see the newly created token and its future expiration date.

<img src={ShivaProfil005} />

:::info[Authentication Token Lifecycle]
When you use your __Personal Access Token (PAT)__ to authenticate with the API, you receive an access token in return. It's important to note that this access token is a __JSON Web Token (JWT)__ with a limited lifespan.

- __Lifespan__: Each JWT token is valid for __5 minutes__.
- __Verification__: You can verify the issuance date (`iat`) and expiration date (`exp`) of your token by decoding it. Online tools like [jwt.io](https://jwt.io) make this easy.

Once the token expires, you will need to re-authenticate with your PAT to obtain a new one. Therefore, it's recommended to manage this lifecycle in your scripts and applications by planning for automatic token renewal.
:::

## API Portal Access

The OpenAPI 3.0 (Swagger) documentation for Cloud Temple console APIs is available directly in the application:

<img src={ShivaApi001} />

API access requires authentication. Once authenticated, all operations must include the __'Authorization'__ header with the bearer access token obtained during the authentication phase.

The endpoint URLs are directly provided in __Swagger__ (in the "Servers" object on each API page).

### Explore Interactive Documentation

The API portal allows you to:

- View all available endpoints by module
- Test requests directly from the interface
- See data models (schemas) for each resource
- View possible response codes for each endpoint

## Endpoint Structure

### URL Format

Cloud Temple API URLs follow a consistent structure:

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{resource}
```

Where:
- `{module}`: The module concerned (compute, iam, network, backup, etc.)
- `{version}`: The API version (v1, v2, etc.)
- `{resource}`: The resource to manipulate (virtual-machines, users, networks, etc.)

### Endpoint Examples

```
# Virtual machines (Compute)
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
POST   https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
PATCH  https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
DELETE https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}

# Identity and access (IAM)
GET    https://shiva.cloud-temple.com/api/iam/v1/users
POST   https://shiva.cloud-temple.com/api/iam/v1/users
GET    https://shiva.cloud-temple.com/api/iam/v1/users/{id}

# Networks
GET    https://shiva.cloud-temple.com/api/network/v1/virtual-networks
POST   https://shiva.cloud-temple.com/api/network/v1/virtual-networks
```

### Module Organization

The Cloud Temple API is organized into functional modules:

| Module | Description | Base URL |
|--------|-------------|----------|
| Cloud Temple Console | General features | `/api/v1/` |
| Identity (IAM) | User and access management | `/iam/v1/` |
| VMware IaaS | VMware virtualization resources | `/compute/v1/` |
| OpenIaaS | Xen Orchestra resources | `/openiaas/v1/` |
| S3 | Object storage | `/s3/v1/` |
| OpenShift | PaaS platform | `/openshift/v1/` |
| Bastion | SSH/RDP bastion appliances | `/bastion/v1/` |
| Network | Level 2 and 3 network management | `/network/v1/` |
| Housing | Colocation and housing | `/housing/v1/` |
| Marketplace | Solutions catalog | `/marketplace/v1/` |
| Support | Tickets and support | `/support/v1/` |
| Notification | Notification system | `/notification/v1/` |
| LLMaaS | Artificial intelligence | `/llmaas/v1/` |

## Activities

Tracking of write-type requests (POST, PUT, PATCH, DELETE) is handled through activity management. Each such request automatically generates an associated activity. An HTTP 201 status code confirms the successful creation of the activity. The unique identifier of this activity is returned in the response headers under the 'Location' key.

<img src={ShivaApi002} />

Once the identifier is retrieved, it's possible to access the activity details using the Activity module API:

<img src={ShivaApi003} />

The activity content includes all essential information to identify the operation, its execution date, and its progress status. Here is the activity model:

```json
{
  "id": "UUIDV4",
  "tenantId": "UUIDV4",
  "description": "STRING",
  "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
  "tags": "STRING[]",
  "initiator": "UUIDV4",
  "creationDate": "DATE",
  "concernedItems": [
    {
      "type": "string",
      "id": "string"
    }
  ],
  "state": "CompletedState | RunningState | WaitingState | FailedState",
  "operationType": "read" | "write"
}
```

### Activity States

The __state__ object can take different forms depending on the activity state:

#### waiting

State before the operation has started:

```json
waiting: {}
```

#### running

State when the operation is in progress:

```json
running: {
  "status": "string",
  "startDate": "Date",
  "progression": "number"
}
```

#### failed

State if the operation failed:

```json
failed: {
  "startDate": "Date",
  "stopDate": "Date",
  "reason": "string"
}
```

#### completed

State if the operation is completed:

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Created Resource Identifier]
The identifier (UUIDv4) of the created resource is available in the activity result once it's completed.
:::

## API Limits

### Why Limits?

The Cloud Temple console defines __caps on the volume of requests__ that a user can make to the API over a specified period. Implementing these rate limits is a common measure in API management, adopted for several essential reasons:

- __Abuse Prevention__: These limits help safeguard API integrity by preventing abusive or careless usage that could compromise its operation.
- __Quality of Service Assurance__: By regulating API access, we ensure fair resource distribution, allowing all users to benefit from a stable and high-performing experience.

Take for example a poorly designed or inefficient script that attempts repeated API calls, risking resource saturation and performance degradation. By establishing request thresholds, we prevent these situations and maintain __smooth, uninterrupted service__ for all our customers.

### What are the Rate Limits for the Cloud Temple Console API?

We apply quantitative restrictions on user interactions with the console for each product.

Limits are defined in __requests per second (r/s) and per source IP__. Beyond the limit threshold, the system will respond with an HTTP 429 error code, indicating that the authorized request limit has been exceeded.

Here are the defined limits:

| Product | Limit Threshold |
|---|---|
| Cloud Temple Console | 25 r/s |
| Identity (IAM) | 25 r/s |
| VMware IaaS | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastion | 25 r/s |
| Network | 25 r/s |
| Housing | 25 r/s |
| Marketplace | 25 r/s |
| Support | 25 r/s |
| Notification | 25 r/s |
| LLMaaS | 25 r/s |

### Specific Routes

Certain specific API endpoints, particularly those related to authentication or sensitive actions, have more restrictive limits to enhance security and ensure stability.

| Route | Limit Threshold |
|---|---|
| Authentication (IAM) | 5 r/s |
| IaaS - Storage (Datastores) | 20 r/s |
| Marketplace (Contact) | 1 r/min - 5 r/h |

### How Do Rate Limits Work?

If the number of requests sent to an API endpoint exceeds the authorized limit, the endpoint will respond with __an HTTP 429 response code__. This code indicates that the user has exceeded the allowed number of requests. When this occurs, the API endpoint will also provide a JSON object as a response, containing detailed information about the applied limitation:

```json
{
  "error": {
    "status": "429 Too Many Requests",
    "message": "Too Many Requests"
  }
}
```

### How to Avoid Making Too Many Requests?

It's recommended to limit the number of API calls made by your automation to stay below the rate limit set for the endpoint.

This situation often occurs when multiple requests are executed in parallel using multiple processes or threads.

There are several ways to improve your automation's efficiency, including using __caching__ mechanisms and implementing __a retry system with exponential backoff__. This method involves taking a short pause when a rate limit error is encountered, then retrying the request. If the request fails again, the pause duration is gradually increased until the request succeeds or until a maximum number of retries is reached.

This approach has many advantages:

- __Exponential backoff__ ensures that initial attempts are made quickly while providing longer delays in case of repeated failures.
- Adding __random variation__ to the pause helps prevent all attempts from occurring simultaneously.

It's important to note that __unsuccessful requests don't affect your rate limit__. However, continuously resending a request might not be a viable long-term solution, as this behavior could change in the future. We therefore recommend not relying exclusively on this mechanism.

The __[Backoff](https://pypi.org/project/backoff/)__ and __[Tenacity](https://pypi.org/project/tenacity/)__ Python libraries are good starting points for implementing mitigation strategies.

## Endpoint Lifecycle and Deprecation

### Deprecation Policy

Cloud Temple is committed to maintaining API compatibility over time. However, when it's necessary to evolve the API (new features, optimizations, security fixes), some endpoints may be deprecated and then removed.

#### 3-Month Minimum Rule

When an endpoint is marked as deprecated:

1. **Official Announcement**: Deprecation is announced in the console release notes
2. **Transition Period**: The endpoint remains **accessible and functional for at least 3 months** after the announcement
3. **Removal Date**: A specific final removal date is communicated at the time of announcement
4. **Documented Alternative**: The new replacement endpoint is documented and available

This 3-month rule gives you the necessary time to adapt your code and migrate to the new endpoints.

### How to Identify a Deprecated Endpoint?

#### In the API Portal (Swagger)

Deprecated endpoints appear crossed out in the Swagger documentation:


~~POST /v1/old/endpoint~~

The endpoint description includes:
- The deprecation announcement date
- The planned removal date
- The recommended replacement endpoint

<img src={ShivaApi004} />

### Best Practices for Managing Deprecations

1. **Monitor Deprecated Features**: Regularly check the deprecated features in the console to be informed of upcoming deprecations.

2. **Plan Your Migrations**: As soon as a deprecation is announced, plan the migration of your code to the new endpoint within 3 months.

3. **Test New Endpoints**: Test new endpoints as soon as they're available, even during the transition period.

4. **Document Your Dependencies**: Maintain a list of endpoints your application uses to facilitate future migrations.

## Best Practices

### Token Security

:::danger[Essential Security Rules]
- 🚫 Never expose your tokens in versioned code (Git, etc.)
- 🔐 Use environment variables to store tokens
- 🎯 Create tokens with minimal permissions (principle of least privilege)
- 🔄 Regularly renew your tokens (maximum 12 months)
- ⚠️ Immediately revoke any compromised token
:::

### Error Handling

Always handle HTTP errors in your code. Pay particular attention to the following codes:

| Code | Description | Recommended Action |
|------|-------------|-------------------|
| **401** Unauthorized | Expired or invalid token | Re-authenticate with your PAT |
| **403** Forbidden | Insufficient permissions | Check token rights |
| **429** Too Many Requests | Rate limit reached | Wait before retrying (backoff) |
| **500/503** Server Error | Temporary server error | Retry later |

### API Call Optimization

- Use pagination for large lists
- Cache data that changes rarely
- Use filters to limit returned data
- Group operations when possible
- Track asynchronous activity status instead of intensive polling

### Retry with Exponential Backoff

To handle temporary errors or rate limiting (HTTP 429), implement a retry strategy with exponential backoff:

:::tip[Recommended Retry Strategy]
- ⏱️ **Progressive Wait**: 1s, 2s, 4s, 8s...
- 🎲 **Random Variation**: Prevents all clients from retrying simultaneously
- 🔄 **Retry Limit**: Maximum 3-5 attempts
- 📚 **Python Libraries**: [Backoff](https://pypi.org/project/backoff/) or [Tenacity](https://pypi.org/project/tenacity/)
:::
