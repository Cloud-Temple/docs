---
title: Concepts
sidebar_label: Concepts (Core)
---
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

## Présentation

Managed Core Kubernetes est un socle d'orchestration de conteneurs managé, basé sur des standards open source validés par la CNCF. Chaque cluster est déployé dans un environnement dédié au client, sur une zone de disponibilité unique ou sur trois. Le socle fournit les fondations de Kubernetes (OS, réseau, load balancer, stockage distribué) et vous laisse libre de construire votre plateforme avec vos propres outils de déploiement continu, d'observabilité, de sauvegarde ou de sécurité.

Pour une plateforme livrée prête à l'emploi, avec ces outils déjà intégrés, voir l'offre [Managed Kubernetes](../managed_kubernetes/concepts.md), qui compare aussi les deux offres composant par composant.

### Publics et cas d'usage

Managed Core Kubernetes s'adresse aux équipes qui maîtrisent Kubernetes et l'écosystème cloud-native : équipes plateforme, architectes cloud, organisations dotées d'une stack technique propre et entreprises réglementées. Cas d'usage typiques :

- **Plateformes internes (IDP)** : construction d'une plateforme sur mesure pour les développeurs.
- **Applications cloud-native** : architectures microservices avec une stack personnalisée.
- **Environnements multiples** : séparation développement, test et production.
- **Conformité réglementaire** : déploiements sur un socle souverain et maîtrisé.

## Avantages

| Avantage               | Description                                                                                                        |
|------------------------|--------------------------------------------------------------------------------------------------------------------|
| Fondations managées    | L'infrastructure, l'OS et les composants du socle sont gérés pour vous.                                            |
| Liberté de construction | Vous installez et configurez votre propre stack (observabilité, CI/CD, sécurité…).                                |
| Haute disponibilité    | En production, le cluster est réparti sur trois zones de disponibilité.                                            |
| Sécurité by design     | OS minimaliste et immuable, géré uniquement par API, sans shell ni accès SSH.                                      |
| Compatible CNCF        | Les standards open source évitent la dépendance technologique et garantissent la portabilité de vos applications. |

## Fonctionnalités

Les clusters reposent sur Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un système d'exploitation dédié à Kubernetes, léger et sécurisé. Il est immuable, sans shell ni accès SSH, et configuré uniquement de manière déclarative via une API gRPC.

| Composant                   | Description                                                                                                   |
|-----------------------------|---------------------------------------------------------------------------------------------------------------|
| CNI Cilium                  | Mise en réseau des conteneurs et politiques réseau.                                                           |
| MetalLB                     | Load balancer pour exposer des services en interne ou sur des IP publiques.                                   |
| Stockage distribué Rook-Ceph | Volumes persistants avec les *storage-classes* *ceph-block*, *ceph-bucket* et *ceph-filesystem*, 7 500 IOPS. |
| Stockage local TopoLVM (optionnel) | Stockage rapide sur les Worker Nodes, pour les applications qui répliquent elles-mêmes leurs données.  |

Les composants applicatifs (ingress, observabilité, sauvegarde, gestion des certificats, gouvernance) ne sont pas inclus : vous les choisissez et les opérez.

## Architecture

### Production (multi-zonal)

<img src={archi_overview} />

Le cluster de production est réparti sur trois zones de disponibilité :

- **Control Plane** : trois nœuds, un par zone ;
- **nœuds de stockage** : trois nœuds Rook-Ceph dédiés, un par zone, avec des données répliquées sur les trois zones ;
- **nœuds Worker** : au moins trois, un par zone, ajustables selon vos besoins ;
- **nœuds Worker Bare Metal** (optionnel) : pour des besoins de performance spécifiques, notamment les GPU ;
- **Git Runner** : un nœud pour les pipelines CI/CD ;
- **pare-feu managé** : deux machines virtuelles, qui filtrent les IP publiques de l'API Kubernetes.

### Dev/test (mono ou dual zone)

<img src={archi_overview_1az} />

Le cluster de développement et de test est déployé sur une seule zone de disponibilité, avec un Control Plane, trois nœuds Worker au minimum et un Git Runner. Le stockage Ceph est mutualisé sur les nœuds Worker.

### Intégrations

- **Fournisseurs d'identité** : intégration optionnelle via OIDC.
- **IaaS Cloud Temple** : interconnexion des clusters avec des ressources virtualisées, comme des bases de données ou des composants middleware.

## Régions et zones de disponibilité

Managed Core Kubernetes est disponible dans la région FR1. Un cluster de production est réparti sur trois zones de disponibilité ; un cluster de développement et de test est déployé sur une seule. Les données sont hébergées en France.

