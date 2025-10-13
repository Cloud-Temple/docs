---
title: Desplegar una imagen en OpenIaaS
---
import marketplaceOpeniaasDeployment from '../images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '../images/marketplace_openiaas_config.png'

Este tutorial le guía para desplegar una imagen de máquina virtual desde el Cloud Temple Marketplace a su entorno OpenIaaS.

## Prerrequisitos

- Tener un entorno OpenIaaS configurado
- Tener permisos de creación de máquinas virtuales
- La imagen debe tener **OpenIaaS** en sus objetivos compatibles

## Pasos de despliegue

### 1. Selección y despliegue

Desde la página de detalles de una solución compatible con OpenIaaS, seleccione su entorno objetivo y haga clic en **Desplegar**:
<img src={marketplaceOpeniaasDeployment} />

### 2. Configuración de la máquina virtual

Configure los parámetros básicos de su máquina virtual:
- **Nombre** de la VM
- **Recursos** (CPU, RAM)
- **Almacenamiento**
- **Red**

<img src={marketplaceOpeniaasConfig} />

El despliegue normalmente toma menos de 10 minutos dependiendo del tamaño de la imagen.

## Acceso alternativo

También puede acceder a las imágenes del Marketplace directamente desde la página **Máquinas Virtuales** de su entorno OpenIaaS:

1. Vaya a **Máquinas Virtuales** > **Crear una VM**
2. Seleccione **Imágenes del Marketplace** en las opciones de origen
3. Elija su solución del catálogo integrado

## Monitoreo del despliegue

Una vez lanzado el despliegue:
- Siga el progreso desde la consola OpenIaaS
- La VM aparecerá en su lista de máquinas virtuales
- Conéctese una vez completado el despliegue
