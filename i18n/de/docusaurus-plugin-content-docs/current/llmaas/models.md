---
title: Katalog der KI-Modelle
sidebar_position: 2
---

# LLM as a Service Modellkatalog

## Overview

Cloud Temple LLMaaS offers **42 carefully selected and optimized large language models** to meet the most stringent **SecNumCloud** requirements. Our catalog covers the entire spectrum, from ultra-efficient micro-models to extremely large models.

### Globale Statistiken

| Metrik | Wert |
|--------|------|
| **Gesamte Anzahl an Modellen** | 42 Modelle |
| **Minimale Kontextlänge** | 2.048 Tokens |
| **Maximale Kontextlänge** | 262.144 Tokens |
| **Konformität** | SecNumCloud ✅ HDS ✅ Souveränität ✅ C5 ✅ |
| **Standort** | 100 % Frankreich 🇫🇷 |

### Pricing

| Usage type | Price |
|------------|-------|
| **Input tokens** | €0.90 / million tokens |
| **Output tokens** | €4.00 / million tokens |
| **Advanced reasoning** | €21.00 / million tokens |

## Large Language Models

### cogito:32b
**Deep Cogito • 32B parameters • Context: 32,000 tokens**

Advanced version of the Cogito model offering significantly enhanced reasoning and analytical capabilities, designed for the most demanding AI analytical applications.

