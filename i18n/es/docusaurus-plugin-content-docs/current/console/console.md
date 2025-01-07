---
title: Introduction to the Console
---

## The Cloud Temple Console

The Cloud Temple console is Cloud Temple's integrated **Cloud Management Platform**. It serves as the central hub for managing all your cloud resources, providing you with a unique and efficient interface.

With the **Console**, you can supervise and operate your cloud infrastructures with great simplicity. Here is an overview of its main features:

### Management of your Cloud Temple products and services
The console allows you to efficiently manage your virtual servers, storage, networks, and Cloud services from a centralized interface.

### Monitoring and reporting
Benefit from a comprehensive view of your resources with integrated monitoring and reporting tools to ensure your environments are operating optimally.

### Automation and orchestration
With its **powerful API**, the console simplifies the automation of repetitive tasks and the orchestration of complex workflows. Deploy, manage, and scale your resources in just a few clicks or via custom scripts.

### Security and Compliance
The console integrates advanced features to:
- Manage identities and access,
- Filter access to meet regulatory requirements,
- Strengthen your security policies.

### Multi-Cloud Integration
Thanks to its hybrid capabilities, the console facilitates the management of multi-cloud environments by integrating third-party services such as **Microsoft Azure** and **Amazon AWS**, all through a single interface.

### Technical Assistance and Customer Support
The console provides direct access to your technical support tickets. You benefit from:
- Dedicated customer support to resolve your technical issues,
- Assistance with the initial configuration of your services.

### Professional Services
Need expertise? Take advantage of our engineers' support for:
- Personalized advice,
- Assistance with cloud architecture implementation,
- Training for your teams.

The Cloud Temple console __'Shiva'__ is __the cloud management platform__ (Cloud Management Platform) integrated by __Cloud Temple__.

The Cloud Temple Shiva console allows you to manage cloud resources such as virtual servers, storage, networks, and application services.
It is a centralized management interface that enables you to design and operate your cloud infrastructure.

The Cloud Temple Shiva console especially allows your teams to:

- __Manage your Cloud Temple products and services__,
- __Monitor and report__ the performance of your cloud resources,
- __Automation and Orchestration__: Shiva, through its API, allows for the automation of repetitive tasks and the orchestration of complex workflows to deploy, manage, and scale your cloud resources,
- __Security and Compliance__: Shiva enables identity control and access filtering to ensure regulatory compliance and adherence to your security policies,
- __Integration of Cloud Adoption Frameworks__: thanks to its hybridization functions, you can ensure operational continuity with third-party cloud providers (Microsoft Azure and Amazon AWS) from a single interface, facilitating the integration and management of your multi-cloud application environments.
- __Access and monitoring of technical support cases__ : Dedicated technical assistance is also available. This includes customer support for resolving technical issues as well as assistance with initial configuration.
- __The ability to subscribe to professional services__: To efficiently manage your Cloud environments, your teams can benefit from the support of our engineers for consulting, architecture implementation assistance, or training.

## Prerequisites
- Subscribed to a Cloud Temple offer. To subscribe easily, you can [contact us](https://www.cloud-temple.com/contactez-nous/) or by email at __contact@cloud-temple.com__.
- Have access to the Shiva console
- Have your public IPv4 declared in the Cloud Temple trusted zone (access to the Shiva console is limited to identified trusted addresses)

## Connecting to your Cloud Temple tenant
Shiva is accessible via the URL below:
    https://shiva.cloud-temple.com
    Or from the direct URL provided to you by email.

The first page allows you to select the [organization](organisations.md) in which your user was created.
Once the company is specified, please click on __'Log in'__.

![](images/shiva_login.png)

You will then be redirected to a page asking you to authenticate.
Once logged in, you will arrive on this page.

![](images/shiva_home.png)

## Language Management
The console is available in __French__, __English__. You can change the operating language using the __language__ icon located at the top right of the screen.

The language change for a user is to be done in their __'Profile'__, at the top right of the screen, in the __'User Settings'__.

![](images/shiva_profil_006.png)

The configuration is done for each tenant [Tenant](tenants.md).

## Access to Technical Support
At any time, you can contact the __Cloud Temple support team__ via the __'lifebuoy' icon__ located at the top right of the screen.

![](images/shiva_support.png)

You will be guided throughout the support request process.

The first step is identifying the type of support request:

- Request advice on the use of a product (non-incident),
- Request assistance related to your customer account,
- Report an incident or request technical support,
- Request professional service assistance (provision of a Cloud Temple engineer for an issue).

![](images/shiva_support_01.png)

You then have the option to provide details and include files (image or logs, for example).

![](images/shiva_support_02.png)

Once your request is made, you can find your requests via the __'lifebuoy' icon__ located at the top right of the screen:

![](images/shiva_support_03.png)
## Access to User Features via the Web Interface

All the features available to your user (depending on their permissions) are located on the left side of the screen, within the green banner. The features are grouped by module, which primarily includes:

- The __inventory__ of your resources,
- The __operation monitoring__,
- The __management of IaaS resources__ (Compute, storage, network, ...),
- The __management of OpenIaaS resources__ (Compute, storage, network, ...),
- Access to __ancillary services__ (Bastion, monitoring, ...),
- The __administration of your organization__ (Management of tenants, permissions, ...)

The activation of a module for a user depends on the user's permissions. For example, the module __'Order'__ will not be available if the user does not have the __'ORDER'__ permission.

Here is an overview of the different modules available. New modules are regularly added to enrich the console:

![](images/shiva_onboard_007.png)
- __Dashboard__ : provides a quick view of the __total computing and storage resources__, __backup__ statistics, and a __summary of support tickets__,
- __Inventory__ : provides a view of all your __'virtual machines'__ resources. If __tags__ are used, it provides a view by __tag__ (e.g., business view, application view, ...),
- __Managed Services__ : gives access to the monitoring of your __support requests__ and the __service metrics__,
- __IaaS__ : allows the __management of VMware IaaS infrastructures__ (Virtual machines, clusters, hypervisors, replications, backup, ...),
- __OpenIaaS__ : allows the __management of Xen Orchestra resources__ (Virtual machines, backup, ...),
- __OpenShift__ : allows the management of your **RedHat Openshift PaaS architecture** and the management of your containers across the platform's 3 availability zones.
- __Bastion__: Allows the deployment and management of SSH/RDP bastion appliances in your networks,
- __Network__: Enables the management of __layer 2 and 3 networks__, __public IPs__, and your __telecom circuits__,
- __Colocation__: Provides an overview of equipment located in __shared or dedicated colocation__ areas,
- __Order__: Allows the ordering of resources and tracking of deployments,
- __Administration__: Groups user and tenant administration functions and access to global logging.

## Access to user functionalities via the API

Access to all the features of the Shiva console is available via the Shiva API. You can find details about verbs and configurations under __'Profile'__ and __'APIs'__:

![](images/shiva_onboard_008.png)

## Terraform Provider

Cloud Temple provides a Terraform provider to manage your Cloud platform as *"code"*. It is accessible here:
https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest

## To Learn More

We now invite you to understand the functioning of:

- An organization: [My organization](organisations.md)
- User accounts: [My accounts](accounts.md)
- Tenants associated with this organization: [My Tenants](tenants.md)