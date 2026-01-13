---
title: Configuration Réseau de la VM
---
import vpcCreateNetworkAdaptersVmModale from '../images/vpc_create_network_adapters_vm_modale.png'
import vpcCreateNetworkAdaptersVmSelectNetworks from '../images/vpc_create_network_adapters_vm_select_networks.png'
import vpcCreateNetworkAdaptersVm from '../images/vpc_create_network_adapters_vm.png'
import vpcDetailIpsPub from '../images/vpc_detail_ips_pub.png'
import vpcIpPubAssociate from '../images/vpc_ip_pub_associate.png'
import vpcMacAddressAssociateModale from '../images/vpc_mac_address_associate_modale.png'

# Configuration Réseau de la VM

Ce tutoriel vous guide pour connecter une machine virtuelle à un réseau VPC et lui attribuer une IP statique (privée), ainsi qu'une IP publique si nécessaire.

## Prérequis
*   Avoir un VPC et un réseau privé créés.
*   Avoir une VM déployée (IaaS Open Source ou VMware).

## 1. Attribution d'une IP Privée Statique

Vous pouvez fixer l'IP privée de votre VM de deux manières.

### Méthode A : Depuis la Machine Virtuelle (Recommandé)

Cette méthode vous permet de configurer le réseau et l'IP en une seule étape lors de la création de l'interface.

1.  Accédez à la vue de détail de votre machine virtuelle.
2.  Allez dans l'onglet **Adaptateurs réseaux**.
3.  Cliquez sur le bouton **Nouvel adaptateur réseau** pour ajouter une interface.
<img src={vpcCreateNetworkAdaptersVm} />

4.  Dans la modale, sélectionnez votre réseau VPC.
<img src={vpcCreateNetworkAdaptersVmModale} />

5.  Une fois le réseau sélectionné, choisissez une des IPs statiques disponibles.
<img src={vpcCreateNetworkAdaptersVmSelectNetworks} />

6.  Validez la création.

> **Note** : Vous pouvez éditer l'adaptateur réseau ultérieurement pour changer de réseau si nécessaire.

### Méthode B : Depuis la vue Réseaux Privés

Cette méthode est utile pour réserver une IP avant la création de la VM ou pour modifier une association existante.

1.  Accédez à la vue détaillée de votre VPC, onglet **Réseaux Privés**.
2.  Dépliez le pool d'adresses IPs du réseau concerné.
3.  Cliquez sur l'action "Associer à une adresse MAC" pour une IP disponible.
4.  Dans la modale, associez l'une des IPs statiques à une adresse MAC d'une VM.
<img src={vpcMacAddressAssociateModale} />

## 2. Association d'une IP Publique (Optionnel)

Si vous souhaitez rendre votre VM accessible depuis Internet.

1.  Depuis la vue détaillée de votre VPC, accédez à l'onglet **IPs publiques**.
<img src={vpcDetailIpsPub} />

2.  Cliquez sur le bouton **Associer une IP publique**.

3.  Dans la modale, sélectionnez le réseau privé et l'IP statique cible, puis validez l'association.
<img src={vpcIpPubAssociate} />

4.  Une fois l'association effectuée, vous pouvez utiliser cette adresse IP publique pour joindre votre VM.

## Configuration de l'OS Invité

**Important** : Pour que l'IP statique (privée) soit correctement attribuée, assurez-vous que l'interface réseau de votre système d'exploitation invité (OS) est configurée en mode **DHCP**. Le service DHCP du VPC se chargera d'assigner l'adresse réservée.
