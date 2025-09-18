---
title: Guide de démarrage
---
import marketplaceCatalog from './images/marketplace_catalog.png'
import marketplaceSolutionDetails from './images/marketplace_solution_details.png'

# QuickStart pour la Marketplace Cloud Temple

Cette page vous guide à travers les étapes initiales pour utiliser la **Marketplace Cloud Temple** depuis la console. Suivez ces instructions pour découvrir les solutions disponibles et les déployer rapidement.

---

## Prérequis

Avant de commencer, assurez-vous des points suivants :

1. **Souscription activée** : Pour permettre des déploiement votre organisation doit avoir souscrit à au moins un service Cloud Temple (IaaS OpenSource ou IaaS VMware). Dans le cadre de contact avec nos partenaire vous n'avez pas besoin de souscription spécifique.
2. **Permissions utilisateur** : Votre compte utilisateur doit disposer des droits nécessaires pour accéder à la console et des droits d'écritures sur les environnements cibles lorsque vous souhaitez y déployer des ressources.
3. **Environnement cible** : Disposer d'un tenant configuré pour le déploiement des solutions.

---

## Accès à la Marketplace

### 1. Accès depuis la console Shiva

Une fois connecté à la console Cloud Temple, vous pouvez accéder à la Marketplace de plusieurs façons :

- **Menu principal** : Un menu **Marketplace** est disponible dans la navigation principale
- **Pages machines virtuelles** : La Marketplace est également accessible depuis les pages de création de machines virtuelles dans les environnements OpenIaaS et VMware

### 2. Page Marketplace

La page Marketplace présente un catalogue des solutions disponibles. Chaque solution affiche :

- **Nom et logo** de la solution
- **Description courte**
- **Éditeur/Partenaire**
- **Type de solution** (VM Image, Solution SaaS, etc.)

<img src={marketplaceCatalog} />

---

## Consultation des détails d'une solution

### Accès aux informations détaillées

En cliquant sur une solution, vous accédez à une page de détails comprenant :

- **Description complète** de la solution
- **Spécifications techniques** (si applicable)
- **Prérequis** de déploiement
- **Documentation** fournie par l'éditeur
- **Options de déploiement** disponibles

<img src={marketplaceSolutionDetails} />

---

## Actions disponibles

Selon le type de solution, différentes actions sont possibles :

### Déploiement d'images de machines virtuelles

Pour les solutions compatibles avec vos environnements OpenIaaS ou VMware, vous pouvez déployer directement depuis la Marketplace.

**Note importante :** Le déploiement direct n'est disponible que pour les images ayant votre environnement dans leurs cibles compatibles.

**Guides détaillés :**
- [Comment déployer une image sur OpenIaaS ?](tutorials/deploy_openiaas)
- [Comment déployer une image sur VMware ?](tutorials/deploy_vmware)

### Contact avec les partenaires

Pour les solutions nécessitant une mise en relation, vous pouvez contacter directement le partenaire éditeur.

**Guide détaillé :**
- [Comment contacter un partenaire ?](tutorials/contact_partner)

---
