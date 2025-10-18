---
title: Katalog der LLMaaS-Modelle
sidebar_position: 2
---

# LLM as a Service Modellkatalog

## Übersicht

Cloud Temple LLMaaS bietet **40 sorgfältig ausgewählte und optimierte große Sprachmodelle**, die den anspruchsvollsten Anforderungen von **SecNumCloud** entsprechen. Unser Katalog umfasst die gesamte Bandbreite – von ultra-effizienten Mikromodellen bis hin zu extrem großen Modellen.

### Globale Statistiken

| Metrik | Wert |
|--------|------|
| **Gesamte Anzahl an Modellen** | 40 Modelle |
| **Minimale Kontextlänge** | 8.192 Tokens |
| **Maximale Kontextlänge** | 262.144 Tokens |
| **Konformität** | SecNumCloud ✅ HDS ✅ Souveränität ✅ C5 ❌ |
| **Standort** | 100 % Frankreich 🇫🇷 |

### Pricing

| Usage Type | Price |
|------------|-------|
| **Input Tokens** | €0.90 per million tokens |
| **Output Tokens** | €4.00 per million tokens |
| **Advanced Reasoning** | €21.00 per million tokens |

## Large Language Models

### gpt-oss:120b
**OpenAI • 120B Parameters • Context: 120,000 tokens**

State-of-the-art open-weight language model from OpenAI, delivering strong performance with a flexible Apache 2.0 license.

**Technical Specifications:**
- **Speed**: 38 tokens/second
- **Energy Consumption**: 3.51 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Very Large`

**Use Cases:**
- Advanced conversational agents with complex reasoning and tool integration.
- Applications requiring full transparency of the reasoning process (chain-of-thought).
- Commercial scenarios needing a permissive license (Apache 2.0).
- Fine-tuning for specialized tasks requiring a powerful base model.

### llama3.3:70b
**Meta • 70B parameters • Context: 132,000 tokens**

State-of-the-art multilingual model developed by Meta, designed to excel in natural dialogue, complex reasoning, and nuanced instruction understanding.

**Technical Specifications:**
- **Speed**: 30 tokens/second
- **Energy Consumption**: 8.87 kWh per million tokens
- **License**: LLAMA 3.3 Community License
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Dialogue` `Multilingual`

**Use Cases:**
- Multilingual chatbots supporting 8 languages simultaneously
- Execution of complex, chained instructions (prompt chaining)
- Processing of 60K-token dialogue windows for conversational history
- Analysis of large legal or technical documents (>100 pages)
- Generation of structured text with strict adherence to stylistic guidelines

### qwen3:235b
**Qwen Team • 235B Parameters • Context: 60,000 tokens**

Highly advanced next-generation Qwen3 model with extensive capabilities for handling the most complex tasks.

**Technical Specifications:**
- **Speed**: 17 tokens/second ⚡
- **Energy Consumption**: 7.84 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Multilingual` `Very Large`

**Use Cases:**
- Highly advanced conversational agents with large context and tool integration (MCP)
- Solving extremely complex problems (mathematics, code)
- Analysis and generation of very large, technical documents
- Multilingual applications (>100 languages) requiring high-fidelity understanding and generation

### gemma3:27b
**Google • 27B Parameters • Context: 120,000 tokens**

Revolutionärer Modell von Google, der ein optimales Gleichgewicht zwischen Leistung und Effizienz bietet und ein außergewöhnliches Leistungs-/Kostenverhältnis für anspruchsvolle professionelle Anwendungen aufweist.

**Technische Spezifikationen:**
- **Geschwindigkeit:** 20 Tokens/Sekunde
- **Energieverbrauch:** 6,67 kWh pro Million Tokens
- **Lizenz:** Google Gemma Nutzungsbedingungen
- **Standort:** FR 🇫🇷

**Funktionen:**
✅ Werkzeuge/Agent • ✅ Vision • ❌ Schlussfolgerung • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Großer Kontext`

