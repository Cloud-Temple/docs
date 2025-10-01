---
title: Desplegar una imagen en VMware
---
import marketplaceVmwareDeployment from '../images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '../images/marketplace_vmware_config.png'

Este tutorial le guía para desplegar una imagen de máquina virtual desde el Cloud Temple Marketplace a su entorno VMware.

## Prerrequisitos

- Tener un entorno VMware configurado
- Tener permisos de creación de máquinas virtuales
- La imagen debe tener **VMware** en sus objetivos compatibles

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

El despliegue normalmente toma menos de 10 minutos dependiendo del tamaño de la imagen.

## Acceso alternativo

También puede acceder a las plantillas del Marketplace directamente desde la interfaz VMware:

1. Vaya a **vSphere** > **Desplegar una VM**
2. Seleccione **Plantilla del Marketplace** como origen
3. Navegue por las imágenes disponibles en el catálogo integrado

## Monitoreo del despliegue

Una vez lanzado el despliegue:
- Siga el progreso desde la consola VMware
- La VM aparecerá en su inventario vSphere
- Conéctese una vez completado el despliegue
