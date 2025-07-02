---
title: LLMaaS-Modellkatalog
sidebar_position: 2
---

# Katalog der LLM-Modelle als Dienst

## Übersicht

Cloud Temple LLMaaS bietet **45 sorgfältig ausgewählte und optimierte große Sprachmodelle**, die die strengsten SecNumCloud-Anforderungen erfüllen. Unser Katalog umfasst das gesamte Spektrum, von ultra-effizienten Mikro-Modellen bis zu extrem großen Modellen.

### Globale Statistiken

| Metrik | Wert |
|--------|------|
| **Gesamtanzahl der Modelle** | 45 Modelle |
| **Minimale Kontextlänge** | 8 192 Tokens |
| **Maximale Kontextlänge** | 128 000 Tokens |
| **Konformität** | SecNumCloud ✅ HDS ✅ Souveränität ✅ C5 ❌ |
| **Standort** | 100% Frankreich 🇫🇷 |

### Preisgestaltung

| Typ der Nutzung | Preis |
|-------------------|------|
| **Eingabetokens** | 0,90 € / Million von Tokens |
| **Ausgabetokens** | 4,00 € / Million von Tokens |
| **Erweitertes Denken** | 21,00 € / Million von Tokens |

## Große Modelle

### Llama 3.3 70B  
**Meta • 70B Parameter • Kontext: 60.000 Tokens**  

Multisprachiges Spitzenmodell von Meta, entworfen, um sich in natürlichen Dialogen, komplexem Denken und feiner Verständnis von Anweisungen auszuzeichnen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 26 Tokens/Sekunde  
- **Verbrauch:** 11,75 kWh pro Million Tokens  
- **Lizenz:** LLAMA 3.3 Community-Lizenz  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit  

**Tags:** `Agent` `Dialog` `Mehrsprachig`  

**Anwendungsfälle:**  
- Mehrsprachige Chatbots, die 8 Sprachen gleichzeitig unterstützen  
- Ausführung komplexer, verketteter Anweisungen (Prompt-Chaining)  
- Verarbeitung einer 60K-Token-Dialogfenster für Conversationsverläufe  
- Analyse umfangreicher juristischer oder technischer Dokumente (>100 Seiten)  
- Erstellung strukturierter Texte mit Treue zu stilistischen Anweisungen

### Qwen3 235B  
**Qwen Team • 235B Parameter • Kontext: 60.000 Tokens**  

Sehr großes Modell der neuen Qwen3-Generation mit erweiterten Fähigkeiten für komplexeste Aufgaben.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 17 Tokens pro Sekunde  
- **Verbrauch:** 7,84 kWh pro Million Tokens  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Agent` `Reasoning` `Mehrsprachig` `Sehr groß`  

**Anwendungsfälle:**  
- Sehr fortgeschrittene conversationelle Agenten mit großem Kontext und Werkzeugintegration (MCP)  
- Lösung extrem komplexer Probleme (Mathematik, Code)  
- Analyse und Generierung sehr umfangreicher und technischer Dokumente  
- Mehrsprachige Anwendungen (>100 Sprachen), die eine sehr hohe Genauigkeit bei Verständnis und Generierung erfordern

### DeepSeek-R1 671B  
**DeepSeek AI • 671B Parameter • Kontext: 16.000 Tokens**  

Sehr großes Modell von DeepSeek AI, designed für die Höchstleistung im Denken und Generieren.  

**Technische Spezifikationen:**  
- **Geschwindigkeit**: 12 Tokens/Sekunde  
- **Verbrauch**: 11,11 kWh pro Million Tokens  
- **Lizenz**: MIT Lizenz  
- **Standort**: FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Denken • ❌ Sicherheit  

**Tags:** `Denken` `Sehr groß`  

**Anwendungsfälle:**  
- Höchstleistungsdenken-Aufgaben  
- Hochwertige Textgenerierung  
- AI-Forschung und -Entwicklung  

---

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
- Dokumentenanalyse mit erweitertem Kontext bis zu 120 K Tokens (ca. 400 Seiten)  
- Semantische Indexierung und Suche in umfangreichen Dokumentenbanken  
- Gleichzeitige Verarbeitung von Bildern und Text dank multimodaler Fähigkeiten  
- Strukturierte Datenextraktion aus PDFs und gescannten Dokumenten  
- Integration mit externen Tools über die API-Funktionaufruf-Funktion

### Qwen3 30B-A3B FP8
**Qwen Team • 30B-A3B Parameter • Kontext: 32.000 Tokens**

Neue Generation MoE FP8-Modell (3B aktiviert) mit hybriden Denkmustern und starken Agentenfähigkeiten.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 106 Tokens/Sekunde ⚡
- **Verbrauch:** 2,88 kWh pro Million Tokens
- **Lizenz:** Apache 2.0
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `MoE` `Agent` `Reasoning` `Schnell` `Mehrsprachig`

**Anwendungsfälle:**
- Forte conversationelle Agenten mit Integration von Tools (MCP)
- Komplexe Problemlösung (Mathematik, Code) im "Thinking"-Modus
- Mehrsprachige Anwendungen (>100 Sprachen)
- Szenarien, die ein Kosteneffizienz-Verhältnis benötigen (MoE) auf VLLM
- Multi-Turn-Dialoge mit präziser Anweisungsverfolgung

### DeepSeek-R1 70B
**DeepSeek AI • 70B Parameter • Kontext: 32.000 Tokens**

DeepSeek AI-Modell mit 70B Parametern

**Technische Spezifikationen:**
- **Geschwindigkeit:** 21 Tokens pro Sekunde
- **Verbrauch:** 12,56 kWh pro Million Tokens
- **Lizenz:** MIT-Lizenz
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Reasoning` `Large`

