---
title: Concepts
---


L'offre **Bare Metal** de Cloud Temple propose des serveurs physiques dédiés associés à un stockage de type bloc distribué. 
Cette solution offre une personnalisation totale pour les clients souhaitant gérer leurs propres environnements logiciels, que ce soit pour installer un système Linux, Windows ou un hyperviseur.

---

## Une infrastructure matérielle et flexible

L'offre Bare Metal repose sur une architecture conçue pour répondre aux besoins des charges de travail critiques. 

### Principaux composants :
- **Serveurs Cisco UCS** : Performants et fiables, ces lames de calcul constituent la base de l'offre.
- **Stockage IBM Spectrum Virtualize** : Un stockage de type bloc distribué, offrant résilience et performances élevées.

### Architecture

Le modèle de stockage distribué offre une séparation entre le calcul (serveurs Bare Metal) et le stockage (bloc distribué), permettant :
- Une flexibilité pour mapper les volumes de stockage sur plusieurs serveurs Bare Metal en fonction des besoins.
- Une personnalisation optimale des configurations de calcul et de stockage.
- Une résilience accrue grâce à l’utilisation de **Distributed RAID 6**.

---

## Régions et zones de disponibilité

Le produit Bare Metal est déployé dans une zone de disponibilité. 
Une [zones de disponibilité](../additional_content/concepts_az.md) fait partie d’une [région](../additional_content/concepts_regional.md).

Ce type de déploiement permet de choisir la localisation des serveurs Bare Metal et de pouvoir les répartir sur différentes zones de disponibilité (AZ).
Cela offre une meilleure répartition de la charge, maximise la redondance et facilite la mise en place d’un plan de reprise d’activité (DRP) en cas d’incident.

---

## Classes de lames de calcul

Les lames de calcul disponibles pour l'offre Bare Metal offrent une gamme de performances pour répondre à divers besoins :

| Référence             | RAM  __(1)__ | Fréquence __(2)__                         | Nombre de cœurs / threads | Connectivité __(3)__ | GPU __(4)__          | 
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notes :
- __(1)__ La quantité de mémoire est celle physiquement disponible sur les lames et ne peut être modifiée.
- __(2)__ Les fréquences indiquées correspondent à la fréquence de base minimum et à la fréquence turbo.
- __(3)__ La connectivité physique est mutualisée pour l'accès réseau et l'accès stockage bloc, grâce à une architecture convergée Cisco UCS.
- __(4)__ Les GPU disponibles évoluent en fonction des dernières technologies. Au 1er mai 2024, l'offre inclut des GPU NVIDIA LOVELACE L40S.

La disponibilité de l'infrastructure est garantie à 99.9%, mesurée mensuellement, plages de maintenance incluses. Toute demande liée au SLA doit être déclarée via un ticket incident.

---

## Classes de stockage en mode bloc

Le stockage bloc distribué, basé sur **IBM Spectrum Virtualize**, offre une gamme de performances adaptées à divers cas d'utilisation :

| Référence                         | IOPS/To                 | Usage principal                        | 
|-----------------------------------|-------------------------|----------------------------------------|
| **FLASH - Essentiel**             | 500                     | Charges de travail légères             |
| **FLASH - Standard**              | 1500                    | Charges de travail standard            |
| **FLASH - Premium**               | 3000                    | Charges intensives                     |
| **FLASH - Enterprise**            | 7500                    | Charges critiques                      |
| **FLASH - Ultra**                 | 15000                   | Charges ultra-intensives               |
| **MASS STORAGE - Archivage**      | Non applicable          | Stockage économique pour l'archivage   |

### Caractéristiques :
- **Technologie** : Flash NVMe avec **Distributed RAID 6** pour une résilience accrue.
- **Disponibilité** : 99.99%, mesurée mensuellement.
- **Restrictions** : Pas de limitation sur les lectures ou écritures. Pas de compression ou de déduplication automatique, garantissant l'utilisation intégrale des volumes réservés.

---

## Accès Console Bare Metal

L'accès aux serveurs Bare Metal se fait directement depuis la **console Cloud Temple**. Cette fonctionnalité offre un contrôle total sur le cycle de vie des serveurs, incluant :
- **Accès KVM** : Une interface directe pour gérer les serveurs, comme si vous étiez physiquement sur site.
- **Gestion des opérations courantes** : Possibilité d'effectuer des actions telles que la gestion des alimentations, des réinitialisations ou encore le **mapping d'ISO** pour l'installation d'un système d'exploitation.

Ce niveau d'accès assure une flexibilité maximale tout en respectant les contraintes de sécurité.

---

## Connectivité réseau des serveurs Bare Metal

Les serveurs Bare Metal disposent de fonctionnalités réseau avancées.

### VLAN de niveau 2
Il est possible de configurer des **VLAN de type niveau 2** sur les interfaces réseau des serveurs Bare Metal. 
Les utilisateurs peuvent :
- **Activer le tagging VLAN** pour associer un ou plusieurs VLAN à une même interface.
- **Propager les VLAN** directement sur les interfaces réseau des serveurs.

### Agrégation des interfaces réseau
Chaque serveur est équipé de **deux interfaces réseau**. Ces interfaces peuvent être utilisées de manière indépendante ou combinées pour une meilleure performance et redondance :

### Performances réseau
La performance des interfaces réseau est directement liée à la classe de lame choisie. Exemple :
- Les lames **ECO** offrent une connectivité de 2 x 10 Gbit/s.
- Les lames **STANDARD** et supérieures disposent d’une connectivité de 2 x 25 Gbit/s.

Ces options réseau garantissent une connectivité fiable, flexible et adaptée à une variété de charges de travail professionnelles.

---