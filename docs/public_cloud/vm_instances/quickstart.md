---
title: Guide de démarrage
---

## Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- Un **Tenant Cloud Temple** actif
- Une souscription au **Support Standard** minimum
- Les permissions nécessaires dans votre organisation Cloud Temple

## Accéder au service VM Instances

Connectez-vous à la **Console Cloud Temple** et naviguez vers **Cloud Public > VM Instances** depuis le menu principal.

![Dashboard Console Cloud Temple](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

Le tableau de bord vous présente un aperçu des ressources VM Instances consommées (stockage, CPU, RAM) ainsi que le nombre de machines virtuelles actives.

Cliquez sur **Cloud Public** dans la sidebar gauche pour déployer le sous-menu, puis sélectionnez **VM Instances**.

![Navigation vers VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Vous arrivez sur la liste de vos VM Instances :

![Liste des VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Le tableau affiche pour chaque VM : son nom, son statut (Allumée / Éteinte), la zone de disponibilité, la famille d'instance, le modèle, ainsi que les ressources allouées (CPU, RAM, Taille disque).

## Déployer une machine virtuelle

Cliquez sur le bouton **+ Nouvelle machine virtuelle** en haut à droite pour ouvrir le wizard de création. Ce wizard se déroule en **9 étapes**.

### Étape 1 — Famille d'instance

![Étape 1 : Famille d'instance](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Choisissez la **famille d'instance** adaptée à votre charge de travail :

| Famille | Description | CPU |
|---------|-------------|-----|
| **Development** | Coût optimisé, pour les environnements de test et de recette | Mutualisés |
| **General Purpose** | Équilibre optimal vCPU/RAM pour les charges standards | Mutualisés |

:::info
La famille **Performance** (vCPU dédiés) est disponible via le gabarit personnalisé.
:::

### Étape 2 — Zone de disponibilité

![Étape 2 : Zone de disponibilité](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Sélectionnez la **zone de disponibilité (AZ)** dans laquelle votre VM sera hébergée (ex : `fr1-az01`).

### Étape 3 — Choisir un template

![Étape 3 : Choisir un template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Parcourez le catalogue d'images disponibles via les onglets **OS** et **Appliances** :

- **Debian 13** (Trixie)
- **Rocky Linux**
- Et d'autres systèmes disponibles dans la Marketplace Cloud Temple

Sélectionnez le système d'exploitation souhaité et choisissez la version dans le menu déroulant associé.

### Étape 4 — Gabarit

![Étape 4 : Gabarit](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Choisissez un **gabarit prédéfini** ou créez un **gabarit Custom** :

- `dev-1` : 1 vCPU
- `dev-2` : 2 vCPU / 8 Go RAM (sélectionné par défaut)
- **Custom** : saisissez librement le nombre de vCPU et la quantité de RAM

### Étape 5 — Nom et politique de sauvegarde

![Étape 5 : Nom et politique de sauvegarde](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Renseignez :

| Paramètre | Description |
|-----------|-------------|
| **Nom** | Nom unique de votre VM dans le tenant |
| **Politique de sauvegarde** | `No Backup` par défaut, ou une politique de rétention si l'option sauvegarde est souscrite |

Cette étape affiche également un récapitulatif du système d'exploitation sélectionné et de la taille du disque système.

### Étape 6 — Cloud Init

![Étape 6 : Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Cette étape est **optionnelle**. Elle permet de pré-configurer votre VM au premier démarrage via deux éditeurs :

- **Cloud Config** : injection de clés SSH, configuration du hostname, installation de paquets, etc.
- **Network Config** : configuration réseau statique (format Netplan)

Exemple de Cloud Config minimal :

```yaml
#cloud-config
hostname: mon-serveur-01
ssh_authorized_keys:
  - ssh-rsa AAAA...votre_cle_publique
packages:
  - htop
```

Une case à cocher permet de **supprimer le disque de configuration Cloud Init** après le premier démarrage (recommandé pour la sécurité).

### Étape 7 — Disques

![Étape 7 : Disques](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Configurez le ou les disques de votre VM :

- **Disque système** : créé automatiquement (`system-disk-1`), taille déterminée par l'OS
- **Disques additionnels** : ajoutez des volumes supplémentaires avec le nom, la capacité et le type de stockage souhaités

Deux types de stockage sont disponibles :

| Type | IOPS |
|------|------|
| **Standard** | ~1 500 IOPS/To |
| **Enterprise** | ~7 500 IOPS/To |

### Étape 8 — Adaptateurs Réseaux

![Étape 8 : Adaptateurs Réseaux](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Associez votre VM à un réseau depuis le menu déroulant. Deux types de réseaux sont disponibles :

- **Backbone privé** (ex : PACKFR) : réseau privé mutualisé avec isolation logique
- **VPC** : réseau privé entièrement dédié avec segmentation avancée

### Étape 9 — Sommaire

![Étape 9 : Sommaire](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Vérifiez le récapitulatif complet avant de lancer le provisionnement :

- Informations générales (famille, AZ, modèle, nom, sauvegarde)
- Gabarit (CPU, RAM)
- Configuration Cloud Init
- Disques virtuels
- Réseau

Cliquez sur **Créer** pour lancer le déploiement. La VM est provisionnée en quelques minutes.

## Gérer vos machines virtuelles

Depuis la liste, cliquez sur une VM pour déployer son panneau de détail. Quatre onglets sont disponibles :

### Onglet Informations

![Détail VM - Informations](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

Consultez et modifiez les paramètres de votre VM :
- Nom, UUID, zone de disponibilité
- Famille d'instance, modèle OS
- CPU, RAM (modifiables à VM éteinte)
- Politique de sauvegarde

Des icônes d'actions permettent de **démarrer**, **arrêter**, **redémarrer** ou **ouvrir la console** de la VM.

### Onglet Disques

![Détail VM - Disques](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Consultez les disques attachés et ajoutez des volumes supplémentaires via le bouton **+ Ajouter un disque**.

### Onglet Adaptateurs Réseaux

![Détail VM - Réseau](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

Consultez les interfaces réseau de la VM (nom du réseau, adresse MAC, adresse IPv4/IPv6).

### Onglet Snapshots

![Détail VM - Snapshots](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)

Créez et gérez des snapshots de votre VM via le bouton **+ Créer un snapshot**.

## Automatisation et Infrastructure as Code

Le service VM Instances est entièrement automatisable :

### Via l'API REST

L'API REST Cloud Temple permet le contrôle programmatique complet du cycle de vie des machines virtuelles.

Référence API : [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### Via Terraform

Le provider Terraform Cloud Temple permet de gérer vos VM Instances en Infrastructure as Code.

```hcl
# Exemple de ressource VM Instances avec Terraform
# Consultez la documentation du provider pour les attributs disponibles
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Consultez la [documentation Terraform](/terraform) pour l'installation et la configuration du provider.

## Ressources utiles

- [Documentation publique Cloud Temple](https://docs.cloud-temple.com/home)
- [Référence API](https://shiva.cloud-temple.com/api/)
- [Documentation Terraform](/terraform)
- [Concepts des zones de disponibilité](../../additional_content/concepts_az.md)
