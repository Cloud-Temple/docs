---
title: Konzepte
sidebar_position: 3
---

# Konzepte und Architektur LLMaaS

## Übersicht

Der Dienst **LLMaaS** (Large Language Models as a Service) von Cloud Temple bietet sicheren und souveränen Zugang zu den fortschrittlichsten KI-Modellen mit der **Zertifizierung SecNumCloud** der ANSSI.

## 🏗️ Technische Architektur

### Cloud-Temple-Infrastruktur

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Technische Architektur von LLMaaS Cloud Temple" />

### Hauptkomponenten

#### 1. **API Gateway LLMaaS**
- **Kompatibel mit OpenAI** : Transparente Integration mit bestehendem Ökosystem
- **Rate Limiting** : Quotenverwaltung pro Abrechnungstier
- **Load Balancing** : Intelligente Verteilung auf 12 GPU-Maschinen
- **Monitoring** : Echtzeit-Metriken und Alarmierung

#### 2. **Service d'Authentification**
- **Sichere API-Tokens** : Automatische Rotation
- **Zugriffssteuerung** : Granulare Berechtigungen pro Modell
- **Audit-Protokolle** : Vollständige Nachverfolgbarkeit der Zugriffe

## 🤖 Modelle und Tokens

### Modellkatalog

*Vollständiger Katalog: [Modellliste](./models)*

### Token-Verwaltung

#### **Typen von Tokens**
- **Eingabetokens** : Ihr Prompt und Kontext
- **Ausgabetokens** : Antwort, die vom Modell generiert wird
- **Systemtokens** : Metadaten und Anweisungen

#### **Kostenberechnung**
```
Coût total = (Tokens entrée × 0.9€/M) + (Tokens sortie × 4€/M) +  (Tokens sortie Raisonnement × 21€/M)
```

#### **Optimierung**
- **Kontextfenster** : Wiederholen Sie Gespräche, um zu sparen
- **Passende Modelle** : Wählen Sie die Größe entsprechend der Komplexität
- **Max. Tokens** : Beschränken Sie die Länge der Antworten

### Tokenisierung

```python
```

# Beispiel zur Token-Schätzung
def estimate_tokens(text: str) -> int:
    """Approximative Schätzung: 1 Token ≈ 4 Zeichen"""
    return len(text) // 4

prompt = "Erklären Sie die Photosynthese"
response_max = 200  # gewünschte maximale Tokens

