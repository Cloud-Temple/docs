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

## Language Management
The console is available in __French__, __English__. You can change the operating language using the __language__ icon located at the top right of the screen.

The user's language change is done in their __'Profile'__, at the top right of the screen, in the __'User Settings'__.

![](images/shiva_profil_006.png)

The configuration is done for each tenant [Tenant](iam/concepts.md#tenant).

## Access to Technical Support

At any time, you can contact the __Cloud Temple support team__ via the __'lifebuoy' icon__ located at the top right of the screen.

![](images/shiva_support.png)

You will be guided throughout the support request process.

The first step is to identify the type of support request:

- Request advice on using a product (non-incident),
- Request assistance related to your client account,
- Report an incident or request technical support.
- Request assistance from a professional service (provision of a Cloud Temple engineer for an issue).

![](images/shiva_support_01.png)

You then have the option to provide details and include files (image or logs, for example).

The requester can also specify a level of criticality (P1 to P4) in the ticket description, in the case of an incident, such as:

**CRITICAL (P1)**:

- Suspected leakage of sensitive data
- Detection of unauthorized access to your data
- Compromise of your administration credentials
- Total unavailability of your critical services
- Abnormal behavior on sensitive data
- Personal data breach

**HIGH (P2)**:
- User access malfunction
- Anomaly in the encryption of your data
- Loss of access to certain critical features
- Data inconsistency
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

Once your request is made, you can find your requests via the __'lifebuoy' icon__ located at the top right of the screen:

![](images/shiva_support_03.png)

## Access to User Features via Web Interface

All the features accessible to your user (depending on their rights) are located on the left of the screen, in the green band.
The features are grouped by module. This mainly includes:

- __inventory__ of your resources,
- __operations tracking__,
- __IaaS resource management__ (Compute, storage, network, ...)
- __OpenIaaS resource management__ (Compute, storage, network, ...)
- Access to __auxiliary services__ (Bastion, monitoring, ...)
- __organization administration__ (Tenant management, rights management, ...)

Activating a module for a user depends on the user's rights. For example, the __'Order'__ module will not be available if the user does not have the __'ORDER'__ right.

Here is an introduction to the various available modules. New modules are regularly added to the console:

![](images/shiva_onboard_007.png)

- __Dashboard__: provides a quick view of the __total compute and storage resources__, __backup__ statistics, and a __summary of support cases__,
- __Inventory__: provides a view of all your __'virtual machines'__ resources. If __tags__ are used, it provides a view by __tag__ (for example, business view, application view, ...),
- __Managed Services__: provides access to tracking your __support requests__ and __service metrology__,
- __IaaS__: allows the __management of VMware IaaS infrastructure__ (Virtual machines, clusters, hypervisors, replication, backup, ...),
- __OpenIaaS__: allows the __management of Xen Orchestra resources__ (Virtual machines, backup, ...),
- __OpenShift__: allows management of your **RedHat OpenShift PaaS architecture** and the management of your containers on the platform's 3 availability zones,
- __Bastion__: allows you to deploy and manage SSH/RDP bastion appliances in your networks,
- __Network__: allows the management of __Level 2 and 3 networks__, __public IPs__ et of your __telecom circuits__,
- __Colocation__: provides a view of equipment located in the __shared or dedicated colocation zone__,
- __Order__: allows the ordering of resources and the tracking of deployments,
- __Administration__: gathers user and tenant administration functions and access to global logging.

The __'NEW'__ pictograms signify that the product in question has been provisioned but is not yet qualified as a __SecNumCloud offer__ and __'BETA'__ signify that the product in question has been provisioned and has just been qualified as __SecNumCloud offer__.

**Logging - Activity Tracking**
=====================================

The activities page is intended to provide full visibility on all read and write operations conducted within the console, thus ensuring increased traceability and security. It highlights the two main tabs: Recent and Archived.

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
	+ Operation Type
    + Status
	+ User
	+ Operation Description
#### **Functionality**
	+ Search/Filter for specific operations

### **Usage**

* **Access:** permission `activity_read`
* **Navigation:**
	- Select the "Recent" tab for real-time operations.
	- Choose "Archived" to consult the history.
	- Use the search and filter features to locate specific operations.

#### **Compliance Note**
In accordance with the SecNumCloud qualification, the storage duration of Cloud Temple console events is a minimum of **6 months**, thereby ensuring adherence to security and traceability requirements.

## Viewing the latest updates

Click on the __'New features'__ icon at the bottom left of the green band. You will get the details of the changes for each version of the Cloud Temple console.

![](images/shiva_onboard_009.png)

## Access to user features via the API

Access to all the functionality of the Shiva console is possible via the Shiva API. You can get details of the verbs and configurations via __'Profile'__ and __'APIs'__:

![](images/shiva_onboard_008.png)

## Terraform Provider

Cloud Temple provides a Terraform provider to manage your Cloud platform *"as code"*. It is accessible here:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest