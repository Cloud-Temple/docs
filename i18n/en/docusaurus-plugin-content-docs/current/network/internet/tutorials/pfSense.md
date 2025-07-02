---
title: Deploy an open source pfSense firewall
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

## Prerequisites

The prerequisites for this guide are as follows:

1. Have subscribed to the Cloud Temple offer: you must have your organization, your tenant, and your access,
2. Have rights on the compute module.

This document describes the steps to follow to deploy a pfSense virtual firewall.

## Deploy an open source pfSense firewall

[pfSense](https://www.pfsense.org) is an open source project based on freeBSD that allows you to set up a virtual firewall.

A pfSense firewall is managed via a web interface, so you need a second machine with a graphical interface that has an IP address in the same LAN network as the firewall to be able to configure it.

We will need a set of two VMs:

- the first will be the machine on which we will deploy the firewall
- the second will be the machine from which we will manage the firewall.

### Request internet access delivery

The first step is to retrieve [the internet access information here](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).
 You must have the following information:

- public prefix
- interconnection prefix
- any-cast gateway
- IP range
- local AS
- Cloud Temple AS
- keepalive timers and the hold-time timer
- the addresses of the route servers

### Installation and network interface configuration

You can then deploy your pfSense vm:

1. __Installation of the firewall__ from the pfSense template in shiva:
    - [(Deploy via the console)](/docs/iaas_vmware/tutorials/deploy_vm_template)
    - [(Deploy via Terraform)](/docs/iaas_vmware/tutorials/deploy_vm_terraform).
2. __Configuration of the LAN and WAN interfaces__ of the firewall: the WAN interface must be in your internet vLAN, its IP will be taken from the IP range that was communicated to you by the CDS as well as the default GW.
3. __Installation of the second management machine__.
4. __Configuration of the interface__ of the management VM: this machine must be in the same network as the network in which the firewall's LAN interface was configured.

### Access to the Firewall

Once the two VMs are properly installed, the next step is to access the firewall to start its configuration.

- access the firewall's web interface from the management VM:

<img src={pfSenseWebui} />
- default login:
    - username: *admin*
    - password: *pfsense* (remember to change the default password)

<img src={pfSenseHomePage} />
### Firewall configuration
This step consists of configuring the BGP neighbors of the FW.

- first, make sure to allow BGP traffic on TCP 179 in __'Firewall > Rules'__ :

<img src={pfSenseBgpRule} />

- go to __'services > FRR BGP'__ to start configuring your BGP session :

<img src={pfSenseFrrPackage} />

- check the first two boxes and enter your local AS number and the timers that were communicated to you by the CDS.

<img src={pfSenseGeneralConf} />

### BGP neighbor configuration

In Neighbors, click on +Add to start creating your BPG neighbors.

- for each neighbor: enter its IP address in __'General Options > Name/address'__

<img src={pfSenseNeighborConf} />

- enter the remote AS (corresponding to the Cloud Temple AS number) in basic options as follows:

<img src={bgpBasicOptions} />

- finally, in Advanced option, do the following:

<img src={ebgpConf} />

- check the box that defines the type of your neighbor. In our case, it's a ``route`` server:

<img src={routeServerNeighbor} />

- finally, don't forget to save your changes by clicking on __'save'__ :

<img src={neighborsOverview} />

### Checking the BGP session status with the neighbors

In Status, you can see the status of the BGP session you just configured

<img src={pfSenseBgpStatus} />

Make sure that the __BGP State__ is __established__.

### Announce your public prefix

To announce your public prefix, you can create /32 routes and perform static redistribution:

- in __*System > Routing > Static Routes*__ : create your static /32 routes by setting the Gateway to Null4- 127.0.0.1
- in __*Services > FRR package > BGP > Network Distribution*__ : enable the ``redistribution`` in local by choosing IPV4 in ``Reditribute`` FRR static routes.