**Anwendungsfälle:**
- Hochleistungsreasoning-Aufgaben
- Hochwertige Textgenerierung
- AI-Forschung und -Entwicklung

### Qwen2.5-VL 32B
**Qwen Team • 32B Parameter • Kontext: 120 000 Tokens**

Die leistungsstärkste Version der Qwen2.5-VL-Serie mit fortschrittlichen Fähigkeiten der visuellen Wahrnehmung und Agententechnologie.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 18 Tokens pro Sekunde
- **Verbrauch:** 7,41 kWh pro Million Tokens
- **Lizenz:** Apache 2.0
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ❌ Begründung • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Begründung` `OCR` `Visuelle Lokalisierung` `Large`

**Anwendungsfälle:**
- Analyse von sehr komplexen Dokumenten und Diagrammen
- Autonome visuelle Agenten für Navigation und Interaktion mit GUIs
- Aufgaben der Objektlokalisierung und hochpräziser Texterkennung
- Erstellung reicher und detaillierter Beschreibungen aus komplexen Bildern

---

### Qwen2.5-VL 72B
**Qwen Team • 72B Parameter • Kontext: 128.000 Tokens**

Die leistungsstärkste Version der Qwen2.5-VL-Serie mit avantgardistischer visueller Verständnisfähigkeit und Agententechnologie für anspruchsvollste Aufgaben.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 15 Tokens pro Sekunde
- **Verbrauch:** 8,89 kWh pro Million Tokens
- **Lizenz:** Apache 2.0
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Visuell • ✅ Begründung • ❌ Sicherheit

**Tags:** `Visuell` `Agent` `Begründung` `OCR` `Visuelle Lokalisierung` `Sehr Groß`

**Anwendungsfälle:**
- Analyse von sehr komplexen Dokumenten und Diagrammen
- Autonome visuelle Agenten für Navigation und Interaktion mit GUIs
- Objektlokalisierung und Texterkennung mit sehr hoher Präzision
- Erstellung reicher und detaillierter Beschreibungen aus sehr komplexen Bildern

## Modelle spezialisierte

### Qwen3 14B
**Qwen Team • 14B Parameter • Kontext: 32.000 Tokens**

Neue Generation des dichten Modells Qwen3 (14B), das Leistungen bietet, die denen von Qwen2.5 32B entsprechen, mit besserer Effizienz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 68 Tokens pro Sekunde ⚡
- **Verbrauch** : 3,88 kWh pro Million Tokens
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Agent` `Reasoning` `Schnell` `Mehrsprachig`

**Anwendungsfälle:**
- Allgemeine Aufgaben, die Leistung und einen großen Kontext erfordern
- Erstellung kreativer und technischer Inhalte
- Datenanalyse und komplexes Denken
- Integration mit externen Tools über Function Calling

### Gemma 3 12B  
**Google • 12B Parameter • Kontext: 120.000 Tokens**  

Mittlere Version des Gemma 3-Modells, die ein hervorragendes Gleichgewicht zwischen Leistung und Effizienz bietet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 56 Tokens pro Sekunde ⚡  
- **Verbrauch** : 4,71 kWh pro Million Tokens  
- **Lizenz** : Google Gemma Nutzungsbedingungen  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ✅ Vision • ❌ Denken • ❌ Sicherheit  

**Tags:** `Vision` `Schnell` `Großer Kontext`  

