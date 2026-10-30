---
title: Quickstart
---
import newTabNetwork from '@site/docs/network/vpc/images/new_tab_network.png'
import vpcCreateButton from '@site/docs/network/vpc/images/vpc_create_button.png'
import vpcCreateModal from '@site/docs/network/vpc/images/vpc_create_modale.png'
import vpcOverview from '@site/docs/network/vpc/images/vpc.png'
import vpcDetailsView from '@site/docs/network/vpc/images/vpc_details_view.png'
import vpcNewPrivateNetwork from '@site/docs/network/vpc/images/vpc_new_private_network.png'
import vpcActivateGatewayButton from '@site/docs/network/vpc/images/vpc_activate_gateway_button.png'
import vpcActivateGatewayModal from '@site/docs/network/vpc/images/vpc_activate_gatewat_modale.png'
import vpcOrders from '@site/docs/network/vpc/images/vpc_orders.png'
import vpcStaticIps from '@site/docs/network/vpc/images/vpc_static_ips.png'
import vpcNewStaticIps from '@site/docs/network/vpc/images/vpc_new_static_ips.png'
import vpcNewStaticIpsModale from '@site/docs/network/vpc/images/vpc_new_static_ips_modale.png'
import vpcStaticIpsAssociate from '@site/docs/network/vpc/images/vpc_static_ips_associate_png.png'

# VPC Quickstart

This guide walks you through creating your first Virtual Private Cloud (VPC) and deploying your first private networks.

## Prerequisites

Currently, activating the VPC service requires having subscribed to an **IaaS Open Source** product. (This requirement will be lifted in the future).

## Step 1: Access the Console

1. Log in to the Cloud Temple Console.
2. In the navigation menu, select **Network** then **VPC**.

<img src={newTabNetwork} />

## Step 2: Order a VPC

1. Click the **New VPC** button.
<img src={vpcCreateButton} />

2. Fill in the guided form:
    * **VPC Name**: Choose a unique name to identify your environment.
    * **Description**: (Optional) Add a description.
<img src={vpcCreateModal} />

3. Confirm the creation.

> **Note**: VPC provisioning is fully automated and generally takes less than one hour.

### Alternative: Via the Orders Menu

You can also initiate a VPC resource order directly from the **Marketplace** > **Orders** menu.

<img src={vpcOrders} />

<img src={vpcOverview} />

## Step 3: Create Private Networks

Once your VPC is active:

1. Access your VPC details by clicking on its name.
<img src={vpcDetailsView} />

2. Go to the **Private Networks** tab.
3. Click **Add a network**.
4. Configure your network:
    * **Name**: Name of the network segment (e.g. `backend`, `frontend`).
    * **CIDR**: IP address range (e.g. `192.168.1.0/24`).

<img src={vpcNewPrivateNetwork} />

## Step 4: Activate the Gateway and Order Public IPs

To enable Internet access and service exposure:

1. Check if the gateway is activated. If not, click the activation button.
<img src={vpcActivateGatewayButton} />

<img src={vpcActivateGatewayModal} />

1. Once the gateway is active, go to the **Public IPs** tab.
<img src={vpcStaticIps} />

> **Note**: The **Public IPs** list at the root of the VPC menu displays all public IPs (associated or not). The **Public IPs** tab in a VPC's details allows you to manage those associated with that VPC (requires an active gateway).

1. Click the button to order new IPs, or click the "Associate" action to associate one of the IP addresses from the list that is not yet associated.
<img src={vpcNewStaticIps} />

<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

1. Select the number of IPs you want to order, then confirm your order.

## Step 5: Connect Your Resources

Your private networks are now available in all availability zones (AZ) of the region. You can connect your IaaS Open Source virtual machines or your servers directly from their respective configuration interfaces.

To learn how to configure a VPC network on a virtual machine, see our tutorial: [Configure a Static IP and a VM](./tutorials/vm_configuration).
