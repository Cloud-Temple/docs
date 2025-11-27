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
import shivaSupportCriticities from './images/shiva_incident_criticities.png'

## Prerequisites

- Have subscribed to a Cloud Temple offer. To subscribe easily, you can [contact us](https://www.cloud-temple.com/contactez-nous/) or by email at __contact@cloud-temple.com__.
- Have access to the Shiva console
- Have your public IPv4 address registered in the Cloud Temple trusted zone (access to the Shiva console is restricted to identified trusted addresses)

## Connecting to Your Cloud Temple Tenant

Shiva is accessible via the URL below: [Shiva](https://shiva.cloud-temple.com) or directly through the URL provided to you by email.

The first page allows you to select the [organization](iam/concepts.md#organizations) in which your user was created.  
Once you have entered the company name, click on __'Sign In'__.

<img src={shivaLogin} />

You will then be redirected to a page prompting you to authenticate.  
After logging in, you will land on this page.

Here, you will find all metrics related to the products subscribed to within your scope. If there are any issues with your VMware and/or OpenIaaS products, alerts will be displayed—alert severity is indicated by color. 

<img src={shivaHome} />

## Language Management

The console is available in __French__ and __English__. You can change the operating language using the __language__ icon located in the top-right corner of the screen.

To change a user's language, go to their __'Profile'__, in the top-right corner of the screen, and select __'User Settings'__.

<img src={shivaProfil_006} />

This configuration is set individually for each tenant [Tenant](iam/concepts.md#tenant).

## Technical Support Access

At any time, you can contact the __Cloud Temple Support Team__ via the __"buoy" icon__ located in the top-right corner of the screen.

<img src={shivaSupport} />

You will be guided through the entire support request process.

The first step is identifying the type of support request:

- Request advice on using a product (non-incident related),
- Request assistance related to your customer account,
- Report an incident or request technical support.
- Request professional services assistance (provision of a Cloud Temple engineer for a specific issue).

<img src={shivaSupport_01} />

You can then provide additional details and attach files (e.g., images or logs).

The requester may also specify a severity level (P1 to P5) in the ticket description, particularly in the case of a security incident, as follows:

<img src={shivaSupportCriticities} />

__CRITICAL (P1)__:

- Suspected leakage of sensitive data
- Detection of unauthorized access to your data
- Compromise of your administrative credentials
- Complete unavailability of your critical services
- Abnormal behavior on sensitive data
- Breach of personal data

__HIGH (P2)__:

- User access malfunction
- Anomaly in data encryption
- Loss of access to certain critical features
- Data inconsistency
- Significant performance degradation impacting operations

__MEDIUM (P3)__:

- Localized performance issue
- Incident affecting a non-critical function
- Configuration error with limited impact
- Occasional access difficulties

__LOW (P4)__:

- Request for investigation
- Anomaly with no direct impact
- Compliance-related question
- Need for technical clarification

__OPERATIONAL SERVICE (P5)__:

- Operational service with no immediate risk

<img src={shivaSupport_02} />

Once your request has been submitted, you can retrieve your requests via the __"buoy" icon__ located in the top-right corner of the screen:

<img src={shivaSupport_03} />

## User Feature Access via the Web Interface

All features accessible to your user (based on their permissions) are located on the left side of the screen, within the green sidebar.  
Features are grouped by module. These primarily include:

- The __inventory__ of your resources,  
- The __tracking of operations__,  
- The __management of IaaS resources__ (Compute, storage, networking, ...),  
- The __management of OpenIaaS resources__ (Compute, storage, networking, ...),  
- Access to __additional services__ (Bastion, monitoring, ...),  
- The __administration of your organization__ (Tenant and permission management, ...).

The activation of a module for a user depends on their user rights. For example, the __'Order'__ module will not be available if the user does not have the __'ORDER'__ permission.

Below is an overview of the available modules. New modules are regularly added to the console:

<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Dashboard__: provides a quick overview of the __total compute and storage resources__, backup __statistics__, and a __summary of support tickets__,
- __Inventory__: offers a view of all your __virtual machines__. If __tags__ are used, it enables filtering by __tag__ (e.g., business view, application view, ...),
- __Managed Services__: provides access to the tracking of your __support requests__ and __service metrics__,
- __IaaS__: enables the __management of VMware IaaS infrastructures__ (virtual machines, clusters, hypervisors, replication, backup, ...),
- __OpenIaaS__: enables the __management of Xen Orchestra resources__ (virtual machines, backup, ...),
- __OpenShift__: enables the management of your **RedHat OpenShift PaaS architecture** and container management across the three availability zones of the platform.
- __Bastion__: allows deployment and management of SSH/RDP bastion appliances within your networks,
- __Networking__: enables management of __Layer 2 and Layer 3 networks__, __public IPs__, and your __telecom circuits__,
- __Colocation__: provides visibility into equipment located in shared or dedicated colocation zones,
- __Order__: enables resource ordering and deployment tracking,
- __Administration__: consolidates user and tenant administration functions, as well as access to global logging.
</div>
</div>

The __'NEW'__ icons indicate that the corresponding product has been provisioned but is not yet qualified as a __SecNumCloud offering__, while __'BETA'__ icons indicate that the product has been provisioned and has just been qualified as a __SecNumCloud offering__.

__Logging - Activity Tracking__
=====================================

The Activities page is designed to provide full visibility into all read and write operations performed within the console, ensuring enhanced traceability and security. It highlights two main tabs: Recent and Archived.

<img src={shivaLogs} />

### __Page Structure__

#### __Tabs__

 + **Recent**

- Recent operations
- Real-time tracking

- __Archived__

- Operations over a longer period
- Archived operations for traceability and compliance

#### __Displayed Information__

 + Date and Time

- Operation Type
  - Status
- User
- Operation Description

#### __Feature__

 + Search/Filter for specific operations

### __Usage__

- __Access:__ permission `activity_read`
- __Navigation:__
  - Select the "Recent" tab for real-time operations.
  - Choose "Archived" to view the history.
  - Use search and filtering features to locate specific operations.

#### __Compliance Note__

In accordance with the SecNumCloud certification, the retention period for Cloud Temple console event logs is a minimum of __6 months__, ensuring compliance with security and traceability requirements.

## Checking for Latest Updates

Click on the __'New Features'__ icon at the bottom-left of the green banner. You will find detailed information about the changes for each version of the Cloud Temple console.

<img src={shivaOnboard_009} />

## User Features Access via API

Access to all features of the Shiva console is available through the Shiva API. You can find detailed information about verbs and configurations via __'Profile'__ and __'APIs'__:

<img src={shivaOnboard_008} />

## Terraform Provider

Cloud Temple provides you with a [Terraform provider](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) to manage your Cloud platform *"as code"*.
