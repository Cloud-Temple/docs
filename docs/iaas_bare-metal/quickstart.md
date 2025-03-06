---
title: Guide de démarrage
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# QuickStart pour l'offre Bare Metal

Cette page vous guide à travers les étapes initiales pour utiliser l'offre **Bare Metal** depuis la console Cloud Temple. Suivez ces instructions pour découvrir les menus et fonctionnalités disponibles.

---

## Prérequis
Avant de commencer, assurez-vous des points suivants :
1. **Souscription activée** : Votre organisation doit avoir souscrit à l'offre Bare Metal.
2. **Permissions utilisateur** : Votre compte utilisateur doit disposer des droits nécessaires pour accéder et gérer les ressources Bare Metal.

---

## Accès à l'interface Bare Metal

Une fois la souscription activée et les permissions configurées, un nouveau menu intitulé **Bare Metal** apparaît dans la console Cloud Temple. Ce menu contient deux sous-menus principaux : **Bare Metal** et **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. Sous-menu **Bare Metal**

Le sous-menu **Bare Metal** vous présente un tableau listant toutes les instances Bare Metal disponibles. Ce tableau inclut les informations principales pour chaque instance :
- **Nom du Bare Metal**
- **État**
- **Configuration matérielle**
- **Adresse IP**

<img src={shivaBareMetalList} />

#### Fonctionnalités principales
- **Bouton Action** : Permet d'accéder directement à la console d'administration du Bare Metal.
- **Nom cliquable** : En cliquant sur le nom d'une instance Bare Metal, une nouvelle page s'affiche avec les **détails complets** de l'instance :
  - Informations sur le matériel (RAM, CPU, GPU, etc.).
  - Configuration réseau (adresses IP associées).
  - Informations de connectivité pour la gestion.

<img src={shivaBareMetalDetails} />


---

### 2. Sous-menu **Volumes**

Le sous-menu **Volumes** affiche un tableau listant tous les volumes de stockage associés à votre souscription Bare Metal. Pour chaque volume, les informations suivantes sont disponibles :
- **Nom du volume**
- **Capacité**
- **Classe de performance** (IOPS par To)
- **État** (Disponible, En cours de déploiement, etc.)

<img src={shivaBareMetalStoragelist} />


#### Fonctionnalités principales
- Gestion des volumes : Depuis ce tableau, vous pouvez mapper les volumes à vos instances Bare Metal.

---