**Technical specifications:**
- **Speed** : 20 tokens/second
- **Consumption** : 6.67 kWh/million tokens
- **License** : [LLAMA 3.2 Community License](./licences/llama_3.2_community_licence.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Comprehension` `Analysis`

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

**Technical Specifications:**
- **Speed**: 18 tokens/second
- **Energy Consumption**: 7.41 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `Multilingual`

**Use Cases:**
- Complex reasoning tasks
- Analysis of long documents
- Advanced conversational assistants

### gpt-oss:120b
**OpenAI • 120B parameters • Context: 120,000 tokens**

State-of-the-art open-weight language model from OpenAI, delivering strong performance with a flexible Apache 2.0 license.

**Technical specifications:**
- **Speed**: 104 tokens/second
- **Energy consumption**: 2.19 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Very Large`

**Use cases:**
- Advanced conversational agents with complex reasoning and tool integration.
- Applications requiring full transparency in the reasoning process (chain-of-thought).
- Commercial scenarios needing a permissive license (Apache 2.0).
- Fine-tuning for specialized tasks requiring a powerful base model.

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

**Technical Specifications:**
- **Speed**: 31 tokens/second
- **Energy Consumption**: 4.30 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `High Performance` `Edge` `Reasoning` `Code`

**Use Cases:**
- Solving complex problems locally
- Coding and engineering assistants
- In-depth document analysis with reasoning

### nemotron-3-nano:30b
**NVIDIA • 30B parameters • Context: 250,000 tokens**

NVIDIA-optimized model for complex reasoning and tool utilization, deployed with an extended context.

**Technical Specifications:**
- **Speed**: 89 tokens/second
- **Energy Consumption**: 1.62 kWh per million tokens
- **License**: [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context`

**Use Cases:**
- Complex autonomous agents with multiple tool calls
- Logical reasoning and problem solving
- Long document analysis with precise extraction

### olmo-3:32b
**AllenAI • 32B Parameters • Context: 65,536 tokens**

The first fully open reasoning model at this scale, competing with the best proprietary models.

**Technical Specifications:**
- **Speed**: 19 tokens/second
- **Energy Consumption**: 7.02 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Open-Source` `Large Context` `Reasoning` `Transparent` `Code` `High Performance`

**Use Cases:**
- Complex reasoning and multi-step problem solving
- Advanced software development and code generation
- In-depth analysis requiring transparency in decision-making processes

### olmo-3:7b
**AllenAI • 7B parameters • Context: 65,536 tokens**

Reference "Fully Open" model offering complete transparency (data, code, weights) and remarkable efficiency.

**Technical specifications:**
- **Speed** : 37 tokens/second
- **Energy consumption** : 1.65 kWh per million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Open-Source` `Large Context` `Transparent` `Efficient` `Maths` `Code`

**Use cases:**
- Academic and scientific research requiring full reproducibility
- Programming tasks and mathematical problem solving
- Analysis of medium-sized documents with full traceability

### qwen3-2507:235b
**Qwen Team • 235B Parameters • Context: 130,000 tokens**

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
- Advanced code assistance
- In-depth document analysis

### qwen3-2507:30b-a3b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

Improved version of the non-thinking mode of Qwen3-30B, featuring enhanced general capabilities, broader knowledge coverage, and better user alignment.

**Technical Specifications:**
- **Speed**: 104 tokens/second
- **Energy Consumption**: 1.39 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Large Context` `MoE` `Multilingual`

**Use Cases:**
- Complex tasks requiring precise instruction following and logical reasoning.
- Multilingual applications with extensive knowledge coverage.
- High-quality text generation for open-ended and subjective tasks.
- Analysis of very large documents thanks to the 250k-token context.

### qwen3-coder:30b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

MoE-optimized model for software engineering tasks, featuring an extremely long context.

**Technical Specifications:**
- **Speed**: 104 tokens/second
- **Energy Consumption**: 1.39 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Programming` `Large Context` `MoE`

**Use Cases:**
- Software engineering agents for exploring and modifying codebases
- Generation of complex code with repository-scale understanding
- Reasoning tasks over extended contexts
- Code improvement via reinforcement learning

### qwen3-next:80b
**Qwen Team • 80B parameters • Context: 262,144 tokens**

Next 80B model from Qwen, optimized for large contexts and reasoning, served via vLLM (A100).

**Technical specifications:**
- **Speed**: 148 tokens/second
- **Consumption**: 1.54 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `MoE`

**Use cases:**
- Advanced conversational agents with tool integration
- Analysis of very large documents (up to 260k tokens)
- Code generation and complex tasks requiring structured reasoning

### qwen3-omni:30b
**Qwen Team • 30B Parameters • Context: 32,768 tokens**

Qwen3-Omni 30B is a native multimodal model capable of understanding text, images, video, and audio within a single stream.

**Technical Specifications:**
- **Speed**: 86 tokens/second
- **Energy Consumption**: 2.65 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Omni` `Audio` `Vision` `Agent` `Multimodal` `BF16`

**Use Cases:**
- Seamless multimodal interactions (speaks, sees, listens)
- Combined video and audio analysis
- Next-generation intelligent assistants

### qwen3-vl:235b
**Qwen Team • 235B parameters • Context: 200,000 tokens**

The most powerful multimodal model in the catalog, combining state-of-the-art visual understanding with exceptional reasoning capabilities.

**Technical Specifications:**
- **Speed**: 31 tokens/second
- **Energy Consumption**: 7.35 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Agent` `Reasoning` `Large Context` `NVFP4` `Blackwell` `Vision`

**Use Cases:**
- Automation of complex document workflows (multilingual OCR, structured extraction)
- Intelligent visual agents for software interaction and GUI automation
- Advanced scientific and technical analysis (STEM, 3D spatial reasoning)
- Multimodal RAG on large documents (>200k tokens) and videos

### qwen3-vl:30b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

State-of-the-art multimodal model (Qwen3-VL) offering exceptional visual understanding and precise temporal reasoning.

**Technical Specifications:**
- **Speed** : 43 tokens/second
- **Energy Consumption** : 3.10 kWh per million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Agent` `Large Context` `Multimodal` `Video` `OCR`

**Use Cases:**
- Deep analysis of long videos and intelligent surveillance
- Extraction of complex structured data (documents, tables, charts)
- Advanced visual assistants with spatial understanding
- Multimodal reasoning over sequences of events

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

**Technical Specifications:**
- **Speed**: 68.2 tokens/second
- **Energy Consumption**: 0.90 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Versatile` `Multilingual`

**Use Cases:**
- High-performance virtual assistants  
- High-quality content generation  
- Classification and extraction tasks

## Specialized Models

### bge-m3:567m
**BAAI • 567M parameters • Context: 8,192 tokens**

State-of-the-art multilingual embedding model (BGE-M3), delivering exceptional semantic search capabilities across more than 100 languages.

**Technical Specifications:**
- **Speed**: 171 tokens/second
- **Energy Consumption**: 0.36 kWh per million tokens
- **License**: [MIT](./licences/mit.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Multilingual` `Efficient`

**Use Cases:**
- Multilingual semantic search
- Retrieval-Augmented Generation (RAG)
- Document clustering and classification

### deepseek-ocr
**DeepSeek AI • 3B parameters • Context: 8,192 tokens**

Specialized OCR model from DeepSeek, designed for high-precision text extraction with formatting preservation.

**Technical specifications:**
- **Speed**: 79 tokens/second
- **Consumption**: 1.01 kWh per million tokens
- **License**: [MIT License](./licences/mit_licence.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `OCR` `Efficient`

**Use cases:**
- Extraction of structured text (Markdown/LaTeX) from images/PDFs
- Document digitization with complex tables and formulas

### devstral-small-2:24b
**Mistral AI & All Hands AI • 24B parameters • Context: 380,000 tokens**

Second iteration of Devstral (Small 2), a state-of-the-art agent model for software engineering, deployed on Mac Studio with massive context.

**Technical Specifications:**
- **Speed**: 23 tokens/second
- **Energy Consumption**: 5.80 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Programming` `Vision` `Open-Source` `Very Large Context`

**Use Cases:**
- Autonomous coding agents on very large codebases
- Modernization of legacy systems
- Fixing complex bugs requiring a holistic view of the project

### devstral:24b
**Mistral AI & All Hands AI • 24B parameters • Context: 120,000 tokens**

Devstral 24b is an agent-based LLM specialized in software engineering, co-developed by Mistral AI and All Hands AI.

**Technical Specifications:**
- **Speed**: 44 tokens/second
- **Energy Consumption**: 3.28 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Agent` `Programming` `Open-Source` `Large Context` `FP8`

**Use Cases:**
- Codebase exploration and modification
- Autonomous software engineering agents
- Complex code refactoring and generation

### embeddinggemma:300m
**Google • 300M parameters • Context: 2,048 tokens**

State-of-the-art embedding model from Google, optimized for its size, ideal for search and semantic retrieval tasks.

**Technical Specifications:**
- **Speed** : 175 tokens/second
- **Energy Consumption** : 0.35 kWh per million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient` `Multilingual`

**Use Cases:**
- Information retrieval and search
- Document classification and clustering
- Semantic similarity search
- Deployment on resource-constrained devices (mobile, laptop)

### gemma3:1b
**Google • 1B parameters • Context: 120,000 tokens**

Ultra-fast and efficient micro-model Gemma 3.

**Technical specifications:**
- **Speed**: 53 tokens/second
- **Energy consumption**: 1.15 kWh per million tokens
- **License**: [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Efficient` `Edge`

**Use cases:**
- Fast text classification
- Simple chatbots
- Rapid prototyping

### gemma3:4b
**Google • 4B Parameter • Kontext: 120.000 Tokens**

Kompakter Gemma 3-Modell mit 4B Parametern, bietet ein hervorragendes Leistungs-/Größen-Verhältnis.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 48,0 Tokens pro Sekunde
- **Energieverbrauch** : 1,27 kWh pro Million Tokens
- **Lizenz** : [Google Gemma Nutzungsbedingungen](./licences/google_gemma_terms_of_use.licence.md)
- **Standort** : FR 🇫🇷

**Funktionen:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Sicherheit

**Tags:** `Kompakt` `Effizient` `Edge`

**Anwendungsfälle:**
- Persönliche Assistenten auf Laptop
- Textzusammenfassung
- Leichte Übersetzungen

### gpt-oss:20b
**OpenAI • 20B Parameters • Context: 120,000 tokens**

Open-weight language model by OpenAI, optimized for efficiency and deployment on consumer-grade hardware.

**Technical Specifications:**
- **Speed**: 9 tokens/second
- **Energy Consumption**: 14.81 kWh per million tokens
- **License**: [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Compact` `Fast`

**Use Cases:**
- Deployments on resource-constrained devices (edge devices) or low-cost servers.
- Applications requiring fast inference with strong reasoning capabilities.
- Agent-based use cases involving function calls, web navigation, and code execution.
- Fine-tuning for specialized tasks on consumer-grade hardware.

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
**IBM • 32B (9B active) Parameters • Context: 128,000 tokens**

IBM's MoE (Mixture-of-Experts) model, designed as a "workhorse" for daily enterprise tasks, featuring excellent efficiency for long contexts.

**Technical Specifications:**
- **Speed**: 33 tokens/second
- **Energy Consumption**: 4.04 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Agent` `Reasoning` `Security` `MoE` `Large Context` `Efficient`

**Use Cases:**
- Conversational agents for customer support with access to extensive knowledge bases.
- Enterprise workflow automation requiring the use of multiple tools.
- Analysis of long documents with optimized resource consumption.
- Deployment on medium-sized infrastructures thanks to its efficiency.

### granite4-tiny-h:7b
**IBM • 7B (1B active) parameters • Context: 128,000 tokens**

Ultra-efficient hybrid MoE model from IBM, designed for low latency, edge and local applications, and as a foundational component for agent workflows.

**Technical Specifications:**
- **Speed**: 58 tokens/second
- **Energy Consumption**: 1.05 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ✅ Security

**Tags:** `Agent` `Reasoning` `Security` `MoE` `Large Context` `Efficient` `Fast` `Compact`

**Use Cases:**
- Embedded and edge applications requiring low latency.
- {'Quick tasks within larger agent workflows (e.g.': 'function calling).'}
- Document analysis on consumer-grade hardware.
- Deployments requiring minimal memory footprint.

### medgemma:27b  
**Google • 27B Parameters • Context: 128,000 tokens**

MedGemma is one of Google's most advanced open models for understanding medical text and images, based on Gemma 3.

**Technical Specifications:**  
- **Speed**: 22 tokens/second  
- **Energy Consumption**: 6.56 kWh per million tokens  
- **License**: [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)  
- **Location**: FR 🇫🇷  

**Capabilities:**  
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security  

**Tags:** `Medical` `Vision` `Specialized` `Large Context`  

**Use Cases:**  
- Medical image interpretation (Report generation and VQA)  
- Medical text understanding and clinical reasoning (Decision support)  
- Patient interaction (Interviews and medical triage)  
- Medical record synthesis and literature search

### ministral-3:3b
**Mistral AI • 3B parameters • Context: 250,000 tokens**

High-performance compact model from Mistral AI, designed for efficiency in local and edge deployments.

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
- **Speed** : 55 tokens/second
- **Energy consumption** : 2.42 kWh per million tokens
- **License** : [Apache 2.0](./licenses/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Efficient` `Edge` `Reasoning`

**Use cases:**
- Advanced local conversational assistants
- Document analysis and information extraction
- Tasks requiring a good trade-off between speed and quality

### mistral-small3.2:24b
**Mistral AI • 24B parameters • Context: 128,000 tokens**

Minor update to Mistral Small 3.1, improving instruction following, function calling robustness, and reducing repetition errors.

**Technical specifications:**
- **Speed** : 27 tokens/second
- **Energy consumption** : 5.35 kWh per million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security` `Instruction Following`

**Use cases:**
- Conversational agents with enhanced instruction following
- Robust integration with external tools via function calling
- Applications requiring high reliability to avoid repetitions
- Use cases identical to Mistral Small 3.1, with improved performance

### qwen3-2507-think:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Qwen3-4B model optimized for reasoning, with improved performance on logical tasks, mathematics, science, and code, featuring an extended context of 250K tokens.

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
- Deep reasoning on very large documents.
- Integration with external tools via function calling on very large contexts.

### qwen3-2507:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Updated version of the Qwen3-4B non-thinking mode, featuring significant improvements in general capabilities, expanded knowledge coverage, and better alignment with user preferences.

**Technical Specifications:**
- **Speed**: 30 tokens/second
- **Consumption**: 4.44 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Large Context` `Compact` `Fast` `Multilingual`

**Use Cases:**
- General tasks requiring precise instruction following and logical reasoning.
- Multilingual applications with broad knowledge coverage.
- High-quality text generation for open-ended and subjective tasks.
- Analysis of very large documents thanks to the 256k-token context.

### qwen3-embedding:0.6b
**Qwen Team • 0.6B parameters • Context: 32,768 tokens**

Ultra-lightweight Qwen3 embedding model, optimized for speed and efficiency on resource-constrained infrastructure.

**Technical Specifications:**
- **Speed**: N/A
- **Energy Consumption**: 0.57 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Efficient`

**Use Cases:**
- Fast semantic search  
- Real-time text classification

### qwen3-embedding:4b
**Qwen Team • 4B parameters • Context: 40,000 tokens**

Ultra-performant embedding model Qwen3-4B, offering deep semantic understanding and an extended context window.

**Technical Specifications:**
- **Speed** : N/A
- **Energy Consumption** : 0.57 kWh per million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Large Context` `Efficient`

**Use Cases:**
- Semantic search on long documents
- RAG with extended context windows
- High-precision semantic analysis

### qwen3-vl:2b
**Qwen Team • 2B Parameters • Context: 250,000 tokens**

Ultra-compact multimodal model Qwen3-VL, bringing advanced vision capabilities to edge devices.

**Technical Specifications:**
- **Speed**: 64 tokens/second
- **Power Consumption**: 0.95 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Compact` `Efficient` `Multimodal` `Edge` `OCR`

**Use Cases:**
- Real-time image analysis on mobile devices
- Lightweight OCR and document reading
- Fast visual sorting and classification

### qwen3-vl:4b
**Qwen Team • 4B Parameter • Kontext: 250.000 Tokens**

Ausgewogener multimodaler Qwen3-VL-Modell mit solider Bildverarbeitungsleistung bei geringem Ressourcenverbrauch.

**Technische Spezifikationen:**
- **Geschwindigkeit** : 57 Tokens/Sekunde
- **Energieverbrauch** : 2,34 kWh pro Million Tokens
- **Lizenz** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Standort** : FR 🇫🇷

**Funktionen:**
✅ Werkzeuge/Agent • ✅ Bildverarbeitung • ❌ Schlussfolgerung • ❌ Sicherheit

**Tags:** `Bildverarbeitung` `Kompakt` `Multimodal` `Effizient` `Video` `OCR`

**Anwendungsfälle:**
- Automatisierte Dokumentenanalyse (Rechnungen, Formulare)
- Verständnis von Videoinhalten
- Interaktive visuelle Assistenten

### qwen3-vl:8b
**Qwen Team • 8B Parameters • Context: 250,000 tokens**

Multimodal model Qwen3-VL (8B), delivering advanced vision capabilities with a reasonable footprint.

**Technical Specifications:**
- **Speed** : 44 tokens/second
- **Energy Consumption** : 3.03 kWh per million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Compact` `Multimodal` `Efficient` `Video` `OCR`

**Use Cases:**
- Automated document analysis
- Video content understanding
- Interactive visual assistants

### qwen3:0.6b
**Qwen Team • 0.6B parameters • Context: 40,000 tokens**

Ultra-light Qwen3 model with 0.6 billion parameters, delivering exceptional inference speed for simple and fast tasks.

**Technical Specifications:**
- **Speed**: 46 tokens/second
- **Energy Consumption**: 1.33 kWh per million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Compact` `Fast` `Efficient` `Multilingual`

**Use Cases:**
- Simple text processing tasks  
- Fast classification and sorting  
- Lightweight assistants with low latency

### rnj-1:8b
**Essential AI • 8B parameters • Context: 32,000 tokens**

8B "Open Weight" model specialized in code, mathematics, and sciences (STEM).

**Technical specifications:**
- **Speed** : 31 tokens/second
- **Consumption** : 1.97 kWh per million tokens
- **License** : [Open Weights](./licences/open_weights.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Code` `Maths` `STEM` `Reasoning` `Efficient`

**Use cases:**
- Advanced programming assistant and code generation
- Solving complex mathematical problems
- Scientific and technical tasks (STEM)

## Recommended Use Cases

### Multilingual Dialogue

Chatbots and assistants capable of communicating in multiple languages with automatic language detection, context preservation throughout the entire conversation, and understanding of linguistic nuances

**Recommended Models:**

- Llama 3.3  
- Mistral Small 3.2  
- Qwen 3  
- Openai OSS  
- Granite 4

### Long Document Analysis

Processing large documents (>100 pages) while preserving context across the entire text, extracting key information, generating relevant summaries, and answering specific questions about the content.

**Recommended Models:**

- Gemma 3  
- Qwen next  
- Qwen 3  
- Granite 4

### Programming and Development

Generation and optimization of code in multiple languages, debugging, refactoring, development of complete features, understanding of complex algorithmic implementations, and creation of unit tests

**Recommended models:**

- DeepCoder
- Qwen3 coder
- Granite 4
- Devstral

### Visual Analysis

Direct processing of images and visual documents without prior OCR preprocessing, interpretation of technical diagrams, charts, tables, drawings, and photos with generation of detailed textual explanations of the visual content

**Recommended Models:**

- deepseek-OCR
- Mistral Small 3.2
- Gemma 3
- Qwen 3 VL

### Security and Compliance

Applications requiring specific security capabilities; sensitive content filtering, reasoning traceability, GDPR/HDS compliance verification, risk minimization, vulnerability analysis, and adherence to industry-specific regulations

**Recommended models:**

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