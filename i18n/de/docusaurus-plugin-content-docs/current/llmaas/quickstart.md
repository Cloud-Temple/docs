---
title: Einstiegsguide
sidebar_position: 3
---

# Schnellstartanleitung

Dieser Leitfaden ermöglicht es Ihnen, Ihre erste Anfrage an die LLMaaS-API in weniger als 5 Minuten zu stellen.

## Voraussetzungen

- Zugriff auf die Cloud Temple Konsole
- Konto mit aktivierten LLMaaS-Berechtigungen

## Schritt 1: API-Schlüssel generieren

1. Melden Sie sich bei der Cloud Temple-Konsole an
2. Öffnen Sie **LLMaaS** > **API-Schlüssel**
3. Klicken Sie auf **API-Schlüssel erstellen**
4. Kopieren und speichern Sie den Schlüssel (er wird nur einmal angezeigt)

## Schritt 2: Verbindung testen

Überprüfen Sie, ob Ihr Schlüssel funktioniert, indem Sie die verfügbaren Modelle auflisten:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Sie sollten eine JSON-Liste der verfügbaren Modelle erhalten.

## Schritt 3: Erste Anfrage

Führen Sie Ihre erste Textgenerierung mit einem schnellen Modell durch:

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

## Schritt 4: Testen mit Python

Installieren Sie die requests-Bibliothek und testen Sie mit Python-Code:

```bash
pip install requests
```

