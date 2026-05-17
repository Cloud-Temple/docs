---
title: Desplegar un firewall opensource pfSense
tags:
  - internet
  - tutoriales
---
import pfSenseWebui from '@site/docs/network/internet/images/pfsense_webui.png';
import pfSenseHomePage from '@site/docs/network/internet/images/pfsense_home_page.png';
import pfSenseBgpRule from '@site/docs/network/internet/images/pfsense_bgp_rule.png';
import pfSenseFrrPackage from '@site/docs/network/internet/images/pfsense_frr_package.png';
import pfSenseGeneralConf from '@site/docs/network/internet/images/pfsense_general_conf.png';
import pfSenseNeighborConf from '@site/docs/network/internet/images/pfsense_neighbor_conf.png';
import bgpBasicOptions from '@site/docs/network/internet/images/bgp_basic_options.png';
import ebgpConf from '@site/docs/network/internet/images/ebgp_conf.png';
import routeServerNeighbor from '@site/docs/network/internet/images/route_server_neighbor.png';
import neighborsOverview from '@site/docs/network/internet/images/neighbors_overview.png';
import pfSenseBgpStatus from '@site/docs/network/internet/images/pfsense_bgp_status.png';

Esta guía le ayudará a desplegar su __firewall opensource pfSense__ en el Cloud de Confianza en solo unos minutos.

## Prerrequisitos

Los prerrequisitos para esta guía son los siguientes:

1. Haber suscrito el producto Cloud Temple: debe disponer de su organización, su tenant y su acceso,
2. Contar con los permisos sobre el módulo de compute.

Este documento describe los pasos a seguir para implementar un firewall virtual pfSense.

## Desplegar un firewall open source pfSense

[pfSense](https://www.pfsense.org) es un proyecto open source basado en freeBSD que permite implementar un firewall virtual.

Un firewall pfSense se administra a través de una interfaz web, por lo que es necesario disponer de una segunda máquina
con una interfaz gráfica que tenga una dirección IP en la misma red LAN que el firewall para poder configurarlo.

Necesitaremos un conjunto de dos VM:

- la primera será la máquina en la que desplegaremos el firewall
- la segunda será la máquina desde la cual administraremos el firewall.

### Solicitar la entrega de acceso a internet

El primer paso consiste en obtener [la información de acceso a internet aquí](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).
 Debe contar con la siguiente información:

- prefijo público
- prefijo de interconexión
- puerta de enlace anycast
- rango de IP
- AS local
- AS de Cloud Temple
- temporizadores keepalive y el temporizador hold-time
- las direcciones de los servidores de rutas

### Instalación y configuración de red de las interfaces

A continuación, puede desplegar su vm pfSense :

1. __Instalación del firewall__ desde la plantilla pfSense en la Consola :
    - [(Desplegar a través de la consola)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Desplegar a través de Terraform)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. __Configuración de las interfaces LAN y WAN__ del firewall : la interfaz WAN debe estar en su vLAN de internet, su IP se asignará dentro del rango IP que le fue proporcionado por el CDS, al igual que la gateway predeterminada.
3. __Instalación de la segunda máquina__ de gestión.
4. __Configuración de la interfaz__ de la VM de gestión : esta máquina debe estar en la misma red en la que se configuró la interfaz LAN del firewall.

### Acceso al Firewall

Una vez que las dos VM están correctamente instaladas, el segundo paso consiste en acceder al firewall para comenzar su configuración.

- acceder a la interfaz web del firewall desde la vm de gestión :

<img src={pfSenseWebui} />
- inicio de sesión predeterminado :
    - nombre de usuario : *admin*
    - contraseña : *pfsense* (no olvide cambiar la contraseña predeterminada)

<img src={pfSenseHomePage} />

### Configuración del firewall
Este paso consiste en configurar los vecinos BGP del FW.

- en primer lugar, recuerde autorizar el flujo BGP en TCP 179 en __'Firewall > Rules'__ :

<img src={pfSenseBgpRule} />

- vaya a __'services > FRR BGP'__ para comenzar la configuración de su sesión BGP :

<img src={pfSenseFrrPackage} />

- marque las dos primeras casillas e indique el número de su AS local y los timers tel que le hayan sido comunicados por el CDS.

<img src={pfSenseGeneralConf} />

### Configuración de vecinos BGP

En Vecinos, haga clic en +Añadir para comenzar a crear sus vecinos BGP.

- Para cada vecino: ingrese su dirección IP en __'Opciones generales > Nombre/dirección'__

<img src={pfSenseNeighborConf} />

- ingrese el AS remoto (correspondiente al número de AS de cloud temple) en las opciones básicas de la siguiente manera:

<img src={bgpBasicOptions} />

- y finalmente, en las opciones avanzadas, configure lo siguiente:

<img src={ebgpConf} />

- marque la casilla que define el tipo de su vecino. En nuestro caso, es ``un servidor de rutas``:

<img src={routeServerNeighbor} />

- al final, no olvide guardar sus cambios haciendo clic en __'Guardar'__:

<img src={neighborsOverview} />

### Verificación del estado de la sesión BGP con los vecinos

En Status, puede ver el estado de la sesión BGP que acaba de configurar

<img src={pfSenseBgpStatus} />

Asegúrese de que el __BGP State__ esté en __established__.

### Anunciar su prefijo público

Para anunciar su prefijo público, puede crear rutas en /32 y realizar la redistribución estática:

- en __*System > Routing > Static Routes*__ : cree sus rutas estáticas en /32 estableciendo la Gateway en Null4- 127.0.0.1
- en __*Services > FRR package > BGP > Network Distribution*__ : active la ``redistribution`` local seleccionando IPV4 en ``Reditribute`` FRR static routes.