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

# Démarrage Rapide VPC

Ce guide vous accompagne dans la création de votre premier Virtual Private Cloud (VPC) et le déploiement de vos premiers réseaux privés.

## Prérequis

Actuellement, l'activation du service VPC nécessite d'avoir souscrit à une offre **IaaS Open Source**. (Cette condition sera levée ultérieurement).

## Étape 1 : Accéder à la Console

1.  Connectez-vous à la Console Cloud Temple.
2.  Dans le menu de navigation, sélectionnez **Network** puis **VPC**.

<img src={newTabNetwork} />

## Étape 2 : Commander un VPC

1.  Cliquez sur le bouton **Nouveau VPC**.
<img src={vpcCreateButton} />

2.  Remplissez le formulaire guidé :
    *   **Nom du VPC** : Choisissez un nom unique pour identifier votre environnement.
    *   **Description** : (Optionnel) Ajoutez une description.
<img src={vpcCreateModal} />

3.  Validez la création.

> **Note** : Le provisionnement du VPC est entièrement automatisé et prend généralement moins d'une heure.

### Alternative : Via l'onglet Commandes

Vous pouvez également initier la commande de ressources VPC directement depuis le menu **Commandes**.

<img src={vpcOrders} />

<img src={vpcOverview} />

## Étape 3 : Créer des Réseaux Privés (Private Networks)

Une fois votre VPC actif :

1.  Accédez au détail de votre VPC en cliquant sur son nom.
<img src={vpcDetailsView} />

2.  Allez dans l'onglet **Réseaux Privés**.
3.  Cliquez sur **Ajouter un réseau**.
4.  Configurez votre réseau :
    *   **Nom** : Nom du segment réseau (ex: `backend`, `frontend`).
    *   **CIDR** : Plage d'adresses IP (ex: `192.168.1.0/24`).

<img src={vpcNewPrivateNetwork} />

## Étape 4 : Activer la Passerelle et Commander des IPs Publiques

Pour permettre l'accès Internet et l'exposition de services :

1.  Vérifiez si la passerelle est activée. Sinon, cliquez sur le bouton d'activation.
<img src={vpcActivateGatewayButton} />
<img src={vpcActivateGatewayModal} />

2.  Une fois la passerelle active, allez dans l'onglet **IPs publiques**.
<img src={vpcStaticIps} />

> **Note** : La liste **IPs publiques** à la racine du menu VPC affiche toutes les IPs publiques (associées ou non). L'onglet **IPs publiques** dans le détail d'un VPC permet de gérer celles associées à ce VPC (nécessite la passerelle active).

3.  Cliquez sur le bouton pour commander de nouvelles IPs, ou cliquez sur l'action "Associer" pour associer une des adresses IPs de la liste qui ne l'est pas encore.
<img src={vpcNewStaticIps} />
<img src={vpcStaticIpsAssociate} />
<img src={vpcNewStaticIpsModale} />

4.  Sélectionnez le nombre d'IPs que vous souhaitez commander puis confirmez votre commande.

## Étape 5 : Connecter vos ressources

Vos réseaux privés sont désormais disponibles dans toutes les zones de disponibilité (AZ) de la région. Vous pouvez y connecter vos machines virtuelles IaaS Open Source ou vos serveurs directement depuis leurs interfaces de configuration respectives.

Pour apprendre à configurer un réseau VPC sur une machine virtuelle, consultez notre tutoriel : [Configurer une IP Statique et une VM](./tutorials/vm_configuration).
