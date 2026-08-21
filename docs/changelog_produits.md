---
title: Nouveautés produits
sidebar_position: 999
---

# Nouveautés produits & évolutions

> Ce changelog liste uniquement les nouvelles fonctionnalités et évolutions significatives de la plateforme Cloud Temple.
> Les corrections de bugs sont volontairement exclues.

## v4.47.0 — 2026-07-30

### [Console](/console)
- La documentation Swagger du module Commandes est désormais disponible

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Lors du déploiement d'une machine virtuelle, seuls les éléments déployables du catalogue (OVF et modèles de machine virtuelle) sont désormais proposés

### [VM Instances](/public_cloud/vm_instances)
- Le coût estimé (horaire) est désormais affiché lors de la création d'une instance, avec le détail par poste (vCPU, RAM, disques)

### [VPC](/network/vpc)
- Lors de la commande d'un nouveau VPC, vous pouvez désormais choisir un déploiement sur un environnement dédié (votre infrastructure OpenIaaS) ou sur un environnement mutualisé (sous réserve d'une souscription au produit VM Instances)

### [Object Storage](/storage/oss)
- Les majuscules sont désormais refusées dans le nom d'un bucket, conformément aux règles de nommage

### [Marketplace](/marketplace)
- Vous pouvez désormais déployer une VM Instance (Public Cloud) directement depuis la fiche d'un produit Marketplace

## 2026-07-27 — Bases de données managées (Preview)

### [MariaDB Managé](/managed_mariadb)
- Le modèle de déploiement Distributed est renommé MultiAZ
- Les gabarits d'instance vont désormais jusqu'à 6X-Large (32 vCPU et 128 Gio de mémoire) et le stockage extensible à chaud jusqu'à 512 Gio
- Publication des recommandations de dimensionnement expliquant le calibrage des paramètres moteur, avec un avertissement sur l'activation de `performance_schema` en dessous du gabarit X-Large
- La restauration à un instant donné n'est plus proposée : les sauvegardes reposent désormais sur les sauvegardes physiques quotidiennes et les exports logiques, sans archivage continu des journaux de transactions

### [PostgreSQL Managé](/managed_postgresql)
- Nouvelle architecture reposant sur l'opérateur Kubernetes CloudNative-PG et le plugin de sauvegarde Barman Cloud
- Trois modèles de déploiement : StandAlone en instance unique, Replica en trois instances répliquées de façon asynchrone avec bascule automatique, et Entreprise en trois instances répliquées de façon synchrone sur deux nœuds au minimum, la durabilité étant garantie sans blocage en cas d'indisponibilité d'un nœud
- Déploiement déclaratif par ressources personnalisées Kubernetes, utilisable via Terraform ou Helm, et export natif des métriques vers Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organisation](/console/iam/concepts)
- Vous pouvez désormais créer un tenant directement depuis la page Tenants, en sélectionnant les produits associés

### [Console — Activités](/console)
- Les journaux d'activité peuvent désormais être filtrés par module

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- L'adresse IP publique est désormais affichée dans la liste des interfaces réseau d'une machine virtuelle raccordée à un VPC
- Un onglet « Santé » est désormais disponible dans le détail d'une machine virtuelle, accessible depuis la liste

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Vous pouvez désormais commander une réplication VMware entre zones de disponibilité

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- La liste des interfaces réseau d'une machine virtuelle raccordée à un VPC affiche désormais l'adresse IP publique
- Un onglet « Santé » est désormais disponible dans le détail d'une machine virtuelle ouvert depuis la liste

### [VM Instances](/public_cloud/vm_instances)
- L'adresse IP publique est désormais affichée dans la liste des adaptateurs réseau d'une instance raccordée à un VPC
- Un onglet « Santé » est désormais disponible dans le détail d'une instance, accessible depuis la liste

### [Housing (Colocation)](/housing)
- Les commandes Colocation sont désormais disponibles : réservation d'emplacement, installation et dérackage d'équipements
- Les commandes Colocation d'intervention sont désormais disponibles : accompagnement technique et smart hands
- Les commandes Colocation de câblage et de décâblage (CPE) sont désormais disponibles
- Les commandes Colocation non prises en charge par la console sont désormais clairement signalées, avec une invitation à contacter le support

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- La création d'une instance repose désormais sur la sélection d'une image système, qui remplace les modèles

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Lors de la configuration des cœurs par socket d'une machine virtuelle OpenIaaS, la topologie processeur (nombre de sockets et cœurs par socket) est désormais affichée explicitement

### [LLMaaS](/llmaas)
- Le montant minimum d'un crédit LLMaaS est abaissé à 100 €

## v4.45.3 — 2026-07-21

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Lors du déploiement d'une machine virtuelle, un message « Aucun modèle disponible » s'affiche désormais lorsque le catalogue est vide

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Lors du déploiement d'une machine virtuelle, un message « Aucun modèle disponible » est désormais affiché lorsque le catalogue est vide

## v4.45.2 — 2026-07-17

### [Console](/console)
- Améliorations techniques mineures

## v4.45.0 — 2026-07-10

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Pendant une opération bloquante, les machines virtuelles affichent désormais un statut explicite : sauvegarde, snapshot ou restauration en cours
- L'édition du CPU s'adapte désormais à l'option d'ajout de CPU à chaud (CPU hot add) et à l'état de la machine virtuelle

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Pendant une opération bloquante, les machines virtuelles affichent désormais un statut explicite (sauvegarde, snapshot ou restauration en cours)
- Le détail d'une machine virtuelle présente désormais un résumé d'usage (CPU, RAM, stockage)

### [VM Instances](/public_cloud/vm_instances)
- Les instances affichent désormais un statut explicite (sauvegarde, snapshot ou restauration en cours) pendant une opération bloquante
- Les métriques d'usage instantané (CPU, RAM, stockage) sont désormais affichées pour chaque instance
- L'unicité du nom est désormais contrôlée à la création comme à la restauration d'une instance

### [Réseau](/network/network_overview)
- Lors d'une commande comportant une étape de propagation, les nouveaux réseaux ne sont créés qu'à la validation finale de la commande

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- Le type de réseau (backbone privé) est désormais affiché sur les adaptateurs réseau d'une instance, y compris sans la fonctionnalité VPC

## v4.44.1 — 2026-07-02

### [Console](/console)
- Améliorations techniques mineures

## v4.44.0 — 2026-07-02

