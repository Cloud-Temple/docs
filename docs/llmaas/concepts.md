---
title: Concepts
sidebar_position: 3
---

<a id="vue-densemble"></a>

## Présentation

Le service **LLMaaS** (Large Language Models as a Service) de Cloud Temple donne accès, par une API compatible OpenAI, à un catalogue de modèles de langage dont l'inférence est réalisée en France, sur une infrastructure qualifiée SecNumCloud et certifiée HDS. Vos données ne sont ni exploitées ni conservées après traitement.

Il s'adresse aux équipes qui intègrent l'IA générative dans leurs applications, y compris dans les secteurs réglementés (santé, finance, secteur public). Cas d'usage typiques :

- assistants et chatbots multilingues ;
- analyse et synthèse de documents longs, recherche augmentée par génération (RAG) ;
- génération de code et agents ;
- analyse d'images et de documents visuels ;
- transcription audio et traduction.

## Avantages

| Avantage | Description |
|---|---|
| Confidentialité | Les prompts et les réponses ne sont ni exploités ni conservés après traitement, à l'exception des résultats d'un traitement par lots, purgés après une durée limitée. |
| Souveraineté | Inférence en France, sur une infrastructure qualifiée SecNumCloud et certifiée HDS. |
| Compatibilité OpenAI | Une application existante change d'URL de base et de clé d'API pour utiliser le service. |
| Catalogue géré | Cloud Temple ajoute, met à jour et retire les modèles, et publie leur cycle de vie. |
| Facturation à l'usage | Seuls les volumes consommés sont facturés, par unité de facturation (tokens, minutes audio). |
| Écosystème | Les frameworks courants (LangChain, Haystack, Semantic Kernel…) fonctionnent avec l'API. |

## Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| Catalogue de modèles | Modèles de dialogue, de raisonnement, de programmation, de vision, d'embedding, de reranking, de sécurité, de traduction, de transcription audio et de génération d'images. Voir le [guide de choix](./models.md). |
| API compatible OpenAI | Un point d'accès unique, `https://api.ai.cloud-temple.com/v1`, avec streaming des réponses et appels de fonctions (*function calling*). |
| Recherche documentaire (RAG) | Embeddings et [réordonnancement de documents](./rerank.md) pour construire des pipelines RAG. |
| Analyse de documents visuels | Modèles de vision et [reconnaissance de documents](./ocr.md). |
| Transcription audio | Transcription en lot ou en temps réel. |
| Traitement par lots | Soumission asynchrone de lots de requêtes : voir le [traitement par lots](./batch.md). |
| Modèles de sécurité | Modèles à appeler en pré-filtre ou en post-filtre pour détecter les contenus problématiques et les tentatives de contournement ; ils ne s'appliquent pas automatiquement. |

<a id="️-architecture-technique"></a>

## Architecture

### Infrastructure Cloud Temple

import ArchitectureLLMaaS from '@site/docs/llmaas/images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Architecture Technique LLMaaS Cloud Temple" />

### Composants Principaux

#### API Gateway LLMaaS
- **Compatible OpenAI** : Intégration transparente avec écosystème existant
- **Rate Limiting** : Gestion des quotas par tier de facturation
- **Load Balancing** : Distribution des requêtes sur les ressources d'inférence
- **Monitoring** : Métriques temps réel et alerting

#### Service d'Authentification
- **Clés API** : Création, rotation et révocation sous la responsabilité du client. Voir le [partage des responsabilités (RACI)](../contractual/llmaas/raci.md).
- **Contrôle d'accès** : Permissions granulaires par modèle
- **Audit trails** : Traçabilité complète des accès

<a id="-intégration-et-écosystème"></a>

### Compatibilité OpenAI

Le service LLMaaS est **compatible** avec l'API OpenAI :

