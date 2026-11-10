---
title: Console API Documentation
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

The Cloud Temple API allows you to programmatically create and manage the resources of the products integrated into the Console. Everything you can do via the Cloud Temple console can also be achieved via the API, from creating virtual machines to configuring identity and access management.

This documentation guides you through using the Cloud Temple API, from authentication to best practices, including endpoint lifecycle management.

## Quickstart: Your first API request

:::info[In summary - 3 steps to get started]
1. 🔑 **Generate your PAT** from the console
2. 🔄 **Exchange its ID and secret for a JWT**
3. 🚀 **Call the API with this JWT** in the `Authorization` header
:::

### Prerequisites

Before you begin, verify the following:

- **Account and tenant**: your account has the `iam_offline_access` permission in the tenant where you want to **create** the PAT.
- **PAT permissions**: select only the permissions required for the operations your script will perform. It is not necessary to add `iam_offline_access` to the PAT's permissions to use it on the authentication endpoint.
- **Network access**: the public outbound IP used by your script must be authorized for the organization. See [adding an IP address in Administration > Access](./onboarding.md#add-an-ip-address). Allow approximately **10 minutes** for an addition to take effect. Viewing and modifying this list require `console_public_access_read` and `console_public_access_write` respectively; these permissions are not required for the PAT to authenticate.
- **Tools**: the examples below use `curl` and a Bash-compatible shell.

:::warning[The browser and the script may use different IPs]
A successful connection to the Console does not validate your script's network access. A proxy, a VPN, or a CI runner may use a different public outbound IP. The address configured to reach a proxy is not necessarily the public address it uses to exit to the Internet. Have your network team confirm the latter and authorize it for the relevant organization.
:::

### Steps

1. **Generate your PAT**: log in to the [Cloud Temple console](https://shiva.cloud-temple.com/login), select the relevant tenant, and create a Personal Access Token (see [API Keys](#api-keys-personal-access-token)). Keep its **ID** and **secret**. The expected ID is that of the PAT, not that of the tenant, organization, or user.

2. **Obtain a JWT access token**: replace the placeholder values `ID_DU_PAT` and `SECRET_DU_PAT` with those of the same PAT, which must not be expired or revoked. Send a **POST** request with a valid JSON body and the `Content-Type: application/json` header to the full URL below, which includes **`/api/iam`**. No prior Bearer token is required on this authentication endpoint.

```bash
ACCESS_TOKEN=$(curl --fail --silent --show-error \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{"id":"ID_DU_PAT","secret":"SECRET_DU_PAT"}' \
  'https://shiva.cloud-temple.com/api/iam/v2/auth/personal_access_token')
```

On success (HTTP 200), the response body contains the JWT, stored here in the `ACCESS_TOKEN` variable. If the command fails, see [troubleshooting](#troubleshooting-pat-authentication) before continuing.

3. **Call an API with the JWT**: use this access token in `Authorization: Bearer`. The following example queries the list of IAM roles:

```bash
curl --fail --silent --show-error \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  'https://shiva.cloud-temple.com/api/iam/v2/roles'
```

The expected Bearer is the **JWT obtained in step 2**, not the PAT's ID or secret. Subsequent operations remain subject to the permissions granted to the PAT.

:::caution[Protecting credentials]
The values in the example are fictitious. In your automations, provide the secret via your secrets manager and avoid storing it in code, shell history, or logs. Do not share either the PAT secret or the obtained JWT.
:::

## Authentication

### API Keys (Personal Access Token)

The __API key__ allows you to authenticate when you want to make requests to the API. Generating an API key, also called a __Personal Access Token (PAT)__, is a secure way to connect to the Console APIs without going through a graphical interface. Each of these tokens is linked to a tenant and the user who created it.

Creating this token is done from your account and requires the `iam_offline_access` permission. It is possible to generate multiple keys and configure the authorizations for each within the limits of your rights. This creation permission is distinct from the PAT's business permissions: exchanging its ID and secret for a JWT does not require the PAT itself to carry `iam_offline_access`.

#### Create an API key

To create an API key, simply __click on your profile__:

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

In the profile menu, click on __'Personal Access Token'__

<img src={ShivaProfil003} />

You then see on screen all the API keys that have been created for this user in this tenant. Click on __'New personal access token'__

<img src={ShivaProfil002} />

You must then:

- Specify the name of this new token,
- Specify an expiration date (maximum 12 months of validity),
- Select the permissions associated with the token.

The details of your token are then displayed. __Note that it is no longer possible to access them afterwards.__

If you do not record this information, you will need to destroy and recreate the token.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

For security reasons, it is recommended to create multiple tokens each with a specific purpose (one token per application or per business process) rather than creating a single token with all permissions.

You then see the newly created token and its future expiration date.

<img src={ShivaProfil005} />

:::info[Authentication token lifecycle]
When you use your __Personal Access Token (PAT)__ to authenticate with the API, you receive an access token in return. It is important to note that this access token is a __JSON Web Token (JWT)__ with a limited lifetime.

- __Lifetime__: Each JWT token is valid for a duration of __5 minutes__.
- __Verification__: You can check the issuance date (`iat`) and expiration date (`exp`) by decoding the JWT locally. Do not transmit an active token to a third-party decoding service. Decoding alone does not verify its signature.

Once the token has expired, you will need to re-authenticate with your PAT to obtain a new one. It is therefore recommended to manage this lifecycle in your scripts and applications by providing automatic token renewal.
:::

### Troubleshooting PAT authentication

Start by identifying the failing request: **the ID/secret exchange** or **the business call with the JWT**. The checks to perform are not the same.

| Symptom | Checks |
|---|---|
| Authentication request rejected | Verify the **POST** method, the full URL `https://shiva.cloud-temple.com/api/iam/v2/auth/personal_access_token`, the `application/json` type, and a body containing the `id` and `secret` strings. In Postman, choose a **raw / JSON** body. Do not send this body with a GET method. |
| Authentication failure despite a compliant request | Verify that the ID and secret correspond to the **same PAT**, in the expected tenant, and that this PAT is neither expired nor revoked. Do not use the tenant ID instead of the PAT ID. |
| **HTTP 403**, particularly with an HTML refusal page | This status does not prove a lack of IAM permissions. Verify the effective public outbound IP and the organization's access list, then the proxy and the request format: a proxy or an application firewall (WAF) may reject the request before it reaches the API. An HTML body may help identify this refusal, without being sufficient to determine its cause. |
| The exchange succeeds, but the business call fails | Verify that the Bearer header contains the obtained JWT, that it is not expired, and that the PAT has the permissions required by the operation in the correct tenant. Adding `iam_offline_access` to the PAT does not by itself resolve a refusal on a business operation. |

If the problem persists, provide support with the test time **with the timezone**, the method and URL, the HTTP status, the confirmed public outbound IP, as well as the response and any request identifier. Provide a command or a **redacted** capture: mask the secret, the JWT, the `Authorization` and `Proxy-Authorization` headers, as well as cookies. The HTTP status alone does not allow you to identify with certainty the component that rejected the request.

## API Portal Access

The OpenAPI 3.0 (Swagger) documentation for the Cloud Temple console APIs is available directly in the application:

<img src={ShivaApi001} />

Protected API operations require the __`Authorization`__ header with the Bearer JWT obtained during the authentication phase. The initial exchange of the PAT's ID and secret described above does not require this header.

The access point URLs are directly provided in __Swagger__ (in the "Servers" object of each API page).

### Exploring the interactive documentation

The API portal allows you to:

- Browse all available endpoints by module
- Test requests directly from the interface
- View data models (schemas) for each resource
- Check the possible response codes for each endpoint

## Endpoint Structure

### URL Format

Cloud Temple API URLs follow a consistent structure:

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{ressource}
```

Where:
- `{module}`: The relevant module (compute, iam, network, backup, etc.)
- `{version}`: The API version (v1, v2, etc.)
- `{ressource}`: The resource to manipulate (virtual-machines, users, networks, etc.)

### Endpoint Examples

```
# Machines virtuelles (Compute)
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
POST   https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
PATCH  https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
DELETE https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}

# Identité et accès (IAM)
GET    https://shiva.cloud-temple.com/api/iam/v1/users
POST   https://shiva.cloud-temple.com/api/iam/v1/users
GET    https://shiva.cloud-temple.com/api/iam/v1/users/{id}

# Réseaux
GET    https://shiva.cloud-temple.com/api/network/v1/virtual-networks
POST   https://shiva.cloud-temple.com/api/network/v1/virtual-networks
```

### Organization by module

The Cloud Temple API is organized into functional modules:

| Module | Description | Base URL |
|--------|-------------|----------|
| Cloud Temple Console | General features | `/api/v1/` |
| Identity (IAM) | User and access management | `/iam/v1/` |
| IaaS VMware | VMware virtualization resources | `/compute/v1/` |
| OpenIaaS | Xen Orchestra resources | `/openiaas/v1/` |
| S3 | Object storage | `/s3/v1/` |
| OpenShift | PaaS platform | `/openshift/v1/` |
| Bastion | SSH/RDP bastion appliances | `/bastion/v1/` |
| Network | Layer 2 and 3 network management | `/network/v1/` |
| Hosting | Colocation and housing | `/housing/v1/` |
| Marketplace | Solutions catalog | `/marketplace/v1/` |
| Support | Tickets and assistance | `/support/v1/` |
| Notification | Notification system | `/notification/v1/` |
| LLMaaS | Artificial intelligence | `/llmaas/v1/` |

## Activities

Tracking of write-type requests (POST, PUT, PATCH, DELETE) is handled through activity management. Each request of this type automatically generates an associated activity. An HTTP status code 201 confirms the successful creation of the activity. The unique identifier of this activity is returned in the response headers, under the 'Location' key.

<img src={ShivaApi002} />

Once the identifier has been retrieved, it is possible to access the activity details using the Activity module API:

<img src={ShivaApi003} />

The activity content includes all essential information to identify the operation, its execution date, as well as its progress state. Here is the activity model:

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

### Activity states

The __state__ object can take different forms depending on the activity state, namely:

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

State if the operation has failed:

```json
failed: {
  "startDate": "Date",
  "stopDate": "Date",
  "reason": "string"
}
```

#### completed

State if the operation is complete:

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Created resource identifier]
The identifier (UUIDv4) of the created resource is available in the activity result once it is completed.
:::

## API Limits

### Why limits?

The Cloud Temple console defines __caps on the volume of requests__ that a user can send to the API over a given period. The establishment of these rate limits is a common measure in API management, adopted for several essential reasons:

- __Abuse prevention__: These limits contribute to safeguarding the integrity of the API by preventing abusive or careless usage that could compromise its operation.
- __Service quality assurance__: By regulating access to the API, we ensure an equitable distribution of resources, allowing all users to benefit from a stable and performant experience.

Consider the example of a poorly designed or inefficient script that attempts repetitive calls to the API, risking saturating resources and degrading performance. By establishing request thresholds, we prevent these situations and ensure the maintenance of __a smooth and uninterrupted service__ for our entire customer base.

### What are the rate limits for the Cloud Temple console API?

We apply quantitative restrictions on user interactions with the console for each product.

The limits are defined in __requests per second (r/s) and per source IP__. Beyond the threshold limit, the system will respond with an HTTP error code 429, indicating that the allowed request limit has been exceeded.

Here are the defined limits:

| Product | Threshold limit |
|---|---|
| Cloud Temple Console | 25 r/s |
| Identity (IAM) | 25 r/s |
| IaaS VMware | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastion | 25 r/s |
| Network | 25 r/s |
| Hosting | 25 r/s |
| Marketplace | 25 r/s |
| Support | 25 r/s |
| Notification | 25 r/s |
| LLMaaS | 25 r/s |

### Specific routes

Certain specific API endpoints, particularly those related to authentication or sensitive actions, have more restrictive limits to enhance security and ensure stability.

| Route | Threshold limit |
|---|---|
| Authentication (IAM) | 5 r/s |
| IaaS - Storage (Datastores) | 20 r/s |
| Marketplace (Contact) | 1 r/min - 5 r/h |

### How do rate limits work?

If the number of requests sent to an API endpoint exceeds the allowed limit, the endpoint will respond by returning __an HTTP response code 429__. This code indicates that the user has exceeded the number of permitted requests. When this occurs, the endpoint will also provide a JSON object as a response, which will contain detailed information about the applied throttling:

```json
{
  "error": {
    "status": "429 Too Many Requests",
    "message": "Too Many Requests"
  }
}
```

### How to avoid making too many requests?

It is recommended to limit the number of API calls made by your automation to stay below the rate limit set for the endpoint.

This situation often occurs when multiple requests are executed in parallel, using multiple processes or threads.

There are several ways to improve the efficiency of your automation, including using __caching__ mechanisms and implementing __a retry system with progressive backoff__. This method consists of making a short pause when a rate limit error is encountered, then retrying the request. If the request fails again, the pause duration is gradually increased until the request succeeds or until a maximum number of retries is reached.

This approach has many advantages:

- __Progressive backoff__ ensures that the first attempts are made quickly, while providing longer delays in case of repeated failure.
- Adding __a random variation__ to the pause helps prevent all attempts from occurring simultaneously.

It is important to note that __unsuccessful requests do not affect your rate limit__. However, continuously resending a request may not be a viable long-term solution, as this behavior could be changed in the future. We therefore recommend not relying exclusively on this mechanism.

The __[Backoff](https://pypi.org/project/backoff/)__ and __[Tenacity](https://pypi.org/project/tenacity/)__ libraries in Python are good starting points for implementing backoff strategies.

## Endpoint lifecycle and deprecation

### Deprecation policy

Cloud Temple is committed to maintaining API compatibility over time. However, when it is necessary to evolve the API (new features, optimizations, security fixes), certain endpoints may be deprecated and then removed.

#### 3-month minimum rule

When an endpoint is marked as deprecated:

1. **Official announcement**: The deprecation is announced in the console release notes
2. **Transition period**: The endpoint remains **accessible and functional for a minimum of 3 months** after the announcement
3. **Removal date**: A specific date for definitive removal is communicated at the time of the announcement
4. **Documented alternative**: The new replacement endpoint is documented and available

This 3-month rule gives you the necessary time to adapt your code and migrate to the new endpoints.

### How to identify a deprecated endpoint?

#### In the API portal (Swagger)

Deprecated endpoints appear struck through in the Swagger documentation:


~~POST /v1/old/endpoint~~

The endpoint description includes:
- The deprecation announcement date
- The scheduled removal date
- The recommended replacement endpoint

<img src={ShivaApi004} />

### Best practices for managing deprecations

1. **Monitor deprecated features**: Regularly check the deprecated features in the console to learn about announced deprecations and their scheduled removal dates.

2. **Plan your migrations**: As soon as a deprecation is announced, plan the migration of your code to the new endpoint within 3 months.

3. **Test the new endpoints**: Test the new endpoints as soon as they are available, even during the transition period.

4. **Document your dependencies**: Maintain a list of the endpoints your application uses to facilitate future migrations.

## Best practices

### Token security

:::danger[Essential security rules]
- 🚫 Never expose your tokens in version-controlled code (Git, etc.)
- 🔐 Use environment variables to store tokens
- 🎯 Create tokens with minimal permissions (principle of least privilege)
- 🔄 Renew your tokens regularly (maximum 12 months)
- ⚠️ Immediately revoke any compromised token
:::

### Error handling

Always handle HTTP errors in your code. Pay particular attention to the following codes:

| Code | Description | Recommended action |
|------|-------------|-------------------|
| **401** Unauthorized | Expired or invalid token | Re-authenticate with your PAT |
| **403** Forbidden | Insufficient permissions | Check the token's rights |
| **429** Too Many Requests | Rate limit reached | Wait before retrying (backoff) |
| **500/503** Server Error | Temporary server error | Retry later |

### API call optimization

- Use pagination for large lists
- Cache data that rarely changes
- Use filters to limit the returned data
- Group operations when possible
- Track the status of asynchronous activities instead of doing intensive polling

### Retry with exponential backoff

To handle temporary errors or rate limiting (HTTP 429), implement a retry strategy with exponential backoff:

:::tip[Recommended retry strategy]
- ⏱️ **Progressive wait**: 1s, 2s, 4s, 8s...
- 🎲 **Random variation**: Prevents all clients from retrying simultaneously
- 🔄 **Retry limit**: Maximum 3-5 attempts
- 📚 **Python libraries**: [Backoff](https://pypi.org/project/backoff/) or [Tenacity](https://pypi.org/project/tenacity/)
:::