**Anwendungsfälle:**
- Dokumentenanalyse mit erweitertem Kontext bis zu 120.000 Tokens (ca. 400 Seiten)
- Indexierung und semantische Suche in umfangreichen Dokumentenbanken
- Gleichzeitige Verarbeitung von Bildern und Text dank multimodaler Fähigkeiten
- Strukturierte Datenextraktion aus PDFs und gescannten Dokumenten
- Integration mit externen Tools über die API-Funktionsaufrufe

### qwen3-coder:30b  
**Qwen Team • 30B Parameters • Context: 250,000 tokens**

MoE-optimized model tailored for software engineering tasks, featuring an exceptionally long context window.

**Technical Specifications:**  
- **Speed**: 80 tokens/second ⚡  
- **Energy Consumption**: 3.3 kWh per million tokens  
- **License**: Apache 2.0  
- **Location**: FR 🇫🇷  

**Capabilities:**  
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security  

**Tags:** `Agent` `Programming` `Large Context` `MoE`  

**Use Cases:**  
- Software engineering agents for exploring and modifying codebases  
- Generation of complex code with repository-scale understanding  
- Reasoning tasks over extended contexts  
- Code improvement via reinforcement learning

### qwen3-2507-think:30b-a3b
**Qwen Team • 30B Parameters • Context: 120,000 tokens**

Advanced model from the Qwen3 family, optimized for deep reasoning and extended contexts.

**Technical Specifications:**
- **Speed**: 80 tokens/second ⚡
- **Energy Consumption**: 3.3 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context`

**Use Cases:**
- Analysis of very large documents with complex reasoning.
- Conversational agents with extended conversation history.
- Q&A tasks over large text corpora.
- Integration with external tools via function calling in large-context scenarios.

### qwen3-2507:30b-a3b
**Qwen Team • 30B Parameters • Context: 250,000 tokens**

Improved version of the Qwen3-30B non-thinking mode, featuring enhanced general capabilities, broader knowledge coverage, and better user alignment.

**Technical Specifications:**
- **Speed**: 90 tokens/second ⚡
- **Energy Consumption**: 2.16 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Large Context` `MoE` `Multilingual`

**Use Cases:**
- Complex tasks requiring precise instruction following and logical reasoning.
- Multilingual applications with extensive knowledge coverage.
- High-quality text generation for open-ended and subjective tasks.
- Analysis of very large documents thanks to the 250k-token context.

### qwen3:30b-a3b
**Qwen Team • 30B parameters • Context: 32,000 tokens**

Latest generation of Qwen models, featuring significant improvements in training data, architecture, and optimization.

**Technical Specifications:**
- **Speed**: 50 tokens/second
- **Energy Consumption**: 3.89 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Programming` `Multilingual` `MoE`

**Use Cases:**
- Complex reasoning tasks and code generation.
- Multilingual applications requiring broad linguistic coverage.
- Scenarios demanding a strong balance between performance and resource efficiency, thanks to the MoE architecture.

### qwen2.5vl:32b
**Qwen Team • 32B parameters • Context: 120,000 tokens**

Most powerful version of the Qwen2.5-VL series, offering state-of-the-art visual understanding and agent capabilities.

**Technical Specifications:**
- **Speed**: 18 tokens/second
- **Energy Consumption**: 7.41 kWh per million tokens
- **License**: Apache 2.0
- **Localization**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Reasoning` `OCR` `Visual Localization` `Large`

**Use Cases:**
- Analysis of highly complex documents and diagrams
- Autonomous visual agents for navigation and interaction with GUIs
- High-precision object localization and text recognition tasks
- Generation of rich, detailed descriptions from complex images

### qwen2.5vl:72b
**Qwen Team • 72B parameters • Context: 128,000 tokens**

Most powerful version of the Qwen2.5-VL series, delivering state-of-the-art visual understanding and agent capabilities for the most demanding tasks.

