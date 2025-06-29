---
title: Katalog der Modelle LLMaaS
sidebar_position: 2
---

# Katalog der LLM-Modelle als Dienst

## Übersicht

Cloud Temple LLMaaS bietet **45 große Sprachmodelle**, die sorgfältig ausgewählt und optimiert wurden, um den strengsten SecNumCloud-Anforderungen gerecht zu werden. Unser Katalog umfasst das gesamte Spektrum, von ultra-effizienten Mikro-Modellen bis zu extrem großen Modellen.

### Globale Statistiken

| Metrik | Wert |
|--------|------|
| **Gesamtanzahl der Modelle** | 45 Modelle |
| **Minimale Kontextlänge** | 8 192 Tokens |
| **Maximale Kontextlänge** | 128 000 Tokens |
| **Konformität** | SecNumCloud ✅ HDS ✅ Souveränität ✅ C5 ❌ |
| **Standort** | 100 % Frankreich 🇫🇷 |

### Preisgestaltung

| Verwendungstyp | Preis |
|----------------|-------|
| **Eingabetokens** | 0,90 € / Million Tokens |
| **Ausgabetokens** | 4,00 € / Million Tokens |
| **Erweitertes Reasoning** | 21,00 € / Million Tokens |

## Große Modelle

### Llama 3.3 70B  
**Meta • 70B Parameter • Kontext: 60.000 Tokens**  

Multisprachmodell der Spitzenklasse, entwickelt von Meta, entworfen, um sich in natürlichen Dialogen, komplexem Denken und feiner Verständnis von Anweisungen auszuzeichnen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 26 Tokens pro Sekunde  
- **Verbrauch** : 11,75 kWh pro Million Tokens  
- **Lizenz** : LLAMA 3.3 Community Lizenz  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit  

**Tags:** `Agent` `Dialog` `Multisprachig`  

**Anwendungsfälle:**  
- Multisprachige Chatbots, die 8 Sprachen gleichzeitig unterstützen  
- Ausführung komplexer, verketteter Anweisungen (Prompt-Ketten)  
- Verarbeitung einer Dialogfenster von 60.000 Tokens für Conversationsverläufe  
- Analyse umfangreicher juristischer oder technischer Dokumente (>100 Seiten)  
- Erstellung strukturierter Texte mit Treue zu stilistischen Anweisungen

### Qwen3 235B  
**Qwen Team • 235B Parameter • Kontext: 60.000 Tokens**  

Ein sehr großes Modell der neuen Qwen3-Generation mit erweiterten Fähigkeiten für komplexe Aufgaben.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 17 Tokens pro Sekunde  
- **Verbrauch:** 7,84 kWh pro Million Tokens  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Agent` `Reasoning` `Mehrsprachig` `Sehr groß`  

**Anwendungsfälle:**  
- Sehr fortgeschrittene conversationelle Agenten mit großem Kontext und Tools-Integration (MCP)  
- Lösung extrem komplexer Probleme (Mathematik, Code)  
- Analyse und Generierung sehr umfangreicher und technischer Dokumente  
- Multisprachige Anwendungen (>100 Sprachen), die eine hochpräzise Verständnis- und Generierungsfähigkeit erfordern

### DeepSeek-R1 671B  
**DeepSeek AI • 671B Parameter • Kontext: 16.000 Tokens**  

Sehr großes Modell von DeepSeek AI, designed für den Höchststand von Denken und Generierung.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 12 Tokens/Sekunde  
- **Verbrauch:** 11,11 kWh/Million Tokens  
- **Lizenz:** MIT Lizenz  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit  

**Tags:** `Denken` `Extrem groß`  

**Anwendungsfälle:**  
- Höchstleistungsdenkaufgaben  
- Hochwertige Textgenerierung  
- AI-Forschung und -entwicklung

### Gemma 3 27B  
**Google • 27B Parameter • Kontext: 120.000 Tokens**  

Revolutionäres Modell von Google, das ein optimales Gleichgewicht zwischen Leistung und Effizienz bietet, mit einem außergewöhnlichen Leistungs-Kosten-Verhältnis für anspruchsvolle professionelle Anwendungen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 20 Tokens pro Sekunde  
- **Verbrauch** : 6,67 kWh pro Million Tokens  
- **Lizenz** : Google Gemma Nutzungsbedingungen  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit  

**Tags:** `Vision` `Agent` `Großer Kontext`  

**Anwendungsfälle:**  
- Dokumentenanalyse mit erweitertem Kontext bis zu 120.000 Tokens (ca. 400 Seiten)  
- Semantische Indexierung und Suche in umfangreichen Dokumentenbanken  
- Gleichzeitige Verarbeitung von Bildern und Text dank multimodaler Fähigkeiten  
- Strukturierte Datenextraktion aus PDFs und gescannten Dokumenten  
- Integration mit externen Tools über die API-Funktionaufruf-Funktion

### Qwen3 30B-A3B FP8
**Qwen Team • 30B-A3B Parameter • Kontext: 32.000 Tokens**

Neue Generation MoE FP8-Modell (3B aktiviert) mit hybriden Denkmustern und starken Agentenfähigkeiten.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 106 Tokens/Sekunde ⚡
- **Verbrauch** : 2,88 kWh pro Million Tokens
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `MoE` `Agent` `Reasoning` `Schnell` `Mehrsprachig`

**Anwendungsfälle:**
- Fortschrittliche conversationale Agenten mit Integration von Tools (MCP)
- Lösung komplexer Probleme (Mathematik, Code) im „Denken“-Modus
- Mehrsprachige Anwendungen (>100 Sprachen)
- Szenarien, die ein Kosten-Leistungsverhältnis (MoE) auf VLLM erfordern
- Mehrround-Dialoge mit präziser Anweisungsverfolgung

### DeepSeek-R1 70B  
**DeepSeek AI • 70B Parameter • Kontext: 32.000 Tokens**  

Modell 70B von DeepSeek AI  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 21 Tokens pro Sekunde  
- **Verbrauch** : 12,56 kWh pro Million Tokens  
- **Lizenz** : MIT-Lizenz  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Reasoning` `Large`  

