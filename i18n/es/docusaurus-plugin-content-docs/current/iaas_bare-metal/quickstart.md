---
title: Guía de inicio
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# Guía Rápida para la oferta Bare Metal

Esta página le guiará a través de los pasos iniciales para utilizar la oferta **Bare Metal** desde la consola Cloud Temple. Siga estas instrucciones para conocer los menús y funcionalidades disponibles.

---

## Requis previos

Antes de comenzar, asegúrese de cumplir los siguientes puntos:

1. **Suscripción activa**: Su organización debe tener suscrito el servicio Bare Metal.
2. **Permisos de usuario**: Su cuenta de usuario debe contar con los permisos necesarios para acceder y gestionar los recursos Bare Metal.

## Acceso a la interfaz Bare Metal

Una vez activada la suscripción y configuradas las permisos, aparece un nuevo menú denominado **Bare Metal** en la consola Cloud Temple. Este menú contiene dos submenús principales: **Bare Metal** y **Volumes**.

<img src={shivaBareMetalMenu} />

### 1. Submenú **Bare Metal**

El submenú **Bare Metal** le presenta una tabla que muestra todas las instancias Bare Metal disponibles. Esta tabla incluye la información principal para cada instancia:

- **Nombre del Bare Metal**
- **Estado**
- **Configuración hardware**
- **Dirección IP**

<img src={shivaBareMetalList} />

#### Funcionalidades principales

- **Botón Acción**: Permite acceder directamente a la consola de administración del Bare Metal.
- **Nombre clicable**: Al hacer clic en el nombre de una instancia Bare Metal, se abre una nueva página con los **detalles completos** de la instancia:
  - Información sobre el hardware (RAM, CPU, GPU, etc.).
  - Configuración de red (direcciones IP asociadas).
  - Información de conectividad para la gestión.

<img src={shivaBareMetalDetails} />

### 2. Submenú **Volumes**

El submenú **Volumes** muestra una tabla que lista todos los volúmenes de almacenamiento asociados a su suscripción Bare Metal. Para cada volumen, las siguientes informaciones están disponibles:

- **Nombre del volumen**
- **Capacidad**
- **Clase de rendimiento** (IOPS por To)
- **Estado** (Disponible, En despliegue, etc.)

<img src={shivaBareMetalStoragelist} />

:::info Volumen BFS (Inicio desde SAN)
El **Volumen 1** es el volumen **BFS (Inicio desde SAN)** y debe utilizarse para instalar el sistema operativo.

**Importante:** Este volumen no es compartible con otros servidores Bare Metal de la misma zona de disponibilidad (AZ).
:::

:::tip Mejor práctica
Prefiera instalar el SO en el volumen **BFS**, y almacene sus datos en un volumen **LUN** adicional. Esta separación facilita la mantenimiento, las copias de seguridad y la reinstalación del sistema si fuera necesario.
:::

#### Funcionalidades principales

- **Gestión de volúmenes**: Desde esta tabla, puede asignar volúmenes a sus instancias Bare Metal.