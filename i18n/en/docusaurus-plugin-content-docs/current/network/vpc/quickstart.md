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

# VPC Quickstart

This guide walks you through creating your first Virtual Private Cloud (VPC) and deploying your first private networks.

## Prerequisites

Currently, activating the VPC service requires an **IaaS Open Source** subscription. (This condition will be lifted later).

## Step 1: Access the Console

1.  Log in to the Cloud Temple Console.
2.  In the navigation menu, select **Network** then **VPC**.

<img src={newTabNetwork} />

## Step 2: Create a VPC

1.  Click the **Create a VPC** button.
<img src={vpcCreateButton} />

2.  Fill in the guided form:
    *   **VPC Name**: Choose a unique name to identify your environment.
    *   **Description**: (Optional) Add a description.
<img src={vpcCreateModal} />

3.  Validate creation.

> **Note**: VPC provisioning is fully automated and typically takes less than an hour.

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

## Step 4: Activate Gateway (Optional)

To provide Internet access to your private networks via a secure gateway:

1. Click on the gateway activation button.
<img src={vpcActivateGatewayButton} />

2. Confirm activation in the modal window.
<img src={vpcActivateGatewayModal} />

## Step 5: Connect your resources

Your private networks are now available in all Availability Zones (AZ) of the region. You can connect your IaaS Open Source virtual machines or servers directly from their respective configuration interfaces.
