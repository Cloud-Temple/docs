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

## Aller plus loin : Exemples de Tool Calling et Vision

Cette section fournit des exemples de scripts Python simples et autonomes pour illustrer des fonctionnalités spécifiques de l'API LLMaaS. Chaque exemple est conçu pour être exécuté directement, avec des instructions claires pour la configuration et l'utilisation.

---

## 💡 Exemples de Code Autonomes

Cette section fournit des exemples de scripts Python simples et autonomes pour illustrer des fonctionnalités spécifiques de l'API LLMaaS. Chaque exemple est conçu pour être exécuté directement, avec des instructions claires pour la configuration et l'utilisation.

### 1. Exemple Simple de Tool Calling

Le "Tool Calling" (ou appel de fonction) permet à un modèle de langage de demander l'exécution d'une fonction que vous avez définie dans votre code. C'est une fonctionnalité puissante pour connecter les LLMs à des outils externes (API, bases de données, etc.).

Le flux est le suivant :
1.  L'utilisateur pose une question qui nécessite un outil (ex: "quel temps fait-il ?").
2.  Vous envoyez la question et la liste des outils disponibles à l'API.
3.  Le modèle, au lieu de répondre directement, renvoie une requête `tool_calls` demandant d'exécuter une fonction spécifique avec certains arguments.
4.  Votre code exécute la fonction demandée.
5.  Vous renvoyez le résultat de la fonction au modèle.
6.  Le modèle utilise ce résultat pour formuler une réponse finale à l'utilisateur.

**Structure des fichiers**

Pour cet exemple, créez un répertoire `simple_tool_calling` avec les fichiers suivants :

-   `test_tool_calling.py`: Le script principal.
-   `requirements.txt`: Les dépendances Python.
-   `.env.example`: Un modèle pour votre fichier de configuration.

**`requirements.txt`**
```txt
httpx
python-dotenv
```

**`.env.example`**
```env
# URL de base de l'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Votre clé API LLMaaS
API_KEY="votre_cle_api_ici"

# Optionnel: Modèle par défaut à utiliser pour le test
# Assurez-vous que ce modèle est compatible avec le "tool calling"
DEFAULT_MODEL="qwen3:30b-a3b"
```

**Code Source (`test_tool_calling.py`)**