**Technical Specifications:**
- **Speed**: 15 tokens/second
- **Energy Consumption**: 8.89 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Reasoning` `OCR` `Visual Localization` `Very Large`

**Use Cases:**
- Analysis of highly complex documents and diagrams
- Autonomous visual agents for navigation and interaction with GUIs
- High-precision object localization and text recognition tasks
- Generation of rich, detailed descriptions from highly complex images

## Specialized Models

### embeddinggemma:300m
**Google • 300M parameters • Context: 2,048 tokens**

State-of-the-art embedding model from Google, optimized for its size, ideal for search and semantic retrieval tasks.

**Technical Specifications:**
- **License** : Google Gemma Terms of Use
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient` `Multilingual`

**Use Cases:**
- Information search and retrieval (Retrieval)
- Document classification and clustering
- Semantic similarity search
- Deployment on resource-constrained devices (mobile, laptop)

### gpt-oss:20b
**OpenAI • 20B Parameters • Context: 120,000 tokens**

Open-weight language model from OpenAI, optimized for efficiency and deployment on consumer-grade hardware.

**Technical Specifications:**
- **Speed**: 57 tokens/second ⚡
- **Energy Consumption**: 2.34 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Compact` `Fast`

**Use Cases:**
- Deployments on resource-constrained devices (edge devices) or low-cost servers.
- Applications requiring fast inference with strong reasoning capabilities.
- Agent-based use cases involving function calls, web navigation, and code execution.
- Fine-tuning for specialized tasks on consumer hardware.

### qwen3:14b
**Qwen Team • 14B Parameter • Kontext: 32.000 Tokens**

Neue Generation dichter Modell Qwen3 (14B), das Leistungsmerkmale von Qwen2.5 32B bietet, jedoch mit besserer Effizienz.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 40 Tokens/Sekunde ⚡
- **Energieverbrauch** : 3,33 kWh pro Million Tokens
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Werkzeuge/Agent • ❌ Vision • ✅ Schlussfolgerung • ❌ Sicherheit

**Tags:** `Agent` `Schlussfolgerung` `Schnell` `Mehrsprachig`

**Anwendungsfälle:**
- Allgemeine Aufgaben, die hohe Leistung und großer Kontext erfordern
- Erstellung kreativen und technischen Inhalts
- Datenanalyse und komplexes Schlussfolgern
- Integration mit externen Werkzeugen über Function Calling

### gemma3:12b
**Google • 12B Parameters • Context: 120,000 tokens**

Intermediate version of the Gemma 3 model, offering an excellent balance between performance and efficiency.

**Technical Specifications:**
- **Speed** : 56 tokens/second ⚡
- **Energy Consumption** : 4.71 kWh per million tokens
- **License** : Google Gemma Terms of Use
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Fast` `Large Context`

**Use Cases:**
- Multimodal applications with moderate resource constraints
- Document processing with standard context (up to 100 pages)
- Combined text generation and image analysis
- Deployment on standard GPUs without specialized infrastructure
- Advanced chatbots with integrated visual and textual capabilities

### gemma3:4b  
**Google • 4B Parameter • Kontext: 120.000 Tokens**

Leichtgewichtiges Modell von Google mit hervorragender Leistung in einem kompakten und kosteneffizienten Format.

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 57 Tokens/Sekunde ⚡  
- **Energieverbrauch:** 0,58 kWh pro Million Tokens 🌱  
- **Lizenz:** Google Gemma Nutzungsbedingungen  
- **Standort:** FR 🇫🇷  

**Funktionen:**  
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Sicherheit  

**Tags:** `Vision` `Schnell` `Kompakt` `Großer Kontext` `Effizient`

**Anwendungsfälle:**  
- Eingebettete Anwendungen und Edge Computing mit Bildverarbeitung  
- Reaktive multimodale Chatbots mit geringer Latenz  
- Skalierbare Bereitstellungen mit visuellen und textuellen Fähigkeiten  
- Mobile Anwendungen mit Bild- und Textanalyse  
- Verarbeitung einfacher bis mittelkomplexer visueller Anfragen mit hoher Leistung

