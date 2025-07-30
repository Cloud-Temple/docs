---
title: Concepts
---

L'offre __IaaS (Infrastructure As A Service)__ de Cloud Temple est conçue pour répondre aux besoins critiques de continuité et reprise d'activité, avec un accent particulier sur les secteurs exigeants comme l'industrie, la banque et l'assurance. Basée sur des technologies de pointe, cette infrastructure garantit une disponibilité maximale et une performance optimale pour vos charges de travail critiques.

## Une plateforme technologique de confiance

La plateforme IaaS de Cloud Temple s'appuie sur des partenaires technologiques de renommée internationale :

- Calcul : __CISCO UCS__.
- Stockage : __IBM Spectrum Virtualize__, __IBM FlashSystem__ pour le stockage bloc, et __DELL ECS__ pour le stockage objet.
- Réseau : __JUNIPER__.
- Virtualisation : __Stack Opensource__, offrant une base fiable et éprouvée pour gérer vos environnements cloud.

Cette architecture repose sur le modèle __VersaStack__, une alliance entre Cisco et IBM, garantissant une compatibilité étendue avec les principaux éditeurs logiciels.

## Une infrastructure dédiée et automatisée

Bien qu'entièrement automatisée grâce à des APIs et un provider Terraform, l'offre IaaS de Cloud Temple propose une infrastructure unique :

- __Ressources dédiées__ : Les lames de calcul, volumes de stockage, et stacks logicielles (virtualisation, sauvegarde, firewalling, etc.) ne sont jamais mutualisées entre les clients.
- __Prédictibilité maximale__ : Vous maîtrisez les taux de virtualisation, la pression en IOPS sur le stockage et bénéficiez d'une facturation claire, à la consommation mensuelle.

La plateforme est qualifiée __SecNumCloud__ par l'[ANSSI](https://www.ssi.gouv.fr/), garantissant un haut niveau d'automatisation et de sécurité.

## Principales fonctionnalités

- Ressources de calcul (CPU, RAM) dédiées et à la demande.
- Stockage à la demande (plusieurs classes disponibles).
- Ressources réseau (Internet, réseaux privés).
- Sauvegardes croisées avec rétention configurable.
- Réplication asynchrone pour le stockage ou les machines virtuelles.
- Pilotage via la [Console Shiva](../console/console.md) ou en mode Infrastructure as Code grâce aux APIs et au provider Terraform.

## Avantages

| Avantage            | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confiance numérique | Hébergement des données en France et conformité RGPD.                                                                                          |
| Sécurité            | Plateforme hautement sécurisée, qualifiée __SecNumCloud__, __HDS__ (Hébergement des Données de Santé), __ISO 27001__ et __ISAE 3402 type II__. |
| Haute disponibilité | Taux de disponibilité de la plateforme de 99,99%, mesuré mensuellement, plages de maintenance incluses.                                        |
| Résilience          | Mise en place de plans de continuité ou de reprise d'activité selon les besoins.                                                               |
| Automatisation      | Plateforme entièrement automatisée pensée pour s'intégrer dans un programme de transformation numérique.                                        |
| On demand           | Ressources disponibles à la demande.                                                                                                          |

## Régions et zones de disponibilité

Le produit OpenIaaS est déployé dans une zone de disponibilité.
Une zone de disponibilité fait partie d'une région.

Ce type de déploiement permet de choisir la localisation des clusters et de pouvoir les répartir sur différentes zones de disponibilité (AZ).
Cela offre une meilleure répartition de la charge, maximise la redondance et facilite la mise en place d'un plan de reprise d'activité (DRP) en cas d'incident.

---

## Classes de lames de calcul

Les lames de calcul disponibles pour l'offre Bare Metal offrent une gamme de performances pour répondre à divers besoins :

| Référence             | RAM  __(1)__ | Fréquence __(2)__                         | Nombre de cœurs / threads | Connectivité __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 Go       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 Go       | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 Go       | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 Go       | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notes

- __(1)__ La quantité de mémoire est celle physiquement disponible sur les lames et ne peut être modifiée.
- __(2)__ Les fréquences indiquées correspondent à la fréquence de base minimum et à la fréquence turbo.
- __(3)__ La connectivité physique est mutualisée pour l'accès réseau et l'accès stockage bloc, grâce à une architecture convergée Cisco UCS.
- __(4)__ Les GPU disponibles évoluent en fonction des dernières technologies. Au 1er mai 2024, l'offre inclut des GPU NVIDIA LOVELACE L40S.
- __(5)__ La haute disponibilité sur un cluster est disponible uniquement à partir de 2 nœuds.

