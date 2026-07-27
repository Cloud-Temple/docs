---
title: Guide de démarrage
---

Bienvenue sur le guide de démarrage de **MariaDB Managé** Cloud Temple.

L'objectif de cette section est de vous orienter vers les ressources nécessaires pour prendre en main votre produit.

## Avant de commencer

Assurez-vous de disposer des accès qui vous ont été fournis par Cloud-Temple.

Assurez-vous que les flux réseaux sont ouverts vers les IP qui vous ont été fournies.

> **Prérequis de déploiement** : Ce déploiement nécessite un cluster Kubernetes managé entièrement installé, avec la stack Prometheus et Grafana configurée pour bénéficier de la télémétrie complète et du dashboard Grafana associé.

Chaque cluster ou serveur est déployé de façon isolée par l'opérateur MariaDB dans un namespace Kubernetes dédié.

## Accéder à votre cluster MariaDB Managé

Suivant le modèle de déploiement choisi, vous disposez d'un ou plusieurs endpoints.

**StandAlone** : 1 seul endpoint (1 seule IP), accessible sur le port 3306.

**MultiAZ** :

- 1 Endpoint Maxscale, accessible sur le port 3306, capable de distribuer vos requêtes vers les instances les plus appropriées (c'est le endpoint à privilégier).
- 1 Endpoint R/W, accessible sur le port 3306, qui pointe vers l'instance primaire, en lecture-écriture.
- 1 Endpoint R/O, accessible sur le port 3306, qui pointe vers toutes les instances, en lecture seule.

## Vos permissions

Vous ne disposez d'aucune permission au niveau du moteur de base de données (ni `SUPER`, ni `ALL_PRIVILEGE`).

Vous ne pouvez pas reconfigurer le moteur ou ses options, ni installer le `performance_schema`. (Rappel : il est d'ailleurs déconseillé de l'activer sur les instances inférieures à la taille X-Large pour des raisons de ressources RAM).

Les demandes d'ajouts de bases de données, d'utilisateurs ou de grants sont à effectuer auprès des équipes Cloud-Temple.
