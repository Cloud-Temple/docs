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
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'

## Prerequisites

- Have a Cloud Temple product subscription. To subscribe easily, you can [contact us](https://www.cloud-temple.com/contactez-nous/) or email __contact@cloud-temple.com__.
- Have access to the Console
- Have your public IPv4 address registered in the Cloud Temple trusted zone (Console access is limited to identified trusted addresses)

## Connecting to your Cloud Temple tenant

The Console is accessible via the URL below: [Console](https://shiva.cloud-temple.com) or directly from the URL provided to you via email.

The first page allows you to select the [organization](iam/concepts.md#organisations) in which your user was created.
Once the company is entered, please click on __'Log in'__.

<img src={shivaLogin} />

You will then be redirected to a page asking you to authenticate.
Once logged in, you will arrive on this page.

You will find all metrics regarding the products subscribed to within your scope. In case of issue(s) with your VMware and/or OpenIaaS products, alerts will be visible; the color corresponds to their severity.

<img src={shivaHome} />

## Language Management

The console is available in __French__, __English__. You can change the working language using the __language__ icon located in the top right corner of the screen.

A user's language change must be performed in their __'Profile'__, located in the top right corner of the screen, in __'User Settings'__.

<img src={shivaProfil_006} />

The configuration is applied per tenant [Tenant](iam/concepts.md#tenant).

## Technical Support Access

At any time, you can contact __the Cloud Temple support team__ via __the 'lifebuoy' icon__ located in the top right corner of the screen.

<img src={shivaSupport} />

You will be guided throughout the support request process.

The first step is identifying the type of support request:

- Request advice on using a product (hors incident),
- Request assistance related to your customer account,
- Report an incident or request technical support.
- Request professional service assistance (mise à disposition d'un ingénieur Cloud Temple sur une problématique).

<img src={shivaSupport_01} />

You can then provide additional details and attach files (image ou journaux par exemple).

The requester can also specify a criticality level (P1 à P5) in the ticket description, in the case of a security incident, such as:

<img src={shivaSupportCriticities} />

__CRITICAL (P1)__:

- Suspected sensitive data breach
- Detection of unauthorized access to your data
- Compromise of your administrative credentials
- Total unavailability of your critical services
- Abnormal behavior on sensitive data
- Personal data breach

__HIGH (P2)h__:

- User access malfunction
- Anomaly in your data encryption
- Loss of access to certain critical features
- Data inconsistency
- Major slowdowns impacting business operations

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

Once your request is submitted, you can retrieve your requests via __the 'lifebuoy' icon__ located in the top right corner of the screen :

<img src={shivaSupport_03} />

## User Feature Access via the Web Interface

All features accessible to your user (en fonction de ses droits) are located on the left side of the screen, in the green banner.
Features are grouped by module. This primarily includes:

- The __inventory__ of your resources,
- The __operation tracking__,
- The __management of IaaS resources__ (Calcul, stockage, réseau, ...)
- The __management of OpenIaaS resources__ (Calcul, stockage, réseau, ...)
- Access to __ancillary services__ (Bastion, monitoring, ...)
- The __administration of your organization__ (Gestion des tenants, des droits, ...)

Enabling a module for a user depends on the user's permissions. For example, the __'Order'__ module will not be available if the user does not have the __'ORDER'__ permission.

Below is a presentation of the available modules. New modules are regularly added to enrich the console:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__ : provides a quick overview of the __total compute and storage resources__, backup statistics, and a __summary of support tickets__,
- __Inventory__ : provides a view of all your __'virtual machines'__ resources. If __tags__ are used, it allows a view by __tag__ (par exemple, vue métier, vue applicatif, ...),
- __Managed Services__ : provides access to tracking your __support requests__ and __service metrics__,
- __IaaS__ : allows __management of VMware IaaS infrastructure__ (Machines virtuelles, clusters, hyperviseurs, réplications, sauvegarde, ...),
- __OpenIaaS__ : allows __management of Xen Orchestra resources__ (Machines virtuelles, sauvegarde, ...),
- __OpenShift__ : allows management of your **RedHat OpenShift PaaS architecture** and management of your containers across the platform's 3 availability zones.
- __Bastion__ : Allows deploying and managing SSH/RDP bastion appliances in your networks,
- __Network__ : allows management of __Layer 2 and Layer 3 networks__, __public IPs__, and your __telecom circuits__,
- __Colocation__ : Provides a view of equipment located in __shared or dedicated colocation zones__,
- __Order__ : Allows ordering resources and tracking deployments,
- __Administration__ : Groups user and tenant administration functions as well as access to global logging.
</div>
</div>
The __'NEW'__ pictograms indicate that the product in question has been provisioned but is not yet qualified under the __SecNumCloud offer__, and __'BETA'__ indicates that the product in question has been provisioned and has just been qualified under the __SecNumCloud offer__.

__Logging - Activity Tracking__
=====================================

The activities page is designed to provide complete visibility into all read and write operations performed within the console, thereby ensuring enhanced traceability and security. It highlights the two main tabs: Recent and Archived.

<img src={shivaLogs} />

### __Page Structure__

#### __Tabs__

- __Recent__

- Recent operations
- Real-time monitoring

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

- __Access:__ permission `activity_read`
- __Navigation:__
  - Select the "Recent" tab for real-time operations.
  - Choose "Archived" to view the history.
  - Use the search and filtering features to locate specific operations.

#### __Compliance Note__

In accordance with the SecNumCloud qualification, event storage for the Cloud Temple console is retained for a minimum of __6 months__, thereby ensuring compliance with security and traceability requirements.

## Viewing the latest updates

Click on the __'What's New'__ icon at the bottom left of the green banner. You will see the details of the changes for each version of the Cloud Temple console.

<img src={shivaOnboard_009} />

## Access to user features via the API

Access to all Console features is available via the Console API. You can view details on the verbs and configurations via __'Profile'__ and __'APIs'__ :

<img src={shivaOnboard_008} />

## Terraform Provider

Cloud Temple provides you with a [Terraform provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) to manage your Cloud platform *"as code".