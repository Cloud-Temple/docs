---
title: Vue d'ensemble
---

Le provider Terraform Cloud Temple vous permet de gérer l'infrastructure de votre compte Cloud Temple en utilisant l'approche Infrastructure as Code (IaC). Il offre une intégration complète avec les services d'infrastructure Cloud Temple, permettant de provisionner, configurer et gérer vos ressources cloud de manière déclarative et reproductible.

## Fonctionnalités principales

- **Infrastructure as Code** : Définissez votre infrastructure dans des fichiers de configuration versionnables
- **Gestion déclarative** : Décrivez l'état souhaité de votre infrastructure, Terraform s'occupe du reste
- **Automatisation complète** : Automatisez le provisionnement et la gestion de vos ressources
- **Reproducibilité** : Déployez des environnements identiques de manière fiable
- **Gestion des dépendances** : Terraform gère automatiquement l'ordre de création des ressources

## Produits couverts

Le provider Terraform Cloud Temple prend en charge les services suivants :

### IaaS VMware

Gérez vos machines virtuelles VMware avec toutes les fonctionnalités avancées de virtualisation :

- **Machines virtuelles** : Création et configuration de machines virtuelles
- **Disques virtuels** : Création et configuration des disques virtuels
- **Adaptateurs réseau** : Gestion des adapteurs réseau des machines virtuelles
- **Contrôleurs virtuels** : Gestion des contrôleurs de disques et autres périphériques
- **Cloud-Init** : Configuration automatisée au démarrage
- **Sauvegarde** : Intégration avec les politiques de sauvegarde Cloud Temple

### IaaS OpenSource

Provisionnez et gérez des machines virtuelles sur l'infrastructure OpenSource basée sur XCP-ng :

- **Machines virtuelles** : Création et gestion de machines virtuelles
- **Disques virtuels** : Création et configuration des disques virtuels
- **Adaptateurs réseau** : Création et configuration des adapteurs réseau des machines virtuelles
- **Réplication** : Politiques de réplication des données
- **Haute disponibilité** : Configuration HA (disabled, restart, best-effort)
- **Cloud-Init** : Configuration automatisée compatible NoCloud
- **Sauvegarde** : Intégration avec les politiques de sauvegarde Cloud Temple

### Stockage Objet

Gérez vos espaces de stockage objet S3-compatible :

- **Buckets** : Création et configuration de buckets
- **Comptes de stockage** : Gestion des identités et credentials S3
- **ACL** : Contrôle d'accès granulaire aux buckets
- **Versioning** : Gestion des versions d'objets

## Conditions préalables

Avant d'utiliser le provider Terraform Cloud Temple, assurez-vous de disposer de :

### Accès à la Console Cloud Temple

Vous devez avoir accès à la [Console Cloud Temple](https://shiva.cloud-temple.com) avec les droits appropriés sur le tenant sur lequel vous souhaitez travailler.

### Clé API

Le provider nécessite des identifiants API Cloud Temple :

- **Client ID** : Identifiant client pour l'authentification
- **Secret ID** : Secret associé au client ID

Ces credentials peuvent être générés depuis la Console Cloud Temple en suivant [cette procédure](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api).

### Droits et permissions

Selon les ressources que vous souhaitez gérer, vous devez disposer des rôles appropriés :

#### Pour IaaS VMware

- `compute_iaas_vmware_infrastructure_read`
- `compute_iaas_vmware_infrastructure_write`
- `compute_iaas_vmware_management`
- `compute_iaas_vmware_read`
- `compute_iaas_vmware_virtual_machine_power`
- `backup_iaas_spp_read` et `backup_iaas_spp_write` (pour la sauvegarde)

#### Pour IaaS OpenSource

- `compute_iaas_opensource_management`
- `compute_iaas_opensource_read`
- `compute_iaas_opensource_virtual_machine_power`
- `backup_iaas_opensource_read` et `backup_iaas_opensource_write` (pour la sauvegarde)

#### Pour Object Storage

- `object-storage_write`
- `object-storage_read`
- `object-storage_iam_management`

#### Droits communs

- `activity_read`
- `tag_read` et `tag_write`

## Compatibilité Terraform

Le provider Cloud Temple est compatible avec :

- **Terraform** : Version 1.0 et supérieures
- **OpenTofu** : Compatible avec les versions récentes

## Logging et débogage

Pour activer le logging détaillé du provider :

```bash
# Logging niveau DEBUG
export TF_LOG=DEBUG
terraform apply

# Logging au format JSON
export TF_LOG=JSON
terraform apply

# Enregistrer les logs dans un fichier
export TF_LOG_PATH=./terraform.log
terraform apply
```

## Support et ressources

- **Documentation officielle** : [Terraform Registry](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- **Code source** : [GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)
- **Issues** : [GitHub Issues](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues)

## Prochaines étapes

- [Concepts](concepts.md) : Comprendre les concepts clés du provider
- [Guide de démarrage](quickstart.md) : Créer votre première infrastructure
- [Tutoriels](tutorials.md) : Exemples pratiques et cas d'usage
