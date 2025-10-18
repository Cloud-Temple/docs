---
title: Desplegar un firewall open source pfSense
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

Esta guía le ayudará a desplegar su __firewall open source pfSense__ en la nube de Confianza en solo unos minutos.

## Requis

Los requisitos para este guía son los siguientes:

1. Tener suscrito al plan Cloud Temple: debe disponer de su organización, su inquilino y sus accesos,
2. Tener permisos sobre el módulo compute.

Este documento describe los pasos a seguir para desplegar un firewall virtual pfSense.

## Deploy a pfSense open source firewall

[pfSense](https://www.pfsense.org) is an open source project based on FreeBSD that enables the deployment of a virtual firewall.

A pfSense firewall is managed via a web interface, so you need a second machine with a graphical interface that has an IP address in the same LAN network as the firewall in order to configure it.

We will need a set of two VMs:

- The first one will be the machine where we deploy the firewall.
- The second one will be the machine from which we will administer the firewall.

### Solicitar una entrega de acceso a Internet

La primera etapa consiste en recuperar [la información de acceso a Internet aquí](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).  
Debe contar con la siguiente información:

- prefijo público  
- prefijo de interconexión  
- pasarela any-cast  
- rango IP  
- AS local  
- AS de Cloud Temple  
- temporizadores keepalive y temporizador hold-time  
- las direcciones de los servidores de rutas

### Instalación y configuración de interfaces de red

A continuación, puede desplegar su máquina virtual pfSense:

1. __Instalación del firewall__ a partir de la plantilla pfSense en Shiva:
    - [(Desplegar mediante la consola)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Desplegar mediante Terraform)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. __Configuración de las interfaces LAN y WAN__ del firewall: la interfaz WAN debe estar en su vLAN de internet, su dirección IP se tomará de la gama IP que le fue proporcionada por el CDS, así como la puerta de enlace predeterminada.
3. __Instalación de la segunda máquina__ de gestión.
4. __Configuración de la interfaz__ de la VM de gestión: esta máquina debe estar en la misma red que la interfaz LAN del firewall.

### Acceso al Firewall

Una vez que las dos máquinas virtuales estén correctamente instaladas, la segunda etapa consiste en acceder al firewall para comenzar su configuración.

- Acceder a la interfaz web del firewall desde la VM de gestión:

<img src={pfSenseWebui} />
- Inicio de sesión por defecto:
    - nombre de usuario: *admin*
    - contraseña: *pfsense* (recuerde cambiar la contraseña predeterminada)

<img src={pfSenseHomePage} />

### Configuración del firewall  
Esta etapa consiste en configurar los vecinos BGP del FW.

- En primer lugar, asegúrese de permitir el tráfico BGP mediante TCP 179 en __'Firewall > Rules'__:

<img src={pfSenseBgpRule} />

- Vaya a __'Servicios > FRR BGP'__ para comenzar la configuración de su sesión BGP:

<img src={pfSenseFrrPackage} />

- Marque las dos primeras casillas y especifique el número de su AS local y los tiempos que le fueron proporcionados por el CDS.

<img src={pfSenseGeneralConf} />

### Configuración de los vecinos BGP

En la sección *Neighbors*, haga clic en **+Add** para comenzar a crear sus vecinos BGP.

- Para cada vecino: introduzca su dirección IP en __'Opciones generales > Nombre/dirección'__:

<img src={pfSenseNeighborConf} />

- Ingrese el AS remoto (correspondiente al número de AS de Cloud Temple) en las opciones básicas como se muestra a continuación:

<img src={bgpBasicOptions} />

- Por último, en las opciones avanzadas, realice lo siguiente:

<img src={ebgpConf} />

- Marque la casilla que define el tipo de vecino. En nuestro caso, se trata de un servidor de rutas:

<img src={routeServerNeighbor} />

- Finalmente, no olvide guardar sus modificaciones haciendo clic en __'Guardar'__:

<img src={neighborsOverview} />

### Verificación del estado de la sesión BGP con los vecinos

En Status, puede ver el estado de la sesión BGP que acaba de configurar.

<img src={pfSenseBgpStatus} />

Asegúrese de que el __Estado BGP__ esté en __established__.

### Anunciar su prefijo público

Para anunciar su prefijo público, puede crear rutas en /32 y redistribuirlas como rutas estáticas:

- en __*System > Routing > Rutas estáticas*__ : cree sus rutas estáticas en /32, estableciendo la Gateway en Null4-127.0.0.1.
- en __*Services > Paquete FRR > BGP > Distribución de red*__ : active la opción de ``redistribución`` local, seleccionando IPV4 en ``Redistribuir`` rutas estáticas de FRR.