**Anwendungsfälle:**  
- Spitzenleistungen im Reasoning  
- Hochwertige Textgenerierung  
- AI-Forschung und -Entwicklung  

---

### Qwen2.5-VL 32B
**Qwen Team • 32B Parameter • Kontext: 120.000 Tokens**

Die leistungsstärkste Version der Qwen2.5-VL-Serie mit führenden Fähigkeiten in visueller Verständnis und Agententechnologie.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 18 Tokens pro Sekunde
- **Verbrauch** : 7,41 kWh pro Million Tokens
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Begründung • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Begründung` `OCR` `Visuelle Lokalisierung` `Groß`

**Anwendungsfälle:**
- Analyse von sehr komplexen Dokumenten und Diagrammen
- Autonome visuelle Agenten für Navigation und Interaktion mit GUIs
- Objektlokalisierungsaufgaben und hochpräzise Texterkennung
- Generierung reicher und detaillierter Beschreibungen aus komplexen Bildern

### Qwen2.5-VL 72B
**Qwen Team • 72B Parameter • Kontext: 128.000 Tokens**

Die leistungsstärkste Version der Qwen2.5-VL-Serie, die visuelle Verständnisfähigkeit und Avantgarde-Agentik für anspruchsvollste Aufgaben bietet.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 15 Tokens/Sekunde Tokens/Sekunde
- **Verbrauch** : 8,89 kWh pro Million Tokens
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Begründung • ✅ Visuelle Verständnisfähigkeit • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Begründung` `OCR` `Visuelle Lokalisierung` `Sehr Groß`

**Anwendungsfälle:**
- Analyse von Dokumenten und komplexen Diagrammen
- Autonome visuelle Agenten für Navigation und Interaktion mit GUIs
- Objektlokalisierungsaufgaben und hochpräzise Texterkennung
- Erstellung reicher und detaillierter Beschreibungen aus sehr komplexen Bildern

## Spezialisierte Modelle

### Qwen3 14B
**Qwen Team • 14B Parameter • Kontext: 32.000 Tokens**

