---
title: Nouveautés produits
sidebar_position: 999
---

# Nouveautés produits & évolutions

> Ce changelog liste uniquement les nouvelles fonctionnalités et évolutions significatives de la plateforme Cloud Temple.
> Les corrections de bugs sont volontairement exclues.

## v4.38.0 — 2026-04-20

### [Identité & Accès (IAM)](/console/iam/iam)
- Mise à jour de la liste des permissions : ajout des permissions `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_management`, `public_cloud_vm_instances_read` et `public_cloud_vm_instances_console_access`
- Mise à jour des descriptions des permissions pour faire apparaître le nom de l'offre en début de description

## v4.37.0 — 2026-04-02

### [Gestionnaire des coûts](/console/billing/concepts)
- Ajout du montant prévisionnel sur la page de consommation pour le graphique et la tendance
- Amélioration visuelle lorsqu'il y a une erreur ou trop peu de données sur la consommation du mois en cours

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Amélioration du formulaire pour déployer une machine virtuelle depuis un item du catalogue
- Ajout de la possibilité de changer le type de visualisation (grille ou tableau) depuis la page catalogue

## v4.36.0 — 2026-03-27

### [Commandes](/console/orders)
- Ajout de filtres et tris sur la liste des disques depuis les détails d'un Block Storage

### [Gestionnaire des coûts](/console/billing/concepts)
- Ajout de la page gestionnaire des coûts
- Possibilité de visualiser les coûts du mois en cours
- Possibilité de visualiser les coûts sur un interval de dates et de comparer les tendances

### [VPC](/network/vpc/vpc)
- Amélioration de l'interface sur le chargement des données dans les formulaires

### [Console](/console/console)
- Mise à jour des graphiques de métriques et consommation

## v4.35.4 — 2026-03-18

### [Support](/console/console)
- Ajout d'une solution de secours pour la création d'un ticket de support lorsque les websockets sont déconnectées

### [Console](/console/console)
- Amélioration de la reconnexion aux websockets

## v4.35.0 — 2026-03-11

### [LLMaaS](/llmaas/llmaas)
- Ajout de la possibilité de mettre à jour un hôte
- Affichage de la consommation groupé par type de tokens

### [Métriques](/console/metrics/concepts)
- Affichage de l'information des mises à jour d'un hôte

### [Réseau](/network/network_overview)
- Désactivation du bouton de suppression de propagation réseau lorsqu'aucune propagation n'est livrée

### [Commandes](/console/orders)
- Ajout de la commande de déprovision de réseau privé VPC
- Modifications sur la commande de déprovisionnement d'un volume Bare Metal, il est possible de commander la suppression depuis la liste des volumes
- Ajout de la commande de suppression de mapping volume Bare Metal
- Ajout de la commande de déprovision de VPC
- Blocage de la déprovision d'un datastore s'il est le dernier d'un datastore cluster

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Mise à jour du multi vmotion VMware pour permettre de déplacer les VMs d'un cluster à un autre

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Possibilité d'ajouter une limite de RAM sur une machine virtuelle

## v4.34.0 — 2026-02-18

### [Console](/console/console)
- Mise à jour majeure du moteur d'affichage de l'application
- Les menus VMware et OpenIaaS ne sont pas affichés lorsque seulement le module métrique est activé

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Lors d'un déplacement de machine virtuelle il n'est pas possible de sélectionner le même hôte de destination que l'hôte actuel de la machine virtuelle
- Ajout du bouton 'Nouveau catalogue' sur la page Catalogue VMware

### [Métriques](/console/metrics/concepts)
- Possibilité d'exporter en CSV depuis les pages Métriques VMware et OpenIaaS

## v4.33.0 — 2026-01-21

### [Commandes](/console/orders)
- Ajout de la commande de suppression d'une propagation réseau sur OpenIaaS

### [Métriques](/console/metrics/concepts)
- Ajout de filtres pour les pages de métriques VMWare et OpenIaaS

## v4.32.0 — 2026-01-14

