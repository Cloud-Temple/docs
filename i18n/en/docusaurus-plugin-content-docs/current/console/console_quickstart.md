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
Once the company is filled in, please click on __'Login'__.

![](images/shiva_login.png)

You will then be redirected to a page asking you to authenticate.
Once logged in, you will arrive on this page.

![](images/shiva_home.png)

## Language management
The console is available in __French__, __English__. You can change the operating language through the __language__ icon located at the top right of the screen.

Changing a user's language is done in their __'Profile'__, at the top right of the screen, in the __'User Settings'__.

![](images/shiva_profil_006.png)

The configuration is done for each [Tenant](iam/concepts.md#tenant).

## Access to technical support

At any time, you can contact the __Cloud Temple support team__ via the __'lifebuoy' icon__ located at the top right of the screen.

![](images/shiva_support.png)

You will be guided through the entire support request process.

The first step is identifying the type of support request:

- Request advice on using a product (non-incident),
- Request assistance related to your customer account,
- Report an incident or request technical support,
- Request the assistance of a professional service (provision of a Cloud Temple engineer for a specific issue).

![](images/shiva_support_01.png)

You then have the option to provide details and include files (image or logs, for example).

The requester can also specify a level of criticality (P1 to P4) in the ticket description, in the case of an incident, such as:

**CRITICAL (P1)**:

- Suspected leak of sensitive data
- Detection of unauthorized access to your data
- Compromise of your admin credentials
- Total unavailability of your critical services
- Abnormal behavior on sensitive data
- Personal data breach

**HIGH (P2)**:

- User access malfunction
- Anomaly in the encryption of your data
- Loss of access to certain critical features
- Data inconsistencies
- Major slowness impacting activity

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

Once your request is made, it is possible to find your requests via the __'lifebuoy' icon__ located at the top right of the screen:

![](images/shiva_support_03.png)

## Accessing user features via the web interface

All functionalities accessible to your user (depending on their rights) are located on the left of the screen, in the green banner.
Functionalities are grouped by module. This mainly includes:

- The __inventory__ of your resources,
- The __operations tracking__,
- The __management of IaaS resources__ (Compute, storage, network, ...)
- The __management of OpenIaaS resources__ (Compute, storage, network, ...)
- Access to __additional services__ (Bastion, monitoring, ...)
- The __administration of your organization__ (Management of tenants, rights, ...)

Activating a module for a user depends on the user's rights. For example, the __'Order'__ module will not be available if the user does not have the __'ORDER'__ right.

Here is an overview of the different available modules. New modules regularly enrich the console:

![](images/shiva_onboard_007.png)

- __Dashboard__: provides a quick view of the __total compute and storage resources__, __backup__ statistics, and a __summary of support tickets__,
- __Inventory__: provides a view of all your __'virtual machines'__ resources. If __tags__ are used, it provides a view by __tag__ (e.g., business view, application view, ...),
- __Managed Services__: provides access to your __support requests__ tracking and __service metrics__,
- __IaaS__: allows the __management of VMware IaaS infrastructure__ (Virtual machines, clusters, hypervisors, replication, backup, ...),
- __OpenIaaS__: allows the __management of Xen Orchestra resources__ (Virtual machines, backup, ...),
- __OpenShift__: allows managing your **RedHat OpenShift PaaS architecture** and managing your containers across the three availability zones of the platform,
- __Bastion__: allows deploying and managing SSH/RDP bastion appliances in your networks,
- __Network__: allows managing __layer 2 and 3 networks__, __public IPs__, and your __telecom circuits__,
- __Colocation__: provides a view of equipment located in a __shared or dedicated colocation area__,
- __Order__: allows ordering resources and tracking deployments,
- __Administration__: gathers the functions for user and tenant administration and access to global logging.

The __'NEW'__ pictograms mean that the product in question has been provisioned but is not yet qualified with the __SecNumCloud offer__, and __'BETA'__ means that the product in question has been provisioned and has just been qualified with the __SecNumCloud offer__.

**Logging - Activity Tracking**
=====================================

The activity page is designed to provide complete visibility into all read and write operations performed within the console, ensuring enhanced traceability and security. It highlights the two main tabs: Recent and Archived.

![](images/shiva_logs.png)

### **Page Structure**

#### **Tabs**
	+ **Recent**
		- Recent operations
		- Real-time tracking
	+ **Archived**
		- Operations over a longer period
		- Archived operations for traceability and compliance
#### **Displayed Information**
	+ Date and Time
	+ Operation type
    + Status
	+ User
	+ Operation description
#### **Functionality**
	+ Search/Filter for specific operations

### **Usage**

* **Access:** `activity_read` permission
* **Navigation:**
	- Select the "Recent" tab for real-time operations.
	- Choose "Archived" to view the history.
	- Use search and filter features to locate specific operations.

#### **Compliance Note**
In accordance with SecNumCloud qualification, the storage duration of Cloud Temple console events is a minimum of **6 months**, ensuring compliance with security and traceability requirements.

## Viewing the latest updates

Click at the bottom left of the green banner on the __'News'__ icon. You will see details of changes for each version of the Cloud Temple console.

![](images/shiva_onboard_009.png)

## Accessing user features via the API

Accessing all the functionalities of the Shiva console is possible via the Shiva API. You can get the details of verbs and configurations through __'Profile'__ and __'APIs'__:

![](images/shiva_onboard_008.png)

## Terraform Provider

Cloud Temple provides a Terraform provider to manage your Cloud platform "as code". It is accessible here:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest