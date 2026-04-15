---
title: Concepts
---

Le service **VMaaS** de Cloud Temple est une offre de compute mutualisée permettant de déployer des machines virtuelles à la demande, sans gestion de l'infrastructure sous-jacente. Cette page présente les concepts fondamentaux du service.

## Architecture technique

Le service repose sur une infrastructure mutualisée composée de :

- **Hyperviseur** : Infrastructure entièrement gérée par Cloud Temple (sans choix d'hyperviseur par le client).
- **Matériel de calcul** : Lames Cisco UCS.
- **Stockage** : Stockage bloc mutualisé performant.

L'infrastructure est hébergée en France.

## Régions et zones de disponibilité

Le service VMaaS est déployé dans la région **FR1**. Lors de la création d'une machine virtuelle, vous pouvez choisir la **zone de disponibilité (AZ)** dans laquelle elle sera hébergée.

Pour en savoir plus sur les zones de disponibilité et les régions Cloud Temple, consultez :

- [Concepts des zones de disponibilité](../additional_content/concepts_az.md)
- [Concepts des régions](../additional_content/concepts_regional.md)

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

Chaque machine virtuelle est équipée d'**une carte réseau**.

Le service est nativement compatible avec le service **VPC (Virtual Private Cloud)** de Cloud Temple, permettant l'isolation réseau et la segmentation de vos environnements.

## Déploiement et images

Les machines virtuelles sont déployées **exclusivement depuis les templates officiels de la Marketplace Cloud Temple**. Il n'est pas possible d'utiliser des images personnalisées tierces.

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

## Sécurité et conformité

| Certification |
|---------------|
| ISO 27001:2022 |
| ISAE 3402 |

:::info
Ce service est en cours de qualification SecNumCloud par l'ANSSI.
:::

Les données sont hébergées en **France**, dans un environnement mutualisé avec **isolation logique stricte** entre les clients.

## Automatisation

Le service est entièrement pilotable via :

- **Console Cloud Temple** : interface graphique pour la gestion quotidienne
- **API REST Cloud Temple** : contrôle programmatique du cycle de vie des VMs
- **Provider Terraform Cloud Temple** : Infrastructure as Code

## Prérequis

Pour utiliser le service VMaaS, vous devez disposer de :

- Un **Tenant Cloud Temple** actif
- Une souscription au **Support Standard** minimum ([voir documentation support](https://docs.cloud-temple.com))
