---
title: Catalogo dei Modelli LLMaaS
sidebar_position: 2
---

# Catalogo dei Modelli LLM come Servizio

## Panoramica

Cloud Temple LLMaaS offre **41 modelli linguistici su larga scala** attentamente selezionati e ottimizzati per soddisfare i requisiti più rigorosi di **SecNumCloud**. Il nostro catalogo copre l'intero spettro, dai modelli micro-ultra-efficienzi ai modelli estremamente voluminosi.

### Statistiche Globali

| Metrica | Valore |
|--------|--------|
| **Numero totale di modelli** | 41 modelli |
| **Contesto minimo** | 8 192 token |
| **Contesto massimo** | 262 144 token |
| **Conformità** | SecNumCloud ✅ HDS ✅ Sovranità ✅ C5 ❌ |
| **Localizzazione** | 100% Francia 🇫🇷 |

### Tariffe

| Tipo di utilizzo | Prezzo |
|-------------------|--------|
| **Token di input** | 0,90 € / milione di token |
| **Token di output** | 4 € / milione di token |
| **Ragionamento avanzato** | 21 € / milione di token |

## Modelli di Grandi Dimensioni

### gpt-oss:120b
**OpenAI • 120 miliardi di parametri • Contesto: 120.000 token**

Modello linguistico open-weight di punta di OpenAI, che offre prestazioni solide con una licenza flessibile Apache 2.0.

**Specifiche tecniche:**
- **Velocità**: 140 token/secondo
- **Consumo energetico**: 1,69 kWh/milione di token
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `MoE` `Agente` `Ragionamento` `Open-Source` `Molto Grande`

**Casi d'uso:**
- Agenti conversazionali avanzati con ragionamento complesso e integrazione di strumenti.
- Applicazioni che richiedono una trasparenza totale del processo di ragionamento (chain-of-thought).
- Scenari aziendali che richiedono una licenza permissiva (Apache 2.0).
- Fine-tuning per compiti specializzati che richiedono un modello base potente.

### llama3.3:70b
**Meta • 70B parametri • Contesto: 132.000 token**

Modello multilingue di punta sviluppato da Meta, progettato per eccellere nel dialogo naturale, nel ragionamento complesso e nella comprensione fine delle istruzioni.

**Specifiche tecniche:**
- **Velocità**: 31 token/sec
- **Consumo**: 8,58 kWh/milione di token
- **Licenza**: Licenza Comunitaria LLAMA 3.3
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Dialogo` `Multilingue`

**Casi d'uso:**
- Chatbot multilingue che supportano 8 lingue contemporaneamente
- Esecuzione di istruzioni complesse concatenate (prompt chaining)
- Elaborazione di una finestra di dialogo di 60K token per cronologia conversazionale
- Analisi di documenti giuridici o tecnici estesi (>100 pagine)
- Generazione di testi strutturati con fedeltà alle istruzioni stilistiche

### gemma3:27b  
**Google • 27B parametri • Contesto: 120.000 token**

Modello rivoluzionario di Google che offre un equilibrio ottimale tra potenza ed efficienza, con un rapporto prestazioni/costo eccezionale per applicazioni professionali esigenti.

**Specifiche tecniche:**  
- **Velocità:** 24 token/secondo  
- **Consumo:** 5,56 kWh/milione di token  
- **Licenza:** Google Gemma Terms of Use  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tag:** `Visione` `Agente` `Grande contesto`  

**Casi d'uso:**  
- Analisi di documenti con contesto esteso fino a 120K token (circa 400 pagine)  
- Indicizzazione e ricerca semantica in basi di dati documentali estese  
- Elaborazione simultanea di immagini e testo grazie alle capacità multimodali  
- Estrazione strutturata di dati da PDF e documenti scansionati  
- Integrazione con strumenti esterni tramite l'API function calling

### qwen3-coder:30b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

MoE-optimized model for software engineering tasks, featuring an extremely long context.

**Technical Specifications:**
- **Speed**: 84 tokens/second ⚡
- **Energy Consumption**: 3.14 kWh per million tokens
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

### qwen3-2507:30b-a3b
**Qwen Team • 30B parametri • Contesto: 250.000 token**

Versione migliorata del modo non-pensante di Qwen3-30B, con capacità generali, copertura delle conoscenze e allineamento utente migliorati.

**Specifiche tecniche:**
- **Velocità**: 118 token al secondo ⚡
- **Consumo**: 1,65 kWh per milione di token
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Grande Contesto` `MoE` `Multilingue`

