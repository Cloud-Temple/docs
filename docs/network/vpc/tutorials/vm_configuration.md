---
title: Configurer une IP Statique et une VM
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcStaticIps from '../images/vpc_static_ips.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Configurer une IP Statique et une VM

Ce tutoriel vous guide pour connecter une machine virtuelle IaaS Open Source à un réseau VPC et lui attribuer une IP statique.

## Prérequis
*   Avoir un VPC et un réseau privé créés.
*   Avoir une VM IaaS Open Source déployée.

## Étape 1 : Créer l'adaptateur réseau sur la VM

1.  Accédez à la vue de détail de votre machine virtuelle.
2.  Allez dans l'onglet **Interfaces Réseau**.
3.  Cliquez sur le bouton pour ajouter une interface.
<img src={vpcCreateNetworkAdaptersVm} />

4.  Dans la modale, sélectionnez votre réseau VPC.
<img src={vpcCreateNetworkAdaptersVmModale} />
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

5.  Validez la création. Notez l'adresse MAC générée pour l'interface.

## Étape 2 : Créer une IP Statique dans le VPC

1.  Accédez à votre VPC, onglet **IPs Statiques**.
2.  Si nécessaire, créez un nouveau pool ou une nouvelle IP statique.
<img src={vpcStaticIps} />

## Étape 3 : Associer l'IP à l'adresse MAC

1.  Sélectionnez l'IP statique que vous souhaitez attribuer.
2.  Cliquez sur l'action d'association (ou "Associer une adresse MAC").
3.  Dans la modale, entrez ou sélectionnez l'adresse MAC de l'interface réseau créée à l'étape 1.
<img src={vpcMacAddressAssociateModale} />

4.  Validez.