### [Support](/console/console)
- Mise à jour de la modale de fermeture d'un ticket support

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- La suppression d'un volume BFS sur un Bare Metal est désormais bloquée, le volume sera supprimé à la suppresion du Bare Metal
- Lors de la commande d'un Bare Metal, le premier volume est maintenant renommé 'volume BFS'

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Lors de l'assignation d'une politique de sauvegarde sur un disque, il est maintenant proposé d'inventorier le disque s'il n'est pas reconnu par la solution de sauvegarde

## v4.31.0 — 2026-01-07

### [Commandes](/console/orders)
- Les snapshots liées aux politiques de sauvegardes sont désormais visibles

### [Object Storage S3](/storage/oss/oss)
- Affichage d'une card explicative depuis l'onglet MPU incomplets lorsque l'IP de la Console n'est pas autorisée empechant l'affichage de l'onglet

### [Marketplace](/marketplace/marketplace)
- Affichage de la card erreur lors de l'accès à une page de la marketplace n'existant pas

## v4.30.1 — 2025-12-16

### [Console](/console/console)
- Amélioration de l'affichage d'erreurs vide en affichant par défaut le status HTTP remonté

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc/vpc)
- Possibilité d'associer une IP statique à une adresse MAC personnalisée

### [LLMaaS](/llmaas/llmaas)
- Sur les métriques de consommation, filtrage des séries ayant des valeurs à 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc/vpc)
- Ajout de l’association d’une IP statique à une IP publique depuis la liste des IPs statiques

### [Stockage](/storage/oss/oss)
- Ajout des MPU incomplets depuis la page d'un bucket
- Possibilité de supprimer un MPU incomplet

## v4.28.0 — 2025-11-21

### [Commandes](/console/orders)
- Possibilité de commander un ajout de crédit LLMaaS pour le tenant
- Possibilité de commander un VPC
- Possibilité de commander un réseau privé dans un VPC
- Possibilité de commander une IP publique pour le produit VPC
- Possibilité d'activer la gateway pour un VPC
- Ajout de la possibilité de commander la suppression d’un tenant

### [LLMaaS](/llmaas/llmaas)
- Ajout d'un onglet Facturation sur la page LLMaaS pour les tenants avec le prépaiement activé
- Affichage du crédit restant pour les tenants en mode prépaiement, sur le tableau de bord et depuis l’onglet Facturation

### [Console](/console/console)
- Ajout de la possibilité d'afficher des messages d'information globaux visibles sur l’ensemble de l’application

### [VPC](/network/vpc/vpc)
- Intégration du produit VPC
- Ajout d'une page listant les VPC
- Ajout d'une page Détails d'un VPC
- Possibilité de gérer les réseaux privés, les IP publiques et la gateway d'un VPC
- Possibilité d'associer une IP statique d'un réseau privé VPC à un adaptateur réseau VMware ou OpenIaaS
- Possibilité d'associer une IP statique avec une IP publique d'un VPC

### [Réseau](/network/network_overview)
- Regroupement des pages Réseaux et Internet sous un produit unique : Backbone privé
- Ajout de la gestion de l'enregistrement PTR lors de la modification d’une IP publique
- Blocage du partage pour certains types de réseaux

### [Métriques](/console/metrics/concepts)
- Amélioration de l'affichage des tooltips sur les graphiques de métriques : il est désormais possible de cliquer sur un point pour figer la tooltip et consulter l'ensemble des données

## v4.27.0 — 2025-11-12

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Amélioration de la console des machines virtuelles. Meilleure gestion clavier, et ajout d'un presse-papier

### [PaaS OpenShift](/paas_openshift/paas_openshift)
- Amélioration de la console des machines virtuelles. Meilleure gestion clavier, et ajout d'un presse-papier

### [Commandes](/console/orders)
- Ajout d'un filtre par type de commande et par produit sur la liste des commandes

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Ajout d'une alerte sur le dashboard pour les VSnap de sauvegarde SPP ayant une occupation trop élevée