```python
# Migration transparente
from openai import OpenAI

# Avant (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# Après (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="votre-token-cloud-temple",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Code identique !
response = client_ct.chat.completions.create(
    model="gpt-oss:120b",  # Modèle Cloud Temple
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Écosystème Supporté

#### Frameworks IA
- ✅ **LangChain** : Intégration native
- ✅ **Haystack** : Pipeline de documents
- ✅ **Semantic Kernel** : Orchestration Microsoft
- ✅ **AutoGen** : Agents conversationnels

#### Outils Développement
- ✅ **Jupyter** : Notebooks interactifs
- ✅ **Streamlit** : Applications web rapides
- ✅ **Gradio** : Interfaces utilisateur IA
- ✅ **FastAPI** : APIs backend

#### Plateformes No-Code
- ✅ **Zapier** : Automatisations
- ✅ **Make** : Intégrations visuelles
- ✅ **Bubble** : Applications web

## Régions et zones de disponibilité

Le service est disponible dans la région FR1. L'inférence est réalisée en France, dans les datacenters de Cloud Temple.

<a id="-modèles-et-tokens"></a>

## Caractéristiques techniques

### Catalogue de Modèles

*Consultez le [catalogue et cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle) et le [guide de choix](./models.md).*

### Gestion des Tokens

<a id="types-de-tokens"></a>

#### Unités de facturation
- **Tokens d'entrée** : votre prompt et son contexte
- **Tokens de sortie** : la réponse générée par le modèle
- **Tokens de raisonnement** : uniquement pour les modèles « raisonneurs » ou « hybrides », lorsque le raisonnement est actif, et seulement sur les tokens liés à cette activité
- **Tokens de reranking** : le [réordonnancement de documents](./rerank.md)
- **Tokens batch** (entrée et sortie) : le [traitement par lots](./batch.md)
- **Minutes audio transcrites** : toute minute commencée est comptée

### Tokenisation

```python
# Exemple d'estimation de tokens
def estimate_tokens(text: str) -> int:
    """Estimation approximative : 1 token ≈ 4 caractères"""
    return len(text) // 4

prompt = "Expliquez la photosynthèse"
response_max = 200  # tokens max souhaités