**Casi d'uso:**
- Compiti complessi che richiedono un seguito preciso delle istruzioni e un ragionamento logico.
- Applicazioni multilingue con ampia copertura delle conoscenze.
- Generazione di testo di alta qualità per compiti aperti e soggettivi.
- Analisi di documenti estremamente voluminosi grazie al contesto di 250k token.

### qwen3:30b-a3b
**Qwen Team • 30B parameters • Context: 32,000 tokens**

Latest generation of Qwen models, featuring significant improvements in training data, architecture, and optimization.

**Technical Specifications:**
- **Speed**: 118 tokens/second
- **Energy Consumption**: 1.65 kWh per million tokens
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
- **Speed**: 22 tokens/second
- **Energy Consumption**: 6.06 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

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

Most powerful version of the Qwen2.5-VL series, offering state-of-the-art visual understanding and agent capabilities for the most demanding tasks.

**Technical Specifications:**
- **Speed**: 13 tokens/second
- **Energy Consumption**: 10.26 kWh per million tokens
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

### qwen3-next:80b
**Qwen Team • 80B parameters • Context: 262,144 tokens**

Qwen Next 80B FP8 model, optimized for large contexts and reasoning, served via vLLM (A100).

**Technical Specifications:**
- **Speed** : 59 tokens/second ⚡
- **Energy Consumption** : 3.3 kWh per million tokens
- **License** : Apache 2.0
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `MoE`

**Use Cases:**
- Advanced conversational agents with tool integration
- Analysis of very large documents (up to 260k tokens)
- Code generation and complex tasks requiring structured reasoning

## Modelli Specializzati

### embeddinggemma:300m
**Google • 300M parametri • Contesto: 2.048 token**

Modello di embedding di punta di Google, ottimizzato per le sue dimensioni, ideale per compiti di ricerca e recupero semantico.

**Specifiche tecniche:**
- **Licenza**: Google Gemma Terms of Use
- **Localizzazione**: FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Embedding` `Compacto` `Semantico` `Efficiente` `Multilingue`

**Casi d'uso:**
- Ricerca e recupero informazioni (Retrieval)
- Classificazione e clustering di documenti
- Ricerca di similarità semantica
- Distribuzione su dispositivi con risorse limitate (mobile, laptop)

### gpt-oss:20b
**OpenAI • 20B parameters • Context: 120,000 tokens**

Open-weight language model by OpenAI, optimized for efficiency and deployment on consumer-grade hardware.

**Technical specifications:**
- **Speed**: 85 tokens/second ⚡
- **Energy consumption**: 1.57 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Compact` `Fast`

**Use cases:**
- Deployments on resource-constrained devices (edge devices) or low-cost servers.
- Applications requiring fast inference with strong reasoning capabilities.
- Agent-based use cases involving function calls, web navigation, and code execution.
- Fine-tuning for specialized tasks on consumer-grade hardware.

### qwen3:14b
**Qwen Team • 14B parametri • Contestuale: 32.000 token**

Modello denso di nuova generazione Qwen3 (14B), che offre prestazioni paragonabili a Qwen2.5 32B con un'efficienza superiore.