**Anwendungsfälle:**  
- Multimodale Anwendungen mit moderaten Ressourcenbeschränkungen  
- Dokumentenverarbeitung mit Standard-Kontext (bis zu 100 Seiten)  
- Kombinierte Textgenerierung und Bildanalyse  
- Bereitstellungen auf Standard-GPUs ohne spezialisierte Infrastruktur  
- Fortschrittliche Chatbots mit integrierten visuellen und textuellen Fähigkeiten

### Gemma 3 4B  
**Google • 4B Parameter • Kontext: 120.000 Tokens**  

Kompakter Google-Modell mit hervorragenden Leistungen in einem leichten und kosteneffizienten Format.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 57 Tokens/Sekunde ⚡  
- **Verbrauch** : 0,58 kWh/Million Tokens 🌱  
- **Lizenz** : Google Gemma Terms of Use  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit  

**Tags:** `Vision` `Schnell` `Kompakt` `Großer Kontext` `Effizient`  

**Anwendungsfälle:**  
- Eingebettete Anwendungen und Edge Computing mit Bildverarbeitung  
- Multimodale reaktive Chatbots mit geringer Latenz  
- Skalierbare Deployment mit visuellen und textuellen Fähigkeiten  
- Mobile Anwendungen mit Bild- und Textanalyse  
- Verarbeitung visueller Anfragen mit geringer bis mittlerer Komplexität mit hoher Leistung  

---

### Gemma 3 1B  
**Google • 1B Parameter • Kontext: 32.000 Tokens**  

Ultra-leichter Mikro-Modell für Bereitstellungen auf Geräten mit sehr geringen Ressourcen.  

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
- Grundlegende Textaufgaben mit sofortiger Antwortzeit und Funktionsaufruf  
- Kompakte Assistenten für Endverbraucher-Anwendungen mit Integration externer Dienste  
- Intelligente Steuersysteme, die mehrere APIs/Dienste integrieren

### Lucie-7B-Instruct
**OpenLLM-France • 7B Parameter • Kontext: 32.000 Tokens**

Kausales multilinguales Open-Source-Modell (7B), feinabgestimmt von Lucie-7B. Optimiert für Französisch.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 4 Tokens/Sekunde
- **Verbrauch** : 8,33 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags :** `Französisch` `Open-Source` `Effizient`

### Mistral Small 3.1  
**Mistral AI • 24B Parameter • Kontext: 120.000 Tokens**  

Kompakter und reaktiver Modell von Mistral AI, speziell entwickelt, um eine flüssige und relevante Conversationsassistenz mit optimaler Antwortgeschwindigkeit zu bieten.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 35 Tokens pro Sekunde  
- **Verbrauch:** 3,72 kWh pro Million Tokens  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit  

**Tags:** `Vision` `Agent` `Sicherheit`  

**Anwendungsfälle:**  
- Konversationale Anwendungen  
- Virtuelle Assistenten mit Bild- und Textanalyse (26 Tokens/s)  
- Technik-Support-Chatbots mit Zugriff auf technische Dokumentation  
- Tools zur Inhaltserstellung/Bearbeitung mit sofortiger Antwort (Blogs, E-Mails)  
- Bereitstellung auf Standardinfrastrukturen (24B Parameter)

### Mistral Small 3.2  
**Mistral AI • 24B Parameter • Kontext: 120.000 Tokens**  

Kleine Aktualisierung von Mistral Small 3.1, die die Anweisungsbefolgung, die Robustheit des Function Calls und die Reduzierung von Wiederholungsfehlern verbessert.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 35 Tokens pro Sekunde  
- **Verbrauch:** 3,72 kWh pro Million Tokens  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit  

**Tags:** `Vision` `Agent` `Sicherheit` `Instruction Following`  

**Anwendungsfälle:**  
- Konversationelle Agenten mit verbesserter Anweisungsbefolgung  
- Robuste Integration mit externen Tools über Function Calling  
- Anwendungen, die eine hohe Zuverlässigkeit erfordern, um Wiederholungen zu vermeiden  
- Identische Anwendungsfälle wie bei Mistral Small 3.1 mit verbesserten Leistungen

### DeepCoder  
**Agentica x Together AI • 14B Parameter • Kontext: 32.000 Tokens**  

