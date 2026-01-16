---
title: Déployer une image sur OpenIaaS
---
import marketplaceOpeniaasDeployment from '../images/marketplace_openiaas_deploy.png'
import marketplaceOpeniaasConfig from '../images/marketplace_openiaas_config.png'

Ce tutoriel vous guide pour déployer une image de machine virtuelle depuis la Marketplace Cloud Temple vers votre environnement OpenIaaS.

## Prérequis

- Disposer d'un environnement OpenIaaS configuré
- Avoir les permissions de création de machines virtuelles
- L'image doit avoir **OpenIaaS** dans ses cibles compatibles

## Étapes de déploiement

### 1. Sélection et déploiement

Depuis la page de détail d'une solution compatible OpenIaaS, sélectionnez votre environnement cible et cliquez sur **Déployer** :
<img src={marketplaceOpeniaasDeployment} />

### 2. Configuration de la machine virtuelle

Configurez les paramètres de base de votre machine virtuelle :
- **Nom** de la VM
- **Ressources** (CPU, RAM)
- **Stockage**
- **Réseau**

<img src={marketplaceOpeniaasConfig} />

Le déploiement s'effectue généralement en moins de 10 minutes selon la taille de l'image.

## Accès alternatif

Vous pouvez également accéder aux images Marketplace directement depuis la page **Machines Virtuelles** de votre environnement OpenIaaS :

1. Accédez à **Machines Virtuelles** > **Créer une VM**
2. Sélectionnez **Images Marketplace** dans les options de source
3. Choisissez votre solution dans le catalogue intégré

## Suivi du déploiement

Une fois le déploiement lancé :
- Suivez l'avancement depuis la console OpenIaaS
- La VM apparaîtra dans votre liste de machines virtuelles
