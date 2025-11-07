---
title: Deploy a pfSense open source firewall
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

This guide will help you deploy your __open source pfSense firewall__ in the Cloud of Trust in just a few minutes.

## Voraussetzungen

Die Voraussetzungen für diese Anleitung sind:

1. Ein abgeschlossener Cloud Temple-Vertrag: Sie müssen über Ihre Organisation, Ihren Mandanten und Ihre Zugangsdaten verfügen,
2. Berechtigungen für das Compute-Modul.

In diesem Dokument werden die Schritte zur Bereitstellung eines virtuellen Firewalls mit pfSense beschrieben.

## Deploy a pfSense open source firewall

[pfSense](https://www.pfsense.org) is an open source project based on FreeBSD that enables the deployment of a virtual firewall.

A pfSense firewall is managed via a web interface, so you need a second machine with a graphical interface that has an IP address in the same LAN network as the firewall in order to configure it.

We will need a set of two virtual machines:

- The first one will be the machine on which we deploy the firewall.
- The second one will be the machine from which we administer the firewall.

### Request an internet access delivery

The first step is to retrieve [the internet access information here](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).  
You must have the following information:

- public prefix  
- interconnection prefix  
- any-cast gateway  
- IP range  
- local AS  
- Cloud Temple AS  
- keepalive timers and hold-time timer  
- route server addresses

### Netzwerkinstallation und -konfiguration der Schnittstellen

Anschließend können Sie Ihre pfSense-VM bereitstellen:

1. __Installation der Firewall__ über den pfSense-Template in Shiva:
    - [(Über die Konsole bereitstellen)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Über Terraform bereitstellen)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. __Konfiguration der LAN- und WAN-Schnittstellen__ der Firewall: Die WAN-Schnittstelle muss in Ihrem vLAN Internet liegen; ihre IP-Adresse wird aus dem Ihnen vom CDS bereitgestellten IP-Adressbereich entnommen sowie die Standard-Gateway-Adresse.
3. __Bereitstellung der zweiten Management-Maschine__.
4. __Konfiguration der Schnittstelle__ der Management-VM: Diese Maschine muss sich im selben Netzwerk befinden wie die LAN-Schnittstelle der Firewall.

### Zugriff auf die Firewall

Sobald die beiden VMs ordnungsgemäß installiert sind, folgt Schritt zwei: der Zugriff auf die Firewall zur Beginn der Konfiguration.

- Zugriff auf die Web-Oberfläche der Firewall von der Management-VM aus:

<img src={pfSenseWebui} />
- Standard-Anmeldung:
    - Benutzername: *admin*
    - Passwort: *pfsense* (denken Sie daran, das Standardpasswort zu ändern)

<img src={pfSenseHomePage} />

### Firewall Configuration  
This step involves configuring the BGP neighbors on the firewall.

- First, make sure to allow BGP traffic over TCP port 179 in __'Firewall > Rules'__:

<img src={pfSenseBgpRule} />

- Navigate to __'Services > FRR BGP'__ to begin configuring your BGP session:

<img src={pfSenseFrrPackage} />

- Check the first two boxes and enter your local AS number and the timers provided by the CDS.

<img src={pfSenseGeneralConf} />

### BGP Neighbor Configuration

In the Neighbors section, click on **+Add** to start creating your BGP neighbors.

- For each neighbor: enter its IP address in __'General Options > Name/address'__:

<img src={pfSenseNeighborConf} />

- Enter the remote AS (corresponding to the cloud temple's AS number) in the Basic Options as follows:

<img src={bgpBasicOptions} />

- Finally, in the Advanced Options, perform the following:

<img src={ebgpConf} />

- Check the box that defines the neighbor type. In our case, it is a ``route`` server:

<img src={routeServerNeighbor} />

- Lastly, don't forget to save your changes by clicking on __'Save'__:

<img src={neighborsOverview} />

### Checking the BGP session status with neighbors

In Status, you can view the state of the BGP session you just configured.

<img src={pfSenseBgpStatus} />

Make sure that the __BGP State__ is set to __established__.

### Announce your public prefix

To announce your public prefix, you can create /32 routes and redistribute them as static:

- In __*System > Routing > Static Routes*__ : create your static routes as /32, setting the Gateway to Null4-127.0.0.1.
- In __*Services > FRR package > BGP > Network Distribution*__ : enable ``redistribution`` locally by selecting IPV4 in ``Redistribute`` FRR static routes.