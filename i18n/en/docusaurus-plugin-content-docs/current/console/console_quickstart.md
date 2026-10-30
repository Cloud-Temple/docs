---
title: Console tour
---
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

This page takes you on a tour of the Cloud Temple Console interface: where to find each function and what it allows you to do.

:::tip[New here?]
Creating your organization, logging in, two-factor authentication, authorized IP addresses, creating a tenant, inviting your collaborators, enabling products and accessing the API are described, in order, in [Onboarding](./onboarding.md).
:::

## Prerequisites

- Have access to the Console: see [Onboarding](./onboarding.md).
- Log in from an authorized public IP address: see [Add an IP address](./onboarding.md#add-an-ip-address).

<a id="connexion-à-votre-tenant-cloud-temple"></a>

## Organization View

:::info
The **organization view** is reserved for **organization owners**.
:::

The **organization view** groups the management functions for your entity in the Cloud Temple Console: tenant management, user and permission management, access control, and usage monitoring. An organization groups one or more **tenants** (isolated cloud environments), and user permissions are subject to **tenant segregation**.

:::info
This section describes the **interface**. The procedures are in [Onboarding](./onboarding.md); the **reference** documentation for the organization / tenant model and permissions can be found in the [IAM](iam/concepts.md) module.
:::

### Header and active tenant selection

At the top of the Console, the header displays the current organization (**« My organization »**). The associated selector opens the **« My tenants »** list, from which you choose your active tenant: see [Choose your working tenant](./onboarding.md#choose-your-working-tenant).

<img src={imgSelector} />

### Dashboard

The **Dashboard** is the organization's home page. It provides a comprehensive overview:

- the status of **support tickets** (open, response required, client validation, incidents);
- the **number of tenants** in the organization;
- a **cost overview** (current month cost, breakdown by tenant and by service).

<img src={imgDashboard} />

### Organization Administration

The **Administration** section of the left navigation groups the organization governance pages.

| Page | Role | To take action |
|---|---|---|
| **Tenants** | Create and manage tenants | [Create an environment](./onboarding.md#create-a-new-environment), [enable a product](./onboarding.md#enable-a-product) |
| **Users** | Manage accounts and their permissions | [Invite your collaborators](./onboarding.md#step-4-invite-your-collaborators) |
| **Access** | List of allowed public IPs | [Add an IP address](./onboarding.md#add-an-ip-address) |
| **Logs** | Activity log (traceability) | [Logging](#logging---activity-tracking) |
| **Support** | Organization tickets | [Technical support](#access-to-technical-support) |

The **Cost Manager** (outside the Administration section) provides consumption tracking.

### Tenants

The **Tenants** page lists all the organization's tenants. A search bar and pagination facilitate navigation when there are many tenants. The **"New tenant"** button creates an environment: see [Create a new environment](./onboarding.md#create-a-new-environment).

#### Actions on a tenant

The action menu for each row provides:

- **Connect to tenant** — sets this tenant as the active tenant;
- **Modify products** — enables or disables products on the tenant to adjust its scope;
- **Copy UUID** — copies the technical identifier of the tenant (useful for the API or a support ticket).

Each tenant has at least one owner. The rules (recommended number, propagation delay, removal upon support request, owner permissions) are detailed in the [IAM](iam/concepts.md#managing-owners-on-a-tenant) module.

:::info
Tenant operations are logged on the **Logs** page (for example, "*Creating tenant…*" or "*Updating features on tenant…*").
:::

<img src={imgTenants} />

### Users and permissions

The **Users** page lists the organization's accounts. Credentials are **organization-wide**; permissions are defined **per tenant**. The **"New User"** button invites a collaborator: see [Invite your collaborators](./onboarding.md#step-4-invite-your-collaborators).

For each account, the **name**, **email**, and account **type** are displayed — **Federated account** (external identity repository) or **Local account** — along with visual indicators: **Organization owner**, **Me**, or **Unverified email** (account not finalized).

#### Page Tools

- **Filters**: by **Organization Owners**, **Type**, **Source**, and **Status**.
- **Export CSV**: exports the list of users and their access permissions, useful for auditing.

#### Actions on an account

The actions menu offers, depending on the account status:

- **Add as organization owner**;
- **Resend invitation** — resends the invitation to an account that has not been finalized;
- **Copy UUID**;
- **Delete**.

:::note
You cannot delete yourself.
:::

#### Organization owner and tenant owner

These are two distinct concepts:

- the **organization owner** is added from the **Users** page (action "Add as organization owner"); their **removal requires a support request**;
- the **tenant owner** is scoped to a tenant; its rules are described in the [IAM](iam/concepts.md#managing-owners-on-a-tenant) module.

:::info
As an **organization owner**, you are by default the **owner of all tenants** in the organization. In this capacity, you have all permissions on each of these tenants. Conversely, if this role is revoked, you **do not lose** these permissions: they remain granted on the affected tenants.
:::

<img src={imgUsers} />

<a id="accès--whitelist-ip"></a>

### Consumption Report — Cost Manager

The **Cost Manager** provides a view of the organization's consumption, broken down by tenant. It offers two tabs.

#### "Overview" Tab

Summary view of the current month:

- key metrics: **current month cost**, **current year cost**, **number of active products**;
- **Cost per tenant** — cost breakdown across tenants;
- **Current cost per service** and **Current cost per product** — main consumption categories.

#### "Consumption" Tab

Detailed and historical report:

- selection of the **period** (start and end month) and the **« Display by »** axis;
- **Monthly Consumption**, **Total**, **Forecast**, and **Trend** views;
- expandable table by **Month / Tenant / Service / Product / Amount**, with the **trend** compared to the previous month.

:::info
The current month's amount is **projected**: it is estimated based on the days already consumed.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Logging and Support

- **Logs** — the **Activities** page tracks the organization's read and write operations (**Recent** / **Archived** tabs, filters, CSV export) for traceability purposes. See the [Logging — Activity Tracking](#logging---activity-tracking) section below.
- **Support** — the **Support** page centralizes the **organization tickets** (indicators, ticket creation, filters, export). Creating and tracking requests is described in the [Access to Technical Support](#access-to-technical-support) section below.

## Access to User Features via the Web Interface

All features accessible to your user (depending on their permissions) are located on the left side of the screen, in the green banner.
Features are grouped by module. This primarily includes:

- The __inventory__ of your resources,
- __Operation tracking__,
- __IaaS resource management__ (Compute, storage, network, ...)
- __OpenIaaS resource management__ (Compute, storage, network, ...)
- Access to __ancillary services__ (Bastion, monitoring, ...)
- __Organization administration__ (Tenant management, permissions, ...)

Activating a module for a user depends on the user's permissions. For example, the __'Order'__ module will not be available if the user does not have the __'ORDER'__ permission.

Here is an overview of the available modules. New modules regularly enhance the console:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : provides a quick overview of the __total compute and storage resources__, __backup__ statistics, and a __summary of support tickets__,
- __Inventory__ : provides a view of all your __'virtual machines'__ resources. If __tags__ are used, it allows viewing by __tag__ (for example, business view, application view, ...),
- __Managed Services__ : provides access to tracking your __support requests__ and __service metrics__,
- __IaaS__ : enables __management of VMware IaaS infrastructure__ (Virtual machines, clusters, hypervisors, replications, backup, ...),
- __OpenIaaS__ : enables __management of Xen Orchestra resources__ (Virtual machines, backup, ...),
- __OpenShift__ : enables management of your **RedHat OpenShift PaaS architecture** and container management across the platform's 3 availability zones.
- __Bastion__ : Allows deploying and managing SSH/RDP bastion appliances in your networks,
- __Network__ : enables management of __Layer 2 and Layer 3 networks__, __public IPs__, and your __telecom circuits__,
- __Colocation__ : Provides a view of equipment located in __shared or dedicated colocation zones__,
- __Order__ : Enables resource ordering and deployment tracking,
- __Administration__ : Groups user and tenant administration functions, as well as access to global logging.
</div>
</div>

## Language Management

The console is available in __French__, __English__. You can change the interface language using the __language__ icon located at the top right of the screen.

A user's language change must be made in their __'Profile'__, at the top right of the screen, under __'User Settings'__.

<img src={shivaProfil_006} />

The configuration is set for each tenant [Tenant](iam/concepts.md#tenant).

## Access to Technical Support

At any time, you can contact __the Cloud Temple support team__ via __the 'help' icon__ located at the top right of the screen.

<img src={shivaSupport} />

You will be guided throughout the entire support request process.

The first step is identifying the type of support request:

- Request advice on using a product (excluding incidents),
- Request assistance related to your customer account,
- Report an incident or request technical support.
- Request professional service assistance (provisioning of a Cloud Temple engineer for a specific issue).

<img src={shivaSupport_01} />

You can then provide additional details and attach files (such as images or logs).

The requester can also specify a severity level (P1 to P5) in the ticket description, in the case of a security incident, such as:

<img src={shivaSupportCriticities} />

__CRITICAL (P1)__:

- Suspected leak of sensitive data
- Detection of unauthorized access to your data
- Compromise of your administrative credentials
- Complete unavailability of your critical services
- Abnormal behavior involving sensitive data
- Personal data breach

__HIGH (P2)__:

- Malfunction of user access
- Anomaly in your data encryption
- Loss of access to certain critical features
- Data inconsistency
- Major slowdowns impacting operations

__MEDIUM (P3)__:

- Localized performance issue
- Incident on a non-critical function
- Configuration error with limited impact
- Occasional access difficulty

__LOW (P4)__:

- Investigation request
- Anomaly with no direct impact
- Compliance question
- Need for technical clarification

__OPERATIONAL SERVICE (P5)__:

- Operational service with no immediate risk

<img src={shivaSupport_02} />

Once your request has been submitted, you can view your requests via __the 'help' icon__ located at the top right of the screen:

<img src={shivaSupport_03} />

## Logging - Activity Tracking

The activity page is designed to provide complete visibility into all read and write operations performed within the console, ensuring enhanced traceability and security. It highlights the two main tabs: Recent and Archived.

<img src={shivaLogs} />

### __Page Structure__

#### __Tabs__

- __Recent__

- Recent operations
- Real-time tracking

- __Archived__

- Operations over a longer period
- Archived operations for traceability and compliance

#### __Displayed Information__

- Date and Time

- Operation Type
  - Status
- User
- Operation Description

#### __Feature__

- Search/Filtering for specific operations

### __Usage__

- __Access :__ permission `activity_read`
- __Navigation :__
  - Select the "Recent" tab for real-time operations.
  - Choose "Archived" to view history.
  - Use search and filtering features to locate specific operations.

#### __Compliance Note__

As the Console is hosted on SecNumCloud-qualified infrastructure, its events are retained for a minimum of __6 months__, to meet security and traceability requirements.

## Viewing the Latest Updates

Click the __'What's New'__ icon at the bottom left of the green banner. You will see the detailed changes for each version of the Cloud Temple console.

<img src={shivaOnboard_009} />

<a id="accès-aux-fonctionnalités-utilisateur-via-lapi"></a>
<a id="provider-terraform"></a>

## Automate

The Console API and the Terraform provider are presented in [Onboarding](./onboarding.md#step-6-automate), and detailed in the [API documentation](./api.md) and in [Terraform Provider](/terraform).
