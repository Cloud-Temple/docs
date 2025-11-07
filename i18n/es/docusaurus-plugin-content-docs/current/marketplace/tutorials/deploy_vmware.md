---
title: Deploy an image on VMware
---
import marketplaceVmwareDeployment from '../images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '../images/marketplace_vmware_config.png'

This tutorial guides you through deploying a virtual machine image from the Cloud Temple Marketplace to your VMware environment.

## Requis

- Disponer de un entorno VMware configurado
- Tener permisos para crear máquinas virtuales
- La imagen debe tener **VMware** entre sus destinos compatibles

## Pasos de despliegue

### 1. Selección y despliegue

Desde la página de detalles de una solución compatible con VMware, seleccione su entorno objetivo y haga clic en **Desplegar**:
<img src={marketplaceVmwareDeployment} />

### 2. Configuración de la máquina virtual

Configure los parámetros básicos de su máquina virtual:
- **Nombre** de la VM
- **Recursos** (CPU, RAM)
- **Almacenamiento**
- **Red**

<img src={marketplaceVmwareConfig} />

El despliegue generalmente se realiza en menos de 10 minutos, según el tamaño de la imagen.

## Acceso alternativo

También puede acceder directamente a las plantillas de Marketplace desde la interfaz de VMware:

1. Vaya a **vSphere** > **Implementar una VM**
2. Seleccione **Plantilla Marketplace** como origen
3. Navegue por las imágenes disponibles en el catálogo integrado

## Deployment tracking

Once the deployment is initiated:
- Monitor the progress from the VMware console
- The VM will appear in your vSphere inventory