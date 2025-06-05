---
title: Schnellstart-Guide
sidebar_position: 3
---

# Schnellstart-Guide

Dieser Leitfaden ermöglicht es Ihnen, Ihre erste Anfrage an die LLMaaS-API in weniger als 5 Minuten zu stellen.

## Voraussetzungen

- Zugang zur Cloud Temple Console
- Konto mit aktivierten LLMaaS-Berechtigungen

## Schritt 1: API-Schlüssel generieren

1. Melden Sie sich bei der Cloud Temple Console an
2. Gehen Sie zu den Einstellungen Ihres Kontos
3. Generieren Sie einen neuen LLMaaS-API-Schlüssel
4. Kopieren und speichern Sie den Schlüssel (er wird nur einmal angezeigt)

## Schritt 2: Verbindung testen

Überprüfen Sie, ob Ihr Schlüssel funktioniert, indem Sie die verfügbaren Modelle auflisten:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer IHR_API_SCHLÜSSEL"
```

Sie sollten eine JSON-Liste der verfügbaren Modelle erhalten.

## Schritt 3: Erste Anfrage

Stellen Sie Ihre erste Textgenerierung mit einem schnellen Modell her:

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer IHR_API_SCHLÜSSEL" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Schreibe ein Haiku über Technologie."
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
API_KEY = "IHR_API_SCHLÜSSEL"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

# Header
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

| Modell | Verwendung | Geschwindigkeit | Bemerkung |
|--------|--------|---------|------|
| `granite3.3:8b` | Allgemeinverwendung, ausgewogen | Schnell | Empfohlen für Anfänger |
| `qwen3:14b` | Komplexe Aufgaben | Mittel | "Thinking"-Modus sichtbar |
| `gemma3:4b` | Schnelle Tests, Prototypen | Sehr schnell | Detaillierte Antworten |

Informieren Sie sich im [vollständigen Modellkatalog](./models) über weitere Optionen.

## Empfohlene Parameter

Für den Einstieg verwenden Sie diese Parameter:

```json
{
  "temperature": 0.7,    // Moderates Kreativitätsniveau
  "max_tokens": 200,     // Kompakte Antworten
  "top_p": 1.0,         // Standardvielfalt
  "stream": false       // Vollständige Antwort auf einmal
}
```

## Häufige Fehlerbehandlung

### Fehler 401 - Nicht autorisiert
```json
{"error": {"message": "Ungültiger API-Schlüssel", "type": "invalid_request_error"}}
```
**Lösung**: Überprüfen Sie Ihren API-Schlüssel in der Cloud Temple Console.

### Fehler 400 - Modell nicht gefunden
```json
{"error": {"message": "Modell nicht gefunden", "type": "invalid_request_error"}}
```
**Lösung**: Verwenden Sie `/v1/models`, um die verfügbaren Modelle aufzulisten.

### Fehler 429 - Begrenzung überschritten
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Lösung**: Warten Sie einige Sekunden und versuchen Sie es erneut.

## Nutzung überwachen

In der Cloud Temple Console können Sie:
- Ihre Anfragen in Echtzeit sehen
- Ihre Token-Verbrauchsanalyse einsehen
- Kostenbenachrichtigungen konfigurieren
- Modellleistungen analysieren

## Nächste Schritte

Nach erfolgreichem Test:

1. **Modelle erkunden**: Testen Sie verschiedene Modelle je nach Anforderung
2. **Prompt-Optimierung**: Verbessern Sie die Antwortqualität
3. **Integration in Ihre Anwendung**: Siehe [API-Dokumentation](./api)
4. **Erweiterte Anwendungsfälle**: Siehe [Tutorials](./tutorials)

## Support

Bei Problemen:
- Siehe [vollständige API-Dokumentation](./api)
- Prüfen Sie den Dienststatus in der Console
- Kontaktieren Sie den Support über die Cloud Temple Console