## Caractéristiques techniques

### Nœuds d'un cluster de production

| **Machine**         | **Nombre**  | **vCores** | **RAM** | **Stockage local**                                 |
| ------------------- | ----------- | ---------- | ------- | -------------------------------------------------- |
| Git Runner          | 1           | 4          | 8 Go    | OS: 256 Go                                         |
| Control Plane       | 3 (1 par AZ) | 8         | 12 Go   | OS: 64 Go                                          |
| Storage Node        | 3 (1 par AZ) | 12        | 24 Go   | OS: 64 Go + Ceph 500 Go minimum (~350 Go utiles)   |
| Worker Node         | 3 et plus (1 par AZ minimum) | 12 et plus | 24 Go et plus | OS: 64 Go                    |

### Nœuds d'un cluster de développement et de test

| **Machine**   | **Nombre** | **vCores** | **RAM** | **Stockage local**                               |
| ------------- | ---------- | ---------- | ------- | ------------------------------------------------ |
| Git Runner    | 1          | 4          | 8 Go    | OS: 256 Go                                       |
| Control Plane | 1          | 8          | 12 Go   | OS: 64 Go                                        |
| Worker Node   | 3 et plus  | 12 et plus | 24 Go et plus | OS: 64 Go + Ceph 300 Go minimum (~150 Go utiles) |

En développement et test, trois Worker Nodes servent aussi de nœuds de stockage : ce minimum est imposé par la réplication du stockage.

### Limites

| Paramètre                        | Production                          | Développement et test |
|----------------------------------|-------------------------------------|-----------------------|
| Nombre de Worker Nodes           | 3 minimum (1 par zone), 100 maximum | 3 minimum, 250 maximum |
| Taille minimale d'un Worker Node | 12 cœurs, 24 Go de RAM              | 12 cœurs, 24 Go de RAM |
| Pods par Worker Node             | 110                                 | 110                   |

## Sécurité et conformité

Managed Core Kubernetes est certifié HDS et ISO 27001, et disponible sur des services qualifiés SecNumCloud et conformes C5.

- **OS immuable** : sans shell ni accès SSH, géré uniquement par API.
- **Chiffrement** : données chiffrées au repos et en transit, chiffrement physique des liens entre zones de disponibilité.
- **Traçabilité** : journal d'audit complet.
- **Résidence des données** : France (FR1), dans des formats Kubernetes standards.

## Versions et cycle de vie

- **Kubernetes supporté :** N-2, avec une nouvelle release supportée environ tous les quatre mois.
- **Mises à jour :**
  - **majeures** (Kubernetes, Talos OS) : planifiées trois fois par an, en rolling update, sans interruption ;
  - **mineures et patchs de sécurité** : appliqués automatiquement dans un délai de 30 à 60 jours.
- **Dépréciation :** la version N-3 est dépréciée 90 jours après la sortie de la version N.

## Disponibilité du service

L'objectif de disponibilité d'un cluster de production (API Kubernetes) est de 99,95 %, mesuré sur un mois. Les clusters de développement et de test n'ont pas d'objectif de disponibilité.

## Responsabilités

La répartition des responsabilités est détaillée dans la [matrice de responsabilités (RACI) Managed Kubernetes](../contractual/kubernetes/raci.md). Pour l'offre Core :

- **Cloud Temple** est responsable du socle : infrastructure, OS, composants du socle et leurs mises à jour. Le support de niveaux 1, 2 et 3 est inclus pour ce périmètre ; les délais de prise en charge dépendent de la sévérité de l'incident (P1 à P4).
- **Le client** est entièrement autonome et responsable de ce qu'il déploie sur le socle : applications, opérateurs, outils de supervision, de sauvegarde et de sécurité.

## Réversibilité

Les clusters reposent sur des standards open source et des formats Kubernetes standards, ce qui garantit la portabilité de vos applications.

| Opération                 | Livrable                   | Délai       | Coût       |
|---------------------------|----------------------------|-------------|------------|
| Export des applications   | Manifestes YAML Kubernetes | 15 jours    | Sans frais |
| Assistance à la migration | Support technique          | Sur demande | Sur devis  |

## Tarification

Le service managé est facturé mensuellement, par cluster ; l'infrastructure IaaS sous-jacente (compute, stockage, réseau) est facturée en complément, selon le dimensionnement. Les tarifs sont publiés sur la page produit du site Cloud Temple :
[Managed Kubernetes — tarifs](https://www.cloud-temple.com/produits/managed-kubernetes/).
