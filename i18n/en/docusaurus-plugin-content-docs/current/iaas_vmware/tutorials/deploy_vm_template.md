---
title: Deployment from a Template
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from './images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from './images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from './images/shiva_catalogs_deployer.png';

This guide will enable you to deploy your first instances on the Cloud of Trust in less than 5 minutes.

## __Prerequisites__

1. Have subscribed to the Cloud Temple offering (IaaS subscription).
2. Have the necessary permissions enabled for the __'IaaS'__ object driver.

## Deploy a Virtual Machine from a Template

This guide walks you through the steps to deploy a virtual machine from a Template in the Console.

In the Console portal, go to the **"Trusted Cloud"** tab, then **"Catalogs"**. Before you can deploy a Template, it must first be uploaded to your private catalog, under the **"My Catalog"** tab.

To do this, you have two options:  
- Import your own Template directly into your private catalog, or  
- Import a template from Cloud Temple's public catalog.

### Import a Personal Template into the Private Catalog

In the "My Catalog" tab, click on "Publish Files".

<img src={shivaCatalogsCharger} />

Then follow the template publishing steps by entering its name and description, and selecting its location within a library.

The template should then appear in your private catalog.

### Import a Template from the Public Catalog

In the "Public Catalog" tab, click the "Add to My Catalog" button of the desired template to import it into your private catalog. It should then appear in your private catalog.
<img src={shivaCatalogsAjout} />

### Deploy the Template

Once the template has been imported into your private catalog, you can deploy it by clicking "Deploy."

<img src={shivaCatalogsDeployer} />

Then follow the resource deployment steps, selecting its physical location (datacenter, compute cluster, datastore) and other optional configuration parameters.