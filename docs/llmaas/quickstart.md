---
title: Guide de Démarrage
sidebar_position: 3
---

# Guide de Démarrage Rapide

Ce guide vous permet de faire votre première requête à l'API LLMaaS en moins de 5 minutes.

## Prérequis

- Accès à la Console Cloud Temple
- Compte avec permissions LLMaaS activées

## Étape 1 : Générer une clé API

1. Connectez-vous à la Console Cloud Temple
2. Accédez aux paramètres de votre compte
3. Générez une nouvelle clé API LLMaaS
4. Copiez et sauvegardez la clé (elle ne sera affichée qu'une fois)

## Étape 2 : Tester la connexion

Vérifiez que votre clé fonctionne en listant les modèles disponibles :

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Vous devriez recevoir une liste JSON des modèles disponibles.

## Étape 3 : Première requête

Faites votre première génération de texte avec un modèle rapide :

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_CLE_API" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Écris un haiku sur la technologie."
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

## Étape 4 : Tester avec Python

Installez la bibliothèque requests et testez avec du code Python :

```bash
pip install requests
```

```python
import requests
import json

# Configuration
API_KEY = "VOTRE_CLE_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

# Headers
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Requête
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {
            "role": "user",
            "content": "Explique-moi la photosynthèse en 3 phrases."
        }
    ],
    "max_tokens": 150,
    "temperature": 0.7
}

response = requests.post(
    f"{BASE_URL}/chat/completions",
    headers=headers,
    json=payload
)

if response.status_code == 200:
    result = response.json()
    print(result["choices"][0]["message"]["content"])
else:
    print(f"Erreur: {response.status_code}")
    print(response.text)
```

## Choix du modèle

Pour votre premier test, utilisez un de ces modèles recommandés :

| Modèle | Usage | Vitesse | Note |
|--------|--------|---------|------|
| `granite3.3:8b` | Usage général, équilibré | Rapide | Recommandé pour débuter |
| `qwen3:14b` | Tâches complexes | Moyen | Mode "thinking" visible |
| `gemma3:4b` | Tests rapides, prototypage | Très rapide | Réponses détaillées |

Consultez le [catalogue complet des modèles](./models) pour plus d'options.

## Paramètres recommandés

Pour débuter, utilisez ces paramètres :

```json
{
  "temperature": 0.7,    // Créativité modérée
  "max_tokens": 200,     // Réponses concises
  "top_p": 1.0,         // Diversité standard
  "stream": false       // Réponse complète d'un coup
}
```

## Gestion des erreurs courantes

### Erreur 401 - Non autorisé
```json
{"error": {"message": "Invalid API key", "type": "invalid_request_error"}}
```
**Solution** : Vérifiez votre clé API dans la Console Cloud Temple.

### Erreur 400 - Modèle non trouvé
```json
{"error": {"message": "Model not found", "type": "invalid_request_error"}}
```
**Solution** : Utilisez `/v1/models` pour lister les modèles disponibles.

### Erreur 429 - Limite de débit
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Solution** : Attendez quelques secondes et réessayez.

## Monitoring de l'usage

Dans la Console Cloud Temple, vous pouvez :
- Voir vos requêtes en temps réel
- Consulter votre consommation de tokens
- Configurer des alertes de coût
- Analyser les performances par modèle

## Prochaines étapes

Une fois votre premier test réussi :

1. **Explorez les modèles** : Testez différents modèles selon vos besoins
2. **Optimisez les prompts** : Améliorez la qualité des réponses
3. **Intégrez dans votre application** : Consultez la [documentation API](./api)
4. **Cas d'usage avancés** : Voir les [tutoriels](./tutorials)

## Support

En cas de problème :
- Consultez la [documentation API complète](./api)
- Vérifiez le statut du service dans la Console
- Contactez le support via la Console Cloud Temple
