---
title: Desplegar una imagen en OpenIaaS
---
import marketplaceOpeniaasDeployment from '@site/docs/marketplace/images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '@site/docs/marketplace/images/marketplace_openiaas_config.png'

Este tutorial le guía para desplegar una imagen de máquina virtual desde el Marketplace Cloud Temple hacia su entorno OpenIaaS.

## Requisitos

- Disponer de un entorno OpenIaaS configurado
- Contar con los permisos para crear máquinas virtuales
- La imagen debe tener **OpenIaaS** en sus objetivos compatibles

## Pasos de despliegue

### 1. Selección y despliegue

Desde la página de detalles de una solución compatible con OpenIaaS, seleccione su entorno de destino y haga clic en **Desplegar** :
<img src={marketplaceOpeniaasDeployment} />

### 2. Configuración de la máquina virtual

Configure los parámetros básicos de su máquina virtual :

- **Nombre** de la VM
- **Recursos** (CPU, RAM)
- **Almacenamiento**
- **Red**

<img src={marketplaceOpeniaasConfig} />

El despliegue generalmente se realiza en menos de 10 minutos según el tamaño de la imagen.

## Acceso alternativo

También puede acceder a las imágenes del Marketplace directamente desde la página **Máquinas Virtuales** de su entorno OpenIaaS:

1. Acceda a **Máquinas Virtuales** > **Crear una VM**
2. Seleccione **Imágenes del Marketplace** en las opciones de origen
3. Elija su solución en el catálogo integrado

## Seguimiento del despliegue

Una vez iniciado el despliegue:

- Siga el progreso desde la consola de OpenIaaS
- La VM aparecerá en su lista de máquinas virtuales