### gemma3:1b  
**Google • 1B Parameter • Kontext: 32.000 Tokens**

Ultra-leichter Mikro-Modell für die Bereitstellung auf Geräten mit sehr geringen Ressourcen.

**Technische Spezifikationen:**  
- **Geschwindigkeit:** 112 Tokens/Sekunde ⚡  
- **Energieverbrauch:** 0,15 kWh pro Million Tokens 🌱  
- **Lizenz:** Google Gemma Nutzungsbedingungen  
- **Standort:** FR 🇫🇷  

**Funktionen:**  
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit  

**Tags:** `Ultra-kompakt` `Eingebettet` `Effizient` `Schnell`  

**Anwendungsfälle:**  
- Bereitstellung auf IoT-Geräten und eingebetteten Systemen mit API-Integration  
- Anwendungen, die lokale Inferenz auf CPU mit Funktionsaufrufen erfordern  
- Einfache Textaufgaben mit sofortiger Antwortzeit und Funktionsaufruf-Fähigkeit  
- Kompakte Assistenten für Endverbraucher-Anwendungen mit Integration externer Dienste  
- Intelligente Steuerungssysteme, die mehrere APIs/Services integrieren

### mistral-small3.1:24b
**Mistral AI • 24B parameters • Context: 120,000 tokens**

Compact and responsive model from Mistral AI, specifically designed to deliver smooth and relevant conversational assistance with optimal response speed.

**Technical specifications:**
- **Speed**: 35 tokens/second
- **Energy consumption**: 3.72 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security`

**Use cases:**
- Conversational applications
- Virtual assistants combining image and text analysis (26 tokens/s)
- Technical support chatbots with access to technical documentation
- Content creation/editing tools with instant responses (blogs, emails)
- Deployment on standard infrastructure (24B parameters)

### mistral-small3.2:24b
**Mistral AI • 24B parameters • Context: 128,000 tokens**

Minor update to Mistral Small 3.1, improving instruction following, function calling robustness, and reducing repetition errors.

**Technical Specifications:**
- **Speed**: 32 tokens/second
- **Energy Consumption**: 5.51 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security` `Instruction Following`

**Use Cases:**
- Conversational agents with enhanced instruction following
- Robust integration with external tools via function calling
- Applications requiring high reliability to avoid repetitions
- Use cases identical to Mistral Small 3.1, with improved performance

### deepcoder:14b  
**Agentica x Together AI • 14B parameters • Context: 32,000 tokens**

Open-source AI model (14B) by Together AI & Agentica, a credible alternative to proprietary models for code generation.

**Technical Specifications:**  
- **Speed:** 64 tokens/second ⚡  
- **Energy Consumption:** 4.12 kWh per million tokens  
- **License:** Apache 2.0  
- **Location:** FR 🇫🇷  

**Capabilities:**  
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security  

**Tags:** `Programming` `Reasoning` `Open-Source` `Mathematics` `Fast`  

**Use Cases:**  
- Code generation in over 15 programming languages with performance optimization  
- Debugging and refactoring of existing codebases with impact analysis  
- Implementation of complex algorithms (graphs, trees, heuristics)  
- Automated generation of unit tests with code coverage > 80%  
- Code translation between languages/frameworks (e.g., Python to JavaScript)

### granite3.2-vision:2b
**IBM • 2B parameters • Context: 16,384 tokens**

Revolutionary compact model from IBM specialized in computer vision, capable of directly analyzing and understanding visual documents without relying on intermediate OCR technologies.

