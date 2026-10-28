---
title: Concepts
---

<a id="une-infrastructure-matérielle-et-flexible"></a>

## Présentation

L'offre **Bare Metal** fournit des serveurs physiques dédiés, sans mutualisation de ressources, associés à un stockage de type bloc distribué. Elle offre une personnalisation totale aux clients qui souhaitent gérer leur propre environnement logiciel, qu'il s'agisse d'installer un système Linux, Windows ou un hyperviseur.

### Publics et cas d'usage

- **Secteur public et administrations** : applications sensibles conformes à la doctrine « cloud au centre ».
- **Secteurs régaliens** : environnements nécessitant une isolation physique.
- **Santé** : traitement de données de santé sur une infrastructure certifiée HDS.
- **Intelligence artificielle** : GPU dédiés pour l'entraînement et l'inférence de modèles.
- **Cloud privé** : personnalisation complète de la pile logicielle, par exemple pour une ferme d'hyperviseurs.
- **Licences logicielles** : contrôle précis des ressources pour optimiser les licences liées au matériel.

## Avantages

| Avantage                     | Description                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| Contrôle total               | Vous installez librement l'environnement logiciel (OS, hyperviseur) et accédez directement aux serveurs. |
| Isolation physique           | Chaque serveur vous est dédié, sans mutualisation de ressources.                                    |
| Architecture flexible        | Le calcul et le stockage sont séparés : chacun se dimensionne indépendamment.                       |
| Déploiement multi-zones      | Les serveurs peuvent être répartis sur plusieurs zones de disponibilité.                            |
| Matériel haute performance   | Huit classes de lames, dont deux équipées de GPU NVIDIA.                                            |

## Fonctionnalités

| Fonctionnalité          | Description                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Serveurs dédiés         | Huit classes de lames, de ECO à PERFORMANCE 5, à partir d'un serveur et sans limite.            |
| GPU NVIDIA              | NVIDIA L40S 48 Go (PERFORMANCE 4) et NVIDIA H100 80 Go (PERFORMANCE 5).                         |
| Stockage bloc distribué | Six classes de stockage, avec Distributed RAID 6.                                               |
| Configuration réseau    | Mode simple (redondance automatique) ou avancé (quatre cartes réseau virtuelles).               |
| Console KVM             | Accès direct aux serveurs depuis la Console Cloud Temple.                                       |
| Multi-zones             | Déploiement sur différentes zones de disponibilité.                                             |
| VLAN et agrégation      | VLAN de niveau 2 et agrégation des interfaces réseau.                                           |

<a id="accès-console-bare-metal"></a>

### Accès Console Bare Metal

L'accès aux serveurs Bare Metal se fait directement depuis la **Console Cloud Temple**. Cette fonctionnalité offre un contrôle total sur le cycle de vie des serveurs, incluant :

- **Accès KVM** : une interface directe pour gérer les serveurs, comme si vous étiez physiquement sur site.
- **Gestion des opérations courantes** : gestion des alimentations, réinitialisations ou **mapping d'ISO** pour l'installation d'un système d'exploitation.
- **Gestion des volumes** : mapping et configuration des volumes de stockage depuis l'interface.

Le service est aussi pilotable par une API REST, compatible OpenAPI.

## Architecture

### Principaux composants

- **Serveurs Cisco UCS** : ces lames de calcul constituent la base de l'offre.
- **Stockage IBM Spectrum Virtualize** : un stockage de type bloc distribué, offrant résilience et performances élevées.

### Architecture

Le modèle de stockage distribué sépare le calcul (serveurs Bare Metal) du stockage (bloc distribué), ce qui permet :

- de mapper les volumes de stockage sur plusieurs serveurs Bare Metal en fonction des besoins ;
- de personnaliser les configurations de calcul et de stockage ;
- d'accroître la résilience grâce au **Distributed RAID 6**.

## Régions et zones de disponibilité

Le produit Bare Metal est déployé dans la région FR1, dans une zone de disponibilité.
Une [zone de disponibilité](../additional_content/concepts_az.md) fait partie d'une [région](../additional_content/concepts_regional.md).

Vous choisissez la localisation des serveurs Bare Metal et pouvez les répartir sur différentes zones de disponibilité (AZ). Cela offre une meilleure répartition de la charge, maximise la redondance et facilite la mise en place d'un plan de reprise d'activité en cas d'incident.

## Caractéristiques techniques

### Classes de lames de calcul

Les lames de calcul disponibles pour l'offre Bare Metal offrent une gamme de performances pour répondre à divers besoins :

| Référence             | RAM  **(1)** | Fréquence **(2)**                         | Nombre de cœurs / threads | Connectivité **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |
| **PERFORMANCE 5**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA H100 80Go |

#### Notes

- **(1)** La quantité de mémoire est celle physiquement disponible sur les lames et ne peut être modifiée.
- **(2)** Les fréquences indiquées correspondent à la fréquence de base minimum et à la fréquence turbo.
- **(3)** La connectivité physique est mutualisée pour l'accès réseau et l'accès stockage bloc, grâce à une architecture convergée Cisco UCS.
- **(4)** Les GPU disponibles évoluent en fonction des dernières technologies. Le produit propose des GPU NVIDIA L40S et NVIDIA H100.

### Classes de stockage en mode bloc

