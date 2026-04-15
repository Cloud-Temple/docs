---
title: Créer une machine virtuelle
---

Ce tutoriel vous guide à travers les différentes méthodes de création d'une machine virtuelle dans votre environnement OpenIaaS.

## Introduction

La Console Cloud Temple vous propose **trois méthodes** pour créer une machine virtuelle OpenIaaS :

1. **Depuis un Modèle** : Déploiement rapide à partir d'un modèle préconfiguré
2. **Import XVA** : Import d'une machine virtuelle depuis un fichier XVA
3. **Depuis le Marketplace** : Déploiement d'une image certifiée du catalogue Cloud Temple

## Prérequis

- Disposer d'un environnement OpenIaaS configuré
- Avoir les permissions nécessaires pour créer des machines virtuelles
- Pour le mode XVA : disposer d'un fichier XVA valide
- Pour le mode Marketplace : avoir accès au catalogue Marketplace

## Accès à la création

Depuis le menu **OpenIaaS** > **Machines Virtuelles**, cliquez sur le bouton **Nouvelle machine virtuelle**.

Une fenêtre s'ouvre vous présentant les trois méthodes de déploiement disponibles. Sélectionnez la méthode souhaitée pour continuer.

---

## Méthode 1 : Déploiement depuis un Modèle

Cette méthode permet de créer rapidement une machine virtuelle à partir d'un modèle préconfiguré.

### Étape 1 : Sélection du Pool et du Modèle

Sélectionnez d'abord le **Pool** (zone de disponibilité) où vous souhaitez déployer votre machine virtuelle, puis choisissez le **Modèle** à utiliser comme base.

### Étape 2 : Informations générales

Configurez les paramètres de base de votre machine virtuelle :

- **Nom** : Nom unique de la machine virtuelle (caractères alphanumériques, tirets, underscores, points et espaces autorisés)
- **CPU** : Nombre de cœurs virtuels (minimum 1)
- **RAM** : Quantité de mémoire avec sélection de l'unité (Mo, Go, To)

### Étape 3 : Cloud Init (optionnel)

Cloud Init permet d'automatiser la configuration initiale de votre machine virtuelle au premier démarrage.

Vous pouvez configurer :

- **Cloud Config** : Configuration générale (hostname, utilisateurs, packages, etc.)
- **Network Config** : Configuration réseau au format Netplan v2
- **Destroy After Boot** : Option pour supprimer la configuration Cloud Init après le premier démarrage

:::info
Cette étape est entièrement optionnelle. Si vous n'avez pas besoin de Cloud Init, laissez les champs par défaut et passez à l'étape suivante.
:::

### Étape 4 : Configuration des disques

Gérez les disques virtuels de votre machine virtuelle. Les disques du modèle sont automatiquement ajoutés et ne peuvent pas être supprimés.

Pour chaque disque, configurez :

- **Nom** : Nom unique du disque
- **Capacité** : Taille du disque avec sélection de l'unité (Mo, Go, To)
- **Block Storage** : Stockage de destination

Vous pouvez ajouter jusqu'à 24 disques virtuels au total. Cliquez sur **Ajouter un disque** pour créer un nouveau disque.

:::warning
Si vous configurez Cloud Init, au moins un disque est obligatoire pour stocker la configuration.
:::

### Étape 5 : Configuration des adaptateurs réseau

Configurez les interfaces réseau de votre machine virtuelle (maximum 7 adaptateurs).

Pour chaque adaptateur réseau :

- **Réseau** : Sélectionnez le réseau virtuel (avec indication VPC ou Private Backbone)
- **Adresse MAC** : Optionnelle, générée automatiquement si non spécifiée

:::info VPC
La configuration des réseaux VPC n'est disponible que depuis l'onglet Réseau de la machine virtuelle une fois l'opération terminée. La configuration depuis ce formulaire sera disponible prochainement.
:::

Cliquez sur **Ajouter un adaptateur réseau** pour créer une nouvelle interface.

### Étape 6 : Haute disponibilité

Configurez le niveau de haute disponibilité de votre machine virtuelle.

:::tip
Pour plus d'informations sur la configuration de la haute disponibilité et les différents modes disponibles, consultez le guide dédié : [Gestion de la haute disponibilité d'une machine virtuelle](./high_availability/manage_vm)
:::

### Étape 7 : Résumé et validation

Vérifiez l'ensemble de votre configuration avant de créer la machine virtuelle.

