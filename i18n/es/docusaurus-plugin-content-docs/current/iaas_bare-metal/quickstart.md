---
title: Guía de inicio
---
import shivaBareMetalMenu from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_menu.png'
import shivaBareMetalList from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from '@site/docs/iaas_bare-metal/images/shiva_bare-metal_storagelist.png'

# QuickStart para la oferta Bare Metal

Esta página le guía a través de los pasos iniciales para utilizar la oferta **Bare Metal** desde la consola Cloud Temple. Siga estas instrucciones para explorar los menús y las funcionalidades disponibles.

---

## Requisitos previos

Antes de comenzar, asegúrese de lo siguiente:

1. **Suscripción activada** : Su organización debe haberse suscrito a la oferta Bare Metal.
2. **Permisos de usuario** : Su cuenta de usuario debe tener los permisos necesarios para acceder y gestionar los recursos Bare Metal.

---

## Acceso a la interfaz Bare Metal

Una vez activada la suscripción y configurados los permisos, aparece un nuevo menú titulado **Bare Metal** en la consola Cloud Temple. Este menú contiene dos submenús principales: **Bare Metal** y **Volúmenes**.

<img src={shivaBareMetalMenu} />

---

### 1. Submenú **Bare Metal**

El submenú **Bare Metal** muestra una tabla que lista todas las instancias Bare Metal disponibles. Esta tabla incluye la información principal para cada instancia:

- **Nombre del Bare Metal**
- **Estado**
- **Configuración de hardware**
- **Dirección IP**

<img src={shivaBareMetalList} />

#### Funcionalidades principales

- **Botón Acción** : Permite acceder directamente a la consola de administración del Bare Metal.
- **Nombre clicable** : Al hacer clic en el nombre de una instancia de Bare Metal, se muestra una nueva página con los **detalles completos** de la instancia :
  - Información sobre el hardware (RAM, CPU, GPU, etc.).
  - Configuración de red (direcciones IP asociadas).
  - Información de conectividad para la gestión.

<img src={shivaBareMetalDetails} />

---

### 2. Submenú **Volúmenes**

El submenú **Volúmenes** muestra una tabla que lista todos los volúmenes de almacenamiento asociados a su suscripción Bare Metal. Para cada volumen, se dispone de la siguiente información:

- **Nombre del volumen**
- **Capacidad**
- **Clase de rendimiento** (IOPS par To)
- **Estado** (Disponible, En cours de déploiement, etc.)

<img src={shivaBareMetalStoragelist} />

:::info[Volume BFS (Boot from SAN)]
El **Volume 1** es el volumen **BFS (Boot from SAN)** y debe utilizarse para instalar el sistema operativo.

**Importante:** Este volumen no es compartible con los demás Bare Metal de la misma zona de disponibilidad (AZ).
:::

:::tip[Mejor práctica]
Priorice la instalación del SO en el volumen **BFS**, y almacene sus datos en un volumen **LUN** adicional. Esta separación facilita el mantenimiento, las copias de seguridad y la reinstalación del sistema si es necesario.
:::

#### Funcionalidades principales

- **Gestión de volúmenes** : Desde este panel, puede asignar los volúmenes a sus instancias Bare Metal.

---