---
title: Katalog der KI-Modelle
sidebar_position: 2
---

# Katalog der Modelle LLM als Dienst

## Übersicht

Cloud Temple LLMaaS bietet **große Sprachmodelle** sorgfältig ausgewählt und optimiert. Unser Katalog abdeckt das gesamte Spektrum, von ultra-effizienten Mikromodellen bis zu extrem großen Modellen.

### Hinweis zu Leistungsmaßen
Die Geschwindigkeitswerte (Tokens/s) stellen Leistungsziele unter echten Bedingungen dar. Der Energieverbrauch (kWh/Mtoken) wird berechnet, indem die geschätzte Leistung des Inferenz-Servers (in Watt) durch die gemessene Geschwindigkeit des Modells (in Tokens pro Sekunde) geteilt wird und anschließend in Kilowattstunden pro Million Tokens umgerechnet wird. Diese Methode bietet eine praktische Vergleichsmöglichkeit für die Energieeffizienz verschiedener Modelle und sollte als relativer Indikator, nicht als absoluter Messwert des Energieverbrauchs verwendet werden.

### Globale Statistiken

| Metrik | Wert |
|----------|--------|
| **Gesamtanzahl der Modelle** | 36 Modelle |
| **Minimales Kontext** | 8 192 Tokens |
| **Maximales Kontext** | 120 000 Tokens |
| **Konformität** | SecNumCloud ✅ HDS ✅ Souveränität ✅ C5 ✅ |
| **Standort** | 100% Frankreich 🇫🇷 |

### Preisgestaltung

| Typ der Nutzung | Preis |
|-------------------|------|
| **Eingabetokens** | 0,90 € / Million Tokens |
| **Ausgabetokens** | 4,00 € / Million Tokens |
| **Erweitertes Reasoning** | 21,00 € / Million Tokens |

## Große Modelle

### Llama 3.3 70B  
**Meta • 70B Parameter • Kontext: 60.000 Tokens**  

Multisprachmodell der Spitzenklasse, entwickelt von Meta, konzipiert, um sich in natürlichen Dialogen, komplexem Denken und feiner Verständnis von Anweisungen zu bewähren.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 30 Tokens/Sekunde  
- **Verbrauch:** 8,87 kWh/Million Tokens  
- **Lizenz:** [LLAMA 3.3 Community Lizenz](./licences/llama3.3_70b.lizenz.md)  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit  

**Anwendungsfälle:**  
- Multisprachige Chatbots, die 8 Sprachen gleichzeitig unterstützen  
- Ausführung komplexer, verketteter Anweisungen (Prompt-Chaining)  
- Verarbeitung einer Dialogfenster von 60.000 Tokens für conversationelle Historien  
- Analyse von umfangreichen juristischen oder technischen Dokumenten (über 100 Seiten)  
- Erstellung strukturierter Texte mit Treue zu stilistischen Anweisungen

### Qwen3 235B  
**Qwen Team • 235B Parameter • Kontext: 32.000 Tokens**  

Ein sehr großes Modell der neuen Generation Qwen3 mit erweiterten Fähigkeiten für komplexe Aufgaben.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 21 Tokens pro Sekunde  
- **Verbrauch:** 6,35 kWh pro Million Tokens  
- **Lizenz:** [Apache 2.0](./licences/apache2.licence.md)  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Sehr fortgeschrittene conversationelle Agenten mit großem Kontext und Werkzeugintegration (MCP)  
- Lösung extrem komplexer Probleme (Mathematik, Code)  
- Analyse und Generierung sehr umfangreicher und technischer Dokumente  
- Mehrsprachige Anwendungen (>100 Sprachen), die eine sehr hohe Genauigkeit bei Verständnis und Generierung erfordern

### DeepSeek-R1 671B  
**DeepSeek AI • 671B Parameter • Kontext: 32.000 Tokens**  

