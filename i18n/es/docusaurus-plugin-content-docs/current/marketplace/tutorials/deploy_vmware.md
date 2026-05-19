---
title: Desplegar una imagen en VMware
---
import marketplaceVmwareDeployment from '@site/docs/marketplace/images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '@site/docs/marketplace/images/marketplace_vmware_config.png'

Este tutorial le guía para desplegar una imagen de máquina virtual desde el Marketplace Cloud Temple hacia su entorno VMware.

## Requisitos

- Contar con un entorno VMware configurado
- Tener permisos para crear máquinas virtuales
- La imagen debe tener **VMware** en sus destinos compatibles

## Pasos de despliegue

### 1. Selección y despliegue

Desde la página de detalles de una solución compatible con VMware, seleccione su entorno de destino y haga clic en **Desplegar** :
<img src={marketplaceVmwareDeployment} />

### 2. Configuración de la máquina virtual

Configure los parámetros básicos de su máquina virtual:

- **Nombre** de la VM
- **Recursos** (CPU, RAM)
- **Almacenamiento**
- **Red**

<img src={marketplaceVmwareConfig} />

El despliegue suele realizarse en menos de 10 minutos, según el tamaño de la imagen.

## Acceso alternativo

También puede acceder a las plantillas de Marketplace directamente desde la interfaz de VMware:

1. Acceda a **vSphere** > **Desplegar una VM**
2. Seleccione **Plantilla de Marketplace** como origen
3. Explore las imágenes disponibles en el catálogo integrado

## Seguimiento del despliegue

Una vez iniciado el despliegue :

- Siga el progreso desde la consola de VMware
- La VM aparecerá en su inventario de vSphere