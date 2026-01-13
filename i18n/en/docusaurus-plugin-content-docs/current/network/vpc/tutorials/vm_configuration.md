---
title: VM Network Configuration
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '../images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '../images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# VM Network Configuration

This tutorial guides you to connect a virtual machine to a VPC network and assign it a static IP (private), as well as a public IP if necessary.

## Prerequisites
*   Have a VPC and a private network created.
*   Have a VM deployed.

## 1. Assignment of a Private Static IP

You can fix the private IP of your VM in two ways.

### Method A: From the Virtual Machine (Recommended)

This method allows you to configure the network and IP in a single step when creating the interface.

1.  Access the details view of your virtual machine.
2.  Go to the **Network Adapters** tab.
3.  Click the **New network adapter** button to add an interface.
<img src={vpcCreateNetworkAdaptersVm} />

4.  In the modal, select your VPC network.
<img src={vpcCreateNetworkAdaptersVmModale} />

5.  Once the network is selected, choose one of the available static IPs.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6.  Validate creation.

> **Note**: You can edit the network adapter later to change the network if necessary.

### Method B: From the Private Networks View

This method is useful for reserving an IP before creating the VM or for modifying an existing association.

1.  Access the detailed view of your VPC, **Private Networks** tab.
2.  Expand the IP address pool of the relevant network.
3.  Click the "Associate with a MAC address" action for an available IP.
4.  In the modal, associate one of the static IPs with a MAC address of a VM.
<img src={vpcMacAddressAssociateModale} />

## 2. Association of a Public IP (Optional)

If you want to make your VM accessible from the Internet.

1.  From the detailed view of your VPC, go to the **Public IPs** tab.
<img src={vpcDetailIpsPub} />

2.  Click the **Associate a public IP** button.

3.  In the modal, select the private network and the target static IP, then validate the association.
<img src={vpcIpPubAssociate} />

4.  Once the association is done, you can use this public IP address to reach your VM.

## Guest OS Configuration

**Important**: To ensure the static IP (private) is correctly assigned, make sure the network interface of your guest operating system (OS) is configured in **DHCP** mode. The VPC DHCP service will assign the reserved address.
