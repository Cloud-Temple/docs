---
title: Konzepte
sidebar_position: 3
---

# Konzepte und Architektur LLMaaS

## Übersicht

Der **LLMaaS**-Dienst (Large Language Models als Service) von Cloud Temple bietet sicheren und souveränen Zugang zu den fortschrittlichsten KI-Modellen mit der **SecNumCloud-Zertifizierung** der ANSSI.

## 🏗️ Technische Architektur

### Cloud Temple-Infrastruktur

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Technische Architektur von LLMaaS Cloud Temple" />

### Hauptkomponenten

#### 1. **API Gateway LLMaaS**
- **Kompatibel mit OpenAI** : Transparente Integration in bestehende Ökosysteme
- **Rate Limiting** : Quotenverwaltung pro Abrechnungstier
- **Load Balancing** : Intelligente Verteilung auf 12 GPU-Maschinen
- **Monitoring** : Echtzeit-Metriken und Alarmierung

#### 2. **Authentifizierungsdienst**
- **Sichere API-Tokens** : Automatische Rotation
- **Zugriffssteuerung** : Granulare Berechtigungen pro Modell
- **Audit-Protokolle** : Vollständige Nachverfolgbarkeit der Zugriffe

## 🤖 Modelle und Tokens

### Katalog der Modelle

*Vollständiger Katalog : [Liste der Modelle](./models)*

### Token-Management

#### **Typen von Tokens**
- **Eingabetokens** : Ihr Prompt und Kontext
- **Ausgabetokens** : Antwort, die vom Modell generiert wird
- **Systemtokens** : Metadaten und Anweisungen

#### **Kostenberechnung**
```
Gesamtkosten = (Tokens Eingang × 0,9€/M) + (Tokens Ausgang × 4€/M) +  (Tokens Ausgang Berechnung × 21€/M)
```

#### **Optimierung**
- **Kontextfenster** : Wiederverwenden Sie Gespräche, um zu sparen
- **Passende Modelle** : Wählen Sie die Größe entsprechend der Komplexität aus
- **Max. Tokens** : Begrenzen Sie die Länge der Antworten

### Tokenisierung

```python

# Beispiel zur Token-Schätzung
def estimate_tokens(text: str) -> int:
    """Approximative Schätzung: 1 Token ≈ 4 Zeichen"""
    return len(text) // 4

prompt = "Erklären Sie die Photosynthese"
response_max = 200  # gewünschte maximale Tokens

geschätzte_eingabe = estimate_tokens(prompt)  # ~6 Tokens
gesamtkosten = (geschätzte_eingabe * 0.9 + response_max * 4) / 1_000_000
print(f"Schätzkosten: {gesamtkosten:.6f}€")
```

## 🔒 Sicherheit und Konformität

### Qualifikation SecNumCloud

Die LLMaaS-Dienstleistung wird auf einer technischen Infrastruktur berechnet, die über die **Qualifikation SecNumCloud 3.2** der ANSSI verfügt, die garantiert:

#### **DatenSchutz**
- **End-to-End-Verschlüsselung** : TLS 1.3 für alle Kommunikationen
- **Sichere Speicherung** : Daten, die im Ruhezustand verschlüsselt sind (AES-256)
- **Isolation** : Dedizierte Umgebungen pro Mandant

#### **Digitale Souveränität**
- **Hosting Frankreich** : zertifizierte Cloud Temple Datacenter
- **französisches Recht** : native RGPD-Konformität
- **Keine Exposition** : Kein Transfer zu ausländischen Clouds

#### **Audit und Nachverfolgbarkeit**
- **Vollständige Protokolle** : Alle Interaktionen werden protokolliert
- **Aufbewahrung** : Aufbewahrung gemäß gesetzlichen Richtlinien
- **Compliance** : Auditberichte verfügbar

### Sicherheitskontrollen

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Sicherheitskontrollen LLMaaS" />

### Prompt-Sicherheit

