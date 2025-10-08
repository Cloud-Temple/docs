#### __Displayed Information__

 + Date and Time

- Operation Type
  - The state
- User
- Operation Description

## Connecting to your Cloud Temple tenant

Shiva is accessible via the following URL: [Shiva](https://shiva.cloud-temple.com) or directly via the URL you received by email.

The first page allows you to select [the organization](iam/concepts.md#organizations) in which your user was created.
Once the company is filled in, please click on __'Sign in'__.

<img src={shivaLogin} />

You will then be redirected to a page asking you to authenticate.
Once connected, you arrive on this page.

<img src={shivaHome} />

## Access to User Features via the API

Access to all the features of the Shiva console is possible via the Shiva API. You can get the details of the verbs and configurations via __'Profile'__ and __'APIs'__ :

<img src={shivaOnboard_008} />

### __Usage__

- __Access:__ permission `activity_read`
- __Navigation:__
  - Select the "Recent" tab for real-time operations.
  - Choose "Archived" to view the history.
  - Use the search and filter features to locate specific operations.

#### __Tabs__

 + **Recent**

- Recent operations
- Real-time tracking

- __Archived__

- Operations over a longer period
- Archived operations for traceability and compliance

## User Feature Access via the Web Interface

All features accessible to your user (depending on their rights) are located on the left side of the screen, in the green bar.
Features are grouped by module. This mainly includes:

- The __inventory__ of your resources,
- The __tracking of operations__,
- The __management of IaaS resources__ (Compute, storage, network, ...)
- The __management of OpenIaaS resources__ (Compute, storage, network, ...)
- Access to __auxiliary services__ (Bastion, monitoring, ...)
- The __administration of your organization__ (Tenant management, rights, ...)

The activation of a module for a user depends on the user's rights. For example, the module __'Order'__ will not be available if the user does not have the __'ORDER'__ right.

Here is an overview of the available modules. New modules regularly enrich the console:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__: provides a quick overview of the __total compute and storage resources__, backup __statistics__, and a __summary of support tickets__,
- __Inventory__: provides an overview of all your __virtual machines__ resources. If __tags__ are used, it allows a view by __tag__ (e.g., business view, application view, ...),
- __Service Management__: provides access to the tracking of your __support requests__ and __service metrics__,
- __IaaS__: enables the __management of VMware IaaS infrastructures__ (Virtual machines, clusters, hypervisors, replications, backups, ...),
- __OpenIaaS__: enables the __management of Xen Orchestra resources__ (Virtual machines, backups, ...),
- __OpenShift__: enables the management of your **RedHat OpenShift PaaS architecture** and container management across the 3 availability zones of the platform.
- __Bastion__: Allows deploying and managing SSH/RDP bastion appliances in your networks,
- __Network__: enables the management of __Layer 2 and 3 networks__, __public IPs__, and your __telecom circuits__,
- __Colocation__: Offers visibility on equipment located in __shared or dedicated colocation zones__,
- __Order__: Enables resource ordering and deployment tracking,
- __Administration__: Groups user and tenant administration functions as well as access to global logging.
</div>
</div>
The icons __'NEW'__ indicate that the product has been provisioned but is not yet qualified __SecNumCloud offer__ and __'BETA'__ indicates that the product has been provisioned and has just been qualified __SecNumCloud offer__.

__Logging - Activity Tracking__
=====================================

The activities page is designed to provide full visibility on all read and write operations performed within the console, ensuring enhanced traceability and security. It highlights the two main tabs: Recent and Archived.

<img src={shivaLogs} />

## Access to Technical Support

At any time, you can contact __the Cloud Temple Support Team__ via __the 'lifebuoy' icon__ located in the top right corner of the screen.

<img src={shivaSupport} />

You will be guided through the entire support request process.

The first step is to identify the type of support request:

- Request advice on using a product (non-incident),
- Request assistance related to your customer account,
- Report an incident or request technical support.
- Request the assistance of a professional service (deployment of a Cloud Temple engineer for a specific issue).

<img src={shivaSupport_01} />

You can then provide additional details and include files (images or logs for example).

The client can also specify a criticality level (P1 to P4) in the ticket description, in the case of a security incident, as follows:

__CRITICAL (P1)__:

- Suspected data breach
- Detection of unauthorized access to your data
- Compromise of your administrative credentials
- Total unavailability of your critical services
- Abnormal behavior on sensitive data
- Personal data violation

__HIGH (P2)__:

- User access malfunction
- Anomaly in data encryption
- Loss of access to certain critical features
- Data inconsistency
- Major performance issues impacting operations

__MEDIUM (P3)__:

- Localized performance issue
- Incident on a non-critical function
- Configuration error with limited impact
- Temporary access difficulties

__LOW (P4)__:

- Investigation request
- Anomaly without direct impact
- Compliance question
- Need for technical clarification

<img src={shivaSupport_02} />

Once your request is submitted, you can retrieve your requests via __the 'lifebuoy' icon__ located in the top right corner of the screen:

<img src={shivaSupport_03} />

## Viewing the latest updates

Click on the bottom left of the green banner on the __'New Features'__ icon. You will have the details of the changes for each version of the Cloud Temple console.

<img src={shivaOnboard_009} />

#### __Feature__

 + Search/Filtering for specific operations

### __Page Structure__

---
title: Quickstart
---
import shivaLogin from './images/shiva_login.png'
import shivaHome from './images/shiva_home.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaSupport from './images/shiva_support.png'
import shivaSupport_01 from './images/shiva_support_01.png'
import shivaSupport_02 from './images/shiva_support_02.png'
import shivaSupport_03 from './images/shiva_support_03.png'
import shivaOnboard_007 from './images/shiva_onboard_007.png'
import shivaLogs from './images/shiva_logs.png'
import shivaOnboard_009 from './images/shiva_onboard_009.png'
import shivaOnboard_008 from './images/shiva_onboard_008.png'

## Prerequisites

- Have subscribed to a Cloud Temple offer. To subscribe simply, you can [contact us](https://www.cloud-temple.com/contactez-nous/) or by email to __contact@cloud-temple.com__.
- Have access to the Shiva console
- Have your public IPv4 declared in the Cloud Temple trusted zone (access to the Shiva console is limited to identified trusted addresses)

## Terraform Provider

Cloud Temple provides you with a [Terraform Provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) to manage your Cloud platform *as code*.

## Language Management

The console is available in __French__, __English__. You can change the operating language through the __language__ icon located at the top right of the screen.

User language changes should be performed in their __'Profile'__, top right of the screen, in the __'User Settings'__.

<img src={shivaProfil_006} />

The configuration is set per tenant [Tenant](iam/concepts.md#tenant).

#### __Compliance Note__

In accordance with the SecNumCloud qualification, the storage of events from the Cloud Temple console has a minimum duration of __6 months__, thereby ensuring compliance with security and traceability requirements.
