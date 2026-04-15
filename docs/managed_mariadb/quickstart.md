---
title: Guide de démarrage
---

Bienvenue sur le guide de démarrage de **MariaDB Managé** Cloud Temple.

L'objectif de cette section est de vous orienter vers les ressources nécessaires pour prendre en main votre produit.

## Avant de commencer

Assurez vous de disposer des accès qui vous ont été fournis par Cloud-Temple.

Assurez vous que les flux réseaux sont ouverts vers les IP qui vous ont été fournies.

## Accéder à votre cluster MariaDB Managé

Suivant le modèle de déploiement choisi, vous disposez d'un ou plusieurs endpoints.

**StandAlone** : 1 seul endpoint (1 seule IP), accessible sur le port 3306.

**Distributed** :

- 1 Endpoint Maxscale, accessible sur le port 3306, capable de distribuer vos requetes vers les instances les plus appropiées (c'est le endpoint a privilégier)
- 1 Endpoint R/W, accessible sur le port 3306, qui pointe vers l'instance primaire, en lecture-écriture.
- 1 Endpoint R/O, accessible sur le port 3306, qui pointe vers les toutes instances, en lecture-seule.

## Vos permissions

Vous ne disposez d'aucune permission au niveau du moteur de base de données (ni `SUPER`, ni `ALL_PRIVILEGE`)

Vous ne pouvez pas reconfigurer le moteur ou ses options, ni installer le performance_schema.

Les demandes d'ajouts de base de données, d'utilisteurs ou de grants sont a effectuer auprès des équipes Cloud-Temple.
