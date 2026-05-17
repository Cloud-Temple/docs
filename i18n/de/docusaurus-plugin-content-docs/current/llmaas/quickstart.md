---
title: Schnellstartanleitung
sidebar_position: 3
---

# Schnellstartanleitung

Mit dieser Anleitung stellen Sie Ihre erste Anfrage an die LLMaaS-API in weniger als 5 Minuten.

## Voraussetzungen

- Zugriff auf die Cloud Temple-Konsole
- Konto mit aktivierten LLMaaS-Berechtigungen

## Schritt 1: API-Schlüssel generieren

1. Melden Sie sich in der Cloud Temple-Konsole an
2. Rufen Sie die Einstellungen Ihres Kontos auf
3. Generieren Sie einen neuen LLMaaS-API-Schlüssel
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

## Schritt 4: Mit Python testen

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

## Modellauswahl

Verwenden Sie für Ihren ersten Test eines der folgenden empfohlenen Modelle:

| Modell | Verwendung | Geschwindigkeit | Hinweis |
|--------|--------|---------|------|
| `gpt-oss:120b` | Allgemeinzweck, ausgewogen | Mittel | **LTS** — für den Produktiveinsatz empfohlen |
| `qwen3-2507-think:4b` | Komplexes Reasoning | Schnell | **LTS** — kompakt mit tiefem Reasoning |
| `qwen3.5:9b` | Chat und Analyse | Schnell | Guter Kompromiss zwischen Größe und Qualität |

Weitere Optionen finden Sie im [vollständigen Modellkatalog](./models). Bevorzugen Sie für Ihre Produktivanwendungen Modelle mit der Kennzeichnung **LTS**.

:::tip Tipp für Qwen-Modelle mit Reasoning
Einige Modelle der **Qwen**-Familie (wie `qwen3-2507-think:4b`, `qwen3.5:9b` oder `qwen3.6:27b`) verfügen über einen erweiterten Reasoning-Modus. Sie können die Aktivierung erzwingen, indem Sie `/think` am Anfang Ihres Prompts hinzufügen, oder sie deaktivieren, um eine direktere und schnellere Antwort mit `/nothink` zu erhalten.
:::

## Empfohlene Parameter

Für den Einstieg verwenden Sie diese Parameter:

```json
{
  "temperature": 0.7,    // Mäßige Kreativität
  "max_tokens": 200,     // Kurze Antworten
  "top_p": 1.0,         // Standarddiversität
  "stream": false       // Vollständige Antwort auf einmal
}
```

## Häufige Fehlerbehandlung

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

### Fehler 429 - Rate Limit
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Lösung** : Warten Sie einige Sekunden und versuchen Sie es erneut.

## Nutzungsüberwachung

In der Cloud Temple-Konsole können Sie:
- Ihre Anfragen in Echtzeit einsehen
- Ihren Token-Verbrauch prüfen
- Kostenwarnungen konfigurieren
- Die Leistung nach Modell analysieren

## Vertiefung: Beispiele für Tool Calling und Vision

Dieser Abschnitt enthält einfache, eigenständige Python-Skriptbeispiele, um spezifische Funktionen der LLMaaS-API zu veranschaulichen. Jedes Beispiel ist direkt ausführbar und enthält klare Anweisungen zur Konfiguration und Verwendung.

---

## 💡 Eigenständige Code-Beispiele

Dieser Abschnitt enthält einfache und eigenständige Python-Skriptbeispiele, um spezifische Funktionen der LLMaaS-API zu veranschaulichen. Jedes Beispiel ist so konzipiert, dass es direkt ausgeführt werden kann, mit klaren Anweisungen zur Konfiguration und Verwendung.

### 1. Einfaches Beispiel für Tool Calling

Das "Tool Calling" (oder Funktionsaufruf) ermöglicht es einem Sprachmodell, die Ausführung einer Funktion anzufordern, die Sie in Ihrem Code definiert haben. Dies ist eine leistungsstarke Funktion, um LLMs mit externen Tools (APIs, Datenbanken usw.) zu verbinden.

Der Ablauf ist wie folgt:
1.  Der Benutzer stellt eine Frage, die ein Tool erfordert (z. B.: "Wie ist das Wetter?").
2.  Sie senden die Frage und die Liste der verfügbaren Tools an die API.
3.  Das Modell gibt anstelle einer direkten Antwort eine `tool_calls`-Anfrage zurück, die die Ausführung einer bestimmten Funktion mit bestimmten Argumenten anfordert.
4.  Ihr Code führt die angeforderte Funktion aus.
5.  Sie senden das Ergebnis der Funktion an das Modell zurück.
6.  Das Modell verwendet dieses Ergebnis, um eine endgültige Antwort an den Benutzer zu formulieren.

**Dateistruktur**

Für dieses Beispiel erstellen Sie ein Verzeichnis `simple_tool_calling` mit den folgenden Dateien:

