---
title: Changelog — Nouvelles fonctionnalités
sidebar_position: 999
---

# Changelog — Nouvelles fonctionnalités & évolutions

> Ce changelog liste uniquement les nouvelles fonctionnalités et évolutions significatives.
> Les corrections de bugs sont volontairement exclues.

## v4.37.0 — 2026-04-02

### Gestionnaire des coûts
- Ajout du montant prévisionnel sur la page de consommation pour le graphique et la tendance
- Amélioration visuelle lorsqu'il y a une erreur ou trop peu de données sur la consommation du mois en cours

### Compute / Machines virtuelles
- Amélioration du formulaire pour déployer une machine virtuelle depuis un item du catalogue
- Ajout de la possibilité de changer le type de visualisation (grille ou tableau) depuis la page catalogue

## v4.36.0 — 2026-03-27

### Commandes
- Ajout de filtres et tris sur la liste des disques depuis les détails d'un Block Storage

### Gestionnaire des coûts
- Ajout de la page gestionnaire des coûts
- Possibilité de visualiser les coûts du mois en cours
- Possibilité de visualiser les coûts sur un interval de dates et de comparer les tendances

### VPC
- Amélioration de l'interface sur le chargement des données dans les formulaires

### Général
- Mise à jour des graphiques de métriques et consommation

## v4.35.4 — 2026-03-18

### Support
- Ajout d'une solution de secours pour la création d'un ticket de support lorsque les websockets sont déconnectées

### Général
- Amélioration de la reconnexion aux websockets

## v4.35.0 — 2026-03-11

### Intelligence Artificielle
- Ajout de la possibilité de mettre à jour un hôte
- Affichage de la consommation groupé par type de tokens

### Métriques
- Affichage de l'information des mises à jour d'un hôte

### Réseau
- Désactivation du bouton de suppression de propagation réseau lorsqu'aucune propagation n'est livrée

### Commandes
- Ajout de la commande de déprovision de réseau privé VPC
- Modifications sur la commande de déprovisionnement d'un volume Bare Metal, il est possible de commander la suppression depuis la liste des volumes
- Ajout de la commande de suppression de mapping volume Bare Metal
- Ajout de la commande de déprovision de VPC
- Blocage de la déprovision d'un datastore s'il est le dernier d'un datastore cluster

### Infrastructure
- Mise à jour du multi vmotion VMware pour permettre de déplacer les VMs d'un cluster à un autre

### Compute / Machines virtuelles
- Possibilité d'ajouter une limite de RAM sur une machine virtuelle

## v4.34.0 — 2026-02-18

### Général
- Mise à jour majeure du moteur d'affichage de l'application
- Les menus VMware et OpenIaaS ne sont pas affichés lorsque seulement le module métrique est activé

### Compute / Machines virtuelles
- Lors d'un déplacement de machine virtuelle il n'est pas possible de sélectionner le même hôte de destination que l'hôte actuel de la machine virtuelle
- Ajout du bouton 'Nouveau catalogue' sur la page Catalogue VMware

### Métriques
- Possibilité d'exporter en CSV depuis les pages Métriques VMware et OpenIaaS

## v4.33.0 — 2026-01-21

### Commandes
- Ajout de la commande de suppression d'une propagation réseau sur OpenIaaS

### Métriques
- Ajout de filtres pour les pages de métriques VMWare et OpenIaaS

## v4.32.0 — 2026-01-14

### Support
- Mise à jour de la modale de fermeture d'un ticket support

### Bare Metal
- La suppression d'un volume BFS sur un Bare Metal est désormais bloquée, le volume sera supprimé à la suppresion du Bare Metal
- Lors de la commande d'un Bare Metal, le premier volume est maintenant renommé 'volume BFS'

### Sauvegarde
- Lors de l'assignation d'une politique de sauvegarde sur un disque, il est maintenant proposé d'inventorier le disque s'il n'est pas reconnu par la solution de sauvegarde

## v4.31.0 — 2026-01-07

### Commandes
- Les snapshots liées aux politiques de sauvegardes sont désormais visibles

### Object Storage
- Affichage d'une card explicative depuis l'onglet MPU incomplets lorsque l'IP de la Console n'est pas autorisée empechant l'affichage de l'onglet

### Marketplace
- Affichage de la card erreur lors de l'accès à une page de la marketplace n'existant pas

## v4.30.1 — 2025-12-16

### Général
- Amélioration de l'affichage d'erreurs vide en affichant par défaut le status HTTP remonté

## v4.30.0 — 2025-12-12

### VPC
- Possibilité d'associer une IP statique à une adresse MAC personnalisée

### Intelligence Artificielle
- Sur les métriques de consommation, filtrage des séries ayant des valeurs à 0

## v4.29.0 — 2025-12-09

### VPC
- Ajout de l’association d’une IP statique à une IP publique depuis la liste des IPs statiques

### Stockage
- Ajout des MPU incomplets depuis la page d'un bucket
- Possibilité de supprimer un MPU incomplet

## v4.28.0 — 2025-11-21

### Commandes
- Possibilité de commander un ajout de crédit LLMaaS pour le tenant
- Possibilité de commander un VPC
- Possibilité de commander un réseau privé dans un VPC
- Possibilité de commander une IP publique pour le produit VPC
- Possibilité d'activer la gateway pour un VPC
- Ajout de la possibilité de commander la suppression d’un tenant

### Intelligence Artificielle
- Ajout d'un onglet Facturation sur la page LLMaaS pour les tenants avec le prépaiement activé
- Affichage du crédit restant pour les tenants en mode prépaiement, sur le tableau de bord et depuis l’onglet Facturation

### Général
- Ajout de la possibilité d'afficher des messages d'information globaux visibles sur l’ensemble de l’application

### VPC
- Intégration du produit VPC
- Ajout d'une page listant les VPC
- Ajout d'une page Détails d'un VPC
- Possibilité de gérer les réseaux privés, les IP publiques et la gateway d'un VPC
- Possibilité d'associer une IP statique d'un réseau privé VPC à un adaptateur réseau VMware ou OpenIaaS
- Possibilité d'associer une IP statique avec une IP publique d'un VPC

### Réseau
- Regroupement des pages Réseaux et Internet sous un produit unique : Backbone privé
- Ajout de la gestion de l'enregistrement PTR lors de la modification d’une IP publique
- Blocage du partage pour certains types de réseaux

### Métriques
- Amélioration de l'affichage des tooltips sur les graphiques de métriques : il est désormais possible de cliquer sur un point pour figer la tooltip et consulter l'ensemble des données

## v4.27.0 — 2025-11-12

### Compute / Machines virtuelles
- Amélioration de la console des machines virtuelles. Meilleure gestion clavier, et ajout d'un presse-papier

### OpenShift
- Amélioration de la console des machines virtuelles. Meilleure gestion clavier, et ajout d'un presse-papier

### Commandes
- Ajout d'un filtre par type de commande et par produit sur la liste des commandes

### Sauvegarde
- Ajout d'une alerte sur le dashboard pour les VSnap de sauvegarde SPP ayant une occupation trop élevée

### Marketplace
- Ajout de la possibilité d'afficher les details techniques d'une image

## v4.26.5 — 2025-11-04

### Général
- Amélioration de la taille des graphiques du tableau de bord lors du redimensionnement de la fenêtre

## v4.26.3 — 2025-10-31

### Métriques
- Modification du nom des exports de métriques présentées dans les graphiques

## v4.26.0 — 2025-10-22

