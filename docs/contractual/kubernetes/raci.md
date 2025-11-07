---
title: Matrice de Responsabilités (RACI) - Managed Kubernetes
---

## RACI
### Architecture & Infrastructure

| **Activité**                                                        | **Client** | **Cloud Temple** |
| ------------------------------------------------------------------- | ---------- | ---------------- |
| Définir l'architecture globale du service Kubernetes                | C          | RA               |
| Dimensionner le service Kubernetes (nombre de noeuds, ressources)   | C          | RA               |
| Installer le service Kubernetes avec une configuration par défaut   | I          | RA               |
| Configuration du service Kubernetes                                 | C          | RA               |
| Configurer le réseau de base du service Kubernetes                  | I          | RA               |
| Déploiement de la configuration initiale des identités et des accès | C          | RA               |
| Définir la stratégie de mise à l’échelle et de haute disponibilité  | C          | RA               |

### Gestion des projets et applications métiers 

| **Activité**                                       | **Client** | **Cloud Temple** |
| -------------------------------------------------- | ---------- | ---------------- |
| Créer et gérer les projets Kubernetes              | RA         | I*               |
| Déployer et gérer les applications dans Kubernetes | RA         | I*               |
| Configurer les pipelines CI/CD                     | RA         | I*               |
| Gérer les images de conteneurs et les registres    | RA         | I*               |

*Ces responsabilités peuvent être déléguées à Cloud Temple via un contrat d'infogérance complémentaire.

### Surveillance et performance

| **Activité**                                    | **Client** | **Cloud Temple** |
| ----------------------------------------------- | ---------- | ---------------- |
| Surveiller la performance du service Kubernetes | I          | RA               |
| Surveiller la performance des applications      | RA         |                  |
| Gérer les alertes liées au service Kubernetes   | I          | RA               |
| Gérer les alertes liées aux applications        | RA         |                  |


### Maintenance et mises à jour Infrastructures

| **Activité**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Mettre à jour le service Kubernetes/OS                 | C          | RA               |
| Appliquer les correctifs de sécurité à Kubernetes      | C          | RA               |
| Mettre à jour les applications déployées (opérateurs*) | C          | RA               |

*Package opérateur inclus sur Managed Kube - voir chapitres : Packages Helm managés

### Sécurité

| **Activité**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Gérer la sécurité du service Kubernetes                                    | RA         | RA               |
| Configurer et gérer les politiques de sécurité des pods                    | RA         | I*               |
| Gérer les certificats SSL/TLS pour le service Kubernetes                   | C          | RA               |
| Gérer les certificats SSL/TLS pour les applications                        | RA         | I*               |
| Implémenter et gérer le contrôle d'accès basé sur les rôles de base (RBAC) | C          | R                |
| Implémenter et gérer le contrôle d'accès basé sur les rôles client (RBAC)  | RA         | I*               |

*Ces responsabilités peuvent être déléguées à Cloud Temple via un contrat d'infogérance complémentaire.

### Sauvegarde et reprise après sinistre

| **Activité**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Définir la stratégie de sauvegarde pour le service Kubernetes              | I          | RA               |
| Mettre en oeuvre et gérer les sauvegardes du service Kubernetes            | I          | RA               |
| Définir la stratégie de sauvegarde pour les applications                   | RA*        | I*               |
| Mettre en oeuvre et gérer les sauvegardes des applications                 | RA*        | I*               |
| Tester les procédures de reprise après sinistre pour le service Kubernetes | CI         | RA               |
| Tester les procédures de reprise après sinistre pour les applications      | RA*        | CI*              |

*Ces responsabilités peuvent être déléguées à Cloud Temple via un contrat d'infogérance complémentaire.

### Support et résolution des problèmes

| **Activité**                                              | **Client** | **Cloud Temple** |
| --------------------------------------------------------- | ---------- | ---------------- |
| Fournir un support de niveau 1 pour l'infrastructure      | I          | RA               |
| Fournir un support de niveau 2 et 3 pour l'infrastructure | I          | RA               |
| Résoudre les problèmes liés au service Kubernetes         | C          | RA               |
| Résoudre les problèmes liés aux applications              | RA         | I                |