estimated_input = estimate_tokens(prompt)  # ~6 Tokens
total_cost = (estimated_input * 0.9 + response_max * 4) / 1_000_000
print(f"Kosten geschätzt: {total_cost:.6f}€")
```

## 🔒 Sicherheit und Konformität

### Zertifizierung SecNumCloud

Der LLMaaS-Service wird auf einer technischen Infrastruktur verarbeitet, die über die **Zertifizierung SecNumCloud 3.2** der ANSSI verfügt, die garantiert:

#### **DatenSchutz**
- **Ende-zu-Ende-Verschlüsselung** : TLS 1.3 für alle Kommunikationen
- **Sicherer Speicher** : Verschlüsselte Daten im Ruhezustand (AES-256)
- **Isolation** : Dedizierte Umgebungen pro Mandant

#### **Digitale Souveränität**
- **Hosting Frankreich** : Zertifizierte Cloud Temple Datacenter
- **Französisches Recht** : Native DSGVO-Konformität
- **Keine Exposition** : Keine Datenübertragung in ausländische Clouds

#### **Audit und Nachverfolgbarkeit**
- **Vollständige Logs** : Alle Interaktionen werden protokolliert
- **Aufbewahrung** : Speicherung gemäß rechtlichen Richtlinien
- **Compliance** : Auditberichte sind verfügbar

### Sicherheitskontrollen

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Sicherheitskontrollen LLMaaS" />

## 📈 Leistung und Skalierbarkeit

### Leistungsmetriken

    In Arbeit

#### **Latenz**

    In Arbeit

#### **Débit**

    In Arbeit

### Echtzeit-Monitoring

Zugriff über **Console Cloud Temple** :
- Metriken zur Nutzung pro Modell
- Graphiken zur Latenz und Durchsatz
- Benachrichtigungen zu Leistungsschwellenwerten
- Anfragespeicher

## 🌐 Integration und Ökosystem

### OpenAI-Kompatibilität

Der LLMaaS-Dienst ist **kompatibel** mit der OpenAI-API:

```python
```

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
    model="granite3.3:8b",  # Cloud Temple Modell
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Unterstütztes Ökosystem

#### **Frameworks IA**
- ✅ **LangChain** : Native Integration
- ✅ **Haystack** : Pipeline von Dokumenten
- ✅ **Semantic Kernel** : Orchestrierung von Microsoft
- ✅ **AutoGen** : Konversationelle Agenten

#### **Tools Entwicklung**
- ✅ **Jupyter** : interaktive Notebooks
- ✅ **Streamlit** : schnelle Webanwendungen
- ✅ **Gradio** : Benutzeroberflächen für KI
- ✅ **FastAPI** : Backend-APIs

#### **No-Code-Plattformen**
- ✅ **Zapier** : Automatisierungen
- ✅ **Make** : visuelle Integrationen
- ✅ **Bubble** : Webanwendungen

## 🔄 Lebenszyklus der Modelle

### Modellaktualisierungen

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="Lebenszyklus der Modelle LLMaaS" />

### Versionierungspolitik

- **Stabile Modelle** : Festgelegte Versionen, die 6 Monate lang verfügbar sind.
- **Experimentelle Modelle** : Beta-Versionen für Early Adopter.
- **Ablösung** : 3 Monate Vorankündigung vor der Entfernung.
- **Migration** : Professionelle Dienstleistungen stehen zur Verfügung, um Ihre Übergänge zu gewährleisten.

## 💡 Gute Praktiken

### Kostenoptimierung

1. **Modellauswahl**
   ```python
   # Einfache Aufgabe → leichtes Modell
   if task_complexity == "simple":
       model = "llama3.2:3b"  # Billiger
   else:
       model = "llama3.1:70b"  # Leistungsstärker
   ```

2. **Kontextverwaltung**
   ```python
   # Unterhaltungen wiederverwenden
   messages = [
       {"role": "system", "content": "Sie sind ein KI-Assistent."},
       {"role": "user", "content": "Frage 1"},
       {"role": "assistant", "content": "Antwort 1"},
       {"role": "user", "content": "Frage 2"}  # Wiederverwendet den Kontext
   ]
   ```

3. **Tokenbegrenzung**
   ```python
   response = client.chat.completions.create(
       model="granite3.3:8b",
       messages=messages,
       max_tokens=100,  # Begrenzt die Länge
       temperature=0.7
   )
   ```

### Leistung

1. **Asynchrone Anfragen**
   ```python
   import asyncio
   import aiohttp
   
   async def batch_requests(prompts):
       tasks = [process_prompt(prompt) for prompt in prompts]
       return await asyncio.gather(*tasks)
   ```

2. **Streaming für UX**
   ```python
   # Echtzeit-Interface
   for chunk in client.chat.completions.create(
       model="granite3.3:8b",
       messages=messages,
       stream=True
   ):
       if chunk.choices[0].delta.content:
           print(chunk.choices[0].delta.content, end="")
   ```

### Sicherheit

1. **Eingabeverifikation**
   ```python
   def sanitize_input(user_input: str) -> str:
       # Potenzielle Injectionen bereinigen
       cleaned = user_input.replace("```", "")
       return cleaned[:1000]  # Größe begrenzen
   ```

2. **Fehlerbehandlung**
   ```python
   try:
       response = client.chat.completions.create(...)
   except Exception as e:
       logger.error(f"LLMaaS-Fehler: {e}")
       return "Entschuldigung, ein temporärer Fehler."
   ```