**Specifiche tecniche:**
- **Velocità**: 44 token al secondo ⚡
- **Consumo**: 3,03 kWh per milione di token
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Ragionamento` `Velocità` `Multilingue`

**Casi d'uso:**
- Compiti generici che richiedono prestazioni elevate e contesto ampio
- Generazione di contenuti creativi e tecnici
- Analisi di dati e ragionamento complesso
- Integrazione con strumenti esterni tramite function calling

### gemma3:4b
**Google • 4B parametri • Contestuale: 120.000 token**

Modello compatto di Google che offre ottime prestazioni in un formato leggero ed economico.

**Specifiche tecniche:**
- **Velocità**: 60 token/al secondo ⚡
- **Consumo**: 0,55 kWh/milione di token 🌱
- **Licenza**: Google Gemma Terms of Use
- **Localizzazione**: FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Visione` `Velocità` `Compatto` `Grande Contesto` `Efficiente`

**Casi d'uso:**
- Applicazioni embedded e edge computing con elaborazione di immagini
- Chatbot multimodali reattivi che richiedono una bassa latenza
- Deployment su larga scala con capacità visive e testuali
- Applicazioni mobili con analisi di immagini e testi
- Elaborazione di richieste visive di complessità semplice a media con alta prestazione

### gemma3:1b
**Google • 1B parametri • Contestuale: 32.000 token**

Micro-modello estremamente leggero progettato per il deployment su dispositivi con risorse molto limitate.

**Specifiche tecniche:**
- **Velocità**: 115 token/al secondo ⚡
- **Consumo energetico**: 0,15 kWh/milione di token 🌱
- **Licenza**: Google Gemma Terms of Use
- **Localizzazione**: FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Ultra-compact` `Incorporato` `Efficiente` `Veloce`

**Casi d'uso:**
- Deployment su dispositivi IoT e sistemi embedded con integrazione API
- Applicazioni che richiedono inferenza locale su CPU con chiamate a funzioni
- Task testuali di base con risposta istantanea e supporto a function calling
- Assistenti compatti per applicazioni di massa con integrazione di servizi esterni
- Sistemi di controllo intelligente che integrano diverse API/servizi

### mistral-small3.1:24b
**Mistral AI • 24B parameters • Context: 120,000 tokens**

Compact and responsive model from Mistral AI, specifically designed to deliver smooth and relevant conversational assistance with optimal response speed.

**Technical specifications:**
- **Speed**: 34 tokens/second
- **Energy consumption**: 3.83 kWh per million tokens
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

**Technical specifications:**
- **Speed**: 56 tokens/second
- **Energy consumption**: 2.33 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security` `Instruction Following`

**Use cases:**
- Conversational agents with enhanced instruction following
- Robust integration with external tools via function calling
- Applications requiring high reliability to avoid repetitions
- Use cases identical to Mistral Small 3.1, with improved performance

### deepcoder:14b
**Agentica x Together AI • 14B parameters • Context: 32,000 tokens**

Open-source AI model (14B) by Together AI & Agentica, a credible alternative to proprietary models for code generation.

**Technical specifications:**
- **Speed**: 9 tokens/second ⚡
- **Energy consumption**: 3.72 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Programming` `Reasoning` `Open-Source` `Mathematics` `Fast`

**Use cases:**
- Code generation in over 15 languages with performance optimization
- Debugging and refactoring of existing codebases with impact analysis
- Implementation of complex algorithms (graphs, trees, heuristics)
- Automated generation of unit tests with code coverage > 80%
- Code translation between languages/frameworks (e.g., Python to JavaScript)

### granite3.2-vision:2b
**IBM • 2B parameters • Context: 16,384 tokens**

Revolutionary compact model from IBM specialized in computer vision, capable of directly analyzing and understanding visual documents without relying on intermediate OCR technologies.

**Technical specifications:**
- **Speed**: 88 tokens/second
- **Energy consumption**: 0.38 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Security` `Compact` `Efficient`

**Use cases:**
- Extraction of structured data from invoices and forms without OCR
- Direct analysis of tables and charts with trend interpretation
- Reading and interpreting technical diagrams (electrical, mechanical)
- Processing handwritten documents with high recognition accuracy
- Lightweight computer vision (2B parameters) with high speed (50 tokens/s)

### granite3.3:8b
**IBM • 8B parametri • Contestuale: 60.000 token**

Modello Granite 8B ottimizzato da IBM per un ragionamento e un follow-up di istruzioni migliorati, con contesto fino a 128k token.

