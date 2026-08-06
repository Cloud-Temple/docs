---
title: Organization view
---

import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgTenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgAccess from '@site/docs/console/images/shiva_org_access.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

The **organization view** brings together the functions for managing your entity in the Cloud Temple Console: tenant management, users and their permissions, access control, and consumption tracking. An organization federates one or more **tenants** (isolated cloud environments), and user permissions are **segregated tenant by tenant**.

:::info
This page describes the **interface**: where to find each function and what it does. The **reference** documentation for the organization / tenant model and permissions is in the [IAM](iam/concepts.md) module.
:::

## Top bar and selecting the working tenant

At the top of the Console, the bar shows the current organization (**"My organization"**). The associated selector opens the **"My tenants"** list: every tenant appears there, with the **SecNumCloud** badge when it is qualified.

To **choose the working tenant**, there are two options:

- from the top bar, open the **"My tenants"** selector and click the desired tenant;
- from the **Tenants** page, use a row's **"Connect to the tenant"** action.

Technical resources (compute, storage, network, etc.) are **specific to each tenant** and are not shared between tenants.

<img src={imgSelector} />

## Dashboard

The **Dashboard** is the organization's home page. It provides a cross-cutting summary:

- the status of **support tickets** (open, response required, customer validation, incidents);
- the **number of tenants** in the organization;
- a **cost overview** (current month cost, breakdown by tenant and by service).

<img src={imgDashboard} />

## Organization administration

The **Administration** section of the left navigation groups the organization's governance pages.

| Page | Purpose |
|---|---|
| **Tenants** | Create and evolve tenants |
| **Users** | Manage accounts and their permissions |
| **Access** | List of authorized public IPs (whitelist) |
| **Logs** | Activity log (traceability) |
| **Support** | Organization tickets |

The **Cost manager** (outside the Administration section) provides consumption tracking.

## Tenants

The **Tenants** page lists all the tenants of the organization. A search bar and pagination make navigation easier when there are many tenants.

### Create a tenant

The **"New tenant"** button opens a two-part form:

- **Tenant identity**: the **name** (validated in real time) and a **description**;
- **Tenant products**: the products to enable on the tenant. The **"Select all"** / **"Deselect all"** buttons speed up input.

Confirm with **"Create"**: the tenant is initialized with the selected products.

### Tenant actions

Each row's action menu offers:

- **Connect to the tenant** — sets this tenant as the working tenant;
- **Modify products** — enables or disables products on the tenant to change its scope;
- **Copy UUID** — copies the tenant's technical identifier (useful for the API or a support ticket).

### Owners and lifecycle

- **Creation**: self-service via **"New tenant"**.
- **Evolution**: adding or removing products via **"Modify products"**.
- **Tenant owners**: each tenant has at least one owner. The rules (recommended number, propagation delay, removal on support request, an owner's permissions) are detailed in the [IAM](iam/concepts.md) module.

:::info
Operations on tenants are logged on the **Logs** page (for example "*Creating tenant…*" or "*Updating features on tenant…*").
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

## Users and permissions

The **Users** page lists the organization's accounts. Credentials are **global to the organization**; permissions, however, are defined **per tenant**.

For each account, the **name**, **email**, account **type** — **Federated account** (external identity provider) or **Local account** — and visual markers are shown: **Organization owner**, **Me**, or **Email not verified** (account not yet finalized).

### Page tools

- **Filters**: by **Organization owners**, **Type**, **Source**, and **Status**.
- **Export CSV**: exports the list of users and their access, useful for auditing.

### Account actions

The action menu offers, depending on the account's state:

- **Add as organization owner**;
- **Re-enroll** — resends the invitation to an unfinalized account;
- **Copy UUID**;
- **Delete**.

:::note
You cannot delete yourself. **Inviting** a new user and the **fine-grained assignment of permissions per tenant** are described in the [IAM](iam/quickstart.md) module.
:::

### Organization owner vs. tenant owner

These are two distinct notions:

- the **organization owner** is added from the **Users** page (the "Add as organization owner" action); its **removal is done on support request**;
- the **tenant owner** belongs to a tenant's scope; its rules are described in the [IAM](iam/concepts.md) module.

<img src={imgUsers} />

## Access — IP whitelist

The **Access** page manages the **list of authorized public IP addresses** allowed to reach the Console. In line with **SecNumCloud** requirements, only traffic from these addresses is accepted.

- Each entry maps an **IP** (CIDR notation) to a **description**.
- The **"Add an IP"** button adds an address to the list.

:::warning
**Deleting** an authorized IP is done on **support request**.
:::

<img src={imgAccess} />

## Consumption report — Cost manager

The **Cost manager** provides a view of the organization's consumption, broken down by tenant. It offers two tabs.

### "Overview" tab

Summary view of the current month:

- key indicators: **current month cost**, **current year cost**, **number of active products**;
- **Cost per tenant** — breakdown of costs across tenants;
- **Current cost per service** and **Current cost per product** — main consumption items.

### "Consumption" tab

Detailed, historized report:

- selection of the **period** (start and end month) and of the **"Display by"** axis;
- **Monthly consumption**, **Total**, **Forecast**, and **Trend** views;
- an expandable table by **Month / Tenant / Service / Product / Amount**, with the **trend** compared to the previous month.

:::info
The current month's amount is a **forecast**: it is estimated from the days already consumed.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

## Logging and support

- **Logs** — the **Activities** page traces the organization's read and write operations (**Recent** / **Archived** tabs, filters, CSV export) for traceability. See also the Logging section of the [Console quickstart](console_quickstart.md).
- **Support** — the **Support** page centralizes the **organization's tickets** (indicators, ticket creation, filters, export). Creating and tracking requests is described in the [Console quickstart](console_quickstart.md).
