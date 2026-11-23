---
title: Desplegar una imagen en VM Instance
---

import marketplaceVmInstanceDeployment from '@site/docs/marketplace/images/marketplace_vminstance_deploy.jpg'
import marketplaceVmInstanceConfig from '@site/docs/marketplace/images/marketplace_vminstance_config.jpg'

Este tutorial le guía para desplegar una imagen de máquina virtual desde la Marketplace Cloud Temple hacia el servicio VM Instances.

## Prerrequisitos

- Contar con un tenant con el servicio **VM Instances** activado y los permisos de creación de máquinas virtuales.
- Elegir una imagen que tenga **VM Instance** entre sus destinos compatibles, disponible para la familia de instancias y la zona de disponibilidad deseadas.
- Contar con cuotas suficientes de CPU, RAM y almacenamiento, así como de una red accesible en la zona elegida.

## Pasos de despliegue

### 1. Selección y despliegue

Desde la página de detalle de la imagen, seleccione **VM Instance** en las **Opciones de despliegue** y luego haga clic en **Desplegar**. Se abre el asistente de creación con la imagen preseleccionada.

<img src={marketplaceVmInstanceDeployment} alt="Sélection de la cible VM Instance dans les options de déploiement Marketplace" />

### 2. Configuración de la máquina virtual

Complete los pasos del asistente:

- **Familia de instancias** y **zona de disponibilidad**: elija entre las opciones compatibles con la imagen.
- **Plantilla**: seleccione los recursos de CPU y RAM adecuados a su necesidad y a los prerrequisitos de la imagen.
- **Configuración de la instancia**: indique el nombre de la VM y su política de copia de seguridad.
- **Cloud Init**: si es necesario, complete **Cloud Config** para la configuración en el primer arranque y **Network Config** para la configuración de red del sistema invitado. Verifique los valores eventualmente prellenados y el formato aceptado por la imagen en su ficha Marketplace.
- **Discos**: verifique los discos derivados de la imagen, su capacidad y su tipo de almacenamiento; agregue discos de datos si es necesario.
- **Adaptadores de red**: conecte las interfaces a las redes de su entorno.

<img src={marketplaceVmInstanceConfig} alt="Configuration de la machine virtuelle dans l'assistant VM Instances" />

En el paso **Resumen**, verifique la configuración y el costo estimado, y luego haga clic en **Crear**.

El [tutoriel de création d'une VM Instance](../../public_cloud/vm_instances/tutorials/create_vm.md) detalla los parámetros de cada paso.

## Acceso alternativo

También puede seleccionar una imagen Marketplace desde el servicio VM Instances:

1. En la Consola Cloud Temple, abra **VM Instances** > **Instances**.
2. Haga clic en **Nueva máquina virtual**.
3. Seleccione una familia de instancias y una zona de disponibilidad.
4. En el paso **Elegir una imagen**, seleccione la imagen en el catálogo integrado.
5. Complete los pasos de configuración y luego valide el **Resumen**.

## Seguimiento del despliegue

Una vez iniciada la creación:

- Consulte la lista **VM Instances** > **Instances** para seguir el estado de la VM.
- Abra su ficha para verificar sus informaciónes, sus discos y sus adaptadores de red.
- Cuando esté iniciada, utilice la **Consola** o el modo de conexión indicado en la ficha Marketplace de la imagen.

Si la imagen proporciona credenciales por defecto, reemplace la contraseña en la primera conexión.
