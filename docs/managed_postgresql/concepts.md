---
title: Concepts
sidebar_position: 1
---

# Concepts Clés de PostgreSQL Managé

Cette section présente les concepts fondamentaux de notre service **PostgreSQL Managé**. Comprendre ces principes vous aidera à tirer le meilleur parti de votre base de données managée, en alignant ses capacités avec vos besoins applicatifs et vos exigences de sécurité.

## Souveraineté et Conformité SecNumCloud

Au cœur de notre produit se trouve la **souveraineté numérique**. Le service PostgreSQL Managé est entièrement hébergé sur l'infrastructure Cloud Temple, qualifiée **SecNumCloud 3.2** par l'ANSSI.

- **Hébergement 100% en France** : Vos données restent sur le territoire national, à l'abri des lois extraterritoriales.
- **Conformité native** : La solution est conçue pour répondre aux exigences réglementaires les plus strictes (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Open Source et Réversibilité** : En nous basant sur l'opérateur Kubernetes open source **CloudNative-PG (CNPG)** et **Barman**, nous garantissons une absence de dépendance technologique (*vendor lock-in*) et une portabilité totale de vos données et configurations.

## Opérateur CloudNative-PG (CNPG)

La gestion du cycle de vie des bases de données PostgreSQL sur notre infrastructure Kubernetes s'appuie sur **CloudNative-PG (CNPG)**.

- **Déploiement Déclaratif** : La configuration de votre base de données se fait via des Custom Resource Definitions (CRD) Kubernetes, permettant une approche Infrastructure-as-Code (IaC) via Terraform ou Helm.
- **Haute Disponibilité Intégrée** : CNPG gère automatiquement l'élection du nœud primaire et le basculement (*failover*) de manière fluide.
- **Monitoring natif** : Des métriques détaillées sont nativement exportées vers Prometheus, facilitant la création de dashboards Grafana.

## Modèles de Déploiement

Nous proposons trois modèles pour s'adapter à la criticité de vos charges de travail :

### 1. StandAlone

Ce modèle déploie une **instance unique** du moteur PostgreSQL.

- **Cas d'usage** : Développement, recette ou applications ne nécessitant pas de haute disponibilité.
- **Résilience** : Le stockage sous-jacent étant persistant et géré par Kubernetes, le pod peut être redémarré automatiquement sur un autre nœud en cas de défaillance matérielle de l'hôte.

### 2. Replica

Ce modèle déploie un **cluster de 3 instances** PostgreSQL (un primaire, deux réplicas).

- **Réplication Asynchrone** : Les données sont répliquées en streaming continu (asynchrone). Cela offre d'excellentes performances tout en assurant une copie des données sur les réplicas avec un délai minime.
- **Basculement Automatique** : En cas de défaillance du primaire, CNPG promeut automatiquement le réplica le plus à jour pour assurer la continuité de service.

### 3. Entreprise

Ce modèle déploie un **cluster de 3 instances** PostgreSQL optimisé pour la **haute disponibilité critique**.

- **Réplication Synchrone** : La réplication est configurée de manière synchrone sur au moins 2 nœuds (`any 2`) avec garantie de durabilité (`dataDurability: preferred`). 
- **Durabilité** : Un `COMMIT` n'est confirmé à l'application que si les données ont bien été écrites sur le primaire ET sur un réplica, assurant qu'aucune transaction validée ne sera perdue en cas de panne matérielle, sans pour autant bloquer la base si un nœud est temporairement indisponible.

## Sauvegarde et Restauration (PITR)

La protection de vos données est assurée par le plugin **Barman Cloud**, pleinement intégré à l'opérateur.

1. **WAL Archiving en continu** :
    - Chaque segment du journal des transactions (*WAL*) est archivé en temps réel vers un Object Storage S3 qualifié SecNumCloud.
    - La compression est optimisée (ex: `lz4` ou `gzip`) pour réduire le volume tout en maintenant de bonnes performances.

2. **Sauvegardes planifiées (`ScheduledBackup`)** :
    - Des sauvegardes physiques complètes sont déclenchées de façon programmée (ex: tous les jours à 02h00).
    - Une sauvegarde initiale est prise immédiatement lors de la création du cluster.

Ces mécanismes combinés permettent le **Point-in-Time Recovery (PITR)** : la capacité de restaurer l'intégralité du serveur à une date et heure précise, protégeant ainsi contre les erreurs humaines ou les corruptions de données.

## Sécurité à Plusieurs Niveaux

- **Isolation Réseau** : Les instances de base de données sont déployées dans des namespaces dédiés et isolées sur le réseau privé du client.
- **Chiffrement** :
  - **En transit** : Connexions chiffrées en TLS.
  - **Au repos** : Les données de stockage ainsi que les sauvegardes sur S3 sont chiffrées.
- **Secrets Kubernetes** : Les identifiants super-utilisateur et applicatifs sont générés de manière sécurisée et stockés en tant que Secrets Kubernetes, récupérables selon des règles strictes.

## Tailles des instances (Tee-Shirts)

Les bases de données disposent de limites strictes (CPU et RAM) qui correspondent à la taille choisie.
Les paramètres internes de PostgreSQL (`shared_buffers`, `effective_cache_size`, `work_mem`, etc.) sont **préalablement calibrés** pour chaque taille afin d'optimiser les performances et de garantir que le conteneur n'atteigne jamais sa limite de RAM (évitant ainsi un OOMKill par Kubernetes qui couperait brutalement le service).

| Taille | CPU | Memory | shared_buffers | effective_cache_size | work_mem | maintenance_work_mem | max_connections | pgbouncer_default_pool_size | pgbouncer_max_client_conn |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **XS** | 1 Core | 4 Gb | 1024MB | 3072MB | 16MB | 128MB | 80 | 8 | 200 |
| **S** | 1 Core | 8 Gb | 2048MB | 6144MB | 32MB | 256MB | 150 | 10 | 250 |
| **M** | 2 Cores | 8 Gb | 2048MB | 6144MB | 32MB | 256MB | 150 | 10 | 250 |
| **L** | 2 Cores | 16 Gb | 4096MB | 12288MB | 64MB | 512MB | 250 | 15 | 300 |
| **XL** | 4 Cores | 16 Gb | 4096MB | 12288MB | 64MB | 512MB | 250 | 15 | 300 |
| **XXL** | 4 Cores | 32 Gb | 8192MB | 24576MB | 128MB | 1024MB | 500 | 20 | 500 |
| **3XL** | 8 Cores | 32 Gb | 8192MB | 24576MB | 128MB | 1024MB | 500 | 20 | 500 |
| **4XL** | 8 Cores | 64 Gb | 16384MB | 49152MB | 256MB | 2048MB | 500 | 25 | 500 |

> **Remarque** : Les ressources *requests* (CPU et RAM) sont allouées à 50% des *limits* configurées ci-dessus.

## Versions de PostgreSQL Supportées

Nous supportons toutes les versions majeures actuelles, en vous permettant de choisir selon la compatibilité de vos applications :

- **PostgreSQL 13, 14, 15, 16, 17 et 18**.

L'opérateur CNPG gère les mises à jour mineures de manière fluide en appliquant une stratégie de mise à jour progressive (*rolling update*).