### [Commandes](/console/orders)
- Les actions de provisionnement d'infrastructure tiennent désormais compte des rôles métier (calcul, réseau, VPC, bare metal…) en complément des droits de commande

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Le suivi de l'envoi des fichiers ISO et OVF a été amélioré et il est désormais possible d'annuler un envoi en cours

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Le suivi de l'envoi des fichiers ISO et XVA est amélioré et il est désormais possible d'annuler un envoi en cours

### [VM Instances](/public_cloud/vm_instances)
- Les tailles de disque n'acceptent plus de valeurs décimales, à la création d'une instance comme à l'ajout ou à l'extension d'un disque
- Les indicateurs de traitement des instances et de leurs ressources sont désormais correctement rétablis après un rafraîchissement de la page

### [VPC](/network/vpc)
- Depuis la carte réseau d'une machine virtuelle rattachée à un réseau VPC, vous accédez désormais directement au VPC concerné (VMware, OpenIaaS et VM Instances)
- Certaines commandes VPC peuvent désormais être passées en parallèle : ajout d'une passerelle pendant la création d'un réseau privé (et inversement), et plusieurs suppressions simultanées de réseaux privés

## 2026-06-30 — API Métriques

### [Métriques](/console/metrics/concepts)
- Un jeton d'accès peut désormais vérifier la disponibilité du service de métriques via le point d'API `HEAD /v1/configuration`

## v4.43.0 — 2026-06-30

### [Console](/console)
- Les sélecteurs de réseaux distinguent désormais visuellement les réseaux VPC et Backbone privé
- Un tutoriel interactif est désormais disponible sur la page Utilisateurs

### [Console — Activités](/console)
- Vous pouvez désormais consulter le détail d'une activité en dépliant sa ligne dans les listes Récents et Archivés
- Chaque activité dispose désormais d'une page de détail dédiée, accessible par lien direct
- Le détail d'une activité est désormais accessible depuis les notifications de succès et d'échec
- Vous pouvez désormais consulter le JSON complet d'une activité, le copier ou le télécharger
- La liste des activités archivées peut désormais être triée par date de création

### [Commandes](/console/orders)
- L'affichage de la progression d'une commande a été repensé

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Le détail d'une machine virtuelle s'affiche désormais dans une nouvelle vue
- Lors de la modification à chaud, la cohérence entre CPU et cœurs par socket est contrôlée : des avertissements sont affichés et les valeurs invalides ne sont pas acceptées

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Vous pouvez désormais demander la suppression d'un environnement IaaS

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Une nouvelle vue de détail est disponible pour les machines virtuelles
- Vous pouvez désormais filtrer la liste des machines virtuelles par zone de disponibilité (AZ)

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- La page d'un Storage Repository affiche désormais la date de prise du snapshot d'un disque

### [VM Instances](/public_cloud/vm_instances)
- Le détail d'une instance s'affiche dans une nouvelle vue
- Le bouton « Lancer une sauvegarde maintenant » est désormais désactivé lorsque la sauvegarde n'est pas disponible

### [VPC](/network/vpc)
- La description de l'adresse IP publique est désormais affichée lors de son association à un réseau privé

### [Object Storage](/storage/oss)
- Vous pouvez désormais ajouter une description aux adresses IP autorisées (whitelist) d'un bucket

## v4.42.0 — 2026-06-22

### [Console](/console)
- La section « Confidentialité » a été mise à jour

### [Object Storage](/storage/oss)
- La disponibilité du certificat TLS wildcard pour l'accès S3 en host-style est désormais indiquée
- Vous pouvez désormais déposer un fichier sur S3 à partir d'une URL pré-signée
- Vous pouvez désormais activer le versioning sur un bucket
- Vous pouvez désormais gérer les versions d'un fichier

## v4.41.1 — 2026-06-11

### [Commandes](/console/orders)
- Le maximum disponible lors de la commande d'un Block Storage a été mis à jour

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Les messages relatifs aux stocks sont désormais plus précis lors de la commande d'hyperviseurs ou de l'augmentation de la RAM d'un cluster

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Lors de l'ajout d'un disque existant à une machine virtuelle, l'UUID du disque est désormais affiché lorsque plusieurs disques portent le même nom

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Un avertissement est désormais affiché lors de la demande de mise à jour de l'hôte maître d'un pool

### [VPC](/network/vpc)
- La commande d'un VPC requiert désormais qu'une zone de disponibilité OpenIaaS soit déployée

## 2026-06-06 — Serveur MCP de la Console

- Ressource d'aide à l'authentification décrivant l'obtention d'un jeton d'accès personnel et le format d'en-tête attendu ; les erreurs d'authentification en indiquent désormais la cause et la marche à suivre
- Changement de configuration à impact : l'URL de l'API renseignée dans la configuration du serveur doit désormais inclure le segment `/api`, à mettre à jour avant le déploiement de cette version sous peine d'erreurs 404. L'URL est contrôlée au démarrage et l'infrastructure de clés publiques privée est prise en charge

## 2026-06-05 — Serveur MCP de la Console

- Consultation du nom et de la version du serveur déployé

## v4.40.0 — 2026-06-02

### [Console](/console)
- Un parcours d'accueil interactif est désormais disponible

### [Console — Organisation](/console/iam/concepts)
- Le gestionnaire de coûts est désormais disponible dans la vue organisation
- La vue organisation bénéficie désormais d'un affichage dédié

### [Commandes](/console/orders)
- L'étape réseau n'apparaît plus dans les commandes lorsque seul le produit VPC est activé

### [Support](/console)
- Les plans et les contacts de support ont été mis à jour

### [Tickets de support](/console)
- Les fonctionnalités d'infogérance ont été retirées des tickets de support

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Les fonctionnalités de la bibliothèque de contenu public ont été retirées

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- La valeur par défaut de l'étape CloudInit a été mise à jour pour les déploiements OpenIaaS depuis la Marketplace
- L'envoi de caractères spéciaux depuis le presse-papier de la console d'une machine virtuelle a été amélioré

### [Réseau](/network/network_overview)
- Vous pouvez désormais supprimer la description d'une adresse IP
- Vous pouvez désormais renseigner le champ `description` lors de la création d'un réseau virtuel
- Vous pouvez désormais renseigner le champ `description` lors de la modification d'un réseau virtuel

### [VPC](/network/vpc)
- La description d'une IP flottante VPC est désormais affichée
- Vous pouvez désormais modifier la description d'une IP flottante VPC

## 2026-05-25 — Serveur MCP de la Console

- Chaque refus de permission indique désormais le produit concerné et le nom exact de la permission à activer sur le jeton d'accès personnel

