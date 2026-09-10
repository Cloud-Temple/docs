---
title: Konzepte
sidebar_position: 3
---

# Konzepte und Architektur von LLMaaS

## Übersicht

Der **LLMaaS**-Dienst (Large Language Models as a Service) von Cloud Temple bietet einen sicheren und souveränen Zugang zu den fortschrittlichsten KI-Modellen, mit der **SecNumCloud-Qualifikation** der ANSSI.

## 🏗️ Technische Architektur

### Infrastruktur Cloud Temple

import ArchitectureLLMaaS from '@site/docs/llmaas/images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Technische Architektur LLMaaS Cloud Temple" />

### Hauptkomponenten

#### 1. **API Gateway LLMaaS**
- **OpenAI-kompatibel** : Nahtlose Integration in das bestehende Ökosystem
- **Rate Limiting** : Kontingentverwaltung nach Abrechnungsstufe
- **Load Balancing** : Verteilung der Anfragen auf die Inferenzressourcen
- **Monitoring** : Echtzeitmetriken und Alerting

#### 2. **Authentifizierungsdienst**
- **API-Schlüssel** : Erstellung, Rotation und Widerruf liegen in der Verantwortung des Kunden. Siehe [Verantwortlichkeitsmatrix (RACI)](../contractual/llmaas/raci.md).
- **Zugriffssteuerung** : Granulare Berechtigungen pro Modell
- **Audit-Trails** : Vollständige Nachverfolgbarkeit der Zugriffe

## 🤖 Modelle und Tokens

### Modellkatalog

*Siehe den [Katalog und Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle) und den [Auswahlleitfaden](./models.md).*

### Token-Verwaltung

#### **Token-Typen**
- **Eingabe-Tokens** : Ihr Prompt und Kontext
- **Ausgabe-Tokens** : Vom Modell generierte Antwort
- **System-Tokens** : Metadaten und Anweisungen

#### **Kostenberechnung**
```
Chat/Completion = (Tokens entrée × 1.8€/M) + (Tokens sortie × 8€/M) + (Tokens sortie Raisonnement × 8€/M)
Reranking (€)   = Nombre de documents traités × 4 / 1 000 000
Batch (async)   = (Tokens entrée × 0.9€/M) + (Tokens sortie × 4€/M)
Audio (ASR)     = 0.01€ / minute de transcription
```

#### **Optimierung**
- **Context window** : Wiederverwenden Sie Konversationen, um Tokens zu sparen
- **Geeignete Modelle** : Wählen Sie die Größe entsprechend der Komplexität
- **Max tokens** : Begrenzen Sie die Länge der Antworten

### Tokenisierung

```python
# Beispiel für die Token-Schätzung
def estimate_tokens(text: str) -> int:
    """Estimation approximative : 1 token ≈ 4 caractères"""
    return len(text) // 4

prompt = "Expliquez la photosynthèse"
response_max = 200  # gewünschte maximale Token-Anzahl

estimated_input = estimate_tokens(prompt)  # ~6 Tokens
total_cost = (estimated_input * 1.8 + response_max * 8) / 1_000_000
print(f"Coût estimé: {total_cost:.6f}€")
```

## 🔒 Sicherheit und Compliance

### SecNumCloud-Qualifizierung

Der LLMaaS-Dienst wird auf einer technischen Infrastruktur betrieben, die über die **SecNumCloud-Qualifizierung 3.2** der ANSSI verfügt, was Folgendes garantiert:

#### **Datenschutz**
- **End-to-End-Verschlüsselung** : TLS 1.3 für alle Übertragungen
- **Sichere Speicherung** : Verschlüsselung ruhender Daten (AES-256)

#### **Digitale Souveränität**
- **Hosting in Frankreich** : Zertifizierte Cloud Temple Rechenzentren
- **Französisches Recht** : Native DSGVO-Konformität
- **Keine Exposition** : Keine Übertragung zu ausländischen Clouds

