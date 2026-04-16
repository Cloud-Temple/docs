---
title: Concepts
---

Le service **VM Instances** de Cloud Temple est une offre de compute mutualisée permettant de déployer des machines virtuelles à la demande, sans gestion de l'infrastructure sous-jacente. Cette page présente les concepts fondamentaux du service.

## Régions et zones de disponibilité

Le service VM Instances est déployé dans la région **FR1**. Lors de la création d'une machine virtuelle, vous pouvez choisir la **zone de disponibilité (AZ)** dans laquelle elle sera hébergée.

Pour en savoir plus sur les zones de disponibilité et les régions Cloud Temple, consultez :

- [Concepts des zones de disponibilité](../../additional_content/concepts_az.md)
- [Concepts des régions](../../additional_content/concepts_regional.md)

## Classes de service

Le service propose trois classes de service adaptées à différents types de charges de travail :

| Classe | Description | Ressources |
|--------|-------------|------------|
| **Development** | Coût optimisé, pour les environnements de test, d'intégration et de recette. Adapté aux charges non critiques à usage variable. | Mutualisées |
| **General Purpose** | Équilibre optimal vCPU/RAM pour les charges de travail standards (applications web, micro-services, bases de données de taille modérée). | Mutualisées |
| **Performance** | Conçu pour les charges de travail intensives nécessitant des performances CPU élevées. **Les vCPU sont dédiés** afin de garantir des performances constantes. | vCPU dédiés |

## Gabarits (Flavors)

Des gabarits prédéfinis sont proposés pour chaque classe de service. Il est également possible de créer des **gabarits custom** en choisissant librement le nombre de vCPU et la quantité de RAM.

### Development

Optimisé pour les environnements de test, d'intégration et de recette avec un coût maîtrisé.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| dev.small | 1 | 2 Go | Test unitaire, CI légère |
| dev.medium | 2 | 4 Go | Intégration, outils internes |
| dev.large | 4 | 8 Go | Environnement de recette |

### General Purpose

Adapté aux applications web, micro-services et bases de données de taille modérée.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| gp.small | 1 | 4 Go | Micro-service, test fonctionnel |
| gp.medium | 2 | 8 Go | Serveur web, application légère |
| gp.large | 4 | 16 Go | Application standard |
| gp.xlarge | 8 | 32 Go | Base de données moyenne |
| gp.2xlarge | 16 | 64 Go | Application critique |

### Performance

Les **vCPU sont dédiés** pour garantir des performances constantes, même sous forte charge.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| perf.medium | 2 | 4 Go | Calcul léger, CI/CD |
| perf.large | 4 | 8 Go | Traitement batch, encodage |
| perf.xlarge | 8 | 16 Go | Calcul intensif |
| perf.2xlarge | 16 | 32 Go | Simulation, analytics |

### Gabarits custom

Il est possible de créer un gabarit personnalisé en sélectionnant librement :

- Le nombre de vCPU
- La quantité de RAM

Cette flexibilité permet d'adapter précisément le dimensionnement aux besoins applicatifs tout en optimisant les coûts.

:::note
Les spécifications des gabarits peuvent évoluer. Consultez la console Cloud Temple pour la liste à jour.
:::

## Stockage

Tous les volumes du service VM Instances sont des **volumes Flash persistants montés en réseau** (*network-attached*). Il n'existe pas de stockage local éphémère : vos données sont conservées indépendamment de l'état de la machine virtuelle.

### Disque système

Chaque machine virtuelle dispose d'un **disque système Flash inclus par défaut**, dont la taille dépend du système d'exploitation choisi :

- Taille : entre **15 et 100 Go** selon l'OS sélectionné.

### Volumes additionnels

Il est possible d'ajouter des volumes de stockage supplémentaires à chaque machine virtuelle :

- **Taille maximale** : 2 To par volume
- **Nombre maximum** : 16 volumes par VM
- **Granularité** : allocation au Go
- **Facturation** : au Go alloué, avec choix de la classe de stockage

## Réseau

### Interface réseau

Chaque VM instance dispose d'**une interface réseau unique**.

### Compatibilité réseau

Cette interface peut être connectée à deux types de réseaux Cloud Temple :

- **Réseau privé de backbone** : réseau privé mutualisé avec isolation logique stricte entre les tenants. Idéal pour interconnecter vos ressources Cloud Temple dans un environnement maîtrisé. [En savoir plus](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)** : réseau privé entièrement géré permettant une segmentation avancée et une configuration réseau fine de vos environnements. [En savoir plus](../../network/vpc/vpc.md)

### IP flottante (Floating IP)

Sur un réseau **VPC**, il est possible d'associer une **IP flottante** à une VM instance. Une IP flottante est une adresse IP publique que vous pouvez attacher ou détacher librement d'une instance, indépendamment de son cycle de vie.

## Déploiement et images

Les VM Instances sont déployées depuis les **images officielles de la Marketplace Cloud Temple**. Ce catalogue d'images sélectionnées garantit des environnements testés, maintenus et prêts à l'emploi pour chaque système d'exploitation supporté.

Le service supporte **Cloud-init** pour la pré-configuration automatique des instances au démarrage (injection de clés SSH, configuration réseau, scripts d'initialisation, etc.).

## Protection des données

### Sauvegarde (optionnelle)

Une option de sauvegarde est disponible avec rétention configurable. Cette option est **facturée en supplément**.

:::info
La réplication de VM n'est pas incluse par défaut. Son étude est prévue pour le second semestre 2026.
:::

## SLA et disponibilité

| Engagement | Valeur |
|------------|--------|
| Disponibilité de l'infrastructure | 99,9% (mesurée mensuellement) |
| Garantie de ressources | Selon la classe de service choisie |

## Automatisation

Le service est entièrement pilotable via :

- **Console Cloud Temple** : interface graphique pour la gestion quotidienne
- **API REST Cloud Temple** : contrôle programmatique du cycle de vie des VMs
- **Provider Terraform Cloud Temple** : Infrastructure as Code