## 2026-05-24 — Serveur MCP de la Console

- Gestion du support depuis un agent : liste et détail des tickets, création, commentaire, clôture, consultation des maintenances planifiées et de leurs catégories, incidents du tenant et incidents de la plateforme
- Option de destruction après démarrage sur le déploiement depuis le Marketplace
- Parcours guidé de déploiement d'une machine virtuelle Linux
- Ressources consultables directement : glossaire des termes IaaS OpenSource, topologie d'un pool réunissant hôtes, dépôts de stockage, réseaux et indicateurs en une seule lecture, et catalogue Marketplace filtré sur l'IaaS OpenSource

## 2026-05-23 — Serveur MCP de la Console

- Parcours du catalogue Marketplace avec filtres, et fiches techniques IaaS OpenSource (XVA) et VMware (OVF) détaillant processeurs, mémoire, disques et noms exacts des interfaces réseau
- Déploiement d'une machine virtuelle IaaS OpenSource depuis un élément du catalogue, idempotent par nom
- Pilotage de l'alimentation des machines virtuelles IaaS OpenSource — allumage, extinction, redémarrage, pause, suspension et reprise — idempotent par état
- Suivi des opérations longues via les activités

## 2026-05-22 — Serveur MCP de la Console

- Consultation étendue de l'IaaS OpenSource : pools, hôtes, machines virtuelles, snapshots, adaptateurs réseau avec détection des adresses MAC en doublon, disques virtuels et statut de réplication, toutes ces opérations étant en lecture seule
- Filtres applicables côté serveur sur l'ensemble de ces listes

## v4.39.2 — 2026-05-22

### [Réseau](/network/network_overview)
- Vous pouvez désormais supprimer l'enregistrement PTR d'une adresse IP publique ou d'une adresse IP d'interconnexion

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Les règles de nommage des snapshots de machine virtuelle ont été modifiées

### [Bare Metal](/iaas_bare-metal)
- Vous pouvez désormais modifier la description d'une lame

### [Réseau](/network/network_overview)
- Vous pouvez désormais modifier l'enregistrement PTR d'une adresse IP d'interconnexion

## v4.39.0 — 2026-04-23

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Les disques existants sont désormais affichés lors de l'ajout d'un nouveau disque
- Lors du déplacement (vMotion) d'une machine virtuelle en mode « ressource de calcul uniquement », il est désormais possible de choisir un cluster

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Les disques existants sont désormais affichés lors de l'ajout d'un nouveau disque

### [VM Instances](/public_cloud/vm_instances)
- La liste des VM Instances peut désormais être exportée au format CSV
- L'affichage de la fréquence d'une politique de sauvegarde a été revu

### [Bare Metal](/iaas_bare-metal)
- La sélection des réseaux est désormais obligatoire lors de la propagation d'un réseau sur un Bare Metal

## 2026-04-20 — Bases de données managées (Preview)

### [MariaDB Managé](/managed_mariadb)
- Publication des paramètres moteur associés à chaque gabarit d'instance : `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` et `table_open_cache`
- Révision des gabarits d'instance : le plafond est ramené à 3X-Large (8 vCPU et 32 Gio de mémoire) et le stockage maximum extensible à chaud passe de 512 Gio à 128 Gio

### [PostgreSQL Managé](/managed_postgresql)
- Publication des paramètres moteur associés à chaque gabarit d'instance : `shared_buffers`, `effective_cache_size`, `work_mem` et `max_connections`
- Révision des gabarits d'instance : le plafond est ramené à 3X-Large (8 vCPU et 32 Gio de mémoire) et le stockage maximum extensible à chaud passe de 512 Gio à 128 Gio

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- Les réseaux proposés sont désormais filtrés à la création d'une instance comme à la modification d'un adaptateur réseau

## v4.38.0 — 2026-04-17

### [Identité & Accès (IAM)](/console/iam)
- Six nouvelles permissions sont disponibles : `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` et `public_cloud_vm_instances_console_access`
- Le nom du produit concerné apparaît désormais en tête de la description de chaque permission

### [Gestionnaire des coûts](/console/billing/concepts)
- L'interface du gestionnaire des coûts a été améliorée
- L'unité affichée dans les graphiques de consommation a été mise à jour

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Lors du déploiement d'une machine virtuelle, l'étape de sélection d'une image du Marketplace a été revue

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Vous pouvez désormais basculer l'affichage de la page catalogue entre grille et tableau
- L'étape de sélection d'une image Marketplace lors du déploiement d'une machine virtuelle a été mise à jour

### [VM Instances](/public_cloud/vm_instances)
- Le tableau de bord affiche désormais l'utilisation des quotas VM Instances
- Une nouvelle page présente la liste des VM Instances
- Vous pouvez désormais créer une nouvelle instance
- Vous pouvez désormais consulter et gérer les disques, les adaptateurs réseau et les snapshots d'une instance
- Vous pouvez désormais mettre à jour les capacités d'une instance et modifier son statut
- Vous pouvez désormais accéder à la console d'une instance

### [LLMaaS](/llmaas)
- L'affichage des prix dans la vue de consommation et le formulaire de rechargement de crédit ont été mis à jour

## 2026-04-15 — Bases de données managées (Preview)

### [MariaDB Managé](/managed_mariadb)
- Ouverture en Preview de MariaDB Managé : modèles StandAlone et Distributed en cluster de trois nœuds derrière un proxy, stockage répliqué sur trois zones de disponibilité et engagement de disponibilité de 99,9 %

### [PostgreSQL Managé](/managed_postgresql)
- Ouverture en Preview de PostgreSQL Managé : modèles StandAlone et Distributed en cluster de trois nœuds derrière un proxy, réplication synchrone multi-zones sans perte de données et restauration à un instant donné

## v4.37.0 — 2026-04-02

### [Gestionnaire des coûts](/console/billing/concepts)
- Ajout du montant prévisionnel sur la page de consommation pour le graphique et la tendance
- Amélioration visuelle lorsqu'il y a une erreur ou trop peu de données sur la consommation du mois en cours

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Amélioration du formulaire pour déployer une machine virtuelle depuis un item du catalogue
- Ajout de la possibilité de changer le type de visualisation (grille ou tableau) depuis la page catalogue

## v4.36.0 — 2026-03-27

### [Console](/console)
- Mise à jour des graphiques de métriques et consommation

### [Gestionnaire des coûts](/console/billing/concepts)
- Ajout de la page gestionnaire des coûts
- Possibilité de visualiser les coûts du mois en cours
- Possibilité de visualiser les coûts sur un interval de dates et de comparer les tendances