#### **Audit und Rückverfolgbarkeit**
- **Vollständige Logs** : Alle Interaktionen werden protokolliert
- **Aufbewahrung** : Speicherung gemäß gesetzlichen Vorgaben
- **Compliance** : Auditberichte verfügbar

### Sicherheitskontrollen

import SecurityControls from '@site/docs/llmaas/images/llmaas_security_002.png';

<img src={SecurityControls} alt="Contrôles de Sécurité LLMaaS" />

### Prompt-Sicherheit

Die LLMaaS-Plattform wendet keine automatische Inhaltsfilterung für Prompts gegen Injektionen oder Umgehungsversuche von Anweisungen (*Jailbreaks*) an.

Inhaltskontrollen müssen in Ihrer Anwendung entsprechend Ihrem Anwendungsfall implementiert werden. Sie können explizit ein [Sicherheitsmodell aus dem Katalog](./models.md#sicherheit-und-guardrails) aufrufen, um Eingaben oder Antworten zu bewerten. Diese Modelle werden nicht automatisch für Anfragen an andere Modelle ausgeführt.

Definieren Sie die Filterkriterien und die Ergebnisauswertung gemeinsam mit Ihren Fachteams und testen Sie diese an Ihren Daten, insbesondere um False Positives zu messen. Die [Verantwortungsaufteilung](../contractual/llmaas/raci.md) definiert die Rollen des Kunden und von Cloud Temple.

## 📈 Performance und Skalierbarkeit

### Echtzeit-Monitoring

Zugriff über **Console Cloud Temple** :
- Nutzungsmetriken pro Modell
- Diagramme für Latenz und Durchsatz
- Warnungen bei Leistungsschwellenwerten
- Abfrageverlauf

## 🌐 Integration und Ökosystem

### OpenAI-Kompatibilität

Der LLMaaS-Dienst ist **kompatibel** mit der OpenAI-API:

```python
# Transparente Migration
from openai import OpenAI

# Vorher (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# Nachher (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="votre-token-cloud-temple",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Identischer Code!
response = client_ct.chat.completions.create(
    model="gpt-oss:120b",  # Cloud Temple-Modell
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Unterstütztes Ökosystem

#### **KI-Frameworks**
- ✅ **LangChain** : Native Integration
- ✅ **Haystack** : Dokumenten-Pipeline
- ✅ **Semantic Kernel** : Microsoft-Orchestrierung
- ✅ **AutoGen** : Konversationsagenten

#### **Entwicklungstools**
- ✅ **Jupyter** : Interaktive Notebooks
- ✅ **Streamlit** : Schnelle Webanwendungen
- ✅ **Gradio** : KI-Benutzeroberflächen
- ✅ **FastAPI** : Backend-APIs

#### **No-Code-Plattformen**
- ✅ **Zapier** : Automatisierungen
- ✅ **Make** : Visuelle Integrationen
- ✅ **Bubble** : Webanwendungen

## 🔄 Lebenszyklus der Modelle

Der **[Lebenszyklus der Modelle](https://llmaas.status.cloud-temple.app/lifecycle)** veröffentlicht die Status, Fristen und empfohlenen Migrationen. Beachten Sie ihn vor der Auswahl eines Modells und während des Betriebs Ihrer Anwendung.

### Lebenszyklus verstehen

- **DMP** : Datum der Produktivsetzung.
- **DSP** : angekündigtes Datum des Produktionsendes (Ende des Supports) für das Modell.
- **LTS (Long Term Support)** : Modell mit erweitertem Support; überprüfen Sie das veröffentlichte Datum für das betreffende Modell.
- **Production** : im Katalog als produktiv gekennzeichnetes Modell.
- **Deprecated** : veraltetes Modell, für das eine Migration vorbereitet werden muss. Dieser Status bedeutet nicht zwangsläufig, dass die API-Aufrufe bereits unterbrochen sind.
- **Planned** : angekündigtes Modell, dessen Verfügbarkeit vor der Nutzung überprüft werden muss.

Ankündigungen zu Hinzufügungen, Umleitungen und Entfernungen werden im [Service-Changelog](https://llmaas.status.cloud-temple.app/changelog) veröffentlicht. Bei speziellen Anforderungen an Stabilität oder Support wenden Sie sich bitte an den Support, um die anwendbaren Bedingungen zu klären.

### Weiterleitungen und ältere Identifikatoren

Bestimmte ältere Identifikatoren werden an ein Nachfolgemodell weitergeleitet. Eine Anfrage kann daher weiterhin funktionieren, auch wenn sie von einem anderen Modell verarbeitet wird. Die fortgesetzte Nutzung des API-Aufrufs garantiert weder identische Antworten noch dieselben Fähigkeiten, Latenzen oder Kontextlimits.

### Migration zu einem anderen Modell

1. Identifizieren Sie das betroffene Modell, das Ablaufdatum und das empfohlene Nachfolgemodell im [cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle).
2. Überprüfen Sie die ID des Nachfolgemodells mit `GET /v1/models` sowie dessen Fähigkeiten: Vision, Tool-Use, Reasoning und Kontext entsprechend Ihrer Nutzung.
3. Testen Sie das Nachfolgemodell anhand einer repräsentativen Stichprobe Ihrer Anfragen: Qualität, Ausgabeformate, Tools, Latenz und Verbrauch.
4. Aktualisieren Sie den Parameter `model` in der Konfiguration Ihrer Anwendung nach der Validierung und überwachen Sie anschließend die Ergebnisse.
5. Für Embeddings planen Sie das Neuberechnen der Vektoren und das Rekonstruieren des Index ein, falls sich das Modell ändert.

### Veraltete Modelle

Die Liste und die Migrationsziele sind im [Lebenszyklus-Katalog](https://llmaas.status.cloud-temple.app/lifecycle) verfügbar. Falls keine Migration angegeben ist, wenden Sie sich vor dem Stichtag an den Support, um eine geeignete Lösung zu wählen.

## 💡 Best Practices

Um die LLMaaS-API optimal zu nutzen, ist es entscheidend, Strategien zur Kosten-, Leistungs- und Sicherheitsoptimierung zu implementieren.

### Kostenoptimierung

Das Kostenmanagement basiert auf einer intelligenten Nutzung von Tokens und Modellen.

1.  **Modellauswahl** : Vergleichen Sie mehrere Modelle anhand repräsentativer Beispiele Ihrer Nutzung. Wählen Sie dasjenige aus, das Ihren Qualitäts- und Latenzanforderungen entspricht, und messen Sie dann den Token-Verbrauch. Konsultieren Sie den [catalogue de cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle), um die verfügbaren Modelle und ihre Nachfolger zu identifizieren. Die Abrechnung hängt vom anwendbaren Tarif und den verbrauchten Volumina ab; die Modellgröße allein bestimmt nicht die berechneten Kosten.

2.  **Kontextverwaltung** : Der Konversationsverlauf (`messages`) wird bei jedem Aufruf zurückgegeben und verbraucht Eingabe-Tokens. Für lange Konversationen sollten Sie Zusammenfassungs- oder Sliding-Window-Verfahren in Betracht ziehen, um nur die relevanten Informationen beizubehalten.
    ```python
    # Bei einer langen Konversation können die ersten Austausche zusammengefasst werden.
    messages = [
        {"role": "system", "content": "Vous êtes un assistant IA."},
        {"role": "user", "content": "Résumé des 10 premiers échanges..."},
        {"role": "assistant", "content": "Ok, j'ai le contexte."},
        {"role": "user", "content": "Voici ma nouvelle question."}
    ]
    ```

3.  **Begrenzung der Ausgabe-Tokens** : Verwenden Sie immer den Parameter `max_tokens`, um übermäßig lange und kostspielige Antworten zu vermeiden. Legen Sie eine angemessene Grenze basierend auf Ihren Erwartungen fest.
    ```python
    # Eine Zusammenfassung von maximal 100 Wörtern anfordern.
    response = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Résume ce document..."}],
        max_tokens=150, # Marge de sécurité for ~100 mots
    )
    ```

### Performance

Die Reaktionsfähigkeit Ihrer Anwendung hängt davon ab, wie Sie die API-Aufrufe verwalten.

1.  **Asynchrone Anfragen** : Um mehrere Anfragen zu verarbeiten, ohne auf das Ende jeder einzelnen zu warten, verwenden Sie asynchrone Aufrufe. Dies ist besonders nützlich für Backend-Anwendungen, die eine große Anzahl gleichzeitiger Anfragen verarbeiten.
    ```python
    import asyncio
    from openai import AsyncOpenAI

    client = AsyncOpenAI(api_key="...", base_url="...")

    async def process_prompt(prompt: str):
        # Verarbeitet eine einzelne Anfrage asynchron
        response = await client.chat.completions.create(model="gpt-oss:120b", messages=[{"role": "user", "content": prompt}])
        return response.choices[0].message.content

    async def batch_requests(prompts: list):
        # Startet mehrere Aufgaben parallel und wartet auf deren Abschluss
        tasks = [process_prompt(p) for p in prompts]
        return await asyncio.gather(*tasks)
    ```

2.  **Streaming für die Benutzererfahrung (UX)** : Für Benutzeroberflächen (Chatbots, Assistenten) ist Streaming unerlässlich. Es ermöglicht die Anzeige der Modellantwort Wort für Wort, was einen Eindruck sofortiger Reaktionsfähigkeit vermittelt, anstatt auf die vollständige Antwort zu warten.
    ```python
    # Zeigt die Antwort in Echtzeit in einer Benutzeroberfläche an
    response_stream = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Raconte-moi une histoire."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Zeigt den Textabschnitt in der UI an
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Sicherheit

