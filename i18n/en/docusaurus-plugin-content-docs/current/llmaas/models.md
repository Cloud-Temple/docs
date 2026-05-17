---
title: AI Model Catalog
sidebar_position: 2
---

# Catalog of LLM as a Service Models

## Overview

Cloud Temple LLMaaS offers **56 large language models** carefully selected and optimized to meet the strictest **SecNumCloud** requirements. Our catalog covers the entire spectrum, from ultra-efficient micro-models to extremely large models.

### Global Statistics

| Metric | Value |
|----------|--------|
| **Total number of models** | 56 models |
| **Minimum context** | 512 tokens |
| **Maximum context** | 1,000,000 tokens |
| **Compliance** | SecNumCloud ✅ HDS ✅ Sovereignty ✅ C5 ✅ |
| **Location** | 100% France 🇫🇷 |

### Pricing

| Usage Type | Price |
|-------------------|------|
| **Input tokens** | 1.8€ / million tokens |
| **Output tokens** | 8€ / million tokens |
| **Advanced reasoning** | 8€ / million tokens |
| **Document reranking** | 4€ / million reranked tokens |
| **Asynchronous batch (input)** | 0.9€ / million tokens |
| **Asynchronous batch (output)** | 4€ / million tokens |

## Chat & Reasoning Models

General-purpose models for dialogue, analysis, reasoning, and multilingual tasks.

### cogito:32b
**Deep Cogito • 32B parameters • Context : 32,000 tokens**

Advanced analytical reasoning model, designed for decomposing complex problems and logical verification.

**Technical specifications:**
- **Speed** : 21 tokens/second
- **Consumption** : 6.32 kWh/million tokens
- **License** : [LLAMA 3.2 Community License](./licences/llama_3.2_community_licence.licence.md)
- **Region** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Safety

**Tags :** `Agent` `Raisonnement` `Compréhension` `Analyse`

**Use cases :**
- Multi-factorial scenario analysis
- Scientific problem solving with formal demonstration
- Expert systems (juridique, médical, technique)

---

### gemma3:27b
**Google • 27B parameters • Context : 120,000 tokens**

Google's multimodal model with integrated vision and support for 140+ languages. 120K token context.

**Technical specifications:**
- **Speed** : 23 tokens/second
- **Consumption** : 5.80 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Safety

**Tags :** `Vision` `Agent` `Long Context`

**Use cases :**
- Document analysis with extended context (120K tokens)
- Simultaneous processing of images and text
- Structured extraction from PDFs and scanned documents

---

### glm-4.7-flash:30b
**Zhipu AI • 30B parameters • Context : 120,000 tokens**

Fast model with an excellent performance/latency balance for reasoning and analysis.

**Technical specifications:**
- **Speed** : 88 tokens/second
- **Consumption** : 1.58 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags :** `Agent` `Fast` `Large Context` `Multilingual`

**Use cases :**
- Fast conversational assistants
- Long document analysis (120k tokens)
- Reasoning tasks with low latency

---

### gpt-oss:120b
**OpenAI • 120B parameters • Context: 120,000 tokens**

State-of-the-art open-weight model from OpenAI with configurable reasoning and transparent chain of thought.

**Technical specifications:**
- **Speed** : 94 tokens/second
- **Consumption** : 2.37 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Safety

**Tags:** `MoE` `Agent` `Reasoning` `Open-Source` `Very Large`

**Use cases:**
- Advanced conversational agents with complex reasoning
- Applications requiring transparency in the reasoning process
- Business scenarios requiring a permissive license

---

### gpt-oss:20b
**OpenAI • 20B parameters • Context: 120,000 tokens**

Compact version of the OpenAI model, optimized for fast inference with strong reasoning capabilities.

**Technical specifications:**
- **Speed** : 41 tokens/second
- **Consumption** : 3.25 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags :** `MoE` `Agent` `Reasoning` `Open-Source` `Compact` `Fast`

**Use cases :**
- Fast inference with strong reasoning capabilities
- Agentic use cases (function calling, web navigation, code execution)
- Applications with limited compute budget

