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

### 2. MultiAZ

Ce modèle déploie un **cluster Galera de 3 instances** du moteur MariaDB, complété par un proxy **MaxScale**.

- **Cas d'usage** : Ce modèle de déploiement convient parfaitement pour les applications avec des accès distribués, comme les applications de data ou de business intelligence, qui bénéficient d'accès en lecture seule sans impact sur l'ingestion des données.
- **Composants** :
  - **3 Nœuds MariaDB** : Un nœud primaire en lecture-écriture (RW) et deux nœuds secondaires en lecture seule (RO).
  - **Proxy MaxScale** : Un routeur intelligent qui distribue les requêtes. Il envoie les écritures vers le nœud primaire et répartit les lectures sur tous les nœuds (`ReadWriteSplit`), optimisant ainsi les performances.
- **SLA** : 99.9% (hors plages de maintenance).

> **Remarque Importante** : Il n'est pas possible de modifier le modèle de déploiement d'un cluster existant (par exemple, de passer de *StandAlone* à *MultiAZ*). Cette opération nécessite la création d'un nouveau cluster dans le modèle souhaité, via une restauration.

## Sauvegarde et Restauration

La protection de vos données est assurée par une double stratégie de sauvegarde.

1. **Sauvegarde Physique** :
    - Nous réalisons des sauvegardes physiques quotidiennes complètes (`mariabackup`) (sans interruption de service).

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

Les instances ***StandAlone*** et ***MultiAZ*** sont disponibles avec des tailles prédéfinies:

| Taille | vCPU | Mémoire | innodb_buffer_pool_size | innodb_buffer_pool_instances | max_allowed_packet | table_open_cache |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Micro** | 1 | 2 Go | 1200M | 1 | 128M | 400 |
| **Small** | 1 | 4 Go | 2458M | 2 | 256M | 800 |
| **Medium** | 2 | 4 Go | 2458M | 2 | 256M | 800 |
| **Med-Large** | 2 | 8 Go | 4915M | 4 | 512M | 1600 |
| **Large** | 4 | 8 Go | 4915M | 4 | 512M | 1600 |
| **X-Large** | 4 | 16 Go | 9830M | 8 | 1G | 3200 |
| **2X-Large** | 8 | 16 Go | 9830M | 8 | 1G | 3200 |
| **3X-Large** | 8 | 32 Go | 19660M | 16 | 1G | 6400 |
| **4X-Large** | 16 | 32 Go | 19660M | 16 | 1G | 10000 |
| **5X-Large** | 16 | 64 Go | 39320M | 16 | 1G | 10000 |
| **6X-Large** | 32 | 128 Go | 78640M | 16 | 1G | 10000 |


> **Remarque** : Le stockage est provisionné séparément et peut être augmenté à chaud (minimum conseillé de 2Gi, jusqu'à un maximum de 512Gi) (mais pas réduit, sauf en recréant une nouvelle instance.).

### Explication des paramètres de dimensionnement

Les instances MariaDB disposent de limites strictes en termes de CPU et de RAM (OOMKill) gérées par Kubernetes. Si une instance atteint sa limite de mémoire, elle est redémarrée, ce qui peut entraîner une coupure de service et potentiellement casser la réplication d'un cluster. C'est pourquoi les paramètres sont fixés selon la taille de l'instance pour éviter toute saturation de la RAM :

- **innodb_buffer_pool_size** : Ce buffer contient les pages de données et les index en mémoire. Il est recommandé de travailler en RAM pour de meilleures performances (limitation des I/O). Il est fixé ici à environ 60% de la taille de la RAM de l'instance.
- **innodb_buffer_pool_instances** : Divise le buffer pool en plusieurs "instances" pour réduire la contention interne sur les verrous (lorsqu'il y a beaucoup de threads CPU).
- **max_allowed_packet** : Taille maximale d'un paquet ou résultat qu'il est possible d'envoyer/recevoir dans une requête. Limite ajustée selon la taille de l'instance pour protéger la mémoire.
- **table_open_cache** : Nombre de tables que MariaDB peut garder ouvertes simultanément. Adapté en fonction des connexions.
> **Note importante** : Il est fortement déconseillé d'activer ou d'utiliser le `performance_schema` de MariaDB sur les petites instances (tailles inférieures à **X-Large**). Celui-ci consomme d'importantes ressources, et plus particulièrement de la RAM critique.