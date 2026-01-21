---
title: Catalogo dei Modelli IA
sidebar_position: 2
---

# Catalogo dei Modelli LLM come Servizio

## Panoramica

Cloud Temple LLMaaS offre **42 modelli linguistici su larga scala** attentamente selezionati e ottimizzati per soddisfare i requisiti più rigorosi di **SecNumCloud**. Il nostro catalogo copre l'intero spettro, dai modelli micro-ultra-efficienzi ai modelli estremamente voluminosi.

### Statistiche Globali

| Metrica | Valore |
|--------|--------|
| **Numero totale di modelli** | 42 modelli |
| **Contesto minimo** | 2.048 token |
| **Contesto massimo** | 262.144 token |
| **Conformità** | SecNumCloud ✅ HDS ✅ Sovranità ✅ C5 ✅ |
| **Localizzazione** | 100% Francia 🇫🇷 |

### Tariffe

| Tipo di utilizzo | Prezzo |
|-------------------|--------|
| **Token di input** | 0,90 € / milione di token |
| **Token di output** | 4 € / milione di token |
| **Ragionamento avanzato** | 21 € / milione di token |

## Modelli di Grandi Dimensioni

### cogito:32b
**Deep Cogito • 32B parameters • Context: 32,000 tokens**

Advanced version of the Cogito model offering significantly enhanced reasoning and analytical capabilities, designed for the most demanding AI analytical applications.

**Technical specifications:**
- **Speed** : 20 tokens/second
- **Consumption** : 6.67 kWh/million tokens
- **License** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Understanding` `Analysis`

**Use cases:**
- Multi-factorial scenario analysis with probabilistic evaluation of outcomes
- Scientific problem solving with formal demonstration of steps
- High-criticality applications requiring precision and verifiability of results
- Expert systems in specialized domains (legal, medical, technical)
- Multi-step reasoning analysis with full explainability of conclusions

### gemma3:27b
**Google • 27B parameters • Context: 120,000 tokens**

Revolutionary model from Google offering an optimal balance between power and efficiency, with an exceptional performance-to-cost ratio for demanding professional applications.

**Technical specifications:**
- **Speed**: 21 tokens/second
- **Energy consumption**: 6.35 kWh per million tokens
- **License**: [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Large context`

**Use cases:**
- Document analysis with extended context up to 120K tokens (approximately 400 pages)
- Semantic indexing and search in large document databases
- Simultaneous processing of images and text thanks to multimodal capabilities
- Structured data extraction from PDFs and scanned documents
- Integration with external tools via function calling API

### glm-4.7:358b
**Zhipu AI • 358B parameters • Context: 120,000 tokens**

High-performance versatile model developed by Zhipu AI, excelling in logical reasoning, multilingual understanding, and complex tasks.

**Technical specifications:**
- **Speed**: 18 tokens/second
- **Consumption**: 7.41 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `Multilingual`

**Use cases:**
- Complex reasoning tasks
- Long document analysis
- Advanced conversational assistants

### gpt-oss:120b
**OpenAI • 120B parametri • Contesto: 120.000 token**

Modello linguistico open-weight di punta di OpenAI, che offre prestazioni solide con una licenza flessibile Apache 2.0.

**Specifiche tecniche:**
- **Velocità**: 104 token al secondo
- **Consumo**: 2,19 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `MoE` `Agente` `Ragionamento` `Open-Source` `Molto Grande`

**Casi d'uso:**
- Agenti conversazionali avanzati con ragionamento complesso e integrazione di strumenti.
- Applicazioni che richiedono una trasparenza totale del processo di ragionamento (chain-of-thought).
- Scenari commerciali che richiedono una licenza permissiva (Apache 2.0).
- Fine-tuning per compiti specializzati che richiedono un modello base potente.

### llama3.3:70b
**Meta • 70B parameters • Context: 132,000 tokens**

State-of-the-art multilingual model developed by Meta, designed to excel in natural dialogue, complex reasoning, and nuanced instruction understanding.

