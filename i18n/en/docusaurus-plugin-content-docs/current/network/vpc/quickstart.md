---
title: Quickstart
---
import newTabNetwork from './images/new_tab_network.png'
import vpcCreateButton from './images/vpc_create_button.png'
import vpcCreateModal from './images/vpc_create_modale.png'
import vpcOverview from './images/vpc.png'
import vpcDetailsView from './images/vpc_details_view.png'
import vpcNewPrivateNetwork from './images/vpc_new_private_network.png'
import vpcActivateGatewayButton from './images/vpc_activate_gateway_button.png'
import vpcActivateGatewayModal from './images/vpc_activate_gatewat_modale.png'
import vpcOrders from './images/vpc_orders.png'
import vpcStaticIps from './images/vpc_static_ips.png'
import vpcNewStaticIps from './images/vpc_new_static_ips.png'
import vpcNewStaticIpsModale from './images/vpc_new_static_ips_modale.png'
import vpcStaticIpsAssociate from './images/vpc_static_ips_associate_png.png'

# Quick Start VPC

This guide walks you through creating your first Virtual Private Cloud (VPC) and deploying your first private networks.

## Prerequisites

Currently, activating the VPC service requires subscribing to an **IaaS Open Source** offering. (This requirement will be removed in the future).

## Step 1: Access the Console

1.  Sign in to the Cloud Temple Console.
2.  In the navigation menu, select **Network** then **VPC**.

<img src={newTabNetwork} />

## Step 2: Create a VPC

1.  Click the **New VPC** button.
<img src={vpcCreateButton} />

2.  Fill out the guided form:
    *   **VPC Name**: Choose a unique name to identify your environment.
    *   **Description**: (Optional) Add a description.
<img src={vpcCreateModal} />

3.  Confirm the creation.

> **Note**: VPC provisioning is fully automated and typically takes less than one hour.

### Alternative: Via the Commands Tab

You can also initiate the VPC resources command directly from the **Commands** menu.

<img src={vpcOrders} />

<img src={vpcOverview} />

## Step 3: Create Private Networks

Once your VPC is active:

1.  Go to your VPC details by clicking on its name.
<img src={vpcDetailsView} />

2.  Navigate to the **Private Networks** tab.
3.  Click **Add a network**.
4.  Configure your network:
    *   **Name**: Name of the network segment (e.g., `backend`, `frontend`).
    *   **CIDR**: IP address range (e.g., `192.168.1.0/24`).

<img src={vpcNewPrivateNetwork} />

## Step 4: Activate the Gateway and Request Public IPs

To enable Internet access and expose services:

1.  Check whether the gateway is activated. If not, click the activation button.
<img src={vpcActivateGatewayButton} />
<img src={vpcActivateGatewayModal} />

2.  Once the gateway is active, go to the **Public IPs** tab.
<img src={vpcStaticIps} />

> **Note**: The **Public IPs** list at the root of the VPC menu displays all public IPs (assigned or unassigned). The **Public IPs** tab within a VPC's details allows you to manage only those IPs assigned to that specific VPC (requires the gateway to be active).

3.  Click the button to request new IPs, or click the "Assign" action to assign an IP from the list that is not yet assigned.
<img src={vpcNewStaticIps} />
<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

4.  Select the number of IPs you wish to request, then confirm your request.

## Step 5: Connect Your Resources

Your private networks are now available across all Availability Zones (AZs) in the region. You can connect your Open Source IaaS virtual machines or your servers directly from their respective configuration interfaces.

To learn how to set up a VPC network on a virtual machine, refer to our tutorial: [Configure a Static IP and a VM](./tutorials/vm_configuration).