**Technical Specifications:**
- **Speed**: 48 tokens/second
- **Energy Consumption**: 0.69 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Security` `Compact` `Efficient`

**Use Cases:**
- Extraction of structured data from invoices and forms without OCR
- Direct analysis of tables and charts with trend interpretation
- Reading and interpreting technical diagrams (electrical, mechanical)
- Processing handwritten documents with high recognition accuracy
- Lightweight computer vision (2B parameters) with high speed (50 tokens/s)

### granite3.3:8b
**IBM • 8B Parameter • Kontext: 60.000 Tokens**

Granite-Modell 8B, feinabgestimmt von IBM für verbessertes Reasoning und Befolgung von Anweisungen, mit einem Kontext von 128k Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 30 Tokens/Sekunde
- **Energieverbrauch** : 1,11 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Funktionen:**
✅ Werkzeuge/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit

**Tags:** `Agent` `Reasoning` `Sicherheit` `Effizient`

**Anwendungsfälle:**
- Allgemeine Aufgaben zur Befolgung von Anweisungen (Klassifizierung, Extraktion, Fragen und Antworten)
- Multisprachige KI-Assistenten (12 Sprachen)
- Verarbeitung sehr langer Dokumente (128k Tokens) für Zusammenfassungen, Fragen und Antworten usw.
- Codegenerierung/Code-Vervollständigung mit Fill-in-the-Middle
- Integration mit externen Werkzeugen über Function Calling
- Strukturiertes Reasoning im „Thinking“-Modus

### granite3.3:2b
**IBM • 2B Parameters • Kontext: 120.000 Tokens**

Fine-tuned-Modell Granite 2B von IBM, optimiert für Reasoning und Anweisungsfolge, mit einem Kontext von 128k Tokens.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 45 Tokens/Sekunde
- **Energieverbrauch** : 0,74 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Fähigkeiten:**
✅ Werkzeuge/Agent • ❌ Vision • ✅ Reasoning • ✅ Sicherheit

**Tags:** `Agent` `Reasoning` `Sicherheit` `Effizient`

**Anwendungsfälle:**
- Leichte Bereitstellungen mit großem Kontext (128k Tokens)
- Allgemeine Anweisungsfolge-Aufgaben bei begrenzten Ressourcen
- Kompakte mehrsprachige KI-Assistenten
- Verarbeitung langer Dokumente auf weniger leistungsfähigen Geräten
- Code-Generierung/Code-Vervollständigung (FIM) auf Standard-Arbeitsstationen

### magistral:24b
**Mistral AI • 24B parameters • Context: 40,000 tokens**

Mistral AI's first reasoning model, excelling in domain-specific reasoning, transparent and multilingual.

**Technical Specifications:**
- **Speed**: 25 tokens/second
- **Energy Consumption**: 5.33 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Reasoning` `Multilingual`

**Use Cases:**
- Business strategy and operations (risk modeling)
- Regulated industries (legal, finance) with traceable reasoning
- Software engineering (project planning, architecture)
- Content creation and communication (creative writing, storytelling)

### cogito:32b
**Deep Cogito • 32B parameters • Context: 32,000 tokens**

Advanced version of the Cogito model offering significantly enhanced reasoning and analytical capabilities, designed for the most demanding AI analytical applications.

**Technical Specifications:**
- **Speed**: 32 tokens/second
- **Energy Consumption**: 8.25 kWh per million tokens
- **License**: LLAMA 3.2 Community License
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Understanding` `Analysis`

**Use Cases:**
- Multi-factorial scenario analysis with probabilistic evaluation of outcomes
- Scientific problem solving with formal step-by-step demonstration
- High-criticality applications requiring precision and verifiability of results
- Expert systems in specialized domains (legal, medical, technical)
- Multi-step reasoning analysis with full explainability of conclusions

### qwen3:32b
**Qwen Team • 32B Parameters • Context: 40,000 tokens**

Advanced next-generation Qwen3 model with powerful capabilities in reasoning, coding, and agent-based tasks, featuring an extended context window.

**Technical Specifications:**
- **Speed**: 18 tokens/second
- **Energy Consumption**: 7.41 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Multilingual` `Large Context`

