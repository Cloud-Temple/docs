---
title: Netzwerkkonfiguration der VM
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '../images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '../images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Network Configuration of the VM

This tutorial guides you through connecting a virtual machine to a VPC network and assigning it a static (private) IP address, as well as a public IP address if required.

## Voraussetzungen
*   Ein VPC und ein privates Netzwerk erstellt haben.
*   Eine VM bereitgestellt haben (IaaS Open Source oder VMware).

## 1. Assigning a Static Private IP Address

You can set the private IP address of your VM in two ways.

### Methode A: Von der virtuellen Maschine aus (Empfohlen)

Diese Methode ermöglicht die Konfiguration von Netzwerk und IP in einem einzigen Schritt bei der Erstellung der Schnittstelle.

1.  Öffnen Sie die Detailansicht Ihrer virtuellen Maschine.
2.  Gehen Sie zum Tab **Netzwerkadapter**.
3.  Klicken Sie auf die Schaltfläche **Neuen Netzwerkadapter hinzufügen**, um eine Schnittstelle hinzuzufügen.
<img src={vpcCreateNetworkAdaptersVm} />

4.  Wählen Sie in der Modalauswahl Ihr VPC-Netzwerk aus.
<img src={vpcCreateNetworkAdaptersVmModale} />

5.  Nach der Auswahl des Netzwerks wählen Sie eine der verfügbaren statischen IPs aus.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6.  Bestätigen Sie die Erstellung.

> **Hinweis**: Sie können den Netzwerkadapter später bearbeiten, um das Netzwerk zu wechseln, falls erforderlich.

### Method B: From the Private Networks View

This method is useful for reserving an IP address before creating the VM or for modifying an existing association.

1.  Go to the detailed view of your VPC, tab **Private Networks**.
2.  Expand the IP address pool of the relevant network.
3.  Click the action "Associate with MAC address" for an available IP.
4.  In the modal, associate one of the static IPs with the MAC address of a VM.
<img src={vpcMacAddressAssociateModale} />

## 2. Associating a Public IP (Optional)

If you want to make your VM accessible from the internet.

1.  From the detailed view of your VPC, go to the **Public IPs** tab.  
<img src={vpcDetailIpsPub} />

2.  Click the **Associate a public IP** button.

3.  In the modal, select the target private network and static IP, then confirm the association.  
<img src={vpcIpPubAssociate} />

4.  Once the association is complete, you can use this public IP address to access your VM.

## Guest OS Configuration

**Important**: To ensure the static (private) IP address is correctly assigned, make sure the network interface of your guest operating system (OS) is configured in **DHCP** mode. The VPC's DHCP service will assign the reserved address.