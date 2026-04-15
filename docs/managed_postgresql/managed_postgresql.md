---
title: Vue d'ensemble Managed PostgreSQL
---

# Managed PostgreSQL (preview)

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Découvrez les bases et principes essentiels pour maîtriser notre infrastructure.</p>
    <a href="managed_postgresql/concepts" class="card-link">Explorer les concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Guide de démarrage</h3>
    <p>Commencez rapidement en suivant des instructions claires et simples.</p>
    <a href="managed_postgresql/quickstart" class="card-link">Lancer le Quickstart &rarr;</a>
  </div>
</div>

---
### Aperçu
> Ce produit est en version préliminaire, et sa documentation peut comporter des erreurs ou des approximations.

**Managed PostgreSQL (on Kubernetes) by Cloud Temple** est une solution managée de moteur de base de données PostgreSQL, hébergée sur Kubernetes. Elle vient en complément des offres de moteur de base de données managés sur machines virtuelles (nommées ici **Managed PostgreSQL (on IaaS)**)

Cette offre est adaptée pour les clients qui disposent de charges de travail Kubernetes nécessitant des bases de données PostgreSQL, ou de clients qui souhaitent mutualiser de nombreux moteurs de bases de données PostgreSQL sur un même cluster kubernetes (mutualisation). Elle convient particulièrement bien aux bases de données de petite et moyenne dimensions ne nécessitant pas de tuning ou de fonctionnalités spécifiques. Pour les bases de grande dimension ou nécessitant un tuning particulier, il est préférable d'opter pour l'offre **Managed PostgreSQL (on IaaS)** qui permet plus d'adaptations par nos équipes d'experts DBA.

### Bénéfices Clés

- **Souveraineté et Réversibilité** : La solution s'appuie exclusivement sur des standards open source pour éviter toute dépendance technologique et garantir la portabilité de vos applications.
- **Simplicité et délégation** : La solution permet de déléguer à Cloud-Temple la gestion des moteurs de bases de données, en particulier : mises à jour et sauvegardes.



## Modèles de Déploiement

Nous proposons deux modèles de déploiement pour répondre à vos besoins:  ***StandAlone*** ou ***Distributed***.

### StandAlone
Le modèle ***StandAlone*** déploie une instance unique du moteur PostgreSQL dans une infrastructure multi-AZ.

Le stockage utilisé par cette instance est répliqué sur 3 AZ, et permet un redémarrage automatique de l'instance PostgreSQL sur une autre AZ en cas de panne.

- **Cas d'usage** : Ce modèle de déploiement convient parfaitement pour les applications simples, comme des CMS, qui n'utilisent qu'un seul endpoint pour se connecter aux bases de données.
- **Points clés** :
  - 1 instance de moteur de base de données
  - stockage réparti sur 3 AZ pour une reprise automatique en cas de panne
  - sauvegardes physiques et Logiques
  - SLA 99.9 % (hors plages de maintenance)

### Distributed
Le modèle ***Distributed*** déploie un cluster de 3 instances du moteur PostgreSQL, avec Patroni en mode "single primary" et PgBouncer:

- un endpoint PgBouncer permet un routage vers les différentes instances suivant le type de requete (read ou write).
- l'instance en lecture-écriture (RW) est accessible via un endpoint spécifique.
- Les instances en lecture seule (RO) sont accessibles via un autre endpoint spécifique.

Ainsi, les applicatifs peuvent au choix utiliser des connexions RW ou RO, ou laisser PgBouncer router de lui même vers les endpoints les plus adaptés.

- **Cas d'usage** : Ce modèle de déploiement convient parfaitement pour les applications avec des accès distribués, comme les applications de data ou de business intelligence, qui bénéficient d'accès en lecture seule sans impact sur l'ingestion des données.
- **Points clés** :
  - 3 Instances de moteur de base de données avec Patroni en mode "single primary"
  - Proxy PgBouncer pour un routage efficace des requêtes.
  - stockage réparti sur 3 AZ pour une reprise automatique en cas de panne
  - sauvegardes PiTR et Logiques
  - SLA 99.9 % (hors plages de maintenance)

### Fonctionnalités communes:

#### Versions
Les moteurs PostgreSQL peuvent être choisis parmis toutes les versions supportées (actuellement 14 à 18) [Voir "versionning policy" sur le site officiel PostgreSQL](https://www.postgresql.org/support/versioning/)

#### Sauvegarde
2 types de sauvegardes sont mises en oeuvre:

- Point in Time Restoration (PiTR) : sauvegarde physique quotidienne de l'ensemble du moteur et de ses journaux de transactions (WAL), permettant de restaurer l'ensemble du serveur à une date antérieure précise sans perte des transactions.
- Sauvegarde logique (pg_dump) : exports logiques des bases de données, pour une restauration/exportation individuelle par base de données.

Toutes les sauvegardes utilisent le stockage S3 Cloud-Temple (qualifié SNC) avec chiffrement at-rest.