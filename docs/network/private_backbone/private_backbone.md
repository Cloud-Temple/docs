---
title: Private Backbone
slug: /network/private_backbone
---

# Private Backbone — Connectivité Avancée

> **Prenez le contrôle total de votre réseau avec une connectivité de niveau 2 étendue, conçue pour les architectures hybrides et les configurations sur mesure.**

Le **Backbone Privé** de Cloud Temple est notre produit de connectivité historique, conçue pour les experts. Basée sur une infrastructure réseau de niveau 2 (VPLS), elle permet de créer des réseaux privés étendus entre les zones de disponibilité d'une région. C'est la solution idéale pour les entreprises qui souhaitent construire des architectures cloud hybrides complexes et garder un contrôle total sur leur topologie réseau.

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Architecture VPLS, réseaux privés régionaux, accès Internet, adressage public IPv4/IPv6.</p>
    <a href="./concepts" class="card-link">Explorer les concepts →</a>
  </div>
  <div class="card">
    <h3>Guide de démarrage</h3>
    <p>Créez votre premier réseau privé et configurez votre accès Internet en quelques étapes.</p>
    <a href="./quickstart" class="card-link">Démarrer →</a>
  </div>
  <div class="card">
    <h3>Tutoriels</h3>
    <p>Configurez un FortiGate ou pfSense avec BGP pour gérer votre connectivité externe.</p>
    <a href="./tutorials" class="card-link">Voir les tutoriels →</a>
  </div>
</div>

---

## Présentation du produit

Le **Private Backbone** fournit un ensemble complet de services de bas niveau pour interconnecter et exposer vos infrastructures dans un cloud souverain. Il se compose de deux piliers :

- **Réseaux Privés (VPLS)** : Création de réseaux de niveau 2 étendus et isolés entre les zones de disponibilité, idéal pour les architectures hybrides complexes.
- **Accès Internet** : Connectivité Internet haute performance avec allocation d'adresses IP publiques (IPv4/IPv6) et protection Anti-DDoS native.

:::tip[Pour une expérience réseau cloud-native]
Pour une gestion réseau plus automatisée, notre produit **[VPC (Virtual Private Cloud)](/network/vpc)** est la solution recommandée.
:::

---

## Métriques clés

| Bénéfice | Valeur |
|----------|--------|
| Performance inter-services | Jusqu'à **100 Gbps** |
| Connectivité externe | **1G / 10G** Ethernet |
| Adressage public | **IPv4 & IPv6** disponibles |
| Extension réseau | Niveau 2 transparent via **VPLS** |
| Isolation | Segmentation **VLAN** complète |
| SLA disponibilité réseau | **99,99 %** |

---

## Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| VLAN privés régionaux | Réseaux virtuels étendus inter-AZ |
| Connectivité externe | Ports 1G/10G pour IPSEC, MPLS, Fibre |
| Circuits dédiés | Ethernet 1G/10G avec chemins diversifiés |
| VLAN Tagging | Support 802.1q et QinQ (802.1ad) |
| Partage inter-tenants | Réseaux partagés dans une même organisation |
| Mode Trunk | Agrégation de VLANs sur un seul lien |
| IP publiques IPv4/IPv6 | Allocation à l'unité, gestion DNS inverse (PTR) |
| Protection Anti-DDoS | Native sur l'accès Internet |

---

## Architecture

L'infrastructure repose sur un réseau **MPLS** avec connectivité inter-services jusqu'à 100 Gbps :

- Extension L2 point-à-multipoint transparente (VPLS)
- Ports de connexion externe (1G/10G) pour équipements en housing ou opérateurs tiers
- Chemins diversifiés automatiques pour les circuits dédiés

### Intégrations Cloud Temple

Les services suivants s'appuient sur le Private Backbone :

| Service | Type |
|---------|------|
| IaaS OpenSource | Compute |
| IaaS VMware | Compute |
| PaaS OpenShift | Containers |
| Housing | Datacenter |
| VPC | Networking |

---

## Sécurité & Conformité

**Certifications :** SecNumCloud 3.2 · HDS V1 · ISO 27001:2022 · ISAE 3402 · C5:2020

- Chiffrement physique des liens entre Availability Zones
- Isolation réseau et séparation du trafic
- Résidence des données en France (FR1)

---

## Tarification

| Service | SKU |
|---------|-----|
| VLAN privé inter-AZ | `csp:(region):network:vlan:v1` |
| Circuit dédié Ethernet 1G | `csp:(region):network:epl:1g:v1` |
| Circuit dédié Ethernet 10G | `csp:(region):network:epl:10g:v1` |
| IP publique IPv4 | `csp:(region):network:ipv4:v1` |
| IP publique IPv6 | `csp:(region):network:ipv6:v1` |

Les circuits dédiés sont livrés sur **deux chemins optiques diversifiés** avec un engagement minimum de **36 mois**.

→ **[Tarifs officiels sur cloud-temple.com](https://www.cloud-temple.com/produits/)**
