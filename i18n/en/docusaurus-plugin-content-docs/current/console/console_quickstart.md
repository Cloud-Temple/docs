---
title: Quickstart
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaLogsDetail from '@site/docs/console/images/shiva_logs_detail.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgTenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgAccess from '@site/docs/console/images/shiva_org_access.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

## Prerequisites

- Have subscribed to a Cloud Temple product. To subscribe, you can [contact us](https://www.cloud-temple.com/contactez-nous/) or by email at __contact@cloud-temple.com__.
- Have access to the Console
- Have your public IPv4 address declared in the Cloud Temple trust zone (Console access is limited to identified trusted addresses)

## Connecting to your Cloud Temple tenant

The Console is accessible via the URL below: [Console](https://shiva.cloud-temple.com) or from the direct URL that was communicated to you by email.

The first page allows you to select the [organization](iam/concepts.md#organizations) in which your user was created.
Once the organization is entered, please click on __'Log in'__.

<img src={shivaLogin} />

You will then be redirected to a page asking you to authenticate.
Once logged in, you arrive on this page.

You will find all the metrics related to the products subscribed to within your scope. In case of issue(s) on your VMware and/or OpenIaaS products, alerts will be visible; the color is related to their severity.

<img src={shivaHome} />

## Organization view

:::info
The **organization view** is reserved for **organization owners**.
:::

The **organization view** groups the management functions of your entity within the Cloud Temple Console: tenant management, user management and their permissions, access control, and consumption tracking. An organization federates one or more **tenants** (isolated cloud environments) and user permissions are subject to **per-tenant segregation**.

:::info
This section describes the **interface**: where to find each function and what it allows. The **reference** documentation for the organization/tenant model and permissions is found in the [IAM](iam/concepts.md) module.
:::

### Banner and working tenant selection

At the top of the Console, the banner displays the current organization (**"My organization"**). The associated selector opens the **"My tenants"** list: each tenant is listed, accompanied by the **SecNumCloud** badge where applicable.

To **select the working tenant**, two options:

- from the banner, open the **"My tenants"** selector and click on the desired tenant;
- from the **Tenants** page, use the **"Connect to tenant"** action on a row.

Technical resources (compute, storage, network…) are **specific to each tenant** and are not shared between tenants.

<img src={imgSelector} />

### Dashboard

The **Dashboard** is the organization's home page. It presents a cross-cutting overview:

- the status of **support tickets** (open, responses required, customer validation, incidents);
- the **number of tenants** in the organization;
- a **cost overview** (current month cost, breakdown by tenant and by service).

<img src={imgDashboard} />

### Organization administration

The **Administration** section of the left navigation groups the organization's governance pages.

| Page | Role |
|---|---|
| **Tenants** | Create and evolve tenants |
| **Users** | Manage accounts and their permissions |
| **Access** | List of authorized public IPs (whitelist) |
| **Logs** | Activity journal (audit trail) |
| **Support** | Organization tickets |

The **Cost Manager** (outside the Administration section) provides consumption tracking.

### Tenants

The **Tenants** page lists all tenants in the organization. A search bar and pagination facilitate navigation when there are many tenants.

#### Creating a tenant

The **"New tenant"** button opens a two-part form:

- **Tenant identity**: the **name** (validated in real time) and a **description**;
- **Tenant products**: the products to activate on the tenant. The **"Select all"** / **"Deselect all"** buttons speed up the input.

Validate with **"Create"**: the tenant is initialized with the selected products.

#### Actions on a tenant

The action menu of each row offers:

- **Connect to tenant** — sets this tenant as the working tenant;
- **Modify products** — activates or deactivates products on the tenant, to evolve its scope;
- **Copy UUID** — copies the tenant's technical identifier (useful for the API or a support ticket).

#### Owners and lifecycle

- **Creation**: self-service via **"New tenant"**.
- **Evolution**: addition or removal of products via **"Modify products"**.
- **Tenant owners**: each tenant has at least one owner. The rules (recommended number, propagation delay, removal upon support request, owner permissions) are detailed in the [IAM](iam/concepts.md) module.

:::info
Operations on tenants are traced in the **Logs** page (for example "*Creating tenant…*" or "*Updating features on tenant…*" ).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

### Users and permissions

The **Users** page lists the organization's accounts. Credentials are **global to the organization**; permissions, however, are defined **per tenant**.

For each account, the **name**, **email**, **type** of account — **Federated account** (external identity directory) or **Local account** — and visual indicators are displayed: **Organization owner**, **Me**, or **Unverified email** (unfinalized account).

#### Page tools

- **Filters**: by **Organization owners**, **Type**, **Source**, and **Status**.
- **Export CSV**: export of the user list and their access, useful for auditing.

#### Actions on an account

The action menu offers, depending on the account's state:

- **Add as organization owner**;
- **Re-invite** — resends the invitation to an unfinalized account;
- **Copy UUID**;
- **Delete**.

:::note
You cannot delete yourself. The **invitation** of a new user and the **fine-grained permission assignment per tenant** are described in the [IAM](iam/quickstart.md) module.
:::

#### Organization owner and tenant owner

These are two distinct notions:

- the **organization owner** is added from the **Users** page (action "Add as organization owner"); their **removal is performed upon support request**;
- the **tenant owner** falls within the scope of a tenant; its rules are described in the [IAM](iam/concepts.md) module.

:::info
As an **organization owner**, you are by default the **owner of all tenants** in the organization. In this capacity, you have all permissions on each of these tenants. Conversely, if this role is removed from you, you **do not lose** these permissions: they remain granted on the affected tenants.
:::

<img src={imgUsers} />

### Access — IP whitelist

The **Access** page manages the **list of authorized public IP addresses** to connect to the Console. In accordance with **SecNumCloud** requirements, only traffic originating from these addresses is accepted.

- Each entry associates an **IP** (CIDR notation) with a **description**.
- The **"Add an IP"** button allows adding an address to the list.

:::warning
The **removal** of an authorized IP is performed upon **support request**.
:::

<img src={imgAccess} />

### Consumption report — Cost Manager

The **Cost Manager** provides a view of the organization's consumption, broken down by tenant. It offers two tabs.

#### "Overview" tab

Synthetic view of the current month:

- key indicators: **current month cost**, **current year cost**, **number of active products**;
- **Cost by tenant** — cost distribution between tenants;
- **Current cost by service** and **Current cost by product** — main consumption items.

#### "Consumption" tab

Detailed and historical report:

- selection of the **period** (start and end month) and the **"Display by"** axis;
- **Monthly consumption**, **Total**, **Forecast**, and **Trend** views;
- expandable table by **Month / Tenant / Service / Product / Amount**, with the **trend** compared to the previous month.

:::info
The current month's amount is **forecast**: it is estimated based on the days already consumed.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Logging and support

- **Logs** — the **Activities** page traces the organization's read and write operations (tabs **Recent** / **Archived**, filters, CSV export) for audit purposes. See also the [Logging — Activity Tracking](#logging---activity-tracking) section below.
- **Support** — the **Support** page centralizes the **organization's tickets** (indicators, ticket creation, filters, export). The creation and tracking of requests are described in the [Technical support access](#technical-support-access) section below.

## Language management

The console is available in __French__, __English__. You can change the operating language using the __language__ icon located at the top right of the screen.

The language change for a user must be done in their __'Profile'__, at the top right of the screen, in the __'User settings'__.

<img src={shivaProfil_006} />

The configuration is done for each tenant [Tenant](iam/concepts.md#tenant).

## Technical support access

At any time, you can contact __the Cloud Temple support team__ via __the 'lifebuoy' icon__ located at the top right of the screen.

<img src={shivaSupport} />

You will be guided throughout the entire support request process.

The first step is identifying the type of support request:

- Request advice on the use of a product (non-incident),
- Request assistance related to your customer account,
- Declare an incident or request technical support.
- Request the assistance of a professional service (provision of a Cloud Temple engineer on a specific issue).

<img src={shivaSupport_01} />

You then have the option to provide details and include files (images or logs, for example).

The requester can also specify a severity level (P1 to P5) in the ticket description, in the case of a security incident, such as:

<img src={shivaSupportCriticities} />

__CRITICAL (P1)__:

- Suspected leak of sensitive data
- Detection of unauthorized access to your data
- Compromise of your administrative credentials
- Total unavailability of your critical services
- Abnormal behavior on sensitive data
- Violation of personal data

__HIGH (P2)__:

- User access malfunction
- Anomaly in the encryption of your data
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
- Anomaly without direct impact
- Compliance question
- Need for technical clarification

__OPERATIONAL SERVICE (P5)__:

- Service operational with no immediate risk

<img src={shivaSupport_02} />

Once your request has been submitted, you can find your requests via __the 'lifebuoy' icon__ located at the top right of the screen:

<img src={shivaSupport_03} />

## Accessing user features via the web interface

All features available to your user (based on their permissions) are located on the left side of the screen, in the green banner.
Features are grouped by module. This mainly includes:

- The __inventory__ of your resources,
- The __operations tracking__,
- The __IaaS resource management__ (Compute, storage, network, ...)
- The __OpenIaaS resource management__ (Compute, storage, network, ...)
- Access to __ancillary services__ (Bastion, monitoring, ...)
- The __administration of your organization__ (Tenant management, permissions, ...)

The activation of a module for a user depends on the user's permissions. For example, the __'Order'__ module will not be available if the user does not have the __'ORDER'__ permission.

Here is an overview of the different available modules. New modules regularly enrich the console:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__: provides a quick overview of the __total compute and storage resources__, __backup__ statistics and a __summary of support tickets__,
- __Inventory__: provides a view of all your __'virtual machines'__ resources. If __tags__ are used, it provides a view by __tag__ (for example, business view, application view, ...),
- __Managed Services__: provides access to the tracking of your __support requests__ and to the __service metering__,
- __IaaS__: enables the __management of VMware IaaS infrastructures__ (Virtual machines, clusters, hypervisors, replications, backup, ...),
- __OpenIaaS__: enables the __management of Xen Orchestra resources__ (Virtual machines, backup, ...),
- __OpenShift__: enables the management of your **RedHat OpenShift PaaS architecture** and the management of your containers across the 3 availability zones of the platform.
- __Bastion__: Allows deploying and managing SSH/RDP bastion appliances in your networks,
- __Network__: enables the management of __layer 2 and 3 networks__, __public IPs__ and your __telecom circuits__,
- __Colocation__: Provides a view of equipment located in a __shared or dedicated colocation zone__,
- __Order__: Allows ordering resources and tracking deployments,
- __Administration__: Groups user and tenant administration functions as well as access to global logging.
</div>
</div>
The __'NEW'__ icons indicate that the product in question has been provisioned but is not yet qualified as a __SecNumCloud offering__ and __'BETA'__ indicates that the product in question has been provisioned and has just been qualified as a __SecNumCloud offering__.

## Logging - Activity Tracking

The activities page is designed to provide full visibility on all read and write operations performed within the console, thereby ensuring enhanced traceability and security. It highlights the two main tabs: Recent and Archived.

<img src={shivaLogs} />

It is possible to open the details of a log by expanding its line.

<img src={shivaLogsDetail} />

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

- Operation type
  - Status
- User
- Operation description

#### __Feature__

- Search/Filtering for specific operations

### __Usage__

- __Access:__ `activity_read` permission
- __Navigation:__
  - Select the "Recent" tab for real-time operations.
  - Choose "Archived" to view the history.
  - Use the search and filtering features to locate specific operations.

#### __Compliance Note__

In accordance with the SecNumCloud qualification, the storage of Cloud Temple console events has a minimum duration of __6 months__, thereby ensuring compliance with security and traceability requirements.

## Viewing the latest updates

Click on the __'New Features'__ icon at the bottom left of the green banner. You will find the details of the changes for each version of the Cloud Temple console.

<img src={shivaOnboard_009} />

## Accessing user features via the API

Access to all Console features is possible via the Console API. You can find the details of the verbs and configurations via __'Profile'__ and __'APIs'__:

<img src={shivaOnboard_008} />

## Terraform Provider

Cloud Temple provides you with a [Terraform provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) to manage your Cloud platform *"as code"*.
