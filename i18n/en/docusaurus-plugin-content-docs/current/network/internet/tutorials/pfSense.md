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

1. Have subscribed to the Cloud Temple offering: you must have your organization, tenant, and access credentials,
2. Have permissions on the compute module.

This document describes the steps required to deploy a virtual pfSense firewall.

## Deploy an open source pfSense firewall

[pfSense](https://www.pfsense.org) is an open source project based on FreeBSD that enables the deployment of a virtual firewall.

A pfSense firewall is managed via a web interface, so you need a second machine with a graphical interface that has an IP address within the same LAN network as the firewall in order to configure it.

We will need a pair of virtual machines:

- The first one will be the machine where we deploy the firewall.
- The second one will be the machine from which we will administer the firewall.

### Request an Internet Access Delivery

The first step is to retrieve [your internet access information here](https://docs.cloud-temple.com/network/internet/quickstart#gestion-de-vos-connectivites-internet).  
You must have the following information:

- public prefix  
- interconnection prefix  
- any-cast gateway  
- IP range  
- local AS  
- Cloud Temple AS  
- keepalive timers and hold-time timer  
- route server addresses

### Network Interface Installation and Configuration

You can then deploy your pfSense VM:

1. __Install the firewall__ from the pfSense template in Console:
    - [(Deploy via Console)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Deploy via Terraform)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. __Configure the LAN and WAN interfaces__ of the firewall: the WAN interface must be in your internet VLAN, with its IP address assigned from the IP range provided by the CDS, along with the default gateway.
3. __Deploy the second management machine__.
4. __Configure the interface__ of the management VM: this machine must be on the same network as the one where the firewall's LAN interface was configured.

### Accessing the Firewall

Once both VMs are properly installed, the next step is to access the firewall to begin its configuration.

- Access the firewall's web interface from the management VM:

<img src={pfSenseWebui} />
- Default login credentials:
    - username: *admin*
    - password: *pfsense* (remember to change the default password)

<img src={pfSenseHomePage} />

### Firewall Configuration  
This step involves configuring the BGP neighbors on the firewall.

- First, make sure to allow BGP traffic over TCP port 179 in __'Firewall > Rules'__:

<img src={pfSenseBgpRule} />

- Go to __'Services > FRR BGP'__ to begin configuring your BGP session:

<img src={pfSenseFrrPackage} />

- Check the first two boxes and enter your local AS number and the timers provided by the CDS.

<img src={pfSenseGeneralConf} />

### BGP Neighbor Configuration

In the Neighbors section, click **+Add** to start creating your BGP neighbors.

- For each neighbor: enter its IP address in **'General Options > Name/address'**:

<img src={pfSenseNeighborConf} />

- Enter the remote AS (corresponding to the Cloud Temple AS number) in the Basic Options as follows:

<img src={bgpBasicOptions} />

- Finally, in the Advanced Options, perform the following:

<img src={ebgpConf} />

- Check the box that defines the neighbor type. In our case, it is a **route server**:

<img src={routeServerNeighbor} />

- Lastly, don't forget to save your changes by clicking **'Save'**:

<img src={neighborsOverview} />

### Checking the BGP session status with neighbors

In Status, you can view the state of the BGP session you just configured.

<img src={pfSenseBgpStatus} />

Ensure that the __BGP State__ is set to __established__.

### Announce your public prefix

To announce your public prefix, you can create /32 routes and redistribute them as static:

- In __*System > Routing > Static Routes*__ : create your static routes as /32, setting the Gateway to Null4-127.0.0.1.
- In __*Services > FRR package > BGP > Network Distribution*__ : enable ``redistribution`` locally by selecting IPV4 in ``Redistribute`` FRR static routes.