### [Marketplace](/marketplace/marketplace)
- Ajout de la possibilité d'afficher les details techniques d'une image

## v4.26.5 — 2025-11-04

### [Console](/console/console)
- Amélioration de la taille des graphiques du tableau de bord lors du redimensionnement de la fenêtre

## v4.26.3 — 2025-10-31

### [Métriques](/console/metrics/concepts)
- Modification du nom des exports de métriques présentées dans les graphiques

## v4.26.0 — 2025-10-22

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ajout des nouvelles clés extra_config (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blocage de la sélection d’un hostcluster sans host actif
- Lors de la création d'une machine virtuelle VMware le choix du Vcenter se fait désormais en fonction de la zone de disponibilité sélectionnée
- Lors d'un snapshot, l'option pour prendre la mémoire est désormais décochée par défaut

### [Console](/console/console)
- Ajout d'un bouton pour copier l'UUID du périmètre actuel depuis le profil utilisateur
- Refonte complète du Tableau de bord
- Ajout d'une reconnexion automatique au suivi activités lorsque la connexion est interrompue

### [Object Storage S3](/storage/oss/oss)
- Ajout de la possibilité d'exécuter une sauvegarde depuis l'onglet sauvegardes d'une machine virtuelle OpenIaaS

### [Réseau](/network/network_overview)
- Suppression de la contrainte empêchant la sélection de plusieurs types de réseaux sur la page des réseaux virtuels

### [PaaS OpenShift](/paas_openshift/paas_openshift)
- Ajout d'une page listant les clusters OpenShift
- Ajout d'une page details d'un cluster OpenShift

### [Métriques](/console/metrics/concepts)
- Refonte de la récupération des métriques VMware, l'URL de la page est désormais /iaas/metrics
- Ajout d'un onglet métriques d'infrastructure VMware sur le Calcul
- Ajout d'un onglet métriques d'infrastructure VMware sur le Stockage
- Ajout d'une page métrique pour OpenIaaS
- Ajout d'un onglet métriques d'infrastructure OpenIaaS sur le Calcul
- Ajout d'un onglet métriques d'infrastructure OpenIaaS sur le Stockage

### [Marketplace](/marketplace/marketplace)
- Ajout d’un filtre par UUID et possibilité de copier l’UUID d’un item

### [Support](/console/console)
- Lors de l’ajout d’un disque OpenIaaS, les stockages n'appartenant pas au Pool de la machine virtuelle sont désormais filtrés

### [Commandes](/console/orders)
- Mise à jour des formulaires de commande pour les ajouter aux différentes pages concernées (exemple nouveau Datastore depuis la page Stockage)

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace/marketplace)
- Mise à jour de l'utilisation de la configuration avancée et des propriétés OVF lors du déploiement d'une machine virtuelle VMware

## v4.24.0 — 2025-09-24

### [Marketplace](/marketplace/marketplace)
- Ajout du produit Marketplace
- Ajout d'une page listant les solutions disponibles dans le catalogue
- Ajout d'une page pour consulter les détails d'une solution
- Possibilité de déployer une image de machine virtuelle sur un environnement OpenIaaS ou VMware depuis les détails d'une solution
- Possibilité de contacter un partenaire pour une solution de services managés

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Possibilité de déployer une image de machine virtuelle depuis la liste des machines virtuelles

### [LLMaaS](/llmaas/llmaas)
- Possibilité de déployer une image de machine virtuelle depuis la liste des machines virtuelles

### [Réseau](/network/network_overview)
- Ajout d'une validation pour bloquer la suppression du partage d'un réseau si le réseau est propagé dans un autre Tenant

## v4.23.0 — 2025-09-12

### [LLMaaS](/llmaas/llmaas)
- Ajout du produit LLMaaS
- Ajout de la liste des modèles disponibles
- Ajout de la liste des clés API avec possibilité d’en créer
- Ajout de la consommation par modèles et par clés
- Ajout des détails d’un modèle
- Possibilité de tester un modèle

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ajout du support de 4 nouvelles valeurs extra-configs
- Ne pas afficher l’alerte HA sur les VMs concernées lorsque l’ISO local n’est pas monté

