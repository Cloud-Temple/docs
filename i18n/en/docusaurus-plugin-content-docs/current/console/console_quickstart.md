---
title: Quickstart
---

## Prerequisites
- Have subscribed to a Cloud Temple offer. To subscribe easily, you can [contact us](https://www.cloud-temple.com/contactez-nous/) or by email at __contact@cloud-temple.com__.
- Have access to the Shiva console
- Have your public IPv4 declared in the Cloud Temple trust zone (access to the Shiva console is limited to identified trusted addresses)

## Connecting to your Cloud Temple tenant
Shiva is accessible via the URL below:
    https://shiva.cloud-temple.com
    Or from the direct URL that was communicated to you by email.

The first page allows you to select [the organization](iam/concepts.md#organisations) in which your user was created.
Once the company is specified, please click on __'Log in'__.

![](images/shiva_login.png)

You will then be redirected to a page asking you to authenticate.
Once connected, you arrive on this page.

![](images/shiva_home.png)

## Language Management
The console is available in __French__, __English__. You can change the operating language using the __language__ icon located at the top right of the screen.

Changing a user's language is done in their __'Profile'__, at the top right of the screen, in the __'User Settings'__.

![](images/shiva_profil_006.png)

The configuration is done for each tenant [Tenant](iam/concepts.md#tenant).

## Accessing Technical Support

At any time, you can contact the __Cloud Temple support team__ via the __'life buoy' icon__ located at the top right of the screen.

![](images/shiva_support.png)

You will be guided through the entire support request process.

The first step is identifying the type of support request:

- Ask for advice on using a product (outside of incidents),
- Request assistance related to your customer account,
- Report an incident or request technical support.
- Request assistance from a professional service (provision of a Cloud Temple engineer for an issue).

![](images/shiva_support_01.png)

You can then provide details and include files (images or logs, for example).

The requester can also specify a level of criticality (P1 to P4) in the ticket description, in the case of an incident, such as:

**CRITICAL (P1)**:

- Suspected sensitive data leakage
- Detection of unauthorized access to your data
- Compromise of your administration credentials
- Total unavailability of your critical services
- Abnormal behaviors on sensitive data
- Personal data breach

**HIGH (P2)**:

- User access malfunctions
- Anomaly in your data encryption
- Loss of access to certain critical functionalities
- Data inconsistencies
- Major slowdowns impacting activity

**MEDIUM (P3)**:

- Localized performance issue
- Incident on a non-critical function
- Configuration error with limited impact
- Occasional access difficulty

**LOW (P4)**:

- Investigation request
- Anomaly without direct impact
- Compliance question
- Need for technical clarification

![](images/shiva_support_02.png)

Once your request is made, it is possible to find your requests via the __'life buoy' icon__ located at the top right of the screen:

![](images/shiva_support_03.png)

## Accessing User Features via the Web Interface

All features accessible to your user (depending on their rights) are located on the left of the screen in the green banner.
The features are grouped by module. This mainly includes:

- The __inventory__ of your resources,
- __Operations monitoring__,
- The __management of IaaS resources__ (Compute, storage, network, ...)
- The __management of OpenIaaS resources__ (Compute, storage, network, ...)
- Access to __ancillary services__ (Bastion, monitoring, ...)
- __Administration of your organization__ (Tenant management, rights management, ...)

The activation of a module for a user depends on the user's rights. For example, the __'Order'__ module will not be available if the user does not have the __'ORDER'__ right.

Here is an overview of the different modules available. New modules regularly enhance the console:

![](images/shiva_onboard_007.png)

- __Dashboard__ : provides a quick view of the __total compute and storage resources__, __backup statistics__, and a __summary of support cases__,
- __Inventory__ : provides a view of all your __'virtual machines' resources__. If __tags__ are used, it allows a view by __tag__ (for example, business view, application view, ...),
- __Managed Services__ : provides access to the monitoring of your __support requests__ and the __service metrics__,
- __IaaS__ : enables __management of VMware IaaS infrastructures__ (Virtual machines, clusters, hypervisors, replication, backup, ...),
- __OpenIaaS__ : enables __management of Xen Orchestra resources__ (Virtual machines, backup, ...),
- __OpenShift__ : enables the management of your **RedHat OpenShift PaaS architecture** and the management of your containers across the platform's 3 availability zones,
- __Bastion__ : Allows the deployment and management of SSH/RDP bastion appliances within your networks,
- __Network__ : allows management of __layer 2 and layer 3 networks__, __public IPs__, and your __telecom circuits__,
- __Colocation__ : Provides a view of equipment located in __shared or dedicated colocation areas__,
- __Order__ : Allows ordering of resources and monitoring deployments,
- __Administration__ : Groups the user and tenant administration functions and access to global logging.

The __'NEW'__ pictograms indicate that the product in question has been provisioned but is not yet qualified as a __SecNumCloud offer__ and __'BETA'__ indicates that the product in question has been provisioned and has just been qualified as a __SecNumCloud offer__.

## Accessing User Features via the API

Access to all functionalities of the Shiva console is possible via the Shiva API. You can get the details of the verbs and configurations via __'Profile'__ and __'APIs'__ :

![](images/shiva_onboard_008.png)

## Terraform Provider

Cloud Temple provides you with a Terraform provider to manage your Cloud platform "as code". It is accessible here:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest