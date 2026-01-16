---
title: Konzepte
sidebar_position: 3
---

# Konzepte und Architektur von LLMaaS

## Überblick

Der Dienst **LLMaaS** (Large Language Models as a Service) von Cloud Temple bietet einen sicheren und souveränen Zugang zu den fortschrittlichsten Modellen der künstlichen Intelligenz, mit der **SecNumCloud-Zertifizierung** der ANSSI.

## 🏗️ Technische Architektur

### Cloud Temple-Infrastruktur

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Technische Architektur von LLMaaS Cloud Temple" />

### Hauptkomponenten

#### 1. **API Gateway LLMaaS**
- **OpenAI-kompatibel** : Nahtlose Integration in bestehende Ökosysteme
- **Rate Limiting** : Verwaltung von Quoten je Abonnementstier
- **Load Balancing** : Intelligente Verteilung auf 12 GPU-Server
- **Monitoring** : Echtzeit-Metriken und Alarmierung

#### 2. **Authentifizierungsdienst**
- **Sichere API-Token**: Automatische Rotation
- **Zugriffskontrolle**: Granulare Berechtigungen pro Modell
- **Audit-Trails**: Vollständige Rückverfolgbarkeit der Zugriffe

## 🤖 Modelle und Token

### Modellkatalog

*Vollständiger Katalog: [Liste der Modelle](./models)*

### Token-Verwaltung

#### **Token-Typen**
- **Eingabe-Token**: Ihr Prompt und der Kontext
- **Ausgabe-Token**: Vom Modell generierte Antwort
- **System-Token**: Metadaten und Anweisungen

#### **Kostenberechnung**
```
Gesamtkosten = (Eingabe-Token × 0,9€/M) + (Ausgabe-Token × 4€/M) + (Reasoning-Ausgabe-Token × 21€/M)
```

#### **Optimierung**
- **Kontextfenster**: Wiederverwenden Sie Gespräche, um Kosten zu sparen
- **Passende Modelle**: Wählen Sie die Größe entsprechend der Komplexität
- **Maximale Tokens**: Begrenzen Sie die Länge der Antworten

### Tokenisierung

```python
# Beispiel zur Schätzung von Tokens
def estimate_tokens(text: str) -> int:
    """Approximative Schätzung: 1 Token ≈ 4 Zeichen"""
    return len(text) // 4

prompt = "Erklären Sie die Photosynthese"
response_max = 200  # gewünschte maximale Anzahl an Tokens

estimated_input = estimate_tokens(prompt)  # ~6 Tokens
total_cost = (estimated_input * 0.9 + response_max * 4) / 1_000_000
print(f"Geschätzter Kostenbetrag: {total_cost:.6f}€")
```

## 🔒 Sicherheit und Compliance

### SecNumCloud-Qualifizierung

Der LLMaaS-Dienst wird auf einer technischen Infrastruktur gehostet, die die **SecNumCloud 3.2-Qualifizierung** der ANSSI besitzt, was Folgendes garantiert:

#### **Datenschutz**
- **End-zu-End-Verschlüsselung**: TLS 1.3 für alle Kommunikationen
- **Sichere Speicherung**: Daten im Ruhezustand verschlüsselt (AES-256)
- **Isolierung**: Dedizierte Umgebungen pro Mandant

#### **Digitale Souveränität**
- **Hosting in Frankreich**: Zertifizierte Cloud Temple-Rechenzentren
- **Französisches Recht**: Native DSGVO-Konformität
- **Keine Exposition**: Keine Datentransfers in ausländische Clouds

#### **Audit und Rückverfolgbarkeit**
- **Vollständige Protokolle**: Alle Interaktionen werden verfolgt
- **Aufbewahrung**: Speicherung gemäß gesetzlichen Richtlinien
- **Compliance**: Audit-Berichte verfügbar

### Sicherheitskontrollen

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Sicherheitskontrollen LLMaaS" />

### Prompt-Sicherheit

Die Prompt-Analyse ist eine **native und integrierte** Sicherheitsfunktion der LLMaaS-Plattform. Sie ist standardmäßig aktiviert und zielt darauf ab, Versuche von "Jailbreaking" oder Injektion bösartiger Prompts zu erkennen und zu verhindern, bevor sie das Modell überhaupt erreichen. Dieser Schutz basiert auf einem mehrschichtigen Ansatz.

:::tip Support kontaktieren zur Deaktivierung
Es ist möglich, diese Sicherheitsanalyse für sehr spezifische Anwendungsfälle zu deaktivieren, obwohl dies nicht empfohlen wird. Bei Fragen dazu oder zur Beantragung der Deaktivierung wenden Sie sich bitte an den Cloud Temple-Support.
:::

#### 1. Strukturelle Analyse (`check_structure`)
- **Überprüfung auf fehlerhaftes JSON**: Das System prüft, ob der Prompt mit einem `{` beginnt und versucht, ihn als JSON zu parsen. Wenn der Parsevorgang erfolgreich ist und der JSON verdächtige Schlüsselwörter enthält (z. B. "system", "bypass"), oder wenn der Parsevorgang unerwartet fehlschlägt, kann dies auf eine Injektionsversuch hinweisen.
- **Unicode-Normalisierung**: Der Prompt wird mittels `unicodedata.normalize('NFKC', prompt)` normalisiert. Wenn sich der ursprüngliche Prompt von seiner normalisierten Version unterscheidet, kann dies auf die Verwendung von täuschenden Unicode-Zeichen (Homoglyphen) hindeuten, um Filter zu umgehen. Beispielsweise "аdmin" (kyrillisch) anstelle von "admin" (lateinisch).

#### 2. Erkennung verdächtiger Muster (`check_patterns`)
- Das System verwendet reguläre Ausdrücke (`regex`), um bekannte Angriffsmuster bei Prompt-Attacken zu erkennen, und zwar in mehreren Sprachen (Französisch, Englisch, Chinesisch, Japanisch).
- **Beispiele für erkannte Muster**:
    - **Systembefehle**: Schlüsselwörter wie „ignore the instructions“, „ignore instructions“, „忽略指令“, „指示を無視“.
    - **HTML-Injektion**: Versteckte oder schädliche HTML-Tags, beispielsweise `<div hidden>`, `<hidden div>`.
    - **Markdown-Injektion**: Schädliche Markdown-Links, beispielsweise `[text](javascript:...)`, `[text](data:...)`.
    - **Wiederholte Sequenzen**: Übermäßige Wiederholung von Wörtern oder Sätzen wie „forget forget forget“, „oublie oublie oublie“.
    - **Spezielle/Mischzeichen**: Verwendung ungewöhnlicher Unicode-Zeichen oder das Mischen von Schriftsystemen, um Befehle zu verschleiern (z. B. „s\u0443stème“).

#### 3. Verhaltensanalyse (`check_behavior`)
- Der Load Balancer unterhält einen Verlauf der jüngsten Prompts.
- **Fragmentierungserkennung**: Er kombiniert kürzliche Prompts, um zu prüfen, ob ein Angriff über mehrere Anfragen hinweg fragmentiert ist. Wenn beispielsweise in einem Prompt "ignore" und im nächsten "instructions" gesendet wird, kann das System dies zusammen erkennen.
- **Wiederholungserkennung**: Er identifiziert, ob derselbe Prompt übermäßig oft wiederholt wird. Der aktuelle Schwellenwert für die Wiederholungserkennung liegt bei 30 aufeinanderfolgenden identischen Prompts.

Dieser mehrschichtige Ansatz ermöglicht die Erkennung einer breiten Palette von Prompt-Angriffen, von den einfachsten bis zu den raffiniertesten, indem statische Inhaltsanalyse mit dynamischer Verhaltensanalyse kombiniert wird.

## 📈 Leistung und Skalierbarkeit

### Echtzeit-Überwachung

