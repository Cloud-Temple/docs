---
title: Konzepte
sidebar_position: 3
---

# Konzepte und Architektur LLMaaS

## 🏗️ Technische Architektur

### Cloud-Temple-Infrastruktur

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Technische Architektur von LLMaaS Cloud Temple" />

### Hauptkomponenten

#### 1. **API Gateway LLMaaS**
- **Kompatibel mit OpenAI** : Transparente Integration in das bestehende Ökosystem
- **Rate Limiting** : Quotenverwaltung pro Abrechnungstier
- **Load Balancing** : Intelligente Verteilung auf 12 GPU-Maschinen
- **Monitoring** : Echtzeit-Metriken und Alarmierung

#### 2. **Authentifizierungsdienst**
- **Sichere API-Tokens** 
- **Zugriffssteuerung** : Granulare Berechtigungen pro Modell
- **Audit-Protokolle** : Vollständige Nachverfolgbarkeit der Zugriffe

## 🤖 Modelle und Tokens

### Katalog der Modelle

*Vollständiger Katalog: [Liste der Modelle](./models)*

### Token-Management

#### **Typen von Tokens**
- **Eingabetokens** : Ihr Prompt und Kontext
- **Ausgabetokens** : Antwort, die vom Modell generiert wird
- **Systemtokens** : Metadaten und Anweisungen

#### **Kostenberechnung**
```
Coût total = (Tokens entrée × 0.9€/M) + (Tokens sortie × 4€/M) +  (Tokens sortie Raisonnement × 21€/M)
```

#### **Optimierung**
- **Context window** : Wiederholen Sie Gespräche, um zu sparen
- **Modèles appropriés** : Wählen Sie die Größe entsprechend der Komplexität
- **Max tokens** : Begrenzen Sie die Länge der Antworten

### Tokenisierung

```python
```

# Beispiel für eine Token-Schätzung
def estimate_tokens(text: str) -> int:
    """Näherungsschätzung: 1 Token ≈ 4 Zeichen"""
    return len(text) // 4

prompt = "Expliquez la photosynthèse"
response_max = 200  # maximale gewünschte Tokens

estimated_input = estimate_tokens(prompt)  # ~6 Tokens
total_cost = (estimated_input * 0.9 + response_max * 4) / 1_000_000
print(f"Geschätzte Kosten: {total_cost:.6f}€")
```

## 🔒 Sicherheit und Konformität

### SecNumCloud-Zertifizierung

Der LLMaaS-Dienst wird auf einer IaaS-Cloud-Temple-Infrastruktur berechnet, die über die **SecNumCloud 3.2-Zertifizierung** der ANSSI verfügt, die folgendes garantiert:

#### **DatenSchutz**
- **End-to-End-Verschlüsselung** : TLS 1.3 für alle Austausche
- **Sichere Speicherung** : verschlüsselte Daten im Ruhezustand
- **Umgebungsisolation**

#### **Digitale Souveränität**
- **Hosting in Frankreich** : Zertifizierte Cloud Temple Datacenter
- **Französisches Recht** : RGPD-Konformität
- **Kein Datenexport** : Keine Übertragung in ausländische Clouds und keine Speicherung der Daten

#### **Audit und Nachverfolgbarkeit**
- **Vollständige Protokolle** : Alle Interaktionen protokolliert
- **Aufbewahrung** : Aufbewahrung gemäß gesetzlichen Richtlinien
- **Compliance**

### Sicherheitskontrollen

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Sicherheitskontrollen LLMaaS" />

## 📈 Leistung und Skalierbarkeit

### Metriken der Leistung

#### **Latenz**
- **Durchschnittliche Antwortzeit** : < 2 Sekunden für 8B-Modelle
- **Zeit bis zum ersten Token** : < 1500 ms
- **Streaming-Durchsatz** : 15–100 Tokens pro Sekunde je nach Modell

#### **Durchsatz**
- **Gleichzeitige Anfragen** : Bis zu 1000 Anfragen/Minute pro Mandant
- **Automatisches Skalieren** : Lastanpassung in Echtzeit basierend auf den angeforderten Modellen
- **Verfügbarkeit** : SLA-Zielwert von 99,9 % monatlicher Verfügbarkeit

### Echtzeit-Monitoring

Zugriff über **Console Cloud Temple**:
- Nutzungsmetriken pro Modell
- Latenz- und Durchsatzdiagramme
- Warnungen bei Leistungsschwellenwerten
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

# Code identisch!
response = client_ct.chat.completions.create(
    model="granite3.3:8b",  # Cloud Temple Modell
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Unterstütztes Ökosystem

#### **KI-Frameworks**
- ✅ **LangChain** : Native Integration
- ✅ **Haystack** : Dokumenten-Pipeline
- ✅ **Semantic Kernel** : Microsoft-Orchestrierung
- ✅ **AutoGen** : Konversationelle Agenten

#### **Entwicklungs-Tools**
- ✅ **Jupyter** : Interaktive Notizbücher
- ✅ **Streamlit** : Schnelle Webanwendungen
- ✅ **Gradio** : KI-Benutzeroberflächen
- ✅ **FastAPI** : Backend-APIs

#### **No-Code-Plattformen**
- ✅ **Zapier** : Automatisierungen
- ✅ **Make** : Visuelle Integrationen
- ✅ **Bubble** : Webanwendungen

## 🔄 Lebenszyklus der Modelle

### Modellaktualisierungen

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="LLMaaS-Modell-Lebenszyklus" />

### Versionspolitik

- **Stabile Modelle**: Festgelegte Versionen, die 6 Monate verfügbar sind
- **Experimentelle Modelle**: Beta-Versionen für Early Adopter
- **Ablösung**: 3 Monate Vorankündigung vor dem Rückzug
- **Migration**: Professionelle Dienstleistungen verfügbar, um Ihre Übergänge zu sichern

## 💡 Gute Praktiken

### Kostenoptimierung

1. **Modellauswahl**
   ```python
   # Einfache Aufgabe → leichtes Modell
   if task_complexity == "simple":
       model = "llama3.2:3b"  # Billiger
   else:
       model = "llama3.1:70b"  # Leistungsfähiger
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

3. **Token-Begrenzung**
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

1. **Eingabeverifizierung**
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
       return "Leider, ein temporärer Fehler."
   ```