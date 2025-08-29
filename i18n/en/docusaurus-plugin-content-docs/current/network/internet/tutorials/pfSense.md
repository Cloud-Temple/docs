---
title: Deploying an Open Source Firewall pfSense in the Trustworthy Cloud
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

This guide will help you deploy your __open source firewall pfSense__ in the Trustworthy Cloud with just a few clicks.

## Prerequisites

The prerequisites for this guide are as follows:

1. Having subscribed to the Cloud Temple offering: You must possess your organization, tenant, and access rights.
2. Holding permissions on the compute module.

This document outlines the steps to deploy a virtual firewall pfSense.

## Deploying an Open Source Firewall pfSense

[pfSense](https://www.pfsense.org) is an open source project based on FreeBSD that enables the setup of a virtual firewall.

A pfSense firewall is managed via a web interface, so you'll need a second machine with a graphical interface having an IP address within the same LAN network as the firewall to configure it.

You will require an ensemble of two VMs:

- The first VM will be where we deploy the firewall.
- The second VM will be used for administrating the firewall.

### Requesting Internet Access Setup

The first step is to retrieve [your internet access details here](https://docs.cloud-temple.com/network/internet/quickstart#managing-your-internet-connections). You will need the following information:

- Public prefix
- Interconnection prefix
- Anycast gateway
- IP range
- Local AS number
- Cloud Temple's AS number
- Keepalive timers and hold-time timer
- Route server addresses

### Network Setup and Configuration of Firewall Interfaces

You can then deploy your pfSense virtual appliance:

1. **Installation of the Firewall** from the pfSense template in Shiva:
    - [(Deployment via console)](../../../iaas_vmware/tutorials/deploy_vm_template)
    - [(Deployment via Terraform)](../../../iaas_vmware/tutorials/deploy_vm_terraform).
2. **Configuration of LAN and WAN interfaces on the firewall**: The WAN interface must be within your VLAN for the internet, its IP address will be taken from the IP range provided by the CDS, along with the default gateway (GW).
3. **Installation of the second management machine**.
4. **Configuration of the management VM's interface**: This machine should reside in the same network as where the LAN interface of the firewall has been configured.

### Accessing the Firewall

Once both VMs are properly installed, the next step involves accessing the firewall to begin its configuration.

- Access the firewall's web interface from the management VM:

<img src={pfSenseWebui} alt="pfSense Web UI" />
- Default login credentials:
    - Username: *admin*
    - Password: *pfsense* (Remember to change this default password)

<img src={pfSenseHomePage} alt="pfSense Homepage" />

### Firewall Configuration
This step involves configuring the BGP neighbors of the firewall.

- Initially, ensure that BGP traffic is allowed over TCP port 179 in __'Firewall > Rules'__:

<img src={pfSenseBgpRule} alt="pfSense BGP Rule" />

- Proceed to configure your BGP session by navigating to __'services > FRR BGP'__:

<img src={pfSenseFrrPackage} alt="pfSense FRR Package" />

- Check the two initial checkboxes and input your local AS number along with the times received from the CDS.

<img src={pfSenseGeneralConf} alt="pfSense General Configuration" />

### Configuring BGP Neighbors

In the Neighbors section, click on "+Add" to start creating your BGP neighbors.

- For each neighbor:
  - Enter its IP address in the "General Options > Name/address" field.
  
  <img src={pfSenseNeighborConf} alt="pfSense Neighbor Configuration" />

- Fill in the remote AS (matching the cloud temple's AS number) in basic options as follows:

  <img src={bgpBasicOptions} alt="BGP Basic Options" />

- In Advanced options, configure it like this:

  <img src={ebgpConf} alt="eBGP Configuration" />

- Check the box that defines your neighbor type. For our case, it's a "route server" neighbor:

  <img src={routeServerNeighbor} alt="Route Server Neighbor" />

- Don't forget to save your changes by clicking on "save":

  <img src={neighborsOverview} alt="Neighbors Overview" />

### Verification of BGP Session Status with Neighbors

In the Status section, you can view the state of the BGP session that you have just configured.

<img src={pfSenseBgpStatus} />

Ensure that the **BGP State** is set to **established**.

### Announcing Your Public Prefix

To announce your public prefix, you can create routes in /32 and perform static redistribution:

- In __System > Routing > Static Routes__:
  - Create your static routes in /32 by setting the Gateway to `0.0.0.0` (Null4).
- In __Services > FRR package > BGP > Network Distribution__:
  - Enable local static route redistribution in FRR by selecting IPV4 for ``Reditribute`` in the FRR static routes configuration.
