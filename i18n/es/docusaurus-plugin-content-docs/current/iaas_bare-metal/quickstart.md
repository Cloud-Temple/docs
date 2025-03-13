---
title: Guía de inicio rápido
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# Inicio rápido para la oferta Bare Metal

Esta página le guía a través de los pasos iniciales para utilizar la oferta **Bare Metal** desde la consola Cloud Temple. Siga estas instrucciones para descubrir los menús y funcionalidades disponibles.

---

## Requisitos previos

Antes de comenzar, asegúrese de los siguientes puntos:

1. **Suscripción activa**: Su organización debe haber suscrito a la oferta Bare Metal.
2. **Permisos de usuario**: Su cuenta de usuario debe disponer de los derechos necesarios para acceder y gestionar los recursos Bare Metal.

---

## Acceso a la interfaz Bare Metal

Una vez que la suscripción está activada y los permisos configurados, aparece un nuevo menú titulado **Bare Metal** en la consola Cloud Temple. Este menú contiene dos submenús principales: **Bare Metal** y **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. Submenú **Bare Metal**

El submenú **Bare Metal** presenta una tabla que lista todas las instancias Bare Metal disponibles. Esta tabla incluye la información principal para cada instancia:

- **Nombre del Bare Metal**
- **Estado**
- **Configuración de hardware**
- **Dirección IP**

<img src={shivaBareMetalList} />

#### Funcionalidades principales

- **Botón Acción**: Permite acceder directamente a la consola de administración del Bare Metal.
- **Nombre clickable**: Al hacer clic en el nombre de una instancia Bare Metal, se muestra una nueva página con los **detalles completos** de la instancia:
  - Información sobre el hardware (RAM, CPU, GPU, etc.).
  - Configuración de red (direcciones IP asociadas).
  - Información de conectividad para la gestión.

<img src={shivaBareMetalDetails} />

---

### 2. Submenú **Volumes**

El submenú **Volumes** muestra una tabla que lista todos los volúmenes de almacenamiento asociados a su suscripción Bare Metal. Para cada volumen, está disponible la siguiente información:

- **Nombre del volumen**
- **Capacidad**
- **Clase de rendimiento** (IOPS por TB)
- **Estado** (Disponible, En despliegue, etc.)

<img src={shivaBareMetalStoragelist} />

#### Funcionalidades principales

- Gestión de volúmenes: Desde esta tabla, puede mapear los volúmenes a sus instancias Bare Metal.

---