### [Réseau](/network/network_overview)
- Lors de l’ajout ou du redimensionnement d’un disque, indiquer si le SR en lien est utilisé pour une configuration de réplication

### [Object Storage S3](/storage/oss/oss)
- Mise à jour des informations concernant le cycle de vie d'un bucket

## v4.22.1 — 2025-09-10

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Modification des alertes concernant la configuration de format de disque choisie, lors d'un VMotion incluant le storage

## v4.21.0 — 2025-08-22

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Bug sur la mise en maintenance d’un hôte ESX
- Blocage de la suppression d’un cluster non vide ou avec des hôtes/datastores non en maintenance

### [Console](/console/console)
- Mise à jour de l'affichage lorsqu'aucune donnée n'est créée/provisionnée ou lorsqu'une erreur se produit lors de l'obtention d'informations.
- Ajout de la possibilité d’exporter en CSV la liste des réplicas OpenIaaS et des politiques associées

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ajout de la possibilité d’exporter en CSV la liste des réplicas VMware
- Amélioration du slider de sélection de la RAM sur certaines commandes
- Ajout de vérifications pour la haute disponibilité (HA)

### [Réseau](/network/network_overview)
- Modification de la sélection d'une adresse IPv4 avec une liste disponible

### [Support](/console/console)
- Ajout d'un badge dans le menu et la navbar lorsqu'un ticket de support nécessite une réponse

## v4.20.0 — 2025-07-29

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Retrait des informations de dernière exécution des politiques de réplication provoquant des lenteurs
- Gestion du TX checksumming pour les adaptateurs réseau

## v4.19.0 — 2025-07-24

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ajout d’un filtre réplication sur la liste des machines virtuelles
- Mise à jour de la modale de création d’une machine virtuelle

### [Commandes](/console/orders)
- Mise à jour de la commande d’IPs publiques avec la possibilité de commander un préfixe IPv6
- Mise à jour de l’affichage des commandes disponibles lorsqu’aucun environnement n’est provisionné

## v4.18.0 — 2025-07-15

### [Commandes](/console/orders)
- Ajout d'une page Réplication OpenIaaS avec la liste des réplicas et les politiques de réplication

### [Support](/console/console)
- Ajout d'un service sécurité pour chaque produit lors de la création d'un ticket support

### [Console](/console/console)
- Mise à jour de l'affichage lorsqu'aucune donnée n'est créée/provisionnée ou lorsqu'une erreur se produit lors de l'obtention d'informations.

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Possibilité d'exporter les machines virtuelles au format CSV.

## v4.17.0 — 2025-06-20

### [Commandes](/console/orders)
- Possibilité de commander l'association d'un volume existant à un Bare Metal existant depuis la page d'un Bare Metal, depuis la page d'un volume et depuis la page des commandes

### [Support](/console/console)
- Possibilité de supprimer un fichier sur un ticket support
- La description sur la satisfaction à la fermeture d'un ticket est maintenant optionnelle

## v4.16.0 — 2025-06-04

### [Support](/console/console)
- Refonte de la création d'un ticket support
- Interprétation du markdown sur un ticket support et mise à jour de l'ordre d'affichage des commentaires
- Ajout d'un feedback lors de la fermeture d'un ticket support
- Mise à jour de l'affichage des pictogrammes selon l'impact d'un incident global

### [Commandes](/console/orders)
- Ajout d'un message de warning en cas de manque d'espace disque sur un Block Storage (90% utilisé) et avertissement lors des commandes
- Possibilité de commander l'augmentation de taille d'un Block Storage OpenIaaS

### [Object Storage S3](/storage/oss/oss)
- Ajout de la description des rôles S3 lors de l'assignation sur un bucket

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ajout d'une option pour conserver la configuration d'une machine virtuelle lors d'une restauration en Production sur le cluster d'origine

