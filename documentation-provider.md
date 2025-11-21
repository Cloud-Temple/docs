# Génération de la Documentation Terraform Cloud Temple (IaaS + Object Storage)

Tu es tech writer senior chez Cloud Temple, expert en documentation cloud, infrastructure et providers Terraform.
Tu écris dans le même style que la documentation officielle Cloud Temple :
👉 https://docs.cloud-temple.com/home

Et tu t’inspires de la structure et du ton de Scaleway et OVH :
👉 https://www.scaleway.com/en/docs/tutorials/terraform-quickstart/

👉 https://help.ovhcloud.com/csm/fr-public-cloud-compute-terraform?id=kb_article_view&sysparm_article=KB0050792

Tu dois générer une documentation complète, claire, professionnelle, en Markdown compatible avec le dépôt GitHub Cloud Temple Docs :
👉 https://github.com/Cloud-Temple/docs

## 🎯 Objectif

Produire une documentation complète du provider Terraform Cloud Temple, couvrant IaaS VMware, IaaS OpenSource (XCP-ng) et Object Storage, structurée en 4 grandes parties :

Vue d’ensemble

Concepts

Guide de démarrage

Tutoriels

## 📚 Sources techniques obligatoires

L’IA doit lire et se baser sur la documentation existante du provider :
👉 https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs

Elle doit respecter le nom exact des ressources :

### IaaS VMware

cloudtemple_compute_virtual_machine

cloudtemple_compute_virtual_disk

cloudtemple_compute_network_adapter

cloudtemple_compute_virtual_controller

### IaaS OpenSource (XCP-ng)

cloudtemple_compute_iaas_opensource_virtual_machine

cloudtemple_compute_iaas_opensource_virtual_disk

cloudtemple_compute_iaas_opensource_network_adapter

cloudtemple_compute_iaas_opensource_replication_policy

Et tenir compte du fait que Cloud-Init n’est PAS le même entre VMWare et OpenSource → s’appuyer sur la doc existante pour les champs, limitations, clés supportées, etc.

### Object Storage

cloudtemple_object_storage_bucket

cloudtemple_object_storage_storage_account

cloudtemple_object_storage_acl_entry

## 🏗️ Structure exacte de la documentation à produire
1) Vue d’ensemble

Qu’est-ce que le provider Cloud Temple ?

Fonctionnalités

Produits couverts :

IaaS VMware

IaaS OpenSource (XCP-ng)

Stockage objet

Liste complète des ressources et datasources supportées

Conditions préalables

Authentification

Limitations éventuelles

Compatibilité Terraform

2) Concepts

Provider

Ressources

Datasources

Cycle de vie Terraform

3) Guide de démarrage (Quickstart)

Un guide complet similaire à Scaleway/OVH :

Installer Terraform

Déclarer le provider dans required_providers

Configurer l’authentification

Créer un premier fichier main.tf

Lancer terraform init

Lancer terraform apply

Inclure une exemple minimaliste compatible avec le provider.

4) Tutoriels
4.1. Tutoriels IaaS VMware

Chaque tutoriel doit inclure :
Objectif, prérequis, explications, code.

Créer une VM vide

Créer une VM depuis la Marketplace

Créer une VM depuis un item de Content Library

Configurer Cloud-Init VMware

Créer un disque virtuel + attacher à une VM

Créer une interface réseau + attacher à une VM

Créer un controller + attacher à une VM

4.2. Tutoriels IaaS OpenSource

Créer une VM depuis un template

Créer une VM depuis la Marketplace

Configurer la Réplication

Configurer une Sauvegarde

Configurer la High Availability

disabled

restart (haute priorité)

best-effort (restart si ressources restantes)

Configurer Cloud-Init

4.3. Bloc commun (IaaS VMware + OpenSource)

Tutoriel qui explique :

comment utiliser os_disk {}

comment utiliser os_network_adapter {}

différence avec ressources individuelles

limites (uniquement à la création)

4.4. Tutoriels Stockage Objet

Créer un bucket

Créer un compte de stockage

Créer une ACL via ressource

Configurer des ACL directement dans la ressource bucket

Exemples de datasources :

roles

bucket_files

## 📌 Contraintes techniques

L’IA doit respecter :

Tout le contenu doit être rédigé en français métropolitain

Markdown pur compatible mkdocs (pas de HTML inutile)

Code en hcl

Admonitions mkdocs (!!! note, !!! warning, etc.)

Pas d’invention technique :

Si un champ n’est pas sûr → rester général

Les exemples n’ont pas besoin d’être parfaits : je les corrigerai ensuite

Non modifiables : Impossible de les modifier après la création de la VM => Si, ils peuvent, mais on ne peut plus en ajouter. Préciser qu'ils permettent de référencer les disques et networks adapters déployé par le template utilisé. (Alternative : les importer comme ressource à part entière)
























Ressources et datasources => Renvoyer vers la documentation du provider cloud temple en disant qu'on peut y trouver la liste des resources et datasources.

Vous devez avoir accès à la Console Cloud Temple avec les droits appropriés. => Changer le lien qui ne foncitonne pas en shiva.cloud-temple.com

Ces credentials peuvent être générés depuis la console Cloud Temple dans la section IAM (Identity and Access Management). => Corriger en "Profil" => "Jeton d'accès personnel" + screenshot

