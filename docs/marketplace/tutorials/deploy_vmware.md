---
title: Déployer une image sur VMware
---
import marketplaceVmwareDeployment from '../images/marketplace_vmware_deploy.png'
import marketplaceVmwareConfig from '../images/marketplace_vmware_config.png'

Ce tutoriel vous guide pour déployer une image de machine virtuelle depuis la Marketplace Cloud Temple vers votre environnement VMware.

## Prérequis

- Disposer d'un environnement VMware configuré
- Avoir les permissions de création de machines virtuelles
- L'image doit avoir **VMware** dans ses cibles compatibles

## Étapes de déploiement

### 1. Sélection et déploiement

Depuis la page de détail d'une solution compatible VMware, sélectionnez votre environnement cible et cliquez sur **Déployer** :
<img src={marketplaceVmwareDeployment} />

### 2. Configuration de la machine virtuelle

Configurez les paramètres de base de votre machine virtuelle :
- **Nom** de la VM
- **Ressources** (CPU, RAM)
- **Stockage**
- **Réseau**

<img src={marketplaceVmwareConfig} />

Le déploiement s'effectue généralement en moins de 10 minutes selon la taille de l'image.

## Accès alternatif

Vous pouvez également accéder aux templates Marketplace directement depuis l'interface VMware :

1. Accédez à **vSphere** > **Déployer une VM**
2. Sélectionnez **Template Marketplace** comme source
3. Parcourez les images disponibles dans le catalogue intégré

## Suivi du déploiement

Une fois le déploiement lancé :
- Suivez l'avancement depuis la console VMware
- La VM apparaîtra dans votre inventaire vSphere
