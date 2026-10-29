---
title: Concepts
sidebar_position: 2
---

<a id="concepts-du-stockage-objet-oss"></a>

## Présentation

Le **Stockage Objet** est un service de stockage distribué, évolutif et économique, pour les données non structurées. Compatible avec le protocole S3, il réplique automatiquement les données sur trois zones de disponibilité et ne facture pas les transferts sortants. Il convient à l'archivage, à la sauvegarde et au stockage de données applicatives dans un environnement souverain.

### Publics et cas d'usage

- **Développeurs d'applications** : stockage pour des applications cloud-native et des microservices.
- **Équipes DevOps** : sauvegarde et archivage de données critiques.
- **Données volumineuses** : gestion économique de gros volumes.
- **Contenus riches** : images, vidéos et documents.
- **Secteur public** : archivage long terme conforme aux exigences de souveraineté.

## Avantages

| Avantage                  | Description                                                                          |
|---------------------------|--------------------------------------------------------------------------------------|
| Évolutivité               | L'architecture horizontale s'adapte à la croissance de vos données.                  |
| Durabilité et redondance  | Les données sont réparties automatiquement sur trois zones de disponibilité.         |
| Pas de frais de sortie    | Le transfert sortant de vos données est gratuit.                                     |
| Compatibilité S3          | Les outils et SDKs S3 existants s'utilisent sans adaptation.                         |

## Fonctionnalités

| Fonctionnalité           | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| API compatible S3        | Accès par l'API S3, compatible à 97 % avec AWS S3.                          |
| Type de bucket           | Choix à la création entre un bucket « performant » ou « archivage ».       |
| Réplication sur 3 zones  | Redondance automatique sur trois zones de disponibilité.                    |
| Erasure Coding           | Protection EC 12+4.                                                         |
| Chiffrement au repos     | Chiffrement côté serveur, activé au niveau du *namespace*.                  |
| Requêtes pré-signées     | URLs temporaires sécurisées.                                                |
| Modes d'accès réseau     | Contrôle de l'exposition réseau des buckets (public, privé, personnalisé).  |
| Clients universels       | AWS-CLI, S3CMD, minio-CLI, MC CLI.                                          |

### Composants principaux

- **Objets** : les données fondamentales stockées dans le service. Un objet est composé de données (le fichier lui-même) et de métadonnées (informations descriptives sur l'objet).
- **Buckets (conteneurs)** : les objets sont organisés en buckets. Un bucket est un conteneur pour les objets, et son nom doit être unique au sein du service.
- **Clés** : chaque objet d'un bucket est identifié de manière unique par une clé (un nom de fichier).
- **Endpoints** : les URLs régionales que vous utilisez pour accéder à l'API du service.

<a id="architecture-technique"></a>

## Architecture

Le service est construit sur une architecture distribuée qui garantit une haute durabilité et une haute disponibilité des données. Les objets sont stockés de manière redondante sur plusieurs nœuds de stockage, répartis sur trois zones de disponibilité.

- **Erasure Coding EC 12+4** : les données sont divisées en 12 segments et complétées par 4 segments de parité.
- **Distribution** : les segments sont répartis sur différents nœuds et racks.
- **Réseau** : réseau haute performance, jusqu'à 100 Gb/s.

L'accès au service se fait via une API RESTful standard, compatible avec le protocole S3, ce qui permet d'utiliser une large gamme d'outils et de SDKs existants. Le service s'intègre à la Console Cloud Temple et se pilote aussi en Infrastructure as Code avec Terraform.

## Régions et zones de disponibilité

Le Stockage Objet est disponible dans la région FR1. Les données sont réparties sur trois zones de disponibilité.

## Caractéristiques techniques

| Paramètre             | Valeur                                |
|-----------------------|---------------------------------------|
| Compatibilité         | 97 % AWS S3                           |
| Durabilité            | 99,999999999 % (onze 9), annuelle     |
| Erasure Coding        | EC 12+4                               |
| Performance réseau    | 1 Gbps garanti, jusqu'à 100 Gb/s      |
| Chiffrement           | TLS 1.2 / 1.3 en transit, AES-256 au repos |

### Limites

- 999 buckets par tenant.
- 5 To par objet.

<a id="sécurité-et-chiffrement"></a>

## Sécurité et conformité

Le Stockage Objet est certifié HDS et ISO 27001, conforme C5 et qualifié SecNumCloud.

La sécurité de vos données est une priorité. Le service intègre des mécanismes de chiffrement pour protéger vos données, qu'elles soient stockées (au repos) ou qu'elles transitent sur le réseau.

### Chiffrement des données au repos (Data at Rest Encryption - D@RE)

Pour protéger vos données stockées, le service utilise le chiffrement côté serveur.

- **Activation** : le chiffrement D@RE est activé au niveau du *namespace* (espace de nommage).
- **Algorithme** : chiffrement **AES 256 bits** certifié **FIPS 140-3**, via la bibliothèque logicielle **RSA BSAFE Crypto-J** en version **7.x**.
- **Fonctionnement** : lorsque vous écrivez un objet dans un bucket où D@RE est activé, le service chiffre automatiquement vos données avant de les écrire sur les disques. À la lecture, l'objet est déchiffré de manière transparente. La gestion des clés de chiffrement est entièrement prise en charge par le service.

### Chiffrement des données en transit

Toutes les communications avec l'API du service, que ce soit pour téléverser, télécharger ou gérer vos données, doivent être sécurisées.

- **Protocole** : l'utilisation du protocole **TLS (Transport Layer Security)**, versions **1.2 et 1.3**, est imposée.
- **Fonctionnement** : en utilisant HTTPS pour toutes vos requêtes API, les données échangées entre votre client et les serveurs sont chiffrées, et protégées contre l'interception ou l'altération pendant leur transit.

## Disponibilité du service

L'objectif de disponibilité du service est de 99,99 %, mesuré sur un mois, plages de maintenance incluses.

## Responsabilités

La répartition des responsabilités entre le client et Cloud Temple est détaillée dans la [matrice de responsabilités (RACI) du stockage objet](../../contractual/iaas/raci_s3.md).

## Réversibilité

Vous récupérez vos données à tout moment, de manière autonome, avec les outils S3 standards.

| Opération                   | Description                                                                                  | Coût       |
|-----------------------------|----------------------------------------------------------------------------------------------|------------|
| Récupération des données    | Téléchargement de l'ensemble de vos objets via l'API S3.                                     | Sans frais |
| Transfert sortant           | Aucun frais de sortie lors du transfert de vos données vers un autre fournisseur.            | Sans frais |
| Assistance à la migration   | Support technique sur demande pour les opérations de migration complexes.                    | Sur devis  |

## Tarification

Le service est facturé selon la capacité réellement utilisée, sans frais de sortie. Les tarifs sont publiés sur la page produit du site Cloud Temple :
[Stockage Objet — tarifs](https://www.cloud-temple.com/produits/stockage-objet/).
