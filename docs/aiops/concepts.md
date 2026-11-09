---
title: Concepts
---

:::info[Service managé, hors Console]

AIOps se souscrit auprès des experts Cloud Temple, qui étudient avec vous son intégration dans votre environnement et le mode de déploiement adapté. Il ne se commande pas depuis la Console Cloud Temple et n'y dispose ni de vue ni d'API.

:::

## Présentation

Le service **AIOps** de Cloud Temple est une plateforme d'intelligence opérationnelle qui applique l'intelligence artificielle aux opérations informatiques : supervision, analyse des incidents et automatisation des tâches d'exploitation. Il s'appuie sur une CMDB hybride pour replacer chaque événement dans son contexte (services, dépendances, criticité). Il agit comme un copilote de vos équipes : il ne les remplace pas.

Il s'adresse aux équipes d'exploitation, aux ingénieurs de production, aux SRE (*Site Reliability Engineers*) et aux DSI qui veulent améliorer la qualité de service et réduire les tâches répétitives. Cas d'usage typiques :

- réduire le bruit lors d'une tempête d'alertes, en regroupant les événements liés à une même cause en un incident unique ;
- détecter les anomalies dans les rapports de sauvegarde et les traitements par lots ;
- anticiper les incidents grâce à l'analyse du comportement des métriques.

## Avantages

| Avantage | Description |
|---|---|
| Réactivité | Selon le mode de déploiement, AIOps propose (Stackless) ou applique (Stackfull) les correctifs connus. |
| Moins de bruit | La corrélation des alertes concentre vos équipes sur les incidents réels. |
| Posture proactive | La détection d'anomalies signale les dérives avant qu'elles ne provoquent un incident. |
| Transmission des compétences | Les suggestions de résolution et les runbooks éprouvés diffusent l'expertise des ingénieurs expérimentés. |

## Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| Corrélation contextuelle | Agrégation des alertes selon la topologie, pour contenir les tempêtes d'alertes. |
| Analyse des causes racines | Identification du composant défaillant dans la chaîne de dépendances. |
| Analyse sémantique des journaux | Compréhension des erreurs dans les journaux de sauvegarde et de traitements, au-delà des codes retour. |
| Détection d'anomalies | Apprentissage du fonctionnement nominal et alerte en cas d'écart. |
| Auto-remédiation | En mode Stackfull, exécution de scénarios de réparation encadrés par des garde-fous ; en mode Stackless, l'exécution reste à vos équipes. |
| Tri et routage | Catégorisation de l'incident et acheminement vers la bonne équipe. |
| Suggestions de résolution | Rapprochement avec la base de connaissances et l'historique des tickets, pour proposer des runbooks et des causes probables. |

## Architecture

AIOps fonctionne comme une tour de contrôle reliée à vos outils d'exploitation :

- la **supervision** l'alimente en continu (événements, alertes, métriques et journaux selon le périmètre) ;
- l'**outil ITSM** apporte le contexte opérationnel : incidents, changements, historique ;
- la **CMDB** fournit le référentiel des services et de leurs dépendances.

La tour de contrôle corrèle ces signaux, enrichit les tickets (catégorisation, regroupement, priorisation, suggestions de runbooks) et trace ses actions dans l'outil ITSM.

### Modes de déploiement

- **Stackless** (par défaut) : aucune brique ajoutée dans votre système d'information. AIOps s'appuie sur la collecte existante et fournit analyses, recommandations et suggestions ; l'exécution des actions reste à vos équipes.
- **Stackfull** : des agents d'IA déployés dans votre système d'information exécutent des scénarios de remédiation prédéfinis, sous la gouvernance de vos processus ITSM.

### Intégrations

- **Supervision** : Nagios, Centreon, Prometheus, Zabbix.
- **ITSM** : ServiceNow, Jira.
- **Environnements** : Azure, AWS, VMware.

## Régions et zones de disponibilité

Les données sont hébergées en France, dans les datacenters de Cloud Temple, et isolées par client. L'inférence des modèles d'IA est réalisée en France.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Rétention des données | 12 mois en standard |
| Fréquence d'analyse | Temps réel (flux) |
| Modèles d'IA | Supervisés, non supervisés et grands modèles de langage (LLM) |

### Limites

- AIOps ne se commande pas depuis la Console Cloud Temple et n'y dispose ni de vue ni d'API.
- Le périmètre couvert et le mode de déploiement se définissent avec les experts Cloud Temple.

## Sécurité et conformité

- **Isolation** : les données de chaque client sont isolées.
- **Localisation** : données hébergées et modèles d'IA exécutés en France, sur l'infrastructure de Cloud Temple.
- **Gouvernance des actions** : en mode Stackfull, les scénarios de remédiation sont prédéfinis, encadrés par des garde-fous et gouvernés par vos processus ITSM ; en mode Stackless, AIOps n'exécute aucune action.

## Réversibilité

Les modalités d'export et d'effacement de vos données sont définies avec les experts Cloud Temple lors de la souscription.

## Tarification

AIOps se souscrit sur étude, avec les experts Cloud Temple : [contactez-nous](https://www.cloud-temple.com/contactez-nous/). Voir aussi la [page AIOps du site Cloud Temple](https://www.cloud-temple.com/produits/ai-ops/).
