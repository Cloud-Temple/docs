---
title: Catalogue des Modèles IA
sidebar_position: 2
---

# Catalogue des Modèles LLM as a Service

## Consulter le catalogue à jour

Le **[catalogue et cycle de vie des modèles](https://llmaas.status.cloud-temple.app/lifecycle)** est la référence pour les modèles en production, les dépréciations, les dates de fin de support, les statuts LTS et les migrations conseillées. Utilisez ses filtres et sa recherche pour préparer un nouveau projet ou suivre les modèles de vos applications. Pour les dates de cycle de vie et les migrations, les informations publiées sur cette page font autorité en cas d’écart avec un ancien exemple ou une copie du catalogue.

Cette page explique comment choisir et utiliser un modèle. Les inventaires, dates et mesures de performance sont consultables directement dans les sources suivantes :

| Besoin | Source à consulter |
|--------|--------------------|
| Choisir un modèle, vérifier son contexte et son cycle de vie | [Catalogue et cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle) |
| Obtenir les identifiants exposés par l'API | `GET /v1/models` ([documentation](./api.md)) |
| Vérifier la disponibilité et les performances observées | [État du service](https://llmaas.status.cloud-temple.app/) |
| Consulter les évolutions du service et les annonces de migration | [Changelog LLMaaS](https://llmaas.status.cloud-temple.app/changelog) |
| Examiner les mesures passées | [Historique de supervision](https://llmaas.status.cloud-temple.app/history) |

## Choisir selon votre usage

Le service couvre les usages ci-dessous. Vérifiez les capacités du modèle retenu avant l'intégration : tous les modèles ne prennent pas en charge les mêmes entrées ni les mêmes fonctionnalités.

### Chat et raisonnement

Pour les assistants, la synthèse ou l'analyse, comparez la qualité des réponses sur vos propres documents, le temps de réponse et la taille de contexte nécessaire. Pour une application appelée à durer, examinez le statut **LTS** et la date de fin de support publiée.

### Programmation et agents

Pour générer du code ou construire un agent, vérifiez la prise en charge des appels d'outils (*tool calling*) et testez des séquences complètes d'exécution. Le [guide de démarrage](./quickstart.md) présente un exemple d'appel de fonction.

### Vision et multimodal

Choisissez un modèle acceptant les images pour l'analyse visuelle et l'extraction de texte. Vérifiez les formats acceptés par l'API et la capacité de contexte ; la prise en charge du texte n'implique pas celle des images. Consultez les exemples de [requêtes multimodales](./api.md).

### Embedding et recherche sémantique

Les embeddings transforment le texte en vecteurs utilisés par la recherche. Comparez la couverture linguistique, la longueur des textes acceptés et la pertinence sur votre corpus. Un changement de modèle peut nécessiter de recalculer les vecteurs et de reconstruire l'index : ne mélangez pas les embeddings de modèles différents. Consultez le [guide RAG](./rag_explained.md).

## Modèles de Reranking

Le reranking reclasse les documents retrouvés selon leur pertinence pour une question. Il complète la recherche vectorielle avant la génération de la réponse. Les endpoints `/v1/rerank` et `/v2/rerank` sont présentés dans le [guide Reranking](./rerank.md).

### Sécurité et guardrails

Les modèles de sécurité permettent d'évaluer des contenus dans un parcours applicatif. Définissez les critères de filtrage, les seuils et le traitement des cas ambigus avec vos équipes métier ; validez-les sur vos données.

### Traduction

Pour une application multilingue, testez les langues concernées, votre terminologie et la préservation de la mise en forme. La qualité doit être évaluée sur les documents réellement traités.

### Audio et image

Le catalogue comprend des usages de transcription audio et de génération d'images. Vérifiez le modèle et le protocole requis pour chaque usage, notamment la distinction entre transcription de fichiers et transcription en temps réel.

## Récupérer les identifiants via l'API

```bash
curl "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Utilisez l'identifiant exact renvoyé par l'API dans le paramètre `model`. La présence d'un identifiant ne garantit pas qu'il désigne encore le modèle d'origine : un ancien nom peut être redirigé vers un successeur. Vérifiez aussi son [cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle).

## Préparer la production

1. Sélectionnez un modèle adapté à votre usage et vérifiez sa licence.
2. Consultez son statut, sa date de fin de support et sa migration conseillée.
3. Testez la qualité, la latence, le coût et les capacités nécessaires sur vos cas réels.
4. Conservez l'identifiant du modèle dans la configuration de votre application pour faciliter une migration.
5. Suivez le changelog et appliquez le [guide de migration](./concepts.md#migration-vers-un-autre-modèle) lorsqu'un changement est annoncé.

Les vitesses observées dépendent notamment de la charge, de la longueur des requêtes et du mode de génération. Elles servent de repères, pas de garanties de débit pour votre application.

Pour les tarifs et les paliers d'accès, consultez la [documentation API](./api.md). Pour les traitements différés, consultez le [mode Batch](./batch.md).