**Specifiche tecniche:**
- **Velocità** : 39 token/secondo
- **Consumo** : 0.85 kWh/milione di token 🌱
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tag:** `Agente` `Ragionamento` `Sicurezza` `Efficiente`

**Casi d'uso:**
- Compiti generali di follow-up di istruzioni (classificazione, estrazione, domande-risposte)
- Assistenti IA multilingue (12 lingue)
- Elaborazione di documenti molto lunghi (fino a 128k token) per compiti di riassunto, domande-risposte, ecc.
- Generazione/completamento di codice con tecnica Fill-in-the-Middle
- Integrazione con strumenti esterni tramite function calling
- Ragionamento strutturato con il modo "Thinking"

### granite3.3:2b
**IBM • 2B parametri • Contestuale: 120.000 token**

Modello Granite 2B ottimizzato da IBM, specializzato nel ragionamento e nell'esecuzione di istruzioni, con un contesto di 128k token.

**Specifiche tecniche:**
- **Velocità**: 88 token/secondo
- **Consumo**: 0,38 kWh/milione di token 🌱
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tag:** `Agente` `Ragionamento` `Sicurezza` `Efficiente`

**Casi d'uso:**
- Deployment leggeri con ampio contesto (128k token)
- Task generali di follow-up istruzioni su risorse limitate
- Assistenti IA multilingue compatti
- Elaborazione di documenti lunghi su dispositivi meno potenti
- Generazione/completamento di codice FIM su workstation standard

### magistral:24b
**Mistral AI • 24B parameters • Context: 40,000 tokens**

The first reasoning model from Mistral AI, excelling in domain-specific reasoning, transparent and multilingual.

**Technical specifications:**
- **Speed**: 29 tokens/second
- **Energy consumption**: 4.59 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Reasoning` `Multilingual`

**Use cases:**
- Business strategy and operations (risk modeling)
- Regulated industries (legal, finance) with traceable reasoning
- Software engineering (project planning, architecture)
- Content creation and communication (creative writing, storytelling)

### cogito:32b
**Deep Cogito • 32B parameters • Context: 32,000 tokens**

Advanced version of the Cogito model, offering significantly enhanced reasoning and analytical capabilities, designed for the most demanding AI analytical applications.

**Technical specifications:**
- **Speed**: 37 tokens/second
- **Energy consumption**: 7.13 kWh per million tokens
- **License**: LLAMA 3.2 Community License
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Understanding` `Analysis`

**Use cases:**
- Multi-factorial scenario analysis with probabilistic evaluation of outcomes  
- Scientific problem solving with formal demonstration of steps  
- High-criticality applications requiring precision and verifiability of results  
- Expert systems in specialized domains (legal, medical, technical)  
- Multi-step reasoning analysis with full explainability of conclusions

### qwen3:32b
**Qwen Team • 32B parametri • Contestuale: 40.000 token**

Modello potente della nuova generazione Qwen3, con capacità avanzate in ragionamento, codifica e agenti, e contesto esteso.

**Specifiche tecniche:**
- **Velocità** : 21 token/secondo
- **Consumo** : 6,35 kWh/milione di token
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agenti • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Ragionamento` `Multilingue` `Grande Contesto`

**Casi d'uso:**
- Agenti conversazionali avanzati con ampio contesto e integrazione di strumenti (MCP)
- Risoluzione di problemi complessi (matematica, codice) con modalità "Thinking"
- Analisi e generazione di documenti di grandi dimensioni
- Applicazioni multilingue (>100 lingue) che richiedono una comprensione approfondita

### qwq:32b
**Qwen Team • 32B parameters • Context: 32,000 tokens**

32-billion-parameter model enhanced via reinforcement learning (RL) to excel in reasoning, coding, mathematics, and agent tasks.

**Technical Specifications:**
- **Speed**: 11 tokens/second
- **Energy Consumption**: 23.99 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Coding` `Mathematics`