Le résumé affiche tous les paramètres configurés :
- Informations générales (nom, CPU, RAM)
- Modèle sélectionné
- Cloud Init (si configuré)
- Disques
- Adaptateurs réseau
- Haute disponibilité

Cliquez sur **Créer** pour lancer le déploiement de votre machine virtuelle.

---

## Méthode 2 : Import depuis un fichier XVA

Cette méthode permet d'importer une machine virtuelle depuis un fichier au format XVA (XenServer Virtual Appliance).

### Présentation du format XVA

Le format XVA est le format d'export/import natif de XCP-ng et XenServer. Il contient une machine virtuelle complète avec ses disques et sa configuration.

### Étape 1 : Nom de la machine virtuelle

Définissez le nom de votre machine virtuelle.

Le nom doit respecter les mêmes règles que pour le déploiement depuis un modèle (caractères alphanumériques, tirets, underscores, points et espaces).

### Étape 2 : Upload du fichier XVA

Importez votre fichier XVA depuis votre ordinateur.

:::info
Le fichier doit avoir l'extension `.xva`. Les noms de fichiers ne doivent contenir que des caractères alphanumériques, tirets, underscores et points (pas d'espaces).
:::

Glissez-déposez votre fichier dans la zone prévue ou cliquez pour sélectionner le fichier depuis votre explorateur.

### Étape 3 : Sélection du stockage

Choisissez le stockage de destination pour votre machine virtuelle importée.

Sélectionnez un Block Storage dans l'arborescence. Le système vérifie automatiquement que l'espace disponible est suffisant pour accueillir votre fichier XVA.

### Étape 4 : Résumé et validation

Vérifiez les informations avant de lancer l'import.

Le résumé affiche :
- Le nom de la VM
- Le type de déploiement (XVA)
- Le fichier XVA et sa taille
- Le stockage de destination

Cliquez sur **Créer** pour lancer l'import de votre machine virtuelle.

### À propos de l'option skip_set_template

Lors de l'import d'un fichier XVA, l'option `skip_set_template` détermine si le résultat de l'import sera une machine virtuelle directement utilisable ou un modèle. Cette option est notamment utilisée avec des outils d'automatisation comme Packer. Plus d'informations : [documentation XCP-ng](https://xcp-ng.org/blog/2024/02/22/using-packer-with-xcp-ng/).

---

## Méthode 3 : Déploiement depuis le Marketplace

Le Marketplace Cloud Temple propose des images de machines virtuelles certifiées et prêtes à l'emploi.

### Sélection d'une image Marketplace

Parcourez le catalogue des images disponibles pour OpenIaaS.

Seules les images compatibles avec la plateforme OpenIaaS sont affichées.

### Configuration de la machine virtuelle

La configuration depuis le Marketplace suit un processus similaire au déploiement depuis un modèle, avec quelques spécificités :

- Les caractéristiques système (OS, CPU, RAM) sont prédéfinies par l'image Marketplace
- Vous pouvez personnaliser le nom de la VM
- Cloud Init est disponible pour la configuration initiale
- Le mapping réseau permet d'associer les interfaces réseau de l'image à vos réseaux

:::tip
Pour un guide détaillé du déploiement Marketplace, consultez le tutoriel dédié : [Déployer une image sur OpenIaaS](../../marketplace/tutorials/deploy_openiaas)
:::

---

## Bonnes pratiques

### Choix de la méthode de déploiement

- **Modèle** : Idéal pour des déploiements standards et répétitifs au sein de votre organisation
- **XVA** : Recommandé pour migrer des VMs existantes ou utiliser des images personnalisées
- **Marketplace** : Parfait pour démarrer rapidement avec des images certifiées et maintenues

### Configuration des ressources

- **CPU et RAM** : Dimensionnez selon les besoins réels de votre charge de travail
- **Disques** : Prévoyez une marge de croissance pour éviter les redimensionnements futurs

### Haute disponibilité

- Activez le mode **Restart** pour les applications critiques
- Utilisez **Best-Effort** pour les environnements moins critiques

### Cloud Init

- Utilisez Cloud Init pour standardiser la configuration de vos VMs
- Documentez vos configurations Cloud Init pour faciliter leur réutilisation
- Testez vos configurations sur des VMs de test avant déploiement en production

### Sécurité

- Utilisez des noms explicites pour faciliter l'identification et la gestion
- Planifiez une stratégie de sauvegarde dès la création de la VM
