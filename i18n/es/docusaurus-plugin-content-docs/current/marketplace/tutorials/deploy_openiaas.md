---
title: Desplegar una imagen en OpenIaaS
---
import marketplaceOpeniaasDeployment from '@site/docs/marketplace/images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '@site/docs/marketplace/images/marketplace_openiaas_config.png'

Este tutorial le guía para desplegar una imagen de máquina virtual desde la Marketplace Cloud Temple hacia su entorno OpenIaaS.

## Prerrequisitos

- Disponer de un entorno OpenIaaS configurado
- Tener los permisos de creación de máquinas virtuales
- La imagen debe tener **OpenIaaS** entre sus destinos compatibles

## Pasos de despliegue

### 1. Selección y despliegue

Desde la página de detalle de una solución compatible con OpenIaaS, seleccione su entorno destino y haga clic en **Desplegar** :
<img src={marketplaceOpeniaasDeployment} />

### 2. Configuración de la máquina virtual

Configure los parámetros básicos de su máquina virtual :

- **Nombre** de la VM
- **Recursos** (CPU, RAM)
- **Almacenamiento**
- **Red**

<img src={marketplaceOpeniaasConfig} />

El despliegue se realiza generalmente en menos de 10 minutos según el tamaño de la imagen.

## Acceso alternativo

También puede acceder a las imágenes de la Marketplace directamente desde la página **Máquinas Virtuales** de su entorno OpenIaaS :

1. Acceda a **Máquinas Virtuales** > **Crear una VM**
2. Seleccione **Imágenes Marketplace** en las opciones de origen
3. Elija su solución en el catálogo integrado

## Seguimiento del despliegue

Una vez iniciado el despliegue :

- Siga el avance desde la consola OpenIaaS
- La VM aparecerá en su lista de máquinas virtuales

Si la imagen proporciona credenciales predeterminadas, cambie la contraseña en la primera conexión.
