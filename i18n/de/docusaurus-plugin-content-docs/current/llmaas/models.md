---
title: Katalog der KI-Modelle
sidebar_position: 2
---

# Katalog der Modelle LLM as a Service

## Übersicht

Cloud Temple LLMaaS bietet **56 Large Language Models**, die sorgfältig ausgewählt und optimiert wurden, um den strengsten **SecNumCloud**-Anforderungen zu entsprechen. Unser Katalog deckt das gesamte Spektrum ab, von ultra-effizienten Mikro-Modellen bis hin zu extrem großen Modellen.

### Gesamtstatistiken

| Metrik | Wert |
|----------|--------|
| **Gesamtzahl der Modelle** | 56 Modelle |
| **Mindestkontext** | 512 Tokens |
| **Maximaler Kontext** | 1,000,000 Tokens |
| **Konformität** | SecNumCloud ✅ HDS ✅ Souveränität ✅ C5 ✅ |
| **Standort** | 100% Frankreich 🇫🇷 |

### Preisgestaltung

| Nutzungsart | Preis |
|-------------------|------|
| **Eingabetokens** | 1,80 € / Million Tokens |
| **Ausgabetokens** | 8,00 € / Million Tokens |
| **Erweitertes Reasoning** | 8,00 € / Million Tokens |
| **Dokumenten-Reranking** | 4,00 € / Million rerankerter Tokens |
| **Asynchroner Batch (Input)** | 0,90 € / Million Tokens |
| **Asynchroner Batch (Output)** | 4,00 € / Million Tokens |

## Chat- und Reasoning-Modelle

Allgemeine Modelle für Dialog, Analyse, Reasoning und mehrsprachige Aufgaben.

### cogito:32b
**Deep Cogito • 32B Parameter • Kontext : 32,000 Tokens**

Modell für erweitertes analytisches Reasoning, entwickelt für die Aufschlüsselung komplexer Probleme und logische Verifikation.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 21 Tokens/Sekunde
- **Verbrauch** : 6.32 kWh/Million Tokens
- **Lizenz** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Raisonnement` `Compréhension` `Analyse`

**Anwendungsfälle :**
- Analyse mehrfaktorieller Szenarien
- Lösung wissenschaftlicher Probleme mit formaler Beweisführung
- Expertensysteme (rechtlich, medizinisch, technisch)

---

### gemma3:27b
**Google • 27B Parameter • Kontext : 120.000 Tokens**

Multimodales Google-Modell mit integrierter Bilderkennung und Unterstützung für 140+ Sprachen. Kontext von 120K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 23 Tokens/Sekunde
- **Energieverbrauch** : 5,80 kWh/Million Tokens
- **Lizenz** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Vision` `Agent` `Großer Kontext`

**Anwendungsfälle :**
- Dokumentenanalyse mit erweitertem Kontext (120K tokens)
- Gleichzeitige Verarbeitung von Bildern und Text
- Strukturierte Extraktion aus PDFs und gescannten Dokumenten

---

### glm-4.7-flash:30b
**Zhipu AI • 30B Parameter • Kontext : 120,000 Tokens**

Schnelles Modell mit einem hervorragenden Gleichgewicht zwischen Leistung und Latenz für Reasoning und Analyse.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 88 Tokens/Sekunde
- **Verbrauch** : 1.58 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Schnell` `Großer Kontext` `Mehrsprachig`

**Anwendungsfälle :**
- Schnelle Konversationsassistenten
- Analyse langer Dokumente (120k tokens)
- Reasoning-Aufgaben mit niedriger Latenz

---

### gpt-oss:120b
**OpenAI • 120B Parameter • Kontext : 120.000 Tokens**

Open-Weight-Modell von OpenAI mit konfigurierbarem Reasoning und transparenter Chain-of-Thought.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 94 Tokens/Sekunde
- **Energieverbrauch** : 2,37 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `MoE` `Agent` `Raisonnement` `Open-Source` `Très Large`

**Anwendungsfälle :**
- Fortgeschrittene Konversationsagenten mit komplexem Reasoning
- Anwendungen, die eine Transparenz des Reasoning-Prozesses erfordern
- Kommerzielle Szenarien, die eine permissive Lizenz erfordern

---

### gpt-oss:20b
**OpenAI • 20B Parameter • Kontext : 120,000 Tokens**

Kompakte Version des OpenAI-Modells, optimiert für schnelle Inferenz mit guten Reasoning-Fähigkeiten.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 41 Tokens/Sekunde
- **Energieverbrauch** : 3.25 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `MoE` `Agent` `Reasoning` `Open-Source` `Kompakt` `Schnell`

**Anwendungsfälle :**
- Schnelle Inferenz mit guten Reasoning-Fähigkeiten
- Agentische Anwendungsfälle (Function Calling, Web-Navigation, Code-Ausführung)
- Anwendungen mit begrenztem Rechenbudget

---

### llama3.3:70b
**Meta • 70B Parameter • Kontext : 132,000 tokens**

Multilinguelles Modell von Meta, hervorragend im natürlichen Dialog und im differenzierten Verständnis in 8 Sprachen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 10 tokens/seconde
- **Verbrauch** : 13.33 kWh/million tokens
- **Lizenz** : [LLAMA 3.3 Community Licence](./licences/llama_3.3_community_licence.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Dialogue` `Multilingue`