La disponibilité de l'infrastructure est garantie à 99.9%, mesurée mensuellement, plages de maintenance incluses. Toute demande liée au SLA doit être déclarée via un ticket incident.

---

## Classes de stockage en mode bloc

Le stockage bloc distribué, basé sur __IBM Spectrum Virtualize__, offre une gamme de performances adaptées à divers cas d'utilisation :

| Référence                         | IOPS/To                 | Usage principal                        |
|-----------------------------------|-------------------------|----------------------------------------|
| __FLASH - Essentiel__             | 500                     | Charges de travail légères             |
| __FLASH - Standard__              | 1500                    | Charges de travail standard            |
| __FLASH - Premium__               | 3000                    | Charges intensives                     |
| __FLASH - Enterprise__            | 7500                    | Charges critiques                      |
| __FLASH - Ultra__                 | 15000                   | Charges ultra-intensives               |
| __MASS STORAGE - Archivage__      | Non applicable          | Stockage économique pour l'archivage   |

### Caractéristiques

- __Technologie__ : Flash NVMe avec __Distributed RAID 6__ pour une résilience accrue.
- __Disponibilité__ : 99.99%, mesurée mensuellement.
- __Restrictions__ : Pas de limitation sur les lectures ou écritures. Pas de compression ou de déduplication automatique, garantissant l'utilisation intégrale des volumes réservés.

---

## Les réseaux

