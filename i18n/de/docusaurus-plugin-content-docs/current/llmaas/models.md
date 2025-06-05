---
title: Katalog der KI-Modelle
sidebar_position: 2
---

# Katalog der LLM-as-a-Service-Modelle

## Übersicht

Cloud Temple LLMaaS bietet **36 große Sprachmodelle**, sorgfältig ausgewählt und optimiert, um die strengsten Anforderungen von **SecNumCloud** zu erfüllen. Unser Katalog umfasst das gesamte Spektrum, von ultra-effizienten Mikromodellen bis hin zu extrem großen Modellen.

### Globale Statistiken

| Metrik | Wert |
|--------|------|
| **Gesamtanzahl der Modelle** | 36 Modelle |
| **Minimale Kontextlänge** | 8.192 Tokens |
| **Maximale Kontextlänge** | 120.000 Tokens |
| **Konformität** | SecNumCloud ✅ HDS ✅ Souveränität ✅ C5 ✅ |
| **Standort** | 100% Frankreich 🇫🇷 |

### Preise

| Nutzungstyp | Preis |
|-------------|-------|
| **Eingabetokens** | 0,90 € / Million Tokens |
| **Ausgabetokens** | 4,00 € / Million Tokens |
| **Erweitertes Denken** | 21,00 € / Million Tokens |

## Große Modelle

### Llama 3.3 70B
**Meta • 70B Parameter • Kontext: 60.000 Tokens**