**Use Cases:**
- Advanced conversational agents with large context and tool integration (MCP)
- Solving complex problems (math, code) using "Thinking" mode
- Analysis and generation of large documents
- Multilingual applications (>100 languages) requiring deep understanding

### qwq:32b
**Qwen Team • 32B parameters • Context: 32,000 tokens**

32-billion-parameter model enhanced via reinforcement learning (RL) to excel in reasoning, coding, mathematics, and agent tasks.

**Technical Specifications:**
- **Speed**: 35 tokens/second
- **Energy Consumption**: 7.54 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Coding` `Mathematics`

**Use Cases:**
- Solving complex problems requiring reasoning and tool utilization
- Code generation and execution with result verification
- Advanced mathematical tasks with accuracy validation
- Agent applications capable of interacting with environments
- Enhanced instruction following and alignment with human preferences

### deepseek-r1:14b
**DeepSeek AI • 14B parameters • Context: 32,000 tokens**

Compact and efficient version of the DeepSeek-R1 model, offering an excellent balance between performance and lightweight design for deployments requiring flexibility and responsiveness.

**Technical Specifications:**
- **Speed**: 62 tokens/second ⚡
- **Energy Consumption**: 4.26 kWh per million tokens
- **License**: MIT License
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Compact` `Versatile` `Fast`

**Use Cases:**
- General-purpose applications requiring fast inference (44 tokens/s)
- Deployments on standard servers without specialized GPUs (14B parameters)
- Text processing with contextual analysis and fast response times
- Edge computing deployment with optimized local inference
- Rapid prototyping of AI applications with short iteration times

### deepseek-r1:32b
**DeepSeek AI • 32B parameters • Context: 32,000 tokens**

Intermediate version of the DeepSeek-R1 model, offering a strategic balance between the advanced capabilities of the 70B version and the efficiency of the 14B version, for optimal versatility and performance.

**Technical specifications:**
- **Speed**: 33 tokens/second
- **Energy consumption**: 7.99 kWh per million tokens
- **License**: MIT license
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Versatile`

**Use cases:**
- Applications requiring a good balance of power and cost (32B parameters)
- Professional text processing with semantic nuance analysis
- Automated generation of structured reports from raw data
- Applications combining data analysis and content generation
- Specialized assistants for technical fields (legal, medical, technical)

### cogito:3b
**Deep Cogito • 3B Parameters • Context: 32,000 tokens**

Compact version of the Cogito model, optimized for reasoning on devices with limited resources.

**Technical Specifications:**
- **Speed** : 55 tokens/second ⚡
- **Energy Consumption** : 0.61 kWh per million tokens 🌱
- **License** : LLAMA 3.2 Community License
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Compact` `Embedded` `Efficient` `Fast`

### granite-embedding:278m
**IBM • 278M parameters • Context: 512 tokens**

Ultra-lightweight embedding model from IBM for semantic search and classification.

**Technical specifications:**
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient`

### granite3-guardian:2b
**IBM • 2B Parameters • Context: 8,192 tokens**

Compact IBM model specialized in security and compliance, detecting risks and inappropriate content.

**Technical Specifications:**
- **License** : Apache 2.0
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Security` `Compliance` `Compact` `Filtering` `Efficient`

### granite3-guardian:8b
**IBM • 8B parameters • Context: 32,000 tokens**

IBM's specialized model for security and compliance, offering advanced risk detection capabilities.