```python
# -*- coding: utf-8 -*-
"""
Exemple simple de Tool Calling avec l'API LLMaaS.

Ce script montre comment définir un outil simple (une calculatrice),
l'envoyer à un modèle compatible, et interpréter la réponse du modèle
pour exécuter l'outil et renvoyer le résultat.
"""
import os
import json
import httpx
from dotenv import load_dotenv

# --- Configuration ---
# Charger les variables d'environnement depuis un fichier .env
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Utiliser un modèle connu pour bien gérer le tool calling
MODEL = os.getenv("DEFAULT_MODEL", "qwen3:30b-a3b")

# --- Définition de l'outil ---

def calculator(expression: str) -> str:
    """
    Évalue une expression mathématique simple.
    Exemple: "2 + 2 * 10"
    """
    try:
        # Sécurité : ne pas utiliser eval() directement en production sans validation stricte.
        # Pour cet exemple, nous limitons les caractères autorisés.
        allowed_chars = "0123456789+-*/(). "
        if not all(char in allowed_chars for char in expression):
            return "Erreur: L'expression contient des caractères non autorisés."
        # eval() est utilisé ici pour la simplicité de l'exemple.
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"Erreur de calcul: {str(e)}"

# Description de l'outil au format attendu par l'API
TOOLS_AVAILABLE = [
    {
        "type": "function",
        "function": {
            "name": "calculator",
            "description": "Évalue une expression mathématique. Par exemple, '2+2*10'.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "L'expression mathématique à évaluer."
                    }
                },
                "required": ["expression"],
            },
        },
    }
]

# Mapping entre le nom de l'outil et la fonction Python à appeler
TOOL_FUNCTIONS_MAP = {
    "calculator": calculator
}

# --- Logique principale ---

def run_chat_with_tool_calling():
    """
    Fonction principale qui exécute le scénario de test.
    """
    if not API_KEY:
        print("❌ Erreur: La variable d'environnement API_KEY n'est pas définie.")
        print("Veuillez créer un fichier .env ou l'exporter dans votre session.")
        return

    print(f"🤖 Modèle utilisé : {MODEL}")
    print("-" * 30)

    # 1. Premier appel à l'API avec la question de l'utilisateur
    # ---------------------------------------------------------
    print("➡️ Étape 1: Envoi de la requête initiale au LLM...")

    # L'historique des messages commence avec la question de l'utilisateur
    messages = [
        {"role": "user", "content": "Bonjour, peux-tu calculer 15 + (3 * 5) ?"}
    ]

    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS_AVAILABLE,
        "tool_choice": "auto",  # Le modèle décide s'il doit utiliser un outil
    }

    try:
        with httpx.Client() as client:
            response = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload,
                timeout=60,
            )
            response.raise_for_status()
            response_data = response.json()

    except httpx.HTTPStatusError as e:
        print(f"❌ Erreur API (HTTP Status) lors de l'étape 1: {e}")
        print(f"Réponse de l'API : {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ Erreur API (Request) lors de l'étape 1: {e}")
        return

    # Le message de l'assistant contient la demande d'appel d'outil
    assistant_message = response_data["choices"][0]["message"]
    messages.append(assistant_message)

    # 2. Vérification et exécution de l'appel d'outil
    # ------------------------------------------------
    print("\n✅ Le LLM a demandé d'utiliser un outil.")

    if "tool_calls" not in assistant_message:
        print("🤔 Le modèle n'a pas demandé d'utiliser un outil. Réponse directe :")
        print(assistant_message.get("content", "Pas de contenu."))
        return

    tool_call = assistant_message["tool_calls"][0]
    function_name = tool_call["function"]["name"]
    function_args_str = tool_call["function"]["arguments"]
    tool_call_id = tool_call["id"]

    print(f"   - Outil à appeler : {function_name}")
    print(f"   - Arguments       : {function_args_str}")

    if function_name in TOOL_FUNCTIONS_MAP:
        function_to_call = TOOL_FUNCTIONS_MAP[function_name]
        try:
            # Les arguments sont une chaîne JSON, il faut les parser
            function_args = json.loads(function_args_str)
            tool_result = function_to_call(**function_args)
            print(f"   - Résultat de l'outil : {tool_result}")
        except Exception as e:
            print(f"❌ Erreur lors de l'exécution de l'outil: {e}")
            tool_result = f"Erreur: {e}"
    else:
        print(f"❌ Outil inconnu : {function_name}")
        tool_result = f"Erreur: Outil '{function_name}' non trouvé."

    # 3. Second appel à l'API avec le résultat de l'outil
    # ----------------------------------------------------
    print("\n➡️ Étape 2: Envoi du résultat de l'outil au LLM...")

    # On ajoute le résultat de l'outil à l'historique des messages
    messages.append(
        {
            "role": "tool",
            "tool_call_id": tool_call_id,
            "content": tool_result
        }
    )

    # On refait un appel SANS les outils cette fois-ci pour obtenir la réponse finale
    payload_final = {
        "model": MODEL,
        "messages": messages,
    }

    try:
        with httpx.Client() as client:
            response_final = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload_final,
                timeout=60,
            )
            response_final.raise_for_status()
            final_data = response_final.json()

    except (httpx.HTTPStatusError, httpx.RequestError) as e:
        print(f"❌ Erreur API lors de l'étape 2: {e}")
        return

    final_answer = final_data["choices"][0]["message"]["content"]
    print("\n✅ Réponse finale du LLM :")
    print(f"💬 \"{final_answer}\"")


if __name__ == "__main__":
    run_chat_with_tool_calling()
```

**Utilisation**

1.  **Installez les dépendances :**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Configurez votre clé API :**
    Copiez `tests/llmaas/.env.example` en `tests/llmaas/.env` et remplacez `"votre_cle_api_ici"` par votre clé API LLMaaS.
3.  **Exécutez le script :**
    ```bash
    python tests/llmaas/test_tool_calling.py
    ```

### 2. Exemple Simple de Vision (Multimodal)

Les modèles multimodaux peuvent analyser à la fois du texte et des images. Cet exemple montre comment envoyer une image et une question au modèle pour obtenir une description de ce qu'il "voit".

**Structure des fichiers**

Créez un répertoire `simple_vision` avec les fichiers suivants :