Hochleistungs-Mehrsprachmodell von Meta, optimiert für natürliche Gespräche, komplexes Denken und feine Anweisungsverarbeitung.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 30 Tokens/Sekunde
- **Verbrauch** : 8,87 kWh/Million Tokens
- **Lizenz** : [LLAMA 3.3 Community Lizenz](./licences/llama3.3_70b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Agent` `Dialog` `Mehrsprachig`

**Anwendungsfälle:**
- Mehrsprachige Chatbots, die 8 Sprachen gleichzeitig unterstützen
- Ausführung komplexer, verknüpfter Anweisungen (Prompt Chaining)
- Verarbeitung eines Dialogfensters mit 60K Tokens für Konversationshistorien
- Analyse umfangreicher juristischer oder technischer Dokumente (>100 Seiten)
- Generierung strukturierter Texte mit Genauigkeit bei Stilvorgaben

---

### Qwen3 235B
**Qwen Team • 235B Parameter • Kontext: 32.000 Tokens**

Neuestes, sehr großes Qwen3-Modell mit erweiterten Fähigkeiten für komplexe Aufgaben.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 21 Tokens/Sekunde
- **Verbrauch** : 6,35 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Agent` `Denken` `Mehrsprachig` `Sehr groß`

**Anwendungsfälle:**
- Sehr fortgeschrittene conversationelle Agenten mit großem Kontext und Werkzeugintegration (MCP)
- Lösung extrem komplexer Probleme (Mathematik, Code)
- Analyse und Generierung sehr umfangreicher und technischer Dokumente
- Multisprachige Anwendungen (>100 Sprachen), die eine hochgenaue Verständnis- und Generierungsfähigkeit erfordern

---

### DeepSeek-R1 671B
**DeepSeek AI • 671B Parameter • Kontext: 32.000 Tokens**

Extrem großes Modell von DeepSeek AI, optimiert für maximale Denk- und Generierungsfähigkeiten.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 16 Tokens/Sekunde
- **Verbrauch** : 8,33 kWh/Million Tokens
- **Lizenz** : [MIT Lizenz](./licences/deepseek-r1_671b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Denken` `Extrem groß`

**Anwendungsfälle:**
- Spitzenleistungen im Denken
- Generierung von Text mit Premium-Qualität
- Forschung und Entwicklung in der KI

---

### Gemma 3 27B
**Google • 27B Parameter • Kontext: 120.000 Tokens**

Revolutionäres Google-Modell mit optimaler Balance zwischen Leistung und Effizienz, mit einem außergewöhnlichen Leistungs-Kosten-Verhältnis für anspruchsvolle professionelle Anwendungen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 68 Tokens/Sekunde ⚡
- **Verbrauch** : 3,91 kWh/Million Tokens
- **Lizenz** : [Google Gemma Nutzungsbedingungen](./licences/gemma3_27b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Schnell` `Großer Kontext`

**Anwendungsfälle:**
- Dokumentenanalyse mit erweitertem Kontext bis zu 120K Tokens (ca. 400 Seiten)
- Semantische Suche in umfangreichen Dokumentenbanken
- gleichzeitige Verarbeitung von Bildern und Texten dank multimodaler Fähigkeiten
- Strukturierte Datenextraktion aus PDFs und gescannten Dokumenten
- Integration mit externen Tools über die Funktionen-API

---

### Qwen3 30B-A3B FP8
**Qwen Team • 30B-A3B Parameter • Kontext: 32.000 Tokens**

Neuestes MoE FP8-Modell (3B aktiviert) mit hybriden Denkmodi und erweiterten Agentenfähigkeiten.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 103 Tokens/Sekunde ⚡
- **Verbrauch** : 2,58 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `MoE` `Agent` `Denken` `Schnell` `Mehrsprachig`

**Anwendungsfälle:**
- Fortgeschrittene conversationelle Agenten mit Werkzeugintegration (MCP)
- Lösung komplexer Probleme (Mathematik, Code) mit "Denk"-Modus
- Multisprachige Anwendungen (>100 Sprachen)
- Szenarien, die ein Kosten-Leistungs-Verhältnis (MoE) auf VLLM erfordern
- Engagierte Mehr-Runden-Dialoge mit präziser Anweisungsverfolgung

---

### DeepSeek-R1 70B
**DeepSeek AI • 70B Parameter • Kontext: 32.000 Tokens**

70B-Modell von DeepSeek AI

**Technische Spezifikationen:**
- **Geschwindigkeit** : 20 Tokens/Sekunde
- **Verbrauch** : 11,44 kWh/Million Tokens
- **Lizenz** : [MIT Lizenz](./licences/deepseek-r1_70b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Denken` `Groß`

**Anwendungsfälle:**
- Komplexe Denkaufgaben
- Hochwertige Textgenerierung
- Tiefgehende Dokumentenanalyse (innerhalb des Kontexts von 27k)

---

## Spezialisierte Modelle

### Qwen3 14B
**Qwen Team • 14B Parameter • Kontext: 32.000 Tokens**

Neuestes dichtes Qwen3-Modell (14B) mit Leistungen, die denen von Qwen2.5 32B entsprechen, aber mit besserer Effizienz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 69 Tokens/Sekunde ⚡
- **Verbrauch** : 2,65 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Agent` `Denken` `Schnell` `Mehrsprachig`

**Anwendungsfälle:**
- Allgemeine Aufgaben mit Leistung und großem Kontext
- Kreative und technische Inhaltsgenerierung
- Datenanalyse und komplexes Denken
- Integration mit externen Tools über Funktionenaufrufe

---

### Gemma 3 12B
**Google • 12B Parameter • Kontext: 120.000 Tokens**

Mittleres Modell der Gemma 3-Reihe mit hervorragendem Gleichgewicht zwischen Leistung und Effizienz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 67 Tokens/Sekunde ⚡
- **Verbrauch** : 2,73 kWh/Million Tokens
- **Lizenz** : [Google Gemma Nutzungsbedingungen](./licences/gemma3_12b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ✅ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Vision` `Schnell` `Großer Kontext`

**Anwendungsfälle:**
- Multimodale Anwendungen mit moderaten Ressourcenanforderungen
- Dokumentenverarbeitung mit Standard-Kontext (bis zu 100 Seiten)
- Kombinierte Textgenerierung und Bildanalyse
- Deployment auf Standard-GPUs ohne spezialisierte Infrastruktur
- Fortschrittliche Chatbots mit integrierten visuellen und textuellen Fähigkeiten

---

### Gemma 3 4B
**Google • 4B Parameter • Kontext: 120.000 Tokens**

Kompaktes Google-Modell mit hervorragenden Leistungen in einem leichtgewichtigen und wirtschaftlichen Format.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 58 Tokens/Sekunde ⚡
- **Verbrauch** : 0,93 kWh/Million Tokens 🌱
- **Lizenz** : [Google Gemma Nutzungsbedingungen](./licences/gemma3_4b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ✅ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Vision` `Schnell` `Kompakt` `Großer Kontext` `Effizient`

**Anwendungsfälle:**
- Eingebettete Anwendungen und Edge Computing mit Bildverarbeitung
- Reaktive multimodale Chatbots mit geringer Latenz
- Skalierbare Deployment mit visuellen und textuellen Fähigkeiten
- Mobile Anwendungen mit Bild- und Textanalyse
- Verarbeitung einfacher bis mittelkomplexer visueller Anfragen mit hoher Leistung

---

### Gemma 3 1B
**Google • 1B Parameter • Kontext: 32.000 Tokens**

Ultra-leichtes Mikromodell für Deployment auf Geräten mit sehr geringen Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 41 Tokens/Sekunde
- **Verbrauch** : 1,32 kWh/Million Tokens 🌱
- **Lizenz** : [Google Gemma Nutzungsbedingungen](./licences/gemma3_1b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Ultra-kompakt` `Eingebettet` `Effizient`

**Anwendungsfälle:**
- Deployment auf IoT-Geräten und eingebetteten Systemen mit API-Integration
- Anwendungen, die lokale Inferenz auf CPUs mit Funktionsaufrufen erfordern
- Grundlegende Textaufgaben mit sofortiger Antwortzeit und Funktionsaufrufen
- Kompakte Assistenten für Endverbraucher-Anwendungen mit Integration externer Dienste
- Intelligente Steuersysteme mit mehreren APIs/Services

---

### Lucie-7B-Instruct
**OpenLLM-France • 7B Parameter • Kontext: 32.000 Tokens**

Open-Source-Kausal-Mehrsprachmodell (7B), auf Lucie-7B fine-tuned. Optimiert für Französisch.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 41 Tokens/Sekunde
- **Verbrauch** : 1,32 kWh/Million Tokens 🌱
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags:** `Französisch` `Open-Source` `Effizient`

---

### Mistral Small 3.1
**Mistral AI • 24B Parameter • Kontext: 60.000 Tokens**

Kompakter und reaktiver Modell von Mistral AI, speziell für eine flüssige und relevante konversationale Unterstützung mit optimaler Antwortgeschwindigkeit entwickelt.

**Technische Spezifikationen:**
- **Geschwindigkeit**: 14 Tokens pro Sekunde Tokens pro Sekunde
- **Verbrauch**: 13,06 kWh pro Million Tokens
- **Lizenz**: [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags:** `Vision` `Agent` `Sicherheit`

**Anwendungsfälle:**
- Konversationale Anwendungen
- Virtuelle Assistenten mit Bild- und Textanalyse (26 Tokens/s)
- Technische Support-Chatbots mit Zugriff auf technische Dokumentation
- Inhalts-Create/Edit-Tools mit sofortiger Antwort (Blogs, E-Mails)
- Deployment auf Standard-Infrastrukturen (24B Parameter)

---

### DeepCoder
**Agentica x Together AI • 14B Parameter • Kontext: 32.000 Tokens**

Open-Source-IA-Modell (14B) von Together AI & Agentica, eine glaubwürdige Alternative zu proprietären Modellen für Code-Generierung.

**Technische Spezifikationen:**
- **Geschwindigkeit**: 62 Tokens pro Sekunde Tokens pro Sekunde ⚡
- **Verbrauch**: 2,95 kWh pro Million Tokens
- **Lizenz**: [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Programmierung` `Reasoning` `Open-Source` `Mathematik` `Schnell`

**Anwendungsfälle:**
- Code-Generierung in mehr als 15 Sprachen mit Leistungs-Optimierung
- Debugging und Refactoring bestehender Code-Basen mit Impact-Analyse
- Implementierung komplexer Algorithmen (Graphen, Bäume, Heuristiken)
- Code-Übersetzung zwischen Sprachen und Frameworks (z. B. Python zu JavaScript)
- Automatisierte Erstellung von Unit-Tests mit Code-Coverage > 80%

---

### Granite 3.2 Vision
**IBM • 2B Parameter • Kontext: 16.384 Tokens**

Revolutionärer kompakter Modell von IBM, spezialisiert auf Computer Vision, in der Lage, direkt visuelle Dokumente zu analysieren und zu verstehen, ohne Zwischen-OCR-Technologien zu verwenden.

**Technische Spezifikationen:**
- **Geschwindigkeit**: 48 Tokens pro Sekunde Tokens pro Sekunde ⚡
- **Verbrauch**: 1,13 kWh pro Million Tokens 🌱
- **Lizenz**: [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags:** `Vision` `Sicherheit` `Schnell` `Kompakt` `Effizient`

**Anwendungsfälle:**
- Strukturierte Datenextraktion aus Rechnungen und Formularen ohne OCR
- Direkte Analyse von Tabellen und Grafiken mit Trend-Interpretation
- Lesen und Interpretieren technischer Diagramme (elektrisch, mechanisch)
- Verarbeitung von Handschriften mit hohem Erkennungsraten
- Leichte Computer Vision (2B Parameter) mit hoher Geschwindigkeit (79 Tokens/s)

---

### Granite 3.3 8B
**IBM • 8B Parameter • Kontext: 60.000 Tokens**

Granite 8B-Modell, feinabgestimmt von IBM für verbessertes Reasoning und Instruction-Following mit einem Kontext von 128k Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit**: 27 Tokens pro Sekunde Tokens pro Sekunde
- **Verbrauch**: 2,0 kWh pro Million Tokens 🌱
- **Lizenz**: [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit

**Tags:** `Agent` `Reasoning` `Sicherheit` `Effizient`

**Anwendungsfälle:**
- Allgemeine Instruction-Following-Aufgaben (Klassifizierung, Extraktion, Q&A)
- Multilinguale IA-Assistenten (12 Sprachen)
- Verarbeitung sehr langer Dokumente (128k Tokens): Zusammenfassungen und Q&A
- Code-Generierung/Completions mit Fill-in-the-Middle
- Integration mit externen Tools über Function Calling
- Strukturiertes Reasoning mit "Thinking"-Modus

---

### Granite 3.3 2B
**IBM • 2B Parameter • Kontext: 120.000 Tokens**

Granite 2B-Modell, feinabgestimmt von IBM, optimiert für Reasoning und Instruction-Following mit einem Kontext von 128k Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit**: 45 Tokens pro Sekunde Tokens pro Sekunde ⚡
- **Verbrauch**: 1,2 kWh pro Million Tokens 🌱
- **Lizenz**: [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit

**Tags:** `Agent` `Reasoning` `Sicherheit` `Schnell` `Effizient`

**Anwendungsfälle:**
- Leichte Deployment mit großem Kontext (128k Tokens)
- Allgemeine Instruction-Following-Aufgaben auf begrenzten Ressourcen
- Kompakte multilinguale IA-Assistenten
- Verarbeitung langer Dokumente auf weniger leistungsstarken Geräten
- FIM-Code-Generierung/Completions auf Standard-Workstations

---

### Granite 3.1 MoE
**IBM • 3B Parameter • Kontext: 32.000 Tokens**

Innovatives IBM-Modell mit Mixture-of-Experts (MoE)-Architektur, das außergewöhnliche Leistungen bietet und gleichzeitig die Berechnungsressourcen stark optimiert.

**Technische Spezifikationen:**
- **Geschwindigkeit**: 74 Tokens pro Sekunde Tokens pro Sekunde ⚡
- **Verbrauch**: 0,73 kWh pro Million Tokens 🌱
- **Lizenz**: [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags:** `Agent` `Sicherheit` `Schnell` `MoE` `Effizienz` `Effizient`

**Anwendungsfälle:**
- Allgemeine Anwendungen mit optimiertem Inferenz-Kosten (42 Tokens/s)
- Dokumentenverarbeitung in CPU-Umgebungen mit begrenztem RAM
- Spezialisierte Analysen mit dynamischer Aktivierung relevanter Modellteile
- Hochdichte-Deployment mit geringem Energieverbrauch pro Inferenz
- Parallele Verarbeitung mehrerer Anfragentypen mit MoE-Spezialisierung

---

### Cogito 14B
**Deep Cogito • 14B Parameter • Kontext: 32.000 Tokens**

Deep Cogito-Modell, speziell für tiefes Reasoning und nuancierte Kontextverstehen optimiert, ideal für anspruchsvolle analytische Anwendungen.

**Technische Spezifikationen:**
- **Geschwindigkeit**: 60 Tokens pro Sekunde Tokens pro Sekunde ⚡
- **Verbrauch**: 3,05 kWh pro Million Tokens
- **Lizenz**: [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Agent` `Reasoning` `Verstehen` `Analyse` `Schnell`

**Anwendungsfälle:**
- Semantische Textanalyse mit Identifizierung impliziter Implikationen
- Strukturiertes kausales Reasoning mit Identifizierung von Ursache-Wirkungs-Beziehungen
- Synthese komplexer Dokumente mit Extraktion von Schlüsselinformationen
- Präzise Q&A-Systeme auf spezialisierten Dokumentenkorpus
- Argumentationsanalyse mit Bewertung der Stärke der Reasoning

---

### Cogito 32B
**Deep Cogito • 32B Parameter • Kontext: 32.000 Tokens**

Erweiterte Version des Cogito-Modells mit erheblich verstärkten Reasoning- und Analysefähigkeiten, konzipiert für die anspruchsvollsten Anwendungen im Bereich analytischer KI.

**Technische Spezifikationen:**
- **Geschwindigkeit**: 32 Tokens pro Sekunde Tokens pro Sekunde
- **Verbrauch**: 5,73 kWh pro Million Tokens
- **Lizenz**: [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Agent` `Reasoning` `Verstehen` `Analyse`

**Anwendungsfälle:**
- Multi-Faktor-Szenario-Analyse mit probabilistischer Ergebnisbewertung
- Lösung wissenschaftlicher Probleme mit formaler Schritt-Demonstration
- Hochkritische Anwendungen, die Genauigkeit und Verifizierbarkeit der Ergebnisse erfordern
- Expertensysteme in spezialisierten Bereichen (juristisch, medizinisch, technisch)
- Mehrstufiges Reasoning mit vollständiger Erklärbarkeit der Schlussfolgerungen

---

### Qwen3 32B
**Qwen Team • 32B Parameter • Kontext: 40.000 Tokens**

Leistungsstarker Modell der neuen Qwen3-Generation mit erweiterten Fähigkeiten im Reasoning, Code und Agenten.

**Technische Spezifikationen:**
- **Lizenz**: [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Agent` `Reasoning` `Mehrsprachig` `Großer Kontext`

**Anwendungsfälle:**
- Fortschrittliche conversationale Agenten mit großem Kontext und Werkzeug-Integration (MCP)
- Lösung komplexer Probleme (Mathematik, Code) mit "Thinking"-Modus
- Analyse und Generierung von umfangreichen Dokumenten
- Mehrsprachige Anwendungen (>100 Sprachen) mit tiefem Verständnis

---

### QwQ-32B
**Qwen Team • 32B Parameter • Kontext: 32.000 Tokens**

32-Billionen-Parameter-Modell, verbessert durch Reinforcement Learning (RL), um im Reasoning, Codieren, Mathematik und Agenten-Aufgaben zu glänzen.

**Technische Spezifikationen:**
- **Geschwindigkeit**: 35 Tokens pro Sekunde Tokens pro Sekunde
- **Verbrauch**: 5,22 kWh pro Million Tokens
- **Lizenz**: [Apache 2.0](./licences/apache2.licence.md)
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Agent` `Reasoning` `Codierung` `Mathematik`

**Anwendungsfälle:**
- Lösung komplexer Probleme, die Reasoning und Werkzeugnutzung erfordern
- Generierung und Ausführung von Code mit Ergebnis-Überprüfung
- Fortschrittliche mathematische Aufgaben mit Genauigkeits-Überprüfung
- Agenten-Anwendungen, die mit der Umgebung interagieren können
- Verbessertes Instruction Following und Ausrichtung auf menschliche Präferenzen

---

### DeepSeek-R1 14B
**DeepSeek AI • 14B Parameter • Kontext: 32.000 Tokens**
Kompakte und effiziente Version des DeepSeek-R1-Modells, die ein hervorragendes Verhältnis zwischen Leistung und Leichtigkeit bietet, ideal für Deployment-Szenarien, die Flexibilität und Reaktionsfähigkeit erfordern.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 60 Tokens pro Sekunde ⚡
- **Verbrauch** : 3,05 kWh pro Million Tokens
- **Lizenz** : [MIT Lizenz](./licences/deepseek-r1_14b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Agent` `Denken` `Kompakt` `Vielseitig` `Schnell`

**Anwendungsfälle:**
- Allgemeine Anwendungen mit Bedarf an schneller Inferenz (44 Tokens/s)
- Deployment auf Standard-Servern ohne spezialisierte GPU (14B Parameter)
- Textverarbeitung mit kontextueller Analyse und Antwortzeit < 2s
- Deployment im Edge Computing mit optimierter lokaler Inferenz
- Schnelle Prototypentwicklung von KI-Anwendungen mit kurzer Iterationszeit

---

### DeepSeek-R1 32B
**DeepSeek AI • 32B Parameter • Kontext: 32.000 Tokens**

Zwischenversion des DeepSeek-R1-Modells, die ein strategisches Gleichgewicht zwischen den fortgeschrittenen Fähigkeiten der 70B-Version und der Effizienz der 14B-Version bietet, für maximale Vielseitigkeit und Leistung.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 33 Tokens pro Sekunde
- **Verbrauch** : 5,54 kWh pro Million Tokens
- **Lizenz** : [MIT Lizenz](./licences/deepseek-r1_32b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Agent` `Denken` `Vielseitig`

**Anwendungsfälle:**
- Anwendungen, die ein gutes Verhältnis zwischen Leistung und Kosten benötigen (32B Parameter)
- Professionelle Textverarbeitung mit Analyse der semantischen Feinheiten
- Automatisierte Generierung strukturierter Berichte aus Rohdaten
- Anwendungen, die Datenanalyse und Inhaltsgenerierung kombinieren
- Spezialisierte Assistenten für technische Branchen (rechtlich, medizinisch, technisch)

---

### Cogito 3B
**Deep Cogito • 3B Parameter • Kontext: 32.000 Tokens**

Kompakte Version des Cogito-Modells, optimiert für das Denken auf Geräten mit begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 63 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,86 kWh pro Million Tokens 🌱
- **Lizenz** : [LLAMA 3.2 Community Lizenz](./licences/cogito_3b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Denken` `Kompakt` `Eingebettet` `Effizient` `Schnell`

---

### Granite Embedding
**IBM • 278M Parameter • Kontext: 32.000 Tokens**

Ultra-leichtes Embedding-Modell von IBM für semantische Suche und Klassifizierung.

**Technische Spezifikationen:**
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Embedding` `Kompakt` `Semantisch` `Effizient`

---

### Granite 3 Guardian 2B
**IBM • 2B Parameter • Kontext: 8.192 Tokens**

Kompaktes IBM-Modell, spezialisiert auf Sicherheit und Compliance, das Risiken und unangemessene Inhalte erkennt.

**Technische Spezifikationen:**
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Denken • ✅ Sicherheit

**Tags:** `Sicherheit` `Compliance` `Kompakt` `Filterung` `Effizient`

---

### Granite 3 Guardian 8B
**IBM • 8B Parameter • Kontext: 32.000 Tokens**

IBM-Modell, spezialisiert auf Sicherheit und Compliance, mit erweiterten Fähigkeiten zur Risikodetektion.

**Technische Spezifikationen:**
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Denken • ✅ Sicherheit

**Tags:** `Sicherheit` `Compliance` `Filterung`

---

### Qwen 2.5 0.5B
**Qwen Team • 0.5B Parameter • Kontext: 32.000 Tokens**

Ultra-leichtes Mikro-Modell der Qwen 2.5-Familie, optimiert für maximale Effizienz auf eingeschränkten Geräten.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 57 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,95 kWh pro Million Tokens 🌱
- **Lizenz** : [MIT Lizenz](./licences/qwen2.5_0.5b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Ultra-kompakt` `Schnell` `Eingebettet` `Effizient`

---

### Qwen 2.5 1.5B
**Qwen Team • 1.5B Parameter • Kontext: 32.000 Tokens**

Sehr kompaktes Modell der Qwen 2.5-Familie, das ein gutes Verhältnis zwischen Leistung und Größe für leichte Deployment-Szenarien bietet.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 94 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,58 kWh pro Million Tokens 🌱
- **Lizenz** : [MIT Lizenz](./licences/qwen2.5_1.5b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Kompakt` `Schnell` `Eingebettet` `Effizient`

---

### Qwen 2.5 14B
**Qwen Team • 14B Parameter • Kontext: 32.000 Tokens**

Mittleres, vielseitiges Modell der Qwen 2.5-Familie mit einem guten Gleichgewicht aus Leistung und Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 61 Tokens pro Sekunde ⚡
- **Verbrauch** : 3,0 kWh pro Million Tokens
- **Lizenz** : [MIT Lizenz](./licences/qwen2.5_14b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Vielseitig` `Mehrsprachig` `Schnell`

---

### Qwen 2.5 32B
**Qwen Team • 32B Parameter • Kontext: 32.000 Tokens**

Leistungsstarkes Modell der Qwen 2.5-Familie mit erweiterten Fähigkeiten in Verständnis und Generierung.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 32 Tokens pro Sekunde
- **Verbrauch** : 5,73 kWh pro Million Tokens
- **Lizenz** : [MIT Lizenz](./licences/qwen2.5_32b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Vielseitig` `Mehrsprachig` `Denken`

---

### Qwen 2.5 3B
**Qwen Team • 3B Parameter • Kontext: 32.000 Tokens**

Kompaktes und effizientes Modell der Qwen 2.5-Familie, geeignet für allgemeine Aufgaben auf begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 60 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,9 kWh pro Million Tokens 🌱
- **Lizenz** : [MIT Lizenz](./licences/qwen2.5_3b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Kompakt` `Schnell` `Vielseitig` `Effizient`

---

### Qwen3 0.6b
**Qwen Team • 0.6B Parameter • Kontext: 32.000 Tokens**

Kompaktes und effizientes Modell der Qwen3-Familie, geeignet für allgemeine Aufgaben auf begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 60 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,9 kWh pro Million Tokens 🌱
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Kompakt` `Schnell` `Vielseitig` `Effizient`

---

### Qwen3 1.7b
**Qwen Team • 1.7B Parameter • Kontext: 32.000 Tokens**

Sehr kompaktes Modell der Qwen3-Familie, das ein gutes Verhältnis zwischen Leistung und Größe für leichte Deployment-Szenarien bietet.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 83 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,65 kWh pro Million Tokens 🌱
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Kompakt` `Schnell` `Eingebettet` `Effizient`

---

### Qwen3 4b
**Qwen Team • 4B Parameter • Kontext: 32.000 Tokens**

Kompaktes Modell der Qwen3-Familie mit hervorragenden Leistungen in einem leichtgewichtigen und wirtschaftlichen Format.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 48 Tokens pro Sekunde
- **Verbrauch** : 1,13 kWh pro Million Tokens 🌱
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Kompakt` `Effizient`

---

### Qwen3 8b
**Qwen Team • 8B Parameter • Kontext: 32.000 Tokens**

Qwen3 8B-Modell mit einem guten Gleichgewicht zwischen Leistung und Effizienz für allgemeine Aufgaben.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 29 Tokens pro Sekunde
- **Verbrauch** : 1,87 kWh pro Million Tokens 🌱
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Denken` `Agent` `Mehrsprachig` `Effizient`

---

### Qwen2.5-VL 3B
**Qwen Team • 3,8B Parameter • Kontext: 128.000 Tokens**

Kompaktes Vision-Langage-Modell, leistungsstarker Lösung für Edge AI (Edge-Computing).

**Technische Spezifikationen:**
- **Geschwindigkeit** : 65 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,83 kWh pro Million Tokens 🌱
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Denken` `Schnell` `Effizient` `OCR` `Visuelle Lokalisierung` `Edge AI`

---

### Qwen2.5-VL 7B
**Qwen Team • 7B (8,3B) Parameter • Kontext: 128.000 Tokens**

Leistungsstarkes Vision-Langage-Modell, das GPT-4o-mini in bestimmten Aufgaben übertrifft.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 37 Tokens pro Sekunde
- **Verbrauch** : 1,46 kWh pro Million Tokens 🌱
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Denken` `Effizient` `OCR` `Visuelle Lokalisierung`

---

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B Parameter • Kontext: 16.000 Tokens**

Sprachmodell spezialisiert auf Cybersicherheit, optimiert für Effizienz.
- **Geschwindigkeit** : 22 Tokens/Sekunde Tokens/Sekunde
- **Verbrauch** : 2,46 kWh/pro 1 Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten :**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit

**Tags :** `Sicherheit` `Kompakt`

---

### devstral 24B
**Mistral AI & All Hands AI • 24B Parameter • Kontext: 120.000 Tokens**

Devstral ist ein LLM-Agent für Software-Engineering-Aufgaben.

**Technische Spezifikationen :**
- **Geschwindigkeit** : 53 Tokens/Sekunde Tokens/Sekunde ⚡
- **Verbrauch** : 4,5 kWh/pro 1 Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten :**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags :** `Agent` `Programmierung` `Open-Source` `Großer Kontext`

**Anwendungsfälle :**
- Code-Basen erkunden und modifizieren
- Agenten-basiert
- Europäisch

---

## Empfohlene Anwendungsfälle

### Mehrsprachige Gespräche

Chatbots und Assistenten, die in mehreren Sprachen kommunizieren können mit automatischer Erkennung, Kontexterhaltung über die gesamte Unterhaltung und Verständnis sprachlicher Besonderheiten

**Empfohlene Modelle :**

- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Analyse von langen Dokumenten

Verarbeitung umfangreicher Dokumente (>100 Seiten) mit Kontexterhaltung über den gesamten Text, Extraktion von Schlüsselinformationen, Generierung relevanter Zusammenfassungen und Beantwortung spezifischer Fragen zum Inhalt

**Empfohlene Modelle :**

- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Programmierung und Entwicklung
Codegenerierung und -optimierung in mehreren Sprachen, Debugging, Refactoring, Entwicklung vollständiger Funktionen, Verständnis komplexer algorithmischer Implementierungen und Erstellung von Einheitstests

**Empfohlene Modelle :**

- DeepCoder
- QwQ
- DeepSeek-R1
- Granite 3.3
- Devstral

### Visuelle Analyse

Direkter Umgang mit Bildern und visuellen Dokumenten ohne OCR-Vorverarbeitung, Interpretation technischer Diagramme, Grafiken, Tabellen, Zeichnungen und Fotos mit Generierung detaillierter textueller Erklärungen des visuellen Inhalts

**Empfohlene Modelle :**

- Granite 3.2 Vision
- Mistral Small 3.1
- Gemma 3
- Qwen2.5-VL

### Sicherheit und Compliance

Anwendungen, die spezifische Sicherheitsfunktionen erfordern; Inhaltsfilterung, Nachvollziehbarkeit der Schlussfolgerungen, RGPD/HDS-Prüfung, Risikominimierung, Schwachstellenanalyse und Einhaltung branchenspezifischer Vorschriften

**Empfohlene Modelle :**

- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Foundation-Sec-8B

### Leichte und eingebettete Deployment

Anwendungen, die eine minimale Ressourcennutzung erfordern, Deployment auf Geräten mit begrenzter Kapazität, Echtzeit-Inferenz auf Standard-CPU und Integration in eingebettete oder IoT-Systeme

**Empfohlene Modelle :**

- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3