Neue Generation dichter Qwen3-Modell (14B) mit Leistungen, die denen von Qwen2.5 32B entsprechen, aber mit besserer Effizienz.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 68 Tokens/Sekunde ⚡
- **Verbrauch:** 3,88 kWh pro Million Tokens
- **Lizenz:** Apache 2.0
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Agent` `Reasoning` `Schnell` `Mehrsprachig`

**Anwendungsfälle:**
- Allgemeine Aufgaben, die Leistung und einen großen Kontext erfordern
- Erstellung kreativer und technischer Inhalte
- Datenanalyse und komplexes Reasoning
- Integration mit externen Tools über Function Calling

### Gemma 3 12B  
**Google • 12B Parameter • Kontext: 120.000 Tokens**  

Intermediate-Version des Gemma 3-Modells mit einem hervorragenden Gleichgewicht zwischen Leistung und Effizienz.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 56 Tokens/Sekunde ⚡  
- **Verbrauch:** 4,71 kWh pro Million Tokens  
- **Lizenz:** Google Gemma Nutzungsbedingungen  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ✅ Vision • ❌ Begründung • ❌ Sicherheit  

**Tags:** `Vision` `Schnell` `Großer Kontext`  

**Anwendungsfälle:**  
- Multimodale Anwendungen mit moderaten Ressourcenbeschränkungen  
- Dokumentenverarbeitung mit Standardkontext (bis zu 100 Seiten)  
- Textinhaltsgenerierung und kombinierte Bildanalyse  
- Bereitstellung auf Standard-GPUs ohne spezialisierte Infrastruktur  
- Fortgeschrittene Chatbots mit integrierten visuellen und textuellen Fähigkeiten

### Gemma 3 4B  
**Google • 4B Parameter • Kontext: 120.000 Tokens**  

Kompakter Google-Modell, der hervorragende Leistungen in einem leichten und kosteneffizienten Format bietet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 57 Tokens/Sekunde ⚡  
- **Verbrauch** : 0,58 kWh pro Million Tokens 🌱  
- **Lizenz** : Google Gemma Terms of Use  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit  

**Tags:** `Vision` `Schnell` `Kompakt` `Großer Kontext` `Effizient`  

**Anwendungsfälle:**  
- Eingebettete Anwendungen und Edge Computing mit Bildverarbeitung  
- Multimodale Chatbots mit geringer Latenz  
- Skalierbare Deployment mit visuellen und textuellen Fähigkeiten  
- Mobile Anwendungen mit Bild- und Textanalyse  
- Einfache bis mittelkomplexe visuelle Anfragen mit hoher Leistungsfähigkeit

### Gemma 3 1B  
**Google • 1B Parameter • Kontext: 32.000 Tokens**  

Ultra-leichtgewichtsmodell für Bereitstellungen auf Geräten mit extrem geringen Ressourcen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 112 Tokens/Sekunde ⚡  
- **Verbrauch** : 0,15 kWh pro Million Tokens 🌱  
- **Lizenz** : Google Gemma Nutzungsbedingungen  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit  

**Tags:** `Ultra-kompakt` `Eingebettet` `Effizient` `Schnell`  

**Anwendungsfälle:**  
- Bereitstellung auf IoT-Geräten und eingebetteten Systemen mit API-Integration  
- Anwendungen, die lokale Inferenz auf der CPU mit Funktionsaufrufen erfordern  
- Grundlegende Textaufgaben mit sofortiger Antwortzeit und Funktionsaufrufen  
- Kompakte Assistenten für Endverbraucher-Anwendungen mit Integration externer Dienste  
- Intelligente Steuersysteme, die mehrere APIs/Dienste integrieren

### Lucie-7B-Instruct
**OpenLLM-France • 7B Parameter • Kontext: 32.000 Tokens**

Kausales multilinguales Open-Source-Modell (7B), gefinetuned von Lucie-7B. Optimiert für Französisch.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 4 Tokens/Sekunde
- **Verbrauch:** 8,33 kWh/Million Tokens 🌱
- **Lizenz:** Apache 2.0
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags:** `Französisch` `Open-Source` `Effizient`

### Mistral Small 3.1  
**Mistral AI • 24B Parameter • Kontext: 120.000 Tokens**  

Kompakter und reaktiver Modell von Mistral AI, speziell entwickelt, um eine flüssige und relevante conversationale Unterstützung mit optimaler Antwortgeschwindigkeit zu bieten.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 35 Tokens/Sekunde  
- **Verbrauch:** 3,72 kWh pro Million Tokens  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit  

**Tags:** `Vision` `Agent` `Sicherheit`  

**Anwendungsfälle:**  
- Konversationale Anwendungen  
- Virtuelle Assistenten, die Bild- und Textanalyse kombinieren (26 Tokens/s)  
- Technische Support-Chatbots mit Zugriff auf technische Dokumentation  
- Tools zur Inhaltserstellung/Redaktion mit sofortiger Antwort (Blogs, E-Mails)  
- Deployment auf Standardinfrastrukturen (24B Parameter)

### Mistral Small 3.2  
**Mistral AI • 24B Parameter • Kontext: 120.000 Tokens**  

Kleine Aktualisierung von Mistral Small 3.1, die die Befehlsverfolgung, die Robustheit des Function Calls verbessert und Wiederholungsfehler reduziert.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 35 Tokens/Sekunde  
- **Verbrauch:** 3,72 kWh/pro Million Tokens  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit  

**Tags:** `Vision` `Agent` `Sicherheit` `Anweisungsfolge`  

**Anwendungsfälle:**  
- Konversationelle Agenten mit verbesserter Befehlsverfolgung  
- Robuste Integration mit externen Tools über Function Calls  
- Anwendungen, die eine hohe Zuverlässigkeit erfordern, um Wiederholungen zu vermeiden  
- Identische Anwendungsfälle wie bei Mistral Small 3.1 mit verbesserten Leistungen  

---

### Mistral Small 3.2  
**Mistral AI • 24B Parameter • Kontext: 120.000 Tokens**  

Kleine Aktualisierung von Mistral Small 3.1, die die Befehlsverfolgung, die Robustheit des Function Calls und die Reduzierung von Wiederholungsfehlern verbessert.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 50 Tokens pro Sekunde  
- **Verbrauch:** 5,28 kWh pro Million Tokens  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Werkzeuge/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit  

**Tags:** `Vision` `Agent` `Sicherheit` `Befehlsverfolgung`  

**Anwendungsfälle:**  
- Konversationelle Agenten mit verbesserter Befehlsverfolgung  
- Robuste Integration mit externen Tools über Function Calls  
- Anwendungen, die eine große Zuverlässigkeit erfordern, um Wiederholungen zu vermeiden  
- Ähnliche Anwendungsfälle wie bei Mistral Small 3.1 mit verbesserten Leistungen  

---

### DeepCoder  
**Agentica x Together AI • 14B Parameter • Kontext: 32.000 Tokens**  

Open-Source-IA-Modell (14B) von Together AI & Agentica, glaubwürdige Alternative zu proprietären Modellen für die Codegenerierung.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 64 Tokens pro Sekunde ⚡  
- **Verbrauch** : 4,12 kWh pro Million Tokens  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Programmierung` `Reasoning` `Open-Source` `Mathematik` `Schnell`  

