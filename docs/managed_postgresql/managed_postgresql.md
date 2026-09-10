---
title: Vue d'ensemble
---
# PostgreSQL Managé <span class="title-preview-badge">Preview</span>

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Découvrez les bases et principes essentiels pour maîtriser notre infrastructure.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Explorer les concepts →</a>
  </div>
  <div class="card">
    <h3>Guide de démarrage</h3>
    <p>Commencez rapidement en suivant des instructions claires et simples.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Lancer le Quickstart →</a>
  </div>
</div>

---

### Aperçu

**PostgreSQL Managé (on Kubernetes) by Cloud Temple** est une solution managée de moteur de base de données PostgreSQL, hébergée sur Kubernetes et basée sur l'opérateur **CloudNative-PG (CNPG)**. Elle vient en complément des offres de moteur de base de données managés sur machines virtuelles (nommées ici **PostgreSQL Managé (on IaaS)**).

Ce produit est adapté pour les clients qui disposent de charges de travail Kubernetes nécessitant des bases de données PostgreSQL, ou de clients qui souhaitent mutualiser de nombreux moteurs de bases de données PostgreSQL sur un même cluster Kubernetes. Il convient particulièrement bien aux bases de données ne nécessitant pas de tuning système ultra-spécifique. Pour les bases de très grande dimension nécessitant des réglages OS particuliers, il est préférable d'opter pour le produit **PostgreSQL Managé (on IaaS)**.

### Bénéfices Clés

- **Souveraineté et Réversibilité** : La solution s'appuie exclusivement sur des standards open source (CNPG, Barman) pour éviter toute dépendance technologique et garantir la portabilité de vos applications.
- **Simplicité et délégation** : La solution permet de déléguer à Cloud Temple la gestion du cycle de vie des moteurs de bases de données : provisionnement, mises à jour et sauvegardes continues.

## Modèles de Déploiement

Nous proposons trois modèles de déploiement pour répondre à vos besoins, du test de développement à la haute disponibilité critique :

### StandAlone

Le modèle ***StandAlone*** déploie une instance unique du moteur PostgreSQL.

- **Cas d'usage** : Ce modèle convient parfaitement pour le développement, les environnements de recette ou les applications simples ne nécessitant pas de haute disponibilité.
- **Points clés** :
  - 1 seule instance de base de données.
  - Pas de haute disponibilité au niveau du moteur (bien que Kubernetes puisse redémarrer le pod en cas de panne de nœud).
  - Sauvegardes continues (Barman Cloud).

### Replica

Le modèle ***Replica*** déploie un cluster de 3 instances du moteur PostgreSQL avec réplication en streaming (asynchrone).

- **Cas d'usage** : Ce modèle offre une haute disponibilité standard pour la plupart des applications de production, où un léger décalage (quelques millisecondes) entre le primaire et les réplicas est acceptable.
- **Points clés** :
  - 3 instances de base de données.
  - Réplication asynchrone (haute disponibilité).
  - Basculement automatique géré par l'opérateur CNPG.

### Entreprise

Le modèle ***Entreprise*** déploie un cluster de 3 instances du moteur PostgreSQL avec **réplication synchrone** et garantie de durabilité des données.

- **Cas d'usage** : Conçu pour les charges de travail critiques où aucune perte de donnée n'est tolérée en cas de défaillance matérielle.
- **Points clés** :
  - 3 instances de base de données.
  - Réplication synchrone configurée pour s'assurer qu'au moins 2 réplicas ont durabilisé les données avant de confirmer un `COMMIT` (mode *preferred* pour éviter le blocage si un réplica est indisponible).
  - Garantie maximale de consistance et de durabilité.

## Types de Moteurs Disponibles

La solution permet de déployer différents types d'instances PostgreSQL selon vos besoins :

- **PostgreSQL standard** : Le moteur de base de données relationnel classique.
- **TimescaleDB** : PostgreSQL avec l'extension TimescaleDB pour la gestion optimisée des séries temporelles (Time-Series).
- **PostGIS** : PostgreSQL avec l'extension spatiale PostGIS pour les données géographiques.

## Fonctionnalités communes

#### Versions

Les moteurs PostgreSQL sont disponibles dans toutes les versions majeures supportées (actuellement de la version **13 à 18**).
Des extensions comme `pg-crash`, `pgaudit`, `pgvector` et `postgis` sont disponibles au sein des images.

#### Sauvegarde

Les sauvegardes sont gérées de manière native par le plugin **Barman Cloud** intégré à l'opérateur :

- **WAL Archiving en continu** : Chaque segment du journal des transactions (WAL) est archivé en temps réel vers notre stockage S3 qualifié SecNumCloud.
- **Sauvegardes planifiées** : Des sauvegardes complètes (Point-in-Time Recovery) sont réalisées de manière périodique selon vos besoins de rétention.
- **Sécurité** : Toutes les données de sauvegarde sont compressées et stockées sur notre infrastructure S3 sécurisée avec chiffrement.