estimated_input = estimate_tokens(prompt)  # ~6 tokens
print(f"Tokens estimés : {estimated_input}; limite de sortie : {response_max}")
```

<a id="-performance-et-scalabilité"></a>

### Monitoring en Temps Réel

Depuis la **Console Cloud Temple** :
- Métriques d'utilisation par modèle
- Graphiques de latence et débit
- Alertes sur seuils de performance

### Limites

- **Débit** : les limites de tokens par heure et par jour dépendent de votre tier ; elles sont détaillées dans la [documentation de l'API](./api.md), section « Rate Limiting et Facturation ».
- **Contexte** : la taille de contexte maximale dépend du modèle ; consultez le [catalogue et cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle).
- **Traitement par lots** : capacité de la file et durée de conservation des résultats dans les [limites du traitement par lots](./batch.md#limites-et-conservation).

<a id="-sécurité-et-conformité"></a>

## Sécurité et conformité

### Qualification SecNumCloud

Le service LLMaaS est calculé sur une infrastructure technique qui bénéficie de la **qualification SecNumCloud 3.2** de l'ANSSI et de la **certification HDS** pour l'hébergement des données de santé, garantissant :

#### Protection des Données
- **Chiffrement bout en bout** : TLS 1.3 pour tous les échanges

#### Souveraineté Numérique
- **Hébergement France** : Datacenters Cloud Temple certifiés
- **Droit français** : Conformité RGPD native
- **Pas d'exposition** : Aucun transfert vers clouds étrangers

<a id="audit-et-traçabilité"></a>

#### Confidentialité des Données
- **Aucune conservation** : vos données demeurent strictement confidentielles et ne sont ni exploitées, ni stockées après traitement. Seule exception : les résultats d'un [traitement par lots](./batch.md) restent consultables pendant une durée limitée après sa complétion (24 h par défaut), puis sont purgés automatiquement ; voir les [conditions de conservation](./batch.md#limites-et-conservation)

### Contrôles de Sécurité

import SecurityControls from '@site/docs/llmaas/images/llmaas_security_002.png';

<img src={SecurityControls} alt="Contrôles de Sécurité LLMaaS" />

### Sécurité des Prompts

La plateforme LLMaaS n'applique pas de filtrage automatique du contenu des prompts contre les injections ou les tentatives de contournement des instructions (*jailbreaks*).

Les contrôles de contenu sont à mettre en œuvre dans votre application selon votre cas d'usage. Vous pouvez appeler explicitement un [modèle de sécurité du catalogue](./models.md#sécurité-et-guardrails) pour évaluer les entrées ou les réponses. Ces modèles ne sont pas exécutés automatiquement sur les requêtes adressées aux autres modèles.

Définissez les critères de filtrage et le traitement des résultats avec vos équipes métier, puis testez-les sur vos données, notamment pour mesurer les faux positifs. Le [partage des responsabilités](../contractual/llmaas/raci.md) précise les rôles du client et de Cloud Temple.

<a id="-cycle-de-vie-des-modèles"></a>

## Versions et cycle de vie

Le **[cycle de vie des modèles](https://llmaas.status.cloud-temple.app/lifecycle)** publie les statuts, échéances et migrations conseillées. Consultez-le avant de choisir un modèle et pendant l'exploitation de votre application.

### Lire le cycle de vie

- **DMP** : date de mise en production.
- **DSP** : date de sortie de production (fin de support) annoncée pour le modèle.
- **LTS (Long Term Support)** : modèle bénéficiant d'un support étendu ; vérifiez la date publiée pour le modèle concerné.
- **Production** : modèle indiqué en production dans le catalogue.
- **Deprecated** : modèle déprécié pour lequel une migration doit être préparée. Ce statut ne signifie pas nécessairement que les appels API sont déjà interrompus.
- **Planned** : modèle annoncé, dont la disponibilité doit être vérifiée avant utilisation.

Les annonces d'ajout, de redirection et de retrait sont publiées dans le [changelog du service](https://llmaas.status.cloud-temple.app/changelog). Pour un besoin de stabilité ou de support particulier, contactez le support afin de préciser les modalités applicables.

### Redirections et anciens identifiants

Certains anciens identifiants sont redirigés vers un modèle successeur. Une requête peut donc continuer à fonctionner tout en étant traitée par un autre modèle. La continuité de l'appel API ne garantit pas des réponses identiques, ni les mêmes capacités, latences ou limites de contexte.

### Migration vers un autre modèle

1. Repérez le modèle concerné, l'échéance et le successeur conseillé dans le [cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle).
2. Vérifiez l'identifiant du successeur avec `GET /v1/models` et ses capacités : vision, appels d'outils, raisonnement et contexte selon votre usage.
3. Testez le successeur sur un échantillon représentatif de vos requêtes : qualité, formats de sortie, outils, latence et consommation.
4. Mettez à jour le paramètre `model` dans la configuration de votre application après validation, puis surveillez les résultats.
5. Pour les embeddings, prévoyez de recalculer les vecteurs et de reconstruire l'index si le modèle change.

### Modèles dépréciés

La liste et les destinations de migration sont disponibles dans le [catalogue de cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle). Si aucune migration n'est indiquée, contactez le support avant l'échéance pour choisir une solution adaptée.

## Responsabilités

La répartition des responsabilités entre le client et Cloud Temple est détaillée dans la [matrice de responsabilités (RACI) LLMaaS](../contractual/llmaas/raci.md).

## Réversibilité

- **Pas de données à rapatrier** : le service ne conserve ni les prompts ni les réponses après traitement. Seuls les résultats d'un traitement par lots sont à récupérer avant leur purge : voir les [conditions de conservation](./batch.md#limites-et-conservation).
- **Portabilité des applications** : l'API étant compatible OpenAI, une application peut être reconfigurée vers un autre fournisseur compatible en changeant l'URL de base et la clé d'API.
- **Embeddings** : les vecteurs dépendent du modèle d'embedding ; un changement de modèle impose de les recalculer.

## Tarification

Les tarifs de LLMaaS sont publiés sur la page produit du site Cloud Temple :
[LLMaaS — tarifs](https://www.cloud-temple.com/produits/large-language-model-as-a-service-llmaas/).

Le coût dépend des volumes consommés dans chacune des [unités de facturation](#unités-de-facturation).

<a id="-bonnes-pratiques"></a>

## Bonnes pratiques

Pour tirer le meilleur parti de l'API LLMaaS, il est essentiel d'adopter des stratégies d'optimisation des coûts, de la performance et de la sécurité.

### Optimisation des Coûts

La maîtrise des coûts repose sur une utilisation intelligente des tokens et des modèles.

1.  **Choix du Modèle** : Comparez plusieurs modèles sur des exemples représentatifs de votre usage. Retenez celui qui répond à vos exigences de qualité et de latence, puis mesurez sa consommation de tokens. Consultez le [catalogue de cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle) pour identifier les modèles disponibles et leurs successeurs. La facturation dépend du tarif applicable et des volumes consommés ; la taille du modèle seule ne détermine pas le coût facturé.

2.  **Gestion du Contexte** : L'historique de la conversation (`messages`) est renvoyé à chaque appel, consommant des tokens d'entrée. Pour des conversations longues, envisagez des stratégies de résumé ou de fenêtrage pour ne conserver que les informations pertinentes.
    ```python
    # Pour une conversation longue, on peut résumer les premiers échanges.
    messages = [
        {"role": "system", "content": "Vous êtes un assistant IA."},
        {"role": "user", "content": "Résumé des 10 premiers échanges..."},
        {"role": "assistant", "content": "Ok, j'ai le contexte."},
        {"role": "user", "content": "Voici ma nouvelle question."}
    ]
    ```

3.  **Limitation des Tokens de Sortie** : Utilisez toujours le paramètre `max_tokens` pour éviter des réponses excessivement longues et coûteuses. Fixez une limite raisonnable en fonction de ce que vous attendez.
    ```python
    # Demander un résumé de 100 mots maximum.
    response = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Résume ce document..."}],
        max_tokens=150, # Marge de sécurité for ~100 mots
    )
    ```

### Performance

La réactivité de votre application dépend de la manière dont vous gérez les appels à l'API.

1.  **Requêtes Asynchrones** : Pour traiter plusieurs requêtes sans attendre la fin de chacune, utilisez des appels asynchrones. C'est particulièrement utile pour les applications backend traitant un grand volume de requêtes simultanées.
    ```python
    import asyncio
    from openai import AsyncOpenAI

    client = AsyncOpenAI(api_key="...", base_url="...")

    async def process_prompt(prompt: str):
        # Traite une seule requête de manière asynchrone
        response = await client.chat.completions.create(model="gpt-oss:120b", messages=[{"role": "user", "content": prompt}])
        return response.choices[0].message.content

    async def batch_requests(prompts: list):
        # Lance plusieurs tâches en parallèle et attend leur complétion
        tasks = [process_prompt(p) for p in prompts]
        return await asyncio.gather(*tasks)
    ```

2.  **Streaming pour l'Expérience Utilisateur (UX)** : Pour les interfaces utilisateur (chatbots, assistants), le streaming est essentiel. Il permet d'afficher la réponse du modèle mot par mot, donnant une impression de réactivité immédiate au lieu d'attendre la réponse complète.
    ```python
    # Affiche la réponse en temps réel dans une interface utilisateur
    response_stream = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Raconte-moi une histoire."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Afficher le morceau de texte dans l'UI
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Sécurité