**Anwendungsfälle:**  
- Codegenerierung in mehr als 15 Sprachen mit Leistungsoptimierung  
- Debugging und Refaktorisierung bestehender Code-Basen mit Auswirkungsanalyse  
- Implementierung komplexer Algorithmen (Graphen, Bäume, Heuristiken)  
- Automatisierte Erstellung von Einheitstests mit Codeabdeckung > 80%  
- Code-Übertragung zwischen Sprachen/Frameworks (z. B. Python zu JavaScript)

### Granite 3.2 Vision  
**IBM • 2B Parameter • Kontext: 16.384 Tokens**  

Revolutionäres kompaktes Modell von IBM, spezialisiert auf Computer Vision, das visuelle Dokumente direkt analysieren und verstehen kann, ohne Zwischentechnologien wie OCR zu verwenden.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 48 Tokens/Sekunde  
- **Verbrauch:** 0,69 kWh pro Million Tokens 🌱  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ✅ Vision • ❌ Begründung • ✅ Sicherheit  

**Tags:** `Vision` `Sicherheit` `Kompakt` `Effizient`  

**Anwendungsfälle:**  
- Strukturierte Datenextraktion aus Rechnungen und Formularen ohne OCR  
- Direkte Analyse von Tabellen und Grafiken mit Interpretation von Trends  
- Lesen und Interpretieren technischer Diagramme (elektrisch, mechanisch)  
- Verarbeitung von handschriftlichen Dokumenten mit hohem Erkennungsrhythmus  
- Leichte Computer Vision (2 Milliarden Parameter) mit hoher Geschwindigkeit (50 Tokens/s)

### Granite 3.3 8B  
**IBM • 8B Parameter • Kontext: 60.000 Tokens**  

Granite 8B-Modell, feinabgestimmt von IBM für verbessertes Reasoning und Instruction Following, mit einem Kontext von 128k Tokens.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 30 Tokens pro Sekunde  
- **Verbrauch:** 1,11 kWh pro Million Tokens 🌱  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit  

**Tags:** `Agent` `Reasoning` `Sicherheit` `Effizient`  

**Anwendungsfälle:**  
- Allgemeine Aufgaben zur Anweisungsfollowing (Klassifizierung, Extraktion, Q&A)  
- Multisprachige IA-Assistenten (12 Sprachen)  
- Verarbeitung sehr langer Dokumente (128k Tokens) für Aufgaben wie Zusammenfassungen, Q&A,...  
- Codegenerierung/Code-Vervollständigung mit Fill-in-the-Middle  
- Integration mit externen Tools über Function Calling  
- Strukturiertes Reasoning mit dem „Thinking“-Modus

### Granite 3.3 2B  
**IBM • 2B Parameter • Kontext: 120.000 Tokens**  

Feinabgestimmtes Granite 2B-Modell von IBM, optimiert für Reasoning und Anweisungsbefolgung mit einem Kontext von 128k Tokens.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 45 Tokens/Sekunde  
- **Verbrauch** : 0,74 kWh pro Million Tokens 🌱  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit  

**Tags:** `Agent` `Reasoning` `Sicherheit` `Effizient`  

**Anwendungsfälle:**  
- Leichte Deployment mit großem Kontext (128k Tokens)  
- Allgemeine Anweisungsbefolgungsaufgaben auf eingeschränkten Ressourcen  
- Kompakte multilinguale KI-Assistenten  
- Verarbeitung langer Dokumente auf weniger leistungsstarken Geräten  
- FIM-Codegenerierung/Completions auf Standardarbeitsplätzen  

---

### Magistral 24B  
**Mistral AI • 24B Parameter • Kontext: 40.000 Tokens**  

