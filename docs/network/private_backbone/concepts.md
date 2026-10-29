---
title: Concepts
---

<a id="concepts--private-backbone"></a>

## Présentation

Le **Private Backbone** est l'offre de connectivité historique de Cloud Temple, conçue pour les experts réseau. Basée sur une infrastructure de niveau 2 (VPLS), elle permet de créer des réseaux privés étendus entre les zones de disponibilité d'une région, et d'exposer vos services sur Internet. Elle convient aux architectures cloud hybrides complexes, lorsque vous souhaitez garder un contrôle total sur votre topologie réseau et gérer vous-même vos équipements de sécurité.

Le Private Backbone repose sur deux piliers, chacun détaillé dans sa page :

- les **[réseaux privés](../private_network/concepts.md)** régionaux (technologie VPLS) ;
- l'**[accès Internet](../internet/concepts.md)** (adressage public, BGP, Anti-DDoS).

<a id="3-comparaison-private-backbone-vs-vpc"></a>

### Comparaison Private Backbone vs VPC

| Critère            | Private Backbone                  | VPC                        |
|--------------------|-----------------------------------|----------------------------|
| Niveau réseau      | L2 (VPLS)                         | L3 (routage)               |
| Gestion            | Manuelle (expert)                 | Automatisée (cloud-native) |
| Contrôle topologie | Total                             | Guidé                      |
| Cas d'usage        | Architectures hybrides complexes  | Applications cloud-native  |
| Flexibilité        | Maximum                           | Standard cloud             |

:::tip[VPC pour une expérience cloud-native]
Pour une expérience réseau simplifiée et automatisée, privilégiez le produit **[VPC](/network/vpc)**.
Le Private Backbone est recommandé si vous avez des besoins d'extension L2 ou de contrôle fin de la topologie réseau.
:::

### Publics et cas d'usage

- **Architectes réseau** : architectures cloud hybrides avec extension L2 et L3.
- **Organisations multi-sites** : extension d'un réseau d'entreprise entre zones de disponibilité.
- **Données sensibles** : communication privée, sans exposition sur Internet.
- **Exposition de services** : services web, API ou applicatifs publiés sur Internet derrière votre propre pare-feu.
- **Housing** : connexion Internet et réseau privé pour des équipements hébergés.

## Avantages

| Avantage                     | Description                                                                                |
|------------------------------|--------------------------------------------------------------------------------------------|
| Extension L2 transparente    | Le VPLS étend un réseau de niveau 2 entre les zones de disponibilité, comme un LAN unique. |
| Isolation                    | Chaque VLAN privé est isolé ; vous contrôlez entièrement les accès.                        |
| Connectivité externe         | Des ports 1 Gbps / 10 Gbps raccordent vos sites, opérateurs ou équipements hébergés.      |
| Circuits dédiés              | Des liens à débit garanti, livrés sur deux chemins optiques diversifiés.                  |
| Partage inter-tenants        | Un réseau privé peut être partagé entre les tenants d'une même organisation.              |

## Fonctionnalités

| Fonctionnalité              | Description                                                                              |
|-----------------------------|------------------------------------------------------------------------------------------|
| VLAN privés régionaux       | Réseaux virtuels étendus entre les zones de disponibilité.                               |
| VLAN tagging et mode Trunk  | Support 802.1q et QinQ (802.1ad), agrégation de VLANs sur un seul lien.                  |
| Partage inter-tenants       | Réseaux partagés au sein d'une même organisation.                                        |
| Connectivité externe        | Ports 1 Gbps / 10 Gbps pour IPSEC, MPLS ou fibre.                                        |
| Circuits dédiés             | Ethernet 1G / 10G et Fiber Channel 8G / 16G.                                             |
| IP publiques                | Adresses IPv4 et IPv6 publiques pour exposer vos services.                               |
| DNS inverse (PTR)           | Enregistrement PTR personnalisable pour chaque adresse IP publique.                      |
| Anti-DDoS natif             | Protection incluse sur l'accès Internet contre les attaques volumétriques.               |
| Peering eBGP                | Annonce de vos propres préfixes IPv4 et IPv6.                                            |

<a id="1-réseaux-privés-vpls"></a>

## Architecture

### Architecture L2 étendue

Les réseaux privés reposent sur la technologie **VPLS (Virtual Private LAN Service)**. Elle crée un réseau de niveau 2 (couche Ethernet) transparent et étendu entre toutes les **zones de disponibilité** d'une région.

Le réseau MPLS sous-jacent assure :

- une connectivité inter-services jusqu'à **100 Gbps** ;
- une extension L2 point-à-multipoint **transparente** pour les clients ;
- des **chemins diversifiés** pour la haute disponibilité.

### VLANs privés régionaux

Chaque réseau virtuel est un **VLAN privé** isolé, propagé entre les clusters de la région :

