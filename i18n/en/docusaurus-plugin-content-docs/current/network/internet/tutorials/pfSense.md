---
title: Deploy an open-source pfSense firewall
tags:
  - internet
  - tutorials
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

This guide will help you deploy your __open-source pfSense firewall__ in the Trusted Cloud in just a few minutes.

## Prerequisites

The prerequisites for this guide are as follows:

1. Have subscribed to the Cloud Temple product: you must have your organization, tenant, and access credentials,
2. Have permissions on the compute module.

This document describes the steps to follow to deploy a pfSense virtual firewall.

## Deploy an open-source pfSense firewall

[pfSense](https://www.pfsense.org) is an open source project based on FreeBSD that allows you to set up a virtual firewall.

A pfSense firewall is administered via a web interface, so you need a second machine
with a graphical interface and an IP address in the same LAN network as the firewall to configure it.

We will need a set of two VMs:

- the first will be the machine on which we will deploy the firewall
- the second will be the machine from which we will administer the firewall.

### Request internet access delivery

The first step is to retrieve [the internet access information here](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).
 You must have the following information:

- public prefix
- interconnection prefix
- anycast gateway
- IP range
- local AS
- Cloud Temple AS
- keepalive timers and hold-time timer
- route server addresses

### Network interface installation and configuration

You can then deploy your pfSense VM:

1. __Firewall installation__ from the pfSense template in Console:
    - [(Deploy via console)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Deploy via Terraform)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. __Configuration of the LAN and WAN interfaces__ of the firewall: the WAN interface must be in your internet vLAN, its IP will be assigned from the IP range communicated to you by the CDS, as well as the default GW.
3. __Installation of the second machine__ for management.
4. __Interface configuration__ of the management VM: this machine must be in the same network as the one in which the firewall's LAN interface was configured.

### Firewall Access

Once both VMs are properly installed, the second step is to access the firewall to begin its configuration.

- access the firewall's web interface from the management VM:

<img src={pfSenseWebui} />
- default login:
    - username : *admin*
    - password : *pfsense* (remember to change the default password)

<img src={pfSenseHomePage} />

### Firewall configuration
This step involves configuring the BGP neighbors for the FW.

- first, make sure to allow BGP traffic on TCP port 179 in __'Firewall > Rules'__ :

<img src={pfSenseBgpRule} />

- Go to __'services > FRR BGP'__ to begin configuring your BGP session :

<img src={pfSenseFrrPackage} />

- Check the first two boxes and enter your local AS number and the timer values provided by the CDS.

<img src={pfSenseGeneralConf} />

### BGP Neighbors Configuration

In Neighbors, click +Add to start creating your BGP neighbors.

- For each neighbor: enter its IP address in __'General Options > Name/address'__

<img src={pfSenseNeighborConf} />

- enter the remote AS (corresponding to the Cloud Temple AS number) in Basic Options as follows:

<img src={bgpBasicOptions} />

- and finally in Advanced Options, do the following:

<img src={ebgpConf} />

- check the box that defines your neighbor type. In our case, it is ``a route`` server:

<img src={routeServerNeighbor} />

- finally, don't forget to save your changes by clicking __'save'__:

<img src={neighborsOverview} />

### Verification of the BGP session status with neighbors

In Status, you can see the BGP session status that you just configured

<img src={pfSenseBgpStatus} />

Ensure that the __BGP State__ is __established__.

### Announce your public prefix

To announce your public prefix, you can create /32 routes and perform static redistribution:

- in __*System > Routing > Static Routes*__: create your /32 static routes by setting the Gateway to Null4- 127.0.0.1
- in __*Services > FRR package > BGP > Network Distribution*__: enable local ``redistribution`` by selecting IPv4 in the ``Redistribute`` FRR static routes.