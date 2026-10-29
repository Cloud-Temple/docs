---
title: Concepts
---

## Présentation

Le service **VM Instances** est un produit de compute mutualisé qui permet de déployer des machines virtuelles à la demande, sans gérer l'infrastructure sous-jacente. Il propose plusieurs classes de service, du développement à coût maîtrisé jusqu'à la production critique, et s'intègre nativement aux réseaux Cloud Temple. Vous pouvez démarrer avec une seule VM et faire évoluer votre usage sans minimum.

### Publics et cas d'usage

- **Équipes de développement** : environnements de test et de recette à coût maîtrisé.
- **Production web et applicative** : hébergement d'applications métiers et de sites web.
- **Applications gourmandes en données** : bases de données, traitements de données.
- **Entreprises et secteur public** : hébergement de données dans un environnement souverain.

## Avantages

| Avantage               | Description                                                                                         |
|------------------------|-----------------------------------------------------------------------------------------------------|
| Flexibilité et choix   | Plusieurs classes de service et gabarits pour adapter le coût à chaque usage.                       |
| Simplicité de gestion  | L'infrastructure est entièrement gérée ; les VM se déploient depuis la Marketplace en quelques minutes. |
| Souveraineté           | Données hébergées en France, sur un service qualifié SecNumCloud.                                   |
| Intégration complète   | Compatible avec le VPC et le Private Backbone, pilotable par API et par Terraform.                  |
| Scalabilité            | Pas de minimum : vous démarrez avec une seule VM.                                                   |

## Fonctionnalités

| Fonctionnalité             | Description                                                                                       |
|----------------------------|---------------------------------------------------------------------------------------------------|
| Classes de service         | Development, General Purpose et Performance (vCPU dédiés).                                        |
| Gabarits prédéfinis et custom | Gabarits prêts à l'emploi, ou nombre de vCPU et quantité de RAM choisis librement.             |
| Déploiement Marketplace    | Création de VM depuis les images officielles de la Marketplace Cloud Temple.                      |
| Cloud-init                 | Pré-configuration automatique des instances au démarrage.                                         |
| Choix de la zone           | Sélection de la zone de disponibilité au déploiement.                                             |
| Snapshots                  | Création et gestion de snapshots depuis la Console.                                               |
| Stockage persistant        | Disque système et volumes additionnels Flash, en classe Standard ou Enterprise.                   |
| Réseau                     | Jusqu'à 7 cartes réseau, VPC avec IP flottante, Private Backbone.                                 |
| Sauvegarde (optionnelle)   | Politique `Backup 30 snapshots` avec un snapshot quotidien.                                       |

### Déploiement et images

