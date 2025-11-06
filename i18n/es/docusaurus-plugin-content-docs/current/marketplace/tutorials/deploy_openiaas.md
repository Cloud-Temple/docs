---
title: Desplegar una imagen en OpenIaaS
---
import marketplaceOpeniaasDeployment from '../images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '../images/marketplace_openiaas_config.png'

Este tutorial le guiará para desplegar una imagen de máquina virtual desde la Marketplace Cloud Temple hacia su entorno OpenIaaS.

## Requis

- Disponer de un entorno OpenIaaS configurado
- Tener permisos de creación de máquinas virtuales
- La imagen debe tener **OpenIaaS** en sus destinos compatibles

## Pasos de despliegue

### 1. Selección y despliegue

Desde la página de detalle de una solución compatible con OpenIaaS, seleccione su entorno objetivo y haga clic en **Desplegar**:
<img src={marketplaceOpeniaasDeployment} />

### 2. Configuración de la máquina virtual

Configure los parámetros básicos de su máquina virtual:
- **Nombre** de la VM
- **Recursos** (CPU, RAM)
- **Almacenamiento**
- **Red**

<img src={marketplaceOpeniaasConfig} />

El despliegue generalmente se realiza en menos de 10 minutos, según el tamaño de la imagen.

## Acceso alternativo

También puede acceder directamente a las imágenes de Marketplace desde la página **Máquinas Virtuales** de su entorno OpenIaaS:

1. Vaya a **Máquinas Virtuales** > **Crear una VM**
2. Seleccione **Imágenes de Marketplace** en las opciones de origen
3. Elija su solución en el catálogo integrado

## Seguimiento del despliegue

Una vez iniciado el despliegue:
- Siga el avance desde la consola OpenIaaS
- La VM aparecerá en su lista de máquinas virtuales