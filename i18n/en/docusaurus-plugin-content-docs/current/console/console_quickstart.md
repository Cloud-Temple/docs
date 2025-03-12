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

- Have subscribed to a Cloud Temple offer. To subscribe easily, you can [contact us](https://www.cloud-temple.com/contactez-nous/) or by email at __contact@cloud-temple.com__.
- Have access to the Shiva console
- Have your public IPv4 declared in the Cloud Temple trust zone (access to the Shiva console is limited to identified trusted addresses)

## Connecting to your Cloud Temple tenant

Shiva is accessible via the URL below: [Shiva](https://shiva.cloud-temple.com) or from the direct URL that was sent to you by email.

The first page allows you to select [the organization](iam/concepts.md#organisations) in which your user was created.
Once the company is entered, please click on __'Log In'__.

<img src={shivaLogin} />

You will then be redirected to a page asking you to authenticate.
Once logged in, you arrive on this page.

<img src={shivaHome} />

## Language Management

The console is available in __French__ and __English__. You can change the operating language using the __language__ icon located at the top right of the screen.

Changing a user's language is done in their __'Profile'__, at the top right of the screen, in the __'User Settings'__.

<img src={shivaProfil_006} />

The configuration is done for each [Tenant](iam/concepts.md#tenant).

## Access to technical support

At any time, you can contact the __Cloud Temple support team__ via the __'life buoy' icon__ located at the top right of the screen.

<img src={shivaSupport} />

You will be guided through the entire support request process.

The first step is to identify the type of support request:

- Request advice on using a product (outside incidents),
- Request assistance related to your customer account,
- Report an incident or request technical support,
- Request professional service assistance (provision of a Cloud Temple engineer for an issue).

<img src={shivaSupport_01} />

You then have the option to provide details and include files (images or logs, for example).

The requester can also specify a criticality level (P1 to P4) in the ticket description, in case of an incident, such as:

__CRITICAL (P1)__:

- Suspected sensitive data breach
- Detection of unauthorized access to your data
- Compromise of your administrative credentials
- Total unavailability of your critical services
- Abnormal behaviors on sensitive data
- Personal data breach

__HIGH (P2)__:

- User access malfunction
- Data encryption anomaly
- Loss of access to certain critical features
- Data inconsistency
- Major slowdowns impacting activity

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

<img src={shivaSupport_02} />

Once your request is made, you can find your requests via the __'life buoy' icon__ located at the top right of the screen:

<img src={shivaSupport_03} />

## Access to user features via the web interface

All features accessible to your user (depending on their rights) are located on the left of the screen, in the green strip.
Features are grouped by module. This mainly includes:

- The __inventory__ of your resources,
- The __operations tracking__,
- The __IaaS resources management__ (Compute, storage, network, etc.),
- The __OpenIaaS resources management__ (Compute, storage, network, etc.),
- Access to __additional services__ (Bastion, monitoring, etc.),
- The __administration of your organization__ (Management of tenants, rights, etc.).

The activation of a module for a user depends on the user's rights. For example, the __'Order'__ module will not be available if the user does not have the __'ORDER'__ right.

Here is an overview of the different available modules. New modules are regularly added to the console:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__: provides a quick view of the __total compute and storage resources__, backup statistics, and a __summary of support tickets__,
- __Inventory__: provides a view of all your __'virtual machines' resources__. If __tags__ are used, it provides a view by __tag__ (e.g., business view, application view, etc.),
- __Managed Services__: provides access to the tracking of your __support requests__ and service metrics,
- __IaaS__: allows management of VMware IaaS infrastructure (Virtual machines, clusters, hypervisors, replication, backup, etc.),
- __OpenIaaS__: allows management of Xen Orchestra resources (Virtual machines, backup, etc.),
- __OpenShift__: allows management of your **RedHat Openshift PaaS architecture** and containers across the platform's three availability zones,
- __Bastion__: Allows deployment and management of SSH/RDP bastion appliances in your networks,
- __Network__: allows management of __Layer 2 and 3 networks__, __public IPs__, and your __telecom circuits__,
- __Colocation__: Provides a view of equipment located in __shared or dedicated colocation areas__,
- __Order__: Allows ordering of resources and tracking deployments,
- __Administration__: Groups user and tenant administration functions and access to global logging.
</div>
</div>
The __'NEW'__ icons indicate that the product has been provisioned but is not yet qualified as a __SecNumCloud offer__, and __'BETA'__ indicates that the product has been provisioned and has just been qualified as a __SecNumCloud offer__.

__Logging - Activity Tracking__
=====================================

The activities page is designed to provide a complete overview of all read and write operations within the console, ensuring increased traceability and security. It highlights the two main tabs: Recent and Archived.

<img src={shivaLogs} />

### __Page Structure__

#### __Tabs__

 + **Recent**

- Recent operations
- Real-time tracking

 + __Archived__

- Operations over a longer period
- Archived operations for traceability and compliance

#### __Displayed Information__

 + Date and Time
 + Type of operation
 + Status
 + User
 + Description of operation

#### __Functionality__

 + Search/Filter for specific operations

### __Usage__

- __Access:__ permission `activity_read`
- __Navigation:__
  - Select the "Recent" tab for real-time operations.
  - Choose "Archived" to view the history.
  - Use the search and filter functions to locate specific operations.

#### __Compliance Note__

In accordance with SecNumCloud qualification, the storage of console events at Cloud Temple is for a minimum duration of __6 months__, thereby ensuring compliance with security and traceability requirements.

## Checking the latest updates

Click at the bottom left of the green strip on the __'What's new' icon__. You will get the details of changes for each version of the Cloud Temple console.

<img src={shivaOnboard_009} />

## Access to user features via the API

Access to all Shiva console features is possible via the Shiva API. You can see details of verbs and configurations via __'Profile'__ and __'APIs'__:

<img src={shivaOnboard_008} />

## Terraform Provider

Cloud Temple provides you with a [Terraform provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) to manage your Cloud platform "as code".