---

### llama3.3:70b
**Meta • 70B parameters • Context: 132,000 tokens**

Meta's multilingual model, excelling in natural dialogue and nuanced understanding across 8 languages.

**Technical specifications:**
- **Speed**: 10 tokens/second
- **Consumption**: 13.33 kWh/million tokens
- **License**: [LLAMA 3.3 Community Licence](./licences/llama_3.3_community_licence.licence.md)
- **Localization**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Safety

**Tags:** `Agent` `Dialogue` `Multilingual`

**Use cases:**
- Multilingual chatbots (8 langues)
- Analysis of large legal or technical documents
- Generation of structured texts with high stylistic fidelity

---

### ministral-3:14b
**Mistral AI • 14B parameters • Context: 250,000 tokens**

The most powerful in the Ministral family, with advanced reasoning and coding. 250K token context.

**Technical specifications:**
- **Speed** : 28 tokens/second
- **Consumption** : 4.74 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `High Performance` `Reasoning` `Code`

**Use cases:**
- Complex problem solving
- Coding and engineering assistants
- In-depth document analysis with reasoning

---

### ministral-3:3b
**Mistral AI • 3B parameters • Context : 250,000 tokens**

Compact Mistral model, high-performing despite its small size. 250K token context.

**Technical specifications:**
- **Speed** : 22 tokens/second
- **Consumption** : 1.75 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Compact` `Efficient`

**Use cases :**
- Reactive personal assistants
- Fast classification and routing
- Simple tasks with large context

---

### ministral-3:8b
**Mistral AI • 8B parameters • Context: 250,000 tokens**

Intermediate Ministral model with an excellent performance/speed trade-off. 250K token context.

**Technical specifications:**
- **Speed** : 40 tokens/second
- **Consumption** : 3.33 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Safety

**Tags:** `Efficient` `Reasoning`

**Use cases:**
- Advanced conversational assistants
- Document analysis and information extraction
- Good speed/quality trade-off

---

### mistral-small3.2:24b
**Mistral AI • 24B parameters • Context: 128,000 tokens**

Mistral model with enhanced instruction following, robust function calling, and vision capabilities. Integrated problematic content detection.

**Technical specifications:**
- **Speed** : 28 tokens/second
- **Consumption** : 5.05 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags :** `Vision` `Agent` `Security` `Instruction Following`

**Use cases :**
- Reliable conversational agents with precise instruction following
- External tool integration via function calling
- Applications requiring native security filtering

---

### mistral-small4:119b
**Mistral AI • 119B parameters • Context : 262,144 tokens**

High-performance Mistral model (119B) with vision, built-in security, and a 262K token context. Fast (100 t/s).

**Technical specifications:**
- **Speed** : 100 tokens/second
- **Consumption** : 2.00 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Vision` `Agent` `Security` `Large Context` `Fast`

**Use cases:**
- High-performance conversational agents with vision
- Analysis of very long documents (262K tokens)
- Critical applications requiring reliability and security

---

### nemotron-3-super:120b
**NVIDIA • 120B parameters • Context: 1,000,000 tokens**

NVIDIA model optimized for collaborative agents, long reasoning, and high-volume workloads. 1M token context.

**Technical specifications:**
- **Speed** : 72 tokens/second
- **Consumption** : 1.93 kWh/million tokens
- **License** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags :** `Agent` `Reasoning` `Long Context`

**Use cases :**
- Autonomous agents with multiple tool calls
- High-volume workflow automation
- Long document analysis with precise extraction

---

### nemotron-cascade:30b
**NVIDIA • 30B parameters • Context: 1,000,000 tokens**

NVIDIA model specialized in mathematics (IMO 2025 gold medal) and problem decomposition. 1M token context.