Die Prompt-Analyse ist eine **native und integrierte** Sicherheitsfunktion der LLMaaS-Plattform. Sie ist standardmäßig aktiviert und dient dazu, Versuche von "Jailbreak" oder schädlichen Prompt-Injektionen zu erkennen und zu verhindern, noch bevor sie das Modell erreichen. Diese Schutzmaßnahme basiert auf einer mehrschichtigen Herangehensweise.

:::tip Support kontaktieren, um die Deaktivierung zu beantragen
Es ist möglich, diese Sicherheitsanalyse für sehr spezifische Anwendungsfälle deaktivieren, obwohl dies nicht empfohlen wird. Bei Fragen dazu oder um eine Deaktivierung zu beantragen, wenden Sie sich bitte an den Cloud Temple-Support.
:::

#### 1. Strukturelle Analyse (`check_structure`)
- **Überprüfung auf fehlerhaften JSON**: Das System prüft, ob der Prompt mit einem `{` beginnt und versucht, ihn als JSON zu parsen. Wenn das Parsen erfolgreich ist und der JSON verdächtige Schlüsselwörter enthält (z. B. "system", "bypass"), oder wenn das Parsen unerwartet fehlschlägt, kann dies auf eine Injection-Attacke hinweisen.
- **Unicode-Normalisierung**: Der Prompt wird mit `unicodedata.normalize('NFKC', prompt)` normalisiert. Wenn sich der ursprüngliche Prompt von der normalisierten Version unterscheidet, kann dies auf die Verwendung von täuschenden Unicode-Zeichen (Homoglyphen) zur Umgehung der Filter hinweisen. Zum Beispiel "аdmin" (kyrillisch) anstelle von "admin" (lateinisch).

#### 2. Erkennung von verdächtigen Mustern (`check_patterns`)
- Das System verwendet reguläre Ausdrücke (`regex`), um bekannte Muster von Prompt-Angriffen zu identifizieren, und zwar in mehreren Sprachen (französisch, englisch, chinesisch, japanisch).
- **Beispiele für erkannte Muster**:
    - **Systembefehle** : Schlüsselwörter wie "ignoriere die Anweisungen", "ignore instructions", "忽略指令", "指示を無視".
    - **HTML-Injektion** : Versteckte oder schädliche HTML-Tags, z. B. `<div versteckt>`, `<hidden div>`.
    - **Markdown-Injektion** : Schädliche Markdown-Links, z. B. `[texte](javascript:...)`, `[text](data:...)`.
    - **Wiederholte Sequenzen** : Übermäßige Wiederholung von Wörtern oder Sätzen wie "vergiss vergiss vergiss", "forget forget forget".
    - **Spezialzeichen/Mischungen** : Verwendung ungewöhnlicher Unicode-Zeichen oder Mischungen von Skripten, um Befehle zu verbergen (z. B. "s\u0443stème").

#### 3. Verhaltensanalyse (`check_behavior`)
- Der Load Balancer hält ein Protokoll der kürzlichen Prompts.
- **Erkennung der Fragmentierung**: Er kombiniert kürzliche Prompts, um zu prüfen, ob ein Angriff über mehrere Anfragen fragmentiert ist. Zum Beispiel, wenn "ignore" in einem Prompt gesendet wird und "instructions" im nächsten, kann das System sie zusammen erkennen.
- **Erkennung der Wiederholung**: Er identifiziert, ob derselbe Prompt zu häufig wiederholt wird. Der aktuelle Schwellwert für die Wiederholungserkennung beträgt **30 aufeinanderfolgende identische Prompts**.

Diese mehrschichtige Herangehensweise ermöglicht die Erkennung einer breiten Palette von Prompt-Angriffen, von den einfachsten bis zu den komplexesten, indem sie die statische Inhaltsanalyse und die dynamische Verhaltensanalyse kombiniert.

## 📈 Leistung und Skalierbarkeit

### Echtzeit-Monitoring

Zugriff über **Console Cloud Temple**:
- Nutzungsmetriken pro Modell
- Latenz- und Durchsatzdiagramme
- Benachrichtigungen bei Performance-Schwellenwerten
- Anfragespeicher

## 🌐 Integration und Ökosystem

