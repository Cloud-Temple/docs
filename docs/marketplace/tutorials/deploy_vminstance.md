---
title: Déployer une image sur VM Instance
---

import marketplaceVmInstanceDeployment from '@site/docs/marketplace/images/marketplace_vminstance_deploy.jpg'
import marketplaceVmInstanceConfig from '@site/docs/marketplace/images/marketplace_vminstance_config.jpg'

Ce tutoriel vous guide pour déployer une image de machine virtuelle depuis la Marketplace Cloud Temple vers le service VM Instances.

## Prérequis

- Disposer d'un tenant avec le service **VM Instances** activé et les permissions de création de machines virtuelles.
- Choisir une image ayant **VM Instance** dans ses cibles compatibles, disponible pour la famille d'instance et la zone de disponibilité souhaitées.
- Disposer de quotas suffisants en CPU, RAM et stockage, ainsi que d'un réseau accessible dans la zone choisie.

## Étapes de déploiement

### 1. Sélection et déploiement

Depuis la page de détail de l'image, sélectionnez **VM Instance** dans les **Options de déploiement**, puis cliquez sur **Déployer**. L'assistant de création s'ouvre avec l'image présélectionnée.

<img src={marketplaceVmInstanceDeployment} alt="Sélection de la cible VM Instance dans les options de déploiement Marketplace" />

### 2. Configuration de la machine virtuelle

Renseignez les étapes de l'assistant :

- **Famille d'instance** et **zone de disponibilité** : choisissez parmi les options compatibles avec l'image.
- **Gabarit** : sélectionnez les ressources CPU et RAM adaptées à votre besoin et aux prérequis de l'image.
- **Configuration de l'instance** : renseignez le nom de la VM et sa politique de sauvegarde.
- **Cloud Init** : si nécessaire, renseignez **Cloud Config** pour la configuration au premier démarrage et **Network Config** pour la configuration réseau du système invité. Vérifiez les valeurs éventuellement préremplies et le format accepté par l'image dans sa fiche Marketplace.
- **Disques** : vérifiez les disques issus de l'image, leur capacité et leur type de stockage ; ajoutez des disques de données si nécessaire.
- **Adaptateurs réseaux** : raccordez les interfaces aux réseaux de votre environnement.

<img src={marketplaceVmInstanceConfig} alt="Configuration de la machine virtuelle dans l'assistant VM Instances" />

À l'étape **Sommaire**, vérifiez la configuration et le coût estimé, puis cliquez sur **Créer**.

Le [tutoriel de création d'une VM Instance](../../public_cloud/vm_instances/tutorials/create_vm.md) détaille les paramètres de chaque étape.

## Accès alternatif

Vous pouvez également sélectionner une image Marketplace depuis le service VM Instances :

1. Dans la Console Cloud Temple, ouvrez **VM Instances** > **Instances**.
2. Cliquez sur **Nouvelle machine virtuelle**.
3. Sélectionnez une famille d'instance et une zone de disponibilité.
4. À l'étape **Choisir une image**, sélectionnez l'image dans le catalogue intégré.
5. Complétez les étapes de configuration, puis validez le **Sommaire**.

## Suivi du déploiement

Une fois la création lancée :

- Consultez la liste **VM Instances** > **Instances** pour suivre l'état de la VM.
- Ouvrez sa fiche pour vérifier ses informations, ses disques et ses adaptateurs réseau.
- Lorsqu'elle est démarrée, utilisez la **Console** ou le mode de connexion indiqué dans la fiche Marketplace de l'image.

Si l'image fournit des identifiants par défaut, remplacez le mot de passe dès la première connexion.