Das erste Reasoning-Modell von Mistral AI, das sich durch spezifisches Domänen-Reasoning, Transparenz und Mehrsprachigkeit auszeichnet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 25 Tokens pro Sekunde  
- **Verbrauch:** 5,33 kWh pro Million Tokens  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
❌ Werkzeuge/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit  

**Tags:** `Reasoning` `Mehrsprachig`  

**Anwendungsfälle:**  
- Strategie und Geschäftsvorgänge (Risikomodellierung)  
- Regulierte Branchen (rechtlich, Finanzen) mit nachvollziehbarem Reasoning  
- Softwareentwicklung (Projektplanung, Architektur)  
- Inhaltserstellung und Kommunikation (kreative Schreibweise, Erzählung)

### Granite 3.1 MoE
**IBM • 3B Parameter • Kontext: 32.000 Tokens**

Innovatives Modell von IBM, das die Mixture-of-Experts-Architektur (MoE) verwendet, um außergewöhnliche Leistungen zu erzielen und die Ressourcennutzung drastisch zu optimieren.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 74 Tokens/Sekunde ⚡
- **Verbrauch** : 0,45 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags:** `Agent` `Sicherheit` `Schnell` `MoE` `Effizienz` `Effizient`

**Anwendungsfälle:**
- Allgemeine Anwendungen mit optimiertem Inferenzkostensatz (42 Tokens/Sekunde)
- Dokumentverarbeitung in CPU-Umgebungen mit begrenzter RAM-Verwendung
- Spezialisierte Analysen mit dynamischer Aktivierung relevanter Modellteile
- Hochdichte-Deployment mit geringem Energieverbrauch pro Inferenz
- Parallele Verarbeitung verschiedener Anfragentypen mit MoE-Spezialisierung

### cogito:14b  
**Deep Cogito • 14B Parameter • Kontext: 32.000 Tokens**  

Speziell für tiefes Denken und feines Kontextverstehen entwickelter Deep Cogito-Modell, ideal für anspruchsvolle analytische Anwendungen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 60 Tokens/Sekunde ⚡  
- **Verbrauch** : 4,4 kWh pro Million Tokens  
- **Lizenz** : LLAMA 3.2 Community-Lizenz  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit  

**Tags:** `Agent` `Denken` `Verstehen` `Analyse` `Schnell`  

**Anwendungsfälle:**  
- Semantische Analyse von Texten mit Identifizierung impliziter Implikationen  
- Strukturierter kausaler Denkprozess mit Identifizierung von Ursache-Wirkungs-Beziehungen  
- Synthese komplexer Dokumente mit Extraktion der Schlüsselinformationen  
- Präzise Frage-Antwort-Systeme für spezialisierte Dokumentkorpora  
- Argumentationsanalyse mit Bewertung der Stärke der Denkprozesse

### Cogito 32B  
**Deep Cogito • 32B Parameter • Kontext: 32.000 Tokens**  

Erweiterte Version des Cogito-Modells mit erheblich verstärkten Fähigkeiten der Rationalisierung und Analyse, designed für die anspruchsvollsten Anwendungen im Bereich analytischer KI.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 32 Tokens/Sekunde  
- **Verbrauch:** 8,25 kWh/Million Tokens  
- **Lizenz:** LLAMA 3.2 Community Lizenz  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Rationalität • ❌ Sicherheit  

**Tags:** `Agent` `Rationalität` `Verständnis` `Analyse`  

**Anwendungsfälle:**  
- Analyse von Multi-Faktor-Szenarien mit wahrscheinlichkeitsbasierten Bewertungen der Ergebnisse  
- Lösung wissenschaftlicher Probleme mit formalen Demonstrationen der Schritte  
- Hochkritische Anwendungen, die Genauigkeit und Verifizierbarkeit der Ergebnisse erfordern  
- Expertensysteme in spezialisierten Bereichen (rechtlich, medizinisch, technisch)  
- Analyse mit mehrstufigem Denken und vollständiger Erklärbarkeit der Schlussfolgerungen

### Qwen3 32B
**Qwen Team • 32B Parameter • Kontext: 40.000 Tokens**