### [Console](/console/console)
- Ajout des traductions anglaises sur la page des rapports de consommation du menu commande

## v4.15.1 — 2025-05-27

### [Réseau](/network/network_overview)
- Affichage d'une erreur lorsqu'un réseau est mal configuré sur un adaptateur réseau d'une machine virtuelle, empechant également le démarrage de la machine virtuelle

## v4.15.0 — 2025-05-13

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Possibilité de déplacer un disque OpenIaaS

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- Possibilité de copier l'UUID d'un disque, réseau virtuel ou snapshot
- Ajout d'une page sur les détails d'un volume Bare Metal

### [Console](/console/console)
- Ajustement des unités affichées sur les ressources infrastructures: GiB (Gibibyte) au lieu de GB (Gigabyte)

## v4.14.0 — 2025-04-28

### [Commandes](/console/orders)
- Possibilité de commander la suppression d'un Block Storage OpenIaaS
- Possibilité de commander l'ajout d'un Block Storage à un Pool OpenIaaS
- Possibilité de commander la suppression d'un Host OpenIaaS
- Possibilité de mettre un Host en maintenance
- Possibilité de commander l’ajout d’un Host à un pool OpenIaaS

### [Console](/console/console)
- Possibilité de choisir un Host au démarrage d’une machine virtuelle
- Mise à jour du rendu des documentations API

## v4.13.0 — 2025-04-08

### [Commandes](/console/orders)
- Ajout d'un bouton copier UUID sur les réseaux et catalogues OpenIaaS
- Refonte de l'affichage des choix de commandes
- Mise à jour de l'affichage pour commander le premier baremetal lorsqu’il n’y en a aucun
- Mise à jour de la commande d'un Bare Metal avec la selection de la propagation des réseaux sur les interfaces du Bare Metal
- Possibilité de propagager un VLAN sur un Bare Metal
- Possibilité d'ajouter un volume à un baremetal
- Possibilité de déprovisionner un volume d'un Bare Metal
- Possibilité de déprovisionner un Bare Metal

### [Réseau](/network/network_overview)
- Possibilité de visualiser les propagations sur un Bare Metal d'un réseau

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- Ajout de l'affichage des interfaces réseau et les réseaux qui y sont propagés sur un baremetal
- Ajouter les actions allumer, redémarrer et éteindre un baremetal

### [Console](/console/console)
- Ajout de statistiques et informations de contact sur la page Support

## v4.12.0 — 2025-03-25

### Étiquettes
- Mise à jour de l'affichage des disques d'un Block Storage OpenIaaS

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Afficher l'importation d'un XVA OpenIaaS sur la liste des téléchargements

### [Console](/console/console)
- Possibilité de supprimer une IP whitelist depuis la page accès

## v4.11.3 — 2025-03-21

### [Object Storage S3](/storage/oss/oss)
- Mise à jour du message d'erreur lors de l'accès aux fichiers d'un bucket Object Storage

## v4.11.1 — 2025-03-12

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Lorsque le champ label des hostCluster et datastoreCluster est modifié à vide, le nom technique sera appliqué par défaut

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- Lorsque le champ label des pools est modifié à vide, le nom technique sera appliqué par défaut

## v4.11.0 — 2025-03-10

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Permettre le déploiement d’une machine virtuelle via import XVA pour OpenIaaS

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- Mise à jour des types de réseaux autorisés lors de la création d’une AZ

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Affichage du nom de la machine virtuelle dans l’onglet de la console pour VMware

### [Commandes](/console/orders)
- Affichage du nom de la machine virtuelle dans l’onglet de la console pour OpenIaaS

## v4.10.0 — 2025-03-04

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ajout d’une alerte pour informer les utilisateurs en cas de doublon d’adresses MAC sur la liste des machines virtuelles et lors de la création ou modification d'adaptateurs réseaux

### [Console](/console/console)
- Possibilité de renommer et redimensionner un disque