**Use Cases:**
- Solving complex problems requiring reasoning and tool utilization
- Code generation and execution with result verification
- Advanced mathematical tasks with accuracy validation
- Agent applications capable of interacting with the environment
- Enhanced instruction following and alignment with human preferences

### deepseek-r1:14b
**DeepSeek AI • 14B parametri • Contesto: 32.000 token**

Versione compatta ed efficiente del modello DeepSeek-R1, che offre un ottimo compromesso tra prestazioni e leggerezza per i deployment che richiedono flessibilità e reattività.

**Specifiche tecniche:**
- **Velocità**: 23 token/secondo ⚡
- **Consumo energetico**: 1,45 kWh/milione di token
- **Licenza**: MIT
- **Localizzazione**: FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Ragionamento` `Compatto` `Polivalente` `Velocità`

**Casi d'uso:**
- Applicazioni generaliste con bisogno di inferenza rapida (44 token/s)
- Deployment su server standard senza GPU specializzate (14B parametri)
- Elaborazione del testo con analisi contestuale e tempi di risposta rapidi
- Deployment su edge computing con inferenza locale ottimizzata
- Prototipazione rapida di applicazioni IA con cicli di iterazione brevi

### deepseek-r1:32b
**DeepSeek AI • 32B parametri • Contesto: 32.000 token**

Versione intermedia del modello DeepSeek-R1 che offre un equilibrio strategico tra le capacità avanzate della versione 70B e l'efficienza della versione 14B, per una versatilità e prestazioni ottimali.

**Specifiche tecniche:**
- **Velocità**: 20 token/secondo
- **Consumo**: 13,18 kWh/milione di token
- **Licenza**: MIT
- **Localizzazione**: FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Ragionamento` `Versatile`

**Casi d'uso:**
- Applicazioni che richiedono un buon equilibrio tra potenza e costo (32B parametri)
- Elaborazione del testo professionale con analisi delle sottigliezze semantiche
- Generazione automatica di rapporti strutturati a partire da dati grezzi
- Applicazioni che combinano analisi dei dati e generazione di contenuti
- Assistenti specializzati per settori tecnici (giuridico, medico, tecnico)

### cogito:3b
**Deep Cogito • 3B parametri • Contesto: 32.000 token**

Versione compatta del modello Cogito, ottimizzata per il ragionamento su dispositivi con risorse limitate.

**Specifiche tecniche:**
- **Velocità**: 78 token al secondo ⚡
- **Consumo**: 0,43 kWh per milione di token 🌱
- **Licenza**: Licenza Community LLAMA 3.2
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Ragionamento` `Compatto` `Incorporato` `Efficiente` `Veloce`

### granite-embedding:278m
**IBM • 278M parameters • Context: 512 tokens**

Ultra-lightweight embedding model by IBM for semantic search and classification.

**Technical specifications:**
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient`

### granite3-guardian:2b
**IBM • 2B parameters • Context: 8,192 tokens**

Compact IBM model specialized in security and compliance, detecting risks and inappropriate content.

**Technical specifications:**
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
**Qwen Team • 0.6B parametri • Contestuale: 32.000 token**

Modello compatto ed efficiente della famiglia Qwen3, adatto a compiti generici su risorse limitate.

**Specifiche tecniche:**
- **Velocità** : 28 token al secondo ⚡
- **Consumo** : 0.6 kWh per milione di token 🌱
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Compatto` `Velocità` `Polivalente` `Efficiente`

### qwen3:1.7b
**Qwen Team • 1.7B parametri • Contestuale: 32.000 token**

Modello molto compatto della famiglia Qwen3, che offre un buon equilibrio tra prestazioni e dimensione per i deployment leggeri.

**Specifiche tecniche:**
- **Velocità**: 46 token al secondo ⚡
- **Consumo**: 0.73 kWh per milione di token 🌱
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Compatto` `Veloce` `Incorporato` `Efficiente`

### qwen3:4b
**Qwen Team • 4 miliardi di parametri • Contesto: 32.000 token**

Modello compatto della famiglia Qwen3 che offre prestazioni eccellenti in un formato leggero ed economico.

