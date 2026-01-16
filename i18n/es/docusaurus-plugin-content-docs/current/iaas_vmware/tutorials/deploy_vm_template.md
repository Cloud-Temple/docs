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

## __Requis__

1. Have subscribed to the Cloud Temple offer (subscription to the IaaS offer).
2. Have the permissions enabled for the __'IaaS'__ object driver

## Deploy a virtual machine from a Template

This guide shows you step by step how to deploy a virtual machine from a Template in the Console.

In the Console portal, go to the "Trusted Cloud" tab, then "Catalogs". Before you can deploy a Template, it must be uploaded to your private catalog, in the "My Catalog" tab.

To do this, you have two options: import your own Template directly into your private catalog, or import a template from Cloud Temple's public catalog.

### Importar una plantilla personal en el catálogo privado

En la pestaña "Mi catálogo", haga clic en "Publicar archivos".

<img src={shivaCatalogsCharger} />

A continuación, siga los pasos para publicar la plantilla, introduciendo su nombre y una descripción, y eligiendo su ubicación dentro de una biblioteca.

La plantilla deberá aparecer a continuación en su catálogo privado.

### Importar una plantilla desde el catálogo público

En la pestaña "Catálogo público", haga clic en el botón "Agregar a mi catálogo" de la plantilla que desee para importarla a su catálogo privado. Esta deberá aparecer a continuación en su catálogo privado.
<img src={shivaCatalogsAjout} />

### Desplegar la plantilla

Una vez que la plantilla se ha importado en su catálogo privado, puede desplegarla haciendo clic en "Desplegar".

<img src={shivaCatalogsDeployer} />

A continuación, siga los distintos pasos del despliegue del recurso, seleccionando su ubicación física (datacenter, clúster de cálculo, datastore) y otros parámetros de configuración opcionales.