## v4.9.1 — 2025-02-27

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ajout de restrictions sur les caractères autorisés dans les noms des machines virtuelles OpenIaaS
- Possibilité d'éditer un adaptateur réseau sur une machine virtuelle allumée

## v4.9.0 — 2025-02-21

### [Stockage](/storage/oss/oss)
- Bloquer la création d'une machine virtuelle si la place sur les Block Storage sélectionnés n'est pas suffisante

### [Console](/console/console)
- Rendre cliquables les noms dans les tableaux lorsqu'une page liée existe
- Améliorer l'ouverture des consoles pour éviter l'ouverture de plusieurs onglets si plusieurs fenêtres sont ouvertes sur la même page
- Afficher une erreur lors de l'ouverture d'une console si le navigateur n'autorise pas les redirections sur l'application

### [Métriques](/console/metrics/concepts)
- Afficher l'unité de la RAM sur la page santé des machines virtuelles

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Vider les adresses MAC par défaut lors de la création d'une machine virtuelle OpenIaaS

## v4.8.0 — 2025-02-14

### [Réseau](/network/network_overview)
- Mise à jour de la visualisation des propagations d'un réseau et ajout de propagations OpenIaaS
- Affichage des disques sur la page d'un Block Storage

### [Commandes](/console/orders)
- Possibilité d'ajouter des options Cloud Init à la création d'une machine virtuelle OpenIaaS
- Ajout des commandes de propagation réseau dans la page de toutes les commandes

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Possibilité de mettre à jour la configuration du boot firmware d'une machine virtuelle OpenIaaS
- Mise à jour des conditions sur le nombre de disques possibles à ajouter sur des controleurs SCSI Para Virtual en fonction de la version hardware de la machine virtuelle

### [Console](/console/console)
- Pouvoir cloner une machine virtuelle OpenIaaS

## v4.7.0 — 2025-02-03

### [Réseau](/network/network_overview)
- Amélioration de l'affichage des propagations des réseaux lorsque des demandes de suppression de propagations sont en cours

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- L'export en OVF est bloqué quand la machine virtuelle est chiffrée

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Modification de l'option de démarrage après restauration pour un environnement SecNumCloud lors de la restauration en mode clone ou prodution sur un host ou cluster alternatif

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Afficher les relations datastores clusters et host clusters dans les pages Calcul et Stockage

## v4.6.0 — 2025-01-30

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ajout de l'export en modèle d'une machine virtuelle

### [Console](/console/console)
- Retirer les caractères affichés lors de l'auto-complétion sur l'ajout d'observateurs à la création d'un ticket support
- Mise à jour de l'affichage du menu et des pages disponibles pour les offres VMware et OpenIaaS sur un nouvel environnement sans zones de disponibilité provisionnée

### [Console — Notifications](/console/console)
- Mise à jour de l'affichages des abonnements aux notification depuis la page profil

## v4.5.0 — 2025-01-17

### [Commandes](/console/orders)
- Ajout d'une commande nouvelle Zone de Disponibilité OpenIaaS
- Ajout de l'upload ISO sur les catalogues OpenIaaS
- Lier un cluster d'hyperviseur à un cluster de stockage

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- Ajout d'une page listant les Bare Metal
- Ajout d'une page listant les volumes Bare Metal
- Ajout d'une page avec les détails d'un Bare Metal
- Ajout de la possibilité d'ouvrir une console Bare Metal

### [Console](/console/console)
- Ajout de la description à la création et l'affichage des whitelists
- Possibilité de modifier la description d'une whitelist

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ajout du déplacement des machines virtuelles OpenIaaS

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Pouvoir choisir les disques et réseaux à la création d'une machine virtuelle OpenIaaS

## v4.4.0 — 2024-01-13

### [Console](/console/console)
- Modifications techniques apportées lors du processus d'authentification

## v4.3.0 — 2024-12-19

