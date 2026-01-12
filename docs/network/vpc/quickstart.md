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

# Démarrage Rapide VPC

Ce guide vous accompagne dans la création de votre premier Virtual Private Cloud (VPC) et le déploiement de vos premiers réseaux privés.

## Prérequis

Actuellement, l'activation du service VPC nécessite d'avoir souscrit à une offre **IaaS Open Source**. (Cette condition sera levée ultérieurement).

## Étape 1 : Accéder à la Console

1.  Connectez-vous à la Console Cloud Temple.
2.  Dans le menu de navigation, sélectionnez **Network** puis **VPC**.

<img src={newTabNetwork} />

## Étape 2 : Créer un VPC

1.  Cliquez sur le bouton **Créer un VPC**.
<img src={vpcCreateButton} />

2.  Remplissez le formulaire guidé :
    *   **Nom du VPC** : Choisissez un nom unique pour identifier votre environnement.
    *   **Description** : (Optionnel) Ajoutez une description.
<img src={vpcCreateModal} />

3.  Validez la création.

> **Note** : Le provisionnement du VPC est entièrement automatisé et prend généralement moins d'une heure.

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
    *   **DHCP** : Activez ou désactivez le service DHCP natif.

<img src={vpcNewPrivateNetwork} />

## Étape 4 : Activer la Passerelle (Optionnel)

Pour donner accès Internet à vos réseaux privés via une passerelle sécurisée :

1. Cliquez sur le bouton d'activation de la passerelle.
<img src={vpcActivateGatewayButton} />

2. Confirmez l'activation dans la fenêtre modale.
<img src={vpcActivateGatewayModal} />

## Étape 5 : Connecter vos ressources

Vos réseaux privés sont désormais disponibles dans toutes les zones de disponibilité (AZ) de la région. Vous pouvez y connecter vos machines virtuelles IaaS Open Source ou vos serveurs directement depuis leurs interfaces de configuration respectives.
