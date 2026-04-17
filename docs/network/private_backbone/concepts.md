---
title: Concepts
---

# Concepts — Private Backbone

Le Private Backbone repose sur deux piliers complémentaires : les **réseaux privés régionaux** (technologie VPLS) et la **connectivité Internet** (adressage public, BGP, Anti-DDoS).

---

## 1. Réseaux Privés (VPLS)

### Architecture L2 étendue

Cloud Temple propose des réseaux privés basés sur la technologie **VPLS (Virtual Private LAN Service)**. Cette technologie crée un réseau de niveau 2 (couche Ethernet) transparent et étendu entre toutes les **zones de disponibilité** d'une région.

Le réseau MPLS sous-jacent assure :
- Une connectivité inter-services jusqu'à **100 Gbps**
- Une extension L2 point-à-multipoint **transparente** pour les clients
- Des **chemins diversifiés** pour la haute disponibilité

### VLANs privés régionaux

Chaque réseau virtuel est un **VLAN privé** isolé, propagé entre les clusters de la région :

- Nommage personnalisable, adressage IP libre (le client choisit son plan d'adressage)
- Support **802.1q** (VLAN tagging) et **QinQ / 802.1ad** (double tagging)
- Possibilité de **mode Trunk** : agréger plusieurs VLANs sur un seul lien physique
- Propagation sélective : choix des clusters cibles (limite de 20 réseaux par action)

### Partage inter-tenants

Un réseau privé peut être **partagé entre plusieurs tenants** d'une même organisation :
- Activation via la console Cloud Temple
- Liste des tenants filtrée selon l'organisation et les droits
- Visualisation graphique de la propagation sur les clusters et hyperviseurs

### Connectivité externe

Des ports physiques **1 Gbps / 10 Gbps** (fibre ou cuivre) permettent de raccorder :
- Des équipements réseau hébergés en zone commune (firewalls, routeurs)
- Des liaisons IPSEC, MPLS ou fibre vers des sites on-premise
- Des opérateurs tiers

Ces ports font l'objet d'une **demande de service** et sont livrés sur devis.

### Circuits dédiés

Pour les besoins de haute bande passante avec garantie de débit :

| Type | Débit | Engagement |
|------|-------|-----------|
| Ethernet 1G | 1 Gbps | 36 mois |
| Ethernet 10G | 10 Gbps | 36 mois |
| Fiber Channel 8G | 8 Gbps | 36 mois |
| Fiber Channel 16G | 16 Gbps | 36 mois |

Tous les circuits dédiés sont livrés sur **deux chemins optiques diversifiés** automatiquement.

---

## 2. Accès Internet & Adressage Public

### Blocs d'adresses IP publiques

Cloud Temple met à disposition des blocs d'**adresses IP publiques** déclarées au RIPE :
- **IPv4** : blocs à partir de 1 adresse
- **IPv6** : blocs à partir de /64 (64 adresses)

Ces adresses permettent d'exposer vos services sur Internet depuis les infrastructures Cloud Temple.

### Gestion DNS inverse (PTR)

Pour chaque adresse IP publique, vous pouvez configurer un **enregistrement PTR** personnalisé via la console Cloud Temple, permettant la résolution DNS inverse de vos services.

### Anti-DDoS natif

La protection **Anti-DDoS** est incluse nativement sur l'accès Internet Cloud Temple. Elle protège vos services exposés contre les attaques volumétriques sans configuration supplémentaire.

### BGP & Routage avancé

Pour les organisations nécessitant un contrôle fin du routage :
- Peering **eBGP** disponible pour annoncer vos propres préfixes IP
- Configuration de **route servers** et de voisins BGP
- Support des préfixes IPv4 et IPv6
- Compatible avec les firewalls de votre choix (FortiGate, pfSense, etc.)

### Cas d'usage Internet

- Exposition de services web, API, ou applicatifs sur Internet
- Connexion Internet pour des équipements en housing
- Architectures avec firewall dédié gérant les flux entrants/sortants
- Peering BGP pour les organisations avec leur propre AS

---

## 3. Comparaison Private Backbone vs VPC

| Critère | Private Backbone | VPC |
|---------|-----------------|-----|
| Niveau réseau | L2 (VPLS) | L3 (routage) |
| Gestion | Manuelle (expert) | Automatisée (cloud-native) |
| Contrôle topologie | Total | Guidé |
| Cas d'usage | Architectures hybrides complexes | Applications cloud-native |
| Flexibilité | Maximum | Standard cloud |

:::tip[VPC pour une expérience cloud-native]
Pour une expérience réseau simplifiée et automatisée, privilégiez le produit **[VPC](/network/vpc)**.  
Le Private Backbone est recommandé si vous avez des besoins d'extension L2 ou de contrôle fin de la topologie réseau.
:::
