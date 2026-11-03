---
title: Console concepts
---

This page presents the model the Console is built on: the organisation, tenants, users and their permissions, and the two ways to access it. The reference documentation for this model is the [IAM](./iam/concepts.md) module.

## Organisation and tenants

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

## Users and permissions

A user's **credentials** are global to the organisation. Their **permissions**, however, are defined tenant by tenant: an account can be allowed to order resources in one tenant but not in another.

Two roles should be distinguished:

- the **organisation owner** manages accounts, tenants and allowed IP addresses. By default, they are the owner of every tenant of the organisation;
- the **tenant owner** receives all the permissions related to the products activated on that tenant.

The same person can hold both roles. The complete rules are in [Assigning permissions in a tenant](./iam/concepts.md#assigning-permissions-within-a-tenant) and the [list of permissions](./iam/concepts.md#permissions).

## Accessing the Console

Access to the Console is protected at two levels:

- **allowed IP addresses**: only the public IP addresses declared by your organisation can reach the Console. There is a single list for the whole organisation, whichever tenant it is edited from;
- **two-factor authentication**: it is mandatory for all Console accounts. If your organisation is federated with your own directory, see the [authentication mechanisms](./iam/concepts.md#authentication-mechanisms).

The procedure is described in [Signing in and securing your access](./onboarding.md#step-2-log-in-and-secure-your-access).

## The interface and the API

Everything you do in the Console is also possible through its [API](./api.md). It authenticates with an **API key** (*Personal Access Token*), tied to a tenant and to the user who created it. The [Terraform provider](../terraform/terraform.md), which manages your platform *as code*, also authenticates with API credentials generated from the Console.
