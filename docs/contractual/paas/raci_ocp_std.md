---
title: Matrice de responsabilité PaaS - OpenShift Standard
---

Voici le modèle RACI définissant la répartition des responsabilités entre le client et Cloud Temple pour l'utilisation de l'offre **OpenShift Standard**.

### Définition des différents rôles

Nous rappelons ici les différents rôles du RACI :

| Rôle         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Réalise  | __R__éalise le processus                                                              |
| (A) Approuve | __A__pprouve la réalisation du processus                                              |
| (C) Consulte | __C__onsulté pendant le processus                                                     |
| (I) Informé  | __I__nformé des résultats du processus (via l'outillage, le portail ou la messagerie) |

### Mise en place initiale

| Activité                                                                                 | Rôle Client | Rôle Cloud Temple |
| ---------------------------------------------------------------------------------------- | ----------- | ----------------- |
| Définir l'architecture globale du service OpenShift                                      | C           | RA                |
| Dimensionner le service OpenShift (nombre de nœuds, ressources)                          | C           | RA                |
| Installer le service OpenShift avec une configuration par défaut                         | I           | RA                |
| Configuration du service OpenShift                                                       | RA          | C                 |
| Configurer le réseau de base du service OpenShift                                        | I           | RA                |
| Déploiement de la configuration initiale des identités et des accès pour OpenShift       | C           | RA                |
| Définir la stratégie de mise à l'échelle et de haute disponibilité sur l'infrastructure  | C           | RA                |

### Gestion des projets et des applications

| Activité                                          | Rôle Client | Rôle Cloud Temple |
| ------------------------------------------------- | ----------- | ----------------- |
| Créer et gérer les projets OpenShift              | RA          | C                 |
| Déployer et gérer les applications dans OpenShift | RA          | C                 |
| Configurer les pipelines CI/CD                    | RA          | C                 |
| Gérer les images de conteneurs et les registres   | RA          | C                 |

### Maintenance et mises à jour

| Activité                                         | Rôle Client | Rôle Cloud Temple |
| ------------------------------------------------ | ----------- | ----------------- |
| Mettre à jour le service OpenShift               | RA          | I                 |
| Appliquer les correctifs de sécurité à OpenShift | RA          | I                 |
| Mettre à jour les applications déployées         | RA          | I                 |
| Gérer les mises à jour des images de conteneurs  | RA          | I                 |

### Surveillance et performance

| Activité                                             | Rôle Client | Rôle Cloud Temple |
| ---------------------------------------------------- | ----------- | ----------------- |
| Surveiller la performance du service OpenShift       | RA          | I                 |
| Surveiller la performance des applications           | RA          | I                 |
| Gérer les alertes liées au service OpenShift         | RA          | I                 |
| Gérer les alertes liées aux applications             | RA          | I                 |

### Sécurité

| Activité                                                           | Rôle Client | Rôle Cloud Temple |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Gérer la sécurité du service OpenShift                             | RA          | I                 |
| Configurer et gérer les politiques de sécurité des pods            | RA          | C                 |
| Gérer les certificats SSL/TLS pour le service OpenShift            | RA          | I                 |
| Gérer les certificats SSL/TLS pour les applications                | RA          | C                 |
| Implémenter et gérer le contrôle d'accès basé sur les rôles (RBAC) | RA          | I                 |

### Sauvegarde et reprise après sinistre

| Activité                                                              | Rôle Client | Rôle Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Définir la stratégie de sauvegarde pour le service OpenShift          | RA          | CI                |
| Mettre en œuvre et gérer les sauvegardes du service OpenShift         | RA          | CI                |
| Définir la stratégie de sauvegarde pour les applications              | RA          | CI                |
| Mettre en œuvre et gérer les sauvegardes des applications             | RA          | CI                |
| Tester les procédures de reprise après sinistre pour le service       | RA          | CI                |
| Tester les procédures de reprise après sinistre pour les applications | RA          | CI                |

### Support et résolution des problèmes

| Activité                                                         | Rôle Client | Rôle Cloud Temple |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Fournir un support de niveau 1 pour l'infrastructure             | I           | RA                |
| Fournir un support de niveau 2 et 3 pour l'infrastructure        | I           | RA                |
| Résoudre les problèmes liés au service OpenShift                 | RA          | C                 |
| Résoudre les problèmes liés aux applications                     | RA          | C                 |

### Gestion des capacités et évolution

| Activité                                                     | Rôle Client | Rôle Cloud Temple |
| ------------------------------------------------------------ | ----------- | ----------------- |
| Surveiller l'utilisation des ressources du service OpenShift | RA          | C                 |
| Planifier l'évolution des capacités du service               | RA          | C                 |
| Implémenter les changements de capacité                      | I           | RA                |
| Gérer l'évolution des applications et leurs ressources       | RA          | C                 |

### Documentation et conformité

| Activité                                                          | Rôle Client | Rôle Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Maintenir la documentation du service OpenShift                   | I           | RA                |
| Maintenir la documentation des applications                       | RA          | I                 |
| Assurer la conformité du service OpenShift aux normes de sécurité | RA          | C                 |
| Assurer la conformité des applications aux normes de sécurité     | RA          | C                 |
| Réaliser des audits du service OpenShift                          | RA          | C                 |
| Réaliser des audits des applications                              | RA          | C                 |

### Gestion des opérateurs OpenShift

Les **opérateurs OpenShift** sont des extensions du service qui automatisent la gestion d'applications ou de services complexes sur Kubernetes/OpenShift.

Dans le cadre du service **OpenShift Standard**, aucune limitation sur les opérateurs n'est appliquée. Seul la mise à disposition de la fonctionnalité **OperatorHub** est assurée par **Cloud Temple**. Les opérateurs sont mis à disposition via le catalogue de la marketplace Red Hat. L’installation, la surveillance et la gestion des mises à jour de ces opérateurs sont gérés par le **Client**.
Le **Client** est responsable de l'utilisation de ces opérateurs pour gérer ses charges de travail.

| Activité                                                          | Rôle Client | Rôle Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Mise à disposition du catalogue d'Opérateurs par défaut           | CI          | RA                |
| Mise à jour des Opérateurs                                        | RA          | CI                |
| Surveillance de l’état des Opérateurs                             | RA          | CI                |
| Résolution des problèmes liés aux Opérateurs                      | RA          | CI                |
| Gestion des autorisations des Opérateurs                          | RA          | CI                |
| Gestion des ressources des Opérateurs (ajout/suppression)         | RA          | CI                |
| Sauvegarde des données des ressources des Opérateurs              | RA          | CI                |
| Supervision et monitoring des ressources Opérateurs               | RA          | CI                |
| Restauration des données des ressources des Opérateurs            | RA          | CI                |
| Audit de sécurité des Opérateurs                                  | RA          | CI                |
| Support des Opérateurs                                            | RA          | CI                |
| Gestion des licences et contrats de licenses sur les opérateurs   | RA          | I                 |
| Gestion des plans de supports spécifiques sur les opérateurs      | RA          | I                 |

> **Note importante** :
>
> - Tout **dommage** entraîné par l'installation d'un **opérateur** ou issu d'une **opération du client** est de la responsabilité du **Client**.
> - La gestion des **licences** et des **plans de supports spécifiques** sur les opérateurs ne sont pas de la responsabilité de **Cloud Temple**.

---

### Clarification sur l'assistance applicative

**Assistance applicative (prestation complémentaire) :**

L'assistance applicative concernant le développement, la configuration, la gestion et la maintenance des applications **n'est pas sous la responsabilité de Cloud Temple**. Le périmètre se concentre uniquement sur la gestion de **l'infrastructure sous-jacente au service OpenShift**. Le **support des charges de travail**, **la gestion du cluster jusqu'au système d'exploitation**, **la gestion des opérateurs** et les **pipelines CI/CD** sont de la **responsabilité du client** ou de tout **prestataire tiers désigné** pour cette tâche.

| Activité                                           | Rôle Client | Rôle Cloud Temple |
| -------------------------------------------------- | ----------- | ----------------- |
| Assistance applicative (prestation complémentaire) | RA          | C                 |

---