La sécurité de votre application est primordiale, surtout lorsque vous traitez des entrées utilisateur.

1.  **Validation et Nettoyage des Entrées (Sanitization)** : Ne faites jamais confiance aux entrées utilisateur. Avant de les envoyer à l'API, nettoyez-les pour retirer tout code potentiellement malveillant ou instructions de "prompt injection". Limitez également leur taille pour éviter les abus.
    ```python
    def sanitize_input(user_input: str) -> str:
        # Exemple simple : retirer les démarqueurs de code et limiter la longueur.
        # Des bibliothèques plus robustes peuvent être utilisées pour une sanitization avancée.
        cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
        return cleaned[:2000]  # Limite la taille à 2000 caractères
    ```

2.  **Gestion Robuste des Erreurs** : Encadrez toujours vos appels API dans des blocs `try...except` pour gérer les erreurs réseau, les erreurs de l'API (ex: 429 Rate Limit, 500 Internal Server Error) et fournir une expérience utilisateur dégradée mais fonctionnelle.
    ```python
    from openai import APIError, APITimeoutError

    try:
        response = client.chat.completions.create(...)
    except APITimeoutError:
        # Gérer le cas où la requête prend trop de temps
        return "Le service prend plus de temps que prévu, veuillez réessayer."
    except APIError as e:
        # Gérer les erreurs spécifiques à l'API
        logger.error(f"Erreur API LLMaaS: {e.status_code} - {e.message}")
        return "Désolé, une erreur est survenue avec le service d'IA."
    except Exception as e:
        # Gérer toutes les autres erreurs (réseau, etc.)
        logger.error(f"Une erreur inattendue est survenue: {e}")
        return "Désolé, une erreur inattendue est survenue."
    ```
