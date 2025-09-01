---
title: Despliegue de un firewall opensource pfSense
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

Este guía te ayudará a desplegar tu __firewall de código abierto pfSense__ en la Nube de Confianza en solo unos minutos.

## Requisitos

Los requisitos para este guía son los siguientes:

1. Haber suscripción a la oferta Cloud Temple: Debe tener su organización, su tenencia y sus permisos,
2. Tener derechos sobre el módulo compute.

Este documento describe las etapas a seguir para desplegar un firewall virtual pfSense.

## Desplegar un firewall open source pfSense

[pfSense](https://www.pfsense.org) es un proyecto de código abierto basado en FreeBSD que permite configurar un firewall virtual.

Un firewall pfSense se administra a través de una interfaz web, por lo tanto, es necesario tener una segunda máquina con una interfaz gráfica que tenga una dirección IP dentro del mismo red LAN que el firewall para poderlo configurar.

Necesitaremos un conjunto de dos VM:

- La primera será la máquina en la que vamos a desplegar el firewall.
- La segunda será la máquina desde la cual vamos a administrar el firewall.

### Solicitar la entrega del acceso a internet

La primera etapa consiste en recuperar [las informaciones de acceso a internet aquí](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet). Deberás tener las siguientes informaciónes:

- prefix público
- prefix de conexión interconectiva
- gateway de cualquier-cast
- rango IP
- AS local
- AS de Cloud Temple
- tiempos de mantenimiento y el timer de retención
- direcciones de los servidores de rutas

### Instalación y configuración del red de las interfaces

Una vez instalado el firewall pfSense, puede seguir con su despliegue:

1. **Instalación del filtrador de red** desde el template de pfSense en shiva:
    - [(Despliegue a través de la consola)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Despliegue a través de Terraform)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. **Configuración de las interfaces LAN y WAN del filtrador de red**: La interfaz WAN debe estar en su VLAN de internet, su IP será tomada dentro de la rama IP que le haya comunicado el CDS junto con el GW por defecto.
3. **Instalación de la máquina de gestión adicional**.
4. **Configuración de la interfaz** de la VM de gestión: Esta máquina debe estar en el mismo red que la interfaz LAN del filtrador de red ha sido configurada.

### Acceso al Firewall

Una vez que ambas VM estén bien instaladas, la siguiente etapa consiste en acceder al firewall para comenzar su configuración.

- Acceder a la interfaz web del firewall desde la VM de gestión:

<img src={pfSenseWebui} />
- Inicio de sesión por defecto:
    - Nombrado : *admin*
    - Contraseña : *pfsense* (no olvides cambiar el contraseña predeterminado)

<img src={pfSenseHomePage} />

### Configuración del firewall
En esta etapa, se configura los vecinos BGP del FW.

- En primer lugar, asegúrate de autorizar el flujo BGP en TCP 179 en __'Firewall > Reglas'__:

  <img src={pfSenseBgpRule} />

- Pasá a __'Servicios > FRR BGP'__ para comenzar la configuración de tu sesión BGP:

  <img src={pfSenseFrrPackage} />

- Marca las dos primeras casillas y especifica el número de AS local de tu dominio y los tiempos de vida que te han sido comunicados por el CDS.

  <img src={pfSenseGeneralConf} />

### Configuración de vecinos BGP

En la sección Neighbors, haz clic en el botón +Add para comenzar a crear tus vecinos BGP.

- Para cada vecino: rellena su dirección IP en __'Opciones generales > Nombre/dirección'__

<img src={pfSenseNeighborConf} />

- Rellena el AS remoto (correspondiente al número de AS de Cloud Temple) en las opciones básicas de la siguiente manera:

<img src={bgpBasicOptions} />

- Y finalmente, en las opciones avanzadas, realiza lo siguiente:

<img src={ebgpConf} />

- Marca la casilla que define el tipo de tu vecino. En nuestro caso, se trata de un servidor de ruta:

<img src={routeServerNeighbor} />

- Asegúrate de guardar tus modificaciones haci clic en __'Guardar'__ al final:

<img src={neighborsOverview} />

### Verificación del estado de la sesión BGP con los vecinos

En el panel "Estado", puedes ver el estado de la sesión BGP que has configurado recientemente.

<img src={pfSenseBgpStatus} />

Asegúrate de que el __Estado BGP__ esté en __establecido__.

### Anunciar su prefixo público

Para anunciar su prefixo público, puede crear rutas en /32 y realizar la redistribución estática:

- En __*Sistema > Enrutamiento > Rutas Estáticas*__: crea tus rutas estáticas en /32 y establece la Gateway como Null4- 127.0.0.1
- En __*Servicios > Paquete FRR > BGP > Distribución de Red*__: activa la ``redistribution`` local en modo estático seleccionando IPv4 en el campo ``Reditribute`` del paquete FRR estáticas de BGP.