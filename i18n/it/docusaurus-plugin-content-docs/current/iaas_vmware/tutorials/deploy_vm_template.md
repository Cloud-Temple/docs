---
title: Deployment from a template
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from './images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from './images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from './images/shiva_catalogs_deployer.png';

This guide will allow you to deploy your first instances on the Cloud of Trust in less than 5 minutes.

## __Prerequisiti__

1. Aver sottoscritto l'offerta Cloud Temple (sottoscrizione all'offerta IaaS).
2. Aver attivate le autorizzazioni per il driver degli oggetti __'IaaS'__

## Deploy a virtual machine from a Template

This guide shows you step by step how to deploy a virtual machine from a Template in the Console.

In the Console portal, go to the "Trusted Cloud" tab, then "Catalogs". Before you can deploy a Template, it must be uploaded to your private catalog, in the "My Catalog" tab.

To do this, you have two options: import your own Template directly into your private catalog, or import a template from the public Cloud Temple catalog.

### Importare un modello personale nel catalogo privato

Nella scheda "Il mio catalogo", fare clic su "Pubblica file".

<img src={shivaCatalogsCharger} />

Seguire quindi i passaggi per la pubblicazione del modello, inserendo il nome e una descrizione, e scegliendo la posizione all'interno di una libreria.

Il modello dovrà quindi apparire nel tuo catalogo privato.

### Importare un modello dal catalogo pubblico

Nella scheda "Catalogo pubblico", fai clic sul pulsante "Aggiungi al mio catalogo" del modello desiderato per importarlo nel tuo catalogo privato. Esso dovrà quindi apparire nel tuo catalogo privato.
<img src={shivaCatalogsAjout} />

### Deploy the Template

Once the template has been imported into your private catalog, you can deploy it by clicking on "Deploy".

<img src={shivaCatalogsDeployer} />

Then follow the various steps of the resource deployment process, selecting its physical location (datacenter, compute cluster, datastore) and other optional configuration parameters.