```python
import requests
import json

# Konfiguration
API_KEY = "VOTRE_CLE_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

# Header
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Anfrage
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

## Modellwahl

Die Beispiele verwenden `gpt-oss:120b`. Bevor Sie sie ausführen, stellen Sie sicher, dass diese Kennung in `/v1/models` aufgeführt ist, und konsultieren Sie den [cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle).

Wählen Sie für Ihre Anwendung basierend auf den erforderlichen Fähigkeiten, der Qualität auf Ihren Daten und dem Support-Zeithorizont. Der [guide du catalogue](./models.md) erläutert diese Kriterien im Detail. Die Vision-Beispiele erfordern ein multimodales Modell, und die Beispiele für Tool-Aufrufe erfordern ein Modell, das *tool calling* unterstützt.

Die Reasoning-Einstellungen hängen vom Modell ab. Gehen Sie nicht davon aus, dass eine Textanweisung diesen Modus für alle Modelle derselben Familie aktiviert oder deaktiviert.

## Empfohlene Parameter

Zum Einstieg verwenden Sie diese Parameter:

```json
{
  "temperature": 0.7,
  "max_tokens": 200,
  "top_p": 1.0,
  "stream": false
}
```

Diese Parameter stellen die Temperatur auf 0,7 ein, begrenzen die Ausgabe auf 200 Tokens, belassen `top_p` bei 1 und deaktivieren das Streaming, um die vollständige Antwort zu erhalten.

## Behandlung häufiger Fehler

### Fehler 401 - Nicht autorisiert
```json
{"error": {"message": "Invalid API key", "type": "invalid_request_error"}}
```
**Lösung** : Überprüfen Sie Ihren API-Schlüssel in der Cloud Temple-Konsole.

### Fehler 400 - Modell nicht gefunden
```json
{"error": {"message": "Model not found", "type": "invalid_request_error"}}
```
**Lösung** : Verwenden Sie `/v1/models`, um die verfügbaren Modelle aufzulisten.

### Fehler 429 - Rate-Limit
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Lösung** : Warten Sie einige Sekunden und versuchen Sie es erneut.

## Nutzungsüberwachung

In der Cloud Temple-Konsole können Sie:
- Ihre Anfragen in Echtzeit anzeigen
- Ihren Token-Verbrauch einsehen
- Kostenwarnungen konfigurieren
- Die Leistung nach Modell analysieren

## Weiterführende Themen: Beispiele für Tool Calling und Vision

Dieser Abschnitt bietet einfache und eigenständige Python-Skripte, um spezifische Funktionen der LLMaaS-API zu veranschaulichen. Jedes Beispiel ist so konzipiert, dass es direkt ausgeführt werden kann, und enthält klare Anweisungen zur Einrichtung und Nutzung.

---

## 💡 Eigenständige Codebeispiele

Dieser Abschnitt bietet einfache und eigenständige Python-Skripte, um spezifische Funktionen der LLMaaS-API zu veranschaulichen. Jedes Beispiel ist so konzipiert, dass es direkt ausgeführt werden kann, und enthält klare Anweisungen zur Konfiguration und Nutzung.

### 1. Einfaches Beispiel für Tool Calling

Das "Tool Calling" (oder Funktionsaufruf) ermöglicht es einem Sprachmodell, die Ausführung einer Funktion anzufordern, die Sie in Ihrem Code definiert haben. Dies ist eine leistungsstarke Funktion, um LLMs mit externen Tools (APIs, Datenbanken usw.) zu verbinden.

Der Ablauf ist wie folgt:
1.  Der Benutzer stellt eine Frage, die ein Tool erfordert (z. B. "Wie ist das Wetter?").
2.  Sie senden die Frage und die Liste der verfügbaren Tools an die API.
3.  Das Modell gibt anstatt einer direkten Antwort eine `tool_calls`-Anfrage zurück, die die Ausführung einer bestimmten Funktion mit bestimmten Argumenten anfordert.
4.  Ihr Code führt die angeforderte Funktion aus.
5.  Sie übermitteln das Ergebnis der Funktion an das Modell.
6.  Das Modell verwendet dieses Ergebnis, um eine endgültige Antwort an den Benutzer zu formulieren.

**Dateistruktur**

Erstellen Sie für dieses Beispiel ein Verzeichnis `simple_tool_calling` mit den folgenden Dateien:

-   `test_tool_calling.py`: Das Hauptskript.
-   `requirements.txt`: Die Python-Abhängigkeiten.
-   `.env`: Die Konfigurationsdatei, die mit Ihrem API-Schlüssel ausgefüllt werden muss.

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

**Quellcode (`test_tool_calling.py`)**

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
MODEL = os.getenv("DEFAULT_MODEL", "gpt-oss:120b")

# --- Définition de l'outil ---

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

# Description de l'outil au format attendu par l'API
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
        {"role": "user", "content": "Bonjour, peux-tu calculer 15 + 20 ?"}
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

**Verwendung**

1.  **Öffnen Sie aus dem übergeordneten Ordner das erstellte Verzeichnis und installieren Sie die Abhängigkeiten:**
    ```bash
    cd simple_tool_calling
    python -m pip install -r requirements.txt
    ```
2.  **Konfigurieren Sie Ihren API-Schlüssel:**
    Ersetzen Sie in der oben gezeigten `.env`-Datei `"votre_cle_api_ici"` durch Ihren LLMaaS-API-Schlüssel. Stellen Sie außerdem sicher, dass `DEFAULT_MODEL` auf ein verfügbares Modell mit den erforderlichen Fähigkeiten verweist.
3.  **Führen Sie das Skript aus diesem Verzeichnis aus:**
    ```bash
    python test_tool_calling.py
    ```

### 2. Einfaches Beispiel für Vision (Multimodal)

Multimodale Modelle können sowohl Text als auch Bilder analysieren. Dieses Beispiel zeigt, wie Sie ein Bild und eine Frage an das Modell senden, um eine Beschreibung dessen zu erhalten, was es "sieht".

**Dateistruktur**

Erstellen Sie ein Verzeichnis `simple_vision` mit den folgenden Dateien:

-   `test_vision.py`: Das Hauptskript.
-   `requirements.txt`: Die Abhängigkeiten (einschließlich `Pillow` zur Bildgenerierung).
-   `.env`: Die Konfigurationsdatei, die mit Ihrem API-Schlüssel ausgefüllt werden muss.
-   `image_example.png`: Das zu analysierende Bild (das Skript generiert es automatisch, falls es fehlt).

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

**Quellcode (`test_vision.py`)**

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

# --- Konfiguration ---
# Umgebungsvariablen aus einer .env-Datei laden
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Ein Vision-Modell verwenden.
MODEL = os.getenv("DEFAULT_MODEL", "granite3.2-vision:2b")
IMAGE_PATH = "image_example.png" # Das Bild muss sich im selben Verzeichnis befinden

# --- Funktionen ---

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
            # Erstellt ein einfaches Bild: ein rotes Quadrat auf weißem Hintergrund
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


# --- Hauptlogik ---

def run_vision_test():
    """
    Fonction principale qui exécute le scénario de test de vision.
    """
    if not API_KEY:
        print("❌ Erreur: La variable d'environnement API_KEY n'est pas définie.")
        return

    # Beispielbild generieren, falls erforderlich
    generate_example_image()

    # Bild in Base64 kodieren
    base64_image = encode_image_to_base64(IMAGE_PATH)
    if not base64_image:
        return

    print(f"🤖 Modèle utilisé : {MODEL}")
    print(f"🖼️ Image envoyée : {IMAGE_PATH}")
    print("-" * 30)

    # Aufbau der Payload im multimodalen Format
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
        "max_tokens": 500 # Länge der Beschreibung begrenzen
    }

    print("➡️ Envoi de la requête au LLM de vision...")
    try:
        with httpx.Client() as client:
            response = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload,
                timeout=120, # Vision-Modelle können länger dauern
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

**Verwendung**

1.  **Öffnen Sie aus dem übergeordneten Ordner das erstellte Verzeichnis und installieren Sie die Abhängigkeiten:**
    ```bash
    cd simple_vision
    python -m pip install -r requirements.txt
    ```
2.  **Konfigurieren Sie Ihren API-Schlüssel:**
    Ersetzen Sie in der oben gezeigten `.env`-Datei `"votre_cle_api_ici"` durch Ihren LLMaaS-API-Schlüssel. Stellen Sie außerdem sicher, dass `DEFAULT_MODEL` auf ein verfügbares Modell mit den erforderlichen Fähigkeiten verweist.
3.  **Führen Sie das Skript aus diesem Verzeichnis aus:**
    ```bash
    python test_vision.py
    ```
    Das Skript generiert automatisch ein Bild `image_example.png`, falls es nicht vorhanden ist.

---

## Nächste Schritte

Sobald Ihr erster Test erfolgreich abgeschlossen ist:

1. **Erkunden Sie die Modelle** : Testen Sie verschiedene Modelle entsprechend Ihren Anforderungen
2. **Optimieren Sie die Prompts** : Verbessern Sie die Qualität der Antworten
3. **Integrieren Sie es in Ihre Anwendung** : Konsultieren Sie die [API-Dokumentation](./api)
4. **Erweiterte Anwendungsfälle** : Siehe [Tutorials](./tutorials)

## Support

Bei Problemen :
- Lesen Sie die [vollständige API-Dokumentation](./api)
- Überprüfen Sie den Dienststatus in der Konsole
- Kontaktieren Sie den Support über die Cloud Temple Konsole