---
title: Deploy an image on OpenIaaS
---
import marketplaceOpeniaasDeployment from '../images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '../images/marketplace_openiaas_config.png'

This tutorial guides you through deploying a virtual machine image from the Cloud Temple Marketplace to your OpenIaaS environment.

## Voraussetzungen

- Ein eingerichtetes OpenIaaS-Umgebung bereitstellen
- Berechtigungen zum Erstellen von virtuellen Maschinen besitzen
- Das Image muss **OpenIaaS** in seinen kompatiblen Zielen enthalten

## Deployment steps

### 1. Selection and Deployment

From the detail page of a compatible OpenIaaS solution, select your target environment and click **Deploy**:
<img src={marketplaceOpeniaasDeployment} />

### 2. Virtual Machine Configuration

Configure the basic settings of your virtual machine:
- **VM Name**
- **Resources** (CPU, RAM)
- **Storage**
- **Network**

<img src={marketplaceOpeniaasConfig} />

Deployment typically takes less than 10 minutes, depending on the image size.

## Alternative Access

You can also access Marketplace images directly from the **Virtual Machines** page of your OpenIaaS environment:

1. Go to **Virtual Machines** > **Create a VM**
2. Select **Marketplace Images** as the source option
3. Choose your solution from the integrated catalog

## Deployment-Verfolgung

Sobald der Deployment-Vorgang gestartet wurde:
- Verfolgen Sie den Fortschritt über die OpenIaaS-Konsole
- Die VM erscheint in Ihrer Liste virtueller Maschinen