- nommage personnalisable, adressage IP libre (vous choisissez votre plan d'adressage) ;
- support **802.1q** (VLAN tagging) et **QinQ / 802.1ad** (double tagging) ;
- possibilité de **mode Trunk** : agréger plusieurs VLANs sur un seul lien physique ;
- propagation sélective : choix des clusters cibles (limite de 20 réseaux par action).

### Partage inter-tenants

Un réseau privé peut être **partagé entre plusieurs tenants** d'une même organisation :

- activation via la Console Cloud Temple ;
- liste des tenants filtrée selon l'organisation et les droits ;
- visualisation graphique de la propagation sur les clusters et hyperviseurs.

### Connectivité externe

Des ports physiques **1 Gbps / 10 Gbps** (fibre ou cuivre) permettent de raccorder :

- des équipements réseau hébergés en zone commune (pare-feu, routeurs) ;
- des liaisons IPSEC, MPLS ou fibre vers des sites on-premise ;
- des opérateurs tiers.

Ces ports font l'objet d'une **demande de service** et sont livrés sur devis.

<a id="2-accès-internet--adressage-public"></a>

### Accès Internet

#### Blocs d'adresses IP publiques

Des blocs d'**adresses IP publiques** déclarées au RIPE sont mis à disposition :

- **IPv4** : blocs à partir de 1 adresse ;
- **IPv6** : blocs à partir de /64.

Ces adresses permettent d'exposer vos services sur Internet depuis les infrastructures Cloud Temple.

#### Gestion DNS inverse (PTR)

Pour chaque adresse IP publique, vous pouvez configurer un **enregistrement PTR** personnalisé via la Console, pour la résolution DNS inverse de vos services.

#### Anti-DDoS natif

La protection **Anti-DDoS** est incluse nativement sur l'accès Internet. Elle protège vos services exposés contre les attaques volumétriques, sans configuration supplémentaire.

#### BGP & Routage avancé

Pour un contrôle fin du routage :

- peering **eBGP** pour annoncer vos propres préfixes IP ;
- configuration de **route servers** et de voisins BGP ;
- support des préfixes IPv4 et IPv6 ;
- compatible avec les pare-feu de votre choix (FortiGate, pfSense, etc.).

#### Cas d'usage Internet

- Exposition de services web, API ou applicatifs sur Internet.
- Connexion Internet pour des équipements en housing.
- Architectures avec pare-feu dédié gérant les flux entrants et sortants.
- Peering BGP pour les organisations disposant de leur propre AS.

### Intégration avec les services Cloud Temple

Le Private Backbone est le socle réseau des services Cloud Temple. IaaS OpenSource, IaaS VMware, PaaS OpenShift, Housing et VPC peuvent consommer des adresses IP publiques et s'intégrer aux réseaux privés.

## Régions et zones de disponibilité

Le Private Backbone est disponible dans la région FR1. Ses réseaux privés s'étendent entre toutes les zones de disponibilité de la région.

## Caractéristiques techniques

| Paramètre                  | Valeur                                        |
|----------------------------|-----------------------------------------------|
| Performance réseau d'une VM | 10 Gbps maximum                              |
| Connectivité inter-services | Jusqu'à 100 Gbps                             |
| Connectivité externe       | Ports 1 / 10 Gbps                             |
| Adressage public           | IPv4 à partir d'une adresse, IPv6 à partir de /64 |

### Circuits dédiés

Pour les besoins de haute bande passante avec garantie de débit :

| Type              | Débit   | Engagement |
|-------------------|---------|------------|
| Ethernet 1G       | 1 Gbps  | 36 mois    |
| Ethernet 10G      | 10 Gbps | 36 mois    |
| Fiber Channel 8G  | 8 Gbps  | 36 mois    |
| Fiber Channel 16G | 16 Gbps | 36 mois    |

Tous les circuits dédiés sont livrés sur **deux chemins optiques diversifiés**.

### Limites

- La propagation d'un réseau privé se fait sur 20 réseaux au maximum par action.
- La performance réseau d'une VM est limitée à 10 Gbps.

## Sécurité et conformité

Le Private Backbone est certifié HDS et ISO 27001.

- **Isolation** : chaque VLAN privé est isolé, et le partage entre tenants est limité à une même organisation.
- **Protection** : l'accès Internet intègre une protection Anti-DDoS contre les attaques volumétriques.

## Disponibilité du service

L'objectif de disponibilité du réseau est de 99,99 %, mesuré sur un mois.

## Responsabilités

La répartition des responsabilités entre le client et Cloud Temple est détaillée dans la [matrice de responsabilités (RACI) réseau](../../contractual/network/raci.md).

## Réversibilité

Sans objet : le Private Backbone achemine vos flux réseau et ne conserve pas de données client. Votre plan d'adressage et la configuration de vos équipements restent sous votre contrôle.

## Tarification

Les tarifs du Private Backbone sont publiés sur la page produit du site Cloud Temple :
[Private Backbone — tarifs](https://www.cloud-temple.com/produits/private-backbone/).
