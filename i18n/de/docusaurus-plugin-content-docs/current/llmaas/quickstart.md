---
title: Leitfaden zum Start
sidebar_position: 3
---

# Schnellstartanleitung

Dieser Leitfaden ermöglicht es Ihnen, Ihre erste Anfrage an die LLMaaS-API in weniger als 5 Minuten zu stellen.

## Voraussetzungen

- Zugriff auf die Cloud Temple-Konsole
- Konto mit aktivierten LLMaaS-Berechtigungen

## Schritt 1: Eine API-Schlüssel generieren

1. Melden Sie sich bei der Cloud Temple Console an  
2. Gehen Sie zu den Einstellungen Ihres Kontos  
3. Generieren Sie einen neuen LLMaaS-API-Schlüssel  
4. Kopieren und speichern Sie den Schlüssel (er wird nur einmal angezeigt)

## Schritt 2: Verbindung testen

Stellen Sie sicher, dass Ihr Schlüssel funktioniert, indem Sie die verfügbaren Modelle auflisten:

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

## Schritt 4: Testen mit Python

Installieren Sie die Bibliothek requests und testen Sie mit Python-Code:

```bash
pip install requests
```

```python
import requests
import json

# Konfiguration
API_KEY = "IHR_API_SCHLÜSSEL"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

# Headers
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Anfrage
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {
            "role": "user",
            "content": "Erkläre mir die Photosynthese in 3 Sätzen."
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
    print(f"Fehler: {response.status_code}")
    print(response.text)
```

## Modellauswahl

Für Ihren ersten Test verwenden Sie eines dieser empfohlenen Modelle:

| Modell | Nutzung | Geschwindigkeit | Bewertung |
|--------|--------|---------|------|
| `granite3.3:8b` | Allgemein, ausgewogen | Schnell | Empfohlen für Anfänger |
| `qwen3:14b` | Komplexe Aufgaben | Mittlere | Sichtbarer "Denkmodus" |
| `gemma3:4b` | Schnelle Tests, Prototypentwicklung | Sehr schnell | Detaillierte Antworten |

Informieren Sie sich im [vollständigen Modellkatalog](./models), um weitere Optionen zu finden.

## Empfohlene Parameter

Verwenden Sie zunächst diese Parameter:

```json
{
  "temperature": 0.7,    // Moderate Kreativität
  "max_tokens": 200,     // Kurze Antworten
  "top_p": 1.0,         // Standardvielfalt
  "stream": false       // Vollständige Antwort in einem Zug
}
```

## Häufige Fehlerbehandlung

### Fehler 401 – Nicht autorisiert
```json
{"error": {"message": "Ungültiger API-Schlüssel", "type": "invalid_request_error"}}
```
**Lösung**: Überprüfen Sie Ihren API-Schlüssel in der Cloud Temple-Konsole.

### Fehler 400 - Modell nicht gefunden
```json
{"error": {"message": "Model not found", "type": "invalid_request_error"}}
```
**Lösung** : Verwenden Sie `/v1/models`, um die verfügbaren Modelle aufzulisten.

### Fehler 429 - Rate limit überschritten
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Lösung**: Warten Sie einige Sekunden und versuchen Sie es erneut.

## Monitoring der Nutzung

In der Cloud Temple-Konsole können Sie:
- Ihre Anfragen in Echtzeit ansehen
- Ihre Token-Verbrauchsanzeige aufrufen
- Kostenwarnungen einrichten
- Leistungen pro Modell analysieren

## Weiterführend: Beispiele für Tool Calling und Vision

Dieser Abschnitt bietet Beispiele für einfache und selbstständige Python-Skripte, um spezifische Funktionen der LLMaaS-API zu veranschaulichen. Jedes Beispiel ist so gestaltet, dass es direkt ausgeführt werden kann, mit klaren Anweisungen für die Konfiguration und Verwendung.

## 💡 Eigene Code-Beispiele

Diese Abschnitt bietet einfache und autonome Python-Skripte, um spezifische Funktionen der LLMaaS-API zu veranschaulichen. Jedes Beispiel ist darauf ausgelegt, direkt ausgeführt zu werden, mit klaren Anweisungen für die Konfiguration und Nutzung.

### 1. Einfaches Beispiel für Tool Calling

"Tool Calling" (oder Funktionsaufruf) ermöglicht es einem Sprachmodell, die Ausführung einer Funktion zu veranlassen, die Sie in Ihrem Code definiert haben. Dies ist eine leistungsstarke Funktion, um LLMs mit externen Tools (APIs, Datenbanken usw.) zu verbinden.