### [Commandes](/console/orders)
- Blocage de la déprovision d'un cluster d'hyperviseurs lorsqu'un cluster de stockage est attaché

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Ajout de filtres et tris sur la liste des disques depuis les détails d'un Block Storage

### [VPC](/network/vpc)
- Amélioration de l'interface sur le chargement des données dans les formulaires

## v4.35.4 — 2026-03-18

### [Console](/console)
- Amélioration de la reconnexion aux websockets

### [Support](/console)
- Ajout d'une solution de secours pour la création d'un ticket de support lorsque les websockets sont déconnectées

## v4.35.3 — 2026-03-17

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Mise à jour de la récupération des disques lors du chargement des réplicas depuis l'onglet Réplication

## v4.35.0 — 2026-03-11

### [Commandes](/console/orders)
- Ajout de la commande de suppression d'un mapping cpool/spool
- Ajout de la commande de déprovision de réseau privé VPC
- Modifications sur la commande de déprovisionnement d'un volume Bare Metal, il est possible de commander la suppression depuis la liste des volumes
- Ajout de la commande de suppression de mapping volume Bare Metal
- Ajout de la commande de déprovision de VPC
- Blocage de la déprovision d'un datastore s'il est le dernier d'un datastore cluster

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Possibilité d'ajouter une limite de RAM sur une machine virtuelle

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Mise à jour du multi vmotion VMware pour permettre de déplacer les VMs d'un cluster à un autre

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Ajout de la possibilité de mettre à jour un hôte
- Affichage de l'information des mises à jour d'un hôte

### [Réseau](/network/network_overview)
- Désactivation du bouton de suppression de propagation réseau lorsqu'aucune propagation n'est livrée

### [LLMaaS](/llmaas)
- Affichage de la consommation groupé par type de tokens

## v4.34.0 — 2026-02-18

### [Console](/console)
- Mise à jour majeure du moteur d'affichage de l'application
- Les menus VMware et OpenIaaS ne sont pas affichés lorsque seulement le module métrique est activé

### [Métriques](/console/metrics/concepts)
- Possibilité d'exporter en CSV depuis les pages Métriques VMware et OpenIaaS

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Lors d'un déplacement de machine virtuelle il n'est pas possible de sélectionner le même hôte de destination que l'hôte actuel de la machine virtuelle
- Ajout du bouton 'Nouveau catalogue' sur la page Catalogue VMware

## 2026-02-04 — Serveur MCP de la Console

- Consultation des modèles de machines virtuelles, des réseaux, des hôtes et des dépôts de stockage IaaS OpenSource

## 2026-02-03 — Serveur MCP de la Console

- Mise à disposition du serveur MCP (Model Context Protocol) de la Console, authentifié par jeton d'accès personnel
- Consultation et pilotage des machines virtuelles VMware depuis un agent : liste, détail, datacenters virtuels, allumage et extinction

## v4.33.0 — 2026-01-21

### [Commandes](/console/orders)
- Ajout de la commande de suppression d'une propagation réseau sur OpenIaaS

### [Métriques](/console/metrics/concepts)
- Ajout de filtres pour les pages de métriques VMWare et OpenIaaS

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout de la page de métriques 'Machines Virtuelles'
- Ajout de la page des détails des métriques pour chaque VM

## v4.32.0 — 2026-01-14

### [Support](/console)
- Mise à jour de la modale de fermeture d'un ticket support

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Lors de l'assignation d'une politique de sauvegarde sur un disque, il est maintenant proposé d'inventorier le disque s'il n'est pas reconnu par la solution de sauvegarde

### [Bare Metal](/iaas_bare-metal)
- La suppression d'un volume BFS sur un Bare Metal est désormais bloquée, le volume sera supprimé à la suppresion du Bare Metal
- Lors de la commande d'un Bare Metal, le premier volume est maintenant renommé 'volume BFS'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Mise à jour des explications info-bulle sur les options disponibles lors de la restauration d'une machine virtuelle

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Les snapshots liées aux politiques de sauvegardes sont désormais visibles
- Affichage de l'Host lié à l'emplacement de stockage d'un ISO lors de l'upload et depuis la page catalogue

### [Object Storage](/storage/oss)
- Affichage d'une card explicative depuis l'onglet MPU incomplets lorsque l'IP de la Console n'est pas autorisée empechant l'affichage de l'onglet

### [Marketplace](/marketplace)
- Affichage de la card erreur lors de l'accès à une page de la marketplace n'existant pas

## v4.30.1 — 2025-12-16

### [Console](/console)
- Amélioration de l'affichage d'erreurs vide en affichant par défaut le status HTTP remonté

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Possibilité d'associer une IP statique à une adresse MAC personnalisée

### [LLMaaS](/llmaas)
- Sur les métriques de consommation, filtrage des séries ayant des valeurs à 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Amélioration de la synchronisation des actions sur les pages VPCs
- Ajout de l’association d’une IP statique à une IP publique depuis la liste des IPs statiques

### [Stockage](/storage/oss)
- Ajout des MPU incomplets depuis la page d'un bucket
- Possibilité de supprimer un MPU incomplet

## v4.28.0 — 2025-11-21

### [Console](/console)
- Ajout de la possibilité d'afficher des messages d'information globaux visibles sur l’ensemble de l’application

### [Commandes](/console/orders)
- Possibilité de commander un ajout de crédit LLMaaS pour le tenant
- Possibilité de commander un VPC
- Possibilité de commander un réseau privé dans un VPC
- Possibilité de commander une IP publique pour le produit VPC
- Possibilité d'activer la gateway pour un VPC
- Ajout de la possibilité de commander la suppression d’un tenant

### [Métriques](/console/metrics/concepts)
- Amélioration de l'affichage des tooltips sur les graphiques de métriques : il est désormais possible de cliquer sur un point pour figer la tooltip et consulter l'ensemble des données

### [Réseau](/network/network_overview)
- Regroupement des pages Réseaux et Internet sous un produit unique : Backbone privé
- Ajout de la gestion de l'enregistrement PTR lors de la modification d’une IP publique
- Blocage du partage pour certains types de réseaux

### [VPC](/network/vpc)
- Intégration du produit VPC
- Ajout d'une page listant les VPC
- Ajout d'une page Détails d'un VPC
- Possibilité de gérer les réseaux privés, les IP publiques et la gateway d'un VPC
- Possibilité d'associer une IP statique d'un réseau privé VPC à un adaptateur réseau VMware ou OpenIaaS
- Possibilité d'associer une IP statique avec une IP publique d'un VPC