Leistungsstarker Modell der neuen Qwen3-Generation mit fortgeschrittenen Fähigkeiten im Bereich Reasoning, Code und Agentik sowie erweitertem Kontext.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 18 Tokens pro Sekunde
- **Verbrauch:** 7,41 kWh pro Million Tokens
- **Lizenz:** Apache 2.0
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Agent` `Reasoning` `Mehrsprachig` `Großes Kontext`

**Anwendungsfälle:**
- Fortgeschrittene conversationale Agenten mit großem Kontext und Tool-Integration (MCP)
- Lösung komplexer Probleme (Mathematik, Code) mit dem "Thinking"-Modus
- Analyse und Generierung umfangreicher Dokumente
- Mehrsprachige Anwendungen (>100 Sprachen), die eine tiefe Verständnis erfordern

### QwQ-32B
**Qwen Team • 32B Parameter • Kontext: 32.000 Tokens**

Modell mit 32 Milliarden Parametern, verbessert durch Reinforcement Learning (RL), um sich in der Begründung, Codierung, Mathematik und Agententätigkeiten hervorzutun.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 35 Tokens pro Sekunde
- **Verbrauch** : 7,54 kWh pro Million Tokens
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Werkzeuge/Agent • ❌ Vision • ✅ Begründung • ❌ Sicherheit

**Tags:** `Agent` `Begründung` `Codierung` `Mathematik`

**Anwendungsfälle:**
- Lösung komplexer Probleme, die Begründung und Nutzung von Werkzeugen erfordern
- Erstellung und Ausführung von Code mit Ergebnisüberprüfung
- Fortgeschrittene mathematische Aufgaben mit Überprüfung der Genauigkeit
- Agentenanwendungen, die mit der Umgebung interagieren können
- Verbessertes Anweisungsfollowing und Ausrichtung auf menschliche Präferenzen

### DeepSeek-R1 14B
**DeepSeek AI • 14B Parameter • Kontext: 32.000 Tokens**

Kompakte und effiziente Version des DeepSeek-R1-Modells, die ein exzellentes Gleichgewicht zwischen Leistung und Leichtigkeit bietet für Bereitstellungen, die Flexibilität und Reaktionsfähigkeit erfordern.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 62 Tokens/Sekunde ⚡
- **Verbrauch:** 4,26 kWh pro Million Tokens
- **Lizenz:** MIT-Lizenz
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Reasoning` `Kompakt` `Vielseitig` `Schnell`

**Anwendungsfälle:**
- Allgemeine Anwendungen mit Bedarf an schneller Inferenz (44 Tokens/s)
- Bereitstellung auf Standard-Servern ohne spezialisierte GPU (14B Parameter)
- Textverarbeitung mit kontextueller Analyse und schneller Antwortzeit
- Bereitstellung im Edge Computing mit optimierter lokaler Inferenz
- Schnelle Prototypenerstellung von KI-Anwendungen mit kurzer Iterationszeit

### DeepSeek-R1 32B
**DeepSeek AI • 32B Parameter • Kontext: 32.000 Tokens**