Zugriff über **Cloud Temple Konsole**:
- Nutzungsmetriken pro Modell
- Latenz- und Durchsatzdiagramme
- Alarme bei Leistungsgrenzen
- Anfragehistorie

## 🌐 Integration und Ökosystem

### OpenAI-Kompatibilität

Der LLMaaS-Service ist **kompatibel** mit der OpenAI-API:

```python
# Transparente Migration
from openai import OpenAI

# Vorher (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# After (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="your-cloud-temple-token",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Identischer Code!
response = client_ct.chat.completions.create(
    model="granite3.3:8b",  # Cloud-Temple-Modell
    messages=[{"role": "user", "content": "Hallo"}]
)
```

### Unterstütztes Ökosystem

#### **KI-Frameworks**
- ✅ **LangChain** : Native Integration
- ✅ **Haystack** : Dokumenten-Pipelines
- ✅ **Semantic Kernel** : Microsoft-Orchestrierung
- ✅ **AutoGen** : Konversationelle Agenten

#### **Entwicklungstools**
- ✅ **Jupyter** : Interaktive Notebooks
- ✅ **Streamlit** : Schnelle Webanwendungen
- ✅ **Gradio** : Benutzeroberflächen für KI
- ✅ **FastAPI** : Backend-APIs

#### **No-Code-Plattformen**
- ✅ **Zapier** : Automatisierungen
- ✅ **Make** : Visuelle Integrationen
- ✅ **Bubble** : Webanwendungen

## 🔄 Lebenszyklus von Modellen

### Modell-Updates

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="LLMaaS Modell-Lebenszyklus" />

### Versionierungsrichtlinie

- **Stabile Modelle**: Feste Versionen, verfügbar für 6 Monate
- **Experimentelle Modelle**: Beta-Versionen für Early Adopters
- **Deprecation**: 3 Monate Vorankündigung vor Entfernung
- **Migration**: Professionelle Dienstleistungen verfügbar, um Ihre Übergänge zu unterstützen

### Vorhersehbarer Lebenszyklus

Die folgende Tabelle zeigt den vorhersehbaren Lebenszyklus unserer Modelle. Das Ökosystem der generativen KI entwickelt sich sehr schnell, was zu scheinbar kurzen Lebenszyklen führen kann. Unser Ziel ist es, Ihnen Zugang zu den leistungsstärksten Modellen derzeit zu gewähren.

Dennoch verpflichten wir uns, die Modelle, die am häufigsten von unseren Kunden genutzt werden, über einen längeren Zeitraum zu erhalten. Für kritische Anwendungsfälle, die eine langfristige Stabilität erfordern, sind **erweiterte Support-Phasen** möglich. Zögern Sie nicht, den **Support zu kontaktieren**, um Ihre spezifischen Anforderungen zu besprechen.

Dieser Plan wird als Richtwert bereitgestellt und wird **zu Beginn jedes Quartals überprüft**.

- **DMP (Datum der Markteinführung)**: Das Datum, ab dem das Modell in der Produktion verfügbar ist.
- **DSP (Datum des Support-Endes)**: Das vorhersehbare Datum, ab dem das Modell nicht mehr gewartet wird. Ein Vorlaufzeitraum von 3 Monaten wird eingehalten, bevor das Modell endgültig entfernt wird.

