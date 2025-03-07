---
title: Guía de inicio
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'


# QuickStart para la oferta Bare Metal

Esta página te guía a través de los pasos iniciales para utilizar la oferta **Bare Metal** desde la consola Cloud Temple. Sigue estas instrucciones para descubrir los menús y funcionalidades disponibles.

---

## Prerrequisitos
Antes de comenzar, asegúrate de los siguientes puntos:
1. **Suscripción activada**: Tu organización debe haber suscrito a la oferta Bare Metal.
2. **Permisos de usuario**: Tu cuenta de usuario debe disponer de los derechos necesarios para acceder y gestionar los recursos Bare Metal.

---

## Acceso a la interfaz Bare Metal

Una vez activada la suscripción y configurados los permisos, aparece un nuevo menú titulado **Bare Metal** en la consola Cloud Temple. Este menú contiene dos submenús principales: **Bare Metal** y **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. Submenú **Bare Metal**

El submenú **Bare Metal** te presenta una tabla que lista todas las instancias Bare Metal disponibles. Esta tabla incluye la información principal para cada instancia:
- **Nombre del Bare Metal**
- **Estado**
- **Configuración de hardware**
- **Dirección IP**

<img src={shivaBareMetalList} />

#### Funcionalidades principales
- **Botón de Acción**: Permite acceder directamente a la consola de administración del Bare Metal.
- **Nombre clicable**: Al hacer clic en el nombre de una instancia Bare Metal, se muestra una nueva página con los **detalles completos** de la instancia:
  - Información del hardware (RAM, CPU, GPU, etc.).
  - Configuración de red (direcciones IP asociadas).
  - Información de conectividad para la gestión.

<img src={shivaBareMetalDetails} />


---

### 2. Submenú **Volumes**

El submenú **Volumes** muestra una tabla que lista todos los volúmenes de almacenamiento asociados a tu suscripción Bare Metal. Para cada volumen, la siguiente información está disponible:
- **Nombre del volumen**
- **Capacidad**
- **Clase de rendimiento** (IOPS por TB)
- **Estado** (Disponible, En curso de implementación, etc.)

<img src={shivaBareMetalStoragelist} />


#### Funcionalidades principales
- Gestión de volúmenes: Desde esta tabla, puedes mapear los volúmenes a tus instancias Bare Metal.

---