Open-Source-IA-Modell (14B) von Together AI & Agentica, eine glaubwürdige Alternative zu proprietären Modellen für die Codegenerierung.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 64 Tokens/Sekunde ⚡  
- **Verbrauch** : 4,12 kWh/Million Tokens  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Programmierung` `Reasoning` `Open-Source` `Mathematik` `Schnell`  

**Anwendungsfälle:**  
- Codegenerierung in mehr als 15 Sprachen mit Leistungsoptimierung  
- Debuggen und Refaktorisierung bestehender Code-Basen mit Auswirkungsanalyse  
- Implementierung komplexer Algorithmen (Graphen, Bäume, Heuristiken)  
- Automatisierte Erstellung von Einheitstests mit Codeabdeckung > 80%  
- Übertragung von Code zwischen Sprachen/Frameworks (z. B. Python zu JavaScript)

### Granite 3.2 Vision  
**IBM • 2B Parameter • Kontext: 16.384 Tokens**  

Revolutionäres kompaktes Modell von IBM, spezialisiert auf Computer Vision, das visuelle Dokumente direkt analysieren und verstehen kann, ohne Zwischentechnologien wie OCR zu verwenden.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 48 Tokens/Sekunde  
- **Verbrauch:** 0,69 kWh pro Million Tokens 🌱  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Sicherheit  

**Tags:** `Vision` `Sicherheit` `Kompakt` `Effizient`  

**Anwendungsfälle:**  
- Strukturierte Datenextraktion aus Rechnungen und Formularen ohne OCR  
- Direkte Analyse von Tabellen und Grafiken mit Trendinterpretation  
- Lesen und Interpretieren technischer Diagramme (elektrisch, mechanisch)  
- Verarbeitung von Handschriften mit hohem Erkennungstempo  
- Leichte Computer Vision (2B Parameter) mit hoher Geschwindigkeit (50 Tokens/s)  

---

### Granite 3.3 8B  
**IBM • 8B Parameter • Kontext: 60.000 Tokens**  

Granite 8B-Modell, das von IBM für verbessertes Reasoning und Instruction Following optimiert wurde, mit einem Kontext von 128k Tokens.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 30 Tokens/Sekunde  
- **Verbrauch:** 1,11 kWh pro Million Tokens 🌱  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Begründung • ✅ Sicherheit  

**Tags:** `Agent` `Begründung` `Sicherheit` `Effizient`  

**Anwendungsfälle:**  
- Allgemeine Aufgaben zum Befolgen von Anweisungen (Klassifizierung, Extraktion, Q&A)  
- Multisprachige KI-Assistenten (12 Sprachen)  
- Verarbeitung sehr langer Dokumente (128k Tokens) für Aufgaben wie Zusammenfassungen, Q&A,...  
- Codegenerierung/Code-Vervollständigung mit Fill-in-the-Middle  
- Integration mit externen Tools über Function Calling  
- Strukturiertes Denken im Modus „Thinking“

### Granite 3.3 2B  
**IBM • 2B Parameter • Kontext: 120.000 Tokens**  

Granite 2B-Modell, feinabgestimmt von IBM, optimiert für Reasoning und Anweisungsbefolgung mit einem Kontext von 128k Tokens.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 45 Tokens/Sekunde  
- **Verbrauch** : 0.74 kWh pro Million Tokens 🌱  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit  

**Tags:** `Agent` `Reasoning` `Sicherheit` `Effizient`  

**Anwendungsfälle:**  
- Leichte Deployment mit großem Kontext (128k Tokens)  
- Allgemeine Anweisungsbefolgungsaufgaben auf eingeschränkten Ressourcen  
- Kompakte multilinguale IA-Assistenten  
- Verarbeitung langer Dokumente auf weniger leistungsstarken Geräten  
- Codegenerierung/Code-Vervollständigung FIM auf Standardarbeitsplätzen

### Magistral 24B  
**Mistral AI • 24B Parameter • Kontext: 40.000 Tokens**  

Das erste Reasoning-Modell von Mistral AI, das sich durch spezifisches Domänenspezifikum, Transparenz und Mehrsprachigkeit auszeichnet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 25 Tokens pro Sekunde  
- **Verbrauch** : 5,33 kWh pro Million Tokens  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Werkzeuge/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit  

**Tags:** `Reasoning` `Mehrsprachig`  

**Anwendungsfälle:**  
- Strategie und Geschäftsbetrieb (Risikomodellierung)  
- Regulierter Industrien (Recht, Finanzen) mit nachvollziehbarem Reasoning  
- Softwareentwicklung (Projektplanung, Architektur)  
- Inhaltserstellung und Kommunikation (kreative Schreibweise, Erzählung)

### Granite 3.1 MoE  
**IBM • 3B Parameter • Kontext: 32.000 Tokens**  

Innovatives Modell von IBM mit der Mixture-of-Experts-Architektur (MoE), das außergewöhnliche Leistungen bietet und die Berechnungsressourcen stark optimiert.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 74 Tokens/Sekunde ⚡  
- **Verbrauch:** 0,45 kWh pro Million Tokens 🌱  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ✅ Sicherheit  

**Tags:** `Agent` `Sicherheit` `Schnell` `MoE` `Effizienz` `Effizient`  

**Anwendungsfälle:**  
- Allgemeine Anwendungen mit optimierten Inferenzkosten (42 Tokens/Sekunde)  
- Dokumentenverarbeitung in CPU-Umgebungen mit begrenztem RAM-Verbrauch  
- Spezialanalysen mit dynamischer Aktivierung relevanter Modellteile  
- Hochdichte Deployment mit geringem Energieverbrauch pro Inferenz  
- Parallele Verarbeitung mehrerer Anfragentypen mit MoE-Spezialisierung

### cogito:14b  
**Deep Cogito • 14B Parameter • Kontext: 32.000 Tokens**  

Speziell für tiefes Schlussfolgern und feines Kontextverstehen entwickelter Modell, ideal für anspruchsvolle analytische Anwendungen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 60 Tokens/Sekunde ⚡  
- **Verbrauch** : 4,4 kWh/Million Tokens  
- **Lizenz** : LLAMA 3.2 Community Lizenz  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Schlussfolgerung • ❌ Sicherheit  

**Tags:** `Agent` `Schlussfolgerung` `Verstehen` `Analyse` `Schnell`  

**Anwendungsfälle:**  
- Semantische Analyse von Texten mit Identifizierung impliziter Implikationen  
- Strukturierter kausaler Schlussfolgerung mit Identifizierung von Ursache-Wirkungs-Beziehungen  
- Synthese komplexer Dokumente mit Extraktion der Schlüsselinformationen  
- Präzise Frage-Antwort-Systeme für spezialisierte Dokumentenkorpora  
- Argumentationsanalyse mit Bewertung der Schlüsselkraft von Schlussfolgerungen

### Cogito 32B  
**Deep Cogito • 32B Parameter • Kontext: 32.000 Tokens**  

Erweiterte Version des Cogito-Modells mit erheblich verstärkten Reasoning- und Analysefähigkeiten, designed für anspruchsvollste Anwendungen im Bereich analytischer KI.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 32 Tokens/Sekunde  
- **Verbrauch:** 8,25 kWh/pro Million Tokens  
- **Lizenz:** LLAMA 3.2 Community Lizenz  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Agent` `Reasoning` `Verständnis` `Analyse`  

