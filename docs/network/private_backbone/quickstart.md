---
title: Guide de démarrage
---

# Guide de démarrage — Private Backbone

Ce guide vous accompagne pour créer votre premier réseau privé inter-AZ et configurer votre accès Internet avec des IP publiques.

---

## Prérequis

- Accès à la **Console Cloud Temple** avec les droits réseau activés
- Au moins un cluster de compute déployé dans votre tenant
- Pour l'accès Internet : une demande de service préalable pour les ports de connectivité externe

---

## Partie 1 — Créer un réseau privé (VLAN)

### Étape 1 : Accéder au menu Réseau

Dans la Console Cloud Temple, cliquez sur le menu **Réseau** dans la barre de navigation de gauche.

### Étape 2 : Créer un nouveau réseau

Cliquez sur **Nouveau réseau** et renseignez :

| Champ | Description | Exemple |
|-------|-------------|---------|
| Nom | Identifiant lisible de votre réseau | `prod-backend-vlan` |
| VLAN ID | Identifiant VLAN (auto ou manuel) | `100` |
| Description | Usage du réseau (optionnel) | `Réseau backend production` |

### Étape 3 : Configurer la propagation

Sélectionnez les **clusters cibles** sur lesquels propager ce réseau.

:::caution[Limite de propagation]
La modification de propagation est limitée à **20 réseaux** par action. Pour des volumes plus importants, effectuez plusieurs actions successives.
:::

### Étape 4 : Valider

Cliquez sur **Créer**. Le VLAN est provisionné instantanément et disponible sur les clusters sélectionnés.

---

## Partie 2 — Partager un réseau entre tenants

Si votre organisation dispose de plusieurs tenants, vous pouvez partager un réseau :

1. Sélectionnez le réseau dans la liste
2. Cliquez sur **Partager**
3. Choisissez le(s) tenant(s) cible(s) dans la liste filtrée par organisation
4. Validez le partage

Le réseau apparaît alors dans la section **Partagés avec moi** du tenant destinataire.

---

## Partie 3 — Commander des IP publiques

### Étape 1 : Accéder à la section Internet

Dans la Console Cloud Temple, naviguez vers **Réseau > Internet**.

### Étape 2 : Commander un bloc d'IP

Cliquez sur **Commander des adresses IP** et choisissez :

| Type | Bloc minimum |
|------|-------------|
| IPv4 | 1 adresse |
| IPv6 | /64 (64 adresses) |

### Étape 3 : Associer les IP à vos services

Une fois le bloc attribué :
1. Sélectionnez l'adresse IP dans la liste
2. Cliquez sur **Associer**
3. Choisissez le service cible (VM, équipement, etc.)

### Étape 4 : Configurer le DNS inverse (PTR)

Pour chaque IP publique, vous pouvez définir un enregistrement PTR :
1. Cliquez sur l'IP dans la console
2. Sélectionnez **Configurer PTR**
3. Entrez le nom DNS souhaité (ex. `service.example.com`)

---

## Partie 4 — Connectivité externe (ports 1G/10G)

Pour raccorder un équipement réseau (firewall, routeur) ou une liaison opérateur :

**Ouvrez une demande de service** avec les informations suivantes :
- Nom de l'organisation et contact technique
- Nom du tenant et zone de disponibilité cible
- Type de port souhaité : **1 Gbps** ou **10 Gbps** (fibre ou cuivre)
- Réseau de destination et éventuels besoins d'hébergement physique

:::info[Délai de livraison]
Les ports de connectivité externe sont livrés sur devis après validation de la demande de service.
:::

---

## Étapes suivantes

- 📖 [Concepts Private Backbone](./concepts) — Comprendre VPLS, VLAN tagging, BGP
- 🔧 [Tutoriels](./tutorials) — Configurer FortiGate ou pfSense avec BGP
- 🌐 [Documentation VPC](../vpc/vpc) — Pour une approche réseau cloud-native
