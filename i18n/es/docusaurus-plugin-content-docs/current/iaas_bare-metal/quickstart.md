---
title: Guía de inicio
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# QuickStart para la oferta Bare Metal

Esta página lo guía a través de los pasos iniciales para utilizar la oferta **Bare Metal** desde la consola Cloud Temple. Siga estas instrucciones para descubrir los menús y funcionalidades disponibles.

---

## Requisitos previos

Antes de comenzar, asegúrese de los siguientes puntos:

1. **Suscripción activada**: Su organización debe tener suscrito a la oferta Bare Metal.
2. **Permisos de usuario**: Su cuenta de usuario debe contar con los derechos necesarios para acceder y gestionar las recursos Bare Metal.

---

## Acceso a la interfaz Bare Metal

Una vez activada la suscripción y configurados los permisos, aparecerá un nuevo menú denominado **Bare Metal** en la consola Cloud Temple. Este menú contiene dos submenús principales: **Bare Metal** y **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. Submenú **Bare Metal**

El submenú **Bare Metal** le presenta una tabla que enumera todas las instancias Bare Metal disponibles. Esta tabla incluye la información principal para cada instancia:

- **Nombre del Bare Metal**
- **Estado**
- **Configuración hardware**
- **Dirección IP**

<img src={shivaBareMetalList} />

#### Funcionalidades principales

- **Botón de Acción**: Permite acceder directamente a la consola de administración del Bare Metal.
- **Nombre clicable**: Al hacer clic en el nombre de una instancia Bare Metal, se abre una nueva página con los **detalles completos** de la instancia:
  - Información sobre el hardware (RAM, CPU, GPU, etc.).
  - Configuración de red (direcciones IP asociadas).
  - Información de conectividad para la gestión.

<img src={shivaBareMetalDetails} />

---

### 2. Submenú **Volumes**

El submenú **Volumes** muestra una tabla que enumera todos los volúmenes de almacenamiento asociados a su suscripción Bare Metal. Para cada volumen, están disponibles las siguientes informaciones:

- **Nombre del volumen**
- **Capacidad**
- **Clase de rendimiento** (IOPS por To)
- **Estado** (Disponible, en proceso de despliegue, etc.)

<img src={shivaBareMetalStoragelist} />

#### Funcionalidades principales

- Gestión de volúmenes: Desde esta tabla, puede asignar los volúmenes a sus instancias Bare Metal.