Der Ablauf ist wie folgt:
1.  Der Benutzer stellt eine Frage, die ein Tool erfordert (z. B. "Wie ist das Wetter?").
2.  Sie senden die Frage und die Liste der verfügbaren Tools an die API.
3.  Das Modell gibt anstelle einer direkten Antwort eine Anfrage `tool_calls` zurück, die die Ausführung einer bestimmten Funktion mit bestimmten Argumenten verlangt.
4.  Ihr Code führt die angeforderte Funktion aus.
5.  Sie senden das Ergebnis der Funktion zurück an das Modell.
6.  Das Modell verwendet dieses Ergebnis, um eine endgültige Antwort an den Benutzer zu formulieren.

**Dateistruktur**

Für dieses Beispiel erstellen Sie ein Verzeichnis `simple_tool_calling` mit den folgenden Dateien:

-   `test_tool_calling.py`: Der Hauptskript.
-   `requirements.txt`: Die Python-Abhängigkeiten.
-   `.env.example`: Ein Muster für Ihre Konfigurationsdatei.

**`requirements.txt`**
```txt
httpx
python-dotenv
```

**`.env.example`**
```env
```

# Basis-URL der LLMaaS-API
API_URL="https://api.ai.cloud-temple.com/v1"

# Ihre LLMaaS-API-Schlüssel
API_KEY="Ihre_API-Schlüssel_hier"

# Optional: Standardmodell zur Verwendung im Test

# Stellen Sie sicher, dass dieses Modell mit dem "tool calling" kompatibel ist
DEFAULT_MODEL="qwen3:30b-a3b"

**Code Source (`test_tool_calling.py`)**

```python

# -*- coding: utf-8 -*-
"""
Einfaches Beispiel für Tool Calling mit der LLMaaS-API.

Dieses Skript zeigt, wie man ein einfaches Werkzeug (einen Taschenrechner) definiert,
es an ein kompatibles Modell sendet und die Antwort des Modells interpretiert,
um das Werkzeug auszuführen und das Ergebnis zurückzugeben.
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

# Verwenden Sie ein bekanntes Modell, um das Tool-Calling gut zu verwalten
MODEL = os.getenv("DEFAULT_MODEL", "qwen3:30b-a3b")

# --- Werkzeugdefinition ---

def calculator(expression: str) -> str:
    """
    Bewertet einen einfachen mathematischen Ausdruck.
    Beispiel: "2 + 2 * 10"
    """
    try:
        # Sicherheit: eval() sollte in der Produktion nicht direkt ohne strenge Validierung verwendet werden.
        # Für dieses Beispiel beschränken wir die erlaubten Zeichen.
        allowed_chars = "0123456789+-*/(). "
        if not all(char in allowed_chars for char in expression):
            return "Fehler: Der Ausdruck enthält nicht erlaubte Zeichen."
        # eval() wird hier aus Gründen der Einfachheit verwendet.
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"Berechnungsfehler: {str(e)}"

# Beschreibung des Tools im vom API erwarteten Format
TOOLS_AVAILABLE = [
    {
        "type": "function",
        "function": {
            "name": "calculator",
            "description": "Bewertet einen mathematischen Ausdruck. Zum Beispiel, '2+2*10'.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Der zu bewertende mathematische Ausdruck."
                    }
                },
                "required": ["expression"],
            },
        },
    }
]

# Zuordnung zwischen dem Namen des Tools und der aufzurufenden Python-Funktion
TOOL_FUNCTIONS_MAP = {
    "calculator": calculator
}

# --- Hauptlogik ---

def run_chat_with_tool_calling():
    """
    Hauptfunktion, die den Testfall ausführt.
    """
    if not API_KEY:
        print("❌ Fehler: Die Umgebungsvariable API_KEY ist nicht definiert.")
        print("Bitte erstellen Sie eine Datei .env oder exportieren Sie sie in Ihrer Session.")
        return

    print(f"🤖 Modell verwendet: {MODEL}")
    print("-" * 30)

    # 1. Erster API-Aufruf mit der Benutzerfrage
    # ---------------------------------------------------------
    print("➡️ Schritt 1: Senden der Initialanfrage an das LLM...")

    # Der Nachrichtenverlauf beginnt mit der Frage des Benutzers
    messages = [
        {"role": "user", "content": "Hallo, kannst du 15 + (3 * 5) berechnen?"}
    ]

    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS_AVAILABLE,
        "tool_choice": "auto",  # Das Modell entscheidet, ob ein Werkzeug verwendet werden soll
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
        print(f"❌ API-Fehler (HTTP-Status) bei Schritt 1: {e}")
        print(f"API-Antwort: {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ API-Fehler (Request) bei Schritt 1: {e}")
        return

    # Die Nachricht des Assistenten enthält die Werkzeugaufrufanfrage
    assistant_message = response_data["choices"][0]["message"]
    messages.append(assistant_message)

    # 2. Überprüfung und Ausführung des Werkzeugaufrufs
    # ------------------------------------------------
    print("\n✅ Das LLM hat darum gebeten, ein Werkzeug zu verwenden.")

    if "tool_calls" not in assistant_message:
        print("🤔 Das Modell hat kein Werkzeug verwendet. Direkte Antwort:")
        print(assistant_message.get("content", "Kein Inhalt."))
        return

    tool_call = assistant_message["tool_calls"][0]
    function_name = tool_call["function"]["name"]
    function_args_str = tool_call["function"]["arguments"]
    tool_call_id = tool_call["id"]

    print(f"   - Zu aufrufendes Werkzeug : {function_name}")
    print(f"   - Argumente       : {function_args_str}")

    if function_name in TOOL_FUNCTIONS_MAP:
        function_to_call = TOOL_FUNCTIONS_MAP[function_name]
        try:
            # Die Argumente sind eine JSON-Zeichenkette, sie müssen analysiert werden
            function_args = json.loads(function_args_str)
            tool_result = function_to_call(**function_args)
            print(f"   - Ergebnis des Werkzeugs : {tool_result}")
        except Exception as e:
            print(f"❌ Fehler bei der Ausführung des Werkzeugs: {e}")
            tool_result = f"Fehler: {e}"
    else:
        print(f"❌ Unbekanntes Werkzeug : {function_name}")
        tool_result = f"Fehler: Werkzeug '{function_name}' nicht gefunden."

    # 3. Zweiter API-Aufruf mit dem Werkzeugergebnis
    # ----------------------------------------------------
    print("\n➡️ Schritt 2: Senden des Werkzeugergebnisses an das LLM...")

    # Das Werkzeugergebnis wird dem Nachrichtenverlauf hinzugefügt
    messages.append(
        {
            "role": "tool",
            "tool_call_id": tool_call_id,
            "content": tool_result
        }
    )

    # Ein weiterer Aufruf OHNE Werkzeuge wird durchgeführt, um die Endantwort zu erhalten
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
    except httpx.HTTPStatusError as e:
        print(f"❌ API-Fehler (HTTP-Status) bei Schritt 2: {e}")
        print(f"API-Antwort: {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ API-Fehler (Request) bei Schritt 2: {e}")
        return

    response_data_final = response_final.json()
    final_assistant_message = response_data_final["choices"][0]["message"]
    print("\n✅ Endantwort des LLM:")
    print(final_assistant_message.get("content", "Kein Inhalt."))

final_data = response_final.json()

    except (httpx.HTTPStatusError, httpx.RequestError) as e:
        print(f"❌ API-Fehler bei Schritt 2: {e}")
        return

    final_answer = final_data["choices"][0]["message"]["content"]
    print("\n✅ Endgültige Antwort des LLM:")
    print(f"💬 \"{final_answer}\"")


if __name__ == "__main__":
    run_chat_with_tool_calling()
```