**Technical specifications:**
- **Speed**: 130 tokens/second
- **Consumption**: 1.93 kWh/million tokens
- **License**: [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localization**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Safety

**Tags:** `Agent` `Reasoning` `Long Context` `Math`

**Use cases:**
- Solving complex mathematical problems
- Agents with multiple tool calls
- Long document analysis

---

### nemotron3-nano:30b
**NVIDIA • 30B parameters • Context: 1,000,000 tokens**

Ultra-fast NVIDIA model (160 t/s) with reasoning and function calling. 1M token context.

**Technical Specifications:**
- **Speed** : 160 tokens/second
- **Consumption** : 1.56 kWh/million tokens
- **License** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Safety

**Tags:** `Agent` `Reasoning` `Long Context` `Fast`

**Use Cases :**
- Autonomous agents requiring fast responses
- Logical reasoning and problem solving
- Long document analysis with precise extraction

---

### olmo-3:32b
**AllenAI • 32B parameters • Context : 65,536 tokens**

First fully open reasoning model at this scale. Total transparency (data, code, weights).

**Technical specifications:**
- **Speed** : 22 tokens/second
- **Consumption** : 5.98 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags :** `Open-Source` `Large Context` `Reasoning` `Transparent` `Code` `High Performance`

**Use cases :**
- Complex reasoning and multi-step problem solving
- Software development with decision process transparency
- Critical tasks requiring full auditability

---

### olmo-3:7b
**AllenAI • 7B parameters • Context : 65,536 tokens**

Fully open and efficient model, excelling in mathematics and programming with complete transparency.

**Technical specifications:**
- **Speed** : 35 tokens/second
- **Consumption** : 1.13 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Open-Source` `Grand Contexte` `Transparent` `Efficient` `Maths` `Code`

**Use cases :**
- Academic research requiring full reproducibility
- Programming and mathematical problem solving
- Document analysis with complete traceability

---

### qwen3-2507-think:4b
**Qwen Team • 4B parameters • Context: 250,000 tokens**

Compact model optimized for deep reasoning (logic, math, science, code). 250K token context.

**Technical specifications:**
- **Speed** : 55 tokens/second
- **Consumption** : 2.42 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Safety

**Tags :** `Agent` `Reasoning` `Large Context` `Compact` `Fast`

**Use cases :**
- Complex reasoning (logic, math, science, code)
- Agents with long conversation history (250K tokens)
- Analysis of large documents with deep reasoning

---

### qwen3-2507:235b
**Qwen Team • 235B parameters • Context: 200,000 tokens**

The most powerful model in the catalog (235B parameters, 22B active). Excels in mathematics, coding, and logical reasoning.

**Technical specifications:**
- **Speed**: 56 tokens/second
- **Consumption**: 3.97 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Safety

**Tags:** `MoE` `Agent` `Reasoning` `Very Large`

**Use cases:**
- Solving complex mathematical and logical problems
- Tasks requiring a vast knowledge base
- Advanced coding assistant

---

### qwen3-omni:30b
**Qwen Team • 30B parameters • Context: 32,768 tokens**

Native omni-modal model — simultaneously understands text, images, video, and audio.

**Technical specifications:**
- **Speed**: 19 tokens/second
- **Consumption**: 7.43 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Safety

**Tags:** `Omni` `Audio` `Vision` `Agent` `Multimodal`

**Use cases:**
- Multimodal interactions (text + image + audio + video)
- Combined video and audio analysis
- Next-generation intelligent assistants

---

### qwen3.5:0.8b
**Qwen Team • 0.8B parameters • Context : 250,000 tokens**

Ultra-lightweight model with an exceptional 250K token context — remarkable for a model of this size.

**Technical specifications:**
- **Speed** : 16 tokens/second
- **Consumption** : 2.39 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Compact` `Efficient` `Grand Contexte` `Multilingue`

**Use cases :**
- Text processing with very large context (250K tokens)
- Fast classification and sorting
- Lightweight assistants with large history

---

### qwen3.5:4b
**Qwen Team • 4B parameters • Context : 250,000 tokens**

Compact Qwen3.5 model with a good performance/efficiency balance and a 250K token context.

**Technical specifications:**
- **Speed** : 37 tokens/second
- **Consumption** : 3.64 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Safety

**Tags :** `Compact` `Efficient` `Large Context` `Multilingual`

**Use cases :**
- Conversational assistants with large context
- Text summarization and classification
- Simple coding tasks

---

### qwen3.5:9b
**Qwen Team • 9B parameters • Context: 250,000 tokens**

Intermediate Qwen3.5 model with solid reasoning and extended context up to 250K tokens.

**Technical specifications:**
- **Speed**: 32 tokens/second
- **Consumption**: 4.23 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Safety

**Tags:** `Efficient` `Long Context` `Multilingual` `Reasoning`

**Use cases:**
- Advanced conversational assistants
- Document analysis and information extraction
- Medium-complexity reasoning tasks

---

### qwen3.6:27b
**Qwen Team • 27B parameters • Context : 1,000,000 tokens**

General-purpose reference model with a native 1M token context. Excels in reasoning, instruction following, and multilingual tasks.

**Technical Specifications:**
- **Speed** : 80 tokens/second
- **Consumption** : 2.78 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags :** `Agent` `Large Context` `Multilingual` `Vision` `Reasoning`

**Use Cases :**
- Versatile assistants with precise instruction following
- Analysis of very large documents (1M tokens)
- Multilingual applications with logical reasoning
- Programming and code generation

---

### qwen3:0.6b
**Qwen Team • 0.6B parameters • Context: 40,000 tokens**

Ultra-fast micro-model for simple tasks and routing. 40K token context.

**Technical specifications:**
- **Speed** : 46 tokens/second
- **Consumption** : 1.33 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Compact` `Fast` `Efficient` `Multilingual`

**Use cases :**
- Fast classification and sorting
- Lightweight assistants with low latency
- Routing in multi-model architectures

---

## Programming & Agent Models

Models specialized in code, software engineering, and autonomous agents.

### devstral-small-2:24b
**Mistral AI & All Hands AI • 24B parameters • Context : 200,000 tokens**

State-of-the-art agentic model for software engineering. Near >100B model performance for code. Integrated vision.

**Technical specifications:**
- **Speed** : 33 tokens/second
- **Consumption** : 4.23 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ✅ Security

**Tags :** `Agent` `Programming` `Vision` `Open-Source` `Long Context` `Fast`

**Use cases :**
- Autonomous coding agents
- Rapid code refactoring
- Iterative engineering tasks

---

### functiongemma:270m
**Google • 270M parameters • Context: 32,768 tokens**

Micro-model specialized in function call detection. Ideal as a router in an agentic architecture.

**Technical specifications:**
- **Speed** : 40 tokens/second
- **Consumption** : 0.97 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Compact` `Efficient` `Function Calling`

**Use cases:**
- Tool router in an agentic architecture
- Function call intent detection
- Fast pre-filtering before routing

---

### qwen-coder-next:80b
**Qwen Team • 80B parameters • Context : 250,000 tokens**

State-of-the-art model for code and complex reasoning. 250K token context.

**Technical specifications:**
- **Speed** : 97 tokens/second
- **Consumption** : 2.29 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Safety

**Tags :** `Agent` `Programming` `MoE` `Long Context`

**Use cases :**
- Advanced programming assistant (repository scale)
- Complex code analysis and refactoring
- Autonomous software engineering agents

---

### qwen3-next:80b
**Qwen Team • 80B parameters • Context: 250,000 tokens**

Versatile 80B model optimized for long contexts, function calling, and structured reasoning.

**Technical specifications:**
- **Speed** : 67 tokens/second
- **Consumption** : 2.09 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Agent` `Grand Contexte` `MoE`

**Use cases:**
- Advanced conversational agents with tool integration
- Analysis of very large documents
- Code generation and structured reasoning

---

### qwen3.6:35b
**Qwen Team • 35B parameters • Context: 1,000,000 tokens**

Leader in agentic software engineering (SWE-bench 73.4%). 1M token context, integrated vision and tool calling.

**Technical specifications:**
- **Speed** : 121 tokens/second
- **Consumption** : 2.07 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags :** `Agent` `Programming` `Long Context` `MoE` `Vision` `Reasoning`

**Use cases :**
- Agentic coding assistant in IDEs (Cursor, Continue.dev, VS Code Copilot)
- Analysis of complete codebases (1M tokens)
- Automated code review and intelligent CI/CD
- Complex bug resolution with multi-step reasoning

---

### rnj-1:8b
**Essential AI • 8B parameters • Context : 32,000 tokens**

STEM-specialized model — excels in code (83.5% HumanEval+), mathematics, and sciences.

**Technical specifications:**
- **Speed** : 23 tokens/second
- **Consumption** : 1.69 kWh/million tokens
- **License** : [Open Weights](./licences/open_weights.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ✅ Reasoning • ❌ Security

**Tags:** `Code` `Maths` `STEM` `Reasoning` `Efficient`

**Use cases:**
- Advanced code generation
- Solving complex mathematical problems
- Scientific and technical tasks

---

## Vision & Multimodal Models

Models for image, video, OCR, and visual document analysis.

### deepseek-ocr
**DeepSeek AI • 3B parameters • Context: 8,192 tokens**

Specialized OCR model for high-precision text extraction with layout preservation (tables, formulas).

**Technical specifications:**
- **Speed** : 84 tokens/second
- **Consumption** : 0.66 kWh/million tokens
- **License** : [MIT license](./licences/mit_licence.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Vision` `OCR` `Efficient`

**Use cases :**
- Structured text extraction (Markdown/LaTeX) from images/PDFs
- Document scanning with tables and formulas

---

### gemma4:31b
**Google • 31B parameters • Context: 250,000 tokens**

Google's dense multimodal model, ranked 3rd globally on Arena AI. Advanced vision, reasoning, and coding. 250K token context.

**Technical Specifications:**
- **Speed**: 59 tokens/second
- **Consumption**: 3.77 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Safety

**Tags:** `Agent` `Grand Contexte` `Vision` `Raisonnement` `Multilingue` `Open-Source`

**Use Cases:**
- Autonomous agents with reasoning and tool calling
- Analysis of large documents with vision
- Visual understanding (OCR, graphiques, documents scannés)

---

### gemma4:e2b
**Google • 31B (E2B) parameters • Context: 128,000 tokens**

Ultra-fast (125 t/s) variant of Gemma 4 with vision. Excellent energy efficiency.

**Technical specifications:**
- **Speed**: 125 tokens/second
- **Consumption**: 1.11 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location**: FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Safety

**Tags:** `Vision` `Fast` `Efficient`

**Use cases:**
- Low-latency image analysis
- Large documents with reduced footprint

---

### gemma4:e4b
**Google • 31B (E4B) parameters • Context : 128,000 tokens**

Variant of Gemma 4 with a better quality/speed trade-off than the E2B version. Integrated vision.

**Technical specifications :**
- **Speed** : 85 tokens/second
- **Consumption** : 1.63 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities :**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Safety

**Tags :** `Vision` `Fast`

**Use cases :**
- Document and image analysis with a good quality/speed trade-off
- Fast alternative for vision tasks

---

### granite3.2-vision:2b
**IBM • 2B parameters • Context: 16,384 tokens**

Compact IBM Granite vision model for fast OCR and data extraction from scanned documents.

**Technical specifications:**
- **Speed** : 49 tokens/second
- **Consumption** : 0.80 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Compact` `Efficient` `OCR`

**Use cases:**
- Fast OCR on lightweight documents
- Data extraction from images
- Low-consumption visual analysis

---

### qwen3-vl:235b
**Qwen Team • 235B parameters • Context : 200,000 tokens**

The most powerful multimodal model in the catalog. State-of-the-art visual understanding and exceptional reasoning.

**Technical specifications:**
- **Speed** : 24 tokens/second
- **Consumption** : 5.56 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ✅ Reasoning • ❌ Security

**Tags :** `Agent` `Reasoning` `Long Context` `Vision`

**Use cases :**
- Complex document automation (multilingual OCR, structured extraction)
- Intelligent visual agents
- Advanced scientific analysis (STEM, spatial reasoning)
- Multimodal RAG on documents and videos

---

### qwen3-vl:2b
**Qwen Team • 2B parameters • Context: 250,000 tokens**

Ultra-compact vision model for fast OCR, object detection, and embedded applications.

**Technical specifications:**
- **Speed** : 64 tokens/second
- **Consumption** : 0.95 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Compact` `Efficient` `Multimodal` `OCR`

**Use cases:**
- Real-time image analysis
- Lightweight document OCR and reading
- Fast visual sorting and classification

---

### qwen3-vl:30b
**Qwen Team • 30B parameters • Context: 250,000 tokens**

High-performance multimodal model for OCR, object detection, video analysis, and spatio-temporal reasoning.

**Technical specifications:**
- **Speed** : 39 tokens/second
- **Consumption** : 3.39 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Safety

**Tags :** `Vision` `Agent` `Long Context` `Multimodal` `Video` `OCR`

**Use cases :**
- Long video analysis and intelligent surveillance
- Structured data extraction (documents, tables, charts)
- Visual assistants with spatial understanding

---

### qwen3-vl:32b
**Qwen Team • 32B parameters • Context : 250,000 tokens**

High-performance variant for the most demanding vision tasks. 250K token context.

**Technical specifications:**
- **Speed** : 17 tokens/second
- **Consumption** : 7.75 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Safety

**Tags :** `Vision` `Agent` `Long Context` `Multimodal` `Video` `OCR`

**Use cases :**
- Scientific and technical analysis of high-resolution images
- Automation of complex visual processes
- Detailed understanding of dynamic scenes

---

### qwen3-vl:4b
**Qwen Team • 4B parameters • Context : 250,000 tokens**

Compact and fast vision model for document analysis and video understanding.

**Technical specifications:**
- **Speed** : 57 tokens/second
- **Consumption** : 2.34 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Safety

**Tags :** `Vision` `Compact` `Multimodal` `Efficient` `Video` `OCR`

**Use cases :**
- Automated document analysis (invoices, forms)
- Video content understanding
- Interactive visual assistants

---

### qwen3-vl:8b
**Qwen Team • 8B parameters • Context: 250,000 tokens**

Intermediate vision model — a good balance between performance and footprint. 250K token context.

**Technical specifications:**
- **Speed** : 39 tokens/second
- **Consumption** : 3.38 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
✅ Tools/Agent • ✅ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Vision` `Multimodal` `Efficient` `Video` `OCR`

**Use cases:**
- Automated document analysis
- Video content understanding
- Interactive visual assistants

---

## Embedding Models

Models for semantic search and Retrieval-Augmented Generation (RAG).

### bge-m3:567m
**BAAI • 567M parameters • Context : 8,192 tokens**

State-of-the-art multilingual embedding (100+ languages). Supports dense, sparse, and multi-vector search.

**Technical specifications:**
- **Speed** : 171 tokens/second
- **Consumption** : 0.36 kWh/million tokens
- **License** : [MIT](./licences/mit.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Multilingual` `Efficient`

**Use cases:**
- Multilingual semantic search
- Retrieval-Augmented Generation (RAG)
- Document clustering and classification

---

### embeddinggemma:300m
**Google • 300M parameters • Context: 2,048 tokens**

Google multilingual embedding (100+ languages), optimized for search and semantic retrieval.

**Technical specifications:**
- **Speed** : 175 tokens/second
- **Consumption** : 0.35 kWh/million tokens
- **License** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Semantic` `Efficient` `Multilingual`

**Use cases:**
- Search and information retrieval
- Document classification and clustering
- Semantic similarity search

---

### granite-embedding:278m
**IBM • 278M parameters • Context: 512 tokens**

Ultra-compact IBM embedding for minimal-latency semantic search.

**Technical specifications:**
- **Speed** : 196.3 tokens/second
- **Consumption** : 0.31 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Embedding` `Compact` `Efficient`

**Use cases:**
- High-frequency semantic search
- Document clustering

---

### qwen3-embedding:0.6b
**Qwen Team • 0.6B parameters • Context : 32,768 tokens**

Ultra-lightweight and fast embedding for low-latency semantic search.

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : 0.57 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Embedding` `Compact` `Efficient`

**Use cases :**
- Fast semantic search
- Real-time text classification

---

### qwen3-embedding:4b
**Qwen Team • 4B parameters • Context: 40,000 tokens**

High-performance embedding with deep semantic understanding and extended context (40K tokens).

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : 0.57 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Embedding` `Large Context` `Efficient`

**Use cases :**
- Semantic search on long documents
- RAG with extended context
- High-precision semantic analysis

---

### qwen3-embedding:8b
**Qwen Team • 8B parameters • Context: 40,000 tokens**

High-capacity embedding with the best semantic understanding in the Qwen3 family. Extended context (40K tokens).

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : 0.57 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Embedding` `Large Context` `High Performance`

**Use cases :**
- High-precision semantic search
- Advanced RAG with extended context
- Semantic analysis of complex documents

---

## Reranking Models

Models for reranking results in RAG pipelines.

### bge-reranker-large
**BAAI • 335M parameters • Context: 512 tokens**

High-performance reranking model from the BGE family, multilingual.

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : N/A
- **License** : [MIT](./licences/mit.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Reranker` `High Performance`

**Use Cases :**
- Multilingual reranking for RAG

---

### nvidia/llama-nemotron-rerank-vl-1b-v2
**NVIDIA • 1B parameters • Context : 4,096 tokens**

Cohere API-compatible reranking model (/v1/rerank and /v2/rerank). Ranks documents by relevance to a query.

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : N/A
- **License** : [NVIDIA Open Model License](./licences/nvidia_open_model_license.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Safety

**Tags:** `Rerank` `RAG` `Compact`

**Use cases:**
- Reordering of semantic search results
- Refining relevance in RAG pipelines

---

### qwen3-reranker:0.6b
**Qwen Team • 0.6B parameters • Context: 4,096 tokens**

Compact and efficient reranking model for fast reordering.

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : N/A
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Safety

**Tags :** `Reranker` `Compact` `Efficient`

**Use cases :**
- Fast reordering for RAG

---

### qwen3-reranker:4b
**Qwen Team • 4B parameters • Context : 4,096 tokens**

High-performance reranking model with strong contextual understanding capabilities.

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : N/A
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Reranker` `Performance`

**Use cases:**
- High-quality reranking for RAG

---

## Security Models

Models for content filtering, compliance, and guardrails.

### granite3-guardian:2b
**IBM • 2B parameters • Context: 8,192 tokens**

Compact version of the Granite Guardian security model for low-latency filtering.

**Technical specifications:**
- **Speed** : 60 tokens/second
- **Consumption** : 0.65 kWh/million tokens
- **License** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Security` `Guardrails` `Compact` `Efficient`

**Use cases:**
- Low-latency guardrails in agentic workflows
- Real-time security filtering

---

### granite3-guardian:8b
**IBM • 8B parameters • Context: 8,192 tokens**

Security model specialized in detecting problematic content, jailbreaks, and regulatory compliance.

**Technical specifications:**
- **Speed**: 45 tokens/second
- **Consumption**: 3.09 kWh/million tokens
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localization**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ✅ Security

**Tags:** `Security` `Guardrails` `Compliance` `Filtering`

**Use cases:**
- Detection of problematic content and jailbreaks
- Pre/post-generation security filtering
- Regulatory compliance (RGPD, HDS)

---

## Translation Models

Models specialized in high-fidelity multilingual translation.

### translategemma:12b
**Google • 12B parameters • Context: 128,000 tokens**

High-fidelity translation for 55 languages with a 128K token context.

**Technical Specifications:**
- **Speed**: 27 tokens/second
- **Consumption**: 4.87 kWh/million tokens
- **License**: [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localization**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `Translation` `Multilingual` `Specialized`

**Use Cases:**
- Long document translation
- Cross-language communication
- Content localization

---

### translategemma:27b
**Google • 27B parameters • Context : 120,000 tokens**

High-performance translation for 55 languages. Superior quality for complex and technical content.

**Technical specifications:**
- **Speed** : 17 tokens/second
- **Consumption** : 7.84 kWh/million tokens
- **License** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Safety

**Tags:** `Translation` `Multilingual` `Specialized` `High Performance`

**Use cases:**
- High-precision translation
- Technical document translation
- Literary and cultural nuances

---

### translategemma:4b
**Google • 4B parameters • Context : 128,000 tokens**

Fast and efficient translation for 55 languages. Ideal for real-time localization.

**Technical specifications:**
- **Speed** : 31 tokens/second
- **Consumption** : 1.25 kWh/million tokens
- **License** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localization** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags :** `Translation` `Multilingual` `Specialized` `Efficient`

**Use cases :**
- Fast text translation
- Real-time localization
- Budget-limited translation

---

## Audio & Image Models

Models for audio transcription and image generation.

### voxtral
**Mistral AI • 4B parameters • Context: 32,768 tokens**

Real-time audio transcription via WebSocket. Streaming speech recognition with low latency.

**Technical specifications:**
- **Speed**: N/A
- **Consumption**: N/A
- **License**: [Apache 2.0](./licences/apache_2.0.licence.md)
- **Region**: FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Security

**Tags:** `ASR` `Audio` `Realtime` `WebSocket`

**Use cases:**
- Real-time audio transcription (streaming)
- Voice assistants
- Live captioning

---

### z-image:16b
**Community • 16B parameters • Context : 0 tokens**

Image generation from text prompts, compatible with OpenAI API /v1/images/generations.

**Technical specifications:**
- **Speed** : N/A
- **Consumption** : N/A
- **License** : [Open Weights](./licences/open_weights.licence.md)
- **Location** : FR 🇫🇷

**Capabilities:**
❌ Tools/Agent • ❌ Vision • ❌ Reasoning • ❌ Safety

**Tags :** `Image Generation` `Creative` `Multimodal`

**Use cases :**
- Image generation from text descriptions
- Visual content creation
- Rapid visual prototyping

---

## Recommended Use Cases

### Multilingual Dialogue

Chatbots and assistants capable of communicating in multiple languages with automatic detection and context preservation

**Recommended models:**

- nemotron-3-super:120b
- qwen3.6:27b
- nemotron3-nano:30b
- gpt-oss:120b

### Long document analysis

Processing large documents (>100 pages) with key information extraction, summaries, and question answering

**Recommended models:**

- nemotron-3-super:120b
- qwen3.6:27b
- qwen3-2507:235b

### Programming and development

Code generation, optimization, and debugging across multiple languages, refactoring, and test creation

**Recommended models:**

- qwen3.6:35b
- qwen-coder-next:80b
- devstral-small-2:24b
- nemotron-3-super:120b

### Visual Analysis

Image and visual document processing, OCR, chart and table interpretation

**Recommended models:**

- qwen3-vl:235b
- gemma4:31b
- deepseek-ocr
- qwen3-vl:30b

### Security and Compliance

Sensitive content filtering, jailbreak detection, GDPR/HDS compliance

**Recommended models:**

- granite3-guardian:8b
- granite3-guardian:2b
- mistral-small4:119b

### Lightweight Deployments

Applications requiring minimal footprint, low latency, and low resource consumption

**Recommended models:**

- qwen3.5:0.8b
- qwen3-vl:2b
- ministral-3:3b

### RAG (Retrieval-Augmented Generation)

Complete pipelines for semantic search, reranking, and retrieval-augmented generation

**Recommended models:**

- bge-m3:567m
- nvidia/llama-nemotron-rerank-vl-1b-v2
- qwen3.6:27b