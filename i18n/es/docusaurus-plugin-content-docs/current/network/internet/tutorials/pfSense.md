---
title: Desplegar un firewall opensource pfSense
tags:
  - internet
  - tutorials
---
import pfSenseWebui from '../images/pfsense_webui.png';
import pfSenseHomePage from '../images/pfsense_home_page.png';
import pfSenseBgpRule from '../images/pfsense_bgp_rule.png';
import pfSenseFrrPackage from '../images/pfsense_frr_package.png';
import pfSenseGeneralConf from '../images/pfsense_general_conf.png';
import pfSenseNeighborConf from '../images/pfsense_neighbor_conf.png';
import bgpBasicOptions from '../images/bgp_basic_options.png';
import ebgpConf from '../images/ebgp_conf.png';
import routeServerNeighbor from '../images/route_server_neighbor.png';
import neighborsOverview from '../images/neighbors_overview.png';
import pfSenseBgpStatus from '../images/pfsense_bgp_status.png';

Esta guía te ayudará a desplegar tu __firewall opensource pfSense__ en la Nube de Confianza en solo unos minutos.

## Prerrequisitos

Los prerrequisitos para esta guía son los siguientes:

1. Haber suscrito a la oferta de Cloud Temple: debes disponer de tu organización, tu inquilino y tus accesos,
2. Tener los derechos sobre el módulo compute.

Este documento describe los pasos a seguir para desplegar un firewall virtual pfSense.

## Desplegar un firewall opensource pfSense

[pfSense](https://www.pfsense.org) es un proyecto open source basado en freeBSD que permite implementar un firewall virtual.

Un firewall pfSense se administra a través de una interfaz web, por lo que necesitas disponer de una segunda máquina
con una interfaz gráfica que tenga una dirección IP en la misma red LAN que el firewall para poder configurarlo.

Necesitaremos un conjunto de dos VM:

- la primera será la máquina en la que vamos a desplegar el firewall
- la segunda será la máquina desde la que vamos a administrar el firewall.

### Solicitar una entrega de acceso a internet

El primer paso consiste en recuperar [la información de acceso a internet aquí](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).
 Debes tener la siguiente información:

- prefijo público
- prefijo interconexión
- gateway any-cast
- rango IP
- AS local
- AS de Cloud Temple
- temporizadores de keepalive y el tiempo de retención
- las direcciones de los servidores de rutas

### Instalación y configuración de red de las interfaces

Luego puedes desplegar tu vm pfSense:

1. __Instalación del firewall__ desde la plantilla pfSense en shiva:
    - [(Desplegar vía la consola)](/docs/iaas_vmware/tutorials/deploy_vm_template)
    - [(Desplegar vía Terraform)](/docs/iaas_vmware/tutorials/deploy_vm_terraform).
2. __Configuración de las interfaces LAN y WAN__ del firewall: la interfaz WAN debe estar en tu vLAN de internet, su IP se tomará del rango IP que te fue comunicado por el CDS así como el GW predeterminado.
3. __Instalación de la segunda máquina__ de gestión.
4. __Configuración de la interfaz__ de la VM de gestión: esta máquina debe estar en la misma red que aquella en la que se configuró la interfaz LAN del firewall.

### Acceso al Firewall

Una vez que las dos VM están bien instaladas, el segundo paso consiste en acceder al firewall para comenzar su configuración.

- acceder a la interfaz web del firewall desde la vm de gestión:

<img src={pfSenseWebui} />
- login por defecto:
    - username : *admin*
    - password : *pfsense* (recuerda cambiar la contraseña por defecto)

<img src={pfSenseHomePage} />
### Configuración del firewall
Este paso consiste en configurar los vecinos BGP del FW.

- en primer lugar, recuerda autorizar el Flujo BGP en TCP 179 en __'Firewall > Rules'__:

<img src={pfSenseBgpRule} />

- Ir a __'services > FRR BGP'__ para comenzar la configuración de tu sesión BGP:

<img src={pfSenseFrrPackage} />

- Marca las dos primeras casillas e indica el número de tu AS local y los tiempos tal como te fueron comunicados por el CDS.

<img src={pfSenseGeneralConf} />

### Configuración de los vecinos BGP

En Neighbors, haz clic en +Add para comenzar a crear tus vecinos BGP.

- Para cada vecino: introduce su dirección IP en __'General Options > Name/address'__

<img src={pfSenseNeighborConf} />

- introduce el AS remoto (correspondiente al número de AS de Cloud Temple) en basic options como sigue:

<img src={bgpBasicOptions} />

- y finalmente, en Advanced option, haz lo siguiente:

<img src={ebgpConf} />

- marca la casilla que define el tipo de tu vecino. En nuestro caso, es ``un route`` servidor:

<img src={routeServerNeighbor} />

- al final, no olvides guardar tus modificaciones haciendo clic en __'save'__:

<img src={neighborsOverview} />

### Verificación del estado de la sesión BGP con los neighbors

En Status, puedes ver el estado de la sesión BGP que acabas de configurar

<img src={pfSenseBgpStatus} />

Asegúrate de que el __BGP State__ esté en __established__.

### Anunciar tu prefijo público

Para anunciar tu prefijo público, puedes crear rutas en /32 y hacer la redistribución en estática:

- en __*System > Routing > Static Routes*__: crea tus rutas estáticas en /32 poniendo la Gateway en Null4- 127.0.0.1
- en __*Services > FRR package > BGP > Network Distribution*__: activa la ``redistribution`` en local eligiendo IPV4 en ``Reditribute`` FRR static routes.