**Verwendung**

1.  **Installieren Sie die Abhängigkeiten:**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Konfigurieren Sie Ihren API-Schlüssel:**
    Kopieren Sie `tests/llmaas/.env.example` in `tests/llmaas/.env` und ersetzen Sie `"Ihr_API-Schlüssel_hier"` durch Ihren LLMaaS-API-Schlüssel.
3.  **Führen Sie das Skript aus:**
    ```bash
    python tests/llmaas/test_tool_calling.py
    ```

### 2. Einfaches Beispiel der Multimodalen Vision

Multimodale Modelle können sowohl Text als auch Bilder analysieren. Dieses Beispiel zeigt, wie man einem Modell ein Bild und eine Frage sendet, um eine Beschreibung dessen zu erhalten, was es „sieht“.

**Dateistruktur**

Erstellen Sie ein Verzeichnis `simple_vision` mit den folgenden Dateien:

-   `test_vision.py`: Das Hauptskript.
-   `requirements.txt`: Die Abhängigkeiten (einschließlich `Pillow` zum Generieren des Bildes).
-   `.env.example`: Das Konfigurationsmodell.
-   `image_example.png`: Das Bild, das analysiert werden soll (das Skript generiert es für Sie, wenn es fehlt).

**`requirements.txt`**
```txt
httpx
python-dotenv
Pillow
```

**`.env.example`**
```env
```

# Basis-URL der API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Ihre API-Schlüssel LLMaaS
API_KEY="Ihr_API-Schlüssel_hier"

# Optional: Standardmodell für den Test

# Stellen Sie sicher, dass dieses Modell multimodal (Vision) ist
DEFAULT_MODEL="granite3.2-vision:2b"

**Quellcode (`test_vision.py`)**