Zwischenversion des DeepSeek-R1-Modells, die ein strategisches Gleichgewicht zwischen den fortgeschrittenen Fähigkeiten der 70B-Version und der Effizienz der 14B-Version bietet, für maximale Vielseitigkeit und Leistung.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 33 Tokens/Sekunde
- **Verbrauch:** 7,99 kWh pro Million Tokens
- **Lizenz:** MIT-Lizenz
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Reasoning` `Vielseitig`

**Anwendungsfälle:**
- Anwendungen, die ein gutes Verhältnis von Leistung/Kosten benötigen (32B Parameter)
- Professionelle Textverarbeitung mit Analyse der semantischen Nuancen
- Automatisierte Generierung strukturierter Berichte aus Rohdaten
- Anwendungen, die Datenanalyse und Inhaltsgenerierung kombinieren
- Spezialassistenten für technische Bereiche (rechtlich, medizinisch, technisch)

### Cogito 3B
**Deep Cogito • 3B Parameter • Kontext: 32.000 Tokens**

Kompakte Version des Cogito-Modells, optimiert für das Denken auf Geräten mit begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 55 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,61 kWh pro Million Tokens 🌱
- **Lizenz** : LLAMA 3.2 Community Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Werkzeuge/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit

**Tags:** `Denken` `Kompakt` `Eingebettet` `Effizient` `Schnell`

### Granite Embedding  
**IBM • 278M Parameter • Kontext: 512 Tokens**  

Ultra-leichtes Embedding-Modell von IBM für semantische Suche und Klassifizierung.  

**Technische Spezifikationen:**  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit  

**Tags :** `Embedding` `Kompakt` `Semantisch` `Effizient`

### Granite 3 Guardian 2B  
**IBM • 2B Parameter • Kontext: 8 192 Tokens**  

Kompakter IBM-Modell, spezialisiert auf Sicherheit und Compliance, erkennend Risiken und unangemessene Inhalte.  

**Technische Spezifikationen:**  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit  

**Tags :** `Sicherheit` `Compliance` `Kompakt` `Filterung` `Effizient`

### Granite 3 Guardian 8B  
**IBM • 8B Parameter • Kontext: 32.000 Tokens**  

IBM-Modell, spezialisiert auf Sicherheit und Compliance, mit fortgeschrittenen Fähigkeiten zur Risikodetektion.  

**Technische Spezifikationen:**  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit  

**Tags :** `Sicherheit` `Compliance` `Filterung`

### Qwen 2.5 0.5B  
**Qwen Team • 0.5B Parameter • Kontext: 32.000 Tokens**  

Mikromodell der Qwen 2.5-Familie, entwickelt für maximale Effizienz auf Geräten mit begrenzten Ressourcen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 162 Tokens/Sekunde ⚡  
- **Verbrauch:** 0,1 kWh pro Million Tokens 🌱  
- **Lizenz:** MIT-Lizenz  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit  

**Tags:** `Ultra-kompakt` `Schnell` `Eingebettet` `Effizient`

### Qwen 2.5 1.5B
**Qwen Team • 1.5B Parameter • Kontext: 32.000 Tokens**

Sehr kompakter Modell der Qwen 2.5-Familie mit einem guten Leistungs-/Größenverhältnis für leichte Bereitstellungen.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 102 Tokens pro Sekunde ⚡
- **Verbrauch:** 0.33 kWh pro Million Tokens 🌱
- **Lizenz:** MIT-Lizenz
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags:** `Kompakt` `Schnell` `Eingebettet` `Effizient`

### Qwen 2.5 14B
**Qwen-Team • 14B Parameter • Kontext: 32.000 Tokens**

Mittelschweres, vielseitiges Modell der Qwen 2.5-Familie mit einem guten Leistungs-/Ressourcenverhältnis.

**Technische Spezifikationen :**
- **Geschwindigkeit** : 61 Tokens/Sekunde ⚡
- **Verbrauch** : 4,33 kWh pro Million Tokens
- **Lizenz** : MIT-Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten :**
✅ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags :** `Vielseitig` `Mehrsprachig` `Schnell`

### Qwen 2.5 32B
**Qwen Team • 32B Parameter • Kontext: 32.000 Tokens**

Leistungsstarker Modell der Qwen 2.5-Familie mit fortgeschrittenen Fähigkeiten in Verständnis und Generierung.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 31 Tokens pro Sekunde
- **Verbrauch:** 8,51 kWh pro Million Tokens
- **Lizenz:** MIT-Lizenz
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Begründung • ❌ Sicherheit

**Tags:** `Vielseitig` `Mehrsprachig` `Begründung`

### Qwen 2.5 3B
**Qwen Team • 3B Parameter • Kontext: 32.000 Tokens**

Kompakter und effizienter Modell der Qwen 2.5-Familie, geeignet für allgemeine Aufgaben bei begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 64 Tokens pro Sekunde Tokens pro Sekunde ⚡
- **Verbrauch** : 0,52 kWh pro Million Tokens 🌱
- **Lizenz** : MIT-Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Werkzeuge/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit

**Tags :** `Kompakt` `Schnell` `Vielseitig` `Effizient`

### Qwen3 0.6b  
**Qwen Team • 0.6B Parameter • Kontext: 32.000 Tokens**  

Kompakter und effizienter Modell der Qwen3-Familie, geeignet für allgemeine Aufgaben bei begrenzten Ressourcen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 112 Tokens pro Sekunde ⚡  
- **Verbrauch** : 0.15 kWh pro Million Tokens 🌱  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit  

**Tags:** `Kompakt` `Schnell` `Vielseitig` `Effizient`

### Qwen3 1.7b  
**Qwen Team • 1,7B Parameter • Kontext: 32 000 Tokens**  

Sehr kompakt Modell der Qwen3-Familie, das ein gutes Leistungs-/Größenverhältnis für leichte Bereitstellungen bietet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 88 Tokens pro Sekunde ⚡  
- **Verbrauch** : 0,38 kWh pro Million Tokens 🌱  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit  

**Tags:** `Kompakt` `Schnell` `Eingebettet` `Effizient`

### Qwen3 4b  
**Qwen Team • 4B Parameter • Kontext: 32.000 Tokens**  

Kompakter Modell der Qwen3-Familie mit exzellenten Leistungen in einem leichtgewichtigen und kosteneffizienten Format.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 49 Tokens/Sekunde  
- **Verbrauch:** 0,68 kWh/pro Million Tokens 🌱  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit  

**Tags:** `Kompakt` `Effizient`

### Qwen3 8b  
**Qwen Team • 8B Parameter • Kontext: 32.000 Tokens**  

Modell Qwen3 8B, das ein gutes Gleichgewicht zwischen Leistung und Effizienz für allgemeine Aufgaben bietet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 33 Tokens pro Sekunde  
- **Verbrauch** : 1,01 kWh pro Million Tokens 🌱  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Reasoning` `Agent` `Mehrsprachig` `Effizient`

### Qwen2.5-VL 3B
**Qwen Team • 3,8 Milliarden Parameter • Kontext: 128.000 Tokens**