**Specifiche tecniche:**
- **Velocità**: 29 token al secondo
- **Consumo**: 1,15 kWh per milione di token 🌱
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Compatto` `Efficiente`

### qwen3-2507-think:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Qwen3-4B model optimized for reasoning, with enhanced performance on logical tasks, mathematics, science, and code, featuring an extended context of 250K tokens.

**Technical Specifications:**
- **Speed**: 77 tokens/second ⚡
- **Energy Consumption**: 1.73 kWh per million tokens
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
**Qwen Team • 4 miliardi di parametri • Contesto: 250.000 token**

Version aggiornata del modello non-pensante Qwen3-4B, con miglioramenti significativi nelle capacità generali, una copertura delle conoscenze estesa e un migliore allineamento con le preferenze degli utenti.

**Specifiche tecniche:**
- **Velocità**: 69 token al secondo ⚡
- **Consumo energetico**: 1,93 kWh per milione di token
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Grande Contesto` `Compatto` `Velocità` `Multilingue`

**Casi d'uso:**
- Compiti generali che richiedono un seguito preciso delle istruzioni e un ragionamento logico.
- Applicazioni multilingue con una vasta copertura delle conoscenze.
- Generazione di testo di alta qualità per compiti aperti e soggettivi.
- Analisi di documenti estremamente voluminosi grazie al contesto di 256k token.

### qwen3:8b
**Qwen Team • 8B parameters • Context: 32,000 tokens**

Qwen3 8B model offering a good balance between performance and efficiency for general tasks.

**Technical specifications:**
- **Speed**: 18 tokens/second
- **Energy consumption**: 1.85 kWh per million tokens 🌱
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Reasoning` `Agent` `Multilingual` `Efficient`

### qwen2.5vl:3b
**Qwen Team • 3.8B parametri • Contesto: 128.000 token**

Modello linguistico-visivo compatto, soluzione performante per l'IA al bordo (edge AI).

**Specifiche tecniche:**
- **Velocità**: 73 token al secondo ⚡
- **Consumo**: 0.45 kWh per milione di token 🌱
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Visione` `Agente` `Ragionamento` `Velocità` `Efficiente` `OCR` `Localizzazione Visiva` `Edge AI`

### qwen2.5vl:7b
**Qwen Team • 7B (8.3B) parametri • Contesto: 128.000 token**

Modello linguistico-visuali performante, superiore a GPT-4o-mini in alcune attività.

**Specifiche tecniche:**
- **Velocità**: 48 token/al secondo
- **Consumo**: 0,69 kWh/milione di token 🌱
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Visione` `Agente` `Ragionamento` `Efficiente` `OCR` `Localizzazione Visiva`

### devstral:24b
**Mistral AI & All Hands AI • 24B parameters • Context: 100,000 tokens**

Devstral is an agentive LLM designed for software engineering tasks.

**Technical Specifications:**
- **Speed**: 50 tokens/second
- **Energy Consumption**: 5.27 kWh per million tokens
- **License**: Apache 2.0
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Programming` `Open-Source` `Large Context`

**Use Cases:**
- Codebase exploration and modification
- Agentic
- European

### cogito:8b
**Deep Cogito • 8B parameters • Context: 32,000 tokens**

Intermediate-sized model from the Cogito family, offering a good balance between reasoning capabilities and efficiency.