**Anwendungsfälle :**
- Multilinguale Chatbots (8 langues)
- Analyse umfangreicher juristischer oder technischer Dokumente
- Generierung strukturierter Texte mit hoher stilistischer Treue

---

### ministral-3:14b
**Mistral AI • 14B Parameter • Kontext : 250.000 Tokens**

Das leistungsstärkste Modell der Ministral-Familie mit fortschrittlichen Reasoning- und Coding-Fähigkeiten. Kontextfenster von 250K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 28 Tokens/Sekunde
- **Energieverbrauch** : 4.74 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Hohe Leistung` `Reasoning` `Code`

**Anwendungsfälle :**
- Lösung komplexer Probleme
- Coding- und Engineering-Assistenten
- Tiefgehende Dokumentenanalyse mit Reasoning

---

### ministral-3:3b
**Mistral AI • 3B Parameter • Kontext : 250,000 Tokens**

Kompaktes Mistral-Modell, leistungsstark trotz seiner geringen Größe. Kontext von 250K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 22 Tokens/Sekunde
- **Verbrauch** : 1.75 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Kompakt` `Effizient`

**Anwendungsfälle :**
- Reaktive persönliche Assistenten
- Schnelle Klassifizierung und Routing
- Einfache Aufgaben mit großem Kontext

---

### ministral-3:8b
**Mistral AI • 8B Parameter • Kontext : 250.000 Tokens**

Mittelständiges Ministral-Modell mit einem hervorragenden Kompromiss aus Leistung und Geschwindigkeit. Kontext von 250K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 40 Tokens/Sekunde
- **Energieverbrauch** : 3.33 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Effizient` `Reasoning`

**Anwendungsfälle :**
- Fortgeschrittene Konversationsassistenten
- Dokumentenanalyse und Informationsextraktion
- Gutes Geschwindigkeits-/Qualitätsverhältnis

---

### mistral-small3.2:24b
**Mistral AI • 24B Parameter • Kontext : 128,000 Tokens**

Mistral-Modell mit verbessertem Instruction Following, robustem Function Calling und visuellen Fähigkeiten. Integrierte Erkennung problematischer Inhalte.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 28 Tokens/Sekunde
- **Verbrauch** : 5.05 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags :** `Vision` `Agent` `Sicherheit` `Instruction Following`

**Anwendungsfälle :**
- Zuverlässige Konversationsagenten mit präziser Befehlsbefolgung
- Integration externer Tools über Function Calling
- Anwendungen, die eine native Sicherheitsfilterung erfordern

---

### mistral-small4:119b
**Mistral AI • 119B Parameter • Kontext : 262,144 Tokens**

Hochleistungs-Mistral-Modell (119B) mit Vision, integrierter Sicherheit und einem Kontext von 262K Tokens. Schnell (100 t/s).

**Technische Spezifikationen:**
- **Geschwindigkeit** : 100 Tokens/Sekunde
- **Verbrauch** : 2.00 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags :** `Vision` `Agent` `Sicherheit` `Großer Kontext` `Schnell`

**Anwendungsfälle :**
- Hochleistungs-Konversationsagenten mit Vision
- Analyse sehr langer Dokumente (262K Tokens)
- Kritische Anwendungen, die Zuverlässigkeit und Sicherheit erfordern

---

### nemotron-3-super:120b
**NVIDIA • 120B Parameter • Kontext : 1.000.000 Tokens**

NVIDIA-Modell, optimiert für kollaborative Agenten, langes Reasoning und hochvolumige Workloads. Kontext von 1M Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 72 Tokens/Sekunde
- **Energieverbrauch** : 1,93 kWh/Million Tokens
- **Lizenz** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Reasoning` `Großer Kontext`

**Anwendungsfälle :**
- Autonome Agenten mit mehreren Tool-Aufrufen
- Automatisierung hochvolumiger Workflows
- Analyse langer Dokumente mit präziser Extraktion

---

### nemotron-cascade:30b
**NVIDIA • 30B Parameter • Kontext : 1,000,000 Tokens**