| Modell                  | Herausgeber               | Phase      | DMP        | DSP        |
| :---------------------- | :------------------------ | :--------- | :--------- | :--------- |
| deepcoder:14b           | Agentica x Together AI    | Produktion | 13/06/2025 | 30/12/2025 |
| cogito:32b              | Deep Cogito               | Produktion | 13/06/2025 | 30/06/2026 |
| cogito:3b               | Deep Cogito               | Produktion | 13/06/2025 | 30/12/2025 |
| cogito:8b               | Deep Cogito               | Produktion | 13/06/2025 | 30/12/2025 |
| deepseek-r1:14b         | DeepSeek AI               | Produktion | 13/06/2025 | 31/12/2025 |
| deepseek-r1:32b         | DeepSeek AI               | Produktion | 13/06/2025 | 31/12/2025 |
| deepseek-ocr            | Qwen Team                 | Produktion | 22/11/2025 | 31/12/2026 |
| gemma3:12b              | Google                    | Produktion | 13/06/2025 | 31/12/2026 |
| gemma3:1b               | Google                    | Produktion | 13/06/2025 | 31/12/2025 |
| gemma3:27b              | Google                    | Produktion | 13/06/2025 | 30/03/2026 |
| gemma3:4b               | Google                    | Produktion | 13/06/2025 | 31/12/2025 |
| gpt-oss:120b            | Qwen Team                 | Produktion | 11/11/2025 | 30/06/2026 |
| gpt-oss:20b             | Qwen Team                 | Produktion | 08/08/2025 | 30/03/2026 |
| embeddinggemma:300m     | Google                    | Produktion | 10/09/2025 | 31/12/2026 |
| granite-embedding:278m  | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| qwen3-embedding:0.6b    | Qwen Team                 | Produktion | 18/10/2025 | 31/12/2026 |
| granite3-guardian:2b    | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| granite3-guardian:8b    | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| granite3.2-vision:2b    | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| granite3.3:2b           | IBM                       | Produktion | 13/06/2025 | 31/12/2025 |
| granite3.3:8b           | IBM                       | Produktion | 13/06/2025 | 31/12/2025 |
| granite4-small-h:32b    | IBM                       | Produktion | 03/10/2025 | 30/09/2026 |
| granite4-tiny-h:7b      | IBM                       | Produktion | 03/10/2025 | 30/09/2026 |
| llama3.3:70b            | Meta                      | Produktion | 13/06/2025 | 31/12/2026 |
| magistral:24b           | Mistral AI                | Produktion | 13/06/2025 | 30/03/2026 |
| mistral-small3.1:24b    | Mistral AI                | Produktion | 13/06/2025 | 31/12/2025 |
| mistral-small3.2:24b    | Mistral AI                | Produktion | 23/06/2025 | 30/06/2026 |
| devstral:24b            | Mistral AI & All Hands AI | Produktion | 13/06/2025 | 30/03/2026 |
| qwen2.5vl:32b           | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen2.5vl:3b            | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen2.5vl:72b           | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen2.5vl:7b            | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen3:0.6b              | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen3:1.7b              | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen3:14b               | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen3:30b-a3b           | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen3-2507:30b-a3b      | Qwen Team                 | Produktion | 30/08/2025 | 30/03/2026 |
| qwen3-2507-think:4b     | Qwen Team                 | Produktion | 31/08/2025 | 30/03/2026 |
| qwen3-2507:4b           | Qwen Team                 | Produktion | 31/08/2025 | 30/03/2026 |
| qwen3:4b                | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen3:8b                | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen3-coder:30b         | Qwen Team                 | Produktion | 02/08/2025 | 30/03/2026 |
| qwen3-2507:235b         | Qwen Team                 | Produktion | 02/08/2025 | 30/03/2026 |
| qwen3:32b               | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwq:32b                 | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen3-next:80b          | Qwen Team                 | Produktion | 04/11/2025 | 30/03/2026 |

### Veraltete Modelle

Die Welt der LLMs entwickelt sich sehr schnell. Um unseren Kunden Zugang zu den leistungsstärksten Technologien zu gewährleisten, werden Modelle, die nicht mehr den aktuellen Standards entsprechen oder nicht mehr genutzt werden, regelmäßig als veraltet markiert. Die unten aufgeführten Modelle sind auf der öffentlichen Plattform nicht mehr verfügbar. Sie können jedoch auf Anfrage für spezifische Projekte reaktiviert werden.