### [Object Storage S3](/storage/oss/oss)
- Pouvoir créer et réinitialiser la clé d'accès global depuis les comptes de stockage

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Proposer d'exporter uniquement les éléments filtrés sur l'export CSV des rapports de sauvegarde dans le sous-onglet machines virtuelles

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ajout des tags et l'IP de la machine virtuelle à l'export CSV des machines virtuelles

## v4.2.0 — 2024-12-10

### [Hébergement physique (Housing)](/housing/housing)
- Modification des informations affichées depuis la page périphériques

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Les éléments déjà présents dans 'Mon catalogue' restent désormais affichés dans 'Catalogue publique'
- Ajouter de redirections sur les composants cités dans un item du catalogue VMware
- Mise à jour de l'affichage de la RAM sur un cluster d'hyperviseurs
- Suppression de l'option de répliquer automatiquement les nouveaux disques entraînant des erreurs
- Ajout de validations sur la réplication d'une machine virtuelle
- Ajout de nouvelles extra config PCIPassthru depuis la configuration avancée d'une machine virtuelle pour la gestion GPU
- Possibilité d'ajouter un contrôleur PCI sur les machines virtuelles

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Retirer plusieurs options Backup non fonctionnelles sur des machines virtuelles en mode test
- Corriger les problèmes de redirection sur les graphiques du tableau de bord Backup

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ajout d'une page sauvegarde pour la partie sauvegardes OpenIaas listant les erreurs, les politiques, les rapports des sauvegardes et permettant la récupération de machines virtuelles supprimées
- Nouveau statut sur les hyperviseurs et datastores lorsqu'une demande de mise en maintenance est en cours
- Ajout d'une page pour lister les zones de disponibilité OpenIaas
- Ajouter une page stockage pour la partie OpenIaas

### [Console](/console/console)
- Ajouter de redirections vers la status page

## v4.1.1 — 2024-11-18

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Amélioration de l'édition de la mémoire, la conversion est effectuée vers l'unité avec la dernière valeur entière
- Lors d'une snapshot, le bouton pour sauvegarder la RAM est désactivé lorsque la machine virtuelle est éteinte

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Ajout du bouton d'export CSV dans l'onglet machines virtuelles de la page de rapports de sauvegarde

## v4.1.0 — 2024-11-13

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ajout des activités de snapshots dans l'onglet snapshot d'une VM
- Affichage de la taille réelle des machines virtuelles dans l'export CSV

### [Identité & Accès (IAM)](/console/iam/iam)
- Ajout d'une validation sur la précense de politiques de sauvegarde sur l'option de démarrage automatique

### [Commandes](/console/orders)
- Amélioration du message d'exécution d'une politique OpenIaas sur une machine virtuelle spécifique
- Ajout de la gestion d'ajout, de suppression et d'édition d'un datastore depuis la page des commandes
- Ajout de la possibilité de supprimer un Host

### [Console](/console/console)
- Possibilité d'envoyer un fichier lors d'un feedback

### [Bastion](/bastion/bastion)
- Ajout d'une validation sur le champ Host d'un équipement

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Sur les pages calcul et stockage, le filtre sur les zones de disponibilités s'applique également aux onglets de cluster
- Affichage des pourcentages d'utilisation sur les barres de consommations (CPU / RAM / Stockage)

## v4.0.3 — 2024-11-04

### [Console](/console/console)
- Améliorations et correctifs liés au nouveau design

## v4.0.2 — 2024-10-30

### [Console](/console/console)
- Améliorations et correctifs liés au nouveau design

## v4.0.1 — 2024-10-25

### [Console](/console/console)
- Améliorations et correctifs liés au nouveau design

## v4.0.0 — 2024-10-18

### [Console](/console/console)
- Nouveau design de la Console
- Refonte des pages infrastructure et sauvegarde

---

:::info Historique antérieur
L'historique complet des versions antérieures à v4.0 (v1.0 à v3.37.5, de février 2019 à octobre 2024) est disponible dans l'[historique Git](https://github.com/Cloud-Temple/docs) du projet.
:::
