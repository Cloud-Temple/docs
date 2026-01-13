---
title: Configure a Static IP and a VM
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcStaticIps from '../images/vpc_static_ips.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Configure a Static IP and a VM

This tutorial guides you to connect an IaaS Open Source virtual machine to a VPC network and assign it a static IP.

## Prerequisites
*   Have a VPC and a private network created.
*   Have an IaaS Open Source VM deployed.

## Step 1: Create the Network Adapter on the VM

1.  Access the details view of your virtual machine.
2.  Go to the **Network Interfaces** tab.
3.  Click the button to add an interface.
<img src={vpcCreateNetworkAdaptersVm} />

4.  In the modal, select your VPC network.
<img src={vpcCreateNetworkAdaptersVmModale} />
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

5.  Validate creation. Note the MAC address generated for the interface.

## Step 2: Create a Static IP in the VPC

1.  Access your VPC, **Static IPs** tab.
2.  If necessary, create a new pool or a new static IP.
<img src={vpcStaticIps} />

## Step 3: Associate IP to MAC Address

1.  Select the static IP you want to assign.
2.  Click the associate action (or "Associate MAC address").
3.  In the modal, enter or select the MAC address of the network interface created in step 1.
<img src={vpcMacAddressAssociateModale} />

4.  Validate.
