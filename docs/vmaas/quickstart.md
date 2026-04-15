---
title: Guide de démarrage
---

## Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- Un **Tenant Cloud Temple** actif
- Une souscription au **Support Standard** minimum
- Les permissions nécessaires dans votre organisation Cloud Temple

## Déployer une machine virtuelle

### 1. Accéder au service

Connectez-vous à la **Console Cloud Temple** et naviguez vers la section **VM instances** depuis le menu principal.

### 2. Sélectionner le tenant et la zone de disponibilité

- Choisissez le **tenant** dans lequel vous souhaitez déployer la machine virtuelle.
- Sélectionnez la **zone de disponibilité (AZ)** cible parmi celles disponibles en région FR1.

### 3. Choisir une image depuis la Marketplace

Les machines virtuelles sont déployées exclusivement depuis les **images officielles de la Marketplace Cloud Temple**.

- Parcourez le catalogue d'images disponibles.
- Sélectionnez le système d'exploitation et la version souhaités.

### 4. Configurer la machine virtuelle

Renseignez les paramètres de votre instance :

| Paramètre | Description |
|-----------|-------------|
| **Classe de service** | Development, General Purpose ou Performance |
| **Gabarit (Flavor)** | Choisissez parmi les gabarits prédéfinis ou créez un gabarit custom (vCPU + RAM) |
| **Disques additionnels** | Ajoutez des volumes supplémentaires si nécessaire (jusqu'à 16 volumes, 2 To max par volume) |
| **Réseau (VPC)** | Associez la VM à votre réseau VPC |
| **Cloud-init** | Optionnel : injectez un script de pré-configuration au démarrage (clés SSH, configuration réseau, etc.) |

:::info Disque système
Le disque système (Flash) est inclus automatiquement. Sa taille (entre 15 et 100 Go) dépend du système d'exploitation choisi.
:::

### 5. Lancer le déploiement

Validez la configuration et lancez le provisionnement. Le déploiement est **automatisé et immédiat** (quelques minutes).

## Gérer vos machines virtuelles

Depuis la console, vous pouvez effectuer les actions suivantes sur vos machines virtuelles :

- **Démarrer / Arrêter / Redémarrer** la machine virtuelle
- **Ouvrir la console** pour accéder directement au système
- **Modifier la configuration** (vCPU, RAM) — nécessite l'arrêt de la VM
- **Ajouter des disques** supplémentaires
- **Consulter les métriques** de performance (CPU, RAM, Disque)
- **Configurer la sauvegarde** (option payante) avec rétention configurable

## Automatisation et Infrastructure as Code

Le service VM instances est entièrement automatisable :

### Via l'API REST

L'API REST Cloud Temple permet le contrôle programmatique complet du cycle de vie des machines virtuelles.

Référence API : [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Via Terraform

Le provider Terraform Cloud Temple permet de gérer vos VM instances en Infrastructure as Code.

```hcl
# Exemple de ressource VM instances avec Terraform
# Consultez la documentation du provider pour les attributs disponibles
resource "cloudtemple_compute_vmaas_instance" "example" {
  # ...
}
```

Consultez la [documentation Terraform](../terraform/terraform) pour l'installation et la configuration du provider.

## Ressources utiles

- [Documentation publique Cloud Temple](https://docs.cloud-temple.com/home)
- [Référence API](https://shiva.cloud-temple.com/api/)
- [Documentation Terraform](../terraform/terraform)
- [Concepts des zones de disponibilité](../additional_content/concepts_az.md)
