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

## __Voraussetzungen__

1. Ein abonniertes Cloud Temple-Angebot (Unterzeichnung des IaaS-Angebots).
2. Aktivierte Berechtigungen für den Objekttreiber __'IaaS'__

## Deploy a virtual machine from a Template

This guide walks you through the steps to deploy a virtual machine from a Template in the Console.

In the Console portal, go to the **"Trusted Cloud"** tab, then **"Catalogs"**. Before you can deploy a Template, it must be uploaded to your private catalog, under the **"My Catalog"** tab.

To do this, you have two options:  
- Import your own Template directly into your private catalog, or  
- Import a template from the public Cloud Temple catalog.

### Import a custom template into your private catalog

In the "My catalog" tab, click on "Publish files".

<img src={shivaCatalogsCharger} />

Then follow the template publishing steps by entering its name and description, and selecting its location within a library.

The template should then appear in your private catalog.

### Import template from public catalog

In the "Public catalog" tab, click the "Add to my catalog" button of the desired template to import it into your private catalog. It should then appear in your private catalog.
<img src={shivaCatalogsAjout} />

### Deploy Template

After importing the template into your private catalog, you can deploy it by clicking on "Deploy".

<img src={shivaCatalogsDeployer} />

Then follow the various steps of resource deployment, selecting its physical location (datacenter, compute cluster, datastore) and other optional configuration parameters.