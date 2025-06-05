---
title: Konzepte
sidebar_position: 3
---

# Konzepte und Architektur LLMaaS

## Übersicht

Der **LLMaaS**-Dienst (Large Language Models as a Service) von Cloud Temple bietet sicheren und souveränen Zugriff auf die leistungsstärksten KI-Modelle mit der **SecNumCloud-Zertifizierung** der ANSSI.

## 🏗️ Technische Architektur

### Cloud Temple Infrastruktur

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Technische Architektur LLMaaS Cloud Temple" />

### Hauptkomponenten

#### 1. **API Gateway LLMaaS**
- **OpenAI-kompatibel** : Nahtlose Integration in bestehende Ökosysteme
- **Rate Limiting** : Quotenverwaltung pro Abrechnungstier
- **Load Balancing** : Intelligente Verteilung auf 12 GPU-Maschinen
- **Monitoring** : Echtzeit-Metriken und Alarmierung

#### 2. **Authentifizierungsdienst**
- **Sichere API-Tokens** : Automatische Rotation
- **Zugriffssteuerung** : Granulare Berechtigungen pro Modell
- **Audit-Trails** : Vollständige Nachverfolgbarkeit der Zugriffe

## 🤖 Modelle und Tokens

### Modellkatalog

*Vollständiger Katalog : [Liste der Modelle](./models)*

### Token-Verwaltung

#### **Token-Typen**
- **Eingabetokens** : Ihr Prompt und Kontext
- **Ausgabetokens** : Von dem Modell generierte Antwort
- **Systemtokens** : Metadaten und Anweisungen

#### **Kostenberechnung**
```
Gesamtkosten = (Eingabetokens × 0,9€/M) + (Ausgabetokens × 4€/M) +  (Ausgabetokens Reasoning × 21€/M)
```

#### **Optimierung**
- **Context Window** : Wiederholte Nutzung von Gesprächen zur Einsparung
- **Passende Modelle** : Größenwahl entsprechend der Komplexität
- **Max Tokens** : Begrenzung der Antwortlänge

### Tokenisierung

```python
# Beispiel zur Token-Schätzung
def estimate_tokens(text: str) -> int:
    """Näherungswert: 1 Token ≈ 4 Zeichen"""
    return len(text) // 4

prompt = "Erkläre die Photosynthese"
response_max = 200  # gewünschte maximale Tokens

estimated_input = estimate_tokens(prompt)  # ~6 Tokens
total_cost = (estimated_input * 0.9 + response_max * 4) / 1_000_000
print(f"Kostenabschätzung: {total_cost:.6f}€")
```

## 🔒 Sicherheit und Compliance

### SecNumCloud-Zertifizierung

Der LLMaaS-Dienst wird auf einer technischen Infrastruktur betrieben, die die **SecNumCloud 3.2-Zertifizierung** der ANSSI besitzt, was folgendes gewährleistet:

#### **DatenSchutz**
- **Ende-zu-Ende-Verschlüsselung** : TLS 1.3 für alle Austausche
- **Sichere Speicherung** : Daten verschlüsselt im Ruhezustand (AES-256)
- **Isolation** : Dedizierte Umgebungen pro Tenant

#### **Digitale Souveränität**
- **Hosting in Frankreich** : Zertifizierte Cloud Temple Datacenters
- **Französisches Recht** : Native RGPD-Konformität
- **Keine Exposition** : Kein Datenübertrag in ausländische Clouds

#### **Audit und Nachverfolgbarkeit**
- **Vollständige Logs** : Alle Interaktionen nachverfolgbar
- **Retentionspolitik** : Speicherung gemäß gesetzlichen Vorgaben
- **Compliance** : Audit-Berichte verfügbar

### Sicherheitskontrollen

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Sicherheitskontrollen LLMaaS" />

## 📈 Leistung und Skalierbarkeit

### Leistungs-Metriken

    In progress


#### **Latenz**

    In progress

#### **Durchsatz**

    In progress


### Echtzeit-Monitoring

Zugriff über die **Cloud Temple Console** :
- Nutzungsmetriken pro Modell
- Latenz- und Durchsatz-Graphen
- Alarme bei Leistungs-Schwellwerten
- Anfragespeicher

## 🌐 Integration und Ökosystem

### OpenAI-Kompatibilität

Der LLMaaS-Dienst ist **kompatibel** mit der OpenAI-API :

```python
# Transparente Migration
from openai import OpenAI

# Vorher (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# Nachher (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="Ihr-Cloud-Temple-Token",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Identischer Code!
response = client_ct.chat.completions.create(
    model="granite3.3:8b",  # Cloud Temple Modell
    messages=[{"role": "user", "content": "Hallo"}]
)
```

### Unterstütztes Ökosystem

#### **IA-Frameworks**
- ✅ **LangChain** : Native Integration
- ✅ **Haystack** : Dokumenten-Pipeline
- ✅ **Semantic Kernel** : Microsoft-Orchestrierung
- ✅ **AutoGen** : Konversationelle Agenten

#### **Entwicklertools**
- ✅ **Jupyter** : Interaktive Notebooks
- ✅ **Streamlit** : Schnelle Web-Anwendungen
- ✅ **Gradio** : IA-Benutzeroberflächen
- ✅ **FastAPI** : Backend-APIs

#### **No-Code-Plattformen**
- ✅ **Zapier** : Automatisierungen
- ✅ **Make** : Visuelle Integrationen
- ✅ **Bubble** : Web-Anwendungen

## 🔄 Modell-Lebenszyklus

### Modell-Updates

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="Modell-Lebenszyklus LLMaaS" />

### Versionierungspolitik

- **Stabile Modelle** : Fixe Versionen für 6 Monate verfügbar
- **Experimentelle Modelle** : Beta-Versionen für Early Adopters
- **Einstellung** : 3 Monate Vorankündigung vor Entfernung
- **Migration** : Professionelle Dienste für Ihre Übergänge verfügbar

## 💡 Best Practices

### Kostenoptimierung

1. **Modellwahl**
   ```python
   # Einfache Aufgabe → leichtes Modell
   if task_complexity == "einfach":
       model = "llama3.2:3b"  # Billiger
   else:
       model = "llama3.1:70b"  # Leistungsstärker
   ```

2. **Kontextverwaltung**
   ```python
   # Wiederholte Nutzung von Gesprächen
   messages = [
       {"role": "system", "content": "Sie sind ein IA-Assistent."},
       {"role": "user", "content": "Frage 1"},
       {"role": "assistant", "content": "Antwort 1"},
       {"role": "user", "content": "Frage 2"}  # Wiederholung des Kontexts
   ]
   ```

3. **Token-Begrenzung**
   ```python
   response = client.chat.completions.create(
       model="granite3.3:8b",
       messages=messages,
       max_tokens=100,  # Begrenzung der Länge
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
       # Bereinigung von potenziellen Injection-Angriffen
       cleaned = user_input.replace("```", "")
       return cleaned[:1000]  # Begrenzung der Größe
   ```

2. **Fehlerbehandlung**
   ```python
   try:
       response = client.chat.completions.create(...)
   except Exception as e:
       logger.error(f"LLMaaS-Fehler: {e}")
       return "Leider ein temporärer Fehler."
   ```