### Gestion des capacités et évolution

| **Activité**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Surveiller l'utilisation des ressources Kubernetes     | C          | RA               |
| Planifier l’évolution des capacités du service         | RA         | C                |
| Implémenter les changements de capacité                | I          | RA               |
| Gérer l’évolution des applications et leurs ressources | RA         | I                |

### Documentation et conformité

| **Activité**                                     | **Client** | **Cloud Temple** |
| ------------------------------------------------ | ---------- | ---------------- |
| Maintenir la documentation du service Kubernetes | I          | RA               |
| Maintenir la documentation des applications      | RA         | I                |
| Assurer la conformité du service Kubernetes      | I          | RA               |
| Assurer la conformité des applications           | RA         | I                |
| Réaliser des audits du service Kubernetes        | I          | RA               |
| Réaliser des audits des applications             | RA         | I                |

### Gestion des opérateurs/CRD Kubernetes de base

| **Activité**                                                | **Client** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Mise à disposition du catalogue d'Opérateurs par défaut     | CI         | RA               |
| Mise à jour des Opérateurs                                  | CI         | RA               |
| Surveillance de l’état des Opérateurs                       | CI         | RA               |
| Résolution des problèmes liés aux Opérateurs                | CI         | RA               |
| Gestion des autorisations des Opérateurs                    | CI         | RA               |
| Gestion des ressources des Opérateurs (ajout/suppression)   | CI         | RA               |
| Sauvegarde des données des ressources des Opérateurs        | CI         | RA               |
| Supervision des ressources Opérateurs                       | CI         | RA               |
| Restauration des données des ressources des Opérateurs      | CI         | RA               |
| Audit de sécurité des Opérateurs                            | CI         | RA               |
| Support des Opérateurs                                      | CI         | RA               |
| Gestion des licences sur les opérateurs                     | CI         | RA               |
| Gestion des plans de support spécifiques sur les opérateurs | CI         | RA               |

*Package opérateur inclus sur Managed Kube - voir chapitres : Packages Helm managés
 
### Gestion des applications/opérateurs/CRD Kubernetes (métiers)

| **Activité**                                                | **Client** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Déploiement des CRDs                                        | RA*        | I*               |
| Mise à jour des Opérateurs                                  | RA         | I                |
| Surveillance de l’état des Opérateurs                       | RA         | I                |
| Résolution des problèmes liés aux Opérateurs                | RA         | I                |
| Gestion des autorisations des Opérateurs                    | RA         | I                |
| Gestion des ressources des Opérateurs (ajout/suppression)   | RA         | I                |
| Sauvegarde des données des ressources des Opérateurs        | RA         | I                |
| Supervision des ressources Opérateurs                       | RA         | I                |
| Restauration des données des ressources des Opérateurs      | RA         | I                |
| Audit de sécurité des Opérateurs                            | RA         | I                |
| Support des Opérateurs                                      | RA         | I                |
| Gestion des licences sur les opérateurs                     | RA         | I                |
| Gestion des plans de support spécifiques sur les opérateurs | RA         | I                |

*Ces responsabilités peuvent être déléguées à Cloud Temple via un contrat d'infogérance complémentaire.

### Assistance applicative

| **Activité**                                | **Client** | **Cloud Temple** |
| ------------------------------------------- | ---------- | ---------------- |
| Assistance applicative (prestation externe) | RA         | I                |

Un support applicatif peut également être fourni dans le cadre d'une prestation complémentaire.

### RACI (synthétique)

- Cloud Temple : responsable et acteur (RA) du socle Kubernetes, sécurité cluster, sauvegarde infra, supervision.
- Client : responsable et acteur (RA) des projets applicatifs, opérateurs métiers, pipelines CI/CD, sauvegardes applicatives.
- Zone "grise" : adaptations et extensions (IAM, opérateurs spécifiques, durcissement de conformité/sécurité du cluster) - facturées en mode projet.
