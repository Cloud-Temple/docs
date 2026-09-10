---
title: Créer sa première VM instance
---

Ce tutoriel vous guide pas à pas dans la création d'une VM Debian 13 avec un disque de données supplémentaire, une configuration Cloud Init et une connexion au réseau Backbone privé.

## Objectif

Créer une VM Linux (Debian 13) dans la zone `fr1-az01`, pré-configurée avec une clé SSH, avec un disque additionnel de 50 Go.

## Prérequis

- Un tenant Cloud Temple actif avec accès au service VM Instances
- Une clé SSH publique disponible
- Un réseau Backbone privé ou VPC configuré dans votre tenant

## Étape 1 — Accéder à la console et ouvrir le wizard

Depuis la Console Cloud Temple, naviguez vers **Cloud Public > VM Instances**.

![Liste des VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Cliquez sur **+ Nouvelle machine virtuelle** pour démarrer le wizard de création.

## Étape 2 — Sélectionner la famille d'instance

![Étape 1 : Famille d'instance](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Pour cet exemple, sélectionnez **Development** — idéale pour les environnements de développement et de test avec un coût maîtrisé.

Cliquez sur **Suivant**.

## Étape 3 — Choisir la zone de disponibilité

![Étape 2 : Zone de disponibilité](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Sélectionnez **fr1-az01**. Cette zone est disponible dans la région FR1 (France).

:::tip
Pour maximiser la résilience, vous pouvez déployer plusieurs VMs dans des zones de disponibilité différentes (fr1-az01 et fr1-az02).
:::

Cliquez sur **Suivant**.

## Étape 4 — Choisir le template

![Étape 3 : Choisir un template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Dans l'onglet **OS**, sélectionnez **Debian** et choisissez la version **13 (Trixie)** dans le menu déroulant.

Cliquez sur **Suivant**.

## Étape 5 — Configurer le gabarit

![Étape 4 : Gabarit](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Pour ce tutoriel, sélectionnez le gabarit **dev-2** (2 vCPU / 8 Go RAM).

Si votre besoin est différent, utilisez l'option **Custom** pour saisir librement le nombre de vCPU et la quantité de RAM.

Cliquez sur **Suivant**.

## Étape 6 — Nommer la VM et configurer la sauvegarde

![Étape 5 : Nom et politique de sauvegarde](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Saisissez un nom explicite pour votre VM, par exemple : `web-server-01`.

Pour la politique de sauvegarde, laissez **No Backup** pour ce tutoriel (vous pourrez l'activer ultérieurement depuis l'onglet Informations).

Cliquez sur **Suivant**.

## Étape 7 — Configurer Cloud Init

![Étape 6 : Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Cloud Init permet de pré-configurer votre VM au premier démarrage. Saisissez la configuration suivante dans l'éditeur **Cloud Config** :

```yaml
#cloud-config
hostname: web-server-01
users:
  - name: admin
    groups: sudo
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-rsa AAAA...votre_cle_publique_ssh
package_update: true
packages:
  - curl
  - vim
  - htop
```

Laissez le champ **Network Config** vide si vous utilisez DHCP. Pour une configuration IP statique, renseignez-le au format Netplan :

```yaml
version: 2
ethernets:
  ens3:
    dhcp4: false
    addresses:
      - 192.168.1.10/24
    routes:
      - to: default
        via: 192.168.1.1
    nameservers:
      addresses:
        - 8.8.8.8
        - 1.1.1.1
```

Cochez la case **Supprimer le disque de configuration Cloud Init après le premier démarrage** pour améliorer la sécurité.

Cliquez sur **Suivant**.

## Étape 8 — Configurer les disques

![Étape 7 : Disques](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Vous observez que **Disque 1** (le disque système `system-disk-1`) a été créé automatiquement avec la taille correspondant à l'OS Debian 13.

Pour ajouter un disque de données, configurez un second disque dans le wizard :
- **Nom** : `data-disk-1`
- **Capacité** : `50` Go
- **Type de stockage** : Standard (~1 500 IOPS/To)

Cliquez sur **Suivant**.

## Étape 9 — Configurer le réseau

![Étape 8 : Adaptateurs Réseaux](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Depuis le menu déroulant **Réseau**, sélectionnez votre réseau. Dans cet exemple, le réseau **PACKFR** (Backbone privé) est disponible.

:::info
Si vous utilisez un **VPC**, vous pourrez associer une **IP flottante** (IP publique) à votre VM après sa création.
:::

Cliquez sur **Suivant**.

## Étape 10 — Vérifier le sommaire et créer

![Étape 9 : Sommaire](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Vérifiez attentivement le récapitulatif :

| Paramètre | Valeur |
|-----------|--------|
| Famille d'instance | Development |
| Zone de disponibilité | fr1-az01 |
| Modèle | Debian 13 |
| Gabarit | 2 vCPU / 8 Go RAM |
| Politique de sauvegarde | No Backup |
| Disques | system-disk-1 + data-disk-1 (50 Go) |
| Réseau | PACKFR (Backbone privé) |

Si tout est correct, cliquez sur **Créer**. Le déploiement prend quelques minutes. Votre VM apparaîtra ensuite dans la liste avec le statut **Allumée**.
