---
title: Deploy an image on VMware
---
import marketplaceVmwareDeployment from '../images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '../images/marketplace_vmware_config.png'

This tutorial guides you through deploying a virtual machine image from the Cloud Temple Marketplace to your VMware environment.

## Voraussetzungen

- Ein konfiguriertes VMware-Umgebung bereitstellen
- Berechtigungen zum Erstellen von virtuellen Maschinen besitzen
- Das Image muss **VMware** in seinen kompatiblen Zielen enthalten

## Deployment steps

### 1. Selection and Deployment

From the detail page of a compatible VMware solution, select your target environment and click **Deploy**:
<img src={marketplaceVmwareDeployment} />

### 2. Virtual Machine Configuration

Configure the basic settings of your virtual machine:
- **VM Name**
- **Resources** (CPU, RAM)
- **Storage**
- **Network**

<img src={marketplaceVmwareConfig} />

Deployment typically takes less than 10 minutes, depending on the image size.

## Alternative Access

You can also access Marketplace templates directly from the VMware interface:

1. Go to **vSphere** > **Deploy a VM**
2. Select **Marketplace Template** as the source
3. Browse the available images in the integrated catalog

## Deployment Monitoring

Once the deployment has been initiated:
- Monitor the progress from the VMware console
- The VM will appear in your vSphere inventory