```python

# -*- coding: utf-8 -*-
"""
Einfaches Beispiel zur Verwendung der Vision-API von LLMaaS.

Dieses Skript zeigt, wie man ein lokales Bild mit einer Frage an ein multimodales Vision-Modell sendet und die Antwort anzeigt.
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

# Bildmodell verwenden  
MODEL = os.getenv("DEFAULT_MODEL", "granite3.2-vision:2b")  
IMAGE_PATH = "image_example.png" # Das Bild muss im gleichen Verzeichnis sein

# --- Funktionen ---

def encode_image_to_base64(image_path: str) -> str:
    """
    Codiert ein Bild in Base64, um es in die API-Anfrage einzubinden.
    """
    try:
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
    except FileNotFoundError:
        print(f"❌ Fehler: Die Bilddatei '{image_path}' wurde nicht gefunden.")
        return ""
    except Exception as e:
        print(f"❌ Fehler beim Codieren des Bildes: {e}")
        return ""

def generate_example_image():
    """
    Erzeugt ein einfaches Bild zum Testen, falls es nicht existiert.
    Benötigt die Bibliothek Pillow (PIL).
    """
    try:
        from PIL import Image, ImageDraw
        if not os.path.exists(IMAGE_PATH):
            print(f"🖼️ Das Bild '{IMAGE_PATH}' existiert nicht, wird generiert...")
            # Erstellt ein einfaches Bild: ein rotes Quadrat auf weißem Hintergrund
            img = Image.new('RGB', (200, 200), color = 'white')
            draw = ImageDraw.Draw(img)
            draw.rectangle([50, 50, 150, 150], fill='red', outline='black')
            img.save(IMAGE_PATH)
            print("✅ Beispielbild generiert.")
    except ImportError:
        print("⚠️ Hinweis: Die Bibliothek Pillow ist nicht installiert.")
        print("   Bitte installieren Sie 'Pillow' (`pip install Pillow`), um das Beispielbild zu generieren,")
        print(f"   oder legen Sie manuell eine Datei namens '{IMAGE_PATH}' in dieses Verzeichnis.")
    except Exception as e:
        print(f"❌ Fehler bei der Erzeugung des Bildes: {e}")

# --- Hauptlogik ---

def run_vision_test():
    """
    Hauptfunktion, die den Vision-Test-Szenario ausführt.
    """
    if not API_KEY:
        print("❌ Fehler: Die Umgebungsvariable API_KEY ist nicht definiert.")
        return

    # Generieren Sie das Beispielbild, falls erforderlich
    generate_example_image()

    # Bild in Base64 codieren
    base64_image = encode_image_to_base64(IMAGE_PATH)
    if not base64_image:
        return

    print(f"🤖 Modell verwendet: {MODEL}")
    print(f"🖼️ Bild gesendet: {IMAGE_PATH}")
    print("-" * 30)

    # Erstellung des Payload im Multimodal-Format
    payload = {
        "model": MODEL,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Was siehst du auf diesem Bild? Beschreibe die Hauptform und die Hauptfarbe."
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
        "max_tokens": 500 # Die Länge der Beschreibung begrenzen
    }

    print("➡️ Senden der Anfrage an das Vision-LLM...")
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
        print(f"❌ API-Fehler (HTTP-Status): {e}")
        print(f"API-Antwort: {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ API-Fehler (Anfrage): {e}")
        return

    final_answer = response_data["choices"][0]["message"]["content"]
    print("\n✅ Antwort des Modells:")
    print(f"💬 \"{final_answer}\"")


if __name__ == "__main__":
    run_vision_test()
```

**Verwendung**

1.  **Installieren Sie die Abhängigkeiten:**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Konfigurieren Sie Ihre API-Schlüssel:**
    Kopieren Sie `tests/llmaas/.env.example` in `tests/llmaas/.env` und ersetzen Sie `"votre_cle_api_ici"` durch Ihren LLMaaS-API-Schlüssel.
3.  **Führen Sie das Skript aus:**
    ```bash
    python tests/llmaas/test_vision.py
    ```
    Das Skript generiert automatisch eine Bild datei `image_example.png`, wenn sie nicht existiert.

---

## Nächste Schritte

Nachdem Ihr erster Test erfolgreich war:

1. **Erkunden Sie die Modelle**: Testen Sie verschiedene Modelle gemäß Ihren Anforderungen
2. **Optimieren Sie die Prompts**: Verbessern Sie die Qualität der Antworten
3. **Integrieren Sie Ihre Anwendung**: Konsultieren Sie die [Dokumentation API](./api)
4. **Erweiterte Anwendungsfälle**: Siehe die [Tutorials](./tutorials)

## Support

Bei Problemen:
- Konsultieren Sie die [vollständige API-Dokumentation](./api)
- Überprüfen Sie den Dienststatus in der Console
- Kontaktieren Sie den Support über die Cloud Temple Console