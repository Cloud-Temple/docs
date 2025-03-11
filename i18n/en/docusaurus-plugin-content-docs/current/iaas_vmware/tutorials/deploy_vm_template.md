---
title: Deployment from a Template
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from './images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from './images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from './images/shiva_catalogs_deployer.png';

This guide will help you deploy your first instances on the Trusted Cloud in less than 5 minutes.

## __Prerequisites__

1. Have subscribed to the Cloud Temple offer (IaaS offer subscription).
2. Have the permissions enabled for the __'IaaS'__ objects driver.

## Deploy a Virtual Machine from a Template

This guide shows you step by step how to deploy a virtual machine from a Template in the Shiva console.

On the Shiva portal, go to the "Trusted Cloud" tab, then "Catalogs". Before you can deploy a Template, it must be loaded into your private catalog, in the "My Catalog" tab.

To do this, you have two options: import your own Template directly into your private catalog or import a model from the Cloud Temple public catalog.

### Import a Personal Template into the Private Catalog

In the "My Catalog" tab, click on "Publish Files".

<img src={shivaCatalogsCharger} />

Then follow the steps to publish the Template, providing its name and a description, and choosing its location in a library.

The Template should then appear in your private catalog.

### Import a Template from the Public Catalog

In the "Public Catalog" tab, click on the "Add to my catalog" button of the Template of your choice to import it into your private catalog. It should then appear in your private catalog.
<img src={shivaCatalogsAjout} />

### Deploy the Template

Once the Template is imported into your private catalog, you can deploy it by clicking on "Deploy".

<img src={shivaCatalogsDeployer} />

Then follow the different steps to deploy the resource, selecting its physical location (data center, compute cluster, datastore) and other optional configuration parameters.