-   `test_vision.py`: Le script principal.
-   `requirements.txt`: Les dépendances (incluant `Pillow` pour générer l'image).
-   `.env.example`: Le modèle de configuration.
-   `image_example.png`: L'image à analyser (le script la générera pour vous si elle manque).

**`requirements.txt`**
```txt
httpx
python-dotenv
Pillow
```

**`.env.example`**
```env
# URL de base de l'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Votre clé API LLMaaS
API_KEY="votre_cle_api_ici"

# Optionnel: Modèle par défaut à utiliser pour le test
# Assurez-vous que ce modèle est multimodal (vision)
DEFAULT_MODEL="granite3.2-vision:2b"
```

**Code Source (`test_vision.py`)**

```python
# -*- coding: utf-8 -*-
"""
Exemple simple d'utilisation de l'API Vision de LLMaaS.

Ce script montre comment envoyer une image locale avec une question
à un modèle de vision (multimodal) et afficher sa réponse.
"""
import os
import base64
import httpx
from dotenv import load_dotenv

# --- Configuration ---
# Charger les variables d'environnement depuis un fichier .env
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Utiliser un modèle de vision.
MODEL = os.getenv("DEFAULT_MODEL", "granite3.2-vision:2b")
IMAGE_PATH = "image_example.png" # L'image doit être dans le même répertoire

# --- Fonctions ---

def encode_image_to_base64(image_path: str) -> str:
    """
    Encode une image en base64 pour l'inclure dans la requête API.
    """
    try:
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
    except FileNotFoundError:
        print(f"❌ Erreur: Le fichier image '{image_path}' n'a pas été trouvé.")
        return ""
    except Exception as e:
        print(f"❌ Erreur lors de l'encodage de l'image: {e}")
        return ""

def generate_example_image():
    """
    Génère une image simple pour le test si elle n'existe pas.
    Nécessite la bibliothèque Pillow (PIL).
    """
    try:
        from PIL import Image, ImageDraw
        if not os.path.exists(IMAGE_PATH):
            print(f"🖼️  L'image '{IMAGE_PATH}' n'existe pas, génération en cours...")
            # Crée une image simple : un carré rouge sur fond blanc
            img = Image.new('RGB', (200, 200), color = 'white')
            draw = ImageDraw.Draw(img)
            draw.rectangle([50, 50, 150, 150], fill='red', outline='black')
            img.save(IMAGE_PATH)
            print("✅ Image d'exemple générée.")
    except ImportError:
        print("⚠️  Avertissement: La bibliothèque Pillow n'est pas installée.")
        print("   Veuillez installer 'Pillow' (`pip install Pillow`) pour générer l'image d'exemple,")
        print(f"   ou placez manuellement un fichier nommé '{IMAGE_PATH}' dans ce répertoire.")
    except Exception as e:
        print(f"❌ Erreur lors de la génération de l'image: {e}")


# --- Logique principale ---

def run_vision_test():
    """
    Fonction principale qui exécute le scénario de test de vision.
    """
    if not API_KEY:
        print("❌ Erreur: La variable d'environnement API_KEY n'est pas définie.")
        return

    # Générer l'image d'exemple si nécessaire
    generate_example_image()

    # Encoder l'image en base64
    base64_image = encode_image_to_base64(IMAGE_PATH)
    if not base64_image:
        return

    print(f"🤖 Modèle utilisé : {MODEL}")
    print(f"🖼️ Image envoyée : {IMAGE_PATH}")
    print("-" * 30)

    # Construction du payload au format multimodal
    payload = {
        "model": MODEL,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Que vois-tu sur cette image ? Décris la forme et la couleur principale."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/png;base64,{base64_image}"
                        }
                    }
                ]
            }
        ],
        "max_tokens": 500 # Limiter la longueur de la description
    }

    print("➡️ Envoi de la requête au LLM de vision...")
    try:
        with httpx.Client() as client:
            response = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload,
                timeout=120, # Les modèles de vision peuvent être plus longs
            )
            response.raise_for_status()
            response_data = response.json()

    except httpx.HTTPStatusError as e:
        print(f"❌ Erreur API (HTTP Status): {e}")
        print(f"Réponse de l'API : {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ Erreur API (Request): {e}")
        return

    final_answer = response_data["choices"][0]["message"]["content"]
    print("\n✅ Réponse du modèle :")
    print(f"💬 \"{final_answer}\"")


if __name__ == "__main__":
    run_vision_test()
```

**Utilisation**

1.  **Installez les dépendances :**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Configurez votre clé API :**
    Copiez `tests/llmaas/.env.example` en `tests/llmaas/.env` et remplacez `"votre_cle_api_ici"` par votre clé API LLMaaS.
3.  **Exécutez le script :**
    ```bash
    python tests/llmaas/test_vision.py
    ```
    Le script générera automatiquement une image `image_example.png` si elle n'existe pas.

---
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
