---
title: Quickstart
---

Ce guide de démarrage vous présente comment demander la création d'une Appliance et comment enregistrer une nouvelle session et s'y connecter. 

## Prérequis

1. Avoir souscrit à l'offre Cloud Temple (souscription Appliance Bastion).
2. Les équipements à administrer doivent être accessibles depuis le réseau où est déployée l'Appliance Bastion.
3. Avoir les droits sur le module Bastion. 
4. Dans le cadre d'un déploiement de l'Appliance onpremise, les flux correspondants doivent être ouverts. 


## Les flux nécessaires au fonctionnement du produit Bastion

Plusieurs flux sont nécessaires pour le bon fonctionnement de l'Appliance Bastion.

### La passerelle bastion
| Source                   | Destination                                 | Protocole |
|--------------------------|---------------------------------------------|-----------|
| Appliance bastion client | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### Flux d'administration RDP

| Source                   | Destination                 | Protocole |
|--------------------------|-----------------------------|-----------|
| Appliance bastion client | Les instances à administrer | TCP/3389  |

### Flux d'administration SSH

| Source                   | Destination                 | Protocole |
|--------------------------|-----------------------------|-----------|
| Appliance bastion client | Les instances à administrer | TCP/22    |


## Demander la création d'une Appliance
Avant de pouvoir déployer une Appliance, il faut faire une demande de souscription à une Appliance via une demande au support.
Le support est accessible dans la console Shiva depuis l'icône de bouée sur la barre en haut à droite de la fenêtre.

![](images/shiva_support.png)


## Enregistrer un équipement

Pour accéder régulièrement à un équipement à administrer, il est plus adapté de créer une session, qui ne demandera que votre nom d’utilisateur et votre mot de passe à chaque connexion. 

Pour cela, rendez-vous dans l’onglet « Equipements » du menu « Bastion », puis, cliquez sur le bouton « Nouveau équipement ».

![](images/creer_session.png)


Renseignez ensuite les informations nécessaires à la création de votre équipement :

    - Nom de l'équipement ;
    - Description ;
    - Appliance associée ;
    - Type de protocole (SSH ou RDP) ;
    - Adresse IP de l’host ;
    - Configuration du clavier.

![](images/creer_session2.png)


Une notification vous indiquant la création de l'équipement devrait apparaître en haut à droite de la page. La session s’ajoute ensuite à la liste de vos équipements. 

Pour créer un nouvel équipement, vous pouvez également passer par l’onglet « Appliances » en cliquant sur la barre d’action de l’Appliance à laquelle vous souhaitez associer un équipement.

![](images/creer_session3.png)

## Se connecter à un équipement

Rendez-vous dans l’onglet « Equipements » de l’onglet « Bastion ». Cliquez sur la barre d’actions de l'équipement que vous souhaitez ouvrir, et cliquez sur le bouton « Ouvrir ».

![](images/ouvrir_session.png)

À chaque connexion à l'équipement, vous n’avez besoin de renseigner que vos informations d'authentification.

![](images/ouvrir_session2.png)

Après avoir saisi vos identifiants, une notification confirmant le début de la connexion à votre équipement apparaît et la console vers votre machine virtuelle s’ouvre.