NVIDIA-Modell, spezialisiert auf Mathematik (médaille d'or IMO 2025) und Problemdekomposition. Kontext: 1M Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 130 Tokens/Sekunde
- **Energieverbrauch** : 1.93 kWh/Million Tokens
- **Lizenz** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `Maths`

**Anwendungsfälle :**
- Lösung komplexer mathematischer Probleme
- Agenten mit mehreren Tool-Aufrufen
- Analyse langer Dokumente

---

### nemotron3-nano:30b
**NVIDIA • 30B Parameter • Kontext : 1,000,000 Tokens**

Ultra-schnelles NVIDIA-Modell (160 t/s) mit Reasoning und Function Calling. Kontext von 1M Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 160 Tokens/Sekunde
- **Energieverbrauch** : 1.56 kWh/Million Tokens
- **Lizenz** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `Rapide`

**Anwendungsfälle :**
- Autonome Agenten, die schnelle Antworten benötigen
- Logisches Reasoning und Problemlösung
- Analyse langer Dokumente mit präziser Extraktion

---

### olmo-3:32b
**AllenAI • 32B Parameter • Kontext : 65,536 Tokens**

Erstes vollständig offenes Reasoning-Modell in diesem Maßstab. Vollständige Transparenz (données, code, poids).

**Technische Spezifikationen:**
- **Geschwindigkeit** : 22 Tokens/Sekunde
- **Verbrauch** : 5.98 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Open-Source` `Grand Contexte` `Raisonnement` `Transparent` `Code` `Haute Performance`

**Anwendungsfälle :**
- Komplexes Reasoning und mehrstufige Problemlösung
- Softwareentwicklung mit Transparenz des Entscheidungsprozesses
- Kritische Aufgaben, die vollständige Auditierbarkeit erfordern

---

### olmo-3:7b
**AllenAI • 7B Parameter • Kontext : 65.536 Tokens**

Vollständig offenes und effizientes Modell, hervorragend in Mathematik und Programmierung mit vollständiger Transparenz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 35 Tokens/Sekunde
- **Energieverbrauch** : 1.13 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Open-Source` `Großer Kontext` `Transparent` `Effizient` `Mathematik` `Code`

**Anwendungsfälle :**
- Akademische Forschung, die vollständige Reproduzierbarkeit erfordert
- Programmierung und Lösung mathematischer Probleme
- Dokumentenanalyse mit vollständiger Nachverfolgbarkeit

---

### qwen3-2507-think:4b
**Qwen Team • 4B Parameter • Kontext : 250.000 Tokens**

Kompaktes Modell, optimiert für tiefes Reasoning (Logik, Mathematik, Naturwissenschaften, Code). Kontext von 250K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 55 Tokens/Sekunde
- **Stromverbrauch** : 2.42 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Reasoning` `Großer Kontext` `Kompakt` `Schnell`

**Anwendungsfälle :**
- Komplexes Reasoning (Logik, Mathematik, Naturwissenschaften, Code)
- Agents mit großem Konversationsverlauf (250K Tokens)
- Analyse umfangreicher Dokumente mit tiefem Reasoning

---

### qwen3-2507:235b
**Qwen Team • 235B Parameter • Kontext : 200,000 Tokens**

Leistungsstärkstes Modell im Katalog (235B paramètres, 22B actifs). Hervorragend in Mathematik, Programmierung und logischem Reasoning.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 56 Tokens/Sekunde
- **Verbrauch** : 3.97 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `MoE` `Agent` `Raisonnement` `Très Large`

**Anwendungsfälle :**
- Lösung komplexer mathematischer und logischer Probleme
- Aufgaben, die ein umfangreiches Wissensfundament erfordern
- Fortgeschrittener Programmierassistent

---

### qwen3-omni:30b
**Qwen Team • 30B Parameter • Kontext : 32,768 Tokens**

Nativ omnimodales Modell – verarbeitet gleichzeitig Text, Bilder, Video und Audio.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 19 Tokens/Sekunde
- **Energieverbrauch** : 7.43 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Omni` `Audio` `Vision` `Agent` `Multimodal`

**Anwendungsfälle :**
- Multimodale Interaktionen (Text + Bild + Audio + Video)
- Kombinierte Video- und Audioanalyse
- Intelligente Assistenten der nächsten Generation

---

### qwen3.5:0.8b
**Qwen Team • 0.8B Parameter • Kontext : 250,000 Tokens**

Ultra-leichtes Modell mit einem außergewöhnlichen Kontext von 250K Tokens — bemerkenswert für ein Modell dieser Größe.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 16 Tokens/Sekunde
- **Energieverbrauch** : 2.39 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
✅ Werkzeuge/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Compact` `Efficient` `Grand Contexte` `Multilingue`

**Anwendungsfälle :**
- Textverarbeitung mit sehr großem Kontext (250K Tokens)
- Schnelle Klassifizierung und Sortierung
- Leichte Assistenten mit langem Verlaufsgedächtnis

---

### qwen3.5:4b
**Qwen Team • 4B Parameter • Kontext : 250,000 Tokens**

Kompaktes Qwen3.5-Modell mit einem guten Kompromiss aus Leistung und Effizienz sowie einem Kontext von 250K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 37 Tokens/Sekunde
- **Verbrauch** : 3.64 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Kompakt` `Effizient` `Großer Kontext` `Mehrsprachig`

**Anwendungsfälle :**
- Konversationsassistenten mit großem Kontext
- Textzusammenfassung und Klassifizierung
- Einfache Codierungsaufgaben

---

### qwen3.5:9b
**Qwen Team • 9B Parameter • Kontext : 250,000 Tokens**

Zwischenmodell Qwen3.5 mit starkem Reasoning und erweitertem Kontext von 250K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 32 Tokens/Sekunde
- **Energieverbrauch** : 4.23 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Effizient` `Großer Kontext` `Mehrsprachig` `Reasoning`

**Anwendungsfälle :**
- Fortgeschrittene Konversationsassistenten
- Dokumentenanalyse und Informationsextraktion
- Reasoning-Aufgaben mittlerer Komplexität

---

### qwen3.6:27b
**Qwen Team • 27B Parameter • Kontext : 1.000.000 Tokens**

Referenzmodell für allgemeine Zwecke mit einem nativen Kontext von 1M Tokens. Überzeugt durch starkes Reasoning, präzise Instruktionsbefolgung und Mehrsprachigkeit.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 80 Tokens/Sekunde
- **Stromverbrauch** : 2,78 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Agent` `Großer Kontext` `Mehrsprachig` `Vision` `Reasoning`

**Anwendungsfälle:**
- Vielseitige Assistenten mit präziser Instruktionsbefolgung
- Analyse sehr umfangreicher Dokumente (1M Tokens)
- Mehrsprachige Anwendungen mit logischem Reasoning
- Programmierung und Codegenerierung

---

### qwen3:0.6b
**Qwen Team • 0.6B Parameter • Kontext : 40,000 Tokens**

Ultra-schnelles Mikro-Modell für einfache Aufgaben und Routing. 40K Tokens Kontext.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 46 Tokens/Sekunde
- **Verbrauch** : 1.33 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Compact` `Rapide` `Efficient` `Multilingue`

**Anwendungsfälle :**
- Schnelle Klassifizierung und Sortierung
- Leichte Assistenten mit geringer Latenz
- Routing in Multi-Model-Architekturen

---

## Modelle für Programmierung & Agenten

Modelle, die auf Code, Softwareentwicklung und autonome Agenten spezialisiert sind.

### devstral-small-2:24b
**Mistral AI & All Hands AI • 24B Parameter • Kontext : 200,000 Tokens**

State-of-the-Art Agent-Modell für die Softwareentwicklung. Leistungen nahe an Modellen mit >100B Parametern für Code. Integrierte Vision.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 33 Tokens/Sekunde
- **Verbrauch** : 4.23 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags :** `Agent` `Programmierung` `Vision` `Open-Source` `Großer Kontext` `Schnell`

**Anwendungsfälle :**
- Autonome Coding-Agents
- Schnelles Code-Refactoring
- Iterative Engineering-Aufgaben

---

### functiongemma:270m
**Google • 270M Parameter • Kontext : 32.768 Tokens**

Mikromodell, spezialisiert auf die Erkennung von Funktionsaufrufen. Ideal als Router in einer agentischen Architektur.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 40 Tokens/Sekunde
- **Energieverbrauch** : 0,97 kWh/Million Tokens
- **Lizenz** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Compact` `Efficient` `Function Calling`

**Anwendungsfälle :**
- Tool-Router in einer agentischen Architektur
- Erkennung von Absichten für Funktionsaufrufe
- Schnelle Vorfilterung vor dem Routing

---

### qwen-coder-next:80b
**Qwen Team • 80B Parameter • Kontext : 250.000 Tokens**

Spitzenmodell für Code und komplexes Reasoning. Kontext von 250K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 97 Tokens/Sekunde
- **Verbrauch** : 2,29 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Programmierung` `MoE` `Großer Kontext`

**Anwendungsfälle :**
- Erweiterte Programmierassistent (Repository-Ebene)
- Analyse und Refaktorierung komplexen Codes
- Autonome Software-Engineering-Agenten

---

### qwen3-next:80b
**Qwen Team • 80B Parameter • Kontext : 250,000 Tokens**

Vielseitiges 80B-Modell, optimiert für große Kontexte, Function Calling und strukturiertes Reasoning.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 67 Tokens/Sekunde
- **Verbrauch** : 2.09 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Großer Kontext` `MoE`

**Anwendungsfälle :**
- Fortgeschrittene Konversationsagenten mit Tool-Integration
- Analyse sehr umfangreicher Dokumente
- Codegenerierung und strukturiertes Reasoning

---

### qwen3.6:35b
**Qwen Team • 35B Parameter • Kontext : 1,000,000 Tokens**

Führend in der agentenbasierten Softwareentwicklung (SWE-bench 73.4%). Kontext von 1M Tokens, integrierte Vision und Tool-Calling.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 121 Tokens/Sekunde
- **Stromverbrauch** : 2,07 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Werkzeuge/Agent • ✅ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Programmation` `Grand Contexte` `MoE` `Vision` `Raisonnement`

**Anwendungsfälle :**
- Agentenbasierter Coding-Assistent in IDEs (Cursor, Continue.dev, VS Code Copilot)
- Analyse vollständiger Codebasen (1M Tokens)
- Automatisierte Code-Reviews und intelligente CI/CD-Pipelines
- Behebung komplexer Fehler mit mehrstufigem Reasoning

---

### rnj-1:8b
**Essential AI • 8B Parameter • Kontext : 32,000 Tokens**

STEM-spezialisiertes Modell — überzeugt in Code (83.5% HumanEval+), Mathematik und Wissenschaft.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 23 Tokens/Sekunde
- **Verbrauch** : 1.69 kWh/Million Tokens
- **Lizenz** : [Open Weights](./licences/open_weights.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Code` `Maths` `STEM` `Raisonnement` `Efficient`

**Anwendungsfälle :**
- Erweiterte Codegenerierung
- Lösung komplexer mathematischer Probleme
- Wissenschaftliche und technische Aufgaben

---

## Vision- und Multimodale Modelle

Modelle zur Analyse von Bildern, Videos, OCR und visuellen Dokumenten.

### deepseek-ocr
**DeepSeek AI • 3B Parameter • Kontext : 8.192 Tokens**

Spezialisiertes OCR-Modell zur hochpräzisen Textextraktion mit Beibehaltung der Formatierung (tableaux, formules).

**Technische Spezifikationen:**
- **Geschwindigkeit** : 84 Tokens/Sekunde
- **Energieverbrauch** : 0.66 kWh/Million Tokens
- **Lizenz** : [MIT licence](./licences/mit_licence.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Vision` `OCR` `Efficient`

**Anwendungsfälle :**
- Extraktion strukturierter Texte (Markdown/LaTeX) aus Bildern/PDFs
- Digitalisierung von Dokumenten mit Tabellen und Formeln

---

### gemma4:31b
**Google • 31B Parameter • Kontext : 250,000 Tokens**

Multimodales dichtes Modell von Google, weltweit auf Platz 3 auf Arena AI. Erweiterte Bildanalyse, Reasoning und Programmierung. Kontext 250K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 59 Tokens/Sekunde
- **Stromverbrauch** : 3.77 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Großer Kontext` `Vision` `Reasoning` `Mehrsprachig` `Open-Source`

**Anwendungsfälle :**
- Autonome Agenten mit Reasoning und Tool-Aufrufen
- Analyse umfangreicher Dokumente mit Vision
- Visuelles Verständnis (OCR, graphiques, documents scannés)

---

### gemma4:e2b
**Google • 31B (E2B) Parameter • Kontext : 128,000 Tokens**

Ultra-schnelle Variante (125 t/s) von Gemma 4 mit Vision-Funktion. Hervorragende Energieeffizienz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 125 Tokens/Sekunde
- **Verbrauch** : 1.11 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Vision` `Schnell` `Effizient`

**Anwendungsfälle :**
- Bildanalyse mit niedriger Latenz
- Umfangreiche Dokumente mit geringem Ressourcenverbrauch

---

### gemma4:e4b
**Google • 31B (E4B) Parameter • Kontext : 128.000 Tokens**

Variante von Gemma 4 mit besserem Qualitäts-/Geschwindigkeitsverhältnis als die E2B-Version. Integrierte Vision.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 85 Tokens/Sekunde
- **Energieverbrauch** : 1,63 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Vision` `Schnell`

**Anwendungsfälle :**
- Analyse von Dokumenten und Bildern mit gutem Qualitäts-/Geschwindigkeitsverhältnis
- Schnelle Alternative für Vision-Aufgaben

---

### granite3.2-vision:2b
**IBM • 2B Parameter • Kontext: 16.384 Tokens**

Kompaktes IBM Granite Vision-Modell für schnelles OCR und die Datenextraktion aus gescannten Dokumenten.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 49 Tokens/Sekunde
- **Verbrauch** : 0,80 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Vision` `Kompakt` `Effizient` `OCR`

**Anwendungsfälle :**
- Schnelles OCR für leichte Dokumente
- Datenextraktion aus Bildern
- Energieeffiziente visuelle Analyse

---

### qwen3-vl:235b
**Qwen Team • 235B Parameter • Kontext : 200,000 Tokens**

Das leistungsstärkste multimodale Modell im Katalog. Spitzentechnologie im visuellen Verständnis und außergewöhnliche Reasoning-Fähigkeiten.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 24 Tokens/Sekunde
- **Energieverbrauch** : 5,56 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags :** `Agent` `Reasoning` `Großer Kontext` `Vision`

**Anwendungsfälle :**
- Komplexe Dokumentenautomatisierung (OCR multilingue, extraction structurée)
- Intelligente visuelle Agenten
- Fortgeschrittene wissenschaftliche Analyse (STEM, raisonnement spatial)
- Multimodales RAG für Dokumente und Videos

---

### qwen3-vl:2b
**Qwen Team • 2B Parameter • Kontext : 250.000 Tokens**

Ultra-kompaktes Vision-Modell für schnelles OCR, Objekterkennung und Embedded-Anwendungen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 64 Tokens/Sekunde
- **Energieverbrauch** : 0,95 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Vision` `Compact` `Efficient` `Multimodal` `OCR`

**Anwendungsfälle :**
- Echtzeit-Bildanalyse
- OCR und einfache Dokumentenanalyse
- Schnelle visuelle Sortierung und Klassifizierung

---

### qwen3-vl:30b
**Qwen Team • 30B Parameter • Kontext : 250.000 Tokens**

Leistungsfähiges multimodales Modell für OCR, Objekterkennung, Videoanalyse und raumzeitliches Reasoning.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 39 Tokens/Sekunde
- **Verbrauch** : 3,39 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Großer Kontext` `Multimodal` `Video` `OCR`

**Anwendungsfälle:**
- Analyse langer Videos und intelligente Überwachung
- Extraktion strukturierter Daten (Dokumente, Tabellen, Diagramme)
- Visuelle Assistenten mit räumlichem Verständnis

---

### qwen3-vl:32b
**Qwen Team • 32B Parameter • Kontext : 250,000 Tokens**

Hochleistungsvariante für die anspruchsvollsten Vision-Aufgaben. Kontext 250K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 17 Tokens/Sekunde
- **Verbrauch** : 7.75 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Vision` `Agent` `Großer Kontext` `Multimodal` `Video` `OCR`

**Anwendungsfälle :**
- Wissenschaftliche und technische Analyse hochauflösender Bilder
- Automatisierung komplexer visueller Prozesse
- Detaillierte Erfassung dynamischer Szenen

---

### qwen3-vl:4b
**Qwen Team • 4B Parameter • Kontext : 250,000 Tokens**

Kompaktes und schnelles Vision-Modell für die Dokumentenanalyse und das Video-Verständnis.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 57 Tokens/Sekunde
- **Energieverbrauch** : 2.34 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Vision` `Compact` `Multimodal` `Efficient` `Vidéo` `OCR`

**Anwendungsfälle :**
- Automatisierte Dokumentenanalyse (factures, formulaires)
- Verständnis von Videoinhalten
- Interaktive visuelle Assistenten

---

### qwen3-vl:8b
**Qwen Team • 8B Parameter • Kontext : 250,000 Tokens**

Visuelles Modell mittlerer Größe — guter Kompromiss zwischen Leistung und Ressourcenverbrauch. Kontext 250K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 39 Tokens/Sekunde
- **Energieverbrauch** : 3.38 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Vision` `Multimodal` `Efficient` `Vidéo` `OCR`

**Anwendungsfälle :**
- Automatisierte Dokumentenanalyse
- Verständnis von Videoinhalten
- Interaktive visuelle Assistenten

---

## Embedding-Modelle

Modelle für die semantische Suche und Retrieval-Augmented Generation (RAG).

### bge-m3:567m
**BAAI • 567M Parameter • Kontext : 8.192 Tokens**

State-of-the-Art mehrsprachiges Embedding (100+ Sprachen). Unterstützt dichte, sparse und multi-vektorielle Suche.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 171 Tokens/Sekunde
- **Verbrauch** : 0,36 kWh/Million Tokens
- **Lizenz** : [MIT](./licences/mit.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Embedding` `Mehrsprachig` `Effizient`

**Anwendungsfälle :**
- Mehrsprachige semantische Suche
- Retrieval-Augmented Generation (RAG)
- Clustering und Klassifizierung von Dokumenten

---

### embeddinggemma:300m
**Google • 300M Parameter • Kontext : 2,048 Tokens**

Mehrsprachiges Google-Embedding (100+ langues), optimiert für semantische Suche und Abruf.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 175 Tokens/Sekunde
- **Energieverbrauch** : 0.35 kWh/Million Tokens
- **Lizenz** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Embedding` `Kompakt` `Semantisch` `Effizient` `Mehrsprachig`

**Anwendungsfälle :**
- Informationsrecherche und -abruf
- Dokumentenklassifizierung und -clustering
- Semantische Ähnlichkeitssuche

---

### granite-embedding:278m
**IBM • 278M Parameter • Kontext : 512 Tokens**

Ultra-kompaktes IBM-Embedding für semantische Suche mit minimaler Latenz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 196.3 Tokens/Sekunde
- **Energieverbrauch** : 0.31 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Embedding` `Compact` `Efficient`

**Anwendungsfälle :**
- Hochfrequente semantische Suche
- Dokumenten-Clustering

---

### qwen3-embedding:0.6b
**Qwen Team • 0.6B Parameter • Kontext : 32,768 Tokens**

Ultra-leichtes und schnelles Embedding für semantische Suche mit niedriger Latenz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : N/A
- **Stromverbrauch** : 0.57 kWh/million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Embedding` `Compact` `Efficient`

**Anwendungsfälle :**
- Schnelle semantische Suche
- Echtzeit-Textklassifizierung

---

### qwen3-embedding:4b
**Qwen Team • 4B Parameter • Kontextfenster: 40.000 Tokens**

High-Performance-Embedding mit tiefem semantischem Verständnis und erweitertem Kontext (40K tokens).

**Technische Spezifikationen:**
- **Geschwindigkeit** : N/A
- **Stromverbrauch** : 0.57 kWh/million tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Embedding` `Grand Contexte` `Efficient`

**Anwendungsfälle :**
- Semantische Suche in langen Dokumenten
- RAG mit erweitertem Kontext
- Präzise semantische Analyse

---

### qwen3-embedding:8b
**Qwen Team • 8B Parameter • Kontext : 40,000 Tokens**

Embedding mit hoher Kapazität und dem besten semantischen Verständnis der Qwen3-Familie. Erweitertes Kontextfenster (40K tokens).

**Technische Spezifikationen:**
- **Geschwindigkeit** : N/A
- **Energieverbrauch** : 0.57 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Embedding` `Großer Kontext` `Hohe Leistung`

**Anwendungsfälle :**
- Semantische Suche mit hoher Präzision
- Erweitertes RAG mit erweitertem Kontext
- Semantische Analyse komplexer Dokumente

---

## Reranking-Modelle

Modelle zur Neureihung von Ergebnissen in RAG-Pipelines.

### bge-reranker-large
**BAAI • 335M Parameter • Kontext : 512 Tokens**

Hochleistungs-Reranking-Modell der BGE-Familie, mehrsprachig.

**Technische Spezifikationen:**
- **Geschwindigkeit** : N/A
- **Ressourcenverbrauch** : N/A
- **Lizenz** : [MIT](./licences/mit.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Reranker` `Hohe Leistung`

**Anwendungsfälle :**
- Mehrsprachiges Reranking für RAG

---

### nvidia/llama-nemotron-rerank-vl-1b-v2
**NVIDIA • 1B Parameter • Kontext : 4.096 Tokens**

Cohere-API-kompatibles Reranking-Modell (/v1/rerank und /v2/rerank). Sortiert Dokumente nach ihrer Relevanz in Bezug auf eine Abfrage.

**Technische Spezifikationen:**
- **Geschwindigkeit** : N/A
- **Verbrauch** : N/A
- **Lizenz** : [NVIDIA Open Model License](./licences/nvidia_open_model_license.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Rerank` `RAG` `Compact`

**Anwendungsfälle :**
- Neusortierung semantischer Suchergebnisse
- Optimierung der Relevanz in RAG-Pipelines

---

### qwen3-reranker:0.6b
**Qwen Team • 0.6B Parameter • Kontext : 4.096 Tokens**

Kompaktes und effizientes Reranking-Modell für schnelles Reranking.

**Technische Spezifikationen:**
- **Geschwindigkeit** : N/A
- **Ressourcenverbrauch** : N/A
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
❌ Werkzeuge/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Reranker` `Compact` `Efficient`

**Anwendungsfälle :**
- Schnelles Reranking für RAG

---

### qwen3-reranker:4b
**Qwen Team • 4B Parameter • Kontext : 4.096 Tokens**

Leistungsstarkes Reranking-Modell mit hoher kontextueller Verständnisfähigkeit.

**Technische Spezifikationen:**
- **Geschwindigkeit** : N/A
- **Speicherbedarf** : N/A
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Sprache** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Reranker` `Performance`

**Anwendungsfälle :**
- Hochwertiges Reranking für RAG

---

## Sicherheitsmodelle

Modelle für Inhaltsfilterung, Compliance und Guardrails.

### granite3-guardian:2b
**IBM • 2B Parameter • Kontext : 8,192 Tokens**

Kompakte Version des Sicherheitsmodells Granite Guardian für die Filterung mit niedriger Latenz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 60 Tokens/Sekunde
- **Energieverbrauch** : 0.65 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags :** `Sécurité` `Guardrails` `Compact` `Efficient`

**Anwendungsfälle :**
- Latenzarme Guardrails in agentischen Workflows
- Echtzeit-Sicherheitsfilterung

---

### granite3-guardian:8b
**IBM • 8B Parameter • Kontext : 8,192 Tokens**

Sicherheitsspezialmodell zur Erkennung problematischer Inhalte, Jailbreaks und regulatorischer Konformität.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 45 Tokens/Sekunde
- **Energieverbrauch** : 3.09 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags :** `Sicherheit` `Guardrails` `Konformität` `Filterung`

**Anwendungsfälle :**
- Erkennung problematischer Inhalte und Jailbreaks
- Sicherheitsfilterung vor/nach der Generierung
- Regulatorische Konformität (RGPD, HDS)

---

## Übersetzungsmodelle

Modelle, die auf hochtreue mehrsprachige Übersetzung spezialisiert sind.

### translategemma:12b
**Google • 12B Parameter • Kontext : 128.000 Tokens**

Hochpräzise Übersetzung für 55 Sprachen mit einem Kontext von 128K Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 27 Tokens/Sekunde
- **Verbrauch** : 4,87 kWh/Million Tokens
- **Lizenz** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Übersetzung` `Mehrsprachig` `Spezialisiert`

**Anwendungsfälle :**
- Übersetzung langer Dokumente
- Kommunikation zwischen Sprachen
- Inhaltslokalisierung

---

### translategemma:27b
**Google • 27B Parameter • Kontext : 120,000 Tokens**

Hochleistungsübersetzung für 55 Sprachen. Überlegene Qualität für komplexe und technische Inhalte.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 17 Tokens/Sekunde
- **Verbrauch** : 7.84 kWh/Million Tokens
- **Lizenz** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Übersetzung` `Mehrsprachig` `Spezialisiert` `Hochleistung`

**Anwendungsfälle :**
- Hochpräzise Übersetzung
- Übersetzung technischer Dokumente
- Literarische und kulturelle Nuancen

---

### translategemma:4b
**Google • 4B Parameter • Kontext : 128,000 Tokens**

Schnelle und effiziente Übersetzung für 55 Sprachen. Ideal für die Echtzeit-Lokalisierung.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 31 Tokens/Sekunde
- **Verbrauch** : 1.25 kWh/Million Tokens
- **Lizenz** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Lokalisierung** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Übersetzung` `Mehrsprachig` `Spezialisiert` `Effizient`

**Anwendungsfälle :**
- Schnelle Textübersetzung
- Echtzeit-Lokalisierung
- Übersetzung mit begrenztem Budget

---

## Audio- und Bildmodelle

Modelle für die Audio-Transkription und Bildgenerierung.

### voxtral
**Mistral AI • 4B Parameter • Kontext : 32,768 Tokens**

Echtzeit-Audiotranskription über WebSocket. Streaming-Spracherkennung mit geringer Latenz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : N/A
- **Verbrauch** : N/A
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `ASR` `Audio` `Realtime` `WebSocket`

**Anwendungsfälle :**
- Echtzeit-Audiotranskription (Streaming)
- Sprachassistenten
- Live-Untertitelung

---

### z-image:16b
**Community • 16B Parameter • Kontext : 0 Tokens**

Bildgenerierung aus Text-Prompts, kompatibel mit der OpenAI-API /v1/images/generations.

**Technische Spezifikationen:**
- **Geschwindigkeit** : N/A
- **Verbrauch** : N/A
- **Lizenz** : [Open Weights](./licences/open_weights.licence.md)
- **Region** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Image Generation` `Kreativ` `Multimodal`

**Anwendungsfälle :**
- Bildgenerierung aus Textbeschreibungen
- Erstellung visueller Inhalte
- Schnelle visuelle Prototypisierung

---

## Empfohlene Anwendungsfälle

### Mehrsprachiger Dialog

Chatbots und Assistenten, die in mehreren Sprachen kommunizieren können, mit automatischer Spracherkennung und Kontextbeibehaltung

**Empfohlene Modelle:**

- nemotron-3-super:120b
- qwen3.6:27b
- nemotron3-nano:30b
- gpt-oss:120b

### Analyse langer Dokumente

Verarbeitung umfangreicher Dokumente (>100 Seiten) mit Extraktion von Schlüsselinformationen, Zusammenfassungen und Beantwortung von Fragen

**Empfohlene Modelle:**

- nemotron-3-super:120b
- qwen3.6:27b
- qwen3-2507:235b

### Programmierung und Entwicklung

Generierung, Optimierung und Debugging von Code in mehreren Sprachen, Refactoring und Erstellung von Tests

**Empfohlene Modelle:**

- qwen3.6:35b
- qwen-coder-next:80b
- devstral-small-2:24b
- nemotron-3-super:120b

### Visuelle Analyse

Verarbeitung von Bildern und visuellen Dokumenten, OCR, Interpretation von Diagrammen und Tabellen

**Empfohlene Modelle:**

- qwen3-vl:235b
- gemma4:31b
- deepseek-ocr
- qwen3-vl:30b

### Sicherheit und Compliance

Filterung sensibler Inhalte, Jailbreak-Erkennung, DSGVO/HDS-Konformität

**Empfohlene Modelle:**

- granite3-guardian:8b
- granite3-guardian:2b
- mistral-small4:119b

### Schlanke Bereitstellungen

Anwendungen, die einen minimalen Footprint, niedrige Latenz und geringen Ressourcenverbrauch erfordern

**Empfohlene Modelle:**

- qwen3.5:0.8b
- qwen3-vl:2b
- ministral-3:3b

### RAG (Retrieval-Augmented Generation)

Vollständige Pipelines für semantische Suche, Re-Ranking und retrieval-augmentierte Generierung

**Empfohlene Modelle:**

- bge-m3:567m
- nvidia/llama-nemotron-rerank-vl-1b-v2
- qwen3.6:27b