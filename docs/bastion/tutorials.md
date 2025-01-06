---
title: Tutorials
---

Ces tutoriels vous aident à déployer et gérer un Bastion Cloud Temple depuis le portail Shiva. 


## Prérequis

1. Avoir souscrit à l'offre Cloud Temple (souscription Appliance Bastion).
2. Les équipements à administrer doivent être accessibles depuis le réseau où est déployée l'Appliance Bastion.
3. Avoir les droits sur le module Bastion.
4. Dans le cadre d'un déploiement de l'Appliance onpremise, les flux correspondants doivent être ouverts.

## Interface

Une fois connecté au portail web Shiva, rendez-vous dans l'onglet "Bastion" du menu gauche. 

![](images/sessions.png)

L’onglet « Equipements » vous permet de consulter la liste de vos equipements. Un équipement correspond à une configuration de
connexion via une Appliance Bastion. Pour chaque équipement, est indiqué son nom, ses tags, sa 
description, l’Appliance qui lui est associé, le type de connexion (SSH ou RDP), l’IP de l’host et enfin la configuration du clavier.

Vous pouvez filtrer la liste de vos équipements selon les tags qui leur sont assignés, et un moteur de recherche permet de chercher une session avec son nom. 

![](images/sessions2.png)

L’onglet « Appliances » vous donne la liste de vos Appliances Bastion. Pour chaque Appliance, le nom de l’Appliance et sa description sont précisés. 

Un moteur de recherche est disponible pour vous permettre de chercher une Appliance avec son nom.

![](images/appliances.png)

## Déployer une Appliance
Avant de pouvoir déployer une Appliance, il faut faire une demande de souscription à une Appliance via une demande au support.

## Ouvrir un flux vers un équipement
Dans l’onglet « Appliances », cliquez sur la barre d’action de l’Appliance que vous souhaitez ouvrir. Cliquez ensuite sur le bouton « Ouvrir ».

![](images/ouvrir_appliance.png)

Renseignez ensuite les informations nécessaires à la connexion :

    - Choix du protocole (SSH ou RDP) ;
    - Adresse IP de l’host à administrer ;
    - Informations d'identification ;
    - Configuration du clavier.

Cliquez ensuite sur « Connecter » pour ouvrir l’Appliance. La console de la machine virtuelle à administrer s’ouvre alors. 

## Enregistrer un équipement

Pour accéder régulièrement à un équipement à administrer, il est plus adapté de créer une configuration d'équipement, qui ne demandera que votre nom d’utilisateur et votre mot de passe à chaque connexion. 

Pour cela, rendez-vous dans l’onglet « Equipements » du menu « Bastion », puis, cliquez sur le bouton « Nouveau équipement ».

![](images/creer_session.png)


Renseignez ensuite les informations nécessaires à la création de votre équipement :

    - Nom de l'équipement ;
    - Description ;
    - Appliance associée ;
    - Type de protocole (SSH ou RDP) ;
    - Adresse IP de l’host ;
    - Langue du clavier.

![](images/creer_session2.png)


Une notification vous indiquant la création de votre configuration d'équipement devrait apparaître en haut à droite de la page. La configuration s’ajoute ensuite à la liste de vos équipements. 

Pour créer une nouvelle connexion, vous pouvez également passer par l’onglet « Appliances » en cliquant sur la barre d’action de l’Appliance à laquelle vous souhaitez associer une configuration d'équipement.

![](images/creer_session3.png)

## Se connecter à un équipement

Rendez-vous dans l’onglet « Equipements » de l’onglet « Bastion ». Cliquez sur la barre d’actions de l'équipement que vous souhaitez ouvrir, et cliquez sur le bouton « Ouvrir ».

![](images/ouvrir_session.png)

À chaque connexion à l'équipement, vous n’avez besoin de renseigner que vos informations d'authentification.

![](images/ouvrir_session2.png)

Après avoir saisi vos identifiants, une notification confirmant le début de la session apparaît et la console vers votre machine virtuelle s’ouvre.

## Modifier une configuration d'équipement

Rendez-vous dans l’onglet « Equipements » de la section « Bastion », cliquez sur la barre d’action de l'équipement que vous souhaitez modifier, et cliquez sur le bouton « Modifier ».

![](images/modifier_session.png)

Vous pouvez ensuite modifier le nom de l'équipement, sa description, l’Appliance associée, le protocole (SSH ou RDP), l’adresse IP de l’host ou la langue du clavier. 

![](images/modifier_session2.png)

## Supprimer une configuration d'équipement

Rendez-vous dans l’onglet « Equipements » de la section « Bastion », cliquez sur la barre d’action de l'équipement que vous souhaitez supprimer, et cliquez sur le bouton « Supprimer ».

![](images/supprimer_session.png)