Le produit OpenIaaS est compatible avec [les réseaux privés](../network/private_network) et [l'accès internet](../network/internet).

Deux types de réseaux sont disponibles depuis la configuration d'une machine virtuelle.

### Les réseaux de type VLAN

Les réseaux de type VLAN sont à propager à raison d'un VLAN par carte réseau. Si vous souhaitez utiliser plusieurs réseaux, il suffit de créer plusieurs cartes réseau.

Une limitation est présente sur le nombre de cartes maximum qu'on peut créer sur une VM, elle est de 7.

### Le VLAN TRUNK

Dans le cas où vous devez propager plus de 7 VLANs, vous devez utiliser le VLAN Trunk.
Le VLAN Trunk laisse passer tous vos VLANs sur une seule carte. La configuration des ID de VLANs est à faire via des interfaces virtuelles de type VLAN depuis l'OS de la VM. Les ID de VLANs sont les mêmes que ceux présents et visibles depuis la console.

## Sauvegarde de machines virtuelles

Cloud Temple propose __une architecture de sauvegarde distribuée native et non débrayable__, élément obligatoire dans le cadre de la qualification SecNumCloud française.

Les sauvegardes sont stockées sur la solution [Stockage Objet qualifié SecNumCloud](../storage/oss), garantissant une protection optimale en cas de défaillance majeure du datacenter de production. Cette approche permet de restaurer vos données sur un datacenter secondaire, même en cas d'incident critique comme un incendie.

Cette solution complète comprend:

- La sauvegarde hors site à chaud de l'ensemble des disques
- Une flexibilité de restauration permettant de choisir le point de récupération et la localisation

L'infrastructure de sauvegarde repose sur une technologie opensource à architecture sans agent, alliant simplicité d'utilisation et automatisation des processus. Cette solution optimise l'utilisation de l'espace de stockage tout en maintenant des performances élevées.

Les vitesses de sauvegarde et de restauration dépendent du taux de changement sur les environnements. La politique de sauvegarde est entièrement configurable depuis [la Console Cloud Temple](../console/console.md) pour chaque machine virtuelle.

__Remarque importante:__

*Certaines machines virtuelles ne sont pas compatibles avec cette technologie de sauvegarde* qui utilise les mécanismes de clichés instantanés de l'hyperviseur. Il s'agit typiquement des machines dont les charges d'écriture sur disque sont constantes. Dans ces cas, l'hyperviseur ne peut pas finaliser le cliché instantané, ce qui nécessite le gel de la machine virtuelle pour terminer l'opération. Ce gel peut durer plusieurs heures et n'est pas interruptible.

La solution recommandée consiste alors à exclure le disque ciblé par des écritures permanentes et à sauvegarder les données par une méthode alternative.

| Référence                                    | Unité | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| SAUVEGARDE - Accès au service                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Création d'une politique de sauvegarde

Pour ajouter une nouvelle politique de sauvegarde, une demande doit être soumise auprès du support, accessible via l'icône de bouée située en haut à droite de l'interface.

La création d'une nouvelle politique de sauvegarde s'effectue par __une demande de service__ précisant:

- Le nom de votre Organisation
- Les coordonnées d'un contact (email et téléphone) pour finaliser la configuration
- Le nom du tenant
- Le nom de la politique de sauvegarde
- Les caractéristiques souhaitées (x jours, y semaines, z mois, ...)

## Les machines virtuelles

### Gestion des ressources vCPU

Les modifications de ressources vCPU s'effectuent à froid (machine éteinte). La plateforme supporte jusqu'à 254 vCPUs par machine virtuelle (limite théorique), avec des tests concluants réalisés sur des VMs Linux équipées de 128 vCPUs.

Il est important de noter que le support du système d'exploitation invité constitue un facteur déterminant lors de l'allocation des ressources. Une allocation dépassant les limites supportées par le système d'exploitation peut entraîner des problèmes de performance significatifs.

### Gestion des ressources mémoire

Les modifications de mémoire s'effectuent également à froid. Les limites sont les suivantes:

- 1,5 TiB avec prise en charge des snapshots mémoire
- 8 TiB sans prise en charge des snapshots mémoire
- 16 TiB (limite théorique sans support de sécurité, moins la RAM allouée à Xen et au domaine de contrôle)

La mémoire réellement utilisable peut être limitée par le système d'exploitation invité. Dépasser les limites prises en charge par l'OS invité peut entraîner des baisses de performances.

### Gestion des disques

- La taille maximale d'un disque est de 2 To
- Les disques utilisent le format VHD standard
- Le nombre maximal de disques virtuels par machine virtuelle, y compris les lecteurs CD-ROM, est de 24

Il n'est pas possible de redimensionner les disques une fois créés. Pour étendre la capacité de stockage, il est nécessaire de créer un nouveau disque.

## Catalogues

Le catalogue permet de gérer trois types d'éléments essentiels:

- Les images disque (ISO)
- Les templates de configuration
- Les templates préinstallés de machines virtuelles

Dans la vue détaillée d'un template de machine virtuelle, vous pouvez consulter des informations cruciales telles que la localisation, le nombre de disques ou encore le nombre d'adaptateurs réseau.

Lorsque le nombre de disques virtuels est indiqué comme étant 0, cela signifie qu'il s'agit d'un template de configuration sans système d'exploitation préinstallé, vous permettant ainsi de déployer votre propre environnement personnalisé.

## Haute disponibilité

La haute disponibilité permet d’assurer la continuité de service des machines virtuelles (VM) en cas de défaillance d’un host physique au sein d’un pool OpenIaaS.
Avec la haute disponibilité (HA), chaque host dans le pool envoie régulièrement des signaux de vie à ses pairs via le stockage partagé (Block Storage Heartbeat). En cas d'absence prolongée de réponse, l'host est considéré comme défaillant.

Un Block Storage désigné comme heartbeat signifie qu'il servira de base pour authentifier les hosts qui ne répondraient plus.

Pour que la haute disponibilité soit correctement configurée dans un pool OpenIaaS, il est indispensable de disposer **d’au moins deux hosts** connectés.

Chaque VM doit être configurée avec un niveau de priorité de redémarrage en haute disponibilité :

#### Disabled
  La haute disponibilité n'est pas configurée. En cas de défaillance de l'hôte, la machine virtuelle ne sera pas redémarrée.

#### Restart
  En cas de défaillance de l'hôte, la machine virtuelle sera automatiquement redémarrée dès que des ressources seront disponibles dans le pool. Les machines virtuelles configurées en mode "restart" sont traitées en priorité, avant celles configurées en mode "best-effort".

#### Best-Effort  
  En cas de défaillance de l'hôte, la machine virtuelle ne sera automatiquement redémarrée que si des ressources restent disponibles après le traitement de toutes les machines virtuelles configurées en mode "restart". Le mode "Best-effort" ne fait qu'une seule tentative, donc si les ressources sont insuffisantes, la machine virtuelle ne sera pas redémarrée.