Die Sicherheit Ihrer Anwendung ist von entscheidender Bedeutung, insbesondere wenn Sie Benutzereingaben verarbeiten.

1.  **Validierung und Bereinigung der Eingaben (Sanitization)** : Vertrauen Sie niemals Benutzereingaben. Bevor Sie sie an die API senden, bereinigen Sie sie, um potenziell schädlichen Code oder "Prompt-Injection"-Anweisungen zu entfernen. Begrenzen Sie außerdem ihre Größe, um Missbrauch zu vermeiden.
    ```python
    def sanitize_input(user_input: str) -> str:
        # Einfaches Beispiel: Code-Demarkatoren entfernen und die Länge begrenzen.
        # Robusterere Bibliotheken können für eine erweiterte Sanitization verwendet werden.
        cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
        return cleaned[:2000]  # Begrenzt die Größe auf 2000 Zeichen
    ```

2.  **Robuste Fehlerbehandlung** : Umrahmen Sie Ihre API-Aufrufe immer in `try...except`-Blöcken, um Netzwerkfehler, API-Fehler (z. B. 429 Rate Limit, 500 Internal Server Error) zu behandeln und ein eingeschränktes, aber funktionales Benutzererlebnis zu bieten.
    ```python
    from openai import APIError, APITimeoutError

    try:
        response = client.chat.completions.create(...)
    except APITimeoutError:
        # Fall behandeln, in dem die Anfrage zu lange dauert
        return "Le service prend plus de temps que prévu, veuillez réessayer."
    except APIError as e:
        # API-spezifische Fehler behandeln
        logger.error(f"Erreur API LLMaaS: {e.status_code} - {e.message}")
        return "Désolé, une erreur est survenue avec le service d'IA."
    except Exception as e:
        # Alle anderen Fehler (Netzwerk usw.) behandeln
        logger.error(f"Une erreur inattendue est survenue: {e}")
        return "Désolé, une erreur inattendue est survenue."
    ```