Sehr großes Modell von DeepSeek AI, konzipiert für die maximale Leistung bei Reasoning und Generierung.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 16 Tokens/Sekunde  
- **Verbrauch:** 8,33 kWh pro Million Tokens  
- **Lizenz:** [MIT Lizenz](./licences/deepseek-r1_671b.licence.md)  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Hochleistungs-Reasoning-Aufgaben  
- Hochwertige Textgenerierung  
- AI-Forschung und -Entwicklung  

---

### Gemma 3 27B  
**Google • 27B Parameter • Kontext: 120.000 Tokens**  

Revolutionäres Modell von Google, das ein optimales Gleichgewicht zwischen Leistung und Effizienz bietet, mit einem außergewöhnlichen Leistungs-Kosten-Verhältnis für anspruchsvolle professionelle Anwendungen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 68 Tokens/Sekunde ⚡  
- **Verbrauch** : 3,91 kWh pro Million Tokens  
- **Lizenz** : [Google Gemma Nutzungsbedingungen](./licences/gemma3_27b.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Dokumentenanalyse mit erweitertem Kontext bis zu 120 K Tokens (ca. 400 Seiten)  
- Semantische Indizierung und Suche in umfangreichen Dokumentenbanken  
- Gleichzeitige Verarbeitung von Bildern und Text dank multimodaler Fähigkeiten  
- Strukturierte Datenextraktion aus PDFs und gescannten Dokumenten  
- Integration mit externen Tools über die API-Funktionaufruf-Funktion

### Qwen3 30B-A3B FP8
**Qwen Team • 30B-A3B Parameter • Kontext: 32.000 Tokens**

Neues FP8-MoE-Modell (3B aktiviert) mit hybriden Denkmodi und fortgeschrittenen Agentenfähigkeiten.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 103 Tokens/Sekunde ⚡
- **Verbrauch** : 2,58 kWh pro Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Begründung • ❌ Sicherheit

**Anwendungsfälle:**
- Forte conversationelle Agenten mit Tools-Integration (MCP)
- Komplexe Problemlösung (Mathematik, Code) im "Thinking"-Modus
- Mehrsprachige Anwendungen (>100 Sprachen)
- Szenarien, die ein Kosteneffizienz-Gleichgewicht auf VLLM benötigen
- Mehrround-Dialoge mit präziser Anweisungsverfolgung

### DeepSeek-R1 70B  
**DeepSeek AI • 70B Parameter • Kontext: 32.000 Tokens**  

70B-Modell von DeepSeek AI  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 20 Tokens pro Sekunde  
- **Verbrauch** : 11,44 kWh pro Million Tokens  
- **Lizenz** : [MIT-Lizenz](./licences/deepseek-r1_70b.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Komplexe Reasoning-Aufgaben  
- Hochwertige Textgenerierung  
- Tiefe Dokumentenanalyse (im Rahmen des Kontexts von 27k)  

---

## Spezialisierte Modelle

### Qwen3 14B  
**Qwen Team • 14B Parameter • Kontext: 32.000 Tokens**  

Neue Generation des dichten Qwen3-Modells (14B) mit Leistungen, die denen von Qwen2.5 32B entsprechen, und besserer Effizienz.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 69 Tokens pro Sekunde ⚡  
- **Verbrauch:** 2,65 kWh pro Million Tokens  
- **Lizenz:** [Apache 2.0](./licences/apache2.licence.md)  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Werkzeuge/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Allgemeine Aufgaben, die Leistung und einen großen Kontext erfordern  
- Erstellung kreativer und technischer Inhalte  
- Datenanalyse und komplexes Denken  
- Integration mit externen Tools über Function Calling

### Gemma 3 12B  
**Google • 12B Parameter • Kontext: 120.000 Tokens**  

Mittlere Version des Gemma 3-Modells, die ein hervorragendes Gleichgewicht zwischen Leistung und Effizienz bietet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 67 Tokens pro Sekunde ⚡  
- **Verbrauch** : 2,73 kWh pro Million Tokens  
- **Lizenz** : [Google Gemma Terms of Use](./licences/gemma3_12b.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Multimodale Anwendungen mit moderaten Ressourcenbeschränkungen  
- Dokumentenverarbeitung mit Standardkontext (bis zu 100 Seiten)  
- Textinhaltserzeugung und kombinierte Bildanalyse  
- Bereitstellung auf Standard-GPUs ohne spezialisierte Infrastruktur  
- Fortgeschrittene Chatbots mit integrierten visuellen und textuellen Fähigkeiten

### Gemma 3 4B  
**Google • 4B Parameter • Kontext: 120.000 Tokens**  

Kompakter Google-Modell, der hervorragende Leistungen in einem leichten und kosteneffizienten Format bietet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 58 Tokens/Sekunde ⚡  
- **Verbrauch** : 0,93 kWh pro Million Tokens 🌱  
- **Lizenz** : [Google Gemma Nutzungsbedingungen](./licences/gemma3_4b.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Eingebettete Anwendungen und Edge Computing mit Bildverarbeitung  
- Reaktive multimodale Chatbots mit geringer Latenz  
- Skalierbare Bereitstellungen mit visuellen und textuellen Fähigkeiten  
- Mobile Anwendungen mit Bild- und Textanalyse  
- Verarbeitung von visuellen Anfragen mit geringer bis mittlerer Komplexität mit hoher Leistung

### Gemma 3 1B
**Google • 1B Parameter • Kontext: 32.000 Tokens**

Mikro-Modell mit extrem geringem Ressourcenbedarf für Deployment auf Geräten mit sehr begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 41 Tokens/Sekunde
- **Verbrauch:** 1,32 kWh pro Million Tokens 🌱
- **Lizenz:** [Google Gemma Nutzungsbedingungen](./licences/gemma3_1b.licence.md)
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Anwendungsfälle:**
- Deployment auf IoT-Geräten und eingebetteten Systemen mit API-Integration
- Anwendungen, die lokale Inferenz auf CPU mit Funktionsaufrufen erfordern
- Grundlegende Textaufgaben mit sofortiger Antwortzeit und Funktionsaufruf
- Kompakte Assistenten für Endverbraucher-Anwendungen mit Integration externer Dienste
- Intelligente Steuersysteme, die mehrere APIs/Dienste integrieren

### Lucie-7B-Instruct
**OpenLLM-France • 7B Parameter • Kontext: 32.000 Tokens**

Kausales multilinguales Open-Source-Modell (7B), feinabgestimmt von Lucie-7B. Optimiert für Französisch.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 41 tokens/seconde tokens/seconde
- **Verbrauch** : 1,32 kWh/million Tokens 🌱
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

---

### Mistral Small 3.1  
**Mistral AI • 24B Parameter • Kontext: 60.000 Tokens**  

Kompakter und reaktiver Modell von Mistral AI, speziell entwickelt, um eine flüssige und relevante conversationale Unterstützung mit optimaler Antwortgeschwindigkeit zu bieten.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 14 Tokens/Sekunde  
- **Verbrauch:** 13,06 kWh/Million Tokens  
- **Lizenz:** [Apache 2.0](./licences/apache2.licence.md)  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit  

**Anwendungsfälle:**  
- Konversationale Anwendungen  
- Virtuelle Assistenten, die Bild- und Textanalyse kombinieren (26 Tokens/s)  
- Technische Support-Chatbots mit Zugriff auf technische Dokumentation  
- Tools zur Inhaltserstellung/Redaktion mit sofortiger Antwort (Blogs, E-Mails)  
- Bereitstellung auf Standardinfrastrukturen (24B Parameter)

### DeepCoder  
**Agentica x Together AI • 14B Parameter • Kontext: 32.000 Tokens**  

Open-Source-IA-Modell (14B) von Together AI & Agentica, eine glaubwürdige Alternative zu proprietären Modellen für die Codegenerierung.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 62 Tokens/Sekunde ⚡  
- **Verbrauch** : 2,95 kWh/Million Tokens  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Codegenerierung in mehr als 15 Sprachen mit Leistungsoptimierung  
- Debugging und Refaktorisierung bestehender Code-Basen mit Auswirkungsanalyse  
- Implementierung komplexer Algorithmen (Graphen, Bäume, Heuristiken)  
- Code-Übertragung zwischen Sprachen und Frameworks (z. B. Python zu JavaScript)  
- Automatisierte Erstellung von Einheitstests mit Codeabdeckung > 80%

### Granite 3.2 Vision  
**IBM • 2B Parameter • Kontext: 16 384 Tokens**  

Revolutionäres, kompaktes Modell von IBM, spezialisiert auf Computer Vision, das visuelle Dokumente direkt analysieren und verstehen kann, ohne Zwischentechnologien wie OCR zu verwenden.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 48 Tokens pro Sekunde ⚡  
- **Verbrauch:** 1,13 kWh pro Million Tokens 🌱  
- **Lizenz:** [Apache 2.0](./licences/apache2.licence.md)  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit  

**Anwendungsfälle:**  
- Strukturierte Datenextraktion aus Rechnungen und Formularen ohne OCR  
- Direkte Analyse von Tabellen und Grafiken mit Trendinterpretation  
- Lesen und Verstehen technischer Diagramme (elektrisch, mechanisch)  
- Verarbeitung von Handschriften mit hohem Erkennungsrhythmus  
- Leichte Computer Vision (2B Parameter) mit hoher Geschwindigkeit (79 Tokens/s)

### Granite 3.3 8B  
**IBM • 8B Parameter • Kontext: 128.000 Token**  

Feinabgestimmtes Granite 8B-Modell von IBM für verbessertes Reasoning und Anweisungsbefolgung mit einem Kontext von 128.000 Token.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 27 Token/Sekunde  
- **Verbrauch** : 2,0 kWh pro Million Token 🌱  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit  

**Anwendungsfälle:**  
- Allgemeine Anweisungsbefolgungsaufgaben (Klassifizierung, Extraktion, Q&A)  
- Mehrsprachige IA-Assistenten (12 Sprachen)  
- Verarbeitung sehr langer Dokumente (128.000 Token): Zusammenfassungen und Fragen-Beantwortungen  
- Codegenerierung/Code-Vervollständigung mit Fill-in-the-Middle  
- Integration mit externen Tools über Function Calling  
- Strukturierter Reasoning im Modus „Denken“

### Granite 3.3 2B  
**IBM • 2B Parameter • Kontext: 120.000 Tokens**  

Granite 2B Modell, feingetuntet von IBM, optimiert für Reasoning und Instruction Following, mit einem Kontext von 128k Tokens.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 45 Tokens/Sekunde ⚡  
- **Verbrauch** : 1,2 kWh pro Million Tokens 🌱  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit  

**Anwendungsfälle:**  
- Leichte Deployment mit großem Kontext (128k Tokens)  
- Allgemeine Instruction Following Aufgaben auf eingeschränkten Ressourcen  
- Kompakte multilinguale IA-Assistenten  
- Verarbeitung langer Dokumente auf weniger leistungsstarken Geräten  
- Code-Generierung/Completions FIM auf Standardarbeitsplätzen

### Granite 3.1 MoE  
**IBM • 3B Parameter • Kontext: 32.000 Tokens**  

Innovatives Modell von IBM, das die Mixture-of-Experts-Architektur (MoE) verwendet, um außergewöhnliche Leistungen zu erzielen und die Ressourcennutzung drastisch zu optimieren.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 74 Tokens/Sekunde ⚡  
- **Verbrauch** : 0,73 kWh pro Million Tokens 🌱  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Berechnungen • ✅ Sicherheit  

**Anwendungsfälle:**  
- Allgemeine Anwendungen mit optimierten Inferenzkosten (42 Tokens/Sekunde)  
- Dokumentenverarbeitung in CPU-Umgebungen mit begrenzter RAM-Verwendung  
- Spezialanalysen mit dynamischer Aktivierung relevanter Modellteile  
- Hochdichte-Deployment mit geringem Energieverbrauch pro Inferenz  
- Parallele Verarbeitung mehrerer Anfragentypen mit MoE-Spezialisierung

### Cogito 14B  
**Deep Cogito • 14B Parameter • Kontext: 32.000 Tokens**  

Modell von Deep Cogito, speziell entwickelt, um sich bei tiefen Denkprozessen und feinem Kontextverstehen hervorzuheben, ideal für anspruchsvolle analytische Anwendungen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 60 Tokens/Sekunde ⚡  
- **Verbrauch:** 3,05 kWh pro Million Tokens  
- **Lizenz:** [Apache 2.0](./licences/apache2.licence.md)  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit  

**Anwendungsfälle:**  
- Semantische Analyse von Texten mit Identifizierung impliziter Implikationen  
- Strukturiertes kausales Denken mit Identifizierung von Ursache-Wirkungs-Beziehungen  
- Synthese komplexer Dokumente mit Extraktion der Schlüsselinformationen  
- Präzise Frage-Antwort-Systeme für spezialisierte Dokumentenkorpora  
- Argumentationsanalyse mit Bewertung der Stärke von Schlussfolgerungen

### Cogito 32B  
**Deep Cogito • 32B Parameter • Kontext: 32.000 Tokens**  

Erweiterte Version des Cogito-Modells mit erheblich verstärkten Fähigkeiten im Bereich des Denkens und der Analyse, konzipiert für die anspruchsvollsten Anwendungen im Bereich analytischer KI.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 32 Tokens/Sekunde  
- **Verbrauch** : 5,73 kWh/Million Tokens  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit  

**Anwendungsfälle:**  
- Analyse von Multi-Faktor-Szenarien mit wahrscheinlichkeitsbasierten Bewertungen der Ergebnisse  
- Lösung wissenschaftlicher Probleme mit formaler Darstellung der Schritte  
- Anwendungen mit hoher Kritikalität, die Genauigkeit und Verifizierbarkeit der Ergebnisse erfordern  
- Expertensysteme in spezialisierten Bereichen (rechtlich, medizinisch, technisch)  
- Analyse mit mehrstufigem Denken und vollständiger Erklärbarkeit der Schlussfolgerungen

### Qwen3 32B  
**Qwen Team • 32B Parameter • Kontext: 40.000 Tokens**  

Leistungsstarker Modell der neuen Qwen3-Generation mit fortgeschrittenen Fähigkeiten im Reasoning, Code und Agententechnologie, mit erweitertem Kontext.  

**Technische Spezifikationen:**  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Fortgeschrittene conversationelle Agenten mit großem Kontext und Werkzeugintegration (MCP)  
- Lösung komplexer Probleme (Mathematik, Code) mit dem "Thinking"-Modus  
- Analyse und Generierung umfangreicher Dokumente  
- Mehrsprachige Anwendungen (>100 Sprachen), die eine tiefe Verständnis erfordern

### QwQ-32B  
**Qwen Team • 32B Parameter • Kontext: 32.000 Tokens**  

Modell mit 32 Milliarden Parametern, verbessert durch Verstärkungslernen (RL), um sich in Reasoning, Codierung, Mathematik und Agentenaufgaben hervorzutun.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 35 Tokens/Sekunde  
- **Verbrauch:** 5,22 kWh/Million Tokens  
- **Lizenz:** [Apache 2.0](./licences/apache2.licence.md)  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Komplexe Problemlösung mit Reasoning und Nutzung von Tools  
- Erstellung und Ausführung von Code mit Ergebnisüberprüfung  
- Fortgeschrittene mathematische Aufgaben mit Genauigkeitsprüfung  
- Agentenanwendungen, die mit der Umgebung interagieren können  
- Verbessertes Anweisungsbefolgen und Ausrichtung auf menschliche Präferenzen

### DeepSeek-R1 14B  
**DeepSeek AI • 14B Parameter • Kontext: 32.000 Tokens**  

Kompakte und effiziente Version des DeepSeek-R1-Modells, die ein hervorragendes Gleichgewicht zwischen Leistung und Leichtigkeit bietet für Bereitstellungen mit Flexibilität und Reaktionsfähigkeit.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 60 Tokens/Sekunde ⚡  
- **Verbrauch:** 3,05 kWh pro Million Tokens  
- **Lizenz:** [MIT-Lizenz](./licences/deepseek-r1_14b.licence.md)  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Allgemeine Anwendungen mit Bedarf an schneller Inferenz (44 Tokens/Sekunde)  
- Bereitstellungen auf Standard-Servern ohne spezialisierte GPU (14B Parameter)  
- Textverarbeitung mit kontextueller Analyse und Antwortzeiten < 2 Sekunden  
- Bereitstellung im Edge Computing mit optimierter lokaler Inferenz  
- Schnelle Prototypenerstellung von KI-Anwendungen mit kurzen Iterationszeiten

### DeepSeek-R1 32B  
**DeepSeek AI • 32B Parameter • Kontext: 32.000 Tokens**  

Zwischenversion des DeepSeek-R1-Modells, die ein strategisches Gleichgewicht zwischen den fortgeschrittenen Fähigkeiten der 70B-Version und der Effizienz der 14B-Version bietet, für maximale Vielseitigkeit und Leistung.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 33 Tokens/Sekunde  
- **Verbrauch:** 5,54 kWh/Million Tokens  
- **Lizenz:** [MIT Lizenz](./licences/deepseek-r1_32b.licence.md)  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Anwendungsfälle:**  
- Anwendungen, die ein gutes Verhältnis von Leistung/Kosten benötigen (32B Parameter)  
- Professionelle Textverarbeitung mit Analyse semantischer Feinheiten  
- Automatisierte Generierung strukturierter Berichte aus Rohdaten  
- Anwendungen, die Datenanalyse und Inhaltsgenerierung kombinieren  
- Spezialisierte Assistenten für technische Branchen (rechtlich, medizinisch, technisch)

### Cogito 3B
**Deep Cogito • 3B Parameter • Kontext: 32 000 Tokens**

Kompakte Version des Cogito-Modells, optimiert für das Denken auf Geräten mit begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 63 Tokens/Sekunde ⚡
- **Verbrauch** : 0,86 kWh/Million Tokens 🌱
- **Lizenz** : [LLAMA 3.2 Community Lizenz](./licences/cogito_3b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Begründung • ❌ Sicherheit

### Granite Embedding  
**IBM • 278M Parameter • Kontext: 32.000 Tokens**  

Ultra-leichtes Embedding-Modell von IBM für semantische Suche und Klassifizierung.  

**Technische Spezifikationen:**  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

### Granite 3 Guardian 2B  
**IBM • 2B Parameter • Kontext: 8 192 Tokens**  

Kompakter IBM-Modell, spezialisiert auf Sicherheit und Compliance, der Risiken und unangemessene Inhalte erkennt.  

**Technische Spezifikationen:**  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Begründung • ✅ Sicherheit  

---

### Granite 3 Guardian 8B  
**IBM • 8B Parameter • Kontext: 32.000 Tokens**  

IBM-Modell spezialisiert auf Sicherheit und Compliance mit fortgeschrittenen Fähigkeiten zur Risikodetektion.  

**Technische Spezifikationen:**  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit

### Qwen 2.5 0.5B
**Qwen Team • 0.5B Parameter • Kontext: 32.000 Tokens**

Ultraleichtes Mikromodell der Qwen 2.5-Familie, entworfen für maximale Effizienz auf Geräten mit begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 57 Tokens pro Sekunde ⚡
- **Verbrauch:** 0,95 kWh pro Million Tokens 🌱
- **Lizenz:** [MIT Lizenz](./licences/qwen2.5_0.5b.licence.md)
- **Lokalisierung:** FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit

### Qwen 2.5 1.5B  
**Qwen-Team • 1,5B Parameter • Kontext: 32.000 Tokens**  

Sehr kompakter Modell der Qwen 2.5-Familie, der ein gutes Leistungs-/Größengleichgewicht für leichte Bereitstellungen bietet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 94 Tokens/Sekunde ⚡  
- **Verbrauch** : 0,58 kWh pro Million Tokens 🌱  
- **Lizenz** : [MIT Lizenz](./licences/qwen2.5_1.5b.lizenz.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

### Qwen 2.5 14B
**Qwen-Team • 14B Parameter • Kontext: 32.000 Tokens**

Mittelschweres Multitasking-Modell der Qwen 2.5-Familie mit gutem Leistungs-/Ressourcenverhältnis.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 61 Tokens/Sekunde ⚡
- **Verbrauch** : 3,0 kWh pro Million Tokens
- **Lizenz** : [MIT-Lizenz](./licences/qwen2.5_14b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

---

### Qwen 2.5 32B
**Qwen-Team • 32B Parameter • Kontext: 32.000 Tokens**

Leistungsstarker Modell der Qwen 2.5-Familie mit fortgeschrittenen Fähigkeiten in Verständnis und Generierung.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 32 Tokens/Sekunde
- **Verbrauch** : 5,73 kWh/million Tokens
- **Lizenz** : [MIT Lizenz](./licences/qwen2.5_32b.lizenz.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Werkzeuge/Agent • ❌ Bildverarbeitung • ✅ Reasoning • ❌ Sicherheit

### Qwen 2.5 3B
**Qwen-Team • 3B Parameter • Kontext: 32.000 Tokens**

Kompakter und effizienter Modell der Qwen 2.5-Familie, geeignet für allgemeine Aufgaben bei begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 60 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,9 kWh pro Million Tokens 🌱
- **Lizenz** : [MIT-Lizenz](./licences/qwen2.5_3b.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

### Qwen3 0.6b  
**Qwen-Team • 0,6B Parameter • Kontext: 32.000 Tokens**  

Kompakter und effizienter Modell der Qwen3-Familie, geeignet für allgemeine Aufgaben bei begrenzten Ressourcen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 60 Tokens/Sekunde ⚡  
- **Verbrauch** : 0,9 kWh pro Million Tokens 🌱  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Werkzeuge/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit

### Qwen3 1.7b  
**Qwen-Team • 1,7 Milliarden Parameter • Kontext: 32.000 Tokens**  

Sehr kompakter Modell der Qwen3-Familie, der ein gutes Leistungs-/Größenverhältnis für leichte Bereitstellungen bietet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 83 Tokens/Sekunde ⚡  
- **Verbrauch** : 0,65 kWh pro Million Tokens 🌱  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Werkzeuge/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

### Qwen3 4b  
**Qwen Team • 4B Parameter • Kontext: 32.000 Tokens**  

Kompakter Modell der Qwen3-Familie mit hervorragenden Leistungen in einem leichtgewichtigen und wirtschaftlichen Format.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 48 Tokens/Sekunde  
- **Verbrauch** : 1,13 kWh pro Million Tokens 🌱  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit  

---

### Qwen3 8b  
**Qwen Team • 8B Parameter • Kontext: 32.000 Tokens**  

Qwen3 8B-Modell mit einem guten Gleichgewicht aus Leistung und Effizienz für allgemeine Aufgaben.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 29 Tokens pro Sekunde  
- **Verbrauch** : 1,87 kWh pro Million Tokens 🌱  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Begründung • ❌ Sicherheit

### Qwen2.5-VL 3B
**Qwen Team • 3,8B Parameter • Kontext: 128.000 Tokens**

Kompakter Vision-Sprach-Modell, leistungsstarke Lösung für Edge-Computing (Edge AI).

**Technische Spezifikationen:**
- **Geschwindigkeit** : 65 Tokens/Sekunde ⚡
- **Verbrauch** : 0,83 kWh pro Million Tokens 🌱
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Sicherheit

---

### Qwen2.5-VL 7B
**Qwen Team • 7B (8,3B) Parameter • Kontext: 128.000 Tokens**

Leistungsstarker Vision-Langage-Modell, das GPT-4o-mini in bestimmten Aufgaben übertrifft.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 37 Tokens pro Sekunde
- **Verbrauch** : 1,46 kWh pro Million Tokens 🌱
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Sicherheit

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B Parameter • Kontext: 16.000 Tokens**

Spezialisiert auf Cybersecurity, optimiert für Effizienz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 22 Tokens/Sekunde
- **Verbrauch** : 2,46 kWh/Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit

---

### devstral 24B  
**Mistral AI & All Hands AI • 24B Parameter • Kontext: 120.000 Tokens**  

Devstral ist ein LLM-Agent für Software-Engineering-Aufgaben.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 53 Tokens/Sekunde ⚡  
- **Verbrauch** : 4,5 kWh/pro Million Tokens  
- **Lizenz** : [Apache 2.0](./licences/apache2.licence.md)  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit  

**Anwendungsfälle:**  
- Exploration und Modifikation von Code-Basen  
- Agentic  
- Europäisch

## Empfohlene Anwendungsfälle

### Mehrsprachiger Dialog

Chatbots und Assistenten, die in der Lage sind, in mehreren Sprachen zu kommunizieren, mit automatischer Spracherkennung, Erhalt des Kontexts über die gesamte Unterhaltung hinweg und Verständnis der sprachlichen Besonderheiten

**Empfohlene Modelle:**

- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Analyse von langen Dokumenten

Verarbeitung von umfangreichen Dokumenten (>100 Seiten) bei Beibehaltung des Kontexts über den gesamten Text hinweg, Extraktion von Schlüsselinformationen, Erstellung relevanter Zusammenfassungen und Beantwortung spezifischer Fragen zum Inhalt

**Empfohlene Modelle:**

- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Programmierung und Entwicklung  
Erstellung und Optimierung von Code in mehreren Sprachen, Debugging, Refactoring, Entwicklung vollständiger Funktionen, Verständnis komplexer algorithmischer Implementierungen und Erstellung von Einheitstests  

**Empfohlene Modelle:**  

- DeepCoder  
- QwQ  
- DeepSeek-R1  
- Granite 3.3  
- Devstral

### Visuelle Analyse

Direkte Bildverarbeitung und Verarbeitung visueller Dokumente ohne vorherige OCR-Vorverarbeitung, Interpretation technischer Diagramme, Grafiken, Tabellen, Zeichnungen und Fotos mit der Generierung detaillierter textueller Erklärungen des visuellen Inhalts

**Empfohlene Modelle:**

- Granite 3.2 Vision
- Mistral Small 3.1
- Gemma 3
- Qwen2.5-VL

### Sicherheit und Compliance

Anwendungen, die spezifische Sicherheitsfunktionen erfordern; Filterung sensibler Inhalte, Nachvollziehbarkeit der Schlussfolgerungen, DSGVO/HDS-Prüfung, Risikominimierung, Schwachstellenanalyse und Einhaltung branchenspezifischer Vorschriften

**Empfohlene Modelle:**

- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Foundation-Sec-8B

### Leichte und eingebettete Bereitstellungen

Anwendungen, die eine minimale Ressourcenbelastung erfordern, Bereitstellung auf Geräten mit begrenzter Kapazität, Echtzeit-Infereenz auf Standard-CPU und Integration in eingebettete Systeme oder IoT

**Empfohlene Modelle :**

- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3