-   `test_tool_calling.py`: Das Hauptskript.
-   `requirements.txt`: Die Python-Abhängigkeiten.
-   `.env`: Eine Vorlage für Ihre Konfigurationsdatei.

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

# --- Konfiguration ---
# Umgebungsvariablen aus einer .env-Datei laden
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Utiliser un modèle connu pour bien gérer le tool calling
MODEL = os.getenv("DEFAULT_MODEL", "gpt-oss:120b")

# --- Definition des Tools ---

def calculator(expression: str) -> str:
    """
    Évalue une expression mathématique simple.
    Exemple: "2 + 2 * 10"
    """
    try:
        # Sicherheit: eval() nicht direkt in der Produktion ohne strenge Validierung verwenden.
        # Für dieses Beispiel beschränken wir die zulässigen Zeichen.
        allowed_chars = "0123456789+-*/(). "
        if not all(char in allowed_chars for char in expression):
            return "Erreur: L'expression contient des caractères non autorisés."
        # eval() wird hier zur Vereinfachung des Beispiels verwendet.
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"Erreur de calcul: {str(e)}"

# Tool-Beschreibung im von der API erwarteten Format
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

# Mapping zwischen dem Tool-Namen und der aufzurufenden Python-Funktion
TOOL_FUNCTIONS_MAP = {
    "calculator": calculator
}

# --- Hauptlogik ---

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

    # 1. Erster API-Aufruf mit der Benutzerfrage
    # ---------------------------------------------------------
    print("➡️ Étape 1: Envoi de la requête initiale au LLM...")

    # Der Nachrichtenverlauf beginnt mit der Benutzerfrage
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

    # 2. Überprüfung und Ausführung des Tool-Aufrufs
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

    # 3. Zweiter API-Aufruf mit dem Tool-Ergebnis
    # ----------------------------------------------------
    print("\n➡️ Étape 2: Envoi du résultat de l'outil au LLM...")

    # Das Tool-Ergebnis wird dem Nachrichtenverlauf hinzugefügt
    messages.append(
        {
            "role": "tool",
            "tool_call_id": tool_call_id,
            "content": tool_result
        }
    )

    # Ein weiterer Aufruf OHNE Tools dieses Mal, um die endgültige Antwort zu erhalten
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

1.  **Abhängigkeiten installieren:**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **API-Schlüssel konfigurieren:**
    Kopieren Sie `tests/llmaas/.env.example` nach `tests/llmaas/.env` und ersetzen Sie `"votre_cle_api_ici"` durch Ihren LLMaaS-API-Schlüssel.
3.  **Skript ausführen:**
    ```bash
    python tests/llmaas/test_tool_calling.py
    ```

### 2. Einfaches Beispiel für Vision (Multimodal)

Multimodale Modelle können sowohl Text als auch Bilder analysieren. Dieses Beispiel zeigt, wie Sie ein Bild und eine Frage an das Modell senden, um eine Beschreibung dessen zu erhalten, was es „sieht“.

**Dateistruktur**

Erstellen Sie ein Verzeichnis `simple_vision` mit den folgenden Dateien :

-   `test_vision.py`: Das Hauptskript.
-   `requirements.txt`: Die Abhängigkeiten (einschließlich `Pillow` zur Generierung des Bildes).
-   `.env.example`: Die Konfigurationsvorlage.
-   `image_example.png`: Das zu analysierende Bild (das Skript generiert es für Sie, falls es fehlt).

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

    # Beispielbild bei Bedarf generieren
    generate_example_image()

    # Bild in Base64 kodieren
    base64_image = encode_image_to_base64(IMAGE_PATH)
    if not base64_image:
        return

    print(f"🤖 Modèle utilisé : {MODEL}")
    print(f"🖼️ Image envoyée : {IMAGE_PATH}")
    print("-" * 30)

    # Payload im multimodalen Format erstellen
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

1.  **Abhängigkeiten installieren :**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **API-Schlüssel konfigurieren :**
    Kopieren Sie `tests/llmaas/.env.example` nach `tests/llmaas/.env` und ersetzen Sie `"votre_cle_api_ici"` durch Ihren LLMaaS-API-Schlüssel.
3.  **Skript ausführen :**
    ```bash
    python tests/llmaas/test_vision.py
    ```
    Das Skript generiert automatisch ein Bild `image_example.png`, falls es nicht existiert.

---

## Nächste Schritte

Nachdem Ihr erster Test erfolgreich war:

1. **Modelle erkunden** : Testen Sie verschiedene Modelle entsprechend Ihren Anforderungen
2. **Prompts optimieren** : Verbessern Sie die Antwortqualität
3. **In Ihre Anwendung integrieren** : Lesen Sie die [API-Dokumentation](./api)
4. **Erweiterte Anwendungsfälle** : Weitere Informationen finden Sie in den [Anleitungen](./tutorials)

## Support

Bei Problemen:
- Lesen Sie die [vollständige API-Dokumentation](./api)
- Überprüfen Sie den Dienststatus in der Konsole
- Kontaktieren Sie den Support über die Cloud Temple-Konsole