| Modell                   | Anbieter              | Status   | Datum der Einstellung |
| :----------------------- | :-------------------- | :------- | :-------------------- |
| cogito:14b               | Deep Cogito           | Veraltet | 17/10/2025            |
| deepseek-r1:671b         | DeepSeek AI           | Veraltet | 17/10/2025            |
| deepseek-r1:70b          | DeepSeek AI           | Veraltet | 17/10/2025            |
| foundation-sec:8b        | Foundation AI — Cisco | Veraltet | 17/10/2025            |
| granite3.1-moe:3b        | IBM                   | Veraltet | 17/10/2025            |
| llama3.1:8b              | Meta                  | Veraltet | 17/10/2025            |
| phi4-reasoning:14b       | Microsoft             | Veraltet | 17/10/2025            |
| lucie-instruct:7b        | OpenLLM-France        | Veraltet | 17/10/2025            |
| qwen2.5:0.5b             | Qwen Team             | Veraltet | 17/10/2025            |
| qwen2.5:1.5b             | Qwen Team             | Veraltet | 17/10/2025            |
| qwen2.5:14b              | Qwen Team             | Veraltet | 17/10/2025            |
| qwen2.5:32b              | Qwen Team             | Veraltet | 17/10/2025            |
| qwen2.5:3b               | Qwen Team             | Veraltet | 17/10/2025            |
| qwen3:235b               |                       | Veraltet | 22/11/2025            |
| qwen3-2507-think:30b-a3b |                       | Veraltet | 14/11/2025            |
| gemma3:12b               |                       | Veraltet | 21/11/2025            |

## 💡 Best Practices

Um das Beste aus der LLMaaS-API herauszuholen, ist es wichtig, Strategien zur Optimierung von Kosten, Leistung und Sicherheit zu übernehmen.

### Kostenoptimierung

Die Kostenkontrolle basiert auf einer intelligenten Nutzung von Tokens und Modellen.

1.  **Modellauswahl**: Verwenden Sie kein übermächtiges Modell für einfache Aufgaben. Ein größeres Modell ist leistungsfähiger, aber auch langsamer und verbraucht deutlich mehr Energie, was sich direkt auf die Kosten auswirkt. Passen Sie die Modellgröße an die Komplexität Ihrer Anforderung an, um ein optimales Gleichgewicht zu erreichen.

    Beispiel: Für die Verarbeitung einer Million Tokens:
    - **`Gemma 3 1B`** verbraucht **0,15 kWh**.
    - **`Llama 3.3 70B`** verbraucht **11,75 kWh**, also **78-mal mehr**.

    ```python
    # Für eine Sentiment-Analyse reicht ein kompaktes Modell aus und ist wirtschaftlich.
    if task == "sentiment_analysis":
        model = "granite3.3:2b"
    # Für eine komplexe juristische Analyse ist ein größeres Modell erforderlich.
    elif task == "legal_analysis":
        model = "deepseek-r1:70b"
    ```

2.  **Context-Management**: Der Gesprächsverlauf (`messages`) wird bei jedem Aufruf zurückgesendet und verbraucht Eingabetokens. Bei langen Gesprächen sollten Strategien wie Zusammenfassung oder Fenstern (Windowing) in Betracht gezogen werden, um nur relevante Informationen zu speichern.
    ```python
    # Bei langen Gesprächen kann man die ersten Austausche zusammenfassen.
    messages = [
        {"role": "system", "content": "Sie sind ein KI-Assistent."},
        {"role": "user", "content": "Zusammenfassung der ersten 10 Austausche..."},
        {"role": "assistant", "content": "Ok, ich habe den Kontext."},
        {"role": "user", "content": "Hier ist meine neue Frage."}
    ]
    ```

3.  **Beschränkung der Ausgabetokens**: Verwenden Sie stets den Parameter `max_tokens`, um zu lange und kostspielige Antworten zu vermeiden. Legen Sie eine angemessene Obergrenze basierend auf Ihren Erwartungen fest.
    ```python
    # Maximal 100 Wörter im Zusammenfassung erfordern.
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[{"role": "user", "content": "Fassen Sie dieses Dokument zusammen..."}],
        max_tokens=150,  # Puffer für ca. 100 Wörter
    )
    ```