Kompakter Vision-Sprach-Modell, leistungsstarke Lösung für Edge AI.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 65 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,51 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Begründung • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Begründung` `Schnell` `Effizient` `OCR` `Visuelle Lokalisierung` `Edge AI`

### Qwen2.5-VL 7B
**Qwen Team • 7B (8,3B) Parameter • Kontext: 128.000 Tokens**

Leistungsstarker Vision-Langage-Modell, das GPT-4o-mini in bestimmten Aufgaben übertrifft.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 35 Tokens pro Sekunde Tokens pro Sekunde
- **Verbrauch** : 0,95 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Reasoning` `Effizient` `OCR` `Visuelle Lokalisierung`

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B Parameter • Kontext: 16.384 Tokens**

Spezialmodell für Cybersecurity, optimiert für Effizienz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 21 Tokens pro Sekunde
- **Verbrauch** : 1,59 kWh pro Million Tokens
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit

**Tags :** `Sicherheit` `Kompakt`

### devstral 24B  
**Mistral AI & All Hands AI • 24B Parameter • Kontext: 120.000 Tokens**  

Devstral ist ein agentenbasiertes LLM für Softwareentwicklungsarbeiten.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 45 Tokens/Sekunde  
- **Verbrauch** : 5,86 kWh/Million Tokens  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit  

**Tags :** `Agent` `Programmierung` `Open-Source` `Großer Kontext`  

**Anwendungsfälle:**  
- Erkundung und Änderung von Code-Basen  
- Agentenbasiert  
- Europäisch

### Cogito 8B  
**Deep Cogito • 8B Parameter • Kontext: 32.000 Tokens**  

Mittleres Modell der Cogito-Familie mit einem guten Gleichgewicht zwischen Reasoning-Fähigkeiten und Effizienz.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 30 Tokens/Sekunde  
- **Verbrauch:** 1,11 kWh/Million Tokens 🌱  
- **Lizenz:** LLAMA 3.2 Community Lizenz  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Agent` `Reasoning` `Vielseitig` `Effizient`

### Llama 3.1 8B
**Meta • 8B Parameter • Kontext: 32.000 Token**

Grundmodell der Llama 3.1-Familie mit soliden Leistungen für seine Größe.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 31 Token pro Sekunde
- **Verbrauch** : 1,08 kWh pro Million Token 🌱
- **Lizenz** : LLAMA 3.1 Community Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags:** `Vielseitig` `Effizient`

### Phi-4 Reasoning 14B  
**Microsoft • 14B Parameter • Kontext: 32.000 Tokens**  

Modell der Microsoft-Phi-Familie, spezialisiert auf komplexes Denken und Mathematik.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 71 Tokens/Sekunde ⚡  
- **Verbrauch** : 3,71 kWh pro Million Tokens  
- **Lizenz** : MIT-Lizenz  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Begründung • ❌ Sicherheit  

**Tags :** `Begründung` `Mathematik` `Programmierung` `Schnell`

## Empfohlene Anwendungsfälle

### Mehrsprachiger Dialog
Chatbots und Assistenten, die in mehreren Sprachen kommunizieren können, mit automatischer Spracherkennung, Beibehaltung des Kontexts über die gesamte Unterhaltung und Verständnis der sprachlichen Besonderheiten

**Empfohlene Modelle:**
- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Analyse von langen Dokumenten  
Verarbeitung von umfangreichen Dokumenten (>100 Seiten) mit Beibehaltung des Kontexts über den gesamten Text, Extraktion von Schlüsselinformationen, Erstellung relevanter Zusammenfassungen und Beantwortung spezifischer Fragen zum Inhalt  

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
Direkte Verarbeitung von Bildern und visuellen Dokumenten ohne OCR-Vorverarbeitung, Interpretation technischer Diagramme, Grafiken, Tabellen, Zeichnungen und Fotos mit Erstellung detaillierter textueller Erklärungen des visuellen Inhalts  

**Empfohlene Modelle:**  
- Granite 3.2 Vision  
- Mistral Small 3.1  
- Gemma 3  
- Qwen2.5-VL

### Sicherheit und Compliance  
Anwendungen, die spezifische Sicherheitsfunktionen erfordern; Filterung sensibler Inhalte, Nachvollziehbarkeit der Schlussfolgerungen, RGPD/HDS-Prüfung, Risikominimierung, Schwachstellenanalyse und Einhaltung branchenspezifischer Vorschriften  

**Empfohlene Modelle:**  
- Granite Guardian  
- Granite 3.3  
- Devstral  
- Mistral Small 3.1  
- Magistral 24b  
- Foundation-Sec-8B

### Leichte und eingebettete Bereitstellungen  
Anwendungen, die eine minimale Ressourcenbelastung erfordern, Bereitstellung auf Geräten mit begrenzter Kapazität, Echtzeit-Infereenz auf Standard-CPU und Integration in eingebettete Systeme oder IoT  

**Empfohlene Modelle:**  
- Gemma 3  
- Granite 3.1 MoE  
- Granite Guardian  
- Granite 3.3