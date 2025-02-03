---
title: Matrice de responsabilité PaaS
---

Voici le modèle RACI définissant la répartition des responsabilités entre le client et Cloud Temple pour l'utilisation des plateformes PaaS de Cloud Temple.

## Définition des différents rôles

Nous rappelons ici les différents rôles du RACI :

| Rôle         | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Réalise  | __R__éalise le processus                                                              |
| (A) Approuve | __A__pprouve la réalisation du processus                                              |
| (C) Consulte | __C__onsulté pendant le processus                                                     |
| (I) Informé  | __I__nformé des résultats du processus (via l'outillage, le portail ou la messagerie) |


## Mise en place initiale

| Activité                                                             | Rôle Client | Rôle Cloud Temple |
| -------------------------------------------------------------------- | ----------- | ----------------- |
| Définir l'architecture globale de la plateforme OpenShift            | C           | RA                |
| Dimensionner la plateforme OpenShift (nombre de nœuds, ressources)   | C           | RA                |
| Installer et configurer la plateforme OpenShift                      | I           | RA                |
| Configurer le réseau de base de la plateforme OpenShift              | I           | RA                |
| Mettre en place la gestion des identités et des accès pour OpenShift | C           | RA                |
| Définir la stratégie de mise à l'échelle et de haute disponibilité   | C           | RA                |

## Gestion des projets et des applications

| Activité                                          | Rôle Client | Rôle Cloud Temple |
| ------------------------------------------------- | ----------- | ----------------- |
| Créer et gérer les projets OpenShift              | RA          | C                 |
| Déployer et gérer les applications dans OpenShift | RA          | C                 |
| Configurer les pipelines CI/CD                    | RA          | C                 |
| Gérer les images de conteneurs et les registres   | RA          | C                 |

## Maintenance et mises à jour

| Activité                                         | Rôle Client | Rôle Cloud Temple |
| ------------------------------------------------ | ----------- | ----------------- |
| Mettre à jour la plateforme OpenShift            | I           | RA                |
| Appliquer les correctifs de sécurité à OpenShift | I           | RA                |
| Mettre à jour les applications déployées         | RA          | I                 |
| Gérer les mises à jour des images de conteneurs  | RA          | I                 |

## Surveillance et performance

| Activité                                             | Rôle Client | Rôle Cloud Temple |
| ---------------------------------------------------- | ----------- | ----------------- |
| Surveiller la performance de la plateforme OpenShift | I           | RA                |
| Surveiller la performance des applications           | RA          | I                 |
| Gérer les alertes liées à la plateforme              | I           | RA                |
| Gérer les alertes liées aux applications             | RA          | I                 |

## Sécurité

| Activité                                                           | Rôle Client | Rôle Cloud Temple |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Gérer la sécurité de la plateforme OpenShift                       | I           | RA                |
| Configurer et gérer les politiques de sécurité des pods            | RA          | C                 |
| Gérer les certificats SSL/TLS pour la plateforme                   | I           | RA                |
| Gérer les certificats SSL/TLS pour les applications                | RA          | C                 |
| Implémenter et gérer le contrôle d'accès basé sur les rôles (RBAC) | C           | RA                |

## Sauvegarde et reprise après sinistre

| Activité                                                              | Rôle Client | Rôle Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Définir la stratégie de sauvegarde pour la plateforme OpenShift       | C           | RA                |
| Mettre en œuvre et gérer les sauvegardes de la plateforme             | I           | RA                |
| Définir la stratégie de sauvegarde pour les applications              | RA          | C                 |
| Mettre en œuvre et gérer les sauvegardes des applications             | RA          | I                 |
| Tester les procédures de reprise après sinistre pour la plateforme    | I           | RA                |
| Tester les procédures de reprise après sinistre pour les applications | RA          | C                 |

## Support et résolution des problèmes

| Activité                                                         | Rôle Client | Rôle Cloud Temple |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Fournir un support de niveau 1 pour la plateforme OpenShift      | I           | RA                |
| Fournir un support de niveau 2 et 3 pour la plateforme OpenShift | I           | RA                |
| Résoudre les problèmes liés à la plateforme                      | I           | RA                |
| Résoudre les problèmes liés aux applications                     | RA          | C                 |

## Gestion des capacités et évolution

| Activité                                                 | Rôle Client | Rôle Cloud Temple |
| -------------------------------------------------------- | ----------- | ----------------- |
| Surveiller l'utilisation des ressources de la plateforme | I           | RA                |
| Planifier l'évolution des capacités de la plateforme     | C           | RA                |
| Implémenter les changements de capacité                  | I           | RA                |
| Gérer l'évolution des applications et leurs ressources   | RA          | C                 |

## Documentation et conformité

| Activité                                                      | Rôle Client | Rôle Cloud Temple |
| ------------------------------------------------------------- | ----------- | ----------------- |
| Maintenir la documentation de la plateforme OpenShift         | I           | RA                |
| Maintenir la documentation des applications                   | RA          | I                 |
| Assurer la conformité de la plateforme aux normes de sécurité | I           | RA                |
| Assurer la conformité des applications aux normes de sécurité | RA          | C                 |
| Réaliser des audits de la plateforme                          | I           | RA                |
| Réaliser des audits des applications                          | RA          | C                 |