### [LLMaaS](/llmaas)
- Ajout d'un onglet Facturation sur la page LLMaaS pour les tenants avec le prépaiement activé
- Affichage du crédit restant pour les tenants en mode prépaiement, sur le tableau de bord et depuis l’onglet Facturation

## v4.27.0 — 2025-11-12

### [Commandes](/console/orders)
- Ajout d'une vérification concernant le stock disponible lors de la commande de ressources
- Ajout d'un filtre par type de commande et par produit sur la liste des commandes

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Amélioration de la console des machines virtuelles. Meilleure gestion clavier, et ajout d'un presse-papier

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Ajout d'une alerte sur le dashboard pour les VSnap de sauvegarde SPP ayant une occupation trop élevée

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Amélioration de la console des machines virtuelles. Meilleure gestion clavier, et ajout d'un presse-papier

### [Marketplace](/marketplace)
- Ajout de la possibilité d'afficher les details techniques d'une image

## v4.26.5 — 2025-11-04

### [Console](/console)
- Amélioration de la taille des graphiques du tableau de bord lors du redimensionnement de la fenêtre

## v4.26.3 — 2025-10-31

### [Métriques](/console/metrics/concepts)
- Modification du nom des exports de métriques présentées dans les graphiques

## v4.26.0 — 2025-10-22

### [Console](/console)
- Ajout d'un bouton pour copier l'UUID du périmètre actuel depuis le profil utilisateur
- Refonte complète du Tableau de bord
- Ajout d'une reconnexion automatique au suivi activités lorsque la connexion est interrompue

### [Commandes](/console/orders)
- Mise à jour des formulaires de commande pour les ajouter aux différentes pages concernées (exemple nouveau Datastore depuis la page Stockage)

### [Support](/console)
- Ajout de l’adresse email de la personne ayant clôturé le ticket dans la notation du ticket support