Le stockage bloc distribué offre une gamme de performances adaptées à divers cas d'utilisation :

| Référence                         | IOPS/To        | Plafond IOPS max / Volume | Bande passante max / Volume | Usage principal                        |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essentiel**             | 500            | 10 000 IOPS               | 512 Mo/s                    | Charges de travail légères             |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 Mo/s                   | Charges de travail standard            |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 Mo/s                   | Charges intensives                     |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 Mo/s                   | Charges critiques                      |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 Mo/s                   | Charges ultra-intensives               |
| **MASS STORAGE - Archivage**      | Non applicable | Non garanti               | Non garanti                 | Stockage économique pour l'archivage   |

#### Caractéristiques

- **Performances** : la performance effective croît de manière linéaire en fonction de la volumétrie allouée (selon le ratio IOPS/To), **dans la limite du plafond matériel absolu défini ci-dessus**. Par exemple, un volume de 10 To en classe Ultra est physiquement limité à 30 000 IOPS et 1024 Mo/s.
- **Technologie** : Flash NVMe avec **Distributed RAID 6** pour une résilience accrue.
- **Restrictions** : pas de limitation sur les lectures ou écritures. Pas de compression ni de déduplication automatique, ce qui garantit l'utilisation intégrale des volumes réservés.

<a id="connectivité-réseau-des-serveurs-bare-metal"></a>

### Connectivité réseau

Les serveurs Bare Metal disposent de fonctionnalités réseau avancées.

#### Modes de configuration

- **Configuration simple (par défaut)** : chaque serveur est équipé de **deux interfaces réseau physiques**. La redondance et la haute disponibilité sont gérées automatiquement par l'infrastructure, sans configuration manuelle.
- **Configuration avancée** : pour des besoins comme le déploiement d'hyperviseurs, les deux interfaces physiques peuvent être déclinées en **quatre cartes réseau virtuelles**. La gestion du load balancing, du teaming et de la haute disponibilité est alors déléguée à votre système d'exploitation, pour séparer par exemple les trafics de management, de données, de stockage et de réplication.

#### VLAN de niveau 2

Il est possible de configurer des **VLAN de niveau 2** sur les interfaces réseau des serveurs Bare Metal. Vous pouvez :

- **activer le tagging VLAN** pour associer un ou plusieurs VLAN à une même interface ;
- **propager les VLAN** directement sur les interfaces réseau des serveurs.

#### Agrégation des interfaces réseau

Les interfaces réseau peuvent être utilisées de manière indépendante ou combinées (bonding, teaming) pour une meilleure performance et une meilleure redondance.

#### Performances réseau

La performance des interfaces réseau dépend de la classe de lame choisie :

- les lames **ECO** offrent une connectivité de 2 x 10 Gbit/s ;
- les lames **STANDARD** et supérieures disposent d'une connectivité de 2 x 25 Gbit/s.

### Limites

- La quantité de mémoire d'une lame ne peut pas être modifiée.
- Un volume de stockage est plafonné à 30 000 IOPS et 1024 Mo/s (10 000 IOPS et 512 Mo/s en classe Essentiel), quelle que soit sa taille.

## Sécurité et conformité

Bare Metal est certifié HDS et ISO 27001, labellisé Gaia-X niveau 3, conforme CISPE et C5, et qualifié SecNumCloud.

### Sécurité et chiffrement du stockage bloc

Pour garantir la confidentialité de vos données au repos, l'ensemble de l'infrastructure de stockage bloc intègre un chiffrement matériel.

- **Type de chiffrement** : les données sont chiffrées directement sur les disques (`Data At Rest`) avec l'algorithme **XTS-AES 256**.
- **Conformité** : cette méthode de chiffrement est conforme à la norme **FIPS 140-2**.
- **Fonctionnement** : le chiffrement est appliqué au moment de l'écriture des données sur le support de stockage physique.

:::warning[Point d'attention sur la réplication]
Ce chiffrement protège les données stockées sur les disques. Il n'est pas actif « on-the-fly » : les données ne sont pas chiffrées durant les opérations de réplication de stockage entre les zones de disponibilité. La sécurité des transferts est assurée par des canaux de communication dédiés et sécurisés.
:::

## Disponibilité du service

| Élément         | Objectif de disponibilité, mesuré sur un mois |
|-----------------|-----------------------------------------------|
| Infrastructure  | 99,9 %, plages de maintenance incluses        |
| Stockage bloc   | 99,99 %                                       |

Toute demande liée à la disponibilité doit être déclarée via un ticket incident.

## Réversibilité

| Opération                 | Livrable                     | Délai       | Coût       |
|---------------------------|------------------------------|-------------|------------|
| Export des données        | Données, en formats standards | 30 jours   | Sans frais |
| Assistance à la migration | Support technique            | Sur demande | Sur devis  |
| Purge sécurisée           | Certificat de destruction    | 7 jours     | Inclus     |

## Tarification

Le service est facturé mensuellement, par serveur physique. L'engagement minimal est d'un mois pour la majorité des configurations ; certaines lames, selon leur configuration matérielle, nécessitent un engagement plus long. Les tarifs et les durées d'engagement sont publiés sur la page produit du site Cloud Temple :
[Bare Metal — tarifs](https://www.cloud-temple.com/produits/bare-metal/).