Les VM Instances sont déployées depuis les **images officielles de la Marketplace Cloud Temple**. Les templates disponibles sont ceux de la [Marketplace filtrée pour OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Ce catalogue d'images sélectionnées garantit des environnements testés, maintenus et prêts à l'emploi pour chaque système d'exploitation supporté.

Le service supporte **Cloud-init** pour la pré-configuration automatique des instances au démarrage (injection de clés SSH, configuration réseau, scripts d'initialisation, etc.).

### Migration d'un OS hors Marketplace

Un système d'exploitation qui n'est pas disponible dans la Marketplace peut faire l'objet d'une migration par restauration **Veeam en mode Bare Metal Recovery**, sous réserve de validation technique. Le fonctionnement de l'infrastructure VM est alors garanti, mais pas celui de l'OS invité, de ses applications ou des agents nécessaires lorsque ceux-ci ne sont pas installés ou configurés correctement. Le support de l'OS invité est alors limité.

### Automatisation

Le service est entièrement pilotable via :

- **Console Cloud Temple** : interface graphique pour la gestion quotidienne et la visualisation des métriques (CPU, RAM, disque) ;
- **API REST Cloud Temple** : contrôle programmatique du cycle de vie des VM ;
- **Provider Terraform Cloud Temple** : Infrastructure as Code.

## Architecture

Les VM Instances s'exécutent sur une infrastructure mutualisée, avec une isolation logique stricte entre les clients. Tous les volumes sont des **volumes Flash persistants montés en réseau** (*network-attached*) : il n'existe pas de stockage local éphémère, et vos données sont conservées indépendamment de l'état de la machine virtuelle.

Chaque VM se connecte au **VPC** ou au **Private Backbone** par ses cartes réseau, et peut être déployée depuis la Marketplace dans la zone de disponibilité de votre choix.

## Régions et zones de disponibilité

Le service VM Instances est déployé dans la région **FR1**. Lors de la création d'une machine virtuelle, vous pouvez choisir la **zone de disponibilité (AZ)** dans laquelle elle sera hébergée. Ce choix ne nécessite pas l'activation de zone de disponibilité de l'offre IaaS.

Pour en savoir plus sur les zones de disponibilité et les régions Cloud Temple, consultez :

- [Concepts des zones de disponibilité](../../additional_content/concepts_az.md)
- [Concepts des régions](../../additional_content/concepts_regional.md)

## Caractéristiques techniques

### Classes de service

Le service propose trois classes de service adaptées à différents types de charges de travail :

| Classe | Description | Ressources |
|--------|-------------|------------|
| **Development** | Coût optimisé, pour les environnements de test, d'intégration et de recette. Adapté aux charges non critiques à usage variable. | Mutualisées |
| **General Purpose** | Équilibre optimal vCPU/RAM pour les charges de travail standards (applications web, micro-services, bases de données de taille modérée). | Mutualisées |
| **Performance** | Conçu pour les charges de travail intensives nécessitant des performances CPU élevées. **Les vCPU sont dédiés** afin de garantir des performances constantes. | vCPU dédiés |

### Gabarits (Flavors)

Des gabarits prédéfinis sont proposés pour chaque classe de service. Il est également possible de créer des **gabarits custom** en choisissant librement le nombre de vCPU et la quantité de RAM.

#### Development

Optimisé pour les environnements de test, d'intégration et de recette avec un coût maîtrisé.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| dev.small | 1 | 2 Go | Test unitaire, CI légère |
| dev.medium | 2 | 4 Go | Intégration, outils internes |
| dev.large | 4 | 8 Go | Environnement de recette |

#### General Purpose

Adapté aux applications web, micro-services et bases de données de taille modérée.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| gp.small | 1 | 4 Go | Micro-service, test fonctionnel |
| gp.medium | 2 | 8 Go | Serveur web, application légère |
| gp.large | 4 | 16 Go | Application standard |
| gp.xlarge | 8 | 32 Go | Base de données moyenne |
| gp.2xlarge | 16 | 64 Go | Application critique |

#### Performance

Les **vCPU sont dédiés** pour garantir des performances constantes, même sous forte charge.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| perf.medium | 2 | 4 Go | Calcul léger, CI/CD |
| perf.large | 4 | 8 Go | Traitement batch, encodage |
| perf.xlarge | 8 | 16 Go | Calcul intensif |
| perf.2xlarge | 16 | 32 Go | Simulation, analytics |

#### Gabarits custom

Il est possible de créer un gabarit personnalisé en sélectionnant librement :

- Le nombre de vCPU
- La quantité de RAM

Cette flexibilité permet d'adapter précisément le dimensionnement aux besoins applicatifs tout en optimisant les coûts.

:::note
Les spécifications des gabarits peuvent évoluer. Consultez la console Cloud Temple pour la liste à jour.
:::

### Stockage

Tous les volumes du service VM Instances sont des **volumes Flash persistants montés en réseau** (*network-attached*). Il n'existe pas de stockage local éphémère : vos données sont conservées indépendamment de l'état de la machine virtuelle.

#### Disque système

Chaque machine virtuelle dispose automatiquement d'un **disque système Flash** pour héberger le système d'exploitation. Ce disque est une ressource de stockage du service et n'est pas gratuit ; sa taille dépend du système d'exploitation choisi :

- Taille : entre **15 et 100 Go** selon l'OS sélectionné.

Le disque système est facturé au **Go**. Sa création automatique avec la VM signifie qu'il est nécessaire au déploiement de l'OS, et non qu'il est inclus gratuitement.

#### Volumes additionnels

Il est possible d'ajouter des volumes de stockage supplémentaires à chaque machine virtuelle :

- **Taille** : de **1 à 2 048 Go** par volume
- **Nombre maximum** : 16 volumes par VM
- **Plafond par famille** : **2 To par VM** en Development et General Purpose ; **16 To par VM** en Enterprise
- **Granularité** : allocation au Go
- **Facturation** : au Go alloué, avec choix de la classe de stockage

#### Classes de stockage

Deux classes de stockage bloc sont disponibles pour les volumes additionnels :

| Classe | Usage | Performance | Taille minimale | Taille maximale |
| --- | --- | --- | --- | --- |
| **Enterprise** | Stockage bloc haute performance pour les charges de travail sensibles à la latence. | **7 500 IOPS/To** | **1 Go** | **2 048 Go** |
| **Standard** | Stockage bloc standard adapté à la plupart des charges de travail. | **1 500 IOPS/To** | **1 Go** | **2 048 Go** |

### Réseau

#### Interface réseau

Chaque VM instance peut disposer de **1 à 7 cartes réseau**. Chaque carte réseau est associée à **un seul réseau**.

#### Compatibilité réseau

Cette interface peut être connectée à deux types de réseaux Cloud Temple :

- **Réseau privé de backbone** : réseau privé mutualisé avec isolation logique stricte entre les tenants. Idéal pour interconnecter vos ressources Cloud Temple dans un environnement maîtrisé. [En savoir plus](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)** : réseau privé entièrement géré permettant une segmentation avancée et une configuration réseau fine de vos environnements. [En savoir plus](../../network/vpc/vpc.md)

#### IP flottante (Floating IP)

Sur un réseau **VPC**, il est possible d'associer une **IP flottante** à une VM instance. Une IP flottante est une adresse IP publique que vous pouvez attacher ou détacher librement d'une instance, indépendamment de son cycle de vie.

#### Appliances virtuelles

Les appliances virtuelles **Stormshield** et **FortiVM** sont compatibles avec la **famille Enterprise**, sous réserve du respect des prérequis techniques et du périmètre de support applicable.

### Limites

- **Volumes** : 16 volumes additionnels par VM, de 1 à 2 048 Go chacun.
- **Cartes réseau** : 7 par VM, avec un seul réseau par carte.
- **Capacité non réservée** : la création et le redémarrage d'une VM sont soumis à la capacité disponible. Seule une instance réservée garantit la capacité, dans le périmètre de sa réservation.

## Sécurité et conformité

VM Instances est certifié HDS et ISO 27001, et qualifié SecNumCloud.

- **Isolation** : environnement mutualisé avec isolation logique stricte entre les clients.
- **Chiffrement** : le chiffrement au repos de l'infrastructure de stockage sous-jacente est assuré par le service. Le chiffrement applicatif des données (système de fichiers, base de données) reste à votre charge.
- **Résidence des données** : données hébergées en France.

<a id="protection-des-données"></a>

## Sauvegarde et continuité

### Sauvegarde (optionnelle)

Deux politiques de sauvegarde sont disponibles : **`No Backup`** et **`Backup 30 snapshots`**. Avec `Backup 30 snapshots`, un snapshot est créé automatiquement chaque soir entre **20 h et 22 h**. Si le client déclenche un backup supplémentaire en journée, deux snapshots sont créés le même jour : la rétention active couvre alors **29 jours** au lieu de 30. Cette option est **facturée en supplément**.

:::info
La réplication de VM n'est pas incluse.
:::

<a id="sla-et-disponibilité"></a>

## Disponibilité du service

L'objectif de disponibilité est de **99,95 % par VM Instance**, mesuré sur un mois. Il couvre les ressources de calcul (CPU, RAM) ; la connectivité réseau et le stockage persistant ont leurs propres engagements. La garantie de ressources dépend de la classe de service choisie.

Les tools VM, pré-installés sur les images de la Marketplace, sont nécessaires à la mesure de disponibilité : il est recommandé de ne pas les désactiver ni les supprimer.

## Responsabilités

La répartition des responsabilités entre le client et Cloud Temple est détaillée dans la [matrice de responsabilités (RACI) VM Instances](../../contractual/vm-instances/raci.md).

L'accès au service pour un **client direct** requiert au minimum le **Support Standard**, même si le client administre lui-même l'OS et les applications. Le **Support Basic** est destiné aux clients accompagnés par un partenaire formé.

## Réversibilité

| Opération                 | Livrable                              | Délai       | Coût       |
|---------------------------|---------------------------------------|-------------|------------|
| Export des données        | Images disques, dans des formats standards | 30 jours | Sans frais |
| Assistance à la migration | Support technique                     | Sur demande | Sur devis  |
| Purge sécurisée           | Certificat de destruction             | 7 jours     | Inclus     |

## Tarification

Le compute est facturé à l'heure, sans engagement mensuel ; toute heure entamée est due. L'arrêt d'une VM suspend la facturation des vCPU et de la RAM, mais pas celle du stockage. Le détail des règles de facturation et des quotas est décrit dans la [FAQ VM Instances](./faq.md). Les tarifs sont publiés sur la page produit du site Cloud Temple :
[VM Instances — tarifs](https://www.cloud-temple.com/produits/vm-instances/).
