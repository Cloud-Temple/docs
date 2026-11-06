---
title: Concepts
---

<a id="definition-and-positioning"></a>

## Introduction

The **Marketplace Cloud Temple** is a centralized platform that facilitates access and deployment of ready-to-use cloud solutions: virtual machine images to deploy in your Cloud Temple environments, managed services, and SaaS solutions from partners.

The Cloud Temple Marketplace positions itself as a digital transformation driver for companies seeking reliable services with simple and fast integration.

It enables you to:

- **Centralize** access to validated partner solutions
- **Simplify** the deployment of cloud environments
- **Accelerate** the implementation of digital projects
- **Deploy** in your Cloud Temple environments, which carry their own qualifications; the security of the deployed machines remains your responsibility

It is intended for IT and DevOps teams building their Cloud Temple environments, including in regulated sectors, as well as business departments looking for SaaS solutions from partner publishers.

## Benefits

| Benefit | Description |
|---|---|
| Centralized access | Images, managed services and partner SaaS solutions gathered in a single catalog, available from the Cloud Temple Console. |
| Fast deployment | Virtual machine images are deployed directly in your environments, in a few minutes for most of them. |
| Partner solutions | Access to partner publishers' solutions and direct contact with them. |
| Console integration | The Marketplace is used from the usual management interface, with no additional tool. |

## Features

| Feature | Description |
|---|---|
| Virtual machine images | Preconfigured images to deploy on IaaS OpenSource and IaaS VMware: see the [getting started guide](./quickstart.md). |
| Managed services | Services operated for you, presented in the catalog. |
| Partner SaaS solutions | Solutions from partner publishers, available from the catalog. |
| Contact | Direct contact with the publisher of a solution from its page. |
| Public catalog | The up-to-date list of solutions is in the [Marketplace catalog on the Cloud Temple website](https://www.cloud-temple.com/marketplace/). |

<a id="integration-with-the-cloud-temple-ecosystem"></a>

## Architecture

### Cloud Temple Console

The Marketplace is natively integrated into the Cloud Temple console, providing:

- **Unified access** from the standard management interface
- **Direct deployment** of virtual machine images on your existing infrastructures
- **Centralized management** of the virtual machines deployed this way

### Compatibility with services

Marketplace virtual machine images are deployed in the following environments:

- **Open Source IaaS** : Deployment on OpenIaaS infrastructure
- **VMware IaaS** : Integration with the vSphere environment

## Regions and availability zones

Virtual machine images are deployed in the region and availability zones of your Cloud Temple environment (FR1 region). For managed services and SaaS solutions, the location is specific to each offering and is shown on its page.

<a id="types-of-available-solutions"></a>

## Technical specifications

The catalog brings together virtual machine images, managed services and SaaS solutions from partner publishers. It grows continuously: the solutions described here are only examples, and the up-to-date list is in the [Marketplace catalog on the Cloud Temple website](https://www.cloud-temple.com/marketplace/).

### Virtual Machine Images

Virtual machine images currently form the core of the Marketplace product. These pre-configured images enable rapid deployment of standardized environments.

**Features:**

- Validated and secure images
- Compatible with OpenIaaS and VMware environments
- Deployment in a few minutes in general, depending on the image and the environment
- Native integration with the Cloud Temple console

### Partner Solutions

The Marketplace also provides access to solutions developed by our publisher partners, covering various business domains.

**Access Process:**

- Browsing the catalog from the console
- Direct contact with the partner
- Depending on the offering, deployment in your Cloud Temple environments or access to the SaaS service operated by the publisher

### Limits

- The catalog evolves continuously: the solutions described on this page are examples.
- Updating partner solutions is the responsibility of their publishers, as are response times to contact requests.

## Security and compliance

### Hosting and qualifications

Hosting and qualifications depend on the type of solution:

- **Virtual machine images**: they are deployed in your Cloud Temple environments and fall under their qualifications.
- **Managed services and SaaS solutions**: their hosting and certifications are specific to each offering. Check the information on its page in the [Marketplace catalog on the website](https://www.cloud-temple.com/marketplace/) and, for any further detail, contact the publisher.

### Solution Validation

The solutions offered in the Marketplace undergo a rigorous selection process ensuring:

- **Compatibility** with the Cloud Temple infrastructure, for solutions deployed on it
- **Security** of virtual machine images
- **Reliability** of publisher partners

## Responsibilities

Support for the Marketplace itself (catalog, image deployment) is part of Cloud Temple Console support. Each offering then has its own support conditions: those of the service for a Cloud Temple offering, those of the publisher for a partner solution, which also handles its updates and response times. Virtual machines deployed from the Marketplace are resources of your IaaS environment: see the [IaaS responsibility matrix (RACI)](../contractual/iaas/raci.md).

## Reversibility

- **Virtual machine images**: the deployed machines are resources of your IaaS environment; their reversibility follows that of the offering concerned, IaaS OpenSource or IaaS VMware.
- **Partner solutions**: the exit conditions are those of the publisher, as specified by it.

## Pricing

The Marketplace has no cost of its own. You pay for the infrastructure on which you deploy an image and, depending on the offering chosen, the license or service, provided by Cloud Temple or by a partner, under its pricing conditions. The details of each offering are in the [Marketplace catalog on the Cloud Temple website](https://www.cloud-temple.com/marketplace/).