**Anwendungsfälle:**  
- Analyse von Multi-Faktor-Szenarien mit probabilistischer Ergebniseinschätzung  
- Lösung wissenschaftlicher Probleme mit formaler Beweisführung der Schritte  
- Hochkritische Anwendungen, die Genauigkeit und Verifizierbarkeit der Ergebnisse erfordern  
- Expertensysteme in spezialisierten Bereichen (rechtlich, medizinisch, technisch)  
- Analyse mit mehrstufigem Reasoning und vollständiger Erklärbarkeit der Schlussfolgerungen

### Qwen3 32B  
**Qwen Team • 32B Parameter • Kontext: 40.000 Tokens**  

Leistungsstarker Modell der neuen Qwen3-Generation mit fortgeschrittenen Fähigkeiten im Reasoning, Code und Agentik sowie erweitertem Kontext.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 18 Tokens pro Sekunde  
- **Verbrauch:** 7,41 kWh pro Million Tokens  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Agent` `Reasoning` `Mehrsprachig` `Großer Kontext`  

**Anwendungsfälle:**  
- Fortgeschrittene conversationelle Agenten mit großem Kontext und Werkzeugintegration (MCP)  
- Lösung komplexer Probleme (Mathematik, Code) mit dem „Thinking“-Modus  
- Analyse und Generierung umfangreicher Dokumente  
- Mehrsprachige Anwendungen (>100 Sprachen), die eine tiefe Verständnis erfordern

### QwQ-32B
**Qwen Team • 32B Parameter • Kontext: 32.000 Tokens**

Modell mit 32 Milliarden Parametern, verbessert durch Verstärkungslernen (RL), um sich in Reasoning, Codierung, Mathematik und Agentenaufgaben hervorzutun.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 35 Tokens pro Sekunde
- **Verbrauch:** 7,54 kWh pro Million Tokens
- **Lizenz:** Apache 2.0
- **Standort:** FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Agent` `Reasoning` `Codierung` `Mathematik`