### OpenAI-Kompatibilität

Der Dienst LLMaaS ist **kompatibel** mit der OpenAI-API : 

```python

# Transparente Migration
from openai import OpenAI

# Vor (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# Nach (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="votre-token-cloud-temple",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Identischer Code!
response = client_ct.chat.completions.create(
    model="granite3.3:8b",  # Modèle Cloud Temple
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Unterstütztes Ökosystem

#### **KI-Frameworks**
- ✅ **LangChain** : Native Integration
- ✅ **Haystack** : Dokumenten-Pipeline
- ✅ **Semantic Kernel** : Microsoft-Orchestration
- ✅ **AutoGen** : Konversationelle Agenten

#### **Entwicklungs-Tools**
- ✅ **Jupyter** : Interaktive Notebooks
- ✅ **Streamlit** : Schnelle Webanwendungen
- ✅ **Gradio** : KI-Benutzeroberflächen
- ✅ **FastAPI** : Backend-APIs

#### **No-Code-Plattformen**
- ✅ **Zapier** : Automatisierungen
- ✅ **Make** : visuelle Integrationen
- ✅ **Bubble** : Webanwendungen

## 🔄 Lebenszyklus der Modelle

### Modell-Update

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="Lebenszyklus der Modelle LLMaaS" />

### Versionspolitik

- **Stabile Modelle** : Feste Versionen, die 6 Monate verfügbar sind
- **Experimentelle Modelle** : Beta-Versionen für Early Adopter
- **Ablösung** : 3 Monate Vorankündigung vor der Entfernung
- **Migration** : Professionelle Dienstleistungen verfügbar, um Ihre Übergänge zu sichern

### Voraussichtlicher Lebenszyklusplan

Der folgende Tabelle zeigt den voraussichtlichen Lebenszyklus unserer Modelle. Das Ökosystem der generativen KI entwickelt sich sehr schnell, was zu Lebenszyklen führt, die kurz erscheinen können. Unser Ziel ist es, Ihnen Zugang zu den leistungsstärksten Modellen derzeit zu gewähren.

Wir verpflichten uns, die Modelle, die am häufigsten von unseren Kunden genutzt werden, über die Zeit zu erhalten. Für Anwendungsfälle, die eine langfristige Stabilität erfordern, sind **erweiterte Support-Phasen** möglich. Zögern Sie nicht, den **Support zu kontaktieren**, um Ihre spezifischen Anforderungen zu besprechen.

Dieser Plan ist nur als Richtwert zu verstehen und wird zu Beginn jedes Quartals überarbeitet.

- **DMP (Datum der Produktion)** : Der Tag, an dem das Modell in die Produktion geht.
- **DSP (Datum des Support-Endes)** : Das vorhergesagte Datum, ab dem das Modell nicht mehr gewartet wird. Ein Vorankündigungszeitraum von 3 Monaten wird eingehalten, bevor eine endgültige Löschung erfolgt.

| Modell                 | Entwickler                | Phase      | DMP        | DSP        |
| :--------------------- | :------------------------ | :--------- | :--------- | :--------- |
| deepcoder:14b          | Agentica x Together AI    | Produktion | 13/06/2025 | 30/06/2026 |
| cogito:14b             | Deep Cogito               | Produktion | 13/06/2025 | 30/06/2026 |
| cogito:32b             | Deep Cogito               | Produktion | 13/06/2025 | 30/06/2026 |
| cogito:3b              | Deep Cogito               | Produktion | 13/06/2025 | 30/06/2026 |
| cogito:8b              | Deep Cogito               | Produktion | 13/06/2025 | 30/06/2026 |
| deepseek-r1:14b        | DeepSeek AI               | Produktion | 13/06/2025 | 31/12/2025 |
| deepseek-r1:32b        | DeepSeek AI               | Produktion | 13/06/2025 | 31/12/2025 |
| deepseek-r1:671b       | DeepSeek AI               | Produktion | 13/06/2025 | 31/12/2025 |
| deepseek-r1:70b        | DeepSeek AI               | Produktion | 13/06/2025 | 31/12/2025 |
| foundation-sec:8b      | Foundation AI — Cisco     | Produktion | 13/06/2025 | 30/09/2025 |
| gemma3:12b             | Google                    | Produktion | 13/06/2025 | 31/12/2026 |
| gemma3:1b              | Google                    | Produktion | 13/06/2025 | 31/12/2026 |
| gemma3:27b             | Google                    | Produktion | 13/06/2025 | 31/12/2026 |
| gemma3:4b              | Google                    | Produktion | 13/06/2025 | 31/12/2026 |
| granite-embedding:278m | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| granite3-guardian:2b   | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| granite3-guardian:8b   | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| granite3.1-moe:3b      | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| granite3.2-vision:2b   | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| granite3.3:2b          | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| granite3.3:8b          | IBM                       | Produktion | 13/06/2025 | 31/12/2026 |
| llama3.1:8b            | Meta                      | Produktion | 13/06/2025 | 31/12/2025 |
| llama3.3:70b           | Meta                      | Produktion | 13/06/2025 | 31/12/2026 |
| phi4-reasoning:14b     | Microsoft                 | Produktion | 13/06/2025 | 31/12/2025 |
| magistral:24b          | Mistral AI                | Produktion | 13/06/2025 | 31/12/2026 |
| mistral-small3.1:24b   | Mistral AI                | Produktion | 13/06/2025 | 31/12/2026 |
| mistral-small3.2:24b   | Mistral AI                | Produktion | 23/06/2025 | 30/03/2026 |
| devstral:24b           | Mistral AI & All Hands AI | Produktion | 13/06/2025 | 31/12/2026 |
| lucie-instruct:7b      | OpenLLM-France            | Produktion | 13/06/2025 | 30/10/2025 |
| qwen2.5:0.5b           | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen2.5:1.5b           | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen2.5:14b            | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen2.5:32b            | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen2.5:3b             | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |
| qwen2.5vl:32b          | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen2.5vl:3b           | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen2.5vl:72b          | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen2.5vl:7b           | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen3:0.6b             | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen3:1.7b             | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen3:14b              | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen3:30b-a3b          | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen3:4b               | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen3:8b               | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen3:32b              | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwen3:235b             | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2026 |
| qwq:32b                | Qwen Team                 | Produktion | 13/06/2025 | 31/12/2025 |

## 💡 Gute Praktiken

Um das Beste aus der LLMaaS-API zu ziehen, ist es wichtig, Strategien zur Kostenoptimierung, Leistung und Sicherheit zu entwickeln.

### Kostenoptimierung

Die Kostenkontrolle basiert auf einer intelligenten Nutzung von Tokens und Modellen.

1. **Modellauswahl**: Verwenden Sie nicht ein leistungsstarkes Modell für eine einfache Aufgabe. Ein größeres Modell ist leistungsfähiger, aber auch langsamer und verbraucht viel mehr Energie, was den Kosten direkt zugutekommt. Passen Sie die Modellgröße an die Komplexität Ihres Bedarfs an, um ein optimales Gleichgewicht zu erzielen.

   Beispielsweise verbraucht:
   - **`Gemma 3 1B`** **0,15 kWh**.
   - **`Llama 3.3 70B`** **11,75 kWh**, also **78-mal mehr**.

   ```python
   # Für eine Sentimentanalyse ist ein kompaktes Modell ausreichend und kosteneffizient.
   if task == "sentiment_analysis":
       model = "granite3.3:2b"
   # Für eine komplexe rechtliche Analyse ist ein größeres Modell erforderlich.
   elif task == "legal_analysis":
       model = "deepseek-r1:70b"
   ```

2. **Kontextverwaltung**: Der Chat-Verlauf (`messages`) wird bei jedem Aufruf zurückgegeben und verbraucht Eingabetokens. Bei langen Gesprächen sollten Sie Strategien zur Zusammenfassung oder Fensterung in Betracht ziehen, um nur relevante Informationen zu speichern.
   ```python
   # Bei langen Gesprächen kann man die ersten Austausche zusammenfassen.
   messages = [
       {"role": "system", "content": "Sie sind ein KI-Assistent."},
       {"role": "user", "content": "Zusammenfassung der ersten 10 Austausche..."},
       {"role": "assistant", "content": "Okay, ich habe den Kontext."},
       {"role": "user", "content": "Hier ist meine neue Frage."}
   ]
   ```

3. **Beschränkung der Ausgabetokens**: Verwenden Sie stets den Parameter `max_tokens`, um zu vermeiden, dass Antworten zu lang und teuer werden. Legen Sie eine realistische Grenze fest, basierend darauf, was Sie erwarten.
   ```python
   # Ein Zusammenfassung von maximal 100 Wörtern anfordern.
   response = client.chat.completions.create(
       model="granite3.3:8b",
       messages=[{"role": "user", "content": "Zusammenfassen Sie dieses Dokument..."}],
       max_tokens=150,  # Sicherheitspuffer für ~100 Wörter
   )
   ```

### Leistung

Die Reaktionsfähigkeit Ihrer Anwendung hängt davon ab, wie Sie die API-Aufrufe verwalten.

1. **Asynchrone Anfragen**: Um mehrere Anfragen zu verarbeiten, ohne auf das Ende jeder einzelnen zu warten, verwenden Sie asynchrone Aufrufe. Dies ist besonders nützlich für Backend-Anwendungen, die einen großen Volumen an gleichzeitigen Anfragen verarbeiten.

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

2. **Streaming für die Benutzererfahrung (UX)**: Für Benutzeroberflächen (Chatbots, Assistenten) ist Streaming entscheidend. Es ermöglicht die Anzeige der Modellantwort Wort für Wort und vermittelt das Gefühl einer sofortigen Reaktivität, anstatt auf die vollständige Antwort zu warten.
    ```python
    # Zeigt die Antwort in Echtzeit in einer Benutzeroberfläche an
    response_stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[{"role": "user", "content": "Erzähle mir eine Geschichte."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Den Textabschnitt in der UI anzeigen
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Sicherheit

Die Sicherheit Ihrer Anwendung ist von entscheidender Bedeutung, insbesondere wenn Sie Benutzereingaben verarbeiten.

1. **Eingabeverifikation und -bereinigung (Sanitization)**: Vertrauen Sie niemals auf Benutzereingaben. Bereinigen Sie diese, bevor Sie sie an die API senden, um jeglichen potenziell schädlichen Code oder "Prompt-Injektions"-Anweisungen zu entfernen. Begrenzen Sie zudem ihre Größe, um Missbrauch zu vermeiden.
   ```python
   def sanitize_input(user_input: str) -> str:
       # Einfaches Beispiel: Entfernen von Code-Formatierungen und Begrenzung der Länge.
       # Robustere Bibliotheken können für eine erweiterte Bereinigung verwendet werden.
       cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
       return cleaned[:2000]  # Begrenzung auf 2000 Zeichen
   ```

2. **Robuste Fehlerbehandlung**: Umgeben Sie immer Ihre API-Aufrufe mit `try...except`-Blöcken, um Netzwerkfehler, API-Fehler (z. B. 429 Rate Limit, 500 Internal Server Error) zu verarbeiten und eine degradierte, aber funktionale Benutzererfahrung zu gewährleisten.
   ```python
   from openai import APIError, APITimeoutError

   try:
       response = client.chat.completions.create(...)
   except APITimeoutError:
       # Behandeln Sie den Fall, in dem die Anfrage zu lange dauert
       return "Der Dienst benötigt länger als erwartet, bitte versuchen Sie es erneut."
   except APIError as e:
       # Behandeln Sie spezifische API-Fehler
       logger.error(f"Fehler API LLMaaS: {e.status_code} - {e.message}")
       return "Es ist ein Fehler mit dem IA-Dienst aufgetreten."
   except Exception as e:
       # Behandeln Sie alle anderen Fehler (Netzwerk usw.)
       logger.error(f"Eine unerwartete Fehler ist aufgetreten: {e}")
       return "Es ist ein unerwarteter Fehler aufgetreten."
   ```