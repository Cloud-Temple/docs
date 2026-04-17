---
title: Concepts
sidebar_position: 1
---

# Concepts Clés de MariaDB Managé

Cette section présente les concepts fondamentaux de notre service **MariaDB Managé**. Comprendre ces principes vous aidera à tirer le meilleur parti de votre base de données managée, en alignant ses capacités avec vos besoins applicatifs et vos exigences de sécurité.

## Souveraineté et Conformité SecNumCloud

Au cœur de notre produit se trouve la **souveraineté numérique**. Le service MariaDB Managé est entièrement hébergé sur l'infrastructure Cloud Temple, qualifiée **SecNumCloud 3.2** par l'ANSSI.

- **Hébergement 100% en France** : Vos données restent sur le territoire national, à l'abri des lois extraterritoriales.
- **Conformité native** : La solution est conçue pour répondre aux exigences réglementaires les plus strictes (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Open Source et Réversibilité** : En nous basant sur des standards ouverts comme MariaDB Community Server et Galera, nous garantissons une absence de dépendance technologique (*vendor lock-in*) et une portabilité totale de vos données.

## Architecture Haute Disponibilité : Galera Cluster + MaxScale

Pour les environnements distribués, notre produit s'appuie sur **Galera Cluster** pour offrir une haute disponibilité sans perte de données.

- **Réplication Synchrone** : Contrairement à la réplication asynchrone traditionnelle, chaque transaction est validée sur tous les nœuds du cluster *avant* d'être confirmée. Cela garantit un **Objectif de Point de Reprise (RPO) de zéro** : aucune donnée validée ne peut être perdue en cas de défaillance.
- **Distribution Multi-AZ** : Le cluster est réparti sur trois Zones de Disponibilité (AZ) distinctes. La panne d'un datacenter entier n'entraîne aucune interruption de service ni perte de données.
- **Basculement Automatique** : En cas d'incident sur un nœud, le trafic est automatiquement redirigé vers les nœuds sains, assurant un **Objectif de Temps de Reprise (RTO) minimal**.
- **Proxy Maxscale** : MaxScale est un proxy, routeur et load balancer avancé pour MariaDB. Il gère le failover automatique en réplication, équilibre les requêtes (writes vers primary, reads vers replicas via ReadWriteSplit) et offre des filtres pour cache, audit (QLAfilter) ou sécurité (RegexFilter).

## Modèles de Déploiement

Nous proposons deux modèles pour s'adapter à la criticité de vos charges de travail.

### 1. StandAlone

Ce modèle déploie une instance unique du moteur MariaDB.

- **Cas d'usage** : Ce modèle de déploiement convient parfaitement pour les applications simples, comme des CMS, qui n'utilisent qu'un seul endpoint pour se connecter aux bases de données.
- **Résilience** : Bien qu'il s'agisse d'une instance unique, le stockage sous-jacent est répliqué sur 3 AZ, permettant un redémarrage automatique sur une autre AZ en cas de panne matérielle.
- **SLA** : 99.9% (hors plages de maintenance).

### 2. Distributed

Ce modèle déploie un **cluster Galera de 3 instances** du moteur MariaDB, complété par un proxy **MaxScale**.

- **Cas d'usage** : Ce modèle de déploiement convient parfaitement pour les applications avec des accès distribués, comme les applications de data ou de business intelligence, qui bénéficient d'accès en lecture seule sans impact sur l'ingestion des données.
- **Composants** :
  - **3 Nœuds MariaDB** : Un nœud primaire en lecture-écriture (RW) et deux nœuds secondaires en lecture seule (RO).
  - **Proxy MaxScale** : Un routeur intelligent qui distribue les requêtes. Il envoie les écritures vers le nœud primaire et répartit les lectures sur tous les nœuds (`ReadWriteSplit`), optimisant ainsi les performances.
- **SLA** : 99.9% (hors plages de maintenance).

> **Remarque Importante** : Il n'est pas possible de modifier le modèle de déploiement d'un cluster existant (par exemple, de passer de *StandAlone* à *Distributed*). Cette opération nécessite la création d'un nouveau cluster dans le modèle souhaité, via une restauration.

## Sauvegarde et Restauration (PITR)

La protection de vos données est assurée par une double stratégie de sauvegarde.

1. **Sauvegarde Physique et Point-in-Time Recovery** :
    - Nous réalisons des sauvegardes physiques quotidiennes complètes (`mariabackup`) (sans interruption de service).
    - Avec la version **distributed**, les journaux de transactions (*binary logs*) sont archivés en continu. Cette combinaison permet une restauration PiTR jusqu'au moment juste avant un incident.

2. **Sauvegarde Logique (`mysqldump`)** :
    - Des exports logiques des bases de données sont également effectués.
    - Ils offrent une granularité fine pour restaurer ou exporter une base de données individuelle.

Toutes les sauvegardes sont chiffrées au repos et stockées sur notre Object Storage S3, lui-même qualifié SecNumCloud.

## Sécurité à Plusieurs Niveaux

La sécurité est intégrée à chaque couche du service.

- **Isolation Réseau** : Les instances de base de données ne sont **jamais exposées sur Internet**. L'accès se fait exclusivement via le réseau privé du client.
- **Chiffrement de bout en bout** :
  - **En transit** : Toutes les connexions (client vers base de données et entre les nœuds du cluster) sont chiffrées en TLS 1.3.
  - **Au repos** : Les données sur disque (tablespaces InnoDB) et les sauvegardes sont chiffrées en AES-256.
- **Gestion des Accès** : L'authentification est sécurisée (plugins `ed25519` ou `sha256_password`), et les droits sont gérés selon le principe du moindre privilège.

## Service Managé ("Zéro Ops")

L'objectif de MariaDB Managé est de vous décharger de la complexité opérationnelle. Nos équipes assurent :

- Le provisionnement et la configuration initiale.
- La gestion complète du cycle de vie : mises à jour mineures, application des patchs de sécurité.
- La supervision 24/7 de l'infrastructure et du service.
- La gestion et la vérification des sauvegardes.

Cela permet à vos équipes de se concentrer sur le développement applicatif et l'exploitation de leurs données.

## Politique de versions & cycle de vie

La fondation MariaDB publie des versions avec un support à long terme (LTS), ce qui garantit la stabilité et la prévisibilité. Notre service s'appuie sur ces versions pour assurer la pérennité de votre infrastructure.

| Version | Type | Supporté jusqu'à |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | Mai 2029 |
| **MariaDB 11.8** | LTS | Juin 2028 |

- **Mises à jour mineures** : Les patchs de sécurité et les corrections de bugs sont appliqués par nos équipes en *rolling update* (nœud par nœud) pour ne causer aucune interruption de service.
- **Mises à jour majeures** : Les montées de version majeures sont planifiées en collaboration avec vous pour s'aligner sur votre calendrier.
- **Fin de support** : Nous vous notifions au moins 180 jours avant la fin de support d'une version LTS pour planifier la migration vers la version suivante.

## Tailles des instances

Les instances ***StandAlone*** et ***Distributed*** sont disponibles avec des tailles prédéfinies:

| Taille | vCPU/nœud | RAM/nœud | Max Conn | Working Set Max | DB Totale Max |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Micro** | 1 | **2.00 Gi** | **40** | **1-2 GiB** | **2-8 GiB** |
| **Small** | 1 | **4.00 Gi** | **80** | **2-5 GiB** | **8-16 GiB** |
| **Medium** | 2 | **4.00 Gi** | **80** | **2-5 GiB** | **8-16 GiB** |
| **Med-Large**| 2 | **8.00 Gi** | **150** | **4-10 GiB** | **16-32 GiB** |
| **Large** | 4 | **8.00 Gi** | **150** | **4-10 GiB** | **16-32 GiB** |
| **X-Large** | 4 | **16.00 Gi** | **250** | **8-20 GiB** | **32-64 GiB** |
| **2X-Large**| 8 | **16.00 Gi** | **250** | **8-20 GiB** | **32-64 GiB** |
| **3X-Large**| 8 | **32.00 Gi** | **500** | **16-40 GiB** | **64-128 GiB** |
| **4X-Large**| 16 | **32.00 Gi** | **500** | **32-80 GiB** | **128-256 GiB** |
| **5X-Large**| 16 | **64.00 Gi** | **500** | **32-80 GiB** | **128-256 GiB** |
| **6X-Large**| 32 | **128.00 Gi**| **500** | **64-160 GiB** | **256-512 GiB** |

> **Remarque** : Le stockage est provisionné séparément et peut être augmenté à chaud (de 2Gi à 512Gi) (mais pas réduit, sauf en recréant une nouvelle instance.).
