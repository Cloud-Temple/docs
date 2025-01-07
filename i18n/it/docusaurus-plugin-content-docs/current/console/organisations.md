---
title: Organizations
---
The organization is linked to your __sponsoring account__ and the __associated Cloud Temple contract__. It represents your entity (company, department, team, ...) that carries the contractual relationship between Cloud Temple and you.

## Principle of an Organization

The organization has four main roles:

- It represents the __contractual entity__ for tracking and billing purposes,
- It defines the __global configuration of the authentication mechanism__: authentication can be local to the Shiva console or remote via an identity federation service,
- It carries all the __user accounts__,
- It __federates the tenants__ (Production, Preproduction, Dev, Application 1, Application 2, ...) that you define according to the needs of your Cloud architecture.
User roles (rights/permissions) are configurable for each tenant defined in your organization. For example, an account may be authorized to order resources in one tenant but not in another.

## Authentication Mechanisms

The Shiva console allows __the configuration of the authentication mechanism__ at the organization level. You can use the local authentication repository of the Shiva console or link your organization to one of your authentication repositories.

The following external repositories are supported:

- Repositories compatible with __OpenID Connect__,
- Repositories compatible with __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## To learn more

- Example of [identity federation with Microsoft ADFS](iam/sso_adfs.md)
- Example of [identity federation with Microsoft EntraID (Azure Active Directory)](iam/sso_aad.md)