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

# VPC Quickstart

This guide walks you through creating your first Virtual Private Cloud (VPC) and deploying your first private networks.

## Prerequisites

Currently, activating the VPC service requires an **IaaS Open Source** subscription. (This condition will be lifted later).

## Step 1: Access the Console

1.  Log in to the Cloud Temple Console.
2.  In the navigation menu, select **Network** then **VPC**.

<img src={newTabNetwork} />

## Step 2: Order a VPC

1.  Click the **New VPC** button.
<img src={vpcCreateButton} />

2.  Fill in the guided form:
    *   **VPC Name**: Choose a unique name to identify your environment.
    *   **Description**: (Optional) Add a description.
<img src={vpcCreateModal} />

3.  Validate creation.

> **Note**: VPC provisioning is fully automated and typically takes less than an hour.

### Alternative: Via the Orders tab

You can also initiate the ordering of VPC resources directly from the **Orders** menu.

<img src={vpcOrders} />

<img src={vpcOverview} />

## Step 3: Create Private Networks

Once your VPC is active:

1.  Access your VPC details by clicking on its name.
<img src={vpcDetailsView} />

2.  Go to the **Private Networks** tab.
3.  Click **Add a network**.
4.  Configure your network:
    *   **Name**: Network segment name (e.g., `backend`, `frontend`).
    *   **CIDR**: IP address range (e.g., `192.168.1.0/24`).

<img src={vpcNewPrivateNetwork} />

## Step 4: Activate Gateway and Order Public IPs

To enable Internet access and expose services:

1.  Check if the gateway is activated. If not, click the activation button.
<img src={vpcActivateGatewayButton} />
<img src={vpcActivateGatewayModal} />

2.  Once the gateway is active, go to the **Public IPs** tab.
<img src={vpcStaticIps} />

> **Note**: The **Public IPs** list at the root of the VPC menu displays all public IPs (associated or not). The **Public IPs** tab in a VPC detail allows managing those associated with this VPC (requires active gateway).

3.  Click the button to order new IPs, or click the "Associate" action to associate one of the IP addresses in the list that is not yet associated.
<img src={vpcNewStaticIps} />
<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

4.  Select the number of IPs you want to order then confirm your order.

## Step 5: Connect your resources

Your private networks are now available in all Availability Zones (AZ) of the region. You can connect your IaaS Open Source virtual machines or servers directly from their respective configuration interfaces.

To learn how to configure a VPC network on a virtual machine, check our tutorial: [Configure a Static IP and a VM](./tutorials/vm_configuration).