**Technical specifications:**
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Security` `Compliance` `Filtering`

### qwen3:0.6b
**Qwen Team • 0,6 Milliarden Parameter • Kontext: 32.000 Tokens**

Kompakter und effizienter Modelltyp der Qwen3-Familie, geeignet für allgemeine Aufgaben bei begrenzten Ressourcen.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 112 Tokens/Sekunde ⚡
- **Energieverbrauch** : 0,15 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Funktionen:**
✅ Werkzeuge/Agent • ❌ Bildverarbeitung • ❌ Schlussfolgerung • ❌ Sicherheit

**Tags:** `Kompakt` `Schnell` `Vielseitig` `Effizient`

### qwen3:1.7b
**Qwen Team • 1,7 Milliarden Parameter • Kontext: 32.000 Tokens**

Sehr kompakter Modell der Qwen3-Familie, der ein gutes Leistungs-/Größen-Verhältnis für leichte Bereitstellungen bietet.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 88 Tokens/Sekunde ⚡
- **Energieverbrauch** : 0,38 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Funktionen:**
✅ Werkzeuge/Agent • ❌ Vision • ❌ Schlussfolgerung • ❌ Sicherheit

**Tags:** `Kompakt` `Schnell` `Eingebettet` `Effizient`

### qwen3:4b
**Qwen Team • 4B Parameter • Kontext: 32.000 Tokens**

Leichtgewichtiges Modell der Qwen3-Familie mit hervorragender Leistung in einem kompakten und kostengünstigen Format.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 49 Tokens/Sekunde
- **Energieverbrauch** : 0,68 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Funktionen:**
✅ Werkzeuge/Agent • ❌ Bildverarbeitung • ❌ Schlussfolgerung • ❌ Sicherheit

**Tags:** `Kompakt` `Effizient`

### qwen3-2507-think:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Qwen3-4B model optimized for reasoning, with improved performance on logical tasks, mathematics, science, and code, featuring an extended context of up to 250K tokens.

**Technical Specifications:**
- **Speed**: 70 tokens/second ⚡
- **Energy Consumption**: 1.9 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `Compact` `Fast`

**Use Cases:**
- Highly complex reasoning tasks (logic, math, science, code).
- Conversational agents with extremely long conversation history (up to 256k tokens).
- Deep reasoning analysis of very large documents.
- Integration with external tools via function calling, even within very large contexts.

### qwen3-2507:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Updated version of the Qwen3-4B non-thinking mode, featuring significant improvements in general capabilities, expanded knowledge coverage, and better alignment with user preferences.

**Technical Specifications:**
- **Speed**: 70 tokens/second ⚡
- **Energy Consumption**: 1.9 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Large Context` `Compact` `Fast` `Multilingual`

**Use Cases:**
- General tasks requiring precise instruction following and logical reasoning.
- Multilingual applications with broad knowledge coverage.
- High-quality text generation for open-ended and subjective tasks.
- Analysis of very large documents thanks to a 256k-token context.

### qwen3:8b
**Qwen Team • 8B parameters • Context: 32,000 tokens**

Qwen3 8B model offering a good balance between performance and efficiency for general tasks.

**Technical Specifications:**
- **Speed**: 33 tokens/second
- **Energy Consumption**: 1.01 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Agent` `Multilingual` `Efficient`

### qwen2.5vl:3b
**Qwen Team • 3.8B Parameters • Context: 128,000 tokens**

Compact Vision-Language model, high-performance solution for edge AI.

**Technical Specifications:**
- **Speed** : 65 tokens/second ⚡
- **Energy Consumption** : 0.51 kWh per million tokens 🌱
- **License** : Apache 2.0
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Reasoning` `Fast` `Efficient` `OCR` `Visual Localization` `Edge AI`

### qwen2.5vl:7b
**Qwen Team • 7B (8,3B) Parameter • Kontext: 128.000 Tokens**

Leistungsstarker Vision-Sprach-Modell, das GPT-4o-mini bei bestimmten Aufgaben übertrifft.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 35 Tokens/Sekunde
- **Energieverbrauch** : 0,95 kWh pro Million Tokens 🌱
- **Lizenz** : Apache 2.0
- **Standort** : FR 🇫🇷

**Funktionen:**
✅ Werkzeuge/Agent • ✅ Vision • ✅ Schlussfolgerung • ❌ Sicherheit

**Tags:** `Vision` `Agent` `Schlussfolgerung` `Effizient` `OCR` `Ortsbestimmung visuell`

### devstral:24b
**Mistral AI & All Hands AI • 24B parameters • Context: 120,000 tokens**

