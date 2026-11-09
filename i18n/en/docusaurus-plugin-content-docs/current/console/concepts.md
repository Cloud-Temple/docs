---
title: Console concepts
---

## Introduction

The **Cloud Temple Console** is the single entry point to the entire Cloud Temple catalog: compute, storage, network, security, containers, AI and managed services. You use it to order and manage your resources in self-service, manage identities and access, track your operations and open your support requests.

It is designed *API-first*: the web interface relies on the public API, which you can use directly, with the Terraform provider or with the MCP server.

It is intended for IT teams that administer their platform, DevOps teams that automate it, security and compliance teams that control access and traceability, and production teams that track operations.

The model on which the Console is based (organization, tenants, users and permissions) is described in the Architecture section; its reference documentation is the [IAM](./iam/concepts.md) module.

## Benefits

| Benefit | Description |
|---|---|
| Single entry point | All your resources and services in one portal, with a single set of credentials. |
| Self-service | You create, configure and delete your resources at any time, without intervention from Cloud Temple. |
| Automation | The platform can be driven by API or with Terraform, with versionable configurations that fit into your CI/CD pipelines. |
| Security and traceability | Access filtered by IP address, two-factor authentication, permissions per tenant and logging of actions. |

## Features

| Feature | Description |
|---|---|
| Web console | Dashboard, resource inventory, self-service orders, access to all subscribed products. |
| Identity and access management | Organization, tenants, users and permissions: see the [IAM](./iam/concepts.md) module. |
| REST API | API documented in OpenAPI 3.0 format, available from the Console: see the [Console API](./api.md). |
| Terraform provider | `Cloud-Temple/cloudtemple` provider, published on the Terraform Registry: see the [Terraform provider](../terraform/terraform.md). |
| MCP server | Connection of an MCP-compatible (*Model Context Protocol*) AI client to your tenant, to query your environment. |
| Operations tracking | [Scheduled operations and incidents](./status.md), activity log. |
| Support | Creation and tracking of support requests from the Console. |

## Architecture

### Organisation and tenants

The whole platform rests on two levels.

**The organisation** represents your entity: company, department or team. It holds your contract and your billing, and brings together all user accounts. It also defines the authentication mechanism shared by these accounts: local to the Console, or federated with your own directory.

**The tenant** is a working environment within the organisation. An organisation has at least one. Ordered resources are assigned to a specific tenant and are not shared with other tenants.

```
Your organisation
├── Tenant "production"
├── Tenant "acceptance"
└── Tenant "lab"
```

How you split your tenants is up to you: by environment (production, acceptance), by application or by criticality. You can add tenants at any time, and no product is activated by default: you choose the products of each tenant. Details are in [Organisations](./iam/concepts.md#organizations) and [Tenant](./iam/concepts.md#tenant).

A tenant's resources are deployed in [regions and availability zones](../additional_content/concepts_regional.md).

### Users and permissions

A user's **credentials** are global to the organisation. Their **permissions**, however, are defined tenant by tenant: an account can be allowed to order resources in one tenant but not in another.

Two roles should be distinguished:

- the **organisation owner** manages accounts, tenants and allowed IP addresses. By default, they are the owner of every tenant of the organisation;
- the **tenant owner** receives all the permissions related to the products activated on that tenant.

The same person can hold both roles. The complete rules are in [Assigning permissions in a tenant](./iam/concepts.md#assigning-permissions-within-a-tenant) and the [list of permissions](./iam/concepts.md#permissions).

### The interface and the API

Everything you do in the Console is also possible through its [API](./api.md). It authenticates with an **API key** (*Personal Access Token*), tied to a tenant and to the user who created it. The [Terraform provider](../terraform/terraform.md), which manages your platform *as code*, also authenticates with API credentials generated from the Console.

## Regions and availability zones

The Console and the API are hosted in France. They drive the resources of your tenants, deployed in the regions and availability zones specific to each product.

## Technical specifications

### Interface

The Console is available in French, English, German, Spanish and Italian.

### API and Terraform provider

- The API follows the OpenAPI 3.0 format; its interactive documentation is available from the Console. Each write request generates an [activity](./api.md) that lets you track its status.
- The Terraform provider is compatible with Terraform 1.0 and later, as well as with OpenTofu.

### MCP server

The MCP server relies on the public API and applies the same controls: authentication by personal access token, permissions, IP address filtering and logging of actions. An AI client only acts within the permissions of the token used.

### Limits

- The API rate limits are defined per product; beyond them, the API returns an HTTP 429 error: see the [Console API](./api.md).

## Security and compliance

### Accessing the Console

Access to the Console is protected at two levels:

- **allowed IP addresses**: only the public IP addresses declared by your organisation can reach the Console. There is a single list for the whole organisation, whichever tenant it is edited from;
- **two-factor authentication**: it is mandatory for all Console accounts. If your organisation is federated with your own directory, see the [authentication mechanisms](./iam/concepts.md#authentication-mechanisms).

The procedure is described in [Signing in and securing your access](./onboarding.md#step-2-log-in-and-secure-your-access).

### Traceability

Operations are logged: identity of the initiator, date, type of operation and status. As the Console is hosted on a SecNumCloud-qualified infrastructure, its events are kept for at least 6 months.

### Certifications

The Console is HDS and ISO 27001 certified, and included in the SecNumCloud-qualified and C5-compliant services.

## Reversibility

The Console and the API do not store your application data: they keep configuration metadata and logs.

- **Terraform configurations**: your configuration files and your state file belong to you.
- **Activity logs**: can be exported through the Console API.

## Pricing

The Console, the API, the MCP server and the Terraform provider are included at no extra cost in every Cloud Temple subscription. The resources you order are billed according to the price of each product. See the product page on the Cloud Temple website:
[Console – API – Terraform Provider](https://www.cloud-temple.com/produits/console-api-provider-terraform/).