**Technical specifications:**
- **Speed**: 29 tokens/second
- **Energy consumption**: 7.85 kWh per million tokens
- **License**: [LLAMA 3.3 Community License](./licences/llama_3.3_community_licence.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Dialogue` `Multilingual`

**Use cases:**
- Multilingual chatbots supporting 8 languages simultaneously
- Execution of complex, chained instructions (prompt chaining)
- Processing of 60K-token dialogue windows for conversational history
- Analysis of large legal or technical documents (>100 pages)
- Generation of structured text with strict adherence to stylistic guidelines

### ministral-3:14b
**Mistral AI • 14B parameters • Context: 250,000 tokens**

The most powerful model in the Ministral family, designed for complex tasks on local infrastructure.

**Technical specifications:**
- **Speed**: 31 tokens/second
- **Energy consumption**: 4.30 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `High Performance` `Edge` `Reasoning` `Code`

**Use cases:**
- Solving complex problems locally
- Coding and engineering assistants
- In-depth document analysis with reasoning

### nemotron-3-nano:30b
**NVIDIA • 30B parametri • Contesto: 250.000 token**

Modello NVIDIA ottimizzato per il ragionamento complesso e l'uso di strumenti, distribuito con un contesto esteso.

**Specifiche tecniche:**
- **Velocità**: 89 token al secondo
- **Consumo**: 1,62 kWh per milione di token
- **Licenza**: [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag**: `Agente` `Ragionamento` `Grande Contesto`

**Casi d'uso:**
- Agenti autonomi complessi con chiamate multiple a strumenti
- Ragionamento logico e risoluzione di problemi
- Analisi di documenti lunghi con estrazione precisa

### olmo-3:32b
**AllenAI • 32B parameters • Context: 65,536 tokens**

The first fully open reasoning model at this scale, competing with the best proprietary models.

**Technical specifications:**
- **Speed** : 19 tokens/second
- **Energy consumption** : 7.02 kWh per million tokens
- **License** : [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Open-Source` `Large Context` `Reasoning` `Transparent` `Code` `High Performance`

**Use cases:**
- Complex reasoning and multi-step problem solving
- Advanced software development and code generation
- In-depth analysis requiring transparency in decision-making processes

### olmo-3:7b
**AllenAI • 7B parameters • Context: 65,536 tokens**

Reference "Fully Open" model, offering complete transparency (data, code, weights) and remarkable efficiency.

**Technical specifications:**
- **Speed**: 37 tokens/second
- **Energy consumption**: 1.65 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Open-Source` `Large Context` `Transparent` `Efficient` `Maths` `Code`

**Use cases:**
- Academic and scientific research requiring full reproducibility
- Programming tasks and mathematical problem solving
- Analysis of medium-sized documents with full traceability

### qwen3-2507:235b
**Qwen Team • 235B parameters • Context: 130,000 tokens**

Massive MoE model with 235 billion parameters, activating only 22 billion at a time, delivering state-of-the-art performance.

**Technical Specifications:**
- **Speed**: 58 tokens/second
- **Energy Consumption**: 3.93 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Very Large`

**Use Cases:**
- Solving complex mathematical and logical problems  
- Tasks requiring extensive knowledge base  
- Advanced coding assistant  
- In-depth document analysis

### qwen3-2507:30b-a3b
**Qwen Team • 30B parametri • Contesto: 250.000 token**

Versione migliorata del modo senza pensiero di Qwen3-30B, con capacità generali, copertura delle conoscenze e allineamento utente migliorati.

**Specifiche tecniche:**
- **Velocità**: 104 token al secondo
- **Consumo**: 1,39 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Grande Contesto` `MoE` `Multilingue`

**Casi d'uso:**
- Compiti complessi che richiedono un seguito preciso delle istruzioni e un ragionamento logico.
- Applicazioni multilingue con ampia copertura delle conoscenze.
- Generazione di testo di alta qualità per compiti aperti e soggettivi.
- Analisi di documenti molto voluminosi grazie al contesto di 250k token.

### qwen3-coder:30b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

MoE-optimized model for software engineering tasks, featuring an extremely long context.

**Technical specifications:**
- **Speed**: 104 tokens/second
- **Energy consumption**: 1.39 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Programming` `Large Context` `MoE`

**Use cases:**
- Software engineering agents for exploring and modifying codebases
- Generation of complex code with repository-scale understanding
- Reasoning tasks over extended contexts
- Code improvement via reinforcement learning

### qwen3-next:80b
**Qwen Team • 80 miliardi di parametri • Contesto: 262.144 token**

Modello Next 80B di Qwen, ottimizzato per contesti estesi e ragionamento, fornito tramite vLLM (A100).

**Specifiche tecniche:**
- **Velocità**: 148 token al secondo
- **Consumo energetico**: 1,54 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag**: `Agente` `Ragionamento` `Grande Contesto` `MoE`

**Casi d'uso:**
- Agenti conversazionali avanzati con integrazione di strumenti
- Analisi di documenti molto voluminosi (fino a 260k token)
- Generazione di codice e compiti complessi che richiedono un ragionamento strutturato

### qwen3-omni:30b
**Qwen Team • 30B parametri • Contestuale: 32.768 token**

Qwen3-Omni 30B è un modello nativamente omnimodale, in grado di comprendere testo, immagini, video e audio all'interno di un unico flusso.

**Specifiche tecniche:**
- **Velocità**: 86 token al secondo
- **Consumo**: 2,65 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag**: `Omni` `Audio` `Visione` `Agente` `Multimodale` `BF16`

**Casi d'uso:**
- Interazioni multimodali fluide (parla, vede, ascolta)
- Analisi combinata di video e audio
- Assistenti intelligenti di nuova generazione

### qwen3-vl:235b
**Qwen Team • 235B parameters • Context: 200,000 tokens**

The most powerful multimodal model in the catalog, combining state-of-the-art visual understanding with exceptional reasoning capabilities.

**Technical specifications:**
- **Speed**: 31 tokens/second
- **Consumption**: 7.35 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `NVFP4` `Blackwell` `Vision`

**Use cases:**
- Automation of complex document workflows (multilingual OCR, structured extraction)
- Intelligent visual agents for software interaction and GUI automation
- Advanced scientific and technical analysis (STEM, 3D spatial reasoning)
- Multimodal RAG on large documents (>200k tokens) and videos

### qwen3-vl:30b
**Qwen Team • 30B parametri • Contesto: 250.000 token**

Modello multimodale di punta (Qwen3-VL) che offre una comprensione visiva eccezionale e un ragionamento temporale preciso.

**Specifiche tecniche:**
- **Velocità**: 43 token al secondo
- **Consumo**: 3,10 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag**: `Visione` `Agente` `Grande Contesto` `Multimodale` `Video` `OCR`

**Casi d'uso:**
- Analisi approfondita di video lunghi e sorveglianza intelligente
- Estrazione di dati strutturati complessi (documenti, tabelle, grafici)
- Assistenti visivi avanzati con comprensione spaziale
- Ragionamento multimodale su sequenze di eventi

### qwen3-vl:32b
**Qwen Team • 32B parameters • Context: 250,000 tokens**

High-performance variant of Qwen3-VL, optimized for the most demanding vision tasks.

**Technical Specifications:**
- **Speed**: 17 tokens/second
- **Energy Consumption**: 7.84 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Large Context` `Multimodal` `Video` `OCR`

**Use Cases:**
- Scientific and technical analysis of high-resolution images
- Automation of complex visual processes
- Detailed understanding of dynamic scenes

### qwen3:14b
**Qwen Team • 14B parameters • Context: 131,072 tokens**

Balanced Qwen3 14B model, delivering strong general performance with good inference speed.

**Technical specifications:**
- **Speed**: 68.2 tokens/second
- **Consumption**: 0.90 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Versatile` `Multilingual`

**Use cases:**
- High-performance virtual assistants
- High-quality content generation
- Classification and extraction tasks

## Modelli Specializzati

### bge-m3:567m
**BAAI • 567M parametri • Contesto: 8.192 token**

Modello di embedding multilingue di ultima generazione (BGE-M3), che offre capacità eccezionali di ricerca semantica in oltre 100 lingue.

**Specifiche tecniche:**
- **Velocità**: 171 token al secondo
- **Consumo**: 0,36 kWh per milione di token
- **Licenza**: [MIT](./licences/mit.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag**: `Embedding` `Multilingue` `Efficiente`

**Casi d'uso:**
- Ricerca semantica multilingue
- Retrieval-Augmented Generation (RAG)
- Clustering e classificazione di documenti

### deepseek-ocr
**DeepSeek AI • 3B parameters • Context: 8,192 tokens**

Specialized OCR model from DeepSeek, designed for high-precision text extraction with formatting preservation.

**Technical specifications:**
- **Speed**: 79 tokens/second
- **Consumption**: 1.01 kWh/million tokens
- **License**: [MIT License](./licences/mit_licence.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `OCR` `Efficient`

**Use cases:**
- Structured text (Markdown/LaTeX) extraction from images/PDFs
- Document digitization with complex tables and formulas

### devstral-small-2:24b
**Mistral AI & All Hands AI • 24B parameters • Context: 380,000 tokens**

Second iteration of Devstral (Small 2), state-of-the-art agent model for software engineering, deployed on Mac Studio with massive context.

**Technical specifications:**
- **Speed**: 23 tokens/second
- **Consumption**: 5.80 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Programming` `Vision` `Open-Source` `Very Large Context`

**Use cases:**
- Autonomous coding agents on very large codebases
- Modernization of legacy systems
- Fixing complex bugs requiring a holistic view of the project

### devstral:24b
**Mistral AI & All Hands AI • 24B parameters • Context: 120,000 tokens**

Devstral 24b is an agent-based LLM specialized in software engineering, co-developed by Mistral AI and All Hands AI.

**Technical specifications:**
- **Speed**: 44 tokens/second
- **Energy consumption**: 3.28 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Programming` `Open-Source` `Large Context` `FP8`

**Use cases:**
- Codebase exploration and modification
- Autonomous software engineering agents
- Complex code refactoring and generation

### embeddinggemma:300m
**Google • 300M parameters • Context: 2,048 tokens**

State-of-the-art embedding model from Google, optimized for its size, ideal for search and semantic retrieval tasks.

**Technical specifications:**
- **Speed** : 175 tokens/second
- **Consumption** : 0.35 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient` `Multilingual`

**Use cases:**
- Information search and retrieval (Retrieval)
- Document classification and clustering
- Semantic similarity search
- Deployment on resource-constrained devices (mobile, laptop)

### gemma3:1b
**Google • 1B parameters • Context: 120,000 tokens**

Micro-model Gemma 3, ultra-fast and efficient.

**Technical specifications:**
- **Speed** : 53 tokens/second
- **Consumption** : 1.15 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Efficient` `Edge`

**Use cases:**
- Fast text classification
- Simple chatbots
- Rapid prototyping

### gemma3:4b
**Google • 4B parameters • Context: 120,000 tokens**

Compact Gemma 3 4B model, offering an excellent performance-to-size ratio.

**Technical specifications:**
- **Speed** : 48.0 tokens/second
- **Energy consumption** : 1.27 kWh per million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Efficient` `Edge`

**Use cases:**
- Personal assistants on laptops
- Text summarization
- Light translation

### gpt-oss:20b
**OpenAI • 20B parameters • Context: 120,000 tokens**

Open-weight language model by OpenAI, optimized for efficiency and deployment on consumer-grade hardware.

**Technical specifications:**
- **Speed**: 9 tokens/second
- **Energy consumption**: 14.81 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Compact` `Fast`

**Use cases:**
- Deployments on resource-constrained devices (edge devices) or low-cost servers.
- Applications requiring fast inference with strong reasoning capabilities.
- Agent-based use cases involving function calls, web navigation, and code execution.
- Fine-tuning for specialized tasks on consumer hardware.

### granite-embedding:278m
**IBM • 278M parameters • Context: 8,192 tokens**

Ultra-compact IBM Granite embedding model, designed for maximum efficiency.

**Technical specifications:**
- **Speed** : 196.3 tokens/second
- **Energy consumption** : 0.31 kWh per million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Efficient`

**Use cases:**
- Semantic search
- Document clustering

### granite4-small-h:32b
**IBM • 32B (9B attivi) parametri • Contesto: 128.000 token**

Modello MoE (Mixture-of-Experts) di IBM, progettato come "cavallo di battaglia" per le attività quotidiane aziendali, con un'ottima efficienza nei contesti lunghi.

**Specifiche tecniche:**
- **Velocità**: 33 token al secondo
- **Consumo**: 4,04 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

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

Modello MoE ibrido estremamente efficiente di IBM, progettato per bassa latenza, applicazioni "edge" e locali, e come blocco di base per flussi di lavoro agentici.

**Specifiche tecniche:**
- **Velocità**: 58 token al secondo
- **Consumo**: 1,05 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tag**: `Agente` `Ragionamento` `Sicurezza` `MoE` `Grande Contesto` `Efficiente` `Velocità` `Compatto`

**Casi d'uso:**
- Applicazioni incorporate e "edge" che richiedono bassa latenza.
- Task rapide all'interno di flussi di lavoro agentici più ampi (es. chiamate di funzione).
- Analisi di documenti su hardware di consumo.
- Deployment che richiedono un'impronta di memoria minima.

### medgemma:27b
**Google • 27B parametri • Contesto: 128.000 token**

MedGemma è un modello open source tra i più performanti di Google per la comprensione di testi e immagini mediche, basato su Gemma 3.

**Specifiche tecniche:**
- **Velocità**: 22 token al secondo
- **Consumo**: 6,56 kWh per milione di token
- **Licenza**: [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag**: `Medico` `Visione` `Specializzato` `Grande Contesto`

**Casi d'uso:**
- Interpretazione di immagini mediche (generazione di rapporti e VQA)
- Comprensione di testi medici e ragionamento clinico (supporto alla decisione)
- Interazione con pazienti (interviste e triage medico)
- Sintesi di cartelle cliniche e ricerca nella letteratura scientifica

### ministral-3:3b
**Mistral AI • 3B parameters • Context: 250,000 tokens**

Cutting-edge compact model from Mistral AI, designed for efficiency in local and edge deployments.

**Technical specifications:**
- **Speed**: 50 tokens/second
- **Energy consumption**: 1.22 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Efficient` `Edge`

**Use cases:**
- Local inference on mobile devices or edge devices
- Responsive personal assistants
- Fast routing and classification tasks

### ministral-3:8b
**Mistral AI • 8B parameters • Context: 250,000 tokens**

Intermediate-sized model from the Ministral family, offering an optimal balance between performance and resource usage.

**Technical specifications:**
- **Speed**: 55 tokens/second
- **Consumption**: 2.42 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Efficient` `Edge` `Reasoning`

**Use cases:**
- Advanced local conversational assistants
- Document analysis and information extraction
- Tasks requiring a good balance between speed and quality

### mistral-small3.2:24b
**Mistral AI • 24B parameters • Context: 128,000 tokens**

Minor update to Mistral Small 3.1, improving instruction following, function calling robustness, and reducing repetition errors.

**Technical specifications:**
- **Speed** : 27 tokens/second
- **Consumption** : 5.35 kWh per million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security` `Instruction Following`

**Use cases:**
- Conversational agents with improved instruction following
- Robust integration with external tools via function calling
- Applications requiring high reliability to avoid repetitions
- Use cases identical to Mistral Small 3.1, with enhanced performance

### qwen3-2507-think:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Qwen3-4B model optimized for reasoning, with improved performance on logical tasks, mathematics, science, and code, featuring an extended context of up to 250K tokens.

**Technical Specifications:**
- **Speed**: 52 tokens/second
- **Energy Consumption**: 2.56 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `Compact` `Fast`

**Use Cases:**
- Highly complex reasoning tasks (logic, math, science, code).
- Conversational agents with extremely long conversation history (256k tokens).
- Deep reasoning analysis of very large documents.
- Integration with external tools via function calling, even within very large contexts.

### qwen3-2507:4b
**Qwen Team • 4 miliardi di parametri • Contesto: 250.000 token**

Version aggiornata del modello non-razionale Qwen3-4B, con miglioramenti significativi delle capacità generali, una conoscenza estesa e un migliore allineamento con le preferenze degli utenti.

**Specifiche tecniche:**
- **Velocità**: 30 token al secondo
- **Consumo**: 4,44 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Grande Contesto` `Compatto` `Velocità` `Multilingue`

**Casi d'uso:**
- Compiti generali che richiedono un seguito preciso delle istruzioni e un ragionamento logico.
- Applicazioni multilingue con una vasta copertura delle conoscenze.
- Generazione di testo di alta qualità per compiti aperti e soggettivi.
- Analisi di documenti estremamente voluminosi grazie al contesto di 256k token.

### qwen3-embedding:0.6b
**Qwen Team • 0.6B parameters • Context: 32,768 tokens**

Ultra-light Qwen3 embedding model, optimized for speed and efficiency on resource-constrained infrastructure.

**Technical specifications:**
- **Speed**: N/A
- **Energy consumption**: 0.57 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Efficient`

**Use cases:**
- Fast semantic search  
- Real-time text classification

### qwen3-embedding:4b
**Qwen Team • 4 miliardi di parametri • Contesto: 40.000 token**

Modello di embedding Qwen3-4B ad alte prestazioni, che offre una comprensione semantica approfondita e una finestra di contesto estesa.

**Specifiche tecniche:**
- **Velocità**: N/A
- **Consumo energetico**: 0,57 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag**: `Embedding` `Grandi contesti` `Efficiente`

**Casi d'uso:**
- Ricerca semantica su documenti lunghi
- RAG con finestre di contesto estese
- Analisi semantica ad alta precisione

### qwen3-vl:2b
**Qwen Team • 2B parametri • Contestuale: 250.000 token**

Modello multimodale ultra compatto Qwen3-VL, che offre capacità avanzate di visione su dispositivi edge.

**Specifiche tecniche:**
- **Velocità**: 64 token al secondo
- **Consumo**: 0,95 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag**: `Visione` `Compatto` `Efficiente` `Multimodale` `Edge` `OCR`

**Casi d'uso:**
- Analisi di immagini in tempo reale su dispositivi mobili
- OCR e lettura di documenti leggeri
- Classificazione e ordinamento visivo rapido

### qwen3-vl:4b
**Qwen Team • 4 miliardi di parametri • Contesto: 250.000 token**

Modello multimodale Qwen3-VL bilanciato, che offre prestazioni solide nella visione con un'impronta ridotta.

**Specifiche tecniche:**
- **Velocità**: 57 token al secondo
- **Consumo**: 2,34 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag**: `Visione` `Compacto` `Multimodale` `Efficiente` `Video` `OCR`

**Casi d'uso:**
- Analisi automatica di documenti (fatture, moduli)
- Comprensione del contenuto video
- Assistenti visivi interattivi

### qwen3-vl:8b
**Qwen Team • 8B parametri • Contestuale: 250.000 token**

Modello multimodale Qwen3-VL (8B), che offre prestazioni avanzate di visione con un impatto ragionevole.

**Specifiche tecniche:**
- **Velocità**: 44 token al secondo
- **Consumo**: 3,03 kWh per milione di token
- **Licenza**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag**: `Visione` `Compacto` `Multimodale` `Efficiente` `Video` `OCR`

**Casi d'uso:**
- Analisi automatizzata di documenti
- Comprensione del contenuto video
- Assistenti visivi interattivi

### qwen3:0.6b
**Qwen Team • 0.6B parameters • Context: 40,000 tokens**

Ultra-light Qwen3 model with 0.6 billion parameters, offering exceptional inference speed for simple and fast tasks.

**Technical specifications:**
- **Speed**: 46 tokens/second
- **Consumption**: 1.33 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Fast` `Efficient` `Multilingual`

**Use cases:**
- Simple text processing tasks  
- Fast classification and sorting  
- Lightweight assistants with low latency

### rnj-1:8b
**Essential AI • 8B parameters • Context: 32,000 tokens**

8B "Open Weight" model specialized in code, mathematics, and sciences (STEM).

**Technical specifications:**
- **Speed**: 31 tokens/second
- **Consumption**: 1.97 kWh per million tokens
- **License**: [Open Weights](./licences/open_weights.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Code` `Maths` `STEM` `Reasoning` `Efficient`

**Use cases:**
- Advanced programming assistant and code generation
- Solving complex mathematical problems
- Scientific and technical tasks (STEM)

## Use Case Consigliati

### Multilingual Dialogue

Chatbots and assistants capable of communicating in multiple languages with automatic language detection, context preservation throughout the entire conversation, and understanding of linguistic nuances.

**Recommended models:**

- Llama 3.3  
- Mistral Small 3.2  
- Qwen 3  
- Openai OSS  
- Granite 4

### Analisi di documenti lunghi

Elaborazione di documenti estesi (>100 pagine) con mantenimento del contesto per l'intero testo, estrazione delle informazioni chiave, generazione di riassunti pertinenti e risposta a domande specifiche sul contenuto.

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

### Visual Analysis

Direct processing of images and visual documents without prior OCR preprocessing, interpretation of technical diagrams, charts, tables, drawings, and photos, with generation of detailed textual explanations of the visual content.

**Recommended models:**

- deepseek-OCR
- Mistral Small 3.2
- Gemma 3
- Qwen 3 VL

### Sicurezza e conformità

Applicazioni che richiedono capacità specifiche in materia di sicurezza; filtraggio di contenuti sensibili, tracciabilità dei ragionamenti, verifica del rispetto del RGPD/HDS, riduzione dei rischi, analisi delle vulnerabilità e conformità alle normative settoriali

**Modelli consigliati:**

- Granite Guardian
- Granite 4
- Devstral
- Mistral Small 3.2
- Magistral small

### Lightweight and Embedded Deployments

Applications requiring minimal resource footprint, deployment on devices with limited capacity, real-time inference on standard CPUs, and integration into embedded systems or IoT devices

**Recommended models:**

- Gemma 3n
- Granite 4 tiny
- Qwen 3 VL (2B)