Devstral is an agentive LLM designed for software engineering tasks.

**Technical Specifications:**
- **Speed**: 45 tokens/second
- **Energy Consumption**: 5.86 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Programming` `Open-Source` `Large Context`

**Use Cases:**
- Codebase exploration and modification
- Agentic workflows
- European origin

### cogito:8b
**Deep Cogito • 8B parameters • Context: 32,000 tokens**

Intermediate-sized model from the Cogito family, offering a good balance between reasoning capabilities and efficiency.

**Technical Specifications:**
- **Speed** : 30 tokens/second
- **Energy Consumption** : 1.11 kWh per million tokens 🌱
- **License** : LLAMA 3.2 Community License
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Versatile` `Efficient`

### granite4-small-h:32b
**IBM • 32B (9B active) parameters • Context: 128,000 tokens**

IBM's MoE (Mixture-of-Experts) model, designed as a "workhorse" for daily enterprise tasks, featuring excellent efficiency for long contexts.

**Technical Specifications:**
- **Speed**: 21 tokens/second
- **Energy Consumption**: 1.59 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Agent` `Reasoning` `Security` `MoE` `Large Context` `Efficient`

**Use Cases:**
- Conversational agents for customer support with access to extensive knowledge bases.
- Enterprise workflow automation requiring the use of multiple tools.
- Analysis of long documents with optimized resource consumption.
- Deployment on medium-scale infrastructures thanks to its efficiency.

### granite4-tiny-h:7b
**IBM • 7B (1B actif) parameters • Context: 128,000 tokens**

Ultra-efficient hybrid MoE model from IBM, designed for low latency, edge and local applications, and as a foundational component for agent workflows.

**Technical Specifications:**
- **Speed**: 42 tokens/second ⚡
- **Energy Consumption**: 0.79 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Localization**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Agent` `Reasoning` `Security` `MoE` `Large Context` `Efficient` `Fast` `Compact`

**Use Cases:**
- Embedded and edge applications requiring low latency.
- Fast tasks within larger agent workflows (function calling).
- Document analysis on consumer-grade hardware.
- Deployments requiring minimal memory footprint.

## Recommended Use Cases

### Multilingual Dialogue
Chatbots and assistants capable of communicating in multiple languages with automatic language detection, context preservation throughout the entire conversation, and understanding of linguistic nuances

**Recommended Models:**
- Llama 3.3
- Mistral Small 3.2
- Qwen 3
- Granite 3.3

### Long Document Analysis  
Processing large documents (>100 pages) while preserving context across the entire text, extracting key information, generating relevant summaries, and answering specific questions about the content.

**Recommended Models:**  
- Gemma 3  
- Qwen3  
- Granite 3.3

### Programming and Development  
Code generation and optimization across multiple languages, debugging, refactoring, full feature development, understanding of complex algorithmic implementations, and unit test creation

**Recommended models:**
- DeepCoder
- QwQ
- Qwen3 coder
- Granite 3.3
- Devstral

### Visual Analysis  
Direct processing of images and visual documents without prior OCR preprocessing, interpretation of technical diagrams, charts, tables, drawings, and photos with generation of detailed textual explanations of the visual content.

**Recommended Models:**  
- Granite 3.2 Vision  
- Mistral Small 3.2  
- Gemma 3  
- Qwen2.5-VL

### Security and Compliance  
Applications requiring specific security capabilities; sensitive content filtering, reasoning traceability, GDPR/HDS compliance verification, risk minimization, vulnerability analysis, and adherence to industry-specific regulations

**Recommended models:**  
- Granite Guardian  
- Granite 3.3  
- Devstral  
- Mistral Small 3.1  
- Magistral 24b  
- Foundation-Sec-8B

### Lightweight and Embedded Deployments  
Applications requiring minimal resource footprint, deployment on devices with limited capacity, real-time inference on standard CPUs, and integration into embedded systems or IoT devices

**Recommended Models:**
- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3