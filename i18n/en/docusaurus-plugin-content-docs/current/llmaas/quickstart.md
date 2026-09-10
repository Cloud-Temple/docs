---
title: Getting Started Guide
sidebar_position: 3
---

# Quick Start Guide

This guide allows you to make your first request to the LLMaaS API in less than 5 minutes.

## Prerequisites

- Access to the Cloud Temple Console
- Account with LLMaaS permissions enabled

## Step 1: Generate an API Key

1. Log in to the Cloud Temple Console
2. Open **LLMaaS** > **API Keys**
3. Click **Create API Key**
4. Copy and save the key (it will only be displayed once)

## Step 2: Test the connection

Verify that your key works by listing the available models:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

You should receive a JSON list of the available models.

## Step 3: First Request

Generate your first text with a fast model:

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_CLE_API" \
  -d '{
    "model": "gpt-oss:120b",
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

## Step 4: Test with Python

Install the requests library and test with Python code:

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

# Request
payload = {
    "model": "gpt-oss:120b",
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

## Model Selection

The examples use `gpt-oss:120b`. Before running them, verify that this identifier is listed in `/v1/models` and check its [lifecycle](https://llmaas.status.cloud-temple.app/lifecycle).

For your application, choose based on the required capabilities, performance on your data, and the support timeline. The [catalog guide](./models.md) details these criteria. Vision examples require a multimodal model, and tool calling examples require a model that supports *tool calling*.

Reasoning settings depend on the model. Do not assume that a text instruction enables or disables this mode for all models in the same family.

## Recommended Parameters

To get started, use these parameters:

```json
{
  "temperature": 0.7,
  "max_tokens": 200,
  "top_p": 1.0,
  "stream": false
}
```

These parameters set the temperature to 0.7, limit the output to 200 tokens, keep `top_p` at 1, and disable streaming to receive the complete response.

## Common Error Handling

### Error 401 - Unauthorized
```json
{"error": {"message": "Invalid API key", "type": "invalid_request_error"}}
```
**Solution** : Check your API key in the Cloud Temple Console.

### Error 400 - Model not found
```json
{"error": {"message": "Model not found", "type": "invalid_request_error"}}
```
**Solution** : Use `/v1/models` to list available models.

### Error 429 - Rate Limit
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Solution** : Wait a few seconds and try again.

## Usage Monitoring

In the Cloud Temple Console, you can:
- View your requests in real-time
- Check your token usage
- Configure cost alerts
- Analyze performance by model

## Going Further: Tool Calling and Vision Examples

This section provides simple, standalone Python script examples to illustrate specific features of the LLMaaS API. Each example is designed to be run directly, with clear instructions for configuration and usage.

---

## 💡 Standalone Code Examples

This section provides simple, standalone Python script examples to illustrate specific features of the LLMaaS API. Each example is designed to be run directly, with clear instructions for setup and usage.

### 1. Simple Tool Calling Example

The "Tool Calling" (or function calling) feature allows a language model to request the execution of a function that you have defined in your code. It is a powerful feature for connecting LLMs to external tools (APIs, databases, etc.).

The flow is as follows:
1.  The user asks a question that requires a tool (e.g., "what's the weather like?").
2.  You send the question and the list of available tools to the API.
3.  Instead of answering directly, the model returns a `tool_calls` request asking to execute a specific function with certain arguments.
4.  Your code executes the requested function.
5.  You return the function's result to the model.
6.  The model uses this result to formulate a final response to the user.

**File Structure**

For this example, create a `simple_tool_calling` directory with the following files:

-   `test_tool_calling.py`: The main script.
-   `requirements.txt`: Python dependencies.
-   `.env`: The configuration file to be completed with your API key.

**`requirements.txt`**
```txt
httpx
python-dotenv
```

**`.env`**
```env
# URL de base de l'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Votre clé API LLMaaS
API_KEY="votre_cle_api_ici"

# Optionnel: Modèle par défaut à utiliser pour le test
# Assurez-vous que ce modèle est compatible avec le "tool calling"
DEFAULT_MODEL="gpt-oss:120b"
```

**Source Code (`test_tool_calling.py`)**

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
# Load environment variables from a .env file
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Use a known model to properly handle tool calling
MODEL = os.getenv("DEFAULT_MODEL", "gpt-oss:120b")

# --- Tool Definition ---

def calculator(expression: str) -> str:
    """Calcule une opération entre deux nombres, par exemple : 15 + 20."""
    import math
    import operator

    operations = {
        "+": operator.add,
        "-": operator.sub,
        "*": operator.mul,
        "/": operator.truediv,
    }
    try:
        if len(expression) > 100:
            raise ValueError("Entrée trop longue.")
        left, symbol, right = expression.split()
        if symbol not in operations:
            raise ValueError("Opérateur autorisé : +, -, * ou /.")
        left, right = float(left), float(right)
        if not (math.isfinite(left) and math.isfinite(right)):
            raise ValueError("Les nombres doivent être finis.")
        result = operations[symbol](left, right)
        if not math.isfinite(result):
            raise ValueError("Résultat hors limites.")
        return str(result)
    except (ValueError, OverflowError, ZeroDivisionError) as e:
        return f"Erreur de calcul: {e}"

# Tool description in the format expected by the API
TOOLS_AVAILABLE = [
    {
        "type": "function",
        "function": {
            "name": "calculator",
            "description": "Effectue une seule opération entre deux nombres. Opérateurs autorisés : +, -, *, /. Exemple : 15 + 20.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Deux nombres et un opérateur séparés par des espaces, par exemple : 15 + 20."
                    }
                },
                "required": ["expression"],
            },
        },
    }
]

