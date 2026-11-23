---
title: Concepts
---

<a id="définition-et-positionnement"></a>

## Overview

The **Cloud Temple Marketplace** is a centralized platform that facilitates access to and deployment of ready-to-use cloud solutions: virtual machine images to deploy in your Cloud Temple environments, managed services, and partner SaaS solutions.

The Cloud Temple Marketplace positions itself as a digital transformation lever for businesses seeking reliable services, with simple and fast integration.

It enables you to:

- **Centralize** access to partner solutions selected by Cloud Temple
- **Simplify** the deployment of cloud environments
- **Accelerate** the implementation of digital projects
- **Deploy** in your Cloud Temple environments, which carry their own qualifications; the security of deployed machines remains your responsibility

It is designed for IT and DevOps teams building their Cloud Temple environments, including in regulated industries, as well as for business departments looking for SaaS solutions from partner publishers.

## Benefits

| Benefit | Description |
|---|---|
| Centralized access | Partner images, managed services, and SaaS solutions gathered in a single catalog, accessible from the Cloud Temple Console. |
| Rapid deployment | Virtual machine images deploy directly into your environments, in a matter of minutes for most. |
| Partner solutions | Access to partner publisher solutions and direct connection with them. |
| Console integration | The Marketplace is used from the usual management interface, with no additional tool required. |

## Features

| Feature | Description |
|---|---|
| Virtual machine images | Preconfigured images to deploy on OpenIaaS, VMware, or VM Instances, depending on the compatible targets of each image: see the [quick start guide](./quickstart.md). |
| Managed services | Services operated on your behalf, presented in the catalog. |
| Partner SaaS solutions | Partner publisher solutions, accessible from the catalog. |
| Direct connection | Direct contact with the publisher of a solution from its listing. |
| Public catalog | The up-to-date list of solutions is available in the [Cloud Temple website Marketplace catalog](https://www.cloud-temple.com/marketplace/). |

<a id="intégration-avec-lécosystème-cloud-temple"></a>

## Architecture

### Cloud Temple Console

The Marketplace is natively integrated into the Cloud Temple console, offering:

- **Unified access** from the usual management interface
- **Direct deployment** of virtual machine images onto your existing infrastructure
- **Centralized management** of the virtual machines thus deployed

### Compatibility with services

Depending on the compatible targets of each image, Marketplace virtual machine images deploy in the following environments:

- **OpenSource IaaS**: Deployment on OpenIaaS infrastructure
- **VMware IaaS**: Integration with the vSphere environment
- **VM Instances**: Deployment from the Marketplace or the catalog integrated into the creation assistant; see the [VM Instance tutorial](./tutorials/deploy_vminstance.md)

## Regions and availability zones

Virtual machine images deploy in the region and availability zones of your Cloud Temple environment (FR1 region). For managed services and SaaS solutions, the location is specific to each offer and is listed on its listing.

<a id="types-de-solutions-disponibles"></a>

## Technical characteristics

The catalog brings together virtual machine images, managed services, and SaaS solutions from partner publishers. It is continuously enriched: the solutions presented here are only examples, and the up-to-date list is available in the [Cloud Temple website Marketplace catalog](https://www.cloud-temple.com/marketplace/).

### Virtual Machine Images

Virtual machine images are the current core of the Marketplace product. These preconfigured images enable rapid deployment of standardized environments.

**Characteristics:**

- Images verified and validated by Cloud Temple before publication
- Deployment on OpenIaaS, VMware, or VM Instances, depending on the compatible targets of each image
- Deployment in a matter of minutes generally, depending on the image and environment
- Native integration with the Cloud Temple console

### Partner solutions

The Marketplace also provides access to solutions developed by our partner publishers, covering various business domains.

**Access process:**

- Browsing the catalog from the console
- Direct connection with the partner
- Depending on the offer, deployment in your Cloud Temple environments or access to the SaaS service operated by the publisher

### Limitations

- The catalog evolves continuously: the solutions described on this page are examples.
- The updating of partner solutions is the responsibility of their publishers, as are response times to contact requests.

## Security and compliance

### Hosting and qualifications

Hosting and qualifications depend on the type of solution:

- **Virtual machine images**: they deploy in your Cloud Temple environments and are subject to their qualifications.
- **Managed services and SaaS solutions**: their hosting and certifications are specific to each offer. Consult the information on its listing in the [website Marketplace catalog](https://www.cloud-temple.com/marketplace/) and, for any details, contact the publisher.

### Solution validation

Cloud Temple selects the solutions offered in the Marketplace. Before publication, a virtual machine image is verified (files and metadata) and then validated by Cloud Temple. This validation does not replace the securing of deployed machines, which remains your responsibility. For a partner solution, the publisher remains responsible for its content and updates.

## Responsibilities

Support for the Marketplace itself (catalog, image deployment) falls under Cloud Temple Console support. Each offer then has its own support conditions: those of the service for a Cloud Temple offer, those of the publisher for a partner solution, which also handles its updates and response times. Virtual machines deployed from the Marketplace are resources of your IaaS environment: see the [IaaS responsibility matrix (RACI)](../contractual/iaas/raci.md).

## Reversibility

- **Virtual machine images**: deployed machines are resources of your IaaS environment; their reversibility follows that of the relevant offer, OpenSource IaaS or VMware IaaS.
- **Partner solutions**: exit conditions are those of the publisher, as indicated by the latter.

## Pricing

The Marketplace has no cost of its own. You pay for the infrastructure on which you deploy an image and, depending on the chosen offer, the license or service, provided by Cloud Temple or by a partner, under its pricing terms. The details of each offer are available in the [Cloud Temple website Marketplace catalog](https://www.cloud-temple.com/marketplace/).