### Compute / Machines virtuelles
- Ajout des nouvelles clés extra_config (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blocage de la sélection d’un hostcluster sans host actif
- Lors de la création d\'une machine virtuelle VMware le choix du Vcenter se fait désormais en fonction de la zone de disponibilité sélectionnée
- Lors d'un snapshot, l'option pour prendre la mémoire est désormais décochée par défaut

### Général
- Ajout d'un bouton pour copier l'UUID du périmètre actuel depuis le profil utilisateur
- Refonte complète du Tableau de bord
- Ajout d'une reconnexion automatique au suivi activités lorsque la connexion est interrompue

### Object Storage
- Ajout de la possibilité d'exécuter une sauvegarde depuis l'onglet sauvegardes d'une machine virtuelle OpenIaaS

### Réseau
- Suppression de la contrainte empêchant la sélection de plusieurs types de réseaux sur la page des réseaux virtuels

### OpenShift
- Ajout d'une page listant les clusters OpenShift
- Ajout d'une page details d'un cluster OpenShift

### Métriques
- Refonte de la récupération des métriques VMware, l'URL de la page est désormais /iaas/metrics
- Ajout d'un onglet métriques d'infrastructure VMware sur le Calcul
- Ajout d'un onglet métriques d'infrastructure VMware sur le Stockage
- Ajout d'une page métrique pour OpenIaaS
- Ajout d'un onglet métriques d'infrastructure OpenIaaS sur le Calcul
- Ajout d'un onglet métriques d'infrastructure OpenIaaS sur le Stockage

### Marketplace
- Ajout d’un filtre par UUID et possibilité de copier l’UUID d’un item

### Support
- Lors de l’ajout d’un disque OpenIaaS, les stockages n'appartenant pas au Pool de la machine virtuelle sont désormais filtrés

### Commandes
- Mise à jour des formulaires de commande pour les ajouter aux différentes pages concernées (exemple nouveau Datastore depuis la page Stockage)

## v4.25.0 — 2025-10-16

### Marketplace
- Mise à jour de l'utilisation de la configuration avancée et des propriétés OVF lors du déploiement d'une machine virtuelle VMware

## v4.24.0 — 2025-09-24

### Marketplace
- Ajout du produit Marketplace
- Ajout d'une page listant les solutions disponibles dans le catalogue
- Ajout d'une page pour consulter les détails d'une solution
- Possibilité de déployer une image de machine virtuelle sur un environnement OpenIaaS ou VMware depuis les détails d'une solution
- Possibilité de contacter un partenaire pour une solution de services managés

### Compute / Machines virtuelles
- Possibilité de déployer une image de machine virtuelle depuis la liste des machines virtuelles

### Intelligence Artificielle
- Possibilité de déployer une image de machine virtuelle depuis la liste des machines virtuelles

### Réseau
- Ajout d'une validation pour bloquer la suppression du partage d'un réseau si le réseau est propagé dans un autre Tenant

## v4.23.0 — 2025-09-12

### Intelligence Artificielle
- Ajout du produit LLMaaS
- Ajout de la liste des modèles disponibles
- Ajout de la liste des clés API avec possibilité d’en créer
- Ajout de la consommation par modèles et par clés
- Ajout des détails d’un modèle
- Possibilité de tester un modèle

### Compute / Machines virtuelles
- Ajout du support de 4 nouvelles valeurs extra-configs
- Ne pas afficher l’alerte HA sur les VMs concernées lorsque l’ISO local n’est pas monté

### Réseau
- Lors de l’ajout ou du redimensionnement d’un disque, indiquer si le SR en lien est utilisé pour une configuration de réplication

### Object Storage
- Mise à jour des informations concernant le cycle de vie d'un bucket

## v4.22.1 — 2025-09-10

### Compute / Machines virtuelles
- Modification des alertes concernant la configuration de format de disque choisie, lors d'un VMotion incluant le storage

## v4.21.0 — 2025-08-22

### Infrastructure
- Bug sur la mise en maintenance d’un hôte ESX
- Blocage de la suppression d’un cluster non vide ou avec des hôtes/datastores non en maintenance

### Général
- Mise à jour de l'affichage lorsqu'aucune donnée n'est créée/provisionnée ou lorsqu'une erreur se produit lors de l'obtention d'informations.
- Ajout de la possibilité d’exporter en CSV la liste des réplicas OpenIaaS et des politiques associées

### Compute / Machines virtuelles
- Ajout de la possibilité d’exporter en CSV la liste des réplicas VMware
- Amélioration du slider de sélection de la RAM sur certaines commandes
- Ajout de vérifications pour la haute disponibilité (HA)

### Réseau
- Modification de la sélection d'une adresse IPv4 avec une liste disponible

### Support
- Ajout d'un badge dans le menu et la navbar lorsqu'un ticket de support nécessite une réponse

## v4.20.0 — 2025-07-29

### Compute / Machines virtuelles
- Retrait des informations de dernière exécution des politiques de réplication provoquant des lenteurs
- Gestion du TX checksumming pour les adaptateurs réseau

## v4.19.0 — 2025-07-24

### Compute / Machines virtuelles
- Ajout d’un filtre réplication sur la liste des machines virtuelles
- Mise à jour de la modale de création d’une machine virtuelle

### Commandes
- Mise à jour de la commande d’IPs publiques avec la possibilité de commander un préfixe IPv6
- Mise à jour de l’affichage des commandes disponibles lorsqu’aucun environnement n’est provisionné

## v4.18.0 — 2025-07-15

### Commandes
- Ajout d'une page Réplication OpenIaaS avec la liste des réplicas et les politiques de réplication

### Support
- Ajout d'un service sécurité pour chaque produit lors de la création d'un ticket support

### Général
- Mise à jour de l'affichage lorsqu'aucune donnée n'est créée/provisionnée ou lorsqu'une erreur se produit lors de l'obtention d'informations.

### Compute / Machines virtuelles
- Possibilité d'exporter les machines virtuelles au format CSV.

## v4.17.0 — 2025-06-20

### Commandes
- Possibilité de commander l'association d'un volume existant à un Bare Metal existant depuis la page d'un Bare Metal, depuis la page d'un volume et depuis la page des commandes

### Support
- Possibilité de supprimer un fichier sur un ticket support
- La description sur la satisfaction à la fermeture d'un ticket est maintenant optionnelle

## v4.16.0 — 2025-06-04

### Support
- Refonte de la création d'un ticket support
- Interprétation du markdown sur un ticket support et mise à jour de l'ordre d'affichage des commentaires
- Ajout d'un feedback lors de la fermeture d'un ticket support
- Mise à jour de l'affichage des pictogrammes selon l'impact d'un incident global

### Commandes
- Ajout d'un message de warning en cas de manque d'espace disque sur un Block Storage (90% utilisé) et avertissement lors des commandes
- Possibilité de commander l'augmentation de taille d'un Block Storage OpenIaaS

### Object Storage
- Ajout de la description des rôles S3 lors de l'assignation sur un bucket

### Compute / Machines virtuelles
- Ajout d'une option pour conserver la configuration d'une machine virtuelle lors d'une restauration en Production sur le cluster d'origine

### Général
- Ajout des traductions anglaises sur la page des rapports de consommation du menu commande

## v4.15.1 — 2025-05-27

### Réseau
- Affichage d'une erreur lorsqu'un réseau est mal configuré sur un adaptateur réseau d'une machine virtuelle, empechant également le démarrage de la machine virtuelle

## v4.15.0 — 2025-05-13

### Infrastructure
- Possibilité de déplacer un disque OpenIaaS

### Bare Metal
- Possibilité de copier l'UUID d'un disque, réseau virtuel ou snapshot
- Ajout d'une page sur les détails d'un volume Bare Metal

### Général
- Ajustement des unités affichées sur les ressources infrastructures: GiB (Gibibyte) au lieu de GB (Gigabyte)

## v4.14.0 — 2025-04-28

### Commandes
- Possibilité de commander la suppression d'un Block Storage OpenIaaS
- Possibilité de commander l'ajout d'un Block Storage à un Pool OpenIaaS
- Possibilité de commander la suppression d'un Host OpenIaaS
- Possibilité de mettre un Host en maintenance
- Possibilité de commander l’ajout d’un Host à un pool OpenIaaS

### Général
- Possibilité de choisir un Host au démarrage d’une machine virtuelle
- Mise à jour du rendu des documentations API

## v4.13.0 — 2025-04-08

### Commandes
- Ajout d'un bouton copier UUID sur les réseaux et catalogues OpenIaaS
- Refonte de l'affichage des choix de commandes
- Mise à jour de l'affichage pour commander le premier baremetal lorsqu’il n’y en a aucun
- Mise à jour de la commande d'un Bare Metal avec la selection de la propagation des réseaux sur les interfaces du Bare Metal
- Possibilité de propagager un VLAN sur un Bare Metal
- Possibilité d'ajouter un volume à un baremetal
- Possibilité de déprovisionner un volume d'un Bare Metal
- Possibilité de déprovisionner un Bare Metal

### Réseau
- Possibilité de visualiser les propagations sur un Bare Metal d'un réseau

### Bare Metal
- Ajout de l'affichage des interfaces réseau et les réseaux qui y sont propagés sur un baremetal
- Ajouter les actions allumer, redémarrer et éteindre un baremetal

### Général
- Ajout de statistiques et informations de contact sur la page Support

## v4.12.0 — 2025-03-25

### Étiquettes
- Mise à jour de l'affichage des disques d'un Block Storage OpenIaaS

### Infrastructure
- Afficher l'importation d'un XVA OpenIaaS sur la liste des téléchargements

### Général
- Possibilité de supprimer une IP whitelist depuis la page accès

## v4.11.3 — 2025-03-21

### Object Storage
- Mise à jour du message d'erreur lors de l'accès aux fichiers d'un bucket Object Storage

## v4.11.1 — 2025-03-12

### Compute / Machines virtuelles
- Lorsque le champ label des hostCluster et datastoreCluster est modifié à vide, le nom technique sera appliqué par défaut

### Bare Metal
- Lorsque le champ label des pools est modifié à vide, le nom technique sera appliqué par défaut

## v4.11.0 — 2025-03-10

### Infrastructure
- Permettre le déploiement d’une machine virtuelle via import XVA pour OpenIaaS

### Bare Metal
- Mise à jour des types de réseaux autorisés lors de la création d’une AZ

### Compute / Machines virtuelles
- Affichage du nom de la machine virtuelle dans l’onglet de la console pour VMware

### Commandes
- Affichage du nom de la machine virtuelle dans l’onglet de la console pour OpenIaaS

## v4.10.0 — 2025-03-04

### Infrastructure
- Ajout d’une alerte pour informer les utilisateurs en cas de doublon d’adresses MAC sur la liste des machines virtuelles et lors de la création ou modification d'adaptateurs réseaux

### Général
- Possibilité de renommer et redimensionner un disque

## v4.9.1 — 2025-02-27

### Compute / Machines virtuelles
- Ajout de restrictions sur les caractères autorisés dans les noms des machines virtuelles OpenIaaS
- Possibilité d'éditer un adaptateur réseau sur une machine virtuelle allumée

## v4.9.0 — 2025-02-21

### Stockage
- Bloquer la création d'une machine virtuelle si la place sur les Block Storage sélectionnés n'est pas suffisante

### Général
- Rendre cliquables les noms dans les tableaux lorsqu'une page liée existe
- Améliorer l'ouverture des consoles pour éviter l'ouverture de plusieurs onglets si plusieurs fenêtres sont ouvertes sur la même page
- Afficher une erreur lors de l'ouverture d'une console si le navigateur n'autorise pas les redirections sur l'application

### Métriques
- Afficher l'unité de la RAM sur la page santé des machines virtuelles

### Sauvegarde
- Vider les adresses MAC par défaut lors de la création d'une machine virtuelle OpenIaaS

## v4.8.0 — 2025-02-14

### Réseau
- Mise à jour de la visualisation des propagations d'un réseau et ajout de propagations OpenIaaS
- Affichage des disques sur la page d'un Block Storage

### Commandes
- Possibilité d'ajouter des options Cloud Init à la création d'une machine virtuelle OpenIaaS
- Ajout des commandes de propagation réseau dans la page de toutes les commandes

### Compute / Machines virtuelles
- Possibilité de mettre à jour la configuration du boot firmware d'une machine virtuelle OpenIaaS
- Mise à jour des conditions sur le nombre de disques possibles à ajouter sur des controleurs SCSI Para Virtual en fonction de la version hardware de la machine virtuelle

### Général
- Pouvoir cloner une machine virtuelle OpenIaaS

## v4.7.0 — 2025-02-03

### Réseau
- Amélioration de l'affichage des propagations des réseaux lorsque des demandes de suppression de propagations sont en cours

### Compute / Machines virtuelles
- L'export en OVF est bloqué quand la machine virtuelle est chiffrée

### Sauvegarde
- Modification de l'option de démarrage après restauration pour un environnement SecNumCloud lors de la restauration en mode clone ou prodution sur un host ou cluster alternatif

### Infrastructure
- Afficher les relations datastores clusters et host clusters dans les pages Calcul et Stockage

## v4.6.0 — 2025-01-30

### Compute / Machines virtuelles
- Ajout de l'export en modèle d'une machine virtuelle

### Général
- Retirer les caractères affichés lors de l'auto-complétion sur l'ajout d'observateurs à la création d'un ticket support
- Mise à jour de l'affichage du menu et des pages disponibles pour les offres VMware et OpenIaaS sur un nouvel environnement sans zones de disponibilité provisionnée

### Notifications
- Mise à jour de l'affichages des abonnements aux notification depuis la page profil

## v4.5.0 — 2025-01-17

### Commandes
- Ajout d'une commande nouvelle Zone de Disponibilité OpenIaaS
- Ajout de l'upload ISO sur les catalogues OpenIaaS
- Lier un cluster d'hyperviseur à un cluster de stockage

### Bare Metal
- Ajout d'une page listant les Bare Metal
- Ajout d'une page listant les volumes Bare Metal
- Ajout d'une page avec les détails d'un Bare Metal
- Ajout de la possibilité d'ouvrir une console Bare Metal

### Général
- Ajout de la description à la création et l'affichage des whitelists
- Possibilité de modifier la description d'une whitelist

### Compute / Machines virtuelles
- Ajout du déplacement des machines virtuelles OpenIaaS

### Infrastructure
- Pouvoir choisir les disques et réseaux à la création d'une machine virtuelle OpenIaaS

## v4.4.0 — 2024-01-13

### Général
- Modifications techniques apportées lors du processus d'authentification

## v4.3.0 — 2024-12-19

### Object Storage
- Pouvoir créer et réinitialiser la clé d'accès global depuis les comptes de stockage

### Sauvegarde
- Proposer d'exporter uniquement les éléments filtrés sur l'export CSV des rapports de sauvegarde dans le sous-onglet machines virtuelles

### Compute / Machines virtuelles
- Ajout des tags et l'IP de la machine virtuelle à l'export CSV des machines virtuelles

## v4.2.0 — 2024-12-10

### Hébergement physique
- Modification des informations affichées depuis la page périphériques

### Compute / Machines virtuelles
- Les éléments déjà présents dans 'Mon catalogue' restent désormais affichés dans 'Catalogue publique'
- Ajouter de redirections sur les composants cités dans un item du catalogue VMware
- Mise à jour de l'affichage de la RAM sur un cluster d'hyperviseurs
- Suppression de l'option de répliquer automatiquement les nouveaux disques entraînant des erreurs
- Ajout de validations sur la réplication d'une machine virtuelle
- Ajout de nouvelles extra config PCIPassthru depuis la configuration avancée d'une machine virtuelle pour la gestion GPU
- Possibilité d'ajouter un contrôleur PCI sur les machines virtuelles

### Sauvegarde
- Retirer plusieurs options Backup non fonctionnelles sur des machines virtuelles en mode test
- Corriger les problèmes de redirection sur les graphiques du tableau de bord Backup

### Infrastructure
- Ajout d'une page sauvegarde pour la partie sauvegardes OpenIaas listant les erreurs, les politiques, les rapports des sauvegardes et permettant la récupération de machines virtuelles supprimées
- Nouveau statut sur les hyperviseurs et datastores lorsqu'une demande de mise en maintenance est en cours
- Ajout d'une page pour lister les zones de disponibilité OpenIaas
- Ajouter une page stockage pour la partie OpenIaas

### Général
- Ajouter de redirections vers la status page

## v4.1.1 — 2024-11-18

### Compute / Machines virtuelles
- Amélioration de l'édition de la mémoire, la conversion est effectuée vers l'unité avec la dernière valeur entière
- Lors d'une snapshot, le bouton pour sauvegarder la RAM est désactivé lorsque la machine virtuelle est éteinte

### Sauvegarde
- Ajout du bouton d'export CSV dans l'onglet machines virtuelles de la page de rapports de sauvegarde

## v4.1.0 — 2024-11-13

### Compute / Machines virtuelles
- Ajout des activités de snapshots dans l'onglet snapshot d'une VM
- Affichage de la taille réelle des machines virtuelles dans l'export CSV

### Identité & Accès
- Ajout d'une validation sur la précense de politiques de sauvegarde sur l'option de démarrage automatique

### Commandes
- Amélioration du message d'exécution d'une politique OpenIaas sur une machine virtuelle spécifique
- Ajout de la gestion d'ajout, de suppression et d'édition d'un datastore depuis la page des commandes
- Ajout de la possibilité de supprimer un Host

### Général
- Possibilité d'envoyer un fichier lors d'un feedback

### Bastion
- Ajout d'une validation sur le champ Host d'un équipement

### Infrastructure
- Sur les pages calcul et stockage, le filtre sur les zones de disponibilités s'applique également aux onglets de cluster
- Affichage des pourcentages d'utilisation sur les barres de consommations (CPU / RAM / Stockage)

## v4.0.3 — 2024-11-04

### Général
- Améliorations et correctifs liés au nouveau design

## v4.0.2 — 2024-10-30

### Général
- Améliorations et correctifs liés au nouveau design

## v4.0.1 — 2024-10-25

### Général
- Améliorations et correctifs liés au nouveau design

## v4.0.0 — 2024-10-18

### Général
- Nouveau design de la Console
- Refonte des pages infrastructure et sauvegarde

## v3.37.5 — 2024-10-02

### Commandes
- Modification du message d'avertissement lors de la demande de suppression d'un cluster

### Identité & Accès
- Suppression des boutons "Selectionner mes permissions" et "Tout déselectionner" lors de l'édition d'un propriétaire du tenant

## v3.37.4 — 2024-09-30

### Commandes
- Ajout de confirmation par nom lors de la demande de suppression de ressources infrastructure

### Identité & Accès
- Les modifications des permissions d'un propriétaire du tenant est désactivé

## v3.37.2 — 2024-09-16

### Identité & Accès
- Amélioration des messages concernant le fonctionnement des propriétaires d'un tenant

### Général
- Ajout d'une redirection de la route /support vers /administration/support afin de corriger les redirections des tickets support depuis un mail

## v3.37.0 — 2024-09-02

### Réseau
- Possibilité de commander des IPs publiques depuis la page internet du menu réseau

### Infrastructure
- Ajout d'un avertissement lors de la mise en maintenance d'un datastore s'il contient des bibliothèques de contenu

### Identité & Accès
- Affichage des propriétaire d'un tenant
- Possibilité pour un propriétaire de déclarer un utilisateur comme également propriétaire du tenant

### Compute / Machines virtuelles
- Ajout d'un avertissement lors de la suppression d'un iso d'une bibliothèque de contenu  lorsqu'il est monté dans une machine virtuelle

## v3.36.0 — 2024-07-24

### Commandes
- Possibilité de commander le provisionnement d'un cluster d'hyperviseur
- Possibilité de commander la suppression d'un cluster d'hyperviseur
- Possibilité de commander le provisionnement d'un cluster de stockage
- Possibilité de commander la suppression d'un cluster de stockage

### Général
- Ajout d'une page listant les IPs publiques et les subnets autorisés à accéder à la console (nouvelle permission nécessaire)
- Possibilité d'ajouter une IPs à la liste autorisée à accéder à la console (nouvelle permission nécessaire)

## v3.35.2 — 2024-07-23

### Sauvegarde
- Ajout de vérifications et messages lors de la restauration d'une sauvegarde

## v3.35.0 — 2024-07-15

### Commandes
- Nouvelle page permettant d'afficher le rapport des consommations Cloud sur des intervalles de dates données
- Les 2 datastores par défaut ne peuvent pas être de type MASS à la création d'une AZ
- Ajout des commandes de calcul sur le formulaire de la page listant les commandes

### Bastion
- Ajout d'une permission spécifique pour l'accès à la console d'une appliance

### Réseau
- Mise à jour des types de networks autorisés à être propagés
- Possibilité de passer plusieurs networks sur la même actions de création de réseaux
- Ajout d'une colonne indiquant la propagation d'un réseau
- Possibilité de réactiver un réseaux supprimé

### Compute / Machines virtuelles
- Possibilité d'éditer la description d'une snapshot
- Ajout d'un champ pour les fichiers de configuration lors du déplacement d'une machine virtuelle

## v3.34.0 — 2024-06-25

### Général
- Mise à jour de la récupération et affichage des incidents généralisés ou liés au tenant

## v3.33.0 — 2024-06-06

### Compute / Machines virtuelles
- Possibilité d'ajouter et supprimer des vApp properties depuis les options avancées d'une machine virtuelle
- La recherche sur les tasks Vmware est maintenant également appliquée à la colonne "cible"

### Stockage
- Possibilité de générer une URL afin de partager un fichier depuis la page d'un bucket

### Général
- La page des incidents terminés affiche désormais les incidents les plus récents en premier

### Sauvegarde
- Ajout de colonnes dernière execution et prochaine execution sur les jobs de sauvegardes
- Ajout d'une validation empechant l'assignation de politique en statut HELD
- Possibilité d'attribuer un nouveau nom à la restauration d'une sauvegarde de machine virtuelle

## v3.32.0 — 2024-05-24

### Commandes
- Possibilité de commander le provisionnement d'une nouvelle AZ
- Ajout d'une limitation à 20 réseaux maximum par propagation
- Ajout d'une redirection sur les bulles d'informations indiquant qu'une commande est deja en cours

### Réseau
- Ajout d'une validation sur le nom lors de la création d'un nouveau réseau virtuel

### Compute / Machines virtuelles
- Possibilité d'ajouter une clé extra config "disk.EnableUUID" depuis les options avancées d'une machine virtuelle
- Possibilité de modifier un contrôleur SCSI sur une machine virtuelle éteinte
- Possibilité de renommer un élément du catalogue de modèle local
- Possibilité de modifier le contrôleur d'un disque virtuel

### Général
- Gestion de l'affichage des pages VMware lorsqu'aucun environnement n'est provisionné

### Stockage
- Affichage des intervalles d'IPs autorisés sur un bucket en accès privé ou personnalisé
- Possibilité de synchroniser les intervalles d'IPs autorisés sur un bucket avec les intervalles d'IPs internet publiques du tenant

## v3.31.0 — 2024-04-16

### Général
- Ajout des incidents avec le statut "investigation" ou "identifié" à la liste des incidents ouverts

### Compute / Machines virtuelles
- Ajout de l'option "provisionnement fin" lors d'une migration de stockage d'une machine virtuelle

### Notifications
- Initialisation du nouveau module notification
- Possibilité de lister et s'abonner à des sujets depuis la page profil

### Stockage
- Ajout du type d'accès lors de la création d'un bucket
- Possibilité de modifier l'accès d'un bucket depuis les paramètres du bucket

## v3.30.0 — 2024-04-04

### Général
- Ajout de l'affichage des incidents ouverts depuis la barre de navigation
- Ajout d'une page de tous les incidents ouverts et terminées

### Compute / Machines virtuelles
- Ajout d'une validation sur les caractères autorisés dans le nom des fichiers envoyés lors de l'upload dans un catalogue

### Stockage
- Désactivation temporaire de la possibilité d'upload dans un bucket depuis l'application

## v3.29.0 — 2024-03-27

### Commandes
- Mise à jour du formulaire pour la demande d'ajout de datastore et l'augmentation de la taille d'un datastore

### Réseau
- Affichage du nombre d'adresses disponnibles pour chaque préfix depuis la page Internet

### Infrastructure
- Mise à jour et explication du fonctionnement des règles affinité/anti-affinité sur un cluster de calcul

### Compute / Machines virtuelles
- Mise à jour des options par défaut lors de la prise de snapshot sur une machine virtuelle
- Suppression de la recherche provoquant des erreurs et ralentissements lors de l'exploration d'un datastore

## v3.28.0 — 2024-03-21

### Compute / Machines virtuelles
- Possibilité de choisir un contrôleur NVME lors de la création d'un disque
- Possibilité d'activer ou désactiver les options vApp depuis les options avancées d'une machine virtuelle
- Mise à jour de l'affichage des types de disques disponibles lors de la création

### Réseau
- Refonte du menu IPs publiques en un menu Internet

## v3.27.0 — 2024-03-08

### Compute / Machines virtuelles
- Ajout d'alertes concernant les modes de disques non pris en compte lors de la sauvegarde

## v3.26.0 — 2024-03-06

### OpenShift
- Nouveau module supportant le produit Openshift

## v3.25.0 — 2024-03-05

### Compute / Machines virtuelles
- Mise à jour de l'affichage des modes de disques disponibles lors de la création

## v3.24.0 — 2024-03-04

### Général
- Lors de certaines actions sur certaines ressource, il est désormais possible d'accéder cette ressource depuis la notification de succés
- Les tokens utilisés sur les swaggers sont désormais automatiquement renouvelés, il n'est plus necessaire de raffraichir la page

### Compute / Machines virtuelles
- Possibilité d'ajouter des contrôleurs NVME sur une machine virtuelle

### Infrastructure
- Possibilité de faire une mise à jour de configuration sur un ESX (mise à jour n'ayant pas d'impact sur la version du build)

### Réseau
- Possibilité de demander la suppression d'une propagation d'un réseau virtuel

### Sauvegarde
- Possibilité de supprimer une politique de sauvegarde sur une machine virtuelle eteinte, même lorsque cette politique est la dernière assignée

### Stockage
- Possibilité d'explorer et télécharger des fichiers dans un bucket

## v3.23.0 — 2024-02-15

### Stockage
- Ajout des menus Stockage et Stockage Object
- Ajout d'une page listant et permettant des actions sur les buckets et comptes de stockage
- Ajout d'une page sur les details d'un bucket listant la configuration et les comptes de stockage associés

## v3.22.0 — 2024-02-14

### Activités
- Optimisation de la récupération des activités avec une pagination sur les appels API

## v3.21.0 — 2024-02-05

### Général
- Amélioration des messages d'erreurs pas assez explicites

### Compute / Machines virtuelles
- Possibilité de choisir un stockage différent par disque lors de l'ajout de plusieurs disques à la fois

### Commandes
- Gestion de l'affichage des actions pour réaliser des commandes disponibles uniquement en environnement SNC

## v3.20.0 — 2024-01-31

### Activités
- Depuis la page des logs, l'affichage des activités est désormais mis à jour en direct
- Depuis la page des logs, la barre de progression est désormais affichée sur les activités en cours

### Compute / Machines virtuelles
- Possibilité d'exporter une machine virtuelle au format OVF vers un catalogue local
- Possibilité de réserver de la RAM sur une machine virtuelle

## v3.19.0 — 2024-01-10

### Compute / Machines virtuelles
- Les datastores et hosts en cours de provisionnement sont désormais bloqués lors des différentes sélections
- Ajout de l'option virtualisation matérielle et possibilité de le modifier

### Général
- Ajout d'options lors de l'exportation csv

### Activités
- Ajout d'un filtre auteur sur la page des logs

### Commandes
- Ajout d'une page pour les détails d'une commande
- Possibilité de visualiser et ajouter des commentaires lorsqu'un ticket est lié à une commande
- Possibilité de visualiser la propagation d'un réseau actif de type VLAN
- Possibilité de propager un réseau actif de type VLAN
- Possibilité de propager un réseau dès sa création

### Infrastructure
- Suppression de la page infrastructure dvswitch remplacée par un tableau de réseaux dans la page d'un hostCluster
- Affichage des alarmes pour les hosts et vcenters

## v3.18.1 — 2023-12-15

### Commandes
- Le tri par défaut sur la page des commandes a été remplacé par la date de la dernière mise à jour
- Ajout d'une limitation sur la taille minimum lors d'une demande d'augmentation de datastore

## v3.18.0 — 2023-12-15

### Identité & Accès
- Mise à jour des noms de certaines permissions et création de nouvelles permissions
- Regroupement de l\'affichage des permissions par produits

### Hébergement physique
- Mise à jour des appels API Hosting vers la nouvelles API Colocation

### Réseau
- Mise à jour des appels API Hosting vers la nouvelles API Réseaux

### Commandes
- Ajout d'une page listant les commandes
- Possibilité de commander de l'ajout de mémoire sur un host cluster
- Possibilité de commander un nouvel host sur un host cluster
- Possibilité de commander l'ajout de capacité de stockage sur un datastore
- Possibilité de commander un nouveau datastore sur un datastore cluster
- Possibilité de commander le déprovisionnement d'un datastore

### Sauvegarde
- Ajout d'un filtre par statut sur les sessions d'un job

### Général
- Les interventions terminées sont désormais triées par défaut du plus récent au plus vieux
- Possibilité de choisir son tenant favoris qui sera utilisé par défaut lors de la connexion à l'application sans direct URL

## v3.17.4 — 2023-11-07

### Compute / Machines virtuelles
- Ajout d'informations dans la popup de confirmation de suppression d'un disque

## v3.17.2 — 2023-10-16

### Métriques
- Ajout du nom du vCenter dans la route pour la santé d'une machine virtuelle

## v3.17.0 — 2023-10-10

### Compute / Machines virtuelles
- Ajout de l'option "auto-connexion" à la création d'un adaptateur réseau

### Métriques
- Mise à jour de la page de santé des machines virtuelles

### Général
- Les interventions terminées sont désormais triées par défaut du plus récent au plus vieux

### Réseau
- Ajout d'une page concernant les réseaux virtuels et la possibilité de les partager entre tenants de l'organisation

## v3.16.2 — 2023-09-11

### Général
- Mises à jour de certains menus dans la barre latérale

## v3.16.1 — 2023-09-11

### Bastion
- La description est maintenant optionnelle sur un équipement

## v3.16 — 2023-09-11

### Général
- Mise à jour du menu latéral
- Ajout d'une page profil utilisateur
- Ajout d'une documentation concernant la confidentialité

### Bastion
- Intégration de la nouvelle version du module Bastion

## v3.15 — 2023-08-30

### Compute / Machines virtuelles
- Ajout de la liste des proprétés vApp d'une machine virtuelle depuis les options avancées
- Optimisation de la création d'un disque en remplissant les champs par défaut
- Optimisation de la création d'une machine virtuelle en remplissant certains champs par défaut

### Sauvegarde
- Ajout d'un suivi des activités liées aux jobs de sauvegarde

## v3.14 — 2023-08-02

### Général
- Tri par défaut de la liste des hosts et datastores par ordre alphabétique
- Appuyer sur "Entrée" au niveau d'un formulaire ne lance plus le rechargement de la page
- Amélioration des modals à étapes multiples

### Compute / Machines virtuelles
- Amélioration de l'affichage du résumé à la création de disques
- Ajout du choix des adaptateurs réseau lors du clone d'une machine virtuelle
- Lors de la création d'une machine virtuelle, les champs ne se mettent plus en erreur par défaut après avoir ajouté un disque, un contrôleur ou un adaptateur réseaux
- Modification du champ CPU à la création d'une machine virtuelle n'étant pas exploitable lorsqu'un trop gros nombre de valeurs étaient disponibles

## v3.13 — 2023-07-18

### Compute / Machines virtuelles
- Ajout de la taille des fichiers présents dans le catalogue local

### Général
- La liste des demandes de support est désormais accessible depuis la bouée située dans la navbar
- Les notes de mises à jour par modules sont désormais disponible depuis la page des swaggers

### Métriques
- Le filtre date de la page santé des machines virtuelles prend désormais en compte les heures et minutes

### Activités
- Il est désormais possibe de lister les logs en lecture, le filtre par défaut n'affiche que les logs ecriture

## v3.12.1 — 2023-06-23

### Général
- Amélioration de l'affichage des interventions

## v3.12 — 2023-06-21

### Général
- Ajout de l'affichage des interventions en cours, planifiées et terminées

## v3.11.3 — 2023-06-19

### Compute / Machines virtuelles
- Affichage d'un message d'erreur lorsqu'un fichier dépassant la limite autorisée est ajouté lors de la publication dans un catalogue

## v3.11 — 2023-06-12

### Général
- Possibilité d'ajouter des observateurs supplémentaires à la création d'un ticket support

### Métriques
- Ajout de l'historique des données de santé d'une machine virtuelle
- Ajout d'une légende sur les colonnes de la page santé des machines virtuelles

### Sauvegarde
- Ajout du nom du vcenter devant les clusters lors de la restauration d'une machine virtuelle
- Ajout d'un bandeau d'alerte sur une machine virtuelle lorsqu'elle n'est pas inventoriée sur SPP
- Possibilité de lancer l'inventaire SPP depuis les onglets politique et sauvegardes d'une machine virtuelle qui n'est pas encore inventoriée

### Compute / Machines virtuelles
- Possibilité de démarrer une machine virtuelle en sppMode test

## v3.10 — 2023-06-06

### Compute / Machines virtuelles
- Intégration des fonctionnalités pour piloter un Esxi Standalone

### Général
- Amélioration de l'affichage des demandes de support

## v3.9 — 2023-05-23

### Maintenance & Opérations
- Possibilité de visualiser les graphiques d'un service depuis la page d'un équipement
- Amélioration de l'affichage des graphiques d'un service

### Infrastructure
- Possibilité de parcourir les fichiers d'un datastore
- Amélioration du chargement de la page d'un ESX

### Général
- Possibilité de fermer un ticket support
- Optimisation du projet

## v3.8 — 2023-04-04

### Général
- Amélioration de l'affichage des thématique lors de la création d'un ticket support
- Ajout de filtres sur la page des tickets support
- Optimisation de l'utilisation des retours websockets
- Amélioration de la récupération des fonts et icônes

### Compute / Machines virtuelles
- Ajout de l'étape de configuration du réseaux lors du déploiement d'une machine virtuelle depuis un modèle de VM ou un OVF
- Ajout de filtres sur la page "Catalogues"
- Modification de la mise à jour de la version materiel d'une machine virtuelle

### Métriques
- Ajout d'une page "Santé" pour les machines virtuelles
- Ajout de la consommation électrique globale des ESX sur le tableau de bord

## v3.7 — 2023-03-16

### Documentation
- Ajout d'un fil d'arianne sur les pages de la partie documentation

### Compute / Machines virtuelles
- Ajout de l'option secure boot dans les options avancées du démarrage d'une machine virtuelle
- Amélioration de l'ajout de disques sur une machine virtuelle en permettant l'ajout multiple en une seule action
- Ajout d'une étape supplémentaire pour le choix d'un OS lors de la création d'une machine virtuelle
- Ajout d'un filtre par hostCluster sur la liste des machines virtuelles

### Sauvegarde
- Ajout d'une colonne indiquant les types d'une politique de sauvegardes
- Amélioration des messages affichés à l'utilisateur sur les actions concernant les politiques de sauvegarde d'une machine virtuelle

## v3.6.3 — 2023-03-08

### Général
- Affichage des tickets modifiés les plus récemment par défaut sur les demandes de support

## v3.6.2 — 2023-03-07

### Général
- Optimisation de la configuration du projet

## v3.6 — 2023-02-27

### Identité & Accès
- Lorsque l'utilisateur ne possède pas le droit 'iam_manage_permissions' ne pas bloquer l'ouverture de la pop-up mais uniquement l'édition

### Compute / Machines virtuelles
- Lors de l'upload, possibilité d'ajouter des fichiers avec des extensions en majuscule

### Bastion
- Remplacement du titre d'un onglet de session bastion par le nom de la session

## v3.5.2 — 2023-02-07

### Bastion
- Amélioration du temps d'affichage d'une session bastion

## v3.5.1 — 2023-02-07

### Activités
- La récupération des activités en cours au rechargement de la page est temporairement désactivée

## v3.5 — 2023-02-03

### Tickets de support
- Ajout de la colonne référence client sur la liste des tickets

### Sauvegarde
- Ajout d'un onglet dans la page de rapport de sauvegarde de la liste non groupée des rapports

### Identité & Accès
- Possibilité de mettre à jour son profil utilisateur d'un compte local

## v3.4.3 — 2023-02-07

### Bastion
- Amélioration du temps d'affichage d'une session bastion

## v3.4.2 — 2023-02-07

### Activités
- La récupération des activités en cours au rechargement de la page est temporairement désactivée

## v3.4 — 2023-01-30

### Général
- Les fonctionnalités nécessitant un rôle non possédé ne sont plus affichées

### Maintenance & Opérations
- Ajout d'un champ de recherche par nom sur la liste des équipements

## v3.3.1 — 2023-01-19

### Sauvegarde
- Affichage d'un avertissement lors de l'ajout d'une politique désactivée à une machine virtuelle

## v3.3 — 2023-01-18

### Général
- Refonte de l'affichage des notifications

## v3.2.1 — 2023-01-11

### Maintenance & Opérations
- Optimisation de la récupération des informations sur la liste des services

## v3.2 — 2023-01-05

### Infrastructure
- Mise à jour des statuts des ESXs et Datastores

## v3.1 — 2022-12-21

### Métriques
- Ajout d'un nouvel onglet dans le dashboard pour la consommation électrique et l'émission de CO2 des ESX
- Ajout d'un graphique de consommation électrique sur les détails d'un ESX sur une période donnée
- Ajout de l'émission de carbone d'un ESX sur une période donnée

## v3.0 — 2022-12-14

### Général
- Refonte du style et de l'ergonomie globale de l'interface
- Refonte de la page d’accueil de l'application
- Nouveau fonctionnement et affichage des filtres
- Nouveau fonctionnement et affichage des vues enregistrées sur les services supervisés et les tickets
- Ajout d'un filtre "non assigné" sur la liste des tickets
- Nouveau fonctionnement du suivi des activités en cours
- Séparation en onglets du tableau de bord
- Affichage des APIs et PAT dans une page dédiée

## v2.38 — 2022-12-06

### Compute / Machines virtuelles
- Intégration des appels API VRM (Virtual Machine Replication) sur la page réplication et les details d'une machine virtuelle

### Général
- La FAQ est désormais redirigée vers la nouvelle documentation

## v2.37 — 2022-11-24

### Maintenance & Opérations
- Mise à jour des graphiques de performances sur les services supervisés

## v2.36 — 2022-11-02

### Compute / Machines virtuelles
- Ajout de notifications lorsqu'une seule partie des vcenters ne répondent
- Ajout d'une validation sur le nom lors de la publication d'un fichier dans un catalogue

### Général
- Possibilité de consulter les demandes de support

## v2.35 — 2022-10-18

### Compute / Machines virtuelles
- Lors de la selection d'une ressource de calcul ou de stockage, les ressources indisponibles ne peuvent pas etre séléctionnées

### Maintenance & Opérations
- Possibilité d'ajouter des arrêts planifiés depuis la liste des équipements

### Sauvegarde
- Ajout de l'option 'Streaming' lors d'une restauration de sauvegarde pour améliorer le temps d'execution

## v2.34 — 2022-10-12

### Sauvegarde
- Les politiques de sauvegardes désactivées ne sont plus assignable à un machine virtuelle excépté la politique 'nobackup'

### Compute / Machines virtuelles
- Refonte de la page Bibliothèque de contenu qui devient la page Catalogues
- Possibilité de publier un ISO ou les fichiers d'un OVF dans "Mon catalogue"
- Possibilité de cloner vers "Mon catalogue" un modèle depuis un "Catalogue publique"

### Infrastructure
- Possibilité de lister, ajouter et supprimer une bibliothèque de contenu depuis la page d'un vcenter dans la partie Infrastructure

## v2.33.1 — 2022-10-12

### Sauvegarde
- Mise à jour des actions de sauvegardes disponibles depuis un tenant SecNumCloud

## v2.33 — 2022-09-23

### Compute / Machines virtuelles
- Possibilité de synchroniser un élément d'une content librairie 'Subscribed'

### Général
- Mise à jour du fonctionnement des demandes de support

## v2.32.3 — 2022-09-01

### Compute / Machines virtuelles
- Bug d'affichage sur la configuration des adaptateurs réseaux d'une machine virtuelle

## v2.32 — 2022-08-30

### Infrastructure
- Ajout d'une fonctionnalité permettant de demander une mise à jour d'un ESX.

## v2.31 — 2022-08-29

### Compute / Machines virtuelles
- Possibilité d'activer la mise à jour des VMware tools au prochain redémarrage de la machine virtuelle
- Ajout des règles affinité et anti-affinité sur les details d'une machine virtuelle

### Général
- Ajout d'une validation sur la création d'un Personal Access Token limitant l'expiration à maximum 1 an

## v2.30 — 2022-08-23

### Général
- Optimisation des performances en annulant les appels API en cours lors du changement de page

## v2.29.3 — 2022-08-23

### Bastion
- Amélioration de la sécurité concernant l'ouverture d'une session Bastion

## v2.29 — 2022-08-04

### Général
- Amélioration de l'affichage pour une demande de support

### Tickets de support
- Ajout d'un filtre 'En escalade' sur la liste des tickets
- Possibilité de choisir la règle de filtrage 'ET' ou 'OU' à appliquer entre les différents filtres sur la liste des tickets
- Suppression de l'option pour modifier un ticket lorsque celui-ci est fermé

### Compute / Machines virtuelles
- Ajout d'options avancées au démarrage d'une machine virtuelle

## v2.28.1 — 2022-08-01

### Identité & Accès
- Désactivation temporaire de la fonctionnalité de mise à jour d'une adresse email

### Général
- Retrait des details techniques du champs description dans la partie demande de support

## v2.28 — 2022-07-22

### Compute / Machines virtuelles
- Ajout d'une alerte sur les informations d'une machine virtuelle lorsque la mémoire est gonflée
- Informations sur la taille restante necessaire sur le datastore lors de l'upload d'un ISO
- Ajout du bouton pour ouvrir une console directement dans la colonne actions d'une machine virtuelle

### Infrastructure
- Ajout de la version des VMware tools sur les details d'un ESX

### Général
- Refonte de la partie demande de support

## v2.27 — 2022-07-06

### Compute / Machines virtuelles
- Mise à jour de l'interface pour suivre les transferts de fichiers
- Possibilité de n'exporter que les machines virtuelles filtrées lors de l'export CSV
- Ajout d'un tableau listant les fichiers ISO

## v2.26.4 — 2022-07-04

### Maintenance & Opérations
- Lors du choix de l'intervalle de date personnalisé sur les graphiques de supervision, l'heure est à 00:00 par défaut

## v2.26.1 — 2022-06-27

### Maintenance & Opérations
- Mise à jour des graphiques de performance sur certains services monitorés

## v2.26 — 2022-06-23

### Inventaire
- Intégration de la nouvelle API Inventory

### Général
- Modification de l'affichage des changements d'API dans les informations de mises à jour
- Ajout d'un logo SecNumCloud devant les tenant SecNumCloud dans la barre latérale
- Les données dynamiques de la partie infrastructure dans la barre latérale sont désormais triés par ordre alphabétique

### Maintenance & Opérations
- Mise à jour de l'affichage des details d'un arrêt planifié

### Hébergement physique
- Ajout du champ référence sur la page des circuits telecom

### Infrastructure
- Possibilité de déclarer des règles d'affinité et anti-affinité entre des machines virtuelles depuis un hostCLuster

### Étiquettes
- Optimisation du temps de récupération des tags sur la liste des machines virtuelles

## v2.25.1 — 2022-06-10

### Général
- Ajout de contraintes pour un tenant SNC

## v2.25 — 2022-06-07

### Compute / Machines virtuelles
- Possibilité de copier les paramètres avancés d'une machine virtuelle dans le presse-papier
- Possibilité d'ajouter la somme de la taille des disques dans l'export csv des machines virtuelles

### Maintenance & Opérations
- Possibilité d'ajouter et consulter les arrêts planifiés de supervision depuis la liste des services
- Ajout d'une page listant les arrêts planifiés de supervision

## v2.24 — 2022-05-10

### Compute / Machines virtuelles
- Affichage d'indicateur d'alarmes de type danger et critique sur la liste des machines virtuelles
- Ajout de l'information lors du déploiement d'une machine virtuelle depuis un modèle
- Afficher la liste et les details des alertes sur une machine virtuelle
- Mise à jour du filtre des OS pour ne proposer que les OS utilisés

### Général
- Mise à jour de l'affichage des versions de mises à jour
- Affichage des changements API sur les notes de mises à jour

### Infrastructure
- Mise à jour de l'affichage de la mémoire d'un hostCluster et ajout d'une alerte sur la mémoire gonflée

### Maintenance & Opérations
- Ajout de graphiques de performance sur certains services monitorés

### Sauvegarde
- Lors de l'assignation d'une politique de sauvegarde, ne pas afficher les politiques désactivées

## v2.23 — 2022-04-28

### Compute / Machines virtuelles
- Ajout d'un champ de recherche sur les filtres OS et vlans sur la liste des machines virtuelles
- Optimisation de la récupération des réseaux

## v2.22 — 2022-04-26

### Compute / Machines virtuelles
- Optimisation de la récupération des réseaux
- Ajout du filtre par OS sur la liste des machines virtuelles
- Ajout d'un champ de recherche sur les arborescences contenant beaucoup de données

### Sauvegarde
- Ajout de la date à laquelle les données on été récupérées concernant les erreurs sur les dernières sauvegardes 
- Affichage des informations de la machine virtuelle lors de la restauration d'un disque ou d'une machine virtuelle
- Optimisation de la récupération des travaux par politiques de sauvegardes sur le tableau de bord

### Tickets de support
- Ajout d'une confirmation pour annuler la création d'un ticket

## v2.21 — 2022-04-12

### Maintenance & Opérations
- Ajout des notifications liées à un service

### Tickets de support
- Possibilité d'ajouter des observateurs à la création avancée d'un ticket

### Général
- Mise à jour des rôles dans la FAQ
- Mise à jour de la réinitialisation des formulaires à l'ouverture d'une modal

### Compute / Machines virtuelles
- Mise à jour de l'affichage des VMware tools en fonction de leur provenance
- Mise à jour de l'affichage des vm-template et des options pour les déployer
- Possibilité de forcer l'accès au BIOS au démarrage d'une machine virtuelle

### Identité & Accès
- Possibilité de réinscrire un utilisateur

### Sauvegarde
- Optimisation de la récupération des rapports de sauvegarde

## v2.20 — 2022-03-30

### Bastion
- Possibilité de supprimer une session
- Possibilité de consulter les activités liées à une session

## v2.19 — 2022-03-29

### Tickets de support
- Ajout d'une option pour afficher la description et les commentaires en texte brut sans interpréation HTML
- Possibilité de passer un ticket en attente client vers ouvert planifié à la création d'un commentaire

### Compute / Machines virtuelles
- Possibilité de changer le type d'assignation d'une adresse MAC d'un adaptateur réseaux

### Bastion
- Ajout de sessions de connexion bastion

### Sauvegarde
- Possibilité d'afficher les graphiques des travaux par politiques de sauvegarde sur 7 jours et 30 jours en plus de 24h et 48h

## v2.18 — 2022-03-21

### Tickets de support
- Mises à jour des routes pour télécharger et importer des fichiers sur des tickets

### Infrastructure
- Ré-intégration des appels API Scup concernant les informations de mises à jour des ESXs

### Étiquettes
- Ajout du module TAG
- Possibilité d'ajouter et supprimer des tags sur plusieurs machines virtuelles à la fois
- Possibilité d'afficher et supprimer des tags sur une machines virtuelle
- Possibilité de filtrer les machines virtuelles en fonction des tags

## v2.17.3 — 2022-03-16

### Infrastructure
- Désactivation de l'edition du statut Host DRS provoquant des erreurs VMware

## v2.17.2 — 2022-03-15

### Infrastructure
- Désactivation de l'edition du statut SDRS provoquant des erreurs VMware

## v2.17 — 2022-03-03

### Tickets de support
- Possibilité de supprimer un fichier sur un ticket

### Compute / Machines virtuelles
- Amélioration de la modal d'édition d'un disque

### Bastion
- Ajout de traduction et modification d'interface sur la partie Bastion

## v2.16 — 2022-02-28

### Bastion
- Possibilité d'éditer la description d'une appliance bastion

### Tickets de support
- Amélioration sur le detail d'un ticket en permettant l'édition meme si des données mettent du temps à charger

## v2.15 — 2022-02-17

### Compute / Machines virtuelles
- Mettre en chargement une machine virtuelle lors de la prise d'une snapshot
- Modification de la migration Vmotion lors de la selection "Migrer uniquement les ressources de calcul"
- Modification de la colonne "Manager" sur la liste des machines virtuelles

### Général
- Possibilité de faire un clic droit sur les boutons de redirection pour ouvrir la page dans un nouvel onglet

### Sauvegarde
- Ajout d'informations lors d'une restauration de sauvegarde

### Bastion
- Ajout du choix ssh/rdp

## v2.14.1 — 2022-02-10

### Infrastructure
- Désactivation temporaire de l'affichage des mises à jour disponibles pour un ESX

## v2.14 — 2022-02-03

### Identité & Accès
- Mise à jour du fonctionnement du module IAM

## v2.13 — 2022-02-01

### Compute / Machines virtuelles
- Ajouter le nom des dvswitch sur la liste des vlans proposés
- Ajout d'un champ de recherche sur l'exploration d'un datastore
- Possibilité de voir les activités Shiva liées depuis la machine virtuelle

### Documentation
- Possibilité de faire une recherche de page sur la partie Documentation

### Infrastructure
- Mise à jour des libéllés pour entrer et sortir un ESX de maintenance

## v2.12 — 2022-01-26

### Sauvegarde
- Mise à jour des informations de sauvegarde sur le tableau de bord
- Ajout de la liste des derniéres sauvegardes de machine virtuelle en échec sur la page des rapports de sauvegardes

### Compute / Machines virtuelles
- Possibilité de choisir un host cluster ou un nouveau datacenter lors de l'export d'une machine virtuelle en tant que template
- Possibilité de choisir un contrôleur IDE lors de la création d'un disque virtuel

### Tickets de support
- Ajout d'un filtre centre de compétence sur la liste des tickets
- Ajout d'une colonne appelant sur la liste des tickets

### Identité & Accès
- Ajout de la réinitialisation d'adresse mail pour un utilisateur local

## v2.11 — 2022-01-21

### Bastion
- Ajout du module Bastion

### Général
- Ajout des swaggers Bastion et Scup

## v2.10 — 2022-01-20

### Identité & Accès
- Amélioration de l'experience SSO

## v2.9 — 2022-01-17

### Compute / Machines virtuelles
- Ajout d'une alerte sur les machines virtuelles en statut "invalid"
- Ajout d'alertes (consolidation requise, esx indisponible, machine virtuelle en statut "invalid") au dessus du tableau des machines virtuelles

### Sauvegarde
- Ajout d'une barre de recherche sur la liste des machines virtuelles d'une politique de sauvegarde

## v2.8 — 2022-01-06

### Général
- Refonte de la composition des urls Shiva

## v2.7 — 2022-01-05

### Identité & Accès
- Suivi de l'activité et synchronisation de l'affichage lors de la suppression d'un utilisateur

### Sauvegarde
- Ajouter le nombre de machines virtuelles concernées sur un rapport de sauvegardes

## v2.6 — 2022-01-04

### Compute / Machines virtuelles
- Mise à jour de l'outil controlant la console d'une machine virtuelle

## v2.5 — 2022-01-03

### Tickets de support
- Ajout de validation sur le titre d'un ticket lors de son édition

### Sauvegarde
- Modification de l'affichage des informations de sauvegarde sur le tableau de bord
- Ajout de précision sur la fréquence des politiques de sauvegarde

### Identité & Accès
- Ajout d'un filtre pour les utilisateurs vérifiés ou non

## v2.4.8 — 2021-12-24

### Compute / Machines virtuelles
- Suppression de l'édition des paramètres avancés

## v2.4.6 — 2021-12-21

### Compute / Machines virtuelles
- Lors de l'actualisation des données d'une machine virtuelle, ne pas changer d'onglet sur la machine virtuelle

## v2.4.5 — 2021-12-17

### Infrastructure
- Amélioration de la vitesse de chargement de la page SPP dans la partie infrastructure

## v2.4.4 — 2021-12-17

### Général
- Ajout d'un overlay au chargement d'un élément de tableau déplié

## v2.4.1 — 2021-12-16

### Général
- Possibilité de chercher sur certaines listes dynamiques (exemples: choix de réseaux sur la création ou migration de machine virtuelle, choix d'une vue sur la partie supervision...)
- Ajout de guillemets sur les noms d'objets dans les notifications (exemples: noms de machines virtuelles, nom de ticket...)

## v2.4 — 2021-12-15

### Compute / Machines virtuelles
- Ajout d'une étape pour configurer le réseau, lors du déploiement d'un template
- Ajout de la version de VMware tools sur les informations d'une machine virtuelle

### Sauvegarde
- Suppression du bouton pour exécuter une sauvegarde sur le tableau des politiques de sauvegarde d'un disque

### Réseau
- Supprimer temporairement l'edition d'un réseau sur la page Réseaux

## v2.3 — 2021-12-10

### Identité & Accès
- Lors de l'assignation de droits, les rôles non possédés et donc non assignables par l'utilisateur, sont désactivés

### Compute / Machines virtuelles
- Ajout du choix de la destination lors du clonage d'une machine virtuelle
- Ajout d'un filtre sur la liste des utilisateurs pour filtrer par utilisateurs externes ou internes
- Ajout d'une étape pour configurer le réseau, lors du déploiement d'un template

## v2.2 — 2021-12-06

### Infrastructure
- Ajout de la page hébergement / racks
- Ajout de la page hébergement / IP publiques
- Ajout de la page hébergement / équipements
- Ajout de la page hébergement / circuits telecom
- Ajout de la page réseaux
- Possibilité d'ajouter, supprimer et éditer un réseau
- Ajout d'informations liées aux hosts sur les pages d'hosts et host clusters

### Sauvegarde
- Ajout d'un filtre par date sur les sauvegardes d'une machine virtuelle

## v2.1 — 2021-12-02

### Tickets de support
- Ajout du champ synthèse sur les details d'un ticket

### Compute / Machines virtuelles
- Amélioration de la modal de migration de machine virtuelle
- Ajout de la consommation lors de la selection des hosts et datastores sur toutes les modals

## v2.0 — 2021-11-29

### Général
- Refonte du moteur graphique

## v1.63 — 2021-11-17

### Infrastructure
- Possibilité de parcourir un datastore pour inventorier une machine virtuelle à partir d'un fichier vmx

### Tickets de support
- Mise à jour de l'edition du centre de compétence et du propriétaire sur les détails d'un ticket
- Sur la création d'un ticket ajout de l'appelant par défaut et proposer l'édition contact en mode avancé

### Maintenance & Opérations
- Ajout de la liste des tickets liés à un équipement

## v1.62.2 — 2021-11-03

### Général
- Entrées dans la FAQ "Comment utiliser les APIs Shiva pour automatiser des taches?" et "Pourquoi certains utilisateurs sont grisés?"

## v1.62 — 2021-10-19

### Tickets de support
- Possibilité d'ajouter des fichiers à la création d'un ticket
- Ajout du mode "Avancé" sur la création d'un ticket avec les champs "Appelant" et "Référence client"
- Activation de la lecture seule sur l'édition des champs "Centre de competence", "Appelant", "Propriétaire" et "Contact" d'un ticket

### Compute / Machines virtuelles
- Amélioration et correction du suivi de publication d'un fichier dans une bibliothèque de contenu
- Possibilité de choisir le type de suppression d'une machine virtuelle

### Infrastructure
- Ajout d'une page par host dans la partie infrastructure

### Identité & Accès
- Ajout de la date d'expiration sur la liste des PAT

### Général
- Ajout de la mécanique de redirection une fois l'utilisateur connecté lors du partage d'un lien SHIVA
- Intégration de l'outil de suivi d'erreurs "Sentry" au projet

## v1.61 — 2021-10-12

### Général
- Affichage du nombre d'éléments au total au pied des tableaux
- Un utilisateur n'ayant pas vérifié son email est désormais grisé sur la liste des utilisateurs et ses droits ne peuvent être modifiés

### Sauvegarde
- Actualisation des données affichées suite à la désassignation d'une politique de sauvegarde
- Amélioration des graphiques sur les machines couvertes par une politique de sauvegarde
- Ajout d'un bouton pour exporter les infos de sauvegarde des machines virtuelles depuis la page Spectrum Protect Plus dans la partie infrastructure

### Compute / Machines virtuelles
- Ajout d'une validation lors du démontage d'un disque virtual
- Mise à jour de l'affichage complet des Ids SCSI sur les disques virtuels
- Possibilité connecter et déconnecter un lecteur CDROM
- Ajout de l'option cluster de stockage sur le déploiement d'un template depuis la page machines virtuelles
- Possibilité de supprimer un paramètre de configuration avancé sur une machine virtuelle
- Possibilité de trier les disques virtuels par nom
- Ajout d'un bouton pour exporter les infos des machines virtuelles depuis la page des machines virtuelles

### Tickets de support
- Ajout d'un champ de recherche par Id sur la liste des tickets renvoyant vers les details du ticket
- Ajout d'un bouton actualisation des données sur les details d'un ticket
- Ajout d'un bandeau d'information à la création d'un ticket avec un lien renvoyant vers ce ticket
- Possibilité de trier alphabétiquement sur la liste des éléments d'un catalogue
- Possibilité de modifier l'appelant d'un ticket
- Possibilité de filtrer par l'appelant la liste des tickets
- Traduction des statuts de tickets

### Maintenance & Opérations
- Ajout de la sélection, par utilisateur, d'une vue par défaut pour chacun des chemins existants depuis la page 'Vues'
- Possibilité de mettre à jour la vue par défaut sur les pages supportant la fonctionnalité
- Possibilité d'écraser les filtres d'une vue lors du clique sur 'Sauvegarder'
- Ajout des filtres de supervision et notifications sur la liste des services
- Désactivation temporaire du bouton santé des appliances

### Identité & Accès
- Ajout d'une date d'expiration lors de la création d'un PAT

### Documentation
- Les fichiers en duplicat ne s'affichent pas correctement sur une page documentation

## v1.60.11 — 2021-10-06

### Général
- Ajout d'un bouton pour exporter les activités récentes en csv
- Ajout d'un bouton pour exporter les activités archivées en csv
- Ajout d'une entrée FAQ concernant l'emplacement des activités

## v1.60.8 — 2021-10-04

### Général
- Ajout des dernières versions manquantes dans les notes de mise à jour
- Ajout d'une précision dans la FAQ concernant la suppression d'un utilisateur

## v1.60.7 — 2021-09-30

### Général
- Remplacer 'Administrateur' par 'Tous les rôles' dans la FAQ

## v1.60 — 2021-09-21

### Compute / Machines virtuelles
- Ajout du stockage total utilisé sur le detail d'une machine virtuelle

### Tickets de support
- Remplissage des catalogues avec l'item par défaut à la création d'un ticket
- Les champs catalogues ne sont plus requis pour créer un ticket
- Ajout des observateurs sur le detail d'un ticket
- Possibilité de modifier les observateurs d'un ticket

## v1.59.3 — 2021-09-20

### Documentation
- Suppression des modifications liées aux fichiers

## v1.59 — 2021-09-16

### Identité & Accès
- Ajout d'un bouton sur la liste des utilisateurs permettant un export de la liste en format CSV

### Compute / Machines virtuelles
- Ajout des taches sur les details d'une machine virtuelle

## v1.58 — 2021-09-13

### Général
- Possibilité de déclarer un incident de sécurité

## v1.57 — 2021-09-03

### Compute / Machines virtuelles
- Lors de la création d'un disque virtuel, il est possible de selectionner manuellement le contrôleur SCSI
- Lors d'une migration de stockage, il est désormais possible de choisir un stockage de destination pour chaque disque

### Sauvegarde
- Ajout d'un bouton sur la liste des machines virtuelles par politique permettant un export de la liste en format CSV

### Infrastructure
- Ajout du facteur d'offloading TSM sur la page du SPP dans la partie infra

### Tickets de support
- Ajout du champs titre lors de la création d'un ticket
- Ajout de nouvelles traductions

### Maintenance & Opérations
- Changement du format de la date et heure dans la partie monitoring et ticket lorsque la langue est en anglais
- Ajout d'un bouton dans la page des vues permettant la redirection vers la vue choisie
- Ajout d'un bouton permettant l'ajout de tags sur la liste des équipements

## v1.56.3 — 2021-08-24

### Général
- Mise à jour de la traduction des types de services et des statuts de tickets

## v1.56.2 — 2021-08-24

### Général
- Mise à jour de la traduction des types de services et des statuts de tickets

## v1.56.1 — 2021-08-16

### Sauvegarde
- Les filtres ne sont pas mis à jour lors du rafraichissement des machines virtuelles sans SLA

## v1.56 — 2021-08-06

### Sauvegarde
- Ajout de la liste des machines n'ayant pas de politique de sauvegarde sur la page des politiques

## v1.55 — 2021-07-30

### Compute / Machines virtuelles
- Possibilité d'activer ou désactiver le changement à chaud de la RAM
- Possibilité d'activer ou désactiver le changement à chaud du CPU
- Ajout des paramètres avancés sur une machine virtuelle
- Possibilité d'éditer les paramètres avancés d'une machine virtuelle
- Ajout d'une page avec la liste des machines virtuelles répliquées

### Général
- Pré-autorisation sur la documentation Api

### Maintenance & Opérations
- Ajout d'une page listant les vues de filtrage de la partie supervision

### Identité & Accès
- Possibilité de créer des Access Tokens personnels (PAT)

### Sauvegarde
- Lors de l'annulation d'un job, possibilité de conserver les données déjà sauvegardées

## v1.54 — 2021-07-23

### Compute / Machines virtuelles
- Ajout d'un filtre permettant de filtrer les machines virtuelles possédant ou ne possédant pas de snapshot

### Tickets de support
- Url mise à jour en fonction des filtres appliqués sur la page Ticket
- Possibilité de sauvegarder les filtres appliqués en tant que vue sur la pages Ticket
- Possibilité d'appliquer les filtres d'une vue préalablement enregistrée sur la pages Ticket

### Maintenance & Opérations
- Url mise à jour en fonction des filtres appliqués sur la page Équipement
- Possibilité de sauvegarder les filtres appliqués en tant que vue sur la pages Équipement
- Possibilité d'appliquer les filtres d'une vue préalablement enregistrée sur la pages Équipement
- Url mise à jour en fonction des filtres appliqués sur la page Service
- Possibilité de sauvegarder les filtres appliqués en tant que vue sur la pages Service
- Possibilité d'appliquer les filtres d'une vue préalablement enregistrée sur la pages Service

### Sauvegarde
- Possibilité de nettoyer les ressources actives liées à un job

## v1.53 — 2021-07-16

### Infrastructure
- Ajout des événements liés à une tâche vmware

### Compute / Machines virtuelles
- Possibilité, lors de la création de machine virtuelle, de choisir entre une nouvelle machine ou une machine depuis un template dans une bibliothèque de contenu
- Ajout d'une vérification sur le nom du fichier avant son chargement dans une bibliothèque de contenu
- Ajout d'une entrée FAQ concernant la visibilité d'une bibliothèque de contenu notamment lors du montage d'un iso

### Général
- Modification de la structure de la barre de navigation

### Tickets de support
- Possibilité d'éditer ses propres commentaires sur un ticket
- Modification des filtres appliqués lors du clique sur un tag de la vue tickets
- Ajout de traductions sur la vue tickets
- Modification de l'affichage et de la gestion des GTI/GTR

### Identité & Accès
- Ajout du rôle iam_manage_permissions

### Sauvegarde
- Modification du graphique concernant le nombre de machines ayant au moins 1 sauvegarde

## v1.52.3 — 2021-07-09

### Documentation
- Ajout de la page d'accueil

## v1.52 — 2021-06-29

### Compute / Machines virtuelles
- Ajout du choix des recommandations au démarrage d'une machine virtuelle

### Maintenance & Opérations
- Ajout des équipements sans notifications sur les chiffres des graphiques de supervision

### Tickets de support
- Possibilité de télécharger les fichiers attachés à un ticket
- Ajout d'un bouton sur les filtres par interval de date pour retirer l'interval
- Ajout des retours à la ligne sur l'aperçu de la description d'un ticket ou d'un commentaire

## v1.51 — 2021-06-28

### Documentation
- Ajout du module documentation

## v1.50 — 2021-06-28

### Général
- Possibilité d'ouvrir plusieurs tenant d'une même entreprise à la fois

## v1.49 — 2021-06-25

### Général
- Ajout d'un bouton sur les comptes locaux pour réinitialiser son mot de passe une fois connecté
- Ajout d'un bouton sur les comptes locaux pour réinitialiser son MFA une fois connecté

## v1.48 — 2021-06-22

### Maintenance & Opérations
- Ajout de graphiques sur la vue de l'ensemble des services

### Tickets de support
- Ajout d'un filtre sur les échéances Gti sur la liste des tickets
- Ajout d'un tag sur le nombre d'échéances Gti expirées ou bientôt expirées sur la liste des tickets
- Ajout d'un filtre sur les échéances Gtr sur la liste des tickets
- Ajout d'un tag sur le nombre d'échéances Gtr expirées ou bientôt expirées sur la liste des tickets
- Ajout d'un filtre sur les catalogues non renseignés sur la liste des tickets
- Ajout d'un tag sur le nombre de catalogues "Origine" non renseignés sur la liste des tickets
- Ajout d'un tag sur le nombre de catalogues "Nature" non renseignés sur la liste des tickets

## v1.47 — 2021-06-15

### Sauvegarde
- Ajout d'un graphique sur le nombre de machines concernées par une politique de sauvegarde
- Ajout de pagination sur la récupération des sauvegardes d'une machine virtuelle

### Tickets de support
- Modification de l'affichage des details d'un ticket

## v1.45 — 2021-06-09

### Tickets de support
- Ajout de la colonne "Equipe" sur la liste des tickets

### Maintenance & Opérations
- Modification de l'affichage de la colonne "Information" des services

## v1.44 — 2021-06-02

### Maintenance & Opérations
- Ajout d'une vue tableau de bord pour la partie supervision
- Ajout d'une vue listant l'ensemble des services
- Ajout d'un graphique des statuts de services sur la vue details d'un équipement
- Possibilité de filtrer les équipements "monitorés" et avec les "notifications activées"
- Possibilité de récupérer l'état de santé d'une appliance
- Possibilité de filtrer et trier les statuts des équipements
- Modification de l'affichage du statut d'un équipement
- Modification des champs gtr et gti sur la liste des tickets

### Tickets de support
- Ajout d'un tag sur la liste des tickets indiquant le nombre de tickets "non assigné" avec la possibilité de cliquer pour filtrer
- Ajout d'un tag sur la liste des tickets indiquant le nombre de tickets "en escalade" avec la possibilité de cliquer pour filtrer
- Ajout de la colonne "Nature" sur la liste des tickets

### Compute / Machines virtuelles
- Suppression des restrictions concernant le démontage et la suppresion d'un disque virtuel lorsque la machine est allumée

## v1.43 — 2021-06-01

### Identité & Accès
- Ajout de la possibilité de pré-selectionner les rôles possédés lors de l'affectation de rôles

## v1.41 — 2021-05-18

### Identité & Accès
- Mise à jour du système d'authentification suite aux changements IAM V2

## v1.40 — 2021-05-05

### Identité & Accès
- Activation d'IAM V2

## v1.31 — 2021-05-05

### Activités
- Possibilité de filtrer les logs par utilisateurs

### Général
- Ajout de redirections au clique sur les graphiques du tableau de bord

### Maintenance & Opérations
- Ajout d'une vue de gestion des tags
- Possibilité d'ajouter un tag à un équipement
- Afficher les tags associés à un équipement
- Ajout d'un filtre par tags sur la liste des équipements

## v1.30 — 2021-04-22

### Compute / Machines virtuelles
- Suppression d'une tooltip erronée sur le bouton pour clone une machine virtuelle

### Général
- Modification du message de bienvenue pour la première connexion d'un utilisateur

### Identité & Accès
- Mise en place de IAM V2

## v1.29.1 — 2021-04-22

### Compute / Machines virtuelles
- Possibilité de cloner une machine virtuelle lorsqu'elle est allumée

## v1.29 — 2021-04-20

### Général
- Possibilité de choisir l'ordre des colonnes lorsqu'elles sont filtrables

### Infrastructure
- Ajout de la vue suivi des tâches VmWare

### Compute / Machines virtuelles
- Ajout de validation sur les MAC adresses
- Ajout du nom du switch virtuel sur le filtre des vlans dans la vue machines virtuelles

### Tickets de support
- Possibilité de filtrer par la nature du ticket
- Ajout du nombre de tickets par statut sur la vue des tickets

### Maintenance & Opérations
- Ajout de la colonne information sur la vue des services

## v1.28 — 2021-04-09

### Général
- Ajout du nombre de tickets et de la répartition des tickets non fermés sur le tableau de bord

## v1.27 — 2021-04-08

### Général
- Modifications pour adapter le responsive de l'application

### Compute / Machines virtuelles
- Ajout de l'ensemble des IPs d'une machine virtuelle
- Possibilité de choisir le type de déplacement d'une machine virtuelle (calcul seulement, stockage seulement ou les 2)
- Ajout des infos de l'emplacement actuel d'une machine virtuelle lors de son déplacement

### Infrastructure
- Possibilité de modifier la configuration SDRS
- Possibilité de modifier la configuration HostCluster DRS
- Possibilité de choisir les recommendations à appliquer lors d'une mise en maintenance
- Possibilité d'appliquer les recommendations d'un SDRS

### Maintenance & Opérations
- Ajout de filtres sur les vues équipements et services
- Ajout de la date de mise à jour du status pour un service

### Tickets de support
- Ajout des colonnes GTR et GTI

## v1.26.2 — 2021-03-23

### Compute / Machines virtuelles
- Ajout du filtre par host lors de la récupération des bibliothèques de contenu

## v1.26 — 2021-03-18

### Compute / Machines virtuelles
- Ajout de la consolidation d'une machine virtuelle
- Ajout de l'upload de fichiers sur la bibliothèque de contenu et desactivation d'object-storage
- Ajout de la modification d'un SE invité
- Ajout de la création d'un lecteur CD/DVD
- Ajout du choix du lecteur CD/DVD lors du montage d'un ISO
- Ajout d'un filtrage par host lors de la récupération des SE invité

### Sauvegarde
- Affichage de la version de la plateforme SPP dans la partie infrastructure

### Infrastructure
- Ajouter le choix du nombre de pages sur la liste des hosts dans la vue infrastructure

### Tickets de support
- Ajout du filtrage des tickets avec plusieurs statuts
- Ajout de la modification d'un ticket

## v1.25 — 2021-02-26

### Général
- Ajout d'une redirection au clique sur un job sur le graphique du tableau de bord

### Compute / Machines virtuelles
- Possibilité de choisir entre host et hostCluster pour un deploy template
- Possibilité de configurer en dur une adresse mac sur une machine virtuelle
- Possibilité de stopper ou redémarrer le SE invité sur une machine virtuelle
- Ajout d'un affichage particulier pour les machines virtuelles en échec lors d'une migration

### Maintenance & Opérations
- Ajout du nombre de services et le statut de la disponibilité sur la vue équipement
- Ajout d'une page des services pour un équipement

### Tickets de support
- Modification de l'affichage entre un commentaire humain et automatique sur un ticket

### Inventaire
- Possibilité de choisir d'afficher 50 ou 100 éléments sur une vue inventaire

## v1.24 — 2021-02-17

### Compute / Machines virtuelles
- Possibilité de choisir un cluster de stockage ou de calcul lors de la migration d'une machine virtuelle
- Désactivation du redimensionnement d'un disque lorsque la machine possede au moins un snapshot
- Ajout d'une vérification de compatibilité en fonction de cluster lors d'un vmotion

### Infrastructure
- Ajouter un bouton vmotion d'un datastore à l'autre sur la partie infrastructure

### Tickets de support
- Les champs catalogues sont désormais affichés selon les éléments précédemment sélectionnés
- Ajout de l'édition d'un commentaire
- Ajout de la création d'un commentaire

## v1.23.2 — 2021-02-12

### Tickets de support
- Modification de l'appel API pour la création de ticket

## v1.23.1 — 2021-02-10

### Tickets de support
- Ajout d'une notification lors d'un problème sur la récupération des catalogues de services

## v1.23 — 2021-02-09

### Infrastructure
- Possibilité de migrer plusieurs machines virtuelle d'un host à l'autre sur la vue infrastructure d'un hostcluster
- Mise à jour de l'affichage des status des hosts sur la vue infrastructure d'un hostcluster

### Compute / Machines virtuelles
- Ajout du nom de la machine virtuelle dans l'url lors de l'ouverture de la console
- Ajout d'un tri alphabétique dans l'arborescence d'un datastore

### Tickets de support
- Ajout des fichiers liés sur l'édition d'un ticket
- Possibilité de lier des fichiers à l'édition d'un ticket
- Possibilité de créer un nouveau ticket
- Ajout de filtres sur les tickets

### Général
- Renforcement de la sécurité sur l'interprétation de nouveaux champs

## v1.22 — 2021-01-20

### Compute / Machines virtuelles
- Ajout d'options sur la création de snapshots
- Lors de l'ajout d'un disque, il est désormais possible de choisir entre un datastore et un cluster
- Ajout de l'affichage de la description et des options appliquées d'un snapshot

### Tickets de support
- Ajout des catalogues sur les tickets

### Maintenance & Opérations
- Ajout de la liste des appliances

## v1.21 — 2021-01-12

### Général
- Ajout de la documentation API SHIVA
- Mise à jour de la sidebar
- Les listes déroulantes sont désormais remplacées par un message lorsqu'elles sont vides

### Compute / Machines virtuelles
- Le filtre avec la liste des vlans est maintenant trié par ordre alphabétique
- Possibilité de déployer un template directement depuis la vue machines virtuelles

### Infrastructure
- Possibilité de mettre en maintenace un host

### Identité & Accès
- Ajout d'un filtre par rôle sur la vue utilisateurs
- Possibilité de trier les utilisateurs par nombre de rôles
- Mise à jour des rôles Ticketing et Supervision

### Sauvegarde
- Ajout d'une tooltip redirigeant vers la FAQ lors du choix du type de restauration
- L'édition d'une politique de sauvegarde est momentanément désactivé

### Tickets de support
- Possibilité de trier par colonne sur la vue Tickets

### Maintenance & Opérations
- Possibilité de trier par colonne sur la vue Équipements

## v1.20 — 2021-01-08

### Compute / Machines virtuelles
- Ajout du typage sur les variables de déploiement pour les templates de bibliothèques
- Lors de la migration d'une machine virtuelle, il est desormais possible de choisir un nouveau réseau pour chaque adaptateur réseau
- Le montage d'une image ISO a été modifié afin de rendre transparent la création d'un lecteur CDROM

### Infrastructure
- Possibilité de mettre en maintenace un datastore

### Maintenance & Opérations
- Ajout d'une vue supervision listant les équipements

## v1.19.1 — 2020-12-22

### Sauvegarde
- Le graph sur le nombre de machines concernées par une politique de sauvegarde ne fonctionne pas avec SPP 10.1.5

## v1.19 — 2020-12-16

### Tickets de support
- Création d'une vue permettant le listing des tickets

### Compute / Machines virtuelles
- Lors de la création d'une machine virtuelle, il est désormais possible de ne séléctionner uniquement les clusters de calcul et de stockage afin de profiter du DRS
- Ajout d'une confirmation lorsque la combinaison 'ctrl + alt + suppr' est effectuée sur la console
- Ajout d'un explorateur de datastore pour la récupération de disque virtuel existant

### Infrastructure
- Ajout des informations Vsphere DRS sur l'onglet 'Stockage' dans la partie infrastructure

### Sauvegarde
- Lorqu'un job échoue, il est désormais possible de le relancer pour les machines concernées à l'aide d'un nouveau bouton prévu à cet effet
- Ajout d'un graphique indiquant le nombre de machines virtuelles associées à au moins une politique de sauvegarde

### Object Storage
- Ajout de la création de token S3 avec object-storage
- Ajout de la liste des tokens S3 par projet

## v1.18 — 2020-11-27

### Général
- Cliquer sur un élément du menu permet l'ouverture de la page et des sous-menu à la fois
- Apparition d'une scroll-bar lorsqu'un élément du menu est trop long
- Ajout des informations sur les nouveaux droits compute_iaas_vmware_management dans la FAQ
- Le rôle compute_vmware_management_url est remplacé par compute_iaas_vmware_management_read et permet en plus l'exploration de l'infrastructure VMware

### Infrastructure
- Suppression de la vue sur les ressource pools dans la partie infrastructure
- Alignement de la légende sur les graphiques de la partie infrastructure et ajout d'un total

### Compute / Machines virtuelles
- Possibilité de diminuer la mémoire d'une machine virtuelle
- Ajout d'un filtre automatique par Datacenter lors de la récuperation de fichiers iso sur un datastore ou une bibliothèque de contenu
- Ajout de l'ID des controllers SCSI sur la liste des disques d'une machine virtuelle

## v1.17 — 2020-11-17

### Compute / Machines virtuelles
- Ajout de l'interface pour la création d'un contrôleur CD/DVD

### Général
- Desactivation des datastores lors de leur mise en maintenance
- Ajout d'une entrée FAQ sur la suppression d'un disque restauré

## v1.16.2 — 2020-10-22

### Général
- Modification de la valeur par défaut des capacités mémoire et stockage lors de création et édition à travers toute l'application (désormais GB)

### Compute / Machines virtuelles
- Ajout de spécifications techniques en fonction de l'OS sélectionné (ex: mémoire maximum, cpu maximum, nombre de disques maximum...)
- Possibilité de filtrer les machines virtuelles par 'Template'

### Infrastructure
- Modification de l'affichage de la mémoire du cpu et du stockage d'un datacenter
- Modification de l'affichage du stockage d'un datastore cluster
- Modification de l'affichage de la mémoire du cpu et du stockage d'un hostCluster

## v1.16.1 — 2020-10-20

### Général
- Ajout d'une image d'exemple dans la FAQ sur la mémoire réservée d'un hostcluster

## v1.16 — 2020-10-14

### Compute / Machines virtuelles
- Possibilité de monter un disque virtuel existant (à partir de son VMDK)
- Possibilité de démonter un disque virtuel sans supprimer les données sur le datastore
- Ajout du mode, du chemin et du type de provisionnement d'un disque
- Possibilité de configurer le mode et le type de provisionnement d'un nouveau disque
- Possibilité de modifier le mode d'un disque
- Possibilité d'ajouter un disque existant à la création d'une machine virtuelle
- Affichage d'une erreur de configuration lorsqu'un réseau est invalide ou introuvable sur un adaptateur réseaux
- Possibilité de déplacer une machine virtuelle (vMotion)

### Infrastructure
- Ajout d'informations concernant la configuration drs d'un hostcluster
- Ajout de la mémoire réservée d'un hostcluster
- Ajout du nombre d'ESX et leurs noms sur les datastores
- Ajout du nombre d'ESX et leurs noms sur les réseaux

### Général
- Ajout d'une entrée FAQ sur les modes de disques
- Ajout d'une entrée FAQ sur la mémoire réservée d'un hostcluster

## v1.15.1 — 2020-10-01

### Compute / Machines virtuelles
- Ajout d'un bouton pour recharger les bibliothèques sur la vue 'bibliothèque de contenu'

## v1.15 — 2020-09-28

### Compute / Machines virtuelles
- Ajout de l'export d'un item d'une bibliothèque de contenu vers un bucket object-storage

## v1.14 — 2020-09-22

### Compute / Machines virtuelles
- Ajout d'options sur la création d'une machine virtuelle (ajout de disques, contrôleurs et adaptateurs réseaux)
- Mise à jour de l'onglet 'disques virtuelles' en onglet 'périphériques' avec la possibilité de gérer les contrôleurs
- Ajout du champ 'Type' sur les adaptateurs réseaux pour les versions 6.7
- Désactivation des actions sur une machine virtuelle lorsque l'ESX est déconnecté

### Sauvegarde
- Tooltip concernant les informations d'une sla lors de l'assignation d'une sla à une machine virtuelle

## v1.13 — 2020-09-10

### Général
- Ajout d'entrées FAQ concernant IAM et 'Comment cloner une machine virtuelle'

### Inventaire
- Différenciation des éléments par des formes sur l'affichage graphique d'une relation
- Affichage des détails d'un élément sous forme de tooltip sur l'affichage graphique d'une relation

### Infrastructure
- Ajout du nombre de machines virtuelles sur les hosts et les datastores

### Compute / Machines virtuelles
- Possibilité de filtrer les machines virtuelles par hosts
- Filtre affiné sur la récupération des datastores pour la création d'un disque virtuel

### Identité & Accès
- Possibilité de reinitialiser son mot de passe une fois connecté

## v1.12 — 2020-09-01

### Général
- Ajout d'entrées FAQ sur 'L'expiration d'une session' et 'Comment transformer une machine virtuelle en modèle'

### Inventaire
- Possibilité de déplacer les colonnes
- Affichage graphique des relations
- Ajout de conversion sur les colonnes unitaires

### Compute / Machines virtuelles
- Ajout de la version matériel d'une machine virtuelle
- Possibilité de selectionner l'option 'auto-connecter' sur les adaptateurs réseaux
- Possibilité de mettre à niveau la version matériel d'une machine virtuelle
- Possibilité de cloner vers une nouvelle machine virtuelle depuis les actions de la machine virtuelle

### Infrastructure
- Ajout d'un sous-menu 'réseau' listant les switchs virtuels dans la partie infrastruscture
- Ajout d'une vue des réseaux par switch virtuel
- Ajout de la version des hosts sur la vue cluster dans la partie infrastructure

### Identité & Accès
- Possibilité de choisir la durée de sa session parmis une liste d'options

## v1.11 — 2020-08-04

### Général
- Possibilité de personaliser le Tableau de bord à sa guise
- Ajout d'un nouvel onglet 'Archives' dans la vue des logs
- Ajout d'un badge du nombre de version ajoutées depuis la dernière ouverture de la modal des mises à jour

### Sauvegarde
- Possibilité de supprimer un job de type 'recovery' se trouvant en statut 'veille'
- Possibilité de restorer un vmdk précis à partir d'une sauvegarde
- Ajout d'une colonne 'Date d'activation' sur les politiques de sauvegarde
- Ajout d'une colonne 'Spp mode' sur les disques virtuels
- Possibilité de passer un disque du mode 'Instant Access' au mode 'Production'

### Compute / Machines virtuelles
- Possibilité de déployer un type 'vm-template' depuis une bibliothèque de contenu
- Possibilité d'exporter une machine virtuelle en template vers une bibliothèque de contenu

## v1.10.3 — 2020-07-27

### Compute / Machines virtuelles
- Possibilité d'upload des fichiers '.ova', '.ovf' et '.iso' dans une bibliothèque de contenu depuis une url publique

## v1.10.1 — 2020-07-27

### Général
- Ajout d'une entrée FAQ sur 'Comment monter un ISO'

### Sauvegarde
- Ajout d'une colonne 'Date d'expiration' sur les sauvegardes d'une machine virtuelle

## v1.10 — 2020-07-23

### Identité & Accès
- Sur la vue 'Utilisateurs', possibilité de chercher par email, 'Admin', 'Sans roles'

### Inventaire
- Ajout d'une notification lorsqu'un ou plusieurs items ont été ajoutés depuis la dernière actualisation des données

### Général
- Nouveau design pour la FAQ

### Infrastructure
- Affichage du nombre de machines virtuelles par vcenter

### Compute / Machines virtuelles
- Optimisation du listage des machines virtuelles

## v1.9 — 2020-07-20

### Sauvegarde
- AJout d'un filtre par date sur les sauvegardes d'une machine virtuelle

### Inventaire
- Possibilité de choisir les colonnes à afficher

### Object Storage
- Ajout de validation sur la création d'un bucket
- Ajout de l'url publique des fichiers dans un bucket

### Compute / Machines virtuelles
- Possibilité d'importer un fichier dans une bilbiothèque de contenu depuis object-storage

## v1.8 — 2020-07-17

### Général
- Ajustement de styles sur l'ensemble de l'application
- Ajout du choix du nombre de lignes affichées d'un tableau sur l'ensemble de l'application

### Inventaire
- Affichage dynamique des vues inventaire disponibles
- Ajout d'un bouton sur la partie infrastructure d'un vcenter permettant d'inventorier toutes les VMs de ce vcenter
- Possibilité d'ajouter un nouvel élément à un inventaire si le type d'inventaire est autre que celui des VMs
- Possibilité de voir les items liés à une relation
- Amélioration sur la récupération des relations d'un item
- Possibilité d'effectuer une suppression sur plusieurs éléments à la fois
- Possibilité d'effectuer une edition sur plusieurs éléments à la fois
- Modification de la modal d'édition
- Gestion des paramètres 'Lecture seule', 'Obligatoire', 'Unique'... sur les différents champs

## v1.7.4 — 2020-07-06

### Inventaire
- Mise à jour du système de pagination et de filtre

## v1.7 — 2020-06-30

### Inventaire
- Mise en place du système d'inventaire

## v1.6 — 2020-06-19

### Général
- Réorganisation de la sidebar
- Mise en place de lazy loading sur le tableau de bord

### Sauvegarde
- Ajout d'une vue sur les machines virtuelles supprimées qui peuvent etre réstaurées

### Object Storage
- Ajout d'une vue pour voir la liste des projets object storage
- Ajout d'une vue pour voir la liste des buckets d'un projet

## v1.5 — 2020-05-29

### Compute / Machines virtuelles
- Ajout d'un message supplémentaire à la suppression d'un disque
- Ajout d'une barre de recherche sur le contenu d'une bibliothèque
- Ajout d'un filtre sur le mode SPP d'une machine virtuelle

## v1.4.5 — 2020-05-07

### Sauvegarde
- Ajout de la possibilité de passer une machine virtuelle en mode test vers le mode clone

## v1.4.2 — 2020-04-15

### Compute / Machines virtuelles
- Ajout d'une suppression spécifique pour une machine virtuelle en mode test

## v1.4 — 2020-04-09

### Général
- Les modules sont désormais affichés en fonction des droits de l'utilisateur

### Compute / Machines virtuelles
- Affichage du mode SPP de la vm (test/clone/production)

### Sauvegarde
- Ajout de la possibilité de restaurer une machine virtuelle en mode test
- Ajout de la possibilité de passer une machine virtuelle en mode test vers le mode production

## v1.3.11 — 2020-03-27

### Compute / Machines virtuelles
- Ajout d'une recherche par uuid dans la vue machine virtuelles
- Ajout de l'édition des cores par socket

### Général
- Uniformisation des boutons pour enrouler/dérouler les informations dépliables
- Ajout d'une tooltip et d'une question dans la FAQ concernant le quiescing
- Nouvelle apparence du bouton de feedback se trouvant désormais dans la barre de navigation
- Ajout de traductions
- Ajout dans la FAQ du temps de conservation des logs

### Infrastructure
- Nouvelle architecture pour la partie infrastructure

## v1.3.10 — 2020-03-19

### Identité & Accès
- Ajout des emails sur la liste des utilisateurs

### Infrastructure
- Ajout des SDRS dans la partie infrastructure
- Ajout d'une vue infrastructure pour les SDRS

### Sauvegarde
- Ajout d'un bouton explicit pour voir les logs concernant un job
- Ajout des activités pour toutes les actions concernant backup
- Ajout de la possibilité de modifier les options de sauvegarde d'une machine virtuelle (Quiescing)

### Général
- Mise à jour des librairies utilisées pour l'interface web

## v1.3.9 — 2020-02-28

### Général
- Ajout dans la FAQ des versions de navigateurs supportées

## v1.3.8 — 2020-02-28

### Infrastructure
- Ajout d'une vue infrastructure pour la partie Sauvegardes

### Général
- La connexion est désormais automatiquement actualisée lorsqu'une console est ouverte
- Ajout de selection d'un sujet lors du clique sur le bouton de support Shiva
- Ajout dans la FAQ de l'utilisation de l'arobase dans la console

### Identité & Accès
- Tri par ordre alphabetique des rôles dans la vue des utilisateurs

## v1.3.7 — 2020-02-21

### Compute / Machines virtuelles
- Ajout du filtrage des guest operation system par vcenter lors de la création d'une vm

### Général
- Mise à jour de dépendances et de la version de docker

### Sauvegarde
- Ajout d'une colonne status sur l'export csv des rapports de sauvegardes

## v1.3.6 — 2020-02-14

### Général
- Ajout d'une page FAQ sur l'inventaire du module de sauvegardes
- Ajout d'une page FAQ sur une erreur de snapshot lors d'une sauvegarde
- Ajout d'une page FAQ sur la connexion/déconnexion d'une carte réseau
- Ajout d'un graphique sur le tableau de bord avec les status des jobs executé sur une plage horraire
- Résolution de bugs sur les graphiques du tableau de bord avec le navigateur Google Chrome
- Résolution de bugs de traduction

### Compute / Machines virtuelles
- Ajout de l'option de trier les machines virtuelles par VLAN
- Ajout de l'option de connecter/déconnecter une carte réseau sur une machine virtuelle en version 6.7
- Ajout de l'information du nombre de cores par socket sur une machine virtuelle

### Sauvegarde
- Suppression de l'action pour executer le job d'une politque depuis la vue rapport de sauvegarde et la vue politiques
- Ajout de l'option d'annuler un job sur la vue des jobs
- Ajout de couleurs sur certains status de sessions d'un job

## v1.3.5 — 2020-01-20

### Infrastructure
- Ajout d'une vue pour consulter les détails d'un vcenter
- Ajout d'une vue pour consulter les détails d'un datacenter
- Changement de la couleur du status de maintenance
- Modification de l'affichage de la capacité de stockage restante au lieu de celle utilisée

## v1.3.4 — 2020-01-06

### Général
- Intégration du module Infrastructure dans la sidebar
- Changement du logo lorsque la sidebar est réduite
- Ajout de l'option pour filtrer par vcenter lors de la création ou dépoliement d'une machine virtuelle ou lors de la création d'une bibliothèque

### Infrastructure
- Affichage de la liste des vcenters dans la sidebar
- Affichage de la liste des datacenter d'un vcenter dans la sidebar
- Affichage de la liste des hostCluster d'un datacenter dans la sidebar
- Ajout d'une vue pour consulter les consommations des datastores d'un datacenter
- Ajout d'une vue pour consulter les consommations des hosts et resources pools d'un hostCluster
- Ajout d'une vue pour consulter les consommations d'un hostCluster

### Sauvegarde
- Retrait des boutons permettant de créer et supprimer une politique de sauvegarde

## v1.3.2 — 2019-12-13

### Compute / Machines virtuelles
- Ajout de la colonne de description des éléments d'une bibliothèque
- Ajout des champs pour configurer les options d'une image ovf lors du déploiement d'une vm
- Ajout d'un rôle pour accéder à l'url de la Vstack d'un vcenter
- Ajout du lien des Vstacks, accessible depuis les machine virtuelles lorsque l'utilisateur possède le droit adequat

### Général
- Mise à jour de la FAQ
- Ajout du nouveau logo

## v1.3.1 — 2019-12-06

### Compute / Machines virtuelles
- Ajout de l'option pour créer une bibliothéque de contenu
- Ajout de l'option pour supprimer une bibliothéque de contenu
- Ajout de l'option pour monter un ISO sur une machine virtuelle
- Ajout de l'option pour démonter un ISO sur une machine virtuelle
- Nouvel affichage pour le déploiement d'une machine virtuelle à partir d'un fichier ovf

## v1.3 — 2019-11-29

### Compute / Machines virtuelles
- Ajout du nom du vcenter d'une vm
- Ajout de la fonctionnalité pour créer une machine virtuelle vide
- Ajout de la vue bibliothèque de contenu (vcenter 6.7 seulement)
- Ajout de la fonctionnalité pour envoyer un modèle dans une bibliothèque (vcenter 6.7 seulement)
- Ajout de la fonctionnalité pour déployer un modèle en tant que machine virtuelle (vcenter 6.7 seulement)

### Général
- Mise à jour de la FAQ
- Ajout d'ancre permettant d'accéder à une FAQ en particulier, ajout de ces ancres dans l'url au clique sur une question
- Suppresion de l'utilisation de cookies

### Identité & Accès
- Ajout d'un bouton pour raffraichir la liste des utilisateurs

### Activités
- Ajout des raisons d'échec dans les logs

## v1.2.9 — 2019-11-07

### Identité & Accès
- Afficher l'uuid de l'auteur dans les logs lorsqu'il a été supprimé
- Afficher une colone des roles des utilisateurs sur la page dédiée

### Sauvegarde
- Retirer le mode test lors d'une restauration

## v1.2.7 — 2019-10-24

### Général
- Traduction des FAQ et des notes de mises à jours
- Ajout de question IAM dans la FAQ
- Ajout du fonctionnement du clavier de la console dans la FAQ

### Identité & Accès
- Ajout du bouton pour supprimer un utilisateur
- Ajout du support activité d'IAM

### Compute / Machines virtuelles
- Afficher l'état des vmWare tools
- Ajout de l'option pour mettre à jour les vmWare tools
- Ajout de l'option pour monter ou démonter l'image disque des vmWare tools

## v1.2.6 — 2019-10-15

### Compute / Machines virtuelles
- Editer CPU et RAM lorsque la machine virtuelle est allumée
- Editer un disque lorsque la machine virtuelle est allumée
- Mettre à jour l'unité utilisée pour les datastores

### Sauvegarde
- Ajouter les logs d'une session de travail

### Général
- Ajout d'une page FAQ
- Refonte du tableau de bord

## v1.2.5 — 2019-10-03

### Sauvegarde
- Ajout de la possibilité d'éxecuter un job sur la vue politiques de sauvegardes
- Ajout de la possibilité d'éxecuter un job sur la vue rapport
- Ajout de la possibilité d'éxecuter un job sur la vue job
- Ajout de l'exportation des rapports de sauvegardes d'une politique au format pdf
- Ajout de l'exportation des rapports de sauvegardes d'une politique au format csv
- Ajout de l'espace total et occupé des datastores lors d'une restauration
- Mise à jour du rendu des rapports

### Compute / Machines virtuelles
- Ajout de l'espace total d'un datastore lors de l'ajout d'un disque
- Ajout d'un message de validation lors de l'arret d'une machine virtuelle
- Possibilité de modifier la taille d'un disque lorsque la machine virtuelle est allumée

### Général
- Ajout de statistiques concernant backup sur le dashboard

## v1.2.4 — 2019-09-24

### Sauvegarde
- Mise à jour de la page des rapports de sauvegardes
- Ajout d'un filtre par intervalles sur les rapports de sauvegardes
- Ajout d'une modal lorsque plusieurs rapports de sauvegardes se trouve dans le même intervalle
- Amélioration du traitement de données concernant les rapports de sauvegardes

### Général
- Ajout de traductions

## v1.2.3 — 2019-09-10

### Sauvegarde
- Ajout du status d'un job
- Ajout d'un filtre par status pour les jobs
- Ajout d'un bouton pour rafraichir les jobs
- Mise à jour du style des rapports de sauvegarde
- Mise à jour du style des jobs
- Mise à jour de la modal sur la modification d'une politique de sauvegarde

### Activités
- Ajout de l'auteur d'une action dans les logs

## v1.2.2 — 2019-09-03

### Sauvegarde
- Ajout d'options à la restauration d'une vm
- Ajout de la possibilité de voir les vm par politiques de sauvegarde

### Général
- Mise à jour des activités reçues en WebSocket

## v1.2 — 2019-07-10

### Général
- Intégration de compatibilités Internet Explorer 11

### Compute / Machines virtuelles
- Ajout d'un filtre par datacenter
- Mise en forme des politiques sous forme de tableau
- Ouverture de la console dans une nouvelle page

### Sauvegarde
- Intégration d'une vue pour les rapports de sauvegardes
- Intégration d'une vue pour les jobs
- Ajout d'options sur la restoration d'une vm
- Modififcation de la modal sur les politiques

## v1.1 — 2019-05-22

### Général
- Ajout d'un bouton pour contacter le support
- Ajout des informations de version
- Modification de l'affichage sur la redirection du login

### Compute / Machines virtuelles
- Ajout d'un message de confirmation sur le redémarrage d'une machine virtuelle
- La réduction de la RAM est désormais autorisée
- Ajout d'une limite sur le nombre d'adaptateurs réseaux sur une machine virtuelle
- Ajout d'une limite sur le nombre de disques sur une machine virtuelle

### Sauvegarde
- Intégration du module
- Edition des paramètres d'une politique de sauvegarder
- Ajout de la gestion des politiques de sauvegardes
- Ajout de l'assignation des politiques sur une machine virtuelle
- Ajout de l'assignation des politiques sur un disque
- Ajout des sauvegardes sur une machine virtuelle
- Ajout de l'execution d'une backup sur une machine virtuelle

## v1.0 — 2019-02-07

### Général
- Première version

### Compute / Machines virtuelles
- Première version

### Sauvegarde
- Première version

### Identité & Accès
- Première version

### Activités
- Première version