### [Métriques](/console/metrics/concepts)
- Refonte de la récupération des métriques VMware, l'URL de la page est désormais /iaas/metrics
- Ajout d'un onglet métriques d'infrastructure VMware sur le Calcul
- Ajout d'un onglet métriques d'infrastructure VMware sur le Stockage
- Ajout d'une page métrique pour OpenIaaS
- Ajout d'un onglet métriques d'infrastructure OpenIaaS sur le Calcul
- Ajout d'un onglet métriques d'infrastructure OpenIaaS sur le Stockage

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajout des nouvelles clés extra_config (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blocage de la sélection d’un hostcluster sans host actif
- Lors de la création d'une machine virtuelle VMware le choix du Vcenter se fait désormais en fonction de la zone de disponibilité sélectionnée
- Ajout de limites sur les noms et descriptions lors de l’upload d'un fichier sur VMware

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Lors de l’ajout d’un disque OpenIaaS, les stockages n'appartenant pas au Pool de la machine virtuelle sont désormais filtrés
- Lors d'un snapshot, l'option pour prendre la mémoire est désormais décochée par défaut

### [IaaS OpenSource — Sauvegarde](/iaas_opensource)
- Ajout de la possibilité d'exécuter une sauvegarde depuis l'onglet sauvegardes d'une machine virtuelle OpenIaaS

### [Réseau](/network/network_overview)
- Suppression de la contrainte empêchant la sélection de plusieurs types de réseaux sur la page des réseaux virtuels

### [Object Storage](/storage/oss)
- Optimisation de la récupération des fichiers d'un bucket

### [PaaS OpenShift](/paas_openshift)
- Ajout d'une page listant les clusters OpenShift
- Ajout d'une page details d'un cluster OpenShift

### [Marketplace](/marketplace)
- Ajout d’un filtre par UUID et possibilité de copier l’UUID d’un item

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Mise à jour de l'utilisation de la configuration avancée et des propriétés OVF lors du déploiement d'une machine virtuelle VMware

## v4.24.0 — 2025-09-24

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Possibilité de déployer une image de machine virtuelle depuis la liste des machines virtuelles

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Possibilité de déployer une image de machine virtuelle depuis la liste des machines virtuelles

### [Réseau](/network/network_overview)
- Ajout d'une validation pour bloquer la suppression du partage d'un réseau si le réseau est propagé dans un autre Tenant

### [Marketplace](/marketplace)
- Ajout du produit Marketplace
- Ajout d'une page listant les solutions disponibles dans le catalogue
- Ajout d'une page pour consulter les détails d'une solution
- Possibilité de déployer une image de machine virtuelle sur un environnement OpenIaaS ou VMware depuis les détails d'une solution
- Possibilité de contacter un partenaire pour une solution de services managés

## v4.23.0 — 2025-09-12

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajout du support de 4 nouvelles valeurs extra-configs

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ne pas afficher l’alerte HA sur les VMs concernées lorsque l’ISO local n’est pas monté
- Lors de l’ajout ou du redimensionnement d’un disque, indiquer si le SR en lien est utilisé pour une configuration de réplication

### [IaaS OpenSource — Sauvegarde](/iaas_opensource)
- Ajout du nom de l’AZ sur le rapport de sauvegarde

### [Object Storage](/storage/oss)
- Mise à jour des informations concernant le cycle de vie d'un bucket

### [LLMaaS](/llmaas)
- Ajout du produit LLMaaS
- Ajout de la liste des modèles disponibles
- Ajout de la liste des clés API avec possibilité d’en créer
- Ajout de la consommation par modèles et par clés
- Ajout des détails d’un modèle
- Possibilité de tester un modèle

## v4.22.1 — 2025-09-10

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Modification des alertes concernant la configuration de format de disque choisie, lors d'un VMotion incluant le storage

## v4.22.0 — 2025-09-02

### [Commandes](/console/orders)
- Ajout de la commande d'une suppression de propagation de réseau depuis la page de toutes les commandes, l'ensemble des commandes disponibles sont désormais accessibles depuis cette page

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Mise à jour des conditions sur le changement du format de disque lors du déplacement d'une machine virtuelle et ajout d'informations sur le format du disque actuel lors d'une configuration par disque

## v4.21.0 — 2025-08-22

### [Console](/console)
- Mise à jour de l'affichage lorsqu'aucune donnée n'est créée/provisionnée ou lorsqu'une erreur se produit lors de l'obtention d'informations.

### [Support](/console)
- Ouverture des modales de support avec le service associé pré-sélectionné
- Ajout d'un badge dans le menu et la navbar lorsqu'un ticket de support nécessite une réponse

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajout de la possibilité d’exporter en CSV la liste des réplicas VMware
- Amélioration du slider de sélection de la RAM sur certaines commandes
- Ajout de la gestion des options Static differed and immediate pour le vMotion

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Blocage de la suppression d’un cluster non vide ou avec des hôtes/datastores non en maintenance

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout de la possibilité d’exporter en CSV la liste des réplicas OpenIaaS et des politiques associées
- Ajout de précisions sur les outils utilisés par les machines virtuelles (pvDrivers, managementAgent et tools)
- Ajout de vérifications pour la haute disponibilité (HA)

### [Réseau](/network/network_overview)
- Modification de la sélection d'une adresse IPv4 avec une liste disponible

## v4.20.0 — 2025-07-29

### [Commandes](/console/orders)
- Ajout d'informations concernant les stocks limités et en rupture concernant les ressources de calcul lors de la commande d'une nouvelle zone de disponibilité

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajout d'une option VMware Tools pour synchroniser l'heure avec l’hôte
- Mise à jour des conditions sur le chiffrement d'une machine virtuelle

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Retrait des informations de dernière exécution des politiques de réplication provoquant des lenteurs
- Gestion du TX checksumming pour les adaptateurs réseau
- Ajout d'un avertissement sur la réplication OpenIaaS si le nombre d'AZ est inférieur à 2
- Ajout de la haute disponibilité (HA) pour les pools et machines virtuelles

## v4.19.0 — 2025-07-24

### [Commandes](/console/orders)
- Mise à jour de la commande d’IPs publiques avec la possibilité de commander un préfixe IPv6
- Mise à jour de l’affichage des commandes disponibles lorsqu’aucun environnement n’est provisionné

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajout d’un filtre réplication sur la liste des machines virtuelles
- Mise à jour de la modale de création d’une machine virtuelle

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout d’un filtre réplication sur la liste des machines virtuelles

### [Réseau](/network/network_overview)
- Mise à jour de la page Internet avec l’ajout de la gestion des IPv6

## v4.18.0 — 2025-07-15

### [Console](/console)
- Mise à jour de l'affichage lorsqu'aucune donnée n'est créée/provisionnée ou lorsqu'une erreur se produit lors de l'obtention d'informations.

### [Commandes](/console/orders)
- Mise à jour des étapes internet lors de la commande d'une nouvelle zone de disponibilité ou d'un nouveau pool

### [Support](/console)
- Ajout d'un service sécurité pour chaque produit lors de la création d'un ticket support

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajout d'un lien d'un ISO monté sur un controleur vers l'élément correspondant dans le catalogue

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout d'une page Réplication OpenIaaS avec la liste des réplicas et les politiques de réplication
- Possibilité d'ajouter et de supprimer une configuration de réplication à une machine virtuelle OpenIaaS
- Possibilité de créer et supprimer une politique de réplication
- Possibilité de restaurer un réplica
- Possibilité d'exporter les machines virtuelles au format CSV.

## v4.17.0 — 2025-06-20

### [Commandes](/console/orders)
- Possibilité de commander un Pool OpenIaaS
- Possibilité de commander l'association d'un volume existant à un Bare Metal existant depuis la page d'un Bare Metal, depuis la page d'un volume et depuis la page des commandes

### [Support](/console)
- Possibilité de supprimer un fichier sur un ticket support
- La description sur la satisfaction à la fermeture d'un ticket est maintenant optionnelle

## v4.16.0 — 2025-06-04

### [Console](/console)
- Ajout des traductions anglaises sur la page des rapports de consommation du menu commande

### [Commandes](/console/orders)
- Possibilité de commander l'augmentation de taille d'un volume bare metal
- Possibilité de commander l'augmentation de taille d'un Block Storage OpenIaaS

### [Support](/console)
- Refonte de la création d'un ticket support
- Interprétation du markdown sur un ticket support et mise à jour de l'ordre d'affichage des commentaires
- Ajout d'un feedback lors de la fermeture d'un ticket support
- Mise à jour de l'affichage des pictogrammes selon l'impact d'un incident global

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajout d'une option pour conserver la configuration d'une machine virtuelle lors d'une restauration en Production sur le cluster d'origine

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout d'un message de warning en cas de manque d'espace disque sur un Block Storage (90% utilisé) et avertissement lors des commandes

### [Object Storage](/storage/oss)
- Ajout de la description des rôles S3 lors de l'assignation sur un bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Affichage d'une erreur lorsqu'un réseau est mal configuré sur un adaptateur réseau d'une machine virtuelle, empechant également le démarrage de la machine virtuelle

## v4.15.0 — 2025-05-13

### [Console](/console)
- Ajustement des unités affichées sur les ressources infrastructures: GiB (Gibibyte) au lieu de GB (Gigabyte)

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Possibilité de déplacer un disque OpenIaaS
- Possibilité de connecter et déconnecter un disque OpenIaaS
- Affichage du statut connecté/déconnecté d'un disque
- Possibilité de copier l'UUID d'un disque, réseau virtuel ou snapshot
- Possibilité de choisir le nom d'une machine virtuelle lors d'un déploiement de fichier XVA
- Ajout de la possibilité d'assigner une politique de sauvegarde au moment de démarrer une machine virtuelle si elle n'en a aucune.

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Ajout d'actions disponibles sur un disque depuis un Block Storage

### [Bare Metal](/iaas_bare-metal)
- Ajout des adresses MAC sur la table des interfaces d'un Bare Metal
- Ajout d'une page sur les détails d'un volume Bare Metal

## v4.14.0 — 2025-04-28

### [Console](/console)
- Possibilité d’épingler des pages dans le menu
- Mise à jour du rendu des documentations API

### [Commandes](/console/orders)
- Possibilité de commander la suppression d'un Block Storage OpenIaaS
- Possibilité de commander l'ajout d'un Block Storage à un Pool OpenIaaS
- Possibilité de commander la suppression d'un Host OpenIaaS
- Ajout de l'information du produit concerné sur la liste des commandes
- Possibilité de commander l’ajout d’un Host à un pool OpenIaaS

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Possibilité de mettre un Host en maintenance
- Possibilité d’éditer la description d’un modèle
- Possibilité de choisir un Host au démarrage d’une machine virtuelle
- Ajout d’une règle d’unicité sur le nom des machines virtuelles OpenIaaS

## v4.13.0 — 2025-04-08

### [Console](/console)
- Ajout de statistiques et informations de contact sur la page Support

### [Commandes](/console/orders)
- Refonte de l'affichage des détails d'une commande
- Refonte de l'affichage des choix de commandes
- Mise à jour de l'affichage pour commander le premier baremetal lorsqu’il n’y en a aucun
- Mise à jour de la commande d'un Bare Metal avec la selection de la propagation des réseaux sur les interfaces du Bare Metal
- Possibilité de propagager un VLAN sur un Bare Metal
- Possibilité d'ajouter un volume à un baremetal
- Possibilité de déprovisionner un volume d'un Bare Metal
- Possibilité de déprovisionner un Bare Metal

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajout d'un bouton copier UUID sur les réseaux et catalogues VMware

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout d'un bouton copier UUID sur les réseaux et catalogues OpenIaaS
- Ajout d'un bouton copier UUID sur un Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Ajout de l'affichage des interfaces réseau et les réseaux qui y sont propagés sur un baremetal
- Ajouter les actions allumer, redémarrer et éteindre un baremetal

### [Réseau](/network/network_overview)
- Possibilité de visualiser les propagations sur un Bare Metal d'un réseau

## v4.12.0 — 2025-03-25

### [Console](/console)
- Possibilité de supprimer une IP whitelist depuis la page accès

### Étiquettes
- Ajout des tags sur les machines virtuelles OpenIaaS

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Mise à jour de la récupération des recommandations API sur les règles affinité/anti-affinité d'un HostCluster

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Afficher l'importation d'un XVA OpenIaaS sur la liste des téléchargements
- Possibilité d'attacher un disque existant à une machine virtuelle
- Possibilité de détacher un disque xistant d'une machine virtuelle

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Mise à jour de l'affichage des disques d'un Block Storage OpenIaaS

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Mise à jour du message d'erreur lors de l'accès aux fichiers d'un bucket Object Storage

## v4.11.1 — 2025-03-12

### [Commandes](/console/orders)
- Mise à jour des noms des zones de disponibilités lors d'une commande
- Modification du minimum de datastore lors de la commande d'un datastoreCluster

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Lorsque le champ label des hostCluster et datastoreCluster est modifié à vide, le nom technique sera appliqué par défaut

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Lorsque le champ label des pools est modifié à vide, le nom technique sera appliqué par défaut
- Ajout d'une bulle informative sur la page catalogue et lors de l'import ISO pour indiquer que le XVA est pris en charge lors de la création d’une machine virtuelle

## v4.11.0 — 2025-03-10

### [Commandes](/console/orders)
- Mise à jour des types de réseaux autorisés lors de la création d’une AZ
- Mise à jour des ressources minimum à provisionner lors de la commande d'une nouvelle zone de disponibilité

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Affichage du nom de la machine virtuelle dans l’onglet de la console pour VMware

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Ajout de la gestion des labels sur les datastore cluster et host cluster VMware

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Permettre le déploiement d’une machine virtuelle via import XVA pour OpenIaaS
- Ajout de la gestion des labels sur les pools OpenIaaS
- Affichage du nom de la machine virtuelle dans l’onglet de la console pour OpenIaaS

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Mise à jour des informations CPU des hôtes et pools OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Ajout des IOPS/TO sur les volumes baremetal

## v4.10.0 — 2025-03-04

### [Console](/console)
- Mise à jour des liens vers la nouvelle documentation publique

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout d’une alerte pour informer les utilisateurs en cas de doublon d’adresses MAC sur la liste des machines virtuelles et lors de la création ou modification d'adaptateurs réseaux
- Ajout d’une option pour forcer l'arrêt ou le redémarrage d'une machine virtuelle
- La mémoire ne sera plus incluse par défaut lors d'un snapshot si la machine virtuelle n’est pas allumée
- Possibilité de renommer et redimensionner un disque
- Ajout de la suppression des ISO et modèles depuis la page catalogue
- Ajout de la possibilité de supprimer le disque de configuration 'Cloud Init' lors du déploiement d’une machine virtuelle

## v4.9.1 — 2025-02-27

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Possibilité d'éditer un adaptateur réseau sur une machine virtuelle allumée

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout de restrictions sur les caractères autorisés dans les noms des machines virtuelles OpenIaaS

## v4.9.0 — 2025-02-21

### [Console](/console)
- Rendre cliquables les noms dans les tableaux lorsqu'une page liée existe
- Améliorer l'ouverture des consoles pour éviter l'ouverture de plusieurs onglets si plusieurs fenêtres sont ouvertes sur la même page
- Afficher une erreur lors de l'ouverture d'une console si le navigateur n'autorise pas les redirections sur l'application

### [Métriques](/console/metrics/concepts)
- Afficher l'unité de la RAM sur la page santé des machines virtuelles

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Bloquer la création d'une machine virtuelle si la place sur les Block Storage sélectionnés n'est pas suffisante
- Vider les adresses MAC par défaut lors de la création d'une machine virtuelle OpenIaaS

### [Stockage](/storage/oss)
- Pouvoir copier dans le presse-papier un point de terminaison S3

## v4.8.0 — 2025-02-14

### [Commandes](/console/orders)
- Ajout de la commande de propagation d'un réseau sur des Pools OpenIaaS
- Ajout des commandes de propagation réseau dans la page de toutes les commandes

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Affichage du nombre de disques affectés et disponibles par contrôleur sur une machine virtuelle
- Mise à jour des conditions sur le nombre de disques possibles à ajouter sur des controleurs SCSI Para Virtual en fonction de la version hardware de la machine virtuelle

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Possibilité d'ajouter des options Cloud Init à la création d'une machine virtuelle OpenIaaS
- Affichage des disques sur la page d'un Block Storage
- Possibilité de mettre à jour la configuration du boot firmware d'une machine virtuelle OpenIaaS
- Pouvoir cloner une machine virtuelle OpenIaaS

### [Réseau](/network/network_overview)
- Mise à jour de la visualisation des propagations d'un réseau et ajout de propagations OpenIaaS
- Mise à jour de la création d'un réseau et possibilité de propager le réseau sur l'infrastructure OpenIaaS dès sa création

## v4.7.0 — 2025-02-03

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- L'export en OVF est bloqué quand la machine virtuelle est chiffrée

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Afficher les relations datastores clusters et host clusters dans les pages Calcul et Stockage

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Modification de l'option de démarrage après restauration pour un environnement SecNumCloud lors de la restauration en mode clone ou prodution sur un host ou cluster alternatif

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajouter les boutons monter et démonter un ISO OpenIaaS dans la barre d'actions d'une machine virtuelle

### [Réseau](/network/network_overview)
- Amélioration de l'affichage des propagations des réseaux lorsque des demandes de suppression de propagations sont en cours

## v4.6.0 — 2025-01-30

### [Console](/console)
- Retirer les caractères affichés lors de l'auto-complétion sur l'ajout d'observateurs à la création d'un ticket support
- Mise à jour de l'affichage du menu et des pages disponibles pour les offres VMware et OpenIaaS sur un nouvel environnement sans zones de disponibilité provisionnée

### [Console — Notifications](/console)
- Mise à jour de l'affichages des abonnements aux notification depuis la page profil

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajouter la possibilité de chiffrer une machine virtuelle

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout de l'export en modèle d'une machine virtuelle

## v4.5.0 — 2025-01-17

### [Console](/console)
- Ajout de la description à la création et l'affichage des whitelists
- Possibilité de modifier la description d'une whitelist

### [Commandes](/console/orders)
- Ajout d'une commande nouvelle Zone de Disponibilité OpenIaaS
- Ajout d'une commande pour le Bare Metal
- Lier un cluster d'hyperviseur à un cluster de stockage

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Afficher la taille restante entre parenthèses dans les arbres de selection de stockage

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Ajout du pire cas d'allocation mémoire sur un hostCluster VMware

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout de l'upload ISO sur les catalogues OpenIaaS
- Ajout du déplacement des machines virtuelles OpenIaaS
- Pouvoir choisir les disques et réseaux à la création d'une machine virtuelle OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Ajout d'une page listant les Bare Metal
- Ajout d'une page listant les volumes Bare Metal
- Ajout d'une page avec les détails d'un Bare Metal
- Ajout de la possibilité d'ouvrir une console Bare Metal

## v4.4.0 — 2025-01-13

### [Console](/console)
- Modifications techniques apportées lors du processus d'authentification

## v4.3.0 — 2024-12-19

### [Console — Activités](/console)
- Ajout des liens "accéder à la ressource" sur les activités liées à XOA et Object-Storage

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajout des tags et l'IP de la machine virtuelle à l'export CSV des machines virtuelles

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Proposer d'exporter uniquement les éléments filtrés sur l'export CSV des rapports de sauvegarde dans le sous-onglet machines virtuelles

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Ajout des VM-templates XOA depuis la page catalogues

### [Object Storage](/storage/oss)
- Pouvoir créer et réinitialiser la clé d'accès global depuis les comptes de stockage

## v4.2.0 — 2024-12-10

### [Console](/console)
- Ajouter de redirections vers la status page

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Les éléments déjà présents dans 'Mon catalogue' restent désormais affichés dans 'Catalogue publique'
- Ajouter de redirections sur les composants cités dans un item du catalogue VMware
- Mise à jour de l'affichage de la RAM sur un cluster d'hyperviseurs
- Suppression de l'option de répliquer automatiquement les nouveaux disques entraînant des erreurs
- Ajout de validations sur la réplication d'une machine virtuelle
- Ajout de nouvelles extra config PCIPassthru depuis la configuration avancée d'une machine virtuelle pour la gestion GPU
- Possibilité d'ajouter un contrôleur PCI sur les machines virtuelles

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Affichage des recommandations et pannes DRS depuis un cluster d'hyperviseurs
- Nouveau statut sur les hyperviseurs et datastores lorsqu'une demande de mise en maintenance est en cours
- Ajout des informations sur le GPU d'un hyperviseur

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Retirer plusieurs options Backup non fonctionnelles sur des machines virtuelles en mode test

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout d'une page sauvegarde pour la partie sauvegardes OpenIaas listant les erreurs, les politiques, les rapports des sauvegardes et permettant la récupération de machines virtuelles supprimées

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Ajout d'une page pour lister les zones de disponibilité OpenIaas
- Ajouter une page stockage pour la partie OpenIaas
- Ajout d'une page calcul pour la partie OpenIaas

### [Housing (Colocation)](/housing)
- Modification des informations affichées depuis la page périphériques

## v4.1.1 — 2024-11-18

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Amélioration de l'édition de la mémoire, la conversion est effectuée vers l'unité avec la dernière valeur entière
- Lors d'une snapshot, le bouton pour sauvegarder la RAM est désactivé lorsque la machine virtuelle est éteinte
- Lorsque plusieurs machines virtuelles sont déroulées, la liste des disques ne s'affiche pas aussitôt

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Ajout du bouton d'export CSV dans l'onglet machines virtuelles de la page de rapports de sauvegarde

## v4.1.0 — 2024-11-13

### [Console](/console)
- Possibilité d'envoyer un fichier lors d'un feedback

### [Identité & Accès (IAM)](/console/iam)
- Désactivation de la possibilité de supprimer un propriétaire

### [Commandes](/console/orders)
- Ajout de la gestion d'ajout, de suppression et d'édition d'un datastore depuis la page des commandes
- Ajout de la possibilité de supprimer un Host

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ajout des activités de snapshots dans l'onglet snapshot d'une VM
- Affichage de la taille réelle des machines virtuelles dans l'export CSV

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Sur les pages calcul et stockage, le filtre sur les zones de disponibilités s'applique également aux onglets de cluster
- Affichage des pourcentages d'utilisation sur les barres de consommations (CPU / RAM / Stockage)

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ajout d'une validation sur la précense de politiques de sauvegarde sur l'option de démarrage automatique
- Ajout d'une option pour forcer l'arrêt/redémarrage des machines virtuelles sans guest-tools installés
- Amélioration du message d'exécution d'une politique OpenIaas sur une machine virtuelle spécifique

### [Bastion](/bastion)
- Ajout d'une validation sur le champ Host d'un équipement

## v4.0.3 — 2024-11-04

### [Console](/console)
- Améliorations et correctifs liés au nouveau design

## v4.0.2 — 2024-10-30

### [Console](/console)
- Améliorations et correctifs liés au nouveau design

## v4.0.1 — 2024-10-25

### [Console](/console)
- Améliorations et correctifs liés au nouveau design

## v4.0.0 — 2024-10-18

### [Console](/console)
- Nouveau design de la Console
- Refonte des pages infrastructure et sauvegarde

---

:::info Historique antérieur
L'historique complet des versions antérieures à v4.0 (v1.0 à v3.38.1, de février 2019 à octobre 2024) est disponible dans l'[historique Git](https://github.com/Cloud-Temple/docs) du projet.
:::