**Technical specifications:**
- **Speed**: 43 tokens/second
- **Energy consumption**: 0.77 kWh per million tokens 🌱
- **License**: LLAMA 3.2 Community License
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Versatile` `Efficient`

### granite4-small-h:32b
**IBM • 32B (9B attivi) parametri • Contest: 128 000 token**

Modello MoE (Mixture-of-Experts) di IBM, progettato come "cavallo di battaglia" per le attività quotidiane aziendali, con un'ottima efficienza nei contesti lunghi.

**Specifiche tecniche:**
- **Velocità** : 28 token/secondo
- **Consumo** : 1,19 kWh/milione di token 🌱
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tag:** `Agente` `Ragionamento` `Sicurezza` `MoE` `Grande Contesto` `Efficiente`

**Casi d'uso:**
- Agenti conversazionali per il supporto client con accesso a basi di conoscenza estese.
- Automazione di workflow aziendali che richiedono l'uso di diversi strumenti.
- Analisi di documenti lunghi con un consumo ottimizzato delle risorse.
- Deployment su infrastrutture di dimensioni medie grazie alla sua efficienza.

### granite4-tiny-h:7b  
**IBM • 7B (1B attivi) parametri • Contesto: 128.000 token**

Modello MoE ibrido estremamente efficiente di IBM, progettato per bassa latenza, applicazioni "edge" e locali, e come blocco fondamentale per flussi di lavoro agentici.

**Specifiche tecniche:**  
- **Velocità:** 77 token al secondo ⚡  
- **Consumo energetico:** 0,43 kWh per milione di token 🌱  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza  

**Tag:** `Agente` `Ragionamento` `Sicurezza` `MoE` `Grande Contesto` `Efficiente` `Veloce` `Compatto`

**Casi d'uso:**  
- Applicazioni incorporate e "edge" che richiedono bassa latenza.  
- Task rapide all'interno di flussi di lavoro agentici più ampi (es. chiamata di funzioni).  
- Analisi di documenti su hardware di consumo.  
- Deployment che richiedono un'impronta di memoria minima.

### deepseek-ocr
**DeepSeek AI • 3B parameters • Context: 8,192 tokens**

Specialized OCR model from DeepSeek, designed for high-precision text extraction with formatting preservation.

**Technical specifications:**
- **Speed**: 120 tokens/second ⚡
- **Energy consumption**: 0.16 kWh per million tokens 🌱
- **License**: MIT license
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `OCR` `Efficient`

**Use cases:**
- Extraction of structured text (Markdown/LaTeX) from images/PDFs
- Document digitization with complex tables and formulas

## Use Case Consigliati

### Multilingual Dialogue
Chatbots and assistants capable of communicating in multiple languages with automatic language detection, context preservation throughout the entire conversation, and understanding of linguistic nuances

**Recommended models:**
- Llama 3.3
- Mistral Small 3.2
- Qwen 3
- Openai OSS
- Granite 4

### Analisi di documenti lunghi  
Elaborazione di documenti estesi (>100 pagine) con mantenimento del contesto per l'intero testo, estrazione di informazioni chiave, generazione di riassunti pertinenti e risposta a domande specifiche sul contenuto.

**Modelli consigliati:**  
- Gemma 3  
- Qwen next  
- Qwen 3  
- Granite 4

### Programmazione e sviluppo  
Generazione e ottimizzazione di codice in diversi linguaggi, debug, refactoring, sviluppo di funzionalità complete, comprensione di implementazioni algoritmiche complesse e creazione di test unitari

**Modelli consigliati:**  
- DeepCoder  
- Qwen3 coder  
- Granite 4  
- Devstral

### Analisi visiva  
Elaborazione diretta di immagini e documenti visivi senza pre-elaborazione OCR, interpretazione di diagrammi tecnici, grafici, tabelle, disegni e foto con generazione di spiegazioni testuali dettagliate del contenuto visivo

**Modelli consigliati:**  
- deepseek-OCR  
- Mistral Small 3.2  
- Gemma 3  
- Qwen2.5-VL

### Sicurezza e conformità  
Applicazioni che richiedono capacità specifiche in materia di sicurezza; filtraggio di contenuti sensibili, tracciabilità dei ragionamenti, verifica del rispetto del RGPD/HDS, riduzione dei rischi, analisi delle vulnerabilità e conformità alle normative settoriali

**Modelli consigliati:**  
- Granite Guardian  
- Granite 4  
- Devstral  
- Mistral Small 3.2  
- Magistral 24b

### Lightweight and Embedded Deployments
Applications requiring minimal resource footprint, deployment on devices with limited capacity, real-time inference on standard CPUs, and integration into embedded systems or IoT devices

**Recommended models:**
- Gemma 3
- Granite Guardian
- Granite 4 tiny
- DeepSeek-OCR