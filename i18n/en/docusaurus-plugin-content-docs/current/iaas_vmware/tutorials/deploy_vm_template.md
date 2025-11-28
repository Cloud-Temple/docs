---
title: Deployment from a Template
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from './images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from './images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from './images/shiva_catalogs_deployer.png';

This guide will allow you to deploy your first instances on the Cloud of Trust in less than 5 minutes.

## __Prerequisites__

1. Have subscribed to the Cloud Temple offer (subscription to the IaaS offer).
2. Have the permissions enabled for the object driver __'IaaS'__

## Deploy a Virtual Machine from a Template

This guide shows you step by step how to deploy a virtual machine from a Template in the Console.

On the Shiva portal, go to the "Cloud of Trust" tab, then "Catalogs". Before being able to deploy a Template, it must be uploaded to your private catalog, in the "My Catalog" tab.

For this, you have two options: import your own Template directly into your private catalog or import a model from the Cloud Temple public catalog.

### Import a Personal Template into the Private Catalog

In the "My Catalog" tab, click on "Publish Files".

<img src={shivaCatalogsCharger} />

Then follow the Template publishing steps, entering its name and description, and choosing its location in a library.

The Template should then appear in your private catalog.

### Import a Template from the Public Catalog

In the "Public Catalog" tab, click on the "Add to My Catalog" button of the Template of your choice to import it into your private catalog. It should then appear in your private catalog.
<img src={shivaCatalogsAjout} />

### Deploy the Template

Once the Template is imported into your private catalog, you can deploy it by clicking on "Deploy".

<img src={shivaCatalogsDeployer} />

Then follow the different deployment steps of the resource, selecting its physical location (datacenter, compute cluster, datastore) and other optional configuration parameters.