**Anwendungsfälle:**
- Lösung komplexer Probleme, die Reasoning und die Nutzung von Tools erfordern
- Erstellung und Ausführung von Code mit Ergebnisüberprüfung
- Fortschrittliche mathematische Aufgaben mit Genauigkeitsprüfung
- Agentenanwendungen, die mit der Umgebung interagieren können
- Verbessertes Anweisungsfollowing und Ausrichtung auf menschliche Präferenzen

### DeepSeek-R1 14B  
**DeepSeek AI • 14B Parameter • Kontext: 32.000 Tokens**  

Kompakte und effiziente Version des DeepSeek-R1-Modells, die ein gutes Gleichgewicht zwischen Leistung und Leichtigkeit bietet für Deployment-Szenarien mit Flexibilität und Reaktivität.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 62 Tokens/Sekunde ⚡  
- **Verbrauch:** 4,26 kWh/Million Tokens  
- **Lizenz:** MIT-Lizenz  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Reasoning` `Kompakt` `Vielseitig` `Schnell`  

**Anwendungsfälle:**  
- Allgemeine Anwendungen mit Bedarf an schneller Inferenz (44 Tokens/s)  
- Deployment auf Standard-Servern ohne spezialisierte GPU (14B Parameter)  
- Textverarbeitung mit kontextueller Analyse und schneller Antwortzeit  
- Deployment im Edge Computing mit optimierter lokaler Inferenz  
- Schnelle Prototypenerstellung von KI-Anwendungen mit kurzer Iterationszeit

### DeepSeek-R1 32B  
**DeepSeek AI • 32B Parameter • Kontext: 32.000 Tokens**  

Zwischenversion des DeepSeek-R1-Modells, die ein strategisches Gleichgewicht zwischen den fortgeschrittenen Fähigkeiten der 70B-Version und der Effizienz der 14B-Version bietet, für optimale Vielseitigkeit und Leistung.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 33 Tokens/Sekunde  
- **Verbrauch:** 7,99 kWh pro Million Tokens  
- **Lizenz:** MIT-Lizenz  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Denkfähigkeit • ❌ Sicherheit  

**Tags:** `Denkfähigkeit` `Vielseitig`  

**Anwendungsfälle:**  
- Anwendungen, die ein gutes Leistungs-Kosten-Verhältnis benötigen (32B Parameter)  
- Professionelle Textverarbeitung mit Analyse der semantischen Feinheiten  
- Automatisierte Generierung strukturierter Berichte aus Rohdaten  
- Anwendungen, die Datenanalyse und Inhaltsgenerierung kombinieren  
- Spezialistenassistenten für technische Branchen (rechtlich, medizinisch, technisch)

### Cogito 3B
**Deep Cogito • 3B Parameter • Kontext: 32.000 Tokens**

Kompakte Version des Cogito-Modells, optimiert für das Reasoning auf Geräten mit begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 55 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,61 kWh pro Million Tokens 🌱
- **Lizenz** : LLAMA 3.2 Community-Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Reasoning` `Kompakt` `Eingebettet` `Effizient` `Schnell`

### Granite Embedding  
**IBM • 278M Parameter • Kontext: 512 Tokens**  

Ultraleichter Embedding-Modell von IBM für die semantische Suche und Klassifizierung.  

**Technische Spezifikationen:**  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit  

**Tags :** `Embedding` `Kompakt` `Semantisch` `Effizient`

### Granite 3 Guardian 2B  
**IBM • 2B Parameter • Kontext: 8 192 Tokens**  

Kompakter IBM-Modell, spezialisiert auf Sicherheit und Compliance, erkennend von Risiken und unangemessenen Inhalten.  

**Technische Spezifikationen:**  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Funktionen/Agent • ❌ Vision • ❌ Begründung • ✅ Sicherheit  

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

Ultra-leichtes Micro-Modell der Qwen 2.5-Familie, entwickelt für maximale Effizienz auf Geräten mit begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 162 Tokens pro Sekunde ⚡
- **Verbrauch** : 0,1 kWh pro Million Tokens 🌱
- **Lizenz** : MIT-Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit

**Tags:** `Ultra-kompakt` `Schnell` `Eingebettet` `Effizient`

### Qwen 2.5 1.5B
**Qwen Team • 1,5 Milliarden Parameter • Kontext: 32.000 Tokens**

Sehr kompakter Modell der Qwen 2.5-Familie mit einem guten Gleichgewicht aus Leistung und Größe für leichte Bereitstellungen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 102 Tokens pro Sekunde ⚡
- **Verbrauch** : 0.33 kWh pro Million Tokens 🌱
- **Lizenz** : MIT-Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit

**Tags :** `Kompakt` `Schnell` `Eingebettet` `Effizient`

### Qwen 2.5 14B
**Qwen Team • 14B Parameter • Kontext: 32.000 Tokens**

Ein vielseitiges Mittelgroßmodell der Qwen 2.5-Familie mit einem guten Leistungs-/Ressourcenverhältnis.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 61 Tokens/Sekunde ⚡
- **Verbrauch** : 4,33 kWh/pro Million Tokens
- **Lizenz** : MIT-Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags:** `Vielseitig` `Mehrsprachig` `Schnell`

### Qwen 2.5 32B
**Qwen Team • 32B Parameter • Kontext: 32.000 Tokens**

Leistungsstarker Modell der Qwen 2.5-Familie mit fortgeschrittenen Fähigkeiten in Verständnis und Generierung.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 31 Tokens pro Sekunde
- **Verbrauch** : 8,51 kWh pro Million Tokens
- **Lizenz** : MIT-Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Vielseitig` `Mehrsprachig` `Reasoning`

### Qwen 2.5 3B
**Qwen Team • 3B Parameter • Kontext: 32.000 Tokens**

Kompakter und effizienter Modell der Qwen 2.5-Familie, geeignet für allgemeine Aufgaben bei begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit**: 64 Tokens/Sekunde ⚡
- **Verbrauch**: 0,52 kWh pro Million Tokens 🌱
- **Lizenz**: MIT-Lizenz
- **Standort**: FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Denken • ❌ Sicherheit

**Tags:** `Kompakt` `Schnell` `Vielseitig` `Effizient`

### Qwen3 0.6b  
**Qwen-Team • 0,6 Milliarden Parameter • Kontext: 32.000 Tokens**  

Kompakter und effizienter Modell der Qwen3-Familie, geeignet für allgemeine Aufgaben bei begrenzten Ressourcen.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 112 Tokens/Sekunde ⚡  
- **Verbrauch** : 0,15 kWh pro Million Tokens 🌱  
- **Lizenz** : Apache 2.0  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit  

**Tags:** `Kompakt` `Schnell` `Vielseitig` `Effizient`

### Qwen3 1.7b  
**Qwen Team • 1,7B Parameter • Kontext: 32.000 Tokens**  

Sehr kompakter Modell der Qwen3-Familie, der ein gutes Leistungs-/Größengleichgewicht für leichte Bereitstellungen bietet.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 88 Tokens pro Sekunde ⚡  
- **Verbrauch:** 0,38 kWh pro Million Tokens 🌱  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit  

**Tags:** `Kompakt` `Schnell` `Eingebettet` `Effizient`

### Qwen3 4b  
**Qwen Team • 4B Parameter • Kontext: 32.000 Tokens**  

Kompakter Modell der Qwen3-Familie mit hervorragenden Leistungen in einem leichtgewichtigen und kosteneffizienten Format.  

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 49 Tokens/Sekunde Tokens/Sekunde  
- **Verbrauch:** 0,68 kWh pro Million Tokens 🌱  
- **Lizenz:** Apache 2.0  
- **Standort:** FR 🇫🇷  

**Fähigkeiten:**  
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit  

**Tags:** `Kompakt` `Effizient`

### Qwen3 8b
**Qwen Team • 8B Parameter • Kontext: 32.000 Tokens**

Qwen3 8B Modell, das ein gutes Gleichgewicht zwischen Leistung und Effizienz für allgemeine Aufgaben bietet.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 33 Tokens pro Sekunde
- **Verbrauch** : 1,01 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Reasoning` `Agent` `Mehrsprachig` `Effizient`

### Qwen2.5-VL 3B
**Qwen Team • 3,8B Parameter • Kontext: 128.000 Tokens**

Kompakter Vision-Sprache-Modell, leistungsstarke Lösung für Edge AI.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 65 Tokens/Sekunde ⚡
- **Verbrauch** : 0,51 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Reasoning` `Schnell` `Effizient` `OCR` `Visuelle Lokalisierung` `Edge AI`

### Qwen2.5-VL 7B
**Qwen Team • 7B (8,3B) Parameter • Kontext: 128.000 Tokens**

Leistungsstarker Vision-Langage-Modell, das GPT-4o-mini in bestimmten Aufgaben übertrifft.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 35 tokens/pro Sekunde
- **Verbrauch** : 0,95 kWh/million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Reasoning` `Effizient` `OCR` `Visuelle Lokalisierung`

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B Parameter • Kontext: 16 384 Tokens**