### Performance

Die Reaktionsfähigkeit Ihrer Anwendung hängt davon ab, wie Sie API-Aufrufe verwalten.

1.  **Asynchrone Anfragen**: Um mehrere Anfragen zu verarbeiten, ohne auf das Ende jeder einzelnen zu warten, verwenden Sie asynchrone Aufrufe. Dies ist besonders nützlich für Backend-Anwendungen, die einen großen Volumen an gleichzeitigen Anfragen verarbeiten müssen.
    ```python
    import asyncio
    from openai import AsyncOpenAI

    client = AsyncOpenAI(api_key="...", base_url="...")

    async def process_prompt(prompt: str):
        # Verarbeitet eine einzelne Anfrage asynchron
        response = await client.chat.completions.create(model="granite3.3:8b", messages=[{"role": "user", "content": prompt}])
        return response.choices[0].message.content

    async def batch_requests(prompts: list):
        # Startet mehrere Aufgaben parallel und wartet auf deren Abschluss
        tasks = [process_prompt(p) for p in prompts]
        return await asyncio.gather(*tasks)
    ```

2.  **Streaming für die Benutzererfahrung (UX)**: Für Benutzeroberflächen (Chatbots, Assistenten) ist Streaming unerlässlich. Es ermöglicht die schrittweise Anzeige der Modellantwort Buchstabe für Buchstabe, was den Eindruck einer sofortigen Reaktionsfähigkeit vermittelt, anstatt auf die vollständige Antwort warten zu müssen.
    ```python
    # Zeigt die Antwort in Echtzeit in einer Benutzeroberfläche an
    response_stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[{"role": "user", "content": "Erzähl mir eine Geschichte."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Zeigt den Textabschnitt in der UI an
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Sicherheit

Die Sicherheit Ihrer Anwendung ist von entscheidender Bedeutung, besonders wenn Sie Benutzereingaben verarbeiten.

1.  **Validierung und Bereinigung von Eingaben (Sanitization)**: Vertrauen Sie niemals auf Benutzereingaben. Bereinigen Sie diese, bevor Sie sie an die API senden, um potenziell schädlichen Code oder Anweisungen zur "Prompt-Injektion" zu entfernen. Begrenzen Sie außerdem die Länge, um Missbrauch zu verhindern.
    ```python
    def sanitize_input(user_input: str) -> str:
        # Einfaches Beispiel: Entfernen von Code-Formatierungen und Begrenzung der Länge.
        # Für erweiterte Sanitization können robustere Bibliotheken verwendet werden.
        cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
        return cleaned[:2000]  # Begrenzt die Länge auf 2000 Zeichen
    ```

2.  **Robuste Fehlerbehandlung**: Umgeben Sie alle API-Aufrufe immer mit `try...except`-Blöcken, um Netzwerkfehler, API-Fehler (z. B. 429 Rate Limit, 500 Internal Server Error) zu behandeln und eine degradierte, aber funktionale Benutzererfahrung zu gewährleisten.
    ```python
    from openai import APIError, APITimeoutError

    try:
        response = client.chat.completions.create(...)
    except APITimeoutError:
        # Behandlung des Falls, dass die Anfrage zu lange dauert
        return "Der Dienst benötigt länger als erwartet, bitte versuchen Sie es erneut."
    except APIError as e:
        # Behandlung spezifischer API-Fehler
        logger.error(f"API-Fehler LLMaaS: {e.status_code} - {e.message}")
        return "Entschuldigung, es ist ein Fehler mit dem KI-Service aufgetreten."
    except Exception as e:
        # Behandlung aller anderen Fehler (Netzwerk usw.)
        logger.error(f"Ein unerwarteter Fehler ist aufgetreten: {e}")
        return "Entschuldigung, ein unerwarteter Fehler ist aufgetreten."
