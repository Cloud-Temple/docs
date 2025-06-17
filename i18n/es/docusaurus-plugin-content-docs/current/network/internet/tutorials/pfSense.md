---
title: Desplegar un firewall de código abierto pfSense
tags:
  - internet
  - tutoriales
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

Este guía le ayudará a desplegar su __firewall de código abierto pfSense__ en el Cloud de Confianza en solo unos minutos.

## Requisitos previos

Los requisitos previos para este guía son los siguientes:

1. Haber suscrito la oferta Cloud Temple: debe contar con su organización, su inquilino y sus accesos,
2. Tener permisos sobre el módulo compute.

Este documento describe los pasos a seguir para desplegar un firewall virtual pfSense.

## Desplegar un firewall de código abierto pfSense

[pfSense](https://www.pfsense.org) es un proyecto de código abierto basado en freeBSD que permite implementar un firewall virtual.

Un firewall pfSense se administra a través de una interfaz web, por lo tanto, debe contar con una segunda máquina con una interfaz gráfica que tenga una dirección IP en la misma red LAN que el firewall para poder configurarlo.

Necesitaremos un conjunto de dos VM:

- la primera será la máquina en la que desplegaremos el firewall
- la segunda será la máquina desde la que administraremos el firewall.

### Solicitar acceso a internet

La primera etapa consiste en recuperar [la información de acceso a internet aquí](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).
Debe tener la siguiente información:

- prefijo público
- prefijo de interconexión
- gateway any-cast
- rango IP
- AS local
- AS de Cloud Temple
- timers de keepalive y timer de hold-time
- direcciones de los servidores de rutas

### Instalación y configuración de las interfaces de red

Luego puede desplegar su VM pfSense:

1. __Instalación del firewall__ desde la plantilla pfSense en shiva:
    - [(Desplegar a través de la consola)](/docs/iaas_vmware/tutorials/deploy_vm_template)
    - [(Desplegar a través de Terraform)](/docs/iaas_vmware/tutorials/deploy_vm_terraform).
2. __Configuración de las interfaces LAN y WAN__ del firewall: la interfaz WAN debe estar en su vLAN de internet, su IP será tomada del rango IP que le fue comunicado por el CDS así como la GW por defecto.
3. __Instalación de la segunda máquina__ de gestión.
4. __Configuración de la interfaz__ de la VM de gestión: esta máquina debe estar en la misma red que la que se configuró la interfaz LAN del firewall.

### Acceso al Firewall

Una vez que las dos VM estén bien instaladas, la segunda etapa consiste en acceder al firewall para comenzar su configuración.

- acceder a la interfaz web del firewall desde la vm de gestión:

<img src={pfSenseWebui} />
- inicio de sesión predeterminado:
    - nombre de usuario: *admin*
    - contraseña: *pfsense* (recuerde cambiar la contraseña predeterminada)

<img src={pfSenseHomePage} />
### Configuración del firewall
Esta etapa consiste en configurar los vecinos BGP del FW.

- en primer lugar, piense en permitir el tráfico BGP en TCP 179 en __'Firewall > Rules'__ :

<img src={pfSenseBgpRule} />

- vaya a __'servicios > FRR BGP'__ para comenzar la configuración de su sesión BGP :

<img src={pfSenseFrrPackage} />

- marque las dos primeras casillas y indique el número de su AS local y los timers que le fueron comunicados por el CDS.

<img src={pfSenseGeneralConf} />

### Configuración de los vecinos BGP

En "Neighbors", haga clic en +Add para comenzar a crear sus vecinos BPG.

- para cada vecino: ingrese su dirección IP en __'General Options > Name/address'__

<img src={pfSenseNeighborConf} />

- ingrese el AS remoto (correspondiente al número de AS de cloud temple) en opciones básicas como se muestra a continuación:

<img src={bgpBasicOptions} />

- y finalmente, en opciones avanzadas, haga lo siguiente:

<img src={ebgpConf} />

- marque la casilla que define el tipo de su vecino. En nuestro caso, es un "route" servidor :

<img src={routeServerNeighbor} />

- al final, no olvide guardar sus modificaciones haciendo clic en __'save'__ :

<img src={neighborsOverview} />

### Verificación del estado de la sesión bgp con los vecinos

En Status, puede ver el estado de la sesión BGP que acaba de configurar

<img src={pfSenseBgpStatus} />

Asegúrese de que el __BGP State__ esté en __established__.

### Anunciar su prefijo público

Para anunciar su prefijo público, puede crear rutas en /32 y realizar la redistribución en estático :

- en __*System > Routing > Rutas estáticas*__ : cree sus rutas estáticas en /32 colocando la Gateway en Null4- 127.0.0.1
- en __*Services > FRR package > BGP > Distribución de redes*__ : active la "redistribución" en local eligiendo IPV4 en "Reditribute" FRR rutas estáticas.