Spezialmodell für Cybersecurity, optimiert für Effizienz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 21 Tokens pro Sekunde
- **Verbrauch** : 1,59 kWh pro Million Tokens
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ✅ Denken • ✅ Sicherheit

**Tags:** `Sicherheit` `Kompakt`

### devstral 24B
**Mistral AI & All Hands AI • 24B Parameter • Kontext: 120.000 Tokens**

Devstral ist ein agentisches LLM für Softwareentwicklungsarbeiten.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 45 Tokens pro Sekunde
- **Verbrauch** : 5,86 kWh pro Million Tokens
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Sicherheit

**Tags:** `Agent` `Programmierung` `Open-Source` `Großer Kontext`

**Anwendungsfälle:**
- Erkundung und Änderung von Code-Basen
- Agentisch
- Europäisch

### Cogito 8B
**Deep Cogito • 8B Parameter • Kontext: 32.000 Tokens**

Mittleres Modell der Cogito-Familie, das ein gutes Gleichgewicht zwischen Reasoning-Fähigkeiten und Effizienz bietet.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 30 Tokens/Sekunde
- **Verbrauch** : 1,11 kWh/Million Tokens 🌱
- **Lizenz** : LLAMA 3.2 Community Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit

**Tags:** `Agent` `Reasoning` `Vielseitig` `Effizient`

### Llama 3.1 8B
**Meta • 8B Parameter • Kontext: 32.000 Tokens**

Basismodell der Llama 3.1-Familie mit soliden Leistungen für seine Größe.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 31 Tokens/Sekunde
- **Verbrauch** : 1,08 kWh pro Million Tokens 🌱
- **Lizenz** : LLAMA 3.1 Community Lizenz
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
❌ Tools/Agent • ❌ Vision • ❌ Begründung • ❌ Sicherheit

**Tags:** `Vielseitig` `Effizient`

### Phi-4 Reasoning 14B  
**Microsoft • 14B Parameter • Kontext: 32.000 Tokens**  

Modell der Microsoft-Phi-Familie, spezialisiert auf komplexes Reasoning und Mathematik.  

**Technische Spezifikationen:**  
- **Geschwindigkeit** : 71 Tokens pro Sekunde ⚡  
- **Verbrauch** : 3,71 kWh pro Million Tokens  
- **Lizenz** : MIT-Lizenz  
- **Standort** : FR 🇫🇷  

**Fähigkeiten:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Sicherheit  

**Tags:** `Reasoning` `Mathematik` `Programmierung` `Schnell`

## Empfohlene Anwendungsfälle

### Mehrsprachiger Dialog
Chatbots und Assistenten, die in mehreren Sprachen kommunizieren können, mit automatischer Spracherkennung, Erhalt des Kontexts über die gesamte Unterhaltung hinweg und Verständnis der sprachlichen Besonderheiten

**Empfohlene Modelle:**
- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Analyse von langen Dokumenten  
Verarbeitung umfangreicher Dokumente (>100 Seiten) mit Erhaltung des Kontexts über den gesamten Text, Extraktion von Schlüsselinformationen, Erstellung relevanter Zusammenfassungen und Beantwortung spezifischer Fragen zum Inhalt  

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
Direkte Verarbeitung von Bildern und visuellen Dokumenten ohne vorherige OCR-Verarbeitung, Interpretation technischer Diagramme, Grafiken, Tabellen, Zeichnungen und Fotos mit Erstellung detaillierter textueller Erklärungen des visuellen Inhalts  

**Empfohlene Modelle:**  
- Granite 3.2 Vision  
- Mistral Small 3.1  
- Gemma 3  
- Qwen2.5-VL

### Sicherheit und Compliance  
Anwendungen mit spezifischen Sicherheitsfunktionen; Filterung sensibler Inhalte, Nachvollziehbarkeit der Schlussfolgerungen, RGPD/HDS-Prüfung, Risikominimierung, Schwachstellenanalyse und Einhaltung branchenspezifischer Vorschriften  

**Empfohlene Modelle:**  
- Granite Guardian  
- Granite 3.3  
- Devstral  
- Mistral Small 3.1  
- Magistral 24b  
- Foundation-Sec-8B

### Leichtgewichts- und eingebettete Bereitstellungen
Anwendungen, die eine minimale Ressourcenbelastung erfordern, Bereitstellung auf Geräten mit begrenzter Kapazität, Echtzeit-Inferenz auf Standard-CPU und Integration in eingebettete Systeme oder IoT

**Empfohlene Modelle:**
- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3