# Mapping between the tool name and the Python function to call
TOOL_FUNCTIONS_MAP = {
    "calculator": calculator
}

# --- Main Logic ---

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

    # 1. First API call with the user's question
    # ---------------------------------------------------------
    print("➡️ Étape 1: Envoi de la requête initiale au LLM...")

    # The message history starts with the user's question
    messages = [
        {"role": "user", "content": "Bonjour, peux-tu calculer 15 + 20 ?"}
    ]

    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS_AVAILABLE,
        "tool_choice": "auto",  # The model decides whether to use a tool
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

    # The assistant's message contains the tool call request
    assistant_message = response_data["choices"][0]["message"]
    messages.append(assistant_message)

    # 2. Verification and execution of the tool call
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
            # The arguments are a JSON string, they need to be parsed
            function_args = json.loads(function_args_str)
            tool_result = function_to_call(**function_args)
            print(f"   - Résultat de l'outil : {tool_result}")
        except Exception as e:
            print(f"❌ Erreur lors de l'exécution de l'outil: {e}")
            tool_result = f"Erreur: {e}"
    else:
        print(f"❌ Outil inconnu : {function_name}")
        tool_result = f"Erreur: Outil '{function_name}' non trouvé."

    # 3. Second API call with the tool result
    # ----------------------------------------------------
    print("\n➡️ Étape 2: Envoi du résultat de l'outil au LLM...")

    # Add the tool result to the message history
    messages.append(
        {
            "role": "tool",
            "tool_call_id": tool_call_id,
            "content": tool_result
        }
    )

    # Make another call WITHOUT tools this time to get the final response
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

**Usage**

1.  **From the parent folder, open the created directory and install the dependencies:**
    ```bash
    cd simple_tool_calling
    python -m pip install -r requirements.txt
    ```
2.  **Configure your API key:**
    In the `.env` file shown above, replace `"votre_cle_api_ici"` with your LLMaaS API key. Also ensure that `DEFAULT_MODEL` points to an available model with the required capabilities.
3.  **From this same directory, run the script:**
    ```bash
    python test_tool_calling.py
    ```

### 2. Simple Vision Example (Multimodal)

Multimodal models can analyze both text and images. This example shows how to send an image and a question to the model to get a description of what it "sees".

**File Structure**

Create a `simple_vision` directory with the following files:

-   `test_vision.py`: The main script.
-   `requirements.txt`: Dependencies (including `Pillow` to generate the image).
-   `.env`: The configuration file to be filled with your API key.
-   `image_example.png`: The image to analyze (the script will generate it for you if it's missing).

**`requirements.txt`**
```txt
httpx
python-dotenv
Pillow
```

**`.env`**
```env
# URL de base de l'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Votre clé API LLMaaS
API_KEY="votre_cle_api_ici"

# Optionnel: Modèle par défaut à utiliser pour le test
# Assurez-vous que ce modèle est multimodal (vision)
DEFAULT_MODEL="granite3.2-vision:2b"
```

**Source Code (`test_vision.py`)**

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
# Load environment variables from a .env file
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Use a vision model.
MODEL = os.getenv("DEFAULT_MODEL", "granite3.2-vision:2b")
IMAGE_PATH = "image_example.png" # The image must be in the same directory

# --- Functions ---

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
            # Creates a simple image: a red square on a white background
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


# --- Main Logic ---

def run_vision_test():
    """
    Fonction principale qui exécute le scénario de test de vision.
    """
    if not API_KEY:
        print("❌ Erreur: La variable d'environnement API_KEY n'est pas définie.")
        return

    # Generate the example image if necessary
    generate_example_image()

    # Encode the image in base64
    base64_image = encode_image_to_base64(IMAGE_PATH)
    if not base64_image:
        return

    print(f"🤖 Modèle utilisé : {MODEL}")
    print(f"🖼️ Image envoyée : {IMAGE_PATH}")
    print("-" * 30)

    # Construct the payload in multimodal format
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
        "max_tokens": 500 # Limit the length of the description
    }

    print("➡️ Envoi de la requête au LLM de vision...")
    try:
        with httpx.Client() as client:
            response = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload,
                timeout=120, # Vision models can take longer
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

**Usage**

1.  **From the parent folder, open the created directory and install the dependencies:**
    ```bash
    cd simple_vision
    python -m pip install -r requirements.txt
    ```
2.  **Configure your API key:**
    In the `.env` file shown above, replace `"votre_cle_api_ici"` with your LLMaaS API key. Also ensure that `DEFAULT_MODEL` points to an available model with the required capabilities.
3.  **From this same directory, run the script:**
    ```bash
    python test_vision.py
    ```
    The script will automatically generate an `image_example.png` image if it does not exist.

---

## Next Steps

Once your first test is successful:

1. **Explore models** : Test different models according to your needs
2. **Optimize prompts** : Improve response quality
3. **Integrate into your application** : Refer to the [API documentation](./api)
4. **Advanced use cases** : See the [tutorials](./tutorials)

## Support

In case of an issue:
- Consult the [complete API documentation](./api)
- Check the service status in the Console
- Contact support via the Cloud Temple Console